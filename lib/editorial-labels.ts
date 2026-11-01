import type { Lang } from '@/lib/i18n'

/**
 * Small editorial labels of the long-read pages (kickers above each
 * chapter or buying criterion, the guide badge). They used to be written
 * in French on every language version.
 */

/** "Chapter" kicker of the home page and comparison long reads. */
export const CHAPTER_LABEL: Readonly<Record<Lang, string>> = {
  fr: 'Chapitre',
  en: 'Chapter',
  de: 'Kapitel',
  es: 'Capítulo',
  it: 'Capitolo',
  nl: 'Hoofdstuk',
  pl: 'Rozdział',
  sv: 'Kapitel',
  us: 'Chapter',
  ca: 'Chapter',
}

/** "Criterion" kicker of the buying-guide sections. */
export const CRITERION_LABEL: Readonly<Record<Lang, string>> = {
  fr: 'Critère',
  en: 'Criterion',
  de: 'Kriterium',
  es: 'Criterio',
  it: 'Criterio',
  nl: 'Criterium',
  pl: 'Kryterium',
  sv: 'Kriterium',
  us: 'Criterion',
  ca: 'Criterion',
}

/** Badge above the title of the expert buying guides. */
export const EXPERT_GUIDE_LABEL: Readonly<Record<Lang, string>> = {
  fr: 'Guide expert 2026',
  en: 'Expert guide 2026',
  de: 'Expertenratgeber 2026',
  es: 'Guía experta 2026',
  it: "Guida dell'esperto 2026",
  nl: 'Expertgids 2026',
  pl: 'Poradnik eksperta 2026',
  sv: 'Expertguide 2026',
  us: 'Expert guide 2026',
  ca: 'Expert guide 2026',
}

/** Roman numeral of a 0-based chapter index (I–XII). */
export function romanNumeral(index: number): string {
  return ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'][index] ?? String(index + 1)
}
