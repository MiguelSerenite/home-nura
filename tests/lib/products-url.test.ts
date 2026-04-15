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
import { staticProducts, getStaticProducts } from '@/lib/products'
import { LANGUAGES } from '@/lib/i18n'

// Amazon ASINs are always 10 characters, uppercase alphanumeric.
// Historically pre-2000 books used ISBN-10 which are the same shape.
const ASIN_PATTERN = /^[A-Z0-9]{10}$/

// Home Nura EU partner tags all end with -21 (EU scheme). -20 is US.
// The prefix is free-form but we pin the shape to catch copy-paste
// bugs where a tag from one account sneaks into another locale.
const TAG_PATTERN = /^homenura[a-z0-9]*-21$/

// Expected marketplace domain per locale. Amazon serves different
// catalogs + prices per country — sending a UK visitor to amazon.fr
// is a funnel leak even if the link loads.
const MARKETPLACE_DOMAIN: Record<string, string> = {
  fr: 'www.amazon.fr',
  de: 'www.amazon.de',
  en: 'www.amazon.co.uk',
  es: 'www.amazon.es',
  it: 'www.amazon.it',
  nl: 'www.amazon.nl',
}

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

      it('emits at least one product', () => {
        expect(resolved.length).toBeGreaterThan(0)
      })

      it('every URL is a parseable HTTPS URL', () => {
        for (const product of resolved) {
          const url = new URL(product.url)
          expect(url.protocol, `${lang} / ${product.asin}`).toBe('https:')
        }
      })

      it('every URL points at the correct marketplace domain', () => {
        const expected = MARKETPLACE_DOMAIN[lang]
        for (const product of resolved) {
          const url = new URL(product.url)
          expect(
            url.hostname,
            `${lang} / ${product.asin} — wrong marketplace (funnel leak)`
          ).toBe(expected)
        }
      })

      it('every URL path carries the product ASIN', () => {
        for (const product of resolved) {
          const url = new URL(product.url)
          expect(
            url.pathname,
            `${lang} / ${product.asin} — ASIN missing from path`
          ).toBe(`/dp/${product.asin}`)
        }
      })

      it('every URL carries a valid partner tag', () => {
        for (const product of resolved) {
          const url = new URL(product.url)
          const tag = url.searchParams.get('tag')
          expect(tag, `${lang} / ${product.asin} — missing tag param`).toBeTruthy()
          expect(
            tag!,
            `${lang} / ${product.asin} — tag "${tag}" fails Home Nura EU scheme`
          ).toMatch(TAG_PATTERN)
        }
      })

      it('tag is identical across all products in the same locale', () => {
        // If two products in the same locale emit different tags,
        // one of them is almost certainly a copy-paste mistake — the
        // DEFAULT_PARTNER_TAGS map is supposed to be 1-tag-per-locale.
        const tags = new Set(
          resolved.map((p) => new URL(p.url).searchParams.get('tag'))
        )
        expect(
          tags.size,
          `${lang} has ${tags.size} distinct tags across ${resolved.length} products`
        ).toBe(1)
      })
    })
  }
})

describe('partner tag env override', () => {
  it('respects AMAZON_TAG_FR when set', () => {
    const OVERRIDE = 'homenuraoverride-21'
    const original = process.env.AMAZON_TAG_FR
    process.env.AMAZON_TAG_FR = OVERRIDE
    try {
      const products = getStaticProducts('fr')
      for (const p of products) {
        const tag = new URL(p.url).searchParams.get('tag')
        expect(tag).toBe(OVERRIDE)
      }
    } finally {
      if (original === undefined) delete process.env.AMAZON_TAG_FR
      else process.env.AMAZON_TAG_FR = original
    }
  })
})
