/**
 * Troubleshooting problems — Moteur 3 seed.
 *
 * Each entry drives a long-tail troubleshooting page of the form:
 *     /{lang}/guides/probleme/{problem-slug}
 *
 * Phase Y shipped a thin seed (6 problems on the first two cuisine
 * categories) to prove the Moteur 3 generator. Phase KK (Period 4)
 * expanded the seed to 30 problems — 5 per indexable cuisine-connectee
 * category — so Moteur 3 shipped 180 long-tail pages (30 × 6 locales).
 *
 * Phase XX (Period 11) expands Moteur 3 coverage to the first non-
 * flagship silo: energie-domotique. We add 3 problems per indexable
 * category (11 × 3 = 33) rather than 5 so that each silo can ship in
 * a single tight phase without starving the backlog. The template is
 * still 100% pure content: adding a problem is one struct literal
 * with 6 locale strings, no code changes.
 *
 * Total after Phase XX: 63 problems × 6 locales = 378 troubleshooting
 * pages. Subsequent phases (YY, ZZ, …) mirror this pattern for
 * securite-maison, confort-air, entretien-maison and outdoor-connecte.
 *
 * Severity drives the call-to-action:
 *   - minor     → inline quick fix + "still not working?" fallback
 *   - moderate  → step-by-step + related-products upsell
 *   - critical  → contact-manufacturer block, no affiliate push
 */

import type { Problem } from './types'

export const PROBLEMS: readonly Problem[] = [
  // ===================================================================
  // cuisine-connectee / airfryers — 5 problems
  // ===================================================================
  {
    slug: 'ne-chauffe-plus',
    categorySlug: 'airfryers',
    severity: 'critical',
    query: {
      fr: 'Mon airfryer ne chauffe plus, que faire ?',
      en: 'My air fryer is not heating up anymore — what should I do?',
      de: 'Meine Heißluftfritteuse heizt nicht mehr — was tun?',
      es: '¿Mi freidora de aire no calienta, qué hacer?',
      it: 'La mia friggitrice ad aria non scalda più, cosa fare?',
      nl: 'Mijn airfryer warmt niet meer op, wat nu?',
    },
  },
  {
    slug: 'odeur-plastique',
    categorySlug: 'airfryers',
    severity: 'moderate',
    query: {
      fr: 'Mon airfryer sent le plastique, est-ce dangereux ?',
      en: 'My air fryer smells like plastic — is it dangerous?',
      de: 'Meine Heißluftfritteuse riecht nach Plastik — ist das gefährlich?',
      es: 'Mi freidora de aire huele a plástico, ¿es peligroso?',
      it: 'La mia friggitrice ad aria puzza di plastica, è pericoloso?',
      nl: 'Mijn airfryer ruikt naar plastic, is dat gevaarlijk?',
    },
  },
  {
    slug: 'fumee-noire',
    categorySlug: 'airfryers',
    severity: 'moderate',
    query: {
      fr: 'Mon airfryer fait de la fumée noire',
      en: 'My air fryer is producing black smoke',
      de: 'Meine Heißluftfritteuse erzeugt schwarzen Rauch',
      es: 'Mi freidora de aire echa humo negro',
      it: 'La mia friggitrice ad aria fa fumo nero',
      nl: 'Mijn airfryer geeft zwarte rook',
    },
  },
  {
    slug: 'nettoyage-residus-brules',
    categorySlug: 'airfryers',
    severity: 'minor',
    query: {
      fr: 'Comment nettoyer les résidus brûlés dans un airfryer ?',
      en: 'How do I clean burnt residue from an air fryer?',
      de: 'Wie reinige ich Brandrückstände in einer Heißluftfritteuse?',
      es: '¿Cómo limpiar los residuos quemados de una freidora de aire?',
      it: 'Come pulire i residui bruciati di una friggitrice ad aria?',
      nl: 'Hoe verwijder ik ingebrande resten uit een airfryer?',
    },
  },
  {
    slug: 'tiroir-ne-ferme-pas',
    categorySlug: 'airfryers',
    severity: 'moderate',
    query: {
      fr: 'Le tiroir de mon airfryer ne ferme plus correctement',
      en: 'My air fryer drawer no longer closes properly',
      de: 'Die Schublade meiner Heißluftfritteuse schließt nicht mehr richtig',
      es: 'El cajón de mi freidora de aire ya no cierra bien',
      it: 'Il cassetto della mia friggitrice ad aria non si chiude più bene',
      nl: 'De lade van mijn airfryer sluit niet meer goed',
    },
  },

  // ===================================================================
  // cuisine-connectee / multicuiseurs — 5 problems
  // ===================================================================
  {
    slug: 'valve-bloquee',
    categorySlug: 'multicuiseurs',
    severity: 'moderate',
    query: {
      fr: 'La valve de mon multicuiseur est bloquée',
      en: 'My multicooker valve is stuck',
      de: 'Das Ventil meines Multikochers klemmt',
      es: 'La válvula de mi multicocina está atascada',
      it: 'La valvola del mio multicooker è bloccata',
      nl: 'Het ventiel van mijn multicooker zit vast',
    },
  },
  {
    slug: 'ne-monte-pas-pression',
    categorySlug: 'multicuiseurs',
    severity: 'critical',
    query: {
      fr: 'Mon multicuiseur ne monte pas en pression',
      en: 'My multicooker is not building pressure',
      de: 'Mein Multikocher baut keinen Druck auf',
      es: 'Mi multicocina no sube la presión',
      it: 'Il mio multicooker non va in pressione',
      nl: 'Mijn multicooker bouwt geen druk op',
    },
  },
  {
    slug: 'joint-silicone-abime',
    categorySlug: 'multicuiseurs',
    severity: 'moderate',
    query: {
      fr: 'Le joint silicone de mon multicuiseur est abîmé',
      en: 'My multicooker silicone gasket is damaged',
      de: 'Die Silikondichtung meines Multikochers ist beschädigt',
      es: 'La junta de silicona de mi multicocina está dañada',
      it: 'La guarnizione in silicone del mio multicooker è danneggiata',
      nl: 'De siliconen afdichting van mijn multicooker is beschadigd',
    },
  },
  {
    slug: 'ne-demarre-pas',
    categorySlug: 'multicuiseurs',
    severity: 'critical',
    query: {
      fr: 'Mon multicuiseur ne démarre plus du tout',
      en: 'My multicooker will not start at all',
      de: 'Mein Multikocher startet gar nicht mehr',
      es: 'Mi multicocina no arranca en absoluto',
      it: 'Il mio multicooker non si accende più',
      nl: 'Mijn multicooker start helemaal niet meer',
    },
  },
  {
    slug: 'code-erreur-e1',
    categorySlug: 'multicuiseurs',
    severity: 'moderate',
    query: {
      fr: 'Mon multicuiseur affiche le code erreur E1',
      en: 'My multicooker shows error code E1',
      de: 'Mein Multikocher zeigt den Fehlercode E1 an',
      es: 'Mi multicocina muestra el código de error E1',
      it: 'Il mio multicooker mostra il codice di errore E1',
      nl: 'Mijn multicooker geeft foutcode E1',
    },
  },

  // ===================================================================
  // cuisine-connectee / cafetieres — 5 problems
  // ===================================================================
  {
    slug: 'detartrage-clignote',
    categorySlug: 'cafetieres',
    severity: 'minor',
    query: {
      fr: 'Comment détartrer ma cafetière connectée ?',
      en: 'How do I descale my connected coffee machine?',
      de: 'Wie entkalke ich meine vernetzte Kaffeemaschine?',
      es: '¿Cómo descalcificar mi cafetera conectada?',
      it: 'Come decalcificare la mia macchina da caffè connessa?',
      nl: 'Hoe ontkalk ik mijn connected koffiemachine?',
    },
  },
  {
    slug: 'pression-faible',
    categorySlug: 'cafetieres',
    severity: 'moderate',
    query: {
      fr: 'Ma cafetière ne fait plus assez de pression',
      en: 'My coffee machine no longer has enough pressure',
      de: 'Meine Kaffeemaschine baut nicht mehr genug Druck auf',
      es: 'Mi cafetera ya no tiene suficiente presión',
      it: 'La mia macchina da caffè non fa più abbastanza pressione',
      nl: 'Mijn koffiemachine heeft niet genoeg druk meer',
    },
  },
  {
    slug: 'filtre-bouche',
    categorySlug: 'cafetieres',
    severity: 'minor',
    query: {
      fr: 'Le filtre de ma cafetière est bouché',
      en: 'My coffee machine filter is clogged',
      de: 'Der Filter meiner Kaffeemaschine ist verstopft',
      es: 'El filtro de mi cafetera está obstruido',
      it: 'Il filtro della mia macchina da caffè è intasato',
      nl: 'Het filter van mijn koffiemachine is verstopt',
    },
  },
  {
    slug: 'eau-marc-tasse',
    categorySlug: 'cafetieres',
    severity: 'minor',
    query: {
      fr: 'Il y a du marc dans ma tasse, comment résoudre ?',
      en: 'There are coffee grounds in my cup — how do I fix this?',
      de: 'Es ist Kaffeesatz in meiner Tasse — wie löse ich das?',
      es: 'Hay posos en mi taza, ¿cómo solucionarlo?',
      it: 'Ci sono fondi di caffè nella mia tazza, come risolvere?',
      nl: 'Er zit koffiedik in mijn kopje, hoe los ik dit op?',
    },
  },
  {
    slug: 'mouture-trop-fine',
    categorySlug: 'cafetieres',
    severity: 'minor',
    query: {
      fr: 'Comment régler la mouture de ma cafetière automatique ?',
      en: 'How do I adjust the grind setting on my automatic coffee machine?',
      de: 'Wie stelle ich den Mahlgrad meiner Kaffeevollautomaten ein?',
      es: '¿Cómo ajustar el molido de mi cafetera automática?',
      it: 'Come regolare la macinatura della mia macchina da caffè automatica?',
      nl: 'Hoe stel ik de maling van mijn automatische koffiemachine in?',
    },
  },

  // ===================================================================
  // cuisine-connectee / balances — 5 problems
  // ===================================================================
  {
    slug: 'balance-affiche-zero',
    categorySlug: 'balances',
    severity: 'moderate',
    query: {
      fr: 'Ma balance connectée reste bloquée à zéro',
      en: 'My connected kitchen scale is stuck at zero',
      de: 'Meine smarte Küchenwaage bleibt bei null stehen',
      es: 'Mi báscula conectada se queda bloqueada en cero',
      it: 'La mia bilancia connessa resta bloccata a zero',
      nl: 'Mijn connected keukenweegschaal blijft op nul staan',
    },
  },
  {
    slug: 'pesage-instable',
    categorySlug: 'balances',
    severity: 'moderate',
    query: {
      fr: 'Ma balance de cuisine donne des mesures instables',
      en: 'My kitchen scale gives unstable readings',
      de: 'Meine Küchenwaage liefert schwankende Messwerte',
      es: 'Mi báscula de cocina da lecturas inestables',
      it: 'La mia bilancia da cucina dà misure instabili',
      nl: 'Mijn keukenweegschaal geeft onstabiele metingen',
    },
  },
  {
    slug: 'pile-vide-balance',
    categorySlug: 'balances',
    severity: 'minor',
    query: {
      fr: 'Comment changer la pile de ma balance connectée ?',
      en: 'How do I change the battery in my connected kitchen scale?',
      de: 'Wie wechsle ich die Batterie meiner smarten Küchenwaage?',
      es: '¿Cómo cambiar la pila de mi báscula conectada?',
      it: 'Come cambiare la batteria della mia bilancia connessa?',
      nl: 'Hoe vervang ik de batterij van mijn connected keukenweegschaal?',
    },
  },
  {
    slug: 'calibration-balance',
    categorySlug: 'balances',
    severity: 'minor',
    query: {
      fr: 'Comment calibrer ma balance de cuisine connectée ?',
      en: 'How do I calibrate my connected kitchen scale?',
      de: 'Wie kalibriere ich meine smarte Küchenwaage?',
      es: '¿Cómo calibrar mi báscula de cocina conectada?',
      it: 'Come calibrare la mia bilancia da cucina connessa?',
      nl: 'Hoe kalibreer ik mijn connected keukenweegschaal?',
    },
  },
  {
    slug: 'app-balance-deconnecte',
    categorySlug: 'balances',
    severity: 'moderate',
    query: {
      fr: "L'appli de ma balance connectée ne se synchronise plus",
      en: 'My connected kitchen scale app no longer syncs',
      de: 'Die App meiner smarten Küchenwaage synchronisiert nicht mehr',
      es: 'La app de mi báscula conectada ya no se sincroniza',
      it: "L'app della mia bilancia connessa non si sincronizza più",
      nl: 'De app van mijn connected keukenweegschaal synchroniseert niet meer',
    },
  },

  // ===================================================================
  // cuisine-connectee / thermometres-viande — 5 problems
  // ===================================================================
  {
    slug: 'sonde-hs',
    categorySlug: 'thermometres-viande',
    severity: 'critical',
    query: {
      fr: 'La sonde de mon thermomètre à viande ne fonctionne plus',
      en: 'My meat thermometer probe no longer works',
      de: 'Die Sonde meines Fleischthermometers funktioniert nicht mehr',
      es: 'La sonda de mi termómetro de carne ya no funciona',
      it: 'La sonda del mio termometro per carne non funziona più',
      nl: 'De sonde van mijn vleesthermometer werkt niet meer',
    },
  },
  {
    slug: 'bluetooth-ne-connecte-pas',
    categorySlug: 'thermometres-viande',
    severity: 'moderate',
    query: {
      fr: 'Mon thermomètre à viande ne se connecte plus en Bluetooth',
      en: 'My meat thermometer no longer connects via Bluetooth',
      de: 'Mein Fleischthermometer verbindet sich nicht mehr über Bluetooth',
      es: 'Mi termómetro de carne ya no se conecta por Bluetooth',
      it: 'Il mio termometro per carne non si connette più via Bluetooth',
      nl: 'Mijn vleesthermometer maakt geen Bluetooth-verbinding meer',
    },
  },
  {
    slug: 'temperature-fausse',
    categorySlug: 'thermometres-viande',
    severity: 'moderate',
    query: {
      fr: 'Mon thermomètre à viande affiche une température fausse',
      en: 'My meat thermometer shows an incorrect temperature',
      de: 'Mein Fleischthermometer zeigt eine falsche Temperatur an',
      es: 'Mi termómetro de carne muestra una temperatura incorrecta',
      it: 'Il mio termometro per carne mostra una temperatura sbagliata',
      nl: 'Mijn vleesthermometer geeft een verkeerde temperatuur aan',
    },
  },
  {
    slug: 'batterie-thermometre-dure-pas',
    categorySlug: 'thermometres-viande',
    severity: 'minor',
    query: {
      fr: 'La batterie de mon thermomètre à viande ne tient plus',
      en: "My meat thermometer battery doesn't hold a charge",
      de: 'Der Akku meines Fleischthermometers hält nicht mehr',
      es: 'La batería de mi termómetro de carne ya no aguanta',
      it: 'La batteria del mio termometro per carne non dura più',
      nl: 'De batterij van mijn vleesthermometer houdt geen lading meer vast',
    },
  },
  {
    slug: 'cable-sonde-casse',
    categorySlug: 'thermometres-viande',
    severity: 'moderate',
    query: {
      fr: 'Le câble de la sonde de mon thermomètre est cassé',
      en: 'My meat thermometer probe cable is broken',
      de: 'Das Sondenkabel meines Fleischthermometers ist gebrochen',
      es: 'El cable de la sonda de mi termómetro está roto',
      it: 'Il cavo della sonda del mio termometro è rotto',
      nl: 'De kabel van de sonde van mijn vleesthermometer is gebroken',
    },
  },

  // ===================================================================
  // cuisine-connectee / prises-connectees — 5 problems
  // ===================================================================
  {
    slug: 'prise-wifi-perdue',
    categorySlug: 'prises-connectees',
    severity: 'moderate',
    query: {
      fr: 'Ma prise connectée a perdu le WiFi',
      en: 'My smart plug has lost its WiFi connection',
      de: 'Meine smarte Steckdose hat die WLAN-Verbindung verloren',
      es: 'Mi enchufe inteligente ha perdido el WiFi',
      it: 'La mia presa smart ha perso il WiFi',
      nl: 'Mijn slimme stekker is het wifi-signaal kwijt',
    },
  },
  {
    slug: 'app-ne-voit-plus-prise',
    categorySlug: 'prises-connectees',
    severity: 'moderate',
    query: {
      fr: "L'appli ne détecte plus ma prise connectée",
      en: 'The app no longer detects my smart plug',
      de: 'Die App erkennt meine smarte Steckdose nicht mehr',
      es: 'La app ya no detecta mi enchufe inteligente',
      it: "L'app non rileva più la mia presa smart",
      nl: 'De app ziet mijn slimme stekker niet meer',
    },
  },
  {
    slug: 'prise-clignote-rouge',
    categorySlug: 'prises-connectees',
    severity: 'moderate',
    query: {
      fr: 'Ma prise connectée clignote rouge, que veut dire cette LED ?',
      en: 'My smart plug blinks red — what does this LED mean?',
      de: 'Meine smarte Steckdose blinkt rot — was bedeutet diese LED?',
      es: 'Mi enchufe inteligente parpadea rojo, ¿qué significa este LED?',
      it: 'La mia presa smart lampeggia rossa, cosa significa questo LED?',
      nl: 'Mijn slimme stekker knippert rood, wat betekent deze led?',
    },
  },
  {
    slug: 'prise-ne-coupe-pas',
    categorySlug: 'prises-connectees',
    severity: 'critical',
    query: {
      fr: 'Ma prise connectée ne coupe plus le courant',
      en: 'My smart plug no longer cuts the power',
      de: 'Meine smarte Steckdose schaltet den Strom nicht mehr ab',
      es: 'Mi enchufe inteligente ya no corta la corriente',
      it: 'La mia presa smart non interrompe più la corrente',
      nl: 'Mijn slimme stekker schakelt de stroom niet meer uit',
    },
  },
  {
    slug: 'prise-chauffe',
    categorySlug: 'prises-connectees',
    severity: 'critical',
    query: {
      fr: 'Ma prise connectée chauffe anormalement',
      en: 'My smart plug is overheating',
      de: 'Meine smarte Steckdose wird ungewöhnlich heiß',
      es: 'Mi enchufe inteligente se calienta de forma anormal',
      it: 'La mia presa smart si scalda in modo anomalo',
      nl: 'Mijn slimme stekker wordt abnormaal heet',
    },
  },

  // ===================================================================
  // Phase XX — energie-domotique seed (11 categories × 3 = 33 problems)
  // ===================================================================

  // ------- thermostats -------
  {
    slug: 'thermostat-temperature-consigne',
    categorySlug: 'thermostats',
    severity: 'moderate',
    query: {
      fr: 'Mon thermostat connecté n\'atteint pas la température de consigne',
      en: 'My smart thermostat does not reach the target temperature',
      de: 'Mein smartes Thermostat erreicht die Soll-Temperatur nicht',
      es: 'Mi termostato inteligente no alcanza la temperatura de consigna',
      it: 'Il mio termostato intelligente non raggiunge la temperatura impostata',
      nl: 'Mijn slimme thermostaat bereikt de ingestelde temperatuur niet',
    },
  },
  {
    slug: 'thermostat-pile-vide',
    categorySlug: 'thermostats',
    severity: 'minor',
    query: {
      fr: 'Les piles de mon thermostat connecté se vident trop vite',
      en: 'The batteries in my smart thermostat drain too quickly',
      de: 'Die Batterien meines smarten Thermostats sind zu schnell leer',
      es: 'Las pilas de mi termostato inteligente se agotan muy rápido',
      it: 'Le pile del mio termostato intelligente si scaricano troppo in fretta',
      nl: 'De batterijen van mijn slimme thermostaat raken te snel leeg',
    },
  },
  {
    slug: 'thermostat-perd-wifi',
    categorySlug: 'thermostats',
    severity: 'moderate',
    query: {
      fr: 'Mon thermostat connecté perd régulièrement sa connexion WiFi',
      en: 'My smart thermostat keeps losing its WiFi connection',
      de: 'Mein smartes Thermostat verliert ständig die WLAN-Verbindung',
      es: 'Mi termostato inteligente pierde constantemente la conexión WiFi',
      it: 'Il mio termostato intelligente perde spesso la connessione WiFi',
      nl: 'Mijn slimme thermostaat verliest steeds de WiFi-verbinding',
    },
  },

  // ------- compteurs-energie -------
  {
    slug: 'compteur-mesure-erronee',
    categorySlug: 'compteurs-energie',
    severity: 'moderate',
    query: {
      fr: 'Mon compteur d\'énergie affiche une mesure incorrecte',
      en: 'My energy meter shows an incorrect reading',
      de: 'Mein Energiezähler zeigt einen falschen Messwert an',
      es: 'Mi contador de energía muestra una medición incorrecta',
      it: 'Il mio contatore di energia mostra una misura sbagliata',
      nl: 'Mijn energiemeter geeft een onjuiste meting weer',
    },
  },
  {
    slug: 'compteur-donnees-muet',
    categorySlug: 'compteurs-energie',
    severity: 'moderate',
    query: {
      fr: 'Mon compteur d\'énergie ne remonte plus les données',
      en: 'My energy meter is no longer reporting data',
      de: 'Mein Energiezähler überträgt keine Daten mehr',
      es: 'Mi contador de energía ya no envía datos',
      it: 'Il mio contatore di energia non invia più i dati',
      nl: 'Mijn energiemeter stuurt geen data meer door',
    },
  },
  {
    slug: 'compteur-installation-sans-toucher-linky',
    categorySlug: 'compteurs-energie',
    severity: 'minor',
    query: {
      fr: 'Comment installer un compteur d\'énergie sans toucher au Linky ?',
      en: 'How do I install an energy meter without touching the utility meter?',
      de: 'Wie installiere ich einen Energiezähler ohne den Hauptzähler anzufassen?',
      es: '¿Cómo instalar un contador de energía sin tocar el contador principal?',
      it: 'Come installare un contatore di energia senza toccare quello principale?',
      nl: 'Hoe installeer ik een energiemeter zonder de hoofdmeter aan te raken?',
    },
  },

  // ------- solaire-balcon -------
  {
    slug: 'solaire-balcon-production-faible',
    categorySlug: 'solaire-balcon',
    severity: 'moderate',
    query: {
      fr: 'Mon kit solaire de balcon produit moins qu\'annoncé',
      en: 'My balcony solar kit is producing less than advertised',
      de: 'Mein Balkonkraftwerk produziert weniger als angegeben',
      es: 'Mi kit solar de balcón produce menos de lo anunciado',
      it: 'Il mio kit solare da balcone produce meno del previsto',
      nl: 'Mijn balkon-zonnekit produceert minder dan aangegeven',
    },
  },
  {
    slug: 'solaire-balcon-onduleur-hs',
    categorySlug: 'solaire-balcon',
    severity: 'critical',
    query: {
      fr: 'Le micro-onduleur de mon solaire de balcon ne démarre plus',
      en: 'The micro-inverter on my balcony solar kit no longer starts',
      de: 'Der Mikrowechselrichter meines Balkonkraftwerks startet nicht mehr',
      es: 'El microinversor de mi solar de balcón ya no arranca',
      it: 'Il micro-inverter del mio solare da balcone non si avvia più',
      nl: 'De micro-omvormer van mijn balkon-zonnekit start niet meer',
    },
  },
  {
    slug: 'solaire-balcon-nettoyage',
    categorySlug: 'solaire-balcon',
    severity: 'minor',
    query: {
      fr: 'Comment nettoyer un panneau solaire de balcon sans l\'abîmer ?',
      en: 'How do I clean a balcony solar panel without damaging it?',
      de: 'Wie reinige ich ein Balkon-Solarmodul ohne es zu beschädigen?',
      es: '¿Cómo limpiar un panel solar de balcón sin dañarlo?',
      it: 'Come pulire un pannello solare da balcone senza rovinarlo?',
      nl: 'Hoe reinig ik een balkon-zonnepaneel zonder schade?',
    },
  },

  // ------- batteries-domestiques -------
  {
    slug: 'batterie-domestique-charge-incomplete',
    categorySlug: 'batteries-domestiques',
    severity: 'moderate',
    query: {
      fr: 'Ma batterie domestique ne se charge plus complètement',
      en: 'My home battery no longer charges fully',
      de: 'Mein Hausspeicher lädt nicht mehr vollständig auf',
      es: 'Mi batería doméstica ya no se carga por completo',
      it: 'La mia batteria domestica non si ricarica più del tutto',
      nl: 'Mijn thuisbatterij laadt niet meer volledig op',
    },
  },
  {
    slug: 'batterie-domestique-bruit-anormal',
    categorySlug: 'batteries-domestiques',
    severity: 'critical',
    query: {
      fr: 'Ma batterie domestique fait un bruit anormal, est-ce dangereux ?',
      en: 'My home battery is making an unusual noise — is it dangerous?',
      de: 'Mein Hausspeicher macht ungewöhnliche Geräusche — ist das gefährlich?',
      es: 'Mi batería doméstica hace un ruido anómalo, ¿es peligroso?',
      it: 'La mia batteria domestica fa un rumore strano, è pericoloso?',
      nl: 'Mijn thuisbatterij maakt een raar geluid, is dat gevaarlijk?',
    },
  },
  {
    slug: 'batterie-domestique-duree-cycles',
    categorySlug: 'batteries-domestiques',
    severity: 'minor',
    query: {
      fr: 'Combien de cycles de charge peut tenir ma batterie domestique ?',
      en: 'How many charge cycles can my home battery last?',
      de: 'Wie viele Ladezyklen hält mein Hausspeicher aus?',
      es: '¿Cuántos ciclos de carga puede aguantar mi batería doméstica?',
      it: 'Quanti cicli di carica può reggere la mia batteria domestica?',
      nl: 'Hoeveel laadcycli houdt mijn thuisbatterij vol?',
    },
  },

  // ------- eclairage-connecte -------
  {
    slug: 'ampoule-connectee-clignote',
    categorySlug: 'eclairage-connecte',
    severity: 'moderate',
    query: {
      fr: 'Mon ampoule connectée clignote sans raison',
      en: 'My smart bulb keeps flickering for no reason',
      de: 'Meine smarte Glühbirne flackert grundlos',
      es: 'Mi bombilla inteligente parpadea sin motivo',
      it: 'La mia lampadina intelligente lampeggia senza motivo',
      nl: 'Mijn slimme lamp knippert zonder reden',
    },
  },
  {
    slug: 'eclairage-perd-appariement',
    categorySlug: 'eclairage-connecte',
    severity: 'moderate',
    query: {
      fr: 'Mon éclairage connecté perd son appariement avec le hub',
      en: 'My smart lighting keeps losing its pairing with the hub',
      de: 'Meine smarte Beleuchtung verliert die Kopplung mit dem Hub',
      es: 'Mi iluminación inteligente pierde el emparejamiento con el hub',
      it: 'La mia illuminazione intelligente perde l\'accoppiamento con l\'hub',
      nl: 'Mijn slimme verlichting verliest de koppeling met de hub',
    },
  },
  {
    slug: 'ampoule-changement-couleur-bloque',
    categorySlug: 'eclairage-connecte',
    severity: 'minor',
    query: {
      fr: 'Ma lampe connectée ne change plus de couleur',
      en: 'My smart bulb no longer changes color',
      de: 'Meine smarte Lampe wechselt die Farbe nicht mehr',
      es: 'Mi lámpara inteligente ya no cambia de color',
      it: 'La mia lampada intelligente non cambia più colore',
      nl: 'Mijn slimme lamp verandert niet meer van kleur',
    },
  },

  // ------- interrupteurs -------
  {
    slug: 'interrupteur-connecte-ne-repond-plus',
    categorySlug: 'interrupteurs',
    severity: 'moderate',
    query: {
      fr: 'Mon interrupteur connecté ne répond plus aux commandes',
      en: 'My smart switch no longer responds to commands',
      de: 'Mein smarter Schalter reagiert nicht mehr auf Befehle',
      es: 'Mi interruptor inteligente ya no responde a los comandos',
      it: 'Il mio interruttore intelligente non risponde più ai comandi',
      nl: 'Mijn slimme schakelaar reageert niet meer op commando\'s',
    },
  },
  {
    slug: 'interrupteur-voyant-clignote',
    categorySlug: 'interrupteurs',
    severity: 'minor',
    query: {
      fr: 'Le voyant de mon interrupteur connecté clignote en permanence',
      en: 'The indicator on my smart switch flashes constantly',
      de: 'Die Kontrollleuchte meines smarten Schalters blinkt ständig',
      es: 'El indicador de mi interruptor inteligente parpadea constantemente',
      it: 'La spia del mio interruttore intelligente lampeggia di continuo',
      nl: 'Het controlelampje van mijn slimme schakelaar knippert steeds',
    },
  },
  {
    slug: 'interrupteur-sans-fil-neutre',
    categorySlug: 'interrupteurs',
    severity: 'minor',
    query: {
      fr: 'Comment installer un interrupteur connecté sans fil neutre ?',
      en: 'How do I install a smart switch without a neutral wire?',
      de: 'Wie installiere ich einen smarten Schalter ohne Neutralleiter?',
      es: '¿Cómo instalar un interruptor inteligente sin cable neutro?',
      it: 'Come installare un interruttore intelligente senza filo neutro?',
      nl: 'Hoe installeer ik een slimme schakelaar zonder nulleider?',
    },
  },

  // ------- volets-stores -------
  {
    slug: 'volet-connecte-arrete-milieu-course',
    categorySlug: 'volets-stores',
    severity: 'moderate',
    query: {
      fr: 'Mon volet connecté s\'arrête en milieu de course',
      en: 'My smart shutter stops halfway through its travel',
      de: 'Mein smarter Rollladen bleibt auf halber Strecke stehen',
      es: 'Mi persiana inteligente se detiene a mitad de recorrido',
      it: 'La mia tapparella intelligente si ferma a metà corsa',
      nl: 'Mijn slimme rolluik stopt halverwege',
    },
  },
  {
    slug: 'volet-connecte-ne-descend-plus',
    categorySlug: 'volets-stores',
    severity: 'moderate',
    query: {
      fr: 'Mon volet roulant connecté ne descend plus',
      en: 'My smart roller shutter no longer lowers',
      de: 'Mein smarter Rollladen lässt sich nicht mehr herunterfahren',
      es: 'Mi persiana enrollable inteligente ya no baja',
      it: 'La mia tapparella intelligente non scende più',
      nl: 'Mijn slimme rolluik gaat niet meer omlaag',
    },
  },
  {
    slug: 'volet-connecte-calibration',
    categorySlug: 'volets-stores',
    severity: 'minor',
    query: {
      fr: 'Comment calibrer un volet connecté après changement de moteur ?',
      en: 'How do I calibrate a smart shutter after changing the motor?',
      de: 'Wie kalibriere ich einen smarten Rollladen nach dem Motorwechsel?',
      es: '¿Cómo calibrar una persiana inteligente tras cambiar el motor?',
      it: 'Come calibrare una tapparella intelligente dopo il cambio motore?',
      nl: 'Hoe kalibreer ik een slim rolluik na het vervangen van de motor?',
    },
  },

  // ------- capteurs-qualite-air -------
  {
    slug: 'capteur-air-mesures-incoherentes',
    categorySlug: 'capteurs-qualite-air',
    severity: 'moderate',
    query: {
      fr: 'Mon capteur de qualité d\'air donne des mesures incohérentes',
      en: 'My air quality sensor reports inconsistent readings',
      de: 'Mein Luftqualitätssensor liefert inkonsistente Werte',
      es: 'Mi sensor de calidad del aire da lecturas incoherentes',
      it: 'Il mio sensore di qualità dell\'aria fornisce misure incoerenti',
      nl: 'Mijn luchtkwaliteitssensor geeft tegenstrijdige metingen',
    },
  },
  {
    slug: 'capteur-air-pile-decharge',
    categorySlug: 'capteurs-qualite-air',
    severity: 'minor',
    query: {
      fr: 'Les piles de mon capteur de qualité d\'air se vident en deux semaines',
      en: 'The batteries in my air quality sensor drain in two weeks',
      de: 'Die Batterien meines Luftqualitätssensors sind in zwei Wochen leer',
      es: 'Las pilas de mi sensor de calidad del aire duran solo dos semanas',
      it: 'Le pile del mio sensore di qualità dell\'aria si scaricano in due settimane',
      nl: 'De batterijen van mijn luchtkwaliteitssensor gaan maar twee weken mee',
    },
  },
  {
    slug: 'capteur-air-seuils-alerte',
    categorySlug: 'capteurs-qualite-air',
    severity: 'minor',
    query: {
      fr: 'Comment régler les seuils d\'alerte de mon capteur de qualité d\'air ?',
      en: 'How do I set the alert thresholds on my air quality sensor?',
      de: 'Wie stelle ich die Alarmgrenzen meines Luftqualitätssensors ein?',
      es: '¿Cómo configurar los umbrales de alerta de mi sensor de calidad del aire?',
      it: 'Come impostare le soglie di allerta del mio sensore di qualità dell\'aria?',
      nl: 'Hoe stel ik de alarmdrempels van mijn luchtkwaliteitssensor in?',
    },
  },

  // ------- detecteurs-fuite-eau -------
  {
    slug: 'detecteur-fuite-fausse-alerte',
    categorySlug: 'detecteurs-fuite-eau',
    severity: 'moderate',
    query: {
      fr: 'Mon détecteur de fuite d\'eau déclenche de fausses alertes',
      en: 'My water leak detector keeps triggering false alarms',
      de: 'Mein Wasserleck-Sensor löst ständig Fehlalarme aus',
      es: 'Mi detector de fugas de agua lanza falsas alertas',
      it: 'Il mio rilevatore di perdite d\'acqua genera falsi allarmi',
      nl: 'Mijn waterlekdetector geeft valse meldingen',
    },
  },
  {
    slug: 'detecteur-fuite-electrovanne-hs',
    categorySlug: 'detecteurs-fuite-eau',
    severity: 'critical',
    query: {
      fr: 'L\'électrovanne de mon détecteur de fuite d\'eau ne coupe plus l\'arrivée',
      en: 'The shut-off valve on my water leak detector no longer stops the flow',
      de: 'Das Absperrventil meines Wasserleck-Sensors sperrt den Zufluss nicht mehr',
      es: 'La electroválvula de mi detector de fugas ya no corta el agua',
      it: 'L\'elettrovalvola del mio rilevatore di perdite non blocca più l\'acqua',
      nl: 'De afsluiter van mijn waterlekdetector stopt de toevoer niet meer',
    },
  },
  {
    slug: 'detecteur-fuite-duree-pile',
    categorySlug: 'detecteurs-fuite-eau',
    severity: 'minor',
    query: {
      fr: 'Combien de temps tient la pile d\'un détecteur de fuite d\'eau ?',
      en: 'How long does the battery of a water leak detector last?',
      de: 'Wie lange hält die Batterie eines Wasserleck-Sensors?',
      es: '¿Cuánto dura la pila de un detector de fugas de agua?',
      it: 'Quanto dura la pila di un rilevatore di perdite d\'acqua?',
      nl: 'Hoe lang gaat de batterij van een waterlekdetector mee?',
    },
  },

  // ------- hubs-domotique -------
  {
    slug: 'hub-peripheriques-disparaissent',
    categorySlug: 'hubs-domotique',
    severity: 'moderate',
    query: {
      fr: 'Les périphériques de mon hub domotique disparaissent régulièrement',
      en: 'Devices on my smart home hub keep disappearing',
      de: 'Geräte an meinem Smart-Home-Hub verschwinden regelmäßig',
      es: 'Los dispositivos de mi hub domótico desaparecen con frecuencia',
      it: 'I dispositivi del mio hub domotico spariscono di continuo',
      nl: 'Apparaten op mijn domotica-hub verdwijnen regelmatig',
    },
  },
  {
    slug: 'hub-mise-a-jour-echoue',
    categorySlug: 'hubs-domotique',
    severity: 'moderate',
    query: {
      fr: 'La mise à jour de mon hub domotique échoue à chaque tentative',
      en: 'My smart home hub update fails every time',
      de: 'Das Update meines Smart-Home-Hubs schlägt jedes Mal fehl',
      es: 'La actualización de mi hub domótico falla cada vez',
      it: 'L\'aggiornamento del mio hub domotico fallisce ogni volta',
      nl: 'De update van mijn domotica-hub mislukt elke keer',
    },
  },
  {
    slug: 'hub-migration-ecosysteme',
    categorySlug: 'hubs-domotique',
    severity: 'minor',
    query: {
      fr: 'Comment migrer son écosystème domotique vers un nouveau hub ?',
      en: 'How do I migrate my smart home ecosystem to a new hub?',
      de: 'Wie migriere ich mein Smart-Home-Ökosystem auf einen neuen Hub?',
      es: '¿Cómo migrar mi ecosistema domótico a un hub nuevo?',
      it: 'Come migrare il mio ecosistema domotico su un nuovo hub?',
      nl: 'Hoe verhuis ik mijn domotica-ecosysteem naar een nieuwe hub?',
    },
  },

  // ------- bornes-recharge-ve -------
  {
    slug: 'borne-ve-charge-lente',
    categorySlug: 'bornes-recharge-ve',
    severity: 'moderate',
    query: {
      fr: 'Ma borne de recharge VE charge anormalement lentement',
      en: 'My EV charging station is charging abnormally slowly',
      de: 'Meine Wallbox lädt ungewöhnlich langsam',
      es: 'Mi punto de recarga para VE carga mucho más lento de lo normal',
      it: 'La mia stazione di ricarica VE carica stranamente lenta',
      nl: 'Mijn EV-laadpaal laadt abnormaal langzaam',
    },
  },
  {
    slug: 'borne-ve-code-erreur',
    categorySlug: 'bornes-recharge-ve',
    severity: 'critical',
    query: {
      fr: 'Ma borne de recharge VE affiche un code erreur et ne démarre plus',
      en: 'My EV charging station shows an error code and no longer starts',
      de: 'Meine Wallbox zeigt einen Fehlercode und startet nicht mehr',
      es: 'Mi punto de recarga para VE muestra un código de error y no arranca',
      it: 'La mia stazione di ricarica VE mostra un codice di errore e non parte più',
      nl: 'Mijn EV-laadpaal toont een foutcode en start niet meer',
    },
  },
  {
    slug: 'borne-ve-installation-domicile',
    categorySlug: 'bornes-recharge-ve',
    severity: 'minor',
    query: {
      fr: 'Comment installer une borne de recharge VE à domicile en toute sécurité ?',
      en: 'How do I safely install an EV charging station at home?',
      de: 'Wie installiere ich eine Wallbox zu Hause sicher?',
      es: '¿Cómo instalar un punto de recarga para VE en casa de forma segura?',
      it: 'Come installare in sicurezza una stazione di ricarica VE in casa?',
      nl: 'Hoe installeer ik veilig een EV-laadpaal thuis?',
    },
  },
] as const

export function getProblem(slug: string): Problem | undefined {
  return PROBLEMS.find((p) => p.slug === slug)
}

export function getProblemsByCategory(categorySlug: string): Problem[] {
  return PROBLEMS.filter((p) => p.categorySlug === categorySlug)
}
