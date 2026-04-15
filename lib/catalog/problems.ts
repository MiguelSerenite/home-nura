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
 * Phase YY (Period 12) mirrors the same pattern for securite-maison:
 * 10 indexable categories × 3 = 30 new problems. Phase ZZ (Period 13)
 * does the same for confort-air: another 10 × 3 = 30. Phase AAA
 * (Period 14) ships entretien-maison: 8 indexable categories × 3 =
 * 24 new problems, running total 147 problems × 6 locales = 882
 * troubleshooting pages. Phase BBB finishes the sequence with
 * outdoor-connecte.
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

  // ===================================================================
  // Phase YY — securite-maison seed (10 categories × 3 = 30 problems)
  // ===================================================================

  // ------- sonnettes-video -------
  {
    slug: 'sonnette-pas-notification',
    categorySlug: 'sonnettes-video',
    severity: 'moderate',
    query: {
      fr: 'Ma sonnette vidéo ne m\'envoie plus de notification',
      en: 'My video doorbell is no longer sending notifications',
      de: 'Meine Video-Türklingel sendet keine Benachrichtigungen mehr',
      es: 'Mi videoportero ya no me envía notificaciones',
      it: 'Il mio videocitofono non mi manda più notifiche',
      nl: 'Mijn videodeurbel stuurt geen meldingen meer',
    },
  },
  {
    slug: 'sonnette-vision-nuit-grise',
    categorySlug: 'sonnettes-video',
    severity: 'minor',
    query: {
      fr: 'La vision nocturne de ma sonnette vidéo est grise et dégradée',
      en: 'The night vision on my video doorbell is grey and washed out',
      de: 'Die Nachtsicht meiner Video-Türklingel ist grau und unscharf',
      es: 'La visión nocturna de mi videoportero se ve gris y desvaída',
      it: 'La visione notturna del mio videocitofono è grigia e sbiadita',
      nl: 'Het nachtzicht van mijn videodeurbel is grijs en vaag',
    },
  },
  {
    slug: 'sonnette-batterie-dure-pas',
    categorySlug: 'sonnettes-video',
    severity: 'moderate',
    query: {
      fr: 'La batterie de ma sonnette vidéo se décharge en quelques jours',
      en: 'My video doorbell battery drains within a few days',
      de: 'Der Akku meiner Video-Türklingel ist nach wenigen Tagen leer',
      es: 'La batería de mi videoportero se descarga en pocos días',
      it: 'La batteria del mio videocitofono si scarica in pochi giorni',
      nl: 'De accu van mijn videodeurbel is binnen enkele dagen leeg',
    },
  },

  // ------- cameras-interieur -------
  {
    slug: 'camera-int-flux-lent',
    categorySlug: 'cameras-interieur',
    severity: 'moderate',
    query: {
      fr: 'Le flux vidéo de ma caméra intérieure est très lent',
      en: 'My indoor camera video stream is very laggy',
      de: 'Der Videostream meiner Innenkamera ist sehr langsam',
      es: 'La transmisión de video de mi cámara interior va muy lenta',
      it: 'Il flusso video della mia telecamera interna è molto lento',
      nl: 'De videostream van mijn binnencamera loopt erg traag',
    },
  },
  {
    slug: 'camera-int-fausse-detection',
    categorySlug: 'cameras-interieur',
    severity: 'minor',
    query: {
      fr: 'Ma caméra intérieure détecte des mouvements inexistants',
      en: 'My indoor camera keeps detecting motion that is not there',
      de: 'Meine Innenkamera erkennt Bewegungen, die es gar nicht gibt',
      es: 'Mi cámara interior detecta movimientos que no existen',
      it: 'La mia telecamera interna rileva movimenti inesistenti',
      nl: 'Mijn binnencamera detecteert beweging die er niet is',
    },
  },
  {
    slug: 'camera-int-hors-ligne',
    categorySlug: 'cameras-interieur',
    severity: 'moderate',
    query: {
      fr: 'Ma caméra intérieure passe sans arrêt hors ligne',
      en: 'My indoor camera keeps going offline',
      de: 'Meine Innenkamera geht ständig offline',
      es: 'Mi cámara interior se desconecta constantemente',
      it: 'La mia telecamera interna va offline di continuo',
      nl: 'Mijn binnencamera gaat voortdurend offline',
    },
  },

  // ------- cameras-exterieur -------
  {
    slug: 'camera-ext-infrarouge-eblouie',
    categorySlug: 'cameras-exterieur',
    severity: 'minor',
    query: {
      fr: 'Les infrarouges de ma caméra extérieure éblouissent l\'image la nuit',
      en: 'The infrared on my outdoor camera washes out the image at night',
      de: 'Das Infrarot meiner Außenkamera überblendet das Bild nachts',
      es: 'Los infrarrojos de mi cámara exterior deslumbran la imagen por la noche',
      it: 'Gli infrarossi della mia telecamera esterna sovraesponongono l\'immagine di notte',
      nl: 'De infraroodverlichting van mijn buitencamera overstraalt het beeld \'s nachts',
    },
  },
  {
    slug: 'camera-ext-etanche-cedee',
    categorySlug: 'cameras-exterieur',
    severity: 'critical',
    query: {
      fr: 'Ma caméra extérieure a pris l\'eau et ne s\'allume plus',
      en: 'My outdoor camera got water inside and no longer powers on',
      de: 'In meine Außenkamera ist Wasser eingedrungen — sie lässt sich nicht mehr einschalten',
      es: 'Le ha entrado agua a mi cámara exterior y ya no enciende',
      it: 'La mia telecamera esterna è entrata acqua e non si accende più',
      nl: 'Er is water in mijn buitencamera gekomen en hij gaat niet meer aan',
    },
  },
  {
    slug: 'camera-ext-mouvement-rate',
    categorySlug: 'cameras-exterieur',
    severity: 'moderate',
    query: {
      fr: 'Ma caméra extérieure rate les passages importants',
      en: 'My outdoor camera misses the important events',
      de: 'Meine Außenkamera verpasst die wichtigen Vorfälle',
      es: 'Mi cámara exterior se pierde los movimientos importantes',
      it: 'La mia telecamera esterna si perde gli eventi importanti',
      nl: 'Mijn buitencamera mist de belangrijke momenten',
    },
  },

  // ------- serrures-connectees -------
  {
    slug: 'serrure-pile-vide-bloque-dehors',
    categorySlug: 'serrures-connectees',
    severity: 'critical',
    query: {
      fr: 'Ma serrure connectée est tombée en panne et je suis bloqué dehors',
      en: 'My smart lock is dead and I am locked out',
      de: 'Mein smartes Türschloss ist ausgefallen und ich stehe draußen',
      es: 'Mi cerradura inteligente se ha averiado y me he quedado fuera',
      it: 'La mia serratura intelligente è in avaria e sono rimasto fuori casa',
      nl: 'Mijn slimme slot is uitgevallen en ik sta buitengesloten',
    },
  },
  {
    slug: 'serrure-code-pave-ne-repond',
    categorySlug: 'serrures-connectees',
    severity: 'moderate',
    query: {
      fr: 'Le pavé numérique de ma serrure connectée ne répond plus',
      en: 'The keypad on my smart lock no longer responds',
      de: 'Das Zahlenfeld meines smarten Schlosses reagiert nicht mehr',
      es: 'El teclado de mi cerradura inteligente ya no responde',
      it: 'Il tastierino della mia serratura intelligente non risponde più',
      nl: 'Het toetsenblok van mijn slimme slot reageert niet meer',
    },
  },
  {
    slug: 'serrure-compatible-porte-epaisse',
    categorySlug: 'serrures-connectees',
    severity: 'minor',
    query: {
      fr: 'Comment choisir une serrure connectée pour une porte très épaisse ?',
      en: 'How do I choose a smart lock for a very thick door?',
      de: 'Wie wähle ich ein smartes Schloss für eine sehr dicke Tür?',
      es: '¿Cómo elegir una cerradura inteligente para una puerta muy gruesa?',
      it: 'Come scegliere una serratura intelligente per una porta molto spessa?',
      nl: 'Hoe kies ik een slim slot voor een heel dikke deur?',
    },
  },

  // ------- alarmes -------
  {
    slug: 'alarme-fausse-alerte-nuit',
    categorySlug: 'alarmes',
    severity: 'moderate',
    query: {
      fr: 'Mon alarme connectée déclenche de fausses alertes la nuit',
      en: 'My smart alarm keeps triggering false alerts at night',
      de: 'Meine smarte Alarmanlage löst nachts ständig Fehlalarme aus',
      es: 'Mi alarma inteligente lanza falsas alertas por la noche',
      it: 'Il mio allarme intelligente dà falsi allarmi di notte',
      nl: 'Mijn slimme alarm geeft \'s nachts valse meldingen',
    },
  },
  {
    slug: 'alarme-sirene-ne-sonne-plus',
    categorySlug: 'alarmes',
    severity: 'critical',
    query: {
      fr: 'La sirène de mon alarme connectée ne sonne plus',
      en: 'The siren on my smart alarm no longer sounds',
      de: 'Die Sirene meiner smarten Alarmanlage ertönt nicht mehr',
      es: 'La sirena de mi alarma inteligente ya no suena',
      it: 'La sirena del mio allarme intelligente non suona più',
      nl: 'De sirene van mijn slimme alarm gaat niet meer af',
    },
  },
  {
    slug: 'alarme-rearmement-auto',
    categorySlug: 'alarmes',
    severity: 'minor',
    query: {
      fr: 'Comment régler le réarmement automatique d\'une alarme connectée ?',
      en: 'How do I set up auto-rearm on a smart alarm?',
      de: 'Wie stelle ich die automatische Wiederscharfschaltung einer smarten Alarmanlage ein?',
      es: '¿Cómo configurar el rearme automático de una alarma inteligente?',
      it: 'Come configurare il riarmo automatico di un allarme intelligente?',
      nl: 'Hoe stel ik automatisch herinschakelen in op een slim alarm?',
    },
  },

  // ------- detecteurs-fumee-co -------
  {
    slug: 'detecteur-fumee-bip-aleatoire',
    categorySlug: 'detecteurs-fumee-co',
    severity: 'moderate',
    query: {
      fr: 'Mon détecteur de fumée connecté bipe à intervalles aléatoires',
      en: 'My smart smoke detector beeps at random intervals',
      de: 'Mein smarter Rauchmelder piept in zufälligen Abständen',
      es: 'Mi detector de humo inteligente pita a intervalos aleatorios',
      it: 'Il mio rilevatore di fumo intelligente emette bip a intervalli casuali',
      nl: 'Mijn slimme rookmelder piept op willekeurige momenten',
    },
  },
  {
    slug: 'detecteur-co-fausse-alerte',
    categorySlug: 'detecteurs-fumee-co',
    severity: 'critical',
    query: {
      fr: 'Mon détecteur de CO déclenche une alerte sans raison apparente',
      en: 'My CO detector triggers an alarm with no obvious cause',
      de: 'Mein CO-Melder löst ohne erkennbaren Grund einen Alarm aus',
      es: 'Mi detector de CO lanza una alerta sin razón aparente',
      it: 'Il mio rilevatore di CO scatta senza un motivo apparente',
      nl: 'Mijn CO-melder slaat alarm zonder duidelijke reden',
    },
  },
  {
    slug: 'detecteur-fumee-duree-vie',
    categorySlug: 'detecteurs-fumee-co',
    severity: 'minor',
    query: {
      fr: 'Quelle est la durée de vie d\'un détecteur de fumée connecté ?',
      en: 'How long does a smart smoke detector actually last?',
      de: 'Wie lange hält ein smarter Rauchmelder wirklich?',
      es: '¿Cuánto dura realmente un detector de humo inteligente?',
      it: 'Quanto dura davvero un rilevatore di fumo intelligente?',
      nl: 'Hoe lang gaat een slimme rookmelder echt mee?',
    },
  },

  // ------- detecteurs-mouvement -------
  {
    slug: 'mouvement-portee-faible',
    categorySlug: 'detecteurs-mouvement',
    severity: 'moderate',
    query: {
      fr: 'Mon détecteur de mouvement a une portée beaucoup plus faible qu\'annoncé',
      en: 'My motion detector has a much shorter range than advertised',
      de: 'Mein Bewegungsmelder hat eine deutlich kürzere Reichweite als angegeben',
      es: 'Mi detector de movimiento tiene un alcance mucho menor del anunciado',
      it: 'Il mio rilevatore di movimento ha una portata molto inferiore a quella dichiarata',
      nl: 'Mijn bewegingsmelder heeft veel minder bereik dan opgegeven',
    },
  },
  {
    slug: 'mouvement-animaux-immunite',
    categorySlug: 'detecteurs-mouvement',
    severity: 'minor',
    query: {
      fr: 'Comment régler un détecteur de mouvement pour ignorer les animaux ?',
      en: 'How do I set a motion detector to ignore pets?',
      de: 'Wie stelle ich einen Bewegungsmelder so ein, dass er Haustiere ignoriert?',
      es: '¿Cómo configurar un detector de movimiento para ignorar a las mascotas?',
      it: 'Come impostare un rilevatore di movimento per ignorare gli animali?',
      nl: 'Hoe stel ik een bewegingsmelder zo in dat huisdieren worden genegeerd?',
    },
  },
  {
    slug: 'mouvement-temoin-clignote',
    categorySlug: 'detecteurs-mouvement',
    severity: 'minor',
    query: {
      fr: 'Le témoin de mon détecteur de mouvement clignote en permanence',
      en: 'The indicator LED on my motion detector flashes constantly',
      de: 'Die Kontroll-LED meines Bewegungsmelders blinkt ununterbrochen',
      es: 'El indicador LED de mi detector de movimiento parpadea sin parar',
      it: 'La spia LED del mio rilevatore di movimento lampeggia in continuazione',
      nl: 'Het LED-lampje van mijn bewegingsmelder knippert constant',
    },
  },

  // ------- trackers-objets -------
  {
    slug: 'tracker-perd-connexion',
    categorySlug: 'trackers-objets',
    severity: 'moderate',
    query: {
      fr: 'Mon tracker d\'objets perd régulièrement sa connexion',
      en: 'My object tracker keeps losing its connection',
      de: 'Mein Objekt-Tracker verliert ständig die Verbindung',
      es: 'Mi rastreador de objetos pierde la conexión con frecuencia',
      it: 'Il mio tracker per oggetti perde spesso la connessione',
      nl: 'Mijn objecttracker verliest steeds de verbinding',
    },
  },
  {
    slug: 'tracker-bluetooth-portee-reelle',
    categorySlug: 'trackers-objets',
    severity: 'minor',
    query: {
      fr: 'Quelle est la portée réelle du Bluetooth d\'un tracker d\'objets ?',
      en: 'What is the real Bluetooth range of an object tracker?',
      de: 'Wie groß ist die tatsächliche Bluetooth-Reichweite eines Objekt-Trackers?',
      es: '¿Cuál es el alcance real de Bluetooth de un rastreador de objetos?',
      it: 'Qual è la portata reale del Bluetooth di un tracker per oggetti?',
      nl: 'Wat is het werkelijke Bluetooth-bereik van een objecttracker?',
    },
  },
  {
    slug: 'tracker-changer-pile',
    categorySlug: 'trackers-objets',
    severity: 'minor',
    query: {
      fr: 'Comment changer la pile d\'un tracker d\'objets ?',
      en: 'How do I change the battery on an object tracker?',
      de: 'Wie wechsle ich die Batterie eines Objekt-Trackers?',
      es: '¿Cómo cambiar la pila de un rastreador de objetos?',
      it: 'Come cambiare la pila di un tracker per oggetti?',
      nl: 'Hoe vervang ik de batterij van een objecttracker?',
    },
  },

  // ------- interphones -------
  {
    slug: 'interphone-audio-coupe',
    categorySlug: 'interphones',
    severity: 'moderate',
    query: {
      fr: 'L\'audio de mon interphone connecté coupe régulièrement',
      en: 'The audio on my smart intercom keeps cutting out',
      de: 'Der Ton meiner smarten Gegensprechanlage setzt ständig aus',
      es: 'El audio de mi interfono inteligente se corta con frecuencia',
      it: 'L\'audio del mio citofono intelligente si interrompe di continuo',
      nl: 'Het geluid van mijn slimme intercom valt steeds weg',
    },
  },
  {
    slug: 'interphone-ne-sonne-pas',
    categorySlug: 'interphones',
    severity: 'critical',
    query: {
      fr: 'Mon interphone connecté ne sonne plus à l\'appel',
      en: 'My smart intercom no longer rings when called',
      de: 'Meine smarte Gegensprechanlage klingelt bei Anruf nicht mehr',
      es: 'Mi interfono inteligente ya no suena al llamar',
      it: 'Il mio citofono intelligente non suona più quando chiamano',
      nl: 'Mijn slimme intercom gaat niet meer over bij een oproep',
    },
  },
  {
    slug: 'interphone-ouverture-retard',
    categorySlug: 'interphones',
    severity: 'minor',
    query: {
      fr: 'Le bouton d\'ouverture de porte de mon interphone connecté a du retard',
      en: 'The door-release button on my smart intercom is laggy',
      de: 'Der Türöffner-Knopf meiner smarten Gegensprechanlage reagiert verzögert',
      es: 'El botón de apertura de mi interfono inteligente tarda en responder',
      it: 'Il pulsante di apertura del mio citofono intelligente risponde in ritardo',
      nl: 'De deuropenerknop van mijn slimme intercom reageert traag',
    },
  },

  // ------- coffres-forts-connectes -------
  {
    slug: 'coffre-fort-pile-dechargee',
    categorySlug: 'coffres-forts-connectes',
    severity: 'critical',
    query: {
      fr: 'Mon coffre-fort connecté est verrouillé car les piles sont vides',
      en: 'My smart safe is locked because the batteries are dead',
      de: 'Mein smarter Safe ist verriegelt, weil die Batterien leer sind',
      es: 'Mi caja fuerte inteligente está bloqueada porque las pilas se agotaron',
      it: 'La mia cassaforte intelligente è bloccata perché le pile sono scariche',
      nl: 'Mijn slimme kluis zit op slot omdat de batterijen leeg zijn',
    },
  },
  {
    slug: 'coffre-fort-code-oublie',
    categorySlug: 'coffres-forts-connectes',
    severity: 'moderate',
    query: {
      fr: 'J\'ai oublié le code maître de mon coffre-fort connecté',
      en: 'I have forgotten the master code for my smart safe',
      de: 'Ich habe den Master-Code meines smarten Safes vergessen',
      es: 'He olvidado el código maestro de mi caja fuerte inteligente',
      it: 'Ho dimenticato il codice master della mia cassaforte intelligente',
      nl: 'Ik ben de mastercode van mijn slimme kluis vergeten',
    },
  },
  {
    slug: 'coffre-fort-ignifuge',
    categorySlug: 'coffres-forts-connectes',
    severity: 'minor',
    query: {
      fr: 'Un coffre-fort connecté est-il vraiment ignifuge ?',
      en: 'Is a smart safe really fireproof?',
      de: 'Ist ein smarter Safe wirklich feuerfest?',
      es: '¿Una caja fuerte inteligente es realmente ignífuga?',
      it: 'Una cassaforte intelligente è davvero ignifuga?',
      nl: 'Is een slimme kluis echt brandwerend?',
    },
  },

  // ===================================================================
  // Phase ZZ — confort-air seed (10 categories × 3 = 30 problems)
  // ===================================================================

  // ------- purificateurs-air -------
  {
    slug: 'purificateur-bruit-fort',
    categorySlug: 'purificateurs-air',
    severity: 'moderate',
    query: {
      fr: 'Mon purificateur d\'air fait trop de bruit',
      en: 'My air purifier is much too loud',
      de: 'Mein Luftreiniger ist viel zu laut',
      es: 'Mi purificador de aire hace demasiado ruido',
      it: 'Il mio purificatore d\'aria fa troppo rumore',
      nl: 'Mijn luchtreiniger maakt veel te veel lawaai',
    },
  },
  {
    slug: 'purificateur-filtre-rapide',
    categorySlug: 'purificateurs-air',
    severity: 'minor',
    query: {
      fr: 'Le filtre de mon purificateur d\'air sature en quelques semaines',
      en: 'The filter in my air purifier clogs up within a few weeks',
      de: 'Der Filter meines Luftreinigers ist nach wenigen Wochen verstopft',
      es: 'El filtro de mi purificador de aire se satura en pocas semanas',
      it: 'Il filtro del mio purificatore d\'aria si satura in poche settimane',
      nl: 'Het filter van mijn luchtreiniger raakt binnen enkele weken verzadigd',
    },
  },
  {
    slug: 'purificateur-voyant-rouge',
    categorySlug: 'purificateurs-air',
    severity: 'moderate',
    query: {
      fr: 'Le voyant rouge de mon purificateur d\'air reste allumé en permanence',
      en: 'The red warning light on my air purifier stays on all the time',
      de: 'Die rote Warnleuchte meines Luftreinigers leuchtet ständig',
      es: 'La luz roja de mi purificador de aire queda encendida de forma permanente',
      it: 'La spia rossa del mio purificatore d\'aria resta sempre accesa',
      nl: 'Het rode waarschuwingslampje van mijn luchtreiniger blijft altijd branden',
    },
  },

  // ------- humidificateurs -------
  {
    slug: 'humidificateur-depot-blanc',
    categorySlug: 'humidificateurs',
    severity: 'minor',
    query: {
      fr: 'Mon humidificateur laisse un dépôt blanc sur les meubles',
      en: 'My humidifier leaves a white residue on nearby furniture',
      de: 'Mein Luftbefeuchter hinterlässt weißen Belag auf den Möbeln',
      es: 'Mi humidificador deja un polvo blanco sobre los muebles',
      it: 'Il mio umidificatore lascia un deposito bianco sui mobili',
      nl: 'Mijn luchtbevochtiger laat een witte aanslag achter op het meubilair',
    },
  },
  {
    slug: 'humidificateur-ne-diffuse-plus',
    categorySlug: 'humidificateurs',
    severity: 'moderate',
    query: {
      fr: 'Mon humidificateur ne diffuse plus de vapeur',
      en: 'My humidifier is no longer releasing any mist',
      de: 'Mein Luftbefeuchter gibt keinen Nebel mehr ab',
      es: 'Mi humidificador ya no emite vapor',
      it: 'Il mio umidificatore non emette più vapore',
      nl: 'Mijn luchtbevochtiger geeft geen nevel meer af',
    },
  },
  {
    slug: 'humidificateur-odeur',
    categorySlug: 'humidificateurs',
    severity: 'moderate',
    query: {
      fr: 'Mon humidificateur dégage une odeur désagréable',
      en: 'My humidifier gives off an unpleasant smell',
      de: 'Mein Luftbefeuchter verströmt einen unangenehmen Geruch',
      es: 'Mi humidificador desprende un olor desagradable',
      it: 'Il mio umidificatore emana un odore sgradevole',
      nl: 'Mijn luchtbevochtiger verspreidt een onaangename geur',
    },
  },

  // ------- deshumidificateurs -------
  {
    slug: 'deshumidificateur-bac-ne-remplit',
    categorySlug: 'deshumidificateurs',
    severity: 'moderate',
    query: {
      fr: 'Le bac de mon déshumidificateur ne se remplit presque plus',
      en: 'The tank on my dehumidifier barely fills up anymore',
      de: 'Der Behälter meines Luftentfeuchters füllt sich kaum noch',
      es: 'El depósito de mi deshumidificador ya casi no se llena',
      it: 'La vaschetta del mio deumidificatore non si riempie quasi più',
      nl: 'Het reservoir van mijn luchtontvochtiger wordt bijna niet meer vol',
    },
  },
  {
    slug: 'deshumidificateur-bruit-compresseur',
    categorySlug: 'deshumidificateurs',
    severity: 'moderate',
    query: {
      fr: 'Le compresseur de mon déshumidificateur fait un bruit très fort',
      en: 'My dehumidifier compressor has become very noisy',
      de: 'Der Kompressor meines Luftentfeuchters ist sehr laut geworden',
      es: 'El compresor de mi deshumidificador hace mucho ruido',
      it: 'Il compressore del mio deumidificatore fa molto rumore',
      nl: 'De compressor van mijn luchtontvochtiger maakt veel lawaai',
    },
  },
  {
    slug: 'deshumidificateur-consommation',
    categorySlug: 'deshumidificateurs',
    severity: 'minor',
    query: {
      fr: 'Combien consomme un déshumidificateur en fonctionnement continu ?',
      en: 'How much power does a dehumidifier use when running continuously?',
      de: 'Wie viel Strom verbraucht ein Luftentfeuchter im Dauerbetrieb?',
      es: '¿Cuánto consume un deshumidificador funcionando sin parar?',
      it: 'Quanto consuma un deumidificatore in funzionamento continuo?',
      nl: 'Hoeveel stroom verbruikt een luchtontvochtiger bij continu gebruik?',
    },
  },

  // ------- climatiseurs-mobiles -------
  {
    slug: 'climatiseur-mobile-ne-refroidit-plus',
    categorySlug: 'climatiseurs-mobiles',
    severity: 'moderate',
    query: {
      fr: 'Mon climatiseur mobile ne refroidit plus la pièce',
      en: 'My portable air conditioner no longer cools the room',
      de: 'Meine mobile Klimaanlage kühlt den Raum nicht mehr',
      es: 'Mi aire acondicionado portátil ya no enfría la habitación',
      it: 'Il mio condizionatore portatile non raffredda più la stanza',
      nl: 'Mijn mobiele airco koelt de kamer niet meer',
    },
  },
  {
    slug: 'climatiseur-mobile-gaine-chaud',
    categorySlug: 'climatiseurs-mobiles',
    severity: 'minor',
    query: {
      fr: 'La gaine de mon climatiseur mobile réchauffe la pièce au lieu de l\'évacuer',
      en: 'The exhaust hose on my portable AC heats up the room instead of venting outside',
      de: 'Der Abluftschlauch meiner mobilen Klimaanlage heizt den Raum auf statt nach draußen zu führen',
      es: 'La manguera de mi aire acondicionado portátil calienta la habitación en lugar de evacuar el aire',
      it: 'Il tubo del mio condizionatore portatile scalda la stanza invece di evacuare l\'aria',
      nl: 'De afvoerslang van mijn mobiele airco verwarmt de kamer in plaats van hem naar buiten te voeren',
    },
  },
  {
    slug: 'climatiseur-mobile-fuite-eau',
    categorySlug: 'climatiseurs-mobiles',
    severity: 'moderate',
    query: {
      fr: 'Mon climatiseur mobile fuit de l\'eau',
      en: 'My portable air conditioner is leaking water',
      de: 'Meine mobile Klimaanlage verliert Wasser',
      es: 'Mi aire acondicionado portátil gotea agua',
      it: 'Il mio condizionatore portatile perde acqua',
      nl: 'Mijn mobiele airco lekt water',
    },
  },

  // ------- ventilateurs -------
  {
    slug: 'ventilateur-connecte-ne-tourne-plus',
    categorySlug: 'ventilateurs',
    severity: 'moderate',
    query: {
      fr: 'Mon ventilateur connecté ne tourne plus',
      en: 'My smart fan no longer spins',
      de: 'Mein smarter Ventilator dreht sich nicht mehr',
      es: 'Mi ventilador inteligente ya no gira',
      it: 'Il mio ventilatore intelligente non gira più',
      nl: 'Mijn slimme ventilator draait niet meer',
    },
  },
  {
    slug: 'ventilateur-connecte-vibre',
    categorySlug: 'ventilateurs',
    severity: 'minor',
    query: {
      fr: 'Mon ventilateur connecté vibre anormalement',
      en: 'My smart fan vibrates abnormally',
      de: 'Mein smarter Ventilator vibriert ungewöhnlich stark',
      es: 'Mi ventilador inteligente vibra de forma anómala',
      it: 'Il mio ventilatore intelligente vibra in modo anomalo',
      nl: 'Mijn slimme ventilator trilt abnormaal',
    },
  },
  {
    slug: 'ventilateur-telecommande-perdue',
    categorySlug: 'ventilateurs',
    severity: 'minor',
    query: {
      fr: 'J\'ai perdu la télécommande de mon ventilateur connecté, que faire ?',
      en: 'I lost the remote for my smart fan — what can I do?',
      de: 'Ich habe die Fernbedienung meines smarten Ventilators verloren — was tun?',
      es: 'He perdido el mando de mi ventilador inteligente, ¿qué hago?',
      it: 'Ho perso il telecomando del mio ventilatore intelligente, cosa faccio?',
      nl: 'Ik ben de afstandsbediening van mijn slimme ventilator kwijt — wat nu?',
    },
  },

  // ------- chauffages-appoint -------
  {
    slug: 'chauffage-appoint-coupe',
    categorySlug: 'chauffages-appoint',
    severity: 'moderate',
    query: {
      fr: 'Mon chauffage d\'appoint connecté se coupe tout seul',
      en: 'My smart space heater keeps shutting itself off',
      de: 'Mein smarter Heizlüfter schaltet sich von selbst ab',
      es: 'Mi calefactor inteligente se apaga solo',
      it: 'La mia stufetta intelligente si spegne da sola',
      nl: 'Mijn slimme bijverwarming slaat vanzelf uit',
    },
  },
  {
    slug: 'chauffage-appoint-odeur-brulee',
    categorySlug: 'chauffages-appoint',
    severity: 'critical',
    query: {
      fr: 'Mon chauffage d\'appoint dégage une odeur de brûlé',
      en: 'My space heater is giving off a burning smell',
      de: 'Mein Heizlüfter verströmt einen Brandgeruch',
      es: 'Mi calefactor desprende olor a quemado',
      it: 'La mia stufetta emette un odore di bruciato',
      nl: 'Mijn bijverwarming geeft een brandlucht af',
    },
  },
  {
    slug: 'chauffage-appoint-efficace-piece',
    categorySlug: 'chauffages-appoint',
    severity: 'minor',
    query: {
      fr: 'Pour quelle taille de pièce faut-il choisir un chauffage d\'appoint ?',
      en: 'What room size should I consider when picking a space heater?',
      de: 'Für welche Raumgröße sollte ich einen Heizlüfter wählen?',
      es: '¿Para qué tamaño de habitación hay que elegir un calefactor?',
      it: 'Per quale dimensione di stanza scegliere una stufetta?',
      nl: 'Voor welke kamergrootte moet ik een bijverwarming kiezen?',
    },
  },

  // ------- stations-meteo -------
  {
    slug: 'station-meteo-sonde-ext-hs',
    categorySlug: 'stations-meteo',
    severity: 'moderate',
    query: {
      fr: 'La sonde extérieure de ma station météo ne remonte plus les données',
      en: 'The outdoor sensor on my weather station no longer reports data',
      de: 'Der Außensensor meiner Wetterstation überträgt keine Daten mehr',
      es: 'El sensor exterior de mi estación meteorológica ya no envía datos',
      it: 'La sonda esterna della mia stazione meteo non invia più dati',
      nl: 'De buitensensor van mijn weerstation stuurt geen data meer door',
    },
  },
  {
    slug: 'station-meteo-calibration-pression',
    categorySlug: 'stations-meteo',
    severity: 'minor',
    query: {
      fr: 'Comment calibrer la pression de ma station météo connectée ?',
      en: 'How do I calibrate the pressure reading on my smart weather station?',
      de: 'Wie kalibriere ich den Luftdruck meiner smarten Wetterstation?',
      es: '¿Cómo calibrar la presión de mi estación meteorológica inteligente?',
      it: 'Come calibrare la pressione della mia stazione meteo intelligente?',
      nl: 'Hoe kalibreer ik de luchtdruk van mijn slimme weerstation?',
    },
  },
  {
    slug: 'station-meteo-ecran-clignote',
    categorySlug: 'stations-meteo',
    severity: 'minor',
    query: {
      fr: 'L\'écran de ma station météo connectée clignote',
      en: 'The display on my smart weather station keeps flickering',
      de: 'Das Display meiner smarten Wetterstation flackert',
      es: 'La pantalla de mi estación meteorológica inteligente parpadea',
      it: 'Lo schermo della mia stazione meteo intelligente lampeggia',
      nl: 'Het scherm van mijn slimme weerstation knippert',
    },
  },

  // ------- diffuseurs -------
  {
    slug: 'diffuseur-ne-vaporise-plus',
    categorySlug: 'diffuseurs',
    severity: 'moderate',
    query: {
      fr: 'Mon diffuseur d\'huiles essentielles ne vaporise plus',
      en: 'My essential-oil diffuser no longer mists anything',
      de: 'Mein Aromadiffuser gibt keinen Nebel mehr ab',
      es: 'Mi difusor de aceites esenciales ya no vaporiza',
      it: 'Il mio diffusore di oli essenziali non nebulizza più',
      nl: 'Mijn aromadiffuser verneveld niets meer',
    },
  },
  {
    slug: 'diffuseur-voyant-eteint',
    categorySlug: 'diffuseurs',
    severity: 'minor',
    query: {
      fr: 'Le voyant LED de mon diffuseur reste éteint',
      en: 'The LED indicator on my diffuser stays off',
      de: 'Die LED-Anzeige meines Aromadiffusers bleibt aus',
      es: 'El indicador LED de mi difusor permanece apagado',
      it: 'La spia LED del mio diffusore resta spenta',
      nl: 'De LED-indicator van mijn diffuser blijft uit',
    },
  },
  {
    slug: 'diffuseur-nettoyage',
    categorySlug: 'diffuseurs',
    severity: 'minor',
    query: {
      fr: 'Comment nettoyer un diffuseur d\'huiles essentielles sans l\'abîmer ?',
      en: 'How do I clean an essential-oil diffuser without damaging it?',
      de: 'Wie reinige ich einen Aromadiffuser, ohne ihn zu beschädigen?',
      es: '¿Cómo limpiar un difusor de aceites esenciales sin dañarlo?',
      it: 'Come pulire un diffusore di oli essenziali senza rovinarlo?',
      nl: 'Hoe maak ik een aromadiffuser schoon zonder hem te beschadigen?',
    },
  },

  // ------- reveils-lumiere -------
  {
    slug: 'reveil-lumiere-intensite-faible',
    categorySlug: 'reveils-lumiere',
    severity: 'minor',
    query: {
      fr: 'L\'intensité lumineuse de mon réveil lumière est trop faible le matin',
      en: 'The light on my wake-up light is too dim in the morning',
      de: 'Die Helligkeit meines Lichtweckers ist morgens zu schwach',
      es: 'La intensidad de luz de mi despertador de luz es demasiado baja por la mañana',
      it: 'L\'intensità luminosa della mia sveglia luminosa è troppo bassa al mattino',
      nl: 'De lichtsterkte van mijn wake-up light is te zwak in de ochtend',
    },
  },
  {
    slug: 'reveil-lumiere-alarme-ne-sonne-pas',
    categorySlug: 'reveils-lumiere',
    severity: 'moderate',
    query: {
      fr: 'L\'alarme sonore de mon réveil lumière ne sonne plus',
      en: 'The sound alarm on my wake-up light no longer goes off',
      de: 'Der Ton-Wecker meines Lichtweckers klingelt nicht mehr',
      es: 'La alarma sonora de mi despertador de luz ya no suena',
      it: 'La sveglia sonora della mia sveglia luminosa non suona più',
      nl: 'Het geluidsalarm van mijn wake-up light gaat niet meer af',
    },
  },
  {
    slug: 'reveil-lumiere-horloge-derive',
    categorySlug: 'reveils-lumiere',
    severity: 'minor',
    query: {
      fr: 'L\'horloge de mon réveil lumière dérive de plusieurs minutes par semaine',
      en: 'The clock on my wake-up light drifts by several minutes each week',
      de: 'Die Uhr meines Lichtweckers geht pro Woche um mehrere Minuten nach',
      es: 'El reloj de mi despertador de luz se adelanta o atrasa varios minutos por semana',
      it: 'L\'orologio della mia sveglia luminosa si sfalsa di diversi minuti ogni settimana',
      nl: 'De klok van mijn wake-up light loopt elke week enkele minuten uit de pas',
    },
  },

  // ------- rideaux-automatises -------
  {
    slug: 'rideau-auto-arrete-milieu',
    categorySlug: 'rideaux-automatises',
    severity: 'moderate',
    query: {
      fr: 'Mon rideau automatisé s\'arrête en cours de course',
      en: 'My motorised curtain stops mid-travel',
      de: 'Mein automatisierter Vorhang bleibt auf halber Strecke stehen',
      es: 'Mi cortina automatizada se detiene a mitad de recorrido',
      it: 'La mia tenda automatizzata si ferma a metà corsa',
      nl: 'Mijn gemotoriseerde gordijn stopt halverwege',
    },
  },
  {
    slug: 'rideau-auto-bruit-moteur',
    categorySlug: 'rideaux-automatises',
    severity: 'minor',
    query: {
      fr: 'Le moteur de mon rideau automatisé fait beaucoup de bruit',
      en: 'The motor on my motorised curtain has become noisy',
      de: 'Der Motor meines automatisierten Vorhangs ist sehr laut geworden',
      es: 'El motor de mi cortina automatizada hace mucho ruido',
      it: 'Il motore della mia tenda automatizzata fa molto rumore',
      nl: 'De motor van mijn gemotoriseerde gordijn maakt veel lawaai',
    },
  },
  {
    slug: 'rideau-auto-reapparier',
    categorySlug: 'rideaux-automatises',
    severity: 'minor',
    query: {
      fr: 'Comment réapparier un rideau automatisé à son hub ?',
      en: 'How do I re-pair a motorised curtain with its hub?',
      de: 'Wie koppele ich einen automatisierten Vorhang erneut mit seinem Hub?',
      es: '¿Cómo volver a emparejar una cortina automatizada con su hub?',
      it: 'Come riaccoppiare una tenda automatizzata all\'hub?',
      nl: 'Hoe koppel ik een gemotoriseerd gordijn opnieuw met zijn hub?',
    },
  },

  // ===================================================================
  // Phase AAA — entretien-maison seed (8 categories × 3 = 24 problems)
  // ===================================================================

  // ------- aspirateurs-robots -------
  {
    slug: 'robot-aspirateur-se-perd',
    categorySlug: 'aspirateurs-robots',
    severity: 'moderate',
    query: {
      fr: 'Mon aspirateur robot se perd dans la maison et ne rentre pas à la base',
      en: 'My robot vacuum gets lost in the house and cannot return to base',
      de: 'Mein Saugroboter verliert sich in der Wohnung und findet nicht zurück zur Basis',
      es: 'Mi robot aspirador se pierde en la casa y no vuelve a la base',
      it: 'Il mio robot aspirapolvere si perde in casa e non torna alla base',
      nl: 'Mijn robotstofzuiger verdwaalt in huis en vindt het basisstation niet terug',
    },
  },
  {
    slug: 'robot-aspirateur-brosse-bloquee',
    categorySlug: 'aspirateurs-robots',
    severity: 'minor',
    query: {
      fr: 'La brosse principale de mon robot aspirateur est bloquée par des cheveux',
      en: 'The main brush of my robot vacuum is jammed with hair',
      de: 'Die Hauptbürste meines Saugroboters ist durch Haare blockiert',
      es: 'El cepillo principal de mi robot aspirador está bloqueado por pelos',
      it: 'La spazzola principale del mio robot aspirapolvere è bloccata dai capelli',
      nl: 'De hoofdborstel van mijn robotstofzuiger zit vast door haren',
    },
  },
  {
    slug: 'robot-aspirateur-batterie-faible',
    categorySlug: 'aspirateurs-robots',
    severity: 'moderate',
    query: {
      fr: 'La batterie de mon robot aspirateur ne tient plus une cartographie complète',
      en: 'My robot vacuum\'s battery no longer lasts a full mapping cycle',
      de: 'Der Akku meines Saugroboters hält keine komplette Kartierung mehr durch',
      es: 'La batería de mi robot aspirador ya no dura un mapeo completo',
      it: 'La batteria del mio robot aspirapolvere non regge più una mappatura completa',
      nl: 'De accu van mijn robotstofzuiger haalt geen volledige kaart meer',
    },
  },

  // ------- aspirateurs-laveurs -------
  {
    slug: 'laveur-serpilliere-seche',
    categorySlug: 'aspirateurs-laveurs',
    severity: 'minor',
    query: {
      fr: 'Mon aspirateur laveur ne mouille plus la serpillère',
      en: 'My wet-and-dry vacuum no longer wets the mop pad',
      de: 'Mein Nass-Trocken-Sauger befeuchtet das Wischpad nicht mehr',
      es: 'Mi aspirador lavador ya no humedece la mopa',
      it: 'La mia lavapavimenti aspirante non bagna più il panno',
      nl: 'Mijn nat-droogzuiger maakt de mopdoek niet meer nat',
    },
  },
  {
    slug: 'laveur-odeur-eau-sale',
    categorySlug: 'aspirateurs-laveurs',
    severity: 'moderate',
    query: {
      fr: 'Mon aspirateur laveur dégage une mauvaise odeur d\'eau sale',
      en: 'My wet-and-dry vacuum gives off a foul dirty-water smell',
      de: 'Mein Nass-Trocken-Sauger verbreitet einen Schmutzwassergeruch',
      es: 'Mi aspirador lavador desprende mal olor a agua sucia',
      it: 'La mia lavapavimenti aspirante emana cattivo odore di acqua sporca',
      nl: 'Mijn nat-droogzuiger geeft een vieze vuilwaterlucht af',
    },
  },
  {
    slug: 'laveur-rouleau-ne-tourne-plus',
    categorySlug: 'aspirateurs-laveurs',
    severity: 'moderate',
    query: {
      fr: 'Le rouleau de mon aspirateur laveur ne tourne plus',
      en: 'The roller on my wet-and-dry vacuum is no longer spinning',
      de: 'Die Walze meines Nass-Trocken-Saugers dreht sich nicht mehr',
      es: 'El rodillo de mi aspirador lavador ya no gira',
      it: 'Il rullo della mia lavapavimenti aspirante non gira più',
      nl: 'De rol van mijn nat-droogzuiger draait niet meer',
    },
  },

  // ------- laveurs-vitres -------
  {
    slug: 'laveur-vitres-tombe',
    categorySlug: 'laveurs-vitres',
    severity: 'critical',
    query: {
      fr: 'Mon robot laveur de vitres décroche et risque de tomber',
      en: 'My window-cleaning robot keeps losing grip and nearly falls',
      de: 'Mein Fensterputzroboter verliert Halt und droht herunterzufallen',
      es: 'Mi robot limpiacristales se despega y casi cae',
      it: 'Il mio robot lavavetri perde aderenza e rischia di cadere',
      nl: 'Mijn ruitenrobot verliest grip en dreigt te vallen',
    },
  },
  {
    slug: 'laveur-vitres-traces',
    categorySlug: 'laveurs-vitres',
    severity: 'minor',
    query: {
      fr: 'Mon robot laveur de vitres laisse des traces après chaque passage',
      en: 'My window-cleaning robot leaves streaks after every pass',
      de: 'Mein Fensterputzroboter hinterlässt nach jedem Durchgang Schlieren',
      es: 'Mi robot limpiacristales deja rayas después de cada pasada',
      it: 'Il mio robot lavavetri lascia aloni dopo ogni passata',
      nl: 'Mijn ruitenrobot laat strepen achter na elke beurt',
    },
  },
  {
    slug: 'laveur-vitres-bip-aspiration',
    categorySlug: 'laveurs-vitres',
    severity: 'moderate',
    query: {
      fr: 'Mon robot laveur de vitres bipe en continu et signale une aspiration faible',
      en: 'My window-cleaning robot beeps non-stop and reports low suction',
      de: 'Mein Fensterputzroboter piept dauerhaft und meldet schwachen Saugdruck',
      es: 'Mi robot limpiacristales pita sin parar y avisa de succión baja',
      it: 'Il mio robot lavavetri emette bip continui e segnala aspirazione bassa',
      nl: 'Mijn ruitenrobot piept continu en meldt te weinig zuigkracht',
    },
  },

  // ------- aspirateurs-balais -------
  {
    slug: 'aspirateur-balai-autonomie-chute',
    categorySlug: 'aspirateurs-balais',
    severity: 'moderate',
    query: {
      fr: 'L\'autonomie de mon aspirateur balai a fortement chuté',
      en: 'My cordless stick vacuum\'s runtime has dropped sharply',
      de: 'Die Laufzeit meines Akku-Stielstaubsaugers ist stark gesunken',
      es: 'La autonomía de mi aspirador escoba ha bajado mucho',
      it: 'L\'autonomia della mia scopa elettrica è crollata',
      nl: 'De looptijd van mijn steelstofzuiger is sterk gedaald',
    },
  },
  {
    slug: 'aspirateur-balai-coupe',
    categorySlug: 'aspirateurs-balais',
    severity: 'moderate',
    query: {
      fr: 'Mon aspirateur balai se coupe tout seul après quelques minutes',
      en: 'My cordless stick vacuum shuts off on its own after a few minutes',
      de: 'Mein Akku-Stielstaubsauger schaltet sich nach wenigen Minuten aus',
      es: 'Mi aspirador escoba se apaga solo tras unos minutos',
      it: 'La mia scopa elettrica si spegne da sola dopo pochi minuti',
      nl: 'Mijn steelstofzuiger slaat vanzelf af na enkele minuten',
    },
  },
  {
    slug: 'aspirateur-balai-filtre-odeur',
    categorySlug: 'aspirateurs-balais',
    severity: 'minor',
    query: {
      fr: 'Le filtre de mon aspirateur balai dégage une odeur désagréable',
      en: 'The filter on my cordless stick vacuum gives off an unpleasant smell',
      de: 'Der Filter meines Akku-Stielstaubsaugers verströmt einen unangenehmen Geruch',
      es: 'El filtro de mi aspirador escoba desprende mal olor',
      it: 'Il filtro della mia scopa elettrica emana un cattivo odore',
      nl: 'De filter van mijn steelstofzuiger verspreidt een vieze geur',
    },
  },

  // ------- nettoyeurs-vapeur -------
  {
    slug: 'nettoyeur-vapeur-fuite',
    categorySlug: 'nettoyeurs-vapeur',
    severity: 'critical',
    query: {
      fr: 'Mon nettoyeur vapeur fuit par le bouchon pendant la chauffe',
      en: 'My steam cleaner leaks from the cap while heating up',
      de: 'Mein Dampfreiniger leckt während des Aufheizens am Verschluss',
      es: 'Mi limpiador a vapor pierde agua por el tapón al calentar',
      it: 'Il mio pulitore a vapore perde dal tappo durante il riscaldamento',
      nl: 'Mijn stoomreiniger lekt bij het opwarmen via de dop',
    },
  },
  {
    slug: 'nettoyeur-vapeur-ne-projette-plus',
    categorySlug: 'nettoyeurs-vapeur',
    severity: 'moderate',
    query: {
      fr: 'Mon nettoyeur vapeur ne projette plus de vapeur malgré un réservoir plein',
      en: 'My steam cleaner no longer produces any steam despite a full tank',
      de: 'Mein Dampfreiniger stößt trotz vollem Tank keinen Dampf mehr aus',
      es: 'Mi limpiador a vapor ya no expulsa vapor aunque el depósito esté lleno',
      it: 'Il mio pulitore a vapore non emette più vapore nonostante il serbatoio pieno',
      nl: 'Mijn stoomreiniger geeft geen stoom meer ondanks een vol reservoir',
    },
  },
  {
    slug: 'nettoyeur-vapeur-detartrage',
    categorySlug: 'nettoyeurs-vapeur',
    severity: 'minor',
    query: {
      fr: 'Comment détartrer un nettoyeur vapeur qui perd en puissance ?',
      en: 'How do I descale a steam cleaner that is losing power?',
      de: 'Wie entkalke ich einen Dampfreiniger, der an Leistung verliert?',
      es: '¿Cómo descalcificar un limpiador a vapor que pierde potencia?',
      it: 'Come decalcificare un pulitore a vapore che perde potenza?',
      nl: 'Hoe ontkalk ik een stoomreiniger die aan kracht verliest?',
    },
  },

  // ------- fers-centrales-vapeur -------
  {
    slug: 'centrale-vapeur-crachote',
    categorySlug: 'fers-centrales-vapeur',
    severity: 'moderate',
    query: {
      fr: 'Ma centrale vapeur crachote de l\'eau sur le linge',
      en: 'My steam generator iron spits water onto the laundry',
      de: 'Meine Dampfbügelstation spuckt Wasser auf die Wäsche',
      es: 'Mi centro de planchado escupe agua sobre la ropa',
      it: 'La mia caldaia a vapore sputa acqua sul bucato',
      nl: 'Mijn stoomgenerator spuugt water op het wasgoed',
    },
  },
  {
    slug: 'fer-semelle-accroche',
    categorySlug: 'fers-centrales-vapeur',
    severity: 'minor',
    query: {
      fr: 'La semelle de mon fer à repasser accroche le tissu',
      en: 'The soleplate of my iron keeps snagging the fabric',
      de: 'Die Sohle meines Bügeleisens bleibt am Stoff hängen',
      es: 'La suela de mi plancha se engancha con la tela',
      it: 'La piastra del mio ferro da stiro si attacca al tessuto',
      nl: 'De zool van mijn strijkijzer blijft aan de stof plakken',
    },
  },
  {
    slug: 'centrale-vapeur-voyant-anti-calc',
    categorySlug: 'fers-centrales-vapeur',
    severity: 'minor',
    query: {
      fr: 'Le voyant anti-calcaire de ma centrale vapeur reste allumé après détartrage',
      en: 'The anti-scale light on my steam generator stays on after descaling',
      de: 'Die Entkalkungsanzeige meiner Dampfstation bleibt nach dem Entkalken an',
      es: 'El indicador antical de mi central de vapor sigue encendido tras descalcificar',
      it: 'La spia anticalcare della mia caldaia resta accesa dopo la decalcificazione',
      nl: 'Het antikalklampje van mijn stoomgenerator blijft aan na ontkalken',
    },
  },

  // ------- lave-vaisselle-connectes -------
  {
    slug: 'lave-vaisselle-ne-seche-pas',
    categorySlug: 'lave-vaisselle-connectes',
    severity: 'moderate',
    query: {
      fr: 'Mon lave-vaisselle connecté ne sèche plus la vaisselle en fin de cycle',
      en: 'My smart dishwasher no longer dries the dishes at the end of the cycle',
      de: 'Mein smarter Geschirrspüler trocknet am Zyklusende nicht mehr',
      es: 'Mi lavavajillas inteligente ya no seca la vajilla al final del ciclo',
      it: 'La mia lavastoviglie connessa non asciuga più a fine ciclo',
      nl: 'Mijn slimme vaatwasser droogt het vaatwerk niet meer aan het einde van de cyclus',
    },
  },
  {
    slug: 'lave-vaisselle-code-erreur-e15',
    categorySlug: 'lave-vaisselle-connectes',
    severity: 'critical',
    query: {
      fr: 'Mon lave-vaisselle affiche le code erreur E15 et coupe l\'arrivée d\'eau',
      en: 'My dishwasher shows error code E15 and cuts off the water supply',
      de: 'Mein Geschirrspüler zeigt den Fehlercode E15 und stoppt die Wasserzufuhr',
      es: 'Mi lavavajillas muestra el código de error E15 y corta el agua',
      it: 'La mia lavastoviglie mostra il codice errore E15 e blocca l\'acqua',
      nl: 'Mijn vaatwasser toont foutcode E15 en blokkeert de watertoevoer',
    },
  },
  {
    slug: 'lave-vaisselle-app-deconnecte',
    categorySlug: 'lave-vaisselle-connectes',
    severity: 'minor',
    query: {
      fr: 'L\'application de mon lave-vaisselle se déconnecte sans arrêt',
      en: 'The app for my smart dishwasher keeps disconnecting',
      de: 'Die App meines smarten Geschirrspülers verliert ständig die Verbindung',
      es: 'La aplicación de mi lavavajillas se desconecta constantemente',
      it: 'L\'app della mia lavastoviglie si disconnette in continuazione',
      nl: 'De app van mijn slimme vaatwasser valt steeds uit',
    },
  },

  // ------- lave-linge-connectes -------
  {
    slug: 'lave-linge-vibre-fort',
    categorySlug: 'lave-linge-connectes',
    severity: 'moderate',
    query: {
      fr: 'Mon lave-linge connecté vibre très fort pendant l\'essorage',
      en: 'My smart washing machine vibrates violently during the spin cycle',
      de: 'Meine smarte Waschmaschine vibriert im Schleudergang sehr stark',
      es: 'Mi lavadora inteligente vibra mucho durante el centrifugado',
      it: 'La mia lavatrice connessa vibra molto durante la centrifuga',
      nl: 'Mijn slimme wasmachine trilt hevig tijdens het centrifugeren',
    },
  },
  {
    slug: 'lave-linge-odeur-tambour',
    categorySlug: 'lave-linge-connectes',
    severity: 'minor',
    query: {
      fr: 'Une mauvaise odeur s\'échappe du tambour de mon lave-linge',
      en: 'A bad smell is coming from my washing machine drum',
      de: 'Aus der Trommel meiner Waschmaschine kommt ein schlechter Geruch',
      es: 'Sale mal olor del tambor de mi lavadora',
      it: 'Dal cestello della mia lavatrice esce un cattivo odore',
      nl: 'Uit de trommel van mijn wasmachine komt een vieze lucht',
    },
  },
  {
    slug: 'lave-linge-ne-essore-plus',
    categorySlug: 'lave-linge-connectes',
    severity: 'moderate',
    query: {
      fr: 'Mon lave-linge n\'essore plus et le linge reste trempé',
      en: 'My washing machine no longer spins and the laundry stays soaked',
      de: 'Meine Waschmaschine schleudert nicht mehr und die Wäsche bleibt nass',
      es: 'Mi lavadora ya no centrifuga y la ropa queda empapada',
      it: 'La mia lavatrice non centrifuga più e il bucato resta bagnato',
      nl: 'Mijn wasmachine centrifugeert niet meer en het wasgoed blijft drijfnat',
    },
  },
] as const

export function getProblem(slug: string): Problem | undefined {
  return PROBLEMS.find((p) => p.slug === slug)
}

export function getProblemsByCategory(categorySlug: string): Problem[] {
  return PROBLEMS.filter((p) => p.categorySlug === categorySlug)
}
