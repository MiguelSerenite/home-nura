/**
 * The 6 meta-silos of Home Nura.
 *
 * These are the top-level topical pillars under the parent editorial
 * theme "La Maison Connectée Européenne / The European Smart Home".
 *
 * The `flagship` boolean is a hard constraint: exactly one silo
 * carries the title at any time. Today it's cuisine-connectee because
 * that's where Phase M-X content investment landed. When/if we rotate
 * the flagship we do it with a migration plan, not a boolean flip.
 *
 * Indexable order reflects the rollout plan:
 *   1. cuisine-connectee (flagship, Phase Y content)
 *   2. energie-domotique (Phase Z content)
 *   3. securite-maison (Phase AA)
 *   4. confort-air (Phase AA)
 *   5. entretien-maison (Phase BB)
 *   6. outdoor-connecte (Phase BB)
 */

import type { MetaSilo } from './types'

export const META_SILOS: readonly MetaSilo[] = [
  {
    slug: 'cuisine-connectee',
    icon: 'ChefHat',
    flagship: true,
    priority: 1,
    indexable: true,
    title: {
      fr: 'Cuisine Connectée',
      en: 'Smart Kitchen',
      de: 'Vernetzte Küche',
      es: 'Cocina Conectada',
      it: 'Cucina Connessa',
      nl: 'Slimme Keuken',
    },
    description: {
      fr: 'Airfryers, multicuiseurs, cafetières et appareils connectés pour cuisiner mieux au quotidien.',
      en: 'Air fryers, multicookers, coffee machines and smart appliances for better everyday cooking.',
      de: 'Heißluftfritteusen, Multikocher, Kaffeemaschinen und vernetzte Geräte für den Küchenalltag.',
      es: 'Freidoras de aire, multicocinas, cafeteras y electrodomésticos conectados para cocinar mejor cada día.',
      it: 'Friggitrici ad aria, multicooker, caffettiere ed elettrodomestici connessi per cucinare meglio ogni giorno.',
      nl: 'Airfryers, multicookers, koffiezetapparaten en slimme apparaten voor beter dagelijks koken.',
    },
  },
  {
    slug: 'energie-domotique',
    icon: 'Zap',
    flagship: false,
    priority: 2,
    indexable: true,
    title: {
      fr: 'Énergie & Domotique',
      en: 'Energy & Home Automation',
      de: 'Energie & Smart Home',
      es: 'Energía y Domótica',
      it: 'Energia e Domotica',
      nl: 'Energie & Domotica',
    },
    description: {
      fr: 'Thermostats, éclairage, solaire de balcon, hubs domotique — réduire sa facture et piloter sa maison.',
      en: 'Thermostats, lighting, balcony solar, smart home hubs — cut bills and take control of your home.',
      de: 'Thermostate, Beleuchtung, Balkonkraftwerke, Smart-Home-Hubs — Rechnung senken und Zuhause steuern.',
      es: 'Termostatos, iluminación, solar de balcón, hubs domóticos — reduce facturas y controla tu hogar.',
      it: 'Termostati, illuminazione, solare da balcone, hub domotici — ridurre bollette e pilotare la casa.',
      nl: 'Thermostaten, verlichting, balkonzonnepanelen, domotica hubs — bespaar en bestuur je huis.',
    },
  },
  {
    slug: 'securite-maison',
    icon: 'Shield',
    flagship: false,
    priority: 3,
    indexable: false,
    title: {
      fr: 'Sécurité Maison',
      en: 'Home Security',
      de: 'Haussicherheit',
      es: 'Seguridad del Hogar',
      it: 'Sicurezza Casa',
      nl: 'Huisbeveiliging',
    },
    description: {
      fr: 'Sonnettes vidéo, caméras, serrures et alarmes connectées — protéger son foyer sans compromis sur les données.',
      en: 'Video doorbells, cameras, smart locks and alarms — protect your home without compromising your data.',
      de: 'Video-Türklingeln, Kameras, smarte Schlösser und Alarme — Zuhause schützen ohne Datenkompromisse.',
      es: 'Videoporteros, cámaras, cerraduras y alarmas inteligentes — proteger el hogar sin ceder datos.',
      it: 'Videocitofoni, telecamere, serrature intelligenti e allarmi — proteggere la casa senza cedere dati.',
      nl: 'Videodeurbellen, camera\'s, slimme sloten en alarmen — je huis beschermen zonder data-concessies.',
    },
  },
  {
    slug: 'confort-air',
    icon: 'Wind',
    flagship: false,
    priority: 4,
    indexable: false,
    title: {
      fr: 'Confort & Qualité d\'Air',
      en: 'Comfort & Air Quality',
      de: 'Komfort & Luftqualität',
      es: 'Confort y Calidad del Aire',
      it: 'Comfort e Qualità dell\'Aria',
      nl: 'Comfort & Luchtkwaliteit',
    },
    description: {
      fr: 'Purificateurs, humidificateurs, climatiseurs et stations météo connectées pour un intérieur sain toute l\'année.',
      en: 'Purifiers, humidifiers, AC units and weather stations for a healthy indoor climate year-round.',
      de: 'Luftreiniger, Luftbefeuchter, Klimageräte und Wetterstationen für ein gesundes Raumklima das ganze Jahr.',
      es: 'Purificadores, humidificadores, aires acondicionados y estaciones meteorológicas para un interior sano todo el año.',
      it: 'Purificatori, umidificatori, condizionatori e stazioni meteo per un interno sano tutto l\'anno.',
      nl: 'Luchtreinigers, luchtbevochtigers, airco\'s en weerstations voor een gezond binnenklimaat het hele jaar.',
    },
  },
  {
    slug: 'entretien-maison',
    icon: 'Sparkles',
    flagship: false,
    priority: 5,
    indexable: false,
    title: {
      fr: 'Entretien & Ménage',
      en: 'Cleaning & Housekeeping',
      de: 'Reinigung & Haushalt',
      es: 'Limpieza y Hogar',
      it: 'Pulizia e Casa',
      nl: 'Schoonmaak & Huishouden',
    },
    description: {
      fr: 'Aspirateurs robots, laveurs de vitres, nettoyeurs vapeur — automatiser les corvées du quotidien.',
      en: 'Robot vacuums, window cleaners, steam cleaners — automate the daily chores.',
      de: 'Saugroboter, Fensterputzroboter, Dampfreiniger — den Alltagshaushalt automatisieren.',
      es: 'Robots aspiradores, limpiacristales, limpiadores a vapor — automatiza las tareas diarias.',
      it: 'Aspirapolvere robot, lavavetri, pulitori a vapore — automatizzare le faccende quotidiane.',
      nl: 'Robotstofzuigers, ruitenreinigers, stoomreinigers — automatiseer je dagelijkse klusjes.',
    },
  },
  {
    slug: 'outdoor-connecte',
    icon: 'Trees',
    flagship: false,
    priority: 6,
    indexable: false,
    title: {
      fr: 'Jardin & Extérieur Connectés',
      en: 'Smart Garden & Outdoors',
      de: 'Vernetzter Garten & Außenbereich',
      es: 'Jardín y Exterior Conectados',
      it: 'Giardino ed Esterni Connessi',
      nl: 'Slimme Tuin & Buitenruimte',
    },
    description: {
      fr: 'Tondeuses robots, arrosage, éclairage solaire, robots de piscine — l\'extérieur piloté comme l\'intérieur.',
      en: 'Robot mowers, irrigation, solar lighting, pool robots — outdoor space controlled like indoors.',
      de: 'Mähroboter, Bewässerung, Solarbeleuchtung, Poolroboter — Außenbereich wie drinnen gesteuert.',
      es: 'Robots cortacésped, riego, iluminación solar, robots de piscina — el exterior como el interior.',
      it: 'Robot tagliaerba, irrigazione, illuminazione solare, robot piscina — l\'esterno pilotato come l\'interno.',
      nl: 'Robotmaaiers, irrigatie, zonneverlichting, zwembadrobots — buitenruimte net zo bestuurd als binnen.',
    },
  },
] as const

export function getMetaSilo(slug: string): MetaSilo | undefined {
  return META_SILOS.find((s) => s.slug === slug)
}

export function getFlagshipSilo(): MetaSilo {
  const flagship = META_SILOS.find((s) => s.flagship)
  if (!flagship) {
    throw new Error('No flagship meta-silo defined — ranking invariant broken')
  }
  return flagship
}

export function getIndexableSilos(): MetaSilo[] {
  return META_SILOS.filter((s) => s.indexable)
}
