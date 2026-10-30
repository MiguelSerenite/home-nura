import { describe, it, expect } from 'vitest'
import { getIndexableCategories, getCategory, getCategoryFaq } from '@/lib/catalog'
import {
  CATEGORY_FAQS,
  CATEGORY_FAQS_UPDATED_ISO,
  FAQ_LOCALES,
  categoryModifiedIso,
  getCategorySpecificFaq,
} from '@/lib/catalog/category-faqs'
import { checkFaqSet, checkFaqSetsUnique, firstSentence } from '@/lib/catalog/category-faqs/quality'
import { LANGUAGES } from '@/lib/i18n'

// The cuisine silo has its own hand-written FAQ (lib/smart-kitchen-faqs.ts).
const GENERIC_HUBS = getIndexableCategories().filter((c) => c.metaSilo !== 'cuisine-connectee')

describe('category FAQs', () => {
  it('cover every indexable generic hub in every FAQ locale', () => {
    const missing = GENERIC_HUBS.filter((c) => !CATEGORY_FAQS[c.slug]).map((c) => c.slug)
    expect(missing).toEqual([])
  })

  it('only use known category slugs', () => {
    const unknown = Object.keys(CATEGORY_FAQS).filter((slug) => !getCategory(slug))
    expect(unknown).toEqual([])
  })

  it('follow the editorial rules (5 entries, answer-first, no test claim, no URL)', () => {
    const errors = Object.entries(CATEGORY_FAQS).flatMap(([slug, set]) => checkFaqSet(slug, set))
    expect(errors).toEqual([])
  })

  it('never reuse a question or answer between categories', () => {
    expect(checkFaqSetsUnique(CATEGORY_FAQS)).toEqual([])
  })

  it('are what the category hub renders, in every site locale', () => {
    for (const cat of GENERIC_HUBS) {
      for (const lang of LANGUAGES) {
        expect(getCategoryFaq(lang, cat)).toEqual(CATEGORY_FAQS[cat.slug][lang])
      }
    }
  })

  it('include Polish ahead of the /pl locale', () => {
    expect(FAQ_LOCALES).toContain('pl')
    for (const cat of GENERIC_HUBS) {
      expect(getCategorySpecificFaq(cat.slug, 'pl')?.length).toBe(5)
    }
  })

  it('return undefined for an unknown locale or category', () => {
    expect(getCategorySpecificFaq('thermostats', 'sv')).toBeUndefined()
    expect(getCategorySpecificFaq('no-such-category', 'fr')).toBeUndefined()
  })
})

describe('categoryModifiedIso', () => {
  it('uses the FAQ review date for hubs with a written FAQ', () => {
    expect(categoryModifiedIso(GENERIC_HUBS[0].slug, '2026-01-01')).toBe(CATEGORY_FAQS_UPDATED_ISO)
  })

  it('keeps a newer site date and the site date for hubs without FAQ', () => {
    expect(categoryModifiedIso(GENERIC_HUBS[0].slug, '2099-01-01')).toBe('2099-01-01')
    expect(categoryModifiedIso('airfryers', '2026-01-01')).toBe('2026-01-01')
  })
})

describe('firstSentence', () => {
  it('stops at the first sentence end', () => {
    expect(firstSentence('Oui, en général. Mais pas toujours.')).toBe('Oui, en général.')
  })

  it('keeps decimals inside the sentence', () => {
    expect(firstSentence('Comptez 0.5 kWh par heure. Ensuite…')).toBe('Comptez 0.5 kWh par heure.')
  })
})
