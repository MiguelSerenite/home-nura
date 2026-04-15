/**
 * Phase W — middleware security header enforcement.
 *
 * The CSP + HSTS + nonce pipeline in middleware.ts is the single
 * most important security boundary on the site: it's what makes
 * script-src actually mean something and what keeps a hypothetical
 * XSS from auto-loading a third-party payload. A silent regression
 * here would not show up on any user-visible page until an attacker
 * exploited it.
 *
 * These tests exercise the middleware with a synthetic NextRequest
 * for a normal "inside locale" path (avoiding the root-redirect and
 * invalid-lang branches) and assert the security contract:
 *
 *   1. Every security header is present and correctly valued
 *   2. The CSP contains a nonce and strict-dynamic
 *   3. The nonce is echoed to `x-nonce` for server components to read
 *   4. The Permissions-Policy locks down camera/mic/geolocation
 *   5. HSTS includes preload + subdomains and a year-long max-age
 */

import { describe, it, expect } from 'vitest'
import { NextRequest } from 'next/server'
import { middleware } from '@/middleware'

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

  it('sets a Content-Security-Policy with strict-dynamic and a nonce', () => {
    const csp = response.headers.get('Content-Security-Policy')
    expect(csp).toBeTruthy()
    expect(csp).toMatch(/default-src 'self'/)
    expect(csp).toMatch(/script-src[^;]*'strict-dynamic'/)
    expect(csp).toMatch(/script-src[^;]*'nonce-[A-Za-z0-9+/=]{20,}'/)
    expect(csp).toMatch(/frame-ancestors 'none'/)
    expect(csp).toMatch(/base-uri 'self'/)
    expect(csp).toMatch(/form-action 'self'/)
  })

  it('allow-lists Amazon + YouTube image sources', () => {
    const csp = response.headers.get('Content-Security-Policy') ?? ''
    expect(csp).toMatch(/m\.media-amazon\.com/)
    expect(csp).toMatch(/images-na\.ssl-images-amazon\.com/)
    expect(csp).toMatch(/img\.youtube\.com/)
  })

  it('allow-lists YouTube as the only permitted iframe embed source', () => {
    const csp = response.headers.get('Content-Security-Policy') ?? ''
    expect(csp).toMatch(/frame-src[^;]*youtube\.com/)
    expect(csp).toMatch(/frame-src[^;]*youtube-nocookie\.com/)
  })

  it('echoes the per-request nonce on x-nonce for server components', () => {
    const nonce = response.headers.get('x-nonce')
    expect(nonce).toBeTruthy()
    expect(nonce!.length).toBeGreaterThanOrEqual(20)

    const csp = response.headers.get('Content-Security-Policy') ?? ''
    expect(csp).toContain(`'nonce-${nonce}'`)
  })

  it('generates a fresh nonce per request', () => {
    const a = invoke('/fr').headers.get('x-nonce')
    const b = invoke('/fr').headers.get('x-nonce')
    expect(a).toBeTruthy()
    expect(b).toBeTruthy()
    expect(a).not.toBe(b)
  })
})

describe('middleware locale routing', () => {
  it('redirects the root path to the negotiated locale', () => {
    const request = new NextRequest(new URL('http://localhost/'), {
      headers: { 'accept-language': 'de-DE,de;q=0.9' },
    })
    const res = middleware(request) as Response
    expect(res.status).toBe(302)
    expect(res.headers.get('location')).toMatch(/\/de$/)
    // Vary hint so a CDN doesn't pin one locale for every visitor
    expect(res.headers.get('Vary')).toMatch(/Accept-Language/)
  })

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
})
