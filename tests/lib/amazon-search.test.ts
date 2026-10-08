import { describe, it, expect } from 'vitest'
import { amazonSearchUrl } from '@/lib/products'

describe('amazonSearchUrl', () => {
  it('searches the reader store with that store partner tag', () => {
    expect(amazonSearchUrl('Nuki Smart Lock 4.0', 'es')).toBe('https://www.amazon.es/s?k=Nuki+Smart+Lock+4.0&tag=homenuraen0a-21')
    expect(amazonSearchUrl('Nuki Smart Lock 4.0', 'fr')).toBe('https://www.amazon.fr/s?k=Nuki+Smart+Lock+4.0&tag=homenuraen05-21')
    expect(amazonSearchUrl('Ecowitt HP2560', 'en')).toBe('https://www.amazon.co.uk/s?k=Ecowitt+HP2560&tag=homenuraen-21')
  })

  it('encodes special characters', () => {
    expect(amazonSearchUrl("De'Longhi Dedica & Co", 'de')).toBe("https://www.amazon.de/s?k=De%27Longhi+Dedica+%26+Co&tag=homenuraen00-21")
  })

  it('falls back to the French store for unknown locales', () => {
    expect(amazonSearchUrl('Tedee GO', 'xx')).toContain('https://www.amazon.fr/s?k=Tedee+GO&tag=homenuraen05-21')
  })
})
