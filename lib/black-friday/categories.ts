import type { BlackFridayCategory } from './types'
import { AIRFRYERS_COPY } from './copy/airfryers'
import { ROBOT_VACUUMS_COPY } from './copy/aspirateurs-robots'
import { BEAN_TO_CUP_COPY } from './copy/cafetieres-a-grain'
import { STICK_VACUUMS_COPY } from './copy/aspirateurs-balais'
import { THERMOSTATS_COPY } from './copy/thermostats'
import { HEATERS_COPY } from './copy/radiateurs-connectes'
import { FLOOR_WASHERS_COPY } from './copy/aspirateurs-laveurs'
import { DEHUMIDIFIERS_COPY } from './copy/deshumidificateurs'
import { MULTICOOKERS_COPY } from './copy/multicuiseurs'
import { VIDEO_DOORBELLS_COPY } from './copy/sonnettes-video'
import { SMART_LOCKS_COPY } from './copy/serrures-connectees'
import { POWER_STATIONS_COPY } from './copy/stations-recharge-outdoor'
import { HUMIDIFIERS_COPY } from './copy/humidificateurs'
import { OUTDOOR_CAMERAS_COPY } from './copy/cameras-exterieur'
import { INTERCOMS_COPY } from './copy/interphones'
import { HOME_BATTERIES_COPY } from './copy/batteries-domestiques'
import { AIR_PURIFIERS_COPY } from './copy/purificateurs-air'
import { SMOKE_CO_ALARMS_COPY } from './copy/detecteurs-fumee-co'
import { EV_CHARGERS_COPY } from './copy/bornes-recharge-ve'

/**
 * Every Black Friday category page. Only categories where the site already
 * publishes a verdict with named models: every pick points at a pick of
 * lib/blog/quick-answers.ts (same model, same reason, same ASIN or search
 * query). Nothing here is a new recommendation.
 *
 * The first six exist in every locale. The others exist only where a
 * market's list carries them (./markets.ts gives each market its own
 * categories and hub order); their copy is written for those markets only.
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
    visual: 'airfryer',
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
    visual: 'robot-vacuum',
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
    visual: 'coffee-machine',
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
    visual: 'vacuum',
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
          sv: 'Bäst för vattenburna element, rum för rum',
          us: 'Best for hot-water radiators, room by room',
          ca: 'Best for radiators, room by room',
        },
      },
    ],
    visual: 'thermostat',
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
    visual: 'heater',
    copy: HEATERS_COPY,
  },
  {
    // France: the cordless wet-dry floor washer ("aspirateur laveur"). The
    // robot mops stay on aspirateurs-robots, whose hubs cover them.
    slug: 'aspirateurs-laveurs',
    hubs: [{ silo: 'entretien-maison', category: 'aspirateurs-balais' }],
    guides: ['meilleur-aspirateur-laveur-2026', 'aspirateur-sans-fil-comparatif-2026'],
    picks: [
      { article: 'meilleur-aspirateur-laveur-2026', model: 'Dreame H15 Pro' },
      { article: 'meilleur-aspirateur-laveur-2026', model: 'Dreame H14 Pro' },
      { article: 'meilleur-aspirateur-laveur-2026', model: 'Dyson WashG1' },
    ],
    visual: 'floor-washer',
    copy: FLOOR_WASHERS_COPY,
  },
  {
    slug: 'deshumidificateurs',
    hubs: [{ silo: 'confort-air', category: 'deshumidificateurs' }],
    guides: ['deshumidificateur-connecte-guide', 'qualite-air-interieur-capteurs'],
    picks: [
      { article: 'deshumidificateur-connecte-guide', model: 'Meaco Arete Two 20L' },
      { article: 'deshumidificateur-connecte-guide', model: 'Comfee MDDF-16DEN7-WF' },
      { article: 'deshumidificateur-connecte-guide', model: 'Xiaomi Smart Dehumidifier Lite' },
    ],
    visual: 'dehumidifier',
    copy: DEHUMIDIFIERS_COPY,
  },
  {
    slug: 'multicuiseurs',
    hubs: [{ silo: 'cuisine-connectee', category: 'multicuiseurs' }],
    guides: ['comparatif-multicuiseur-connecte', 'cookeo-vs-thermomix-vs-airfryer', 'robot-cuiseur-connecte-comparatif'],
    picks: [
      { article: 'comparatif-multicuiseur-connecte', model: 'Moulinex Cookeo Touch WiFi - 6L' },
      { article: 'comparatif-multicuiseur-connecte', model: 'Ninja Foodi MAX 15-en-1 SmartLid OP500EU - 7.5L' },
      { article: 'comparatif-multicuiseur-connecte', model: 'Instant Pot Duo Plus WhisperQuiet - 5.7L' },
    ],
    visual: 'multicooker',
    copy: MULTICOOKERS_COPY,
  },
  {
    slug: 'sonnettes-video',
    hubs: [{ silo: 'securite-maison', category: 'sonnettes-video' }],
    guides: ['sonnette-video-sans-abonnement', 'guide-securite-maison-connectee-2026'],
    picks: [
      { article: 'sonnette-video-sans-abonnement', model: 'Eufy Video Doorbell E340' },
      { article: 'sonnette-video-sans-abonnement', model: 'TP-Link Tapo D235' },
      { article: 'sonnette-video-sans-abonnement', model: 'Aqara Video Doorbell G4' },
    ],
    visual: 'doorbell',
    copy: VIDEO_DOORBELLS_COPY,
  },
  {
    slug: 'serrures-connectees',
    hubs: [{ silo: 'securite-maison', category: 'serrures-connectees' }],
    guides: ['serrure-connectee-guide', 'guide-securite-maison-connectee-2026'],
    picks: [
      { article: 'serrure-connectee-guide', model: 'Nuki Smart Lock Pro (5th generation)' },
      { article: 'serrure-connectee-guide', model: 'Nuki Smart Lock Go' },
      { article: 'serrure-connectee-guide', model: 'Aqara Smart Lock U200' },
    ],
    visual: 'smart-lock',
    copy: SMART_LOCKS_COPY,
  },
  {
    slug: 'stations-recharge-outdoor',
    hubs: [{ silo: 'outdoor-connecte', category: 'stations-recharge-outdoor' }],
    guides: ['station-electrique-portable-comparatif'],
    picks: [
      { article: 'station-electrique-portable-comparatif', model: 'EcoFlow DELTA 3 Plus' },
      { article: 'station-electrique-portable-comparatif', model: 'BLUETTI Elite 100 V2' },
      { article: 'station-electrique-portable-comparatif', model: 'EcoFlow RIVER 3 Plus' },
    ],
    visual: 'power-station',
    copy: POWER_STATIONS_COPY,
  },
  {
    slug: 'humidificateurs',
    hubs: [{ silo: 'confort-air', category: 'humidificateurs' }],
    guides: ['humidificateur-connecte-comparatif', 'deshumidificateur-connecte-guide'],
    picks: [
      { article: 'humidificateur-connecte-comparatif', model: 'BONECO H700 SMART' },
      { article: 'humidificateur-connecte-comparatif', model: 'Levoit Classic 300S' },
      { article: 'humidificateur-connecte-comparatif', model: 'Dyson Purifier Humidify+Cool Formaldehyde PH04' },
    ],
    visual: 'humidifier',
    copy: HUMIDIFIERS_COPY,
  },
  {
    slug: 'cameras-exterieur',
    hubs: [{ silo: 'securite-maison', category: 'cameras-exterieur' }],
    guides: ['comparatif-camera-surveillance-exterieure', 'guide-securite-maison-connectee-2026'],
    picks: [
      { article: 'comparatif-camera-surveillance-exterieure', model: 'eufyCam S3 Pro' },
      { article: 'comparatif-camera-surveillance-exterieure', model: 'TP-Link Tapo C520WS' },
      { article: 'comparatif-camera-surveillance-exterieure', model: 'Reolink RLC-833A' },
    ],
    visual: 'outdoor-camera',
    copy: OUTDOOR_CAMERAS_COPY,
  },
  {
    slug: 'interphones',
    hubs: [{ silo: 'securite-maison', category: 'interphones' }],
    guides: ['interphone-video-connecte'],
    picks: [
      { article: 'interphone-video-connecte', model: 'Philips WelcomeEye Connect 3' },
      { article: 'interphone-video-connecte', model: 'BTicino Classe 100X' },
      { article: 'interphone-video-connecte', model: 'Ring Intercom Video' },
    ],
    visual: 'intercom',
    copy: INTERCOMS_COPY,
  },
  {
    slug: 'batteries-domestiques',
    hubs: [{ silo: 'energie-domotique', category: 'batteries-domestiques' }],
    guides: ['batterie-domestique-stockage-solaire'],
    picks: [
      { article: 'batterie-domestique-stockage-solaire', model: 'Anker SOLIX Solarbank 3 E2700 Pro' },
      { article: 'batterie-domestique-stockage-solaire', model: 'Marstek Venus E 3.0' },
      { article: 'batterie-domestique-stockage-solaire', model: 'Tesla Powerwall 3' },
    ],
    visual: 'home-battery',
    copy: HOME_BATTERIES_COPY,
  },
  {
    slug: 'purificateurs-air',
    hubs: [{ silo: 'confort-air', category: 'purificateurs-air' }],
    guides: ['comparatif-purificateur-air-allergie', 'guide-purificateur-air-2026'],
    picks: [
      { article: 'comparatif-purificateur-air-allergie', model: 'Levoit Core 400S' },
      { article: 'comparatif-purificateur-air-allergie', model: 'Levoit Core 300S' },
      { article: 'comparatif-purificateur-air-allergie', model: 'Blueair Blue Pure 411i Max' },
    ],
    localPicks: {
      // The US copy names Winix and Coway: the US picks of the second
      // verdict (its Xiaomi and Philips models have those equivalents there).
      us: [
        { article: 'comparatif-purificateur-air-allergie', model: 'Levoit Core 400S' },
        { article: 'comparatif-purificateur-air-allergie', model: 'Levoit Core 300S' },
        { article: 'guide-purificateur-air-2026', model: 'Xiaomi Smart Air Purifier 4' },
        { article: 'guide-purificateur-air-2026', model: 'Philips AC2939/10' },
        { article: 'comparatif-purificateur-air-allergie', model: 'Blueair Blue Pure 411i Max' },
      ],
    },
    visual: 'air-purifier',
    copy: AIR_PURIFIERS_COPY,
  },
  {
    slug: 'detecteurs-fumee-co',
    hubs: [{ silo: 'securite-maison', category: 'detecteurs-fumee-co' }],
    guides: ['detecteur-fumee-connecte-comparatif', 'guide-securite-maison-connectee-2026'],
    picks: [
      { article: 'detecteur-fumee-connecte-comparatif', model: 'Netatmo Smart Smoke Alarm' },
      { article: 'detecteur-fumee-connecte-comparatif', model: 'X-Sense XS01-WX' },
      { article: 'detecteur-fumee-connecte-comparatif', model: 'Netatmo Smart Carbon Monoxide Alarm' },
    ],
    visual: 'smoke-alarm',
    copy: SMOKE_CO_ALARMS_COPY,
  },
  {
    slug: 'bornes-recharge-ve',
    hubs: [{ silo: 'energie-domotique', category: 'bornes-recharge-ve' }],
    guides: ['borne-recharge-voiture-electrique-maison'],
    picks: [
      { article: 'borne-recharge-voiture-electrique-maison', model: 'Wallbox Pulsar Max' },
      { article: 'borne-recharge-voiture-electrique-maison', model: 'Easee Charge Lite' },
      { article: 'borne-recharge-voiture-electrique-maison', model: 'Zaptec Go 2' },
    ],
    visual: 'ev-charger',
    copy: EV_CHARGERS_COPY,
  },
]
