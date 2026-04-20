import { describe, it, expect } from 'vitest'
import sitemap from '@/app/sitemap'
import { BASE_URL, SITE_LAST_UPDATED_ISO } from '@/lib/seo'

describe('app/sitemap.ts', () => {
  const entries = sitemap()
  const LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const

  it('returns at least one entry per core route', () => {
    // Crawl-budget strategy: 1 FR-canonical entry per page (not 6).
    // Core routes (home + 8+ content + blog articles) = 10+ entries.
    expect(entries.length).toBeGreaterThan(10)
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
      expect(Object.keys(langs).sort()).toEqual([...LANGS, 'x-default'].sort())
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

  // Crawl-budget strategy: sitemap emits the FR canonical only.
  // Other locales are discovered via <link rel="alternate" hreflang>
  // already present in every page's <head> (buildPageMetadata).
  it('includes the home route as FR canonical', () => {
    const homeUrl = `${BASE_URL}/fr`
    const hit = entries.find((e) => e.url === homeUrl)
    expect(hit, 'missing FR home entry').toBeDefined()
    // Non-FR home URLs must NOT be direct sitemap entries
    for (const lang of LANGS.filter(l => l !== 'fr')) {
      const nonFrUrl = `${BASE_URL}/${lang}`
      expect(entries.find((e) => e.url === nonFrUrl), `${lang} home should not be a direct entry`).toBeUndefined()
    }
  })

  it('includes comparateur + quiz + blog as FR canonicals with hreflang for all locales', () => {
    for (const path of ['/comparateur', '/quiz', '/blog']) {
      const frUrl = `${BASE_URL}/fr${path}`
      const hit = entries.find((e) => e.url === frUrl)
      expect(hit, `missing FR entry for ${path}`).toBeDefined()
      // All 6 language alternates must be present in hreflang
      for (const lang of LANGS) {
        expect(hit?.alternates?.languages?.[lang], `missing hreflang ${lang} for ${path}`)
          .toBe(`${BASE_URL}/${lang}${path}`)
      }
    }
  })

  // Phase Z: methodology cornerstone — FR canonical + all hreflang.
  it('includes /methodologie as FR canonical with correct priority and hreflang', () => {
    const url = `${BASE_URL}/fr/methodologie`
    const hit = entries.find((e) => e.url === url)
    expect(hit, 'missing FR methodologie entry').toBeDefined()
    expect(hit?.priority).toBeGreaterThanOrEqual(0.85)
    for (const lang of LANGS) {
      expect(hit?.alternates?.languages?.[lang], `missing hreflang ${lang} for /methodologie`)
        .toBe(`${BASE_URL}/${lang}/methodologie`)
    }
  })

  it('assigns home the highest priority (1.0)', () => {
    const homeFr = entries.find((e) => e.url === `${BASE_URL}/fr`)
    expect(homeFr?.priority).toBe(1.0)
  })

  // Phase X: freshness gate — if someone drifts sitemap lastMod
  // more than ~180 days from the site-wide freshness anchor,
  // Google demotes the recrawl cadence. We want CI to scream
  // before that happens.
  it('no content route lists a lastModified older than 180 days', () => {
    const anchor = new Date(SITE_LAST_UPDATED_ISO).getTime()
    const maxAgeMs = 180 * 24 * 60 * 60 * 1000
    const contentRoutes = entries.filter((e) => !e.url.includes('/blog/'))
    for (const e of contentRoutes) {
      const lastMod = e.lastModified ? new Date(e.lastModified).getTime() : NaN
      expect(
        Number.isFinite(lastMod),
        `${e.url}: missing or unparseable lastModified`
      ).toBe(true)
      expect(
        anchor - lastMod,
        `${e.url}: lastModified stale (> 180 days before SITE_LAST_UPDATED_ISO)`
      ).toBeLessThan(maxAgeMs)
    }
  })

  // Freshness gate for blog: each article should not be in the
  // future, and dateModified stamped into the sitemap must be
  // within the site anchor's window.
  it('blog article entries are not future-dated', () => {
    const anchorMs = new Date(SITE_LAST_UPDATED_ISO).getTime()
    const graceMs = 2 * 24 * 60 * 60 * 1000
    const blogEntries = entries.filter((e) => e.url.includes('/blog/'))
    for (const e of blogEntries) {
      const lastMod = e.lastModified ? new Date(e.lastModified).getTime() : NaN
      expect(lastMod, `${e.url}: unparseable lastModified`).not.toBeNaN()
      expect(lastMod, `${e.url}: lastModified is in the future`).toBeLessThanOrEqual(
        anchorMs + graceMs
      )
    }
  })

  it('every entry has a lastModified populated', () => {
    for (const e of entries) {
      expect(e.lastModified, `${e.url}: missing lastModified`).toBeDefined()
    }
  })
})
