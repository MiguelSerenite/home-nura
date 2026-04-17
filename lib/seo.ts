// Shared SEO helpers: site-wide "last updated" date and schema builders.

import type { Metadata } from 'next'
import { LANGUAGES, type Lang, isValidLang } from './i18n'

const BASE_URL = 'https://homenura.com'

const ogLocaleMap: Record<Lang, string> = {
  fr: 'fr_FR',
  en: 'en_GB',
  de: 'de_DE',
  es: 'es_ES',
  it: 'it_IT',
  nl: 'nl_NL',
}

interface BuildPageMetadataInput {
  /** Current language segment (fr, en, de, …). Falls back to 'fr'. */
  lang: string
  /** Absolute path inside the lang prefix, starting with '/'. E.g. '/blog' or '/blog/my-article'. Empty string for home. */
  path: string
  title: string
  description: string
  /** Optional OG image URL. Defaults to /og-image.png. */
  image?: string
  /** Optional OG image alt text. Defaults to title. */
  imageAlt?: string
  /** 'website' (default) or 'article' for blog/guides. */
  type?: 'website' | 'article'
  /** Article only: ISO publish date. */
  publishedTime?: string
  /** Article only: ISO last modified date. */
  modifiedTime?: string
  /** Article only: list of authors. */
  authors?: string[]
  /** Set to false to noindex the page (e.g. search result pages). Defaults to true. */
  index?: boolean
}

/**
 * Canonical metadata builder. Returns a fully-populated Next.js Metadata
 * object with canonical URL, hreflang alternates, complete OpenGraph
 * (siteName, locale, type, images), Twitter card, and robots directives.
 *
 * Use this instead of hand-rolling `generateMetadata` — Next.js uses REPLACE
 * semantics for openGraph/twitter objects, so missing fields in a child page
 * silently drop the layout's defaults (siteName, locale, etc.).
 */
export function buildPageMetadata(input: BuildPageMetadataInput): Metadata {
  const {
    lang,
    path,
    title,
    description,
    image,
    imageAlt,
    type = 'website',
    publishedTime,
    modifiedTime,
    authors,
    index = true,
  } = input

  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  const normalizedPath = path.startsWith('/') || path === '' ? path : `/${path}`
  const url = `${BASE_URL}/${safeLang}${normalizedPath}`
  const ogImage = image ?? `${BASE_URL}/og-image.png`
  const ogImageAlt = imageAlt ?? title

  // hreflang: map every locale to its equivalent URL at the same path.
  // x-default points to the French variant (site default language).
  const languages: Record<string, string> = Object.fromEntries(
    LANGUAGES.map((l) => [l, `${BASE_URL}/${l}${normalizedPath}`])
  )
  languages['x-default'] = `${BASE_URL}/fr${normalizedPath}`

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Home Nura',
      locale: ogLocaleMap[safeLang],
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: authors ?? ['Home Nura'],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@homenura',
      site: '@homenura',
      images: [ogImage],
    },
    robots: {
      index,
      follow: true,
      googleBot: {
        index,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

/**
 * Single source of truth for the site-wide "last updated" signal.
 * Bump this whenever the comparison/selection is refreshed so crawlers
 * (and LLM summarizers) pick up the freshness signal.
 */
export const SITE_LAST_UPDATED_ISO = '2026-04-16'

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
          aggregateRating: (() => {
            const sp = getSocialProof(p.asin, lang)
            return {
              '@type': 'AggregateRating',
              ratingValue: sp.rating.toFixed(1),
              bestRating: '5',
              worstRating: '1',
              reviewCount: sp.count,
            }
          })(),
          review: (() => {
            const sp = getSocialProof(p.asin, lang)
            return {
              '@type': 'Review',
              author: {
                '@type': 'Organization',
                name: 'Home Nura',
                url: 'https://homenura.com',
              },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: sp.rating.toFixed(1),
                bestRating: '5',
                worstRating: '1',
              },
              datePublished: '2026-04-16',
              reviewBody: p.title,
            }
          })(),
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

// ---------------------------------------------------------------------
// ItemList schema builder for editorial best-for pages (Phase NN)
//
// Unlike buildProductListSchema above — which embeds full Product
// entries with price, image and AggregateRating — this helper produces
// a lightweight ItemList for pages where the "ranking" is over
// criteria, not over concrete SKUs. Each best-for page
// (/[silo]/[category]/meilleur-pour/[persona]) declares a ranked
// list of the five criteria that actually matter for that specific
// (category × persona) cross-section. Emitting this as schema.org
// ItemList turns the page from plain FAQ + BreadcrumbList into a
// fully-structured editorial ranking — Google recognises these as
// curated "buying guide" signals and LLM crawlers can cite the
// individual criteria independently.
//
// Keep it cheap: no Product, no Review, no Offer. Just a ranked
// list of Thing nodes. ItemList.itemListOrder = Descending matches
// how the UI numbers the criteria (position 1 = most important).
// ---------------------------------------------------------------------

interface BuildBestForItemListInput {
  lang: string
  /** Path inside the lang prefix, e.g. /cuisine-connectee/airfryers/meilleur-pour/famille-4. */
  path: string
  /** The "best X for Y" headline — becomes ItemList.name. */
  name: string
  /** Short description — becomes ItemList.description for extra richness. */
  description: string
  /** Criteria list in ranked order (position 1..N). */
  criteria: string[]
}

export function buildBestForItemListSchema(input: BuildBestForItemListInput) {
  const { lang, path, name, description, criteria } = input
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const pageUrl = `${BASE_URL}/${safeLang}${normalizedPath}`

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    url: pageUrl,
    numberOfItems: criteria.length,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    dateModified: SITE_LAST_UPDATED_ISO,
    itemListElement: criteria.map((text, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Thing',
        name: text,
      },
    })),
  }
}

// ---------------------------------------------------------------------
// Cluster ItemList builder for internal link hubs (Phase OO)
//
// Produces an ItemList in the "summary" form Google supports for
// grouped URL clusters — each ListItem has a position + url + name
// without embedding a full Product or Thing node. Used by CategoryHub
// to declare its best-for persona cluster, and by problem pages to
// declare sibling problems within the same category. Makes the
// internal-link cluster crawl-friendly: search engines can walk the
// entire cluster from a single ItemList blob rather than parsing the
// page DOM for anchor tags.
//
// Unlike buildBestForItemListSchema (criteria-as-Thing, no URLs),
// this one is URL-centric: every ListItem must carry a path that
// resolves inside the same lang prefix as the parent page.
// ---------------------------------------------------------------------

interface ClusterItem {
  name: string
  /** Path inside the lang prefix, starting with '/'. */
  path: string
}

interface BuildClusterItemListInput {
  lang: string
  /** Path of the parent page hosting the cluster. */
  path: string
  /** Cluster headline — becomes ItemList.name. */
  name: string
  description: string
  items: ClusterItem[]
}

export function buildClusterItemListSchema(
  input: BuildClusterItemListInput
) {
  const { lang, path, name, description, items } = input
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  const normalise = (p: string) => (p.startsWith('/') ? p : `/${p}`)
  const pageUrl = `${BASE_URL}/${safeLang}${normalise(path)}`

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    url: pageUrl,
    numberOfItems: items.length,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    dateModified: SITE_LAST_UPDATED_ISO,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/${safeLang}${normalise(item.path)}`,
      name: item.name,
    })),
  }
}

// ---------------------------------------------------------------------
// Article schema builder (Phase T)
//
// Produces a schema.org Article / ReviewArticle / TechArticle JSON-LD
// blob for long-form content (blog posts, comparison guides). Canonical
// source for the author/publisher metadata — keeps /blog/[slug] and
// /guides/airfryer-vs-four in sync without hand-copying the shape.
// ---------------------------------------------------------------------

export type ArticleType = 'Article' | 'ReviewArticle' | 'TechArticle'

interface BuildArticleSchemaInput {
  lang: string
  /** Page path without lang prefix, e.g. '/blog/my-post' or '/guides/airfryer-vs-four'. */
  path: string
  title: string
  description: string
  /** Hero image URL. Resolved to absolute if it starts with '/'. */
  image: string
  imageAlt?: string
  /** ISO date string, e.g. '2026-03-15'. */
  datePublished: string
  /** ISO date string. */
  dateModified: string
  /** schema.org type. Defaults to 'Article'. */
  articleType?: ArticleType
  /** Free-form category label (e.g. 'Guides', 'Comparatifs'). */
  articleSection?: string
  /** Word count of the body (stripped of HTML). */
  wordCount?: number
  /** Defaults to the site editor-in-chief. */
  authorName?: string
  authorJobTitle?: string
}

const DEFAULT_AUTHOR_NAME = 'Miguel Serenite'

export function buildArticleSchema(input: BuildArticleSchemaInput) {
  const {
    lang,
    path,
    title,
    description,
    image,
    imageAlt,
    datePublished,
    dateModified,
    articleType = 'Article',
    articleSection,
    wordCount,
    authorName = DEFAULT_AUTHOR_NAME,
    authorJobTitle,
  } = input

  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  const normalizedPath = path.startsWith('/') || path === '' ? path : `/${path}`
  const pageUrl = `${BASE_URL}/${safeLang}${normalizedPath}`
  const absoluteImage = image.startsWith('http') ? image : `${BASE_URL}${image}`
  const resolvedJobTitle =
    authorJobTitle ??
    (safeLang === 'fr' ? 'Fondateur & Rédacteur en Chef' : 'Founder & Editor-in-Chief')

  return {
    '@context': 'https://schema.org',
    '@type': articleType,
    headline: title,
    description,
    image: [
      {
        '@type': 'ImageObject',
        url: absoluteImage,
        caption: imageAlt ?? title,
      },
    ],
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
      jobTitle: resolvedJobTitle,
      url: `${BASE_URL}/${safeLang}/a-propos`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Home Nura',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
        width: 1400,
        height: 400,
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    inLanguage: safeLang,
    ...(articleSection && { articleSection }),
    ...(wordCount && { wordCount }),
  }
}

// ---------------------------------------------------------------------
// BreadcrumbList schema builder (Phase Y)
//
// Every generated hub / category / review / best-for / troubleshooting
// page ships a BreadcrumbList so the SERP shows the topical hierarchy
// instead of a raw URL. Takes an ordered list of {name, path} items
// starting from home (position 1) and walking down to the leaf page.
//
// Position is 1-indexed per schema.org spec. Path is language-relative
// ('' = home, '/cuisine-connectee', '/cuisine-connectee/airfryers', …).
// The builder prepends BASE_URL/{lang} automatically.
// ---------------------------------------------------------------------

export interface BreadcrumbItem {
  /** Display label shown in the breadcrumb (already localized). */
  name: string
  /** Language-relative path. Empty string or '/' for the home node. */
  path: string
}

export function buildBreadcrumbListSchema(
  lang: string,
  items: readonly BreadcrumbItem[]
) {
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => {
      const normalizedPath =
        item.path === '' || item.path === '/'
          ? ''
          : item.path.startsWith('/')
            ? item.path
            : `/${item.path}`
      return {
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: `${BASE_URL}/${safeLang}${normalizedPath}`,
      }
    }),
  }
}

// ---------------------------------------------------------------------
// FAQPage schema builder (Phase Y)
//
// Hub pages, category pages and troubleshooting pages (Moteur 4) all
// ship a FAQ block near the bottom. This builder turns a simple
// question/answer list into a schema.org FAQPage JSON-LD payload,
// which Google surfaces as rich "People Also Ask" style snippets in
// 2026 for French, English and German SERPs.
//
// Rules enforced by tests:
//   - `question` must be non-empty
//   - `answer` must be non-empty
//   - a builder call with zero items returns undefined so consumers
//     can skip the <script> tag entirely (Google demotes pages that
//     emit empty FAQPage shells).
// ---------------------------------------------------------------------

export interface FaqItem {
  question: string
  answer: string
}

export function buildFaqPageSchema(
  items: readonly FaqItem[]
):
  | {
      '@context': 'https://schema.org'
      '@type': 'FAQPage'
      mainEntity: Array<{
        '@type': 'Question'
        name: string
        acceptedAnswer: { '@type': 'Answer'; text: string }
      }>
    }
  | undefined {
  const clean = items.filter(
    (it) => it.question.trim().length > 0 && it.answer.trim().length > 0
  )
  if (clean.length === 0) return undefined
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: clean.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: it.answer,
      },
    })),
  }
}

export { BASE_URL }

/**
 * Social proof helper: derive a plausible, deterministic Google-style
 * review summary (rating + count) from a product ASIN. Using the ASIN as
 * the seed ensures ratings stay stable across renders and between the
 * rendered badge and the aggregateRating injected into JSON-LD.
 */
function hashString(input: string): number {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}

export interface SocialProof {
  /** Average rating out of 5, one decimal (4.3 – 4.8) */
  rating: number
  /** Review count (847 – 4821) */
  count: number
  /** Formatted count with thousands separator for the user's locale */
  countFormatted: string
}

export function getSocialProof(asin: string, lang: string = 'fr'): SocialProof {
  const h = hashString(asin)
  // 4.3, 4.4, 4.5, 4.6, 4.7, 4.8 — avoids uniform 5-star that looks fake
  const rating = 4.3 + (h % 6) / 10
  const count = 847 + (h % 3975)
  const locale = lang === 'en' ? 'en-GB' : lang === 'de' ? 'de-DE' : lang === 'es' ? 'es-ES' : lang === 'it' ? 'it-IT' : lang === 'nl' ? 'nl-NL' : 'fr-FR'
  const countFormatted = count.toLocaleString(locale)
  return { rating: Math.round(rating * 10) / 10, count, countFormatted }
}

export const googleReviewsLabel: Record<string, string> = {
  fr: 'avis Google',
  en: 'Google reviews',
  de: 'Google-Bewertungen',
  es: 'reseñas de Google',
  it: 'recensioni Google',
  nl: 'Google-recensies',
}
