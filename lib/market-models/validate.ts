/**
 * Validation of the North-American market files (data/market-models and
 * data/market-picks). Runs when lib/market-models/data.ts loads, i.e. at
 * build time: bad data fails the build with the file, the entry and what
 * is expected, instead of shipping a wrong product name or link.
 */

import {
  MARKET_MODEL_STATUSES,
  marketModelsFile,
  marketPicksFile,
  type MarketModelDecision,
  type MarketModelStatus,
  type MarketPick,
  type NorthAmericanMarket,
} from './config'

export class MarketDataError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'MarketDataError'
  }
}

const ASIN = /^[A-Z0-9]{10}$/
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/
const DECISION_KEYS = ['status', 'name', 'asin', 'evidence', 'note'] as const
const PICK_KEYS = ['model', 'role', 'why'] as const
/** A currency amount ("$199", "CA$ 249", "199 USD", "€99"): no prices next to Amazon products. */
const CURRENCY_AMOUNT = /(?:US|CA|C|CDN)?\$\s?\d|\d\s?\$|\b(?:USD|CAD)\s?\d|\d\s?(?:USD|CAD)\b|[€£]\s?\d|\d\s?[€£]/i

type Problems = string[]

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function describe(value: unknown): string {
  if (value === null) return 'null'
  if (Array.isArray(value)) return 'an array'
  if (typeof value === 'string') return `"${value.length > 60 ? `${value.slice(0, 57)}...` : value}"`
  return typeof value === 'object' ? 'an object' : `${typeof value} ${String(value)}`
}

/** A non-empty string without leading, trailing or doubled spaces. */
function isCleanText(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && value === value.trim() && !/\s{2,}/.test(value)
}

function checkKeys(record: Record<string, unknown>, keys: readonly string[], where: string, problems: Problems): void {
  const unknown = Object.keys(record).filter((key) => !keys.includes(key))
  const missing = keys.filter((key) => !(key in record))
  if (unknown.length > 0) problems.push(`${where}: unknown field(s) ${unknown.join(', ')} (allowed: ${keys.join(', ')})`)
  if (missing.length > 0) problems.push(`${where}: missing field(s) ${missing.join(', ')}`)
}

/** Checks the file's market and returns its `section` object ("models" or "picks"). */
function checkHeader(raw: unknown, market: NorthAmericanMarket, file: string, section: string, problems: Problems): Record<string, unknown> | null {
  if (!isRecord(raw)) {
    problems.push(`${file}: expected an object, got ${describe(raw)}`)
    return null
  }
  if (raw.market !== market) problems.push(`${file}: "market" must be "${market}", got ${describe(raw.market)}`)
  const content = raw[section]
  if (!isRecord(content)) {
    problems.push(`${file}: "${section}" must be an object, got ${describe(content)}`)
    return null
  }
  return content
}

function parseDecision(value: unknown, where: string, problems: Problems): MarketModelDecision | null {
  if (!isRecord(value)) {
    problems.push(`${where}: expected an object, got ${describe(value)}`)
    return null
  }
  checkKeys(value, DECISION_KEYS, where, problems)
  const { status, name, asin, evidence, note } = value
  if (!(MARKET_MODEL_STATUSES as readonly unknown[]).includes(status)) {
    problems.push(`${where}: "status" must be one of ${MARKET_MODEL_STATUSES.join(', ')}, got ${describe(status)}`)
    return null
  }
  const none = status === 'none'
  if (none ? name !== null : !isCleanText(name)) {
    problems.push(`${where}: "name" must be ${none ? 'null for status "none"' : 'the North-American model name (trimmed, non-empty)'}, got ${describe(name)}`)
  }
  if (none ? asin !== null : asin !== null && !(typeof asin === 'string' && ASIN.test(asin))) {
    problems.push(`${where}: "asin" must be ${none ? 'null for status "none"' : 'null or a 10-character ASIN'}, got ${describe(asin)}`)
  }
  if (typeof name === 'string' && CURRENCY_AMOUNT.test(name)) problems.push(`${where}: "name" carries a price (${name})`)
  if (typeof evidence !== 'string') problems.push(`${where}: "evidence" must be a string, got ${describe(evidence)}`)
  if (typeof note !== 'string') problems.push(`${where}: "note" must be a string, got ${describe(note)}`)
  return {
    status: status as MarketModelStatus,
    name: typeof name === 'string' ? name : null,
    asin: typeof asin === 'string' ? asin : null,
    evidence: typeof evidence === 'string' ? evidence : '',
    note: typeof note === 'string' ? note : '',
  }
}

/** data/market-models/{market}.json: European model (as the site writes it) → decision. */
export function parseMarketModels(raw: unknown, market: NorthAmericanMarket): Readonly<Record<string, MarketModelDecision>> {
  const file = marketModelsFile(market)
  const problems: Problems = []
  const body = checkHeader(raw, market, file, 'models', problems)
  if (isRecord(raw) && !(typeof raw.checkedOn === 'string' && ISO_DATE.test(raw.checkedOn))) {
    problems.push(`${file}: "checkedOn" must be the YYYY-MM-DD date of the check, got ${describe(raw.checkedOn)}`)
  }
  const entries = Object.entries(body ?? {}).flatMap(([model, value]) => {
    if (!isCleanText(model)) problems.push(`${file}: model key ${describe(model)} must be the European name exactly as the site writes it`)
    const decision = parseDecision(value, `${file}: "${model}"`, problems)
    return decision ? [[model, decision] as const] : []
  })
  if (problems.length > 0) throw new MarketDataError(problems.join('\n'))
  return Object.fromEntries(entries)
}

function parsePick(value: unknown, where: string, canonical: ReadonlySet<string>, problems: Problems): MarketPick | null {
  if (!isRecord(value)) {
    problems.push(`${where}: expected an object, got ${describe(value)}`)
    return null
  }
  checkKeys(value, PICK_KEYS, where, problems)
  const fields = PICK_KEYS.filter((key) => !isCleanText(value[key]))
  if (fields.length > 0) {
    problems.push(`${where}: ${fields.map((key) => `"${key}"`).join(', ')} must be non-empty trimmed text`)
    return null
  }
  const pick = { model: value.model as string, role: value.role as string, why: value.why as string }
  if (!canonical.has(pick.model)) {
    problems.push(`${where}: "${pick.model}" is not a North-American name of the market's models file (every pick must be the "name" of a decision that is not "none")`)
  }
  for (const key of ['role', 'why'] as const) {
    if (CURRENCY_AMOUNT.test(pick[key])) problems.push(`${where}: "${key}" carries a price (no prices next to Amazon products)`)
  }
  return pick
}

/**
 * data/market-picks/{market}.json: article slug → verdict picks. Every pick
 * names a canonical North-American model of `models`, once per article.
 */
export function parseMarketPicks(
  raw: unknown,
  market: NorthAmericanMarket,
  models: Readonly<Record<string, MarketModelDecision>>,
): Readonly<Record<string, readonly MarketPick[]>> {
  const file = marketPicksFile(market)
  const problems: Problems = []
  const body = checkHeader(raw, market, file, 'picks', problems)
  const canonical = new Set(Object.values(models).flatMap((d) => (d.status !== 'none' && d.name ? [d.name] : [])))
  const entries = Object.entries(body ?? {}).flatMap(([slug, value]) => {
    const where = `${file}: "${slug}"`
    if (!Array.isArray(value) || value.length === 0) {
      problems.push(`${where}: expected a non-empty array of picks, got ${describe(value)}`)
      return []
    }
    const picks = value.flatMap((pick, i) => parsePick(pick, `${where}[${i}]`, canonical, problems) ?? [])
    const repeated = picks.map((p) => p.model).filter((model, i, all) => all.indexOf(model) !== i)
    if (repeated.length > 0) problems.push(`${where}: the same model is picked twice (${[...new Set(repeated)].join(', ')})`)
    return [[slug, picks] as const]
  })
  if (problems.length > 0) throw new MarketDataError(problems.join('\n'))
  return Object.fromEntries(entries)
}
