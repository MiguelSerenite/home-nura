import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'

/** Labels shared by the Black Friday pages and the promo blocks on other pages. */
export interface BlackFridayUi {
  home: string
  /** Breadcrumb / kicker label of the hub. */
  hubLabel: string
  picksTitle: string
  picksNote: string
  cta: string
  fromGuide: string
  moreTitle: string
  kindCategory: string
  kindGuide: string
  otherCategories: string
  seeSelection: string
  faqTitle: string
  affiliateNote: string
  bannerTitle: string
  bannerText: string
  bannerCta: string
  allCategories: string
}

export const UI: Record<Lang, BlackFridayUi> = {
  fr: {
    home: 'Accueil',
    hubLabel: `Black Friday ${Y}`,
    picksTitle: 'Les modèles à surveiller',
    picksNote: "Modèles repris de nos guides d'achat. Nous n'affichons aucun prix : vérifiez l'offre du moment sur Amazon.",
    cta: 'Voir sur Amazon',
    fromGuide: "D'après notre guide :",
    moreTitle: 'Pour aller plus loin',
    kindCategory: 'Catégorie',
    kindGuide: "Guide d'achat",
    otherCategories: 'Les autres catégories du Black Friday',
    seeSelection: 'Voir la sélection',
    faqTitle: 'Questions fréquentes',
    affiliateNote: 'Liens affiliés Amazon : commission sans surcoût pour vous.',
    bannerTitle: 'Black Friday : les appareils à surveiller',
    bannerText: 'Vendredi 27 novembre. Les modèles recommandés dans nos guides, catégorie par catégorie, et comment repérer une vraie bonne affaire.',
    bannerCta: 'Voir la sélection Black Friday',
    allCategories: 'Toutes les catégories Black Friday',
  },
  en: {
    home: 'Home',
    hubLabel: `Black Friday ${Y}`,
    picksTitle: 'The models worth watching',
    picksNote: 'Models taken from our buying guides. We show no prices: check the current offer on Amazon.',
    cta: 'View on Amazon',
    fromGuide: 'From our guide:',
    moreTitle: 'Go further',
    kindCategory: 'Category',
    kindGuide: 'Buying guide',
    otherCategories: 'Other Black Friday categories',
    seeSelection: 'See the picks',
    faqTitle: 'Frequently asked questions',
    affiliateNote: 'Amazon affiliate links: commission at no extra cost to you.',
    bannerTitle: 'Black Friday: the devices worth watching',
    bannerText: 'Friday 27 November. The models our guides recommend, category by category, and how to spot a genuine deal.',
    bannerCta: 'See the Black Friday picks',
    allCategories: 'All Black Friday categories',
  },
  de: {
    home: 'Start',
    hubLabel: `Black Friday ${Y}`,
    picksTitle: 'Die Modelle im Blick',
    picksNote: 'Modelle aus unseren Kaufratgebern. Wir zeigen keine Preise: Prüfen Sie das aktuelle Angebot bei Amazon.',
    cta: 'Bei Amazon ansehen',
    fromGuide: 'Aus unserem Ratgeber:',
    moreTitle: 'Mehr dazu',
    kindCategory: 'Kategorie',
    kindGuide: 'Kaufratgeber',
    otherCategories: 'Weitere Black-Friday-Kategorien',
    seeSelection: 'Zur Auswahl',
    faqTitle: 'Häufige Fragen',
    affiliateNote: 'Amazon-Affiliate-Links: Provision ohne Mehrkosten für Sie.',
    bannerTitle: 'Black Friday: Diese Geräte lohnen den Blick',
    bannerText: 'Freitag, 27. November. Die Modelle aus unseren Ratgebern, nach Kategorien, und wie Sie ein echtes Angebot erkennen.',
    bannerCta: 'Zur Black-Friday-Auswahl',
    allCategories: 'Alle Black-Friday-Kategorien',
  },
  es: {
    home: 'Inicio',
    hubLabel: `Black Friday ${Y}`,
    picksTitle: 'Los modelos a seguir',
    picksNote: 'Modelos sacados de nuestras guías de compra. No mostramos precios: consulta la oferta del momento en Amazon.',
    cta: 'Ver en Amazon',
    fromGuide: 'Según nuestra guía:',
    moreTitle: 'Para saber más',
    kindCategory: 'Categoría',
    kindGuide: 'Guía de compra',
    otherCategories: 'Otras categorías del Black Friday',
    seeSelection: 'Ver la selección',
    faqTitle: 'Preguntas frecuentes',
    affiliateNote: 'Enlaces de afiliado de Amazon: comisión sin coste adicional para ti.',
    bannerTitle: 'Black Friday: los aparatos que merece la pena seguir',
    bannerText: 'Viernes 27 de noviembre. Los modelos que recomiendan nuestras guías, categoría por categoría, y cómo reconocer una oferta real.',
    bannerCta: 'Ver la selección Black Friday',
    allCategories: 'Todas las categorías Black Friday',
  },
  it: {
    home: 'Home',
    hubLabel: `Black Friday ${Y}`,
    picksTitle: 'I modelli da tenere d’occhio',
    picksNote: 'Modelli tratti dalle nostre guide all’acquisto. Non mostriamo prezzi: verifica l’offerta del momento su Amazon.',
    cta: 'Vedi su Amazon',
    fromGuide: 'Dalla nostra guida:',
    moreTitle: 'Per approfondire',
    kindCategory: 'Categoria',
    kindGuide: 'Guida all’acquisto',
    otherCategories: 'Altre categorie del Black Friday',
    seeSelection: 'Vedi la selezione',
    faqTitle: 'Domande frequenti',
    affiliateNote: 'Link di affiliazione Amazon: commissione senza costi aggiuntivi per te.',
    bannerTitle: 'Black Friday: i dispositivi da tenere d’occhio',
    bannerText: 'Venerdì 27 novembre. I modelli consigliati dalle nostre guide, categoria per categoria, e come riconoscere una vera offerta.',
    bannerCta: 'Vedi la selezione Black Friday',
    allCategories: 'Tutte le categorie Black Friday',
  },
  nl: {
    home: 'Home',
    hubLabel: `Black Friday ${Y}`,
    picksTitle: 'De modellen om te volgen',
    picksNote: 'Modellen uit onze koopgidsen. We tonen geen prijzen: bekijk de actuele aanbieding op Amazon.',
    cta: 'Bekijk op Amazon',
    fromGuide: 'Uit onze gids:',
    moreTitle: 'Meer weten',
    kindCategory: 'Categorie',
    kindGuide: 'Koopgids',
    otherCategories: 'Andere Black Friday-categorieën',
    seeSelection: 'Bekijk de selectie',
    faqTitle: 'Veelgestelde vragen',
    affiliateNote: 'Amazon-affiliatelinks: commissie zonder extra kosten voor jou.',
    bannerTitle: 'Black Friday: de apparaten om te volgen',
    bannerText: 'Vrijdag 27 november. De modellen die onze gidsen aanraden, per categorie, en hoe je een echte deal herkent.',
    bannerCta: 'Bekijk de Black Friday-selectie',
    allCategories: 'Alle Black Friday-categorieën',
  },
}
