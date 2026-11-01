import { describe, it, expect } from 'vitest'
import { AMAZON_OWN_STORE_MARKETS, amazonMarket, amazonMarketModelUrl } from '@/lib/amazon'
import { CLICK_PLACEMENTS, CLICK_SURFACES, parseAffiliateClick } from '@/lib/affiliate-click'
import { LANGUAGES } from '@/lib/i18n'
import { getMarketPages, marketPageHref } from '@/lib/market-pages/data'
import { marketPageVisualKind, marketPickUrl } from '@/lib/market-pages/picks'
import type { MarketPagePick } from '@/lib/market-pages/types'

const pick = (asin: string | null): MarketPagePick => ({
  brand: 'Acme',
  model: 'Fryer A1',
  role: 'Best overall',
  why: 'x',
  bestFor: 'y',
  asin,
  manufacturerUrl: 'https://acme.example/a1',
  specs: { Capacity: '6.5 L' },
})

describe('market page Amazon links', () => {
  it('link the ASIN directly on the two markets whose store is the reader’s own (amazon.fr, amazon.it)', () => {
    expect(AMAZON_OWN_STORE_MARKETS).toEqual(['fr', 'it'])
    expect(marketPickUrl(pick('B0TESTAAA1'), 'fr')).toBe('https://www.amazon.fr/dp/B0TESTAAA1?tag=homenuraen05-21')
    expect(marketPickUrl(pick('B0TESTAAA1'), 'it')).toBe('https://www.amazon.it/dp/B0TESTAAA1?tag=homaviseit-21')
  })

  it('search the exact model on the locale’s link store otherwise, with its tracking ID', () => {
    expect(marketPickUrl(pick(null), 'it')).toBe('https://www.amazon.it/s?k=Acme+Fryer+A1&tag=homaviseit-21')
    expect(marketPickUrl(pick(null), 'fr')).toBe('https://www.amazon.fr/s?k=Acme+Fryer+A1&tag=homenuraen05-21')
    // An amazon.de / amazon.com ASIN means nothing on amazon.fr: Global Earning forwards a search.
    for (const lang of ['de', 'en', 'es', 'nl', 'pl', 'sv', 'us', 'ca'] as const) {
      const url = new URL(marketPickUrl(pick('B0TESTAAA1'), lang))
      expect(url.origin, lang).toBe('https://www.amazon.fr')
      expect(url.pathname, lang).toBe('/s')
      expect(url.searchParams.get('k'), lang).toBe('Acme Fryer A1')
      expect(url.searchParams.get('tag'), lang).toBe(amazonMarket(lang).tag)
    }
  })

  it('search amazon.it for a catalog ASIN it lacks', () => {
    expect(amazonMarketModelUrl({ model: 'Instant Pot Duo Plus WhisperQuiet', asin: 'B0BYT67H2S' }, 'it')).toBe(
      'https://www.amazon.it/s?k=Instant+Pot+Duo+Plus+WhisperQuiet&tag=homaviseit-21',
    )
  })

  it('send every pick of every page to its locale market', () => {
    const problems = getMarketPages().flatMap((page) =>
      page.picks.flatMap((p) => {
        const url = new URL(marketPickUrl(p, page.locale))
        const market = amazonMarket(page.locale)
        return url.origin === market.baseUrl && url.searchParams.get('tag') === market.tag ? [] : [`${marketPageHref(page)}: ${url.href}`]
      }),
    )
    expect(problems).toEqual([])
  })

  it('record clicks under the market_page placement and surface', () => {
    expect(CLICK_PLACEMENTS).toContain('market_page')
    expect(CLICK_SURFACES).toContain('market_page')
    for (const lang of LANGUAGES) {
      const url = new URL(marketPickUrl(pick('B0TESTAAA1'), lang))
      const beacon = {
        path: `/${lang}/vs/acme-a1-vs-b2`,
        lang,
        placement: 'market_page',
        surface: 'market_page',
        model: 'Acme Fryer A1',
        store: url.hostname.replace(/^www\./, ''),
        tag: url.searchParams.get('tag'),
      }
      expect(parseAffiliateClick(beacon), lang).toMatchObject({ lang, placement: 'market_page', surface: 'market_page', market: amazonMarket(lang).market })
    }
  })

  it('pick the neutral card icon from the first related category', () => {
    expect(marketPageVisualKind({ related: ['/it/guides/airfryers'] })).toBe('airfryer')
    expect(marketPageVisualKind({ related: ['/us/blog/x', '/us/entretien-maison/aspirateurs-robots'] })).toBe('robot-vacuum')
    expect(marketPageVisualKind({ related: ['/us/guides/floor-care/carpet-upholstery-cleaners'] })).toBe('carpet-cleaner')
    expect(marketPageVisualKind({ related: [] })).toBe('appliance')
  })
})
