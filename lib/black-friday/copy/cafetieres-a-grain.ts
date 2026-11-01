import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'
import type { BlackFridayCategoryCopy } from '../types'

export const BEAN_TO_CUP_COPY: Record<Lang, BlackFridayCategoryCopy> = {
  fr: {
    name: 'Machines à café à grain',
    h1: `Black Friday ${Y} : les machines à café à grain à surveiller`,
    metaTitle: `Black Friday ${Y} : machines à café à grain`,
    metaDescription: `Machines à café à grain à surveiller pour le Black Friday ${Y} : De'Longhi, Philips, Krups. Système lait, entretien, réservoir : ce qu'il faut vérifier.`,
    blurb: "De'Longhi, Philips, Krups : le système lait et l'entretien avant tout.",
    intro: "Une machine à café à grain s'achète pour plusieurs années. Pendant le Black Friday, comparez d'abord le système lait et la facilité d'entretien : au quotidien, ils comptent plus que le nombre de recettes.",
    faq: [
      {
        question: 'Carafe à lait ou buse vapeur ?',
        answer: "Une carafe ou un système lait automatique prépare cappuccinos et latte macchiatos d'une seule touche. Une buse vapeur demande un peu de pratique mais se nettoie facilement. Si vous buvez surtout des expressos, le système lait importe peu.",
      },
      {
        question: 'Une application est-elle utile sur une machine à café ?',
        answer: "Rarement indispensable : elle sert surtout à mémoriser des boissons ou à suivre l'entretien. Les machines de cette sélection se règlent très bien directement sur l'appareil.",
      },
      {
        question: 'Quel entretien prévoir ?',
        answer: "Rincer le circuit lait après usage, vider le bac à marc et détartrer selon la dureté de votre eau. Un système lait sans tube, comme le LatteGo de Philips, se démonte et se lave plus vite.",
      },
    ],
  },
  en: {
    name: 'Bean-to-cup coffee machines',
    h1: `Black Friday ${Y}: the bean-to-cup coffee machines worth watching`,
    metaTitle: `Black Friday ${Y}: Bean-to-Cup Coffee Machines`,
    metaDescription: `Bean-to-cup coffee machines worth watching this Black Friday ${Y}: De'Longhi, Philips, Krups. Milk system, cleaning, tank: what to check.`,
    blurb: "De'Longhi, Philips, Krups: the milk system and cleaning come first.",
    intro: 'A bean-to-cup machine is bought for years. During Black Friday, compare the milk system and how easy it is to clean first: day to day, they matter more than the number of recipes.',
    faq: [
      {
        question: 'Milk carafe or steam wand?',
        answer: 'A carafe or automatic milk system makes cappuccinos and latte macchiatos at one touch. A steam wand takes a little practice but is easy to clean. If you mostly drink espresso, the milk system matters little.',
      },
      {
        question: 'Is an app useful on a coffee machine?',
        answer: 'Rarely essential: it mainly stores drinks or tracks maintenance. The machines in this selection are easy to set up directly on the machine.',
      },
      {
        question: 'What maintenance should I expect?',
        answer: 'Rinse the milk circuit after use, empty the grounds container and descale according to your water hardness. A tube-free milk system, such as Philips LatteGo, comes apart and washes faster.',
      },
    ],
  },
  de: {
    name: 'Kaffeevollautomaten',
    h1: `Black Friday ${Y}: Diese Kaffeevollautomaten lohnen den Blick`,
    metaTitle: `Black Friday ${Y}: Kaffeevollautomaten im Blick`,
    metaDescription: `Kaffeevollautomaten für den Black Friday ${Y}: De'Longhi, Philips, Krups. Milchsystem, Reinigung, Wassertank: Das sollten Sie vor dem Kauf prüfen.`,
    blurb: "De'Longhi, Philips, Krups: Milchsystem und Reinigung zuerst.",
    intro: 'Einen Kaffeevollautomaten kauft man für Jahre. Vergleichen Sie am Black Friday zuerst das Milchsystem und den Reinigungsaufwand: Im Alltag zählen sie mehr als die Zahl der Rezepte.',
    faq: [
      {
        question: 'Milchkaraffe oder Dampfdüse?',
        answer: 'Eine Karaffe oder ein automatisches Milchsystem bereitet Cappuccino und Latte macchiato auf Knopfdruck zu. Eine Dampfdüse braucht etwas Übung, lässt sich aber leicht reinigen. Wer vor allem Espresso trinkt, braucht kaum ein Milchsystem.',
      },
      {
        question: 'Ist eine App bei einer Kaffeemaschine nützlich?',
        answer: 'Selten unverzichtbar: Sie speichert vor allem Getränke oder erinnert an die Pflege. Die Geräte dieser Auswahl lassen sich direkt am Gerät gut einstellen.',
      },
      {
        question: 'Welche Pflege ist nötig?',
        answer: 'Den Milchkreislauf nach Gebrauch spülen, den Tresterbehälter leeren und je nach Wasserhärte entkalken. Ein Milchsystem ohne Schläuche wie Philips LatteGo ist schneller zerlegt und gereinigt.',
      },
    ],
  },
  es: {
    name: 'Cafeteras superautomáticas',
    h1: `Black Friday ${Y}: las cafeteras superautomáticas que merece la pena seguir`,
    metaTitle: `Black Friday ${Y}: cafeteras superautomáticas`,
    metaDescription: `Cafeteras superautomáticas a seguir en el Black Friday ${Y}: De'Longhi, Philips, Krups. Sistema de leche, limpieza, depósito: qué comprobar.`,
    blurb: "De'Longhi, Philips, Krups: primero el sistema de leche y la limpieza.",
    intro: 'Una cafetera superautomática se compra para años. Durante el Black Friday, compara primero el sistema de leche y lo fácil que es de limpiar: en el día a día importan más que el número de recetas.',
    faq: [
      {
        question: '¿Jarra de leche o vaporizador?',
        answer: 'Una jarra o un sistema de leche automático prepara capuchinos y latte macchiato con un solo toque. Un vaporizador requiere algo de práctica, pero se limpia fácilmente. Si tomas sobre todo espresso, el sistema de leche importa poco.',
      },
      {
        question: '¿Es útil una app en una cafetera?',
        answer: 'Rara vez imprescindible: sirve sobre todo para guardar bebidas o seguir el mantenimiento. Las cafeteras de esta selección se ajustan sin problema desde la propia máquina.',
      },
      {
        question: '¿Qué mantenimiento requiere?',
        answer: 'Enjuagar el circuito de leche tras usarlo, vaciar el depósito de posos y descalcificar según la dureza del agua. Un sistema de leche sin tubos, como el LatteGo de Philips, se desmonta y se lava más rápido.',
      },
    ],
  },
  it: {
    name: 'Macchine da caffè superautomatiche',
    h1: `Black Friday ${Y}: le macchine da caffè superautomatiche da tenere d'occhio`,
    metaTitle: `Black Friday ${Y}: macchine da caffè superautomatiche`,
    metaDescription: `Superautomatiche da tenere d'occhio per il Black Friday ${Y}: De'Longhi, Philips, Krups. Sistema latte, pulizia, serbatoio: cosa verificare.`,
    blurb: "De'Longhi, Philips, Krups: prima il sistema latte e la pulizia.",
    intro: 'Una superautomatica si compra per anni. Durante il Black Friday, confronta prima il sistema latte e la facilità di pulizia: nella vita di tutti i giorni contano più del numero di ricette.',
    faq: [
      {
        question: 'Caraffa del latte o lancia vapore?',
        answer: 'Una caraffa o un sistema latte automatico prepara cappuccini e latte macchiato con un solo tocco. La lancia vapore richiede un po’ di pratica ma si pulisce facilmente. Se bevi soprattutto espresso, il sistema latte conta poco.',
      },
      {
        question: 'Un’app è utile su una macchina da caffè?',
        answer: 'Raramente indispensabile: serve soprattutto a memorizzare bevande o a seguire la manutenzione. Le macchine di questa selezione si regolano senza problemi direttamente dalla macchina.',
      },
      {
        question: 'Che manutenzione serve?',
        answer: 'Risciacquare il circuito del latte dopo l’uso, svuotare il cassetto dei fondi e decalcificare in base alla durezza dell’acqua. Un sistema latte senza tubi, come il LatteGo di Philips, si smonta e si lava più in fretta.',
      },
    ],
  },
  nl: {
    name: 'Volautomatische koffiemachines',
    h1: `Black Friday ${Y}: de volautomaten om in de gaten te houden`,
    metaTitle: `Black Friday ${Y}: volautomatische koffiemachines`,
    metaDescription: `Volautomatische koffiemachines om te volgen tijdens Black Friday ${Y}: De'Longhi, Philips, Krups. Melksysteem, onderhoud, waterreservoir: wat je checkt.`,
    blurb: "De'Longhi, Philips, Krups: eerst het melksysteem en het onderhoud.",
    intro: 'Een volautomaat koop je voor jaren. Vergelijk tijdens Black Friday eerst het melksysteem en hoe makkelijk hij schoon te maken is: in het dagelijks gebruik tellen die meer dan het aantal recepten.',
    faq: [
      {
        question: 'Melkkan of stoompijpje?',
        answer: 'Een melkkan of automatisch melksysteem maakt cappuccino en latte macchiato met één druk op de knop. Een stoompijpje vraagt wat oefening, maar is makkelijk schoon te maken. Drink je vooral espresso, dan doet het melksysteem er weinig toe.',
      },
      {
        question: 'Is een app nuttig op een koffiemachine?',
        answer: 'Zelden onmisbaar: hij bewaart vooral drankjes of houdt het onderhoud bij. De machines in deze selectie stel je prima in op het apparaat zelf.',
      },
      {
        question: 'Welk onderhoud moet je verwachten?',
        answer: 'Het melkcircuit na gebruik spoelen, de koffiedikbak legen en ontkalken volgens de hardheid van je water. Een melksysteem zonder slangetjes, zoals Philips LatteGo, haal je sneller uit elkaar en maak je sneller schoon.',
      },
    ],
  },
  pl: {
    name: 'Automatyczne ekspresy do kawy',
    h1: `Black Friday ${Y}: automatyczne ekspresy do kawy, które warto mieć na oku`,
    metaTitle: `Black Friday ${Y}: automatyczne ekspresy do kawy`,
    metaDescription: `Automatyczne ekspresy do kawy na Black Friday ${Y}: De'Longhi, Philips, Krups. System mleka, konserwacja, zbiornik: co sprawdzić.`,
    blurb: "De'Longhi, Philips, Krups: najpierw system mleka i konserwacja.",
    intro: 'Automatyczny ekspres do kawy kupuje się na lata. Podczas Black Friday porównaj najpierw system mleka i łatwość czyszczenia: na co dzień liczą się bardziej niż liczba dostępnych napojów.',
    faq: [
      {
        question: 'Dzbanek na mleko czy dysza parowa?',
        answer: 'Dzbanek lub automatyczny system mleka przygotowuje cappuccino i latte macchiato jednym dotknięciem. Dysza parowa wymaga nieco wprawy, ale łatwo ją wyczyścić. Jeśli pijesz głównie espresso, system mleka ma niewielkie znaczenie.',
      },
      {
        question: 'Czy aplikacja przydaje się w ekspresie do kawy?',
        answer: 'Rzadko jest niezbędna: służy głównie do zapamiętywania napojów lub śledzenia konserwacji. Ekspresy z tego zestawienia bez problemu ustawisz bezpośrednio na urządzeniu.',
      },
      {
        question: 'Jak wygląda konserwacja ekspresu?',
        answer: 'Po użyciu przepłucz układ mleka, opróżnij pojemnik na fusy i odkamieniaj ekspres zgodnie z twardością wody. System mleka bez rurek, taki jak Philips LatteGo, szybciej się rozkłada i myje.',
      },
    ],
  },
  sv: {
    name: 'Helautomatiska kaffemaskiner',
    h1: `Black Friday ${Y}: helautomatiska kaffemaskiner att hålla koll på`,
    metaTitle: `Black Friday ${Y}: helautomatiska kaffemaskiner`,
    metaDescription: `Helautomatiska kaffemaskiner att hålla koll på inför Black Friday ${Y}: De'Longhi, Philips och Krups. Kontrollera mjölksystem, skötsel och vattentank.`,
    blurb: "De'Longhi, Philips, Krups: mjölksystemet och skötseln väger tyngst.",
    intro: 'En helautomatisk kaffemaskin köper du för att ha i många år. När du går igenom Black Friday-erbjudandena, jämför först mjölksystemet och hur lätt maskinen är att rengöra: i vardagen betyder de mer än antalet drycker i menyn.',
    faq: [
      {
        question: 'Mjölkkanna eller ångrör?',
        answer: 'En mjölkkanna eller ett automatiskt mjölksystem gör cappuccino och latte macchiato med en knapptryckning. Ett ångrör kräver lite övning men är lätt att rengöra. Dricker du mest espresso spelar mjölksystemet liten roll.',
      },
      {
        question: 'Gör en app någon nytta på en kaffemaskin?',
        answer: 'Den är sällan nödvändig: den används mest för att spara favoritdrycker eller hålla koll på skötseln. Maskinerna i det här urvalet är lätta att ställa in direkt på apparaten.',
      },
      {
        question: 'Vilken skötsel kräver maskinen?',
        answer: 'Skölj mjölksystemet efter användning, töm sumpbehållaren och avkalka efter hur hårt ditt vatten är. Ett mjölksystem utan slangar, som Philips LatteGo, är snabbare att ta isär och diska.',
      },
    ],
  },
  us: {
    name: 'Super-automatic espresso machines',
    h1: `Black Friday ${Y}: The Super-Automatic Espresso Machines Worth Watching`,
    metaTitle: `Black Friday ${Y}: Best Super-Automatic Espresso Machines`,
    metaDescription: `Super-automatic espresso machines worth watching this Black Friday ${Y}: De'Longhi, Philips and Krups. Milk system, cleaning, water tank: what to check.`,
    blurb: "De'Longhi, Philips, Krups: the milk system and cleaning come first.",
    intro: "A super-automatic espresso machine is a purchase you'll live with for years. This Black Friday, compare the milk system and how easy the machine is to clean before anything else: day to day, they matter more than the length of the drink menu.",
    faq: [
      {
        question: 'Milk carafe or steam wand?',
        answer: 'A carafe or automatic milk system makes cappuccinos and latte macchiatos at the touch of a button. A steam wand takes a little practice but is easy to clean. If you mostly drink espresso, the milk system hardly matters.',
      },
      {
        question: 'Is an app useful on an espresso machine?',
        answer: 'Rarely essential: it mostly saves your favorite drinks or tracks maintenance. The models in this roundup are easy to adjust right from the control panel.',
      },
      {
        question: 'What maintenance should I expect?',
        answer: 'Rinse the milk circuit after each use, empty the grounds container and descale as often as your water hardness calls for. A tube-free milk system, such as Philips LatteGo, comes apart and washes faster.',
      },
    ],
  },
  ca: {
    name: 'Super-automatic espresso machines',
    h1: `Black Friday ${Y}: the super-automatic espresso machines worth watching`,
    metaTitle: `Black Friday ${Y}: Super-Automatic Espresso Machines`,
    metaDescription: `Super-automatic espresso machines worth watching this Black Friday ${Y}: De'Longhi and Philips. Milk system, cleaning, water tank: what to check.`,
    blurb: "De'Longhi, Philips: the milk system and cleaning come first.",
    intro: "A super-automatic espresso machine is something you'll use for years. During Black Friday, start by comparing the milk system and how easy the machine is to clean. Day to day, those matter more than the number of drinks on the menu.",
    faq: [
      {
        question: 'Milk carafe or steam wand?',
        answer: 'A carafe or automatic milk system makes cappuccinos and latte macchiatos at the touch of a button. A steam wand takes a little practice but is easy to clean. If you mostly drink espresso, the milk system hardly matters.',
      },
      {
        question: 'Is an app useful on an espresso machine?',
        answer: "It's rarely essential: it's mainly for saving your favourite drinks or keeping track of maintenance. The machines in this selection are easy to adjust right on the machine.",
      },
      {
        question: 'What maintenance should I expect?',
        answer: 'Rinse the milk system after each use, empty the grounds container and descale as often as your water hardness requires. A tube-free milk system, such as Philips LatteGo, comes apart and washes faster.',
      },
    ],
  },
}
