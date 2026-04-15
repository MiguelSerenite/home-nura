import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { trackEvent, trackAffiliateClick, EVENTS } from '@/lib/analytics'

describe('trackEvent', () => {
  beforeEach(() => {
    // Fresh window per test
    // @ts-expect-error test setup
    globalThis.window = {}
    vi.spyOn(console, 'debug').mockImplementation(() => {})
  })

  afterEach(() => {
    // @ts-expect-error test cleanup
    delete globalThis.window
    vi.restoreAllMocks()
  })

  it('pushes to window.dataLayer when present', () => {
    window.dataLayer = []
    trackEvent(EVENTS.CLICK_AFFILIATE, { asin: 'B001', location: 'comparison_table' })
    expect(window.dataLayer).toHaveLength(1)
    expect(window.dataLayer[0]).toMatchObject({
      event: 'click_affiliate',
      asin: 'B001',
      location: 'comparison_table',
    })
  })

  it('does not throw when dataLayer is absent', () => {
    expect(() => trackEvent(EVENTS.SEARCH_OPEN, {})).not.toThrow()
  })

  it('calls window.plausible with event + props when present', () => {
    const plausible = vi.fn()
    window.plausible = plausible
    trackEvent(EVENTS.NEWSLETTER_SUBMIT, { lang: 'fr' })
    expect(plausible).toHaveBeenCalledOnce()
    expect(plausible).toHaveBeenCalledWith('newsletter_submit', { props: { lang: 'fr' } })
  })

  it('swallows errors thrown by plausible to avoid breaking UX', () => {
    window.plausible = vi.fn(() => {
      throw new Error('plausible not ready')
    })
    expect(() => trackEvent(EVENTS.SEARCH_QUERY, { query: 'ninja' })).not.toThrow()
  })

  it('fires to both providers when both are loaded', () => {
    window.dataLayer = []
    const plausible = vi.fn()
    window.plausible = plausible
    trackEvent(EVENTS.COMPARATOR_ADD, { asin: 'B002', slot: 1 })
    expect(window.dataLayer).toHaveLength(1)
    expect(plausible).toHaveBeenCalledOnce()
  })

  it('strips undefined props before forwarding', () => {
    window.dataLayer = []
    trackEvent(EVENTS.CLICK_AFFILIATE, {
      asin: 'B001',
      position: undefined,
      location: 'article_inline',
    })
    const payload = window.dataLayer[0]
    expect(payload).toHaveProperty('asin', 'B001')
    expect(payload).toHaveProperty('location', 'article_inline')
    expect(payload).not.toHaveProperty('position')
  })

  it('is a safe no-op during SSR (no window)', () => {
    // @ts-expect-error force server-side
    delete globalThis.window
    expect(() => trackEvent(EVENTS.CLICK_AFFILIATE, { asin: 'B001' })).not.toThrow()
  })

  it('works without props', () => {
    window.dataLayer = []
    trackEvent(EVENTS.QUIZ_START)
    expect(window.dataLayer).toHaveLength(1)
    expect(window.dataLayer[0]).toEqual({ event: 'quiz_start' })
  })
})

describe('trackAffiliateClick', () => {
  beforeEach(() => {
    // @ts-expect-error test setup
    globalThis.window = { dataLayer: [] }
    vi.spyOn(console, 'debug').mockImplementation(() => {})
  })

  afterEach(() => {
    // @ts-expect-error test cleanup
    delete globalThis.window
    vi.restoreAllMocks()
  })

  it('forwards the canonical affiliate click shape', () => {
    trackAffiliateClick({
      asin: 'B09XYZ1234',
      productName: 'Ninja Foodi Max Dual Zone',
      priceNumeric: 229,
      position: 1,
      location: 'comparison_table',
      lang: 'fr',
    })
    const payload = window.dataLayer?.[0]
    expect(payload).toMatchObject({
      event: 'click_affiliate',
      asin: 'B09XYZ1234',
      product_name: 'Ninja Foodi Max Dual Zone',
      price: 229,
      position: 1,
      location: 'comparison_table',
      lang: 'fr',
    })
  })

  it('omits undefined optional fields', () => {
    trackAffiliateClick({
      asin: 'B001',
      productName: 'Test',
      location: 'article_bottom',
      lang: 'en',
    })
    const payload = window.dataLayer?.[0]
    expect(payload).not.toHaveProperty('price')
    expect(payload).not.toHaveProperty('position')
    expect(payload).toHaveProperty('location', 'article_bottom')
  })
})

describe('EVENTS constants', () => {
  it('exposes a stable set of canonical event names', () => {
    expect(EVENTS.CLICK_AFFILIATE).toBe('click_affiliate')
    expect(EVENTS.NEWSLETTER_SUBMIT).toBe('newsletter_submit')
    expect(EVENTS.NEWSLETTER_SUCCESS).toBe('newsletter_success')
    expect(EVENTS.NEWSLETTER_ERROR).toBe('newsletter_error')
    expect(EVENTS.SEARCH_OPEN).toBe('search_open')
    expect(EVENTS.SEARCH_QUERY).toBe('search_query')
    expect(EVENTS.COMPARATOR_ADD).toBe('comparator_add')
    expect(EVENTS.COMPARATOR_REMOVE).toBe('comparator_remove')
  })
})
