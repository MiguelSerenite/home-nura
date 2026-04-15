/**
 * Troubleshooting problems — Moteur 3 seed.
 *
 * Each entry drives a long-tail troubleshooting page of the form:
 *     /{lang}/guides/probleme/{problem-slug}
 *
 * Phase Y shipped a thin seed (6 problems on the first two cuisine
 * categories) to prove the Moteur 3 generator. Phase KK (Period 4)
 * expands the seed to 30 problems — 5 per indexable cuisine-connectee
 * category — so Moteur 3 ships 180 long-tail pages (30 × 6 locales)
 * instead of 36. The template is 100% pure content: adding a problem
 * is one struct literal with 6 locale strings, no code changes.
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
] as const

export function getProblem(slug: string): Problem | undefined {
  return PROBLEMS.find((p) => p.slug === slug)
}

export function getProblemsByCategory(categorySlug: string): Problem[] {
  return PROBLEMS.filter((p) => p.categorySlug === categorySlug)
}
