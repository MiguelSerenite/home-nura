/**
 * Length units of the under-furniture clearance check (pure, tested).
 *
 * Robots are compared on the manufacturer's height in millimetres
 * (heightMm), exactly as published: the reader's clearance is converted
 * to millimetres without rounding, and only the text shown on screen is
 * rounded. Choosing inches or centimetres never changes a measure.
 */

import { BCP47_LOCALE } from '@/lib/i18n'
import type { FloorCareMarket } from './config'

export type LengthUnit = 'in' | 'cm' | 'mm'
/** Units a reader may type the clearance in. */
export type ClearanceUnit = Exclude<LengthUnit, 'mm'>

/** Exact by definition (international inch, 1959). */
export const MM_PER_INCH = 25.4
export const MM_PER_CM = 10

const MM_PER_UNIT: Readonly<Record<LengthUnit, number>> = { in: MM_PER_INCH, cm: MM_PER_CM, mm: 1 }

/** Unit the clearance field opens with: inches in the US, centimetres in Canada. */
export const DEFAULT_CLEARANCE_UNIT: Readonly<Record<FloorCareMarket, ClearanceUnit>> = { us: 'in', ca: 'cm' }

/**
 * Absorbs binary floating-point error only (4.1 × 25.4 gives
 * 104.13999999999999 instead of 104.14), a billionth of a millimetre: far
 * below any published height.
 */
const FLOAT_TOLERANCE_MM = 1e-9

/** Plausible clearance range: above 0, at most 1 m (no robot is that tall). */
export const MAX_CLEARANCE_MM = 1000

/** Decimals shown on screen per unit; the values compared are never rounded. */
const DISPLAY_DECIMALS: Readonly<Record<LengthUnit, number>> = { in: 1, cm: 1, mm: 1 }

export function toMillimetres(value: number, unit: LengthUnit): number {
  return value * MM_PER_UNIT[unit]
}

export function fromMillimetres(mm: number, unit: LengthUnit): number {
  return mm / MM_PER_UNIT[unit]
}

/** Converts between units without rounding. */
export function convertLength(value: number, from: LengthUnit, to: LengthUnit): number {
  return fromMillimetres(toMillimetres(value, from), to)
}

const DECIMAL_INPUT = /^\d+(?:[.,]\d*)?$|^[.,]\d+$/

/**
 * Number typed in the clearance field ("3.7", "3,7", " 9.4 "), or null
 * when it is not a plain positive decimal. Decimal comma accepted.
 */
export function parseLengthInput(text: string): number | null {
  const trimmed = text.trim()
  if (!DECIMAL_INPUT.test(trimmed)) return null
  const value = Number(trimmed.replace(',', '.'))
  return Number.isFinite(value) ? value : null
}

export type ClearanceInput =
  | { ok: true; mm: number }
  | { ok: false; reason: 'empty' | 'invalid' | 'out_of_range' }

/** The typed clearance in millimetres (exact), or why it cannot be used. */
export function clearanceFromInput(text: string, unit: ClearanceUnit): ClearanceInput {
  if (text.trim() === '') return { ok: false, reason: 'empty' }
  const value = parseLengthInput(text)
  if (value === null) return { ok: false, reason: 'invalid' }
  const mm = toMillimetres(value, unit)
  if (mm <= 0 || mm > MAX_CLEARANCE_MM) return { ok: false, reason: 'out_of_range' }
  return { ok: true, mm }
}

/** True when a robot of `heightMm` (manufacturer figure) passes under `clearanceMm`. */
export function fitsUnder(heightMm: number, clearanceMm: number): boolean {
  return heightMm <= clearanceMm + FLOAT_TOLERANCE_MM
}

/** Rounds for display only: at most `decimals` decimals, trailing zeros dropped. */
export function roundForDisplay(value: number, decimals: number): number {
  const factor = 10 ** decimals
  return Math.round(value * factor) / factor
}

/** "3.7 in", "9.4 cm", "94 mm" in the market's number format. */
export function formatLength(mm: number, unit: LengthUnit, market: FloorCareMarket, decimals = DISPLAY_DECIMALS[unit]): string {
  const value = new Intl.NumberFormat(BCP47_LOCALE[market], { maximumFractionDigits: decimals }).format(
    fromMillimetres(mm, unit),
  )
  return `${value} ${unit}`
}

/**
 * A robot's height in both units, the market's own unit first:
 * "3.7 in (94 mm)" in the US, "9.4 cm (3.7 in)" in Canada.
 */
export function formatHeight(mm: number, market: FloorCareMarket): string {
  return market === 'us'
    ? `${formatLength(mm, 'in', market)} (${formatLength(mm, 'mm', market)})`
    : `${formatLength(mm, 'cm', market)} (${formatLength(mm, 'in', market)})`
}

/**
 * The reader's clearance in their unit and in millimetres, with two
 * decimals of millimetres so the figure compared stays visible
 * ("3.7 in (93.98 mm)").
 */
export function formatClearance(mm: number, unit: ClearanceUnit, market: FloorCareMarket): string {
  return `${formatLength(mm, unit, market, 2)} (${formatLength(mm, 'mm', market, 2)})`
}

/**
 * Text for the clearance field after the reader switches unit: the same
 * clearance in the new unit (two decimals at most, no grouping). The
 * comparison keeps using the exact millimetres, not this text.
 */
export function inputTextFor(mm: number, unit: ClearanceUnit): string {
  return String(roundForDisplay(fromMillimetres(mm, unit), 2))
}
