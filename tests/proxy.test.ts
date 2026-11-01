/**
 * Phase W — middleware security header enforcement (refonte/static).
 *
 * The CSP + HSTS pipeline in middleware.ts is the single most
 * important security boundary on the site. A silent regression here
 * would not show up on any user-visible page until an attacker
 * exploited it.
 *
 * Since the site has no visitor-authored content, we trade the
 * per-request nonce for a static CSP so every route can be
 * prerendered. The remaining contract is still asserted:
 *
 *   1. Every security header is present and correctly valued
 *   2. The CSP is static with script-src 'self' 'unsafe-inline'
 *   3. No nonce is emitted (x-nonce header is gone)
 *   4. The Permissions-Policy locks down camera/mic/geolocation
 *   5. HSTS includes preload + subdomains and a year-long max-age
 */

import { LANGUAGES } from '@/lib/i18n'
import { describe, it, expect } from 'vitest'
import { NextRequest } from 'next/server'
import { proxy as middleware } from '@/proxy'

function invoke(pathname: string = '/fr/guides/airfryers'): Response {
  const request = new NextRequest(new URL(`http://localhost${pathname}`), {
    // NextRequest accepts RequestInit with headers; we omit cookies
    // so middleware falls through to Accept-Language / geo negotiation
    // (irrelevant on non-root paths — it just emits security headers).
    headers: {
      'accept-language': 'fr-FR,fr;q=0.9',
    },
  })
  const result = middleware(request)
  if (!(result instanceof Response)) {
    throw new Error('middleware did not return a Response')
  }
  return result
}

describe('middleware security headers', () => {
  const response = invoke()

  it('sets X-Content-Type-Options: nosniff', () => {
    expect(response.headers.get('X-Content-Type-Options')).toBe('nosniff')
  })

  it('sets X-Frame-Options: DENY', () => {
    expect(response.headers.get('X-Frame-Options')).toBe('DENY')
  })

  it('sets Referrer-Policy: strict-origin-when-cross-origin', () => {
    expect(response.headers.get('Referrer-Policy')).toBe(
      'strict-origin-when-cross-origin'
    )
  })

  it('locks down camera, microphone and geolocation via Permissions-Policy', () => {
    const pp = response.headers.get('Permissions-Policy')
    expect(pp).toBeTruthy()
    expect(pp).toMatch(/camera=\(\)/)
    expect(pp).toMatch(/microphone=\(\)/)
    expect(pp).toMatch(/geolocation=\(\)/)
  })

  it('emits a year-long HSTS with preload + subdomains', () => {
    const hsts = response.headers.get('Strict-Transport-Security')
    expect(hsts).toBeTruthy()
    expect(hsts).toMatch(/max-age=31536000/)
    expect(hsts).toMatch(/includeSubDomains/)
    expect(hsts).toMatch(/preload/)
  })

  it('sets a static Content-Security-Policy with unsafe-inline scripts', () => {
    const csp = response.headers.get('Content-Security-Policy')
    expect(csp).toBeTruthy()
    expect(csp).toMatch(/default-src 'self'/)
    expect(csp).toMatch(/script-src[^;]*'self'/)
    expect(csp).toMatch(/script-src[^;]*'unsafe-inline'/)
    expect(csp).not.toMatch(/'nonce-/)
    expect(csp).not.toMatch(/'strict-dynamic'/)
    expect(csp).toMatch(/frame-ancestors 'none'/)
    expect(csp).toMatch(/base-uri 'self'/)
    expect(csp).toMatch(/form-action 'self'/)
  })

  it('allow-lists YouTube images and no Amazon image CDN', () => {
    const csp = response.headers.get('Content-Security-Policy') ?? ''
    expect(csp).toMatch(/img-src[^;]*img\.youtube\.com/)
    expect(csp).not.toMatch(/media-amazon|images-amazon/)
  })

  it('allow-lists YouTube as the only permitted iframe embed source', () => {
    const csp = response.headers.get('Content-Security-Policy') ?? ''
    expect(csp).toMatch(/frame-src[^;]*youtube\.com/)
    expect(csp).toMatch(/frame-src[^;]*youtube-nocookie\.com/)
  })

  it('does not emit the deprecated x-nonce header', () => {
    expect(response.headers.get('x-nonce')).toBeNull()
  })

  it('emits a stable CSP across requests (no per-request nonce)', () => {
    const a = invoke('/fr').headers.get('Content-Security-Policy')
    const b = invoke('/fr').headers.get('Content-Security-Policy')
    expect(a).toBeTruthy()
    expect(b).toBeTruthy()
    expect(a).toBe(b)
  })
})

describe('middleware static CSP (refonte/static)', () => {
  const response = invoke()
  const csp = response.headers.get('Content-Security-Policy') ?? ''
  const scriptSrc = csp.split(';').map((d) => d.trim()).find((d) => d.startsWith('script-src')) ?? ''

  it('restricts script-src to self + unsafe-inline (no https: wildcard)', () => {
    expect(scriptSrc).toContain("'self'")
    expect(scriptSrc).toContain("'unsafe-inline'")
    expect(scriptSrc).not.toMatch(/\shttps:(\s|$)/)
  })

  it('does not emit unsafe-eval outside development builds', () => {
    // Vitest runs with NODE_ENV=test, so 'unsafe-eval' should be absent.
    expect(scriptSrc).not.toContain("'unsafe-eval'")
  })

  it('blocks plugins and upgrades insecure requests', () => {
    expect(csp).toContain("object-src 'none'")
    expect(csp).toContain('upgrade-insecure-requests')
  })

  it('isolates the browsing context and resources', () => {
    expect(response.headers.get('Cross-Origin-Opener-Policy')).toBe('same-origin')
    expect(response.headers.get('Cross-Origin-Resource-Policy')).toBe('same-origin')
  })

  it('drops the deprecated X-XSS-Protection header', () => {
    expect(response.headers.get('X-XSS-Protection')).toBeNull()
  })
})

const GOOGLEBOT = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
const CHROME = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'

/** Run the proxy on `pathname` with these request headers (cookies as a Cookie header). */
function run(pathname: string, headers: Record<string, string> = {}): Response {
  return middleware(new NextRequest(new URL(`http://localhost${pathname}`), { headers: { 'user-agent': CHROME, ...headers } })) as Response
}

/** NextResponse.next(): the request goes on to the page, no redirect. */
const passesThrough = (res: Response) => res.headers.get('x-middleware-next') === '1' && res.headers.get('location') === null

describe('the entry page (/)', () => {
  it('is shown to visitors without a remembered choice, whatever their country or browser language', () => {
    const visitors: Record<string, string>[] = [
      {},
      { 'accept-language': 'de-DE,de;q=0.9' },
      { 'accept-language': 'en-US,en;q=0.9', 'x-vercel-ip-country': 'US' },
      { 'accept-language': 'fr-BE,fr;q=0.9,nl;q=0.8', 'x-vercel-ip-country': 'BE' },
      { 'accept-language': 'ja-JP', 'x-vercel-ip-country': 'JP' },
      { 'accept-language': 'pt-BR,pt;q=0.9', 'x-vercel-ip-country': 'DE' },
    ]
    for (const headers of visitors) expect(passesThrough(run('/', headers)), JSON.stringify(headers)).toBe(true)
  })

  it('sends a visitor who chose a version straight to it (302: the choice can change)', () => {
    const res = run('/', { cookie: 'hn_market=us', 'x-vercel-ip-country': 'FR', 'accept-language': 'fr-FR' })
    expect(res.status).toBe(302)
    expect(res.headers.get('location')).toMatch(/\/us$/)
    expect(res.headers.get('Vary')).toMatch(/Cookie/)
    expect(res.headers.get('Cache-Control')).toMatch(/no-store/)
    for (const lang of LANGUAGES) expect(run('/', { cookie: `hn_market=${lang}` }).headers.get('location'), lang).toMatch(new RegExp(`/${lang}$`))
  })

  it('ignores a preference cookie that names no version', () => {
    for (const value of ['', 'xx', 'FR', 'catalan', '../fr']) {
      expect(passesThrough(run('/', { cookie: `hn_market=${encodeURIComponent(value)}` })), value).toBe(true)
    }
  })

  it('migrates the old NEXT_LOCALE choice to hn_market once', () => {
    const res = run('/', { cookie: 'NEXT_LOCALE=de' })
    expect(res.status).toBe(302)
    expect(res.headers.get('location')).toMatch(/\/de$/)
    const setCookie = res.headers.get('set-cookie') ?? ''
    expect(setCookie).toMatch(/hn_market=de/)
    expect(setCookie).toMatch(/Max-Age=31536000/i)
    expect(setCookie).toMatch(/SameSite=lax/i)
    expect(setCookie).toMatch(/NEXT_LOCALE=;/)
    // hn_market wins over the legacy cookie.
    expect(run('/', { cookie: 'NEXT_LOCALE=de; hn_market=it' }).headers.get('location')).toMatch(/\/it$/)
  })

  it('never redirects crawlers: they get the entry page, even with a cookie', () => {
    for (const ua of [GOOGLEBOT, 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)', 'facebookexternalhit/1.1', '']) {
      expect(passesThrough(run('/', { 'user-agent': ua, 'x-vercel-ip-country': 'US' })), ua).toBe(true)
      expect(passesThrough(run('/', { 'user-agent': ua, cookie: 'hn_market=us' })), ua).toBe(true)
    }
  })

  it('sends the entry page with the security headers and the country cookie', () => {
    const res = run('/', { 'x-vercel-ip-country': 'BE' })
    expect(res.headers.get('Content-Security-Policy')).toMatch(/default-src 'self'/)
    expect(res.headers.get('set-cookie') ?? '').toMatch(/hn_country=BE/)
  })
})

describe('deep links never redirect', () => {
  const PATHS = ['', '/blog', '/guides/airfryers', '/black-friday', '/cuisine-connectee/cafetieres', '/methodologie']

  it('keeps the visitor on the requested page whatever their cookie, country or browser language', () => {
    for (const lang of LANGUAGES) {
      const other = lang === 'us' ? 'fr' : 'us'
      for (const path of PATHS) {
        const res = run(`/${lang}${path}`, {
          cookie: `hn_market=${other}; NEXT_LOCALE=${other}`,
          'x-vercel-ip-country': other === 'us' ? 'US' : 'FR',
          'accept-language': other === 'us' ? 'en-US,en;q=0.9' : 'fr-FR,fr;q=0.9',
        })
        expect(passesThrough(res), `/${lang}${path}`).toBe(true)
      }
    }
  })

  it('keeps market pages and their query string (the switch notice) untouched', () => {
    expect(passesThrough(run('/us/vs/ring-vs-blink', { cookie: 'hn_market=fr', 'x-vercel-ip-country': 'FR' }))).toBe(true)
    expect(passesThrough(run('/fr/securite-maison/sonnettes-video?switched=market&from=us', { 'x-vercel-ip-country': 'US' }))).toBe(true)
  })
})

describe('middleware locale routing', () => {
  it('redirects an unknown 2-letter lang segment to the default locale', () => {
    const request = new NextRequest(new URL('http://localhost/xy/blog'))
    const res = middleware(request) as Response
    expect(res.status).toBe(301)
    expect(res.headers.get('location')).toMatch(/\/fr\/blog$/)
  })

  it('rewrites /{lang}/guide to the canonical airfryer guide', () => {
    const request = new NextRequest(new URL('http://localhost/en/guide'))
    const res = middleware(request) as Response
    expect(res.status).toBe(301)
    expect(res.headers.get('location')).toMatch(/\/en\/guides\/airfryers$/)
  })

  it('redirects /it/chi-siamo to the about page instead of looping on itself', () => {
    const request = new NextRequest(new URL('http://localhost/it/chi-siamo'))
    const res = middleware(request) as Response
    expect(res.status).toBe(301)
    expect(res.headers.get('location')).toMatch(/\/it\/a-propos$/)
  })

  it('ignores Object prototype keys in the slug alias table', () => {
    for (const key of ['constructor', 'toString', 'hasOwnProperty']) {
      const request = new NextRequest(new URL(`http://localhost/fr/${key}`))
      const res = middleware(request) as Response
      expect(res.status, key).not.toBe(301)
    }
  })

  it('sends the dead /cuisine-connectee/airfryers hub to the air fryer guide in every locale', () => {
    for (const lang of LANGUAGES) {
      const request = new NextRequest(new URL(`http://localhost/${lang}/cuisine-connectee/airfryers`))
      const res = middleware(request) as Response
      expect(res.status, lang).toBe(301)
      expect(res.headers.get('location'), lang).toMatch(new RegExp(`/${lang}/guides/airfryers$`))
    }
  })

  it('leaves the other smart kitchen category pages alone', () => {
    const request = new NextRequest(new URL('http://localhost/fr/cuisine-connectee/cafetieres'))
    const res = middleware(request) as Response
    expect(res.status).not.toBe(301)
  })
})

describe('proxy geo country cookie', () => {
  it('exposes the visitor country to the client for the locale suggestion banner', () => {
    const request = new NextRequest(new URL('http://localhost/en/blog'), {
      headers: { 'x-vercel-ip-country': 'ES', 'accept-language': 'en-US' },
    })
    const res = middleware(request) as Response
    expect(res.headers.get('set-cookie') ?? '').toMatch(/hn_country=ES/)
  })

  it('sets no country cookie when the platform gives no country', () => {
    const res = middleware(new NextRequest(new URL('http://localhost/en/blog'))) as Response
    expect(res.headers.get('set-cookie') ?? '').not.toMatch(/hn_country=/)
  })
})
