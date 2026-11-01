/**
 * Category-specific FAQ data (one file per silo slice).
 *
 * Written per market, not translated: each locale asks the questions the
 * way buyers in that country search them ("quanto consuma", "werkt niet",
 * "ohne Abo", "cost to run"…). Answer-first wording: the first sentence
 * answers on its own so search engines and AI assistants can quote it.
 *
 * Every site locale has its FAQs (FAQ_LOCALES is LANGUAGES); lookups take a
 * plain string so an unknown locale simply gets none.
 */
import { LANGUAGES, type Lang } from '@/lib/i18n'

export const FAQ_LOCALES = LANGUAGES

export type FaqLocale = Lang

export interface CategoryFaqEntry {
  question: string
  answer: string
}

export type CategoryFaqSet = Readonly<Record<FaqLocale, readonly CategoryFaqEntry[]>>

/** Category slug → FAQ per locale. */
export type CategoryFaqSets = Readonly<Record<string, CategoryFaqSet>>
