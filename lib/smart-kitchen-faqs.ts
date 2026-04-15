// Per-category, per-language FAQ data for the Smart Kitchen silo.
// Each category gets 5 Q/A designed around real long-tail search intent.
// Schema.org FAQPage rendering happens in FaqSection.
// Keeping this separate from smart-kitchen-products.ts so content edits
// don't touch the product catalog.

import type { SmartKitchenCategory } from './smart-kitchen-products'

export interface FaqItem {
  question: string
  answer: string
}

type CategoryFaqs = Record<SmartKitchenCategory, FaqItem[]>
type FaqData = Record<string, CategoryFaqs>

export const smartKitchenFaqs: FaqData = {
  fr: {
    multicuiseurs: [
      {
        question: 'Un multicuiseur connecté remplace-t-il vraiment une cocotte et un autocuiseur ?',
        answer: 'Oui pour 80 % des usages quotidiens : braisés, soupes, risottos, cuissons vapeur, yaourts, mijotés longs. Les modèles 6 à 8 litres (Instant Pot, Cosori) cumulent en moyenne 10 à 15 programmes automatiques. Pour la pâtisserie au four ou les grosses pièces de rôti, vous garderez une cocotte classique — mais le multicuiseur libère les brûleurs et pilote la cuisson à votre place.',
      },
      {
        question: 'Quelle capacité choisir selon la taille du foyer ?',
        answer: 'Comptez 1 litre par personne comme base, puis ajoutez 2 litres pour les plats mijotés et les restes. Un couple : 3 à 5 litres. Famille de 4 : 6 litres. Famille nombreuse ou batch-cooking du dimanche : 8 litres. Au-delà, le temps de montée en pression devient pénalisant.',
      },
      {
        question: 'Les applications mobiles des multicuiseurs sont-elles vraiment utiles ?',
        answer: 'Utiles pour trois cas : démarrer une recette à distance sur le chemin du retour, accéder à des recettes pré-programmées sans saisir manuellement la température et le temps, et recevoir une alerte quand la cuisson est terminée. Moins utile si vous cuisinez toujours les mêmes plats — les boutons physiques suffisent.',
      },
      {
        question: 'Quelle est la différence entre un multicuiseur et un robot cuiseur type Thermomix ?',
        answer: 'Le multicuiseur chauffe sous pression et mijote, le robot cuiseur mixe, pèse et pétrit en plus de la cuisson. Pour 200 à 300 €, un multicuiseur couvre 90 % des cuissons longues. Pour 1 000 € et plus, un robot cuiseur ajoute la préparation intégrée mais reste moins performant sur les grosses cuissons sous pression.',
      },
      {
        question: 'Peut-on utiliser un multicuiseur pour la stérilisation de bocaux ou les conserves maison ?',
        answer: 'Techniquement oui avec les modèles sous pression atteignant 115 à 118 °C, mais la capacité limite à 3 à 5 bocaux à la fois. Pour des conserves en série, un stérilisateur dédié reste plus rentable. Le multicuiseur est parfait pour un essai ou un petit lot hebdomadaire.',
      },
    ],
    cafetieres: [
      {
        question: 'Une cafetière connectée vaut-elle le surcoût par rapport à une machine classique ?',
        answer: 'Si vous buvez du café tous les matins à horaire fixe, oui : le démarrage automatique Wi-Fi vous fait gagner 5 minutes par jour. Sur un an, c\'est 30 heures. Pour un usage occasionnel, une machine programmable classique à 60 € suffit amplement.',
      },
      {
        question: 'Quelle différence entre une cafetière filtre connectée et une machine à grains automatique ?',
        answer: 'La cafetière filtre prépare un grand volume (1 à 1,5 L) pour plusieurs tasses d\'un coup, idéale pour petit-déjeuner en famille. La machine à grains moud à la demande pour un expresso individuel et impose une qualité de café supérieure mais un prix d\'entrée 3 à 4 fois plus élevé.',
      },
      {
        question: 'Le Wi-Fi et Alexa/Google Home sont-ils fiables pour piloter une cafetière ?',
        answer: 'Fiable à 95 % sur les marques établies (Smarter, Philips, De\'Longhi Connect). Les 5 % de ratés viennent presque toujours du routeur (2,4 GHz obligatoire sur la plupart des modèles) ou d\'une mise à jour firmware à repousser. Testez en conditions réelles les 30 premiers jours.',
      },
      {
        question: 'Peut-on utiliser du café moulu dans une cafetière connectée ?',
        answer: 'Oui sur les modèles à filtre et la plupart des machines à capsules compatibles. Sur les machines à grains, certains modèles (Jura, De\'Longhi) proposent un bac alternatif pour moulu décaféiné. Vérifiez cette option avant l\'achat si vous alternez les deux formats.',
      },
      {
        question: 'Comment détartrer une cafetière connectée sans abîmer l\'électronique ?',
        answer: 'Utilisez exclusivement les pastilles ou liquides recommandés par le fabricant — l\'acide citrique pur peut attaquer certains joints. Les modèles connectés déclenchent eux-mêmes l\'alerte tous les 150 à 200 cycles. Comptez un détartrage toutes les 6 à 8 semaines en usage quotidien.',
      },
    ],
    balances: [
      {
        question: 'Une balance de cuisine connectée améliore-t-elle vraiment mes recettes ?',
        answer: 'Oui pour la pâtisserie et la boulangerie où 10 grammes d\'écart changent le résultat. L\'app guide étape par étape, convertit automatiquement les unités et recalcule les proportions si vous modifiez le nombre de portions. Pour cuisiner à l\'œil, une balance simple à 15 € suffit.',
      },
      {
        question: 'Quelle précision faut-il exiger d\'une balance de cuisine ?',
        answer: 'Pour 99 % des recettes : 1 gramme de précision sur une plage 5 g à 5 kg. Pour la pâtisserie de précision (macarons, pain au levain) : 0,1 gramme sur les petites quantités (levure, sel). Les balances connectées haut de gamme proposent les deux modes.',
      },
      {
        question: 'Bluetooth ou Wi-Fi : quelle connectivité choisir ?',
        answer: 'Bluetooth suffit dans 95 % des cas — portée de 10 mètres, pas de compte cloud, batterie qui tient 6 à 12 mois. Le Wi-Fi n\'a d\'intérêt que si vous voulez synchroniser vos mesures avec une app nutritionnelle à distance ou partager des données entre foyers.',
      },
      {
        question: 'Les balances connectées nécessitent-elles un abonnement ?',
        answer: 'Non pour les fonctions de base (pesée, tare, conversions). Certaines apps proposent un premium payant pour le suivi nutritionnel détaillé ou les recettes guidées au-delà des 20 à 30 gratuites. Vérifiez ce point avant l\'achat si vous visez l\'usage sans frais récurrents.',
      },
      {
        question: 'Comment nettoyer une balance connectée sans endommager les capteurs ?',
        answer: 'Chiffon humide et savon doux uniquement sur le plateau — jamais de trempage ni de lave-vaisselle, les capteurs de charge situés sous le plateau craignent l\'humidité. Séchez immédiatement. Un nettoyage quotidien après usage prolonge la durée de vie à 5 à 8 ans.',
      },
    ],
    'thermometres-viande': [
      {
        question: 'Un thermomètre connecté est-il vraiment plus précis qu\'un thermomètre classique ?',
        answer: 'La précision brute est identique (± 0,5 à 1 °C) sur les modèles sérieux. Le gain est sur l\'alerte à distance : vous lancez un rôti au four, vous recevez la notif à cœur à 58 °C sur votre téléphone sans ouvrir la porte. Idéal pour les cuissons lentes type low-and-slow (barbecue, sous-vide).',
      },
      {
        question: 'Sonde unique ou sonde multiple : laquelle choisir ?',
        answer: 'Sonde unique pour un usage four ou poêle occasionnel — simple, robuste, 50 à 80 €. Sonde multiple (2 à 6 canaux) pour le barbecue, le fumoir, le sous-vide ou les soirées où vous cuisez plusieurs pièces simultanément — comptez 150 à 300 €.',
      },
      {
        question: 'Quelle température à cœur viser pour les principales viandes ?',
        answer: 'Bœuf saignant 52 à 54 °C, à point 58 à 60 °C, bien cuit 65 à 70 °C. Porc 63 à 65 °C. Volaille 74 °C partout. Agneau 55 à 58 °C pour rosé. Ces valeurs sont pré-programmées dans les apps connectées par type de viande et degré de cuisson.',
      },
      {
        question: 'Les thermomètres connectés supportent-ils le four et le barbecue ?',
        answer: 'Oui pour les sondes filaires jusqu\'à 250 à 300 °C. Les modèles sans-fil 100 % intégrés (type Meater) supportent des températures ambiantes jusqu\'à 275 °C à l\'intérieur et 100 °C dans la partie émettrice, ce qui convient à 95 % des usages four et barbecue.',
      },
      {
        question: 'Quelle est l\'autonomie typique d\'un thermomètre connecté ?',
        answer: '15 à 50 heures par charge selon le modèle et la fréquence d\'émission Bluetooth. Les sondes filaires tournent sur pile bouton AAA ou CR2032 pour 100 à 500 heures. Prévoyez une recharge avant un long brisket ou une cuisson de nuit.',
      },
    ],
    'prises-connectees': [
      {
        question: 'Pourquoi une prise connectée dans la cuisine plutôt qu\'ailleurs ?',
        answer: 'Trois usages clés : allumer la cafetière ou la bouilloire à distance au réveil, couper un fer à repasser ou un appareil oublié depuis le bureau, et surveiller la consommation réelle d\'un four, d\'un airfryer ou d\'un micro-ondes pour identifier les gros postes de facture.',
      },
      {
        question: 'Une prise connectée fonctionne-t-elle avec n\'importe quel appareil ?',
        answer: 'Oui pour tout appareil à interrupteur mécanique ON/OFF qui redémarre automatiquement à la mise sous tension. Incompatible avec les appareils à écran tactile nécessitant un appui manuel pour démarrer (certains fours, micro-ondes récents). Vérifiez ce point avant achat.',
      },
      {
        question: 'Quelle puissance maximale une prise connectée peut-elle supporter ?',
        answer: 'Les modèles grand public acceptent 10 à 16 ampères, soit 2 200 à 3 500 watts. Un four ou une plaque à induction 3 000 W passe à la limite — privilégiez un modèle 16 A et une prise murale dédiée. Les airfryers (1 500 à 2 000 W) passent sans problème.',
      },
      {
        question: 'Les prises connectées exposent-elles mon réseau Wi-Fi à des failles de sécurité ?',
        answer: 'Risque faible sur les marques établies (TP-Link, Xiaomi, Eve) qui publient des mises à jour firmware régulières. Isolez les objets connectés sur un VLAN ou un réseau invité pour une sécurité maximale. Évitez les marques inconnues vendues sous 5 € — historique de CVE non patché.',
      },
      {
        question: 'Comment intégrer une prise connectée dans un scénario domotique ?',
        answer: 'Via Alexa Routines, Google Home Scripts, Home Assistant ou Matter/Thread pour les modèles récents. Exemples : "café lancé 5 min avant l\'alarme du réveil", "coupure automatique du fer après 30 min", "alerte si la consommation du congélateur chute (coupure probable)".',
      },
    ],
  },
  en: {
    multicuiseurs: [
      {
        question: 'Does a smart multicooker really replace a Dutch oven and a pressure cooker?',
        answer: 'Yes for 80% of daily uses: braises, soups, risottos, steaming, yogurt, slow-cooked stews. 6 to 8 liter models (Instant Pot, Cosori) typically combine 10 to 15 automatic programs. For oven baking or large roasts, you\'ll keep a classic Dutch oven — but the multicooker frees your burners and monitors cooking for you.',
      },
      {
        question: 'What capacity should I pick based on household size?',
        answer: 'Count 1 liter per person as a base, then add 2 liters for stews and leftovers. A couple: 3 to 5 liters. Family of 4: 6 liters. Large family or weekend batch-cooking: 8 liters. Beyond that, pressure build-up time becomes a drawback.',
      },
      {
        question: 'Are multicooker mobile apps actually useful?',
        answer: 'Useful for three cases: starting a recipe remotely on your way home, accessing preset recipes without manually entering temperature and time, and getting an alert when cooking is done. Less useful if you always cook the same dishes — physical buttons are enough.',
      },
      {
        question: 'What\'s the difference between a multicooker and a Thermomix-style cooking robot?',
        answer: 'The multicooker heats under pressure and simmers. The cooking robot mixes, weighs, and kneads in addition to cooking. For 200 to 300 EUR, a multicooker covers 90% of long cooks. For 1,000 EUR and up, a cooking robot adds integrated prep but performs less well on large pressure cooks.',
      },
      {
        question: 'Can a multicooker be used for canning and home preserves?',
        answer: 'Technically yes with pressure models reaching 115 to 118 degrees Celsius, but capacity limits to 3 to 5 jars at a time. For serial canning, a dedicated sterilizer remains more cost-effective. The multicooker is ideal for a trial run or a small weekly batch.',
      },
    ],
    cafetieres: [
      {
        question: 'Is a smart coffee maker worth the premium over a classic machine?',
        answer: 'If you drink coffee every morning at a fixed time, yes: Wi-Fi automatic start saves 5 minutes per day. Over a year, that\'s 30 hours. For occasional use, a classic programmable machine at 60 EUR is more than enough.',
      },
      {
        question: 'What\'s the difference between a smart drip coffee maker and an automatic bean-to-cup machine?',
        answer: 'The drip coffee maker prepares a large volume (1 to 1.5 L) for several cups at once, ideal for family breakfast. The bean-to-cup grinds on demand for individual espresso and delivers superior coffee quality but at an entry price 3 to 4 times higher.',
      },
      {
        question: 'Are Wi-Fi and Alexa/Google Home reliable for controlling a coffee maker?',
        answer: '95% reliable on established brands (Smarter, Philips, De\'Longhi Connect). The 5% of failures almost always come from the router (2.4 GHz required on most models) or a firmware update to postpone. Test in real conditions during the first 30 days.',
      },
      {
        question: 'Can ground coffee be used in a smart coffee maker?',
        answer: 'Yes on drip models and most compatible pod machines. On bean-to-cup machines, some models (Jura, De\'Longhi) offer an alternative hopper for decaf grounds. Check this option before buying if you alternate between formats.',
      },
      {
        question: 'How do I descale a smart coffee maker without damaging the electronics?',
        answer: 'Use only tablets or liquids recommended by the manufacturer — pure citric acid can attack some seals. Smart models trigger the alert themselves every 150 to 200 cycles. Count on descaling every 6 to 8 weeks with daily use.',
      },
    ],
    balances: [
      {
        question: 'Does a smart kitchen scale really improve my recipes?',
        answer: 'Yes for baking and bread-making where 10 grams of difference changes the result. The app guides step by step, automatically converts units, and recalculates proportions if you change portion count. For eyeballing cooking, a simple 15 EUR scale is enough.',
      },
      {
        question: 'What precision should I require from a kitchen scale?',
        answer: 'For 99% of recipes: 1 gram precision on a 5 g to 5 kg range. For precision baking (macarons, sourdough): 0.1 gram on small quantities (yeast, salt). High-end smart scales offer both modes.',
      },
      {
        question: 'Bluetooth or Wi-Fi: which connectivity to choose?',
        answer: 'Bluetooth is enough in 95% of cases — 10 meter range, no cloud account, battery lasting 6 to 12 months. Wi-Fi only matters if you want to sync measurements with a nutrition app remotely or share data between households.',
      },
      {
        question: 'Do smart scales require a subscription?',
        answer: 'No for basic functions (weighing, tare, conversions). Some apps offer a paid premium for detailed nutritional tracking or guided recipes beyond the 20 to 30 free ones. Check this before buying if you aim for no recurring fees.',
      },
      {
        question: 'How do I clean a smart scale without damaging the sensors?',
        answer: 'Damp cloth and mild soap only on the platform — never soak or dishwash, the load cells located under the platform are sensitive to moisture. Dry immediately. Daily cleaning after use extends lifespan to 5 to 8 years.',
      },
    ],
    'thermometres-viande': [
      {
        question: 'Is a smart meat thermometer really more accurate than a classic one?',
        answer: 'Raw accuracy is identical (± 0.5 to 1 degree Celsius) on serious models. The gain is remote alerting: you start a roast in the oven and receive the notification at core 58 degrees on your phone without opening the door. Ideal for low-and-slow cooking (barbecue, sous-vide).',
      },
      {
        question: 'Single or multi probe: which to choose?',
        answer: 'Single probe for occasional oven or pan use — simple, robust, 50 to 80 EUR. Multi probe (2 to 6 channels) for barbecue, smoker, sous-vide, or evenings where you cook several pieces simultaneously — count 150 to 300 EUR.',
      },
      {
        question: 'What core temperature to aim for with main meats?',
        answer: 'Beef rare 52 to 54 degrees Celsius, medium 58 to 60, well done 65 to 70. Pork 63 to 65. Poultry 74 across. Lamb 55 to 58 for pink. These values are preset in smart apps by meat type and doneness.',
      },
      {
        question: 'Do smart thermometers support oven and barbecue?',
        answer: 'Yes for wired probes up to 250 to 300 degrees Celsius. 100% integrated wireless models (like Meater) support ambient temperatures up to 275 degrees inside and 100 degrees on the transmitting part, which suits 95% of oven and barbecue uses.',
      },
      {
        question: 'What\'s the typical battery life of a smart thermometer?',
        answer: '15 to 50 hours per charge depending on model and Bluetooth broadcast frequency. Wired probes run on AAA or CR2032 button cells for 100 to 500 hours. Plan a recharge before a long brisket or overnight cook.',
      },
    ],
    'prises-connectees': [
      {
        question: 'Why a smart plug in the kitchen rather than elsewhere?',
        answer: 'Three key uses: turning on the coffee maker or kettle remotely at wake-up, cutting off a forgotten iron or appliance from the office, and monitoring the actual consumption of an oven, air fryer, or microwave to identify the big bill contributors.',
      },
      {
        question: 'Does a smart plug work with any appliance?',
        answer: 'Yes for any device with a mechanical ON/OFF switch that auto-restarts on power-up. Incompatible with touchscreen devices requiring manual press to start (some recent ovens, microwaves). Check this before buying.',
      },
      {
        question: 'What maximum power can a smart plug handle?',
        answer: 'Consumer models accept 10 to 16 amps, which is 2,200 to 3,500 watts. An oven or induction hob at 3,000 W pushes the limit — prefer a 16 A model and a dedicated wall outlet. Air fryers (1,500 to 2,000 W) pass without issue.',
      },
      {
        question: 'Do smart plugs expose my Wi-Fi to security flaws?',
        answer: 'Low risk on established brands (TP-Link, Xiaomi, Eve) that publish regular firmware updates. Isolate smart objects on a VLAN or guest network for maximum security. Avoid unknown brands sold under 5 EUR — unpatched CVE history.',
      },
      {
        question: 'How do I integrate a smart plug into a home automation scenario?',
        answer: 'Via Alexa Routines, Google Home Scripts, Home Assistant, or Matter/Thread for recent models. Examples: "coffee started 5 min before the alarm," "automatic iron cutoff after 30 min," "alert if freezer consumption drops (likely power cut).',
      },
    ],
  },
  de: {
    multicuiseurs: [
      {
        question: 'Ersetzt ein smarter Multikocher wirklich einen Schmortopf und einen Schnellkochtopf?',
        answer: 'Ja für 80 % der täglichen Anwendungen: Schmorgerichte, Suppen, Risottos, Dampfgaren, Joghurt, Eintöpfe. Modelle mit 6 bis 8 Litern (Instant Pot, Cosori) vereinen im Schnitt 10 bis 15 automatische Programme. Für Backofen-Gebäck oder große Braten behalten Sie einen klassischen Topf — aber der Multikocher macht die Kochstelle frei und überwacht den Garprozess für Sie.',
      },
      {
        question: 'Welche Kapazität passt zur Haushaltsgröße?',
        answer: 'Rechnen Sie mit 1 Liter pro Person als Basis, dann 2 Liter für Eintöpfe und Reste dazu. Paar: 3 bis 5 Liter. Familie mit 4 Personen: 6 Liter. Große Familie oder Sonntags-Batch-Cooking: 8 Liter. Darüber hinaus wird die Druckaufbauzeit zum Nachteil.',
      },
      {
        question: 'Sind die Multikocher-Apps wirklich nützlich?',
        answer: 'Nützlich in drei Fällen: ein Rezept auf dem Heimweg aus der Ferne starten, auf vorprogrammierte Rezepte zugreifen ohne Temperatur und Zeit manuell einzugeben, und eine Benachrichtigung erhalten wenn der Garvorgang beendet ist. Weniger nützlich wenn Sie immer die gleichen Gerichte kochen — die physischen Tasten reichen.',
      },
      {
        question: 'Was ist der Unterschied zwischen einem Multikocher und einem Thermomix-Küchenroboter?',
        answer: 'Der Multikocher erhitzt unter Druck und köchelt. Der Küchenroboter mixt, wiegt und knetet zusätzlich zum Kochen. Für 200 bis 300 EUR deckt ein Multikocher 90 % der langen Garvorgänge ab. Für 1 000 EUR und mehr fügt ein Küchenroboter integrierte Vorbereitung hinzu, ist aber bei großen Druckgarvorgängen weniger leistungsfähig.',
      },
      {
        question: 'Kann ein Multikocher zum Einmachen oder für Hauskonserven verwendet werden?',
        answer: 'Technisch ja mit Druckmodellen die 115 bis 118 Grad Celsius erreichen, aber die Kapazität begrenzt auf 3 bis 5 Gläser gleichzeitig. Für serielles Einmachen bleibt ein dedizierter Sterilisator rentabler. Der Multikocher ist perfekt für einen Versuch oder eine kleine wöchentliche Charge.',
      },
    ],
    cafetieres: [
      {
        question: 'Lohnt sich eine smarte Kaffeemaschine gegenüber einer klassischen?',
        answer: 'Wenn Sie jeden Morgen zur festen Zeit Kaffee trinken, ja: automatischer Wi-Fi-Start spart 5 Minuten pro Tag. Über ein Jahr sind das 30 Stunden. Für gelegentlichen Gebrauch reicht eine klassische programmierbare Maschine für 60 EUR völlig aus.',
      },
      {
        question: 'Unterschied zwischen smarter Filterkaffeemaschine und automatischer Kaffeevollautomat?',
        answer: 'Die Filterkaffeemaschine bereitet ein großes Volumen (1 bis 1,5 L) für mehrere Tassen auf einmal zu, ideal für Familienfrühstück. Der Vollautomat mahlt auf Anfrage für einen individuellen Espresso und liefert bessere Kaffeequalität, aber zu einem 3- bis 4-fach höheren Einstiegspreis.',
      },
      {
        question: 'Sind Wi-Fi und Alexa/Google Home zuverlässig für die Steuerung einer Kaffeemaschine?',
        answer: 'Zu 95 % zuverlässig bei etablierten Marken (Smarter, Philips, De\'Longhi Connect). Die 5 % Fehler kommen fast immer vom Router (2,4 GHz auf den meisten Modellen erforderlich) oder einem aufgeschobenen Firmware-Update. Testen Sie in realen Bedingungen in den ersten 30 Tagen.',
      },
      {
        question: 'Kann Kaffeepulver in einer smarten Kaffeemaschine verwendet werden?',
        answer: 'Ja bei Filtermodellen und den meisten kompatiblen Kapselmaschinen. Bei Vollautomaten bieten einige Modelle (Jura, De\'Longhi) einen alternativen Behälter für entkoffeinierten Pulverkaffee. Überprüfen Sie diese Option vor dem Kauf wenn Sie zwischen Formaten wechseln.',
      },
      {
        question: 'Wie entkalke ich eine smarte Kaffeemaschine ohne die Elektronik zu beschädigen?',
        answer: 'Verwenden Sie ausschließlich die vom Hersteller empfohlenen Tabletten oder Flüssigkeiten — reine Zitronensäure kann manche Dichtungen angreifen. Smarte Modelle lösen die Warnung selbst alle 150 bis 200 Zyklen aus. Rechnen Sie mit einer Entkalkung alle 6 bis 8 Wochen bei täglichem Gebrauch.',
      },
    ],
    balances: [
      {
        question: 'Verbessert eine smarte Küchenwaage wirklich meine Rezepte?',
        answer: 'Ja für Backen und Brotbacken wo 10 Gramm Unterschied das Ergebnis verändern. Die App führt Schritt für Schritt, wandelt Einheiten automatisch um und berechnet Proportionen neu wenn Sie die Portionszahl ändern. Für Augenmaß-Kochen reicht eine einfache 15-EUR-Waage.',
      },
      {
        question: 'Welche Präzision muss eine Küchenwaage haben?',
        answer: 'Für 99 % der Rezepte: 1 Gramm Präzision auf 5 g bis 5 kg. Für Präzisionsbacken (Macarons, Sauerteigbrot): 0,1 Gramm auf kleinen Mengen (Hefe, Salz). High-End smarte Waagen bieten beide Modi.',
      },
      {
        question: 'Bluetooth oder Wi-Fi: welche Konnektivität wählen?',
        answer: 'Bluetooth reicht in 95 % der Fälle — 10 Meter Reichweite, kein Cloud-Konto, Batterie hält 6 bis 12 Monate. Wi-Fi lohnt sich nur wenn Sie Messungen mit einer Ernährungs-App aus der Ferne synchronisieren oder Daten zwischen Haushalten teilen wollen.',
      },
      {
        question: 'Benötigen smarte Waagen ein Abonnement?',
        answer: 'Nein für Grundfunktionen (Wiegen, Tara, Umrechnungen). Manche Apps bieten ein kostenpflichtiges Premium für detailliertes Ernährungs-Tracking oder geführte Rezepte jenseits der 20 bis 30 kostenlosen. Prüfen Sie das vor dem Kauf wenn Sie keine laufenden Kosten wollen.',
      },
      {
        question: 'Wie reinige ich eine smarte Waage ohne die Sensoren zu beschädigen?',
        answer: 'Feuchtes Tuch und milde Seife nur auf der Plattform — niemals einweichen oder in die Spülmaschine, die Lastzellen unter der Plattform sind feuchtigkeitsempfindlich. Sofort trocknen. Tägliche Reinigung nach Gebrauch verlängert die Lebensdauer auf 5 bis 8 Jahre.',
      },
    ],
    'thermometres-viande': [
      {
        question: 'Ist ein smartes Fleischthermometer wirklich genauer als ein klassisches?',
        answer: 'Die reine Genauigkeit ist identisch (± 0,5 bis 1 Grad Celsius) bei seriösen Modellen. Der Gewinn liegt in der Fernalarmierung: Sie starten einen Braten im Ofen und erhalten die Benachrichtigung bei 58 Grad Kerntemperatur aufs Handy ohne die Tür zu öffnen. Ideal für Low-and-Slow-Garen (BBQ, Sous-vide).',
      },
      {
        question: 'Einzel- oder Mehrfachsonde: welche wählen?',
        answer: 'Einzelsonde für gelegentlichen Ofen- oder Pfannengebrauch — einfach, robust, 50 bis 80 EUR. Mehrfachsonde (2 bis 6 Kanäle) für BBQ, Räucherofen, Sous-vide oder Abende an denen Sie mehrere Stücke gleichzeitig garen — rechnen Sie mit 150 bis 300 EUR.',
      },
      {
        question: 'Welche Kerntemperatur für die wichtigsten Fleischsorten?',
        answer: 'Rind blutig 52 bis 54 Grad Celsius, medium 58 bis 60, durch 65 bis 70. Schwein 63 bis 65. Geflügel 74 überall. Lamm 55 bis 58 für rosa. Diese Werte sind in smarten Apps nach Fleischart und Garstufe voreingestellt.',
      },
      {
        question: 'Unterstützen smarte Thermometer Ofen und Grill?',
        answer: 'Ja für Kabelsonden bis 250 bis 300 Grad Celsius. 100 % integrierte kabellose Modelle (wie Meater) unterstützen Umgebungstemperaturen bis 275 Grad innen und 100 Grad am Sendeteil, was 95 % der Ofen- und Grillanwendungen abdeckt.',
      },
      {
        question: 'Wie lange hält ein smartes Thermometer?',
        answer: '15 bis 50 Stunden pro Ladung je nach Modell und Bluetooth-Sendefrequenz. Kabelsonden laufen auf AAA- oder CR2032-Knopfzellen für 100 bis 500 Stunden. Planen Sie eine Ladung vor einem langen Brisket oder einer Nachtgarung.',
      },
    ],
    'prises-connectees': [
      {
        question: 'Warum eine smarte Steckdose in der Küche statt woanders?',
        answer: 'Drei Schlüsselnutzungen: Kaffeemaschine oder Wasserkocher beim Aufwachen aus der Ferne einschalten, ein vergessenes Bügeleisen oder Gerät vom Büro aus abschalten, und den tatsächlichen Verbrauch eines Ofens, einer Heißluftfritteuse oder einer Mikrowelle überwachen um die großen Kostentreiber zu identifizieren.',
      },
      {
        question: 'Funktioniert eine smarte Steckdose mit jedem Gerät?',
        answer: 'Ja für jedes Gerät mit mechanischem EIN/AUS-Schalter das bei Stromzufuhr automatisch startet. Inkompatibel mit Touchscreen-Geräten die manuelles Drücken zum Starten erfordern (einige neuere Öfen, Mikrowellen). Prüfen Sie dies vor dem Kauf.',
      },
      {
        question: 'Welche maximale Leistung kann eine smarte Steckdose tragen?',
        answer: 'Consumer-Modelle akzeptieren 10 bis 16 Ampere, das sind 2 200 bis 3 500 Watt. Ein Ofen oder Induktionsherd mit 3 000 W geht an die Grenze — bevorzugen Sie ein 16-A-Modell und eine dedizierte Wandsteckdose. Heißluftfritteusen (1 500 bis 2 000 W) passen problemlos.',
      },
      {
        question: 'Setzen smarte Steckdosen mein Wi-Fi Sicherheitslücken aus?',
        answer: 'Geringes Risiko bei etablierten Marken (TP-Link, Xiaomi, Eve) die regelmäßige Firmware-Updates veröffentlichen. Isolieren Sie smarte Geräte auf einem VLAN oder Gastnetzwerk für maximale Sicherheit. Meiden Sie unbekannte Marken unter 5 EUR — ungepatchter CVE-Verlauf.',
      },
      {
        question: 'Wie integriere ich eine smarte Steckdose in ein Heimautomations-Szenario?',
        answer: 'Über Alexa Routinen, Google Home Skripte, Home Assistant oder Matter/Thread bei neueren Modellen. Beispiele: "Kaffee 5 Min vor dem Wecker gestartet", "automatische Bügeleisen-Abschaltung nach 30 Min", "Alarm wenn Kühlschrank-Verbrauch fällt (wahrscheinlicher Stromausfall)".',
      },
    ],
  },
  es: {
    multicuiseurs: [
      {
        question: '¿Una olla multicocción conectada reemplaza realmente a una cocotte y a una olla a presión?',
        answer: 'Sí para el 80 % de los usos diarios: braseados, sopas, risottos, cocciones al vapor, yogures, guisos largos. Los modelos de 6 a 8 litros (Instant Pot, Cosori) combinan en promedio 10 a 15 programas automáticos. Para repostería al horno o piezas grandes de asado, conservará una cocotte clásica — pero la olla multicocción libera los quemadores y supervisa la cocción por usted.',
      },
      {
        question: '¿Qué capacidad elegir según el tamaño del hogar?',
        answer: 'Cuente 1 litro por persona como base, luego añada 2 litros para guisos y sobras. Pareja: 3 a 5 litros. Familia de 4: 6 litros. Familia numerosa o batch-cooking dominical: 8 litros. Más allá, el tiempo de subida de presión se vuelve un inconveniente.',
      },
      {
        question: '¿Las aplicaciones móviles de las ollas multicocción son realmente útiles?',
        answer: 'Útiles en tres casos: iniciar una receta a distancia de camino a casa, acceder a recetas preprogramadas sin introducir manualmente temperatura y tiempo, y recibir una alerta cuando la cocción ha terminado. Menos útiles si siempre cocina los mismos platos — los botones físicos bastan.',
      },
      {
        question: '¿Cuál es la diferencia entre una olla multicocción y un robot de cocina tipo Thermomix?',
        answer: 'La olla multicocción calienta bajo presión y cuece a fuego lento. El robot de cocina mezcla, pesa y amasa además de cocinar. Por 200 a 300 EUR, una olla multicocción cubre el 90 % de las cocciones largas. Por 1 000 EUR y más, un robot de cocina añade la preparación integrada pero rinde menos en grandes cocciones a presión.',
      },
      {
        question: '¿Se puede usar una olla multicocción para esterilizar tarros o conservas caseras?',
        answer: 'Técnicamente sí con modelos a presión que alcanzan 115 a 118 grados Celsius, pero la capacidad limita a 3 a 5 tarros a la vez. Para conservas en serie, un esterilizador dedicado sigue siendo más rentable. La olla multicocción es perfecta para una prueba o un pequeño lote semanal.',
      },
    ],
    cafetieres: [
      {
        question: '¿Vale la pena el sobreprecio de una cafetera conectada frente a una clásica?',
        answer: 'Si bebe café cada mañana a hora fija, sí: el arranque automático Wi-Fi ahorra 5 minutos al día. En un año, son 30 horas. Para uso ocasional, una máquina programable clásica de 60 EUR es más que suficiente.',
      },
      {
        question: '¿Cuál es la diferencia entre una cafetera de filtro conectada y una automática de granos?',
        answer: 'La cafetera de filtro prepara un gran volumen (1 a 1,5 L) para varias tazas a la vez, ideal para desayuno familiar. La máquina de granos muele a demanda para un espresso individual y entrega calidad de café superior pero a un precio de entrada 3 a 4 veces superior.',
      },
      {
        question: '¿Son fiables Wi-Fi y Alexa/Google Home para controlar una cafetera?',
        answer: 'Fiables al 95 % en marcas establecidas (Smarter, Philips, De\'Longhi Connect). El 5 % de fallos casi siempre viene del router (2,4 GHz obligatorio en la mayoría de modelos) o una actualización de firmware aplazada. Pruebe en condiciones reales los primeros 30 días.',
      },
      {
        question: '¿Se puede usar café molido en una cafetera conectada?',
        answer: 'Sí en modelos de filtro y la mayoría de máquinas de cápsulas compatibles. En máquinas de granos, algunos modelos (Jura, De\'Longhi) ofrecen un depósito alternativo para molido descafeinado. Verifique esta opción antes de comprar si alterna entre formatos.',
      },
      {
        question: '¿Cómo descalcificar una cafetera conectada sin dañar la electrónica?',
        answer: 'Use exclusivamente las pastillas o líquidos recomendados por el fabricante — el ácido cítrico puro puede atacar algunas juntas. Los modelos conectados activan la alerta ellos mismos cada 150 a 200 ciclos. Cuente con una descalcificación cada 6 a 8 semanas con uso diario.',
      },
    ],
    balances: [
      {
        question: '¿Una báscula de cocina conectada mejora realmente mis recetas?',
        answer: 'Sí para repostería y panadería donde 10 gramos de diferencia cambian el resultado. La app guía paso a paso, convierte automáticamente las unidades y recalcula las proporciones si modifica el número de porciones. Para cocinar a ojo, una báscula simple de 15 EUR basta.',
      },
      {
        question: '¿Qué precisión hay que exigir a una báscula de cocina?',
        answer: 'Para el 99 % de las recetas: 1 gramo de precisión en un rango de 5 g a 5 kg. Para repostería de precisión (macarons, pan de masa madre): 0,1 gramo en pequeñas cantidades (levadura, sal). Las básculas conectadas de alta gama ofrecen ambos modos.',
      },
      {
        question: 'Bluetooth o Wi-Fi: ¿qué conectividad elegir?',
        answer: 'Bluetooth basta en el 95 % de los casos — alcance de 10 metros, sin cuenta en la nube, batería que dura 6 a 12 meses. El Wi-Fi solo tiene interés si quiere sincronizar sus medidas con una app nutricional a distancia o compartir datos entre hogares.',
      },
      {
        question: '¿Las básculas conectadas requieren suscripción?',
        answer: 'No para las funciones básicas (pesaje, tara, conversiones). Algunas apps ofrecen un premium de pago para seguimiento nutricional detallado o recetas guiadas más allá de las 20 a 30 gratuitas. Verifique este punto antes de comprar si busca uso sin gastos recurrentes.',
      },
      {
        question: '¿Cómo limpiar una báscula conectada sin dañar los sensores?',
        answer: 'Paño húmedo y jabón suave solo sobre la plataforma — nunca remojar ni lavavajillas, las células de carga bajo la plataforma son sensibles a la humedad. Seque inmediatamente. Una limpieza diaria tras el uso prolonga la vida útil a 5 a 8 años.',
      },
    ],
    'thermometres-viande': [
      {
        question: '¿Un termómetro conectado es realmente más preciso que uno clásico?',
        answer: 'La precisión bruta es idéntica (± 0,5 a 1 grado Celsius) en modelos serios. La ganancia está en la alerta a distancia: inicia un asado en el horno y recibe la notificación a 58 grados en el centro en su móvil sin abrir la puerta. Ideal para cocciones lentas tipo low-and-slow (barbacoa, sous-vide).',
      },
      {
        question: 'Sonda única o múltiple: ¿cuál elegir?',
        answer: 'Sonda única para uso ocasional en horno o sartén — simple, robusta, 50 a 80 EUR. Sonda múltiple (2 a 6 canales) para barbacoa, ahumador, sous-vide o noches en que cocina varias piezas simultáneamente — cuente 150 a 300 EUR.',
      },
      {
        question: '¿Qué temperatura interior apuntar para las principales carnes?',
        answer: 'Ternera poco hecha 52 a 54 grados Celsius, al punto 58 a 60, bien hecha 65 a 70. Cerdo 63 a 65. Aves 74 en todo. Cordero 55 a 58 para rosado. Estos valores están preprogramados en las apps conectadas por tipo de carne y grado de cocción.',
      },
      {
        question: '¿Los termómetros conectados soportan horno y barbacoa?',
        answer: 'Sí para sondas con cable hasta 250 a 300 grados Celsius. Los modelos inalámbricos 100 % integrados (tipo Meater) soportan temperaturas ambiente hasta 275 grados en el interior y 100 grados en la parte emisora, lo que cubre el 95 % de los usos en horno y barbacoa.',
      },
      {
        question: '¿Cuál es la autonomía típica de un termómetro conectado?',
        answer: '15 a 50 horas por carga según modelo y frecuencia de emisión Bluetooth. Las sondas con cable funcionan con pilas botón AAA o CR2032 durante 100 a 500 horas. Prevea una recarga antes de un brisket largo o una cocción nocturna.',
      },
    ],
    'prises-connectees': [
      {
        question: '¿Por qué un enchufe conectado en la cocina en vez de en otro sitio?',
        answer: 'Tres usos clave: encender la cafetera o el hervidor a distancia al despertar, cortar una plancha o aparato olvidado desde la oficina, y supervisar el consumo real de un horno, freidora de aire o microondas para identificar los grandes gastos.',
      },
      {
        question: '¿Un enchufe conectado funciona con cualquier aparato?',
        answer: 'Sí para cualquier aparato con interruptor mecánico ON/OFF que se reinicie automáticamente al aplicar corriente. Incompatible con aparatos de pantalla táctil que requieren pulsación manual para arrancar (algunos hornos, microondas recientes). Verifique esto antes de comprar.',
      },
      {
        question: '¿Qué potencia máxima soporta un enchufe conectado?',
        answer: 'Los modelos de consumo aceptan 10 a 16 amperios, es decir 2 200 a 3 500 vatios. Un horno o placa de inducción de 3 000 W roza el límite — prefiera un modelo de 16 A y un enchufe de pared dedicado. Las freidoras de aire (1 500 a 2 000 W) pasan sin problema.',
      },
      {
        question: '¿Los enchufes conectados exponen mi red Wi-Fi a fallos de seguridad?',
        answer: 'Riesgo bajo en marcas establecidas (TP-Link, Xiaomi, Eve) que publican actualizaciones de firmware regulares. Aísle los objetos conectados en una VLAN o red de invitados para máxima seguridad. Evite marcas desconocidas vendidas bajo 5 EUR — historial de CVE sin parchear.',
      },
      {
        question: '¿Cómo integrar un enchufe conectado en un escenario domótico?',
        answer: 'A través de Alexa Routines, Google Home Scripts, Home Assistant o Matter/Thread para modelos recientes. Ejemplos: "café iniciado 5 min antes de la alarma", "corte automático de la plancha tras 30 min", "alerta si baja el consumo del congelador (probable corte)".',
      },
    ],
  },
  it: {
    multicuiseurs: [
      {
        question: 'Una multicottura connessa sostituisce davvero una casseruola e una pentola a pressione?',
        answer: 'Sì per l\'80 % degli usi quotidiani: brasati, zuppe, risotti, cotture a vapore, yogurt, stufati lunghi. I modelli da 6 a 8 litri (Instant Pot, Cosori) combinano in media 10-15 programmi automatici. Per la pasticceria al forno o i grandi arrosti, conserverete una casseruola classica — ma la multicottura libera i fornelli e monitora la cottura per voi.',
      },
      {
        question: 'Quale capacità scegliere in base alla dimensione della famiglia?',
        answer: 'Contate 1 litro a persona come base, poi aggiungete 2 litri per stufati e avanzi. Coppia: 3-5 litri. Famiglia di 4: 6 litri. Famiglia numerosa o batch-cooking domenicale: 8 litri. Oltre, il tempo di salita in pressione diventa un inconveniente.',
      },
      {
        question: 'Le app mobili delle multicottura sono davvero utili?',
        answer: 'Utili in tre casi: avviare una ricetta a distanza sulla via di casa, accedere a ricette preimpostate senza inserire manualmente temperatura e tempo, e ricevere una notifica a cottura terminata. Meno utili se cucinate sempre gli stessi piatti — i pulsanti fisici bastano.',
      },
      {
        question: 'Che differenza c\'è tra una multicottura e un robot da cucina tipo Thermomix?',
        answer: 'La multicottura riscalda sotto pressione e sobbolle. Il robot da cucina impasta, pesa e mescola oltre a cuocere. Per 200-300 EUR, una multicottura copre il 90 % delle cotture lunghe. Per 1 000 EUR e più, un robot da cucina aggiunge la preparazione integrata ma rende meno sulle grandi cotture a pressione.',
      },
      {
        question: 'Si può usare una multicottura per sterilizzare vasetti o conserve casalinghe?',
        answer: 'Tecnicamente sì con i modelli a pressione che raggiungono 115-118 gradi Celsius, ma la capacità limita a 3-5 vasetti per volta. Per conserve in serie, uno sterilizzatore dedicato resta più conveniente. La multicottura è perfetta per una prova o un piccolo lotto settimanale.',
      },
    ],
    cafetieres: [
      {
        question: 'Una macchina da caffè connessa vale il sovrapprezzo rispetto a una classica?',
        answer: 'Se bevete caffè ogni mattina a orario fisso, sì: l\'avvio automatico Wi-Fi fa guadagnare 5 minuti al giorno. In un anno sono 30 ore. Per uso occasionale, una macchina programmabile classica da 60 EUR basta ampiamente.',
      },
      {
        question: 'Differenza tra una macchina da caffè a filtro connessa e una automatica a chicchi?',
        answer: 'La macchina a filtro prepara un grande volume (1-1,5 L) per più tazze in una volta, ideale per colazione in famiglia. La macchina a chicchi macina a richiesta per un espresso individuale e offre qualità superiore ma a un prezzo d\'ingresso 3-4 volte più alto.',
      },
      {
        question: 'Wi-Fi e Alexa/Google Home sono affidabili per controllare una macchina da caffè?',
        answer: 'Affidabili al 95 % sulle marche consolidate (Smarter, Philips, De\'Longhi Connect). Il 5 % di errori viene quasi sempre dal router (2,4 GHz obbligatorio sulla maggior parte dei modelli) o un aggiornamento firmware rinviato. Testate in condizioni reali nei primi 30 giorni.',
      },
      {
        question: 'Si può usare il caffè macinato in una macchina da caffè connessa?',
        answer: 'Sì sui modelli a filtro e sulla maggior parte delle macchine a capsule compatibili. Sulle macchine a chicchi, alcuni modelli (Jura, De\'Longhi) offrono un serbatoio alternativo per macinato decaffeinato. Verificate questa opzione prima dell\'acquisto se alternate i formati.',
      },
      {
        question: 'Come decalcificare una macchina da caffè connessa senza danneggiare l\'elettronica?',
        answer: 'Usate esclusivamente le pastiglie o i liquidi raccomandati dal produttore — l\'acido citrico puro può attaccare alcune guarnizioni. I modelli connessi attivano l\'allerta da soli ogni 150-200 cicli. Calcolate una decalcificazione ogni 6-8 settimane con uso quotidiano.',
      },
    ],
    balances: [
      {
        question: 'Una bilancia da cucina connessa migliora davvero le mie ricette?',
        answer: 'Sì per pasticceria e panificazione dove 10 grammi di differenza cambiano il risultato. L\'app guida passo dopo passo, converte automaticamente le unità e ricalcola le proporzioni se modificate il numero di porzioni. Per cucinare a occhio, una bilancia semplice da 15 EUR basta.',
      },
      {
        question: 'Che precisione bisogna esigere da una bilancia da cucina?',
        answer: 'Per il 99 % delle ricette: 1 grammo di precisione su un range di 5 g-5 kg. Per la pasticceria di precisione (macarons, pane a lievitazione naturale): 0,1 grammo sulle piccole quantità (lievito, sale). Le bilance connesse di fascia alta offrono entrambe le modalità.',
      },
      {
        question: 'Bluetooth o Wi-Fi: quale connettività scegliere?',
        answer: 'Bluetooth basta nel 95 % dei casi — portata 10 metri, nessun account cloud, batteria che dura 6-12 mesi. Il Wi-Fi ha interesse solo se volete sincronizzare le misure con un\'app nutrizionale a distanza o condividere dati tra famiglie.',
      },
      {
        question: 'Le bilance connesse richiedono un abbonamento?',
        answer: 'No per le funzioni di base (pesatura, tara, conversioni). Alcune app propongono un premium a pagamento per il tracciamento nutrizionale dettagliato o le ricette guidate oltre le 20-30 gratuite. Verificate questo punto prima dell\'acquisto se mirate all\'uso senza costi ricorrenti.',
      },
      {
        question: 'Come pulire una bilancia connessa senza danneggiare i sensori?',
        answer: 'Panno umido e sapone delicato solo sulla piattaforma — mai immergere né lavastoviglie, le celle di carico sotto la piattaforma temono l\'umidità. Asciugate subito. Una pulizia quotidiana dopo l\'uso prolunga la durata a 5-8 anni.',
      },
    ],
    'thermometres-viande': [
      {
        question: 'Un termometro connesso è davvero più preciso di uno classico?',
        answer: 'La precisione grezza è identica (± 0,5-1 grado Celsius) sui modelli seri. Il guadagno è l\'allerta a distanza: avviate un arrosto nel forno e ricevete la notifica al cuore 58 gradi sul telefono senza aprire la porta. Ideale per le cotture lente tipo low-and-slow (barbecue, sous-vide).',
      },
      {
        question: 'Sonda singola o multipla: quale scegliere?',
        answer: 'Sonda singola per uso occasionale al forno o in padella — semplice, robusta, 50-80 EUR. Sonda multipla (2-6 canali) per barbecue, affumicatore, sous-vide o serate dove cuocete più pezzi contemporaneamente — contate 150-300 EUR.',
      },
      {
        question: 'Che temperatura al cuore mirare per le principali carni?',
        answer: 'Manzo al sangue 52-54 gradi Celsius, media cottura 58-60, ben cotto 65-70. Maiale 63-65. Pollame 74 ovunque. Agnello 55-58 per rosato. Questi valori sono preimpostati nelle app connesse per tipo di carne e grado di cottura.',
      },
      {
        question: 'I termometri connessi reggono forno e barbecue?',
        answer: 'Sì per le sonde cablate fino a 250-300 gradi Celsius. I modelli wireless 100 % integrati (tipo Meater) reggono temperature ambiente fino a 275 gradi all\'interno e 100 gradi nella parte trasmittente, il che copre il 95 % degli usi forno e barbecue.',
      },
      {
        question: 'Qual è l\'autonomia tipica di un termometro connesso?',
        answer: '15-50 ore per carica secondo modello e frequenza di emissione Bluetooth. Le sonde cablate funzionano con pile bottone AAA o CR2032 per 100-500 ore. Prevedete una ricarica prima di un brisket lungo o una cottura notturna.',
      },
    ],
    'prises-connectees': [
      {
        question: 'Perché una presa connessa in cucina piuttosto che altrove?',
        answer: 'Tre usi chiave: accendere la macchina da caffè o il bollitore a distanza al risveglio, spegnere un ferro da stiro o un apparecchio dimenticato dall\'ufficio, e monitorare il consumo reale di un forno, friggitrice ad aria o microonde per identificare le grandi voci di bolletta.',
      },
      {
        question: 'Una presa connessa funziona con qualsiasi apparecchio?',
        answer: 'Sì per qualsiasi apparecchio con interruttore meccanico ON/OFF che si riavvia automaticamente all\'accensione. Incompatibile con apparecchi a schermo tattile che richiedono pressione manuale per avviarsi (alcuni forni, microonde recenti). Verificate questo punto prima dell\'acquisto.',
      },
      {
        question: 'Che potenza massima può supportare una presa connessa?',
        answer: 'I modelli consumer accettano 10-16 ampere, cioè 2 200-3 500 watt. Un forno o piano a induzione da 3 000 W sfiora il limite — preferite un modello 16 A e una presa a muro dedicata. Le friggitrici ad aria (1 500-2 000 W) passano senza problemi.',
      },
      {
        question: 'Le prese connesse espongono la mia rete Wi-Fi a vulnerabilità?',
        answer: 'Rischio basso sulle marche consolidate (TP-Link, Xiaomi, Eve) che pubblicano aggiornamenti firmware regolari. Isolate gli oggetti connessi su una VLAN o rete ospite per massima sicurezza. Evitate marche sconosciute vendute sotto i 5 EUR — storico CVE non corretto.',
      },
      {
        question: 'Come integrare una presa connessa in uno scenario domotico?',
        answer: 'Tramite Alexa Routines, Google Home Scripts, Home Assistant o Matter/Thread per i modelli recenti. Esempi: "caffè avviato 5 min prima della sveglia", "spegnimento automatico del ferro dopo 30 min", "allerta se il consumo del congelatore cala (probabile interruzione)".',
      },
    ],
  },
  nl: {
    multicuiseurs: [
      {
        question: 'Vervangt een slimme multicooker echt een braadpan en een snelkookpan?',
        answer: 'Ja voor 80 % van het dagelijks gebruik: stoofpotten, soepen, risottos, stomen, yoghurt, langzaam gekookte schotels. Modellen van 6 tot 8 liter (Instant Pot, Cosori) combineren gemiddeld 10 tot 15 automatische programma\'s. Voor oven-gebak of grote braadstukken houdt u een klassieke braadpan — maar de multicooker maakt de kookplaat vrij en bewaakt het koken voor u.',
      },
      {
        question: 'Welke capaciteit kiezen naargelang de gezinsgrootte?',
        answer: 'Reken 1 liter per persoon als basis, voeg dan 2 liter toe voor stoofpotten en restjes. Stel: 3 tot 5 liter. Gezin van 4: 6 liter. Groot gezin of zondagse batch-cooking: 8 liter. Daarboven wordt de opbouwtijd van de druk een nadeel.',
      },
      {
        question: 'Zijn mobiele apps van multicookers echt nuttig?',
        answer: 'Nuttig in drie gevallen: een recept op afstand starten op weg naar huis, toegang krijgen tot vooraf geprogrammeerde recepten zonder handmatig temperatuur en tijd in te voeren, en een melding krijgen wanneer het koken klaar is. Minder nuttig als u altijd dezelfde gerechten kookt — fysieke knoppen volstaan.',
      },
      {
        question: 'Wat is het verschil tussen een multicooker en een kookrobot zoals de Thermomix?',
        answer: 'De multicooker verhit onder druk en sudderen. De kookrobot mengt, weegt en kneedt naast het koken. Voor 200 tot 300 EUR dekt een multicooker 90 % van de lange bereidingen. Voor 1 000 EUR en meer voegt een kookrobot geïntegreerde voorbereiding toe maar presteert minder op grote drukbereidingen.',
      },
      {
        question: 'Kan een multicooker gebruikt worden voor inmaken of huisgemaakte conserven?',
        answer: 'Technisch ja met drukmodellen die 115 tot 118 graden Celsius bereiken, maar de capaciteit beperkt tot 3 tot 5 potten tegelijk. Voor seriematig inmaken blijft een toegewijde sterilisator rendabeler. De multicooker is perfect voor een test of een kleine wekelijkse batch.',
      },
    ],
    cafetieres: [
      {
        question: 'Is een slimme koffiemachine de meerprijs waard ten opzichte van een klassieke?',
        answer: 'Als u elke ochtend op vast tijdstip koffie drinkt, ja: automatische Wi-Fi-start bespaart 5 minuten per dag. Over een jaar zijn dat 30 uur. Voor occasioneel gebruik volstaat een klassieke programmeerbare machine van 60 EUR ruimschoots.',
      },
      {
        question: 'Wat is het verschil tussen een slimme filterkoffiemachine en een automatische bonenmachine?',
        answer: 'De filterkoffiemachine bereidt een groot volume (1 tot 1,5 L) voor meerdere koppen tegelijk, ideaal voor familieontbijt. De bonenmachine maalt op aanvraag voor individuele espresso en levert superieure koffiekwaliteit maar aan een 3 tot 4 keer hogere instapprijs.',
      },
      {
        question: 'Zijn Wi-Fi en Alexa/Google Home betrouwbaar om een koffiemachine te besturen?',
        answer: 'Voor 95 % betrouwbaar op gevestigde merken (Smarter, Philips, De\'Longhi Connect). De 5 % fouten komen bijna altijd van de router (2,4 GHz verplicht op de meeste modellen) of een uitgestelde firmware-update. Test in reële omstandigheden de eerste 30 dagen.',
      },
      {
        question: 'Kan gemalen koffie gebruikt worden in een slimme koffiemachine?',
        answer: 'Ja op filtermodellen en de meeste compatibele capsulemachines. Op bonenmachines bieden sommige modellen (Jura, De\'Longhi) een alternatief reservoir voor gemalen cafeïnevrije koffie. Controleer deze optie vóór aankoop als u tussen formaten wisselt.',
      },
      {
        question: 'Hoe ontkalk ik een slimme koffiemachine zonder de elektronica te beschadigen?',
        answer: 'Gebruik uitsluitend de door de fabrikant aanbevolen tabletten of vloeistoffen — pure citroenzuur kan sommige dichtingen aantasten. Slimme modellen activeren zelf de waarschuwing elke 150 tot 200 cycli. Reken op een ontkalking elke 6 tot 8 weken bij dagelijks gebruik.',
      },
    ],
    balances: [
      {
        question: 'Verbetert een slimme keukenweegschaal echt mijn recepten?',
        answer: 'Ja voor bakken en broodbakken waar 10 gram verschil het resultaat verandert. De app begeleidt stap voor stap, converteert automatisch eenheden en herberekent verhoudingen als u het aantal porties wijzigt. Voor koken op het oog volstaat een eenvoudige weegschaal van 15 EUR.',
      },
      {
        question: 'Welke precisie moet men van een keukenweegschaal eisen?',
        answer: 'Voor 99 % van de recepten: 1 gram precisie op een bereik van 5 g tot 5 kg. Voor precisie-bakken (macarons, zuurdesembrood): 0,1 gram op kleine hoeveelheden (gist, zout). High-end slimme weegschalen bieden beide modi.',
      },
      {
        question: 'Bluetooth of Wi-Fi: welke connectiviteit kiezen?',
        answer: 'Bluetooth volstaat in 95 % van de gevallen — bereik van 10 meter, geen cloud-account, batterij die 6 tot 12 maanden meegaat. Wi-Fi is alleen interessant als u metingen op afstand met een voedingsapp wilt synchroniseren of gegevens tussen huishoudens wilt delen.',
      },
      {
        question: 'Vereisen slimme weegschalen een abonnement?',
        answer: 'Nee voor basisfuncties (wegen, tarra, conversies). Sommige apps bieden een betaalde premium voor gedetailleerde voedingstracking of begeleide recepten voorbij de 20 tot 30 gratis. Controleer dit vóór aankoop als u gebruik zonder terugkerende kosten beoogt.',
      },
      {
        question: 'Hoe reinig ik een slimme weegschaal zonder de sensoren te beschadigen?',
        answer: 'Vochtige doek en milde zeep alleen op het platform — nooit onderdompelen of vaatwasser, de loadcellen onder het platform zijn vochtgevoelig. Droog onmiddellijk. Dagelijks reinigen na gebruik verlengt de levensduur tot 5 tot 8 jaar.',
      },
    ],
    'thermometres-viande': [
      {
        question: 'Is een slimme thermometer echt nauwkeuriger dan een klassieke?',
        answer: 'De ruwe nauwkeurigheid is identiek (± 0,5 tot 1 graad Celsius) op serieuze modellen. De winst zit in het waarschuwen op afstand: u start een braadstuk in de oven en ontvangt de melding bij kern 58 graden op uw telefoon zonder de deur te openen. Ideaal voor langzame bereidingen type low-and-slow (barbecue, sous-vide).',
      },
      {
        question: 'Enkele of meervoudige sonde: welke kiezen?',
        answer: 'Enkele sonde voor occasioneel oven- of pangebruik — eenvoudig, robuust, 50 tot 80 EUR. Meervoudige sonde (2 tot 6 kanalen) voor barbecue, roker, sous-vide of avonden waarop u meerdere stukken tegelijk gaart — reken 150 tot 300 EUR.',
      },
      {
        question: 'Welke kerntemperatuur nastreven voor de belangrijkste vleessoorten?',
        answer: 'Rundvlees bloederig 52 tot 54 graden Celsius, medium 58 tot 60, doorbakken 65 tot 70. Varken 63 tot 65. Gevogelte 74 overal. Lam 55 tot 58 voor rosé. Deze waarden zijn voorgeprogrammeerd in slimme apps per vleessoort en gaarheid.',
      },
      {
        question: 'Ondersteunen slimme thermometers oven en barbecue?',
        answer: 'Ja voor bedrade sondes tot 250 tot 300 graden Celsius. 100 % geïntegreerde draadloze modellen (zoals Meater) ondersteunen omgevingstemperaturen tot 275 graden binnen en 100 graden op het zendende deel, wat 95 % van het oven- en barbecuegebruik dekt.',
      },
      {
        question: 'Wat is de typische autonomie van een slimme thermometer?',
        answer: '15 tot 50 uur per lading afhankelijk van model en Bluetooth-uitzendfrequentie. Bedrade sondes draaien op AAA- of CR2032-knoopcellen voor 100 tot 500 uur. Voorzie een oplading vóór een lange brisket of nachtelijke bereiding.',
      },
    ],
    'prises-connectees': [
      {
        question: 'Waarom een slimme stekker in de keuken en niet elders?',
        answer: 'Drie belangrijke toepassingen: de koffiemachine of waterkoker op afstand aanzetten bij het ontwaken, een vergeten strijkijzer of toestel uitschakelen vanuit kantoor, en het werkelijke verbruik van een oven, airfryer of magnetron bewaken om de grote factuurposten te identificeren.',
      },
      {
        question: 'Werkt een slimme stekker met elk apparaat?',
        answer: 'Ja voor elk toestel met een mechanische AAN/UIT-schakelaar die automatisch herstart bij inschakelen. Incompatibel met toestellen met aanraakscherm die handmatige druk vereisen om op te starten (sommige recente ovens, magnetrons). Controleer dit punt vóór aankoop.',
      },
      {
        question: 'Welk maximaal vermogen kan een slimme stekker aan?',
        answer: 'Consumentmodellen accepteren 10 tot 16 ampère, dat is 2 200 tot 3 500 watt. Een oven of inductiekookplaat van 3 000 W zit aan de limiet — verkies een 16 A-model en een specifieke wandcontactdoos. Airfryers (1 500 tot 2 000 W) passeren zonder probleem.',
      },
      {
        question: 'Stellen slimme stekkers mijn Wi-Fi bloot aan beveiligingslekken?',
        answer: 'Laag risico bij gevestigde merken (TP-Link, Xiaomi, Eve) die regelmatig firmware-updates publiceren. Isoleer slimme objecten op een VLAN of gastnetwerk voor maximale beveiliging. Vermijd onbekende merken die onder 5 EUR worden verkocht — niet-gepatchte CVE-historiek.',
      },
      {
        question: 'Hoe integreer ik een slimme stekker in een domotica-scenario?',
        answer: 'Via Alexa Routines, Google Home Scripts, Home Assistant of Matter/Thread voor recente modellen. Voorbeelden: "koffie gestart 5 min voor de wekker", "automatische uitschakeling van het strijkijzer na 30 min", "melding als het verbruik van de vriezer daalt (waarschijnlijke stroomonderbreking)".',
      },
    ],
  },
}

export function getSmartKitchenFaqs(lang: string, category: SmartKitchenCategory): FaqItem[] {
  return smartKitchenFaqs[lang]?.[category] || smartKitchenFaqs.fr[category]
}

export const faqSectionTitles: Record<string, string> = {
  fr: 'Questions fréquentes',
  en: 'Frequently asked questions',
  de: 'Häufig gestellte Fragen',
  es: 'Preguntas frecuentes',
  it: 'Domande frequenti',
  nl: 'Veelgestelde vragen',
}
