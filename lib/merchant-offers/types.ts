/**
 * Merchant offers shown next to the Amazon links (client-safe: no Node
 * import): Coolblue NL, DE and BE through the publisher's Awin account.
 * The merchants, their feeds and who sees them: ./merchants.ts.
 */
import { MERCHANTS, merchantById, storeOfAdvertiser, type MerchantId } from './merchants'

/** Awin advertiser ID of Coolblue NL. */
export const COOLBLUE_AWIN_ADVERTISER_ID = merchantById('coolblue-nl').advertiserId
/** Home Nura's Awin publisher ID (the affiliate ID on every Awin link). */
export const AWIN_PUBLISHER_ID = '1255925'
/** Store name logged for a Coolblue NL click (lib/affiliate-click.ts). */
export const COOLBLUE_STORE = merchantById('coolblue-nl').store
/** Tracking ID logged for a merchant click: the Awin publisher account. */
export const COOLBLUE_TAG = `awin-${AWIN_PUBLISHER_ID}`

/** Hosts of Awin's tracked links (aw_deep_link). */
export const AWIN_LINK_HOSTS: readonly string[] = ['www.awin1.com', 'awin1.com']

/** A merchant product matched to one of our models, ready to render. */
export interface CoolblueOffer {
  /** Row of the merchant table (./merchants.ts): store, copy and audience. */
  merchant: MerchantId
  /** Awin tracked link (aw_deep_link), checked to carry our publisher ID and the merchant's advertiser ID. */
  url: string
  /** The merchant's own price, in euros. */
  price: number
  /** When the price was read (ISO 8601), shown with the price. */
  priceAt: string
}

/** Offers keyed by the model name the page shows; several merchants may have one for a model (table order). */
export type CoolblueOffers = Readonly<Record<string, readonly CoolblueOffer[]>>

function searchParam(url: URL, ...names: string[]): string | null {
  for (const name of names) {
    const value = url.searchParams.get(name)
    if (value !== null) return value
  }
  return null
}

/** Advertiser ID of an https awin1.com link of Home Nura, or null for any other URL. */
function awinAdvertiserOf(value: string): string | null {
  try {
    const url = new URL(value)
    if (url.protocol !== 'https:' || !AWIN_LINK_HOSTS.includes(url.hostname)) return null
    if (searchParam(url, 'awinaffid', 'a') !== AWIN_PUBLISHER_ID) return null
    return searchParam(url, 'awinmid', 'm')
  } catch {
    return null
  }
}

/**
 * True when `url` is an Awin tracked link of Home Nura (https, awin1.com,
 * our publisher ID) to `advertiserId`, by default to any merchant of the
 * table: the only links an offer may carry. Both Awin link shapes are read:
 * pclick.php (`a`, `m`) and cread.php (`awinaffid`, `awinmid`).
 */
export function isCoolblueAwinLink(value: string, advertiserId?: string): boolean {
  const advertiser = awinAdvertiserOf(value)
  if (advertiser === null) return false
  return advertiserId === undefined ? MERCHANTS.some((m) => m.advertiserId === advertiser) : advertiser === advertiserId
}

/** Store host of an Awin link of ours to a merchant of the table ("coolblue.de"), or null. */
export function merchantStoreOf(value: string): string | null {
  const advertiser = awinAdvertiserOf(value)
  return advertiser === null ? null : storeOfAdvertiser(advertiser)
}
