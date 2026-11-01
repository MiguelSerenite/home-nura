import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { trackEvent, trackAffiliateClick, EVENTS } from '@/lib/analytics'
import { amazonMarket } from '@/lib/amazon'

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
    globalThis.window = { dataLayer: [], location: { pathname: '/fr' } }
    vi.stubGlobal('navigator', { sendBeacon: vi.fn(() => true) })
    vi.spyOn(console, 'debug').mockImplementation(() => {})
  })

  afterEach(() => {
    // @ts-expect-error test cleanup
    delete globalThis.window
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('forwards the canonical affiliate click shape, with placement and market', () => {
    trackAffiliateClick({
      asin: 'B09XYZ1234',
      productName: 'Ninja Foodi Max Dual Zone',
      priceNumeric: 229,
      position: 1,
      location: 'comparison_table',
      placement: 'table',
      lang: 'en',
      url: `https://www.amazon.fr/dp/B09XYZ1234?tag=${amazonMarket('en').tag}`,
    })
    const payload = window.dataLayer?.[0]
    expect(payload).toMatchObject({
      event: 'click_affiliate',
      asin: 'B09XYZ1234',
      product_name: 'Ninja Foodi Max Dual Zone',
      price: 229,
      position: 1,
      location: 'comparison_table',
      placement: 'table',
      lang: 'en',
      market: 'uk',
      merchant: 'amazon.fr',
    })
  })

  it('omits undefined optional fields', () => {
    trackAffiliateClick({
      asin: 'B001',
      productName: 'Test',
      location: 'article_bottom',
      placement: 'product_block',
      lang: 'en',
      url: 'https://www.amazon.fr/dp/B001',
    })
    const payload = window.dataLayer?.[0]
    expect(payload).not.toHaveProperty('price')
    expect(payload).not.toHaveProperty('position')
    expect(payload).not.toHaveProperty('surface')
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

describe('trackAffiliateClick first-party beacon', () => {
  const sendBeacon = vi.fn(() => true)
  const IT = amazonMarket('it')
  const NL = amazonMarket('nl')
  const FR = amazonMarket('fr')

  beforeEach(() => {
    // @ts-expect-error test setup
    globalThis.window = { dataLayer: [], location: { pathname: '/it/blog/guide-purificateur-air-2026' } }
    vi.stubGlobal('navigator', { sendBeacon })
    vi.spyOn(console, 'debug').mockImplementation(() => {})
    sendBeacon.mockClear()
  })

  afterEach(() => {
    // @ts-expect-error test cleanup
    delete globalThis.window
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  const bodies = () => sendBeacon.mock.calls.map((call) => JSON.parse((call as unknown as [string, string])[1]))

  it('posts the click to /api/click with its placement, store and tracking ID', () => {
    trackAffiliateClick({
      asin: '',
      productName: 'Levoit Core 300S',
      location: 'article_inline',
      lang: 'it',
      placement: 'body_link',
      surface: 'inline',
      url: `https://www.amazon.it/s?k=Levoit+Core+300S&tag=${IT.tag}`,
    })
    expect(sendBeacon).toHaveBeenCalledOnce()
    const [endpoint] = sendBeacon.mock.calls[0] as unknown as [string, string]
    expect(endpoint).toBe('/api/click')
    expect(bodies()[0]).toEqual({
      path: '/it/blog/guide-purificateur-air-2026',
      lang: 'it',
      placement: 'body_link',
      surface: 'inline',
      model: 'Levoit Core 300S',
      store: 'amazon.it',
      tag: IT.tag,
    })
  })

  it('posts every click, including the blocks that had no surface', () => {
    window.location.pathname = '/fr'
    trackAffiliateClick({
      asin: 'B001',
      productName: 'Test',
      location: 'product_card',
      placement: 'card',
      lang: 'fr',
      url: `https://www.amazon.fr/dp/B001?tag=${FR.tag}`,
    })
    expect(bodies()).toEqual([{ path: '/fr', lang: 'fr', placement: 'card', model: 'Test', store: 'amazon.fr', tag: FR.tag }])
  })

  it('posts problem-page and Black Friday clicks with their placement and legacy surface', () => {
    window.location.pathname = '/fr/black-friday'
    trackAffiliateClick({
      asin: '',
      productName: 'Amazon Prime free trial',
      location: 'category_picks',
      lang: 'fr',
      placement: 'black_friday',
      surface: 'black_friday',
      url: `https://www.amazon.fr/amazonprime?_encoding=UTF8&primeCampaignId=prime_assoc_ft&tag=${FR.tag}`,
    })
    window.location.pathname = '/nl/guides/probleme/robot-aspirateur-ne-charge-plus'
    trackAffiliateClick({
      asin: '',
      productName: 'Roborock Q7 M5+',
      location: 'category_picks',
      lang: 'nl',
      placement: 'picks',
      surface: 'problem_picks',
      url: `https://www.amazon.fr/s?k=Roborock+Q7+M5%2B&tag=${NL.tag}`,
    })
    expect(bodies()).toEqual([
      {
        path: '/fr/black-friday',
        lang: 'fr',
        placement: 'black_friday',
        surface: 'black_friday',
        model: 'Amazon Prime free trial',
        store: 'amazon.fr',
        tag: FR.tag,
      },
      {
        path: '/nl/guides/probleme/robot-aspirateur-ne-charge-plus',
        lang: 'nl',
        placement: 'picks',
        surface: 'problem_picks',
        model: 'Roborock Q7 M5+',
        store: 'amazon.fr',
        tag: NL.tag,
      },
    ])
  })

  it("falls back to the reader's market when the link names no known store or tracking ID", () => {
    window.location.pathname = '/it/black-friday'
    trackAffiliateClick({ asin: '', productName: 'X', location: 'category_picks', lang: 'it', placement: 'black_friday', url: 'not a url' })
    window.location.pathname = '/de/black-friday'
    trackAffiliateClick({
      asin: '',
      productName: 'X',
      location: 'category_picks',
      lang: 'de',
      placement: 'black_friday',
      url: 'https://www.amazon.fr/dp/B001?tag=someoneelse-21',
    })
    expect(bodies().map((b) => [b.store, b.tag])).toEqual([
      ['amazon.it', IT.tag],
      ['amazon.fr', amazonMarket('de').tag],
    ])
  })

  it('never throws when the beacon fails', () => {
    sendBeacon.mockImplementationOnce(() => {
      throw new Error('blocked')
    })
    expect(() =>
      trackAffiliateClick({
        asin: '',
        productName: 'X',
        location: 'article_sticky',
        lang: 'fr',
        placement: 'sticky_bar',
        surface: 'sticky',
        url: 'https://www.amazon.fr/dp/B001',
      }),
    ).not.toThrow()
  })
})
