/**
 * Self-hosted product photos: official manufacturer packshots placed,
 * unaltered, in a Homenura-branded frame (scripts/images/build-product-images.ts).
 *
 * Client-safe on purpose: no manifest import, only file naming and the
 * localized alt text and credit line. The manifest lookup lives in
 * lib/product-images.ts (server side), which hands components a
 * ready-to-render `ProductPhoto`.
 */
import type { Lang } from '@/lib/i18n'

export const PRODUCT_PHOTO_DIR = '/images/products'
/** Square variants, in pixels (the composition is square). */
export const PRODUCT_PHOTO_WIDTHS = [400, 800, 1200] as const
export const PRODUCT_PHOTO_FORMATS = ['avif', 'webp'] as const
/** Vertical 2:3 variant for Pinterest saves. */
export const PRODUCT_PIN = { width: 1000, height: 1500, formats: ['jpg', 'webp'] as const }

export type ProductPhotoWidth = (typeof PRODUCT_PHOTO_WIDTHS)[number]
export type ProductPhotoFormat = (typeof PRODUCT_PHOTO_FORMATS)[number]
export type ProductPinFormat = (typeof PRODUCT_PIN.formats)[number]

/** What a photo shows, for its alt text. */
export const PRODUCT_PHOTO_CATEGORIES = [
  'airfryer',
  'multicooker',
  'coffee-machine',
  'kitchen-scale',
  'meat-thermometer',
  'smart-plug',
  'robot-vacuum',
  'stick-vacuum',
  'thermostat',
  'radiator-thermostat',
  'heater',
  'smart-bulb',
  'smart-lock',
  'smoke-alarm',
  'co-alarm',
  'air-purifier',
  'weather-station',
  'cooking-robot',
  'air-conditioner',
  'portable-air-conditioner',
  'air-quality-monitor',
  'dehumidifier',
  'fan',
  'bluetooth-tracker',
  'electric-grill',
  'gas-grill',
  'pellet-grill',
  'energy-meter',
  'ev-charger',
  'home-battery',
  'portable-power-station',
  'micro-inverter',
  'indoor-camera',
  'outdoor-camera',
  'video-doorbell',
  'video-doorphone',
  'motion-sensor',
  'presence-sensor',
  'leak-sensor',
  'water-valve-controller',
  'irrigation-controller',
  'soil-sensor',
  'robot-lawn-mower',
  'pool-robot',
  'smart-curtain',
  'motorized-blind',
  'smart-home-hub',
  'smart-relay',
  'smart-switch',
  'outdoor-light',
  'steam-generator-iron',
  'steam-mop',
  'wet-dry-vacuum',
  'wake-up-light',
] as const

export type ProductPhotoCategory = (typeof PRODUCT_PHOTO_CATEGORIES)[number]

export const PRODUCT_PHOTO_CATEGORY_LABELS: Record<ProductPhotoCategory, Record<Lang, string>> = {
  airfryer: { fr: 'airfryer', en: 'air fryer', de: 'Heißluftfritteuse', es: 'freidora de aire', it: 'friggitrice ad aria', nl: 'airfryer' },
  multicooker: { fr: 'multicuiseur', en: 'multicooker', de: 'Multikocher', es: 'olla multifunción', it: 'multicooker', nl: 'multicooker' },
  'coffee-machine': { fr: 'machine à café à grain', en: 'bean-to-cup coffee machine', de: 'Kaffeevollautomat', es: 'cafetera superautomática', it: 'macchina da caffè automatica', nl: 'volautomatische koffiemachine' },
  'kitchen-scale': { fr: 'balance de cuisine', en: 'kitchen scale', de: 'Küchenwaage', es: 'báscula de cocina', it: 'bilancia da cucina', nl: 'keukenweegschaal' },
  'meat-thermometer': { fr: 'thermomètre à viande', en: 'meat thermometer', de: 'Fleischthermometer', es: 'termómetro para carne', it: 'termometro per carne', nl: 'vleesthermometer' },
  'smart-plug': { fr: 'prise connectée', en: 'smart plug', de: 'smarte Steckdose', es: 'enchufe inteligente', it: 'presa smart', nl: 'slimme stekker' },
  'robot-vacuum': { fr: 'robot aspirateur', en: 'robot vacuum', de: 'Saugroboter', es: 'robot aspirador', it: 'robot aspirapolvere', nl: 'robotstofzuiger' },
  'stick-vacuum': { fr: 'aspirateur balai', en: 'cordless stick vacuum', de: 'Akku-Staubsauger', es: 'aspiradora escoba', it: 'scopa elettrica', nl: 'steelstofzuiger' },
  thermostat: { fr: 'thermostat connecté', en: 'smart thermostat', de: 'smartes Thermostat', es: 'termostato inteligente', it: 'termostato smart', nl: 'slimme thermostaat' },
  'radiator-thermostat': { fr: 'tête thermostatique connectée', en: 'smart radiator thermostat', de: 'smartes Heizkörperthermostat', es: 'válvula termostática inteligente', it: 'valvola termostatica smart', nl: 'slimme radiatorknop' },
  heater: { fr: 'radiateur électrique', en: 'electric heater', de: 'Elektroheizkörper', es: 'radiador eléctrico', it: 'radiatore elettrico', nl: 'elektrische radiator' },
  'smart-bulb': { fr: 'ampoule connectée', en: 'smart bulb', de: 'smarte Glühbirne', es: 'bombilla inteligente', it: 'lampadina smart', nl: 'slimme lamp' },
  'smart-lock': { fr: 'serrure connectée', en: 'smart lock', de: 'smartes Türschloss', es: 'cerradura inteligente', it: 'serratura smart', nl: 'slim deurslot' },
  'smoke-alarm': { fr: 'détecteur de fumée connecté', en: 'smart smoke alarm', de: 'smarter Rauchmelder', es: 'detector de humo inteligente', it: 'rilevatore di fumo smart', nl: 'slimme rookmelder' },
  'co-alarm': { fr: 'détecteur de monoxyde de carbone', en: 'carbon monoxide alarm', de: 'Kohlenmonoxidmelder', es: 'detector de monóxido de carbono', it: 'rilevatore di monossido di carbonio', nl: 'koolmonoxidemelder' },
  'air-purifier': { fr: "purificateur d'air", en: 'air purifier', de: 'Luftreiniger', es: 'purificador de aire', it: "purificatore d'aria", nl: 'luchtreiniger' },
  'weather-station': { fr: 'station météo connectée', en: 'weather station', de: 'Wetterstation', es: 'estación meteorológica', it: 'stazione meteo', nl: 'weerstation' },
  'cooking-robot': { fr: 'robot cuiseur', en: 'cooking food processor', de: 'Küchenmaschine mit Kochfunktion', es: 'robot de cocina', it: 'robot da cucina', nl: 'keukenrobot met kookfunctie' },
  'air-conditioner': { fr: 'climatiseur', en: 'air conditioner', de: 'Klimaanlage', es: 'aire acondicionado', it: 'condizionatore', nl: 'airconditioner' },
  'portable-air-conditioner': { fr: 'climatiseur mobile', en: 'portable air conditioner', de: 'mobile Klimaanlage', es: 'aire acondicionado portátil', it: 'condizionatore portatile', nl: 'mobiele airco' },
  'air-quality-monitor': { fr: "capteur de qualité de l'air", en: 'air quality monitor', de: 'Luftqualitätsmonitor', es: 'medidor de calidad del aire', it: "rilevatore della qualità dell'aria", nl: 'luchtkwaliteitsmeter' },
  dehumidifier: { fr: 'déshumidificateur', en: 'dehumidifier', de: 'Luftentfeuchter', es: 'deshumidificador', it: 'deumidificatore', nl: 'luchtontvochtiger' },
  fan: { fr: 'ventilateur', en: 'fan', de: 'Ventilator', es: 'ventilador', it: 'ventilatore', nl: 'ventilator' },
  'bluetooth-tracker': { fr: 'traceur Bluetooth', en: 'Bluetooth tracker', de: 'Bluetooth-Tracker', es: 'localizador Bluetooth', it: 'localizzatore Bluetooth', nl: 'Bluetooth-tracker' },
  'electric-grill': { fr: 'barbecue électrique', en: 'electric grill', de: 'Elektrogrill', es: 'barbacoa eléctrica', it: 'barbecue elettrico', nl: 'elektrische barbecue' },
  'gas-grill': { fr: 'barbecue à gaz', en: 'gas grill', de: 'Gasgrill', es: 'barbacoa de gas', it: 'barbecue a gas', nl: 'gasbarbecue' },
  'pellet-grill': { fr: 'barbecue à pellets', en: 'pellet grill', de: 'Pelletgrill', es: 'barbacoa de pellets', it: 'barbecue a pellet', nl: 'pelletbarbecue' },
  'energy-meter': { fr: "compteur d'énergie connecté", en: 'energy meter', de: 'Energiemessgerät', es: 'medidor de energía', it: 'misuratore di energia', nl: 'energiemeter' },
  'ev-charger': { fr: 'borne de recharge', en: 'EV charger', de: 'Wallbox', es: 'cargador para coche eléctrico', it: 'wallbox', nl: 'laadpaal' },
  'home-battery': { fr: 'batterie domestique', en: 'home battery', de: 'Stromspeicher', es: 'batería doméstica', it: 'batteria domestica', nl: 'thuisbatterij' },
  'portable-power-station': { fr: 'station électrique portable', en: 'portable power station', de: 'Powerstation', es: 'estación de energía portátil', it: 'power station portatile', nl: 'draagbaar powerstation' },
  'micro-inverter': { fr: 'micro-onduleur', en: 'microinverter', de: 'Mikrowechselrichter', es: 'microinversor', it: 'microinverter', nl: 'micro-omvormer' },
  'indoor-camera': { fr: 'caméra intérieure', en: 'indoor camera', de: 'Innenkamera', es: 'cámara de interior', it: 'telecamera da interno', nl: 'binnencamera' },
  'outdoor-camera': { fr: 'caméra extérieure', en: 'outdoor camera', de: 'Außenkamera', es: 'cámara de exterior', it: 'telecamera da esterno', nl: 'buitencamera' },
  'video-doorbell': { fr: 'sonnette vidéo', en: 'video doorbell', de: 'Video-Türklingel', es: 'timbre con vídeo', it: 'campanello video', nl: 'videodeurbel' },
  'video-doorphone': { fr: 'interphone vidéo', en: 'video door phone', de: 'Video-Türsprechanlage', es: 'videoportero', it: 'videocitofono', nl: 'video-intercom' },
  'motion-sensor': { fr: 'détecteur de mouvement', en: 'motion sensor', de: 'Bewegungsmelder', es: 'sensor de movimiento', it: 'sensore di movimento', nl: 'bewegingssensor' },
  'presence-sensor': { fr: 'détecteur de présence', en: 'presence sensor', de: 'Präsenzmelder', es: 'sensor de presencia', it: 'sensore di presenza', nl: 'aanwezigheidssensor' },
  'leak-sensor': { fr: "détecteur de fuite d'eau", en: 'water leak sensor', de: 'Wassermelder', es: 'detector de fugas de agua', it: "sensore di perdite d'acqua", nl: 'waterlekdetector' },
  'water-valve-controller': { fr: "vanne d'eau connectée", en: 'smart water valve controller', de: 'smarter Wasserventil-Antrieb', es: 'controlador de válvula de agua', it: "controller per valvola dell'acqua", nl: 'slimme waterklepbediening' },
  'irrigation-controller': { fr: "programmateur d'arrosage", en: 'irrigation controller', de: 'Bewässerungscomputer', es: 'programador de riego', it: 'programmatore di irrigazione', nl: 'beregeningscomputer' },
  'soil-sensor': { fr: "capteur d'humidité du sol", en: 'soil moisture sensor', de: 'Bodenfeuchtesensor', es: 'sensor de humedad del suelo', it: 'sensore di umidità del terreno', nl: 'bodemvochtsensor' },
  'robot-lawn-mower': { fr: 'tondeuse robot', en: 'robot lawn mower', de: 'Mähroboter', es: 'robot cortacésped', it: 'robot tagliaerba', nl: 'robotmaaier' },
  'pool-robot': { fr: 'robot de piscine', en: 'pool robot', de: 'Poolroboter', es: 'robot limpiafondos', it: 'robot pulitore per piscina', nl: 'zwembadrobot' },
  'smart-curtain': { fr: 'moteur de rideau connecté', en: 'smart curtain motor', de: 'smarter Vorhangantrieb', es: 'motor de cortina inteligente', it: 'motore per tende smart', nl: 'slimme gordijnmotor' },
  'motorized-blind': { fr: 'store motorisé', en: 'motorised blind', de: 'elektrisches Rollo', es: 'estor motorizado', it: 'tenda motorizzata', nl: 'gemotoriseerd rolgordijn' },
  'smart-home-hub': { fr: 'box domotique', en: 'smart home hub', de: 'Smart-Home-Zentrale', es: 'hub domótico', it: 'hub domotico', nl: 'smart-home-hub' },
  'smart-relay': { fr: 'module relais connecté', en: 'smart relay', de: 'smartes Relais', es: 'relé inteligente', it: 'relè smart', nl: 'slimme relaismodule' },
  'smart-switch': { fr: 'interrupteur connecté', en: 'smart switch', de: 'smarter Schalter', es: 'interruptor inteligente', it: 'interruttore smart', nl: 'slimme schakelaar' },
  'outdoor-light': { fr: 'éclairage extérieur connecté', en: 'smart outdoor light', de: 'smarte Außenleuchte', es: 'luz exterior inteligente', it: 'luce da esterno smart', nl: 'slimme buitenlamp' },
  'steam-generator-iron': { fr: 'centrale vapeur', en: 'steam generator iron', de: 'Dampfbügelstation', es: 'centro de planchado', it: 'ferro da stiro con caldaia', nl: 'stoomgenerator' },
  'steam-mop': { fr: 'balai vapeur', en: 'steam mop', de: 'Dampfbesen', es: 'mopa de vapor', it: 'scopa a vapore', nl: 'stoomreiniger' },
  'wet-dry-vacuum': { fr: 'aspirateur laveur', en: 'wet and dry vacuum', de: 'Nass-Trocken-Sauger', es: 'aspiradora friegasuelos', it: 'lavapavimenti senza fili', nl: 'nat-droogstofzuiger' },
  'wake-up-light': { fr: 'réveil lumière', en: 'wake-up light', de: 'Lichtwecker', es: 'despertador de luz', it: 'sveglia luminosa', nl: 'wake-up light' },
}

/** "Photo : © Ninja" — French typography keeps the space before the colon. */
const CREDIT_PREFIX: Record<Lang, { one: string; many: string }> = {
  fr: { one: 'Photo :', many: 'Photos :' },
  en: { one: 'Photo:', many: 'Photos:' },
  de: { one: 'Foto:', many: 'Fotos:' },
  es: { one: 'Foto:', many: 'Fotos:' },
  it: { one: 'Foto:', many: 'Foto:' },
  nl: { one: 'Foto:', many: "Foto's:" },
}

/** A product photo ready to render in one language. */
export interface ProductPhoto {
  /** File stem in PRODUCT_PHOTO_DIR (brand + model slug). */
  id: string
  /** "{Brand} {Model} – {category} | Homenura", localized. */
  alt: string
  /** Visible credit line, e.g. "Photo : © Ninja". */
  credit: string
  /** Credit text alone ("© Ninja"), to merge several credits on one line. */
  copyright: string
  /** Absolute URL of the vertical variant, offered to Pinterest's save button. */
  pin: string
}

export function productPhotoPath(id: string, width: ProductPhotoWidth, format: ProductPhotoFormat): string {
  return `${PRODUCT_PHOTO_DIR}/${id}-${width}.${format}`
}

export function productPinPath(id: string, format: ProductPinFormat): string {
  return `${PRODUCT_PHOTO_DIR}/${id}-pin.${format}`
}

/** `srcset` of the square variants in one format. */
export function productPhotoSrcSet(id: string, format: ProductPhotoFormat): string {
  return PRODUCT_PHOTO_WIDTHS.map((w) => `${productPhotoPath(id, w, format)} ${w}w`).join(', ')
}

export function productPhotoAlt(brand: string, model: string, category: ProductPhotoCategory, lang: Lang): string {
  return `${brand} ${model} – ${PRODUCT_PHOTO_CATEGORY_LABELS[category][lang]} | Homenura`
}

/** `credit` is the manifest credit text ("© Ninja"). */
export function productPhotoCredit(credit: string, lang: Lang): string {
  return `${CREDIT_PREFIX[lang].one} ${credit}`
}

/**
 * One credit line for a block of thumbnails ("Photos : © Ninja, © Philips"),
 * or null when none of them is a photo.
 */
export function productPhotoCredits(photos: readonly (ProductPhoto | undefined)[], lang: string): string | null {
  const holders = [...new Set(photos.flatMap((p) => (p ? [p.copyright] : [])))]
  if (holders.length === 0) return null
  const prefix = CREDIT_PREFIX[(lang in CREDIT_PREFIX ? lang : 'fr') as Lang]
  return `${holders.length === 1 ? prefix.one : prefix.many} ${holders.join(', ')}`
}
