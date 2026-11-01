import { amazonProductUrl, amazonSearchUrl } from '@/lib/amazon'
import { getArticleBySlug } from '@/lib/blog'
import { getQuickAnswer } from '@/lib/blog/quick-answers'
import { getCategory, type MetaSiloSlug } from '@/lib/catalog'
import type { Lang } from '@/lib/i18n'
import { isNorthAmericanMarket, isSoldAsIs, marketBrand, marketDecision, marketPicks, type NorthAmericanMarket } from '@/lib/market-models'
import { offerForMarketName } from '@/lib/market-models/offers'
import { productPhoto } from '@/lib/product-images'
import type { ProductPhoto } from '@/lib/product-photo'
import { productVisual, type ProductVisualData } from '@/lib/product-visual'
import { BLACK_FRIDAY_CATEGORIES } from './categories'
import { BLACK_FRIDAY_HUB_PATH } from './config'
import type { BlackFridayCategory, BlackFridayPickRef } from './types'

export { BLACK_FRIDAY_CATEGORIES } from './categories'
export * from './config'
export type * from './types'

export function getBlackFridayCategory(slug: string): BlackFridayCategory | undefined {
  return BLACK_FRIDAY_CATEGORIES.find((c) => c.slug === slug)
}

/** Language-relative path of a category page (or of the hub without a slug). */
export function blackFridayPath(slug?: string): string {
  return slug ? `${BLACK_FRIDAY_HUB_PATH}/${slug}` : BLACK_FRIDAY_HUB_PATH
}

/**
 * Every Black Friday URL, language-relative (same path under each of the
 * 6 language prefixes). Listed in app/sitemap.ts for every locale.
 */
export const BLACK_FRIDAY_PATHS: readonly string[] = [
  blackFridayPath(),
  ...BLACK_FRIDAY_CATEGORIES.map((c) => blackFridayPath(c.slug)),
]

/** The Black Friday page covering a catalog category hub, if any. */
export function getBlackFridayCategoryForHub(categorySlug: string): BlackFridayCategory | undefined {
  return BLACK_FRIDAY_CATEGORIES.find((c) => c.hubs.some((h) => h.category === categorySlug))
}

export function getBlackFridayCategoriesForSilo(silo: MetaSiloSlug): BlackFridayCategory[] {
  return BLACK_FRIDAY_CATEGORIES.filter((c) => c.hubs.some((h) => h.silo === silo))
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
  if (isNorthAmericanMarket(lang)) {
    return category.picks
      .flatMap((ref) => resolveMarketPick(ref, category, lang) ?? [])
      // Two European models can share one North-American equivalent.
      .filter((pick, i, all) => all.findIndex((p) => p.model === pick.model) === i)
  }
  return category.picks.flatMap((ref) => resolvePick(ref, lang) ?? [])
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
    return cat && cat.indexable && cat.metaSilo === silo
      ? [{ href: `/${lang}/${silo}/${slug}`, title: cat.title[lang], kind: 'category' as const }]
      : []
  })
  const guides = category.guides.flatMap((slug) => {
    const article = getArticleBySlug(slug)
    return article ? [{ href: `/${lang}/blog/${slug}`, title: article.title[lang], kind: 'guide' as const }] : []
  })
  return [...hubs, ...guides]
}
