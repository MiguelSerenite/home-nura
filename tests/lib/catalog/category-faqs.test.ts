import { describe, it, expect } from 'vitest'
import { getIndexableCategories, getCategory, getCategoryFaq } from '@/lib/catalog'
import { CATEGORIES } from '@/lib/catalog/categories'
import {
  CATEGORY_FAQS,
  CATEGORY_FAQS_UPDATED_ISO,
  FAQ_LOCALES,
  categoryModifiedIso,
  getCategorySpecificFaq,
} from '@/lib/catalog/category-faqs'
import { checkFaqSet, checkFaqSetsUnique, firstSentence } from '@/lib/catalog/category-faqs/quality'
import { LANGUAGES } from '@/lib/i18n'
import { getSmartKitchenFaqs } from '@/lib/smart-kitchen-faqs'
import { SMART_KITCHEN_CATEGORIES } from '@/lib/smart-kitchen-products'

// Generic hubs render through CategoryHub; the indexable cuisine pages
// (air fryer guide + smart-kitchen routes) read the same data.
const GENERIC_HUBS = getIndexableCategories().filter((c) => c.metaSilo !== 'cuisine-connectee')
const CUISINE_PAGES = getIndexableCategories().filter((c) => c.metaSilo === 'cuisine-connectee')

describe('category FAQs', () => {
  it('cover every indexable generic hub in every FAQ locale', () => {
    const missing = GENERIC_HUBS.filter((c) => !CATEGORY_FAQS[c.slug]).map((c) => c.slug)
    expect(missing).toEqual([])
  })

  it('only use known category slugs', () => {
    const unknown = Object.keys(CATEGORY_FAQS).filter((slug) => !getCategory(slug))
    expect(unknown).toEqual([])
  })

  it('follow the editorial rules (5-8 entries, answer-first, no test claim, no URL)', () => {
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
    expect(getCategorySpecificFaq('thermostats', 'xx')).toBeUndefined()
    expect(getCategorySpecificFaq('no-such-category', 'fr')).toBeUndefined()
  })
})

describe('cuisine FAQs', () => {
  it('cover the air fryer guide and every indexable cuisine page', () => {
    const missing = CUISINE_PAGES.filter((c) => !CATEGORY_FAQS[c.slug]).map((c) => c.slug)
    expect(missing).toEqual([])
  })

  it('give the air fryer guide 8 questions in every FAQ locale', () => {
    for (const locale of FAQ_LOCALES) {
      expect(getCategorySpecificFaq('airfryers', locale)?.length, locale).toBe(8)
    }
  })

  it('are what the smart-kitchen pages render, in every site locale', () => {
    for (const category of SMART_KITCHEN_CATEGORIES) {
      for (const lang of LANGUAGES) {
        expect(getSmartKitchenFaqs(lang, category)).toEqual(CATEGORY_FAQS[category][lang])
      }
    }
  })
})

describe('categoryModifiedIso', () => {
  it('uses the FAQ review date for hubs with a written FAQ', () => {
    expect(categoryModifiedIso(GENERIC_HUBS[0].slug, '2026-01-01')).toBe(CATEGORY_FAQS_UPDATED_ISO)
  })

  it('keeps a newer site date and the site date for hubs without FAQ', () => {
    expect(categoryModifiedIso(GENERIC_HUBS[0].slug, '2099-01-01')).toBe('2099-01-01')
    const withoutFaq = CATEGORIES.find((c) => !CATEGORY_FAQS[c.slug])!.slug
    expect(categoryModifiedIso(withoutFaq, '2026-01-01')).toBe('2026-01-01')
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
