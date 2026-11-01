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
      es: 'Cocina conectada',
      it: 'Cucina smart',
      nl: 'Slimme Keuken',
      pl: 'Inteligentna kuchnia',
      sv: 'Smart kök',
      us: 'Smart Kitchen',
      ca: 'Smart Kitchen',
    },
    description: {
      fr: 'Airfryers, multicuiseurs, cafetières et appareils connectés pour cuisiner mieux au quotidien.',
      en: 'Air fryers, multicookers, coffee machines and smart appliances for better everyday cooking.',
      de: 'Heißluftfritteusen, Multikocher, Kaffeemaschinen und vernetzte Geräte für den Küchenalltag.',
      es: 'Freidoras de aire, ollas programables, cafeteras y electrodomésticos conectados para cocinar mejor cada día.',
      it: 'Friggitrici ad aria, multicooker, macchine da caffè ed elettrodomestici smart per cucinare meglio ogni giorno.',
      nl: 'Airfryers, multicookers, koffiezetapparaten en slimme apparaten voor beter dagelijks koken.',
      pl: 'Frytkownice beztłuszczowe, multicookery, ekspresy do kawy i inteligentne urządzenia, które ułatwiają codzienne gotowanie.',
      sv: 'Airfryrar, multikokare, kaffemaskiner och smarta apparater för bättre matlagning i vardagen.',
      us: 'Air fryers, multicookers, coffee makers and smart appliances that make everyday cooking easier.',
      ca: 'Air fryers, multicookers, coffee makers and smart appliances for better everyday cooking.',
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
      en: 'Energy & Smart Home',
      de: 'Energie & Smart Home',
      es: 'Energía y domótica',
      it: 'Energia e domotica',
      nl: 'Energie & Domotica',
      pl: 'Energia i inteligentny dom',
      sv: 'Energi & smarta hem',
      us: 'Energy & Smart Home',
      ca: 'Energy & Smart Home',
    },
    description: {
      fr: 'Thermostats, éclairage, solaire de balcon, hubs domotique — réduire sa facture et piloter sa maison.',
      en: 'Thermostats, lighting, plug-in solar and smart home hubs to cut your bills and take control of your home.',
      de: 'Thermostate, Beleuchtung, Balkonkraftwerke, Smart-Home-Hubs — Rechnung senken und Zuhause steuern.',
      es: 'Termostatos, iluminación, kits solares de balcón y hubs domóticos para ahorrar en la factura y controlar tu casa.',
      it: 'Termostati, illuminazione, fotovoltaico da balcone e hub domotici per ridurre le bollette e gestire la casa.',
      nl: 'Thermostaten, verlichting, balkonzonnepanelen, domotica hubs — bespaar en bestuur je huis.',
      pl: 'Termostaty, oświetlenie, elektrownie balkonowe, huby smart home — obniż rachunki i steruj domem.',
      sv: 'Termostater, belysning, balkongsolceller och smarthemshubbar – sänk elräkningen och styr ditt hem.',
      us: 'Thermostats, lighting, balcony solar and smart home hubs — lower your bills and take control of your home.',
      ca: 'Smart thermostats, lighting, balcony solar and smart home hubs — cut your energy bills and take control of your home.',
    },
  },
  {
    slug: 'securite-maison',
    icon: 'Shield',
    flagship: false,
    priority: 3,
    indexable: true,
    title: {
      fr: 'Sécurité Maison',
      en: 'Home Security',
      de: 'Haussicherheit',
      es: 'Seguridad del hogar',
      it: 'Sicurezza della casa',
      nl: 'Huisbeveiliging',
      pl: 'Bezpieczeństwo domu',
      sv: 'Hemsäkerhet',
      us: 'Home Security',
      ca: 'Home Security',
    },
    description: {
      fr: 'Sonnettes vidéo, caméras, serrures et alarmes connectées — protéger son foyer sans compromis sur les données.',
      en: 'Video doorbells, security cameras, smart locks and alarms to protect your home without compromising your data.',
      de: 'Video-Türklingeln, Kameras, smarte Schlösser und Alarme — Zuhause schützen ohne Datenkompromisse.',
      es: 'Videoporteros, cámaras, cerraduras y alarmas inteligentes para proteger tu casa sin renunciar a la privacidad de tus datos.',
      it: 'Videocitofoni, telecamere, serrature smart e allarmi per proteggere la casa senza rinunciare alla privacy.',
      nl: 'Videodeurbellen, camera\'s, slimme sloten en alarmen — je huis beschermen zonder data-concessies.',
      pl: 'Dzwonki wideo, kamery, inteligentne zamki i alarmy — chroń dom, nie poświęcając prywatności swoich danych.',
      sv: 'Videodörrklockor, kameror, smarta lås och larm – skydda hemmet utan att släppa kontrollen över dina data.',
      us: 'Video doorbells, cameras, smart locks and security systems — protect your home without giving up your privacy.',
      ca: 'Video doorbells, cameras, smart locks and alarms — protect your home without compromising your data.',
    },
  },
  {
    slug: 'confort-air',
    icon: 'Wind',
    flagship: false,
    priority: 4,
    indexable: true,
    title: {
      fr: 'Confort & Qualité d\'Air',
      en: 'Comfort & Air Quality',
      de: 'Komfort & Luftqualität',
      es: 'Confort y calidad del aire',
      it: 'Clima e qualità dell\'aria',
      nl: 'Comfort & Luchtkwaliteit',
      pl: 'Komfort i jakość powietrza',
      sv: 'Inomhusklimat & luftkvalitet',
      us: 'Comfort & Air Quality',
      ca: 'Comfort & Air Quality',
    },
    description: {
      fr: 'Purificateurs, humidificateurs, climatiseurs et stations météo connectées pour un intérieur sain toute l\'année.',
      en: 'Air purifiers, humidifiers, air conditioners and weather stations for a healthy home all year round.',
      de: 'Luftreiniger, Luftbefeuchter, Klimageräte und Wetterstationen für ein gesundes Raumklima das ganze Jahr.',
      es: 'Purificadores, humidificadores, aires acondicionados y estaciones meteorológicas conectadas para un ambiente sano en casa todo el año.',
      it: 'Purificatori, umidificatori, condizionatori e stazioni meteo per respirare aria sana in casa tutto l\'anno.',
      nl: 'Luchtreinigers, luchtbevochtigers, airco\'s en weerstations voor een gezond binnenklimaat het hele jaar.',
      pl: 'Oczyszczacze powietrza, nawilżacze, klimatyzatory i stacje pogodowe — zdrowy mikroklimat w domu przez cały rok.',
      sv: 'Luftrenare, luftfuktare, luftkonditionering och smarta väderstationer för ett sunt inomhusklimat året runt.',
      us: 'Air purifiers, humidifiers, air conditioners and weather stations for healthier indoor air year-round.',
      ca: 'Purifiers, humidifiers, AC units and weather stations for a healthy indoor climate year-round.',
    },
  },
  {
    slug: 'entretien-maison',
    icon: 'Sparkles',
    flagship: false,
    priority: 5,
    indexable: true,
    title: {
      fr: 'Entretien & Ménage',
      en: 'Cleaning',
      de: 'Reinigung & Haushalt',
      es: 'Limpieza del hogar',
      it: 'Pulizia della casa',
      nl: 'Schoonmaak & Huishouden',
      pl: 'Sprzątanie i porządki',
      sv: 'Städning & hushåll',
      us: 'Cleaning & Home Care',
      ca: 'Cleaning & Home Care',
    },
    description: {
      fr: 'Aspirateurs robots, laveurs de vitres, nettoyeurs vapeur — automatiser les corvées du quotidien.',
      en: 'Robot vacuums, window cleaning robots and steam cleaners to take the hard work out of everyday chores.',
      de: 'Saugroboter, Fensterputzroboter, Dampfreiniger — den Alltagshaushalt automatisieren.',
      es: 'Robots aspiradores, robots limpiacristales y limpiadores de vapor para automatizar las tareas domésticas de cada día.',
      it: 'Robot aspirapolvere, robot lavavetri e pulitori a vapore per automatizzare le faccende di tutti i giorni.',
      nl: 'Robotstofzuigers, ruitenreinigers, stoomreinigers — automatiseer je dagelijkse klusjes.',
      pl: 'Roboty sprzątające, roboty do mycia okien, myjki parowe — zautomatyzuj codzienne sprzątanie.',
      sv: 'Robotdammsugare, fönsterputsrobotar och ångtvättar – automatisera vardagens hushållssysslor.',
      us: 'Robot vacuums, window cleaning robots and steam cleaners — automate your everyday chores.',
      ca: 'Robot vacuums, window cleaning robots, steam cleaners — automate the daily chores.',
    },
  },
  {
    slug: 'outdoor-connecte',
    icon: 'Trees',
    flagship: false,
    priority: 6,
    indexable: true,
    title: {
      fr: 'Jardin & Extérieur Connectés',
      en: 'Smart Garden & Outdoors',
      de: 'Vernetzter Garten & Außenbereich',
      es: 'Jardín y exterior conectados',
      it: 'Giardino ed esterni',
      nl: 'Slimme Tuin & Buitenruimte',
      pl: 'Inteligentny ogród',
      sv: 'Smart trädgård & utomhus',
      us: 'Smart Yard & Outdoor',
      ca: 'Smart Yard & Outdoors',
    },
    description: {
      fr: 'Tondeuses robots, arrosage, éclairage solaire, robots de piscine — l\'extérieur piloté comme l\'intérieur.',
      en: 'Robot mowers, smart watering, solar garden lights and robot pool cleaners, so you can run your garden from your phone.',
      de: 'Mähroboter, Bewässerung, Solarbeleuchtung, Poolroboter — Außenbereich wie drinnen gesteuert.',
      es: 'Robots cortacésped, riego, luces solares y robots limpiafondos para controlar el exterior igual que el interior.',
      it: 'Robot tagliaerba, irrigazione, luci solari da esterno e robot per piscina: giardino e piscina gestiti dall\'app, come il resto della casa.',
      nl: 'Robotmaaiers, irrigatie, zonneverlichting, zwembadrobots — buitenruimte net zo bestuurd als binnen.',
      pl: 'Roboty koszące, nawadnianie, oświetlenie solarne, roboty basenowe — ogrodem sterujesz tak samo wygodnie jak domem.',
      sv: 'Robotgräsklippare, bevattning, solcellsbelysning och poolrobotar – styr allt utomhus lika enkelt som inomhus.',
      us: 'Robot mowers, smart irrigation, solar lighting and pool robots — run your yard as easily as the rest of your home.',
      ca: 'Robot mowers, smart sprinklers, solar lighting and pool robots — run your yard as easily as your home.',
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
