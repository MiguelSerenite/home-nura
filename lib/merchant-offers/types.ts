/**
 * Client-safe part of the merchant offers: the offer props a page passes to
 * components/CoolblueOffer.tsx (plain, already-worded strings built on the
 * server by ./view.ts) and the few constants the click beacon needs to
 * recognise our Awin links. Everything else (merchant table, feeds,
 * matcher, copy, formatting) is server-only and never reaches the browser.
 *
 * The stores and advertisers below mirror the merchant table
 * (./merchants.ts); tests/lib/merchant-offers/merchants.test.ts keeps them
 * in step.
 */
import type { Lang } from '@/lib/i18n'

/** Home Nura's Awin publisher ID (the affiliate ID on every Awin link). */
export const AWIN_PUBLISHER_ID = '1255925'
/** Awin advertiser ID of Coolblue NL. */
export const COOLBLUE_AWIN_ADVERTISER_ID = '85161'
/** Store name logged for a Coolblue NL click (lib/affiliate-click.ts). */
export const COOLBLUE_STORE = 'coolblue.nl'
/** Tracking ID logged for a merchant click: the Awin publisher account. */
export const COOLBLUE_TAG = `awin-${AWIN_PUBLISHER_ID}`

/** Hosts of Awin's tracked links (aw_deep_link). */
export const AWIN_LINK_HOSTS: readonly string[] = ['www.awin1.com', 'awin1.com']

/** Store host of each Awin advertiser of the merchant table. */
export const ADVERTISER_STORES: Readonly<Record<string, string>> = {
  '85161': 'coolblue.nl',
  '85171': 'coolblue.de',
  '85165': 'coolblue.be',
}

/** Locales whose pages link to each store. */
export const STORE_LANGS: Readonly<Record<string, readonly Lang[]>> = {
  'coolblue.nl': ['nl'],
  'coolblue.de': ['de'],
  'coolblue.be': ['nl', 'fr'],
}

/** Store hosts of the merchant table. */
export const MERCHANT_STORES: readonly string[] = Object.keys(STORE_LANGS)

/**
 * A merchant offer as a component renders it: every word already in the
 * page's language, so the browser needs neither the merchant table nor the
 * copy (lib/merchant-offers/view.ts builds it).
 */
export interface CoolblueOffer {
  /** Row of the merchant table ("coolblue-de"), the React key. */
  merchant: string
  /** Store host ("coolblue.be"). */
  store: string
  /** Awin tracked link, checked on the server to carry our publisher ID and the merchant's advertiser ID. */
  url: string
  /** The merchant's own price in euros (click log only; the text is `priceText`). */
  price: number
  /** "€ 139,99", "129,99 €". */
  priceText: string
  /** After the price: "bij Coolblue", "chez Coolblue (Belgique)". */
  atStore: string
  /** Button label, naming the store. */
  button: string
  /** Price date and disclosure ("Prijs op …, prijzen kunnen wijzigen. Home Nura is geen Coolblue…"). */
  note: string
  /** Shown to this country's visitors only (lib/merchant-offers/audience.ts). */
  onlyCountry?: string
  /** Hidden for these countries' visitors (space-separated). */
  exceptCountries?: string
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
  return advertiserId === undefined ? advertiser in ADVERTISER_STORES : advertiser === advertiserId
}

/** Store host of an Awin link of ours to a merchant of the table ("coolblue.de"), or null. */
export function merchantStoreOf(value: string): string | null {
  const advertiser = awinAdvertiserOf(value)
  return advertiser === null ? null : (ADVERTISER_STORES[advertiser] ?? null)
}

/** Locales whose pages link to `store` (none for a store outside the table). */
export function langsOfStore(store: string): readonly Lang[] {
  return STORE_LANGS[store] ?? []
}
