/**
 * Category-specific FAQ data (one file per silo slice).
 *
 * Written per market, not translated: each locale asks the questions the
 * way buyers in that country search them ("quanto consuma", "werkt niet",
 * "ohne Abo", "cost to run"…). Answer-first wording: the first sentence
 * answers on its own so search engines and AI assistants can quote it.
 *
 * `pl` is filled ahead of the Polish locale so /pl gets real FAQs the day
 * the locale ships; lookups take a plain string for the same reason.
 */

export const FAQ_LOCALES = ['fr', 'en', 'de', 'es', 'it', 'nl', 'pl'] as const

export type FaqLocale = (typeof FAQ_LOCALES)[number]

export interface CategoryFaqEntry {
  question: string
  answer: string
}

export type CategoryFaqSet = Readonly<Record<FaqLocale, readonly CategoryFaqEntry[]>>

/** Category slug → FAQ per locale. */
export type CategoryFaqSets = Readonly<Record<string, CategoryFaqSet>>
