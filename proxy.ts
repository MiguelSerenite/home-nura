import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { COUNTRY_COOKIE, DEFAULT_LANG, isValidLang } from './lib/i18n'
import { isCrawlerUserAgent } from './lib/country-entry/choices'
import { LEGACY_LOCALE_COOKIE, MARKET_COOKIE, parseMarketPreference, preferenceCookieOptions } from './lib/market-preference'

/**
 * / is the international entry page (app/(entry)/page.tsx), the x-default
 * of the home pages: it lists the ten versions with the visitor's first,
 * and never redirects by IP or browser language (Google's guidance for
 * multi-regional sites). The one exception is an explicit choice: a
 * visitor whose hn_market cookie names a version goes straight to it
 * (302: the choice can change). Crawlers always get the entry page.
 * NEXT_LOCALE, written by the old language switcher, counts as a choice
 * once: it is migrated to hn_market and deleted.
 */
function rootRedirect(request: NextRequest): NextResponse | null {
  if (isCrawlerUserAgent(request.headers.get('user-agent'))) return null
  const chosen = parseMarketPreference(request.cookies.get(MARKET_COOKIE)?.value)
  const legacy = chosen ? null : parseMarketPreference(request.cookies.get(LEGACY_LOCALE_COOKIE)?.value)
  const target = chosen ?? legacy
  if (!target) return null
  const url = request.nextUrl.clone()
  url.pathname = `/${target}`
  const redirect = NextResponse.redirect(url, 302)
  redirect.headers.set('Vary', 'Cookie, User-Agent')
  redirect.headers.set('Cache-Control', 'private, no-store')
  if (legacy) {
    redirect.cookies.set(MARKET_COOKIE, legacy, preferenceCookieOptions(request.nextUrl.protocol === 'https:'))
    redirect.cookies.delete(LEGACY_LOCALE_COOKIE)
  }
  return redirect
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
  'chi-siamo': '/a-propos',
  'over-ons': '/a-propos',
}

// Dead multi-segment paths still linked from published content, 301'd to
// the page that replaced them. /cuisine-connectee/airfryers never existed
// (the kitchen route only serves the SMART_KITCHEN_CATEGORIES) yet articles
// in every locale still link to it; air fryers live on the pillar guide.
const PATH_ALIASES: Record<string, string> = {
  'cuisine-connectee/airfryers': '/guides/airfryers',
}

function aliasTarget(pathAfterLang: string): string | undefined {
  if (Object.hasOwn(SLUG_ALIASES, pathAfterLang)) return SLUG_ALIASES[pathAfterLang]
  if (Object.hasOwn(PATH_ALIASES, pathAfterLang)) return PATH_ALIASES[pathAfterLang]
  return undefined
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Root path: the entry page, or the version the visitor chose.
  if (pathname === '/') {
    const redirect = rootRedirect(request)
    if (redirect) return redirect
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

  // Friendly-slug and dead-path redirects: /en/guide → /en/guides/airfryers,
  // /de/cuisine-connectee/airfryers → /de/guides/airfryers. Only exact
  // /{lang}/{alias} matches; the redirect stays inside the current locale.
  const canonical = isValidLang(langSegment) ? aliasTarget(segments.slice(2).join('/')) : undefined
  if (canonical) {
    const url = request.nextUrl.clone()
    url.pathname = `/${langSegment}${canonical}`
    return NextResponse.redirect(url, 301)
  }

  // Static CSP: the site has no visitor-authored content, so inline <script>
  // tags we emit (JSON-LD schemas) and Next.js's own hydration scripts are
  // covered by 'unsafe-inline'. In dev we also need 'unsafe-eval' for HMR.
  // Keeping the CSP static lets every route be prerendered — removing the
  // per-request nonce was the last thing forcing dynamic rendering.
  const isDev = process.env.NODE_ENV === 'development'

  const scriptSrc = ["'self'", "'unsafe-inline'", isDev ? "'unsafe-eval'" : '']
    .filter(Boolean)
    .join(' ')

  const csp = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline'",
    // No Amazon image CDN: the site may not show Amazon product images
    // without Amazon's product API (Associates Operating Agreement).
    "img-src 'self' data: https://img.youtube.com",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    'upgrade-insecure-requests',
  ].join('; ')

  const response = NextResponse.next()

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin')
  response.headers.set('Cross-Origin-Resource-Policy', 'same-origin')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  )
  response.headers.set('Content-Security-Policy', csp)

  // Expose the visitor's country (Vercel geo) so the static pages can offer
  // the matching version client-side (components/LocaleNotices.tsx). Deep
  // links are never redirected: the visitor stays on the page they asked for.
  const country = request.headers.get('x-vercel-ip-country')?.toUpperCase()
  if (country && /^[A-Z]{2}$/.test(country)) {
    response.cookies.set(COUNTRY_COOKIE, country, { path: '/', maxAge: 60 * 60 * 24, sameSite: 'lax' })
  }

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|products/).*)'],
}
