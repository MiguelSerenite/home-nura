import { NextResponse } from 'next/server'
import { rateLimited, getClientIp } from '@/lib/rate-limit'
import { articleSlugOf, MAX_CLICK_BODY_LENGTH, parseAffiliateClick } from '@/lib/affiliate-click'

/**
 * /api/click — first-party affiliate click log.
 *
 * Receives `navigator.sendBeacon` posts from lib/analytics.ts
 * (trackAffiliateClick) and writes one JSON line per valid click to the
 * runtime logs (Vercel → Logs, filter on "affiliate_click"). Same pattern
 * as /api/vitals: no third-party script, no cookie, no personal data —
 * the IP is only used for the in-memory rate limit, never logged.
 *
 * Each line names the block clicked (`placement`), the reader's market
 * (`market`, from the page language), the Amazon store and the tracking ID
 * of the link: README.md ("Clics affiliés") and
 * scripts/analytics/affiliate-clicks.ts read them back from the logs.
 *
 * Security:
 *   - Body capped at MAX_CLICK_BODY_LENGTH; strict field validation
 *     (closed lists of placements, surfaces, locales, Amazon stores and
 *     tracking IDs; bounded path and model). Unknown fields are dropped.
 *   - 30 hits per minute per IP: plenty for a reader, tight for a script.
 */

const CLICKS_PER_MINUTE = 30
const ONE_MINUTE_MS = 60 * 1000

export async function POST(request: Request) {
  const ip = getClientIp(request.headers)
  if (rateLimited(ip, { namespace: 'click', windowMs: ONE_MINUTE_MS, max: CLICKS_PER_MINUTE })) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })
  }

  let raw: unknown
  try {
    // sendBeacon posts text/plain: read text, then parse.
    const text = await request.text()
    if (text.length > MAX_CLICK_BODY_LENGTH) {
      return NextResponse.json({ ok: false, error: 'payload_too_large' }, { status: 413 })
    }
    raw = text ? JSON.parse(text) : null
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  const click = parseAffiliateClick(raw)
  if (!click) {
    return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 })
  }

  console.log(
    JSON.stringify({
      event: 'affiliate_click',
      at: new Date().toISOString(),
      path: click.path,
      articleSlug: articleSlugOf(click.path),
      lang: click.lang,
      market: click.market,
      placement: click.placement,
      surface: click.surface,
      model: click.model,
      store: click.store,
      tag: click.tag,
    }),
  )

  return new NextResponse(null, { status: 204 })
}

export async function GET() {
  return NextResponse.json({ ok: false, error: 'method_not_allowed' }, { status: 405 })
}
