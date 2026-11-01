import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { createElement } from 'react'
import { AMAZON_DIRECT_MODEL_STORES, amazonMarketModelUrl } from '@/lib/amazon'
import { CLICK_SURFACES } from '@/lib/affiliate-click'
import { FLOOR_CARE_GUIDES, FLOOR_CARE_MARKETS } from '@/lib/floor-care/config'
import { getFloorCareMarket } from '@/lib/floor-care/data'
import { pickAmazonUrl, pickName } from '@/lib/floor-care/picks'
import PickCards from '@/components/floor-care/PickCards'
import ComparisonSection from '@/components/floor-care/ComparisonSection'

const TAGS = { us: 'homaviseus-21', ca: 'homaviseca-21' } as const

describe('amazonMarketModelUrl', () => {
  it('searches amazon.fr for the exact model with the US tracking ID', () => {
    const url = new URL(amazonMarketModelUrl({ model: 'Shark StainStriker PX201', asin: 'B0C9H1ZRH4' }, 'us'))
    expect(url.origin).toBe('https://www.amazon.fr')
    expect(url.pathname).toBe('/s')
    expect(url.searchParams.get('k')).toBe('Shark StainStriker PX201')
    expect(url.searchParams.get('tag')).toBe('homaviseus-21')
  })

  it('searches amazon.fr with the Canadian tracking ID on /ca', () => {
    const url = new URL(amazonMarketModelUrl({ model: 'BISSELL Little Green Max Pet 3860B', asin: 'B0D11TKT2Z' }, 'ca'))
    expect(url.origin).toBe('https://www.amazon.fr')
    expect(url.searchParams.get('k')).toBe('BISSELL Little Green Max Pet 3860B')
    expect(url.searchParams.get('tag')).toBe('homaviseca-21')
  })

  it('keeps direct links off for both markets', () => {
    expect(AMAZON_DIRECT_MODEL_STORES).toEqual({ us: null, ca: null })
  })

  it('links the ASIN directly once a market’s store is switched on, and searches without an ASIN', () => {
    const stores = { us: 'https://store.example' }
    expect(amazonMarketModelUrl({ model: 'Shark StainStriker PX201', asin: 'B0C9H1ZRH4' }, 'us', stores)).toBe(
      'https://store.example/dp/B0C9H1ZRH4?tag=homaviseus-21',
    )
    expect(new URL(amazonMarketModelUrl({ model: 'Shark CarpetXpert EX201', asin: null }, 'us', stores)).origin).toBe('https://www.amazon.fr')
    expect(new URL(amazonMarketModelUrl({ model: 'X', asin: 'B0D11TKT2Z' }, 'ca', stores)).origin).toBe('https://www.amazon.fr')
  })
})

describe.each(FLOOR_CARE_MARKETS)('floor-care Amazon links, %s', (market) => {
  const data = getFloorCareMarket(market)
  const picks = FLOOR_CARE_GUIDES.flatMap((guide) => data[guide].picks)

  it('search the market’s model on amazon.fr with the market tracking ID', () => {
    for (const pick of picks.filter((p) => p.asin !== null)) {
      const url = new URL(pickAmazonUrl(pick, market)!)
      expect(url.origin, pickName(pick)).toBe('https://www.amazon.fr')
      expect(url.searchParams.get('k'), pickName(pick)).toBe(pickName(pick))
      expect(url.searchParams.get('tag'), pickName(pick)).toBe(TAGS[market])
    }
  })

  it('offer no Amazon link for a model not listed on the market’s store', () => {
    for (const pick of picks.filter((p) => p.asin === null)) expect(pickAmazonUrl(pick, market), pickName(pick)).toBeNull()
  })

  it('render sponsored links, the store-neutral CTA, Amazon’s disclosure and no price or Amazon image', () => {
    for (const guide of ['dry', 'hardfloor', 'textile'] as const) {
      const html = renderToStaticMarkup(
        createElement('div', null,
          createElement(PickCards, { market, guide, picks: data[guide].picks, buyLabel: 'View on Amazon' }),
          createElement(ComparisonSection, { data: data[guide], buyLabel: 'View on Amazon' }),
        ),
      )
      const amazonLinks = [...html.matchAll(/<a [^>]*href="(https:\/\/www\.amazon\.fr[^"]+)"[^>]*>/g)]
      for (const [tag] of amazonLinks) expect(tag).toMatch(/rel="sponsored nofollow noopener noreferrer"/)
      if (amazonLinks.length > 0) {
        expect(html, guide).toContain('data-amazon-disclosure')
        expect(html, guide).toContain('As an Amazon Associate I earn from qualifying purchases.')
        expect(html, guide).toContain('View on Amazon')
      }
      expect(html, guide).not.toMatch(/\$\s?\d|\d\s?\$|<img[^>]+amazon/i)
    }
  })
})

describe('click tracking', () => {
  it('has its own surface for the first-party beacon', () => {
    expect(CLICK_SURFACES).toContain('floor_care')
  })
})
