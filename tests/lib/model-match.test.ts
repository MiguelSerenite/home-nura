import { describe, it, expect } from 'vitest'
import { bestMatch, findMentions, modelKey, normalizeTokens } from '@/lib/blog/model-match'

const keysOf = (...names: string[]) => names.map(modelKey)
const matchedName = (text: string, names: string[]) => {
  const match = bestMatch(text, keysOf(...names))
  return match ? names[match.model] : null
}

describe('normalizeTokens', () => {
  it('ignores case, accents, apostrophes and decimal commas', () => {
    expect(normalizeTokens("De'Longhi Série 6,2 L")).toEqual(['delonghi', 'serie', '6.2l'])
  })

  it('reads ordinals and generations alike in every language', () => {
    expect(normalizeTokens('Nuki Pro (5e génération)')).toEqual(normalizeTokens('Nuki Pro (5th generation)'))
    expect(normalizeTokens('Ring Alarm Pack M (2e gén.)')).toEqual(['ring', 'alarm', 'pack', 'm', '2', 'gen'])
    expect(normalizeTokens('Shelly 1 Gen4')).toEqual(['shelly', '1', 'gen', '4'])
  })

  it('keeps hyphenated names and codes together, drops regional suffixes', () => {
    expect(normalizeTokens('TP-Link Tapo P115')).toEqual(['tplink', 'tapo', 'p115'])
    expect(normalizeTokens('Philips HF3650/01')).toEqual(['philips', 'hf3650'])
  })

  it('does not read a series number as a capacity', () => {
    expect(normalizeTokens('Philips Série 3000 L')).toEqual(['philips', 'serie', '3000', 'l'])
  })
})

describe('bestMatch', () => {
  it('matches a shortened name in another language', () => {
    expect(matchedName('Nuki Smart Lock Pro (5.ª generación)', ['Nuki Smart Lock Pro (5th generation)', 'Nuki Smart Lock Go'])).toBe(
      'Nuki Smart Lock Pro (5th generation)',
    )
    expect(matchedName('Philips Série 3000 XL 6,2 L', ['Philips Airfryer Série 3000 XL - 6.2L'])).toBe(
      'Philips Airfryer Série 3000 XL - 6.2L',
    )
  })

  it('matches on a model code even under another brand name', () => {
    expect(matchedName('Calor Pro Express Ultimate II (GV9721)', ['Tefal Pro Express Ultimate II GV9721'])).toBe(
      'Tefal Pro Express Ultimate II GV9721',
    )
    expect(matchedName('Dyson TP09', ['Dyson Purifier Cool Formaldehyde TP09', 'Dyson Purifier Hot+Cool Formaldehyde HP09'])).toBe(
      'Dyson Purifier Cool Formaldehyde TP09',
    )
  })

  it('rejects a text naming another model code', () => {
    expect(matchedName('Meross MSS310 (HomeKit)', ['Meross MSS210P Prise Connectée HomeKit 16A (lot de 2)'])).toBeNull()
    expect(matchedName('Philips 7000 Series (STH7040)', ['Philips PerfectCare 7000 Series PSG7130/20'])).toBeNull()
    expect(matchedName('Levoit Core 400S', ['Levoit Core 300S'])).toBeNull()
  })

  it('never drops a series number or a variant word', () => {
    expect(matchedName('Philips Airfryer Série 2000', ['Philips Airfryer Série 3000 XL - 6.2L'])).toBeNull()
    expect(matchedName('Philips Série 3000', ['Philips Airfryer Série 3000 XL - 6.2L'])).toBeNull()
    expect(matchedName('Beatbot AquaSense 2', ['Beatbot AquaSense 2 Pro'])).toBeNull()
    expect(matchedName('Rowenta X-Force Flex', ['Rowenta X-Force Flex 15.60'])).toBeNull()
  })

  it('picks the exact variant among close models', () => {
    const meater = ['MEATER Pro Thermomètre Sans Fil Longue Portée', 'MEATER Plus Thermomètre Sans Fil Bluetooth 50m', 'MEATER Pro XL']
    expect(matchedName('MEATER Pro', meater)).toBe(meater[0])
    expect(matchedName('MEATER Plus', meater)).toBe(meater[1])
    expect(matchedName('MEATER Pro XL', meater)).toBe(meater[2])
  })

  it('needs the brand or a code: a shared generic name is not enough', () => {
    expect(matchedName('Somfy Protect Outdoor Siren', ['Ring Alarm Outdoor Siren'])).toBeNull()
    expect(matchedName('TP-Link Tapo', ['TP-Link Tapo L535E'])).toBeNull()
  })

  it('reads a text naming two models as naming none', () => {
    expect(matchedName('Ninja Foodi FlexDrawer, Philips Combi XXL', ['Ninja Foodi FlexDrawer 10.4L Double Zone', 'Philips Airfryer Combi XXL Connecté - 8.3L'])).toBeNull()
  })

  it('lets descriptors after the capacity and trailing reference codes be left out', () => {
    expect(matchedName('Ninja Foodi FlexDrawer', ['Ninja Foodi FlexDrawer 10.4L Double Zone'])).toBe('Ninja Foodi FlexDrawer 10.4L Double Zone')
    expect(matchedName('Ninja Double Stack XL', ['Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L'])).toBe(
      'Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L',
    )
    expect(matchedName('Philips Série 2000 4,2 L', ['Philips Airfryer Série 2000 4,2 L NA221/00'])).toBe(
      'Philips Airfryer Série 2000 4,2 L NA221/00',
    )
  })
})

describe('findMentions', () => {
  it('finds models in running text, not a lookalike from another product line', () => {
    const names = ['Xiaomi Smart Air Purifier 4', 'Levoit Core 300S']
    const tokens = normalizeTokens('Le Xiaomi Smart Air Fryer Pro est une friteuse ; le Xiaomi Smart Air Purifier 4 filtre l’air.')
    expect(findMentions(tokens, keysOf(...names)).map((m) => names[m.model])).toEqual(['Xiaomi Smart Air Purifier 4'])
  })

  it('skips a name directly followed by a variant word', () => {
    const tokens = normalizeTokens('Le Xiaomi Smart Air Purifier 4 Lite est moins cher.')
    expect(findMentions(tokens, keysOf('Xiaomi Smart Air Purifier 4'))).toEqual([])
  })
})
