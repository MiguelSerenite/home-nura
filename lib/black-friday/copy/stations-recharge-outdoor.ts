import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'
import type { BlackFridayCategoryCopy } from '../types'

/** Black Friday page of the portable power stations (Germany): only the markets whose list carries it (../markets.ts). */
export const POWER_STATIONS_COPY: Partial<Record<Lang, BlackFridayCategoryCopy>> = {
  de: {
    name: 'Powerstations',
    h1: `Black Friday ${Y}: Diese Powerstations lohnen einen Blick`,
    metaTitle: `Black Friday ${Y}: Powerstations für Stromausfall & Camping`,
    metaDescription: `Powerstations für den Black Friday ${Y}: EcoFlow und BLUETTI. Kapazität, Leistung, USV, Solarpanel: Das sollten Sie vor dem Kauf prüfen.`,
    blurb: 'EcoFlow und BLUETTI: Notstrom bei Stromausfall, Strom für Camping und Garten.',
    intro: 'Eine Powerstation ist ein großer Akku mit Steckdosen: Sie überbrückt einen Stromausfall für Router, Licht oder Kühlschrank und versorgt Geräte beim Camping oder im Garten. Vergleichen Sie am Black Friday die Kapazität in Wattstunden, die bestimmt, wie lange sie durchhält, und die Dauerleistung in Watt, die bestimmt, welche Geräte sie überhaupt betreiben kann. Prüfen Sie bei Angeboten auch, ob ein Solarpanel zum Set gehört.',
    faq: [
      {
        question: 'Wie viel Kapazität brauche ich?',
        answer: 'Als Faustregel gilt: Kapazität in Wattstunden mal 0,85 geteilt durch die Leistung des Geräts ergibt die Laufzeit in Stunden; der Abschlag deckt die Umwandlungsverluste. Für Smartphone, Laptop und Licht oder als USV für den Router genügt ein kompaktes Modell wie die EcoFlow RIVER 3 Plus mit 286 Wh. Für den Kühlschrank, eine Kompressor-Kühlbox oder einen längeren Stromausfall eher die Klasse um 1.000 Wh wie die EcoFlow DELTA 3 Plus oder die BLUETTI Elite 100 V2.',
      },
      {
        question: 'Hilft eine Powerstation bei einem Stromausfall?',
        answer: 'Ja, für die Geräte, die Sie direkt an ihre Steckdosen anschließen. Mit USV-Funktion übernimmt sie bei einem Ausfall innerhalb von Millisekunden, sodass Router oder Rechner weiterlaufen. Das Hausnetz versorgt sie nicht: Eine Rückspeisung über eine Steckdose ist gefährlich, eine Einbindung braucht eine passende Vorrichtung, die eine Elektrofachkraft installiert.',
      },
      {
        question: 'Powerstation oder Balkonkraftwerk mit Speicher?',
        answer: 'Eine Powerstation ist mobil und versorgt Geräte direkt an ihren Steckdosen. Ein Balkonkraftwerk mit Speicher bleibt fest am Balkon, speichert den Solarstrom des Tages und gibt ihn abends ins Hausnetz ab, um die Stromrechnung zu senken.',
      },
      {
        question: 'Kann ich eine Powerstation mit einem Solarpanel laden?',
        answer: 'Ja, über den Solareingang. Prüfen Sie vor dem Kauf eines Panels, welche Leistung in Watt und welchen Spannungsbereich der Eingang verträgt; die EcoFlow DELTA 3 Plus und die BLUETTI Elite 100 V2 nehmen bis zu 1.000 W Solarleistung auf, die RIVER 3 Plus bis zu 220 W.',
      },
    ],
  },
}
