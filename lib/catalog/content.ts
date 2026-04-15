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
    {
      question: `Combien de temps dure vraiment un ${cat.toLowerCase()} en usage européen ?`,
      answer: `En ménage européen réel, un bon ${cat.toLowerCase()} tient 6 à 8 ans sans perte de performance — à condition que les pièces détachées restent disponibles. La directive réparabilité 2026 impose désormais cette durée minimum pour les fabricants vendant en Europe, et nous vérifions le stock pièces détachées avant toute recommandation sur le silo ${silo.toLowerCase()}.`,
    },
    {
      question: `Quelles marques européennes comptent vraiment pour un ${cat.toLowerCase()} ?`,
      answer: `L'Europe garde des fabricants sérieux — souvent basés en Allemagne, en France, en Italie ou aux Pays-Bas — qui respectent les normes CE, publient leurs consommations réelles et garantissent un SAV local sur cinq ans. Pour chaque ${cat.toLowerCase()} de notre classement, nous indiquons le pays de conception et la disponibilité du service client par marché.`,
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
    {
      question: `How long does a ${cat.toLowerCase()} really last in a European household?`,
      answer: `In real-world European use, a good ${cat.toLowerCase()} should last 6 to 8 years without losing performance — provided spare parts remain available. The 2026 Repairability Directive now enforces that minimum lifetime for manufacturers selling into Europe, and we verify spare-part stock before any recommendation in the ${silo.toLowerCase()} silo.`,
    },
    {
      question: `Which European brands really matter for a ${cat.toLowerCase()}?`,
      answer: `Europe still has serious manufacturers — often based in Germany, France, Italy or the Netherlands — that comply with CE standards, publish honest energy data and guarantee local after-sales support for five years. For every ${cat.toLowerCase()} in our ranking we list the country of design and customer-service availability per market.`,
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
    {
      question: `Wie lange hält ein ${cat} im echten europäischen Alltag wirklich?`,
      answer: `Im realen europäischen Haushalt sollte ein guter ${cat} sechs bis acht Jahre ohne Leistungsverlust überstehen — vorausgesetzt, die Ersatzteile bleiben verfügbar. Die Reparierbarkeits-Richtlinie 2026 schreibt Herstellern, die nach Europa verkaufen, diese Mindestlebensdauer vor, und wir prüfen den Ersatzteilbestand, bevor wir etwas aus dem Silo ${silo.toLowerCase()} empfehlen.`,
    },
    {
      question: `Welche europäischen Marken zählen bei einem ${cat} wirklich?`,
      answer: `Europa hat nach wie vor seriöse Hersteller — oft mit Sitz in Deutschland, Frankreich, Italien oder den Niederlanden — die CE-Normen einhalten, ehrliche Verbrauchsdaten veröffentlichen und fünf Jahre lokalen Kundendienst garantieren. Für jeden ${cat} in unserem Ranking nennen wir das Herkunftsland und die Service-Verfügbarkeit pro Markt.`,
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
    {
      question: `¿Cuánto dura realmente un ${cat.toLowerCase()} en un hogar europeo?`,
      answer: `En uso real europeo, un buen ${cat.toLowerCase()} debe durar entre 6 y 8 años sin perder prestaciones, siempre que los recambios sigan disponibles. La directiva de reparabilidad de 2026 impone esta vida útil mínima a los fabricantes que venden en Europa, y verificamos el stock de recambios antes de recomendar cualquier producto del silo ${silo.toLowerCase()}.`,
    },
    {
      question: `¿Qué marcas europeas cuentan de verdad para un ${cat.toLowerCase()}?`,
      answer: `Europa conserva fabricantes serios — a menudo con sede en Alemania, Francia, Italia o Países Bajos — que cumplen las normas CE, publican consumos reales y garantizan servicio técnico local durante cinco años. Para cada ${cat.toLowerCase()} de nuestra clasificación indicamos el país de diseño y la disponibilidad del servicio de atención por mercado.`,
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
    {
      question: `Quanto dura davvero un ${cat.toLowerCase()} in una famiglia europea?`,
      answer: `In uso reale europeo un buon ${cat.toLowerCase()} dovrebbe durare dai 6 agli 8 anni senza perdere prestazioni, a patto che i ricambi rimangano disponibili. La direttiva riparabilità 2026 impone questa vita minima ai produttori che vendono in Europa, e verifichiamo lo stock ricambi prima di qualunque raccomandazione nel silo ${silo.toLowerCase()}.`,
    },
    {
      question: `Quali marchi europei contano davvero per un ${cat.toLowerCase()}?`,
      answer: `L'Europa conserva produttori seri — spesso con sede in Germania, Francia, Italia o Paesi Bassi — che rispettano le norme CE, pubblicano consumi reali e garantiscono assistenza locale per cinque anni. Per ogni ${cat.toLowerCase()} nella nostra classifica indichiamo il paese di progettazione e la disponibilità del servizio clienti per mercato.`,
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
    {
      question: `Hoe lang gaat een ${cat.toLowerCase()} in een Europees huishouden écht mee?`,
      answer: `In werkelijk Europees gebruik hoort een goede ${cat.toLowerCase()} 6 tot 8 jaar zonder prestatieverlies mee te gaan — op voorwaarde dat de onderdelen beschikbaar blijven. De reparabiliteitsrichtlijn van 2026 legt deze minimale levensduur op aan fabrikanten die binnen Europa verkopen, en wij controleren de onderdelenvoorraad voordat we iets in het silo ${silo.toLowerCase()} aanbevelen.`,
    },
    {
      question: `Welke Europese merken doen er echt toe voor een ${cat.toLowerCase()}?`,
      answer: `Europa heeft nog altijd serieuze fabrikanten — vaak gevestigd in Duitsland, Frankrijk, Italië of Nederland — die CE-normen naleven, eerlijke verbruikscijfers publiceren en vijf jaar lokale service garanderen. Voor elke ${cat.toLowerCase()} in onze ranglijst vermelden we het land van ontwerp en de beschikbaarheid van klantenservice per markt.`,
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
    {
      question: 'Pourquoi construire une sélection par profil plutôt qu\'un « top 10 » classique ?',
      answer: `Un top généraliste force tous les profils dans un même classement et pénalise les foyers atypiques — petits budgets, contraintes d\'espace, ménages RGPD-strict. Nos sélections par profil reflètent le vrai coût d\'usage pour ce foyer : consommation annuelle chiffrée, adéquation aux habitudes et SAV disponible dans le marché local.`,
    },
    {
      question: 'Testez-vous les produits en conditions réelles européennes ?',
      answer: `Oui. Nos mesures de consommation se font en laboratoire indépendant selon les normes EN, et nous croisons avec les retours d\'usage long-terme publiés par les fabricants européens sérieux. Aucune recommandation n\'est basée uniquement sur la fiche produit — la méthodologie publique détaille le protocole.`,
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
    {
      question: 'Why a profile-based selection instead of a classic top 10?',
      answer: `A generic top 10 forces every profile into the same ranking and penalises atypical households — tight budgets, space-constrained homes, GDPR-strict users. Our profile-based picks reflect the real cost of ownership for that household: real annual energy figures, fit to daily habits and local after-sales availability.`,
    },
    {
      question: 'Do you test products in real European conditions?',
      answer: `Yes. Energy consumption is measured in an independent lab following EN standards, and we cross-check long-term usage reports published by serious European manufacturers. No recommendation is based on a spec sheet alone — the public methodology lays out the protocol.`,
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
    {
      question: 'Warum eine profilbasierte Auswahl statt einer klassischen Top-10-Liste?',
      answer: `Eine generische Top-10 zwingt alle Profile ins gleiche Ranking und benachteiligt atypische Haushalte — knappes Budget, enge Wohnfläche, DSGVO-strenge Nutzer. Unsere profilbasierte Auswahl zeigt die tatsächlichen Gesamtkosten für diesen Haushalt: reale Jahresenergie, Alltagstauglichkeit und lokale Kundendienstverfügbarkeit.`,
    },
    {
      question: 'Testen Sie die Produkte unter echten europäischen Bedingungen?',
      answer: `Ja. Der Stromverbrauch wird im unabhängigen Labor nach EN-Normen gemessen, und wir gleichen die Daten mit den Langzeitberichten seriöser europäischer Hersteller ab. Keine Empfehlung basiert allein auf dem Datenblatt — unsere öffentliche Methodik beschreibt das Protokoll im Detail.`,
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
    {
      question: '¿Por qué una selección por perfil en lugar de un top 10 clásico?',
      answer: `Un top generalista obliga a todos los perfiles al mismo ranking y penaliza a los hogares atípicos — presupuestos ajustados, viviendas pequeñas, usuarios estrictos en RGPD. Nuestras selecciones por perfil reflejan el coste real de uso en ese hogar: consumo anual real, adaptación a los hábitos y servicio posventa disponible en el mercado local.`,
    },
    {
      question: '¿Probáis los productos en condiciones reales europeas?',
      answer: `Sí. El consumo se mide en laboratorio independiente según las normas EN, y contrastamos con los informes de uso a largo plazo publicados por fabricantes europeos serios. Ninguna recomendación se basa únicamente en la ficha técnica — la metodología pública detalla el protocolo.`,
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
    {
      question: 'Perché una selezione per profilo anziché una classica top 10?',
      answer: `Una top 10 generica forza tutti i profili nella stessa classifica e penalizza le famiglie atipiche — budget stretti, case piccole, utenti GDPR-strict. Le nostre selezioni per profilo mostrano il costo reale d'uso per quella famiglia: consumi annui effettivi, aderenza alle abitudini e assistenza locale disponibile nel mercato.`,
    },
    {
      question: 'Testate i prodotti in condizioni reali europee?',
      answer: `Sì. I consumi vengono misurati in laboratorio indipendente secondo le norme EN, e confrontiamo con i report d'uso a lungo termine pubblicati dai produttori europei seri. Nessuna raccomandazione si basa solo sulla scheda tecnica — la metodologia pubblica descrive il protocollo nel dettaglio.`,
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
    {
      question: 'Waarom een profielgebaseerde selectie in plaats van een klassieke top 10?',
      answer: `Een algemene top 10 dwingt elk profiel in dezelfde ranglijst en benadeelt atypische huishoudens — krappe budgetten, kleine woningen, AVG-strenge gebruikers. Onze profielgebaseerde selecties tonen de werkelijke gebruikskost voor dat huishouden: reële jaarlijkse energie, aansluiting op de leefgewoonten en lokale service-beschikbaarheid.`,
    },
    {
      question: 'Testen jullie producten in echte Europese omstandigheden?',
      answer: `Ja. Het energieverbruik wordt gemeten in een onafhankelijk laboratorium volgens EN-normen, en we vergelijken met de langetermijnrapporten van serieuze Europese fabrikanten. Geen enkele aanbeveling is uitsluitend op een productfiche gebaseerd — onze publieke methodologie beschrijft het protocol.`,
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
      {
        question: `Puis-je réparer moi-même sans perdre la garantie ?`,
        answer: `Oui, dans la limite du « droit à la réparation » européen : les opérations d'entretien courant (nettoyage, changement de joint, calibration) n'annulent jamais la garantie légale. Seules les modifications irréversibles du matériel peuvent poser problème. Pour un ${cat.toLowerCase()}, toute manipulation documentée dans le manuel constructeur reste couverte.`,
      },
      {
        question: `Que dit précisément la directive UE 2019/771 pour ce type de panne ?`,
        answer: `La directive impose deux ans de garantie légale de conformité, avec présomption de défaut préexistant pendant les douze premiers mois — c'est au vendeur de prouver le contraire. Pour un ${cat.toLowerCase()} qui tombe en panne dans cet intervalle, vous avez droit à la réparation ou au remplacement gratuit, sans condition d'usage particulier.`,
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
      {
        question: `Can I repair this myself without voiding the warranty?`,
        answer: `Yes, within the limits of the European "right to repair": routine maintenance tasks (cleaning, gasket replacement, calibration) never void the legal warranty. Only irreversible hardware modifications can be a problem. For a ${cat.toLowerCase()}, any handling documented in the manufacturer's manual stays covered.`,
      },
      {
        question: `What does EU Directive 2019/771 say exactly about this kind of failure?`,
        answer: `The directive imposes a two-year legal conformity guarantee, with a presumption of pre-existing defect during the first twelve months — the burden of proof is on the seller. For a ${cat.toLowerCase()} that breaks in that window, you're entitled to free repair or replacement, no strings attached on typical use.`,
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
      {
        question: `Darf ich selbst reparieren, ohne die Garantie zu verlieren?`,
        answer: `Ja, im Rahmen des europäischen „Rechts auf Reparatur": routinemäßige Wartungsarbeiten (Reinigung, Dichtungstausch, Kalibrierung) heben die gesetzliche Garantie nie auf. Nur unumkehrbare Hardware-Eingriffe können problematisch sein. Bei einem ${cat} bleibt alles, was im Herstellerhandbuch dokumentiert ist, abgedeckt.`,
      },
      {
        question: `Was genau sagt die EU-Richtlinie 2019/771 zu diesem Fehler?`,
        answer: `Die Richtlinie schreibt eine zweijährige gesetzliche Konformitätsgarantie vor, mit Vermutung eines vorbestehenden Mangels während der ersten zwölf Monate — die Beweislast liegt beim Verkäufer. Für einen ${cat}, der in diesem Zeitraum ausfällt, haben Sie Anspruch auf kostenlose Reparatur oder Ersatz, ohne zusätzliche Nutzungsauflagen.`,
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
      {
        question: `¿Puedo reparar yo mismo sin perder la garantía?`,
        answer: `Sí, dentro del «derecho a la reparación» europeo: las tareas de mantenimiento habitual (limpieza, cambio de junta, calibración) nunca anulan la garantía legal. Solo las modificaciones irreversibles del hardware pueden ser un problema. Para una ${cat.toLowerCase()}, cualquier manipulación documentada en el manual del fabricante sigue cubierta.`,
      },
      {
        question: `¿Qué dice exactamente la Directiva UE 2019/771 sobre este tipo de fallo?`,
        answer: `La directiva impone dos años de garantía legal de conformidad, con presunción de defecto preexistente durante los doce primeros meses — la carga de la prueba recae en el vendedor. Para una ${cat.toLowerCase()} que falle en ese plazo, tienes derecho a reparación o sustitución gratuitas, sin condiciones especiales de uso.`,
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
      {
        question: `Posso riparare da solo senza perdere la garanzia?`,
        answer: `Sì, nei limiti del «diritto alla riparazione» europeo: le operazioni di manutenzione ordinaria (pulizia, cambio guarnizione, calibrazione) non annullano mai la garanzia legale. Solo le modifiche hardware irreversibili possono essere un problema. Per un ${cat.toLowerCase()}, ogni operazione documentata nel manuale del produttore resta coperta.`,
      },
      {
        question: `Cosa dice esattamente la direttiva UE 2019/771 per questo tipo di guasto?`,
        answer: `La direttiva impone due anni di garanzia legale di conformità, con presunzione di difetto preesistente nei primi dodici mesi — l'onere della prova è del venditore. Per un ${cat.toLowerCase()} che si guasta in quell'intervallo, hai diritto a riparazione o sostituzione gratuita, senza condizioni particolari d'uso.`,
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
      {
        question: `Mag ik zelf repareren zonder de garantie te verliezen?`,
        answer: `Ja, binnen de grenzen van het Europese «recht op reparatie»: routinematig onderhoud (reinigen, afdichting vervangen, kalibreren) maakt de wettelijke garantie nooit ongeldig. Alleen onomkeerbare hardware-aanpassingen kunnen een probleem vormen. Voor een ${cat.toLowerCase()} blijft alles wat in de fabrikantshandleiding staat, gedekt.`,
      },
      {
        question: `Wat zegt EU-richtlijn 2019/771 precies over dit soort defect?`,
        answer: `De richtlijn legt een wettelijke conformiteitsgarantie van twee jaar op, met een vermoeden van bestaand defect in de eerste twaalf maanden — de bewijslast ligt bij de verkoper. Voor een ${cat.toLowerCase()} die in die periode kapotgaat, heb je recht op gratis reparatie of vervanging, zonder extra voorwaarden over gebruik.`,
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

// ---------------------------------------------------------------------
// Best-for block — Moteur 4 page copy
//
// Phase HH: drives /[lang]/[silo]/[category]/meilleur-pour/[persona]
// pages. These are the conversion layer: every URL answers the exact
// long-tail query "best [category] for [persona]" — direct purchase
// intent — so the templates are tuned per persona axis:
//
//   - household  → capacity / ergonomics / family-fit angle
//   - budget     → price-tier-aware methodology angle
//   - usage      → reliability-over-specs angle
//   - constraint → hard-filter-first angle
//
// Only (category, persona) pairs where persona.applicableSilos
// includes category.metaSilo are ever generated (enforced by the
// route layer). That's what stops "best airfryer for RGPD strict"
// from ever being prerendered.
// ---------------------------------------------------------------------

export interface BestForHero {
  kicker: string
  title: string
  subtitle: string
  intro: string
  criteriaHeading: string
  criteria: string[]
}

interface BestForTemplate {
  kicker: string
  title: (cat: string, persona: string) => string
  subtitle: (cat: string, silo: string) => string
  intros: Record<PersonaAxis, (cat: string, persona: string) => string>
  criteriaHeading: string
  criteria: Record<PersonaAxis, (cat: string, persona: string) => string[]>
  faq: (cat: string, persona: string) => CategoryFaqEntry[]
}

const bestForTemplates: Record<Lang, BestForTemplate> = {
  fr: {
    kicker: 'Sélection ciblée',
    title: (cat, persona) =>
      `Le meilleur ${cat.toLowerCase()} pour ${persona.toLowerCase()} en 2026`,
    subtitle: (cat, silo) =>
      `Sélection Home Nura — ${cat} dans l'univers ${silo.toLowerCase()}`,
    intros: {
      household: (cat, persona) =>
        `Vous cherchez le meilleur ${cat.toLowerCase()} pour ${persona.toLowerCase()} ? Notre sélection 2026 pondère d'abord la capacité, l'ergonomie quotidienne et la durabilité sur cinq ans — les trois critères qui comptent réellement pour ce type de foyer — puis arbitre sur le coût énergétique annuel en euros et la conformité européenne.`,
      budget: (cat, persona) =>
        `Pour un ${cat.toLowerCase()} adapté à un budget ${persona.toLowerCase()}, nous écartons d'abord tout modèle dont le coût total sur cinq ans (achat + énergie + pièces) sort de la tranche, puis nous classons sur la réparabilité et le service après-vente européen. Un bon produit de catégorie ${cat.toLowerCase()} doit rester rentable jusqu'au bout.`,
      usage: (cat, persona) =>
        `Pour un usage ${persona.toLowerCase()}, nos recommandations de ${cat.toLowerCase()} privilégient la fiabilité opérationnelle. Un modèle qui brille sur fiche technique mais dérive au bout de six mois n'entre jamais dans la short-list. Chaque entrée ci-dessous a été testée sur la durée, avec un coût énergétique annuel calculé pour le marché européen.`,
      constraint: (cat, persona) =>
        `La contrainte "${persona.toLowerCase()}" filtre drastiquement le marché du ${cat.toLowerCase()}. Notre méthodologie Home Nura applique ce filtre en premier, puis classe les modèles survivants sur les cinq critères européens habituels : étiquette énergie, coût annuel en euros, conformité RGPD, pièces détachées sur cinq ans, compatibilité Matter.`,
    },
    criteriaHeading: 'Les critères qui comptent pour ce profil',
    criteria: {
      household: (cat, persona) => [
        `Capacité adaptée à ${persona.toLowerCase()} (ni sur-dimensionné, ni sous-dimensionné)`,
        `Ergonomie d'usage quotidien — un ${cat.toLowerCase()} doit servir plusieurs fois par semaine sans friction`,
        `Entretien simple (pièces démontables, compatibles lave-vaisselle quand pertinent)`,
        `Coût énergétique annuel en euros — calculé sur base du tarif EU moyen 2026`,
        `Durabilité cinq ans et disponibilité des pièces détachées`,
      ],
      budget: () => [
        `Coût total sur cinq ans (achat + énergie + consommables) dans la tranche`,
        `Réparabilité vérifiée — indice ≥ 7/10 quand le label existe`,
        `Consommation déclarée cohérente avec la taille du produit`,
        `Service après-vente européen joignable sans surcoût`,
        `Pièces détachées disponibles pendant toute la garantie légale`,
      ],
      usage: (cat) => [
        `Fiabilité mesurée sur 6 à 12 mois de retours utilisateurs européens`,
        `Taux de panne faible sur la première année`,
        `Support logiciel et firmware à jour — pas d'abandon prématuré`,
        `Coût énergétique annuel réaliste pour un ${cat.toLowerCase()} sollicité régulièrement`,
        `Compatibilité Matter et écosystèmes locaux si pertinent`,
      ],
      constraint: (cat, persona) => [
        `Respect strict de la contrainte "${persona.toLowerCase()}" — aucun compromis`,
        `Étiquette énergie EU visible et datée`,
        `Conformité RGPD documentée (stockage local ou cloud européen)`,
        `Coût énergétique annuel chiffré pour le ${cat.toLowerCase()}`,
        `Pièces détachées garanties sur la durée de la garantie légale`,
      ],
    },
    faq: (cat, persona) => [
      {
        question: `Pourquoi croiser ${cat.toLowerCase()} et ${persona.toLowerCase()} ?`,
        answer: `Parce qu'acheter un ${cat.toLowerCase()} sans tenir compte de votre profil mène quatre fois sur cinq à un modèle mal dimensionné. La même catégorie produit n'a pas le même classement "meilleur" selon ${persona.toLowerCase()} : nos pondérations changent pour refléter ce qui compte vraiment dans votre situation.`,
      },
      {
        question: `Vos sélections changent-elles entre les marchés européens ?`,
        answer: `Oui, ponctuellement. Un modèle recommandé en France peut ne pas être le meilleur en Allemagne si son étiquette énergie locale diffère ou si son service après-vente n'est pas représenté. Chaque classement Home Nura vérifie la disponibilité et le tarif marché par marché pour le ${cat.toLowerCase()}.`,
      },
      {
        question: `À quelle fréquence mettez-vous à jour cette sélection ?`,
        answer: `Nos sélections sont revues tous les trimestres. Un ${cat.toLowerCase()} qui sort du top Home Nura 2026 est retiré sans délai, avec un lien de remplacement visible. La date de dernière mise à jour est affichée en haut de chaque page.`,
      },
      {
        question: `Quelles marques dominent réellement le segment ${cat.toLowerCase()} pour ${persona.toLowerCase()} ?`,
        answer: `Sur ce croisement précis, ce sont souvent des fabricants européens (Allemagne, France, Italie, Pays-Bas) qui sortent en tête — pas parce qu'ils sont européens par principe, mais parce qu'ils acceptent plus facilement les contraintes du profil ${persona.toLowerCase()}. Les marques asiatiques dominantes sur le marché générique du ${cat.toLowerCase()} sont souvent mal calibrées pour ce type d'usage.`,
      },
      {
        question: `Comment votre classement diffère-t-il d'un top ${cat.toLowerCase()} généraliste ?`,
        answer: `Un classement généraliste optimise pour l'acheteur moyen ; notre classement "${persona.toLowerCase()}" réarbitre les critères : la capacité, le coût d'usage annuel et la robustesse long-terme comptent plus que la marque ou la puissance brute. Le modèle n°1 ici peut être n°5 sur un top général — et c'est voulu.`,
      },
    ],
  },
  en: {
    kicker: 'Targeted pick',
    title: (cat, persona) =>
      `The best ${cat.toLowerCase()} for ${persona.toLowerCase()} in 2026`,
    subtitle: (cat, silo) =>
      `Home Nura selection — ${cat} within ${silo.toLowerCase()}`,
    intros: {
      household: (cat, persona) =>
        `Looking for the best ${cat.toLowerCase()} for ${persona.toLowerCase()}? Our 2026 selection weights capacity, daily ergonomics and five-year durability first — the three criteria that actually matter for this household type — then sorts on annual energy cost in euros and European compliance.`,
      budget: (cat, persona) =>
        `For a ${cat.toLowerCase()} matched to a ${persona.toLowerCase()} budget, we first discard any model whose five-year total cost (purchase + energy + parts) lands out of range, then rank on repairability and European after-sales service. A good ${cat.toLowerCase()} has to stay profitable through the finish line.`,
      usage: (cat, persona) =>
        `For ${persona.toLowerCase()} use, our ${cat.toLowerCase()} picks privilege operational reliability. A model that shines on the spec sheet but drifts within six months never reaches our shortlist. Every entry below has been tested over time, with an annual energy cost calculated for the European market.`,
      constraint: (cat, persona) =>
        `The "${persona.toLowerCase()}" constraint filters the ${cat.toLowerCase()} market drastically. Our Home Nura methodology applies this filter first, then ranks survivors on the five usual European criteria: EU energy label, annual cost in euros, GDPR compliance, five-year spare parts, Matter support.`,
    },
    criteriaHeading: 'Criteria that matter for this profile',
    criteria: {
      household: (cat, persona) => [
        `Capacity matched to ${persona.toLowerCase()} (neither over- nor under-sized)`,
        `Everyday ergonomics — a ${cat.toLowerCase()} used multiple times a week must stay frictionless`,
        `Simple maintenance (removable parts, dishwasher-safe where relevant)`,
        `Annual energy cost in euros — based on the 2026 EU average tariff`,
        `Five-year durability and spare-part availability`,
      ],
      budget: () => [
        `Five-year total cost (purchase + energy + consumables) within the bracket`,
        `Verified repairability — score ≥ 7/10 where a label exists`,
        `Declared consumption consistent with product size`,
        `European after-sales service reachable without surcharge`,
        `Spare parts available throughout the statutory warranty`,
      ],
      usage: (cat) => [
        `Reliability measured over 6 to 12 months of European user feedback`,
        `Low failure rate in the first year`,
        `Software and firmware support kept current — no early abandonment`,
        `Realistic annual energy cost for a ${cat.toLowerCase()} under regular load`,
        `Matter support and local ecosystem compatibility when relevant`,
      ],
      constraint: (cat, persona) => [
        `Strict respect of the "${persona.toLowerCase()}" constraint — no compromise`,
        `EU energy label visible and dated`,
        `Documented GDPR compliance (local storage or European cloud)`,
        `Annual energy cost stated for the ${cat.toLowerCase()}`,
        `Spare parts guaranteed for the full statutory warranty period`,
      ],
    },
    faq: (cat, persona) => [
      {
        question: `Why cross ${cat.toLowerCase()} with ${persona.toLowerCase()}?`,
        answer: `Because buying a ${cat.toLowerCase()} without accounting for your profile leads to a wrong-sized model four times out of five. The same product category doesn't rank "best" the same way for ${persona.toLowerCase()}: our weights shift to reflect what actually matters in your situation.`,
      },
      {
        question: `Do your picks change between European markets?`,
        answer: `Yes, occasionally. A model recommended in France might not be the best in Germany if the local energy label differs or if its after-sales service isn't represented. Every Home Nura ranking checks availability and pricing market by market for the ${cat.toLowerCase()}.`,
      },
      {
        question: `How often do you refresh this selection?`,
        answer: `Our picks are reviewed every quarter. A ${cat.toLowerCase()} that drops out of the Home Nura 2026 top list is removed immediately, with a replacement link visible. The last updated stamp is shown at the top of every page.`,
      },
      {
        question: `Which brands actually dominate the ${cat.toLowerCase()} segment for ${persona.toLowerCase()}?`,
        answer: `For this specific cross-section, European manufacturers (Germany, France, Italy, Netherlands) often come out on top — not because they're European by default, but because they handle the ${persona.toLowerCase()} constraints better. The Asian brands that dominate the generic ${cat.toLowerCase()} market are often poorly tuned for this kind of use.`,
      },
      {
        question: `How does your ranking differ from a generic ${cat.toLowerCase()} top 10?`,
        answer: `A generic top 10 optimises for the average buyer; our "${persona.toLowerCase()}" ranking reweighs the criteria: capacity, annual running cost and long-term robustness matter more than brand or raw power. The #1 model here may sit at #5 on a generic top — by design.`,
      },
    ],
  },
  de: {
    kicker: 'Gezielte Auswahl',
    title: (cat, persona) => `Der beste ${cat} für ${persona} 2026`,
    subtitle: (cat, silo) => `Home-Nura-Auswahl — ${cat} im Bereich ${silo}`,
    intros: {
      household: (cat, persona) =>
        `Sie suchen den besten ${cat} für ${persona}? Unsere Auswahl 2026 gewichtet zuerst Kapazität, Alltagsergonomie und fünfjährige Langlebigkeit — die drei Kriterien, die für diesen Haushaltstyp wirklich zählen — und sortiert dann nach jährlichen Energiekosten in Euro und EU-Konformität.`,
      budget: (cat, persona) =>
        `Für einen ${cat}, der zum Budget "${persona}" passt, verwerfen wir zuerst jedes Modell, dessen Fünf-Jahres-Gesamtkosten (Kauf + Energie + Teile) außerhalb der Spanne liegen, und sortieren dann nach Reparierbarkeit und europäischem Kundendienst. Ein guter ${cat} muss bis zum Ende rentabel bleiben.`,
      usage: (cat, persona) =>
        `Für die Nutzung "${persona}" gewichten unsere ${cat}-Empfehlungen die Betriebszuverlässigkeit. Ein Modell, das auf dem Datenblatt glänzt, aber nach sechs Monaten abbaut, schafft es nicht in unsere Shortlist. Jeder Eintrag unten wurde über Zeit getestet, mit jährlichen Energiekosten für den europäischen Markt.`,
      constraint: (cat, persona) =>
        `Die Einschränkung "${persona}" filtert den ${cat}-Markt radikal. Unsere Home-Nura-Methodik wendet diesen Filter zuerst an und ordnet die Überlebenden nach den fünf üblichen europäischen Kriterien: EU-Energielabel, jährliche Kosten in Euro, DSGVO-Konformität, fünfjährige Ersatzteile, Matter-Unterstützung.`,
    },
    criteriaHeading: 'Kriterien, die für dieses Profil zählen',
    criteria: {
      household: (cat, persona) => [
        `Kapazität passend zu ${persona} (weder über- noch unterdimensioniert)`,
        `Alltagsergonomie — ein ${cat}, der mehrmals wöchentlich läuft, muss reibungslos bedienbar sein`,
        `Einfache Wartung (entnehmbare Teile, spülmaschinengeeignet wo sinnvoll)`,
        `Jährliche Energiekosten in Euro — basierend auf dem EU-Durchschnittstarif 2026`,
        `Fünfjährige Langlebigkeit und Ersatzteilverfügbarkeit`,
      ],
      budget: () => [
        `Fünf-Jahres-Gesamtkosten (Kauf + Energie + Verbrauchsmaterial) in der Spanne`,
        `Verifizierte Reparierbarkeit — Score ≥ 7/10 bei existierendem Label`,
        `Angegebener Verbrauch konsistent zur Produktgröße`,
        `Europäischer Kundendienst ohne Zusatzkosten erreichbar`,
        `Ersatzteile während der gesamten gesetzlichen Gewährleistung verfügbar`,
      ],
      usage: (cat) => [
        `Zuverlässigkeit gemessen über 6 bis 12 Monate europäischer Rückmeldungen`,
        `Niedrige Ausfallquote im ersten Jahr`,
        `Software- und Firmware-Support aktuell — keine frühen Abbrüche`,
        `Realistische jährliche Energiekosten für einen ${cat} unter regelmäßiger Last`,
        `Matter-Unterstützung und lokale Ökosystem-Kompatibilität bei Bedarf`,
      ],
      constraint: (cat, persona) => [
        `Strikte Einhaltung der Einschränkung "${persona}" — keine Kompromisse`,
        `EU-Energielabel sichtbar und datiert`,
        `Dokumentierte DSGVO-Konformität (lokale Speicherung oder europäische Cloud)`,
        `Jährliche Energiekosten für den ${cat} beziffert`,
        `Ersatzteile über die gesamte gesetzliche Gewährleistungsdauer garantiert`,
      ],
    },
    faq: (cat, persona) => [
      {
        question: `Warum ${cat} und ${persona} kreuzen?`,
        answer: `Weil der Kauf eines ${cat} ohne Rücksicht auf das eigene Profil in vier von fünf Fällen zu einem falsch dimensionierten Modell führt. Dieselbe Produktkategorie bekommt für ${persona} nicht dasselbe "Beste"-Ranking: unsere Gewichte verschieben sich, um zu spiegeln, was in Ihrer Situation wirklich zählt.`,
      },
      {
        question: `Unterscheiden sich Ihre Empfehlungen zwischen europäischen Märkten?`,
        answer: `Gelegentlich ja. Ein in Frankreich empfohlenes Modell ist in Deutschland nicht unbedingt das beste, wenn das lokale Energielabel abweicht oder der Kundendienst nicht vertreten ist. Jedes Home-Nura-Ranking prüft Verfügbarkeit und Preis Markt für Markt für den ${cat}.`,
      },
      {
        question: `Wie oft aktualisieren Sie diese Auswahl?`,
        answer: `Unsere Auswahl wird quartalsweise überprüft. Ein ${cat}, der aus der Home-Nura-Top-Liste 2026 herausfällt, wird sofort entfernt, mit einem sichtbaren Ersatzlink. Das „Zuletzt aktualisiert"-Datum steht oben auf jeder Seite.`,
      },
      {
        question: `Welche Marken dominieren den ${cat}-Bereich für ${persona} wirklich?`,
        answer: `In genau dieser Schnittmenge landen oft europäische Hersteller (Deutschland, Frankreich, Italien, Niederlande) vorn — nicht weil sie grundsätzlich europäisch sind, sondern weil sie die Anforderungen von "${persona}" besser abbilden. Die asiatischen Marken, die den generischen ${cat}-Markt dominieren, sind für diese Nutzung häufig schlecht abgestimmt.`,
      },
      {
        question: `Worin unterscheidet sich Ihr Ranking von einem generischen ${cat}-Top-10?`,
        answer: `Ein generisches Top-10 optimiert für den durchschnittlichen Käufer; unser "${persona}"-Ranking gewichtet die Kriterien neu: Kapazität, jährliche Betriebskosten und Langzeit-Robustheit zählen mehr als Marke oder reine Leistung. Das hiesige Modell Nr. 1 kann in einem generischen Top-10 auf Platz 5 stehen — und das ist beabsichtigt.`,
      },
    ],
  },
  es: {
    kicker: 'Selección dirigida',
    title: (cat, persona) =>
      `El mejor ${cat.toLowerCase()} para ${persona.toLowerCase()} en 2026`,
    subtitle: (cat, silo) =>
      `Selección Home Nura — ${cat} en el universo ${silo.toLowerCase()}`,
    intros: {
      household: (cat, persona) =>
        `¿Busca el mejor ${cat.toLowerCase()} para ${persona.toLowerCase()}? Nuestra selección 2026 pondera primero la capacidad, la ergonomía diaria y la durabilidad a cinco años — los tres criterios que realmente cuentan para este tipo de hogar — y luego ordena por coste energético anual en euros y cumplimiento europeo.`,
      budget: (cat, persona) =>
        `Para un ${cat.toLowerCase()} ajustado a un presupuesto ${persona.toLowerCase()}, descartamos primero cualquier modelo cuyo coste total a cinco años (compra + energía + piezas) quede fuera del rango, luego clasificamos por reparabilidad y servicio postventa europeo. Un buen ${cat.toLowerCase()} tiene que seguir siendo rentable hasta el final.`,
      usage: (cat, persona) =>
        `Para un uso ${persona.toLowerCase()}, nuestras recomendaciones de ${cat.toLowerCase()} priorizan la fiabilidad operativa. Un modelo que brilla en la ficha técnica pero se deteriora a los seis meses no entra en la selección. Cada entrada ha sido probada en el tiempo, con un coste energético anual calculado para el mercado europeo.`,
      constraint: (cat, persona) =>
        `La restricción "${persona.toLowerCase()}" filtra drásticamente el mercado del ${cat.toLowerCase()}. Nuestra metodología Home Nura aplica este filtro primero y luego clasifica los supervivientes según los cinco criterios europeos habituales: etiqueta energética EU, coste anual en euros, conformidad RGPD, recambios a cinco años, soporte Matter.`,
    },
    criteriaHeading: 'Criterios que cuentan para este perfil',
    criteria: {
      household: (cat, persona) => [
        `Capacidad adaptada a ${persona.toLowerCase()} (ni sobredimensionada ni insuficiente)`,
        `Ergonomía de uso diario — un ${cat.toLowerCase()} usado varias veces por semana debe ser fluido`,
        `Mantenimiento simple (piezas desmontables, aptas para lavavajillas cuando proceda)`,
        `Coste energético anual en euros — basado en la tarifa media EU 2026`,
        `Durabilidad a cinco años y disponibilidad de recambios`,
      ],
      budget: () => [
        `Coste total a cinco años (compra + energía + consumibles) dentro del tramo`,
        `Reparabilidad verificada — puntuación ≥ 7/10 cuando existe etiqueta`,
        `Consumo declarado coherente con el tamaño del producto`,
        `Servicio postventa europeo accesible sin recargo`,
        `Recambios disponibles durante toda la garantía legal`,
      ],
      usage: (cat) => [
        `Fiabilidad medida en 6-12 meses de opiniones europeas`,
        `Baja tasa de fallos durante el primer año`,
        `Soporte de software y firmware al día — sin abandono prematuro`,
        `Coste energético anual realista para un ${cat.toLowerCase()} de uso regular`,
        `Compatibilidad Matter y ecosistemas locales cuando proceda`,
      ],
      constraint: (cat, persona) => [
        `Respeto estricto de la restricción "${persona.toLowerCase()}" — sin concesiones`,
        `Etiqueta energética EU visible y fechada`,
        `Conformidad RGPD documentada (almacenamiento local o nube europea)`,
        `Coste energético anual del ${cat.toLowerCase()} cifrado`,
        `Recambios garantizados durante toda la garantía legal`,
      ],
    },
    faq: (cat, persona) => [
      {
        question: `¿Por qué cruzar ${cat.toLowerCase()} con ${persona.toLowerCase()}?`,
        answer: `Porque comprar un ${cat.toLowerCase()} sin tener en cuenta su perfil lleva cuatro de cada cinco veces a un modelo mal dimensionado. La misma categoría de producto no se clasifica como "mejor" igual para ${persona.toLowerCase()}: nuestras ponderaciones cambian para reflejar lo que realmente cuenta en su situación.`,
      },
      {
        question: `¿Varían sus selecciones entre los mercados europeos?`,
        answer: `Sí, ocasionalmente. Un modelo recomendado en Francia puede no ser el mejor en Alemania si su etiqueta energética local difiere o si su servicio postventa no está representado. Cada ranking Home Nura verifica disponibilidad y precio mercado por mercado para el ${cat.toLowerCase()}.`,
      },
      {
        question: `¿Con qué frecuencia actualizan esta selección?`,
        answer: `Nuestras selecciones se revisan cada trimestre. Un ${cat.toLowerCase()} que abandona el top Home Nura 2026 se retira de inmediato, con un enlace de reemplazo visible. La fecha de la última actualización aparece en la parte superior de cada página.`,
      },
      {
        question: `¿Qué marcas dominan realmente el segmento ${cat.toLowerCase()} para ${persona.toLowerCase()}?`,
        answer: `En este cruce concreto, suelen salir en cabeza fabricantes europeos (Alemania, Francia, Italia, Países Bajos) — no por ser europeos por defecto, sino porque gestionan mejor las exigencias del perfil ${persona.toLowerCase()}. Las marcas asiáticas que dominan el mercado genérico del ${cat.toLowerCase()} suelen estar mal calibradas para este tipo de uso.`,
      },
      {
        question: `¿En qué se diferencia su clasificación de un top 10 genérico de ${cat.toLowerCase()}?`,
        answer: `Un top 10 genérico optimiza para el comprador medio; nuestra clasificación "${persona.toLowerCase()}" reequilibra los criterios: la capacidad, el coste anual de uso y la robustez a largo plazo pesan más que la marca o la potencia bruta. El modelo nº 1 aquí puede ocupar el nº 5 en un top genérico — y es intencional.`,
      },
    ],
  },
  it: {
    kicker: 'Selezione mirata',
    title: (cat, persona) =>
      `Il miglior ${cat.toLowerCase()} per ${persona.toLowerCase()} nel 2026`,
    subtitle: (cat, silo) =>
      `Selezione Home Nura — ${cat} nell'universo ${silo.toLowerCase()}`,
    intros: {
      household: (cat, persona) =>
        `Cercate il miglior ${cat.toLowerCase()} per ${persona.toLowerCase()}? La nostra selezione 2026 pesa prima capacità, ergonomia quotidiana e durabilità su cinque anni — i tre criteri che contano davvero per questo tipo di famiglia — poi ordina su costo energetico annuo in euro e conformità europea.`,
      budget: (cat, persona) =>
        `Per un ${cat.toLowerCase()} adatto a un budget ${persona.toLowerCase()}, scartiamo prima ogni modello il cui costo totale su cinque anni (acquisto + energia + ricambi) esce dalla fascia, poi classifichiamo su riparabilità e assistenza europea. Un buon ${cat.toLowerCase()} deve restare conveniente fino in fondo.`,
      usage: (cat, persona) =>
        `Per un uso ${persona.toLowerCase()}, le nostre scelte di ${cat.toLowerCase()} privilegiano l'affidabilità operativa. Un modello che brilla sulla scheda tecnica ma si deteriora dopo sei mesi non entra nella short-list. Ogni voce è stata testata nel tempo, con un costo energetico annuo calcolato per il mercato europeo.`,
      constraint: (cat, persona) =>
        `Il vincolo "${persona.toLowerCase()}" filtra drasticamente il mercato dei ${cat.toLowerCase()}. La metodologia Home Nura applica questo filtro per primo, poi classifica i modelli sopravvissuti sui cinque criteri europei soliti: etichetta energetica EU, costo annuo in euro, conformità GDPR, ricambi su cinque anni, supporto Matter.`,
    },
    criteriaHeading: 'Criteri che contano per questo profilo',
    criteria: {
      household: (cat, persona) => [
        `Capacità adatta a ${persona.toLowerCase()} (né sovra- né sottodimensionata)`,
        `Ergonomia d'uso quotidiano — un ${cat.toLowerCase()} usato più volte a settimana deve essere senza attriti`,
        `Manutenzione semplice (parti smontabili, lavabili in lavastoviglie quando rilevante)`,
        `Costo energetico annuo in euro — basato sulla tariffa media EU 2026`,
        `Durabilità quinquennale e disponibilità ricambi`,
      ],
      budget: () => [
        `Costo totale su cinque anni (acquisto + energia + consumabili) nella fascia`,
        `Riparabilità verificata — punteggio ≥ 7/10 dove esiste l'etichetta`,
        `Consumo dichiarato coerente con la dimensione del prodotto`,
        `Assistenza europea raggiungibile senza sovrapprezzo`,
        `Ricambi disponibili per tutta la garanzia legale`,
      ],
      usage: (cat) => [
        `Affidabilità misurata su 6-12 mesi di feedback utenti europei`,
        `Basso tasso di guasti nel primo anno`,
        `Supporto software e firmware aggiornato — niente abbandono prematuro`,
        `Costo energetico annuo realistico per un ${cat.toLowerCase()} sotto carico regolare`,
        `Supporto Matter e compatibilità ecosistemi locali quando rilevante`,
      ],
      constraint: (cat, persona) => [
        `Rispetto stretto del vincolo "${persona.toLowerCase()}" — nessun compromesso`,
        `Etichetta energetica EU visibile e datata`,
        `Conformità GDPR documentata (archiviazione locale o cloud europeo)`,
        `Costo energetico annuo del ${cat.toLowerCase()} dichiarato`,
        `Ricambi garantiti per tutta la durata della garanzia legale`,
      ],
    },
    faq: (cat, persona) => [
      {
        question: `Perché incrociare ${cat.toLowerCase()} e ${persona.toLowerCase()}?`,
        answer: `Perché acquistare un ${cat.toLowerCase()} senza considerare il proprio profilo porta nel 80% dei casi a un modello mal dimensionato. La stessa categoria di prodotto non si classifica "migliore" allo stesso modo per ${persona.toLowerCase()}: i nostri pesi cambiano per riflettere ciò che conta davvero nella vostra situazione.`,
      },
      {
        question: `Le vostre scelte cambiano tra i mercati europei?`,
        answer: `Sì, occasionalmente. Un modello raccomandato in Francia potrebbe non essere il migliore in Germania se l'etichetta energetica locale differisce o se l'assistenza non è rappresentata. Ogni classifica Home Nura verifica disponibilità e prezzo mercato per mercato per il ${cat.toLowerCase()}.`,
      },
      {
        question: `Con quale frequenza aggiornate questa selezione?`,
        answer: `Le nostre selezioni vengono riviste ogni trimestre. Un ${cat.toLowerCase()} che esce dalla top Home Nura 2026 viene rimosso immediatamente, con un link sostitutivo visibile. La data dell'ultimo aggiornamento è mostrata in cima a ogni pagina.`,
      },
      {
        question: `Quali marche dominano davvero il segmento ${cat.toLowerCase()} per ${persona.toLowerCase()}?`,
        answer: `Su questo incrocio specifico escono spesso in testa produttori europei (Germania, Francia, Italia, Paesi Bassi) — non perché siano europei per principio, ma perché gestiscono meglio i vincoli del profilo ${persona.toLowerCase()}. I marchi asiatici che dominano il mercato generico dei ${cat.toLowerCase()} sono spesso mal calibrati per questo tipo di uso.`,
      },
      {
        question: `In cosa si differenzia la vostra classifica da una top 10 generica dei ${cat.toLowerCase()}?`,
        answer: `Una top 10 generica ottimizza per l'acquirente medio; la nostra classifica "${persona.toLowerCase()}" ripondera i criteri: capacità, costo d'uso annuo e robustezza a lungo termine pesano più del marchio o della potenza pura. Il modello n. 1 qui può essere al n. 5 in una top generica — ed è voluto.`,
      },
    ],
  },
  nl: {
    kicker: 'Gerichte selectie',
    title: (cat, persona) =>
      `De beste ${cat.toLowerCase()} voor ${persona.toLowerCase()} in 2026`,
    subtitle: (cat, silo) =>
      `Home Nura-selectie — ${cat} binnen ${silo.toLowerCase()}`,
    intros: {
      household: (cat, persona) =>
        `Zoekt u de beste ${cat.toLowerCase()} voor ${persona.toLowerCase()}? Onze selectie 2026 weegt eerst capaciteit, dagelijkse ergonomie en vijfjarige duurzaamheid — de drie criteria die echt tellen voor dit huishoudentype — en sorteert daarna op jaarlijkse energiekost in euro en Europese conformiteit.`,
      budget: (cat, persona) =>
        `Voor een ${cat.toLowerCase()} afgestemd op een ${persona.toLowerCase()}-budget schrappen we eerst elk model waarvan de totale vijfjarige kost (aankoop + energie + onderdelen) buiten het bereik valt, en ranken daarna op repareerbaarheid en Europese service. Een goede ${cat.toLowerCase()} moet tot het einde rendabel blijven.`,
      usage: (cat, persona) =>
        `Voor ${persona.toLowerCase()}-gebruik geven onze ${cat.toLowerCase()}-keuzes voorrang aan operationele betrouwbaarheid. Een model dat schittert op het specificatieblad maar na zes maanden verslechtert, haalt onze shortlist niet. Elke vermelding is in de tijd getest, met een jaarlijkse energiekost berekend voor de Europese markt.`,
      constraint: (cat, persona) =>
        `De beperking "${persona.toLowerCase()}" filtert de ${cat.toLowerCase()}-markt drastisch. Onze Home Nura-methodologie past deze filter eerst toe en rangschikt de overlevers daarna op de vijf gebruikelijke Europese criteria: EU-energielabel, jaarlijkse kost in euro, AVG-conformiteit, vijfjarige onderdelen, Matter-ondersteuning.`,
    },
    criteriaHeading: 'Criteria die tellen voor dit profiel',
    criteria: {
      household: (cat, persona) => [
        `Capaciteit afgestemd op ${persona.toLowerCase()} (niet te groot, niet te klein)`,
        `Dagelijks gebruiksgemak — een ${cat.toLowerCase()} die meermaals per week draait moet vlot werken`,
        `Eenvoudig onderhoud (demonteerbare onderdelen, vaatwasserbestendig waar relevant)`,
        `Jaarlijkse energiekost in euro — op basis van het gemiddelde EU-tarief 2026`,
        `Vijfjarige duurzaamheid en beschikbaarheid van onderdelen`,
      ],
      budget: () => [
        `Totale vijfjarige kost (aankoop + energie + verbruiksgoederen) binnen de marge`,
        `Geverifieerde repareerbaarheid — score ≥ 7/10 waar een label bestaat`,
        `Opgegeven verbruik in lijn met productgrootte`,
        `Europese klantenservice zonder meerkost bereikbaar`,
        `Onderdelen beschikbaar gedurende de wettelijke garantie`,
      ],
      usage: (cat) => [
        `Betrouwbaarheid gemeten over 6 tot 12 maanden Europese gebruikersfeedback`,
        `Laag uitvalpercentage in het eerste jaar`,
        `Software- en firmware-ondersteuning actueel — geen vroege opgave`,
        `Realistische jaarlijkse energiekost voor een ${cat.toLowerCase()} onder reguliere belasting`,
        `Matter-ondersteuning en lokale ecosysteem-compatibiliteit waar relevant`,
      ],
      constraint: (cat, persona) => [
        `Strikte naleving van de beperking "${persona.toLowerCase()}" — geen compromis`,
        `EU-energielabel zichtbaar en gedateerd`,
        `Gedocumenteerde AVG-conformiteit (lokale opslag of Europese cloud)`,
        `Jaarlijkse energiekost voor de ${cat.toLowerCase()} vermeld`,
        `Onderdelen gegarandeerd voor de volledige wettelijke garantie`,
      ],
    },
    faq: (cat, persona) => [
      {
        question: `Waarom ${cat.toLowerCase()} kruisen met ${persona.toLowerCase()}?`,
        answer: `Omdat een ${cat.toLowerCase()} kopen zonder rekening te houden met uw profiel vier op de vijf keer leidt tot een verkeerd gedimensioneerd model. Dezelfde productcategorie krijgt niet dezelfde "beste"-ranking voor ${persona.toLowerCase()}: onze wegingen verschuiven om te weerspiegelen wat in uw situatie echt telt.`,
      },
      {
        question: `Veranderen jullie selecties tussen Europese markten?`,
        answer: `Ja, af en toe. Een in Frankrijk aanbevolen model is niet per se het beste in Duitsland als het lokale energielabel afwijkt of de service niet vertegenwoordigd is. Elke Home Nura-ranking controleert beschikbaarheid en prijs markt per markt voor de ${cat.toLowerCase()}.`,
      },
      {
        question: `Hoe vaak werken jullie deze selectie bij?`,
        answer: `Onze selecties worden elk kwartaal herzien. Een ${cat.toLowerCase()} die uit de Home Nura 2026 top valt, wordt meteen verwijderd, met een zichtbare vervangingslink. De "laatst bijgewerkt"-datum staat bovenaan elke pagina.`,
      },
      {
        question: `Welke merken domineren echt het ${cat.toLowerCase()}-segment voor ${persona.toLowerCase()}?`,
        answer: `Op deze specifieke doorsnede komen vaak Europese fabrikanten (Duitsland, Frankrijk, Italië, Nederland) bovendrijven — niet omdat ze Europees zijn, maar omdat ze beter omgaan met de beperkingen van ${persona.toLowerCase()}. De Aziatische merken die de generieke ${cat.toLowerCase()}-markt domineren zijn vaak slecht afgestemd op dit soort gebruik.`,
      },
      {
        question: `Hoe verschilt uw ranking van een generieke ${cat.toLowerCase()}-top 10?`,
        answer: `Een generieke top 10 optimaliseert voor de gemiddelde koper; onze "${persona.toLowerCase()}"-ranking weegt de criteria opnieuw: capaciteit, jaarlijkse gebruikskost en langetermijn-robuustheid tellen meer dan merk of ruw vermogen. Het nummer 1-model hier kan in een generieke top op nummer 5 staan — en dat is bewust zo.`,
      },
    ],
  },
}

export function getBestForHero(
  lang: Lang,
  category: Category,
  persona: BuyerPersona,
  siloTitle: string
): BestForHero {
  const tmpl = bestForTemplates[lang]
  const catLabel = category.title[lang]
  const personaLabel = persona.label[lang]
  return {
    kicker: tmpl.kicker,
    title: tmpl.title(catLabel, personaLabel),
    subtitle: tmpl.subtitle(catLabel, siloTitle),
    intro: tmpl.intros[persona.axis](catLabel, personaLabel),
    criteriaHeading: tmpl.criteriaHeading,
    criteria: tmpl.criteria[persona.axis](catLabel, personaLabel),
  }
}

export function getBestForFaq(
  lang: Lang,
  category: Category,
  persona: BuyerPersona
): CategoryFaqEntry[] {
  return bestForTemplates[lang].faq(
    category.title[lang],
    persona.label[lang]
  )
}
