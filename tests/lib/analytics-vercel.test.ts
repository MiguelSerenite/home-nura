import { describe, it, expect, vi, beforeEach } from 'vitest'

const track = vi.fn()
vi.mock('@vercel/analytics', () => ({ track: (...args: unknown[]) => track(...args) }))

import { trackEvent, EVENTS } from '@/lib/analytics'

describe('trackEvent → Vercel Web Analytics', () => {
  beforeEach(() => {
    track.mockReset()
    vi.stubGlobal('window', {})
  })

  it('forwards the event name and defined scalar props', () => {
    trackEvent(EVENTS.CLICK_AFFILIATE, { asin: 'B0TEST', lang: 'fr', position: 1, missing: undefined })
    expect(track).toHaveBeenCalledWith(EVENTS.CLICK_AFFILIATE, { asin: 'B0TEST', lang: 'fr', position: 1 })
  })

  it('never lets an analytics failure break the click', () => {
    track.mockImplementation(() => {
      throw new Error('blocked by an ad blocker')
    })
    expect(() => trackEvent(EVENTS.CLICK_AFFILIATE, { asin: 'B0TEST' })).not.toThrow()
  })
})
