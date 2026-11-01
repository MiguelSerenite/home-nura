/**
 * The visitor's country choice, remembered in a first-party cookie.
 *
 * `hn_market=<locale>` is written only when the visitor chooses: the
 * country selector (components/CountrySelector.tsx), an accepted locale
 * suggestion (components/LocaleNotices.tsx) or a card of the entry page
 * (/). It is strictly functional (a preference the visitor asked for, no
 * identifier, never read by a third party), so it needs no consent and is
 * listed as such on the cookie and privacy policies (lib/preference-cookies.ts).
 * proxy.ts reads it on / only: a returning visitor goes straight to the
 * version they chose. Deep links never redirect, whatever the cookie says.
 *
 * Dependency-free apart from lib/i18n so the proxy (Edge), server
 * components, client components and tests can all import it.
 */

import { isValidLang, type Lang } from './i18n'

/** The visitor's chosen version. */
export const MARKET_COOKIE = 'hn_market'
/** Cookie the language switcher wrote before hn_market; proxy.ts migrates it on /. */
export const LEGACY_LOCALE_COOKIE = 'NEXT_LOCALE'
/** Set when the visitor closes the locale suggestion: it never shows again. */
export const GEO_DISMISS_COOKIE = 'hn_geo_dismissed'

/** Twelve months, in seconds. */
export const PREFERENCE_MAX_AGE = 60 * 60 * 24 * 365

/** Options of the preference cookies, as NextResponse.cookies.set takes them (proxy.ts). */
export function preferenceCookieOptions(secure: boolean) {
  return { path: '/', maxAge: PREFERENCE_MAX_AGE, sameSite: 'lax' as const, secure }
}

/** A `document.cookie` assignment: first-party, whole site, 12 months, Lax, Secure over HTTPS. */
export function serializePreferenceCookie(name: string, value: string, secure: boolean): string {
  return [`${name}=${encodeURIComponent(value)}`, 'Path=/', `Max-Age=${PREFERENCE_MAX_AGE}`, 'SameSite=Lax', ...(secure ? ['Secure'] : [])].join('; ')
}

/** The hn_market cookie for `lang`. */
export function marketCookie(lang: Lang, secure: boolean): string {
  return serializePreferenceCookie(MARKET_COOKIE, lang, secure)
}

/** A cookie value read back as a locale, or null when it is missing or not a locale. */
export function parseMarketPreference(value: string | null | undefined): Lang | null {
  return isValidLang(value) ? value : null
}

/** Value of cookie `name` in a `document.cookie` / Cookie header string. */
export function readCookieValue(cookies: string | null | undefined, name: string): string | null {
  if (!cookies) return null
  for (const part of cookies.split(';')) {
    const [key, ...value] = part.trim().split('=')
    if (key !== name) continue
    try {
      return decodeURIComponent(value.join('='))
    } catch {
      return value.join('=')
    }
  }
  return null
}

/** The visitor's remembered version in a cookie string (hn_market only). */
export function marketPreferenceFrom(cookies: string | null | undefined): Lang | null {
  return parseMarketPreference(readCookieValue(cookies, MARKET_COOKIE))
}

const isSecurePage = () => window.location.protocol === 'https:'

/**
 * Client only: remember `lang` as the visitor's version, and drop the
 * legacy NEXT_LOCALE cookie so a single preference remains.
 */
export function rememberMarket(lang: Lang): void {
  if (typeof document === 'undefined') return
  document.cookie = marketCookie(lang, isSecurePage())
  document.cookie = `${LEGACY_LOCALE_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`
}

/** Client only: the visitor closed the locale suggestion. */
export function dismissGeoSuggestion(): void {
  if (typeof document === 'undefined') return
  document.cookie = serializePreferenceCookie(GEO_DISMISS_COOKIE, '1', isSecurePage())
}
