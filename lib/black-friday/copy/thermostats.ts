import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'
import type { BlackFridayCategoryCopy } from '../types'

export const THERMOSTATS_COPY: Record<Lang, BlackFridayCategoryCopy> = {
  fr: {
    name: 'Thermostats et têtes thermostatiques',
    h1: `Black Friday ${Y} : les thermostats connectés à surveiller`,
    metaTitle: `Black Friday ${Y} : thermostats connectés`,
    metaDescription: `Thermostats connectés et têtes thermostatiques à surveiller pour le Black Friday ${Y} (tado, Netatmo, Honeywell) et la compatibilité à vérifier.`,
    blurb: "tado, Netatmo, Honeywell : d'abord la compatibilité avec la chaudière ou la pompe à chaleur.",
    intro: "Un thermostat connecté n'a d'intérêt que s'il est compatible avec votre chauffage. Avant toute promotion, vérifiez le type d'installation (chaudière, pompe à chaleur, radiateurs à eau) et, pour une pompe à chaleur, son mode de pilotage : contact marche/arrêt ou OpenTherm.",
    faq: [
      {
        question: 'Thermostat ou têtes thermostatiques connectées ?',
        answer: "Le thermostat pilote la chaudière ou la pompe à chaleur pour tout le logement. Les têtes thermostatiques se posent sur les radiateurs à eau et règlent chaque pièce séparément ; les deux peuvent se combiner.",
      },
      {
        question: 'Un thermostat connecté fonctionne-t-il avec une pompe à chaleur ?',
        answer: "Oui, s'il est compatible avec sa commande : marche/arrêt pour la plupart, OpenTherm pour certaines. Le tado Heat Pump Optimizer X se connecte directement à plusieurs marques de pompes à chaleur.",
      },
      {
        question: "L'installation est-elle compliquée ?",
        answer: "Les têtes thermostatiques se posent sans outil sur la plupart des radiateurs. Un thermostat filaire remplace l'ancien ; en cas de doute sur le câblage de la chaudière ou de la pompe à chaleur, faites appel à un professionnel.",
      },
    ],
  },
  en: {
    name: 'Smart thermostats and radiator valves',
    h1: `Black Friday ${Y}: the smart thermostats worth watching`,
    metaTitle: `Black Friday ${Y}: Smart Thermostats Worth Watching`,
    metaDescription: `Smart thermostats and radiator valves worth watching this Black Friday ${Y} (tado, Netatmo, Honeywell), and the compatibility to check first.`,
    blurb: 'tado, Netatmo, Honeywell: check boiler or heat pump compatibility first.',
    intro: 'A smart thermostat is only useful if it works with your heating. Before any deal, check your system (boiler, heat pump, radiators) and, for a heat pump, how it is controlled: on/off contact or OpenTherm.',
    faq: [
      {
        question: 'Smart thermostat or smart radiator valves?',
        answer: 'A thermostat controls the boiler or heat pump for the whole home. Smart radiator valves fit on radiators and set each room separately; the two can be combined.',
      },
      {
        question: 'Does a smart thermostat work with a heat pump?',
        answer: 'Yes, if it matches how the heat pump is controlled: on/off for most, OpenTherm for some. The tado Heat Pump Optimizer X connects directly to several heat pump brands.',
      },
      {
        question: 'Is installation difficult?',
        answer: 'Radiator valves fit without tools on most radiators. A wired thermostat replaces the old one; if you are unsure about the boiler or heat pump wiring, call in a professional.',
      },
    ],
  },
  de: {
    name: 'Thermostate und Heizkörperthermostate',
    h1: `Black Friday ${Y}: Diese smarten Thermostate lohnen den Blick`,
    metaTitle: `Black Friday ${Y}: smarte Thermostate im Blick`,
    metaDescription: `Smarte Thermostate und Heizkörperthermostate für den Black Friday ${Y} (tado, Netatmo, Honeywell) und die Kompatibilität, die Sie zuerst prüfen sollten.`,
    blurb: 'tado, Netatmo, Honeywell: zuerst die Kompatibilität mit Kessel oder Wärmepumpe prüfen.',
    intro: 'Ein smartes Thermostat nützt nur, wenn es zu Ihrer Heizung passt. Prüfen Sie vor jedem Angebot die Anlage (Heizkessel, Wärmepumpe, Heizkörper) und bei einer Wärmepumpe die Ansteuerung: Ein/Aus-Kontakt oder OpenTherm.',
    faq: [
      {
        question: 'Smartes Thermostat oder smarte Heizkörperthermostate?',
        answer: 'Das Thermostat steuert Heizkessel oder Wärmepumpe für die ganze Wohnung. Heizkörperthermostate sitzen am Heizkörper und regeln jeden Raum einzeln; beides lässt sich kombinieren.',
      },
      {
        question: 'Funktioniert ein smartes Thermostat mit einer Wärmepumpe?',
        answer: 'Ja, wenn es zur Ansteuerung der Wärmepumpe passt: Ein/Aus bei den meisten, OpenTherm bei einigen. Der tado Heat Pump Optimizer X wird direkt an mehrere Wärmepumpenmarken angeschlossen.',
      },
      {
        question: 'Ist die Installation kompliziert?',
        answer: 'Heizkörperthermostate lassen sich an den meisten Heizkörpern ohne Werkzeug montieren. Ein verkabeltes Thermostat ersetzt das alte; bei Zweifeln an der Verkabelung von Kessel oder Wärmepumpe ziehen Sie eine Fachkraft hinzu.',
      },
    ],
  },
  es: {
    name: 'Termostatos y cabezales termostáticos',
    h1: `Black Friday ${Y}: los termostatos inteligentes que merece la pena seguir`,
    metaTitle: `Black Friday ${Y}: termostatos inteligentes`,
    metaDescription: `Termostatos inteligentes y cabezales termostáticos a seguir en el Black Friday ${Y} (tado, Netatmo, Honeywell) y la compatibilidad que conviene comprobar.`,
    blurb: 'tado, Netatmo, Honeywell: comprueba antes la compatibilidad con la caldera o la bomba de calor.',
    intro: 'Un termostato inteligente solo sirve si es compatible con tu calefacción. Antes de cualquier oferta, revisa el tipo de instalación (caldera, bomba de calor, radiadores de agua) y, con bomba de calor, cómo se controla: contacto de encendido/apagado u OpenTherm.',
    faq: [
      {
        question: '¿Termostato o cabezales termostáticos inteligentes?',
        answer: 'El termostato controla la caldera o la bomba de calor para toda la vivienda. Los cabezales se colocan en los radiadores de agua y regulan cada habitación por separado; se pueden combinar.',
      },
      {
        question: '¿Funciona un termostato inteligente con bomba de calor?',
        answer: 'Sí, si es compatible con su control: encendido/apagado en la mayoría, OpenTherm en algunas. El tado Heat Pump Optimizer X se conecta directamente a varias marcas de bombas de calor.',
      },
      {
        question: '¿Es complicada la instalación?',
        answer: 'Los cabezales termostáticos se colocan sin herramientas en la mayoría de los radiadores. Un termostato con cable sustituye al anterior; si dudas del cableado de la caldera o de la bomba de calor, recurre a un profesional.',
      },
    ],
  },
  it: {
    name: 'Termostati e valvole termostatiche',
    h1: `Black Friday ${Y}: i termostati smart da tenere d'occhio`,
    metaTitle: `Black Friday ${Y}: termostati smart`,
    metaDescription: `Termostati smart e valvole termostatiche da tenere d'occhio per il Black Friday ${Y} (tado, Netatmo, Honeywell) e la compatibilità da verificare.`,
    blurb: 'tado, Netatmo, Honeywell: prima verifica la compatibilità con caldaia o pompa di calore.',
    intro: 'Un termostato smart serve solo se è compatibile con il tuo riscaldamento. Prima di qualsiasi offerta, verifica l’impianto (caldaia, pompa di calore, termosifoni) e, con una pompa di calore, come viene comandata: contatto on/off o OpenTherm.',
    faq: [
      {
        question: 'Termostato o valvole termostatiche smart?',
        answer: 'Il termostato comanda la caldaia o la pompa di calore per tutta la casa. Le valvole termostatiche si montano sui termosifoni e regolano ogni stanza separatamente; si possono combinare.',
      },
      {
        question: 'Un termostato smart funziona con una pompa di calore?',
        answer: 'Sì, se è compatibile con il suo comando: on/off per la maggior parte, OpenTherm per alcune. Il tado Heat Pump Optimizer X si collega direttamente a diverse marche di pompe di calore.',
      },
      {
        question: 'L’installazione è complicata?',
        answer: 'Le valvole termostatiche si montano senza attrezzi sulla maggior parte dei termosifoni. Un termostato cablato sostituisce il vecchio; se hai dubbi sul cablaggio della caldaia o della pompa di calore, rivolgiti a un professionista.',
      },
    ],
  },
  nl: {
    name: 'Thermostaten en radiatorknoppen',
    h1: `Black Friday ${Y}: de slimme thermostaten om in de gaten te houden`,
    metaTitle: `Black Friday ${Y}: slimme thermostaten`,
    metaDescription: `Slimme thermostaten en radiatorknoppen om te volgen tijdens Black Friday ${Y} (tado, Netatmo, Honeywell), en de compatibiliteit die je eerst checkt.`,
    blurb: 'tado, Netatmo, Honeywell: check eerst de compatibiliteit met je ketel of warmtepomp.',
    intro: 'Een slimme thermostaat heeft alleen zin als hij met je verwarming werkt. Controleer vóór elke deal je installatie (cv-ketel, warmtepomp, radiatoren) en bij een warmtepomp hoe die wordt aangestuurd: aan/uit-contact of OpenTherm.',
    faq: [
      {
        question: 'Thermostaat of slimme radiatorknoppen?',
        answer: 'De thermostaat stuurt de cv-ketel of warmtepomp voor het hele huis aan. Radiatorknoppen zet je op de radiatoren en regelen elke kamer apart; je kunt ze combineren.',
      },
      {
        question: 'Werkt een slimme thermostaat met een warmtepomp?',
        answer: 'Ja, als hij past bij de aansturing van de warmtepomp: aan/uit bij de meeste, OpenTherm bij sommige. De tado Heat Pump Optimizer X wordt direct aangesloten op verschillende warmtepompmerken.',
      },
      {
        question: 'Is de installatie ingewikkeld?',
        answer: 'Radiatorknoppen monteer je op de meeste radiatoren zonder gereedschap. Een bedrade thermostaat vervangt de oude; twijfel je over de bedrading van ketel of warmtepomp, schakel dan een vakman in.',
      },
    ],
  },
  pl: {
    name: 'Termostaty i głowice termostatyczne',
    h1: `Black Friday ${Y}: inteligentne termostaty, które warto mieć na oku`,
    metaTitle: `Black Friday ${Y}: inteligentne termostaty`,
    metaDescription: `Inteligentne termostaty i głowice termostatyczne na Black Friday ${Y} (tado, Netatmo, Honeywell) oraz zgodność, którą warto sprawdzić.`,
    blurb: 'tado, Netatmo, Honeywell: najpierw zgodność z kotłem lub pompą ciepła.',
    intro: 'Inteligentny termostat ma sens tylko wtedy, gdy współpracuje z twoim ogrzewaniem. Przed każdą promocją sprawdź typ instalacji (kocioł, pompa ciepła, grzejniki wodne), a w przypadku pompy ciepła także sposób jej sterowania: styk włącz/wyłącz lub OpenTherm.',
    faq: [
      {
        question: 'Termostat czy inteligentne głowice termostatyczne?',
        answer: 'Termostat steruje kotłem lub pompą ciepła w całym mieszkaniu. Głowice termostatyczne montuje się na grzejnikach wodnych i regulują każde pomieszczenie osobno; oba rozwiązania można łączyć.',
      },
      {
        question: 'Czy inteligentny termostat działa z pompą ciepła?',
        answer: 'Tak, jeśli jest zgodny z jej sterowaniem: włącz/wyłącz w większości modeli, OpenTherm w niektórych. tado Heat Pump Optimizer X łączy się bezpośrednio z kilkoma markami pomp ciepła.',
      },
      {
        question: 'Czy montaż jest skomplikowany?',
        answer: 'Głowice termostatyczne zamontujesz bez narzędzi na większości grzejników. Termostat przewodowy zastępuje stary; jeśli masz wątpliwości co do okablowania kotła lub pompy ciepła, skorzystaj z pomocy fachowca.',
      },
    ],
  },
  sv: {
    name: 'Smarta termostater och elementtermostater',
    h1: `Black Friday ${Y}: smarta termostater att hålla koll på`,
    metaTitle: `Black Friday ${Y}: smarta termostater värda att bevaka`,
    metaDescription: `Smarta termostater och elementtermostater att hålla koll på inför Black Friday ${Y} (tado, Netatmo, Honeywell) – kontrollera kompatibiliteten först.`,
    blurb: 'tado, Netatmo, Honeywell: kontrollera först att de fungerar med pannan eller värmepumpen.',
    intro: 'En smart termostat gör bara nytta om den fungerar med din uppvärmning. Innan du slår till på ett erbjudande bör du kontrollera vilket system du har (panna, värmepump, vattenburna element) och, om du har värmepump, hur den styrs: via en på/av-kontakt eller OpenTherm.',
    faq: [
      {
        question: 'Smart termostat eller smarta elementtermostater?',
        answer: 'Termostaten styr pannan eller värmepumpen för hela bostaden. Elementtermostaterna sitter på de vattenburna elementen och reglerar varje rum för sig. Det går att kombinera båda.',
      },
      {
        question: 'Fungerar en smart termostat med värmepump?',
        answer: 'Ja, om den passar värmepumpens styrning: på/av för de flesta, OpenTherm för vissa. tado Heat Pump Optimizer X ansluts direkt till värmepumpar av flera märken.',
      },
      {
        question: 'Är installationen krånglig?',
        answer: 'Elementtermostater monteras utan verktyg på de flesta element. En trådbunden termostat ersätter den gamla. Är du osäker på hur pannan eller värmepumpen ska kopplas, ta hjälp av en fackman.',
      },
    ],
  },
  us: {
    name: 'Smart thermostats',
    h1: `Black Friday ${Y}: The Smart Thermostats Worth Watching`,
    metaTitle: `Black Friday ${Y}: Best Smart Thermostats to Watch`,
    metaDescription: `Smart thermostats worth watching this Black Friday ${Y}: ecobee and Google Nest. Furnace or heat pump, C-wire or not: what to check first.`,
    blurb: 'ecobee, Google Nest: check your HVAC system and C-wire first.',
    intro: "A smart thermostat only pays off if it works with your HVAC system. Before you look at any deal, check what you have (a forced-air furnace, a heat pump with or without aux heat, or a dual-fuel setup) and whether a C-wire (common wire) is connected behind your current thermostat.",
    faq: [
      {
        question: 'Do I need a C-wire for a smart thermostat?',
        answer: 'Many smart thermostats need steady 24 V power, which a C-wire (common wire) provides. Older thermostats often run without one, so take a photo of the wiring behind yours before you shop. Some models include an adapter for homes without a C-wire, and the brands\' online compatibility checkers tell you which models fit your wiring.',
      },
      {
        question: 'Does a smart thermostat work with a heat pump?',
        answer: "Yes, most do, but match the stages your system has: heating and cooling stages plus auxiliary or emergency heat. The ecobee Smart Thermostat Premium handles two stages of heat pump heating and cooling plus two aux stages; the Google Nest Thermostat handles one stage plus aux or emergency heat. Check the brand's compatibility list for your exact system before you buy.",
      },
      {
        question: 'Is installation difficult?',
        answer: "Most smart thermostats are DIY installs: turn off power to the HVAC system at the breaker, label each wire and move it to the new base. They're made for low-voltage (24 V) systems, not line-voltage electric baseboard heaters. If you're unsure about the wiring, call an HVAC technician. Before you buy, check your utility's website: many utilities offer rebates on ENERGY STAR certified smart thermostats.",
      },
    ],
  },
  ca: {
    name: 'Smart thermostats',
    h1: `Black Friday ${Y}: the smart thermostats worth watching`,
    metaTitle: `Black Friday ${Y}: Smart Thermostats Worth Watching`,
    metaDescription: `Smart thermostats worth watching this Black Friday ${Y}: ecobee and Google Nest. Furnace, heat pump or baseboard heaters: check compatibility first.`,
    blurb: 'ecobee, Google Nest: check compatibility with your furnace, heat pump or baseboard heaters first.',
    intro: "A smart thermostat only pays off if it works with your heating system. ecobee and Google Nest models are built for low-voltage (24 V) systems such as furnaces, central air and heat pumps. Electric baseboard heaters, the main heating in nearly a quarter of Canadian homes and more than half of Quebec homes, run on line voltage and need a thermostat designed for them. Check your system on the maker's compatibility list, and see whether your province or utility offers a smart thermostat rebate, as Ontario's Home Renovation Savings Program does.",
    faq: [
      {
        question: 'Smart thermostat for a furnace or for baseboard heaters?',
        answer: "A low-voltage smart thermostat, such as an ecobee or Google Nest model, controls central heating (a furnace, heat pump or boiler) for the whole home from one spot. Electric baseboard heaters work room by room, each with its own line-voltage thermostat on the wall, so going smart there means a line-voltage smart thermostat for each room or zone.",
      },
      {
        question: 'Does a smart thermostat work with a heat pump?',
        answer: "Yes, if it supports your heat pump's setup, including auxiliary or emergency heat. The ecobee Smart Thermostat Premium handles two stages of heating and cooling plus two stages of auxiliary heat; the Google Nest Thermostat works with one stage of heating and cooling plus auxiliary or emergency heat. Check the maker's compatibility list for your system before you buy.",
      },
      {
        question: 'Is installation difficult?',
        answer: "Replacing a low-voltage thermostat on a furnace or heat pump is a common DIY job: turn off the power to the system, label the wires and follow the app's setup steps. The ecobee Smart Thermostat Premium comes with a Power Extender Kit for homes without a C wire. A baseboard thermostat runs on line voltage, so if you're unsure about that wiring, hire a licensed electrician; electrical work rules are set by each province and territory.",
      },
    ],
  },
}
