/**
 * The merchants whose offers show next to the Amazon links, all through
 * Home Nura's Awin publisher account (1255925). Client-safe: no Node import.
 *
 * Each row names one Awin programme: its advertiser ID (the `m` / `awinmid`
 * of every tracked link), the feeds we read, the store a click is logged
 * under, the page locales that show it and the visitors it is for.
 *
 * Coolblue's terms (same company for NL, DE and BE): the visitor knows
 * before the click that the link goes to Coolblue and that Home Nura is not
 * Coolblue; feed texts and images are never reworded or edited (we show
 * neither); no coupon, cashback or standard proposition (free delivery,
 * returns) used as an incentive.
 */
import type { Lang } from '@/lib/i18n'

/** Who sees a merchant's offers, from the visitor's IP country (hn_country, set by proxy.ts). */
export type Audience =
  /** Every visitor of the merchant's locales. */
  | { kind: 'all' }
  /** Only visitors in this country (ISO 3166-1 alpha-2): the store delivers there only. */
  | { kind: 'only'; country: string }
  /** Every visitor but those of these countries (another store of the table serves them). */
  | { kind: 'except'; countries: readonly string[] }

export type MerchantId = 'coolblue-nl' | 'coolblue-de' | 'coolblue-be-nl' | 'coolblue-be-fr'

export interface Merchant {
  id: MerchantId
  /** Awin advertiser ID of the programme. */
  advertiserId: string
  /** Awin feeds read for the offers. */
  feedIds: readonly string[]
  /** Language of those feeds (Create-a-Feed `language/…`). */
  feedLanguage: 'nl' | 'de' | 'fr'
  /** Store host logged for a click (/api/click `store`). */
  store: string
  /** Store name the offer shows before the click. */
  label: string
  /** Page locales that show the offers. */
  langs: readonly Lang[]
  audience: Audience
}

export const MERCHANTS: readonly Merchant[] = [
  {
    id: 'coolblue-nl',
    advertiserId: '85161',
    // The full feed 96636 (17,368 products) is left out: these six hold every model we compare.
    feedIds: [
      '95890', // Keuken
      '95892', // Huishouden en wonen
      '95897', // Domotica
      '95834', // Koffie
      '95904', // Wasmachines en wasdrogers
      '95886', // Tuin en Klussen
    ],
    feedLanguage: 'nl',
    store: 'coolblue.nl',
    label: 'Coolblue',
    langs: ['nl'],
    // Belgian readers of /nl get Coolblue BE instead.
    audience: { kind: 'except', countries: ['BE'] },
  },
  {
    id: 'coolblue-de',
    advertiserId: '85171',
    feedIds: ['95921'], // Full Feed DE (all products nationwide available), 14,894 products
    feedLanguage: 'de',
    store: 'coolblue.de',
    label: 'Coolblue',
    langs: ['de'],
    audience: { kind: 'all' },
  },
  {
    id: 'coolblue-be-nl',
    advertiserId: '85165',
    feedIds: ['96638'], // BE (NL) Full Feed, 18,189 products
    feedLanguage: 'nl',
    store: 'coolblue.be',
    label: 'Coolblue (België)',
    langs: ['nl'],
    // Coolblue BE only delivers to Belgium.
    audience: { kind: 'only', country: 'BE' },
  },
  {
    id: 'coolblue-be-fr',
    advertiserId: '85165',
    feedIds: ['96637'], // BE (FR) Full Feed, 17,958 products
    feedLanguage: 'fr',
    store: 'coolblue.be',
    label: 'Coolblue (Belgique)',
    langs: ['fr'],
    audience: { kind: 'only', country: 'BE' },
  },
]

/** The merchant of an ID (every ID is in the table). */
export function merchantById(id: MerchantId): Merchant {
  const merchant = MERCHANTS.find((m) => m.id === id)
  if (!merchant) throw new Error(`Unknown merchant ${id}`)
  return merchant
}

/** Merchants shown on pages of `lang`, in table order. */
export function merchantsForLang(lang: string): Merchant[] {
  return MERCHANTS.filter((m) => (m.langs as readonly string[]).includes(lang))
}

/** Store hosts of the table (each once). */
export const MERCHANT_STORES: readonly string[] = [...new Set(MERCHANTS.map((m) => m.store))]

/** Locales whose pages link to `store`, or none for a store outside the table. */
export function langsOfStore(store: string): Lang[] {
  return [...new Set(MERCHANTS.filter((m) => m.store === store).flatMap((m) => m.langs))]
}

/** Store host of an Awin advertiser of the table, or null. */
export function storeOfAdvertiser(advertiserId: string): string | null {
  return MERCHANTS.find((m) => m.advertiserId === advertiserId)?.store ?? null
}

/** Whether a visitor from `country` (null: unknown) sees the offers of this audience. */
export function audienceIncludes(audience: Audience, country: string | null): boolean {
  if (audience.kind === 'all') return true
  const visitor = country?.toUpperCase() ?? null
  if (audience.kind === 'only') return visitor === audience.country
  return visitor === null || !audience.countries.includes(visitor)
}

/** Countries some audience of the table names (each needs its rules in app/globals.css). */
export const GATED_COUNTRIES: readonly string[] = [
  ...new Set(MERCHANTS.flatMap((m) => (m.audience.kind === 'only' ? [m.audience.country] : m.audience.kind === 'except' ? m.audience.countries : []))),
]
