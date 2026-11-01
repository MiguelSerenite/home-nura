import { amazonProductUrl, amazonSearchUrl } from '@/lib/amazon'
import { resolveLang } from '@/lib/i18n'
import { isNorthAmericanMarket, isSoldAsIs, marketDecision, type NorthAmericanMarket } from '@/lib/market-models'
import { catalogAsinOf, offerForEuropeanModel } from '@/lib/market-models/offers'
import { productPhoto } from '@/lib/product-images'
import type { ProductPhoto } from '@/lib/product-photo'
import type { ProductVisualData } from '@/lib/product-visual'
import { getStaticProducts, staticProducts } from '@/lib/products'
import { getArticleModels } from '@/lib/blog/article-models'
import {
  getSmartKitchenProducts,
  getSmartKitchenProductsByCategory,
  smartKitchenStaticProducts,
  type SmartKitchenCategory,
} from '@/lib/smart-kitchen-products'

/**
 * Which catalog an article's product block draws from. `null` = the
 * catalog has nothing on the article's topic, so no product block is shown
 * (an air fryer under a security-camera article helps nobody).
 */
export type ArticleProductSource = 'airfryers' | SmartKitchenCategory | null

const AIRFRYER_PILLARS = new Set(['guides/airfryers', 'guides/airfryer-vs-four'])

// First match wins: slug keywords are more specific than the pillar.
const SLUG_RULES: ReadonlyArray<[RegExp, SmartKitchenCategory]> = [
  [/balance/, 'balances'],
  [/barbecue|thermometre/, 'thermometres-viande'],
  [/cafetiere/, 'cafetieres'],
  [/multicuiseur/, 'multicuiseurs'],
  [/smart-plugs|prise/, 'prises-connectees'],
]

const MAX_PRODUCTS = 3

export function articleProductSource(article: { slug: string; pillar: string }): ArticleProductSource {
  const rule = SLUG_RULES.find(([pattern]) => pattern.test(article.slug))
  if (rule) return rule[1]
  return AIRFRYER_PILLARS.has(article.pillar) ? 'airfryers' : null
}

export interface ArticleProduct {
  asin: string
  title: string
  /** Budget tier and click analytics only, never rendered. */
  priceNumeric: number
  visual: ProductVisualData
  url: string
  nuraScore: number
  capacity: string
}

export function getArticleProducts(
  article: { slug: string; pillar: string },
  lang: string,
): { source: ArticleProductSource; products: ArticleProduct[] } {
  const source = articleProductSource(article)
  if (source === null) return { source, products: [] }
  const catalogFor = (l: string) =>
    source === 'airfryers' ? getStaticProducts(l) : getSmartKitchenProductsByCategory(l, source)
  const catalog = catalogFor(lang)
  // Products the article itself cites (by French catalog title) come first,
  // so a Cosori review shows the Cosori; best Nura scores fill the rest.
  const asinByFrTitle = new Map(catalogFor('fr').map((p) => [p.title, p.asin]))
  const cited = getArticleModels(article.slug)
    .map((name) => catalog.find((p) => p.asin === asinByFrTitle.get(name)))
    .filter((p): p is (typeof catalog)[number] => p !== undefined)
  // Fill-ins stay within the price range the article recommends: a budget
  // guide that cites two €80 models must not be padded with a €230 one.
  const priceCeiling = cited.length > 0 ? Math.max(...cited.map((p) => p.priceNumeric)) : Infinity
  const byScore = [...catalog]
    .filter((p) => p.priceNumeric <= priceCeiling)
    .sort((a, b) => b.nuraScore - a.nuraScore)
  const products = [...cited, ...byScore]
    .filter((p, i, all) => all.findIndex((q) => q.asin === p.asin) === i)
    .slice(0, MAX_PRODUCTS)
    .map(({ asin, title, priceNumeric, visual, url, nuraScore, capacity }) => ({
      asin, title, priceNumeric, visual, url, nuraScore, capacity,
    }))
  return { source, products }
}

export type ArticleRecommendations =
  | { kind: 'catalog'; source: Exclude<ArticleProductSource, null>; products: ArticleProduct[] }
  | { kind: 'models'; models: { name: string; url: string; photo?: ProductPhoto }[] }

/**
 * What an article recommends: catalog products (visuals, scores) when the
 * catalog covers the topic, else the models the article cites, linked to
 * an Amazon search on the reader's store. null when neither exists.
 */
export function getArticleRecommendations(
  article: { slug: string; pillar: string },
  lang: string,
): ArticleRecommendations | null {
  const { source, products } = getArticleProducts(article, lang)
  if (source !== null && products.length > 0) return { kind: 'catalog', source, products }
  const l = resolveLang(lang)
  const models = isNorthAmericanMarket(l)
    ? marketCitedModels(article.slug, l)
    : getArticleModels(article.slug).map((name) => {
        const { url } = resolveModelLink(name, lang)
        const photo = productPhoto({ name }, l)
        return { name, url, ...(photo ? { photo } : {}) }
      })
  return models.length > 0 ? { kind: 'models', models } : null
}

/**
 * US / Canada: the cited models that market sells as is, under their
 * North-American name. A substituted model is not "mentioned in this
 * guide" under another product's name: the verdict carries the substitutes.
 */
function marketCitedModels(slug: string, market: NorthAmericanMarket): { name: string; url: string; photo?: ProductPhoto }[] {
  return getArticleModels(slug)
    .flatMap((model) => {
      if (!isSoldAsIs(marketDecision(market, model))) return []
      const offer = offerForEuropeanModel(model, market)
      return offer ? [{ name: offer.name, url: offer.url, ...(offer.photo ? { photo: offer.photo } : {}) }] : []
    })
    .filter((m, i, all) => all.findIndex((o) => o.name === m.name) === i)
}

/** A model an article recommends, ready to link. */
export interface ArticleAffiliateModel {
  /** Model name as cited (French catalog title for catalog products). */
  name: string
  /** Name shown to the reader (localized catalog title when there is one). */
  label: string
  url: string
  asin?: string
  /** Cited by the article (ARTICLE_MODELS), as opposed to a catalog fill-in. */
  cited: boolean
  /**
   * US / Canada: the reader's market does not sell this European model
   * (substitute or none). Its mentions stay plain text: it is listed only
   * so that a mention of it is never read as a neighbouring model.
   */
  unlinked?: true
}

type CatalogEntry = { asin: string; title: string; url: string }

/** Catalog products by French title, projected for one language. */
function catalogByFrTitle(lang: string): Map<string, CatalogEntry> {
  const localized = new Map<string, CatalogEntry>(
    [...getStaticProducts(lang), ...getSmartKitchenProducts(lang)].map((p) => [p.asin, p]),
  )
  return new Map(
    [...getStaticProducts('fr'), ...getSmartKitchenProducts('fr')].flatMap((p) => {
      const entry = localized.get(p.asin)
      return entry ? [[p.title, entry] as const] : []
    }),
  )
}

/**
 * Buy link for a cited model: the product page when the catalog carries
 * it (known ASIN), else an Amazon search for its name.
 */
export function resolveModelLink(name: string, lang: string): ArticleAffiliateModel {
  const l = resolveLang(lang)
  if (isNorthAmericanMarket(l)) return marketModelLink(name, l, true)
  const product = catalogByFrTitle(lang).get(name)
  return product
    ? { name, label: product.title, url: product.url, asin: product.asin, cited: true }
    : { name, label: name, url: amazonSearchUrl(name, l), cited: true }
}

/**
 * US / Canada: a European model the market sells as is links under its
 * North-American name (catalog product page, else a search for that name);
 * any other one stays unlinked.
 */
function marketModelLink(name: string, market: NorthAmericanMarket, cited: boolean): ArticleAffiliateModel {
  const asin = catalogAsinOf(name)
  const decision = marketDecision(market, name)
  const offer = isSoldAsIs(decision) ? offerForEuropeanModel(name, market) : null
  if (!offer) return { name, label: name, url: '', ...(asin ? { asin } : {}), cited, unlinked: true }
  // A catalog product the market sells keeps its own amazon.fr page.
  const url = asin ? amazonProductUrl(asin, market) : offer.url
  return { name, label: offer.name, url, ...(asin ? { asin } : {}), cited }
}

/**
 * Every model an article may link in its body: the models it cites
 * (ARTICLE_MODELS), then the catalog products of its own topic. A link is
 * only placed where the text actually names one of them, so an article
 * never gets a product from another topic.
 */
export function getArticleAffiliateModels(
  article: { slug: string; pillar: string },
  lang: string,
): ArticleAffiliateModel[] {
  const cited = getArticleModels(article.slug).map((name) => resolveModelLink(name, lang))
  const source = articleProductSource(article)
  const l = resolveLang(lang)
  if (isNorthAmericanMarket(l)) {
    // Every catalog product of the topic, sold or not, so that a mention of
    // an unsold one is claimed by its own name and left unlinked.
    const topical = source === null ? [] : topicCatalogFrTitles(source).map((title) => marketModelLink(title, l, false))
    return dedupeModels([...cited, ...topical])
  }
  const frTitles = new Map(
    [...getStaticProducts('fr'), ...getSmartKitchenProducts('fr')].map((p) => [p.asin, p.title]),
  )
  const topical: ArticleAffiliateModel[] =
    source === null
      ? []
      : (source === 'airfryers' ? getStaticProducts(lang) : getSmartKitchenProductsByCategory(lang, source)).map((p) => ({
          name: frTitles.get(p.asin) ?? p.title,
          label: p.title,
          url: p.url,
          asin: p.asin,
          cited: false,
        }))
  return dedupeModels([...cited, ...topical])
}

function dedupeModels(models: readonly ArticleAffiliateModel[]): ArticleAffiliateModel[] {
  return models.filter(
    (m, i, all) => all.findIndex((o) => (m.asin ? o.asin === m.asin : o.name === m.name)) === i,
  )
}

/** French titles of the catalog products of one topic, sold in the reader's market or not. */
function topicCatalogFrTitles(source: Exclude<ArticleProductSource, null>): string[] {
  return source === 'airfryers'
    ? staticProducts.map((p) => p.title.fr)
    : smartKitchenStaticProducts.filter((p) => p.category === source).map((p) => p.title.fr)
}
