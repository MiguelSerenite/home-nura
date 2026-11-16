import { describe, it, expect } from 'vitest'
import robots from '@/app/robots'
import { BASE_URL } from '@/lib/seo'

describe('app/robots.ts', () => {
  const result = robots()
  const rules = Array.isArray(result.rules) ? result.rules : [result.rules]
  const wildcardRule = rules.find((r) => r.userAgent === '*')
  const wildcardDisallow = (
    Array.isArray(wildcardRule?.disallow)
      ? wildcardRule?.disallow
      : [wildcardRule?.disallow]
  ) as string[]

  it('ends with a catch-all wildcard rule', () => {
    expect(rules.length).toBeGreaterThanOrEqual(2)
    expect(rules[rules.length - 1].userAgent).toBe('*')
  })

  it('includes explicit rules for major AI crawlers', () => {
    const userAgents = rules.map((r) => r.userAgent)
    for (const bot of [
      'GPTBot',
      'ClaudeBot',
      'anthropic-ai',
      'Google-Extended',
      'PerplexityBot',
      'CCBot',
      'Amazonbot',
      // AI *search* agents — they fetch pages live to cite them in answers
      'OAI-SearchBot',
      'Claude-SearchBot',
      'Claude-User',
      'Perplexity-User',
      'bingbot',
    ]) {
      expect(userAgents, `missing explicit rule for ${bot}`).toContain(bot)
    }
  })

  it('every rule allows the root path', () => {
    for (const rule of rules) {
      expect(rule.allow).toBe('/')
    }
  })

  it('every rule disallows /api/ and /admin/', () => {
    for (const rule of rules) {
      const disallow = Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow]
      expect(disallow, `rule for ${rule.userAgent}`).toEqual(
        expect.arrayContaining(['/api/', '/admin/'])
      )
    }
  })

  it('no rule blocks /_next/ — crawlers need the CSS, JS, fonts and images to render pages', () => {
    // Search Console listed /_next/static/media/*.woff2 under "Blocked by
    // robots.txt" (2026-11-16). Google asks that render resources stay
    // crawlable; /_next/image also serves every optimised product photo.
    for (const rule of rules) {
      const disallow = Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow]
      for (const path of disallow as string[]) {
        expect('/_next/static/'.startsWith(path), `rule for ${rule.userAgent}: ${path}`).toBe(false)
        expect('/_next/image'.startsWith(path), `rule for ${rule.userAgent}: ${path}`).toBe(false)
      }
    }
  })

  it('wildcard rule disallows internal /api routes', () => {
    expect(wildcardDisallow).toContain('/api/')
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
    for (const rule of rules) {
      const disallow = Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow]
      const asString = disallow.join(' ')
      expect(asString).not.toMatch(/mentions-legales|politique-confidentialite|politique-cookies/)
    }
  })
})
