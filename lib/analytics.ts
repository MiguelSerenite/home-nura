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
import { AMAZON_MARKETPLACE } from '@/lib/amazon'
import { CLICK_ENDPOINT, marketplaceOf, type AffiliateClick, type ClickSurface } from '@/lib/affiliate-click'

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
} as const

export type EventName = (typeof EVENTS)[keyof typeof EVENTS]

export type EventProps = Record<string, string | number | boolean | undefined>

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

  // Vercel Web Analytics (cookieless, same-origin script). Custom events
  // are only recorded on Vercel Pro; on Hobby the call is a harmless no-op.
  try {
    trackVercel(event, cleanProps as Record<string, string | number | boolean>)
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
 * Convenience helper — track an affiliate click with the canonical
 * property shape. Keeps every call site consistent.
 *
 * With a `surface`, the click is also sent to the first-party beacon
 * (/api/click), the only click record that works without GA4, Plausible
 * or Vercel Pro.
 */
export function trackAffiliateClick(input: {
  asin: string
  productName: string
  priceNumeric?: number
  position?: number
  location: 'comparison_table' | 'article_inline' | 'article_table' | 'article_bottom' | 'article_sticky' | 'article_models' | 'article_quick_answer' | 'category_picks' | 'comparator' | 'product_card' | 'smart_kitchen'
  lang: string
  surface?: ClickSurface
  /** Outbound URL, to record which Amazon store the click went to. */
  url?: string
}): void {
  trackEvent(EVENTS.CLICK_AFFILIATE, {
    asin: input.asin,
    product_name: input.productName,
    price: input.priceNumeric,
    position: input.position,
    location: input.location,
    surface: input.surface,
    lang: input.lang,
  })
  if (input.surface && typeof window !== 'undefined') {
    sendClickBeacon({
      path: window.location?.pathname ?? '/',
      lang: input.lang,
      surface: input.surface,
      model: input.productName,
      marketplace: (input.url && marketplaceOf(input.url)) || AMAZON_MARKETPLACE,
    })
  }
}

/**
 * POST the click to /api/click. sendBeacon survives the navigation the
 * click starts; keepalive fetch is the fallback. Never throws: analytics
 * must not block the reader on the way to Amazon.
 */
export function sendClickBeacon(click: AffiliateClick): void {
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

function stripUndefined(props: EventProps): EventProps {
  const out: EventProps = {}
  for (const [k, v] of Object.entries(props)) {
    if (v !== undefined) out[k] = v
  }
  return out
}
