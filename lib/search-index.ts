import { getStaticProducts } from '@/lib/products'

/**
 * Slim product list for the navbar search modal. Loaded with a dynamic
 * import when the search opens, so the product catalog is not shipped in
 * the JS of every page that renders the navbar.
 */
export function getSearchIndex(lang: string) {
  return getStaticProducts(lang).map((p) => ({
    title: p.title,
    price: p.price,
    image: p.image,
    asin: p.asin,
    capacity: p.capacity,
    bestFor: p.bestFor,
  }))
}
