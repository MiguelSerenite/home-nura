/**
 * Interface copy of the market pages, per locale. The page text itself
 * comes from the writers' JSON; these are the labels around it. The
 * store-neutral button ("View on Amazon") is the dictionary's buy_button.
 */

import type { Lang } from '@/lib/i18n'
import type { MarketPageType } from './config'

export interface MarketPageUi {
  home: string
  breadcrumb: string
  /** Section names (Article articleSection, hub list labels). */
  sections: Readonly<Record<MarketPageType, string>>
  answerTitle: string
  picksTitle: Readonly<Record<MarketPageType, string>>
  /** Duel column heading over a pick's `bestFor`. */
  chooseIf: (name: string) => string
  bestFor: string
  specs: string
  /** Phone toggle over a pick's why and specs. */
  details: string
  manufacturerPage: string
  comparisonTitle: string
  tableHint: string
  rankingTitle: string
  rankingIntro: string
  methodologyLink: string
  testersTitle: string
  testersIntro: string
  sourcesTitle: string
  relatedTitle: string
  /** Heading of the list on a category hub. */
  hubListTitle: string
}

const ENGLISH = {
  home: 'Home',
  breadcrumb: 'Breadcrumb',
  sections: { duel: 'Comparisons', guide: 'Guides', news: 'News' },
  answerTitle: 'The short answer',
  picksTitle: { duel: 'Which one should you choose?', guide: 'Our three picks', news: 'Models affected' },
  chooseIf: (name: string) => `Choose the ${name} if…`,
  bestFor: 'Best for',
  specs: 'Specifications',
  details: 'Details',
  manufacturerPage: 'Manufacturer’s page',
  comparisonTitle: 'Comparison table',
  tableHint: 'Swipe the table to see every column.',
  rankingTitle: 'Why this ranking',
  rankingIntro: 'We rank models on product criteria only, weighted as shown below. Price and clicks play no part.',
  methodologyLink: 'How we compare',
  testersTitle: 'What independent testers found',
  sourcesTitle: 'Sources',
  relatedTitle: 'Keep comparing',
  hubListTitle: 'Comparisons & guides',
} as const

export const MARKET_PAGE_UI: Readonly<Record<Lang, MarketPageUi>> = {
  fr: {
    home: 'Accueil',
    breadcrumb: "Fil d'Ariane",
    sections: { duel: 'Duels', guide: 'Guides', news: 'Actualités' },
    answerTitle: 'La réponse courte',
    picksTitle: { duel: 'Lequel choisir ?', guide: 'Nos trois choix', news: 'Les modèles concernés' },
    chooseIf: (name) => `Choisissez ${name} si…`,
    bestFor: 'Pour qui',
    specs: 'Caractéristiques',
    details: 'Détails',
    manufacturerPage: 'Page du fabricant',
    comparisonTitle: 'Le tableau comparatif',
    tableHint: 'Faites glisser le tableau pour voir toutes les colonnes.',
    rankingTitle: 'Pourquoi ce classement',
    rankingIntro: "Nous classons les modèles sur des critères produit uniquement, pondérés comme ci-dessous. Le prix et les clics n'y entrent pas.",
    methodologyLink: 'Comment nous comparons',
    testersTitle: "Ce qu'ont trouvé les testeurs indépendants",
    testersIntro: 'Nous ne testons pas les produits nous-mêmes. Ces organismes publient leurs propres résultats : lisez-les sur leur site.',
    sourcesTitle: 'Sources',
    relatedTitle: 'À comparer aussi',
    hubListTitle: 'Comparatifs et guides',
  },
  en: {
    ...ENGLISH,
    testersIntro: 'We don’t test products ourselves. These organisations publish their own results: read them on their sites.',
  },
  de: {
    home: 'Startseite',
    breadcrumb: 'Brotkrümelnavigation',
    sections: { duel: 'Vergleiche', guide: 'Ratgeber', news: 'Aktuelles' },
    answerTitle: 'Die kurze Antwort',
    picksTitle: { duel: 'Welches Gerät passt zu Ihnen?', guide: 'Unsere drei Empfehlungen', news: 'Betroffene Modelle' },
    chooseIf: (name) => `Wählen Sie ${name}, wenn …`,
    bestFor: 'Ideal für',
    specs: 'Technische Daten',
    details: 'Details',
    manufacturerPage: 'Herstellerseite',
    comparisonTitle: 'Vergleichstabelle',
    tableHint: 'Wischen Sie seitlich, um alle Spalten zu sehen.',
    rankingTitle: 'Warum diese Reihenfolge',
    rankingIntro: 'Wir ordnen die Modelle ausschließlich nach Produktkriterien, gewichtet wie unten angegeben. Preis und Klicks spielen keine Rolle.',
    methodologyLink: 'So vergleichen wir',
    testersTitle: 'Was unabhängige Prüfstellen herausgefunden haben',
    testersIntro: 'Wir prüfen Produkte nicht selbst. Diese Prüfstellen veröffentlichen eigene Ergebnisse – lesen Sie sie direkt bei ihnen.',
    sourcesTitle: 'Quellen',
    relatedTitle: 'Weiter vergleichen',
    hubListTitle: 'Vergleiche & Ratgeber',
  },
  es: {
    home: 'Inicio',
    breadcrumb: 'Ruta de navegación',
    sections: { duel: 'Comparativas', guide: 'Guías', news: 'Noticias' },
    answerTitle: 'La respuesta corta',
    picksTitle: { duel: '¿Cuál elegir?', guide: 'Nuestras tres opciones', news: 'Modelos afectados' },
    chooseIf: (name) => `Elige ${name} si…`,
    bestFor: 'Ideal para',
    specs: 'Características',
    details: 'Detalles',
    manufacturerPage: 'Página del fabricante',
    comparisonTitle: 'Tabla comparativa',
    tableHint: 'Desliza la tabla para ver todas las columnas.',
    rankingTitle: 'Por qué este orden',
    rankingIntro: 'Ordenamos los modelos solo con criterios de producto, ponderados como se indica abajo. El precio y los clics no cuentan.',
    methodologyLink: 'Cómo comparamos',
    testersTitle: 'Lo que han encontrado los analistas independientes',
    testersIntro: 'No probamos los productos nosotros mismos. Estas organizaciones publican sus propios resultados: consúltalos en su web.',
    sourcesTitle: 'Fuentes',
    relatedTitle: 'Sigue comparando',
    hubListTitle: 'Comparativas y guías',
  },
  it: {
    home: 'Home',
    breadcrumb: 'Percorso di navigazione',
    sections: { duel: 'Confronti', guide: 'Guide', news: 'Notizie' },
    answerTitle: 'La risposta in breve',
    picksTitle: { duel: 'Quale scegliere?', guide: 'Le nostre tre scelte', news: 'Modelli interessati' },
    chooseIf: (name) => `Scegli ${name} se…`,
    bestFor: 'Ideale per',
    specs: 'Caratteristiche',
    details: 'Dettagli',
    manufacturerPage: 'Pagina del produttore',
    comparisonTitle: 'Tabella di confronto',
    tableHint: 'Scorri la tabella per vedere tutte le colonne.',
    rankingTitle: 'Perché questa classifica',
    rankingIntro: 'Classifichiamo i modelli solo in base a criteri di prodotto, ponderati come indicato qui sotto. Prezzo e clic non contano.',
    methodologyLink: 'Come confrontiamo',
    testersTitle: 'Cosa hanno rilevato i test indipendenti',
    testersIntro: 'Non testiamo i prodotti noi stessi. Questi enti pubblicano i propri risultati: leggili sui loro siti.',
    sourcesTitle: 'Fonti',
    relatedTitle: 'Continua a confrontare',
    hubListTitle: 'Confronti e guide',
  },
  nl: {
    home: 'Home',
    breadcrumb: 'Kruimelpad',
    sections: { duel: 'Vergelijkingen', guide: 'Gidsen', news: 'Nieuws' },
    answerTitle: 'Het korte antwoord',
    picksTitle: { duel: 'Welke kies je?', guide: 'Onze drie keuzes', news: 'Betrokken modellen' },
    chooseIf: (name) => `Kies de ${name} als…`,
    bestFor: 'Ideaal voor',
    specs: 'Specificaties',
    details: 'Details',
    manufacturerPage: 'Pagina van de fabrikant',
    comparisonTitle: 'Vergelijkingstabel',
    tableHint: 'Veeg over de tabel om alle kolommen te zien.',
    rankingTitle: 'Waarom deze volgorde',
    rankingIntro: 'We rangschikken modellen alleen op productcriteria, gewogen zoals hieronder. Prijs en klikken tellen niet mee.',
    methodologyLink: 'Zo vergelijken we',
    testersTitle: 'Wat onafhankelijke testers vonden',
    testersIntro: 'We testen producten niet zelf. Deze organisaties publiceren hun eigen resultaten: lees ze op hun site.',
    sourcesTitle: 'Bronnen',
    relatedTitle: 'Verder vergelijken',
    hubListTitle: 'Vergelijkingen & gidsen',
  },
  pl: {
    home: 'Strona główna',
    breadcrumb: 'Ścieżka nawigacji',
    sections: { duel: 'Porównania', guide: 'Poradniki', news: 'Aktualności' },
    answerTitle: 'Krótka odpowiedź',
    picksTitle: { duel: 'Który wybrać?', guide: 'Nasze trzy propozycje', news: 'Modele, których to dotyczy' },
    chooseIf: (name) => `Wybierz ${name}, jeśli…`,
    bestFor: 'Dla kogo',
    specs: 'Specyfikacja',
    details: 'Szczegóły',
    manufacturerPage: 'Strona producenta',
    comparisonTitle: 'Tabela porównawcza',
    tableHint: 'Przesuń tabelę, aby zobaczyć wszystkie kolumny.',
    rankingTitle: 'Dlaczego taka kolejność',
    rankingIntro: 'Modele szeregujemy wyłącznie według kryteriów produktowych, z wagami podanymi poniżej. Cena i kliknięcia nie mają znaczenia.',
    methodologyLink: 'Jak porównujemy',
    testersTitle: 'Co ustalili niezależni testerzy',
    testersIntro: 'Nie testujemy produktów sami. Te organizacje publikują własne wyniki – przeczytaj je na ich stronach.',
    sourcesTitle: 'Źródła',
    relatedTitle: 'Porównuj dalej',
    hubListTitle: 'Porównania i poradniki',
  },
  sv: {
    home: 'Hem',
    breadcrumb: 'Brödsmulor',
    sections: { duel: 'Jämförelser', guide: 'Guider', news: 'Nyheter' },
    answerTitle: 'Det korta svaret',
    picksTitle: { duel: 'Vilken ska du välja?', guide: 'Våra tre val', news: 'Berörda modeller' },
    chooseIf: (name) => `Välj ${name} om…`,
    bestFor: 'Passar för',
    specs: 'Specifikationer',
    details: 'Detaljer',
    manufacturerPage: 'Tillverkarens sida',
    comparisonTitle: 'Jämförelsetabell',
    tableHint: 'Svep i tabellen för att se alla kolumner.',
    rankingTitle: 'Därför den här ordningen',
    rankingIntro: 'Vi rangordnar modellerna enbart efter produktkriterier, viktade enligt nedan. Pris och klick spelar ingen roll.',
    methodologyLink: 'Så jämför vi',
    testersTitle: 'Vad oberoende testare kom fram till',
    testersIntro: 'Vi testar inte produkter själva. Dessa organisationer publicerar egna resultat – läs dem på deras webbplatser.',
    sourcesTitle: 'Källor',
    relatedTitle: 'Jämför vidare',
    hubListTitle: 'Jämförelser och guider',
  },
  us: {
    ...ENGLISH,
    testersIntro: 'We don’t test products ourselves. These organizations publish their own results: read them on their sites.',
  },
  ca: {
    ...ENGLISH,
    testersIntro: 'We don’t test products ourselves. These organizations publish their own results: read them on their sites.',
  },
}
