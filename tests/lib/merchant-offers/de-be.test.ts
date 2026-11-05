import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { gzipSync } from 'node:zlib'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import CoolblueOffer from '@/components/CoolblueOffer'
import QuickAnswer from '@/components/QuickAnswer'
import { AWIN_KEY_ENV, __resetCoolblueFeedsForTests, coolblueOffersForPage } from '@/lib/merchant-offers/coolblue'
import { formatEuro, formatPriceDate } from '@/lib/merchant-offers/format'
import { offerView, type MerchantOffer } from '@/lib/merchant-offers/view'
import { renderHtml } from './render-html'

const fixture = (name: string) => readFileSync(join(process.cwd(), 'tests/fixtures/merchant-offers', name), 'utf8')
const FEEDS: Record<string, string> = {
  '96636': fixture('coolblue-feed.csv'), // Coolblue NL full feed
  '95921': fixture('coolblue-de-feed.csv'), // Coolblue DE full feed
  '96638': fixture('coolblue-be-nl-feed.csv'), // Coolblue BE (NL)
  '96637': fixture('coolblue-be-fr-feed.csv'), // Coolblue BE (FR)
}
const KEY = 'secret-test-key-123'

/** Feed list unavailable; every Create-a-Feed download served gzipped from the fixtures (others empty). */
function stubAwin() {
  const fetchMock = vi.fn(async (input: string | URL | Request, _init?: RequestInit) => {
    const url = String(input)
    if (url.endsWith('/feedList')) return new Response('nope', { status: 503 })
    const feedId = url.match(/\/fid\/(\d+)\//)?.[1] ?? ''
    const body = FEEDS[feedId] ?? 'aw_deep_link,product_name,brand_name,search_price\n'
    return new Response(new Uint8Array(gzipSync(Buffer.from(body))))
  })
  vi.stubGlobal('fetch', fetchMock)
  return fetchMock
}

const anchors = (html: string) => [...html.matchAll(/<a [^>]*href="https:\/\/www\.awin1\.com[^>]*>/g)].map((m) => m[0])
/** Opening tag of each offer box. */
const boxes = (html: string) => [...html.matchAll(/<div [^>]*data-merchant="coolblue"[^>]*>/g)].map((m) => m[0])

const at = '2026-11-02T05:12:33.000Z'
const offer = (merchant: MerchantOffer['merchant'], m: string, price = 139.99) =>
  offerView({ merchant, url: `https://www.awin1.com/pclick.php?p=1&a=1255925&m=${m}`, price, priceAt: at })
const NL = offer('coolblue-nl', '85161')
const DE = offer('coolblue-de', '85171', 129.99)
const BE_NL = offer('coolblue-be-nl', '85165', 144.99)
const BE_FR = offer('coolblue-be-fr', '85165', 1249.5)

describe('Coolblue DE and BE offers from the feeds', () => {
  beforeEach(() => {
    __resetCoolblueFeedsForTests()
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
    vi.restoreAllMocks()
  })

  it('matches German page names to the Coolblue DE feed (cheapest colour, German colours and descriptors)', async () => {
    vi.stubEnv(AWIN_KEY_ENV, KEY)
    const fetchMock = stubAwin()
    const offers = await coolblueOffersForPage('de', [
      'Levoit Core 300S',
      'TP-Link Tapo P115 WLAN-Steckdose mit Energiemessung',
      'Philips Airfryer Combi XXL Connected - 8.3L',
      'Roborock Q7 M5',
      'Dyson V15 Detect Absolute',
    ])
    expect(Object.keys(offers).sort()).toEqual([
      'Levoit Core 300S',
      'Philips Airfryer Combi XXL Connected - 8.3L',
      'TP-Link Tapo P115 WLAN-Steckdose mit Energiemessung',
    ])
    expect(offers['Levoit Core 300S']).toHaveLength(1)
    expect(offers['Levoit Core 300S'][0]).toMatchObject({
      merchant: 'coolblue-de',
      store: 'coolblue.de',
      url: 'https://www.awin1.com/pclick.php?p=2003&a=1255925&m=85171',
      price: 129.99,
      priceText: '129,99\u00a0€',
      button: 'Bei Coolblue ansehen',
    })
    expect(offers['Levoit Core 300S'][0].onlyCountry).toBeUndefined()
    expect(offers['Philips Airfryer Combi XXL Connected - 8.3L'][0].price).toBe(279)
    // "Q7 M5+" is another product; a Coolblue NL link in the DE feed is dropped.
    expect(offers['Roborock Q7 M5']).toBeUndefined()
    expect(offers['Dyson V15 Detect Absolute']).toBeUndefined()
    // Only the DE feed (and the feed list) is read for /de.
    const fids = fetchMock.mock.calls.map((c) => String(c[0]).match(/\/fid\/(\d+)\//)?.[1]).filter(Boolean)
    expect(fids).toEqual(['95921'])
    expect(String(fetchMock.mock.calls.find((c) => String(c[0]).includes('/fid/'))?.[0])).toContain('/language/de/')
  })

  it('gives /nl the Coolblue NL offer and, for the same model, the Coolblue BE one (table order)', async () => {
    vi.stubEnv(AWIN_KEY_ENV, KEY)
    stubAwin()
    const offers = await coolblueOffersForPage('nl', ['Levoit Core 300S', 'Meaco Arete Two 20 liter', 'Roborock Q7 M5'])
    expect(offers['Levoit Core 300S'].map((o) => [o.merchant, o.price])).toEqual([
      ['coolblue-nl', 139.99],
      ['coolblue-be-nl', 144.99],
    ])
    expect(offers['Meaco Arete Two 20 liter'].map((o) => o.merchant)).toEqual(['coolblue-nl', 'coolblue-be-nl'])
    // In the BE feed with a Coolblue NL link: kept for NL only.
    expect(offers['Roborock Q7 M5'].map((o) => o.merchant)).toEqual(['coolblue-nl'])
  })

  it('gives /fr the Coolblue BE (FR) offers only, and refuses another variant', async () => {
    vi.stubEnv(AWIN_KEY_ENV, KEY)
    stubAwin()
    const offers = await coolblueOffersForPage('fr', [
      'Levoit Core 300S',
      'TP-Link Tapo P115 Prise Connectée avec Suivi Conso',
      'Philips Airfryer Combi XXL Connecté - 8.3L',
    ])
    expect(Object.keys(offers).sort()).toEqual(['Levoit Core 300S', 'TP-Link Tapo P115 Prise Connectée avec Suivi Conso'])
    expect(Object.values(offers).flat().every((o) => o.merchant === 'coolblue-be-fr')).toBe(true)
  })

  it('shows nothing and never fetches without AWIN_DATAFEED_KEY', async () => {
    vi.stubEnv(AWIN_KEY_ENV, '')
    const fetchMock = stubAwin()
    for (const lang of ['nl', 'de', 'fr'] as const) {
      expect(await coolblueOffersForPage(lang, ['Levoit Core 300S', 'TP-Link Tapo P115'])).toEqual({})
    }
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('keeps the other merchants when one feed is down', async () => {
    vi.stubEnv(AWIN_KEY_ENV, KEY)
    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: string | URL | Request) => {
        const url = String(input)
        if (url.includes('/fid/96638/')) throw new Error(`connect ECONNREFUSED ${url}`)
        const feedId = url.match(/\/fid\/(\d+)\//)?.[1] ?? ''
        return new Response(FEEDS[feedId] ?? 'nope', { status: FEEDS[feedId] ? 200 : 404 })
      }),
    )
    const offers = await coolblueOffersForPage('nl', ['Levoit Core 300S'])
    expect(offers['Levoit Core 300S'].map((o) => o.merchant)).toEqual(['coolblue-nl'])
    expect(vi.mocked(console.warn).mock.calls.join('\n')).not.toContain(KEY)
  })
})

describe('format', () => {
  it('prints the price the German and French way', () => {
    expect(formatEuro(129.99, 'de')).toBe('129,99 €')
    expect(formatEuro(1299, 'de')).toBe('1.299,00 €')
    expect(formatEuro(1249.5, 'fr')).toBe('1 249,50 €')
    expect(formatEuro(1299, 'nl')).toBe('€ 1.299,00')
  })

  it('prints the price date in local time', () => {
    expect(formatPriceDate(at, 'de')).toBe('02.11.2026, 06:12')
    expect(formatPriceDate('2026-07-02T05:12:33.000Z', 'de')).toBe('02.07.2026, 07:12')
    expect(formatPriceDate(at, 'fr')).toBe('02/11/2026 à 06:12')
    expect(formatPriceDate('nope', 'fr')).toBe('')
  })
})

describe('German offer box', () => {
  const html = renderToStaticMarkup(createElement(CoolblueOffer, { offers: [DE], model: 'Levoit Core 300S', lang: 'de' }))

  it('names Coolblue before the click, with its price, date and disclosure', () => {
    expect(html).toContain('Bei Coolblue ansehen →')
    expect(html).toContain('129,99 €</span> bei Coolblue')
    expect(html).toContain('Preis vom 02.11.2026, 06:12. Preise können sich ändern.')
    expect(html).toContain('Home Nura ist nicht Coolblue')
    expect(html).toContain('coolblue.de')
    expect(html).toContain('Provision')
  })

  it('is a sponsored link without image, coupon, cashback or delivery promise, shown to every visitor', () => {
    const [anchor] = anchors(html)
    expect(anchor).toContain('rel="sponsored nofollow noopener noreferrer"')
    expect(anchor).toContain('data-aff-placement="coolblue_offer"')
    expect(html).not.toContain('<img')
    expect(html.toLowerCase()).not.toMatch(/gutschein|rabatt|coupon|cashback|gratis|kostenlos|versand|liefer|rücksend|retoure/)
    expect(boxes(html)[0]).not.toMatch(/data-offer-(only|except)/)
    expect(boxes(html)[0]).toContain('data-store="coolblue.de"')
  })

  it('sits under the matched pick of a German hub', async () => {
    const picks = [
      { model: 'Levoit Core 300S', url: 'https://www.amazon.fr/dp/B0001?tag=homavisede-21' },
      { model: 'Levoit Core 400S', url: 'https://www.amazon.fr/dp/B0002?tag=homavisede-21' },
    ]
    const page = await renderHtml(
      createElement(QuickAnswer, { question: 'Welcher Luftreiniger?', picks, lang: 'de', placement: 'picks', compact: true, offers: { 'Levoit Core 300S': [DE] } }),
    )
    expect(anchors(page)).toHaveLength(1)
    expect(page).toContain('Bei Coolblue ansehen')
  })
})

describe('Belgian offers', () => {
  it('on /nl: Coolblue NL hidden in Belgium, Coolblue BE shown in Belgium only', () => {
    const html = renderToStaticMarkup(createElement(CoolblueOffer, { offers: [NL, BE_NL], model: 'Levoit Core 300S', lang: 'nl' }))
    const [nl, be] = boxes(html)
    expect(nl).toContain('data-store="coolblue.nl"')
    expect(nl).toContain('data-offer-except="BE"')
    expect(nl).not.toContain('data-offer-only')
    expect(be).toContain('data-store="coolblue.be"')
    expect(be).toContain('data-offer-only="BE"')
    expect(html).toContain('Bekijk bij Coolblue (België) →')
    expect(html).toContain('€ 144,99</span> bij Coolblue België')
    expect(html).toContain('deze link brengt je naar coolblue.be')
    expect(html).not.toContain('Voir chez')
  })

  it('on /fr: French copy, Belgian visitors only', () => {
    const html = renderToStaticMarkup(createElement(CoolblueOffer, { offers: [BE_FR], model: 'Levoit Core 300S', lang: 'fr' }))
    expect(boxes(html)).toHaveLength(1)
    expect(boxes(html)[0]).toContain('data-offer-only="BE"')
    expect(html).toContain('Voir chez Coolblue (Belgique) →')
    expect(html).toContain('1 249,50 €</span> chez Coolblue (Belgique)')
    expect(html).toContain('Prix du 02/11/2026 à 06:12, les prix peuvent changer.')
    expect(html).toContain('Home Nura n’est pas Coolblue')
    expect(html).toContain('coolblue.be')
    expect(html).toContain('commission')
    expect(html.toLowerCase()).not.toMatch(/code promo|réduction|coupon|cashback|gratuit|livraison|retour/)
  })
})
