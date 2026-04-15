import { NextResponse } from 'next/server'

// Rudimentary email validation — good enough for client-submitted data
// before we'd hand it off to a real ESP (Mailchimp/Brevo/etc.).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// In-memory rate-limit: per-IP, 5 submissions per hour. Resets on cold start,
// which is fine for a low-traffic site and works on the Edge / Node runtimes.
const buckets = new Map<string, { count: number; resetAt: number }>()
const WINDOW_MS = 60 * 60 * 1000
const MAX_PER_WINDOW = 5

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const bucket = buckets.get(ip)
  if (!bucket || bucket.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  bucket.count += 1
  return bucket.count > MAX_PER_WINDOW
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  const { email, lang, honeypot } =
    typeof body === 'object' && body !== null
      ? (body as { email?: unknown; lang?: unknown; honeypot?: unknown })
      : {}

  // Honeypot: real users never fill this hidden field
  if (typeof honeypot === 'string' && honeypot.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 })
  }

  if (typeof email !== 'string' || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 })
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'

  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })
  }

  // Placeholder: wire up to a real ESP here (Mailchimp / Brevo / Resend etc).
  // For now we just log the subscription server-side so ops can see it.
  console.log('[newsletter] subscribed', {
    email,
    lang: typeof lang === 'string' ? lang : 'unknown',
    ip,
    at: new Date().toISOString(),
  })

  return NextResponse.json({ ok: true }, { status: 200 })
}

export async function GET() {
  return NextResponse.json({ ok: false, error: 'method_not_allowed' }, { status: 405 })
}
