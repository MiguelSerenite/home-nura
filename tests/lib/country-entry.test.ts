import { describe, it, expect } from 'vitest'
import { browserVersions, entryChoices, isCrawlerUserAgent, VERSION_ORDER } from '@/lib/country-entry/choices'
import { ENTRY_COPY, entryCopy } from '@/lib/country-entry/copy'
import { ENTRY_URL, entryAlternates, entryPageMetadata } from '@/lib/country-entry/metadata'
import { HTML_LANG, LANGUAGES, MARKET_VERSIONS } from '@/lib/i18n'
import { BASE_URL } from '@/lib/seo'

const CHROME = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
const HEADLESS = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/130.0.0.0 Safari/537.36'
const visitor = (country: string | null, acceptLanguage: string | null = null) => entryChoices({ country, acceptLanguage, userAgent: CHROME })

describe('entry page order: the IP country first', () => {
  it("proposes every version the country reads, COUNTRY_LANGS order, then the others", () => {
    const cases: Record<string, string[]> = {
      FR: ['fr'],
      BE: ['fr', 'nl'],
      CH: ['de', 'fr', 'it'],
      CA: ['ca', 'fr'],
      LU: ['fr', 'de'],
      AT: ['de'],
      US: ['us'],
      PR: ['us', 'es'],
      IE: ['en'],
      AU: ['en'],
      NZ: ['en'],
      GB: ['en'],
      SE: ['sv'],
      PL: ['pl'],
    }
    for (const [country, expected] of Object.entries(cases)) {
      const choices = visitor(country, 'ja-JP')
      expect(choices.basis, country).toBe('country')
      expect(choices.suggested, country).toEqual(expected)
      expect(choices.others, country).toEqual(VERSION_ORDER.filter((lang) => !expected.includes(lang)))
      expect(choices.copyLang, country).toBe(expected[0])
    }
  })

  it('accepts a lowercase country code', () => {
    expect(visitor('be').suggested).toEqual(['fr', 'nl'])
  })
})

describe('entry page order: any other country', () => {
  it("follows the browser's languages, nothing preselected", () => {
    const choices = visitor('JP', 'ja-JP,en-US;q=0.8,de;q=0.5')
    expect(choices).toEqual({ basis: 'browser', suggested: [], others: ['en', 'de', ...VERSION_ORDER.filter((l) => l !== 'en' && l !== 'de')], copyLang: 'en' })
    // An en-US browser in Brazil reads the international English version.
    expect(visitor('BR', 'pt-BR,en-US;q=0.7').others[0]).toBe('en')
    // Without any country the browser's region stands.
    expect(visitor(null, 'en-CA,fr-CA;q=0.8').others.slice(0, 2)).toEqual(['ca', 'fr'])
  })

  it('shows the plain list when the browser names no language we serve', () => {
    expect(visitor('JP', 'ja-JP,zh;q=0.8')).toEqual({ basis: 'none', suggested: [], others: [...VERSION_ORDER], copyLang: null })
    expect(visitor(null, null).basis).toBe('none')
  })

  it('ranks by q, keeps header order on ties, refuses q=0, never takes Catalan for Canada', () => {
    expect(browserVersions('de;q=0.5,it;q=0.9,es;q=0.9')).toEqual(['it', 'es', 'de'])
    expect(browserVersions('fr;q=0,de')).toEqual(['de'])
    expect(browserVersions('ca-ES,ca;q=0.9,es;q=0.8')).toEqual(['es'])
    expect(browserVersions('*,en-GB;q=0.5')).toEqual(['en'])
    expect(browserVersions('sv-SE,sv;q=0.9,en;q=0.8')).toEqual(['sv', 'en'])
  })
})

describe('crawlers', () => {
  it('get the plain list in English whatever their IP country', () => {
    const googlebot = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    expect(entryChoices({ country: 'US', acceptLanguage: 'en-US', userAgent: googlebot })).toEqual({ basis: 'none', suggested: [], others: [...VERSION_ORDER], copyLang: null })
  })

  it('are told apart from visitors by their user agent', () => {
    for (const ua of [
      'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15 (Applebot/0.1)',
      'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
      'Mozilla/5.0 (compatible; YandexBot/3.0)',
      'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)',
      '',
      null,
    ]) {
      expect(isCrawlerUserAgent(ua), String(ua)).toBe(true)
    }
    expect(isCrawlerUserAgent(CHROME)).toBe(false)
    expect(isCrawlerUserAgent(HEADLESS)).toBe(false)
    expect(isCrawlerUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1')).toBe(false)
  })
})

describe('entry page copy and metadata', () => {
  it('has its copy in all ten languages, within search result lengths', () => {
    for (const lang of LANGUAGES) {
      const copy = ENTRY_COPY[lang]
      for (const [key, value] of Object.entries(copy)) expect(value.trim(), `${lang}.${key}`).not.toBe('')
      expect(copy.metaTitle.length, lang).toBeLessThanOrEqual(60)
      expect(copy.metaDescription.length, lang).toBeLessThanOrEqual(155)
      expect(copy.metaTitle, lang).toMatch(/^Home Nura \| /)
    }
    expect(entryCopy(null)).toBe(ENTRY_COPY.en)
  })

  it('names every version by its Home Nura edition, never the tracking-ID prefix', () => {
    expect(MARKET_VERSIONS.map((v) => v.edition)).toEqual([
      'Home Nura France', 'Home Nura Deutschland', 'Home Nura UK', 'Home Nura España', 'Home Nura Italia',
      'Home Nura Nederland', 'Home Nura Polska', 'Home Nura Sverige', 'Home Nura US', 'Home Nura Canada',
    ])
    expect(JSON.stringify([MARKET_VERSIONS, ENTRY_COPY])).not.toMatch(/homavise/i)
    expect([...VERSION_ORDER].sort()).toEqual([...LANGUAGES].sort())
  })

  it('is indexable, canonical on /, x-default of the ten home pages', () => {
    const meta = entryPageMetadata(ENTRY_COPY.en)
    expect(ENTRY_URL).toBe(`${BASE_URL}/`)
    expect(meta.alternates?.canonical).toBe(`${BASE_URL}/`)
    expect(meta.robots).toEqual({ index: true, follow: true })
    expect(meta.openGraph?.url).toBe(`${BASE_URL}/`)
    const languages = entryAlternates()
    expect(languages['x-default']).toBe(`${BASE_URL}/`)
    for (const lang of LANGUAGES) expect(languages[HTML_LANG[lang]], lang).toBe(`${BASE_URL}/${lang}`)
    expect(Object.keys(languages)).toHaveLength(LANGUAGES.length + 1)
  })
})
