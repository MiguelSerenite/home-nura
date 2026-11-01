/**
 * Answer-first verdicts ("What is the best X?") for comparison articles,
 * quoted by search engines and AI assistants. Picks are taken from each
 * article's own recommendations; models must be linkable through
 * getArticleRecommendations (enforced by tests/lib/quick-answers.test.ts).
 * The US and Canadian versions show their market's own picks instead
 * (data/market-picks, lib/market-models).
 */
import type { Lang } from '@/lib/i18n'
import { getArticleRecommendations } from '@/lib/blog/article-products'
import { isNorthAmericanMarket, marketPicks, type NorthAmericanMarket } from '@/lib/market-models'
import { offerForMarketName } from '@/lib/market-models/offers'
import { productPhoto } from '@/lib/product-images'
import type { ProductPhoto } from '@/lib/product-photo'

interface QuickAnswerData {
  question: Record<Lang, string>
  picks: ReadonlyArray<{ model: string; role: Record<Lang, string>; why: Record<Lang, string> }>
}

export const QUICK_ANSWERS: Record<string, QuickAnswerData> = {
  "robot-aspirateur-poils-animaux": {
    "question": {
      "fr": "Quel est le meilleur robot aspirateur pour poils d'animaux en 2026 ?",
      "en": "What is the best robot vacuum for pet hair in 2026?",
      "de": "Welcher ist der beste Saugroboter für Tierhaare 2026?",
      "es": "¿Cuál es el mejor robot aspirador para pelo de mascotas en 2026?",
      "it": "Qual è il miglior robot aspirapolvere per peli di animali nel 2026?",
      "nl": "Wat is de beste robotstofzuiger voor dierenharen in 2026?",
      "pl": "Jaki jest najlepszy robot sprzątający do sierści zwierząt w 2026 roku?",
      "sv": "Vilken robotdammsugare är bäst för djurhår 2026?",
      "us": "What is the best robot vacuum for pet hair in 2026?",
      "ca": "What is the best robot vacuum for pet hair in 2026?"
    },
    "picks": [
      {
        "model": "Roborock S8 MaxV Ultra",
        "role": {
          "fr": "Meilleur choix pour les animaux",
          "en": "Top pick for pets",
          "de": "Erste Wahl für Haustiere",
          "es": "Mejor para mascotas",
          "it": "La scelta migliore per chi ha animali",
          "nl": "Topkeuze voor huisdieren",
          "pl": "Najlepszy wybór dla właścicieli zwierząt",
          "sv": "Toppval för hem med husdjur",
          "us": "Best for pets",
          "ca": "Top pick for pets"
        },
        "why": {
          "fr": "Sa brosse DuoRoller en caoutchouc évite les emmêlements même après des semaines d'usage, idéal pour un ou deux animaux et qui veut fiabilité et bon SAV.",
          "en": "Its rubber DuoRoller brushes keep tangles at bay week after week. Ideal for one or two pets and for anyone who wants reliability and good after-sales service.",
          "de": "Die Gummi-DuoRoller-Bürste vermeidet selbst nach Wochen Verheddern, ideal für ein bis zwei Tiere und alle, die Zuverlässigkeit und guten Service wollen.",
          "es": "Su cepillo DuoRoller de goma evita enredos incluso tras semanas de uso, ideal para una o dos mascotas y para quien busca fiabilidad y un buen servicio técnico.",
          "it": "La spazzola DuoRoller in gomma non si aggroviglia nemmeno dopo settimane d'uso: ideale con uno o due animali e per chi vuole affidabilità e una buona assistenza post-vendita.",
          "nl": "De rubberen DuoRoller-borstel voorkomt klitten zelfs na weken gebruik, ideaal voor een of twee huisdieren en wie betrouwbaarheid en goede service wil.",
          "pl": "Gumowa szczotka DuoRoller nie oplata się sierścią nawet po wielu tygodniach używania. Dobry wybór przy jednym lub dwóch zwierzakach, jeśli cenisz niezawodność i sprawny serwis.",
          "sv": "Gummiborsten DuoRoller förblir fri från hårtovor även efter flera veckors användning, perfekt för ett eller två husdjur och för dig som vill ha pålitlighet och bra service.",
          "us": "Its rubber DuoRoller brush resists tangles even after weeks of use, ideal for homes with one or two pets and anyone who wants reliability and solid customer support.",
          "ca": "Its rubber DuoRoller brush avoids tangles even after weeks of use, ideal for one or two pets and anyone who wants reliability and good support."
        }
      },
      {
        "model": "Ecovacs Deebot T30 Pro",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "C'est le modèle le plus accessible, avec une brosse ZeroTangle efficace et le plus grand bac de la sélection, idéal pour un premier robot en foyer avec animal.",
          "en": "The most affordable model here, with an effective ZeroTangle brush and the largest dustbin in the line-up: ideal as a first robot vacuum in a home with pets.",
          "de": "Es ist das günstigste Modell, mit wirksamer ZeroTangle-Bürste und dem größten Staubbehälter der Auswahl, ideal als erster Roboter im Haushalt mit Tier.",
          "es": "Es el modelo más asequible, con un cepillo ZeroTangle eficaz y el depósito más grande de la selección: ideal como primer robot si tienes mascota.",
          "it": "È il modello meno caro, con un'efficace spazzola ZeroTangle e il contenitore della polvere più capiente della selezione: ideale come primo robot in una casa con animali.",
          "nl": "Het is het meest betaalbare model, met een effectieve ZeroTangle-borstel en de grootste stofbak van de selectie, ideaal als eerste robot bij huisdieren.",
          "pl": "To najbardziej przystępny cenowo model w zestawieniu: ma skuteczną szczotkę ZeroTangle i największy pojemnik na kurz, więc dobrze sprawdzi się jako pierwszy robot w domu ze zwierzęciem.",
          "sv": "Instegsmodellen i urvalet, med effektiv ZeroTangle-borste och störst dammbehållare av alla, perfekt som första robot i ett hem med husdjur.",
          "us": "It's the most affordable model, with an effective ZeroTangle brush and the largest dustbin in the lineup, ideal as a first robot vacuum for a home with pets.",
          "ca": "The most affordable model here, with an effective ZeroTangle brush and the largest dust bin in the selection, ideal as a first robot in a home with pets."
        }
      },
      {
        "model": "iRobot Roomba j9+",
        "role": {
          "fr": "Référence anti-emmêlement",
          "en": "The anti-tangle benchmark",
          "de": "Referenz gegen Verheddern",
          "es": "El referente antienredos",
          "it": "Il migliore contro i grovigli",
          "nl": "Anti-klitreferentie",
          "pl": "Najlepszy w walce z plątaniem się sierści",
          "sv": "Bäst mot hårtrassel",
          "us": "The anti-tangle benchmark",
          "ca": "Anti-tangle reference"
        },
        "why": {
          "fr": "Sa double brosse 100 % caoutchouc est idéale pour les chiens à poils longs comme le Golden Retriever, quand l'anti-emmêlement est la priorité absolue.",
          "en": "Its twin 100% rubber brushes are ideal for long-haired dogs such as Golden Retrievers, when avoiding tangles is your top priority.",
          "de": "Die doppelte Bürste aus 100 % Gummi passt zu langhaarigen Hunden wie dem Golden Retriever, wenn Schutz vor Verheddern oberste Priorität hat.",
          "es": "Su doble cepillo 100 % de goma es ideal para perros de pelo largo como el Golden Retriever, cuando lo prioritario es evitar enredos.",
          "it": "La doppia spazzola interamente in gomma è ideale per i cani a pelo lungo come il golden retriever, se la tua priorità assoluta è evitare i grovigli.",
          "nl": "De dubbele borstel van 100% rubber past bij langharige honden zoals de Golden Retriever, wanneer anti-klitten de absolute prioriteit is.",
          "pl": "Podwójna szczotka w 100% z gumy to dobry wybór przy długowłosych psach, takich jak golden retriever, gdy priorytetem jest to, by sierść się nie plątała.",
          "sv": "Den dubbla borsten i 100 % gummi passar långhåriga hundar som golden retriever, när skydd mot trassel är det absolut viktigaste.",
          "us": "Its dual 100% rubber brush rolls suit long-haired dogs such as Golden Retrievers, when tangle-free cleaning is the top priority.",
          "ca": "Its dual 100% rubber brush suits long-haired dogs such as the Golden Retriever, when anti-tangle performance is the absolute priority."
        }
      },
      {
        "model": "Dreame X40 Ultra",
        "role": {
          "fr": "Puissance brute",
          "en": "Raw power",
          "de": "Rohe Saugkraft",
          "es": "Máxima potencia",
          "it": "Potenza pura",
          "nl": "Pure kracht",
          "pl": "Maksymalna moc",
          "sv": "Maximal sugkraft",
          "us": "Raw power",
          "ca": "Raw power"
        },
        "why": {
          "fr": "Sa forte aspiration extrait les poils des tapis épais et moquettes, parfait pour deux animaux ou plus et de grandes maisons, avec lavage en un passage.",
          "en": "Strong suction pulls hair out of thick rugs and carpets. Perfect for two or more pets and large homes, and it vacuums and mops in one pass.",
          "de": "Seine starke Saugkraft holt Haare aus dicken Teppichen, passend für zwei oder mehr Tiere und große Häuser, mit Saugen und Wischen in einem Durchgang.",
          "es": "Su gran potencia de succión saca el pelo de alfombras gruesas y moquetas: perfecto para dos o más mascotas y casas grandes, y aspira y friega en una sola pasada.",
          "it": "La forte aspirazione estrae i peli da tappeti spessi e moquette: perfetto con due o più animali e nelle case grandi, aspira e lava in un solo passaggio.",
          "nl": "Zijn sterke zuigkracht haalt haren uit dikke tapijten, geschikt voor twee of meer huisdieren en grote huizen, met zuigen en dweilen in één keer.",
          "pl": "Duża siła ssania wyciąga sierść z grubych dywanów i wykładzin. Sprawdzi się przy dwóch lub więcej zwierzętach i w dużych domach, a do tego odkurza i myje podłogę za jednym przejazdem.",
          "sv": "Den starka sugkraften drar upp hår ur tjocka mattor och heltäckningsmattor, perfekt för två eller fler husdjur och stora hem, och den dammsuger och moppar i ett svep.",
          "us": "Its strong suction pulls hair out of thick rugs and wall-to-wall carpet, a good fit for two or more pets and large homes, and it vacuums and mops in one pass.",
          "ca": "Its strong suction pulls hair out of thick rugs and carpets, a fit for two or more pets and large homes, with vacuuming and mopping in one pass."
        }
      }
    ]
  },
  "comment-choisir-airfryer-famille": {
    "question": {
      "fr": "Quel est le meilleur airfryer pour une famille en 2026 ?",
      "en": "What is the best air fryer for a family in 2026?",
      "de": "Was ist die beste Heißluftfritteuse für eine Familie 2026?",
      "es": "¿Cuál es la mejor freidora de aire para una familia en 2026?",
      "it": "Qual è la migliore friggitrice ad aria per una famiglia nel 2026?",
      "nl": "Wat is de beste airfryer voor een gezin in 2026?",
      "pl": "Jaka jest najlepsza frytkownica beztłuszczowa dla rodziny w 2026 roku?",
      "sv": "Vilken airfryer är bäst för en familj 2026?",
      "us": "What is the best air fryer for a family in 2026?",
      "ca": "What is the best air fryer for a family in 2026?"
    },
    "picks": [
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Idéal pour 4 à 5 personnes",
          "en": "Best for 4 to 5 people",
          "de": "Ideal für 4 bis 5 Personen",
          "es": "Ideal para 4 o 5 personas",
          "it": "Ideale per 4-5 persone",
          "nl": "Ideaal voor 4 tot 5 personen",
          "pl": "Idealna dla 4–5 osób",
          "sv": "Bäst för 4–5 personer",
          "us": "Best for families of 4 to 5",
          "ca": "Best for 4 to 5 people"
        },
        "why": {
          "fr": "Ses deux zones indépendantes de 4,75 litres et la fonction Sync, qui synchronise la fin des cuissons, en font le choix idéal des familles nombreuses.",
          "en": "With two independent 4.75-litre zones and a Sync function so both finish at the same time, it’s the ideal choice for large families.",
          "de": "Die zwei unabhängigen 4,75-Liter-Zonen und die Sync-Funktion, die beide Garvorgänge gleichzeitig beendet, machen ihn zur idealen Wahl für größere Familien.",
          "es": "Sus dos zonas independientes de 4,75 litros y la función Sync, que hace que las dos cocciones terminen a la vez, la convierten en la opción ideal para familias numerosas.",
          "it": "Le due zone indipendenti da 4,75 litri e la funzione Sync, che fa terminare le cotture nello stesso momento, la rendono la scelta ideale per le famiglie numerose.",
          "nl": "De twee onafhankelijke zones van 4,75 liter en de Sync-functie, die beide bereidingen tegelijk afrondt, maken hem ideaal voor grotere gezinnen.",
          "pl": "Dwie niezależne strefy po 4,75 l i funkcja Sync, dzięki której obie potrawy są gotowe w tym samym momencie, sprawiają, że to idealny wybór dla dużych rodzin.",
          "sv": "Två separata zoner på 4,75 liter och Sync-funktionen, som ser till att båda rätterna blir klara samtidigt, gör den till det självklara valet för större familjer.",
          "us": "Its two independent 5 qt (4.75 L) zones and the Sync function, which finishes both baskets at the same time, make it the ideal choice for larger families.",
          "ca": "Two independent 4.75-litre zones plus the Sync function, which makes both zones finish at the same time, make it the ideal choice for larger families."
        }
      },
      {
        "model": "Ninja Foodi FlexDrawer 10.4L Double Zone",
        "role": {
          "fr": "Idéal pour 5 à 6 personnes",
          "en": "Best for 5 to 6 people",
          "de": "Ideal für 5 bis 6 Personen",
          "es": "Ideal para 5 o 6 personas",
          "it": "Ideale per 5-6 persone",
          "nl": "Ideaal voor 5 tot 6 personen",
          "pl": "Idealna dla 5–6 osób",
          "sv": "Bäst för 5–6 personer",
          "us": "Best for families of 5 to 6",
          "ca": "Best for 5 to 6 people"
        },
        "why": {
          "fr": "Son méga tiroir de 10,4 litres fonctionne en une ou deux zones et accueille un poulet entier ou une grande quantité de frites.",
          "en": "Its 10.4-litre mega drawer works as one or two zones and holds a whole chicken or a big batch of chips.",
          "de": "Die 10,4-Liter-Megaschublade arbeitet als eine oder zwei Zonen und fasst ein ganzes Hähnchen oder eine große Menge Pommes.",
          "es": "Su megacajón de 10,4 litros funciona como una o dos zonas, y en él cabe un pollo entero o una buena tanda de patatas fritas.",
          "it": "L'enorme cassetto da 10,4 litri si usa come zona unica o diviso in due, e contiene un pollo intero o una grande quantità di patatine.",
          "nl": "De megalade van 10,4 liter werkt als één of twee zones en biedt plaats aan een hele kip of een grote hoeveelheid friet.",
          "pl": "Ogromna szuflada o pojemności 10,4 l może pracować jako jedna strefa lub dwie i zmieści całego kurczaka albo dużą porcję frytek.",
          "sv": "Den extra stora lådan på 10,4 liter kan användas som en eller två zoner och rymmer en hel kyckling eller en stor sats pommes frites.",
          "us": "Its 11 qt (10.4 L) mega drawer works as one or two zones and holds a whole chicken or a big batch of fries.",
          "ca": "Its 10.4-litre mega drawer works as one or two zones and holds a whole chicken or a large batch of fries."
        }
      },
      {
        "model": "Philips Airfryer Combi XXL Connecté - 8.3L",
        "role": {
          "fr": "Haut de gamme pour 6 personnes et plus",
          "en": "Premium for 6 or more people",
          "de": "Premium für 6 Personen und mehr",
          "es": "Gama alta para 6 o más personas",
          "it": "Top di gamma per 6 o più persone",
          "nl": "Topmodel voor 6 personen of meer",
          "pl": "Model premium dla 6 i więcej osób",
          "sv": "Premium för 6 personer eller fler",
          "us": "Premium pick for 6 or more people",
          "ca": "Premium for 6 or more people"
        },
        "why": {
          "fr": "Le haut de gamme absolu avec 8,3 litres, fonctions four, gril et déshydrateur et connectivité, un investissement qui remplace plusieurs appareils.",
          "en": "The very top of the range: 8.3 litres, oven, grill and dehydrator functions plus app connectivity, an investment that replaces several appliances.",
          "de": "Das absolute Spitzenmodell mit 8,3 Litern, Backofen-, Grill- und Dörrfunktion sowie Vernetzung, eine Investition, die mehrere Geräte ersetzt.",
          "es": "Lo más alto de la gama: 8,3 litros, funciones de horno, grill y deshidratador, y conectividad; una inversión que sustituye a varios aparatos.",
          "it": "Il top di gamma assoluto: 8,3 litri, funzioni forno, grill ed essiccatore e connettività; un acquisto che sostituisce più apparecchi.",
          "nl": "Het absolute topmodel met 8,3 liter, oven-, grill- en droogfuncties en connectiviteit, een investering die meerdere apparaten vervangt.",
          "pl": "Najwyższa półka: komora 8,3 l, funkcje piekarnika, grilla i suszenia oraz łączność z aplikacją. To inwestycja, która zastępuje kilka urządzeń.",
          "sv": "Toppmodellen med 8,3 liter, funktioner för ugn, grill och torkning av livsmedel samt uppkoppling, en investering som ersätter flera apparater.",
          "us": "The top-of-the-line option with 8.8 qt (8.3 L), oven, broil and dehydrator functions and smart connectivity, an investment that replaces several appliances.",
          "ca": "The top-end option with 8.3 litres, oven, broil and dehydrator functions and app control: an investment that replaces several appliances."
        }
      }
    ]
  },
  "centrale-vapeur-comparatif": {
    "question": {
      "fr": "Quelle est la meilleure centrale vapeur en 2026 ?",
      "en": "What is the best steam generator iron in 2026?",
      "de": "Was ist die beste Dampfbügelstation 2026?",
      "es": "¿Cuál es el mejor centro de planchado en 2026?",
      "it": "Qual è il miglior ferro da stiro con caldaia nel 2026?",
      "nl": "Wat is de beste stoomgenerator in 2026?",
      "pl": "Jaka jest najlepsza stacja parowa w 2026 roku?",
      "sv": "Vilken ångstation är bäst 2026?",
      "us": "What is the best steam generator iron in 2026?",
      "ca": "What is the best steam generator iron in 2026?"
    },
    "picks": [
      {
        "model": "Philips PerfectCare 8000 Series PSG8160/30",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Insgesamt die beste Wahl",
          "es": "Mejor en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "8,5 bars, 170 g/min de vapeur continue, réservoir de 1,8 L et OptimalTEMP : aucune température à régler.",
          "en": "8.5 bar, 170 g/min continuous steam, a 1.8 L tank and OptimalTEMP, so there’s no temperature to set.",
          "de": "8,5 bar, 170 g/min Dauerdampf, 1,8-l-Tank und OptimalTEMP: keine Temperatur einzustellen.",
          "es": "8,5 bares, 170 g/min de vapor continuo, depósito de 1,8 L y OptimalTEMP: no hay que ajustar la temperatura.",
          "it": "8,5 bar, 170 g/min di vapore continuo, serbatoio da 1,8 L e OptimalTEMP: nessuna temperatura da regolare.",
          "nl": "8,5 bar, 170 g/min continue stoom, tank van 1,8 l en OptimalTEMP: geen temperatuur instellen.",
          "pl": "8,5 bara, 170 g/min pary ciągłej, zbiornik 1,8 l i technologia OptimalTEMP – nie trzeba ustawiać temperatury.",
          "sv": "8,5 bar, 170 g/min kontinuerlig ånga, en tank på 1,8 liter och OptimalTEMP: ingen temperatur att ställa in.",
          "us": "8.5 bar of pressure, 170 g/min of continuous steam, a 61 fl oz (1.8 L) water tank and OptimalTEMP, so there's no temperature to set.",
          "ca": "8.5 bar, 170 g/min continuous steam, a 1.8 L tank and OptimalTEMP: no temperature to set."
        }
      },
      {
        "model": "Philips PerfectCare 7000 Series PSG7130/20",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "8 bars, 120 g/min, réservoir de 1,8 L, OptimalTEMP et arrêt automatique après 10 minutes.",
          "en": "8 bar, 120 g/min, a 1.8 L tank, OptimalTEMP and auto shut-off after 10 minutes.",
          "de": "8 bar, 120 g/min, 1,8-l-Tank, OptimalTEMP und Abschaltautomatik nach 10 Minuten.",
          "es": "8 bares, 120 g/min, depósito de 1,8 L, OptimalTEMP y apagado automático a los 10 minutos.",
          "it": "8 bar, 120 g/min, serbatoio da 1,8 L, OptimalTEMP e spegnimento automatico dopo 10 minuti.",
          "nl": "8 bar, 120 g/min, tank van 1,8 l, OptimalTEMP en automatische uitschakeling na 10 minuten.",
          "pl": "8 barów, 120 g/min, zbiornik 1,8 l, OptimalTEMP i automatyczne wyłączanie po 10 minutach.",
          "sv": "8 bar, 120 g/min, en tank på 1,8 liter, OptimalTEMP och automatisk avstängning efter 10 minuter.",
          "us": "8 bar, 120 g/min, a 61 fl oz (1.8 L) tank, OptimalTEMP and auto shutoff after 10 minutes.",
          "ca": "8 bar, 120 g/min, a 1.8 L tank, OptimalTEMP and auto shut-off after 10 minutes."
        }
      },
      {
        "model": "Laurastar Smart U",
        "role": {
          "fr": "Le seul vraiment connecté",
          "en": "The only truly smart one",
          "de": "Die einzige wirklich vernetzte",
          "es": "El único conectado de verdad",
          "it": "L'unico davvero smart",
          "nl": "De enige echt verbonden",
          "pl": "Jedyny naprawdę inteligentny",
          "sv": "Den enda som är riktigt uppkopplad",
          "us": "The only true smart model",
          "ca": "The only truly smart one"
        },
        "why": {
          "fr": "Centre de repassage avec table active et application Bluetooth de tutoriels, pour une finition premium.",
          "en": "An ironing system with an active ironing board and a Bluetooth app with tutorials, for a premium finish.",
          "de": "Bügelsystem mit aktivem Bügeltisch und Bluetooth-App mit Anleitungen für ein Premium-Finish.",
          "es": "Centro de planchado con tabla activa y app de tutoriales por Bluetooth, para un acabado impecable.",
          "it": "Sistema stirante con asse attivo e app Bluetooth con tutorial, per un risultato impeccabile.",
          "nl": "Strijksysteem met actieve plank en Bluetooth-app met tutorials, voor een premium afwerking.",
          "pl": "System do prasowania z aktywną deską i aplikacją Bluetooth z samouczkami – dla perfekcyjnie wyprasowanych ubrań.",
          "sv": "Strykstation med aktiv strykbräda och en Bluetooth-app med guider, för ett resultat i premiumklass.",
          "us": "An ironing system with an active ironing board and a Bluetooth app with tutorials, for professional-looking results.",
          "ca": "Ironing system with an active board and a Bluetooth tutorial app, for a premium finish."
        }
      }
    ]
  },
  "reveil-lumiere-simulateur-aube-comparatif": {
    "question": {
      "fr": "Quel est le meilleur réveil lumière en 2026 ?",
      "en": "What is the best wake-up light in 2026?",
      "de": "Welcher ist der beste Lichtwecker 2026?",
      "es": "¿Cuál es el mejor despertador de luz en 2026?",
      "it": "Qual è la migliore sveglia luminosa nel 2026?",
      "nl": "Wat is het beste wake-up light in 2026?",
      "pl": "Jaki jest najlepszy budzik świetlny w 2026 roku?",
      "sv": "Vilken väckarklocka med ljus är bäst 2026?",
      "us": "What is the best sunrise alarm clock in 2026?",
      "ca": "What is the best wake-up light in 2026?"
    },
    "picks": [
      {
        "model": "Philips SmartSleep Sleep & Wake-up Light HF3650/01",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Aube colorée jusqu'à 310 lux, coucher de soleil, respiration guidée RelaxBreathe, 10 sons et radio FM.",
          "en": "Coloured sunrise up to 310 lux, sunset mode, RelaxBreathe guided breathing, 10 sounds and FM radio.",
          "de": "Farbiger Sonnenaufgang bis 310 Lux, Sonnenuntergang, geführte Atmung RelaxBreathe, 10 Klänge und UKW-Radio.",
          "es": "Amanecer de colores hasta 310 lux, atardecer, respiración guiada RelaxBreathe, 10 sonidos y radio FM.",
          "it": "Alba colorata fino a 310 lux, tramonto, respirazione guidata RelaxBreathe, 10 suoni e radio FM.",
          "nl": "Gekleurde zonsopgang tot 310 lux, zonsondergang, begeleide ademhaling RelaxBreathe, 10 geluiden en fm-radio.",
          "pl": "Symulacja kolorowego świtu do 310 luksów, symulacja zachodu słońca, ćwiczenia oddechowe RelaxBreathe, 10 dźwięków i radio FM.",
          "sv": "Färgad soluppgång upp till 310 lux, solnedgång, guidad andning med RelaxBreathe, 10 ljud och FM-radio.",
          "us": "Colored sunrise up to 310 lux, sunset mode, RelaxBreathe guided breathing, 10 sounds and FM radio.",
          "ca": "Coloured sunrise up to 310 lux, sunset mode, RelaxBreathe guided breathing, 10 sounds and FM radio."
        }
      },
      {
        "model": "Philips Wake-up Light HF3520/01",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "L'essentiel du HF3650 : aube colorée de 20 à 40 minutes, 300 lux, coucher de soleil, 5 sons et radio FM.",
          "en": "The essentials of the HF3650: a 20- to 40-minute coloured sunrise, 300 lux, sunset mode, 5 sounds and FM radio.",
          "de": "Das Wesentliche des HF3650: farbiger Sonnenaufgang von 20 bis 40 Minuten, 300 Lux, Sonnenuntergang, 5 Klänge, UKW.",
          "es": "Lo esencial del HF3650: amanecer de colores de 20 a 40 minutos, 300 lux, atardecer, 5 sonidos y radio FM.",
          "it": "Le funzioni essenziali della HF3650: alba colorata da 20 a 40 minuti, 300 lux, tramonto, 5 suoni e radio FM.",
          "nl": "De kern van de HF3650: gekleurde zonsopgang van 20 tot 40 minuten, 300 lux, zonsondergang, 5 geluiden en fm-radio.",
          "pl": "Najważniejsze funkcje modelu HF3650: symulacja kolorowego świtu trwająca 20–40 minut, 300 luksów, zachód słońca, 5 dźwięków i radio FM.",
          "sv": "Det viktigaste från HF3650: färgad soluppgång på 20–40 minuter, 300 lux, solnedgång, 5 ljud och FM-radio.",
          "us": "The essentials of the HF3650: a 20- to 40-minute colored sunrise, 300 lux, sunset mode, 5 sounds and FM radio.",
          "ca": "The essentials of the HF3650: 20 to 40 minute coloured sunrise, 300 lux, sunset mode, 5 sounds and FM radio."
        }
      },
      {
        "model": "Lumie Bodyclock Shine 300",
        "role": {
          "fr": "Idéal pour les réveils difficiles",
          "en": "Best for heavy sleepers",
          "de": "Ideal für Morgenmuffel",
          "es": "Ideal si te cuesta despertarte",
          "it": "Ideale per chi fatica a svegliarsi",
          "nl": "Ideaal voor moeilijke opstaanders",
          "pl": "Dla osób, którym trudno się obudzić",
          "sv": "Bäst för morgontrötta",
          "us": "Best for heavy sleepers",
          "ca": "Best for heavy sleepers"
        },
        "why": {
          "fr": "Aube et crépuscule réglables de 15 à 90 minutes, 15 sons, radio FM et écran à atténuation automatique.",
          "en": "Sunrise and sunset adjustable from 15 to 90 minutes, 15 sounds, FM radio and an auto-dimming display.",
          "de": "Sonnenauf- und -untergang von 15 bis 90 Minuten einstellbar, 15 Klänge, UKW-Radio und selbstdimmendes Display.",
          "es": "Amanecer y atardecer ajustables de 15 a 90 minutos, 15 sonidos, radio FM y pantalla con atenuación automática.",
          "it": "Alba e tramonto regolabili da 15 a 90 minuti, 15 suoni, radio FM e display ad attenuazione automatica.",
          "nl": "Zonsopgang en zonsondergang instelbaar van 15 tot 90 minuten, 15 geluiden, fm-radio en automatisch dimmend display.",
          "pl": "Świt i zmierzch regulowane w zakresie 15–90 minut, 15 dźwięków, radio FM i wyświetlacz z automatycznym przyciemnianiem.",
          "sv": "Soluppgång och solnedgång som går att ställa in på 15–90 minuter, 15 ljud, FM-radio och en display som dimras automatiskt.",
          "us": "Sunrise and sunset adjustable from 15 to 90 minutes, 15 sounds, FM radio and an auto-dimming display.",
          "ca": "Sunrise and sunset adjustable from 15 to 90 minutes, 15 sounds, FM radio and an auto-dimming display."
        }
      }
    ]
  },
  "robot-lave-vitre-comparatif": {
    "question": {
      "fr": "Quel est le meilleur robot lave-vitre en 2026 ?",
      "en": "What is the best window cleaning robot in 2026?",
      "de": "Welcher ist der beste Fensterputzroboter 2026?",
      "es": "¿Cuál es el mejor robot limpiacristales en 2026?",
      "it": "Qual è il miglior robot lavavetri nel 2026?",
      "nl": "Wat is de beste raamwasrobot in 2026?",
      "pl": "Jaki jest najlepszy robot do mycia okien w 2026 roku?",
      "sv": "Vilken fönsterputsrobot är bäst 2026?",
      "us": "What is the best window cleaning robot in 2026?",
      "ca": "What is the best window cleaning robot in 2026?"
    },
    "picks": [
      {
        "model": "Ecovacs Winbot W2 Omni",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Station-batterie portable, câble de sécurité auto-enroulé, pulvérisation à trois buses et détection des bords pour vitres sans cadre.",
          "en": "Portable battery station, self-winding safety cable, three-nozzle spraying and edge detection for frameless glass.",
          "de": "Tragbare Akku-Station, selbst aufrollendes Sicherheitskabel, Sprühsystem mit drei Düsen und Kantenerkennung für rahmenloses Glas.",
          "es": "Estación de batería portátil, cable de seguridad que se recoge solo, pulverización por tres boquillas y detección de bordes para cristales sin marco.",
          "it": "Stazione portatile con batteria, cavo di sicurezza autoavvolgente, spruzzo a tre ugelli e rilevamento dei bordi per vetri senza telaio.",
          "nl": "Draagbaar accustation, zelfoprollende veiligheidskabel, sproeien met drie sproeiers en randdetectie voor kaderloos glas.",
          "pl": "Przenośna stacja z akumulatorem, samozwijająca się linka bezpieczeństwa, spryskiwacz z trzema dyszami i wykrywanie krawędzi na szybach bez ramy.",
          "sv": "Bärbar batteristation, självupprullande säkerhetslina, spray med tre munstycken och kantavkänning för ramlösa glas.",
          "us": "Portable battery station, self-winding safety cable, three-nozzle spraying and edge detection for frameless glass.",
          "ca": "Portable battery station, self-winding safety cable, three-nozzle spraying and edge detection for frameless glass."
        }
      },
      {
        "model": "Cecotec Conga WinDroid 1090 Double Spray Connected",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Double spray, 8 modes, application et télécommande, corde de sécurité et batterie d’environ 30 minutes en cas de coupure.",
          "en": "Dual spray, 8 modes, app and remote control, a safety rope and a backup battery of about 30 minutes in case of a power cut.",
          "de": "Double Spray, 8 Modi, App und Fernbedienung, Sicherheitsseil und rund 30 Minuten Akku bei Stromausfall.",
          "es": "Doble pulverizador, 8 modos, app y mando a distancia, cuerda de seguridad y batería de unos 30 minutos por si se va la luz.",
          "it": "Doppio spruzzo, 8 modalità, app e telecomando, corda di sicurezza e batteria da circa 30 minuti in caso di blackout.",
          "nl": "Dubbel sproeien, 8 modi, app en afstandsbediening, veiligheidskoord en circa 30 minuten accu bij stroomuitval.",
          "pl": "Podwójny spryskiwacz, 8 trybów, aplikacja i pilot, linka bezpieczeństwa oraz akumulator awaryjny na ok. 30 minut na wypadek zaniku zasilania.",
          "sv": "Dubbel spray, 8 lägen, app och fjärrkontroll, säkerhetslina och ett batteri som räcker ca 30 minuter vid strömavbrott.",
          "us": "Dual spray, 8 modes, app and remote control, a safety rope and a backup battery that lasts roughly 30 minutes in a power outage.",
          "ca": "Double spray, 8 modes, app and remote control, safety cord and a roughly 30-minute battery in case of a power outage."
        }
      },
      {
        "model": "Hobot 2S",
        "role": {
          "fr": "Idéal vitres sans cadre",
          "en": "Best for frameless glass",
          "de": "Ideal für rahmenloses Glas",
          "es": "Ideal para cristales sin marco",
          "it": "Ideale per vetri senza telaio",
          "nl": "Ideaal voor kaderloos glas",
          "pl": "Najlepszy do szyb bez ramy",
          "sv": "Bäst för ramlösa glas",
          "us": "Best for frameless glass",
          "ca": "Best for frameless glass"
        },
        "why": {
          "fr": "Compact et léger, deux buses à ultrasons, capteur de bords, corde de 4,5 m et batterie de secours jusqu’à 20 minutes.",
          "en": "Compact and light, with two ultrasonic nozzles, an edge sensor, a 4.5 m safety rope and a backup battery lasting up to 20 minutes.",
          "de": "Kompakt und leicht, zwei Ultraschalldüsen, Kantensensor, 4,5-m-Seil und Notstrom-Akku für bis zu 20 Minuten.",
          "es": "Compacto y ligero, dos boquillas ultrasónicas, sensor de bordes, cuerda de 4,5 m y batería de emergencia de hasta 20 minutos.",
          "it": "Compatto e leggero, due ugelli a ultrasuoni, sensore dei bordi, corda da 4,5 m e batteria di emergenza fino a 20 minuti.",
          "nl": "Compact en licht, twee ultrasone sproeiers, randsensor, koord van 4,5 m en noodaccu tot 20 minuten.",
          "pl": "Kompaktowy i lekki, z dwiema dyszami ultradźwiękowymi, czujnikiem krawędzi, linką bezpieczeństwa 4,5 m i akumulatorem awaryjnym na maks. 20 minut.",
          "sv": "Kompakt och lätt, två ultraljudsmunstycken, kantsensor, 4,5 m lång lina och reservbatteri som räcker upp till 20 minuter.",
          "us": "Compact and light, two ultrasonic nozzles, edge sensor, a 15 ft (4.5 m) safety rope and a backup battery that lasts up to 20 minutes.",
          "ca": "Compact and light, two ultrasonic nozzles, edge sensor, 4.5 m rope and a backup battery lasting up to 20 minutes."
        }
      }
    ]
  },
  "borne-recharge-voiture-electrique-maison": {
    "question": {
      "fr": "Quelle est la meilleure borne de recharge pour la maison en 2026 ?",
      "en": "What is the best home EV charger in 2026?",
      "de": "Was ist die beste Wallbox für zu Hause 2026?",
      "es": "¿Cuál es el mejor cargador doméstico para coche eléctrico en 2026?",
      "it": "Qual è la migliore wallbox per casa nel 2026?",
      "nl": "Wat is de beste laadpaal voor thuis in 2026?",
      "pl": "Jaka jest najlepsza domowa ładowarka do samochodu elektrycznego (wallbox) w 2026 roku?",
      "sv": "Vilken laddbox är bäst för hemmet 2026?",
      "us": "What is the best home EV charger in 2026?",
      "ca": "What is the best home EV charger in 2026?"
    },
    "picks": [
      {
        "model": "Wallbox Pulsar Max",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Compacte, en 7,4, 11 ou 22 kW, Wi-Fi, Bluetooth et OCPP, avec équilibrage de charge et recharge solaire via son compteur dédié.",
          "en": "Compact and available in 7.4, 11 or 22 kW versions, with Wi-Fi, Bluetooth and OCPP, plus load balancing and solar charging via its dedicated meter.",
          "de": "Kompakt, mit 7,4, 11 oder 22 kW, WLAN, Bluetooth und OCPP, dazu Lastmanagement und PV-Überschussladen über den eigenen Zähler.",
          "es": "Compacto, en 7,4, 11 o 22 kW, con wifi, Bluetooth y OCPP, además de balanceo de carga y carga solar con su propio medidor.",
          "it": "Compatta, in versione da 7,4, 11 o 22 kW, con Wi-Fi, Bluetooth e OCPP, bilanciamento dei carichi e ricarica con il fotovoltaico tramite il suo contatore dedicato.",
          "nl": "Compact, in 7,4, 11 of 22 kW, met wifi, Bluetooth en OCPP, plus load balancing en laden op zonne-overschot via de eigen meter.",
          "pl": "Kompaktowa, w wersjach 7,4, 11 lub 22 kW, z Wi-Fi, Bluetooth i OCPP, z równoważeniem obciążenia i ładowaniem energią słoneczną przez licznik producenta.",
          "sv": "Kompakt, finns i 7,4, 11 eller 22 kW, med wifi, Bluetooth och OCPP, plus lastbalansering och laddning med solel via den egna energimätaren.",
          "us": "Compact, in 7.4, 11 or 22 kW, with Wi-Fi, Bluetooth and OCPP, plus load balancing and solar charging via its dedicated meter.",
          "ca": "Compact, in 7.4, 11 or 22 kW, with Wi-Fi, Bluetooth and OCPP, plus load balancing and solar charging via its dedicated meter."
        }
      },
      {
        "model": "Easee Charge Lite",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Jusqu’à 11 kW avec lecteur RFID, Wi-Fi, 4G intégrée et OCPP ; équilibrage et solaire possibles avec l’Easee Equalizer.",
          "en": "Up to 11 kW with an RFID reader, Wi-Fi, built-in 4G and OCPP; load balancing and solar charging are possible with the Easee Equalizer.",
          "de": "Bis 11 kW mit RFID-Leser, WLAN, integriertem 4G und OCPP; Lastmanagement und Solarladen mit dem Easee Equalizer.",
          "es": "Hasta 11 kW con lector RFID, wifi, 4G integrado y OCPP; balanceo de carga y carga solar con el Easee Equalizer.",
          "it": "Fino a 11 kW con lettore RFID, Wi-Fi, 4G integrato e OCPP; bilanciamento dei carichi e ricarica con il fotovoltaico possibili con l’Easee Equalizer.",
          "nl": "Tot 11 kW met RFID-lezer, wifi, ingebouwde 4G en OCPP; load balancing en zonneladen met de Easee Equalizer.",
          "pl": "Do 11 kW, z czytnikiem RFID, Wi-Fi, wbudowanym modemem 4G i OCPP; równoważenie obciążenia i ładowanie energią słoneczną umożliwia Easee Equalizer.",
          "sv": "Upp till 11 kW med RFID-läsare, wifi, inbyggd 4G och OCPP. Med Easee Equalizer får du dessutom lastbalansering och laddning med solel.",
          "us": "Up to 11 kW with an RFID reader, Wi-Fi, built-in 4G and OCPP; load balancing and solar charging with the Easee Equalizer.",
          "ca": "Up to 11 kW with an RFID reader, Wi-Fi, built-in 4G and OCPP; load balancing and solar charging with the Easee Equalizer."
        }
      },
      {
        "model": "Zaptec Go 2",
        "role": {
          "fr": "Idéale en 22 kW avec compteur MID",
          "en": "Best for 22 kW, with an MID meter",
          "de": "Ideal für 22 kW mit MID-Zähler",
          "es": "Ideal para 22 kW con contador MID",
          "it": "Ideale da 22 kW, con contatore MID",
          "nl": "Ideaal voor 22 kW met MID-meter",
          "pl": "Idealna wersja 22 kW z licznikiem MID",
          "sv": "Bäst för 22 kW med MID-mätare",
          "us": "Best for 22 kW with an MID-certified meter",
          "ca": "Best for 22 kW with MID meter"
        },
        "why": {
          "fr": "Jusqu’à 22 kW dans un boîtier mini, avec écran, RFID, 4G, OCPP et compteur certifié MID pour un remboursement employeur.",
          "en": "Up to 22 kW in a tiny case, with a screen, RFID, 4G, OCPP and an MID-certified meter, so your employer can reimburse your charging.",
          "de": "Bis 22 kW im Mini-Gehäuse, mit Display, RFID, 4G, OCPP und MID-geeichtem Zähler für die Dienstwagenabrechnung.",
          "es": "Hasta 22 kW en una carcasa diminuta, con pantalla, RFID, 4G, OCPP y contador con certificación MID para que la empresa te reembolse la recarga.",
          "it": "Fino a 22 kW in un involucro minuscolo, con display, RFID, 4G, OCPP e contatore certificato MID per farti rimborsare la ricarica dal datore di lavoro.",
          "nl": "Tot 22 kW in een mini-behuizing, met display, RFID, 4G, OCPP en een MID-gecertificeerde meter voor vergoeding door de werkgever.",
          "pl": "Do 22 kW w miniaturowej obudowie, z wyświetlaczem, RFID, 4G, OCPP i licznikiem z certyfikatem MID, który pozwala rozliczać koszty ładowania z pracodawcą.",
          "sv": "Upp till 22 kW i ett mycket litet hölje, med display, RFID, 4G, OCPP och MID-certifierad mätare, så att arbetsgivaren kan ersätta laddningen.",
          "us": "Up to 22 kW in a tiny housing, with a display, RFID, 4G, OCPP and a meter certified to the EU's MID standard for employer reimbursement.",
          "ca": "Up to 22 kW in a tiny housing, with display, RFID, 4G, OCPP and an EU MID-certified meter for employer reimbursement."
        }
      }
    ]
  },
  "traceur-objets-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur traceur d’objets en 2026 ?",
      "en": "What is the best Bluetooth tracker in 2026?",
      "de": "Welcher Bluetooth-Tracker ist 2026 der beste?",
      "es": "¿Cuál es el mejor localizador de objetos en 2026?",
      "it": "Qual è il miglior localizzatore Bluetooth nel 2026?",
      "nl": "Wat is de beste tracker voor spullen in 2026?",
      "pl": "Jaki jest najlepszy lokalizator przedmiotów w 2026 roku?",
      "sv": "Vilken bluetooth-spårare är bäst 2026?",
      "us": "What is the best item tracker in 2026?",
      "ca": "What is the best item tracker in 2026?"
    },
    "picks": [
      {
        "model": "Apple AirTag (2nd generation)",
        "role": {
          "fr": "Meilleur choix global (iPhone)",
          "en": "Best overall (iPhone)",
          "de": "Beste Wahl insgesamt (iPhone)",
          "es": "Mejor en general (iPhone)",
          "it": "La nostra scelta (iPhone)",
          "nl": "Beste keuze overall (iPhone)",
          "pl": "Najlepszy wybór dla użytkowników iPhone’a",
          "sv": "Bäst totalt (iPhone)",
          "us": "Best overall (iPhone)",
          "ca": "Best overall (iPhone)"
        },
        "why": {
          "fr": "Réseau Apple Localiser très dense, recherche de précision UWB jusqu’à 50 % plus loin, haut-parleur plus fort, pile CR2032 remplaçable et IP67.",
          "en": "Apple’s very dense Find My network, UWB Precision Finding with up to 50% more range, a louder speaker, a replaceable CR2032 battery and IP67.",
          "de": "Sehr dichtes „Wo ist?“-Netzwerk, UWB-Präzisionssuche bis zu 50 % weiter, lauterer Lautsprecher, austauschbare CR2032 und IP67.",
          "es": "Red Buscar de Apple muy densa, búsqueda precisa UWB hasta un 50 % más lejos, altavoz más potente, pila CR2032 reemplazable e IP67.",
          "it": "Rete Dov’è di Apple molto capillare, ricerca di precisione UWB con portata fino al 50% superiore, altoparlante più potente, pila CR2032 sostituibile e IP67.",
          "nl": "Zeer dicht Apple Zoek mijn-netwerk, UWB-precisiezoeken tot 50% verder, luidere speaker, vervangbare CR2032-batterij en IP67.",
          "pl": "Bardzo gęsta sieć Apple Znajdź, precyzyjne wyszukiwanie UWB z odległości nawet o 50% większej, głośniejszy sygnał dźwiękowy, wymienna bateria CR2032 i odporność IP67.",
          "sv": "Apples mycket täta Hitta-nätverk, precisionssökning med UWB upp till 50 % längre bort, starkare högtalare, utbytbart CR2032-batteri och IP67.",
          "us": "Very dense Apple Find My network, UWB Precision Finding up to 50% farther, louder speaker, replaceable CR2032 battery and IP67.",
          "ca": "Very dense Apple Find My network, UWB Precision Finding up to 50% farther, louder speaker, replaceable CR2032 battery and IP67."
        }
      },
      {
        "model": "Chipolo POP",
        "role": {
          "fr": "Meilleur pour Android et foyers mixtes",
          "en": "Best for Android and mixed households",
          "de": "Beste Wahl für Android und gemischte Haushalte",
          "es": "Mejor para Android y casas con iPhone y Android",
          "it": "Il migliore per Android e per famiglie con iPhone e Android",
          "nl": "Beste voor Android en gemengde gezinnen",
          "pl": "Najlepszy dla Androida i rodzin z różnymi telefonami",
          "sv": "Bäst för Android och blandade hushåll",
          "us": "Best for Android and mixed iPhone/Android homes",
          "ca": "Best for Android and mixed households"
        },
        "why": {
          "fr": "Compatible Apple Localiser ou Google Find Hub, sonnerie d’environ 120 dB parmi les plus fortes, pile remplaçable et fabrication européenne.",
          "en": "Works with Apple Find My or Google Find Hub, with one of the loudest ringers at around 120 dB, a replaceable battery and European manufacturing.",
          "de": "Kompatibel mit Apple „Wo ist?“ oder Google Find Hub, Signalton mit rund 120 dB, austauschbare Batterie, in Europa gefertigt.",
          "es": "Compatible con Buscar de Apple o Google Find Hub, timbre de unos 120 dB, de los más potentes, pila reemplazable y fabricado en Europa.",
          "it": "Compatibile con Dov’è di Apple o Google Find Hub, suoneria da circa 120 dB tra le più forti in circolazione, pila sostituibile e produzione europea.",
          "nl": "Werkt met Apple Zoek mijn of Google Find Hub, signaal van ongeveer 120 dB bij de luidste, vervangbare batterij en gemaakt in Europa.",
          "pl": "Działa z siecią Apple Znajdź lub Google Find Hub, ma jeden z najgłośniejszych sygnałów (ok. 120 dB), wymienną baterię i jest produkowany w Europie.",
          "sv": "Fungerar med Apples Hitta eller Google Find Hub, en signal på omkring 120 dB som hör till de starkaste, utbytbart batteri och tillverkad i Europa.",
          "us": "Works with Apple Find My or Google Find Hub, a roughly 120 dB ringer that's among the loudest, a replaceable battery, and it's made in Europe.",
          "ca": "Works with Apple Find My or Google Find Hub, a ringer of around 120 dB among the loudest, replaceable battery and made in Europe."
        }
      },
      {
        "model": "Ugreen FineTrack Duo",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Entrée de gamme compatible Apple ou Google, rechargeable en USB‑C jusqu’à 12 mois, IP68, souvent vendu en lots pour toute la famille.",
          "en": "An entry-level tracker for Apple or Google, rechargeable over USB‑C with up to 12 months per charge, IP68 and often sold in multipacks for the whole family.",
          "de": "Einsteiger-Tracker für Apple oder Google, per USB‑C aufladbar mit bis zu 12 Monaten Laufzeit, IP68, oft im Mehrfachpack erhältlich.",
          "es": "Modelo básico compatible con Apple o Google, recargable por USB‑C con hasta 12 meses de autonomía, IP68 y a menudo en packs para toda la familia.",
          "it": "Modello base compatibile con Apple o Google, ricaricabile via USB‑C con autonomia fino a 12 mesi, IP68, spesso venduto in confezioni multiple per tutta la famiglia.",
          "nl": "Instapmodel voor Apple of Google, via USB‑C oplaadbaar tot 12 maanden, IP68, vaak verkocht in multipacks voor het hele gezin.",
          "pl": "Model podstawowy zgodny z Apple lub Google, ładowany przez USB-C (do 12 miesięcy na jednym ładowaniu), IP68, często sprzedawany w zestawach dla całej rodziny.",
          "sv": "Instegsmodell för Apple eller Google, laddas via USB‑C och håller upp till 12 månader, IP68, säljs ofta i flerpack för hela familjen.",
          "us": "Entry-level tracker for Apple or Google, USB‑C rechargeable with up to 12 months per charge, IP68, often sold in multipacks for the whole family.",
          "ca": "Entry-level tracker for Apple or Google, USB‑C rechargeable for up to 12 months, IP68, often sold in multi-packs for the whole family."
        }
      }
    ]
  },
  "lave-vaisselle-connecte-guide": {
    "question": {
      "fr": "Quel est le meilleur lave-vaisselle connecté en 2026 ?",
      "en": "What is the best smart dishwasher in 2026?",
      "de": "Welcher ist der beste smarte Geschirrspüler 2026?",
      "es": "¿Cuál es el mejor lavavajillas con wifi en 2026?",
      "it": "Qual è la migliore lavastoviglie con Wi-Fi nel 2026?",
      "nl": "Wat is de beste slimme vaatwasser in 2026?",
      "pl": "Jaka jest najlepsza inteligentna zmywarka w 2026 roku?",
      "sv": "Vilken smart diskmaskin är bäst 2026?",
      "us": "What is the best smart dishwasher in 2026?",
      "ca": "What is the best smart dishwasher in 2026?"
    },
    "picks": [
      {
        "model": "Bosch Serie 6 SMS6ZCI42E",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Séchage zéolithe qui sèche même les plastiques, troisième panier, 14 couverts, 44 dB et application Home Connect complète.",
          "en": "Zeolite drying that even dries plastics, a third rack, 14 place settings, 44 dB and a full-featured Home Connect app.",
          "de": "Zeolith-Trocknung, die selbst Kunststoff trocknet, dritte Ebene, 14 Maßgedecke, 44 dB und eine umfassende Home Connect App.",
          "es": "Secado con zeolita que seca hasta los plásticos, tercera bandeja, 14 servicios, 44 dB y una app Home Connect muy completa.",
          "it": "Asciugatura a zeolite che asciuga anche la plastica, terzo cestello, 14 coperti, 44 dB e app Home Connect completa.",
          "nl": "Zeolietdroging die zelfs kunststof droogt, derde lade, 14 couverts, 44 dB en een uitgebreide Home Connect-app.",
          "pl": "Suszenie zeolitowe skuteczne nawet w przypadku plastiku, trzeci kosz, 14 kompletów naczyń, 44 dB i rozbudowana aplikacja Home Connect.",
          "sv": "Zeolittorkning som torkar även plast, tredje korg, 14 kuvert, 44 dB och en komplett Home Connect-app.",
          "us": "Zeolite drying that even dries plastics, a third rack, 14 place settings, 44 dB and a full-featured Home Connect app.",
          "ca": "Zeolite drying that even dries plastics, a third rack, 14 place settings, 44 dB and a full-featured Home Connect app."
        }
      },
      {
        "model": "Haier XS 6B0S3FSB",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Tout intégrable de 16 couverts, classe B et 40 dB, avec ouverture automatique de la porte et application hOn, bien sous les marques allemandes.",
          "en": "A fully integrated 16-place-setting model, class B and 40 dB, with automatic door opening and the hOn app, for much less than the German brands.",
          "de": "Vollintegrierter mit 16 Maßgedecken, Klasse B und 40 dB, automatischer Türöffnung und hOn-App, preislich klar unter deutschen Marken.",
          "es": "Totalmente integrable, 16 servicios, clase B y 40 dB, con apertura automática de la puerta y app hOn, a un precio bastante inferior al de las marcas alemanas.",
          "it": "Da incasso a scomparsa totale, 16 coperti, classe B e 40 dB, apertura automatica della porta e app hOn, a un prezzo ben più basso dei marchi tedeschi.",
          "nl": "Volledig integreerbaar met 16 couverts, klasse B en 40 dB, automatische deuropening en hOn-app, flink goedkoper dan Duitse merken.",
          "pl": "Zmywarka do pełnej zabudowy na 16 kompletów, klasa B i 40 dB, z automatycznym otwieraniem drzwi i aplikacją hOn – w cenie wyraźnie niższej niż u marek niemieckich.",
          "sv": "Helintegrerad modell för 16 kuvert, klass B och 40 dB, med automatisk luckåppning och appen hOn, till ett pris klart under de tyska märkenas.",
          "us": "A fully integrated 16-place-setting model, EU energy class B and 40 dB, with automatic door opening and the hOn app, in a much lower price tier than the German brands.",
          "ca": "A panel-ready model with 16 place settings, EU class B and 40 dB, automatic door opening and the hOn app, priced well below the German brands."
        }
      },
      {
        "model": "Miele G 7110 SC AutoDos",
        "role": {
          "fr": "Meilleur dosage automatique",
          "en": "Best for auto-dosing",
          "de": "Beste automatische Dosierung",
          "es": "Mejor dosificación automática",
          "it": "Miglior dosaggio automatico",
          "nl": "Beste automatische dosering",
          "pl": "Najlepsze automatyczne dozowanie",
          "sv": "Bäst på automatisk dosering",
          "us": "Best for auto-dosing",
          "ca": "Best for auto-dosing"
        },
        "why": {
          "fr": "AutoDos dose seul le détergent depuis une cartouche PowerDisk, classe B, 43 dB, ouverture AutoOpen et application Miele@home.",
          "en": "AutoDos doses the detergent itself from a PowerDisk cartridge; class B, 43 dB, AutoOpen door and the Miele@home app.",
          "de": "AutoDos dosiert den Reiniger selbst aus einer PowerDisk-Kartusche, Klasse B, 43 dB, AutoOpen-Trocknung und Miele@home-App.",
          "es": "AutoDos dosifica el detergente por sí solo desde un cartucho PowerDisk; clase B, 43 dB, apertura automática AutoOpen y app Miele@home.",
          "it": "AutoDos dosa da solo il detersivo da una cartuccia PowerDisk, classe B, 43 dB, apertura automatica AutoOpen e app Miele@home.",
          "nl": "AutoDos doseert zelf vaatwasmiddel uit een PowerDisk-patroon, klasse B, 43 dB, AutoOpen-droging en Miele@home-app.",
          "pl": "AutoDos samodzielnie dozuje detergent z kartusza PowerDisk, klasa B, 43 dB, automatyczne otwieranie drzwi AutoOpen i aplikacja Miele@home.",
          "sv": "AutoDos doserar diskmedlet automatiskt från en PowerDisk-patron, klass B, 43 dB, AutoOpen som öppnar luckan för torkning och appen Miele@home.",
          "us": "AutoDos doses detergent automatically from a PowerDisk cartridge, EU energy class B, 43 dB, AutoOpen drying and the Miele@home app.",
          "ca": "AutoDos doses detergent automatically from a PowerDisk cartridge, EU class B, 43 dB, AutoOpen drying and the Miele@home app."
        }
      }
    ]
  },
  "station-electrique-portable-comparatif": {
    "question": {
      "fr": "Quelle est la meilleure station électrique portable en 2026 ?",
      "en": "What is the best portable power station in 2026?",
      "de": "Welche ist die beste Powerstation 2026?",
      "es": "¿Cuál es la mejor estación de energía portátil en 2026?",
      "it": "Qual è la migliore power station portatile nel 2026?",
      "nl": "Wat is het beste draagbare powerstation in 2026?",
      "pl": "Jaka jest najlepsza przenośna stacja zasilania w 2026 roku?",
      "sv": "Vilken portabel kraftstation är bäst 2026?",
      "us": "What is the best portable power station in 2026?",
      "ca": "What is the best portable power station in 2026?"
    },
    "picks": [
      {
        "model": "EcoFlow DELTA 3 Plus",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "1 024 Wh LiFePO4, 1 800 W, UPS, 1 000 W en solaire et une application Wi-Fi/Bluetooth très complète : l'équilibre idéal maison, jardin et van.",
          "en": "1,024 Wh LiFePO4, 1,800 W, UPS, 1,000 W solar input and a comprehensive Wi-Fi/Bluetooth app: the ideal all-rounder for home, garden and campervan.",
          "de": "1.024 Wh LiFePO4, 1.800 W, USV, 1.000 W Solar und eine sehr umfangreiche WLAN/Bluetooth-App: die ideale Balance für Haus, Garten und Van.",
          "es": "1.024 Wh LiFePO4, 1.800 W, función SAI, 1.000 W de entrada solar y una app muy completa por wifi y Bluetooth: el equilibrio ideal entre casa, jardín y furgoneta.",
          "it": "1.024 Wh LiFePO4, 1.800 W, UPS, 1.000 W di ingresso solare e un'app Wi-Fi/Bluetooth molto completa: l'equilibrio ideale tra casa, giardino e van.",
          "nl": "1.024 Wh LiFePO4, 1.800 W, UPS, 1.000 W zonne-ingang en een zeer complete wifi/Bluetooth-app: de ideale balans voor huis, tuin en camper.",
          "pl": "1024 Wh w ogniwach LiFePO4, 1800 W, funkcja UPS, 1000 W ładowania solarnego i bardzo rozbudowana aplikacja Wi-Fi/Bluetooth – sprawdzi się równie dobrze w domu, w ogrodzie, jak i w kamperze.",
          "sv": "1 024 Wh LiFePO4, 1 800 W, UPS, 1 000 W solcellsingång och en mycket komplett app via wifi/Bluetooth: den perfekta balansen för hemmet, trädgården och husbilen.",
          "us": "1,024 Wh LiFePO4, 1,800 W, UPS, 1,000 W solar input and a very complete Wi-Fi/Bluetooth app: the ideal balance for home backup, the backyard and van life.",
          "ca": "1,024 Wh LiFePO4, 1,800 W, UPS, 1,000 W solar input and a very complete Wi-Fi/Bluetooth app: the ideal balance for home, backyard and van."
        }
      },
      {
        "model": "BLUETTI Elite 100 V2",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Même capacité que la DELTA 3 Plus, 1 000 W en solaire, UPS 10 ms et 11,5 kg, avec un positionnement généralement plus accessible.",
          "en": "Same capacity as the DELTA 3 Plus, 1,000 W solar input, 10 ms UPS and 11.5 kg, and usually cheaper.",
          "de": "Gleiche Kapazität wie die DELTA 3 Plus, 1.000 W Solar, 10-ms-USV und 11,5 kg, meist günstiger positioniert.",
          "es": "Misma capacidad que la DELTA 3 Plus, 1.000 W de entrada solar, SAI en 10 ms y 11,5 kg, y normalmente más asequible.",
          "it": "Stessa capacità della DELTA 3 Plus, 1.000 W di ingresso solare, UPS in 10 ms e 11,5 kg, di solito a un prezzo più accessibile.",
          "nl": "Zelfde capaciteit als de DELTA 3 Plus, 1.000 W zonne-ingang, UPS van 10 ms en 11,5 kg, doorgaans gunstiger gepositioneerd.",
          "pl": "Ta sama pojemność co DELTA 3 Plus, 1000 W ładowania solarnego, UPS 10 ms i 11,5 kg – zwykle w przystępniejszej cenie.",
          "sv": "Samma kapacitet som DELTA 3 Plus, 1 000 W solcellsingång, UPS på 10 ms och 11,5 kg, oftast i en lägre prisklass.",
          "us": "Same capacity as the DELTA 3 Plus, 1,000 W solar input, 10 ms UPS switchover and 25.4 lb (11.5 kg), usually in a more affordable tier.",
          "ca": "Same capacity as the DELTA 3 Plus, 1,000 W solar input, 10 ms UPS and 11.5 kg, usually at a more affordable tier."
        }
      },
      {
        "model": "EcoFlow RIVER 3 Plus",
        "role": {
          "fr": "Idéale pour le camping léger",
          "en": "Best for light camping",
          "de": "Ideal für leichtes Camping",
          "es": "Ideal para camping ligero",
          "it": "Ideale per il campeggio leggero",
          "nl": "Ideaal voor licht kamperen",
          "pl": "Idealna na biwak, gdy liczy się waga",
          "sv": "Bäst för camping med lätt packning",
          "us": "Best for light camping",
          "ca": "Best for light camping"
        },
        "why": {
          "fr": "Seulement 4,7 kg pour 286 Wh et 600 W, UPS en moins de 10 ms et extension jusqu'à 858 Wh : parfaite pour la tente ou la box internet.",
          "en": "Only 4.7 kg for 286 Wh and 600 W, sub-10 ms UPS and expandable to 858 Wh: perfect for camping or as a backup for your broadband router.",
          "de": "Nur 4,7 kg für 286 Wh und 600 W, USV unter 10 ms und erweiterbar auf 858 Wh: perfekt fürs Zelt oder als Router-Absicherung.",
          "es": "Solo 4,7 kg para 286 Wh y 600 W, SAI en menos de 10 ms y ampliable a 858 Wh: perfecta para la tienda de campaña o para mantener el router encendido.",
          "it": "Solo 4,7 kg per 286 Wh e 600 W, UPS in meno di 10 ms ed espandibile fino a 858 Wh: perfetta per la tenda o come backup del router.",
          "nl": "Slechts 4,7 kg voor 286 Wh en 600 W, UPS onder 10 ms en uitbreidbaar tot 858 Wh: perfect voor de tent of als routerback-up.",
          "pl": "Zaledwie 4,7 kg przy 286 Wh i 600 W, UPS z czasem przełączenia poniżej 10 ms i możliwość rozbudowy do 858 Wh – idealna pod namiot albo jako zasilanie awaryjne routera.",
          "sv": "Bara 4,7 kg för 286 Wh och 600 W, UPS på under 10 ms och kan byggas ut till 858 Wh: perfekt i tältet eller som reservkraft till routern.",
          "us": "Only 10.4 lb (4.7 kg) for 286 Wh and 600 W, sub-10 ms UPS switchover and expandable to 858 Wh: perfect for a tent or as backup power for your internet router.",
          "ca": "Only 4.7 kg for 286 Wh and 600 W, sub-10 ms UPS and expandable to 858 Wh: perfect for the tent or as router backup."
        }
      }
    ]
  },
  "motorisation-portail-garage-connecte": {
    "question": {
      "fr": "Quelle est la meilleure motorisation de portail ou de porte de garage connectée en 2026 ?",
      "en": "What is the best smart gate or garage door opener in 2026?",
      "de": "Was ist der beste smarte Tor- oder Garagentorantrieb 2026?",
      "es": "¿Cuál es el mejor motor con app para cancela o puerta de garaje en 2026?",
      "it": "Qual è la migliore automazione smart per cancello o porta del garage nel 2026?",
      "nl": "Wat is de beste slimme poort- of garagedeuraandrijving in 2026?",
      "pl": "Jaki jest najlepszy inteligentny napęd do bramy wjazdowej lub garażowej w 2026 roku?",
      "sv": "Vilken smart grind- eller garageportöppnare är bäst 2026?",
      "us": "What is the best smart gate or garage door opener in 2026?",
      "ca": "What is the best smart gate or garage door opener in 2026?"
    },
    "picks": [
      {
        "model": "Somfy Ixengo L 3S io Pack Confort",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Kit complet pour portail battant jusqu'à 400 kg par vantail, protocole io bidirectionnel et pilotage via TaHoma.",
          "en": "A complete swing gate kit for leaves of up to 400 kg each, with the two-way io protocol and control through TaHoma.",
          "de": "Komplettset für Drehtore bis 400 kg pro Flügel, mit bidirektionalem io-Protokoll und Steuerung über TaHoma.",
          "es": "Kit completo para cancelas batientes de hasta 400 kg por hoja, con protocolo io bidireccional y control desde TaHoma.",
          "it": "Kit completo per cancelli a battente fino a 400 kg per anta, protocollo io bidirezionale e gestione con TaHoma.",
          "nl": "Complete set voor draaipoorten tot 400 kg per vleugel, met bidirectioneel io-protocol en bediening via TaHoma.",
          "pl": "Kompletny zestaw do bramy skrzydłowej (do 400 kg na skrzydło), dwukierunkowy protokół io i sterowanie przez TaHoma.",
          "sv": "Komplett kit för slaggrindar upp till 400 kg per grindblad, med dubbelriktat io-protokoll och styrning via TaHoma.",
          "us": "Complete swing gate kit for up to 880 lb (400 kg) per gate leaf, with the two-way io protocol and control through TaHoma.",
          "ca": "Complete swing gate kit for up to 400 kg per leaf, with two-way io protocol and control through TaHoma."
        }
      },
      {
        "model": "Meross MSG100HK Smart Wi-Fi Garage Door Opener",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Rend connecté un moteur de garage existant, avec capteur d'ouverture et compatibilité HomeKit, Alexa et Google.",
          "en": "Makes an existing garage door opener smart, with a door sensor and HomeKit, Alexa and Google support.",
          "de": "Macht einen vorhandenen Garagentorantrieb smart, mit Torsensor sowie HomeKit, Alexa und Google.",
          "es": "Convierte en inteligente el motor de garaje que ya tienes, con sensor de apertura y compatible con HomeKit, Alexa y Google.",
          "it": "Rende smart un motore da garage esistente, con sensore di apertura e compatibilità HomeKit, Alexa e Google.",
          "nl": "Maakt een bestaande garagedeuraandrijving slim, met deursensor en ondersteuning voor HomeKit, Alexa en Google.",
          "pl": "Zamienia dotychczasowy napęd bramy garażowej w inteligentny: dodaje czujnik otwarcia i zgodność z HomeKit, Alexą i Asystentem Google.",
          "sv": "Gör en befintlig garageportöppnare smart, med en sensor som känner av om porten är öppen och stöd för HomeKit, Alexa och Google.",
          "us": "Makes an existing garage door opener smart, with a door sensor and HomeKit, Alexa and Google support.",
          "ca": "Makes an existing garage opener smart, with a door sensor and HomeKit, Alexa and Google support."
        }
      },
      {
        "model": "Hörmann SupraMatic E Serie 4",
        "role": {
          "fr": "Idéal pour porte de garage",
          "en": "Best for garage doors",
          "de": "Ideal für Garagentore",
          "es": "Ideal para puerta de garaje",
          "it": "Ideale per la porta del garage",
          "nl": "Ideaal voor garagedeuren",
          "pl": "Najlepszy do bramy garażowej",
          "sv": "Bäst för garageportar",
          "us": "Best for garage doors",
          "ca": "Best for garage doors"
        },
        "why": {
          "fr": "Moteur pour porte sectionnelle avec Bluetooth intégré : pilotage via l'app BlueSecur sans box.",
          "en": "A sectional garage door opener with built-in Bluetooth, controlled from the BlueSecur app with no hub needed.",
          "de": "Antrieb für Sektionaltore mit integriertem Bluetooth: Bedienung per BlueSecur-App ohne Zentrale.",
          "es": "Motor para puerta seccional con Bluetooth integrado: se controla desde la app BlueSecur sin necesidad de hub.",
          "it": "Motore per porte sezionali con Bluetooth integrato: si comanda dall'app BlueSecur senza hub.",
          "nl": "Aandrijving voor sectionaaldeuren met ingebouwde bluetooth: bediening via de BlueSecur-app zonder hub.",
          "pl": "Napęd do bramy segmentowej z wbudowanym modułem Bluetooth: sterowanie przez aplikację BlueSecur, bez dodatkowej centralki.",
          "sv": "Motor för takskjutportar med inbyggd Bluetooth: styrs via appen BlueSecur utan hubb.",
          "us": "Sectional garage door opener with built-in Bluetooth: control it from the BlueSecur app, no hub needed.",
          "ca": "Sectional door operator with built-in Bluetooth: control from the BlueSecur app without a hub."
        }
      }
    ]
  },
  "diffuseur-huiles-essentielles-connecte": {
    "question": {
      "fr": "Quel est le meilleur diffuseur d'huiles essentielles connecté en 2026 ?",
      "en": "What is the best smart essential oil diffuser in 2026?",
      "de": "Welcher ist der beste smarte Aroma-Diffusor 2026?",
      "es": "¿Cuál es el mejor difusor de aceites esenciales inteligente en 2026?",
      "it": "Qual è il miglior diffusore di oli essenziali smart nel 2026?",
      "nl": "Wat is de beste slimme aromadiffuser in 2026?",
      "pl": "Jaki jest najlepszy inteligentny dyfuzor olejków eterycznych w 2026 roku?",
      "sv": "Vilken smart doftspridare för eteriska oljor är bäst 2026?",
      "us": "What is the best smart essential oil diffuser in 2026?",
      "ca": "What is the best smart essential oil diffuser in 2026?"
    },
    "picks": [
      {
        "model": "ASAKUKI Smart Wi-Fi Essential Oil Diffuser 500ml",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Réservoir de 500 ml, programmation complète via Tuya Smart et commande vocale Alexa et Google Home.",
          "en": "A 500 ml tank, full scheduling in the Tuya Smart app and voice control through Alexa and Google Home.",
          "de": "500-ml-Tank, umfassende Zeitpläne über Tuya Smart und Sprachsteuerung per Alexa und Google Home.",
          "es": "Depósito de 500 ml, programación completa con Tuya Smart y control por voz con Alexa y Google Home.",
          "it": "Serbatoio da 500 ml, programmazione completa con Tuya Smart e comando vocale con Alexa e Google Home.",
          "nl": "Reservoir van 500 ml, uitgebreide planning via Tuya Smart en spraakbediening met Alexa en Google Home.",
          "pl": "Zbiornik 500 ml, pełne programowanie przez Tuya Smart oraz sterowanie głosem przez Alexę i Google Home.",
          "sv": "Tank på 500 ml, fullständig schemaläggning via Tuya Smart och röststyrning med Alexa och Google Home.",
          "us": "A 17 fl oz (500 ml) tank, full scheduling through Tuya Smart, and voice control with Alexa and Google Home.",
          "ca": "A 500 mL tank, full scheduling via Tuya Smart and Alexa and Google Home voice control."
        }
      },
      {
        "model": "Maxcio Smart Essential Oil Diffuser 400ml",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Entrée de gamme mais complet : 400 ml, appli Smart Life, Alexa, Google Home et minuterie.",
          "en": "Entry-level but well equipped: 400 ml, Smart Life app, Alexa, Google Home and a timer.",
          "de": "Einstiegsmodell mit allem Nötigen: 400 ml, Smart-Life-App, Alexa, Google Home und Timer.",
          "es": "Básico pero completo: 400 ml, app Smart Life, Alexa, Google Home y temporizador.",
          "it": "Fascia d'ingresso ma completo: 400 ml, app Smart Life, Alexa, Google Home e timer.",
          "nl": "Instapmodel maar compleet: 400 ml, Smart Life-app, Alexa, Google Home en timer.",
          "pl": "Model z niższej półki, ale kompletny: 400 ml, aplikacja Smart Life, Alexa, Google Home i timer.",
          "sv": "Instegsmodell men komplett: 400 ml, appen Smart Life, Alexa, Google Home och timer.",
          "us": "Entry-level but complete: a 14 fl oz (400 ml) tank, the Smart Life app, Alexa, Google Home and a timer.",
          "ca": "Entry-level yet complete: 400 mL, Smart Life app, Alexa, Google Home and a timer."
        }
      },
      {
        "model": "Aromatherapy Associates Atomiser Connect",
        "role": {
          "fr": "Meilleur nébuliseur connecté",
          "en": "Best smart nebuliser",
          "de": "Bester smarter Vernebler",
          "es": "Mejor nebulizador conectado",
          "it": "Miglior nebulizzatore smart",
          "nl": "Beste slimme vernevelaar",
          "pl": "Najlepszy inteligentny dyfuzor nebulizacyjny",
          "sv": "Bästa smarta nebulisator",
          "us": "Best smart nebulizer",
          "ca": "Best smart nebulizer"
        },
        "why": {
          "fr": "Diffusion d'huiles pures sans eau, double tête pour deux mélanges et programmation par appli Bluetooth.",
          "en": "Diffuses pure oils with no water, has two heads for two blends and is scheduled through a Bluetooth app.",
          "de": "Reine Öle ohne Wasser, zwei Diffusionsköpfe für zwei Mischungen und Zeitpläne per Bluetooth-App.",
          "es": "Difunde aceites puros sin agua, con doble cabezal para dos mezclas y programación desde la app por Bluetooth.",
          "it": "Diffonde oli puri senz'acqua, ha una doppia testina per due miscele e si programma dall'app via Bluetooth.",
          "nl": "Pure olie zonder water, twee verstuiverkoppen voor twee mengsels en planning via een Bluetooth-app.",
          "pl": "Rozpyla czyste olejki bez wody, ma podwójną głowicę do dwóch mieszanek i programowanie w aplikacji przez Bluetooth.",
          "sv": "Sprider rena oljor utan vatten, dubbla behållare för två blandningar och schemaläggning via en Bluetooth-app.",
          "us": "Waterless pure-oil diffusion, two diffuser heads for two blends and scheduling through a Bluetooth app.",
          "ca": "Waterless pure-oil diffusion, dual pods for two blends and scheduling via a Bluetooth app."
        }
      }
    ]
  },
  "coffre-fort-connecte-guide": {
    "question": {
      "fr": "Quel est le meilleur coffre-fort connecté en 2026 ?",
      "en": "What is the best smart safe in 2026?",
      "de": "Welcher ist der beste smarte Tresor 2026?",
      "es": "¿Cuál es la mejor caja fuerte inteligente en 2026?",
      "it": "Qual è la migliore cassaforte smart nel 2026?",
      "nl": "Wat is de beste slimme kluis in 2026?",
      "pl": "Jaki jest najlepszy inteligentny sejf w 2026 roku?",
      "sv": "Vilket smart värdeskåp är bäst 2026?",
      "us": "What is the best smart safe in 2026?",
      "ca": "What is the best smart safe in 2026?"
    },
    "picks": [
      {
        "model": "Burg-Wächter Combi-Line CL 20 E FS",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Empreinte digitale, certification effraction EN 14450 S2 et 30 minutes de protection incendie pour le papier (LFS 30 P).",
          "en": "Fingerprint access, EN 14450 S2 burglary certification and 30 minutes of fire protection for paper (LFS 30 P).",
          "de": "Fingerabdrucköffnung, Einbruchschutz nach EN 14450 S2 und 30 Minuten Feuerschutz für Papier (LFS 30 P).",
          "es": "Apertura por huella, certificación antirrobo EN 14450 S2 y 30 minutos de protección contra incendios para papel (LFS 30 P).",
          "it": "Apertura con impronta digitale, certificazione antieffrazione EN 14450 S2 e 30 minuti di protezione antincendio per la carta (LFS 30 P).",
          "nl": "Opening met vingerafdruk, inbraakcertificering EN 14450 S2 en 30 minuten brandbescherming voor papier (LFS 30 P).",
          "pl": "Czytnik linii papilarnych, certyfikat odporności na włamanie EN 14450 S2 i 30 minut ognioodporności dla dokumentów papierowych (LFS 30 P).",
          "sv": "Fingeravtrycksläsare, inbrottscertifiering enligt EN 14450 S2 och 30 minuters brandskydd för papper (LFS 30 P).",
          "us": "Fingerprint access, a European EN 14450 S2 burglary rating and 30 minutes of fire protection for paper (LFS 30 P).",
          "ca": "Fingerprint access, European EN 14450 S2 burglary certification and 30 minutes of fire protection for paper (LFS 30 P)."
        }
      },
      {
        "model": "Burg-Wächter PointSafe P 2 E FS",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Petit coffre de 21 litres avec code, empreinte et clé de secours, à visser au mur ou au sol.",
          "en": "Compact 21-litre safe with keypad, fingerprint and override key, ready to bolt to a wall or floor.",
          "de": "Kompakter 21-Liter-Tresor mit Code, Fingerabdruck und Notschlüssel, zum Verschrauben an Wand oder Boden.",
          "es": "Caja fuerte pequeña de 21 litros con código, huella y llave de emergencia, para atornillar a la pared o al suelo.",
          "it": "Cassaforte compatta da 21 litri con codice, impronta e chiave di emergenza, da fissare a muro o a pavimento.",
          "nl": "Compacte kluis van 21 liter met code, vingerafdruk en noodsleutel, om aan muur of vloer vast te schroeven.",
          "pl": "Niewielki sejf 21 l otwierany kodem, odciskiem palca lub kluczem awaryjnym, do przykręcenia do ściany lub podłogi.",
          "sv": "Litet värdeskåp på 21 liter med kodlås, fingeravtryck och reservnyckel, att skruva fast i vägg eller golv.",
          "us": "Compact 0.7 cu ft (21 L) safe with a keypad, fingerprint reader and backup key, ready to bolt to a wall or floor.",
          "ca": "Compact 21-litre safe with keypad, fingerprint and override key, ready to bolt to a wall or floor."
        }
      },
      {
        "model": "Yale Smart Safe YSS/250/EB1",
        "role": {
          "fr": "Idéal pour les alertes smartphone",
          "en": "Best for phone alerts",
          "de": "Ideal für Smartphone-Benachrichtigungen",
          "es": "Ideal para alertas en el móvil",
          "it": "Ideale per le notifiche sullo smartphone",
          "nl": "Ideaal voor smartphonemeldingen",
          "pl": "Najlepszy, jeśli zależy Ci na powiadomieniach na smartfonie",
          "sv": "Bäst för notiser i mobilen",
          "us": "Best for smartphone alerts",
          "ca": "Best for smartphone alerts"
        },
        "why": {
          "fr": "Application Yale Home avec notification à chaque ouverture, codes temporaires et accès à distance via le pont Wi-Fi.",
          "en": "The Yale Home app notifies you every time the safe is opened, with temporary codes and remote access via the Wi-Fi bridge.",
          "de": "Yale-Home-App mit Benachrichtigung bei jeder Öffnung, temporären Codes und Fernzugriff über die WLAN-Bridge.",
          "es": "App Yale Home con aviso en cada apertura, códigos temporales y acceso remoto mediante el puente wifi.",
          "it": "App Yale Home con notifica a ogni apertura, codici temporanei e accesso da remoto tramite il bridge Wi-Fi.",
          "nl": "Yale Home-app met melding bij elke opening, tijdelijke codes en toegang op afstand via de wifi-bridge.",
          "pl": "Aplikacja Yale Home powiadamia o każdym otwarciu, pozwala tworzyć kody tymczasowe, a przez mostek Wi-Fi daje zdalny dostęp.",
          "sv": "Appen Yale Home med notis vid varje öppning, tillfälliga koder och fjärråtkomst via wifi-bryggan.",
          "us": "Yale Home app with a notification every time the safe opens, temporary codes and remote access through the Wi-Fi bridge.",
          "ca": "Yale Home app with a notification at every opening, temporary codes and remote access via the Wi-Fi bridge."
        }
      }
    ]
  },
  "lave-linge-connecte-guide": {
    "question": {
      "fr": "Quel est le meilleur lave-linge connecté en 2026 ?",
      "en": "What is the best smart washing machine in 2026?",
      "de": "Welche ist die beste vernetzte Waschmaschine 2026?",
      "es": "¿Cuál es la mejor lavadora con wifi en 2026?",
      "it": "Qual è la migliore lavatrice smart nel 2026?",
      "nl": "Wat is de beste slimme wasmachine in 2026?",
      "pl": "Jaka jest najlepsza inteligentna pralka w 2026 roku?",
      "sv": "Vilken smart tvättmaskin är bäst 2026?",
      "us": "What is the best smart washer in 2026?",
      "ca": "What is the best smart washing machine in 2026?"
    },
    "picks": [
      {
        "model": "Bosch Serie 8 WGB256A40",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "10 kg, classe A, essorage 1 600 tr/min, dosage automatique i-DOS et application Home Connect complète.",
          "en": "10 kg, class A, 1,600 rpm spin, i-DOS automatic dosing and a full-featured Home Connect app.",
          "de": "10 kg, Klasse A, 1.600 U/min, automatische i-DOS-Dosierung und umfassende Home-Connect-App.",
          "es": "10 kg, clase A, centrifugado a 1.600 rpm, dosificación automática i-DOS y app Home Connect completa.",
          "it": "10 kg, classe A, centrifuga a 1.600 giri, dosaggio automatico i-DOS e app Home Connect completa.",
          "nl": "10 kg, klasse A, 1.600 tpm, automatische i-DOS-dosering en een uitgebreide Home Connect-app.",
          "pl": "10 kg, klasa A, wirowanie 1600 obr./min, automatyczne dozowanie i-DOS i rozbudowana aplikacja Home Connect.",
          "sv": "10 kg, klass A, centrifugering på 1 600 varv/min, automatisk dosering med i-DOS och en komplett Home Connect-app.",
          "us": "10 kg (22 lb), EU energy class A, 1,600 rpm spin, i-DOS automatic detergent dosing and a full-featured Home Connect app.",
          "ca": "10 kg, EU class A, 1,600 rpm spin, i-DOS automatic dosing and a full-featured Home Connect app."
        }
      },
      {
        "model": "Haier I-Pro Series 7 HW100-B14979",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "10 kg connectés en classe A avec l'application hOn, un moteur Direct Motion silencieux et un programme vapeur Refresh.",
          "en": "A smart 10 kg class A machine with the hOn app, a quiet Direct Motion motor and a Refresh steam programme.",
          "de": "Vernetzte 10 kg in Klasse A mit hOn-App, leisem Direct-Motion-Motor und Dampfprogramm Refresh.",
          "es": "10 kg, clase A y app hOn, con motor Direct Motion silencioso y programa de vapor Refresh.",
          "it": "10 kg, classe A e Wi-Fi con l'app hOn, motore Direct Motion silenzioso e programma a vapore Refresh.",
          "nl": "Slimme 10 kg in klasse A met hOn-app, stille Direct Motion-motor en stoomprogramma Refresh.",
          "pl": "Pralka 10 kg z Wi-Fi w klasie A, z aplikacją hOn, cichym silnikiem Direct Motion i programem parowym Refresh.",
          "sv": "Uppkopplad 10-kilosmaskin i klass A med appen hOn, en tyst Direct Motion-motor och ångprogrammet Refresh.",
          "us": "A smart 10 kg (22 lb), EU energy class A washer with the hOn app, a quiet Direct Motion motor and a Refresh steam program.",
          "ca": "A smart 10 kg washer, EU class A, with the hOn app, a quiet Direct Motion motor and a Refresh steam program."
        }
      },
      {
        "model": "LG W4WR70E6Y",
        "role": {
          "fr": "Meilleur lave-linge séchant",
          "en": "Best washer-dryer",
          "de": "Bester Waschtrockner",
          "es": "Mejor lavasecadora",
          "it": "La migliore lavasciuga",
          "nl": "Beste was-droogcombinatie",
          "pl": "Najlepsza pralko-suszarka",
          "sv": "Bästa kombimaskin",
          "us": "Best washer-dryer combo",
          "ca": "Best washer-dryer combo"
        },
        "why": {
          "fr": "Lave 11 kg et sèche 6 kg dans un seul emplacement, avec moteur AI DD, vapeur et application LG ThinQ.",
          "en": "Washes 11 kg and dries 6 kg in the space of one machine, with an AI DD motor, steam and the LG ThinQ app.",
          "de": "Wäscht 11 kg und trocknet 6 kg auf einer Stellfläche, mit AI-DD-Antrieb, Dampf und LG-ThinQ-App.",
          "es": "Lava 11 kg y seca 6 kg en un solo hueco, con motor AI DD, vapor y app LG ThinQ.",
          "it": "Lava 11 kg e asciuga 6 kg nello spazio di un solo apparecchio, con motore AI DD, vapore e app LG ThinQ.",
          "nl": "Wast 11 kg en droogt 6 kg op één plek, met AI DD-motor, stoom en de LG ThinQ-app.",
          "pl": "Pierze do 11 kg i suszy do 6 kg, zajmując miejsce jednego urządzenia; silnik AI DD, para i aplikacja LG ThinQ.",
          "sv": "Tvättar 11 kg och torkar 6 kg på samma golvyta, med AI DD-motor, ånga och appen LG ThinQ.",
          "us": "Washes 11 kg (24 lb) and dries 6 kg (13 lb) in a single footprint, with an AI DD motor, steam and the LG ThinQ app.",
          "ca": "Washes 11 kg and dries 6 kg in a single footprint, with an AI DD motor, steam and the LG ThinQ app."
        }
      }
    ]
  },
  "interrupteur-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur interrupteur connecté en 2026 ?",
      "en": "What is the best smart light switch in 2026?",
      "de": "Was ist der beste smarte Lichtschalter 2026?",
      "es": "¿Cuál es el mejor interruptor inteligente en 2026?",
      "it": "Qual è il miglior interruttore smart nel 2026?",
      "nl": "Wat is de beste slimme lichtschakelaar in 2026?",
      "pl": "Jaki jest najlepszy inteligentny włącznik w 2026 roku?",
      "sv": "Vilken smart strömbrytare är bäst 2026?",
      "us": "What is the best smart light switch in 2026?",
      "ca": "What is the best smart light switch in 2026?"
    },
    "picks": [
      {
        "model": "Aqara Light Switch H2 EU",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Fonctionne avec ou sans neutre, compatible Zigbee et Matter over Thread, et ouvert à Apple Home, Google Home, Alexa et Home Assistant.",
          "en": "Works with or without a neutral wire, supports Zigbee and Matter over Thread, and is compatible with Apple Home, Google Home, Alexa and Home Assistant.",
          "de": "Funktioniert mit und ohne Neutralleiter, unterstützt Zigbee und Matter over Thread und passt zu Apple Home, Google Home, Alexa und Home Assistant.",
          "es": "Funciona con o sin neutro, admite Zigbee y Matter over Thread y se integra en Apple Home, Google Home, Alexa y Home Assistant.",
          "it": "Funziona con o senza neutro, supporta Zigbee e Matter over Thread e si integra con Apple Casa, Google Home, Alexa e Home Assistant.",
          "nl": "Werkt met of zonder nuldraad, ondersteunt Zigbee en Matter over Thread en werkt met Apple Home, Google Home, Alexa en Home Assistant.",
          "pl": "Działa z przewodem neutralnym i bez niego, obsługuje Zigbee i Matter over Thread oraz współpracuje z Apple Home, Google Home, Alexą i Home Assistant.",
          "sv": "Fungerar med eller utan nolledare, stöder Zigbee och Matter via Thread och kan anslutas till Apple Home, Google Home, Alexa och Home Assistant.",
          "us": "Works with or without a neutral, supports Zigbee and Matter over Thread, and joins Apple Home, Google Home, Alexa and Home Assistant.",
          "ca": "Works with or without a neutral, supports Zigbee and Matter over Thread, and joins Apple Home, Google Home, Alexa and Home Assistant."
        }
      },
      {
        "model": "Shelly 1PM Gen4",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Module 16 A caché derrière vos interrupteurs actuels, avec mesure de consommation, Wi-Fi, Zigbee et Matter sans passerelle (neutre requis).",
          "en": "A 16 A module that hides behind your existing switches, with energy monitoring, Wi-Fi, Zigbee and Matter, and no hub needed (requires a neutral wire).",
          "de": "16-A-Relais hinter Ihren vorhandenen Schaltern, mit Verbrauchsmessung, WLAN, Zigbee und Matter ohne Bridge (Neutralleiter nötig).",
          "es": "Módulo de 16 A que se esconde detrás de tus interruptores, con medición de consumo, wifi, Zigbee y Matter sin pasarela (necesita neutro).",
          "it": "Modulo da 16 A da nascondere dietro i tuoi interruttori, con misurazione dei consumi, Wi-Fi, Zigbee e Matter senza gateway (serve il neutro).",
          "nl": "16 A-relais achter je bestaande schakelaars, met verbruiksmeting, wifi, Zigbee en Matter zonder hub (nuldraad vereist).",
          "pl": "Moduł 16 A ukryty za dotychczasowymi włącznikami, z pomiarem zużycia energii, Wi-Fi, Zigbee i Matter bez bramki (wymaga przewodu neutralnego).",
          "sv": "Ett relä på 16 A som monteras dolt bakom dina befintliga strömbrytare, med energimätning, wifi, Zigbee och Matter utan hubb (nolledare krävs).",
          "us": "A 16 A relay that hides behind your existing switches, with energy monitoring, Wi-Fi, Zigbee and Matter, no hub needed (requires a neutral wire).",
          "ca": "A 16 A relay hidden behind your existing switches, with energy monitoring, Wi-Fi, Zigbee and Matter and no hub needed (neutral required)."
        }
      },
      {
        "model": "Philips Hue Tap Dial Switch",
        "role": {
          "fr": "Idéal pour ampoules connectées",
          "en": "Best for smart bulbs",
          "de": "Ideal für smarte Lampen",
          "es": "Ideal para bombillas inteligentes",
          "it": "Ideale per lampadine smart",
          "nl": "Ideaal voor slimme lampen",
          "pl": "Idealny do inteligentnych żarówek",
          "sv": "Bäst för smarta lampor",
          "us": "Best for smart bulbs",
          "ca": "Best for smart bulbs"
        },
        "why": {
          "fr": "Commande sur pile sans câblage, avec quatre boutons de scènes et une molette de variation pour piloter vos ampoules Hue.",
          "en": "A battery-powered switch with no wiring, four scene buttons and a dimmer dial to control your Hue bulbs.",
          "de": "Batteriebetriebener Schalter ohne Verkabelung, mit vier Szenentasten und Drehrad zum Dimmen Ihrer Hue-Lampen.",
          "es": "Mando a pilas, sin cables, con cuatro botones de escena y una rueda para regular la intensidad de tus bombillas Hue.",
          "it": "Comando a pila senza cavi da tirare, con quattro tasti per le scene e una rotella per regolare l'intensità delle lampadine Hue.",
          "nl": "Bediening op batterij zonder bekabeling, met vier scèneknoppen en een draaiknop om je Hue-lampen te dimmen.",
          "pl": "Włącznik na baterię, który nie wymaga okablowania, z czterema przyciskami scen i pokrętłem ściemniania do sterowania żarówkami Hue.",
          "sv": "Batteridriven brytare utan kabeldragning, med fyra scenknappar och ett vred för att dimra dina Hue-lampor.",
          "us": "Battery-powered remote with no wiring, four scene buttons and a dimming dial to control your Hue bulbs.",
          "ca": "Battery-powered control with no wiring, four scene buttons and a dimming dial to run your Hue bulbs."
        }
      }
    ]
  },
  "box-domotique-hub-comparatif": {
    "question": {
      "fr": "Quelle est la meilleure box domotique en 2026 ?",
      "en": "What is the best smart home hub in 2026?",
      "de": "Was ist die beste Smart-Home-Zentrale 2026?",
      "es": "¿Cuál es el mejor hub domótico en 2026?",
      "it": "Qual è il miglior hub domotico nel 2026?",
      "nl": "Wat is de beste smart-home-hub in 2026?",
      "pl": "Jaka jest najlepsza centralka (hub) inteligentnego domu w 2026 roku?",
      "sv": "Vilken smarthemshubb är bäst 2026?",
      "us": "What is the best smart home hub in 2026?",
      "ca": "What is the best smart home hub in 2026?"
    },
    "picks": [
      {
        "model": "Homey Pro (Early 2023)",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Zigbee, Z-Wave, Thread, Matter, infrarouge et 433 MHz intégrés, automatisations locales et application simple.",
          "en": "Built-in Zigbee, Z-Wave, Thread, Matter, infrared and 433 MHz, local automations and a simple app.",
          "de": "Zigbee, Z-Wave, Thread, Matter, Infrarot und 433 MHz integriert, lokale Automationen und einfache App.",
          "es": "Zigbee, Z-Wave, Thread, Matter, infrarrojos y 433 MHz integrados, automatizaciones locales y app sencilla.",
          "it": "Zigbee, Z-Wave, Thread, Matter, infrarossi e 433 MHz integrati, automazioni locali e app semplice.",
          "nl": "Zigbee, Z-Wave, Thread, Matter, infrarood en 433 MHz ingebouwd, lokale automatiseringen en een eenvoudige app.",
          "pl": "Wbudowane Zigbee, Z-Wave, Thread, Matter, podczerwień i 433 MHz, lokalne automatyzacje i prosta aplikacja.",
          "sv": "Inbyggt stöd för Zigbee, Z-Wave, Thread, Matter, IR och 433 MHz, plus lokala automationer och en enkel app.",
          "us": "Built-in Zigbee, Z-Wave, Thread, Matter, infrared and 433 MHz, local automations and a simple app.",
          "ca": "Built-in Zigbee, Z-Wave, Thread, Matter, infrared and 433 MHz, local automations and a simple app."
        }
      },
      {
        "model": "Aqara Hub M3",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Contrôleur Matter, routeur Thread, Zigbee, infrarouge 360° et PoE, avec automatisations exécutées en local.",
          "en": "Matter controller, Thread border router, Zigbee, 360° infrared and PoE, with automations that run locally.",
          "de": "Matter-Controller, Thread-Border-Router, Zigbee, 360°-Infrarot und PoE, mit lokal ausgeführten Automationen.",
          "es": "Controlador Matter, router de borde Thread, Zigbee, infrarrojos de 360° y PoE, con automatizaciones en local.",
          "it": "Controller Matter, border router Thread, Zigbee, infrarossi a 360° e PoE, con automazioni eseguite in locale.",
          "nl": "Matter-controller, Thread-border-router, Zigbee, 360°-infrarood en PoE, met lokaal uitgevoerde automatiseringen.",
          "pl": "Kontroler Matter, router Thread, Zigbee, podczerwień 360° i PoE, a automatyzacje działają lokalnie.",
          "sv": "Styrenhet för Matter, Thread Border Router, Zigbee, IR-sändare som täcker 360° och PoE – automationerna körs lokalt.",
          "us": "Matter controller, Thread border router, Zigbee, 360° infrared and PoE, with locally executed automations.",
          "ca": "Matter controller, Thread border router, Zigbee, 360° infrared and PoE, with locally executed automations."
        }
      },
      {
        "model": "Home Assistant Green",
        "role": {
          "fr": "Idéal pour les passionnés",
          "en": "Best for enthusiasts",
          "de": "Ideal für Enthusiasten",
          "es": "Ideal para usuarios avanzados",
          "it": "Ideale per gli appassionati",
          "nl": "Ideaal voor gevorderden",
          "pl": "Dla pasjonatów",
          "sv": "Bäst för entusiaster",
          "us": "Best for power users",
          "ca": "Best for power users"
        },
        "why": {
          "fr": "Logiciel libre 100 % local, plus de 2 000 intégrations ; radios Zigbee/Thread et Z-Wave via adaptateurs ZBT-2 et ZWA-2.",
          "en": "Open-source software that runs 100% locally, with more than 2,000 integrations; Zigbee/Thread and Z-Wave radios via the ZBT-2 and ZWA-2 adapters.",
          "de": "Vollständig lokale Open-Source-Software mit über 2.000 Integrationen; Zigbee/Thread und Z-Wave per ZBT-2 und ZWA-2.",
          "es": "Software libre totalmente local con más de 2.000 integraciones; Zigbee/Thread y Z-Wave con adaptadores ZBT-2 y ZWA-2.",
          "it": "Software open source tutto locale con oltre 2.000 integrazioni; Zigbee/Thread e Z-Wave con adattatori ZBT-2 e ZWA-2.",
          "nl": "Volledig lokale opensourcesoftware met 2.000+ integraties; Zigbee/Thread en Z-Wave via ZBT-2- en ZWA-2-adapters.",
          "pl": "Otwarte oprogramowanie działające w 100% lokalnie, ponad 2000 integracji; obsługa Zigbee/Thread i Z-Wave przez adaptery ZBT-2 i ZWA-2.",
          "sv": "Helt lokal programvara med öppen källkod och över 2 000 integrationer; Zigbee/Thread och Z-Wave via adaptrarna ZBT-2 och ZWA-2.",
          "us": "Fully local open-source software with 2,000+ integrations; Zigbee/Thread and Z-Wave via ZBT-2 and ZWA-2 adapters.",
          "ca": "Fully local open-source software with 2,000+ integrations; Zigbee/Thread and Z-Wave via ZBT-2 and ZWA-2 adapters."
        }
      }
    ]
  },
  "alarme-exterieure-detecteur-jardin": {
    "question": {
      "fr": "Quel est le meilleur détecteur ou la meilleure sirène extérieure pour jardin en 2026 ?",
      "en": "What is the best outdoor alarm sensor or siren for a garden in 2026?",
      "de": "Welcher Außenmelder oder welche Außensirene ist 2026 die beste für den Garten?",
      "es": "¿Cuál es el mejor detector o sirena exterior para jardín en 2026?",
      "it": "Qual è il miglior rilevatore o la migliore sirena da esterno per il giardino nel 2026?",
      "nl": "Wat is de beste buitensensor of buitensirene voor de tuin in 2026?",
      "pl": "Jaki czujnik zewnętrzny albo jaką syrenę alarmową do ogrodu wybrać w 2026 roku?",
      "sv": "Vilken larmsensor eller utomhussiren är bäst för trädgården 2026?",
      "us": "What is the best outdoor motion sensor alarm or siren for your yard in 2026?",
      "ca": "What is the best outdoor alarm sensor or siren for a yard in 2026?"
    },
    "picks": [
      {
        "model": "Ajax MotionProtect Outdoor",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Double capteur PIR, portée réglable de 3 à 15 m et immunité aux animaux jusqu'à 80 cm pour limiter les fausses alarmes.",
          "en": "Dual PIR sensors, an adjustable range of 3 to 15 m and pet immunity up to 80 cm to keep false alarms down.",
          "de": "Doppel-PIR, einstellbare Reichweite von 3 bis 15 m und Haustierimmunität bis 80 cm gegen Fehlalarme.",
          "es": "Doble sensor PIR, alcance ajustable de 3 a 15 m e inmunidad a mascotas de hasta 80 cm para evitar falsas alarmas.",
          "it": "Doppio sensore PIR, portata regolabile da 3 a 15 m e immunità agli animali fino a 80 cm per ridurre i falsi allarmi.",
          "nl": "Dubbele PIR-sensor, instelbaar bereik van 3 tot 15 m en huisdierimmuniteit tot 80 cm tegen vals alarm.",
          "pl": "Podwójny czujnik PIR, zasięg regulowany od 3 do 15 m i odporność na ruch zwierząt do 80 cm wysokości, co ogranicza fałszywe alarmy.",
          "sv": "Dubbla PIR-sensorer, räckvidd som går att ställa in på 3–15 m och husdjursimmunitet upp till 80 cm, så att falsklarmen blir färre.",
          "us": "Dual PIR sensors, an adjustable range of 10 to 50 ft (3 to 15 m) and pet immunity up to 31 in (80 cm) to cut down on false alarms.",
          "ca": "Dual PIR sensors, 3 to 15 m adjustable range and pet immunity up to 80 cm to keep false alarms down."
        }
      },
      {
        "model": "Ring Alarm Outdoor Siren",
        "role": {
          "fr": "Idéal pour l'écosystème Ring",
          "en": "Best for Ring users",
          "de": "Ideal für Ring-Nutzer",
          "es": "Ideal para usuarios de Ring",
          "it": "Ideale per chi usa Ring",
          "nl": "Ideaal voor Ring-gebruikers",
          "pl": "Idealna w ekosystemie Ring",
          "sv": "Bäst för Ring-användare",
          "us": "Best for Ring users",
          "ca": "Best for Ring users"
        },
        "why": {
          "fr": "Sirène IP66 de plus de 100 dB avec stroboscope, volume réglable et recharge solaire possible via le Ring Solar Panel.",
          "en": "IP66 siren rated over 100 dB with a strobe, adjustable volume and optional solar charging via the Ring Solar Panel.",
          "de": "IP66-Sirene mit über 100 dB, Stroboskop, einstellbarer Lautstärke und optionaler Solarladung über das Ring Solar Panel.",
          "es": "Sirena IP66 de más de 100 dB con luz estroboscópica, volumen ajustable y opción de recarga solar con el Ring Solar Panel.",
          "it": "Sirena IP66 da oltre 100 dB con luce stroboscopica, volume regolabile e ricarica solare opzionale tramite il Ring Solar Panel.",
          "nl": "IP66-sirene van meer dan 100 dB met stroboscoop, instelbaar volume en optioneel zonneladen via het Ring Solar Panel.",
          "pl": "Syrena IP66 o głośności ponad 100 dB, ze stroboskopem i regulacją głośności; można ją doładowywać z panelu Ring Solar Panel.",
          "sv": "Siren med IP66 och över 100 dB, blixtljus, justerbar volym och möjlighet till solcellsladdning via Ring Solar Panel.",
          "us": "An IP66 siren that tops 100 dB, with a strobe light, adjustable volume and optional solar charging from the Ring Solar Panel.",
          "ca": "IP66 siren rated over 100 dB with a strobe, adjustable volume and optional solar charging via the Ring Solar Panel."
        }
      },
      {
        "model": "Philips Hue Outdoor Motion Sensor",
        "role": {
          "fr": "Meilleur pour l'éclairage automatique",
          "en": "Best for automatic lighting",
          "de": "Beste Wahl für automatisches Licht",
          "es": "Mejor para iluminación automática",
          "it": "Il migliore per l'illuminazione automatica",
          "nl": "Beste voor automatische verlichting",
          "pl": "Najlepszy do automatycznego oświetlenia",
          "sv": "Bäst för automatisk belysning",
          "us": "Best for automatic lighting",
          "ca": "Best for automatic lighting"
        },
        "why": {
          "fr": "Allume vos lampes Hue extérieures dès un passage : 12 m sur 160°, IP54, capteur de luminosité. Un complément, pas une alarme.",
          "en": "Switches on your outdoor Hue lights as soon as someone walks past: 12 m over 160°, IP54 and a daylight sensor. An add-on, not an alarm.",
          "de": "Schaltet Hue-Außenleuchten bei Bewegung ein: 12 m auf 160°, IP54, Tageslichtsensor. Eine Ergänzung, keine Alarmanlage.",
          "es": "Enciende tus luces Hue de exterior en cuanto alguien pasa: 12 m a 160°, IP54 y sensor de luz. Un complemento, no una alarma.",
          "it": "Accende le luci Hue da esterno appena passa qualcuno: 12 m su 160°, IP54, sensore di luminosità. Un complemento, non un allarme.",
          "nl": "Zet je Hue-buitenlampen aan bij beweging: 12 m over 160°, IP54, daglichtsensor. Een aanvulling, geen alarm.",
          "pl": "Włącza zewnętrzne lampy Hue, gdy tylko ktoś przejdzie: zasięg 12 m w kącie 160°, IP54, czujnik natężenia światła. To uzupełnienie, a nie alarm.",
          "sv": "Tänder dina Hue-lampor utomhus så fort någon passerar: räckvidd på 12 m med 160° täckning, IP54 och ljussensor. Ett komplement, inte ett larm.",
          "us": "Switches on your outdoor Hue lights when someone walks by: 40 ft (12 m) range over 160°, IP54, daylight sensor. An add-on, not an alarm.",
          "ca": "Turns on your outdoor Hue lights as someone passes: 12 m over 160°, IP54, daylight sensor. A complement, not an alarm."
        }
      }
    ]
  },
  "rideau-motorise-connecte-guide": {
    "question": {
      "fr": "Quel est le meilleur rideau motorisé connecté en 2026 ?",
      "en": "What is the best smart curtain motor in 2026?",
      "de": "Welcher ist der beste smarte Vorhangantrieb 2026?",
      "es": "¿Cuál es la mejor cortina motorizada inteligente en 2026?",
      "it": "Qual è il miglior motore smart per tende nel 2026?",
      "nl": "Wat is het beste slimme gemotoriseerde gordijn in 2026?",
      "pl": "Jaki jest najlepszy inteligentny napęd do zasłon w 2026 roku?",
      "sv": "Vilken smart gardinmotor är bäst 2026?",
      "us": "What is the best smart curtain motor in 2026?",
      "ca": "What is the best smart motorized curtain in 2026?"
    },
    "picks": [
      {
        "model": "SwitchBot Curtain 3",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Versions tringle, rail en U et rail en I, jusqu'à 15 kg, mode silencieux et Matter via hub SwitchBot : le robot le plus polyvalent.",
          "en": "Rod, U-rail and I-rail versions, up to 15 kg, quiet mode and Matter via a SwitchBot hub: the most versatile curtain motor.",
          "de": "Versionen für Stange, U- und I-Schiene, bis 15 kg, Leisemodus und Matter über SwitchBot Hub: der vielseitigste Vorhangroboter.",
          "es": "Versiones para barra, riel en U y riel en I, hasta 15 kg, modo silencioso y Matter con hub SwitchBot: el robot más versátil.",
          "it": "Versioni per bastone, binario a U e a I, fino a 15 kg, modalità silenziosa e Matter con hub SwitchBot: il robot più versatile.",
          "nl": "Versies voor roede, U-rail en I-rail, tot 15 kg, stille modus en Matter via SwitchBot-hub: de veelzijdigste gordijnrobot.",
          "pl": "Wersje na karnisz drążkowy oraz szyny typu U i I, do 15 kg, tryb cichy i Matter przez hub SwitchBot – najbardziej wszechstronny z napędów.",
          "sv": "Finns för gardinstång, U-skena och I-skena, klarar upp till 15 kg, har tyst läge och Matter via en SwitchBot-hubb: den mest mångsidiga gardinmotorn.",
          "us": "Comes in rod, U-rail and I-rail versions, moves curtains up to 33 lb (15 kg), has a quiet mode and works with Matter through a SwitchBot hub: the most versatile curtain motor here.",
          "ca": "Rod, U-rail and I-rail versions, up to 15 kg, quiet mode and Matter via a SwitchBot hub: the most versatile curtain robot."
        }
      },
      {
        "model": "Aqara Curtain Driver E1",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Batterie de 6 000 mAh jusqu'à 12 mois, capteur de luminosité intégré et Zigbee 3.0 : idéal si vous avez déjà un hub Aqara.",
          "en": "6,000 mAh battery lasting up to 12 months, built-in light sensor and Zigbee 3.0: ideal if you already own an Aqara hub.",
          "de": "6.000-mAh-Akku mit bis zu 12 Monaten Laufzeit, Lichtsensor und Zigbee 3.0: ideal, wenn Sie bereits einen Aqara Hub haben.",
          "es": "Batería de 6.000 mAh que dura hasta 12 meses, sensor de luz integrado y Zigbee 3.0: ideal si ya tienes un hub Aqara.",
          "it": "Batteria da 6.000 mAh fino a 12 mesi, sensore di luce integrato e Zigbee 3.0: ideale se hai già un hub Aqara.",
          "nl": "Batterij van 6.000 mAh tot 12 maanden, ingebouwde lichtsensor en Zigbee 3.0: ideaal als u al een Aqara-hub hebt.",
          "pl": "Akumulator 6000 mAh, który wystarcza nawet na 12 miesięcy, wbudowany czujnik natężenia światła i Zigbee 3.0 – idealny, jeśli masz już hub Aqara.",
          "sv": "Batteri på 6 000 mAh som räcker upp till 12 månader, inbyggd ljussensor och Zigbee 3.0: perfekt om du redan har en Aqara-hubb.",
          "us": "A 6,000 mAh battery rated for up to 12 months, a built-in light sensor and Zigbee 3.0: a natural fit if you already own an Aqara hub.",
          "ca": "6,000 mAh battery lasting up to 12 months, built-in light sensor and Zigbee 3.0: ideal if you already own an Aqara hub."
        }
      },
      {
        "model": "Eve MotionBlinds Upgrade Kit",
        "role": {
          "fr": "Idéal pour stores enrouleurs Matter",
          "en": "Best for Matter roller blinds",
          "de": "Ideal für Rollos mit Matter",
          "es": "Ideal para estores enrollables con Matter",
          "it": "Ideale per tende a rullo Matter",
          "nl": "Ideaal voor rolgordijnen met Matter",
          "pl": "Najlepszy do rolet z obsługą Matter",
          "sv": "Bäst för rullgardiner med Matter",
          "us": "Best for Matter roller shades",
          "ca": "Best for Matter roller blinds"
        },
        "why": {
          "fr": "Moteur à glisser dans le tube d'un store existant, Thread et Matter natifs, jusqu'à un an d'autonomie et ombrage adaptatif sur iPhone.",
          "en": "A motor that slides into the tube of an existing roller blind, with native Thread and Matter, up to a year of battery life and Adaptive Shading on iPhone.",
          "de": "Motor für die Welle eines vorhandenen Rollos, Thread und Matter nativ, bis zu ein Jahr Akkulaufzeit und adaptive Beschattung am iPhone.",
          "es": "Motor que se mete en el tubo del estor que ya tienes, con Thread y Matter nativos, hasta un año de autonomía y sombreado adaptativo desde el iPhone.",
          "it": "Motore da inserire nel tubo di una tenda a rullo esistente, Thread e Matter nativi, fino a un anno di autonomia e ombreggiatura adattiva su iPhone.",
          "nl": "Motor die in de buis van een bestaand rolgordijn schuift, native Thread en Matter, tot een jaar batterijduur en adaptieve zonwering op iPhone.",
          "pl": "Silnik wsuwany do rury nawojowej istniejącej rolety, natywna obsługa Thread i Matter, do roku pracy na baterii i adaptacyjne zacienianie na iPhonie.",
          "sv": "En motor som skjuts in i röret på en befintlig rullgardin, med inbyggt stöd för Thread och Matter, upp till ett års batteritid och funktionen Adaptive Shading på iPhone.",
          "us": "A motor that slides into the tube of a roller shade you already own, with native Thread and Matter, up to a year of battery life and Adaptive Shading on iPhone.",
          "ca": "A motor that slides into an existing blind's tube, native Thread and Matter, up to a year of battery life and Adaptive Shading on iPhone."
        }
      }
    ]
  },
  "batterie-domestique-stockage-solaire": {
    "question": {
      "fr": "Quelle est la meilleure batterie domestique pour panneaux solaires en 2026 ?",
      "en": "What is the best home battery for solar panels in 2026?",
      "de": "Welcher ist der beste Batteriespeicher für Solaranlagen 2026?",
      "es": "¿Cuál es la mejor batería doméstica para placas solares en 2026?",
      "it": "Qual è la migliore batteria di accumulo per il fotovoltaico nel 2026?",
      "nl": "Wat is de beste thuisbatterij voor zonnepanelen in 2026?",
      "pl": "Jaki jest najlepszy domowy magazyn energii do paneli fotowoltaicznych w 2026 roku?",
      "sv": "Vilket hembatteri är bäst för solceller 2026?",
      "us": "What is the best home battery for solar panels in 2026?",
      "ca": "What is the best home battery for solar panels in 2026?"
    },
    "picks": [
      {
        "model": "Anker SOLIX Solarbank 3 E2700 Pro",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Batterie plug-in tout-en-un de 2,7 kWh avec entrées solaires, pilotage par compteur intelligent et extensions au-delà de 10 kWh.",
          "en": "An all-in-one 2.7 kWh plug-in battery with solar inputs, smart meter-based control and expansion to more than 10 kWh.",
          "de": "All-in-one-Steckerspeicher mit 2,7 kWh, Solareingängen, Smart-Meter-Steuerung und Erweiterung über 10 kWh.",
          "es": "Batería enchufable todo en uno de 2,7 kWh, con entradas solares, control mediante medidor inteligente y ampliable a más de 10 kWh.",
          "it": "Batteria plug-in tutto in uno da 2,7 kWh con ingressi solari, gestita tramite contatore intelligente ed espandibile oltre 10 kWh.",
          "nl": "Alles-in-één plug-in batterij van 2,7 kWh met zonne-ingangen, aansturing via slimme meter en uitbreiding tot boven 10 kWh.",
          "pl": "Magazyn energii typu plug-in „wszystko w jednym” o pojemności 2,7 kWh, z wejściami solarnymi, sterowaniem przez inteligentny miernik energii i możliwością rozbudowy do ponad 10 kWh.",
          "sv": "Allt-i-ett-batteri på 2,7 kWh som kopplas in i ett vanligt uttag, med solcellsingångar, styrning via smart energimätare och möjlighet att bygga ut till över 10 kWh.",
          "us": "All-in-one 2.7 kWh plug-in battery with solar inputs, smart meter control and expansion beyond 10 kWh.",
          "ca": "All-in-one 2.7 kWh plug-in battery with solar inputs, smart meter control and expansion beyond 10 kWh."
        }
      },
      {
        "model": "Marstek Venus E 3.0",
        "role": {
          "fr": "Meilleur rapport capacité-prix",
          "en": "Best capacity for the money",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación capacidad-precio",
          "it": "Miglior rapporto capacità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek pojemności do ceny",
          "sv": "Mest kapacitet för pengarna",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "5,12 kWh en LiFePO4 dans un seul boîtier couplé en AC, compatible avec toute installation et dotée d'une prise de secours.",
          "en": "5.12 kWh of LiFePO4 in a single AC-coupled unit that works with any solar system and includes a backup socket.",
          "de": "5,12 kWh LiFePO4 in einem AC-gekoppelten Gerät, passend zu jeder Anlage und mit Notstromsteckdose.",
          "es": "5,12 kWh LiFePO4 en una sola unidad acoplada en AC, compatible con cualquier instalación y con un enchufe de emergencia.",
          "it": "5,12 kWh LiFePO4 in un'unica unità con accoppiamento in AC, compatibile con qualsiasi impianto e dotata di presa di emergenza.",
          "nl": "5,12 kWh LiFePO4 in één AC-gekoppeld toestel, geschikt voor elke installatie en met noodstroomstopcontact.",
          "pl": "5,12 kWh w ogniwach LiFePO4 w jednej obudowie, podłączany po stronie AC, więc pasuje do każdej instalacji; ma też gniazdo zasilania awaryjnego.",
          "sv": "LiFePO4-batteri på 5,12 kWh i en enda AC-kopplad enhet som fungerar med alla solcellsanläggningar och har ett reservuttag.",
          "us": "5.12 kWh of LiFePO4 in a single AC-coupled unit that works with any solar setup and includes a backup outlet.",
          "ca": "5.12 kWh of LiFePO4 in a single AC-coupled unit that works with any solar system and includes a backup outlet."
        }
      },
      {
        "model": "Tesla Powerwall 3",
        "role": {
          "fr": "Idéale pour secourir toute la maison",
          "en": "Best for whole-home backup",
          "de": "Ideal für Notstrom im ganzen Haus",
          "es": "Ideal para respaldar toda la casa",
          "it": "Ideale per il backup di tutta la casa",
          "nl": "Ideaal voor noodstroom in het hele huis",
          "pl": "Najlepszy do zasilania awaryjnego całego domu",
          "sv": "Bäst som reservkraft för hela huset",
          "us": "Best for whole-home backup",
          "ca": "Best for whole-home backup"
        },
        "why": {
          "fr": "13,5 kWh utilisables, onduleur solaire intégré et jusqu'à 11,04 kW de puissance, posée par un installateur certifié.",
          "en": "13.5 kWh usable, built-in solar inverter and up to 11.04 kW of output, fitted by a certified installer.",
          "de": "13,5 kWh nutzbar, integrierter Solarwechselrichter und bis zu 11,04 kW Leistung, montiert vom zertifizierten Installateur.",
          "es": "13,5 kWh útiles, inversor solar integrado y hasta 11,04 kW de potencia; la monta un instalador certificado.",
          "it": "13,5 kWh utilizzabili, inverter solare integrato e fino a 11,04 kW di potenza; va installata da un tecnico certificato.",
          "nl": "13,5 kWh bruikbaar, ingebouwde zonne-omvormer en tot 11,04 kW vermogen, geplaatst door een gecertificeerde installateur.",
          "pl": "13,5 kWh pojemności użytkowej, wbudowany falownik fotowoltaiczny i moc do 11,04 kW; montaż wykonuje certyfikowany instalator.",
          "sv": "13,5 kWh användbar kapacitet, inbyggd växelriktare för solceller och upp till 11,04 kW uteffekt. Installeras av en certifierad installatör.",
          "us": "13.5 kWh usable, a built-in solar inverter and up to 11.04 kW of output, with installation by a certified installer.",
          "ca": "13.5 kWh usable, built-in solar inverter and up to 11.04 kW of output, with installation by a certified installer."
        }
      }
    ]
  },
  "humidificateur-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur humidificateur connecté en 2026 ?",
      "en": "What is the best smart humidifier in 2026?",
      "de": "Welcher ist der beste smarte Luftbefeuchter 2026?",
      "es": "¿Cuál es el mejor humidificador inteligente en 2026?",
      "it": "Qual è il miglior umidificatore smart nel 2026?",
      "nl": "Wat is de beste slimme luchtbevochtiger in 2026?",
      "pl": "Jaki jest najlepszy inteligentny nawilżacz powietrza w 2026 roku?",
      "sv": "Vilken smart luftfuktare är bäst 2026?",
      "us": "What is the best smart humidifier in 2026?",
      "ca": "What is the best smart humidifier in 2026?"
    },
    "picks": [
      {
        "model": "BONECO H700 SMART",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Humidification par évaporation sans poussière blanche, purification HEPA intégrée et pilotage Wi-Fi pour les grandes pièces.",
          "en": "Evaporative humidification with no white dust, built-in HEPA purification and Wi-Fi control for large rooms.",
          "de": "Verdunstung ohne weißen Staub, integrierte HEPA-Luftreinigung und WLAN-Steuerung für große Räume.",
          "es": "Humidificación evaporativa sin polvo blanco, purificación HEPA integrada y control por wifi para estancias grandes.",
          "it": "Umidificazione evaporativa senza polvere bianca, purificazione HEPA integrata e controllo Wi-Fi per ambienti ampi.",
          "nl": "Verdampingsbevochtiging zonder wit stof, ingebouwde HEPA-zuivering en wifibediening voor grote ruimtes.",
          "pl": "Nawilżanie ewaporacyjne bez białego osadu, wbudowany filtr HEPA i sterowanie przez Wi-Fi – do dużych pomieszczeń.",
          "sv": "Luftfuktning genom avdunstning utan vitt damm, inbyggd HEPA-rening och styrning via wifi för stora rum.",
          "us": "Evaporative humidification with no white dust, built-in HEPA purification and Wi-Fi control for large rooms.",
          "ca": "Evaporative humidification with no white dust, built-in HEPA purification and Wi-Fi control for large rooms."
        }
      },
      {
        "model": "Levoit Classic 300S",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Ultrasons 6 L à remplissage par le haut, mode automatique, app VeSync et compatibilité Alexa et Google à prix d'entrée de gamme.",
          "en": "A 6 L top-fill ultrasonic unit with auto mode, the VeSync app and Alexa and Google support, at an entry-level price.",
          "de": "6-Liter-Ultraschallgerät mit Befüllung von oben, Automatik, VeSync-App sowie Alexa und Google im Einstiegssegment.",
          "es": "Ultrasónico de 6 L con llenado por arriba, modo automático, app VeSync y compatible con Alexa y Google, a precio de gama de entrada.",
          "it": "Umidificatore a ultrasuoni da 6 L con riempimento dall'alto, modalità automatica, app VeSync e compatibilità con Alexa e Google, a un prezzo da fascia d'ingresso.",
          "nl": "Ultrasone 6 L-bevochtiger met vullen via de bovenkant, automatische stand, VeSync-app en Alexa en Google, instapsegment.",
          "pl": "Ultradźwiękowy nawilżacz 6 l napełniany od góry, tryb automatyczny, aplikacja VeSync i współpraca z Alexą i Asystentem Google – w cenie modelu z niższej półki.",
          "sv": "Ultraljudsmodell på 6 liter som fylls på uppifrån, med autoläge, appen VeSync och stöd för Alexa och Google – till instegspris.",
          "us": "A 1.6 gal (6 L) top-fill ultrasonic humidifier with auto mode, the VeSync app and Alexa and Google support, at an entry-level price point.",
          "ca": "6 L top-fill ultrasonic unit with auto mode, VeSync app and Alexa and Google support at an entry-level tier."
        }
      },
      {
        "model": "Dyson Purifier Humidify+Cool Formaldehyde PH04",
        "role": {
          "fr": "Idéal pour les allergiques",
          "en": "Best for allergy sufferers",
          "de": "Ideal für Allergiker",
          "es": "Ideal para alérgicos",
          "it": "Ideale per chi soffre di allergie",
          "nl": "Ideaal bij allergieën",
          "pl": "Najlepszy dla alergików",
          "sv": "Bäst för allergiker",
          "us": "Best for allergy sufferers",
          "ca": "Best for allergy sufferers"
        },
        "why": {
          "fr": "Purificateur HEPA H13, humidificateur par évaporation avec eau traitée aux UV-C et ventilateur réunis dans un seul appareil connecté.",
          "en": "HEPA H13 purifier, evaporative humidifier with UV-C-treated water and fan, combined in one smart device.",
          "de": "HEPA-H13-Luftreiniger, Verdunster mit UV-C-behandeltem Wasser und Ventilator in einem vernetzten Gerät.",
          "es": "Purificador HEPA H13, humidificador evaporativo con agua tratada por UV-C y ventilador en un solo aparato conectado.",
          "it": "Purificatore HEPA H13, umidificatore evaporativo con acqua trattata con UV-C e ventilatore riuniti in un unico apparecchio smart.",
          "nl": "HEPA H13-luchtreiniger, verdampingsbevochtiger met UV-C-behandeld water en ventilator in één verbonden toestel.",
          "pl": "Oczyszczacz z filtrem HEPA H13, nawilżacz ewaporacyjny z wodą oczyszczaną światłem UV-C i wentylator w jednym inteligentnym urządzeniu.",
          "sv": "Luftrenare med HEPA H13, luftfuktare som arbetar genom avdunstning med UV-C-behandlat vatten och fläkt i en och samma uppkopplade apparat.",
          "us": "A HEPA H13 purifier, an evaporative humidifier with UV-C-treated water and a fan, all in one smart device.",
          "ca": "HEPA H13 purifier, evaporative humidifier with UV-C treated water and fan combined in one smart device."
        }
      }
    ]
  },
  "detecteur-mouvement-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur détecteur de mouvement connecté en 2026 ?",
      "en": "What is the best smart motion sensor in 2026?",
      "de": "Welcher ist der beste smarte Bewegungsmelder 2026?",
      "es": "¿Cuál es el mejor sensor de movimiento inteligente en 2026?",
      "it": "Qual è il miglior sensore di movimento smart nel 2026?",
      "nl": "Wat is de beste slimme bewegingssensor in 2026?",
      "pl": "Jaki jest najlepszy inteligentny czujnik ruchu w 2026 roku?",
      "sv": "Vilken smart rörelsesensor är bäst 2026?",
      "us": "What is the best smart motion sensor in 2026?",
      "ca": "What is the best smart motion sensor in 2026?"
    },
    "picks": [
      {
        "model": "Aqara Motion and Light Sensor P2",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Capteur PIR 170° compatible Matter over Thread, avec capteur de luminosité et jusqu'à deux ans d'autonomie annoncée.",
          "en": "A 170° PIR sensor on Matter over Thread, with a light sensor and up to two years of rated battery life.",
          "de": "PIR-Sensor mit 170°, Matter over Thread, Helligkeitssensor und bis zu zwei Jahren angegebener Batterielaufzeit.",
          "es": "Detector PIR de 170° compatible con Matter over Thread, con sensor de luz y hasta dos años de autonomía según el fabricante.",
          "it": "Sensore PIR a 170° compatibile con Matter over Thread, con sensore di luminosità e fino a due anni di autonomia dichiarata.",
          "nl": "PIR-sensor van 170° met Matter over Thread, lichtsensor en tot twee jaar opgegeven batterijduur.",
          "pl": "Czujnik PIR o kącie 170°, zgodny z Matter over Thread, z czujnikiem natężenia światła; producent deklaruje do dwóch lat pracy na baterii.",
          "sv": "PIR-sensor som täcker 170°, med Matter via Thread, ljussensor och upp till två års batteritid enligt tillverkaren.",
          "us": "A 170° PIR sensor on Matter over Thread, with a light sensor and up to two years of rated battery life.",
          "ca": "A 170° PIR sensor on Matter over Thread, with a light sensor and up to two years of rated battery life."
        }
      },
      {
        "model": "IKEA MYGGSPRAY",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Entrée de gamme, Matter over Thread, IP67 pour l'intérieur comme l'extérieur, piles AAA rechargeables.",
          "en": "Entry-level, Matter over Thread, IP67 for indoor and outdoor use, rechargeable AAA batteries.",
          "de": "Einstiegsklasse, Matter over Thread, IP67 für drinnen und draußen, wiederaufladbare AAA-Akkus.",
          "es": "Modelo básico con Matter over Thread, IP67 para interior y exterior, y pilas AAA recargables.",
          "it": "Fascia d'ingresso, Matter over Thread, IP67 per interno ed esterno, pile AAA ricaricabili.",
          "nl": "Instapklasse, Matter over Thread, IP67 voor binnen en buiten, oplaadbare AAA-batterijen.",
          "pl": "Model z niższej półki z Matter over Thread, w klasie IP67, do wnętrz i na zewnątrz, zasilany akumulatorkami AAA.",
          "sv": "Instegsmodell med Matter via Thread och IP67 för både inomhus- och utomhusbruk, och den drivs med laddningsbara AAA-batterier.",
          "us": "Entry-level, Matter over Thread, IP67 for indoor and outdoor use, rechargeable AAA batteries.",
          "ca": "Entry-level, Matter over Thread, IP67 for indoor and outdoor use, rechargeable AAA batteries."
        }
      },
      {
        "model": "Aqara Presence Sensor FP2",
        "role": {
          "fr": "Meilleur capteur de présence",
          "en": "Best presence sensor",
          "de": "Bester Präsenzmelder",
          "es": "Mejor sensor de presencia",
          "it": "Miglior sensore di presenza",
          "nl": "Beste aanwezigheidssensor",
          "pl": "Najlepszy czujnik obecności",
          "sv": "Bästa närvarosensorn",
          "us": "Best presence sensor",
          "ca": "Best presence sensor"
        },
        "why": {
          "fr": "Radar mmWave qui détecte une personne immobile, jusqu'à 30 zones et cinq personnes, sans pile à changer.",
          "en": "mmWave radar that detects someone sitting still, handles up to 30 zones and five people, and has no batteries to change.",
          "de": "mmWave-Radar erkennt auch ruhende Personen, bis zu 30 Zonen und fünf Personen, kein Batteriewechsel.",
          "es": "Radar mmWave que detecta a una persona aunque esté quieta, con hasta 30 zonas y cinco personas, y sin pilas que cambiar.",
          "it": "Radar mmWave che rileva anche persone immobili, fino a 30 zone e cinque persone, senza pile da cambiare.",
          "nl": "mmWave-radar die ook stilzittende personen ziet, tot 30 zones en vijf personen, geen batterijen te vervangen.",
          "pl": "Radar mmWave wykrywa nawet nieruchomą osobę, obsługuje do 30 stref i pięciu osób, a do tego nie wymaga wymiany baterii.",
          "sv": "mmWave-radar som känner av personer som sitter stilla, med upp till 30 zoner och fem personer – och inga batterier att byta.",
          "us": "mmWave radar that detects people sitting still, with up to 30 zones and five people, and no batteries to change.",
          "ca": "mmWave radar that detects people sitting still, with up to 30 zones and five people, and no batteries to change."
        }
      }
    ]
  },
  "compteur-energie-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur compteur d'énergie connecté en 2026 ?",
      "en": "What is the best home energy monitor in 2026?",
      "de": "Welcher ist der beste Energiemonitor 2026?",
      "es": "¿Cuál es el mejor medidor de consumo eléctrico conectado en 2026?",
      "it": "Qual è il miglior misuratore di consumi elettrici smart nel 2026?",
      "nl": "Wat is de beste energiemonitor in 2026?",
      "pl": "Jaki jest najlepszy inteligentny miernik zużycia energii w 2026 roku?",
      "sv": "Vilken energimätare är bäst för hemmet 2026?",
      "us": "What is the best home energy monitor in 2026?",
      "ca": "What is the best home energy monitor in 2026?"
    },
    "picks": [
      {
        "model": "Shelly Pro 3EM",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Trois pinces, triphasé, mesure bidirectionnelle pour le solaire et intégration locale à Home Assistant.",
          "en": "Three clamps, three-phase, two-way metering for solar and local Home Assistant integration.",
          "de": "Drei Klemmen, dreiphasig, bidirektionale Messung für PV und lokale Home-Assistant-Integration.",
          "es": "Tres pinzas, compatible con instalaciones trifásicas, medición bidireccional para placas solares e integración local con Home Assistant.",
          "it": "Tre pinze amperometriche, trifase, misura bidirezionale per il fotovoltaico e integrazione locale con Home Assistant.",
          "nl": "Drie stroomtangen, driefase, meting in twee richtingen voor zonnepanelen en lokale Home Assistant-integratie.",
          "pl": "Trzy cęgi pomiarowe, obsługa sieci trójfazowej, pomiar dwukierunkowy przy fotowoltaice i lokalna integracja z Home Assistant.",
          "sv": "Tre strömtänger, trefas, mätning i båda riktningarna för solceller och lokal integration med Home Assistant.",
          "us": "Three CT clamps, three-phase support, bidirectional metering for solar and local Home Assistant integration.",
          "ca": "Three clamps, three-phase, two-way metering for solar and local Home Assistant integration."
        }
      },
      {
        "model": "Shelly EM Gen3",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Module compact à deux canaux pour le monophasé : consommation générale et un second circuit, en Wi-Fi.",
          "en": "Compact two-channel single-phase monitor: whole-home use plus a second circuit, over Wi-Fi.",
          "de": "Kompakter Zweikanal-Monitor für einphasige Anschlüsse: Gesamtverbrauch plus ein zweiter Stromkreis per WLAN.",
          "es": "Módulo compacto de dos canales para instalaciones monofásicas: consumo general y un segundo circuito, por wifi.",
          "it": "Modulo compatto a due canali per il monofase: consumo generale e un secondo circuito, via Wi-Fi.",
          "nl": "Compacte tweekanaals-module voor eenfase: totaalverbruik plus een tweede groep, via wifi.",
          "pl": "Kompaktowy, dwukanałowy moduł do instalacji jednofazowej: mierzy całkowite zużycie i jeden dodatkowy obwód, łączy się przez Wi-Fi.",
          "sv": "Kompakt tvåkanalsmätare för enfas: hela hemmets förbrukning plus ytterligare en krets, via wifi.",
          "us": "Compact two-channel single-phase monitor that tracks whole-home use plus one extra circuit, over Wi-Fi.",
          "ca": "Compact two-channel single-phase monitor: whole-home use plus a second circuit, over Wi-Fi."
        }
      },
      {
        "model": "Lixee ZLinky_TIC",
        "role": {
          "fr": "Idéal avec un Linky",
          "en": "Best for Linky meters (France)",
          "de": "Ideal für Linky-Zähler",
          "es": "Ideal con un contador Linky (Francia)",
          "it": "Ideale con il contatore Linky (Francia)",
          "nl": "Ideaal voor Linky-meters",
          "pl": "Idealny do licznika Linky (Francja)",
          "sv": "Bäst för franska Linky-mätare",
          "us": "Best for French Linky meters",
          "ca": "Best for French Linky meters"
        },
        "why": {
          "fr": "Se branche sur la prise TIC du Linky, alimenté par le compteur, en Zigbee 3.0 et sans électricien.",
          "en": "Connects to the TIC port on France’s Linky meter, draws its power from the meter, uses Zigbee 3.0 and needs no electrician.",
          "de": "Wird an die TIC-Klemmen des Linky gesteckt, vom Zähler versorgt, Zigbee 3.0, ohne Elektriker.",
          "es": "Se conecta a la salida TIC del contador francés Linky, se alimenta de él, funciona por Zigbee 3.0 y no necesita electricista.",
          "it": "Si collega alla presa TIC del contatore francese Linky, che lo alimenta; Zigbee 3.0, senza bisogno di un elettricista.",
          "nl": "Sluit aan op de TIC-klemmen van de Linky, gevoed door de meter, Zigbee 3.0, zonder installateur.",
          "pl": "Podłączany do złącza TIC licznika Linky (stosowanego we Francji), zasilany bezpośrednio z licznika, działa w Zigbee 3.0 i nie wymaga elektryka.",
          "sv": "Ansluts till TIC-uttaget på Linky (den smarta elmätaren i Frankrike), får ström från mätaren, använder Zigbee 3.0 och kräver ingen elektriker.",
          "us": "Connects to the TIC terminals on France's Linky meter, draws its power from the meter, runs on Zigbee 3.0 and needs no electrician.",
          "ca": "Plugs into the TIC terminals of France’s Linky meter, powered by the meter, Zigbee 3.0, no electrician needed."
        }
      }
    ]
  },
  "climatiseur-mobile-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur climatiseur mobile connecté en 2026 ?",
      "en": "What is the best Wi-Fi portable air conditioner in 2026?",
      "de": "Welches ist das beste smarte mobile Klimagerät 2026?",
      "es": "¿Cuál es el mejor aire acondicionado portátil con wifi en 2026?",
      "it": "Qual è il miglior condizionatore portatile con Wi-Fi nel 2026?",
      "nl": "Wat is de beste slimme mobiele airco in 2026?",
      "pl": "Jaki jest najlepszy inteligentny klimatyzator przenośny w 2026 roku?",
      "sv": "Vilken smart portabel AC är bäst 2026?",
      "us": "What is the best smart portable air conditioner in 2026?",
      "ca": "What is the best smart portable air conditioner in 2026?"
    },
    "picks": [
      {
        "model": "Midea PortaSplit",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste totaalkeuze",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Split mobile 3,5 kW installable sans frigoriste : compresseur dehors, 39 dB(A) à l'intérieur en mode silence, classe A++ et chauffage.",
          "en": "A 3.5 kW portable split that needs no refrigeration engineer to install: the compressor sits outside, 39 dB(A) indoors in silent mode, class A++ and it heats too.",
          "de": "Mobiles 3,5-kW-Split ohne Kältetechniker: Kompressor draußen, innen 39 dB(A) im Silent-Modus, Klasse A++ und Heizfunktion.",
          "es": "Split portátil de 3,5 kW que se instala sin frigorista: compresor fuera, 39 dB(A) dentro en modo silencio, clase A++ y también calefacción.",
          "it": "Split portatile da 3,5 kW che si installa senza frigorista: compressore all'esterno, 39 dB(A) in casa in modalità silenziosa, classe A++ e funzione riscaldamento.",
          "nl": "Mobiele split van 3,5 kW zonder koeltechnicus: compressor buiten, binnen 39 dB(A) in stille stand, klasse A++ en ook verwarming.",
          "pl": "Przenośny split 3,5 kW, który zamontujesz bez instalatora klimatyzacji: sprężarka stoi na zewnątrz, w pomieszczeniu w trybie cichym tylko 39 dB(A), klasa A++ i funkcja grzania.",
          "sv": "Portabel split på 3,5 kW som du installerar själv, utan kyltekniker: kompressorn står ute, 39 dB(A) inomhus i tyst läge, energiklass A++ och värmefunktion.",
          "us": "A 3.5 kW (about 12,000 BTU) portable split you can install yourself, no HVAC tech needed: the compressor sits outside, it runs at 39 dB(A) indoors in silent mode, it's rated A++ on the EU energy label and it heats too.",
          "ca": "A 3.5 kW portable mini-split you install yourself: compressor outside, 39 dB(A) indoors in silent mode, EU class A++ and heating too."
        }
      },
      {
        "model": "Midea Silent Cool 26 Pro WF",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Monobloc 2,6 kW classe A (EER 2,6) pour 31 m², discret pour sa catégorie, avec app, Alexa, Google Assistant et capteur Follow Me.",
          "en": "A 2.6 kW class A single-hose unit (EER 2.6) for 31 m², quiet for its type, with app, Alexa, Google Assistant and a Follow Me sensor.",
          "de": "Monoblock mit 2,6 kW, Klasse A (EER 2,6) für 31 m², leise für seine Klasse, mit App, Alexa, Google Assistant und Follow-Me-Sensor.",
          "es": "Monobloque de 2,6 kW clase A (EER 2,6) para 31 m², silencioso para su categoría, con app, Alexa, Google Assistant y sensor Follow Me.",
          "it": "Monoblocco da 2,6 kW in classe A (EER 2,6) per 31 m², silenzioso per la categoria, con app, Alexa, Google Assistant e sensore Follow Me.",
          "nl": "Monoblok van 2,6 kW, klasse A (EER 2,6) voor 31 m², stil voor zijn type, met app, Alexa, Google Assistant en Follow Me-sensor.",
          "pl": "Monoblok 2,6 kW klasy A (EER 2,6) do 31 m², cichy jak na swoją kategorię, z aplikacją, Alexą, Asystentem Google i funkcją Follow Me.",
          "sv": "Monoblock på 2,6 kW i energiklass A (EER 2,6) för 31 m², tyst för sin typ, med app, Alexa, Google Assistant och Follow Me-sensor.",
          "us": "A 2.6 kW (about 9,000 BTU) all-in-one portable AC, class A on the EU label (EER 2.6), for rooms up to 335 sq ft (31 m²), quiet for its type, with an app, Alexa, Google Assistant and a Follow Me sensor.",
          "ca": "A 2.6 kW, EU class A portable AC (EER 2.6) for a 31 m² room, quiet for its type, with app, Alexa, Google Assistant and a Follow Me sensor."
        }
      },
      {
        "model": "Trotec PAC 3910 X WiFi",
        "role": {
          "fr": "Idéal pour les grandes pièces",
          "en": "Best for large rooms",
          "de": "Ideal für große Räume",
          "es": "Ideal para estancias grandes",
          "it": "Ideale per ambienti grandi",
          "nl": "Ideaal voor grote ruimtes",
          "pl": "Najlepszy do dużych pomieszczeń",
          "sv": "Bäst för stora rum",
          "us": "Best for large rooms",
          "ca": "Best for large rooms"
        },
        "why": {
          "fr": "4,1 kW (14 000 BTU) pour des pièces jusqu'à 52 m², classe A, pilotage par app Wi-Fi, mode nuit et fonction Follow Me.",
          "en": "4.1 kW (14,000 BTU) for rooms up to 52 m², class A, Wi-Fi app control, night mode and a Follow Me function.",
          "de": "4,1 kW (14.000 BTU) für Räume bis 52 m², Klasse A, Steuerung per WLAN-App, Nachtmodus und Follow-Me-Funktion.",
          "es": "4,1 kW (14.000 BTU) para estancias de hasta 52 m², clase A, control por app y wifi, modo noche y función Follow Me.",
          "it": "4,1 kW (14.000 BTU) per ambienti fino a 52 m², classe A, controllo via app Wi-Fi, modalità notte e funzione Follow Me.",
          "nl": "4,1 kW (14.000 BTU) voor ruimtes tot 52 m², klasse A, bediening via wifi-app, nachtstand en Follow Me-functie.",
          "pl": "4,1 kW (14 000 BTU) do pomieszczeń o powierzchni do 52 m², klasa A, sterowanie w aplikacji przez Wi-Fi, tryb nocny i funkcja Follow Me.",
          "sv": "4,1 kW (14 000 BTU) för rum upp till 52 m², energiklass A, appstyrning via wifi, nattläge och Follow Me-funktion.",
          "us": "14,000 BTU (4.1 kW) for rooms up to 560 sq ft (52 m²), class A on the EU label, Wi-Fi app control, a night mode and a Follow Me function.",
          "ca": "4.1 kW (14,000 BTU) for rooms up to 52 m², EU class A, Wi-Fi app control, night mode and a Follow Me function."
        }
      }
    ]
  },
  "robot-piscine-comparatif": {
    "question": {
      "fr": "Quel est le meilleur robot de piscine en 2026 ?",
      "en": "What is the best robot pool cleaner in 2026?",
      "de": "Welcher ist der beste Poolroboter 2026?",
      "es": "¿Cuál es el mejor robot limpiafondos en 2026?",
      "it": "Qual è il miglior robot per piscina nel 2026?",
      "nl": "Wat is de beste zwembadrobot in 2026?",
      "pl": "Jaki jest najlepszy robot basenowy w 2026 roku?",
      "sv": "Vilken poolrobot är bäst 2026?",
      "us": "What is the best robotic pool cleaner in 2026?",
      "ca": "What is the best robotic pool cleaner in 2026?"
    },
    "picks": [
      {
        "model": "Dolphin S300i",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Fond, parois et ligne d’eau jusqu’à 12 m, sans limite de batterie, avec un filtre fin ou ultrafin retiré par le dessus.",
          "en": "Cleans floor, walls and waterline in pools up to 12 m with no battery limit, and its fine or ultra-fine filter lifts out from the top.",
          "de": "Reinigt Boden, Wände und Wasserlinie in Becken bis 12 m ohne Akkulimit; der feine oder ultrafeine Filter wird von oben entnommen.",
          "es": "Limpia fondo, paredes y línea de flotación en piscinas de hasta 12 m, sin límite de batería, con filtro fino o ultrafino que se saca por arriba.",
          "it": "Pulisce fondo, pareti e linea d’acqua fino a 12 m senza limiti di batteria, con filtro fine o ultrafine estraibile dall’alto.",
          "nl": "Reinigt bodem, wanden en waterlijn tot 12 m zonder accubeperking, met een fijn of ultrafijn filter dat je van bovenaf uitneemt.",
          "pl": "Czyści dno, ściany i linię wody w basenach do 12 m, nie ma ograniczeń czasu pracy na baterii, a filtr drobny lub ultradrobny wyjmuje się od góry.",
          "sv": "Rengör botten, väggar och vattenlinje i pooler upp till 12 m, har ingen batteritid att ta hänsyn till och det fina eller ultrafina filtret lyfts ur ovanifrån.",
          "us": "Cleans the floor, walls and waterline in pools up to 40 ft (12 m) long with no battery to run down, and its fine or ultra-fine filter lifts out from the top.",
          "ca": "Cleans floor, walls and waterline in pools up to 12 m with no battery limit, and its fine or ultra-fine filter lifts out from the top."
        }
      },
      {
        "model": "Dolphin E35i",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "L’essentiel du S300i (12 m, ligne d’eau, appli MyDolphin Plus) avec chariot de transport et filtre ultrafin inclus.",
          "en": "Most of the S300i’s features (12 m, waterline, MyDolphin Plus app) with a transport caddy and ultra-fine filter included.",
          "de": "Das Wesentliche des S300i (12 m, Wasserlinie, App MyDolphin Plus) mit Transportcaddy und Ultrafeinfilter im Lieferumfang.",
          "es": "Lo esencial del S300i (12 m, línea de flotación, app MyDolphin Plus) con carro de transporte y filtro ultrafino incluidos.",
          "it": "Gli elementi essenziali dell’S300i (12 m, linea d’acqua, app MyDolphin Plus), con carrello di trasporto e filtro ultrafine inclusi.",
          "nl": "Het belangrijkste van de S300i (12 m, waterlijn, app MyDolphin Plus) met transporttrolley en ultrafijn filter inbegrepen.",
          "pl": "Najważniejsze zalety modelu S300i (12 m, linia wody, aplikacja MyDolphin Plus), a do tego wózek transportowy i filtr ultradrobny w zestawie.",
          "sv": "Det mesta från S300i (12 m, vattenlinje, appen MyDolphin Plus), och dessutom ingår transportvagn och ultrafint filter.",
          "us": "Most of what the S300i offers (40 ft pools, waterline, MyDolphin Plus app), plus a caddy cart and an ultra-fine filter in the box.",
          "ca": "Most of the S300i’s features (12 m, waterline, MyDolphin Plus app) with a transport caddy and ultra-fine filter included."
        }
      },
      {
        "model": "Beatbot AquaSense 2 Pro",
        "role": {
          "fr": "Meilleur sans fil",
          "en": "Best cordless",
          "de": "Bester kabelloser Roboter",
          "es": "Mejor sin cable",
          "it": "Il migliore senza cavo",
          "nl": "Beste snoerloze robot",
          "pl": "Najlepszy bezprzewodowy",
          "sv": "Bäst utan kabel",
          "us": "Best cordless",
          "ca": "Best cordless"
        },
        "why": {
          "fr": "Sans câble, il nettoie aussi la surface, couvre jusqu’à 360 m² et annonce jusqu’à 5 h d’autonomie sur fond et parois.",
          "en": "Cordless, it also skims the surface, covers up to 360 m² and is rated for up to 5 hours on the floor and walls.",
          "de": "Ohne Kabel, reinigt auch die Oberfläche, deckt bis 360 m² ab und ist für bis zu 5 Stunden auf Boden und Wänden angegeben.",
          "es": "Sin cable, también limpia la superficie, cubre hasta 360 m² y promete hasta 5 horas de autonomía en fondo y paredes.",
          "it": "Senza cavo, pulisce anche la superficie dell’acqua, copre fino a 360 m² e ha un’autonomia dichiarata fino a 5 ore su fondo e pareti.",
          "nl": "Zonder snoer, reinigt ook het oppervlak, dekt tot 360 m² en is opgegeven voor tot 5 uur op bodem en wanden.",
          "pl": "Bezprzewodowy, czyści również powierzchnię wody, obsługuje baseny do 360 m², a według producenta przy czyszczeniu dna i ścian pracuje do 5 godzin.",
          "sv": "Kabelfri och rengör även vattenytan. Täcker upp till 360 m² och klarar enligt tillverkaren upp till 5 timmar på botten och väggar.",
          "us": "Fully cordless, it also skims the surface, covers up to 3,850 sq ft (360 m²) and is rated for up to 5 hours on the floor and walls.",
          "ca": "Cordless, it also skims the surface, covers up to 360 m² and is rated for up to 5 hours on floor and walls."
        }
      }
    ]
  },
  "grill-pellet-plancha-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur barbecue connecté en 2026 ?",
      "en": "What is the best smart barbecue in 2026?",
      "de": "Welcher ist der beste smarte Grill 2026?",
      "es": "¿Cuál es la mejor barbacoa inteligente en 2026?",
      "it": "Qual è il miglior barbecue smart nel 2026?",
      "nl": "Wat is de beste slimme barbecue in 2026?",
      "pl": "Jaki jest najlepszy inteligentny grill w 2026 roku?",
      "sv": "Vilken smart grill är bäst 2026?",
      "us": "What is the best smart grill in 2026?",
      "ca": "What is the best smart grill in 2026?"
    },
    "picks": [
      {
        "model": "Weber Searwood 600",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Barbecue à pellets de 80 à 315 °C qui fume et saisit, piloté en Wi-Fi et Bluetooth via Weber Connect, avec deux sondes fournies.",
          "en": "A pellet barbecue running from 80 to 315°C that both smokes and sears, controlled over Wi-Fi and Bluetooth via Weber Connect, with two probes included.",
          "de": "Pelletgrill von 80 bis 315 °C, der smokt und scharf angrillt, per WLAN und Bluetooth über Weber Connect steuerbar, mit zwei Fühlern.",
          "es": "Barbacoa de pellets de 80 a 315 °C que ahúma y sella, con control por wifi y Bluetooth desde Weber Connect y dos sondas incluidas.",
          "it": "Barbecue a pellet da 80 a 315 °C per affumicare e scottare, gestibile via Wi-Fi e Bluetooth con Weber Connect, con due sonde incluse.",
          "nl": "Pelletbarbecue van 80 tot 315 °C die rookt én dichtschroeit, bediend via wifi en bluetooth met Weber Connect, met twee sondes.",
          "pl": "Grill peletowy o zakresie 80–315 °C, który zarówno wędzi, jak i obsmaża, sterowany przez Wi-Fi i Bluetooth w aplikacji Weber Connect; dwie sondy w zestawie.",
          "sv": "Pelletsgrill för 80–315 °C som både röker och grillar på hög värme, styrs via wifi och Bluetooth i Weber Connect och levereras med två givare.",
          "us": "A pellet grill that runs from 175°F to 600°F (80–315°C), so it both smokes and sears, controlled over Wi-Fi and Bluetooth through Weber Connect, with two probes included.",
          "ca": "Pellet grill from 80 to 315°C (175 to 600°F) that both smokes and sears, controlled over Wi-Fi and Bluetooth via Weber Connect, with two probes included."
        }
      },
      {
        "model": "Ninja Woodfire Pro Connect XL",
        "role": {
          "fr": "Meilleur rapport qualité-prix et balcon",
          "en": "Best value, and best for balconies",
          "de": "Preis-Leistungs-Tipp für den Balkon",
          "es": "Mejor calidad-precio y para balcón",
          "it": "Miglior rapporto qualità-prezzo, ideale in balcone",
          "nl": "Beste prijs-kwaliteit en voor balkons",
          "pl": "Najlepszy stosunek jakości do ceny, idealny na balkon",
          "sv": "Mest prisvärd och bäst för balkongen",
          "us": "Best value and best for balconies",
          "ca": "Best value and for balconies"
        },
        "why": {
          "fr": "Compact et électrique, sept fonctions dont fumoir, réglage de 65 à 260 °C via l'application et sonde intégrée.",
          "en": "Compact and electric, with seven functions including smoking, temperature set from 65 to 260°C in the app and a built-in probe.",
          "de": "Kompakt und elektrisch, sieben Funktionen inklusive Smoker, 65–260 °C per App einstellbar und integrierter Fühler.",
          "es": "Compacta y eléctrica, con siete funciones (entre ellas, ahumado), de 65 a 260 °C desde la app y sonda integrada.",
          "it": "Compatto ed elettrico, sette funzioni tra cui l'affumicatura, temperatura da 65 a 260 °C regolabile dall'app e sonda integrata.",
          "nl": "Compact en elektrisch, zeven functies inclusief roken, 65–260 °C via de app en een ingebouwde sonde.",
          "pl": "Kompaktowy grill elektryczny z siedmioma funkcjami, w tym wędzeniem, regulacją 65–260 °C w aplikacji i wbudowaną sondą.",
          "sv": "Kompakt och eldriven med sju funktioner, däribland rökning. Temperaturen (65–260 °C) ställs in i appen och givaren är inbyggd.",
          "us": "Compact and electric, with seven functions including a smoker, 150°F to 500°F (65–260°C) set from the app, and a built-in probe.",
          "ca": "Compact and electric, seven functions including smoker, 65–260°C (150–500°F) set from the app and a built-in probe."
        }
      },
      {
        "model": "Weber Genesis EPX-335 Smart",
        "role": {
          "fr": "Meilleur barbecue gaz connecté",
          "en": "Best smart gas barbecue",
          "de": "Bester smarter Gasgrill",
          "es": "Mejor barbacoa de gas inteligente",
          "it": "Miglior barbecue a gas smart",
          "nl": "Beste slimme gasbarbecue",
          "pl": "Najlepszy inteligentny grill gazowy",
          "sv": "Bästa smarta gasgrillen",
          "us": "Best smart gas grill",
          "ca": "Best smart gas grill"
        },
        "why": {
          "fr": "Trois brûleurs, zone de saisie puissante et thermomètre Wi-Fi avec alertes Weber Connect ; la flamme reste réglée à la main.",
          "en": "Three burners, a powerful sear zone and a Wi-Fi thermometer with Weber Connect alerts; you still adjust the flame by hand.",
          "de": "Drei Brenner, starke Sear Zone und WLAN-Thermometer mit Weber-Connect-Alarmen; die Flamme wird weiter von Hand geregelt.",
          "es": "Tres quemadores, potente zona de sellado y termómetro wifi con alertas de Weber Connect; la llama se sigue regulando a mano.",
          "it": "Tre bruciatori, potente zona di rosolatura e termometro Wi-Fi con avvisi Weber Connect; la fiamma si regola sempre a mano.",
          "nl": "Drie branders, krachtige sear zone en wifi-thermometer met Weber Connect-meldingen; de vlam regelt u nog met de hand.",
          "pl": "Trzy palniki, mocna strefa obsmażania i termometr Wi-Fi z powiadomieniami w Weber Connect; płomień nadal reguluje się ręcznie.",
          "sv": "Tre brännare, en kraftfull zon för högvärme och wifi-termometer med notiser i Weber Connect; lågan regleras fortfarande för hand.",
          "us": "Three burners, a powerful sear zone and a Wi-Fi thermometer with Weber Connect alerts; you still adjust the flame by hand.",
          "ca": "Three burners, powerful sear zone and a Wi-Fi thermometer with Weber Connect alerts; the flame is still adjusted by hand."
        }
      }
    ]
  },
  "eclairage-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur éclairage connecté en 2026 ?",
      "en": "What is the best smart lighting in 2026?",
      "de": "Welche ist die beste smarte Beleuchtung 2026?",
      "es": "¿Cuál es la mejor iluminación inteligente en 2026?",
      "it": "Qual è la migliore illuminazione smart nel 2026?",
      "nl": "Wat is de beste slimme verlichting in 2026?",
      "pl": "Jakie jest najlepsze inteligentne oświetlenie w 2026 roku?",
      "sv": "Vilken smart belysning är bäst 2026?",
      "us": "What is the best smart lighting in 2026?",
      "ca": "What is the best smart lighting in 2026?"
    },
    "picks": [
      {
        "model": "Philips Hue White and Color Ambiance E27",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Jusqu'à 1 100 lm, millions de couleurs et l'écosystème Hue le plus complet : avec le Hue Bridge, automatisations avancées et Matter vers Apple, Google et Alexa.",
          "en": "Up to 1,100 lm, millions of colours and Hue, the most complete ecosystem: with the Hue Bridge, you get advanced automations and Matter for Apple, Google and Alexa.",
          "de": "Bis zu 1.100 lm, Millionen Farben und das umfassendste Hue-Ökosystem: Mit der Hue Bridge gibt es erweiterte Automationen und Matter für Apple, Google und Alexa.",
          "es": "Hasta 1.100 lm, millones de colores y el ecosistema Hue más completo: con el Hue Bridge, automatizaciones avanzadas y Matter para Apple, Google y Alexa.",
          "it": "Fino a 1.100 lm, milioni di colori e l'ecosistema Hue più completo: con l'Hue Bridge, automazioni avanzate e Matter per Apple, Google e Alexa.",
          "nl": "Tot 1.100 lm, miljoenen kleuren en het meest complete Hue-ecosysteem: met de Hue Bridge krijgt u geavanceerde automatiseringen en Matter voor Apple, Google en Alexa.",
          "pl": "Do 1100 lm, miliony kolorów i najbogatszy ekosystem oświetlenia, czyli Hue: z mostkiem Hue Bridge zyskujesz zaawansowane automatyzacje i integrację przez Matter z Apple, Google i Alexą.",
          "sv": "Upp till 1 100 lm, miljontals färger och det mest kompletta Hue-ekosystemet: med Hue Bridge får du avancerade automationer och Matter för Apple, Google och Alexa.",
          "us": "Up to 1,100 lumens, millions of colors and the most complete Hue ecosystem: add the Hue Bridge and you get advanced automations and Matter for Apple, Google and Alexa.",
          "ca": "Up to 1,100 lm, millions of colours and the most complete Hue ecosystem: with the Hue Bridge you get advanced automations and Matter for Apple, Google and Alexa."
        }
      },
      {
        "model": "TP-Link Tapo L535E",
        "role": {
          "fr": "Meilleur choix sans hub",
          "en": "Best without a hub",
          "de": "Beste Wahl ohne Hub",
          "es": "Mejor opción sin hub",
          "it": "Miglior scelta senza hub",
          "nl": "Beste keuze zonder hub",
          "pl": "Najlepszy wybór bez huba",
          "sv": "Bäst utan hubb",
          "us": "Best without a hub",
          "ca": "Best without a hub"
        },
        "why": {
          "fr": "Ampoule E27 couleur de 1 055 lm en WiFi direct et compatible Matter : la façon la plus simple et abordable de connecter quelques lampes sans hub.",
          "en": "A 1,055 lm colour E27 bulb on direct Wi-Fi with Matter support: the simplest, most affordable way to make a few lamps smart without a hub.",
          "de": "Eine farbige E27-Lampe mit 1.055 lm, direktem WLAN und Matter: der einfachste und günstigste Weg, ein paar Leuchten ohne Hub zu vernetzen.",
          "es": "Bombilla E27 de color de 1.055 lm con wifi directo y compatible con Matter: la forma más sencilla y asequible de conectar unas pocas lámparas sin hub.",
          "it": "Lampadina E27 a colori da 1.055 lm in Wi-Fi diretto e compatibile Matter: il modo più semplice ed economico per rendere smart qualche lampada senza hub.",
          "nl": "Een gekleurde E27-lamp van 1.055 lm met direct wifi en Matter: de eenvoudigste en voordeligste manier om een paar lampen zonder hub te verbinden.",
          "pl": "Kolorowa żarówka E27 o strumieniu 1055 lm, łącząca się bezpośrednio przez Wi-Fi i zgodna z Matter: najprostszy i najtańszy sposób, by bez huba zamienić kilka lamp w inteligentne.",
          "sv": "Färglampa med E27-sockel på 1 055 lm, direkt via wifi och med stöd för Matter: det enklaste och mest prisvärda sättet att göra några lampor smarta utan hubb.",
          "us": "A 1,055-lumen color E27 bulb on direct Wi-Fi with Matter support: the simplest, most affordable way to make a few lamps smart without a hub.",
          "ca": "A 1,055 lm colour E27 bulb on direct Wi-Fi with Matter support: the simplest, most affordable way to make a few lights smart without a hub."
        }
      },
      {
        "model": "Govee RGBIC LED Strip H619A",
        "role": {
          "fr": "Idéal pour l'ambiance RGB",
          "en": "Best for RGB ambience",
          "de": "Ideal für RGB-Ambiente",
          "es": "Ideal para ambiente RGB",
          "it": "Ideale per le luci d'atmosfera RGB",
          "nl": "Ideaal voor RGB-sfeer",
          "pl": "Idealna do nastrojowego oświetlenia RGB",
          "sv": "Bäst för RGB-stämningsljus",
          "us": "Best for RGB mood lighting",
          "ca": "Best for RGB ambience"
        },
        "why": {
          "fr": "Bandeau RGBIC de 5 m à segments de couleurs indépendants, en WiFi et Bluetooth, compatible Alexa et Google : le plus spectaculaire pour le gaming ou la déco.",
          "en": "A 5 m RGBIC strip with independently coloured segments, Wi-Fi and Bluetooth, and Alexa and Google support: the most eye-catching option for gaming setups or decor.",
          "de": "Ein 5-m-RGBIC-Streifen mit unabhängig farbigen Segmenten, WLAN und Bluetooth sowie Alexa und Google: am spektakulärsten für Gaming oder Deko.",
          "es": "Tira RGBIC de 5 m con segmentos de color independientes, wifi y Bluetooth, compatible con Alexa y Google: la más espectacular para gaming o decoración.",
          "it": "Striscia RGBIC da 5 m con segmenti a colori indipendenti, Wi-Fi e Bluetooth, compatibile con Alexa e Google: la più spettacolare per il gaming o l'arredamento.",
          "nl": "Een RGBIC-strip van 5 m met onafhankelijk gekleurde segmenten, wifi en Bluetooth, met Alexa en Google: het meest spectaculair voor gaming of decoratie.",
          "pl": "Taśma LED RGBIC 5 m z niezależnie podświetlanymi segmentami, Wi-Fi i Bluetooth, zgodna z Alexą i Asystentem Google – najbardziej efektowna do gamingu i dekoracji.",
          "sv": "LED-slinga på 5 m med RGBIC-segment som kan få olika färger var för sig, wifi och Bluetooth samt stöd för Alexa och Google: den mest effektfulla för gaming eller inredning.",
          "us": "A 16 ft (5 m) RGBIC light strip with independently colored segments, Wi-Fi and Bluetooth, and Alexa and Google support: the most eye-catching option for gaming setups or decor.",
          "ca": "A 5 m RGBIC strip with independently coloured segments, Wi-Fi and Bluetooth, and Alexa and Google support: the most spectacular for gaming or decor."
        }
      }
    ]
  },
  "ventilateur-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur ventilateur connecté en 2026 ?",
      "en": "What is the best smart fan in 2026?",
      "de": "Welcher ist der beste smarte Ventilator 2026?",
      "es": "¿Cuál es el mejor ventilador inteligente en 2026?",
      "it": "Qual è il miglior ventilatore smart nel 2026?",
      "nl": "Wat is de beste slimme ventilator in 2026?",
      "pl": "Jaki jest najlepszy inteligentny wentylator w 2026 roku?",
      "sv": "Vilken smart fläkt är bäst 2026?",
      "us": "What is the best smart fan in 2026?",
      "ca": "What is the best smart fan in 2026?"
    },
    "picks": [
      {
        "model": "Dyson Purifier Cool Formaldehyde TP09",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Ventilateur sans pales et purificateur à la fois : filtres HEPA H13 et charbon actif, capteurs de qualité d'air, oscillation 350° et pilotage par appli ou assistant vocal.",
          "en": "A bladeless fan and purifier in one: HEPA H13 and activated carbon filters, air quality sensors, 350° oscillation and control via app or voice assistant.",
          "de": "Flügelloser Ventilator und Luftreiniger in einem: HEPA-H13- und Aktivkohlefilter, Luftqualitätssensoren, 350° Oszillation und Steuerung per App oder Sprachassistent.",
          "es": "Ventilador sin aspas y purificador a la vez: filtros HEPA H13 y de carbón activo, sensores de calidad del aire, oscilación de 350° y control por app o asistente de voz.",
          "it": "Ventilatore senza pale e purificatore insieme: filtri HEPA H13 e a carboni attivi, sensori di qualità dell'aria, oscillazione a 350° e controllo da app o assistente vocale.",
          "nl": "Bladloze ventilator en luchtreiniger in één: HEPA H13- en actief koolfilter, luchtkwaliteitssensoren, 350° oscillatie en bediening via app of spraakassistent.",
          "pl": "Wentylator bez łopatek i oczyszczacz w jednym: filtr HEPA H13 i filtr z węglem aktywnym, czujniki jakości powietrza, oscylacja 350° i sterowanie z aplikacji lub głosem.",
          "sv": "Bladlös fläkt och luftrenare i ett: HEPA H13- och aktivt kolfilter, sensorer för luftkvalitet, 350° oscillation och styrning via app eller röstassistent.",
          "us": "A bladeless fan and purifier in one: HEPA H13 and activated carbon filters, air quality sensors, 350° oscillation and control via app or voice assistant.",
          "ca": "A bladeless fan and purifier in one: HEPA H13 and activated carbon filters, air quality sensors, 350° oscillation and control via app or voice assistant."
        }
      },
      {
        "model": "Xiaomi Smart Standing Fan 2 Pro",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Ventilateur sur pied Wi-Fi piloté par l'appli Xiaomi Home, compatible Google Home et Alexa, avec mode brise naturelle et fonctionnement discret adapté à la chambre.",
          "en": "A Wi-Fi pedestal fan controlled from the Xiaomi Home app, compatible with Google Home and Alexa, with a natural breeze mode and quiet running suited to bedrooms.",
          "de": "WLAN-Standventilator mit Xiaomi-Home-App, kompatibel mit Google Home und Alexa, mit Naturwind-Modus und leisem Betrieb, ideal fürs Schlafzimmer.",
          "es": "Ventilador de pie con wifi controlado desde la app Xiaomi Home, compatible con Google Home y Alexa, con modo brisa natural y un funcionamiento silencioso ideal para el dormitorio.",
          "it": "Ventilatore a piantana Wi-Fi gestito dall'app Xiaomi Home, compatibile con Google Home e Alexa, con modalità brezza naturale e funzionamento silenzioso adatto alla camera.",
          "nl": "Wifi-staande ventilator via de Xiaomi Home-app, compatibel met Google Home en Alexa, met natuurlijke-briesmodus en stille werking, geschikt voor de slaapkamer.",
          "pl": "Wentylator stojący z Wi-Fi, sterowany z aplikacji Xiaomi Home, zgodny z Google Home i Alexą, z trybem naturalnego powiewu i na tyle cichy, że sprawdzi się w sypialni.",
          "sv": "Golvfläkt med wifi som styrs i appen Xiaomi Home, fungerar med Google Home och Alexa, har läge för naturlig bris och går tyst nog för sovrummet.",
          "us": "A Wi-Fi pedestal fan run from the Xiaomi Home app, compatible with Google Home and Alexa, with a natural breeze mode and quiet running that suits bedrooms.",
          "ca": "A Wi-Fi standing fan run from the Xiaomi Home app, compatible with Google Home and Alexa, with a natural breeze mode and quiet running suited to bedrooms."
        }
      },
      {
        "model": "Dyson Purifier Hot+Cool Formaldehyde HP09",
        "role": {
          "fr": "Idéal toute l'année (3-en-1)",
          "en": "Best for year-round use (3-in-1)",
          "de": "Ideal fürs ganze Jahr (3-in-1)",
          "es": "Ideal todo el año (3 en 1)",
          "it": "Ideale tutto l'anno (3 in 1)",
          "nl": "Ideaal voor het hele jaar (3-in-1)",
          "pl": "Najlepszy na cały rok (3 w 1)",
          "sv": "Bäst året runt (3-i-1)",
          "us": "Best for year-round use (3-in-1)",
          "ca": "Best for year-round use (3-in-1)"
        },
        "why": {
          "fr": "Rafraîchit en été, chauffe en hiver et purifie l'air, avec un capteur et un filtre catalytique qui détruit en continu le formaldéhyde.",
          "en": "Cools in summer, heats in winter and purifies the air, with a sensor and catalytic filter that continuously destroys formaldehyde.",
          "de": "Kühlt im Sommer, heizt im Winter und reinigt die Luft – mit Sensor und Katalysatorfilter, der Formaldehyd kontinuierlich zerstört.",
          "es": "Refresca en verano, calienta en invierno y purifica el aire, con un sensor y un filtro catalítico que destruye el formaldehído de forma continua.",
          "it": "Rinfresca d'estate, riscalda d'inverno e purifica l'aria, con un sensore e un filtro catalitico che elimina costantemente la formaldeide.",
          "nl": "Koelt in de zomer, verwarmt in de winter en zuivert de lucht, met een sensor en katalytisch filter dat formaldehyde continu afbreekt.",
          "pl": "Chłodzi latem, grzeje zimą i oczyszcza powietrze; ma czujnik i filtr katalityczny, który na bieżąco rozkłada formaldehyd.",
          "sv": "Svalkar på sommaren, värmer på vintern och renar luften, med en sensor och ett katalytiskt filter som hela tiden bryter ner formaldehyd.",
          "us": "Cools in summer, heats in winter and purifies the air, with a sensor and catalytic filter that continuously destroys formaldehyde.",
          "ca": "Cools in summer, heats in winter and purifies the air, with a sensor and catalytic filter that continuously destroys formaldehyde."
        }
      }
    ]
  },
  "volets-roulants-connectes-guide": {
    "question": {
      "fr": "Quel est le meilleur volet roulant connecté en 2026 ?",
      "en": "What is the best smart roller shutter in 2026?",
      "de": "Welcher smarte Rollladen ist 2026 der beste?",
      "es": "¿Cuál es la mejor persiana motorizada inteligente en 2026?",
      "it": "Qual è la migliore tapparella elettrica smart nel 2026?",
      "nl": "Wat is het beste slimme rolluik in 2026?",
      "pl": "Jaka jest najlepsza inteligentna roleta zewnętrzna w 2026 roku?",
      "sv": "Vilken smart rulljalusi är bäst 2026?",
      "us": "What is the best smart rolling shutter in 2026?",
      "ca": "What is the best smart roller shutter in 2026?"
    },
    "picks": [
      {
        "model": "Somfy Oximo io",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Moteur tubulaire io-homecontrol bidirectionnel : la position de chaque volet s'affiche dans l'application, avec pilotage et scénarios via la TaHoma Switch.",
          "en": "Two-way io-homecontrol tubular motor: every shutter's position shows in the app, with control and scenes through the TaHoma Switch.",
          "de": "Bidirektionaler io-homecontrol-Rohrmotor: Die Position jedes Rollladens erscheint in der App, Steuerung und Szenen laufen über die TaHoma Switch.",
          "es": "Motor tubular io-homecontrol bidireccional: la posición de cada persiana aparece en la app, con control y escenas a través de la TaHoma Switch.",
          "it": "Motore tubolare io-homecontrol bidirezionale: la posizione di ogni tapparella compare nell'app, con comandi e scenari tramite la TaHoma Switch.",
          "nl": "Tweerichtings io-homecontrol buismotor: de stand van elk rolluik verschijnt in de app, met bediening en scènes via de TaHoma Switch.",
          "pl": "Dwukierunkowy silnik rurowy io-homecontrol: położenie każdej rolety widać w aplikacji, a sterowanie i scenariusze obsługuje TaHoma Switch.",
          "sv": "Rörmotor med tvåvägskommunikation via io-homecontrol: varje rulljalusis läge syns i appen, och styrning och scener sköts via TaHoma Switch.",
          "us": "A two-way io-homecontrol tubular motor: each shutter's position shows up in the app, with control and scenes through the TaHoma Switch.",
          "ca": "Two-way io-homecontrol tubular motor: every shutter's position shows in the app, with control and scenes through the TaHoma Switch."
        }
      },
      {
        "model": "Somfy Oximo RTS",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Même principe que l'Oximo io en radio RTS, plus abordable et simple à installer, pilotable par la TaHoma Switch, mais sans retour d'état.",
          "en": "The same idea as the Oximo io but with RTS radio: cheaper and easy to install, works with the TaHoma Switch, but has no position feedback.",
          "de": "Gleiches Prinzip wie der Oximo io mit RTS-Funk, günstiger und einfach einzubauen, über TaHoma Switch steuerbar, aber ohne Positionsrückmeldung.",
          "es": "El mismo principio que el Oximo io, pero con radio RTS: más asequible y fácil de instalar, se controla con la TaHoma Switch, aunque no confirma la posición de la persiana.",
          "it": "Stesso principio dell'Oximo io ma con radio RTS: più economico e facile da installare, gestibile con la TaHoma Switch, ma senza ritorno di stato.",
          "nl": "Zelfde principe als de Oximo io met RTS-radio, voordeliger en eenvoudig te plaatsen, te bedienen via TaHoma Switch, maar zonder terugmelding.",
          "pl": "Działa tak samo jak Oximo io, ale w systemie radiowym RTS; jest tańszy i łatwiejszy w montażu, współpracuje z TaHoma Switch, ale nie przekazuje informacji zwrotnej o położeniu.",
          "sv": "Samma princip som Oximo io men med RTS-radio, mer prisvärd och enkel att installera, styrs via TaHoma Switch men visar inte rulljalusins läge.",
          "us": "Same idea as the Oximo io, but on RTS radio: more affordable, easy to install and controllable through the TaHoma Switch, but with no position feedback.",
          "ca": "Same principle as the Oximo io with RTS radio, more affordable and easy to install, controllable via TaHoma Switch, but without position feedback."
        }
      },
      {
        "model": "VELUX INTEGRA Solar Roller Shutter",
        "role": {
          "fr": "Idéal pour fenêtres de toit",
          "en": "Best for roof windows",
          "de": "Ideal für Dachfenster",
          "es": "Ideal para ventanas de tejado",
          "it": "Ideale per finestre da tetto",
          "nl": "Ideaal voor dakramen",
          "pl": "Najlepszy do okien dachowych",
          "sv": "Bäst för takfönster",
          "us": "Best for skylights",
          "ca": "Best for roof windows"
        },
        "why": {
          "fr": "Volet extérieur pour fenêtre de toit, alimenté par panneau solaire et piloté en io-homecontrol, sans câblage à prévoir.",
          "en": "External roller shutter for roof windows, solar-powered and controlled via io-homecontrol, with no wiring to run.",
          "de": "Außenrollladen für Dachfenster, solarbetrieben und per io-homecontrol gesteuert, ohne Verkabelung.",
          "es": "Persiana exterior para ventanas de tejado, alimentada por energía solar y controlada por io-homecontrol, sin cableado.",
          "it": "Tapparella esterna per finestre da tetto, alimentata da un pannello solare e gestita via io-homecontrol, senza cavi da far passare.",
          "nl": "Buitenrolluik voor dakramen, op zonne-energie en bediend via io-homecontrol, zonder bekabeling.",
          "pl": "Roleta zewnętrzna do okna dachowego, zasilana panelem słonecznym i sterowana w systemie io-homecontrol, bez konieczności prowadzenia przewodów.",
          "sv": "Utvändig rulljalusi för takfönster, drivs av en solpanel och styrs via io-homecontrol, så ingen kabeldragning behövs.",
          "us": "An exterior rolling shutter for skylights and roof windows, solar-powered and controlled over io-homecontrol, with no wiring to run.",
          "ca": "External roller shutter for roof windows, solar-powered and controlled via io-homecontrol, with no wiring to run."
        }
      }
    ]
  },
  "camera-interieure-sans-abonnement": {
    "question": {
      "fr": "Quelle est la meilleure caméra intérieure sans abonnement en 2026 ?",
      "en": "What is the best indoor security camera with no subscription in 2026?",
      "de": "Welche ist die beste Innenkamera ohne Abo im Jahr 2026?",
      "es": "¿Cuál es la mejor cámara de interior sin suscripción en 2026?",
      "it": "Qual è la migliore telecamera per interni senza abbonamento nel 2026?",
      "nl": "Wat is de beste binnencamera zonder abonnement in 2026?",
      "pl": "Jaka jest najlepsza kamera wewnętrzna bez abonamentu w 2026 roku?",
      "sv": "Vilken inomhuskamera utan abonnemang är bäst 2026?",
      "us": "What is the best indoor security camera without a subscription in 2026?",
      "ca": "What is the best indoor security camera without a subscription in 2026?"
    },
    "picks": [
      {
        "model": "Eufy Indoor Cam E220",
        "role": {
          "fr": "Meilleure globale",
          "en": "Best overall",
          "de": "Beste insgesamt",
          "es": "La mejor en general",
          "it": "La nostra scelta",
          "nl": "Beste overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Image 2K, rotation 360°, détection des personnes, animaux et pleurs de bébé, microSD jusqu'à 128 Go et compatibilité HomeKit, Google et Alexa.",
          "en": "2K video, 360° pan/tilt, person, pet and baby cry detection, microSD up to 128 GB, and HomeKit, Google and Alexa support.",
          "de": "2K-Bild, 360°-Schwenk, Erkennung von Personen, Haustieren und Babyweinen, microSD bis 128 GB sowie HomeKit, Google und Alexa.",
          "es": "Imagen 2K, giro de 360°, detección de personas, mascotas y llanto de bebé, microSD de hasta 128 GB y compatibilidad con HomeKit, Google y Alexa.",
          "it": "Immagine 2K, rotazione a 360°, rilevamento di persone, animali e pianto del neonato, microSD fino a 128 GB e compatibilità HomeKit, Google e Alexa.",
          "nl": "2K-beeld, 360° draaien, detectie van personen, huisdieren en babygehuil, microSD tot 128 GB en ondersteuning voor HomeKit, Google en Alexa.",
          "pl": "Obraz 2K, obrót 360°, wykrywanie osób, zwierząt i płaczu dziecka, microSD do 128 GB oraz zgodność z HomeKit, Google i Alexą.",
          "sv": "2K-bild, 360° panorering och lutning, känner igen personer, husdjur och bebisgråt, microSD upp till 128 GB samt stöd för HomeKit, Google och Alexa.",
          "us": "2K video, 360° pan/tilt, person, pet and baby-crying detection, microSD up to 128 GB, and HomeKit, Google and Alexa support.",
          "ca": "2K video, 360° pan/tilt, person, pet and baby-crying detection, microSD up to 128 GB, and HomeKit, Google and Alexa support."
        }
      },
      {
        "model": "TP-Link Tapo C220",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Une caméra d'entrée de gamme très complète : 2K QHD, rotation 360°, détection variée et cartes microSD jusqu'à 512 Go.",
          "en": "A well-equipped entry-level camera: 2K QHD, 360° pan/tilt, a range of smart detection modes and microSD cards up to 512 GB.",
          "de": "Eine sehr gut ausgestattete Einsteigerkamera: 2K QHD, 360°-Schwenk, vielseitige Erkennung und microSD-Karten bis 512 GB.",
          "es": "Una cámara de gama de entrada muy completa: 2K QHD, giro de 360°, detección variada y tarjetas microSD de hasta 512 GB.",
          "it": "Una telecamera di fascia d'ingresso molto completa: 2K QHD, rotazione a 360°, diversi tipi di rilevamento e schede microSD fino a 512 GB.",
          "nl": "Een zeer complete instapcamera: 2K QHD, 360° draaien, gevarieerde detectie en microSD-kaarten tot 512 GB.",
          "pl": "Kamera z niższej półki, a bardzo dobrze wyposażona: 2K QHD, obrót 360°, wiele trybów wykrywania i obsługa kart microSD do 512 GB.",
          "sv": "En mycket komplett instegskamera: 2K QHD, 360° panorering och lutning, flera typer av smart detektering och microSD-kort upp till 512 GB.",
          "us": "A well-equipped entry-level camera: 2K QHD, 360° pan/tilt, a wide range of smart detection and microSD cards up to 512 GB.",
          "ca": "A very complete entry-level camera: 2K QHD, 360° pan/tilt, varied smart detection and microSD cards up to 512 GB."
        }
      },
      {
        "model": "Reolink E1 Pro",
        "role": {
          "fr": "Idéale pour le stockage NAS",
          "en": "Best for NAS storage",
          "de": "Ideal für NAS-Speicherung",
          "es": "Ideal para grabar en un NAS",
          "it": "Ideale per registrare su NAS",
          "nl": "Beste voor NAS-opslag",
          "pl": "Najlepsza do zapisu na NAS",
          "sv": "Bäst för lagring på NAS",
          "us": "Best for NAS storage",
          "ca": "Best for NAS storage"
        },
        "why": {
          "fr": "Image 5 MP, Wi-Fi bi-bande et, en plus de la microSD, envoi des vidéos vers un NAS par FTP ou vers un enregistreur Reolink.",
          "en": "5 MP video, dual-band Wi-Fi and, as well as microSD, the option to send footage to a NAS over FTP or to a Reolink recorder.",
          "de": "5-MP-Bild, Dualband-WLAN und neben microSD Übertragung der Aufnahmen per FTP auf ein NAS oder an einen Reolink-Rekorder.",
          "es": "Imagen de 5 MP, wifi de doble banda y, además de la microSD, envío de vídeos a un NAS por FTP o a un grabador Reolink.",
          "it": "Immagine 5 MP, Wi-Fi dual band e, oltre alla microSD, invio dei video a un NAS via FTP o a un registratore Reolink.",
          "nl": "5 MP-beeld, dualband-wifi en naast microSD upload van beelden naar een NAS via FTP of naar een Reolink-recorder.",
          "pl": "Obraz 5 MP, dwupasmowe Wi-Fi, a oprócz zapisu na microSD także przesyłanie nagrań na NAS przez FTP lub do rejestratora Reolink.",
          "sv": "Bild på 5 MP, wifi på två band och, utöver microSD, uppladdning av inspelningar till en NAS via FTP eller till en Reolink-inspelare.",
          "us": "5 MP video, dual-band Wi-Fi and, on top of microSD, the option to send footage to a NAS over FTP or to a Reolink recorder.",
          "ca": "5 MP video, dual-band Wi-Fi and, beyond microSD, footage upload to a NAS over FTP or to a Reolink recorder."
        }
      }
    ]
  },
  "aspirateur-sans-fil-comparatif-2026": {
    "question": {
      "fr": "Quel est le meilleur aspirateur balai sans fil en 2026 ?",
      "en": "What is the best cordless vacuum cleaner in 2026?",
      "de": "Welcher ist der beste Akku-Stielstaubsauger 2026?",
      "es": "¿Cuál es la mejor aspiradora sin cable en 2026?",
      "it": "Qual è la migliore scopa elettrica senza fili nel 2026?",
      "nl": "Wat is de beste draadloze steelstofzuiger in 2026?",
      "pl": "Jaki jest najlepszy odkurzacz pionowy bezprzewodowy w 2026 roku?",
      "sv": "Vilken sladdlös dammsugare är bäst 2026?",
      "us": "What is the best cordless stick vacuum in 2026?",
      "ca": "What is the best cordless stick vacuum in 2026?"
    },
    "picks": [
      {
        "model": "Dyson V15 Detect",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Puissance d'aspiration de référence, laser qui révèle la poussière fine, capteur de particules qui ajuste la puissance et filtration HEPA scellée.",
          "en": "Benchmark suction power, a laser that reveals fine dust, a particle sensor that adjusts power automatically and sealed HEPA filtration.",
          "de": "Referenz bei der Saugkraft, Laser macht feinen Staub sichtbar, Partikelsensor passt die Leistung an, dazu versiegelte HEPA-Filterung.",
          "es": "Potencia de aspiración de referencia, láser que revela el polvo fino, sensor de partículas que ajusta la potencia y filtración HEPA sellada.",
          "it": "Potenza di aspirazione al vertice della categoria, laser che rivela la polvere fine, sensore di particelle che regola la potenza e filtrazione HEPA sigillata.",
          "nl": "Referentie qua zuigkracht, laser die fijn stof zichtbaar maakt, deeltjessensor die het vermogen aanpast en afgedichte HEPA-filtratie.",
          "pl": "Siła ssania wyznaczająca standard, laser podświetlający drobny kurz, czujnik cząstek, który dostosowuje moc, i szczelny układ filtracji HEPA.",
          "sv": "Sugkraft i toppklass, laser som synliggör fint damm, partikelsensor som anpassar effekten automatiskt och helt tätad HEPA-filtrering.",
          "us": "Benchmark suction power, a laser that reveals fine dust, a particle sensor that adjusts power automatically and sealed HEPA filtration.",
          "ca": "Benchmark suction power, a laser that reveals fine dust, a particle sensor that adjusts power automatically and sealed HEPA filtration."
        }
      },
      {
        "model": "Rowenta X-Force Flex 15.60",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Tube Flex qui se plie pour passer sous les meubles bas, grand bac de 0,9 L et filtre lavable : un excellent choix pour un appartement.",
          "en": "A Flex tube that bends to reach under low furniture, a large 0.9 L bin and a washable filter: an excellent choice for a flat.",
          "de": "Biegbares Flex-Rohr für niedrige Möbel, großer 0,9-L-Behälter und waschbarer Filter: eine sehr gute Wahl für die Wohnung.",
          "es": "Tubo Flex que se dobla para pasar por debajo de los muebles bajos, depósito grande de 0,9 L y filtro lavable: una opción excelente para un piso.",
          "it": "Tubo Flex che si piega per passare sotto i mobili bassi, ampio contenitore da 0,9 L e filtro lavabile: ottima scelta per un appartamento.",
          "nl": "Buigbare Flex-buis om onder lage meubels te komen, grote stofbak van 0,9 L en wasbaar filter: een uitstekende keuze voor een appartement.",
          "pl": "Zginana rura Flex, z którą łatwo sięgniesz pod niskie meble, duży pojemnik 0,9 l i filtr nadający się do mycia – świetny wybór do mieszkania.",
          "sv": "Böjbart Flex-rör som når in under låga möbler, stor behållare på 0,9 liter och tvättbart filter: ett utmärkt val för lägenheten.",
          "us": "A Flex wand that bends to reach under low furniture, a large 0.9 L bin and a washable filter: an excellent choice for an apartment.",
          "ca": "A Flex tube that bends to reach under low furniture, a large 0.9 L bin and a washable filter: an excellent choice for an apartment."
        }
      },
      {
        "model": "Samsung Bespoke Jet AI",
        "role": {
          "fr": "Idéal pour l'autonomie et le vidage automatique",
          "en": "Best for battery life and auto-emptying",
          "de": "Ideal für Akkulaufzeit und automatische Entleerung",
          "es": "Ideal por su autonomía y su vaciado automático",
          "it": "Ideale per autonomia e svuotamento automatico",
          "nl": "Ideaal voor batterijduur en automatisch legen",
          "pl": "Idealny, gdy liczy się czas pracy i samoopróżnianie",
          "sv": "Bäst för lång batteritid och självtömning",
          "us": "Best for battery life and self-emptying",
          "ca": "Best for battery life and auto-emptying"
        },
        "why": {
          "fr": "Jusqu'à 100 minutes d'autonomie, IA qui adapte la puissance au sol et station Clean Station qui vide le bac automatiquement.",
          "en": "Up to 100 minutes of runtime, AI that adapts power to the floor type and a Clean Station that empties the bin automatically.",
          "de": "Bis zu 100 Minuten Laufzeit, KI passt die Leistung an den Boden an, und die Clean Station entleert den Behälter automatisch.",
          "es": "Hasta 100 minutos de autonomía, IA que adapta la potencia al tipo de suelo y base Clean Station que vacía el depósito automáticamente.",
          "it": "Fino a 100 minuti di autonomia, IA che adatta la potenza al pavimento e base Clean Station che svuota da sola il contenitore.",
          "nl": "Tot 100 minuten gebruiksduur, AI die het vermogen aan de vloer aanpast en een Clean Station die de stofbak automatisch leegt.",
          "pl": "Do 100 minut pracy na baterii, sztuczna inteligencja dopasowująca moc do rodzaju podłogi i stacja Clean Station, która sama opróżnia pojemnik.",
          "sv": "Upp till 100 minuters drifttid, AI som anpassar effekten efter golvtyp och en Clean Station som tömmer behållaren automatiskt.",
          "us": "Up to 100 minutes of runtime, AI that adapts power to the floor type and a Clean Station that empties the bin automatically.",
          "ca": "Up to 100 minutes of runtime, AI that adapts power to the floor type and a Clean Station that empties the bin automatically."
        }
      }
    ]
  },
  "interphone-video-connecte": {
    "question": {
      "fr": "Quel est le meilleur interphone vidéo connecté en 2026 ?",
      "en": "What is the best smart video intercom in 2026?",
      "de": "Welche ist die beste vernetzte Video-Türsprechanlage 2026?",
      "es": "¿Cuál es el mejor videoportero con app en 2026?",
      "it": "Qual è il miglior videocitofono smart nel 2026?",
      "nl": "Wat is de beste slimme video-intercom in 2026?",
      "pl": "Jaki jest najlepszy inteligentny wideodomofon w 2026 roku?",
      "sv": "Vilken smart videoporttelefon är bäst 2026?",
      "us": "What is the best smart video intercom in 2026?",
      "ca": "What is the best smart video intercom in 2026?"
    },
    "picks": [
      {
        "model": "Philips WelcomeEye Connect 3",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Écran tactile 7 pouces, caméra 3K, badges RFID et appli sur câblage 2 fils : le kit le plus complet pour une maison ou un petit immeuble.",
          "en": "7-inch touchscreen, 3K camera, RFID fobs and an app over 2-wire cabling: the most complete kit for a house or small block of flats.",
          "de": "7-Zoll-Touchscreen, 3K-Kamera, RFID-Transponder und App über 2-Draht-Verkabelung: das vollständigste Set für Haus oder kleines Gebäude.",
          "es": "Pantalla táctil de 7 pulgadas, cámara 3K, llaveros RFID y app sobre cableado de 2 hilos: el kit más completo para una casa o un edificio pequeño.",
          "it": "Schermo touch da 7 pollici, telecamera 3K, badge RFID e app su impianto a 2 fili: il kit più completo per una villetta o un piccolo condominio.",
          "nl": "7-inch touchscreen, 3K-camera, RFID-badges en een app via 2-draadsbekabeling: de meest complete set voor een huis of klein gebouw.",
          "pl": "7-calowy ekran dotykowy, kamera 3K, breloki RFID i aplikacja przy instalacji dwuprzewodowej – najlepiej wyposażony zestaw do domu jednorodzinnego lub małego budynku wielorodzinnego.",
          "sv": "7-tums pekskärm, 3K-kamera, RFID-taggar och app, allt via tvåtrådskabel: det mest kompletta kitet för en villa eller ett mindre flerbostadshus.",
          "us": "7-inch touchscreen, 3K camera, RFID key fobs and an app over 2-wire cabling: the most complete kit for a house or a small apartment building.",
          "ca": "7-inch touchscreen, 3K camera, RFID key fobs and an app over 2-wire cabling: the most complete kit for a house or small building."
        }
      },
      {
        "model": "BTicino Classe 100X",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Poste connecté de la gamme standard BTicino : écran 5 pouces, Wi-Fi et appli Home + Security sur le bus 2 fils BTicino.",
          "en": "A smart indoor unit from BTicino’s standard range: 5-inch screen, Wi-Fi and the Home + Security app, on BTicino’s 2-wire bus.",
          "de": "Vernetzte Innenstation der BTicino-Standardserie: 5-Zoll-Bildschirm, WLAN und App Home + Security am BTicino-2-Draht-Bus.",
          "es": "Monitor conectado de la gama estándar de BTicino: pantalla de 5 pulgadas, wifi y app Home + Security sobre el bus de 2 hilos de BTicino.",
          "it": "Posto interno smart della gamma standard BTicino: schermo da 5 pollici, Wi-Fi e app Home + Security sul bus a 2 fili BTicino.",
          "nl": "Verbonden binnenpost uit de standaardreeks van BTicino: 5-inch scherm, wifi en de app Home + Security op de BTicino-2-draadsbus.",
          "pl": "Monitor wewnętrzny ze standardowej linii BTicino: ekran 5 cali, Wi-Fi i aplikacja Home + Security, działa na dwuprzewodowej magistrali BTicino.",
          "sv": "Uppkopplad inomhusenhet i BTicinos standardserie: 5-tumsskärm, wifi och appen Home + Security på BTicinos tvåtrådsbuss.",
          "us": "BTicino’s mainstream smart indoor unit: 5-inch screen, Wi-Fi and the Home + Security app on the BTicino 2-wire bus.",
          "ca": "BTicino’s standard-range smart unit: 5-inch screen, Wi-Fi and the Home + Security app on the BTicino 2-wire bus."
        }
      },
      {
        "model": "Ring Intercom Video",
        "role": {
          "fr": "Idéal en appartement sans travaux",
          "en": "Best for flats, no building work",
          "de": "Ideal für Wohnungen ohne Umbau",
          "es": "Ideal para pisos sin obras",
          "it": "Ideale in appartamento, senza lavori",
          "nl": "Ideaal voor appartementen zonder verbouwing",
          "pl": "Idealny do mieszkania – bez prac instalacyjnych",
          "sv": "Bäst för lägenheter, utan ingrepp",
          "us": "Best for apartments, no remodeling",
          "ca": "Best for apartments, no renovation"
        },
        "why": {
          "fr": "Se raccorde au combiné existant et transfère les appels de l’interphone de l’immeuble vers l’appli Ring, sans toucher à la platine commune.",
          "en": "Wires into your existing handset and forwards calls from your building’s intercom to the Ring app, without touching the communal entrance panel.",
          "de": "Wird an die vorhandene Innenstation angeschlossen und leitet Anrufe der Hausanlage an die Ring-App weiter, ohne die Außenstation anzutasten.",
          "es": "Se conecta al telefonillo existente y desvía las llamadas del portero del edificio a la app Ring, sin tocar la placa común.",
          "it": "Si collega al citofono esistente e trasferisce le chiamate del citofono condominiale all’app Ring, senza toccare la pulsantiera comune.",
          "nl": "Wordt op je bestaande binnenpost aangesloten en stuurt oproepen van de gebouwintercom door naar de Ring-app, zonder het gemeenschappelijke paneel aan te raken.",
          "pl": "Podłączasz go do istniejącego unifonu, a on przekierowuje połączenia z domofonu w budynku do aplikacji Ring – bez ingerencji we wspólny panel przy wejściu.",
          "sv": "Kopplas till din befintliga svarsapparat och skickar vidare samtal från husets porttelefon till Ring-appen, utan att du rör den gemensamma panelen.",
          "us": "Wires into your existing intercom handset and forwards calls from the building's entry panel to the Ring app, without touching the shared panel.",
          "ca": "Wires into your existing handset and forwards building intercom calls to the Ring app, without touching the shared panel."
        }
      }
    ]
  },
  "nettoyeur-vapeur-connecte": {
    "question": {
      "fr": "Quel est le meilleur nettoyeur vapeur en 2026 ?",
      "en": "What is the best steam cleaner in 2026?",
      "de": "Welcher ist der beste Dampfreiniger 2026?",
      "es": "¿Cuál es el mejor limpiador de vapor en 2026?",
      "it": "Qual è il miglior pulitore a vapore nel 2026?",
      "nl": "Wat is de beste stoomreiniger in 2026?",
      "pl": "Jaka jest najlepsza myjka parowa w 2026 roku?",
      "sv": "Vilken ångtvätt är bäst 2026?",
      "us": "What is the best steam cleaner in 2026?",
      "ca": "What is the best steam cleaner in 2026?"
    },
    "picks": [
      {
        "model": "Kärcher SC 5 EasyFix",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Insgesamt die beste Wahl",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Chaudière 4,2 bars, fonction VapoHydro et réservoir de 1,5 L remplissable en continu : le plus polyvalent pour sols, joints, cuisine et salle de bain.",
          "en": "4.2-bar boiler, VapoHydro function and a 1.5 L continuously refillable tank: the most versatile option for floors, grout, kitchens and bathrooms.",
          "de": "4,2-bar-Kessel, VapoHydro-Funktion und permanent nachfüllbarer 1,5-L-Tank: der vielseitigste für Böden, Fugen, Küche und Bad.",
          "es": "Caldera de 4,2 bar, función VapoHydro y depósito de 1,5 L que se rellena sin parar: el más versátil para suelos, juntas, cocina y baño.",
          "it": "Caldaia da 4,2 bar, funzione VapoHydro e serbatoio da 1,5 L ricaricabile in continuo: il più versatile per pavimenti, fughe, cucina e bagno.",
          "nl": "Ketel van 4,2 bar, VapoHydro-functie en continu bijvulbare tank van 1,5 L: de meest veelzijdige voor vloeren, voegen, keuken en badkamer.",
          "pl": "Kocioł 4,2 bara, funkcja VapoHydro i zbiornik 1,5 l, który można dolewać w trakcie pracy – najbardziej wszechstronna myjka do podłóg, fug, kuchni i łazienki.",
          "sv": "Ångpanna på 4,2 bar, funktionen VapoHydro och en tank på 1,5 liter som kan fyllas på under användning: mest mångsidig för golv, fogar, kök och badrum.",
          "us": "A 4.2-bar boiler, the VapoHydro function and a 51 fl oz (1.5 L) tank you can refill as you go: the most versatile pick for floors, grout, kitchens and bathrooms.",
          "ca": "4.2-bar boiler, VapoHydro function and a 1.5 L continuously refillable tank: the most versatile for floors, grout, kitchen and bathroom."
        }
      },
      {
        "model": "Black+Decker BHSM1610DSM",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Balai vapeur 2-en-1 prêt en 20 secondes, avec nettoyeur à main détachable et 15 accessoires : l’entrée de gamme la plus polyvalente.",
          "en": "2-in-1 steam mop ready in 20 seconds, with a detachable handheld unit and 15 accessories: the most versatile entry-level choice.",
          "de": "2-in-1-Dampfmopp, in 20 Sekunden bereit, mit abnehmbarem Handgerät und 15 Zubehörteilen: das vielseitigste Einstiegsgerät.",
          "es": "Mopa de vapor 2 en 1 lista en 20 segundos, con unidad de mano extraíble y 15 accesorios: el modelo básico más versátil.",
          "it": "Scopa a vapore 2 in 1 pronta in 20 secondi, con unità portatile staccabile e 15 accessori: la più versatile della fascia d’ingresso.",
          "nl": "2-in-1-stoomzwabber die in 20 seconden klaar is, met afneembare handunit en 15 accessoires: het meest veelzijdige instapmodel.",
          "pl": "Mop parowy 2 w 1, gotowy do pracy po 20 sekundach, z odłączaną myjką ręczną i 15 akcesoriami – najbardziej wszechstronny model z niższej półki.",
          "sv": "Ångmopp 2-i-1 som är redo att använda efter 20 sekunder, med löstagbar handenhet och 15 tillbehör: den mest mångsidiga instegsmodellen.",
          "us": "A 2-in-1 steam mop that's ready in 20 seconds, with a detachable handheld unit and 15 accessories: the most versatile entry-level choice.",
          "ca": "2-in-1 steam mop ready in 20 seconds, with a detachable handheld unit and 15 accessories: the most versatile entry-level choice."
        }
      },
      {
        "model": "Bissell PowerFresh Slim Steam",
        "role": {
          "fr": "Idéal pour les appartements",
          "en": "Best for flats",
          "de": "Ideal für Wohnungen",
          "es": "Ideal para pisos",
          "it": "Ideale per appartamenti",
          "nl": "Ideaal voor appartementen",
          "pl": "Idealny do mieszkań",
          "sv": "Bäst för lägenheter",
          "us": "Best for apartments",
          "ca": "Best for apartments"
        },
        "why": {
          "fr": "Balai vapeur à tête basse et pivotante, prêt en 30 secondes, qui se glisse sous les meubles : idéal pour studios et appartements.",
          "en": "Steam mop with a low, swivelling head, ready in 30 seconds, that slides under furniture: ideal for flats, including studios.",
          "de": "Dampfmopp mit flachem, schwenkbarem Kopf, in 30 Sekunden bereit, gleitet unter Möbel: ideal für Apartments und Wohnungen.",
          "es": "Mopa de vapor con cabezal bajo y giratorio, lista en 30 segundos, que pasa bajo los muebles: ideal para estudios y pisos.",
          "it": "Scopa a vapore con testa bassa e snodata, pronta in 30 secondi, che scivola sotto i mobili: ideale per monolocali e appartamenti.",
          "nl": "Stoomzwabber met lage, draaibare kop, klaar in 30 seconden, die onder meubels glijdt: ideaal voor studio’s en appartementen.",
          "pl": "Mop parowy z niską, obrotową głowicą, gotowy do pracy po 30 sekundach, który bez trudu wsuwa się pod meble – idealny do kawalerek i mieszkań.",
          "sv": "Ångmopp med lågt, vridbart huvud som är redo efter 30 sekunder och kommer åt under möblerna: perfekt för ettor och mindre lägenheter.",
          "us": "A steam mop with a low-profile swiveling head, ready in 30 seconds, that slides under furniture: ideal for studios and small apartments.",
          "ca": "Steam mop with a low, swivelling head, ready in 30 seconds, that slides under furniture: ideal for studios and small apartments."
        }
      }
    ]
  },
  "detection-fuite-eau-connectee": {
    "question": {
      "fr": "Quel est le meilleur détecteur de fuite d'eau connecté en 2026 ?",
      "en": "What is the best smart water leak detector in 2026?",
      "de": "Welcher ist der beste smarte Wassermelder 2026?",
      "es": "¿Cuál es el mejor detector de fugas de agua inteligente en 2026?",
      "it": "Qual è il miglior sensore di allagamento smart nel 2026?",
      "nl": "Wat is de beste slimme waterlekkagesensor in 2026?",
      "pl": "Jaki jest najlepszy inteligentny czujnik zalania w 2026 roku?",
      "sv": "Vilket smart vattenlarm är bäst 2026?",
      "us": "What is the best smart water leak detector in 2026?",
      "ca": "What is the best smart water leak detector in 2026?"
    },
    "picks": [
      {
        "model": "Aqara Water Leak Sensor T1",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Capteur Zigbee compact et IP67 à poser sous chaque appareil à risque, avec alerte smartphone et pile CR2032 qui dure environ deux ans.",
          "en": "A compact IP67 Zigbee sensor to place under every at-risk appliance, with phone alerts and a CR2032 battery that lasts around two years.",
          "de": "Kompakter IP67-Zigbee-Sensor für jedes gefährdete Gerät, mit Smartphone-Alarm und einer CR2032-Zelle, die rund zwei Jahre hält.",
          "es": "Sensor Zigbee compacto e IP67 para colocar bajo cada aparato de riesgo, con alerta en el móvil y pila CR2032 que dura unos dos años.",
          "it": "Sensore Zigbee compatto e IP67 da posare sotto ogni elettrodomestico a rischio, con avviso sullo smartphone e pila CR2032 che dura circa due anni.",
          "nl": "Compacte IP67-Zigbee-sensor voor onder elk risicotoestel, met smartphonemelding en een CR2032-cel die ongeveer twee jaar meegaat.",
          "pl": "Kompaktowy czujnik Zigbee o szczelności IP67, który kładziesz pod każdym urządzeniem grożącym wyciekiem, z powiadomieniem na smartfon i baterią CR2032 wystarczającą na ok. dwa lata.",
          "sv": "Kompakt Zigbee-sensor med IP67 att placera under varje apparat som kan läcka, med notiser till mobilen och ett CR2032-batteri som räcker i ungefär två år.",
          "us": "A compact IP67 Zigbee sensor to place under every appliance that could leak, with phone alerts and a CR2032 coin cell that lasts around two years.",
          "ca": "A compact IP67 Zigbee sensor to place under every at-risk appliance, with smartphone alerts and a CR2032 cell lasting around two years."
        }
      },
      {
        "model": "Shelly Flood Gen4",
        "role": {
          "fr": "Meilleur sans hub",
          "en": "Best without a hub",
          "de": "Beste Wahl ohne Hub",
          "es": "Mejor sin hub",
          "it": "Il migliore senza hub",
          "nl": "Beste zonder hub",
          "pl": "Najlepszy bez huba",
          "sv": "Bäst utan hubb",
          "us": "Best without a hub",
          "ca": "Best without a hub"
        },
        "why": {
          "fr": "Fonctionne en Wi-Fi sans hub, compatible Matter, avec buzzer intégré et câble de détection de 2 m extensible pour couvrir une zone entière.",
          "en": "Works over Wi-Fi with no hub, supports Matter, and has a built-in buzzer plus an extendable 2 m sensing cable to cover a whole area.",
          "de": "Funktioniert per WLAN ohne Hub, unterstützt Matter und bietet einen eingebauten Summer sowie ein erweiterbares 2-m-Sensorkabel für ganze Zonen.",
          "es": "Funciona por wifi sin hub, es compatible con Matter e incluye zumbador y un cable de detección de 2 m ampliable para cubrir toda una zona.",
          "it": "Funziona in Wi-Fi senza hub, è compatibile Matter e ha un cicalino integrato con cavo di rilevamento da 2 m estendibile per coprire un'intera zona.",
          "nl": "Werkt via wifi zonder hub, ondersteunt Matter en heeft een ingebouwde zoemer plus een uitbreidbare detectiekabel van 2 m voor een hele zone.",
          "pl": "Działa przez Wi-Fi bez huba, jest zgodny z Matter, ma wbudowany brzęczyk i 2-metrowy przewód czujnikowy, który można przedłużyć, by objąć cały obszar.",
          "sv": "Fungerar via wifi utan hubb, stöder Matter och har inbyggd summer samt en förlängningsbar sensorkabel på 2 m som täcker en hel yta.",
          "us": "Works over Wi-Fi with no hub, supports Matter, and has a built-in buzzer plus an extendable 6.6 ft (2 m) sensing cable to cover a whole area.",
          "ca": "Works over Wi-Fi with no hub, supports Matter, and has a built-in buzzer plus an extendable 2 m sensing cable to cover a whole area."
        }
      },
      {
        "model": "Aqara Valve Controller T1",
        "role": {
          "fr": "Idéal pour la coupure automatique",
          "en": "Best for automatic shut-off",
          "de": "Ideal für automatische Absperrung",
          "es": "Ideal para el corte automático",
          "it": "Ideale per la chiusura automatica",
          "nl": "Ideaal voor automatische afsluiting",
          "pl": "Najlepszy do automatycznego odcinania wody",
          "sv": "Bäst för automatisk avstängning",
          "us": "Best for automatic water shutoff",
          "ca": "Best for automatic shut-off"
        },
        "why": {
          "fr": "Se fixe sur une vanne quart de tour existante (DN15 à DN25) et la ferme automatiquement dès qu'un capteur Aqara détecte une fuite.",
          "en": "Clamps onto an existing quarter-turn valve (DN15 to DN25) and closes it automatically as soon as an Aqara sensor detects a leak.",
          "de": "Wird auf ein vorhandenes Vierteldrehungs-Ventil (DN15 bis DN25) gesetzt und schließt es automatisch, sobald ein Aqara-Sensor ein Leck erkennt.",
          "es": "Se acopla a una llave de cuarto de vuelta existente (DN15 a DN25) y la cierra automáticamente en cuanto un sensor Aqara detecta una fuga.",
          "it": "Si fissa su una valvola a quarto di giro esistente (da DN15 a DN25) e la chiude automaticamente appena un sensore Aqara rileva una perdita.",
          "nl": "Wordt op een bestaande kwartslagkraan (DN15 tot DN25) gezet en sluit die automatisch zodra een Aqara-sensor een lek detecteert.",
          "pl": "Montuje się go na istniejącym zaworze kulowym ćwierćobrotowym (DN15–DN25), a gdy czujnik Aqara wykryje wyciek, automatycznie go zakręca.",
          "sv": "Monteras på en befintlig kvartsvarvsventil (DN15–DN25) och stänger den automatiskt så fort en Aqara-sensor upptäcker ett läckage.",
          "us": "Clamps onto an existing quarter-turn valve (DN15 to DN25, roughly 1/2 to 1 in pipe) and closes it automatically as soon as an Aqara sensor detects a leak.",
          "ca": "Clamps onto an existing quarter-turn valve (DN15 to DN25, or ½ to 1 in.) and closes it automatically as soon as an Aqara sensor detects a leak."
        }
      }
    ]
  },
  "qualite-air-interieur-capteurs": {
    "question": {
      "fr": "Quel est le meilleur capteur de qualité de l'air intérieur en 2026 ?",
      "en": "What is the best indoor air quality monitor in 2026?",
      "de": "Welcher ist der beste Luftqualitätsmonitor für Innenräume 2026?",
      "es": "¿Cuál es el mejor medidor de calidad del aire interior en 2026?",
      "it": "Qual è il miglior rilevatore della qualità dell'aria in casa nel 2026?",
      "nl": "Wat is de beste binnenluchtkwaliteitsmeter in 2026?",
      "pl": "Jaki jest najlepszy czujnik jakości powietrza w pomieszczeniach w 2026 roku?",
      "sv": "Vilken luftkvalitetsmätare för inomhusbruk är bäst 2026?",
      "us": "What is the best indoor air quality monitor in 2026?",
      "ca": "What is the best indoor air quality monitor in 2026?"
    },
    "picks": [
      {
        "model": "Airthings View Plus",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Bester insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste algemeen",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Il réunit radon, PM1, PM2.5, CO2, COV, humidité, température et pression, sur piles ou secteur : le plus complet de la sélection.",
          "en": "It combines radon, PM1, PM2.5, CO2, VOCs, humidity, temperature and pressure on battery or mains power: the most complete pick here.",
          "de": "Er vereint Radon, PM1, PM2.5, CO2, VOC, Feuchte, Temperatur und Luftdruck, mit Batterie oder Netz – das umfassendste Gerät der Auswahl.",
          "es": "Reúne radón, PM1, PM2,5, CO2, COV, humedad, temperatura y presión, a pilas o enchufado: el más completo de la selección.",
          "it": "Misura radon, PM1, PM2.5, CO2, COV, umidità, temperatura e pressione, a pile o collegato alla corrente: il più completo della selezione.",
          "nl": "Combineert radon, PM1, PM2.5, CO2, VOS, vochtigheid, temperatuur en luchtdruk, op batterijen of netstroom: de meest complete keuze.",
          "pl": "Mierzy radon, PM1, PM2.5, CO2, LZO, wilgotność, temperaturę i ciśnienie, zasilany z baterii lub z sieci – najbardziej kompletny w zestawieniu.",
          "sv": "Mäter radon, PM1, PM2,5, CO₂, VOC, luftfuktighet, temperatur och lufttryck, med batteri eller nätström: den mest kompletta i urvalet.",
          "us": "It combines radon, PM1, PM2.5, CO2, VOCs, humidity, temperature and pressure, and runs on batteries or plugged in: the most complete pick here.",
          "ca": "It combines radon, PM1, PM2.5, CO2, VOCs, humidity, temperature and pressure on battery or plug-in power: the most complete pick here."
        }
      },
      {
        "model": "Netatmo Smart Indoor Air Quality Monitor",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Il suit CO2, humidité, température et bruit en Wi-Fi, sans abonnement et avec Apple HomeKit, pour savoir simplement quand aérer.",
          "en": "It tracks CO2, humidity, temperature and noise over Wi-Fi, with no subscription and Apple HomeKit support, so you can easily tell when to air the room.",
          "de": "Er erfasst CO2, Feuchte, Temperatur und Lärm per WLAN, ohne Abo und mit Apple HomeKit – so wissen Sie einfach, wann gelüftet werden sollte.",
          "es": "Mide CO2, humedad, temperatura y ruido por wifi, sin suscripción y con Apple HomeKit, para saber de un vistazo cuándo ventilar.",
          "it": "Rileva CO2, umidità, temperatura e rumore via Wi-Fi, senza abbonamento e con Apple HomeKit, per sapere semplicemente quando arieggiare.",
          "nl": "Volgt CO2, vochtigheid, temperatuur en geluid via wifi, zonder abonnement en met Apple HomeKit, zodat je simpel weet wanneer je moet luchten.",
          "pl": "Mierzy CO2, wilgotność, temperaturę i hałas, łączy się przez Wi-Fi, nie wymaga abonamentu i współpracuje z Apple HomeKit – po prostu podpowiada, kiedy przewietrzyć.",
          "sv": "Följer CO₂, luftfuktighet, temperatur och ljudnivå via wifi, utan abonnemang och med stöd för Apple HomeKit, så att du enkelt ser när det är dags att vädra.",
          "us": "It tracks CO2, humidity, temperature and noise over Wi-Fi, with no subscription and Apple HomeKit support, so you know exactly when to open a window.",
          "ca": "It tracks CO2, humidity, temperature and noise over Wi-Fi, with no subscription and Apple HomeKit support, so you simply know when to ventilate."
        }
      },
      {
        "model": "Aranet4 Home",
        "role": {
          "fr": "Idéal pour un CO2 fiable et mobile",
          "en": "Best for reliable, portable CO2 monitoring",
          "de": "Ideal für zuverlässiges, mobiles CO2",
          "es": "Ideal para un CO2 fiable y portátil",
          "it": "Ideale per misurare la CO2 ovunque, in modo affidabile",
          "nl": "Ideaal voor betrouwbare, draagbare CO2-meting",
          "pl": "Idealny do wiarygodnego, przenośnego pomiaru CO2",
          "sv": "Bäst för pålitlig och flyttbar CO₂-mätning",
          "us": "Best for reliable, portable CO2",
          "ca": "Best for reliable, portable CO2"
        },
        "why": {
          "fr": "Son capteur NDIR et son écran e-ink sur piles affichent le CO2 en permanence pendant des années, et il se déplace de pièce en pièce.",
          "en": "Its NDIR sensor and battery-powered e-ink screen show the CO2 level around the clock for years, and it’s easy to move from room to room.",
          "de": "NDIR-Sensor und batteriebetriebenes E-Ink-Display zeigen CO2 jahrelang auf einen Blick, und das Gerät wandert leicht von Raum zu Raum.",
          "es": "Su sensor NDIR y su pantalla de tinta electrónica a pilas muestran el CO2 en todo momento durante años, y se lleva fácilmente de una estancia a otra.",
          "it": "Il sensore NDIR e il display e-ink a batteria mostrano la CO2 in modo continuo per anni, e puoi spostarlo facilmente da una stanza all'altra.",
          "nl": "De NDIR-sensor en het e-inkscherm op batterijen tonen CO2 jarenlang in één oogopslag, en hij verhuist makkelijk van kamer naar kamer.",
          "pl": "Dzięki czujnikowi NDIR i ekranowi e-ink zasilanemu z baterii przez lata na bieżąco pokazuje stężenie CO2, a urządzenie łatwo przenieść z pokoju do pokoju.",
          "sv": "NDIR-sensorn och den batteridrivna e-ink-skärmen visar CO₂-halten konstant i flera år, och mätaren är lätt att flytta från rum till rum.",
          "us": "Its NDIR sensor and battery-powered e-ink screen show CO2 at a glance for years, and it moves easily from room to room.",
          "ca": "Its NDIR sensor and battery-powered e-ink screen show CO2 at a glance for years, and it moves easily from room to room."
        }
      }
    ]
  },
  "radiateur-electrique-connecte-guide": {
    "question": {
      "fr": "Quel est le meilleur radiateur électrique connecté en 2026 ?",
      "en": "What is the best smart electric heater in 2026?",
      "de": "Welcher ist der beste smarte Elektroheizkörper 2026?",
      "es": "¿Cuál es el mejor radiador eléctrico inteligente en 2026?",
      "it": "Qual è il miglior radiatore elettrico smart nel 2026?",
      "nl": "Wat is de beste slimme elektrische radiator in 2026?",
      "pl": "Jaki jest najlepszy inteligentny grzejnik elektryczny w 2026 roku?",
      "sv": "Vilket smart elelement är bäst 2026?",
      "us": "What is the best smart electric heater in 2026?",
      "ca": "What is the best smart electric heater in 2026?"
    },
    "picks": [
      {
        "model": "Thermor Equateur 4",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Inertie fonte et façade chauffante, détections de fenêtre ouverte et de présence, pilotage par l'application Cozytouch.",
          "en": "A cast-iron core with a radiant front panel, open window and presence detection, and control through the Cozytouch app.",
          "de": "Gussspeicher mit Heizfront, Fenster-offen- und Anwesenheitserkennung sowie Steuerung über die Cozytouch-App.",
          "es": "Inercia de fundición y frontal radiante, detección de ventana abierta y de presencia, y control con la app Cozytouch.",
          "it": "Radiatore a inerzia in ghisa con frontale radiante, rilevamento di finestra aperta e di presenza, gestione tramite l'app Cozytouch.",
          "nl": "Gietijzeren traagheid met verwarmd front, open-raam- en aanwezigheidsdetectie en bediening via de Cozytouch-app.",
          "pl": "Żeliwny rdzeń akumulujący ciepło i grzejący front, wykrywanie otwartego okna i obecności oraz sterowanie w aplikacji Cozytouch.",
          "sv": "Värmelagrande kärna av gjutjärn och värmande front, avkänning av öppet fönster och närvaro samt styrning via appen Cozytouch.",
          "us": "A thermal-mass electric heater with a cast-iron core and a heated front panel, open-window and presence detection, and control through the Cozytouch app.",
          "ca": "Cast-iron core for lasting heat, a heated front panel, open-window and presence detection, and control through the Cozytouch app."
        }
      },
      {
        "model": "Sauter Orosi 2",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Inertie fluide, détections de présence et de fenêtre ouverte, pilotage à distance via un boîtier Cozytouch, en entrée de gamme.",
          "en": "Fluid-filled, with presence and open window detection and remote control via a Cozytouch box, at an entry-level price.",
          "de": "Fluidspeicher, Anwesenheits- und Fenster-offen-Erkennung sowie Fernsteuerung über eine Cozytouch-Box, zum Einstiegspreis.",
          "es": "Inercia fluida, detección de presencia y de ventana abierta, y control a distancia con un módulo Cozytouch, a precio de gama de entrada.",
          "it": "Radiatore a inerzia a fluido, rilevamento di presenza e di finestra aperta, controllo a distanza tramite il modulo Cozytouch, in fascia d'ingresso.",
          "nl": "Vloeistoftraagheid, aanwezigheids- en open-raamdetectie en bediening op afstand via een Cozytouch-box, in het instapsegment.",
          "pl": "Akumulacja ciepła w płynie, wykrywanie obecności i otwartego okna, zdalne sterowanie przez moduł Cozytouch – w niższym przedziale cenowym.",
          "sv": "Vätskefylld värmelagring, avkänning av närvaro och öppet fönster samt fjärrstyrning via en Cozytouch-box – i instegsklassen.",
          "us": "A fluid-filled thermal-mass heater with presence and open-window detection, and remote control through a Cozytouch bridge, at an entry-level budget.",
          "ca": "A fluid-filled heater with presence and open-window detection and remote control via a Cozytouch bridge, at an entry-level budget."
        }
      },
      {
        "model": "Mill Gentle Air WiFi",
        "role": {
          "fr": "Idéal sans travaux",
          "en": "Best with no installation needed",
          "de": "Ideal ohne Montage",
          "es": "Ideal sin obras",
          "it": "Ideale senza lavori",
          "nl": "Ideaal zonder installatie",
          "pl": "Najlepszy bez prac instalacyjnych",
          "sv": "Bäst utan installation",
          "us": "Best with no installation needed",
          "ca": "Best with no installation"
        },
        "why": {
          "fr": "Radiateur bain d'huile mobile à brancher, Wi-Fi intégré avec l'application Millheat, fonction fenêtre ouverte et anti-basculement.",
          "en": "Portable plug-in oil-filled radiator with built-in Wi-Fi and the Millheat app, an open window function and tip-over protection.",
          "de": "Mobiler Ölradiator für die Steckdose, integriertes WLAN mit Millheat-App, Fenster-offen-Funktion und Kippschutz.",
          "es": "Radiador de aceite portátil para enchufar, wifi integrado con la app Millheat, función de ventana abierta y sistema antivuelco.",
          "it": "Radiatore a olio portatile da collegare alla presa, Wi-Fi integrato con app Millheat, funzione finestra aperta e antiribaltamento.",
          "nl": "Mobiele olieradiator voor het stopcontact, ingebouwde wifi met de Millheat-app, open-raamfunctie en kantelbeveiliging.",
          "pl": "Przenośny grzejnik olejowy, który wystarczy podłączyć do gniazdka, z wbudowanym Wi-Fi i aplikacją Millheat, funkcją wykrywania otwartego okna i zabezpieczeniem przed przewróceniem.",
          "sv": "Flyttbart oljefyllt element som du kopplar in i uttaget, med inbyggt wifi och appen Millheat, funktion för öppet fönster och tippskydd.",
          "us": "A portable plug-in oil-filled radiator heater with built-in Wi-Fi and the Millheat app, an open-window function and tip-over protection.",
          "ca": "Portable plug-in oil-filled heater with built-in Wi-Fi and the Millheat app, an open window function and tip-over protection."
        }
      }
    ]
  },
  "detecteur-fumee-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur détecteur de fumée connecté en 2026 ?",
      "en": "What is the best smart smoke alarm in 2026?",
      "de": "Welcher ist der beste vernetzte Rauchmelder 2026?",
      "es": "¿Cuál es el mejor detector de humo inteligente en 2026?",
      "it": "Qual è il miglior rilevatore di fumo smart nel 2026?",
      "nl": "Wat is de beste slimme rookmelder in 2026?",
      "pl": "Jaki jest najlepszy inteligentny czujnik dymu w 2026 roku?",
      "sv": "Vilken smart brandvarnare är bäst 2026?",
      "us": "What is the best smart smoke detector in 2026?",
      "ca": "What is the best smart smoke detector in 2026?"
    },
    "picks": [
      {
        "model": "Netatmo Smart Smoke Alarm",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Certifié EN 14604, sans hub et doté d’une pile de 10 ans, il sonne même sans internet et fonctionne avec Apple Maison et Google Home.",
          "en": "Certified to EN 14604, it needs no hub and has a 10-year battery; it still sounds without the internet and works with Apple Home and Google Home.",
          "de": "Nach EN 14604 zertifiziert, ohne Hub und mit 10-Jahres-Batterie: Er alarmiert auch ohne Internet und funktioniert mit Apple Home und Google Home.",
          "es": "Certificado EN 14604, sin hub y con batería de 10 años: suena aunque no haya internet y funciona con la app Casa de Apple y Google Home.",
          "it": "Certificato EN 14604, senza hub e con batteria da 10 anni, suona anche senza internet e funziona con Apple Casa e Google Home.",
          "nl": "EN 14604-gecertificeerd, zonder hub en met een 10-jaarsbatterij: hij gaat ook zonder internet af en werkt met Apple Woning en Google Home.",
          "pl": "Certyfikowany zgodnie z normą EN 14604, działa bez huba, ma baterię na 10 lat, alarmuje nawet bez internetu i współpracuje z Apple Home i Google Home.",
          "sv": "Certifierad enligt EN 14604, kräver ingen hubb och har 10-årsbatteri: den larmar även utan internet och fungerar med Apple Home och Google Home.",
          "us": "Certified to the European EN 14604 standard, hub-free and powered by a 10-year battery, it still sounds when your internet is down and works with Apple Home and Google Home.",
          "ca": "EN 14604 certified, hub-free and with a 10-year battery, it sounds even without internet and works with Apple Home and Google Home."
        }
      },
      {
        "model": "X-Sense XS01-WX",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Ce modèle Wi-Fi d’entrée de gamme certifié EN 14604 envoie les alertes sur smartphone sans hub, idéal pour équiper plusieurs pièces.",
          "en": "An entry-level Wi-Fi alarm certified to EN 14604 that sends alerts to your phone without a hub: ideal for fitting in several rooms.",
          "de": "Ein WLAN-Einstiegsmodell nach EN 14604, das ohne Hub aufs Smartphone meldet – ideal, um mehrere Räume auszustatten.",
          "es": "Modelo básico con wifi y certificado EN 14604 que avisa al móvil sin hub: ideal para equipar varias habitaciones.",
          "it": "Modello Wi-Fi di fascia d’ingresso certificato EN 14604 che invia gli avvisi allo smartphone senza hub: ideale per proteggere più stanze.",
          "nl": "Een instapmodel met wifi en EN 14604-certificering dat zonder hub meldingen stuurt, ideaal om meerdere kamers uit te rusten.",
          "pl": "Model z Wi-Fi z niższej półki, certyfikowany zgodnie z normą EN 14604, wysyła powiadomienia na smartfon bez huba – idealny, gdy chcesz wyposażyć kilka pomieszczeń.",
          "sv": "Instegsmodell med wifi, certifierad enligt EN 14604, som skickar larm till mobilen utan hubb – perfekt när flera rum ska ha brandvarnare.",
          "us": "An entry-level Wi-Fi alarm certified to EN 14604 that sends phone alerts with no hub, ideal for covering several rooms.",
          "ca": "An entry-level EN 14604 certified Wi-Fi alarm that sends smartphone alerts without a hub, ideal for covering several rooms."
        }
      },
      {
        "model": "Netatmo Smart Carbon Monoxide Alarm",
        "role": {
          "fr": "Idéal contre le monoxyde de carbone",
          "en": "Best for carbon monoxide",
          "de": "Ideal gegen Kohlenmonoxid",
          "es": "Ideal contra el monóxido de carbono",
          "it": "Ideale contro il monossido di carbonio",
          "nl": "Ideaal tegen koolmonoxide",
          "pl": "Najlepszy czujnik czadu",
          "sv": "Bäst mot koloxid",
          "us": "Best for carbon monoxide",
          "ca": "Best for carbon monoxide"
        },
        "why": {
          "fr": "Certifié EN 50291, il surveille le CO avec une pile de 10 ans et vous alerte sur smartphone : le complément indispensable avec chaudière ou poêle.",
          "en": "Certified to EN 50291, it monitors CO with a 10-year battery and alerts your phone: the essential add-on if you have a boiler or a wood burner.",
          "de": "Nach EN 50291 zertifiziert, überwacht er CO mit 10-Jahres-Batterie und meldet aufs Handy – die wichtige Ergänzung bei Therme oder Ofen.",
          "es": "Certificado EN 50291, vigila el CO con una batería de 10 años y avisa al móvil: el complemento imprescindible si tienes caldera o estufa.",
          "it": "Certificato EN 50291, controlla il CO con una batteria da 10 anni e ti avvisa sullo smartphone: il complemento indispensabile se hai una caldaia o una stufa.",
          "nl": "Gecertificeerd volgens EN 50291 bewaakt hij CO met een 10-jaarsbatterij en waarschuwt je telefoon: onmisbaar bij een cv-ketel of kachel.",
          "pl": "Certyfikowany zgodnie z normą EN 50291, monitoruje stężenie czadu (CO), ma baterię na 10 lat i ostrzega przez smartfon – niezbędne uzupełnienie, jeśli masz kocioł lub piec.",
          "sv": "Certifierad enligt EN 50291, övervakar koloxid med ett 10-årsbatteri och skickar larm till mobilen: ett nödvändigt komplement om du har panna eller kamin.",
          "us": "Certified to the European EN 50291 standard, it monitors CO on a 10-year battery and alerts your phone: the essential add-on if you have a fuel-burning furnace, boiler or wood stove.",
          "ca": "Certified to EN 50291, it monitors CO with a 10-year battery and alerts your phone: the essential add-on if you have a gas furnace, boiler or wood stove."
        }
      }
    ]
  },
  "airfryer-economies-energie": {
    "question": {
      "fr": "Quel airfryer choisir pour économiser de l’énergie en 2026 ?",
      "en": "Which air fryer is best for saving energy in 2026?",
      "de": "Welche Heißluftfritteuse spart 2026 am meisten Energie?",
      "es": "¿Qué freidora de aire elegir para ahorrar energía en 2026?",
      "it": "Quale friggitrice ad aria scegliere per risparmiare energia nel 2026?",
      "nl": "Welke airfryer kies je in 2026 om energie te besparen?",
      "pl": "Jaką frytkownicę beztłuszczową wybrać w 2026 roku, by oszczędzać energię?",
      "sv": "Vilken airfryer ska du välja för att spara energi 2026?",
      "us": "Which air fryer saves the most energy in 2026?",
      "ca": "Which air fryer should you choose to save energy in 2026?"
    },
    "picks": [
      {
        "model": "Philips Airfryer Série 3000 XL - 6.2L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "6,2 L dans un seul panier : de quoi cuisiner pour 3 à 5 personnes en une fournée et laisser le four éteint.",
          "en": "6.2 L in a single basket: enough to cook for 3 to 5 people in one batch and leave the oven off.",
          "de": "6,2 L in einem Korb: genug für 3 bis 5 Personen in einem Durchgang, der Backofen bleibt aus.",
          "es": "6,2 L en una sola cesta: suficiente para cocinar de una tanda para 3 a 5 personas, con el horno apagado.",
          "it": "6,2 L in un unico cestello: abbastanza per cucinare per 3-5 persone in una volta sola, lasciando il forno spento.",
          "nl": "6,2 L in één mand: genoeg voor 3 tot 5 personen in één ronde, terwijl de oven uit blijft.",
          "pl": "Jeden kosz 6,2 l: za jednym razem przygotujesz posiłek dla 3–5 osób, a piekarnik może zostać wyłączony.",
          "sv": "6,2 liter i en enda korg: tillräckligt för att laga mat åt 3–5 personer i en omgång och låta ugnen vara avstängd.",
          "us": "6.6 qt (6.2 L) in a single basket: enough to feed 3 to 5 people in one batch and leave the oven off.",
          "ca": "6.2 L in a single basket: enough to cook for 3 to 5 people in one batch and leave the oven off."
        }
      },
      {
        "model": "Moulinex Easy Fry Max 5L",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "5 L et 1 500 W : une puissance modérée et assez de place pour 3 à 4 personnes, sans fonctions superflues.",
          "en": "5 L and 1,500 W: moderate power and enough room for 3 to 4 people, with no unnecessary extras.",
          "de": "5 L und 1.500 W: moderate Leistung und genug Platz für 3 bis 4 Personen, ohne überflüssige Extras.",
          "es": "5 L y 1.500 W: potencia moderada y espacio para 3 o 4 personas, sin funciones superfluas.",
          "it": "5 L e 1.500 W: potenza moderata e spazio per 3-4 persone, senza funzioni superflue.",
          "nl": "5 L en 1.500 W: gematigd vermogen en ruimte voor 3 tot 4 personen, zonder overbodige extra’s.",
          "pl": "5 l i 1500 W: umiarkowana moc i dość miejsca dla 3–4 osób, bez zbędnych funkcji.",
          "sv": "5 liter och 1 500 W: måttlig effekt och plats nog för 3–4 personer, utan onödiga extrafunktioner.",
          "us": "5.3 qt (5 L) and 1,500 W: moderate power and enough room for 3 to 4 people, with no extras you don't need.",
          "ca": "5 L and 1,500 W: moderate power and enough room for 3 to 4 people, with no unnecessary extras."
        }
      },
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Idéal pour remplacer le four en famille",
          "en": "Best for families replacing the oven",
          "de": "Ideal, um den Backofen für Familien zu ersetzen",
          "es": "Ideal para sustituir el horno en familia",
          "it": "Ideale per sostituire il forno in famiglia",
          "nl": "Ideaal om de oven te vervangen voor gezinnen",
          "pl": "Idealna zamiast piekarnika dla rodziny",
          "sv": "Bäst för familjer som vill ersätta ugnen",
          "us": "Best oven replacement for families",
          "ca": "Best for replacing the oven for families"
        },
        "why": {
          "fr": "Deux tiroirs superposés de 4,75 L pour cuire plat et accompagnement en même temps, au lieu d’allumer le four.",
          "en": "Two stacked 4.75 L drawers let you cook a main and a side at the same time, instead of switching the oven on.",
          "de": "Zwei übereinanderliegende 4,75-L-Körbe garen Hauptgericht und Beilage gleichzeitig, statt den Backofen anzuwerfen.",
          "es": "Dos cestas apiladas de 4,75 L para cocinar plato y guarnición a la vez, en lugar de encender el horno.",
          "it": "Due cassetti sovrapposti da 4,75 L per cuocere secondo e contorno insieme, invece di accendere il forno.",
          "nl": "Twee gestapelde lades van 4,75 L voor hoofd- en bijgerecht tegelijk, in plaats van de oven aan te zetten.",
          "pl": "Dwie szuflady po 4,75 l, jedna nad drugą: danie główne i dodatek przygotujesz jednocześnie, bez włączania piekarnika.",
          "sv": "Två staplade lådor på 4,75 liter tillagar huvudrätt och tillbehör samtidigt, så att du slipper sätta på ugnen.",
          "us": "Two stacked 5 qt (4.75 L) drawers cook a main and a side at the same time, so you don't have to turn on the oven.",
          "ca": "Two stacked 4.75 L drawers cook a main and a side at the same time instead of switching the oven on."
        }
      }
    ]
  },
  "airfryer-simple-vs-double-panier": {
    "question": {
      "fr": "Quel est le meilleur airfryer, simple ou double panier, en 2026 ?",
      "en": "Single or dual basket: what is the best air fryer in 2026?",
      "de": "Was ist die beste Heißluftfritteuse 2026, mit Einzel- oder Doppelkorb?",
      "es": "¿Cuál es la mejor freidora de aire de una o dos cestas en 2026?",
      "it": "Qual è la migliore friggitrice ad aria, a cestello singolo o doppio, nel 2026?",
      "nl": "Wat is de beste airfryer met enkele of dubbele mand in 2026?",
      "pl": "Jaka frytkownica beztłuszczowa jest najlepsza w 2026 roku: z jednym czy z dwoma koszami?",
      "sv": "Vilken airfryer är bäst 2026, med en eller två korgar?",
      "us": "What is the best air fryer in 2026: single or dual basket?",
      "ca": "What is the best air fryer, single or dual basket, in 2026?"
    },
    "picks": [
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste algemene keuze",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Deux tiroirs empilés de 4,75 L sur environ 28 cm de large : deux plats en même temps sans monopoliser le plan de travail.",
          "en": "Two stacked 4.75 L drawers in a unit only about 28 cm wide: two dishes at once without hogging the worktop.",
          "de": "Zwei gestapelte Schubladen mit je 4,75 l auf rund 28 cm Breite: zwei Gerichte gleichzeitig, ohne die Arbeitsfläche zu blockieren.",
          "es": "Dos cajones apilados de 4,75 L en unos 28 cm de ancho: dos platos a la vez sin acaparar la encimera.",
          "it": "Due cassetti sovrapposti da 4,75 L in circa 28 cm di larghezza: due piatti insieme senza occupare tutto il piano di lavoro.",
          "nl": "Twee gestapelde lades van 4,75 l op zo’n 28 cm breedte: twee gerechten tegelijk zonder je aanrecht vol te zetten.",
          "pl": "Dwie szuflady po 4,75 l ustawione jedna na drugiej, przy szerokości ok. 28 cm: dwa dania naraz bez zajmowania całego blatu.",
          "sv": "Två staplade lådor på 4,75 liter som bara tar ungefär 28 cm på bredden: två rätter samtidigt utan att hela bänkytan går åt.",
          "us": "Two stacked 5 qt (4.75 L) drawers in a footprint about 11 in (28 cm) wide: two dishes at once without hogging the countertop.",
          "ca": "Two stacked 4.75 L drawers in about 28 cm of width: two dishes at once without taking over the counter."
        }
      },
      {
        "model": "Ninja Foodi FlexDrawer 10.4L Double Zone",
        "role": {
          "fr": "Idéal pour les grandes familles",
          "en": "Best for large families",
          "de": "Ideal für große Familien",
          "es": "Ideal para familias numerosas",
          "it": "Ideale per famiglie numerose",
          "nl": "Ideaal voor grote gezinnen",
          "pl": "Najlepsza dla dużych rodzin",
          "sv": "Bäst för storfamiljer",
          "us": "Best for large families",
          "ca": "Best for large families"
        },
        "why": {
          "fr": "Deux zones de 5,2 L ou, sans séparateur, une grande cuve de 10,4 L pour un poulet entier : le plus polyvalent pour cinq personnes et plus.",
          "en": "Two 5.2 L zones or, without the divider, one large 10.4 L drawer for a whole chicken: the most versatile option for five or more people.",
          "de": "Zwei Zonen mit 5,2 l oder ohne Trennwand ein 10,4-l-Garraum für ein ganzes Hähnchen: am vielseitigsten ab fünf Personen.",
          "es": "Dos zonas de 5,2 L o, sin separador, una cubeta de 10,4 L para un pollo entero: la más versátil para cinco personas o más.",
          "it": "Due zone da 5,2 L o, senza divisorio, un unico cassetto da 10,4 L per un pollo intero: la più versatile da cinque persone in su.",
          "nl": "Twee zones van 5,2 l of, zonder wand, één lade van 10,4 l voor een hele kip: het veelzijdigst voor vijf of meer personen.",
          "pl": "Dwie strefy po 5,2 l albo – po wyjęciu przegrody – jedna duża komora 10,4 l, w której zmieści się cały kurczak: najbardziej wszechstronna dla pięciu i więcej osób.",
          "sv": "Två zoner på 5,2 liter eller, utan skiljevägg, en låda på 10,4 liter för en hel kyckling: mest mångsidig för fem personer eller fler.",
          "us": "Two 5.5 qt (5.2 L) zones or, with the divider out, one 11 qt (10.4 L) drawer big enough for a whole chicken: the most versatile pick for five or more people.",
          "ca": "Two 5.2 L zones or, without the divider, one 10.4 L drawer for a whole chicken: the most versatile for five or more people."
        }
      },
      {
        "model": "Philips Airfryer Série 3000 XL - 6.2L",
        "role": {
          "fr": "Meilleur simple panier",
          "en": "Best single basket",
          "de": "Bester Einzelkorb",
          "es": "Mejor de una sola cesta",
          "it": "La migliore a cestello singolo",
          "nl": "Beste enkele mand",
          "pl": "Najlepsza z jednym koszem",
          "sv": "Bäst med en korg",
          "us": "Best single basket",
          "ca": "Best single basket"
        },
        "why": {
          "fr": "Un panier de 6,2 L, sept programmes et une utilisation très simple : suffisant et plus compact pour une à trois personnes.",
          "en": "A 6.2 L basket, seven presets and very simple controls: plenty for one to three people, and more compact.",
          "de": "Ein 6,2-l-Korb, sieben Programme und sehr einfache Bedienung: ausreichend und kompakter für ein bis drei Personen.",
          "es": "Una cesta de 6,2 L, siete programas y un manejo muy sencillo: basta para hogares de una a tres personas y es más compacta.",
          "it": "Un cestello da 6,2 L, sette programmi e un uso semplicissimo: basta ed è più compatta per 1-3 persone.",
          "nl": "Een mand van 6,2 l, zeven programma’s en heel eenvoudige bediening: genoeg en compacter voor één tot drie personen.",
          "pl": "Kosz 6,2 l, siedem programów i bardzo prosta obsługa: dla jednej do trzech osób w zupełności wystarczy, a zajmuje mniej miejsca.",
          "sv": "En korg på 6,2 liter, sju förinställda program och mycket enkla reglage: tillräckligt, och mer kompakt, för en till tre personer.",
          "us": "A 6.6 qt (6.2 L) basket, seven presets and dead-simple controls: plenty for one to three people, in a smaller footprint.",
          "ca": "A 6.2 L basket, seven presets and very simple controls: enough, and more compact, for one to three people."
        }
      }
    ]
  },
  "airfryer-vs-friteuse-traditionnelle": {
    "question": {
      "fr": "Quel est le meilleur airfryer pour remplacer une friteuse traditionnelle en 2026 ?",
      "en": "What is the best air fryer to replace a deep fat fryer in 2026?",
      "de": "Was ist die beste Heißluftfritteuse als Ersatz für eine klassische Fritteuse 2026?",
      "es": "¿Cuál es la mejor freidora de aire para sustituir una freidora tradicional en 2026?",
      "it": "Qual è la migliore friggitrice ad aria per sostituire la friggitrice a olio nel 2026?",
      "nl": "Wat is de beste airfryer om een traditionele frituurpan te vervangen in 2026?",
      "pl": "Jaka frytkownica beztłuszczowa najlepiej zastąpi tradycyjną frytkownicę olejową w 2026 roku?",
      "sv": "Vilken airfryer är bäst för att ersätta en vanlig fritös 2026?",
      "us": "What is the best air fryer to replace a deep fryer in 2026?",
      "ca": "What is the best air fryer to replace a traditional deep fryer in 2026?"
    },
    "picks": [
      {
        "model": "Philips Airfryer Série 3000 XL - 6.2L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Son tiroir de 6,2 litres (environ 1,2 kg de frites) et ses programmes prédéfinis couvrent les besoins d’une famille de quatre qui abandonne la friteuse.",
          "en": "Its 6.2-litre drawer (about 1.2 kg of chips) and preset programmes are all a family of four needs when giving up the deep fat fryer.",
          "de": "Die 6,2-Liter-Schublade (rund 1,2 kg Pommes) und die Programme decken den Bedarf einer vierköpfigen Familie, die die Fritteuse aufgibt.",
          "es": "Su cajón de 6,2 litros (unos 1,2 kg de patatas) y sus programas predefinidos cubren las necesidades de una familia de cuatro que deja la freidora de aceite.",
          "it": "Il cestello da 6,2 litri (circa 1,2 kg di patatine) e i programmi preimpostati bastano a una famiglia di quattro persone che dice addio alla friggitrice a olio.",
          "nl": "De lade van 6,2 liter (ongeveer 1,2 kg frietjes) en de programma’s dekken de behoeften van een gezin van vier dat de frituurpan opgeeft.",
          "pl": "Szuflada 6,2 l (ok. 1,2 kg frytek) i gotowe programy wystarczą czteroosobowej rodzinie, która rezygnuje z frytkownicy olejowej.",
          "sv": "Lådan på 6,2 liter (ca 1,2 kg pommes frites) och de förinställda programmen räcker för en familj på fyra som gör sig av med fritösen.",
          "us": "Its 6.6 qt (6.2 L) drawer holds about 2.6 lb (1.2 kg) of fries, and its presets cover everything a family of four needs once the deep fryer goes.",
          "ca": "Its 6.2-litre drawer (about 1.2 kg of fries) and preset programs cover the needs of a family of four giving up the deep fryer."
        }
      },
      {
        "model": "Tefal ActiFry Genius XL 2in1 - 1.7kg",
        "role": {
          "fr": "Idéal pour les amateurs de frites",
          "en": "Best for chip lovers",
          "de": "Ideal für Pommes-Fans",
          "es": "Ideal para los amantes de las patatas fritas",
          "it": "Ideale per chi ama le patatine",
          "nl": "Ideaal voor frietliefhebbers",
          "pl": "Najlepsza dla miłośników frytek",
          "sv": "Bäst för dig som älskar pommes frites",
          "us": "Best for french fry lovers",
          "ca": "Best for fries lovers"
        },
        "why": {
          "fr": "Sa pale remue les frites pendant la cuisson : 1,7 kg avec une cuillère d’huile, sans secouer le panier.",
          "en": "Its paddle stirs the chips while they cook: 1.7 kg with one spoonful of oil, and no basket shaking needed.",
          "de": "Der Rührarm wendet die Pommes beim Garen: 1,7 kg mit einem Löffel Öl, ohne den Korb zu schütteln.",
          "es": "Su pala remueve las patatas durante la cocción: 1,7 kg con una cucharada de aceite, sin agitar la cesta.",
          "it": "La pala mescola le patatine durante la cottura: 1,7 kg con un cucchiaio d’olio, senza dover scuotere il cestello.",
          "nl": "De roerarm schept de frietjes om tijdens het bakken: 1,7 kg met één lepel olie, zonder de mand te schudden.",
          "pl": "Łopatka sama miesza frytki podczas smażenia: 1,7 kg na jednej łyżce oleju, bez potrząsania koszem.",
          "sv": "En paddel rör om under tillagningen: 1,7 kg pommes frites med en sked olja, utan att du behöver skaka korgen.",
          "us": "Its paddle stirs the fries as they cook: 3.7 lb (1.7 kg) with a single spoonful of oil, and no basket to shake.",
          "ca": "Its paddle stirs the fries while they cook: 1.7 kg with one spoonful of oil, no basket shaking needed."
        }
      }
    ]
  },
  "alarme-maison-sans-abonnement": {
    "question": {
      "fr": "Quelle est la meilleure alarme maison sans abonnement en 2026 ?",
      "en": "What is the best home alarm with no subscription in 2026?",
      "de": "Welche ist die beste Alarmanlage ohne Abo 2026?",
      "es": "¿Cuál es la mejor alarma para casa sin cuotas en 2026?",
      "it": "Qual è il miglior allarme casa senza abbonamento nel 2026?",
      "nl": "Wat is het beste alarmsysteem zonder abonnement in 2026?",
      "pl": "Jaki jest najlepszy alarm do domu bez abonamentu w 2026 roku?",
      "sv": "Vilket hemlarm utan abonnemang är bäst 2026?",
      "us": "What is the best home security system with no monthly fee in 2026?",
      "ca": "What is the best home alarm system with no monthly fee in 2026?"
    },
    "picks": [
      {
        "model": "Ajax StarterKit 4G",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Centrale Ethernet et 4G (deux SIM), batterie jusqu’à 16 h, portée Jeweller étendue et certification Grade 2.",
          "en": "Ethernet and 4G hub (two SIMs), backup battery lasting up to 16 h, long Jeweller radio range and Grade 2 certification.",
          "de": "Zentrale mit Ethernet und 4G (zwei SIM), Akku bis 16 h, große Jeweller-Funkreichweite und Grade-2-Zertifizierung.",
          "es": "Central con Ethernet y 4G (dos SIM), batería de hasta 16 h, alcance ampliado Jeweller y certificación Grado 2.",
          "it": "Centrale Ethernet e 4G (due SIM), batteria fino a 16 ore, portata Jeweller estesa e certificazione Grado 2.",
          "nl": "Centrale met ethernet en 4G (twee simkaarten), accu tot 16 u, groot Jeweller-bereik en Grade 2-certificering.",
          "pl": "Centrala z łącznością Ethernet i 4G (dwie karty SIM), akumulator na maks. 16 h, zwiększony zasięg protokołu Jeweller i certyfikat Grade 2.",
          "sv": "Centralenhet med Ethernet och 4G (två SIM-kort), batteri som räcker upp till 16 timmar, lång räckvidd med Jeweller-radion och certifiering enligt Grade 2.",
          "us": "An Ethernet and 4G hub (two SIM slots), up to 16 hours of backup battery, long Jeweller radio range and Grade 2 certification.",
          "ca": "Ethernet and 4G hub (two SIMs), battery up to 16 h, long Jeweller radio range and Grade 2 certification."
        }
      },
      {
        "model": "Somfy Home Alarm Advanced",
        "role": {
          "fr": "Meilleure détection anti-effraction",
          "en": "Best break-in detection",
          "de": "Beste Aufbrucherkennung",
          "es": "Mejor detección de intrusión",
          "it": "Il miglior rilevamento antieffrazione",
          "nl": "Beste inbraakdetectie",
          "pl": "Najlepsze wykrywanie prób włamania",
          "sv": "Bäst på att upptäcka inbrott",
          "us": "Best break-in detection",
          "ca": "Best break-in detection"
        },
        "why": {
          "fr": "Les IntelliTAG détectent les vibrations avant l’ouverture, avec sirène 110 dB et réseau GSM de secours offert cinq ans.",
          "en": "IntelliTAG sensors pick up vibrations before a door or window is even opened, with a 110 dB siren and GSM backup included free for five years.",
          "de": "IntelliTAG erkennen Erschütterungen vor dem Öffnen, dazu 110-dB-Sirene und fünf Jahre inklusive GSM-Backup.",
          "es": "Los IntelliTAG detectan las vibraciones antes de que se llegue a abrir, con sirena de 110 dB y conexión GSM de respaldo incluida durante cinco años.",
          "it": "Gli IntelliTAG rilevano le vibrazioni prima dell’apertura, con sirena da 110 dB e rete GSM di riserva inclusa per cinque anni.",
          "nl": "IntelliTAG-sensoren detecteren trillingen vóór het openen, met 110 dB-sirene en vijf jaar gsm-back-up inbegrepen.",
          "pl": "Czujniki IntelliTAG wykrywają drgania jeszcze przed otwarciem; do tego syrena 110 dB i zapasowa łączność GSM bez opłat przez pięć lat.",
          "sv": "IntelliTAG-sensorerna känner av vibrationer redan innan dörren eller fönstret öppnas, med en siren på 110 dB och GSM-reserv som ingår i fem år.",
          "us": "IntelliTAG sensors pick up vibrations before a door or window even opens, with a 110 dB siren and five years of cellular (GSM) backup included.",
          "ca": "IntelliTAG sensors detect vibrations before a door or window opens, with a 110 dB siren and GSM backup included for five years."
        }
      },
      {
        "model": "Ring Alarm Pack M (Gen 2)",
        "role": {
          "fr": "Meilleur rapport qualité-prix pour Alexa",
          "en": "Best value for Alexa homes",
          "de": "Preis-Leistungs-Tipp für Alexa",
          "es": "Mejor calidad-precio para Alexa",
          "it": "Miglior rapporto qualità-prezzo per Alexa",
          "nl": "Beste prijs-kwaliteit voor Alexa",
          "pl": "Najlepszy stosunek jakości do ceny dla użytkowników Alexy",
          "sv": "Mest prisvärd för Alexa-användare",
          "us": "Best value for Alexa users",
          "ca": "Best value for Alexa homes"
        },
        "why": {
          "fr": "Entrée de gamme simple : sirène 104 dB intégrée, batterie 24 h, intégration Alexa. Secours cellulaire avec Ring Protect.",
          "en": "Simple entry-level kit: built-in 104 dB siren, 24 h battery, Alexa integration. Cellular backup needs Ring Protect.",
          "de": "Einfacher Einstieg: eingebaute 104-dB-Sirene, 24-h-Akku, Alexa-Einbindung. Mobilfunk-Backup nur mit Ring Protect.",
          "es": "Modelo básico y sencillo: sirena de 104 dB integrada, batería de 24 h e integración con Alexa. Respaldo por red móvil con Ring Protect.",
          "it": "Modello base semplice: sirena da 104 dB integrata, batteria da 24 ore, integrazione con Alexa. Backup su rete cellulare con Ring Protect.",
          "nl": "Eenvoudige instapper: ingebouwde 104 dB-sirene, 24 u accu, Alexa-integratie. Mobiele back-up vereist Ring Protect.",
          "pl": "Prosty zestaw z niższej półki: wbudowana syrena 104 dB, akumulator na 24 h, integracja z Alexą. Zapasowa łączność komórkowa w ramach Ring Protect.",
          "sv": "Enkelt instegskit: inbyggd siren på 104 dB, batteri för 24 timmar och integration med Alexa. Reservuppkoppling via mobilnätet kräver Ring Protect.",
          "us": "A simple entry-level kit: built-in 104 dB siren, 24-hour backup battery and Alexa integration. Cellular backup requires a Ring Protect plan.",
          "ca": "Simple entry-level kit: built-in 104 dB siren, 24 h battery, Alexa integration. Cellular backup needs Ring Protect."
        }
      }
    ]
  },
  "arrosage-connecte-intelligent": {
    "question": {
      "fr": "Quel est le meilleur système d'arrosage connecté en 2026 ?",
      "en": "What is the best smart watering system in 2026?",
      "de": "Welches ist das beste smarte Bewässerungssystem 2026?",
      "es": "¿Cuál es el mejor sistema de riego inteligente en 2026?",
      "it": "Qual è il miglior sistema di irrigazione smart nel 2026?",
      "nl": "Wat is het beste slimme besproeiingssysteem in 2026?",
      "pl": "Jaki jest najlepszy inteligentny system nawadniania w 2026 roku?",
      "sv": "Vilket smart bevattningssystem är bäst 2026?",
      "us": "What is the best smart irrigation system in 2026?",
      "ca": "What is the best smart irrigation system in 2026?"
    },
    "picks": [
      {
        "model": "GARDENA smart Water Control Set",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Se visse sur le robinet, adapte l'arrosage à la pluie annoncée et accepte un capteur d'humidité du sol ; compatible Apple Home, Alexa et Google via sa passerelle.",
          "en": "Screws onto the tap, adapts watering to forecast rain and accepts a soil moisture sensor; works with Apple Home, Alexa and Google through its gateway.",
          "de": "Wird auf den Hahn geschraubt, passt die Bewässerung an Regen an und nimmt einen Bodenfeuchtesensor auf; per Gateway mit Apple Home, Alexa und Google kompatibel.",
          "es": "Se enrosca en el grifo, adapta el riego a la lluvia prevista y admite un sensor de humedad del suelo; compatible con Apple Home, Alexa y Google a través de su pasarela.",
          "it": "Si avvita al rubinetto, adatta l'irrigazione alla pioggia prevista e accetta un sensore di umidità del terreno; compatibile con Apple Casa, Alexa e Google tramite il suo gateway.",
          "nl": "Schroef je op de kraan, past het sproeien aan voorspelde regen aan en werkt met een bodemvochtsensor; via de gateway compatibel met Apple Home, Alexa en Google.",
          "pl": "Nakręcany na kran, dostosowuje podlewanie do prognozowanych opadów i współpracuje z czujnikiem wilgotności gleby; przez własną bramkę łączy się z Apple Home, Alexą i Google.",
          "sv": "Skruvas fast på kranen, anpassar bevattningen efter regnprognosen och kan kompletteras med en jordfuktighetssensor; fungerar med Apple Home, Alexa och Google via sin gateway.",
          "us": "Screws onto your outdoor faucet, adjusts watering to the rain forecast and accepts a soil moisture sensor; works with Apple Home, Alexa and Google through its gateway.",
          "ca": "Screws onto the outdoor faucet, adapts watering to forecast rain and accepts a soil moisture sensor; works with Apple Home, Alexa and Google through its gateway."
        }
      },
      {
        "model": "Eve Aqua",
        "role": {
          "fr": "Meilleur rapport qualité-prix, sans passerelle",
          "en": "Best value, no gateway",
          "de": "Bestes Preis-Leistungs-Verhältnis, ohne Gateway",
          "es": "Mejor relación calidad-precio, sin pasarela",
          "it": "Miglior rapporto qualità-prezzo, senza gateway",
          "nl": "Beste prijs-kwaliteit, zonder gateway",
          "pl": "Najlepszy stosunek jakości do ceny, bez bramki",
          "sv": "Mest prisvärd, utan gateway",
          "us": "Best value, no gateway",
          "ca": "Best value, no gateway"
        },
        "why": {
          "fr": "Programmateur de robinet Thread et Matter qui fonctionne en local, sans passerelle ni cloud obligatoire, avec Apple Home, Google Home ou Alexa.",
          "en": "A Thread and Matter tap timer that runs locally, with no gateway or compulsory cloud, and works with Apple Home, Google Home or Alexa.",
          "de": "Thread- und Matter-Hahnsteuerung, die lokal arbeitet, ohne Gateway oder Cloud-Pflicht, mit Apple Home, Google Home oder Alexa.",
          "es": "Programador de grifo Thread y Matter que funciona en local, sin pasarela ni nube obligatoria, con Apple Home, Google Home o Alexa.",
          "it": "Programmatore da rubinetto Thread e Matter che funziona in locale, senza gateway né cloud obbligatorio, con Apple Casa, Google Home o Alexa.",
          "nl": "Thread- en Matter-kraancomputer die lokaal werkt, zonder gateway of verplichte cloud, met Apple Home, Google Home of Alexa.",
          "pl": "Sterownik nawadniania na kran z Thread i Matter, działający lokalnie, bez bramki i bez obowiązkowej chmury; współpracuje z Apple Home, Google Home lub Alexą.",
          "sv": "Bevattningstimer för kranen med Thread och Matter som körs lokalt, utan gateway eller obligatorisk molntjänst, och fungerar med Apple Home, Google Home eller Alexa.",
          "us": "A Thread and Matter smart hose timer that runs locally, with no gateway or required cloud account, in Apple Home, Google Home or Alexa.",
          "ca": "A Thread and Matter hose timer that runs locally, with no gateway or mandatory cloud, in Apple Home, Google Home or Alexa."
        }
      },
      {
        "model": "GARDENA smart Irrigation Control",
        "role": {
          "fr": "Idéal pour un arrosage enterré",
          "en": "Best for in-ground systems",
          "de": "Ideal für unterirdische Anlagen",
          "es": "Ideal para riego enterrado",
          "it": "Ideale per impianti interrati",
          "nl": "Ideaal voor ingegraven systemen",
          "pl": "Najlepszy do instalacji nawadniania w gruncie",
          "sv": "Bäst för nedgrävda system",
          "us": "Best for in-ground sprinkler systems",
          "ca": "Best for in-ground sprinkler systems"
        },
        "why": {
          "fr": "Pilote jusqu'à six électrovannes 24 V de la plupart des marques et rend connectée une installation enterrée existante.",
          "en": "Drives up to six 24 V solenoid valves from most brands and makes an existing in-ground system smart.",
          "de": "Steuert bis zu sechs 24-V-Magnetventile der meisten Marken und macht eine bestehende Erdanlage smart.",
          "es": "Controla hasta seis electroválvulas de 24 V de la mayoría de marcas y convierte en inteligente la instalación de riego enterrada que ya tienes.",
          "it": "Comanda fino a sei elettrovalvole da 24 V della maggior parte delle marche e rende smart un impianto interrato esistente.",
          "nl": "Stuurt tot zes 24V-magneetventielen van de meeste merken aan en maakt een bestaand ingegraven systeem slim.",
          "pl": "Steruje maksymalnie sześcioma elektrozaworami 24 V większości marek i zamienia istniejącą instalację w gruncie w inteligentną.",
          "sv": "Styr upp till sex magnetventiler på 24 V från de flesta märken och gör ett befintligt nedgrävt bevattningssystem smart.",
          "us": "Controls up to six 24 V solenoid valves from most brands and brings an existing in-ground sprinkler system online.",
          "ca": "Drives up to six 24 V solenoid valves from most brands and brings an existing in-ground sprinkler system online."
        }
      }
    ]
  },
  "balance-cuisine-connectee-comparatif": {
    "question": {
      "fr": "Quelle est la meilleure balance de cuisine connectée en 2026 ?",
      "en": "What are the best smart kitchen scales in 2026?",
      "de": "Welche ist die beste smarte Küchenwaage 2026?",
      "es": "¿Cuál es la mejor báscula de cocina inteligente en 2026?",
      "it": "Qual è la migliore bilancia da cucina smart nel 2026?",
      "nl": "Wat is de beste slimme keukenweegschaal in 2026?",
      "pl": "Jaka jest najlepsza inteligentna waga kuchenna w 2026 roku?",
      "sv": "Vilken smart köksvåg är bäst 2026?",
      "us": "What is the best smart kitchen scale in 2026?",
      "ca": "What is the best smart kitchen scale in 2026?"
    },
    "picks": [
      {
        "model": "Etekcity Smart Nutrition Scale",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "5 kg au gramme près, plateau inox et application VeSync qui suit jusqu’à 19 nutriments, avec rapports et synchronisation Apple Santé.",
          "en": "5 kg in 1 g steps, a stainless steel platform and a VeSync app tracking up to 19 nutrients, with reports and Apple Health sync.",
          "de": "5 kg grammgenau, Edelstahlfläche und VeSync-App mit bis zu 19 Nährstoffen, Berichten und Apple-Health-Synchronisation.",
          "es": "Pesa hasta 5 kg con precisión de un gramo, plataforma de acero inoxidable y app VeSync que registra hasta 19 nutrientes, con informes y sincronización con Apple Salud.",
          "it": "5 kg con precisione al grammo, piatto in acciaio inox e app VeSync che monitora fino a 19 nutrienti, con report e sincronizzazione con Apple Salute.",
          "nl": "5 kg op de gram, rvs-plateau en een VeSync-app die tot 19 voedingsstoffen bijhoudt, met overzichten en Apple Gezondheid-synchronisatie.",
          "pl": "5 kg z dokładnością do grama, platforma ze stali nierdzewnej i aplikacja VeSync śledząca do 19 składników odżywczych, z raportami i synchronizacją z Apple Zdrowie.",
          "sv": "Väger upp till 5 kg på grammet när, har vågplatta i rostfritt stål och appen VeSync som följer upp till 19 näringsämnen, med rapporter och synk med Apple Health.",
          "us": "Weighs up to 11 lb (5 kg) to the gram, with a stainless steel platform and a VeSync app that tracks up to 19 nutrients, with reports and Apple Health sync.",
          "ca": "5 kg in 1 g steps, a stainless steel platform and a VeSync app tracking up to 19 nutrients, with reports and Apple Health sync."
        }
      },
      {
        "model": "Renpho Balance Cuisine Connectée",
        "role": {
          "fr": "Meilleur petit budget",
          "en": "Best budget pick",
          "de": "Beste günstige Wahl",
          "es": "Mejor opción económica",
          "it": "La migliore a basso costo",
          "nl": "Beste budgetkeuze",
          "pl": "Najlepsza na niewielki budżet",
          "sv": "Bästa budgetvalet",
          "us": "Best budget pick",
          "ca": "Best budget pick"
        },
        "why": {
          "fr": "Balance alimentaire Bluetooth d’entrée de gamme, avec scan de code-barres et l’application Renpho Health partagée avec les pèse-personnes de la marque.",
          "en": "Entry-level Bluetooth food scales with barcode scanning and the Renpho Health app, which also works with the brand’s bathroom scales.",
          "de": "Günstige Bluetooth-Lebensmittelwaage mit Barcode-Scan und der Renpho-Health-App, die auch die Personenwaagen der Marke nutzen.",
          "es": "Báscula de alimentos Bluetooth de gama de entrada, con escáner de códigos de barras y la app Renpho Health, la misma de las básculas de baño de la marca.",
          "it": "Bilancia nutrizionale Bluetooth di fascia d’ingresso, con scansione dei codici a barre e la stessa app Renpho Health delle bilance pesapersone del marchio.",
          "nl": "Betaalbare Bluetooth-voedingsweegschaal met barcodescanner en de Renpho Health-app die ook de personenweegschalen van het merk gebruiken.",
          "pl": "Podstawowa waga kuchenna Bluetooth ze skanowaniem kodów kreskowych i aplikacją Renpho Health wspólną z wagami łazienkowymi tej marki.",
          "sv": "Köksvåg med Bluetooth i instegsklassen som kan skanna streckkoder och använder appen Renpho Health, samma som märkets personvågar.",
          "us": "An entry-level Bluetooth food scale with barcode scanning and the Renpho Health app, the same one the brand's bathroom scales use.",
          "ca": "An entry-level Bluetooth food scale with barcode scanning and the Renpho Health app shared with the brand’s body scales."
        }
      },
      {
        "model": "Beurer KS 34 XL Balance Diététique",
        "role": {
          "fr": "Grande capacité sans application",
          "en": "High capacity, no app",
          "de": "Hohe Tragkraft ohne App",
          "es": "Gran capacidad sin app",
          "it": "Grande portata senza app",
          "nl": "Groot draagvermogen zonder app",
          "pl": "Duży zakres ważenia, bez aplikacji",
          "sv": "Stor kapacitet, ingen app",
          "us": "High capacity, no app",
          "ca": "High capacity, no app"
        },
        "why": {
          "fr": "Jusqu’à 15 kg au gramme près sur un grand plateau en verre, avec fonction hold : idéale pour les grandes préparations, sans application.",
          "en": "Up to 15 kg in 1 g steps on a large glass platform with a hold function: ideal for big batches, with no app.",
          "de": "Bis 15 kg grammgenau auf großer Glasfläche mit Hold-Funktion: ideal für große Mengen, ganz ohne App.",
          "es": "Hasta 15 kg con precisión de un gramo sobre una amplia plataforma de vidrio, con función hold: ideal para grandes cantidades, sin app.",
          "it": "Fino a 15 kg con precisione al grammo su un ampio piatto in vetro, con funzione hold: ideale per le preparazioni abbondanti, senza app.",
          "nl": "Tot 15 kg op de gram op een groot glazen plateau met hold-functie: ideaal voor grote bereidingen, zonder app.",
          "pl": "Do 15 kg z dokładnością do grama na dużej szklanej platformie, z funkcją hold: idealna, gdy przygotowujesz duże ilości jedzenia, bez aplikacji.",
          "sv": "Upp till 15 kg på grammet när, på en stor vågplatta av glas, med hold-funktion: perfekt för stora satser, och ingen app behövs.",
          "us": "Up to 33 lb (15 kg) to the gram on a large glass platform, with a hold function: ideal for big-batch cooking, no app required.",
          "ca": "Up to 15 kg in 1 g steps on a large glass platform with a hold function: ideal for big batches, no app involved."
        }
      }
    ]
  },
  "balkonkraftwerk-panneau-solaire-balcon": {
    "question": {
      "fr": "Quel est le meilleur kit solaire de balcon en 2026 ?",
      "en": "What is the best plug-in solar kit in 2026?",
      "de": "Welches ist das beste Balkonkraftwerk 2026?",
      "es": "¿Cuál es el mejor kit solar de balcón en 2026?",
      "it": "Qual è il miglior kit fotovoltaico da balcone nel 2026?",
      "nl": "Wat is de beste balkonzonnepaneelset in 2026?",
      "pl": "Jaka jest najlepsza elektrownia balkonowa w 2026 roku?",
      "sv": "Vilket solcellskit för balkongen är bäst 2026?",
      "us": "What is the best balcony solar kit in 2026?",
      "ca": "What is the best balcony solar kit in 2026?"
    },
    "picks": [
      {
        "model": "Hoymiles HMS-800W-2T",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Micro-onduleur 800 VA à deux entrées MPPT et Wi-Fi intégré, au cœur de nombreux kits : la solution la plus simple pour un foyer présent en journée.",
          "en": "An 800 VA micro-inverter with two MPPT inputs and built-in Wi-Fi, at the heart of many kits: the simplest option for households who are home during the day.",
          "de": "800-VA-Mikrowechselrichter mit zwei MPPT-Eingängen und integriertem WLAN, Basis vieler Sets: die einfachste Lösung für Haushalte, die tagsüber zu Hause sind.",
          "es": "Microinversor de 800 VA con dos entradas MPPT y wifi integrado, base de muchos kits: la opción más sencilla para hogares con gente en casa de día.",
          "it": "Microinverter da 800 VA con due ingressi MPPT e Wi-Fi integrato, alla base di molti kit: la soluzione più semplice per chi è in casa di giorno.",
          "nl": "Micro-omvormer van 800 VA met twee MPPT-ingangen en ingebouwde wifi, basis van veel sets: de eenvoudigste keuze als je overdag thuis bent.",
          "pl": "Mikrofalownik 800 VA z dwoma wejściami MPPT i wbudowanym Wi-Fi, montowany w wielu zestawach – najprostsze rozwiązanie, jeśli ktoś jest w domu w ciągu dnia.",
          "sv": "Mikroväxelriktare på 800 VA med två MPPT-ingångar och inbyggt wifi, som sitter i många kit: det enklaste valet för hushåll som är hemma på dagen.",
          "us": "An 800 VA microinverter with two MPPT inputs and built-in Wi-Fi, found at the heart of many kits: the simplest option if someone is home during the day.",
          "ca": "An 800 VA micro-inverter with two MPPT inputs and built-in Wi-Fi at the heart of many kits: the simplest option for households at home by day."
        }
      },
      {
        "model": "Anker SOLIX Solarbank 3 E2700 Pro",
        "role": {
          "fr": "Meilleur avec batterie",
          "en": "Best with battery",
          "de": "Bester mit Speicher",
          "es": "Mejor con batería",
          "it": "Il migliore con batteria",
          "nl": "Beste met batterij",
          "pl": "Najlepszy z magazynem energii",
          "sv": "Bäst med batteri",
          "us": "Best with a battery",
          "ca": "Best with battery"
        },
        "why": {
          "fr": "2,688 kWh extensibles, quatre entrées MPPT et 800 W restitués sur prise : idéal si vous consommez surtout le soir.",
          "en": "2.688 kWh of expandable storage, four MPPT inputs and 800 W fed out through a socket: ideal if you use most of your power in the evening.",
          "de": "2,688 kWh erweiterbarer Speicher, vier MPPT-Eingänge und 800 W über die Steckdose: ideal, wenn Sie vor allem abends Strom verbrauchen.",
          "es": "2,688 kWh ampliables, cuatro entradas MPPT y 800 W a través de un enchufe: ideal si consumes sobre todo por la noche.",
          "it": "2,688 kWh espandibili, quattro ingressi MPPT e 800 W restituiti tramite la presa: ideale se consumi soprattutto la sera.",
          "nl": "2,688 kWh uitbreidbare opslag, vier MPPT-ingangen en 800 W via een stopcontact: ideaal als je vooral 's avonds stroom gebruikt.",
          "pl": "2,688 kWh z możliwością rozbudowy, cztery wejścia MPPT i 800 W oddawane do sieci przez gniazdko – idealny, jeśli zużywasz energię głównie wieczorem.",
          "sv": "Lagring på 2,688 kWh som kan byggas ut, fyra MPPT-ingångar och 800 W ut via ett uttag: perfekt om du använder mest el på kvällen.",
          "us": "2.688 kWh of expandable storage, four MPPT inputs and 800 W of output through a plug: ideal if you use most of your power in the evening.",
          "ca": "2.688 kWh expandable storage, four MPPT inputs and 800 W output through an outlet: ideal if you use most of your power in the evening."
        }
      },
      {
        "model": "EcoFlow STREAM Ultra",
        "role": {
          "fr": "Meilleur pour petit balcon",
          "en": "Best for small balconies",
          "de": "Bester für kleine Balkone",
          "es": "Mejor para balcones pequeños",
          "it": "Il migliore per i balconi piccoli",
          "nl": "Beste voor kleine balkons",
          "pl": "Najlepszy na mały balkon",
          "sv": "Bäst för små balkonger",
          "us": "Best for small balconies",
          "ca": "Best for small balconies"
        },
        "why": {
          "fr": "Tout-en-un compact IP65 avec batterie LiFePO4 de 1,92 kWh, quatre entrées MPPT et 800 W sur le réseau domestique.",
          "en": "A compact IP65 all-in-one with a 1.92 kWh LiFePO4 battery, four MPPT inputs and 800 W fed into your home’s wiring.",
          "de": "Kompakter IP65-Alleskönner mit 1,92-kWh-LiFePO4-Akku, vier MPPT-Eingängen und 800 W Einspeisung ins Hausnetz.",
          "es": "Todo en uno compacto IP65 con batería LiFePO4 de 1,92 kWh, cuatro entradas MPPT y 800 W a la red doméstica.",
          "it": "Sistema tutto in uno compatto IP65 con batteria LiFePO4 da 1,92 kWh, quattro ingressi MPPT e 800 W immessi nell'impianto di casa.",
          "nl": "Compacte IP65-alles-in-één met LiFePO4-batterij van 1,92 kWh, vier MPPT-ingangen en 800 W in het huisnet.",
          "pl": "Kompaktowe urządzenie „wszystko w jednym” IP65 z akumulatorem LiFePO4 1,92 kWh, czterema wejściami MPPT i mocą 800 W oddawaną do domowej instalacji.",
          "sv": "Kompakt allt-i-ett-enhet med IP65 och LiFePO4-batteri på 1,92 kWh, fyra MPPT-ingångar och 800 W ut i hemmets elnät.",
          "us": "A compact IP65 all-in-one with a 1.92 kWh LiFePO4 battery, four MPPT inputs and 800 W fed into your home's wiring.",
          "ca": "A compact IP65 all-in-one with a 1.92 kWh LiFePO4 battery, four MPPT inputs and 800 W into the home grid."
        }
      }
    ]
  },
  "barbecue-connecte-thermometre-guide": {
    "question": {
      "fr": "Quel est le meilleur thermomètre à viande connecté en 2026 ?",
      "en": "What is the best smart meat thermometer in 2026?",
      "de": "Welches ist das beste smarte Grillthermometer 2026?",
      "es": "¿Cuál es el mejor termómetro para carne con app en 2026?",
      "it": "Qual è il miglior termometro per carne smart nel 2026?",
      "nl": "Wat is de beste slimme vleesthermometer in 2026?",
      "pl": "Jaki jest najlepszy inteligentny termometr do mięsa w 2026 roku?",
      "sv": "Vilken smart stektermometer är bäst 2026?",
      "us": "What is the best smart meat thermometer in 2026?",
      "ca": "What is the best smart meat thermometer in 2026?"
    },
    "picks": [
      {
        "model": "MEATER Pro Thermomètre Sans Fil Longue Portée",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Sonde 100 % sans fil, étanche et lavable au lave-vaisselle, qui mesure cœur et température ambiante et supporte la saisie à feu vif.",
          "en": "Fully wireless, waterproof, dishwasher-safe probe that reads core and ambient temperature and can handle searing over a hot fire.",
          "de": "Komplett kabelloser, wasserdichter und spülmaschinenfester Fühler, misst Kern- und Umgebungstemperatur und verträgt scharfes Angrillen.",
          "es": "Sonda totalmente inalámbrica, resistente al agua y apta para lavavajillas, que mide la temperatura interior y la ambiente y aguanta el sellado a fuego vivo.",
          "it": "Sonda completamente wireless, impermeabile e lavabile in lavastoviglie: misura la temperatura al cuore e quella ambiente e resiste alla rosolatura a fiamma viva.",
          "nl": "Volledig draadloze, waterdichte en vaatwasserbestendige sonde die kern- en omgevingstemperatuur meet en dichtschroeien aankan.",
          "pl": "W pełni bezprzewodowa, wodoszczelna sonda, którą można myć w zmywarce; mierzy temperaturę wewnątrz mięsa i otoczenia, a do tego wytrzymuje obsmażanie na dużym ogniu.",
          "sv": "Helt trådlös och vattentät givare som tål diskmaskin, mäter både kärn- och omgivningstemperatur och klarar grillning över het glöd.",
          "us": "A fully wireless, waterproof, dishwasher-safe probe that reads internal and ambient temperatures and can handle searing over high heat.",
          "ca": "Fully wireless, waterproof, dishwasher-safe probe that reads core and ambient temperature and can handle searing over a hot fire."
        }
      },
      {
        "model": "MEATER Plus Thermomètre Sans Fil Bluetooth 50m",
        "role": {
          "fr": "Meilleur rapport qualité-prix sans fil",
          "en": "Best-value wireless",
          "de": "Bestes Preis-Leistungs-Verhältnis kabellos",
          "es": "Mejor calidad-precio inalámbrico",
          "it": "Miglior rapporto qualità-prezzo wireless",
          "nl": "Beste prijs-kwaliteit draadloos",
          "pl": "Najlepszy stosunek jakości do ceny wśród bezprzewodowych",
          "sv": "Mest prisvärd av de trådlösa",
          "us": "Best value wireless probe",
          "ca": "Best-value wireless"
        },
        "why": {
          "fr": "Même application que le Pro, relais Bluetooth intégré au bloc de recharge pour 50 m annoncés : idéal pour débuter, couvercle fermé.",
          "en": "Same app as the Pro, with a Bluetooth repeater built into the charging block for a claimed 50 m range: a great first wireless probe for closed-lid cooking.",
          "de": "Dieselbe App wie der Pro, Bluetooth-Verstärker im Ladeblock für angegebene 50 m: idealer Einstieg für Grillen mit geschlossenem Deckel.",
          "es": "Misma app que el Pro y repetidor Bluetooth en la base de carga para 50 m anunciados: ideal para empezar, incluso con la tapa cerrada.",
          "it": "Stessa app del Pro, ripetitore Bluetooth nella base di ricarica per 50 m dichiarati: ideale per iniziare, anche a coperchio chiuso.",
          "nl": "Dezelfde app als de Pro, met Bluetooth-repeater in het laadblok voor opgegeven 50 m: ideale instap voor koken met gesloten deksel.",
          "pl": "Ta sama aplikacja co w modelu Pro i wzmacniacz Bluetooth wbudowany w etui ładujące, z deklarowanym zasięgiem do 50 m – idealny na początek, także przy zamkniętej pokrywie grilla.",
          "sv": "Samma app som Pro och en Bluetooth-förstärkare inbyggd i laddningsdockan, med en angiven räckvidd på 50 m: ett bra förstaval när du grillar med locket stängt.",
          "us": "Same app as the Pro, with a Bluetooth repeater built into the charger for a rated range of 165 ft (50 m): a great first wireless probe for lid-down cooking.",
          "ca": "Same app as the Pro, with a Bluetooth repeater built into the charging block for a stated 50 m: a great first wireless probe for closed-lid cooking."
        }
      },
      {
        "model": "Inkbird IBT-4XS Thermomètre Bluetooth 4 Sondes",
        "role": {
          "fr": "Meilleur multi-sondes pour le fumage",
          "en": "Best multi-probe for smoking",
          "de": "Beste Mehrfühler-Lösung zum Smoken",
          "es": "Mejor multisonda para ahumar",
          "it": "Miglior multisonda per affumicare",
          "nl": "Beste meersondemodel om te roken",
          "pl": "Najlepszy z wieloma sondami do wędzenia",
          "sv": "Bäst med flera givare för rökning",
          "us": "Best multi-probe for smoking",
          "ca": "Best multi-probe for smoking"
        },
        "why": {
          "fr": "Quatre prises de sonde, écran et dos aimanté : suivez plusieurs pièces et la température du fumoir pour un budget réduit.",
          "en": "Four probe sockets, a display and a magnetic back: track several cuts and the smoker temperature on a small budget.",
          "de": "Vier Fühleranschlüsse, Display und Magnetrückseite: mehrere Stücke und die Smoker-Temperatur mit kleinem Budget überwachen.",
          "es": "Cuatro tomas de sonda, pantalla y trasera imantada: controla varias piezas y la temperatura del ahumador con poco presupuesto.",
          "it": "Quattro prese per sonde, display e retro magnetico: segui più pezzi e la temperatura dell’affumicatore spendendo poco.",
          "nl": "Vier sondeaansluitingen, display en magnetische achterkant: volg meerdere stukken en de smokertemperatuur voor een klein budget.",
          "pl": "Cztery gniazda na sondy, wyświetlacz i magnetyczna tylna ścianka: kontrolujesz kilka kawałków mięsa i temperaturę w wędzarni, nie wydając dużo.",
          "sv": "Fyra uttag för givare, display och magnetisk baksida: håll koll på flera köttbitar och på temperaturen i rökgrillen till en låg kostnad.",
          "us": "Four probe jacks, a display and a magnetic back: track several cuts and your smoker's temperature on a small budget.",
          "ca": "Four probe ports, a display and a magnetic back: track several cuts and the smoker temperature on a small budget."
        }
      }
    ]
  },
  "cafetiere-connectee-guide": {
    "question": {
      "fr": "Quelle cafetière à grain choisir en 2026, connectée ou non ?",
      "en": "Which bean-to-cup coffee machine should you choose in 2026, smart or not?",
      "de": "Welchen Kaffeevollautomaten sollte man 2026 wählen, smart oder nicht?",
      "es": "¿Qué cafetera superautomática elegir en 2026: con app o sin ella?",
      "it": "Quale macchina da caffè superautomatica scegliere nel 2026, smart o no?",
      "nl": "Welke volautomatische koffiemachine kies je in 2026, slim of niet?",
      "pl": "Jaki ekspres automatyczny do kawy ziarnistej wybrać w 2026 roku: z aplikacją czy bez?",
      "sv": "Vilken helautomatisk kaffemaskin ska du välja 2026, smart eller inte?",
      "us": "Which super-automatic espresso machine should you buy in 2026: smart or not?",
      "ca": "Which super-automatic espresso machine should you choose in 2026, smart or not?"
    },
    "picks": [
      {
        "model": "De'Longhi Magnifica Evo ECAM290.51.B",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste allround keuze",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Broyeur à 13 réglages, carafe LatteCrema Hot et 7 recettes directes : très simple au quotidien, mais sans application.",
          "en": "A 13-setting grinder, LatteCrema Hot carafe and 7 one-touch drinks: very easy to use every day, but there’s no app.",
          "de": "Mahlwerk mit 13 Stufen, LatteCrema-Hot-Karaffe und 7 Direktwahl-Rezepte: im Alltag sehr einfach, allerdings ohne App.",
          "es": "Molinillo de 13 ajustes, jarra LatteCrema Hot y 7 recetas con un solo toque: muy sencilla en el día a día, aunque sin app.",
          "it": "Macinacaffè a 13 livelli, caraffa LatteCrema Hot e 7 ricette a un tocco: semplicissima da usare ogni giorno, ma senza app.",
          "nl": "Molen met 13 standen, LatteCrema Hot-karaf en 7 directe recepten: heel eenvoudig in gebruik, maar zonder app.",
          "pl": "Młynek z 13-stopniową regulacją, dzbanek LatteCrema Hot i 7 napojów przygotowywanych jednym dotknięciem – bardzo prosty w codziennej obsłudze, ale bez aplikacji.",
          "sv": "Kvarn med 13 inställningar, mjölkkaraffen LatteCrema Hot och 7 drycker med en knapptryckning: mycket enkel i vardagen, men utan app.",
          "us": "13-setting grinder, LatteCrema Hot carafe and 7 one-touch recipes: very easy day to day, though it has no app.",
          "ca": "13-setting grinder, LatteCrema Hot carafe and 7 one-touch recipes: very easy day to day, though it has no app."
        }
      },
      {
        "model": "Philips 5500 LatteGo Series EP5541/50",
        "role": {
          "fr": "Entretien le plus simple",
          "en": "Easiest to maintain",
          "de": "Am pflegeleichtesten",
          "es": "La más fácil de mantener",
          "it": "La più facile da pulire",
          "nl": "Makkelijkst te onderhouden",
          "pl": "Najłatwiejszy w czyszczeniu",
          "sv": "Enklast att sköta",
          "us": "Easiest to maintain",
          "ca": "Easiest to maintain"
        },
        "why": {
          "fr": "Système lait LatteGo en deux pièces sans tube, 20 boissons chaudes et glacées et 4 profils utilisateurs sur l'écran.",
          "en": "Two-piece, tube-free LatteGo milk system, 20 hot and iced drinks and 4 user profiles on the display.",
          "de": "Zweiteiliges LatteGo-Milchsystem ohne Schläuche, 20 heiße und eisgekühlte Getränke und 4 Benutzerprofile am Display.",
          "es": "Sistema de leche LatteGo de dos piezas sin tubos, 20 bebidas calientes y con hielo, y 4 perfiles de usuario en pantalla.",
          "it": "Sistema latte LatteGo in due pezzi senza tubi, 20 bevande calde e fredde e 4 profili utente sul display.",
          "nl": "Tweedelig LatteGo-melksysteem zonder slangetjes, 20 warme en ijskoude dranken en 4 gebruikersprofielen op het display.",
          "pl": "Dwuczęściowy system do mleka LatteGo bez rurek, 20 napojów gorących i mrożonych oraz 4 profile użytkowników na ekranie.",
          "sv": "Mjölksystemet LatteGo i två delar utan slangar, 20 varma och iskalla drycker och 4 användarprofiler på displayen.",
          "us": "Two-piece, tube-free LatteGo milk system, 20 hot and iced drinks and 4 user profiles on the display.",
          "ca": "Two-piece, tube-free LatteGo milk system, 20 hot and iced drinks and 4 user profiles on the display."
        }
      },
      {
        "model": "Krups Evidence One EA895N10",
        "role": {
          "fr": "Idéale pour les familles",
          "en": "Best for families",
          "de": "Ideal für Familien",
          "es": "Ideal para familias",
          "it": "Ideale per le famiglie",
          "nl": "Ideaal voor gezinnen",
          "pl": "Najlepszy dla rodzin",
          "sv": "Bäst för familjer",
          "us": "Best for families",
          "ca": "Best for families"
        },
        "why": {
          "fr": "Réservoir de 2,3 litres, 12 boissons dont l'eau chaude pour le thé et boissons lactées en double tasse.",
          "en": "2.3-litre tank, 12 drinks including hot water for tea, and milk drinks two cups at a time.",
          "de": "2,3-Liter-Tank, 12 Getränke inklusive Heißwasser für Tee und Milchgetränke für zwei Tassen gleichzeitig.",
          "es": "Depósito de 2,3 litros y 12 bebidas, entre ellas agua caliente para el té y bebidas con leche para dos tazas a la vez.",
          "it": "Serbatoio da 2,3 litri, 12 bevande, compresa l'acqua calda per il tè, e bevande al latte in due tazze alla volta.",
          "nl": "Reservoir van 2,3 liter, 12 dranken inclusief heet water voor thee en melkdranken voor twee kopjes tegelijk.",
          "pl": "Zbiornik 2,3 l, 12 napojów, w tym gorąca woda do herbaty, i napoje mleczne przygotowywane od razu w dwóch filiżankach.",
          "sv": "Vattentank på 2,3 liter, 12 drycker inklusive hett vatten till te, och mjölkdrycker två koppar åt gången.",
          "us": "A 78 fl oz (2.3 L) water tank, 12 drinks including hot water for tea, and milk drinks two cups at a time.",
          "ca": "2.3-litre tank, 12 drinks including hot water for tea, and milk drinks two cups at a time."
        }
      }
    ]
  },
  "capteur-sol-humidite-jardin": {
    "question": {
      "fr": "Quel est le meilleur capteur d'humidité du sol connecté en 2026 ?",
      "en": "What is the best smart soil moisture sensor in 2026?",
      "de": "Welcher ist der beste vernetzte Bodenfeuchtesensor 2026?",
      "es": "¿Cuál es el mejor sensor de humedad del suelo conectado en 2026?",
      "it": "Qual è il miglior sensore di umidità del terreno smart nel 2026?",
      "nl": "Wat is de beste slimme bodemvochtsensor in 2026?",
      "pl": "Jaki jest najlepszy inteligentny czujnik wilgotności gleby w 2026 roku?",
      "sv": "Vilken smart jordfuktighetssensor är bäst 2026?",
      "us": "What is the best smart soil moisture sensor in 2026?",
      "ca": "What is the best smart soil moisture sensor in 2026?"
    },
    "picks": [
      {
        "model": "Gardena smart Sensor",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Il mesure l'humidité au niveau des racines et suspend l'arrosage des programmateurs Gardena smart tant que la terre reste humide.",
          "en": "It measures moisture at root level and pauses Gardena smart water timers while the soil is still damp.",
          "de": "Er misst die Feuchte im Wurzelbereich und setzt Gardena-smart-Bewässerungscomputer aus, solange der Boden feucht ist.",
          "es": "Mide la humedad a la altura de las raíces y suspende el riego de los programadores Gardena smart mientras la tierra sigue húmeda.",
          "it": "Misura l'umidità all'altezza delle radici e sospende l'irrigazione dei programmatori Gardena smart finché la terra resta umida.",
          "nl": "Hij meet het vocht in de wortelzone en stelt Gardena smart-watertimers uit zolang de grond vochtig is.",
          "pl": "Mierzy wilgotność na wysokości korzeni i wstrzymuje podlewanie sterowane przez programatory Gardena smart, dopóki ziemia jest wilgotna.",
          "sv": "Mäter fukten i rotzonen och pausar bevattningstimrarna i Gardena smart-serien så länge jorden fortfarande är fuktig.",
          "us": "It measures moisture at root level and pauses Gardena smart water timers while the soil is still moist.",
          "ca": "It measures moisture at root level and holds back Gardena smart water timers while the soil is still damp."
        }
      },
      {
        "model": "Ecowitt WH51",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Capteur radio IP66 sur pile AA, jusqu'à 16 par passerelle Ecowitt et compatible Home Assistant pour suivre plusieurs zones.",
          "en": "An IP66 wireless sensor that runs on one AA battery: up to 16 per Ecowitt gateway, and Home Assistant compatible for monitoring several zones.",
          "de": "IP66-Funksensor mit AA-Batterie, bis zu 16 pro Ecowitt-Gateway und Home-Assistant-kompatibel für mehrere Zonen.",
          "es": "Sensor de radio IP66 con pila AA, hasta 16 por pasarela Ecowitt y compatible con Home Assistant para varias zonas.",
          "it": "Sensore radio IP66 a pila AA, fino a 16 sensori per gateway Ecowitt e compatibile con Home Assistant per controllare più zone.",
          "nl": "IP66-radiosensor op één AA-batterij, tot 16 per Ecowitt-gateway en compatibel met Home Assistant voor meerdere zones.",
          "pl": "Bezprzewodowy czujnik IP66 na baterię AA; do jednej bramki Ecowitt podłączysz do 16 sztuk, a zgodność z Home Assistant pozwala monitorować kilka stref.",
          "sv": "Radiosensor med IP66 som drivs av ett AA-batteri, upp till 16 per Ecowitt-gateway och kompatibel med Home Assistant för trädgårdar med flera zoner.",
          "us": "An IP66 wireless sensor that runs on one AA battery, with up to 16 per Ecowitt gateway and Home Assistant support for tracking several zones of your yard.",
          "ca": "An IP66 radio sensor on one AA battery, up to 16 per Ecowitt gateway and Home Assistant compatible for multi-zone gardens."
        }
      },
      {
        "model": "ThirdReality Smart Soil Moisture Sensor Gen2",
        "role": {
          "fr": "Idéal pour la domotique Zigbee",
          "en": "Best for Zigbee smart homes",
          "de": "Ideal für Zigbee-Smart-Homes",
          "es": "Ideal para domótica Zigbee",
          "it": "Ideale per la domotica Zigbee",
          "nl": "Ideaal voor Zigbee-smart-homes",
          "pl": "Idealny do systemów Zigbee",
          "sv": "Bäst för smarta hem med Zigbee",
          "us": "Best for Zigbee smart homes",
          "ca": "Best for Zigbee smart homes"
        },
        "why": {
          "fr": "Capteur capacitif Zigbee 3.0 (humidité et température) qui rejoint Home Assistant, Hubitat, SmartThings ou Homey sans application dédiée.",
          "en": "A capacitive Zigbee 3.0 sensor (moisture and temperature) that joins Home Assistant, Hubitat, SmartThings or Homey without a dedicated app.",
          "de": "Kapazitiver Zigbee-3.0-Sensor (Feuchte und Temperatur) für Home Assistant, Hubitat, SmartThings oder Homey ohne eigene App.",
          "es": "Sensor capacitivo Zigbee 3.0 (humedad y temperatura) que se une a Home Assistant, Hubitat, SmartThings u Homey sin app propia.",
          "it": "Sensore capacitivo Zigbee 3.0 (umidità e temperatura) che si collega a Home Assistant, Hubitat, SmartThings o Homey senza app dedicata.",
          "nl": "Capacitieve Zigbee 3.0-sensor (vocht en temperatuur) die werkt met Home Assistant, Hubitat, SmartThings of Homey zonder eigen app.",
          "pl": "Pojemnościowy czujnik Zigbee 3.0 (wilgotność i temperatura), który łączy się z Home Assistant, Hubitat, SmartThings lub Homey bez osobnej aplikacji producenta.",
          "sv": "Kapacitiv sensor med Zigbee 3.0 (fukt och temperatur) som ansluts till Home Assistant, Hubitat, SmartThings eller Homey utan någon egen app.",
          "us": "A capacitive Zigbee 3.0 sensor (moisture and temperature) that joins Home Assistant, Hubitat, SmartThings or Homey without a dedicated app.",
          "ca": "A capacitive Zigbee 3.0 sensor (moisture and temperature) that joins Home Assistant, Hubitat, SmartThings or Homey without a dedicated app."
        }
      }
    ]
  },
  "cave-vin-connectee-guide": {
    "question": {
      "fr": "Quelle est la meilleure cave à vin connectée en 2026 ?",
      "en": "What is the best smart wine fridge in 2026?",
      "de": "Welcher ist der beste smarte Weinklimaschrank 2026?",
      "es": "¿Cuál es la mejor vinoteca inteligente en 2026?",
      "it": "Qual è la migliore cantinetta per vino smart nel 2026?",
      "nl": "Wat is de beste slimme wijnkast in 2026?",
      "pl": "Jaka jest najlepsza inteligentna chłodziarka do wina w 2026 roku?",
      "sv": "Vilket smart vinkylskåp är bäst 2026?",
      "us": "What is the best smart wine fridge in 2026?",
      "ca": "What is the best smart wine fridge in 2026?"
    },
    "picks": [
      {
        "model": "La Sommelière ECELLAR185",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "185 bouteilles, deux zones et 14 clayettes connectées qui détectent chaque bouteille, avec inventaire automatique dans l’application Vinotag.",
          "en": "185 bottles, two zones and 14 smart shelves that detect each bottle, with an automatic inventory in the Vinotag app.",
          "de": "185 Flaschen, zwei Zonen und 14 vernetzte Regalböden, die jede Flasche erkennen, mit automatischem Inventar in der App Vinotag.",
          "es": "185 botellas, dos zonas y 14 baldas conectadas que detectan cada botella, con inventario automático en la aplicación Vinotag.",
          "it": "185 bottiglie, due zone e 14 ripiani intelligenti che rilevano ogni bottiglia, con inventario automatico nell’app Vinotag.",
          "nl": "185 flessen, twee zones en 14 verbonden legplanken die elke fles detecteren, met automatische inventaris in de app Vinotag.",
          "pl": "185 butelek, dwie strefy i 14 inteligentnych półek, które wykrywają każdą butelkę, oraz automatyczny spis zawartości w aplikacji Vinotag.",
          "sv": "185 flaskor, två zoner och 14 uppkopplade hyllor som känner av varje flaska, med automatisk inventering i appen Vinotag.",
          "us": "185 bottles, two zones and 14 smart shelves that detect every bottle, with automatic inventory in the Vinotag app.",
          "ca": "185 bottles, two zones and 14 smart shelves that detect every bottle, with automatic inventory in the Vinotag app."
        }
      },
      {
        "model": "Haier Wine Bank 50 HWS77GDAU1",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "77 bouteilles en deux zones (5-10 °C et 10-18 °C), humidité gérée, 37 dB et application hOn avec scan d’étiquettes Vivino.",
          "en": "77 bottles in two zones (5–10°C and 10–18°C), humidity control, 37 dB and the hOn app with Vivino label scanning.",
          "de": "77 Flaschen in zwei Zonen (5-10 °C und 10-18 °C), Feuchtigkeitsmanagement, 37 dB und hOn-App mit Vivino-Etikett-Scan.",
          "es": "77 botellas en dos zonas (5-10 °C y 10-18 °C), gestión de la humedad, 37 dB y aplicación hOn con escaneo de etiquetas Vivino.",
          "it": "77 bottiglie in due zone (5-10 °C e 10-18 °C), gestione dell’umidità, 37 dB e app hOn con scansione delle etichette Vivino.",
          "nl": "77 flessen in twee zones (5-10 °C en 10-18 °C), vochtbeheer, 37 dB en de hOn-app met Vivino-etiketscan.",
          "pl": "77 butelek w dwóch strefach (5–10 °C i 10–18 °C), kontrola wilgotności, 37 dB i aplikacja hOn ze skanowaniem etykiet Vivino.",
          "sv": "77 flaskor i två zoner (5–10 °C och 10–18 °C), fuktstyrning, 37 dB och appen hOn som läser av etiketter via Vivino.",
          "us": "77 bottles in two zones (41–50°F and 50–64°F), humidity control, 37 dB and the hOn app with Vivino label scanning.",
          "ca": "77 bottles in two zones (5–10°C and 10–18°C), humidity management, 37 dB and the hOn app with Vivino label scanning."
        }
      },
      {
        "model": "Liebherr WPbli 5231 GrandCru Selection",
        "role": {
          "fr": "Idéal pour une grande cave de garde",
          "en": "Best for laying down a large collection",
          "de": "Ideal für große Lagersammlungen",
          "es": "Ideal para guardar una gran colección de vinos",
          "it": "Ideale per conservare a lungo tante bottiglie",
          "nl": "Ideaal voor grote bewaarcollecties",
          "pl": "Najlepsza do dużej kolekcji win do leżakowania",
          "sv": "Bäst för stora samlingar som ska lagras länge",
          "us": "Best for aging a large collection",
          "ca": "Best for large collections to age"
        },
        "why": {
          "fr": "229 bouteilles à température unique, VibrateSafe, HumidityControl et alarmes complètes (porte, température, coupure) via l’application SmartDevice.",
          "en": "229 bottles at a single temperature, VibrateSafe, HumidityControl and full alarms (door, temperature, power cut) via the SmartDevice app.",
          "de": "229 Flaschen bei einer Temperatur, VibrateSafe, HumidityControl und umfassende Alarme (Tür, Temperatur, Stromausfall) per SmartDevice-App.",
          "es": "229 botellas a una sola temperatura, VibrateSafe, HumidityControl y alarmas completas (puerta, temperatura, corte) con la app SmartDevice.",
          "it": "229 bottiglie a temperatura unica, VibrateSafe, HumidityControl e allarmi completi (porta, temperatura, blackout) con l’app SmartDevice.",
          "nl": "229 flessen op één temperatuur, VibrateSafe, HumidityControl en volledige alarmen (deur, temperatuur, stroomuitval) via de SmartDevice-app.",
          "pl": "229 butelek w jednej temperaturze, VibrateSafe, HumidityControl i pełne alarmy (drzwi, temperatura, zanik zasilania) w aplikacji SmartDevice.",
          "sv": "229 flaskor vid en och samma temperatur, VibrateSafe, HumidityControl och kompletta larm (dörr, temperatur, strömavbrott) via appen SmartDevice.",
          "us": "229 bottles at a single temperature, VibrateSafe, HumidityControl and a full set of alarms (door, temperature, power outage) through the SmartDevice app.",
          "ca": "229 bottles at a single temperature, VibrateSafe, HumidityControl and full alarms (door, temperature, power outage) via the SmartDevice app."
        }
      }
    ]
  },
  "climatiseur-mobile-vs-ventilateur": {
    "question": {
      "fr": "Climatiseur mobile ou ventilateur : quel modèle choisir en 2026 ?",
      "en": "Portable air conditioner or fan: which should you choose in 2026?",
      "de": "Mobiles Klimagerät oder Ventilator: welches Modell 2026?",
      "es": "Aire acondicionado portátil o ventilador: ¿qué modelo elegir en 2026?",
      "it": "Condizionatore portatile o ventilatore: quale modello scegliere nel 2026?",
      "nl": "Mobiele airco of ventilator: welk model kies je in 2026?",
      "pl": "Klimatyzator przenośny czy wentylator: co wybrać w 2026 roku?",
      "sv": "Portabel AC eller fläkt: vilken modell ska du välja 2026?",
      "us": "Portable air conditioner or fan: which should you buy in 2026?",
      "ca": "Portable air conditioner or fan: which model to choose in 2026?"
    },
    "picks": [
      {
        "model": "De'Longhi Pinguino PAC EL112 CST WiFi",
        "role": {
          "fr": "Meilleur choix pour les canicules",
          "en": "Best for heatwaves",
          "de": "Beste Wahl für Hitzewellen",
          "es": "Mejor opción para olas de calor",
          "it": "Miglior scelta per le ondate di caldo",
          "nl": "Beste keuze voor hittegolven",
          "pl": "Najlepszy wybór na upały",
          "sv": "Bäst under värmeböljor",
          "us": "Best for heat waves",
          "ca": "Best for heat waves"
        },
        "why": {
          "fr": "Seul un climatiseur fait vraiment baisser la température : ce monobloc de 11 000 BTU/h, classé A+, se pilote par application, Alexa ou Google.",
          "en": "Only an air conditioner actually brings the temperature down: this 11,000 BTU/h, A+ rated single-hose unit can be controlled from an app, Alexa or Google.",
          "de": "Nur eine Klimaanlage senkt die Temperatur wirklich: Dieses Monoblock-Gerät mit 11.000 BTU/h und Klasse A+ lässt sich per App, Alexa oder Google steuern.",
          "es": "Solo un aire acondicionado baja de verdad la temperatura: este monobloque de 11.000 BTU/h y clase A+ se controla por app, Alexa o Google.",
          "it": "Solo un condizionatore abbassa davvero la temperatura: questo monoblocco da 11.000 BTU/h in classe A+ si controlla da app, Alexa o Google.",
          "nl": "Alleen een airco verlaagt echt de temperatuur: deze monoblock van 11.000 BTU/h met klasse A+ bedien je via app, Alexa of Google.",
          "pl": "Tylko klimatyzator naprawdę obniża temperaturę. Tym monoblokiem 11 000 BTU/h w klasie A+ sterujesz z aplikacji, przez Alexę lub Asystenta Google.",
          "sv": "Bara en AC sänker faktiskt temperaturen: det här monoblocket på 11 000 BTU/h i energiklass A+ kan styras via app, Alexa eller Google.",
          "us": "Only an air conditioner actually brings the temperature down: this 11,000 BTU/h single-unit portable, rated A+ on the EU label, runs from an app, Alexa or Google.",
          "ca": "Only an air conditioner truly lowers the temperature: this 11,000 BTU/h portable unit, rated A+ on the EU label, can be run from an app, Alexa or Google."
        }
      },
      {
        "model": "Xiaomi Smart Standing Fan 2 Pro",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Pour des étés modérés, ce ventilateur sur pied à moteur DC de 24 W reste discret, consomme très peu et se pilote par application, sans installation.",
          "en": "For milder summers, this 24 W DC pedestal fan stays quiet, uses very little power and is app-controlled, with no installation needed.",
          "de": "Für gemäßigte Sommer: Dieser Standventilator mit 24-W-DC-Motor ist leise, sehr sparsam und per App steuerbar, ganz ohne Installation.",
          "es": "Para veranos moderados, este ventilador de pie con motor DC de 24 W es silencioso, consume muy poco y se controla por app, sin instalación.",
          "it": "Per estati moderate, questo ventilatore a piantana con motore DC da 24 W è silenzioso, consuma pochissimo e si controlla da app, senza installazione.",
          "nl": "Voor gematigde zomers is deze statiefventilator met DC-motor van 24 W stil, zeer zuinig en via de app te bedienen, zonder installatie.",
          "pl": "Na niezbyt upalne lato: wentylator stojący z silnikiem DC 24 W pracuje cicho, zużywa bardzo mało prądu, a sterujesz nim z aplikacji – bez żadnego montażu.",
          "sv": "För måttligt varma somrar är den här golvfläkten med DC-motor på 24 W tyst, drar väldigt lite el och styrs via app – ingen installation behövs.",
          "us": "For milder summers, this 24 W DC-motor pedestal fan stays quiet, uses very little power and runs from an app, with no installation needed.",
          "ca": "For moderate summers, this 24 W DC pedestal fan stays quiet, uses very little power and is app-controlled, with no installation needed."
        }
      },
      {
        "model": "Midea PortaSplit",
        "role": {
          "fr": "Le plus silencieux pour une chambre",
          "en": "Quietest for bedrooms",
          "de": "Am leisesten fürs Schlafzimmer",
          "es": "El más silencioso para el dormitorio",
          "it": "Il più silenzioso per la camera",
          "nl": "Stilst voor de slaapkamer",
          "pl": "Najcichszy do sypialni",
          "sv": "Tystast i sovrummet",
          "us": "Quietest for bedrooms",
          "ca": "Quietest for bedrooms"
        },
        "why": {
          "fr": "Son compresseur reste dehors : il refroidit vraiment (12 000 BTU/h) avec un bruit intérieur annoncé dès 39 dB(A), et s'installe sans perçage.",
          "en": "Its compressor sits outside, so it really cools (12,000 BTU/h), with indoor noise quoted from 39 dB(A), and it fits without drilling.",
          "de": "Der Kompressor bleibt draußen: Es kühlt wirklich (12.000 BTU/h), innen ab 39 dB(A) laut Hersteller, und wird ohne Bohren montiert.",
          "es": "Su compresor queda fuera: enfría de verdad (12.000 BTU/h) con un ruido interior declarado desde 39 dB(A) y se instala sin taladrar.",
          "it": "Il compressore resta fuori: raffredda davvero (12.000 BTU/h) con rumore interno dichiarato da 39 dB(A) e si installa senza forare.",
          "nl": "De compressor blijft buiten: hij koelt echt (12.000 BTU/h) met binnen opgegeven vanaf 39 dB(A) en wordt zonder boren geplaatst.",
          "pl": "Sprężarka stoi na zewnątrz, więc urządzenie naprawdę chłodzi (12 000 BTU/h) przy deklarowanym hałasie w pomieszczeniu od 39 dB(A), a montaż nie wymaga wiercenia.",
          "sv": "Kompressorn står ute, så den kyler på riktigt (12 000 BTU/h) med en ljudnivå inomhus från 39 dB(A) enligt tillverkaren, och den monteras utan borrning.",
          "us": "Its compressor stays outside, so it really cools (12,000 BTU/h) with indoor noise rated from as low as 39 dB(A), and it installs without drilling.",
          "ca": "Its compressor stays outside, so it truly cools (12,000 BTU/h) with indoor noise quoted from 39 dB(A), and installs without drilling."
        }
      }
    ]
  },
  "comparatif-airfryer-connecte-2026": {
    "question": {
      "fr": "Quel est le meilleur airfryer connecté WiFi en 2026 ?",
      "en": "What is the best smart Wi-Fi air fryer in 2026?",
      "de": "Was ist die beste vernetzte WLAN-Heißluftfritteuse 2026?",
      "es": "¿Cuál es la mejor freidora de aire con wifi en 2026?",
      "it": "Qual è la migliore friggitrice ad aria con Wi-Fi nel 2026?",
      "nl": "Wat is de beste slimme wifi-airfryer in 2026?",
      "pl": "Jaka jest najlepsza frytkownica beztłuszczowa z Wi-Fi w 2026 roku?",
      "sv": "Vilken airfryer med wifi är bäst 2026?",
      "us": "What is the best smart Wi-Fi air fryer in 2026?",
      "ca": "What is the best Wi-Fi smart air fryer in 2026?"
    },
    "picks": [
      {
        "model": "Philips Airfryer Combi XXL Connecté - 8.3L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste algemene keuze",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "8,3 L, 22 modes de cuisson, sonde de température intégrée et application HomeID qui envoie les réglages des recettes à l’appareil.",
          "en": "8.3 L, 22 cooking functions, a built-in temperature probe and the HomeID app, which sends recipe settings to the appliance.",
          "de": "8,3 L, 22 Garfunktionen, integriertes Speisethermometer und HomeID-App, die Rezepteinstellungen an das Gerät schickt.",
          "es": "8,3 L, 22 funciones, sonda de temperatura integrada y app HomeID, que envía los ajustes de las recetas al aparato.",
          "it": "8,3 L, 22 funzioni, sonda di temperatura integrata e app HomeID, che invia le impostazioni delle ricette all’apparecchio.",
          "nl": "8,3 L, 22 functies, ingebouwde kernthermometer en de HomeID-app, die receptinstellingen naar het apparaat stuurt.",
          "pl": "8,3 l, 22 tryby przyrządzania, wbudowana sonda temperatury i aplikacja HomeID, która wysyła do urządzenia ustawienia z przepisów.",
          "sv": "8,3 liter, 22 tillagningsfunktioner, inbyggd stektermometer och appen HomeID som skickar receptens inställningar till apparaten.",
          "us": "8.8 qt (8.3 L), 22 cooking functions, a built-in temperature probe and the HomeID app, which sends recipe settings straight to the appliance.",
          "ca": "8.3 L, 22 cooking functions, a built-in food thermometer and the HomeID app, which sends recipe settings to the appliance."
        }
      },
      {
        "model": "Xiaomi Smart Air Fryer Pro 4L",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Prix d’entrée de gamme, application Xiaomi Home avec plus de 100 recettes, programmation 24 h, fenêtre de contrôle et Google Assistant.",
          "en": "Entry-level price, Xiaomi Home app with 100+ recipes, 24-hour scheduling, a viewing window and Google Assistant support.",
          "de": "Einstiegspreis, Xiaomi-Home-App mit über 100 Rezepten, 24-Stunden-Zeitvorwahl, Sichtfenster und Google Assistant.",
          "es": "Precio de gama de entrada, app Xiaomi Home con más de 100 recetas, programación de 24 h, ventana para vigilar la cocción y Google Assistant.",
          "it": "Prezzo da fascia d’ingresso, app Xiaomi Home con oltre 100 ricette, programmazione 24 ore, oblò di controllo e Google Assistant.",
          "nl": "Instapprijs, Xiaomi Home-app met meer dan 100 recepten, 24 uur uitgestelde start, kijkvenster en Google Assistant.",
          "pl": "Cena modelu z niższej półki, aplikacja Xiaomi Home z ponad 100 przepisami, programowanie startu do 24 h, okienko podglądu i Asystent Google.",
          "sv": "Instegsmodell med appen Xiaomi Home och över 100 recept, schemaläggning upp till 24 timmar, tittfönster och stöd för Google Assistant.",
          "us": "An entry-level price point, the Xiaomi Home app with 100+ recipes, 24-hour delay start, a viewing window and Google Assistant support.",
          "ca": "Entry-level price, Xiaomi Home app with 100+ recipes, 24-hour scheduling, a viewing window and Google Assistant support."
        }
      },
      {
        "model": "Cosori Dual Blaze Smart Air Fryer - 6.4L",
        "role": {
          "fr": "Meilleur pour une famille de 4",
          "en": "Best for a family of four",
          "de": "Beste Wahl für vier Personen",
          "es": "Mejor para una familia de cuatro",
          "it": "La migliore per una famiglia di 4 persone",
          "nl": "Beste voor een gezin van vier",
          "pl": "Najlepsza dla czteroosobowej rodziny",
          "sv": "Bäst för en familj på fyra",
          "us": "Best for a family of four",
          "ca": "Best for a family of four"
        },
        "why": {
          "fr": "Double résistance pour une cuisson homogène, 6,4 L pour 4 à 6 personnes, application VeSync et commande vocale Alexa ou Google.",
          "en": "Dual heating elements for even cooking, 6.4 L for 4 to 6 people, the VeSync app and Alexa or Google voice control.",
          "de": "Zwei Heizelemente für gleichmäßiges Garen, 6,4 L für 4 bis 6 Personen, VeSync-App und Sprachsteuerung per Alexa oder Google.",
          "es": "Doble resistencia para una cocción uniforme, 6,4 L para 4 a 6 personas, app VeSync y control por voz con Alexa o Google.",
          "it": "Doppia resistenza per una cottura uniforme, 6,4 L per 4-6 persone, app VeSync e controllo vocale con Alexa o Google.",
          "nl": "Twee verwarmingselementen voor gelijkmatig garen, 6,4 L voor 4 tot 6 personen, VeSync-app en spraakbediening via Alexa of Google.",
          "pl": "Dwie grzałki zapewniają równomierne smażenie, 6,4 l dla 4–6 osób, aplikacja VeSync i sterowanie głosem przez Alexę lub Asystenta Google.",
          "sv": "Dubbla värmeelement för jämn tillagning, 6,4 liter för 4–6 personer, appen VeSync och röststyrning med Alexa eller Google.",
          "us": "Dual heating elements for even cooking, 6.8 qt (6.4 L) for 4 to 6 people, the VeSync app and Alexa or Google voice control.",
          "ca": "Dual heating elements for even cooking, 6.4 L for 4 to 6 people, the VeSync app and Alexa or Google voice control."
        }
      }
    ]
  },
  "comparatif-camera-surveillance-exterieure": {
    "question": {
      "fr": "Quelle est la meilleure caméra de surveillance extérieure sans abonnement en 2026 ?",
      "en": "What is the best outdoor security camera with no subscription in 2026?",
      "de": "Welche ist die beste Außenkamera ohne Abo 2026?",
      "es": "¿Cuál es la mejor cámara de vigilancia exterior sin suscripción en 2026?",
      "it": "Qual è la migliore telecamera da esterno senza abbonamento nel 2026?",
      "nl": "Wat is de beste buitencamera zonder abonnement in 2026?",
      "pl": "Jaka jest najlepsza kamera zewnętrzna bez abonamentu w 2026 roku?",
      "sv": "Vilken utomhuskamera utan abonnemang är bäst 2026?",
      "us": "What is the best outdoor security camera without a subscription in 2026?",
      "ca": "What is the best outdoor security camera without a subscription in 2026?"
    },
    "picks": [
      {
        "model": "eufyCam S3 Pro",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Vidéo 4K, vision nocturne couleur, solaire intégré et stockage local sur la HomeBase S380, extensible jusqu’à 16 To, sans frais mensuels.",
          "en": "4K video, colour night vision, built-in solar and local storage on the HomeBase S380, expandable to 16 TB, with no monthly fees.",
          "de": "4K-Video, Farb-Nachtsicht, integriertes Solar und lokaler Speicher auf der HomeBase S380, bis 16 TB erweiterbar, ohne monatliche Kosten.",
          "es": "Vídeo 4K, visión nocturna en color, panel solar integrado y almacenamiento local en la HomeBase S380, ampliable a 16 TB, sin cuotas mensuales.",
          "it": "Video 4K, visione notturna a colori, pannello solare integrato e archiviazione locale sulla HomeBase S380, espandibile fino a 16 TB, senza costi mensili.",
          "nl": "4K-video, nachtzicht in kleur, ingebouwd zonnepaneel en lokale opslag op de HomeBase S380, uitbreidbaar tot 16 TB, zonder maandkosten.",
          "pl": "Wideo 4K, kolorowy obraz w nocy, wbudowany panel solarny i lokalny zapis na HomeBase S380 z możliwością rozbudowy do 16 TB, bez opłat miesięcznych.",
          "sv": "4K-video, mörkerseende i färg, inbyggd solpanel och lokal lagring på HomeBase S380, som kan byggas ut till 16 TB – och inga månadsavgifter.",
          "us": "4K video, color night vision, built-in solar and local storage on the HomeBase S380, expandable to 16 TB, with no monthly fees.",
          "ca": "4K video, colour night vision, built-in solar and local storage on the HomeBase S380, expandable to 16 TB, with no monthly fees."
        }
      },
      {
        "model": "TP-Link Tapo C520WS",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Caméra 2K motorisée qui couvre une cour entière depuis un seul point, avec suivi des mouvements et microSD jusqu’à 512 Go.",
          "en": "A motorised 2K camera that covers a whole garden from one spot, with motion tracking and microSD up to 512 GB.",
          "de": "Motorisierte 2K-Kamera, die einen ganzen Hof von einem Punkt aus abdeckt, mit Bewegungsverfolgung und microSD bis 512 GB.",
          "es": "Cámara 2K motorizada que cubre un patio entero desde un solo punto, con seguimiento de movimiento y microSD de hasta 512 GB.",
          "it": "Telecamera 2K motorizzata che copre un intero cortile da un solo punto, con tracciamento del movimento e microSD fino a 512 GB.",
          "nl": "Gemotoriseerde 2K-camera die een hele binnenplaats vanaf één punt afdekt, met bewegingsvolging en microSD tot 512 GB.",
          "pl": "Obrotowa kamera 2K, która z jednego miejsca obejmie całe podwórko, ze śledzeniem ruchu i obsługą kart microSD do 512 GB.",
          "sv": "Motoriserad 2K-kamera som täcker en hel gårdsplan från en enda punkt, med rörelsespårning och microSD upp till 512 GB.",
          "us": "A motorized 2K pan-and-tilt camera that covers a whole yard from one spot, with motion tracking and microSD up to 512 GB.",
          "ca": "A motorized 2K camera that covers a whole yard from one spot, with motion tracking and microSD up to 512 GB."
        }
      },
      {
        "model": "Reolink RLC-833A",
        "role": {
          "fr": "Meilleure option filaire PoE",
          "en": "Best wired PoE option",
          "de": "Beste kabelgebundene PoE-Lösung",
          "es": "Mejor opción cableada PoE",
          "it": "La migliore cablata PoE",
          "nl": "Beste bedrade PoE-optie",
          "pl": "Najlepsza opcja przewodowa PoE",
          "sv": "Bäst med kabel (PoE)",
          "us": "Best wired PoE option",
          "ca": "Best wired PoE option"
        },
        "why": {
          "fr": "4K avec zoom optique 3x, alimentation et données par un seul câble Ethernet, et enregistrement continu possible sur un NVR Reolink.",
          "en": "4K with 3x optical zoom, power and data over a single Ethernet cable, and the option of continuous recording to a Reolink NVR.",
          "de": "4K mit 3-fach optischem Zoom, Strom und Daten über ein Netzwerkkabel und Daueraufzeichnung auf einem Reolink-NVR.",
          "es": "4K con zoom óptico 3x, corriente y datos por un solo cable Ethernet y grabación continua en un NVR de Reolink.",
          "it": "4K con zoom ottico 3x, corrente e dati su un solo cavo Ethernet e registrazione continua su un NVR Reolink.",
          "nl": "4K met 3x optische zoom, stroom en data via één netwerkkabel en continue opname op een Reolink-NVR.",
          "pl": "4K z 3-krotnym zoomem optycznym, zasilanie i transmisja danych jednym kablem Ethernet oraz możliwość ciągłego nagrywania na rejestratorze NVR Reolink.",
          "sv": "4K med 3× optisk zoom, ström och data via en enda Ethernetkabel och möjlighet till kontinuerlig inspelning på en Reolink-NVR.",
          "us": "4K with 3x optical zoom, power and data over a single Ethernet cable, and continuous recording on a Reolink NVR.",
          "ca": "4K with 3x optical zoom, power and data over a single Ethernet cable, and continuous recording on a Reolink NVR."
        }
      }
    ]
  },
  "comparatif-multicuiseur-connecte": {
    "question": {
      "fr": "Quel est le meilleur multicuiseur connecté en 2026 ?",
      "en": "What is the best smart multicooker in 2026?",
      "de": "Welcher ist der beste vernetzte Multikocher 2026?",
      "es": "¿Cuál es la mejor olla programable con wifi en 2026?",
      "it": "Qual è il miglior multicooker smart nel 2026?",
      "nl": "Wat is de beste slimme multicooker in 2026?",
      "pl": "Jaki jest najlepszy inteligentny multicooker w 2026 roku?",
      "sv": "Vilken smart multikokare är bäst 2026?",
      "us": "What is the best smart multicooker in 2026?",
      "ca": "What is the best smart multicooker in 2026?"
    },
    "picks": [
      {
        "model": "Moulinex Cookeo Touch WiFi - 6L",
        "role": {
          "fr": "Meilleur choix connecté",
          "en": "Best smart pick",
          "de": "Beste vernetzte Wahl",
          "es": "Mejor opción conectada",
          "it": "La scelta migliore con app",
          "nl": "Beste verbonden keuze",
          "pl": "Najlepszy wybór z Wi-Fi",
          "sv": "Bästa uppkopplade valet",
          "us": "Best smart pick",
          "ca": "Best smart pick"
        },
        "why": {
          "fr": "Vraiment connecté en Wi-Fi : 6 L, 13 programmes, écran tactile qui guide chaque recette et nouvelles recettes via l’application Moulinex.",
          "en": "Genuinely Wi-Fi connected: 6 L, 13 programmes, a touchscreen that guides you through every recipe, and new recipes via the Moulinex app.",
          "de": "Wirklich per WLAN vernetzt: 6 L, 13 Programme, Touchscreen mit geführten Rezepten und neue Rezepte über die Moulinex-App.",
          "es": "Conectada de verdad por wifi: 6 L, 13 programas, pantalla táctil que guía cada receta y recetas nuevas con la app de Moulinex.",
          "it": "Davvero connesso al Wi-Fi: 6 L, 13 programmi, schermo touch che ti guida in ogni ricetta e nuove ricette dall’app Moulinex.",
          "nl": "Echt verbonden via wifi: 6 L, 13 programma’s, een touchscreen dat elk recept begeleidt en nieuwe recepten via de Moulinex-app.",
          "pl": "Prawdziwa łączność Wi-Fi: 6 l, 13 programów, ekran dotykowy, który prowadzi krok po kroku przez każdy przepis, i nowe przepisy w aplikacji Moulinex.",
          "sv": "Verkligen uppkopplad via wifi: 6 liter, 13 program, pekskärm som guidar dig genom varje recept och nya recept via Moulinex app.",
          "us": "Truly Wi-Fi enabled: 6.3 qt (6 L), 13 programs, a touchscreen that walks you through every recipe and new recipes through the Moulinex app.",
          "ca": "Genuinely Wi-Fi connected: 6 L, 13 programs, a touchscreen that guides every recipe and new recipes through the Moulinex app."
        }
      },
      {
        "model": "Ninja Foodi MAX 15-en-1 SmartLid OP500EU - 7.5L",
        "role": {
          "fr": "Le plus polyvalent (non connecté)",
          "en": "Most versatile (no Wi-Fi)",
          "de": "Am vielseitigsten (nicht vernetzt)",
          "es": "La más versátil (sin conexión)",
          "it": "Il più versatile (senza app)",
          "nl": "Veelzijdigste (niet verbonden)",
          "pl": "Najbardziej wszechstronny (bez Wi-Fi)",
          "sv": "Mest mångsidig (utan uppkoppling)",
          "us": "Most versatile (no Wi-Fi)",
          "ca": "Most versatile (no Wi-Fi)"
        },
        "why": {
          "fr": "Autocuiseur et airfryer sous un seul couvercle, 7,5 L pour les grandes familles. Attention : ni Wi-Fi ni application.",
          "en": "Pressure cooker and air fryer under one lid, 7.5 L for large families. Note: no Wi-Fi and no app.",
          "de": "Schnellkochtopf und Heißluftfritteuse unter einem Deckel, 7,5 L für große Familien. Achtung: kein WLAN und keine App.",
          "es": "Olla a presión y freidora de aire bajo una sola tapa, 7,5 L para familias numerosas. Ojo: sin wifi ni app.",
          "it": "Pentola a pressione e friggitrice ad aria sotto un unico coperchio, 7,5 L per famiglie numerose. Attenzione: niente Wi-Fi né app.",
          "nl": "Snelkookpan en airfryer onder één deksel, 7,5 L voor grote gezinnen. Let op: geen wifi en geen app.",
          "pl": "Szybkowar i frytkownica beztłuszczowa pod jedną pokrywą, 7,5 l dla dużych rodzin. Uwaga: bez Wi-Fi i bez aplikacji.",
          "sv": "Tryckkokare och airfryer under ett och samma lock, 7,5 liter för storfamiljer. Observera: varken wifi eller app.",
          "us": "Pressure cooker and air fryer under one lid, 7.9 qt (7.5 L) for large families. Heads-up: no Wi-Fi and no app.",
          "ca": "Pressure cooker and air fryer under one lid, 7.5 L for large families. Note: no Wi-Fi and no app."
        }
      },
      {
        "model": "Instant Pot Duo Plus WhisperQuiet - 5.7L",
        "role": {
          "fr": "Meilleur rapport qualité-prix (non connecté)",
          "en": "Best value (no Wi-Fi)",
          "de": "Bestes Preis-Leistungs-Verhältnis (nicht vernetzt)",
          "es": "Mejor relación calidad-precio (sin conexión)",
          "it": "Miglior rapporto qualità-prezzo (senza app)",
          "nl": "Beste prijs-kwaliteit (niet verbonden)",
          "pl": "Najlepszy stosunek jakości do ceny (bez Wi-Fi)",
          "sv": "Mest prisvärd (utan uppkoppling)",
          "us": "Best value (no Wi-Fi)",
          "ca": "Best value (no Wi-Fi)"
        },
        "why": {
          "fr": "Multicuiseur 9-en-1 simple et fiable, cuve inox et évacuation de vapeur silencieuse. Pas de Wi-Fi ni d’application.",
          "en": "A simple, reliable 9-in-1 multicooker with a stainless steel pot and quiet steam release. No Wi-Fi and no app.",
          "de": "Einfacher, zuverlässiger 9-in-1-Multikocher mit Edelstahltopf und leisem Dampfablass. Kein WLAN und keine App.",
          "es": "Olla 9 en 1 sencilla y fiable, con cubeta de acero inoxidable y salida de vapor silenciosa. Sin wifi ni app.",
          "it": "Multicooker 9 in 1 semplice e affidabile, con vasca inox e sfiato del vapore silenzioso. Niente Wi-Fi né app.",
          "nl": "Eenvoudige, betrouwbare 9-in-1-multicooker met rvs-pan en stille stoomafvoer. Geen wifi en geen app.",
          "pl": "Prosty i niezawodny multicooker 9 w 1, misa ze stali nierdzewnej i ciche upuszczanie pary. Bez Wi-Fi i bez aplikacji.",
          "sv": "Enkel och pålitlig multikokare 9-i-1 med insats i rostfritt stål och tyst ångutsläpp. Varken wifi eller app.",
          "us": "A simple, reliable 9-in-1 multicooker with a stainless steel pot and quiet steam release. No Wi-Fi and no app.",
          "ca": "A simple, reliable 9-in-1 multicooker with a stainless steel pot and quiet steam release. No Wi-Fi and no app."
        }
      }
    ]
  },
  "comparatif-purificateur-air-allergie": {
    "question": {
      "fr": "Quel est le meilleur purificateur d'air pour les allergies en 2026 ?",
      "en": "What is the best air purifier for allergies in 2026?",
      "de": "Welcher ist der beste Luftreiniger für Allergiker 2026?",
      "es": "¿Cuál es el mejor purificador de aire para alergias en 2026?",
      "it": "Qual è il miglior purificatore d'aria per le allergie nel 2026?",
      "nl": "Wat is de beste luchtreiniger voor allergie in 2026?",
      "pl": "Jaki jest najlepszy oczyszczacz powietrza dla alergików w 2026 roku?",
      "sv": "Vilken luftrenare är bäst för allergiker 2026?",
      "us": "What is the best air purifier for allergies in 2026?",
      "ca": "What is the best air purifier for allergies in 2026?"
    },
    "picks": [
      {
        "model": "Levoit Core 400S",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Filtre HEPA, CADR annoncé de 400 m³/h, capteur laser PM2.5 et mode nuit : assez polyvalent pour un séjour le jour et une chambre la nuit.",
          "en": "HEPA filter, a claimed 400 m³/h CADR, a laser PM2.5 sensor and sleep mode: versatile enough for a living room by day and a bedroom at night.",
          "de": "HEPA-Filter, angegebener CADR von 400 m³/h, Laser-PM2,5-Sensor und Schlafmodus: vielseitig für Wohnzimmer am Tag und Schlafzimmer nachts.",
          "es": "Filtro HEPA, CADR declarado de 400 m³/h, sensor láser PM2,5 y modo nocturno: versátil para el salón de día y el dormitorio de noche.",
          "it": "Filtro HEPA, CADR dichiarato di 400 m³/h, sensore laser PM2.5 e modalità notte: abbastanza versatile per il soggiorno di giorno e la camera da letto di notte.",
          "nl": "HEPA-filter, opgegeven CADR van 400 m³/u, laser-PM2,5-sensor en slaapstand: veelzijdig voor de woonkamer overdag en de slaapkamer 's nachts.",
          "pl": "Filtr HEPA, deklarowany CADR 400 m³/h, laserowy czujnik PM2.5 i tryb nocny: na tyle wszechstronny, że w dzień sprawdzi się w salonie, a w nocy w sypialni.",
          "sv": "HEPA-filter, CADR på 400 m³/h enligt tillverkaren, laserbaserad PM2,5-sensor och nattläge: mångsidig nog för vardagsrummet på dagen och sovrummet på natten.",
          "us": "HEPA filter, a claimed CADR of 235 CFM (400 m³/h), a laser PM2.5 sensor and sleep mode: versatile enough for a living room by day and a bedroom at night.",
          "ca": "HEPA filter, a claimed 400 m³/h CADR, a laser PM2.5 sensor and sleep mode: versatile enough for a living room by day and a bedroom at night."
        }
      },
      {
        "model": "Levoit Core 300S",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Compact, avec filtre HEPA, CADR annoncé de 240 m³/h, mode auto et environ 22 dB en veille : l'essentiel pour purifier une chambre.",
          "en": "Compact, with a HEPA filter, a claimed 240 m³/h CADR, auto mode and about 22 dB in sleep mode: the essentials for a bedroom.",
          "de": "Kompakt, mit HEPA-Filter, angegebenem CADR von 240 m³/h, Automatik und rund 22 dB im Schlafmodus: das Wesentliche fürs Schlafzimmer.",
          "es": "Compacto, con filtro HEPA, CADR declarado de 240 m³/h, modo automático y unos 22 dB en modo nocturno: lo esencial para un dormitorio.",
          "it": "Compatto, con filtro HEPA, CADR dichiarato di 240 m³/h, modalità automatica e circa 22 dB in modalità sleep: l'essenziale per purificare l'aria della camera.",
          "nl": "Compact, met HEPA-filter, opgegeven CADR van 240 m³/u, automatische stand en ongeveer 22 dB in slaapstand: het belangrijkste voor de slaapkamer.",
          "pl": "Kompaktowy, z filtrem HEPA, deklarowanym CADR 240 m³/h, trybem automatycznym i ok. 22 dB w trybie nocnym: wszystko, czego trzeba do oczyszczania powietrza w sypialni.",
          "sv": "Kompakt, med HEPA-filter, CADR på 240 m³/h enligt tillverkaren, autoläge och ca 22 dB i nattläge: det viktigaste för ett sovrum.",
          "us": "Compact, with a HEPA filter, a claimed CADR of 141 CFM (240 m³/h), auto mode and about 22 dB in sleep mode: the essentials for a bedroom.",
          "ca": "Compact, with a HEPA filter, a claimed 240 m³/h CADR, auto mode and about 22 dB in sleep mode: the essentials for a bedroom."
        }
      },
      {
        "model": "Blueair Blue Pure 411i Max",
        "role": {
          "fr": "Le plus discret la nuit",
          "en": "Quietest for sleeping",
          "de": "Am leisesten zum Schlafen",
          "es": "El más silencioso para dormir",
          "it": "Il più silenzioso per dormire",
          "nl": "Stilste om bij te slapen",
          "pl": "Najcichszy w nocy",
          "sv": "Tystast när du sover",
          "us": "Quietest for sleeping",
          "ca": "Quietest for sleeping"
        },
        "why": {
          "fr": "Plage sonore annoncée de 18 à 46 dB, préfiltre lavable, capteur PM2.5 et application : idéal pour les dormeurs sensibles au bruit.",
          "en": "A claimed 18 to 46 dB noise range, washable pre-filter, PM2.5 sensor and app: ideal for light sleepers.",
          "de": "Angegebener Geräuschbereich von 18 bis 46 dB, waschbarer Vorfilter, PM2,5-Sensor und App: ideal für geräuschempfindliche Schläfer.",
          "es": "Rango de ruido declarado de 18 a 46 dB, prefiltro lavable, sensor PM2,5 y app: ideal si tienes el sueño ligero.",
          "it": "Rumorosità dichiarata da 18 a 46 dB, prefiltro lavabile, sensore PM2.5 e app: ideale per chi ha il sonno leggero.",
          "nl": "Opgegeven geluidsbereik van 18 tot 46 dB, wasbaar voorfilter, PM2,5-sensor en app: ideaal voor slapers die gevoelig zijn voor geluid.",
          "pl": "Deklarowany poziom hałasu od 18 do 46 dB, zmywalny filtr wstępny, czujnik PM2.5 i aplikacja: idealny dla osób, którym hałas przeszkadza w zasypianiu.",
          "sv": "Ljudnivå på 18–46 dB enligt tillverkaren, tvättbart förfilter, PM2,5-sensor och app: perfekt för dig som sover lätt och störs av ljud.",
          "us": "A claimed noise range of 18 to 46 dB, a washable pre-filter, a PM2.5 sensor and an app: ideal for light sleepers.",
          "ca": "A claimed 18 to 46 dB noise range, washable pre-filter, PM2.5 sensor and app: ideal for noise-sensitive sleepers."
        }
      }
    ]
  },
  "comparatif-robot-aspirateur-laveur": {
    "question": {
      "fr": "Quel est le meilleur robot aspirateur laveur en 2026 ?",
      "en": "What is the best robot vacuum and mop in 2026?",
      "de": "Welcher ist der beste Saugroboter mit Wischfunktion 2026?",
      "es": "¿Cuál es el mejor robot aspirador y fregasuelos en 2026?",
      "it": "Qual è il miglior robot aspirapolvere lavapavimenti nel 2026?",
      "nl": "Wat is de beste robotstofzuiger met dweilfunctie in 2026?",
      "pl": "Jaki jest najlepszy robot sprzątający z mopem w 2026 roku?",
      "sv": "Vilken robotdammsugare med mopp är bäst 2026?",
      "us": "What is the best robot vacuum and mop combo in 2026?",
      "ca": "What is the best robot vacuum mop combo in 2026?"
    },
    "picks": [
      {
        "model": "Dreame X50 Ultra Complete",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "20 000 Pa annoncés, serpillère et brosse extensibles, lavage des serpillères à 80 °C et franchissement de seuils jusqu’à 6 cm.",
          "en": "A claimed 20,000 Pa, an extending mop and side brush, 80°C mop washing and the ability to climb thresholds of up to 6 cm.",
          "de": "20.000 Pa laut Hersteller, ausfahrbarer Mopp und Seitenbürste, Moppwäsche mit 80 °C und Schwellen bis 6 cm.",
          "es": "20.000 Pa anunciados, mopa y cepillo lateral extensibles, lavado de mopas a 80 °C y supera umbrales de hasta 6 cm.",
          "it": "20.000 Pa dichiarati, panno e spazzola laterale estensibili, lavaggio dei panni a 80 °C; supera soglie fino a 6 cm.",
          "nl": "20.000 Pa volgens de fabrikant, uitschuifbare dweil en zijborstel, dweilreiniging op 80 °C en drempels tot 6 cm.",
          "pl": "Deklarowane 20 000 Pa, wysuwany mop i szczotka, mycie mopów w temperaturze 80 °C i pokonywanie progów do 6 cm.",
          "sv": "20 000 Pa enligt tillverkaren, mopp och sidoborste som skjuts ut, moppdukarna tvättas i 80 °C och roboten klarar trösklar upp till 6 cm.",
          "us": "A claimed 20,000 Pa of suction, an extending mop and side brush, 175°F (80°C) mop washing, and it climbs thresholds up to 2.4 in (6 cm).",
          "ca": "Claimed 20,000 Pa, extending mop and side brush, 80°C mop washing and the ability to climb thresholds up to 6 cm."
        }
      },
      {
        "model": "Dreame L40 Ultra",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Une station complète avec lavage des serpillères à 65 °C, séchage et serpillère extensible, dans une gamme plus accessible.",
          "en": "A full dock with 65°C mop washing, mop drying and an extending mop, from a more affordable range.",
          "de": "Komplettstation mit Moppwäsche bei 65 °C, Warmlufttrocknung und ausfahrbarem Mopp in einer zugänglicheren Klasse.",
          "es": "Base completa con lavado de mopas a 65 °C, secado y mopa extensible, a un precio más asequible.",
          "it": "Base completa con lavaggio dei panni a 65 °C, asciugatura e panno estensibile, in una fascia di prezzo più accessibile.",
          "nl": "Volledig station met dweilreiniging op 65 °C, drogen met warme lucht en een uitschuifbare dweil, in een toegankelijker segment.",
          "pl": "Kompletna stacja z myciem mopów w temperaturze 65 °C, suszeniem i wysuwanym mopem, w przystępniejszej cenowo serii.",
          "sv": "Komplett station med tvätt av moppdukarna i 65 °C, torkning och en mopp som skjuts ut, i en mer prisvärd klass.",
          "us": "A full dock with 150°F (65°C) mop washing, warm-air drying and an extending mop, at a more affordable tier.",
          "ca": "A full dock with 65°C mop washing, warm-air drying and an extending mop, in a more accessible tier."
        }
      },
      {
        "model": "Roborock Qrevo Curv 2 Flow",
        "role": {
          "fr": "Idéal pour les grands sols durs",
          "en": "Best for large hard floors",
          "de": "Ideal für große Hartböden",
          "es": "Ideal para grandes superficies de suelo duro",
          "it": "Ideale per grandi superfici di pavimento duro",
          "nl": "Ideaal voor grote harde vloeren",
          "pl": "Najlepszy do dużych powierzchni z twardą podłogą",
          "sv": "Bäst för stora hårda golv",
          "us": "Best for large hard floors",
          "ca": "Best for large hard floors"
        },
        "why": {
          "fr": "Son rouleau SpiraFlow est arrosé d’eau propre et raclé en continu, efficace sur les taches collantes ; compatible Matter.",
          "en": "Its SpiraFlow roller is constantly rinsed with clean water and scraped, so it copes well with sticky spills; it also supports Matter.",
          "de": "Die SpiraFlow-Walze wird laufend mit Frischwasser versorgt und abgestreift, stark bei klebrigen Flecken; mit Matter.",
          "es": "Su rodillo SpiraFlow se moja con agua limpia y se rasca sin parar, eficaz con las manchas pegajosas; además, es compatible con Matter.",
          "it": "Il rullo SpiraFlow viene bagnato con acqua pulita e raschiato di continuo, così rimuove anche le macchie appiccicose; compatibile Matter.",
          "nl": "De SpiraFlow-rol krijgt continu schoon water en wordt afgeschraapt, sterk bij plakkerige vlekken; met Matter.",
          "pl": "Wałek SpiraFlow jest stale zwilżany czystą wodą i oczyszczany zgarniaczem, dzięki czemu radzi sobie z lepkimi plamami; zgodny z Matter.",
          "sv": "SpiraFlow-rullen fuktas med rent vatten och skrapas av kontinuerligt, vilket biter på kladdiga fläckar; den stöder också Matter.",
          "us": "Its SpiraFlow roller is fed clean water and scraped continuously, effective on sticky spills; it also supports Matter.",
          "ca": "Its SpiraFlow roller is fed clean water and scraped continuously, effective on sticky spills; it also supports Matter."
        }
      }
    ]
  },
  "comparatif-smart-plugs-mesure-energie": {
    "question": {
      "fr": "Quelle est la meilleure prise connectée avec mesure de consommation en 2026 ?",
      "en": "What is the best smart plug with energy monitoring in 2026?",
      "de": "Welche ist die beste smarte Steckdose mit Verbrauchsmessung 2026?",
      "es": "¿Cuál es el mejor enchufe inteligente con medición de consumo en 2026?",
      "it": "Qual è la migliore presa smart con misurazione dei consumi nel 2026?",
      "nl": "Wat is de beste slimme stekker met energiemeting in 2026?",
      "pl": "Jakie jest najlepsze inteligentne gniazdko z pomiarem energii w 2026 roku?",
      "sv": "Vilken smart plugg med energimätning är bäst 2026?",
      "us": "What is the best smart plug with energy monitoring in 2026?",
      "ca": "What is the best smart plug with energy monitoring in 2026?"
    },
    "picks": [
      {
        "model": "TP-Link Tapo P115 Prise Connectée avec Suivi Conso",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Mini-prise 16 A / 3 680 W avec mesure en temps réel et historique, application Tapo claire et compatibilité Alexa et Google.",
          "en": "A 16 A / 3,680 W mini plug (EU) with live and historical monitoring, a clear Tapo app and Alexa and Google support.",
          "de": "Mini-Steckdose mit 16 A / 3.680 W, Echtzeitmessung mit Verlauf, übersichtlicher Tapo-App sowie Alexa und Google.",
          "es": "Mini enchufe de 16 A / 3.680 W con medición en tiempo real e historial, app Tapo clara y compatibilidad con Alexa y Google.",
          "it": "Mini presa da 16 A / 3.680 W con misura in tempo reale e storico, app Tapo chiara e compatibilità con Alexa e Google.",
          "nl": "Mini-stekker van 16 A / 3.680 W met realtime meting en geschiedenis, een overzichtelijke Tapo-app en Alexa en Google.",
          "pl": "Mini gniazdko 16 A / 3680 W z pomiarem zużycia w czasie rzeczywistym i historią, czytelna aplikacja Tapo oraz zgodność z Alexą i Asystentem Google.",
          "sv": "Kompakt smart plugg för 16 A / 3 680 W med energimätning i realtid och historik, en tydlig Tapo-app och stöd för Alexa och Google.",
          "us": "A compact 16 A / 3,680 W plug (EU version) with real-time and historical monitoring, a clear Tapo app and Alexa and Google support.",
          "ca": "A 16 A / 3,680 W mini plug (EU) with live and historical monitoring, a clear Tapo app and Alexa and Google support."
        }
      },
      {
        "model": "Meross MSS210P Prise Connectée HomeKit 16A (lot de 2)",
        "role": {
          "fr": "Alternative pour Apple Maison",
          "en": "Apple Home alternative",
          "de": "Alternative für Apple Home",
          "es": "Alternativa para Casa de Apple",
          "it": "Alternativa per Apple Casa",
          "nl": "Alternatief voor Apple Woning",
          "pl": "Alternatywa dla użytkowników Apple Home",
          "sv": "Alternativet för Apple Home",
          "us": "Best alternative for Apple Home",
          "ca": "Apple Home alternative"
        },
        "why": {
          "fr": "Prise 16 A avec mesure de consommation, pilotable depuis Apple Maison et Siri dans sa version HomeKit, ainsi qu’Alexa et Google.",
          "en": "A 16 A plug with energy monitoring that works with Apple Home and Siri in its HomeKit version, plus Alexa and Google.",
          "de": "16-A-Steckdose mit Verbrauchsmessung, in der HomeKit-Version über Apple Home und Siri sowie Alexa und Google steuerbar.",
          "es": "Enchufe de 16 A con medición de consumo que, en su versión HomeKit, se controla desde la app Casa de Apple y Siri, además de Alexa y Google.",
          "it": "Presa da 16 A con misura dei consumi, controllabile da Apple Casa e Siri nella versione HomeKit, oltre che con Alexa e Google.",
          "nl": "16 A-stekker met energiemeting, te bedienen via Apple Woning en Siri in de HomeKit-versie, plus Alexa en Google.",
          "pl": "Gniazdko 16 A z pomiarem zużycia energii; w wersji HomeKit sterujesz nim z aplikacji Dom (Apple Home) i przez Siri, a także przez Alexę i Asystenta Google.",
          "sv": "Plugg för 16 A med energimätning som i HomeKit-versionen fungerar med Apple Home och Siri, och dessutom med Alexa och Google.",
          "us": "A 16 A plug with energy monitoring that works with Apple Home and Siri in its HomeKit version, plus Alexa and Google.",
          "ca": "A 16 A plug with energy monitoring that works with Apple Home and Siri in its HomeKit version, plus Alexa and Google."
        }
      },
      {
        "model": "TP-Link Tapo P100 Pack de 4 Prises Connectées",
        "role": {
          "fr": "Pour automatiser sans mesure",
          "en": "For automation only (no monitoring)",
          "de": "Automatisieren ohne Messung",
          "es": "Para automatizar sin medir",
          "it": "Per automatizzare, senza misura dei consumi",
          "nl": "Automatiseren zonder meten",
          "pl": "Do automatyzacji, bez pomiaru energii",
          "sv": "Automation utan energimätning",
          "us": "Best for automation without monitoring",
          "ca": "Automation without monitoring"
        },
        "why": {
          "fr": "Sans mesure d’énergie et limité à 10 A, ce pack complète une P115 pour programmer lampes, chargeurs et petits appareils.",
          "en": "With no energy monitoring and a 10 A limit, this pack complements a P115 for scheduling lamps, chargers and small devices.",
          "de": "Ohne Energiemessung und auf 10 A begrenzt ergänzt dieses Pack eine P115, um Lampen, Ladegeräte und Kleingeräte zu planen.",
          "es": "Sin medición de energía y limitado a 10 A, este pack complementa al P115 para programar lámparas, cargadores y aparatos pequeños.",
          "it": "Senza misura dei consumi e limitata a 10 A, questa confezione multipla affianca una P115 per programmare lampade, caricatori e piccoli apparecchi.",
          "nl": "Zonder energiemeting en beperkt tot 10 A vult dit pack een P115 aan om lampen, laders en kleine apparaten in te plannen.",
          "pl": "Nie mierzy zużycia energii i ma limit 10 A, ale jako uzupełnienie P115 sprawdzi się do programowania lamp, ładowarek i drobnych urządzeń.",
          "sv": "Utan energimätning och med en gräns på 10 A kompletterar det här paketet en P115 när du vill schemalägga lampor, laddare och små apparater.",
          "us": "With no energy monitoring and a 10 A limit, this pack complements a P115 for scheduling lamps, chargers and small devices.",
          "ca": "With no energy monitoring and a 10 A limit, this pack complements a P115 for scheduling lamps, chargers and small devices."
        }
      }
    ]
  },
  "cookeo-vs-thermomix-vs-airfryer": {
    "question": {
      "fr": "Cookeo, Thermomix ou airfryer : lequel choisir en 2026 ?",
      "en": "Cookeo, Thermomix or air fryer: which should you choose in 2026?",
      "de": "Multikocher, Thermomix oder Airfryer: Was sollten Sie 2026 wählen?",
      "es": "Cookeo, Thermomix o freidora de aire: ¿cuál elegir en 2026?",
      "it": "Cookeo, Bimby o friggitrice ad aria: quale scegliere nel 2026?",
      "nl": "Multicooker, Thermomix of airfryer: welke kies je in 2026?",
      "pl": "Cookeo, Thermomix czy frytkownica beztłuszczowa: co wybrać w 2026 roku?",
      "sv": "Multikokare, Thermomix eller airfryer: vilken ska du välja 2026?",
      "us": "Multicooker, Thermomix or air fryer: which should you choose in 2026?",
      "ca": "Multicooker, Thermomix or air fryer: which should you choose in 2026?"
    },
    "picks": [
      {
        "model": "Moulinex Cookeo Touch WiFi - 6L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Cuve de 6 L, cuisson sous pression et 250 recettes guidées : le plus utile au quotidien pour préparer vite des plats complets en famille.",
          "en": "A 6 L pot, pressure cooking and 250 guided recipes: the most useful everyday choice for cooking complete family meals quickly.",
          "de": "6-Liter-Topf, Druckgaren und 250 geführte Rezepte: im Familienalltag am nützlichsten, um schnell komplette Mahlzeiten zu kochen.",
          "es": "Cubeta de 6 L, cocción a presión y 250 recetas guiadas: la más útil a diario para preparar rápido platos completos en familia.",
          "it": "Vasca da 6 L, cottura a pressione e 250 ricette guidate: il più utile ogni giorno per preparare in fretta piatti completi in famiglia.",
          "nl": "Pan van 6 liter, drukkoken en 250 begeleide recepten: het nuttigst in het dagelijks leven om snel complete gezinsmaaltijden te maken.",
          "pl": "Misa 6 l, gotowanie pod ciśnieniem i 250 przepisów krok po kroku – na co dzień najbardziej przydatny, gdy trzeba szybko przygotować pełne danie dla całej rodziny.",
          "sv": "Insats på 6 liter, tryckkokning och 250 guidade recept: det mest användbara valet i vardagen när hela familjen snabbt ska få en komplett måltid.",
          "us": "A 6.3 qt (6 L) pot, pressure cooking and 250 guided recipes: the most useful everyday pick for getting complete family meals on the table fast.",
          "ca": "A 6 L pot, pressure cooking and 250 guided recipes: the most useful everyday choice for cooking complete family meals quickly."
        }
      },
      {
        "model": "Philips Airfryer Série 3000 XL - 6.2L",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "6,2 L, 14 modes et application NutriU : un airfryer simple pour le croustillant au quotidien, idéal en complément d’un multicuiseur.",
          "en": "6.2 L, 14 modes and the NutriU app: a simple air fryer for everyday crispy food, ideal alongside a multicooker.",
          "de": "6,2 Liter, 14 Modi und NutriU-App: ein einfacher Airfryer für Knuspriges im Alltag, ideal als Ergänzung zum Multikocher.",
          "es": "6,2 L, 14 modos y app NutriU: una freidora de aire sencilla para conseguir platos crujientes a diario, ideal como complemento de una olla programable.",
          "it": "6,2 L, 14 modalità e app NutriU: una friggitrice ad aria semplice per cibi croccanti tutti i giorni, ideale accanto a un multicooker.",
          "nl": "6,2 liter, 14 standen en de NutriU-app: een eenvoudige airfryer voor dagelijks krokant, ideaal naast een multicooker.",
          "pl": "6,2 l, 14 trybów i aplikacja NutriU: prosta frytkownica do codziennego przyrządzania chrupiących potraw, idealna jako uzupełnienie multicookera.",
          "sv": "6,2 liter, 14 lägen och appen NutriU: en enkel airfryer för krispig mat i vardagen, perfekt som komplement till en multikokare.",
          "us": "6.6 qt (6.2 L), 14 modes and the NutriU app: a no-fuss air fryer for crispy food every day, and a great partner for a multicooker.",
          "ca": "6.2 L, 14 modes and the NutriU app: a simple air fryer for everyday crispy food, ideal alongside a multicooker."
        }
      },
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Idéal grandes familles",
          "en": "Best for large families",
          "de": "Ideal für große Familien",
          "es": "Ideal para familias numerosas",
          "it": "Ideale per famiglie numerose",
          "nl": "Ideaal voor grote gezinnen",
          "pl": "Najlepsza dla dużych rodzin",
          "sv": "Bäst för storfamiljer",
          "us": "Best for large families",
          "ca": "Best for large families"
        },
        "why": {
          "fr": "Deux tiroirs superposés de 4,75 L pour cuire plat et accompagnement en même temps, avec une emprise réduite sur le plan de travail.",
          "en": "Two stacked 4.75 L drawers cook a main and a side at the same time, while taking up less worktop space.",
          "de": "Zwei übereinanderliegende 4,75-Liter-Schubladen garen Hauptgericht und Beilage gleichzeitig und brauchen weniger Platz in der Breite.",
          "es": "Dos cajones superpuestos de 4,75 L para cocinar a la vez el plato principal y la guarnición, ocupando poco espacio en la encimera.",
          "it": "Due cassetti sovrapposti da 4,75 L per cuocere insieme piatto principale e contorno, occupando poco spazio sul piano di lavoro.",
          "nl": "Twee gestapelde lades van 4,75 liter garen hoofd- en bijgerecht tegelijk en nemen minder breedte in op het aanrecht.",
          "pl": "Dwie szuflady po 4,75 l, jedna nad drugą, pozwalają jednocześnie przygotować danie główne i dodatek, a urządzenie zajmuje niewiele miejsca na blacie.",
          "sv": "Två staplade lådor på 4,75 liter tillagar huvudrätt och tillbehör samtidigt och tar mindre plats på bänken.",
          "us": "Two stacked 5 qt (4.75 L) drawers cook a main and a side at the same time while taking up less counter space.",
          "ca": "Two stacked 4.75 L drawers cook a main and a side at the same time while taking up less counter width."
        }
      }
    ]
  },
  "guide-cuisine-connectee-2026": {
    "question": {
      "fr": "Quels sont les meilleurs appareils de cuisine connectée en 2026 ?",
      "en": "What are the best smart kitchen appliances in 2026?",
      "de": "Welche smarten Küchengeräte sind 2026 die besten?",
      "es": "¿Cuáles son los mejores aparatos de cocina conectada en 2026?",
      "it": "Quali sono i migliori apparecchi per la cucina smart nel 2026?",
      "nl": "Wat zijn de beste slimme keukenapparaten in 2026?",
      "pl": "Jakie są najlepsze inteligentne urządzenia kuchenne w 2026 roku?",
      "sv": "Vilka är de bästa smarta köksapparaterna 2026?",
      "us": "What are the best smart kitchen appliances in 2026?",
      "ca": "What are the best smart kitchen appliances in 2026?"
    },
    "picks": [
      {
        "model": "Moulinex Cookeo Touch WiFi - 6L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Multicuiseur sous pression de 6 L avec 13 modes, écran tactile et recettes guidées téléchargeables en Wi-Fi : le plus utile au quotidien.",
          "en": "A 6 L pressure multicooker with 13 modes, a touchscreen and guided recipes downloaded over Wi-Fi: the most useful for everyday meals.",
          "de": "6-Liter-Schnellkoch-Multikocher mit 13 Modi, Touchscreen und geführten Rezepten per WLAN: im Alltag am nützlichsten.",
          "es": "Olla programable a presión de 6 L con 13 modos, pantalla táctil y recetas guiadas descargables por wifi: la más útil en el día a día.",
          "it": "Multicooker a pressione da 6 L con 13 modalità, touchscreen e ricette guidate scaricabili via Wi-Fi: il più utile nell'uso quotidiano.",
          "nl": "Snelkook-multicooker van 6 l met 13 standen, touchscreen en begeleide recepten via wifi: het nuttigst in het dagelijks leven.",
          "pl": "Multicooker ciśnieniowy 6 l z 13 trybami, ekranem dotykowym i przepisami krok po kroku pobieranymi przez Wi-Fi – na co dzień najbardziej przydatny.",
          "sv": "Multikokare på 6 liter med tryckkokning, 13 lägen, pekskärm och guidade recept som laddas ner via wifi: mest användbar för vardagsmaten.",
          "us": "A 6.3 qt (6 L) pressure multicooker with 13 modes, a touchscreen and guided recipes downloaded over Wi-Fi: the most useful for everyday meals.",
          "ca": "A 6 L pressure multicooker with 13 modes, a touchscreen and guided recipes downloaded over Wi-Fi: the most useful for everyday meals."
        }
      },
      {
        "model": "TP-Link Tapo P115 Prise Connectée avec Suivi Conso",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Mini prise Wi-Fi sans hub qui pilote vos appareils existants et mesure leur consommation : l'entrée la plus simple dans la cuisine connectée.",
          "en": "A hub-free mini Wi-Fi plug that controls your existing appliances and measures how much energy they use: the simplest way into the smart kitchen.",
          "de": "WLAN-Mini-Steckdose ohne Hub, die vorhandene Geräte steuert und ihren Verbrauch misst: der einfachste Einstieg in die smarte Küche.",
          "es": "Mini enchufe wifi sin hub que controla tus aparatos de siempre y mide su consumo: la forma más sencilla de empezar con la cocina conectada.",
          "it": "Mini presa Wi-Fi senza hub che comanda gli apparecchi che hai già e ne misura i consumi: il modo più semplice per cominciare con la cucina smart.",
          "nl": "Mini-wifistekker zonder hub die je bestaande apparaten bedient en hun verbruik meet: de eenvoudigste instap in de slimme keuken.",
          "pl": "Mini gniazdko Wi-Fi działające bez huba: steruje urządzeniami, które już masz, i mierzy ich zużycie energii. To najprostszy pierwszy krok w stronę inteligentnej kuchni.",
          "sv": "Liten smart plugg med wifi och utan hubb som styr dina befintliga apparater och mäter deras förbrukning: det enklaste sättet att komma igång med ett smart kök.",
          "us": "A compact Wi-Fi smart plug that needs no hub, controls the appliances you already own and tracks their energy use: the simplest way into a smart kitchen.",
          "ca": "A hub-free mini Wi-Fi plug that controls your existing appliances and tracks their energy use: the simplest way into a smart kitchen."
        }
      },
      {
        "model": "MEATER Plus Thermomètre Sans Fil Bluetooth 50m",
        "role": {
          "fr": "Idéal pour les viandes",
          "en": "Best for cooking meat",
          "de": "Ideal für Fleisch",
          "es": "Ideal para la carne",
          "it": "Ideale per la carne",
          "nl": "Ideaal voor vlees",
          "pl": "Najlepszy do mięsa",
          "sv": "Bäst för kött",
          "us": "Best for cooking meat",
          "ca": "Best for cooking meat"
        },
        "why": {
          "fr": "Sonde entièrement sans fil à double capteur, répéteur Bluetooth intégré au support et cuisson guidée dans l'application.",
          "en": "A fully wireless dual-sensor probe with a Bluetooth repeater built into its charger, plus guided cooking in the app.",
          "de": "Komplett kabelloser Fühler mit Doppelsensor, Bluetooth-Repeater in der Ladestation und geführtem Garen in der App.",
          "es": "Sonda totalmente inalámbrica con doble sensor, repetidor Bluetooth en la base y cocción guiada en la app.",
          "it": "Sonda completamente senza fili a doppio sensore, ripetitore Bluetooth nella base e cottura guidata nell'app.",
          "nl": "Volledig draadloze sonde met dubbele sensor, Bluetooth-repeater in het oplaadblok en begeleid garen in de app.",
          "pl": "W pełni bezprzewodowa sonda z podwójnym czujnikiem, wzmacniaczem Bluetooth wbudowanym w podstawkę ładującą i prowadzeniem krok po kroku w aplikacji.",
          "sv": "Helt trådlös givare med dubbla sensorer, en Bluetooth-förstärkare inbyggd i hållaren och guidad tillagning i appen.",
          "us": "A fully wireless dual-sensor probe with a Bluetooth repeater built into its charging dock and guided cooking in the app.",
          "ca": "A fully wireless dual-sensor probe with a Bluetooth repeater built into its block and guided cooking in the app."
        }
      }
    ]
  },
  "guide-domotique-economie-energie-2026": {
    "question": {
      "fr": "Quel est le meilleur équipement domotique pour économiser l’énergie en 2026 ?",
      "en": "What is the best smart home tech for saving energy in 2026?",
      "de": "Welche Smart-Home-Geräte sparen 2026 am besten Energie?",
      "es": "¿Cuál es el mejor equipo domótico para ahorrar energía en 2026?",
      "it": "Qual è il miglior dispositivo domotico per risparmiare energia nel 2026?",
      "nl": "Wat is de beste domotica om in 2026 energie te besparen?",
      "pl": "Jakie urządzenie inteligentnego domu najlepiej pomoże oszczędzać energię w 2026 roku?",
      "sv": "Vilken smarthemsprodukt är bäst för att spara energi 2026?",
      "us": "What is the best smart home gear for saving energy in 2026?",
      "ca": "What is the best smart home equipment to save energy in 2026?"
    },
    "picks": [
      {
        "model": "tado Smart Radiator Thermostat X Starter Kit",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Il agit sur le chauffage, premier poste de consommation : régulation pièce par pièce, Thread et Matter via le Bridge X, pose sans outil.",
          "en": "It tackles heating, the biggest energy user in the home: room-by-room control, Thread and Matter via the Bridge X, and tool-free fitting.",
          "de": "Es setzt bei der Heizung an, dem größten Verbrauchsposten: Regelung pro Raum, Thread und Matter über die Bridge X, Montage ohne Werkzeug.",
          "es": "Actúa sobre la calefacción, la mayor partida de consumo: regulación por habitación, Thread y Matter mediante el Bridge X, montaje sin herramientas.",
          "it": "Agisce sul riscaldamento, la prima voce di consumo: regolazione stanza per stanza, Thread e Matter tramite il Bridge X, montaggio senza attrezzi.",
          "nl": "Pakt de verwarming aan, de grootste verbruikspost: regeling per kamer, Thread en Matter via de Bridge X, montage zonder gereedschap.",
          "pl": "Wpływa na ogrzewanie, które odpowiada za największą część zużycia energii: regulacja w każdym pomieszczeniu osobno, Thread i Matter przez Bridge X, montaż bez narzędzi.",
          "sv": "Den tar sig an uppvärmningen, hemmets största energipost: styrning rum för rum, Thread och Matter via Bridge X och montering utan verktyg.",
          "us": "It goes after heating, the biggest energy user in the home: room-by-room control, Thread and Matter through the Bridge X, and tool-free installation.",
          "ca": "It targets heating, usually the biggest energy user: room-by-room control, Thread and Matter via the Bridge X, tool-free installation."
        }
      },
      {
        "model": "TP-Link Tapo P110M",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Prise Wi-Fi certifiée Matter qui mesure la consommation en kWh de chaque appareil : le moyen le plus simple de repérer les gaspillages.",
          "en": "A Matter-certified Wi-Fi plug that meters each appliance in kWh: the simplest way to find where energy is wasted.",
          "de": "Matter-zertifizierte WLAN-Steckdose, die jedes Gerät in kWh misst: der einfachste Weg, Verschwendung aufzuspüren.",
          "es": "Enchufe wifi con certificación Matter que mide el consumo en kWh de cada aparato: la forma más sencilla de detectar dónde se derrocha energía.",
          "it": "Presa Wi-Fi certificata Matter che misura in kWh i consumi di ogni apparecchio: il modo più semplice per scovare gli sprechi.",
          "nl": "Matter-gecertificeerde wifi-stekker die elk apparaat in kWh meet: de eenvoudigste manier om verspilling op te sporen.",
          "pl": "Gniazdko Wi-Fi z certyfikatem Matter, które mierzy zużycie energii każdego podłączonego urządzenia w kWh – najprostszy sposób, by wykryć, gdzie marnuje się prąd.",
          "sv": "Matter-certifierad smart plugg med wifi som mäter varje apparats förbrukning i kWh: det enklaste sättet att hitta var energin går till spillo.",
          "us": "A Matter-certified Wi-Fi smart plug that measures each appliance's use in kWh: the simplest way to spot wasted energy.",
          "ca": "A Matter-certified Wi-Fi plug that meters each appliance in kWh: the simplest way to find where energy is wasted."
        }
      },
      {
        "model": "Shelly Pro 3EM",
        "role": {
          "fr": "Idéal pour suivre toute la maison",
          "en": "Best for whole-home monitoring",
          "de": "Ideal für das ganze Haus",
          "es": "Ideal para medir toda la vivienda",
          "it": "Ideale per monitorare tutta la casa",
          "nl": "Ideaal voor de hele woning",
          "pl": "Najlepszy do monitorowania całego domu",
          "sv": "Bäst för att följa hela hemmets förbrukning",
          "us": "Best for whole-home monitoring",
          "ca": "Best for whole-home monitoring"
        },
        "why": {
          "fr": "Compteur sur rail DIN mono ou triphasé, mesure bidirectionnelle utile avec le solaire ; installation par un électricien qualifié.",
          "en": "A single- or three-phase DIN-rail meter with two-way metering, useful if you have solar; it must be installed by a qualified electrician.",
          "de": "Ein- oder dreiphasiger Hutschienenzähler mit Messung in beide Richtungen, ideal mit Solaranlage; Einbau durch eine Elektrofachkraft.",
          "es": "Medidor para carril DIN monofásico o trifásico, con medición bidireccional útil con placas solares; instalación por un electricista cualificado.",
          "it": "Misuratore su guida DIN monofase o trifase, con misura bidirezionale utile con il fotovoltaico; installazione a cura di un elettricista qualificato.",
          "nl": "Eenfase- of driefasemeter voor de DIN-rail met meting in twee richtingen, handig bij zonnepanelen; installatie door een erkende installateur.",
          "pl": "Licznik energii na szynę DIN do instalacji jedno- lub trójfazowych, z pomiarem dwukierunkowym przydatnym przy fotowoltaice; montaż powierz wykwalifikowanemu elektrykowi.",
          "sv": "Mätare för DIN-skena, enfas eller trefas, som mäter i båda riktningarna – praktiskt om du har solceller. Installeras av en behörig elektriker.",
          "us": "A single- or three-phase DIN-rail meter with bidirectional metering, useful with solar; it must be installed by a licensed electrician.",
          "ca": "Single- or three-phase DIN-rail meter with two-way metering, useful with solar; installation by a licensed electrician."
        }
      }
    ]
  },
  "guide-purificateur-air-2026": {
    "question": {
      "fr": "Quel est le meilleur purificateur d'air en 2026 ?",
      "en": "What is the best air purifier in 2026?",
      "de": "Welcher ist der beste Luftreiniger 2026?",
      "es": "¿Cuál es el mejor purificador de aire en 2026?",
      "it": "Qual è il miglior purificatore d'aria nel 2026?",
      "nl": "Wat is de beste luchtreiniger in 2026?",
      "pl": "Jaki jest najlepszy oczyszczacz powietrza w 2026 roku?",
      "sv": "Vilken luftrenare är bäst 2026?",
      "us": "What is the best air purifier in 2026?",
      "ca": "What is the best air purifier in 2026?"
    },
    "picks": [
      {
        "model": "Levoit Core 300S",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Filtre HEPA H13, CADR d'environ 240 m³/h, Wi-Fi et compatibilité Alexa et Google, avec des filtres abordables : idéal pour une chambre.",
          "en": "H13 HEPA filter, a CADR of around 240 m³/h, Wi-Fi and Alexa and Google support, with affordable filters: ideal for a bedroom.",
          "de": "HEPA-H13-Filter, CADR von rund 240 m³/h, WLAN sowie Alexa- und Google-Unterstützung mit günstigen Filtern: ideal fürs Schlafzimmer.",
          "es": "Filtro HEPA H13, CADR de unos 240 m³/h, wifi y compatibilidad con Alexa y Google, con filtros asequibles: ideal para un dormitorio.",
          "it": "Filtro HEPA H13, CADR di circa 240 m³/h, Wi-Fi e compatibilità con Alexa e Google, con filtri economici: ideale per una camera da letto.",
          "nl": "HEPA H13-filter, CADR rond 240 m³/h, wifi en Alexa- en Google-ondersteuning, met betaalbare filters: ideaal voor een slaapkamer.",
          "pl": "Filtr HEPA H13, CADR ok. 240 m³/h, Wi-Fi i zgodność z Alexą i Asystentem Google, a filtry na wymianę są niedrogie – idealny do sypialni.",
          "sv": "HEPA H13-filter, CADR på ca 240 m³/h, wifi och stöd för Alexa och Google, med prisvärda ersättningsfilter: perfekt för sovrummet.",
          "us": "H13 HEPA filter, a CADR of around 141 CFM (240 m³/h), Wi-Fi and Alexa and Google support, with affordable replacement filters: ideal for a bedroom.",
          "ca": "H13 HEPA filter, a CADR of around 240 m³/h, Wi-Fi and Alexa and Google support, with affordable filters: ideal for a bedroom."
        }
      },
      {
        "model": "Xiaomi Smart Air Purifier 4",
        "role": {
          "fr": "Meilleur compromis connecté",
          "en": "Best smart all-rounder",
          "de": "Bester vernetzter Mittelklasse-Kompromiss",
          "es": "Mejor equilibrio con app",
          "it": "Il miglior compromesso smart",
          "nl": "Beste slimme middenklasser",
          "pl": "Najlepszy kompromis wśród modeli z Wi-Fi",
          "sv": "Bästa smarta mellanklassmodellen",
          "us": "Best smart midrange pick",
          "ca": "Best smart mid-range"
        },
        "why": {
          "fr": "Un CADR de 400 m³/h, un capteur PM2.5 laser et un écran OLED, avec l'application Mi Home et la compatibilité Alexa et Google.",
          "en": "A 400 m³/h CADR, a laser PM2.5 sensor and an OLED display, with the Mi Home app and Alexa and Google support.",
          "de": "CADR von 400 m³/h, Laser-PM2.5-Sensor und OLED-Display, dazu die Mi-Home-App sowie Alexa- und Google-Unterstützung.",
          "es": "CADR de 400 m³/h, sensor láser PM2,5 y pantalla OLED, con la app Mi Home y compatibilidad con Alexa y Google.",
          "it": "CADR di 400 m³/h, sensore laser PM2.5 e display OLED, con app Mi Home e compatibilità con Alexa e Google.",
          "nl": "CADR van 400 m³/h, laser-PM2.5-sensor en OLED-scherm, met de Mi Home-app en Alexa- en Google-ondersteuning.",
          "pl": "CADR 400 m³/h, laserowy czujnik PM2.5 i ekran OLED, z aplikacją Mi Home oraz zgodnością z Alexą i Google.",
          "sv": "CADR på 400 m³/h, laserbaserad PM2,5-sensor och OLED-display, med appen Mi Home och stöd för Alexa och Google.",
          "us": "A CADR of 235 CFM (400 m³/h), a laser PM2.5 sensor and an OLED display, with the Mi Home app and Alexa and Google support.",
          "ca": "A 400 m³/h CADR, a laser PM2.5 sensor and an OLED display, with the Mi Home app and Alexa and Google support."
        }
      },
      {
        "model": "Philips AC2939/10",
        "role": {
          "fr": "Idéal pour les grandes pièces",
          "en": "Best for large rooms",
          "de": "Ideal für große Räume",
          "es": "Ideal para espacios grandes",
          "it": "Ideale per ambienti ampi",
          "nl": "Ideaal voor grote ruimtes",
          "pl": "Najlepszy do dużych pomieszczeń",
          "sv": "Bäst för stora rum",
          "us": "Best for large rooms",
          "ca": "Best for large rooms"
        },
        "why": {
          "fr": "Annoncé jusqu'à 98 m² avec un CADR de 380 m³/h, il ajuste sa vitesse grâce au capteur AeraSense et descend à 15 dB en mode veille.",
          "en": "Rated for up to 98 m² with a 380 m³/h CADR, it adjusts its speed via the AeraSense sensor and drops to 15 dB in sleep mode.",
          "de": "Für bis zu 98 m² mit 380 m³/h CADR ausgelegt, passt er die Stufe per AeraSense-Sensor an und erreicht im Schlafmodus 15 dB.",
          "es": "Pensado para hasta 98 m² según el fabricante, con un CADR de 380 m³/h, ajusta su velocidad con el sensor AeraSense y baja a 15 dB en modo noche.",
          "it": "Dichiarato fino a 98 m² con CADR di 380 m³/h, regola la velocità tramite il sensore AeraSense e scende a 15 dB in modalità sleep.",
          "nl": "Geschikt tot 98 m² met een CADR van 380 m³/h, past zijn stand aan via de AeraSense-sensor en haalt 15 dB in slaapmodus.",
          "pl": "Według producenta do 98 m² przy CADR 380 m³/h; dzięki czujnikowi AeraSense sam dobiera prędkość, a w trybie nocnym schodzi do 15 dB.",
          "sv": "Klarar upp till 98 m² enligt tillverkaren med en CADR på 380 m³/h, anpassar fläkthastigheten med AeraSense-sensorn och går ner till 15 dB i nattläge.",
          "us": "Rated for rooms up to 1,055 sq ft (98 m²) with a CADR of 224 CFM (380 m³/h), it adjusts its speed with the AeraSense sensor and drops to 15 dB in sleep mode.",
          "ca": "Rated for up to 98 m² with a 380 m³/h CADR, it adjusts its speed via the AeraSense sensor and drops to 15 dB in sleep mode."
        }
      }
    ]
  },
  "guide-robot-aspirateur-2026": {
    "question": {
      "fr": "Quel est le meilleur robot aspirateur en 2026 ?",
      "en": "What is the best robot vacuum in 2026?",
      "de": "Welcher ist der beste Saugroboter 2026?",
      "es": "¿Cuál es el mejor robot aspirador en 2026?",
      "it": "Qual è il miglior robot aspirapolvere nel 2026?",
      "nl": "Wat is de beste robotstofzuiger in 2026?",
      "pl": "Jaki jest najlepszy robot sprzątający w 2026 roku?",
      "sv": "Vilken robotdammsugare är bäst 2026?",
      "us": "What is the best robot vacuum in 2026?",
      "ca": "What is the best robot vacuum in 2026?"
    },
    "picks": [
      {
        "model": "Roborock Qrevo Curv",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "18 500 Pa annoncés, LiDAR, serpillères rotatives qui atteignent les plinthes et station qui vide, lave à l’eau chaude et sèche.",
          "en": "Rated at 18,500 Pa, with LiDAR, rotating mops that reach the skirting boards and a dock that empties, hot-washes and dries.",
          "de": "Laut Hersteller 18.500 Pa, LiDAR, rotierende Mopps bis an die Sockelleisten und eine Station, die entleert, warm wäscht und trocknet.",
          "es": "18.500 Pa anunciados, LiDAR, mopas giratorias que llegan a los rodapiés y base que vacía el depósito, lava las mopas con agua caliente y las seca.",
          "it": "18.500 Pa dichiarati, LiDAR, panni rotanti che arrivano ai battiscopa e base che svuota il contenitore, lava i panni con acqua calda e li asciuga.",
          "nl": "Opgegeven 18.500 Pa, LiDAR, roterende dweilen tot aan de plinten en een station dat leegt, warm wast en droogt.",
          "pl": "Deklarowane 18 500 Pa, LiDAR, obrotowe mopy sięgające do listew przypodłogowych oraz stacja, która opróżnia pojemnik, myje mopy gorącą wodą i je suszy.",
          "sv": "18 500 Pa enligt tillverkaren, LiDAR, roterande moppar som når ända ut till golvlisterna och en station som tömmer, tvättar med varmt vatten och torkar.",
          "us": "Rated at 18,500 Pa, with LiDAR, spinning mops that reach right to the baseboards and a dock that empties the bin, washes the mops in hot water and dries them.",
          "ca": "Rated at 18,500 Pa, with LiDAR, rotating mops that reach the baseboards and a dock that empties, hot-washes and dries."
        }
      },
      {
        "model": "Roborock Q7 M5+",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "L’essentiel en entrée de gamme : navigation LiDAR, 10 000 Pa annoncés, brosse anti-emmêlement et vidage automatique (sac de 2,7 L).",
          "en": "The essentials at entry level: LiDAR navigation, a quoted 10,000 Pa, an anti-tangle brush and auto-emptying into a 2.7 L bag.",
          "de": "Das Wesentliche im Einstieg: LiDAR-Navigation, angegebene 10.000 Pa, verhedderungsarme Bürste und Absaugstation mit 2,7-L-Beutel.",
          "es": "Lo esencial a precio de gama de entrada: navegación LiDAR, 10.000 Pa anunciados, cepillo antienredos y autovaciado en bolsa de 2,7 L.",
          "it": "L’essenziale in fascia d’ingresso: navigazione LiDAR, 10.000 Pa dichiarati, spazzola anti-groviglio e svuotamento automatico (sacchetto da 2,7 L).",
          "nl": "De basis in het instapsegment: LiDAR-navigatie, opgegeven 10.000 Pa, antiklitborstel en automatisch legen in een zak van 2,7 l.",
          "pl": "Wszystko, co najważniejsze, w modelu z niższej półki: nawigacja LiDAR, deklarowane 10 000 Pa, szczotka zapobiegająca plątaniu i automatyczne opróżnianie (worek 2,7 l).",
          "sv": "Det viktigaste i instegsklassen: LiDAR-navigering, angivna 10 000 Pa, trasselfri borste och självtömning i en påse på 2,7 liter.",
          "us": "The essentials at entry level: LiDAR navigation, a quoted 10,000 Pa, an anti-tangle brush and self-emptying into a 2.7 L bag.",
          "ca": "The essentials at entry level: LiDAR navigation, a quoted 10,000 Pa, an anti-tangle brush and auto-emptying into a 2.7 L bag."
        }
      },
      {
        "model": "Dreame X50 Ultra Complete",
        "role": {
          "fr": "Idéal animaux et seuils",
          "en": "Best for pets and thresholds",
          "de": "Ideal für Haustiere und Schwellen",
          "es": "Ideal para mascotas y umbrales",
          "it": "Ideale con animali e soglie alte",
          "nl": "Ideaal voor huisdieren en drempels",
          "pl": "Najlepszy przy zwierzętach i wysokich progach",
          "sv": "Bäst för husdjur och trösklar",
          "us": "Best for pets and thresholds",
          "ca": "Best for pets and thresholds"
        },
        "why": {
          "fr": "20 000 Pa annoncés, double brosse anti-emmêlement et système ProLeap qui franchit jusqu’à 6 cm selon le fabricant.",
          "en": "Rated at 20,000 Pa, with an anti-tangle twin brush and a ProLeap system that climbs up to 6 cm, according to the manufacturer.",
          "de": "Laut Hersteller 20.000 Pa, verhedderungsfreie Doppelbürste und ProLeap-System, das bis zu 6 cm hohe Hindernisse überwindet.",
          "es": "20.000 Pa anunciados, cepillo doble antienredos y sistema ProLeap, que supera obstáculos de hasta 6 cm según el fabricante.",
          "it": "20.000 Pa dichiarati, doppia spazzola anti-groviglio e sistema ProLeap che supera ostacoli fino a 6 cm, secondo il produttore.",
          "nl": "Opgegeven 20.000 Pa, dubbele antiklitborstel en een ProLeap-systeem dat volgens de fabrikant tot 6 cm overwint.",
          "pl": "Deklarowane 20 000 Pa, podwójna szczotka zapobiegająca plątaniu się sierści i system ProLeap, który według producenta pokonuje progi do 6 cm.",
          "sv": "Angivna 20 000 Pa, dubbla trasselfria borstar och ProLeap-systemet som enligt tillverkaren tar sig över trösklar på upp till 6 cm.",
          "us": "Rated at 20,000 Pa, with an anti-tangle twin brush and a ProLeap system that climbs obstacles up to 2.4 in (6 cm), according to the manufacturer.",
          "ca": "Rated at 20,000 Pa, with an anti-tangle twin brush and a ProLeap system that climbs up to 6 cm, according to the manufacturer."
        }
      }
    ]
  },
  "histoire-evolution-airfryer": {
    "question": {
      "fr": "Quel airfryer choisir en 2026, après 15 ans d’évolution ?",
      "en": "Which air fryer should you choose in 2026, after 15 years of development?",
      "de": "Welche Heißluftfritteuse sollte man 2026 nach 15 Jahren Entwicklung wählen?",
      "es": "¿Qué freidora de aire elegir en 2026, tras 15 años de evolución?",
      "it": "Quale friggitrice ad aria scegliere nel 2026, dopo 15 anni di evoluzione?",
      "nl": "Welke airfryer kies je in 2026, na 15 jaar evolutie?",
      "pl": "Jaką frytkownicę beztłuszczową wybrać w 2026 roku, po 15 latach ewolucji tych urządzeń?",
      "sv": "Vilken airfryer ska du välja 2026, efter 15 års utveckling?",
      "us": "After 15 years of evolution, which air fryer should you buy in 2026?",
      "ca": "Which air fryer should you choose in 2026, after 15 years of evolution?"
    },
    "picks": [
      {
        "model": "Ninja Foodi FlexDrawer 10.4L Double Zone",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "L’aboutissement de la double zone lancée par Ninja en 2020 : deux zones indépendantes ou un grand tiroir de 10,4 L pour un poulet entier.",
          "en": "The culmination of the dual-zone design Ninja launched in 2020: two independent zones or one large 10.4 L drawer for a whole chicken.",
          "de": "Die Weiterentwicklung der Dual-Zone-Idee von Ninja aus 2020: zwei unabhängige Zonen oder eine große 10,4-L-Schublade für ein ganzes Hähnchen.",
          "es": "La culminación de la doble zona que Ninja lanzó en 2020: dos zonas independientes o un gran cajón de 10,4 L para un pollo entero.",
          "it": "Il punto d’arrivo della doppia zona lanciata da Ninja nel 2020: due zone indipendenti o un grande cassetto da 10,4 L per un pollo intero.",
          "nl": "Het sluitstuk van de dual zone die Ninja in 2020 lanceerde: twee onafhankelijke zones of één grote lade van 10,4 L voor een hele kip.",
          "pl": "Najdojrzalsza wersja koncepcji dwóch stref, którą marka Ninja wprowadziła w 2020 roku: dwie niezależne strefy albo jedna duża szuflada 10,4 l, w której zmieści się cały kurczak.",
          "sv": "Den mest utvecklade versionen av tvåzonstekniken som Ninja lanserade 2020: två fristående zoner eller en stor låda på 10,4 liter för en hel kyckling.",
          "us": "The culmination of the dual-zone design Ninja launched in 2020: two independent zones or one large 11 qt (10.4 L) drawer for a whole chicken.",
          "ca": "The culmination of the dual zone Ninja launched in 2020: two independent zones or one large 10.4 L drawer for a whole chicken."
        }
      },
      {
        "model": "Philips Airfryer Série 3000 XL - 6.2L",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "L’héritier direct du premier Airfryer de 2010 : un panier unique de 6,2 L, la technologie Rapid Air et une utilisation très simple pour 2 à 4 personnes.",
          "en": "The direct descendant of the original 2010 Airfryer: a single 6.2 L basket, Rapid Air technology and very simple controls, for 2 to 4 people.",
          "de": "Der direkte Erbe des ersten Airfryers von 2010: ein 6,2-L-Einzelkorb, Rapid-Air-Technologie und sehr einfache Bedienung für 2 bis 4 Personen.",
          "es": "La heredera directa de la primera Airfryer de 2010: una cesta única de 6,2 L, tecnología Rapid Air y un uso muy sencillo para 2 a 4 personas.",
          "it": "L’erede diretta della prima Airfryer del 2010: un cestello unico da 6,2 L, tecnologia Rapid Air e un uso semplicissimo per 2-4 persone.",
          "nl": "De directe erfgenaam van de eerste Airfryer uit 2010: één mand van 6,2 L, Rapid Air-technologie en heel eenvoudig gebruik voor 2 tot 4 personen.",
          "pl": "Bezpośredni następca pierwszego modelu Airfryer z 2010 roku: jeden kosz 6,2 l, technologia Rapid Air i bardzo prosta obsługa, dla 2–4 osób.",
          "sv": "Den direkta arvtagaren till den första Airfryer-modellen från 2010: en enda korg på 6,2 liter, Rapid Air-tekniken och mycket enkel användning för 2–4 personer.",
          "us": "The direct heir of the first Airfryer from 2010: a single 6.6 qt (6.2 L) basket, Rapid Air technology and dead-simple operation for 2 to 4 people.",
          "ca": "The direct heir of the first 2010 Airfryer: a single 6.2 L basket, Rapid Air technology and very simple use for 2 to 4 people."
        }
      },
      {
        "model": "Tefal ActiFry Genius XL 2in1 - 1.7kg",
        "role": {
          "fr": "Idéal pour les frites sans secouer",
          "en": "Best for chips without shaking",
          "de": "Ideal für Pommes ohne Schütteln",
          "es": "Ideal para patatas fritas sin tener que agitar",
          "it": "Ideale per le patatine, senza scuotere",
          "nl": "Ideaal voor friet zonder schudden",
          "pl": "Idealna do frytek, bez potrząsania koszem",
          "sv": "Bäst för pommes frites utan att skaka",
          "us": "Best for fries without shaking",
          "ca": "Best for fries without shaking"
        },
        "why": {
          "fr": "La descendante de l’ActiFry de 2006 : la pale remue les aliments seule et la grille supérieure permet de cuire sur deux niveaux.",
          "en": "The descendant of the 2006 ActiFry: the paddle stirs the food for you and the upper rack lets you cook on two levels.",
          "de": "Der Nachfahre des ActiFry von 2006: Der Rührarm wendet das Gargut selbst, und der obere Grilleinsatz ermöglicht zwei Ebenen.",
          "es": "La descendiente de la ActiFry de 2006: la pala remueve sola los alimentos y la rejilla superior permite cocinar en dos niveles.",
          "it": "La discendente dell’ActiFry del 2006: la pala mescola da sola gli alimenti e la griglia superiore permette di cuocere su due livelli.",
          "nl": "De nazaat van de ActiFry uit 2006: de roerarm schept het eten zelf om en het bovenrooster maakt twee niveaus mogelijk.",
          "pl": "Kontynuacja modelu ActiFry z 2006 roku: łopatka sama miesza składniki, a górny ruszt pozwala przyrządzać potrawy na dwóch poziomach.",
          "sv": "En ättling till ActiFry från 2006: paddeln rör om maten av sig själv och det övre gallret gör att du kan laga mat på två nivåer.",
          "us": "The descendant of the 2006 ActiFry: the paddle stirs the food for you, and the upper rack lets you cook on two levels.",
          "ca": "The descendant of the 2006 ActiFry: the paddle stirs the food on its own and the upper rack lets you cook on two levels."
        }
      }
    ]
  },
  "meilleur-airfryer-petit-budget": {
    "question": {
      "fr": "Quel est le meilleur airfryer pas cher en 2026 ?",
      "en": "What is the best budget air fryer in 2026?",
      "de": "Welche ist die beste günstige Heißluftfritteuse 2026?",
      "es": "¿Cuál es la mejor freidora de aire barata en 2026?",
      "it": "Qual è la migliore friggitrice ad aria economica nel 2026?",
      "nl": "Wat is de beste goedkope airfryer in 2026?",
      "pl": "Jaka jest najlepsza tania frytkownica beztłuszczowa w 2026 roku?",
      "sv": "Vilken billig airfryer är bäst 2026?",
      "us": "What is the best budget air fryer in 2026?",
      "ca": "What is the best budget air fryer in 2026?"
    },
    "picks": [
      {
        "model": "Moulinex Easy Fry Max 5L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Le plus grand panier de l’entrée de gamme : 5 litres, 10 programmes et un écran tactile, assez pour une famille de trois ou quatre.",
          "en": "The largest basket at entry level: 5 litres, 10 programmes and a touchscreen, enough for a family of three or four.",
          "de": "Der größte Korb im Einstiegssegment: 5 Liter, 10 Programme und Touchscreen, genug für eine Familie mit drei oder vier Personen.",
          "es": "La cesta más grande de la gama de entrada: 5 litros, 10 programas y pantalla táctil, suficiente para una familia de tres o cuatro.",
          "it": "Il cestello più grande della fascia d’ingresso: 5 litri, 10 programmi e display touch, sufficiente per una famiglia di tre o quattro persone.",
          "nl": "De grootste mand in de instapklasse: 5 liter, 10 programma’s en een touchscreen, genoeg voor een gezin van drie of vier.",
          "pl": "Największy kosz wśród tanich modeli: 5 l, 10 programów i ekran dotykowy – wystarczy dla trzy- lub czteroosobowej rodziny.",
          "sv": "Den största korgen i instegsklassen: 5 liter, 10 program och pekskärm, tillräckligt för en familj på tre eller fyra.",
          "us": "The largest basket at entry level: 5.3 qt (5 L), 10 presets and a touchscreen, enough for a family of three or four.",
          "ca": "The largest basket at entry level: 5 litres, 10 programs and a touchscreen, enough for a family of three or four."
        }
      },
      {
        "model": "Xiaomi Smart Air Fryer Pro 4L",
        "role": {
          "fr": "Meilleur connecté petit budget",
          "en": "Best budget smart pick",
          "de": "Beste günstige vernetzte Wahl",
          "es": "Mejor conectada y barata",
          "it": "La migliore smart a basso costo",
          "nl": "Beste betaalbare slimme keuze",
          "pl": "Najlepszy inteligentny model na niewielki budżet",
          "sv": "Bästa smarta budgetvalet",
          "us": "Best budget smart pick",
          "ca": "Best budget smart pick"
        },
        "why": {
          "fr": "Écran OLED, fenêtre de contrôle, 11 modes et application Xiaomi Home : des fonctions rares dans l’entrée de gamme.",
          "en": "OLED screen, viewing window, 11 modes and the Xiaomi Home app: features that are rare at entry level.",
          "de": "OLED-Display, Sichtfenster, 11 Modi und Xiaomi-Home-App: Funktionen, die im Einstiegssegment selten sind.",
          "es": "Pantalla OLED, ventana para vigilar la cocción, 11 modos y app Xiaomi Home: funciones poco habituales en la gama de entrada.",
          "it": "Display OLED, oblò di controllo, 11 modalità e app Xiaomi Home: funzioni rare nella fascia d’ingresso.",
          "nl": "OLED-scherm, kijkvenster, 11 standen en de Xiaomi Home-app: functies die zeldzaam zijn in de instapklasse.",
          "pl": "Ekran OLED, okienko podglądu, 11 trybów i aplikacja Xiaomi Home – funkcje rzadko spotykane w tanich modelach.",
          "sv": "OLED-skärm, tittfönster, 11 lägen och appen Xiaomi Home: funktioner som är ovanliga i instegsklassen.",
          "us": "OLED screen, viewing window, 11 modes and the Xiaomi Home app: features that are rare at entry level.",
          "ca": "OLED screen, viewing window, 11 modes and the Xiaomi Home app: features that are rare at entry level."
        }
      }
    ]
  },
  "ninja-vs-philips-quel-choisir": {
    "question": {
      "fr": "Ninja ou Philips : quel airfryer choisir en 2026 ?",
      "en": "Ninja or Philips: which air fryer should you choose in 2026?",
      "de": "Ninja oder Philips: Welche Heißluftfritteuse sollte man 2026 wählen?",
      "es": "Ninja o Philips: ¿qué freidora de aire elegir en 2026?",
      "it": "Ninja o Philips: quale friggitrice ad aria scegliere nel 2026?",
      "nl": "Ninja of Philips: welke airfryer kies je in 2026?",
      "pl": "Ninja czy Philips: którą frytkownicę beztłuszczową wybrać w 2026 roku?",
      "sv": "Ninja eller Philips: vilken airfryer ska du välja 2026?",
      "us": "Ninja or Philips: which air fryer should you buy in 2026?",
      "ca": "Ninja or Philips: which air fryer should you choose in 2026?"
    },
    "picks": [
      {
        "model": "Ninja Foodi FlexDrawer 10.4L Double Zone",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Ses 10,4 L se partagent en deux zones synchronisées ou en un seul grand tiroir MegaZone, idéal pour les familles de 4 personnes et plus.",
          "en": "Its 10.4 L capacity splits into two synced zones or one large MegaZone drawer, ideal for families of four or more.",
          "de": "Die 10,4 L lassen sich in zwei synchronisierte Zonen oder eine große MegaZone-Schublade aufteilen, ideal für Familien ab vier Personen.",
          "es": "Sus 10,4 L se dividen en dos zonas sincronizadas o en un gran cajón MegaZone, ideal para familias de cuatro o más personas.",
          "it": "I suoi 10,4 L si dividono in due zone sincronizzate o in un unico grande cassetto MegaZone, ideale per famiglie da quattro persone in su.",
          "nl": "De 10,4 L is te verdelen in twee gesynchroniseerde zones of één grote MegaZone-lade, ideaal voor gezinnen van vier of meer.",
          "pl": "10,4 l można podzielić na dwie zsynchronizowane strefy albo wykorzystać jako jedną dużą szufladę MegaZone – idealne rozwiązanie dla rodzin czteroosobowych i większych.",
          "sv": "Volymen på 10,4 liter delas upp i två synkroniserade zoner eller blir en enda stor MegaZone-låda: perfekt för familjer på fyra personer eller fler.",
          "us": "Its 11 qt (10.4 L) capacity splits into two synced zones or one large MegaZone drawer, ideal for families of four or more.",
          "ca": "Its 10.4 L splits into two synced zones or one large MegaZone drawer, ideal for families of four or more."
        }
      },
      {
        "model": "Philips Airfryer Série 3000 XL - 6.2L",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Panier unique de 6,2 L, technologie Rapid Air et 14 modes de cuisson : simple et compact, il suffit aux foyers de 1 à 4 personnes.",
          "en": "A single 6.2 L basket, Rapid Air technology and 14 cooking modes: simple, compact and big enough for one to four people.",
          "de": "Einzelkorb mit 6,2 L, Rapid-Air-Technologie und 14 Garmodi: einfach und kompakt, ideal für Haushalte mit ein bis vier Personen.",
          "es": "Cesta única de 6,2 L, tecnología Rapid Air y 14 modos de cocción: sencilla y compacta, basta para hogares de una a cuatro personas.",
          "it": "Cestello unico da 6,2 L, tecnologia Rapid Air e 14 modalità di cottura: semplice e compatta, basta per 1-4 persone.",
          "nl": "Eén mand van 6,2 L, Rapid Air-technologie en 14 bereidingswijzen: eenvoudig en compact, genoeg voor huishoudens van één tot vier personen.",
          "pl": "Jeden kosz 6,2 l, technologia Rapid Air i 14 trybów przyrządzania: prosta i kompaktowa, wystarczy dla gospodarstwa domowego liczącego 1–4 osoby.",
          "sv": "En enda korg på 6,2 liter, Rapid Air-tekniken och 14 tillagningslägen: enkel och kompakt, och räcker för hushåll med en till fyra personer.",
          "us": "A single 6.6 qt (6.2 L) basket, Rapid Air technology and 14 cooking modes: simple and compact, it's enough for households of one to four.",
          "ca": "A single 6.2 L basket, Rapid Air technology and 14 cooking modes: simple and compact, it is enough for households of one to four."
        }
      },
      {
        "model": "Philips Airfryer Combi XXL Connecté - 8.3L",
        "role": {
          "fr": "Le plus connecté",
          "en": "Best smart model",
          "de": "Bestes vernetztes Modell",
          "es": "La más conectada",
          "it": "La più smart",
          "nl": "Beste verbonden model",
          "pl": "Najbardziej rozbudowana łączność",
          "sv": "Mest uppkopplad",
          "us": "Best smart model",
          "ca": "Best smart model"
        },
        "why": {
          "fr": "8,3 L, 22 fonctions, thermomètre à aliments intégré et pilotage Wi-Fi via l’application HomeID, pour ceux qui cuisinent un grand plat à la fois.",
          "en": "8.3 L, 22 functions, a built-in temperature probe and Wi-Fi control via the HomeID app, for anyone who cooks one large dish at a time.",
          "de": "8,3 L, 22 Funktionen, integriertes Speisethermometer und WLAN-Steuerung per HomeID-App, für alle, die ein großes Gericht auf einmal zubereiten.",
          "es": "8,3 L, 22 funciones, termómetro de alimentos integrado y control por wifi con la app HomeID, para quien cocina un plato grande cada vez.",
          "it": "8,3 L, 22 funzioni, termometro per alimenti integrato e controllo Wi-Fi tramite l’app HomeID, per chi cucina un grande piatto alla volta.",
          "nl": "8,3 L, 22 functies, ingebouwde voedselthermometer en wifi-bediening via de HomeID-app, voor wie één groot gerecht tegelijk bereidt.",
          "pl": "8,3 l, 22 funkcje, wbudowany termometr do potraw i sterowanie przez Wi-Fi w aplikacji HomeID – dla tych, którzy przygotowują naraz jedno duże danie.",
          "sv": "8,3 liter, 22 funktioner, inbyggd stektermometer och wifi-styrning via appen HomeID, för dig som lagar en stor rätt i taget.",
          "us": "8.8 qt (8.3 L), 22 functions, a built-in temperature probe and Wi-Fi control through the HomeID app, for anyone who cooks one big dish at a time.",
          "ca": "8.3 L, 22 functions, a built-in food thermometer and Wi-Fi control via the HomeID app, for those who cook one large dish at a time."
        }
      }
    ]
  },
  "robot-cuiseur-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur robot cuiseur connecté en 2026 ?",
      "en": "What is the best smart cooking food processor in 2026?",
      "de": "Welcher ist der beste vernetzte Küchenprozessor 2026?",
      "es": "¿Cuál es el mejor robot de cocina conectado en 2026?",
      "it": "Qual è il miglior robot da cucina smart nel 2026?",
      "nl": "Wat is de beste verbonden keukenrobot in 2026?",
      "pl": "Jaki jest najlepszy inteligentny robot kuchenny z funkcją gotowania w 2026 roku?",
      "sv": "Vilken smart köksmaskin med kokfunktion är bäst 2026?",
      "us": "What is the best Thermomix-style smart cooking machine in 2026?",
      "ca": "What is the best smart all-in-one cooking machine in 2026?"
    },
    "picks": [
      {
        "model": "Moulinex i-Companion Touch XL",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Écran tactile, Wi-Fi, balance intégrée et bol de 4,5 L : l’alternative au Thermomix la plus complète, avec une application sans abonnement obligatoire.",
          "en": "Touchscreen, Wi-Fi, built-in scales and a 4.5 L bowl: the most complete Thermomix alternative, with a recipe app that needs no subscription.",
          "de": "Touchscreen, WLAN, integrierte Waage und 4,5-L-Topf: die vollständigste Thermomix-Alternative, mit Rezept-App ohne Abopflicht.",
          "es": "Pantalla táctil, wifi, báscula integrada y vaso de 4,5 L: la alternativa más completa a la Thermomix, con app de recetas sin suscripción obligatoria.",
          "it": "Schermo touch, Wi-Fi, bilancia integrata e boccale da 4,5 L: l’alternativa al Bimby (Thermomix) più completa, con app di ricette senza abbonamento obbligatorio.",
          "nl": "Touchscreen, wifi, ingebouwde weegschaal en kom van 4,5 L: het meest complete Thermomix-alternatief, met recepten-app zonder verplicht abonnement.",
          "pl": "Ekran dotykowy, Wi-Fi, wbudowana waga i misa 4,5 l: najbardziej kompletna alternatywa dla Thermomixa, a aplikacja nie wymaga obowiązkowego abonamentu.",
          "sv": "Pekskärm, wifi, inbyggd våg och en skål på 4,5 liter: det mest kompletta alternativet till Thermomix, med en receptapp som inte kräver abonnemang.",
          "us": "Touchscreen, Wi-Fi, built-in scale and a 4.8 qt (4.5 L) bowl: the most complete Thermomix alternative, with a recipe app that requires no subscription.",
          "ca": "Touchscreen, Wi-Fi, built-in scale and a 4.5 L bowl: the most complete Thermomix alternative, with a recipe app that needs no subscription."
        }
      },
      {
        "model": "Cecotec Mambo Touch",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Wi-Fi, écran tactile 5 pouces, balance et bol de 3,3 L en entrée de gamme ; limité à 120 °C, il convient surtout aux soupes, sauces et vapeur.",
          "en": "Wi-Fi, a 5-inch touchscreen, scales and a 3.3 L bowl at an entry-level price; it tops out at 120°C, so it’s best for soups, sauces and steaming.",
          "de": "WLAN, 5-Zoll-Touchscreen, Waage und 3,3-L-Topf im Einstiegssegment; mit maximal 120 °C ideal für Suppen, Saucen und Dampfgaren.",
          "es": "Wifi, pantalla táctil de 5 pulgadas, báscula y vaso de 3,3 L a precio de gama de entrada; limitado a 120 °C, sirve sobre todo para sopas, salsas y cocción al vapor.",
          "it": "Wi-Fi, schermo touch da 5 pollici, bilancia e boccale da 3,3 L in fascia d’ingresso; limitato a 120 °C, ideale per zuppe, salse e vapore.",
          "nl": "Wifi, touchscreen van 5 inch, weegschaal en kom van 3,3 L in het instapsegment; met maximaal 120 °C vooral voor soepen, sauzen en stomen.",
          "pl": "Wi-Fi, 5-calowy ekran dotykowy, waga i misa 3,3 l w cenie modelu z niższej półki; maksymalnie 120 °C, więc sprawdzi się głównie przy zupach, sosach i gotowaniu na parze.",
          "sv": "Wifi, 5-tums pekskärm, våg och skål på 3,3 liter i instegsklassen; med max 120 °C passar den bäst för soppor, såser och ångkokning.",
          "us": "Wi-Fi, a 5-inch touchscreen, a scale and a 3.5 qt (3.3 L) bowl at entry level; capped at 250°F (120°C), it's best for soups, sauces and steaming.",
          "ca": "Wi-Fi, 5-inch touchscreen, scale and 3.3 L bowl at entry level; capped at 120°C (250°F), it suits soups, sauces and steaming best."
        }
      },
      {
        "model": "Kenwood Cooking Chef XL KCL95.424SI",
        "role": {
          "fr": "Idéal pâtisserie et grandes quantités",
          "en": "Best for baking and big batches",
          "de": "Ideal zum Backen und für große Mengen",
          "es": "Ideal para repostería y grandes cantidades",
          "it": "Ideale per pasticceria e grandi quantità",
          "nl": "Ideaal voor bakken en grote hoeveelheden",
          "pl": "Najlepszy do wypieków i dużych porcji",
          "sv": "Bäst för bakning och stora satser",
          "us": "Best for baking and big batches",
          "ca": "Best for baking and big batches"
        },
        "why": {
          "fr": "Bol de 6,7 L chauffé par induction de 20 à 180 °C et application Kenwood World : le choix des pâtissiers et des grandes familles.",
          "en": "A 6.7 L bowl heated by induction from 20 to 180°C, plus the Kenwood World app: the pick for keen bakers and large families.",
          "de": "6,7-L-Schüssel mit Induktion von 20 bis 180 °C und Kenwood-World-App: die Wahl für Backfans und große Familien.",
          "es": "Bol de 6,7 L calentado por inducción de 20 a 180 °C y app Kenwood World: la opción para reposteros y familias numerosas.",
          "it": "Ciotola da 6,7 L riscaldata a induzione da 20 a 180 °C e app Kenwood World: la scelta giusta per gli appassionati di pasticceria e per le famiglie numerose.",
          "nl": "Kom van 6,7 L met inductie van 20 tot 180 °C en de Kenwood World-app: de keuze voor bakliefhebbers en grote gezinnen.",
          "pl": "Misa 6,7 l podgrzewana indukcyjnie od 20 do 180 °C i aplikacja Kenwood World: wybór dla miłośników wypieków i dużych rodzin.",
          "sv": "Skål på 6,7 liter med induktionsvärme från 20 till 180 °C plus appen Kenwood World: valet för dig som bakar mycket och för storfamiljer.",
          "us": "A 7.1 qt (6.7 L) bowl heated by induction from 70°F to 355°F (20–180°C), plus the Kenwood World app: the pick for serious bakers and large families.",
          "ca": "A 6.7 L bowl heated by induction from 20 to 180°C (68 to 350°F) plus the Kenwood World app: the pick for avid bakers and large families."
        }
      }
    ]
  },
  "serrure-connectee-guide": {
    "question": {
      "fr": "Quelle est la meilleure serrure connectée en 2026 ?",
      "en": "What is the best smart lock in 2026?",
      "de": "Welches ist das beste smarte Türschloss 2026?",
      "es": "¿Cuál es la mejor cerradura inteligente en 2026?",
      "it": "Qual è la migliore serratura smart nel 2026?",
      "nl": "Wat is het beste slimme slot in 2026?",
      "pl": "Jaki jest najlepszy inteligentny zamek w 2026 roku?",
      "sv": "Vilket smart lås är bäst 2026?",
      "us": "What is the best smart lock in 2026?",
      "ca": "What is the best smart lock in 2026?"
    },
    "picks": [
      {
        "model": "Nuki Smart Lock Pro (5th generation)",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Se pose sur le cylindre existant, Wi-Fi et Matter over Thread intégrés, batterie rechargeable et application très complète.",
          "en": "Fits over your existing cylinder, with built-in Wi-Fi and Matter over Thread, a rechargeable battery and a very comprehensive app.",
          "de": "Sitzt auf dem vorhandenen Zylinder, mit integriertem WLAN und Matter over Thread, Akku und sehr umfangreicher App.",
          "es": "Se monta sobre el bombín que ya tienes, con wifi y Matter over Thread integrados, batería recargable y una app muy completa.",
          "it": "Si monta sul cilindro esistente, con Wi-Fi e Matter over Thread integrati, batteria ricaricabile e un’app molto completa.",
          "nl": "Past op je bestaande cilinder, met ingebouwde wifi en Matter over Thread, een oplaadbare accu en een zeer complete app.",
          "pl": "Montowany na istniejącej wkładce, z wbudowanym Wi-Fi i Matter over Thread, akumulatorem i bardzo rozbudowaną aplikacją.",
          "sv": "Monteras över din befintliga låscylinder, med inbyggt wifi och Matter via Thread, laddningsbart batteri och en mycket komplett app.",
          "us": "Mounts over your existing lock cylinder, with built-in Wi-Fi and Matter over Thread, a rechargeable battery and a very full-featured app.",
          "ca": "Fits over your existing euro cylinder lock, with built-in Wi-Fi and Matter over Thread, a rechargeable battery and a very complete app."
        }
      },
      {
        "model": "Nuki Smart Lock Go",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "L’entrée de gamme Nuki garde le Wi-Fi, Matter over Thread et la même application, sans bridge à acheter.",
          "en": "Nuki’s entry model keeps Wi-Fi, Matter over Thread and the same app, with no bridge to buy.",
          "de": "Nukis Einstiegsmodell behält WLAN, Matter over Thread und dieselbe App, ohne zusätzliche Bridge.",
          "es": "El modelo básico de Nuki conserva el wifi, Matter over Thread y la misma app, sin tener que comprar el bridge.",
          "it": "Il modello d’ingresso di Nuki mantiene Wi-Fi, Matter over Thread e la stessa app, senza bridge da acquistare.",
          "nl": "Het instapmodel van Nuki houdt wifi, Matter over Thread en dezelfde app, zonder bridge erbij.",
          "pl": "Podstawowy model Nuki zachowuje Wi-Fi, Matter over Thread i tę samą aplikację, bez konieczności dokupowania mostka (Bridge).",
          "sv": "Nukis instegsmodell behåller wifi, Matter via Thread och samma app, och du behöver inte köpa till någon brygga.",
          "us": "Nuki’s entry model keeps Wi-Fi, Matter over Thread and the same app, with no bridge to buy.",
          "ca": "Nuki’s entry model keeps Wi-Fi, Matter over Thread and the same app, with no bridge to buy."
        }
      },
      {
        "model": "Aqara Smart Lock U200",
        "role": {
          "fr": "Idéale pour ouvrir sans téléphone",
          "en": "Best for phone-free entry",
          "de": "Ideal zum Öffnen ohne Smartphone",
          "es": "Ideal para abrir sin móvil",
          "it": "Ideale per aprire senza telefono",
          "nl": "Ideaal om zonder telefoon te openen",
          "pl": "Najlepszy do otwierania bez telefonu",
          "sv": "Bäst för att låsa upp utan mobil",
          "us": "Best for phone-free entry",
          "ca": "Best for phone-free entry"
        },
        "why": {
          "fr": "Clavier extérieur fourni avec empreinte, NFC et code, Matter over Thread et prise en charge d’Apple Home Key.",
          "en": "Outdoor keypad included with fingerprint, NFC and PIN, plus Matter over Thread and Apple Home Key support.",
          "de": "Außen-Keypad mit Fingerabdruck, NFC und PIN inklusive, dazu Matter over Thread und Apple Home Key.",
          "es": "Teclado exterior incluido con huella, NFC y código, además de Matter over Thread y compatibilidad con Apple Home Key.",
          "it": "Tastierino esterno incluso con impronta, NFC e codice, più Matter over Thread e supporto ad Apple Home Key.",
          "nl": "Buitenklavier met vingerafdruk, NFC en pincode inbegrepen, plus Matter over Thread en Apple Home Key.",
          "pl": "W zestawie zewnętrzna klawiatura z czytnikiem linii papilarnych, NFC i kodem; do tego Matter over Thread i obsługa Apple Home Key.",
          "sv": "Knappsats för utomhusbruk ingår, med fingeravtryck, NFC och kod, plus Matter via Thread och stöd för Apple Home Key.",
          "us": "Comes with an outdoor keypad that reads a fingerprint, NFC or PIN code, plus Matter over Thread and Apple Home Key support.",
          "ca": "Outdoor keypad included with fingerprint, NFC and PIN, plus Matter over Thread and Apple Home Key support."
        }
      }
    ]
  },
  "station-meteo-connectee-comparatif": {
    "question": {
      "fr": "Quelle est la meilleure station météo connectée en 2026 ?",
      "en": "What is the best Wi-Fi weather station in 2026?",
      "de": "Welche ist die beste smarte Wetterstation 2026?",
      "es": "¿Cuál es la mejor estación meteorológica conectada en 2026?",
      "it": "Qual è la migliore stazione meteo Wi-Fi nel 2026?",
      "nl": "Wat is het beste slimme weerstation in 2026?",
      "pl": "Jaka jest najlepsza inteligentna stacja pogodowa w 2026 roku?",
      "sv": "Vilken smart väderstation är bäst 2026?",
      "us": "What is the best smart weather station in 2026?",
      "ca": "What is the best smart weather station in 2026?"
    },
    "picks": [
      {
        "model": "Ecowitt HP2551",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Capteur 7-en-1 avec pluie, vent, UV et luminosité dès l'achat, grand écran couleur et intégration locale à Home Assistant.",
          "en": "A 7-in-1 sensor with rain, wind, UV and light out of the box, a large colour screen and local Home Assistant integration.",
          "de": "7-in-1-Sensor mit Regen, Wind, UV und Helligkeit ab Werk, großes Farbdisplay und lokale Home-Assistant-Integration.",
          "es": "Sensor 7 en 1 con lluvia, viento, UV y luminosidad de serie, gran pantalla a color e integración local con Home Assistant.",
          "it": "Sensore 7 in 1 con pioggia, vento, UV e luminosità inclusi, ampio schermo a colori e integrazione locale con Home Assistant.",
          "nl": "7-in-1-sensor met regen, wind, uv en licht direct inbegrepen, groot kleurenscherm en lokale Home Assistant-integratie.",
          "pl": "Czujnik 7 w 1 mierzący opady, wiatr, UV i natężenie światła już w podstawowym zestawie, duży kolorowy ekran i lokalna integracja z Home Assistant.",
          "sv": "Sensor 7-i-1 med regn, vind, UV och ljus direkt ur kartongen, stor färgskärm och lokal integration med Home Assistant.",
          "us": "A 7-in-1 sensor with rain, wind, UV and light right out of the box, a large color screen and local Home Assistant integration.",
          "ca": "A 7-in-1 sensor with rain, wind, UV and light out of the box, a large colour screen and local Home Assistant integration."
        }
      },
      {
        "model": "Bresser Wi-Fi ClearView Weather Station 7-in-1",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Station complète avec pluie, vent, UV et lumière, lisible sur un écran couleur de 21,3 cm, sans dépendre du smartphone.",
          "en": "A complete station with rain, wind, UV and light, readable on a 21.3 cm colour screen without relying on a phone.",
          "de": "Komplettstation mit Regen, Wind, UV und Licht, ablesbar auf einem 21,3-cm-Farbdisplay, ganz ohne Smartphone.",
          "es": "Estación completa con lluvia, viento, UV y luz, legible en una pantalla a color de 21,3 cm sin depender del móvil.",
          "it": "Stazione completa con pioggia, vento, UV e luce, leggibile su uno schermo a colori da 21,3 cm senza bisogno dello smartphone.",
          "nl": "Compleet station met regen, wind, uv en licht, af te lezen op een kleurenscherm van 21,3 cm zonder smartphone.",
          "pl": "Kompletna stacja mierząca opady, wiatr, UV i natężenie światła; dane odczytasz na kolorowym ekranie 21,3 cm, bez potrzeby sięgania po smartfon.",
          "sv": "Komplett station med regn, vind, UV och ljus, som läses av på en färgskärm på 21,3 cm utan att du behöver mobilen.",
          "us": "A complete station with rain, wind, UV and light, readable on an 8.4 in (21.3 cm) color display without relying on your phone.",
          "ca": "A complete station with rain, wind, UV and light, readable on an 8.4-inch colour screen without relying on a phone."
        }
      },
      {
        "model": "Netatmo Smart Weather Station",
        "role": {
          "fr": "Air intérieur et Apple Maison",
          "en": "Indoor air and Apple Home",
          "de": "Raumluft und Apple Home",
          "es": "Aire interior y Casa de Apple",
          "it": "Qualità dell'aria e Apple Casa",
          "nl": "Binnenlucht en Apple Woning",
          "pl": "Jakość powietrza w domu i Apple Home",
          "sv": "Inomhusluft och Apple Home",
          "us": "Best for indoor air and Apple Home",
          "ca": "Indoor air and Apple Home"
        },
        "why": {
          "fr": "Seule du comparatif à mesurer le CO2 intérieur, compatible HomeKit, mais pluviomètre et anémomètre sont vendus séparément.",
          "en": "The only one here that measures indoor CO2, and it works with HomeKit, but the rain gauge and anemometer are sold separately.",
          "de": "Als einzige im Vergleich misst sie CO2 in Innenräumen, HomeKit-kompatibel, Regen- und Windmesser gibt es aber nur separat.",
          "es": "La única de la comparativa que mide el CO2 interior; es compatible con HomeKit, aunque el pluviómetro y el anemómetro se venden aparte.",
          "it": "L'unica del confronto a misurare la CO2 in casa, compatibile HomeKit, ma pluviometro e anemometro si comprano a parte.",
          "nl": "De enige in deze vergelijking die CO2 binnenshuis meet, compatibel met HomeKit, maar regen- en windmeter zijn apart te koop.",
          "pl": "Jedyna w zestawieniu mierząca CO2 w pomieszczeniu, zgodna z HomeKit, ale deszczomierz i anemometr kupuje się osobno.",
          "sv": "Den enda i jämförelsen som mäter CO₂ inomhus och fungerar med HomeKit, men regnmätare och vindmätare säljs separat.",
          "us": "The only one here that measures indoor CO2, and it works with HomeKit, but the rain gauge and anemometer are sold separately.",
          "ca": "The only one here that measures indoor CO2, HomeKit compatible, but the rain gauge and anemometer are sold separately."
        }
      }
    ]
  },
  "test-cosori-dual-blaze": {
    "question": {
      "fr": "Le Cosori Dual Blaze Smart 6,4 L vaut-il le coup en 2026 ?",
      "en": "Is the Cosori Dual Blaze Smart 6.4L worth buying in 2026?",
      "de": "Lohnt sich die Cosori Dual Blaze Smart 6,4 L im Jahr 2026?",
      "es": "¿Merece la pena la Cosori Dual Blaze Smart 6,4 L en 2026?",
      "it": "Conviene la Cosori Dual Blaze Smart 6,4 L nel 2026?",
      "nl": "Is de Cosori Dual Blaze Smart 6,4 L de moeite waard in 2026?",
      "pl": "Czy warto kupić frytkownicę Cosori Dual Blaze Smart 6,4 l w 2026 roku?",
      "sv": "Är Cosori Dual Blaze Smart 6.4L värd pengarna 2026?",
      "us": "Is the Cosori Dual Blaze Smart 6.4L worth buying in 2026?",
      "ca": "Is the Cosori Dual Blaze Smart 6.4L worth buying in 2026?"
    },
    "picks": [
      {
        "model": "Cosori Dual Blaze Smart Air Fryer - 6.4L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Sa double résistance haut et bas limite le secouage, et l’app VeSync ajoute recettes et suivi à distance sur 6,4 L.",
          "en": "Top and bottom heating elements mean less shaking, and the VeSync app adds recipes and remote monitoring, all in a 6.4 L basket.",
          "de": "Ober- und Unterhitze ersparen meist das Schütteln, und die VeSync-App bietet Rezepte und Fernüberwachung bei 6,4 L.",
          "es": "Su doble resistencia, arriba y abajo, reduce la necesidad de agitar, y la app VeSync añade recetas y control a distancia, con 6,4 L de capacidad.",
          "it": "La doppia resistenza, sopra e sotto, riduce la necessità di scuotere il cestello, e l’app VeSync aggiunge ricette e controllo da remoto; capacità 6,4 L.",
          "nl": "Boven- en onderwarmte maken schudden meestal overbodig, en de VeSync-app voegt recepten en bediening op afstand toe.",
          "pl": "Dwie grzałki, u góry i u dołu, sprawiają, że rzadziej trzeba potrząsać koszem, a aplikacja VeSync dodaje przepisy i zdalny podgląd; pojemność 6,4 l.",
          "sv": "Korgen på 6,4 liter värms både uppifrån och nerifrån, så du behöver sällan skaka den, och appen VeSync ger recept och fjärrövervakning.",
          "us": "Top and bottom heating cuts down on shaking, and the VeSync app adds recipes and remote monitoring to a 6.8 qt (6.4 L) basket.",
          "ca": "Top and bottom heating cuts down on shaking, and the VeSync app adds recipes and remote monitoring in a 6.4 L basket."
        }
      },
      {
        "model": "Philips Airfryer Série 3000 XL - 6.2L",
        "role": {
          "fr": "Alternative simple sans Wi-Fi",
          "en": "Simple alternative without Wi-Fi",
          "de": "Einfache Alternative ohne WLAN",
          "es": "Alternativa sencilla sin wifi",
          "it": "Alternativa semplice senza Wi-Fi",
          "nl": "Eenvoudig alternatief zonder wifi",
          "pl": "Prosta alternatywa bez Wi-Fi",
          "sv": "Enkelt alternativ utan wifi",
          "us": "Simpler pick without Wi-Fi",
          "ca": "Simple alternative without Wi-Fi"
        },
        "why": {
          "fr": "Capacité comparable, commandes très simples et marque éprouvée, pour qui n’a besoin ni d’application ni de chauffe par le bas.",
          "en": "Similar capacity, very simple controls and a proven brand, if you don’t need an app or bottom heating.",
          "de": "Ähnliches Volumen, sehr einfache Bedienung und bewährte Marke für alle, die weder App noch Unterhitze brauchen.",
          "es": "Capacidad similar, mandos muy sencillos y marca contrastada, para quien no necesita app ni resistencia inferior.",
          "it": "Capacità simile, comandi semplicissimi e marchio collaudato, per chi non ha bisogno né di app né di calore dal basso.",
          "nl": "Vergelijkbare inhoud, heel eenvoudige bediening en een beproefd merk, voor wie geen app of onderwarmte nodig heeft.",
          "pl": "Porównywalna pojemność, bardzo prosta obsługa i sprawdzona marka, dla tych, którzy nie potrzebują aplikacji ani grzania od dołu.",
          "sv": "Liknande volym, mycket enkla reglage och ett beprövat märke, för dig som varken behöver app eller värme underifrån.",
          "us": "Similar capacity, very simple controls and a proven brand, for anyone who needs neither an app nor bottom heating.",
          "ca": "Similar capacity, very simple controls and a proven brand, for anyone who needs neither an app nor bottom heating."
        }
      },
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Pour cuire deux plats à la fois",
          "en": "Best for two dishes at once",
          "de": "Für zwei Gerichte gleichzeitig",
          "es": "Para dos platos a la vez",
          "it": "Per cuocere due piatti insieme",
          "nl": "Voor twee gerechten tegelijk",
          "pl": "Do dwóch dań naraz",
          "sv": "Bäst för två rätter samtidigt",
          "us": "Best for two dishes at once",
          "ca": "Best for two dishes at once"
        },
        "why": {
          "fr": "Ses deux tiroirs superposés et indépendants permettent de préparer plat et accompagnement en même temps sur 9,5 L.",
          "en": "Two independent stacked drawers let you cook a main and a side at the same time, with 9.5 L in total.",
          "de": "Zwei unabhängige, gestapelte Schubladen garen Hauptgericht und Beilage gleichzeitig, mit insgesamt 9,5 L.",
          "es": "Sus dos cajones apilados e independientes permiten preparar plato principal y guarnición a la vez, con 9,5 L.",
          "it": "I due cassetti sovrapposti e indipendenti permettono di cuocere insieme piatto principale e contorno, per un totale di 9,5 L.",
          "nl": "Twee onafhankelijke, gestapelde lades bereiden hoofdgerecht en bijgerecht tegelijk, met in totaal 9,5 L.",
          "pl": "Dwie niezależne szuflady, jedna nad drugą, o łącznej pojemności 9,5 l pozwalają jednocześnie przygotować danie główne i dodatek.",
          "sv": "Två fristående, staplade lådor gör att du kan laga huvudrätt och tillbehör samtidigt, totalt 9,5 liter.",
          "us": "Two independent stacked drawers let you cook a main and a side at the same time, with 10 qt (9.5 L) in total.",
          "ca": "Two independent stacked drawers let you cook a main and a side at the same time, with 9.5 L in total."
        }
      }
    ]
  },
  "test-moulinex-easy-fry-max": {
    "question": {
      "fr": "Le Moulinex Easy Fry Max 5L est-il un bon airfryer en 2026 ?",
      "en": "Is the Moulinex Easy Fry Max 5L a good air fryer in 2026?",
      "de": "Ist die Moulinex Easy Fry Max 5L 2026 eine gute Heißluftfritteuse?",
      "es": "¿Es la Moulinex Easy Fry Max 5L una buena freidora de aire en 2026?",
      "it": "La Moulinex Easy Fry Max 5L è una buona friggitrice ad aria nel 2026?",
      "nl": "Is de Moulinex Easy Fry Max 5L in 2026 een goede airfryer?",
      "pl": "Czy Moulinex Easy Fry Max 5L to dobra frytkownica beztłuszczowa w 2026 roku?",
      "sv": "Är Moulinex Easy Fry Max 5L en bra airfryer 2026?",
      "us": "Is the Moulinex Easy Fry Max 5L a good air fryer in 2026?",
      "ca": "Is the Moulinex Easy Fry Max 5L a good air fryer in 2026?"
    },
    "picks": [
      {
        "model": "Moulinex Easy Fry Max 5L",
        "role": {
          "fr": "Meilleur choix simplicité",
          "en": "Best for simplicity",
          "de": "Beste Wahl für Einfachheit",
          "es": "Mejor opción por sencillez",
          "it": "La scelta più semplice",
          "nl": "Beste keuze voor eenvoud",
          "pl": "Najlepsza, gdy liczy się prostota",
          "sv": "Enklast att använda",
          "us": "Best for simplicity",
          "ca": "Best for simplicity"
        },
        "why": {
          "fr": "5 L, 10 programmes, panier compatible lave-vaisselle et engagement « réparable 15 ans » : l’essentiel bien fait pour 2 à 4 personnes.",
          "en": "5 L, 10 programmes, a dishwasher-safe basket and a 15-year repairability commitment: the essentials done well for 2 to 4 people.",
          "de": "5 L, 10 Programme, spülmaschinenfester Korb und 15 Jahre Reparierbarkeit: das Wesentliche gut gemacht für 2 bis 4 Personen.",
          "es": "5 L, 10 programas, cesta apta para lavavajillas y compromiso de reparabilidad de 15 años: lo esencial bien hecho para 2 a 4 personas.",
          "it": "5 L, 10 programmi, cestello lavabile in lavastoviglie e l’impegno «riparabile per 15 anni»: l’essenziale fatto bene per 2-4 persone.",
          "nl": "5 L, 10 programma’s, vaatwasserbestendige mand en 15 jaar repareerbaarheid: het belangrijkste goed gedaan voor 2 tot 4 personen.",
          "pl": "5 l, 10 programów, kosz, który można myć w zmywarce, i deklaracja producenta „naprawialny przez 15 lat” – to, co najważniejsze, w dobrym wykonaniu, dla 2–4 osób.",
          "sv": "5 liter, 10 program, korg som tål diskmaskin och löftet ”reparerbar i 15 år”: det viktigaste, väl utfört, för 2–4 personer.",
          "us": "5.3 qt (5 L), 10 presets, a dishwasher-safe basket and the brand's 15-year repairability pledge: the essentials, done well, for 2 to 4 people.",
          "ca": "5 L, 10 programs, a dishwasher-safe basket and a 15-year repairability commitment: the essentials done well for 2 to 4 people."
        }
      },
      {
        "model": "Cosori Dual Blaze Smart Air Fryer - 6.4L",
        "role": {
          "fr": "Plus polyvalent",
          "en": "Most versatile",
          "de": "Am vielseitigsten",
          "es": "La más versátil",
          "it": "La più versatile",
          "nl": "Meest veelzijdig",
          "pl": "Bardziej wszechstronna",
          "sv": "Mest mångsidig",
          "us": "Most versatile",
          "ca": "Most versatile"
        },
        "why": {
          "fr": "Chauffe par le haut et par le bas jusqu’à 230 °C, avec application : meilleur pour saisir les viandes.",
          "en": "Heats from above and below, up to 230°C, and has an app: better for searing meat.",
          "de": "Heizt von oben und unten bis 230 °C, mit App: besser zum Anbraten von Fleisch.",
          "es": "Calienta por arriba y por abajo hasta 230 °C, con app: la mejor para sellar la carne.",
          "it": "Scalda dall’alto e dal basso fino a 230 °C, con app: più adatta per rosolare la carne.",
          "nl": "Verwarmt van boven en onder tot 230 °C, met app: beter om vlees dicht te schroeien.",
          "pl": "Grzeje od góry i od dołu do 230 °C, ma aplikację: lepsza do obsmażania mięsa.",
          "sv": "Värmer både uppifrån och nerifrån upp till 230 °C och har app: bättre för att bryna kött.",
          "us": "Heats from the top and bottom up to 450°F (230°C), with an app: better for searing meat.",
          "ca": "Heats from top and bottom up to 230°C (450°F), with an app: better for searing meat."
        }
      },
      {
        "model": "Philips Airfryer Série 3000 XL - 6.2L",
        "role": {
          "fr": "Pour les familles",
          "en": "Best for families",
          "de": "Für Familien",
          "es": "Para familias",
          "it": "Per le famiglie",
          "nl": "Voor gezinnen",
          "pl": "Dla rodzin",
          "sv": "Bäst för familjer",
          "us": "Best for families",
          "ca": "Best for families"
        },
        "why": {
          "fr": "Un panier de 6,2 L plus confortable pour une famille de 4 quand 5 litres deviennent justes.",
          "en": "A roomier 6.2 L basket for a family of four when 5 litres feels tight.",
          "de": "Ein geräumigerer 6,2-L-Korb für vierköpfige Familien, wenn 5 Liter knapp werden.",
          "es": "Una cesta de 6,2 L más cómoda para una familia de cuatro cuando 5 litros se quedan cortos.",
          "it": "Un cestello da 6,2 L, più comodo per una famiglia di quattro persone quando 5 litri non bastano più.",
          "nl": "Een ruimere mand van 6,2 L voor een gezin van vier als 5 liter krap wordt.",
          "pl": "Kosz 6,2 l daje czteroosobowej rodzinie więcej swobody, gdy 5 l przestaje wystarczać.",
          "sv": "En rymligare korg på 6,2 liter för en familj på fyra när 5 liter börjar kännas snålt.",
          "us": "A roomier 6.6 qt (6.2 L) basket for a family of four when 5.3 qt feels tight.",
          "ca": "A roomier 6.2 L basket for a family of four when 5 litres feels tight."
        }
      }
    ]
  },
  "test-ninja-foodi-flexdrawer": {
    "question": {
      "fr": "Quel est le meilleur airfryer pour une grande famille en 2026 ?",
      "en": "What is the best air fryer for a large family in 2026?",
      "de": "Was ist die beste Heißluftfritteuse für eine große Familie 2026?",
      "es": "¿Cuál es la mejor freidora de aire para una familia numerosa en 2026?",
      "it": "Qual è la migliore friggitrice ad aria per una famiglia numerosa nel 2026?",
      "nl": "Wat is de beste airfryer voor een groot gezin in 2026?",
      "pl": "Jaka jest najlepsza frytkownica beztłuszczowa dla dużej rodziny w 2026 roku?",
      "sv": "Vilken airfryer är bäst för en storfamilj 2026?",
      "us": "What is the best air fryer for a large family in 2026?",
      "ca": "What is the best air fryer for a large family in 2026?"
    },
    "picks": [
      {
        "model": "Ninja Foodi FlexDrawer 10.4L Double Zone",
        "role": {
          "fr": "Meilleur choix pour les grandes familles",
          "en": "Best for large families",
          "de": "Beste Wahl für große Familien",
          "es": "Mejor opción para familias numerosas",
          "it": "La migliore per le famiglie numerose",
          "nl": "Beste keuze voor grote gezinnen",
          "pl": "Najlepszy wybór dla dużych rodzin",
          "sv": "Bäst för storfamiljer",
          "us": "Best for large families",
          "ca": "Best for large families"
        },
        "why": {
          "fr": "Un tiroir de 10,4 L pour les grosses pièces, ou deux zones de 5,2 L réglables séparément grâce au séparateur, idéal à partir de cinq personnes.",
          "en": "A single 10.4 L drawer for large cuts, or two separately controlled 5.2 L zones with the divider: ideal for five people or more.",
          "de": "Eine 10,4-L-Schublade für große Stücke oder mit Trenner zwei getrennt steuerbare 5,2-L-Zonen, ideal ab fünf Personen.",
          "es": "Un cajón de 10,4 L para piezas grandes o, con el separador, dos zonas de 5,2 L independientes; ideal desde cinco personas.",
          "it": "Un cassetto da 10,4 L per i pezzi grandi o, con il divisore, due zone da 5,2 L indipendenti; ideale da cinque persone in su.",
          "nl": "Eén lade van 10,4 L voor grote stukken, of met het schot twee los bediende zones van 5,2 L; ideaal vanaf vijf personen.",
          "pl": "Jedna szuflada 10,4 l na duże kawałki mięsa albo – dzięki przegrodzie – dwie strefy po 5,2 l ustawiane osobno; idealna dla rodzin od pięciu osób.",
          "sv": "En låda på 10,4 liter för stora köttbitar, eller två zoner på 5,2 liter som styrs var för sig med skiljeväggen: perfekt från fem personer och uppåt.",
          "us": "One 11 qt (10.4 L) drawer for big cuts, or two separately controlled 5.5 qt (5.2 L) zones with the divider in, ideal for five people or more.",
          "ca": "One 10.4 L drawer for large cuts, or two separately controlled 5.2 L zones with the divider, ideal for five people or more."
        }
      },
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Idéal pour les petites cuisines",
          "en": "Best for smaller kitchens",
          "de": "Ideal für kleinere Küchen",
          "es": "Ideal para cocinas pequeñas",
          "it": "Ideale per cucine piccole",
          "nl": "Ideaal voor kleinere keukens",
          "pl": "Najlepsza do małych kuchni",
          "sv": "Bäst för mindre kök",
          "us": "Best for smaller kitchens",
          "ca": "Best for smaller kitchens"
        },
        "why": {
          "fr": "Ses deux tiroirs superposés de 4,75 L occupent peu de largeur et conviennent aux foyers de quatre à six personnes qui cuisinent deux plats à la fois.",
          "en": "Its two stacked 4.75 L drawers take up little worktop width and suit households of four to six who cook two dishes at once.",
          "de": "Zwei übereinanderliegende 4,75-L-Schubladen brauchen wenig Breite und passen zu Haushalten mit vier bis sechs Personen.",
          "es": "Sus dos cajones apilados de 4,75 L ocupan poco ancho y encajan en hogares de cuatro a seis personas que cocinan dos platos a la vez.",
          "it": "I due cassetti sovrapposti da 4,75 L occupano poca larghezza e vanno bene per famiglie da quattro a sei persone che cucinano due piatti insieme.",
          "nl": "Twee gestapelde lades van 4,75 L nemen weinig breedte in en passen bij huishoudens van vier tot zes die twee gerechten tegelijk maken.",
          "pl": "Dwie szuflady po 4,75 l, jedna nad drugą, zajmują niewiele miejsca na szerokość i pasują do gospodarstw 4–6-osobowych, w których przygotowuje się dwa dania naraz.",
          "sv": "De två staplade lådorna på 4,75 liter tar lite plats på bredden och passar hushåll med fyra till sex personer som lagar två rätter samtidigt.",
          "us": "Its two stacked 5 qt (4.75 L) drawers take up little counter width and suit households of four to six who cook two dishes at once.",
          "ca": "Its two stacked 4.75 L drawers take little width and suit households of four to six who cook two dishes at once."
        }
      },
      {
        "model": "Philips Airfryer Combi XXL Connecté - 8.3L",
        "role": {
          "fr": "Meilleur choix connecté",
          "en": "Best smart pick",
          "de": "Beste vernetzte Wahl",
          "es": "Mejor opción conectada",
          "it": "La scelta migliore con app",
          "nl": "Beste slimme keuze",
          "pl": "Najlepszy wybór z Wi-Fi",
          "sv": "Bästa uppkopplade valet",
          "us": "Best smart pick",
          "ca": "Best smart pick"
        },
        "why": {
          "fr": "Panier unique de 8,3 L avec sonde de température et application HomeID, pour cuire viandes et grandes portions avec précision.",
          "en": "A single 8.3 L basket with a temperature probe and the HomeID app, for cooking meat and large portions precisely.",
          "de": "Ein 8,3-L-Korb mit Temperaturfühler und HomeID-App, um Fleisch und große Portionen präzise zu garen.",
          "es": "Cesta única de 8,3 L con sonda de temperatura y app HomeID, para cocinar carnes y raciones grandes con precisión.",
          "it": "Cestello unico da 8,3 L con sonda di temperatura e app HomeID, per cuocere con precisione carne e grandi porzioni.",
          "nl": "Eén mand van 8,3 L met kernthermometer en HomeID-app, om vlees en grote porties nauwkeurig te garen.",
          "pl": "Pojedynczy kosz 8,3 l z sondą temperatury i aplikacją HomeID, do precyzyjnego przyrządzania mięsa i dużych porcji.",
          "sv": "En enda korg på 8,3 liter med temperaturgivare och appen HomeID, för att tillaga kött och stora portioner med precision.",
          "us": "A single 8.8 qt (8.3 L) basket with a temperature probe and the HomeID app, for cooking meat and large portions with precision.",
          "ca": "A single 8.3 L basket with a temperature probe and the HomeID app, for cooking meat and large portions precisely."
        }
      }
    ]
  },
  "test-ninja-foodi-max-dual-zone": {
    "question": {
      "fr": "Quel est le meilleur airfryer double zone en 2026 ?",
      "en": "What is the best dual-zone air fryer in 2026?",
      "de": "Was ist die beste Dual-Zone-Heißluftfritteuse 2026?",
      "es": "¿Cuál es la mejor freidora de aire de doble zona en 2026?",
      "it": "Qual è la migliore friggitrice ad aria a doppia zona nel 2026?",
      "nl": "Wat is de beste dual-zone airfryer in 2026?",
      "pl": "Jaka jest najlepsza frytkownica beztłuszczowa z dwiema strefami w 2026 roku?",
      "sv": "Vilken airfryer med två zoner är bäst 2026?",
      "us": "What is the best dual-zone air fryer in 2026?",
      "ca": "What is the best dual-zone air fryer in 2026?"
    },
    "picks": [
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste algemene keuze",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Son format de tiroirs empilés limite l'encombrement et Smart Finish termine les deux cuissons en même temps, idéal pour une famille de quatre à six personnes.",
          "en": "Its stacked drawers save worktop space, and Smart Finish makes both zones finish at the same time: ideal for a family of four to six.",
          "de": "Das Format mit gestapelten Schubladen spart Platz und Smart Finish beendet beide Garvorgänge gleichzeitig, ideal für eine Familie mit vier bis sechs Personen.",
          "es": "Su formato de cajones apilados reduce el espacio ocupado y Smart Finish termina ambas cocciones a la vez, ideal para una familia de cuatro a seis personas.",
          "it": "Il formato a cassetti impilati limita l'ingombro e Smart Finish fa finire le due cotture nello stesso momento: ideale per una famiglia da quattro a sei persone.",
          "nl": "Het formaat met gestapelde laden beperkt de ruimte en Smart Finish beëindigt beide bereidingen tegelijk, ideaal voor een gezin van vier tot zes personen.",
          "pl": "Szuflady ustawione jedna nad drugą zajmują mniej miejsca, a funkcja Smart Finish sprawia, że obie potrawy są gotowe w tym samym momencie – idealne rozwiązanie dla rodziny 4–6-osobowej.",
          "sv": "De staplade lådorna tar mindre plats på bänken och Smart Finish gör att båda zonerna blir klara samtidigt, perfekt för en familj på fyra till sex personer.",
          "us": "Its stacked-drawer design saves counter space, and Smart Finish ends both zones at the same time: ideal for a family of four to six.",
          "ca": "Its stacked drawer format limits counter space and Smart Finish ends both cooking zones together, ideal for a family of four to six people."
        }
      },
      {
        "model": "Ninja Foodi FlexDrawer 10.4L Double Zone",
        "role": {
          "fr": "Idéal pour une méga-zone unique",
          "en": "Best for one extra-large zone",
          "de": "Ideal für eine einzelne Megazone",
          "es": "Ideal si quieres una sola megazona",
          "it": "Ideale per un'unica grande zona",
          "nl": "Ideaal voor één megazone",
          "pl": "Idealna, gdy potrzebna jest jedna duża strefa",
          "sv": "Bäst för en enda stor zon",
          "us": "Best for a single mega zone",
          "ca": "Best for a single mega zone"
        },
        "why": {
          "fr": "Il offre une méga-zone unique de 10,4 litres pour un poulet entier, ce que les tiroirs séparés du Ninja MAX ne permettent pas, mais il est plus encombrant.",
          "en": "Its single 10.4-litre zone takes a whole chicken, which the Ninja MAX’s separate drawers can’t, but it takes up more space.",
          "de": "Er bietet eine einzelne 10,4-Liter-Megazone für ein ganzes Hähnchen, was die getrennten Schubladen des Ninja MAX nicht können, braucht aber mehr Platz.",
          "es": "Ofrece una única megazona de 10,4 litros para un pollo entero, algo que no permiten los cajones separados de la Ninja MAX, aunque ocupa más espacio.",
          "it": "Offre un'unica grande zona da 10,4 litri per un pollo intero, cosa impossibile con i cassetti separati del Ninja MAX, ma è più ingombrante.",
          "nl": "Hij biedt één megazone van 10,4 liter voor een hele kip, wat de aparte laden van de Ninja MAX niet kunnen, maar neemt meer ruimte in.",
          "pl": "Ma jedną dużą strefę 10,4 l, w której zmieści się cały kurczak – tego oddzielne szuflady modelu Ninja MAX nie oferują. Zajmuje jednak więcej miejsca.",
          "sv": "Den har en enda stor zon på 10,4 liter för en hel kyckling, något som de separata lådorna i Ninja MAX inte klarar, men den tar mer plats.",
          "us": "It offers a single 11 qt (10.4 L) mega zone for a whole chicken, which the separate drawers of the Ninja MAX can't, though it takes up more space.",
          "ca": "It offers a single 10.4-litre mega zone for a whole chicken, which the separate drawers of the Ninja MAX cannot, though it takes more space."
        }
      },
      {
        "model": "Philips Airfryer Combi XXL Connecté - 8.3L",
        "role": {
          "fr": "Pour la connectivité et la précision",
          "en": "Best for app control and precision",
          "de": "Für Vernetzung und Präzision",
          "es": "Para conectividad y precisión",
          "it": "Per Wi-Fi e precisione",
          "nl": "Voor connectiviteit en precisie",
          "pl": "Gdy liczy się Wi-Fi i precyzja",
          "sv": "Bäst för uppkoppling och precision",
          "us": "Best for connectivity and precision",
          "ca": "Best for connectivity and precision"
        },
        "why": {
          "fr": "Il convient mieux à ceux qui veulent le Wi-Fi et la précision de sa sonde de température, mais il coûte plus cher que le Ninja MAX.",
          "en": "A better fit if you want Wi-Fi and the precision of a temperature probe, though it costs more than the Ninja MAX.",
          "de": "Er passt besser, wenn man WLAN und die Präzision der Temperatursonde möchte, kostet aber mehr als der Ninja MAX.",
          "es": "Es mejor para quien quiere wifi y la precisión de su sonda de temperatura, aunque cuesta más que la Ninja MAX.",
          "it": "È più adatto a chi vuole il Wi-Fi e la precisione della sonda di temperatura, ma costa più del Ninja MAX.",
          "nl": "Hij past beter bij wie wifi en de precisie van de temperatuursonde wil, maar is duurder dan de Ninja MAX.",
          "pl": "To lepszy wybór dla osób, które chcą mieć Wi-Fi i precyzyjną sondę temperatury, ale kosztuje więcej niż Ninja MAX.",
          "sv": "Den passar bättre för dig som vill ha wifi och en exakt temperaturgivare, men den kostar mer än Ninja MAX.",
          "us": "A better fit if you want Wi-Fi and the precision of a temperature probe, though it costs more than the Ninja MAX.",
          "ca": "Better for anyone who wants Wi-Fi and the precision of its temperature probe, though it costs more than the Ninja MAX."
        }
      }
    ]
  },
  "test-philips-airfryer-3000-xl": {
    "question": {
      "fr": "Le Philips Airfryer 3000 Series XL est-il un bon choix en 2026 ?",
      "en": "Is the Philips Airfryer 3000 Series XL a good choice in 2026?",
      "de": "Ist der Philips Airfryer 3000 Series XL 2026 eine gute Wahl?",
      "es": "¿Es la Philips Airfryer 3000 Series XL una buena elección en 2026?",
      "it": "La Philips Airfryer 3000 Series XL è una buona scelta nel 2026?",
      "nl": "Is de Philips Airfryer 3000 Series XL in 2026 een goede keuze?",
      "pl": "Czy Philips Airfryer 3000 Series XL to dobry wybór w 2026 roku?",
      "sv": "Är Philips Airfryer 3000 Series XL ett bra val 2026?",
      "us": "Is the Philips Airfryer 3000 Series XL a good choice in 2026?",
      "ca": "Is the Philips Airfryer 3000 Series XL a good choice in 2026?"
    },
    "picks": [
      {
        "model": "Philips Airfryer Série 3000 XL - 6.2L",
        "role": {
          "fr": "Meilleur choix pour la simplicité",
          "en": "Best for simplicity",
          "de": "Beste Wahl für Einfachheit",
          "es": "Mejor opción por sencillez",
          "it": "La più semplice",
          "nl": "Beste keuze voor eenvoud",
          "pl": "Najlepsza, gdy liczy się prostota",
          "sv": "Enklast att använda",
          "us": "Best for simplicity",
          "ca": "Best for simplicity"
        },
        "why": {
          "fr": "Cuve de 6,2 L pour 3 à 5 personnes, cuisson RapidAir régulière, 7 programmes et nettoyage facile, sans application à configurer.",
          "en": "A 6.2 L basket for 3 to 5 people, consistent RapidAir cooking, 7 presets and easy cleaning, with no app to set up.",
          "de": "6,2-Liter-Garraum für 3 bis 5 Personen, gleichmäßiges RapidAir-Garen, 7 Programme und leichte Reinigung, ganz ohne App.",
          "es": "Cubeta de 6,2 L para 3 a 5 personas, cocción RapidAir uniforme, 7 programas y limpieza fácil, sin app que configurar.",
          "it": "Cestello da 6,2 L per 3-5 persone, cottura RapidAir uniforme, 7 programmi e pulizia facile, senza app da configurare.",
          "nl": "Pan van 6,2 L voor 3 tot 5 personen, gelijkmatige RapidAir-bereiding, 7 programma's en makkelijk schoon te maken, zonder app.",
          "pl": "Komora 6,2 l dla 3–5 osób, równomierne smażenie dzięki technologii RapidAir, 7 programów i łatwe czyszczenie – bez aplikacji, którą trzeba konfigurować.",
          "sv": "Insats på 6,2 liter för 3–5 personer, jämn tillagning med RapidAir, 7 förinställda program och enkel rengöring, utan någon app att ställa in.",
          "us": "A 6.6 qt (6.2 L) basket for 3 to 5 people, consistent RapidAir cooking, 7 presets and easy cleanup, with no app to set up.",
          "ca": "A 6.2 L pan for 3 to 5 people, consistent RapidAir cooking, 7 presets and easy cleaning, with no app to set up."
        }
      },
      {
        "model": "Cosori Dual Blaze Smart Air Fryer - 6.4L",
        "role": {
          "fr": "Meilleure alternative connectée",
          "en": "Best smart alternative",
          "de": "Beste vernetzte Alternative",
          "es": "Mejor alternativa conectada",
          "it": "La migliore alternativa smart",
          "nl": "Beste slimme alternatief",
          "pl": "Najlepsza alternatywa z Wi-Fi",
          "sv": "Bästa uppkopplade alternativet",
          "us": "Best smart alternative",
          "ca": "Best smart alternative"
        },
        "why": {
          "fr": "Double résistance haut et bas qui limite le besoin de retourner les aliments, et pilotage à distance via l'application VeSync.",
          "en": "Top and bottom heating elements reduce the need to flip food, and the VeSync app lets you control cooking remotely.",
          "de": "Heizelemente oben und unten machen Wenden seltener nötig, und die VeSync-App erlaubt die Steuerung aus der Ferne.",
          "es": "Resistencias superior e inferior que reducen la necesidad de dar la vuelta a los alimentos, y control a distancia con la app VeSync.",
          "it": "Resistenze superiore e inferiore che riducono la necessità di girare gli alimenti, e controllo a distanza con l'app VeSync.",
          "nl": "Verwarmingselementen boven en onder, zodat je minder hoeft om te draaien, en bediening op afstand via de VeSync-app.",
          "pl": "Dwie grzałki, u góry i u dołu, sprawiają, że rzadziej trzeba obracać potrawy, a zdalnie sterujesz nią w aplikacji VeSync.",
          "sv": "Värmeelement både uppe och nere minskar behovet av att vända maten, och med appen VeSync kan du styra tillagningen på distans.",
          "us": "Top and bottom heating elements reduce the need to flip food, and the VeSync app lets you control cooking remotely.",
          "ca": "Top and bottom heating elements reduce the need to flip food, and the VeSync app lets you control cooking remotely."
        }
      },
      {
        "model": "Ninja Foodi FlexDrawer 10.4L Double Zone",
        "role": {
          "fr": "Meilleur pour les grandes familles",
          "en": "Best for large families",
          "de": "Beste Wahl für große Familien",
          "es": "Mejor para familias numerosas",
          "it": "La migliore per le famiglie numerose",
          "nl": "Beste voor grote gezinnen",
          "pl": "Najlepsza dla dużych rodzin",
          "sv": "Bäst för storfamiljer",
          "us": "Best for large families",
          "ca": "Best for large families"
        },
        "why": {
          "fr": "Tiroir de 10,4 L divisible en deux zones de 5,2 L pilotées séparément, jusqu'à 240 °C, pour cuire deux plats à la fois.",
          "en": "A 10.4 L drawer that splits into two independently controlled 5.2 L zones, up to 240°C, to cook two dishes at once.",
          "de": "10,4-Liter-Schublade, teilbar in zwei separat steuerbare 5,2-Liter-Zonen, bis 240 °C, für zwei Gerichte gleichzeitig.",
          "es": "Cajón de 10,4 L divisible en dos zonas de 5,2 L con control independiente, hasta 240 °C, para cocinar dos platos a la vez.",
          "it": "Cassetto da 10,4 L divisibile in due zone da 5,2 L gestite separatamente, fino a 240 °C, per cuocere due piatti insieme.",
          "nl": "Lade van 10,4 L, deelbaar in twee apart te bedienen zones van 5,2 L, tot 240 °C, om twee gerechten tegelijk te bereiden.",
          "pl": "Szuflada 10,4 l, którą można podzielić na dwie strefy po 5,2 l sterowane osobno, temperatura do 240 °C – przygotujesz dwa dania naraz.",
          "sv": "En låda på 10,4 liter som kan delas i två separat styrda zoner på 5,2 liter, upp till 240 °C, för två rätter samtidigt.",
          "us": "An 11 qt (10.4 L) drawer that splits into two independently controlled 5.5 qt (5.2 L) zones, up to 465°F (240°C), to cook two dishes at once.",
          "ca": "A 10.4 L drawer that splits into two independently controlled 5.2 L zones, up to 240°C (465°F), to cook two dishes at once."
        }
      }
    ]
  },
  "test-xiaomi-smart-air-fryer-pro": {
    "question": {
      "fr": "Le Xiaomi Smart Air Fryer Pro 4L est-il un bon airfryer en 2026 ?",
      "en": "Is the Xiaomi Smart Air Fryer Pro 4L a good air fryer in 2026?",
      "de": "Ist der Xiaomi Smart Air Fryer Pro 4L 2026 eine gute Heißluftfritteuse?",
      "es": "¿Es la Xiaomi Smart Air Fryer Pro 4L una buena freidora de aire en 2026?",
      "it": "La Xiaomi Smart Air Fryer Pro 4L è una buona friggitrice ad aria nel 2026?",
      "nl": "Is de Xiaomi Smart Air Fryer Pro 4L een goede airfryer in 2026?",
      "pl": "Czy Xiaomi Smart Air Fryer Pro 4L to dobra frytkownica beztłuszczowa w 2026 roku?",
      "sv": "Är Xiaomi Smart Air Fryer Pro 4L en bra airfryer 2026?",
      "us": "Is the Xiaomi Smart Air Fryer Pro 4L a good air fryer in 2026?",
      "ca": "Is the Xiaomi Smart Air Fryer Pro 4L a good air fryer in 2026?"
    },
    "picks": [
      {
        "model": "Xiaomi Smart Air Fryer Pro 4L",
        "role": {
          "fr": "Meilleur choix pour 1 à 3 personnes",
          "en": "Best for 1 to 3 people",
          "de": "Beste Wahl für 1 bis 3 Personen",
          "es": "Mejor opción para hogares de 1 a 3 personas",
          "it": "La migliore per 1-3 persone",
          "nl": "Beste keuze voor 1 tot 3 personen",
          "pl": "Najlepszy wybór dla 1–3 osób",
          "sv": "Bäst för 1–3 personer",
          "us": "Best for 1 to 3 people",
          "ca": "Best for 1 to 3 people"
        },
        "why": {
          "fr": "Compact et connecté, il offre un hublot éclairé, une plage de 40 à 200 °C et l’app Xiaomi Home, mais son panier de 4 litres reste limité.",
          "en": "Compact and smart, with a lit window, a 40–200°C range and the Xiaomi Home app, though its 4-litre basket is on the small side.",
          "de": "Kompakt und vernetzt, mit beleuchtetem Sichtfenster, 40 bis 200 °C und Xiaomi-Home-App – der 4-Liter-Korb bleibt aber begrenzt.",
          "es": "Compacta y conectada, ofrece ventana iluminada, temperaturas de 40 a 200 °C y app Xiaomi Home, aunque su cesta de 4 litros se queda limitada.",
          "it": "Compatta e smart: oblò illuminato, temperatura da 40 a 200 °C e app Xiaomi Home, ma il cestello da 4 litri resta piccolo.",
          "nl": "Compact en connected, met verlicht kijkvenster, 40 tot 200 °C en de Xiaomi Home-app, al is de mand van 4 liter beperkt.",
          "pl": "Kompaktowa i inteligentna: ma podświetlane okienko, zakres 40–200 °C i aplikację Xiaomi Home, ale kosz 4 l mieści niewiele.",
          "sv": "Kompakt och uppkopplad, med upplyst tittfönster, 40–200 °C och appen Xiaomi Home, men korgen på 4 liter är ganska liten.",
          "us": "Compact and Wi-Fi enabled, with a lit viewing window, a 105°F to 390°F (40–200°C) range and the Xiaomi Home app, though its 4.2 qt (4 L) basket is on the small side.",
          "ca": "Compact and app-controlled, it offers a lit window, a 40 to 200°C (105 to 400°F) range and the Xiaomi Home app, though its 4-litre basket is limited."
        }
      },
      {
        "model": "Philips Airfryer Série 3000 XL - 6.2L",
        "role": {
          "fr": "Meilleur choix pour 3 à 5 personnes",
          "en": "Best for 3 to 5 people",
          "de": "Beste Wahl für 3 bis 5 Personen",
          "es": "Mejor opción para hogares de 3 a 5 personas",
          "it": "La migliore per 3-5 persone",
          "nl": "Beste keuze voor 3 tot 5 personen",
          "pl": "Najlepszy wybór dla 3–5 osób",
          "sv": "Bäst för 3–5 personer",
          "us": "Best for 3 to 5 people",
          "ca": "Best for 3 to 5 people"
        },
        "why": {
          "fr": "Avec 6,2 litres et 2 000 W, il prend le relais quand le Xiaomi devient trop petit, au prix de l’absence de pilotage Wi-Fi.",
          "en": "With 6.2 litres and 2,000 W, it’s the step up when the Xiaomi is too small, though you lose Wi-Fi control.",
          "de": "Mit 6,2 Litern und 2.000 W übernimmt er, wenn der Xiaomi zu klein wird – allerdings ohne WLAN-Fernsteuerung.",
          "es": "Con 6,2 litros y 2.000 W, toma el relevo cuando la Xiaomi se queda pequeña, aunque no se puede controlar por wifi.",
          "it": "Con 6,2 litri e 2.000 W è il passo successivo quando la Xiaomi diventa troppo piccola, ma rinuncia al controllo via Wi-Fi.",
          "nl": "Met 6,2 liter en 2.000 W neemt hij het over als de Xiaomi te klein wordt, wel zonder bediening op afstand via wifi.",
          "pl": "Dzięki 6,2 l i mocy 2000 W sprawdzi się, gdy model Xiaomi okaże się za mały, choć nie ma sterowania przez Wi-Fi.",
          "sv": "Med 6,2 liter och 2 000 W tar den över när Xiaomi-modellen blir för liten, men du får klara dig utan fjärrstyrning via wifi.",
          "us": "With 6.6 qt (6.2 L) and 2,000 W, it steps in when the Xiaomi gets too small, at the cost of Wi-Fi remote control.",
          "ca": "With 6.2 litres and 2,000 W it takes over when the Xiaomi becomes too small, though you give up Wi-Fi remote control."
        }
      }
    ]
  },
  "saugroboter-tierhaare-test": {
    "question": {
      "fr": "Quel est le meilleur robot aspirateur pour poils d'animaux en 2026 ?",
      "en": "What is the best robot vacuum for pet hair in 2026?",
      "de": "Welcher ist der beste Saugroboter für Tierhaare 2026?",
      "es": "¿Cuál es el mejor robot aspirador para pelo de mascotas en 2026?",
      "it": "Qual è il miglior robot aspirapolvere per peli di animali nel 2026?",
      "nl": "Wat is de beste robotstofzuiger voor dierenharen in 2026?",
      "pl": "Jaki jest najlepszy robot sprzątający do sierści zwierząt w 2026 roku?",
      "sv": "Vilken robotdammsugare är bäst för djurhår 2026?",
      "us": "What is the best robot vacuum for pet hair in 2026?",
      "ca": "What is the best robot vacuum for pet hair in 2026?"
    },
    "picks": [
      {
        "model": "Roborock S8 MaxV Ultra",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Sa brosse DuoRoller en caoutchouc limite l'emmêlement, ses 10 000 Pa et sa station d'auto-vidage conviennent aux foyers avec chien ou chat.",
          "en": "Its rubber DuoRoller brush limits tangling, and 10,000 Pa plus an auto-empty station suit homes with a dog or cat.",
          "de": "Die DuoRoller-Gummiwalzen mindern das Verheddern, 10.000 Pa und Absaugstation passen zu Haushalten mit Hund oder Katze.",
          "es": "Su cepillo de goma DuoRoller evita que el pelo se enrede, y con 10.000 Pa y base de autovaciado encaja en casas con perro o gato.",
          "it": "La spazzola DuoRoller in gomma limita i grovigli, mentre i 10.000 Pa e la base di autosvuotamento sono adatti a chi ha cani o gatti.",
          "nl": "De rubberen DuoRoller-borstel beperkt klitten, en 10.000 Pa met zelfleegstation past bij huishoudens met hond of kat.",
          "pl": "Gumowa szczotka DuoRoller ogranicza plątanie się sierści, a siła ssania 10 000 Pa i stacja z automatycznym opróżnianiem sprawdzą się w domach z psem lub kotem.",
          "sv": "Gummiborsten DuoRoller minskar trassel, och med 10 000 Pa och självtömmande station passar den hem med hund eller katt.",
          "us": "Its rubber DuoRoller brush limits tangling, and 10,000 Pa plus a self-emptying dock make it a good fit for homes with a dog or cat.",
          "ca": "Its rubber DuoRoller brush limits tangling, and 10,000 Pa plus an auto-empty station suit homes with a dog or cat."
        }
      },
      {
        "model": "Dreame X40 Ultra",
        "role": {
          "fr": "Aspiration maximale",
          "en": "Maximum suction",
          "de": "Maximale Saugkraft",
          "es": "Máxima succión",
          "it": "Massima aspirazione",
          "nl": "Maximale zuigkracht",
          "pl": "Maksymalna siła ssania",
          "sv": "Starkast sugkraft",
          "us": "Best for maximum suction",
          "ca": "Maximum suction"
        },
        "why": {
          "fr": "Avec 12 000 Pa et une brosse anti-emmêlement, il convient aux races à poils longs, et sa brosse latérale extensible atteint coins et bords.",
          "en": "With 12,000 Pa and an anti-tangle brush, it suits long-haired breeds, and its extendable side brush reaches corners and edges.",
          "de": "Mit 12.000 Pa und Anti-Verheddern-Bürste passt er zu langhaarigen Rassen, die ausfahrbare Seitenbürste erreicht Ecken und Kanten.",
          "es": "Con 12.000 Pa y cepillo antienredos, va bien con razas de pelo largo, y su cepillo lateral extensible llega a rincones y bordes.",
          "it": "Con 12.000 Pa e spazzola anti-groviglio è adatto alle razze a pelo lungo, e la spazzola laterale estensibile raggiunge angoli e bordi.",
          "nl": "Met 12.000 Pa en een anti-klitborstel past hij bij langharige rassen, en de uitschuifbare zijborstel bereikt hoeken en randen.",
          "pl": "Dzięki 12 000 Pa i szczotce zapobiegającej plątaniu radzi sobie z sierścią ras długowłosych, a wysuwana szczotka boczna dociera do narożników i krawędzi.",
          "sv": "Med 12 000 Pa och trasselfri borste passar den långhåriga raser, och den utfällbara sidoborsten når in i hörn och längs kanter.",
          "us": "With 12,000 Pa and an anti-tangle brush, it suits long-haired breeds, and its extendable side brush reaches corners and edges.",
          "ca": "With 12,000 Pa and an anti-tangle brush, it suits long-haired breeds, and its extendable side brush reaches corners and edges."
        }
      },
      {
        "model": "Ecovacs Deebot T30 Pro Omni",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Il réunit 11 000 Pa, une brosse ZeroTangle et une station d'auto-vidage en milieu de gamme, le choix malin pour un budget maîtrisé.",
          "en": "It combines 11,000 Pa, a ZeroTangle brush and an auto-empty station in the mid-range, the smart pick for budget-conscious pet owners.",
          "de": "Er vereint 11.000 Pa, ZeroTangle-Bürste und Absaugstation in der Mittelklasse, die clevere Wahl für preisbewusste Tierhalter.",
          "es": "Reúne 11.000 Pa, cepillo ZeroTangle y base de autovaciado en la gama media: la compra inteligente si quieres controlar el gasto.",
          "it": "Unisce 11.000 Pa, spazzola ZeroTangle e base di autosvuotamento in fascia media: la scelta furba per chi vuole contenere la spesa.",
          "nl": "Hij combineert 11.000 Pa, een ZeroTangle-borstel en een zelfleegstation in het middensegment, de slimme keuze bij een beperkt budget.",
          "pl": "11 000 Pa, szczotka ZeroTangle i stacja z automatycznym opróżnianiem w modelu ze średniej półki – rozsądny wybór, gdy budżet jest ograniczony.",
          "sv": "Kombinerar 11 000 Pa, ZeroTangle-borsten och självtömmande station i mellanklassen – det smarta valet för djurägare som håller koll på budgeten.",
          "us": "It combines 11,000 Pa, a ZeroTangle brush and a self-emptying dock in the midrange: the smart pick for pet owners on a budget.",
          "ca": "It combines 11,000 Pa, a ZeroTangle brush and an auto-empty station in the mid-range, the smart pick for budget-conscious pet owners."
        }
      }
    ]
  },
  "deshumidificateur-connecte-guide": {
    "question": {
      "fr": "Quel est le meilleur déshumidificateur connecté en 2026 ?",
      "en": "What is the best smart dehumidifier in 2026?",
      "de": "Welcher ist der beste smarte Luftentfeuchter 2026?",
      "es": "¿Cuál es el mejor deshumidificador inteligente en 2026?",
      "it": "Qual è il miglior deumidificatore smart nel 2026?",
      "nl": "Wat is de beste slimme luchtontvochtiger in 2026?",
      "pl": "Jaki jest najlepszy inteligentny osuszacz powietrza w 2026 roku?",
      "sv": "Vilken smart avfuktare är bäst 2026?",
      "us": "What is the best smart dehumidifier in 2026?",
      "ca": "What is the best smart dehumidifier in 2026?"
    },
    "picks": [
      {
        "model": "Meaco Arete Two 20L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción en general",
          "it": "La nostra scelta",
          "nl": "Beste algemene keuze",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "20 L par jour, bac de 4,8 L, filtre HEPA, Wi-Fi avec Alexa et Google Home, et une réputation de faible consommation et de discrétion.",
          "en": "20 L a day, 4.8 L tank, HEPA filter, Wi-Fi with Alexa and Google Home, and a reputation for low energy use and quiet running.",
          "de": "20 L pro Tag, 4,8-L-Tank, HEPA-Filter, WLAN mit Alexa und Google Home sowie der Ruf, sparsam und leise zu sein.",
          "es": "20 L al día, depósito de 4,8 L, filtro HEPA, wifi con Alexa y Google Home, y fama de bajo consumo y funcionamiento silencioso.",
          "it": "20 L al giorno, serbatoio da 4,8 L, filtro HEPA, Wi-Fi con Alexa e Google Home e fama di bassi consumi e silenziosità.",
          "nl": "20 L per dag, reservoir van 4,8 L, HEPA-filter, wifi met Alexa en Google Home, en bekend om zijn lage verbruik en stille werking.",
          "pl": "20 l na dobę, zbiornik 4,8 l, filtr HEPA, Wi-Fi z obsługą Alexy i Google Home, a do tego opinia urządzenia oszczędnego i cichego.",
          "sv": "20 liter per dygn, vattentank på 4,8 liter, HEPA-filter, wifi med Alexa och Google Home – och den har rykte om sig att vara energisnål och tyst.",
          "us": "Rated at 42 pints (20 L) a day, with a 10-pint (4.8 L) tank, a HEPA filter, Wi-Fi with Alexa and Google Home, and a reputation for low energy use and quiet running.",
          "ca": "20 L a day, 4.8 L tank, HEPA filter, Wi-Fi with Alexa and Google Home, and a reputation for low energy use and quiet running."
        }
      },
      {
        "model": "Comfee MDDF-16DEN7-WF",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "16 L par jour, Wi-Fi compatible Alexa, mode linge et drainage continu dans un format compact d’entrée de gamme.",
          "en": "16 L a day, Wi-Fi with Alexa support, laundry mode and continuous drainage in a compact entry-level body.",
          "de": "16 L pro Tag, WLAN mit Alexa, Wäschemodus und Dauerablauf in einem kompakten Einstiegsgerät.",
          "es": "16 L al día, wifi compatible con Alexa, modo ropa y drenaje continuo en un formato compacto de gama de entrada.",
          "it": "16 L al giorno, Wi-Fi compatibile con Alexa, modalità bucato e drenaggio continuo, in un formato compatto di fascia d’ingresso.",
          "nl": "16 L per dag, wifi met Alexa, wasmodus en continue afvoer in een compact instapmodel.",
          "pl": "16 l na dobę, Wi-Fi z obsługą Alexy, tryb suszenia prania i możliwość stałego odprowadzania wody – w kompaktowym modelu z niższej półki.",
          "sv": "16 liter per dygn, wifi med stöd för Alexa, torkläge för tvätt och kontinuerlig dränering i ett kompakt format i instegsklassen.",
          "us": "Rated at 34 pints (16 L) a day, with Wi-Fi and Alexa support, a laundry mode and continuous drainage in a compact entry-level body.",
          "ca": "16 L a day, Wi-Fi with Alexa support, laundry mode and continuous drainage in a compact entry-level body."
        }
      },
      {
        "model": "Xiaomi Smart Dehumidifier Lite",
        "role": {
          "fr": "Idéal pour une chambre",
          "en": "Best for bedrooms",
          "de": "Ideal fürs Schlafzimmer",
          "es": "Ideal para el dormitorio",
          "it": "Ideale per la camera da letto",
          "nl": "Ideaal voor de slaapkamer",
          "pl": "Najlepszy do sypialni",
          "sv": "Bäst för sovrummet",
          "us": "Best for bedrooms",
          "ca": "Best for bedrooms"
        },
        "why": {
          "fr": "Petit modèle de 13 L par jour avec mode nuit discret et pilotage dans l’application Xiaomi Home, parfait pour une chambre ou une salle de bain.",
          "en": "A small 13 L/day unit with a quiet sleep mode and Xiaomi Home app control, ideal for a bedroom or bathroom.",
          "de": "Kleines 13-L-Gerät mit leisem Schlafmodus und Steuerung per Xiaomi-Home-App, ideal für Schlafzimmer oder Bad.",
          "es": "Modelo pequeño de 13 L al día con modo noche silencioso y control desde la app Xiaomi Home, ideal para dormitorio o baño.",
          "it": "Modello compatto da 13 L al giorno con modalità notte silenziosa e controllo dall’app Xiaomi Home, ideale per la camera da letto o il bagno.",
          "nl": "Klein model van 13 L per dag met stille nachtmodus en bediening via de Xiaomi Home-app, ideaal voor slaapkamer of badkamer.",
          "pl": "Mały model 13 l na dobę z cichym trybem nocnym i sterowaniem w aplikacji Xiaomi Home, idealny do sypialni lub łazienki.",
          "sv": "Liten modell på 13 liter per dygn med tyst nattläge och styrning i appen Xiaomi Home, perfekt för sovrummet eller badrummet.",
          "us": "A small unit rated at 27 pints (13 L) a day, with a quiet sleep mode and Xiaomi Home app control, ideal for a bedroom or bathroom.",
          "ca": "A small 13 L/day unit with a quiet sleep mode and Xiaomi Home app control, ideal for a bedroom or bathroom."
        }
      }
    ]
  },
  "guide-jardin-connecte-2026": {
    "question": {
      "fr": "Quelle est la meilleure tondeuse robot pour un jardin connecté en 2026 ?",
      "en": "What is the best robot mower for a smart garden in 2026?",
      "de": "Welcher Mähroboter ist der beste für einen vernetzten Garten 2026?",
      "es": "¿Cuál es el mejor robot cortacésped para un jardín inteligente en 2026?",
      "it": "Qual è il miglior robot tagliaerba per un giardino smart nel 2026?",
      "nl": "Wat is de beste robotmaaier voor een slimme tuin in 2026?",
      "pl": "Jaki jest najlepszy robot koszący do inteligentnego ogrodu w 2026 roku?",
      "sv": "Vilken robotgräsklippare är bäst för en smart trädgård 2026?",
      "us": "What is the best robot lawn mower for a smart yard in 2026?",
      "ca": "What is the best robot mower for a smart backyard in 2026?"
    },
    "picks": [
      {
        "model": "Mammotion LUBA 3 AWD 5000",
        "role": {
          "fr": "Idéal pour les pentes",
          "en": "Best for sloped lawns",
          "de": "Beste für Hanglagen",
          "es": "Ideal para pendientes",
          "it": "Ideale per i pendii",
          "nl": "Beste voor hellingen",
          "pl": "Najlepszy na pochyły teren",
          "sv": "Bäst för sluttande gräsmattor",
          "us": "Best for sloped lawns",
          "ca": "Best for sloped lawns"
        },
        "why": {
          "fr": "Quatre roues motrices, pentes annoncées jusqu'à 80 % et navigation LiDAR, RTK réseau et vision, pour des pelouses jusqu'à 5 000 m².",
          "en": "All-wheel drive, rated for slopes of up to 80%, and LiDAR, network RTK and vision navigation, for lawns of up to 5,000 m².",
          "de": "Allradantrieb, bis zu 80 Prozent Steigung laut Hersteller und Navigation per LiDAR, Netz-RTK und Kamera für bis zu 5.000 Quadratmeter.",
          "es": "Tracción total, pendientes de hasta el 80 % según el fabricante y navegación LiDAR, RTK por red y visión, para céspedes de hasta 5.000 m².",
          "it": "Trazione integrale, pendenze dichiarate fino all'80% e navigazione con LiDAR, RTK di rete e visione artificiale, per prati fino a 5.000 m².",
          "nl": "Vierwielaandrijving, hellingen tot 80 procent volgens de fabrikant en navigatie via LiDAR, netwerk-RTK en camera voor maximaal 5.000 vierkante meter.",
          "pl": "Napęd na cztery koła, deklarowane pokonywanie nachyleń do 80% oraz nawigacja LiDAR, sieciowe RTK i kamery – do trawników o powierzchni do 5000 m².",
          "sv": "Fyrhjulsdrift, lutningar upp till 80 % enligt tillverkaren och navigering med LiDAR, nätverks-RTK och kamera, för gräsmattor upp till 5 000 m².",
          "us": "All-wheel drive, slopes rated up to 80% and LiDAR, network RTK and vision navigation for lawns up to 1.2 acres (5,000 m²).",
          "ca": "All-wheel drive, slopes rated up to 80% and LiDAR, network RTK and vision navigation for lawns up to 5,000 m²."
        }
      },
      {
        "model": "Husqvarna Automower 450X NERA",
        "role": {
          "fr": "Haut de gamme",
          "en": "Premium pick",
          "de": "Premium-Wahl",
          "es": "Gama alta",
          "it": "Fascia alta",
          "nl": "Premiumkeuze",
          "pl": "Z najwyższej półki",
          "sv": "Premiumvalet",
          "us": "Upgrade pick",
          "ca": "Premium pick"
        },
        "why": {
          "fr": "Modèle phare de Husqvarna, à fil ou sans fil avec le kit EPOS, pour 5 000 m² et 50 % de pente, mais c'est le plus cher de la sélection.",
          "en": "Husqvarna’s flagship runs with a boundary wire or wire-free with the EPOS kit, covering 5,000 m² and 50% slopes, but it’s the priciest pick.",
          "de": "Husqvarnas Flaggschiff arbeitet mit Kabel oder mit EPOS-Kit kabellos, für 5.000 Quadratmeter und 50 Prozent Steigung, ist aber das teuerste Modell.",
          "es": "Modelo estrella de Husqvarna, con o sin cable perimetral gracias al kit EPOS, para 5.000 m² y pendientes del 50 %, aunque es el más caro de la selección.",
          "it": "Il modello di punta di Husqvarna, con filo perimetrale o, con il kit EPOS, senza filo: fino a 5.000 m² e pendenze del 50%, ma è il più costoso della selezione.",
          "nl": "Het vlaggenschip van Husqvarna werkt met draad of draadloos met de EPOS-kit, voor 5.000 vierkante meter en 50 procent helling, maar is het duurst.",
          "pl": "Flagowy model Husqvarny, pracujący z przewodem ograniczającym albo – z zestawem EPOS – bez niego; do 5000 m² i nachyleń do 50%, ale to najdroższy model w zestawieniu.",
          "sv": "Husqvarnas toppmodell fungerar med begränsningskabel eller, med EPOS-kitet, helt utan och klarar 5 000 m² och 50 % lutning – men den är dyrast i urvalet.",
          "us": "Husqvarna's flagship runs with a boundary wire, or wire-free with the EPOS kit, covering 1.2 acres (5,000 m²) and 50% slopes, but it's the priciest pick here.",
          "ca": "Husqvarna's flagship works with a boundary wire or wire-free with the EPOS kit, covering 5,000 m² and 50% slopes, but it is the priciest pick."
        }
      },
      {
        "model": "Gardena SILENO City 600",
        "role": {
          "fr": "Idéal pour petits jardins",
          "en": "Best for small gardens",
          "de": "Beste für kleine Gärten",
          "es": "Ideal para jardines pequeños",
          "it": "Ideale per piccoli giardini",
          "nl": "Beste voor kleine tuinen",
          "pl": "Najlepszy do małych ogrodów",
          "sv": "Bäst för små trädgårdar",
          "us": "Best for small yards",
          "ca": "Best for small yards"
        },
        "why": {
          "fr": "Avec son fil périmétrique et une surface maximale de 600 m², c'est l'option la plus abordable de la sélection pour un petit jardin simple.",
          "en": "With its boundary wire and a maximum area of 600 m², it’s the most affordable option here for a small, simple garden.",
          "de": "Mit Begrenzungskabel und maximal 600 Quadratmetern ist es die günstigste Option der Auswahl für einen kleinen, einfachen Garten.",
          "es": "Con cable perimetral y una superficie máxima de 600 m², es la opción más económica de la selección para un jardín pequeño y sencillo.",
          "it": "Con filo perimetrale e una superficie massima di 600 m², è l'opzione più economica della selezione per un giardino piccolo e semplice.",
          "nl": "Met begrenzingsdraad en maximaal 600 vierkante meter is dit de goedkoopste optie van de selectie voor een kleine, eenvoudige tuin.",
          "pl": "Działa z przewodem ograniczającym i obsługuje maksymalnie 600 m² – najbardziej przystępna cenowo opcja w zestawieniu do małego ogrodu o prostym kształcie.",
          "sv": "Med begränsningskabel och en maximal yta på 600 m² är den det mest prisvärda alternativet i urvalet för en liten och enkel trädgård.",
          "us": "With its boundary wire and a maximum area of 6,450 sq ft (600 m²), it's the most affordable option here for a small, simple yard.",
          "ca": "With its perimeter wire and a maximum area of 600 m², it is the most affordable option in the selection for a small, simple yard."
        }
      }
    ]
  },
  "mejor-aire-acondicionado-bajo-consumo": {
    "question": {
      "fr": "Quel est le meilleur climatiseur basse consommation en 2026 ?",
      "en": "What is the best low-energy air conditioner in 2026?",
      "de": "Welche ist die beste stromsparende Klimaanlage 2026?",
      "es": "¿Cuál es el mejor aire acondicionado de bajo consumo en 2026?",
      "it": "Qual è il miglior condizionatore a basso consumo nel 2026?",
      "nl": "Wat is de beste zuinige airco in 2026?",
      "pl": "Jaki jest najlepszy energooszczędny klimatyzator w 2026 roku?",
      "sv": "Vilken energisnål AC är bäst 2026?",
      "us": "What is the most energy-efficient air conditioner in 2026?",
      "ca": "What is the best low-energy air conditioner in 2026?"
    },
    "picks": [
      {
        "model": "Mitsubishi Electric MSZ-AY35VGK",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Split Inverter classé A+++ en froid avec un SEER de 8,7, très silencieux (18 dB(A)) et réputé fiable pour un usage intensif l’été.",
          "en": "An inverter split rated A+++ for cooling, with a SEER of 8.7, very quiet (18 dB(A)) and known for reliability under heavy summer use.",
          "de": "Inverter-Splitgerät mit A+++ beim Kühlen und SEER 8,7, sehr leise (18 dB(A)) und für intensive Sommernutzung als zuverlässig bekannt.",
          "es": "Split Inverter con clase A+++ en frío y SEER de 8,7, muy silencioso (18 dB(A)) y con fama de fiable para un uso intensivo en verano.",
          "it": "Split Inverter in classe A+++ in raffrescamento con SEER 8,7, molto silenzioso (18 dB(A)) e considerato affidabile anche con un uso intenso d’estate.",
          "nl": "Inverter-splitunit met A+++ voor koelen en een SEER van 8,7, erg stil (18 dB(A)) en bekend om zijn betrouwbaarheid bij intensief zomergebruik.",
          "pl": "Inwerterowy klimatyzator typu split z klasą A+++ w chłodzeniu (SEER 8,7), bardzo cichy (18 dB(A)) i uznawany za niezawodny przy intensywnym używaniu latem.",
          "sv": "Inverterstyrd split-AC i energiklass A+++ för kyla med SEER 8,7, mycket tyst (18 dB(A)) och känd för att vara pålitlig även när den går hårt på sommaren.",
          "us": "An inverter mini-split rated A+++ for cooling on the EU label, with a European SEER of 8.7, very quiet (18 dB(A)) and known for reliability under heavy summer use.",
          "ca": "An inverter mini-split rated A+++ (EU) for cooling with a SEER of 8.7, very quiet (18 dB(A)) and known for reliability under heavy summer use."
        }
      },
      {
        "model": "Haier Flexis Plus 3,5 kW",
        "role": {
          "fr": "Meilleur rapport efficacité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación eficiencia-precio",
          "it": "Miglior rapporto efficienza-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek efektywności do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Il offre la classe A+++ en froid (SEER 8,5) et le Wi-Fi de série sur un segment de prix intermédiaire.",
          "en": "It offers A+++ cooling (SEER 8.5) and built-in Wi-Fi at a mid-range price.",
          "de": "Er bietet A+++ beim Kühlen (SEER 8,5) und serienmäßiges WLAN im mittleren Preissegment.",
          "es": "Ofrece clase A+++ en frío (SEER 8,5) y wifi de serie a un precio de gama media.",
          "it": "Offre la classe A+++ in raffrescamento (SEER 8,5) e il Wi-Fi di serie in una fascia di prezzo media.",
          "nl": "Hij biedt A+++ voor koelen (SEER 8,5) en standaard wifi in het middensegment.",
          "pl": "Klasa A+++ w chłodzeniu (SEER 8,5) i Wi-Fi w standardzie – w średnim przedziale cenowym.",
          "sv": "Den ger energiklass A+++ för kyla (SEER 8,5) och inbyggt wifi i mellanprisklassen.",
          "us": "It delivers A+++ cooling on the EU label (European SEER 8.5) and built-in Wi-Fi at a midrange price.",
          "ca": "It delivers A+++ cooling (SEER 8.5) and built-in Wi-Fi in the mid-price segment."
        }
      },
      {
        "model": "Daikin Perfera FTXM35R",
        "role": {
          "fr": "Idéal pour chauffer toute l’année",
          "en": "Best for year-round heating",
          "de": "Ideal zum ganzjährigen Heizen",
          "es": "Ideal para frío y calor todo el año",
          "it": "Ideale per riscaldare tutto l’anno",
          "nl": "Ideaal om het hele jaar te verwarmen",
          "pl": "Najlepszy do ogrzewania przez cały rok",
          "sv": "Bäst för uppvärmning året runt",
          "us": "Best for year-round heating",
          "ca": "Best for year-round heating"
        },
        "why": {
          "fr": "Seul modèle de la sélection classé A+++ en froid et en chaud (SEER 8,65, SCOP 5,10), avec chauffage jusqu’à −20 °C.",
          "en": "The only model in the selection rated A+++ for both cooling and heating (SEER 8.65, SCOP 5.10), and it can heat in temperatures as low as −20°C.",
          "de": "Einziges Modell der Auswahl mit A+++ beim Kühlen und Heizen (SEER 8,65, SCOP 5,10), heizt bis −20 °C.",
          "es": "El único de la selección con A+++ en frío y en calor (SEER 8,65, SCOP 5,10), con calefacción hasta −20 °C.",
          "it": "L’unico modello della selezione in classe A+++ sia in raffrescamento sia in riscaldamento (SEER 8,65, SCOP 5,10), e scalda anche con −20 °C all’esterno.",
          "nl": "Het enige model in de selectie met A+++ voor koelen én verwarmen (SEER 8,65, SCOP 5,10), verwarmt tot −20 °C.",
          "pl": "Jedyny model w zestawieniu z klasą A+++ w chłodzeniu i grzaniu (SEER 8,65, SCOP 5,10); grzeje nawet przy temperaturze zewnętrznej do −20 °C.",
          "sv": "Den enda modellen i urvalet med A+++ för både kyla och värme (SEER 8,65, SCOP 5,10), och den värmer ner till −20 °C.",
          "us": "The only model here rated A+++ for both cooling and heating on the EU label (SEER 8.65, SCOP 5.10), with heating down to −4°F (−20°C).",
          "ca": "The only model in the selection rated A+++ for both cooling and heating (SEER 8.65, SCOP 5.10), heating down to −20°C."
        }
      }
    ]
  },
  "robot-aspirador-piso-pequeno": {
    "question": {
      "fr": "Quel est le meilleur robot aspirateur pour un petit appartement en 2026 ?",
      "en": "What is the best robot vacuum for a small flat in 2026?",
      "de": "Welcher ist der beste Saugroboter für eine kleine Wohnung 2026?",
      "es": "¿Cuál es el mejor robot aspirador para un piso pequeño en 2026?",
      "it": "Qual è il miglior robot aspirapolvere per un piccolo appartamento nel 2026?",
      "nl": "Wat is de beste robotstofzuiger voor een kleine woning in 2026?",
      "pl": "Jaki jest najlepszy robot sprzątający do małego mieszkania w 2026 roku?",
      "sv": "Vilken robotdammsugare är bäst för en liten lägenhet 2026?",
      "us": "What is the best robot vacuum for a small apartment in 2026?",
      "ca": "What is the best robot vacuum for a small apartment in 2026?"
    },
    "picks": [
      {
        "model": "eufy Auto-Empty C10",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Seulement 7,2 cm de haut, navigation laser avec carte et zones interdites, et une station d’auto-vidage à sac de 3 L annoncée pour 60 jours.",
          "en": "Only 7.2 cm tall, laser navigation with a map and no-go zones, and a self-emptying dock with a 3 L bag rated for up to 60 days.",
          "de": "Nur 7,2 cm hoch, Lasernavigation mit Karte und Sperrzonen sowie eine Absaugstation mit 3-l-Beutel für bis zu 60 Tage laut Hersteller.",
          "es": "Solo 7,2 cm de alto, navegación láser con mapa y zonas prohibidas, y base de autovaciado con bolsa de 3 L que dura hasta 60 días según el fabricante.",
          "it": "Alto solo 7,2 cm, navigazione laser con mappa e zone vietate, e base di autosvuotamento con sacchetto da 3 L che, secondo il produttore, dura 60 giorni.",
          "nl": "Slechts 7,2 cm hoog, lasernavigatie met kaart en no-gozones, en een zelfleegstation met zak van 3 l die tot 60 dagen meegaat.",
          "pl": "Zaledwie 7,2 cm wysokości, nawigacja laserowa z mapą i strefami zakazanymi oraz stacja z automatycznym opróżnianiem i workiem 3 l, który według producenta wystarcza na 60 dni.",
          "sv": "Bara 7,2 cm hög, lasernavigering med karta och förbjudna zoner, och en självtömmande station med påse på 3 liter som enligt tillverkaren räcker i upp till 60 dagar.",
          "us": "Only 2.8 in (7.2 cm) tall, with laser navigation, a map and no-go zones, plus a self-emptying dock with a 3 L bag rated for up to 60 days.",
          "ca": "Only 7.2 cm tall, laser navigation with a map and no-go zones, and a self-emptying dock with a 3 L bag rated for up to 60 days."
        }
      },
      {
        "model": "Xiaomi Robot Vacuum E5",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Le plus bas de la sélection avec 7 cm, il aspire et lave légèrement, et se contente d’une petite base de charge : idéal pour un studio.",
          "en": "The lowest pick at just 7 cm: it vacuums, mops lightly and only needs a small charging base, so it’s ideal for a studio flat.",
          "de": "Mit 7 cm der flachste der Auswahl, saugt und wischt leicht und braucht nur eine kleine Ladestation: ideal für ein Studio.",
          "es": "El más bajo de la selección, con 7 cm: aspira, friega de forma ligera y solo necesita una base de carga pequeña. Ideal para un estudio.",
          "it": "Con 7 cm è il più basso della selezione: aspira, fa anche un lavaggio leggero e si accontenta di una piccola base di ricarica. Ideale per un monolocale.",
          "nl": "Met 7 cm de laagste van de selectie, zuigt en dweilt licht en heeft alleen een klein laadstation nodig: ideaal voor een studio.",
          "pl": "Najniższy w zestawieniu (7 cm): odkurza, lekko przeciera podłogę na mokro i wystarcza mu niewielka stacja ładująca. Idealny do kawalerki.",
          "sv": "Lägst i urvalet med sina 7 cm: den dammsuger, moppar lätt och behöver bara en liten laddstation. Perfekt för en etta.",
          "us": "The lowest-profile pick at 2.76 in (7 cm), it vacuums and lightly mops and needs only a small charging base: ideal for a studio apartment.",
          "ca": "The lowest pick at 7 cm, it vacuums and lightly mops and only needs a small charging base: ideal for a one-room studio."
        }
      },
      {
        "model": "Roborock Q7 M5",
        "role": {
          "fr": "Idéal pour plusieurs pièces",
          "en": "Best for multi-room flats",
          "de": "Ideal für mehrere Zimmer",
          "es": "Ideal para varias habitaciones",
          "it": "Ideale per più stanze",
          "nl": "Ideaal voor meerdere kamers",
          "pl": "Idealny do kilku pomieszczeń",
          "sv": "Bäst för lägenheter med flera rum",
          "us": "Best for multi-room apartments",
          "ca": "Best for multi-room apartments"
        },
        "why": {
          "fr": "Navigation LiDAR 360° pièce par pièce, 10 000 Pa annoncés et brosses anti-emmêlement, avec une simple base de charge peu encombrante.",
          "en": "360° LiDAR room-by-room navigation, a claimed 10,000 Pa and anti-tangle brushes, with a simple, space-saving charging base.",
          "de": "360°-LiDAR-Navigation Raum für Raum, 10.000 Pa laut Hersteller und Anti-Verheddern-Bürsten, mit platzsparender einfacher Ladestation.",
          "es": "Navegación LiDAR de 360° habitación por habitación, 10.000 Pa anunciados y cepillos antienredos, con una base de carga sencilla que ocupa poco.",
          "it": "Navigazione LiDAR a 360° stanza per stanza, 10.000 Pa dichiarati e spazzole anti-groviglio, con una base di ricarica semplice e compatta.",
          "nl": "360°-LiDAR-navigatie per kamer, 10.000 Pa volgens de fabrikant en anti-klitborstels, met een eenvoudig, ruimtebesparend laadstation.",
          "pl": "Nawigacja LiDAR 360° i sprzątanie pokój po pokoju, deklarowana siła ssania 10 000 Pa i szczotki zapobiegające plątaniu się włosów, a do tego prosta, niewielka stacja ładująca.",
          "sv": "LiDAR-navigering i 360° rum för rum, angivna 10 000 Pa och trasselfria borstar, med en enkel laddstation som tar lite plats.",
          "us": "360° LiDAR room-by-room navigation, a claimed 10,000 Pa and anti-tangle brushes, with a simple, space-saving charging base.",
          "ca": "360° LiDAR room-by-room navigation, a claimed 10,000 Pa and anti-tangle brushes, with a simple, space-saving charging base."
        }
      }
    ]
  },
  "eclairage-exterieur-solaire-connecte": {
    "question": {
      "fr": "Quel est le meilleur éclairage extérieur solaire connecté en 2026 ?",
      "en": "What are the best smart solar garden lights in 2026?",
      "de": "Welche ist die beste smarte Solar-Außenbeleuchtung 2026?",
      "es": "¿Cuáles son las mejores luces solares de exterior con app en 2026?",
      "it": "Quali sono le migliori luci solari da esterno smart nel 2026?",
      "nl": "Wat is de beste slimme buitenverlichting op zonne-energie in 2026?",
      "pl": "Jakie jest najlepsze inteligentne oświetlenie solarne na zewnątrz w 2026 roku?",
      "sv": "Vilken smart utomhusbelysning med solceller är bäst 2026?",
      "us": "What are the best smart solar outdoor lights in 2026?",
      "ca": "What is the best smart solar outdoor lighting in 2026?"
    },
    "picks": [
      {
        "model": "eufy Solar Wall Light Cam S120",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Applique solaire de 300 lumens avec caméra 2K, détecteur de mouvement et alertes Wi-Fi, IP65, sans aucun câble à tirer.",
          "en": "A 300-lumen solar wall light with a 2K camera, motion sensor and Wi-Fi alerts, rated IP65, with no cable to run.",
          "de": "Solar-Wandleuchte mit 300 Lumen, 2K-Kamera, Bewegungsmelder und WLAN-Warnungen, IP65, ganz ohne Kabel.",
          "es": "Aplique solar de 300 lúmenes con cámara 2K, detector de movimiento y avisos por wifi, IP65, sin cables que tender.",
          "it": "Applique solare da 300 lumen con telecamera 2K, sensore di movimento e avvisi via Wi-Fi, IP65, senza dover tirare cavi.",
          "nl": "Solar wandlamp van 300 lumen met 2K-camera, bewegingssensor en wifimeldingen, IP65, zonder enige kabel.",
          "pl": "Solarna lampa ścienna o jasności 300 lumenów z kamerą 2K, czujnikiem ruchu i powiadomieniami przez Wi-Fi, IP65 – bez prowadzenia jakichkolwiek przewodów.",
          "sv": "Solcellsdriven vägglampa på 300 lumen med 2K-kamera, rörelsesensor och notiser via wifi, IP65 och ingen kabel att dra.",
          "us": "A 300-lumen solar wall light with a 2K camera, motion sensor and Wi-Fi alerts, rated IP65, with no cable to run.",
          "ca": "A 300-lumen solar wall light with a 2K camera, motion sensor and Wi-Fi alerts, rated IP65, with no cable to run."
        }
      },
      {
        "model": "Govee Outdoor Solar String Lights",
        "role": {
          "fr": "Ambiance solaire pilotable",
          "en": "Best for solar mood lighting",
          "de": "Steuerbare Solar-Atmosphäre",
          "es": "Ambiente solar desde el móvil",
          "it": "Luci d’atmosfera solari con app",
          "nl": "Bedienbare solarsfeer",
          "pl": "Nastrojowe oświetlenie solarne z aplikacją",
          "sv": "Styrbart stämningsljus med solceller",
          "us": "Best for solar mood lighting",
          "ca": "Controllable solar ambience"
        },
        "why": {
          "fr": "Guirlande solaire de 10 m à ampoules RGBICW, pilotable en Bluetooth avec scènes et programmation, pour une terrasse sans prise.",
          "en": "10 m solar string lights with RGBICW bulbs, controlled over Bluetooth with scenes and schedules, for a patio with no socket.",
          "de": "10-m-Solar-Lichterkette mit RGBICW-Birnen, per Bluetooth mit Szenen und Zeitplänen steuerbar, für Terrassen ohne Steckdose.",
          "es": "Guirnalda solar de 10 m con bombillas RGBICW, controlable por Bluetooth con escenas y horarios, para terrazas sin enchufe.",
          "it": "Catena luminosa solare da 10 m con lampadine RGBICW, da comandare via Bluetooth con scene e programmazione, per un terrazzo senza prese.",
          "nl": "Solar lichtsnoer van 10 m met RGBICW-lampen, via Bluetooth bedienbaar met scènes en schema's, voor een terras zonder stopcontact.",
          "pl": "Solarna girlanda o długości 10 m z żarówkami RGBICW, sterowana przez Bluetooth, ze scenami świetlnymi i harmonogramem – na taras bez gniazdka.",
          "sv": "Solcellsdriven ljusslinga på 10 m med RGBICW-lampor som styrs via Bluetooth med scener och schemaläggning, för en altan utan uttag.",
          "us": "A 33 ft (10 m) solar string light with RGBICW bulbs, controlled over Bluetooth with scenes and schedules, for a patio with no outdoor outlet.",
          "ca": "A 10 m solar string with RGBICW bulbs, controlled over Bluetooth with scenes and schedules, for a patio with no outlet."
        }
      },
      {
        "model": "Philips Hue Lily Outdoor Spot Base Kit",
        "role": {
          "fr": "Mise en lumière premium (filaire)",
          "en": "Premium garden lighting (wired)",
          "de": "Premium-Gartenbeleuchtung (kabelgebunden)",
          "es": "Iluminación de gama alta (con cable)",
          "it": "Illuminazione premium (cablata)",
          "nl": "Premium tuinverlichting (bekabeld)",
          "pl": "Oświetlenie premium (przewodowe)",
          "sv": "Premiumbelysning för trädgården (med kabel)",
          "us": "Best premium landscape lighting (wired)",
          "ca": "Premium landscape lighting (wired)"
        },
        "why": {
          "fr": "Trois spots 24 V de 600 lumens en couleurs, IP65, pilotés via le pont Hue avec Alexa, Google Home, Apple Home et Home Assistant.",
          "en": "Three 24 V colour spotlights of 600 lumens each, IP65, controlled via the Hue Bridge with Alexa, Google Home, Apple Home and Home Assistant.",
          "de": "Drei farbige 24-V-Spots mit je 600 Lumen, IP65, über die Hue Bridge mit Alexa, Google Home, Apple Home und Home Assistant steuerbar.",
          "es": "Tres focos de color a 24 V de 600 lúmenes, IP65, controlados con el Hue Bridge desde Alexa, Google Home, Apple Home y Home Assistant.",
          "it": "Tre faretti a colori a 24 V da 600 lumen, IP65, comandati tramite l'Hue Bridge con Alexa, Google Home, Apple Casa e Home Assistant.",
          "nl": "Drie gekleurde 24 V-spots van 600 lumen, IP65, via de Hue Bridge te bedienen met Alexa, Google Home, Apple Home en Home Assistant.",
          "pl": "Trzy kolorowe reflektory 24 V po 600 lumenów, IP65, sterowane przez mostek Hue – współpracują z Alexą, Google Home, Apple Home i Home Assistant.",
          "sv": "Tre färgspotlights på 24 V med 600 lumen vardera, IP65, som styrs via Hue Bridge med Alexa, Google Home, Apple Home och Home Assistant.",
          "us": "Three 24 V color spotlights at 600 lumens each, IP65, controlled through the Hue Bridge with Alexa, Google Home, Apple Home and Home Assistant.",
          "ca": "Three 24 V colour spotlights of 600 lumens each, IP65, controlled via the Hue Bridge with Alexa, Google Home, Apple Home and Home Assistant."
        }
      }
    ]
  },
  "sonnette-video-sans-abonnement": {
    "question": {
      "fr": "Quelle est la meilleure sonnette vidéo sans abonnement en 2026 ?",
      "en": "What is the best video doorbell with no subscription in 2026?",
      "de": "Welche ist die beste Video-Türklingel ohne Abo 2026?",
      "es": "¿Cuál es el mejor timbre con cámara sin suscripción en 2026?",
      "it": "Qual è il miglior videocitofono Wi-Fi senza abbonamento nel 2026?",
      "nl": "Wat is de beste videodeurbel zonder abonnement in 2026?",
      "pl": "Jaki jest najlepszy dzwonek wideo bez abonamentu w 2026 roku?",
      "sv": "Vilken videodörrklocka utan abonnemang är bäst 2026?",
      "us": "What is the best video doorbell with no subscription in 2026?",
      "ca": "What is the best video doorbell without a subscription in 2026?"
    },
    "picks": [
      {
        "model": "Eufy Video Doorbell E340",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Double caméra pour visiteur et colis, 8 Go de stockage intégré sans abonnement, et alimentation sur batterie ou sur le câblage existant.",
          "en": "A dual camera for visitors and parcels, 8 GB of built-in storage with no subscription, and it runs on battery or your existing doorbell wiring.",
          "de": "Doppelkamera für Besucher und Pakete, 8 GB interner Speicher ohne Abo sowie Betrieb per Akku oder vorhandener Klingelleitung.",
          "es": "Doble cámara para visitas y paquetes, 8 GB de almacenamiento integrado sin suscripción y alimentación por batería o por el cableado del timbre que ya tienes.",
          "it": "Doppia telecamera per visitatori e pacchi, 8 GB di memoria integrata senza abbonamento e alimentazione a batteria o tramite i fili del vecchio campanello.",
          "nl": "Dubbele camera voor bezoekers en pakketjes, 8 GB ingebouwde opslag zonder abonnement en voeding via accu of bestaande bedrading.",
          "pl": "Dwie kamery – na gości i na paczki – 8 GB wbudowanej pamięci bez abonamentu oraz zasilanie bateryjne lub z istniejącego okablowania dzwonka.",
          "sv": "Dubbla kameror för besökare och paket, 8 GB inbyggd lagring utan abonnemang och drift med batteri eller via de befintliga ringklockskablarna.",
          "us": "A dual camera that watches both visitors and packages, 8 GB of built-in storage with no subscription, and power from a battery or your existing doorbell wiring.",
          "ca": "A dual camera for visitors and packages, 8 GB of built-in storage with no subscription, and battery or existing-wiring power."
        }
      },
      {
        "model": "TP-Link Tapo D235",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Image 2K de 5 mégapixels à 180°, microSD jusqu'à 512 Go, carillon fourni et détections gratuites, pour un tarif d'entrée de gamme.",
          "en": "5 MP 2K video with a 180° view, microSD up to 512 GB, an included chime and free detection, at an entry-level price.",
          "de": "2K-Bild mit 5 MP und 180°, microSD bis 512 GB, mitgelieferter Gong und kostenlose Erkennung zum Einstiegspreis.",
          "es": "Imagen 2K de 5 MP a 180°, microSD de hasta 512 GB, carillón incluido y detecciones gratuitas, a precio de gama de entrada.",
          "it": "Immagine 2K da 5 MP a 180°, microSD fino a 512 GB, suoneria interna inclusa e rilevamento gratuito, a un prezzo di fascia d'ingresso.",
          "nl": "2K-beeld van 5 MP met 180°, microSD tot 512 GB, meegeleverde gong en gratis detectie, voor een instapprijs.",
          "pl": "Obraz 2K (5 Mpx) z kątem widzenia 180°, obsługa kart microSD do 512 GB, gong w zestawie i bezpłatne funkcje wykrywania – a wszystko to w cenie modelu z niższej półki.",
          "sv": "2K-bild på 5 MP med 180° bildvinkel, microSD upp till 512 GB, medföljande ringklocka för inomhusbruk och gratis detektering – i instegsklassen.",
          "us": "5 MP 2K video with a 180° view, microSD up to 512 GB, an included chime and free smart detection, at an entry-level price.",
          "ca": "5 MP 2K video with a 180° view, microSD up to 512 GB, an included chime and free detection, at an entry-level price."
        }
      },
      {
        "model": "Aqara Video Doorbell G4",
        "role": {
          "fr": "Pour Apple Home",
          "en": "Best for Apple Home",
          "de": "Für Apple Home",
          "es": "Para Apple Home",
          "it": "Per Apple Casa",
          "nl": "Voor Apple Woning",
          "pl": "Dla Apple Home",
          "sv": "Bäst för Apple Home",
          "us": "Best for Apple Home",
          "ca": "Best for Apple Home"
        },
        "why": {
          "fr": "Compatible HomeKit Secure Video, elle enregistre aussi gratuitement sur la microSD de son carillon et fonctionne sur piles ou en filaire.",
          "en": "It supports HomeKit Secure Video, also records for free to the microSD card in its chime, and can run on batteries or be hardwired.",
          "de": "Unterstützt HomeKit Secure Video, zeichnet zusätzlich kostenlos auf die microSD-Karte im Gong auf und läuft mit Batterien oder Kabel.",
          "es": "Compatible con HomeKit Secure Video, también graba gratis en la microSD de su carillón y funciona con pilas o cable.",
          "it": "Compatibile con HomeKit Secure Video, registra gratis anche sulla microSD della suoneria interna e funziona a pile o collegata via cavo.",
          "nl": "Ondersteunt HomeKit Secure Video, neemt ook gratis op de microSD-kaart in de gong op en werkt op batterijen of bedraad.",
          "pl": "Zgodny z HomeKit Secure Video, a przy tym bezpłatnie nagrywa na kartę microSD w gongu. Działa na baterie lub przewodowo.",
          "sv": "Stöder HomeKit Secure Video, spelar dessutom in gratis på microSD-kortet i ringklockan inomhus och drivs med batterier eller kabel.",
          "us": "It supports HomeKit Secure Video, also records for free to the microSD card in its chime, and runs on batteries or existing doorbell wiring.",
          "ca": "It supports HomeKit Secure Video, also records for free to the microSD card in its chime, and runs on batteries or wiring."
        }
      }
    ]
  },
  "meilleur-airfryer-xxl-grande-famille": {
    "question": {
      "fr": "Quel est le meilleur airfryer XXL pour une grande famille en 2026 ?",
      "en": "What is the best XXL air fryer for a large family in 2026?",
      "de": "Welche ist die beste XXL-Heißluftfritteuse für große Familien 2026?",
      "es": "¿Cuál es la mejor freidora de aire XXL para una familia numerosa en 2026?",
      "it": "Qual è la migliore friggitrice ad aria XXL per una famiglia numerosa nel 2026?",
      "nl": "Wat is de beste XXL-airfryer voor een groot gezin in 2026?",
      "pl": "Jaka jest najlepsza frytkownica beztłuszczowa XXL dla dużej rodziny w 2026 roku?",
      "sv": "Vilken XXL-airfryer är bäst för en storfamilj 2026?",
      "us": "What is the best extra-large air fryer for a big family in 2026?",
      "ca": "What is the best XXL air fryer for a large family in 2026?"
    },
    "picks": [
      {
        "model": "Ninja Foodi FlexDrawer 10.4L Double Zone",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción en general",
          "it": "Miglior scelta complessiva",
          "nl": "Beste algemene keuze",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Deux zones indépendantes de 5,2 L ou un seul grand tiroir de 10,4 L (MegaZone) : la plus grande capacité et la plus polyvalente de la sélection.",
          "en": "Two independent 5.2 L zones or one large 10.4 L drawer (MegaZone): the biggest capacity and the most versatile pick here.",
          "de": "Zwei unabhängige 5,2-L-Zonen oder eine große 10,4-L-Schublade (MegaZone): die höchste Kapazität und das vielseitigste Modell der Auswahl.",
          "es": "Dos zonas independientes de 5,2 L o un único cajón grande de 10,4 L (MegaZone): la mayor capacidad y el modelo más versátil de la selección.",
          "it": "Due zone indipendenti da 5,2 L o un unico grande cassetto da 10,4 L (MegaZone): la capacità maggiore e il modello più versatile della selezione.",
          "nl": "Twee onafhankelijke zones van 5,2 L of één grote lade van 10,4 L (MegaZone): de grootste capaciteit en het veelzijdigste model van de selectie.",
          "pl": "Dwie niezależne strefy po 5,2 l albo jedna duża szuflada 10,4 l (MegaZone) – największa pojemność i najbardziej wszechstronny model w zestawieniu.",
          "sv": "Två fristående zoner på 5,2 liter eller en stor låda på 10,4 liter (MegaZone): störst volym och mest mångsidig i urvalet.",
          "us": "Two independent 5.5 qt (5.2 L) zones or one large 11 qt (10.4 L) drawer (MegaZone): the biggest capacity and the most versatile model here.",
          "ca": "Two independent 5.2 L zones or one large 10.4 L drawer (MegaZone): the highest capacity and the most versatile model in the selection."
        }
      },
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Idéal pour les cuisines étroites",
          "en": "Best for narrow kitchens",
          "de": "Ideal für schmale Küchen",
          "es": "Ideal para cocinas estrechas",
          "it": "Ideale per cucine strette",
          "nl": "Ideaal voor smalle keukens",
          "pl": "Najlepsza do wąskich kuchni",
          "sv": "Bäst för smala kök",
          "us": "Best for narrow kitchens",
          "ca": "Best for narrow kitchens"
        },
        "why": {
          "fr": "Deux tiroirs indépendants de 4,75 L superposés : 9,5 L au total pour environ 28 cm de large, avec cuisson possible sur quatre niveaux.",
          "en": "Two independent 4.75 L drawers stacked one above the other: 9.5 L in total, only about 28 cm wide, and you can cook on up to four levels.",
          "de": "Zwei unabhängige 4,75-L-Schubladen übereinander: insgesamt 9,5 L auf nur etwa 28 cm Breite, mit Garen auf bis zu vier Ebenen.",
          "es": "Dos cajones independientes de 4,75 L apilados: 9,5 L en total en unos 28 cm de ancho, con cocción en hasta cuatro niveles.",
          "it": "Due cassetti indipendenti da 4,75 L, uno sopra l’altro: 9,5 L in tutto in circa 28 cm di larghezza, e si può cuocere su quattro livelli.",
          "nl": "Twee onafhankelijke lades van 4,75 L boven elkaar: 9,5 L in totaal op zo’n 28 cm breedte, met bakken op maximaal vier niveaus.",
          "pl": "Dwie niezależne szuflady po 4,75 l, ustawione jedna nad drugą: łącznie 9,5 l przy szerokości ok. 28 cm i możliwość przyrządzania potraw na czterech poziomach.",
          "sv": "Två fristående lådor på 4,75 liter staplade på varandra: totalt 9,5 liter på ca 28 cm bredd, med tillagning på upp till fyra nivåer.",
          "us": "Two independent 5 qt (4.75 L) drawers stacked vertically: 10 qt (9.5 L) in total in a footprint about 11 in (28 cm) wide, with cooking on up to four levels.",
          "ca": "Two independent 4.75 L drawers stacked vertically: 9.5 L in total in a width of about 28 cm, with cooking on up to four levels."
        }
      },
      {
        "model": "Philips Airfryer Combi XXL Connecté - 8.3L",
        "role": {
          "fr": "Meilleur airfryer connecté",
          "en": "Best smart air fryer",
          "de": "Beste vernetzte Heißluftfritteuse",
          "es": "Mejor freidora de aire conectada",
          "it": "Migliore friggitrice ad aria smart",
          "nl": "Beste verbonden airfryer",
          "pl": "Najlepsza frytkownica z Wi-Fi",
          "sv": "Bästa uppkopplade airfryern",
          "us": "Best smart air fryer",
          "ca": "Best smart air fryer"
        },
        "why": {
          "fr": "Un grand panier de 8,3 L, le Wi-Fi avec l’app HomeID et un thermomètre de cuisson intégré : idéal pour les rôtis et les volailles entières.",
          "en": "A large 8.3 L basket, Wi-Fi with the HomeID app and a built-in cooking probe: ideal for roasting joints and whole birds.",
          "de": "Ein großer 8,3-L-Korb, WLAN mit der HomeID-App und ein integriertes Garthermometer: ideal für Braten und ganzes Geflügel.",
          "es": "Una cesta grande de 8,3 L, wifi con la app HomeID y un termómetro de cocción integrado: ideal para asados y aves enteras.",
          "it": "Un grande cestello da 8,3 L, Wi-Fi con l’app HomeID e una sonda di cottura integrata: ideale per arrosti e polli interi.",
          "nl": "Een grote mand van 8,3 L, wifi met de HomeID-app en een ingebouwde kerntemperatuurmeter: ideaal voor rollades en hele kippen.",
          "pl": "Duży kosz 8,3 l, Wi-Fi z aplikacją HomeID i wbudowana sonda temperatury – idealna do pieczeni i drobiu w całości.",
          "sv": "En stor korg på 8,3 liter, wifi med appen HomeID och inbyggd stektermometer: perfekt för stekar och hela fåglar.",
          "us": "A large 8.8 qt (8.3 L) basket, Wi-Fi with the HomeID app and a built-in temperature probe: ideal for roasts and whole chickens.",
          "ca": "A large 8.3 L basket, Wi-Fi with the HomeID app and a built-in food thermometer: ideal for roasts and whole poultry."
        }
      }
    ]
  },
  "robot-aspirateur-vs-balai": {
    "question": {
      "fr": "Robot aspirateur ou aspirateur balai : lequel choisir en 2026 ?",
      "en": "Robot vacuum or cordless vacuum: which should you choose in 2026?",
      "de": "Saugroboter oder Stielsauger: Was solltest du 2026 wählen?",
      "es": "Robot aspirador o aspiradora sin cable: ¿cuál elegir en 2026?",
      "it": "Robot aspirapolvere o scopa elettrica: quale scegliere nel 2026?",
      "nl": "Robotstofzuiger of steelstofzuiger: welke kies je in 2026?",
      "pl": "Robot sprzątający czy odkurzacz pionowy – co wybrać w 2026 roku?",
      "sv": "Robotdammsugare eller sladdlös dammsugare: vilken ska du välja 2026?",
      "us": "Robot vacuum or stick vacuum: which should you buy in 2026?",
      "ca": "Robot vacuum or stick vacuum: which should you choose in 2026?"
    },
    "picks": [
      {
        "model": "Roborock Qrevo Curv",
        "role": {
          "fr": "Meilleur robot aspirateur",
          "en": "Best robot vacuum",
          "de": "Bester Saugroboter",
          "es": "Mejor robot aspirador",
          "it": "Miglior robot aspirapolvere",
          "nl": "Beste robotstofzuiger",
          "pl": "Najlepszy robot sprzątający",
          "sv": "Bästa robotdammsugaren",
          "us": "Best robot vacuum",
          "ca": "Best robot vacuum"
        },
        "why": {
          "fr": "Pour un entretien quotidien sans effort : 18 500 Pa annoncés, LiDAR, serpillères rotatives et station qui vide, lave à l’eau chaude et sèche.",
          "en": "For effortless daily cleaning: rated at 18,500 Pa, with LiDAR, rotating mops and a dock that empties, hot-washes and dries.",
          "de": "Für mühelose tägliche Pflege: laut Hersteller 18.500 Pa, LiDAR, rotierende Mopps und eine Station, die entleert, heiß wäscht und trocknet.",
          "es": "Para un mantenimiento diario sin esfuerzo: 18.500 Pa anunciados, LiDAR, mopas giratorias y base que vacía el depósito, lava las mopas con agua caliente y las seca.",
          "it": "Per una pulizia quotidiana senza fatica: 18.500 Pa dichiarati, LiDAR, mop rotanti e una base che svuota il contenitore, lava i mop con acqua calda e li asciuga.",
          "nl": "Voor moeiteloos dagelijks onderhoud: opgegeven 18.500 Pa, LiDAR, roterende dweilen en een station dat leegt, warm wast en droogt.",
          "pl": "Codzienne sprzątanie bez wysiłku: deklarowana siła ssania 18 500 Pa, LiDAR, obrotowe mopy i stacja, która opróżnia pojemnik, pierze mopy w gorącej wodzie i je suszy.",
          "sv": "För daglig städning utan ansträngning: 18 500 Pa enligt tillverkaren, LiDAR, roterande moppar och en station som tömmer, tvättar med varmt vatten och torkar.",
          "us": "For effortless daily cleaning: rated at 18,500 Pa, with LiDAR, spinning mops and a dock that empties the bin, washes the mops in hot water and dries them.",
          "ca": "For effortless daily cleaning: rated at 18,500 Pa, with LiDAR, rotating mops and a dock that empties, hot-washes and dries."
        }
      },
      {
        "model": "Dyson V15 Detect",
        "role": {
          "fr": "Meilleur aspirateur balai",
          "en": "Best cordless vacuum",
          "de": "Bester Akku-Stielsauger",
          "es": "Mejor aspiradora sin cable",
          "it": "Migliore scopa elettrica",
          "nl": "Beste steelstofzuiger",
          "pl": "Najlepszy odkurzacz pionowy",
          "sv": "Bästa sladdlösa dammsugaren",
          "us": "Best stick vacuum",
          "ca": "Best stick vacuum"
        },
        "why": {
          "fr": "Indispensable pour escaliers, tapis et canapé : laser qui révèle la poussière fine, capteur qui ajuste la puissance et filtration scellée.",
          "en": "Essential for stairs, rugs and the sofa: a laser that reveals fine dust, a sensor that adjusts power and sealed filtration.",
          "de": "Unverzichtbar für Treppe, Teppiche und Sofa: Laser macht feinen Staub sichtbar, ein Sensor passt die Leistung an, dazu versiegelte Filterung.",
          "es": "Imprescindible para escaleras, alfombras y sofá: láser que revela el polvo fino, sensor que ajusta la potencia y filtración sellada.",
          "it": "Indispensabile per scale, tappeti e divano: un laser che rende visibile la polvere fine, un sensore che regola la potenza e la filtrazione sigillata.",
          "nl": "Onmisbaar voor trap, vloerkleden en bank: laser die fijn stof zichtbaar maakt, sensor die het vermogen aanpast en afgedichte filtering.",
          "pl": "Niezastąpiony na schodach, dywanach i kanapie: laser, który pokazuje drobny kurz, czujnik dopasowujący moc ssania i szczelny układ filtracji.",
          "sv": "Oumbärlig för trappor, mattor och soffan: laser som synliggör fint damm, sensor som anpassar effekten och tätad filtrering.",
          "us": "Essential for stairs, rugs and the couch: a laser that reveals fine dust, a sensor that adjusts suction and sealed filtration.",
          "ca": "Essential for stairs, rugs and the sofa: a laser that reveals fine dust, a sensor that adjusts power and sealed filtration."
        }
      },
      {
        "model": "Roborock Q7 M5+",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Robot d’entrée de gamme idéal en duo avec un balai : navigation LiDAR, 10 000 Pa annoncés et vidage automatique dans un sac de 2,7 L.",
          "en": "An entry-level robot that pairs well with a cordless vacuum: LiDAR navigation, a quoted 10,000 Pa and auto-emptying into a 2.7 L bag.",
          "de": "Einsteigerroboter, ideal im Duo mit einem Stielsauger: LiDAR-Navigation, angegebene 10.000 Pa und Absaugstation mit 2,7-l-Beutel.",
          "es": "Robot básico ideal para combinar con una aspiradora sin cable: navegación LiDAR, 10.000 Pa anunciados y autovaciado en una bolsa de 2,7 L.",
          "it": "Robot di fascia d’ingresso, ideale in coppia con una scopa elettrica: navigazione LiDAR, 10.000 Pa dichiarati e svuotamento automatico in un sacchetto da 2,7 L.",
          "nl": "Instaprobot die ideaal samengaat met een steelstofzuiger: LiDAR-navigatie, opgegeven 10.000 Pa en automatisch legen in een zak van 2,7 l.",
          "pl": "Robot z niższej półki, który świetnie uzupełnia odkurzacz pionowy: nawigacja LiDAR, deklarowana siła ssania 10 000 Pa i automatyczne opróżnianie do worka 2,7 l.",
          "sv": "En robot i instegsklassen som gör sig bra ihop med en sladdlös dammsugare: LiDAR-navigering, angivna 10 000 Pa och självtömning i en påse på 2,7 liter.",
          "us": "An entry-level robot that pairs well with a stick vacuum: LiDAR navigation, a quoted 10,000 Pa and self-emptying into a 2.7 L bag.",
          "ca": "An entry-level robot that pairs well with a stick vacuum: LiDAR navigation, a quoted 10,000 Pa and auto-emptying into a 2.7 L bag."
        }
      }
    ]
  },
  "guide-securite-maison-connectee-2026": {
    "question": {
      "fr": "Quel équipement choisir pour sécuriser sa maison connectée en 2026 ?",
      "en": "Which smart home security devices should you choose in 2026?",
      "de": "Welche Geräte sind 2026 die besten für die Sicherheit im Smart Home?",
      "es": "¿Qué dispositivos elegir para proteger tu casa inteligente en 2026?",
      "it": "Quali dispositivi scegliere per la sicurezza della casa smart nel 2026?",
      "nl": "Welke apparatuur is in 2026 het beste voor de beveiliging van een slim huis?",
      "pl": "Jaki sprzęt wybrać, by zabezpieczyć inteligentny dom w 2026 roku?",
      "sv": "Vilken utrustning är bäst för att skydda ditt smarta hem 2026?",
      "us": "What is the best smart home security gear in 2026?",
      "ca": "What is the best smart home security equipment in 2026?"
    },
    "picks": [
      {
        "model": "Ajax StarterKit 4G",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Centrale avec Ethernet et 4G, détecteurs de mouvement et d’ouverture, sans abonnement obligatoire : la base la plus fiable d’un système complet.",
          "en": "A hub with Ethernet and 4G, motion and door/window sensors, and no mandatory subscription: the most reliable foundation for a complete system.",
          "de": "Zentrale mit Ethernet und 4G, Bewegungs- und Öffnungsmelder, ohne Abo-Pflicht: die zuverlässigste Basis für ein komplettes System.",
          "es": "Central con Ethernet y 4G, sensores de movimiento y apertura, sin suscripción obligatoria: la base más fiable de un sistema completo.",
          "it": "Centrale con Ethernet e 4G, sensori di movimento e apertura, senza abbonamento obbligatorio: la base più affidabile di un sistema completo.",
          "nl": "Centrale met ethernet en 4G, bewegings- en openingsmelder, zonder verplicht abonnement: de betrouwbaarste basis voor een compleet systeem.",
          "pl": "Centrala z łącznością Ethernet i 4G, czujniki ruchu i otwarcia, bez obowiązkowego abonamentu – najpewniejsza podstawa kompletnego systemu.",
          "sv": "Centralenhet med Ethernet och 4G, rörelsesensorer och magnetkontakter, utan krav på abonnemang: den pålitligaste grunden för ett komplett system.",
          "us": "A hub with Ethernet and 4G, motion and door/window sensors and no required subscription: the most reliable foundation for a complete system.",
          "ca": "A hub with Ethernet and 4G, motion and door/window sensors and no mandatory subscription: the most reliable foundation for a complete system."
        }
      },
      {
        "model": "Eufy Video Doorbell E340",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Double caméra pour les visiteurs et les colis, 8 Go de stockage intégré et aucun abonnement nécessaire pour l’historique vidéo.",
          "en": "Dual camera for visitors and parcels, 8 GB of built-in storage and no subscription needed for video history.",
          "de": "Doppelkamera für Besucher und Pakete, 8 GB interner Speicher und kein Abo für den Videoverlauf nötig.",
          "es": "Doble cámara para visitas y paquetes, 8 GB de almacenamiento interno y sin suscripción para el historial de vídeo.",
          "it": "Doppia telecamera per visitatori e pacchi, 8 GB di memoria integrata e nessun abbonamento per lo storico video.",
          "nl": "Dubbele camera voor bezoekers en pakketten, 8 GB interne opslag en geen abonnement nodig voor de videogeschiedenis.",
          "pl": "Dwie kamery – na gości i na paczki – 8 GB wbudowanej pamięci i historia nagrań bez żadnego abonamentu.",
          "sv": "Dubbla kameror för besökare och paket, 8 GB inbyggd lagring och inget abonnemang behövs för videohistoriken.",
          "us": "A dual camera that watches both visitors and packages, 8 GB of built-in storage and no subscription needed for video history.",
          "ca": "Dual camera for visitors and packages, 8 GB of built-in storage and no subscription needed for video history."
        }
      },
      {
        "model": "Nuki Smart Lock Pro (5th generation)",
        "role": {
          "fr": "Meilleure serrure connectée",
          "en": "Best smart lock",
          "de": "Bestes Smart Lock",
          "es": "Mejor cerradura inteligente",
          "it": "Miglior serratura smart",
          "nl": "Beste slimme slot",
          "pl": "Najlepszy inteligentny zamek",
          "sv": "Bästa smarta låset",
          "us": "Best smart lock",
          "ca": "Best smart lock"
        },
        "why": {
          "fr": "Se pose sur le cylindre existant, avec Wi-Fi et Matter over Thread intégrés et une batterie rechargeable, pour partager l’accès sans clé.",
          "en": "Fits over your existing cylinder, with built-in Wi-Fi, Matter over Thread and a rechargeable battery, so you can share access without handing out keys.",
          "de": "Sitzt auf dem vorhandenen Zylinder, mit integriertem WLAN, Matter over Thread und Akku – für schlüssellosen, teilbaren Zugang.",
          "es": "Se monta sobre el bombín que ya tienes, con wifi y Matter over Thread integrados y batería recargable, para compartir el acceso sin llaves.",
          "it": "Si monta sul cilindro esistente, con Wi-Fi e Matter over Thread integrati e batteria ricaricabile, per condividere l’accesso senza dare le chiavi.",
          "nl": "Past op de bestaande cilinder, met ingebouwde wifi, Matter over Thread en oplaadbare accu, om sleutelloos toegang te delen.",
          "pl": "Montowany na istniejącej wkładce, z wbudowanym Wi-Fi, Matter over Thread i akumulatorem – pozwala nadawać innym dostęp bez klucza.",
          "sv": "Monteras över den befintliga låscylindern, med inbyggt wifi, Matter via Thread och laddningsbart batteri, så att du kan ge andra tillträde utan nyckel.",
          "us": "Mounts over your existing lock cylinder, with built-in Wi-Fi, Matter over Thread and a rechargeable battery, for keyless access you can share.",
          "ca": "Fits over an existing euro cylinder lock, with built-in Wi-Fi, Matter over Thread and a rechargeable battery, for keyless shared access."
        }
      }
    ]
  },
  "tendances-maison-connectee-2026": {
    "question": {
      "fr": "Quels appareils connectés acheter en 2026 pour suivre les tendances ?",
      "en": "Which smart home devices should you buy in 2026 to keep up with the trends?",
      "de": "Welche Smart-Home-Geräte lohnen sich 2026, um den Trends zu folgen?",
      "es": "¿Qué dispositivos inteligentes comprar en 2026 para seguir las tendencias?",
      "it": "Quali dispositivi smart acquistare nel 2026 per seguire le tendenze?",
      "nl": "Welke slimme apparaten koop je in 2026 om de trends te volgen?",
      "pl": "Jakie inteligentne urządzenia kupić w 2026 roku, żeby być na bieżąco z trendami?",
      "sv": "Vilka smarta prylar för hemmet ska du köpa 2026 för att hänga med i trenderna?",
      "us": "Which smart home devices are worth buying in 2026 to keep up with the trends?",
      "ca": "Which smart home devices should you buy in 2026 to follow the trends?"
    },
    "picks": [
      {
        "model": "Aqara Hub M3",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Contrôleur Matter et routeur Thread avec Zigbee et infrarouge, il exécute les automatisations en local et pilote plusieurs marques.",
          "en": "A Matter controller and Thread border router with Zigbee and IR that runs automations locally and controls several brands.",
          "de": "Matter-Controller und Thread-Border-Router mit Zigbee und IR, führt Automationen lokal aus und steuert mehrere Marken.",
          "es": "Controlador Matter y router Thread con Zigbee e infrarrojos que ejecuta las automatizaciones en local y controla aparatos de varias marcas.",
          "it": "Controller Matter e border router Thread con Zigbee e infrarossi: esegue le automazioni in locale e gestisce dispositivi di più marchi.",
          "nl": "Matter-controller en Thread-borderrouter met Zigbee en IR die automatiseringen lokaal uitvoert en meerdere merken bedient.",
          "pl": "Kontroler Matter i router Thread z obsługą Zigbee i podczerwieni: automatyzacje wykonuje lokalnie i steruje urządzeniami wielu marek.",
          "sv": "Styrenhet för Matter och Thread Border Router med Zigbee och IR, som kör automationerna lokalt och styr flera märken.",
          "us": "A Matter controller and Thread border router with Zigbee and IR that runs automations locally and controls several brands.",
          "ca": "A Matter controller and Thread border router with Zigbee and IR that runs automations locally and controls several brands."
        }
      },
      {
        "model": "Eve Thermo",
        "role": {
          "fr": "Meilleur pour économiser l’énergie",
          "en": "Best for saving energy",
          "de": "Am besten zum Energiesparen",
          "es": "Mejor para ahorrar energía",
          "it": "Migliore per risparmiare energia",
          "nl": "Beste om energie te besparen",
          "pl": "Najlepszy wybór do oszczędzania energii",
          "sv": "Bäst för att spara energi",
          "us": "Best for saving energy",
          "ca": "Best for saving energy"
        },
        "why": {
          "fr": "Tête thermostatique Matter over Thread compatible avec tous les grands écosystèmes, pour chauffer pièce par pièce sans hub propriétaire.",
          "en": "A Matter over Thread smart radiator thermostat that works with all the major ecosystems, for room-by-room heating without a proprietary hub.",
          "de": "Heizkörperthermostat mit Matter over Thread für alle großen Ökosysteme, für raumweises Heizen ohne proprietären Hub.",
          "es": "Cabezal termostático con Matter over Thread compatible con los grandes ecosistemas, para calentar habitación por habitación sin el hub propio de una marca.",
          "it": "Valvola termostatica smart Matter over Thread compatibile con tutti i principali ecosistemi, per scaldare stanza per stanza senza hub proprietario.",
          "nl": "Radiatorknop met Matter over Thread voor alle grote ecosystemen, om per kamer te verwarmen zonder gesloten hub.",
          "pl": "Głowica termostatyczna Matter over Thread, zgodna ze wszystkimi dużymi ekosystemami – pozwala ogrzewać każde pomieszczenie osobno, bez firmowego huba.",
          "sv": "Smart elementtermostat med Matter via Thread som fungerar med alla stora ekosystem, för uppvärmning rum för rum utan någon tillverkarspecifik hubb.",
          "us": "A Matter over Thread smart radiator valve that works with all major ecosystems, for room-by-room heating without a proprietary hub.",
          "ca": "A Matter over Thread radiator valve that works with all major ecosystems, for room-by-room heating without a proprietary hub."
        }
      },
      {
        "model": "Reolink Argus 4 Pro",
        "role": {
          "fr": "Meilleure sécurité sans abonnement",
          "en": "Best subscription-free security",
          "de": "Beste Sicherheit ohne Abo",
          "es": "Mejor seguridad sin suscripción",
          "it": "Migliore per la sicurezza senza abbonamento",
          "nl": "Beste beveiliging zonder abonnement",
          "pl": "Najlepsza ochrona bez abonamentu",
          "sv": "Bästa säkerheten utan abonnemang",
          "us": "Best security with no subscription",
          "ca": "Best subscription-free security"
        },
        "why": {
          "fr": "Caméra sur batterie 4K à double objectif (180°), vision nocturne couleur et stockage microSD, sans abonnement pour la détection.",
          "en": "A 4K dual-lens (180°) battery camera with colour night vision and microSD storage, with no subscription needed for detection.",
          "de": "4K-Akkukamera mit Doppelobjektiv (180°), Farbnachtsicht und microSD-Speicher, ohne Abo für die Erkennung.",
          "es": "Cámara de batería 4K con doble objetivo (180°), visión nocturna en color y microSD, sin suscripción para la detección.",
          "it": "Telecamera a batteria 4K a doppio obiettivo (180°), visione notturna a colori e memoria su microSD, senza abbonamento per il rilevamento.",
          "nl": "4K-accucamera met dubbele lens (180°), nachtzicht in kleur en microSD-opslag, zonder abonnement voor detectie.",
          "pl": "Bateryjna kamera 4K z podwójnym obiektywem (180°), kolorowym widzeniem w nocy i zapisem na kartę microSD; wykrywanie działa bez abonamentu.",
          "sv": "Batteridriven 4K-kamera med dubbla objektiv (180°), mörkerseende i färg och lagring på microSD, utan abonnemang för detekteringen.",
          "us": "A 4K dual-lens (180°) battery camera with color night vision and microSD storage, with no subscription needed for detection.",
          "ca": "A 4K dual-lens (180°) battery camera with colour night vision and microSD storage, with no subscription needed for detection."
        }
      }
    ]
  },
  "meilleur-aspirateur-laveur-2026": {
    "question": {
      "fr": "Quel est le meilleur aspirateur laveur en 2026 ?",
      "en": "What is the best wet and dry hard floor cleaner in 2026?",
      "de": "Welcher ist der beste Nass-Trocken-Sauger 2026?",
      "es": "¿Cuál es la mejor aspiradora fregasuelos en 2026?",
      "it": "Qual è il miglior aspirapolvere lavapavimenti nel 2026?",
      "nl": "Wat is de beste nat-droogzuiger in 2026?",
      "pl": "Jaki jest najlepszy odkurzacz myjący w 2026 roku?",
      "sv": "Vilken golvtvätt är bäst 2026?",
      "us": "What is the best wet dry vacuum in 2026?",
      "ca": "What is the best wet dry vacuum in 2026?"
    },
    "picks": [
      {
        "model": "Dreame H15 Pro",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Brosse lavée à 100 °C puis séchée à l’air chaud, bras pour nettoyer les bords et inclinaison à 180° sous les meubles.",
          "en": "A roller washed at 100°C then dried with hot air, an arm for cleaning along edges and a 180° lie-flat tilt to reach under furniture.",
          "de": "Bürstenwäsche bei 100 °C mit Heißlufttrocknung, ein Arm für die Kantenreinigung und 180° Neigung unter Möbel.",
          "es": "Cepillo lavado a 100 °C y secado con aire caliente, brazo para limpiar bordes e inclinación de 180° bajo los muebles.",
          "it": "Spazzola lavata a 100 °C e asciugata ad aria calda, braccio per pulire i bordi e si piega a 180° per passare sotto i mobili.",
          "nl": "Borstel gewassen op 100 °C en gedroogd met hete lucht, een arm voor randreiniging en 180° kantelen onder meubels.",
          "pl": "Szczotka myta wodą o temperaturze 100 °C i suszona gorącym powietrzem, ramię do czyszczenia przy krawędziach i odchylanie do 180°, by wjechać pod meble.",
          "sv": "Borsten tvättas i 100 °C och torkas sedan med varmluft, en arm rengör längs kanterna och den kan fällas ner 180° för att komma in under möblerna.",
          "us": "Its brush roll is washed at 212°F (100°C) and then hot-air dried, with an arm for edge cleaning and a 180° lie-flat tilt to reach under furniture.",
          "ca": "Brush washed at 100°C then hot-air dried, an arm for edge cleaning and a 180° tilt to reach under furniture."
        }
      },
      {
        "model": "Dreame H14 Pro",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "18 000 Pa, lavage de la brosse à 60 °C, séchage à l’air chaud et passage à plat sous les meubles dans une gamme plus accessible.",
          "en": "18,000 Pa, roller washing at 60°C, hot-air drying and a lie-flat design for reaching under furniture, from a more affordable range.",
          "de": "18.000 Pa, Bürstenwäsche bei 60 °C, Heißlufttrocknung und flache Reichweite unter Möbel in einer zugänglicheren Klasse.",
          "es": "18.000 Pa, lavado del cepillo a 60 °C, secado con aire caliente y se tumba del todo para pasar bajo los muebles, a un precio más asequible.",
          "it": "18.000 Pa, lavaggio della spazzola a 60 °C, asciugatura ad aria calda e si stende in piano per passare sotto i mobili, in una fascia di prezzo più accessibile.",
          "nl": "18.000 Pa, borstelwas op 60 °C, drogen met hete lucht en plat onder meubels in een toegankelijker segment.",
          "pl": "18 000 Pa, mycie szczotki w 60 °C, suszenie gorącym powietrzem i możliwość położenia na płasko pod meblami – w przystępniejszej cenowo serii.",
          "sv": "18 000 Pa, borsttvätt i 60 °C och varmluftstorkning, och den kan fällas ner helt platt för att nå under möblerna – i en mer prisvärd klass.",
          "us": "18,000 Pa, 140°F (60°C) brush-roll washing, hot-air drying and lie-flat reach under furniture at a more affordable tier.",
          "ca": "18,000 Pa, 60°C brush washing, hot-air drying and lie-flat reach under furniture at a more accessible tier."
        }
      },
      {
        "model": "Dyson WashG1",
        "role": {
          "fr": "Idéal cheveux et animaux",
          "en": "Best for hair and pets",
          "de": "Ideal bei Haaren und Haustieren",
          "es": "Ideal para pelo y mascotas",
          "it": "Ideale per capelli e animali",
          "nl": "Ideaal bij haren en huisdieren",
          "pl": "Najlepszy do włosów i sierści zwierząt",
          "sv": "Bäst för hår och husdjur",
          "us": "Best for hair and pets",
          "ca": "Best for hair and pets"
        },
        "why": {
          "fr": "Rouleaux sans aspiration qui séparent cheveux et débris, et réservoir d’eau propre de 1 litre pour les grandes surfaces.",
          "en": "Suction-free rollers that separate hair and debris, plus a 1-litre clean water tank for large areas.",
          "de": "Walzen ohne Saugkraft, die Haare und Schmutz abtrennen, dazu ein 1-Liter-Frischwassertank für große Flächen.",
          "es": "Rodillos sin succión que separan el pelo y los residuos, y un depósito de agua limpia de 1 litro para grandes superficies.",
          "it": "Rulli che lavorano senza aspirazione e separano capelli e residui, con un serbatoio da 1 litro di acqua pulita per le superfici grandi.",
          "nl": "Rollen zonder zuigkracht die haren en vuil scheiden, plus een schoonwatertank van 1 liter voor grote oppervlakken.",
          "pl": "Wałki działające bez ssania, które oddzielają włosy od reszty zanieczyszczeń, oraz zbiornik na czystą wodę o pojemności 1 l – na duże powierzchnie.",
          "sv": "Valsar utan sugkraft som separerar hår och skräp, plus en tank på 1 liter för rent vatten till stora ytor.",
          "us": "Suction-free rollers that separate hair from debris, plus a 34 fl oz (1 L) clean-water tank for large areas.",
          "ca": "Suction-free rollers that separate hair and debris, plus a 1-litre clean water tank for large areas."
        }
      }
    ]
  },
  "maison-connectee-matter-thread-2026": {
    "question": {
      "fr": "Quel hub Matter et Thread choisir en 2026 ?",
      "en": "Which Matter and Thread hub should you choose in 2026?",
      "de": "Welchen Matter- und Thread-Hub sollte man 2026 wählen?",
      "es": "¿Qué hub Matter y Thread elegir en 2026?",
      "it": "Quale hub Matter e Thread scegliere nel 2026?",
      "nl": "Welke Matter- en Thread-hub kies je in 2026?",
      "pl": "Jaki hub Matter i Thread wybrać w 2026 roku?",
      "sv": "Vilken hubb för Matter och Thread ska du välja 2026?",
      "us": "Which Matter and Thread hub should you choose in 2026?",
      "ca": "Which Matter and Thread hub should you choose in 2026?"
    },
    "picks": [
      {
        "model": "Aqara Hub M3",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Contrôleur Matter, border router Thread, hub Zigbee et Ethernet/PoE réunis, compatible avec tous les grands écosystèmes.",
          "en": "Matter controller, Thread border router, Zigbee hub and Ethernet/PoE in one, compatible with every major ecosystem.",
          "de": "Matter-Controller, Thread-Border-Router, Zigbee-Hub und Ethernet/PoE in einem, kompatibel mit allen großen Ökosystemen.",
          "es": "Controlador Matter, border router Thread, hub Zigbee y Ethernet/PoE en uno, compatible con todos los grandes ecosistemas.",
          "it": "Controller Matter, border router Thread, hub Zigbee ed Ethernet/PoE in un unico dispositivo, compatibile con tutti i principali ecosistemi.",
          "nl": "Matter-controller, Thread-borderrouter, Zigbee-hub en ethernet/PoE in één, compatibel met alle grote ecosystemen.",
          "pl": "Kontroler Matter, router brzegowy Thread, hub Zigbee i Ethernet/PoE w jednym urządzeniu, zgodny ze wszystkimi dużymi ekosystemami.",
          "sv": "Styrenhet för Matter, Thread Border Router, Zigbee-hubb och Ethernet/PoE i ett, kompatibel med alla stora ekosystem.",
          "us": "Matter controller, Thread border router, Zigbee hub and Ethernet/PoE in one, compatible with every major ecosystem.",
          "ca": "Matter controller, Thread border router, Zigbee hub and Ethernet/PoE in one, compatible with every major ecosystem."
        }
      },
      {
        "model": "IKEA DIRIGERA",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Depuis sa mise à jour de juillet 2025, il est contrôleur Matter et border router Thread, en plus de gérer l’éclairage IKEA Zigbee.",
          "en": "Since its July 2025 update, it also works as a Matter controller and Thread border router, on top of running IKEA’s Zigbee lighting.",
          "de": "Seit dem Update vom Juli 2025 ist er Matter-Controller und Thread-Border-Router und steuert weiterhin IKEAs Zigbee-Beleuchtung.",
          "es": "Desde su actualización de julio de 2025 es controlador Matter y border router Thread, además de gestionar la iluminación Zigbee de IKEA.",
          "it": "Dall’aggiornamento di luglio 2025 fa anche da controller Matter e border router Thread, oltre a gestire l’illuminazione Zigbee di IKEA.",
          "nl": "Sinds de update van juli 2025 is hij Matter-controller en Thread-borderrouter, naast het beheer van IKEA’s Zigbee-verlichting.",
          "pl": "Od aktualizacji z lipca 2025 roku działa jako kontroler Matter i router brzegowy Thread, a przy tym nadal obsługuje oświetlenie IKEA Zigbee.",
          "sv": "Sedan uppdateringen i juli 2025 är den både styrenhet för Matter och Thread Border Router, och den sköter dessutom IKEA:s Zigbee-belysning.",
          "us": "Since its July 2025 update, it's a Matter controller and Thread border router, on top of running IKEA’s Zigbee lighting.",
          "ca": "Since its July 2025 update it is a Matter controller and Thread border router, on top of running IKEA’s Zigbee lighting."
        }
      },
      {
        "model": "Apple HomePod mini",
        "role": {
          "fr": "Idéal pour les utilisateurs d’iPhone",
          "en": "Best for iPhone users",
          "de": "Ideal für iPhone-Nutzer",
          "es": "Ideal para usuarios de iPhone",
          "it": "Ideale per chi usa l’iPhone",
          "nl": "Ideaal voor iPhone-gebruikers",
          "pl": "Najlepszy dla użytkowników iPhone’a",
          "sv": "Bäst för iPhone-användare",
          "us": "Best for iPhone users",
          "ca": "Best for iPhone users"
        },
        "why": {
          "fr": "Enceinte Siri, concentrateur Apple Maison et border router Thread : la façon la plus simple de démarrer Matter chez Apple.",
          "en": "Siri speaker, Apple Home hub and Thread border router: the simplest way into Matter if you use Apple devices.",
          "de": "Siri-Lautsprecher, Apple-Home-Zentrale und Thread-Border-Router: der einfachste Matter-Einstieg in der Apple-Welt.",
          "es": "Altavoz con Siri, centro de la casa para la app Casa de Apple y border router Thread: la forma más sencilla de empezar con Matter en el ecosistema de Apple.",
          "it": "Altoparlante con Siri, hub di Apple Casa e border router Thread: il modo più semplice per iniziare con Matter nell’ecosistema Apple.",
          "nl": "Siri-speaker, Apple Woning-hub en Thread-borderrouter: de eenvoudigste manier om met Matter te starten bij Apple.",
          "pl": "Głośnik z Siri, centrum akcesoriów Apple Home i router brzegowy Thread – najprostszy sposób, by zacząć korzystać z Matter w ekosystemie Apple.",
          "sv": "Högtalare med Siri, hemhubb för Apple Home och Thread Border Router: det enklaste sättet att komma igång med Matter i Apples ekosystem.",
          "us": "A Siri speaker, Apple Home hub and Thread border router: the simplest way to get started with Matter in Apple's ecosystem.",
          "ca": "Siri speaker, Apple Home hub and Thread border router: the simplest way to start with Matter in the Apple world."
        }
      }
    ]
  },
  "piscine-connectee-guide": {
    "question": {
      "fr": "Quel équipement choisir pour une piscine connectée en 2026 ?",
      "en": "What kit do you need for a smart pool in 2026?",
      "de": "Welche Ausstattung lohnt sich 2026 für einen vernetzten Pool?",
      "es": "¿Qué equipo elegir para una piscina conectada en 2026?",
      "it": "Quali dispositivi scegliere per una piscina smart nel 2026?",
      "nl": "Welke apparatuur kies je in 2026 voor een slim zwembad?",
      "pl": "Jaki sprzęt wybrać do inteligentnego basenu w 2026 roku?",
      "sv": "Vilken utrustning ska du välja för en smart pool 2026?",
      "us": "What gear do you need for a smart pool in 2026?",
      "ca": "What equipment should you choose for a smart pool in 2026?"
    },
    "picks": [
      {
        "model": "Ondilo ICO Pool V2",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Analyseur flottant qui mesure pH, ORP et température chaque heure, avec une version dédiée aux piscines au sel et des conseils de dosage.",
          "en": "A floating analyser that measures pH, ORP and temperature every hour, with a dedicated version for saltwater pools and dosing advice.",
          "de": "Schwimmender Analysator, der stündlich pH, Redox und Temperatur misst, mit eigener Salzwasserversion und Dosierhinweisen.",
          "es": "Analizador flotante que mide pH, ORP y temperatura cada hora, con versión específica para piscinas de sal y consejos de dosificación.",
          "it": "Analizzatore galleggiante che misura pH, ORP e temperatura ogni ora, con una versione per le piscine a sale e consigli di dosaggio.",
          "nl": "Drijvende analyser die elk uur pH, ORP en temperatuur meet, met een aparte zoutversie en doseeradvies.",
          "pl": "Pływający analizator, który co godzinę mierzy pH, ORP i temperaturę wody. Ma osobną wersję do basenów solnych i podpowiada, jak dozować środki.",
          "sv": "Flytande analysator som mäter pH, ORP och temperatur varje timme, med en särskild version för saltvattenpooler och råd om dosering.",
          "us": "A floating analyzer that measures pH, ORP and temperature every hour, with a dedicated saltwater-pool version and dosing advice.",
          "ca": "Floating analyzer measuring pH, ORP and temperature every hour, with a dedicated saltwater-pool version and dosing advice."
        }
      },
      {
        "model": "iopool EcO",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Capteur pH, ORP et température sans recharge ni calibrage pendant environ deux ans, avec passerelle Wi-Fi et application sans abonnement.",
          "en": "A pH, ORP and temperature sensor that needs no charging or calibration for about two years, plus a Wi-Fi gateway and a subscription-free app.",
          "de": "pH-, Redox- und Temperatursensor, rund zwei Jahre ohne Laden und Kalibrieren, mit WLAN-Gateway und App ohne Abo.",
          "es": "Sensor de pH, ORP y temperatura sin carga ni calibración durante unos dos años, con pasarela wifi y app sin suscripción.",
          "it": "Sensore di pH, ORP e temperatura senza ricarica né calibrazione per circa due anni, con gateway Wi-Fi e app senza abbonamento.",
          "nl": "Sensor voor pH, ORP en temperatuur, ongeveer twee jaar zonder opladen of kalibreren, met wifi-gateway en app zonder abonnement.",
          "pl": "Czujnik pH, ORP i temperatury, który przez ok. dwa lata nie wymaga ładowania ani kalibracji, z bramką Wi-Fi i aplikacją bez abonamentu.",
          "sv": "Sensor för pH, ORP och temperatur som inte behöver laddas eller kalibreras på ungefär två år, plus wifi-gateway och app utan abonnemang.",
          "us": "A pH, ORP and temperature sensor that needs no charging or calibration for about two years, plus a Wi-Fi gateway and a subscription-free app.",
          "ca": "pH, ORP and temperature sensor with no charging or calibration for about two years, plus a Wi-Fi gateway and subscription-free app."
        }
      },
      {
        "model": "Dolphin S300i",
        "role": {
          "fr": "Idéal pour automatiser le nettoyage",
          "en": "Best for automated cleaning",
          "de": "Ideal für automatische Reinigung",
          "es": "Ideal para automatizar la limpieza",
          "it": "Ideale per automatizzare la pulizia",
          "nl": "Ideaal voor automatische reiniging",
          "pl": "Najlepszy do automatycznego czyszczenia",
          "sv": "Bäst för automatisk rengöring",
          "us": "Best for automated cleaning",
          "ca": "Best for automated cleaning"
        },
        "why": {
          "fr": "Robot filaire pour bassins jusqu’à 12 m : fond, parois et ligne d’eau, filtre accessible par le dessus et programmation via MyDolphin Plus.",
          "en": "A corded robot for pools up to 12 m long: it cleans the floor, walls and waterline, with a top-access filter and scheduling via MyDolphin Plus.",
          "de": "Roboter mit Kabel für Becken bis 12 m: Boden, Wände und Wasserlinie, Filter von oben und Zeitpläne per MyDolphin Plus.",
          "es": "Robot con cable para piscinas de hasta 12 m: fondo, paredes y línea de flotación, filtro que se saca por arriba y programación con MyDolphin Plus.",
          "it": "Robot con cavo per piscine fino a 12 m: pulisce fondo, pareti e linea di galleggiamento, ha il filtro estraibile dall’alto e si programma con MyDolphin Plus.",
          "nl": "Robot met snoer voor baden tot 12 m: bodem, wanden en waterlijn, filter van bovenaf en planning via MyDolphin Plus.",
          "pl": "Robot przewodowy do basenów o długości do 12 m: czyści dno, ściany i linię wody, ma filtr dostępny od góry, a harmonogram ustawia się w aplikacji MyDolphin Plus.",
          "sv": "Robot med kabel för pooler upp till 12 m: botten, väggar och vattenlinje, filter som nås ovanifrån och schemaläggning via MyDolphin Plus.",
          "us": "A corded robot for pools up to 40 ft (12 m) long: floor, walls and waterline, a top-access filter and scheduling through MyDolphin Plus.",
          "ca": "Corded robot for pools up to 12 m: floor, walls and waterline, top-access filter and scheduling via MyDolphin Plus."
        }
      }
    ]
  },
  "ventilador-silencioso-dormitorio": {
    "question": {
      "fr": "Quel est le ventilateur le plus silencieux pour une chambre en 2026 ?",
      "en": "What is the quietest bedroom fan in 2026?",
      "de": "Welcher ist der leiseste Ventilator fürs Schlafzimmer 2026?",
      "es": "¿Cuál es el ventilador más silencioso para el dormitorio en 2026?",
      "it": "Qual è il ventilatore più silenzioso per la camera da letto nel 2026?",
      "nl": "Wat is de stilste ventilator voor de slaapkamer in 2026?",
      "pl": "Jaki jest najcichszy wentylator do sypialni w 2026 roku?",
      "sv": "Vilken fläkt är tystast för sovrummet 2026?",
      "us": "What is the quietest bedroom fan in 2026?",
      "ca": "What is the quietest bedroom fan in 2026?"
    },
    "picks": [
      {
        "model": "Duux Whisper Flex 2 Smart",
        "role": {
          "fr": "Meilleur choix pour dormir",
          "en": "Best for sleeping",
          "de": "Beste Wahl zum Schlafen",
          "es": "Mejor opción para dormir",
          "it": "Migliore per dormire",
          "nl": "Beste keuze om bij te slapen",
          "pl": "Najlepszy wybór do snu",
          "sv": "Bäst totalt för sömnen",
          "us": "Best overall for sleeping",
          "ca": "Best overall for sleeping"
        },
        "why": {
          "fr": "Moteur DC, 30 vitesses et environ 13 dB à vitesse minimale selon Duux, avec mode nuit, brise naturelle et pilotage par appli ou voix.",
          "en": "DC motor, 30 speeds and around 13 dB at minimum speed according to Duux, with night mode, natural breeze and app or voice control.",
          "de": "DC-Motor, 30 Stufen und laut Duux rund 13 dB auf der kleinsten Stufe, mit Nachtmodus, Naturwind und Steuerung per App oder Sprache.",
          "es": "Motor DC, 30 velocidades y unos 13 dB en velocidad mínima según Duux, con modo noche, brisa natural y control por app o voz.",
          "it": "Motore DC, 30 velocità e circa 13 dB alla velocità minima secondo Duux, con modalità notte, brezza naturale e controllo dall’app o con la voce.",
          "nl": "DC-motor, 30 snelheden en volgens Duux ongeveer 13 dB op de laagste stand, met nachtmodus, natuurlijke bries en bediening via app of stem.",
          "pl": "Silnik DC, 30 prędkości i ok. 13 dB na najniższym biegu (według danych Duux), a do tego tryb nocny, tryb naturalnego wiatru i sterowanie z aplikacji lub głosem.",
          "sv": "DC-motor, 30 hastigheter och ca 13 dB på lägsta hastighet enligt Duux, med nattläge, naturlig bris och styrning via app eller röst.",
          "us": "DC motor, 30 speeds and around 13 dB at minimum speed according to Duux, with night mode, natural breeze and app or voice control.",
          "ca": "DC motor, 30 speeds and around 13 dB at minimum speed according to Duux, with night mode, natural breeze and app or voice control."
        }
      },
      {
        "model": "Xiaomi Smart Standing Fan 2 Pro",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Moteur DC de 24 W, environ 28 dB à vitesse minimale selon Xiaomi, mode brise naturelle et pilotage via Xiaomi Home, Alexa ou Google.",
          "en": "24 W DC motor, around 28 dB at minimum speed according to Xiaomi, natural breeze mode and control via Xiaomi Home, Alexa or Google.",
          "de": "24-W-DC-Motor, laut Xiaomi rund 28 dB auf der kleinsten Stufe, Naturwindmodus und Steuerung über Xiaomi Home, Alexa oder Google.",
          "es": "Motor DC de 24 W, unos 28 dB en velocidad mínima según Xiaomi, modo brisa natural y control con Xiaomi Home, Alexa o Google.",
          "it": "Motore DC da 24 W, circa 28 dB alla velocità minima secondo Xiaomi, modalità brezza naturale e controllo con Xiaomi Home, Alexa o Google.",
          "nl": "DC-motor van 24 W, volgens Xiaomi ongeveer 28 dB op de laagste stand, natuurlijke-briesmodus en bediening via Xiaomi Home, Alexa of Google.",
          "pl": "Silnik DC 24 W, ok. 28 dB na najniższym biegu (według danych Xiaomi), tryb naturalnego wiatru i sterowanie przez Xiaomi Home, Alexę lub Asystenta Google.",
          "sv": "DC-motor på 24 W, ca 28 dB på lägsta hastighet enligt Xiaomi, läge för naturlig bris och styrning via Xiaomi Home, Alexa eller Google.",
          "us": "24 W DC motor, around 28 dB at minimum speed according to Xiaomi, natural breeze mode and control via Xiaomi Home, Alexa or Google.",
          "ca": "24 W DC motor, around 28 dB at minimum speed according to Xiaomi, natural breeze mode and control via Xiaomi Home, Alexa or Google."
        }
      },
      {
        "model": "Dyson Purifier Cool Formaldehyde TP09",
        "role": {
          "fr": "Idéal pour les allergiques",
          "en": "Best for allergy sufferers",
          "de": "Ideal für Allergiker",
          "es": "Ideal para alérgicos",
          "it": "Ideale per chi soffre di allergie",
          "nl": "Ideaal bij allergie",
          "pl": "Najlepszy dla alergików",
          "sv": "Bäst för allergiker",
          "us": "Best for allergy sufferers",
          "ca": "Best for allergy sufferers"
        },
        "why": {
          "fr": "Ventilateur sans pales et purificateur HEPA H13 avec filtre catalytique anti-formaldéhyde, mode nuit qui limite le bruit et atténue l'écran.",
          "en": "A bladeless fan and HEPA H13 purifier with a catalytic formaldehyde filter, plus a night mode that keeps noise down and dims the display.",
          "de": "Rotorloser Ventilator und HEPA-H13-Luftreiniger mit Katalysatorfilter gegen Formaldehyd, dazu ein Nachtmodus, der Geräusch und Display reduziert.",
          "es": "Ventilador sin aspas y purificador HEPA H13 con filtro catalítico contra el formaldehído, y un modo noche que limita el ruido y atenúa la pantalla.",
          "it": "Ventilatore senza pale e purificatore HEPA H13 con filtro catalitico contro la formaldeide, e una modalità notte che limita il rumore e attenua il display.",
          "nl": "Bladloze ventilator en HEPA H13-luchtreiniger met katalytisch formaldehydefilter, plus een nachtmodus die geluid beperkt en het display dimt.",
          "pl": "Bezłopatkowy wentylator i oczyszczacz z filtrem HEPA H13 oraz katalitycznym filtrem rozkładającym formaldehyd; w trybie nocnym pracuje ciszej i przyciemnia wyświetlacz.",
          "sv": "Bladlös fläkt och luftrenare med HEPA H13 och katalytiskt filter mot formaldehyd, plus ett nattläge som dämpar både ljudet och displayen.",
          "us": "Bladeless fan and HEPA H13 purifier with a catalytic formaldehyde filter, plus a night mode that limits noise and dims the display.",
          "ca": "Bladeless fan and HEPA H13 purifier with a catalytic formaldehyde filter, plus a night mode that limits noise and dims the display."
        }
      }
    ]
  },
  "test-philips-combi-xxl-connected": {
    "question": {
      "fr": "Quel est le meilleur airfryer haut de gamme connecté en 2026 ?",
      "en": "What is the best premium smart air fryer in 2026?",
      "de": "Was ist die beste vernetzte Premium-Heißluftfritteuse 2026?",
      "es": "¿Cuál es la mejor freidora de aire de gama alta con wifi en 2026?",
      "it": "Qual è la migliore friggitrice ad aria smart di fascia alta nel 2026?",
      "nl": "Wat is de beste premium slimme airfryer in 2026?",
      "pl": "Jaka jest najlepsza frytkownica beztłuszczowa premium z Wi-Fi w 2026 roku?",
      "sv": "Vilken smart airfryer i premiumklassen är bäst 2026?",
      "us": "What is the best premium smart air fryer in 2026?",
      "ca": "What is the best premium smart air fryer in 2026?"
    },
    "picks": [
      {
        "model": "Philips Airfryer Combi XXL Connecté - 8.3L",
        "role": {
          "fr": "Meilleur choix pour la précision de cuisson",
          "en": "Best for cooking precision",
          "de": "Beste Wahl für präzises Garen",
          "es": "Mejor opción para cocinar con precisión",
          "it": "Migliore per la precisione di cottura",
          "nl": "Beste voor nauwkeurig garen",
          "pl": "Najlepszy wybór do precyzyjnego pieczenia",
          "sv": "Bäst för exakt tillagning",
          "us": "Best for cooking precision",
          "ca": "Best for cooking precision"
        },
        "why": {
          "fr": "Sa sonde intégrée arrête la cuisson des viandes au bon degré, et l’app HomeID permet de suivre la cuisson à distance dans une cuve de 8,3 L.",
          "en": "Its built-in probe stops cooking when meat is done just right, and the HomeID app lets you keep an eye on cooking remotely, in a roomy 8.3 L basket.",
          "de": "Der integrierte Fühler beendet das Garen von Fleisch auf den Punkt, und die HomeID-App zeigt den Garverlauf im 8,3-Liter-Garraum aus der Ferne.",
          "es": "Su sonda integrada detiene la cocción de la carne en el punto justo y la app HomeID permite seguirla a distancia, en una cubeta de 8,3 L.",
          "it": "La sonda integrata interrompe la cottura della carne al punto giusto e con l’app HomeID segui la cottura a distanza, in un cestello da 8,3 L.",
          "nl": "De ingebouwde sonde stopt vlees op de juiste garing, en met de HomeID-app volgt u de bereiding op afstand in een pan van 8,3 L.",
          "pl": "Wbudowana sonda kończy pieczenie, gdy mięso osiągnie właściwą temperaturę, a aplikacja HomeID pozwala zdalnie śledzić postęp. Komora mieści 8,3 l.",
          "sv": "Den inbyggda givaren avbryter tillagningen när köttet är precis lagom, och med appen HomeID följer du tillagningen på distans i en rymlig insats på 8,3 liter.",
          "us": "Its built-in probe stops meat at just the right doneness, and the HomeID app lets you follow cooking remotely in a roomy 8.8 qt (8.3 L) basket.",
          "ca": "Its built-in probe stops meat at the right doneness, and the HomeID app lets you follow cooking remotely in a roomy 8.3 L pan."
        }
      },
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Meilleur pour cuire deux plats à la fois",
          "en": "Best for cooking two dishes at once",
          "de": "Beste Wahl für zwei Gerichte gleichzeitig",
          "es": "Mejor para cocinar dos platos a la vez",
          "it": "Migliore per cuocere due piatti insieme",
          "nl": "Beste voor twee gerechten tegelijk",
          "pl": "Najlepsza do dwóch dań naraz",
          "sv": "Bäst för två rätter samtidigt",
          "us": "Best for cooking two dishes at once",
          "ca": "Best for cooking two dishes at once"
        },
        "why": {
          "fr": "Ses deux tiroirs superposés de 4,75 L se règlent séparément et finissent en même temps, idéal pour un plat et son accompagnement.",
          "en": "Its two stacked 4.75 L drawers are set independently and can finish together, ideal for a main and a side.",
          "de": "Zwei übereinanderliegende 4,75-Liter-Schubladen lassen sich getrennt einstellen und gleichzeitig fertigstellen, ideal für Hauptgericht und Beilage.",
          "es": "Sus dos cajones superpuestos de 4,75 L se ajustan por separado y terminan a la vez, ideal para un plato principal y su guarnición.",
          "it": "I due cassetti sovrapposti da 4,75 L si regolano separatamente e finiscono la cottura insieme: perfetti per un secondo con il suo contorno.",
          "nl": "De twee gestapelde lades van 4,75 L stelt u apart in en ze zijn tegelijk klaar, ideaal voor hoofdgerecht en bijgerecht.",
          "pl": "Dwie szuflady po 4,75 l, ustawione jedna nad drugą, mają osobne ustawienia i kończą pracę w tym samym momencie – idealnie, gdy przygotowujesz danie główne z dodatkiem.",
          "sv": "De två staplade lådorna på 4,75 liter ställs in var för sig och kan bli klara samtidigt, perfekt för huvudrätt och tillbehör.",
          "us": "Its two stacked 5 qt (4.75 L) drawers are set independently and can finish together, ideal for a main and a side.",
          "ca": "Its two stacked 4.75 L drawers are set independently and can finish together, ideal for a main and a side."
        }
      },
      {
        "model": "Cosori Dual Blaze Smart Air Fryer - 6.4L",
        "role": {
          "fr": "Meilleure alternative connectée plus compacte",
          "en": "Best compact smart alternative",
          "de": "Beste kompakte vernetzte Alternative",
          "es": "Mejor alternativa conectada más compacta",
          "it": "Migliore alternativa smart più compatta",
          "nl": "Beste compacte slimme alternatief",
          "pl": "Najlepsza mniejsza alternatywa z Wi-Fi",
          "sv": "Bästa kompakta uppkopplade alternativet",
          "us": "Best compact smart alternative",
          "ca": "Best compact smart alternative"
        },
        "why": {
          "fr": "Une résistance en haut et en bas dore les deux faces sans retourner, avec l’application VeSync, dans un format plus compact et plus abordable.",
          "en": "Top and bottom heating elements brown both sides without flipping, with the VeSync app, in a more compact and affordable format.",
          "de": "Heizelemente oben und unten bräunen beide Seiten ohne Wenden, mit VeSync-App, in einem kompakteren und günstigeren Format.",
          "es": "Resistencias arriba y abajo que doran ambas caras sin darles la vuelta, con la app VeSync, en un formato más compacto y asequible.",
          "it": "Con una resistenza sopra e una sotto dora il cibo su entrambi i lati senza doverlo girare; app VeSync, formato più compatto e prezzo più accessibile.",
          "nl": "Verwarmingselementen boven en onder bruinen beide kanten zonder omdraaien, met VeSync-app, in een compacter en betaalbaarder formaat.",
          "pl": "Grzałki u góry i u dołu rumienią potrawy z obu stron bez obracania. Do tego aplikacja VeSync, mniejsze gabaryty i przystępniejsza cena.",
          "sv": "Värmeelement uppe och nere ger färg på båda sidor utan att du vänder maten, med appen VeSync, i ett mer kompakt och prisvärt format.",
          "us": "Top and bottom heating elements brown both sides without flipping, with the VeSync app, in a more compact and affordable format.",
          "ca": "Top and bottom heating elements brown both sides without flipping, with the VeSync app, in a more compact and affordable format."
        }
      }
    ]
  },
  "thermostat-connecte-pompe-chaleur": {
    "question": {
      "fr": "Quel est le meilleur thermostat connecté pour une pompe à chaleur en 2026 ?",
      "en": "What is the best smart thermostat for a heat pump in 2026?",
      "de": "Welches ist das beste smarte Thermostat für eine Wärmepumpe 2026?",
      "es": "¿Cuál es el mejor termostato inteligente para una bomba de calor en 2026?",
      "it": "Qual è il miglior termostato smart per una pompa di calore nel 2026?",
      "nl": "Wat is de beste slimme thermostaat voor een warmtepomp in 2026?",
      "pl": "Jaki jest najlepszy inteligentny termostat do pompy ciepła w 2026 roku?",
      "sv": "Vilken smart termostat är bäst för en värmepump 2026?",
      "us": "What is the best smart thermostat for a heat pump in 2026?",
      "ca": "What is the best smart thermostat for a heat pump in 2026?"
    },
    "picks": [
      {
        "model": "tado Heat Pump Optimizer X",
        "role": {
          "fr": "Meilleur choix pour pompe à chaleur",
          "en": "Best for heat pumps",
          "de": "Beste Wahl für Wärmepumpen",
          "es": "Mejor opción para bombas de calor",
          "it": "Migliore per pompa di calore",
          "nl": "Beste keuze voor warmtepompen",
          "pl": "Najlepszy wybór do pompy ciepła",
          "sv": "Bäst för värmepumpar",
          "us": "Best for heat pumps",
          "ca": "Best for heat pumps"
        },
        "why": {
          "fr": "Il se connecte à la PAC (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic) et module sa puissance selon la température des pièces.",
          "en": "It connects to the heat pump itself (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic) and adjusts its output to room temperatures.",
          "de": "Er wird an die Wärmepumpe selbst angeschlossen (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic) und passt die Leistung den Raumtemperaturen an.",
          "es": "Se conecta a la propia bomba de calor (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic) y ajusta su potencia a la temperatura de las estancias.",
          "it": "Si collega direttamente alla pompa di calore (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic) e ne regola la potenza in base alla temperatura delle stanze.",
          "nl": "Hij wordt op de warmtepomp zelf aangesloten (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic) en past het vermogen aan de kamertemperatuur aan.",
          "pl": "Łączy się z pompą ciepła (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic) i dostosowuje jej moc do temperatury w pomieszczeniach.",
          "sv": "Ansluts direkt till värmepumpen (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic) och anpassar effekten efter temperaturen i rummen.",
          "us": "It connects to the heat pump itself (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic) and adjusts its output to room temperatures.",
          "ca": "It connects to the heat pump itself (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic) and adjusts its output to room temperatures."
        }
      },
      {
        "model": "Netatmo Thermostat Original",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Simple à installer, compatible avec la plupart des PAC air-eau en on/off, avec Auto-Adapt, Eco-Assist et Matter via le Thermo Hub.",
          "en": "Easy to install, works with most on/off-controlled air source heat pumps, with Auto-Adapt, Eco-Assist and Matter via the Thermo Hub.",
          "de": "Einfach zu installieren, passt zu den meisten Luft-Wasser-Wärmepumpen mit Ein/Aus-Kontakt, mit Auto-Adapt, Eco-Assist und Matter über den Thermo Hub.",
          "es": "Fácil de instalar, compatible con la mayoría de bombas de calor aire-agua con control on/off, con Auto-Adapt, Eco-Assist y Matter mediante el Thermo Hub.",
          "it": "Facile da installare, compatibile con la maggior parte delle pompe di calore aria-acqua on/off, con Auto-Adapt, Eco-Assist e Matter tramite il Thermo Hub.",
          "nl": "Eenvoudig te installeren, werkt met de meeste lucht-waterwarmtepompen met aan/uit-contact, met Auto-Adapt, Eco-Assist en Matter via de Thermo Hub.",
          "pl": "Prosty w montażu i zgodny z większością pomp ciepła powietrze-woda sterowanych w trybie on/off. Oferuje funkcje Auto-Adapt i Eco-Assist, a przez Thermo Hub także obsługę Matter.",
          "sv": "Enkel att installera, fungerar med de flesta luft/vatten-värmepumpar med on/off-styrning och har Auto-Adapt, Eco-Assist och Matter via Thermo Hub.",
          "us": "Easy to install, works with most on/off air-to-water heat pumps, with Auto-Adapt, Eco-Assist and Matter via the Thermo Hub.",
          "ca": "Easy to install, works with most on/off air-to-water heat pumps, with Auto-Adapt, Eco-Assist and Matter via the Thermo Hub."
        }
      },
      {
        "model": "Honeywell Home T6",
        "role": {
          "fr": "Idéal en OpenTherm sans hub",
          "en": "Best for OpenTherm without a hub",
          "de": "Ideal für OpenTherm ohne Hub",
          "es": "Ideal para OpenTherm sin hub",
          "it": "Ideale per OpenTherm, senza hub",
          "nl": "Ideaal voor OpenTherm zonder hub",
          "pl": "Najlepszy do OpenTherm bez huba",
          "sv": "Bäst för OpenTherm utan hubb",
          "us": "Best for OpenTherm without a hub",
          "ca": "Best for OpenTherm without a hub"
        },
        "why": {
          "fr": "Compatible on/off et OpenTherm, dont les pompes à chaleur, il se connecte directement au Wi-Fi et se pilote depuis l’application Resideo.",
          "en": "Compatible with on/off and OpenTherm systems, including heat pumps, it connects straight to Wi-Fi and is controlled from the Resideo app.",
          "de": "Kompatibel mit Ein/Aus- und OpenTherm-Anlagen inklusive Wärmepumpen, verbindet sich direkt mit dem WLAN und wird über die Resideo-App gesteuert.",
          "es": "Compatible con sistemas on/off y OpenTherm, incluidas bombas de calor, se conecta directamente al wifi y se controla desde la app Resideo.",
          "it": "Compatibile con impianti on/off e OpenTherm, pompe di calore incluse, si collega direttamente al Wi-Fi e si controlla dall’app Resideo.",
          "nl": "Compatibel met aan/uit- en OpenTherm-systemen, ook warmtepompen, maakt rechtstreeks verbinding met wifi en wordt bediend via de Resideo-app.",
          "pl": "Współpracuje z urządzeniami on/off i OpenTherm, w tym z pompami ciepła; łączy się bezpośrednio z Wi-Fi, a steruje się nim z aplikacji Resideo.",
          "sv": "Fungerar med on/off- och OpenTherm-system, även värmepumpar, ansluts direkt till wifi och styrs från appen Resideo.",
          "us": "Compatible with on/off and OpenTherm systems, including heat pumps, it connects straight to Wi-Fi and is controlled from the Resideo app.",
          "ca": "Compatible with on/off and OpenTherm systems, including heat pumps, it connects straight to Wi-Fi and is controlled from the Resideo app."
        }
      }
    ]
  },
  "tondeuse-robot-sans-fil-perimetrique": {
    "question": {
      "fr": "Quelle est la meilleure tondeuse robot sans fil périmétrique en 2026 ?",
      "en": "What is the best wire-free robot mower in 2026?",
      "de": "Welcher ist der beste Mähroboter ohne Begrenzungskabel 2026?",
      "es": "¿Cuál es el mejor robot cortacésped sin cable perimetral en 2026?",
      "it": "Qual è il miglior robot tagliaerba senza filo perimetrale nel 2026?",
      "nl": "Wat is de beste robotmaaier zonder begrenzingsdraad in 2026?",
      "pl": "Jaki jest najlepszy robot koszący bez przewodu ograniczającego w 2026 roku?",
      "sv": "Vilken robotgräsklippare utan begränsningskabel är bäst 2026?",
      "us": "What is the best robot lawn mower without a boundary wire in 2026?",
      "ca": "What is the best wire-free robot mower in 2026?"
    },
    "picks": [
      {
        "model": "ECOVACS GOAT A1600 RTK",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "RTK et LiDAR combinés pour rester précis près des arbres, jusqu’à 1 600 m², 33 cm de coupe et des pentes jusqu’à 50 % selon ECOVACS.",
          "en": "RTK and LiDAR combined to stay accurate near trees, up to 1,600 m², a 33 cm cut and slopes of up to 50%, according to ECOVACS.",
          "de": "RTK und LiDAR kombiniert für präzise Ortung auch unter Bäumen, bis 1.600 m², 33 cm Schnittbreite und laut ECOVACS bis 50 % Steigung.",
          "es": "RTK y LiDAR combinados para mantener la precisión cerca de árboles, hasta 1.600 m², 33 cm de corte y pendientes de hasta el 50 % según ECOVACS.",
          "it": "RTK e LiDAR combinati per restare precisi vicino agli alberi, fino a 1.600 m², taglio da 33 cm e pendenze fino al 50% secondo ECOVACS.",
          "nl": "RTK en LiDAR gecombineerd voor precisie bij bomen, tot 1.600 m², 33 cm maaibreedte en volgens ECOVACS hellingen tot 50%.",
          "pl": "Połączenie RTK i LiDAR pozwala zachować precyzję także w pobliżu drzew. Według ECOVACS: do 1600 m², szerokość koszenia 33 cm i nachylenie do 50%.",
          "sv": "RTK och LiDAR i kombination för att hålla precisionen nära träd, upp till 1 600 m², 33 cm klippbredd och lutningar upp till 50 % enligt ECOVACS.",
          "us": "RTK and LiDAR combined to stay accurate near trees, lawns up to 0.4 acre (1,600 m²), a 13 in (33 cm) cutting width and slopes up to 50%, according to ECOVACS.",
          "ca": "RTK and LiDAR combined to stay accurate near trees, up to 1,600 m², a 33 cm cut and slopes up to 50% according to ECOVACS."
        }
      },
      {
        "model": "Segway Navimow i105E",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "RTK et caméra VisionFence sans câble pour les pelouses jusqu’à 500 m², avec une configuration guidée simple dans l’application.",
          "en": "Wire-free RTK plus VisionFence camera for lawns up to 500 m², with a simple guided setup in the app.",
          "de": "Kabelloses RTK plus VisionFence-Kamera für Rasenflächen bis 500 m², mit einfacher geführter Einrichtung in der App.",
          "es": "RTK y cámara VisionFence, sin cable perimetral, para céspedes de hasta 500 m², con una configuración guiada sencilla en la app.",
          "it": "RTK e telecamera VisionFence, senza filo perimetrale, per prati fino a 500 m², con una configurazione guidata semplice dall’app.",
          "nl": "Draadloze RTK plus VisionFence-camera voor gazons tot 500 m², met een eenvoudige begeleide installatie in de app.",
          "pl": "RTK i kamera VisionFence bez przewodu ograniczającego, na trawniki do 500 m², z prostą konfiguracją krok po kroku w aplikacji.",
          "sv": "Kabelfri navigering med RTK och VisionFence-kamera för gräsmattor upp till 500 m², med en enkel guidad installation i appen.",
          "us": "Wire-free RTK plus a VisionFence camera for lawns up to 5,400 sq ft (500 m²), with a simple guided setup in the app.",
          "ca": "Wire-free RTK plus VisionFence camera for lawns up to 500 m², with a simple guided setup in the app."
        }
      },
      {
        "model": "Mammotion LUBA 2 AWD 3000X",
        "role": {
          "fr": "Idéal grands terrains en pente",
          "en": "Best for large, sloping gardens",
          "de": "Ideal für große Hanglagen",
          "es": "Ideal para terrenos grandes en pendiente",
          "it": "Ideale per grandi terreni in pendenza",
          "nl": "Beste voor grote hellingen",
          "pl": "Najlepszy na duże, pochyłe działki",
          "sv": "Bäst för stora sluttande tomter",
          "us": "Best for large, sloped yards",
          "ca": "Best for large slopes"
        },
        "why": {
          "fr": "Quatre roues motrices, pentes annoncées jusqu’à 80 %, 40 cm de coupe et RTK + vision IA pour des terrains jusqu’à 3 000 m².",
          "en": "All-wheel drive, rated for slopes of up to 80%, a 40 cm cut and RTK plus AI vision for gardens of up to 3,000 m².",
          "de": "Allradantrieb, laut Hersteller bis 80 % Steigung, 40 cm Schnittbreite und RTK plus KI-Kamera für Flächen bis 3.000 m².",
          "es": "Tracción total, pendientes anunciadas de hasta el 80 %, 40 cm de corte y RTK con visión IA para terrenos de hasta 3.000 m².",
          "it": "Trazione integrale, pendenze dichiarate fino all’80%, taglio da 40 cm e RTK con visione IA per terreni fino a 3.000 m².",
          "nl": "Vierwielaandrijving, hellingen tot 80% volgens de fabrikant, 40 cm maaibreedte en RTK plus AI-camera voor percelen tot 3.000 m².",
          "pl": "Napęd na cztery koła, deklarowane nachylenie do 80%, szerokość koszenia 40 cm oraz RTK z systemem wizyjnym AI – na działki do 3000 m².",
          "sv": "Fyrhjulsdrift, lutningar upp till 80 % enligt tillverkaren, 40 cm klippbredd och RTK plus AI-kamera för tomter upp till 3 000 m².",
          "us": "All-wheel drive, slopes rated up to 80%, a 16 in (40 cm) cutting width and RTK plus AI vision for yards up to 0.7 acre (3,000 m²).",
          "ca": "All-wheel drive, slopes rated up to 80%, a 40 cm cut and RTK plus AI vision for lawns up to 3,000 m²."
        }
      }
    ]
  },
  "waermepumpentrockner-vergleich": {
    "question": {
      "fr": "Quel est le meilleur sèche-linge à pompe à chaleur en 2026 ?",
      "en": "What is the best heat pump tumble dryer in 2026?",
      "de": "Welcher ist der beste Wärmepumpentrockner 2026?",
      "es": "¿Cuál es la mejor secadora con bomba de calor en 2026?",
      "it": "Qual è la migliore asciugatrice a pompa di calore nel 2026?",
      "nl": "Wat is de beste warmtepompdroger in 2026?",
      "pl": "Jaka jest najlepsza suszarka z pompą ciepła w 2026 roku?",
      "sv": "Vilken värmepumpstorktumlare är bäst 2026?",
      "us": "What is the best heat pump dryer in 2026?",
      "ca": "What is the best heat pump dryer in 2026?"
    },
    "picks": [
      {
        "model": "Bosch Serie 8 WRB247C40",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Bester Allrounder",
          "es": "Mejor opción en general",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall",
          "pl": "Najlepszy wybór dla większości",
          "sv": "Bäst totalt",
          "us": "Best overall",
          "ca": "Best overall"
        },
        "why": {
          "fr": "Classe A sur la nouvelle étiquette (79 kWh/100 cycles), 57 dB, condensation A et condenseur autonettoyant : sobre, discret et presque sans entretien.",
          "en": "Class A on the new energy label (79 kWh/100 cycles), 57 dB, condensation class A and a self-cleaning condenser: efficient, quiet and almost maintenance-free.",
          "de": "Klasse A auf dem neuen Label (79 kWh/100 Zyklen), 57 dB, Kondensation A und selbstreinigender Kondensator: sparsam, leise und fast wartungsfrei.",
          "es": "Clase A en la nueva etiqueta (79 kWh/100 ciclos), 57 dB, condensación A y condensador autolimpiante: eficiente, silenciosa y casi sin mantenimiento.",
          "it": "Classe A sulla nuova etichetta (79 kWh/100 cicli), 57 dB, classe di condensazione A e condensatore autopulente: consuma poco, è silenziosa e quasi non richiede manutenzione.",
          "nl": "Klasse A op het nieuwe label (79 kWh/100 cycli), 57 dB, condensatie A en zelfreinigende condensor: zuinig, stil en nagenoeg onderhoudsvrij.",
          "pl": "Klasa A na nowej etykiecie energetycznej (79 kWh/100 cykli), 57 dB, klasa kondensacji A i samoczyszczący skraplacz – oszczędna, cicha i niemal bezobsługowa.",
          "sv": "Energiklass A på den nya energimärkningen (79 kWh/100 cykler), 57 dB, kondenseringsklass A och självrengörande kondensor: energisnål, tyst och nästan underhållsfri.",
          "us": "Class A on the new EU energy label (79 kWh per 100 cycles), 57 dB, condensation efficiency class A and a self-cleaning condenser: efficient, quiet and nearly maintenance-free.",
          "ca": "Class A on the new EU label (79 kWh/100 cycles), 57 dB, condensation class A and a self-cleaning condenser: efficient, quiet and nearly maintenance-free."
        }
      },
      {
        "model": "Beko B7T88209",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit",
          "pl": "Najlepszy stosunek jakości do ceny",
          "sv": "Mest prisvärd",
          "us": "Best value",
          "ca": "Best value"
        },
        "why": {
          "fr": "Classe énergétique A et condensation A avec fonction vapeur SteamCure, sur un segment de prix bien plus accessible ; 8 kg pour couples et petites familles.",
          "en": "Energy class A and condensation class A, with SteamCure steam, at a much more affordable price; its 8 kg drum suits couples and small families.",
          "de": "Energieklasse A und Kondensation A mit SteamCure-Dampf in einem deutlich günstigeren Preissegment; 8 kg für Paare und kleine Familien.",
          "es": "Clase energética A y condensación A con vapor SteamCure, a un precio mucho más asequible; 8 kg para parejas y familias pequeñas.",
          "it": "Classe energetica A e condensazione A con funzione vapore SteamCure, in una fascia di prezzo molto più accessibile; 8 kg per coppie e piccole famiglie.",
          "nl": "Energieklasse A en condensatie A met SteamCure-stoom, in een veel betaalbaarder prijssegment; 8 kg voor stellen en kleine gezinnen.",
          "pl": "Klasa energetyczna A, klasa kondensacji A i funkcja pary SteamCure w znacznie tańszym segmencie cenowym. Wsad 8 kg wystarczy parom i małym rodzinom.",
          "sv": "Energiklass A och kondenseringsklass A med ångfunktionen SteamCure, i en betydligt mer prisvärd klass; 8 kg passar par och mindre familjer.",
          "us": "EU energy class A and condensation class A with SteamCure steam, at a much more affordable tier; its 8 kg (18 lb) load suits couples and small families.",
          "ca": "EU energy class A and condensation class A with SteamCure steam, in a much more affordable price tier; 8 kg suits couples and small families."
        }
      },
      {
        "model": "Miele TQ 1000 WP Nova Edition",
        "role": {
          "fr": "Idéal pour la longévité",
          "en": "Best for longevity",
          "de": "Ideal für Langlebigkeit",
          "es": "Ideal si buscas durabilidad",
          "it": "Ideale per durare nel tempo",
          "nl": "Ideaal voor een lange levensduur",
          "pl": "Najlepsza pod względem trwałości",
          "sv": "Bäst för lång livslängd",
          "us": "Best for longevity",
          "ca": "Best for longevity"
        },
        "why": {
          "fr": "Classe B mais bruit et condensation A, vapeur SteamCare, WoolDry et finition Miele, conçue selon la marque pour 20 ans d'utilisation.",
          "en": "Energy class B, but class A for noise and condensation, with SteamCare steam, WoolDry and Miele build quality; the brand says it’s designed for 20 years of use.",
          "de": "Klasse B, aber Geräusch und Kondensation A, SteamCare-Dampf, WoolDry und Miele-Verarbeitung, laut Hersteller auf 20 Jahre Nutzung ausgelegt.",
          "es": "Clase B, pero ruido y condensación A, vapor SteamCare, WoolDry y acabados Miele, diseñada según la marca para 20 años de uso.",
          "it": "Classe B, ma classe A per rumorosità e condensazione; vapore SteamCare, WoolDry e qualità costruttiva Miele: secondo il marchio è progettata per durare 20 anni.",
          "nl": "Klasse B, maar geluid en condensatie A, SteamCare-stoom, WoolDry en Miele-kwaliteit, volgens het merk ontworpen voor 20 jaar gebruik.",
          "pl": "Klasa energetyczna B, ale klasa hałasu i kondensacji A, para SteamCare, program WoolDry i jakość wykonania Miele; według producenta zaprojektowana na 20 lat użytkowania.",
          "sv": "Energiklass B men ljud- och kondenseringsklass A, ångfunktionen SteamCare, WoolDry och Mieles byggkvalitet, enligt märket konstruerad för 20 års användning.",
          "us": "EU energy class B, but class A for noise and condensation, with SteamCare steam, WoolDry and Miele build quality, designed by the brand for 20 years of use.",
          "ca": "EU energy class B but class A for noise and condensation, SteamCare steam, WoolDry and Miele build quality, designed by the brand for 20 years of use."
        }
      }
    ]
  }
}

export interface QuickAnswer {
  question: string
  /** `photo`: the manufacturer's official photo, when data/product-images.json has one. */
  picks: { model: string; role: string; why: string; url: string; photo?: ProductPhoto }[]
}

/**
 * The US or Canadian verdict: that market's own picks (data/market-picks),
 * named and linked as sold there. A pick shows a photo only when the
 * market sells the European product itself (lib/market-models/offers.ts).
 */
function getMarketQuickAnswer(slug: string, market: NorthAmericanMarket): QuickAnswer | null {
  const data = QUICK_ANSWERS[slug]
  if (!data) return null
  const picks = marketPicks(market, slug).map((pick) => {
    const { url, photo } = offerForMarketName(pick.model, market)
    return { model: pick.model, url, role: pick.role, why: pick.why, ...(photo ? { photo } : {}) }
  })
  // A market can keep a single pick when the others have no equivalent there.
  return picks.length > 0 ? { question: data.question[market], picks } : null
}

/** Localized verdict with each pick linked to the reader's Amazon market (see lib/amazon.ts). */
export function getQuickAnswer(article: { slug: string; pillar: string }, lang: Lang): QuickAnswer | null {
  if (isNorthAmericanMarket(lang)) return getMarketQuickAnswer(article.slug, lang)
  const data = QUICK_ANSWERS[article.slug]
  if (!data) return null
  const rec = getArticleRecommendations(article, lang)
  // Picks name catalog products by their French title; titles are
  // localized, so match on the ASIN to resolve them in every locale.
  const frRec = getArticleRecommendations(article, 'fr')
  const resolve = (model: string): { model: string; url: string; asin?: string } | undefined => {
    if (rec?.kind === 'catalog' && frRec?.kind === 'catalog') {
      const asin = frRec.products.find((p) => p.title === model)?.asin
      const product = rec.products.find((p) => p.asin === asin)
      return product && { model: product.title, url: product.url, asin: product.asin }
    }
    if (rec?.kind === 'models') {
      const link = rec.models.find((m) => m.name === model)
      return link && { model: link.name, url: link.url }
    }
    return undefined
  }
  const picks = data.picks.flatMap((pick) => {
    const resolved = resolve(pick.model)
    if (!resolved) return []
    const photo = productPhoto({ asin: resolved.asin, name: pick.model }, lang)
    return [{ model: resolved.model, url: resolved.url, role: pick.role[lang], why: pick.why[lang], ...(photo ? { photo } : {}) }]
  })
  return picks.length >= 2 ? { question: data.question[lang], picks } : null
}
