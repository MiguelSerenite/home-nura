import { amazonProductUrl, amazonSearchUrl } from '@/lib/amazon'
import { getArticleBySlug } from '@/lib/blog'
import { getQuickAnswer } from '@/lib/blog/quick-answers'
import { categoryPath, getCategory, type MetaSiloSlug } from '@/lib/catalog'
import { LANGUAGES, type Lang } from '@/lib/i18n'
import { isNorthAmericanMarket, isSoldAsIs, marketBrand, marketDecision, marketPicks, type NorthAmericanMarket } from '@/lib/market-models'
import { offerForMarketName } from '@/lib/market-models/offers'
import { productPhoto } from '@/lib/product-images'
import type { ProductPhoto } from '@/lib/product-photo'
import { productVisual, type ProductVisualData } from '@/lib/product-visual'
import { BLACK_FRIDAY_CATEGORIES } from './categories'
import { BLACK_FRIDAY_HUB_PATH } from './config'
import { BLACK_FRIDAY_MARKET_LISTS, DEFAULT_BLACK_FRIDAY_LIST } from './markets'
import { blackFridayPickRefs } from './pick-refs'
import type { BlackFridayCategory, BlackFridayCategoryCopy, BlackFridayPickRef } from './types'

export { BLACK_FRIDAY_CATEGORIES } from './categories'
export { BLACK_FRIDAY_MARKET_LISTS, DEFAULT_BLACK_FRIDAY_LIST } from './markets'
export { allBlackFridayPickRefs, blackFridayPickRefs } from './pick-refs'
export * from './config'
export type * from './types'

export function getBlackFridayCategory(slug: string): BlackFridayCategory | undefined {
  return BLACK_FRIDAY_CATEGORIES.find((c) => c.slug === slug)
}

/** Language-relative path of a category page (or of the hub without a slug). */
export function blackFridayPath(slug?: string): string {
  return slug ? `${BLACK_FRIDAY_HUB_PATH}/${slug}` : BLACK_FRIDAY_HUB_PATH
}

/** A category page in one locale: it exists there only if the category has that locale's copy. */
export interface BlackFridayPage {
  category: BlackFridayCategory
  copy: BlackFridayCategoryCopy
  /** Language-relative path ('/black-friday/airfryers'). */
  path: string
}

export function getBlackFridayPage(slug: string, lang: Lang): BlackFridayPage | undefined {
  const category = getBlackFridayCategory(slug)
  const copy = category?.copy[lang]
  return category && copy ? { category, copy, path: blackFridayPath(category.slug) } : undefined
}

/** The locales a category page exists in (hreflang cluster, sitemap). */
export function blackFridayLocales(category: BlackFridayCategory): Lang[] {
  return LANGUAGES.filter((lang) => category.copy[lang] !== undefined)
}

/** Slugs of the market's list (./markets.ts), or the six original pages for a locale without one. */
export function blackFridayListSlugs(lang: Lang): readonly string[] {
  return BLACK_FRIDAY_MARKET_LISTS[lang] ?? DEFAULT_BLACK_FRIDAY_LIST
}

/**
 * The categories a market puts forward, in its hub order: hub cards, home
 * banner, silo link blocks, "other categories" links. A listed slug with no
 * page in that locale is a data error, never skipped.
 */
export function getListedBlackFridayPages(lang: Lang): BlackFridayPage[] {
  return blackFridayListSlugs(lang).map((slug) => {
    const page = getBlackFridayPage(slug, lang)
    if (!page) throw new Error(`lib/black-friday/markets.ts: "${slug}" is listed for ${lang} but has no ${lang} page`)
    return page
  })
}

/** Every category page of a locale: its list first, then the pages left out of it (still online). */
export function getBlackFridayPages(lang: Lang): BlackFridayPage[] {
  const listed = getListedBlackFridayPages(lang)
  const others = BLACK_FRIDAY_CATEGORIES.flatMap((c) =>
    listed.some((p) => p.category === c) ? [] : (getBlackFridayPage(c.slug, lang) ?? []),
  )
  return [...listed, ...others]
}

/**
 * Every Black Friday URL, language-relative: the hub (every locale) and each
 * category page (the locales of blackFridayLocales). Listed in app/sitemap.ts.
 */
export const BLACK_FRIDAY_PATHS: readonly string[] = [
  blackFridayPath(),
  ...BLACK_FRIDAY_CATEGORIES.map((c) => blackFridayPath(c.slug)),
]

/**
 * The Black Friday page covering a catalog category hub in this locale, if
 * any: the page named like the hub first (aspirateurs-balais, not the French
 * floor-washer page that also links that hub), then the market's own list.
 */
export function getBlackFridayCategoryForHub(categorySlug: string, lang: Lang): BlackFridayPage | undefined {
  const matches = getBlackFridayPages(lang).filter((p) => p.category.hubs.some((h) => h.category === categorySlug))
  return matches.find((p) => p.category.slug === categorySlug) ?? matches[0]
}

/** The listed Black Friday pages of a silo's categories, in the market's order. */
export function getBlackFridayCategoriesForSilo(silo: MetaSiloSlug, lang: Lang): BlackFridayPage[] {
  return getListedBlackFridayPages(lang).filter((p) => p.category.hubs.some((h) => h.silo === silo))
}


export interface BlackFridayPick {
  model: string
  role: string
  why: string
  /** Set for catalog products, which link to their product page. */
  asin?: string
  url: string
  guide: { href: string; title: string }
  /** Manufacturer's official photo (lib/product-images.ts). */
  photo?: ProductPhoto
  /** US / Canada, no official photo of that product: neutral card (icon, brand, model). */
  visual?: ProductVisualData
}

const ASIN_IN_URL = /\/dp\/([A-Z0-9]{10})/

/**
 * Resolves a pick through its verdict: the French verdict identifies the
 * model (catalog titles are localized, ASINs are not), the reader's
 * language gives the name, label and reason.
 */
function resolvePick(ref: BlackFridayPickRef, lang: Lang): BlackFridayPick | null {
  const article = getArticleBySlug(ref.article)
  if (!article) return null
  const reference = getQuickAnswer(article, 'fr')
  const localized = getQuickAnswer(article, lang)
  if (!reference || !localized || reference.picks.length !== localized.picks.length) return null
  const index = reference.picks.findIndex((p) => p.model === ref.model)
  if (index < 0) return null
  const pick = localized.picks[index]
  const asin = reference.picks[index].url.match(ASIN_IN_URL)?.[1]
  const photo = productPhoto({ asin, name: ref.model }, lang)
  return {
    model: pick.model,
    role: ref.role?.[lang] ?? pick.role,
    why: pick.why,
    asin,
    // Product page on the reader's store when the catalog knows the ASIN
    // (a model search where that store lacks it), else an Amazon search.
    url: asin ? amazonProductUrl(asin, lang) : amazonSearchUrl(ref.model, lang),
    guide: { href: `/${lang}/blog/${article.slug}`, title: article.title[lang] },
    ...(photo ? { photo } : {}),
  }
}

/**
 * US / Canada: the pick goes through the market decision of its European
 * model. A model the market does not sell is replaced by its North-American
 * equivalent with that market's own verdict label and reason (never the
 * European model's photo); one with no equivalent is dropped.
 */
function resolveMarketPick(ref: BlackFridayPickRef, category: BlackFridayCategory, market: NorthAmericanMarket): BlackFridayPick | null {
  const article = getArticleBySlug(ref.article)
  const decision = marketDecision(market, ref.model)
  if (!article || decision.name === null) return null
  const pick = marketPicks(market, ref.article).find((p) => p.model === decision.name)
  if (!pick) return null
  const offer = offerForMarketName(decision.name, market)
  // A label written for the European model only fits that same product.
  const role = isSoldAsIs(decision) ? (ref.role?.[market] ?? pick.role) : pick.role
  return {
    model: offer.name,
    role,
    why: pick.why,
    ...(offer.asin ? { asin: offer.asin } : {}),
    url: offer.url,
    guide: { href: `/${market}/blog/${article.slug}`, title: article.title[market] },
    ...(offer.photo
      ? { photo: offer.photo }
      : { visual: productVisual(marketBrand(offer.name), offer.name, category.visual) }),
  }
}

export function getBlackFridayPicks(category: BlackFridayCategory, lang: Lang): BlackFridayPick[] {
  const refs = blackFridayPickRefs(category, lang)
  if (isNorthAmericanMarket(lang)) {
    return refs
      .flatMap((ref) => resolveMarketPick(ref, category, lang) ?? [])
      // Two European models can share one North-American equivalent.
      .filter((pick, i, all) => all.findIndex((p) => p.model === pick.model) === i)
  }
  return refs.flatMap((ref) => resolvePick(ref, lang) ?? [])
}

export interface BlackFridayLink {
  href: string
  title: string
  kind: 'category' | 'guide'
}

/** The site's existing hubs and guides for this category (only pages that exist). */
export function getBlackFridayLinks(category: BlackFridayCategory, lang: Lang): BlackFridayLink[] {
  const hubs = category.hubs.flatMap(({ silo, category: slug }) => {
    const cat = getCategory(slug)
    // categoryPath: the landing page itself (air fryers: /guides/airfryers, not a redirect).
    return cat && cat.indexable && cat.metaSilo === silo
      ? [{ href: `/${lang}${categoryPath(cat)}`, title: cat.title[lang], kind: 'category' as const }]
      : []
  })
  const guides = category.guides.flatMap((slug) => {
    const article = getArticleBySlug(slug)
    return article ? [{ href: `/${lang}/blog/${slug}`, title: article.title[lang], kind: 'guide' as const }] : []
  })
  return [...hubs, ...guides]
}
