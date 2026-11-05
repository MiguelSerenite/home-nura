/**
 * Matches one of our models to a Coolblue product of the Awin feeds.
 *
 * Precision first: a missing offer costs a click, an offer for another
 * product (another variant, a bundle, a previous generation) misleads the
 * reader and breaks Coolblue's terms. So a product only matches when
 *
 * - its brand is exactly the model's brand;
 * - every distinctive token of the model is in its name;
 * - its name adds nothing but a colour, a capacity (when the model names
 *   none) or a reference code (when the model is not named by a code):
 *   any other word ("Pro", "Absolute", "Connected", "2-pack", "7000") makes
 *   it another product;
 * - no other product matches with a different name (colours aside).
 *
 * Several colours of the same product count as one match: the cheapest one
 * is offered. Tokens come from lib/blog/model-match normalizeTokens (case,
 * accents, punctuation, regional suffixes such as "/90").
 */
import 'server-only'
import { normalizeTokens } from '@/lib/blog/model-match'
import { normalizeEan, type FeedProduct } from './feed'
import { isBundleName, referenceCodes } from './reference-codes'

/**
 * Words that never tell two products apart: fillers (English, Dutch,
 * German, French: the feeds of Coolblue NL, BE and DE), and the descriptors
 * our Dutch names add ("Slimme Stekker met Energiemeting"). Words that do
 * ("Smart", "Connected", "WiFi") are not here.
 */
const IGNORED_WORDS = new Set([
  'a', 'and', 'with', 'for', 'the', 'en', 'met', 'voor', 'van', 'het', 'de', 'een',
  'und', 'mit', 'fur', 'der', 'die', 'das', 'ein', 'eine',
  'et', 'avec', 'pour', 'le', 'la', 'les', 'du', 'des', 'un', 'une',
  'slimme', 'stekker', 'stekkers', 'energiemeting', 'weegschaal', 'keukenweegschaal', 'dieetweegschaal',
  'vleesthermometer', 'sondes', 'groot', 'bereik', 'losse', 'lamp',
  'gen', 'generation', 'generatie', 'series', 'serie',
  // Descriptors of our German and French names ("WLAN-Steckdose mit
  // Energiemessung", "Prise Connectée avec Suivi Conso"). "connectée"
  // only describes our French plugs, scales and bulbs; "connecté", like
  // "Connected" (Airfryer Combi XXL Connecté), names a variant and is not here.
  'connectee', 'im', 'kuchenwaage', 'kabelloses', 'fleischthermometer', 'bluetoothgrillthermometer', 'grosser', 'reichweite', 'sonden',
  'wlansteckdose', 'wlansteckdosen', 'energiemessung',
  'balance', 'cuisine', 'dietetique', 'thermometre', 'sans', 'fil', 'longue', 'portee', 'prise', 'prises', 'suivi', 'conso',
])

/**
 * Colour names of Coolblue's Dutch, German and French feeds (accents and
 * "ß" already folded): two colours of one product are the same model.
 */
const COLOUR_WORDS = new Set([
  'zwart', 'wit', 'grijs', 'zilver', 'rood', 'blauw', 'groen', 'geel', 'roze', 'paars', 'beige', 'goud', 'brons',
  'koper', 'antraciet', 'rvs', 'chroom', 'creme', 'taupe', 'matzwart', 'donkergrijs', 'lichtgrijs', 'champagne',
  'schwarz', 'weiss', 'grau', 'silber', 'rot', 'blau', 'grun', 'gelb', 'rosa', 'lila', 'violett', 'gold', 'bronze',
  'kupfer', 'anthrazit', 'edelstahl', 'chrom', 'mattschwarz', 'dunkelgrau', 'hellgrau', 'champagner',
  'noir', 'noire', 'blanc', 'blanche', 'gris', 'argent', 'rouge', 'bleu', 'vert', 'verte', 'jaune', 'rose', 'violet',
  'dore', 'cuivre', 'anthracite', 'inox', 'chrome',
])

const MEASURE = /^\d+(?:\.\d+)?(?:l|ml|cl|kg|g|w|kw|kwh|wh|cm|mm|m2|m|lm|mah|db|btu|v|bar)$/
const isMeasure = (t: string) => MEASURE.test(t)
const isMultipack = (t: string) => /^\d+(?:pack|pak|stuks)$/.test(t)
const isAlnumCode = (t: string) => /\d/.test(t) && /[a-z]/.test(t) && !isMeasure(t) && !isMultipack(t)

/**
 * Tokens of a name, with a trailing "+" read as "plus" ("Q7 M5+" ≠ "Q7
 * M5") and "liter" as a unit ("8,3 liter" = "8.3L").
 */
export function nameTokens(text: string): string[] {
  return normalizeTokens(
    text
      .replace(/([\p{L}\p{N}])\+(?=\s|$|[),])/gu, '$1 plus')
      .replace(/(\d)\s*liter\b/gi, '$1 l'),
  )
}

/** Brand key: "De'Longhi" = "DeLonghi", "TP-Link" = "TP Link", "BLACK+DECKER" = "Black & Decker". */
export function brandKey(brand: string): string {
  return normalizeTokens(brand).join('')
}

const distinctive = (tokens: readonly string[]) => tokens.filter((t) => !IGNORED_WORDS.has(t) && !COLOUR_WORDS.has(t))

interface IndexedProduct {
  product: FeedProduct
  /** Distinctive tokens of the name, brand removed. */
  tokens: ReadonlySet<string>
  /** Same, sorted: two products with one signature differ by colour only. */
  signature: string
  /** Manufacturer reference codes in its name (./reference-codes.ts). */
  codes: ReadonlySet<string>
  /** A bundle, set or multipack: never offered on a reference code alone. */
  bundle: boolean
}

export interface OfferIndex {
  byBrand: ReadonlyMap<string, readonly IndexedProduct[]>
  byEan: ReadonlyMap<string, FeedProduct>
}

/** Index of feed products by brand key and EAN (a product listed in two feeds counts once). */
export function buildOfferIndex(products: readonly FeedProduct[]): OfferIndex {
  const byBrand = new Map<string, IndexedProduct[]>()
  const byEan = new Map<string, FeedProduct>()
  const seen = new Set<string>()
  for (const product of products) {
    const id = product.ean ?? product.url
    if (seen.has(id)) continue
    seen.add(id)
    const key = brandKey(product.brand)
    if (!key) continue
    const brandTokens = new Set(normalizeTokens(product.brand))
    const tokens = distinctive(nameTokens(product.name)).filter((t) => !brandTokens.has(t) && t !== key)
    const indexed: IndexedProduct = {
      product,
      tokens: new Set(tokens),
      signature: [...new Set(tokens)].sort().join(' '),
      codes: new Set(referenceCodes(product.name, { lettersOnly: true })),
      bundle: isBundleName(product.name),
    }
    // Built in place: a full feed holds thousands of products per brand.
    const list = byBrand.get(key)
    if (list) list.push(indexed)
    else byBrand.set(key, [indexed])
    if (product.ean) byEan.set(product.ean, product)
  }
  return { byBrand, byEan }
}

export interface ModelQuery {
  brand: string
  model: string
  ean?: string | null
}

/** Why a product is not the model, or null when it is. */
function mismatch(candidate: IndexedProduct, wanted: readonly string[], measures: readonly string[]): string | null {
  if (wanted.some((t) => !candidate.tokens.has(t))) return 'missing token'
  const namedByCode = wanted.some(isAlnumCode)
  for (const token of candidate.tokens) {
    if (wanted.includes(token) || measures.includes(token)) continue
    // Its capacity, when ours names none; another one is another product.
    if (isMeasure(token)) {
      if (measures.length > 0) return 'other capacity'
      continue
    }
    // Its reference code ("HD9880"), when ours is not named by one.
    if (isAlnumCode(token) && !namedByCode) continue
    return `extra "${token}"`
  }
  return null
}

/**
 * The Coolblue product that is exactly this model, or null when none is,
 * or when two different products could be (ambiguous). An EAN, when the
 * caller has one, settles the match.
 */
export function matchProduct(index: OfferIndex, query: ModelQuery): FeedProduct | null {
  const ean = normalizeEan(query.ean ?? undefined)
  if (ean) {
    const byEan = index.byEan.get(ean)
    if (byEan) return byEan
  }
  const key = brandKey(query.brand)
  const candidates = index.byBrand.get(key)
  if (!key || !candidates) return null

  const brandTokens = new Set(normalizeTokens(query.brand))
  const tokens = distinctive(nameTokens(query.model)).filter((t) => !brandTokens.has(t) && t !== key)
  const measures = tokens.filter(isMeasure)
  const wanted = [...new Set(tokens.filter((t) => !isMeasure(t)))]
  // A brand alone, or a bare capacity, names no model.
  if (wanted.length === 0) return null

  const matches = candidates.filter((c) => mismatch(c, wanted, measures) === null)
  if (matches.length === 0) return null
  if (new Set(matches.map((m) => m.signature)).size > 1) return null
  return matches.reduce((best, m) => (m.product.price < best.product.price ? m : best)).product
}

/** The one product of the brand whose name carries one of `codes`, or null (none, or two different ones). */
export function matchProductByCode(index: OfferIndex, brand: string, codes: readonly string[]): FeedProduct | null {
  const candidates = index.byBrand.get(brandKey(brand))
  if (!candidates || codes.length === 0) return null
  const matches = candidates.filter((c) => !c.bundle && codes.some((code) => c.codes.has(code)))
  if (matches.length === 0 || new Set(matches.map((m) => m.signature)).size > 1) return null
  return matches.reduce((best, m) => (m.product.price < best.product.price ? m : best)).product
}

/** What our data knows of a model besides its name (lib/merchant-offers/references.ts). */
export interface ModelReferences {
  eans: readonly string[]
  /** Reference codes of our model data, used when the page name carries none. */
  codes: readonly string[]
}

/**
 * For the build log of models without an offer: the feed product of the
 * model's brand sharing the most words with it, or null (brand not sold).
 */
export function closestProductName(index: OfferIndex, name: string): string | null {
  const tokens = nameTokens(name)
  let best: { name: string; shared: number } | null = null
  for (const n of brandPrefixes(index, tokens)) {
    const wanted = new Set(distinctive(tokens.slice(n)))
    for (const c of index.byBrand.get(tokens.slice(0, n).join('')) ?? []) {
      const shared = [...c.tokens].filter((t) => wanted.has(t)).length
      if (shared > 0 && (!best || shared > best.shared)) best = { name: c.product.name, shared }
    }
  }
  return best?.name ?? null
}

/** Brand keys of the index that start `name` (1 to 3 tokens), longest first. */
function brandPrefixes(index: OfferIndex, tokens: readonly string[]): number[] {
  const lengths: number[] = []
  for (let n = Math.min(3, tokens.length - 1); n >= 1; n--) {
    if (index.byBrand.has(tokens.slice(0, n).join(''))) lengths.push(n)
  }
  return lengths
}

/**
 * Match for a full model name as the page shows it ("Philips Hue White
 * and Color Ambiance E27"), most certain first:
 *
 * 1. an EAN our data has for the model;
 * 2. a reference code ("EP3347/90", "SO6510", "TRVZB" when it is the whole
 *    model): the page name's own codes, else those of our model data; the
 *    feed name may add words but not make it a bundle, and two different
 *    products carrying the code mean no match;
 * 3. the exact name match (matchProduct).
 *
 * The brand is the name's first tokens that are a feed brand. When two
 * brand readings ("Philips" / "Philips Hue") give two different products,
 * there is no match.
 */
export function matchProductByName(index: OfferIndex, name: string, refs?: ModelReferences): FeedProduct | null {
  for (const ean of refs?.eans ?? []) {
    const product = index.byEan.get(ean)
    if (product) return product
  }
  const tokens = nameTokens(name)
  const found = new Set<FeedProduct>()
  for (const n of brandPrefixes(index, tokens)) {
    const brand = tokens.slice(0, n).join('')
    const model = tokens.slice(n)
    const ownCodes = referenceCodes(name, { lettersOnly: model.length === 1 })
    const codes = ownCodes.length > 0 ? ownCodes : (refs?.codes ?? [])
    const product = matchProductByCode(index, brand, codes) ?? matchProduct(index, { brand, model: model.join(' ') })
    if (product) found.add(product)
  }
  return found.size === 1 ? [...found][0] : null
}
