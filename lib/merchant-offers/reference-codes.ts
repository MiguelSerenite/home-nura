/**
 * Manufacturer reference codes and EANs in a product name or in our own
 * model data ("Philips 3300 LatteGo EP3347/90", "Magnifica Evo
 * ECAM290.51.B", "EAN 8720169364066"). A code names one product far more
 * surely than words do, so lib/merchant-offers/match.ts accepts a feed
 * product whose name carries the model's code even when Coolblue adds
 * descriptive words ("Sonoff TRVZB Zigbee radiatorknop"). Server-only, pure.
 */
import 'server-only'

const MEASURE = /^\d+(?:\.\d+)?(?:l|ml|cl|kg|g|w|kw|kwh|wh|cm|mm|m2|m|lm|mah|db|btu|v|bar|a|mhz|ghz)$/
const SEPARATORS = /[\s,;()[\]{}:|"'’“”«»!?]+/

/**
 * Compact reference codes of a text: letters and digits mixed, at least 5
 * characters starting with a letter or 6 otherwise ("EP3347/90" → "ep3347",
 * the regional suffix dropped like lib/blog/model-match does; "ECAM290.51.B"
 * → "ecam29051b"; "IBT-4XS" is too short to count alone). With
 * `lettersOnly`, an all-capitals code without vowels ("TRVZB") counts too.
 */
export function referenceCodes(text: string, { lettersOnly = false } = {}): string[] {
  const codes = new Set<string>()
  for (const raw of text.normalize('NFD').replace(/[̀-ͯ]/g, '').split(SEPARATORS)) {
    const chunk = raw.replace(/^[.\-/]+|[.\-/]+$/g, '').replace(/\/\d{1,3}$/, '')
    if (chunk.includes('/')) continue
    const compact = chunk.toLowerCase().replace(/[.\-]/g, '')
    if (!/^[a-z0-9]+$/.test(compact) || MEASURE.test(compact)) continue
    const hasDigit = /\d/.test(compact)
    const hasLetter = /[a-z]/.test(compact)
    if (hasDigit && hasLetter) {
      if ((/^[a-z]/.test(compact) && compact.length >= 5) || compact.length >= 6) codes.add(compact)
    } else if (lettersOnly && !hasDigit && /^[A-Z]{4,8}$/.test(chunk) && !/[AEIOUY]/.test(chunk)) {
      codes.add(compact)
    }
  }
  return [...codes]
}

/** EANs a text names after the word "EAN" ("EAN 8720169364066 / 929003853501" → the first). */
export function eansIn(text: string): string[] {
  return [...text.matchAll(/\bEAN\s*:?\s*(\d{8}|\d{12,14})\b/gi)].map((m) => m[1].replace(/^0+(?=\d{13})/, ''))
}

/**
 * Names that are not the product alone: a bundle, set or multipack, or an
 * accessory sold "for" the model ("Filter voor AC2939", "Zubehör für …").
 */
export function isBundleName(name: string): boolean {
  return (
    /\s\+\s|\b(?:bundel|bundle|set|kit|lot de \d+)\b|\b\d+\s*-?\s*(?:pack|pak|stuks|er-pack|x)\b|\bduo\s*-?\s*pack\b/i.test(name) ||
    /\b(?:voor|geschikt|fur|pour|compatible|accessoire|accessoires|zubehor|ersatz|vervang\w*|filter|filtre|replacement)\b/i.test(
      name.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
    )
  )
}
