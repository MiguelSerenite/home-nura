/**
 * Validation of one floor-care data file (data/floor-care/{market}-{guide}.json).
 *
 * Runs when the pages are built: bad data fails the build with the file,
 * the field path and what is expected, instead of shipping a broken or
 * non-compliant page. Beyond the shape it enforces the site's rules:
 * - no prices next to Amazon products (no currency amount in picks, specs
 *   or comparison tables; no "price" spec);
 * - specs and heights come from the manufacturer, never an Amazon page;
 * - the store page seen for a model is the market's own store;
 * - section bodies use the allowed tags only (lib/floor-care/html.ts);
 * - a guide's comparison table only compares that guide's own picks.
 * Keys starting with "_" are comments and ignored (`_fixture` marks the
 * placeholder files).
 */

import { FLOOR_CARE_GUIDES, FLOOR_CARE_SLUGS, FLOOR_CARE_NEEDS, FLOOR_CARE_HUB_PATH, type FloorCareGuideKey, type FloorCareMarket } from './config'
import { parseRichText, RichTextError } from './html'
import { findPick, pickName } from './picks'
import { DEFAULT_CLEARANCE_UNIT } from './units'
import { hasClearanceCheck } from './navigation'
import type {
  ChooserQuestion,
  ChooserTarget,
  FloorCareComparison,
  FloorCareEntryBanner,
  FloorCareFaq,
  FloorCareGuide,
  FloorCarePick,
  FloorCareSection,
} from './types'

export class FloorCareDataError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'FloorCareDataError'
  }
}

/** Repository path of a data file, for error messages. */
export function floorCareDataFile(market: FloorCareMarket, guide: FloorCareGuideKey): string {
  return `data/floor-care/${market}-${guide}.json`
}

const TOP_KEYS = [
  'market', 'guide', 'metaTitle', 'metaDescription', 'h1', 'intro', 'sections', 'picks',
  'comparison', 'chooser', 'faq', 'sources', 'entryBanner',
] as const
const PICK_KEYS = [
  'brand', 'model', 'role', 'why', 'bestFor', 'asin', 'storeUrlSeen', 'manufacturerUrl',
  'specs', 'robot', 'heightMm', 'heightSourceUrl',
] as const

const ASIN = /^[A-Z0-9]{10}$/
/** A currency amount: "$199", "US$199", "CA$ 249", "199 $", "USD 199", "199 CAD", "€99". */
const CURRENCY_AMOUNT = /(?:US|CA|C|CDN)?\$\s?\d|\d\s?\$|\b(?:USD|CAD)\s?\d|\d\s?(?:USD|CAD)\b|[€£]\s?\d|\d\s?[€£]/i
const PRICE_SPEC = /\b(?:price|msrp|cost|prix)\b/i
/** Robots are 6–15 cm tall: anything above is not a robot's height in millimetres. */
const MAX_ROBOT_HEIGHT_MM = 300
/** Store hosts allowed in storeUrlSeen per market (the editor checked the listing there). */
const MARKET_AMAZON_HOST: Readonly<Record<FloorCareMarket, RegExp>> = {
  us: /^(?:www\.)?amazon\.com$/,
  ca: /^(?:www\.)?amazon\.ca$/,
}
/** Any Amazon host: stores, short links and image CDNs. */
const AMAZON_HOST = /amazon|amzn|(?:^|\.)a\.co$/i
const ANCHOR = /^[a-z0-9][a-z0-9-]*$/

type Fail = (path: string, message: string) => never

function quote(value: unknown): string {
  if (value === null) return 'null'
  if (Array.isArray(value)) return 'an array'
  if (typeof value === 'string') return `"${value.length > 60 ? `${value.slice(0, 57)}...` : value}"`
  return typeof value === 'object' ? 'an object' : `${typeof value} ${String(value)}`
}

function object(value: unknown, path: string, keys: readonly string[], fail: Fail): Record<string, unknown> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) fail(path, `expected an object, got ${quote(value)}`)
  const record = value as Record<string, unknown>
  for (const key of Object.keys(record)) {
    if (key.startsWith('_') || keys.includes(key)) continue
    fail(`${path ? `${path}.` : ''}${key}`, `unknown field (allowed: ${keys.join(', ')}; prefix comments with "_")`)
  }
  return record
}

function text(value: unknown, path: string, fail: Fail): string {
  if (typeof value !== 'string' || value.trim() === '') fail(path, `expected a non-empty string, got ${quote(value)}`)
  return (value as string).trim()
}

function array(value: unknown, path: string, fail: Fail, min = 0): unknown[] {
  if (!Array.isArray(value)) fail(path, `expected an array, got ${quote(value)}`)
  const list = value as unknown[]
  if (list.length < min) fail(path, `expected at least ${min} item${min > 1 ? 's' : ''}, got ${list.length}`)
  return list
}

function noPrice(value: string, path: string, fail: Fail): string {
  if (CURRENCY_AMOUNT.test(value)) fail(path, `${quote(value)} looks like a price: no prices next to Amazon products`)
  return value
}

function httpsUrl(value: unknown, path: string, fail: Fail): URL {
  const raw = text(value, path, fail)
  let url: URL
  try {
    url = new URL(raw)
  } catch {
    return fail(path, `expected an absolute https URL, got ${quote(raw)}`)
  }
  if (url.protocol !== 'https:') fail(path, `expected an https URL, got ${quote(raw)}`)
  return url
}

/** A manufacturer or source URL: https, and never an Amazon page (its specs are unreliable). */
function referenceUrl(value: unknown, path: string, fail: Fail): string {
  const url = httpsUrl(value, path, fail)
  if (AMAZON_HOST.test(url.hostname)) {
    fail(path, `${quote(url.href)} is an Amazon page: take specs, heights and sources from the manufacturer or an independent source`)
  }
  return url.href
}

function storeUrlSeen(value: unknown, path: string, market: FloorCareMarket, fail: Fail): string | null {
  if (value === null || value === undefined) return null
  const url = httpsUrl(value, path, fail)
  if (url.searchParams.has('tag') || /[?&]tag=/.test(url.href)) {
    fail(path, 'remove the "tag" parameter: tracking IDs are added by lib/amazon.ts only')
  }
  if (AMAZON_HOST.test(url.hostname) && !MARKET_AMAZON_HOST[market].test(url.hostname)) {
    fail(path, `${quote(url.hostname)} is not the ${market === 'us' ? 'amazon.com' : 'amazon.ca'} store of this market`)
  }
  return url.href
}

function specs(value: unknown, path: string, fail: Fail): Record<string, string> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    fail(path, `expected an object of spec name → value (strings with their unit), got ${quote(value)}`)
  }
  const entries = Object.entries(value as Record<string, unknown>).filter(([key]) => !key.startsWith('_'))
  if (entries.length === 0) fail(path, 'expected at least one spec')
  return Object.fromEntries(
    entries.map(([key, raw]) => {
      const at = `${path}.${key}`
      if (key.trim() === '') fail(at, 'empty spec name')
      if (PRICE_SPEC.test(key)) fail(at, 'no price spec: the site shows no prices')
      return [key.trim(), noPrice(text(raw, at, fail), at, fail)]
    }),
  )
}

/** Guides whose picks may be robots (robot vacuums, robot mops); the hub repeats their picks. */
const ROBOT_GUIDES: readonly FloorCareGuideKey[] = ['hub', 'dry', 'hardfloor']

function pick(value: unknown, path: string, market: FloorCareMarket, guide: FloorCareGuideKey, fail: Fail): FloorCarePick {
  const p = object(value, path, PICK_KEYS, fail)
  const field = (key: (typeof PICK_KEYS)[number]) => `${path}.${key}`
  if (p.robot !== undefined && p.robot !== null && typeof p.robot !== 'boolean') fail(field('robot'), `expected true, false or nothing, got ${quote(p.robot)}`)
  const robot = p.robot === true
  if (robot && !ROBOT_GUIDES.includes(guide)) fail(field('robot'), 'robots belong to the vacuum or hard-floor guide')
  const asin = p.asin === null || p.asin === undefined ? null : text(p.asin, field('asin'), fail)
  if (asin !== null && !ASIN.test(asin)) fail(field('asin'), `expected a 10-character ASIN or null, got ${quote(asin)}`)
  let heightMm: number | null = null
  if (p.heightMm !== null && p.heightMm !== undefined) {
    if (typeof p.heightMm !== 'number' || !Number.isFinite(p.heightMm) || p.heightMm <= 0 || p.heightMm > MAX_ROBOT_HEIGHT_MM) {
      fail(field('heightMm'), `expected the robot's height in millimetres (a number up to ${MAX_ROBOT_HEIGHT_MM}) or null, got ${quote(p.heightMm)}`)
    }
    heightMm = p.heightMm as number
  }
  const heightSourceUrl =
    p.heightSourceUrl === null || p.heightSourceUrl === undefined ? null : referenceUrl(p.heightSourceUrl, field('heightSourceUrl'), fail)
  if (heightMm !== null && !robot) {
    fail(field('heightMm'), 'only robots ("robot": true) carry heightMm, the height the clearance check compares; put any other height in specs as text')
  }
  if (robot && heightMm === null) fail(field('heightMm'), 'required for a robot: the clearance check compares it')
  if (heightMm !== null && heightSourceUrl === null) fail(field('heightSourceUrl'), 'required when heightMm is set')
  if (heightMm === null && heightSourceUrl !== null) fail(field('heightMm'), 'missing: heightSourceUrl is set')
  const brand = noPrice(text(p.brand, field('brand'), fail), field('brand'), fail)
  const model = noPrice(text(p.model, field('model'), fail), field('model'), fail)
  return {
    brand,
    model,
    role: noPrice(text(p.role, field('role'), fail), field('role'), fail),
    why: noPrice(text(p.why, field('why'), fail), field('why'), fail),
    bestFor: noPrice(text(p.bestFor, field('bestFor'), fail), field('bestFor'), fail),
    asin,
    storeUrlSeen: storeUrlSeen(p.storeUrlSeen, field('storeUrlSeen'), market, fail),
    manufacturerUrl: referenceUrl(p.manufacturerUrl, field('manufacturerUrl'), fail),
    specs: specs(p.specs, field('specs'), fail),
    robot,
    heightMm,
    heightSourceUrl,
  }
}

function section(value: unknown, path: string, market: FloorCareMarket, current: FloorCareGuideKey, fail: Fail): FloorCareSection {
  const s = object(value, path, ['h2', 'html', 'path', 'linkLabel'], fail)
  const html = text(s.html, `${path}.html`, fail)
  let link: FloorCareSection['link'] = null
  if (s.path !== undefined && s.path !== null) {
    const goesTo = text(s.path, `${path}.path`, fail)
    const target = parseChooserTarget(goesTo, market, current)
    if (!target || target.kind !== 'guide') fail(`${path}.path`, `${quote(goesTo)} is not a floor-care page (same forms as chooser goesTo)`)
    link = { target: target as ChooserTarget, label: text(s.linkLabel, `${path}.linkLabel`, fail) }
  } else if (s.linkLabel !== undefined && s.linkLabel !== null) {
    fail(`${path}.linkLabel`, 'needs a "path" to link to')
  }
  try {
    return { h2: text(s.h2, `${path}.h2`, fail), blocks: parseRichText(html), link }
  } catch (error) {
    if (error instanceof RichTextError) fail(`${path}.html`, error.message)
    throw error
  }
}

function comparison(value: unknown, path: string, picks: readonly FloorCarePick[], guide: FloorCareGuideKey, fail: Fail): FloorCareComparison {
  const c = object(value, path, ['columns', 'rows'], fail)
  // The hub may have no table (columns and rows both empty); a table has two columns at least.
  const emptyHubTable = guide === 'hub' && Array.isArray(c.columns) && c.columns.length === 0 && Array.isArray(c.rows) && c.rows.length === 0
  if (emptyHubTable) return { columns: [], rows: [] }
  const columns = array(c.columns, `${path}.columns`, fail, 2).map((col, i) =>
    noPrice(text(col, `${path}.columns[${i}]`, fail), `${path}.columns[${i}]`, fail),
  )
  const rows = array(c.rows, `${path}.rows`, fail, guide === 'hub' ? 0 : 2).map((row, r) => {
    const cells = array(row, `${path}.rows[${r}]`, fail)
    if (cells.length !== columns.length) fail(`${path}.rows[${r}]`, `expected ${columns.length} cells (one per column), got ${cells.length}`)
    return cells.map((cell, i) => noPrice(text(cell, `${path}.rows[${r}][${i}]`, fail), `${path}.rows[${r}][${i}]`, fail))
  })
  if (guide !== 'hub') {
    rows.forEach((row, r) => {
      if (!findPick(picks, row[0])) {
        fail(
          `${path}.rows[${r}][0]`,
          `${quote(row[0])} is not one of this guide's picks (${picks.map(pickName).join(', ')}): a guide's table compares its own picks only, named as in "picks"`,
        )
      }
    })
  }
  return { columns, rows }
}

const GUIDE_SLUGS: Readonly<Record<string, FloorCareGuideKey>> = {
  ...Object.fromEntries(FLOOR_CARE_GUIDES.map((g) => [g, g])),
  ...Object.fromEntries(FLOOR_CARE_NEEDS.map((g) => [FLOOR_CARE_SLUGS[g], g])),
  'floor-care': 'hub',
}

/**
 * Where a chooser answer goes: "clearance" (the robot clearance check), a
 * guide ("dry", "hardfloor", "textile", "hub"), its slug ("vacuums"…) or
 * its path ("/us/guides/floor-care/vacuums"), optionally with an anchor
 * ("textile#picks", "vacuums#pick-shark-…"), or an anchor of the same page.
 */
export function parseChooserTarget(raw: string, market: FloorCareMarket, current: FloorCareGuideKey): ChooserTarget | null {
  const value = raw.trim()
  if (value === 'clearance' || value === '#clearance') return { kind: 'clearance' }
  const [base, anchor, ...extra] = value.split('#')
  if (extra.length > 0 || (anchor !== undefined && !ANCHOR.test(anchor))) return null
  if (anchor === 'clearance') return { kind: 'clearance' }
  let guide: FloorCareGuideKey | undefined
  if (base === '') guide = current
  else if (base.startsWith('/')) {
    const path = base.replace(/\/+$/, '').replace(new RegExp(`^/${market}(?=/)`), '')
    if (path === FLOOR_CARE_HUB_PATH) guide = 'hub'
    else if (path.startsWith(`${FLOOR_CARE_HUB_PATH}/`)) guide = GUIDE_SLUGS[path.slice(FLOOR_CARE_HUB_PATH.length + 1)]
  } else guide = GUIDE_SLUGS[base]
  if (!guide || (base === '' && anchor === undefined)) return null
  return anchor === undefined ? { kind: 'guide', guide } : { kind: 'guide', guide, anchor }
}

const CLEARANCE_UNITS: readonly string[] = ['in', 'cm']

/**
 * A question naming a `unit` is the robot clearance question: its unit must
 * be the market's (inches in the US, centimetres in Canada) and
 * `acceptedUnits`, if given, list only inches and centimetres. The check
 * always accepts both.
 */
function clearanceQuestion(q: Record<string, unknown>, path: string, market: FloorCareMarket, fail: Fail): boolean {
  if (q.unit === undefined || q.unit === null) {
    if (q.acceptedUnits !== undefined && q.acceptedUnits !== null) fail(`${path}.acceptedUnits`, 'needs a "unit"')
    return false
  }
  if (q.unit !== DEFAULT_CLEARANCE_UNIT[market]) fail(`${path}.unit`, `expected "${DEFAULT_CLEARANCE_UNIT[market]}" on this market, got ${quote(q.unit)}`)
  if (q.acceptedUnits !== undefined && q.acceptedUnits !== null) {
    const units = array(q.acceptedUnits, `${path}.acceptedUnits`, fail, 1)
    if (!units.every((u) => typeof u === 'string' && CLEARANCE_UNITS.includes(u))) fail(`${path}.acceptedUnits`, 'expected "in" and/or "cm"')
  }
  return true
}

function chooser(value: unknown, path: string, market: FloorCareMarket, current: FloorCareGuideKey, fail: Fail): ChooserQuestion {
  const q = object(value, path, ['question', 'helper', 'unit', 'acceptedUnits', 'answers'], fail)
  return {
    question: text(q.question, `${path}.question`, fail),
    helper: q.helper === undefined || q.helper === null ? null : text(q.helper, `${path}.helper`, fail),
    clearance: clearanceQuestion(q, path, market, fail),
    answers: array(q.answers, `${path}.answers`, fail, 2).map((rawAnswer, i) => {
      const at = `${path}.answers[${i}]`
      const a = object(rawAnswer, at, ['label', 'goesTo'], fail)
      const goesTo = text(a.goesTo, `${at}.goesTo`, fail)
      const target = parseChooserTarget(goesTo, market, current)
      if (!target) {
        fail(
          `${at}.goesTo`,
          `${quote(goesTo)} is not a floor-care destination: use "dry", "hardfloor", "textile", "hub" (or a slug: ${Object.values(FLOOR_CARE_SLUGS).join(', ')}), "/${market}${FLOOR_CARE_HUB_PATH}/…", "clearance", optionally followed by "#anchor"`,
        )
      }
      return { label: text(a.label, `${at}.label`, fail), goesTo: target as ChooserTarget }
    }),
  }
}

/** One clearance question at most, on a page that has the clearance check. */
function clearanceQuestions(questions: ChooserQuestion[], guide: FloorCareGuideKey, fail: Fail): ChooserQuestion[] {
  const indexes = questions.flatMap((q, i) => (q.clearance ? [i] : []))
  if (indexes.length > 1) fail(`chooser[${indexes[1]}].unit`, 'one clearance question per page')
  if (indexes.length === 1 && !hasClearanceCheck(guide)) fail(`chooser[${indexes[0]}].unit`, `the ${guide} page has no clearance check`)
  return questions
}

function faq(value: unknown, path: string, fail: Fail): FloorCareFaq {
  const f = object(value, path, ['q', 'a'], fail)
  return { q: text(f.q, `${path}.q`, fail), a: text(f.a, `${path}.a`, fail) }
}

function entryBanner(value: unknown, guide: FloorCareGuideKey, fail: Fail): FloorCareEntryBanner | null {
  if (value === undefined || value === null) return null
  if (guide !== 'hub') fail('entryBanner', 'belongs to the hub file only')
  const b = object(value, 'entryBanner', ['title', 'text'], fail)
  return { title: text(b.title, 'entryBanner.title', fail), text: text(b.text, 'entryBanner.text', fail) }
}

function unique(values: readonly string[], path: string, what: string, fail: Fail): void {
  const seen = new Set<string>()
  for (const value of values) {
    if (seen.has(value)) fail(path, `${what} ${quote(value)} is listed twice`)
    seen.add(value)
  }
}

/**
 * Validates one data file. Throws FloorCareDataError naming the file, the
 * field and what is expected.
 */
export function parseFloorCareGuide(raw: unknown, market: FloorCareMarket, guide: FloorCareGuideKey): FloorCareGuide {
  const file = floorCareDataFile(market, guide)
  const fail: Fail = (path, message) => {
    throw new FloorCareDataError(`${file}: ${path || '(file)'}: ${message}`)
  }
  const data = object(raw, '', TOP_KEYS, fail)
  if (data.market !== market) fail('market', `expected "${market}", got ${quote(data.market)}`)
  if (data.guide !== guide) fail('guide', `expected "${guide}", got ${quote(data.guide)}`)

  const isGuide = guide !== 'hub'
  const picks = array(data.picks, 'picks', fail, isGuide ? 1 : 0).map((p, i) => pick(p, `picks[${i}]`, market, guide, fail))
  unique(picks.map((p) => pickName(p).toLowerCase()), 'picks', 'model', fail)
  const sources = array(data.sources, 'sources', fail, isGuide ? 1 : 0).map((s, i) => referenceUrl(s, `sources[${i}]`, fail))
  unique(sources, 'sources', 'source', fail)

  return {
    market,
    guide,
    metaTitle: text(data.metaTitle, 'metaTitle', fail),
    metaDescription: text(data.metaDescription, 'metaDescription', fail),
    h1: text(data.h1, 'h1', fail),
    intro: text(data.intro, 'intro', fail),
    sections: array(data.sections, 'sections', fail, isGuide ? 1 : 0).map((s, i) => section(s, `sections[${i}]`, market, guide, fail)),
    picks,
    comparison: comparison(data.comparison, 'comparison', picks, guide, fail),
    chooser: clearanceQuestions(
      array(data.chooser, 'chooser', fail).map((q, i) => chooser(q, `chooser[${i}]`, market, guide, fail)),
      guide,
      fail,
    ),
    faq: array(data.faq, 'faq', fail).map((f, i) => faq(f, `faq[${i}]`, fail)),
    sources,
    entryBanner: entryBanner(data.entryBanner, guide, fail),
    isFixture: Object.hasOwn(data, '_fixture'),
  }
}
