import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { parseCoolblueFeed } from '@/lib/merchant-offers/feed'
import { brandKey, buildOfferIndex, matchProduct, matchProductByName, nameTokens } from '@/lib/merchant-offers/match'

const FEED = readFileSync(join(process.cwd(), 'tests/fixtures/merchant-offers/coolblue-feed.csv'), 'utf8')
const index = buildOfferIndex(parseCoolblueFeed(FEED))

/** Awin product ID (p=…) of the matched offer, or null. */
const matched = (name: string) => matchProductByName(index, name)?.url.match(/[?&]p=(\d+)/)?.[1] ?? null

describe('nameTokens / brandKey', () => {
  it('reads a trailing "+" as "plus" and "liter" as a unit', () => {
    expect(nameTokens('Roborock Q7 M5+')).toEqual(['roborock', 'q7', 'm5', 'plus'])
    expect(nameTokens('Meaco Arete Two 20 liter')).toEqual(['meaco', 'arete', 'two', '20l'])
    expect(nameTokens('BLACK+DECKER BHSM1610DSM')).toEqual(['black', 'decker', 'bhsm1610dsm'])
  })

  it('spells brands alike whatever the punctuation', () => {
    expect(brandKey("De'Longhi")).toBe(brandKey('DeLonghi'))
    expect(brandKey('TP-Link')).toBe(brandKey('TP Link'))
  })
})

describe('matchProductByName', () => {
  it('matches the exact model, with the feed adding a reference code and a capacity', () => {
    expect(matched('Philips Airfryer Combi XXL Connected - 8.3L')).toBe('1001')
    expect(matched("De'Longhi Magnifica Evo ECAM290.51.B")).toBe('1011')
    expect(matched('Dreame X50 Ultra Complete')).toBe('1010')
  })

  it('refuses a name two different products could be', () => {
    // HD9650 and HD9270 are both an "Airfryer XXL".
    expect(matched('Philips Airfryer XXL')).toBeNull()
    // 20 L and 25 L.
    expect(matched('Meaco Arete Two')).toBeNull()
  })

  it('settles a family by its reference code', () => {
    expect(matched('Philips Airfryer XXL HD9650/90')).toBe('1002')
  })

  it('never offers another variant, bundle, generation or capacity', () => {
    expect(matched('Dyson V15 Detect')).toBeNull() // only "Absolute" is sold
    expect(matched('Roborock Q7 M5')).toBe('1007') // not the M5+
    expect(matched('Roborock Q7 M5+')).toBe('1008')
    expect(matched('TP-Link Tapo P115 Slimme Stekker met Energiemeting')).toBe('1012') // not the 4-pack
    expect(matched('TP-Link Tapo P100 4-Pack Slimme Stekkers')).toBeNull()
    expect(matched('Shelly 1PM Gen4')).toBeNull() // Gen3 only
    expect(matched('Meaco Arete Two 20L')).toBe('1020') // not the 25 L
  })

  it('treats colours of one product as one model and offers the cheapest', () => {
    const offer = matchProductByName(index, 'Levoit Core 300S')
    expect(offer?.price).toBe(139.99)
  })

  it('reads a multi-word brand from the start of the name', () => {
    expect(matched('Philips Hue White and Color Ambiance E27')).toBe('1015')
  })

  it('has no offer for a brand alone or an unknown brand', () => {
    expect(matched('Levoit')).toBeNull()
    expect(matched('Somfy Oximo io')).toBeNull()
  })

  it('drops products out of stock, in another currency or without our tracked Coolblue link', () => {
    expect(matched('Levoit Core 400S')).toBeNull() // in_stock 0
    expect(matched('Eve Aqua')).toBeNull() // USD
    expect(matched('Netatmo Smart Smoke Alarm')).toBeNull() // not an awin1.com link
    expect(matched('Aqara Hub M3')).toBeNull() // another publisher's link
  })
})

describe('matchProduct', () => {
  it('needs the exact brand', () => {
    expect(matchProduct(index, { brand: 'Philips', model: 'Hue White and Color Ambiance E27' })).toBeNull()
    expect(matchProduct(index, { brand: 'Philips Hue', model: 'White and Color Ambiance E27' })?.price).toBe(49.99)
  })

  it('lets an EAN settle the match', () => {
    expect(matchProduct(index, { brand: 'Philips', model: 'Airfryer XXL', ean: '8710103222222' })?.price).toBe(189)
  })

  it('counts a product listed in two feeds once', () => {
    const twice = parseCoolblueFeed(FEED).filter((p) => p.ean === '8720389012345')
    expect(twice).toHaveLength(2)
    expect(matchProduct(index, { brand: 'Philips', model: 'Airfryer Combi XXL Connected' })?.price).toBe(299)
  })
})
