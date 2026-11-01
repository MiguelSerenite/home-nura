import type { CategoryHeads } from './types'

/**
 * France and French-speaking Belgium (one /fr version).
 * Keywords follow what French buyers type (seo-etude-fr-uk.md, 30/10/2026,
 * plus Suggest): "machine à café à grain", "aspirateur robot laveur",
 * "robot tondeuse sans fil périphérique", "panneau solaire plug and play",
 * "radiateur électrique", "détecteur de fumée", "box domotique",
 * "visiophone"… "connecté" is dropped where the demand is generic.
 * Titles say "comparatif" and "nos 3 choix", never the lab word:
 * Home Nura compares on documentation.
 */
export const FR_HEADS: CategoryHeads = {
  // ---------------------------------------------------------------- Cuisine
  "airfryers": {
    keyword: "meilleur air fryer",
    title: "Meilleur air fryer 2026 : friteuses sans huile comparées",
    h1: "Les meilleurs air fryers 2026 : nos 3 choix de friteuses sans huile",
    description: "Ninja Double Stack à deux tiroirs, Philips Série 3000 XL ou Cosori connecté : nos 3 airfryers comparés sur la capacité, la consommation et l'appli. FAQ.",
  },
  "multicuiseurs": {
    keyword: "cookeo",
    title: "Cookeo et multicuiseurs : comparatif 2026 et nos 3 choix",
    h1: "Les meilleurs multicuiseurs 2026 : Cookeo, Ninja Foodi ou Instant Pot ?",
    description: "Cookeo Touch WiFi, Ninja Foodi SmartLid ou Instant Pot : nos 3 multicuiseurs comparés sur la capacité, la cuisson sous pression et les recettes. FAQ.",
  },
  // Indexed in this market (categories.ts indexableIn): the robot cooker guide's models.
  "robots-multifonctions": {
    keyword: "robot cuiseur",
    title: "Robot cuiseur 2026 : le Thermomix TM7 et 4 alternatives",
    h1: "Les meilleurs robots cuiseurs 2026 : le Thermomix TM7 et ses alternatives",
    description: "Thermomix TM7, Moulinex i-Companion Touch XL, Magimix Cook Expert, Kenwood Cooking Chef XL ou Cecotec Mambo : nos robots cuiseurs comparés. FAQ.",
  },
  "cafetieres": {
    keyword: "machine à café à grain",
    title: "Machine à café à grain : comparatif 2026 et nos 3 choix",
    h1: "Les meilleures machines à café à grain 2026 : comparatif et nos 3 choix",
    description: "Expresso broyeur De'Longhi, Philips LatteGo ou Krups : nos 3 machines à café à grain comparées sur le lait, le broyeur et l'entretien. Critères et FAQ.",
  },
  "balances": {
    keyword: "balance de cuisine",
    title: "Meilleure balance de cuisine 2026 : avec ou sans appli",
    h1: "Les meilleures balances de cuisine 2026, connectées ou non",
    description: "Balance connectée Etekcity ou Renpho qui calcule calories et nutriments, Beurer XL sans appli pour les grandes quantités : nos 3 choix comparés. FAQ.",
  },
  "thermometres-viande": {
    keyword: "thermomètre à viande sans fil",
    title: "Thermomètre à viande sans fil et Bluetooth : comparatif 2026",
    h1: "Les meilleurs thermomètres à viande sans fil et Bluetooth 2026",
    description: "Sonde sans fil Meater ou boîtier Inkbird à 4 sondes : nos 3 thermomètres à viande comparés sur la portée, l'appli et la cuisson au barbecue. FAQ.",
  },
  "prises-connectees": {
    keyword: "prise connectée",
    title: "Meilleure prise connectée 2026 : comparatif et nos 3 choix",
    h1: "Les meilleures prises connectées 2026, avec ou sans suivi de consommation",
    description: "Prise wifi qui mesure la consommation, compatible Alexa, Google ou Apple Maison : nos 3 choix TP-Link Tapo et Meross comparés, Matter compris. FAQ.",
  },

  // ------------------------------------------------------ Énergie & domotique
  "thermostats": {
    keyword: "thermostat connecté",
    title: "Thermostat connecté 2026 : chaudière gaz ou pompe à chaleur",
    h1: "Les meilleurs thermostats connectés 2026 pour chaudière gaz et pompe à chaleur",
    description: "Pour chaudière gaz (OpenTherm) ou pompe à chaleur : nos 3 thermostats connectés tado, Netatmo et Honeywell comparés sur les économies et la pose. FAQ.",
  },
  "compteurs-energie": {
    keyword: "suivre sa consommation électrique",
    title: "Suivre sa consommation électrique : compteurs connectés 2026",
    h1: "Compteurs de consommation électrique connectés : comparatif 2026",
    description: "Shelly Pro 3EM, Shelly EM ou module Linky Lixee : nos 3 compteurs pour suivre la consommation électrique en temps réel, pièce par pièce. Pose et FAQ.",
  },
  "solaire-balcon": {
    keyword: "panneau solaire plug and play",
    title: "Panneau solaire plug and play : comparatif 2026 (kit balcon)",
    h1: "Les meilleurs panneaux solaires plug and play 2026, avec ou sans batterie",
    description: "Kits balcon à brancher sur une prise : nos 3 choix Hoymiles, Anker SOLIX et EcoFlow, avec ou sans batterie. Production, réglementation, rentabilité, FAQ.",
  },
  "batteries-domestiques": {
    keyword: "batterie domestique",
    title: "Batterie domestique solaire : comparatif 2026 et nos 3 choix",
    h1: "Les meilleures batteries domestiques 2026 pour stocker l'énergie solaire",
    description: "Stocker sa production solaire : Anker SOLIX, Marstek ou Tesla Powerwall comparés sur la capacité (kWh), le secours en cas de coupure et la pose. FAQ.",
  },
  "eclairage-connecte": {
    keyword: "ampoule connectée",
    title: "Meilleure ampoule connectée 2026 : comparatif et nos 3 choix",
    h1: "Les meilleures ampoules connectées et rubans LED 2026, avec ou sans pont",
    description: "Philips Hue, TP-Link Tapo sans pont ou ruban LED Govee : nos 3 choix d'éclairage connecté comparés sur les couleurs, Matter, Alexa et Google. FAQ.",
  },
  "interrupteurs": {
    keyword: "interrupteur connecté",
    title: "Interrupteur connecté : comparatif 2026 et nos 3 choix",
    h1: "Les meilleurs interrupteurs connectés 2026 : mural, module ou sans fil",
    description: "Interrupteur mural Aqara, module Shelly caché derrière l'existant ou télécommande Hue sans fil : nos 3 choix comparés, câblage (neutre) et FAQ.",
  },
  "volets-stores": {
    keyword: "volet roulant connecté",
    title: "Moteur de volet roulant connecté : comparatif 2026",
    h1: "Volets roulants et stores connectés : les meilleurs moteurs 2026",
    description: "Somfy io ou RTS, Velux solaire pour fenêtre de toit : nos 3 moteurs de volet roulant connecté comparés sur la pose, la voix et les scénarios. FAQ.",
  },
  "capteurs-qualite-air": {
    keyword: "capteur de qualité de l'air",
    title: "Capteur de qualité de l'air et CO2 : comparatif 2026",
    h1: "Les meilleurs capteurs de qualité de l'air intérieur 2026 (CO2, radon)",
    description: "Aranet4, Airthings ou Netatmo : nos 3 capteurs de qualité de l'air comparés sur la mesure du CO2, des particules fines et du radon. Seuils et FAQ.",
  },
  "detecteurs-fuite-eau": {
    keyword: "détecteur de fuite d'eau",
    title: "Détecteur de fuite d'eau connecté 2026 : alerte et coupure",
    h1: "Les meilleurs détecteurs de fuite d'eau connectés 2026, avec coupure automatique",
    description: "Alerte sur le téléphone dès la première goutte, coupure de l'eau en option : nos 3 choix Aqara et Shelly comparés (hub, pile, wifi), pose et FAQ.",
  },
  "hubs-domotique": {
    keyword: "box domotique",
    title: "Meilleure box domotique 2026 : comparatif et nos 3 choix",
    h1: "Les meilleures box domotiques 2026 pour Matter, Zigbee et Home Assistant",
    description: "Homey Pro, Aqara Hub M3 ou Home Assistant Green : nos 3 box domotiques comparées pour piloter Zigbee, Matter et Thread dans une seule appli. FAQ.",
  },
  "bornes-recharge-ve": {
    keyword: "borne de recharge à domicile",
    title: "Borne de recharge à domicile : comparatif 2026 (wallbox)",
    h1: "Les meilleures bornes de recharge à domicile 2026 : 7 kW monophasé ou 22 kW",
    description: "Wallbox, Easee ou Zaptec : nos 3 bornes de recharge pour voiture électrique à la maison, en 7 kW monophasé ou de 11 à 22 kW en triphasé. Pose et FAQ.",
  },

  // ------------------------------------------------------- Sécurité maison
  "sonnettes-video": {
    keyword: "sonnette vidéo",
    title: "Meilleure sonnette vidéo 2026 : sans fil et sans abonnement",
    h1: "Les meilleures sonnettes vidéo 2026, sans fil et sans abonnement",
    description: "Eufy, TP-Link Tapo ou Aqara pour Apple Maison : nos 3 sonnettes vidéo comparées sur l'image, l'autonomie et le stockage local sans abonnement. FAQ.",
  },
  "cameras-interieur": {
    keyword: "caméra de surveillance intérieure",
    title: "Caméra de surveillance intérieure wifi : comparatif 2026",
    h1: "Les meilleures caméras de surveillance intérieures 2026, sans abonnement",
    description: "Eufy, TP-Link Tapo ou Reolink : nos 3 caméras intérieures wifi comparées sur la vision de nuit, le stockage local (carte, NAS) et la vie privée. FAQ.",
  },
  "cameras-exterieur": {
    keyword: "caméra de surveillance extérieure",
    title: "Caméra de surveillance extérieure 2026 : solaire, wifi, PoE",
    h1: "Les meilleures caméras de surveillance extérieures 2026 : nos 3 choix",
    description: "eufyCam solaire, TP-Link Tapo wifi ou Reolink PoE : nos 3 caméras extérieures comparées sur la vision de nuit et le stockage local sans abonnement. FAQ.",
  },
  "serrures-connectees": {
    keyword: "serrure connectée",
    title: "Meilleure serrure connectée 2026 : comparatif et nos 3 choix",
    h1: "Les meilleures serrures connectées 2026 pour porte d'entrée",
    description: "Nuki Pro, Nuki Go ou Aqara à empreinte digitale : nos 3 serrures connectées comparées sur la pose, l'ouverture sans clé et l'autonomie. Critères, FAQ.",
  },
  "alarmes": {
    keyword: "alarme maison sans abonnement",
    title: "Meilleure alarme maison sans abonnement 2026 : nos 3 choix",
    h1: "Les meilleures alarmes maison sans abonnement 2026 : kits sans fil comparés",
    description: "Ajax, Somfy ou Ring : nos 3 alarmes maison sans fil utilisables sans abonnement, comparées sur la détection, la sirène, le 4G et l'appli. Critères, FAQ.",
  },
  "detecteurs-fumee-co": {
    keyword: "détecteur de fumée",
    title: "Détecteur de fumée connecté et CO : comparatif 2026",
    h1: "Détecteurs de fumée et de monoxyde de carbone connectés : comparatif 2026",
    description: "Netatmo ou X-Sense : nos 3 détecteurs de fumée (norme EN 14604) et de CO connectés, comparés sur l'alerte au téléphone, la pile 10 ans et la pose. FAQ.",
  },
  "detecteurs-mouvement": {
    keyword: "détecteur de mouvement connecté",
    title: "Détecteur de mouvement connecté : comparatif 2026",
    h1: "Les meilleurs détecteurs de mouvement et de présence connectés 2026",
    description: "Aqara P2 et FP2, IKEA MYGGSPRAY : nos 3 détecteurs de mouvement et de présence comparés pour allumer la lumière ou lancer l'alarme. Matter, FAQ.",
  },
  "trackers-objets": {
    keyword: "traceur bluetooth",
    title: "Traceur Bluetooth 2026 : comparatif iPhone et Android",
    h1: "Les meilleurs traceurs d'objets 2026 : AirTag et alternatives Android",
    description: "Clés, sac, valise : AirTag pour iPhone, Chipolo POP pour les foyers mixtes, Ugreen pour le budget. Nos 3 traceurs comparés sur la portée et le réseau. FAQ.",
  },
  "interphones": {
    keyword: "visiophone connecté",
    title: "Visiophone connecté 2026 : comparatif des interphones vidéo",
    h1: "Les meilleurs visiophones et interphones vidéo connectés 2026",
    description: "Philips WelcomeEye, BTicino ou Ring Intercom en appartement sans travaux : nos 3 visiophones connectés pour répondre et ouvrir depuis le téléphone. FAQ.",
  },
  "coffres-forts-connectes": {
    keyword: "coffre-fort biométrique",
    title: "Coffre-fort biométrique et connecté : comparatif 2026",
    h1: "Les meilleurs coffres-forts biométriques et connectés 2026",
    description: "Burg-Wächter à empreinte digitale ou Yale avec alertes sur le téléphone : nos 3 coffres-forts comparés sur l'ouverture, la fixation et la protection. FAQ.",
  },

  // ------------------------------------------------------------ Confort & air
  "purificateurs-air": {
    keyword: "meilleur purificateur d'air",
    title: "Meilleur purificateur d'air 2026 : comparatif et nos 3 choix",
    h1: "Les meilleurs purificateurs d'air 2026 : chambre, allergies, particules fines",
    description: "Levoit Core 300S et 400S ou Blueair discret la nuit : nos 3 purificateurs d'air HEPA comparés sur le CADR, la surface, le bruit et les filtres. FAQ.",
  },
  "humidificateurs": {
    keyword: "humidificateur d'air",
    title: "Meilleur humidificateur d'air 2026 : nos 3 choix comparés",
    h1: "Les meilleurs humidificateurs d'air 2026 pour la chambre et l'hiver",
    description: "BONECO, Levoit ou Dyson : nos 3 humidificateurs d'air comparés sur la surface, l'hygiène du réservoir, le bruit et le pilotage par appli. Critères, FAQ.",
  },
  "deshumidificateurs": {
    keyword: "meilleur déshumidificateur",
    title: "Meilleur déshumidificateur 2026 : comparatif et nos 3 choix",
    h1: "Les meilleurs déshumidificateurs 2026 : chambre, cave, salle de bain",
    description: "Meaco, Comfee ou Xiaomi : nos 3 déshumidificateurs comparés sur les litres par jour, le bruit, la consommation et le séchage du linge. Critères et FAQ.",
  },
  "climatiseurs-mobiles": {
    keyword: "climatiseur mobile",
    title: "Meilleur climatiseur mobile 2026 : comparatif et nos 3 choix",
    h1: "Les meilleurs climatiseurs mobiles 2026 : monobloc ou split, silencieux",
    description: "Split mobile Midea PortaSplit, monobloc Midea ou Trotec : nos 3 climatiseurs mobiles comparés sur le bruit, la puissance, l'évacuation et la pièce. FAQ.",
  },
  "ventilateurs": {
    keyword: "ventilateur silencieux",
    title: "Meilleur ventilateur silencieux 2026 : nos 3 choix comparés",
    h1: "Les meilleurs ventilateurs silencieux 2026 : sur pied ou sans pales",
    description: "Dyson sans pales qui purifie (et chauffe) ou Xiaomi sur pied connecté : nos 3 ventilateurs silencieux comparés sur le bruit, le souffle et l'appli. FAQ.",
  },
  "chauffages-appoint": {
    keyword: "radiateur électrique",
    title: "Radiateur électrique, chauffage d'appoint : comparatif 2026",
    h1: "Les meilleurs radiateurs électriques et chauffages d'appoint 2026",
    description: "Chauffage d'appoint économique : radiateur à inertie Thermor ou Sauter, bain d'huile Mill connecté. Nos 3 choix comparés sur la consommation. FAQ.",
  },
  "stations-meteo": {
    keyword: "station météo connectée",
    title: "Station météo connectée : comparatif 2026 et nos 3 choix",
    h1: "Les meilleures stations météo connectées 2026, intérieur et extérieur",
    description: "Ecowitt, Bresser 7-en-1 ou Netatmo : nos 3 stations météo wifi comparées sur les capteurs (vent, pluie, CO2), la précision et l'appli. Critères, FAQ.",
  },
  "diffuseurs": {
    keyword: "diffuseur d'huiles essentielles",
    title: "Diffuseur d'huiles essentielles connecté : comparatif 2026",
    h1: "Les meilleurs diffuseurs d'huiles essentielles connectés 2026",
    description: "À ultrasons ASAKUKI ou Maxcio, nébuliseur Aromatherapy Associates : nos 3 diffuseurs connectés comparés sur le réservoir, le bruit et l'appli. FAQ.",
  },
  "reveils-lumiere": {
    keyword: "réveil lumière",
    title: "Réveil lumière et simulateur d'aube : comparatif 2026",
    h1: "Les meilleurs réveils lumière et simulateurs d'aube 2026",
    description: "Philips SmartSleep, Wake-up Light ou Lumie Bodyclock : nos 3 réveils lumière comparés sur l'aube progressive, le coucher de soleil et le son. FAQ.",
  },
  "rideaux-automatises": {
    keyword: "rideau automatique",
    title: "Rideau automatique : comparatif 2026 des moteurs connectés",
    h1: "Rendre ses rideaux automatiques : les meilleurs moteurs connectés 2026",
    description: "SwitchBot Curtain 3 et Aqara E1 se fixent sur la tringle sans travaux, Eve motorise un store : nos 3 choix comparés (horaires, voix, Matter). FAQ.",
  },

  // ------------------------------------------------------- Entretien maison
  "aspirateurs-robots": {
    keyword: "meilleur aspirateur robot",
    title: "Meilleur aspirateur robot 2026 : comparatif et nos 3 choix",
    h1: "Les meilleurs aspirateurs robots 2026 : comparatif et nos 3 choix",
    description: "Roborock ou Dreame avec station de vidage : nos 3 aspirateurs robots comparés sur la navigation LiDAR, les poils d'animaux, les seuils et l'entretien. FAQ.",
  },
  "aspirateurs-laveurs": {
    keyword: "aspirateur robot laveur",
    title: "Aspirateur robot laveur : comparatif 2026 et nos 3 choix",
    h1: "Les meilleurs aspirateurs robots laveurs 2026, avec station autonettoyante",
    description: "Dreame X50 et L40 Ultra, Roborock Qrevo Curv 2 : nos 3 robots aspirateurs laveurs comparés sur le lavage, la station, les tapis et les seuils. FAQ.",
  },
  "laveurs-vitres": {
    keyword: "robot laveur de vitres",
    title: "Robot laveur de vitres : comparatif 2026 et nos 3 choix",
    h1: "Les meilleurs robots laveurs de vitres 2026, avec ou sans cadre",
    description: "Ecovacs Winbot W2 Omni, Cecotec Conga ou Hobot pour vitres sans cadre : nos 3 robots lave-vitres comparés sur la sécurité, le spray et le bruit. FAQ.",
  },
  "aspirateurs-balais": {
    keyword: "aspirateur balai sans fil",
    title: "Meilleur aspirateur balai sans fil 2026 : nos 3 choix",
    h1: "Les meilleurs aspirateurs balais sans fil 2026 : comparatif et nos 3 choix",
    description: "Dyson V15 Detect, Rowenta X-Force Flex ou Samsung Bespoke Jet : nos 3 aspirateurs balais sans fil comparés sur l'autonomie, la puissance, le vidage. FAQ.",
  },
  "nettoyeurs-vapeur": {
    keyword: "meilleur nettoyeur vapeur",
    title: "Meilleur nettoyeur vapeur 2026 : comparatif et nos 3 choix",
    h1: "Les meilleurs nettoyeurs vapeur 2026 : sols, joints, salle de bain",
    description: "Kärcher SC 5, Black+Decker ou balai vapeur Bissell : nos 3 nettoyeurs vapeur comparés pour les sols, les joints et le détartrage. Critères et FAQ.",
  },
  "fers-centrales-vapeur": {
    keyword: "meilleure centrale vapeur",
    title: "Meilleure centrale vapeur 2026 : comparatif et nos 3 choix",
    h1: "Les meilleures centrales vapeur 2026 : comparatif et nos 3 choix",
    description: "Philips PerfectCare 7000 et 8000 ou Laurastar Smart U connectée : nos 3 centrales vapeur comparées sur la pression, le défroissage et le calcaire. FAQ.",
  },
  "lave-vaisselle-connectes": {
    keyword: "meilleur lave-vaisselle",
    title: "Meilleur lave-vaisselle 2026 : comparatif et nos 3 choix",
    h1: "Les meilleurs lave-vaisselle 2026 : comparatif de modèles connectés",
    description: "Bosch Série 6, Haier ou Miele avec dosage automatique : nos 3 lave-vaisselle comparés sur le bruit (dB), la consommation, le séchage et l'appli. FAQ.",
  },
  "lave-linge-connectes": {
    keyword: "meilleur lave-linge",
    title: "Meilleur lave-linge 2026 : hublot ou séchant, nos 3 choix",
    h1: "Les meilleurs lave-linge et lave-linge séchants 2026",
    description: "Bosch Série 8, Haier I-Pro 7 ou LG séchant : nos 3 lave-linge comparés sur la capacité, l'essorage, le bruit, la classe énergie et l'appli. FAQ.",
  },

  // ------------------------------------------------------------- Extérieur
  "tondeuses-robots": {
    keyword: "robot tondeuse sans fil périphérique",
    title: "Robot tondeuse sans fil périphérique : comparatif 2026",
    h1: "Les meilleurs robots tondeuses sans fil périphérique 2026 (GPS RTK)",
    description: "Ecovacs GOAT, Segway Navimow ou Mammotion LUBA : nos 3 robots tondeuses RTK sans fil périmétrique comparés sur la surface, les pentes et le guidage. FAQ.",
  },
  "arrosage-connecte": {
    keyword: "programmateur d'arrosage connecté",
    title: "Programmateur d'arrosage connecté : comparatif 2026",
    h1: "Les meilleurs programmateurs d'arrosage connectés 2026, au robinet ou enterrés",
    description: "Gardena smart au robinet ou pour arrosage enterré, Eve Aqua sans passerelle : nos 3 programmateurs comparés sur la portée, la météo et l'appli. FAQ.",
  },
  "eclairage-exterieur": {
    keyword: "éclairage extérieur solaire",
    title: "Éclairage extérieur solaire et connecté : comparatif 2026",
    h1: "Le meilleur éclairage extérieur connecté 2026 : solaire, guirlande ou spots",
    description: "Lampe solaire avec caméra eufy, guirlande solaire Govee ou spots Philips Hue : nos 3 choix pour éclairer jardin et allée, avec pose, appli et FAQ.",
  },
  "portails-garages": {
    keyword: "motorisation portail",
    title: "Motorisation portail et porte de garage : comparatif 2026",
    h1: "Les meilleures motorisations connectées de portail et de porte de garage 2026",
    description: "Somfy io pour portail battant, Hörmann pour porte de garage, module Meross pour connecter l'existant : nos 3 choix comparés, avec pose et FAQ.",
  },
  "robots-piscine": {
    keyword: "meilleur robot piscine",
    title: "Meilleur robot piscine 2026 : comparatif et nos 3 choix",
    h1: "Les meilleurs robots piscine 2026, avec ou sans fil",
    description: "Dolphin S300i ou E35i, Beatbot sans fil : nos 3 robots piscine comparés sur le fond et les parois, la ligne d'eau, le filtre et l'appli. Critères, FAQ.",
  },
  "barbecues-connectes": {
    keyword: "barbecue connecté",
    title: "Barbecue connecté 2026 : pellets, électrique ou gaz",
    h1: "Les meilleurs barbecues connectés 2026 : à pellets, électrique ou gaz",
    description: "Weber Searwood à pellets, Ninja Woodfire pour le balcon, Weber Genesis gaz : nos 3 barbecues connectés comparés sur la sonde, la fumée et l'appli. FAQ.",
  },
  "stations-recharge-outdoor": {
    keyword: "station électrique portable",
    title: "Station électrique portable : comparatif 2026 et nos 3 choix",
    h1: "Les meilleures stations électriques portables 2026 : camping, van, coupures",
    description: "EcoFlow DELTA 3 Plus et RIVER 3 Plus, BLUETTI Elite 100 : nos 3 stations électriques portables comparées sur la capacité et la recharge solaire. FAQ.",
  },
  "alarmes-exterieures": {
    keyword: "alarme extérieure",
    title: "Alarme extérieure sans fil : comparatif 2026",
    h1: "Alarme extérieure : les meilleurs détecteurs et sirènes connectés 2026",
    description: "Détecteur extérieur Ajax, sirène Ring ou capteur Philips Hue qui allume la lumière : nos 3 choix pour protéger jardin et abri. Pose, portée et FAQ.",
  },
}
