import { describe, it, expect } from 'vitest'
import { hasScrolledPastHalf } from '@/lib/back-to-top'

describe('hasScrolledPastHalf', () => {
  // A 3,000 px page in an 800 px window scrolls over 2,200 px.
  it('stays hidden before half of the page', () => {
    expect(hasScrolledPastHalf(0, 3000, 800)).toBe(false)
    expect(hasScrolledPastHalf(1099, 3000, 800)).toBe(false)
  })

  it('shows from half of the page to the bottom', () => {
    expect(hasScrolledPastHalf(1100, 3000, 800)).toBe(true)
    expect(hasScrolledPastHalf(2200, 3000, 800)).toBe(true)
  })

  it('never shows on a page that does not scroll', () => {
    expect(hasScrolledPastHalf(0, 800, 800)).toBe(false)
    expect(hasScrolledPastHalf(0, 600, 800)).toBe(false)
  })
})
