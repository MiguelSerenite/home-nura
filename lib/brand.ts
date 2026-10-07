/**
 * Manufacturer detection from a product title.
 *
 * Single source of truth for the brand shown in Product JSON-LD. Returns
 * `undefined` for unknown manufacturers so callers omit `brand` instead of
 * publishing a wrong value (Google treats a wrong brand as misleading data).
 * `tests/lib/brand.test.ts` fails if a catalog product is not covered.
 */
const KNOWN_BRANDS = [
  'Ninja',
  'Philips',
  'Cosori',
  'Tefal',
  'Xiaomi',
  'Moulinex',
  'Instant Pot',
  "De'Longhi",
  'Krups',
  'Etekcity',
  'Beurer',
  'Renpho',
  'MEATER',
  'Inkbird',
  'TP-Link',
  'Meross',
] as const

export function extractBrand(title: string): string | undefined {
  const lower = title.toLowerCase()
  return KNOWN_BRANDS.find((brand) => lower.includes(brand.toLowerCase()))
}
