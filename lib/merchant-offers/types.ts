/**
 * Merchant offers shown next to the Amazon links (client-safe: no Node
 * import). The only merchant so far is Coolblue, on the Dutch version,
 * through the publisher's Awin account.
 *
 * Coolblue programme terms (Awin advertiser 85161): the visitor must know
 * before the click that the link goes to Coolblue and that Home Nura is
 * not Coolblue ("Bekijk bij Coolblue"); feed texts and images are never
 * reworded or edited (we show neither); no coupon, cashback or standard
 * proposition (free delivery, returns) used as an incentive.
 */

/** Awin advertiser ID of Coolblue NL. */
export const COOLBLUE_AWIN_ADVERTISER_ID = '85161'
/** Home Nura's Awin publisher ID (the affiliate ID on every Awin link). */
export const AWIN_PUBLISHER_ID = '1255925'
/** Store name logged for a Coolblue click (lib/affiliate-click.ts). */
export const COOLBLUE_STORE = 'coolblue.nl'
/** Tracking ID logged for a Coolblue click: the Awin publisher account. */
export const COOLBLUE_TAG = `awin-${AWIN_PUBLISHER_ID}`

/** Hosts of Awin's tracked links (aw_deep_link). */
export const AWIN_LINK_HOSTS: readonly string[] = ['www.awin1.com', 'awin1.com']

/** A Coolblue product matched to one of our models, ready to render. */
export interface CoolblueOffer {
  /** Awin tracked link (aw_deep_link), checked to carry our publisher ID and Coolblue's advertiser ID. */
  url: string
  /** Coolblue's own price, in euros. */
  price: number
  /** When the price was read (ISO 8601): shown as "prijs op dd-mm-jjjj hh:mm". */
  priceAt: string
}

/** Offers keyed by the model name the page shows. */
export type CoolblueOffers = Readonly<Record<string, CoolblueOffer>>

function searchParam(url: URL, ...names: string[]): string | null {
  for (const name of names) {
    const value = url.searchParams.get(name)
    if (value !== null) return value
  }
  return null
}

/**
 * True when `url` is an Awin tracked link of Home Nura to Coolblue
 * (https, awin1.com, our publisher ID, Coolblue's advertiser ID), the only
 * links an offer may carry. Both Awin link shapes are read: pclick.php
 * (`a`, `m`) and cread.php (`awinaffid`, `awinmid`).
 */
export function isCoolblueAwinLink(value: string): boolean {
  try {
    const url = new URL(value)
    if (url.protocol !== 'https:' || !AWIN_LINK_HOSTS.includes(url.hostname)) return false
    return (
      searchParam(url, 'awinaffid', 'a') === AWIN_PUBLISHER_ID &&
      searchParam(url, 'awinmid', 'm') === COOLBLUE_AWIN_ADVERTISER_ID
    )
  } catch {
    return false
  }
}
