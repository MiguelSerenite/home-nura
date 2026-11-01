import type { Lang } from '@/lib/i18n'

/**
 * The Black Friday categories each market puts forward, in hub order
 * (docs/croissance/ETUDE-MARCHES-2026-11.md, C1/T11): what that country
 * searches in November, from its own Trends and Amazon data. The hub, the
 * home banner, the silo link blocks and the "other categories" links follow
 * this list. A page left out of a market's list stays online in every
 * locale that has its copy, and catalog hubs still link to it.
 *
 * Slugs are Black Friday page slugs (./categories.ts), not catalog slugs:
 * the coffee page is cafetieres-a-grain, the heater page radiateurs-connectes,
 * and aspirateurs-robots also covers the robot mops.
 */
export const BLACK_FRIDAY_MARKET_LISTS: Partial<Record<Lang, readonly string[]>> = {
  fr: [
    'aspirateurs-laveurs',
    'aspirateurs-robots',
    'airfryers',
    'radiateurs-connectes',
    'deshumidificateurs',
    'multicuiseurs',
    'cafetieres-a-grain',
    'aspirateurs-balais',
  ],
  en: [
    'deshumidificateurs',
    'radiateurs-connectes',
    'aspirateurs-robots',
    'aspirateurs-balais',
    'airfryers',
    'thermostats',
    'cafetieres-a-grain',
    'sonnettes-video',
  ],
  de: [
    'airfryers',
    'aspirateurs-robots',
    'cafetieres-a-grain',
    'radiateurs-connectes',
    'deshumidificateurs',
    'aspirateurs-balais',
    'serrures-connectees',
    'stations-recharge-outdoor',
  ],
  es: [
    'radiateurs-connectes',
    'aspirateurs-robots',
    'airfryers',
    'cafetieres-a-grain',
    'aspirateurs-balais',
    'deshumidificateurs',
    'humidificateurs',
    'cameras-exterieur',
  ],
  it: [
    'airfryers',
    'radiateurs-connectes',
    'aspirateurs-robots',
    'cafetieres-a-grain',
    'aspirateurs-balais',
    'interphones',
    'sonnettes-video',
    'thermostats',
  ],
  nl: [
    'airfryers',
    'aspirateurs-robots',
    'cafetieres-a-grain',
    'batteries-domestiques',
    'radiateurs-connectes',
    'aspirateurs-balais',
    'thermostats',
    'deshumidificateurs',
  ],
  pl: [
    'airfryers',
    'cafetieres-a-grain',
    'aspirateurs-robots',
    'aspirateurs-balais',
    'purificateurs-air',
    'humidificateurs',
    'radiateurs-connectes',
    'detecteurs-fumee-co',
  ],
  sv: [
    'aspirateurs-robots',
    'airfryers',
    'aspirateurs-balais',
    'cafetieres-a-grain',
    'bornes-recharge-ve',
    'radiateurs-connectes',
    'humidificateurs',
    'deshumidificateurs',
  ],
  us: [
    'aspirateurs-robots',
    'cafetieres-a-grain',
    'airfryers',
    'purificateurs-air',
    'sonnettes-video',
    'serrures-connectees',
    'radiateurs-connectes',
    'humidificateurs',
  ],
  ca: [
    'airfryers',
    'humidificateurs',
    'cafetieres-a-grain',
    'radiateurs-connectes',
    'thermostats',
    'aspirateurs-balais',
    'aspirateurs-robots',
    'detecteurs-fumee-co',
  ],
}

/** A locale without its own list shows the six original pages, in their original order. */
export const DEFAULT_BLACK_FRIDAY_LIST: readonly string[] = [
  'airfryers',
  'aspirateurs-robots',
  'cafetieres-a-grain',
  'aspirateurs-balais',
  'thermostats',
  'radiateurs-connectes',
]
