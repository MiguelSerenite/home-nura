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

// ---------------------------------------------------------------------
// Problem / troubleshooting block — Moteur 3 page copy
//
// Phase FF: drives /[lang]/guides/probleme/[problem] pages. Each
// Problem already carries a localized `query` (the exact search we
// target); these helpers layer on severity-appropriate guidance,
// category anchoring, and a derived FAQ so every troubleshooting
// page ships with real body copy and FAQPage JSON-LD.
//
// Severity → CTA semantics:
//   minor     → inline quick fix, no support escalation
//   moderate  → step-by-step fix, with "still stuck?" fallback
//   critical  → contact manufacturer first, never push affiliate
// ---------------------------------------------------------------------

import type { Problem, ProblemSeverity } from './types'

export interface ProblemContent {
  kicker: string
  title: string
  subtitle: string
  severityLabel: string
  diagnosis: string
  quickFix: string
  fallbackCta: string
  backToCategoryLabel: string
}

interface ProblemUi {
  kicker: string
  subtitlePrefix: string
  severityLabels: Record<ProblemSeverity, string>
  diagnoses: Record<ProblemSeverity, string>
  quickFixes: Record<ProblemSeverity, string>
  fallbackCtas: Record<ProblemSeverity, string>
  backToCategory: string
  faq: (cat: string) => CategoryFaqEntry[]
}

const problemTemplates: Record<Lang, ProblemUi> = {
  fr: {
    kicker: 'Dépannage',
    subtitlePrefix: 'Guide Home Nura — catégorie',
    severityLabels: {
      minor: 'Sévérité : mineure',
      moderate: 'Sévérité : modérée',
      critical: 'Sévérité : critique',
    },
    diagnoses: {
      minor: `Ce symptôme est courant et généralement sans conséquence. Dans la plupart des cas, un nettoyage ciblé ou un ajustement d'utilisation résout le problème en moins de dix minutes.`,
      moderate: `Ce symptôme n'est pas anodin mais reste réparable sans intervention professionnelle dans la majorité des cas. Suivez la procédure ci-dessous dans l'ordre et arrêtez-vous dès que le problème disparaît.`,
      critical: `Attention : ce symptôme peut indiquer un défaut matériel sérieux. N'utilisez plus l'appareil tant que la cause n'est pas identifiée. Nous recommandons de contacter le fabricant ou un réparateur agréé avant toute tentative de remise en service.`,
    },
    quickFixes: {
      minor: `Débranchez l'appareil, laissez-le refroidir, puis nettoyez l'élément concerné à l'eau tiède et au savon doux (jamais d'éponge abrasive sur les revêtements antiadhésifs). Remontez, rebranchez et testez un cycle court à vide.`,
      moderate: `1. Débranchez et laissez refroidir. 2. Inspectez visuellement les composants accessibles. 3. Suivez la procédure constructeur (manuel ou site officiel). 4. Si la manipulation nécessite un démontage, arrêtez-vous et contactez le service client — garantie UE oblige.`,
      critical: `Débranchez immédiatement et n'essayez pas de poursuivre l'utilisation. Documentez le symptôme (photo, vidéo, bruits), puis contactez le service client du fabricant. En Europe, la garantie légale de conformité couvre ce type de panne pendant au moins deux ans.`,
    },
    fallbackCtas: {
      minor: 'Consulter notre méthodologie d\'achat',
      moderate: 'Consulter la garantie et les pièces détachées',
      critical: 'Contacter le fabricant',
    },
    backToCategory: 'Retour à la catégorie',
    faq: (cat) => [
      {
        question: `Ce problème est-il couvert par la garantie européenne ?`,
        answer: `En Europe, tout ${cat.toLowerCase()} acheté neuf chez un revendeur officiel bénéficie d'une garantie légale de conformité d'au moins deux ans (directive (UE) 2019/771). Cette garantie couvre les défauts présents à la livraison, quelle qu'en soit la manifestation ultérieure.`,
      },
      {
        question: `Dois-je contacter le service après-vente ou retourner en magasin ?`,
        answer: `Vous pouvez choisir : le droit européen met la garantie légale à la charge du vendeur, pas du fabricant. En pratique, un retour magasin est souvent plus rapide, mais le fabricant peut réparer si la casse est hors garantie. Gardez la preuve d'achat.`,
      },
      {
        question: `Comment Home Nura intègre ces pannes dans ses tests ?`,
        answer: `Notre méthodologie publique ajoute une pénalité Nura Score /10 pour tout ${cat.toLowerCase()} dont les pannes récurrentes sont documentées dans les retours utilisateurs européens. Un modèle qui tombe trop souvent en panne ne sort jamais en tête, quelle que soit sa marque.`,
      },
    ],
  },
  en: {
    kicker: 'Troubleshooting',
    subtitlePrefix: 'Home Nura guide — category',
    severityLabels: {
      minor: 'Severity: minor',
      moderate: 'Severity: moderate',
      critical: 'Severity: critical',
    },
    diagnoses: {
      minor: `This symptom is common and usually harmless. In most cases, a targeted clean or a small change in usage fixes the problem in under ten minutes.`,
      moderate: `This symptom isn't trivial but is still fixable without a professional in most cases. Work through the procedure below in order and stop as soon as the problem clears.`,
      critical: `Warning: this symptom can indicate a serious hardware defect. Do not keep using the device until the cause is identified. We recommend contacting the manufacturer or an authorised repairer before any attempt to restart it.`,
    },
    quickFixes: {
      minor: `Unplug the device, let it cool down, then clean the affected part with warm water and mild soap (never abrasive sponges on non-stick coatings). Reassemble, plug back in and run a short empty cycle to test.`,
      moderate: `1. Unplug and let cool. 2. Visually inspect accessible components. 3. Follow the manufacturer procedure (manual or official site). 4. If the fix requires disassembly, stop and contact customer support — EU warranty obliges.`,
      critical: `Unplug immediately and do not continue using the device. Document the symptom (photo, video, sounds), then contact the manufacturer's support. In Europe the legal conformity guarantee covers this type of failure for at least two years.`,
    },
    fallbackCtas: {
      minor: 'See our buying methodology',
      moderate: 'Check warranty and spare parts',
      critical: 'Contact the manufacturer',
    },
    backToCategory: 'Back to category',
    faq: (cat) => [
      {
        question: `Is this problem covered by the European warranty?`,
        answer: `In Europe, any ${cat.toLowerCase()} bought new from an official reseller benefits from a legal conformity guarantee of at least two years (Directive (EU) 2019/771). This guarantee covers defects present at delivery, whenever they first manifest.`,
      },
      {
        question: `Should I contact after-sales support or return to the store?`,
        answer: `You can pick: European law puts the legal guarantee on the seller, not the manufacturer. In practice, a store return is usually faster, but the manufacturer can repair if the damage is out of warranty. Keep proof of purchase.`,
      },
      {
        question: `How does Home Nura factor these failures into its reviews?`,
        answer: `Our public methodology adds a Nura Score /10 penalty to any ${cat.toLowerCase()} whose recurring failures are documented in European user feedback. A model that breaks too often never tops our charts, brand notwithstanding.`,
      },
    ],
  },
  de: {
    kicker: 'Fehlerbehebung',
    subtitlePrefix: 'Home-Nura-Leitfaden — Kategorie',
    severityLabels: {
      minor: 'Schweregrad: gering',
      moderate: 'Schweregrad: mittel',
      critical: 'Schweregrad: kritisch',
    },
    diagnoses: {
      minor: `Dieses Symptom ist häufig und meist harmlos. In den meisten Fällen löst eine gezielte Reinigung oder eine kleine Nutzungsanpassung das Problem in unter zehn Minuten.`,
      moderate: `Dieses Symptom ist nicht trivial, lässt sich aber in den meisten Fällen ohne Fachkraft beheben. Arbeiten Sie die Schritte unten der Reihe nach ab und hören Sie auf, sobald das Problem weg ist.`,
      critical: `Achtung: Dieses Symptom kann auf einen ernsten Hardwaredefekt hindeuten. Verwenden Sie das Gerät nicht weiter, bis die Ursache geklärt ist. Wir empfehlen, vor jedem Startversuch den Hersteller oder einen autorisierten Reparateur zu kontaktieren.`,
    },
    quickFixes: {
      minor: `Gerät ausstecken, abkühlen lassen und das betroffene Bauteil mit warmem Wasser und mildem Spülmittel reinigen (niemals Scheuerschwämme auf Antihaft­beschichtungen). Wieder zusammenbauen, anschließen und einen kurzen Leerlauf testen.`,
      moderate: `1. Ausstecken und abkühlen lassen. 2. Zugängliche Bauteile visuell prüfen. 3. Der Herstelleranleitung folgen (Handbuch oder offizielle Seite). 4. Wenn eine Demontage nötig ist, abbrechen und den Kundendienst kontaktieren — EU-Garantie zwingt dazu.`,
      critical: `Sofort ausstecken und nicht weiter verwenden. Symptom dokumentieren (Foto, Video, Geräusche) und den Hersteller-Support kontaktieren. In Europa deckt die gesetzliche Konformitätsgarantie solche Fälle mindestens zwei Jahre ab.`,
    },
    fallbackCtas: {
      minor: 'Zur Kaufmethodik',
      moderate: 'Garantie und Ersatzteile prüfen',
      critical: 'Hersteller kontaktieren',
    },
    backToCategory: 'Zurück zur Kategorie',
    faq: (cat) => [
      {
        question: `Ist dieses Problem durch die europäische Garantie abgedeckt?`,
        answer: `In Europa profitiert jede neu beim offiziellen Händler gekaufte ${cat} von einer gesetzlichen Konformitätsgarantie von mindestens zwei Jahren (Richtlinie (EU) 2019/771). Sie deckt Mängel, die bei Übergabe bestanden, unabhängig vom späteren Auftreten.`,
      },
      {
        question: `Soll ich den Kundendienst kontaktieren oder das Gerät im Laden zurückgeben?`,
        answer: `Sie haben die Wahl: EU-Recht legt die gesetzliche Garantie auf den Verkäufer, nicht den Hersteller. In der Praxis ist die Ladenrückgabe meist schneller, aber der Hersteller kann bei Schäden außerhalb der Garantie reparieren. Kaufnachweis aufbewahren.`,
      },
      {
        question: `Wie fließen solche Defekte in die Home-Nura-Tests ein?`,
        answer: `Unsere öffentliche Methodik zieht jedem ${cat}-Modell Nura-Score-Punkte ab, wenn wiederkehrende Defekte in europäischen Nutzerrückmeldungen dokumentiert sind. Ein Gerät, das zu oft ausfällt, landet nie oben — Marke hin oder her.`,
      },
    ],
  },
  es: {
    kicker: 'Solución de problemas',
    subtitlePrefix: 'Guía Home Nura — categoría',
    severityLabels: {
      minor: 'Gravedad: menor',
      moderate: 'Gravedad: moderada',
      critical: 'Gravedad: crítica',
    },
    diagnoses: {
      minor: `Este síntoma es común y suele ser inofensivo. En la mayoría de los casos, una limpieza específica o un pequeño cambio de uso resuelve el problema en menos de diez minutos.`,
      moderate: `Este síntoma no es trivial pero suele poder resolverse sin profesional. Siga el procedimiento a continuación en orden y deténgase en cuanto el problema desaparezca.`,
      critical: `Atención: este síntoma puede indicar un defecto de hardware grave. No siga usando el aparato hasta identificar la causa. Recomendamos contactar con el fabricante o un reparador autorizado antes de cualquier intento de reutilizarlo.`,
    },
    quickFixes: {
      minor: `Desenchufe el aparato, déjelo enfriar y limpie la pieza afectada con agua tibia y jabón suave (nunca esponjas abrasivas sobre revestimientos antiadherentes). Vuelva a montar, conecte y pruebe con un ciclo corto en vacío.`,
      moderate: `1. Desconectar y dejar enfriar. 2. Inspeccionar visualmente los componentes accesibles. 3. Seguir el procedimiento del fabricante (manual o sitio oficial). 4. Si es necesario desmontar, detenerse y contactar con el servicio de atención — garantía UE obliga.`,
      critical: `Desconéctelo inmediatamente y no siga utilizándolo. Documente el síntoma (foto, vídeo, ruidos) y contacte con el soporte del fabricante. En Europa, la garantía legal de conformidad cubre este tipo de fallo durante al menos dos años.`,
    },
    fallbackCtas: {
      minor: 'Ver nuestra metodología de compra',
      moderate: 'Revisar garantía y recambios',
      critical: 'Contactar con el fabricante',
    },
    backToCategory: 'Volver a la categoría',
    faq: (cat) => [
      {
        question: `¿Este problema está cubierto por la garantía europea?`,
        answer: `En Europa, cualquier ${cat.toLowerCase()} comprada nueva en un distribuidor oficial se beneficia de una garantía legal de conformidad de al menos dos años (Directiva (UE) 2019/771). Cubre los defectos existentes en la entrega, se manifiesten cuando se manifiesten.`,
      },
      {
        question: `¿Debo contactar con el servicio posventa o devolverlo a la tienda?`,
        answer: `Puedes elegir: el derecho europeo pone la garantía legal sobre el vendedor, no sobre el fabricante. En la práctica, la devolución en tienda suele ser más rápida, pero el fabricante puede reparar si el daño está fuera de garantía. Guarda la prueba de compra.`,
      },
      {
        question: `¿Cómo integra Home Nura estos fallos en sus análisis?`,
        answer: `Nuestra metodología pública aplica una penalización al Nura Score /10 de toda ${cat.toLowerCase()} cuyas averías recurrentes estén documentadas en las opiniones europeas. Un modelo que falla demasiado no encabeza nunca nuestras listas, con marca o sin ella.`,
      },
    ],
  },
  it: {
    kicker: 'Risoluzione problemi',
    subtitlePrefix: 'Guida Home Nura — categoria',
    severityLabels: {
      minor: 'Gravità: minore',
      moderate: 'Gravità: moderata',
      critical: 'Gravità: critica',
    },
    diagnoses: {
      minor: `Questo sintomo è comune e di solito innocuo. Nella maggior parte dei casi, una pulizia mirata o un piccolo cambiamento d'uso risolve il problema in meno di dieci minuti.`,
      moderate: `Questo sintomo non è banale ma è solitamente risolvibile senza un professionista. Seguite la procedura in ordine e fermatevi appena il problema sparisce.`,
      critical: `Attenzione: questo sintomo può indicare un difetto hardware grave. Non continuate a usare l'apparecchio finché la causa non è identificata. Consigliamo di contattare il produttore o un riparatore autorizzato prima di ogni tentativo di riavvio.`,
    },
    quickFixes: {
      minor: `Staccate la spina, lasciate raffreddare, poi pulite la parte interessata con acqua tiepida e sapone delicato (mai spugne abrasive su rivestimenti antiaderenti). Rimontate, ricollegate e testate con un ciclo breve a vuoto.`,
      moderate: `1. Staccare e lasciare raffreddare. 2. Controllare visivamente i componenti accessibili. 3. Seguire la procedura del produttore (manuale o sito ufficiale). 4. Se serve smontare, fermatevi e contattate l'assistenza — garanzia UE obbliga.`,
      critical: `Staccate subito e non continuate a usarlo. Documentate il sintomo (foto, video, rumori) e contattate l'assistenza del produttore. In Europa la garanzia legale di conformità copre questo tipo di guasto per almeno due anni.`,
    },
    fallbackCtas: {
      minor: 'Consulta la nostra metodologia',
      moderate: 'Verifica garanzia e ricambi',
      critical: 'Contattare il produttore',
    },
    backToCategory: 'Torna alla categoria',
    faq: (cat) => [
      {
        question: `Questo problema è coperto dalla garanzia europea?`,
        answer: `In Europa, ogni ${cat.toLowerCase()} acquistato nuovo presso un rivenditore ufficiale beneficia di una garanzia legale di conformità di almeno due anni (Direttiva (UE) 2019/771). Copre i difetti presenti alla consegna, indipendentemente da quando si manifestino.`,
      },
      {
        question: `Devo contattare l'assistenza o restituire in negozio?`,
        answer: `Potete scegliere: il diritto europeo pone la garanzia legale sul venditore, non sul produttore. In pratica, la restituzione in negozio è spesso più rapida, ma il produttore può riparare se il danno è fuori garanzia. Conservate la prova d'acquisto.`,
      },
      {
        question: `Come integra Home Nura questi guasti nei suoi test?`,
        answer: `La nostra metodologia pubblica applica una penalità al Nura Score /10 per ogni ${cat.toLowerCase()} con guasti ricorrenti documentati nei riscontri degli utenti europei. Un modello che si rompe troppo spesso non sale mai in cima, marchio a parte.`,
      },
    ],
  },
  nl: {
    kicker: 'Probleemoplossing',
    subtitlePrefix: 'Home Nura-gids — categorie',
    severityLabels: {
      minor: 'Ernst: klein',
      moderate: 'Ernst: gemiddeld',
      critical: 'Ernst: kritisch',
    },
    diagnoses: {
      minor: `Dit symptoom komt vaak voor en is meestal onschuldig. In de meeste gevallen lost een gerichte reiniging of een kleine gebruiks­aanpassing het probleem in minder dan tien minuten op.`,
      moderate: `Dit symptoom is niet triviaal, maar in de meeste gevallen oplosbaar zonder professional. Loop de procedure hieronder op volgorde door en stop zodra het probleem weg is.`,
      critical: `Let op: dit symptoom kan wijzen op een ernstig hardwaredefect. Gebruik het apparaat niet verder tot de oorzaak bekend is. We raden aan om contact op te nemen met de fabrikant of een erkende reparateur voordat u het apparaat opnieuw gebruikt.`,
    },
    quickFixes: {
      minor: `Haal de stekker eruit, laat het apparaat afkoelen en reinig het betreffende onderdeel met lauw water en milde zeep (nooit schuursponzen op antiaanbaklagen). Monteer het opnieuw, sluit aan en test met een korte lege cyclus.`,
      moderate: `1. Stekker eruit en laten afkoelen. 2. Toegankelijke onderdelen visueel controleren. 3. Fabrikantsprocedure volgen (handleiding of officiële site). 4. Als demontage nodig is, stop en neem contact op met de klantenservice — EU-garantie verplicht.`,
      critical: `Haal meteen de stekker eruit en gebruik het apparaat niet verder. Documenteer het symptoom (foto, video, geluiden) en neem contact op met de fabrieksservice. In Europa dekt de wettelijke conformiteitsgarantie dit soort gebreken minimaal twee jaar.`,
    },
    fallbackCtas: {
      minor: 'Bekijk onze aankoopmethodiek',
      moderate: 'Controleer garantie en onderdelen',
      critical: 'Fabrikant contacteren',
    },
    backToCategory: 'Terug naar categorie',
    faq: (cat) => [
      {
        question: `Valt dit probleem onder de Europese garantie?`,
        answer: `In Europa geniet elke ${cat.toLowerCase()} die nieuw is gekocht bij een officiële verkoper een wettelijke conformiteitsgarantie van minstens twee jaar (Richtlijn (EU) 2019/771). Die dekt gebreken die bij levering aanwezig waren, ongeacht wanneer ze zichtbaar worden.`,
      },
      {
        question: `Moet ik klantenservice bellen of terugbrengen naar de winkel?`,
        answer: `U mag kiezen: het Europees recht legt de wettelijke garantie bij de verkoper, niet bij de fabrikant. In de praktijk is winkelretour vaak sneller, maar de fabrikant kan repareren als het buiten de garantie valt. Bewaar het aankoopbewijs.`,
      },
      {
        question: `Hoe verwerkt Home Nura dit soort defecten in tests?`,
        answer: `Onze publieke methodologie geeft een Nura Score /10-aftrek aan elke ${cat.toLowerCase()} waarvan terugkerende defecten zijn gedocumenteerd in Europese gebruikersfeedback. Een model dat te vaak stuk gaat, komt nooit bovenaan — merk of geen merk.`,
      },
    ],
  },
}

export function getProblemContent(
  lang: Lang,
  problem: Problem,
  category: Category
): ProblemContent {
  const tmpl = problemTemplates[lang]
  return {
    kicker: tmpl.kicker,
    title: problem.query[lang],
    subtitle: `${tmpl.subtitlePrefix} ${category.title[lang]}`,
    severityLabel: tmpl.severityLabels[problem.severity],
    diagnosis: tmpl.diagnoses[problem.severity],
    quickFix: tmpl.quickFixes[problem.severity],
    fallbackCta: tmpl.fallbackCtas[problem.severity],
    backToCategoryLabel: tmpl.backToCategory,
  }
}

export function getProblemFaq(
  lang: Lang,
  category: Category
): CategoryFaqEntry[] {
  return problemTemplates[lang].faq(category.title[lang])
}
