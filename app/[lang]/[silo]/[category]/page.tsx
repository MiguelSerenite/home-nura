/**
 * Phase DD — Moteur 1: generic /[lang]/[silo]/[category] route.
 *
 * One dynamic route that ships a real category page for every
 * indexable (siloSlug, categorySlug) pair in META_SILOS + CATEGORIES,
 * in every locale. Powered by:
 *   - components/CategoryHub.tsx (Phase CC) for layout
 *   - lib/catalog/content.ts     (Phase CC) for the hero + FAQ
 *     strings derived from the catalog
 *
 * Routing precedence:
 *   Next.js prefers static segments over dynamic ones, so
 *   /[lang]/cuisine-connectee/[category]/page.tsx keeps serving
 *   its bespoke airfryers / multicuiseurs / … pages with real
 *   product listings. This dynamic route picks up everything
 *   else — today it's a no-op (non-cuisine categories are all
 *   non-indexable), tomorrow it's the growth surface.
 *
 * Guard rails:
 *   - siloSlug must be a known MetaSiloSlug
 *   - categorySlug must resolve to a Category whose metaSilo
 *     matches the slug in the URL
 *   - the category must be indexed in the URL's locale
 *     (`indexable`, or `indexableIn` for some markets only;
 *     otherwise 404 — no shadow pages for non-indexed cats)
 *
 * generateStaticParams skips cuisine-connectee so the flagship
 * route owns those URLs uniquely and the build doesn't
 * double-render the same (lang, silo, category).
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CategoryHub from '@/components/CategoryHub'
import { isValidLang, type Lang } from '@/lib/i18n'
import {
  getMetaSilo,
  getCategory,
  getIndexableCategories,
  getPartiallyIndexableCategories,
  categoryLocales,
  isCategoryIndexableIn,
  type MetaSiloSlug,
} from '@/lib/catalog'
import { categoryHubMetadata } from '../../category-hub-route'
import { getDictionary } from '../../dictionaries'

const KNOWN_SILOS: readonly MetaSiloSlug[] = [
  'cuisine-connectee',
  'energie-domotique',
  'securite-maison',
  'confort-air',
  'entretien-maison',
  'outdoor-connecte',
] as const

function isKnownSilo(slug: string): slug is MetaSiloSlug {
  return (KNOWN_SILOS as readonly string[]).includes(slug)
}

export async function generateStaticParams() {
  // Only prerender categories that aren't owned by the flagship static
  // route, in the locales that index them (every locale, or the
  // `indexableIn` ones). That way the build stays cheap and we never
  // shadow a hand-written cuisine-connectee page.
  const categories = [...getIndexableCategories(), ...getPartiallyIndexableCategories()].filter(
    (c) => c.metaSilo !== 'cuisine-connectee'
  )
  return categories.flatMap((cat) =>
    categoryLocales(cat).map((lang) => ({
      lang,
      silo: cat.metaSilo,
      category: cat.slug,
    }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; silo: string; category: string }>
}): Promise<Metadata> {
  const { lang, silo, category } = await params
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  if (!isKnownSilo(silo)) return {}
  const cat = getCategory(category)
  const siloMeta = getMetaSilo(silo)
  if (!cat || !siloMeta || cat.metaSilo !== silo) return {}
  return categoryHubMetadata(cat, safeLang)
}

export default async function GenericCategoryPage({
  params,
}: {
  params: Promise<{ lang: string; silo: string; category: string }>
}) {
  const { lang, silo, category } = await params
  if (!isKnownSilo(silo)) notFound()
  const cat = getCategory(category)
  if (!cat || cat.metaSilo !== silo) notFound()
  // Gate: only categories indexed in this locale get a real page
  // through the generic route. The others 404 so they never leak into
  // internal links, sitemaps or search.
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  if (!isCategoryIndexableIn(cat, safeLang)) notFound()
  const dict = await getDictionary(safeLang)
  return <CategoryHub siloSlug={silo} categorySlug={category} lang={safeLang} buyLabel={dict.buy_button} />
}
