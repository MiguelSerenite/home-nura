/**
 * Merchant offers for the hub pages, from the publisher's Awin feeds (the
 * merchants of ./merchants.ts: Coolblue NL, DE and BE). Server-only (Node
 * zlib, the secret download key).
 *
 * The feeds are fetched with `next.revalidate` (6 hours, so the hub pages
 * showing offers are regenerated as often) and parsed once per server
 * instance, merchant and period. Without AWIN_DATAFEED_KEY, or when a
 * download fails, there is no offer: the page renders as before and a
 * warning is logged, never the key.
 */
import 'server-only'
import { gunzipSync } from 'node:zlib'
import { createAFeedUrl, feedListUrl, parseCoolblueFeed, parseFeedList, redactKey, type FeedListEntry, type FeedProduct } from './feed'
import { buildOfferIndex, closestProductName, matchProduct, matchProductByName, type ModelQuery, type OfferIndex } from './match'
import { merchantById, merchantsForLang, type Merchant, type MerchantId } from './merchants'
import { modelReferences, type ModelRef } from './references'
import type { CoolblueOffer, CoolblueOffers } from './types'
import { offerView, type MerchantOffer } from './view'
import type { Lang } from '@/lib/i18n'

export const AWIN_KEY_ENV = 'AWIN_DATAFEED_KEY'
/** How long a feed download is reused: 6 hours. */
export const FEED_REVALIDATE_SECONDS = 21600
const FEED_TTL_MS = FEED_REVALIDATE_SECONDS * 1000
/** After a failed load (no key, Awin down), try again after 15 minutes. */
const RETRY_AFTER_FAILURE_MS = 15 * 60 * 1000
/** Next's data cache skips larger responses: the parsed feeds then live in memory only (logged). */
export const FETCH_CACHE_LIMIT_BYTES = 2 * 1024 * 1024

interface LoadedFeeds {
  index: OfferIndex
  /** When the feeds were read: the price date when a product has none. */
  fetchedAt: string
}

const cache = new Map<MerchantId, { expiresAt: number; feeds: Promise<LoadedFeeds | null> }>()

function warn(message: string, key: string | undefined): void {
  console.warn(`[merchant-offers] ${redactKey(message, key)}`)
}

function decode(buffer: Buffer): string {
  // Awin serves gzip files as such (no Content-Encoding): unpack them here.
  const gzipped = buffer.length > 2 && buffer[0] === 0x1f && buffer[1] === 0x8b
  return (gzipped ? gunzipSync(buffer) : buffer).toString('utf8')
}

interface Download {
  text: string
  /** Bytes received (compressed): what Next's data cache stores. */
  bytes: number
}

async function download(url: string): Promise<Download> {
  const response = await fetch(url, { next: { revalidate: FEED_REVALIDATE_SECONDS } })
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  const buffer = Buffer.from(await response.arrayBuffer())
  return { text: decode(buffer), bytes: buffer.length }
}

async function readFeedList(key: string): Promise<FeedListEntry[]> {
  try {
    return parseFeedList((await download(feedListUrl(key))).text)
  } catch (error) {
    warn(`Awin feed list unavailable (${(error as Error).message}); using Create-a-Feed links`, key)
    return []
  }
}

interface ReadFeed {
  products: FeedProduct[]
  bytes: number
}

async function readUrl(url: string, key: string, merchant: Merchant, feedId: string): Promise<ReadFeed> {
  try {
    const { text, bytes } = await download(url)
    return { products: parseCoolblueFeed(text, merchant), bytes }
  } catch (error) {
    warn(`${merchant.id} feed ${feedId} unavailable (${(error as Error).message})`, key)
    return { products: [], bytes: 0 }
  }
}

/**
 * One feed: the Create-a-Feed download with only our columns (small, in
 * the feed's language), else the feed list's own link for it.
 */
async function readFeed(feedId: string, key: string, merchant: Merchant, feedList: () => Promise<FeedListEntry[]>): Promise<ReadFeed> {
  const primary = await readUrl(createAFeedUrl(key, feedId, merchant.feedLanguage), key, merchant, feedId)
  if (primary.products.length > 0) return primary
  const listed = (await feedList()).find((e) => e.feedId === feedId && e.advertiserId === merchant.advertiserId)?.url
  return listed ? readUrl(listed, key, merchant, feedId) : primary
}

async function loadFeeds(merchant: Merchant): Promise<LoadedFeeds | null> {
  const key = process.env[AWIN_KEY_ENV]?.trim()
  if (!key) {
    warn(`${AWIN_KEY_ENV} is not set: no ${merchant.id} offers`, undefined)
    return null
  }
  try {
    const fetchedAt = new Date().toISOString()
    let list: Promise<FeedListEntry[]> | undefined
    const feedList = () => (list ??= readFeedList(key))
    const feeds = await Promise.all(merchant.feedIds.map((feedId) => readFeed(feedId, key, merchant, feedList)))
    const products = feeds.flatMap((f) => f.products)
    if (products.length === 0) {
      warn(`no ${merchant.id} product could be read: no offers`, key)
      return null
    }
    const bytes = feeds.reduce((sum, f) => sum + f.bytes, 0)
    const cacheNote = feeds.some((f) => f.bytes > FETCH_CACHE_LIMIT_BYTES) ? ', over the 2 MB fetch cache: kept in memory only' : ''
    console.info(`[merchant-offers] ${merchant.id}: ${products.length} products (${Math.round(bytes / 1024)} KB${cacheNote})`)
    return { index: buildOfferIndex(products), fetchedAt }
  } catch (error) {
    warn(`${merchant.id} offers disabled (${(error as Error).message})`, key)
    return null
  }
}

/** A merchant's parsed feeds, shared by every page rendered within the period. */
function feeds(merchant: Merchant, now = Date.now()): Promise<LoadedFeeds | null> {
  const cached = cache.get(merchant.id)
  if (cached && cached.expiresAt > now) return cached.feeds
  const pending: Promise<LoadedFeeds | null> = loadFeeds(merchant).then((loaded) => {
    // A failed load is retried sooner than a good one is refreshed.
    if (!loaded && cache.get(merchant.id)?.feeds === pending) {
      cache.set(merchant.id, { expiresAt: Date.now() + RETRY_AFTER_FAILURE_MS, feeds: pending })
    }
    return loaded
  })
  cache.set(merchant.id, { expiresAt: now + FEED_TTL_MS, feeds: pending })
  return pending
}

/** Forget the parsed feeds (tests). */
export function __resetCoolblueFeedsForTests(): void {
  cache.clear()
}

function toOffer(merchant: Merchant, product: FeedProduct, fetchedAt: string): MerchantOffer {
  // Awin's own date when it has one, never later than the download.
  const priceAt = product.updatedAt && product.updatedAt < fetchedAt ? product.updatedAt : fetchedAt
  return { merchant: merchant.id, url: product.url, price: product.price, priceAt }
}

/** A merchant's offer (Coolblue NL by default) for exactly this model, or null (no key, feed down, no confident match). */
export async function coolblueOfferFor(query: ModelQuery, merchantId: MerchantId = 'coolblue-nl'): Promise<MerchantOffer | null> {
  const merchant = merchantById(merchantId)
  const loaded = await feeds(merchant)
  if (!loaded) return null
  const product = matchProduct(loaded.index, query)
  return product ? toOffer(merchant, product, loaded.fetchedAt) : null
}

const asRef = (model: string | ModelRef): ModelRef => (typeof model === 'string' ? { name: model } : model)

/** Models already reported without an offer (one build log line each). */
const reportedMisses = new Set<string>()

/**
 * During `next build` only: a model whose brand the merchant sells but that
 * got no offer, with the closest feed name, to tune the matcher from the
 * build log. Product names only.
 */
function reportMiss(merchant: Merchant, index: OfferIndex, name: string): void {
  if (process.env.NEXT_PHASE !== 'phase-production-build') return
  const key = `${merchant.id}|${name}`
  if (reportedMisses.has(key)) return
  reportedMisses.add(key)
  const closest = closestProductName(index, name)
  if (closest) console.info(`[merchant-offers] ${merchant.id} no offer: "${name}" ~ "${closest}"`)
}

/**
 * One merchant's offers (Coolblue NL by default) for the models a page
 * shows ("Philips Hue White and Color Ambiance E27", or with its catalogue
 * id), keyed by name; models without a confident match are left out (EAN,
 * reference code, then exact name: lib/merchant-offers/match.ts). Never throws.
 */
export async function coolblueOffersFor(
  models: readonly (string | ModelRef)[],
  merchantId: MerchantId = 'coolblue-nl',
): Promise<Readonly<Record<string, MerchantOffer>>> {
  if (models.length === 0) return {}
  const merchant = merchantById(merchantId)
  try {
    const loaded = await feeds(merchant)
    if (!loaded) return {}
    const byName = new Map(models.map(asRef).map((m) => [m.name, m] as const))
    const entries = [...byName.values()].flatMap((model) => {
      const name = model.name
      const product = matchProductByName(loaded.index, name, modelReferences(model))
      if (!product) reportMiss(merchant, loaded.index, name)
      return product ? [[name, toOffer(merchant, product, loaded.fetchedAt)] as const] : []
    })
    return Object.fromEntries(entries)
  } catch (error) {
    warn(`${merchant.id} offers skipped (${(error as Error).message})`, process.env[AWIN_KEY_ENV])
    return {}
  }
}

/**
 * Offers of every merchant the page's language shows (Coolblue NL and BE on
 * /nl, DE on /de, BE on /fr; none elsewhere), keyed by model name, in table
 * order. Offers meant for one country only (Coolblue BE) are rendered for
 * every visitor and shown to that country's visitors only (./audience.ts),
 * so the page stays static.
 */
export async function coolblueOffersForPage(lang: Lang, models: readonly (string | ModelRef)[]): Promise<CoolblueOffers> {
  const merchants = merchantsForLang(lang)
  if (merchants.length === 0 || models.length === 0) return {}
  const perMerchant = await Promise.all(merchants.map((m) => coolblueOffersFor(models, m.id)))
  const byName: Record<string, readonly CoolblueOffer[]> = {}
  for (const offers of perMerchant) {
    for (const [name, offer] of Object.entries(offers)) byName[name] = [...(byName[name] ?? []), offerView(offer)]
  }
  return byName
}
