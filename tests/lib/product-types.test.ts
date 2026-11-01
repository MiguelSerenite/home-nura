import { describe, it, expect } from 'vitest'
import { LANGUAGES } from '@/lib/i18n'
import { PRODUCT_TYPE_LABELS, productKicker, rankLabel } from '@/lib/product-types'
import { SMART_KITCHEN_CATEGORIES } from '@/lib/smart-kitchen-products'

describe('product type labels', () => {
  it('name every catalog category in every locale', () => {
    for (const type of ['airfryers', ...SMART_KITCHEN_CATEGORIES] as const) {
      for (const lang of LANGUAGES) expect(PRODUCT_TYPE_LABELS[type][lang], `${type}/${lang}`).toBeTruthy()
    }
  })
})

describe('productKicker', () => {
  it('says the rank, what the product is and who it suits', () => {
    expect(productKicker({ type: 'airfryers', lang: 'fr', rank: 1, bestFor: 'Familles nombreuses' })).toBe(
      'N°1 · Airfryer · Familles nombreuses',
    )
    expect(productKicker({ type: 'airfryers', lang: 'de', rank: 2, bestFor: 'Preis-Leistung' })).toBe(
      'Platz 2 · Heißluftfritteuse · Preis-Leistung',
    )
  })

  it('leaves out what it does not know', () => {
    expect(productKicker({ type: 'balances', lang: 'en' })).toBe('Kitchen scale')
    expect(productKicker({ type: 'cafetieres', lang: 'it', bestFor: '' })).toBe('Macchina da caffè')
  })
})

describe('rankLabel', () => {
  it('uses each locale’s ordinal style', () => {
    expect(LANGUAGES.map((lang) => rankLabel(3, lang))).toEqual([
      'N°3', 'No. 3', 'Platz 3', 'N.º 3', 'N. 3', 'Nr. 3', 'Nr 3', 'Nr 3', 'No. 3', 'No. 3',
    ])
  })
})
