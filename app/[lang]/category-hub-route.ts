/**
 * Shared by the two routes that render components/CategoryHub.tsx (the
 * generic /[silo]/[category] one and the kitchen route for the kitchen
 * categories without catalog products): the hub's metadata, hreflang
 * limited to the locales that index the category.
 */

import type { Metadata } from 'next'
import { buildCategorySeo, getCategoryGuides } from '@/lib/catalog/category-guides'
import { categoryLocales, categoryPath, isCategoryIndexableIn, type Category } from '@/lib/catalog'
import type { Lang } from '@/lib/i18n'
import { buildPageMetadata } from '@/lib/seo'

export function categoryHubMetadata(category: Category, lang: Lang): Metadata {
  const { picks } = getCategoryGuides(category.slug, lang)
  const seo = buildCategorySeo(category, lang, picks.map((p) => p.model))
  return buildPageMetadata({
    lang,
    path: categoryPath(category),
    title: `${seo.title} | Home Nura`,
    description: seo.description,
    index: isCategoryIndexableIn(category, lang),
    locales: categoryLocales(category),
  })
}
