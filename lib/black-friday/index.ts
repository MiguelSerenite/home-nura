import { getArticleBySlug } from '@/lib/blog'
import { getQuickAnswer } from '@/lib/blog/quick-answers'
import { getCategory, type MetaSiloSlug } from '@/lib/catalog'
import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_CATEGORIES } from './categories'
import { BLACK_FRIDAY_HUB_PATH, blackFridayAmazonUrl } from './config'
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
 * 6 language prefixes). For app/sitemap.ts, wired in a follow-up.
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
  return {
    model: pick.model,
    role: ref.role?.[lang] ?? pick.role,
    why: pick.why,
    asin,
    url: blackFridayAmazonUrl(asin ? { asin } : { query: ref.model }),
    guide: { href: `/${lang}/blog/${article.slug}`, title: article.title[lang] },
  }
}

export function getBlackFridayPicks(category: BlackFridayCategory, lang: Lang): BlackFridayPick[] {
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
