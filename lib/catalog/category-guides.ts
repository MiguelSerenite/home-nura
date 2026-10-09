import { getArticleBySlug } from '@/lib/blog'
import { getArticleRecommendations } from '@/lib/blog/article-products'
import { getQuickAnswer } from '@/lib/blog/quick-answers'
import type { Lang } from '@/lib/i18n'
import type { Category } from './types'

/**
 * Blog articles behind each generic category hub (kitchen categories have
 * their own route with catalog products). `primary` is the article whose
 * verdict IS about this category, so its picks can be shown as ours;
 * `related` articles are only linked, never borrowed for picks (an alarm
 * kit verdict is not a motion sensor verdict). Checked pick by pick: an
 * article whose verdict mixes product types (fan + AC + purifier, hub +
 * bulbs, thermometers for grills) stays `related`.
 */
export const CATEGORY_GUIDES: Record<string, { primary?: string; related: readonly string[] }> = {
  // Énergie & domotique
  thermostats: { primary: 'thermostat-connecte-pompe-chaleur', related: ['guide-domotique-economie-energie-2026'] },
  'compteurs-energie': { primary: 'compteur-energie-connecte-comparatif', related: ['comparatif-smart-plugs-mesure-energie', 'guide-domotique-economie-energie-2026'] },
  'solaire-balcon': { primary: 'balkonkraftwerk-panneau-solaire-balcon', related: [] },
  'batteries-domestiques': { primary: 'batterie-domestique-stockage-solaire', related: ['balkonkraftwerk-panneau-solaire-balcon', 'guide-domotique-economie-energie-2026'] },
  'eclairage-connecte': { primary: 'eclairage-connecte-comparatif', related: ['maison-connectee-matter-thread-2026'] },
  interrupteurs: { primary: 'interrupteur-connecte-comparatif', related: ['eclairage-connecte-comparatif', 'maison-connectee-matter-thread-2026'] },
  'volets-stores': { primary: 'volets-roulants-connectes-guide', related: [] },
  'capteurs-qualite-air': { primary: 'qualite-air-interieur-capteurs', related: ['guide-purificateur-air-2026'] },
  'detecteurs-fuite-eau': { primary: 'detection-fuite-eau-connectee', related: [] },
  'hubs-domotique': { primary: 'box-domotique-hub-comparatif', related: ['maison-connectee-matter-thread-2026', 'tendances-maison-connectee-2026'] },
  // Sécurité
  'sonnettes-video': { primary: 'sonnette-video-sans-abonnement', related: ['interphone-video-connecte'] },
  'cameras-interieur': { primary: 'camera-interieure-sans-abonnement', related: ['guide-securite-maison-connectee-2026'] },
  'cameras-exterieur': { primary: 'comparatif-camera-surveillance-exterieure', related: ['guide-securite-maison-connectee-2026'] },
  'serrures-connectees': { primary: 'serrure-connectee-guide', related: ['guide-securite-maison-connectee-2026'] },
  alarmes: { primary: 'alarme-maison-sans-abonnement', related: ['guide-securite-maison-connectee-2026'] },
  'detecteurs-fumee-co': { primary: 'detecteur-fumee-connecte-comparatif', related: ['guide-securite-maison-connectee-2026'] },
  'detecteurs-mouvement': { primary: 'detecteur-mouvement-connecte-comparatif', related: ['alarme-maison-sans-abonnement', 'guide-securite-maison-connectee-2026'] },
  interphones: { primary: 'interphone-video-connecte', related: ['sonnette-video-sans-abonnement'] },
  'alarmes-exterieures': { primary: 'alarme-exterieure-detecteur-jardin', related: ['comparatif-camera-surveillance-exterieure', 'alarme-maison-sans-abonnement'] },
  // Confort & air
  'purificateurs-air': { primary: 'comparatif-purificateur-air-allergie', related: ['guide-purificateur-air-2026', 'qualite-air-interieur-capteurs'] },
  humidificateurs: { primary: 'humidificateur-connecte-comparatif', related: ['qualite-air-interieur-capteurs', 'deshumidificateur-connecte-guide'] },
  deshumidificateurs: { primary: 'deshumidificateur-connecte-guide', related: ['qualite-air-interieur-capteurs'] },
  'climatiseurs-mobiles': { primary: 'climatiseur-mobile-connecte-comparatif', related: ['climatiseur-mobile-vs-ventilateur', 'mejor-aire-acondicionado-bajo-consumo', 'aire-acondicionado-portatil-sin-tubo', 'aire-acondicionado-portatil-no-enfria'] },
  ventilateurs: { primary: 'ventilateur-connecte-comparatif', related: ['ventilador-silencioso-dormitorio', 'climatiseur-mobile-vs-ventilateur'] },
  'chauffages-appoint': { primary: 'radiateur-electrique-connecte-guide', related: [] },
  'stations-meteo': { primary: 'station-meteo-connectee-comparatif', related: [] },
  'rideaux-automatises': { primary: 'rideau-motorise-connecte-guide', related: ['volets-roulants-connectes-guide'] },
  // Entretien
  'aspirateurs-robots': { primary: 'guide-robot-aspirateur-2026', related: ['robot-aspirateur-poils-animaux', 'saugroboter-tierhaare-test', 'robot-aspirador-piso-pequeno', 'robot-aspirateur-vs-balai'] },
  'aspirateurs-laveurs': { primary: 'meilleur-aspirateur-laveur-2026', related: ['comparatif-robot-aspirateur-laveur'] },
  'aspirateurs-balais': { primary: 'aspirateur-sans-fil-comparatif-2026', related: ['robot-aspirateur-vs-balai'] },
  'nettoyeurs-vapeur': { primary: 'nettoyeur-vapeur-connecte', related: [] },
  // Extérieur
  'tondeuses-robots': { primary: 'tondeuse-robot-sans-fil-perimetrique', related: ['guide-jardin-connecte-2026'] },
  'arrosage-connecte': { primary: 'arrosage-connecte-intelligent', related: ['capteur-sol-humidite-jardin', 'guide-jardin-connecte-2026'] },
  'eclairage-exterieur': { primary: 'eclairage-exterieur-solaire-connecte', related: ['guide-jardin-connecte-2026'] },
  'robots-piscine': { primary: 'robot-piscine-comparatif', related: ['piscine-connectee-guide'] },
  'barbecues-connectes': { primary: 'grill-pellet-plancha-connecte-comparatif', related: ['barbecue-connecte-thermometre-guide'] },
  'fers-centrales-vapeur': { primary: 'centrale-vapeur-comparatif', related: [] },
  'reveils-lumiere': { primary: 'reveil-lumiere-simulateur-aube-comparatif', related: [] },
  'laveurs-vitres': { primary: 'robot-lave-vitre-comparatif', related: [] },
  'bornes-recharge-ve': { primary: 'borne-recharge-voiture-electrique-maison', related: [] },
  'trackers-objets': { primary: 'traceur-objets-connecte-comparatif', related: [] },
  'lave-vaisselle-connectes': { primary: 'lave-vaisselle-connecte-guide', related: [] },
  'stations-recharge-outdoor': { primary: 'station-electrique-portable-comparatif', related: [] },
  'portails-garages': { primary: 'motorisation-portail-garage-connecte', related: [] },
  diffuseurs: { primary: 'diffuseur-huiles-essentielles-connecte', related: [] },
  'coffres-forts-connectes': { primary: 'coffre-fort-connecte-guide', related: [] },
  'lave-linge-connectes': { primary: 'lave-linge-connecte-guide', related: [] },
}

const MAX_PICKS = 3

export interface CategoryPick {
  model: string
  url: string
  role?: string
  why?: string
}

export interface CategoryGuideLink {
  slug: string
  href: string
  title: string
  excerpt: string
}

/** Primary article's verdict (else the models it cites), plus every mapped guide. */
export function getCategoryGuides(
  categorySlug: string,
  lang: Lang,
): { picks: CategoryPick[]; articles: CategoryGuideLink[] } {
  const entry = CATEGORY_GUIDES[categorySlug]
  if (!entry) return { picks: [], articles: [] }

  const slugs = [...new Set([entry.primary, ...entry.related].filter((s): s is string => !!s))]
  const articles = slugs.flatMap((slug) => {
    const article = getArticleBySlug(slug)
    return article
      ? [{ slug, href: `/${lang}/blog/${slug}`, title: article.title[lang], excerpt: article.excerpt[lang] }]
      : []
  })

  return { picks: primaryPicks(entry.primary, lang), articles }
}

function primaryPicks(slug: string | undefined, lang: Lang): CategoryPick[] {
  const article = slug ? getArticleBySlug(slug) : undefined
  if (!article) return []
  const verdict = getQuickAnswer(article, lang)
  if (verdict) return verdict.picks.slice(0, MAX_PICKS)
  const rec = getArticleRecommendations(article, lang)
  if (rec?.kind === 'models') return rec.models.slice(0, MAX_PICKS).map((m) => ({ model: m.name, url: m.url }))
  if (rec?.kind === 'catalog') return rec.products.slice(0, MAX_PICKS).map((p) => ({ model: p.title, url: p.url }))
  return []
}

// ---------------------------------------------------------------------------
// Title & description: commercial "best X 2026" intent, picks named in the
// snippet. Gender-neutral phrasings so one template fits every category.
// ---------------------------------------------------------------------------

const TITLE_MAX = 60
const DESCRIPTION_MAX = 160

type Templates = {
  titles: (t: string) => string[]
  withPicks: (names: string) => string[]
  generic: (t: string) => string
}

const TEMPLATES: Record<Lang, Templates> = {
  fr: {
    titles: (t) => [`${t} : comparatif 2026 et nos choix`, `${t} : comparatif 2026`, `${t} 2026`],
    withPicks: (n) => [
      `Notre sélection 2026 : ${n}. Comparés sur les fonctions, la simplicité et le rapport qualité-prix, avec liens directs vers Amazon.`,
      `Notre sélection 2026 : ${n}.`,
    ],
    generic: (t) => `${t} 2026 : comment choisir, les critères d'achat essentiels, les erreurs à éviter et les réponses aux questions fréquentes.`,
  },
  en: {
    titles: (t) => [`Best ${t} 2026: Comparison & Our Picks`, `Best ${t} 2026: Comparison`, `Best ${t} 2026`],
    withPicks: (n) => [
      `Our 2026 picks: ${n}. Compared on features, ease of use and value for money, with direct links to Amazon.`,
      `Our 2026 picks: ${n}.`,
    ],
    generic: (t) => `${t} 2026: how to choose, the buying criteria that matter, mistakes to avoid and answers to common questions.`,
  },
  de: {
    titles: (t) => [`${t} 2026: Vergleich & Empfehlungen`, `${t} 2026: Vergleich`, `${t} 2026`],
    withPicks: (n) => [
      `Unsere Empfehlungen 2026: ${n}. Verglichen nach Funktionen, Bedienung und Preis-Leistung, mit direkten Amazon-Links.`,
      `Unsere Empfehlungen 2026: ${n}.`,
    ],
    generic: (t) => `${t} 2026 im Überblick: worauf es beim Kauf ankommt, typische Fehler und Antworten auf häufige Fragen.`,
  },
  es: {
    titles: (t) => [`Mejores ${t} 2026: comparativa`, `Mejores ${t} 2026`, `${t} 2026`],
    withPicks: (n) => [
      `Nuestra selección 2026: ${n}. Comparados por funciones, facilidad de uso y relación calidad-precio, con enlaces a Amazon.`,
      `Nuestra selección 2026: ${n}.`,
    ],
    generic: (t) => `${t} 2026: cómo elegir, los criterios de compra clave, errores a evitar y respuestas a las preguntas frecuentes.`,
  },
  it: {
    titles: (t) => [`Migliori ${t} 2026: confronto`, `Migliori ${t} 2026`, `${t} 2026`],
    withPicks: (n) => [
      `La nostra selezione 2026: ${n}. Confrontati per funzioni, facilità d'uso e rapporto qualità-prezzo, con link ad Amazon.`,
      `La nostra selezione 2026: ${n}.`,
    ],
    generic: (t) => `${t} 2026: come scegliere, i criteri d'acquisto essenziali, gli errori da evitare e le risposte alle domande frequenti.`,
  },
  nl: {
    titles: (t) => [`Beste ${t} 2026: vergelijking & keuzes`, `Beste ${t} 2026: vergelijking`, `Beste ${t} 2026`],
    withPicks: (n) => [
      `Onze selectie voor 2026: ${n}. Vergeleken op functies, gebruiksgemak en prijs-kwaliteit, met directe Amazon-links.`,
      `Onze selectie voor 2026: ${n}.`,
    ],
    generic: (t) => `${t} 2026: zo kies je goed, de belangrijkste koopcriteria, fouten om te vermijden en antwoorden op veelgestelde vragen.`,
  },
}

/** SEO title (without brand suffix) and description for a category hub. */
export function buildCategorySeo(
  category: Category,
  lang: Lang,
  pickNames: readonly string[],
): { title: string; description: string } {
  const tpl = TEMPLATES[lang]
  const title = category.title[lang]
  // The first title variant promises "our picks": only use it when the
  // page actually shows some.
  const titles = tpl.titles(title).slice(pickNames.length >= 2 ? 0 : 1)
  const fittedTitle = titles.find((t) => t.length <= TITLE_MAX) ?? titles[titles.length - 1]

  // Richest snippet first: 3 names with the full sentence, then fewer
  // names, then the short sentence, then the generic copy.
  const candidates = [MAX_PICKS, 2].flatMap((count) => {
    const names = pickNames.slice(0, count)
    return names.length >= 2 ? tpl.withPicks(names.join(', ')) : []
  })
  const description =
    candidates.find((d) => d.length <= DESCRIPTION_MAX) ?? tpl.generic(title)

  return { title: fittedTitle, description }
}
