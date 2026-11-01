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
  pl: {
    name: 'Inteligentne grzejniki elektryczne',
    h1: `Black Friday ${Y}: inteligentne grzejniki elektryczne, które warto mieć na oku`,
    metaTitle: `Black Friday ${Y}: inteligentne grzejniki elektryczne`,
    metaDescription: `Inteligentne grzejniki elektryczne na Black Friday ${Y}: Thermor, Sauter, Mill. Stałe lub mobilne, czujniki, aplikacja: co sprawdzić.`,
    blurb: 'Thermor, Sauter, Mill: do montażu na ścianie lub mobilne, zależnie od mieszkania.',
    intro: 'Warto odróżnić dwie rodziny: grzejniki z akumulacją ciepła montowane na ścianie, które zastępują stary konwektor, oraz mobilne grzejniki podłączane do gniazdka, bez prac instalacyjnych. Sprawdź też wykrywanie otwartego okna i sterowanie z aplikacji.',
    faq: [
      {
        question: 'Grzejnik stały czy mobilny?',
        answer: 'Grzejnik z akumulacją ciepła zamontowany na ścianie ogrzewa pomieszczenie równomiernie i zastępuje konwektor. Grzejnik mobilny podłączasz do gniazdka i dogrzewasz pokój, gdy zajdzie potrzeba, bez prac montażowych i bez elektryka.',
      },
      {
        question: 'Czy inteligentny grzejnik obniża rachunki?',
        answer: 'Głównie dzięki temu, że nie grzeje bez potrzeby: programowanie, wykrywanie nieobecności i otwartego okna, sterowanie zdalne. Oszczędność zależy od twoich nawyków i od izolacji mieszkania.',
      },
      {
        question: 'Czy potrzebny jest elektryk?',
        answer: 'Grzejnik stały podłącza się do osobnego obwodu: w razie wątpliwości zleć to elektrykowi. Grzejnik mobilny, taki jak Mill Gentle Air WiFi, po prostu wkładasz do gniazdka.',
      },
    ],
  },
  sv: {
    name: 'Smarta elelement',
    h1: `Black Friday ${Y}: smarta elelement att hålla koll på`,
    metaTitle: `Black Friday ${Y}: smarta elelement värda att bevaka`,
    metaDescription: `Smarta elelement att hålla koll på inför Black Friday ${Y}: Thermor, Sauter och Mill. Fast eller flyttbart, sensorer och app – det här ska du kontrollera.`,
    blurb: 'Thermor, Sauter, Mill: väggmonterat eller flyttbart, efter din bostad.',
    intro: 'Det finns två sorter att skilja på: väggmonterade, värmelagrande element som ersätter ett gammalt konvektorelement, och flyttbara element som du bara sätter i ett vägguttag, utan installation. Kontrollera också om elementet känner av öppna fönster och går att styra via app.',
    faq: [
      {
        question: 'Väggmonterat eller flyttbart element?',
        answer: 'Ett väggmonterat, värmelagrande element värmer rummet jämnt och ersätter en konvektor. Ett flyttbart element sätter du i ett vägguttag när ett rum behöver extra värme, utan installationsarbete och utan elektriker.',
      },
      {
        question: 'Sänker ett smart elelement elräkningen?',
        answer: 'Främst genom att du slipper värma i onödan: schemaläggning, avkänning av frånvaro och öppna fönster, styrning på distans. Hur mycket du sparar beror på dina vanor och på hur väl bostaden är isolerad.',
      },
      {
        question: 'Behöver jag en elektriker?',
        answer: 'Ett väggmonterat element ansluts till en egen grupp i elcentralen: låt en behörig elektriker sköta det om du är osäker. Ett flyttbart element som Mill Gentle Air WiFi sätter du bara i ett vägguttag.',
      },
    ],
  },
  us: {
    name: 'Space heaters',
    h1: `Black Friday ${Y}: The Space Heaters Worth Watching`,
    metaTitle: `Black Friday ${Y}: Best Space Heaters to Watch`,
    metaDescription: `Space heaters worth watching this Black Friday ${Y}: Dreo convection, wall-mounted and oil-filled models. Thermostat, safety, running cost: what to check.`,
    blurb: 'Dreo: convection, wall-mounted or oil-filled, depending on the room.',
    intro: 'Most space heaters sold in the US draw 1,500 W from a standard 120 V outlet, so the real differences are how they heat and how safely they run. A convection or oil-filled heater warms a room quietly, and a wall-mounted model frees up floor space. Look for a built-in thermostat, tip-over and overheat protection, and app control if you want to set a schedule.',
    faq: [
      {
        question: 'Wall-mounted or portable heater?',
        answer: 'A wall-mounted heater frees up floor space and stays out of the way of kids and pets; a portable space heater moves from room to room and helps out wherever you need it. Plug-in wall-mounted models usually come with their mounting hardware, while a hardwired wall heater needs its own circuit.',
      },
      {
        question: 'Will a smart heater lower my energy bill?',
        answer: "Only by not heating when there's no need: a thermostat, schedules and phone control keep it from running in empty rooms. On high, a 1,500 W heater uses 1.5 kWh an hour, about 27 cents at the US average residential rate of 18.16 cents per kWh (EIA, August 2026). Rates are much higher in some states, like California at 29.75 cents, so check your utility bill.",
      },
      {
        question: 'Do I need an electrician?',
        answer: 'Not for a plug-in model: plug it straight into a wall outlet, never an extension cord or power strip, and keep anything that can burn at least 3 feet away. A hardwired wall heater is different: it needs its own circuit and a licensed electrician.',
      },
    ],
  },
  ca: {
    name: 'Electric heaters',
    h1: `Black Friday ${Y}: the electric heaters worth watching`,
    metaTitle: `Black Friday ${Y}: Electric Heaters Worth Watching`,
    metaDescription: `Electric heaters worth watching this Black Friday ${Y}: Dreo wall-mounted and portable oil-filled models, plus the safety checks to make first.`,
    blurb: 'Dreo: wall-mounted or a portable oil-filled radiator, depending on the room.',
    intro: "Two kinds to tell apart: wall-mounted heaters, which stay in place and keep the floor clear, and portable heaters, such as an oil-filled radiator, that plug into a standard outlet with no installation. Look for a built-in thermostat, tip-over and overheat protection, and app control if you want schedules. Before you buy or use any heater, check the Government of Canada's Recalls and Safety Alerts site. On October 29, 2026, Dreo recalled DR-HSH015 space heaters made from April 2025 to January 2026 for fire and burn hazards; about 36,300 were sold in Canada, according to the US Consumer Product Safety Commission. That model isn't one of our picks.",
    faq: [
      {
        question: 'Wall-mounted or portable heater?',
        answer: 'A wall-mounted heater stays in place and keeps the floor clear, which suits a room that needs regular extra heat. A portable heater, such as an oil-filled radiator, plugs into a standard outlet and gives one room a boost when you need it, with no installation work and no electrician.',
      },
      {
        question: 'Does a smart heater lower your electricity bill?',
        answer: "Mainly by not heating when there's no need: a built-in thermostat, schedules and timers, and remote control from the app. How much you save depends on your habits and how well your home is insulated.",
      },
      {
        question: 'Do I need an electrician?',
        answer: 'A wall-mounted heater is wired to a dedicated circuit. Electrical work rules are set by each province and territory, so when in doubt, hire a licensed electrician. A portable heater, such as an oil-filled radiator, simply plugs in, with no wiring.',
      },
    ],
  },
}
