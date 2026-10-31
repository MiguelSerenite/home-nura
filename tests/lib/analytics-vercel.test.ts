import { describe, it, expect, vi, beforeEach } from 'vitest'

const track = vi.fn()
vi.mock('@vercel/analytics', () => ({ track: (...args: unknown[]) => track(...args) }))

import { trackEvent, trackAffiliateClick, EVENTS, VERCEL_PROPERTIES, VERCEL_MAX_PROPERTIES } from '@/lib/analytics'

describe('trackEvent → Vercel Web Analytics', () => {
  beforeEach(() => {
    track.mockReset()
    vi.stubGlobal('window', {})
  })

  it('forwards only the listed properties that are defined', () => {
    trackEvent(EVENTS.CLICK_AFFILIATE, { asin: 'B0TEST', lang: 'fr', location: 'article_inline', merchant: undefined })
    expect(track).toHaveBeenCalledWith(EVENTS.CLICK_AFFILIATE, { location: 'article_inline' })
  })

  it('stays within the Pro plan property limit for every event', () => {
    for (const keys of Object.values(VERCEL_PROPERTIES)) {
      expect(keys.length).toBeLessThanOrEqual(VERCEL_MAX_PROPERTIES)
    }
  })

  it('never sends the search text typed by the reader', () => {
    trackEvent(EVENTS.SEARCH_QUERY, { query: 'jean dupont', results: 0, lang: 'fr' })
    expect(track).toHaveBeenCalledWith(EVENTS.SEARCH_QUERY, { results: 0 })
  })

  it('records an affiliate click with its location and merchant', () => {
    trackAffiliateClick({
      asin: 'B0TEST',
      productName: 'Airfryer X',
      location: 'article_sticky',
      lang: 'de',
      url: 'https://www.amazon.fr/dp/B0TEST?tag=x-21',
    })
    expect(track).toHaveBeenCalledWith(EVENTS.CLICK_AFFILIATE, { location: 'article_sticky', merchant: 'amazon.fr' })
  })

  it('never lets an analytics failure break the click', () => {
    track.mockImplementation(() => {
      throw new Error('blocked by an ad blocker')
    })
    expect(() => trackEvent(EVENTS.CLICK_AFFILIATE, { asin: 'B0TEST' })).not.toThrow()
  })
})
