import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'
import type { BlackFridayCategoryCopy } from '../types'

export const HEATERS_COPY: Record<Lang, BlackFridayCategoryCopy> = {
  fr: {
    name: 'Radiateurs connectés',
    h1: `Black Friday ${Y} : les radiateurs connectés à surveiller`,
    metaTitle: `Black Friday ${Y} : radiateurs connectés`,
    metaDescription: `Radiateurs connectés à surveiller pour le Black Friday ${Y} : Thermor, Sauter, Mill. Fixe ou mobile, détections, appli : ce qu'il faut vérifier.`,
    blurb: 'Thermor, Sauter, Mill : à fixer au mur ou mobile, selon votre logement.',
    intro: "Deux familles à distinguer : les radiateurs à inertie fixés au mur, qui remplacent un ancien convecteur, et les radiateurs mobiles à brancher, sans travaux. Vérifiez aussi la détection de fenêtre ouverte et le pilotage par application.",
    faq: [
      {
        question: 'Radiateur fixe ou mobile ?',
        answer: "Un radiateur à inertie fixé au mur chauffe une pièce de façon homogène et remplace un convecteur. Un radiateur mobile se branche sur une prise et dépanne une pièce quand il le faut, sans travaux ni électricien.",
      },
      {
        question: 'Un radiateur connecté fait-il baisser la facture ?',
        answer: "Surtout en évitant de chauffer pour rien : programmation, détection d'absence et de fenêtre ouverte, pilotage à distance. L'économie dépend de vos habitudes et de l'isolation du logement.",
      },
      {
        question: 'Faut-il un électricien ?',
        answer: "Un radiateur fixe se raccorde à un circuit dédié : confiez-le à un électricien en cas de doute. Un radiateur mobile comme le Mill Gentle Air WiFi se branche simplement sur une prise.",
      },
    ],
  },
  en: {
    name: 'Smart electric heaters',
    h1: `Black Friday ${Y}: the smart electric heaters worth watching`,
    metaTitle: `Black Friday ${Y}: Smart Electric Heaters`,
    metaDescription: `Smart electric heaters worth watching this Black Friday ${Y}: Thermor, Sauter, Mill. Wall-mounted or portable, sensors, app: what to check.`,
    blurb: 'Thermor, Sauter, Mill: wall-mounted or portable, depending on your home.',
    intro: 'Two kinds to tell apart: wall-mounted radiators with thermal inertia, which replace an old convector heater, and portable plug-in heaters that need no installation. Also check for open-window detection and app control.',
    faq: [
      {
        question: 'Wall-mounted or portable heater?',
        answer: 'A wall-mounted radiator with thermal inertia heats a room evenly and replaces a convector. A portable heater plugs into a socket and helps out in one room when needed, with no work or electrician.',
      },
      {
        question: 'Does a smart heater lower the bill?',
        answer: 'Mainly by not heating for nothing: scheduling, absence and open-window detection, remote control. The saving depends on your habits and how well the home is insulated.',
      },
      {
        question: 'Do I need an electrician?',
        answer: 'A wall-mounted heater connects to a dedicated circuit: hire an electrician if in doubt. A portable heater such as the Mill Gentle Air WiFi simply plugs into a socket.',
      },
    ],
  },
  de: {
    name: 'Smarte Elektroheizungen',
    h1: `Black Friday ${Y}: Diese smarten Elektroheizungen lohnen den Blick`,
    metaTitle: `Black Friday ${Y}: smarte Elektroheizungen`,
    metaDescription: `Smarte Elektroheizungen für den Black Friday ${Y}: Thermor, Sauter, Mill. Wandmontage oder mobil, Sensoren, App: Das sollten Sie vor dem Kauf prüfen.`,
    blurb: 'Thermor, Sauter, Mill: fest an der Wand oder mobil, je nach Wohnung.',
    intro: 'Zwei Arten sind zu unterscheiden: Elektroheizkörper mit Wärmespeicher für die Wandmontage, die einen alten Konvektor ersetzen, und mobile Geräte für die Steckdose, ganz ohne Montage. Achten Sie außerdem auf Fenster-offen-Erkennung und App-Steuerung.',
    faq: [
      {
        question: 'Wandheizkörper oder mobiles Gerät?',
        answer: 'Ein Wandheizkörper mit Wärmespeicher heizt einen Raum gleichmäßig und ersetzt einen Konvektor. Ein mobiles Gerät kommt in die Steckdose und hilft in einem Raum bei Bedarf aus, ohne Montage und ohne Elektriker.',
      },
      {
        question: 'Senkt eine smarte Heizung die Stromrechnung?',
        answer: 'Vor allem, indem sie nicht unnötig heizt: Zeitpläne, Abwesenheits- und Fenster-offen-Erkennung, Fernsteuerung. Wie viel Sie sparen, hängt von Ihren Gewohnheiten und der Dämmung ab.',
      },
      {
        question: 'Brauche ich einen Elektriker?',
        answer: 'Ein Wandheizkörper wird an einen eigenen Stromkreis angeschlossen: Ziehen Sie im Zweifel einen Elektriker hinzu. Ein mobiles Gerät wie der Mill Gentle Air WiFi kommt einfach in die Steckdose.',
      },
    ],
  },
  es: {
    name: 'Radiadores eléctricos inteligentes',
    h1: `Black Friday ${Y}: los radiadores eléctricos inteligentes que merece la pena seguir`,
    metaTitle: `Black Friday ${Y}: radiadores inteligentes`,
    metaDescription: `Radiadores eléctricos inteligentes a seguir en el Black Friday ${Y}: Thermor, Sauter, Mill. De pared o portátil, sensores, app: qué comprobar.`,
    blurb: 'Thermor, Sauter, Mill: de pared o portátil, según tu vivienda.',
    intro: 'Hay dos tipos que distinguir: los radiadores de inercia que se fijan a la pared y sustituyen a un convector antiguo, y los portátiles que se enchufan, sin obras. Comprueba también la detección de ventana abierta y el control por app.',
    faq: [
      {
        question: '¿Radiador de pared o portátil?',
        answer: 'Un radiador de inercia fijado a la pared calienta una habitación de forma homogénea y sustituye a un convector. Uno portátil se enchufa y ayuda en una habitación cuando hace falta, sin obras ni electricista.',
      },
      {
        question: '¿Un radiador inteligente reduce la factura?',
        answer: 'Sobre todo porque evita calentar para nada: programación, detección de ausencia y de ventana abierta, control a distancia. El ahorro depende de tus hábitos y del aislamiento de la vivienda.',
      },
      {
        question: '¿Hace falta un electricista?',
        answer: 'Un radiador de pared se conecta a un circuito propio: si tienes dudas, recurre a un electricista. Uno portátil como el Mill Gentle Air WiFi simplemente se enchufa.',
      },
    ],
  },
  it: {
    name: 'Radiatori elettrici smart',
    h1: `Black Friday ${Y}: i radiatori elettrici smart da tenere d'occhio`,
    metaTitle: `Black Friday ${Y}: radiatori elettrici smart`,
    metaDescription: `Radiatori elettrici smart da tenere d'occhio per il Black Friday ${Y}: Thermor, Sauter, Mill. A parete o portatili, sensori, app: cosa verificare.`,
    blurb: 'Thermor, Sauter, Mill: a parete o portatile, in base alla casa.',
    intro: 'Due tipi da distinguere: i radiatori a inerzia da fissare a parete, che sostituiscono un vecchio convettore, e quelli portatili da collegare alla presa, senza lavori. Verifica anche il rilevamento di finestra aperta e il controllo tramite app.',
    faq: [
      {
        question: 'Radiatore a parete o portatile?',
        answer: 'Un radiatore a inerzia fissato a parete scalda una stanza in modo uniforme e sostituisce un convettore. Uno portatile si collega alla presa e aiuta in una stanza quando serve, senza lavori né elettricista.',
      },
      {
        question: 'Un radiatore smart fa risparmiare in bolletta?',
        answer: 'Soprattutto evitando di scaldare inutilmente: programmazione, rilevamento di assenza e di finestra aperta, controllo a distanza. Il risparmio dipende dalle tue abitudini e dall’isolamento della casa.',
      },
      {
        question: 'Serve un elettricista?',
        answer: 'Un radiatore a parete si collega a un circuito dedicato: se hai dubbi, rivolgiti a un elettricista. Uno portatile come il Mill Gentle Air WiFi si collega semplicemente alla presa.',
      },
    ],
  },
  nl: {
    name: 'Slimme elektrische radiatoren',
    h1: `Black Friday ${Y}: de slimme elektrische radiatoren om in de gaten te houden`,
    metaTitle: `Black Friday ${Y}: slimme elektrische radiatoren`,
    metaDescription: `Slimme elektrische radiatoren om te volgen tijdens Black Friday ${Y}: Thermor, Sauter, Mill. Vast of mobiel, sensoren, app: wat je vóór aankoop checkt.`,
    blurb: 'Thermor, Sauter, Mill: vast aan de muur of mobiel, afhankelijk van je woning.',
    intro: 'Er zijn twee soorten: radiatoren met warmteopslag voor aan de muur, die een oude convector vervangen, en mobiele radiatoren voor het stopcontact, zonder installatie. Let ook op raam-open-detectie en bediening via een app.',
    faq: [
      {
        question: 'Vaste of mobiele radiator?',
        answer: 'Een vaste radiator met warmteopslag verwarmt een kamer gelijkmatig en vervangt een convector. Een mobiele radiator gaat in het stopcontact en helpt in één kamer wanneer nodig, zonder werk of elektricien.',
      },
      {
        question: 'Verlaagt een slimme radiator de energierekening?',
        answer: 'Vooral door niet voor niets te verwarmen: planning, afwezigheids- en raam-open-detectie, bediening op afstand. Hoeveel je bespaart, hangt af van je gewoonten en de isolatie van je woning.',
      },
      {
        question: 'Heb je een elektricien nodig?',
        answer: 'Een vaste radiator sluit je aan op een eigen groep: schakel bij twijfel een elektricien in. Een mobiele radiator zoals de Mill Gentle Air WiFi steek je gewoon in het stopcontact.',
      },
    ],
  },
}
