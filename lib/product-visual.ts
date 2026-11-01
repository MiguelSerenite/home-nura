/**
 * Product visuals without Amazon images.
 *
 * The Amazon Associates Operating Agreement only allows Amazon product
 * images served through its product API or Amazon's own link tools
 * (SiteStripe), never hotlinked or stored copies. Until the account
 * qualifies for the API, a product card shows the manufacturer's own
 * official photo when data/product-images.json has one (self-hosted,
 * credited: see lib/product-images.ts), else a neutral visual built from
 * these fields: a category icon, the brand and the model.
 */
import type { ProductPhoto } from '@/lib/product-photo'

export type ProductVisualKind =
  | 'airfryer'
  | 'multicooker'
  | 'coffee-machine'
  | 'kitchen-scale'
  | 'meat-thermometer'
  | 'smart-plug'
  // Floor-care guides (US and Canada): robot and stick/upright vacuums,
  // hard-floor washers, carpet and upholstery cleaners.
  | 'robot-vacuum'
  | 'vacuum'
  | 'floor-washer'
  | 'carpet-cleaner'

export interface ProductVisualData {
  brand: string
  model: string
  kind: ProductVisualKind
  /** Official manufacturer photo, when the manifest has one. */
  photo?: ProductPhoto
}

// " - 9.5L" / " - 1.7kg": the spec suffix the titles end with.
const TRAILING_SPEC = /\s+-\s+[^-]+$/

/** Brand + model (title without the brand and the spec suffix), plus the photo if any. */
export function productVisual(brand: string, title: string, kind: ProductVisualKind, photo?: ProductPhoto): ProductVisualData {
  // The brand usually leads ("Philips Airfryer…") but some locales put the
  // product type first ("Báscula Etekcity…").
  const withoutBrand = title.replace(brand, ' ').replace(/\s+/g, ' ').trim()
  const model = withoutBrand.replace(TRAILING_SPEC, '').trim()
  return { brand, model: model || title, kind, ...(photo ? { photo } : {}) }
}
