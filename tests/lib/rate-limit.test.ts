import { describe, it, expect, beforeEach } from 'vitest'
import { rateLimited, getClientIp, __resetRateLimitForTests } from '@/lib/rate-limit'

describe('rateLimited', () => {
  beforeEach(() => {
    __resetRateLimitForTests()
  })

  it('allows requests under the max', () => {
    const opts = { namespace: 'test', windowMs: 1000, max: 3 }
    expect(rateLimited('1.2.3.4', opts)).toBe(false)
    expect(rateLimited('1.2.3.4', opts)).toBe(false)
    expect(rateLimited('1.2.3.4', opts)).toBe(false)
  })

  it('blocks the request that exceeds the max', () => {
    const opts = { namespace: 'test', windowMs: 1000, max: 2 }
    expect(rateLimited('ip', opts)).toBe(false)
    expect(rateLimited('ip', opts)).toBe(false)
    expect(rateLimited('ip', opts)).toBe(true)
    expect(rateLimited('ip', opts)).toBe(true)
  })

  it('isolates buckets by key', () => {
    const opts = { namespace: 'test', windowMs: 1000, max: 1 }
    expect(rateLimited('ip-a', opts)).toBe(false)
    expect(rateLimited('ip-b', opts)).toBe(false)
    expect(rateLimited('ip-a', opts)).toBe(true)
    expect(rateLimited('ip-b', opts)).toBe(true)
  })

  it('isolates buckets by namespace', () => {
    const newsletter = { namespace: 'newsletter', windowMs: 1000, max: 1 }
    const vitals = { namespace: 'vitals', windowMs: 1000, max: 1 }
    expect(rateLimited('1.2.3.4', newsletter)).toBe(false)
    // Same IP, different namespace → not counted against each other
    expect(rateLimited('1.2.3.4', vitals)).toBe(false)
    expect(rateLimited('1.2.3.4', newsletter)).toBe(true)
    expect(rateLimited('1.2.3.4', vitals)).toBe(true)
  })

  it('resets after the window expires', async () => {
    const opts = { namespace: 'test', windowMs: 20, max: 1 }
    expect(rateLimited('ip', opts)).toBe(false)
    expect(rateLimited('ip', opts)).toBe(true)
    await new Promise((r) => setTimeout(r, 30))
    expect(rateLimited('ip', opts)).toBe(false)
  })
})

describe('getClientIp', () => {
  it('prefers the first x-forwarded-for entry', () => {
    const h = new Headers({ 'x-forwarded-for': '203.0.113.1, 10.0.0.1' })
    expect(getClientIp(h)).toBe('203.0.113.1')
  })

  it('falls back to x-real-ip when x-forwarded-for is absent', () => {
    const h = new Headers({ 'x-real-ip': '198.51.100.42' })
    expect(getClientIp(h)).toBe('198.51.100.42')
  })

  it('returns "unknown" when no IP header is present', () => {
    const h = new Headers()
    expect(getClientIp(h)).toBe('unknown')
  })

  it('trims whitespace from the forwarded entry', () => {
    const h = new Headers({ 'x-forwarded-for': '  192.0.2.1  ,10.0.0.1' })
    expect(getClientIp(h)).toBe('192.0.2.1')
  })
})
