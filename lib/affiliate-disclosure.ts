import { resolveLang, type Lang } from '@/lib/i18n'

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
}

export function amazonAssociateDisclosure(lang: string): string {
  return AMAZON_ASSOCIATE_DISCLOSURE[resolveLang(lang)]
}
