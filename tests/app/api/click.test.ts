import { describe, it, expect, beforeEach, vi } from 'vitest'
import { POST, GET } from '@/app/api/click/route'
import { amazonMarket } from '@/lib/amazon'
import { __resetRateLimitForTests } from '@/lib/rate-limit'
import {
  articleSlugOf,
  CLICK_MARKETS,
  CLICK_PLACEMENTS,
  CLICK_SURFACES,
  parseAffiliateClick,
  storeOf,
  tagOf,
} from '@/lib/affiliate-click'
import { LANGUAGES } from '@/lib/i18n'

function makeRequest(body: unknown, ip = '1.2.3.4'): Request {
  return new Request('http://localhost/api/click', {
    method: 'POST',
    headers: { 'x-forwarded-for': ip, 'content-type': 'text/plain' },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })
}

const DE = amazonMarket('de')

const valid = {
  path: '/de/blog/test-moulinex-easy-fry-max',
  lang: 'de',
  placement: 'body_link',
  surface: 'inline',
  model: 'Moulinex Easy Fry Max 5L',
  store: DE.marketplace,
  tag: DE.tag,
}

function loggedLine(call = 0): Record<string, unknown> {
  return JSON.parse(vi.mocked(console.log).mock.calls[call][0] as string)
}

describe('POST /api/click', () => {
  beforeEach(() => {
    __resetRateLimitForTests()
    vi.restoreAllMocks()
    vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  it('logs one JSON line per valid click, with placement, market, store and tag, and returns 204', async () => {
    const res = await POST(makeRequest(valid))
    expect(res.status).toBe(204)
    expect(console.log).toHaveBeenCalledOnce()
    expect(loggedLine()).toMatchObject({
      event: 'affiliate_click',
      path: valid.path,
      articleSlug: 'test-moulinex-easy-fry-max',
      lang: 'de',
      market: 'de',
      placement: 'body_link',
      surface: 'inline',
      model: 'Moulinex Easy Fry Max 5L',
      store: 'amazon.fr',
      tag: DE.tag,
    })
  })

  it('logs no personal data: no IP, user agent, cookie or identifier', async () => {
    const request = makeRequest(valid, '9.9.9.9')
    request.headers.set('user-agent', 'Mozilla/5.0 test')
    request.headers.set('cookie', 'session=abc')
    await POST(request)
    const line = loggedLine()
    expect(Object.keys(line).sort()).toEqual(
      ['articleSlug', 'at', 'event', 'lang', 'market', 'model', 'path', 'placement', 'store', 'surface', 'tag'].sort(),
    )
    expect(JSON.stringify(line)).not.toMatch(/9\.9\.9\.9|Mozilla|session/)
  })

  it('accepts every placement, with or without a surface', async () => {
    const { surface: _surface, ...withoutSurface } = valid
    for (const placement of CLICK_PLACEMENTS) {
      const res = await POST(makeRequest({ ...withoutSurface, placement, path: '/fr/guides/robots-aspirateurs' }, `ip-${placement}`))
      expect(res.status, placement).toBe(204)
    }
    const line = loggedLine()
    expect(line.articleSlug).toBeNull()
    expect(line.surface).toBeNull()
  })

  it('accepts every legacy surface', async () => {
    for (const surface of CLICK_SURFACES) {
      expect((await POST(makeRequest({ ...valid, surface }, `ip-${surface}`))).status, surface).toBe(204)
    }
  })

  it.each([
    ['black_friday', '/it/black-friday/airfryers', 'it'],
    ['floor_care', '/us/guides/floor-care/carpet-upholstery-cleaners', 'us'],
    ['picks', '/de/guides/probleme/friteuse-ne-chauffe-plus', 'de'],
  ] as const)('logs %s clicks with the market of the page language', async (placement, path, lang) => {
    const { marketplace, tag, market } = amazonMarket(lang)
    const res = await POST(makeRequest({ ...valid, placement, path, lang, store: marketplace, tag }))
    expect(res.status).toBe(204)
    expect(loggedLine()).toMatchObject({ placement, path, lang, market, articleSlug: null })
  })

  it.each([
    ['unknown placement', { ...valid, placement: 'popup' }],
    ['missing placement', { ...valid, placement: undefined }],
    ['placement not a string', { ...valid, placement: 3 }],
    ['unknown surface', { ...valid, surface: 'popup' }],
    ['null surface', { ...valid, surface: null }],
    ['unknown locale', { ...valid, lang: 'pt' }],
    ['unknown store', { ...valid, store: 'evil.example' }],
    ['store the site never links to', { ...valid, store: 'amazon.de' }],
    ['missing store (old beacon shape)', { ...valid, store: undefined, marketplace: 'amazon.fr' }],
    ['tracking ID of another account', { ...valid, tag: 'someoneelse-21' }],
    ['tracking ID the site does not link with', { ...valid, tag: 'amazonbe08-21' }],
    ['missing tag', { ...valid, tag: undefined }],
    ['tag too long', { ...valid, tag: 'x'.repeat(500) }],
    ['absolute URL as path', { ...valid, path: 'https://evil.example/' }],
    ['path with spaces', { ...valid, path: '/fr/blog/a b' }],
    ['path too long', { ...valid, path: '/fr/' + 'x'.repeat(600) }],
    ['path with a query string', { ...valid, path: '/fr/blog/x?email=a@b.c' }],
    ['path with a fragment', { ...valid, path: '/fr/blog/x#token=abc' }],
    ['path with terminal escape characters', { ...valid, path: '/fr/\u001b]0;pwned\u0007x' }],
    ['path with a C1 control character', { ...valid, path: '/fr/\u009bX' }],
    ['model with a line separator', { ...valid, model: 'Ninja\u2028fake' }],
    ['model with a bidi override', { ...valid, model: 'Ninja \u202eXL' }],
    ['empty model', { ...valid, model: '   ' }],
    ['model too long', { ...valid, model: 'x'.repeat(161) }],
    ['model with control characters', { ...valid, model: 'Ninja\nfake log line' }],
    ['model not a string', { ...valid, model: 42 }],
    ['missing fields', { placement: 'table' }],
    ['an array', [valid]],
    ['not an object', 'null'],
  ])('rejects %s with 400', async (_label, body) => {
    const res = await POST(makeRequest(body))
    expect(res.status).toBe(400)
    expect(console.log).not.toHaveBeenCalled()
  })

  it('rejects invalid JSON with 400', async () => {
    const res = await POST(makeRequest('{not json'))
    expect(res.status).toBe(400)
    expect(((await res.json()) as { error: string }).error).toBe('invalid_json')
  })

  it('rejects oversized bodies with 413', async () => {
    const res = await POST(makeRequest({ ...valid, padding: 'x'.repeat(3000) }))
    expect(res.status).toBe(413)
  })

  it('rate-limits after 30 clicks per minute per IP', async () => {
    for (let i = 0; i < 30; i++) {
      expect((await POST(makeRequest(valid, '7.7.7.7'))).status, `click ${i + 1}`).toBe(204)
    }
    const blocked = await POST(makeRequest(valid, '7.7.7.7'))
    expect(blocked.status).toBe(429)
    expect((await POST(makeRequest(valid, '8.8.8.8'))).status).toBe(204)
  })
})

describe('GET /api/click', () => {
  it('returns 405', async () => {
    expect((await GET()).status).toBe(405)
  })
})

describe('affiliate click helpers', () => {
  it('reads the store from an Amazon URL only', () => {
    expect(storeOf(`https://www.amazon.fr/dp/B0CG6C26QW?tag=${DE.tag}`)).toBe('amazon.fr')
    expect(storeOf(`https://www.amazon.it/dp/B0CG6C26QW?tag=${amazonMarket('it').tag}`)).toBe('amazon.it')
    expect(storeOf('https://www.amazon.de/dp/B0CG6C26QW')).toBeNull()
    expect(storeOf('https://example.com/dp/x')).toBeNull()
    expect(storeOf('not a url')).toBeNull()
  })

  it("reads the tracking ID from a link, when it is one of the site's", () => {
    expect(tagOf(`https://www.amazon.fr/s?k=Levoit&tag=${DE.tag}`)).toBe(DE.tag)
    expect(tagOf('https://www.amazon.fr/dp/B0CG6C26QW')).toBeNull()
    expect(tagOf('https://www.amazon.fr/dp/B0CG6C26QW?tag=someoneelse-21')).toBeNull()
    expect(tagOf('not a url')).toBeNull()
  })

  it('finds the article slug of a blog path', () => {
    expect(articleSlugOf('/it/blog/guide-purificateur-air-2026')).toBe('guide-purificateur-air-2026')
    expect(articleSlugOf('/it/guides/airfryers')).toBeNull()
  })

  it('accepts clicks to amazon.it, where the Italian pages link', () => {
    const { marketplace, tag } = amazonMarket('it')
    expect(parseAffiliateClick({ ...valid, lang: 'it', store: marketplace, tag })).toMatchObject({ store: 'amazon.it', market: 'it' })
  })

  it('names each language version by its market: uk for English, se for Swedish', () => {
    const markets = LANGUAGES.map((lang) => parseAffiliateClick({ ...valid, lang })?.market)
    expect(markets).toEqual(['fr', 'uk', 'de', 'es', 'it', 'nl', 'pl', 'se', 'us', 'ca'])
    expect([...CLICK_MARKETS].sort()).toEqual([...markets].sort())
  })

  it('accepts the percent-encoded paths browsers report', () => {
    expect(parseAffiliateClick({ ...valid, path: '/pl/blog/odkurzacz-my%C4%85cy' })?.path).toBe('/pl/blog/odkurzacz-my%C4%85cy')
    expect(parseAffiliateClick({ ...valid, path: '/fr/' })?.path).toBe('/fr/')
  })

  it('trims the model name', () => {
    expect(parseAffiliateClick({ ...valid, model: '  Levoit Core 300S ' })?.model).toBe('Levoit Core 300S')
  })
})
