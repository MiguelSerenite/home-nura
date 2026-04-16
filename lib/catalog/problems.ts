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
 * (Period 14) ships entretien-maison: 8 × 3 = 24 new problems.
 * Phase BBB (Period 15) closes the sequence with outdoor-connecte:
 * 8 indexable categories × 3 = 24 new problems. Running total after
 * BBB: 171 problems × 6 locales = 1026 troubleshooting pages across
 * all 6 silos.
 *
 * Phase GGG (Period 18) densifies the two lightest silos: entretien-
 * maison and outdoor-connecte move from 3→5 problems per category,
 * matching the cuisine-connectee flagship density from Phase KK.
 * 2 × 8 categories × 2 new problems = 32 new entries, +192 URLs.
 *
 * Phase HHH (Period 19) densifies the two mid-weight silos: energie-
 * domotique (11 cats × 2 = 22 new) and securite-maison (10 × 2 = 20
 * new). +42 problems, +252 URLs. Running total: 245 × 6 = 1470 pages.
 *
 * Phase III (Period 20) densifies confort-air (10 cats × 2 = 20 new).
 * All non-flagship silos are now at 5/cat density. Running total:
 * 265 × 6 = 1590 troubleshooting pages.
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

  // ===================================================================
  // Phase BBB — outdoor-connecte seed (8 categories × 3 = 24 problems)
  // ===================================================================

  // ------- tondeuses-robots -------
  {
    slug: 'tondeuse-robot-sort-jardin',
    categorySlug: 'tondeuses-robots',
    severity: 'critical',
    query: {
      fr: 'Ma tondeuse robot franchit le fil périmétrique et sort du jardin',
      en: 'My robot mower crosses the boundary wire and leaves the garden',
      de: 'Mein Mähroboter überquert den Begrenzungsdraht und verlässt den Garten',
      es: 'Mi robot cortacésped cruza el cable perimetral y sale del jardín',
      it: 'Il mio robot tagliaerba supera il filo perimetrale ed esce dal giardino',
      nl: 'Mijn robotmaaier steekt de begrenzingsdraad over en verlaat de tuin',
    },
  },
  {
    slug: 'tondeuse-robot-lame-bloquee',
    categorySlug: 'tondeuses-robots',
    severity: 'moderate',
    query: {
      fr: 'Les lames de ma tondeuse robot se bloquent sur herbe haute',
      en: 'The blades of my robot mower keep jamming on tall grass',
      de: 'Die Messer meines Mähroboters blockieren im hohen Gras',
      es: 'Las cuchillas de mi robot cortacésped se atascan en hierba alta',
      it: 'Le lame del mio robot tagliaerba si bloccano sull\'erba alta',
      nl: 'De messen van mijn robotmaaier lopen vast in lang gras',
    },
  },
  {
    slug: 'tondeuse-robot-station-hs',
    categorySlug: 'tondeuses-robots',
    severity: 'moderate',
    query: {
      fr: 'La station de charge de ma tondeuse robot ne recharge plus',
      en: 'The charging base of my robot mower has stopped recharging',
      de: 'Die Ladestation meines Mähroboters lädt nicht mehr',
      es: 'La estación de carga de mi robot cortacésped ya no carga',
      it: 'La base di ricarica del mio robot tagliaerba non carica più',
      nl: 'Het laadstation van mijn robotmaaier laadt niet meer op',
    },
  },

  // ------- arrosage-connecte -------
  {
    slug: 'arrosage-vanne-bloquee',
    categorySlug: 'arrosage-connecte',
    severity: 'critical',
    query: {
      fr: 'La vanne de mon système d\'arrosage reste ouverte en permanence',
      en: 'The valve on my smart irrigation system is stuck in the open position',
      de: 'Das Ventil meiner smarten Bewässerung bleibt dauerhaft offen',
      es: 'La válvula de mi sistema de riego queda abierta permanentemente',
      it: 'La valvola del mio impianto di irrigazione resta aperta in continuazione',
      nl: 'De klep van mijn slimme irrigatie blijft permanent openstaan',
    },
  },
  {
    slug: 'arrosage-programmation-ignoree',
    categorySlug: 'arrosage-connecte',
    severity: 'moderate',
    query: {
      fr: 'Mon programmateur d\'arrosage ignore la programmation de l\'application',
      en: 'My irrigation controller ignores the schedule set in the app',
      de: 'Meine Bewässerungssteuerung ignoriert den Zeitplan aus der App',
      es: 'Mi programador de riego ignora la programación de la app',
      it: 'La mia centralina di irrigazione ignora la programmazione dell\'app',
      nl: 'Mijn irrigatiecomputer negeert het schema in de app',
    },
  },
  {
    slug: 'arrosage-capteur-pluie',
    categorySlug: 'arrosage-connecte',
    severity: 'minor',
    query: {
      fr: 'Mon arrosage connecté continue de fonctionner malgré le capteur de pluie',
      en: 'My smart irrigation keeps running despite the rain sensor',
      de: 'Meine smarte Bewässerung läuft trotz Regensensor weiter',
      es: 'Mi riego conectado sigue funcionando a pesar del sensor de lluvia',
      it: 'La mia irrigazione connessa continua nonostante il sensore pioggia',
      nl: 'Mijn slimme irrigatie blijft lopen ondanks de regensensor',
    },
  },

  // ------- eclairage-exterieur -------
  {
    slug: 'eclairage-ext-solaire-ne-charge',
    categorySlug: 'eclairage-exterieur',
    severity: 'moderate',
    query: {
      fr: 'Mon éclairage extérieur solaire ne charge plus en pleine journée',
      en: 'My solar outdoor lights no longer charge even in full daylight',
      de: 'Meine Solar-Außenbeleuchtung lädt auch bei Sonnenschein nicht mehr',
      es: 'Mi iluminación exterior solar ya no carga ni a pleno día',
      it: 'La mia illuminazione esterna solare non si ricarica più in pieno giorno',
      nl: 'Mijn solar buitenverlichting laadt overdag niet meer op',
    },
  },
  {
    slug: 'eclairage-ext-detecteur-declenche',
    categorySlug: 'eclairage-exterieur',
    severity: 'minor',
    query: {
      fr: 'Mon éclairage extérieur avec détecteur se déclenche sans raison la nuit',
      en: 'My motion-sensor outdoor light keeps turning on at night for no reason',
      de: 'Meine Bewegungsmelder-Außenleuchte schaltet sich nachts grundlos ein',
      es: 'Mi luz exterior con detector se enciende sola por la noche',
      it: 'La mia luce esterna con sensore si accende di notte senza motivo',
      nl: 'Mijn buitenlamp met sensor gaat \'s nachts zomaar aan',
    },
  },
  {
    slug: 'eclairage-ext-infiltration-eau',
    categorySlug: 'eclairage-exterieur',
    severity: 'critical',
    query: {
      fr: 'De l\'eau s\'infiltre dans mon luminaire extérieur connecté',
      en: 'Water is leaking into my smart outdoor light fixture',
      de: 'In meine smarte Außenleuchte dringt Wasser ein',
      es: 'Entra agua en mi luminaria exterior conectada',
      it: 'Dell\'acqua si infiltra nel mio apparecchio esterno connesso',
      nl: 'Er dringt water binnen in mijn slimme buitenverlichting',
    },
  },

  // ------- portails-garages -------
  {
    slug: 'portail-ne-se-ferme-plus',
    categorySlug: 'portails-garages',
    severity: 'critical',
    query: {
      fr: 'Mon portail motorisé ne se ferme plus complètement',
      en: 'My motorised gate no longer closes completely',
      de: 'Mein motorisiertes Tor schließt nicht mehr vollständig',
      es: 'Mi puerta motorizada ya no cierra del todo',
      it: 'Il mio cancello motorizzato non si chiude più completamente',
      nl: 'Mijn gemotoriseerde poort sluit niet meer volledig',
    },
  },
  {
    slug: 'garage-telecommande-portee',
    categorySlug: 'portails-garages',
    severity: 'minor',
    query: {
      fr: 'La télécommande de mon garage a perdu beaucoup de portée',
      en: 'My garage door remote has lost a lot of its range',
      de: 'Meine Garagentor-Fernbedienung hat deutlich an Reichweite verloren',
      es: 'El mando de mi garaje ha perdido mucho alcance',
      it: 'Il telecomando del mio garage ha perso molta portata',
      nl: 'De afstandsbediening van mijn garage heeft veel bereik verloren',
    },
  },
  {
    slug: 'portail-cellule-photo',
    categorySlug: 'portails-garages',
    severity: 'moderate',
    query: {
      fr: 'Les cellules photoélectriques de mon portail déclenchent une réouverture',
      en: 'The photocells on my gate keep triggering a reopening cycle',
      de: 'Die Lichtschranken meines Tores lösen ständig ein erneutes Öffnen aus',
      es: 'Las fotocélulas de mi puerta provocan una reapertura constante',
      it: 'Le fotocellule del mio cancello fanno riaprire il cancello di continuo',
      nl: 'De fotocellen van mijn poort activeren steeds een heropening',
    },
  },

  // ------- robots-piscine -------
  {
    slug: 'robot-piscine-ne-plonge-pas',
    categorySlug: 'robots-piscine',
    severity: 'moderate',
    query: {
      fr: 'Mon robot de piscine ne plonge plus et reste en surface',
      en: 'My pool robot no longer sinks and stays on the surface',
      de: 'Mein Poolroboter taucht nicht mehr ab und bleibt an der Oberfläche',
      es: 'Mi robot de piscina ya no se sumerge y se queda en la superficie',
      it: 'Il mio robot piscina non si immerge più e resta in superficie',
      nl: 'Mijn zwembadrobot duikt niet meer onder en blijft aan het oppervlak',
    },
  },
  {
    slug: 'robot-piscine-helice-bloquee',
    categorySlug: 'robots-piscine',
    severity: 'moderate',
    query: {
      fr: 'L\'hélice de mon robot de piscine est bloquée par des feuilles',
      en: 'The impeller on my pool robot is jammed with leaves',
      de: 'Der Propeller meines Poolroboters ist durch Laub blockiert',
      es: 'La hélice de mi robot de piscina está bloqueada por hojas',
      it: 'L\'elica del mio robot piscina è bloccata dalle foglie',
      nl: 'De impeller van mijn zwembadrobot zit vast door bladeren',
    },
  },
  {
    slug: 'robot-piscine-cable-emmele',
    categorySlug: 'robots-piscine',
    severity: 'minor',
    query: {
      fr: 'Le câble de mon robot de piscine s\'emmêle à chaque cycle',
      en: 'The cable on my pool robot gets tangled on every cycle',
      de: 'Das Kabel meines Poolroboters verheddert sich bei jedem Zyklus',
      es: 'El cable de mi robot de piscina se enreda en cada ciclo',
      it: 'Il cavo del mio robot piscina si aggroviglia a ogni ciclo',
      nl: 'De kabel van mijn zwembadrobot raakt elke cyclus in de knoop',
    },
  },

  // ------- barbecues-connectes -------
  {
    slug: 'barbecue-sonde-temperature-fausse',
    categorySlug: 'barbecues-connectes',
    severity: 'moderate',
    query: {
      fr: 'La sonde de température de mon barbecue connecté affiche une valeur fausse',
      en: 'The temperature probe on my smart grill reports a wrong value',
      de: 'Der Temperaturfühler meines smarten Grills zeigt einen falschen Wert an',
      es: 'La sonda de temperatura de mi barbacoa inteligente da un valor erróneo',
      it: 'La sonda temperatura del mio barbecue connesso mostra un valore errato',
      nl: 'De temperatuurprobe van mijn slimme barbecue geeft een verkeerde waarde',
    },
  },
  {
    slug: 'barbecue-bluetooth-perdu',
    categorySlug: 'barbecues-connectes',
    severity: 'minor',
    query: {
      fr: 'Mon barbecue connecté perd la connexion Bluetooth en pleine cuisson',
      en: 'My smart grill loses its Bluetooth connection mid-cook',
      de: 'Mein smarter Grill verliert während des Garens die Bluetooth-Verbindung',
      es: 'Mi barbacoa inteligente pierde la conexión Bluetooth a mitad de cocción',
      it: 'Il mio barbecue connesso perde il Bluetooth a metà cottura',
      nl: 'Mijn slimme barbecue verliest tijdens het grillen de Bluetooth-verbinding',
    },
  },
  {
    slug: 'barbecue-pellet-bourrage',
    categorySlug: 'barbecues-connectes',
    severity: 'moderate',
    query: {
      fr: 'Mon barbecue à pellets connecté bourre la vis d\'alimentation',
      en: 'My smart pellet grill keeps jamming the auger',
      de: 'Mein smarter Pelletgrill verstopft die Förderschnecke',
      es: 'Mi barbacoa de pellets inteligente atasca el sinfín de alimentación',
      it: 'Il mio barbecue a pellet connesso inceppa la coclea di alimentazione',
      nl: 'Mijn slimme pelletbarbecue laat de vulspiraal vastlopen',
    },
  },

  // ------- stations-recharge-outdoor -------
  {
    slug: 'station-recharge-outdoor-humide',
    categorySlug: 'stations-recharge-outdoor',
    severity: 'critical',
    query: {
      fr: 'Ma station de recharge extérieure affiche une erreur d\'humidité',
      en: 'My outdoor charging station shows a moisture error',
      de: 'Meine Outdoor-Ladestation zeigt einen Feuchtigkeitsfehler',
      es: 'Mi estación de carga exterior muestra un error de humedad',
      it: 'La mia stazione di ricarica esterna segnala un errore di umidità',
      nl: 'Mijn buitenlaadstation toont een vochtfout',
    },
  },
  {
    slug: 'station-recharge-outdoor-lente',
    categorySlug: 'stations-recharge-outdoor',
    severity: 'moderate',
    query: {
      fr: 'Ma station de recharge extérieure charge beaucoup plus lentement qu\'avant',
      en: 'My outdoor charging station is charging much slower than it used to',
      de: 'Meine Outdoor-Ladestation lädt deutlich langsamer als zuvor',
      es: 'Mi estación de carga exterior carga mucho más lento que antes',
      it: 'La mia stazione di ricarica esterna carica molto più lentamente di prima',
      nl: 'Mijn buitenlaadstation laadt veel trager dan vroeger',
    },
  },
  {
    slug: 'station-recharge-outdoor-prise-lache',
    categorySlug: 'stations-recharge-outdoor',
    severity: 'minor',
    query: {
      fr: 'La prise de ma station de recharge extérieure est devenue lâche',
      en: 'The socket on my outdoor charging station has become loose',
      de: 'Die Steckdose meiner Outdoor-Ladestation sitzt locker',
      es: 'El enchufe de mi estación de carga exterior se ha aflojado',
      it: 'La presa della mia stazione di ricarica esterna si è allentata',
      nl: 'Het stopcontact van mijn buitenlaadstation zit los',
    },
  },

  // ------- alarmes-exterieures -------
  {
    slug: 'alarme-ext-fausses-alertes-animaux',
    categorySlug: 'alarmes-exterieures',
    severity: 'moderate',
    query: {
      fr: 'Mon alarme extérieure se déclenche à cause des animaux du jardin',
      en: 'My outdoor alarm keeps going off because of garden wildlife',
      de: 'Mein Außenalarm löst wegen Tieren im Garten aus',
      es: 'Mi alarma exterior se dispara por los animales del jardín',
      it: 'Il mio allarme esterno suona per gli animali del giardino',
      nl: 'Mijn buitenalarm gaat af door dieren in de tuin',
    },
  },
  {
    slug: 'alarme-ext-batterie-vide',
    categorySlug: 'alarmes-exterieures',
    severity: 'critical',
    query: {
      fr: 'La batterie de mon alarme extérieure se vide en quelques jours',
      en: 'The battery on my outdoor alarm runs flat within days',
      de: 'Der Akku meines Außenalarms ist innerhalb weniger Tage leer',
      es: 'La batería de mi alarma exterior se agota en unos días',
      it: 'La batteria del mio allarme esterno si scarica in pochi giorni',
      nl: 'De accu van mijn buitenalarm is binnen enkele dagen leeg',
    },
  },
  {
    slug: 'alarme-ext-sirene-faible',
    categorySlug: 'alarmes-exterieures',
    severity: 'moderate',
    query: {
      fr: 'La sirène de mon alarme extérieure est devenue trop faible',
      en: 'The siren on my outdoor alarm has become too quiet',
      de: 'Die Sirene meines Außenalarms ist zu leise geworden',
      es: 'La sirena de mi alarma exterior se ha vuelto demasiado débil',
      it: 'La sirena del mio allarme esterno è diventata troppo debole',
      nl: 'De sirene van mijn buitenalarm is te zwak geworden',
    },
  },

  // ===================================================================
  // Phase GGG — entretien-maison densification (8 cats × 2 = 16 new)
  // ===================================================================

  // ------- aspirateurs-robots (4th & 5th) -------
  {
    slug: 'robot-aspirateur-capteur-falaise-bloque',
    categorySlug: 'aspirateurs-robots',
    severity: 'minor',
    query: {
      fr: 'Mon aspirateur robot refuse de passer les seuils de porte à cause du capteur anti-chute',
      en: 'My robot vacuum refuses to cross door thresholds because of the cliff sensor',
      de: 'Mein Saugroboter weigert sich wegen des Absturzsensors Türschwellen zu überqueren',
      es: 'Mi robot aspirador se niega a cruzar umbrales por el sensor anticaída',
      it: 'Il mio robot aspirapolvere rifiuta di superare le soglie a causa del sensore anti-caduta',
      nl: 'Mijn robotstofzuiger weigert drempels over te steken vanwege de valsensor',
    },
  },
  {
    slug: 'robot-aspirateur-wifi-deconnexion',
    categorySlug: 'aspirateurs-robots',
    severity: 'moderate',
    query: {
      fr: 'Mon aspirateur robot se déconnecte du Wi-Fi toutes les quelques heures',
      en: 'My robot vacuum keeps disconnecting from Wi-Fi every few hours',
      de: 'Mein Saugroboter trennt sich alle paar Stunden vom WLAN',
      es: 'Mi robot aspirador se desconecta del Wi-Fi cada pocas horas',
      it: 'Il mio robot aspirapolvere si disconnette dal Wi-Fi ogni poche ore',
      nl: 'Mijn robotstofzuiger verliest elke paar uur de Wi-Fi-verbinding',
    },
  },

  // ------- aspirateurs-laveurs (4th & 5th) -------
  {
    slug: 'laveur-traces-blanches-sol',
    categorySlug: 'aspirateurs-laveurs',
    severity: 'minor',
    query: {
      fr: 'Mon aspirateur laveur laisse des traces blanches sur le carrelage après le passage',
      en: 'My wet-and-dry vacuum leaves white streaks on tiles after cleaning',
      de: 'Mein Nass-Trocken-Sauger hinterlässt weiße Streifen auf den Fliesen',
      es: 'Mi aspirador lavador deja marcas blancas en las baldosas tras pasar',
      it: 'La mia lavapavimenti aspirante lascia aloni bianchi sulle piastrelle',
      nl: 'Mijn nat-droogzuiger laat witte strepen achter op de tegels',
    },
  },
  {
    slug: 'laveur-reservoir-eau-fuit',
    categorySlug: 'aspirateurs-laveurs',
    severity: 'moderate',
    query: {
      fr: 'Le réservoir d\'eau propre de mon aspirateur laveur fuit quand il est en charge',
      en: 'The clean water tank of my wet-and-dry vacuum leaks while docked',
      de: 'Der Frischwassertank meines Nass-Trocken-Saugers leckt beim Laden',
      es: 'El depósito de agua limpia de mi aspirador lavador gotea al cargar',
      it: 'Il serbatoio dell\'acqua pulita della mia lavapavimenti perde durante la ricarica',
      nl: 'Het schoonwatertank van mijn nat-droogzuiger lekt tijdens het laden',
    },
  },

  // ------- laveurs-vitres (4th & 5th) -------
  {
    slug: 'laveur-vitres-trace-centrale',
    categorySlug: 'laveurs-vitres',
    severity: 'minor',
    query: {
      fr: 'Mon robot laveur de vitres laisse une trace au centre de la vitre à chaque passage',
      en: 'My window-cleaning robot leaves a streak in the centre of the glass every pass',
      de: 'Mein Fensterputzroboter hinterlässt bei jedem Durchgang einen Streifen in der Glasmitte',
      es: 'Mi robot limpiacristales deja una marca en el centro del cristal en cada pasada',
      it: 'Il mio robot lavavetri lascia un alone al centro del vetro a ogni passata',
      nl: 'Mijn raamreinigingsrobot laat elke keer een streep in het midden van het glas achter',
    },
  },
  {
    slug: 'laveur-vitres-ventouse-faiblit',
    categorySlug: 'laveurs-vitres',
    severity: 'critical',
    query: {
      fr: 'La ventouse de mon robot laveur de vitres perd de l\'aspiration et l\'appareil glisse',
      en: 'The suction pad on my window-cleaning robot is losing grip and the unit slides',
      de: 'Der Saugnapf meines Fensterputzroboters verliert Halt und das Gerät rutscht ab',
      es: 'La ventosa de mi robot limpiacristales pierde agarre y el aparato se desliza',
      it: 'La ventosa del mio robot lavavetri perde aderenza e il dispositivo scivola',
      nl: 'De zuignap van mijn raamrobot verliest grip en het apparaat glijdt weg',
    },
  },

  // ------- aspirateurs-balais (4th & 5th) -------
  {
    slug: 'balai-aspirateur-bruit-aigu',
    categorySlug: 'aspirateurs-balais',
    severity: 'moderate',
    query: {
      fr: 'Mon aspirateur balai émet un sifflement aigu en mode puissance maximale',
      en: 'My cordless stick vacuum makes a high-pitched whistle on max power',
      de: 'Mein Akku-Staubsauger pfeift im Maximalmodus schrill',
      es: 'Mi aspirador escoba emite un silbido agudo en potencia máxima',
      it: 'La mia scopa elettrica emette un fischio acuto in modalità massima potenza',
      nl: 'Mijn snoerloze steelstofzuiger fluit schril op maximaal vermogen',
    },
  },
  {
    slug: 'balai-aspirateur-led-clignote',
    categorySlug: 'aspirateurs-balais',
    severity: 'minor',
    query: {
      fr: 'Le voyant LED de mon aspirateur balai clignote rouge et l\'appareil ne démarre plus',
      en: 'The LED indicator on my stick vacuum flashes red and the unit will not start',
      de: 'Die LED meines Akku-Staubsaugers blinkt rot und das Gerät startet nicht mehr',
      es: 'El indicador LED de mi aspirador escoba parpadea en rojo y no arranca',
      it: 'Il LED della mia scopa elettrica lampeggia rosso e il dispositivo non si accende',
      nl: 'De LED van mijn steelstofzuiger knippert rood en het apparaat start niet meer',
    },
  },

  // ------- nettoyeurs-vapeur (4th & 5th) -------
  {
    slug: 'nettoyeur-vapeur-crachotement',
    categorySlug: 'nettoyeurs-vapeur',
    severity: 'moderate',
    query: {
      fr: 'Mon nettoyeur vapeur crache de l\'eau au lieu de la vapeur sèche',
      en: 'My steam cleaner spits water instead of dry steam',
      de: 'Mein Dampfreiniger spuckt Wasser statt Trockendampf',
      es: 'Mi limpiador a vapor escupe agua en lugar de vapor seco',
      it: 'Il mio pulitore a vapore sputa acqua al posto del vapore secco',
      nl: 'Mijn stoomreiniger spuugt water in plaats van droge stoom',
    },
  },
  {
    slug: 'nettoyeur-vapeur-calcaire-buse',
    categorySlug: 'nettoyeurs-vapeur',
    severity: 'minor',
    query: {
      fr: 'La buse de mon nettoyeur vapeur est bouchée par le calcaire',
      en: 'The nozzle on my steam cleaner is blocked by limescale',
      de: 'Die Düse meines Dampfreinigers ist durch Kalk verstopft',
      es: 'La boquilla de mi limpiador a vapor está obstruida por la cal',
      it: 'L\'ugello del mio pulitore a vapore è ostruito dal calcare',
      nl: 'De nozzle van mijn stoomreiniger zit verstopt door kalk',
    },
  },

  // ------- fers-centrales-vapeur (4th & 5th) -------
  {
    slug: 'centrale-vapeur-goutte-marron',
    categorySlug: 'fers-centrales-vapeur',
    severity: 'moderate',
    query: {
      fr: 'Ma centrale vapeur crache des gouttes marron qui tachent le linge',
      en: 'My steam generator iron spits brown drops that stain clothes',
      de: 'Meine Dampfbügelstation spritzt braune Tropfen, die Wäsche verfärben',
      es: 'Mi centro de planchado escupe gotas marrones que manchan la ropa',
      it: 'La mia caldaia a vapore sputa gocce marroni che macchiano i tessuti',
      nl: 'Mijn stoomgenerator spuugt bruine druppels die vlekken op kleding achterlaten',
    },
  },
  {
    slug: 'centrale-vapeur-semelle-colle',
    categorySlug: 'fers-centrales-vapeur',
    severity: 'minor',
    query: {
      fr: 'La semelle de ma centrale vapeur colle au tissu et laisse des traces brillantes',
      en: 'The soleplate of my steam generator iron sticks to fabric and leaves shiny marks',
      de: 'Die Sohle meiner Dampfbügelstation klebt am Stoff und hinterlässt glänzende Spuren',
      es: 'La suela de mi centro de planchado se pega a la tela y deja marcas brillantes',
      it: 'La piastra della mia caldaia a vapore si attacca al tessuto e lascia segni lucidi',
      nl: 'De zoolplaat van mijn stoomgenerator plakt aan de stof en laat glimmende afdrukken achter',
    },
  },

  // ------- lave-vaisselle-connectes (4th & 5th) -------
  {
    slug: 'lave-vaisselle-vaisselle-humide',
    categorySlug: 'lave-vaisselle-connectes',
    severity: 'minor',
    query: {
      fr: 'Mon lave-vaisselle connecté laisse la vaisselle trempée à la fin du cycle de séchage',
      en: 'My smart dishwasher leaves dishes soaking wet after the drying cycle',
      de: 'Mein vernetzter Geschirrspüler lässt das Geschirr nach dem Trocknen noch nass',
      es: 'Mi lavavajillas conectado deja la vajilla empapada tras el ciclo de secado',
      it: 'La mia lavastoviglie smart lascia i piatti bagnati dopo il ciclo di asciugatura',
      nl: 'Mijn slimme vaatwasser laat de vaat drijfnat achter na het droogprogramma',
    },
  },
  {
    slug: 'lave-vaisselle-pastille-intacte',
    categorySlug: 'lave-vaisselle-connectes',
    severity: 'moderate',
    query: {
      fr: 'La pastille de mon lave-vaisselle connecté ne se dissout pas et reste intacte',
      en: 'The detergent tablet in my smart dishwasher does not dissolve and stays intact',
      de: 'Die Spülmaschinentablette in meinem vernetzten Geschirrspüler löst sich nicht auf',
      es: 'La pastilla de mi lavavajillas conectado no se disuelve y queda intacta',
      it: 'La pastiglia della mia lavastoviglie smart non si scioglie e resta intatta',
      nl: 'De vaatwastablet in mijn slimme vaatwasser lost niet op en blijft heel',
    },
  },

  // ------- lave-linge-connectes (4th & 5th) -------
  {
    slug: 'lave-linge-vibrations-excessives',
    categorySlug: 'lave-linge-connectes',
    severity: 'moderate',
    query: {
      fr: 'Mon lave-linge connecté vibre excessivement et se déplace pendant l\'essorage',
      en: 'My smart washing machine vibrates excessively and walks during the spin cycle',
      de: 'Meine vernetzte Waschmaschine vibriert stark und wandert beim Schleudern',
      es: 'Mi lavadora conectada vibra excesivamente y se desplaza durante el centrifugado',
      it: 'La mia lavatrice smart vibra eccessivamente e si sposta durante la centrifuga',
      nl: 'Mijn slimme wasmachine trilt hevig en loopt weg tijdens het centrifugeren',
    },
  },
  {
    slug: 'lave-linge-odeur-moisi-joint',
    categorySlug: 'lave-linge-connectes',
    severity: 'minor',
    query: {
      fr: 'Le joint de hublot de mon lave-linge connecté dégage une odeur de moisi persistante',
      en: 'The door seal on my smart washing machine gives off a persistent musty smell',
      de: 'Die Türmanschette meiner vernetzten Waschmaschine riecht dauerhaft muffig',
      es: 'La goma de la puerta de mi lavadora conectada desprende un olor a humedad persistente',
      it: 'La guarnizione dell\'oblò della mia lavatrice smart emana un persistente odore di muffa',
      nl: 'De deurrubber van mijn slimme wasmachine geeft een aanhoudende muffe geur af',
    },
  },

  // ===================================================================
  // Phase GGG — outdoor-connecte densification (8 cats × 2 = 16 new)
  // ===================================================================

  // ------- tondeuses-robots (4th & 5th) -------
  {
    slug: 'tondeuse-robot-hauteur-coupe-irreguliere',
    categorySlug: 'tondeuses-robots',
    severity: 'minor',
    query: {
      fr: 'Ma tondeuse robot coupe l\'herbe de manière irrégulière avec des bandes plus hautes',
      en: 'My robot mower cuts the grass unevenly leaving higher strips',
      de: 'Mein Mähroboter mäht ungleichmäßig und lässt höhere Streifen stehen',
      es: 'Mi robot cortacésped corta el césped de forma irregular dejando franjas más altas',
      it: 'Il mio robot tagliaerba taglia l\'erba in modo irregolare lasciando strisce più alte',
      nl: 'Mijn robotmaaier maait ongelijkmatig en laat hogere stroken staan',
    },
  },
  {
    slug: 'tondeuse-robot-lame-usee-vite',
    categorySlug: 'tondeuses-robots',
    severity: 'moderate',
    query: {
      fr: 'Les lames de ma tondeuse robot s\'usent anormalement vite et l\'herbe est arrachée',
      en: 'The blades on my robot mower wear out abnormally fast and tear the grass',
      de: 'Die Klingen meines Mähroboters verschleißen ungewöhnlich schnell und reißen das Gras',
      es: 'Las cuchillas de mi robot cortacésped se desgastan anormalmente rápido y arrancan el césped',
      it: 'Le lame del mio robot tagliaerba si consumano troppo in fretta e strappano l\'erba',
      nl: 'De messen van mijn robotmaaier slijten abnormaal snel en scheuren het gras',
    },
  },

  // ------- arrosage-connecte (4th & 5th) -------
  {
    slug: 'arrosage-programmation-decalee',
    categorySlug: 'arrosage-connecte',
    severity: 'minor',
    query: {
      fr: 'Mon système d\'arrosage connecté se déclenche à la mauvaise heure malgré la programmation',
      en: 'My smart irrigation system triggers at the wrong time despite the schedule',
      de: 'Mein smartes Bewässerungssystem startet trotz Programmierung zur falschen Uhrzeit',
      es: 'Mi sistema de riego conectado se activa a la hora equivocada pese a la programación',
      it: 'Il mio sistema di irrigazione smart si attiva all\'ora sbagliata nonostante la programmazione',
      nl: 'Mijn slim irrigatiesysteem gaat op het verkeerde tijdstip aan ondanks de planning',
    },
  },
  {
    slug: 'arrosage-capteur-humidite-faux',
    categorySlug: 'arrosage-connecte',
    severity: 'moderate',
    query: {
      fr: 'Le capteur d\'humidité de mon arrosage connecté donne des valeurs aberrantes',
      en: 'The soil moisture sensor of my smart irrigation gives wildly wrong readings',
      de: 'Der Feuchtigkeitssensor meiner smarten Bewässerung liefert völlig falsche Werte',
      es: 'El sensor de humedad de mi riego conectado da valores absurdos',
      it: 'Il sensore di umidità del mio irrigatore smart fornisce valori completamente errati',
      nl: 'De vochtigheidssensor van mijn slimme irrigatie geeft compleet foute waarden',
    },
  },

  // ------- eclairage-exterieur (4th & 5th) -------
  {
    slug: 'eclairage-ext-detecteur-reste-allume',
    categorySlug: 'eclairage-exterieur',
    severity: 'minor',
    query: {
      fr: 'Mon éclairage extérieur connecté reste allumé en permanence malgré le détecteur de mouvement',
      en: 'My smart outdoor light stays on permanently despite the motion sensor',
      de: 'Meine smarte Außenbeleuchtung bleibt trotz Bewegungsmelder dauerhaft an',
      es: 'Mi iluminación exterior conectada se queda encendida pese al detector de movimiento',
      it: 'La mia illuminazione esterna smart resta accesa nonostante il sensore di movimento',
      nl: 'Mijn slimme buitenverlichting blijft continu aan ondanks de bewegingssensor',
    },
  },
  {
    slug: 'eclairage-ext-panneau-solaire-faible',
    categorySlug: 'eclairage-exterieur',
    severity: 'moderate',
    query: {
      fr: 'Le panneau solaire de mon éclairage extérieur ne charge plus assez la batterie',
      en: 'The solar panel on my outdoor light no longer charges the battery enough',
      de: 'Das Solarpanel meiner Außenlampe lädt den Akku nicht mehr ausreichend',
      es: 'El panel solar de mi iluminación exterior ya no carga suficiente la batería',
      it: 'Il pannello solare della mia lampada esterna non carica più abbastanza la batteria',
      nl: 'Het zonnepaneel van mijn buitenlamp laadt de accu niet meer genoeg op',
    },
  },

  // ------- portails-garages (4th & 5th) -------
  {
    slug: 'portail-telecommande-portee-reduite',
    categorySlug: 'portails-garages',
    severity: 'minor',
    query: {
      fr: 'La télécommande de mon portail connecté a une portée qui a fortement diminué',
      en: 'The remote for my smart gate has lost most of its operating range',
      de: 'Die Fernbedienung meines smarten Tors hat stark an Reichweite verloren',
      es: 'El mando de mi portón conectado ha perdido mucho alcance',
      it: 'Il telecomando del mio cancello smart ha perso notevolmente portata',
      nl: 'De afstandsbediening van mijn slimme poort heeft sterk aan bereik verloren',
    },
  },
  {
    slug: 'portail-moteur-force-effort',
    categorySlug: 'portails-garages',
    severity: 'critical',
    query: {
      fr: 'Le moteur de mon portail connecté force et émet un bruit de grincement métallique',
      en: 'The motor on my smart gate strains and makes a metallic grinding noise',
      de: 'Der Motor meines smarten Tors zwingt und gibt ein metallisches Schleifgeräusch ab',
      es: 'El motor de mi portón conectado fuerza y emite un ruido metálico chirriante',
      it: 'Il motore del mio cancello smart forza ed emette un rumore metallico stridente',
      nl: 'De motor van mijn slimme poort forceert en maakt een schurend metaalgeluid',
    },
  },

  // ------- robots-piscine (4th & 5th) -------
  {
    slug: 'robot-piscine-flotte-surface',
    categorySlug: 'robots-piscine',
    severity: 'moderate',
    query: {
      fr: 'Mon robot de piscine remonte à la surface et ne reste plus au fond du bassin',
      en: 'My pool robot floats to the surface and no longer stays at the bottom',
      de: 'Mein Poolroboter treibt an die Oberfläche und bleibt nicht mehr am Boden',
      es: 'Mi robot de piscina sube a la superficie y ya no se queda en el fondo',
      it: 'Il mio robot piscina sale in superficie e non resta più sul fondo',
      nl: 'Mijn zwembadrobot drijft naar het oppervlak en blijft niet meer op de bodem',
    },
  },
  {
    slug: 'robot-piscine-filtre-colmate',
    categorySlug: 'robots-piscine',
    severity: 'minor',
    query: {
      fr: 'Le filtre de mon robot de piscine se colmate en moins de dix minutes de cycle',
      en: 'The filter on my pool robot clogs within ten minutes of a cycle',
      de: 'Der Filter meines Poolroboters verstopft sich innerhalb von zehn Minuten',
      es: 'El filtro de mi robot de piscina se obstruye en menos de diez minutos de ciclo',
      it: 'Il filtro del mio robot piscina si intasa in meno di dieci minuti di ciclo',
      nl: 'Het filter van mijn zwembadrobot raakt binnen tien minuten verstopt',
    },
  },

  // ------- barbecues-connectes (4th & 5th) -------
  {
    slug: 'barbecue-flamme-irreguliere',
    categorySlug: 'barbecues-connectes',
    severity: 'moderate',
    query: {
      fr: 'La flamme de mon barbecue connecté est irrégulière et provoque des points chauds',
      en: 'The flame on my smart BBQ is uneven and causes hot spots',
      de: 'Die Flamme meines smarten Grills brennt ungleichmäßig und erzeugt Hitzeinseln',
      es: 'La llama de mi barbacoa conectada es irregular y causa puntos calientes',
      it: 'La fiamma del mio barbecue smart è irregolare e provoca punti caldi',
      nl: 'De vlam van mijn slimme barbecue brandt ongelijkmatig en veroorzaakt hete plekken',
    },
  },
  {
    slug: 'barbecue-allumage-ne-declenche-pas',
    categorySlug: 'barbecues-connectes',
    severity: 'moderate',
    query: {
      fr: 'L\'allumage électronique de mon barbecue connecté ne déclenche plus la flamme',
      en: 'The electronic ignition on my smart BBQ no longer triggers the flame',
      de: 'Die elektronische Zündung meines smarten Grills löst keine Flamme mehr aus',
      es: 'El encendido electrónico de mi barbacoa conectada ya no enciende la llama',
      it: 'L\'accensione elettronica del mio barbecue smart non innesca più la fiamma',
      nl: 'De elektronische ontsteking van mijn slimme barbecue ontsteekt de vlam niet meer',
    },
  },

  // ------- stations-recharge-outdoor (4th & 5th) -------
  {
    slug: 'station-recharge-ext-voyant-erreur',
    categorySlug: 'stations-recharge-outdoor',
    severity: 'moderate',
    query: {
      fr: 'Ma station de recharge extérieure affiche un voyant d\'erreur permanent',
      en: 'My outdoor charging station shows a permanent error indicator',
      de: 'Meine Outdoor-Ladestation zeigt eine permanente Fehleranzeige',
      es: 'Mi estación de carga exterior muestra un indicador de error permanente',
      it: 'La mia stazione di ricarica esterna mostra una spia di errore permanente',
      nl: 'Mijn buitenlaadstation toont een permanent foutsignaal',
    },
  },
  {
    slug: 'station-recharge-ext-charge-lente',
    categorySlug: 'stations-recharge-outdoor',
    severity: 'minor',
    query: {
      fr: 'Ma station de recharge extérieure met deux fois plus de temps que prévu pour charger',
      en: 'My outdoor charging station takes twice as long as expected to charge',
      de: 'Meine Outdoor-Ladestation braucht doppelt so lang zum Laden wie angegeben',
      es: 'Mi estación de carga exterior tarda el doble de lo previsto en cargar',
      it: 'La mia stazione di ricarica esterna impiega il doppio del tempo previsto',
      nl: 'Mijn buitenlaadstation doet er twee keer zo lang over als verwacht',
    },
  },

  // ------- alarmes-exterieures (4th & 5th) -------
  {
    slug: 'alarme-ext-connexion-hub-perdue',
    categorySlug: 'alarmes-exterieures',
    severity: 'moderate',
    query: {
      fr: 'Mon alarme extérieure perd la connexion avec le hub domotique toutes les nuits',
      en: 'My outdoor alarm loses its connection to the smart home hub every night',
      de: 'Mein Außenalarm verliert jede Nacht die Verbindung zum Smart-Home-Hub',
      es: 'Mi alarma exterior pierde la conexión con el hub domótico todas las noches',
      it: 'Il mio allarme esterno perde ogni notte la connessione con l\'hub domotico',
      nl: 'Mijn buitenalarm verliest elke nacht de verbinding met de domotica-hub',
    },
  },
  {
    slug: 'alarme-ext-fausse-alerte-vent',
    categorySlug: 'alarmes-exterieures',
    severity: 'minor',
    query: {
      fr: 'Mon alarme extérieure se déclenche en fausse alerte dès que le vent souffle fort',
      en: 'My outdoor alarm triggers a false alert whenever the wind picks up',
      de: 'Mein Außenalarm löst bei starkem Wind ständig Fehlalarme aus',
      es: 'Mi alarma exterior se dispara en falsa alerta cada vez que sopla fuerte el viento',
      it: 'Il mio allarme esterno scatta in falso allarme ogni volta che tira forte vento',
      nl: 'Mijn buitenalarm gaat af als vals alarm zodra het hard waait',
    },
  },

  // ===================================================================
  // Phase HHH — energie-domotique densification (11 cats × 2 = 22 new)
  // ===================================================================

  // ------- thermostats (4th & 5th) -------
  {
    slug: 'thermostat-ecran-fige',
    categorySlug: 'thermostats',
    severity: 'moderate',
    query: {
      fr: 'L\'écran de mon thermostat connecté est figé et ne réagit plus au toucher',
      en: 'The screen on my smart thermostat is frozen and no longer responds to touch',
      de: 'Das Display meines smarten Thermostats ist eingefroren und reagiert nicht mehr auf Berührung',
      es: 'La pantalla de mi termostato conectado se ha quedado congelada y no responde al tacto',
      it: 'Lo schermo del mio termostato smart è bloccato e non risponde più al tocco',
      nl: 'Het scherm van mijn slimme thermostaat is bevroren en reageert niet meer op aanraking',
    },
  },
  {
    slug: 'thermostat-chauffage-coupe-nuit',
    categorySlug: 'thermostats',
    severity: 'minor',
    query: {
      fr: 'Mon thermostat connecté coupe le chauffage la nuit malgré le programme nocturne',
      en: 'My smart thermostat cuts heating at night despite the night schedule',
      de: 'Mein smartes Thermostat schaltet nachts die Heizung ab trotz Nachtprogramm',
      es: 'Mi termostato conectado corta la calefacción por la noche pese al programa nocturno',
      it: 'Il mio termostato smart spegne il riscaldamento di notte nonostante il programma notturno',
      nl: 'Mijn slimme thermostaat schakelt \'s nachts de verwarming uit ondanks het nachtprogramma',
    },
  },

  // ------- compteurs-energie (4th & 5th) -------
  {
    slug: 'compteur-pics-consommation-fantome',
    categorySlug: 'compteurs-energie',
    severity: 'minor',
    query: {
      fr: 'Mon compteur d\'énergie connecté affiche des pics de consommation fantômes la nuit',
      en: 'My smart energy monitor shows phantom consumption spikes at night',
      de: 'Mein smarter Energiezähler zeigt nachts Phantomverbrauchsspitzen an',
      es: 'Mi contador de energía conectado muestra picos fantasma de consumo por la noche',
      it: 'Il mio contatore smart mostra picchi fantasma di consumo durante la notte',
      nl: 'Mijn slimme energiemeter toont \'s nachts fantoompieken in het verbruik',
    },
  },
  {
    slug: 'compteur-historique-efface',
    categorySlug: 'compteurs-energie',
    severity: 'moderate',
    query: {
      fr: 'L\'historique de consommation de mon compteur connecté s\'efface après chaque mise à jour',
      en: 'The consumption history on my smart meter erases after every firmware update',
      de: 'Der Verbrauchsverlauf meines smarten Zählers wird nach jedem Update gelöscht',
      es: 'El historial de consumo de mi contador conectado se borra tras cada actualización',
      it: 'Lo storico dei consumi del mio contatore smart si cancella dopo ogni aggiornamento',
      nl: 'De verbruikshistorie van mijn slimme meter wist zich na elke firmware-update',
    },
  },

  // ------- solaire-balcon (4th & 5th) -------
  {
    slug: 'solaire-balcon-micro-onduleur-bip',
    categorySlug: 'solaire-balcon',
    severity: 'minor',
    query: {
      fr: 'Le micro-onduleur de mon kit solaire de balcon émet un bip continu',
      en: 'The micro-inverter on my balcony solar kit emits a continuous beep',
      de: 'Der Mikrowechselrichter meines Balkonkraftwerks piept ununterbrochen',
      es: 'El micro-inversor de mi kit solar de balcón emite un pitido continuo',
      it: 'Il micro-inverter del mio kit solare da balcone emette un bip continuo',
      nl: 'De micro-omvormer van mijn balkonzonnepaneel piept continu',
    },
  },
  {
    slug: 'solaire-balcon-app-zero-watt',
    categorySlug: 'solaire-balcon',
    severity: 'moderate',
    query: {
      fr: 'L\'application de mon kit solaire de balcon affiche 0 W malgré le plein soleil',
      en: 'The app for my balcony solar kit reads 0 W despite full sunshine',
      de: 'Die App meines Balkonkraftwerks zeigt trotz vollem Sonnenschein 0 W an',
      es: 'La app de mi kit solar de balcón muestra 0 W pese al pleno sol',
      it: 'L\'app del mio kit solare da balcone segna 0 W nonostante il pieno sole',
      nl: 'De app van mijn balkonzonnepaneel toont 0 W ondanks volle zon',
    },
  },

  // ------- batteries-domestiques (4th & 5th) -------
  {
    slug: 'batterie-domestique-ventilateur-bruyant',
    categorySlug: 'batteries-domestiques',
    severity: 'minor',
    query: {
      fr: 'Le ventilateur de ma batterie domestique tourne bruyamment même à charge faible',
      en: 'The fan on my home battery runs noisily even at low charge',
      de: 'Der Lüfter meines Heimspeichers läuft auch bei niedriger Ladung laut',
      es: 'El ventilador de mi batería doméstica funciona ruidosamente incluso a baja carga',
      it: 'La ventola della mia batteria domestica funziona rumorosamente anche a bassa carica',
      nl: 'De ventilator van mijn thuisbatterij draait luidruchtig zelfs bij lage lading',
    },
  },
  {
    slug: 'batterie-domestique-pas-injection',
    categorySlug: 'batteries-domestiques',
    severity: 'moderate',
    query: {
      fr: 'Ma batterie domestique ne réinjecte pas l\'énergie stockée dans le réseau de la maison',
      en: 'My home battery does not feed stored energy back into the house grid',
      de: 'Mein Heimspeicher speist die gespeicherte Energie nicht ins Hausnetz zurück',
      es: 'Mi batería doméstica no reinyecta la energía almacenada en la red de la casa',
      it: 'La mia batteria domestica non reimmette l\'energia immagazzinata nella rete di casa',
      nl: 'Mijn thuisbatterij voert de opgeslagen energie niet terug naar het huisnet',
    },
  },

  // ------- eclairage-connecte (4th & 5th) -------
  {
    slug: 'eclairage-retard-allumage',
    categorySlug: 'eclairage-connecte',
    severity: 'minor',
    query: {
      fr: 'Mes ampoules connectées mettent plusieurs secondes à s\'allumer après la commande',
      en: 'My smart bulbs take several seconds to turn on after the command',
      de: 'Meine smarten Glühbirnen brauchen nach dem Befehl mehrere Sekunden zum Einschalten',
      es: 'Mis bombillas conectadas tardan varios segundos en encenderse tras la orden',
      it: 'Le mie lampadine smart impiegano diversi secondi ad accendersi dopo il comando',
      nl: 'Mijn slimme lampen doen er seconden over om aan te gaan na het commando',
    },
  },
  {
    slug: 'eclairage-scene-ne-fonctionne-plus',
    categorySlug: 'eclairage-connecte',
    severity: 'moderate',
    query: {
      fr: 'Les scènes d\'éclairage enregistrées sur mon app ne se déclenchent plus',
      en: 'The lighting scenes saved in my app no longer trigger',
      de: 'Die in meiner App gespeicherten Lichtszenen lösen nicht mehr aus',
      es: 'Las escenas de iluminación guardadas en mi app ya no se activan',
      it: 'Le scene di illuminazione salvate nella mia app non si attivano più',
      nl: 'De verlichtingsscènes opgeslagen in mijn app worden niet meer geactiveerd',
    },
  },

  // ------- interrupteurs (4th & 5th) -------
  {
    slug: 'interrupteur-delai-reponse',
    categorySlug: 'interrupteurs',
    severity: 'minor',
    query: {
      fr: 'Mon interrupteur connecté a un délai de réponse de deux à trois secondes',
      en: 'My smart switch has a two-to-three-second response delay',
      de: 'Mein smarter Schalter hat eine Reaktionsverzögerung von zwei bis drei Sekunden',
      es: 'Mi interruptor conectado tiene un retraso de respuesta de dos a tres segundos',
      it: 'Il mio interruttore smart ha un ritardo di risposta di due-tre secondi',
      nl: 'Mijn slimme schakelaar heeft een reactievertraging van twee tot drie seconden',
    },
  },
  {
    slug: 'interrupteur-reset-coupure-courant',
    categorySlug: 'interrupteurs',
    severity: 'moderate',
    query: {
      fr: 'Mon interrupteur connecté se réinitialise à chaque coupure de courant',
      en: 'My smart switch resets to factory defaults after every power cut',
      de: 'Mein smarter Schalter setzt sich bei jedem Stromausfall auf Werkseinstellungen zurück',
      es: 'Mi interruptor conectado se restablece de fábrica tras cada corte de luz',
      it: 'Il mio interruttore smart si resetta alle impostazioni di fabbrica a ogni blackout',
      nl: 'Mijn slimme schakelaar reset naar fabrieksinstellingen bij elke stroomonderbreking',
    },
  },

  // ------- volets-stores (4th & 5th) -------
  {
    slug: 'volet-course-change-seul',
    categorySlug: 'volets-stores',
    severity: 'minor',
    query: {
      fr: 'Mon volet connecté modifie ses fins de course tout seul après quelques semaines',
      en: 'My smart shutter changes its travel limits on its own after a few weeks',
      de: 'Mein smarter Rollladen ändert nach ein paar Wochen seine Endpunkte von allein',
      es: 'Mi persiana conectada cambia los topes de recorrido por sí sola tras unas semanas',
      it: 'La mia tapparella smart modifica i finecorsa da sola dopo qualche settimana',
      nl: 'Mijn slim rolluik wijzigt na een paar weken zelf de eindposities',
    },
  },
  {
    slug: 'volet-bruit-vibration-fermeture',
    categorySlug: 'volets-stores',
    severity: 'moderate',
    query: {
      fr: 'Mon volet connecté vibre et fait un bruit anormal lors de la fermeture',
      en: 'My smart shutter vibrates and makes an abnormal noise when closing',
      de: 'Mein smarter Rollladen vibriert und macht beim Schließen ein ungewöhnliches Geräusch',
      es: 'Mi persiana conectada vibra y hace un ruido anormal al cerrarse',
      it: 'La mia tapparella smart vibra e fa un rumore anomalo alla chiusura',
      nl: 'Mijn slim rolluik trilt en maakt een abnormaal geluid bij het sluiten',
    },
  },

  // ------- capteurs-qualite-air (4th & 5th) -------
  {
    slug: 'capteur-air-co2-toujours-eleve',
    categorySlug: 'capteurs-qualite-air',
    severity: 'minor',
    query: {
      fr: 'Mon capteur de qualité d\'air affiche un taux de CO2 toujours élevé même fenêtres ouvertes',
      en: 'My air quality sensor shows constantly high CO2 levels even with windows open',
      de: 'Mein Luftqualitätssensor zeigt selbst bei offenen Fenstern dauerhaft hohe CO2-Werte',
      es: 'Mi sensor de calidad del aire muestra un CO2 siempre alto incluso con ventanas abiertas',
      it: 'Il mio sensore di qualità dell\'aria mostra CO2 sempre alto anche a finestre aperte',
      nl: 'Mijn luchtkwaliteitssensor toont constant hoog CO2 zelfs met open ramen',
    },
  },
  {
    slug: 'capteur-air-historique-incomplet',
    categorySlug: 'capteurs-qualite-air',
    severity: 'moderate',
    query: {
      fr: 'L\'historique de mesures de mon capteur d\'air connecté présente des trous de données',
      en: 'The measurement history on my smart air sensor has data gaps',
      de: 'Der Messverlauf meines smarten Luftsensors weist Datenlücken auf',
      es: 'El historial de mediciones de mi sensor de aire conectado tiene huecos de datos',
      it: 'Lo storico delle misurazioni del mio sensore d\'aria smart presenta lacune nei dati',
      nl: 'De meetgeschiedenis van mijn slimme luchtsensor vertoont datagaten',
    },
  },

  // ------- detecteurs-fuite-eau (4th & 5th) -------
  {
    slug: 'detecteur-fuite-sirene-muette',
    categorySlug: 'detecteurs-fuite-eau',
    severity: 'critical',
    query: {
      fr: 'Mon détecteur de fuite d\'eau ne déclenche plus l\'alerte sonore malgré la présence d\'eau',
      en: 'My water leak detector no longer triggers the audible alarm despite water being present',
      de: 'Mein Wasserlecksensor löst trotz Wasser keinen akustischen Alarm mehr aus',
      es: 'Mi detector de fugas de agua ya no activa la alerta sonora pese a la presencia de agua',
      it: 'Il mio rilevatore di perdite d\'acqua non attiva più l\'allarme acustico nonostante l\'acqua',
      nl: 'Mijn waterlekkagesensor activeert het geluidssignaal niet meer ondanks de aanwezigheid van water',
    },
  },
  {
    slug: 'detecteur-fuite-notification-retard',
    categorySlug: 'detecteurs-fuite-eau',
    severity: 'moderate',
    query: {
      fr: 'Mon détecteur de fuite d\'eau envoie la notification avec plusieurs minutes de retard',
      en: 'My water leak detector sends the notification with a delay of several minutes',
      de: 'Mein Wasserlecksensor sendet die Benachrichtigung mit mehreren Minuten Verzögerung',
      es: 'Mi detector de fugas de agua envía la notificación con varios minutos de retraso',
      it: 'Il mio rilevatore di perdite d\'acqua invia la notifica con diversi minuti di ritardo',
      nl: 'Mijn waterlekkagesensor stuurt de melding pas na meerdere minuten vertraging',
    },
  },

  // ------- hubs-domotique (4th & 5th) -------
  {
    slug: 'hub-zigbee-portee-faible',
    categorySlug: 'hubs-domotique',
    severity: 'minor',
    query: {
      fr: 'Mon hub domotique ne voit pas les appareils Zigbee au-delà de cinq mètres',
      en: 'My smart home hub cannot see Zigbee devices beyond five metres',
      de: 'Mein Smart-Home-Hub sieht Zigbee-Geräte nicht weiter als fünf Meter',
      es: 'Mi hub domótico no detecta los dispositivos Zigbee a más de cinco metros',
      it: 'Il mio hub domotico non rileva i dispositivi Zigbee oltre cinque metri',
      nl: 'Mijn domotica-hub ziet Zigbee-apparaten niet verder dan vijf meter',
    },
  },
  {
    slug: 'hub-automatisation-ne-se-lance-pas',
    categorySlug: 'hubs-domotique',
    severity: 'moderate',
    query: {
      fr: 'Les automatisations programmées sur mon hub domotique ne se déclenchent plus',
      en: 'The automations scheduled on my smart home hub no longer trigger',
      de: 'Die auf meinem Smart-Home-Hub geplanten Automatisierungen lösen nicht mehr aus',
      es: 'Las automatizaciones programadas en mi hub domótico ya no se ejecutan',
      it: 'Le automazioni programmate sul mio hub domotico non si attivano più',
      nl: 'De geprogrammeerde automatiseringen op mijn domotica-hub worden niet meer geactiveerd',
    },
  },

  // ------- bornes-recharge-ve (4th & 5th) -------
  {
    slug: 'borne-ve-disjoncteur-saute',
    categorySlug: 'bornes-recharge-ve',
    severity: 'critical',
    query: {
      fr: 'Ma borne de recharge fait disjoncter le tableau électrique dès le branchement',
      en: 'My EV charging station trips the circuit breaker as soon as it is plugged in',
      de: 'Meine Ladestation löst sofort den Sicherungskasten aus wenn sie angeschlossen wird',
      es: 'Mi punto de carga hace saltar el diferencial en cuanto se conecta',
      it: 'La mia wallbox fa scattare il quadro elettrico appena viene collegata',
      nl: 'Mijn laadpaal laat de zekeringkast springen zodra hij wordt aangesloten',
    },
  },
  {
    slug: 'borne-ve-app-session-fantome',
    categorySlug: 'bornes-recharge-ve',
    severity: 'minor',
    query: {
      fr: 'L\'application de ma borne de recharge affiche des sessions de charge fantômes',
      en: 'The app for my EV charging station shows phantom charging sessions',
      de: 'Die App meiner Ladestation zeigt Phantomladevorgänge an',
      es: 'La app de mi punto de carga muestra sesiones de carga fantasma',
      it: 'L\'app della mia wallbox mostra sessioni di ricarica fantasma',
      nl: 'De app van mijn laadpaal toont fantoomlaadbeurten',
    },
  },

  // ===================================================================
  // Phase HHH — securite-maison densification (10 cats × 2 = 20 new)
  // ===================================================================

  // ------- sonnettes-video (4th & 5th) -------
  {
    slug: 'sonnette-micro-gresille',
    categorySlug: 'sonnettes-video',
    severity: 'minor',
    query: {
      fr: 'Le micro de ma sonnette vidéo grésille et rend la conversation inaudible',
      en: 'The microphone on my video doorbell crackles making conversation inaudible',
      de: 'Das Mikrofon meiner Video-Türklingel knistert und macht Gespräche unhörbar',
      es: 'El micrófono de mi videoportero crepita y la conversación es inaudible',
      it: 'Il microfono del mio videocitofono gracchia e rende la conversazione inudibile',
      nl: 'De microfoon van mijn videodeurbel kraakt waardoor het gesprek onhoorbaar is',
    },
  },
  {
    slug: 'sonnette-champ-vision-reduit',
    categorySlug: 'sonnettes-video',
    severity: 'moderate',
    query: {
      fr: 'Le champ de vision de ma sonnette vidéo ne couvre pas l\'intégralité du palier',
      en: 'The field of view on my video doorbell does not cover the entire landing',
      de: 'Das Sichtfeld meiner Video-Türklingel erfasst nicht den gesamten Flur',
      es: 'El campo de visión de mi videoportero no cubre todo el rellano',
      it: 'Il campo visivo del mio videocitofono non copre tutto il pianerottolo',
      nl: 'Het gezichtsveld van mijn videodeurbel dekt niet de hele overloop',
    },
  },

  // ------- cameras-interieur (4th & 5th) -------
  {
    slug: 'camera-int-led-infrarouge-reflet',
    categorySlug: 'cameras-interieur',
    severity: 'minor',
    query: {
      fr: 'Les LED infrarouges de ma caméra intérieure provoquent un reflet blanc sur la vitre',
      en: 'The infrared LEDs on my indoor camera cause a white reflection on the window',
      de: 'Die Infrarot-LEDs meiner Innenkamera erzeugen einen weißen Reflex auf der Scheibe',
      es: 'Los LED infrarrojos de mi cámara interior provocan un reflejo blanco en el cristal',
      it: 'I LED infrarossi della mia telecamera interna causano un riflesso bianco sul vetro',
      nl: 'De infrarood-LED\'s van mijn binnencamera veroorzaken een witte reflectie op het raam',
    },
  },
  {
    slug: 'camera-int-enregistrement-boucle-courte',
    categorySlug: 'cameras-interieur',
    severity: 'moderate',
    query: {
      fr: 'Ma caméra intérieure n\'enregistre que les dix dernières minutes en boucle',
      en: 'My indoor camera only records the last ten minutes on a rolling loop',
      de: 'Meine Innenkamera zeichnet nur die letzten zehn Minuten in Dauerschleife auf',
      es: 'Mi cámara interior solo graba los últimos diez minutos en bucle',
      it: 'La mia telecamera interna registra solo gli ultimi dieci minuti in loop',
      nl: 'Mijn binnencamera neemt slechts de laatste tien minuten op in een lus',
    },
  },

  // ------- cameras-exterieur (4th & 5th) -------
  {
    slug: 'camera-ext-buee-objectif',
    categorySlug: 'cameras-exterieur',
    severity: 'minor',
    query: {
      fr: 'L\'objectif de ma caméra extérieure est embué le matin et l\'image est floue',
      en: 'The lens on my outdoor camera fogs up in the morning leaving a blurry image',
      de: 'Das Objektiv meiner Außenkamera beschlägt morgens und das Bild ist unscharf',
      es: 'El objetivo de mi cámara exterior se empaña por la mañana y la imagen es borrosa',
      it: 'L\'obiettivo della mia telecamera esterna si appanna al mattino e l\'immagine è sfocata',
      nl: 'De lens van mijn buitencamera beslaat \'s ochtends en het beeld is wazig',
    },
  },
  {
    slug: 'camera-ext-alerte-retardee',
    categorySlug: 'cameras-exterieur',
    severity: 'moderate',
    query: {
      fr: 'Ma caméra extérieure envoie l\'alerte de mouvement avec trente secondes de retard',
      en: 'My outdoor camera sends the motion alert thirty seconds late',
      de: 'Meine Außenkamera sendet die Bewegungswarnung mit dreißig Sekunden Verzögerung',
      es: 'Mi cámara exterior envía la alerta de movimiento con treinta segundos de retraso',
      it: 'La mia telecamera esterna invia l\'avviso di movimento con trenta secondi di ritardo',
      nl: 'Mijn buitencamera stuurt de bewegingsmelding dertig seconden te laat',
    },
  },

  // ------- serrures-connectees (4th & 5th) -------
  {
    slug: 'serrure-bruit-moteur-anormal',
    categorySlug: 'serrures-connectees',
    severity: 'moderate',
    query: {
      fr: 'Ma serrure connectée émet un bruit de moteur anormal à chaque ouverture',
      en: 'My smart lock makes an abnormal motor noise every time it opens',
      de: 'Mein smartes Schloss macht bei jeder Öffnung ein ungewöhnliches Motorgeräusch',
      es: 'Mi cerradura inteligente emite un ruido anormal de motor en cada apertura',
      it: 'La mia serratura smart emette un rumore anomalo del motore a ogni apertura',
      nl: 'Mijn slim slot maakt bij elke opening een abnormaal motorgeluid',
    },
  },
  {
    slug: 'serrure-auto-lock-ne-verrouille-pas',
    categorySlug: 'serrures-connectees',
    severity: 'critical',
    query: {
      fr: 'La fonction de verrouillage automatique de ma serrure connectée ne se déclenche plus',
      en: 'The auto-lock feature on my smart lock no longer engages',
      de: 'Die automatische Verriegelungsfunktion meines smarten Schlosses greift nicht mehr',
      es: 'La función de cierre automático de mi cerradura inteligente ya no se activa',
      it: 'La funzione di blocco automatico della mia serratura smart non si attiva più',
      nl: 'De automatische vergrendelingsfunctie van mijn slim slot werkt niet meer',
    },
  },

  // ------- alarmes (4th & 5th) -------
  {
    slug: 'alarme-delai-armement-trop-court',
    categorySlug: 'alarmes',
    severity: 'minor',
    query: {
      fr: 'Le délai d\'armement de mon alarme connectée est trop court et se déclenche en sortant',
      en: 'The arming delay on my smart alarm is too short and it triggers while I leave',
      de: 'Die Aktivierungsverzögerung meiner smarten Alarmanlage ist zu kurz und löst beim Verlassen aus',
      es: 'El retardo de armado de mi alarma conectada es demasiado corto y salta al salir',
      it: 'Il ritardo di attivazione del mio allarme smart è troppo breve e scatta mentre esco',
      nl: 'De inschakelvertraging van mijn slim alarm is te kort en het gaat af terwijl ik vertrek',
    },
  },
  {
    slug: 'alarme-historique-evenements-vide',
    categorySlug: 'alarmes',
    severity: 'moderate',
    query: {
      fr: 'L\'historique des événements de mon alarme connectée s\'affiche vide depuis la dernière mise à jour',
      en: 'The event history on my smart alarm shows empty since the last update',
      de: 'Der Ereignisverlauf meiner smarten Alarmanlage ist seit dem letzten Update leer',
      es: 'El historial de eventos de mi alarma conectada aparece vacío desde la última actualización',
      it: 'Lo storico degli eventi del mio allarme smart risulta vuoto dall\'ultimo aggiornamento',
      nl: 'De gebeurtenisgeschiedenis van mijn slim alarm is leeg sinds de laatste update',
    },
  },

  // ------- detecteurs-fumee-co (4th & 5th) -------
  {
    slug: 'detecteur-fumee-test-echoue',
    categorySlug: 'detecteurs-fumee-co',
    severity: 'critical',
    query: {
      fr: 'Le test mensuel de mon détecteur de fumée connecté échoue sans message d\'erreur',
      en: 'The monthly test on my smart smoke detector fails without an error message',
      de: 'Der Monatstest meines smarten Rauchmelders schlägt ohne Fehlermeldung fehl',
      es: 'La prueba mensual de mi detector de humo conectado falla sin mensaje de error',
      it: 'Il test mensile del mio rilevatore di fumo smart fallisce senza messaggio di errore',
      nl: 'De maandelijkse test van mijn slimme rookmelder mislukt zonder foutmelding',
    },
  },
  {
    slug: 'detecteur-co-affichage-ppm-eleve',
    categorySlug: 'detecteurs-fumee-co',
    severity: 'moderate',
    query: {
      fr: 'Mon détecteur de CO connecté affiche un taux de ppm élevé alors que la chaudière est éteinte',
      en: 'My smart CO detector shows high ppm readings even though the boiler is off',
      de: 'Mein smarter CO-Melder zeigt hohe ppm-Werte an obwohl die Heizung aus ist',
      es: 'Mi detector de CO conectado muestra ppm altos aunque la caldera está apagada',
      it: 'Il mio rilevatore di CO smart mostra ppm alti anche se la caldaia è spenta',
      nl: 'Mijn slimme CO-melder toont hoge ppm-waarden terwijl de ketel uit staat',
    },
  },

  // ------- detecteurs-mouvement (4th & 5th) -------
  {
    slug: 'mouvement-detecte-zone-morte',
    categorySlug: 'detecteurs-mouvement',
    severity: 'minor',
    query: {
      fr: 'Mon détecteur de mouvement connecté a une zone morte juste en dessous de lui',
      en: 'My smart motion sensor has a dead zone directly below it',
      de: 'Mein smarter Bewegungsmelder hat eine tote Zone direkt unter sich',
      es: 'Mi detector de movimiento conectado tiene una zona muerta justo debajo',
      it: 'Il mio sensore di movimento smart ha una zona morta proprio sotto di sé',
      nl: 'Mijn slimme bewegingssensor heeft een dode zone direct eronder',
    },
  },
  {
    slug: 'mouvement-notification-doublon',
    categorySlug: 'detecteurs-mouvement',
    severity: 'minor',
    query: {
      fr: 'Mon détecteur de mouvement m\'envoie deux notifications pour chaque déclenchement',
      en: 'My motion sensor sends two notifications for every single trigger',
      de: 'Mein Bewegungsmelder sendet für jede Auslösung zwei Benachrichtigungen',
      es: 'Mi detector de movimiento me envía dos notificaciones por cada activación',
      it: 'Il mio sensore di movimento invia due notifiche per ogni singola attivazione',
      nl: 'Mijn bewegingssensor stuurt twee meldingen voor elke activering',
    },
  },

  // ------- trackers-objets (4th & 5th) -------
  {
    slug: 'tracker-localisation-imprecise',
    categorySlug: 'trackers-objets',
    severity: 'minor',
    query: {
      fr: 'Mon tracker d\'objets indique un emplacement à plusieurs centaines de mètres de la réalité',
      en: 'My object tracker shows a location hundreds of metres from the actual position',
      de: 'Mein Objekt-Tracker zeigt einen Standort mehrere hundert Meter vom tatsächlichen Ort entfernt',
      es: 'Mi rastreador de objetos indica una ubicación a cientos de metros de la realidad',
      it: 'Il mio tracker oggetti indica una posizione a centinaia di metri da quella reale',
      nl: 'Mijn objecttracker toont een locatie honderden meters van de werkelijke positie',
    },
  },
  {
    slug: 'tracker-sonnerie-trop-faible',
    categorySlug: 'trackers-objets',
    severity: 'minor',
    query: {
      fr: 'La sonnerie de localisation de mon tracker est trop faible pour l\'entendre dans une autre pièce',
      en: 'The locator ring on my tracker is too quiet to hear from another room',
      de: 'Der Ortungston meines Trackers ist zu leise um ihn in einem anderen Raum zu hören',
      es: 'El tono de localización de mi rastreador es demasiado débil para oírlo desde otra habitación',
      it: 'La suoneria di localizzazione del mio tracker è troppo debole per sentirla da un\'altra stanza',
      nl: 'De lokalisatietoon van mijn tracker is te zwak om in een andere kamer te horen',
    },
  },

  // ------- interphones (4th & 5th) -------
  {
    slug: 'interphone-video-pixelise',
    categorySlug: 'interphones',
    severity: 'minor',
    query: {
      fr: 'L\'image vidéo de mon interphone connecté est pixelisée et saccadée',
      en: 'The video feed on my smart intercom is pixelated and choppy',
      de: 'Das Videobild meiner smarten Gegensprechanlage ist verpixelt und ruckelt',
      es: 'La imagen de vídeo de mi interfono conectado está pixelada y entrecortada',
      it: 'L\'immagine video del mio citofono smart è pixelata e a scatti',
      nl: 'Het videobeeld van mijn slimme intercom is gepixeld en schokkerig',
    },
  },
  {
    slug: 'interphone-gache-ne-declenche-pas',
    categorySlug: 'interphones',
    severity: 'critical',
    query: {
      fr: 'La gâche électrique commandée par mon interphone connecté ne s\'ouvre plus à distance',
      en: 'The electric strike controlled by my smart intercom no longer opens remotely',
      de: 'Der von meiner smarten Gegensprechanlage gesteuerte Türöffner öffnet nicht mehr aus der Ferne',
      es: 'La cerradura eléctrica controlada por mi interfono conectado ya no abre a distancia',
      it: 'L\'apriporta elettrico comandato dal mio citofono smart non si apre più a distanza',
      nl: 'De elektrische deuropener bestuurd door mijn slimme intercom opent niet meer op afstand',
    },
  },

  // ------- coffres-forts-connectes (4th & 5th) -------
  {
    slug: 'coffre-fort-empreinte-non-reconnue',
    categorySlug: 'coffres-forts-connectes',
    severity: 'moderate',
    query: {
      fr: 'Le lecteur d\'empreintes de mon coffre-fort connecté ne reconnaît plus mon doigt',
      en: 'The fingerprint reader on my smart safe no longer recognises my finger',
      de: 'Der Fingerabdruckleser meines smarten Tresors erkennt meinen Finger nicht mehr',
      es: 'El lector de huellas de mi caja fuerte conectada ya no reconoce mi dedo',
      it: 'Il lettore di impronte della mia cassaforte smart non riconosce più il mio dito',
      nl: 'De vingerafdruklezer van mijn slimme kluis herkent mijn vinger niet meer',
    },
  },
  {
    slug: 'coffre-fort-charniere-grince',
    categorySlug: 'coffres-forts-connectes',
    severity: 'minor',
    query: {
      fr: 'La charnière de mon coffre-fort connecté grince et résiste à l\'ouverture',
      en: 'The hinge on my smart safe squeaks and resists opening',
      de: 'Das Scharnier meines smarten Tresors quietscht und sperrt sich beim Öffnen',
      es: 'La bisagra de mi caja fuerte conectada chirría y ofrece resistencia al abrir',
      it: 'La cerniera della mia cassaforte smart cigola e oppone resistenza all\'apertura',
      nl: 'Het scharnier van mijn slimme kluis piept en biedt weerstand bij het openen',
    },
  },

  // ===================================================================
  // Phase III — confort-air densification (10 cats × 2 = 20 new)
  // ===================================================================

  // ------- purificateurs-air (4th & 5th) -------
  {
    slug: 'purificateur-air-odeur-persiste',
    categorySlug: 'purificateurs-air',
    severity: 'minor',
    query: {
      fr: 'Mon purificateur d\'air ne supprime pas les odeurs de cuisine malgré le mode turbo',
      en: 'My air purifier does not remove cooking odours despite turbo mode',
      de: 'Mein Luftreiniger beseitigt Kochgerüche trotz Turbomodus nicht',
      es: 'Mi purificador de aire no elimina los olores de cocina pese al modo turbo',
      it: 'Il mio purificatore d\'aria non elimina gli odori di cucina nonostante la modalità turbo',
      nl: 'Mijn luchtreiniger verwijdert kookluchtjes niet ondanks de turbomodus',
    },
  },
  {
    slug: 'purificateur-air-capteur-pm25-derive',
    categorySlug: 'purificateurs-air',
    severity: 'moderate',
    query: {
      fr: 'Le capteur PM2.5 de mon purificateur d\'air affiche des valeurs qui dérivent avec le temps',
      en: 'The PM2.5 sensor on my air purifier shows readings that drift over time',
      de: 'Der PM2.5-Sensor meines Luftreinigers zeigt Werte die mit der Zeit abdriften',
      es: 'El sensor PM2.5 de mi purificador de aire muestra valores que derivan con el tiempo',
      it: 'Il sensore PM2.5 del mio purificatore d\'aria mostra valori che derivano col tempo',
      nl: 'De PM2.5-sensor van mijn luchtreiniger toont waarden die mettertijd afdrijven',
    },
  },

  // ------- humidificateurs (4th & 5th) -------
  {
    slug: 'humidificateur-flaque-sous-appareil',
    categorySlug: 'humidificateurs',
    severity: 'moderate',
    query: {
      fr: 'Mon humidificateur connecté crée une flaque d\'eau sous l\'appareil chaque nuit',
      en: 'My smart humidifier creates a puddle of water under the unit every night',
      de: 'Mein smarter Luftbefeuchter erzeugt jede Nacht eine Pfütze unter dem Gerät',
      es: 'Mi humidificador conectado crea un charco de agua debajo del aparato cada noche',
      it: 'Il mio umidificatore smart crea una pozza d\'acqua sotto l\'apparecchio ogni notte',
      nl: 'Mijn slimme luchtbevochtiger vormt elke nacht een plas water onder het apparaat',
    },
  },
  {
    slug: 'humidificateur-hygrostat-imprecis',
    categorySlug: 'humidificateurs',
    severity: 'minor',
    query: {
      fr: 'L\'hygrostat de mon humidificateur connecté affiche une humidité 15 % plus haute que la réalité',
      en: 'The hygrostat on my smart humidifier reads 15% higher humidity than reality',
      de: 'Das Hygrostat meines smarten Luftbefeuchters zeigt 15 % zu hohe Luftfeuchtigkeit an',
      es: 'El higróstato de mi humidificador conectado indica una humedad un 15 % más alta que la real',
      it: 'L\'igrostato del mio umidificatore smart indica un\'umidità del 15 % superiore alla realtà',
      nl: 'De hygrosstaat van mijn slimme luchtbevochtiger geeft 15 % te hoge luchtvochtigheid aan',
    },
  },

  // ------- deshumidificateurs (4th & 5th) -------
  {
    slug: 'deshumidificateur-givre-echangeur',
    categorySlug: 'deshumidificateurs',
    severity: 'moderate',
    query: {
      fr: 'L\'échangeur de mon déshumidificateur connecté givre et l\'appareil s\'arrête',
      en: 'The heat exchanger on my smart dehumidifier frosts over and the unit stops',
      de: 'Der Wärmetauscher meines smarten Entfeuchters vereist und das Gerät stoppt',
      es: 'El intercambiador de mi deshumidificador conectado se escarcha y el aparato se detiene',
      it: 'Lo scambiatore del mio deumidificatore smart si ghiaccia e l\'apparecchio si ferma',
      nl: 'De warmtewisselaar van mijn slimme ontvochtiger bevriest en het apparaat stopt',
    },
  },
  {
    slug: 'deshumidificateur-alarme-bac-plein-fausse',
    categorySlug: 'deshumidificateurs',
    severity: 'minor',
    query: {
      fr: 'Mon déshumidificateur connecté affiche l\'alarme bac plein alors que le bac est vide',
      en: 'My smart dehumidifier shows the full-tank alarm even though the tank is empty',
      de: 'Mein smarter Entfeuchter zeigt die Behälter-voll-Warnung obwohl der Behälter leer ist',
      es: 'Mi deshumidificador conectado muestra la alarma de depósito lleno aunque está vacío',
      it: 'Il mio deumidificatore smart mostra l\'allarme serbatoio pieno anche se è vuoto',
      nl: 'Mijn slimme ontvochtiger toont het bak-vol-alarm terwijl de bak leeg is',
    },
  },

  // ------- climatiseurs-mobiles (4th & 5th) -------
  {
    slug: 'climatiseur-mobile-compresseur-cycle-court',
    categorySlug: 'climatiseurs-mobiles',
    severity: 'moderate',
    query: {
      fr: 'Le compresseur de mon climatiseur mobile se coupe et redémarre toutes les deux minutes',
      en: 'The compressor on my portable AC cuts out and restarts every two minutes',
      de: 'Der Kompressor meiner mobilen Klimaanlage schaltet sich alle zwei Minuten ab und startet neu',
      es: 'El compresor de mi aire acondicionado portátil se corta y reinicia cada dos minutos',
      it: 'Il compressore del mio condizionatore portatile si spegne e riavvia ogni due minuti',
      nl: 'De compressor van mijn mobiele airco slaat elke twee minuten af en start opnieuw',
    },
  },
  {
    slug: 'climatiseur-mobile-telecommande-hs',
    categorySlug: 'climatiseurs-mobiles',
    severity: 'minor',
    query: {
      fr: 'La télécommande de mon climatiseur mobile connecté ne fonctionne plus du tout',
      en: 'The remote control for my smart portable AC has stopped working entirely',
      de: 'Die Fernbedienung meiner smarten mobilen Klimaanlage funktioniert überhaupt nicht mehr',
      es: 'El mando a distancia de mi aire acondicionado portátil conectado ya no funciona en absoluto',
      it: 'Il telecomando del mio condizionatore portatile smart non funziona più per niente',
      nl: 'De afstandsbediening van mijn slimme mobiele airco werkt helemaal niet meer',
    },
  },

  // ------- ventilateurs (4th & 5th) -------
  {
    slug: 'ventilateur-oscillation-bloquee',
    categorySlug: 'ventilateurs',
    severity: 'minor',
    query: {
      fr: 'La fonction d\'oscillation de mon ventilateur connecté est bloquée sur un côté',
      en: 'The oscillation function on my smart fan is stuck on one side',
      de: 'Die Schwenkfunktion meines smarten Ventilators klemmt auf einer Seite',
      es: 'La función de oscilación de mi ventilador conectado se ha quedado bloqueada a un lado',
      it: 'La funzione di oscillazione del mio ventilatore smart è bloccata da un lato',
      nl: 'De oscillatiefunctie van mijn slimme ventilator zit vast aan één kant',
    },
  },
  {
    slug: 'ventilateur-vitesse-max-bruyant',
    categorySlug: 'ventilateurs',
    severity: 'moderate',
    query: {
      fr: 'Mon ventilateur connecté émet un bourdonnement sourd en vitesse maximale',
      en: 'My smart fan produces a low hum on maximum speed',
      de: 'Mein smarter Ventilator brummt bei maximaler Geschwindigkeit tief',
      es: 'Mi ventilador conectado emite un zumbido grave a velocidad máxima',
      it: 'Il mio ventilatore smart produce un ronzio sordo alla velocità massima',
      nl: 'Mijn slimme ventilator produceert een laag gebrom op maximale snelheid',
    },
  },

  // ------- chauffages-appoint (4th & 5th) -------
  {
    slug: 'chauffage-appoint-thermostat-decale',
    categorySlug: 'chauffages-appoint',
    severity: 'minor',
    query: {
      fr: 'Mon chauffage d\'appoint connecté chauffe trois degrés au-dessus de la consigne affichée',
      en: 'My smart space heater heats three degrees above the displayed setpoint',
      de: 'Meine smarte Zusatzheizung heizt drei Grad über dem angezeigten Sollwert',
      es: 'Mi calefactor de apoyo conectado calienta tres grados por encima de la consigna',
      it: 'Il mio riscaldatore ausiliario smart scalda tre gradi sopra la temperatura impostata',
      nl: 'Mijn slimme bijverwarming verwarmt drie graden boven het ingestelde punt',
    },
  },
  {
    slug: 'chauffage-appoint-ventilateur-tourne-pas',
    categorySlug: 'chauffages-appoint',
    severity: 'critical',
    query: {
      fr: 'Le ventilateur de mon chauffage d\'appoint connecté ne tourne plus et l\'appareil surchauffe',
      en: 'The fan on my smart space heater no longer spins and the unit overheats',
      de: 'Der Lüfter meiner smarten Zusatzheizung dreht sich nicht mehr und das Gerät überhitzt',
      es: 'El ventilador de mi calefactor conectado ya no gira y el aparato se sobrecalienta',
      it: 'La ventola del mio riscaldatore smart non gira più e il dispositivo si surriscalda',
      nl: 'De ventilator van mijn slimme bijverwarming draait niet meer en het apparaat wordt oververhit',
    },
  },

  // ------- stations-meteo (4th & 5th) -------
  {
    slug: 'station-meteo-pluviometre-bouche',
    categorySlug: 'stations-meteo',
    severity: 'minor',
    query: {
      fr: 'Le pluviomètre de ma station météo connectée est bouché et n\'enregistre plus la pluie',
      en: 'The rain gauge on my smart weather station is clogged and no longer records rainfall',
      de: 'Der Regenmesser meiner smarten Wetterstation ist verstopft und zeichnet keinen Regen mehr auf',
      es: 'El pluviómetro de mi estación meteorológica conectada está obstruido y no registra la lluvia',
      it: 'Il pluviometro della mia stazione meteo smart è intasato e non registra più la pioggia',
      nl: 'De regenmeter van mijn slim weerstation is verstopt en registreert geen regen meer',
    },
  },
  {
    slug: 'station-meteo-anemometre-bloque',
    categorySlug: 'stations-meteo',
    severity: 'moderate',
    query: {
      fr: 'L\'anémomètre de ma station météo connectée est bloqué et affiche toujours 0 km/h',
      en: 'The anemometer on my smart weather station is stuck and always reads 0 km/h',
      de: 'Der Windmesser meiner smarten Wetterstation ist blockiert und zeigt immer 0 km/h',
      es: 'El anemómetro de mi estación meteorológica conectada está bloqueado y marca siempre 0 km/h',
      it: 'L\'anemometro della mia stazione meteo smart è bloccato e segna sempre 0 km/h',
      nl: 'De windmeter van mijn slim weerstation zit vast en toont altijd 0 km/u',
    },
  },

  // ------- diffuseurs (4th & 5th) -------
  {
    slug: 'diffuseur-reservoir-fuit-base',
    categorySlug: 'diffuseurs',
    severity: 'moderate',
    query: {
      fr: 'Le réservoir de mon diffuseur connecté fuit par la base et tache le meuble',
      en: 'The tank on my smart diffuser leaks from the base and stains the furniture',
      de: 'Der Tank meines smarten Diffusors leckt an der Unterseite und hinterlässt Flecken auf dem Möbel',
      es: 'El depósito de mi difusor conectado gotea por la base y mancha el mueble',
      it: 'Il serbatoio del mio diffusore smart perde dalla base e macchia il mobile',
      nl: 'Het reservoir van mijn slimme diffuser lekt bij de basis en vlekt het meubel',
    },
  },
  {
    slug: 'diffuseur-minuterie-ne-coupe-pas',
    categorySlug: 'diffuseurs',
    severity: 'minor',
    query: {
      fr: 'La minuterie de mon diffuseur connecté ne coupe pas l\'appareil à l\'heure prévue',
      en: 'The timer on my smart diffuser does not turn off the unit at the scheduled time',
      de: 'Der Timer meines smarten Diffusors schaltet das Gerät nicht zur geplanten Zeit ab',
      es: 'El temporizador de mi difusor conectado no apaga el aparato a la hora prevista',
      it: 'Il timer del mio diffusore smart non spegne l\'apparecchio all\'ora prevista',
      nl: 'De timer van mijn slimme diffuser schakelt het apparaat niet uit op het geplande tijdstip',
    },
  },

  // ------- reveils-lumiere (4th & 5th) -------
  {
    slug: 'reveil-lumiere-simulation-aube-trop-rapide',
    categorySlug: 'reveils-lumiere',
    severity: 'minor',
    query: {
      fr: 'La simulation d\'aube de mon réveil lumineux passe de 0 à 100 % en quelques secondes au lieu de trente minutes',
      en: 'The sunrise simulation on my wake-up light jumps from 0 to 100% in seconds instead of thirty minutes',
      de: 'Die Sonnenaufgangssimulation meines Lichtweckers springt in Sekunden von 0 auf 100 % statt in dreißig Minuten',
      es: 'La simulación de amanecer de mi despertador de luz pasa de 0 a 100 % en segundos en lugar de treinta minutos',
      it: 'La simulazione dell\'alba della mia sveglia luminosa passa da 0 a 100 % in pochi secondi anziché trenta minuti',
      nl: 'De zonsopgangsimulatie van mijn lichtwekker springt in seconden van 0 naar 100 % in plaats van dertig minuten',
    },
  },
  {
    slug: 'reveil-lumiere-radio-fm-gresille',
    categorySlug: 'reveils-lumiere',
    severity: 'minor',
    query: {
      fr: 'La radio FM de mon réveil lumineux connecté grésille et perd la fréquence',
      en: 'The FM radio on my smart wake-up light crackles and loses the frequency',
      de: 'Das FM-Radio meines smarten Lichtweckers knistert und verliert die Frequenz',
      es: 'La radio FM de mi despertador de luz conectado crepita y pierde la frecuencia',
      it: 'La radio FM della mia sveglia luminosa smart gracchia e perde la frequenza',
      nl: 'De FM-radio van mijn slimme lichtwekker kraakt en verliest de frequentie',
    },
  },

  // ------- rideaux-automatises (4th & 5th) -------
  {
    slug: 'rideau-auto-decroche-rail',
    categorySlug: 'rideaux-automatises',
    severity: 'moderate',
    query: {
      fr: 'Mon rideau automatisé se décroche du rail après quelques semaines d\'utilisation',
      en: 'My motorised curtain detaches from the rail after a few weeks of use',
      de: 'Mein automatisierter Vorhang löst sich nach einigen Wochen Benutzung von der Schiene',
      es: 'Mi cortina automatizada se descuelga del riel tras unas semanas de uso',
      it: 'La mia tenda automatizzata si stacca dalla guida dopo poche settimane di utilizzo',
      nl: 'Mijn gemotoriseerd gordijn laat na een paar weken gebruik los van de rail',
    },
  },
  {
    slug: 'rideau-auto-fermeture-incomplete',
    categorySlug: 'rideaux-automatises',
    severity: 'minor',
    query: {
      fr: 'Mon rideau automatisé ne se ferme pas complètement et laisse un écart de dix centimètres',
      en: 'My motorised curtain does not fully close and leaves a ten-centimetre gap',
      de: 'Mein automatisierter Vorhang schließt nicht vollständig und lässt einen zehn Zentimeter breiten Spalt',
      es: 'Mi cortina automatizada no se cierra del todo y deja un hueco de diez centímetros',
      it: 'La mia tenda automatizzata non si chiude completamente e lascia un\'apertura di dieci centimetri',
      nl: 'Mijn gemotoriseerd gordijn sluit niet helemaal en laat een opening van tien centimeter',
    },
  },
] as const

export function getProblem(slug: string): Problem | undefined {
  return PROBLEMS.find((p) => p.slug === slug)
}

export function getProblemsByCategory(categorySlug: string): Problem[] {
  return PROBLEMS.filter((p) => p.categorySlug === categorySlug)
}
