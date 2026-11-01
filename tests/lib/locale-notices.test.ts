import { describe, it, expect } from 'vitest'
import { LANGUAGES, marketVersion, suggestLocalesForCountry, type SwitchReason } from '@/lib/i18n'
import { ARRIVAL_COPY, SUGGESTION_COPY, arrivalMessage, suggestionQuestion } from '@/lib/locale-notices'

const REASONS: SwitchReason[] = ['market', 'black-friday', 'cleaning', 'home']

describe('locale suggestion', () => {
  it('proposes every version of a multilingual country, in COUNTRY_LANGS order', () => {
    expect(suggestLocalesForCountry('BE', 'en')).toEqual(['fr', 'nl'])
    expect(suggestLocalesForCountry('CH', 'us')).toEqual(['de', 'fr', 'it'])
    expect(suggestLocalesForCountry('CA', 'us')).toEqual(['ca', 'fr'])
    expect(suggestLocalesForCountry('LU', 'it')).toEqual(['fr', 'de'])
    expect(suggestLocalesForCountry('US', 'fr')).toEqual(['us'])
    expect(suggestLocalesForCountry('IE', 'us')).toEqual(['en'])
  })

  it('proposes nothing to a visitor already reading one of their country versions, or from an unserved country', () => {
    expect(suggestLocalesForCountry('BE', 'nl')).toEqual([])
    expect(suggestLocalesForCountry('CA', 'fr')).toEqual([])
    expect(suggestLocalesForCountry('JP', 'en')).toEqual([])
    expect(suggestLocalesForCountry(null, 'en')).toEqual([])
  })

  it("asks in the suggested version's language, naming the country only in that version's own country", () => {
    expect(suggestionQuestion('us', 'US')).toBe('Shopping in the United States?')
    expect(SUGGESTION_COPY.us.cta).toBe('See Home Nura US')
    expect(suggestionQuestion('fr', 'FR')).toBe('Vous êtes en France ?')
    // A Belgian or Swiss visitor is not asked whether they are in France.
    expect(suggestionQuestion('fr', 'BE')).toBe('Vous lisez le français ?')
    expect(suggestionQuestion('en', 'GB')).toBe('Shopping in the UK?')
    expect(suggestionQuestion('en', 'IE')).toBe('Shopping outside North America?')
    expect(suggestionQuestion('de', 'at')).toBe('Lieber auf Deutsch?')
  })

  it('has its copy in all ten languages, each call to action naming the Home Nura edition', () => {
    for (const lang of LANGUAGES) {
      const copy = SUGGESTION_COPY[lang]
      for (const value of Object.values(copy)) expect(value.trim(), lang).not.toBe('')
      expect(copy.cta, lang).toContain(marketVersion(lang).edition)
    }
  })
})

describe('arrival notice', () => {
  it('says why the reader landed elsewhere, in the language of the page, naming the edition left and the hub', () => {
    expect(arrivalMessage('de', { reason: 'market', from: 'us' }, 'Video-Türklingeln')).toBe(
      'Diese Seite gibt es nur bei Home Nura US. Hier ist unser Ratgeber „Video-Türklingeln“ für Deutschland.',
    )
    expect(arrivalMessage('en', { reason: 'market', from: 'us' }, 'Robot Vacuums')).toBe('This page is specific to Home Nura US. Here is our “Robot Vacuums” guide for the UK.')
    expect(arrivalMessage('fr', { reason: 'black-friday', from: 'de' }, null)).toBe("Cette sélection n'est pas proposée sur Home Nura France. Voici notre page Black Friday.")
    expect(arrivalMessage('it', { reason: 'cleaning', from: 'us' }, 'Pulizia e casa')).toContain('«Pulizia e casa»')
    expect(arrivalMessage('us', { reason: 'home', from: 'fr' }, null)).toBe('This page has no equivalent on Home Nura US, so here is the home page.')
  })

  it('reads well without the edition left or the hub title', () => {
    expect(arrivalMessage('fr', { reason: 'market', from: null }, null)).toBe("Cette page n'existe que sur une autre édition de Home Nura. Voici le guide le plus proche pour la France.")
  })

  it('has every message in all ten languages', () => {
    for (const lang of LANGUAGES) {
      expect(ARRIVAL_COPY[lang].close.trim(), lang).not.toBe('')
      for (const reason of REASONS) {
        const message = arrivalMessage(lang, { reason, from: lang === 'us' ? 'fr' : 'us' }, 'Label')
        expect(message.length, `${lang} ${reason}`).toBeGreaterThan(30)
        expect(message, `${lang} ${reason}`).not.toMatch(/undefined|null|homavise/i)
      }
    }
  })
})
