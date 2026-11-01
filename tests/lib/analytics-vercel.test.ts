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
    trackEvent(EVENTS.CLICK_AFFILIATE, { asin: 'B0TEST', lang: 'fr', location: 'article_inline', placement: 'body_link', market: undefined })
    expect(track).toHaveBeenCalledWith(EVENTS.CLICK_AFFILIATE, { placement: 'body_link' })
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

  it('records an affiliate click with its placement and market, the two questions the click report answers', () => {
    vi.stubGlobal('navigator', { sendBeacon: () => true })
    trackAffiliateClick({
      asin: 'B0TEST',
      productName: 'Airfryer X',
      location: 'article_sticky',
      placement: 'sticky_bar',
      surface: 'sticky',
      lang: 'sv',
      url: 'https://www.amazon.fr/dp/B0TEST',
    })
    expect(track).toHaveBeenCalledWith(EVENTS.CLICK_AFFILIATE, { placement: 'sticky_bar', market: 'se' })
  })

  it('records the country choice: entry page views and choices, suggestion shown / accepted / dismissed', () => {
    trackEvent(EVENTS.ENTRY_VIEW, { basis: 'country', proposed: 'us' })
    expect(track).toHaveBeenLastCalledWith('entry_view', { basis: 'country', proposed: 'us' })
    trackEvent(EVENTS.ENTRY_CHOOSE, { locale: 'nl', proposed: true })
    expect(track).toHaveBeenLastCalledWith('entry_choose', { locale: 'nl', proposed: true })
    trackEvent(EVENTS.LOCALE_SUGGESTION, { action: 'dismiss', locale: 'es' })
    expect(track).toHaveBeenLastCalledWith('locale_suggestion', { action: 'dismiss', locale: 'es' })
  })

  it('queues an event sent before the Vercel script is ready instead of dropping it', () => {
    const win: { va?: unknown; vaq?: unknown[] } = {}
    vi.stubGlobal('window', win)
    trackEvent(EVENTS.ENTRY_VIEW, { basis: 'none', proposed: 'none' })
    expect(typeof win.va).toBe('function')
  })

  it('never lets an analytics failure break the click', () => {
    track.mockImplementation(() => {
      throw new Error('blocked by an ad blocker')
    })
    expect(() => trackEvent(EVENTS.CLICK_AFFILIATE, { asin: 'B0TEST' })).not.toThrow()
  })
})
