'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { usePathname } from 'next/navigation'

/**
 * WebVitalsReporter — Phase U RUM client
 *
 * Hooks into Next.js's built-in `useReportWebVitals` and ships every
 * Core Web Vitals metric to `/api/vitals` as soon as the browser
 * emits it.
 *
 * Transport strategy:
 *   - `navigator.sendBeacon` first: survives page unload, non-blocking,
 *     queued by the browser even if the user navigates away immediately.
 *   - `fetch(..., { keepalive: true })` fallback for browsers that
 *     don't expose sendBeacon (rare) or when the beacon call returns
 *     false (e.g., payload too large for the beacon quota).
 *
 * Errors are swallowed on purpose: RUM must never break the page. A
 * dropped beacon is strictly better than a crashed render.
 *
 * Per-locale dimensions (`lang` from the path, plus the raw path) are
 * attached so the log drain can slice CWV by market — which is the
 * whole point of the European observability layer.
 */

const VALID_LANGS = new Set(['fr', 'en', 'de', 'es', 'it', 'nl'])

interface VitalsBeacon {
  name: string
  value: number
  id: string
  rating: 'good' | 'needs-improvement' | 'poor'
  lang: string
  path: string
}

function send(payload: VitalsBeacon): void {
  try {
    const body = JSON.stringify(payload)
    const url = '/api/vitals'

    // Prefer sendBeacon — non-blocking, survives unload, exactly what
    // RUM beacons are designed for.
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      // sendBeacon uses Content-Type: text/plain by default when given
      // a string, which matches what the route handler expects.
      const ok = navigator.sendBeacon(url, body)
      if (ok) return
    }

    // Fallback: keepalive fetch. `keepalive: true` lets the request
    // outlive the page unload event (up to a 64KB body), which we need
    // so LCP/CLS metrics sent on visibility-change aren't dropped.
    void fetch(url, {
      method: 'POST',
      body,
      keepalive: true,
      headers: { 'content-type': 'text/plain' },
    }).catch(() => {
      // Silently drop — RUM must never surface errors to users.
    })
  } catch {
    // Final safety net.
  }
}

export function WebVitalsReporter() {
  const pathname = usePathname() || '/'
  // First path segment is the locale (/fr/..., /en/...). Fallback to
  // 'fr' so the route validator never rejects the beacon for a path
  // that somehow escaped the middleware's locale rewriting.
  const langSegment = pathname.split('/')[1] || ''
  const lang = VALID_LANGS.has(langSegment) ? langSegment : 'fr'

  useReportWebVitals((metric) => {
    // Only ship the 6 canonical Core Web Vitals that the route accepts.
    // Next.js also fires 'Next.js-hydration' / 'Next.js-route-change-to-render'
    // custom metrics — interesting for internal perf work but not part
    // of the CWV contract we report on.
    if (!['LCP', 'FID', 'CLS', 'FCP', 'TTFB', 'INP'].includes(metric.name)) return

    send({
      name: metric.name,
      value: metric.value,
      id: metric.id,
      rating: metric.rating,
      lang,
      path: pathname,
    })
  })

  return null
}
