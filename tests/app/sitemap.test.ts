import { describe, it, expect } from 'vitest'
import sitemap from '@/app/sitemap'
import { BASE_URL } from '@/lib/seo'

describe('app/sitemap.ts', () => {
  const entries = sitemap()
  const LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const

  it('returns at least one entry per language × core route', () => {
    // 6 locales × (home + at least 8 content routes) = 54+ entries
    // Plus blog articles. Sanity floor.
    expect(entries.length).toBeGreaterThan(54)
  })

  it('every entry URL starts with the canonical host', () => {
    for (const e of entries) {
      expect(e.url.startsWith(BASE_URL)).toBe(true)
    }
  })

  it('every entry URL contains a language segment', () => {
    const pattern = new RegExp(`^${BASE_URL}/(${LANGS.join('|')})(/.*)?$`)
    for (const e of entries) {
      expect(e.url).toMatch(pattern)
    }
  })

  it('every entry ships hreflang alternates for all 6 locales', () => {
    for (const e of entries) {
      const langs = e.alternates?.languages ?? {}
      expect(Object.keys(langs).sort()).toEqual([...LANGS].sort())
    }
  })

  it('excludes legal pages (they are meta-robots noindex)', () => {
    const legalPaths = [
      '/mentions-legales',
      '/politique-confidentialite',
      '/politique-cookies',
    ]
    for (const legal of legalPaths) {
      const hit = entries.find((e) => e.url.endsWith(legal))
      expect(hit, `sitemap should not list ${legal}`).toBeUndefined()
    }
  })

  it('includes the home route for every locale', () => {
    for (const lang of LANGS) {
      const homeUrl = `${BASE_URL}/${lang}`
      const hit = entries.find((e) => e.url === homeUrl)
      expect(hit, `missing home entry for ${lang}`).toBeDefined()
    }
  })

  it('includes comparateur + quiz + blog for every locale', () => {
    for (const path of ['/comparateur', '/quiz', '/blog']) {
      for (const lang of LANGS) {
        const url = `${BASE_URL}/${lang}${path}`
        expect(entries.find((e) => e.url === url), `missing ${url}`).toBeDefined()
      }
    }
  })

  it('assigns home the highest priority (1.0)', () => {
    const homeFr = entries.find((e) => e.url === `${BASE_URL}/fr`)
    expect(homeFr?.priority).toBe(1.0)
  })
})
