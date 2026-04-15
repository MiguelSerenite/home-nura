/**
 * Phase V — i18n parity enforcement.
 *
 * These tests are the "European war machine" safety net: they fail the
 * CI build the moment a translator forgets a key, a product launches
 * with 5 locales instead of 6, or a dictionary drifts out of shape.
 *
 * They are deliberately mechanical — pure structural comparisons, no
 * language heuristics — so they stay green on legitimate edits (new
 * key added to every locale at once) and red on real bugs (new key
 * added to one locale only).
 */

import { describe, it, expect } from 'vitest'
import { LANGUAGES, type Lang } from '@/lib/i18n'
import { staticProducts } from '@/lib/products'
import { getAllArticles } from '@/lib/blog'

// Prefixed to avoid colliding with vitest's `it` export.
import dictFr from '../../dictionaries/fr.json'
import dictEn from '../../dictionaries/en.json'
import dictDe from '../../dictionaries/de.json'
import dictEs from '../../dictionaries/es.json'
import dictIt from '../../dictionaries/it.json'
import dictNl from '../../dictionaries/nl.json'

type Dict = Record<string, unknown>

const dictionaries: Record<Lang, Dict> = {
  fr: dictFr,
  en: dictEn,
  de: dictDe,
  es: dictEs,
  it: dictIt,
  nl: dictNl,
}

/**
 * Extract every leaf path from a dictionary as a sorted flat array.
 *
 * Object keys are joined with dots; array indices are joined the same
 * way so a FAQ list like `faq[0].question` becomes `'faq.0.question'`.
 * We return a sorted array so two dicts with the same shape produce
 * the same signature regardless of key ordering in JSON.
 */
function leafPaths(value: unknown, prefix = ''): string[] {
  if (value === null || value === undefined) {
    return [prefix || '<root>']
  }
  if (Array.isArray(value)) {
    return value.flatMap((v, i) => leafPaths(v, prefix ? `${prefix}.${i}` : String(i)))
  }
  if (typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>).flatMap(([k, v]) =>
      leafPaths(v, prefix ? `${prefix}.${k}` : k)
    )
  }
  return [prefix || '<root>']
}

function getAtPath(value: unknown, path: string): unknown {
  if (!path) return value
  const parts = path.split('.')
  let cursor: unknown = value
  for (const part of parts) {
    if (cursor === null || cursor === undefined) return undefined
    if (Array.isArray(cursor)) {
      cursor = cursor[Number(part)]
    } else if (typeof cursor === 'object') {
      cursor = (cursor as Record<string, unknown>)[part]
    } else {
      return undefined
    }
  }
  return cursor
}

describe('dictionary parity', () => {
  const frPaths = leafPaths(dictFr).sort()

  it('every locale has the same leaf path structure as French', () => {
    for (const lang of LANGUAGES) {
      if (lang === 'fr') continue
      const paths = leafPaths(dictionaries[lang]).sort()
      const missing = frPaths.filter((p) => !paths.includes(p))
      const extra = paths.filter((p) => !frPaths.includes(p))
      expect(
        { missing, extra },
        `dictionary drift in ${lang}.json — missing keys or extra keys vs fr`
      ).toEqual({ missing: [], extra: [] })
    }
  })

  it('every leaf value is a non-empty string in every locale', () => {
    for (const lang of LANGUAGES) {
      for (const path of frPaths) {
        const value = getAtPath(dictionaries[lang], path)
        expect(typeof value, `${lang}.json: ${path} must be a string`).toBe('string')
        expect(
          (value as string).length,
          `${lang}.json: ${path} must be non-empty`
        ).toBeGreaterThan(0)
      }
    }
  })

  it('English is not a verbatim copy of French (sanity — catches unshipped locales)', () => {
    // Spot-check a subset of semantic keys. We don't enforce this
    // across every key (brand names, UI tokens like "OK" can
    // legitimately match) — just a representative handful.
    const semanticKeys = [
      'welcome',
      'description',
      'buy_button',
      'section_title',
      'guide_title',
    ]
    for (const key of semanticKeys) {
      const frVal = (dictFr as Record<string, unknown>)[key]
      const enVal = (dictEn as Record<string, unknown>)[key]
      if (typeof frVal === 'string' && typeof enVal === 'string') {
        expect(
          enVal,
          `en.json: "${key}" is identical to fr — probably untranslated`
        ).not.toBe(frVal)
      }
    }
  })
})

describe('staticProducts locale parity', () => {
  it('has at least one product', () => {
    expect(staticProducts.length).toBeGreaterThan(0)
  })

  it('every product has all 6 locales for every Record<string, ...> field', () => {
    for (const product of staticProducts) {
      const label = `product ${product.asin}`

      // String-valued per-locale fields
      for (const field of ['title', 'price', 'bestFor'] as const) {
        const record = product[field]
        for (const lang of LANGUAGES) {
          const value = record[lang]
          expect(
            typeof value === 'string' && value.length > 0,
            `${label}.${field}.${lang} missing or empty`
          ).toBe(true)
        }
      }

      // Numeric price per locale
      for (const lang of LANGUAGES) {
        expect(
          typeof product.priceNumeric[lang] === 'number' && product.priceNumeric[lang] > 0,
          `${label}.priceNumeric.${lang} missing or zero`
        ).toBe(true)
      }

      // String-array per-locale fields
      for (const field of ['pros', 'cons'] as const) {
        const record = product[field]
        for (const lang of LANGUAGES) {
          const list = record[lang]
          expect(Array.isArray(list), `${label}.${field}.${lang} must be an array`).toBe(true)
          expect(list.length, `${label}.${field}.${lang} must have at least one entry`).toBeGreaterThan(0)
          for (const entry of list) {
            expect(
              typeof entry === 'string' && entry.length > 0,
              `${label}.${field}.${lang} has empty entry`
            ).toBe(true)
          }
        }
      }

      // Image arrays per locale
      for (const lang of LANGUAGES) {
        const images = product.images[lang]
        expect(Array.isArray(images), `${label}.images.${lang} must be an array`).toBe(true)
        expect(images.length, `${label}.images.${lang} must have at least one image`).toBeGreaterThan(0)
      }

      // badge is optional — but if present for one locale, it must be present for all.
      if (product.badge) {
        for (const lang of LANGUAGES) {
          expect(
            typeof product.badge[lang] === 'string' && product.badge[lang].length > 0,
            `${label}.badge.${lang} missing — badge must be all-or-nothing across locales`
          ).toBe(true)
        }
      }
    }
  })
})

describe('blog article content parity', () => {
  // Complements tests/lib/blog.test.ts which already covers title + excerpt.
  // This one specifically enforces the body content field, which is the
  // largest source of locale drift risk for a multilingual affiliate site.
  it('every article has non-empty content for all 6 locales', () => {
    for (const article of getAllArticles()) {
      for (const lang of LANGUAGES) {
        const body = article.content[lang]
        expect(
          typeof body === 'string' && body.length > 0,
          `${article.slug}: content.${lang} missing or empty`
        ).toBe(true)
      }
    }
  })

  it('localized content is distinct from French (catches unshipped locales)', () => {
    // Spot check: the first 200 chars of non-French content must differ
    // from French. Catches "article shipped with content.fr copy-pasted
    // into every other locale" — the most common drift mode.
    for (const article of getAllArticles()) {
      const frPrefix = article.content.fr.slice(0, 200)
      for (const lang of LANGUAGES) {
        if (lang === 'fr') continue
        const langPrefix = article.content[lang].slice(0, 200)
        expect(
          langPrefix,
          `${article.slug}: content.${lang} opens identically to content.fr — probably untranslated`
        ).not.toBe(frPrefix)
      }
    }
  })
})
