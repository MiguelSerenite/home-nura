/**
 * Finds the per-locale objects of the code base — object literals such as
 * `{ fr: '…', en: '…', de: '…', es: '…', it: '…', nl: '…' }` — so a new
 * locale can be added mechanically: extract-locale.ts lists them for
 * translation, insert-locale.ts writes the new key after the last one.
 *
 * Only literal values are handled (strings, template literals without
 * `${}`, numbers, booleans, and arrays/objects of those). Anything else
 * (functions, expressions) is reported as manual work.
 */
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { isDeepStrictEqual } from 'node:util'
import ts from 'typescript'

export type LiteralValue = string | number | boolean | null | LiteralValue[] | { [key: string]: LiteralValue }

export interface LocaleObject {
  /** n-th locale object of the file, in source order. */
  index: number
  /** Readable location, e.g. QUICK_ANSWERS.robot-aspirateur.picks[0].role */
  path: string
  /** Values per locale, or null when the value is not a plain literal. */
  values: Record<string, LiteralValue | null>
  /** The property after which the new locale is inserted. */
  anchor: ts.PropertyAssignment
  /** True when the anchor value is a template literal (keeps backticks on insert). */
  anchorIsTemplate: boolean
  /** True when the object already has the target locale. */
  hasTarget: boolean
}

export function fileHash(text: string): string {
  return createHash('sha256').update(text).digest('hex').slice(0, 16)
}

export function propertyName(name: ts.PropertyName): string | undefined {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) return name.text
  return undefined
}

/** Plain literal value of a node, or undefined when it is not one. */
export function literalValue(node: ts.Expression): LiteralValue | undefined {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text
  if (ts.isNumericLiteral(node)) return Number(node.text)
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false
  if (node.kind === ts.SyntaxKind.NullKeyword) return null
  if (ts.isParenthesizedExpression(node) || ts.isAsExpression(node) || ts.isSatisfiesExpression(node)) {
    return literalValue(node.expression)
  }
  if (ts.isArrayLiteralExpression(node)) {
    const items = node.elements.map((e) => literalValue(e))
    return items.every((v) => v !== undefined) ? (items as LiteralValue[]) : undefined
  }
  if (ts.isObjectLiteralExpression(node)) {
    const out: Record<string, LiteralValue> = {}
    for (const prop of node.properties) {
      if (!ts.isPropertyAssignment(prop)) return undefined
      const key = propertyName(prop.name)
      const value = literalValue(prop.initializer)
      if (key === undefined || value === undefined) return undefined
      out[key] = value
    }
    return out
  }
  return undefined
}

/** Readable path of a node from the file root (variable, keys, indices). */
export function nodePath(node: ts.Node): string {
  const parts: string[] = []
  let current: ts.Node = node
  while (current.parent) {
    const parent: ts.Node = current.parent
    if (ts.isPropertyAssignment(parent) && parent.initializer === current) {
      parts.unshift(propertyName(parent.name) ?? '?')
    } else if (ts.isArrayLiteralExpression(parent)) {
      const i = parent.elements.indexOf(current as ts.Expression)
      parts.unshift(`[${i}]`)
    } else if (ts.isVariableDeclaration(parent) && ts.isIdentifier(parent.name)) {
      parts.unshift(parent.name.text)
    } else if ((ts.isFunctionDeclaration(parent) || ts.isMethodDeclaration(parent)) && parent.name) {
      parts.unshift(`${parent.name.getText()}()`)
    }
    current = parent
  }
  return parts.join('.').replace(/\.\[/g, '[')
}

/** Parses `text` as the TypeScript (or TSX, by extension) file `file`. */
export function parseText(file: string, text: string): ts.SourceFile {
  const kind = file.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS
  return ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, kind)
}

export function parseSource(file: string): { text: string; source: ts.SourceFile } {
  const text = readFileSync(file, 'utf8')
  return { text, source: parseText(file, text) }
}

/**
 * Locale objects of a parsed file: every object literal that has all of
 * `sourceLangs`. `anchorLang` is the key after which `target` is inserted.
 */
export function findLocaleObjects(
  source: ts.SourceFile,
  sourceLangs: readonly string[],
  anchorLang: string,
  target: string,
): LocaleObject[] {
  const found: LocaleObject[] = []
  const visit = (node: ts.Node) => {
    if (ts.isObjectLiteralExpression(node)) {
      const props = new Map<string, ts.PropertyAssignment>()
      for (const p of node.properties) {
        if (!ts.isPropertyAssignment(p)) continue
        const key = propertyName(p.name)
        if (key) props.set(key, p)
      }
      const anchor = props.get(anchorLang)
      if (anchor && sourceLangs.every((l) => props.has(l))) {
        const values: Record<string, LiteralValue | null> = {}
        for (const lang of [...sourceLangs, target]) {
          const prop = props.get(lang)
          if (prop) values[lang] = literalValue(prop.initializer) ?? null
        }
        found.push({
          index: found.length,
          path: nodePath(node),
          values,
          anchor,
          anchorIsTemplate: ts.isNoSubstitutionTemplateLiteral(anchor.initializer),
          hasTarget: props.has(target),
        })
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  return found
}

export interface LocaleTernary {
  /** n-th locale ternary chain of the file, in source order. */
  index: number
  path: string
  /** Literal per tested locale; `en` holds the final fallback branch. */
  values: Record<string, LiteralValue | null>
  /** Where `<lang> === '<target>' ? … :` goes: the fallback after the anchor test. */
  insertAt: number
  /** The anchor locale's branch (`'Strona główna'` in `lang === 'pl' ? 'Strona główna' : …`). */
  anchorValue: ts.Expression
  /** The tested expression, e.g. `lang`. */
  subject: string
  /** Quote character of the anchor branch. */
  quote: "'" | '"' | '`'
  hasTarget: boolean
}

/** `<subject> === '<lang>'` → [subject text, lang], else undefined. */
function localeTest(node: ts.Expression): [string, string] | undefined {
  if (!ts.isBinaryExpression(node) || node.operatorToken.kind !== ts.SyntaxKind.EqualsEqualsEqualsToken) return undefined
  if (!ts.isStringLiteral(node.right)) return undefined
  return [node.left.getText(), node.right.text]
}

/**
 * Locale ternary chains such as
 * `lang === 'fr' ? 'Accueil' : … : lang === 'nl' ? 'Home' : 'Home'`, found
 * by their anchor test (`=== 'nl'`); the last branch is the English fallback.
 */
export function findLocaleTernaries(source: ts.SourceFile, anchorLang: string, target: string): LocaleTernary[] {
  const found: LocaleTernary[] = []
  const visit = (node: ts.Node) => {
    const test = ts.isConditionalExpression(node) ? localeTest(node.condition) : undefined
    if (ts.isConditionalExpression(node) && test && test[1] === anchorLang) {
      const values: Record<string, LiteralValue | null> = { [anchorLang]: literalValue(node.whenTrue) ?? null }
      let top: ts.ConditionalExpression = node
      while (ts.isConditionalExpression(top.parent) && top.parent.whenFalse === top) {
        top = top.parent
        const parentTest = localeTest(top.condition)
        if (parentTest) values[parentTest[1]] = literalValue(top.whenTrue) ?? null
      }
      const fallback = node.whenFalse
      const fallbackTest = ts.isConditionalExpression(fallback) ? localeTest(fallback.condition) : undefined
      values.en = fallbackTest ? null : (literalValue(fallback) ?? null)
      const anchorText = node.whenTrue.getText()
      found.push({
        index: found.length,
        path: nodePath(top),
        values,
        insertAt: fallback.getStart(),
        anchorValue: node.whenTrue,
        subject: test[0],
        quote: anchorText.startsWith('"') ? '"' : anchorText.startsWith('`') ? '`' : "'",
        hasTarget: fallbackTest?.[1] === target,
      })
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  return found
}

/** What extract-locale.ts recorded about a unit: where it was and its French source. */
export interface UnitKey {
  path: string
  fr: LiteralValue
}

/**
 * The object or ternary chain a unit was extracted from: the one at its
 * recorded index when its path and French source still match, else the
 * only one of the file with that path and French source (indices shift
 * when an earlier locale object of the file is removed). Undefined when
 * the source changed or several candidates match.
 */
export function locateUnit<T extends { path: string; values: Record<string, LiteralValue | null> }>(
  candidates: readonly T[],
  index: number,
  unit: UnitKey,
): T | undefined {
  const matches = (c: T) => c.path === unit.path && isDeepStrictEqual(c.values.fr, unit.fr)
  const atIndex = candidates[index]
  if (atIndex && matches(atIndex)) return atIndex
  const found = candidates.filter(matches)
  return found.length === 1 ? found[0] : undefined
}
