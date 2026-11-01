/**
 * Editorial rules for category FAQs, shared by the unit test and the
 * writers' check script (scripts/seo/check-category-faqs.ts).
 */
import { FAQ_LOCALES, type CategoryFaqSet, type CategoryFaqSets } from './types'

/** Category hubs carry 5 questions; a flagship guide (air fryers) up to 8. */
export const FAQ_ENTRIES_MIN = 5
export const FAQ_ENTRIES_MAX = 8
const ANSWER_MIN_WORDS = 35
const ANSWER_MAX_WORDS = 110
const FIRST_SENTENCE_MAX_WORDS = 35

/**
 * Home Nura compares documentation, it runs no lab: no word that claims a
 * test ("test", "getestet", "Testsieger", "testato", "przetestowane"…).
 * Matches at a word start only, so a cited "Stiftung Warentest" stays legal,
 * and leaves out the Italian "testa" (head, "mal di testa") and "testina"
 * (the thermostatic head of a radiator valve), which claim nothing.
 */
const TEST_CLAIM = /(^|[^\p{L}])(test(?!a(?!\p{L})|in[ae](?!\p{L}))|getest|przetest|probad[oa]s?\b|probamos)/iu
const URL = /https?:\/\/|www\./i

const words = (text: string) => text.trim().split(/\s+/).filter(Boolean).length

export function firstSentence(text: string): string {
  const match = text.match(/^.+?[.!?](?=\s|$)/u)
  return match ? match[0] : text
}

export function checkFaqSet(slug: string, set: CategoryFaqSet): string[] {
  const errors: string[] = []
  for (const locale of FAQ_LOCALES) {
    const entries = set[locale]
    const count = entries?.length ?? 0
    if (count < FAQ_ENTRIES_MIN || count > FAQ_ENTRIES_MAX) {
      errors.push(`${slug}/${locale}: ${count} entries, expected ${FAQ_ENTRIES_MIN}-${FAQ_ENTRIES_MAX}`)
      continue
    }
    entries.forEach(({ question, answer }, i) => {
      const at = `${slug}/${locale}#${i + 1}`
      if (!question.trim().endsWith('?')) errors.push(`${at}: question must end with "?"`)
      if (locale === 'es' && !question.trim().startsWith('¿')) errors.push(`${at}: Spanish question must start with "¿"`)
      if (question.length > 140) errors.push(`${at}: question longer than 140 characters`)
      const n = words(answer)
      if (n < ANSWER_MIN_WORDS || n > ANSWER_MAX_WORDS) errors.push(`${at}: answer has ${n} words (${ANSWER_MIN_WORDS}-${ANSWER_MAX_WORDS})`)
      const lead = words(firstSentence(answer))
      if (lead > FIRST_SENTENCE_MAX_WORDS) errors.push(`${at}: first sentence has ${lead} words (max ${FIRST_SENTENCE_MAX_WORDS})`)
      for (const [field, text] of [['question', question], ['answer', answer]] as const) {
        if (TEST_CLAIM.test(text)) errors.push(`${at}: ${field} uses a "test" word`)
        if (URL.test(text)) errors.push(`${at}: ${field} contains a URL`)
      }
    })
    const questions = entries.map((e) => e.question.trim().toLowerCase())
    if (new Set(questions).size !== questions.length) errors.push(`${slug}/${locale}: duplicate question`)
  }
  return errors
}

/** Cross-category rule: no question or answer reused between categories. */
export function checkFaqSetsUnique(sets: CategoryFaqSets): string[] {
  const errors: string[] = []
  for (const locale of FAQ_LOCALES) {
    const seen = new Map<string, string>()
    for (const [slug, set] of Object.entries(sets)) {
      for (const { question, answer } of set[locale] ?? []) {
        for (const text of [question, answer]) {
          const key = text.trim().toLowerCase()
          const owner = seen.get(key)
          if (owner && owner !== slug) errors.push(`${locale}: "${text.slice(0, 60)}…" used by ${owner} and ${slug}`)
          seen.set(key, slug)
        }
      }
    }
  }
  return errors
}
