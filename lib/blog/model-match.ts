/**
 * Finds which of an article's recommended models a piece of text names.
 *
 * Drives the in-text buy buttons and the links on model names in
 * comparison tables. Precision comes first: a missed link costs a click,
 * a link to the wrong product costs the reader's trust. So a model only
 * matches when the text carries its brand (or one of its model codes),
 * shares its distinctive words, and names no other model code.
 *
 * Matching is token-based and insensitive to case, accents, punctuation,
 * decimal commas ("6,2 L" = "6.2L") and ordinals ("5e gén." = "5th gen").
 */

/** Descriptive words that never tell two models apart (FR/EN/DE/ES/IT/NL). */
const GENERIC_WORDS = new Set([
  // product-type descriptors used in catalog titles
  'air', 'fryer', 'airfryer', 'friteuse', 'heissluftfritteuse', 'freidora', 'aire', 'friggitrice', 'aria',
  'thermometre', 'thermometer', 'termometro', 'fleischthermometer', 'sonde', 'sondes', 'sonden', 'sondas',
  'sans', 'fil', 'kabelloses', 'inalambrico', 'longue', 'portee', 'grosse', 'reichweite', 'largo', 'alcance',
  'bluetooth', 'wifi', 'smart', 'smarte', 'inteligente', 'inteligentes', 'connecte', 'connectee', 'connectees',
  'connected', 'conectada', 'prise', 'prises', 'steckdose', 'steckdosen', 'enchufe', 'enchufes',
  'suivi', 'conso', 'verbrauchsmessung', 'medidor', 'pack', 'lot',
  'balance', 'cuisine', 'dietetique', 'waage', 'kuchenwaage', 'diatwaage', 'bascula', 'dietetica', 'cocina', 'scale',
  'diffuser', 'diffuseur', 'essential', 'oil', 'weather', 'station',
  'series', 'serie', 'gen', 'generation', 'generacion', 'generazione', 'generatie', 'version',
  // filler words
  'a', 'and', 'with', 'for', 'the', 'et', 'avec', 'pour', 'de', 'du', 'des', 'la', 'le', 'les',
  'mit', 'und', 'der', 'die', 'das', 'con', 'y', 'el', 'del', 'e', 'di', 'il', 'en', 'van', 'het', 'een', 'met',
])

/** Words that make a different model ("Pro", "Max"): never optional in a name. */
const VARIANT_WORDS = new Set(['lite', 'mini', 'max', 'pro', 'plus', 'ultra', 'compact', 'xl', 'xxl', 's', 'neo', 'evo', 'ii', 'iii'])
/**
 * Variant words that cannot directly follow a match ("Purifier 4" + "Lite").
 * "plus" and "s" are left out: in French prose "plus" follows names constantly.
 */
const FOLLOWING_VARIANTS = new Set([...VARIANT_WORDS].filter((w) => w !== 'plus' && w !== 's'))

const UNIT = '(?:l|ml|cl|kg|g|w|kw|kwh|wh|cm|mm|m2|m|lm|mah|db|btu|v|bar)'
const MEASURE = new RegExp(`^\\d+(?:\\.\\d+)?${UNIT}$`)
// At most 3 integer digits: "Série 3000 L" is a model size, not 3000 litres.
const NUMBER_THEN_UNIT = new RegExp(`(\\b\\d{1,3}(?:\\.\\d+)?)\\s+(${UNIT})\\b`, 'g')
const ORDINAL = /^(\d+)(?:e|er|re|eme|th|st|nd|rd|a|o)$/
const MAX_EXTRA_WINDOW_TOKENS = 3
/** Distinctive tokens, besides the brand, a shortened name must still share. */
const MIN_EVIDENCE = 2

export function normalizeTokens(text: string): string[] {
  const normalized = text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .replace(/[\u2010-\u2015]/g, '-') // typographic hyphens and dashes
    .replace(/&[a-z]+;|&#\d+;/g, ' ') // HTML entities
    .replace(/['’`´]/g, '') // De'Longhi = DeLonghi
    .replace(/([a-z]+\d+[a-z]*)\/[\d-]+/g, '$1') // HF3650/01 = HF3650 (regional suffix)
    .replace(/(\d),(\d)/g, '$1.$2') // 6,2 = 6.2
    .replace(/\b\d+\s*-?\s*(?:en|in)\s*-?\s*1\b/g, ' ') // 15-en-1, 7-in-1
    .replace(/([a-z])-(?=[a-z0-9])|(\d)-(?=[a-z])/g, '$1$2') // TP-Link = tplink, IBT-4XS = ibt4xs
    .replace(/\bgen(\d+)\b/g, 'gen $1') // "Gen4" is a generation, not a model code
    .replace(/\bfoodi max\b/g, 'foodi') // Ninja's "Foodi MAX" range prefix, often shortened in copy
    .replace(NUMBER_THEN_UNIT, '$1$2') // 6.2 l = 6.2l
  const tokens = normalized.match(/\d+(?:\.\d+)+[a-z0-9]*|[a-z0-9]+/g) ?? []
  return tokens.map((t) => t.replace(ORDINAL, '$1'))
}

const isMeasure = (t: string) => MEASURE.test(t)
const isCode = (t: string) => /\d/.test(t) && !isMeasure(t) && (/[a-z]/.test(t) || t.length >= 3)
const isAlnumCode = (t: string) => /\d/.test(t) && /[a-z]/.test(t) && !isMeasure(t)
/** A reference code unique to one product ("GV9721", "HD9252"), unlike "300S" or "TP09". */
const isStrongCode = (t: string) => isAlnumCode(t) && ((/^[a-z]/.test(t) && t.length >= 5) || t.length >= 6)
const isSeriesNumber = (t: string) => /^(?:\d{3,}|\d+\.\d+)$/.test(t)
const isDistinctive = (t: string) => !GENERIC_WORDS.has(t)

export interface ModelKey {
  brand: string
  /** Distinctive words and codes that name the model (measures excluded). */
  words: ReadonlySet<string>
  /** Descriptors after the capacity ("10.4L Double Zone"): may be left out. */
  optional: ReadonlySet<string>
  measures: ReadonlySet<string>
  strongCodes: ReadonlySet<string>
  /** Raw token count, bounds the text window searched for a mention. */
  length: number
}

export function modelKey(name: string): ModelKey {
  const tokens = normalizeTokens(name)
  const distinctive = tokens.filter(isDistinctive)
  const firstMeasure = distinctive.findIndex(isMeasure)
  const naming = firstMeasure === -1 ? distinctive : distinctive.slice(0, firstMeasure)
  const trailing = firstMeasure === -1 ? [] : distinctive.slice(firstMeasure)
  return {
    brand: distinctive[0] ?? '',
    words: new Set([...naming, ...trailing.filter(isCode)].filter((t) => !isMeasure(t))),
    optional: new Set(trailing.filter((t) => !isMeasure(t) && !isCode(t))),
    measures: new Set(distinctive.filter(isMeasure)),
    strongCodes: new Set(distinctive.filter(isStrongCode)),
    length: tokens.length,
  }
}

/** Words a shortened name may leave out: long names are often cut in copy. */
function allowedMissingWords(wordCount: number): number {
  if (wordCount >= 6) return 2
  if (wordCount >= 4) return 1
  return 0
}

/**
 * Cost of reading `window` as the model (lower is closer), or null when
 * the window does not name it.
 */
export function matchCost(window: readonly string[], key: ModelKey): number | null {
  const text = new Set(window.filter(isDistinctive))
  const sharesStrongCode = [...key.strongCodes].some((c) => text.has(c))
  if (!text.has(key.brand) && !sharesStrongCode) return null

  const extra = [...text].filter((t) => !key.words.has(t) && !key.optional.has(t) && !key.measures.has(t))
  // Another model code, or another capacity than the model's own.
  if (extra.some(isCode)) return null
  if (key.measures.size > 0 && extra.some(isMeasure)) return null
  const extraWords = extra.filter((t) => !isMeasure(t))
  const missing = [...key.words].filter((t) => !text.has(t))
  const cost = missing.length + extraWords.length
  // A reference code ("GV9721") names one product: it settles the match.
  if (sharesStrongCode) return cost
  if (extraWords.length > 0) return null
  // A series number ("3000") or a variant word ("Pro", "Max") is never
  // optional: without it the text names another model.
  if (missing.some((t) => isSeriesNumber(t) || VARIANT_WORDS.has(t))) return null
  // Brand plus the model's code and nothing else ("Dyson TP09").
  if (text.has(key.brand) && [...key.words].some((t) => isAlnumCode(t) && text.has(t))) return cost

  const missingWords = missing.filter((t) => !isCode(t))
  if (missingWords.length > allowedMissingWords(key.words.size)) return null
  const evidence =
    [...key.words].filter((t) => t !== key.brand && text.has(t)).length +
    [...key.measures].filter((m) => text.has(m)).length
  // A shortened name ("Tapo" for "TP-Link Tapo L535E") must keep enough of it.
  if (missing.length > 0 && evidence < MIN_EVIDENCE) return null
  const keySize = key.words.size + key.measures.size
  if (evidence + 1 < Math.min(MIN_EVIDENCE, keySize)) return null
  return cost
}

export interface Mention {
  /** Index of the matched model in the list given to findMentions. */
  model: number
  start: number
  end: number
  cost: number
}

const isBetter = (m: Mention, best: Mention | null) =>
  !best || m.cost < best.cost || (m.cost === best.cost && m.end - m.start > best.end - best.start)

/** Best reading of one model from `start`, or null. */
function readModelAt(tokens: readonly string[], start: number, key: ModelKey, model: number): Mention | null {
  if (tokens[start] !== key.brand && !key.strongCodes.has(tokens[start])) return null
  const maxEnd = Math.min(tokens.length, start + key.length + MAX_EXTRA_WINDOW_TOKENS)
  let best: Mention | null = null
  for (let end = start + 1; end <= maxEnd; end++) {
    const cost = matchCost(tokens.slice(start, end), key)
    if (cost === null) continue
    const next = tokens[end]
    if (next !== undefined && FOLLOWING_VARIANTS.has(next) && !key.words.has(next)) continue
    const mention = { model, start, end, cost }
    if (isBetter(mention, best)) best = mention
  }
  return best
}

/**
 * Every model mention in `tokens`, best reading per start position.
 * A window starts on a model's brand or reference code and may run a few
 * tokens past the model's own length (generic words in between). When two
 * models read equally well ("Aqara E1": curtain or roller-shade driver?),
 * the mention is ambiguous and skipped.
 */
export function findMentions(tokens: readonly string[], keys: readonly ModelKey[]): Mention[] {
  const mentions: Mention[] = []
  for (let start = 0; start < tokens.length; start++) {
    const readings = keys.flatMap((key, model) => readModelAt(tokens, start, key, model) ?? [])
    if (readings.length === 0) continue
    const lowest = Math.min(...readings.map((r) => r.cost))
    const closest = readings.filter((r) => r.cost === lowest)
    if (new Set(closest.map((r) => r.model)).size > 1) continue
    mentions.push(closest.reduce((best, r) => (isBetter(r, best) ? r : best)))
  }
  return mentions
}

/**
 * The model a short text (e.g. a table cell) names, else null. A text
 * naming two different models ("Ninja X, Philips Y") names none.
 */
export function bestMatch(text: string, keys: readonly ModelKey[]): Mention | null {
  const mentions = findMentions(normalizeTokens(text), keys)
  if (new Set(mentions.map((m) => m.model)).size > 1) return null
  return mentions.reduce<Mention | null>((best, m) => (isBetter(m, best) ? m : best), null)
}
