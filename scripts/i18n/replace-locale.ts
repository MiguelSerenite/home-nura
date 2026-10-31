/**
 * Replaces the values of a locale the per-locale objects already carry,
 * e.g. native corrections of the Polish text. Usage:
 *
 *   npx tsx scripts/i18n/replace-locale.ts pl <units.json> <corrections-dir>
 *
 * <units.json> is the dump the reviewers worked from: for each unit its id
 * ("lib/x.ts::12", "lib/x.ts::t3" for a ternary chain), path, French source
 * and, under the locale's key, the value they reviewed. <corrections-dir>
 * holds JSON files (searched recursively) mapping unit ids to the full new
 * value. Ids shift when objects are added or removed, so a unit is found by
 * its path and French source (locateUnit), and it is only written when that
 * French source and the reviewed value are still in the file: edits made
 * since the dump are never clobbered. Only the strings that change are
 * rewritten, in place, so layout, quotes and comments stay as they are;
 * a correction shaped differently from the current value is refused.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { isDeepStrictEqual } from 'node:util'
import ts from 'typescript'
import { SOURCE_LANGS } from './extract-locale'
import { quoteString, readTranslations, type Quote } from './literal-source'
import {
  findLocaleObjects,
  findLocaleTernaries,
  literalValue,
  locateUnit,
  parseText,
  propertyName,
  type LiteralValue,
} from './locale-objects'

/** A unit of the reviewers' dump; the reviewed locale's value sits under its key. */
export interface ReviewedUnit {
  id: string
  path: string
  fr: LiteralValue
  [locale: string]: LiteralValue | undefined
}

interface Edit {
  start: number
  end: number
  text: string
}

export interface ReplaceResult {
  text: string
  /** Ids whose value was rewritten. */
  applied: string[]
  /** Ids whose correction equals the current value. */
  unchanged: string[]
  /** Ids left as they are, with the reason. */
  problems: string[]
}

function unwrap(node: ts.Expression): ts.Expression {
  return ts.isParenthesizedExpression(node) || ts.isAsExpression(node) || ts.isSatisfiesExpression(node)
    ? unwrap(node.expression)
    : node
}

function allEdits(parts: (Edit[] | undefined)[]): Edit[] | undefined {
  return parts.every((p) => p !== undefined) ? parts.flat() : undefined
}

/**
 * Edits that turn the literal `node` into `value`, one per string that
 * changes. Undefined when `value` is shaped differently (another type,
 * array length or key set) or changes a number, boolean or null.
 */
export function literalEdits(node: ts.Expression, value: LiteralValue, source: ts.SourceFile): Edit[] | undefined {
  const inner = unwrap(node)
  if (ts.isStringLiteral(inner) || ts.isNoSubstitutionTemplateLiteral(inner)) {
    if (typeof value !== 'string') return undefined
    if (inner.text === value) return []
    const quote = inner.getText(source)[0] as Quote
    return [{ start: inner.getStart(source), end: inner.getEnd(), text: quoteString(value, quote) }]
  }
  if (ts.isArrayLiteralExpression(inner)) {
    if (!Array.isArray(value) || value.length !== inner.elements.length) return undefined
    return allEdits(inner.elements.map((element, i) => literalEdits(element, value[i], source)))
  }
  if (ts.isObjectLiteralExpression(inner)) {
    if (value === null || typeof value !== 'object' || Array.isArray(value)) return undefined
    const props = inner.properties.filter(ts.isPropertyAssignment)
    const keys = props.map((p) => propertyName(p.name))
    const sameKeys =
      props.length === inner.properties.length &&
      keys.length === Object.keys(value).length &&
      keys.every((k) => k !== undefined && Object.hasOwn(value, k))
    if (!sameKeys) return undefined
    return allEdits(props.map((p) => literalEdits(p.initializer, value[propertyName(p.name)!], source)))
  }
  return isDeepStrictEqual(literalValue(inner), value) ? [] : undefined
}

/** Applies edits that do not overlap, from the end of the text backwards. */
function applyEdits(text: string, edits: readonly Edit[]): string {
  return [...edits].sort((a, b) => b.start - a.start).reduce((acc, e) => acc.slice(0, e.start) + e.text + acc.slice(e.end), text)
}

function overlaps(edits: readonly Edit[]): boolean {
  const sorted = [...edits].sort((a, b) => a.start - b.start)
  return sorted.some((e, i) => i > 0 && e.start < sorted[i - 1].end)
}

/**
 * Rewrites the `target` value of the units `corrections` names (id → new
 * value) in the source `text` of `file`.
 */
export function replaceLocale(
  file: string,
  text: string,
  target: string,
  corrections: Readonly<Record<string, LiteralValue>>,
  units: ReadonlyMap<string, ReviewedUnit>,
): ReplaceResult {
  const source = parseText(file, text)
  const objects = findLocaleObjects(source, SOURCE_LANGS, target, target)
  const chains = findLocaleTernaries(source, target, target)
  const applied: string[] = []
  const unchanged: string[] = []
  const problems: string[] = []
  const edits: Edit[] = []
  for (const [id, value] of Object.entries(corrections)) {
    const unit = units.get(id)
    if (!unit) {
      problems.push(`${id}: unknown unit`)
      continue
    }
    const index = id.slice(id.lastIndexOf('::') + 2)
    const found = index.startsWith('t')
      ? locateUnit(chains, Number(index.slice(1)), unit)
      : locateUnit(objects, Number(index), unit)
    if (!found) {
      problems.push(`${id}: French source changed since the dump (${unit.path})`)
      continue
    }
    const current = found.values[target]
    if (current == null) {
      problems.push(`${id}: the ${target} value is not a plain literal (${unit.path})`)
      continue
    }
    if (unit[target] !== undefined && !isDeepStrictEqual(current, unit[target])) {
      problems.push(`${id}: the ${target} value changed since the dump (${unit.path})`)
      continue
    }
    const node = 'anchorValue' in found ? found.anchorValue : found.anchor.initializer
    const unitEdits = literalEdits(node, value, source)
    if (!unitEdits) {
      problems.push(`${id}: the correction is shaped differently from the current ${target} value (${unit.path})`)
      continue
    }
    if (unitEdits.length === 0) unchanged.push(id)
    else {
      applied.push(id)
      edits.push(...unitEdits)
    }
  }
  if (overlaps(edits)) {
    return { text, applied: [], unchanged, problems: [...problems, ...applied.map((id) => `${id}: overlapping corrections in ${file}`)] }
  }
  return { text: applyEdits(text, edits), applied, unchanged, problems }
}

function main() {
  const [target, unitsPath, dir] = process.argv.slice(2)
  if (!target || !unitsPath || !dir) throw new Error('usage: replace-locale.ts <locale> <units.json> <corrections-dir>')
  const units = new Map((JSON.parse(readFileSync(unitsPath, 'utf8')) as ReviewedUnit[]).map((u) => [u.id, u]))
  const { values, conflicts } = readTranslations([dir])

  const byFile = new Map<string, Record<string, LiteralValue>>()
  for (const [id, value] of Object.entries(values)) {
    const file = id.slice(0, id.lastIndexOf('::'))
    byFile.set(file, { ...byFile.get(file), [id]: value })
  }

  const totals = { applied: 0, unchanged: 0 }
  const problems: string[] = [...conflicts.values()]
  for (const [file, corrections] of byFile) {
    const text = readFileSync(file, 'utf8')
    const result = replaceLocale(file, text, target, corrections, units)
    if (result.text !== text) writeFileSync(file, result.text)
    totals.applied += result.applied.length
    totals.unchanged += result.unchanged.length
    problems.push(...result.problems)
  }

  problems.forEach((p) => console.error(p))
  console.log(`${totals.applied} values replaced, ${totals.unchanged} already as given, ${problems.length} skipped`)
  if (problems.length) process.exitCode = 1
}

if (process.argv[1]?.endsWith('replace-locale.ts')) main()
