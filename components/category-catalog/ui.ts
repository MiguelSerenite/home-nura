import type { Lang } from '@/lib/i18n'
import type { CatalogSegment } from '@/lib/category-catalog/types'

export interface CatalogUi {
  title: string
  intro: string
  bestFor: string
  segments: Readonly<Record<CatalogSegment, string>>
  /** Same wording as the hub's picks (components/QuickAnswer.tsx). */
  button: string
  disclosure: string
}

const EN: CatalogUi = {
  title: 'The other models we compare',
  intro: 'Beyond our top picks: more models in this category, from budget to premium.',
  bestFor: 'Best for:',
  segments: { budget: 'Budget', mid: 'Mid-range', premium: 'Premium' },
  button: 'Check price on Amazon',
  disclosure: 'Amazon affiliate links: commission at no extra cost to you.',
}

export const CATALOG_UI: Readonly<Record<Lang, CatalogUi>> = {
  fr: {
    title: 'Les autres modèles que nous comparons',
    intro: 'Au-delà de notre sélection : d’autres modèles de la catégorie, du petit budget au haut de gamme.',
    bestFor: 'Idéal pour :',
    segments: { budget: 'Petit budget', mid: 'Milieu de gamme', premium: 'Haut de gamme' },
    button: 'Voir sur Amazon',
    disclosure: 'Liens affiliés Amazon : commission sans surcoût pour vous.',
  },
  en: EN,
  de: {
    title: 'Weitere Modelle im Vergleich',
    intro: 'Über unsere Auswahl hinaus: weitere Modelle dieser Kategorie, vom günstigen Einstieg bis zur Oberklasse.',
    bestFor: 'Ideal für:',
    segments: { budget: 'Einstieg', mid: 'Mittelklasse', premium: 'Oberklasse' },
    button: 'Bei Amazon ansehen',
    disclosure: 'Amazon-Affiliate-Links: Provision ohne Mehrkosten für Sie.',
  },
  es: {
    title: 'Otros modelos que comparamos',
    intro: 'Más allá de nuestra selección: otros modelos de la categoría, de la gama económica a la alta.',
    bestFor: 'Ideal para:',
    segments: { budget: 'Económico', mid: 'Gama media', premium: 'Gama alta' },
    button: 'Ver en Amazon',
    disclosure: 'Enlaces de afiliado de Amazon: comisión sin coste adicional para ti.',
  },
  it: {
    title: 'Gli altri modelli a confronto',
    intro: 'Oltre alla nostra selezione: altri modelli della categoria, dalla fascia economica a quella alta.',
    bestFor: 'Ideale per:',
    segments: { budget: 'Economico', mid: 'Fascia media', premium: 'Fascia alta' },
    button: 'Vedi su Amazon',
    disclosure: 'Link affiliati Amazon: riceviamo una commissione, senza costi aggiuntivi per te.',
  },
  nl: {
    title: 'Andere modellen die we vergelijken',
    intro: 'Naast onze favorieten: meer modellen in deze categorie, van budget tot topklasse.',
    bestFor: 'Ideaal voor:',
    segments: { budget: 'Budget', mid: 'Middenklasse', premium: 'Topklasse' },
    button: 'Bekijk op Amazon',
    disclosure: 'Amazon-affiliatelinks: commissie zonder extra kosten voor jou.',
  },
  pl: {
    title: 'Pozostałe porównywane modele',
    intro: 'Poza naszymi faworytami: więcej modeli z tej kategorii, od budżetowych po klasę premium.',
    bestFor: 'Dla kogo:',
    segments: { budget: 'Budżetowy', mid: 'Średnia półka', premium: 'Wysoka półka' },
    button: 'Zobacz na Amazon',
    disclosure: 'Linki afiliacyjne Amazon: prowizja bez dodatkowych kosztów dla Ciebie.',
  },
  sv: {
    title: 'Fler modeller vi jämför',
    intro: 'Utöver våra favoriter: fler modeller i kategorin, från budget till premium.',
    bestFor: 'Passar för:',
    segments: { budget: 'Budget', mid: 'Mellanklass', premium: 'Premium' },
    button: 'Visa på Amazon',
    disclosure: 'Affiliatelänkar till Amazon: provision utan extra kostnad för dig.',
  },
  us: { ...EN, button: 'View on Amazon', disclosure: 'Amazon affiliate links: we earn a commission at no extra cost to you.' },
  ca: { ...EN, button: 'View on Amazon' },
}
