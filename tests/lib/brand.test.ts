import { describe, it, expect } from 'vitest'
import { extractBrand } from '@/lib/brand'
import { staticProducts } from '@/lib/products'
import { smartKitchenStaticProducts } from '@/lib/smart-kitchen-products'

describe('extractBrand', () => {
  it('detects the manufacturer from the product title', () => {
    expect(extractBrand('Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L')).toBe('Ninja')
    expect(extractBrand("De'Longhi Magnifica Evo ECAM290.51.B")).toBe("De'Longhi")
    expect(extractBrand('TP-Link Tapo P115 Prise Connectée')).toBe('TP-Link')
  })

  it('is case-insensitive', () => {
    expect(extractBrand('MEATER Plus Thermomètre')).toBe('MEATER')
    expect(extractBrand('philips airfryer xxl')).toBe('Philips')
  })

  it('returns undefined for unknown manufacturers instead of inventing one', () => {
    expect(extractBrand('UnknownBrand Fryer 5L')).toBeUndefined()
  })

  it('recognises the brand of every product in the catalog', () => {
    const titles = [
      ...staticProducts.map((p) => p.title.fr),
      ...smartKitchenStaticProducts.map((p) => p.title.fr),
    ]
    const unknown = titles.filter((t) => extractBrand(t) === undefined)
    expect(unknown).toEqual([])
  })
})
