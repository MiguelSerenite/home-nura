import type { CategoryHeads } from './types'

/**
 * Germany, Austria and Switzerland (one /de version).
 * Keywords follow what DACH buyers type (seo-etude-dach.md, 30/10/2026):
 * "Kaffeevollautomat", "Akku-Staubsauger", "Überwachungskamera außen",
 * "Saugroboter mit Wischfunktion"… Titles say "Vergleich", never the lab
 * word or its "-sieger" label: Home Nura compares on documentation (UWG).
 */
export const DE_HEADS: CategoryHeads = {
  // ---------------------------------------------------------------- Küche
  "airfryers": {
    keyword: "Airfryer",
    title: "Airfryer Vergleich 2026: Die 3 besten Heißluftfritteusen",
    h1: "Airfryer Vergleich 2026: Die besten Heißluftfritteusen im Überblick",
    description: "Airfryer im Vergleich: 3 Heißluftfritteusen von Ninja, Philips und Cosori. Kaufberatung zu Fassungsvermögen, Doppelkammer, Stromverbrauch und FAQ.",
  },
  "multicuiseurs": {
    keyword: "Multikocher",
    title: "Multikocher Vergleich 2026: Die 3 besten Modelle",
    h1: "Multikocher Vergleich 2026: Die besten Multicooker mit und ohne App",
    description: "Multikocher im Vergleich: 3 Empfehlungen von Moulinex, Ninja und Instant Pot. Kaufberatung zu Druckgaren, Fassungsvermögen, App-Rezepten und FAQ.",
  },
  // Indexed in this market (categories.ts indexableIn): the robot cooker guide's models.
  "robots-multifonctions": {
    keyword: "Küchenmaschine mit Kochfunktion",
    title: "Küchenmaschine mit Kochfunktion 2026: Vergleich",
    h1: "Küchenmaschinen mit Kochfunktion 2026: Thermomix TM7 und Alternativen",
    description: "Thermomix TM7, Moulinex i-Companion Touch XL, Magimix Cook Expert, Kenwood Cooking Chef XL und Cecotec Mambo im Vergleich: Heizart, Topf, App. FAQ.",
  },
  "cafetieres": {
    keyword: "Kaffeevollautomat",
    title: "Kaffeevollautomat Vergleich 2026: Die 3 besten Modelle",
    h1: "Kaffeevollautomat Vergleich 2026: Die besten Vollautomaten im Überblick",
    description: "Kaffeevollautomaten im Vergleich: 3 Empfehlungen von De'Longhi, Philips und Krups. Kaufberatung zu Milchsystem, Mahlwerk, Reinigung und FAQ.",
  },
  "balances": {
    keyword: "Küchenwaage mit App",
    title: "Küchenwaage mit App Vergleich 2026: Nährwerte im Blick",
    h1: "Küchenwaagen mit App und Nährwertanzeige im Vergleich 2026",
    description: "Küchenwaagen mit App im Vergleich: Etekcity und Renpho berechnen Kalorien und Nährwerte, die Beurer XL wiegt große Mengen ohne App. Mit Kriterien und FAQ.",
  },
  "thermometres-viande": {
    keyword: "Fleischthermometer",
    title: "Fleischthermometer Vergleich 2026: Bluetooth & kabellos",
    h1: "Fleischthermometer mit App: Vergleich 2026 der besten Bluetooth-Modelle",
    description: "Kabellose und Bluetooth-Fleischthermometer im Vergleich: 3 Empfehlungen von Meater und Inkbird. Kaufberatung zu Reichweite, Fühlern, App und FAQ.",
  },
  "prises-connectees": {
    keyword: "WLAN-Steckdose",
    title: "WLAN-Steckdosen Vergleich 2026: Die 3 besten Modelle",
    h1: "WLAN-Steckdosen Vergleich 2026: Smarte Steckdosen mit und ohne Strommessung",
    description: "WLAN-Steckdosen im Vergleich: 3 Empfehlungen von TP-Link Tapo und Meross, mit Strommessung oder für Apple Home. Kaufberatung zu Matter, Alexa und FAQ.",
  },

  // ------------------------------------------------- Energie & Smart Home
  "thermostats": {
    keyword: "Raumthermostat WLAN",
    title: "Raumthermostat WLAN Vergleich 2026: Die 3 besten Modelle",
    h1: "Smarte Raumthermostate mit WLAN: Vergleich 2026 für Heizkessel und Wärmepumpe",
    description: "Smarte Raumthermostate von tado, Netatmo und Honeywell im Vergleich: 3 Empfehlungen für Heizkessel und Wärmepumpe. Kaufberatung zu OpenTherm und FAQ.",
  },
  "compteurs-energie": {
    keyword: "Stromverbrauch messen",
    title: "Stromverbrauch messen: Energiezähler im Vergleich 2026",
    h1: "Stromverbrauch im ganzen Haus messen: Energiezähler im Vergleich 2026",
    description: "Den Stromverbrauch im ganzen Haus in Echtzeit messen: 3 Energiezähler im Vergleich, darunter Shelly Pro 3EM. Kaufberatung zu Phasen, Einbau und FAQ.",
  },
  "solaire-balcon": {
    keyword: "Balkonkraftwerk",
    title: "Balkonkraftwerk Vergleich 2026: 800 Watt & mit Speicher",
    h1: "Balkonkraftwerk Vergleich 2026: Die besten Modelle mit und ohne Speicher",
    description: "Balkonkraftwerke im Vergleich: 3 Empfehlungen von Hoymiles, Anker SOLIX und EcoFlow, mit und ohne Speicher. Kaufberatung zu 800 Watt, Ertrag und FAQ.",
  },
  "batteries-domestiques": {
    keyword: "Stromspeicher",
    title: "Stromspeicher Vergleich 2026: Die 3 besten Heimspeicher",
    h1: "Stromspeicher für Zuhause: Vergleich 2026 der besten Heimspeicher",
    description: "Stromspeicher für Zuhause im Vergleich: 3 Empfehlungen von Anker SOLIX, Marstek und Tesla Powerwall. Kaufberatung zu Kapazität, Notstrom, Kosten und FAQ.",
  },
  "eclairage-connecte": {
    keyword: "smarte Glühbirne",
    title: "Smarte Glühbirnen Vergleich 2026: Mit und ohne Bridge",
    h1: "Smarte Glühbirnen und LED-Strips im Vergleich 2026",
    description: "Smarte Glühbirnen und LED-Strips im Vergleich: 3 Empfehlungen von Philips Hue, TP-Link Tapo und Govee. Kaufberatung zu Bridge, Matter, Farben und FAQ.",
  },
  "interrupteurs": {
    keyword: "smarter Lichtschalter",
    title: "Smarter Lichtschalter Vergleich 2026: Die 3 besten Modelle",
    h1: "Smarte Lichtschalter im Vergleich 2026: Wandschalter, Relais, Funktaster",
    description: "Smarte Lichtschalter im Vergleich: 3 Empfehlungen von Aqara, Shelly und Philips Hue, vom Wandschalter bis zum Unterputz-Relais. Mit Kaufkriterien und FAQ.",
  },
  "volets-stores": {
    keyword: "Rollladenmotor",
    title: "Rollladenmotor Vergleich 2026: Rollläden smart steuern",
    h1: "Rollladenmotor Vergleich 2026: Rollläden und Dachfenster smart steuern",
    description: "Rollladenmotoren im Vergleich: Somfy io und RTS sowie VELUX INTEGRA Solar fürs Dachfenster. Kaufberatung zu Funk, App, Nachrüsten und FAQ.",
  },
  "capteurs-qualite-air": {
    keyword: "CO2-Messgerät",
    title: "CO2-Messgerät Vergleich 2026: Luftqualität zu Hause messen",
    h1: "CO2-Messgeräte und Luftqualitätsmesser im Vergleich 2026",
    description: "CO2-Messgeräte und Luftqualitätsmesser im Vergleich: 3 Empfehlungen von Airthings, Netatmo und Aranet. Kaufberatung zu CO2, Feinstaub, Radon und FAQ.",
  },
  "detecteurs-fuite-eau": {
    keyword: "Wassermelder",
    title: "Wassermelder Vergleich 2026: Wasserschäden früh erkennen",
    h1: "Smarte Wassermelder im Vergleich 2026: Mit App und automatischer Absperrung",
    description: "Smarte Wassermelder im Vergleich: 3 Empfehlungen von Aqara und Shelly, mit Alarm aufs Handy und automatischem Absperrventil. Mit Kaufkriterien und FAQ.",
  },
  "hubs-domotique": {
    keyword: "Smart Home Zentrale",
    title: "Smart Home Zentrale Vergleich 2026: Die 3 besten Hubs",
    h1: "Smart Home Zentrale im Vergleich 2026: Hubs für Matter, Zigbee und Thread",
    description: "Smart Home Zentralen im Vergleich: 3 Empfehlungen von Homey, Aqara und Home Assistant. Kaufberatung zu Matter, Zigbee, Steuerung ohne Cloud und FAQ.",
  },
  "bornes-recharge-ve": {
    keyword: "Wallbox",
    title: "Wallbox Vergleich 2026: 11 kW und 22 kW für Zuhause",
    h1: "Wallbox Vergleich 2026: Die besten Ladestationen fürs Elektroauto zu Hause",
    description: "Wallboxen fürs Elektroauto im Vergleich: 3 Empfehlungen von Wallbox, Easee und Zaptec. Kaufberatung zu 11 oder 22 kW, MID-Zähler, App-Steuerung und FAQ.",
  },

  // ---------------------------------------------------------- Sicherheit
  "sonnettes-video": {
    keyword: "Türklingel mit Kamera",
    title: "Türklingel mit Kamera im Vergleich 2026: Top 3 ohne Abo",
    h1: "Türklingel mit Kamera: Video-Türklingeln ohne Abo im Vergleich 2026",
    description: "Türklingeln mit Kamera im Vergleich: 3 Video-Türklingeln von Eufy, TP-Link Tapo und Aqara, nutzbar ohne Abo. Kaufberatung zu Akku, Apple Home und FAQ.",
  },
  "cameras-interieur": {
    keyword: "Überwachungskamera innen",
    title: "Überwachungskamera innen Vergleich 2026: Ohne Abo nutzbar",
    h1: "Überwachungskamera innen: Vergleich 2026 für Wohnung und Haustiere",
    description: "Innenkameras im Vergleich: 3 Empfehlungen von Eufy, TP-Link Tapo und Reolink, mit lokaler Speicherung auf microSD oder NAS. Kaufberatung zu DSGVO und FAQ.",
  },
  "cameras-exterieur": {
    keyword: "Überwachungskamera außen",
    title: "Überwachungskamera außen Vergleich 2026: Solar, WLAN & PoE",
    h1: "Überwachungskamera außen: Vergleich 2026 der besten Modelle ohne Abo",
    description: "Außenkameras im Vergleich: 3 Empfehlungen von Eufy, TP-Link Tapo und Reolink, mit Solarpanel, WLAN oder PoE. Kaufberatung zu Nachtsicht, DSGVO und FAQ.",
  },
  "serrures-connectees": {
    keyword: "Smart Lock",
    title: "Smart Lock Vergleich 2026: Smartes Türschloss nachrüsten",
    h1: "Smart Lock Vergleich 2026: Die besten smarten Türschlösser zum Nachrüsten",
    description: "Smart Locks im Vergleich: 3 smarte Türschlösser von Nuki und Aqara zum Nachrüsten an der Haustür. Kaufberatung zu Zylinder, Matter, Keypad und FAQ.",
  },
  "alarmes": {
    keyword: "Alarmanlage ohne Abo",
    title: "Alarmanlage ohne Abo Vergleich 2026: Die 3 besten Systeme",
    h1: "Alarmanlage ohne Abo: Smarte Alarmsysteme im Vergleich 2026",
    description: "Smarte Alarmanlagen ohne monatliche Gebühren im Vergleich: 3 Empfehlungen von Ajax, Somfy und Ring. Kaufberatung zu Sensoren, Sirene, 4G und FAQ.",
  },
  "detecteurs-fumee-co": {
    keyword: "Rauchmelder",
    title: "Rauchmelder mit App Vergleich 2026: Inklusive CO-Melder",
    h1: "Smarte Rauchmelder mit App und CO-Melder im Vergleich 2026",
    description: "Rauchmelder mit App und WLAN im Vergleich: 3 Empfehlungen von Netatmo und X-Sense, dazu ein CO-Melder. Kaufberatung zu EN 14604, Funkvernetzung und FAQ.",
  },
  "detecteurs-mouvement": {
    keyword: "Bewegungsmelder",
    title: "Bewegungsmelder Vergleich 2026: Smart Home & Präsenzmelder",
    h1: "Smarte Bewegungsmelder und Präsenzmelder im Vergleich 2026",
    description: "Bewegungs- und Präsenzmelder im Vergleich: 3 Empfehlungen von Aqara und IKEA für Licht, Alarm und Automationen. Kaufberatung zu Zigbee, Matter und FAQ.",
  },
  "trackers-objets": {
    keyword: "Schlüsselfinder",
    title: "Schlüsselfinder Vergleich 2026: Tracker für iPhone & Android",
    h1: "Schlüsselfinder und Bluetooth-Tracker im Vergleich 2026",
    description: "Bluetooth-Tracker im Vergleich: Apple AirTag, Chipolo und Ugreen für Schlüssel, Taschen oder Fahrrad. Kaufberatung zu „Wo ist?“, Google-Netzwerk und FAQ.",
  },
  "interphones": {
    keyword: "Video-Gegensprechanlage",
    title: "Video-Gegensprechanlage Vergleich 2026: Mit App & WLAN",
    h1: "Video-Gegensprechanlage mit App: Vergleich 2026 für Haus und Wohnung",
    description: "Video-Gegensprechanlagen mit App im Vergleich: 3 Empfehlungen von Philips, BTicino und Ring, auch zum Nachrüsten in der Wohnung. Mit Kaufkriterien und FAQ.",
  },
  "coffres-forts-connectes": {
    keyword: "Tresor mit Fingerabdruck",
    title: "Tresor mit Fingerabdruck oder App: Vergleich 2026",
    h1: "Smarte Tresore mit Fingerabdruck oder App im Vergleich 2026",
    description: "Smarte Tresore im Vergleich: 2 Modelle von Burg-Wächter mit Fingerscan und der Yale Smart Safe mit App-Alarm. Kaufberatung zu Sicherheitsstufe und FAQ.",
  },

  // ------------------------------------------------------------ Raumklima
  "purificateurs-air": {
    keyword: "Luftreiniger",
    title: "Luftreiniger Vergleich 2026: Gegen Pollen, Staub und Gerüche",
    h1: "Luftreiniger Vergleich 2026: Die besten Modelle für Wohnung und Schlafzimmer",
    description: "Luftreiniger im Vergleich: 3 Empfehlungen von Levoit und Blueair gegen Pollen, Feinstaub und Gerüche. Kaufberatung zu CADR, Raumgröße, Lautstärke und FAQ.",
  },
  "humidificateurs": {
    keyword: "Luftbefeuchter",
    title: "Luftbefeuchter Vergleich 2026: Die 3 besten mit App",
    h1: "Luftbefeuchter Vergleich 2026: Smarte Modelle für gesunde Raumluft im Winter",
    description: "Smarte Luftbefeuchter im Vergleich: 3 Empfehlungen von Boneco, Levoit und Dyson. Kaufberatung zu Ultraschall oder Verdunster, Hygiene, Raumgröße und FAQ.",
  },
  "deshumidificateurs": {
    keyword: "Luftentfeuchter",
    title: "Luftentfeuchter Vergleich 2026: Für Keller und Wohnung",
    h1: "Elektrische Luftentfeuchter im Vergleich 2026: Gegen Feuchtigkeit und Schimmel",
    description: "Elektrische Luftentfeuchter im Vergleich: 3 Empfehlungen von Meaco, Comfee und Xiaomi gegen Feuchte und Schimmel. Kaufberatung zu Liter pro Tag und FAQ.",
  },
  "climatiseurs-mobiles": {
    keyword: "mobile Klimaanlage",
    title: "Mobile Klimaanlage Vergleich 2026: Monoblock & Split",
    h1: "Mobile Klimaanlage Vergleich 2026: Monoblock- und Split-Geräte mit App",
    description: "Mobile Klimaanlagen von Midea und Trotec im Vergleich, vom Monoblock bis zum PortaSplit. Kaufberatung zu BTU, Lautstärke, Abluftschlauch und FAQ.",
  },
  "ventilateurs": {
    keyword: "Ventilator",
    title: "Ventilator Vergleich 2026: Leise Modelle mit App",
    h1: "Smarte Ventilatoren im Vergleich 2026: Vom Standventilator bis zum 3-in-1",
    description: "Smarte Ventilatoren im Vergleich: 3 Empfehlungen von Dyson und Xiaomi, vom Standventilator bis zum 3-in-1 mit Heizung. Kaufberatung zu Lautstärke und FAQ.",
  },
  "chauffages-appoint": {
    keyword: "Elektroheizung",
    title: "Elektroheizung Vergleich 2026: Mit WLAN und Thermostat",
    h1: "Elektroheizung mit WLAN und Thermostat: Vergleich 2026 für einzelne Räume",
    description: "Elektroheizungen im Vergleich: 2 Wandheizkörper mit App und ein mobiler Ölradiator von Mill für einzelne Räume. Kaufberatung zu Watt, Thermostat und FAQ.",
  },
  "stations-meteo": {
    keyword: "WLAN-Wetterstation",
    title: "WLAN-Wetterstation Vergleich 2026: Die 3 besten Modelle",
    h1: "WLAN-Wetterstation Vergleich 2026: Mit Außensensor und App",
    description: "WLAN-Wetterstationen im Vergleich: 3 Empfehlungen von Ecowitt, Bresser und Netatmo mit Außensensor und App. Kaufberatung zu Sensoren, Regen, Wind und FAQ.",
  },
  "diffuseurs": {
    keyword: "Aroma Diffuser",
    title: "Aroma Diffuser Vergleich 2026: Die 3 besten mit App",
    h1: "Smarte Aroma Diffuser im Vergleich 2026: Ultraschall und Vernebler mit App",
    description: "Aroma Diffuser mit App im Vergleich: 3 Empfehlungen von ASAKUKI, Maxcio und Aromatherapy Associates. Kaufberatung zu Tankgröße, Vernebler, Duftöl und FAQ.",
  },
  "reveils-lumiere": {
    keyword: "Lichtwecker",
    title: "Lichtwecker Vergleich 2026: Sanft aufwachen im Winter",
    h1: "Lichtwecker Vergleich 2026: Die besten Wake-up-Lights von Philips und Lumie",
    description: "Lichtwecker im Vergleich: 3 Empfehlungen von Philips und Lumie mit Sonnenaufgangs-Simulation. Kaufberatung zu Helligkeit, Lichtfarbe, Wecktönen und FAQ.",
  },
  "rideaux-automatises": {
    keyword: "Vorhangmotor",
    title: "Vorhangmotor Vergleich 2026: Vorhänge smart nachrüsten",
    h1: "Vorhangmotor Vergleich 2026: Vorhänge und Rollos automatisch öffnen",
    description: "Vorhangmotoren zum Nachrüsten im Vergleich: SwitchBot und Aqara für Vorhänge, Eve MotionBlinds für Rollos. Kaufberatung zu Schiene, Matter, Akku und FAQ.",
  },

  // ---------------------------------------------------------- Haushalt
  "aspirateurs-robots": {
    keyword: "Saugroboter",
    title: "Saugroboter Vergleich 2026: Die 3 besten mit Absaugstation",
    h1: "Saugroboter Vergleich 2026: Die besten Modelle von Roborock und Dreame",
    description: "Saugroboter im Vergleich: 3 Empfehlungen von Roborock und Dreame mit Absaugstation. Kaufberatung zu Navigation, Tierhaaren, Teppich, Schwellen und FAQ.",
  },
  "aspirateurs-laveurs": {
    keyword: "Saugroboter mit Wischfunktion",
    title: "Saugroboter mit Wischfunktion Vergleich 2026: Top 3",
    h1: "Saug-Wischroboter im Vergleich 2026: Die besten Saugroboter mit Wischfunktion",
    description: "Saug-Wischroboter im Vergleich: 3 Empfehlungen von Dreame und Roborock, deren Station die Mopps wäscht und trocknet. Kaufberatung zu Teppich und FAQ.",
  },
  "laveurs-vitres": {
    keyword: "Fensterputzroboter",
    title: "Fensterputzroboter Vergleich 2026: Die 3 besten Modelle",
    h1: "Fensterputzroboter Vergleich 2026: Die besten Modelle mit Sprühfunktion",
    description: "Fensterputzroboter im Vergleich: 3 Empfehlungen von Ecovacs, Cecotec und Hobot mit Sprühfunktion. Kaufberatung zu Sicherungsseil, Akku, Rahmen und FAQ.",
  },
  "aspirateurs-balais": {
    keyword: "Akku-Staubsauger",
    title: "Akku-Staubsauger Vergleich 2026: Die 3 besten Stielsauger",
    h1: "Akku-Staubsauger Vergleich 2026: Die besten kabellosen Stielsauger",
    description: "Akku-Staubsauger im Vergleich: 3 Empfehlungen von Dyson, Rowenta und Samsung. Kaufberatung zu Saugkraft, Akkulaufzeit, Absaugstation, Tierhaaren und FAQ.",
  },
  "nettoyeurs-vapeur": {
    keyword: "Dampfreiniger",
    title: "Dampfreiniger Vergleich 2026: Die 3 besten für Boden & Bad",
    h1: "Dampfreiniger Vergleich 2026: Die besten Modelle und Dampfbesen für Zuhause",
    description: "Dampfreiniger im Vergleich: 3 Empfehlungen von Kärcher, Black+Decker und Bissell, vom Dampfbesen bis zum Allrounder. Kaufberatung zu Aufheizzeit und FAQ.",
  },
  "fers-centrales-vapeur": {
    keyword: "Dampfbügelstation",
    title: "Dampfbügelstation Vergleich 2026: Die 3 besten Modelle",
    h1: "Dampfbügelstation Vergleich 2026: Die besten Modelle für schnelles Bügeln",
    description: "Dampfbügelstationen im Vergleich: 3 Empfehlungen von Philips PerfectCare und Laurastar. Kaufberatung zu Dampfstoß, Gewicht, Entkalkung und FAQ.",
  },
  "lave-vaisselle-connectes": {
    keyword: "Geschirrspüler",
    title: "Geschirrspüler Vergleich 2026: Smarte Spülmaschinen mit App",
    h1: "Smarte Geschirrspüler im Vergleich 2026: Die besten freistehenden Modelle",
    description: "Geschirrspüler mit WLAN und App im Vergleich: 3 Empfehlungen von Bosch, Miele und Haier. Kaufberatung zu Energieklasse, Lautstärke, AutoDos und FAQ.",
  },
  "lave-linge-connectes": {
    keyword: "Waschmaschine",
    title: "Waschmaschine mit App: Vergleich 2026 inkl. Waschtrockner",
    h1: "Smarte Waschmaschinen und Waschtrockner im Vergleich 2026",
    description: "Waschmaschinen mit WLAN im Vergleich: 3 Empfehlungen von Bosch, Haier und LG, darunter ein Waschtrockner. Kaufberatung zu Energieklasse, Dosierung und FAQ.",
  },

  // ------------------------------------------------------------- Outdoor
  "tondeuses-robots": {
    keyword: "Mähroboter",
    title: "Mähroboter Vergleich 2026: Top 3 ohne Begrenzungskabel",
    h1: "Mähroboter Vergleich 2026: Die besten Modelle ohne Begrenzungskabel",
    description: "Mähroboter ohne Begrenzungskabel im Vergleich: Ecovacs, Segway Navimow und Mammotion mit RTK statt Begrenzungsdraht. Kaufberatung zu Fläche, Hang und FAQ.",
  },
  "arrosage-connecte": {
    keyword: "Bewässerungscomputer",
    title: "Bewässerungscomputer Vergleich 2026: Die 3 besten mit App",
    h1: "Smarte Bewässerungscomputer im Vergleich 2026: Garten per App bewässern",
    description: "Bewässerungscomputer mit App im Vergleich: 3 Empfehlungen von Gardena smart und Eve Aqua. Kaufberatung zu Gateway, Matter, Zonen, Regensensor und FAQ.",
  },
  "eclairage-exterieur": {
    keyword: "Gartenbeleuchtung",
    title: "Smarte Gartenbeleuchtung Vergleich 2026: Solar & mit App",
    h1: "Smarte Gartenbeleuchtung im Vergleich 2026: Solar, Lichterkette, Spots",
    description: "Smarte Außenbeleuchtung im Vergleich: Eufy, Govee und Philips Hue, von der Solarleuchte mit Kamera bis zum Gartenspot. Mit Kaufkriterien und FAQ.",
  },
  "portails-garages": {
    keyword: "Garagentorantrieb",
    title: "Garagentorantrieb Vergleich 2026: Tore per App steuern",
    h1: "Smarte Tor- und Garagentorantriebe im Vergleich 2026: Tore per App öffnen",
    description: "Smarte Torantriebe im Vergleich: Somfy fürs Hoftor, Hörmann fürs Garagentor und Meross zum Nachrüsten. Kaufberatung zu Funk, App, Sicherheit und FAQ.",
  },
  "robots-piscine": {
    keyword: "Poolroboter",
    title: "Poolroboter Vergleich 2026: Mit Kabel oder Akku",
    h1: "Poolroboter Vergleich 2026: Die besten Modelle für Boden, Wand und Wasserlinie",
    description: "Poolroboter im Vergleich: 3 Empfehlungen von Dolphin und Beatbot, mit Kabel oder per Akku. Kaufberatung zu Poolgröße, Wandreinigung, Filter und FAQ.",
  },
  "barbecues-connectes": {
    keyword: "Grill mit App",
    title: "Grill mit App Vergleich 2026: Pellet, Gas oder Elektro",
    h1: "Smarte Grills mit App im Vergleich 2026: Pelletgrill, Gasgrill, Elektrogrill",
    description: "Grills mit App im Vergleich: Pelletgrill und Gasgrill von Weber, Elektrogrill von Ninja für den Balkon. Kaufberatung zu Temperaturfühler, WLAN und FAQ.",
  },
  "stations-recharge-outdoor": {
    keyword: "Powerstation",
    title: "Powerstation Vergleich 2026: Für Camping und Stromausfall",
    h1: "Tragbare Powerstations im Vergleich 2026: Camping, Outdoor und Notstrom",
    description: "Tragbare Powerstations im Vergleich: 3 Empfehlungen von EcoFlow und Bluetti für Camping, Outdoor und Notstrom. Kaufberatung zu Kapazität, LiFePO4 und FAQ.",
  },
  "alarmes-exterieures": {
    keyword: "Bewegungsmelder außen",
    title: "Bewegungsmelder außen Vergleich 2026: Mit Alarm und Sirene",
    h1: "Außenalarm im Vergleich 2026: Smarte Bewegungsmelder und Sirenen für draußen",
    description: "Smarte Außenalarme im Vergleich: Bewegungsmelder von Ajax und Philips Hue, Außensirene von Ring für Garten, Schuppen und Einfahrt. Mit Kriterien und FAQ.",
  },
}
