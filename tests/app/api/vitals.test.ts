import { describe, it, expect, beforeEach, vi } from 'vitest'
import { POST, GET } from '@/app/api/vitals/route'
import { __resetRateLimitForTests } from '@/lib/rate-limit'

function makeRequest(body: unknown, ip: string = '1.2.3.4'): Request {
  return new Request('http://localhost/api/vitals', {
    method: 'POST',
    headers: { 'x-forwarded-for': ip, 'content-type': 'text/plain' },
    body: body === null ? undefined : typeof body === 'string' ? body : JSON.stringify(body),
  })
}

const validPayload = {
  name: 'LCP',
  value: 1234.56,
  id: 'v3-1234567890',
  rating: 'good' as const,
  lang: 'fr',
  path: '/fr/guides/airfryers',
}

describe('POST /api/vitals', () => {
  beforeEach(() => {
    __resetRateLimitForTests()
    vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  it('accepts a valid Web Vitals payload and returns 204', async () => {
    const res = await POST(makeRequest(validPayload))
    expect(res.status).toBe(204)
    expect(console.log).toHaveBeenCalledWith(
      '[vitals]',
      expect.objectContaining({
        metric: 'LCP',
        value: 1234.56,
        rating: 'good',
        lang: 'fr',
        path: '/fr/guides/airfryers',
      })
    )
  })

  it('accepts every canonical Web Vitals metric name', async () => {
    for (const name of ['LCP', 'FID', 'CLS', 'FCP', 'TTFB', 'INP']) {
      const res = await POST(makeRequest({ ...validPayload, name }, `ip-${name}`))
      expect(res.status, `metric ${name}`).toBe(204)
    }
  })

  it('accepts every supported locale', async () => {
    for (const lang of ['fr', 'en', 'de', 'es', 'it', 'nl']) {
      const res = await POST(makeRequest({ ...validPayload, lang }, `ip-${lang}`))
      expect(res.status, `lang ${lang}`).toBe(204)
    }
  })

  it('rounds the metric value to 2 decimal places in the log', async () => {
    await POST(makeRequest({ ...validPayload, value: 1234.5678 }))
    expect(console.log).toHaveBeenCalledWith(
      '[vitals]',
      expect.objectContaining({ value: 1234.57 })
    )
  })

  it('rejects invalid JSON with 400', async () => {
    const req = new Request('http://localhost/api/vitals', {
      method: 'POST',
      headers: { 'x-forwarded-for': '9.9.9.9' },
      body: '{not json',
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
    const body = (await res.json()) as { error: string }
    expect(body.error).toBe('invalid_json')
  })

  it('rejects unknown metric names with 400', async () => {
    const res = await POST(makeRequest({ ...validPayload, name: 'WTF' }))
    expect(res.status).toBe(400)
  })

  it('rejects unknown ratings with 400', async () => {
    const res = await POST(makeRequest({ ...validPayload, rating: 'awesome' }))
    expect(res.status).toBe(400)
  })

  it('rejects unknown locales with 400', async () => {
    const res = await POST(makeRequest({ ...validPayload, lang: 'ja' }))
    expect(res.status).toBe(400)
  })

  it('rejects negative metric values', async () => {
    const res = await POST(makeRequest({ ...validPayload, value: -5 }))
    expect(res.status).toBe(400)
  })

  it('rejects absurdly large metric values (> 5 min)', async () => {
    const res = await POST(makeRequest({ ...validPayload, value: 10 * 60 * 1000 }))
    expect(res.status).toBe(400)
  })

  it('rejects path longer than 512 chars', async () => {
    const res = await POST(makeRequest({ ...validPayload, path: '/fr/' + 'x'.repeat(600) }))
    expect(res.status).toBe(400)
  })

  it('rejects id longer than 64 chars', async () => {
    const res = await POST(makeRequest({ ...validPayload, id: 'x'.repeat(100) }))
    expect(res.status).toBe(400)
  })

  it('rejects missing required fields', async () => {
    const res = await POST(makeRequest({ name: 'LCP' }))
    expect(res.status).toBe(400)
  })

  it('rate-limits after 60 requests per minute per IP', async () => {
    for (let i = 0; i < 60; i++) {
      const res = await POST(makeRequest(validPayload, '7.7.7.7'))
      expect(res.status, `req ${i + 1}`).toBe(204)
    }
    const blocked = await POST(makeRequest(validPayload, '7.7.7.7'))
    expect(blocked.status).toBe(429)
    const body = (await blocked.json()) as { error: string }
    expect(body.error).toBe('rate_limited')
  })

  it('rate-limits per IP, not globally', async () => {
    for (let i = 0; i < 60; i++) {
      await POST(makeRequest(validPayload, '1.1.1.1'))
    }
    // Different IP should still be allowed
    const res = await POST(makeRequest(validPayload, '2.2.2.2'))
    expect(res.status).toBe(204)
  })
})

describe('GET /api/vitals', () => {
  it('returns 405 method not allowed', async () => {
    const res = await GET()
    expect(res.status).toBe(405)
    const body = (await res.json()) as { error: string }
    expect(body.error).toBe('method_not_allowed')
  })
})
