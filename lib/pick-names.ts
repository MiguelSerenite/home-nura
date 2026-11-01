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

/**
 * The pick a comparison row (first cell) or a hub pick names, if any: the
 * exact brand + model or model, else the one pick whose name contains
 * every word of a shortened name ("Dyson V15 Detect" for "Dyson V15
 * Detect (Yellow/Nickel)"). A shortened name two picks share names none.
 */
export function findPick<T extends NamedModel>(picks: readonly T[], name: string): T | undefined {
  const wanted = normalizeModelName(name)
  const exact = picks.find((pick) => pickNames(pick).includes(wanted))
  if (exact) return exact
  const words = wanted.split(' ').filter(Boolean)
  if (words.length < MIN_SHORT_NAME_WORDS) return undefined
  const matches = picks.filter((pick) => {
    const pickWords = new Set(normalizeModelName(pickName(pick)).split(' '))
    return words.every((word) => pickWords.has(word))
  })
  return matches.length === 1 ? matches[0] : undefined
}
