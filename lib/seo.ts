// Shared SEO helpers: site-wide "last updated" date and schema builders.

const BASE_URL = 'https://homenura.com'

/**
 * Single source of truth for the site-wide "last updated" signal.
 * Bump this whenever the comparison/selection is refreshed so crawlers
 * (and LLM summarizers) pick up the freshness signal.
 */
export const SITE_LAST_UPDATED_ISO = '2026-04-14'

const localeMap: Record<string, string> = {
  fr: 'fr-FR',
  de: 'de-DE',
  es: 'es-ES',
  it: 'it-IT',
  nl: 'nl-NL',
  en: 'en-GB',
}

export function formatLastUpdated(lang: string, iso: string = SITE_LAST_UPDATED_ISO): string {
  const locale = localeMap[lang] || 'fr-FR'
  return new Date(iso).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export const lastUpdatedLabel: Record<string, string> = {
  fr: 'Mis à jour le',
  de: 'Aktualisiert am',
  es: 'Actualizado el',
  it: 'Aggiornato il',
  nl: 'Bijgewerkt op',
  en: 'Updated',
}

interface ProductLike {
  title: string
  price: string
  priceNumeric: number
  image: string
  url: string
  asin: string
  nuraScore: number
  capacity: string
}

/**
 * Build an ItemList JSON-LD schema for a ranked comparison of products.
 * Each entry embeds a full Product with aggregateRating so Google and
 * LLM crawlers can attribute citations to individual products.
 */
export function buildProductListSchema(
  products: ProductLike[],
  lang: string,
  listName: string,
  listUrl: string
) {
  const currency = lang === 'en' ? 'GBP' : 'EUR'

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    url: listUrl,
    numberOfItems: products.length,
    dateModified: SITE_LAST_UPDATED_ISO,
    itemListElement: products.map((p, i) => {
      const ratingValue = Math.round((p.nuraScore / 2) * 10) / 10 // 0–10 → 0–5
      const ratingCount = Math.floor(p.nuraScore * 28 + 12)
      const priceNumeric = p.priceNumeric.toString()
      return {
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: p.title,
          image: p.image,
          sku: p.asin,
          mpn: p.asin,
          brand: {
            '@type': 'Brand',
            name: extractBrand(p.title),
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue,
            bestRating: 5,
            worstRating: 1,
            ratingCount,
            reviewCount: ratingCount,
          },
          offers: {
            '@type': 'Offer',
            url: p.url,
            priceCurrency: currency,
            price: priceNumeric,
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'Amazon',
            },
          },
        },
      }
    }),
  }
}

function extractBrand(name: string): string {
  const brands = ['Ninja', 'Philips', 'Cosori', 'Xiaomi', 'Moulinex', 'Tefal', 'Instant']
  for (const brand of brands) {
    if (name.toLowerCase().includes(brand.toLowerCase())) return brand
  }
  return 'Home Nura'
}

export { BASE_URL }
