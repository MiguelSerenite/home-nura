import { baseLanguage, resolveLang, type Lang } from '@/lib/i18n'

/**
 * Amazon Associates disclosure, in the exact wording Amazon requires for
 * each locale. Shown in the site footer and next to every block of Amazon
 * links. Do not paraphrase: tests/lib/amazon-compliance.test.ts pins it.
 */
export const AMAZON_ASSOCIATE_DISCLOSURE: Readonly<Record<Lang, string>> = {
  fr: 'En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.',
  de: 'Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.',
  en: 'As an Amazon Associate I earn from qualifying purchases.',
  it: 'In qualità di Affiliato Amazon io ricevo un guadagno dagli acquisti idonei.',
  es: 'Como Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.',
  nl: 'Als Amazon Associate verdien ik aan in aanmerking komende aankopen.',
  pl: 'Jestem Partnerem Amazon i otrzymuję wynagrodzenie z tytułu określonych zakupów dokonywanych za moim pośrednictwem.',
  // Operating agreement of affiliate-program.amazon.se, section 5 "Identifying
  // Yourself as an Associate" (version of October 15, 2025, read on 2026-11-01):
  // the agreement exists in English only, even with the Swedish interface
  // selected, and Amazon publishes no Swedish wording, so the statement stays
  // in English rather than being paraphrased.
  sv: 'As an Amazon Associate I earn from qualifying purchases.',
  // affiliate-program.amazon.com/help/operating/agreement, section 5 (version of
  // October 15, 2025, read on 2026-11-01).
  us: 'As an Amazon Associate I earn from qualifying purchases.',
  // associates.amazon.ca/help/operating/agreement, section 5, English version
  // (October 15, 2025, read on 2026-11-01).
  ca: 'As an Amazon Associate I earn from qualifying purchases.',
}

export function amazonAssociateDisclosure(lang: string): string {
  return AMAZON_ASSOCIATE_DISCLOSURE[resolveLang(lang)]
}

/** Locales whose official statement is not in the page language (amazon.se: English only). */
const DISCLOSURE_LANGUAGE: Partial<Record<Lang, string>> = { sv: 'en' }

/**
 * Language tag of the statement when it differs from the page language
 * (for a lang attribute, so screen readers switch voice), else undefined.
 */
export function amazonDisclosureLanguage(lang: string): string | undefined {
  const page = resolveLang(lang)
  const statement = DISCLOSURE_LANGUAGE[page]
  return statement && statement !== baseLanguage(page) ? statement : undefined
}
