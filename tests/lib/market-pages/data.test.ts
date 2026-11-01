import { describe, it, expect, afterEach, vi } from 'vitest'
import { getMarketPages, loadMarketPages, marketPagesLinkingTo, relatedLinks, type SitePages } from '@/lib/market-pages/data'
import { MARKET_PAGE_FILES } from '@/lib/market-pages/registry'
import { sitePagesFor } from '@/lib/market-pages/site-paths'
import type { Lang } from '@/lib/i18n'
import { pageFilesOnDisk, registrySource } from '@/scripts/market-pages/sync-registry'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { rawDuel, rawGuide } from './raw-pages'

/** A site of three English pages: two content pages and a utility page. */
const SITE: SitePages = (lang: Lang) =>
  new Map<string, string | null>([
    [`/${lang}/guides/airfryers`, 'Air fryers'],
    [`/${lang}/cuisine-connectee/multicuiseurs`, 'Multicookers'],
    [`/${lang}/methodologie`, null],
  ])

const file = (raw: Record<string, unknown>) => ({ locale: String(raw.locale), slug: String(raw.slug), raw })

describe('market page files', () => {
  it('are all listed in lib/market-pages/registry.ts (run scripts/market-pages/sync-registry.ts)', () => {
    const onDisk = pageFilesOnDisk()
    expect(MARKET_PAGE_FILES.map(({ locale, slug }) => ({ locale, slug }))).toEqual(onDisk)
    expect(readFileSync(join(process.cwd(), 'lib', 'market-pages', 'registry.ts'), 'utf8')).toBe(registrySource(onDisk))
  })

  it('all validate, related links included', () => {
    expect(getMarketPages().length).toBe(MARKET_PAGE_FILES.length)
  })
})

describe('loadMarketPages', () => {
  afterEach(() => vi.unstubAllEnvs())

  it('reports every broken file at once', () => {
    const badTitle = rawGuide('en', 'one')
    badTitle.metaTitle = 'Short'
    const badDuel = rawDuel('en', 'two')
    ;(badDuel.picks as unknown[]).pop()
    expect(() => loadMarketPages([file(badTitle), file(badDuel)], SITE)).toThrow(
      /data\/market-pages\/en\/one\.json: metaTitle: 5 characters[\s\S]*\ndata\/market-pages\/en\/two\.json: picks: a duel has 2 picks, got 1/,
    )
  })

  it('wants related links to reach a content page of the same locale', () => {
    const page = rawGuide('en', 'one')
    page.related = ['/en/cuisine-connectee/airfryers']
    expect(() => loadMarketPages([file(page)], SITE)).toThrow(
      'data/market-pages/en/one.json: related[0]: /en/cuisine-connectee/airfryers is not an indexed page of /en (did you mean /en/guides/airfryers?)',
    )
    page.related = ['/en/methodologie']
    expect(() => loadMarketPages([file(page)], SITE)).toThrow(/related\[0\]: \/en\/methodologie is a utility page/)
    page.related = ['/en/guides/one']
    expect(() => loadMarketPages([file(page)], SITE)).toThrow(/related\[0\]: links the page itself/)
  })

  it('lets market pages of a locale link each other, and suggests the right section', () => {
    const guide = rawGuide('en', 'one')
    const duel = rawDuel('en', 'two')
    guide.related = ['/en/vs/two']
    duel.related = ['/en/guides/airfryers', '/en/guides/one']
    const pages = loadMarketPages([file(guide), file(duel)], SITE)
    expect(relatedLinks(pages[1], pages, SITE)).toEqual([
      { href: '/en/guides/airfryers', label: 'Air fryers' },
      { href: '/en/guides/one', label: guide.h1 },
    ])
    guide.related = ['/en/guides/two']
    expect(() => loadMarketPages([file(guide), file(duel)], SITE)).toThrow(/\/en\/guides\/two is not an indexed page of \/en \(did you mean \/en\/vs\/two\?\)/)
  })

  it('refuses placeholder pages in a production build', () => {
    const fixture = { ...rawGuide('en', 'one'), _fixture: 'placeholder' }
    expect(loadMarketPages([file(fixture)], SITE)[0].isFixture).toBe(true)
    vi.stubEnv('VERCEL_ENV', 'production')
    expect(() => loadMarketPages([file(fixture)], SITE)).toThrow(/placeholder pages in a production build: data\/market-pages\/en\/one\.json/)
  })

  it('lists the pages that name a hub, newest first', () => {
    const older = { ...rawGuide('en', 'older'), updated: '2026-10-01' }
    const newer = rawDuel('en', 'newer')
    const elsewhere = { ...rawGuide('it', 'altro'), related: ['/it/guides/airfryers'] }
    const pages = loadMarketPages([file(older), file(newer), file(elsewhere)], SITE)
    expect(marketPagesLinkingTo('en', '/guides/airfryers', pages).map((p) => p.slug)).toEqual(['newer', 'older'])
    expect(marketPagesLinkingTo('en', '/cuisine-connectee/multicuiseurs', pages)).toEqual([])
    expect(marketPagesLinkingTo('it', '/guides/airfryers', pages).map((p) => p.slug)).toEqual(['altro'])
  })
})

describe('site pages a related link may name', () => {
  it('label content pages and leave utility pages unlabelled', () => {
    const it_ = sitePagesFor('it')
    expect(it_.get('/it/guides/airfryers')).toBe('Friggitrici ad Aria')
    expect(it_.get('/it/methodologie')).toBe('Come confrontiamo')
    expect(it_.get('/it/quiz')).toBeNull()
    expect(it_.has('/it/guides/floor-care')).toBe(false)
    expect(sitePagesFor('us').get('/us/guides/floor-care/vacuums')).toBe('Vacuums')
    expect(it_.has('/it/cuisine-connectee/airfryers')).toBe(false)
  })
})
