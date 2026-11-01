/**
 * The indexed pages of each locale, as app/sitemap.ts lists them (market
 * pages apart), with the label a market page's `related` link shows.
 * Utility pages (home, quiz, comparator, blog index, about, methodology,
 * author) exist but carry no label: `related` links content of the same
 * family (study § 2.6.3), never them. tests/lib/market-pages/seo.test.ts
 * keeps the paths equal to the sitemap.
 */

import { getAllArticles } from '@/lib/blog'
import { BLACK_FRIDAY_CATEGORIES, BLACK_FRIDAY_PATHS, blackFridayPath } from '@/lib/black-friday'
import { PROBLEMS, getCategory, getIndexableCategories, getIndexableSilos, getMetaSilo } from '@/lib/catalog'
import { FLOOR_CARE_GUIDES, FLOOR_CARE_LABELS, FLOOR_CARE_MARKETS, floorCarePath } from '@/lib/floor-care/config'
import type { Lang } from '@/lib/i18n'
import { SMART_KITCHEN_CATEGORIES } from '@/lib/smart-kitchen-products'

/** Pages every locale serves that a related link may not name. */
const UTILITY_PATHS = ['', '/comparateur', '/cuisine-connectee/comparateur', '/cuisine-connectee/quiz', '/quiz', '/blog', '/a-propos', '/methodologie', '/auteur'] as const

/** Labels of the shared guides that have no catalog title. */
const GUIDE_LABELS: Readonly<Record<string, Readonly<Record<Lang, string>>>> = {
  '/guides/airfryer-vs-four': {
    fr: 'Airfryer ou four', en: 'Air fryer vs oven', de: 'Heißluftfritteuse oder Backofen', es: 'Freidora de aire u horno',
    it: 'Friggitrice ad aria o forno', nl: 'Airfryer of oven', pl: 'Frytkownica beztłuszczowa czy piekarnik', sv: 'Airfryer eller ugn',
    us: 'Air fryer vs. oven', ca: 'Air fryer vs oven',
  },
  '/guides/cuisine-connectee': {
    fr: 'Guide de la cuisine connectée', en: 'Smart kitchen guide', de: 'Ratgeber smarte Küche', es: 'Guía de la cocina conectada',
    it: 'Guida alla cucina connessa', nl: 'Gids slimme keuken', pl: 'Poradnik inteligentnej kuchni', sv: 'Guide till det smarta köket',
    us: 'Smart kitchen guide', ca: 'Smart kitchen guide',
  },
  '/guides/probleme': {
    fr: 'Pannes et solutions', en: 'Troubleshooting', de: 'Störungen und Lösungen', es: 'Averías y soluciones',
    it: 'Guasti e soluzioni', nl: 'Storingen en oplossingen', pl: 'Usterki i rozwiązania', sv: 'Fel och lösningar',
    us: 'Troubleshooting', ca: 'Troubleshooting',
  },
}

/** Path inside the locale prefix → label (null: a utility page). */
function sharedPages(lang: Lang): [string, string | null][] {
  const kitchen = getMetaSilo('cuisine-connectee')
  return [
    ...UTILITY_PATHS.map((path): [string, null] => [path, null]),
    ['/guides/airfryers', getCategory('airfryers')?.title[lang] ?? null],
    ...Object.entries(GUIDE_LABELS).map(([path, label]): [string, string] => [path, label[lang]]),
    ['/cuisine-connectee', kitchen ? kitchen.title[lang] : null],
    ...SMART_KITCHEN_CATEGORIES.map((slug): [string, string | null] => [`/cuisine-connectee/${slug}`, getCategory(slug)?.title[lang] ?? null]),
    ...getIndexableSilos()
      .filter((silo) => silo.slug !== 'cuisine-connectee')
      .map((silo): [string, string] => [`/${silo.slug}`, silo.title[lang]]),
    ...getIndexableCategories()
      .filter((category) => category.metaSilo !== 'cuisine-connectee')
      .map((category): [string, string] => [`/${category.metaSilo}/${category.slug}`, category.title[lang]]),
    ...PROBLEMS.map((problem): [string, string] => [`/guides/probleme/${problem.slug}`, problem.query[lang]]),
    ...BLACK_FRIDAY_PATHS.map((path): [string, string] => [
      path,
      BLACK_FRIDAY_CATEGORIES.find((category) => blackFridayPath(category.slug) === path)?.copy[lang].name ?? 'Black Friday',
    ]),
  ]
}

const cache = new Map<Lang, ReadonlyMap<string, string | null>>()

/**
 * Indexed pages of `lang` (market pages apart), keyed by their path with
 * the locale prefix ('/it', '/it/guides/airfryers'), each with its label
 * (null for a utility page).
 */
export function sitePagesFor(lang: Lang): ReadonlyMap<string, string | null> {
  const cached = cache.get(lang)
  if (cached) return cached
  const articles = getAllArticles()
    .filter((article) => article.content[lang])
    .map((article): [string, string] => [`/blog/${article.slug}`, article.title[lang] ?? article.slug])
  const floorCare = (FLOOR_CARE_MARKETS as readonly Lang[]).includes(lang)
    ? FLOOR_CARE_GUIDES.map((guide): [string, string] => [floorCarePath(guide), FLOOR_CARE_LABELS[guide]])
    : []
  const pages = new Map([...sharedPages(lang), ...articles, ...floorCare].map(([path, label]) => [`/${lang}${path}`, label]))
  cache.set(lang, pages)
  return pages
}

/** Indexed paths of `lang` (market pages apart), with their locale prefix. */
export function sitePathsFor(lang: Lang): ReadonlySet<string> {
  return new Set(sitePagesFor(lang).keys())
}
