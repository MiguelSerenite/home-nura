/**
 * Links of a country switch and the notice shown on arrival.
 *
 * lib/i18n.ts switchLocale picks the page; when it is not the same page
 * (a market page, a Black Friday category or a floor-care guide the target
 * version lacks, or no equivalent at all), the link carries
 * `?switched=<reason>&from=<locale>` so the target page can say why the
 * reader landed there (components/LocaleNotices.tsx), in its own language.
 * The parameters never reach the canonical URL (built from the path,
 * lib/seo.ts), those links are only rendered on the client (the open
 * selector, the suggestion), never in the HTML crawlers read, and the
 * notice removes them from the address bar on arrival so a copied or
 * shared URL is the clean one.
 */

import { isValidLang, switchLocale, type Lang, type SwitchContext, type SwitchReason } from './i18n'

export const SWITCH_PARAM = 'switched'
export const SWITCH_FROM_PARAM = 'from'

const REASONS: readonly SwitchReason[] = ['market', 'black-friday', 'cleaning', 'home']

export interface LocaleSwitchLink {
  href: string
  /** True when the link lands on another page than the same one in the target locale. */
  changesPage: boolean
}

/** Locale prefix of a path ('/us/vs/x' → 'us'), or null. */
export function localeOfPath(pathname: string | null | undefined): Lang | null {
  const segment = pathname?.split('/')[1]
  return isValidLang(segment) ? segment : null
}

/** The link to `target` from the page at `pathname`. */
export function switchLink(pathname: string | null | undefined, target: Lang, context: SwitchContext = {}): LocaleSwitchLink {
  const { path, reason } = switchLocale(pathname, target, context)
  if (!reason) return { href: path, changesPage: false }
  const params = new URLSearchParams({ [SWITCH_PARAM]: reason })
  const from = localeOfPath(pathname)
  if (from) params.set(SWITCH_FROM_PARAM, from)
  return { href: `${path}?${params}`, changesPage: true }
}

export interface SwitchNotice {
  reason: SwitchReason
  /** The version the reader came from, when known. */
  from: Lang | null
}

/** The arrival notice a query string asks for (`?switched=market&from=us`), or null. */
export function parseSwitchNotice(search: string | null | undefined): SwitchNotice | null {
  if (!search) return null
  const params = new URLSearchParams(search)
  const reason = params.get(SWITCH_PARAM)
  if (!reason || !(REASONS as readonly string[]).includes(reason)) return null
  const from = params.get(SWITCH_FROM_PARAM)
  return { reason: reason as SwitchReason, from: isValidLang(from) ? from : null }
}

/** `pathname + search + hash` without the switch parameters (for history.replaceState). */
export function withoutSwitchParams(pathname: string, search: string, hash = ''): string {
  const params = new URLSearchParams(search)
  params.delete(SWITCH_PARAM)
  params.delete(SWITCH_FROM_PARAM)
  const query = params.toString()
  return `${pathname}${query ? `?${query}` : ''}${hash}`
}
