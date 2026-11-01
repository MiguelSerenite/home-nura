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
 */

import type { Lang } from '@/lib/i18n'

export interface AmazonMarket {
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
  fr: { ...AMAZON_FR, tag: AMAZON_STORE_ID },
  en: { ...AMAZON_FR, tag: 'homaviseuk-21' },
  de: { ...AMAZON_FR, tag: 'homavisede-21' },
  es: { ...AMAZON_FR, tag: 'homavisees-21' },
  it: { ...AMAZON_IT, tag: 'homaviseit-21' },
  nl: { ...AMAZON_FR, tag: 'homavisenl-21' },
  pl: { ...AMAZON_FR, tag: 'homavisepl-21' },
  sv: { ...AMAZON_FR, tag: 'homavisese-21' },
  us: { ...AMAZON_FR, tag: 'homaviseus-21' },
  ca: { ...AMAZON_FR, tag: 'homaviseca-21' },
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
 * Any other page of the reader's store (Black Friday event page, Prime free
 * trial), with the tracking ID appended after the page's own parameters.
 */
export function amazonPageUrl(path: `/${string}`, lang: Lang, query: Readonly<Record<string, string>> = {}): string {
  const { baseUrl, tag } = AMAZON_MARKETS[lang]
  const params = new URLSearchParams({ ...query, tag })
  return `${baseUrl}${path}?${params.toString()}`
}
