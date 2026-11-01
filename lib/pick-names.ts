/**
 * Names of the models a data-driven page recommends (floor-care guides,
 * market pages): display name, anchor, and how a comparison row or a
 * shortened name finds its pick. Generic over anything with a brand and a
 * model.
 */

export interface NamedModel {
  readonly brand: string
  /** Model name as sold in the market, usually with its model number. */
  readonly model: string
}

/** "BISSELL Little Green Max Pet 3860": the brand, then the model unless it already starts with it. */
export function pickName(pick: NamedModel): string {
  return pick.model.toLowerCase().startsWith(pick.brand.toLowerCase()) ? pick.model : `${pick.brand} ${pick.model}`
}

/** Lowercase, accents, ® / ™ and punctuation dropped: how model names are matched. */
export function normalizeModelName(name: string): string {
  return name
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[®™©]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

/** Anchor of a pick card ("pick-bissell-little-green-max-pet-3860"). */
export function pickId(pick: NamedModel): string {
  return `pick-${normalizeModelName(pickName(pick)).replace(/ /g, '-')}`
}

/** Names a pick answers to in a comparison: brand + model, and the model alone. */
export function pickNames(pick: NamedModel): string[] {
  return [...new Set([normalizeModelName(pickName(pick)), normalizeModelName(pick.model)])]
}

/** Fewest words a shortened name needs to identify a pick ("Levoit LVAC-200"). */
const MIN_SHORT_NAME_WORDS = 2

/** Shortest word that counts in a loose match ("qt", "xl" do not). */
const MIN_SIGNIFICANT_LENGTH = 3
/** Shortest model code matched as a prefix ("bes500" in "bes500bss"). */
const MIN_CODE_PREFIX = 5

/** A model code: letters and digits in one word ("af181", "bes870xl"). */
const isModelCode = (word: string) => /[a-z]/.test(word) && /\d/.test(word)

const wordsOf = (pick: NamedModel) => normalizeModelName(pickName(pick)).split(' ')

/** The only pick `test` accepts, or undefined. */
function only<T>(picks: readonly T[], test: (pick: T) => boolean): T | undefined {
  const matches = picks.filter(test)
  return matches.length === 1 ? matches[0] : undefined
}

/**
 * The pick a comparison row (first cell), a column heading or a hub pick
 * names, if any: the exact brand + model or model; else the one pick
 * whose name contains every word of a shortened name ("Dyson V15 Detect"
 * for "Dyson V15 Detect (Yellow/Nickel)"); else the one pick whose name
 * holds every significant word, model codes matching as prefixes
 * ("Cosori TurboBlaze 6-Qt", "Bambino Plus (BES500)" for "Bambino Plus
 * BES500BSS"). A name two picks share names none.
 */
export function findPick<T extends NamedModel>(picks: readonly T[], name: string): T | undefined {
  const wanted = normalizeModelName(name)
  const exact = picks.find((pick) => pickNames(pick).includes(wanted))
  if (exact) return exact
  const words = wanted.split(' ').filter(Boolean)
  if (words.length < MIN_SHORT_NAME_WORDS) return undefined
  const short = only(picks, (pick) => {
    const pickWords = new Set(wordsOf(pick))
    return words.every((word) => pickWords.has(word))
  })
  if (short) return short
  const significant = words.filter((word) => word.length >= MIN_SIGNIFICANT_LENGTH && !/^\d+$/.test(word))
  if (significant.length < MIN_SHORT_NAME_WORDS) return undefined
  return only(picks, (pick) => {
    const pickWords = wordsOf(pick)
    return significant.every((word) =>
      pickWords.includes(word) || (isModelCode(word) && word.length >= MIN_CODE_PREFIX && pickWords.some((w) => w.startsWith(word))),
    )
  })
}
