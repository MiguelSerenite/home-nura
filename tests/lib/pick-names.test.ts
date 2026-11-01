import { describe, it, expect } from 'vitest'
import { findPick } from '@/lib/pick-names'

const picks = [
  { brand: 'Cosori', model: 'Cosori TurboBlaze 6.0-Quart Air Fryer (CAF-DC601-KUS)' },
  { brand: 'Ninja', model: 'Ninja Air Fryer Pro XL 6.5-Qt (AF181)' },
  { brand: 'Breville', model: 'Bambino Plus BES500BSS (Brushed Stainless Steel)' },
  { brand: 'Breville', model: 'Bambino BES450BSS' },
]

describe('findPick', () => {
  it('finds a pick by its exact name, its model, or a shortened name', () => {
    expect(findPick(picks, 'Ninja Air Fryer Pro XL 6.5-Qt (AF181)')).toBe(picks[1])
    expect(findPick(picks, 'Ninja Pro XL')).toBe(picks[1])
  })

  it('finds a pick by its significant words and model code, units and short words aside', () => {
    expect(findPick(picks, 'Cosori TurboBlaze 6-Qt')).toBe(picks[0])
    expect(findPick(picks, 'Ninja AF181 Pro XL')).toBe(picks[1])
    expect(findPick(picks, 'Bambino Plus (BES500)')).toBe(picks[2])
  })

  it('names no pick when two match or none does', () => {
    expect(findPick(picks, 'Breville Bambino')).toBeUndefined()
    expect(findPick(picks, 'Bambino (BES450), for reference')).toBeUndefined()
    expect(findPick(picks, 'Philips 3000')).toBeUndefined()
  })
})
