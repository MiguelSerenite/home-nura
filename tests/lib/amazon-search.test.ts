import { describe, it, expect } from 'vitest'
import { amazonProductUrl, amazonSearchUrl, AMAZON_BASE_URL, AMAZON_STORE_ID } from '@/lib/amazon'

describe('amazon links', () => {
  it('point every reader at amazon.fr with the French store ID (Global Earning)', () => {
    expect(AMAZON_BASE_URL).toBe('https://www.amazon.fr')
    expect(AMAZON_STORE_ID).toBe('homenuraen05-21')
  })

  it('build product pages from the ASIN', () => {
    expect(amazonProductUrl('B0CZPJ1HFP')).toBe('https://www.amazon.fr/dp/B0CZPJ1HFP?tag=homenuraen05-21')
  })

  it('build search pages from the model name', () => {
    expect(amazonSearchUrl('Nuki Smart Lock 4.0')).toBe('https://www.amazon.fr/s?k=Nuki+Smart+Lock+4.0&tag=homenuraen05-21')
  })

  it('encodes special characters', () => {
    expect(amazonSearchUrl("De'Longhi Dedica & Co")).toBe('https://www.amazon.fr/s?k=De%27Longhi+Dedica+%26+Co&tag=homenuraen05-21')
  })
})
