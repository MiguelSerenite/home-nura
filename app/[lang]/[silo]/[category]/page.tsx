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
 *   - category.indexable must be true (otherwise 404 — no
 *     shadow pages for non-indexable cats)
 *
 * generateStaticParams skips cuisine-connectee so the flagship
 * route owns those URLs uniquely and the build doesn't
 * double-render the same (lang, silo, category).
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CategoryHub from '@/components/CategoryHub'
import { buildPageMetadata } from '@/lib/seo'
import { LANGUAGES, isValidLang, type Lang } from '@/lib/i18n'
import {
  getMetaSilo,
  getCategory,
  getIndexableCategories,
  type MetaSiloSlug,
} from '@/lib/catalog'

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
  // Only prerender indexable categories that aren't owned by the
  // flagship static route. That way the build stays cheap and we
  // never shadow a hand-written cuisine-connectee page.
  const indexable = getIndexableCategories().filter(
    (c) => c.metaSilo !== 'cuisine-connectee'
  )
  return indexable.flatMap((cat) =>
    LANGUAGES.map((lang) => ({
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
  return buildPageMetadata({
    lang: safeLang,
    path: `/${silo}/${cat.slug}`,
    title: `${cat.title[safeLang]} — ${siloMeta.title[safeLang]} | Home Nura`,
    description: cat.description[safeLang],
    index: cat.indexable,
  })
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
  // Gate: only indexable categories get a real page through the
  // generic route. Non-indexable ones 404 so they never leak into
  // internal links, sitemaps or search.
  if (!cat.indexable) notFound()
  return <CategoryHub siloSlug={silo} categorySlug={category} lang={lang} />
}
