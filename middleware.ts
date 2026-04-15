import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const VALID_LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const
type Lang = (typeof VALID_LANGS)[number]
const DEFAULT_LANG: Lang = 'fr'
const LOCALE_COOKIE = 'NEXT_LOCALE'

// Vercel geo country → supported language (fallback only, after Accept-Language)
const COUNTRY_TO_LANG: Record<string, Lang> = {
  FR: 'fr', BE: 'fr', LU: 'fr', MC: 'fr', CH: 'fr',
  DE: 'de', AT: 'de',
  ES: 'es',
  IT: 'it',
  NL: 'nl',
  GB: 'en', IE: 'en', US: 'en', CA: 'en', AU: 'en', NZ: 'en',
}

function isValidLang(value: string | undefined | null): value is Lang {
  return !!value && (VALID_LANGS as readonly string[]).includes(value)
}

// Parse "fr-FR,fr;q=0.9,en;q=0.8" → best matching supported language
function pickFromAcceptLanguage(header: string | null): Lang | null {
  if (!header) return null
  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';')
      const q = params.find((p) => p.startsWith('q='))
      return {
        base: tag.toLowerCase().split('-')[0],
        q: q ? parseFloat(q.slice(2)) || 0 : 1,
      }
    })
    .sort((a, b) => b.q - a.q)

  for (const { base } of ranked) {
    if (isValidLang(base)) return base
  }
  return null
}

function negotiateLang(request: NextRequest): Lang {
  // 1. Explicit user choice (cookie) wins — survives reloads, respects the
  //    language switcher, and lets Google crawl all versions without being
  //    bounced back to a single locale.
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value
  if (isValidLang(cookie)) return cookie

  // 2. Browser preference (Accept-Language)
  const fromHeader = pickFromAcceptLanguage(request.headers.get('accept-language'))
  if (fromHeader) return fromHeader

  // 3. Geo-IP (Vercel) — only a hint when the browser gives no language info
  const country = request.headers.get('x-vercel-ip-country')?.toUpperCase()
  if (country && COUNTRY_TO_LANG[country]) return COUNTRY_TO_LANG[country]

  // 4. Last resort
  return DEFAULT_LANG
}

// Friendly-slug aliases that the Manus audit hit as 404s (e.g. /en/guide,
// /en/about, /en/privacy). We keep the canonical slugs localised and 301
// these common shortcuts so they land on the right page in every locale.
const SLUG_ALIASES: Record<string, string> = {
  // English intuition → canonical paths
  guide: '/guides/airfryers',
  guides: '/guides/airfryers',
  about: '/a-propos',
  'about-us': '/a-propos',
  privacy: '/politique-confidentialite',
  'privacy-policy': '/politique-confidentialite',
  cookies: '/politique-cookies',
  'cookie-policy': '/politique-cookies',
  legal: '/mentions-legales',
  'legal-notice': '/mentions-legales',
  comparator: '/comparateur',
  comparison: '/comparateur',
  // Cross-language canonical-slug shortcuts
  'sobre': '/a-propos',
  'ueber-uns': '/a-propos',
  'chi-siamo': '/chi-siamo', // unused but reserved
}

function generateNonce(): string {
  // 16 random bytes → base64 (≈ 24 chars), enough entropy for CSP nonces
  const bytes = new Uint8Array(16)
  crypto.getRandomValues(bytes)
  let binary = ''
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i])
  // btoa is available in the Edge runtime
  return btoa(binary)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Root path: negotiate a language and 302 to /{lang}
  if (pathname === '/') {
    const target = negotiateLang(request)
    const url = request.nextUrl.clone()
    url.pathname = `/${target}`
    const redirect = NextResponse.redirect(url, 302)
    // Cache variance hint for CDNs
    redirect.headers.set('Vary', 'Accept-Language, Cookie')
    return redirect
  }

  // Check if the path starts with a lang segment
  const segments = pathname.split('/')
  const langSegment = segments[1]

  // Redirect invalid language codes to the default locale
  if (
    langSegment &&
    langSegment.length === 2 &&
    !isValidLang(langSegment) &&
    !pathname.startsWith('/api') &&
    !pathname.startsWith('/_next') &&
    !pathname.includes('.')
  ) {
    const url = request.nextUrl.clone()
    url.pathname = `/${DEFAULT_LANG}` + pathname.slice(3)
    return NextResponse.redirect(url, 301)
  }

  // Friendly-slug redirects: /en/guide → /en/guides/airfryers, etc.
  // Only kicks in for paths of the shape /{lang}/{alias} where {alias} is a
  // known shortcut. Two-segment paths keep the canonical URL as the target
  // so every redirect stays inside the current locale.
  if (
    isValidLang(langSegment) &&
    segments.length === 3 &&
    segments[2] in SLUG_ALIASES
  ) {
    const canonical = SLUG_ALIASES[segments[2]]
    const url = request.nextUrl.clone()
    url.pathname = `/${langSegment}${canonical}`
    return NextResponse.redirect(url, 301)
  }

  // Generate a per-request nonce so inline <script> tags we emit (JSON-LD
  // schemas) and Next.js's own hydration scripts can be allow-listed
  // without falling back to 'unsafe-inline'.
  const nonce = generateNonce()
  const isDev = process.env.NODE_ENV === 'development'

  // strict-dynamic: trust anything loaded by a nonce'd script. This covers
  // Next.js chunk loading. In dev we still need 'unsafe-eval' for HMR.
  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    "'strict-dynamic'",
    isDev ? "'unsafe-eval'" : '',
    // Older browsers that don't understand strict-dynamic fall back here.
    // Modern browsers ignore these when strict-dynamic is present.
    'https:',
    "'unsafe-inline'",
  ]
    .filter(Boolean)
    .join(' ')

  const csp = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://m.media-amazon.com https://images-na.ssl-images-amazon.com https://img.youtube.com",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ')

  // Propagate nonce to request headers so server components can read it
  // via `headers().get('x-nonce')` and attach it to inline <script> tags.
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  )
  response.headers.set('Content-Security-Policy', csp)
  response.headers.set('x-nonce', nonce)

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|products/).*)'],
}
