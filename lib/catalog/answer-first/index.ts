/**
 * Data of an "answer first" category hub (study § 2.6.3, backlog T3):
 * the optional short answer, the picks, the comparison table, the
 * criteria behind the ranking, the dated changelog and the date they set.
 * Rendered by components/answer-first, on the generic hub
 * (components/CategoryHub.tsx) and the kitchen route alike.
 */

import { QUICK_ANSWERS } from '@/lib/blog/quick-answers'
import type { Lang } from '@/lib/i18n'
import { CATEGORY_GUIDES, getCategoryGuides, type CategoryPick } from '../category-guides'
import { getHubAnswer } from './answers'
import { getHubChangelog, hubModifiedIso, type HubChange } from './changelog'
import { getHubComparison, type HubComparison } from './comparison'
import { isAnswerFirstCategory } from './config'
import { getHubCriteria } from './criteria'

export { ANSWER_FIRST_CATEGORIES, isAnswerFirstCategory, type AnswerFirstCategory } from './config'
export { hubModifiedIso, getHubChangelog, HUB_CHANGELOG, type HubChange, type HubChangelogEntry } from './changelog'
export { getHubComparison, type HubComparison, type HubTableRow, type HubTableLink } from './comparison'
export { getHubCriteria } from './criteria'
export { getHubAnswer, HUB_ANSWERS, countWords } from './answers'
export { ANSWER_FIRST_UI, type AnswerFirstUi } from './ui'

export interface AnswerFirstHub {
  /** 40–70 words for this market, or null until written. */
  answer: string | null
  picks: readonly CategoryPick[]
  /** The question the picks answer: the primary guide's verdict question, written per locale (null: none). */
  picksQuestion: string | null
  comparison: HubComparison | null
  criteria: readonly string[]
  changelog: readonly HubChange[]
  /** Visible "Updated" date = Article dateModified = sitemap lastmod. */
  modifiedIso: string
}

/** The hub's answer-first data in `lang`, or null when the category is not on the template. */
export function getAnswerFirstHub(categorySlug: string, lang: Lang): AnswerFirstHub | null {
  if (!isAnswerFirstCategory(categorySlug)) return null
  return {
    answer: getHubAnswer(categorySlug, lang),
    picks: getCategoryGuides(categorySlug, lang).picks,
    picksQuestion: QUICK_ANSWERS[CATEGORY_GUIDES[categorySlug]?.primary ?? '']?.question[lang] ?? null,
    comparison: getHubComparison(categorySlug, lang),
    criteria: getHubCriteria(categorySlug, lang),
    changelog: getHubChangelog(categorySlug, lang),
    modifiedIso: hubModifiedIso(categorySlug, lang),
  }
}
