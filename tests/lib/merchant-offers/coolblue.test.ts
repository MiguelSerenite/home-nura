import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { gzipSync } from 'node:zlib'
import {
  AWIN_KEY_ENV,
  __resetCoolblueFeedsForTests,
  coolblueOfferFor,
  coolblueOffersFor,
  coolblueOffersForPage,
} from '@/lib/merchant-offers/coolblue'
import { COOLBLUE_FEED_IDS } from '@/lib/merchant-offers/feed'

const FEED = readFileSync(join(process.cwd(), 'tests/fixtures/merchant-offers/coolblue-feed.csv'), 'utf8')
const KEY = 'secret-test-key-123'

function respond(body: string | Buffer, status = 200): Response {
  return new Response(typeof body === 'string' ? body : new Uint8Array(body), { status })
}

/** Feed list unavailable, every feed served gzipped (one feed holds the fixture, the others are empty). */
function stubAwin() {
  const fetchMock = vi.fn(async (input: string | URL | Request, _init?: RequestInit) => {
    const url = String(input)
    if (url.endsWith('/feedList')) return respond('nope', 503)
    if (url.includes(`/fid/${COOLBLUE_FEED_IDS[0]}/`)) return respond(gzipSync(Buffer.from(FEED)))
    return respond('aw_deep_link,product_name,brand_name,search_price\n')
  })
  vi.stubGlobal('fetch', fetchMock)
  return fetchMock
}

const warnings = () => vi.mocked(console.warn).mock.calls.map((call) => String(call[0]))

describe('Coolblue offers', () => {
  beforeEach(() => {
    __resetCoolblueFeedsForTests()
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
    vi.restoreAllMocks()
  })

  it('returns nothing, warns and never fetches without AWIN_DATAFEED_KEY', async () => {
    vi.stubEnv(AWIN_KEY_ENV, '')
    const fetchMock = stubAwin()
    expect(await coolblueOffersFor(['Levoit Core 300S'])).toEqual({})
    expect(await coolblueOfferFor({ brand: 'Levoit', model: 'Core 300S' })).toBeNull()
    expect(fetchMock).not.toHaveBeenCalled()
    expect(warnings().some((w) => w.includes(AWIN_KEY_ENV))).toBe(true)
  })

  it('reads gzipped feeds and keys the offers by the page names, with a 6-hour revalidation', async () => {
    vi.stubEnv(AWIN_KEY_ENV, KEY)
    const fetchMock = stubAwin()
    const offers = await coolblueOffersFor(['Levoit Core 300S', 'Philips Airfryer XXL', 'Roborock Q7 M5+'])
    expect(Object.keys(offers).sort()).toEqual(['Levoit Core 300S', 'Roborock Q7 M5+'])
    expect(offers['Levoit Core 300S']).toEqual({
      merchant: 'coolblue-nl',
      url: 'https://www.awin1.com/pclick.php?p=1005&a=1255925&m=85161',
      price: 139.99,
      priceAt: '2026-11-02T05:12:33.000Z',
    })
    // Feed list + one download per feed, each cached by Next for 6 hours.
    expect(fetchMock).toHaveBeenCalledTimes(1 + COOLBLUE_FEED_IDS.length)
    for (const call of fetchMock.mock.calls) {
      expect(call[1]).toEqual({ next: { revalidate: 21600 } })
    }
  })

  it('parses the feeds once for every page of the period', async () => {
    vi.stubEnv(AWIN_KEY_ENV, KEY)
    const fetchMock = stubAwin()
    await coolblueOffersFor(['Levoit Core 300S'])
    await coolblueOfferFor({ brand: 'Roborock', model: 'Q7 M5' })
    expect(fetchMock).toHaveBeenCalledTimes(1 + COOLBLUE_FEED_IDS.length)
  })

  it('never logs the key when Awin fails, and the page gets no offer', async () => {
    vi.stubEnv(AWIN_KEY_ENV, KEY)
    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: string | URL | Request) => {
        throw new Error(`connect ECONNREFUSED ${String(input)}`)
      }),
    )
    expect(await coolblueOffersFor(['Levoit Core 300S'])).toEqual({})
    expect(warnings().length).toBeGreaterThan(0)
    expect(warnings().join('\n')).not.toContain(KEY)
  })

  it('only fetches for the locales of the merchant table', async () => {
    vi.stubEnv(AWIN_KEY_ENV, KEY)
    const fetchMock = stubAwin()
    for (const lang of ['en', 'it', 'es', 'pl', 'sv', 'us', 'ca'] as const) {
      expect(await coolblueOffersForPage(lang, ['Levoit Core 300S'])).toEqual({})
    }
    expect(fetchMock).not.toHaveBeenCalled()
    expect(Object.keys(await coolblueOffersForPage('nl', ['Levoit Core 300S']))).toEqual(['Levoit Core 300S'])
  })
})
