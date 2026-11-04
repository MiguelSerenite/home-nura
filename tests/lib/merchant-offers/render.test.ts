import { describe, it, expect } from 'vitest'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import CoolblueOffer from '@/components/CoolblueOffer'
import QuickAnswer from '@/components/QuickAnswer'
import CatalogCards from '@/components/category-catalog/CatalogCards'
import { CATALOG_UI } from '@/components/category-catalog/ui'
import { formatEuroNl, formatPriceDateNl } from '@/lib/merchant-offers/format'
import type { CoolblueOffer as Offer } from '@/lib/merchant-offers/types'

const offer: Offer = {
  url: 'https://www.awin1.com/pclick.php?p=1005&a=1255925&m=85161',
  price: 139.99,
  priceAt: '2026-11-02T05:12:33.000Z',
}
const picks = [
  { model: 'Levoit Core 300S', url: 'https://www.amazon.fr/dp/B0001?tag=homavisenl-21' },
  { model: 'Levoit Core 400S', url: 'https://www.amazon.fr/dp/B0002?tag=homavisenl-21' },
]
const question = 'Welke luchtreiniger kies je?'

/** Every <a> of the markup pointing to Coolblue (through Awin). */
const coolblueAnchors = (html: string) => [...html.matchAll(/<a [^>]*href="https:\/\/www\.awin1\.com[^>]*>/g)].map((m) => m[0])

describe('format', () => {
  it('prints euros and the price date the Dutch way, Amsterdam time', () => {
    expect(formatEuroNl(139.99)).toBe('€ 139,99')
    expect(formatEuroNl(1299)).toBe('€ 1.299,00')
    expect(formatPriceDateNl('2026-11-02T05:12:33.000Z')).toBe('02-11-2026 06:12')
    expect(formatPriceDateNl('2026-07-02T05:12:33.000Z')).toBe('02-07-2026 07:12')
    expect(formatPriceDateNl('nope')).toBe('')
  })
})

describe('CoolblueOffer', () => {
  const html = renderToStaticMarkup(createElement(CoolblueOffer, { offer, model: 'Levoit Core 300S', lang: 'nl' }))

  it('names Coolblue before the click, with its price and date', () => {
    expect(html).toContain('Bekijk bij Coolblue')
    expect(html).toContain('€ 139,99')
    expect(html).toContain('Prijs op 02-11-2026 06:12, prijzen kunnen wijzigen.')
    expect(html).toContain('Home Nura is geen Coolblue')
    expect(html).toMatch(/commissie/)
  })

  it('is a sponsored link with its click placement, and shows no image', () => {
    const [anchor] = coolblueAnchors(html)
    expect(anchor).toContain('rel="sponsored nofollow noopener noreferrer"')
    expect(anchor).toContain('data-aff-placement="coolblue_offer"')
    expect(html).not.toContain('<img')
  })

  it('uses no coupon, cashback or delivery promise', () => {
    expect(html.toLowerCase()).not.toMatch(/korting|kortingscode|coupon|cashback|gratis|bezorg|retour/)
  })

  it('renders nothing outside the Dutch version', () => {
    expect(renderToStaticMarkup(createElement(CoolblueOffer, { offer, model: 'Levoit Core 300S', lang: 'fr' }))).toBe('')
  })
})

describe('offers in the hub picks and catalogue cards', () => {
  it('shows the offer under the matched pick only', () => {
    for (const compact of [false, true]) {
      const html = renderToStaticMarkup(
        createElement(QuickAnswer, { question, picks, lang: 'nl', placement: 'picks', compact, offers: { 'Levoit Core 300S': offer } }),
      )
      expect(coolblueAnchors(html)).toHaveLength(1)
      expect(html.match(/Bekijk op Amazon/g)).toHaveLength(2)
    }
  })

  it('renders the picks as before without offers', () => {
    const without = renderToStaticMarkup(createElement(QuickAnswer, { question, picks, lang: 'nl', placement: 'picks' }))
    const empty = renderToStaticMarkup(createElement(QuickAnswer, { question, picks, lang: 'nl', placement: 'picks', offers: {} }))
    expect(without).not.toContain('Coolblue')
    expect(empty).toBe(without)
  })

  it('adds the offer to a catalogue card', () => {
    const entries = [
      { id: 'levoit-core-300s', name: 'Levoit Core 300S', segment: 'mid' as const, bestFor: 'Slaapkamers', facts: ['CADR 240 m³/u'], url: picks[0].url },
      { id: 'levoit-core-400s', name: 'Levoit Core 400S', segment: 'mid' as const, bestFor: 'Woonkamers', facts: ['CADR 400 m³/u'], url: picks[1].url },
    ]
    const withOffer = renderToStaticMarkup(createElement(CatalogCards, { entries, lang: 'nl', ui: CATALOG_UI.nl, offers: { 'Levoit Core 300S': offer } }))
    expect(coolblueAnchors(withOffer)).toHaveLength(1)
    const without = renderToStaticMarkup(createElement(CatalogCards, { entries, lang: 'nl', ui: CATALOG_UI.nl }))
    expect(without).not.toContain('Coolblue')
  })
})
