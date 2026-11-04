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
import { gunzipSync } from 'node:zlib'
import { coolblueFeedUrls, feedListUrl, parseCoolblueFeed, parseFeedList, redactKey, type FeedListEntry, type FeedProduct } from './feed'
import { buildOfferIndex, matchProduct, matchProductByName, type ModelQuery, type OfferIndex } from './match'
import { merchantById, merchantsForLang, type Merchant, type MerchantId } from './merchants'
import type { CoolblueOffer, CoolblueOffers } from './types'
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

const cache = new Map<MerchantId, { expiresAt: number; feeds: Promise<LoadedFeeds | null> }>()

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

async function readFeed(url: string, key: string, merchant: Merchant): Promise<FeedProduct[]> {
  try {
    return parseCoolblueFeed(await download(url), merchant)
  } catch (error) {
    warn(`${merchant.id} feed unavailable (${(error as Error).message})`, key)
    return []
  }
}

async function loadFeeds(merchant: Merchant): Promise<LoadedFeeds | null> {
  const key = process.env[AWIN_KEY_ENV]?.trim()
  if (!key) {
    warn(`${AWIN_KEY_ENV} is not set: no ${merchant.id} offers`, undefined)
    return null
  }
  try {
    const fetchedAt = new Date().toISOString()
    const urls = coolblueFeedUrls(key, await readFeedList(key), merchant)
    const products = (await Promise.all(urls.map((url) => readFeed(url, key, merchant)))).flat()
    if (products.length === 0) {
      warn(`no ${merchant.id} product could be read: no offers`, key)
      return null
    }
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

function toOffer(merchant: Merchant, product: FeedProduct, fetchedAt: string): CoolblueOffer {
  // Awin's own date when it has one, never later than the download.
  const priceAt = product.updatedAt && product.updatedAt < fetchedAt ? product.updatedAt : fetchedAt
  return { merchant: merchant.id, url: product.url, price: product.price, priceAt }
}

/** A merchant's offer (Coolblue NL by default) for exactly this model, or null (no key, feed down, no confident match). */
export async function coolblueOfferFor(query: ModelQuery, merchantId: MerchantId = 'coolblue-nl'): Promise<CoolblueOffer | null> {
  const merchant = merchantById(merchantId)
  const loaded = await feeds(merchant)
  if (!loaded) return null
  const product = matchProduct(loaded.index, query)
  return product ? toOffer(merchant, product, loaded.fetchedAt) : null
}

/**
 * One merchant's offers (Coolblue NL by default) for the model names a page
 * shows ("Philips Hue White and Color Ambiance E27"), keyed by those names;
 * names without a confident match are left out. Never throws.
 */
export async function coolblueOffersFor(
  names: readonly string[],
  merchantId: MerchantId = 'coolblue-nl',
): Promise<Readonly<Record<string, CoolblueOffer>>> {
  if (names.length === 0) return {}
  const merchant = merchantById(merchantId)
  try {
    const loaded = await feeds(merchant)
    if (!loaded) return {}
    const entries = [...new Set(names)].flatMap((name) => {
      const product = matchProductByName(loaded.index, name)
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
export async function coolblueOffersForPage(lang: Lang, names: readonly string[]): Promise<CoolblueOffers> {
  const merchants = merchantsForLang(lang)
  if (merchants.length === 0 || names.length === 0) return {}
  const perMerchant = await Promise.all(merchants.map((m) => coolblueOffersFor(names, m.id)))
  const byName: Record<string, readonly CoolblueOffer[]> = {}
  for (const offers of perMerchant) {
    for (const [name, offer] of Object.entries(offers)) byName[name] = [...(byName[name] ?? []), offer]
  }
  return byName
}
