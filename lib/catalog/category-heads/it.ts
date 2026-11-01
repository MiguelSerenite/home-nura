import type { CategoryHeads } from './types'

/**
 * Italy. Keywords follow what Italian buyers type (seo-etude-it-es.md and
 * Search Console, 30/10/2026): "miglior/migliore + product" and the everyday
 * product name, never "intelligente/connesso" ("termostato wifi",
 * "fotovoltaico da balcone", "wallbox", "presa smart", "robot aspirapolvere
 * e lavapavimenti", "stufa elettrica", "antifurto casa"…). "Miglior" before
 * a consonant or a vowel, "migliore" before s + consonant (scopa, stufa,
 * stazione, sveglia). Titles say "classifica" / "confronto": Home Nura
 * compares on documentation and never claims a lab session.
 */
export const IT_HEADS: CategoryHeads = {
  // ------------------------------------------------------------- Cucina
  "airfryers": {
    keyword: "miglior friggitrice ad aria",
    title: "Miglior friggitrice ad aria 2026: classifica e opinioni",
    h1: "Le migliori friggitrici ad aria del 2026: classifica e guida all'acquisto",
    description: "Le 3 friggitrici ad aria da scegliere nel 2026: Philips XXL, Xiaomi qualità prezzo e Cosori per 4 persone. Capienza, uno o due cestelli, consumi e FAQ.",
  },
  "multicuiseurs": {
    keyword: "miglior multicooker",
    title: "Miglior multicooker 2026: classifica e guida all'acquisto",
    h1: "I migliori multicooker del 2026: pentole multifunzione a confronto",
    description: "Multicooker e pentole a pressione elettriche a confronto: Moulinex Cookeo con Wi-Fi, Ninja Foodi 15 in 1, Instant Pot qualità prezzo. Capienza e FAQ.",
  },
  // Indexed in this market (categories.ts indexableIn): the robot cooker guide's models.
  "robots-multifonctions": {
    keyword: "robot da cucina",
    title: "Miglior robot da cucina 2026: Bimby e alternative",
    h1: "I migliori robot da cucina 2026: il Bimby TM7 e le alternative",
    description: "Bimby TM7 (Thermomix), Moulinex i-Companion Touch XL, Magimix Cook Expert, Kenwood Cooking Chef XL e Cecotec Mambo a confronto: calore, boccale e app.",
  },
  "cafetieres": {
    keyword: "miglior macchina da caffè automatica",
    title: "Miglior macchina da caffè automatica 2026: classifica",
    h1: "Le migliori macchine da caffè automatiche del 2026, superautomatiche a chicchi",
    description: "Macchine da caffè superautomatiche a chicchi a confronto: De'Longhi Magnifica Evo, Philips LatteGo facile da pulire, Krups per la famiglia. Guida e FAQ.",
  },
  "balances": {
    keyword: "miglior bilancia da cucina",
    title: "Miglior bilancia da cucina 2026: con app e calcolo calorie",
    h1: "Le migliori bilance da cucina con app del 2026: calorie e valori nutrizionali",
    description: "Bilance da cucina digitali a confronto: Etekcity e Renpho calcolano calorie e macronutrienti via app, Beurer XL pesa grandi quantità. Criteri e FAQ.",
  },
  "thermometres-viande": {
    keyword: "miglior termometro per carne",
    title: "Miglior termometro per carne 2026: wireless e Bluetooth",
    h1: "I migliori termometri per carne wireless del 2026: sonde Bluetooth a confronto",
    description: "Termometri per carne senza fili a confronto: Meater Pro e Meater Plus per arrosti e barbecue, Inkbird a 4 sonde per affumicare. Portata, app e FAQ.",
  },
  "prises-connectees": {
    keyword: "presa smart",
    title: "Miglior presa smart WiFi 2026: con controllo dei consumi",
    h1: "Le migliori prese smart Wi-Fi del 2026, con controllo dei consumi",
    description: "Prese smart Wi-Fi a confronto: TP-Link Tapo con controllo dei consumi, Meross per Apple Casa, Tapo in confezione da 4. Alexa, Google, senza hub e FAQ.",
  },

  // -------------------------------------------------- Energia e domotica
  "thermostats": {
    keyword: "termostato wifi",
    title: "Miglior termostato WiFi e cronotermostato smart 2026",
    h1: "I migliori termostati Wi-Fi e cronotermostati smart del 2026",
    description: "Termostati Wi-Fi e cronotermostati smart a confronto: tado per pompa di calore, Netatmo qualità prezzo, Honeywell Home in OpenTherm. Caldaia, app e FAQ.",
  },
  "compteurs-energie": {
    keyword: "misuratore consumi elettrici",
    title: "Miglior misuratore consumi elettrici 2026: classifica",
    h1: "I migliori misuratori di consumi elettrici del 2026 per casa e fotovoltaico",
    description: "Misuratori dei consumi elettrici a confronto: Shelly Pro 3EM per trifase e fotovoltaico, Shelly EM qualità prezzo. Installazione nel quadro, app e FAQ.",
  },
  "solaire-balcon": {
    keyword: "fotovoltaico da balcone",
    title: "Miglior fotovoltaico da balcone 2026: kit plug and play",
    h1: "Fotovoltaico da balcone 2026: i migliori microinverter e sistemi di accumulo",
    description: "Fotovoltaico da balcone plug and play a confronto: microinverter Hoymiles da 800 W, Anker SOLIX con accumulo, EcoFlow per balconi piccoli. Guida e FAQ.",
  },
  "batteries-domestiques": {
    keyword: "batteria di accumulo",
    title: "Miglior batteria di accumulo per fotovoltaico 2026",
    h1: "Le migliori batterie di accumulo del 2026, dal balcone a tutta la casa",
    description: "Batterie di accumulo per casa a confronto: Anker SOLIX per il balcone, Marstek miglior capacità per prezzo, Tesla Powerwall per tutta la casa. FAQ.",
  },
  "eclairage-connecte": {
    keyword: "lampadina smart",
    title: "Miglior lampadina smart 2026: E27, senza hub e strisce LED",
    h1: "Le migliori lampadine smart del 2026: E27, senza hub e strisce LED",
    description: "Lampadine smart e strisce LED a confronto: Philips Hue per l'ecosistema completo, Tapo senza hub, Govee RGB per l'atmosfera. Attacco E27, Alexa e FAQ.",
  },
  "interrupteurs": {
    keyword: "interruttore smart",
    title: "Miglior interruttore smart 2026: classifica e confronto",
    h1: "I migliori interruttori smart del 2026: da parete, moduli relè e telecomandi",
    description: "Interruttori smart a confronto: Aqara da parete, modulo Shelly qualità prezzo da mettere dietro il frutto, Philips Hue Tap Dial per le lampadine. FAQ.",
  },
  "volets-stores": {
    keyword: "motore per tapparelle",
    title: "Miglior motore per tapparelle 2026: smart, radio e solare",
    h1: "I migliori motori per tapparelle del 2026: radio, app e tapparelle solari",
    description: "Motori per tapparelle e tende a confronto: Somfy Oximo io e RTS da comandare con app o telecomando, tapparella solare Velux per finestre da tetto. FAQ.",
  },
  "capteurs-qualite-air": {
    keyword: "misuratore qualità aria",
    title: "Miglior misuratore qualità aria e CO2 2026: confronto",
    h1: "I migliori misuratori di CO2 e qualità dell'aria del 2026 per la casa",
    description: "Misuratori di CO2, radon, COV e polveri sottili a confronto: Airthings, Netatmo qualità prezzo, Aranet4 portatile per una CO2 affidabile. Criteri e FAQ.",
  },
  "detecteurs-fuite-eau": {
    keyword: "sensore allagamento",
    title: "Miglior sensore allagamento 2026: perdite d'acqua e valvola",
    h1: "I migliori sensori di allagamento del 2026, con valvola di chiusura automatica",
    description: "Sensori di allagamento a confronto: Aqara con hub, Shelly Flood Wi-Fi senza hub e la valvola Aqara che chiude l'acqua da sola. Batteria, avvisi e FAQ.",
  },
  "hubs-domotique": {
    keyword: "hub domotico",
    title: "Miglior hub domotico 2026: compatibilità Matter e Zigbee",
    h1: "I migliori hub domotici del 2026 per unire Matter, Zigbee e Wi-Fi",
    description: "Hub per la domotica a confronto: Homey Pro, Aqara M3 qualità prezzo e Home Assistant Green per gli appassionati. Matter, Zigbee, automazioni e FAQ.",
  },
  "bornes-recharge-ve": {
    keyword: "wallbox",
    title: "Miglior wallbox per auto elettrica 2026: classifica",
    h1: "Le migliori wallbox del 2026 per ricaricare l'auto elettrica a casa",
    description: "Wallbox per la ricarica a casa a confronto: Wallbox Pulsar Max, Easee qualità prezzo, Zaptec da 22 kW con contatore MID. Potenza, app, installazione e FAQ.",
  },

  // ---------------------------------------------------------- Sicurezza
  "sonnettes-video": {
    keyword: "videocitofono wifi",
    title: "Miglior videocitofono WiFi senza fili 2026: classifica",
    h1: "I migliori videocitofoni Wi-Fi senza fili del 2026: campanelli con telecamera",
    description: "Campanelli video Wi-Fi a batteria a confronto: Eufy con memoria locale, Tapo qualità prezzo, Aqara per Apple Casa. Visione notturna, abbonamenti e FAQ.",
  },
  "cameras-interieur": {
    keyword: "telecamera wifi da interno",
    title: "Miglior telecamera WiFi da interno 2026: casa e animali",
    h1: "Le migliori telecamere Wi-Fi da interno del 2026 per la casa e gli animali",
    description: "Telecamere Wi-Fi da interno a confronto: Eufy motorizzata a 360°, Tapo qualità prezzo, Reolink con registrazione su NAS. Privacy, abbonamenti e FAQ.",
  },
  "cameras-exterieur": {
    keyword: "telecamera esterna",
    title: "Miglior telecamera esterna WiFi 2026: senza abbonamento",
    h1: "Le migliori telecamere esterne del 2026: Wi-Fi, solari e PoE senza abbonamento",
    description: "Telecamere esterne a confronto: eufyCam con pannello solare, Tapo Wi-Fi qualità prezzo, Reolink PoE via cavo. Registrazione locale senza abbonamento e FAQ.",
  },
  "serrures-connectees": {
    keyword: "serratura smart",
    title: "Miglior serratura smart 2026: anche per porta blindata",
    h1: "Le migliori serrature smart ed elettroniche del 2026, anche per porta blindata",
    description: "Serrature smart a confronto: Nuki Pro e Nuki Go montate sul cilindro europeo, Aqara con impronta digitale per aprire senza telefono. Compatibilità e FAQ.",
  },
  "alarmes": {
    keyword: "antifurto casa",
    title: "Miglior antifurto casa wireless 2026: senza abbonamento",
    h1: "I migliori antifurto per la casa del 2026: wireless e senza abbonamento",
    description: "Antifurto casa senza fili a confronto: kit Ajax con 4G, Somfy contro l'effrazione, Ring per chi usa Alexa. Sensori, sirena, abbonamento facoltativo e FAQ.",
  },
  "detecteurs-fumee-co": {
    keyword: "rilevatore di fumo",
    title: "Miglior rilevatore di fumo e monossido 2026: classifica",
    h1: "I migliori rilevatori di fumo e monossido di carbonio Wi-Fi del 2026",
    description: "Rilevatori di fumo e CO connessi a confronto: Netatmo per fumo e monossido con avvisi sullo smartphone, X-Sense Wi-Fi qualità prezzo. Norma EN 14604 e FAQ.",
  },
  "detecteurs-mouvement": {
    keyword: "sensore di movimento",
    title: "Miglior sensore di movimento e presenza smart 2026",
    h1: "I migliori sensori di movimento e di presenza smart del 2026 per la domotica",
    description: "Sensori di movimento per luci e automazioni a confronto: Aqara P2 con sensore di luce, IKEA qualità prezzo, Aqara FP2 a onde millimetriche. Hub e FAQ.",
  },
  "trackers-objets": {
    keyword: "localizzatore bluetooth",
    title: "Miglior localizzatore Bluetooth 2026: per iPhone e Android",
    h1: "I migliori localizzatori Bluetooth del 2026 per chiavi, borse e valigie",
    description: "Localizzatori per chiavi, borse e bagagli a confronto: Apple AirTag per iPhone, Chipolo per Android e famiglie miste, Ugreen qualità prezzo. Guida e FAQ.",
  },
  "interphones": {
    keyword: "videocitofono",
    title: "Miglior videocitofono 2026: a 2 fili, per villa e condominio",
    h1: "I migliori videocitofoni del 2026 per villa e condominio, anche a 2 fili",
    description: "Videocitofoni con app a confronto: Philips WelcomeEye per la villa, BTicino Classe 100X a 2 fili, Ring Intercom sul citofono condominiale senza lavori.",
  },
  "coffres-forts-connectes": {
    keyword: "cassaforte elettronica",
    title: "Miglior cassaforte elettronica 2026: con impronta e app",
    h1: "Le migliori casseforti elettroniche e biometriche del 2026 per la casa",
    description: "Casseforti elettroniche per la casa a confronto: due Burg-Wächter con impronta digitale e una Yale con avvisi sullo smartphone. Fissaggio, apertura e FAQ.",
  },

  // ------------------------------------------------------- Comfort aria
  "purificateurs-air": {
    keyword: "miglior purificatore d'aria",
    title: "Miglior purificatore d'aria 2026: filtro HEPA e allergie",
    h1: "I migliori purificatori d'aria del 2026: filtri HEPA contro polveri e allergeni",
    description: "Purificatori e depuratori d'aria a confronto: Levoit Core 400S, Levoit 300S qualità prezzo, Blueair il più silenzioso di notte. HEPA, CADR, consumi e FAQ.",
  },
  "humidificateurs": {
    keyword: "miglior umidificatore",
    title: "Miglior umidificatore 2026: a ultrasuoni ed evaporativi",
    h1: "I migliori umidificatori del 2026: a ultrasuoni, evaporativi e con purificatore",
    description: "Umidificatori a confronto: Boneco per ambienti grandi, Levoit a ultrasuoni qualità prezzo, Dyson con purificatore per gli allergici. Igiene, rumore e FAQ.",
  },
  "deshumidificateurs": {
    keyword: "miglior deumidificatore",
    title: "Miglior deumidificatore 2026: classifica, consumi e muffa",
    h1: "I migliori deumidificatori del 2026 contro umidità, muffa e condensa",
    description: "Deumidificatori a confronto: Meaco da 20 litri al giorno, Comfee qualità prezzo, Xiaomi per la camera da letto. Capacità, consumi, rumore, muffa e FAQ.",
  },
  "climatiseurs-mobiles": {
    keyword: "miglior condizionatore portatile",
    title: "Miglior condizionatore portatile 2026: classifica e consumi",
    h1: "I migliori condizionatori portatili del 2026: classifica, consumi e rumore",
    description: "Condizionatori portatili a confronto: Midea PortaSplit silenzioso, Midea Silent Cool qualità prezzo, Trotec per stanze grandi. BTU, consumi, tubo e FAQ.",
  },
  "ventilateurs": {
    keyword: "miglior ventilatore",
    title: "Miglior ventilatore 2026: a piantana e senza pale, con app",
    h1: "I migliori ventilatori del 2026: senza pale, a piantana e con purificatore",
    description: "Ventilatori a confronto: Dyson senza pale con purificatore, Xiaomi a piantana qualità prezzo, Dyson caldo e freddo per tutto l'anno. Rumore, app e FAQ.",
  },
  "chauffages-appoint": {
    keyword: "stufa elettrica",
    title: "Migliore stufa elettrica a basso consumo 2026: classifica",
    h1: "Le migliori stufe elettriche a basso consumo del 2026, da parete e portatili",
    description: "Stufe elettriche e radiatori da parete a confronto: a pari potenza consumano lo stesso, risparmi col termostato. Termoventilatore o radiatore a olio? FAQ.",
  },
  "stations-meteo": {
    keyword: "stazione meteo",
    title: "Migliore stazione meteo WiFi 2026: con sensore esterno",
    h1: "Le migliori stazioni meteo Wi-Fi del 2026, con sensore esterno",
    description: "Stazioni meteo Wi-Fi a confronto: Ecowitt con display a colori, Bresser 7 in 1 qualità prezzo, Netatmo per l'aria di casa e Apple Casa. Sensori e FAQ.",
  },
  "diffuseurs": {
    keyword: "diffusore di oli essenziali",
    title: "Miglior diffusore di oli essenziali WiFi 2026",
    h1: "I migliori diffusori di oli essenziali Wi-Fi del 2026, anche a nebulizzazione",
    description: "Diffusori di oli essenziali Wi-Fi a confronto: ASAKUKI da 500 ml, Maxcio qualità prezzo, Aromatherapy Associates a nebulizzazione. Autonomia, app e FAQ.",
  },
  "reveils-lumiere": {
    keyword: "sveglia luminosa",
    title: "Migliore sveglia luminosa 2026: simulazione dell'alba",
    h1: "Le migliori sveglie luminose del 2026 con simulazione dell'alba",
    description: "Sveglie luminose a confronto: Philips SmartSleep con luce per addormentarsi, Philips Wake-up Light qualità prezzo, Lumie per chi fatica ad alzarsi. FAQ.",
  },
  "rideaux-automatises": {
    keyword: "motore per tende",
    title: "Miglior motore per tende 2026: smart e senza lavori",
    h1: "I migliori motori per tende del 2026: tende motorizzate senza lavori",
    description: "Motori per tende da montare sul binario esistente: SwitchBot, Aqara qualità prezzo, Eve per tende a rullo con Matter. Orari, comandi vocali, app e FAQ.",
  },

  // --------------------------------------------------- Pulizia della casa
  "aspirateurs-robots": {
    keyword: "miglior robot aspirapolvere",
    title: "Miglior robot aspirapolvere 2026: classifica e opinioni",
    h1: "I migliori robot aspirapolvere del 2026: classifica e guida all'acquisto",
    description: "Robot aspirapolvere a confronto: Roborock Qrevo Curv, Roborock Q7 qualità prezzo, Dreame per peli di animali e soglie. Navigazione, base, opinioni e FAQ.",
  },
  "aspirateurs-laveurs": {
    keyword: "robot aspirapolvere e lavapavimenti",
    title: "Miglior robot aspirapolvere e lavapavimenti 2026: classifica",
    h1: "I migliori robot aspirapolvere e lavapavimenti del 2026 con stazione di lavaggio",
    description: "Robot che aspirano e lavano a confronto: Dreame X50 Ultra, Dreame L40 Ultra qualità prezzo, Roborock per grandi superfici dure. Mop, stazione e FAQ.",
  },
  "laveurs-vitres": {
    keyword: "miglior robot lavavetri",
    title: "Miglior robot lavavetri 2026: classifica e confronto",
    h1: "I migliori robot lavavetri del 2026 per finestre, vetrate e specchi",
    description: "Robot lavavetri a confronto: Ecovacs Winbot con spruzzo e cavo di sicurezza, Cecotec qualità prezzo, Hobot per vetri senza cornice. Altezza, rumore e FAQ.",
  },
  "aspirateurs-balais": {
    keyword: "migliore scopa elettrica",
    title: "Migliore scopa elettrica senza fili 2026: classifica",
    h1: "Le migliori scope elettriche senza fili del 2026: classifica e opinioni",
    description: "Scope elettriche senza fili a confronto: Dyson V15, Rowenta X-Force qualità prezzo, Samsung Bespoke Jet con svuotamento automatico. Autonomia, peso e FAQ.",
  },
  "nettoyeurs-vapeur": {
    keyword: "pulitore a vapore",
    title: "Miglior pulitore a vapore 2026: scope a vapore a confronto",
    h1: "Pulitori e scope a vapore: i migliori del 2026 per pavimenti, vetri e bagno",
    description: "Pulitori e scope a vapore a confronto: Kärcher SC 5 per tutta la casa, Black+Decker qualità prezzo, Bissell sottile per l'appartamento. Accessori e FAQ.",
  },
  "fers-centrales-vapeur": {
    keyword: "ferro da stiro con caldaia",
    title: "Miglior ferro da stiro con caldaia 2026: classifica",
    h1: "I migliori ferri da stiro con caldaia e sistemi stiranti del 2026",
    description: "Ferri da stiro con caldaia a confronto: Philips PerfectCare 8000, PerfectCare 7000 qualità prezzo e Laurastar Smart, l'unico connesso. Vapore, peso e FAQ.",
  },
  "lave-vaisselle-connectes": {
    keyword: "miglior lavastoviglie",
    title: "Miglior lavastoviglie 2026: classifica e consumi",
    h1: "Le migliori lavastoviglie del 2026, con app e dosaggio automatico",
    description: "Lavastoviglie a confronto: Bosch Serie 6 con Home Connect, Haier qualità prezzo, Miele con dosaggio automatico AutoDos. Classe energetica, rumore e FAQ.",
  },
  "lave-linge-connectes": {
    keyword: "miglior lavatrice",
    title: "Miglior lavatrice e lavasciuga 2026: classifica",
    h1: "Le migliori lavatrici e lavasciuga del 2026: classifica e guida all'acquisto",
    description: "Lavatrici e lavasciuga a confronto: Bosch Serie 8, Haier I-Pro qualità prezzo e una lavasciuga LG con app ThinQ. Capacità, consumi, rumore e FAQ.",
  },

  // ------------------------------------------------------------ Esterno
  "tondeuses-robots": {
    keyword: "miglior robot tagliaerba",
    title: "Miglior robot tagliaerba 2026: senza filo perimetrale",
    h1: "I migliori robot tagliaerba senza filo perimetrale del 2026: classifica",
    description: "Robot tagliaerba senza filo perimetrale a confronto: Ecovacs GOAT RTK, Segway Navimow qualità prezzo, Mammotion LUBA per le pendenze. Superficie e FAQ.",
  },
  "arrosage-connecte": {
    keyword: "centralina irrigazione wifi",
    title: "Miglior centralina irrigazione WiFi 2026: classifica",
    h1: "Centraline e programmatori di irrigazione Wi-Fi: i migliori del 2026",
    description: "Programmatori da rubinetto e centraline Wi-Fi a confronto: Gardena smart, Eve Aqua senza gateway, Gardena per l'impianto interrato. Zone, app e FAQ.",
  },
  "eclairage-exterieur": {
    keyword: "luci solari da esterno",
    title: "Migliori luci solari da esterno 2026 per il giardino",
    h1: "Le migliori luci solari e smart da esterno del 2026 per giardino e vialetti",
    description: "Luci da esterno a confronto: lampada solare eufy con telecamera, catene luminose solari Govee, faretti Philips Hue Lily via cavo. Pannello, app e FAQ.",
  },
  "portails-garages": {
    keyword: "motore per cancello",
    title: "Miglior motore per cancello e garage 2026: classifica",
    h1: "Le migliori automazioni per cancelli e porte da garage del 2026, con app",
    description: "Automazioni per cancello e garage a confronto: kit Somfy per cancello a battente, modulo Meross Wi-Fi qualità prezzo, motore Hörmann per il garage. FAQ.",
  },
  "robots-piscine": {
    keyword: "miglior robot piscina",
    title: "Miglior robot piscina 2026: con cavo e senza fili",
    h1: "I migliori robot per piscina del 2026, con cavo e senza fili",
    description: "Robot piscina a confronto: Dolphin S300i per fondo e pareti, Dolphin E35i qualità prezzo, Beatbot senza fili. Filtri, tipo di piscina, cavo e FAQ.",
  },
  "barbecues-connectes": {
    keyword: "miglior barbecue",
    title: "Miglior barbecue 2026: a pellet, a gas ed elettrico con app",
    h1: "I migliori barbecue con app del 2026: a pellet, a gas ed elettrici da balcone",
    description: "Barbecue con app a confronto: Weber Searwood a pellet, Ninja Woodfire elettrico per il balcone, Weber Genesis a gas. Sonde, controllo a distanza e FAQ.",
  },
  "stations-recharge-outdoor": {
    keyword: "power station",
    title: "Miglior power station portatile 2026: camper e blackout",
    h1: "Le migliori power station portatili del 2026 per campeggio, camper e blackout",
    description: "Power station portatili a confronto: EcoFlow DELTA 3 Plus, BLUETTI qualità prezzo, EcoFlow RIVER per il campeggio leggero. Capacità, pannello solare e FAQ.",
  },
  "alarmes-exterieures": {
    keyword: "sensore di movimento da esterno",
    title: "Miglior sensore di movimento da esterno 2026: allarme e luci",
    h1: "Sensori di movimento e sirene da esterno: i migliori del 2026 per il giardino",
    description: "Sensori e sirene da esterno a confronto: Ajax per l'antifurto, sirena Ring per chi usa Alexa, sensore Philips Hue per accendere le luci. Guida e FAQ.",
  },
}
