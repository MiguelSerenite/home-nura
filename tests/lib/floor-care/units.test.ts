import { describe, it, expect } from 'vitest'
import {
  DEFAULT_CLEARANCE_UNIT,
  MAX_CLEARANCE_MM,
  MM_PER_INCH,
  clearanceFromInput,
  convertLength,
  fitsUnder,
  formatClearance,
  formatHeight,
  formatLength,
  fromMillimetres,
  inputTextFor,
  parseLengthInput,
  toMillimetres,
} from '@/lib/floor-care/units'

describe('length conversions', () => {
  it('converts inches and centimetres to millimetres exactly', () => {
    expect(MM_PER_INCH).toBe(25.4)
    expect(toMillimetres(1, 'in')).toBe(25.4)
    expect(toMillimetres(3.7, 'in')).toBeCloseTo(93.98, 10)
    expect(toMillimetres(9.4, 'cm')).toBe(94)
    expect(toMillimetres(94, 'mm')).toBe(94)
  })

  it('converts millimetres back without rounding', () => {
    expect(fromMillimetres(94, 'in')).toBeCloseTo(3.700787401574803, 12)
    expect(fromMillimetres(94, 'cm')).toBe(9.4)
    expect(convertLength(3.7, 'in', 'cm')).toBeCloseTo(9.398, 10)
    expect(convertLength(9.4, 'cm', 'in')).toBeCloseTo(3.700787401574803, 12)
  })

  it('round-trips in ↔ mm ↔ cm', () => {
    for (const value of [0.5, 3.15, 3.7, 4.1, 12]) {
      expect(convertLength(convertLength(value, 'in', 'cm'), 'cm', 'in')).toBeCloseTo(value, 12)
      expect(fromMillimetres(toMillimetres(value, 'in'), 'in')).toBeCloseTo(value, 12)
    }
  })
})

describe('reading the clearance field', () => {
  it('accepts plain decimals with a point or a comma', () => {
    expect(parseLengthInput('3.7')).toBe(3.7)
    expect(parseLengthInput(' 3,7 ')).toBe(3.7)
    expect(parseLengthInput('.5')).toBe(0.5)
    expect(parseLengthInput('10')).toBe(10)
  })

  it('rejects anything else', () => {
    for (const text of ['', 'abc', '3.7in', '-2', '1e3', '3.7.1', '3 1/2', '∞']) {
      expect(parseLengthInput(text), text).toBeNull()
    }
  })

  it('converts the typed clearance to exact millimetres in the chosen unit', () => {
    expect(clearanceFromInput('3.7', 'in')).toEqual({ ok: true, mm: 3.7 * 25.4 })
    expect(clearanceFromInput('9.4', 'cm')).toEqual({ ok: true, mm: 94 })
  })

  it('tells empty, invalid and out-of-range input apart', () => {
    expect(clearanceFromInput('  ', 'in')).toEqual({ ok: false, reason: 'empty' })
    expect(clearanceFromInput('three', 'in')).toEqual({ ok: false, reason: 'invalid' })
    expect(clearanceFromInput('0', 'cm')).toEqual({ ok: false, reason: 'out_of_range' })
    expect(clearanceFromInput('40', 'in')).toEqual({ ok: false, reason: 'out_of_range' })
    expect(clearanceFromInput(String(MAX_CLEARANCE_MM / 10), 'cm')).toEqual({ ok: true, mm: MAX_CLEARANCE_MM })
  })

  it('opens in inches in the US and in centimetres in Canada', () => {
    expect(DEFAULT_CLEARANCE_UNIT).toEqual({ us: 'in', ca: 'cm' })
  })
})

describe('comparing with the manufacturer height', () => {
  it('compares the unrounded millimetres: 3.7 in (93.98 mm) does not clear a 94 mm robot', () => {
    const clearance = clearanceFromInput('3.7', 'in')
    expect(clearance.ok).toBe(true)
    if (!clearance.ok) return
    expect(fitsUnder(94, clearance.mm)).toBe(false)
    expect(fitsUnder(93.9, clearance.mm)).toBe(true)
    // Both read "3.7 in" on screen: the display rounds, the comparison does not.
    expect(formatLength(94, 'in', 'us')).toBe('3.7 in')
    expect(formatLength(clearance.mm, 'in', 'us')).toBe('3.7 in')
  })

  it('counts an exact match as a fit, despite binary floating-point error', () => {
    expect(4.1 * 25.4).not.toBe(104.14)
    expect(fitsUnder(104.14, toMillimetres(4.1, 'in'))).toBe(true)
    expect(fitsUnder(94, toMillimetres(9.4, 'cm'))).toBe(true)
    expect(fitsUnder(94.01, toMillimetres(9.4, 'cm'))).toBe(false)
  })

  it('gives the same verdict whatever unit the same clearance is typed in', () => {
    const heights = [79.5, 92, 94, 96, 103.5]
    const inches = clearanceFromInput('3.75', 'in')
    const cm = clearanceFromInput(String(convertLength(3.75, 'in', 'cm')), 'cm')
    expect(inches.ok && cm.ok).toBe(true)
    if (!inches.ok || !cm.ok) return
    expect(heights.map((h) => fitsUnder(h, cm.mm))).toEqual(heights.map((h) => fitsUnder(h, inches.mm)))
  })
})

describe('display', () => {
  it('shows a robot height in inches then millimetres in the US', () => {
    expect(formatHeight(94, 'us')).toBe('3.7 in (94 mm)')
    expect(formatHeight(79.5, 'us')).toBe('3.1 in (79.5 mm)')
  })

  it('shows a robot height in centimetres then inches in Canada', () => {
    expect(formatHeight(94, 'ca')).toBe('9.4 cm (3.7 in)')
    expect(formatHeight(103.5, 'ca')).toBe('10.4 cm (4.1 in)')
  })

  it('shows the reader’s clearance with the millimetres compared', () => {
    expect(formatClearance(3.7 * 25.4, 'in', 'us')).toBe('3.7 in (93.98 mm)')
    expect(formatClearance(94, 'cm', 'ca')).toBe('9.4 cm (94 mm)')
  })

  it('rewrites the field in the new unit when the reader switches, two decimals at most', () => {
    expect(inputTextFor(3.7 * 25.4, 'cm')).toBe('9.4')
    expect(inputTextFor(94, 'in')).toBe('3.7')
    expect(inputTextFor(100, 'in')).toBe('3.94')
  })
})
