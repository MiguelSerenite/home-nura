/**
 * Builds the complete translations of a new locale for insert-locale.ts
 * from its writers' outputs. Usage:
 *
 *   npx tsx scripts/i18n/fill-fallback.ts [--strict] <units.json> <dest-dir> <writer-output>...
 *
 * Writer outputs are JSON files, or directories of them (searched
 * recursively), mapping unit ids of <units.json> to values. The US and
 * Canadian writers only list the units they adapted: every other unit takes
 * its English source ("en"), so <dest-dir>/translations.json holds a value
 * for every unit and insert-locale.ts runs unchanged:
 *
 *   npx tsx scripts/i18n/insert-locale.ts us <units.json> <dest-dir>
 *
 * --strict (Swedish: every unit is translated) gives no English fallback
 * and reports each unit the writers left out instead. Also reported (exit
 * code 1): ids unknown to <units.json>, ids two files give different values
 * (left out), and values shaped unlike both the French and English source
 * (kept: tsc and the tests decide).
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { readTranslations } from './literal-source'
import type { LiteralValue } from './locale-objects'

/** What extract-locale.ts wrote for a unit. */
export interface SourceUnit {
  id: string
  fr: LiteralValue
  en: LiteralValue
}

export interface Completion {
  translations: Record<string, LiteralValue>
  /** Units the writers gave a value. */
  adapted: number
  /** Units given their English source. */
  fallbacks: number
  problems: string[]
}

const OUTPUT_FILE = 'translations.json'

function isRecord(value: LiteralValue): value is { [key: string]: LiteralValue } {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function kind(value: LiteralValue): string {
  if (value === null) return 'null'
  return Array.isArray(value) ? 'array' : typeof value
}

/**
 * Where `value` is shaped unlike `reference` (type, array length, object
 * keys), e.g. "faq[2]: object expected"; undefined when shaped alike.
 */
export function shapeDifference(value: LiteralValue, reference: LiteralValue, at = ''): string | undefined {
  const where = at || 'value'
  if (kind(value) !== kind(reference)) return `${where}: ${kind(reference)} expected, got ${kind(value)}`
  if (Array.isArray(reference) && Array.isArray(value)) {
    if (value.length !== reference.length) return `${where}: ${reference.length} items expected, got ${value.length}`
    return reference.map((item, i) => shapeDifference(value[i], item, `${at}[${i}]`)).find(Boolean)
  }
  if (isRecord(reference) && isRecord(value)) {
    const expected = Object.keys(reference)
    const missing = expected.filter((k) => !Object.hasOwn(value, k))
    const extra = Object.keys(value).filter((k) => !Object.hasOwn(reference, k))
    if (missing.length || extra.length) {
      return `${where}: keys differ (missing: ${missing.join(', ') || '-'}; extra: ${extra.join(', ') || '-'})`
    }
    return expected.map((k) => shapeDifference(value[k], reference[k], at ? `${at}.${k}` : k)).find(Boolean)
  }
  return undefined
}

export interface CompletionOptions {
  /** No English fallback: report the units the writers left out. */
  strict: boolean
  /** Units the writers' files disagree on: given no value at all. */
  conflicted?: ReadonlySet<string>
}

/** Every unit's writer value, else (unless `strict`) its English source. */
export function completeTranslations(
  units: readonly SourceUnit[],
  written: Readonly<Record<string, LiteralValue>>,
  { strict, conflicted = new Set() }: CompletionOptions,
): Completion {
  const known = new Set(units.map((u) => u.id))
  const unknown = Object.keys(written)
    .filter((id) => !known.has(id))
    .map((id) => `${id}: unknown unit`)
  const shapes = units.flatMap((u) => {
    const value = written[u.id]
    if (value === undefined) return []
    const difference = shapeDifference(value, u.en)
    return difference && shapeDifference(value, u.fr) ? [`${u.id}: shaped unlike the source, ${difference}`] : []
  })
  const untranslated = units.filter((u) => !Object.hasOwn(written, u.id) && !conflicted.has(u.id))
  const missing = strict ? untranslated.map((u) => `${u.id}: not translated`) : []
  const entries = units.flatMap((u): [string, LiteralValue][] => {
    if (Object.hasOwn(written, u.id)) return [[u.id, written[u.id]]]
    return strict || conflicted.has(u.id) ? [] : [[u.id, u.en]]
  })
  const adapted = units.filter((u) => Object.hasOwn(written, u.id)).length
  return {
    translations: Object.fromEntries(entries),
    adapted,
    fallbacks: entries.length - adapted,
    problems: [...unknown, ...shapes, ...missing],
  }
}

function main() {
  const args = process.argv.slice(2)
  const strict = args.includes('--strict')
  const [unitsPath, destDir, ...outputs] = args.filter((a) => a !== '--strict')
  if (!unitsPath || !destDir || outputs.length === 0) {
    throw new Error('usage: fill-fallback.ts [--strict] <units.json> <dest-dir> <writer-output>...')
  }
  // insert-locale.ts reads every JSON file of the directory: it must hold ours only.
  const others = existsSync(destDir) ? readdirSync(destDir).filter((name) => name !== OUTPUT_FILE) : []
  if (others.length) throw new Error(`${destDir} must be empty or hold ${OUTPUT_FILE} only (found ${others.join(', ')})`)

  const units = JSON.parse(readFileSync(unitsPath, 'utf8')) as SourceUnit[]
  const { values, conflicts } = readTranslations(outputs)
  const result = completeTranslations(units, values, { strict, conflicted: new Set(conflicts.keys()) })

  mkdirSync(destDir, { recursive: true })
  writeFileSync(join(destDir, OUTPUT_FILE), JSON.stringify(result.translations, null, 1))
  const problems = [...conflicts.values(), ...result.problems]
  problems.forEach((p) => console.error(p))
  console.log(
    `${result.adapted} written by the writers, ${result.fallbacks} English fallbacks, ${problems.length} problems → ${join(destDir, OUTPUT_FILE)}`,
  )
  if (problems.length) process.exitCode = 1
}

if (process.argv[1]?.endsWith('fill-fallback.ts')) main()
