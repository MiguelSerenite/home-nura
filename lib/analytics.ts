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
 */
export function trackAffiliateClick(input: {
  asin: string
  productName: string
  priceNumeric?: number
  position?: number
  location: 'comparison_table' | 'article_inline' | 'article_bottom' | 'comparator' | 'product_card' | 'smart_kitchen'
  lang: string
}): void {
  trackEvent(EVENTS.CLICK_AFFILIATE, {
    asin: input.asin,
    product_name: input.productName,
    price: input.priceNumeric,
    position: input.position,
    location: input.location,
    lang: input.lang,
  })
}

function stripUndefined(props: EventProps): EventProps {
  const out: EventProps = {}
  for (const [k, v] of Object.entries(props)) {
    if (v !== undefined) out[k] = v
  }
  return out
}
