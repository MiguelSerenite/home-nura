import type { BlackFridayCategory } from './types'
import { AIRFRYERS_COPY } from './copy/airfryers'
import { ROBOT_VACUUMS_COPY } from './copy/aspirateurs-robots'
import { BEAN_TO_CUP_COPY } from './copy/cafetieres-a-grain'
import { STICK_VACUUMS_COPY } from './copy/aspirateurs-balais'
import { THERMOSTATS_COPY } from './copy/thermostats'
import { HEATERS_COPY } from './copy/radiateurs-connectes'

/**
 * The Black Friday category pages, in hub order. Only categories where the
 * site already publishes a verdict with named models: every pick points at
 * a pick of lib/blog/quick-answers.ts (same model, same reason, same ASIN
 * or search query). Nothing here is a new recommendation.
 */
export const BLACK_FRIDAY_CATEGORIES: readonly BlackFridayCategory[] = [
  {
    slug: 'airfryers',
    hubs: [{ silo: 'cuisine-connectee', category: 'airfryers' }],
    guides: [
      'ninja-vs-philips-quel-choisir',
      'meilleur-airfryer-xxl-grande-famille',
      'meilleur-airfryer-petit-budget',
      'comparatif-airfryer-connecte-2026',
    ],
    picks: [
      { article: 'ninja-vs-philips-quel-choisir', model: 'Ninja Foodi FlexDrawer 10.4L Double Zone' },
      { article: 'ninja-vs-philips-quel-choisir', model: 'Philips Airfryer Série 3000 XL - 6.2L' },
      { article: 'meilleur-airfryer-xxl-grande-famille', model: 'Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L' },
      { article: 'ninja-vs-philips-quel-choisir', model: 'Philips Airfryer Combi XXL Connecté - 8.3L' },
      { article: 'meilleur-airfryer-petit-budget', model: 'Xiaomi Smart Air Fryer Pro 4L' },
    ],
    copy: AIRFRYERS_COPY,
  },
  {
    slug: 'aspirateurs-robots',
    hubs: [
      { silo: 'entretien-maison', category: 'aspirateurs-robots' },
      { silo: 'entretien-maison', category: 'aspirateurs-laveurs' },
    ],
    guides: [
      'guide-robot-aspirateur-2026',
      'comparatif-robot-aspirateur-laveur',
      'robot-aspirateur-poils-animaux',
      'robot-aspirador-piso-pequeno',
    ],
    picks: [
      { article: 'guide-robot-aspirateur-2026', model: 'Roborock Qrevo Curv' },
      { article: 'guide-robot-aspirateur-2026', model: 'Roborock Q7 M5+' },
      { article: 'guide-robot-aspirateur-2026', model: 'Dreame X50 Ultra Complete' },
      { article: 'comparatif-robot-aspirateur-laveur', model: 'Roborock Qrevo Curv 2 Flow' },
    ],
    copy: ROBOT_VACUUMS_COPY,
  },
  {
    slug: 'cafetieres-a-grain',
    hubs: [{ silo: 'cuisine-connectee', category: 'cafetieres' }],
    guides: ['cafetiere-connectee-guide'],
    picks: [
      { article: 'cafetiere-connectee-guide', model: "De'Longhi Magnifica Evo ECAM290.51.B" },
      { article: 'cafetiere-connectee-guide', model: 'Philips 5500 LatteGo Series EP5541/50' },
      { article: 'cafetiere-connectee-guide', model: 'Krups Evidence One EA895N10' },
    ],
    copy: BEAN_TO_CUP_COPY,
  },
  {
    slug: 'aspirateurs-balais',
    hubs: [{ silo: 'entretien-maison', category: 'aspirateurs-balais' }],
    guides: ['aspirateur-sans-fil-comparatif-2026', 'robot-aspirateur-vs-balai'],
    picks: [
      { article: 'aspirateur-sans-fil-comparatif-2026', model: 'Dyson V15 Detect' },
      { article: 'aspirateur-sans-fil-comparatif-2026', model: 'Rowenta X-Force Flex 15.60' },
      { article: 'aspirateur-sans-fil-comparatif-2026', model: 'Samsung Bespoke Jet AI' },
    ],
    copy: STICK_VACUUMS_COPY,
  },
  {
    slug: 'thermostats',
    hubs: [{ silo: 'energie-domotique', category: 'thermostats' }],
    guides: ['thermostat-connecte-pompe-chaleur', 'guide-domotique-economie-energie-2026'],
    picks: [
      { article: 'thermostat-connecte-pompe-chaleur', model: 'tado Heat Pump Optimizer X' },
      { article: 'thermostat-connecte-pompe-chaleur', model: 'Netatmo Thermostat Original' },
      { article: 'thermostat-connecte-pompe-chaleur', model: 'Honeywell Home T6' },
      {
        // Its verdict ranks energy-saving gear in general ("Best overall"):
        // on a thermostat page the honest label is what it is for.
        article: 'guide-domotique-economie-energie-2026',
        model: 'tado Smart Radiator Thermostat X Starter Kit',
        role: {
          fr: 'Idéal pour radiateurs à eau, pièce par pièce',
          en: 'Best for radiators, room by room',
          de: 'Ideal für Heizkörper, Raum für Raum',
          es: 'Ideal para radiadores de agua, habitación por habitación',
          it: 'Ideale per termosifoni, stanza per stanza',
          nl: 'Ideaal voor radiatoren, per kamer',
          pl: 'Do grzejników wodnych – osobno w każdym pomieszczeniu',
        },
      },
    ],
    copy: THERMOSTATS_COPY,
  },
  {
    slug: 'radiateurs-connectes',
    hubs: [{ silo: 'confort-air', category: 'chauffages-appoint' }],
    guides: ['radiateur-electrique-connecte-guide'],
    picks: [
      { article: 'radiateur-electrique-connecte-guide', model: 'Thermor Equateur 4' },
      { article: 'radiateur-electrique-connecte-guide', model: 'Sauter Orosi 2' },
      { article: 'radiateur-electrique-connecte-guide', model: 'Mill Gentle Air WiFi' },
    ],
    copy: HEATERS_COPY,
  },
]
