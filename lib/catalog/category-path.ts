import type { Category } from './types'

/**
 * Categories whose landing page is not the generic /{silo}/{category} hub.
 * Air fryers never got a /cuisine-connectee/airfryers page (the flagship
 * kitchen route only serves SMART_KITCHEN_CATEGORIES): their pillar page is
 * the air fryer guide. proxy.ts 301s the dead URL to the same target.
 */
const CATEGORY_PATH_OVERRIDES: Readonly<Record<string, string>> = {
  airfryers: '/guides/airfryers',
}

/** Locale-less path of a category's landing page, e.g. '/energie-domotique/thermostats'. */
export function categoryPath(category: Pick<Category, 'slug' | 'metaSilo'>): string {
  return Object.hasOwn(CATEGORY_PATH_OVERRIDES, category.slug)
    ? CATEGORY_PATH_OVERRIDES[category.slug]
    : `/${category.metaSilo}/${category.slug}`
}
