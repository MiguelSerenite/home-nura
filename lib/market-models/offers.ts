/**
 * What a North-American reader is offered for a model: its canonical name,
 * its buy link (link rule in ./index.ts) and, only when the market sells
 * the European product itself, that product's official photo.
 *
 * A substitute is a different product: it never inherits the European
 * model's photo, score or catalog page. A North-American name gets a photo
 * or a catalog product page only through the European models that ARE that
 * product (decision `same` / `regional` under that name), so one name has
 * the same link and visual on every page.
 */

import { productPhoto } from '@/lib/product-images'
import type { ProductPhoto } from '@/lib/product-photo'
import { staticProducts } from '@/lib/products'
import { smartKitchenStaticProducts } from '@/lib/smart-kitchen-products'
import { marketDecision, marketModelUrl, soldAsIsSources, type NorthAmericanMarket } from './index'

export interface MarketOffer {
  /** Canonical North-American name: the label of every buy link. */
  readonly name: string
  readonly url: string
  /** amazon.fr ASIN of the catalog product the link opens (sold as is in the market). */
  readonly asin?: string
  /** Official photo of that same product, when the manifest has one. */
  readonly photo?: ProductPhoto
}

/** Catalog ASIN of a model by any of its catalog titles (the site names catalog products by their French title). */
const CATALOG_ASIN_BY_TITLE: ReadonlyMap<string, string> = [...staticProducts, ...smartKitchenStaticProducts]
  .flatMap((p) => [p.title.fr, ...Object.values(p.title)].map((title) => [title, p.asin] as const))
  .reduce((map, [title, asin]) => (map.has(title) ? map : new Map([...map, [title, asin]])), new Map<string, string>())

/** amazon.fr ASIN when the site's catalog carries this European model. */
export function catalogAsinOf(europeanModel: string): string | undefined {
  return CATALOG_ASIN_BY_TITLE.get(europeanModel)
}

/** The offer behind a canonical North-American name (a market pick, a decision's name). */
export function offerForMarketName(name: string, market: NorthAmericanMarket): MarketOffer {
  const sources = soldAsIsSources(market, name)
  const catalogSource = sources.find((model) => catalogAsinOf(model))
  const asin = catalogSource ? catalogAsinOf(catalogSource) : undefined
  const photo = [...(catalogSource ? [catalogSource] : []), ...sources]
    .map((model) => productPhoto({ asin: catalogAsinOf(model), name: model }, market, name))
    .find((p) => p !== undefined)
  return {
    name,
    url: marketModelUrl(market, name, asin),
    ...(asin ? { asin } : {}),
    ...(photo ? { photo } : {}),
  }
}

/** The offer for a European model in `market`: null when the market has no equivalent (`none`). */
export function offerForEuropeanModel(europeanModel: string, market: NorthAmericanMarket): MarketOffer | null {
  const decision = marketDecision(market, europeanModel)
  return decision.name === null ? null : offerForMarketName(decision.name, market)
}
