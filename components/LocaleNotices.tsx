'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { usePathname } from 'next/navigation'
import { EVENTS, trackEvent } from '@/lib/analytics'
import { COUNTRY_COOKIE, HTML_LANG, suggestLocalesForCountry, type Lang } from '@/lib/i18n'
import { ARRIVAL_COPY, SUGGESTION_COPY, arrivalMessage, suggestionQuestion } from '@/lib/locale-notices'
import { parseSwitchNotice, switchLink, withoutSwitchParams, type SwitchNotice } from '@/lib/locale-switch'
import { GEO_DISMISS_COOKIE, MARKET_COOKIE, dismissGeoSuggestion, readCookieValue, rememberMarket } from '@/lib/market-preference'

interface LocaleNoticesProps {
  lang: Lang
  /** Market page href → its main hub, for this locale's market pages (lib/market-pages/switch.ts). */
  marketHubs: Readonly<Record<string, string>>
  /** Path inside the locale → its title, for the pages a switch lands on instead (arrival notice). */
  arrivalLabels: Readonly<Record<string, string>>
}

const noopSubscribe = () => () => {}

interface Visitor {
  country: string | null
  /** hn_market is set: the visitor chose a version (selector, suggestion or entry page). */
  hasChosen: boolean
  dismissed: boolean
}

// Server and hydration render: nothing (pages are static; cookies are read on the client).
const SERVER_VISITOR: Visitor = { country: null, hasChosen: true, dismissed: true }
let visitorCache: { cookies: string; visitor: Visitor } | null = null

function readVisitor(): Visitor {
  const cookies = document.cookie
  if (visitorCache?.cookies === cookies) return visitorCache.visitor
  const visitor = {
    country: readCookieValue(cookies, COUNTRY_COOKIE),
    hasChosen: readCookieValue(cookies, MARKET_COOKIE) !== null,
    dismissed: readCookieValue(cookies, GEO_DISMISS_COOKIE) !== null,
  }
  visitorCache = { cookies, visitor }
  return visitor
}

interface Arrival {
  path: string
  notice: SwitchNotice | null
}

const SERVER_ARRIVAL: Arrival = { path: '', notice: null }
// Read once per page load: switch links are full page loads, and the
// notice belongs to the page the reader arrived on only.
let arrival: Arrival | undefined

function readArrival(): Arrival {
  arrival ??= { path: trimSlash(window.location.pathname), notice: parseSwitchNotice(window.location.search) }
  return arrival
}

function trimSlash(path: string): string {
  return path.replace(/\/+$/, '') || '/'
}

/**
 * The two notices at the top of every page, in flow (they push the page
 * down, never cover it, and scroll away under the sticky header):
 *
 *   - the suggestion: the visitor's IP country (hn_country, set by
 *     proxy.ts) reads other versions than this one ("Shopping in the
 *     United States? See Home Nura US"), in the suggested version's
 *     language. Accepting keeps the page (lib/i18n.ts switchLocale) and
 *     remembers the choice; closing hides it for good. Never shown once the
 *     visitor has chosen a version. A deep link never redirects.
 *   - the arrival notice: a country switch landed elsewhere than on the
 *     same page (?switched=…), and says why, in this page's language.
 */
export default function LocaleNotices({ lang, marketHubs, arrivalLabels }: LocaleNoticesProps) {
  const pathname = trimSlash(usePathname() ?? '/')
  const visitor = useSyncExternalStore(noopSubscribe, readVisitor, () => SERVER_VISITOR)
  const arrived = useSyncExternalStore(noopSubscribe, readArrival, () => SERVER_ARRIVAL)
  const [suggestionClosed, setSuggestionClosed] = useState(false)
  const [arrivalClosed, setArrivalClosed] = useState(false)

  const suggested = visitor.hasChosen || visitor.dismissed || suggestionClosed ? [] : suggestLocalesForCountry(visitor.country, lang)
  const notice = !arrivalClosed && arrived.notice && arrived.path === pathname ? arrived.notice : null

  // The switch parameters leave the address bar: a copied or shared URL is the clean one.
  useEffect(() => {
    if (!arrived.notice) return
    const { pathname: path, search, hash } = window.location
    window.history.replaceState(null, '', withoutSwitchParams(path, search, hash))
  }, [arrived.notice])

  const shownFor = useRef<string | null>(null)
  const primary = suggested[0]
  useEffect(() => {
    if (!primary || shownFor.current === primary) return
    shownFor.current = primary
    trackEvent(EVENTS.LOCALE_SUGGESTION, { action: 'show', locale: primary })
  }, [primary])

  return (
    <>
      {primary && (
        <aside lang={HTML_LANG[primary]} aria-label={SUGGESTION_COPY[primary].label} data-testid="locale-suggestion" className="bg-brand-900 text-white">
          <div className="mx-auto flex max-w-7xl items-start gap-2 px-4 py-2 sm:items-center sm:px-6">
            <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-3 gap-y-2">
              <p className="text-sm">{suggestionQuestion(primary, visitor.country)}</p>
              <div className="flex flex-wrap items-center gap-2">
                {suggested.map((code, index) => {
                  const link = switchLink(pathname, code, { marketHub: marketHubs[pathname] })
                  return (
                    <a
                      key={code}
                      href={link.href}
                      hrefLang={HTML_LANG[code]}
                      lang={HTML_LANG[code]}
                      onClick={() => {
                        rememberMarket(code)
                        trackEvent(EVENTS.LOCALE_SUGGESTION, { action: 'accept', locale: code })
                      }}
                      className={
                        index === 0
                          ? 'inline-flex min-h-11 shrink-0 items-center rounded-full bg-white px-4 text-sm font-bold text-brand-900 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900'
                          : 'inline-flex min-h-11 shrink-0 items-center rounded-full border border-white/70 px-4 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
                      }
                    >
                      {SUGGESTION_COPY[code].cta}
                    </a>
                  )
                })}
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                dismissGeoSuggestion()
                setSuggestionClosed(true)
                trackEvent(EVENTS.LOCALE_SUGGESTION, { action: 'dismiss', locale: primary })
              }}
              aria-label={SUGGESTION_COPY[primary].close}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </aside>
      )}
      {notice && (
        <div role="status" data-testid="locale-arrival" className="border-b border-brand-200 bg-brand-50 text-brand-900">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-1.5 sm:px-6">
            <p className="min-w-0 flex-1 py-1.5 text-sm">{arrivalMessage(lang, notice, arrivalLabels[pathname.slice(`/${lang}`.length)] ?? null)}</p>
            <button
              type="button"
              onClick={() => setArrivalClosed(true)}
              aria-label={ARRIVAL_COPY[lang].close}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
