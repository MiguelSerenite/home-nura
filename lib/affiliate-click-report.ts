/**
 * Reads the affiliate clicks back from a Vercel log export and counts them
 * by placement, market, store and tracking ID (scripts/analytics/affiliate-clicks.ts).
 *
 * /api/click writes one JSON line per click, `{"event":"affiliate_click",…}`.
 * The export can be `vercel logs --json` output (the line is the record's
 * message), a JSON array saved from the dashboard, or raw log text: each
 * record counts once. Lines logged before placements (up to 01/11/2026)
 * have no placement, no tag and their store under `marketplace`; their
 * market follows from the language.
 */
import { AMAZON_MARKETS } from '@/lib/amazon'
import { isValidLang } from '@/lib/i18n'

export const CLICK_EVENT = 'affiliate_click'
/** Value shown for a field a log line does not have. */
export const NO_VALUE = '(none)'

export interface ClickRecord {
  at: string
  path: string
  lang: string
  market: string
  placement: string
  surface: string
  model: string
  store: string
  tag: string
}

export type ClickField = Exclude<keyof ClickRecord, 'at'>

/**
 * A flat `{"event":"affiliate_click",…}` object inside any text (the log
 * line has no nested object); braces and escaped quotes inside its string
 * values do not end it.
 */
const EMBEDDED_CLICK = /\{"event":"affiliate_click"(?:[^{}"]|"(?:[^"\\]|\\.)*")*\}/g
/** Control, invisible formatting and line separator characters: never printed to the terminal. */
const UNPRINTABLE = /[\p{Cc}\p{Cf}\u2028\u2029]/gu

function text(value: unknown): string {
  const printable = typeof value === 'string' ? value.replace(UNPRINTABLE, '') : ''
  return printable.length > 0 ? printable : NO_VALUE
}

function toRecord(line: Record<string, unknown>): ClickRecord {
  const lang = text(line.lang)
  const marketOfLang = isValidLang(lang) ? AMAZON_MARKETS[lang].market : NO_VALUE
  return {
    at: text(line.at),
    path: text(line.path),
    lang,
    market: typeof line.market === 'string' ? text(line.market) : marketOfLang,
    placement: text(line.placement),
    surface: text(line.surface),
    model: text(line.model),
    store: text(line.store ?? line.marketplace),
    tag: text(line.tag),
  }
}

function parseJson(value: string): unknown {
  try {
    return JSON.parse(value)
  } catch {
    return undefined
  }
}

function isClickLine(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && (value as Record<string, unknown>).event === CLICK_EVENT
}

function embeddedClicks(value: string): Record<string, unknown>[] {
  return [...value.matchAll(EMBEDDED_CLICK)].map((m) => parseJson(m[0])).filter(isClickLine)
}

/** The first click line found in a log record, depth first. */
function clickIn(value: unknown): Record<string, unknown> | null {
  if (isClickLine(value)) return value
  if (typeof value === 'string') return embeddedClicks(value)[0] ?? null
  if (typeof value !== 'object' || value === null) return null
  for (const child of Object.values(value)) {
    const found = clickIn(child)
    if (found) return found
  }
  return null
}

function recordsOf(json: unknown): unknown[] {
  return Array.isArray(json) ? json : [json]
}

/** Every click of a log export, in the export's order. */
export function extractClicks(exported: string): ClickRecord[] {
  const whole = parseJson(exported)
  const lines =
    whole !== undefined
      ? recordsOf(whole).map(clickIn)
      : exported.split('\n').flatMap((line) => {
          const json = parseJson(line)
          return json === undefined ? embeddedClicks(line) : recordsOf(json).map(clickIn)
        })
  return lines.filter((line): line is Record<string, unknown> => line !== null).map(toRecord)
}

/** Clicks per value of `field`, most clicked first (ties in alphabetical order). */
export function countBy(clicks: readonly ClickRecord[], field: ClickField): [string, number][] {
  const counts = clicks.reduce((acc, click) => acc.set(click[field], (acc.get(click[field]) ?? 0) + 1), new Map<string, number>())
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
}

export interface CrossTab {
  rows: string[]
  cols: string[]
  counts: Record<string, Record<string, number>>
}

/** Clicks per pair of values, rows and columns ordered by their totals. */
export function crossTab(clicks: readonly ClickRecord[], rowField: ClickField, colField: ClickField): CrossTab {
  const counts = clicks.reduce<Record<string, Record<string, number>>>((acc, click) => {
    const row = acc[click[rowField]] ?? {}
    return { ...acc, [click[rowField]]: { ...row, [click[colField]]: (row[click[colField]] ?? 0) + 1 } }
  }, {})
  return {
    rows: countBy(clicks, rowField).map(([value]) => value),
    cols: countBy(clicks, colField).map(([value]) => value),
    counts,
  }
}

const SHARE = new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
const TOP_PAGES = 10

function countTable(title: string, rows: [string, number][], total: number): string {
  const width = Math.max(...rows.map(([value]) => value.length), 1)
  const lines = rows.map(([value, count]) => `  ${value.padEnd(width)}  ${String(count).padStart(5)}  ${SHARE.format((100 * count) / total)} %`)
  return [title, ...lines].join('\n')
}

function crossTable(title: string, tab: CrossTab): string {
  const width = Math.max(...tab.rows.map((row) => row.length), 1)
  const colWidth = Math.max(...tab.cols.map((col) => col.length), 5)
  const header = `  ${''.padEnd(width)}  ${tab.cols.map((col) => col.padStart(colWidth)).join(' ')}`
  const lines = tab.rows.map(
    (row) => `  ${row.padEnd(width)}  ${tab.cols.map((col) => String(tab.counts[row]?.[col] ?? 0).padStart(colWidth)).join(' ')}`,
  )
  return [title, header, ...lines].join('\n')
}

/** Plain-text report: totals, then clicks per placement, market, store, tracking ID, placement × market and × surface, and page. */
export function formatClickReport(clicks: readonly ClickRecord[]): string {
  if (clicks.length === 0) return 'Aucun clic affilié dans cet export (filtrer les logs sur "affiliate_click").'
  const dates = clicks.map((c) => c.at).filter((at) => at !== NO_VALUE).sort()
  const period = dates.length > 0 ? ` (${dates[0]} → ${dates[dates.length - 1]})` : ''
  const total = clicks.length
  return [
    `${total} clics affiliés${period}`,
    countTable('Par emplacement (placement)', countBy(clicks, 'placement'), total),
    countTable('Par marché (market)', countBy(clicks, 'market'), total),
    countTable('Par boutique (store)', countBy(clicks, 'store'), total),
    countTable('Par identifiant de suivi (tag)', countBy(clicks, 'tag'), total),
    crossTable('Emplacement × marché', crossTab(clicks, 'placement', 'market')),
    crossTable('Emplacement × position (surface : after-h2 = milieu d\'article, bottom = fin)', crossTab(clicks, 'placement', 'surface')),
    countTable(`Pages (${TOP_PAGES} premières)`, countBy(clicks, 'path').slice(0, TOP_PAGES), total),
  ].join('\n\n')
}
