import { describe, it, expect, afterEach, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { COUNTRY_COOKIE, LANGUAGES } from '@/lib/i18n'
import {
  GEO_DISMISS_COOKIE,
  MARKET_COOKIE,
  PREFERENCE_MAX_AGE,
  dismissGeoSuggestion,
  marketCookie,
  marketPreferenceFrom,
  parseMarketPreference,
  preferenceCookieOptions,
  readCookieValue,
  rememberMarket,
} from '@/lib/market-preference'
import { PREFERENCE_COOKIES } from '@/lib/preference-cookies'

const source = (path: string) => readFileSync(join(process.cwd(), path), 'utf8')

describe('hn_market, the remembered version', () => {
  it('is a first-party, whole-site, 12-month, SameSite=Lax cookie, Secure over HTTPS', () => {
    expect(PREFERENCE_MAX_AGE).toBe(60 * 60 * 24 * 365)
    expect(marketCookie('us', true)).toBe('hn_market=us; Path=/; Max-Age=31536000; SameSite=Lax; Secure')
    expect(marketCookie('fr', false)).toBe('hn_market=fr; Path=/; Max-Age=31536000; SameSite=Lax')
    expect(marketCookie('ca', true)).not.toMatch(/Domain=/i)
    expect(preferenceCookieOptions(true)).toEqual({ path: '/', maxAge: 31536000, sameSite: 'lax', secure: true })
  })

  it('holds a locale and nothing else (no identifier)', () => {
    for (const lang of LANGUAGES) expect(parseMarketPreference(lang)).toBe(lang)
    for (const value of [null, undefined, '', 'FR', 'xx', 'fr-FR', '1', 'us;']) expect(parseMarketPreference(value), String(value)).toBeNull()
  })

  it('is read back from a cookie string among others', () => {
    expect(readCookieValue('a=1; hn_market=it; hn_country=IT', MARKET_COOKIE)).toBe('it')
    expect(readCookieValue('hn_marketx=it', MARKET_COOKIE)).toBeNull()
    expect(readCookieValue('x=%E0%A4%A', 'x')).toBe('%E0%A4%A')
    expect(marketPreferenceFrom('hn_country=US; hn_market=us')).toBe('us')
    expect(marketPreferenceFrom('hn_market=evil')).toBeNull()
    expect(marketPreferenceFrom(null)).toBeNull()
  })
})

describe('writing the preference in the browser', () => {
  afterEach(() => vi.unstubAllGlobals())

  function fakeBrowser(protocol: string) {
    const written: string[] = []
    vi.stubGlobal('window', { location: { protocol } })
    vi.stubGlobal('document', {
      set cookie(value: string) {
        written.push(value)
      },
    })
    return written
  }

  it('remembers the chosen version and drops the legacy NEXT_LOCALE cookie', () => {
    const written = fakeBrowser('https:')
    rememberMarket('de')
    expect(written).toEqual(['hn_market=de; Path=/; Max-Age=31536000; SameSite=Lax; Secure', 'NEXT_LOCALE=; Path=/; Max-Age=0; SameSite=Lax'])
  })

  it('remembers a dismissed suggestion for 12 months', () => {
    const written = fakeBrowser('http:')
    dismissGeoSuggestion()
    expect(written).toEqual(['hn_geo_dismissed=1; Path=/; Max-Age=31536000; SameSite=Lax'])
  })
})

describe('the preference cookies are documented and need no consent', () => {
  it('lists the same cookies, with their real lifetimes, in all ten languages', () => {
    for (const lang of LANGUAGES) {
      const copy = PREFERENCE_COOKIES[lang]
      expect(copy.rows.map((row) => row.name), lang).toEqual([MARKET_COOKIE, GEO_DISMISS_COOKIE, COUNTRY_COOKIE])
      expect(copy.rows[0].duration, lang).toMatch(/12/)
      expect(copy.rows[2].duration, lang).toMatch(/24/)
      for (const text of [copy.heading, copy.intro, ...copy.rows.map((row) => row.purpose)]) expect(text.length, lang).toBeGreaterThan(10)
    }
    // The proxy keeps hn_country for 24 hours.
    expect(source('proxy.ts')).toMatch(/maxAge: 60 \* 60 \* 24, sameSite: 'lax'/)
  })

  it('shows them on the cookie policy and in the privacy policy table, where NEXT_LOCALE is gone', () => {
    expect(source('app/[lang]/politique-cookies/page.tsx')).toMatch(/PREFERENCE_COOKIES\[resolveLang\(lang\)\]/)
    const privacy = source('app/[lang]/politique-confidentialite/page.tsx')
    expect(privacy).not.toMatch(/NEXT_LOCALE/)
    for (const lang of LANGUAGES) expect(privacy, lang).toContain(`...PREFERENCE_COOKIES.${lang}.rows`)
  })

  it('is written whatever the consent banner says: the banner keeps its own cookie and gates nothing else', () => {
    const banner = source('components/CookieBanner.tsx')
    expect(banner).toMatch(/const COOKIE_NAME = 'homenura_cookie_consent'/)
    expect(banner).not.toMatch(/hn_market|rememberMarket/)
    for (const file of ['components/CountrySelector.tsx', 'components/LocaleNotices.tsx', 'components/entry/EntryChoiceLink.tsx', 'lib/market-preference.ts']) {
      expect(source(file), file).not.toMatch(/homenura_cookie_consent|cookie_consent/)
    }
  })

  it('is named in the consent banner text of every language (strictly necessary cookies)', () => {
    for (const lang of LANGUAGES) {
      const dict = JSON.parse(source(`dictionaries/${lang}.json`)) as { cookie_banner_text: string }
      expect(dict.cookie_banner_text, lang).toMatch(/\(.+\)/)
    }
  })
})

describe('consent cookie', () => {
  it('is named and dated in the privacy policy as the banner writes it (6 months)', () => {
    const banner = source('components/CookieBanner.tsx')
    expect(banner).toMatch(/const COOKIE_MAX_AGE = 182 \* 24 \* 60 \* 60/)
    const privacy = source('app/[lang]/politique-confidentialite/page.tsx')
    expect(privacy.match(/name: 'homenura_cookie_consent'/g)).toHaveLength(LANGUAGES.length)
    expect(privacy).not.toMatch(/name: 'cookie_consent'/)
  })
})
