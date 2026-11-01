import { describe, it, expect } from 'vitest'
import {
  BCP47_LOCALE,
  HTML_LANG,
  LANGUAGES,
  baseLanguage,
  countryVariant,
  langForLanguageTag,
  ogLocale,
} from '@/lib/i18n'

describe('locale tags', () => {
  it('serves the ten site locales in switcher order', () => {
    expect(LANGUAGES).toEqual(['fr', 'en', 'de', 'es', 'it', 'nl', 'pl', 'sv', 'us', 'ca'])
  })

  it('never emits the market codes us and ca as language tags', () => {
    // `ca` is Catalan and `us` no language at all: the US and Canadian
    // versions are English, tagged with their region.
    expect(HTML_LANG.us).toBe('en-US')
    expect(HTML_LANG.ca).toBe('en-CA')
    expect(HTML_LANG.sv).toBe('sv-SE')
    for (const lang of LANGUAGES) {
      expect(HTML_LANG[lang], lang).toMatch(/^[a-z]{2}(-[A-Z]{2})?$/)
      expect(HTML_LANG[lang].split('-')[0], lang).not.toMatch(/^(us|ca)$/)
      expect(BCP47_LOCALE[lang], lang).toMatch(/^[a-z]{2}-[A-Z]{2}$/)
    }
  })

  it('keeps the bare language tag of the seven original locales (hreflang fallback)', () => {
    expect(['fr', 'en', 'de', 'es', 'it', 'nl', 'pl'].map((l) => HTML_LANG[l as keyof typeof HTML_LANG])).toEqual([
      'fr', 'en', 'de', 'es', 'it', 'nl', 'pl',
    ])
  })

  it('formats dates with the regional locale, en staying British', () => {
    expect(BCP47_LOCALE.en).toBe('en-GB')
    expect(BCP47_LOCALE.us).toBe('en-US')
    expect(BCP47_LOCALE.ca).toBe('en-CA')
    expect(BCP47_LOCALE.sv).toBe('sv-SE')
    const date = new Date('2026-07-04T12:00:00Z')
    const opts = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' } as const
    expect(date.toLocaleDateString(BCP47_LOCALE.us, opts)).toBe('July 4, 2026')
    expect(date.toLocaleDateString(BCP47_LOCALE.en, opts)).toBe('4 July 2026')
    expect(date.toLocaleDateString(BCP47_LOCALE.sv, opts)).toBe('4 juli 2026')
  })

  it('derives og:locale from the regional locale', () => {
    expect(ogLocale('fr')).toBe('fr_FR')
    expect(ogLocale('en')).toBe('en_GB')
    expect(ogLocale('pl')).toBe('pl_PL')
    expect(ogLocale('sv')).toBe('sv_SE')
    expect(ogLocale('us')).toBe('en_US')
    expect(ogLocale('ca')).toBe('en_CA')
  })

  it('knows the US and Canadian versions are English', () => {
    expect(baseLanguage('us')).toBe('en')
    expect(baseLanguage('ca')).toBe('en')
    expect(baseLanguage('en')).toBe('en')
    expect(baseLanguage('sv')).toBe('sv')
  })
})

describe('langForLanguageTag (Accept-Language)', () => {
  it('sends American and Canadian English to their market versions', () => {
    expect(langForLanguageTag('en-US')).toBe('us')
    expect(langForLanguageTag('en-CA')).toBe('ca')
    expect(langForLanguageTag('en_ca')).toBe('ca')
  })

  it('keeps every other English on the UK/international version', () => {
    expect(langForLanguageTag('en')).toBe('en')
    expect(langForLanguageTag('en-GB')).toBe('en')
    expect(langForLanguageTag('en-AU')).toBe('en')
    expect(langForLanguageTag('en-IN')).toBe('en')
  })

  it('maps Swedish and the other languages by their language subtag', () => {
    expect(langForLanguageTag('sv-SE')).toBe('sv')
    expect(langForLanguageTag('sv')).toBe('sv')
    expect(langForLanguageTag('sv-FI')).toBe('sv')
    expect(langForLanguageTag('fr-CA')).toBe('fr')
    expect(langForLanguageTag('de-CH')).toBe('de')
  })

  it('does not mistake Catalan for the Canadian version', () => {
    expect(langForLanguageTag('ca')).toBeNull()
    expect(langForLanguageTag('ca-ES')).toBeNull()
    expect(langForLanguageTag('us')).toBeNull()
    expect(langForLanguageTag('pt-BR')).toBeNull()
    expect(langForLanguageTag('')).toBeNull()
    expect(langForLanguageTag('*')).toBeNull()
  })

  it('reads the region before any extension or private-use subtag', () => {
    expect(langForLanguageTag('en-Latn-US')).toBe('us')
    expect(langForLanguageTag('en-u-ca-gregory')).toBe('en')
    expect(langForLanguageTag('en-x-us')).toBe('en')
  })
})

describe('countryVariant', () => {
  it('picks the visitor country’s own version of the same language', () => {
    // Browsers default to en-US worldwide: a UK visitor reads the UK version.
    expect(countryVariant('us', 'GB')).toBe('en')
    expect(countryVariant('en', 'US')).toBe('us')
    expect(countryVariant('us', 'CA')).toBe('ca')
    expect(countryVariant('en', 'PR')).toBe('us')
  })

  it('gives readers elsewhere the default version of their language', () => {
    // en-US is the browser default worldwide: a German or Japanese reader
    // gets the international English version, not the amazon.com one.
    expect(countryVariant('us', 'DE')).toBe('en')
    expect(countryVariant('ca', 'JP')).toBe('en')
    expect(countryVariant('en', 'JP')).toBe('en')
    expect(countryVariant('fr', 'CA')).toBe('fr')
    expect(countryVariant('sv', 'FI')).toBe('sv')
  })

  it('trusts the browser region when the country is unknown', () => {
    expect(countryVariant('us', undefined)).toBe('us')
    expect(countryVariant('ca', '')).toBe('ca')
    expect(countryVariant('de', null)).toBe('de')
  })
})
