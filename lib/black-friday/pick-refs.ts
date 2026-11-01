import type { Lang } from '@/lib/i18n'
import type { BlackFridayCategory, BlackFridayPickRef } from './types'

// Kept apart from ./index.ts: lib/market-models/coverage.ts reads these
// without importing the market decisions that ./index.ts depends on.

/** The pick refs a locale shows: its own when the category has some, else the default ones. */
export function blackFridayPickRefs(category: BlackFridayCategory, lang: Lang): readonly BlackFridayPickRef[] {
  return category.localPicks?.[lang] ?? category.picks
}

/** Every pick ref of a category, default and per market, each once (model coverage checks). */
export function allBlackFridayPickRefs(category: BlackFridayCategory): readonly BlackFridayPickRef[] {
  const local = Object.values(category.localPicks ?? {}).flat()
  const isDefault = (ref: BlackFridayPickRef) => category.picks.some((p) => p.article === ref.article && p.model === ref.model)
  return [...category.picks, ...local.filter((ref) => !isDefault(ref))]
}
