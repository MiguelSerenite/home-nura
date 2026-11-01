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
/**
 * Gallery photos (in use, in a room, close-up), like the extra images of an
 * Amazon listing: kept at their own aspect ratio, no frame.
 */
export const PRODUCT_GALLERY_WIDTHS = [800, 1600] as const
export const PRODUCT_GALLERY_ROLES = ['in-use', 'lifestyle', 'detail'] as const

export type ProductGalleryWidth = (typeof PRODUCT_GALLERY_WIDTHS)[number]
export type ProductGalleryRole = (typeof PRODUCT_GALLERY_ROLES)[number]

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
  'air-humidifier',
  'alarm-system',
  'aroma-diffuser',
  'dishwasher',
  'garage-door-opener',
  'gate-opener',
  'led-strip',
  'pool-analyzer',
  'safe',
  'smart-speaker',
  'steam-cleaner',
  'tumble-dryer',
  'washer-dryer',
  'washing-machine',
  'window-cleaning-robot',
  'wine-cooler',
] as const

export type ProductPhotoCategory = (typeof PRODUCT_PHOTO_CATEGORIES)[number]

export const PRODUCT_PHOTO_CATEGORY_LABELS: Record<ProductPhotoCategory, Record<Lang, string>> = {
  airfryer: { fr: 'airfryer', en: 'air fryer', de: 'Heißluftfritteuse', es: 'freidora de aire', it: 'friggitrice ad aria', nl: 'airfryer', pl: 'frytkownica beztłuszczowa', sv: 'airfryer', us: 'air fryer', ca: 'air fryer' },
  multicooker: { fr: 'multicuiseur', en: 'multicooker', de: 'Multikocher', es: 'olla programable', it: 'multicooker', nl: 'multicooker', pl: 'multicooker', sv: 'multikokare', us: 'multicooker', ca: 'multicooker' },
  'coffee-machine': { fr: 'machine à café à grain', en: 'bean-to-cup coffee machine', de: 'Kaffeevollautomat', es: 'cafetera superautomática', it: 'macchina da caffè automatica', nl: 'volautomatische koffiemachine', pl: 'automatyczny ekspres do kawy', sv: 'helautomatisk kaffemaskin', us: 'super-automatic espresso machine', ca: 'super-automatic espresso machine' },
  'kitchen-scale': { fr: 'balance de cuisine', en: 'kitchen scales', de: 'Küchenwaage', es: 'báscula de cocina', it: 'bilancia da cucina', nl: 'keukenweegschaal', pl: 'waga kuchenna', sv: 'köksvåg', us: 'kitchen scale', ca: 'kitchen scale' },
  'meat-thermometer': { fr: 'thermomètre à viande', en: 'meat thermometer', de: 'Fleischthermometer', es: 'termómetro para carne', it: 'termometro per carne', nl: 'vleesthermometer', pl: 'termometr do mięsa', sv: 'stektermometer', us: 'meat thermometer', ca: 'meat thermometer' },
  'smart-plug': { fr: 'prise connectée', en: 'smart plug', de: 'smarte Steckdose', es: 'enchufe inteligente', it: 'presa smart', nl: 'slimme stekker', pl: 'inteligentne gniazdko', sv: 'smart plugg', us: 'smart plug', ca: 'smart plug' },
  'robot-vacuum': { fr: 'robot aspirateur', en: 'robot vacuum', de: 'Saugroboter', es: 'robot aspirador', it: 'robot aspirapolvere', nl: 'robotstofzuiger', pl: 'robot sprzątający', sv: 'robotdammsugare', us: 'robot vacuum', ca: 'robot vacuum' },
  'stick-vacuum': { fr: 'aspirateur balai', en: 'cordless vacuum', de: 'Akku-Staubsauger', es: 'aspiradora sin cable', it: 'scopa elettrica senza fili', nl: 'steelstofzuiger', pl: 'odkurzacz pionowy bezprzewodowy', sv: 'sladdlös dammsugare', us: 'cordless stick vacuum', ca: 'cordless stick vacuum' },
  thermostat: { fr: 'thermostat connecté', en: 'smart thermostat', de: 'smartes Thermostat', es: 'termostato inteligente', it: 'termostato smart', nl: 'slimme thermostaat', pl: 'inteligentny termostat', sv: 'smart termostat', us: 'smart thermostat', ca: 'smart thermostat' },
  'radiator-thermostat': { fr: 'tête thermostatique connectée', en: 'smart radiator thermostat', de: 'smartes Heizkörperthermostat', es: 'cabezal termostático inteligente', it: 'valvola termostatica smart', nl: 'slimme radiatorknop', pl: 'inteligentna głowica termostatyczna', sv: 'smart elementtermostat', us: 'smart radiator valve', ca: 'smart radiator valve' },
  heater: { fr: 'radiateur électrique', en: 'electric heater', de: 'Elektroheizkörper', es: 'radiador eléctrico', it: 'radiatore elettrico', nl: 'elektrische radiator', pl: 'grzejnik elektryczny', sv: 'elelement', us: 'electric heater', ca: 'electric heater' },
  'smart-bulb': { fr: 'ampoule connectée', en: 'smart bulb', de: 'smarte Glühbirne', es: 'bombilla inteligente', it: 'lampadina smart', nl: 'slimme lamp', pl: 'inteligentna żarówka', sv: 'smart lampa', us: 'smart bulb', ca: 'smart bulb' },
  'smart-lock': { fr: 'serrure connectée', en: 'smart lock', de: 'smartes Türschloss', es: 'cerradura inteligente', it: 'serratura smart', nl: 'slim deurslot', pl: 'inteligentny zamek', sv: 'smart lås', us: 'smart lock', ca: 'smart lock' },
  'smoke-alarm': { fr: 'détecteur de fumée connecté', en: 'smoke alarm', de: 'smarter Rauchmelder', es: 'detector de humo inteligente', it: 'rilevatore di fumo smart', nl: 'slimme rookmelder', pl: 'inteligentny czujnik dymu', sv: 'smart brandvarnare', us: 'smart smoke detector', ca: 'smart smoke alarm' },
  'co-alarm': { fr: 'détecteur de monoxyde de carbone', en: 'carbon monoxide alarm', de: 'Kohlenmonoxidmelder', es: 'detector de monóxido de carbono', it: 'rilevatore di monossido di carbonio', nl: 'koolmonoxidemelder', pl: 'czujnik czadu (tlenku węgla)', sv: 'koloxidvarnare', us: 'carbon monoxide detector', ca: 'carbon monoxide alarm' },
  'air-purifier': { fr: "purificateur d'air", en: 'air purifier', de: 'Luftreiniger', es: 'purificador de aire', it: "purificatore d'aria", nl: 'luchtreiniger', pl: 'oczyszczacz powietrza', sv: 'luftrenare', us: 'air purifier', ca: 'air purifier' },
  'weather-station': { fr: 'station météo connectée', en: 'weather station', de: 'Wetterstation', es: 'estación meteorológica', it: 'stazione meteo', nl: 'weerstation', pl: 'inteligentna stacja pogodowa', sv: 'smart väderstation', us: 'smart weather station', ca: 'weather station' },
  'cooking-robot': { fr: 'robot cuiseur', en: 'cooking food processor', de: 'Küchenmaschine mit Kochfunktion', es: 'robot de cocina', it: 'robot da cucina', nl: 'keukenrobot met kookfunctie', pl: 'robot kuchenny z funkcją gotowania', sv: 'köksmaskin med kokfunktion', us: 'all-in-one cooking machine', ca: 'cooking food processor' },
  'air-conditioner': { fr: 'climatiseur', en: 'air conditioner', de: 'Klimaanlage', es: 'aire acondicionado', it: 'condizionatore', nl: 'airconditioner', pl: 'klimatyzator', sv: 'AC-aggregat', us: 'air conditioner', ca: 'air conditioner' },
  'portable-air-conditioner': { fr: 'climatiseur mobile', en: 'portable air conditioner', de: 'mobile Klimaanlage', es: 'aire acondicionado portátil', it: 'condizionatore portatile', nl: 'mobiele airco', pl: 'klimatyzator przenośny', sv: 'portabel AC', us: 'portable air conditioner', ca: 'portable air conditioner' },
  'air-quality-monitor': { fr: "capteur de qualité de l'air", en: 'air quality monitor', de: 'Luftqualitätsmonitor', es: 'medidor de calidad del aire', it: "rilevatore della qualità dell'aria", nl: 'luchtkwaliteitsmeter', pl: 'czujnik jakości powietrza', sv: 'luftkvalitetsmätare', us: 'air quality monitor', ca: 'air quality monitor' },
  dehumidifier: { fr: 'déshumidificateur', en: 'dehumidifier', de: 'Luftentfeuchter', es: 'deshumidificador', it: 'deumidificatore', nl: 'luchtontvochtiger', pl: 'osuszacz powietrza', sv: 'avfuktare', us: 'dehumidifier', ca: 'dehumidifier' },
  fan: { fr: 'ventilateur', en: 'fan', de: 'Ventilator', es: 'ventilador', it: 'ventilatore', nl: 'ventilator', pl: 'wentylator', sv: 'fläkt', us: 'fan', ca: 'fan' },
  'bluetooth-tracker': { fr: 'traceur Bluetooth', en: 'Bluetooth tracker', de: 'Bluetooth-Tracker', es: 'localizador Bluetooth', it: 'localizzatore Bluetooth', nl: 'Bluetooth-tracker', pl: 'lokalizator Bluetooth', sv: 'Bluetooth-spårare', us: 'Bluetooth tracker', ca: 'Bluetooth tracker' },
  'electric-grill': { fr: 'barbecue électrique', en: 'electric barbecue', de: 'Elektrogrill', es: 'barbacoa eléctrica', it: 'barbecue elettrico', nl: 'elektrische barbecue', pl: 'grill elektryczny', sv: 'elgrill', us: 'electric grill', ca: 'electric grill' },
  'gas-grill': { fr: 'barbecue à gaz', en: 'gas barbecue', de: 'Gasgrill', es: 'barbacoa de gas', it: 'barbecue a gas', nl: 'gasbarbecue', pl: 'grill gazowy', sv: 'gasolgrill', us: 'gas grill', ca: 'gas grill' },
  'pellet-grill': { fr: 'barbecue à pellets', en: 'pellet grill', de: 'Pelletgrill', es: 'barbacoa de pellets', it: 'barbecue a pellet', nl: 'pelletbarbecue', pl: 'grill peletowy', sv: 'pelletsgrill', us: 'pellet grill', ca: 'pellet grill' },
  'energy-meter': { fr: "compteur d'énergie connecté", en: 'smart energy monitor', de: 'Energiemessgerät', es: 'medidor de consumo eléctrico', it: 'misuratore di consumi elettrici', nl: 'energiemeter', pl: 'miernik zużycia energii', sv: 'energimätare', us: 'home energy monitor', ca: 'home energy monitor' },
  'ev-charger': { fr: 'borne de recharge', en: 'EV charger', de: 'Wallbox', es: 'cargador para coche eléctrico', it: 'wallbox', nl: 'laadpaal', pl: 'ładowarka do samochodu elektrycznego', sv: 'laddbox', us: 'EV charger', ca: 'EV charger' },
  'home-battery': { fr: 'batterie domestique', en: 'home battery', de: 'Stromspeicher', es: 'batería doméstica', it: 'batteria di accumulo', nl: 'thuisbatterij', pl: 'magazyn energii', sv: 'hembatteri', us: 'home battery', ca: 'home battery' },
  'portable-power-station': { fr: 'station électrique portable', en: 'portable power station', de: 'Powerstation', es: 'estación de energía portátil', it: 'power station portatile', nl: 'draagbaar powerstation', pl: 'przenośna stacja zasilania', sv: 'portabel kraftstation', us: 'portable power station', ca: 'portable power station' },
  'micro-inverter': { fr: 'micro-onduleur', en: 'microinverter', de: 'Mikrowechselrichter', es: 'microinversor', it: 'microinverter', nl: 'micro-omvormer', pl: 'mikrofalownik', sv: 'mikroväxelriktare', us: 'microinverter', ca: 'microinverter' },
  'indoor-camera': { fr: 'caméra intérieure', en: 'indoor security camera', de: 'Innenkamera', es: 'cámara de interior', it: 'telecamera per interni', nl: 'binnencamera', pl: 'kamera wewnętrzna', sv: 'inomhuskamera', us: 'indoor camera', ca: 'indoor camera' },
  'outdoor-camera': { fr: 'caméra extérieure', en: 'outdoor security camera', de: 'Außenkamera', es: 'cámara de exterior', it: 'telecamera da esterno', nl: 'buitencamera', pl: 'kamera zewnętrzna', sv: 'utomhuskamera', us: 'outdoor camera', ca: 'outdoor camera' },
  'video-doorbell': { fr: 'sonnette vidéo', en: 'video doorbell', de: 'Video-Türklingel', es: 'timbre con cámara', it: 'videocitofono Wi-Fi', nl: 'videodeurbel', pl: 'dzwonek wideo', sv: 'videodörrklocka', us: 'video doorbell', ca: 'video doorbell' },
  'video-doorphone': { fr: 'interphone vidéo', en: 'video intercom', de: 'Video-Türsprechanlage', es: 'videoportero', it: 'videocitofono', nl: 'video-intercom', pl: 'wideodomofon', sv: 'videoporttelefon', us: 'video intercom', ca: 'video intercom' },
  'motion-sensor': { fr: 'détecteur de mouvement', en: 'motion sensor', de: 'Bewegungsmelder', es: 'sensor de movimiento', it: 'sensore di movimento', nl: 'bewegingssensor', pl: 'czujnik ruchu', sv: 'rörelsesensor', us: 'motion sensor', ca: 'motion sensor' },
  'presence-sensor': { fr: 'détecteur de présence', en: 'presence sensor', de: 'Präsenzmelder', es: 'sensor de presencia', it: 'sensore di presenza', nl: 'aanwezigheidssensor', pl: 'czujnik obecności', sv: 'närvarosensor', us: 'presence sensor', ca: 'presence sensor' },
  'leak-sensor': { fr: "détecteur de fuite d'eau", en: 'water leak detector', de: 'Wassermelder', es: 'detector de fugas de agua', it: "sensore di allagamento", nl: 'waterlekdetector', pl: 'czujnik zalania', sv: 'vattenlarm', us: 'water leak sensor', ca: 'water leak sensor' },
  'water-valve-controller': { fr: "vanne d'eau connectée", en: 'smart water valve controller', de: 'smarter Wasserventil-Antrieb', es: 'válvula de agua inteligente', it: "valvola smart per l'acqua", nl: 'slimme waterklepbediening', pl: 'inteligentny sterownik zaworu wody', sv: 'smart vattenventil', us: 'smart water shutoff valve', ca: 'smart water valve controller' },
  'irrigation-controller': { fr: "programmateur d'arrosage", en: 'watering controller', de: 'Bewässerungscomputer', es: 'programador de riego', it: 'centralina per irrigazione', nl: 'beregeningscomputer', pl: 'sterownik nawadniania', sv: 'bevattningsdator', us: 'irrigation controller', ca: 'irrigation controller' },
  'soil-sensor': { fr: "capteur d'humidité du sol", en: 'soil moisture sensor', de: 'Bodenfeuchtesensor', es: 'sensor de humedad del suelo', it: 'sensore di umidità del terreno', nl: 'bodemvochtsensor', pl: 'czujnik wilgotności gleby', sv: 'jordfuktighetssensor', us: 'soil moisture sensor', ca: 'soil moisture sensor' },
  'robot-lawn-mower': { fr: 'tondeuse robot', en: 'robot lawn mower', de: 'Mähroboter', es: 'robot cortacésped', it: 'robot tagliaerba', nl: 'robotmaaier', pl: 'robot koszący', sv: 'robotgräsklippare', us: 'robot lawn mower', ca: 'robot lawn mower' },
  'pool-robot': { fr: 'robot de piscine', en: 'robot pool cleaner', de: 'Poolroboter', es: 'robot limpiafondos', it: 'robot per piscina', nl: 'zwembadrobot', pl: 'robot basenowy', sv: 'poolrobot', us: 'robotic pool cleaner', ca: 'pool robot' },
  'smart-curtain': { fr: 'moteur de rideau connecté', en: 'smart curtain motor', de: 'smarter Vorhangantrieb', es: 'motor de cortina inteligente', it: 'motore per tende smart', nl: 'slimme gordijnmotor', pl: 'inteligentny napęd do zasłon', sv: 'smart gardinmotor', us: 'smart curtain motor', ca: 'smart curtain motor' },
  'motorized-blind': { fr: 'store motorisé', en: 'motorised blind', de: 'elektrisches Rollo', es: 'estor motorizado', it: 'tenda a rullo motorizzata', nl: 'gemotoriseerd rolgordijn', pl: 'roleta elektryczna', sv: 'motoriserad rullgardin', us: 'motorized blind', ca: 'motorized blind' },
  'smart-home-hub': { fr: 'box domotique', en: 'smart home hub', de: 'Smart-Home-Zentrale', es: 'hub domótico', it: 'hub domotico', nl: 'smart-home-hub', pl: 'hub smart home', sv: 'smarthemshubb', us: 'smart home hub', ca: 'smart home hub' },
  'smart-relay': { fr: 'module relais connecté', en: 'smart relay', de: 'smartes Relais', es: 'relé inteligente', it: 'relè smart', nl: 'slimme relaismodule', pl: 'inteligentny przekaźnik', sv: 'smart relä', us: 'smart relay', ca: 'smart relay' },
  'smart-switch': { fr: 'interrupteur connecté', en: 'smart light switch', de: 'smarter Schalter', es: 'interruptor inteligente', it: 'interruttore smart', nl: 'slimme schakelaar', pl: 'inteligentny włącznik', sv: 'smart strömbrytare', us: 'smart switch', ca: 'smart switch' },
  'outdoor-light': { fr: 'éclairage extérieur connecté', en: 'smart outdoor light', de: 'smarte Außenleuchte', es: 'luz exterior inteligente', it: 'luce smart da esterno', nl: 'slimme buitenlamp', pl: 'inteligentne oświetlenie zewnętrzne', sv: 'smart utomhuslampa', us: 'smart outdoor light', ca: 'smart outdoor light' },
  'steam-generator-iron': { fr: 'centrale vapeur', en: 'steam generator iron', de: 'Dampfbügelstation', es: 'centro de planchado', it: 'ferro da stiro con caldaia', nl: 'stoomgenerator', pl: 'stacja parowa', sv: 'ångstation', us: 'steam generator iron', ca: 'steam generator iron' },
  'steam-mop': { fr: 'balai vapeur', en: 'steam mop', de: 'Dampfbesen', es: 'mopa de vapor', it: 'scopa a vapore', nl: 'stoomreiniger', pl: 'mop parowy', sv: 'ångmopp', us: 'steam mop', ca: 'steam mop' },
  'wet-dry-vacuum': { fr: 'aspirateur laveur', en: 'wet and dry hard floor cleaner', de: 'Nass-Trocken-Sauger', es: 'aspiradora friegasuelos', it: 'lavapavimenti senza fili', nl: 'nat-droogstofzuiger', pl: 'odkurzacz myjący', sv: 'golvtvätt', us: 'wet-dry vacuum', ca: 'wet dry vacuum' },
  'wake-up-light': { fr: 'réveil lumière', en: 'wake-up light', de: 'Lichtwecker', es: 'despertador de luz', it: 'sveglia luminosa', nl: 'wake-up light', pl: 'budzik świetlny', sv: 'väckarklocka med ljus', us: 'sunrise alarm clock', ca: 'wake-up light' },
  'air-humidifier': { fr: "humidificateur d'air", en: 'humidifier', de: 'Luftbefeuchter', es: 'humidificador', it: 'umidificatore', nl: 'luchtbevochtiger', pl: 'nawilżacz powietrza', sv: 'luftfuktare', us: 'humidifier', ca: 'humidifier' },
  'alarm-system': { fr: 'alarme maison', en: 'home alarm system', de: 'Alarmanlage', es: 'sistema de alarma', it: 'sistema di allarme', nl: 'alarmsysteem', pl: 'alarm do domu', sv: 'hemlarm', us: 'home security system', ca: 'home alarm system' },
  'aroma-diffuser': { fr: "diffuseur d'huiles essentielles", en: 'essential oil diffuser', de: 'Aroma-Diffusor', es: 'difusor de aceites esenciales', it: 'diffusore di oli essenziali', nl: 'aromadiffuser', pl: 'dyfuzor olejków eterycznych', sv: 'doftspridare', us: 'essential oil diffuser', ca: 'essential oil diffuser' },
  dishwasher: { fr: 'lave-vaisselle', en: 'dishwasher', de: 'Geschirrspüler', es: 'lavavajillas', it: 'lavastoviglie', nl: 'vaatwasser', pl: 'zmywarka', sv: 'diskmaskin', us: 'dishwasher', ca: 'dishwasher' },
  'garage-door-opener': { fr: 'motorisation de porte de garage', en: 'garage door opener', de: 'Garagentorantrieb', es: 'motor para puerta de garaje', it: 'motore per porta da garage', nl: 'garagedeuropener', pl: 'napęd bramy garażowej', sv: 'garageportöppnare', us: 'garage door opener', ca: 'garage door opener' },
  'gate-opener': { fr: 'motorisation de portail', en: 'gate opener', de: 'Torantrieb', es: 'motor para puerta de parcela', it: 'motore per cancello', nl: 'poortopener', pl: 'napęd bramy wjazdowej', sv: 'grindöppnare', us: 'gate opener', ca: 'gate opener' },
  'led-strip': { fr: 'ruban LED connecté', en: 'smart LED strip', de: 'smarter LED-Streifen', es: 'tira LED inteligente', it: 'striscia LED smart', nl: 'slimme ledstrip', pl: 'inteligentna taśma LED', sv: 'smart LED-slinga', us: 'smart LED light strip', ca: 'smart LED strip' },
  'pool-analyzer': { fr: 'analyseur de piscine connecté', en: 'smart pool analyser', de: 'Pool-Wasseranalysator', es: 'analizador de piscina', it: 'analizzatore per piscina', nl: 'zwembadanalyser', pl: 'inteligentny analizator wody basenowej', sv: 'smart vattenanalysator för pool', us: 'smart pool monitor', ca: 'smart pool analyzer' },
  safe: { fr: 'coffre-fort électronique', en: 'electronic safe', de: 'Elektronik-Tresor', es: 'caja fuerte electrónica', it: 'cassaforte elettronica', nl: 'elektronische kluis', pl: 'sejf elektroniczny', sv: 'elektroniskt värdeskåp', us: 'electronic safe', ca: 'electronic safe' },
  'smart-speaker': { fr: 'enceinte connectée', en: 'smart speaker', de: 'smarter Lautsprecher', es: 'altavoz inteligente', it: 'altoparlante smart', nl: 'slimme speaker', pl: 'inteligentny głośnik', sv: 'smart högtalare', us: 'smart speaker', ca: 'smart speaker' },
  'steam-cleaner': { fr: 'nettoyeur vapeur', en: 'steam cleaner', de: 'Dampfreiniger', es: 'limpiador de vapor', it: 'pulitore a vapore', nl: 'stoomreiniger', pl: 'myjka parowa', sv: 'ångtvätt', us: 'steam cleaner', ca: 'steam cleaner' },
  'tumble-dryer': { fr: 'sèche-linge', en: 'tumble dryer', de: 'Wäschetrockner', es: 'secadora', it: 'asciugatrice', nl: 'wasdroger', pl: 'suszarka do ubrań', sv: 'torktumlare', us: 'clothes dryer', ca: 'clothes dryer' },
  'washer-dryer': { fr: 'lave-linge séchant', en: 'washer dryer', de: 'Waschtrockner', es: 'lavasecadora', it: 'lavasciuga', nl: 'was-droogcombinatie', pl: 'pralko-suszarka', sv: 'kombimaskin', us: 'washer-dryer combo', ca: 'washer-dryer combo' },
  'washing-machine': { fr: 'lave-linge', en: 'washing machine', de: 'Waschmaschine', es: 'lavadora', it: 'lavatrice', nl: 'wasmachine', pl: 'pralka', sv: 'tvättmaskin', us: 'washing machine', ca: 'washing machine' },
  'window-cleaning-robot': { fr: 'robot lave-vitre', en: 'window cleaning robot', de: 'Fensterputzroboter', es: 'robot limpiacristales', it: 'robot lavavetri', nl: 'ramenwasrobot', pl: 'robot do mycia okien', sv: 'fönsterputsrobot', us: 'window cleaning robot', ca: 'window cleaning robot' },
  'wine-cooler': { fr: 'cave à vin', en: 'wine cooler', de: 'Weinklimaschrank', es: 'vinoteca', it: 'cantinetta per vino', nl: 'wijnklimaatkast', pl: 'chłodziarka do wina', sv: 'vinkyl', us: 'wine fridge', ca: 'wine cooler' },
}

/** "Photo : © Ninja" — French typography keeps the space before the colon. */
const CREDIT_PREFIX: Record<Lang, { one: string; many: string }> = {
  fr: { one: 'Photo :', many: 'Photos :' },
  en: { one: 'Photo:', many: 'Photos:' },
  de: { one: 'Foto:', many: 'Fotos:' },
  es: { one: 'Foto:', many: 'Fotos:' },
  it: { one: 'Foto:', many: 'Foto:' },
  nl: { one: 'Foto:', many: "Foto's:" },
  pl: { one: 'Zdjęcie:', many: 'Zdjęcia:' },
  sv: { one: 'Foto:', many: 'Foto:' },
  us: { one: 'Photo:', many: 'Photos:' },
  ca: { one: 'Photo:', many: 'Photos:' },
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
  /** In-use, lifestyle and close-up photos, in display order (may be empty). */
  gallery?: readonly ProductGalleryPhoto[]
}

/** One gallery photo of a product, ready to render in one language. */
export interface ProductGalleryPhoto {
  /** File stem: the product photo id and its gallery number ("ninja-x-g1"). */
  stem: string
  role: ProductGalleryRole
  /** What the photo shows, localized. */
  alt: string
  /** Visible credit line, e.g. "Photo : © Ninja". */
  credit: string
  width: number
  height: number
}

export function productGalleryStem(id: string, n: number): string {
  return `${id}-g${n}`
}

export function productGalleryPath(stem: string, width: ProductGalleryWidth, format: ProductPhotoFormat): string {
  return `${PRODUCT_PHOTO_DIR}/${stem}-${width}.${format}`
}

/** `srcset` of a gallery photo in one format. */
export function productGallerySrcSet(stem: string, format: ProductPhotoFormat): string {
  return PRODUCT_GALLERY_WIDTHS.map((w) => `${productGalleryPath(stem, w, format)} ${w}w`).join(', ')
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
  return productPhotoAltForName(`${brand} ${model}`, category, lang)
}

/** Alt text for a photo shown under another name of the same product (its North-American name). */
export function productPhotoAltForName(name: string, category: ProductPhotoCategory, lang: Lang): string {
  return `${name} – ${PRODUCT_PHOTO_CATEGORY_LABELS[category][lang]} | Homenura`
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
