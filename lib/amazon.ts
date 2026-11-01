/**
 * Amazon affiliate links — single source of truth.
 *
 * Every outbound Amazon URL on the site (catalog cards, article blocks,
 * in-text CTAs, comparison tables, quick answers, category picks, Black
 * Friday pages) is built here, for the reader's language. Nothing else may
 * hard-code an Amazon store domain or a tracking ID (enforced by
 * tests/lib/affiliate-tags.test.ts).
 *
 * One French Associates account (store ID homenuraen05-21) with one
 * tracking ID per market, verified on 31/10/2026 in Associates Central
 * ("Gérez vos ID de suivi"). The market table below maps each language
 * version to a store and a tracking ID:
 *
 * - French keeps homenuraen05-21: it carries every past sale.
 * - Italian links go straight to amazon.it with homaviseit-21: SiteStripe
 *   on amazon.it (Store ID homenuraen05-21) offers that tracking ID, so
 *   direct amazon.it links are verified. Catalog ASINs amazon.it does not
 *   carry (AMAZON_MISSING_ASINS) link to a search for the model instead.
 * - Every other locale links to amazon.fr with its own tracking ID. Amazon
 *   "Global Earning" (https://www.amazon.fr/b?node=219770841031, read on
 *   31/10/2026): a shopper from the US, CA, UK, DE, IT, ES, NL, PL or SE
 *   who clicks an amazon.fr Associate link is sent to the same or a similar
 *   product (else a search) on their local store, and the commission goes
 *   to this same French account; the tracking ID reports it per market.
 *   Direct links to the other local stores are not verified yet.
 * - The Swedish (sv, homavisese-21), US (us, homaviseus-21) and Canadian
 *   (ca, homaviseca-21) versions are among them: their links go to
 *   amazon.fr and Global Earning sends readers on to amazon.se, amazon.com
 *   and amazon.ca. Direct links to those three stores are not verified.
 * - Models sold only in North America (US and Canadian floor-care guides,
 *   and the North-American names of lib/market-models on every other US and
 *   Canadian page) link to an amazon.fr search for the exact model
 *   (amazonMarketModelUrl); their amazon.com / amazon.ca ASIN is kept for a
 *   later direct link, switched off in AMAZON_DIRECT_MODEL_STORES. A catalog
 *   product the market sells as is keeps its amazon.fr product page.
 */

import type { Lang } from '@/lib/i18n'

/** Market of a language version, as its tracking ID names it ("uk" for English, "se" for Swedish). */
export type AmazonMarketCode = 'fr' | 'uk' | 'de' | 'es' | 'it' | 'nl' | 'pl' | 'se' | 'us' | 'ca'

export interface AmazonMarket {
  /** Market the version is written for, reported with every affiliate click. */
  readonly market: AmazonMarketCode
  /** Store origin the links of this language version point to. */
  readonly baseUrl: string
  /** Store host as reported in click analytics ("amazon.fr"). */
  readonly marketplace: string
  /** Tracking ID of this language version on the French Associates account. */
  readonly tag: string
}

/** Store ID of the French Associates account, also the tracking ID of the French version. */
export const AMAZON_STORE_ID = 'homenuraen05-21'

const AMAZON_FR = { baseUrl: 'https://www.amazon.fr', marketplace: 'amazon.fr' } as const
const AMAZON_IT = { baseUrl: 'https://www.amazon.it', marketplace: 'amazon.it' } as const

/** Store and tracking ID of every language version. */
export const AMAZON_MARKETS: Readonly<Record<Lang, AmazonMarket>> = {
  fr: { ...AMAZON_FR, market: 'fr', tag: AMAZON_STORE_ID },
  en: { ...AMAZON_FR, market: 'uk', tag: 'homaviseuk-21' },
  de: { ...AMAZON_FR, market: 'de', tag: 'homavisede-21' },
  es: { ...AMAZON_FR, market: 'es', tag: 'homavisees-21' },
  it: { ...AMAZON_IT, market: 'it', tag: 'homaviseit-21' },
  nl: { ...AMAZON_FR, market: 'nl', tag: 'homavisenl-21' },
  pl: { ...AMAZON_FR, market: 'pl', tag: 'homavisepl-21' },
  sv: { ...AMAZON_FR, market: 'se', tag: 'homavisese-21' },
  us: { ...AMAZON_FR, market: 'us', tag: 'homaviseus-21' },
  ca: { ...AMAZON_FR, market: 'ca', tag: 'homaviseca-21' },
}

/**
 * Catalog ASINs a market's store does not carry (its product page is a
 * 404), each with the model name searched on that store instead. amazon.it,
 * checked on 31/10/2026: these two are missing, the other 22 catalog ASINs
 * exist. tests/lib/amazon-search.test.ts keeps each entry tied to a catalog
 * product whose French title contains the model name.
 */
export const AMAZON_MISSING_ASINS: Readonly<Partial<Record<Lang, Readonly<Record<string, string>>>>> = {
  it: {
    B0BYT67H2S: 'Instant Pot Duo Plus WhisperQuiet',
    B0FPWSDF86: 'Cosori Dual Blaze Smart',
  },
}

/** Every store host the site links to, for click validation. */
export const AMAZON_MARKETPLACES: readonly string[] = [
  ...new Set(Object.values(AMAZON_MARKETS).map((market) => market.marketplace)),
]

/** Every market code, for click validation and reports. */
export const AMAZON_MARKET_CODES: readonly AmazonMarketCode[] = Object.values(AMAZON_MARKETS).map((market) => market.market)

/** Every tracking ID the site links with, for click validation. */
export const AMAZON_TAGS: readonly string[] = Object.values(AMAZON_MARKETS).map((market) => market.tag)

export function amazonMarket(lang: Lang): AmazonMarket {
  return AMAZON_MARKETS[lang]
}

/** Store host the links of `lang` point to ("amazon.it" for Italian). */
export function amazonMarketplace(lang: Lang): string {
  return AMAZON_MARKETS[lang].marketplace
}

/**
 * Search-results page for a model name on the reader's store, used for
 * models cited in articles that have no catalog entry and for catalog
 * products the store does not carry.
 */
export function amazonSearchUrl(query: string, lang: Lang): string {
  const { baseUrl, tag } = AMAZON_MARKETS[lang]
  const params = new URLSearchParams({ k: query, tag })
  return `${baseUrl}/s?${params.toString()}`
}

/**
 * Product page on the reader's store ({store}/dp/{ASIN}?tag={tracking ID}),
 * or a search for the model when that store lacks the ASIN.
 */
export function amazonProductUrl(asin: string, lang: Lang): string {
  const missingModel = AMAZON_MISSING_ASINS[lang]?.[asin]
  if (missingModel) return amazonSearchUrl(missingModel, lang)
  const { baseUrl, tag } = AMAZON_MARKETS[lang]
  return `${baseUrl}/dp/${encodeURIComponent(asin)}?tag=${tag}`
}

/**
 * Direct product links for market-specific models (the US and Canadian
 * floor-care guides cite models sold on amazon.com / amazon.ca, which
 * amazon.fr does not carry). Per market, the store origin to link
 * {store}/dp/{ASIN}?tag={tracking ID} on; null keeps the verified route,
 * an amazon.fr search for the model that Global Earning forwards to the
 * reader's store. Both stay off: direct amazon.com links with homaviseus-21
 * and amazon.ca links with homaviseca-21 are not verified. Switching one on
 * (after a SiteStripe check on that store) also means adding its origin to
 * LINKED_STORES in tests/lib/affiliate-tags.test.ts.
 */
export const AMAZON_DIRECT_MODEL_STORES: Readonly<Partial<Record<Lang, string | null>>> = {
  us: null,
  ca: null,
}

/**
 * Link for a model sold in the reader's market (floor-care guides, US and
 * Canadian picks of lib/market-models): an
 * amazon.fr search for the exact model name with the market's tracking ID
 * (Global Earning sends US and Canadian shoppers to their local store),
 * or a direct product page once AMAZON_DIRECT_MODEL_STORES enables that
 * market and the model has an ASIN there. The ASIN stays in the data for
 * that switch.
 */
export function amazonMarketModelUrl(
  { model, asin }: { readonly model: string; readonly asin: string | null },
  lang: Lang,
  directStores: Readonly<Partial<Record<Lang, string | null>>> = AMAZON_DIRECT_MODEL_STORES,
): string {
  const directStore = directStores[lang]
  if (directStore && asin) return `${directStore}/dp/${encodeURIComponent(asin)}?tag=${AMAZON_MARKETS[lang].tag}`
  return amazonSearchUrl(model, lang)
}

/**
 * Any other page of the reader's store (Black Friday event page, Prime free
 * trial), with the tracking ID appended after the page's own parameters.
 */
export function amazonPageUrl(path: `/${string}`, lang: Lang, query: Readonly<Record<string, string>> = {}): string {
  const { baseUrl, tag } = AMAZON_MARKETS[lang]
  const params = new URLSearchParams({ ...query, tag })
  return `${baseUrl}${path}?${params.toString()}`
}
