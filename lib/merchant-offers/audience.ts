/**
 * Showing an offer to the visitors of one country only (Coolblue BE: it
 * only delivers to Belgium) without making the static hub pages dynamic.
 *
 * The page renders every offer of its locale for everyone. proxy.ts puts
 * the visitor's IP country in the hn_country cookie (as for the locale
 * suggestion); a tiny inline script in <head> (app/[lang]/layout.tsx) copies
 * it onto <html data-hn-country="BE"> before the first paint, and the
 * rules of app/globals.css show or hide each offer from its data attributes:
 *
 *   - data-offer-only="BE": hidden unless the visitor is in Belgium;
 *   - data-offer-except="BE": hidden for visitors in Belgium.
 *
 * No flash, no layout shift, the CDN cache unchanged. Without the cookie
 * (no JavaScript, local development) a visitor counts as outside every
 * gated country: Coolblue NL on /nl, no Coolblue BE anywhere.
 *
 * Client-safe: no Node import.
 */
import { COUNTRY_COOKIE } from '@/lib/i18n'
import type { Audience } from './merchants'

/** Attribute of <html> holding the visitor's country. */
export const COUNTRY_ATTRIBUTE = 'data-hn-country'
/** Attribute of an offer shown to one country only. */
export const OFFER_ONLY_ATTRIBUTE = 'data-offer-only'
/** Attribute of an offer hidden in some countries (space-separated). */
export const OFFER_EXCEPT_ATTRIBUTE = 'data-offer-except'

/** Data attributes of an offer box for its merchant's audience (none when every visitor sees it). */
export function audienceAttributes(audience: Audience): Readonly<Record<string, string>> {
  if (audience.kind === 'only') return { [OFFER_ONLY_ATTRIBUTE]: audience.country }
  if (audience.kind === 'except') return { [OFFER_EXCEPT_ATTRIBUTE]: audience.countries.join(' ') }
  return {}
}

/**
 * The inline <head> script: hn_country (two letters) → <html data-hn-country>.
 * Reads a cookie only, writes one attribute, never throws.
 */
export const COUNTRY_ATTRIBUTE_SCRIPT =
  `try{var m=document.cookie.match(/(?:^|;\\s*)${COUNTRY_COOKIE}=([A-Za-z]{2})(?:;|$)/);` +
  `if(m)document.documentElement.setAttribute('${COUNTRY_ATTRIBUTE}',m[1].toUpperCase())}catch(e){}`
