import { describe, it, expect, beforeEach, vi } from 'vitest'
import { POST, GET } from '@/app/api/click/route'
import { __resetRateLimitForTests } from '@/lib/rate-limit'
import { articleSlugOf, CLICK_SURFACES, marketplaceOf, parseAffiliateClick } from '@/lib/affiliate-click'

function makeRequest(body: unknown, ip = '1.2.3.4'): Request {
  return new Request('http://localhost/api/click', {
    method: 'POST',
    headers: { 'x-forwarded-for': ip, 'content-type': 'text/plain' },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })
}

const valid = {
  path: '/de/blog/test-moulinex-easy-fry-max',
  lang: 'de',
  surface: 'inline',
  model: 'Moulinex Easy Fry Max 5L',
  marketplace: 'amazon.fr',
}

describe('POST /api/click', () => {
  beforeEach(() => {
    __resetRateLimitForTests()
    vi.restoreAllMocks()
    vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  it('logs one JSON line per valid click and returns 204', async () => {
    const res = await POST(makeRequest(valid))
    expect(res.status).toBe(204)
    expect(console.log).toHaveBeenCalledOnce()
    const line = JSON.parse(vi.mocked(console.log).mock.calls[0][0] as string)
    expect(line).toMatchObject({
      event: 'affiliate_click',
      path: valid.path,
      articleSlug: 'test-moulinex-easy-fry-max',
      lang: 'de',
      surface: 'inline',
      model: 'Moulinex Easy Fry Max 5L',
      marketplace: 'amazon.fr',
    })
    expect(line).not.toHaveProperty('ip')
  })

  it('accepts every surface and logs no article slug outside the blog', async () => {
    for (const surface of CLICK_SURFACES) {
      const res = await POST(makeRequest({ ...valid, surface, path: '/fr/guides/robots-aspirateurs' }, `ip-${surface}`))
      expect(res.status, surface).toBe(204)
    }
    const line = JSON.parse(vi.mocked(console.log).mock.calls[0][0] as string)
    expect(line.articleSlug).toBeNull()
  })

  it.each([
    ['problem_picks', '/de/guides/probleme/friteuse-ne-chauffe-plus'],
    ['black_friday', '/it/black-friday/airfryers'],
  ])('logs %s clicks from troubleshooting and Black Friday pages', async (surface, path) => {
    const res = await POST(makeRequest({ ...valid, surface, path }))
    expect(res.status).toBe(204)
    const line = JSON.parse(vi.mocked(console.log).mock.calls[0][0] as string)
    expect(line).toMatchObject({ surface, path, articleSlug: null })
  })

  it.each([
    ['unknown surface', { ...valid, surface: 'popup' }],
    ['unknown locale', { ...valid, lang: 'pt' }],
    ['unknown store', { ...valid, marketplace: 'evil.example' }],
    ['store the site never links to', { ...valid, marketplace: 'amazon.de' }],
    ['absolute URL as path', { ...valid, path: 'https://evil.example/' }],
    ['path with spaces', { ...valid, path: '/fr/blog/a b' }],
    ['path too long', { ...valid, path: '/fr/' + 'x'.repeat(600) }],
    ['empty model', { ...valid, model: '   ' }],
    ['model too long', { ...valid, model: 'x'.repeat(161) }],
    ['model with control characters', { ...valid, model: 'Ninja\nfake log line' }],
    ['model not a string', { ...valid, model: 42 }],
    ['missing fields', { surface: 'inline' }],
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
    expect(marketplaceOf('https://www.amazon.fr/dp/B0CG6C26QW?tag=homavisede-21')).toBe('amazon.fr')
    expect(marketplaceOf('https://www.amazon.it/dp/B0CG6C26QW?tag=homaviseit-21')).toBe('amazon.it')
    expect(marketplaceOf('https://www.amazon.de/dp/B0CG6C26QW')).toBeNull()
    expect(marketplaceOf('https://example.com/dp/x')).toBeNull()
    expect(marketplaceOf('not a url')).toBeNull()
  })

  it('finds the article slug of a blog path', () => {
    expect(articleSlugOf('/it/blog/guide-purificateur-air-2026')).toBe('guide-purificateur-air-2026')
    expect(articleSlugOf('/it/guides/airfryers')).toBeNull()
  })

  it('accepts clicks to amazon.it, where the Italian pages link', () => {
    expect(parseAffiliateClick({ ...valid, lang: 'it', marketplace: 'amazon.it' })?.marketplace).toBe('amazon.it')
  })

  it('trims the model name', () => {
    expect(parseAffiliateClick({ ...valid, model: '  Levoit Core 300S ' })?.model).toBe('Levoit Core 300S')
  })
})
