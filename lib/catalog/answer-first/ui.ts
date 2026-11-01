/**
 * Interface copy of the answer-first hubs, per locale. The headings the
 * market pages already use (short answer, comparison table, why this
 * ranking, how we compare) come from MARKET_PAGE_UI, so both templates
 * read the same; these are the hub's own labels around them.
 */

import type { Lang } from '@/lib/i18n'
import { MARKET_PAGE_UI } from '@/lib/market-pages/ui'

export interface AnswerFirstUi {
  answerTitle: string
  comparisonTitle: string
  tableHint: string
  rankingTitle: string
  methodologyLink: string
  /** Jump list heading. */
  contentsTitle: string
  /** Picks kicker: "Our 3 picks" for three, "Our picks" otherwise. */
  picksLabel: (count: number) => string
  /** Ranking box intro, above the criteria the guide's table compares. */
  rankingIntro: string
  changelogTitle: string
  /** Last item of the "Updated · by · method" line. */
  method: string
  /** Columns of the picks table (US and Canadian fallback). */
  modelColumn: string
  roleColumn: string
  whyColumn: string
}

interface OwnUi {
  contentsTitle: string
  picks: [three: string, other: string]
  rankingIntro: string
  changelogTitle: string
  method: string
  modelColumn: string
  roleColumn: string
  whyColumn: string
}

const ENGLISH: OwnUi = {
  contentsTitle: 'On this page',
  picks: ['Our 3 picks', 'Our picks'],
  rankingIntro: 'For this category, our table compares models on these criteria. Commissions never influence the ranking.',
  changelogTitle: 'Latest updates',
  method: 'Our method',
  modelColumn: 'Model',
  roleColumn: 'Our pick',
  whyColumn: 'Why we chose it',
}

const OWN: Readonly<Record<Lang, OwnUi>> = {
  fr: {
    contentsTitle: 'Sur cette page',
    picks: ['Nos 3 choix', 'Nos choix'],
    rankingIntro: "Pour cette catégorie, notre tableau compare les modèles sur ces critères. Les commissions n'influencent jamais le classement.",
    changelogTitle: 'Dernières mises à jour',
    method: 'Notre méthode',
    modelColumn: 'Modèle',
    roleColumn: 'Notre choix',
    whyColumn: 'Pourquoi',
  },
  en: ENGLISH,
  de: {
    contentsTitle: 'Auf dieser Seite',
    picks: ['Unsere 3 Empfehlungen', 'Unsere Empfehlungen'],
    rankingIntro: 'In dieser Kategorie vergleicht unsere Tabelle die Modelle nach diesen Kriterien. Provisionen haben nie Einfluss auf die Reihenfolge.',
    changelogTitle: 'Letzte Aktualisierungen',
    method: 'Unsere Methode',
    modelColumn: 'Modell',
    roleColumn: 'Empfehlung',
    whyColumn: 'Warum',
  },
  es: {
    contentsTitle: 'En esta página',
    picks: ['Nuestras 3 opciones', 'Nuestras opciones'],
    rankingIntro: 'En esta categoría, nuestra tabla compara los modelos según estos criterios. Las comisiones nunca influyen en la clasificación.',
    changelogTitle: 'Últimas actualizaciones',
    method: 'Nuestro método',
    modelColumn: 'Modelo',
    roleColumn: 'Nuestra elección',
    whyColumn: 'Por qué',
  },
  it: {
    contentsTitle: 'In questa pagina',
    picks: ['Le nostre 3 scelte', 'Le nostre scelte'],
    rankingIntro: 'Per questa categoria, la nostra tabella confronta i modelli su questi criteri. Le commissioni non influenzano mai la classifica.',
    changelogTitle: 'Ultimi aggiornamenti',
    method: 'Il nostro metodo',
    modelColumn: 'Modello',
    roleColumn: 'La nostra scelta',
    whyColumn: 'Perché',
  },
  nl: {
    contentsTitle: 'Op deze pagina',
    picks: ['Onze 3 keuzes', 'Onze keuzes'],
    rankingIntro: 'Voor deze categorie vergelijkt onze tabel de modellen op deze criteria. Commissies hebben nooit invloed op de volgorde.',
    changelogTitle: 'Laatste updates',
    method: 'Onze methode',
    modelColumn: 'Model',
    roleColumn: 'Onze keuze',
    whyColumn: 'Waarom',
  },
  pl: {
    contentsTitle: 'Na tej stronie',
    picks: ['Nasze 3 propozycje', 'Nasze propozycje'],
    rankingIntro: 'W tej kategorii nasza tabela porównuje modele według tych kryteriów. Prowizje nigdy nie wpływają na kolejność.',
    changelogTitle: 'Ostatnie aktualizacje',
    method: 'Nasza metoda',
    modelColumn: 'Model',
    roleColumn: 'Nasz wybór',
    whyColumn: 'Dlaczego',
  },
  sv: {
    contentsTitle: 'På den här sidan',
    picks: ['Våra 3 val', 'Våra val'],
    rankingIntro: 'I den här kategorin jämför vår tabell modellerna utifrån de här kriterierna. Provisioner påverkar aldrig ordningen.',
    changelogTitle: 'Senaste uppdateringar',
    method: 'Vår metod',
    modelColumn: 'Modell',
    roleColumn: 'Vårt val',
    whyColumn: 'Därför',
  },
  us: ENGLISH,
  ca: ENGLISH,
}

export const ANSWER_FIRST_UI: Readonly<Record<Lang, AnswerFirstUi>> = Object.fromEntries(
  (Object.keys(OWN) as Lang[]).map((lang) => {
    const own = OWN[lang]
    const shared = MARKET_PAGE_UI[lang]
    const ui: AnswerFirstUi = {
      answerTitle: shared.answerTitle,
      comparisonTitle: shared.comparisonTitle,
      tableHint: shared.tableHint,
      rankingTitle: shared.rankingTitle,
      methodologyLink: shared.methodologyLink,
      contentsTitle: own.contentsTitle,
      picksLabel: (count) => (count === 3 ? own.picks[0] : own.picks[1]),
      rankingIntro: own.rankingIntro,
      changelogTitle: own.changelogTitle,
      method: own.method,
      modelColumn: own.modelColumn,
      roleColumn: own.roleColumn,
      whyColumn: own.whyColumn,
    }
    return [lang, ui]
  }),
) as Record<Lang, AnswerFirstUi>
