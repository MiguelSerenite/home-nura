/**
 * North-American market decisions (see ./config.ts): lookups and the link
 * rule shared by every surface that names a product on the US and Canadian
 * versions. Catalog-aware helpers (catalog ASIN, photos) live in ./offers.ts.
 *
 * Link rule (lib/amazon.ts builds every URL, with the market's tracking ID):
 * - a European catalog product the market sells as is (`same` /
 *   `regional`) keeps its amazon.fr product page: Amazon Global Earning
 *   sends the reader to the same product on amazon.com / amazon.ca;
 * - any other model links to an amazon.fr search for its exact
 *   North-American name (amazonMarketModelUrl), which Global Earning
 *   forwards to the reader's store.
 */

import { amazonMarketModelUrl, amazonProductUrl } from '@/lib/amazon'
import type { Lang } from '@/lib/i18n'
import { isNorthAmericanMarket, isSoldAsIs, marketModelsFile, type MarketModelDecision, type MarketPick, type NorthAmericanMarket } from './config'
import { MARKET_DATA } from './data'
import { MarketDataError } from './validate'

export * from './config'
export { MarketDataError } from './validate'

/**
 * The decision for a European model, exactly as the site writes it. A
 * model without one is a data error: it would show a European product to
 * a North-American reader, so it throws (and fails the build).
 */
export function marketDecision(market: NorthAmericanMarket, europeanModel: string): MarketModelDecision {
  const decision = MARKET_DATA[market].models[europeanModel]
  if (!decision) {
    throw new MarketDataError(
      `${marketModelsFile(market)}: no decision for "${europeanModel}". Every European model the site names (catalog, article models, verdict picks, Black Friday picks) needs a us and a ca decision.`,
    )
  }
  return decision
}

export function hasMarketDecision(market: NorthAmericanMarket, europeanModel: string): boolean {
  return europeanModel in MARKET_DATA[market].models
}

/** Every European model with a decision in `market`. */
export function marketModelKeys(market: NorthAmericanMarket): readonly string[] {
  return Object.keys(MARKET_DATA[market].models)
}

/** The verdict picks of an article for `market` (empty when it has none). */
export function marketPicks(market: NorthAmericanMarket, slug: string): readonly MarketPick[] {
  return MARKET_DATA[market].picks[slug] ?? []
}

export function marketPickSlugs(market: NorthAmericanMarket): readonly string[] {
  return Object.keys(MARKET_DATA[market].picks)
}

interface NameIndexEntry {
  /** European models the market sells as is under this name (same / regional). */
  readonly soldAsIs: readonly string[]
  /** First amazon.com / amazon.ca ASIN recorded for the name. */
  readonly asin: string | null
}

function buildNameIndex(market: NorthAmericanMarket): ReadonlyMap<string, NameIndexEntry> {
  const index = new Map<string, NameIndexEntry>()
  for (const [model, decision] of Object.entries(MARKET_DATA[market].models)) {
    if (decision.name === null) continue
    const entry = index.get(decision.name) ?? { soldAsIs: [], asin: null }
    index.set(decision.name, {
      soldAsIs: isSoldAsIs(decision) ? [...entry.soldAsIs, model] : entry.soldAsIs,
      asin: entry.asin ?? decision.asin,
    })
  }
  return index
}

const NAME_INDEX: Readonly<Record<NorthAmericanMarket, ReadonlyMap<string, NameIndexEntry>>> = {
  us: buildNameIndex('us'),
  ca: buildNameIndex('ca'),
}

/** Is `name` a canonical North-American name of `market`'s decisions? */
export function isMarketName(market: NorthAmericanMarket, name: string): boolean {
  return NAME_INDEX[market].has(name)
}

/**
 * The European models that ARE the product `name` (decision `same` or
 * `regional` under that name). Only they may lend it a photo, a score or
 * a catalog product page.
 */
export function soldAsIsSources(market: NorthAmericanMarket, name: string): readonly string[] {
  return NAME_INDEX[market].get(name)?.soldAsIs ?? []
}

/** amazon.com / amazon.ca ASIN recorded for a North-American name, kept for a later direct link. */
export function marketAsinOf(market: NorthAmericanMarket, name: string): string | null {
  return NAME_INDEX[market].get(name)?.asin ?? null
}

/**
 * Buy link for a North-American name: the amazon.fr catalog product page
 * when `catalogAsin` is the ASIN of a catalog product the market sells as
 * is, else an amazon.fr search for the exact name (see the link rule above).
 */
export function marketModelUrl(market: NorthAmericanMarket, name: string, catalogAsin?: string): string {
  if (catalogAsin) return amazonProductUrl(catalogAsin, market)
  return amazonMarketModelUrl({ model: name, asin: marketAsinOf(market, name) }, market)
}

/** Brands of more than one word, so the neutral visual splits brand and model right. */
const MULTI_WORD_BRANDS = ['Google Nest', 'Instant Pot']

/**
 * Brand printed on a product visual for a North-American name: the
 * European brand when the name starts with it ("Ninja", "De'Longhi"),
 * else the name's own brand ("T-fal" for a Moulinex model sold as T-fal).
 */
export function marketBrand(name: string, europeanBrand?: string): string {
  if (europeanBrand && name.startsWith(`${europeanBrand} `)) return europeanBrand
  return MULTI_WORD_BRANDS.find((brand) => name.startsWith(`${brand} `)) ?? name.split(' ')[0]
}

/** How a catalog product appears in the reader's market. */
export type CatalogListing =
  /** European locales: unchanged. */
  | { readonly listed: true; readonly name?: undefined }
  /** US / Canada, sold as is: shown under its North-American name. */
  | { readonly listed: true; readonly name: string }
  /** US / Canada, not sold (substitute or none): hidden, its score and photo belong to the European model. */
  | { readonly listed: false }

/**
 * Catalog cards, tables and podiums only show a product the reader's
 * market sells (same / regional), under its North-American name.
 */
export function catalogListing(frTitle: string, lang: Lang): CatalogListing {
  if (!isNorthAmericanMarket(lang)) return { listed: true }
  const decision = marketDecision(lang, frTitle)
  return isSoldAsIs(decision) && decision.name ? { listed: true, name: decision.name } : { listed: false }
}
