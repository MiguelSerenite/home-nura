/**
 * Phase X — outbound affiliate URL integrity.
 *
 * The single thing that turns this site into revenue is the Amazon
 * outbound link. Every broken tag, every wrong marketplace domain,
 * every mistyped ASIN is a silently-lost commission with no user-
 * visible error anywhere. Nothing else in the test suite catches a
 * bad URL because the page still renders — the cash register just
 * stops ringing.
 *
 * These tests act as a hard gate on the three components of the
 * generated URL: the marketplace domain, the ASIN path, and the
 * partner tag query parameter. A typo in any of them breaks the
 * build.
 */

import { describe, it, expect } from 'vitest'
import { AMAZON_MISSING_ASINS, amazonMarket } from '@/lib/amazon'
import { staticProducts, getStaticProducts } from '@/lib/products'
import { LANGUAGES } from '@/lib/i18n'

// Amazon ASINs are always 10 characters, uppercase alphanumeric.
// Historically pre-2000 books used ISBN-10 which are the same shape.
const ASIN_PATTERN = /^[A-Z0-9]{10}$/

// Each locale links to its market (lib/amazon.ts, values pinned in
// tests/lib/amazon-search.test.ts): amazon.it with homaviseit-21 for
// Italian, amazon.fr with the locale's tracking ID everywhere else (Amazon
// Global Earning sends foreign readers to their own store).

describe('product ASIN integrity', () => {
  it('every staticProduct has a 10-char uppercase alphanumeric ASIN', () => {
    for (const product of staticProducts) {
      expect(product.asin, `product "${product.title.fr}" has invalid ASIN`).toMatch(
        ASIN_PATTERN
      )
    }
  })

  it('ASINs are unique across the catalog', () => {
    const asins = staticProducts.map((p) => p.asin)
    const unique = new Set(asins)
    expect(
      unique.size,
      `duplicate ASINs detected: ${asins.length - unique.size} dup(s)`
    ).toBe(asins.length)
  })
})

describe('outbound URL per locale', () => {
  for (const lang of LANGUAGES) {
    describe(`locale: ${lang}`, () => {
      const resolved = getStaticProducts(lang)
      const market = amazonMarket(lang)
      const missing: Readonly<Record<string, string>> = AMAZON_MISSING_ASINS[lang] ?? {}

      it('emits at least one product', () => {
        expect(resolved.length).toBeGreaterThan(0)
      })

      it('every URL is a parseable HTTPS URL', () => {
        for (const product of resolved) {
          const url = new URL(product.url)
          expect(url.protocol, `${lang} / ${product.asin}`).toBe('https:')
        }
      })

      it('every URL points at the locale store', () => {
        for (const product of resolved) {
          const url = new URL(product.url)
          expect(url.origin, `${lang} / ${product.asin} — wrong store`).toBe(market.baseUrl)
        }
      })

      it('every URL path carries the product ASIN, or searches a model the store lacks', () => {
        for (const product of resolved) {
          const url = new URL(product.url)
          if (product.asin in missing) {
            expect(url.pathname, `${lang} / ${product.asin}`).toBe('/s')
            expect(url.searchParams.get('k'), `${lang} / ${product.asin}`).toBe(missing[product.asin])
          } else {
            expect(url.pathname, `${lang} / ${product.asin} — ASIN missing from path`).toBe(`/dp/${product.asin}`)
          }
        }
      })

      it('every URL carries the locale tracking ID', () => {
        for (const product of resolved) {
          const tag = new URL(product.url).searchParams.get('tag')
          expect(tag, `${lang} / ${product.asin} — wrong or missing tag`).toBe(market.tag)
        }
      })
    })
  }
})
