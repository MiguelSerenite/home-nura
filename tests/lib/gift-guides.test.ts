import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { getCategory } from '@/lib/catalog'
import { GIFT_GUIDES, getGiftGuide, giftGuideCards, giftGuidePath, giftGuidesFor } from '@/lib/gift-guides'
import { giftGuideMetadata, giftGuideStaticParams, resolveGiftGuide } from '@/lib/gift-guides/routes'
import { LANGUAGES, LOCALE_LIMITED_SECTIONS, switchLocalePath } from '@/lib/i18n'
import { BASE_URL } from '@/lib/seo'

// Prices, discounts, urgency and test claims: tests/lib/black-friday.test.ts
// (its visible copy includes every gift guide).

describe('gift guides', () => {
  it('ships the Sinterklaas page for /nl at a stable URL, before pakjesavond', () => {
    const guide = getGiftGuide('sinterklaas')!
    expect(guide.lang).toBe('nl')
    expect(giftGuidePath(guide)).toBe('/sinterklaas')
    expect(guide.eventDateISO).toBe('2026-12-05')
    expect(guide.h1).toBe('Sinterklaas 2026: cadeau-ideeën voor in huis')
    expect(giftGuidesFor('nl')).toEqual([guide])
  })

  it('has one route per guide, prerendered for its own locale only', () => {
    expect(new Set(GIFT_GUIDES.map((g) => g.slug)).size).toBe(GIFT_GUIDES.length)
    for (const guide of GIFT_GUIDES) {
      expect(existsSync(join(process.cwd(), 'app', '[lang]', guide.slug, 'page.tsx')), guide.slug).toBe(true)
      expect(giftGuideStaticParams(guide.slug)).toEqual([{ lang: guide.lang }])
      for (const lang of LANGUAGES) {
        expect(resolveGiftGuide(guide.slug, lang), `${lang}${giftGuidePath(guide)}`).toBe(lang === guide.lang ? guide : undefined)
      }
    }
    expect(giftGuideStaticParams('pakjesavond')).toEqual([])
  })

  it('names itself only in hreflang (one locale, no x-default)', () => {
    for (const guide of GIFT_GUIDES) {
      const meta = giftGuideMetadata(guide)
      expect(meta.alternates?.canonical).toBe(`${BASE_URL}/${guide.lang}/${guide.slug}`)
      expect(Object.values(meta.alternates?.languages ?? {})).toEqual([`${BASE_URL}/${guide.lang}/${guide.slug}`])
    }
  })

  it('sends a language switch to that locale\'s Black Friday hub', () => {
    for (const guide of GIFT_GUIDES) {
      expect(LOCALE_LIMITED_SECTIONS).toContainEqual({ prefix: giftGuidePath(guide), langs: [guide.lang], fallback: '/black-friday' })
    }
    expect(switchLocalePath('/nl/sinterklaas', 'fr')).toBe('/fr/black-friday')
    expect(switchLocalePath('/nl/sinterklaas', 'nl')).toBe('/nl/sinterklaas')
  })

  it('links 6 to 8 distinct, indexable catalog categories, each to its landing page', () => {
    for (const guide of GIFT_GUIDES) {
      expect(guide.cards.length, guide.slug).toBeGreaterThanOrEqual(6)
      expect(guide.cards.length, guide.slug).toBeLessThanOrEqual(8)
      expect(new Set(guide.cards.map((c) => c.category)).size, guide.slug).toBe(guide.cards.length)
      for (const card of guide.cards) expect(getCategory(card.category)?.indexable, `${guide.slug}: ${card.category}`).toBe(true)
      const links = giftGuideCards(guide)
      expect(links.find((c) => c.category === 'airfryers')?.path, guide.slug).toBe('/guides/airfryers')
    }
  })

  it('carries the year of the occasion and a 4-5 question FAQ', () => {
    for (const guide of GIFT_GUIDES) {
      const year = guide.eventDateISO.slice(0, 4)
      expect(guide.h1, guide.slug).toContain(year)
      expect(guide.metaTitle, guide.slug).toContain(year)
      expect(guide.label, guide.slug).toContain(year)
      expect(guide.faq.length, guide.slug).toBeGreaterThanOrEqual(4)
      expect(guide.faq.length, guide.slug).toBeLessThanOrEqual(5)
      expect([guide.label, guide.h1, guide.intro, ...guide.cards.map((c) => c.line)].filter((s) => s.trim() === ''), guide.slug).toEqual([])
    }
  })
})
