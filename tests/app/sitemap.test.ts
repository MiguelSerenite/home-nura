import { HTML_LANG, LANGUAGES, type Lang } from '@/lib/i18n'
import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/blog'
import { describe, it, expect } from 'vitest'
import { GIFT_GUIDES, giftGuidePath } from '@/lib/gift-guides'
import sitemap from '@/app/sitemap'
import { BASE_URL, SITE_LAST_UPDATED_ISO } from '@/lib/seo'
import { PROBLEMS, categoryLocales, categoryPath, getCategory, getPartiallyIndexableCategories } from '@/lib/catalog'
import { ANSWER_FIRST_CATEGORIES, hubModifiedIso } from '@/lib/catalog/answer-first'
import { categoryModifiedIso } from '@/lib/catalog/category-faqs'
import { BLACK_FRIDAY_CATEGORIES, blackFridayLocales, blackFridayPath } from '@/lib/black-friday'
import { FLOOR_CARE_MARKETS, FLOOR_CARE_PATHS } from '@/lib/floor-care/config'
import { getMarketPages, marketPageHref } from '@/lib/market-pages/data'

/** hreflang URL of `lang` in a sitemap entry (alternates are keyed by language tag). */
const hreflang = (entry: MetadataRoute.Sitemap[number] | undefined, lang: Lang) =>
  (entry?.alternates?.languages as Record<string, string> | undefined)?.[HTML_LANG[lang]]

/** The US/Canada-only floor-care pages ('/us/guides/floor-care/vacuums'…). */
const isFloorCareUrl = (url: string) => FLOOR_CARE_PATHS.some((path) => FLOOR_CARE_MARKETS.some((m) => url === `${BASE_URL}/${m}${path}`))
/** Market pages: one locale each (tests/lib/market-pages/seo.test.ts). */
const MARKET_PAGE_URLS = new Set(getMarketPages().map((page) => `${BASE_URL}${marketPageHref(page)}`))

/** Black Friday pages of some markets only, the single-locale gift guides and the hubs of categories some markets index. */
const PARTIAL_PATHS = [
  ...BLACK_FRIDAY_CATEGORIES.filter((c) => blackFridayLocales(c).length < LANGUAGES.length).map((c) => blackFridayPath(c.slug)),
  ...GIFT_GUIDES.map(giftGuidePath),
  ...getPartiallyIndexableCategories().map(categoryPath),
]
const isPartialUrl = (url: string) => PARTIAL_PATHS.some((path) => LANGUAGES.some((lang) => url === `${BASE_URL}/${lang}${path}`))

describe('app/sitemap.ts', () => {
  const entries = sitemap()
  const LANGS = LANGUAGES
  const ENTRY = `${BASE_URL}/`
  // Pages that exist in every locale (blog articles: every translation).
  const everyLocale = entries.filter((e) => e.url !== ENTRY && !isFloorCareUrl(e.url) && !MARKET_PAGE_URLS.has(e.url))

  it('returns at least one entry per core route', () => {
    // One entry per page and per locale (home + content routes + blog).
    expect(entries.length).toBeGreaterThan(10)
  })

  it('every entry URL starts with the canonical host', () => {
    for (const e of entries) {
      expect(e.url.startsWith(BASE_URL)).toBe(true)
    }
  })

  it('every entry URL contains a language segment, but the entry page (/)', () => {
    const pattern = new RegExp(`^${BASE_URL}/(${LANGS.join('|')})(/.*)?$`)
    for (const e of entries.filter((entry) => entry.url !== ENTRY)) {
      expect(e.url).toMatch(pattern)
    }
  })

  it('lists the entry page (/) once, in the home cluster, as its x-default', () => {
    const entry = entries.filter((e) => e.url === ENTRY)
    expect(entry).toHaveLength(1)
    const homeAlternates = entries.find((e) => e.url === `${BASE_URL}/fr`)?.alternates?.languages
    expect(entry[0].alternates?.languages).toEqual(homeAlternates)
    for (const lang of LANGS) {
      const home = entries.find((e) => e.url === `${BASE_URL}/${lang}`)
      expect(home?.alternates?.languages?.['x-default'], lang).toBe(ENTRY)
      expect(hreflang(home, lang), lang).toBe(`${BASE_URL}/${lang}`)
    }
    // Every other page keeps the French version as x-default.
    expect(entries.find((e) => e.url === `${BASE_URL}/de/guides/airfryers`)?.alternates?.languages?.['x-default']).toBe(`${BASE_URL}/fr/guides/airfryers`)
  })

  it('every entry ships hreflang alternates for every locale', () => {
    for (const e of everyLocale.filter((entry) => !isPartialUrl(entry.url))) {
      const langs = e.alternates?.languages ?? {}
      expect(Object.keys(langs).sort()).toEqual([...LANGS.map((l) => HTML_LANG[l]), 'x-default'].sort())
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
    const shared = everyLocale.filter((e) => !isPartialUrl(e.url)).map((e) => e.url)
    const countFor = (lang: string) =>
      shared.filter((u) => u === `${BASE_URL}/${lang}` || u.startsWith(`${BASE_URL}/${lang}/`)).length
    for (const lang of LANGS) expect(countFor(lang), lang).toBe(countFor('fr'))
  })

  it('lists the floor-care hub and guides for the US and Canada only, paired en-US ↔ en-CA without x-default', () => {
    expect(FLOOR_CARE_PATHS).toEqual([
      '/guides/floor-care',
      '/guides/floor-care/vacuums',
      '/guides/floor-care/hard-floor-washers',
      '/guides/floor-care/carpet-upholstery-cleaners',
    ])
    for (const path of FLOOR_CARE_PATHS) {
      for (const lang of LANGS) {
        const hit = entries.find((e) => e.url === `${BASE_URL}/${lang}${path}`)
        expect(Boolean(hit), `${lang}${path}`).toBe(lang === 'us' || lang === 'ca')
        if (!hit) continue
        expect(hit.alternates?.languages, `${lang}${path}`).toEqual({
          'en-US': `${BASE_URL}/us${path}`,
          'en-CA': `${BASE_URL}/ca${path}`,
        })
      }
    }
    expect(entries.filter((e) => e.url.includes('/guides/floor-care'))).toHaveLength(FLOOR_CARE_PATHS.length * 2)
  })

  it('includes comparateur + quiz + blog in every locale with hreflang for all locales', () => {
    for (const path of ['/comparateur', '/quiz', '/blog']) {
      for (const entryLang of LANGS) {
        const hit = entries.find((e) => e.url === `${BASE_URL}/${entryLang}${path}`)
        expect(hit, `missing ${entryLang} entry for ${path}`).toBeDefined()
        for (const lang of LANGS) {
          expect(hreflang(hit, lang), `missing hreflang ${lang} for ${entryLang}${path}`)
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

  it('lists the Black Friday hub in every locale and each category page in the locales that have it, with hreflang', () => {
    const pages = [
      { path: blackFridayPath(), langs: LANGS },
      ...BLACK_FRIDAY_CATEGORIES.map((c) => ({ path: blackFridayPath(c.slug), langs: blackFridayLocales(c) })),
    ]
    expect(pages.some((p) => p.langs.length < LANGS.length)).toBe(true)
    for (const { path, langs } of pages) {
      for (const entryLang of LANGS) {
        const url = `${BASE_URL}/${entryLang}${path}`
        const hit = entries.find((e) => e.url === url)
        expect(Boolean(hit), url).toBe(langs.includes(entryLang))
        if (!hit) continue
        for (const lang of LANGS) {
          expect(hreflang(hit, lang), `${url} hreflang ${lang}`).toBe(langs.includes(lang) ? `${BASE_URL}/${lang}${path}` : undefined)
        }
        // x-default only with a French version, like the page's own hreflang tags.
        expect(hit.alternates?.languages?.['x-default'], url).toBe(langs.includes('fr') ? `${BASE_URL}/fr${path}` : undefined)
      }
    }
  })

  it('lists each gift guide once, in its own locale, without x-default', () => {
    for (const guide of GIFT_GUIDES) {
      const url = `${BASE_URL}/${guide.lang}${giftGuidePath(guide)}`
      expect(entries.filter((e) => e.url.endsWith(giftGuidePath(guide))).map((e) => e.url)).toEqual([url])
      expect(entries.find((e) => e.url === url)?.alternates?.languages).toEqual({ [HTML_LANG[guide.lang]]: url })
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
          expect(alternates.sort(), url).toEqual(LANGS.filter((l) => article.content[l]).map((l) => HTML_LANG[l]).sort())
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
      expect(hreflang(hit, lang), `missing hreflang ${lang} for /methodologie`)
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
    const blog = entries.find((e) => e.url === `${BASE_URL}/fr/blog`)
    expect(blog?.lastModified).toEqual(new Date(latest!))
  })

  it('lists the robot cooker hub in fr, de, es, it and pl only, hreflang among them, x-default French', () => {
    const robots = getCategory('robots-multifonctions')!
    expect(categoryLocales(robots)).toEqual(['fr', 'de', 'es', 'it', 'pl'])
    const path = categoryPath(robots)
    expect(path).toBe('/cuisine-connectee/robots-multifonctions')
    for (const lang of LANGS) {
      const hit = entries.find((e) => e.url === `${BASE_URL}/${lang}${path}`)
      const listed = categoryLocales(robots).includes(lang)
      expect(Boolean(hit), `${lang}${path}`).toBe(listed)
      if (!hit) continue
      expect(hit.alternates?.languages, `${lang}${path}`).toEqual({
        ...Object.fromEntries(categoryLocales(robots).map((l) => [HTML_LANG[l], `${BASE_URL}/${l}${path}`])),
        'x-default': `${BASE_URL}/fr${path}`,
      })
    }
  })

  it('dates each answer-first hub per locale with its changelog (US and Canada: 1 November 2026)', () => {
    for (const slug of ANSWER_FIRST_CATEGORIES) {
      const path = categoryPath(getCategory(slug)!)
      for (const lang of LANGS) {
        const hit = entries.find((e) => e.url === `${BASE_URL}/${lang}${path}`)
        expect(hit, `${lang}${path}`).toBeDefined()
        expect((hit?.lastModified as Date).toISOString().slice(0, 10), `${lang}${path}`).toBe(hubModifiedIso(slug, lang))
      }
      expect(hubModifiedIso(slug, 'us')).toBe('2026-11-01')
      expect(hubModifiedIso(slug, 'ca')).toBe('2026-11-01')
      expect(hubModifiedIso(slug, 'fr')).toBe(categoryModifiedIso(slug, SITE_LAST_UPDATED_ISO, 'fr'))
    }
  })
})
