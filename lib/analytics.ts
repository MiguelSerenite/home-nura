/**
 * Provider-agnostic analytics wrapper.
 *
 * Supports both GA4 (via `window.dataLayer`) and Plausible (via
 * `window.plausible`). If neither provider is loaded, the call is a
 * silent no-op — safe to invoke from any client component regardless
 * of whether analytics has been wired up on the site yet.
 *
 * All functions are SSR-safe: they bail out cleanly when called without
 * a `window` object (during server rendering).
 *
 * ### Canonical event names
 *
 * Stick to the names exported below so GA4 reports and Plausible goals
 * stay consistent across the site. Adding a new event? Add it here
 * first, then use the constant at the call site — never typed strings.
 */

import { track as trackVercel } from '@vercel/analytics'
import { amazonMarket } from '@/lib/amazon'
import {
  CLICK_ENDPOINT,
  storeOf,
  tagOf,
  type AffiliateClickBeacon,
  type ClickPlacement,
  type ClickSurface,
} from '@/lib/affiliate-click'
import { resolveLang } from '@/lib/i18n'

export const EVENTS = {
  CLICK_AFFILIATE: 'click_affiliate',
  NEWSLETTER_SUBMIT: 'newsletter_submit',
  NEWSLETTER_SUCCESS: 'newsletter_success',
  NEWSLETTER_ERROR: 'newsletter_error',
  SEARCH_OPEN: 'search_open',
  SEARCH_QUERY: 'search_query',
  COMPARATOR_ADD: 'comparator_add',
  COMPARATOR_REMOVE: 'comparator_remove',
  QUIZ_START: 'quiz_start',
  QUIZ_COMPLETE: 'quiz_complete',
  /** The entry page (/) was shown to a visitor (crawlers excluded by Vercel). */
  ENTRY_VIEW: 'entry_view',
  /** A visitor picked a version on the entry page. */
  ENTRY_CHOOSE: 'entry_choose',
  /** The locale suggestion of a deep link: shown, accepted or dismissed. */
  LOCALE_SUGGESTION: 'locale_suggestion',
} as const

export type EventName = (typeof EVENTS)[keyof typeof EVENTS]

export type EventProps = Record<string, string | number | boolean | undefined>

/** Vercel Pro records at most 2 custom properties per event (8 with Web Analytics Plus). */
export const VERCEL_MAX_PROPERTIES = 2

/**
 * The properties sent to Vercel Web Analytics, per event. Never free text
 * typed by the reader (the search query stays out).
 *
 * click_affiliate sends `placement` and `market`, the two questions the
 * click data has to answer: which blocks earn, and in which market. The
 * page is already in the event's request path, but Vercel groups events by
 * route (/[lang]/blog/[slug]), which merges the ten language versions, so
 * the market needs its own property. The store and the tracking ID follow
 * from the market (lib/amazon.ts), and the model name is too varied for a
 * 2-property plan: those stay in the /api/click log line, which has every
 * field (README.md, "Clics affiliés").
 */
export const VERCEL_PROPERTIES: { readonly [E in EventName]: readonly string[] } = {
  click_affiliate: ['placement', 'market'],
  newsletter_submit: [],
  newsletter_success: [],
  newsletter_error: ['reason'],
  search_open: ['variant'],
  search_query: ['results'],
  comparator_add: ['slot'],
  comparator_remove: ['slot'],
  quiz_start: ['quiz'],
  quiz_complete: ['quiz'],
  // What ordered the list (country / browser / none) and the version
  // proposed first ("none" without an IP country): entry_choose / entry_view
  // is the share of visitors who continue.
  entry_view: ['basis', 'proposed'],
  // The version picked and whether it was the proposed one.
  entry_choose: ['locale', 'proposed'],
  // show / accept / dismiss, and the suggested version (accept: the one taken).
  locale_suggestion: ['action', 'locale'],
}

type DataLayerPayload = { event: string } & EventProps

interface PlausibleFunction {
  (eventName: string, options?: { props?: EventProps }): void
}

declare global {
  interface Window {
    dataLayer?: DataLayerPayload[]
    plausible?: PlausibleFunction
  }
}

/**
 * Fire a tracked event to every available analytics provider.
 *
 * - Pushes `{ event, ...props }` to `window.dataLayer` (GA4 / GTM).
 * - Calls `window.plausible(event, { props })` if Plausible is loaded.
 * - In development, mirrors the event to `console.debug` so you can
 *   watch it without opening DevTools network tab.
 *
 * Props are stripped of `undefined` values before being forwarded so
 * consumers can pass optional fields without guarding every one.
 */
export function trackEvent(event: EventName, props: EventProps = {}): void {
  if (typeof window === 'undefined') return

  const cleanProps = stripUndefined(props)

  // GA4 / GTM — every site embedding gtag.js exposes a dataLayer array.
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...cleanProps })
  }

  // Vercel Web Analytics (cookieless, same-origin script, Pro plan): only
  // the properties listed in VERCEL_PROPERTIES, within the plan limit.
  try {
    ensureVercelQueue()
    trackVercel(event, pickVercelProps(event, cleanProps))
  } catch {
    // Blocked by an extension or not loaded yet: never block the click.
  }

  // Plausible — optional. Signature is plausible('EventName', { props }).
  if (typeof window.plausible === 'function') {
    try {
      window.plausible(event, { props: cleanProps })
    } catch {
      // Plausible script can throw if its snippet hasn't finished
      // hydrating. Never block the user interaction on that.
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    console.debug('[analytics]', event, cleanProps)
  }
}

/**
 * Vercel's own queue (what <Analytics /> sets up when it mounts): an event
 * sent before the script is ready (the entry page's view, on mount) waits
 * in it instead of being dropped.
 */
function ensureVercelQueue(): void {
  const w = window as Window & { va?: (...params: unknown[]) => void; vaq?: unknown[][] }
  if (w.va) return
  w.va = (...params: unknown[]) => {
    ;(w.vaq ??= []).push(params)
  }
}

/**
 * Convenience helper — track an affiliate click with the canonical
 * property shape. Keeps every call site consistent.
 *
 * Every click is also sent to the first-party beacon (/api/click), the
 * only full click record: placement, page, model, and the store and
 * tracking ID read from the link itself (the reader's market when the
 * link names neither).
 */
export function trackAffiliateClick(input: {
  asin: string
  productName: string
  priceNumeric?: number
  position?: number
  location: 'comparison_table' | 'article_inline' | 'article_table' | 'article_bottom' | 'article_sticky' | 'article_models' | 'article_quick_answer' | 'category_picks' | 'comparator' | 'product_card' | 'smart_kitchen'
  lang: string
  /** Block of the page the link sits in (lib/affiliate-click.ts). */
  placement: ClickPlacement
  /** Position on an article page, kept for continuity with the logs before placements. */
  surface?: ClickSurface
  /** Outbound URL: the store and tracking ID of the click are read from it. */
  url: string
}): void {
  const market = amazonMarket(resolveLang(input.lang))
  const store = storeOf(input.url) ?? market.marketplace
  const tag = tagOf(input.url) ?? market.tag
  trackEvent(EVENTS.CLICK_AFFILIATE, {
    asin: input.asin,
    product_name: input.productName,
    price: input.priceNumeric,
    position: input.position,
    location: input.location,
    placement: input.placement,
    surface: input.surface,
    lang: input.lang,
    market: market.market,
    merchant: store,
  })
  if (typeof window === 'undefined') return
  sendClickBeacon({
    path: window.location?.pathname ?? '/',
    lang: input.lang,
    placement: input.placement,
    surface: input.surface,
    model: input.productName,
    store,
    tag,
  })
}

/**
 * POST the click to /api/click. sendBeacon survives the navigation the
 * click starts; keepalive fetch is the fallback. Never throws: analytics
 * must not block the reader on the way to Amazon.
 */
export function sendClickBeacon(click: AffiliateClickBeacon): void {
  try {
    const body = JSON.stringify(click)
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      if (navigator.sendBeacon(CLICK_ENDPOINT, body)) return
    }
    if (typeof fetch === 'function') {
      void fetch(CLICK_ENDPOINT, {
        method: 'POST',
        body,
        keepalive: true,
        headers: { 'content-type': 'text/plain' },
      }).catch(() => {})
    }
  } catch {
    // Dropped beacon: never surface it to the reader.
  }
}

function pickVercelProps(event: EventName, props: EventProps): Record<string, string | number | boolean> {
  const out: Record<string, string | number | boolean> = {}
  for (const key of VERCEL_PROPERTIES[event].slice(0, VERCEL_MAX_PROPERTIES)) {
    const value = props[key]
    if (value !== undefined) out[key] = value
  }
  return out
}

function stripUndefined(props: EventProps): EventProps {
  const out: EventProps = {}
  for (const [k, v] of Object.entries(props)) {
    if (v !== undefined) out[k] = v
  }
  return out
}
