/**
 * Answer-first verdicts ("What is the best X?") for comparison articles,
 * quoted by search engines and AI assistants. Picks are taken from each
 * article's own recommendations; models must be linkable through
 * getArticleRecommendations (enforced by tests/lib/quick-answers.test.ts).
 */
import type { Lang } from '@/lib/i18n'
import { getArticleRecommendations } from '@/lib/blog/article-products'

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
      "nl": "Wat is de beste robotstofzuiger voor dierenharen in 2026?"
    },
    "picks": [
      {
        "model": "Roborock S8 MaxV Ultra",
        "role": {
          "fr": "Meilleur choix pour les animaux",
          "en": "Top pick for pets",
          "de": "Erste Wahl für Haustiere",
          "es": "Mejor opción para mascotas",
          "it": "Prima scelta per gli animali",
          "nl": "Topkeuze voor huisdieren"
        },
        "why": {
          "fr": "Sa brosse DuoRoller en caoutchouc évite les emmêlements même après des semaines d'usage, idéal pour un ou deux animaux et qui veut fiabilité et bon SAV.",
          "en": "Its rubber DuoRoller brush avoids tangles even after weeks of use, ideal for one or two pets and anyone who wants reliability and good support.",
          "de": "Die Gummi-DuoRoller-Bürste vermeidet selbst nach Wochen Verheddern, ideal für ein bis zwei Tiere und alle, die Zuverlässigkeit und guten Service wollen.",
          "es": "Su cepillo DuoRoller de goma evita enredos incluso tras semanas de uso, ideal para una o dos mascotas y para quien busca fiabilidad y buen servicio.",
          "it": "La spazzola DuoRoller in gomma evita grovigli anche dopo settimane d'uso, ideale per uno o due animali e per chi cerca affidabilità e buona assistenza.",
          "nl": "De rubberen DuoRoller-borstel voorkomt klitten zelfs na weken gebruik, ideaal voor een of twee huisdieren en wie betrouwbaarheid en goede service wil."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "C'est le modèle le plus accessible, avec une brosse ZeroTangle efficace et le plus grand bac de la sélection, idéal pour un premier robot en foyer avec animal.",
          "en": "It is the most accessible model, with an effective ZeroTangle brush and the largest dustbin of the selection, ideal as a first robot in a pet household.",
          "de": "Es ist das günstigste Modell, mit wirksamer ZeroTangle-Bürste und dem größten Staubbehälter der Auswahl, ideal als erster Roboter im Haushalt mit Tier.",
          "es": "Es el modelo más accesible, con un cepillo ZeroTangle eficaz y el depósito más grande de la selección, ideal como primer robot en un hogar con mascota.",
          "it": "È il modello più accessibile, con una spazzola ZeroTangle efficace e il serbatoio più grande della selezione, ideale come primo robot in una casa con animali.",
          "nl": "Het is het meest betaalbare model, met een effectieve ZeroTangle-borstel en de grootste stofbak van de selectie, ideaal als eerste robot bij huisdieren."
        }
      },
      {
        "model": "iRobot Roomba j9+",
        "role": {
          "fr": "Référence anti-emmêlement",
          "en": "Anti-tangle reference",
          "de": "Referenz gegen Verheddern",
          "es": "Referencia antienredos",
          "it": "Riferimento anti-groviglio",
          "nl": "Anti-klitreferentie"
        },
        "why": {
          "fr": "Sa double brosse 100 % caoutchouc est idéale pour les chiens à poils longs comme le Golden Retriever, quand l'anti-emmêlement est la priorité absolue.",
          "en": "Its dual 100% rubber brush suits long-haired dogs such as the Golden Retriever, when anti-tangle performance is the absolute priority.",
          "de": "Die doppelte Bürste aus 100 % Gummi passt zu langhaarigen Hunden wie dem Golden Retriever, wenn Schutz vor Verheddern oberste Priorität hat.",
          "es": "Su doble cepillo 100 % de goma es ideal para perros de pelo largo como el Golden Retriever, cuando lo prioritario es evitar enredos.",
          "it": "La doppia spazzola 100% gomma è ideale per i cani a pelo lungo come il Golden Retriever, quando l'anti-groviglio è la priorità assoluta.",
          "nl": "De dubbele borstel van 100% rubber past bij langharige honden zoals de Golden Retriever, wanneer anti-klitten de absolute prioriteit is."
        }
      },
      {
        "model": "Dreame X40 Ultra",
        "role": {
          "fr": "Puissance brute",
          "en": "Raw power",
          "de": "Rohe Saugkraft",
          "es": "Potencia bruta",
          "it": "Potenza pura",
          "nl": "Pure kracht"
        },
        "why": {
          "fr": "Sa forte aspiration extrait les poils des tapis épais et moquettes, parfait pour deux animaux ou plus et de grandes maisons, avec lavage en un passage.",
          "en": "Its strong suction pulls hair out of thick rugs and carpets, a fit for two or more pets and large homes, with vacuuming and mopping in one pass.",
          "de": "Seine starke Saugkraft holt Haare aus dicken Teppichen, passend für zwei oder mehr Tiere und große Häuser, mit Saugen und Wischen in einem Durchgang.",
          "es": "Su gran succión extrae el pelo de alfombras gruesas y moquetas, perfecto para dos o más mascotas y casas grandes, con aspirado y fregado en una pasada.",
          "it": "La forte aspirazione estrae i peli da tappeti spessi e moquette, adatto a due o più animali e case grandi, con aspirazione e lavaggio in un solo passaggio.",
          "nl": "Zijn sterke zuigkracht haalt haren uit dikke tapijten, geschikt voor twee of meer huisdieren en grote huizen, met zuigen en dweilen in één keer."
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
      "nl": "Wat is de beste airfryer voor een gezin in 2026?"
    },
    "picks": [
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Idéal pour 4 à 5 personnes",
          "en": "Best for 4 to 5 people",
          "de": "Ideal für 4 bis 5 Personen",
          "es": "Ideal para 4 a 5 personas",
          "it": "Ideale per 4-5 persone",
          "nl": "Ideaal voor 4 tot 5 personen"
        },
        "why": {
          "fr": "Ses deux zones indépendantes de 4,75 litres et la fonction Sync, qui synchronise la fin des cuissons, en font le choix idéal des familles nombreuses.",
          "en": "Its two independent 4.75-litre zones and the Sync function, which finishes both cooks together, make it the ideal choice for larger families.",
          "de": "Die zwei unabhängigen 4,75-Liter-Zonen und die Sync-Funktion, die beide Garvorgänge gleichzeitig beendet, machen ihn zur idealen Wahl für größere Familien.",
          "es": "Sus dos zonas independientes de 4,75 litros y la función Sync, que sincroniza el final de las cocciones, lo hacen ideal para familias numerosas.",
          "it": "Le due zone indipendenti da 4,75 litri e la funzione Sync, che sincronizza la fine delle cotture, lo rendono ideale per le famiglie numerose.",
          "nl": "De twee onafhankelijke zones van 4,75 liter en de Sync-functie, die beide bereidingen tegelijk afrondt, maken hem ideaal voor grotere gezinnen."
        }
      },
      {
        "model": "Ninja Foodi FlexDrawer 10.4L Double Zone",
        "role": {
          "fr": "Idéal pour 5 à 6 personnes",
          "en": "Best for 5 to 6 people",
          "de": "Ideal für 5 bis 6 Personen",
          "es": "Ideal para 5 a 6 personas",
          "it": "Ideale per 5-6 persone",
          "nl": "Ideaal voor 5 tot 6 personen"
        },
        "why": {
          "fr": "Son méga tiroir de 10,4 litres fonctionne en une ou deux zones et accueille un poulet entier ou une grande quantité de frites.",
          "en": "Its 10.4-litre mega drawer works as one or two zones and holds a whole chicken or a large batch of fries.",
          "de": "Die 10,4-Liter-Megaschublade arbeitet als eine oder zwei Zonen und fasst ein ganzes Hähnchen oder eine große Menge Pommes.",
          "es": "Su megacajón de 10,4 litros funciona como una o dos zonas y admite un pollo entero o una gran cantidad de patatas fritas.",
          "it": "Il mega cassetto da 10,4 litri funziona come una o due zone e accoglie un pollo intero o una grande quantità di patatine.",
          "nl": "De megalade van 10,4 liter werkt als één of twee zones en biedt plaats aan een hele kip of een grote hoeveelheid friet."
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
          "nl": "Topmodel voor 6 personen of meer"
        },
        "why": {
          "fr": "Le haut de gamme absolu avec 8,3 litres, fonctions four, gril et déshydrateur et connectivité, un investissement qui remplace plusieurs appareils.",
          "en": "The top-end option with 8.3 litres, oven, grill and dehydrator functions and connectivity, an investment that replaces several appliances.",
          "de": "Das absolute Spitzenmodell mit 8,3 Litern, Backofen-, Grill- und Dörrfunktion sowie Vernetzung, eine Investition, die mehrere Geräte ersetzt.",
          "es": "La gama más alta, con 8,3 litros, funciones de horno, grill y deshidratador y conectividad, una inversión que sustituye a varios aparatos.",
          "it": "Il top di gamma con 8,3 litri, funzioni forno, grill ed essiccatore e connettività, un investimento che sostituisce più apparecchi.",
          "nl": "Het absolute topmodel met 8,3 liter, oven-, grill- en droogfuncties en connectiviteit, een investering die meerdere apparaten vervangt."
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
      "it": "Qual è il miglior ferro con caldaia nel 2026?",
      "nl": "Wat is de beste stoomgenerator in 2026?"
    },
    "picks": [
      {
        "model": "Philips PerfectCare 8000 Series PSG8160/30",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Insgesamt die beste Wahl",
          "es": "Mejor opción global",
          "it": "Miglior scelta assoluta",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "8,5 bars, 170 g/min de vapeur continue, réservoir de 1,8 L et OptimalTEMP : aucune température à régler.",
          "en": "8.5 bar, 170 g/min continuous steam, a 1.8 L tank and OptimalTEMP: no temperature to set.",
          "de": "8,5 bar, 170 g/min Dauerdampf, 1,8-l-Tank und OptimalTEMP: keine Temperatur einzustellen.",
          "es": "8,5 bares, 170 g/min de vapor continuo, depósito de 1,8 l y OptimalTEMP: sin ajustar temperatura.",
          "it": "8,5 bar, 170 g/min di vapore continuo, serbatoio da 1,8 l e OptimalTEMP: nessuna temperatura da regolare.",
          "nl": "8,5 bar, 170 g/min continue stoom, tank van 1,8 l en OptimalTEMP: geen temperatuur instellen."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "8 bars, 120 g/min, réservoir de 1,8 L, OptimalTEMP et arrêt automatique après 10 minutes.",
          "en": "8 bar, 120 g/min, a 1.8 L tank, OptimalTEMP and auto shut-off after 10 minutes.",
          "de": "8 bar, 120 g/min, 1,8-l-Tank, OptimalTEMP und Abschaltautomatik nach 10 Minuten.",
          "es": "8 bares, 120 g/min, depósito de 1,8 l, OptimalTEMP y apagado automático a los 10 minutos.",
          "it": "8 bar, 120 g/min, serbatoio da 1,8 l, OptimalTEMP e spegnimento automatico dopo 10 minuti.",
          "nl": "8 bar, 120 g/min, tank van 1,8 l, OptimalTEMP en automatische uitschakeling na 10 minuten."
        }
      },
      {
        "model": "Laurastar Smart U",
        "role": {
          "fr": "Le seul vraiment connecté",
          "en": "The only truly connected one",
          "de": "Die einzige wirklich vernetzte",
          "es": "El único realmente conectado",
          "it": "L'unico davvero connesso",
          "nl": "De enige echt verbonden"
        },
        "why": {
          "fr": "Centre de repassage avec table active et application Bluetooth de tutoriels, pour une finition premium.",
          "en": "Ironing system with an active board and a Bluetooth tutorial app, for a premium finish.",
          "de": "Bügelsystem mit aktivem Bügeltisch und Bluetooth-App mit Anleitungen für ein Premium-Finish.",
          "es": "Sistema de planchado con tabla activa y aplicación Bluetooth de tutoriales, para un acabado premium.",
          "it": "Sistema da stiro con asse attivo e app Bluetooth di tutorial, per una finitura premium.",
          "nl": "Strijksysteem met actieve plank en Bluetooth-app met tutorials, voor een premium afwerking."
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
      "nl": "Wat is het beste wake-up light in 2026?"
    },
    "picks": [
      {
        "model": "Philips SmartSleep Sleep & Wake-up Light HF3650/01",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Scelta migliore in assoluto",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Aube colorée jusqu'à 310 lux, coucher de soleil, respiration guidée RelaxBreathe, 10 sons et radio FM.",
          "en": "Coloured sunrise up to 310 lux, sunset mode, RelaxBreathe guided breathing, 10 sounds and FM radio.",
          "de": "Farbiger Sonnenaufgang bis 310 Lux, Sonnenuntergang, geführte Atmung RelaxBreathe, 10 Klänge und UKW-Radio.",
          "es": "Amanecer de colores hasta 310 lux, atardecer, respiración guiada RelaxBreathe, 10 sonidos y radio FM.",
          "it": "Alba colorata fino a 310 lux, tramonto, respirazione guidata RelaxBreathe, 10 suoni e radio FM.",
          "nl": "Gekleurde zonsopgang tot 310 lux, zonsondergang, begeleide ademhaling RelaxBreathe, 10 geluiden en fm-radio."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "L'essentiel du HF3650 : aube colorée de 20 à 40 minutes, 300 lux, coucher de soleil, 5 sons et radio FM.",
          "en": "The essentials of the HF3650: 20 to 40 minute coloured sunrise, 300 lux, sunset mode, 5 sounds and FM radio.",
          "de": "Das Wesentliche des HF3650: farbiger Sonnenaufgang von 20 bis 40 Minuten, 300 Lux, Sonnenuntergang, 5 Klänge, UKW.",
          "es": "Lo esencial del HF3650: amanecer de colores de 20 a 40 minutos, 300 lux, atardecer, 5 sonidos y radio FM.",
          "it": "L'essenziale della HF3650: alba colorata da 20 a 40 minuti, 300 lux, tramonto, 5 suoni e radio FM.",
          "nl": "De kern van de HF3650: gekleurde zonsopgang van 20 tot 40 minuten, 300 lux, zonsondergang, 5 geluiden en fm-radio."
        }
      },
      {
        "model": "Lumie Bodyclock Shine 300",
        "role": {
          "fr": "Idéal pour les réveils difficiles",
          "en": "Best for hard risers",
          "de": "Ideal für Morgenmuffel",
          "es": "Ideal si le cuesta despertarse",
          "it": "Ideale per chi fatica a svegliarsi",
          "nl": "Ideaal voor moeilijke opstaanders"
        },
        "why": {
          "fr": "Aube et crépuscule réglables de 15 à 90 minutes, 15 sons, radio FM et écran à atténuation automatique.",
          "en": "Sunrise and sunset adjustable from 15 to 90 minutes, 15 sounds, FM radio and an auto-dimming display.",
          "de": "Sonnenauf- und -untergang von 15 bis 90 Minuten einstellbar, 15 Klänge, UKW-Radio und selbstdimmendes Display.",
          "es": "Amanecer y atardecer ajustables de 15 a 90 minutos, 15 sonidos, radio FM y pantalla con atenuación automática.",
          "it": "Alba e tramonto regolabili da 15 a 90 minuti, 15 suoni, radio FM e display ad attenuazione automatica.",
          "nl": "Zonsopgang en zonsondergang instelbaar van 15 tot 90 minuten, 15 geluiden, fm-radio en automatisch dimmend display."
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
      "nl": "Wat is de beste raamwasrobot in 2026?"
    },
    "picks": [
      {
        "model": "Ecovacs Winbot W2 Omni",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta assoluta",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Station-batterie portable, câble de sécurité auto-enroulé, pulvérisation à trois buses et détection des bords pour vitres sans cadre.",
          "en": "Portable battery station, self-winding safety cable, three-nozzle spraying and edge detection for frameless glass.",
          "de": "Tragbare Akku-Station, selbst aufrollendes Sicherheitskabel, Sprühsystem mit drei Düsen und Kantenerkennung für rahmenloses Glas.",
          "es": "Estación portátil con batería, cable de seguridad que se recoge solo, pulverización de tres boquillas y detección de bordes sin marco.",
          "it": "Stazione portatile con batteria, cavo di sicurezza autoavvolgente, spruzzo a tre ugelli e rilevamento dei bordi per vetri senza telaio.",
          "nl": "Draagbaar accustation, zelfoprollende veiligheidskabel, sproeien met drie sproeiers en randdetectie voor kaderloos glas."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Double spray, 8 modes, application et télécommande, corde de sécurité et batterie d’environ 30 minutes en cas de coupure.",
          "en": "Double spray, 8 modes, app and remote control, safety cord and a roughly 30-minute battery in case of a power cut.",
          "de": "Double Spray, 8 Modi, App und Fernbedienung, Sicherheitsseil und rund 30 Minuten Akku bei Stromausfall.",
          "es": "Doble spray, 8 modos, app y mando, cuerda de seguridad y batería de unos 30 minutos ante un corte de corriente.",
          "it": "Doppio spruzzo, 8 modalità, app e telecomando, corda di sicurezza e batteria da circa 30 minuti in caso di blackout.",
          "nl": "Dubbel sproeien, 8 modi, app en afstandsbediening, veiligheidskoord en circa 30 minuten accu bij stroomuitval."
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
          "nl": "Ideaal voor kaderloos glas"
        },
        "why": {
          "fr": "Compact et léger, deux buses à ultrasons, capteur de bords, corde de 4,5 m et batterie de secours jusqu’à 20 minutes.",
          "en": "Compact and light, two ultrasonic nozzles, edge sensor, 4.5 m rope and a backup battery lasting up to 20 minutes.",
          "de": "Kompakt und leicht, zwei Ultraschalldüsen, Kantensensor, 4,5-m-Seil und Notstrom-Akku für bis zu 20 Minuten.",
          "es": "Compacto y ligero, dos boquillas ultrasónicas, sensor de bordes, cuerda de 4,5 m y batería de emergencia de hasta 20 minutos.",
          "it": "Compatto e leggero, due ugelli a ultrasuoni, sensore dei bordi, corda da 4,5 m e batteria di emergenza fino a 20 minuti.",
          "nl": "Compact en licht, twee ultrasone sproeiers, randsensor, koord van 4,5 m en noodaccu tot 20 minuten."
        }
      }
    ]
  },
  "borne-recharge-voiture-electrique-maison": {
    "question": {
      "fr": "Quelle est la meilleure borne de recharge pour la maison en 2026 ?",
      "en": "What is the best home EV charger in 2026?",
      "de": "Was ist die beste Wallbox für zu Hause 2026?",
      "es": "¿Cuál es el mejor cargador de coche eléctrico para casa en 2026?",
      "it": "Qual è la migliore wallbox per casa nel 2026?",
      "nl": "Wat is de beste laadpaal voor thuis in 2026?"
    },
    "picks": [
      {
        "model": "Wallbox Pulsar Max",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Compacte, en 7,4, 11 ou 22 kW, Wi-Fi, Bluetooth et OCPP, avec équilibrage de charge et recharge solaire via son compteur dédié.",
          "en": "Compact, in 7.4, 11 or 22 kW, with Wi-Fi, Bluetooth and OCPP, plus load balancing and solar charging via its dedicated meter.",
          "de": "Kompakt, mit 7,4, 11 oder 22 kW, WLAN, Bluetooth und OCPP, dazu Lastmanagement und PV-Überschussladen über den eigenen Zähler.",
          "es": "Compacto, en 7,4, 11 o 22 kW, con Wi-Fi, Bluetooth y OCPP, además de balanceo de carga y carga solar con su medidor dedicado.",
          "it": "Compatta, da 7,4, 11 o 22 kW, con Wi-Fi, Bluetooth e OCPP, più bilanciamento dei carichi e ricarica solare con il suo contatore.",
          "nl": "Compact, in 7,4, 11 of 22 kW, met wifi, Bluetooth en OCPP, plus load balancing en laden op zonne-overschot via de eigen meter."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "Jusqu’à 11 kW avec lecteur RFID, Wi-Fi, 4G intégrée et OCPP ; équilibrage et solaire possibles avec l’Easee Equalizer.",
          "en": "Up to 11 kW with an RFID reader, Wi-Fi, built-in 4G and OCPP; load balancing and solar charging with the Easee Equalizer.",
          "de": "Bis 11 kW mit RFID-Leser, WLAN, integriertem 4G und OCPP; Lastmanagement und Solarladen mit dem Easee Equalizer.",
          "es": "Hasta 11 kW con lector RFID, Wi-Fi, 4G integrado y OCPP; balanceo de carga y carga solar con el Easee Equalizer.",
          "it": "Fino a 11 kW con lettore RFID, Wi-Fi, 4G integrato e OCPP; bilanciamento e ricarica solare con l’Easee Equalizer.",
          "nl": "Tot 11 kW met RFID-lezer, wifi, ingebouwde 4G en OCPP; load balancing en zonneladen met de Easee Equalizer."
        }
      },
      {
        "model": "Zaptec Go 2",
        "role": {
          "fr": "Idéale en 22 kW avec compteur MID",
          "en": "Best for 22 kW with MID meter",
          "de": "Ideal für 22 kW mit MID-Zähler",
          "es": "Ideal para 22 kW con contador MID",
          "it": "Ideale per 22 kW con contatore MID",
          "nl": "Ideaal voor 22 kW met MID-meter"
        },
        "why": {
          "fr": "Jusqu’à 22 kW dans un boîtier mini, avec écran, RFID, 4G, OCPP et compteur certifié MID pour un remboursement employeur.",
          "en": "Up to 22 kW in a tiny housing, with display, RFID, 4G, OCPP and an MID-certified meter for employer reimbursement.",
          "de": "Bis 22 kW im Mini-Gehäuse, mit Display, RFID, 4G, OCPP und MID-geeichtem Zähler für die Dienstwagenabrechnung.",
          "es": "Hasta 22 kW en una carcasa mínima, con pantalla, RFID, 4G, OCPP y contador con certificación MID para el reembolso de la empresa.",
          "it": "Fino a 22 kW in un corpo minuscolo, con display, RFID, 4G, OCPP e contatore certificato MID per il rimborso aziendale.",
          "nl": "Tot 22 kW in een mini-behuizing, met display, RFID, 4G, OCPP en een MID-gecertificeerde meter voor vergoeding door de werkgever."
        }
      }
    ]
  },
  "traceur-objets-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur traceur d’objets en 2026 ?",
      "en": "What is the best item tracker in 2026?",
      "de": "Welcher Bluetooth-Tracker ist 2026 der beste?",
      "es": "¿Cuál es el mejor localizador de objetos en 2026?",
      "it": "Qual è il miglior localizzatore di oggetti nel 2026?",
      "nl": "Wat is de beste tracker voor spullen in 2026?"
    },
    "picks": [
      {
        "model": "Apple AirTag (2nd generation)",
        "role": {
          "fr": "Meilleur choix global (iPhone)",
          "en": "Best overall (iPhone)",
          "de": "Beste Wahl insgesamt (iPhone)",
          "es": "Mejor opción global (iPhone)",
          "it": "Miglior scelta assoluta (iPhone)",
          "nl": "Beste keuze overall (iPhone)"
        },
        "why": {
          "fr": "Réseau Apple Localiser très dense, recherche de précision UWB jusqu’à 50 % plus loin, haut-parleur plus fort, pile CR2032 remplaçable et IP67.",
          "en": "Very dense Apple Find My network, UWB Precision Finding up to 50% farther, louder speaker, replaceable CR2032 battery and IP67.",
          "de": "Sehr dichtes „Wo ist?“-Netzwerk, UWB-Präzisionssuche bis zu 50 % weiter, lauterer Lautsprecher, austauschbare CR2032 und IP67.",
          "es": "Red Apple Buscar muy densa, búsqueda precisa UWB hasta un 50 % más lejos, altavoz más potente, pila CR2032 reemplazable e IP67.",
          "it": "Rete Apple Dov’è molto densa, ricerca di precisione UWB fino al 50 % più lontano, altoparlante più forte, pila CR2032 sostituibile e IP67.",
          "nl": "Zeer dicht Apple Zoek mijn-netwerk, UWB-precisiezoeken tot 50% verder, luidere speaker, vervangbare CR2032-batterij en IP67."
        }
      },
      {
        "model": "Chipolo POP",
        "role": {
          "fr": "Meilleur pour Android et foyers mixtes",
          "en": "Best for Android and mixed households",
          "de": "Beste Wahl für Android und gemischte Haushalte",
          "es": "Mejor para Android y hogares mixtos",
          "it": "Migliore per Android e famiglie miste",
          "nl": "Beste voor Android en gemengde gezinnen"
        },
        "why": {
          "fr": "Compatible Apple Localiser ou Google Find Hub, sonnerie d’environ 120 dB parmi les plus fortes, pile remplaçable et fabrication européenne.",
          "en": "Works with Apple Find My or Google Find Hub, a ringer of around 120 dB among the loudest, replaceable battery and made in Europe.",
          "de": "Kompatibel mit Apple „Wo ist?“ oder Google Find Hub, Signalton mit rund 120 dB, austauschbare Batterie, in Europa gefertigt.",
          "es": "Compatible con Apple Buscar o Google Find Hub, timbre de unos 120 dB de los más potentes, pila reemplazable y fabricado en Europa.",
          "it": "Compatibile con Apple Dov’è o Google Find Hub, suoneria da circa 120 dB tra le più forti, pila sostituibile e prodotto in Europa.",
          "nl": "Werkt met Apple Zoek mijn of Google Find Hub, signaal van ongeveer 120 dB bij de luidste, vervangbare batterij en gemaakt in Europa."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Entrée de gamme compatible Apple ou Google, rechargeable en USB‑C jusqu’à 12 mois, IP68, souvent vendu en lots pour toute la famille.",
          "en": "Entry-level tracker for Apple or Google, USB‑C rechargeable for up to 12 months, IP68, often sold in multi-packs for the whole family.",
          "de": "Einsteiger-Tracker für Apple oder Google, per USB‑C aufladbar mit bis zu 12 Monaten Laufzeit, IP68, oft im Mehrfachpack erhältlich.",
          "es": "Gama de entrada para Apple o Google, recargable por USB‑C con hasta 12 meses de autonomía, IP68 y a menudo en packs familiares.",
          "it": "Entry level per Apple o Google, ricaricabile via USB‑C fino a 12 mesi, IP68, spesso venduto in confezioni multiple per la famiglia.",
          "nl": "Instapmodel voor Apple of Google, via USB‑C oplaadbaar tot 12 maanden, IP68, vaak verkocht in multipacks voor het hele gezin."
        }
      }
    ]
  },
  "lave-vaisselle-connecte-guide": {
    "question": {
      "fr": "Quel est le meilleur lave-vaisselle connecté en 2026 ?",
      "en": "What is the best smart dishwasher in 2026?",
      "de": "Welcher ist der beste smarte Geschirrspüler 2026?",
      "es": "¿Cuál es el mejor lavavajillas de 2026?",
      "it": "Qual è la miglior lavastoviglie del 2026?",
      "nl": "Wat is de beste slimme vaatwasser in 2026?"
    },
    "picks": [
      {
        "model": "Bosch Serie 6 SMS6ZCI42E",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción general",
          "it": "Migliore in assoluto",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Séchage zéolithe qui sèche même les plastiques, troisième panier, 14 couverts, 44 dB et application Home Connect complète.",
          "en": "Zeolite drying that even dries plastics, a third rack, 14 place settings, 44 dB and a full-featured Home Connect app.",
          "de": "Zeolith-Trocknung, die selbst Kunststoff trocknet, dritte Ebene, 14 Maßgedecke, 44 dB und eine umfassende Home Connect App.",
          "es": "Secado con zeolita que seca hasta los plásticos, tercera bandeja, 14 servicios, 44 dB y una app Home Connect muy completa.",
          "it": "Asciugatura con zeolite che asciuga anche la plastica, terzo cestello, 14 coperti, 44 dB e un’app Home Connect completa.",
          "nl": "Zeolietdroging die zelfs kunststof droogt, derde lade, 14 couverts, 44 dB en een uitgebreide Home Connect-app."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Tout intégrable de 16 couverts, classe B et 40 dB, avec ouverture automatique de la porte et application hOn, bien sous les marques allemandes.",
          "en": "A fully integrated 16-place model, class B and 40 dB, with automatic door opening and the hOn app, well below German brands in price.",
          "de": "Vollintegrierter mit 16 Maßgedecken, Klasse B und 40 dB, automatischer Türöffnung und hOn-App, preislich klar unter deutschen Marken.",
          "es": "Integrable de 16 servicios, clase B y 40 dB, con apertura automática de puerta y app hOn, por debajo del precio de las marcas alemanas.",
          "it": "A scomparsa totale con 16 coperti, classe B e 40 dB, apertura automatica dello sportello e app hOn, sotto il prezzo dei marchi tedeschi.",
          "nl": "Volledig integreerbaar met 16 couverts, klasse B en 40 dB, automatische deuropening en hOn-app, flink goedkoper dan Duitse merken."
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
          "nl": "Beste automatische dosering"
        },
        "why": {
          "fr": "AutoDos dose seul le détergent depuis une cartouche PowerDisk, classe B, 43 dB, ouverture AutoOpen et application Miele@home.",
          "en": "AutoDos doses detergent automatically from a PowerDisk cartridge, class B, 43 dB, AutoOpen drying and the Miele@home app.",
          "de": "AutoDos dosiert den Reiniger selbst aus einer PowerDisk-Kartusche, Klasse B, 43 dB, AutoOpen-Trocknung und Miele@home-App.",
          "es": "AutoDos dosifica solo el detergente desde un cartucho PowerDisk, clase B, 43 dB, secado AutoOpen y app Miele@home.",
          "it": "AutoDos dosa da solo il detersivo da una cartuccia PowerDisk, classe B, 43 dB, asciugatura AutoOpen e app Miele@home.",
          "nl": "AutoDos doseert zelf vaatwasmiddel uit een PowerDisk-patroon, klasse B, 43 dB, AutoOpen-droging en Miele@home-app."
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
      "nl": "Wat is het beste draagbare powerstation in 2026?"
    },
    "picks": [
      {
        "model": "EcoFlow DELTA 3 Plus",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "1 024 Wh LiFePO4, 1 800 W, UPS, 1 000 W en solaire et une application Wi-Fi/Bluetooth très complète : l'équilibre idéal maison, jardin et van.",
          "en": "1,024 Wh LiFePO4, 1,800 W, UPS, 1,000 W solar input and a very complete Wi-Fi/Bluetooth app: the ideal balance for home, garden and van.",
          "de": "1.024 Wh LiFePO4, 1.800 W, USV, 1.000 W Solar und eine sehr umfangreiche WLAN/Bluetooth-App: die ideale Balance für Haus, Garten und Van.",
          "es": "1.024 Wh LiFePO4, 1.800 W, SAI, 1.000 W solares y una app Wi-Fi/Bluetooth muy completa: el equilibrio ideal para casa, jardín y furgoneta.",
          "it": "1.024 Wh LiFePO4, 1.800 W, UPS, 1.000 W di solare e un'app Wi-Fi/Bluetooth molto completa: l'equilibrio ideale per casa, giardino e van.",
          "nl": "1.024 Wh LiFePO4, 1.800 W, UPS, 1.000 W zonne-ingang en een zeer complete wifi/Bluetooth-app: de ideale balans voor huis, tuin en camper."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Même capacité que la DELTA 3 Plus, 1 000 W en solaire, UPS 10 ms et 11,5 kg, avec un positionnement généralement plus accessible.",
          "en": "Same capacity as the DELTA 3 Plus, 1,000 W solar input, 10 ms UPS and 11.5 kg, usually at a more accessible tier.",
          "de": "Gleiche Kapazität wie die DELTA 3 Plus, 1.000 W Solar, 10-ms-USV und 11,5 kg, meist günstiger positioniert.",
          "es": "Misma capacidad que la DELTA 3 Plus, 1.000 W solares, SAI de 10 ms y 11,5 kg, normalmente con un posicionamiento más asequible.",
          "it": "Stessa capacità della DELTA 3 Plus, 1.000 W di solare, UPS da 10 ms e 11,5 kg, di solito con un posizionamento più accessibile.",
          "nl": "Zelfde capaciteit als de DELTA 3 Plus, 1.000 W zonne-ingang, UPS van 10 ms en 11,5 kg, doorgaans gunstiger gepositioneerd."
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
          "nl": "Ideaal voor licht kamperen"
        },
        "why": {
          "fr": "Seulement 4,7 kg pour 286 Wh et 600 W, UPS en moins de 10 ms et extension jusqu'à 858 Wh : parfaite pour la tente ou la box internet.",
          "en": "Only 4.7 kg for 286 Wh and 600 W, sub-10 ms UPS and expandable to 858 Wh: perfect for the tent or as router backup.",
          "de": "Nur 4,7 kg für 286 Wh und 600 W, USV unter 10 ms und erweiterbar auf 858 Wh: perfekt fürs Zelt oder als Router-Absicherung.",
          "es": "Solo 4,7 kg para 286 Wh y 600 W, SAI en menos de 10 ms y ampliable a 858 Wh: perfecta para la tienda o como respaldo del router.",
          "it": "Solo 4,7 kg per 286 Wh e 600 W, UPS sotto i 10 ms ed espandibile a 858 Wh: perfetta per la tenda o come backup del router.",
          "nl": "Slechts 4,7 kg voor 286 Wh en 600 W, UPS onder 10 ms en uitbreidbaar tot 858 Wh: perfect voor de tent of als routerback-up."
        }
      }
    ]
  },
  "motorisation-portail-garage-connecte": {
    "question": {
      "fr": "Quelle est la meilleure motorisation de portail ou de porte de garage connectée en 2026 ?",
      "en": "What is the best smart gate or garage door opener in 2026?",
      "de": "Was ist der beste smarte Tor- oder Garagentorantrieb 2026?",
      "es": "¿Cuál es la mejor motorización conectada de puerta o garaje en 2026?",
      "it": "Qual è la migliore automazione connessa per cancello o garage nel 2026?",
      "nl": "Wat is de beste slimme poort- of garagedeuraandrijving in 2026?"
    },
    "picks": [
      {
        "model": "Somfy Ixengo L 3S io Pack Confort",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Kit complet pour portail battant jusqu'à 400 kg par vantail, protocole io bidirectionnel et pilotage via TaHoma.",
          "en": "Complete swing gate kit for up to 400 kg per leaf, with two-way io protocol and control through TaHoma.",
          "de": "Komplettset für Drehtore bis 400 kg pro Flügel, mit bidirektionalem io-Protokoll und Steuerung über TaHoma.",
          "es": "Kit completo para puertas batientes de hasta 400 kg por hoja, con protocolo io bidireccional y control vía TaHoma.",
          "it": "Kit completo per cancelli a battente fino a 400 kg per anta, protocollo io bidirezionale e comando via TaHoma.",
          "nl": "Complete set voor draaipoorten tot 400 kg per vleugel, met bidirectioneel io-protocol en bediening via TaHoma."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "Rend connecté un moteur de garage existant, avec capteur d'ouverture et compatibilité HomeKit, Alexa et Google.",
          "en": "Makes an existing garage opener smart, with a door sensor and HomeKit, Alexa and Google support.",
          "de": "Macht einen vorhandenen Garagentorantrieb smart, mit Torsensor sowie HomeKit, Alexa und Google.",
          "es": "Hace inteligente un motor de garaje existente, con sensor de apertura y compatibilidad HomeKit, Alexa y Google.",
          "it": "Rende smart un motore da garage esistente, con sensore di apertura e compatibilità HomeKit, Alexa e Google.",
          "nl": "Maakt een bestaande garagedeuraandrijving slim, met deursensor en ondersteuning voor HomeKit, Alexa en Google."
        }
      },
      {
        "model": "Hörmann SupraMatic E Serie 4",
        "role": {
          "fr": "Idéal pour porte de garage",
          "en": "Best for garage doors",
          "de": "Ideal für Garagentore",
          "es": "Ideal para puerta de garaje",
          "it": "Ideale per porta da garage",
          "nl": "Ideaal voor garagedeuren"
        },
        "why": {
          "fr": "Moteur pour porte sectionnelle avec Bluetooth intégré : pilotage via l'app BlueSecur sans box.",
          "en": "Sectional door operator with built-in Bluetooth: control from the BlueSecur app without a hub.",
          "de": "Antrieb für Sektionaltore mit integriertem Bluetooth: Bedienung per BlueSecur-App ohne Zentrale.",
          "es": "Motor para puerta seccional con Bluetooth integrado: control desde la app BlueSecur sin centralita.",
          "it": "Motore per porte sezionali con Bluetooth integrato: comando dall'app BlueSecur senza hub.",
          "nl": "Aandrijving voor sectionaaldeuren met ingebouwde bluetooth: bediening via de BlueSecur-app zonder hub."
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
      "nl": "Wat is de beste slimme aromadiffuser in 2026?"
    },
    "picks": [
      {
        "model": "ASAKUKI Smart Wi-Fi Essential Oil Diffuser 500ml",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore in assoluto",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Réservoir de 500 ml, programmation complète via Tuya Smart et commande vocale Alexa et Google Home.",
          "en": "A 500 ml tank, full scheduling via Tuya Smart and Alexa and Google Home voice control.",
          "de": "500-ml-Tank, umfassende Zeitpläne über Tuya Smart und Sprachsteuerung per Alexa und Google Home.",
          "es": "Depósito de 500 ml, programación completa con Tuya Smart y control por voz con Alexa y Google Home.",
          "it": "Serbatoio da 500 ml, programmazione completa con Tuya Smart e comando vocale con Alexa e Google Home.",
          "nl": "Reservoir van 500 ml, uitgebreide planning via Tuya Smart en spraakbediening met Alexa en Google Home."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Entrée de gamme mais complet : 400 ml, appli Smart Life, Alexa, Google Home et minuterie.",
          "en": "Entry level yet complete: 400 ml, Smart Life app, Alexa, Google Home and a timer.",
          "de": "Einstiegsmodell mit allem Nötigen: 400 ml, Smart-Life-App, Alexa, Google Home und Timer.",
          "es": "Gama de entrada pero completo: 400 ml, app Smart Life, Alexa, Google Home y temporizador.",
          "it": "Fascia d'ingresso ma completo: 400 ml, app Smart Life, Alexa, Google Home e timer.",
          "nl": "Instapmodel maar compleet: 400 ml, Smart Life-app, Alexa, Google Home en timer."
        }
      },
      {
        "model": "Aromatherapy Associates Atomiser Connect",
        "role": {
          "fr": "Meilleur nébuliseur connecté",
          "en": "Best smart nebulizer",
          "de": "Bester smarter Vernebler",
          "es": "Mejor nebulizador conectado",
          "it": "Miglior nebulizzatore connesso",
          "nl": "Beste slimme vernevelaar"
        },
        "why": {
          "fr": "Diffusion d'huiles pures sans eau, double tête pour deux mélanges et programmation par appli Bluetooth.",
          "en": "Waterless pure-oil diffusion, dual pods for two blends and scheduling via a Bluetooth app.",
          "de": "Reine Öle ohne Wasser, zwei Diffusionsköpfe für zwei Mischungen und Zeitpläne per Bluetooth-App.",
          "es": "Difusión de aceites puros sin agua, doble cabezal para dos mezclas y programación por app Bluetooth.",
          "it": "Diffusione di oli puri senz'acqua, doppia testina per due miscele e programmazione via app Bluetooth.",
          "nl": "Pure olie zonder water, twee verstuiverkoppen voor twee mengsels en planning via een Bluetooth-app."
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
      "nl": "Wat is de beste slimme kluis in 2026?"
    },
    "picks": [
      {
        "model": "Burg-Wächter Combi-Line CL 20 E FS",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Empreinte digitale, certification effraction EN 14450 S2 et 30 minutes de protection incendie pour le papier (LFS 30 P).",
          "en": "Fingerprint access, EN 14450 S2 burglary certification and 30 minutes of fire protection for paper (LFS 30 P).",
          "de": "Fingerabdrucköffnung, Einbruchschutz nach EN 14450 S2 und 30 Minuten Feuerschutz für Papier (LFS 30 P).",
          "es": "Apertura por huella, certificación antirrobo EN 14450 S2 y 30 minutos de protección contra incendios para papel (LFS 30 P).",
          "it": "Apertura a impronta, certificazione antieffrazione EN 14450 S2 e 30 minuti di protezione antincendio per la carta (LFS 30 P).",
          "nl": "Opening met vingerafdruk, inbraakcertificering EN 14450 S2 en 30 minuten brandbescherming voor papier (LFS 30 P)."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Petit coffre de 21 litres avec code, empreinte et clé de secours, à visser au mur ou au sol.",
          "en": "Compact 21-litre safe with keypad, fingerprint and override key, ready to bolt to a wall or floor.",
          "de": "Kompakter 21-Liter-Tresor mit Code, Fingerabdruck und Notschlüssel, zum Verschrauben an Wand oder Boden.",
          "es": "Caja compacta de 21 litros con código, huella y llave de emergencia, lista para atornillar a pared o suelo.",
          "it": "Cassaforte compatta da 21 litri con codice, impronta e chiave di emergenza, da avvitare a muro o pavimento.",
          "nl": "Compacte kluis van 21 liter met code, vingerafdruk en noodsleutel, om aan muur of vloer vast te schroeven."
        }
      },
      {
        "model": "Yale Smart Safe YSS/250/EB1",
        "role": {
          "fr": "Idéal pour les alertes smartphone",
          "en": "Best for smartphone alerts",
          "de": "Ideal für Smartphone-Benachrichtigungen",
          "es": "Ideal para alertas en el móvil",
          "it": "Ideale per le notifiche sullo smartphone",
          "nl": "Ideaal voor smartphonemeldingen"
        },
        "why": {
          "fr": "Application Yale Home avec notification à chaque ouverture, codes temporaires et accès à distance via le pont Wi-Fi.",
          "en": "Yale Home app with a notification at every opening, temporary codes and remote access via the Wi-Fi bridge.",
          "de": "Yale-Home-App mit Benachrichtigung bei jeder Öffnung, temporären Codes und Fernzugriff über die WLAN-Bridge.",
          "es": "App Yale Home con aviso en cada apertura, códigos temporales y acceso remoto mediante el puente wifi.",
          "it": "App Yale Home con notifica a ogni apertura, codici temporanei e accesso remoto tramite il bridge Wi-Fi.",
          "nl": "Yale Home-app met melding bij elke opening, tijdelijke codes en toegang op afstand via de wifi-bridge."
        }
      }
    ]
  },
  "lave-linge-connecte-guide": {
    "question": {
      "fr": "Quel est le meilleur lave-linge connecté en 2026 ?",
      "en": "What is the best connected washing machine in 2026?",
      "de": "Welche ist die beste vernetzte Waschmaschine 2026?",
      "es": "¿Cuál es la mejor lavadora conectada en 2026?",
      "it": "Qual è la migliore lavatrice connessa nel 2026?",
      "nl": "Wat is de beste slimme wasmachine in 2026?"
    },
    "picks": [
      {
        "model": "Bosch Serie 8 WGB256A40",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore in assoluto",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "10 kg, classe A, essorage 1 600 tr/min, dosage automatique i-DOS et application Home Connect complète.",
          "en": "10 kg, class A, 1,600 rpm spin, i-DOS automatic dosing and a full-featured Home Connect app.",
          "de": "10 kg, Klasse A, 1.600 U/min, automatische i-DOS-Dosierung und umfassende Home-Connect-App.",
          "es": "10 kg, clase A, centrifugado a 1.600 rpm, dosificación automática i-DOS y app Home Connect completa.",
          "it": "10 kg, classe A, centrifuga a 1.600 giri, dosaggio automatico i-DOS e app Home Connect completa.",
          "nl": "10 kg, klasse A, 1.600 tpm, automatische i-DOS-dosering en een uitgebreide Home Connect-app."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "10 kg connectés en classe A avec l'application hOn, un moteur Direct Motion silencieux et un programme vapeur Refresh.",
          "en": "A connected 10 kg class A machine with the hOn app, a quiet Direct Motion motor and a Refresh steam programme.",
          "de": "Vernetzte 10 kg in Klasse A mit hOn-App, leisem Direct-Motion-Motor und Dampfprogramm Refresh.",
          "es": "10 kg conectados en clase A con la app hOn, motor Direct Motion silencioso y programa de vapor Refresh.",
          "it": "10 kg connessi in classe A con app hOn, motore Direct Motion silenzioso e programma a vapore Refresh.",
          "nl": "Slimme 10 kg in klasse A met hOn-app, stille Direct Motion-motor en stoomprogramma Refresh."
        }
      },
      {
        "model": "LG W4WR70E6Y",
        "role": {
          "fr": "Meilleur lave-linge séchant",
          "en": "Best washer-dryer",
          "de": "Bester Waschtrockner",
          "es": "Mejor lavasecadora",
          "it": "Migliore lavasciuga",
          "nl": "Beste was-droogcombinatie"
        },
        "why": {
          "fr": "Lave 11 kg et sèche 6 kg dans un seul emplacement, avec moteur AI DD, vapeur et application LG ThinQ.",
          "en": "Washes 11 kg and dries 6 kg in a single footprint, with an AI DD motor, steam and the LG ThinQ app.",
          "de": "Wäscht 11 kg und trocknet 6 kg auf einer Stellfläche, mit AI-DD-Antrieb, Dampf und LG-ThinQ-App.",
          "es": "Lava 11 kg y seca 6 kg en un solo hueco, con motor AI DD, vapor y app LG ThinQ.",
          "it": "Lava 11 kg e asciuga 6 kg in un solo ingombro, con motore AI DD, vapore e app LG ThinQ.",
          "nl": "Wast 11 kg en droogt 6 kg op één plek, met AI DD-motor, stoom en de LG ThinQ-app."
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
      "nl": "Wat is de beste slimme lichtschakelaar in 2026?"
    },
    "picks": [
      {
        "model": "Aqara Light Switch H2 EU",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore in assoluto",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Fonctionne avec ou sans neutre, compatible Zigbee et Matter over Thread, et ouvert à Apple Home, Google Home, Alexa et Home Assistant.",
          "en": "Works with or without a neutral, supports Zigbee and Matter over Thread, and joins Apple Home, Google Home, Alexa and Home Assistant.",
          "de": "Funktioniert mit und ohne Neutralleiter, unterstützt Zigbee und Matter over Thread und passt zu Apple Home, Google Home, Alexa und Home Assistant.",
          "es": "Funciona con o sin neutro, admite Zigbee y Matter over Thread y se integra en Apple Home, Google Home, Alexa y Home Assistant.",
          "it": "Funziona con o senza neutro, supporta Zigbee e Matter over Thread e si integra con Apple Home, Google Home, Alexa e Home Assistant.",
          "nl": "Werkt met of zonder nuldraad, ondersteunt Zigbee en Matter over Thread en werkt met Apple Home, Google Home, Alexa en Home Assistant."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "Module 16 A caché derrière vos interrupteurs actuels, avec mesure de consommation, Wi-Fi, Zigbee et Matter sans passerelle (neutre requis).",
          "en": "A 16 A relay hidden behind your existing switches, with energy monitoring, Wi-Fi, Zigbee and Matter and no hub needed (neutral required).",
          "de": "16-A-Relais hinter Ihren vorhandenen Schaltern, mit Verbrauchsmessung, WLAN, Zigbee und Matter ohne Bridge (Neutralleiter nötig).",
          "es": "Relé de 16 A oculto tras tus interruptores actuales, con medición de consumo, Wi-Fi, Zigbee y Matter sin pasarela (requiere neutro).",
          "it": "Relè da 16 A nascosto dietro gli interruttori esistenti, con misura dei consumi, Wi-Fi, Zigbee e Matter senza gateway (neutro richiesto).",
          "nl": "16 A-relais achter je bestaande schakelaars, met verbruiksmeting, wifi, Zigbee en Matter zonder hub (nuldraad vereist)."
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
          "nl": "Ideaal voor slimme lampen"
        },
        "why": {
          "fr": "Commande sur pile sans câblage, avec quatre boutons de scènes et une molette de variation pour piloter vos ampoules Hue.",
          "en": "Battery-powered control with no wiring, four scene buttons and a dimming dial to run your Hue bulbs.",
          "de": "Batteriebetriebener Schalter ohne Verkabelung, mit vier Szenentasten und Drehrad zum Dimmen Ihrer Hue-Lampen.",
          "es": "Mando a pilas sin cableado, con cuatro botones de escenas y una rueda de regulación para controlar tus bombillas Hue.",
          "it": "Comando a batteria senza cablaggio, con quattro tasti per le scene e una ghiera per regolare le lampadine Hue.",
          "nl": "Bediening op batterij zonder bekabeling, met vier scèneknoppen en een draaiknop om je Hue-lampen te dimmen."
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
      "nl": "Wat is de beste smart-home-hub in 2026?"
    },
    "picks": [
      {
        "model": "Homey Pro (Early 2023)",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta assoluta",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Zigbee, Z-Wave, Thread, Matter, infrarouge et 433 MHz intégrés, automatisations locales et application simple.",
          "en": "Built-in Zigbee, Z-Wave, Thread, Matter, infrared and 433 MHz, local automations and a simple app.",
          "de": "Zigbee, Z-Wave, Thread, Matter, Infrarot und 433 MHz integriert, lokale Automationen und einfache App.",
          "es": "Zigbee, Z-Wave, Thread, Matter, infrarrojos y 433 MHz integrados, automatizaciones locales y app sencilla.",
          "it": "Zigbee, Z-Wave, Thread, Matter, infrarossi e 433 MHz integrati, automazioni locali e app semplice.",
          "nl": "Zigbee, Z-Wave, Thread, Matter, infrarood en 433 MHz ingebouwd, lokale automatiseringen en een eenvoudige app."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Contrôleur Matter, routeur Thread, Zigbee, infrarouge 360° et PoE, avec automatisations exécutées en local.",
          "en": "Matter controller, Thread border router, Zigbee, 360° infrared and PoE, with locally executed automations.",
          "de": "Matter-Controller, Thread-Border-Router, Zigbee, 360°-Infrarot und PoE, mit lokal ausgeführten Automationen.",
          "es": "Controlador Matter, router de borde Thread, Zigbee, infrarrojos de 360° y PoE, con automatizaciones en local.",
          "it": "Controller Matter, border router Thread, Zigbee, infrarossi a 360° e PoE, con automazioni eseguite in locale.",
          "nl": "Matter-controller, Thread-border-router, Zigbee, 360°-infrarood en PoE, met lokaal uitgevoerde automatiseringen."
        }
      },
      {
        "model": "Home Assistant Green",
        "role": {
          "fr": "Idéal pour les passionnés",
          "en": "Best for power users",
          "de": "Ideal für Enthusiasten",
          "es": "Ideal para usuarios avanzados",
          "it": "Ideale per utenti esperti",
          "nl": "Ideaal voor gevorderden"
        },
        "why": {
          "fr": "Logiciel libre 100 % local, plus de 2 000 intégrations ; radios Zigbee/Thread et Z-Wave via adaptateurs ZBT-2 et ZWA-2.",
          "en": "Fully local open-source software with 2,000+ integrations; Zigbee/Thread and Z-Wave via ZBT-2 and ZWA-2 adapters.",
          "de": "Vollständig lokale Open-Source-Software mit über 2.000 Integrationen; Zigbee/Thread und Z-Wave per ZBT-2 und ZWA-2.",
          "es": "Software libre totalmente local con más de 2.000 integraciones; Zigbee/Thread y Z-Wave con adaptadores ZBT-2 y ZWA-2.",
          "it": "Software open source tutto locale con oltre 2.000 integrazioni; Zigbee/Thread e Z-Wave con adattatori ZBT-2 e ZWA-2.",
          "nl": "Volledig lokale opensourcesoftware met 2.000+ integraties; Zigbee/Thread en Z-Wave via ZBT-2- en ZWA-2-adapters."
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
      "nl": "Wat is de beste buitensensor of buitensirene voor de tuin in 2026?"
    },
    "picks": [
      {
        "model": "Ajax MotionProtect Outdoor",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Double capteur PIR, portée réglable de 3 à 15 m et immunité aux animaux jusqu'à 80 cm pour limiter les fausses alarmes.",
          "en": "Dual PIR sensors, 3 to 15 m adjustable range and pet immunity up to 80 cm to keep false alarms down.",
          "de": "Doppel-PIR, einstellbare Reichweite von 3 bis 15 m und Haustierimmunität bis 80 cm gegen Fehlalarme.",
          "es": "Doble sensor PIR, alcance ajustable de 3 a 15 m e inmunidad a mascotas hasta 80 cm para evitar falsas alarmas.",
          "it": "Doppio sensore PIR, portata regolabile da 3 a 15 m e immunità agli animali fino a 80 cm contro i falsi allarmi.",
          "nl": "Dubbele PIR-sensor, instelbaar bereik van 3 tot 15 m en huisdierimmuniteit tot 80 cm tegen vals alarm."
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
          "nl": "Ideaal voor Ring-gebruikers"
        },
        "why": {
          "fr": "Sirène IP66 de plus de 100 dB avec stroboscope, volume réglable et recharge solaire possible via le Ring Solar Panel.",
          "en": "IP66 siren rated over 100 dB with a strobe, adjustable volume and optional solar charging via the Ring Solar Panel.",
          "de": "IP66-Sirene mit über 100 dB, Stroboskop, einstellbarer Lautstärke und optionaler Solarladung über das Ring Solar Panel.",
          "es": "Sirena IP66 de más de 100 dB con estroboscópica, volumen ajustable y recarga solar opcional con el Ring Solar Panel.",
          "it": "Sirena IP66 oltre i 100 dB con strobo, volume regolabile e ricarica solare opzionale tramite il Ring Solar Panel.",
          "nl": "IP66-sirene van meer dan 100 dB met stroboscoop, instelbaar volume en optioneel zonneladen via het Ring Solar Panel."
        }
      },
      {
        "model": "Philips Hue Outdoor Motion Sensor",
        "role": {
          "fr": "Meilleur pour l'éclairage automatique",
          "en": "Best for automatic lighting",
          "de": "Beste Wahl für automatisches Licht",
          "es": "Mejor para iluminación automática",
          "it": "Migliore per l'illuminazione automatica",
          "nl": "Beste voor automatische verlichting"
        },
        "why": {
          "fr": "Allume vos lampes Hue extérieures dès un passage : 12 m sur 160°, IP54, capteur de luminosité. Un complément, pas une alarme.",
          "en": "Turns on your outdoor Hue lights as someone passes: 12 m over 160°, IP54, daylight sensor. A complement, not an alarm.",
          "de": "Schaltet Hue-Außenleuchten bei Bewegung ein: 12 m auf 160°, IP54, Tageslichtsensor. Eine Ergänzung, keine Alarmanlage.",
          "es": "Enciende tus luces Hue exteriores al paso: 12 m en 160°, IP54, sensor de luz. Un complemento, no una alarma.",
          "it": "Accende le luci Hue da esterno al passaggio: 12 m su 160°, IP54, sensore di luminosità. Un complemento, non un allarme.",
          "nl": "Zet je Hue-buitenlampen aan bij beweging: 12 m over 160°, IP54, daglichtsensor. Een aanvulling, geen alarm."
        }
      }
    ]
  },
  "rideau-motorise-connecte-guide": {
    "question": {
      "fr": "Quel est le meilleur rideau motorisé connecté en 2026 ?",
      "en": "What is the best smart motorised curtain in 2026?",
      "de": "Welcher ist der beste smarte Vorhangantrieb 2026?",
      "es": "¿Cuál es la mejor cortina motorizada inteligente en 2026?",
      "it": "Qual è la migliore tenda motorizzata smart nel 2026?",
      "nl": "Wat is het beste slimme gemotoriseerde gordijn in 2026?"
    },
    "picks": [
      {
        "model": "SwitchBot Curtain 3",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Versions tringle, rail en U et rail en I, jusqu'à 15 kg, mode silencieux et Matter via hub SwitchBot : le robot le plus polyvalent.",
          "en": "Rod, U-rail and I-rail versions, up to 15 kg, quiet mode and Matter via a SwitchBot hub: the most versatile curtain robot.",
          "de": "Versionen für Stange, U- und I-Schiene, bis 15 kg, Leisemodus und Matter über SwitchBot Hub: der vielseitigste Vorhangroboter.",
          "es": "Versiones para barra, riel en U y riel en I, hasta 15 kg, modo silencioso y Matter con hub SwitchBot: el robot más versátil.",
          "it": "Versioni per bastone, binario a U e a I, fino a 15 kg, modalità silenziosa e Matter con hub SwitchBot: il robot più versatile.",
          "nl": "Versies voor roede, U-rail en I-rail, tot 15 kg, stille modus en Matter via SwitchBot-hub: de veelzijdigste gordijnrobot."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Batterie de 6 000 mAh jusqu'à 12 mois, capteur de luminosité intégré et Zigbee 3.0 : idéal si vous avez déjà un hub Aqara.",
          "en": "6,000 mAh battery lasting up to 12 months, built-in light sensor and Zigbee 3.0: ideal if you already own an Aqara hub.",
          "de": "6.000-mAh-Akku mit bis zu 12 Monaten Laufzeit, Lichtsensor und Zigbee 3.0: ideal, wenn Sie bereits einen Aqara Hub haben.",
          "es": "Batería de 6.000 mAh de hasta 12 meses, sensor de luz integrado y Zigbee 3.0: ideal si ya tienes un hub Aqara.",
          "it": "Batteria da 6.000 mAh fino a 12 mesi, sensore di luce integrato e Zigbee 3.0: ideale se hai già un hub Aqara.",
          "nl": "Batterij van 6.000 mAh tot 12 maanden, ingebouwde lichtsensor en Zigbee 3.0: ideaal als u al een Aqara-hub hebt."
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
          "nl": "Ideaal voor rolgordijnen met Matter"
        },
        "why": {
          "fr": "Moteur à glisser dans le tube d'un store existant, Thread et Matter natifs, jusqu'à un an d'autonomie et ombrage adaptatif sur iPhone.",
          "en": "A motor that slides into an existing blind's tube, native Thread and Matter, up to a year of battery life and Adaptive Shading on iPhone.",
          "de": "Motor für die Welle eines vorhandenen Rollos, Thread und Matter nativ, bis zu ein Jahr Akkulaufzeit und adaptive Beschattung am iPhone.",
          "es": "Motor que se introduce en el tubo de un estor existente, Thread y Matter nativos, hasta un año de batería y sombreado adaptativo en iPhone.",
          "it": "Motore da inserire nel tubo di una tenda esistente, Thread e Matter nativi, fino a un anno di autonomia e ombreggiatura adattiva su iPhone.",
          "nl": "Motor die in de buis van een bestaand rolgordijn schuift, native Thread en Matter, tot een jaar batterijduur en adaptieve zonwering op iPhone."
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
      "it": "Qual è la migliore batteria domestica per pannelli solari nel 2026?",
      "nl": "Wat is de beste thuisbatterij voor zonnepanelen in 2026?"
    },
    "picks": [
      {
        "model": "Anker SOLIX Solarbank 3 E2700 Pro",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Batterie plug-in tout-en-un de 2,7 kWh avec entrées solaires, pilotage par compteur intelligent et extensions au-delà de 10 kWh.",
          "en": "All-in-one 2.7 kWh plug-in battery with solar inputs, smart meter control and expansion beyond 10 kWh.",
          "de": "All-in-one-Steckerspeicher mit 2,7 kWh, Solareingängen, Smart-Meter-Steuerung und Erweiterung über 10 kWh.",
          "es": "Batería enchufable todo en uno de 2,7 kWh con entradas solares, control por contador inteligente y ampliación a más de 10 kWh.",
          "it": "Batteria plug-in tutto in uno da 2,7 kWh con ingressi solari, controllo da contatore intelligente ed espansione oltre 10 kWh.",
          "nl": "Alles-in-één plug-in batterij van 2,7 kWh met zonne-ingangen, aansturing via slimme meter en uitbreiding tot boven 10 kWh."
        }
      },
      {
        "model": "Marstek Venus E 3.0",
        "role": {
          "fr": "Meilleur rapport capacité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "5,12 kWh en LiFePO4 dans un seul boîtier couplé en AC, compatible avec toute installation et dotée d'une prise de secours.",
          "en": "5.12 kWh of LiFePO4 in a single AC-coupled unit that works with any solar system and includes a backup socket.",
          "de": "5,12 kWh LiFePO4 in einem AC-gekoppelten Gerät, passend zu jeder Anlage und mit Notstromsteckdose.",
          "es": "5,12 kWh LiFePO4 en un solo equipo acoplado en AC, compatible con cualquier instalación y con enchufe de emergencia.",
          "it": "5,12 kWh LiFePO4 in un'unica unità accoppiata in AC, compatibile con qualsiasi impianto e con presa di emergenza.",
          "nl": "5,12 kWh LiFePO4 in één AC-gekoppeld toestel, geschikt voor elke installatie en met noodstroomstopcontact."
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
          "nl": "Ideaal voor noodstroom in het hele huis"
        },
        "why": {
          "fr": "13,5 kWh utilisables, onduleur solaire intégré et jusqu'à 11,04 kW de puissance, posée par un installateur certifié.",
          "en": "13.5 kWh usable, built-in solar inverter and up to 11.04 kW of output, fitted by a certified installer.",
          "de": "13,5 kWh nutzbar, integrierter Solarwechselrichter und bis zu 11,04 kW Leistung, montiert vom zertifizierten Installateur.",
          "es": "13,5 kWh útiles, inversor solar integrado y hasta 11,04 kW de potencia, instalada por un instalador certificado.",
          "it": "13,5 kWh utilizzabili, inverter solare integrato e fino a 11,04 kW di potenza, installata da un installatore certificato.",
          "nl": "13,5 kWh bruikbaar, ingebouwde zonne-omvormer en tot 11,04 kW vermogen, geplaatst door een gecertificeerde installateur."
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
      "nl": "Wat is de beste slimme luchtbevochtiger in 2026?"
    },
    "picks": [
      {
        "model": "BONECO H700 SMART",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Humidification par évaporation sans poussière blanche, purification HEPA intégrée et pilotage Wi-Fi pour les grandes pièces.",
          "en": "Evaporative humidification with no white dust, built-in HEPA purification and Wi-Fi control for large rooms.",
          "de": "Verdunstung ohne weißen Staub, integrierte HEPA-Luftreinigung und WLAN-Steuerung für große Räume.",
          "es": "Humidificación evaporativa sin polvo blanco, purificación HEPA integrada y control por wifi para estancias grandes.",
          "it": "Umidificazione evaporativa senza polvere bianca, purificazione HEPA integrata e controllo Wi-Fi per ambienti ampi.",
          "nl": "Verdampingsbevochtiging zonder wit stof, ingebouwde HEPA-zuivering en wifibediening voor grote ruimtes."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Ultrasons 6 L à remplissage par le haut, mode automatique, app VeSync et compatibilité Alexa et Google à prix d'entrée de gamme.",
          "en": "6 L top-fill ultrasonic unit with auto mode, VeSync app and Alexa and Google support at an entry-level tier.",
          "de": "6-Liter-Ultraschallgerät mit Befüllung von oben, Automatik, VeSync-App sowie Alexa und Google im Einstiegssegment.",
          "es": "Ultrasónico de 6 L con llenado superior, modo automático, app VeSync y compatibilidad con Alexa y Google en gama de entrada.",
          "it": "Ultrasuoni da 6 L con riempimento dall'alto, modalità auto, app VeSync e compatibilità Alexa e Google in fascia d'ingresso.",
          "nl": "Ultrasone 6 L-bevochtiger met vullen via de bovenkant, automatische stand, VeSync-app en Alexa en Google, instapsegment."
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
          "nl": "Ideaal bij allergieën"
        },
        "why": {
          "fr": "Purificateur HEPA H13, humidificateur par évaporation avec eau traitée aux UV-C et ventilateur réunis dans un seul appareil connecté.",
          "en": "HEPA H13 purifier, evaporative humidifier with UV-C treated water and fan combined in one connected device.",
          "de": "HEPA-H13-Luftreiniger, Verdunster mit UV-C-behandeltem Wasser und Ventilator in einem vernetzten Gerät.",
          "es": "Purificador HEPA H13, humidificador evaporativo con agua tratada por UV-C y ventilador en un solo aparato conectado.",
          "it": "Purificatore HEPA H13, umidificatore evaporativo con acqua trattata UV-C e ventilatore in un unico apparecchio connesso.",
          "nl": "HEPA H13-luchtreiniger, verdampingsbevochtiger met UV-C-behandeld water en ventilator in één verbonden toestel."
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
      "nl": "Wat is de beste slimme bewegingssensor in 2026?"
    },
    "picks": [
      {
        "model": "Aqara Motion and Light Sensor P2",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción global",
          "it": "Migliore scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Capteur PIR 170° compatible Matter over Thread, avec capteur de luminosité et jusqu'à deux ans d'autonomie annoncée.",
          "en": "A 170° PIR sensor on Matter over Thread, with a light sensor and up to two years of rated battery life.",
          "de": "PIR-Sensor mit 170°, Matter over Thread, Helligkeitssensor und bis zu zwei Jahren angegebener Batterielaufzeit.",
          "es": "Sensor PIR de 170° con Matter over Thread, sensor de luz y hasta dos años de autonomía anunciada.",
          "it": "Sensore PIR a 170° con Matter over Thread, sensore di luce e fino a due anni di autonomia dichiarata.",
          "nl": "PIR-sensor van 170° met Matter over Thread, lichtsensor en tot twee jaar opgegeven batterijduur."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Entrée de gamme, Matter over Thread, IP67 pour l'intérieur comme l'extérieur, piles AAA rechargeables.",
          "en": "Entry-level, Matter over Thread, IP67 for indoor and outdoor use, rechargeable AAA batteries.",
          "de": "Einstiegsklasse, Matter over Thread, IP67 für drinnen und draußen, wiederaufladbare AAA-Akkus.",
          "es": "Gama de entrada, Matter over Thread, IP67 para interior y exterior, pilas AAA recargables.",
          "it": "Fascia d'ingresso, Matter over Thread, IP67 per interno ed esterno, pile AAA ricaricabili.",
          "nl": "Instapklasse, Matter over Thread, IP67 voor binnen en buiten, oplaadbare AAA-batterijen."
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
          "nl": "Beste aanwezigheidssensor"
        },
        "why": {
          "fr": "Radar mmWave qui détecte une personne immobile, jusqu'à 30 zones et cinq personnes, sans pile à changer.",
          "en": "mmWave radar that detects people sitting still, with up to 30 zones and five people, and no batteries to change.",
          "de": "mmWave-Radar erkennt auch ruhende Personen, bis zu 30 Zonen und fünf Personen, kein Batteriewechsel.",
          "es": "Radar mmWave que detecta a personas inmóviles, hasta 30 zonas y cinco personas, sin pilas que cambiar.",
          "it": "Radar mmWave che rileva anche persone immobili, fino a 30 zone e cinque persone, senza pile da cambiare.",
          "nl": "mmWave-radar die ook stilzittende personen ziet, tot 30 zones en vijf personen, geen batterijen te vervangen."
        }
      }
    ]
  },
  "compteur-energie-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur compteur d'énergie connecté en 2026 ?",
      "en": "What is the best home energy monitor in 2026?",
      "de": "Welcher ist der beste Energiemonitor 2026?",
      "es": "¿Cuál es el mejor medidor de energía conectado en 2026?",
      "it": "Qual è il miglior misuratore di energia connesso nel 2026?",
      "nl": "Wat is de beste energiemonitor in 2026?"
    },
    "picks": [
      {
        "model": "Shelly Pro 3EM",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Trois pinces, triphasé, mesure bidirectionnelle pour le solaire et intégration locale à Home Assistant.",
          "en": "Three clamps, three-phase, two-way metering for solar and local Home Assistant integration.",
          "de": "Drei Klemmen, dreiphasig, bidirektionale Messung für PV und lokale Home-Assistant-Integration.",
          "es": "Tres pinzas, trifásico, medición bidireccional para solar e integración local con Home Assistant.",
          "it": "Tre pinze, trifase, misura bidirezionale per il fotovoltaico e integrazione locale con Home Assistant.",
          "nl": "Drie stroomtangen, driefase, meting in twee richtingen voor zonnepanelen en lokale Home Assistant-integratie."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Module compact à deux canaux pour le monophasé : consommation générale et un second circuit, en Wi-Fi.",
          "en": "Compact two-channel single-phase monitor: whole-home use plus a second circuit, over Wi-Fi.",
          "de": "Kompakter Zweikanal-Monitor für einphasige Anschlüsse: Gesamtverbrauch plus ein zweiter Stromkreis per WLAN.",
          "es": "Módulo compacto de dos canales para monofásico: consumo general y un segundo circuito, por Wi-Fi.",
          "it": "Modulo compatto a due canali per il monofase: consumo generale e un secondo circuito, via Wi-Fi.",
          "nl": "Compacte tweekanaals-module voor eenfase: totaalverbruik plus een tweede groep, via wifi."
        }
      },
      {
        "model": "Lixee ZLinky_TIC",
        "role": {
          "fr": "Idéal avec un Linky",
          "en": "Best for Linky meters",
          "de": "Ideal für Linky-Zähler",
          "es": "Ideal para contadores Linky",
          "it": "Ideale per contatori Linky",
          "nl": "Ideaal voor Linky-meters"
        },
        "why": {
          "fr": "Se branche sur la prise TIC du Linky, alimenté par le compteur, en Zigbee 3.0 et sans électricien.",
          "en": "Plugs into the Linky TIC terminals, powered by the meter, Zigbee 3.0, no electrician needed.",
          "de": "Wird an die TIC-Klemmen des Linky gesteckt, vom Zähler versorgt, Zigbee 3.0, ohne Elektriker.",
          "es": "Se conecta a la toma TIC del Linky, se alimenta del contador, Zigbee 3.0 y sin electricista.",
          "it": "Si collega alla presa TIC del Linky, alimentato dal contatore, Zigbee 3.0 e senza elettricista.",
          "nl": "Sluit aan op de TIC-klemmen van de Linky, gevoed door de meter, Zigbee 3.0, zonder installateur."
        }
      }
    ]
  },
  "climatiseur-mobile-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur climatiseur mobile connecté en 2026 ?",
      "en": "What is the best smart portable air conditioner in 2026?",
      "de": "Welches ist das beste smarte mobile Klimagerät 2026?",
      "es": "¿Cuál es el mejor aire acondicionado portátil conectado en 2026?",
      "it": "Qual è il miglior condizionatore portatile connesso nel 2026?",
      "nl": "Wat is de beste slimme mobiele airco in 2026?"
    },
    "picks": [
      {
        "model": "Midea PortaSplit",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste totaalkeuze"
        },
        "why": {
          "fr": "Split mobile 3,5 kW installable sans frigoriste : compresseur dehors, 39 dB(A) à l'intérieur en mode silence, classe A++ et chauffage.",
          "en": "A 3.5 kW portable split you install yourself: compressor outside, 39 dB(A) indoors in silent mode, A++ class and heating too.",
          "de": "Mobiles 3,5-kW-Split ohne Kältetechniker: Kompressor draußen, innen 39 dB(A) im Silent-Modus, Klasse A++ und Heizfunktion.",
          "es": "Split portátil de 3,5 kW sin frigorista: compresor fuera, 39 dB(A) dentro en modo silencio, clase A++ y también calefacción.",
          "it": "Split portatile da 3,5 kW senza frigorista: compressore all'esterno, 39 dB(A) in casa in modalità silenziosa, classe A++ e riscaldamento.",
          "nl": "Mobiele split van 3,5 kW zonder koeltechnicus: compressor buiten, binnen 39 dB(A) in stille stand, klasse A++ en ook verwarming."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "Monobloc 2,6 kW classe A (EER 2,6) pour 31 m², discret pour sa catégorie, avec app, Alexa, Google Assistant et capteur Follow Me.",
          "en": "A 2.6 kW class A monoblock (EER 2.6) for 31 m², quiet for its type, with app, Alexa, Google Assistant and a Follow Me sensor.",
          "de": "Monoblock mit 2,6 kW, Klasse A (EER 2,6) für 31 m², leise für seine Klasse, mit App, Alexa, Google Assistant und Follow-Me-Sensor.",
          "es": "Monobloque de 2,6 kW clase A (EER 2,6) para 31 m², discreto para su tipo, con app, Alexa, Google Assistant y sensor Follow Me.",
          "it": "Monoblocco da 2,6 kW in classe A (EER 2,6) per 31 m², silenzioso per la categoria, con app, Alexa, Google Assistant e sensore Follow Me.",
          "nl": "Monoblok van 2,6 kW, klasse A (EER 2,6) voor 31 m², stil voor zijn type, met app, Alexa, Google Assistant en Follow Me-sensor."
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
          "nl": "Ideaal voor grote ruimtes"
        },
        "why": {
          "fr": "4,1 kW (14 000 BTU) pour des pièces jusqu'à 52 m², classe A, pilotage par app Wi-Fi, mode nuit et fonction Follow Me.",
          "en": "4.1 kW (14,000 BTU) for rooms up to 52 m², class A, Wi-Fi app control, night mode and a Follow Me function.",
          "de": "4,1 kW (14.000 BTU) für Räume bis 52 m², Klasse A, Steuerung per WLAN-App, Nachtmodus und Follow-Me-Funktion.",
          "es": "4,1 kW (14.000 BTU) para estancias de hasta 52 m², clase A, control por app Wi-Fi, modo noche y función Follow Me.",
          "it": "4,1 kW (14.000 BTU) per ambienti fino a 52 m², classe A, controllo via app Wi-Fi, modalità notte e funzione Follow Me.",
          "nl": "4,1 kW (14.000 BTU) voor ruimtes tot 52 m², klasse A, bediening via wifi-app, nachtstand en Follow Me-functie."
        }
      }
    ]
  },
  "robot-piscine-comparatif": {
    "question": {
      "fr": "Quel est le meilleur robot de piscine en 2026 ?",
      "en": "What is the best pool cleaning robot in 2026?",
      "de": "Welcher ist der beste Poolroboter 2026?",
      "es": "¿Cuál es el mejor robot limpiafondos en 2026?",
      "it": "Qual è il miglior robot piscina nel 2026?",
      "nl": "Wat is de beste zwembadrobot in 2026?"
    },
    "picks": [
      {
        "model": "Dolphin S300i",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción global",
          "it": "Miglior scelta assoluta",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Fond, parois et ligne d’eau jusqu’à 12 m, sans limite de batterie, avec un filtre fin ou ultrafin retiré par le dessus.",
          "en": "Cleans floor, walls and waterline in pools up to 12 m with no battery limit, and its fine or ultra-fine filter lifts out from the top.",
          "de": "Reinigt Boden, Wände und Wasserlinie in Becken bis 12 m ohne Akkulimit; der feine oder ultrafeine Filter wird von oben entnommen.",
          "es": "Limpia fondo, paredes y línea de flotación hasta 12 m sin límite de batería, con filtro fino o ultrafino que se saca por arriba.",
          "it": "Pulisce fondo, pareti e linea d’acqua fino a 12 m senza limiti di batteria, con filtro fine o ultrafine estraibile dall’alto.",
          "nl": "Reinigt bodem, wanden en waterlijn tot 12 m zonder accubeperking, met een fijn of ultrafijn filter dat je van bovenaf uitneemt."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "L’essentiel du S300i (12 m, ligne d’eau, appli MyDolphin Plus) avec chariot de transport et filtre ultrafin inclus.",
          "en": "Most of the S300i’s features (12 m, waterline, MyDolphin Plus app) with a transport caddy and ultra-fine filter included.",
          "de": "Das Wesentliche des S300i (12 m, Wasserlinie, App MyDolphin Plus) mit Transportcaddy und Ultrafeinfilter im Lieferumfang.",
          "es": "Lo esencial del S300i (12 m, línea de flotación, app MyDolphin Plus) con carro de transporte y filtro ultrafino incluidos.",
          "it": "L’essenziale del S300i (12 m, linea d’acqua, app MyDolphin Plus) con carrello di trasporto e filtro ultrafine inclusi.",
          "nl": "Het belangrijkste van de S300i (12 m, waterlijn, app MyDolphin Plus) met transporttrolley en ultrafijn filter inbegrepen."
        }
      },
      {
        "model": "Beatbot AquaSense 2 Pro",
        "role": {
          "fr": "Meilleur sans fil",
          "en": "Best cordless",
          "de": "Bester kabelloser Roboter",
          "es": "Mejor sin cable",
          "it": "Miglior senza fili",
          "nl": "Beste snoerloze robot"
        },
        "why": {
          "fr": "Sans câble, il nettoie aussi la surface, couvre jusqu’à 360 m² et annonce jusqu’à 5 h d’autonomie sur fond et parois.",
          "en": "Cable-free, it also skims the surface, covers up to 360 m² and is rated for up to 5 hours on floor and walls.",
          "de": "Ohne Kabel, reinigt auch die Oberfläche, deckt bis 360 m² ab und ist für bis zu 5 Stunden auf Boden und Wänden angegeben.",
          "es": "Sin cable, también limpia la superficie, cubre hasta 360 m² y anuncia hasta 5 horas de autonomía en fondo y paredes.",
          "it": "Senza cavo, pulisce anche la superficie, copre fino a 360 m² e dichiara fino a 5 ore di autonomia su fondo e pareti.",
          "nl": "Zonder snoer, reinigt ook het oppervlak, dekt tot 360 m² en is opgegeven voor tot 5 uur op bodem en wanden."
        }
      }
    ]
  },
  "grill-pellet-plancha-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur barbecue connecté en 2026 ?",
      "en": "What is the best smart grill in 2026?",
      "de": "Welcher ist der beste smarte Grill 2026?",
      "es": "¿Cuál es la mejor barbacoa inteligente en 2026?",
      "it": "Qual è il miglior barbecue smart nel 2026?",
      "nl": "Wat is de beste slimme barbecue in 2026?"
    },
    "picks": [
      {
        "model": "Weber Searwood 600",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore in assoluto",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Barbecue à pellets de 80 à 315 °C qui fume et saisit, piloté en Wi-Fi et Bluetooth via Weber Connect, avec deux sondes fournies.",
          "en": "Pellet grill from 80 to 315 °C that both smokes and sears, controlled over Wi-Fi and Bluetooth via Weber Connect, with two probes included.",
          "de": "Pelletgrill von 80 bis 315 °C, der smokt und scharf angrillt, per WLAN und Bluetooth über Weber Connect steuerbar, mit zwei Fühlern.",
          "es": "Barbacoa de pellets de 80 a 315 °C que ahúma y sella, controlada por Wi-Fi y Bluetooth con Weber Connect, con dos sondas incluidas.",
          "it": "Barbecue a pellet da 80 a 315 °C che affumica e scotta, controllabile via Wi-Fi e Bluetooth con Weber Connect, con due sonde incluse.",
          "nl": "Pelletbarbecue van 80 tot 315 °C die rookt én dichtschroeit, bediend via wifi en bluetooth met Weber Connect, met twee sondes."
        }
      },
      {
        "model": "Ninja Woodfire Pro Connect XL",
        "role": {
          "fr": "Meilleur rapport qualité-prix et balcon",
          "en": "Best value and for balconies",
          "de": "Preis-Leistungs-Tipp für den Balkon",
          "es": "Mejor relación calidad-precio y balcón",
          "it": "Miglior rapporto qualità-prezzo e balcone",
          "nl": "Beste prijs-kwaliteit en voor balkons"
        },
        "why": {
          "fr": "Compact et électrique, sept fonctions dont fumoir, réglage de 65 à 260 °C via l'application et sonde intégrée.",
          "en": "Compact and electric, seven functions including smoker, 65–260 °C set from the app and a built-in probe.",
          "de": "Kompakt und elektrisch, sieben Funktionen inklusive Smoker, 65–260 °C per App einstellbar und integrierter Fühler.",
          "es": "Compacta y eléctrica, siete funciones con ahumador, de 65 a 260 °C desde la app y sonda integrada.",
          "it": "Compatto ed elettrico, sette funzioni tra cui affumicatore, da 65 a 260 °C dall'app e sonda integrata.",
          "nl": "Compact en elektrisch, zeven functies inclusief roken, 65–260 °C via de app en een ingebouwde sonde."
        }
      },
      {
        "model": "Weber Genesis EPX-335 Smart",
        "role": {
          "fr": "Meilleur barbecue gaz connecté",
          "en": "Best smart gas grill",
          "de": "Bester smarter Gasgrill",
          "es": "Mejor barbacoa de gas inteligente",
          "it": "Miglior barbecue a gas smart",
          "nl": "Beste slimme gasbarbecue"
        },
        "why": {
          "fr": "Trois brûleurs, zone de saisie puissante et thermomètre Wi-Fi avec alertes Weber Connect ; la flamme reste réglée à la main.",
          "en": "Three burners, powerful sear zone and a Wi-Fi thermometer with Weber Connect alerts; the flame is still adjusted by hand.",
          "de": "Drei Brenner, starke Sear Zone und WLAN-Thermometer mit Weber-Connect-Alarmen; die Flamme wird weiter von Hand geregelt.",
          "es": "Tres quemadores, potente zona de sellado y termómetro Wi-Fi con alertas Weber Connect; la llama se regula a mano.",
          "it": "Tre bruciatori, potente zona di scottatura e termometro Wi-Fi con avvisi Weber Connect; la fiamma si regola a mano.",
          "nl": "Drie branders, krachtige sear zone en wifi-thermometer met Weber Connect-meldingen; de vlam regelt u nog met de hand."
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
      "nl": "Wat is de beste slimme verlichting in 2026?"
    },
    "picks": [
      {
        "model": "Philips Hue White and Color Ambiance E27",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Jusqu'à 1 100 lm, millions de couleurs et l'écosystème Hue le plus complet : avec le Hue Bridge, automatisations avancées et Matter vers Apple, Google et Alexa.",
          "en": "Up to 1,100 lm, millions of colours and the most complete Hue ecosystem: with the Hue Bridge you get advanced automations and Matter for Apple, Google and Alexa.",
          "de": "Bis zu 1.100 lm, Millionen Farben und das umfassendste Hue-Ökosystem: Mit der Hue Bridge gibt es erweiterte Automationen und Matter für Apple, Google und Alexa.",
          "es": "Hasta 1100 lm, millones de colores y el ecosistema Hue más completo: con el Hue Bridge, automatizaciones avanzadas y Matter para Apple, Google y Alexa.",
          "it": "Fino a 1.100 lm, milioni di colori e l'ecosistema Hue più completo: con l'Hue Bridge, automazioni avanzate e Matter per Apple, Google e Alexa.",
          "nl": "Tot 1.100 lm, miljoenen kleuren en het meest complete Hue-ecosysteem: met de Hue Bridge krijgt u geavanceerde automatiseringen en Matter voor Apple, Google en Alexa."
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
          "nl": "Beste keuze zonder hub"
        },
        "why": {
          "fr": "Ampoule E27 couleur de 1 055 lm en WiFi direct et compatible Matter : la façon la plus simple et abordable de connecter quelques lampes sans hub.",
          "en": "A 1,055 lm colour E27 bulb on direct Wi-Fi with Matter support: the simplest, most affordable way to connect a few lamps without a hub.",
          "de": "Eine farbige E27-Lampe mit 1.055 lm, direktem WLAN und Matter: der einfachste und günstigste Weg, ein paar Leuchten ohne Hub zu vernetzen.",
          "es": "Bombilla E27 de color de 1055 lm con wifi directo y compatible con Matter: la forma más sencilla y asequible de conectar unas pocas lámparas sin hub.",
          "it": "Lampadina E27 a colori da 1.055 lm in Wi-Fi diretto e compatibile Matter: il modo più semplice ed economico per collegare qualche lampada senza hub.",
          "nl": "Een gekleurde E27-lamp van 1.055 lm met direct wifi en Matter: de eenvoudigste en voordeligste manier om een paar lampen zonder hub te verbinden."
        }
      },
      {
        "model": "Govee RGBIC LED Strip H619A",
        "role": {
          "fr": "Idéal pour l'ambiance RGB",
          "en": "Best for RGB ambience",
          "de": "Ideal für RGB-Ambiente",
          "es": "Ideal para ambiente RGB",
          "it": "Ideale per l'atmosfera RGB",
          "nl": "Ideaal voor RGB-sfeer"
        },
        "why": {
          "fr": "Bandeau RGBIC de 5 m à segments de couleurs indépendants, en WiFi et Bluetooth, compatible Alexa et Google : le plus spectaculaire pour le gaming ou la déco.",
          "en": "A 5 m RGBIC strip with independently coloured segments, Wi-Fi and Bluetooth, and Alexa and Google support: the most spectacular for gaming or decor.",
          "de": "Ein 5-m-RGBIC-Streifen mit unabhängig farbigen Segmenten, WLAN und Bluetooth sowie Alexa und Google: am spektakulärsten für Gaming oder Deko.",
          "es": "Tira RGBIC de 5 m con segmentos de color independientes, wifi y Bluetooth, compatible con Alexa y Google: la más espectacular para gaming o decoración.",
          "it": "Striscia RGBIC da 5 m con segmenti a colori indipendenti, Wi-Fi e Bluetooth, compatibile con Alexa e Google: la più spettacolare per gaming o arredo.",
          "nl": "Een RGBIC-strip van 5 m met onafhankelijk gekleurde segmenten, wifi en Bluetooth, met Alexa en Google: het meest spectaculair voor gaming of decoratie."
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
      "nl": "Wat is de beste slimme ventilator in 2026?"
    },
    "picks": [
      {
        "model": "Dyson Purifier Cool Formaldehyde TP09",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore in assoluto",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Ventilateur sans pales et purificateur à la fois : filtres HEPA H13 et charbon actif, capteurs de qualité d'air, oscillation 350° et pilotage par appli ou assistant vocal.",
          "en": "A bladeless fan and purifier in one: HEPA H13 and activated carbon filters, air quality sensors, 350° oscillation and control via app or voice assistant.",
          "de": "Flügelloser Ventilator und Luftreiniger in einem: HEPA-H13- und Aktivkohlefilter, Luftqualitätssensoren, 350° Oszillation und Steuerung per App oder Sprachassistent.",
          "es": "Ventilador sin aspas y purificador a la vez: filtros HEPA H13 y de carbón activo, sensores de calidad del aire, oscilación de 350° y control por app o asistente de voz.",
          "it": "Ventilatore senza pale e purificatore insieme: filtri HEPA H13 e a carboni attivi, sensori di qualità dell'aria, oscillazione a 350° e controllo da app o assistente vocale.",
          "nl": "Bladloze ventilator en luchtreiniger in één: HEPA H13- en actief koolfilter, luchtkwaliteitssensoren, 350° oscillatie en bediening via app of spraakassistent."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Ventilateur sur pied Wi-Fi piloté par l'appli Xiaomi Home, compatible Google Home et Alexa, avec mode brise naturelle et fonctionnement discret adapté à la chambre.",
          "en": "A Wi-Fi standing fan run from the Xiaomi Home app, compatible with Google Home and Alexa, with a natural breeze mode and quiet running suited to bedrooms.",
          "de": "WLAN-Standventilator mit Xiaomi-Home-App, kompatibel mit Google Home und Alexa, mit Naturwind-Modus und leisem Betrieb, ideal fürs Schlafzimmer.",
          "es": "Ventilador de pie con Wi-Fi controlado desde la app Xiaomi Home, compatible con Google Home y Alexa, con modo brisa natural y funcionamiento silencioso para el dormitorio.",
          "it": "Ventilatore a piantana Wi-Fi gestito dall'app Xiaomi Home, compatibile con Google Home e Alexa, con modalità brezza naturale e funzionamento silenzioso adatto alla camera.",
          "nl": "Wifi-staande ventilator via de Xiaomi Home-app, compatibel met Google Home en Alexa, met natuurlijke-briesmodus en stille werking, geschikt voor de slaapkamer."
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
          "nl": "Ideaal voor het hele jaar (3-in-1)"
        },
        "why": {
          "fr": "Rafraîchit en été, chauffe en hiver et purifie l'air, avec un capteur et un filtre catalytique qui détruit en continu le formaldéhyde.",
          "en": "Cools in summer, heats in winter and purifies the air, with a sensor and catalytic filter that continuously destroys formaldehyde.",
          "de": "Kühlt im Sommer, heizt im Winter und reinigt die Luft – mit Sensor und Katalysatorfilter, der Formaldehyd kontinuierlich zerstört.",
          "es": "Refresca en verano, calienta en invierno y purifica el aire, con un sensor y un filtro catalítico que destruye el formaldehído de forma continua.",
          "it": "Rinfresca d'estate, riscalda d'inverno e purifica l'aria, con un sensore e un filtro catalitico che distrugge continuamente la formaldeide.",
          "nl": "Koelt in de zomer, verwarmt in de winter en zuivert de lucht, met een sensor en katalytisch filter dat formaldehyde continu afbreekt."
        }
      }
    ]
  },
  "volets-roulants-connectes-guide": {
    "question": {
      "fr": "Quel est le meilleur volet roulant connecté en 2026 ?",
      "en": "What is the best smart roller shutter in 2026?",
      "de": "Welcher smarte Rollladen ist 2026 der beste?",
      "es": "¿Cuál es la mejor persiana enrollable inteligente en 2026?",
      "it": "Qual è la migliore tapparella smart nel 2026?",
      "nl": "Wat is het beste slimme rolluik in 2026?"
    },
    "picks": [
      {
        "model": "Somfy Oximo io",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore in assoluto",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Moteur tubulaire io-homecontrol bidirectionnel : la position de chaque volet s'affiche dans l'application, avec pilotage et scénarios via la TaHoma Switch.",
          "en": "Two-way io-homecontrol tubular motor: every shutter's position shows in the app, with control and scenes through the TaHoma Switch.",
          "de": "Bidirektionaler io-homecontrol-Rohrmotor: Die Position jedes Rollladens erscheint in der App, Steuerung und Szenen laufen über die TaHoma Switch.",
          "es": "Motor tubular io-homecontrol bidireccional: la posición de cada persiana aparece en la app, con control y escenas a través de la TaHoma Switch.",
          "it": "Motore tubolare io-homecontrol bidirezionale: la posizione di ogni tapparella compare nell'app, con comandi e scene tramite la TaHoma Switch.",
          "nl": "Tweerichtings io-homecontrol buismotor: de stand van elk rolluik verschijnt in de app, met bediening en scènes via de TaHoma Switch."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "Même principe que l'Oximo io en radio RTS, plus abordable et simple à installer, pilotable par la TaHoma Switch, mais sans retour d'état.",
          "en": "Same principle as the Oximo io with RTS radio, more affordable and easy to install, controllable via TaHoma Switch, but without position feedback.",
          "de": "Gleiches Prinzip wie der Oximo io mit RTS-Funk, günstiger und einfach einzubauen, über TaHoma Switch steuerbar, aber ohne Positionsrückmeldung.",
          "es": "Mismo principio que el Oximo io con radio RTS, más asequible y fácil de instalar, controlable con TaHoma Switch, pero sin confirmación de estado.",
          "it": "Stesso principio dell'Oximo io con radio RTS, più accessibile e facile da installare, gestibile con TaHoma Switch, ma senza ritorno di stato.",
          "nl": "Zelfde principe als de Oximo io met RTS-radio, voordeliger en eenvoudig te plaatsen, te bedienen via TaHoma Switch, maar zonder terugmelding."
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
          "nl": "Ideaal voor dakramen"
        },
        "why": {
          "fr": "Volet extérieur pour fenêtre de toit, alimenté par panneau solaire et piloté en io-homecontrol, sans câblage à prévoir.",
          "en": "External roller shutter for roof windows, solar-powered and controlled via io-homecontrol, with no wiring to run.",
          "de": "Außenrollladen für Dachfenster, solarbetrieben und per io-homecontrol gesteuert, ohne Verkabelung.",
          "es": "Persiana exterior para ventanas de tejado, alimentada por energía solar y controlada por io-homecontrol, sin cableado.",
          "it": "Tapparella esterna per finestre da tetto, alimentata a energia solare e gestita via io-homecontrol, senza cablaggio.",
          "nl": "Buitenrolluik voor dakramen, op zonne-energie en bediend via io-homecontrol, zonder bekabeling."
        }
      }
    ]
  },
  "camera-interieure-sans-abonnement": {
    "question": {
      "fr": "Quelle est la meilleure caméra intérieure sans abonnement en 2026 ?",
      "en": "What is the best indoor security camera without a subscription in 2026?",
      "de": "Welche ist die beste Innenkamera ohne Abo im Jahr 2026?",
      "es": "¿Cuál es la mejor cámara de interior sin suscripción en 2026?",
      "it": "Qual è la migliore videocamera per interni senza abbonamento nel 2026?",
      "nl": "Wat is de beste binnencamera zonder abonnement in 2026?"
    },
    "picks": [
      {
        "model": "Eufy Indoor Cam E220",
        "role": {
          "fr": "Meilleure globale",
          "en": "Best overall",
          "de": "Beste insgesamt",
          "es": "La mejor en general",
          "it": "La migliore in assoluto",
          "nl": "Beste overall"
        },
        "why": {
          "fr": "Image 2K, rotation 360°, détection des personnes, animaux et pleurs de bébé, microSD jusqu'à 128 Go et compatibilité HomeKit, Google et Alexa.",
          "en": "2K video, 360° pan/tilt, person, pet and baby-crying detection, microSD up to 128 GB, and HomeKit, Google and Alexa support.",
          "de": "2K-Bild, 360°-Schwenk, Erkennung von Personen, Haustieren und Babyweinen, microSD bis 128 GB sowie HomeKit, Google und Alexa.",
          "es": "Imagen 2K, giro de 360°, detección de personas, mascotas y llanto de bebé, microSD de hasta 128 GB y compatibilidad con HomeKit, Google y Alexa.",
          "it": "Immagine 2K, rotazione a 360°, rilevamento di persone, animali e pianto, microSD fino a 128 GB e compatibilità HomeKit, Google e Alexa.",
          "nl": "2K-beeld, 360° draaien, detectie van personen, huisdieren en babygehuil, microSD tot 128 GB en ondersteuning voor HomeKit, Google en Alexa."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Une caméra d'entrée de gamme très complète : 2K QHD, rotation 360°, détection variée et cartes microSD jusqu'à 512 Go.",
          "en": "A very complete entry-level camera: 2K QHD, 360° pan/tilt, varied smart detection and microSD cards up to 512 GB.",
          "de": "Eine sehr gut ausgestattete Einsteigerkamera: 2K QHD, 360°-Schwenk, vielseitige Erkennung und microSD-Karten bis 512 GB.",
          "es": "Una cámara de gama de entrada muy completa: 2K QHD, giro de 360°, detección variada y tarjetas microSD de hasta 512 GB.",
          "it": "Una videocamera entry-level molto completa: 2K QHD, rotazione a 360°, rilevamento vario e schede microSD fino a 512 GB.",
          "nl": "Een zeer complete instapcamera: 2K QHD, 360° draaien, gevarieerde detectie en microSD-kaarten tot 512 GB."
        }
      },
      {
        "model": "Reolink E1 Pro",
        "role": {
          "fr": "Idéale pour le stockage NAS",
          "en": "Best for NAS storage",
          "de": "Ideal für NAS-Speicherung",
          "es": "La mejor para almacenamiento NAS",
          "it": "La migliore per l'archiviazione NAS",
          "nl": "Beste voor NAS-opslag"
        },
        "why": {
          "fr": "Image 5 MP, Wi-Fi bi-bande et, en plus de la microSD, envoi des vidéos vers un NAS par FTP ou vers un enregistreur Reolink.",
          "en": "5 MP video, dual-band Wi-Fi and, beyond microSD, footage upload to a NAS over FTP or to a Reolink recorder.",
          "de": "5-MP-Bild, Dualband-WLAN und neben microSD Übertragung der Aufnahmen per FTP auf ein NAS oder an einen Reolink-Rekorder.",
          "es": "Imagen de 5 MP, Wi-Fi de doble banda y, además de microSD, envío de vídeos a un NAS por FTP o a un grabador Reolink.",
          "it": "Immagine 5 MP, Wi-Fi dual band e, oltre alla microSD, invio dei video a un NAS via FTP o a un registratore Reolink.",
          "nl": "5 MP-beeld, dualband-wifi en naast microSD upload van beelden naar een NAS via FTP of naar een Reolink-recorder."
        }
      }
    ]
  },
  "aspirateur-sans-fil-comparatif-2026": {
    "question": {
      "fr": "Quel est le meilleur aspirateur balai sans fil en 2026 ?",
      "en": "What is the best cordless stick vacuum in 2026?",
      "de": "Welcher ist der beste Akku-Stielstaubsauger 2026?",
      "es": "¿Cuál es la mejor aspiradora escoba sin cable en 2026?",
      "it": "Qual è la migliore scopa elettrica senza filo nel 2026?",
      "nl": "Wat is de beste draadloze steelstofzuiger in 2026?"
    },
    "picks": [
      {
        "model": "Dyson V15 Detect",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore in assoluto",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Puissance d'aspiration de référence, laser qui révèle la poussière fine, capteur de particules qui ajuste la puissance et filtration HEPA scellée.",
          "en": "Benchmark suction power, a laser that reveals fine dust, a particle sensor that adjusts power automatically and sealed HEPA filtration.",
          "de": "Referenz bei der Saugkraft, Laser macht feinen Staub sichtbar, Partikelsensor passt die Leistung an, dazu versiegelte HEPA-Filterung.",
          "es": "Potencia de aspiración de referencia, láser que revela el polvo fino, sensor de partículas que ajusta la potencia y filtración HEPA sellada.",
          "it": "Potenza di aspirazione di riferimento, laser che rivela la polvere fine, sensore di particelle che regola la potenza e filtrazione HEPA sigillata.",
          "nl": "Referentie qua zuigkracht, laser die fijn stof zichtbaar maakt, deeltjessensor die het vermogen aanpast en afgedichte HEPA-filtratie."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Tube Flex qui se plie pour passer sous les meubles bas, grand bac de 0,9 L et filtre lavable : un excellent choix pour un appartement.",
          "en": "A Flex tube that bends to reach under low furniture, a large 0.9 L bin and a washable filter: an excellent choice for a flat.",
          "de": "Biegbares Flex-Rohr für niedrige Möbel, großer 0,9-L-Behälter und waschbarer Filter: eine sehr gute Wahl für die Wohnung.",
          "es": "Tubo Flex que se dobla para llegar bajo muebles bajos, depósito grande de 0,9 L y filtro lavable: una excelente opción para un piso.",
          "it": "Tubo Flex che si piega per passare sotto i mobili bassi, ampio contenitore da 0,9 L e filtro lavabile: ottima scelta per un appartamento.",
          "nl": "Buigbare Flex-buis om onder lage meubels te komen, grote stofbak van 0,9 L en wasbaar filter: een uitstekende keuze voor een appartement."
        }
      },
      {
        "model": "Samsung Bespoke Jet AI",
        "role": {
          "fr": "Idéal pour l'autonomie et le vidage automatique",
          "en": "Best for battery life and auto-emptying",
          "de": "Ideal für Akkulaufzeit und automatische Entleerung",
          "es": "Ideal por autonomía y vaciado automático",
          "it": "Ideale per autonomia e svuotamento automatico",
          "nl": "Ideaal voor batterijduur en automatisch legen"
        },
        "why": {
          "fr": "Jusqu'à 100 minutes d'autonomie, IA qui adapte la puissance au sol et station Clean Station qui vide le bac automatiquement.",
          "en": "Up to 100 minutes of runtime, AI that adapts power to the floor type and a Clean Station that empties the bin automatically.",
          "de": "Bis zu 100 Minuten Laufzeit, KI passt die Leistung an den Boden an, und die Clean Station entleert den Behälter automatisch.",
          "es": "Hasta 100 minutos de autonomía, IA que adapta la potencia al suelo y Clean Station que vacía el depósito automáticamente.",
          "it": "Fino a 100 minuti di autonomia, IA che adatta la potenza al pavimento e Clean Station che svuota il contenitore automaticamente.",
          "nl": "Tot 100 minuten gebruiksduur, AI die het vermogen aan de vloer aanpast en een Clean Station die de stofbak automatisch leegt."
        }
      }
    ]
  },
  "interphone-video-connecte": {
    "question": {
      "fr": "Quel est le meilleur interphone vidéo connecté en 2026 ?",
      "en": "What is the best smart video intercom in 2026?",
      "de": "Welche ist die beste vernetzte Video-Türsprechanlage 2026?",
      "es": "¿Cuál es el mejor videoportero inteligente en 2026?",
      "it": "Qual è il miglior videocitofono connesso nel 2026?",
      "nl": "Wat is de beste slimme video-intercom in 2026?"
    },
    "picks": [
      {
        "model": "Philips WelcomeEye Connect 3",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Écran tactile 7 pouces, caméra 3K, badges RFID et appli sur câblage 2 fils : le kit le plus complet pour une maison ou un petit immeuble.",
          "en": "7-inch touchscreen, 3K camera, RFID badges and an app over 2-wire cabling: the most complete kit for a house or small building.",
          "de": "7-Zoll-Touchscreen, 3K-Kamera, RFID-Transponder und App über 2-Draht-Verkabelung: das vollständigste Set für Haus oder kleines Gebäude.",
          "es": "Pantalla táctil de 7 pulgadas, cámara 3K, llaves RFID y app sobre cableado de 2 hilos: el kit más completo para una casa o un edificio pequeño.",
          "it": "Schermo touch da 7 pollici, telecamera 3K, badge RFID e app su cablaggio a 2 fili: il kit più completo per una casa o un piccolo edificio.",
          "nl": "7-inch touchscreen, 3K-camera, RFID-badges en een app via 2-draadsbekabeling: de meest complete set voor een huis of klein gebouw."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Poste connecté de la gamme standard BTicino : écran 5 pouces, Wi-Fi et appli Home + Security sur le bus 2 fils BTicino.",
          "en": "BTicino’s standard-range connected unit: 5-inch screen, Wi-Fi and the Home + Security app on the BTicino 2-wire bus.",
          "de": "Vernetzte Innenstation der BTicino-Standardserie: 5-Zoll-Bildschirm, WLAN und App Home + Security am BTicino-2-Draht-Bus.",
          "es": "Monitor conectado de la gama estándar de BTicino: pantalla de 5 pulgadas, Wi-Fi y app Home + Security sobre el bus de 2 hilos de BTicino.",
          "it": "Posto interno connesso della gamma standard BTicino: schermo da 5 pollici, Wi-Fi e app Home + Security sul bus a 2 fili BTicino.",
          "nl": "Verbonden binnenpost uit de standaardreeks van BTicino: 5-inch scherm, wifi en de app Home + Security op de BTicino-2-draadsbus."
        }
      },
      {
        "model": "Ring Intercom Video",
        "role": {
          "fr": "Idéal en appartement sans travaux",
          "en": "Best for flats, no works",
          "de": "Ideal für Wohnungen ohne Umbau",
          "es": "Ideal para pisos sin obras",
          "it": "Ideale in appartamento senza lavori",
          "nl": "Ideaal voor appartementen zonder verbouwing"
        },
        "why": {
          "fr": "Se raccorde au combiné existant et transfère les appels de l’interphone de l’immeuble vers l’appli Ring, sans toucher à la platine commune.",
          "en": "Wires into your existing handset and forwards building intercom calls to the Ring app, without touching the shared panel.",
          "de": "Wird an die vorhandene Innenstation angeschlossen und leitet Anrufe der Hausanlage an die Ring-App weiter, ohne die Außenstation anzutasten.",
          "es": "Se conecta al telefonillo existente y desvía las llamadas del portero del edificio a la app Ring, sin tocar la placa común.",
          "it": "Si collega al citofono esistente e trasferisce le chiamate del citofono condominiale all’app Ring, senza toccare la pulsantiera comune.",
          "nl": "Wordt op je bestaande binnenpost aangesloten en stuurt oproepen van de gebouwintercom door naar de Ring-app, zonder het gemeenschappelijke paneel aan te raken."
        }
      }
    ]
  },
  "nettoyeur-vapeur-connecte": {
    "question": {
      "fr": "Quel est le meilleur nettoyeur vapeur en 2026 ?",
      "en": "What is the best steam cleaner in 2026?",
      "de": "Welcher ist der beste Dampfreiniger 2026?",
      "es": "¿Cuál es el mejor limpiador a vapor en 2026?",
      "it": "Qual è il miglior pulitore a vapore nel 2026?",
      "nl": "Wat is de beste stoomreiniger in 2026?"
    },
    "picks": [
      {
        "model": "Kärcher SC 5 EasyFix",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Insgesamt die beste Wahl",
          "es": "Mejor opción global",
          "it": "Migliore in assoluto",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Chaudière 4,2 bars, fonction VapoHydro et réservoir de 1,5 L remplissable en continu : le plus polyvalent pour sols, joints, cuisine et salle de bain.",
          "en": "4.2-bar boiler, VapoHydro function and a 1.5 L continuously refillable tank: the most versatile for floors, grout, kitchen and bathroom.",
          "de": "4,2-bar-Kessel, VapoHydro-Funktion und permanent nachfüllbarer 1,5-L-Tank: der vielseitigste für Böden, Fugen, Küche und Bad.",
          "es": "Caldera de 4,2 bar, función VapoHydro y depósito de 1,5 L recargable en continuo: el más versátil para suelos, juntas, cocina y baño.",
          "it": "Caldaia da 4,2 bar, funzione VapoHydro e serbatoio da 1,5 L ricaricabile in continuo: il più versatile per pavimenti, fughe, cucina e bagno.",
          "nl": "Ketel van 4,2 bar, VapoHydro-functie en continu bijvulbare tank van 1,5 L: de meest veelzijdige voor vloeren, voegen, keuken en badkamer."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Balai vapeur 2-en-1 prêt en 20 secondes, avec nettoyeur à main détachable et 15 accessoires : l’entrée de gamme la plus polyvalente.",
          "en": "2-in-1 steam mop ready in 20 seconds, with a detachable handheld unit and 15 accessories: the most versatile entry-level choice.",
          "de": "2-in-1-Dampfmopp, in 20 Sekunden bereit, mit abnehmbarem Handgerät und 15 Zubehörteilen: das vielseitigste Einstiegsgerät.",
          "es": "Mopa de vapor 2 en 1 lista en 20 segundos, con unidad de mano extraíble y 15 accesorios: la opción de entrada más versátil.",
          "it": "Scopa a vapore 2 in 1 pronta in 20 secondi, con unità portatile staccabile e 15 accessori: la scelta entry-level più versatile.",
          "nl": "2-in-1-stoomzwabber die in 20 seconden klaar is, met afneembare handunit en 15 accessoires: het meest veelzijdige instapmodel."
        }
      },
      {
        "model": "Bissell PowerFresh Slim Steam",
        "role": {
          "fr": "Idéal pour les appartements",
          "en": "Best for apartments",
          "de": "Ideal für Wohnungen",
          "es": "Ideal para pisos",
          "it": "Ideale per appartamenti",
          "nl": "Ideaal voor appartementen"
        },
        "why": {
          "fr": "Balai vapeur à tête basse et pivotante, prêt en 30 secondes, qui se glisse sous les meubles : idéal pour studios et appartements.",
          "en": "Steam mop with a low, swivelling head, ready in 30 seconds, that slides under furniture: ideal for studios and flats.",
          "de": "Dampfmopp mit flachem, schwenkbarem Kopf, in 30 Sekunden bereit, gleitet unter Möbel: ideal für Apartments und Wohnungen.",
          "es": "Mopa de vapor con cabezal bajo y giratorio, lista en 30 segundos, que pasa bajo los muebles: ideal para estudios y pisos.",
          "it": "Scopa a vapore con testa bassa e snodata, pronta in 30 secondi, che scivola sotto i mobili: ideale per monolocali e appartamenti.",
          "nl": "Stoomzwabber met lage, draaibare kop, klaar in 30 seconden, die onder meubels glijdt: ideaal voor studio’s en appartementen."
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
      "it": "Qual è il miglior rilevatore di perdite d'acqua smart nel 2026?",
      "nl": "Wat is de beste slimme waterlekkagesensor in 2026?"
    },
    "picks": [
      {
        "model": "Aqara Water Leak Sensor T1",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción en general",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Capteur Zigbee compact et IP67 à poser sous chaque appareil à risque, avec alerte smartphone et pile CR2032 qui dure environ deux ans.",
          "en": "A compact IP67 Zigbee sensor to place under every at-risk appliance, with smartphone alerts and a CR2032 cell lasting around two years.",
          "de": "Kompakter IP67-Zigbee-Sensor für jedes gefährdete Gerät, mit Smartphone-Alarm und einer CR2032-Zelle, die rund zwei Jahre hält.",
          "es": "Sensor Zigbee compacto e IP67 para colocar bajo cada aparato de riesgo, con alerta en el móvil y pila CR2032 que dura unos dos años.",
          "it": "Sensore Zigbee compatto e IP67 da posare sotto ogni elettrodomestico a rischio, con avviso sullo smartphone e pila CR2032 che dura circa due anni.",
          "nl": "Compacte IP67-Zigbee-sensor voor onder elk risicotoestel, met smartphonemelding en een CR2032-cel die ongeveer twee jaar meegaat."
        }
      },
      {
        "model": "Shelly Flood Gen4",
        "role": {
          "fr": "Meilleur sans hub",
          "en": "Best without a hub",
          "de": "Beste Wahl ohne Hub",
          "es": "Mejor sin hub",
          "it": "Miglior scelta senza hub",
          "nl": "Beste zonder hub"
        },
        "why": {
          "fr": "Fonctionne en Wi-Fi sans hub, compatible Matter, avec buzzer intégré et câble de détection de 2 m extensible pour couvrir une zone entière.",
          "en": "Works over Wi-Fi with no hub, supports Matter, and has a built-in buzzer plus an extendable 2 m sensing cable to cover a whole area.",
          "de": "Funktioniert per WLAN ohne Hub, unterstützt Matter und bietet einen eingebauten Summer sowie ein erweiterbares 2-m-Sensorkabel für ganze Zonen.",
          "es": "Funciona por Wi-Fi sin hub, es compatible con Matter e incluye zumbador y un cable de detección de 2 m ampliable para cubrir toda una zona.",
          "it": "Funziona in Wi-Fi senza hub, è compatibile Matter e ha un cicalino integrato con cavo di rilevamento da 2 m estendibile per coprire un'intera zona.",
          "nl": "Werkt via wifi zonder hub, ondersteunt Matter en heeft een ingebouwde zoemer plus een uitbreidbare detectiekabel van 2 m voor een hele zone."
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
          "nl": "Ideaal voor automatische afsluiting"
        },
        "why": {
          "fr": "Se fixe sur une vanne quart de tour existante (DN15 à DN25) et la ferme automatiquement dès qu'un capteur Aqara détecte une fuite.",
          "en": "Clamps onto an existing quarter-turn valve (DN15 to DN25) and closes it automatically as soon as an Aqara sensor detects a leak.",
          "de": "Wird auf ein vorhandenes Vierteldrehungs-Ventil (DN15 bis DN25) gesetzt und schließt es automatisch, sobald ein Aqara-Sensor ein Leck erkennt.",
          "es": "Se acopla a una llave de cuarto de vuelta existente (DN15 a DN25) y la cierra automáticamente en cuanto un sensor Aqara detecta una fuga.",
          "it": "Si fissa su una valvola a quarto di giro esistente (da DN15 a DN25) e la chiude automaticamente appena un sensore Aqara rileva una perdita.",
          "nl": "Wordt op een bestaande kwartslagkraan (DN15 tot DN25) gezet en sluit die automatisch zodra een Aqara-sensor een lek detecteert."
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
      "it": "Qual è il miglior monitor della qualità dell'aria interna nel 2026?",
      "nl": "Wat is de beste binnenluchtkwaliteitsmeter in 2026?"
    },
    "picks": [
      {
        "model": "Airthings View Plus",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Bester insgesamt",
          "es": "Mejor en general",
          "it": "Migliore in assoluto",
          "nl": "Beste algemeen"
        },
        "why": {
          "fr": "Il réunit radon, PM1, PM2.5, CO2, COV, humidité, température et pression, sur piles ou secteur : le plus complet de la sélection.",
          "en": "It combines radon, PM1, PM2.5, CO2, VOCs, humidity, temperature and pressure on battery or mains power: the most complete pick here.",
          "de": "Er vereint Radon, PM1, PM2.5, CO2, VOC, Feuchte, Temperatur und Luftdruck, mit Batterie oder Netz – das umfassendste Gerät der Auswahl.",
          "es": "Reúne radón, PM1, PM2.5, CO2, COV, humedad, temperatura y presión, a pilas o enchufado: el más completo de la selección.",
          "it": "Riunisce radon, PM1, PM2.5, CO2, COV, umidità, temperatura e pressione, a batteria o a rete: il più completo della selezione.",
          "nl": "Combineert radon, PM1, PM2.5, CO2, VOS, vochtigheid, temperatuur en luchtdruk, op batterijen of netstroom: de meest complete keuze."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Il suit CO2, humidité, température et bruit en Wi-Fi, sans abonnement et avec Apple HomeKit, pour savoir simplement quand aérer.",
          "en": "It tracks CO2, humidity, temperature and noise over Wi-Fi, with no subscription and Apple HomeKit support, so you simply know when to ventilate.",
          "de": "Er erfasst CO2, Feuchte, Temperatur und Lärm per WLAN, ohne Abo und mit Apple HomeKit – so wissen Sie einfach, wann gelüftet werden sollte.",
          "es": "Controla CO2, humedad, temperatura y ruido por wifi, sin suscripción y con Apple HomeKit, para saber fácilmente cuándo ventilar.",
          "it": "Rileva CO2, umidità, temperatura e rumore via Wi-Fi, senza abbonamento e con Apple HomeKit, per sapere semplicemente quando arieggiare.",
          "nl": "Volgt CO2, vochtigheid, temperatuur en geluid via wifi, zonder abonnement en met Apple HomeKit, zodat je simpel weet wanneer je moet luchten."
        }
      },
      {
        "model": "Aranet4 Home",
        "role": {
          "fr": "Idéal pour un CO2 fiable et mobile",
          "en": "Best for reliable, portable CO2",
          "de": "Ideal für zuverlässiges, mobiles CO2",
          "es": "Ideal para un CO2 fiable y portátil",
          "it": "Ideale per una CO2 affidabile e portatile",
          "nl": "Ideaal voor betrouwbare, draagbare CO2-meting"
        },
        "why": {
          "fr": "Son capteur NDIR et son écran e-ink sur piles affichent le CO2 en permanence pendant des années, et il se déplace de pièce en pièce.",
          "en": "Its NDIR sensor and battery-powered e-ink screen show CO2 at a glance for years, and it moves easily from room to room.",
          "de": "NDIR-Sensor und batteriebetriebenes E-Ink-Display zeigen CO2 jahrelang auf einen Blick, und das Gerät wandert leicht von Raum zu Raum.",
          "es": "Su sensor NDIR y su pantalla de tinta electrónica a pilas muestran el CO2 de un vistazo durante años, y se lleva fácilmente de una estancia a otra.",
          "it": "Il sensore NDIR e il display e-ink a batteria mostrano la CO2 a colpo d'occhio per anni, e si sposta facilmente da una stanza all'altra.",
          "nl": "De NDIR-sensor en het e-inkscherm op batterijen tonen CO2 jarenlang in één oogopslag, en hij verhuist makkelijk van kamer naar kamer."
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
      "nl": "Wat is de beste slimme elektrische radiator in 2026?"
    },
    "picks": [
      {
        "model": "Thermor Equateur 4",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Inertie fonte et façade chauffante, détections de fenêtre ouverte et de présence, pilotage par l'application Cozytouch.",
          "en": "Cast-iron inertia with a heating front, open window and presence detection, and control through the Cozytouch app.",
          "de": "Gussspeicher mit Heizfront, Fenster-offen- und Anwesenheitserkennung sowie Steuerung über die Cozytouch-App.",
          "es": "Inercia de fundición con fachada calefactora, detección de ventana abierta y de presencia, y control con la app Cozytouch.",
          "it": "Inerzia in ghisa con facciata scaldante, rilevamento finestra aperta e presenza, controllo tramite l'app Cozytouch.",
          "nl": "Gietijzeren traagheid met verwarmd front, open-raam- en aanwezigheidsdetectie en bediening via de Cozytouch-app."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Inertie fluide, détections de présence et de fenêtre ouverte, pilotage à distance via un boîtier Cozytouch, en entrée de gamme.",
          "en": "Fluid inertia, presence and open window detection, and remote control via a Cozytouch box, at an entry-level budget.",
          "de": "Fluidspeicher, Anwesenheits- und Fenster-offen-Erkennung sowie Fernsteuerung über eine Cozytouch-Box, zum Einstiegspreis.",
          "es": "Inercia fluida, detección de presencia y de ventana abierta, y control remoto mediante una caja Cozytouch, en gama de entrada.",
          "it": "Inerzia fluida, rilevamento di presenza e finestra aperta, controllo a distanza tramite box Cozytouch, in fascia d'ingresso.",
          "nl": "Vloeistoftraagheid, aanwezigheids- en open-raamdetectie en bediening op afstand via een Cozytouch-box, in het instapsegment."
        }
      },
      {
        "model": "Mill Gentle Air WiFi",
        "role": {
          "fr": "Idéal sans travaux",
          "en": "Best with no installation",
          "de": "Ideal ohne Montage",
          "es": "Ideal sin obras",
          "it": "Ideale senza lavori",
          "nl": "Ideaal zonder installatie"
        },
        "why": {
          "fr": "Radiateur bain d'huile mobile à brancher, Wi-Fi intégré avec l'application Millheat, fonction fenêtre ouverte et anti-basculement.",
          "en": "Portable plug-in oil-filled radiator with built-in Wi-Fi and the Millheat app, an open window function and tip-over protection.",
          "de": "Mobiler Ölradiator für die Steckdose, integriertes WLAN mit Millheat-App, Fenster-offen-Funktion und Kippschutz.",
          "es": "Radiador de aceite portátil para enchufar, Wi-Fi integrado con la app Millheat, función de ventana abierta y antivuelco.",
          "it": "Radiatore a olio portatile da collegare alla presa, Wi-Fi integrato con app Millheat, funzione finestra aperta e antiribaltamento.",
          "nl": "Mobiele olieradiator voor het stopcontact, ingebouwde wifi met de Millheat-app, open-raamfunctie en kantelbeveiliging."
        }
      }
    ]
  },
  "detecteur-fumee-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur détecteur de fumée connecté en 2026 ?",
      "en": "What is the best smart smoke detector in 2026?",
      "de": "Welcher ist der beste vernetzte Rauchmelder 2026?",
      "es": "¿Cuál es el mejor detector de humo inteligente en 2026?",
      "it": "Qual è il miglior rilevatore di fumo smart nel 2026?",
      "nl": "Wat is de beste slimme rookmelder in 2026?"
    },
    "picks": [
      {
        "model": "Netatmo Smart Smoke Alarm",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Certifié EN 14604, sans hub et doté d’une pile de 10 ans, il sonne même sans internet et fonctionne avec Apple Maison et Google Home.",
          "en": "EN 14604 certified, hub-free and fitted with a 10-year battery, it sounds even without internet and works with Apple Home and Google Home.",
          "de": "Nach EN 14604 zertifiziert, ohne Hub und mit 10-Jahres-Batterie: Er alarmiert auch ohne Internet und funktioniert mit Apple Home und Google Home.",
          "es": "Certificado EN 14604, sin hub y con batería de 10 años, suena incluso sin internet y funciona con Apple Casa y Google Home.",
          "it": "Certificato EN 14604, senza hub e con batteria da 10 anni, suona anche senza internet e funziona con Apple Casa e Google Home.",
          "nl": "EN 14604-gecertificeerd, zonder hub en met een 10-jaarsbatterij: hij gaat ook zonder internet af en werkt met Apple Woning en Google Home."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Ce modèle Wi-Fi d’entrée de gamme certifié EN 14604 envoie les alertes sur smartphone sans hub, idéal pour équiper plusieurs pièces.",
          "en": "An entry-level EN 14604 certified Wi-Fi alarm that sends smartphone alerts without a hub, ideal for covering several rooms.",
          "de": "Ein WLAN-Einstiegsmodell nach EN 14604, das ohne Hub aufs Smartphone meldet – ideal, um mehrere Räume auszustatten.",
          "es": "Un modelo Wi-Fi de gama de entrada certificado EN 14604 que avisa al móvil sin hub, ideal para equipar varias habitaciones.",
          "it": "Un modello Wi-Fi entry level certificato EN 14604 che invia avvisi allo smartphone senza hub, ideale per coprire più stanze.",
          "nl": "Een instapmodel met wifi en EN 14604-certificering dat zonder hub meldingen stuurt, ideaal om meerdere kamers uit te rusten."
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
          "nl": "Ideaal tegen koolmonoxide"
        },
        "why": {
          "fr": "Certifié EN 50291, il surveille le CO avec une pile de 10 ans et vous alerte sur smartphone : le complément indispensable avec chaudière ou poêle.",
          "en": "Certified to EN 50291, it monitors CO with a 10-year battery and alerts your phone: the essential add-on if you have a boiler or stove.",
          "de": "Nach EN 50291 zertifiziert, überwacht er CO mit 10-Jahres-Batterie und meldet aufs Handy – die wichtige Ergänzung bei Therme oder Ofen.",
          "es": "Certificado EN 50291, vigila el CO con una batería de 10 años y avisa al móvil: el complemento imprescindible si tienes caldera o estufa.",
          "it": "Certificato EN 50291, controlla il CO con batteria da 10 anni e avvisa lo smartphone: il complemento indispensabile con caldaia o stufa.",
          "nl": "Gecertificeerd volgens EN 50291 bewaakt hij CO met een 10-jaarsbatterij en waarschuwt je telefoon: onmisbaar bij een cv-ketel of kachel."
        }
      }
    ]
  },
  "airfryer-economies-energie": {
    "question": {
      "fr": "Quel airfryer choisir pour économiser de l’énergie en 2026 ?",
      "en": "Which air fryer should you choose to save energy in 2026?",
      "de": "Welche Heißluftfritteuse spart 2026 am meisten Energie?",
      "es": "¿Qué freidora de aire elegir para ahorrar energía en 2026?",
      "it": "Quale friggitrice ad aria scegliere per risparmiare energia nel 2026?",
      "nl": "Welke airfryer kies je in 2026 om energie te besparen?"
    },
    "picks": [
      {
        "model": "Philips Airfryer Série 3000 XL - 6.2L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "6,2 L dans un seul panier : de quoi cuisiner pour 3 à 5 personnes en une fournée et laisser le four éteint.",
          "en": "6.2 L in a single basket: enough to cook for 3 to 5 people in one batch and leave the oven off.",
          "de": "6,2 L in einem Korb: genug für 3 bis 5 Personen in einem Durchgang, der Backofen bleibt aus.",
          "es": "6,2 L en una sola cesta: suficiente para 3 a 5 personas en una tanda, con el horno apagado.",
          "it": "6,2 L in un unico cestello: abbastanza per 3-5 persone in un’infornata, con il forno spento.",
          "nl": "6,2 L in één mand: genoeg voor 3 tot 5 personen in één ronde, terwijl de oven uit blijft."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "5 L et 1 500 W : une puissance modérée et assez de place pour 3 à 4 personnes, sans fonctions superflues.",
          "en": "5 L and 1,500 W: moderate power and enough room for 3 to 4 people, with no unnecessary extras.",
          "de": "5 L und 1.500 W: moderate Leistung und genug Platz für 3 bis 4 Personen, ohne überflüssige Extras.",
          "es": "5 L y 1.500 W: potencia moderada y espacio para 3 o 4 personas, sin funciones superfluas.",
          "it": "5 L e 1.500 W: potenza moderata e spazio per 3-4 persone, senza funzioni superflue.",
          "nl": "5 L en 1.500 W: gematigd vermogen en ruimte voor 3 tot 4 personen, zonder overbodige extra’s."
        }
      },
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Idéal pour remplacer le four en famille",
          "en": "Best for replacing the oven for families",
          "de": "Ideal, um den Backofen für Familien zu ersetzen",
          "es": "Ideal para sustituir el horno en familia",
          "it": "Ideale per sostituire il forno in famiglia",
          "nl": "Ideaal om de oven te vervangen voor gezinnen"
        },
        "why": {
          "fr": "Deux tiroirs superposés de 4,75 L pour cuire plat et accompagnement en même temps, au lieu d’allumer le four.",
          "en": "Two stacked 4.75 L drawers cook a main and a side at the same time instead of switching the oven on.",
          "de": "Zwei übereinanderliegende 4,75-L-Körbe garen Hauptgericht und Beilage gleichzeitig, statt den Backofen anzuwerfen.",
          "es": "Dos cestas apiladas de 4,75 L para cocinar plato y guarnición a la vez, en lugar de encender el horno.",
          "it": "Due cestelli sovrapposti da 4,75 L per cuocere secondo e contorno insieme, invece di accendere il forno.",
          "nl": "Twee gestapelde lades van 4,75 L voor hoofd- en bijgerecht tegelijk, in plaats van de oven aan te zetten."
        }
      }
    ]
  },
  "airfryer-simple-vs-double-panier": {
    "question": {
      "fr": "Quel est le meilleur airfryer, simple ou double panier, en 2026 ?",
      "en": "What is the best air fryer, single or dual basket, in 2026?",
      "de": "Was ist die beste Heißluftfritteuse 2026, mit Einzel- oder Doppelkorb?",
      "es": "¿Cuál es la mejor freidora de aire de una o dos cestas en 2026?",
      "it": "Qual è la migliore friggitrice ad aria, a cestello singolo o doppio, nel 2026?",
      "nl": "Wat is de beste airfryer met enkele of dubbele mand in 2026?"
    },
    "picks": [
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste algemene keuze"
        },
        "why": {
          "fr": "Deux tiroirs empilés de 4,75 L sur environ 28 cm de large : deux plats en même temps sans monopoliser le plan de travail.",
          "en": "Two stacked 4.75 L drawers in about 28 cm of width: two dishes at once without taking over the worktop.",
          "de": "Zwei gestapelte Schubladen mit je 4,75 l auf rund 28 cm Breite: zwei Gerichte gleichzeitig, ohne die Arbeitsfläche zu blockieren.",
          "es": "Dos cajones apilados de 4,75 L en unos 28 cm de ancho: dos platos a la vez sin acaparar la encimera.",
          "it": "Due cassetti sovrapposti da 4,75 L in circa 28 cm di larghezza: due piatti insieme senza occupare tutto il piano.",
          "nl": "Twee gestapelde lades van 4,75 l op zo’n 28 cm breedte: twee gerechten tegelijk zonder je aanrecht vol te zetten."
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
          "nl": "Ideaal voor grote gezinnen"
        },
        "why": {
          "fr": "Deux zones de 5,2 L ou, sans séparateur, une grande cuve de 10,4 L pour un poulet entier : le plus polyvalent pour cinq personnes et plus.",
          "en": "Two 5.2 L zones or, without the divider, one 10.4 L drawer for a whole chicken: the most versatile for five or more people.",
          "de": "Zwei Zonen mit 5,2 l oder ohne Trennwand ein 10,4-l-Garraum für ein ganzes Hähnchen: am vielseitigsten ab fünf Personen.",
          "es": "Dos zonas de 5,2 L o, sin separador, una cubeta de 10,4 L para un pollo entero: la más versátil para cinco o más.",
          "it": "Due zone da 5,2 L o, senza divisorio, una vasca da 10,4 L per un pollo intero: la più versatile da cinque persone in su.",
          "nl": "Twee zones van 5,2 l of, zonder wand, één lade van 10,4 l voor een hele kip: het veelzijdigst voor vijf of meer personen."
        }
      },
      {
        "model": "Philips Airfryer Série 3000 XL - 6.2L",
        "role": {
          "fr": "Meilleur simple panier",
          "en": "Best single basket",
          "de": "Bester Einzelkorb",
          "es": "Mejor cesta única",
          "it": "Miglior cestello singolo",
          "nl": "Beste enkele mand"
        },
        "why": {
          "fr": "Un panier de 6,2 L, sept programmes et une utilisation très simple : suffisant et plus compact pour une à trois personnes.",
          "en": "A 6.2 L basket, seven presets and very simple controls: enough, and more compact, for one to three people.",
          "de": "Ein 6,2-l-Korb, sieben Programme und sehr einfache Bedienung: ausreichend und kompakter für ein bis drei Personen.",
          "es": "Una cesta de 6,2 L, siete programas y un manejo muy sencillo: suficiente y más compacta para una a tres personas.",
          "it": "Un cestello da 6,2 L, sette programmi e un uso semplicissimo: sufficiente e più compatto per una-tre persone.",
          "nl": "Een mand van 6,2 l, zeven programma’s en heel eenvoudige bediening: genoeg en compacter voor één tot drie personen."
        }
      }
    ]
  },
  "airfryer-vs-friteuse-traditionnelle": {
    "question": {
      "fr": "Quel est le meilleur airfryer pour remplacer une friteuse traditionnelle en 2026 ?",
      "en": "What is the best air fryer to replace a traditional deep fryer in 2026?",
      "de": "Was ist die beste Heißluftfritteuse als Ersatz für eine klassische Fritteuse 2026?",
      "es": "¿Cuál es la mejor freidora de aire para sustituir una freidora tradicional en 2026?",
      "it": "Qual è la migliore friggitrice ad aria per sostituire una friggitrice tradizionale nel 2026?",
      "nl": "Wat is de beste airfryer om een traditionele frituurpan te vervangen in 2026?"
    },
    "picks": [
      {
        "model": "Philips Airfryer Série 3000 XL - 6.2L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Son tiroir de 6,2 litres (environ 1,2 kg de frites) et ses programmes prédéfinis couvrent les besoins d’une famille de quatre qui abandonne la friteuse.",
          "en": "Its 6.2-litre drawer (about 1.2 kg of fries) and preset programmes cover the needs of a family of four giving up the deep fryer.",
          "de": "Die 6,2-Liter-Schublade (rund 1,2 kg Pommes) und die Programme decken den Bedarf einer vierköpfigen Familie, die die Fritteuse aufgibt.",
          "es": "Su cajón de 6,2 litros (unos 1,2 kg de patatas) y sus programas cubren las necesidades de una familia de cuatro que deja la freidora.",
          "it": "Il cassetto da 6,2 litri (circa 1,2 kg di patatine) e i programmi preimpostati coprono le esigenze di una famiglia di quattro che lascia la friggitrice.",
          "nl": "De lade van 6,2 liter (ongeveer 1,2 kg frietjes) en de programma’s dekken de behoeften van een gezin van vier dat de frituurpan opgeeft."
        }
      },
      {
        "model": "Tefal ActiFry Genius XL 2in1 - 1.7kg",
        "role": {
          "fr": "Idéal pour les amateurs de frites",
          "en": "Best for fries lovers",
          "de": "Ideal für Pommes-Fans",
          "es": "Ideal para los amantes de las patatas fritas",
          "it": "Ideale per chi ama le patatine",
          "nl": "Ideaal voor frietliefhebbers"
        },
        "why": {
          "fr": "Sa pale remue les frites pendant la cuisson : 1,7 kg avec une cuillère d’huile, sans secouer le panier.",
          "en": "Its paddle stirs the fries while they cook: 1.7 kg with one spoonful of oil, no basket shaking needed.",
          "de": "Der Rührarm wendet die Pommes beim Garen: 1,7 kg mit einem Löffel Öl, ohne den Korb zu schütteln.",
          "es": "Su pala remueve las patatas durante la cocción: 1,7 kg con una cucharada de aceite, sin agitar la cesta.",
          "it": "La pala mescola le patatine durante la cottura: 1,7 kg con un cucchiaio d’olio, senza scuotere il cestello.",
          "nl": "De roerarm schept de frietjes om tijdens het bakken: 1,7 kg met één lepel olie, zonder de mand te schudden."
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
      "nl": "Wat is het beste alarmsysteem zonder abonnement in 2026?"
    },
    "picks": [
      {
        "model": "Ajax StarterKit 4G",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Centrale Ethernet et 4G (deux SIM), batterie jusqu’à 16 h, portée Jeweller étendue et certification Grade 2.",
          "en": "Ethernet and 4G hub (two SIMs), battery up to 16 h, long Jeweller radio range and Grade 2 certification.",
          "de": "Zentrale mit Ethernet und 4G (zwei SIM), Akku bis 16 h, große Jeweller-Funkreichweite und Grade-2-Zertifizierung.",
          "es": "Central con Ethernet y 4G (dos SIM), batería de hasta 16 h, gran alcance Jeweller y certificación Grado 2.",
          "it": "Centrale Ethernet e 4G (due SIM), batteria fino a 16 h, ampia portata Jeweller e certificazione Grado 2.",
          "nl": "Centrale met ethernet en 4G (twee simkaarten), accu tot 16 u, groot Jeweller-bereik en Grade 2-certificering."
        }
      },
      {
        "model": "Somfy Home Alarm Advanced",
        "role": {
          "fr": "Meilleure détection anti-effraction",
          "en": "Best break-in detection",
          "de": "Beste Aufbrucherkennung",
          "es": "Mejor detección antiforzado",
          "it": "Miglior rilevamento anti-scasso",
          "nl": "Beste inbraakdetectie"
        },
        "why": {
          "fr": "Les IntelliTAG détectent les vibrations avant l’ouverture, avec sirène 110 dB et réseau GSM de secours offert cinq ans.",
          "en": "IntelliTAG sensors detect vibrations before an opening moves, with a 110 dB siren and GSM backup included for five years.",
          "de": "IntelliTAG erkennen Erschütterungen vor dem Öffnen, dazu 110-dB-Sirene und fünf Jahre inklusive GSM-Backup.",
          "es": "Los IntelliTAG detectan vibraciones antes de la apertura, con sirena de 110 dB y respaldo GSM incluido cinco años.",
          "it": "Gli IntelliTAG rilevano le vibrazioni prima dell’apertura, con sirena da 110 dB e backup GSM incluso per cinque anni.",
          "nl": "IntelliTAG-sensoren detecteren trillingen vóór het openen, met 110 dB-sirene en vijf jaar gsm-back-up inbegrepen."
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
          "nl": "Beste prijs-kwaliteit voor Alexa"
        },
        "why": {
          "fr": "Entrée de gamme simple : sirène 104 dB intégrée, batterie 24 h, intégration Alexa. Secours cellulaire avec Ring Protect.",
          "en": "Simple entry-level kit: built-in 104 dB siren, 24 h battery, Alexa integration. Cellular backup needs Ring Protect.",
          "de": "Einfacher Einstieg: eingebaute 104-dB-Sirene, 24-h-Akku, Alexa-Einbindung. Mobilfunk-Backup nur mit Ring Protect.",
          "es": "Entrada de gama sencilla: sirena de 104 dB integrada, batería de 24 h e integración Alexa. Respaldo móvil con Ring Protect.",
          "it": "Ingresso di gamma semplice: sirena da 104 dB integrata, batteria 24 h, integrazione Alexa. Backup cellulare con Ring Protect.",
          "nl": "Eenvoudige instapper: ingebouwde 104 dB-sirene, 24 u accu, Alexa-integratie. Mobiele back-up vereist Ring Protect."
        }
      }
    ]
  },
  "arrosage-connecte-intelligent": {
    "question": {
      "fr": "Quel est le meilleur système d'arrosage connecté en 2026 ?",
      "en": "What is the best smart irrigation system in 2026?",
      "de": "Welches ist das beste smarte Bewässerungssystem 2026?",
      "es": "¿Cuál es el mejor sistema de riego inteligente en 2026?",
      "it": "Qual è il miglior sistema di irrigazione smart nel 2026?",
      "nl": "Wat is het beste slimme besproeiingssysteem in 2026?"
    },
    "picks": [
      {
        "model": "GARDENA smart Water Control Set",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Se visse sur le robinet, adapte l'arrosage à la pluie annoncée et accepte un capteur d'humidité du sol ; compatible Apple Home, Alexa et Google via sa passerelle.",
          "en": "Screws onto the tap, adapts watering to forecast rain and accepts a soil moisture sensor; works with Apple Home, Alexa and Google through its gateway.",
          "de": "Wird auf den Hahn geschraubt, passt die Bewässerung an Regen an und nimmt einen Bodenfeuchtesensor auf; per Gateway mit Apple Home, Alexa und Google kompatibel.",
          "es": "Se enrosca en el grifo, adapta el riego a la lluvia prevista y admite un sensor de humedad del suelo; compatible con Apple Home, Alexa y Google vía pasarela.",
          "it": "Si avvita al rubinetto, adatta l'irrigazione alla pioggia prevista e accetta un sensore di umidità; compatibile con Apple Home, Alexa e Google tramite gateway.",
          "nl": "Schroef je op de kraan, past het sproeien aan voorspelde regen aan en werkt met een bodemvochtsensor; via de gateway compatibel met Apple Home, Alexa en Google."
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
          "nl": "Beste prijs-kwaliteit, zonder gateway"
        },
        "why": {
          "fr": "Programmateur de robinet Thread et Matter qui fonctionne en local, sans passerelle ni cloud obligatoire, avec Apple Home, Google Home ou Alexa.",
          "en": "A Thread and Matter tap timer that runs locally, with no gateway or mandatory cloud, in Apple Home, Google Home or Alexa.",
          "de": "Thread- und Matter-Hahnsteuerung, die lokal arbeitet, ohne Gateway oder Cloud-Pflicht, mit Apple Home, Google Home oder Alexa.",
          "es": "Programador de grifo Thread y Matter que funciona en local, sin pasarela ni nube obligatoria, con Apple Home, Google Home o Alexa.",
          "it": "Programmatore da rubinetto Thread e Matter che funziona in locale, senza gateway né cloud obbligatorio, con Apple Home, Google Home o Alexa.",
          "nl": "Thread- en Matter-kraancomputer die lokaal werkt, zonder gateway of verplichte cloud, met Apple Home, Google Home of Alexa."
        }
      },
      {
        "model": "GARDENA smart Irrigation Control",
        "role": {
          "fr": "Idéal pour un arrosage enterré",
          "en": "Best for buried systems",
          "de": "Ideal für unterirdische Anlagen",
          "es": "Ideal para riego enterrado",
          "it": "Ideale per impianti interrati",
          "nl": "Ideaal voor ingegraven systemen"
        },
        "why": {
          "fr": "Pilote jusqu'à six électrovannes 24 V de la plupart des marques et rend connectée une installation enterrée existante.",
          "en": "Drives up to six 24 V solenoid valves from most brands and brings an existing buried system online.",
          "de": "Steuert bis zu sechs 24-V-Magnetventile der meisten Marken und macht eine bestehende Erdanlage smart.",
          "es": "Controla hasta seis electroválvulas de 24 V de la mayoría de marcas y conecta una instalación enterrada existente.",
          "it": "Comanda fino a sei elettrovalvole da 24 V della maggior parte delle marche e rende smart un impianto interrato esistente.",
          "nl": "Stuurt tot zes 24V-magneetventielen van de meeste merken aan en maakt een bestaand ingegraven systeem slim."
        }
      }
    ]
  },
  "balance-cuisine-connectee-comparatif": {
    "question": {
      "fr": "Quelle est la meilleure balance de cuisine connectée en 2026 ?",
      "en": "What is the best smart kitchen scale in 2026?",
      "de": "Welche ist die beste smarte Küchenwaage 2026?",
      "es": "¿Cuál es la mejor báscula de cocina inteligente en 2026?",
      "it": "Qual è la migliore bilancia da cucina smart nel 2026?",
      "nl": "Wat is de beste slimme keukenweegschaal in 2026?"
    },
    "picks": [
      {
        "model": "Etekcity Smart Nutrition Scale",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "5 kg au gramme près, plateau inox et application VeSync qui suit jusqu’à 19 nutriments, avec rapports et synchronisation Apple Santé.",
          "en": "5 kg in 1 g steps, a stainless steel platform and a VeSync app tracking up to 19 nutrients, with reports and Apple Health sync.",
          "de": "5 kg grammgenau, Edelstahlfläche und VeSync-App mit bis zu 19 Nährstoffen, Berichten und Apple-Health-Synchronisation.",
          "es": "5 kg al gramo, plataforma de acero inoxidable y app VeSync que registra hasta 19 nutrientes, con informes y sincronización con Apple Salud.",
          "it": "5 kg al grammo, piatto in acciaio inox e app VeSync che monitora fino a 19 nutrienti, con report e sincronizzazione con Apple Salute.",
          "nl": "5 kg op de gram, rvs-plateau en een VeSync-app die tot 19 voedingsstoffen bijhoudt, met overzichten en Apple Gezondheid-synchronisatie."
        }
      },
      {
        "model": "Renpho Balance Cuisine Connectée",
        "role": {
          "fr": "Meilleur petit budget",
          "en": "Best budget pick",
          "de": "Beste günstige Wahl",
          "es": "Mejor opción económica",
          "it": "Migliore scelta economica",
          "nl": "Beste budgetkeuze"
        },
        "why": {
          "fr": "Balance alimentaire Bluetooth d’entrée de gamme, avec scan de code-barres et l’application Renpho Health partagée avec les pèse-personnes de la marque.",
          "en": "An entry-level Bluetooth food scale with barcode scanning and the Renpho Health app shared with the brand’s body scales.",
          "de": "Günstige Bluetooth-Lebensmittelwaage mit Barcode-Scan und der Renpho-Health-App, die auch die Personenwaagen der Marke nutzen.",
          "es": "Báscula de alimentos Bluetooth de gama de entrada, con escáner de códigos de barras y la app Renpho Health compartida con las básculas corporales.",
          "it": "Bilancia per alimenti Bluetooth entry level, con scansione dei codici a barre e l’app Renpho Health condivisa con le pesapersone del marchio.",
          "nl": "Betaalbare Bluetooth-voedingsweegschaal met barcodescanner en de Renpho Health-app die ook de personenweegschalen van het merk gebruiken."
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
          "nl": "Groot draagvermogen zonder app"
        },
        "why": {
          "fr": "Jusqu’à 15 kg au gramme près sur un grand plateau en verre, avec fonction hold : idéale pour les grandes préparations, sans application.",
          "en": "Up to 15 kg in 1 g steps on a large glass platform with a hold function: ideal for big batches, no app involved.",
          "de": "Bis 15 kg grammgenau auf großer Glasfläche mit Hold-Funktion: ideal für große Mengen, ganz ohne App.",
          "es": "Hasta 15 kg al gramo sobre una amplia plataforma de vidrio con función hold: ideal para grandes preparaciones, sin app.",
          "it": "Fino a 15 kg al grammo su un ampio piatto in vetro con funzione hold: ideale per grandi preparazioni, senza app.",
          "nl": "Tot 15 kg op de gram op een groot glazen plateau met hold-functie: ideaal voor grote bereidingen, zonder app."
        }
      }
    ]
  },
  "balkonkraftwerk-panneau-solaire-balcon": {
    "question": {
      "fr": "Quel est le meilleur kit solaire de balcon en 2026 ?",
      "en": "What is the best balcony solar kit in 2026?",
      "de": "Welches ist das beste Balkonkraftwerk 2026?",
      "es": "¿Cuál es el mejor kit solar de balcón en 2026?",
      "it": "Qual è il miglior kit solare da balcone nel 2026?",
      "nl": "Wat is de beste balkonzonnepaneelset in 2026?"
    },
    "picks": [
      {
        "model": "Hoymiles HMS-800W-2T",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Micro-onduleur 800 VA à deux entrées MPPT et Wi-Fi intégré, au cœur de nombreux kits : la solution la plus simple pour un foyer présent en journée.",
          "en": "An 800 VA micro-inverter with two MPPT inputs and built-in Wi-Fi at the heart of many kits: the simplest option for households at home by day.",
          "de": "800-VA-Mikrowechselrichter mit zwei MPPT-Eingängen und integriertem WLAN, Basis vieler Sets: die einfachste Lösung für Haushalte, die tagsüber zu Hause sind.",
          "es": "Microinversor de 800 VA con dos entradas MPPT y wifi integrado, base de muchos kits: la opción más sencilla para hogares con gente en casa de día.",
          "it": "Microinverter da 800 VA con due ingressi MPPT e Wi-Fi integrato, alla base di molti kit: la soluzione più semplice per chi è in casa di giorno.",
          "nl": "Micro-omvormer van 800 VA met twee MPPT-ingangen en ingebouwde wifi, basis van veel sets: de eenvoudigste keuze als je overdag thuis bent."
        }
      },
      {
        "model": "Anker SOLIX Solarbank 3 E2700 Pro",
        "role": {
          "fr": "Meilleur avec batterie",
          "en": "Best with battery",
          "de": "Bester mit Speicher",
          "es": "Mejor con batería",
          "it": "Migliore con batteria",
          "nl": "Beste met batterij"
        },
        "why": {
          "fr": "2,688 kWh extensibles, quatre entrées MPPT et 800 W restitués sur prise : idéal si vous consommez surtout le soir.",
          "en": "2.688 kWh expandable storage, four MPPT inputs and 800 W output through a socket: ideal if you use most of your power in the evening.",
          "de": "2,688 kWh erweiterbarer Speicher, vier MPPT-Eingänge und 800 W über die Steckdose: ideal, wenn Sie vor allem abends Strom verbrauchen.",
          "es": "2,688 kWh ampliables, cuatro entradas MPPT y 800 W a través de un enchufe: ideal si consumes sobre todo por la noche.",
          "it": "2,688 kWh espandibili, quattro ingressi MPPT e 800 W tramite presa: ideale se consumi soprattutto la sera.",
          "nl": "2,688 kWh uitbreidbare opslag, vier MPPT-ingangen en 800 W via een stopcontact: ideaal als je vooral 's avonds stroom gebruikt."
        }
      },
      {
        "model": "EcoFlow STREAM Ultra",
        "role": {
          "fr": "Meilleur pour petit balcon",
          "en": "Best for small balconies",
          "de": "Bester für kleine Balkone",
          "es": "Mejor para balcones pequeños",
          "it": "Migliore per balconi piccoli",
          "nl": "Beste voor kleine balkons"
        },
        "why": {
          "fr": "Tout-en-un compact IP65 avec batterie LiFePO4 de 1,92 kWh, quatre entrées MPPT et 800 W sur le réseau domestique.",
          "en": "A compact IP65 all-in-one with a 1.92 kWh LiFePO4 battery, four MPPT inputs and 800 W into the home grid.",
          "de": "Kompakter IP65-Alleskönner mit 1,92-kWh-LiFePO4-Akku, vier MPPT-Eingängen und 800 W Einspeisung ins Hausnetz.",
          "es": "Todo en uno compacto IP65 con batería LiFePO4 de 1,92 kWh, cuatro entradas MPPT y 800 W a la red doméstica.",
          "it": "Tutto-in-uno compatto IP65 con batteria LiFePO4 da 1,92 kWh, quattro ingressi MPPT e 800 W nell'impianto di casa.",
          "nl": "Compacte IP65-alles-in-één met LiFePO4-batterij van 1,92 kWh, vier MPPT-ingangen en 800 W in het huisnet."
        }
      }
    ]
  },
  "barbecue-connecte-thermometre-guide": {
    "question": {
      "fr": "Quel est le meilleur thermomètre à viande connecté en 2026 ?",
      "en": "What is the best smart meat thermometer in 2026?",
      "de": "Welches ist das beste smarte Grillthermometer 2026?",
      "es": "¿Cuál es el mejor termómetro de carne inteligente en 2026?",
      "it": "Qual è il miglior termometro per carne smart nel 2026?",
      "nl": "Wat is de beste slimme vleesthermometer in 2026?"
    },
    "picks": [
      {
        "model": "MEATER Pro Thermomètre Sans Fil Longue Portée",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore in assoluto",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Sonde 100 % sans fil, étanche et lavable au lave-vaisselle, qui mesure cœur et température ambiante et supporte la saisie à feu vif.",
          "en": "Fully wireless, waterproof, dishwasher-safe probe that reads core and ambient temperature and can handle searing over a hot fire.",
          "de": "Komplett kabelloser, wasserdichter und spülmaschinenfester Fühler, misst Kern- und Umgebungstemperatur und verträgt scharfes Angrillen.",
          "es": "Sonda totalmente inalámbrica, resistente al agua y apta para lavavajillas, que mide temperatura interna y ambiente y admite sellar a fuego vivo.",
          "it": "Sonda completamente wireless, impermeabile e lavabile in lavastoviglie, misura cuore e temperatura ambiente e regge la scottatura a fiamma viva.",
          "nl": "Volledig draadloze, waterdichte en vaatwasserbestendige sonde die kern- en omgevingstemperatuur meet en dichtschroeien aankan."
        }
      },
      {
        "model": "MEATER Plus Thermomètre Sans Fil Bluetooth 50m",
        "role": {
          "fr": "Meilleur rapport qualité-prix sans fil",
          "en": "Best-value wireless",
          "de": "Bestes Preis-Leistungs-Verhältnis kabellos",
          "es": "Mejor relación calidad-precio inalámbrica",
          "it": "Miglior rapporto qualità-prezzo wireless",
          "nl": "Beste prijs-kwaliteit draadloos"
        },
        "why": {
          "fr": "Même application que le Pro, relais Bluetooth intégré au bloc de recharge pour 50 m annoncés : idéal pour débuter, couvercle fermé.",
          "en": "Same app as the Pro, with a Bluetooth repeater built into the charging block for a stated 50 m: a great first wireless probe for closed-lid cooking.",
          "de": "Dieselbe App wie der Pro, Bluetooth-Verstärker im Ladeblock für angegebene 50 m: idealer Einstieg für Grillen mit geschlossenem Deckel.",
          "es": "Misma app que el Pro y repetidor Bluetooth en la base de carga para 50 m anunciados: ideal para empezar cocinando con la tapa cerrada.",
          "it": "Stessa app del Pro, ripetitore Bluetooth nella base di ricarica per 50 m dichiarati: ideale per iniziare cucinando a coperchio chiuso.",
          "nl": "Dezelfde app als de Pro, met Bluetooth-repeater in het laadblok voor opgegeven 50 m: ideale instap voor koken met gesloten deksel."
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
          "nl": "Beste meersondemodel om te roken"
        },
        "why": {
          "fr": "Quatre prises de sonde, écran et dos aimanté : suivez plusieurs pièces et la température du fumoir pour un budget réduit.",
          "en": "Four probe sockets, a display and a magnetic back: track several cuts and the smoker temperature on a small budget.",
          "de": "Vier Fühleranschlüsse, Display und Magnetrückseite: mehrere Stücke und die Smoker-Temperatur mit kleinem Budget überwachen.",
          "es": "Cuatro tomas de sonda, pantalla y trasera imantada: controla varias piezas y la temperatura del ahumador con poco presupuesto.",
          "it": "Quattro prese per sonde, display e retro magnetico: segui più pezzi e la temperatura dell’affumicatore con un budget ridotto.",
          "nl": "Vier sondeaansluitingen, display en magnetische achterkant: volg meerdere stukken en de smokertemperatuur voor een klein budget."
        }
      }
    ]
  },
  "cafetiere-connectee-guide": {
    "question": {
      "fr": "Quelle cafetière à grain choisir en 2026, connectée ou non ?",
      "en": "Which bean-to-cup coffee machine should you choose in 2026, smart or not?",
      "de": "Welchen Kaffeevollautomaten sollte man 2026 wählen, smart oder nicht?",
      "es": "¿Qué cafetera superautomática elegir en 2026, inteligente o no?",
      "it": "Quale macchina da caffè superautomatica scegliere nel 2026, smart o no?",
      "nl": "Welke volautomatische koffiemachine kies je in 2026, slim of niet?"
    },
    "picks": [
      {
        "model": "De'Longhi Magnifica Evo ECAM290.51.B",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción global",
          "it": "Migliore in assoluto",
          "nl": "Beste allround keuze"
        },
        "why": {
          "fr": "Broyeur à 13 réglages, carafe LatteCrema Hot et 7 recettes directes : très simple au quotidien, mais sans application.",
          "en": "13-setting grinder, LatteCrema Hot carafe and 7 one-touch recipes: very easy day to day, though it has no app.",
          "de": "Mahlwerk mit 13 Stufen, LatteCrema-Hot-Karaffe und 7 Direktwahl-Rezepte: im Alltag sehr einfach, allerdings ohne App.",
          "es": "Molinillo de 13 ajustes, jarra LatteCrema Hot y 7 recetas directas: muy sencilla en el día a día, aunque sin app.",
          "it": "Macinacaffè a 13 livelli, caraffa LatteCrema Hot e 7 ricette dirette: semplicissima ogni giorno, ma senza app.",
          "nl": "Molen met 13 standen, LatteCrema Hot-karaf en 7 directe recepten: heel eenvoudig in gebruik, maar zonder app."
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
          "nl": "Makkelijkst te onderhouden"
        },
        "why": {
          "fr": "Système lait LatteGo en deux pièces sans tube, 20 boissons chaudes et glacées et 4 profils utilisateurs sur l'écran.",
          "en": "Two-piece, tube-free LatteGo milk system, 20 hot and iced drinks and 4 user profiles on the display.",
          "de": "Zweiteiliges LatteGo-Milchsystem ohne Schläuche, 20 heiße und eisgekühlte Getränke und 4 Benutzerprofile am Display.",
          "es": "Sistema de leche LatteGo de dos piezas sin tubos, 20 bebidas calientes y frías y 4 perfiles de usuario en pantalla.",
          "it": "Sistema latte LatteGo in due pezzi senza tubi, 20 bevande calde e fredde e 4 profili utente sul display.",
          "nl": "Tweedelig LatteGo-melksysteem zonder slangetjes, 20 warme en ijskoude dranken en 4 gebruikersprofielen op het display."
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
          "nl": "Ideaal voor gezinnen"
        },
        "why": {
          "fr": "Réservoir de 2,3 litres, 12 boissons dont l'eau chaude pour le thé et boissons lactées en double tasse.",
          "en": "2.3-litre tank, 12 drinks including hot water for tea, and milk drinks two cups at a time.",
          "de": "2,3-Liter-Tank, 12 Getränke inklusive Heißwasser für Tee und Milchgetränke für zwei Tassen gleichzeitig.",
          "es": "Depósito de 2,3 litros, 12 bebidas con agua caliente para el té y bebidas con leche en doble taza.",
          "it": "Serbatoio da 2,3 litri, 12 bevande con acqua calda per il tè e bevande al latte in doppia tazza.",
          "nl": "Reservoir van 2,3 liter, 12 dranken inclusief heet water voor thee en melkdranken voor twee kopjes tegelijk."
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
      "it": "Qual è il miglior sensore di umidità del suolo connesso nel 2026?",
      "nl": "Wat is de beste slimme bodemvochtsensor in 2026?"
    },
    "picks": [
      {
        "model": "Gardena smart Sensor",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Il mesure l'humidité au niveau des racines et suspend l'arrosage des programmateurs Gardena smart tant que la terre reste humide.",
          "en": "It measures moisture at root level and holds back Gardena smart water timers while the soil is still damp.",
          "de": "Er misst die Feuchte im Wurzelbereich und setzt Gardena-smart-Bewässerungscomputer aus, solange der Boden feucht ist.",
          "es": "Mide la humedad a la altura de las raíces y suspende los programadores Gardena smart mientras la tierra sigue húmeda.",
          "it": "Misura l'umidità all'altezza delle radici e sospende i programmatori Gardena smart finché la terra resta umida.",
          "nl": "Hij meet het vocht in de wortelzone en stelt Gardena smart-watertimers uit zolang de grond vochtig is."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Capteur radio IP66 sur pile AA, jusqu'à 16 par passerelle Ecowitt et compatible Home Assistant pour suivre plusieurs zones.",
          "en": "An IP66 radio sensor on one AA battery, up to 16 per Ecowitt gateway and Home Assistant compatible for multi-zone gardens.",
          "de": "IP66-Funksensor mit AA-Batterie, bis zu 16 pro Ecowitt-Gateway und Home-Assistant-kompatibel für mehrere Zonen.",
          "es": "Sensor de radio IP66 con pila AA, hasta 16 por pasarela Ecowitt y compatible con Home Assistant para varias zonas.",
          "it": "Sensore radio IP66 a batteria AA, fino a 16 per gateway Ecowitt e compatibile con Home Assistant per più zone.",
          "nl": "IP66-radiosensor op één AA-batterij, tot 16 per Ecowitt-gateway en compatibel met Home Assistant voor meerdere zones."
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
          "nl": "Ideaal voor Zigbee-smart-homes"
        },
        "why": {
          "fr": "Capteur capacitif Zigbee 3.0 (humidité et température) qui rejoint Home Assistant, Hubitat, SmartThings ou Homey sans application dédiée.",
          "en": "A capacitive Zigbee 3.0 sensor (moisture and temperature) that joins Home Assistant, Hubitat, SmartThings or Homey without a dedicated app.",
          "de": "Kapazitiver Zigbee-3.0-Sensor (Feuchte und Temperatur) für Home Assistant, Hubitat, SmartThings oder Homey ohne eigene App.",
          "es": "Sensor capacitivo Zigbee 3.0 (humedad y temperatura) que se une a Home Assistant, Hubitat, SmartThings u Homey sin app propia.",
          "it": "Sensore capacitivo Zigbee 3.0 (umidità e temperatura) che si unisce a Home Assistant, Hubitat, SmartThings o Homey senza app dedicata.",
          "nl": "Capacitieve Zigbee 3.0-sensor (vocht en temperatuur) die werkt met Home Assistant, Hubitat, SmartThings of Homey zonder eigen app."
        }
      }
    ]
  },
  "cave-vin-connectee-guide": {
    "question": {
      "fr": "Quelle est la meilleure cave à vin connectée en 2026 ?",
      "en": "What is the best smart wine cellar in 2026?",
      "de": "Welcher ist der beste smarte Weinklimaschrank 2026?",
      "es": "¿Cuál es la mejor vinoteca inteligente en 2026?",
      "it": "Qual è la migliore cantinetta vino smart nel 2026?",
      "nl": "Wat is de beste slimme wijnkast in 2026?"
    },
    "picks": [
      {
        "model": "La Sommelière ECELLAR185",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "185 bouteilles, deux zones et 14 clayettes connectées qui détectent chaque bouteille, avec inventaire automatique dans l’application Vinotag.",
          "en": "185 bottles, two zones and 14 connected shelves that detect every bottle, with automatic inventory in the Vinotag app.",
          "de": "185 Flaschen, zwei Zonen und 14 vernetzte Regalböden, die jede Flasche erkennen, mit automatischem Inventar in der App Vinotag.",
          "es": "185 botellas, dos zonas y 14 baldas conectadas que detectan cada botella, con inventario automático en la aplicación Vinotag.",
          "it": "185 bottiglie, due zone e 14 ripiani connessi che rilevano ogni bottiglia, con inventario automatico nell’app Vinotag.",
          "nl": "185 flessen, twee zones en 14 verbonden legplanken die elke fles detecteren, met automatische inventaris in de app Vinotag."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "77 bouteilles en deux zones (5-10 °C et 10-18 °C), humidité gérée, 37 dB et application hOn avec scan d’étiquettes Vivino.",
          "en": "77 bottles in two zones (5-10 °C and 10-18 °C), humidity management, 37 dB and the hOn app with Vivino label scanning.",
          "de": "77 Flaschen in zwei Zonen (5-10 °C und 10-18 °C), Feuchtigkeitsmanagement, 37 dB und hOn-App mit Vivino-Etikett-Scan.",
          "es": "77 botellas en dos zonas (5-10 °C y 10-18 °C), gestión de la humedad, 37 dB y aplicación hOn con escaneo de etiquetas Vivino.",
          "it": "77 bottiglie in due zone (5-10 °C e 10-18 °C), gestione dell’umidità, 37 dB e app hOn con scansione delle etichette Vivino.",
          "nl": "77 flessen in twee zones (5-10 °C en 10-18 °C), vochtbeheer, 37 dB en de hOn-app met Vivino-etiketscan."
        }
      },
      {
        "model": "Liebherr WPbli 5231 GrandCru Selection",
        "role": {
          "fr": "Idéal pour une grande cave de garde",
          "en": "Best for large ageing collections",
          "de": "Ideal für große Lagersammlungen",
          "es": "Ideal para grandes colecciones de guarda",
          "it": "Ideale per grandi collezioni da invecchiamento",
          "nl": "Ideaal voor grote bewaarcollecties"
        },
        "why": {
          "fr": "229 bouteilles à température unique, VibrateSafe, HumidityControl et alarmes complètes (porte, température, coupure) via l’application SmartDevice.",
          "en": "229 bottles at a single temperature, VibrateSafe, HumidityControl and full alarms (door, temperature, power cut) via the SmartDevice app.",
          "de": "229 Flaschen bei einer Temperatur, VibrateSafe, HumidityControl und umfassende Alarme (Tür, Temperatur, Stromausfall) per SmartDevice-App.",
          "es": "229 botellas a una sola temperatura, VibrateSafe, HumidityControl y alarmas completas (puerta, temperatura, corte) con la app SmartDevice.",
          "it": "229 bottiglie a temperatura unica, VibrateSafe, HumidityControl e allarmi completi (porta, temperatura, blackout) con l’app SmartDevice.",
          "nl": "229 flessen op één temperatuur, VibrateSafe, HumidityControl en volledige alarmen (deur, temperatuur, stroomuitval) via de SmartDevice-app."
        }
      }
    ]
  },
  "climatiseur-mobile-vs-ventilateur": {
    "question": {
      "fr": "Climatiseur mobile ou ventilateur : quel modèle choisir en 2026 ?",
      "en": "Portable air conditioner or fan: which model to choose in 2026?",
      "de": "Mobiles Klimagerät oder Ventilator: welches Modell 2026?",
      "es": "Aire acondicionado portátil o ventilador: ¿qué modelo elegir en 2026?",
      "it": "Condizionatore portatile o ventilatore: quale modello scegliere nel 2026?",
      "nl": "Mobiele airco of ventilator: welk model kies je in 2026?"
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
          "nl": "Beste keuze voor hittegolven"
        },
        "why": {
          "fr": "Seul un climatiseur fait vraiment baisser la température : ce monobloc de 11 000 BTU/h, classé A+, se pilote par application, Alexa ou Google.",
          "en": "Only an air conditioner truly lowers the temperature: this 11,000 BTU/h, A+ rated monobloc can be run from an app, Alexa or Google.",
          "de": "Nur eine Klimaanlage senkt die Temperatur wirklich: Dieses Monoblock-Gerät mit 11.000 BTU/h und Klasse A+ lässt sich per App, Alexa oder Google steuern.",
          "es": "Solo un aire acondicionado baja de verdad la temperatura: este monobloque de 11.000 BTU/h y clase A+ se controla por app, Alexa o Google.",
          "it": "Solo un climatizzatore abbassa davvero la temperatura: questo monoblocco da 11.000 BTU/h in classe A+ si controlla da app, Alexa o Google.",
          "nl": "Alleen een airco verlaagt echt de temperatuur: deze monoblock van 11.000 BTU/h met klasse A+ bedien je via app, Alexa of Google."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "Pour des étés modérés, ce ventilateur sur pied à moteur DC de 24 W reste discret, consomme très peu et se pilote par application, sans installation.",
          "en": "For moderate summers, this 24 W DC pedestal fan stays quiet, uses very little power and is app-controlled, with no installation needed.",
          "de": "Für gemäßigte Sommer: Dieser Standventilator mit 24-W-DC-Motor ist leise, sehr sparsam und per App steuerbar, ganz ohne Installation.",
          "es": "Para veranos moderados, este ventilador de pie con motor DC de 24 W es silencioso, consume muy poco y se controla por app, sin instalación.",
          "it": "Per estati moderate, questo ventilatore a piantana con motore DC da 24 W è silenzioso, consuma pochissimo e si controlla da app, senza installazione.",
          "nl": "Voor gematigde zomers is deze statiefventilator met DC-motor van 24 W stil, zeer zuinig en via de app te bedienen, zonder installatie."
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
          "nl": "Stilst voor de slaapkamer"
        },
        "why": {
          "fr": "Son compresseur reste dehors : il refroidit vraiment (12 000 BTU/h) avec un bruit intérieur annoncé dès 39 dB(A), et s'installe sans perçage.",
          "en": "Its compressor stays outside, so it truly cools (12,000 BTU/h) with indoor noise quoted from 39 dB(A), and installs without drilling.",
          "de": "Der Kompressor bleibt draußen: Es kühlt wirklich (12.000 BTU/h), innen ab 39 dB(A) laut Hersteller, und wird ohne Bohren montiert.",
          "es": "Su compresor queda fuera: enfría de verdad (12.000 BTU/h) con un ruido interior declarado desde 39 dB(A) y se instala sin taladrar.",
          "it": "Il compressore resta fuori: raffredda davvero (12.000 BTU/h) con rumore interno dichiarato da 39 dB(A) e si installa senza forare.",
          "nl": "De compressor blijft buiten: hij koelt echt (12.000 BTU/h) met binnen opgegeven vanaf 39 dB(A) en wordt zonder boren geplaatst."
        }
      }
    ]
  },
  "comparatif-airfryer-connecte-2026": {
    "question": {
      "fr": "Quel est le meilleur airfryer connecté WiFi en 2026 ?",
      "en": "What is the best connected WiFi air fryer in 2026?",
      "de": "Was ist die beste vernetzte WLAN-Heißluftfritteuse 2026?",
      "es": "¿Cuál es la mejor freidora de aire conectada WiFi en 2026?",
      "it": "Qual è la migliore friggitrice ad aria connessa WiFi nel 2026?",
      "nl": "Wat is de beste slimme wifi-airfryer in 2026?"
    },
    "picks": [
      {
        "model": "Philips Airfryer Combi XXL Connecté - 8.3L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste algemene keuze"
        },
        "why": {
          "fr": "8,3 L, 22 modes de cuisson, sonde de température intégrée et application HomeID qui envoie les réglages des recettes à l’appareil.",
          "en": "8.3 L, 22 cooking functions, a built-in food thermometer and the HomeID app, which sends recipe settings to the appliance.",
          "de": "8,3 L, 22 Garfunktionen, integriertes Speisethermometer und HomeID-App, die Rezepteinstellungen an das Gerät schickt.",
          "es": "8,3 L, 22 funciones, sonda de temperatura integrada y app HomeID, que envía los ajustes de las recetas al aparato.",
          "it": "8,3 L, 22 funzioni, sonda di temperatura integrata e app HomeID, che invia le impostazioni delle ricette all’apparecchio.",
          "nl": "8,3 L, 22 functies, ingebouwde kernthermometer en de HomeID-app, die receptinstellingen naar het apparaat stuurt."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Prix d’entrée de gamme, application Xiaomi Home avec plus de 100 recettes, programmation 24 h, fenêtre de contrôle et Google Assistant.",
          "en": "Entry-level price, Xiaomi Home app with 100+ recipes, 24-hour scheduling, a viewing window and Google Assistant support.",
          "de": "Einstiegspreis, Xiaomi-Home-App mit über 100 Rezepten, 24-Stunden-Zeitvorwahl, Sichtfenster und Google Assistant.",
          "es": "Precio de entrada, app Xiaomi Home con más de 100 recetas, programación de 24 h, ventana de control y Google Assistant.",
          "it": "Prezzo d’ingresso, app Xiaomi Home con oltre 100 ricette, programmazione 24 ore, finestra di controllo e Google Assistant.",
          "nl": "Instapprijs, Xiaomi Home-app met meer dan 100 recepten, 24 uur uitgestelde start, kijkvenster en Google Assistant."
        }
      },
      {
        "model": "Cosori Dual Blaze Smart Air Fryer - 6.4L",
        "role": {
          "fr": "Meilleur pour une famille de 4",
          "en": "Best for a family of four",
          "de": "Beste Wahl für vier Personen",
          "es": "Mejor para una familia de cuatro",
          "it": "Migliore per una famiglia di quattro",
          "nl": "Beste voor een gezin van vier"
        },
        "why": {
          "fr": "Double résistance pour une cuisson homogène, 6,4 L pour 4 à 6 personnes, application VeSync et commande vocale Alexa ou Google.",
          "en": "Dual heating elements for even cooking, 6.4 L for 4 to 6 people, the VeSync app and Alexa or Google voice control.",
          "de": "Zwei Heizelemente für gleichmäßiges Garen, 6,4 L für 4 bis 6 Personen, VeSync-App und Sprachsteuerung per Alexa oder Google.",
          "es": "Doble resistencia para una cocción uniforme, 6,4 L para 4 a 6 personas, app VeSync y control por voz con Alexa o Google.",
          "it": "Doppia resistenza per una cottura uniforme, 6,4 L per 4-6 persone, app VeSync e controllo vocale con Alexa o Google.",
          "nl": "Twee verwarmingselementen voor gelijkmatig garen, 6,4 L voor 4 tot 6 personen, VeSync-app en spraakbediening via Alexa of Google."
        }
      }
    ]
  },
  "comparatif-camera-surveillance-exterieure": {
    "question": {
      "fr": "Quelle est la meilleure caméra de surveillance extérieure sans abonnement en 2026 ?",
      "en": "What is the best outdoor security camera without a subscription in 2026?",
      "de": "Welche ist die beste Außenkamera ohne Abo 2026?",
      "es": "¿Cuál es la mejor cámara de vigilancia exterior sin suscripción en 2026?",
      "it": "Qual è la migliore telecamera di sorveglianza esterna senza abbonamento nel 2026?",
      "nl": "Wat is de beste buitencamera zonder abonnement in 2026?"
    },
    "picks": [
      {
        "model": "eufyCam S3 Pro",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Vidéo 4K, vision nocturne couleur, solaire intégré et stockage local sur la HomeBase S380, extensible jusqu’à 16 To, sans frais mensuels.",
          "en": "4K video, colour night vision, built-in solar and local storage on the HomeBase S380, expandable to 16 TB, with no monthly fees.",
          "de": "4K-Video, Farb-Nachtsicht, integriertes Solar und lokaler Speicher auf der HomeBase S380, bis 16 TB erweiterbar, ohne monatliche Kosten.",
          "es": "Vídeo 4K, visión nocturna en color, solar integrado y almacenamiento local en la HomeBase S380, ampliable a 16 TB, sin cuotas mensuales.",
          "it": "Video 4K, visione notturna a colori, solare integrato e archiviazione locale sulla HomeBase S380, espandibile a 16 TB, senza costi mensili.",
          "nl": "4K-video, nachtzicht in kleur, ingebouwd zonnepaneel en lokale opslag op de HomeBase S380, uitbreidbaar tot 16 TB, zonder maandkosten."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Caméra 2K motorisée qui couvre une cour entière depuis un seul point, avec suivi des mouvements et microSD jusqu’à 512 Go.",
          "en": "A motorised 2K camera that covers a whole yard from one spot, with motion tracking and microSD up to 512 GB.",
          "de": "Motorisierte 2K-Kamera, die einen ganzen Hof von einem Punkt aus abdeckt, mit Bewegungsverfolgung und microSD bis 512 GB.",
          "es": "Cámara 2K motorizada que cubre un patio entero desde un solo punto, con seguimiento de movimiento y microSD de hasta 512 GB.",
          "it": "Telecamera 2K motorizzata che copre un intero cortile da un solo punto, con tracciamento del movimento e microSD fino a 512 GB.",
          "nl": "Gemotoriseerde 2K-camera die een hele binnenplaats vanaf één punt afdekt, met bewegingsvolging en microSD tot 512 GB."
        }
      },
      {
        "model": "Reolink RLC-833A",
        "role": {
          "fr": "Meilleure option filaire PoE",
          "en": "Best wired PoE option",
          "de": "Beste kabelgebundene PoE-Lösung",
          "es": "Mejor opción cableada PoE",
          "it": "Migliore opzione cablata PoE",
          "nl": "Beste bedrade PoE-optie"
        },
        "why": {
          "fr": "4K avec zoom optique 3x, alimentation et données par un seul câble Ethernet, et enregistrement continu possible sur un NVR Reolink.",
          "en": "4K with 3x optical zoom, power and data over a single Ethernet cable, and continuous recording on a Reolink NVR.",
          "de": "4K mit 3-fach optischem Zoom, Strom und Daten über ein Netzwerkkabel und Daueraufzeichnung auf einem Reolink-NVR.",
          "es": "4K con zoom óptico 3x, corriente y datos por un solo cable Ethernet y grabación continua en un NVR de Reolink.",
          "it": "4K con zoom ottico 3x, corrente e dati su un solo cavo Ethernet e registrazione continua su un NVR Reolink.",
          "nl": "4K met 3x optische zoom, stroom en data via één netwerkkabel en continue opname op een Reolink-NVR."
        }
      }
    ]
  },
  "comparatif-multicuiseur-connecte": {
    "question": {
      "fr": "Quel est le meilleur multicuiseur connecté en 2026 ?",
      "en": "What is the best smart multicooker in 2026?",
      "de": "Welcher ist der beste vernetzte Multikocher 2026?",
      "es": "¿Cuál es la mejor olla multifunción conectada en 2026?",
      "it": "Qual è il miglior multicooker connesso nel 2026?",
      "nl": "Wat is de beste slimme multicooker in 2026?"
    },
    "picks": [
      {
        "model": "Moulinex Cookeo Touch WiFi - 6L",
        "role": {
          "fr": "Meilleur choix connecté",
          "en": "Best connected choice",
          "de": "Beste vernetzte Wahl",
          "es": "Mejor opción conectada",
          "it": "Migliore scelta connessa",
          "nl": "Beste verbonden keuze"
        },
        "why": {
          "fr": "Vraiment connecté en Wi-Fi : 6 L, 13 programmes, écran tactile qui guide chaque recette et nouvelles recettes via l’application Moulinex.",
          "en": "Genuinely Wi-Fi connected: 6 L, 13 programmes, a touchscreen that guides every recipe and new recipes through the Moulinex app.",
          "de": "Wirklich per WLAN vernetzt: 6 L, 13 Programme, Touchscreen mit geführten Rezepten und neue Rezepte über die Moulinex-App.",
          "es": "Conectada de verdad por wifi: 6 L, 13 programas, pantalla táctil que guía cada receta y recetas nuevas con la app de Moulinex.",
          "it": "Davvero connesso via Wi-Fi: 6 L, 13 programmi, touchscreen che guida ogni ricetta e nuove ricette tramite l’app Moulinex.",
          "nl": "Echt verbonden via wifi: 6 L, 13 programma’s, een touchscreen dat elk recept begeleidt en nieuwe recepten via de Moulinex-app."
        }
      },
      {
        "model": "Ninja Foodi MAX 15-en-1 SmartLid OP500EU - 7.5L",
        "role": {
          "fr": "Le plus polyvalent (non connecté)",
          "en": "Most versatile (not connected)",
          "de": "Am vielseitigsten (nicht vernetzt)",
          "es": "La más versátil (sin conexión)",
          "it": "Il più versatile (non connesso)",
          "nl": "Veelzijdigste (niet verbonden)"
        },
        "why": {
          "fr": "Autocuiseur et airfryer sous un seul couvercle, 7,5 L pour les grandes familles. Attention : ni Wi-Fi ni application.",
          "en": "Pressure cooker and air fryer under one lid, 7.5 L for large families. Note: no Wi-Fi and no app.",
          "de": "Schnellkochtopf und Heißluftfritteuse unter einem Deckel, 7,5 L für große Familien. Achtung: kein WLAN und keine App.",
          "es": "Olla a presión y freidora de aire bajo una sola tapa, 7,5 L para familias numerosas. Ojo: sin wifi ni app.",
          "it": "Pentola a pressione e friggitrice ad aria sotto un unico coperchio, 7,5 L per famiglie numerose. Attenzione: niente Wi-Fi né app.",
          "nl": "Snelkookpan en airfryer onder één deksel, 7,5 L voor grote gezinnen. Let op: geen wifi en geen app."
        }
      },
      {
        "model": "Instant Pot Duo Plus WhisperQuiet - 5.7L",
        "role": {
          "fr": "Meilleur rapport qualité-prix (non connecté)",
          "en": "Best value (not connected)",
          "de": "Bestes Preis-Leistungs-Verhältnis (nicht vernetzt)",
          "es": "Mejor relación calidad-precio (sin conexión)",
          "it": "Miglior rapporto qualità-prezzo (non connesso)",
          "nl": "Beste prijs-kwaliteit (niet verbonden)"
        },
        "why": {
          "fr": "Multicuiseur 9-en-1 simple et fiable, cuve inox et évacuation de vapeur silencieuse. Pas de Wi-Fi ni d’application.",
          "en": "A simple, reliable 9-in-1 multicooker with a stainless steel pot and quiet steam release. No Wi-Fi and no app.",
          "de": "Einfacher, zuverlässiger 9-in-1-Multikocher mit Edelstahltopf und leisem Dampfablass. Kein WLAN und keine App.",
          "es": "Olla 9 en 1 sencilla y fiable, con cubeta de acero inoxidable y salida de vapor silenciosa. Sin wifi ni app.",
          "it": "Multicooker 9-in-1 semplice e affidabile, con vasca inox e sfiato del vapore silenzioso. Niente Wi-Fi né app.",
          "nl": "Eenvoudige, betrouwbare 9-in-1-multicooker met rvs-pan en stille stoomafvoer. Geen wifi en geen app."
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
      "nl": "Wat is de beste luchtreiniger voor allergie in 2026?"
    },
    "picks": [
      {
        "model": "Levoit Core 400S",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Filtre HEPA, CADR annoncé de 400 m³/h, capteur laser PM2.5 et mode nuit : assez polyvalent pour un séjour le jour et une chambre la nuit.",
          "en": "HEPA filter, a claimed 400 m³/h CADR, a laser PM2.5 sensor and sleep mode: versatile enough for a living room by day and a bedroom at night.",
          "de": "HEPA-Filter, angegebener CADR von 400 m³/h, Laser-PM2,5-Sensor und Schlafmodus: vielseitig für Wohnzimmer am Tag und Schlafzimmer nachts.",
          "es": "Filtro HEPA, CADR declarado de 400 m³/h, sensor láser PM2,5 y modo nocturno: versátil para el salón de día y el dormitorio de noche.",
          "it": "Filtro HEPA, CADR dichiarato di 400 m³/h, sensore laser PM2,5 e modalità notte: versatile per il soggiorno di giorno e la camera di notte.",
          "nl": "HEPA-filter, opgegeven CADR van 400 m³/u, laser-PM2,5-sensor en slaapstand: veelzijdig voor de woonkamer overdag en de slaapkamer 's nachts."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "Compact, avec filtre HEPA, CADR annoncé de 240 m³/h, mode auto et environ 22 dB en veille : l'essentiel pour purifier une chambre.",
          "en": "Compact, with a HEPA filter, a claimed 240 m³/h CADR, auto mode and about 22 dB in sleep mode: the essentials for a bedroom.",
          "de": "Kompakt, mit HEPA-Filter, angegebenem CADR von 240 m³/h, Automatik und rund 22 dB im Schlafmodus: das Wesentliche fürs Schlafzimmer.",
          "es": "Compacto, con filtro HEPA, CADR declarado de 240 m³/h, modo automático y unos 22 dB en modo nocturno: lo esencial para un dormitorio.",
          "it": "Compatto, con filtro HEPA, CADR dichiarato di 240 m³/h, modalità auto e circa 22 dB in modalità notte: l'essenziale per la camera.",
          "nl": "Compact, met HEPA-filter, opgegeven CADR van 240 m³/u, automatische stand en ongeveer 22 dB in slaapstand: het belangrijkste voor de slaapkamer."
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
          "nl": "Stilste om bij te slapen"
        },
        "why": {
          "fr": "Plage sonore annoncée de 18 à 46 dB, préfiltre lavable, capteur PM2.5 et application : idéal pour les dormeurs sensibles au bruit.",
          "en": "A claimed 18 to 46 dB noise range, washable pre-filter, PM2.5 sensor and app: ideal for noise-sensitive sleepers.",
          "de": "Angegebener Geräuschbereich von 18 bis 46 dB, waschbarer Vorfilter, PM2,5-Sensor und App: ideal für geräuschempfindliche Schläfer.",
          "es": "Rango de ruido declarado de 18 a 46 dB, prefiltro lavable, sensor PM2,5 y app: ideal para quienes son sensibles al ruido al dormir.",
          "it": "Gamma di rumore dichiarata da 18 a 46 dB, prefiltro lavabile, sensore PM2,5 e app: ideale per chi dorme male con il rumore.",
          "nl": "Opgegeven geluidsbereik van 18 tot 46 dB, wasbaar voorfilter, PM2,5-sensor en app: ideaal voor slapers die gevoelig zijn voor geluid."
        }
      }
    ]
  },
  "comparatif-robot-aspirateur-laveur": {
    "question": {
      "fr": "Quel est le meilleur robot aspirateur laveur en 2026 ?",
      "en": "What is the best robot vacuum mop combo in 2026?",
      "de": "Welcher ist der beste Saugroboter mit Wischfunktion 2026?",
      "es": "¿Cuál es el mejor robot aspirador y fregasuelos en 2026?",
      "it": "Qual è il miglior robot aspirapolvere lavapavimenti nel 2026?",
      "nl": "Wat is de beste robotstofzuiger met dweilfunctie in 2026?"
    },
    "picks": [
      {
        "model": "Dreame X50 Ultra Complete",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "20 000 Pa annoncés, serpillère et brosse extensibles, lavage des serpillères à 80 °C et franchissement de seuils jusqu’à 6 cm.",
          "en": "Claimed 20,000 Pa, extending mop and side brush, 80 °C mop washing and the ability to climb thresholds up to 6 cm.",
          "de": "20.000 Pa laut Hersteller, ausfahrbarer Mopp und Seitenbürste, Moppwäsche mit 80 °C und Schwellen bis 6 cm.",
          "es": "20.000 Pa anunciados, mopa y cepillo lateral extensibles, lavado de mopas a 80 °C y umbrales de hasta 6 cm.",
          "it": "20.000 Pa dichiarati, panno e spazzola laterale estensibili, lavaggio dei panni a 80 °C e soglie fino a 6 cm.",
          "nl": "20.000 Pa volgens de fabrikant, uitschuifbare dweil en zijborstel, dweilreiniging op 80 °C en drempels tot 6 cm."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Une station complète avec lavage des serpillères à 65 °C, séchage et serpillère extensible, dans une gamme plus accessible.",
          "en": "A full dock with 65 °C mop washing, warm-air drying and an extending mop, in a more accessible tier.",
          "de": "Komplettstation mit Moppwäsche bei 65 °C, Warmlufttrocknung und ausfahrbarem Mopp in einer zugänglicheren Klasse.",
          "es": "Base completa con lavado de mopas a 65 °C, secado con aire caliente y mopa extensible, en una gama más accesible.",
          "it": "Stazione completa con lavaggio dei panni a 65 °C, asciugatura ad aria calda e panno estensibile, in una fascia più accessibile.",
          "nl": "Volledig station met dweilreiniging op 65 °C, drogen met warme lucht en een uitschuifbare dweil, in een toegankelijker segment."
        }
      },
      {
        "model": "Roborock Qrevo Curv 2 Flow",
        "role": {
          "fr": "Idéal pour les grands sols durs",
          "en": "Best for large hard floors",
          "de": "Ideal für große Hartböden",
          "es": "Ideal para grandes suelos duros",
          "it": "Ideale per grandi pavimenti duri",
          "nl": "Ideaal voor grote harde vloeren"
        },
        "why": {
          "fr": "Son rouleau SpiraFlow est arrosé d’eau propre et raclé en continu, efficace sur les taches collantes ; compatible Matter.",
          "en": "Its SpiraFlow roller is fed clean water and scraped continuously, effective on sticky spills; it also supports Matter.",
          "de": "Die SpiraFlow-Walze wird laufend mit Frischwasser versorgt und abgestreift, stark bei klebrigen Flecken; mit Matter.",
          "es": "Su rodillo SpiraFlow recibe agua limpia y se raspa en continuo, eficaz con manchas pegajosas; compatible con Matter.",
          "it": "Il rullo SpiraFlow riceve acqua pulita ed è raschiato in continuo, efficace sulle macchie appiccicose; compatibile Matter.",
          "nl": "De SpiraFlow-rol krijgt continu schoon water en wordt afgeschraapt, sterk bij plakkerige vlekken; met Matter."
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
      "nl": "Wat is de beste slimme stekker met energiemeting in 2026?"
    },
    "picks": [
      {
        "model": "TP-Link Tapo P115 Prise Connectée avec Suivi Conso",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Mini-prise 16 A / 3 680 W avec mesure en temps réel et historique, application Tapo claire et compatibilité Alexa et Google.",
          "en": "A 16 A / 3,680 W mini plug (EU) with live and historical monitoring, a clear Tapo app and Alexa and Google support.",
          "de": "Mini-Steckdose mit 16 A / 3.680 W, Echtzeitmessung mit Verlauf, übersichtlicher Tapo-App sowie Alexa und Google.",
          "es": "Mini enchufe de 16 A / 3.680 W con medición en tiempo real e historial, app Tapo clara y compatibilidad con Alexa y Google.",
          "it": "Mini presa da 16 A / 3.680 W con misura in tempo reale e storico, app Tapo chiara e compatibilità con Alexa e Google.",
          "nl": "Mini-stekker van 16 A / 3.680 W met realtime meting en geschiedenis, een overzichtelijke Tapo-app en Alexa en Google."
        }
      },
      {
        "model": "Meross MSS210P Prise Connectée HomeKit 16A (lot de 2)",
        "role": {
          "fr": "Alternative pour Apple Maison",
          "en": "Apple Home alternative",
          "de": "Alternative für Apple Home",
          "es": "Alternativa para Apple Casa",
          "it": "Alternativa per Apple Casa",
          "nl": "Alternatief voor Apple Woning"
        },
        "why": {
          "fr": "Prise 16 A avec mesure de consommation, pilotable depuis Apple Maison et Siri dans sa version HomeKit, ainsi qu’Alexa et Google.",
          "en": "A 16 A plug with energy monitoring that works with Apple Home and Siri in its HomeKit version, plus Alexa and Google.",
          "de": "16-A-Steckdose mit Verbrauchsmessung, in der HomeKit-Version über Apple Home und Siri sowie Alexa und Google steuerbar.",
          "es": "Enchufe de 16 A con medición de consumo, controlable desde Apple Casa y Siri en su versión HomeKit, además de Alexa y Google.",
          "it": "Presa da 16 A con misura dei consumi, controllabile da Apple Casa e Siri nella versione HomeKit, oltre che con Alexa e Google.",
          "nl": "16 A-stekker met energiemeting, te bedienen via Apple Woning en Siri in de HomeKit-versie, plus Alexa en Google."
        }
      },
      {
        "model": "TP-Link Tapo P100 Pack de 4 Prises Connectées",
        "role": {
          "fr": "Pour automatiser sans mesure",
          "en": "Automation without monitoring",
          "de": "Automatisieren ohne Messung",
          "es": "Para automatizar sin medir",
          "it": "Per automatizzare senza misurare",
          "nl": "Automatiseren zonder meten"
        },
        "why": {
          "fr": "Sans mesure d’énergie et limité à 10 A, ce pack complète une P115 pour programmer lampes, chargeurs et petits appareils.",
          "en": "With no energy monitoring and a 10 A limit, this pack complements a P115 for scheduling lamps, chargers and small devices.",
          "de": "Ohne Energiemessung und auf 10 A begrenzt ergänzt dieses Pack eine P115, um Lampen, Ladegeräte und Kleingeräte zu planen.",
          "es": "Sin medición de energía y limitado a 10 A, este pack complementa un P115 para programar lámparas, cargadores y aparatos pequeños.",
          "it": "Senza misura dei consumi e limitato a 10 A, questo pack completa una P115 per programmare lampade, caricatori e piccoli apparecchi.",
          "nl": "Zonder energiemeting en beperkt tot 10 A vult dit pack een P115 aan om lampen, laders en kleine apparaten in te plannen."
        }
      }
    ]
  },
  "cookeo-vs-thermomix-vs-airfryer": {
    "question": {
      "fr": "Cookeo, Thermomix ou airfryer : lequel choisir en 2026 ?",
      "en": "Multicooker, Thermomix or air fryer: which should you choose in 2026?",
      "de": "Multikocher, Thermomix oder Airfryer: Was sollten Sie 2026 wählen?",
      "es": "Olla programable, Thermomix o freidora de aire: ¿cuál elegir en 2026?",
      "it": "Multicooker, Bimby o friggitrice ad aria: quale scegliere nel 2026?",
      "nl": "Multicooker, Thermomix of airfryer: welke kies je in 2026?"
    },
    "picks": [
      {
        "model": "Moulinex Cookeo Touch WiFi - 6L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Cuve de 6 L, cuisson sous pression et 250 recettes guidées : le plus utile au quotidien pour préparer vite des plats complets en famille.",
          "en": "A 6 L pot, pressure cooking and 250 guided recipes: the most useful everyday choice for cooking complete family meals quickly.",
          "de": "6-Liter-Topf, Druckgaren und 250 geführte Rezepte: im Familienalltag am nützlichsten, um schnell komplette Mahlzeiten zu kochen.",
          "es": "Cubeta de 6 L, cocción a presión y 250 recetas guiadas: la más útil a diario para preparar rápido platos completos en familia.",
          "it": "Vasca da 6 L, cottura a pressione e 250 ricette guidate: il più utile ogni giorno per preparare in fretta piatti completi in famiglia.",
          "nl": "Pan van 6 liter, drukkoken en 250 begeleide recepten: het nuttigst in het dagelijks leven om snel complete gezinsmaaltijden te maken."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "6,2 L, 14 modes et application NutriU : un airfryer simple pour le croustillant au quotidien, idéal en complément d’un multicuiseur.",
          "en": "6.2 L, 14 modes and the NutriU app: a simple air fryer for everyday crispy food, ideal alongside a multicooker.",
          "de": "6,2 Liter, 14 Modi und NutriU-App: ein einfacher Airfryer für Knuspriges im Alltag, ideal als Ergänzung zum Multikocher.",
          "es": "6,2 L, 14 modos y app NutriU: una freidora sencilla para el crujiente diario, ideal como complemento de una olla programable.",
          "it": "6,2 L, 14 modalità e app NutriU: una friggitrice semplice per il croccante quotidiano, ideale accanto a un multicooker.",
          "nl": "6,2 liter, 14 standen en de NutriU-app: een eenvoudige airfryer voor dagelijks krokant, ideaal naast een multicooker."
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
          "nl": "Ideaal voor grote gezinnen"
        },
        "why": {
          "fr": "Deux tiroirs superposés de 4,75 L pour cuire plat et accompagnement en même temps, avec une emprise réduite sur le plan de travail.",
          "en": "Two stacked 4.75 L drawers cook a main and a side at the same time while taking up less worktop width.",
          "de": "Zwei übereinanderliegende 4,75-Liter-Schubladen garen Hauptgericht und Beilage gleichzeitig und brauchen weniger Platz in der Breite.",
          "es": "Dos cajones superpuestos de 4,75 L cocinan plato principal y guarnición a la vez ocupando menos ancho en la encimera.",
          "it": "Due cassetti sovrapposti da 4,75 L cuociono piatto principale e contorno insieme, occupando meno larghezza sul piano di lavoro.",
          "nl": "Twee gestapelde lades van 4,75 liter garen hoofd- en bijgerecht tegelijk en nemen minder breedte in op het aanrecht."
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
      "it": "Quali sono i migliori apparecchi per la cucina connessa nel 2026?",
      "nl": "Wat zijn de beste slimme keukenapparaten in 2026?"
    },
    "picks": [
      {
        "model": "Moulinex Cookeo Touch WiFi - 6L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Multicuiseur sous pression de 6 L avec 13 modes, écran tactile et recettes guidées téléchargeables en Wi-Fi : le plus utile au quotidien.",
          "en": "A 6 L pressure multicooker with 13 modes, a touchscreen and guided recipes downloaded over Wi-Fi: the most useful for everyday meals.",
          "de": "6-Liter-Schnellkoch-Multikocher mit 13 Modi, Touchscreen und geführten Rezepten per WLAN: im Alltag am nützlichsten.",
          "es": "Olla a presión de 6 l con 13 modos, pantalla táctil y recetas guiadas descargables por wifi: la más útil en el día a día.",
          "it": "Multicooker a pressione da 6 l con 13 modalità, touchscreen e ricette guidate scaricabili via Wi-Fi: il più utile ogni giorno.",
          "nl": "Snelkook-multicooker van 6 l met 13 standen, touchscreen en begeleide recepten via wifi: het nuttigst in het dagelijks leven."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "Mini prise Wi-Fi sans hub qui pilote vos appareils existants et mesure leur consommation : l'entrée la plus simple dans la cuisine connectée.",
          "en": "A hub-free mini Wi-Fi plug that controls your existing appliances and measures their consumption: the simplest way into a smart kitchen.",
          "de": "WLAN-Mini-Steckdose ohne Hub, die vorhandene Geräte steuert und ihren Verbrauch misst: der einfachste Einstieg in die smarte Küche.",
          "es": "Mini enchufe wifi sin hub que controla tus aparatos actuales y mide su consumo: la entrada más sencilla a la cocina conectada.",
          "it": "Mini presa Wi-Fi senza hub che comanda gli apparecchi che hai già e ne misura i consumi: l'ingresso più semplice nella cucina connessa.",
          "nl": "Mini-wifistekker zonder hub die je bestaande apparaten bedient en hun verbruik meet: de eenvoudigste instap in de slimme keuken."
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
          "nl": "Ideaal voor vlees"
        },
        "why": {
          "fr": "Sonde entièrement sans fil à double capteur, répéteur Bluetooth intégré au support et cuisson guidée dans l'application.",
          "en": "A fully wireless dual-sensor probe with a Bluetooth repeater built into its block and guided cooking in the app.",
          "de": "Komplett kabelloser Fühler mit Doppelsensor, Bluetooth-Repeater in der Ladestation und geführtem Garen in der App.",
          "es": "Sonda totalmente inalámbrica con doble sensor, repetidor Bluetooth en la base y cocción guiada en la app.",
          "it": "Sonda completamente senza fili a doppio sensore, ripetitore Bluetooth nella base e cottura guidata nell'app.",
          "nl": "Volledig draadloze sonde met dubbele sensor, Bluetooth-repeater in het oplaadblok en begeleid garen in de app."
        }
      }
    ]
  },
  "guide-domotique-economie-energie-2026": {
    "question": {
      "fr": "Quel est le meilleur équipement domotique pour économiser l’énergie en 2026 ?",
      "en": "What is the best smart home equipment to save energy in 2026?",
      "de": "Welche Smart-Home-Geräte sparen 2026 am besten Energie?",
      "es": "¿Cuál es el mejor equipo domótico para ahorrar energía en 2026?",
      "it": "Qual è la migliore dotazione domotica per risparmiare energia nel 2026?",
      "nl": "Wat is de beste domotica om in 2026 energie te besparen?"
    },
    "picks": [
      {
        "model": "tado Smart Radiator Thermostat X Starter Kit",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Il agit sur le chauffage, premier poste de consommation : régulation pièce par pièce, Thread et Matter via le Bridge X, pose sans outil.",
          "en": "It targets heating, the biggest consumption item: room-by-room control, Thread and Matter via the Bridge X, tool-free fitting.",
          "de": "Es setzt bei der Heizung an, dem größten Verbrauchsposten: Regelung pro Raum, Thread und Matter über die Bridge X, Montage ohne Werkzeug.",
          "es": "Actúa sobre la calefacción, la mayor partida de consumo: regulación por habitación, Thread y Matter mediante el Bridge X, montaje sin herramientas.",
          "it": "Agisce sul riscaldamento, la prima voce di consumo: regolazione stanza per stanza, Thread e Matter tramite il Bridge X, montaggio senza attrezzi.",
          "nl": "Pakt de verwarming aan, de grootste verbruikspost: regeling per kamer, Thread en Matter via de Bridge X, montage zonder gereedschap."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Prise Wi-Fi certifiée Matter qui mesure la consommation en kWh de chaque appareil : le moyen le plus simple de repérer les gaspillages.",
          "en": "A Matter-certified Wi-Fi plug that meters each appliance in kWh: the simplest way to find where energy is wasted.",
          "de": "Matter-zertifizierte WLAN-Steckdose, die jedes Gerät in kWh misst: der einfachste Weg, Verschwendung aufzuspüren.",
          "es": "Enchufe Wi-Fi con certificación Matter que mide en kWh cada aparato: la forma más sencilla de detectar despilfarros.",
          "it": "Presa Wi-Fi certificata Matter che misura in kWh ogni apparecchio: il modo più semplice per scovare gli sprechi.",
          "nl": "Matter-gecertificeerde wifi-stekker die elk apparaat in kWh meet: de eenvoudigste manier om verspilling op te sporen."
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
          "nl": "Ideaal voor de hele woning"
        },
        "why": {
          "fr": "Compteur sur rail DIN mono ou triphasé, mesure bidirectionnelle utile avec le solaire ; installation par un électricien qualifié.",
          "en": "Single- or three-phase DIN-rail meter with two-way metering, useful with solar; installation by a qualified electrician.",
          "de": "Ein- oder dreiphasiger Hutschienenzähler mit Messung in beide Richtungen, ideal mit Solaranlage; Einbau durch eine Elektrofachkraft.",
          "es": "Medidor para carril DIN monofásico o trifásico, con medición bidireccional útil con placas solares; instalación por un electricista cualificado.",
          "it": "Misuratore su guida DIN monofase o trifase, con misura bidirezionale utile con il fotovoltaico; installazione a cura di un elettricista qualificato.",
          "nl": "Eenfase- of driefasemeter voor de DIN-rail met meting in twee richtingen, handig bij zonnepanelen; installatie door een erkende installateur."
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
      "nl": "Wat is de beste luchtreiniger in 2026?"
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "Filtre HEPA H13, CADR d'environ 240 m³/h, Wi-Fi et compatibilité Alexa et Google, avec des filtres abordables : idéal pour une chambre.",
          "en": "H13 HEPA filter, a CADR of around 240 m³/h, Wi-Fi and Alexa and Google support, with affordable filters: ideal for a bedroom.",
          "de": "HEPA-H13-Filter, CADR von rund 240 m³/h, WLAN sowie Alexa- und Google-Unterstützung mit günstigen Filtern: ideal fürs Schlafzimmer.",
          "es": "Filtro HEPA H13, CADR de unos 240 m³/h, wifi y compatibilidad con Alexa y Google, con filtros asequibles: ideal para un dormitorio.",
          "it": "Filtro HEPA H13, CADR di circa 240 m³/h, Wi-Fi e compatibilità con Alexa e Google, con filtri economici: ideale per una camera.",
          "nl": "HEPA H13-filter, CADR rond 240 m³/h, wifi en Alexa- en Google-ondersteuning, met betaalbare filters: ideaal voor een slaapkamer."
        }
      },
      {
        "model": "Xiaomi Smart Air Purifier 4",
        "role": {
          "fr": "Meilleur compromis connecté",
          "en": "Best smart mid-range",
          "de": "Bester vernetzter Mittelklasse-Kompromiss",
          "es": "Mejor compromiso conectado",
          "it": "Miglior compromesso connesso",
          "nl": "Beste slimme middenklasser"
        },
        "why": {
          "fr": "Un CADR de 400 m³/h, un capteur PM2.5 laser et un écran OLED, avec l'application Mi Home et la compatibilité Alexa et Google.",
          "en": "A 400 m³/h CADR, a laser PM2.5 sensor and an OLED display, with the Mi Home app and Alexa and Google support.",
          "de": "CADR von 400 m³/h, Laser-PM2.5-Sensor und OLED-Display, dazu die Mi-Home-App sowie Alexa- und Google-Unterstützung.",
          "es": "CADR de 400 m³/h, sensor láser PM2.5 y pantalla OLED, con la app Mi Home y compatibilidad con Alexa y Google.",
          "it": "CADR di 400 m³/h, sensore laser PM2.5 e display OLED, con app Mi Home e compatibilità con Alexa e Google.",
          "nl": "CADR van 400 m³/h, laser-PM2.5-sensor en OLED-scherm, met de Mi Home-app en Alexa- en Google-ondersteuning."
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
          "nl": "Ideaal voor grote ruimtes"
        },
        "why": {
          "fr": "Annoncé jusqu'à 98 m² avec un CADR de 380 m³/h, il ajuste sa vitesse grâce au capteur AeraSense et descend à 15 dB en mode veille.",
          "en": "Rated for up to 98 m² with a 380 m³/h CADR, it adjusts its speed via the AeraSense sensor and drops to 15 dB in sleep mode.",
          "de": "Für bis zu 98 m² mit 380 m³/h CADR ausgelegt, passt er die Stufe per AeraSense-Sensor an und erreicht im Schlafmodus 15 dB.",
          "es": "Indicado hasta 98 m² con un CADR de 380 m³/h, ajusta su velocidad con el sensor AeraSense y baja a 15 dB en modo reposo.",
          "it": "Indicato fino a 98 m² con CADR di 380 m³/h, regola la velocità tramite il sensore AeraSense e scende a 15 dB in modalità sleep.",
          "nl": "Geschikt tot 98 m² met een CADR van 380 m³/h, past zijn stand aan via de AeraSense-sensor en haalt 15 dB in slaapmodus."
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
      "nl": "Wat is de beste robotstofzuiger in 2026?"
    },
    "picks": [
      {
        "model": "Roborock Qrevo Curv",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore scelta assoluta",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "18 500 Pa annoncés, LiDAR, serpillères rotatives qui atteignent les plinthes et station qui vide, lave à l’eau chaude et sèche.",
          "en": "Rated at 18,500 Pa, with LiDAR, rotating mops that reach the skirting boards and a dock that empties, hot-washes and dries.",
          "de": "Laut Hersteller 18.500 Pa, LiDAR, rotierende Mopps bis an die Sockelleisten und eine Station, die entleert, warm wäscht und trocknet.",
          "es": "18.500 Pa anunciados, LiDAR, mopas giratorias que llegan a los rodapiés y base que vacía, lava con agua caliente y seca.",
          "it": "18.500 Pa dichiarati, LiDAR, panni rotanti che arrivano ai battiscopa e base che svuota, lava con acqua calda e asciuga.",
          "nl": "Opgegeven 18.500 Pa, LiDAR, roterende dweilen tot aan de plinten en een station dat leegt, warm wast en droogt."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "L’essentiel en entrée de gamme : navigation LiDAR, 10 000 Pa annoncés, brosse anti-emmêlement et vidage automatique (sac de 2,7 L).",
          "en": "The essentials at entry level: LiDAR navigation, a quoted 10,000 Pa, an anti-tangle brush and auto-emptying into a 2.7 L bag.",
          "de": "Das Wesentliche im Einstieg: LiDAR-Navigation, angegebene 10.000 Pa, verhedderungsarme Bürste und Absaugstation mit 2,7-L-Beutel.",
          "es": "Lo esencial en gama de entrada: navegación LiDAR, 10.000 Pa anunciados, cepillo antienredos y autovaciado en bolsa de 2,7 L.",
          "it": "L’essenziale in fascia d’ingresso: navigazione LiDAR, 10.000 Pa dichiarati, spazzola anti-groviglio e svuotamento in sacchetto da 2,7 L.",
          "nl": "De basis in het instapsegment: LiDAR-navigatie, opgegeven 10.000 Pa, antiklitborstel en automatisch legen in een zak van 2,7 l."
        }
      },
      {
        "model": "Dreame X50 Ultra Complete",
        "role": {
          "fr": "Idéal animaux et seuils",
          "en": "Best for pets and thresholds",
          "de": "Ideal für Haustiere und Schwellen",
          "es": "Ideal para mascotas y umbrales",
          "it": "Ideale per animali e soglie",
          "nl": "Ideaal voor huisdieren en drempels"
        },
        "why": {
          "fr": "20 000 Pa annoncés, double brosse anti-emmêlement et système ProLeap qui franchit jusqu’à 6 cm selon le fabricant.",
          "en": "Rated at 20,000 Pa, with an anti-tangle twin brush and a ProLeap system that climbs up to 6 cm, according to the manufacturer.",
          "de": "Laut Hersteller 20.000 Pa, verhedderungsfreie Doppelbürste und ProLeap-System, das bis zu 6 cm hohe Hindernisse überwindet.",
          "es": "20.000 Pa anunciados, cepillo doble antienredos y sistema ProLeap que supera hasta 6 cm, según el fabricante.",
          "it": "20.000 Pa dichiarati, doppia spazzola anti-groviglio e sistema ProLeap che supera fino a 6 cm, secondo il produttore.",
          "nl": "Opgegeven 20.000 Pa, dubbele antiklitborstel en een ProLeap-systeem dat volgens de fabrikant tot 6 cm overwint."
        }
      }
    ]
  },
  "histoire-evolution-airfryer": {
    "question": {
      "fr": "Quel airfryer choisir en 2026, après 15 ans d’évolution ?",
      "en": "Which air fryer should you choose in 2026, after 15 years of evolution?",
      "de": "Welche Heißluftfritteuse sollte man 2026 nach 15 Jahren Entwicklung wählen?",
      "es": "¿Qué freidora de aire elegir en 2026, tras 15 años de evolución?",
      "it": "Quale friggitrice ad aria scegliere nel 2026, dopo 15 anni di evoluzione?",
      "nl": "Welke airfryer kies je in 2026, na 15 jaar evolutie?"
    },
    "picks": [
      {
        "model": "Ninja Foodi FlexDrawer 10.4L Double Zone",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "L’aboutissement de la double zone lancée par Ninja en 2020 : deux zones indépendantes ou un grand tiroir de 10,4 L pour un poulet entier.",
          "en": "The culmination of the dual zone Ninja launched in 2020: two independent zones or one large 10.4 L drawer for a whole chicken.",
          "de": "Die Weiterentwicklung der Dual-Zone-Idee von Ninja aus 2020: zwei unabhängige Zonen oder eine große 10,4-L-Schublade für ein ganzes Hähnchen.",
          "es": "La culminación de la doble zona que Ninja lanzó en 2020: dos zonas independientes o un gran cajón de 10,4 L para un pollo entero.",
          "it": "Il punto d’arrivo della doppia zona lanciata da Ninja nel 2020: due zone indipendenti o un grande cassetto da 10,4 L per un pollo intero.",
          "nl": "Het sluitstuk van de dual zone die Ninja in 2020 lanceerde: twee onafhankelijke zones of één grote lade van 10,4 L voor een hele kip."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "L’héritier direct du premier Airfryer de 2010 : un panier unique de 6,2 L, la technologie Rapid Air et une utilisation très simple pour 2 à 4 personnes.",
          "en": "The direct heir of the first 2010 Airfryer: a single 6.2 L basket, Rapid Air technology and very simple use for 2 to 4 people.",
          "de": "Der direkte Erbe des ersten Airfryers von 2010: ein 6,2-L-Einzelkorb, Rapid-Air-Technologie und sehr einfache Bedienung für 2 bis 4 Personen.",
          "es": "La heredera directa de la primera Airfryer de 2010: una cesta única de 6,2 L, tecnología Rapid Air y un uso muy sencillo para 2 a 4 personas.",
          "it": "L’erede diretta della prima Airfryer del 2010: un cestello unico da 6,2 L, tecnologia Rapid Air e un uso semplicissimo per 2-4 persone.",
          "nl": "De directe erfgenaam van de eerste Airfryer uit 2010: één mand van 6,2 L, Rapid Air-technologie en heel eenvoudig gebruik voor 2 tot 4 personen."
        }
      },
      {
        "model": "Tefal ActiFry Genius XL 2in1 - 1.7kg",
        "role": {
          "fr": "Idéal pour les frites sans secouer",
          "en": "Best for chips without shaking",
          "de": "Ideal für Pommes ohne Schütteln",
          "es": "Ideal para patatas sin agitar",
          "it": "Ideale per patatine senza scuotere",
          "nl": "Ideaal voor friet zonder schudden"
        },
        "why": {
          "fr": "La descendante de l’ActiFry de 2006 : la pale remue les aliments seule et la grille supérieure permet de cuire sur deux niveaux.",
          "en": "The descendant of the 2006 ActiFry: the paddle stirs the food on its own and the upper grill tray lets you cook on two levels.",
          "de": "Der Nachfahre des ActiFry von 2006: Der Rührarm wendet das Gargut selbst, und der obere Grilleinsatz ermöglicht zwei Ebenen.",
          "es": "La descendiente de la ActiFry de 2006: la pala remueve sola los alimentos y la bandeja superior permite cocinar en dos niveles.",
          "it": "La discendente dell’ActiFry del 2006: la pala mescola da sola il cibo e la griglia superiore permette di cuocere su due livelli.",
          "nl": "De nazaat van de ActiFry uit 2006: de roerarm schept het eten zelf om en het bovenrooster maakt twee niveaus mogelijk."
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
      "nl": "Wat is de beste goedkope airfryer in 2026?"
    },
    "picks": [
      {
        "model": "Moulinex Easy Fry Max 5L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Le plus grand panier de l’entrée de gamme : 5 litres, 10 programmes et un écran tactile, assez pour une famille de trois ou quatre.",
          "en": "The largest basket at entry level: 5 litres, 10 programmes and a touchscreen, enough for a family of three or four.",
          "de": "Der größte Korb im Einstiegssegment: 5 Liter, 10 Programme und Touchscreen, genug für eine Familie mit drei oder vier Personen.",
          "es": "La cesta más grande de la gama de entrada: 5 litros, 10 programas y pantalla táctil, suficiente para una familia de tres o cuatro.",
          "it": "Il cestello più grande della fascia entry-level: 5 litri, 10 programmi e display touch, sufficiente per una famiglia di tre o quattro.",
          "nl": "De grootste mand in de instapklasse: 5 liter, 10 programma’s en een touchscreen, genoeg voor een gezin van drie of vier."
        }
      },
      {
        "model": "Xiaomi Smart Air Fryer Pro 4L",
        "role": {
          "fr": "Meilleur connecté petit budget",
          "en": "Best budget smart pick",
          "de": "Beste günstige vernetzte Wahl",
          "es": "Mejor conectada económica",
          "it": "Migliore connessa economica",
          "nl": "Beste betaalbare slimme keuze"
        },
        "why": {
          "fr": "Écran OLED, fenêtre de contrôle, 11 modes et application Xiaomi Home : des fonctions rares dans l’entrée de gamme.",
          "en": "OLED screen, viewing window, 11 modes and the Xiaomi Home app: features that are rare at entry level.",
          "de": "OLED-Display, Sichtfenster, 11 Modi und Xiaomi-Home-App: Funktionen, die im Einstiegssegment selten sind.",
          "es": "Pantalla OLED, ventana, 11 modos y app Xiaomi Home: funciones poco habituales en la gama de entrada.",
          "it": "Display OLED, finestra, 11 modalità e app Xiaomi Home: funzioni rare nella fascia entry-level.",
          "nl": "OLED-scherm, kijkvenster, 11 standen en de Xiaomi Home-app: functies die zeldzaam zijn in de instapklasse."
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
      "nl": "Ninja of Philips: welke airfryer kies je in 2026?"
    },
    "picks": [
      {
        "model": "Ninja Foodi FlexDrawer 10.4L Double Zone",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Ses 10,4 L se partagent en deux zones synchronisées ou en un seul grand tiroir MegaZone, idéal pour les familles de 4 personnes et plus.",
          "en": "Its 10.4 L splits into two synced zones or one large MegaZone drawer, ideal for families of four or more.",
          "de": "Die 10,4 L lassen sich in zwei synchronisierte Zonen oder eine große MegaZone-Schublade aufteilen, ideal für Familien ab vier Personen.",
          "es": "Sus 10,4 L se dividen en dos zonas sincronizadas o en un gran cajón MegaZone, ideal para familias de cuatro o más personas.",
          "it": "I suoi 10,4 L si dividono in due zone sincronizzate o in un unico grande cassetto MegaZone, ideale per famiglie da quattro persone in su.",
          "nl": "De 10,4 L is te verdelen in twee gesynchroniseerde zones of één grote MegaZone-lade, ideaal voor gezinnen van vier of meer."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Panier unique de 6,2 L, technologie Rapid Air et 14 modes de cuisson : simple et compact, il suffit aux foyers de 1 à 4 personnes.",
          "en": "A single 6.2 L basket, Rapid Air technology and 14 cooking modes: simple and compact, it is enough for households of one to four.",
          "de": "Einzelkorb mit 6,2 L, Rapid-Air-Technologie und 14 Garmodi: einfach und kompakt, ideal für Haushalte mit ein bis vier Personen.",
          "es": "Cesta única de 6,2 L, tecnología Rapid Air y 14 modos de cocción: sencilla y compacta, basta para hogares de una a cuatro personas.",
          "it": "Cestello unico da 6,2 L, tecnologia Rapid Air e 14 modalità di cottura: semplice e compatta, basta per nuclei da una a quattro persone.",
          "nl": "Eén mand van 6,2 L, Rapid Air-technologie en 14 bereidingswijzen: eenvoudig en compact, genoeg voor huishoudens van één tot vier personen."
        }
      },
      {
        "model": "Philips Airfryer Combi XXL Connecté - 8.3L",
        "role": {
          "fr": "Le plus connecté",
          "en": "Best connected model",
          "de": "Bestes vernetztes Modell",
          "es": "La más conectada",
          "it": "La più connessa",
          "nl": "Beste verbonden model"
        },
        "why": {
          "fr": "8,3 L, 22 fonctions, thermomètre à aliments intégré et pilotage Wi-Fi via l’application HomeID, pour ceux qui cuisinent un grand plat à la fois.",
          "en": "8.3 L, 22 functions, a built-in food thermometer and Wi-Fi control via the HomeID app, for those who cook one large dish at a time.",
          "de": "8,3 L, 22 Funktionen, integriertes Speisethermometer und WLAN-Steuerung per HomeID-App, für alle, die ein großes Gericht auf einmal zubereiten.",
          "es": "8,3 L, 22 funciones, termómetro de alimentos integrado y control wifi con la app HomeID, para quien cocina un plato grande cada vez.",
          "it": "8,3 L, 22 funzioni, termometro per alimenti integrato e controllo Wi-Fi tramite l’app HomeID, per chi cucina un grande piatto alla volta.",
          "nl": "8,3 L, 22 functies, ingebouwde voedselthermometer en wifi-bediening via de HomeID-app, voor wie één groot gerecht tegelijk bereidt."
        }
      }
    ]
  },
  "robot-cuiseur-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur robot cuiseur connecté en 2026 ?",
      "en": "What is the best connected cooking robot in 2026?",
      "de": "Welcher ist der beste vernetzte Küchenprozessor 2026?",
      "es": "¿Cuál es el mejor robot de cocina conectado en 2026?",
      "it": "Qual è il miglior robot da cucina connesso nel 2026?",
      "nl": "Wat is de beste verbonden keukenrobot in 2026?"
    },
    "picks": [
      {
        "model": "Moulinex i-Companion Touch XL",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Écran tactile, Wi-Fi, balance intégrée et bol de 4,5 L : l’alternative au Thermomix la plus complète, avec une application sans abonnement obligatoire.",
          "en": "Touchscreen, Wi-Fi, built-in scale and a 4.5 L bowl: the most complete Thermomix alternative, with a recipe app that needs no subscription.",
          "de": "Touchscreen, WLAN, integrierte Waage und 4,5-L-Topf: die vollständigste Thermomix-Alternative, mit Rezept-App ohne Abopflicht.",
          "es": "Pantalla táctil, Wi-Fi, báscula integrada y vaso de 4,5 L: la alternativa al Thermomix más completa, con app de recetas sin suscripción obligatoria.",
          "it": "Schermo touch, Wi-Fi, bilancia integrata e boccale da 4,5 L: l’alternativa al Thermomix più completa, con app di ricette senza abbonamento obbligatorio.",
          "nl": "Touchscreen, wifi, ingebouwde weegschaal en kom van 4,5 L: het meest complete Thermomix-alternatief, met recepten-app zonder verplicht abonnement."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "Wi-Fi, écran tactile 5 pouces, balance et bol de 3,3 L en entrée de gamme ; limité à 120 °C, il convient surtout aux soupes, sauces et vapeur.",
          "en": "Wi-Fi, 5-inch touchscreen, scale and 3.3 L bowl at entry level; capped at 120 °C, it suits soups, sauces and steaming best.",
          "de": "WLAN, 5-Zoll-Touchscreen, Waage und 3,3-L-Topf im Einstiegssegment; mit maximal 120 °C ideal für Suppen, Saucen und Dampfgaren.",
          "es": "Wi-Fi, pantalla táctil de 5 pulgadas, báscula y vaso de 3,3 L en gama de entrada; limitado a 120 °C, ideal para sopas, salsas y vapor.",
          "it": "Wi-Fi, schermo touch da 5 pollici, bilancia e boccale da 3,3 L in fascia d’ingresso; limitato a 120 °C, ideale per zuppe, salse e vapore.",
          "nl": "Wifi, touchscreen van 5 inch, weegschaal en kom van 3,3 L in het instapsegment; met maximaal 120 °C vooral voor soepen, sauzen en stomen."
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
          "nl": "Ideaal voor bakken en grote hoeveelheden"
        },
        "why": {
          "fr": "Bol de 6,7 L chauffé par induction de 20 à 180 °C et application Kenwood World : le choix des pâtissiers et des grandes familles.",
          "en": "A 6.7 L bowl heated by induction from 20 to 180 °C plus the Kenwood World app: the pick for keen bakers and large families.",
          "de": "6,7-L-Schüssel mit Induktion von 20 bis 180 °C und Kenwood-World-App: die Wahl für Backfans und große Familien.",
          "es": "Bol de 6,7 L calentado por inducción de 20 a 180 °C y app Kenwood World: la opción para reposteros y familias numerosas.",
          "it": "Ciotola da 6,7 L riscaldata a induzione da 20 a 180 °C e app Kenwood World: la scelta per chi ama la pasticceria e le famiglie numerose.",
          "nl": "Kom van 6,7 L met inductie van 20 tot 180 °C en de Kenwood World-app: de keuze voor bakliefhebbers en grote gezinnen."
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
      "nl": "Wat is het beste slimme slot in 2026?"
    },
    "picks": [
      {
        "model": "Nuki Smart Lock Pro (5th generation)",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Se pose sur le cylindre existant, Wi-Fi et Matter over Thread intégrés, batterie rechargeable et application très complète.",
          "en": "Fits over your existing cylinder, with built-in Wi-Fi and Matter over Thread, a rechargeable battery and a very complete app.",
          "de": "Sitzt auf dem vorhandenen Zylinder, mit integriertem WLAN und Matter over Thread, Akku und sehr umfangreicher App.",
          "es": "Se coloca sobre el cilindro existente, con Wi-Fi y Matter over Thread integrados, batería recargable y una app muy completa.",
          "it": "Si monta sul cilindro esistente, con Wi-Fi e Matter over Thread integrati, batteria ricaricabile e un’app molto completa.",
          "nl": "Past op je bestaande cilinder, met ingebouwde wifi en Matter over Thread, een oplaadbare accu en een zeer complete app."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "L’entrée de gamme Nuki garde le Wi-Fi, Matter over Thread et la même application, sans bridge à acheter.",
          "en": "Nuki’s entry model keeps Wi-Fi, Matter over Thread and the same app, with no bridge to buy.",
          "de": "Nukis Einstiegsmodell behält WLAN, Matter over Thread und dieselbe App, ohne zusätzliche Bridge.",
          "es": "El modelo de entrada de Nuki mantiene Wi-Fi, Matter over Thread y la misma app, sin puente que comprar.",
          "it": "Il modello d’ingresso di Nuki mantiene Wi-Fi, Matter over Thread e la stessa app, senza bridge da acquistare.",
          "nl": "Het instapmodel van Nuki houdt wifi, Matter over Thread en dezelfde app, zonder bridge erbij."
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
          "nl": "Ideaal om zonder telefoon te openen"
        },
        "why": {
          "fr": "Clavier extérieur fourni avec empreinte, NFC et code, Matter over Thread et prise en charge d’Apple Home Key.",
          "en": "Outdoor keypad included with fingerprint, NFC and PIN, plus Matter over Thread and Apple Home Key support.",
          "de": "Außen-Keypad mit Fingerabdruck, NFC und PIN inklusive, dazu Matter over Thread und Apple Home Key.",
          "es": "Teclado exterior incluido con huella, NFC y código, además de Matter over Thread y compatibilidad con Apple Home Key.",
          "it": "Tastierino esterno incluso con impronta, NFC e codice, più Matter over Thread e supporto ad Apple Home Key.",
          "nl": "Buitenklavier met vingerafdruk, NFC en pincode inbegrepen, plus Matter over Thread en Apple Home Key."
        }
      }
    ]
  },
  "station-meteo-connectee-comparatif": {
    "question": {
      "fr": "Quelle est la meilleure station météo connectée en 2026 ?",
      "en": "What is the best smart weather station in 2026?",
      "de": "Welche ist die beste smarte Wetterstation 2026?",
      "es": "¿Cuál es la mejor estación meteorológica conectada en 2026?",
      "it": "Qual è la migliore stazione meteo connessa nel 2026?",
      "nl": "Wat is het beste slimme weerstation in 2026?"
    },
    "picks": [
      {
        "model": "Ecowitt HP2551",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Capteur 7-en-1 avec pluie, vent, UV et luminosité dès l'achat, grand écran couleur et intégration locale à Home Assistant.",
          "en": "A 7-in-1 sensor with rain, wind, UV and light out of the box, a large colour screen and local Home Assistant integration.",
          "de": "7-in-1-Sensor mit Regen, Wind, UV und Helligkeit ab Werk, großes Farbdisplay und lokale Home-Assistant-Integration.",
          "es": "Sensor 7 en 1 con lluvia, viento, UV y luminosidad de serie, gran pantalla a color e integración local con Home Assistant.",
          "it": "Sensore 7-in-1 con pioggia, vento, UV e luminosità inclusi, ampio schermo a colori e integrazione locale con Home Assistant.",
          "nl": "7-in-1-sensor met regen, wind, uv en licht direct inbegrepen, groot kleurenscherm en lokale Home Assistant-integratie."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Station complète avec pluie, vent, UV et lumière, lisible sur un écran couleur de 21,3 cm, sans dépendre du smartphone.",
          "en": "A complete station with rain, wind, UV and light, readable on a 21.3 cm colour screen without relying on a phone.",
          "de": "Komplettstation mit Regen, Wind, UV und Licht, ablesbar auf einem 21,3-cm-Farbdisplay, ganz ohne Smartphone.",
          "es": "Estación completa con lluvia, viento, UV y luz, legible en una pantalla a color de 21,3 cm sin depender del móvil.",
          "it": "Stazione completa con pioggia, vento, UV e luce, leggibile su uno schermo a colori da 21,3 cm senza bisogno dello smartphone.",
          "nl": "Compleet station met regen, wind, uv en licht, af te lezen op een kleurenscherm van 21,3 cm zonder smartphone."
        }
      },
      {
        "model": "Netatmo Smart Weather Station",
        "role": {
          "fr": "Air intérieur et Apple Maison",
          "en": "Indoor air and Apple Home",
          "de": "Raumluft und Apple Home",
          "es": "Aire interior y Apple Casa",
          "it": "Aria interna e Apple Casa",
          "nl": "Binnenlucht en Apple Woning"
        },
        "why": {
          "fr": "Seule du comparatif à mesurer le CO2 intérieur, compatible HomeKit, mais pluviomètre et anémomètre sont vendus séparément.",
          "en": "The only one here that measures indoor CO2, HomeKit compatible, but the rain gauge and anemometer are sold separately.",
          "de": "Als einzige im Vergleich misst sie CO2 in Innenräumen, HomeKit-kompatibel, Regen- und Windmesser gibt es aber nur separat.",
          "es": "La única de la comparativa que mide el CO2 interior, compatible con HomeKit, pero pluviómetro y anemómetro se venden aparte.",
          "it": "L'unica del confronto che misura la CO2 interna, compatibile HomeKit, ma pluviometro e anemometro sono venduti a parte.",
          "nl": "De enige in deze vergelijking die CO2 binnenshuis meet, compatibel met HomeKit, maar regen- en windmeter zijn apart te koop."
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
      "nl": "Is de Cosori Dual Blaze Smart 6,4 L de moeite waard in 2026?"
    },
    "picks": [
      {
        "model": "Cosori Dual Blaze Smart Air Fryer - 6.4L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Sa double résistance haut et bas limite le secouage, et l’app VeSync ajoute recettes et suivi à distance sur 6,4 L.",
          "en": "Top and bottom heating cuts down on shaking, and the VeSync app adds recipes and remote monitoring in a 6.4L basket.",
          "de": "Ober- und Unterhitze ersparen meist das Schütteln, und die VeSync-App bietet Rezepte und Fernüberwachung bei 6,4 L.",
          "es": "Su calor superior e inferior reduce la necesidad de agitar, y la app VeSync suma recetas y control remoto en 6,4 L.",
          "it": "Il calore sopra e sotto riduce la necessità di scuotere, e l’app VeSync aggiunge ricette e controllo remoto su 6,4 L.",
          "nl": "Boven- en onderwarmte maken schudden meestal overbodig, en de VeSync-app voegt recepten en bediening op afstand toe."
        }
      },
      {
        "model": "Philips Airfryer Série 3000 XL - 6.2L",
        "role": {
          "fr": "Alternative simple sans Wi-Fi",
          "en": "Simple alternative without Wi-Fi",
          "de": "Einfache Alternative ohne WLAN",
          "es": "Alternativa sencilla sin Wi-Fi",
          "it": "Alternativa semplice senza Wi-Fi",
          "nl": "Eenvoudig alternatief zonder wifi"
        },
        "why": {
          "fr": "Capacité comparable, commandes très simples et marque éprouvée, pour qui n’a besoin ni d’application ni de chauffe par le bas.",
          "en": "Similar capacity, very simple controls and a proven brand, for anyone who needs neither an app nor bottom heating.",
          "de": "Ähnliches Volumen, sehr einfache Bedienung und bewährte Marke für alle, die weder App noch Unterhitze brauchen.",
          "es": "Capacidad similar, mandos muy sencillos y marca contrastada, para quien no necesita app ni calor inferior.",
          "it": "Capacità simile, comandi semplicissimi e marchio collaudato, per chi non ha bisogno né di app né di calore dal basso.",
          "nl": "Vergelijkbare inhoud, heel eenvoudige bediening en een beproefd merk, voor wie geen app of onderwarmte nodig heeft."
        }
      },
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Pour cuire deux plats à la fois",
          "en": "Best for two dishes at once",
          "de": "Für zwei Gerichte gleichzeitig",
          "es": "Para dos platos a la vez",
          "it": "Per due piatti insieme",
          "nl": "Voor twee gerechten tegelijk"
        },
        "why": {
          "fr": "Ses deux tiroirs superposés et indépendants permettent de préparer plat et accompagnement en même temps sur 9,5 L.",
          "en": "Two independent stacked drawers let you cook a main and a side at the same time, with 9.5L in total.",
          "de": "Zwei unabhängige, gestapelte Schubladen garen Hauptgericht und Beilage gleichzeitig, mit insgesamt 9,5 L.",
          "es": "Sus dos cajones apilados e independientes permiten preparar plato principal y guarnición a la vez, con 9,5 L.",
          "it": "I due cassetti sovrapposti e indipendenti permettono di cuocere insieme piatto principale e contorno, con 9,5 L.",
          "nl": "Twee onafhankelijke, gestapelde lades bereiden hoofdgerecht en bijgerecht tegelijk, met in totaal 9,5 L."
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
      "nl": "Is de Moulinex Easy Fry Max 5L in 2026 een goede airfryer?"
    },
    "picks": [
      {
        "model": "Moulinex Easy Fry Max 5L",
        "role": {
          "fr": "Meilleur choix simplicité",
          "en": "Best for simplicity",
          "de": "Beste Wahl für Einfachheit",
          "es": "Mejor opción por sencillez",
          "it": "Miglior scelta per semplicità",
          "nl": "Beste keuze voor eenvoud"
        },
        "why": {
          "fr": "5 L, 10 programmes, panier compatible lave-vaisselle et engagement « réparable 15 ans » : l’essentiel bien fait pour 2 à 4 personnes.",
          "en": "5 L, 10 programmes, a dishwasher-safe basket and a 15-year repairability commitment: the essentials done well for 2 to 4 people.",
          "de": "5 L, 10 Programme, spülmaschinenfester Korb und 15 Jahre Reparierbarkeit: das Wesentliche gut gemacht für 2 bis 4 Personen.",
          "es": "5 L, 10 programas, cesta apta para lavavajillas y compromiso de reparabilidad de 15 años: lo esencial bien hecho para 2 a 4 personas.",
          "it": "5 L, 10 programmi, cestello lavabile in lavastoviglie e riparabilità per 15 anni: l’essenziale fatto bene per 2-4 persone.",
          "nl": "5 L, 10 programma’s, vaatwasserbestendige mand en 15 jaar repareerbaarheid: het belangrijkste goed gedaan voor 2 tot 4 personen."
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
          "nl": "Meest veelzijdig"
        },
        "why": {
          "fr": "Chauffe par le haut et par le bas jusqu’à 230 °C, avec application : meilleur pour saisir les viandes.",
          "en": "Heats from top and bottom up to 230 °C, with an app: better for searing meat.",
          "de": "Heizt von oben und unten bis 230 °C, mit App: besser zum Anbraten von Fleisch.",
          "es": "Calienta por arriba y por abajo hasta 230 °C, con aplicación: mejor para sellar carne.",
          "it": "Scalda dall’alto e dal basso fino a 230 °C, con app: migliore per rosolare la carne.",
          "nl": "Verwarmt van boven en onder tot 230 °C, met app: beter om vlees dicht te schroeien."
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
          "nl": "Voor gezinnen"
        },
        "why": {
          "fr": "Un panier de 6,2 L plus confortable pour une famille de 4 quand 5 litres deviennent justes.",
          "en": "A roomier 6.2 L basket for a family of four when 5 litres feels tight.",
          "de": "Ein geräumigerer 6,2-L-Korb für vierköpfige Familien, wenn 5 Liter knapp werden.",
          "es": "Una cesta de 6,2 L más cómoda para una familia de cuatro cuando 5 litros se quedan cortos.",
          "it": "Un cestello da 6,2 L più comodo per una famiglia di quattro quando 5 litri sono pochi.",
          "nl": "Een ruimere mand van 6,2 L voor een gezin van vier als 5 liter krap wordt."
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
      "nl": "Wat is de beste airfryer voor een groot gezin in 2026?"
    },
    "picks": [
      {
        "model": "Ninja Foodi FlexDrawer 10.4L Double Zone",
        "role": {
          "fr": "Meilleur choix pour les grandes familles",
          "en": "Best for large families",
          "de": "Beste Wahl für große Familien",
          "es": "Mejor opción para familias numerosas",
          "it": "Migliore per famiglie numerose",
          "nl": "Beste keuze voor grote gezinnen"
        },
        "why": {
          "fr": "Un tiroir de 10,4 L pour les grosses pièces, ou deux zones de 5,2 L réglables séparément grâce au séparateur, idéal à partir de cinq personnes.",
          "en": "One 10.4L drawer for large cuts, or two separately controlled 5.2L zones with the divider, ideal for five people or more.",
          "de": "Eine 10,4-L-Schublade für große Stücke oder mit Trenner zwei getrennt steuerbare 5,2-L-Zonen, ideal ab fünf Personen.",
          "es": "Un cajón de 10,4 L para piezas grandes o, con el separador, dos zonas de 5,2 L independientes; ideal desde cinco personas.",
          "it": "Un cassetto da 10,4 L per i pezzi grandi o, con il divisore, due zone da 5,2 L indipendenti; ideale da cinque persone in su.",
          "nl": "Eén lade van 10,4 L voor grote stukken, of met het schot twee los bediende zones van 5,2 L; ideaal vanaf vijf personen."
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
          "nl": "Ideaal voor kleinere keukens"
        },
        "why": {
          "fr": "Ses deux tiroirs superposés de 4,75 L occupent peu de largeur et conviennent aux foyers de quatre à six personnes qui cuisinent deux plats à la fois.",
          "en": "Its two stacked 4.75L drawers take little width and suit households of four to six who cook two dishes at once.",
          "de": "Zwei übereinanderliegende 4,75-L-Schubladen brauchen wenig Breite und passen zu Haushalten mit vier bis sechs Personen.",
          "es": "Sus dos cajones apilados de 4,75 L ocupan poco ancho y encajan en hogares de cuatro a seis personas que cocinan dos platos a la vez.",
          "it": "I due cassetti sovrapposti da 4,75 L occupano poca larghezza e si adattano a famiglie di quattro-sei persone che cucinano due piatti insieme.",
          "nl": "Twee gestapelde lades van 4,75 L nemen weinig breedte in en passen bij huishoudens van vier tot zes die twee gerechten tegelijk maken."
        }
      },
      {
        "model": "Philips Airfryer Combi XXL Connecté - 8.3L",
        "role": {
          "fr": "Meilleur choix connecté",
          "en": "Best connected pick",
          "de": "Beste vernetzte Wahl",
          "es": "Mejor opción conectada",
          "it": "Migliore scelta connessa",
          "nl": "Beste slimme keuze"
        },
        "why": {
          "fr": "Panier unique de 8,3 L avec sonde de température et application HomeID, pour cuire viandes et grandes portions avec précision.",
          "en": "A single 8.3L basket with a temperature probe and the HomeID app, for cooking meat and large portions precisely.",
          "de": "Ein 8,3-L-Korb mit Temperaturfühler und HomeID-App, um Fleisch und große Portionen präzise zu garen.",
          "es": "Cesta única de 8,3 L con sonda de temperatura y app HomeID, para cocinar carnes y raciones grandes con precisión.",
          "it": "Cestello unico da 8,3 L con sonda di temperatura e app HomeID, per cuocere con precisione carne e grandi porzioni.",
          "nl": "Eén mand van 8,3 L met kernthermometer en HomeID-app, om vlees en grote porties nauwkeurig te garen."
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
      "nl": "Wat is de beste dual-zone airfryer in 2026?"
    },
    "picks": [
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste algemene keuze"
        },
        "why": {
          "fr": "Son format de tiroirs empilés limite l'encombrement et Smart Finish termine les deux cuissons en même temps, idéal pour une famille de quatre à six personnes.",
          "en": "Its stacked drawer format limits counter space and Smart Finish ends both cooking zones together, ideal for a family of four to six people.",
          "de": "Das Format mit gestapelten Schubladen spart Platz und Smart Finish beendet beide Garvorgänge gleichzeitig, ideal für eine Familie mit vier bis sechs Personen.",
          "es": "Su formato de cajones apilados reduce el espacio ocupado y Smart Finish termina ambas cocciones a la vez, ideal para una familia de cuatro a seis personas.",
          "it": "Il formato a cassetti impilati limita l'ingombro e Smart Finish termina entrambe le cotture insieme, ideale per una famiglia di quattro-sei persone.",
          "nl": "Het formaat met gestapelde laden beperkt de ruimte en Smart Finish beëindigt beide bereidingen tegelijk, ideaal voor een gezin van vier tot zes personen."
        }
      },
      {
        "model": "Ninja Foodi FlexDrawer 10.4L Double Zone",
        "role": {
          "fr": "Idéal pour une méga-zone unique",
          "en": "Best for a single mega zone",
          "de": "Ideal für eine einzelne Megazone",
          "es": "Ideal para una megazona única",
          "it": "Ideale per un'unica megazona",
          "nl": "Ideaal voor één megazone"
        },
        "why": {
          "fr": "Il offre une méga-zone unique de 10,4 litres pour un poulet entier, ce que les tiroirs séparés du Ninja MAX ne permettent pas, mais il est plus encombrant.",
          "en": "It offers a single 10.4-litre mega zone for a whole chicken, which the separate drawers of the Ninja MAX cannot, though it takes more space.",
          "de": "Er bietet eine einzelne 10,4-Liter-Megazone für ein ganzes Hähnchen, was die getrennten Schubladen des Ninja MAX nicht können, braucht aber mehr Platz.",
          "es": "Ofrece una megazona única de 10,4 litros para un pollo entero, algo que los cajones separados del Ninja MAX no permiten, aunque ocupa más espacio.",
          "it": "Offre un'unica megazona da 10,4 litri per un pollo intero, impossibile con i cassetti separati del Ninja MAX, ma è più ingombrante.",
          "nl": "Hij biedt één megazone van 10,4 liter voor een hele kip, wat de aparte laden van de Ninja MAX niet kunnen, maar neemt meer ruimte in."
        }
      },
      {
        "model": "Philips Airfryer Combi XXL Connecté - 8.3L",
        "role": {
          "fr": "Pour la connectivité et la précision",
          "en": "Best for connectivity and precision",
          "de": "Für Vernetzung und Präzision",
          "es": "Para conectividad y precisión",
          "it": "Per connettività e precisione",
          "nl": "Voor connectiviteit en precisie"
        },
        "why": {
          "fr": "Il convient mieux à ceux qui veulent le Wi-Fi et la précision de sa sonde de température, mais il coûte plus cher que le Ninja MAX.",
          "en": "It suits those who want Wi-Fi and the precision of its temperature probe better, though it costs more than the Ninja MAX.",
          "de": "Er passt besser, wenn man WLAN und die Präzision der Temperatursonde möchte, kostet aber mehr als der Ninja MAX.",
          "es": "Encaja mejor con quienes quieren Wi-Fi y la precisión de su sonda de temperatura, aunque cuesta más que el Ninja MAX.",
          "it": "È più adatto a chi vuole il Wi-Fi e la precisione della sonda di temperatura, ma costa più del Ninja MAX.",
          "nl": "Hij past beter bij wie wifi en de precisie van de temperatuursonde wil, maar is duurder dan de Ninja MAX."
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
      "nl": "Is de Philips Airfryer 3000 Series XL in 2026 een goede keuze?"
    },
    "picks": [
      {
        "model": "Philips Airfryer Série 3000 XL - 6.2L",
        "role": {
          "fr": "Meilleur choix pour la simplicité",
          "en": "Best for simplicity",
          "de": "Beste Wahl für Einfachheit",
          "es": "Mejor opción por sencillez",
          "it": "Migliore per semplicità",
          "nl": "Beste keuze voor eenvoud"
        },
        "why": {
          "fr": "Cuve de 6,2 L pour 3 à 5 personnes, cuisson RapidAir régulière, 7 programmes et nettoyage facile, sans application à configurer.",
          "en": "A 6.2L pan for 3 to 5 people, consistent RapidAir cooking, 7 presets and easy cleaning, with no app to set up.",
          "de": "6,2-Liter-Garraum für 3 bis 5 Personen, gleichmäßiges RapidAir-Garen, 7 Programme und leichte Reinigung, ganz ohne App.",
          "es": "Cubeta de 6,2 L para 3 a 5 personas, cocción RapidAir regular, 7 programas y limpieza fácil, sin aplicación que configurar.",
          "it": "Vasca da 6,2 L per 3-5 persone, cottura RapidAir regolare, 7 programmi e pulizia facile, senza app da configurare.",
          "nl": "Pan van 6,2 L voor 3 tot 5 personen, gelijkmatige RapidAir-bereiding, 7 programma's en makkelijk schoon te maken, zonder app."
        }
      },
      {
        "model": "Cosori Dual Blaze Smart Air Fryer - 6.4L",
        "role": {
          "fr": "Meilleure alternative connectée",
          "en": "Best connected alternative",
          "de": "Beste vernetzte Alternative",
          "es": "Mejor alternativa conectada",
          "it": "Migliore alternativa connessa",
          "nl": "Beste slimme alternatief"
        },
        "why": {
          "fr": "Double résistance haut et bas qui limite le besoin de retourner les aliments, et pilotage à distance via l'application VeSync.",
          "en": "Top and bottom heating elements reduce the need to flip food, and the VeSync app lets you control cooking remotely.",
          "de": "Heizelemente oben und unten machen Wenden seltener nötig, und die VeSync-App erlaubt die Steuerung aus der Ferne.",
          "es": "Resistencias superior e inferior que reducen la necesidad de girar los alimentos, y control a distancia con la app VeSync.",
          "it": "Resistenze superiore e inferiore che riducono la necessità di girare gli alimenti, e controllo a distanza con l'app VeSync.",
          "nl": "Verwarmingselementen boven en onder, zodat je minder hoeft om te draaien, en bediening op afstand via de VeSync-app."
        }
      },
      {
        "model": "Ninja Foodi FlexDrawer 10.4L Double Zone",
        "role": {
          "fr": "Meilleur pour les grandes familles",
          "en": "Best for large families",
          "de": "Beste Wahl für große Familien",
          "es": "Mejor para familias numerosas",
          "it": "Migliore per famiglie numerose",
          "nl": "Beste voor grote gezinnen"
        },
        "why": {
          "fr": "Tiroir de 10,4 L divisible en deux zones de 5,2 L pilotées séparément, jusqu'à 240 °C, pour cuire deux plats à la fois.",
          "en": "A 10.4L drawer that splits into two independently controlled 5.2L zones, up to 240 °C, to cook two dishes at once.",
          "de": "10,4-Liter-Schublade, teilbar in zwei separat steuerbare 5,2-Liter-Zonen, bis 240 °C, für zwei Gerichte gleichzeitig.",
          "es": "Cajón de 10,4 L divisible en dos zonas de 5,2 L con control independiente, hasta 240 °C, para cocinar dos platos a la vez.",
          "it": "Cassetto da 10,4 L divisibile in due zone da 5,2 L gestite separatamente, fino a 240 °C, per cuocere due piatti insieme.",
          "nl": "Lade van 10,4 L, deelbaar in twee apart te bedienen zones van 5,2 L, tot 240 °C, om twee gerechten tegelijk te bereiden."
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
      "nl": "Is de Xiaomi Smart Air Fryer Pro 4L een goede airfryer in 2026?"
    },
    "picks": [
      {
        "model": "Xiaomi Smart Air Fryer Pro 4L",
        "role": {
          "fr": "Meilleur choix pour 1 à 3 personnes",
          "en": "Best for 1 to 3 people",
          "de": "Beste Wahl für 1 bis 3 Personen",
          "es": "Mejor opción para 1 a 3 personas",
          "it": "Migliore per 1-3 persone",
          "nl": "Beste keuze voor 1 tot 3 personen"
        },
        "why": {
          "fr": "Compact et connecté, il offre un hublot éclairé, une plage de 40 à 200 °C et l’app Xiaomi Home, mais son panier de 4 litres reste limité.",
          "en": "Compact and connected, it offers a lit window, a 40 to 200 °C range and the Xiaomi Home app, though its 4-litre basket is limited.",
          "de": "Kompakt und vernetzt, mit beleuchtetem Sichtfenster, 40 bis 200 °C und Xiaomi-Home-App – der 4-Liter-Korb bleibt aber begrenzt.",
          "es": "Compacta y conectada, ofrece ventana iluminada, de 40 a 200 °C y app Xiaomi Home, aunque su cesta de 4 litros es limitada.",
          "it": "Compatta e connessa, offre oblò illuminato, da 40 a 200 °C e app Xiaomi Home, anche se il cestello da 4 litri è limitato.",
          "nl": "Compact en connected, met verlicht kijkvenster, 40 tot 200 °C en de Xiaomi Home-app, al is de mand van 4 liter beperkt."
        }
      },
      {
        "model": "Philips Airfryer Série 3000 XL - 6.2L",
        "role": {
          "fr": "Meilleur choix pour 3 à 5 personnes",
          "en": "Best for 3 to 5 people",
          "de": "Beste Wahl für 3 bis 5 Personen",
          "es": "Mejor opción para 3 a 5 personas",
          "it": "Migliore per 3-5 persone",
          "nl": "Beste keuze voor 3 tot 5 personen"
        },
        "why": {
          "fr": "Avec 6,2 litres et 2 000 W, il prend le relais quand le Xiaomi devient trop petit, au prix de l’absence de pilotage Wi-Fi.",
          "en": "With 6.2 litres and 2,000 W it takes over when the Xiaomi becomes too small, at the cost of no Wi-Fi remote control.",
          "de": "Mit 6,2 Litern und 2.000 W übernimmt er, wenn der Xiaomi zu klein wird – allerdings ohne WLAN-Fernsteuerung.",
          "es": "Con 6,2 litros y 2.000 W toma el relevo cuando la Xiaomi se queda pequeña, a cambio de no tener control remoto por Wi-Fi.",
          "it": "Con 6,2 litri e 2.000 W subentra quando la Xiaomi diventa troppo piccola, ma senza controllo remoto via Wi-Fi.",
          "nl": "Met 6,2 liter en 2.000 W neemt hij het over als de Xiaomi te klein wordt, wel zonder bediening op afstand via wifi."
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
      "nl": "Wat is de beste robotstofzuiger voor dierenharen in 2026?"
    },
    "picks": [
      {
        "model": "Roborock S8 MaxV Ultra",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Sa brosse DuoRoller en caoutchouc limite l'emmêlement, ses 10 000 Pa et sa station d'auto-vidage conviennent aux foyers avec chien ou chat.",
          "en": "Its rubber DuoRoller brush limits tangling, and 10,000 Pa plus an auto-empty station suit homes with a dog or cat.",
          "de": "Die DuoRoller-Gummiwalzen mindern das Verheddern, 10.000 Pa und Absaugstation passen zu Haushalten mit Hund oder Katze.",
          "es": "Su cepillo DuoRoller de goma limita los enredos, y sus 10.000 Pa con estación de autovaciado encajan en hogares con perro o gato.",
          "it": "La spazzola DuoRoller in gomma limita i grovigli, e 10.000 Pa con stazione di autosvuotamento si adattano a case con cani o gatti.",
          "nl": "De rubberen DuoRoller-borstel beperkt klitten, en 10.000 Pa met zelfleegstation past bij huishoudens met hond of kat."
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
          "nl": "Maximale zuigkracht"
        },
        "why": {
          "fr": "Avec 12 000 Pa et une brosse anti-emmêlement, il convient aux races à poils longs, et sa brosse latérale extensible atteint coins et bords.",
          "en": "With 12,000 Pa and an anti-tangle brush, it suits long-haired breeds, and its extendable side brush reaches corners and edges.",
          "de": "Mit 12.000 Pa und Anti-Verheddern-Bürste passt er zu langhaarigen Rassen, die ausfahrbare Seitenbürste erreicht Ecken und Kanten.",
          "es": "Con 12.000 Pa y cepillo anti-enredo, va bien con razas de pelo largo, y su cepillo lateral extensible llega a rincones y bordes.",
          "it": "Con 12.000 Pa e spazzola anti-groviglio si adatta alle razze a pelo lungo, e la spazzola laterale estensibile raggiunge angoli e bordi.",
          "nl": "Met 12.000 Pa en een anti-klitborstel past hij bij langharige rassen, en de uitschuifbare zijborstel bereikt hoeken en randen."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "Il réunit 11 000 Pa, une brosse ZeroTangle et une station d'auto-vidage en milieu de gamme, le choix malin pour un budget maîtrisé.",
          "en": "It combines 11,000 Pa, a ZeroTangle brush and an auto-empty station in the mid-range, the smart pick for budget-conscious pet owners.",
          "de": "Er vereint 11.000 Pa, ZeroTangle-Bürste und Absaugstation in der Mittelklasse, die clevere Wahl für preisbewusste Tierhalter.",
          "es": "Reúne 11.000 Pa, cepillo ZeroTangle y estación de autovaciado en la gama media, la opción inteligente con presupuesto ajustado.",
          "it": "Unisce 11.000 Pa, spazzola ZeroTangle e stazione di autosvuotamento nella fascia media, la scelta furba con un budget limitato.",
          "nl": "Hij combineert 11.000 Pa, een ZeroTangle-borstel en een zelfleegstation in het middensegment, de slimme keuze bij een beperkt budget."
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
      "nl": "Wat is de beste slimme luchtontvochtiger in 2026?"
    },
    "picks": [
      {
        "model": "Meaco Arete Two 20L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste algemene keuze"
        },
        "why": {
          "fr": "20 L par jour, bac de 4,8 L, filtre HEPA, Wi-Fi avec Alexa et Google Home, et une réputation de faible consommation et de discrétion.",
          "en": "20 L a day, 4.8 L tank, HEPA filter, Wi-Fi with Alexa and Google Home, and a reputation for low energy use and quiet running.",
          "de": "20 L pro Tag, 4,8-L-Tank, HEPA-Filter, WLAN mit Alexa und Google Home sowie der Ruf, sparsam und leise zu sein.",
          "es": "20 L al día, depósito de 4,8 L, filtro HEPA, Wi-Fi con Alexa y Google Home, y fama de bajo consumo y funcionamiento silencioso.",
          "it": "20 L al giorno, serbatoio da 4,8 L, filtro HEPA, Wi-Fi con Alexa e Google Home e fama di bassi consumi e silenziosità.",
          "nl": "20 L per dag, reservoir van 4,8 L, HEPA-filter, wifi met Alexa en Google Home, en bekend om zijn lage verbruik en stille werking."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "16 L par jour, Wi-Fi compatible Alexa, mode linge et drainage continu dans un format compact d’entrée de gamme.",
          "en": "16 L a day, Wi-Fi with Alexa support, laundry mode and continuous drainage in a compact entry-level body.",
          "de": "16 L pro Tag, WLAN mit Alexa, Wäschemodus und Dauerablauf in einem kompakten Einstiegsgerät.",
          "es": "16 L al día, Wi-Fi compatible con Alexa, modo ropa y drenaje continuo en un formato compacto de gama de entrada.",
          "it": "16 L al giorno, Wi-Fi compatibile con Alexa, modalità bucato e drenaggio continuo in un formato compatto entry-level.",
          "nl": "16 L per dag, wifi met Alexa, wasmodus en continue afvoer in een compact instapmodel."
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
          "nl": "Ideaal voor de slaapkamer"
        },
        "why": {
          "fr": "Petit modèle de 13 L par jour avec mode nuit discret et pilotage dans l’application Xiaomi Home, parfait pour une chambre ou une salle de bain.",
          "en": "A small 13 L/day unit with a quiet sleep mode and Xiaomi Home app control, ideal for a bedroom or bathroom.",
          "de": "Kleines 13-L-Gerät mit leisem Schlafmodus und Steuerung per Xiaomi-Home-App, ideal für Schlafzimmer oder Bad.",
          "es": "Modelo pequeño de 13 L al día con modo noche silencioso y control desde la app Xiaomi Home, ideal para dormitorio o baño.",
          "it": "Modello compatto da 13 L al giorno con modalità notte silenziosa e controllo dall’app Xiaomi Home, ideale per camera o bagno.",
          "nl": "Klein model van 13 L per dag met stille nachtmodus en bediening via de Xiaomi Home-app, ideaal voor slaapkamer of badkamer."
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
      "nl": "Wat is de beste robotmaaier voor een slimme tuin in 2026?"
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
          "nl": "Beste voor hellingen"
        },
        "why": {
          "fr": "Quatre roues motrices, pentes annoncées jusqu'à 80 % et navigation LiDAR, RTK réseau et vision, pour des pelouses jusqu'à 5 000 m².",
          "en": "All-wheel drive, slopes rated up to 80 percent and LiDAR, network RTK and vision navigation for lawns up to 5,000 square meters.",
          "de": "Allradantrieb, bis zu 80 Prozent Steigung laut Hersteller und Navigation per LiDAR, Netz-RTK und Kamera für bis zu 5.000 Quadratmeter.",
          "es": "Tracción total, pendientes de hasta el 80 % según el fabricante y navegación LiDAR, RTK por red y visión para hasta 5.000 metros cuadrados.",
          "it": "Trazione integrale, pendenze dichiarate fino all'80 percento e navigazione LiDAR, RTK di rete e visione per prati fino a 5.000 metri quadrati.",
          "nl": "Vierwielaandrijving, hellingen tot 80 procent volgens de fabrikant en navigatie via LiDAR, netwerk-RTK en camera voor maximaal 5.000 vierkante meter."
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
          "nl": "Premiumkeuze"
        },
        "why": {
          "fr": "Modèle phare de Husqvarna, à fil ou sans fil avec le kit EPOS, pour 5 000 m² et 50 % de pente, mais c'est le plus cher de la sélection.",
          "en": "Husqvarna's flagship works with a wire or wire-free with the EPOS kit, covering 5,000 square meters and 50 percent slopes, but it is the priciest pick.",
          "de": "Husqvarnas Flaggschiff arbeitet mit Kabel oder mit EPOS-Kit kabellos, für 5.000 Quadratmeter und 50 Prozent Steigung, ist aber das teuerste Modell.",
          "es": "Modelo estrella de Husqvarna, con cable o sin cable con el kit EPOS, para 5.000 metros cuadrados y pendientes del 50 %, pero es el más caro.",
          "it": "Modello di punta Husqvarna, con filo o senza filo con il kit EPOS, per 5.000 metri quadrati e pendenze del 50 percento, ma è il più costoso.",
          "nl": "Het vlaggenschip van Husqvarna werkt met draad of draadloos met de EPOS-kit, voor 5.000 vierkante meter en 50 procent helling, maar is het duurst."
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
          "nl": "Beste voor kleine tuinen"
        },
        "why": {
          "fr": "Avec son fil périmétrique et une surface maximale de 600 m², c'est l'option la plus abordable de la sélection pour un petit jardin simple.",
          "en": "With its perimeter wire and a maximum area of 600 square meters, it is the most affordable option in the selection for a small, simple garden.",
          "de": "Mit Begrenzungskabel und maximal 600 Quadratmetern ist es die günstigste Option der Auswahl für einen kleinen, einfachen Garten.",
          "es": "Con cable perimetral y una superficie máxima de 600 metros cuadrados, es la opción más económica de la selección para un jardín pequeño y sencillo.",
          "it": "Con filo perimetrale e una superficie massima di 600 metri quadrati, è l'opzione più economica della selezione per un giardino piccolo e semplice.",
          "nl": "Met begrenzingsdraad en maximaal 600 vierkante meter is dit de goedkoopste optie van de selectie voor een kleine, eenvoudige tuin."
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
      "nl": "Wat is de beste zuinige airco in 2026?"
    },
    "picks": [
      {
        "model": "Mitsubishi Electric MSZ-AY35VGK",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Split Inverter classé A+++ en froid avec un SEER de 8,7, très silencieux (18 dB(A)) et réputé fiable pour un usage intensif l’été.",
          "en": "An Inverter split rated A+++ for cooling with a SEER of 8.7, very quiet (18 dB(A)) and known for reliability under heavy summer use.",
          "de": "Inverter-Splitgerät mit A+++ beim Kühlen und SEER 8,7, sehr leise (18 dB(A)) und für intensive Sommernutzung als zuverlässig bekannt.",
          "es": "Split Inverter con clase A+++ en frío y SEER de 8,7, muy silencioso (18 dB(A)) y con fama de fiable para un uso intensivo en verano.",
          "it": "Split Inverter in classe A+++ in raffrescamento con SEER 8,7, molto silenzioso (18 dB(A)) e noto per l’affidabilità con uso estivo intenso.",
          "nl": "Inverter-splitunit met A+++ voor koelen en een SEER van 8,7, erg stil (18 dB(A)) en bekend om zijn betrouwbaarheid bij intensief zomergebruik."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Il offre la classe A+++ en froid (SEER 8,5) et le Wi-Fi de série sur un segment de prix intermédiaire.",
          "en": "It delivers A+++ cooling (SEER 8.5) and built-in Wi-Fi in the mid-price segment.",
          "de": "Er bietet A+++ beim Kühlen (SEER 8,5) und serienmäßiges WLAN im mittleren Preissegment.",
          "es": "Ofrece clase A+++ en frío (SEER 8,5) y wifi de serie en un segmento de precio medio.",
          "it": "Offre la classe A+++ in raffrescamento (SEER 8,5) e il Wi-Fi di serie in una fascia di prezzo media.",
          "nl": "Hij biedt A+++ voor koelen (SEER 8,5) en standaard wifi in het middensegment."
        }
      },
      {
        "model": "Daikin Perfera FTXM35R",
        "role": {
          "fr": "Idéal pour chauffer toute l’année",
          "en": "Best for year-round heating",
          "de": "Ideal zum ganzjährigen Heizen",
          "es": "Ideal para calefacción todo el año",
          "it": "Ideale per riscaldare tutto l’anno",
          "nl": "Ideaal om het hele jaar te verwarmen"
        },
        "why": {
          "fr": "Seul modèle de la sélection classé A+++ en froid et en chaud (SEER 8,65, SCOP 5,10), avec chauffage jusqu’à −20 °C.",
          "en": "The only model in the selection rated A+++ for both cooling and heating (SEER 8.65, SCOP 5.10), heating down to −20 °C.",
          "de": "Einziges Modell der Auswahl mit A+++ beim Kühlen und Heizen (SEER 8,65, SCOP 5,10), heizt bis −20 °C.",
          "es": "El único de la selección con A+++ en frío y en calor (SEER 8,65, SCOP 5,10), con calefacción hasta −20 °C.",
          "it": "L’unico della selezione in classe A+++ sia in freddo sia in caldo (SEER 8,65, SCOP 5,10), riscalda fino a −20 °C.",
          "nl": "Het enige model in de selectie met A+++ voor koelen én verwarmen (SEER 8,65, SCOP 5,10), verwarmt tot −20 °C."
        }
      }
    ]
  },
  "robot-aspirador-piso-pequeno": {
    "question": {
      "fr": "Quel est le meilleur robot aspirateur pour un petit appartement en 2026 ?",
      "en": "What is the best robot vacuum for a small apartment in 2026?",
      "de": "Welcher ist der beste Saugroboter für eine kleine Wohnung 2026?",
      "es": "¿Cuál es el mejor robot aspirador para un piso pequeño en 2026?",
      "it": "Qual è il miglior robot aspirapolvere per un piccolo appartamento nel 2026?",
      "nl": "Wat is de beste robotstofzuiger voor een kleine woning in 2026?"
    },
    "picks": [
      {
        "model": "eufy Auto-Empty C10",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Seulement 7,2 cm de haut, navigation laser avec carte et zones interdites, et une station d’auto-vidage à sac de 3 L annoncée pour 60 jours.",
          "en": "Only 7.2 cm tall, laser navigation with a map and no-go zones, and a self-emptying dock with a 3 L bag rated for up to 60 days.",
          "de": "Nur 7,2 cm hoch, Lasernavigation mit Karte und Sperrzonen sowie eine Absaugstation mit 3-l-Beutel für bis zu 60 Tage laut Hersteller.",
          "es": "Solo 7,2 cm de alto, navegación láser con mapa y zonas prohibidas, y base de autovaciado con bolsa de 3 L anunciada para 60 días.",
          "it": "Alto solo 7,2 cm, navigazione laser con mappa e zone vietate, e base di svuotamento con sacchetto da 3 L dichiarato per 60 giorni.",
          "nl": "Slechts 7,2 cm hoog, lasernavigatie met kaart en no-gozones, en een zelfleegstation met zak van 3 l die tot 60 dagen meegaat."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Le plus bas de la sélection avec 7 cm, il aspire et lave légèrement, et se contente d’une petite base de charge : idéal pour un studio.",
          "en": "The lowest pick at 7 cm, it vacuums and lightly mops and only needs a small charging base: ideal for a one-room studio.",
          "de": "Mit 7 cm der flachste der Auswahl, saugt und wischt leicht und braucht nur eine kleine Ladestation: ideal für ein Studio.",
          "es": "El más bajo de la selección con 7 cm, aspira y friega ligeramente y solo necesita una base de carga pequeña: ideal para un estudio.",
          "it": "Il più basso della selezione con 7 cm, aspira e lava leggermente e richiede solo una piccola base di ricarica: ideale per un monolocale.",
          "nl": "Met 7 cm de laagste van de selectie, zuigt en dweilt licht en heeft alleen een klein laadstation nodig: ideaal voor een studio."
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
          "nl": "Ideaal voor meerdere kamers"
        },
        "why": {
          "fr": "Navigation LiDAR 360° pièce par pièce, 10 000 Pa annoncés et brosses anti-emmêlement, avec une simple base de charge peu encombrante.",
          "en": "360° LiDAR room-by-room navigation, a claimed 10,000 Pa and anti-tangle brushes, with a simple, space-saving charging base.",
          "de": "360°-LiDAR-Navigation Raum für Raum, 10.000 Pa laut Hersteller und Anti-Verheddern-Bürsten, mit platzsparender einfacher Ladestation.",
          "es": "Navegación LiDAR 360° por habitaciones, 10.000 Pa anunciados y cepillos anti-enredos, con una base de carga simple que ocupa poco.",
          "it": "Navigazione LiDAR a 360° stanza per stanza, 10.000 Pa dichiarati e spazzole anti-groviglio, con una base di ricarica semplice e compatta.",
          "nl": "360°-LiDAR-navigatie per kamer, 10.000 Pa volgens de fabrikant en anti-klitborstels, met een eenvoudig, ruimtebesparend laadstation."
        }
      }
    ]
  },
  "eclairage-exterieur-solaire-connecte": {
    "question": {
      "fr": "Quel est le meilleur éclairage extérieur solaire connecté en 2026 ?",
      "en": "What is the best smart solar outdoor lighting in 2026?",
      "de": "Welche ist die beste smarte Solar-Außenbeleuchtung 2026?",
      "es": "¿Cuál es la mejor iluminación exterior solar inteligente en 2026?",
      "it": "Qual è la migliore illuminazione esterna solare smart nel 2026?",
      "nl": "Wat is de beste slimme buitenverlichting op zonne-energie in 2026?"
    },
    "picks": [
      {
        "model": "eufy Solar Wall Light Cam S120",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Applique solaire de 300 lumens avec caméra 2K, détecteur de mouvement et alertes Wi-Fi, IP65, sans aucun câble à tirer.",
          "en": "A 300-lumen solar wall light with a 2K camera, motion sensor and Wi-Fi alerts, rated IP65, with no cable to run.",
          "de": "Solar-Wandleuchte mit 300 Lumen, 2K-Kamera, Bewegungsmelder und WLAN-Warnungen, IP65, ganz ohne Kabel.",
          "es": "Aplique solar de 300 lúmenes con cámara 2K, detector de movimiento y alertas wifi, IP65, sin ningún cable.",
          "it": "Applique solare da 300 lumen con telecamera 2K, sensore di movimento e avvisi Wi-Fi, IP65, senza alcun cavo.",
          "nl": "Solar wandlamp van 300 lumen met 2K-camera, bewegingssensor en wifimeldingen, IP65, zonder enige kabel."
        }
      },
      {
        "model": "Govee Outdoor Solar String Lights",
        "role": {
          "fr": "Ambiance solaire pilotable",
          "en": "Controllable solar ambience",
          "de": "Steuerbare Solar-Atmosphäre",
          "es": "Ambiente solar controlable",
          "it": "Atmosfera solare controllabile",
          "nl": "Bedienbare solarsfeer"
        },
        "why": {
          "fr": "Guirlande solaire de 10 m à ampoules RGBICW, pilotable en Bluetooth avec scènes et programmation, pour une terrasse sans prise.",
          "en": "A 10 m solar string with RGBICW bulbs, controlled over Bluetooth with scenes and schedules, for a patio with no socket.",
          "de": "10-m-Solar-Lichterkette mit RGBICW-Birnen, per Bluetooth mit Szenen und Zeitplänen steuerbar, für Terrassen ohne Steckdose.",
          "es": "Guirnalda solar de 10 m con bombillas RGBICW, controlable por Bluetooth con escenas y horarios, para terrazas sin enchufe.",
          "it": "Catena solare da 10 m con lampadine RGBICW, controllabile via Bluetooth con scene e programmazione, per terrazze senza presa.",
          "nl": "Solar lichtsnoer van 10 m met RGBICW-lampen, via Bluetooth bedienbaar met scènes en schema's, voor een terras zonder stopcontact."
        }
      },
      {
        "model": "Philips Hue Lily Outdoor Spot Base Kit",
        "role": {
          "fr": "Mise en lumière premium (filaire)",
          "en": "Premium landscape lighting (wired)",
          "de": "Premium-Gartenbeleuchtung (kabelgebunden)",
          "es": "Iluminación premium (cableada)",
          "it": "Illuminazione premium (cablata)",
          "nl": "Premium tuinverlichting (bekabeld)"
        },
        "why": {
          "fr": "Trois spots 24 V de 600 lumens en couleurs, IP65, pilotés via le pont Hue avec Alexa, Google Home, Apple Home et Home Assistant.",
          "en": "Three 24 V colour spotlights of 600 lumens each, IP65, controlled via the Hue Bridge with Alexa, Google Home, Apple Home and Home Assistant.",
          "de": "Drei farbige 24-V-Spots mit je 600 Lumen, IP65, über die Hue Bridge mit Alexa, Google Home, Apple Home und Home Assistant steuerbar.",
          "es": "Tres focos de color a 24 V de 600 lúmenes, IP65, controlados con el Hue Bridge desde Alexa, Google Home, Apple Home y Home Assistant.",
          "it": "Tre faretti a colori a 24 V da 600 lumen, IP65, gestiti con l'Hue Bridge da Alexa, Google Home, Apple Home e Home Assistant.",
          "nl": "Drie gekleurde 24 V-spots van 600 lumen, IP65, via de Hue Bridge te bedienen met Alexa, Google Home, Apple Home en Home Assistant."
        }
      }
    ]
  },
  "sonnette-video-sans-abonnement": {
    "question": {
      "fr": "Quelle est la meilleure sonnette vidéo sans abonnement en 2026 ?",
      "en": "What is the best video doorbell without a subscription in 2026?",
      "de": "Welche ist die beste Video-Türklingel ohne Abo 2026?",
      "es": "¿Cuál es el mejor timbre con vídeo sin suscripción en 2026?",
      "it": "Qual è il miglior videocampanello senza abbonamento nel 2026?",
      "nl": "Wat is de beste videodeurbel zonder abonnement in 2026?"
    },
    "picks": [
      {
        "model": "Eufy Video Doorbell E340",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Double caméra pour visiteur et colis, 8 Go de stockage intégré sans abonnement, et alimentation sur batterie ou sur le câblage existant.",
          "en": "A dual camera for visitors and parcels, 8 GB of built-in storage with no subscription, and battery or existing-wiring power.",
          "de": "Doppelkamera für Besucher und Pakete, 8 GB interner Speicher ohne Abo sowie Betrieb per Akku oder vorhandener Klingelleitung.",
          "es": "Doble cámara para visitantes y paquetes, 8 GB de almacenamiento integrado sin suscripción y alimentación por batería o cableado existente.",
          "it": "Doppia telecamera per visitatori e pacchi, 8 GB di memoria integrata senza abbonamento e alimentazione a batteria o sul cablaggio esistente.",
          "nl": "Dubbele camera voor bezoekers en pakketjes, 8 GB ingebouwde opslag zonder abonnement en voeding via accu of bestaande bedrading."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "Image 2K de 5 mégapixels à 180°, microSD jusqu'à 512 Go, carillon fourni et détections gratuites, pour un tarif d'entrée de gamme.",
          "en": "5 MP 2K video with a 180° view, microSD up to 512 GB, an included chime and free detection, at an entry-level price.",
          "de": "2K-Bild mit 5 MP und 180°, microSD bis 512 GB, mitgelieferter Gong und kostenlose Erkennung zum Einstiegspreis.",
          "es": "Imagen 2K de 5 MP a 180°, microSD de hasta 512 GB, carillón incluido y detecciones gratuitas, a precio de gama de entrada.",
          "it": "Immagine 2K da 5 MP a 180°, microSD fino a 512 GB, campanello interno incluso e rilevamenti gratuiti, a prezzo da fascia d'ingresso.",
          "nl": "2K-beeld van 5 MP met 180°, microSD tot 512 GB, meegeleverde gong en gratis detectie, voor een instapprijs."
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
          "nl": "Voor Apple Woning"
        },
        "why": {
          "fr": "Compatible HomeKit Secure Video, elle enregistre aussi gratuitement sur la microSD de son carillon et fonctionne sur piles ou en filaire.",
          "en": "It supports HomeKit Secure Video, also records for free to the microSD card in its chime, and runs on batteries or wiring.",
          "de": "Unterstützt HomeKit Secure Video, zeichnet zusätzlich kostenlos auf die microSD-Karte im Gong auf und läuft mit Batterien oder Kabel.",
          "es": "Compatible con HomeKit Secure Video, también graba gratis en la microSD de su carillón y funciona con pilas o cable.",
          "it": "Compatibile con HomeKit Secure Video, registra anche gratis sulla microSD del ricevitore e funziona a pile o via cavo.",
          "nl": "Ondersteunt HomeKit Secure Video, neemt ook gratis op de microSD-kaart in de gong op en werkt op batterijen of bedraad."
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
      "nl": "Wat is de beste XXL-airfryer voor een groot gezin in 2026?"
    },
    "picks": [
      {
        "model": "Ninja Foodi FlexDrawer 10.4L Double Zone",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste algemene keuze"
        },
        "why": {
          "fr": "Deux zones indépendantes de 5,2 L ou un seul grand tiroir de 10,4 L (MegaZone) : la plus grande capacité et la plus polyvalente de la sélection.",
          "en": "Two independent 5.2L zones or one large 10.4L drawer (MegaZone): the highest capacity and the most versatile model in the selection.",
          "de": "Zwei unabhängige 5,2-L-Zonen oder eine große 10,4-L-Schublade (MegaZone): die höchste Kapazität und das vielseitigste Modell der Auswahl.",
          "es": "Dos zonas independientes de 5,2 L o un único cajón grande de 10,4 L (MegaZone): la mayor capacidad y el modelo más versátil de la selección.",
          "it": "Due zone indipendenti da 5,2 L o un unico grande cassetto da 10,4 L (MegaZone): la capacità più alta e il modello più versatile della selezione.",
          "nl": "Twee onafhankelijke zones van 5,2 L of één grote lade van 10,4 L (MegaZone): de grootste capaciteit en het veelzijdigste model van de selectie."
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
          "nl": "Ideaal voor smalle keukens"
        },
        "why": {
          "fr": "Deux tiroirs indépendants de 4,75 L superposés : 9,5 L au total pour environ 28 cm de large, avec cuisson possible sur quatre niveaux.",
          "en": "Two independent 4.75L drawers stacked vertically: 9.5L in total in a width of about 28 cm, with cooking on up to four levels.",
          "de": "Zwei unabhängige 4,75-L-Schubladen übereinander: insgesamt 9,5 L auf nur etwa 28 cm Breite, mit Garen auf bis zu vier Ebenen.",
          "es": "Dos cajones independientes de 4,75 L apilados: 9,5 L en total en unos 28 cm de ancho, con cocción en hasta cuatro niveles.",
          "it": "Due cassetti indipendenti da 4,75 L sovrapposti: 9,5 L totali in circa 28 cm di larghezza, con cottura fino a quattro livelli.",
          "nl": "Twee onafhankelijke lades van 4,75 L boven elkaar: 9,5 L in totaal op zo’n 28 cm breedte, met bakken op maximaal vier niveaus."
        }
      },
      {
        "model": "Philips Airfryer Combi XXL Connecté - 8.3L",
        "role": {
          "fr": "Meilleur airfryer connecté",
          "en": "Best connected air fryer",
          "de": "Beste vernetzte Heißluftfritteuse",
          "es": "Mejor freidora de aire conectada",
          "it": "Migliore friggitrice ad aria connessa",
          "nl": "Beste verbonden airfryer"
        },
        "why": {
          "fr": "Un grand panier de 8,3 L, le Wi-Fi avec l’app HomeID et un thermomètre de cuisson intégré : idéal pour les rôtis et les volailles entières.",
          "en": "A large 8.3L basket, Wi-Fi with the HomeID app and a built-in food thermometer: ideal for roasts and whole poultry.",
          "de": "Ein großer 8,3-L-Korb, WLAN mit der HomeID-App und ein integriertes Garthermometer: ideal für Braten und ganzes Geflügel.",
          "es": "Una cesta grande de 8,3 L, wifi con la app HomeID y un termómetro de cocción integrado: ideal para asados y aves enteras.",
          "it": "Un grande cestello da 8,3 L, Wi-Fi con l’app HomeID e un termometro di cottura integrato: ideale per arrosti e pollame intero.",
          "nl": "Een grote mand van 8,3 L, wifi met de HomeID-app en een ingebouwde kerntemperatuurmeter: ideaal voor rollades en hele kippen."
        }
      }
    ]
  },
  "robot-aspirateur-vs-balai": {
    "question": {
      "fr": "Robot aspirateur ou aspirateur balai : lequel choisir en 2026 ?",
      "en": "Robot vacuum or stick vacuum: which should you choose in 2026?",
      "de": "Saugroboter oder Stielsauger: Was solltest du 2026 wählen?",
      "es": "¿Robot aspirador o aspiradora escoba: cuál elegir en 2026?",
      "it": "Robot aspirapolvere o scopa elettrica: quale scegliere nel 2026?",
      "nl": "Robotstofzuiger of steelstofzuiger: welke kies je in 2026?"
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
          "nl": "Beste robotstofzuiger"
        },
        "why": {
          "fr": "Pour un entretien quotidien sans effort : 18 500 Pa annoncés, LiDAR, serpillères rotatives et station qui vide, lave à l’eau chaude et sèche.",
          "en": "For effortless daily cleaning: rated at 18,500 Pa, with LiDAR, rotating mops and a dock that empties, hot-washes and dries.",
          "de": "Für mühelose tägliche Pflege: laut Hersteller 18.500 Pa, LiDAR, rotierende Mopps und eine Station, die entleert, heiß wäscht und trocknet.",
          "es": "Para un mantenimiento diario sin esfuerzo: 18.500 Pa anunciados, LiDAR, mopas giratorias y base que vacía, lava con agua caliente y seca.",
          "it": "Per una pulizia quotidiana senza fatica: 18.500 Pa dichiarati, LiDAR, panni rotanti e base che svuota, lava con acqua calda e asciuga.",
          "nl": "Voor moeiteloos dagelijks onderhoud: opgegeven 18.500 Pa, LiDAR, roterende dweilen en een station dat leegt, warm wast en droogt."
        }
      },
      {
        "model": "Dyson V15 Detect",
        "role": {
          "fr": "Meilleur aspirateur balai",
          "en": "Best stick vacuum",
          "de": "Bester Akku-Stielsauger",
          "es": "Mejor aspiradora escoba",
          "it": "Migliore scopa elettrica",
          "nl": "Beste steelstofzuiger"
        },
        "why": {
          "fr": "Indispensable pour escaliers, tapis et canapé : laser qui révèle la poussière fine, capteur qui ajuste la puissance et filtration scellée.",
          "en": "Essential for stairs, rugs and the sofa: a laser that reveals fine dust, a sensor that adjusts power and sealed filtration.",
          "de": "Unverzichtbar für Treppe, Teppiche und Sofa: Laser macht feinen Staub sichtbar, ein Sensor passt die Leistung an, dazu versiegelte Filterung.",
          "es": "Imprescindible para escaleras, alfombras y sofá: láser que revela el polvo fino, sensor que ajusta la potencia y filtración sellada.",
          "it": "Indispensabile per scale, tappeti e divano: laser che rivela la polvere fine, sensore che regola la potenza e filtrazione sigillata.",
          "nl": "Onmisbaar voor trap, vloerkleden en bank: laser die fijn stof zichtbaar maakt, sensor die het vermogen aanpast en afgedichte filtering."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "Robot d’entrée de gamme idéal en duo avec un balai : navigation LiDAR, 10 000 Pa annoncés et vidage automatique dans un sac de 2,7 L.",
          "en": "An entry-level robot that pairs well with a stick vacuum: LiDAR navigation, a quoted 10,000 Pa and auto-emptying into a 2.7 L bag.",
          "de": "Einsteigerroboter, ideal im Duo mit einem Stielsauger: LiDAR-Navigation, angegebene 10.000 Pa und Absaugstation mit 2,7-l-Beutel.",
          "es": "Robot de entrada ideal en dúo con una escoba: navegación LiDAR, 10.000 Pa anunciados y autovaciado en una bolsa de 2,7 L.",
          "it": "Robot d’ingresso ideale in coppia con una scopa: navigazione LiDAR, 10.000 Pa dichiarati e svuotamento in un sacchetto da 2,7 L.",
          "nl": "Instaprobot die ideaal samengaat met een steelstofzuiger: LiDAR-navigatie, opgegeven 10.000 Pa en automatisch legen in een zak van 2,7 l."
        }
      }
    ]
  },
  "guide-securite-maison-connectee-2026": {
    "question": {
      "fr": "Quel équipement choisir pour sécuriser sa maison connectée en 2026 ?",
      "en": "What is the best smart home security equipment in 2026?",
      "de": "Welche Geräte sind 2026 die besten für die Sicherheit im Smart Home?",
      "es": "¿Qué equipo elegir para la seguridad de una casa conectada en 2026?",
      "it": "Quali dispositivi scegliere per la sicurezza della casa connessa nel 2026?",
      "nl": "Welke apparatuur is in 2026 het beste voor de beveiliging van een slim huis?"
    },
    "picks": [
      {
        "model": "Ajax StarterKit 4G",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta assoluta",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Centrale avec Ethernet et 4G, détecteurs de mouvement et d’ouverture, sans abonnement obligatoire : la base la plus fiable d’un système complet.",
          "en": "A hub with Ethernet and 4G, motion and opening sensors and no mandatory subscription: the most reliable foundation for a complete system.",
          "de": "Zentrale mit Ethernet und 4G, Bewegungs- und Öffnungsmelder, ohne Abo-Pflicht: die zuverlässigste Basis für ein komplettes System.",
          "es": "Central con Ethernet y 4G, sensores de movimiento y apertura, sin suscripción obligatoria: la base más fiable de un sistema completo.",
          "it": "Centrale con Ethernet e 4G, sensori di movimento e apertura, senza abbonamento obbligatorio: la base più affidabile di un sistema completo.",
          "nl": "Centrale met ethernet en 4G, bewegings- en openingsmelder, zonder verplicht abonnement: de betrouwbaarste basis voor een compleet systeem."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Double caméra pour les visiteurs et les colis, 8 Go de stockage intégré et aucun abonnement nécessaire pour l’historique vidéo.",
          "en": "Dual camera for visitors and parcels, 8 GB of built-in storage and no subscription needed for video history.",
          "de": "Doppelkamera für Besucher und Pakete, 8 GB interner Speicher und kein Abo für den Videoverlauf nötig.",
          "es": "Doble cámara para visitas y paquetes, 8 GB de almacenamiento interno y sin suscripción para el historial de vídeo.",
          "it": "Doppia telecamera per visitatori e pacchi, 8 GB di memoria integrata e nessun abbonamento per lo storico video.",
          "nl": "Dubbele camera voor bezoekers en pakketten, 8 GB interne opslag en geen abonnement nodig voor de videogeschiedenis."
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
          "nl": "Beste slimme slot"
        },
        "why": {
          "fr": "Se pose sur le cylindre existant, avec Wi-Fi et Matter over Thread intégrés et une batterie rechargeable, pour partager l’accès sans clé.",
          "en": "Fits over the existing cylinder, with built-in Wi-Fi, Matter over Thread and a rechargeable battery, for keyless shared access.",
          "de": "Sitzt auf dem vorhandenen Zylinder, mit integriertem WLAN, Matter over Thread und Akku – für schlüssellosen, teilbaren Zugang.",
          "es": "Se monta sobre el bombín existente, con Wi-Fi y Matter over Thread integrados y batería recargable, para compartir accesos sin llave.",
          "it": "Si monta sul cilindro esistente, con Wi-Fi e Matter over Thread integrati e batteria ricaricabile, per condividere accessi senza chiave.",
          "nl": "Past op de bestaande cilinder, met ingebouwde wifi, Matter over Thread en oplaadbare accu, om sleutelloos toegang te delen."
        }
      }
    ]
  },
  "tendances-maison-connectee-2026": {
    "question": {
      "fr": "Quels appareils connectés acheter en 2026 pour suivre les tendances ?",
      "en": "Which smart home devices should you buy in 2026 to follow the trends?",
      "de": "Welche Smart-Home-Geräte lohnen sich 2026, um den Trends zu folgen?",
      "es": "¿Qué dispositivos inteligentes comprar en 2026 para seguir las tendencias?",
      "it": "Quali dispositivi smart acquistare nel 2026 per seguire le tendenze?",
      "nl": "Welke slimme apparaten koop je in 2026 om de trends te volgen?"
    },
    "picks": [
      {
        "model": "Aqara Hub M3",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Contrôleur Matter et routeur Thread avec Zigbee et infrarouge, il exécute les automatisations en local et pilote plusieurs marques.",
          "en": "A Matter controller and Thread border router with Zigbee and IR that runs automations locally and controls several brands.",
          "de": "Matter-Controller und Thread-Border-Router mit Zigbee und IR, führt Automationen lokal aus und steuert mehrere Marken.",
          "es": "Controlador Matter y router Thread con Zigbee e IR que ejecuta automatizaciones en local y controla varias marcas.",
          "it": "Controller Matter e border router Thread con Zigbee e IR, esegue le automazioni in locale e gestisce più marchi.",
          "nl": "Matter-controller en Thread-borderrouter met Zigbee en IR die automatiseringen lokaal uitvoert en meerdere merken bedient."
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
          "nl": "Beste om energie te besparen"
        },
        "why": {
          "fr": "Tête thermostatique Matter over Thread compatible avec tous les grands écosystèmes, pour chauffer pièce par pièce sans hub propriétaire.",
          "en": "A Matter over Thread radiator valve that works with all major ecosystems, for room-by-room heating without a proprietary hub.",
          "de": "Heizkörperthermostat mit Matter over Thread für alle großen Ökosysteme, für raumweises Heizen ohne proprietären Hub.",
          "es": "Cabezal termostático Matter over Thread compatible con los grandes ecosistemas, para calentar por estancias sin hub propietario.",
          "it": "Testa termostatica Matter over Thread compatibile con i principali ecosistemi, per scaldare stanza per stanza senza hub proprietario.",
          "nl": "Radiatorknop met Matter over Thread voor alle grote ecosystemen, om per kamer te verwarmen zonder gesloten hub."
        }
      },
      {
        "model": "Reolink Argus 4 Pro",
        "role": {
          "fr": "Meilleure sécurité sans abonnement",
          "en": "Best subscription-free security",
          "de": "Beste Sicherheit ohne Abo",
          "es": "Mejor seguridad sin suscripción",
          "it": "Migliore sicurezza senza abbonamento",
          "nl": "Beste beveiliging zonder abonnement"
        },
        "why": {
          "fr": "Caméra sur batterie 4K à double objectif (180°), vision nocturne couleur et stockage microSD, sans abonnement pour la détection.",
          "en": "A 4K dual-lens (180°) battery camera with colour night vision and microSD storage, with no subscription needed for detection.",
          "de": "4K-Akkukamera mit Doppelobjektiv (180°), Farbnachtsicht und microSD-Speicher, ohne Abo für die Erkennung.",
          "es": "Cámara de batería 4K con doble objetivo (180°), visión nocturna en color y microSD, sin suscripción para la detección.",
          "it": "Telecamera a batteria 4K a doppio obiettivo (180°), visione notturna a colori e microSD, senza abbonamento per il rilevamento.",
          "nl": "4K-accucamera met dubbele lens (180°), nachtzicht in kleur en microSD-opslag, zonder abonnement voor detectie."
        }
      }
    ]
  },
  "meilleur-aspirateur-laveur-2026": {
    "question": {
      "fr": "Quel est le meilleur aspirateur laveur en 2026 ?",
      "en": "What is the best wet dry vacuum in 2026?",
      "de": "Welcher ist der beste Nass-Trocken-Sauger 2026?",
      "es": "¿Cuál es el mejor aspirador fregasuelos en 2026?",
      "it": "Qual è il miglior aspirapolvere lavapavimenti nel 2026?",
      "nl": "Wat is de beste nat-droogzuiger in 2026?"
    },
    "picks": [
      {
        "model": "Dreame H15 Pro",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Brosse lavée à 100 °C puis séchée à l’air chaud, bras pour nettoyer les bords et inclinaison à 180° sous les meubles.",
          "en": "Brush washed at 100 °C then hot-air dried, an arm for edge cleaning and a 180° tilt to reach under furniture.",
          "de": "Bürstenwäsche bei 100 °C mit Heißlufttrocknung, ein Arm für die Kantenreinigung und 180° Neigung unter Möbel.",
          "es": "Cepillo lavado a 100 °C y secado con aire caliente, brazo para limpiar bordes e inclinación de 180° bajo los muebles.",
          "it": "Spazzola lavata a 100 °C e asciugata ad aria calda, braccio per pulire i bordi e inclinazione a 180° sotto i mobili.",
          "nl": "Borstel gewassen op 100 °C en gedroogd met hete lucht, een arm voor randreiniging en 180° kantelen onder meubels."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "18 000 Pa, lavage de la brosse à 60 °C, séchage à l’air chaud et passage à plat sous les meubles dans une gamme plus accessible.",
          "en": "18,000 Pa, 60 °C brush washing, hot air drying and lie-flat reach under furniture at a more accessible tier.",
          "de": "18.000 Pa, Bürstenwäsche bei 60 °C, Heißlufttrocknung und flache Reichweite unter Möbel in einer zugänglicheren Klasse.",
          "es": "18.000 Pa, lavado del cepillo a 60 °C, secado con aire caliente y acceso en plano bajo los muebles en una gama más asequible.",
          "it": "18.000 Pa, lavaggio della spazzola a 60 °C, asciugatura ad aria calda e accesso in piano sotto i mobili in una fascia più accessibile.",
          "nl": "18.000 Pa, borstelwas op 60 °C, drogen met hete lucht en plat onder meubels in een toegankelijker segment."
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
          "nl": "Ideaal bij haren en huisdieren"
        },
        "why": {
          "fr": "Rouleaux sans aspiration qui séparent cheveux et débris, et réservoir d’eau propre de 1 litre pour les grandes surfaces.",
          "en": "Suction-free rollers that separate hair and debris, plus a 1-litre clean water tank for large areas.",
          "de": "Walzen ohne Saugkraft, die Haare und Schmutz abtrennen, dazu ein 1-Liter-Frischwassertank für große Flächen.",
          "es": "Rodillos sin succión que separan el pelo y los residuos, y un depósito de agua limpia de 1 litro para grandes superficies.",
          "it": "Rulli senza aspirazione che separano capelli e detriti, e un serbatoio dell’acqua pulita da 1 litro per le grandi superfici.",
          "nl": "Rollen zonder zuigkracht die haren en vuil scheiden, plus een schoonwatertank van 1 liter voor grote oppervlakken."
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
      "nl": "Welke Matter- en Thread-hub kies je in 2026?"
    },
    "picks": [
      {
        "model": "Aqara Hub M3",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Migliore scelta assoluta",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Contrôleur Matter, border router Thread, hub Zigbee et Ethernet/PoE réunis, compatible avec tous les grands écosystèmes.",
          "en": "Matter controller, Thread border router, Zigbee hub and Ethernet/PoE in one, compatible with every major ecosystem.",
          "de": "Matter-Controller, Thread-Border-Router, Zigbee-Hub und Ethernet/PoE in einem, kompatibel mit allen großen Ökosystemen.",
          "es": "Controlador Matter, border router Thread, hub Zigbee y Ethernet/PoE en uno, compatible con todos los grandes ecosistemas.",
          "it": "Controller Matter, border router Thread, hub Zigbee ed Ethernet/PoE in uno, compatibile con tutti i grandi ecosistemi.",
          "nl": "Matter-controller, Thread-borderrouter, Zigbee-hub en ethernet/PoE in één, compatibel met alle grote ecosystemen."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Depuis sa mise à jour de juillet 2025, il est contrôleur Matter et border router Thread, en plus de gérer l’éclairage IKEA Zigbee.",
          "en": "Since its July 2025 update it is a Matter controller and Thread border router, on top of running IKEA’s Zigbee lighting.",
          "de": "Seit dem Update vom Juli 2025 ist er Matter-Controller und Thread-Border-Router und steuert weiterhin IKEAs Zigbee-Beleuchtung.",
          "es": "Desde su actualización de julio de 2025 es controlador Matter y border router Thread, además de gestionar la iluminación Zigbee de IKEA.",
          "it": "Dall’aggiornamento di luglio 2025 è controller Matter e border router Thread, oltre a gestire l’illuminazione Zigbee IKEA.",
          "nl": "Sinds de update van juli 2025 is hij Matter-controller en Thread-borderrouter, naast het beheer van IKEA’s Zigbee-verlichting."
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
          "nl": "Ideaal voor iPhone-gebruikers"
        },
        "why": {
          "fr": "Enceinte Siri, concentrateur Apple Maison et border router Thread : la façon la plus simple de démarrer Matter chez Apple.",
          "en": "Siri speaker, Apple Home hub and Thread border router: the simplest way to start with Matter in the Apple world.",
          "de": "Siri-Lautsprecher, Apple-Home-Zentrale und Thread-Border-Router: der einfachste Matter-Einstieg in der Apple-Welt.",
          "es": "Altavoz con Siri, concentrador de Apple Casa y border router Thread: la forma más sencilla de empezar con Matter en Apple.",
          "it": "Altoparlante Siri, hub di Apple Casa e border router Thread: il modo più semplice per iniziare con Matter in casa Apple.",
          "nl": "Siri-speaker, Apple Woning-hub en Thread-borderrouter: de eenvoudigste manier om met Matter te starten bij Apple."
        }
      }
    ]
  },
  "piscine-connectee-guide": {
    "question": {
      "fr": "Quel équipement choisir pour une piscine connectée en 2026 ?",
      "en": "What equipment should you choose for a smart pool in 2026?",
      "de": "Welche Ausstattung lohnt sich 2026 für einen vernetzten Pool?",
      "es": "¿Qué equipo elegir para una piscina conectada en 2026?",
      "it": "Quale attrezzatura scegliere per una piscina connessa nel 2026?",
      "nl": "Welke apparatuur kies je in 2026 voor een slim zwembad?"
    },
    "picks": [
      {
        "model": "Ondilo ICO Pool V2",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Analyseur flottant qui mesure pH, ORP et température chaque heure, avec une version dédiée aux piscines au sel et des conseils de dosage.",
          "en": "Floating analyser measuring pH, ORP and temperature every hour, with a dedicated salt-pool version and dosing advice.",
          "de": "Schwimmender Analysator, der stündlich pH, Redox und Temperatur misst, mit eigener Salzwasserversion und Dosierhinweisen.",
          "es": "Analizador flotante que mide pH, ORP y temperatura cada hora, con versión específica para sal y consejos de dosificación.",
          "it": "Analizzatore galleggiante che misura pH, ORP e temperatura ogni ora, con versione dedicata al sale e consigli di dosaggio.",
          "nl": "Drijvende analyser die elk uur pH, ORP en temperatuur meet, met een aparte zoutversie en doseeradvies."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Capteur pH, ORP et température sans recharge ni calibrage pendant environ deux ans, avec passerelle Wi-Fi et application sans abonnement.",
          "en": "pH, ORP and temperature sensor with no charging or calibration for about two years, plus a Wi-Fi gateway and subscription-free app.",
          "de": "pH-, Redox- und Temperatursensor, rund zwei Jahre ohne Laden und Kalibrieren, mit WLAN-Gateway und App ohne Abo.",
          "es": "Sensor de pH, ORP y temperatura sin carga ni calibración durante unos dos años, con pasarela wifi y app sin suscripción.",
          "it": "Sensore di pH, ORP e temperatura senza ricarica né calibrazione per circa due anni, con gateway Wi-Fi e app senza abbonamento.",
          "nl": "Sensor voor pH, ORP en temperatuur, ongeveer twee jaar zonder opladen of kalibreren, met wifi-gateway en app zonder abonnement."
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
          "nl": "Ideaal voor automatische reiniging"
        },
        "why": {
          "fr": "Robot filaire pour bassins jusqu’à 12 m : fond, parois et ligne d’eau, filtre accessible par le dessus et programmation via MyDolphin Plus.",
          "en": "Corded robot for pools up to 12 m: floor, walls and waterline, top-access filter and scheduling via MyDolphin Plus.",
          "de": "Roboter mit Kabel für Becken bis 12 m: Boden, Wände und Wasserlinie, Filter von oben und Zeitpläne per MyDolphin Plus.",
          "es": "Robot con cable para piscinas de hasta 12 m: fondo, paredes y línea de flotación, filtro superior y programación con MyDolphin Plus.",
          "it": "Robot con cavo per vasche fino a 12 m: fondo, pareti e linea d’acqua, filtro dall’alto e programmazione con MyDolphin Plus.",
          "nl": "Robot met snoer voor baden tot 12 m: bodem, wanden en waterlijn, filter van bovenaf en planning via MyDolphin Plus."
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
      "nl": "Wat is de stilste ventilator voor de slaapkamer in 2026?"
    },
    "picks": [
      {
        "model": "Duux Whisper Flex 2 Smart",
        "role": {
          "fr": "Meilleur choix pour dormir",
          "en": "Best overall for sleeping",
          "de": "Beste Wahl zum Schlafen",
          "es": "Mejor opción para dormir",
          "it": "Migliore per dormire",
          "nl": "Beste keuze om bij te slapen"
        },
        "why": {
          "fr": "Moteur DC, 30 vitesses et environ 13 dB à vitesse minimale selon Duux, avec mode nuit, brise naturelle et pilotage par appli ou voix.",
          "en": "DC motor, 30 speeds and around 13 dB at minimum speed according to Duux, with night mode, natural breeze and app or voice control.",
          "de": "DC-Motor, 30 Stufen und laut Duux rund 13 dB auf der kleinsten Stufe, mit Nachtmodus, Naturwind und Steuerung per App oder Sprache.",
          "es": "Motor DC, 30 velocidades y unos 13 dB en velocidad mínima según Duux, con modo noche, brisa natural y control por app o voz.",
          "it": "Motore DC, 30 velocità e circa 13 dB alla velocità minima secondo Duux, con modalità notte, brezza naturale e controllo da app o voce.",
          "nl": "DC-motor, 30 snelheden en volgens Duux ongeveer 13 dB op de laagste stand, met nachtmodus, natuurlijke bries en bediening via app of stem."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Moteur DC de 24 W, environ 28 dB à vitesse minimale selon Xiaomi, mode brise naturelle et pilotage via Xiaomi Home, Alexa ou Google.",
          "en": "24 W DC motor, around 28 dB at minimum speed according to Xiaomi, natural breeze mode and control via Xiaomi Home, Alexa or Google.",
          "de": "24-W-DC-Motor, laut Xiaomi rund 28 dB auf der kleinsten Stufe, Naturwindmodus und Steuerung über Xiaomi Home, Alexa oder Google.",
          "es": "Motor DC de 24 W, unos 28 dB en velocidad mínima según Xiaomi, modo brisa natural y control con Xiaomi Home, Alexa o Google.",
          "it": "Motore DC da 24 W, circa 28 dB alla velocità minima secondo Xiaomi, modalità brezza naturale e controllo con Xiaomi Home, Alexa o Google.",
          "nl": "DC-motor van 24 W, volgens Xiaomi ongeveer 28 dB op de laagste stand, natuurlijke-briesmodus en bediening via Xiaomi Home, Alexa of Google."
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
          "nl": "Ideaal bij allergie"
        },
        "why": {
          "fr": "Ventilateur sans pales et purificateur HEPA H13 avec filtre catalytique anti-formaldéhyde, mode nuit qui limite le bruit et atténue l'écran.",
          "en": "Bladeless fan and HEPA H13 purifier with a catalytic formaldehyde filter, plus a night mode that limits noise and dims the display.",
          "de": "Rotorloser Ventilator und HEPA-H13-Luftreiniger mit Katalysatorfilter gegen Formaldehyd, dazu ein Nachtmodus, der Geräusch und Display reduziert.",
          "es": "Ventilador sin aspas y purificador HEPA H13 con filtro catalítico contra el formaldehído, y un modo noche que limita el ruido y atenúa la pantalla.",
          "it": "Ventilatore senza pale e purificatore HEPA H13 con filtro catalitico contro la formaldeide, e una modalità notte che limita il rumore e attenua il display.",
          "nl": "Bladloze ventilator en HEPA H13-luchtreiniger met katalytisch formaldehydefilter, plus een nachtmodus die geluid beperkt en het display dimt."
        }
      }
    ]
  },
  "test-philips-combi-xxl-connected": {
    "question": {
      "fr": "Quel est le meilleur airfryer haut de gamme connecté en 2026 ?",
      "en": "What is the best premium connected air fryer in 2026?",
      "de": "Was ist die beste vernetzte Premium-Heißluftfritteuse 2026?",
      "es": "¿Cuál es la mejor freidora de aire premium conectada en 2026?",
      "it": "Qual è la migliore friggitrice ad aria premium connessa nel 2026?",
      "nl": "Wat is de beste premium slimme airfryer in 2026?"
    },
    "picks": [
      {
        "model": "Philips Airfryer Combi XXL Connecté - 8.3L",
        "role": {
          "fr": "Meilleur choix pour la précision de cuisson",
          "en": "Best for cooking precision",
          "de": "Beste Wahl für präzises Garen",
          "es": "Mejor opción para la precisión de cocción",
          "it": "Migliore per la precisione di cottura",
          "nl": "Beste voor nauwkeurig garen"
        },
        "why": {
          "fr": "Sa sonde intégrée arrête la cuisson des viandes au bon degré, et l’app HomeID permet de suivre la cuisson à distance dans une cuve de 8,3 L.",
          "en": "Its built-in probe stops meat at the right doneness, and the HomeID app lets you follow cooking remotely in a roomy 8.3L pan.",
          "de": "Der integrierte Fühler beendet das Garen von Fleisch auf den Punkt, und die HomeID-App zeigt den Garverlauf im 8,3-Liter-Garraum aus der Ferne.",
          "es": "Su sonda integrada detiene la carne en el punto justo y la app HomeID permite seguir la cocción a distancia en una cubeta de 8,3 L.",
          "it": "La sonda integrata ferma la carne al punto giusto e l’app HomeID consente di seguire la cottura a distanza in un cestello da 8,3 L.",
          "nl": "De ingebouwde sonde stopt vlees op de juiste garing, en met de HomeID-app volgt u de bereiding op afstand in een pan van 8,3 L."
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
          "nl": "Beste voor twee gerechten tegelijk"
        },
        "why": {
          "fr": "Ses deux tiroirs superposés de 4,75 L se règlent séparément et finissent en même temps, idéal pour un plat et son accompagnement.",
          "en": "Its two stacked 4.75L drawers are set independently and can finish together, ideal for a main and a side.",
          "de": "Zwei übereinanderliegende 4,75-Liter-Schubladen lassen sich getrennt einstellen und gleichzeitig fertigstellen, ideal für Hauptgericht und Beilage.",
          "es": "Sus dos cajones superpuestos de 4,75 L se ajustan por separado y terminan a la vez, ideal para un plato principal y su guarnición.",
          "it": "I due cassetti sovrapposti da 4,75 L si regolano separatamente e finiscono insieme, ideali per piatto principale e contorno.",
          "nl": "De twee gestapelde lades van 4,75 L stelt u apart in en ze zijn tegelijk klaar, ideaal voor hoofdgerecht en bijgerecht."
        }
      },
      {
        "model": "Cosori Dual Blaze Smart Air Fryer - 6.4L",
        "role": {
          "fr": "Meilleure alternative connectée plus compacte",
          "en": "Best compact connected alternative",
          "de": "Beste kompakte vernetzte Alternative",
          "es": "Mejor alternativa conectada compacta",
          "it": "Migliore alternativa connessa compatta",
          "nl": "Beste compacte slimme alternatief"
        },
        "why": {
          "fr": "Une résistance en haut et en bas dore les deux faces sans retourner, avec l’application VeSync, dans un format plus compact et plus abordable.",
          "en": "Top and bottom heating elements brown both sides without flipping, with the VeSync app, in a more compact and affordable format.",
          "de": "Heizelemente oben und unten bräunen beide Seiten ohne Wenden, mit VeSync-App, in einem kompakteren und günstigeren Format.",
          "es": "Resistencias arriba y abajo doran ambas caras sin dar la vuelta, con app VeSync, en un formato más compacto y asequible.",
          "it": "Resistenze sopra e sotto dorano entrambi i lati senza girare il cibo, con app VeSync, in un formato più compatto e accessibile.",
          "nl": "Verwarmingselementen boven en onder bruinen beide kanten zonder omdraaien, met VeSync-app, in een compacter en betaalbaarder formaat."
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
      "nl": "Wat is de beste slimme thermostaat voor een warmtepomp in 2026?"
    },
    "picks": [
      {
        "model": "tado Heat Pump Optimizer X",
        "role": {
          "fr": "Meilleur choix pour pompe à chaleur",
          "en": "Best for heat pumps",
          "de": "Beste Wahl für Wärmepumpen",
          "es": "Mejor opción para bombas de calor",
          "it": "Miglior scelta per pompe di calore",
          "nl": "Beste keuze voor warmtepompen"
        },
        "why": {
          "fr": "Il se connecte à la PAC (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic) et module sa puissance selon la température des pièces.",
          "en": "It connects to the heat pump itself (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic) and adjusts its output to room temperatures.",
          "de": "Er wird an die Wärmepumpe selbst angeschlossen (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic) und passt die Leistung den Raumtemperaturen an.",
          "es": "Se conecta a la propia bomba (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic) y ajusta su potencia a la temperatura de las estancias.",
          "it": "Si collega alla pompa stessa (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic) e ne adatta la potenza alla temperatura delle stanze.",
          "nl": "Hij wordt op de warmtepomp zelf aangesloten (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic) en past het vermogen aan de kamertemperatuur aan."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Simple à installer, compatible avec la plupart des PAC air-eau en on/off, avec Auto-Adapt, Eco-Assist et Matter via le Thermo Hub.",
          "en": "Easy to install, works with most on/off air-to-water heat pumps, with Auto-Adapt, Eco-Assist and Matter via the Thermo Hub.",
          "de": "Einfach zu installieren, passt zu den meisten Luft-Wasser-Wärmepumpen mit Ein/Aus-Kontakt, mit Auto-Adapt, Eco-Assist und Matter über den Thermo Hub.",
          "es": "Fácil de instalar, compatible con la mayoría de bombas aire-agua on/off, con Auto-Adapt, Eco-Assist y Matter mediante el Thermo Hub.",
          "it": "Facile da installare, compatibile con la maggior parte delle pompe aria-acqua on/off, con Auto-Adapt, Eco-Assist e Matter tramite il Thermo Hub.",
          "nl": "Eenvoudig te installeren, werkt met de meeste lucht-waterwarmtepompen met aan/uit-contact, met Auto-Adapt, Eco-Assist en Matter via de Thermo Hub."
        }
      },
      {
        "model": "Honeywell Home T6",
        "role": {
          "fr": "Idéal en OpenTherm sans hub",
          "en": "Best for OpenTherm without a hub",
          "de": "Ideal für OpenTherm ohne Hub",
          "es": "Ideal en OpenTherm sin hub",
          "it": "Ideale in OpenTherm senza hub",
          "nl": "Ideaal voor OpenTherm zonder hub"
        },
        "why": {
          "fr": "Compatible on/off et OpenTherm, dont les pompes à chaleur, il se connecte directement au Wi-Fi et se pilote depuis l’application Resideo.",
          "en": "Compatible with on/off and OpenTherm systems, including heat pumps, it connects straight to Wi-Fi and is controlled from the Resideo app.",
          "de": "Kompatibel mit Ein/Aus- und OpenTherm-Anlagen inklusive Wärmepumpen, verbindet sich direkt mit dem WLAN und wird über die Resideo-App gesteuert.",
          "es": "Compatible con sistemas on/off y OpenTherm, incluidas bombas de calor, se conecta directamente al wifi y se controla desde la app Resideo.",
          "it": "Compatibile con impianti on/off e OpenTherm, pompe di calore incluse, si collega direttamente al Wi-Fi e si controlla dall’app Resideo.",
          "nl": "Compatibel met aan/uit- en OpenTherm-systemen, ook warmtepompen, maakt rechtstreeks verbinding met wifi en wordt bediend via de Resideo-app."
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
      "nl": "Wat is de beste robotmaaier zonder begrenzingsdraad in 2026?"
    },
    "picks": [
      {
        "model": "ECOVACS GOAT A1600 RTK",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta assoluta",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "RTK et LiDAR combinés pour rester précis près des arbres, jusqu’à 1 600 m², 33 cm de coupe et des pentes jusqu’à 50 % selon ECOVACS.",
          "en": "RTK and LiDAR combined to stay accurate near trees, up to 1,600 m², a 33 cm cut and slopes up to 50% according to ECOVACS.",
          "de": "RTK und LiDAR kombiniert für präzise Ortung auch unter Bäumen, bis 1.600 m², 33 cm Schnittbreite und laut ECOVACS bis 50 % Steigung.",
          "es": "RTK y LiDAR combinados para mantener la precisión cerca de árboles, hasta 1.600 m², 33 cm de corte y pendientes de hasta el 50 % según ECOVACS.",
          "it": "RTK e LiDAR combinati per restare precisi vicino agli alberi, fino a 1.600 m², taglio da 33 cm e pendenze fino al 50% secondo ECOVACS.",
          "nl": "RTK en LiDAR gecombineerd voor precisie bij bomen, tot 1.600 m², 33 cm maaibreedte en volgens ECOVACS hellingen tot 50%."
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
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "RTK et caméra VisionFence sans câble pour les pelouses jusqu’à 500 m², avec une configuration guidée simple dans l’application.",
          "en": "Wire-free RTK plus VisionFence camera for lawns up to 500 m², with a simple guided setup in the app.",
          "de": "Kabelloses RTK plus VisionFence-Kamera für Rasenflächen bis 500 m², mit einfacher geführter Einrichtung in der App.",
          "es": "RTK sin cable y cámara VisionFence para céspedes de hasta 500 m², con una configuración guiada sencilla en la app.",
          "it": "RTK senza filo e telecamera VisionFence per prati fino a 500 m², con una semplice configurazione guidata nell’app.",
          "nl": "Draadloze RTK plus VisionFence-camera voor gazons tot 500 m², met een eenvoudige begeleide installatie in de app."
        }
      },
      {
        "model": "Mammotion LUBA 2 AWD 3000X",
        "role": {
          "fr": "Idéal grands terrains en pente",
          "en": "Best for large slopes",
          "de": "Ideal für große Hanglagen",
          "es": "Ideal para grandes pendientes",
          "it": "Ideale per grandi pendenze",
          "nl": "Beste voor grote hellingen"
        },
        "why": {
          "fr": "Quatre roues motrices, pentes annoncées jusqu’à 80 %, 40 cm de coupe et RTK + vision IA pour des terrains jusqu’à 3 000 m².",
          "en": "All-wheel drive, slopes rated up to 80%, a 40 cm cut and RTK plus AI vision for plots up to 3,000 m².",
          "de": "Allradantrieb, laut Hersteller bis 80 % Steigung, 40 cm Schnittbreite und RTK plus KI-Kamera für Flächen bis 3.000 m².",
          "es": "Tracción total, pendientes anunciadas de hasta el 80 %, 40 cm de corte y RTK con visión IA para terrenos de hasta 3.000 m².",
          "it": "Trazione integrale, pendenze dichiarate fino all’80%, taglio da 40 cm e RTK con visione IA per terreni fino a 3.000 m².",
          "nl": "Vierwielaandrijving, hellingen tot 80% volgens de fabrikant, 40 cm maaibreedte en RTK plus AI-camera voor percelen tot 3.000 m²."
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
      "nl": "Wat is de beste warmtepompdroger in 2026?"
    },
    "picks": [
      {
        "model": "Bosch Serie 8 WRB247C40",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Bester Allrounder",
          "es": "Mejor opción global",
          "it": "Migliore scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Classe A sur la nouvelle étiquette (79 kWh/100 cycles), 57 dB, condensation A et condenseur autonettoyant : sobre, discret et presque sans entretien.",
          "en": "Class A on the new label (79 kWh/100 cycles), 57 dB, condensation A and a self-cleaning condenser: efficient, quiet and nearly maintenance-free.",
          "de": "Klasse A auf dem neuen Label (79 kWh/100 Zyklen), 57 dB, Kondensation A und selbstreinigender Kondensator: sparsam, leise und fast wartungsfrei.",
          "es": "Clase A en la nueva etiqueta (79 kWh/100 ciclos), 57 dB, condensación A y condensador autolimpiante: eficiente, silenciosa y casi sin mantenimiento.",
          "it": "Classe A sulla nuova etichetta (79 kWh/100 cicli), 57 dB, condensazione A e condensatore autopulente: efficiente, silenziosa e quasi senza manutenzione.",
          "nl": "Klasse A op het nieuwe label (79 kWh/100 cycli), 57 dB, condensatie A en zelfreinigende condensor: zuinig, stil en nagenoeg onderhoudsvrij."
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
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "Classe énergétique A et condensation A avec fonction vapeur SteamCure, sur un segment de prix bien plus accessible ; 8 kg pour couples et petites familles.",
          "en": "Energy class A and condensation A with SteamCure steam, in a much more affordable price tier; 8 kg suits couples and small families.",
          "de": "Energieklasse A und Kondensation A mit SteamCure-Dampf in einem deutlich günstigeren Preissegment; 8 kg für Paare und kleine Familien.",
          "es": "Clase energética A y condensación A con vapor SteamCure, en un segmento de precio mucho más accesible; 8 kg para parejas y familias pequeñas.",
          "it": "Classe energetica A e condensazione A con vapore SteamCure, in una fascia di prezzo molto più accessibile; 8 kg per coppie e piccole famiglie.",
          "nl": "Energieklasse A en condensatie A met SteamCure-stoom, in een veel betaalbaarder prijssegment; 8 kg voor stellen en kleine gezinnen."
        }
      },
      {
        "model": "Miele TQ 1000 WP Nova Edition",
        "role": {
          "fr": "Idéal pour la longévité",
          "en": "Best for longevity",
          "de": "Ideal für Langlebigkeit",
          "es": "Ideal para la durabilidad",
          "it": "Ideale per la durata",
          "nl": "Ideaal voor een lange levensduur"
        },
        "why": {
          "fr": "Classe B mais bruit et condensation A, vapeur SteamCare, WoolDry et finition Miele, conçue selon la marque pour 20 ans d'utilisation.",
          "en": "Class B but noise and condensation A, SteamCare steam, WoolDry and Miele build quality, designed by the brand for 20 years of use.",
          "de": "Klasse B, aber Geräusch und Kondensation A, SteamCare-Dampf, WoolDry und Miele-Verarbeitung, laut Hersteller auf 20 Jahre Nutzung ausgelegt.",
          "es": "Clase B, pero ruido y condensación A, vapor SteamCare, WoolDry y calidad Miele, diseñada según la marca para 20 años de uso.",
          "it": "Classe B ma rumore e condensazione A, vapore SteamCare, WoolDry e qualità Miele, progettata secondo il marchio per 20 anni di utilizzo.",
          "nl": "Klasse B, maar geluid en condensatie A, SteamCare-stoom, WoolDry en Miele-kwaliteit, volgens het merk ontworpen voor 20 jaar gebruik."
        }
      }
    ]
  }
}

export interface QuickAnswer {
  question: string
  picks: { model: string; role: string; why: string; url: string }[]
}

/** Localized verdict with each pick linked to the reader's Amazon store. */
export function getQuickAnswer(article: { slug: string; pillar: string }, lang: Lang): QuickAnswer | null {
  const data = QUICK_ANSWERS[article.slug]
  if (!data) return null
  const rec = getArticleRecommendations(article, lang)
  // Picks name catalog products by their French title; titles are
  // localized, so match on the ASIN to resolve them in every locale.
  const frRec = getArticleRecommendations(article, 'fr')
  const resolve = (model: string): { model: string; url: string } | undefined => {
    if (rec?.kind === 'catalog' && frRec?.kind === 'catalog') {
      const asin = frRec.products.find((p) => p.title === model)?.asin
      const product = rec.products.find((p) => p.asin === asin)
      return product && { model: product.title, url: product.url }
    }
    if (rec?.kind === 'models') {
      const link = rec.models.find((m) => m.name === model)
      return link && { model: link.name, url: link.url }
    }
    return undefined
  }
  const picks = data.picks.flatMap((pick) => {
    const resolved = resolve(pick.model)
    return resolved ? [{ ...resolved, role: pick.role[lang], why: pick.why[lang] }] : []
  })
  return picks.length >= 2 ? { question: data.question[lang], picks } : null
}
