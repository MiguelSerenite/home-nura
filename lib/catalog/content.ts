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

// ---------------------------------------------------------------------
// Persona guide block — Moteur 2 ("meilleur X pour Y") page copy
//
// Phase EE: drives /[lang]/guides/acheteur/[persona] pages. Each
// output is a pure function of (lang, persona) and the axis the
// persona sits on. 25 personas × 6 locales = 150 guide pages
// generated from the templates below plus live catalog links.
// ---------------------------------------------------------------------

import type { BuyerPersona, PersonaAxis } from './types'

export interface PersonaGuideHero {
  kicker: string
  title: string
  subtitle: string
  intro: string
}

interface PersonaGuideTemplate {
  kicker: string
  title: (label: string) => string
  subtitle: (label: string) => string
  intros: Record<PersonaAxis, (label: string) => string>
}

const personaGuideTemplates: Record<Lang, PersonaGuideTemplate> = {
  fr: {
    kicker: 'Guide d\'achat',
    title: (label) => `Les meilleurs produits pour ${label.toLowerCase()}`,
    subtitle: (label) => `Sélection Home Nura pour ${label.toLowerCase()} en Europe 2026`,
    intros: {
      household: (label) =>
        `Pour ${label.toLowerCase()}, nos sélections privilégient les critères qui comptent vraiment au quotidien : capacité adaptée, ergonomie, facilité d'entretien et durabilité sur cinq ans. Chaque produit recommandé est également pondéré sur son coût énergétique annuel en euros et sa conformité aux réglementations européennes 2026.`,
      budget: (label) =>
        `Le budget ${label.toLowerCase()} est votre contrainte décisive. Notre méthodologie Home Nura pondère différemment selon la tranche de prix : à budget serré, la réparabilité et la consommation annoncée comptent plus que les fonctions premium ; à budget haut, la longévité et le service après-vente européen doivent être irréprochables.`,
      usage: (label) =>
        `Pour un usage ${label.toLowerCase()}, la fiabilité opérationnelle prime sur la fiche technique. Nos recommandations écartent les modèles qui brillent au déballage mais dérivent sur la durée. Chaque fiche intègre un coût énergétique annuel réaliste calculé pour le marché européen.`,
      constraint: (label) =>
        `La contrainte "${label.toLowerCase()}" filtre drastiquement le champ. Notre méthodologie Home Nura applique ce filtre avant même d'ouvrir le classement, puis trie sur les critères européens habituels : étiquette énergie, conformité RGPD, pièces détachées sur cinq ans et compatibilité Matter.`,
    },
  },
  en: {
    kicker: 'Buying guide',
    title: (label) => `Best products for ${label.toLowerCase()}`,
    subtitle: (label) => `Home Nura picks for ${label.toLowerCase()} in Europe 2026`,
    intros: {
      household: (label) =>
        `For ${label.toLowerCase()}, our picks weight the criteria that really matter day to day: right-sized capacity, ergonomics, ease of maintenance and five-year durability. Every product here is also graded on its annual energy cost in euros and its compliance with 2026 European regulations.`,
      budget: (label) =>
        `The ${label.toLowerCase()} budget is your hard constraint. Our Home Nura methodology re-weights differently per price tier: on a tight budget, repairability and declared consumption matter more than premium features; at the top end, longevity and European after-sales service must be impeccable.`,
      usage: (label) =>
        `For ${label.toLowerCase()}, operational reliability trumps the spec sheet. Our picks drop models that shine on unboxing but drift over time. Every entry ships with a realistic annual energy cost calculated for the European market.`,
      constraint: (label) =>
        `The "${label.toLowerCase()}" constraint filters the field drastically. Our Home Nura methodology applies this filter before the ranking even opens, then sorts on the usual European criteria: EU energy label, GDPR compliance, five-year spare-part availability and Matter support.`,
    },
  },
  de: {
    kicker: 'Kaufberatung',
    title: (label) => `Die besten Produkte für ${label}`,
    subtitle: (label) => `Home-Nura-Auswahl für ${label} in Europa 2026`,
    intros: {
      household: (label) =>
        `Für ${label} gewichten unsere Empfehlungen die Kriterien, die im Alltag wirklich zählen: passende Kapazität, Ergonomie, einfache Wartung und Langlebigkeit über fünf Jahre. Jedes Produkt wird zudem anhand seiner jährlichen Energiekosten in Euro und seiner Konformität mit den europäischen Vorschriften 2026 bewertet.`,
      budget: (label) =>
        `Das Budget „${label}" ist Ihre harte Grenze. Unsere Home-Nura-Methodik gewichtet je nach Preisklasse unterschiedlich: bei knappem Budget zählen Reparierbarkeit und angegebener Verbrauch mehr als Premium-Funktionen; im Oberen-Segment müssen Langlebigkeit und europäischer Kundendienst makellos sein.`,
      usage: (label) =>
        `Für ${label} schlägt Betriebszuverlässigkeit das Datenblatt. Unsere Auswahl entfernt Modelle, die beim Auspacken glänzen, aber mit der Zeit abbauen. Jeder Eintrag liefert realistische jährliche Energiekosten für den europäischen Markt.`,
      constraint: (label) =>
        `Die Einschränkung „${label}" filtert das Feld radikal. Unsere Home-Nura-Methodik wendet diesen Filter an, bevor das Ranking überhaupt geöffnet wird, und sortiert dann nach den üblichen europäischen Kriterien: EU-Energielabel, DSGVO-Konformität, fünfjährige Ersatzteilverfügbarkeit und Matter-Unterstützung.`,
    },
  },
  es: {
    kicker: 'Guía de compra',
    title: (label) => `Los mejores productos para ${label.toLowerCase()}`,
    subtitle: (label) => `Selección Home Nura para ${label.toLowerCase()} en Europa 2026`,
    intros: {
      household: (label) =>
        `Para ${label.toLowerCase()}, nuestras selecciones ponderan los criterios que realmente cuentan en el día a día: capacidad adecuada, ergonomía, facilidad de mantenimiento y durabilidad a cinco años. Cada producto se evalúa también por su coste energético anual en euros y su cumplimiento con las regulaciones europeas 2026.`,
      budget: (label) =>
        `El presupuesto ${label.toLowerCase()} es tu restricción decisiva. Nuestra metodología Home Nura pondera diferente por franja de precio: con presupuesto ajustado, la reparabilidad y el consumo declarado pesan más que las funciones premium; en gama alta, la longevidad y el servicio postventa europeo deben ser impecables.`,
      usage: (label) =>
        `Para un uso ${label.toLowerCase()}, la fiabilidad operativa vence a la ficha técnica. Descartamos los modelos que brillan al desembalar pero se deterioran con el tiempo. Cada entrada incluye un coste energético anual realista calculado para el mercado europeo.`,
      constraint: (label) =>
        `La restricción "${label.toLowerCase()}" filtra el campo drásticamente. Nuestra metodología Home Nura aplica este filtro antes incluso de abrir el ranking, y luego ordena por los criterios europeos habituales: etiqueta energética EU, cumplimiento RGPD, recambios a cinco años y compatibilidad Matter.`,
    },
  },
  it: {
    kicker: 'Guida all\'acquisto',
    title: (label) => `I migliori prodotti per ${label.toLowerCase()}`,
    subtitle: (label) => `Selezione Home Nura per ${label.toLowerCase()} in Europa 2026`,
    intros: {
      household: (label) =>
        `Per ${label.toLowerCase()}, le nostre selezioni pesano i criteri che contano davvero ogni giorno: capacità adatta, ergonomia, facilità di manutenzione e durabilità su cinque anni. Ogni prodotto è valutato anche sul costo energetico annuo in euro e sulla conformità ai regolamenti europei 2026.`,
      budget: (label) =>
        `Il budget ${label.toLowerCase()} è il vostro vincolo decisivo. La nostra metodologia Home Nura pesa diversamente per fascia di prezzo: con budget stretto contano più la riparabilità e i consumi dichiarati delle funzioni premium; in fascia alta, longevità e assistenza europea devono essere impeccabili.`,
      usage: (label) =>
        `Per un uso ${label.toLowerCase()}, l'affidabilità operativa batte la scheda tecnica. Le nostre scelte scartano i modelli che brillano all'apertura ma si deteriorano nel tempo. Ogni voce include un costo energetico annuo realistico calcolato per il mercato europeo.`,
      constraint: (label) =>
        `Il vincolo "${label.toLowerCase()}" filtra il campo in modo drastico. La nostra metodologia Home Nura applica questo filtro prima ancora di aprire la classifica, poi ordina sui soliti criteri europei: etichetta energetica EU, conformità GDPR, ricambi su cinque anni e supporto Matter.`,
    },
  },
  nl: {
    kicker: 'Aankoopgids',
    title: (label) => `De beste producten voor ${label.toLowerCase()}`,
    subtitle: (label) => `Home Nura-selectie voor ${label.toLowerCase()} in Europa 2026`,
    intros: {
      household: (label) =>
        `Voor ${label.toLowerCase()} wegen onze selecties de criteria die dagelijks echt tellen: passende capaciteit, ergonomie, eenvoud van onderhoud en duurzaamheid over vijf jaar. Elk product wordt ook beoordeeld op zijn jaarlijkse energiekost in euro en zijn conformiteit met de Europese regelgeving 2026.`,
      budget: (label) =>
        `Het budget ${label.toLowerCase()} is uw harde grens. Onze Home Nura-methodologie weegt per prijsklasse anders: bij krap budget tellen repareerbaarheid en opgegeven verbruik zwaarder dan premium functies; in de topklasse moeten levensduur en Europese service onberispelijk zijn.`,
      usage: (label) =>
        `Voor ${label.toLowerCase()} verslaat operationele betrouwbaarheid het specificatieblad. Wij verwijderen modellen die bij het uitpakken schitteren maar in de loop van de tijd afglijden. Elke vermelding bevat een realistische jaarlijkse energiekost berekend voor de Europese markt.`,
      constraint: (label) =>
        `De beperking "${label.toLowerCase()}" filtert het veld drastisch. Onze Home Nura-methodologie past deze filter toe vóór de ranking zelfs opent en sorteert daarna op de gebruikelijke Europese criteria: EU-energielabel, AVG-conformiteit, vijfjarige onderdelen­beschikbaarheid en Matter-ondersteuning.`,
    },
  },
}

export function getPersonaGuideHero(
  lang: Lang,
  persona: BuyerPersona
): PersonaGuideHero {
  const tmpl = personaGuideTemplates[lang]
  const label = persona.label[lang]
  return {
    kicker: tmpl.kicker,
    title: tmpl.title(label),
    subtitle: tmpl.subtitle(label),
    intro: tmpl.intros[persona.axis](label),
  }
}

// FAQ: 3 generic entries per locale shared across all personas.
// Keeping them persona-agnostic keeps the template surface small
// while still emitting valid FAQPage schema on every guide page.

const personaFaqTemplates: Record<Lang, CategoryFaqEntry[]> = {
  fr: [
    {
      question: 'Comment Home Nura sélectionne les produits par profil ?',
      answer: `Notre méthodologie publique croise le profil d'usage (foyer, budget, contrainte) avec cinq critères européens : coût énergétique annuel, étiquette énergie EU, conformité RGPD, disponibilité des pièces détachées sur cinq ans et compatibilité Matter. Nous excluons les modèles qui ne tiennent pas sur la durée.`,
    },
    {
      question: 'Les recommandations sont-elles indépendantes ?',
      answer: `Oui. Home Nura est un éditeur indépendant européen ; nos classements ne sont jamais payants. Les liens Amazon sont affiliés, mais la sélection est décidée avant l'intégration des liens, et notre méthodologie publique trace chaque décision.`,
    },
    {
      question: 'À quelle fréquence les classements sont-ils mis à jour ?',
      answer: `Tous les trimestres. Chaque silo est audité tous les trois mois : retrait des modèles en rupture, ajustement des prix, mise à jour des coûts énergétiques et des étiquettes EU. La date de dernière mise à jour est affichée sur chaque page.`,
    },
  ],
  en: [
    {
      question: 'How does Home Nura pick products by profile?',
      answer: `Our public methodology cross-references the usage profile (household, budget, constraint) with five European criteria: annual energy cost, EU energy label, GDPR compliance, five-year spare-part availability and Matter support. Models that can't go the distance are excluded.`,
    },
    {
      question: 'Are the recommendations independent?',
      answer: `Yes. Home Nura is an independent European publisher; our rankings are never paid. Amazon links are affiliate, but the shortlist is decided before the links are wired in, and our public methodology traces every decision.`,
    },
    {
      question: 'How often are the rankings refreshed?',
      answer: `Quarterly. Every silo is audited every three months: out-of-stock models pulled, prices adjusted, energy costs and EU labels updated. The "last updated" stamp is visible on every page.`,
    },
  ],
  de: [
    {
      question: 'Wie wählt Home Nura Produkte nach Profil aus?',
      answer: `Unsere öffentliche Methodik kreuzt das Nutzungsprofil (Haushalt, Budget, Einschränkung) mit fünf europäischen Kriterien: jährliche Energiekosten, EU-Energielabel, DSGVO-Konformität, fünfjährige Ersatzteilverfügbarkeit und Matter-Unterstützung. Geräte, die nicht durchhalten, fliegen raus.`,
    },
    {
      question: 'Sind die Empfehlungen unabhängig?',
      answer: `Ja. Home Nura ist ein unabhängiger europäischer Publisher; unsere Rankings sind nie bezahlt. Amazon-Links sind Affiliate, aber die Auswahl steht vor dem Einbau der Links fest, und unsere öffentliche Methodik dokumentiert jede Entscheidung.`,
    },
    {
      question: 'Wie oft werden die Rankings aktualisiert?',
      answer: `Quartalsweise. Jedes Silo wird alle drei Monate auditiert: ausverkaufte Modelle entfernt, Preise angepasst, Energiekosten und EU-Labels aktualisiert. Das „Zuletzt aktualisiert"-Datum steht auf jeder Seite.`,
    },
  ],
  es: [
    {
      question: '¿Cómo selecciona Home Nura los productos por perfil?',
      answer: `Nuestra metodología pública cruza el perfil de uso (hogar, presupuesto, restricción) con cinco criterios europeos: coste energético anual, etiqueta energética EU, cumplimiento RGPD, disponibilidad de recambios a cinco años y compatibilidad Matter. Los modelos que no duran quedan fuera.`,
    },
    {
      question: '¿Son las recomendaciones independientes?',
      answer: `Sí. Home Nura es un editor independiente europeo; nuestros rankings nunca son de pago. Los enlaces de Amazon son afiliados, pero la selección se decide antes de integrar los enlaces, y nuestra metodología pública traza cada decisión.`,
    },
    {
      question: '¿Con qué frecuencia se actualizan los rankings?',
      answer: `Trimestralmente. Cada silo se audita cada tres meses: retirada de modelos agotados, ajuste de precios, actualización de costes energéticos y etiquetas EU. La fecha de última actualización se muestra en cada página.`,
    },
  ],
  it: [
    {
      question: 'Come seleziona Home Nura i prodotti per profilo?',
      answer: `La nostra metodologia pubblica incrocia il profilo d'uso (famiglia, budget, vincolo) con cinque criteri europei: costo energetico annuo, etichetta energetica EU, conformità GDPR, disponibilità ricambi su cinque anni e supporto Matter. I modelli che non durano sono esclusi.`,
    },
    {
      question: 'Le raccomandazioni sono indipendenti?',
      answer: `Sì. Home Nura è un editore indipendente europeo; le nostre classifiche non sono mai a pagamento. I link Amazon sono affiliati, ma la selezione è decisa prima di integrare i link, e la nostra metodologia pubblica traccia ogni decisione.`,
    },
    {
      question: 'Con quale frequenza le classifiche vengono aggiornate?',
      answer: `Trimestralmente. Ogni silo viene auditato ogni tre mesi: rimozione dei modelli esauriti, adeguamento dei prezzi, aggiornamento dei costi energetici e delle etichette EU. La data dell'ultimo aggiornamento è visibile su ogni pagina.`,
    },
  ],
  nl: [
    {
      question: 'Hoe selecteert Home Nura producten per profiel?',
      answer: `Onze publieke methodologie kruist het gebruiksprofiel (huishouden, budget, beperking) met vijf Europese criteria: jaarlijkse energiekost, EU-energielabel, AVG-naleving, vijfjaarlijkse beschikbaarheid van onderdelen en Matter-ondersteuning. Modellen die niet duurzaam zijn vallen af.`,
    },
    {
      question: 'Zijn de aanbevelingen onafhankelijk?',
      answer: `Ja. Home Nura is een onafhankelijke Europese uitgever; onze rankings zijn nooit betaald. Amazon-links zijn affiliate, maar de shortlist wordt bepaald voordat de links worden ingebouwd, en onze publieke methodologie traceert elke beslissing.`,
    },
    {
      question: 'Hoe vaak worden de rankings bijgewerkt?',
      answer: `Elk kwartaal. Elk silo wordt elke drie maanden geaudit: uitverkochte modellen verwijderd, prijzen aangepast, energiekosten en EU-labels bijgewerkt. De "laatst bijgewerkt"-datum staat op elke pagina.`,
    },
  ],
}

export function getPersonaGuideFaq(lang: Lang): CategoryFaqEntry[] {
  return personaFaqTemplates[lang]
}
