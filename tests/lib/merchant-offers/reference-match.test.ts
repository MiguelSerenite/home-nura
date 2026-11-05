import { describe, it, expect } from 'vitest'
import { buildOfferIndex, matchProductByName } from '@/lib/merchant-offers/match'
import { eansIn, isBundleName, referenceCodes } from '@/lib/merchant-offers/reference-codes'
import { modelReferences } from '@/lib/merchant-offers/references'
import type { FeedProduct } from '@/lib/merchant-offers/feed'

let id = 0
const product = (brand: string, name: string, price: number, ean: string | null = null): FeedProduct => ({
  name,
  brand,
  ean,
  url: `https://www.awin1.com/pclick.php?p=${++id}&a=1255925&m=85161`,
  price,
  updatedAt: null,
})

describe('reference codes', () => {
  it('reads manufacturer codes, without the regional suffix', () => {
    expect(referenceCodes('Philips 3300 LatteGo EP3347/90')).toEqual(['ep3347'])
    expect(referenceCodes('Magnifica Evo ECAM290.51.B')).toEqual(['ecam29051b'])
    expect(referenceCodes('Rowenta SO6510 Instant Comfort')).toEqual(['so6510'])
    expect(referenceCodes('Philips HU2716/10')).toEqual(['hu2716'])
    expect(referenceCodes('Cosori CAF-P583S')).toEqual(['cafp583s'])
  })

  it('ignores capacities, sockets, short codes, multipacks and words', () => {
    expect(referenceCodes('Airfryer XXL - 8,3 liter 2200W 1100lm E27 A60 Q7 M5+ P115 2-pack 2026 Pro')).toEqual([])
  })

  it('takes an all-capitals code without vowels only when asked', () => {
    expect(referenceCodes('Sonoff TRVZB')).toEqual([])
    expect(referenceCodes('Sonoff TRVZB', { lettersOnly: true })).toEqual(['trvzb'])
    expect(referenceCodes('Netatmo ORIGINAL', { lettersOnly: true })).toEqual([])
  })

  it('reads EANs written after "EAN"', () => {
    expect(eansIn('Hue A60 - E27 - 1100 (1-pack), EAN 8720169364066 / 929003853501')).toEqual(['8720169364066'])
    expect(eansIn('réf. 494719-01')).toEqual([])
  })

  it('spots bundles, multipacks and accessories', () => {
    expect(isBundleName('Philips EP3347/90 + melkopschuimer')).toBe(true)
    expect(isBundleName('Ontkalker voor Philips EP3347')).toBe(true)
    expect(isBundleName('Zubehör für Philips EP3347')).toBe(true)
    expect(isBundleName('TP-Link Tapo P115 4-pack')).toBe(true)
    expect(isBundleName('Philips 3300 LatteGo EP3347/90')).toBe(false)
  })
})

describe('matching by reference code and EAN', () => {
  const index = buildOfferIndex([
    product('Philips', 'Philips LatteGo 3300 serie EP3347/90 koffiemachine', 549),
    product('Philips', 'Philips LatteGo 3300 serie EP3347/90 koffiemachine Zwart', 529),
    product('Philips', 'Philips EP3347/90 + melkopschuimer', 599),
    product('Philips', 'Ontkalker voor Philips EP3347', 15),
    product('Philips', 'Philips 2200 EP2231/40', 349),
    product('Philips', 'Philips 2200 EP2231/40 Pro', 399),
    product('Sonoff', 'Sonoff TRVZB Zigbee radiatorknop', 39.99),
    product('Rowenta', 'Rowenta X-Force Flex 15.60 Animal RH99F1WO', 449),
    product('Philips Hue', 'Philips Hue White and Color Ambiance E27 losse lamp', 49.99, '8720169364066'),
    product('Dreame', 'Dreame X50 Ultra Complete Black', 1199),
    product('TP-Link', 'TP-Link Tapo C220 Pan & Tilt', 39.99),
    product('Ring', 'Ring Pan-Tilt Indoor Camera', 59.99),
  ])
  const priceOf = (name: string, refs?: Parameters<typeof matchProductByName>[2]) => matchProductByName(index, name, refs)?.price ?? null

  it('accepts the name carrying the model’s code despite added words (cheapest colour, no bundle, no accessory)', () => {
    expect(priceOf('Philips 3300 LatteGo EP3347/90')).toBe(529)
    expect(priceOf('Philips 3300 LatteGo EP3347/50')).toBe(529)
  })

  it('refuses a code two different products carry, unless the exact name settles it', () => {
    expect(priceOf('Philips EP2231/40 Classic')).toBeNull()
    expect(priceOf('Philips Series 2200 EP2231/40')).toBe(349)
  })

  it('takes a vowel-less all-capitals model as a code', () => {
    expect(priceOf('Sonoff TRVZB')).toBe(39.99)
  })

  it('uses the codes of our model data when the page name has none', () => {
    expect(priceOf('Rowenta X-Force Flex 15.60')).toBeNull()
    expect(priceOf('Rowenta X-Force Flex 15.60', { eans: [], codes: ['rh99f1wo'] })).toBe(449)
  })

  it('reads English colours and the "Pan & Tilt" descriptor of Coolblue names', () => {
    expect(priceOf('Dreame X50 Ultra Complete')).toBe(1199)
    expect(priceOf('TP-Link Tapo C220')).toBe(39.99)
    expect(priceOf('Ring Indoor Camera')).toBeNull()
  })

  it('settles a match by EAN', () => {
    expect(priceOf('Philips Hue White and Color Ambiance A60', { eans: ['8720169364066'], codes: [] })).toBe(49.99)
  })
})

describe('model references from our data', () => {
  it('reads the EAN and codes of data/product-images.json', () => {
    expect(modelReferences({ name: 'Philips Hue White and Color Ambiance E27' }).eans).toEqual(['8720169364066'])
    expect(modelReferences({ name: 'Rowenta X-Force Flex 15.60' }).codes).toContain('rh99f1wo')
    expect(modelReferences({ name: 'No Such Model 123' })).toEqual({ eans: [], codes: [] })
  })
})
