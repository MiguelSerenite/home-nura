import { amazonSearchUrl, getStaticProducts } from '@/lib/products'
import { getArticleModels } from '@/lib/blog/article-models'
import { getSmartKitchenProductsByCategory, type SmartKitchenCategory } from '@/lib/smart-kitchen-products'

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
  price: string
  priceNumeric: number
  image: string
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
  const byScore = [...catalog].sort((a, b) => b.nuraScore - a.nuraScore)
  const products = [...cited, ...byScore]
    .filter((p, i, all) => all.findIndex((q) => q.asin === p.asin) === i)
    .slice(0, MAX_PRODUCTS)
    .map(({ asin, title, price, priceNumeric, image, url, nuraScore, capacity }) => ({
      asin, title, price, priceNumeric, image, url, nuraScore, capacity,
    }))
  return { source, products }
}

export type ArticleRecommendations =
  | { kind: 'catalog'; source: Exclude<ArticleProductSource, null>; products: ArticleProduct[] }
  | { kind: 'models'; models: { name: string; url: string }[] }

/**
 * What an article recommends: catalog products (images, scores) when the
 * catalog covers the topic, else the models the article cites, linked to
 * an Amazon search on the reader's store. null when neither exists.
 */
export function getArticleRecommendations(
  article: { slug: string; pillar: string },
  lang: string,
): ArticleRecommendations | null {
  const { source, products } = getArticleProducts(article, lang)
  if (source !== null && products.length > 0) return { kind: 'catalog', source, products }
  const models = getArticleModels(article.slug).map((name) => ({ name, url: amazonSearchUrl(name, lang) }))
  return models.length > 0 ? { kind: 'models', models } : null
}
