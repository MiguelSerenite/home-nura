import { NextResponse } from 'next/server'
import { rateLimited, getClientIp } from '@/lib/rate-limit'

/**
 * /api/vitals — Phase U RUM (Real User Monitoring)
 *
 * Receives Web Vitals beacons from the client via `navigator.sendBeacon`
 * (or a fetch fallback). Logs each metric server-side in a structured
 * shape that's trivial to pipe into a log drain — Vercel Log Drains,
 * Datadog, Grafana Loki, or any tail-friendly destination — without
 * needing a new third-party runtime dependency.
 *
 * Why roll our own instead of Vercel Analytics / Plausible RUM?
 *   - Stays cookie-free and GDPR-native: no client ID persisted.
 *   - Per-locale dimension baked in (`lang` + `path`), so we can slice
 *     CWV by market — France vs Germany vs UK — which is the whole
 *     point of the "European war machine" layer.
 *   - No vendor lock-in: whoever consumes the log drain decides how to
 *     visualise it.
 *
 * Security:
 *   - Strict JSON shape validation: only known metric names, numeric
 *     values within sane bounds, and whitelisted ratings.
 *   - 60 hits per minute per IP — enough for a real session (≈6
 *     metrics × a few route changes), tight enough to blunt abuse.
 *   - No authentication: beacons are anonymous by design. Don't add
 *     PII here (no user id, no email, no session id).
 */

// Canonical Web Vitals metric names. Anything else → 400.
const VALID_METRICS = new Set(['LCP', 'FID', 'CLS', 'FCP', 'TTFB', 'INP'])
const VALID_RATINGS = new Set(['good', 'needs-improvement', 'poor'])
const VALID_LANGS = new Set(['fr', 'en', 'de', 'es', 'it', 'nl'])

// Sanity bounds — reject obvious garbage. 5 min covers even the slowest
// real-world TTFB; anything larger is a client clock issue or abuse.
const MAX_METRIC_VALUE = 5 * 60 * 1000 // 5 min in ms
const MAX_ID_LENGTH = 64
const MAX_PATH_LENGTH = 512

interface VitalsPayload {
  name: string
  value: number
  id: string
  rating: string
  lang: string
  path: string
}

function parsePayload(body: unknown): VitalsPayload | null {
  if (typeof body !== 'object' || body === null) return null
  const b = body as Record<string, unknown>

  const name = typeof b.name === 'string' ? b.name : null
  const value = typeof b.value === 'number' ? b.value : null
  const id = typeof b.id === 'string' ? b.id : null
  const rating = typeof b.rating === 'string' ? b.rating : null
  const lang = typeof b.lang === 'string' ? b.lang : null
  const path = typeof b.path === 'string' ? b.path : null

  if (!name || !VALID_METRICS.has(name)) return null
  if (value === null || !Number.isFinite(value) || value < 0 || value > MAX_METRIC_VALUE) return null
  if (!id || id.length === 0 || id.length > MAX_ID_LENGTH) return null
  if (!rating || !VALID_RATINGS.has(rating)) return null
  if (!lang || !VALID_LANGS.has(lang)) return null
  if (!path || path.length === 0 || path.length > MAX_PATH_LENGTH) return null

  return { name, value, id, rating, lang, path }
}

export async function POST(request: Request) {
  const ip = getClientIp(request.headers)

  // 60 hits/min per IP. Web Vitals fires up to ≈6 metrics per navigation;
  // a busy user doing 10 client-side route changes per minute still stays
  // well under the cap.
  if (rateLimited(ip, { namespace: 'vitals', windowMs: 60 * 1000, max: 60 })) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })
  }

  let raw: unknown
  try {
    // sendBeacon uses Blob with text/plain content-type, so request.json()
    // would fail on the content-type check. request.text() + JSON.parse
    // is runtime-agnostic and matches what Next.js's examples use.
    const text = await request.text()
    raw = text ? JSON.parse(text) : null
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  const payload = parsePayload(raw)
  if (!payload) {
    return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 })
  }

  // Log in a stable shape so downstream log drains can parse it.
  // The '[vitals]' prefix makes filtering trivial.
  console.log('[vitals]', {
    metric: payload.name,
    value: Math.round(payload.value * 100) / 100,
    rating: payload.rating,
    id: payload.id,
    lang: payload.lang,
    path: payload.path,
    ip,
    at: new Date().toISOString(),
  })

  // 204 No Content — sendBeacon doesn't care about the body, and it
  // keeps the response as cheap as possible on the wire.
  return new NextResponse(null, { status: 204 })
}

export async function GET() {
  return NextResponse.json({ ok: false, error: 'method_not_allowed' }, { status: 405 })
}
