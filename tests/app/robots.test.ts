import { describe, it, expect } from 'vitest'
import robots from '@/app/robots'
import { BASE_URL } from '@/lib/seo'

describe('app/robots.ts', () => {
  const result = robots()

  it('returns a single rule block for all crawlers', () => {
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules]
    expect(rules).toHaveLength(1)
    expect(rules[0].userAgent).toBe('*')
  })

  it('allows the root path', () => {
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules]
    expect(rules[0].allow).toBe('/')
  })

  it('disallows internal /api routes', () => {
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules]
    const disallow = rules[0].disallow
    const list = Array.isArray(disallow) ? disallow : [disallow]
    expect(list).toContain('/api/')
  })

  it('points to the sitemap on the canonical host', () => {
    expect(result.sitemap).toBe(`${BASE_URL}/sitemap.xml`)
  })

  it('declares the canonical host', () => {
    expect(result.host).toBe(BASE_URL)
  })

  it('does NOT disallow legal pages — they use meta-robots noindex', () => {
    // Disallowing in robots.txt would prevent Google from reading the
    // noindex directive. Must remain crawlable even though indexed: false.
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules]
    const disallow = rules[0].disallow
    const list = Array.isArray(disallow) ? disallow : [disallow]
    const asString = list.join(' ')
    expect(asString).not.toMatch(/mentions-legales|politique-confidentialite|politique-cookies/)
  })
})
