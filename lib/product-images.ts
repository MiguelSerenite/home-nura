/**
 * Official manufacturer product images (data/product-images.json).
 *
 * Every image comes from the brand itself (press kit or official product
 * page, never Amazon nor a retailer), is credited, and is shown unaltered
 * inside a Homenura frame built by scripts/images/build-product-images.ts.
 * A model without an entry keeps the neutral card (components/ProductVisual.tsx).
 *
 * Server side only: the manifest carries the full provenance, which client
 * bundles do not need. Components receive a `ProductPhoto` (lib/product-photo.ts).
 */
import manifest from '@/data/product-images.json'
import type { Lang } from '@/lib/i18n'
import {
  productGalleryStem,
  productPhotoAlt,
  productPhotoAltForName,
  productPhotoCredit,
  productPhotoPath,
  productPinPath,
  type ProductGalleryRole,
  type ProductPhoto,
  type ProductPhotoCategory,
} from '@/lib/product-photo'
import { BASE_URL } from '@/lib/seo'

export interface ProductImageEntry {
  /** File stem: brand + model slug. */
  id: string
  brand: string
  /** Model as printed after the brand in alt text. */
  model: string
  category: ProductPhotoCategory
  /** Catalog ASIN (lib/products.ts, lib/smart-kitchen-products.ts), when the catalog carries the model. */
  asin?: string
  /** Exact model names used by the site data (verdicts, article models, Black Friday picks). */
  names: string[]
  sourceType: 'press-kit' | 'product-page'
  /** Page that publishes the image. */
  sourceUrl: string
  /** Direct URL of the downloaded file. */
  imageUrl: string
  licence: string
  /** ISO date (YYYY-MM-DD). */
  retrievedAt: string
  /** Credit text printed next to the image ("© Ninja"). */
  credit: string
  officialModel: string
  /** File in the raw cache (.cache/product-images/raw/, not committed). */
  rawFile: string
  rawSha256: string
  rawWidth: number
  rawHeight: number
  /** Pixels dropped from each edge before trimming, for a crop artefact on the source's own border. */
  edgeInset?: number
  notes: string
  /** Extra official photos (in use, in a room, close-up), in display order. */
  gallery?: GalleryImageEntry[]
}

/** A gallery photo: same provenance as the main image, plus what it shows. */
export interface GalleryImageEntry {
  role: ProductGalleryRole
  sourceType: 'press-kit' | 'product-page'
  sourceUrl: string
  imageUrl: string
  licence: string
  retrievedAt: string
  credit: string
  /** `{id}-g{n}.{ext}` in the raw cache. */
  rawFile: string
  rawSha256: string
  rawWidth: number
  rawHeight: number
  /** What the photo shows, per locale (falls back to the product alt text). */
  caption: Partial<Record<Lang, string>>
  notes: string
}

export interface SkippedProductImage {
  id: string
  brand: string
  model: string
  reason: string
}

export const PRODUCT_IMAGES = manifest.images as ProductImageEntry[]
export const SKIPPED_PRODUCT_IMAGES = manifest.skipped as SkippedProductImage[]

const byAsin = new Map(PRODUCT_IMAGES.flatMap((e) => (e.asin ? [[e.asin, e] as const] : [])))
const byName = new Map(PRODUCT_IMAGES.flatMap((e) => e.names.map((name) => [name, e] as const)))

/** How site data names a model: its catalog ASIN, else its exact name. */
export interface ProductImageRef {
  asin?: string
  name?: string
}

export function findProductImage({ asin, name }: ProductImageRef): ProductImageEntry | undefined {
  return (asin ? byAsin.get(asin) : undefined) ?? (name ? byName.get(name) : undefined)
}

/**
 * The localized photo of a model, or undefined (neutral card).
 * `displayName`: the name the page shows for that same product (its
 * North-American name on the US and Canadian versions), used in the alt text.
 */
export function productPhoto(ref: ProductImageRef, lang: Lang, displayName?: string): ProductPhoto | undefined {
  const entry = findProductImage(ref)
  if (!entry) return undefined
  const alt = displayName
    ? productPhotoAltForName(displayName, entry.category, lang)
    : productPhotoAlt(entry.brand, entry.model, entry.category, lang)
  return {
    id: entry.id,
    alt,
    credit: productPhotoCredit(entry.credit, lang),
    copyright: entry.credit,
    pin: productPinUrl(entry.id),
    gallery: (entry.gallery ?? []).map((g, i) => ({
      stem: productGalleryStem(entry.id, i + 1),
      role: g.role,
      alt: g.caption[lang] ?? alt,
      credit: productPhotoCredit(g.credit, lang),
      width: g.rawWidth,
      height: g.rawHeight,
    })),
  }
}

/** Absolute URL of the largest square variant (structured data, image sitemap). */
export function productImageUrl(id: string): string {
  return `${BASE_URL}${productPhotoPath(id, 1200, 'webp')}`
}

export function productPinUrl(id: string): string {
  return `${BASE_URL}${productPinPath(id, 'jpg')}`
}
