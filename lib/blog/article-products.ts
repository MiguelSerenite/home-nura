import { getStaticProducts } from '@/lib/products'
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
  [/multicuiseur|robot-cuiseur|cookeo/, 'multicuiseurs'],
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
  const catalog = source === 'airfryers' ? getStaticProducts(lang) : getSmartKitchenProductsByCategory(lang, source)
  const products = [...catalog]
    .sort((a, b) => b.nuraScore - a.nuraScore)
    .slice(0, MAX_PRODUCTS)
    .map(({ asin, title, price, priceNumeric, image, url, nuraScore, capacity }) => ({
      asin, title, price, priceNumeric, image, url, nuraScore, capacity,
    }))
  return { source, products }
}
