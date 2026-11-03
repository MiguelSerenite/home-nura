/**
 * Awin product feeds of Coolblue NL: which feeds, where to download them,
 * and how a feed row becomes a product we can match. Pure (no network):
 * lib/merchant-offers/coolblue.ts does the fetching.
 *
 * The download key (AWIN_DATAFEED_KEY) is a secret: it only ever goes into
 * the URLs built here and is never logged (redactKey).
 */
import { parseCsvRecords } from './csv'
import { AWIN_PUBLISHER_ID, COOLBLUE_AWIN_ADVERTISER_ID, isCoolblueAwinLink } from './types'

/**
 * Coolblue NL feeds of the categories we cover (the full feed 96636, with
 * 17,368 products, is left out: these six hold every model we compare).
 */
export const COOLBLUE_FEED_IDS: readonly string[] = [
  '95890', // Keuken
  '95892', // Huishouden en wonen
  '95897', // Domotica
  '95834', // Koffie
  '95904', // Wasmachines en wasdrogers
  '95886', // Tuin en Klussen
]

/** Columns the matcher and the offer need (Create-a-Feed column names). */
export const FEED_COLUMNS: readonly string[] = [
  'aw_deep_link',
  'product_name',
  'brand_name',
  'search_price',
  'currency',
  'ean',
  'in_stock',
  'last_updated',
]

/** Prices outside this range are feed errors, never shown. */
const MAX_PRICE_EUR = 100_000

/** The publisher's feed list (CSV of every feed the account may download). */
export function feedListUrl(key: string): string {
  return `https://ui.awin.com/productdata-darwin-download/publisher/${AWIN_PUBLISHER_ID}/${encodeURIComponent(key)}/1/feedList`
}

/**
 * Create-a-Feed download URL of one feed: Dutch products, our columns,
 * comma-separated CSV, gzip. Used when the feed list has no download
 * link for the feed (or cannot be read).
 */
export function createAFeedUrl(key: string, feedId: string): string {
  return [
    'https://productdata.awin.com/datafeed/download',
    `apikey/${encodeURIComponent(key)}`,
    'language/nl',
    `fid/${encodeURIComponent(feedId)}`,
    `columns/${FEED_COLUMNS.join(',')}`,
    'format/csv',
    'delimiter/%2C',
    'compression/gzip',
    'adultcontent/1/',
  ].join('/')
}

/** `text` with every occurrence of the key masked, for log lines and errors. */
export function redactKey(text: string, key: string | undefined): string {
  if (!key) return text
  return text.split(key).join('***').split(encodeURIComponent(key)).join('***')
}

function columnOf(record: Record<string, string>, pattern: RegExp): string | undefined {
  const name = Object.keys(record).find((key) => pattern.test(key))
  return name === undefined ? undefined : record[name]
}

export interface FeedListEntry {
  feedId: string
  advertiserId: string
  /** Download link Awin gives for the feed (it carries the key), if any. */
  url: string | null
  lastImported: string | null
}

/** Rows of the feed list CSV (columns Advertiser ID, Feed ID, Last Imported, a download URL…). */
export function parseFeedList(text: string): FeedListEntry[] {
  return parseCsvRecords(text).flatMap((record) => {
    const feedId = columnOf(record, /^feed\s*id$/i)
    const advertiserId = columnOf(record, /^advertiser\s*id$/i)
    if (!feedId || !advertiserId) return []
    const url = columnOf(record, /url/i) ?? ''
    return [
      {
        feedId,
        advertiserId,
        url: /^https:\/\//.test(url) ? url : null,
        lastImported: columnOf(record, /^last\s*imported$/i) || null,
      },
    ]
  })
}

/** Download URL of each selected Coolblue feed: the feed list's own link, else the Create-a-Feed one. */
export function coolblueFeedUrls(key: string, feedList: readonly FeedListEntry[]): string[] {
  return COOLBLUE_FEED_IDS.map((feedId) => {
    const entry = feedList.find((e) => e.feedId === feedId && e.advertiserId === COOLBLUE_AWIN_ADVERTISER_ID)
    return entry?.url ?? createAFeedUrl(key, feedId)
  })
}

/** A Coolblue product of a feed, validated. */
export interface FeedProduct {
  name: string
  brand: string
  ean: string | null
  url: string
  price: number
  /** When Awin last saw the product (ISO), if the feed says. */
  updatedAt: string | null
}

/** "199.00", "199,00" or "1.299,00" → euros, or null. */
export function parsePrice(value: string): number | null {
  const cleaned = value.replace(/[^\d.,]/g, '')
  if (!/\d/.test(cleaned)) return null
  const lastSeparator = Math.max(cleaned.lastIndexOf('.'), cleaned.lastIndexOf(','))
  const hasDecimals = lastSeparator !== -1 && cleaned.length - lastSeparator - 1 <= 2
  const integer = (hasDecimals ? cleaned.slice(0, lastSeparator) : cleaned).replace(/[.,]/g, '')
  const decimals = hasDecimals ? cleaned.slice(lastSeparator + 1) : ''
  const price = Number(decimals ? `${integer}.${decimals}` : integer)
  return Number.isFinite(price) && price > 0 && price < MAX_PRICE_EUR ? price : null
}

/** Awin timestamps ("2026-11-02 05:12:33", ISO) → ISO in UTC, or null. */
export function parseFeedDate(value: string): string | null {
  const match = value.trim().match(/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2}(?::\d{2})?)(Z|[+-]\d{2}:?\d{2})?$/)
  if (!match) return null
  const date = new Date(`${match[1]}T${match[2]}${match[3] ?? 'Z'}`)
  return Number.isNaN(date.getTime()) ? null : date.toISOString()
}

const IN_STOCK = new Set(['1', 'yes', 'y', 'true', 'in stock'])
const OUT_OF_STOCK = new Set(['0', 'no', 'n', 'false', 'out of stock'])

function isInStock(value: string | undefined): boolean {
  const normalized = (value ?? '').trim().toLowerCase()
  if (IN_STOCK.has(normalized)) return true
  if (OUT_OF_STOCK.has(normalized)) return false
  // The column is optional: absent or empty, the product counts as listed.
  return normalized === ''
}

/** EAN-8/12/13/14 digits only, or null. */
export function normalizeEan(value: string | undefined): string | null {
  const digits = (value ?? '').replace(/\D/g, '')
  return /^(?:\d{8}|\d{12,14})$/.test(digits) ? digits.replace(/^0+(?=\d{13})/, '') : null
}

/**
 * The feed's products we may offer: in stock, priced in euros, with a
 * tracked link of our account to Coolblue. Anything else is dropped.
 */
export function parseCoolblueFeed(text: string): FeedProduct[] {
  return parseCsvRecords(text).flatMap((row) => {
    const name = row.product_name ?? ''
    const brand = row.brand_name ?? ''
    const url = row.aw_deep_link ?? ''
    const price = parsePrice(row.search_price ?? '')
    const currency = (row.currency ?? 'EUR').toUpperCase()
    if (!name || !brand || price === null || (currency !== '' && currency !== 'EUR')) return []
    if (!isInStock(row.in_stock) || !isCoolblueAwinLink(url)) return []
    return [{ name, brand, ean: normalizeEan(row.ean), url, price, updatedAt: parseFeedDate(row.last_updated ?? '') }]
  })
}
