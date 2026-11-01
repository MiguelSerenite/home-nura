// Per-category, per-language FAQ data for the Smart Kitchen silo.
// Each category gets 5 Q/A designed around real long-tail search intent.
// Schema.org FAQPage rendering happens in FaqSection.
// Keeping this separate from smart-kitchen-products.ts so content edits
// don't touch the product catalog.

import type { SmartKitchenCategory } from './smart-kitchen-products'
import { getCategorySpecificFaq } from './catalog/category-faqs'

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
        question: 'Can a smart multicooker really replace my casserole dish and pressure cooker?',
        answer: 'For about 80% of everyday cooking, yes: braises, soups, risottos, steaming, yoghurt and long, slow stews. The 6- to 8-litre models (Instant Pot, Cosori) offer 10 to 15 automatic programmes on average. For oven baking or large roasting joints you\'ll still want your casserole dish, but a multicooker frees up your hob and takes care of the cooking for you.',
      },
      {
        question: 'What size multicooker do I need for my household?',
        answer: 'Start with 1 litre per person, then add 2 litres for stews and leftovers. A couple: 3 to 5 litres. A family of four: 6 litres. A large family, or Sunday batch cooking: 8 litres. Any bigger and it takes too long to come up to pressure.',
      },
      {
        question: 'Are multicooker apps actually useful?',
        answer: 'They help in three situations: starting a recipe from your phone on the way home, using pre-programmed recipes without keying in the temperature and time yourself, and getting an alert when the food is ready. They\'re less useful if you always cook the same dishes – the buttons on the machine are enough.',
      },
      {
        question: 'What\'s the difference between a multicooker and a Thermomix-style machine?',
        answer: 'A multicooker pressure-cooks and simmers. A cooking food processor also blends, weighs and kneads as well as cooking. A multicooker handles 90% of long, slow cooking for much less money. A cooking food processor costs several times as much and adds built-in food prep, but it\'s less capable with large pressure-cooked dishes.',
      },
      {
        question: 'Can I use a multicooker to sterilise jars or for home preserving?',
        answer: 'Technically yes, with pressure models that reach 115 to 118°C, but you can only fit 3 to 5 jars at a time. For preserving in bulk, a dedicated steriliser is better value. A multicooker is ideal for a trial run or a small weekly batch.',
      },
    ],
    cafetieres: [
      {
        question: 'Is a smart coffee machine worth the extra cost over a standard one?',
        answer: 'If you drink coffee at the same time every morning, yes: the automatic Wi-Fi start saves you 5 minutes a day, which adds up to 30 hours over a year. If you only have the odd cup, an inexpensive standard programmable machine is more than enough.',
      },
      {
        question: 'What\'s the difference between a smart filter coffee machine and a bean-to-cup machine?',
        answer: 'A filter coffee machine brews a large batch (1 to 1.5 litres) for several cups at once, which is ideal for a family breakfast. A bean-to-cup machine grinds fresh for each espresso and makes noticeably better coffee, but entry-level models cost 3 to 4 times as much.',
      },
      {
        question: 'Can I rely on Wi-Fi and Alexa or Google Home to control my coffee machine?',
        answer: 'With established brands (Smarter, Philips, De\'Longhi Connect), it works 95% of the time. The other 5% almost always comes down to the router (most models need a 2.4 GHz network) or a firmware update that\'s best put off. Try it out in your normal routine over the first 30 days.',
      },
      {
        question: 'Can I use ground coffee in a smart coffee machine?',
        answer: 'Yes with filter models and most compatible pod machines. On bean-to-cup machines, some models (Jura, De\'Longhi) have a separate compartment for pre-ground decaf. Check for this before you buy if you switch between beans and ground coffee.',
      },
      {
        question: 'How do I descale a smart coffee machine without damaging the electronics?',
        answer: 'Only use the descaling tablets or liquid recommended by the manufacturer – pure citric acid can damage some seals. Smart models remind you themselves every 150 to 200 cycles. With daily use, expect to descale every 6 to 8 weeks.',
      },
    ],
    balances: [
      {
        question: 'Will smart kitchen scales really improve my cooking?',
        answer: 'For baking and bread-making, yes, because 10 grams either way changes the result. The app guides you step by step, converts units automatically and recalculates quantities if you change the number of servings. If you cook by eye, a cheap basic set of scales is all you need.',
      },
      {
        question: 'How accurate do kitchen scales need to be?',
        answer: 'For 99% of recipes, accurate to 1 gram over a 5 g to 5 kg range. For precision baking (macarons, sourdough), accurate to 0.1 gram for small quantities such as yeast and salt. High-end smart scales offer both modes.',
      },
      {
        question: 'Bluetooth or Wi-Fi: which should I choose?',
        answer: 'Bluetooth is enough 95% of the time: it has a 10-metre range, needs no cloud account and the battery lasts 6 to 12 months. Wi-Fi is only worth having if you want to sync your measurements with a nutrition app remotely or share data between households.',
      },
      {
        question: 'Do smart scales need a subscription?',
        answer: 'Not for the basics (weighing, tare, conversions). Some apps charge for a premium tier with detailed nutrition tracking or guided recipes beyond the 20 to 30 free ones. Check before you buy if you want to avoid ongoing fees.',
      },
      {
        question: 'How do I clean smart scales without damaging the sensors?',
        answer: 'Wipe the platform with a damp cloth and mild soap, nothing more. Never soak the scales or put them in the dishwasher: the load cells under the platform don\'t like moisture. Dry them straight away. Cleaning them after every use helps them last 5 to 8 years.',
      },
    ],
    'thermometres-viande': [
      {
        question: 'Is a smart meat thermometer really more accurate than a standard one?',
        answer: 'On good models, the accuracy itself is the same (±0.5 to 1°C). The benefit is the remote alert: you put a joint in the oven and your phone tells you when the centre reaches 58°C, without you opening the door. Ideal for low-and-slow cooking (barbecue, sous-vide).',
      },
      {
        question: 'Single probe or multiple probes: which should I choose?',
        answer: 'A single probe is fine for occasional use in the oven or frying pan: simple, sturdy and one of the cheaper options. Multiple probes (2 to 6 channels) suit barbecuing, smoking, sous-vide or evenings when you\'re cooking several cuts at once, but expect to pay a good deal more.',
      },
      {
        question: 'What core temperature should I cook meat to?',
        answer: 'Beef: rare 52–54°C, medium 58–60°C, well done 65–70°C. Pork: 63–65°C. Poultry: 74°C all the way through. Lamb: 55–58°C for pink. Smart thermometer apps have these values preset by type of meat and doneness.',
      },
      {
        question: 'Can smart thermometers go in the oven and on the barbecue?',
        answer: 'Yes: wired probes handle 250 to 300°C. Fully wireless models (such as Meater) can take ambient temperatures of up to 275°C inside and 100°C at the transmitter end, which covers 95% of oven and barbecue cooking.',
      },
      {
        question: 'How long does a smart thermometer\'s battery last?',
        answer: '15 to 50 hours per charge, depending on the model and how often it transmits over Bluetooth. Wired models run on AAA batteries or CR2032 button cells for 100 to 500 hours. Charge it before a long brisket or an overnight cook.',
      },
    ],
    'prises-connectees': [
      {
        question: 'Why use a smart plug in the kitchen in particular?',
        answer: 'Three main uses: switching on the coffee machine or kettle from your phone when you wake up, turning off an iron or an appliance you\'ve left on while you\'re at work, and measuring how much electricity an oven, air fryer or microwave really uses, so you can see what\'s pushing up your bill.',
      },
      {
        question: 'Will a smart plug work with any appliance?',
        answer: 'Yes, as long as the appliance has a mechanical on/off switch and comes back on by itself when the power is restored. It won\'t work with touch-control appliances that need a button pressing to start (some ovens and recent microwaves). Check this before you buy.',
      },
      {
        question: 'What\'s the maximum load a smart plug can handle?',
        answer: 'Consumer models are rated at 10 to 16 amps, or roughly 2,200 to 3,500 watts. A 3,000 W oven or induction hob pushes it to the limit, so use the highest-rated model your sockets allow (16 A where available) on a wall socket of its own. Air fryers (1,500 to 2,000 W) are no problem.',
      },
      {
        question: 'Do smart plugs put my Wi-Fi network at risk?',
        answer: 'The risk is low with established brands (TP-Link, Xiaomi, Eve), which release regular firmware updates. For maximum security, put your smart devices on a VLAN or a guest network. Steer clear of unknown bargain-basement brands, which have a track record of unpatched vulnerabilities (CVEs).',
      },
      {
        question: 'How do I add a smart plug to a smart home routine?',
        answer: 'Through Alexa Routines, Google Home Scripts, Home Assistant, or Matter/Thread on recent models. For example: “start the coffee 5 minutes before the alarm goes off”, “switch the iron off automatically after 30 minutes”, “send an alert if the freezer\'s power use drops (probably a power cut)”.',
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
        question: '¿Puede una olla programable con app sustituir a la cocotte y a la olla a presión?',
        answer: 'Sí, en el 80 % de los usos diarios: estofados, sopas, risottos, cocción al vapor, yogures y guisos a fuego lento. Los modelos de 6 a 8 litros (Instant Pot, Cosori) tienen de media entre 10 y 15 programas automáticos. Para la repostería al horno o los asados grandes seguirás necesitando una cocotte clásica, pero la olla programable te deja libres los fuegos y controla la cocción por ti.',
      },
      {
        question: '¿Qué capacidad elegir según cuántos sois en casa?',
        answer: 'Calcula 1 litro por persona como base y añade 2 litros para guisos y sobras. Pareja: de 3 a 5 litros. Familia de 4: 6 litros. Familia numerosa o batch cooking del domingo: 8 litros. Por encima de eso, la olla tarda demasiado en coger presión.',
      },
      {
        question: '¿De verdad son útiles las apps de las ollas programables?',
        answer: 'Sí, en tres casos: poner en marcha una receta a distancia cuando vuelves a casa, usar recetas preprogramadas sin tener que introducir a mano la temperatura y el tiempo, y recibir un aviso cuando termina la cocción. Son menos útiles si siempre cocinas los mismos platos: con los botones físicos basta.',
      },
      {
        question: '¿Qué diferencia hay entre una olla programable y un robot de cocina tipo Thermomix?',
        answer: 'La olla programable cocina a presión y a fuego lento; el robot de cocina, además de cocinar, tritura, pesa y amasa. Por entre 200 y 300 €, una olla programable cubre el 90 % de las cocciones largas. Por 1.000 € o más, un robot de cocina añade la preparación integrada, pero rinde menos cuando hay que cocinar mucha cantidad a presión.',
      },
      {
        question: '¿Se puede usar una olla programable para esterilizar tarros o hacer conservas caseras?',
        answer: 'Técnicamente sí, con los modelos a presión que alcanzan de 115 a 118 °C, pero por capacidad solo caben de 3 a 5 tarros a la vez. Para hacer conservas en cantidad sale más a cuenta un esterilizador específico. La olla programable es perfecta para una prueba o para una tanda pequeña a la semana.',
      },
    ],
    cafetieres: [
      {
        question: '¿Merece la pena pagar más por una cafetera con wifi que por una normal?',
        answer: 'Si tomas café todas las mañanas a la misma hora, sí: el encendido automático por wifi te ahorra 5 minutos al día, que en un año suman 30 horas. Para un uso ocasional, una cafetera programable normal de 60 € es más que suficiente.',
      },
      {
        question: '¿Qué diferencia hay entre una cafetera de goteo con wifi y una cafetera superautomática?',
        answer: 'La cafetera de goteo prepara mucha cantidad (de 1 a 1,5 L) para varias tazas de una vez, ideal para el desayuno en familia. La superautomática muele el grano al momento para un espresso individual y da un café de más calidad, pero su precio de entrada es de 3 a 4 veces mayor.',
      },
      {
        question: '¿Son fiables el wifi y Alexa o Google Home para controlar una cafetera?',
        answer: 'Funcionan bien el 95 % de las veces con las marcas consolidadas (Smarter, Philips, De\'Longhi Connect). Ese 5 % de fallos casi siempre se debe al router (la mayoría de los modelos solo funcionan con wifi de 2,4 GHz) o a una actualización de firmware que conviene aplazar. Pruébala en tu día a día durante los primeros 30 días.',
      },
      {
        question: '¿Se puede usar café molido en una cafetera con wifi?',
        answer: 'Sí, en las de goteo y en la mayoría de las cafeteras de cápsulas compatibles. Entre las superautomáticas, algunos modelos (Jura, De\'Longhi) tienen un compartimento aparte para café molido, pensado para el descafeinado. Si vas a alternar los dos formatos, comprueba que tenga esta opción antes de comprar.',
      },
      {
        question: '¿Cómo descalcificar una cafetera con wifi sin dañar la electrónica?',
        answer: 'Usa solo las pastillas o los líquidos que recomienda el fabricante: el ácido cítrico puro puede dañar algunas juntas. Los modelos con wifi te avisan solos cada 150 a 200 ciclos. Cuenta con descalcificarla cada 6 a 8 semanas si la usas a diario.',
      },
    ],
    balances: [
      {
        question: '¿Una báscula de cocina inteligente mejora de verdad mis recetas?',
        answer: 'Sí, en repostería y panadería, donde 10 gramos de diferencia cambian el resultado. La app te guía paso a paso, convierte las unidades automáticamente y recalcula las proporciones si cambias el número de raciones. Para cocinar a ojo, basta con una báscula sencilla de 15 €.',
      },
      {
        question: '¿Qué precisión debe tener una báscula de cocina?',
        answer: 'Para el 99 % de las recetas: precisión de 1 gramo en un rango de 5 g a 5 kg. Para la repostería de precisión (macarons, pan de masa madre): 0,1 gramos en cantidades pequeñas (levadura, sal). Las básculas inteligentes de gama alta ofrecen los dos modos.',
      },
      {
        question: 'Bluetooth o wifi: ¿qué conexión elegir?',
        answer: 'Con Bluetooth basta en el 95 % de los casos: 10 metros de alcance, sin cuenta en la nube y una batería que dura de 6 a 12 meses. El wifi solo compensa si quieres sincronizar tus pesajes con una app de nutrición a distancia o compartir datos entre varios hogares.',
      },
      {
        question: '¿Las básculas inteligentes necesitan suscripción?',
        answer: 'No para las funciones básicas (pesar, tara, conversiones). Algunas apps tienen una versión de pago para el seguimiento nutricional detallado o para tener más recetas guiadas que las 20 o 30 gratuitas. Compruébalo antes de comprar si no quieres gastos recurrentes.',
      },
      {
        question: '¿Cómo limpiar una báscula inteligente sin dañar los sensores?',
        answer: 'Solo con un paño húmedo y jabón suave sobre la plataforma: nunca la sumerjas ni la metas en el lavavajillas, porque las células de carga que hay debajo no soportan la humedad. Sécala enseguida. Limpiarla a diario después de usarla alarga su vida útil hasta 5-8 años.',
      },
    ],
    'thermometres-viande': [
      {
        question: '¿Un termómetro inteligente es de verdad más preciso que uno normal?',
        answer: 'La precisión en sí es la misma (de ± 0,5 a 1 °C) en los modelos serios. La ventaja está en el aviso a distancia: metes un asado en el horno y recibes la notificación en el móvil cuando el centro llega a 58 °C, sin abrir la puerta. Ideal para cocciones lentas tipo low and slow (barbacoa, sous vide).',
      },
      {
        question: 'Una sonda o varias: ¿cuál elegir?',
        answer: 'Una sola sonda para usarla de vez en cuando en el horno o la sartén: sencilla, robusta y de 50 a 80 €. Varias sondas (de 2 a 6 canales) para barbacoa, ahumador, sous vide o esas cenas en las que cocinas varias piezas a la vez: cuenta con 150 a 300 €.',
      },
      {
        question: '¿Qué temperatura interior hay que alcanzar en las carnes más habituales?',
        answer: 'Ternera poco hecha: de 52 a 54 °C; al punto: de 58 a 60 °C; muy hecha: de 65 a 70 °C. Cerdo: de 63 a 65 °C. Aves: 74 °C en toda la pieza. Cordero: de 55 a 58 °C para que quede rosado. Las apps de los termómetros inteligentes traen estos valores preprogramados por tipo de carne y punto de cocción.',
      },
      {
        question: '¿Los termómetros inteligentes aguantan el horno y la barbacoa?',
        answer: 'Sí, las sondas con cable, hasta 250-300 °C. Los modelos totalmente inalámbricos (tipo Meater) aguantan temperaturas ambiente de hasta 275 °C en el interior y de 100 °C en la parte emisora, lo que basta para el 95 % de los usos en horno y barbacoa.',
      },
      {
        question: '¿Cuánta autonomía suele tener un termómetro inteligente?',
        answer: 'De 15 a 50 horas por carga, según el modelo y la frecuencia con la que emite por Bluetooth. Las sondas con cable funcionan con pilas AAA o de botón CR2032 durante 100 a 500 horas. Cárgalo antes de un brisket largo o de una cocción de toda la noche.',
      },
    ],
    'prises-connectees': [
      {
        question: '¿Por qué un enchufe inteligente en la cocina y no en otra parte?',
        answer: 'Por tres usos clave: encender la cafetera o el hervidor a distancia al despertarte, apagar desde la oficina una plancha o un aparato que te has dejado encendido, y vigilar el consumo real del horno, la freidora de aire o el microondas para saber qué es lo que más pesa en la factura de la luz.',
      },
      {
        question: '¿Un enchufe inteligente funciona con cualquier aparato?',
        answer: 'Sí, con cualquier aparato con interruptor mecánico de encendido y apagado que se ponga en marcha solo al recibir corriente. No sirve para los aparatos con pantalla táctil que hay que pulsar a mano para arrancar (algunos hornos y microondas recientes). Compruébalo antes de comprar.',
      },
      {
        question: '¿Qué potencia máxima aguanta un enchufe inteligente?',
        answer: 'Los modelos domésticos admiten de 10 a 16 amperios, es decir, de 2.200 a 3.500 vatios. Un horno o una placa de inducción de 3.000 W va muy al límite: mejor un modelo de 16 A y una toma de pared solo para ese aparato. Las freidoras de aire (de 1.500 a 2.000 W) no dan ningún problema.',
      },
      {
        question: '¿Los enchufes inteligentes ponen en riesgo la seguridad de mi red wifi?',
        answer: 'El riesgo es bajo con las marcas consolidadas (TP-Link, Xiaomi, Eve), que publican actualizaciones de firmware con regularidad. Para la máxima seguridad, separa los dispositivos inteligentes en una VLAN o en una red de invitados. Evita las marcas desconocidas de menos de 5 €: arrastran vulnerabilidades (CVE) sin corregir.',
      },
      {
        question: '¿Cómo incluir un enchufe inteligente en una rutina domótica?',
        answer: 'Con las rutinas de Alexa, los scripts de Google Home, Home Assistant o Matter/Thread en los modelos recientes. Ejemplos: «café en marcha 5 minutos antes de que suene el despertador», «la plancha se apaga sola a los 30 minutos», «aviso si baja el consumo del congelador (probable corte de luz)».',
      },
    ],
  },
  it: {
    multicuiseurs: [
      {
        question: 'Un multicooker smart sostituisce davvero casseruola e pentola a pressione?',
        answer: 'Sì, per l\'80% degli usi quotidiani: brasati, zuppe, risotti, cotture a vapore, yogurt e stufati a cottura lenta. I modelli da 6 a 8 litri (Instant Pot, Cosori) offrono in media da 10 a 15 programmi automatici. Per i dolci da forno o i grandi arrosti continuerai a usare una casseruola classica, ma il multicooker ti lascia liberi i fornelli e gestisce la cottura al posto tuo.',
      },
      {
        question: 'Quale capacità scegliere in base a quanti siete in casa?',
        answer: 'Come base, conta 1 litro a persona e aggiungi 2 litri per stufati e avanzi. A una coppia bastano 3-5 litri, per una famiglia di 4 persone ne servono 6. Se la famiglia è numerosa o la domenica prepari i pasti della settimana (batch cooking), scegli 8 litri. Oltre questa capacità, il multicooker impiega troppo tempo ad andare in pressione.',
      },
      {
        question: 'Le app dei multicooker servono davvero?',
        answer: 'Sono utili in tre casi: per avviare una ricetta a distanza mentre torni a casa, per usare ricette già programmate senza impostare a mano temperatura e tempo, e per ricevere un avviso quando la cottura è finita. Servono meno se cucini sempre gli stessi piatti: in quel caso bastano i tasti dell\'apparecchio.',
      },
      {
        question: 'Che differenza c\'è tra un multicooker e un robot da cucina come il Bimby (Thermomix)?',
        answer: 'Il multicooker cuoce a pressione e a fuoco lento, mentre il robot da cucina, oltre a cuocere, frulla, pesa e impasta. Con 200-300 € un multicooker copre il 90% delle cotture lunghe. Un robot da cucina, da 1.000 € in su, prepara anche gli ingredienti, ma rende meno nelle grandi cotture a pressione.',
      },
      {
        question: 'Si può usare un multicooker per sterilizzare i vasetti o fare le conserve in casa?',
        answer: 'Tecnicamente sì, con i modelli a pressione che arrivano a 115-118 °C, ma la capienza permette di sterilizzare solo 3-5 vasetti alla volta. Per grandi quantità di conserve conviene di più uno sterilizzatore dedicato. Il multicooker va benissimo per fare una prova o per preparare qualche vasetto ogni settimana.',
      },
    ],
    cafetieres: [
      {
        question: 'Una macchina da caffè smart vale la spesa in più rispetto a una classica?',
        answer: 'Sì, se bevi il caffè ogni mattina alla stessa ora: l\'avvio automatico via Wi-Fi ti fa risparmiare 5 minuti al giorno, cioè 30 ore in un anno. Se lo bevi solo ogni tanto, ti basta e avanza una normale macchina programmabile da 60 €.',
      },
      {
        question: 'Che differenza c\'è tra una macchina per caffè filtro smart e una superautomatica a chicchi?',
        answer: 'La macchina per caffè filtro prepara grandi quantità (1-1,5 L), cioè più tazze in una volta sola, ed è l\'ideale per la colazione in famiglia. La superautomatica macina i chicchi al momento per un espresso alla volta e offre un caffè di qualità superiore, ma il suo prezzo di partenza è 3-4 volte più alto.',
      },
      {
        question: 'Wi-Fi e Alexa/Google Home sono affidabili per comandare una macchina da caffè?',
        answer: 'Sì, nel 95% dei casi con le marche affermate (Smarter, Philips, De\'Longhi Connect). Il restante 5% di problemi dipende quasi sempre dal router (la maggior parte dei modelli funziona solo sulla rete a 2,4 GHz) o da un aggiornamento del firmware rimasto in sospeso. Nei primi 30 giorni, provala bene nell\'uso di tutti i giorni.',
      },
      {
        question: 'Si può usare il caffè macinato in una macchina da caffè smart?',
        answer: 'Sì, nei modelli a filtro e nella maggior parte delle macchine a capsule compatibili. Tra le macchine a chicchi, alcuni modelli (Jura, De\'Longhi) hanno uno scomparto a parte per il caffè già macinato, comodo per il decaffeinato. Se alterni chicchi e macinato, controlla che ci sia prima di comprare.',
      },
      {
        question: 'Come decalcificare una macchina da caffè smart senza danneggiare l\'elettronica?',
        answer: 'Usa solo le pastiglie o i liquidi decalcificanti consigliati dal produttore: l\'acido citrico puro può rovinare alcune guarnizioni. I modelli smart segnalano da soli quando è ora di decalcificare, ogni 150-200 cicli. Con un uso quotidiano, calcola una decalcificazione ogni 6-8 settimane.',
      },
    ],
    balances: [
      {
        question: 'Con una bilancia da cucina smart le ricette riescono davvero meglio?',
        answer: 'Sì, per i dolci e il pane, dove 10 grammi di differenza cambiano il risultato. L\'app ti guida passo passo, converte da sola le unità di misura e ricalcola le dosi se cambi il numero di porzioni. Se cucini a occhio, ti basta una bilancia semplice da 15 €.',
      },
      {
        question: 'Quanto deve essere precisa una bilancia da cucina?',
        answer: 'Per il 99% delle ricette basta una precisione di 1 grammo, da 5 g a 5 kg. Per la pasticceria più tecnica (macaron, pane con lievito madre) serve una precisione di 0,1 grammi sulle piccole dosi, come lievito e sale. Le bilance smart di fascia alta offrono entrambe le modalità.',
      },
      {
        question: 'Bluetooth o Wi-Fi: quale connessione scegliere?',
        answer: 'Nel 95% dei casi basta il Bluetooth: 10 metri di portata, nessun account cloud e una batteria che dura 6-12 mesi. Il Wi-Fi serve solo se vuoi sincronizzare le pesate con un\'app nutrizionale a distanza o condividere i dati con un\'altra famiglia.',
      },
      {
        question: 'Per usare una bilancia smart serve un abbonamento?',
        answer: 'No, non per le funzioni di base (pesata, tara, conversioni). Alcune app propongono una versione premium a pagamento per il monitoraggio nutrizionale dettagliato o per avere altre ricette guidate oltre alle 20-30 gratuite. Se non vuoi costi ricorrenti, controlla questo punto prima di comprare.',
      },
      {
        question: 'Come pulire una bilancia smart senza danneggiare i sensori?',
        answer: 'Pulisci solo il piatto, con un panno umido e un sapone delicato. Niente ammollo e niente lavastoviglie: le celle di carico sotto il piatto temono l\'umidità. Asciugala subito. Se la pulisci dopo ogni uso, può durare 5-8 anni.',
      },
    ],
    'thermometres-viande': [
      {
        question: 'Un termometro per carne smart è davvero più preciso di uno classico?',
        answer: 'Sui modelli seri la precisione è la stessa (± 0,5-1 °C). Il vantaggio è l\'avviso a distanza: metti un arrosto in forno e, quando il cuore arriva a 58 °C, ricevi la notifica sul telefono senza aprire lo sportello. È l\'ideale per le cotture lente a bassa temperatura (barbecue, cottura sottovuoto).',
      },
      {
        question: 'Sonda singola o più sonde: quale scegliere?',
        answer: 'Una sonda singola basta se usi il termometro ogni tanto in forno o in padella: è semplice, robusta e costa 50-80 €. Le sonde multiple (da 2 a 6 canali) servono per barbecue, affumicatore, cottura sottovuoto o per le serate in cui cuoci più pezzi di carne insieme: in questo caso calcola 150-300 €.',
      },
      {
        question: 'A che temperatura al cuore vanno cotte le varie carni?',
        answer: 'Manzo al sangue 52-54 °C, a cottura media 58-60 °C, ben cotto 65-70 °C. Maiale 63-65 °C. Pollame 74 °C in ogni punto. Agnello rosato 55-58 °C. Le app dei termometri smart hanno già questi valori impostati per tipo di carne e grado di cottura.',
      },
      {
        question: 'I termometri per carne smart resistono al forno e al barbecue?',
        answer: 'Sì: le sonde con cavo reggono fino a 250-300 °C. I modelli completamente senza fili (come il Meater) sopportano fino a 275 °C di temperatura ambiente nel forno e fino a 100 °C nella parte che trasmette il segnale, quanto basta per il 95% degli usi in forno e al barbecue.',
      },
      {
        question: 'Quanto dura la batteria di un termometro per carne smart?',
        answer: 'Da 15 a 50 ore per ricarica, a seconda del modello e della frequenza di trasmissione Bluetooth. I modelli con sonde a filo usano pile AAA o a bottone CR2032 e durano 100-500 ore. Prima di un brisket lungo o di una cottura notturna, ricordati di ricaricarlo.',
      },
    ],
    'prises-connectees': [
      {
        question: 'Perché proprio in cucina una presa smart?',
        answer: 'Per tre motivi: accendere a distanza la macchina del caffè o il bollitore appena sveglio, spegnere dall\'ufficio un ferro da stiro o un apparecchio rimasto acceso, e misurare quanto consumano davvero il forno, la friggitrice ad aria o il microonde per capire quali apparecchi pesano di più in bolletta.',
      },
      {
        question: 'Una presa smart funziona con qualsiasi apparecchio?',
        answer: 'Sì, con tutti gli apparecchi dotati di interruttore meccanico ON/OFF, che si riaccendono da soli quando torna la corrente. Non funziona invece con gli apparecchi a comandi touch che vanno avviati premendo un tasto (alcuni forni e i microonde più recenti). Controlla questo punto prima di comprare.',
      },
      {
        question: 'Quanta potenza può reggere al massimo una presa smart?',
        answer: 'I modelli per uso domestico reggono da 10 a 16 ampere, cioè da 2.200 a 3.500 watt. Un forno o un piano a induzione da 3.000 W è al limite: scegli un modello da 16 A e una presa a muro dedicata. Le friggitrici ad aria (1.500-2.000 W) non danno problemi.',
      },
      {
        question: 'Le prese smart rendono vulnerabile la mia rete Wi-Fi?',
        answer: 'Il rischio è basso con le marche affermate (TP-Link, Xiaomi, Eve), che rilasciano regolarmente aggiornamenti del firmware. Per la massima sicurezza, isola i dispositivi smart su una VLAN o sulla rete ospiti. Evita le marche sconosciute vendute a meno di 5 €: spesso hanno vulnerabilità note (CVE) mai corrette.',
      },
      {
        question: 'Come inserire una presa smart in uno scenario domotico?',
        answer: 'Con le routine di Alexa, gli script di Google Home, Home Assistant o, sui modelli più recenti, Matter/Thread. Qualche esempio: «caffè avviato 5 minuti prima della sveglia», «spegnimento automatico del ferro da stiro dopo 30 minuti», «avviso se il consumo del congelatore crolla (probabile interruzione di corrente)».',
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
  pl: {
    multicuiseurs: [
      {
        question: 'Czy inteligentny multicooker naprawdę zastąpi garnek żeliwny i szybkowar?',
        answer: 'Tak, w 80% codziennych zastosowań: duszone mięso, zupy, risotto, dania na parze, jogurt i potrawy gotowane godzinami. Modele 6–8-litrowe (Instant Pot, Cosori) mają średnio 10–15 programów automatycznych. Do ciast pieczonych w piekarniku i dużych pieczeni nadal przyda się klasyczny garnek – ale multicooker zwalnia palniki i sam pilnuje gotowania.',
      },
      {
        question: 'Jaką pojemność wybrać w zależności od liczby domowników?',
        answer: 'Na początek przyjmij 1 litr na osobę i dodaj 2 litry na dania duszone i resztki. Para: 3–5 litrów. Rodzina czteroosobowa: 6 litrów. Duża rodzina lub niedzielne gotowanie na zapas: 8 litrów. W jeszcze większych modelach dochodzenie do ciśnienia trwa już zbyt długo.',
      },
      {
        question: 'Czy aplikacje do multicookerów naprawdę się przydają?',
        answer: 'Przydają się w trzech sytuacjach: gdy chcesz zdalnie uruchomić gotowanie w drodze do domu, skorzystać z gotowego przepisu bez ręcznego wpisywania temperatury i czasu albo dostać powiadomienie, że danie jest gotowe. Jeśli zawsze gotujesz te same potrawy, wystarczą przyciski na obudowie.',
      },
      {
        question: 'Czym multicooker różni się od robota kuchennego z funkcją gotowania, takiego jak Thermomix?',
        answer: 'Multicooker gotuje pod ciśnieniem i dusi, a robot kuchenny z funkcją gotowania dodatkowo miksuje, waży i wyrabia ciasto. Za 800–1300 zł multicooker obsłuży 90% potraw wymagających długiego gotowania. Robot za 4300 zł i więcej przejmuje też przygotowanie składników, ale przy dużych porcjach gotowanych pod ciśnieniem wypada słabiej.',
      },
      {
        question: 'Czy w multicookerze można pasteryzować słoiki i robić domowe przetwory?',
        answer: 'Technicznie tak – modele ciśnieniowe osiągają 115–118 °C – ale ze względu na pojemność zmieścisz naraz tylko 3–5 słoików. Przy przetworach na większą skalę bardziej opłaca się osobny sterylizator. Multicooker świetnie sprawdzi się na próbę lub przy niewielkiej cotygodniowej partii.',
      },
    ],
    cafetieres: [
      {
        question: 'Czy inteligentny ekspres do kawy jest wart dopłaty w porównaniu z klasycznym?',
        answer: 'Jeśli pijesz kawę codziennie rano o stałej porze – tak: automatyczne uruchamianie przez Wi-Fi oszczędza 5 minut dziennie, czyli 30 godzin w skali roku. Jeśli pijesz kawę okazjonalnie, w zupełności wystarczy zwykły ekspres z programatorem za 260 zł.',
      },
      {
        question: 'Czym różni się inteligentny ekspres przelewowy od ekspresu automatycznego do kawy ziarnistej?',
        answer: 'Ekspres przelewowy parzy od razu dużo kawy (1–1,5 l) na kilka filiżanek, co jest idealne na rodzinne śniadanie. Ekspres automatyczny mieli ziarna na bieżąco i przygotowuje pojedyncze espresso o wyraźnie lepszej jakości, ale najtańsze modele kosztują 3–4 razy więcej.',
      },
      {
        question: 'Czy sterowanie ekspresem przez Wi-Fi i Alexę/Google Home działa niezawodnie?',
        answer: 'U uznanych marek (Smarter, Philips, De\'Longhi Connect) działa niezawodnie w 95% przypadków. Pozostałe 5% problemów prawie zawsze wynika z routera (większość modeli wymaga pasma 2,4 GHz) albo z aktualizacji oprogramowania, którą lepiej odłożyć. Przez pierwsze 30 dni sprawdzaj, jak sterowanie sprawuje się na co dzień.',
      },
      {
        question: 'Czy w inteligentnym ekspresie można używać kawy mielonej?',
        answer: 'Tak, w ekspresach przelewowych i w większości zgodnych ekspresów na kapsułki. Wśród ekspresów automatycznych niektóre modele (Jura, De\'Longhi) mają dodatkowy pojemnik na mieloną kawę bezkofeinową. Jeśli używasz obu rodzajów kawy na zmianę, sprawdź tę opcję przed zakupem.',
      },
      {
        question: 'Jak odkamienić inteligentny ekspres do kawy, nie uszkadzając elektroniki?',
        answer: 'Używaj wyłącznie tabletek lub płynów zalecanych przez producenta – czysty kwasek cytrynowy może uszkodzić niektóre uszczelki. Inteligentne ekspresy same przypominają o odkamienianiu co 150–200 cykli parzenia. Przy codziennym używaniu odkamieniaj ekspres co 6–8 tygodni.',
      },
    ],
    balances: [
      {
        question: 'Czy dzięki inteligentnej wadze kuchennej przepisy naprawdę lepiej wychodzą?',
        answer: 'Tak, w cukiernictwie i przy pieczeniu chleba, gdzie 10 gramów różnicy zmienia efekt. Aplikacja prowadzi krok po kroku, sama przelicza jednostki, a gdy zmienisz liczbę porcji – także proporcje. Jeśli gotujesz na oko, wystarczy prosta waga za 65 zł.',
      },
      {
        question: 'Jakiej dokładności wymagać od wagi kuchennej?',
        answer: 'Do 99% przepisów wystarczy dokładność 1 g w zakresie od 5 g do 5 kg. W precyzyjnym cukiernictwie (makaroniki, chleb na zakwasie) przy małych ilościach, np. drożdży czy soli, przyda się dokładność 0,1 g. Inteligentne wagi z wyższej półki mają oba tryby.',
      },
      {
        question: 'Bluetooth czy Wi-Fi: jaką łączność wybrać?',
        answer: 'W 95% przypadków wystarczy Bluetooth: zasięg 10 metrów, brak konta w chmurze i bateria na 6–12 miesięcy. Wi-Fi ma sens tylko wtedy, gdy chcesz zdalnie synchronizować pomiary z aplikacją dietetyczną lub udostępniać dane innym gospodarstwom domowym.',
      },
      {
        question: 'Czy inteligentne wagi kuchenne wymagają abonamentu?',
        answer: 'Nie do podstawowych funkcji (ważenie, tara, przeliczanie jednostek). Niektóre aplikacje mają płatną wersję premium ze szczegółową analizą wartości odżywczych lub z przepisami krok po kroku ponad 20–30 darmowych. Jeśli nie chcesz stałych opłat, sprawdź to przed zakupem.',
      },
      {
        question: 'Jak czyścić inteligentną wagę, nie uszkadzając czujników?',
        answer: 'Platformę przecieraj wyłącznie wilgotną ściereczką z łagodnym mydłem – nigdy nie zanurzaj wagi w wodzie ani nie myj jej w zmywarce, bo czujniki nacisku pod platformą nie znoszą wilgoci. Od razu wytrzyj ją do sucha. Codzienne czyszczenie po użyciu wydłuża żywotność wagi do 5–8 lat.',
      },
    ],
    'thermometres-viande': [
      {
        question: 'Czy inteligentny termometr jest naprawdę dokładniejszy od zwykłego?',
        answer: 'W porządnych modelach sama dokładność pomiaru jest taka sama (±0,5–1 °C). Zaletą jest zdalne powiadamianie: wkładasz pieczeń do piekarnika, a gdy w środku osiągnie 58 °C, telefon da Ci znać – bez otwierania drzwiczek. To idealne rozwiązanie do długiego pieczenia w niskiej temperaturze (low and slow), na grillu i przy sous vide.',
      },
      {
        question: 'Jedna sonda czy kilka: co wybrać?',
        answer: 'Jedna sonda wystarczy do okazjonalnego pieczenia w piekarniku lub smażenia na patelni – to proste, wytrzymałe rozwiązanie za 200–350 zł. Kilka sond (2–6 kanałów) przyda się przy grillu, wędzarni, sous vide lub na przyjęciach, gdy przygotowujesz kilka kawałków mięsa jednocześnie – licz się z wydatkiem 650–1300 zł.',
      },
      {
        question: 'Do jakiej temperatury w środku przyrządzać najpopularniejsze rodzaje mięsa?',
        answer: 'Wołowina krwista: 52–54 °C, średnio wysmażona: 58–60 °C, dobrze wysmażona: 65–70 °C. Wieprzowina: 63–65 °C. Drób: 74 °C w całym kawałku. Jagnięcina różowa: 55–58 °C. Aplikacje inteligentnych termometrów mają te wartości zapisane dla każdego rodzaju mięsa i stopnia wysmażenia.',
      },
      {
        question: 'Czy inteligentne termometry wytrzymają piekarnik i grill?',
        answer: 'Tak – sondy przewodowe wytrzymują 250–300 °C. Modele w pełni bezprzewodowe (np. Meater) znoszą temperaturę otoczenia do 275 °C wewnątrz i do 100 °C w części z nadajnikiem, co wystarcza w 95% przypadków pieczenia w piekarniku i grillowania.',
      },
      {
        question: 'Na jak długo wystarcza bateria w inteligentnym termometrze?',
        answer: 'Od 15 do 50 godzin na jednym ładowaniu, w zależności od modelu i częstotliwości przesyłania danych przez Bluetooth. Termometry z sondami przewodowymi działają na bateriach AAA lub pastylkowych CR2032 przez 100–500 godzin. Przed długim pieczeniem brisketu lub gotowaniem przez całą noc naładuj termometr.',
      },
    ],
    'prises-connectees': [
      {
        question: 'Po co inteligentne gniazdko akurat w kuchni?',
        answer: 'Są trzy główne zastosowania: zdalne włączanie ekspresu lub czajnika zaraz po przebudzeniu, wyłączanie z pracy zapomnianego żelazka lub innego urządzenia oraz sprawdzanie rzeczywistego zużycia prądu przez piekarnik, frytkownicę beztłuszczową czy mikrofalówkę, by wiedzieć, które urządzenia najbardziej podbijają rachunek.',
      },
      {
        question: 'Czy inteligentne gniazdko działa z każdym urządzeniem?',
        answer: 'Tak, z każdym urządzeniem z mechanicznym włącznikiem, które samo rusza po podłączeniu do prądu. Nie zadziała z urządzeniami z panelem dotykowym, które trzeba uruchomić ręcznie (niektóre piekarniki, nowsze mikrofalówki). Sprawdź to przed zakupem.',
      },
      {
        question: 'Jakie maksymalne obciążenie wytrzyma inteligentne gniazdko?',
        answer: 'Modele do użytku domowego obsługują 10–16 A, czyli 2200–3500 W. Piekarnik lub płyta indukcyjna o mocy 3000 W to już granica możliwości – wybierz model 16 A i osobne gniazdo ścienne. Frytkownice beztłuszczowe (1500–2000 W) działają bez problemu.',
      },
      {
        question: 'Czy inteligentne gniazdka osłabiają bezpieczeństwo mojej sieci Wi-Fi?',
        answer: 'U uznanych marek (TP-Link, Xiaomi, Eve), które regularnie publikują aktualizacje oprogramowania, ryzyko jest niewielkie. Dla maksymalnego bezpieczeństwa przenieś urządzenia smart home do osobnej sieci VLAN lub sieci dla gości. Unikaj nieznanych marek sprzedawanych poniżej 20 zł – mają na koncie znane luki (CVE), dla których nie wydano poprawek.',
      },
      {
        question: 'Jak dodać inteligentne gniazdko do scenariusza smart home?',
        answer: 'Przez Alexa Routines, Google Home Scripts, Home Assistant albo – w nowszych modelach – Matter/Thread. Przykłady: „kawa włącza się 5 minut przed budzikiem”, „żelazko wyłącza się automatycznie po 30 minutach”, „alert, gdy zużycie zamrażarki spada (prawdopodobnie zabrakło prądu)”.',
      },
    ],
  },
  sv: {
    multicuiseurs: [
      {
        question: 'Kan en smart multikokare verkligen ersätta en gjutjärnsgryta och en tryckkokare?',
        answer: 'Ja, för 80 % av vardagsmatlagningen: bräserade rätter, soppor, risotto, ångkokning, yoghurt och långkok. Modellerna på 6–8 liter (Instant Pot, Cosori) har i snitt 10–15 automatprogram. För bakning i ugn eller stora stekar behåller du din vanliga gjutjärnsgryta, men multikokaren frigör spisen och sköter tillagningen åt dig.',
      },
      {
        question: 'Hur stor multikokare behöver mitt hushåll?',
        answer: 'Räkna med 1 liter per person som grund och lägg sedan till 2 liter för grytor och rester. Ett par: 3–5 liter. En familj på fyra: 6 liter. En storfamilj, eller du som gör storkok på söndagen: 8 liter. Med en ännu större kokare tar det för lång tid att bygga upp trycket.',
      },
      {
        question: 'Gör multikokarnas appar verkligen nytta?',
        answer: 'Ja, i tre fall: när du vill starta ett recept på distans på väg hem, när du vill använda förinställda recept utan att knappa in temperatur och tid själv, och när du vill få en notis när maten är klar. Lagar du alltid samma rätter gör appen mindre nytta, och då räcker knapparna på apparaten.',
      },
      {
        question: 'Vad är skillnaden mellan en multikokare och en köksmaskin med kokfunktion av Thermomix-typ?',
        answer: 'Multikokaren tryckkokar och småkokar, medan köksmaskinen med kokfunktion dessutom mixar, väger och knådar. För 2 200–3 300 kr klarar en multikokare 90 % av alla långkok. För 10 000 kr och uppåt sköter köksmaskinen även förberedelserna, men den klarar sig sämre när stora mängder ska tryckkokas.',
      },
      {
        question: 'Kan man använda en multikokare för inkokning och hemkonservering?',
        answer: 'Rent tekniskt ja, med tryckkokande modeller som når 115–118 °C, men volymen begränsar dig till 3–5 burkar åt gången. Ska du konservera i större mängder är en särskild inkokningsapparat mer lönsam. Multikokaren passar perfekt för en första provomgång eller en liten sats varje vecka.',
      },
    ],
    cafetieres: [
      {
        question: 'Är en smart kaffemaskin värd merkostnaden jämfört med en vanlig?',
        answer: 'Ja, om du dricker kaffe varje morgon vid samma tid: med automatisk start via wifi sparar du 5 minuter om dagen. På ett år blir det 30 timmar. Dricker du kaffe bara då och då räcker en vanlig programmerbar kaffemaskin för runt 650 kr gott och väl.',
      },
      {
        question: 'Vad är skillnaden mellan en smart kaffebryggare och en helautomatisk kaffemaskin?',
        answer: 'Kaffebryggaren gör en stor mängd kaffe (1–1,5 liter) till flera koppar på en gång, perfekt till familjens frukost. Den helautomatiska kaffemaskinen maler bönorna till varje kopp espresso och ger bättre kaffe, men instegspriset är 3–4 gånger högre.',
      },
      {
        question: 'Är wifi och Alexa eller Google Home pålitliga för att styra en kaffemaskin?',
        answer: 'Ja, i 95 % av fallen hos etablerade märken (Smarter, Philips, De\'Longhi Connect). De 5 % som strular beror nästan alltid på routern (de flesta modeller kräver wifi på 2,4 GHz) eller på en firmwareuppdatering som du bör vänta med. Prova i verklig användning under de första 30 dagarna.',
      },
      {
        question: 'Kan man använda malet kaffe i en smart kaffemaskin?',
        answer: 'Ja, i kaffebryggare och i de flesta kapselmaskiner som har stöd för det. Bland de helautomatiska maskinerna har vissa modeller (Jura, De\'Longhi) ett extra fack för malet koffeinfritt kaffe. Kontrollera det före köpet om du växlar mellan bönor och malet.',
      },
      {
        question: 'Hur avkalkar jag en smart kaffemaskin utan att skada elektroniken?',
        answer: 'Använd bara de avkalkningstabletter eller avkalkningsmedel som tillverkaren rekommenderar, eftersom ren citronsyra kan angripa vissa packningar. De smarta modellerna påminner själva om avkalkning efter 150–200 cykler. Räkna med att avkalka var sjätte till åttonde vecka om du använder maskinen dagligen.',
      },
    ],
    balances: [
      {
        question: 'Blir mina recept verkligen bättre med en smart köksvåg?',
        answer: 'Ja, när du bakar bröd och kakor, där 10 gram hit eller dit kan ändra resultatet. Appen guidar dig steg för steg, räknar om måttenheter automatiskt och justerar proportionerna om du ändrar antalet portioner. Lagar du mat på känn räcker en enkel våg för runt 150 kr.',
      },
      {
        question: 'Hur noggrann bör en köksvåg vara?',
        answer: 'För 99 % av alla recept räcker en noggrannhet på 1 gram från 5 g upp till 5 kg. För precisionsbakning (macarons, surdegsbröd) behövs 0,1 gram för små mängder som jäst och salt. De smarta vågarna i premiumklassen har båda lägena.',
      },
      {
        question: 'Bluetooth eller wifi: vilken uppkoppling ska jag välja?',
        answer: 'Bluetooth räcker i 95 % av fallen: 10 meters räckvidd, inget molnkonto och ett batteri som håller i 6–12 månader. Wifi är bara intressant om du vill synka mätningarna med en näringsapp på distans eller dela data mellan olika hushåll.',
      },
      {
        question: 'Kräver smarta köksvågar ett abonnemang?',
        answer: 'Nej, inte för grundfunktionerna (vägning, tarering och omräkning av måttenheter). Vissa appar har en betald premiumversion för detaljerad koll på näringsintaget eller för guidade recept utöver de 20–30 som ingår gratis. Kontrollera det före köpet om du vill slippa återkommande kostnader.',
      },
      {
        question: 'Hur rengör jag en smart köksvåg utan att skada sensorerna?',
        answer: 'Torka bara av vågplattan med en fuktig trasa och mild tvål. Blötlägg den aldrig och kör den inte i diskmaskinen: lastcellerna under plattan tål inte fukt. Eftertorka genast. Gör du rent vågen efter varje användning håller den i 5–8 år.',
      },
    ],
    'thermometres-viande': [
      {
        question: 'Är en smart stektermometer verkligen noggrannare än en vanlig?',
        answer: 'Själva noggrannheten är densamma (± 0,5–1 °C) hos bra modeller. Vinsten ligger i varningen på distans: du sätter in en stek i ugnen och får en notis i mobilen när kärntemperaturen når 58 °C, utan att öppna ugnsluckan. Perfekt för långsam tillagning på låg värme, så kallad low and slow (grill, sous vide).',
      },
      {
        question: 'En eller flera givare: vilken stektermometer ska jag välja?',
        answer: 'En givare räcker om du då och då använder termometern i ugnen eller stekpannan: enkel, robust och runt 550–900 kr. Flera givare (2–6 kanaler) passar för grill, rökugn och sous vide, eller för kvällar när du tillagar flera köttbitar samtidigt: räkna med 1 700–3 300 kr.',
      },
      {
        question: 'Vilken kärntemperatur ska jag sikta på för de vanligaste köttsorterna?',
        answer: 'Nötkött: rare 52–54 °C, medium 58–60 °C, välstekt 65–70 °C. Fläsk: 63–65 °C. Fågel: 74 °C rakt igenom. Lamm: 55–58 °C för rosa. De smarta apparna har värdena förinställda efter köttsort och stekgrad.',
      },
      {
        question: 'Klarar smarta stektermometrar ugn och grill?',
        answer: 'Ja, givare med sladd klarar 250–300 °C. De helt trådlösa modellerna (som Meater) tål en omgivningstemperatur på upp till 275 °C inne i ugnen eller grillen och 100 °C i sändardelen, vilket räcker för 95 % av all användning i ugn och på grill.',
      },
      {
        question: 'Hur lång batteritid har en smart stektermometer?',
        answer: '15–50 timmar per laddning, beroende på modell och hur ofta den sänder via Bluetooth. Modeller med givare på sladd drivs av AAA-batterier eller knappcellsbatterier av typen CR2032 och håller i 100–500 timmar. Ladda termometern innan du ger dig på en lång brisket eller en tillagning över natten.',
      },
    ],
    'prises-connectees': [
      {
        question: 'Varför en smart plugg just i köket?',
        answer: 'Den har tre viktiga användningsområden: att sätta på kaffebryggaren eller vattenkokaren på distans när du vaknar, att från jobbet stänga av ett strykjärn eller en apparat du har glömt på, och att följa den faktiska förbrukningen hos ugnen, airfryern eller mikron för att se vad som drar mest på elräkningen.',
      },
      {
        question: 'Fungerar en smart plugg med alla apparater?',
        answer: 'Ja, med alla apparater som har en mekanisk av/på-knapp och som startar igen av sig själva när strömmen slås på. Den fungerar inte med apparater med pekskärm som måste startas med ett knapptryck (vissa ugnar och nyare mikrovågsugnar). Kontrollera det innan du köper.',
      },
      {
        question: 'Hur hög effekt klarar en smart plugg?',
        answer: 'Modeller för hemmabruk klarar 10–16 ampere, alltså 2 200–3 500 watt. En ugn eller induktionshäll på 3 000 W ligger på gränsen: välj då en modell för 16 A och ett eget vägguttag. Airfryrar (1 500–2 000 W) klarar den utan problem.',
      },
      {
        question: 'Gör smarta pluggar mitt wifi sårbart för säkerhetshål?',
        answer: 'Risken är liten med etablerade märken (TP-Link, Xiaomi, Eve) som regelbundet släpper firmwareuppdateringar. För bästa säkerhet kan du lägga de smarta prylarna på ett eget VLAN eller ett gästnätverk. Undvik okända märken som säljs för under 50 kr: de har ofta kända säkerhetshål (CVE) som aldrig har åtgärdats.',
      },
      {
        question: 'Hur använder jag en smart plugg i automationer för det smarta hemmet?',
        answer: 'Via rutiner i Alexa, skript i Google Home, Home Assistant eller Matter/Thread i nyare modeller. Exempel: ”kaffet startar 5 min innan väckarklockan ringer”, ”strykjärnet stängs av automatiskt efter 30 min”, ”varning om frysens förbrukning plötsligt sjunker (troligen strömavbrott)”.',
      },
    ],
  },
  us: {
    multicuiseurs: [
      {
        question: 'Does a smart multicooker really replace a Dutch oven and a pressure cooker?',
        answer: 'Yes, for about 80% of everyday cooking: braises, soups, risotto, steaming, yogurt and long-simmered stews. Models in the 6.3 to 8.5 qt (6 to 8 L) range, such as Instant Pot and Cosori, typically offer 10 to 15 automatic programs. For baking or big roasts, you\'ll still want a classic Dutch oven, but a multicooker frees up your burners and runs the cooking for you.',
      },
      {
        question: 'What capacity do I need for my household?',
        answer: 'Start with about 1 quart (1 L) per person, then add 2 quarts for stews and leftovers. A couple: 3.2 to 5.3 qt (3 to 5 L). A family of four: 6.3 qt (6 L). A large family or Sunday meal prep: 8.5 qt (8 L). Go bigger and the time it takes to come up to pressure becomes a real drawback.',
      },
      {
        question: 'Are multicooker apps actually useful?',
        answer: 'They\'re useful in three cases: starting a recipe remotely on your way home, using preset recipes without entering the temperature and time yourself, and getting an alert when the food is done. They\'re less useful if you always cook the same dishes — the buttons on the unit are all you need.',
      },
      {
        question: 'What\'s the difference between a multicooker and a Thermomix-style cooking machine?',
        answer: 'A multicooker pressure-cooks and simmers. An all-in-one cooking machine also blends, weighs and kneads on top of cooking. For $250 to $350, a multicooker covers 90% of long, slow cooking. From $1,200 up, an all-in-one cooking machine adds built-in prep but is less capable with big pressure-cooked batches.',
      },
      {
        question: 'Can I use a multicooker for canning?',
        answer: 'Technically yes, with pressure models that reach 239 to 244°F (115 to 118°C), but you\'re limited to 3 to 5 jars at a time, and only do it if the manual explicitly approves the model for canning. For canning in bulk, a dedicated canner is more cost-effective. A multicooker is ideal for a test run or a small weekly batch.',
      },
    ],
    cafetieres: [
      {
        question: 'Is a smart coffee maker worth paying more for?',
        answer: 'If you drink coffee every morning at the same time, yes: starting the brew automatically over Wi-Fi saves you 5 minutes a day. Over a year, that\'s 30 hours. For occasional use, a regular programmable coffee maker around $70 is plenty.',
      },
      {
        question: 'What\'s the difference between a smart drip coffee maker and a super-automatic espresso machine?',
        answer: 'A drip coffee maker brews a big batch (34 to 51 fl oz, or 1 to 1.5 L) for several cups at once, which is ideal for a family breakfast. A super-automatic espresso machine grinds beans on demand for single espresso drinks and makes better coffee, but it costs three to four times as much to get started.',
      },
      {
        question: 'Are Wi-Fi and Alexa/Google Home reliable for controlling a coffee maker?',
        answer: 'They work about 95% of the time with established brands (Smarter, Philips, De\'Longhi Connect). The other 5% almost always comes down to the router (most models require 2.4 GHz) or a firmware update you should hold off on. Put it through its paces in everyday use during the first 30 days.',
      },
      {
        question: 'Can I use pre-ground coffee in a smart coffee maker?',
        answer: 'Yes, in drip models and most compatible pod machines. Among super-automatic espresso machines, some models (Jura, De\'Longhi) have a bypass doser for pre-ground decaf. Check for that feature before you buy if you switch between the two.',
      },
      {
        question: 'How do I descale a smart coffee maker without damaging the electronics?',
        answer: 'Use only the descaling tablets or solutions the manufacturer recommends — straight citric acid can damage some seals. Smart models remind you on their own every 150 to 200 cycles. With daily use, plan on descaling every 6 to 8 weeks.',
      },
    ],
    balances: [
      {
        question: 'Does a smart kitchen scale really improve my recipes?',
        answer: 'Yes, for baking and bread, where being off by 10 grams (about 0.35 oz) changes the result. The app walks you through each step, converts units automatically and rescales the recipe if you change the number of servings. If you cook by eye, a basic $15 scale is enough.',
      },
      {
        question: 'How precise should a kitchen scale be?',
        answer: 'For 99% of recipes: precise to 1 gram (0.04 oz) across a 5 g to 5 kg (0.2 oz to 11 lb) range. For precision baking (macarons, sourdough): 0.1 gram for small amounts such as yeast and salt. High-end smart scales offer both modes.',
      },
      {
        question: 'Bluetooth or Wi-Fi: which should I choose?',
        answer: 'Bluetooth is enough 95% of the time — about 33 feet (10 m) of range, no cloud account and a battery that lasts 6 to 12 months. Wi-Fi only matters if you want to sync your measurements with a nutrition app remotely or share data across households.',
      },
      {
        question: 'Do smart scales require a subscription?',
        answer: 'Not for the basics (weighing, tare, unit conversions). Some apps offer a paid premium tier for detailed nutrition tracking or for guided recipes beyond the 20 to 30 free ones. Check this before you buy if you want to avoid recurring fees.',
      },
      {
        question: 'How do I clean a smart scale without damaging the sensors?',
        answer: 'Use a damp cloth and mild soap on the platform only — never soak it or put it in the dishwasher, because the load cells under the platform don\'t tolerate moisture. Dry it right away. Wiping it down after each use helps it last 5 to 8 years.',
      },
    ],
    'thermometres-viande': [
      {
        question: 'Is a smart meat thermometer really more accurate than a regular one?',
        answer: 'Raw accuracy is the same (about ±1 to 2°F, or ±0.5 to 1°C) on reputable models. The real advantage is remote alerts: you put a roast in the oven and get a notification on your phone when the center hits 136°F (58°C), without opening the oven door. It\'s ideal for low-and-slow cooking (barbecue, sous vide).',
      },
      {
        question: 'Single probe or multiple probes: which should I choose?',
        answer: 'A single probe for occasional oven or stovetop cooking — simple, sturdy, $60 to $90. Multiple probes (2 to 6 channels) for grilling, smoking, sous vide or nights when you\'re cooking several cuts at once — plan on $150 to $350.',
      },
      {
        question: 'What internal temperature should I aim for with common meats?',
        answer: 'Beef: rare 126 to 129°F (52 to 54°C), medium 136 to 140°F (58 to 60°C), well done 149 to 158°F (65 to 70°C). Pork: 145 to 149°F (63 to 65°C). Poultry: 165°F (74°C) throughout. Lamb: 131 to 136°F (55 to 58°C) for pink. Smart thermometer apps have these values preset by type of meat and doneness.',
      },
      {
        question: 'Can smart meat thermometers handle the oven and the grill?',
        answer: 'Yes. Wired probes are rated to 480 to 570°F (250 to 300°C). Fully wireless models (like Meater) handle ambient temperatures up to 525°F (275°C) in the oven or grill and 212°F (100°C) at the transmitter end, which covers 95% of oven and grill cooking.',
      },
      {
        question: 'What\'s the typical battery life of a smart meat thermometer?',
        answer: '15 to 50 hours per charge, depending on the model and how often it broadcasts over Bluetooth. Wired-probe models run on AAA batteries or CR2032 coin cells for 100 to 500 hours. Charge it before a long brisket or an overnight cook.',
      },
    ],
    'prises-connectees': [
      {
        question: 'Why use a smart plug in the kitchen?',
        answer: 'Three key uses: switching on the coffee maker or electric kettle remotely when you wake up, cutting power to a forgotten iron or appliance from the office, and tracking the real energy use of an oven, air fryer or microwave to find the biggest items on your electric bill.',
      },
      {
        question: 'Does a smart plug work with any appliance?',
        answer: 'It works with any appliance that has a mechanical on/off switch and turns back on by itself when power is restored. It won\'t work with touch-control appliances that need a button press to start (some ovens and newer microwaves). Check this before you buy.',
      },
      {
        question: 'What\'s the maximum load a smart plug can handle?',
        answer: 'In the US, most smart plugs are rated for 15 A, or 1,800 W on a standard 120 V outlet: the TP-Link Tapo P115 and Tapo P110M, for example, are both 15 A models. That covers most air fryers, which are built to stay at or under 1,800 W, but check the plug\'s maximum wattage against the appliance\'s label. Built-in ovens, ranges and induction cooktops run on dedicated 240 V circuits and should never go through a smart plug.',
      },
      {
        question: 'Do smart plugs open my Wi-Fi network to security flaws?',
        answer: 'The risk is low with established brands (TP-Link, Eve, Meross) that ship regular firmware updates. For maximum security, put your smart devices on a VLAN or a guest network. Avoid no-name brands selling for under $5, which often have a history of unpatched security flaws (CVEs).',
      },
      {
        question: 'How do I add a smart plug to a home automation routine?',
        answer: 'Through Alexa Routines, Google Home scripts, Home Assistant, or Matter/Thread on newer models. Examples: "start the coffee 5 minutes before the alarm goes off," "cut power to the iron after 30 minutes," "send an alert if the freezer\'s power draw drops (likely a power outage)."',
      },
    ],
  },
  ca: {
    multicuiseurs: [
      {
        question: 'Does a smart multicooker really replace a Dutch oven and a pressure cooker?',
        answer: 'Yes, for 80% of everyday cooking: braises, soups, risottos, steaming, yogurt and slow-cooked stews. Models from 6 to 8 L (6.3 to 8.5 qt), such as Instant Pot and Cosori, typically combine 10 to 15 automatic programs. For baking or large roasts, you\'ll still want a classic Dutch oven — but the multicooker frees up your burners and keeps an eye on the cooking for you.',
      },
      {
        question: 'What capacity should I pick for my household size?',
        answer: 'Start with 1 L (about 1 qt) per person, then add 2 L for stews and leftovers. For a couple: 3 to 5 L (3.2 to 5.3 qt). A family of four: 6 L (6.3 qt). A large family or weekend batch cooking: 8 L (8.5 qt). Any bigger, and the time it takes to come up to pressure becomes a drawback.',
      },
      {
        question: 'Are multicooker mobile apps actually useful?',
        answer: 'They\'re useful in three cases: starting a recipe remotely on your way home, using preset recipes without entering the temperature and time yourself, and getting an alert when cooking is done. They\'re less useful if you always cook the same dishes — the buttons on the unit are enough.',
      },
      {
        question: 'What\'s the difference between a multicooker and a Thermomix-style cooking machine?',
        answer: 'A multicooker pressure-cooks and simmers. A cooking machine also mixes, weighs and kneads. For $300 to $500, a multicooker handles 90% of long, slow cooking. At $1,500 and up, a cooking machine adds built-in prep but does less well with large pressure-cooked dishes.',
      },
      {
        question: 'Can I use a multicooker for canning and home preserves?',
        answer: 'Technically yes, with pressure models that reach 115°C to 118°C (239°F to 244°F), but capacity limits you to 3 to 5 jars at a time. For large batches, a dedicated canner is more cost-effective. A multicooker is ideal for a trial run or a small weekly batch.',
      },
    ],
    cafetieres: [
      {
        question: 'Is a smart coffee maker worth paying more for than a regular one?',
        answer: 'If you drink coffee every morning at the same time, yes: automatic start over Wi-Fi saves you 5 minutes a day. Over a year, that\'s 30 hours. For occasional use, a basic programmable coffee maker at around $100 is more than enough.',
      },
      {
        question: 'What\'s the difference between a smart drip coffee maker and a super-automatic espresso machine?',
        answer: 'A drip coffee maker brews a large volume (1 to 1.5 L) for several cups at once, ideal for a family breakfast. A super-automatic grinds beans on demand for single espressos and makes better coffee, but its entry price is 3 to 4 times higher.',
      },
      {
        question: 'Are Wi-Fi and Alexa/Google Home reliable for controlling a coffee maker?',
        answer: '95% reliable with established brands (Smarter, Philips, De\'Longhi Connect). The remaining 5% of failures almost always come from the router (most models require 2.4 GHz) or a firmware update you should hold off on. Test it in everyday use during the first 30 days.',
      },
      {
        question: 'Can I use ground coffee in a smart coffee maker?',
        answer: 'Yes, in drip models and most compatible pod machines. On super-automatic machines, some models (Jura, De\'Longhi) have a bypass doser for pre-ground decaf. Check for this before you buy if you switch between the two.',
      },
      {
        question: 'How do I descale a smart coffee maker without damaging the electronics?',
        answer: 'Use only the tablets or liquids the manufacturer recommends — pure citric acid can damage some seals. Smart models send the reminder themselves every 150 to 200 cycles. Expect to descale every 6 to 8 weeks with daily use.',
      },
    ],
    balances: [
      {
        question: 'Does a smart kitchen scale really improve my recipes?',
        answer: 'Yes, for baking and bread-making, where a 10-gram difference changes the result. The app guides you step by step, converts units automatically and recalculates quantities if you change the number of servings. For cooking by eye, a basic $25 scale is enough.',
      },
      {
        question: 'How precise should a kitchen scale be?',
        answer: 'For 99% of recipes: 1 g precision over a 5 g to 5 kg range. For precision baking (macarons, sourdough): 0.1 g for small quantities (yeast, salt). High-end smart scales offer both modes.',
      },
      {
        question: 'Bluetooth or Wi-Fi: which should I choose?',
        answer: 'Bluetooth is enough 95% of the time — 10 m range, no cloud account and a battery that lasts 6 to 12 months. Wi-Fi only matters if you want to sync measurements with a nutrition app remotely or share data between households.',
      },
      {
        question: 'Do smart scales require a subscription?',
        answer: 'Not for the basics (weighing, tare, conversions). Some apps offer a paid premium tier for detailed nutrition tracking or guided recipes beyond the 20 to 30 free ones. Check before you buy if you want to avoid recurring fees.',
      },
      {
        question: 'How do I clean a smart scale without damaging the sensors?',
        answer: 'Use a damp cloth and mild soap on the platform only — never soak it or put it in the dishwasher, because the load cells under the platform are sensitive to moisture. Dry it right away. Wiping it down after each use extends its lifespan to 5 to 8 years.',
      },
    ],
    'thermometres-viande': [
      {
        question: 'Is a smart meat thermometer really more accurate than a regular one?',
        answer: 'Raw accuracy is the same (±0.5°C to 1°C, or about 1°F to 2°F) on reputable models. The gain is remote alerts: you start a roast in the oven and get a notification on your phone when the centre hits 58°C (136°F), without opening the door. Ideal for low-and-slow cooking (barbecue, sous vide).',
      },
      {
        question: 'Single or multiple probes: which should I choose?',
        answer: 'A single probe for occasional oven or pan use — simple, sturdy, $80 to $120. Multiple probes (2 to 6 channels) for barbecue, smoking, sous vide or evenings when you cook several cuts at once — expect $250 to $500.',
      },
      {
        question: 'What internal temperature should I aim for with the main meats?',
        answer: 'Beef: rare 52°C to 54°C (126°F to 129°F), medium 58°C to 60°C (136°F to 140°F), well done 65°C to 70°C (149°F to 158°F). Pork: 63°C to 65°C (145°F to 149°F). Poultry: 74°C (165°F) throughout. Lamb: 55°C to 58°C (131°F to 136°F) for pink. Smart apps have these values preset by type of meat and doneness.',
      },
      {
        question: 'Can smart thermometers handle the oven and the barbecue?',
        answer: 'Yes, wired probes handle 250°C to 300°C (480°F to 570°F). Fully wireless models (such as Meater) handle ambient heat up to 275°C (527°F) and up to 100°C (212°F) at the transmitter end, which covers 95% of oven and barbecue uses.',
      },
      {
        question: 'What\'s the typical battery life of a smart thermometer?',
        answer: '15 to 50 hours per charge, depending on the model and how often it broadcasts over Bluetooth. Units with wired probes run on AAA batteries or CR2032 coin cells for 100 to 500 hours. Charge it before a long brisket or an overnight cook.',
      },
    ],
    'prises-connectees': [
      {
        question: 'Why use a smart plug in the kitchen rather than elsewhere?',
        answer: 'Three key uses: turning on the coffee maker or kettle remotely when you wake up, cutting power to a forgotten iron or appliance from the office, and monitoring the actual consumption of a countertop oven, air fryer or microwave to see what\'s driving up your electricity bill.',
      },
      {
        question: 'Does a smart plug work with any appliance?',
        answer: 'Yes, with any device that has a mechanical on/off switch and restarts automatically when the power comes back. It won\'t work with touch-control appliances that need a button press to start (some recent ovens and microwaves). Check this before you buy.',
      },
      {
        question: 'What maximum power can a smart plug handle?',
        answer: 'In Canada, a standard 120 V outlet on a 15 A circuit delivers up to 1,800 W, so look for a plug rated for 15 A and compare its wattage with the appliance\'s label. A wall oven, a range or a built-in induction cooktop runs on a dedicated 240 V circuit, so it can\'t go on a smart plug. Countertop appliances such as air fryers are designed for a standard outlet, so a 15 A plug can handle them.',
      },
      {
        question: 'Do smart plugs expose my Wi-Fi network to security flaws?',
        answer: 'The risk is low with established brands (TP-Link, Meross) that release regular firmware updates. For maximum security, put smart devices on a VLAN or guest network. Avoid unknown brands selling for under $10 — they often have a history of unpatched vulnerabilities (CVEs).',
      },
      {
        question: 'How do I add a smart plug to a smart home routine?',
        answer: 'Through Alexa Routines, Google Home Scripts, Home Assistant or, on recent models, Matter/Thread. Examples: "start the coffee 5 minutes before the alarm," "turn the iron off automatically after 30 minutes," "send an alert if the freezer\'s power draw drops (likely a power outage)."',
      },
    ],
  },
}

export function getSmartKitchenFaqs(lang: string, category: SmartKitchenCategory): FaqItem[] {
  // Market-written FAQ first (lib/catalog/category-faqs); the translated
  // set below stays as fallback.
  const specific = getCategorySpecificFaq(category, lang)
  if (specific) return [...specific]
  return smartKitchenFaqs[lang]?.[category] || smartKitchenFaqs.fr[category]
}

export const faqSectionTitles: Record<string, string> = {
  fr: 'Questions fréquentes',
  en: 'Frequently asked questions',
  de: 'Häufig gestellte Fragen',
  es: 'Preguntas frecuentes',
  it: 'Domande frequenti',
  nl: 'Veelgestelde vragen',
  pl: 'Najczęstsze pytania',
  sv: 'Vanliga frågor',
  us: 'Frequently asked questions',
  ca: 'Frequently asked questions',
}
