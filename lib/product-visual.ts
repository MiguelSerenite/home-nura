/**
 * Product visuals without Amazon images.
 *
 * The Amazon Associates Operating Agreement only allows Amazon product
 * images served through its product API or Amazon's own link tools
 * (SiteStripe), never hotlinked or stored copies. Until the account
 * qualifies for the API, every product card shows a neutral visual built
 * from these fields instead: a category icon, the brand and the model.
 */

export type ProductVisualKind =
  | 'airfryer'
  | 'multicooker'
  | 'coffee-machine'
  | 'kitchen-scale'
  | 'meat-thermometer'
  | 'smart-plug'

export interface ProductVisualData {
  brand: string
  model: string
  kind: ProductVisualKind
}

// " - 9.5L" / " - 1.7kg": the spec suffix the titles end with.
const TRAILING_SPEC = /\s+-\s+[^-]+$/

/** Brand + model (title without the brand and the spec suffix). */
export function productVisual(brand: string, title: string, kind: ProductVisualKind): ProductVisualData {
  // The brand usually leads ("Philips Airfryer…") but some locales put the
  // product type first ("Báscula Etekcity…").
  const withoutBrand = title.replace(brand, ' ').replace(/\s+/g, ' ').trim()
  const model = withoutBrand.replace(TRAILING_SPEC, '').trim()
  return { brand, model: model || title, kind }
}
