/**
 * The short answer of an answer-first hub (study § 2.6.3, item 3; backlog
 * C6): 40 to 70 words written for one market — verdict, entry budget
 * range (never a model's price), the usage trap, the date. Empty until the
 * native editors deliver; a hub without one shows no answer box.
 * tests/lib/catalog/answer-first.test.ts checks the length and the rules.
 */

import type { Lang } from '@/lib/i18n'
import type { AnswerFirstCategory } from './config'

export type HubAnswers = Readonly<Partial<Record<AnswerFirstCategory, Readonly<Partial<Record<Lang, string>>>>>>

export const HUB_ANSWERS: HubAnswers = {}

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

/** The hub's answer in `lang`, or null when none is written yet. */
export function getHubAnswer(categorySlug: string, lang: Lang, answers: HubAnswers = HUB_ANSWERS): string | null {
  const text = answers[categorySlug as AnswerFirstCategory]?.[lang]?.trim()
  return text ? text : null
}
