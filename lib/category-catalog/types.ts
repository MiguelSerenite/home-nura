import type { Lang } from '@/lib/i18n'
import type { ProductPhoto } from '@/lib/product-photo'

/**
 * Per-category catalogue (data/category-catalog/<category>.json): models a
 * hub shows under its top picks, so a category covers the models people
 * actually buy and not only the three a verdict names.
 */

export const CATALOG_SEGMENTS = ['budget', 'mid', 'premium'] as const
export type CatalogSegment = (typeof CATALOG_SEGMENTS)[number]

export interface CatalogModel {
  /** Brand + model slug, the id space of data/product-images.json (photo when one exists). */
  id: string
  brand: string
  model: string
  /** amazon.fr ASIN seen by an editor, or null (links then search the exact model name). */
  asin: string | null
  segment: CatalogSegment
  /** "Best for…" line, per locale. */
  bestFor: Partial<Record<Lang, string>>
  /** One to three short facts, per locale. */
  facts: Partial<Record<Lang, readonly string[]>>
  /** Locales whose hub lists the model (each needs its bestFor and facts). */
  markets: readonly Lang[]
}

export interface CategoryCatalog {
  category: string
  /** Day of the last editorial update (YYYY-MM-DD). */
  updated: string
  models: readonly CatalogModel[]
}

/** A catalogue model ready to render in one locale. */
export interface CatalogEntry {
  id: string
  name: string
  segment: CatalogSegment
  bestFor: string
  facts: readonly string[]
  url: string
  photo?: ProductPhoto
}
