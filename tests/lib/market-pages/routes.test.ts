import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { LANGUAGES, SHARED_GUIDE_SLUGS, isSingleLocalePath, switchLocalePath } from '@/lib/i18n'
import { MARKET_PAGE_SEGMENTS, MARKET_PAGE_TYPES, RESERVED_GUIDE_SLUGS } from '@/lib/market-pages/config'
import { getMarketPages, loadMarketPages, type SitePages } from '@/lib/market-pages/data'
import { marketPageMetadata, marketPageStaticParams, resolveMarketPage } from '@/lib/market-pages/routes'
import { BASE_URL } from '@/lib/seo'
import { rawDuel, rawGuide, rawNews } from './raw-pages'

const SITE: SitePages = (lang) => new Map([[`/${lang}/guides/airfryers`, 'Air fryers']])
const file = (raw: Record<string, unknown>) => ({ locale: String(raw.locale), slug: String(raw.slug), raw })
const pages = loadMarketPages([file(rawGuide('it', 'friggitrici')), file(rawDuel('us', 'a1-vs-b2')), file(rawNews('de', 'rueckruf'))], SITE)

const ROUTE_FILES = MARKET_PAGE_TYPES.map((type) => `app/[lang]/${MARKET_PAGE_SEGMENTS[type]}/[slug]/page.tsx`)

describe('market page routes', () => {
  it('live at /{lang}/vs/{slug}, /{lang}/guides/{slug} and /{lang}/news/{slug}', () => {
    expect(MARKET_PAGE_SEGMENTS).toEqual({ duel: 'vs', guide: 'guides', news: 'news' })
    expect(pages.map((page) => `/${page.locale}${page.path}`)).toEqual(['/it/guides/friggitrici', '/us/vs/a1-vs-b2', '/de/news/rueckruf'])
  })

  it('prerender each page under the locale that owns it only', () => {
    expect(marketPageStaticParams('guide', pages)).toEqual([{ lang: 'it', slug: 'friggitrici' }])
    expect(marketPageStaticParams('duel', pages)).toEqual([{ lang: 'us', slug: 'a1-vs-b2' }])
    expect(marketPageStaticParams('news', pages)).toEqual([{ lang: 'de', slug: 'rueckruf' }])
    expect(marketPageStaticParams('news', [])).toEqual([])
  })

  it('resolve no page in any other locale, type or slug (404)', () => {
    for (const lang of LANGUAGES) {
      expect(resolveMarketPage(lang, 'guide', 'friggitrici', pages) !== null, lang).toBe(lang === 'it')
      expect(resolveMarketPage(lang, 'duel', 'a1-vs-b2', pages) !== null, lang).toBe(lang === 'us')
    }
    expect(resolveMarketPage('it', 'duel', 'friggitrici', pages)).toBeNull()
    expect(resolveMarketPage('it', 'guide', 'other', pages)).toBeNull()
  })

  it('refuse unlisted params at request time and 404 otherwise', () => {
    for (const route of ROUTE_FILES) {
      const source = readFileSync(join(process.cwd(), route), 'utf8')
      expect(source, route).toMatch(/export const dynamicParams = false/)
      expect(source, route).toMatch(/export const generateStaticParams = route\.generateStaticParams/)
    }
    const shared = readFileSync(join(process.cwd(), 'app/[lang]/market-page-route.tsx'), 'utf8')
    expect(shared).toMatch(/if \(!page\) notFound\(\)/)
  })

  it('leave the static guide folders their URLs (no slug collision)', () => {
    const folders = readdirSync(join(process.cwd(), 'app/[lang]/guides')).filter((name) => name !== '[slug]').sort()
    expect(folders).toEqual([...SHARED_GUIDE_SLUGS].sort())
    expect(RESERVED_GUIDE_SLUGS).toEqual(SHARED_GUIDE_SLUGS)
    for (const page of getMarketPages()) {
      if (page.type === 'guide') expect(SHARED_GUIDE_SLUGS as readonly string[]).not.toContain(page.slug)
    }
  })

  it('name the page itself only in hreflang, without x-default, canonical on the page', () => {
    for (const page of pages) {
      const meta = marketPageMetadata(page)
      const url = `${BASE_URL}/${page.locale}${page.path}`
      expect(meta.alternates?.canonical).toBe(url)
      expect(Object.values(meta.alternates?.languages ?? {})).toEqual([url])
      expect(Object.keys(meta.alternates?.languages ?? {})).not.toContain('x-default')
      expect(meta.robots).toMatchObject({ index: true })
      expect(meta.openGraph).toMatchObject({ type: 'article', modifiedTime: `${page.updated}T00:00:00Z` })
    }
    expect(Object.keys(marketPageMetadata(pages[1]).alternates?.languages ?? {})).toEqual(['en-US'])
    // A French market page has no x-default either: it is no fallback for other readers.
    const fr = loadMarketPages([file(rawGuide('fr', 'airfryer-famille'))], SITE)[0]
    expect(Object.keys(marketPageMetadata(fr).alternates?.languages ?? {})).toEqual(['fr'])
  })

  it('send the language switcher of a market page to the other locale’s home', () => {
    expect(switchLocalePath('/it/guides/friggitrici', 'de')).toBe('/de')
    expect(switchLocalePath('/us/vs/a1-vs-b2', 'ca')).toBe('/ca')
    expect(switchLocalePath('/de/news/rueckruf', 'fr')).toBe('/fr')
    expect(switchLocalePath('/us/vs/a1-vs-b2', 'us')).toBe('/us/vs/a1-vs-b2')
    // Shared guides keep their path in every locale.
    expect(switchLocalePath('/it/guides/airfryers', 'de')).toBe('/de/guides/airfryers')
    expect(switchLocalePath('/fr/guides/probleme/airfryer-ne-chauffe-plus', 'it')).toBe('/it/guides/probleme/airfryer-ne-chauffe-plus')
    expect(isSingleLocalePath('/guides/acheteur/famille')).toBe(false)
    expect(isSingleLocalePath('/vs')).toBe(false)
  })
})
