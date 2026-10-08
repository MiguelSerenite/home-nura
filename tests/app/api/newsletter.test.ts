import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { POST } from '@/app/api/newsletter/route'
import { __resetRateLimitForTests } from '@/lib/rate-limit'

function makeRequest(body: unknown, ip = '1.2.3.4'): Request {
  return new Request('http://localhost/api/newsletter', {
    method: 'POST',
    headers: { 'x-forwarded-for': ip, 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('POST /api/newsletter', () => {
  const fetchMock = vi.fn()

  beforeEach(() => {
    __resetRateLimitForTests()
    vi.spyOn(console, 'log').mockImplementation(() => {})
    vi.spyOn(console, 'error').mockImplementation(() => {})
    vi.stubGlobal('fetch', fetchMock)
    vi.stubEnv('BREVO_API_KEY', 'test-key')
    vi.stubEnv('BREVO_LIST_ID', '42')
    fetchMock.mockReset()
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('adds the contact to the Brevo list with its locale', async () => {
    fetchMock.mockResolvedValue(new Response(null, { status: 201 }))
    const res = await POST(makeRequest({ email: 'Jane@Example.com', lang: 'de' }))
    expect(res.status).toBe(200)
    const [url, init] = fetchMock.mock.calls[0]
    expect(url).toBe('https://api.brevo.com/v3/contacts')
    expect(init.headers['api-key']).toBe('test-key')
    expect(JSON.parse(init.body)).toEqual({
      email: 'jane@example.com',
      listIds: [42],
      updateEnabled: true,
      attributes: { LANG: 'de', SOURCE: 'homenura.com' },
    })
  })

  it('treats an already-subscribed address as success', async () => {
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ code: 'duplicate_parameter' }), { status: 400 }))
    const res = await POST(makeRequest({ email: 'jane@example.com', lang: 'fr' }))
    expect(res.status).toBe(200)
  })

  it('reports an error instead of pretending success when Brevo fails', async () => {
    fetchMock.mockResolvedValue(new Response('boom', { status: 500 }))
    const res = await POST(makeRequest({ email: 'jane@example.com', lang: 'fr' }))
    expect(res.status).toBe(502)
  })

  it('reports the service as unavailable when Brevo is not configured', async () => {
    vi.stubEnv('BREVO_API_KEY', '')
    const res = await POST(makeRequest({ email: 'jane@example.com', lang: 'fr' }))
    expect(res.status).toBe(503)
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('rejects an invalid address without calling Brevo', async () => {
    const res = await POST(makeRequest({ email: 'nope', lang: 'fr' }))
    expect(res.status).toBe(400)
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('accepts the honeypot silently without calling Brevo', async () => {
    const res = await POST(makeRequest({ email: 'bot@example.com', honeypot: 'x' }))
    expect(res.status).toBe(200)
    expect(fetchMock).not.toHaveBeenCalled()
  })
})
