/**
 * Amazon affiliate links — single source of truth.
 *
 * Every outbound Amazon URL on the site (catalog cards, article blocks,
 * in-text CTAs, comparison tables, quick answers, category picks) is built
 * here. Nothing else may hard-code an Amazon store domain or a partner tag
 * (enforced by tests/lib/affiliate-tags.test.ts).
 *
 * All locales link to amazon.fr with the French store ID. Amazon "Global
 * Earning" (Programme Partenaires, https://www.amazon.fr/b?node=219770841031,
 * checked in Associates Central on 2026-10-30): EU Associates are enrolled
 * automatically; a shopper from Italy, Germany, Spain, the Netherlands, the
 * UK (and US, CA, PL, SE) who clicks an amazon.fr Associate link is sent to
 * the same product on their local store, and the commission is credited to
 * this French store ID. Tax and bank details for those stores are filled in
 * on that account. The former per-locale tags were never registered on it,
 * so clicks from non-French readers earned nothing.
 */

/** Partner tag of the amazon.fr Associates account (Global Earning enabled). */
export const AMAZON_STORE_ID = 'homenuraen05-21'

/** The only Amazon store the site links to. */
export const AMAZON_BASE_URL = 'https://www.amazon.fr'

/** Store host as reported in click analytics. */
export const AMAZON_MARKETPLACE = 'amazon.fr'

/** Product page: https://www.amazon.fr/dp/{ASIN}?tag={store ID}. */
export function amazonProductUrl(asin: string): string {
  return `${AMAZON_BASE_URL}/dp/${encodeURIComponent(asin)}?tag=${AMAZON_STORE_ID}`
}

/**
 * Search-results page for a model name, used for models cited in articles
 * that have no catalog entry (no ASIN or images to maintain).
 */
export function amazonSearchUrl(query: string): string {
  const params = new URLSearchParams({ k: query, tag: AMAZON_STORE_ID })
  return `${AMAZON_BASE_URL}/s?${params.toString()}`
}
