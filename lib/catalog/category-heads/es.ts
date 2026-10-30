import type { CategoryHeads } from './types'

/**
 * Spain (/es).
 * Keywords follow what Spanish buyers type (seo-etude-it-es.md and Search
 * Console, 30/10/2026): "mejor + producto" with the everyday name
 * ("cafetera superautomática", "robot aspirador y friegasuelos", "radiador
 * eléctrico", "cargador de coche eléctrico", "vaporeta"), rarely
 * "inteligente/conectado". Strong modifiers: "calidad-precio", "comparativa",
 * "sin cuotas". Home Nura compares on documentation, never claims a lab.
 */
export const ES_HEADS: CategoryHeads = {
  // ---------------------------------------------------------------- Cocina
  "airfryers": {
    keyword: "mejor freidora de aire",
    title: "Mejor freidora de aire calidad-precio 2026: comparativa",
    h1: "Las mejores freidoras de aire de 2026: comparativa y calidad-precio",
    description: "Freidoras de aire comparadas: Philips, Cosori y Xiaomi (calidad-precio). Capacidad, doble cesta, consumo de luz, limpieza y app. 3 favoritos y FAQ.",
  },
  "multicuiseurs": {
    keyword: "mejor olla programable",
    title: "Mejor olla programable 2026: multicocinas comparadas",
    h1: "Las mejores ollas programables y multicocinas de 2026",
    description: "Ollas programables y multicocinas comparadas: Moulinex Cookeo, Ninja Foodi e Instant Pot. Cocción a presión, capacidad, recetas en la app y FAQ.",
  },
  "cafetieres": {
    keyword: "mejor cafetera superautomática",
    title: "Mejor cafetera superautomática 2026: comparativa y guía",
    h1: "Las mejores cafeteras superautomáticas de 2026: comparativa y guía de compra",
    description: "Cafeteras superautomáticas de grano comparadas: De'Longhi, Philips y Krups. Molinillo, sistema de leche, limpieza y coste por taza. 3 favoritos y FAQ.",
  },
  "balances": {
    keyword: "báscula de cocina digital",
    title: "Mejor báscula de cocina digital 2026: con app nutricional",
    h1: "Las mejores básculas de cocina digitales con app nutricional de 2026",
    description: "Básculas de cocina digitales comparadas: Etekcity y Renpho calculan calorías y nutrientes en la app; la Beurer XL pesa grandes cantidades. Criterios y FAQ.",
  },
  "thermometres-viande": {
    keyword: "termómetro de carne",
    title: "Mejor termómetro de carne 2026: inalámbrico y Bluetooth",
    h1: "Los mejores termómetros de carne inalámbricos y Bluetooth de 2026",
    description: "Termómetros de carne inalámbricos comparados: MEATER e Inkbird. Alcance, número de sondas, app y avisos para horno, barbacoa y ahumado. 3 favoritos y FAQ.",
  },
  "prises-connectees": {
    keyword: "mejor enchufe inteligente",
    title: "Mejor enchufe inteligente 2026: wifi y medidor de consumo",
    h1: "Los mejores enchufes inteligentes wifi de 2026, con medidor de consumo",
    description: "Enchufes inteligentes wifi comparados: TP-Link Tapo y Meross. Medición de consumo, amperaje, Alexa, Google Home y Apple Home. Nuestros 3 favoritos y FAQ.",
  },

  // ------------------------------------------------------ Energía y domótica
  "thermostats": {
    keyword: "mejor termostato wifi",
    title: "Mejor termostato wifi 2026: comparativa calidad-precio",
    h1: "Los mejores termostatos wifi e inteligentes de 2026 para la calefacción",
    description: "Termostatos wifi e inteligentes comparados: tado, Netatmo y Honeywell. Caldera, bomba de calor, OpenTherm y ahorro en calefacción. 3 favoritos y FAQ.",
  },
  "compteurs-energie": {
    keyword: "medidor de consumo eléctrico",
    title: "Mejor medidor de consumo eléctrico 2026: para toda la casa",
    h1: "Los mejores medidores de consumo eléctrico wifi para toda la casa en 2026",
    description: "Medidores de consumo eléctrico wifi comparados: los Shelly que se instalan en el cuadro con pinzas. Monofásico o trifásico, placas solares y app. Con FAQ.",
  },
  "solaire-balcon": {
    keyword: "kit solar balcón",
    title: "Kit solar balcón 2026: los mejores kits enchufables",
    h1: "Los mejores kits solares de balcón enchufables de 2026, con y sin batería",
    description: "Placas solares de balcón enchufables comparadas: Hoymiles, Anker SOLIX y EcoFlow. Potencia de 800 W, batería, montaje en la barandilla, criterios y FAQ.",
  },
  "batteries-domestiques": {
    keyword: "batería solar para casa",
    title: "Mejor batería solar para casa 2026: comparativa",
    h1: "Las mejores baterías solares para casa de 2026: autoconsumo y respaldo",
    description: "Baterías solares domésticas comparadas: Anker SOLIX, Marstek y Tesla Powerwall. Capacidad, precio por kWh, respaldo ante apagones e instalación. Con FAQ.",
  },
  "eclairage-connecte": {
    keyword: "mejor bombilla inteligente",
    title: "Mejor bombilla inteligente 2026: wifi, colores y tiras LED",
    h1: "Las mejores bombillas inteligentes y tiras LED de 2026",
    description: "Bombillas inteligentes y tiras LED comparadas: Philips Hue, TP-Link Tapo y Govee. Wifi o puente, E27, colores, Alexa y Google Home. 3 favoritos y FAQ.",
  },
  "interrupteurs": {
    keyword: "mejor interruptor inteligente",
    title: "Mejor interruptor inteligente 2026: con y sin neutro",
    h1: "Los mejores interruptores inteligentes de 2026: de pared y módulos ocultos",
    description: "Interruptores inteligentes comparados: Aqara, Shelly y Philips Hue. Cable neutro, módulos tras el mecanismo actual, Zigbee o wifi, Alexa y Google. Con FAQ.",
  },
  "volets-stores": {
    keyword: "motor para persiana",
    title: "Mejor motor para persiana 2026: radio, wifi y solar",
    h1: "Los mejores motores para persianas y estores de 2026, con app y horarios",
    description: "Motores para persianas y estores comparados: Somfy (io y RTS) y VELUX solar. Radio o wifi, app, horarios, sensor de sol y Alexa. 3 favoritos y FAQ.",
  },
  "capteurs-qualite-air": {
    keyword: "medidor de calidad del aire",
    title: "Mejor medidor de calidad del aire 2026: CO2 y partículas",
    h1: "Los mejores medidores de calidad del aire y de CO2 de 2026",
    description: "Medidores de calidad del aire comparados: Airthings, Netatmo y Aranet4. CO2, partículas PM2.5, COV, radón, precisión y app. Nuestros 3 favoritos y FAQ.",
  },
  "detecteurs-fuite-eau": {
    keyword: "detector de fugas de agua",
    title: "Mejor detector de fugas de agua 2026: sensores de inundación",
    h1: "Los mejores detectores de fugas de agua y sensores de inundación de 2026",
    description: "Detectores de fugas de agua comparados: Aqara y Shelly. Aviso en el móvil, sirena, corte automático con válvula, Zigbee o wifi y pilas. 3 favoritos y FAQ.",
  },
  "hubs-domotique": {
    keyword: "mejor hub domótico",
    title: "Mejor hub domótico 2026: centralitas Matter y Zigbee",
    h1: "Los mejores hubs y centralitas domóticas de 2026: Matter, Zigbee y Thread",
    description: "Hubs domóticos comparados: Homey, Aqara y Home Assistant. Matter, Zigbee, Thread, automatizaciones locales y facilidad de uso. Nuestros 3 favoritos y FAQ.",
  },
  "bornes-recharge-ve": {
    keyword: "cargador de coche eléctrico",
    title: "Mejor cargador de coche eléctrico 2026: wallbox para casa",
    h1: "Los mejores cargadores de coche eléctrico para casa de 2026 (wallbox)",
    description: "Cargadores wallbox para casa comparados: Wallbox, Easee y Zaptec. 7,4 o 22 kW, monofásico o trifásico, app, contador MID e instalación. 3 favoritos y FAQ.",
  },

  // -------------------------------------------------------------- Seguridad
  "sonnettes-video": {
    keyword: "videoportero wifi",
    title: "Mejor videoportero wifi 2026: timbre con cámara inalámbrico",
    h1: "Los mejores videoporteros wifi y timbres con cámara de 2026",
    description: "Timbres con cámara y videoporteros wifi comparados: Eufy, TP-Link Tapo y Aqara. Batería o cable, 2K, grabación local sin cuotas y Apple Home. Con FAQ.",
  },
  "cameras-interieur": {
    keyword: "cámara de vigilancia interior",
    title: "Mejor cámara de vigilancia interior 2026: wifi y 360°",
    h1: "Las mejores cámaras de vigilancia wifi para interior de 2026",
    description: "Cámaras de vigilancia wifi para interior comparadas: Eufy, TP-Link Tapo y Reolink. Giro 360°, 2K, grabación local sin cuotas y mascotas. 3 favoritos y FAQ.",
  },
  "cameras-exterieur": {
    keyword: "cámara exterior",
    title: "Mejor cámara exterior de vigilancia 2026: wifi y sin cuotas",
    h1: "Las mejores cámaras de vigilancia exterior de 2026: wifi, solares y PoE",
    description: "Cámaras de vigilancia exterior comparadas: eufy, TP-Link Tapo y Reolink. Placa solar, wifi o PoE, visión nocturna y grabación sin cuotas. Con FAQ.",
  },
  "serrures-connectees": {
    keyword: "cerradura inteligente",
    title: "Mejor cerradura inteligente 2026: comparativa calidad-precio",
    h1: "Las mejores cerraduras inteligentes de 2026 para la puerta de casa",
    description: "Cerraduras inteligentes comparadas: Nuki y Aqara. Montaje sin obras sobre el bombín, huella, teclado, Matter y autonomía. Nuestros 3 favoritos y FAQ.",
  },
  "alarmes": {
    keyword: "alarma para casa sin cuotas",
    title: "Mejor alarma para casa sin cuotas 2026: comparativa",
    h1: "Las mejores alarmas para casa sin cuota mensual de 2026",
    description: "Alarmas para casa sin cuota mensual obligatoria comparadas: Ajax, Somfy y Ring. Kits 4G, sensores, sirena y avisos en el móvil, que instalas tú. Con FAQ.",
  },
  "detecteurs-fumee-co": {
    keyword: "detector de humo inteligente",
    title: "Mejor detector de humo inteligente 2026: wifi y monóxido",
    h1: "Los mejores detectores de humo y de monóxido de carbono inteligentes de 2026",
    description: "Detectores de humo y de monóxido de carbono wifi comparados: Netatmo y X-Sense. EN 14604, aviso en el móvil, interconexión y pila de 10 años. Con FAQ.",
  },
  "detecteurs-mouvement": {
    keyword: "sensor de movimiento",
    title: "Mejor sensor de movimiento 2026: para domótica y presencia",
    h1: "Los mejores sensores de movimiento y de presencia para domótica de 2026",
    description: "Sensores de movimiento y de presencia comparados: Aqara e IKEA. Zigbee, Matter o wifi, radar mmWave, luz ambiente y automatizaciones. 3 favoritos y FAQ.",
  },
  "trackers-objets": {
    keyword: "localizador de llaves",
    title: "Mejor localizador de llaves y objetos 2026: iPhone y Android",
    h1: "Los mejores localizadores bluetooth de 2026 para llaves, maletas y bolsos",
    description: "Localizadores bluetooth comparados: Apple AirTag, Chipolo y Ugreen. Red Buscar de Apple o Encontrar de Google, alcance, pila y sonido. 3 favoritos y FAQ.",
  },
  "interphones": {
    keyword: "kit de videoportero",
    title: "Mejor kit de videoportero 2026: con monitor, wifi o 2 hilos",
    h1: "Los mejores videoporteros de 2026 para casa y piso, con monitor y app",
    description: "Videoporteros comparados: Philips y BTicino con monitor, y Ring Intercom para llevar el telefonillo del piso al móvil. 2 hilos, wifi y apertura de puerta.",
  },
  "coffres-forts-connectes": {
    keyword: "caja fuerte para casa",
    title: "Mejor caja fuerte para casa 2026: electrónica y con app",
    h1: "Las mejores cajas fuertes electrónicas para casa de 2026",
    description: "Cajas fuertes para casa comparadas: Burg-Wächter y Yale. Cerradura electrónica o app, resistencia, anclaje a pared o suelo y protección contra incendios.",
  },

  // ---------------------------------------------------------- Clima y aire
  "purificateurs-air": {
    keyword: "mejor purificador de aire",
    title: "Mejor purificador de aire 2026: filtro HEPA y calidad-precio",
    h1: "Los mejores purificadores de aire con filtro HEPA de 2026",
    description: "Purificadores de aire comparados: Levoit y Blueair. Filtro HEPA, CADR según los metros cuadrados, ruido nocturno, alergias y consumo. 3 favoritos y FAQ.",
  },
  "humidificateurs": {
    keyword: "mejor humidificador",
    title: "Mejor humidificador 2026: comparativa y cuál elegir",
    h1: "Los mejores humidificadores de 2026: comparativa y guía para elegir",
    description: "Humidificadores comparados: Boneco, Levoit y Dyson. Ultrasónico o evaporativo, higiene, depósito, ruido para el dormitorio y app. 3 favoritos y FAQ.",
  },
  "deshumidificateurs": {
    keyword: "mejor deshumidificador",
    title: "Mejor deshumidificador 2026: comparativa calidad-precio",
    h1: "Los mejores deshumidificadores de 2026 contra la humedad y el moho",
    description: "Deshumidificadores comparados: Meaco, Comfee y Xiaomi. Litros al día, consumo, ruido, secado de ropa y moho en casa. Nuestros 3 favoritos, criterios y FAQ.",
  },
  "climatiseurs-mobiles": {
    keyword: "mejor aire acondicionado portátil",
    title: "Mejor aire acondicionado portátil 2026: calidad-precio",
    h1: "Los mejores aires acondicionados portátiles de 2026: comparativa y consumo",
    description: "Aires acondicionados portátiles comparados: Midea, incluido el PortaSplit sin obras, y Trotec. Frigorías, consumo, ruido y tubo de salida. Con FAQ.",
  },
  "ventilateurs": {
    keyword: "ventilador de pie",
    title: "Mejor ventilador de pie 2026: sin aspas y silencioso",
    h1: "Los mejores ventiladores de pie y sin aspas de 2026, silenciosos y con app",
    description: "Ventiladores de pie y sin aspas comparados: Dyson y Xiaomi. Ruido para dormir, mando, app, consumo y modelos 3 en 1 con purificador y calefactor. Con FAQ.",
  },
  "chauffages-appoint": {
    keyword: "radiador eléctrico",
    title: "Mejor radiador eléctrico 2026: calefactores y consumo real",
    h1: "Los mejores radiadores eléctricos y calefactores de 2026: consumo real",
    description: "Radiadores eléctricos, emisores térmicos y calefactores comparados: consumo real por hora, termostato, wifi y el mito del bajo consumo. 3 favoritos y FAQ.",
  },
  "stations-meteo": {
    keyword: "estación meteorológica",
    title: "Mejor estación meteorológica 2026: wifi para casa",
    h1: "Las mejores estaciones meteorológicas wifi para casa de 2026",
    description: "Estaciones meteorológicas wifi comparadas: Ecowitt, Bresser y Netatmo. Sensores de lluvia y viento, pantalla, app y Weather Underground. Con FAQ.",
  },
  "diffuseurs": {
    keyword: "difusor de aromas",
    title: "Mejor difusor de aromas 2026: wifi y aceites esenciales",
    h1: "Los mejores difusores de aromas y aceites esenciales con wifi de 2026",
    description: "Difusores de aromas comparados: ASAKUKI, Maxcio y un nebulizador sin agua. Depósito, autonomía, ruido, luz, app y Alexa para aceites esenciales. Con FAQ.",
  },
  "reveils-lumiere": {
    keyword: "despertador de luz",
    title: "Mejor despertador de luz 2026: simulador de amanecer",
    h1: "Los mejores despertadores de luz con simulador de amanecer de 2026",
    description: "Despertadores de luz comparados: Philips y Lumie. Simulación de amanecer y atardecer, intensidad, sonidos, radio y luz para el invierno. Con FAQ.",
  },
  "rideaux-automatises": {
    keyword: "cortinas automáticas",
    title: "Cortinas automáticas 2026: los mejores motores sin obras",
    h1: "Cortinas automáticas: los mejores motores para cortinas y estores de 2026",
    description: "Motores para cortinas automáticas comparados: SwitchBot, Aqara y Eve. Montaje en la barra o el riel sin obras, horarios, Matter, Alexa y batería. Con FAQ.",
  },

  // --------------------------------------------------------------- Limpieza
  "aspirateurs-robots": {
    keyword: "mejor robot aspirador",
    title: "Mejor robot aspirador 2026: calidad-precio y mascotas",
    h1: "Los mejores robots aspiradores de 2026: comparativa calidad-precio",
    description: "Robots aspiradores comparados: Roborock y Dreame. Navegación LiDAR, succión, pelo de mascotas, base de autovaciado y alfombras. Nuestros 3 favoritos y FAQ.",
  },
  "aspirateurs-laveurs": {
    keyword: "robot aspirador y friegasuelos",
    title: "Mejor robot aspirador y friegasuelos 2026: comparativa",
    h1: "Los mejores robots aspiradores y friegasuelos de 2026, con base autolimpiable",
    description: "Robots aspiradores y friegasuelos comparados: Dreame y Roborock. Mopas rotativas, base autolimpiable con secado, suelos duros y alfombras. Con FAQ.",
  },
  "laveurs-vitres": {
    keyword: "robot limpiacristales",
    title: "Mejor robot limpiacristales 2026: comparativa calidad-precio",
    h1: "Los mejores robots limpiacristales de 2026 para ventanas y mamparas",
    description: "Robots limpiacristales comparados: Ecovacs Winbot, Cecotec Conga y Hobot. Cuerda de seguridad, pulverizador, cristales sin marco y ventanales. Con FAQ.",
  },
  "aspirateurs-balais": {
    keyword: "aspiradora sin cable",
    title: "Mejor aspiradora sin cable 2026: escoba y de mano",
    h1: "Las mejores aspiradoras escoba sin cable de 2026: comparativa calidad-precio",
    description: "Aspiradoras sin cable comparadas: Dyson, Rowenta y Samsung. Potencia de succión, autonomía real, base de autovaciado, peso y pelo de mascotas. Con FAQ.",
  },
  "nettoyeurs-vapeur": {
    keyword: "vaporeta",
    title: "Mejor vaporeta 2026: limpiadoras y mopas de vapor",
    h1: "Las mejores vaporetas y mopas de vapor de 2026 para suelos, baños y cocina",
    description: "Vaporetas y mopas de vapor comparadas: Kärcher, Black+Decker y Bissell. Presión, depósito, calentamiento, accesorios y suelos de madera. 3 favoritos y FAQ.",
  },
  "fers-centrales-vapeur": {
    keyword: "centro de planchado",
    title: "Mejor centro de planchado 2026: planchas con calderín",
    h1: "Los mejores centros de planchado y planchas de vapor de 2026",
    description: "Centros de planchado comparados: Philips y Laurastar. Presión de vapor, golpe de vapor, peso, sistema antical y planchado sin quemar la ropa. Con FAQ.",
  },
  "lave-vaisselle-connectes": {
    keyword: "mejor lavavajillas",
    title: "Mejor lavavajillas 2026: comparativa calidad-precio",
    h1: "Los mejores lavavajillas de 2026: silenciosos, eficientes y con wifi",
    description: "Lavavajillas comparados: Bosch, Haier y Miele. Consumo de agua y luz, ruido en dB, dosificación automática, wifi y fiabilidad. Nuestros 3 favoritos y FAQ.",
  },
  "lave-linge-connectes": {
    keyword: "mejor lavadora",
    title: "Mejor lavadora 2026: comparativa y lavadoras secadoras",
    h1: "Las mejores lavadoras y lavadoras secadoras de 2026: comparativa",
    description: "Lavadoras y lavadoras secadoras comparadas: Bosch, Haier y LG. Capacidad en kg, consumo, centrifugado, ruido, dosificación automática y wifi. Con FAQ.",
  },

  // --------------------------------------------------------- Jardín y exterior
  "tondeuses-robots": {
    keyword: "mejor robot cortacésped",
    title: "Mejor robot cortacésped 2026: sin cable perimetral",
    h1: "Los mejores robots cortacésped sin cable perimetral de 2026",
    description: "Robots cortacésped sin cable perimetral comparados: Ecovacs, Segway Navimow y Mammotion. GPS RTK, pendientes, superficie en m² y app. 3 favoritos y FAQ.",
  },
  "arrosage-connecte": {
    keyword: "programador de riego",
    title: "Mejor programador de riego automático 2026: wifi y app",
    h1: "Los mejores programadores de riego automático con app de 2026",
    description: "Programadores de riego comparados: Gardena smart y Eve Aqua. Para grifo o riego enterrado, app, aviso de lluvia, goteo y control a distancia. Con FAQ.",
  },
  "eclairage-exterieur": {
    keyword: "luces solares de exterior",
    title: "Mejores luces solares de exterior 2026: jardín y fachada",
    h1: "Las mejores luces solares y de jardín de 2026, con app y sensor de movimiento",
    description: "Luces solares de exterior comparadas: eufy con cámara, guirnaldas Govee y focos Philips Hue para el jardín. Sensor de movimiento, autonomía y app. Con FAQ.",
  },
  "portails-garages": {
    keyword: "motor para puerta de garaje",
    title: "Mejor motor para puerta de garaje 2026: con app y mando",
    h1: "Los mejores motores para puertas de garaje y batientes de 2026, con app",
    description: "Motores para puertas de garaje y batientes comparados: Somfy, Hörmann y el módulo wifi de Meross para tu motor actual. Apertura desde el móvil y FAQ.",
  },
  "robots-piscine": {
    keyword: "robot de piscina",
    title: "Mejor robot de piscina 2026: limpiafondos con y sin cable",
    h1: "Los mejores robots limpiafondos de piscina de 2026, con y sin cable",
    description: "Robots limpiafondos de piscina comparados: Dolphin y Beatbot. Fondo, paredes y línea de agua, filtros, autonomía sin cable y tamaño de piscina. Con FAQ.",
  },
  "barbecues-connectes": {
    keyword: "barbacoa de pellets",
    title: "Barbacoa de pellets, de gas o eléctrica 2026: las mejores",
    h1: "Las mejores barbacoas con app de 2026: de pellets, de gas y eléctricas",
    description: "Barbacoas de pellets, de gas y eléctricas comparadas: Weber y Ninja Woodfire (ideal para el balcón). Temperatura desde el móvil, sondas y ahumado. Con FAQ.",
  },
  "stations-recharge-outdoor": {
    keyword: "estación de energía portátil",
    title: "Mejor estación de energía portátil 2026: camping y apagones",
    h1: "Las mejores estaciones de energía portátiles de 2026 para camping y apagones",
    description: "Estaciones de energía portátiles comparadas: EcoFlow y Bluetti. Capacidad en Wh, potencia, carga solar, peso y uso como SAI en casa. Nuestros 3 favoritos.",
  },
  "alarmes-exterieures": {
    keyword: "detector de movimiento exterior",
    title: "Mejor detector de movimiento exterior 2026: alarma y sirena",
    h1: "Las mejores alarmas de exterior de 2026: detectores, sirenas y sensores",
    description: "Detectores de movimiento y sirenas de exterior comparados: Ajax, Ring y Philips Hue. Inmunidad a mascotas, alcance, alarma o encendido de luces. Con FAQ.",
  },
}
