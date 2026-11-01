import { describe, it, expect } from 'vitest'
import sitemap from '@/app/sitemap'
import { AUTHORS } from '@/lib/authors'
import { HTML_LANG, LANGUAGES } from '@/lib/i18n'
import { getMarketPages, loadMarketPages, marketPageHref, type SitePages } from '@/lib/market-pages/data'
import { marketPageBreadcrumbs, marketPageSchemas } from '@/lib/market-pages/schema'
import { sitePathsFor } from '@/lib/market-pages/site-paths'
import { BASE_URL } from '@/lib/seo'
import { rawDuel, rawNews } from './raw-pages'

const SITE: SitePages = (lang) => new Map([[`/${lang}/guides/airfryers`, 'Air fryers']])
const file = (raw: Record<string, unknown>) => ({ locale: String(raw.locale), slug: String(raw.slug), raw })

type Schema = Record<string, unknown> & { '@type': string }

describe('market page structured data', () => {
  const [duel, news] = loadMarketPages([file({ ...rawDuel('it', 'a1-contro-b2'), updated: '2026-10-30', published: '2026-10-02' }), file(rawNews('it', 'richiamo'))], SITE)

  it('ships an Article dated like the page, signed by the locale’s pen name', () => {
    const article = (marketPageSchemas(duel) as Schema[]).find((s) => s['@type'] === 'Article')!
    expect(article).toMatchObject({
      headline: duel.h1,
      datePublished: '2026-10-02',
      dateModified: '2026-10-30',
      inLanguage: 'it',
      author: { '@type': 'Person', name: AUTHORS.it.name, url: `${BASE_URL}/it/auteur` },
      mainEntityOfPage: { '@id': `${BASE_URL}/it/vs/a1-contro-b2` },
    })
  })

  it('lists the picks in an ItemList dated like the page, and only when there are picks', () => {
    const list = (marketPageSchemas(duel) as Schema[]).find((s) => s['@type'] === 'ItemList')!
    expect(list).toMatchObject({
      url: `${BASE_URL}/it/vs/a1-contro-b2`,
      numberOfItems: 2,
      dateModified: '2026-10-30',
      itemListElement: [
        { position: 1, name: 'Acme Fryer A1' },
        { position: 2, name: 'Acme Fryer B2 Dual' },
      ],
    })
    expect((marketPageSchemas(news) as Schema[]).map((s) => s['@type'])).toEqual(['BreadcrumbList', 'Article'])
  })

  it('breadcrumbs go home → the first related category hub → the page', () => {
    const [page] = getMarketPages().filter((p) => p.locale === 'us' && p.type === 'duel')
    if (page) {
      expect(marketPageBreadcrumbs(page)[0]).toEqual({ name: 'Home', path: '' })
      expect(marketPageBreadcrumbs(page).at(-1)).toEqual({ name: page.h1, path: page.path })
    }
    expect(marketPageBreadcrumbs(news)).toEqual([
      { name: 'Home', path: '' },
      { name: news.h1, path: news.path },
    ])
  })
})

describe('market pages in the sitemap', () => {
  const entries = sitemap()
  const sitemapUrls = new Set(entries.map((e) => e.url))
  const pages = getMarketPages()

  it('list each page once, under its own locale, hreflang naming itself only', () => {
    for (const page of pages) {
      const url = `${BASE_URL}${marketPageHref(page)}`
      const hits = entries.filter((e) => e.url === url)
      expect(hits, url).toHaveLength(1)
      expect(hits[0].alternates?.languages).toEqual({ [HTML_LANG[page.locale]]: url })
      expect(hits[0].lastModified).toEqual(new Date(page.updated))
      for (const lang of LANGUAGES.filter((l) => l !== page.locale)) {
        expect(sitemapUrls.has(`${BASE_URL}/${lang}${page.path}`), `${lang}${page.path}`).toBe(false)
      }
    }
  })

  it('related links may name exactly the sitemap’s other pages (lib/market-pages/site-paths.ts in step)', () => {
    const marketUrls = new Set(pages.map((page) => `${BASE_URL}${marketPageHref(page)}`))
    for (const lang of LANGUAGES) {
      const fromSitemap = entries
        .map((e) => e.url)
        .filter((url) => !marketUrls.has(url) && (url === `${BASE_URL}/${lang}` || url.startsWith(`${BASE_URL}/${lang}/`)))
        .map((url) => url.slice(BASE_URL.length))
        .sort()
      expect([...sitePathsFor(lang)].sort(), lang).toEqual(fromSitemap)
    }
  })
})
