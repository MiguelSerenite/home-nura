import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'
import type { BlackFridayCategoryCopy } from '../types'

/** Black Friday page of the smart locks: only the markets whose list carries it (../markets.ts). */
export const SMART_LOCKS_COPY: Partial<Record<Lang, BlackFridayCategoryCopy>> = {
  de: {
    name: 'Smart Locks',
    h1: `Black Friday ${Y}: Diese Smart Locks lohnen einen Blick`,
    metaTitle: `Black Friday ${Y}: Smart Locks von Nuki und Aqara im Blick`,
    metaDescription: `Smart Locks für den Black Friday ${Y}: Nuki und Aqara. Zylinder, App, Keypad, Matter: Das sollten Sie prüfen, bevor Sie Ihre Haustür nachrüsten.`,
    blurb: 'Nuki und Aqara: auf den vorhandenen Zylinder nachrüsten, öffnen per App, Keypad oder Fingerabdruck.',
    intro: 'Ein Smart Lock zum Nachrüsten sitzt innen auf dem vorhandenen Schließzylinder: Das Schloss bleibt, von außen sieht die Tür aus wie vorher, und Ihr Schlüssel funktioniert weiter. Prüfen Sie am Black Friday zuerst, ob Ihr Zylinder passt, und dann, wie Sie öffnen möchten: per App, mit Keypad und Fingerabdruck oder automatisch, wenn Sie nach Hause kommen.',
    faq: [
      {
        question: 'Passt ein Smart Lock an meine Tür?',
        answer: 'Die Modelle dieser Auswahl werden innen auf einen Euro-Profilzylinder gesetzt, der dafür weit genug überstehen muss. Die meisten Nachrüstschlösser brauchen außerdem einen Zylinder mit Not- und Gefahrenfunktion, der sich von außen öffnen lässt, auch wenn innen ein Schlüssel steckt; ohne sie kommen Sie mit Ihrem Schlüssel unter Umständen nicht mehr hinein. Jeder Hersteller bietet einen Kompatibilitätscheck an.',
      },
      {
        question: 'Geht das auch in einer Mietwohnung?',
        answer: 'In der Regel ja: Smart Locks zum Nachrüsten werden innen montiert, meist ohne Bohren, und lassen sich beim Auszug spurlos abnehmen. Müssen Sie den Zylinder tauschen, bewahren Sie den alten auf. Informieren Sie trotzdem Vermieter oder Hausverwaltung, vor allem wenn außen ein Keypad angebracht werden soll.',
      },
      {
        question: 'Brauche ich eine Bridge?',
        answer: 'Für die Nuki-Modelle dieser Auswahl nicht: WLAN ist eingebaut, der Fernzugriff funktioniert ohne Zusatzgerät. Für Matter over Thread, etwa mit Apple Home oder Google Home, brauchen Sie aber einen Thread-Border-Router, wie er in manchen smarten Lautsprechern und Displays steckt. Das Aqara Smart Lock U200 braucht für den Fernzugriff einen solchen Router oder einen Aqara-Hub; dafür unterstützt es Apple Home Key.',
      },
      {
        question: 'Was passiert, wenn Akku oder Batterien leer sind?',
        answer: 'Die App warnt bei niedrigem Ladestand; aktivieren Sie diese Meldung. Das Nuki Smart Lock Pro und das Aqara Smart Lock U200 laufen mit Akku, das Nuki Smart Lock Go mit Batterien. Haben Sie den mechanischen Schlüssel dabei oder lassen Sie einen bei einer Vertrauensperson: Damit schließen Sie weiterhin auf.',
      },
    ],
  },
  us: {
    name: 'Smart locks',
    h1: `Black Friday ${Y}: The Smart Locks Worth Watching`,
    metaTitle: `Black Friday ${Y}: Best Smart Locks for Front Doors`,
    metaDescription: `Smart locks worth watching this Black Friday ${Y}: Nuki, August and Aqara. Deadbolt fit, keypad, Wi-Fi or Thread: what to check before you buy.`,
    blurb: 'Nuki, August, Aqara: they work with a standard deadbolt and open by phone, code or fingerprint.',
    intro: "Start with your front door's deadbolt. A retrofit smart lock mounts over it on the inside and keeps your existing keys; a smart deadbolt replaces it entirely, usually with a keypad on the outside. Settle that first, then compare Wi-Fi, battery life and which smart home platform the lock works with.",
    faq: [
      {
        question: 'Retrofit smart lock or smart deadbolt?',
        answer: 'A retrofit lock replaces only the thumb turn on the inside of the door: the outside and your keys stay the same, which often makes it the easier option for renters. A smart deadbolt replaces the whole lock, inside and out, and comes with its own cylinder and keys, usually with a keypad on the outside.',
      },
      {
        question: 'Will a smart lock fit my door?',
        answer: "Check that you have a single-cylinder deadbolt (a key outside, a thumb turn inside), measure the door's thickness and the backset (the distance from the edge of the door to the center of the hole, usually 2 3/8 or 2 3/4 inches), and make sure the bolt turns smoothly by hand. Then check the maker's compatibility guide before you buy.",
      },
      {
        question: 'Do I need Wi-Fi or a hub?',
        answer: "Bluetooth alone lets you unlock from your phone when you're near the door. To lock it from anywhere and get alerts, you need built-in Wi-Fi or a bridge. A Matter lock works with Apple Home, Google Home and Alexa, but a Matter-over-Thread model also needs a Thread border router, a role some recent smart speakers and hubs already play.",
      },
    ],
  },
}
