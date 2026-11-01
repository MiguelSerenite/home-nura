import { describe, it, expect } from 'vitest'
import sitemap from '@/app/sitemap'
import { BLACK_FRIDAY_CATEGORIES, blackFridayLocales, blackFridayPath } from '@/lib/black-friday'
import { FLOOR_CARE_MARKETS, FLOOR_CARE_PATHS } from '@/lib/floor-care/config'
import { GIFT_GUIDES, giftGuidePath } from '@/lib/gift-guides'
import { LANGUAGES, switchLocale, type Lang } from '@/lib/i18n'
import { localeOfPath, parseSwitchNotice, switchLink, withoutSwitchParams } from '@/lib/locale-switch'
import { getMarketPages, marketPageHref } from '@/lib/market-pages/data'
import { sitePathsFor } from '@/lib/market-pages/site-paths'
import { arrivalLabelsFor, marketHubOf, marketHubsFor } from '@/lib/market-pages/switch'
import { BASE_URL } from '@/lib/seo'

describe('switchLocale: same page', () => {
  it('keeps the path when the page exists in the target version, with nothing to announce', () => {
    expect(switchLocale('/fr/guides/probleme/airfryer-ne-chauffe-plus', 'de')).toEqual({ path: '/de/guides/probleme/airfryer-ne-chauffe-plus', reason: null })
    expect(switchLocale('/en/comparateur', 'us')).toEqual({ path: '/us/comparateur', reason: null })
    expect(switchLocale('/it/blog/guide-robot-aspirateur-2026', 'sv')).toEqual({ path: '/sv/blog/guide-robot-aspirateur-2026', reason: null })
    expect(switchLocale('/fr/', 'pl')).toEqual({ path: '/pl', reason: null })
    expect(switchLocale('/us/guides/floor-care/vacuums', 'ca')).toEqual({ path: '/ca/guides/floor-care/vacuums', reason: null })
  })

  it('stays on a market page when the target is its own locale', () => {
    expect(switchLocale('/us/vs/ring-vs-blink', 'us', { marketHub: '/securite-maison/sonnettes-video' })).toEqual({ path: '/us/vs/ring-vs-blink', reason: null })
  })
})

describe('switchLocale: closest equivalent', () => {
  it("sends a market page to its main category hub in the target version", () => {
    expect(switchLocale('/us/vs/ring-vs-blink', 'fr', { marketHub: '/securite-maison/sonnettes-video' })).toEqual({ path: '/fr/securite-maison/sonnettes-video', reason: 'market' })
    expect(switchLocale('/it/guides/friggitrice-ad-aria-per-4-persone', 'de', { marketHub: '/guides/airfryers' })).toEqual({ path: '/de/guides/airfryers', reason: 'market' })
  })

  it('goes through the stand-in page when the hub itself is missing there (floor-care → cleaning hub)', () => {
    expect(switchLocale('/us/vs/some-duel', 'fr', { marketHub: '/guides/floor-care/vacuums' })).toEqual({ path: '/fr/entretien-maison', reason: 'market' })
    expect(switchLocale('/us/vs/some-duel', 'ca', { marketHub: '/guides/floor-care/vacuums' })).toEqual({ path: '/ca/guides/floor-care/vacuums', reason: 'market' })
  })

  it('sends a market page without a known hub to the target home, announced', () => {
    expect(switchLocale('/us/news/space-heater-recalls', 'de')).toEqual({ path: '/de', reason: 'home' })
    expect(switchLocale('/us/news/space-heater-recalls', 'de', { marketHub: null })).toEqual({ path: '/de', reason: 'home' })
    // A hub that is itself a market page is no hub.
    expect(switchLocale('/us/news/x', 'de', { marketHub: '/vs/another-duel' })).toEqual({ path: '/de', reason: 'home' })
  })

  it("sends a Black Friday category the market lacks to that market's Black Friday hub", () => {
    expect(switchLocale('/fr/black-friday/multicuiseurs', 'de')).toEqual({ path: '/de/black-friday', reason: 'black-friday' })
    expect(switchLocale('/nl/sinterklaas', 'fr')).toEqual({ path: '/fr/black-friday', reason: 'black-friday' })
    expect(switchLocale('/de/black-friday/deshumidificateurs', 'fr')).toEqual({ path: '/fr/black-friday/deshumidificateurs', reason: null })
  })

  it('sends the US/Canada floor-care guides to the cleaning hub elsewhere', () => {
    expect(switchLocale('/us/guides/floor-care/hard-floor-washers', 'it')).toEqual({ path: '/it/entretien-maison', reason: 'cleaning' })
    expect(switchLocale('/ca/guides/floor-care', 'en')).toEqual({ path: '/en/entretien-maison', reason: 'cleaning' })
  })

  it('has nothing to announce from a path without a locale (the entry page)', () => {
    expect(switchLocale('/', 'de')).toEqual({ path: '/de', reason: null })
    expect(switchLocale(null, 'us')).toEqual({ path: '/us', reason: null })
  })
})

describe('switchLink', () => {
  it('links the same page plainly', () => {
    expect(switchLink('/fr/guides/airfryers', 'us')).toEqual({ href: '/us/guides/airfryers', changesPage: false })
  })

  it('carries the reason and the version left when the page changes', () => {
    expect(switchLink('/us/vs/ring-vs-blink', 'de', { marketHub: '/securite-maison/sonnettes-video' })).toEqual({
      href: '/de/securite-maison/sonnettes-video?switched=market&from=us',
      changesPage: true,
    })
    expect(switchLink('/fr/black-friday/multicuiseurs', 'sv').href).toBe('/sv/black-friday?switched=black-friday&from=fr')
    expect(switchLink('/ca/guides/floor-care/vacuums', 'pl').href).toBe('/pl/entretien-maison?switched=cleaning&from=ca')
  })

  it('reads the locale of a path', () => {
    expect(localeOfPath('/us/vs/x')).toBe('us')
    expect(localeOfPath('/xx/blog')).toBeNull()
    expect(localeOfPath('/')).toBeNull()
  })
})

describe('arrival notice parameters', () => {
  it('parses the reason and the version left, refusing anything else', () => {
    expect(parseSwitchNotice('?switched=market&from=us')).toEqual({ reason: 'market', from: 'us' })
    expect(parseSwitchNotice('?switched=home')).toEqual({ reason: 'home', from: null })
    expect(parseSwitchNotice('?switched=black-friday&from=zz')).toEqual({ reason: 'black-friday', from: null })
    expect(parseSwitchNotice('?switched=<script>')).toBeNull()
    expect(parseSwitchNotice('?utm_source=x')).toBeNull()
    expect(parseSwitchNotice('')).toBeNull()
  })

  it('removes only the switch parameters from the address', () => {
    expect(withoutSwitchParams('/de/black-friday', '?switched=black-friday&from=fr')).toBe('/de/black-friday')
    expect(withoutSwitchParams('/de/black-friday', '?utm_source=x&switched=home&from=fr', '#top')).toBe('/de/black-friday?utm_source=x#top')
  })
})

describe('every switch lands on a page the target version serves', () => {
  // Indexed pages of every locale (sitemap), with their locale prefix.
  const PREFIX = new RegExp(`^${BASE_URL}`)
  const sitemapPaths = sitemap()
    .map((entry) => entry.url.replace(PREFIX, ''))
    .filter((path) => path !== '/')
  const served = (lang: Lang) => new Set([...sitePathsFor(lang), ...getMarketPages().filter((p) => p.locale === lang).map(marketPageHref)])
  const SERVED = Object.fromEntries(LANGUAGES.map((lang) => [lang, served(lang)])) as Record<Lang, Set<string>>
  const hubs = Object.assign({}, ...LANGUAGES.map((lang) => marketHubsFor(lang))) as Record<string, string>

  it('from every indexed page to every version: the same page, else an announced stand-in that exists', () => {
    const problems: string[] = []
    for (const path of sitemapPaths) {
      for (const target of LANGUAGES) {
        const { path: landed, reason } = switchLocale(path, target, { marketHub: hubs[path] })
        if (!SERVED[target].has(landed)) problems.push(`${path} → ${target}: ${landed} is not served`)
        const samePage = landed === `/${target}${path.replace(/^\/[a-z]{2}/, '')}`
        if (samePage !== (reason === null)) problems.push(`${path} → ${target}: ${landed} with reason ${reason}`)
      }
    }
    expect(problems).toEqual([])
  })

  it('sends every market page to its main hub in every other version', () => {
    for (const page of getMarketPages()) {
      const hub = marketHubOf(page)
      expect(hub, marketPageHref(page)).not.toBeNull()
      for (const target of LANGUAGES.filter((lang) => lang !== page.locale)) {
        const { reason } = switchLocale(marketPageHref(page), target, { marketHub: hub })
        expect(reason, `${marketPageHref(page)} → ${target}`).toBe('market')
      }
    }
  })

  it('names, in the target language, every hub a market page switch lands on', () => {
    for (const target of LANGUAGES) {
      const labels = arrivalLabelsFor(target)
      for (const page of getMarketPages().filter((p) => p.locale !== target)) {
        const { path } = switchLocale(marketPageHref(page), target, { marketHub: marketHubOf(page) })
        expect(labels[path.slice(`/${target}`.length)], `${marketPageHref(page)} → ${target}`).toBeTruthy()
      }
    }
  })

  it('covers the locale-limited pages of the sitemap', () => {
    // Floor-care, market-only Black Friday categories and gift guides exist: the mapping is exercised.
    expect(FLOOR_CARE_PATHS.length).toBeGreaterThan(0)
    expect(FLOOR_CARE_MARKETS).toEqual(['us', 'ca'])
    expect(BLACK_FRIDAY_CATEGORIES.some((c) => blackFridayLocales(c).length < LANGUAGES.length)).toBe(true)
    expect(sitemapPaths).toContain(`/${GIFT_GUIDES[0].lang}${giftGuidePath(GIFT_GUIDES[0])}`)
    expect(sitemapPaths).toContain(`/fr${blackFridayPath()}`)
  })
})
