import { describe, it, expect } from 'vitest'
import { AUTHORS, AUTHOR_PAGE_COPY, getAuthor } from '@/lib/authors'
import { LANGUAGES, type Lang } from '@/lib/i18n'
import { authorUrl, buildAuthorPerson, BASE_URL } from '@/lib/seo'

/** How each locale says "pen name": the bio and the author page must say it. */
const PEN_NAME: Record<Lang, RegExp> = {
  fr: /nom de plume/i,
  en: /pen name/i,
  de: /Pseudonym/,
  es: /seudónimo/i,
  it: /pseudonimo/i,
  nl: /pseudoniem/i,
  pl: /pseudonim/i,
  sv: /pseudonym/i,
  us: /pen name/i,
  ca: /pen name/i,
}

// No invented credential, job title or expertise claim.
const CREDENTIAL = /ing[ée]nieur|engineer|ingegner|ingeniero|inżynier|ingenjör|journalist|giornalist|periodista|dziennikar|expert|esperto|experto|ekspert|diplom|degree|laurea|licenciad|certifi/i
// No claim that the team tests products itself (negations like "sans tester" are fine).
const SELF_TEST = /nous avons test|we (have )?tested|haben (wir )?\S* ?getestet|wir testen|abbiamo (provato|testato)|hemos (probado|evaluado)|hebben (we )?getest|przetestowali|vi (har )?testat/i

describe('authors', () => {
  it('give every site locale a byline with initials matching the name', () => {
    for (const lang of LANGUAGES) {
      const { name, initials } = AUTHORS[lang]
      const expected = name.split(' ').filter((w) => /^\p{Lu}/u.test(w)).map((w) => w[0]).join('')
      expect(initials, lang).toBe(expected)
    }
  })

  it('use a different name in every locale', () => {
    const names = LANGUAGES.map((l) => AUTHORS[l].name)
    expect(new Set(names).size).toBe(names.length)
  })

  it('say it is a pen name of the Home Nura team, in the bio and on the author page', () => {
    for (const lang of LANGUAGES) {
      expect(AUTHORS[lang].bio, lang).toMatch(PEN_NAME[lang])
      expect(AUTHORS[lang].bio, lang).toContain('Home Nura')
      expect(AUTHOR_PAGE_COPY[lang].penName, lang).toMatch(PEN_NAME[lang])
      expect(AUTHOR_PAGE_COPY[lang].penName, lang).toContain('Miguel Marie')
    }
  })

  it('name the locale’s own pen name on its author page', () => {
    for (const lang of LANGUAGES) {
      expect(AUTHOR_PAGE_COPY[lang].metaDescription, lang).toContain(AUTHORS[lang].name)
      expect(AUTHOR_PAGE_COPY[lang].penName, lang).toContain(AUTHORS[lang].name)
    }
  })

  it('claim no credential and no self-run test', () => {
    for (const lang of LANGUAGES) {
      const texts = [AUTHORS[lang].bio, ...Object.values(AUTHOR_PAGE_COPY[lang])]
      for (const text of texts) {
        expect(text, `${lang}: ${text.slice(0, 60)}`).not.toMatch(CREDENTIAL)
        expect(text, `${lang}: ${text.slice(0, 60)}`).not.toMatch(SELF_TEST)
      }
    }
  })

  it('fall back to the French byline for an unknown locale', () => {
    expect(getAuthor('xx')).toBe(AUTHORS.fr)
  })
})

describe('author markup', () => {
  it('points Person.url to the locale author page, with no sameAs', () => {
    expect(authorUrl('it')).toBe(`${BASE_URL}/it/auteur`)
    const person = buildAuthorPerson('pl')
    expect(person).toMatchObject({ '@type': 'Person', name: AUTHORS.pl.name, url: `${BASE_URL}/pl/auteur` })
    expect(person).not.toHaveProperty('sameAs')
  })
})
