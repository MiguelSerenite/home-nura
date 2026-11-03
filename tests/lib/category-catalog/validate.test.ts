import { describe, expect, it } from 'vitest'
import { BEST_FOR_MAX, FACT_MAX, validateCatalog } from '@/lib/category-catalog/validate'

const model = (over: Record<string, unknown> = {}) => ({
  id: 'aqara-smart-lock-u200',
  brand: 'Aqara',
  model: 'Smart Lock U200',
  asin: 'B0CXDDVHB4',
  segment: 'mid',
  bestFor: { fr: 'Les portes à cylindre européen, sans changer la serrure.' },
  facts: { fr: ['Matter via Thread', 'Clavier à empreinte inclus'] },
  markets: ['fr'],
  ...over,
})
const file = (over: Record<string, unknown> = {}, models: unknown[] = [model()]) => ({
  category: 'serrures-connectees',
  updated: '2026-11-03',
  models,
  ...over,
})
const check = (value: unknown) => () => validateCatalog(value, 'serrures-connectees.json')

describe('category catalogue files', () => {
  it('accept a well-formed file', () => {
    const catalog = validateCatalog(file(), 'serrures-connectees.json')
    expect(catalog.models[0]).toMatchObject({ id: 'aqara-smart-lock-u200', asin: 'B0CXDDVHB4', markets: ['fr'] })
  })

  it('accept a model with no ASIN yet', () => {
    expect(validateCatalog(file({}, [model({ asin: null })]), 'f.json').models[0].asin).toBeNull()
  })

  it('refuse an unknown category, field, segment or locale', () => {
    expect(check(file({ category: 'grille-pains' }))).toThrow(/unknown category slug/)
    expect(check(file({}, [model({ price: 99 })]))).toThrow(/models\[0\]\.price: unknown field/)
    expect(check(file({}, [model({ segment: 'cheap' })]))).toThrow(/segment: expected budget, mid, premium/)
    expect(check(file({}, [model({ markets: ['fr', 'xx'] })]))).toThrow(/unknown locale "xx"/)
  })

  it('refuse a bad id, ASIN or date', () => {
    expect(check(file({}, [model({ id: 'Aqara U200' })]))).toThrow(/lowercase slug/)
    expect(check(file({}, [model({ asin: '1234567890' })]))).toThrow(/expected an ASIN/)
    expect(check(file({ updated: '03/11/2026' }))).toThrow(/YYYY-MM-DD/)
  })

  it('need a best-for line and facts in every listed market', () => {
    expect(check(file({}, [model({ markets: ['fr', 'de'] })]))).toThrow(/bestFor: missing de/)
  })

  it('refuse prices, Amazon ratings, own-test claims and URLs in reader text', () => {
    expect(check(file({}, [model({ facts: { fr: ['Seulement 199 €'] } })]))).toThrow(/no price/)
    expect(check(file({}, [model({ bestFor: { fr: 'Noté 4,6/5 sur Amazon' } })]))).toThrow(/Amazon rating/)
    expect(check(file({}, [model({ bestFor: { fr: 'Nous avons testé cette serrure chez nous' } })]))).toThrow(/own-test claim/)
    expect(check(file({}, [model({ facts: { fr: ['Voir www.aqara.com'] } })]))).toThrow(/no URL/)
  })

  it('keep lines short and facts few', () => {
    expect(check(file({}, [model({ bestFor: { fr: 'a'.repeat(BEST_FOR_MAX + 1) } })]))).toThrow(/at most 140/)
    expect(check(file({}, [model({ facts: { fr: ['b'.repeat(FACT_MAX + 1)] } })]))).toThrow(/at most 90/)
    expect(check(file({}, [model({ facts: { fr: ['a', 'b', 'c', 'd'] } })]))).toThrow(/4 facts, at most 3/)
  })

  it('refuse the same model twice in a file', () => {
    expect(check(file({}, [model(), model()]))).toThrow(/models/)
  })
})
