/**
 * Phase CC — catalog content helpers (Moteur 1 foundation).
 *
 * These helpers derive all the strings a catalog-driven category
 * page needs — hero, intro, FAQ block, related-categories blurbs —
 * from the typed MetaSilo + Category objects. No hand-written copy
 * per category: every output is a deterministic function of the
 * catalog, so Phase DD can stand up /[silo]/[category] routes at
 * scale without a 62 × 6 locale copywriting pass.
 *
 * Content is intentionally skeletal but real: it uses the
 * category's primaryKeyword, the silo's descriptor and Home Nura's
 * methodology voice. Pages backed by these helpers are safe to
 * ship noindexed until the editorial team writes category-specific
 * long-form (at which point indexable flips true in the catalog).
 *
 * Invariants (enforced by tests):
 *   - Every helper returns non-empty strings in every locale.
 *   - FAQ block has at least 3 Q/A pairs (minimum for FAQPage JSON-LD
 *     to be worth emitting).
 *   - Outputs never reference the flagship silo by name, so the
 *     helpers can legitimately power non-cuisine silos without
 *     hard-coding "air fryer" references in generic copy.
 */

import type { Category } from './types'
import type { Lang } from '@/lib/i18n'
import { getMetaSilo } from './meta-silos'

// ---------------------------------------------------------------------
// Hero block
// ---------------------------------------------------------------------

export interface CategoryHero {
  /** Kicker above the H1 — usually the category title. */
  kicker: string
  /** Main H1 — "best {category} 2026" in the right locale. */
  title: string
  /** Secondary line under the H1 — one-liner tying cat + silo. */
  subtitle: string
  /** Opening paragraph — 2-3 sentences anchored in EU criteria. */
  intro: string
  /** Buy CTA label used on product cards. */
  buyCtaLabel: string
}

interface HeroTemplate {
  title: (cat: string) => string
  subtitle: (silo: string) => string
  intro: (cat: string, silo: string, keyword: string) => string
  buyCtaLabel: string
}

const heroTemplates: Record<Lang, HeroTemplate> = {
  fr: {
    title: (cat) => `Les meilleurs ${cat.toLowerCase()} 2026`,
    subtitle: (silo) => `Testés pour l'Europe — ${silo.toLowerCase()}`,
    intro: (cat, silo, keyword) =>
      `Notre sélection de ${cat.toLowerCase()} dans la catégorie ${silo.toLowerCase()}, évaluée sur les critères qui comptent en Europe : coût énergétique annuel, étiquette énergie EU, conformité RGPD, disponibilité des pièces détachées sur cinq ans et compatibilité Matter. Nous écartons les modèles qui sur-vendent le marketing et retenons ceux qui tiennent sur la durée. Requête cible : ${keyword}.`,
    buyCtaLabel: 'Vérifier le prix sur Amazon',
  },
  en: {
    title: (cat) => `Best ${cat.toLowerCase()} 2026`,
    subtitle: (silo) => `Tested for Europe — ${silo.toLowerCase()}`,
    intro: (cat, silo, keyword) =>
      `Our curated ${cat.toLowerCase()} picks from the ${silo.toLowerCase()} category, graded on what really matters in Europe: annual energy cost, EU energy label, GDPR compliance, spare-part availability over five years and Matter support. We drop models that over-sell marketing and keep the ones that go the distance. Target query: ${keyword}.`,
    buyCtaLabel: 'Check price on Amazon',
  },
  de: {
    title: (cat) => `Die besten ${cat} 2026`,
    subtitle: (silo) => `Für Europa getestet — ${silo.toLowerCase()}`,
    intro: (cat, silo, keyword) =>
      `Unsere Auswahl an ${cat} aus der Kategorie ${silo.toLowerCase()}, bewertet nach den Kriterien, die in Europa wirklich zählen: jährliche Energiekosten, EU-Energielabel, DSGVO-Konformität, Ersatzteil­verfügbarkeit über fünf Jahre und Matter-Unterstützung. Modelle mit reinem Marketing fliegen raus, Geräte mit Langlebigkeit bleiben. Zielanfrage: ${keyword}.`,
    buyCtaLabel: 'Preis bei Amazon prüfen',
  },
  es: {
    title: (cat) => `Los mejores ${cat.toLowerCase()} 2026`,
    subtitle: (silo) => `Probados para Europa — ${silo.toLowerCase()}`,
    intro: (cat, silo, keyword) =>
      `Nuestra selección de ${cat.toLowerCase()} en la categoría ${silo.toLowerCase()}, evaluada con los criterios que importan en Europa: coste energético anual, etiqueta energética EU, cumplimiento RGPD, disponibilidad de recambios a cinco años y compatibilidad Matter. Descartamos los modelos que sobre-venden el marketing y conservamos los que aguantan. Búsqueda objetivo: ${keyword}.`,
    buyCtaLabel: 'Ver precio en Amazon',
  },
  it: {
    title: (cat) => `I migliori ${cat.toLowerCase()} 2026`,
    subtitle: (silo) => `Testati per l'Europa — ${silo.toLowerCase()}`,
    intro: (cat, silo, keyword) =>
      `La nostra selezione di ${cat.toLowerCase()} nella categoria ${silo.toLowerCase()}, valutata sui criteri che contano davvero in Europa: costo energetico annuo, etichetta energetica EU, conformità GDPR, disponibilità dei ricambi su cinque anni e supporto Matter. Scartiamo i modelli che sopravvalutano il marketing e teniamo quelli che durano. Query target: ${keyword}.`,
    buyCtaLabel: 'Verifica prezzo su Amazon',
  },
  nl: {
    title: (cat) => `De beste ${cat.toLowerCase()} 2026`,
    subtitle: (silo) => `Getest voor Europa — ${silo.toLowerCase()}`,
    intro: (cat, silo, keyword) =>
      `Onze selectie van ${cat.toLowerCase()} in de categorie ${silo.toLowerCase()}, beoordeeld op wat in Europa écht telt: jaarlijkse energiekosten, EU-energielabel, AVG-conformiteit, beschikbaarheid van onderdelen over vijf jaar en Matter-ondersteuning. We laten modellen vallen die teveel op marketing leunen en houden de apparaten die het volhouden. Doelzoekopdracht: ${keyword}.`,
    buyCtaLabel: 'Bekijk prijs op Amazon',
  },
}

export function getCategoryHero(lang: Lang, category: Category): CategoryHero {
  const silo = getMetaSilo(category.metaSilo)
  if (!silo) {
    throw new Error(
      `getCategoryHero: category ${category.slug} references unknown silo ${category.metaSilo}`
    )
  }
  const tmpl = heroTemplates[lang]
  const catTitle = category.title[lang]
  const siloTitle = silo.title[lang]
  const keyword = category.primaryKeyword[lang]
  return {
    kicker: catTitle,
    title: tmpl.title(catTitle),
    subtitle: tmpl.subtitle(siloTitle),
    intro: tmpl.intro(catTitle, siloTitle, keyword),
    buyCtaLabel: tmpl.buyCtaLabel,
  }
}

// ---------------------------------------------------------------------
// FAQ block — derived Q/A, fuels FAQPage JSON-LD on category pages
// ---------------------------------------------------------------------

export interface CategoryFaqEntry {
  question: string
  answer: string
}

type FaqTemplate = (cat: string, silo: string) => CategoryFaqEntry[]

const faqTemplates: Record<Lang, FaqTemplate> = {
  fr: (cat, silo) => [
    {
      question: `Comment bien choisir un ${cat.toLowerCase()} en Europe en 2026 ?`,
      answer: `Notre méthodologie Home Nura évalue chaque ${cat.toLowerCase()} sur cinq critères européens : coût énergétique annuel réel, étiquette énergie EU, conformité RGPD (produits connectés), disponibilité des pièces détachées sur cinq ans et compatibilité Matter. Nous excluons systématiquement les modèles qui ne tiennent pas la durée.`,
    },
    {
      question: `Quels sont les critères européens incontournables pour un ${cat.toLowerCase()} ?`,
      answer: `En Europe, les critères clés sont le marquage CE, l'étiquette énergie EU obligatoire, la conformité RGPD pour les objets connectés, la disponibilité des pièces détachées imposée par la directive réparabilité 2026 et la compatibilité des prises EU/UK. Ces cinq axes alimentent notre Nura Score /10 pour chaque modèle du silo ${silo.toLowerCase()}.`,
    },
    {
      question: `Entrée de gamme ou premium : où se situe la vraie différence ?`,
      answer: `Les modèles d'entrée de gamme économisent sur la durabilité : plastiques moins résistants, pièces détachées rarement disponibles au-delà de deux ans, consommation annoncée optimiste. Les modèles premium facturent la longévité et le service après-vente. Notre sélection ${silo.toLowerCase()} distingue les deux sans compromis — c'est exactement ce que notre méthodologie publique détaille.`,
    },
  ],
  en: (cat, silo) => [
    {
      question: `How do I pick the right ${cat.toLowerCase()} in Europe in 2026?`,
      answer: `Our Home Nura methodology scores every ${cat.toLowerCase()} on five European criteria: real annual energy cost, EU energy label, GDPR compliance (for connected products), five-year spare-part availability and Matter support. Models that can't go the distance are dropped on sight.`,
    },
    {
      question: `Which European criteria really matter for a ${cat.toLowerCase()}?`,
      answer: `In Europe the key criteria are CE marking, the mandatory EU energy label, GDPR compliance for connected devices, spare-part availability under the 2026 repairability directive and EU/UK plug compatibility. These five axes feed our Nura Score /10 for every model in the ${silo.toLowerCase()} silo.`,
    },
    {
      question: `Budget vs premium — where is the real difference?`,
      answer: `Entry-level models save money on durability: cheaper plastics, spare parts rarely available beyond two years, optimistic energy figures. Premium models charge for longevity and after-sales service. Our ${silo.toLowerCase()} picks separate the two cleanly — exactly what our public methodology lays out.`,
    },
  ],
  de: (cat, silo) => [
    {
      question: `Wie wählt man einen ${cat} in Europa 2026 richtig aus?`,
      answer: `Unsere Home-Nura-Methodik bewertet jeden ${cat} nach fünf europäischen Kriterien: reale jährliche Energiekosten, EU-Energielabel, DSGVO-Konformität (bei vernetzten Geräten), fünfjährige Ersatzteilverfügbarkeit und Matter-Unterstützung. Geräte, die nicht durchhalten, fliegen sofort raus.`,
    },
    {
      question: `Welche europäischen Kriterien sind für einen ${cat} entscheidend?`,
      answer: `In Europa zählen CE-Kennzeichnung, das verpflichtende EU-Energielabel, DSGVO-Konformität bei vernetzten Produkten, Ersatzteilverfügbarkeit nach der Reparierbarkeits-Richtlinie 2026 sowie EU/UK-Steckerkompatibilität. Diese fünf Achsen bilden unseren Nura Score /10 für jedes Modell im Silo ${silo.toLowerCase()}.`,
    },
    {
      question: `Einsteiger- oder Premium-Modell — wo liegt der echte Unterschied?`,
      answer: `Einsteigermodelle sparen bei der Haltbarkeit: minderwertige Kunststoffe, Ersatzteile selten länger als zwei Jahre verfügbar, optimistische Energieangaben. Premium-Modelle bezahlen für Langlebigkeit und Service. Unsere ${silo.toLowerCase()}-Auswahl trennt beide klar — genau das legt unsere öffentliche Methodik offen.`,
    },
  ],
  es: (cat, silo) => [
    {
      question: `¿Cómo elegir un ${cat.toLowerCase()} en Europa en 2026?`,
      answer: `Nuestra metodología Home Nura evalúa cada ${cat.toLowerCase()} en cinco criterios europeos: coste energético anual real, etiqueta energética EU, cumplimiento RGPD (en productos conectados), disponibilidad de recambios a cinco años y compatibilidad Matter. Los modelos que no duran se descartan de entrada.`,
    },
    {
      question: `¿Qué criterios europeos son imprescindibles para un ${cat.toLowerCase()}?`,
      answer: `En Europa cuentan el marcado CE, la etiqueta energética EU obligatoria, el cumplimiento del RGPD para productos conectados, la disponibilidad de recambios que exige la directiva de reparabilidad de 2026 y la compatibilidad de enchufes EU/UK. Estos cinco ejes alimentan nuestro Nura Score /10 para cada modelo del silo ${silo.toLowerCase()}.`,
    },
    {
      question: `Gama básica o premium: ¿dónde está la diferencia real?`,
      answer: `Los modelos de entrada ahorran en durabilidad: plásticos menos resistentes, recambios rara vez disponibles más allá de dos años y consumo optimista. Los premium cobran por longevidad y servicio. Nuestra selección ${silo.toLowerCase()} separa ambos sin concesiones — justo lo que detalla nuestra metodología pública.`,
    },
  ],
  it: (cat, silo) => [
    {
      question: `Come scegliere un ${cat.toLowerCase()} in Europa nel 2026?`,
      answer: `La nostra metodologia Home Nura valuta ogni ${cat.toLowerCase()} su cinque criteri europei: costo energetico annuo reale, etichetta energetica EU, conformità GDPR (per i prodotti connessi), disponibilità dei ricambi su cinque anni e supporto Matter. I modelli che non durano vengono scartati a vista.`,
    },
    {
      question: `Quali sono i criteri europei fondamentali per un ${cat.toLowerCase()}?`,
      answer: `In Europa contano la marcatura CE, l'etichetta energetica EU obbligatoria, la conformità GDPR per i dispositivi connessi, la disponibilità dei ricambi imposta dalla direttiva riparabilità 2026 e la compatibilità prese EU/UK. Questi cinque assi alimentano il nostro Nura Score /10 per ogni modello del silo ${silo.toLowerCase()}.`,
    },
    {
      question: `Entry-level o premium: dov'è la differenza reale?`,
      answer: `I modelli entry-level risparmiano sulla durata: plastiche meno resistenti, ricambi raramente disponibili oltre i due anni, consumi dichiarati ottimistici. I premium si fanno pagare la longevità e il servizio. La nostra selezione ${silo.toLowerCase()} separa i due senza compromessi — esattamente quello che la nostra metodologia pubblica espone.`,
    },
  ],
  nl: (cat, silo) => [
    {
      question: `Hoe kies je in 2026 de juiste ${cat.toLowerCase()} voor Europa?`,
      answer: `Onze Home Nura-methodologie beoordeelt elke ${cat.toLowerCase()} op vijf Europese criteria: werkelijke jaarlijkse energiekost, EU-energielabel, AVG-conformiteit (bij verbonden producten), vijfjaarlijkse beschikbaarheid van onderdelen en Matter-ondersteuning. Modellen die het niet volhouden, vallen meteen af.`,
    },
    {
      question: `Welke Europese criteria tellen écht voor een ${cat.toLowerCase()}?`,
      answer: `In Europa tellen CE-markering, het verplichte EU-energielabel, AVG-naleving voor verbonden producten, beschikbaarheid van onderdelen onder de reparabiliteitsrichtlijn 2026 en compatibiliteit van EU/UK-stekkers. Deze vijf assen vormen onze Nura Score /10 voor elk model in het silo ${silo.toLowerCase()}.`,
    },
    {
      question: `Instapmodel of premium — waar zit het echte verschil?`,
      answer: `Instapmodellen besparen op duurzaamheid: minder stevige kunststoffen, onderdelen zelden beschikbaar na twee jaar, optimistische verbruikscijfers. Premium betaalt voor levensduur en service. Onze ${silo.toLowerCase()}-selectie scheidt beide zonder concessies — precies wat onze publieke methodologie uitlegt.`,
    },
  ],
}

export function getCategoryFaq(lang: Lang, category: Category): CategoryFaqEntry[] {
  const silo = getMetaSilo(category.metaSilo)
  if (!silo) {
    throw new Error(
      `getCategoryFaq: category ${category.slug} references unknown silo ${category.metaSilo}`
    )
  }
  return faqTemplates[lang](category.title[lang], silo.title[lang])
}
