import { getAllArticles } from '@/lib/blog'
import { describe, it, expect } from 'vitest'
import sitemap from '@/app/sitemap'
import { BASE_URL, SITE_LAST_UPDATED_ISO } from '@/lib/seo'
import { PROBLEMS } from '@/lib/catalog'
import { BLACK_FRIDAY_PATHS } from '@/lib/black-friday'

describe('app/sitemap.ts', () => {
  const entries = sitemap()
  const LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const

  it('returns at least one entry per core route', () => {
    // One entry per page and per locale (home + content routes + blog).
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

  // Every locale is listed, not only the FR one: non-FR pages used to be
  // discoverable only through hreflang and were crawled far less.
  it('lists the home page in every locale', () => {
    for (const lang of LANGS) {
      expect(entries.find((e) => e.url === `${BASE_URL}/${lang}`), `missing ${lang} home`).toBeDefined()
    }
  })

  it('lists every page once per locale, with no duplicate URL', () => {
    const urls = entries.map((e) => e.url)
    expect(new Set(urls).size).toBe(urls.length)
    const countFor = (lang: string) =>
      urls.filter((u) => u === `${BASE_URL}/${lang}` || u.startsWith(`${BASE_URL}/${lang}/`)).length
    for (const lang of LANGS) expect(countFor(lang), lang).toBe(countFor('fr'))
  })

  it('includes comparateur + quiz + blog in every locale with hreflang for all locales', () => {
    for (const path of ['/comparateur', '/quiz', '/blog']) {
      for (const entryLang of LANGS) {
        const hit = entries.find((e) => e.url === `${BASE_URL}/${entryLang}${path}`)
        expect(hit, `missing ${entryLang} entry for ${path}`).toBeDefined()
        for (const lang of LANGS) {
          expect(hit?.alternates?.languages?.[lang], `missing hreflang ${lang} for ${entryLang}${path}`)
            .toBe(`${BASE_URL}/${lang}${path}`)
        }
      }
    }
  })

  it('lists the troubleshooting index and every problem page in every locale', () => {
    for (const lang of LANGS) {
      expect(entries.find((e) => e.url === `${BASE_URL}/${lang}/guides/probleme`), lang).toBeDefined()
      for (const problem of PROBLEMS) {
        const url = `${BASE_URL}/${lang}/guides/probleme/${problem.slug}`
        expect(entries.find((e) => e.url === url), url).toBeDefined()
      }
    }
  })

  it('lists the Black Friday hub and every category page in every locale, with hreflang', () => {
    expect(BLACK_FRIDAY_PATHS.length).toBeGreaterThan(1)
    for (const path of BLACK_FRIDAY_PATHS) {
      for (const entryLang of LANGS) {
        const url = `${BASE_URL}/${entryLang}${path}`
        const hit = entries.find((e) => e.url === url)
        expect(hit, url).toBeDefined()
        for (const lang of LANGS) {
          expect(hit?.alternates?.languages?.[lang], `${url} hreflang ${lang}`).toBe(`${BASE_URL}/${lang}${path}`)
        }
        expect(hit?.alternates?.languages?.['x-default'], url).toBe(`${BASE_URL}/fr${path}`)
      }
    }
  })

  it('keeps noindexed templates (persona guides, best-for pages) out', () => {
    expect(entries.filter((e) => e.url.includes('/guides/acheteur/'))).toEqual([])
    expect(entries.filter((e) => e.url.includes('/meilleur-pour/'))).toEqual([])
  })

  it('lists a blog article only in the locales it is translated into', () => {
    for (const article of getAllArticles()) {
      for (const lang of LANGS) {
        const url = `${BASE_URL}/${lang}/blog/${article.slug}`
        const hit = entries.find((e) => e.url === url)
        expect(Boolean(hit), url).toBe(Boolean(article.content[lang]))
        if (hit) {
          const alternates = Object.keys(hit.alternates?.languages ?? {}).filter((l) => l !== 'x-default')
          expect(alternates.sort(), url).toEqual(LANGS.filter((l) => article.content[l]).sort())
        }
      }
    }
  })

  it('never lists the dead /cuisine-connectee/airfryers hub', () => {
    expect(entries.filter((e) => e.url.endsWith('/cuisine-connectee/airfryers'))).toEqual([])
  })

  // Phase Z: methodology cornerstone — every locale + all hreflang.
  it('includes /methodologie with correct priority and hreflang', () => {
    const hit = entries.find((e) => e.url === `${BASE_URL}/de/methodologie`)
    expect(hit, 'missing DE methodologie entry').toBeDefined()
    expect(hit?.priority).toBeGreaterThanOrEqual(0.85)
    for (const lang of LANGS) {
      expect(hit?.alternates?.languages?.[lang], `missing hreflang ${lang} for /methodologie`)
        .toBe(`${BASE_URL}/${lang}/methodologie`)
    }
  })

  it('assigns home the highest priority (1.0) in every locale', () => {
    for (const lang of LANGS) {
      expect(entries.find((e) => e.url === `${BASE_URL}/${lang}`)?.priority, lang).toBe(1.0)
    }
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

  it('dates /blog with the most recent article modification', () => {
    const latest = getAllArticles()
      .map((a) => a.dateModified)
      .sort()
      .at(-1)
    const blog = sitemap().find((e) => e.url === `${BASE_URL}/fr/blog`)
    expect(blog?.lastModified).toEqual(new Date(latest!))
  })
})
