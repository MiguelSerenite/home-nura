import { NextResponse } from 'next/server'
import { rateLimited, getClientIp } from '@/lib/rate-limit'

// Rudimentary email validation — good enough for client-submitted data
// before we'd hand it off to a real ESP (Mailchimp/Brevo/etc.).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

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

  const ip = getClientIp(request.headers)

  if (rateLimited(ip, { namespace: 'newsletter', windowMs: 60 * 60 * 1000, max: 5 })) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })
  }

  // TODO(refonte lot 3): no ESP is wired yet, so the address is not stored.
  // Logs carry no personal data (GDPR): only the email domain and locale.
  console.log(
    JSON.stringify({
      level: 'info',
      msg: 'newsletter_subscribe',
      emailDomain: email.split('@')[1]?.toLowerCase(),
      lang: typeof lang === 'string' ? lang : 'unknown',
      ts: new Date().toISOString(),
    }),
  )

  return NextResponse.json({ ok: true }, { status: 200 })
}

export async function GET() {
  return NextResponse.json({ ok: false, error: 'method_not_allowed' }, { status: 405 })
}
