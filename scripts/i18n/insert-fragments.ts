/**
 * Inserts the hand-written entries of a new locale: the per-locale objects
 * extract-locale.ts reports as manual (their values are code, e.g.
 * template functions), the HTML of articles kept in their own consts, and
 * the locale's category heads module. Usage:
 *
 *   npx tsx scripts/i18n/insert-fragments.ts <locale> <manual-dir>
 *
 * <manual-dir> may hold:
 * - `<name>.ts.txt`: the `<locale>: …,` property of the object
 *   FRAGMENT_TARGETS[name] names (e.g. content.heroTemplates.ts.txt);
 * - `<slug>.html`: the article of lib/blog/articles/<slug>.ts, whose
 *   `content` values are consts (`pl: contentPl`, or shorthand `pl`): adds
 *   the locale's const (contentSv, or sv) and its key;
 * - `category-heads.ts`: copied to lib/catalog/category-heads/<locale>.ts,
 *   imported and keyed in CATEGORY_HEADS.
 * JSON files (units for insert-locale.ts) are ignored.
 *
 * Each entry goes right after the last locale of LOCALE_ORDER the object
 * already has, so keys end up as pl, sv, us, ca whatever the insertion
 * order. An entry is refused (the file is left as it is) when it is not
 * one property named after the locale, when the object already has the
 * locale, or when the file would no longer parse.
 */
import { copyFileSync, existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import ts from 'typescript'
import { lineIndent, quoteString } from './literal-source'
import { nodePath, parseText, propertyName } from './locale-objects'

/** Key order of the locales a new one is inserted after. */
export const LOCALE_ORDER = ['pl', 'sv', 'us', 'ca'] as const

interface FragmentTarget {
  file: string
  /** Path of the per-locale object, as extract-locale.ts prints it. */
  path: string
}

const BLACK_FRIDAY_COPY: Readonly<Record<string, string>> = {
  airfryers: 'AIRFRYERS_COPY',
  'aspirateurs-balais': 'STICK_VACUUMS_COPY',
  'aspirateurs-robots': 'ROBOT_VACUUMS_COPY',
  'cafetieres-a-grain': 'BEAN_TO_CUP_COPY',
  hub: 'HUB_COPY',
  'radiateurs-connectes': 'HEATERS_COPY',
  thermostats: 'THERMOSTATS_COPY',
  ui: 'UI',
}

const CONTENT_TEMPLATES = ['heroTemplates', 'faqTemplates', 'personaGuideTemplates', 'problemTemplates', 'bestForTemplates']

/** Fragment name (file name without `.ts.txt`) → the object it goes into. */
export const FRAGMENT_TARGETS: Readonly<Record<string, FragmentTarget>> = {
  'probleme-detail.uiStrings': { file: 'app/[lang]/guides/probleme/[problem]/page.tsx', path: 'uiStrings' },
  'probleme-index.uiStrings': { file: 'app/[lang]/guides/probleme/page.tsx', path: 'uiStrings' },
  'CategoryHub.uiStrings': { file: 'components/CategoryHub.tsx', path: 'uiStrings' },
  'ProductGallery.THUMB_LABEL': { file: 'components/ProductGallery.tsx', path: 'THUMB_LABEL' },
  'SmartKitchenQuiz.dicts': { file: 'components/SmartKitchenQuiz.tsx', path: 'dicts' },
  'amazon-affiliation-notice.NOTICES': { file: 'lib/amazon-affiliation-notice.ts', path: 'NOTICES' },
  'category-guides.TEMPLATES': { file: 'lib/catalog/category-guides.ts', path: 'TEMPLATES' },
  ...Object.fromEntries(
    Object.entries(BLACK_FRIDAY_COPY).map(([slug, path]) => [`bf.${slug}`, { file: `lib/black-friday/copy/${slug}.ts`, path }]),
  ),
  ...Object.fromEntries(CONTENT_TEMPLATES.map((path) => [`content.${path}`, { file: 'lib/catalog/content.ts', path }])),
}

const HEADS_DIR = 'lib/catalog/category-heads'

type Member = ts.ObjectLiteralElementLike

function memberName(member: Member): string | undefined {
  return ts.isSpreadAssignment(member) ? undefined : propertyName(member.name)
}

/** The locales of LOCALE_ORDER a new `locale` goes after. */
function localesBefore(locale: string, where: string): readonly string[] {
  const order = LOCALE_ORDER as readonly string[]
  const position = order.indexOf(locale)
  if (position < 1) throw new Error(`${where}: ${locale} is not one of ${order.slice(1).join(', ')}`)
  return order.slice(0, position)
}

/** The one object literal at `path` (as extract-locale.ts prints paths) that has a pl key. */
function localeObjectAt(source: ts.SourceFile, path: string, where: string): ts.ObjectLiteralExpression {
  const found: ts.ObjectLiteralExpression[] = []
  const visit = (node: ts.Node) => {
    if (ts.isObjectLiteralExpression(node) && nodePath(node) === path && node.properties.some((m) => memberName(m) === LOCALE_ORDER[0])) {
      found.push(node)
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  if (found.length !== 1) throw new Error(`${where}: ${found.length} objects with a ${LOCALE_ORDER[0]} key at this path`)
  return found[0]
}

/** Number of syntax errors of `text` parsed as `file`. */
function syntaxErrors(file: string, text: string): number {
  const { diagnostics = [] } = ts.transpileModule(text, {
    fileName: file,
    reportDiagnostics: true,
    compilerOptions: { jsx: ts.JsxEmit.Preserve, target: ts.ScriptTarget.ESNext },
  })
  return diagnostics.length
}

/** The member of LOCALE_ORDER, before `locale`, that the new entry follows. */
function anchorMember(members: readonly Member[], locale: string, where: string): Member {
  const before = localesBefore(locale, where)
  if (members.some((m) => memberName(m) === locale)) throw new Error(`${where}: already has ${locale}`)
  const anchor = members.filter((m) => before.includes(memberName(m) ?? '')).at(-1)
  if (!anchor) throw new Error(`${where}: no ${LOCALE_ORDER[0]} entry to insert after`)
  return anchor
}

/** The property text, without surrounding blank space and trailing comma, once checked. */
function checkedProperty(file: string, property: string, locale: string, where: string): string {
  const body = property.trim().replace(/,$/, '').trimEnd()
  const wrapper = `({\n${body}\n})`
  const object = parseText(file, wrapper).statements[0]
  const literal =
    object && ts.isExpressionStatement(object) && ts.isParenthesizedExpression(object.expression)
      ? object.expression.expression
      : undefined
  const members = literal && ts.isObjectLiteralExpression(literal) ? literal.properties : undefined
  if (syntaxErrors(file, wrapper) > 0 || !members || members.length !== 1 || memberName(members[0]) !== locale) {
    throw new Error(`${where}: the fragment must be one property named ${locale}`)
  }
  return body
}

/**
 * Inserts `property` (code such as `sv: (n) => \`…\``) into the object
 * literal at `objectPath` of `file`, after its last LOCALE_ORDER locale.
 */
export function insertProperty(file: string, text: string, objectPath: string, locale: string, property: string): string {
  const where = `${file} ${objectPath}`
  const source = parseText(file, text)
  const object = localeObjectAt(source, objectPath, where)
  const members = object.properties
  const anchor = anchorMember(members, locale, where)
  const body = checkedProperty(file, property, locale, where)

  const previous = members[members.indexOf(anchor) - 1] ?? object
  const line = (node: ts.Node) => source.getLineAndCharacterOfPosition(node.getStart(source)).line
  const insert = line(anchor) === line(previous) ? `, ${body}` : `,\n${lineIndent(anchor, source, text)}${body}`
  const next = text.slice(0, anchor.getEnd()) + insert + text.slice(anchor.getEnd())
  if (syntaxErrors(file, next) > syntaxErrors(file, text)) throw new Error(`${where}: the file no longer parses with the fragment`)
  return next
}

/** Top-level `const <name> = …` statement of a file. */
function constStatement(source: ts.SourceFile, name: string): ts.VariableStatement | undefined {
  return source.statements.find(
    (s): s is ts.VariableStatement =>
      ts.isVariableStatement(s) && s.declarationList.declarations.some((d) => ts.isIdentifier(d.name) && d.name.text === name),
  )
}

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

/**
 * Adds an article's HTML in `locale`: a template-literal const after the
 * const of the last LOCALE_ORDER locale (contentPl → contentSv; shorthand
 * `pl` → `sv`), and its key in `article.content`.
 */
export function insertArticleContent(file: string, text: string, locale: string, html: string): string {
  const where = `${file} article.content`
  const source = parseText(file, text)
  const content = localeObjectAt(source, 'article.content', where)
  const anchor = anchorMember(content.properties, locale, where)
  const anchorConst = ts.isShorthandPropertyAssignment(anchor)
    ? anchor.name.text
    : ts.isPropertyAssignment(anchor) && ts.isIdentifier(anchor.initializer)
      ? anchor.initializer.text
      : undefined
  const anchorLocale = memberName(anchor) ?? ''
  if (!anchorConst || !anchorConst.endsWith(anchorLocale === anchorConst ? anchorLocale : capitalize(anchorLocale))) {
    throw new Error(`${where}: the ${anchorLocale} entry is not a const named after its locale`)
  }
  const name = ts.isShorthandPropertyAssignment(anchor) ? locale : anchorConst.slice(0, -anchorLocale.length) + capitalize(locale)
  const statement = constStatement(source, anchorConst)
  if (!statement) throw new Error(`${where}: no top-level const ${anchorConst}`)
  if (constStatement(source, name)) throw new Error(`${where}: const ${name} already exists`)

  const withConst =
    text.slice(0, statement.getEnd()) +
    `\n\nconst ${name} = ${quoteString(html.trimEnd(), '`')}` +
    text.slice(statement.getEnd())
  const property = ts.isShorthandPropertyAssignment(anchor) ? name : `${locale}: ${name}`
  return insertProperty(file, withConst, 'article.content', locale, property)
}

/** The only exported const of a category heads module (`export const SV_HEADS: CategoryHeads = …`). */
export function headsExportName(file: string, moduleText: string): string {
  const names = parseText(file, moduleText)
    .statements.filter(
      (s): s is ts.VariableStatement =>
        ts.isVariableStatement(s) && (s.modifiers ?? []).some((m) => m.kind === ts.SyntaxKind.ExportKeyword),
    )
    .flatMap((s) => s.declarationList.declarations.map((d) => (ts.isIdentifier(d.name) ? d.name.text : '')))
  if (names.length !== 1 || !names[0]) throw new Error(`${file}: expected one exported const, found ${names.length}`)
  return names[0]
}

/**
 * Wires the category heads of `locale` (module `./<locale>`, export
 * `exportName`) into category-heads/index.ts: import after the last
 * LOCALE_ORDER locale's import, key in CATEGORY_HEADS.
 */
export function insertCategoryHeads(indexText: string, locale: string, exportName: string): string {
  const file = `${HEADS_DIR}/index.ts`
  const source = parseText(file, indexText)
  const before = localesBefore(locale, file)
  const anchorImport = source.statements
    .filter(
      (s): s is ts.ImportDeclaration =>
        ts.isImportDeclaration(s) && ts.isStringLiteral(s.moduleSpecifier) && before.includes(s.moduleSpecifier.text.replace('./', '')),
    )
    .at(-1)
  if (!anchorImport) throw new Error(`${file}: no import of ${before.join(' / ')} heads to insert after`)
  const withImport =
    indexText.slice(0, anchorImport.getEnd()) +
    `\nimport { ${exportName} } from './${locale}'` +
    indexText.slice(anchorImport.getEnd())
  return insertProperty(file, withImport, 'CATEGORY_HEADS', locale, `${locale}: ${exportName}`)
}

/** Applies one file of <manual-dir>; returns what it did. */
function applyManualFile(locale: string, dir: string, name: string): string {
  const path = join(dir, name)
  const update = (file: string, change: (text: string) => string) => writeFileSync(file, change(readFileSync(file, 'utf8')))
  if (name.endsWith('.ts.txt')) {
    const target = FRAGMENT_TARGETS[name.slice(0, -'.ts.txt'.length)]
    if (!target) throw new Error(`${name}: unknown fragment (known: ${Object.keys(FRAGMENT_TARGETS).join(', ')})`)
    update(target.file, (text) => insertProperty(target.file, text, target.path, locale, readFileSync(path, 'utf8')))
    return `${name} → ${target.file} ${target.path}`
  }
  if (name.endsWith('.html')) {
    const file = `lib/blog/articles/${name.slice(0, -'.html'.length)}.ts`
    if (!existsSync(file)) throw new Error(`${name}: no article ${file}`)
    update(file, (text) => insertArticleContent(file, text, locale, readFileSync(path, 'utf8')))
    return `${name} → ${file} article.content`
  }
  if (name === 'category-heads.ts') {
    const headsModule = `${HEADS_DIR}/${locale}.ts`
    if (existsSync(headsModule)) throw new Error(`${name}: ${headsModule} already exists`)
    const exportName = headsExportName(path, readFileSync(path, 'utf8'))
    const index = `${HEADS_DIR}/index.ts`
    const wired = insertCategoryHeads(readFileSync(index, 'utf8'), locale, exportName)
    copyFileSync(path, headsModule)
    writeFileSync(index, wired)
    return `${name} → ${headsModule} (${exportName}), wired in ${index}`
  }
  throw new Error(`${name}: not a fragment (.ts.txt), an article (.html) or category-heads.ts`)
}

function main() {
  const [locale, dir] = process.argv.slice(2)
  if (!locale || !dir) throw new Error('usage: insert-fragments.ts <locale> <manual-dir>')
  const names = readdirSync(dir).filter((name) => !name.endsWith('.json') && !name.startsWith('.'))
  const problems: string[] = []
  for (const name of names.sort()) {
    try {
      console.log(applyManualFile(locale, dir, name))
    } catch (error) {
      problems.push(error instanceof Error ? error.message : String(error))
    }
  }
  problems.forEach((p) => console.error(p))
  console.log(`${names.length - problems.length} inserted, ${problems.length} skipped`)
  if (problems.length) process.exitCode = 1
}

if (process.argv[1]?.endsWith('insert-fragments.ts')) main()
