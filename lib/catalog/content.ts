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
import { getCategoryHead } from './category-heads'
import { getCategorySpecificFaq } from './category-faqs'

/**
 * Polish templates embed category and silo titles mid-sentence. Unlike
 * `toLowerCase()`, this lowercases only a leading capitalised word so
 * acronyms and brands inside the title ("EV", "Wi-Fi", "Matter") survive.
 */
export function lowerFirst(text: string): string {
  return /^\p{Lu}\p{Ll}/u.test(text) ? text.charAt(0).toLowerCase() + text.slice(1) : text
}

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
    subtitle: (silo) => `Comparés pour l'Europe — ${silo.toLowerCase()}`,
    intro: (cat, silo, keyword) =>
      `Guide « ${keyword} » : notre sélection de ${cat.toLowerCase()} dans la catégorie ${silo.toLowerCase()}, évaluée sur les critères qui comptent en Europe : coût énergétique annuel, étiquette énergie EU, conformité RGPD, disponibilité des pièces détachées sur cinq ans et compatibilité Matter. Nous écartons les modèles qui sur-vendent le marketing et retenons ceux qui tiennent sur la durée.`,
    buyCtaLabel: 'Vérifier le prix sur Amazon',
  },
  en: {
    title: (cat) => `Best ${cat.toLowerCase()} 2026`,
    subtitle: (silo) => `Compared for Europe — ${silo.toLowerCase()}`,
    intro: (cat, silo, keyword) =>
      `Your “${keyword}” guide: our curated ${cat.toLowerCase()} picks from the ${silo.toLowerCase()} category, graded on what really matters in Europe: annual energy cost, EU energy label, GDPR compliance, spare-part availability over five years and Matter support. We drop models that over-sell marketing and keep the ones that go the distance.`,
    buyCtaLabel: 'Check price on Amazon',
  },
  de: {
    title: (cat) => `${cat} Vergleich 2026 — Empfehlungen & Kaufberatung`,
    subtitle: (silo) => `Ausgewählt & verglichen für Europa — ${silo.toLowerCase()}`,
    intro: (cat, silo, keyword) =>
      `Ratgeber „${keyword}“: unsere Auswahl an ${cat} aus der Kategorie ${silo.toLowerCase()}, bewertet nach den Kriterien, die in Europa wirklich zählen: jährliche Energiekosten, EU-Energielabel, DSGVO-Konformität, Ersatzteil­verfügbarkeit über fünf Jahre und Matter-Unterstützung. Modelle mit reinem Marketing fliegen raus, Geräte mit Langlebigkeit bleiben.`,
    buyCtaLabel: 'Preis bei Amazon prüfen',
  },
  es: {
    title: (cat) => `Comparativa ${cat.toLowerCase()} 2026 — Análisis y mejores modelos`,
    subtitle: (silo) => `Analizados y comparados para Europa — ${silo.toLowerCase()}`,
    intro: (cat, silo, keyword) =>
      `Guía «${keyword}»: nuestra selección de ${cat.toLowerCase()} en la categoría ${silo.toLowerCase()}, evaluada con los criterios que importan en Europa: coste energético anual, etiqueta energética EU, cumplimiento RGPD, disponibilidad de recambios a cinco años y compatibilidad Matter. Descartamos los modelos que sobre-venden el marketing y conservamos los que aguantan.`,
    buyCtaLabel: 'Ver precio en Amazon',
  },
  it: {
    title: (cat) => `I migliori ${cat.toLowerCase()} 2026`,
    subtitle: (silo) => `Confrontati per l'Europa — ${silo.toLowerCase()}`,
    intro: (cat, silo, keyword) =>
      `Guida «${keyword}»: la nostra selezione di ${cat.toLowerCase()} nella categoria ${silo.toLowerCase()}, valutata sui criteri che contano davvero in Europa: costo energetico annuo, etichetta energetica EU, conformità GDPR, disponibilità dei ricambi su cinque anni e supporto Matter. Scartiamo i modelli che sopravvalutano il marketing e teniamo quelli che durano.`,
    buyCtaLabel: 'Verifica prezzo su Amazon',
  },
  nl: {
    title: (cat) => `De beste ${cat.toLowerCase()} 2026`,
    subtitle: (silo) => `Vergeleken voor Europa — ${silo.toLowerCase()}`,
    intro: (cat, silo, keyword) =>
      `Gids ‘${keyword}’: onze selectie van ${cat.toLowerCase()} in de categorie ${silo.toLowerCase()}, beoordeeld op wat in Europa écht telt: jaarlijkse energiekosten, EU-energielabel, AVG-conformiteit, beschikbaarheid van onderdelen over vijf jaar en Matter-ondersteuning. We laten modellen vallen die teveel op marketing leunen en houden de apparaten die het volhouden.`,
    buyCtaLabel: 'Bekijk prijs op Amazon',
  },
  pl: {
    title: (cat) => `Najlepsze ${lowerFirst(cat)} 2026`,
    subtitle: (silo) => `Porównanie dla kupujących w Polsce – ${lowerFirst(silo)}`,
    intro: (cat, silo, keyword) =>
      `Przewodnik „${keyword}”: porównujemy ${lowerFirst(cat)} z działu „${silo}” według tego, co liczy się po latach używania w polskim domu: roczny koszt prądu, klasa na unijnej etykiecie energetycznej (jeśli produkt ją ma), zgodność z RODO w modelach z aplikacją, dostępność części zamiennych przez pięć lat i obsługa standardu Matter. Odrzucamy modele, które obiecują więcej, niż dają, a zostawiamy te, które wytrzymują próbę czasu.`,
    buyCtaLabel: 'Sprawdź cenę na Amazon',
  },
  sv: {
    title: (cat) => `${cat} 2026: de bästa modellerna`,
    subtitle: (silo) => `${silo}: modeller utvalda och jämförda för europeiska hem`,
    intro: (cat, silo, keyword) =>
      `Köpguide för dig som söker ”${keyword}”: vi har valt ut modeller i kategorin ${lowerFirst(cat)} inom området ${lowerFirst(silo)} och bedömt dem efter det som verkligen spelar roll i Europa – årlig energikostnad, EU:s energimärkning, dataskydd enligt GDPR, tillgång till reservdelar i fem år och stöd för Matter. Modeller som är mer marknadsföring än substans sorterar vi bort, och kvar blir de som håller i längden.`,
    buyCtaLabel: 'Se priset på Amazon',
  },
  us: {
    title: (cat) => `Best ${cat} of 2026`,
    subtitle: (silo) => `Compared model by model in our ${silo} section`,
    intro: (cat, silo, keyword) =>
      `Searching for “${keyword}”? Our ${cat} guide in the ${silo} section ranks models sold in the US on what still matters after years of ownership: the yearly cost to run at the US average electricity rate, ENERGY STAR certification and UL or ETL listings where they apply, subscription costs for smart features, replacement parts and Matter support. Models that lean on marketing claims get cut; the ones built to last make the list.`,
    buyCtaLabel: 'Check price on Amazon',
  },
  ca: {
    title: (cat) => `The best ${cat.toLowerCase()} of 2026`,
    subtitle: (silo) => `Models compared for your home — ${silo}`,
    intro: (cat, silo, keyword) =>
      `Searching for “${keyword}”? This guide brings together our picks in the ${cat} category, part of our ${silo} section. We grade every model on what really matters over the life of a product: annual energy use (your cost depends on your province and utility), ENERGY STAR certification where the category has one, a North American version with a certification mark recognized in Canada, such as CSA, cUL or cETL, how the app handles your data on smart models, and Matter support. Models that promise more than they deliver are dropped, and the ones built to last make the cut.`,
    buyCtaLabel: 'Check price on Amazon',
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
  const head = getCategoryHead(category.slug, lang)
  const keyword = head?.keyword ?? category.primaryKeyword[lang]
  return {
    kicker: catTitle,
    title: head?.h1 ?? tmpl.title(catTitle),
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
  pl: (cat, silo) => [
    {
      question: `Jak wybrać ${lowerFirst(cat)} w 2026 roku?`,
      answer: `Nasza metodologia Home Nura ocenia ${lowerFirst(cat)} według pięciu kryteriów: rzeczywisty roczny koszt prądu, klasa na etykiecie energetycznej UE (jeśli produkt ją ma), zgodność z RODO w urządzeniach z aplikacją, dostępność części zamiennych przez pięć lat i obsługa standardu Matter. Odrzucamy modele, które nie wytrzymują próby czasu.`,
    },
    {
      question: `Na co zwrócić uwagę, kupując ${lowerFirst(cat)}?`,
      answer: `W Polsce obowiązują te same zasady co w całej UE, więc sprawdź pięć rzeczy: oznakowanie CE, klasę na etykiecie energetycznej (jeśli produkt ją ma), zgodność z RODO w urządzeniach z aplikacją, dostępność części zamiennych i serwisu w Polsce oraz wtyczkę pasującą do polskiego gniazdka, bez przejściówki. Te pięć punktów składa się na nasz Nura Score /10 dla każdego modelu z działu „${silo}”.`,
    },
    {
      question: `Model podstawowy czy premium – na czym polega prawdziwa różnica?`,
      answer: `Modele z niższej półki oszczędzają na trwałości: mniej wytrzymałe tworzywa, części zamienne rzadko dostępne dłużej niż dwa lata, optymistycznie podawane zużycie energii. W modelach premium płaci się za długowieczność i serwis posprzedażowy. Nasz wybór z działu „${silo}” rozdziela jedne i drugie bez kompromisów – dokładnie to opisuje nasza publiczna metodologia.`,
    },
    {
      question: `Jak długo naprawdę wytrzymują ${lowerFirst(cat)}?`,
      answer: `Przy codziennym używaniu dobre ${lowerFirst(cat)} powinny wytrzymać od 6 do 8 lat bez spadku wydajności – o ile części zamienne pozostają dostępne. Dlatego przed każdą rekomendacją z działu „${silo}” sprawdzamy dostępność części zamiennych, a przed zakupem warto zapytać producenta, jak długo je dostarcza. Niezależnie od tego przez dwa lata od dostarczenia towaru za jego niezgodność z umową odpowiada sprzedawca (art. 43c ust. 1 ustawy o prawach konsumenta).`,
    },
    {
      question: `Na jakie marki warto zwrócić uwagę, gdy wybierasz ${lowerFirst(cat)}?`,
      answer: `Kraj pochodzenia marki mówi mniej niż to, co dzieje się po zakupie. Zanim wybierzesz ${lowerFirst(cat)}, sprawdź, czy producent ma polską stronę i obsługę klienta, podaje rzeczywiste zużycie energii i sprzedaje części zamienne w Polsce. Wielu kupujących szuka też polskich marek: według badania opublikowanego przez Amazon w październiku 2026 roku 84,2% Polaków uważa, że przy równym wyborze warto kupić polski produkt. Jeśli w tej kategorii jest polski producent, porównujemy go na tych samych zasadach co pozostałych.`,
    },
  ],
  sv: (cat, silo) => [
    {
      question: `${cat} 2026: hur väljer du rätt?`,
      answer: `Home Nuras metod bedömer varje modell i kategorin ${lowerFirst(cat)} efter fem europeiska kriterier: verklig årlig energikostnad, EU:s energimärkning, dataskydd enligt GDPR (för uppkopplade produkter), tillgång till reservdelar i fem år och stöd för Matter. Modeller som inte håller i längden väljer vi bort, utan undantag.`,
    },
    {
      question: `Vilka europeiska kriterier är viktigast för ${lowerFirst(cat)}?`,
      answer: `I Europa är de viktigaste kriterierna CE-märkning, EU:s obligatoriska energimärkning, dataskydd enligt GDPR för uppkopplade produkter, tillgång till reservdelar enligt EU:s reparationsdirektiv från 2026 och rätt stickpropp (EU- eller UK-kontakt). De fem punkterna ligger till grund för det betyg av 10 som varje modell i området ${lowerFirst(silo)} får i Nura Score.`,
    },
    {
      question: `Instegsmodell eller premium: var ligger den verkliga skillnaden?`,
      answer: `Instegsmodellerna sparar in på hållbarheten: mindre tålig plast, reservdelar som sällan finns kvar efter två år och en optimistiskt angiven förbrukning. Premiummodellerna tar betalt för lång livslängd och service efter köpet. Vårt urval i området ${lowerFirst(silo)} håller isär de två utan kompromisser – precis det som vår offentliga metodbeskrivning går igenom.`,
    },
    {
      question: `Hur länge håller ${lowerFirst(cat)} egentligen i ett europeiskt hushåll?`,
      answer: `I ett vanligt europeiskt hushåll bör en bra modell i kategorin ${lowerFirst(cat)} hålla i 6–8 år utan att prestandan försämras – förutsatt att det fortfarande finns reservdelar. EU:s reparationsdirektiv från 2026 ställer nu krav på den livslängden hos tillverkare som säljer i Europa, och vi kontrollerar tillgången på reservdelar innan vi rekommenderar något i området ${lowerFirst(silo)}.`,
    },
    {
      question: `Vilka europeiska märken spelar verkligen roll när det gäller ${lowerFirst(cat)}?`,
      answer: `Europa har fortfarande seriösa tillverkare – ofta med säte i Tyskland, Frankrike, Italien eller Nederländerna – som uppfyller CE-kraven, redovisar sin verkliga förbrukning och garanterar lokal service i fem år. För varje modell i vår topplista över ${lowerFirst(cat)} anger vi i vilket land den har konstruerats och hur lätt det är att nå kundtjänsten på varje marknad.`,
    },
  ],
  us: (cat, silo) => [
    {
      question: `What should I look for when shopping for ${cat.toLowerCase()} in 2026?`,
      answer: `Our Home Nura methodology scores ${cat.toLowerCase()} on five criteria: the yearly cost to run at the US average electricity rate, ENERGY STAR certification where the category has one, a UL or ETL safety listing, replacement parts you can actually get and Matter support for smart models. Models that aren't built to last get cut right away.`,
    },
    {
      question: `Which criteria really matter when you compare ${cat.toLowerCase()}?`,
      answer: `In the US, start with safety and fit: a UL or ETL listing mark, a version rated for a standard 120 V outlet and, where the category has one, ENERGY STAR certification. Then compare the yearly cost to run, replacement parts and, for smart models, any features locked behind a paid subscription. These criteria feed the Nura Score /10 of every model in our ${silo} section.`,
    },
    {
      question: `Budget or premium: where's the real difference?`,
      answer: `Entry-level models cut corners on durability: cheaper plastics, replacement parts that are rarely available past two years and optimistic energy figures. Premium models charge for longevity and customer support. Our ${silo} picks keep the two clearly apart, exactly as our public methodology lays out.`,
    },
    {
      question: `How long should ${cat.toLowerCase()} last?`,
      answer: `With regular use, a good model should last 6 to 8 years without losing performance, as long as replacement parts stay available. How long a brand keeps supplying parts varies, so it's worth checking before you buy, and we check parts availability before we recommend anything in our ${silo} section.`,
    },
    {
      question: `Which brands are worth a look for ${cat.toLowerCase()}?`,
      answer: `The brands worth a look depend on the category, so we don't favor any brand up front: every ranking in our ${silo} section only includes models sold in their US version. Before you buy, check the warranty length and how to reach customer support in the US for the exact model.`,
    },
  ],
  ca: (cat, silo) => [
    {
      question: `${cat}: how do I choose the right model in 2026?`,
      answer: `Our Home Nura methodology scores ${cat.toLowerCase()} on five criteria: real annual energy use, ENERGY STAR certification where the category has one, a North American version with a certification mark recognized in Canada, clear data and privacy settings on smart models, and Matter support. Models that can't go the distance are dropped right away.`,
    },
    {
      question: `Which criteria really matter when you compare ${cat.toLowerCase()}?`,
      answer: `Five checks feed the Nura Score /10 of every model in our ${silo} section: a certification mark recognized in Canada, such as CSA, cUL or cETL, a North American version of the model, ENERGY STAR certification where the category has one, how the app handles your data on smart models, and whether the brand offers warranty service and spare parts in Canada. The models sold in Canada often carry different model codes from the European ones, so check the exact model on the listing before you buy.`,
    },
    {
      question: `Budget or premium: where is the real difference?`,
      answer: `Entry-level models cut corners on durability: cheaper plastics, spare parts that are rarely available past two years and optimistic energy figures. Premium models charge for longevity and after-sales service. Our picks in the ${silo} section keep the two clearly apart, exactly as our public methodology explains.`,
    },
    {
      question: `How long should ${cat.toLowerCase()} really last?`,
      answer: `With everyday use, a good model should last 6 to 8 years without losing performance, as long as spare parts stay available. That's why we check that spare parts are in stock before recommending anything in our ${silo} section. How long a brand keeps supplying parts varies, so it's worth checking before you buy.`,
    },
    {
      question: `Which brands really matter for ${cat.toLowerCase()}?`,
      answer: `The brands that matter are the ones that sell a North American version of the model in Canada, publish honest energy data and back it with warranty service here, wherever they are based. For every model in our ranking, we name the version sold in Canada; before you buy, check that the brand offers customer service in Canada.`,
    },
  ],
}

export function getCategoryFaq(lang: Lang, category: Category): CategoryFaqEntry[] {
  // Market-specific FAQ first; the template only covers categories
  // whose FAQ is not written yet.
  const specific = getCategorySpecificFaq(category.slug, lang)
  if (specific) return [...specific]
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
    title: (label) => `Die besten Produkte für ${label} — Vergleich 2026`,
    subtitle: (label) => `Home-Nura-Empfehlungen: ${label} im Vergleich 2026`,
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
    title: (label) => `Mejores productos para ${label.toLowerCase()} — Comparativa 2026`,
    subtitle: (label) => `Análisis Home Nura: ${label.toLowerCase()} en Europa 2026`,
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
  pl: {
    kicker: 'Poradnik zakupowy',
    title: (label) => `Najlepsze produkty dla profilu „${label}”`,
    subtitle: (label) => `Wybór Home Nura dla profilu „${label}” – ranking 2026`,
    intros: {
      household: (label) =>
        `W profilu „${label}” nasze wybory stawiają na kryteria, które naprawdę liczą się na co dzień: dopasowaną pojemność, ergonomię, łatwość konserwacji i trwałość na pięć lat. Każdy polecany produkt oceniamy też pod kątem rocznego kosztu prądu i zgodności z przepisami obowiązującymi w Polsce w 2026 roku.`,
      budget: (label) =>
        `Przedział „${label}” to Twoje decydujące ograniczenie. Metodologia Home Nura waży kryteria inaczej w zależności od przedziału cenowego: przy ograniczonym budżecie naprawialność i deklarowane zużycie energii liczą się bardziej niż funkcje premium, a przy wysokim budżecie trwałość i serwis w Polsce muszą być bez zarzutu.`,
      usage: (label) =>
        `Przy profilu użytkowania „${label}” niezawodność w codziennym działaniu liczy się bardziej niż karta katalogowa. Nasze rekomendacje pomijają modele, które robią wrażenie po rozpakowaniu, ale z czasem tracą formę. Przy każdej pozycji liczy się realny roczny koszt prądu, a nie tylko moc z tabliczki.`,
      constraint: (label) =>
        `Wymóg „${label}” radykalnie zawęża wybór. Nasza metodologia Home Nura stosuje ten filtr jeszcze przed otwarciem rankingu, a potem sortuje według stałych kryteriów: etykieta energetyczna UE, zgodność z RODO, części zamienne na pięć lat i obsługa standardu Matter.`,
    },
  },
  sv: {
    kicker: 'Köpguide',
    title: (label) => `De bästa produkterna för profilen ”${label}”`,
    subtitle: (label) => `Home Nuras urval 2026 för profilen ”${label}”, anpassat för europeiska hem`,
    intros: {
      household: (label) =>
        `För profilen ”${label}” prioriterar vi det som verkligen spelar roll i vardagen: rätt storlek, smidig användning, enkel skötsel och hållbarhet i fem år. Varje rekommenderad produkt bedöms också efter sin årliga energikostnad och efter hur väl den följer de europeiska regler som gäller 2026.`,
      budget: (label) =>
        `Med profilen ”${label}” är det budgeten som avgör. Home Nuras metod viktar kriterierna olika beroende på prisklass: med en snäv budget väger reparerbarhet och angiven förbrukning tyngre än premiumfunktioner, och i den övre prisklassen måste livslängden och servicen i Europa vara oklanderliga.`,
      usage: (label) =>
        `För profilen ”${label}” är det viktigare att produkten fungerar pålitligt varje gång än att den har imponerande tekniska data. Vi väljer bort modeller som glänser när de packas upp men tappar med tiden. För varje produkt i urvalet redovisar vi en realistisk årlig energikostnad, beräknad för den europeiska marknaden.`,
      constraint: (label) =>
        `Kravet ”${label}” gallrar kraftigt bland alternativen. Home Nuras metod använder det som filter redan innan topplistan tas fram och sorterar sedan efter de vanliga europeiska kriterierna: EU:s energimärkning, dataskydd enligt GDPR, reservdelar i fem år och stöd för Matter.`,
    },
  },
  us: {
    kicker: 'Buying guide',
    title: (label) => `Best Home Tech Picks: ${label}`,
    subtitle: (label) => `${label}: the Home Nura shortlist for 2026, category by category`,
    intros: {
      household: (label) =>
        `Household: ${label}. Our picks put everyday criteria first: capacity that fits the household, ease of use, easy cleaning and five-year durability. Every product here is also scored on its yearly cost to run at the US average electricity rate and on its UL or ETL safety listing.`,
      budget: (label) =>
        `Price tier: ${label}. That's your hard limit, and our Home Nura methodology shifts its weighting from one tier to the next: on a tight budget, repairability and rated energy use count for more than premium features; at the top end, longevity and customer support have to be flawless.`,
      usage: (label) =>
        `Use case: ${label}. Here, day-to-day reliability beats the spec sheet. Our picks drop models that impress out of the box but slip over time, and every entry comes with a realistic annual energy cost.`,
      constraint: (label) =>
        `The “${label}” filter narrows the field fast. Our Home Nura methodology applies it before the ranking even starts, then sorts what's left on our usual criteria: the yearly cost to run, ENERGY STAR certification where it applies, replacement parts and Matter support.`,
    },
  },
  ca: {
    kicker: 'Buying guide',
    title: (label) => `Best Products for Your Profile: ${label}`,
    subtitle: (label) => `Home Nura's 2026 picks for the “${label}” profile`,
    intros: {
      household: (label) =>
        `For the “${label}” profile, our picks put the criteria that matter day to day first: the right capacity, ergonomics, easy maintenance and five-year durability. Every product here is also graded on its annual energy use and on whether its North American version carries a certification mark recognized in Canada.`,
      budget: (label) =>
        `For the “${label}” profile, your budget is the deciding factor. Our Home Nura methodology weights the criteria differently for each price tier: on a tight budget, repairability and declared energy use count for more than premium features; at the top end, longevity and after-sales service have to be flawless.`,
      usage: (label) =>
        `For the “${label}” profile, everyday reliability matters more than the spec sheet. We drop models that impress out of the box but slip over time. Every pick comes with a realistic estimate of its annual energy cost; your actual cost depends on your province and utility.`,
      constraint: (label) =>
        `The “${label}” profile narrows the field sharply. Our Home Nura methodology applies this filter before the ranking even starts, then sorts what's left on our usual criteria: annual energy use, ENERGY STAR certification where it applies, a certification mark recognized in Canada, data privacy on smart models and Matter support.`,
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
      answer: `Oui. Home Nura est un éditeur indépendant basé en Europe ; nos classements ne sont jamais payants. Les liens Amazon sont affiliés, mais la sélection est décidée avant l'intégration des liens, et notre méthodologie publique trace chaque décision.`,
    },
    {
      question: 'À quelle fréquence les classements sont-ils mis à jour ?',
      answer: `Tous les trimestres. Chaque silo est audité tous les trois mois : retrait des modèles en rupture, révision des gammes de budget, mise à jour des coûts énergétiques et des étiquettes EU. La date de dernière mise à jour est affichée sur chaque page.`,
    },
    {
      question: 'Pourquoi construire une sélection par profil plutôt qu\'un « top 10 » classique ?',
      answer: `Un top généraliste force tous les profils dans un même classement et pénalise les foyers atypiques — petits budgets, contraintes d\'espace, ménages RGPD-strict. Nos sélections par profil reflètent le vrai coût d\'usage pour ce foyer : consommation annuelle chiffrée, adéquation aux habitudes et SAV disponible dans le marché local.`,
    },
    {
      question: 'Comment évaluez-vous les produits pour les conditions européennes ?',
      answer: `Nous ne testons pas les produits nous-mêmes. Nous comparons les consommations annoncées selon les normes EN, les tests indépendants publiés et les retours d\'acheteurs vérifiés. Aucune recommandation n\'est basée uniquement sur la fiche produit — la méthodologie publique détaille le protocole.`,
    },
  ],
  en: [
    {
      question: 'How does Home Nura pick products by profile?',
      answer: `Our public methodology cross-references the usage profile (household, budget, constraint) with five European criteria: annual energy cost, EU energy label, GDPR compliance, five-year spare-part availability and Matter support. Models that can't go the distance are excluded.`,
    },
    {
      question: 'Are the recommendations independent?',
      answer: `Yes. Home Nura is an independent publisher based in Europe; our rankings are never paid. Amazon links are affiliate, but the shortlist is decided before the links are wired in, and our public methodology traces every decision.`,
    },
    {
      question: 'How often are the rankings refreshed?',
      answer: `Quarterly. Every silo is audited every three months: out-of-stock models pulled, budget ranges reviewed, energy costs and EU labels updated. The "last updated" stamp is visible on every page.`,
    },
    {
      question: 'Why a profile-based selection instead of a classic top 10?',
      answer: `A generic top 10 forces every profile into the same ranking and penalises atypical households — tight budgets, space-constrained homes, GDPR-strict users. Our profile-based picks reflect the real cost of ownership for that household: real annual energy figures, fit to daily habits and local after-sales availability.`,
    },
    {
      question: 'How do you assess products for European conditions?',
      answer: `We do not test products ourselves. We compare energy figures declared under EN standards, published independent tests and verified buyer feedback. No recommendation is based on a spec sheet alone — the public methodology lays out the protocol.`,
    },
  ],
  de: [
    {
      question: 'Wie wählt Home Nura Produkte nach Profil aus?',
      answer: `Unsere öffentliche Methodik kreuzt das Nutzungsprofil (Haushalt, Budget, Einschränkung) mit fünf europäischen Kriterien: jährliche Energiekosten, EU-Energielabel, DSGVO-Konformität, fünfjährige Ersatzteilverfügbarkeit und Matter-Unterstützung. Geräte, die nicht durchhalten, fliegen raus.`,
    },
    {
      question: 'Sind die Empfehlungen unabhängig?',
      answer: `Ja. Home Nura ist ein unabhängiger Publisher mit Sitz in Europa; unsere Rankings sind nie bezahlt. Amazon-Links sind Affiliate, aber die Auswahl steht vor dem Einbau der Links fest, und unsere öffentliche Methodik dokumentiert jede Entscheidung.`,
    },
    {
      question: 'Wie oft werden die Rankings aktualisiert?',
      answer: `Quartalsweise. Jedes Silo wird alle drei Monate auditiert: ausverkaufte Modelle entfernt, Budgetklassen überprüft, Energiekosten und EU-Labels aktualisiert. Das „Zuletzt aktualisiert"-Datum steht auf jeder Seite.`,
    },
    {
      question: 'Warum eine profilbasierte Auswahl statt einer klassischen Top-10-Liste?',
      answer: `Eine generische Top-10 zwingt alle Profile ins gleiche Ranking und benachteiligt atypische Haushalte — knappes Budget, enge Wohnfläche, DSGVO-strenge Nutzer. Unsere profilbasierte Auswahl zeigt die tatsächlichen Gesamtkosten für diesen Haushalt: reale Jahresenergie, Alltagstauglichkeit und lokale Kundendienstverfügbarkeit.`,
    },
    {
      question: 'Wie bewerten Sie die Produkte für europäische Bedingungen?',
      answer: `Wir testen die Produkte nicht selbst. Wir vergleichen die nach EN-Normen angegebenen Verbrauchswerte, veröffentlichte unabhängige Tests und verifizierte Käuferbewertungen. Keine Empfehlung basiert allein auf dem Datenblatt — unsere öffentliche Methodik beschreibt das Protokoll im Detail.`,
    },
  ],
  es: [
    {
      question: '¿Cómo selecciona Home Nura los productos por perfil?',
      answer: `Nuestra metodología pública cruza el perfil de uso (hogar, presupuesto, restricción) con cinco criterios europeos: coste energético anual, etiqueta energética EU, cumplimiento RGPD, disponibilidad de recambios a cinco años y compatibilidad Matter. Los modelos que no duran quedan fuera.`,
    },
    {
      question: '¿Son las recomendaciones independientes?',
      answer: `Sí. Home Nura es un editor independiente con sede en Europa; nuestros rankings nunca son de pago. Los enlaces de Amazon son afiliados, pero la selección se decide antes de integrar los enlaces, y nuestra metodología pública traza cada decisión.`,
    },
    {
      question: '¿Con qué frecuencia se actualizan los rankings?',
      answer: `Trimestralmente. Cada silo se audita cada tres meses: retirada de modelos agotados, revisión de los rangos de presupuesto, actualización de costes energéticos y etiquetas EU. La fecha de última actualización se muestra en cada página.`,
    },
    {
      question: '¿Por qué una selección por perfil en lugar de un top 10 clásico?',
      answer: `Un top generalista obliga a todos los perfiles al mismo ranking y penaliza a los hogares atípicos — presupuestos ajustados, viviendas pequeñas, usuarios estrictos en RGPD. Nuestras selecciones por perfil reflejan el coste real de uso en ese hogar: consumo anual real, adaptación a los hábitos y servicio posventa disponible en el mercado local.`,
    },
    {
      question: '¿Cómo evaluáis los productos para las condiciones europeas?',
      answer: `No probamos los productos nosotros mismos. Comparamos los consumos declarados según las normas EN, las pruebas independientes publicadas y las opiniones de compradores verificados. Ninguna recomendación se basa únicamente en la ficha técnica — la metodología pública detalla el protocolo.`,
    },
  ],
  it: [
    {
      question: 'Come seleziona Home Nura i prodotti per profilo?',
      answer: `La nostra metodologia pubblica incrocia il profilo d'uso (famiglia, budget, vincolo) con cinque criteri europei: costo energetico annuo, etichetta energetica EU, conformità GDPR, disponibilità ricambi su cinque anni e supporto Matter. I modelli che non durano sono esclusi.`,
    },
    {
      question: 'Le raccomandazioni sono indipendenti?',
      answer: `Sì. Home Nura è un editore indipendente con sede in Europa; le nostre classifiche non sono mai a pagamento. I link Amazon sono affiliati, ma la selezione è decisa prima di integrare i link, e la nostra metodologia pubblica traccia ogni decisione.`,
    },
    {
      question: 'Con quale frequenza le classifiche vengono aggiornate?',
      answer: `Trimestralmente. Ogni silo viene auditato ogni tre mesi: rimozione dei modelli esauriti, revisione delle fasce di budget, aggiornamento dei costi energetici e delle etichette EU. La data dell'ultimo aggiornamento è visibile su ogni pagina.`,
    },
    {
      question: 'Perché una selezione per profilo anziché una classica top 10?',
      answer: `Una top 10 generica forza tutti i profili nella stessa classifica e penalizza le famiglie atipiche — budget stretti, case piccole, utenti GDPR-strict. Le nostre selezioni per profilo mostrano il costo reale d'uso per quella famiglia: consumi annui effettivi, aderenza alle abitudini e assistenza locale disponibile nel mercato.`,
    },
    {
      question: 'Come valutate i prodotti per le condizioni europee?',
      answer: `Non testiamo i prodotti direttamente. Confrontiamo i consumi dichiarati secondo le norme EN, i test indipendenti pubblicati e le recensioni di acquirenti verificati. Nessuna raccomandazione si basa solo sulla scheda tecnica — la metodologia pubblica descrive il protocollo nel dettaglio.`,
    },
  ],
  nl: [
    {
      question: 'Hoe selecteert Home Nura producten per profiel?',
      answer: `Onze publieke methodologie kruist het gebruiksprofiel (huishouden, budget, beperking) met vijf Europese criteria: jaarlijkse energiekost, EU-energielabel, AVG-naleving, vijfjaarlijkse beschikbaarheid van onderdelen en Matter-ondersteuning. Modellen die niet duurzaam zijn vallen af.`,
    },
    {
      question: 'Zijn de aanbevelingen onafhankelijk?',
      answer: `Ja. Home Nura is een onafhankelijke uitgever met een basis in Europa; onze rankings zijn nooit betaald. Amazon-links zijn affiliate, maar de shortlist wordt bepaald voordat de links worden ingebouwd, en onze publieke methodologie traceert elke beslissing.`,
    },
    {
      question: 'Hoe vaak worden de rankings bijgewerkt?',
      answer: `Elk kwartaal. Elk silo wordt elke drie maanden geaudit: uitverkochte modellen verwijderd, budgetklassen herzien, energiekosten en EU-labels bijgewerkt. De "laatst bijgewerkt"-datum staat op elke pagina.`,
    },
    {
      question: 'Waarom een profielgebaseerde selectie in plaats van een klassieke top 10?',
      answer: `Een algemene top 10 dwingt elk profiel in dezelfde ranglijst en benadeelt atypische huishoudens — krappe budgetten, kleine woningen, AVG-strenge gebruikers. Onze profielgebaseerde selecties tonen de werkelijke gebruikskost voor dat huishouden: reële jaarlijkse energie, aansluiting op de leefgewoonten en lokale service-beschikbaarheid.`,
    },
    {
      question: 'Hoe beoordelen jullie producten voor Europese omstandigheden?',
      answer: `We testen de producten niet zelf. We vergelijken het opgegeven verbruik volgens EN-normen, gepubliceerde onafhankelijke tests en geverifieerde kopersbeoordelingen. Geen enkele aanbeveling is uitsluitend op een productfiche gebaseerd — onze publieke methodologie beschrijft het protocol.`,
    },
  ],
  pl: [
    {
      question: 'Jak serwis Home Nura dobiera produkty do profilu?',
      answer: `Nasza publiczna metodologia zestawia profil użytkowania (gospodarstwo domowe, budżet, ograniczenia) z pięcioma kryteriami: rocznym kosztem prądu, unijną etykietą energetyczną, zgodnością z RODO, dostępnością części zamiennych przez pięć lat i obsługą standardu Matter. Odrzucamy modele, które nie sprawdzają się na dłuższą metę.`,
    },
    {
      question: 'Czy rekomendacje są niezależne?',
      answer: `Tak. Serwis Home Nura to niezależny wydawca, a miejsca w naszych rankingach nigdy nie są płatne. Linki do Amazon są afiliacyjne, ale wybór modeli zapada, zanim dodamy linki, a każdą decyzję dokumentuje nasza publiczna metodologia.`,
    },
    {
      question: 'Jak często aktualizujecie rankingi?',
      answer: `Co kwartał. Każdy dział przeglądamy co trzy miesiące: usuwamy modele niedostępne w sprzedaży, weryfikujemy przedziały budżetowe, aktualizujemy koszty energii i etykiety UE. Data ostatniej aktualizacji widnieje na każdej stronie.`,
    },
    {
      question: 'Dlaczego zestawienia według profilu, a nie klasyczne „top 10”?',
      answer: `Ogólne top 10 wrzuca wszystkie profile do jednego rankingu i stawia w gorszej sytuacji nietypowe gospodarstwa domowe – z małym budżetem, z ograniczonym miejscem czy szczególnie dbające o ochronę danych (RODO). Nasze zestawienia dla poszczególnych profili pokazują rzeczywisty koszt użytkowania w danym gospodarstwie: wyliczone roczne zużycie energii, dopasowanie do codziennych nawyków i dostępność serwisu na lokalnym rynku.`,
    },
    {
      question: 'Jak oceniacie produkty pod kątem warunków w Polsce?',
      answer: `Nie testujemy produktów samodzielnie. Porównujemy zużycie energii deklarowane zgodnie z normami EN (w Polsce wprowadzone jako normy PN-EN), opublikowane niezależne testy i opinie zweryfikowanych kupujących. Żadna rekomendacja nie opiera się wyłącznie na karcie katalogowej – szczegółową procedurę opisuje nasza publiczna metodologia.`,
    },
  ],
  sv: [
    {
      question: 'Hur väljer Home Nura ut produkter per profil?',
      answer: 'Vår publicerade metod väger ihop användarprofilen (hushåll, budget, begränsningar) med fem europeiska kriterier: årlig energikostnad, EU:s energimärkning, GDPR-efterlevnad, tillgång till reservdelar i fem år och stöd för Matter. Modeller som inte håller i längden sorteras bort.',
    },
    {
      question: 'Är rekommendationerna oberoende?',
      answer: 'Ja. Home Nura är en oberoende utgivare med bas i Europa, och våra rankningar går aldrig att köpa. Länkarna till Amazon är affiliatelänkar, men urvalet bestäms innan länkarna läggs in, och vår publicerade metod gör varje beslut spårbart.',
    },
    {
      question: 'Hur ofta uppdateras rankningarna?',
      answer: 'En gång i kvartalet. Varje område granskas var tredje månad: modeller som har tagit slut i lager tas bort, budgetintervallen ses över och energikostnader och energimärkningar uppdateras. Datumet för senaste uppdatering visas på varje sida.',
    },
    {
      question: 'Varför ett urval per profil i stället för en klassisk topp 10?',
      answer: 'En allmän topplista tvingar in alla profiler i samma rankning och missgynnar hushåll som inte passar mallen – små budgetar, ont om plats, hushåll som är noga med GDPR. Våra urval per profil speglar vad produkten verkligen kostar för just det hushållet: beräknad årlig förbrukning, hur väl den passar vanorna och om det finns service på den lokala marknaden.',
    },
    {
      question: 'Hur bedömer ni produkterna för europeiska förhållanden?',
      answer: 'Vi provar inte produkterna själva. Vi jämför förbrukningsvärden som anges enligt EN-standarder, publicerade oberoende utvärderingar och verifierade köparomdömen. Ingen rekommendation bygger enbart på produktbladet – vår publicerade metod beskriver tillvägagångssättet i detalj.',
    },
  ],
  us: [
    {
      question: 'How does Home Nura pick products by profile?',
      answer: 'Our public methodology matches each usage profile (household, budget, constraints) against five criteria: yearly cost to run at the US average electricity rate, ENERGY STAR certification where it applies, a UL or ETL safety listing, replacement parts you can get and Matter support. We rule out models that won\'t last.',
    },
    {
      question: 'Are the recommendations independent?',
      answer: 'Yes. Home Nura is an independent publisher, and our rankings are never paid for. Amazon links are affiliate links, but the shortlist is set before any links are added, and our public methodology documents every decision.',
    },
    {
      question: 'How often are the rankings updated?',
      answer: 'Every quarter. Each section is reviewed every three months: out-of-stock models are pulled, budget ranges rechecked, and energy costs and certifications updated. The “Last updated” date is shown on every page.',
    },
    {
      question: 'Why picks by profile instead of a classic top 10 list?',
      answer: 'A generic top 10 forces everyone into the same ranking and penalizes households that don\'t fit the mold — tight budgets, small spaces, privacy-first users. Our profile-based picks reflect the real cost of ownership for that household: actual annual energy figures, fit with daily habits and local after-sales support.',
    },
    {
      question: 'How do you evaluate products for each market?',
      answer: 'We don\'t test products ourselves. For the US edition, we compare the manufacturer specs of each model\'s US version, ENERGY STAR and UL or ETL listings where they apply, published independent test results and verified buyer reviews. No recommendation rests on a spec sheet alone — our public methodology lays out the process.',
    },
  ],
  ca: [
    {
      question: 'How does Home Nura pick products by profile?',
      answer: 'Our public methodology cross-references the usage profile (household, budget, constraint) with five criteria: annual energy use, ENERGY STAR certification where it applies, a North American version with a certification mark recognized in Canada, data privacy on smart models and Matter support. Models that can\'t go the distance are excluded.',
    },
    {
      question: 'Are the recommendations independent?',
      answer: 'Yes. Home Nura is an independent publisher; our rankings are never paid. Amazon links are affiliate, but the shortlist is decided before the links are wired in, and our public methodology traces every decision.',
    },
    {
      question: 'How often are the rankings refreshed?',
      answer: 'Quarterly. Every section is reviewed every three months: out-of-stock models are pulled, budget ranges rechecked and energy figures updated. The “Last updated” date is shown on every page.',
    },
    {
      question: 'Why a profile-based selection instead of a classic top 10?',
      answer: 'A generic top 10 forces every profile into the same ranking and penalizes atypical households — tight budgets, space-constrained homes, privacy-first users. Our profile-based picks reflect the real cost of ownership for that household: real annual energy figures, fit to daily habits and local after-sales availability.',
    },
    {
      question: 'How do you assess products for Canadian homes?',
      answer: 'We do not test products ourselves. We compare the manufacturer\'s published energy figures, ENERGY STAR data where it exists, published independent tests and verified buyer feedback, and we check that the version sold in Canada is the one we describe. No recommendation is based on a spec sheet alone — the public methodology lays out the protocol.',
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
        question: `Comment Home Nura tient compte de ces pannes ?`,
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
        question: `Wie berücksichtigt Home Nura solche Defekte?`,
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
        question: `Come tiene conto Home Nura di questi guasti?`,
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
        question: `Hoe houdt Home Nura rekening met dit soort defecten?`,
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
  pl: {
    kicker: 'Diagnoza usterek',
    subtitlePrefix: 'Poradnik Home Nura – kategoria:',
    severityLabels: {
      minor: 'Waga problemu: drobna',
      moderate: 'Waga problemu: średnia',
      critical: 'Waga problemu: krytyczna',
    },
    diagnoses: {
      minor: `Ten objaw jest częsty i zwykle nieszkodliwy. W większości przypadków wystarczy punktowe czyszczenie lub drobna zmiana sposobu użytkowania, by rozwiązać problem w mniej niż dziesięć minut.`,
      moderate: `Ten objaw nie jest błahy, ale w większości przypadków da się go usunąć bez pomocy fachowca. Wykonuj poniższą procedurę po kolei i przerwij, gdy tylko problem zniknie.`,
      critical: `Uwaga: ten objaw może wskazywać na poważną wadę sprzętową. Nie używaj urządzenia, dopóki nie ustalisz przyczyny. Zalecamy skontaktować się z producentem lub autoryzowanym serwisem, zanim spróbujesz ponownie uruchomić urządzenie.`,
    },
    quickFixes: {
      minor: `Odłącz urządzenie od prądu, odczekaj, aż ostygnie, a następnie umyj odpowiedni element letnią wodą z delikatnym mydłem (nigdy szorstką gąbką na powłokach nieprzywierających). Złóż urządzenie, podłącz je ponownie i sprawdź krótki cykl na pusto.`,
      moderate: `1. Odłącz od prądu i poczekaj, aż ostygnie. 2. Obejrzyj dostępne elementy. 3. Postępuj zgodnie z procedurą producenta (instrukcja lub oficjalna strona). 4. Jeśli naprawa wymaga rozbiórki, przerwij i skontaktuj się z obsługą klienta – żeby nie stracić gwarancji producenta.`,
      critical: `Natychmiast odłącz urządzenie od prądu i nie używaj go dalej. Udokumentuj objaw (zdjęcie, nagranie, odgłosy), a następnie skontaktuj się z obsługą klienta producenta. W Polsce sprzedawca odpowiada za niezgodność towaru z umową, która ujawni się w ciągu dwóch lat od jego dostarczenia (art. 43c ust. 1 ustawy o prawach konsumenta).`,
    },
    fallbackCtas: {
      minor: 'Zobacz naszą metodologię zakupów',
      moderate: 'Sprawdź gwarancję i części zamienne',
      critical: 'Skontaktuj się z producentem',
    },
    backToCategory: 'Wróć do kategorii',
    faq: (cat) => [
      {
        question: `Czy tę usterkę można zareklamować?`,
        answer: `Tak, jeśli usterka wynika z wady, która ujawniła się w ciągu dwóch lat od dostarczenia towaru: za niezgodność towaru z umową odpowiada wtedy sprzedawca – dotyczy to również produktów z kategorii „${cat}” (art. 43c ust. 1 ustawy o prawach konsumenta, wdrażającej dyrektywę (UE) 2019/771). Reklamację składa się u sprzedawcy, czyli w sklepie, w którym kupiono urządzenie. Gwarancja producenta to osobna, dobrowolna droga: jej warunki opisuje dokument gwarancyjny.`,
      },
      {
        question: `Mam skontaktować się z serwisem czy zwrócić produkt do sklepu?`,
        answer: `Masz wybór: za niezgodność towaru z umową odpowiada sprzedawca, a gwarancja producenta to osobna, dobrowolna droga. W praktyce reklamacja w sklepie bywa szybsza, a serwis producenta może naprawić urządzenie także wtedy, gdy usterka nie podlega reklamacji. Zachowaj dowód zakupu.`,
      },
      {
        question: `Jak Home Nura uwzględnia takie awarie?`,
        answer: `Nasza publiczna metodologia obniża Nura Score /10 każdemu produktowi, którego powtarzające się awarie są udokumentowane w opiniach kupujących. Model, który zbyt często się psuje, nigdy nie trafia na szczyt rankingu, niezależnie od marki.`,
      },
      {
        question: `Czy mogę naprawić urządzenie sam i nie stracić gwarancji?`,
        answer: `Tak. Zwykłe czynności konserwacyjne opisane w instrukcji (czyszczenie, wymiana uszczelki, kalibracja) nie odbierają Ci prawa do reklamacji u sprzedawcy, a warunki gwarancji producenta znajdziesz w dokumencie gwarancyjnym. Problemem mogą być tylko nieodwracalne ingerencje w sprzęt: jeśli to one spowodowały usterkę, sprzedawca lub gwarant może odmówić. W przypadku kategorii „${cat}” każda czynność opisana w instrukcji producenta pozostaje objęta ochroną.`,
      },
      {
        question: `Co mówi polskie prawo o takiej awarii?`,
        answer: `Reklamacje konsumenckie regulują przepisy o niezgodności towaru z umową w ustawie o prawach konsumenta, które wdrażają dyrektywę (UE) 2019/771. Sprzedawca odpowiada za niezgodność, która ujawni się w ciągu dwóch lat od dostarczenia towaru (art. 43c ust. 1). Jeśli produkt z kategorii „${cat}” zepsuje się w tym czasie z powodu wady, możesz żądać bezpłatnej naprawy lub wymiany, a gdy to niemożliwe – obniżenia ceny, przy istotnej niezgodności także odstąpienia od umowy (art. 43e).`,
      },
    ],
  },
  sv: {
    kicker: 'Felsökning',
    subtitlePrefix: 'Home Nuras guide – kategori:',
    severityLabels: {
      minor: 'Allvarlighetsgrad: låg',
      moderate: 'Allvarlighetsgrad: måttlig',
      critical: 'Allvarlighetsgrad: kritisk',
    },
    diagnoses: {
      minor: `Det här symtomet är vanligt och oftast ofarligt. I de flesta fall löser du problemet på under tio minuter genom att rengöra rätt del eller ändra något i hur du använder apparaten.`,
      moderate: `Det här symtomet ska inte viftas bort, men i de flesta fall går det att åtgärda utan hjälp av en fackman. Följ stegen nedan i tur och ordning och sluta så fort problemet är borta.`,
      critical: `Varning: det här symtomet kan tyda på ett allvarligt fel på apparaten. Använd den inte förrän orsaken är klarlagd. Kontakta tillverkaren eller en auktoriserad serviceverkstad innan du försöker ta den i bruk igen.`,
    },
    quickFixes: {
      minor: `Dra ur kontakten, låt apparaten svalna och rengör sedan den berörda delen med ljummet vatten och lite milt diskmedel (använd aldrig skursvamp på non-stick-beläggningar). Sätt ihop allt igen, koppla in apparaten och provkör en kort stund utan innehåll.`,
      moderate: `1. Dra ur kontakten och låt apparaten svalna. 2. Titta efter synliga fel på de delar du kommer åt. 3. Följ tillverkarens anvisningar (bruksanvisningen eller den officiella webbplatsen). 4. Om åtgärden kräver att du plockar isär apparaten: avbryt och kontakta kundtjänst, med tanke på garantin enligt EU-reglerna.`,
      critical: `Dra ur kontakten direkt och fortsätt inte att använda apparaten. Dokumentera symtomet (foto, video, ljud) och kontakta sedan tillverkarens kundtjänst. I EU omfattas den här typen av fel av den lagstadgade garantin (reklamationsrätten) i minst två år.`,
    },
    fallbackCtas: {
      minor: 'Läs om vår metod',
      moderate: 'Se garanti och reservdelar',
      critical: 'Kontakta tillverkaren',
    },
    backToCategory: 'Tillbaka till kategorin',
    faq: (cat) => [
      {
        question: `Omfattas problemet av den lagstadgade garantin i EU?`,
        answer: `I EU har du minst två års lagstadgad garanti (reklamationsrätt) på varje ny produkt i kategorin ${lowerFirst(cat)} som du har köpt hos en auktoriserad återförsäljare, enligt direktiv (EU) 2019/771. Den gäller fel som fanns redan vid leveransen, oavsett när de sedan visar sig.`,
      },
      {
        question: `Ska jag kontakta tillverkarens kundtjänst eller lämna tillbaka produkten i butiken?`,
        answer: `Du väljer själv: enligt EU-rätten är det säljaren, inte tillverkaren, som ansvarar för den lagstadgade garantin. I praktiken går det ofta snabbare att vända sig till butiken, men tillverkaren kan reparera om skadan inte omfattas av garantin. Spara kvittot.`,
      },
      {
        question: `Hur tar Home Nura hänsyn till sådana fel?`,
        answer: `Enligt vår offentliga metod får en modell i kategorin ${lowerFirst(cat)} avdrag i Nura Score (betyg av 10) om återkommande fel finns dokumenterade i omdömen från europeiska användare. En modell som går sönder för ofta hamnar aldrig i topp, oavsett märke.`,
      },
      {
        question: `Kan jag laga det själv utan att förlora garantin?`,
        answer: `Ja, inom ramen för EU:s ”rätt till reparation”: vanlig skötsel (rengöring, byte av packning, kalibrering) gör aldrig att du förlorar den lagstadgade garantin. Det är bara ingrepp i apparaten som inte går att återställa som kan bli ett problem. För produkter i kategorin ${lowerFirst(cat)} omfattas allt som beskrivs i tillverkarens bruksanvisning fortfarande av skyddet.`,
      },
      {
        question: `Vad säger EU-direktivet 2019/771 egentligen om den här typen av fel?`,
        answer: `Direktivet ger två års lagstadgad garanti, och under de första tolv månaderna antas felet ha funnits redan vid leveransen – det är säljaren som måste bevisa motsatsen. Går en produkt i kategorin ${lowerFirst(cat)} sönder under den perioden har du rätt till kostnadsfri reparation eller ett nytt exemplar, utan särskilda krav på hur den har använts.`,
      },
    ],
  },
  us: {
    kicker: 'Troubleshooting',
    subtitlePrefix: 'Home Nura guide — category:',
    severityLabels: {
      minor: 'Severity: minor',
      moderate: 'Severity: moderate',
      critical: 'Severity: critical',
    },
    diagnoses: {
      minor: `This symptom is common and usually harmless. Most of the time, a targeted cleaning or a small change in how you use the device fixes it in under 10 minutes.`,
      moderate: `This symptom isn't trivial, but in most cases you can fix it without calling in a pro. Work through the steps below in order and stop as soon as the problem clears up.`,
      critical: `Warning: this symptom can point to a serious hardware defect. Stop using the device until you know the cause. We recommend contacting the manufacturer or an authorized repair service before you try to use it again.`,
    },
    quickFixes: {
      minor: `Unplug the device, let it cool down, then clean the affected part with warm water and mild dish soap (never an abrasive scrubber on nonstick coatings). Put it back together, plug it in and run a short empty cycle to make sure it works.`,
      moderate: `1. Unplug it and let it cool. 2. Inspect the parts you can reach. 3. Follow the manufacturer's procedure (owner's manual or official website). 4. If the fix means taking the unit apart, stop and contact customer support so you don't put the warranty at risk.`,
      critical: `Unplug it right away and stop using it. Document the symptom (photos, video, the sounds it makes), then contact the manufacturer's support team. Keep your proof of purchase handy: any warranty claim starts there.`,
    },
    fallbackCtas: {
      minor: 'See how we pick',
      moderate: 'Check warranty and replacement parts',
      critical: 'Contact the manufacturer',
    },
    backToCategory: 'Back to category',
    faq: (cat) => [
      {
        question: `Is this problem covered by the warranty?`,
        answer: `Check the manufacturer's warranty first: how long it lasts and what it covers vary by brand and model, so read the terms for yours (most brands post them on their website) and keep your proof of purchase.`,
      },
      {
        question: `Should I contact customer support or return it to the store?`,
        answer: `If you're still within the seller's return window, a return or exchange is usually the fastest fix. After that, go through the manufacturer's support team: it handles warranty claims and can often repair the unit even after the warranty has run out. Either way, keep your proof of purchase.`,
      },
      {
        question: `How does Home Nura factor these failures into its picks?`,
        answer: `Our public methodology lowers the Nura Score /10 of any model in our ${cat} guide whose recurring failures show up in owner reviews. A model that breaks down too often never makes it to the top, whatever the brand.`,
      },
      {
        question: `Can I fix it myself without voiding the warranty?`,
        answer: `Generally, yes, if you stick to routine maintenance: cleaning, replacing a gasket, recalibrating. Irreversible changes to the hardware are what can cause problems, so read your warranty terms before you open anything up. Anything the manufacturer's manual walks you through is the safe zone.`,
      },
      {
        question: `What should I have ready before I contact support?`,
        answer: `Your proof of purchase, the exact model name and a record of the symptom: photos, a short video, the sound it makes and any error code. Note when the problem started and what you've already tried. With all that in hand, support can pin down the problem much faster.`,
      },
    ],
  },
  ca: {
    kicker: 'Troubleshooting',
    subtitlePrefix: 'Home Nura guide — category:',
    severityLabels: {
      minor: 'Severity: minor',
      moderate: 'Severity: moderate',
      critical: 'Severity: critical',
    },
    diagnoses: {
      minor: `This symptom is common and usually harmless. In most cases, a targeted clean or a small change in how you use the device fixes it in under 10 minutes.`,
      moderate: `This symptom isn't trivial, but in most cases you can still fix it without calling in a technician. Work through the steps below in order and stop as soon as the problem clears.`,
      critical: `Warning: this symptom can point to a serious hardware defect. Stop using the device until the cause is found. We recommend contacting the manufacturer or an authorized repair centre before you try to use it again.`,
    },
    quickFixes: {
      minor: `Unplug the device and let it cool down, then clean the affected part with warm water and mild dish soap (never use an abrasive sponge on a non-stick coating). Put it back together, plug it in and run a short empty cycle to make sure it works.`,
      moderate: `1. Unplug the device and let it cool. 2. Look over the parts you can reach for visible damage. 3. Follow the manufacturer's procedure (manual or official website). 4. If the fix means taking the device apart, stop and contact customer support so you don't void the warranty.`,
      critical: `Unplug it right away and stop using the device. Document the symptom (photos, video, sounds), then contact the manufacturer's support. If the device is still under warranty, keep your proof of purchase handy: this kind of failure is exactly what the warranty is for.`,
    },
    fallbackCtas: {
      minor: 'Read our methodology',
      moderate: 'Check warranty and spare parts',
      critical: 'Contact the manufacturer',
    },
    backToCategory: 'Back to category',
    faq: (cat) => [
      {
        question: `Is this problem covered by the warranty?`,
        answer: `Usually, yes, if the failure shows up during the warranty period and isn't caused by misuse. A product in the ${cat} category bought new from an authorized retailer normally comes with a manufacturer's warranty: check its length in the manual or on the brand's website. Consumer protection rules also vary by province and territory, so keep your proof of purchase.`,
      },
      {
        question: `Should I contact after-sales support or go back to the store?`,
        answer: `If you're still within the store's return window, a return or exchange is usually the fastest fix. After that, the manufacturer's warranty takes over: its customer support can arrange a repair or a replacement. Even outside the warranty, the manufacturer can often repair the device for a fee. Either way, keep your proof of purchase.`,
      },
      {
        question: `How does Home Nura factor these failures into its reviews?`,
        answer: `Our public methodology lowers the Nura Score /10 of any model in the ${cat} category whose recurring failures are documented in owner reviews. A model that breaks down too often never tops our rankings, whatever the brand.`,
      },
      {
        question: `Can I fix this myself without voiding the warranty?`,
        answer: `Generally, yes. Routine maintenance, such as cleaning, replacing a gasket or recalibrating, is part of normal use and doesn't usually affect your warranty. Irreversible changes to the hardware are what can cause problems. For a product in the ${cat} category, stick to the steps described in the manufacturer's manual and read the warranty terms before going any further.`,
      },
      {
        question: `What if the failure happens in the first few months?`,
        answer: `When a product fails in its first few months of normal use, the cause is usually a manufacturing defect. Contact the seller or the manufacturer with your proof of purchase and a description of the symptom: for a model in the ${cat} category that is still under warranty, this is the typical case for a free repair or replacement. Warranty terms vary by brand, so read yours.`,
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
        `Pour un usage ${persona.toLowerCase()}, nos recommandations de ${cat.toLowerCase()} privilégient la fiabilité opérationnelle. Un modèle qui brille sur fiche technique mais dérive au bout de six mois n'entre jamais dans la short-list. Chaque entrée ci-dessous a été sélectionnée sur sa fiabilité dans la durée, avec un coût énergétique annuel calculé pour le marché européen.`,
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
        `For ${persona.toLowerCase()} use, our ${cat.toLowerCase()} picks privilege operational reliability. A model that shines on the spec sheet but drifts within six months never reaches our shortlist. Every entry below has been selected for its long-term reliability, with an annual energy cost calculated for the European market.`,
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
        `Für die Nutzung "${persona}" gewichten unsere ${cat}-Empfehlungen die Betriebszuverlässigkeit. Ein Modell, das auf dem Datenblatt glänzt, aber nach sechs Monaten abbaut, schafft es nicht in unsere Shortlist. Jeder Eintrag unten wurde nach ihrer Langzeit-Zuverlässigkeit ausgewählt, mit jährlichen Energiekosten für den europäischen Markt.`,
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
        `Para un uso ${persona.toLowerCase()}, nuestras recomendaciones de ${cat.toLowerCase()} priorizan la fiabilidad operativa. Un modelo que brilla en la ficha técnica pero se deteriora a los seis meses no entra en la selección. Cada entrada ha sido seleccionada por su fiabilidad en el tiempo, con un coste energético anual calculado para el mercado europeo.`,
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
        `Per un uso ${persona.toLowerCase()}, le nostre scelte di ${cat.toLowerCase()} privilegiano l'affidabilità operativa. Un modello che brilla sulla scheda tecnica ma si deteriora dopo sei mesi non entra nella short-list. Ogni voce è stata selezionata per la sua affidabilità nel tempo, con un costo energetico annuo calcolato per il mercato europeo.`,
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
        `Voor ${persona.toLowerCase()}-gebruik geven onze ${cat.toLowerCase()}-keuzes voorrang aan operationele betrouwbaarheid. Een model dat schittert op het specificatieblad maar na zes maanden verslechtert, haalt onze shortlist niet. Elke vermelding is geselecteerd op betrouwbaarheid op lange termijn, met een jaarlijkse energiekost berekend voor de Europese markt.`,
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
  pl: {
    kicker: 'Wybór dopasowany',
    title: (cat, persona) =>
      `Najlepsze ${lowerFirst(cat)} dla profilu „${persona}” w 2026 roku`,
    subtitle: (cat, silo) =>
      `Wybór Home Nura – ${cat} w dziale „${silo}”`,
    intros: {
      household: (cat, persona) =>
        `Chcesz wybrać najlepsze ${lowerFirst(cat)} dla profilu „${persona}”? Nasz wybór na rok 2026 najpierw waży pojemność, ergonomię na co dzień i trwałość na pięć lat – trzy kryteria, które naprawdę liczą się w tego typu gospodarstwie domowym – a następnie rozstrzyga według rocznego kosztu prądu i zgodności z przepisami obowiązującymi w Polsce.`,
      budget: (cat, persona) =>
        `Wybierając ${lowerFirst(cat)} z przedziału „${persona}”, najpierw odrzucamy każdy model, którego łączny koszt w ciągu pięciu lat (zakup + energia + części) wykracza poza ten przedział, a potem układamy ranking według naprawialności i dostępności serwisu w Polsce. Dobry produkt z tej kategorii musi pozostać opłacalny do samego końca.`,
      usage: (cat, persona) =>
        `Przy profilu użytkowania „${persona}” nasze rekomendacje w kategorii „${cat}” stawiają na niezawodność w działaniu. Model, który świetnie wygląda na karcie katalogowej, ale po sześciu miesiącach traci formę, nigdy nie trafia na krótką listę. Każda pozycja poniżej została wybrana pod kątem niezawodności w dłuższym czasie i realnego rocznego kosztu prądu.`,
      constraint: (cat, persona) =>
        `Wymóg „${persona}” radykalnie zawęża rynek produktów z kategorii „${cat}”. Nasza metodologia Home Nura stosuje ten filtr jako pierwszy, a następnie porządkuje modele, które go przeszły, według pięciu stałych kryteriów: etykieta energetyczna UE, roczny koszt prądu, zgodność z RODO, części zamienne na pięć lat, obsługa standardu Matter.`,
    },
    criteriaHeading: 'Kryteria ważne dla tego profilu',
    criteria: {
      household: (cat, persona) => [
        `Pojemność dopasowana do profilu „${persona}” (ani za duża, ani za mała)`,
        `Ergonomia na co dzień – ${lowerFirst(cat)} używane kilka razy w tygodniu muszą działać bez zgrzytów`,
        `Prosta konserwacja (elementy do zdjęcia, w razie potrzeby nadające się do zmywarki)`,
        `Roczny koszt prądu w złotych (punkt odniesienia: 1,16 zł/kWh, stawka przyjmowana do wyliczeń przez APPLiA Polska)`,
        `Trwałość na pięć lat i dostępność części zamiennych`,
      ],
      budget: () => [
        `Łączny koszt w ciągu pięciu lat (zakup + energia + materiały eksploatacyjne) mieści się w przedziale`,
        `Zweryfikowana naprawialność – wskaźnik ≥ 7/10, jeśli istnieje etykieta`,
        `Deklarowane zużycie energii spójne z rozmiarem produktu`,
        `Serwis w Polsce dostępny bez dodatkowych opłat`,
        `Części zamienne dostępne przez cały okres ustawowej rękojmi`,
      ],
      usage: (cat) => [
        `Niezawodność oceniana na podstawie 6–12 miesięcy opinii kupujących`,
        `Niski odsetek awarii w pierwszym roku`,
        `Aktualne wsparcie oprogramowania i firmware – bez przedwczesnego porzucania produktu`,
        `Realistyczny roczny koszt energii dla kategorii „${cat}” przy regularnym użytkowaniu`,
        `Zgodność z Matter i lokalnymi ekosystemami, jeśli ma znaczenie`,
      ],
      constraint: (cat, persona) => [
        `Ścisłe spełnienie wymogu „${persona}” – bez kompromisów`,
        `Widoczna, opatrzona datą etykieta energetyczna UE`,
        `Udokumentowana zgodność z RODO (lokalne przechowywanie danych lub europejska chmura)`,
        `Podany liczbowo roczny koszt energii dla kategorii „${cat}”`,
        `Części zamienne gwarantowane przez cały okres ustawowej rękojmi`,
      ],
    },
    faq: (cat, persona) => [
      {
        question: `Dlaczego łączymy kategorię „${cat}” z profilem „${persona}”?`,
        answer: `Ponieważ zakup produktu z kategorii „${cat}” bez uwzględnienia własnego profilu w czterech przypadkach na pięć kończy się źle dobranym modelem. Ta sama kategoria produktów nie ma takiego samego rankingu „najlepszych” dla profilu „${persona}”: nasze wagi zmieniają się tak, by odzwierciedlać to, co naprawdę liczy się w Twojej sytuacji.`,
      },
      {
        question: `Czy ranking w Polsce jest taki sam jak w innych krajach?`,
        answer: `Nie zawsze. Model polecany w innym kraju nie musi być najlepszy w Polsce, jeśli nie ma tu serwisu i części zamiennych albo trudno go kupić. Dlatego dostępność i ceny w kategorii „${cat}” sprawdzamy osobno dla każdego kraju.`,
      },
      {
        question: `Jak często ten wybór jest aktualizowany?`,
        answer: `Nasze wybory są weryfikowane co kwartał. Produkt z kategorii „${cat}”, który wypada z czołówki rankingu Home Nura 2026, jest natychmiast wycofywany, a w jego miejsce pojawia się widoczny link zastępczy. Data ostatniej aktualizacji jest podana u góry każdej strony.`,
      },
      {
        question: `Które marki naprawdę dominują w kategorii „${cat}” dla profilu „${persona}”?`,
        answer: `W tym zestawieniu o miejscu decyduje dopasowanie do profilu „${persona}”, a nie kraj pochodzenia marki. Marka, która prowadzi w ogólnym rankingu kategorii „${cat}”, nie zawsze najlepiej spełnia szczególne wymagania tego profilu – i odwrotnie. Przed zakupem sprawdź, czy marka ma serwis i części zamienne w Polsce.`,
      },
      {
        question: `Czym ten ranking różni się od ogólnego rankingu w kategorii „${cat}”?`,
        answer: `Ranking ogólny jest optymalizowany pod przeciętnego kupującego; nasz ranking dla profilu „${persona}” zmienia wagi kryteriów: pojemność, roczny koszt użytkowania i trwałość w długim okresie liczą się bardziej niż marka czy surowa moc. Model nr 1 tutaj może być na 5. miejscu w rankingu ogólnym – i to celowo.`,
      },
    ],
  },
  sv: {
    kicker: 'Urval efter profil',
    title: (cat, persona) =>
      `${cat} 2026: bäst för profilen ”${persona}”`,
    subtitle: (cat, silo) =>
      `Home Nuras urval – ${lowerFirst(cat)} inom området ${lowerFirst(silo)}`,
    intros: {
      household: (cat, persona) =>
        `Letar du efter det bästa valet i kategorin ${lowerFirst(cat)} för profilen ”${persona}”? I vårt urval för 2026 väger storlek, smidighet i vardagen och hållbarhet i fem år tyngst – de tre kriterier som verkligen spelar roll för den här typen av hushåll. Därefter avgör den årliga energikostnaden och hur väl produkten följer EU-reglerna.`,
      budget: (cat, persona) =>
        `För profilen ”${persona}” i kategorin ${lowerFirst(cat)} sorterar vi först bort varje modell vars totala kostnad över fem år (inköp + energi + delar) hamnar utanför prisklassen. Sedan rangordnar vi efter reparerbarhet och service i Europa. En bra produkt i kategorin ${lowerFirst(cat)} ska löna sig under hela sin livslängd.`,
      usage: (cat, persona) =>
        `För profilen ”${persona}” går pålitligheten före allt annat i våra rekommendationer i kategorin ${lowerFirst(cat)}. En modell som ser bra ut i produktbladet men börjar krångla efter sex månader kommer aldrig med i urvalet. Varje produkt nedan är vald för att den håller i längden, och den årliga energikostnaden är beräknad för den europeiska marknaden.`,
      constraint: (cat, persona) =>
        `Kravet ”${persona}” gallrar kraftigt i utbudet av ${lowerFirst(cat)}. Home Nuras metod använder det som första filter och rangordnar sedan de modeller som klarar det efter de fem vanliga europeiska kriterierna: EU:s energimärkning, årlig kostnad, dataskydd enligt GDPR, reservdelar i fem år och stöd för Matter.`,
    },
    criteriaHeading: 'Kriterierna som spelar roll för den här profilen',
    criteria: {
      household: (cat, persona) => [
        `Storlek som passar profilen ”${persona}” (varken för stor eller för liten)`,
        `Smidig i vardagen – ${lowerFirst(cat)} som används flera gånger i veckan ska fungera utan krångel`,
        `Enkel skötsel (avtagbara delar som tål diskmaskin, där det är relevant)`,
        `Årlig energikostnad – beräknad på EU:s genomsnittliga elpris 2026`,
        `Hållbarhet i fem år och tillgång till reservdelar`,
      ],
      budget: () => [
        `Total kostnad över fem år (inköp + energi + förbrukningsmaterial) inom prisklassen`,
        `Kontrollerad reparerbarhet – reparerbarhetsindex ≥ 7/10 där en sådan märkning finns`,
        `Angiven förbrukning som stämmer med produktens storlek`,
        `Europeisk kundtjänst som går att nå utan extra kostnad`,
        `Reservdelar som finns under hela den lagstadgade garantitiden`,
      ],
      usage: (cat) => [
        `Pålitlighet bedömd utifrån 6–12 månaders omdömen från europeiska användare`,
        `Låg andel fel under det första året`,
        `Programvara och firmware som hålls uppdaterade – ingen produkt som lämnas utan stöd i förtid`,
        `Realistisk årlig energikostnad för ${lowerFirst(cat)} som används regelbundet`,
        `Stöd för Matter och för de smarthemssystem som är vanliga lokalt, när det är relevant`,
      ],
      constraint: (cat, persona) => [
        `Kravet ”${persona}” uppfylls fullt ut – inga kompromisser`,
        `EU:s energimärkning väl synlig och daterad`,
        `Dokumenterat dataskydd enligt GDPR (lokal lagring eller europeiskt moln)`,
        `Årlig energikostnad redovisad i siffror för ${lowerFirst(cat)}`,
        `Reservdelar garanterade under hela den lagstadgade garantitiden`,
      ],
    },
    faq: (cat, persona) => [
      {
        question: `Varför ska du välja ${lowerFirst(cat)} utifrån profilen ”${persona}”?`,
        answer: `Därför att den som köper en produkt i kategorin ${lowerFirst(cat)} utan att utgå från sin egen profil får en modell i fel storlek i fyra fall av fem. Det som är ”bäst” i kategorin är inte detsamma för profilen ”${persona}”: vi viktar om kriterierna så att de speglar det som verkligen spelar roll i din situation.`,
      },
      {
        question: `Skiljer sig urvalet mellan olika europeiska marknader?`,
        answer: `Ja, ibland. En modell som rekommenderas i Frankrike är inte nödvändigtvis bäst i Tyskland, till exempel om energimärkningen där skiljer sig eller om tillverkaren saknar service i landet. I varje topplista över ${lowerFirst(cat)} kontrollerar Home Nura tillgång och pris, marknad för marknad.`,
      },
      {
        question: `Hur ofta uppdateras urvalet?`,
        answer: `Vi går igenom urvalet varje kvartal. En produkt som faller ur Home Nuras topplista över ${lowerFirst(cat)} för 2026 tas bort direkt och ersätts med en tydlig länk till ett alternativ. Datumet för den senaste uppdateringen står högst upp på varje sida.`,
      },
      {
        question: `Vilka märken dominerar egentligen i kategorin ${lowerFirst(cat)} för profilen ”${persona}”?`,
        answer: `I just den här kombinationen hamnar europeiska tillverkare (från Tyskland, Frankrike, Italien och Nederländerna) ofta i topp – inte för att de är europeiska i sig, utan för att de lättare klarar kraven i profilen ”${persona}”. De asiatiska märken som dominerar den allmänna marknaden för ${lowerFirst(cat)} är ofta sämre anpassade för den här typen av användning.`,
      },
      {
        question: `Hur skiljer sig den här topplistan från en allmän topplista över ${lowerFirst(cat)}?`,
        answer: `En allmän topplista är gjord för den genomsnittliga köparen. Vår lista för profilen ”${persona}” viktar om kriterierna: storlek, årlig driftskostnad och hållbarhet på lång sikt väger tyngre än märke eller ren effekt. Modellen som är nr 1 här kan ligga på plats 5 i en allmän topplista – och det är avsiktligt.`,
      },
    ],
  },
  us: {
    kicker: 'Picks by profile',
    title: (cat, persona) =>
      `Best ${cat} of 2026: ${persona}`,
    subtitle: (cat, silo) =>
      `Home Nura picks — ${cat} in our ${silo} section`,
    intros: {
      household: (cat, persona) =>
        `Household: ${persona}. For this kind of home, our 2026 selection in the ${cat} category weighs capacity, everyday ease of use and five-year durability first (the three criteria that really matter here), then breaks ties on the yearly cost to run and a UL or ETL safety listing.`,
      budget: (cat, persona) =>
        `Price tier: ${persona}. Before we rank anything in the ${cat} category, we cut every model whose five-year total cost (purchase price, energy and parts) falls outside that tier, then rank the rest on repairability and customer support. A good pick has to stay worth the money for its entire life.`,
      usage: (cat, persona) =>
        `Use case: ${persona}. Here, day-to-day reliability beats the spec sheet: a model that shines on paper but slips within six months never makes our shortlist. Every entry below was chosen for its long-term reliability and comes with an estimated annual energy cost.`,
      constraint: (cat, persona) =>
        `The “${persona}” filter rules out much of the ${cat} category. Our Home Nura methodology applies it first, then ranks the models that pass on our five usual criteria: the yearly cost to run, ENERGY STAR certification where it applies, a UL or ETL safety listing, replacement parts and Matter support.`,
    },
    criteriaHeading: 'What matters for this profile',
    criteria: {
      household: (cat, persona) => [
        `${persona}: capacity that fits, neither oversized nor undersized`,
        `Everyday ease of use: a model you reach for several times a week should never be a hassle`,
        `Easy upkeep (removable parts, dishwasher-safe where it makes sense)`,
        `Annual energy cost, estimated at an average electricity rate (check the rate on your utility bill)`,
        `Five-year durability and replacement parts you can actually get`,
      ],
      budget: () => [
        `Five-year total cost (purchase + energy + consumables) within the tier`,
        `Repairability: replacement parts and repair guides available from the manufacturer`,
        `Rated energy use in line with the product's size`,
        `Customer support you can reach at no extra charge`,
        `Replacement parts available for the full warranty period`,
      ],
      usage: (cat) => [
        `Reliability judged on 6 to 12 months of owner reviews`,
        `Low failure rate in the first year`,
        `Software and firmware updates that keep coming, with no early end of support`,
        `Realistic annual energy cost for regular use across the ${cat} category`,
        `Matter support and compatibility with your existing smart home platform, where relevant`,
      ],
      constraint: (cat, persona) => [
        `Fully meets the “${persona}” filter, no compromises`,
        `ENERGY STAR certification checked, where the category has one`,
        `A clear privacy policy, with local storage or core features that work without a cloud account`,
        `A stated annual energy cost for every model on the list`,
        `Replacement parts guaranteed for the full warranty period`,
      ],
    },
    faq: (cat, persona) => [
      {
        question: `Why a separate ranking for “${persona}”?`,
        answer: `Because buying without thinking about your profile leaves you with the wrong-size model four times out of five. The “best” model in a category isn't the same for “${persona}” as for the average buyer: our weights shift to reflect what actually matters in your situation.`,
      },
      {
        question: `Do your picks change from one market to another?`,
        answer: `Yes. Our US picks only include models sold in the US in their 120 V version, checked against US listings. A model we rank in another edition can be left out here if it isn't sold in the US, or replaced by the closest model that is.`,
      },
      {
        question: `How often do you update these picks?`,
        answer: `We review them every quarter. When a model drops out of the Home Nura 2026 rankings, it comes off the page right away, with a link to its replacement. The “last updated” date sits at the top of every page.`,
      },
      {
        question: `Which brands lead the ${cat} category for “${persona}”?`,
        answer: `It varies by category: the brands that top US sales overall aren't always the best match for the “${persona}” profile, because our weights favor capacity, running cost and durability over brand recognition. Judge each pick on the specs that matter to you rather than on its place in a best-seller list.`,
      },
      {
        question: `How is this ranking different from a general top 10?`,
        answer: `A general top 10 is built for the average buyer. Our “${persona}” ranking reweights the criteria: capacity, annual running cost and long-term durability count for more than brand or raw power. The No. 1 model here might rank No. 5 on a general list, and that's by design.`,
      },
    ],
  },
  ca: {
    kicker: 'Picks by profile',
    title: (cat, persona) =>
      `Best ${cat} 2026 for Your Profile: ${persona}`,
    subtitle: (cat, silo) =>
      `Home Nura picks — ${cat} in our ${silo} section`,
    intros: {
      household: (cat, persona) =>
        `Looking for the best model in the ${cat} category for the “${persona}” profile? Our 2026 picks weight capacity, everyday ergonomics and five-year durability first — the three criteria that really matter for this kind of household — then break ties on annual energy use and on whether each model is a North American version with a certification mark recognized in Canada.`,
      budget: (cat, persona) =>
        `For the “${persona}” profile in the ${cat} category, we first rule out any model whose five-year total cost (purchase + energy + parts) falls outside the price range, then rank the rest on repairability and after-sales service. A good buy has to stay worth it over its whole life.`,
      usage: (cat, persona) =>
        `For the “${persona}” profile, our picks in the ${cat} category put everyday reliability first. A model that looks great on paper but starts slipping within six months never makes our shortlist. Every pick below was chosen for long-term reliability, with an estimate of its annual energy cost (your actual cost depends on your province and utility).`,
      constraint: (cat, persona) =>
        `The “${persona}” profile sharply narrows the field in the ${cat} category. Our Home Nura methodology applies this filter first, then ranks the models that pass on our five usual criteria: annual energy use, ENERGY STAR certification where it applies, a certification mark recognized in Canada, data privacy on smart models and Matter support.`,
    },
    criteriaHeading: 'Criteria that matter for this profile',
    criteria: {
      household: (cat, persona) => [
        `Capacity sized for the “${persona}” profile (neither too big nor too small)`,
        `Everyday ergonomics: in the ${cat} category, a product you use several times a week has to stay hassle-free`,
        `Simple maintenance (removable parts, dishwasher-safe where relevant)`,
        `Annual energy cost, estimated from declared energy use (your rate depends on your province and utility)`,
        `Five-year durability and spare-part availability`,
      ],
      budget: () => [
        `Five-year total cost (purchase + energy + consumables) within the price range`,
        `Verified repairability: a score of 7/10 or higher where a repairability label exists`,
        `Declared energy use consistent with the product's size`,
        `After-sales service you can reach without extra charges`,
        `Spare parts available for the full warranty period`,
      ],
      usage: (cat) => [
        `Reliability judged on 6 to 12 months of owner reviews`,
        `Low failure rate in the first year`,
        `Software and firmware kept up to date, with no early end of support`,
        `Realistic annual energy cost for regular use in the ${cat} category`,
        `Matter support and compatibility with the ecosystems you already use, where relevant`,
      ],
      constraint: (cat, persona) => [
        `Strict fit with the “${persona}” profile, no compromises`,
        `ENERGY STAR certification checked where the category has one`,
        `Clear data and privacy settings (local control or a documented cloud service)`,
        `Annual energy cost stated for each model in the ${cat} category`,
        `Spare parts guaranteed for the full warranty period`,
      ],
    },
    faq: (cat, persona) => [
      {
        question: `Why does the “${persona}” profile get its own ranking in the ${cat} category?`,
        answer: `Because shopping in the ${cat} category without thinking about your profile often ends with a model that's the wrong size. “Best” doesn't mean the same thing for the “${persona}” profile as it does for everyone else, so our weights shift to reflect what really matters in your situation.`,
      },
      {
        question: `Do your picks change from one market to another?`,
        answer: `Yes. Many models are sold in Canada under a different name or model code, and some European models aren't sold here at all, so every Home Nura ranking checks availability market by market in the ${cat} category. Before you buy, check that the listing is for the North American model sold in Canada.`,
      },
      {
        question: `How often is this selection updated?`,
        answer: `We review our picks every quarter. A model in the ${cat} category that drops out of the Home Nura 2026 top list is removed right away, and a replacement link takes its place. The “last updated” date appears at the top of every page.`,
      },
      {
        question: `Which brands lead the ${cat} category for the “${persona}” profile?`,
        answer: `No single country's brands win every time. For the “${persona}” profile, the models that come out on top are the ones that fit its needs best and are sold in Canada in a North American version with warranty service here, whether the brand is Canadian, American, European or Asian. Brand reputation alone never earns a place in this ranking.`,
      },
      {
        question: `How is this ranking different from a generic top 10 in the ${cat} category?`,
        answer: `A generic top 10 is built for the average buyer. Our ranking for the “${persona}” profile reweights the criteria: capacity, annual running cost and long-term durability count for more than brand or raw power. The No. 1 model here may sit at No. 5 in a generic ranking, and that's by design.`,
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
