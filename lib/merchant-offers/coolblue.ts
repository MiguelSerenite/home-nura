/**
 * Coolblue offers for the Dutch pages, from the publisher's Awin feeds.
 * Server-only (Node zlib, the secret download key).
 *
 * The feeds are fetched with `next.revalidate` (6 hours, so the Dutch hub
 * pages are regenerated as often) and parsed once per server instance and
 * period. Without AWIN_DATAFEED_KEY, or when a download fails, there is no
 * offer: the page renders as before and a warning is logged, never the key.
 */
import { gunzipSync } from 'node:zlib'
import { coolblueFeedUrls, feedListUrl, parseCoolblueFeed, parseFeedList, redactKey, type FeedListEntry, type FeedProduct } from './feed'
import { buildOfferIndex, matchProduct, matchProductByName, type ModelQuery, type OfferIndex } from './match'
import type { CoolblueOffer, CoolblueOffers } from './types'
import { COOLBLUE_LANGS } from '@/lib/affiliate-click'
import type { Lang } from '@/lib/i18n'

export const AWIN_KEY_ENV = 'AWIN_DATAFEED_KEY'
/** How long a feed download is reused: 6 hours. */
export const FEED_REVALIDATE_SECONDS = 21600
const FEED_TTL_MS = FEED_REVALIDATE_SECONDS * 1000
/** After a failed load (no key, Awin down), try again after 15 minutes. */
const RETRY_AFTER_FAILURE_MS = 15 * 60 * 1000

interface LoadedFeeds {
  index: OfferIndex
  /** When the feeds were read: the price date when a product has none. */
  fetchedAt: string
}

let cached: { expiresAt: number; feeds: Promise<LoadedFeeds | null> } | null = null

function warn(message: string, key: string | undefined): void {
  console.warn(`[merchant-offers] ${redactKey(message, key)}`)
}

function decode(buffer: Buffer): string {
  // Awin serves gzip files as such (no Content-Encoding): unpack them here.
  const gzipped = buffer.length > 2 && buffer[0] === 0x1f && buffer[1] === 0x8b
  return (gzipped ? gunzipSync(buffer) : buffer).toString('utf8')
}

async function download(url: string): Promise<string> {
  const response = await fetch(url, { next: { revalidate: FEED_REVALIDATE_SECONDS } })
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  return decode(Buffer.from(await response.arrayBuffer()))
}

async function readFeedList(key: string): Promise<FeedListEntry[]> {
  try {
    return parseFeedList(await download(feedListUrl(key)))
  } catch (error) {
    warn(`Awin feed list unavailable (${(error as Error).message}); using Create-a-Feed links`, key)
    return []
  }
}

async function readFeed(url: string, key: string): Promise<FeedProduct[]> {
  try {
    return parseCoolblueFeed(await download(url))
  } catch (error) {
    warn(`Coolblue feed unavailable (${(error as Error).message})`, key)
    return []
  }
}

async function loadFeeds(): Promise<LoadedFeeds | null> {
  const key = process.env[AWIN_KEY_ENV]?.trim()
  if (!key) {
    warn(`${AWIN_KEY_ENV} is not set: no Coolblue offers`, undefined)
    return null
  }
  try {
    const fetchedAt = new Date().toISOString()
    const urls = coolblueFeedUrls(key, await readFeedList(key))
    const products = (await Promise.all(urls.map((url) => readFeed(url, key)))).flat()
    if (products.length === 0) {
      warn('no Coolblue product could be read: no offers', key)
      return null
    }
    return { index: buildOfferIndex(products), fetchedAt }
  } catch (error) {
    warn(`Coolblue offers disabled (${(error as Error).message})`, key)
    return null
  }
}

/** The parsed feeds, shared by every page rendered within the period. */
function feeds(now = Date.now()): Promise<LoadedFeeds | null> {
  if (cached && cached.expiresAt > now) return cached.feeds
  const pending: Promise<LoadedFeeds | null> = loadFeeds().then((loaded) => {
    // A failed load is retried sooner than a good one is refreshed.
    if (!loaded && cached?.feeds === pending) cached = { expiresAt: Date.now() + RETRY_AFTER_FAILURE_MS, feeds: pending }
    return loaded
  })
  cached = { expiresAt: now + FEED_TTL_MS, feeds: pending }
  return pending
}

/** Forget the parsed feeds (tests). */
export function __resetCoolblueFeedsForTests(): void {
  cached = null
}

function toOffer(product: FeedProduct, fetchedAt: string): CoolblueOffer {
  // Awin's own date when it has one, never later than the download.
  const priceAt = product.updatedAt && product.updatedAt < fetchedAt ? product.updatedAt : fetchedAt
  return { url: product.url, price: product.price, priceAt }
}

/** Coolblue's offer for exactly this model, or null (no key, feed down, no confident match). */
export async function coolblueOfferFor(query: ModelQuery): Promise<CoolblueOffer | null> {
  const loaded = await feeds()
  if (!loaded) return null
  const product = matchProduct(loaded.index, query)
  return product ? toOffer(product, loaded.fetchedAt) : null
}

/**
 * Offers for the model names a page shows ("Philips Hue White and Color
 * Ambiance E27"), keyed by those names; names without a confident match are
 * left out. Never throws.
 */
export async function coolblueOffersFor(names: readonly string[]): Promise<CoolblueOffers> {
  if (names.length === 0) return {}
  try {
    const loaded = await feeds()
    if (!loaded) return {}
    const entries = [...new Set(names)].flatMap((name) => {
      const product = matchProductByName(loaded.index, name)
      return product ? [[name, toOffer(product, loaded.fetchedAt)] as const] : []
    })
    return Object.fromEntries(entries)
  } catch (error) {
    warn(`Coolblue offers skipped (${(error as Error).message})`, process.env[AWIN_KEY_ENV])
    return {}
  }
}

/** Offers for a page's model names when the page's language links to Coolblue (Dutch only), else none. */
export async function coolblueOffersForPage(lang: Lang, names: readonly string[]): Promise<CoolblueOffers> {
  return COOLBLUE_LANGS.includes(lang) ? coolblueOffersFor(names) : {}
}
