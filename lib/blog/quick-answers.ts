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
          "fr": "Sa brosse DuoRoller en caoutchouc évite l'emmêlement des poils, et son filtre HEPA E12 et sa station d'auto-vidage conviennent aux foyers avec chien ou chat.",
          "en": "Its rubber DuoRoller brush prevents hair tangling, and the HEPA E12 filter plus auto-empty station suit homes with a dog or cat.",
          "de": "Die Gummi-DuoRoller-Bürste verhindert das Verheddern der Haare, und HEPA-Filter E12 samt Absaugstation passen zu Haushalten mit Hund oder Katze.",
          "es": "Su cepillo DuoRoller de goma evita que se enreden los pelos, y el filtro HEPA E12 con la estación de autovaciado encaja en hogares con perro o gato.",
          "it": "La spazzola DuoRoller in gomma evita l'aggrovigliamento dei peli e il filtro HEPA E12 con la stazione di autosvuotamento si adatta alle case con cani o gatti.",
          "nl": "De rubberen DuoRoller-borstel voorkomt klitten van haren, en het HEPA E12-filter met zelfleegstation past bij huishoudens met hond of kat."
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
          "fr": "Avec sa forte aspiration et sa brosse anti-emmêlement en caoutchouc, il convient aux races à poils longs, et sa brosse latérale extensible atteint coins et bords.",
          "en": "With strong suction and a rubber anti-tangle brush, it suits long-haired breeds, and its extendable side brush reaches corners and edges.",
          "de": "Mit starker Saugkraft und Anti-Verheddern-Gummibürste passt er zu langhaarigen Rassen, und die ausfahrbare Seitenbürste erreicht Ecken und Kanten.",
          "es": "Con gran succión y cepillo antienredos de goma, va bien con razas de pelo largo, y su cepillo lateral extensible llega a rincones y bordes.",
          "it": "Con forte aspirazione e spazzola antigroviglio in gomma si adatta alle razze a pelo lungo, e la spazzola laterale estensibile raggiunge angoli e bordi.",
          "nl": "Met sterke zuigkracht en een rubberen anti-klitborstel past hij bij langharige rassen, en de uitschuifbare zijborstel bereikt hoeken en randen."
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
          "fr": "Il offre une forte aspiration, une brosse ZeroTangle et une station d'auto-vidage à un prix nettement plus accessible, le choix malin pour les propriétaires soucieux du budget.",
          "en": "It offers strong suction, a ZeroTangle brush and an auto-empty station at a much more accessible price, the smart pick for budget-conscious pet owners.",
          "de": "Er bietet kräftige Saugkraft, eine ZeroTangle-Bürste und eine Absaugstation zu einem deutlich günstigeren Preis, die clevere Wahl für preisbewusste Tierhalter.",
          "es": "Ofrece buena succión, cepillo ZeroTangle y estación de autovaciado a un precio mucho más accesible, la opción inteligente para dueños de mascotas con presupuesto ajustado.",
          "it": "Offre forte aspirazione, spazzola ZeroTangle e stazione di autosvuotamento a un prezzo molto più accessibile, la scelta furba per chi ha animali e un budget limitato.",
          "nl": "Hij biedt sterke zuigkracht, een ZeroTangle-borstel en een zelfleegstation tegen een veel lagere prijs, de slimme keuze voor dierenbezitters met een beperkt budget."
        }
      },
      {
        "model": "iRobot Roomba j9+",
        "role": {
          "fr": "Brosse la plus robuste",
          "en": "Most robust brush",
          "de": "Robusteste Bürste",
          "es": "Cepillo más resistente",
          "it": "Spazzola più robusta",
          "nl": "Meest robuuste borstel"
        },
        "why": {
          "fr": "Ses deux rouleaux en caoutchouc et sa station Clean Base en font la référence anti-emmêlement, la valeur sûre pour les chiens à poils longs.",
          "en": "Its two rubber rollers and Clean Base station make it the anti-tangle reference, the safe bet for long-haired dogs.",
          "de": "Seine zwei Gummiwalzen und die Clean-Base-Station machen ihn zur Referenz gegen Verheddern, die sichere Wahl für langhaarige Hunde.",
          "es": "Sus dos rodillos de goma y la estación Clean Base lo convierten en la referencia antienredos, la apuesta segura para perros de pelo largo.",
          "it": "I due rulli in gomma e la stazione Clean Base lo rendono il riferimento anti-groviglio, la scelta sicura per i cani a pelo lungo.",
          "nl": "Zijn twee rubberen rollen en het Clean Base-station maken hem de anti-klitreferentie, de veilige keuze voor langharige honden."
        }
      }
    ]
  },
  "waermepumpentrockner-vergleich": {
    "question": {
      "fr": "Quel est le meilleur sèche-linge à pompe à chaleur en 2026 ?",
      "en": "What is the best heat pump dryer in 2026?",
      "de": "Welcher ist der beste Wärmepumpentrockner 2026?",
      "es": "¿Cuál es la mejor secadora de bomba de calor en 2026?",
      "it": "Qual è la migliore asciugatrice a pompa di calore nel 2026?",
      "nl": "Wat is de beste warmtepompdroger in 2026?"
    },
    "picks": [
      {
        "model": "Bosch Serie 8",
        "role": {
          "fr": "Meilleur polyvalent",
          "en": "Best all-rounder",
          "de": "Bester Allrounder",
          "es": "Mejor opción polivalente",
          "it": "Miglior tuttofare",
          "nl": "Beste allrounder"
        },
        "why": {
          "fr": "Elle ajoute à la Serie 6 la classe A+++, une plus grande capacité et la fonction anti-froissage, ce qui en fait le meilleur polyvalent du comparatif.",
          "en": "It adds A+++ energy class, a larger capacity and an anti-crease function over the Serie 6, making it the best all-rounder in the comparison.",
          "de": "Gegenüber der Serie 6 bietet sie Klasse A+++, mehr Fassungsvermögen und eine Knitterschutzfunktion und ist damit der beste Allrounder im Vergleich.",
          "es": "Añade a la Serie 6 la clase A+++, mayor capacidad y la función antiarrugas, lo que la convierte en la mejor polivalente de la comparativa.",
          "it": "Rispetto alla Serie 6 aggiunge la classe A+++, una capacità maggiore e la funzione antipiega, ed è la miglior tuttofare del confronto.",
          "nl": "Ze voegt aan de Serie 6 klasse A+++, meer capaciteit en een antikreukfunctie toe en is zo de beste allrounder in de vergelijking."
        }
      },
      {
        "model": "Bosch Serie 6",
        "role": {
          "fr": "Pour économiser",
          "en": "Best for saving money",
          "de": "Zum Sparen",
          "es": "Para ahorrar",
          "it": "Per risparmiare",
          "nl": "Om te besparen"
        },
        "why": {
          "fr": "C'est l'entrée de gamme idéale avec sonde AutoDry et un prix juste, recommandée pour limiter le budget d'achat.",
          "en": "It is the ideal entry-level pick with an AutoDry sensor and a fair price, recommended for keeping the purchase budget down.",
          "de": "Sie ist das ideale Einstiegsmodell mit AutoDry-Sensor und fairem Preis, empfohlen, wenn man das Anschaffungsbudget niedrig halten will.",
          "es": "Es la gama de entrada ideal, con sonda AutoDry y un precio ajustado, recomendada para contener el presupuesto de compra.",
          "it": "È l'entry level ideale, con sonda AutoDry e un prezzo giusto, consigliata per contenere il budget d'acquisto.",
          "nl": "Het is het ideale instapmodel met AutoDry-sensor en een faire prijs, aanbevolen om het aankoopbudget laag te houden."
        }
      },
      {
        "model": "Miele TWR780WP",
        "role": {
          "fr": "Longévité maximale",
          "en": "Maximum longevity",
          "de": "Maximale Langlebigkeit",
          "es": "Máxima longevidad",
          "it": "Massima longevità",
          "nl": "Maximale levensduur"
        },
        "why": {
          "fr": "Miele est la référence en longévité, testé pour environ vingt ans d'usage, et son prix élevé se justifie par la durée de vie et la qualité de fabrication.",
          "en": "Miele is the longevity reference, tested for about twenty years of use, and its high price is justified by lifespan and build quality.",
          "de": "Miele ist die Referenz bei der Langlebigkeit, auf etwa zwanzig Jahre Nutzung getestet, und der hohe Preis ist durch Lebensdauer und Verarbeitung gerechtfertigt.",
          "es": "Miele es la referencia en longevidad, probada para unos veinte años de uso, y su alto precio se justifica por la vida útil y la calidad de fabricación.",
          "it": "Miele è il riferimento per la longevità, testata per circa vent'anni di utilizzo, e il prezzo elevato è giustificato da durata e qualità costruttiva.",
          "nl": "Miele is de referentie qua levensduur, getest op ongeveer twintig jaar gebruik, en de hoge prijs wordt gerechtvaardigd door levensduur en bouwkwaliteit."
        }
      },
      {
        "model": "Samsung DV90BB",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteit"
        },
        "why": {
          "fr": "Samsung offre beaucoup d'équipement pour le prix, avec des capteurs OptimalDry et une application SmartThings aboutie.",
          "en": "Samsung packs a lot of equipment for the price, with OptimalDry sensors and a well-developed SmartThings app.",
          "de": "Samsung bietet viel Ausstattung für den Preis, mit OptimalDry-Sensoren und einer ausgereiften SmartThings-App.",
          "es": "Samsung ofrece mucho equipamiento por el precio, con sensores OptimalDry y una aplicación SmartThings muy lograda.",
          "it": "Samsung offre molte dotazioni per il prezzo, con sensori OptimalDry e un'app SmartThings ben riuscita.",
          "nl": "Samsung biedt veel uitrusting voor de prijs, met OptimalDry-sensoren en een goed uitgewerkte SmartThings-app."
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
        "model": "Dyson Pure Cool",
        "role": {
          "fr": "Silence absolu",
          "en": "Absolute silence",
          "de": "Absolute Ruhe",
          "es": "Silencio absoluto",
          "it": "Silenzio assoluto",
          "nl": "Absolute stilte"
        },
        "why": {
          "fr": "Ce ventilateur sans pales de référence reste très discret en mode nuit, avec oscillation, application et parfois filtration HEPA, mais à un prix élevé.",
          "en": "This reference bladeless fan stays very quiet in night mode, with oscillation, an app and sometimes HEPA filtration, but at a high price.",
          "de": "Dieser Referenz-Ventilator ohne Rotorblätter bleibt im Nachtmodus sehr leise, mit Oszillation, App und teils HEPA-Filterung, aber zu hohem Preis.",
          "es": "Este ventilador sin aspas de referencia es muy discreto en modo noche, con oscilación, app y a veces filtración HEPA, pero a un precio elevado.",
          "it": "Questo ventilatore senza pale di riferimento resta molto silenzioso in modalità notte, con oscillazione, app e talvolta filtrazione HEPA, ma a un prezzo elevato.",
          "nl": "Deze bladloze referentieventilator blijft in nachtmodus erg stil, met oscillatie, app en soms HEPA-filtratie, maar tegen een hoge prijs."
        }
      },
      {
        "model": "Rowenta Turbo Silence Extreme+",
        "role": {
          "fr": "Meilleur équilibre silence-prix",
          "en": "Best balance of quiet and price",
          "de": "Beste Balance aus Ruhe und Preis",
          "es": "Mejor equilibrio silencio-precio",
          "it": "Miglior equilibrio silenzio-prezzo",
          "nl": "Beste balans stilte en prijs"
        },
        "why": {
          "fr": "Il offre l'équilibre parfait entre silence et prix, avec un mode nuit très discret, et existe sur pied et en tour.",
          "en": "It strikes the perfect balance between quiet and price, with a very discreet night mode, and comes as a pedestal or tower model.",
          "de": "Er bietet die perfekte Balance aus Ruhe und Preis mit sehr dezentem Nachtmodus und ist als Standventilator und als Turm erhältlich.",
          "es": "Ofrece el equilibrio perfecto entre silencio y precio, con un modo noche muy discreto, y existe en versión de pie y de torre.",
          "it": "Offre l'equilibrio perfetto tra silenzio e prezzo, con una modalità notte molto discreta, ed è disponibile a piantana e a torre.",
          "nl": "Hij biedt de perfecte balans tussen stilte en prijs, met een zeer discrete nachtmodus, en is er als statief- en torenmodel."
        }
      },
      {
        "model": "Cecotec EnergySilence",
        "role": {
          "fr": "Petit budget",
          "en": "Best on a budget",
          "de": "Für kleines Budget",
          "es": "Para presupuesto ajustado",
          "it": "Per budget ridotto",
          "nl": "Voor een klein budget"
        },
        "why": {
          "fr": "C'est la meilleure option pas chère avec moteur DC, mode nuit, minuterie et télécommande.",
          "en": "It is the best cheap option with a DC motor, night mode, timer and remote control.",
          "de": "Er ist die beste günstige Option mit DC-Motor, Nachtmodus, Timer und Fernbedienung.",
          "es": "Es la mejor opción económica con motor DC, modo noche, temporizador y mando a distancia.",
          "it": "È la migliore opzione economica con motore DC, modalità notte, timer e telecomando.",
          "nl": "Het is de beste goedkope optie met DC-motor, nachtmodus, timer en afstandsbediening."
        }
      },
      {
        "model": "Xiaomi Smart Fan",
        "role": {
          "fr": "Idéal pour la connectivité",
          "en": "Best for smart control",
          "de": "Ideal für Vernetzung",
          "es": "Ideal para la conectividad",
          "it": "Ideale per la connettività",
          "nl": "Ideaal voor connectiviteit"
        },
        "why": {
          "fr": "Il combine moteur DC, mode brise naturelle et WiFi compatible Google Home et Alexa, avec une très faible consommation.",
          "en": "It combines a DC motor, natural breeze mode and WiFi that works with Google Home and Alexa, with very low power consumption.",
          "de": "Er kombiniert DC-Motor, natürlichen Brisenmodus und WLAN mit Google Home und Alexa bei sehr geringem Stromverbrauch.",
          "es": "Combina motor DC, modo brisa natural y WiFi compatible con Google Home y Alexa, con un consumo muy bajo.",
          "it": "Combina motore DC, modalità brezza naturale e WiFi compatibile con Google Home e Alexa, con consumi molto bassi.",
          "nl": "Hij combineert een DC-motor, natuurlijke briesmodus en wifi met Google Home en Alexa, met een zeer laag verbruik."
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
      "nl": "Wat is de beste robotstofzuiger voor een klein appartement in 2026?"
    },
    "picks": [
      {
        "model": "Xiaomi Robot Vacuum E10",
        "role": {
          "fr": "Meilleur budget, profil bas",
          "en": "Best low-profile budget pick",
          "de": "Bestes Budget-Flachmodell",
          "es": "Mejor opción económica y de perfil bajo",
          "it": "Miglior scelta economica e sottile",
          "nl": "Beste budgetkeuze, laag profiel"
        },
        "why": {
          "fr": "Avec environ 8 cm de hauteur, il passe sous presque tous les canapés et lits, reste léger et agile, et son budget serré est difficile à battre.",
          "en": "At about 8 cm tall it slips under almost every sofa and bed, stays light and agile, and is hard to beat on a tight budget.",
          "de": "Mit etwa 8 cm Höhe passt er unter fast jedes Sofa und Bett, bleibt leicht und wendig und ist bei knappem Budget kaum zu schlagen.",
          "es": "Con unos 8 cm de altura pasa bajo casi todos los sofás y camas, es ligero y ágil, y es difícil de superar con un presupuesto ajustado.",
          "it": "Alto circa 8 cm passa sotto quasi tutti i divani e letti, è leggero e agile, ed è difficile da battere con un budget ridotto.",
          "nl": "Met ongeveer 8 cm hoogte past hij onder bijna elke bank en elk bed, blijft licht en wendbaar en is bij een krap budget moeilijk te verslaan."
        }
      },
      {
        "model": "Xiaomi Robot Vacuum E12",
        "role": {
          "fr": "Idéal pour les studios",
          "en": "Ideal for studios",
          "de": "Ideal für Studios",
          "es": "Ideal para estudios",
          "it": "Ideale per i monolocali",
          "nl": "Ideaal voor studio's"
        },
        "why": {
          "fr": "Dans un studio carré sans station encombrante, cette série E suffit : navigation plus basique, mais un robot compact, bas et très économique.",
          "en": "In a square studio without a bulky station, this E series is enough: basic navigation, but a compact, low and very affordable robot.",
          "de": "In einem quadratischen Studio ohne sperrige Station reicht diese E-Serie: eher einfache Navigation, aber ein kompakter, flacher und sehr günstiger Roboter.",
          "es": "En un estudio cuadrado sin una estación voluminosa, esta serie E basta: navegación más básica, pero un robot compacto, bajo y muy económico.",
          "it": "In un monolocale quadrato senza ingombrante stazione questa serie E basta: navigazione più semplice, ma un robot compatto, basso e molto economico.",
          "nl": "In een vierkante studio zonder grote station volstaat deze E-serie: eenvoudiger navigatie, maar een compacte, lage en zeer voordelige robot."
        }
      }
    ]
  },
  "mejor-aire-acondicionado-bajo-consumo": {
    "question": {
      "fr": "Quel est le meilleur climatiseur basse consommation en 2026 ?",
      "en": "What is the best low-energy air conditioner in 2026?",
      "de": "Welche ist die beste sparsame Klimaanlage 2026?",
      "es": "¿Cuál es el mejor aire acondicionado de bajo consumo en 2026?",
      "it": "Qual è il miglior condizionatore a basso consumo nel 2026?",
      "nl": "Wat is de zuinigste airconditioner in 2026?"
    },
    "picks": [
      {
        "model": "Mitsubishi MSZ-AP",
        "role": {
          "fr": "Meilleure efficacité",
          "en": "Best efficiency",
          "de": "Beste Effizienz",
          "es": "Mayor eficiencia",
          "it": "Massima efficienza",
          "nl": "Beste efficiëntie"
        },
        "why": {
          "fr": "Ce split Inverter de classe A+++ affiche l'une des consommations annuelles les plus basses du comparatif, pour une facture d'été réduite.",
          "en": "This A+++ Inverter split shows one of the lowest annual consumption figures in the comparison, for a reduced summer bill.",
          "de": "Dieses Inverter-Split-Gerät der Klasse A+++ hat einen der niedrigsten Jahresverbräuche im Vergleich und senkt die Sommerrechnung.",
          "es": "Este split Inverter de clase A+++ muestra uno de los consumos anuales más bajos de la comparativa, para una factura de verano reducida.",
          "it": "Questo split Inverter di classe A+++ mostra uno dei consumi annui più bassi del confronto, per una bolletta estiva ridotta.",
          "nl": "Deze Inverter-split van klasse A+++ heeft een van de laagste jaarverbruiken in de vergelijking, voor een lagere zomerrekening."
        }
      },
      {
        "model": "Haier Flexis Plus",
        "role": {
          "fr": "SEER le plus élevé",
          "en": "Highest SEER",
          "de": "Höchster SEER",
          "es": "SEER más alto",
          "it": "SEER più alto",
          "nl": "Hoogste SEER"
        },
        "why": {
          "fr": "Il combine la classe A+++ en froid comme en chauffage avec le meilleur SEER de la sélection et la consommation annuelle la plus basse.",
          "en": "It pairs A+++ class for both cooling and heating with the highest SEER in the selection and the lowest annual consumption.",
          "de": "Er verbindet Klasse A+++ bei Kühlen und Heizen mit dem höchsten SEER der Auswahl und dem niedrigsten Jahresverbrauch.",
          "es": "Combina la clase A+++ en frío y calor con el mejor SEER de la selección y el consumo anual más bajo.",
          "it": "Abbina la classe A+++ in raffrescamento e riscaldamento al SEER più alto della selezione e al consumo annuo più basso.",
          "nl": "Hij combineert klasse A+++ voor koelen en verwarmen met de hoogste SEER van de selectie en het laagste jaarverbruik."
        }
      },
      {
        "model": "LG Dualcool",
        "role": {
          "fr": "Efficacité et budget équilibrés",
          "en": "Balanced efficiency and price",
          "de": "Ausgewogen bei Effizienz und Preis",
          "es": "Eficiencia y precio equilibrados",
          "it": "Efficienza e prezzo equilibrati",
          "nl": "Evenwicht tussen efficiëntie en prijs"
        },
        "why": {
          "fr": "Ce split Inverter offre une efficacité excellente, au même niveau que le Mitsubishi, pour un prix d'achat inférieur dans le tableau comparatif.",
          "en": "This Inverter split delivers excellent efficiency, on par with the Mitsubishi, at a lower purchase price in the comparison table.",
          "de": "Dieses Inverter-Split-Gerät bietet hervorragende Effizienz auf Augenhöhe mit dem Mitsubishi zu einem niedrigeren Kaufpreis in der Vergleichstabelle.",
          "es": "Este split Inverter ofrece una eficiencia excelente, al nivel del Mitsubishi, con un precio de compra inferior en la tabla comparativa.",
          "it": "Questo split Inverter offre un'efficienza eccellente, al livello del Mitsubishi, con un prezzo d'acquisto inferiore nella tabella comparativa.",
          "nl": "Deze Inverter-split levert uitstekende efficiëntie, vergelijkbaar met de Mitsubishi, tegen een lagere aanschafprijs in de vergelijkingstabel."
        }
      },
      {
        "model": "Cecotec ForceClima",
        "role": {
          "fr": "Le moins cher",
          "en": "Cheapest option",
          "de": "Günstigste Option",
          "es": "La opción más barata",
          "it": "L'opzione più economica",
          "nl": "Goedkoopste optie"
        },
        "why": {
          "fr": "C'est le modèle le moins cher de la sélection, avec en contrepartie une efficacité et une consommation annuelle moins favorables.",
          "en": "It is the cheapest model in the selection, with less favourable efficiency and annual consumption as the trade-off.",
          "de": "Es ist das günstigste Modell der Auswahl, dafür sind Effizienz und Jahresverbrauch weniger vorteilhaft.",
          "es": "Es el modelo más barato de la selección, a cambio de una eficiencia y un consumo anual menos favorables.",
          "it": "È il modello più economico della selezione, con in cambio un'efficienza e un consumo annuo meno favorevoli.",
          "nl": "Het is het goedkoopste model van de selectie, met als nadeel een minder gunstige efficiëntie en jaarverbruik."
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
          "fr": "Dans la tranche la plus intéressante en 2026, il associe forte aspiration et serpillère rétractable pour un budget bien inférieur au haut de gamme.",
          "en": "In the most interesting price bracket of 2026, it pairs strong suction with a retractable mop at a budget well below the high end.",
          "de": "In der interessantesten Preisklasse 2026 vereint er kräftige Saugkraft mit einem einfahrbaren Wischmopp zu einem Budget deutlich unter der Oberklasse.",
          "es": "En el tramo de precio más interesante de 2026, combina buena succión y mopa retráctil con un presupuesto muy inferior a la gama alta.",
          "it": "Nella fascia di prezzo più interessante del 2026 abbina forte aspirazione e mocio retrattile a un budget ben inferiore all'alto di gamma.",
          "nl": "In de interessantste prijsklasse van 2026 combineert hij sterke zuigkracht met een intrekbare mop voor een budget ruim onder het topsegment."
        }
      },
      {
        "model": "Dreame X30 Ultra",
        "role": {
          "fr": "Haut de gamme complet",
          "en": "Complete high-end pick",
          "de": "Komplette Oberklasse",
          "es": "Gama alta completa",
          "it": "Alto di gamma completo",
          "nl": "Complete topklasse"
        },
        "why": {
          "fr": "Ce modèle haut de gamme complet offre un bras extensible et un lavage à eau chaude, des atouts typiques de la tranche 500 à 1 000 euros.",
          "en": "This complete high-end model offers an extendable arm and hot-water mopping, typical strengths of the 500 to 1,000 euro bracket.",
          "de": "Dieses komplette Oberklassemodell bietet einen ausfahrbaren Arm und Wischen mit heißem Wasser, typische Stärken der Preisklasse von 500 bis 1.000 Euro.",
          "es": "Este modelo de gama alta completo ofrece un brazo extensible y fregado con agua caliente, puntos fuertes típicos del tramo de 500 a 1.000 euros.",
          "it": "Questo modello di alto di gamma completo offre un braccio estensibile e lavaggio ad acqua calda, punti di forza tipici della fascia da 500 a 1.000 euro.",
          "nl": "Dit complete topmodel biedt een uitschuifbare arm en dweilen met heet water, typische pluspunten van het segment van 500 tot 1.000 euro."
        }
      },
      {
        "model": "Ecovacs X2 Omni",
        "role": {
          "fr": "Design carré",
          "en": "Square design",
          "de": "Quadratisches Design",
          "es": "Diseño cuadrado",
          "it": "Design squadrato",
          "nl": "Vierkant ontwerp"
        },
        "why": {
          "fr": "Son design carré et sa serpillère rotative en font un robot haut de gamme soigné, avec une application parfois instable selon le guide.",
          "en": "Its square design and rotating mop make it a polished high-end robot, though the guide notes the app can be unstable at times.",
          "de": "Sein quadratisches Design und der rotierende Mopp machen ihn zu einem gelungenen Oberklasse-Roboter, wobei die App laut Ratgeber mitunter instabil ist.",
          "es": "Su diseño cuadrado y su mopa rotativa lo hacen un robot de gama alta cuidado, aunque la guía señala que la app a veces es inestable.",
          "it": "Il design squadrato e il mocio rotante ne fanno un robot di alta gamma curato, anche se la guida segnala un'app talvolta instabile.",
          "nl": "Zijn vierkante ontwerp en roterende mop maken hem een verzorgde topper, al noemt de gids de app soms onstabiel."
        }
      },
      {
        "model": "Dreame D10s Plus",
        "role": {
          "fr": "Entrée de gamme",
          "en": "Entry-level pick",
          "de": "Einstiegsmodell",
          "es": "Gama de entrada",
          "it": "Entry level",
          "nl": "Instapmodel"
        },
        "why": {
          "fr": "À moins de 200 euros, il propose la navigation LiDAR et une station de vidage basique, suffisant pour un studio ou un petit appartement sur sols durs.",
          "en": "Under 200 euros it offers LiDAR navigation and a basic emptying station, enough for a studio or small apartment with hard floors.",
          "de": "Für unter 200 Euro bietet er LiDAR-Navigation und eine einfache Absaugstation, ausreichend für ein Studio oder eine kleine Wohnung mit Hartböden.",
          "es": "Por menos de 200 euros ofrece navegación LiDAR y una estación de vaciado básica, suficiente para un estudio o piso pequeño con suelos duros.",
          "it": "Sotto i 200 euro offre navigazione LiDAR e una stazione di svuotamento base, sufficiente per un monolocale o un piccolo appartamento con pavimenti duri.",
          "nl": "Voor minder dan 200 euro biedt hij LiDAR-navigatie en een eenvoudig leegstation, genoeg voor een studio of klein appartement met harde vloeren."
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
        "model": "Eufy Video Doorbell E340",
        "role": {
          "fr": "Meilleure sonnette sans abonnement",
          "en": "Best subscription-free doorbell",
          "de": "Beste Türklingel ohne Abo",
          "es": "Mejor timbre sin suscripción",
          "it": "Miglior campanello senza abbonamento",
          "nl": "Beste deurbel zonder abonnement"
        },
        "why": {
          "fr": "Elle stocke les enregistrements localement sans frais mensuels et fait partie des solutions Eufy au meilleur rapport qualité-prix sans abonnement.",
          "en": "It stores recordings locally with no monthly fees and belongs to the Eufy range that offers the best value without a subscription.",
          "de": "Sie speichert Aufnahmen lokal ohne monatliche Gebühren und gehört zu den Eufy-Lösungen mit dem besten Preis-Leistungs-Verhältnis ohne Abo.",
          "es": "Guarda las grabaciones en local sin cuotas mensuales y forma parte de las soluciones de Eufy con mejor relación calidad-precio sin suscripción.",
          "it": "Salva le registrazioni in locale senza costi mensili e fa parte delle soluzioni Eufy con il miglior rapporto qualità-prezzo senza abbonamento.",
          "nl": "Ze slaat opnames lokaal op zonder maandelijkse kosten en hoort bij de Eufy-oplossingen met de beste prijs-kwaliteit zonder abonnement."
        }
      },
      {
        "model": "Ajax StarterKit",
        "role": {
          "fr": "Meilleure alarme",
          "en": "Best alarm system",
          "de": "Beste Alarmanlage",
          "es": "Mejor alarma",
          "it": "Miglior allarme",
          "nl": "Beste alarmsysteem"
        },
        "why": {
          "fr": "Il fonctionne sans abonnement avec capteurs de mouvement, d'ouverture et sirène, et le guide le juge imbattable pour l'alarme pure, avec une fiabilité professionnelle.",
          "en": "It works without a subscription with motion and door sensors plus a siren, and the guide calls it unbeatable for pure alarm duty with professional-grade reliability.",
          "de": "Es funktioniert ohne Abo mit Bewegungs- und Öffnungsmeldern samt Sirene, und der Ratgeber hält es für die reine Alarmfunktion für unschlagbar, mit professioneller Zuverlässigkeit.",
          "es": "Funciona sin suscripción con sensores de movimiento, apertura y sirena, y la guía lo considera imbatible como alarma pura, con fiabilidad de grado profesional.",
          "it": "Funziona senza abbonamento con sensori di movimento, apertura e sirena, e la guida lo giudica imbattibile come allarme puro, con affidabilità di livello professionale.",
          "nl": "Het werkt zonder abonnement met bewegings- en deursensoren plus sirene, en de gids noemt het onverslaanbaar als pure alarmoplossing met professionele betrouwbaarheid."
        }
      },
      {
        "model": "Nuki Smart Lock 4.0",
        "role": {
          "fr": "Meilleure serrure connectée",
          "en": "Best smart lock",
          "de": "Bestes Smart Lock",
          "es": "Mejor cerradura inteligente",
          "it": "Miglior serratura smart",
          "nl": "Beste slimme deurslot"
        },
        "why": {
          "fr": "Cette serrure européenne s'adapte aux cylindres de porte standards sans remplacement et supprime le risque de clés perdues ou copiées.",
          "en": "This European lock fits standard door cylinders without replacement and removes the risk of lost or copied keys.",
          "de": "Dieses europäische Schloss passt auf Standardzylinder ohne Austausch und beseitigt das Risiko verlorener oder kopierter Schlüssel.",
          "es": "Esta cerradura europea se adapta a los bombines estándar sin sustituirlos y elimina el riesgo de llaves perdidas o copiadas.",
          "it": "Questa serratura europea si adatta ai cilindri standard senza sostituzione ed elimina il rischio di chiavi perse o copiate.",
          "nl": "Dit Europese slot past op standaardcilinders zonder vervanging en neemt het risico van verloren of gekopieerde sleutels weg."
        }
      },
      {
        "model": "Netatmo Smart Smoke Alarm",
        "role": {
          "fr": "Détecteur de fumée connecté",
          "en": "Best connected smoke alarm",
          "de": "Vernetzter Rauchmelder",
          "es": "Detector de humo conectado",
          "it": "Rilevatore di fumo connesso",
          "nl": "Slimme rookmelder"
        },
        "why": {
          "fr": "Il envoie des alertes sur le téléphone même en votre absence et ajoute de la tranquillité à l'obligation légale du détecteur de fumée.",
          "en": "It sends alerts to your phone even when you are away and adds peace of mind to the legal smoke detector requirement.",
          "de": "Er sendet Warnungen aufs Handy, auch wenn man abwesend ist, und ergänzt die gesetzliche Rauchmelderpflicht um zusätzliche Sicherheit.",
          "es": "Envía alertas al teléfono incluso cuando está ausente y añade tranquilidad a la obligación legal del detector de humo.",
          "it": "Invia avvisi sullo smartphone anche quando si è assenti e aggiunge tranquillità all'obbligo di legge del rilevatore di fumo.",
          "nl": "Hij stuurt meldingen naar je telefoon, ook als je weg bent, en voegt gemoedsrust toe aan de wettelijke rookmelderplicht."
        }
      }
    ]
  },
  "guide-domotique-economie-energie-2026": {
    "question": {
      "fr": "Quel est le meilleur équipement domotique pour économiser l'énergie en 2026 ?",
      "en": "What is the best smart home equipment to save energy in 2026?",
      "de": "Welche Smart-Home-Geräte sparen 2026 am besten Energie?",
      "es": "¿Cuál es el mejor equipo domótico para ahorrar energía en 2026?",
      "it": "Qual è la migliore dotazione domotica per risparmiare energia nel 2026?",
      "nl": "Wat is de beste domotica om in 2026 energie te besparen?"
    },
    "picks": [
      {
        "model": "Tado X",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "C'est la recommandation principale pour l'Europe : compatible Thread et Matter, apprentissage adaptatif, géolocalisation et prise en charge des pompes à chaleur via OpenTherm.",
          "en": "It is the top recommendation for Europe: Thread and Matter compatible, with adaptive learning, geofencing and heat pump support via OpenTherm.",
          "de": "Es ist die Hauptempfehlung für Europa: kompatibel mit Thread und Matter, mit lernendem Algorithmus, Geofencing und Wärmepumpen-Unterstützung über OpenTherm.",
          "es": "Es la recomendación principal para Europa: compatible con Thread y Matter, con aprendizaje adaptativo, geolocalización y soporte de bombas de calor mediante OpenTherm.",
          "it": "È la raccomandazione principale per l'Europa: compatibile con Thread e Matter, con apprendimento adattivo, geofencing e supporto alle pompe di calore via OpenTherm.",
          "nl": "Het is de belangrijkste aanbeveling voor Europa: compatibel met Thread en Matter, met adaptief leren, geofencing en warmtepompondersteuning via OpenTherm."
        }
      },
      {
        "model": "Netatmo Thermostat Intelligent V3",
        "role": {
          "fr": "Valeur sûre au design soigné",
          "en": "Reliable, well-designed pick",
          "de": "Bewährte Wahl mit schönem Design",
          "es": "Opción segura y de buen diseño",
          "it": "Scelta affidabile dal design curato",
          "nl": "Betrouwbare keuze met mooi ontwerp"
        },
        "why": {
          "fr": "Ce thermostat reste une valeur sûre : design signé Philippe Starck, support Matter et algorithme Auto-Adapt qui tient compte de l'isolation et de la météo prévue.",
          "en": "This thermostat remains a safe bet: a Philippe Starck design, Matter support and an Auto-Adapt algorithm that factors in insulation and forecast weather.",
          "de": "Dieses Thermostat bleibt eine sichere Wahl: Design von Philippe Starck, Matter-Unterstützung und ein Auto-Adapt-Algorithmus, der Dämmung und Wettervorhersage berücksichtigt.",
          "es": "Este termostato sigue siendo una apuesta segura: diseño de Philippe Starck, soporte Matter y un algoritmo Auto-Adapt que considera el aislamiento y el tiempo previsto.",
          "it": "Questo termostato resta una scelta sicura: design di Philippe Starck, supporto Matter e algoritmo Auto-Adapt che tiene conto di isolamento e meteo previsto.",
          "nl": "Deze thermostaat blijft een veilige keuze: ontwerp van Philippe Starck, Matter-ondersteuning en een Auto-Adapt-algoritme dat rekening houdt met isolatie en het verwachte weer."
        }
      },
      {
        "model": "IKEA Dirigera",
        "role": {
          "fr": "Idéal pour petits budgets",
          "en": "Best for tight budgets",
          "de": "Ideal für kleine Budgets",
          "es": "Ideal para presupuestos ajustados",
          "it": "Ideale per budget ridotti",
          "nl": "Ideaal voor een klein budget"
        },
        "why": {
          "fr": "Pour l'éclairage connecté, il est recommandé aux budgets serrés, car ses ampoules TRADFRI coûtent bien moins cher que Hue pour des performances acceptables.",
          "en": "For smart lighting it is recommended on tight budgets, as its TRADFRI bulbs cost far less than Hue for acceptable performance.",
          "de": "Für vernetzte Beleuchtung wird er bei knappem Budget empfohlen, da die TRADFRI-Lampen deutlich günstiger sind als Hue bei akzeptabler Leistung.",
          "es": "Para iluminación conectada se recomienda con presupuesto ajustado, porque sus bombillas TRADFRI cuestan mucho menos que Hue con un rendimiento aceptable.",
          "it": "Per l'illuminazione connessa è consigliato con budget ridotti, perché le lampadine TRADFRI costano molto meno di Hue con prestazioni accettabili.",
          "nl": "Voor slimme verlichting wordt hij aanbevolen bij een krap budget, omdat de TRADFRI-lampen veel goedkoper zijn dan Hue bij acceptabele prestaties."
        }
      }
    ]
  },
  "comparatif-robot-aspirateur-laveur": {
    "question": {
      "fr": "Quel est le meilleur robot aspirateur laveur en 2026 ?",
      "en": "What is the best robot vacuum and mop in 2026?",
      "de": "Welcher ist der beste Saug-Wischroboter 2026?",
      "es": "¿Cuál es el mejor robot aspirador y fregona en 2026?",
      "it": "Qual è il miglior robot aspirapolvere con lavaggio nel 2026?",
      "nl": "Wat is de beste zuig-dweilrobot in 2026?"
    },
    "picks": [
      {
        "model": "Dreame X40 Ultra",
        "role": {
          "fr": "Meilleur global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Le plus puissant et le plus innovant du comparatif, avec un bras extensible qui lave plinthes et angles, à choisir si le budget le permet.",
          "en": "The most powerful and innovative in the comparison, with an extendable arm that mops baseboards and corners, worth choosing if budget allows.",
          "de": "Der stärkste und innovativste im Vergleich, mit ausfahrbarem Arm, der Sockelleisten und Ecken wischt, die Wahl, wenn das Budget es zulässt.",
          "es": "El más potente e innovador de la comparativa, con un brazo extensible que friega rodapiés y esquinas, a elegir si el presupuesto lo permite.",
          "it": "Il più potente e innovativo del confronto, con un braccio estensibile che lava battiscopa e angoli, da scegliere se il budget lo consente.",
          "nl": "De krachtigste en meest innovatieve in de vergelijking, met een uitschuifbare arm die plinten en hoeken dweilt, te kiezen als het budget het toelaat."
        }
      },
      {
        "model": "Roborock S8 MaxV Ultra",
        "role": {
          "fr": "Meilleur haut de gamme équilibré",
          "en": "Best balanced high-end",
          "de": "Beste ausgewogene Oberklasse",
          "es": "Mejor gama alta equilibrada",
          "it": "Miglior alto di gamma equilibrato",
          "nl": "Beste evenwichtige topklasse"
        },
        "why": {
          "fr": "Le plus fiable de la sélection, avec la meilleure application et le meilleur SAV, un excellent compromis haut de gamme sans dépasser un budget raisonnable.",
          "en": "The most reliable in the selection, with the best app and customer service, an excellent high-end compromise without an excessive budget.",
          "de": "Der zuverlässigste der Auswahl, mit der besten App und dem besten Kundenservice, ein ausgezeichneter Oberklasse-Kompromiss ohne übermäßiges Budget.",
          "es": "El más fiable de la selección, con la mejor app y el mejor servicio posventa, un excelente compromiso de gama alta sin un presupuesto excesivo.",
          "it": "Il più affidabile della selezione, con la migliore app e la migliore assistenza, un ottimo compromesso di alta gamma senza budget eccessivo.",
          "nl": "De betrouwbaarste van de selectie, met de beste app en klantenservice, een uitstekend topcompromis zonder buitensporig budget."
        }
      },
      {
        "model": "Ecovacs X5 Omni",
        "role": {
          "fr": "Meilleur design",
          "en": "Best design",
          "de": "Bestes Design",
          "es": "Mejor diseño",
          "it": "Miglior design",
          "nl": "Beste ontwerp"
        },
        "why": {
          "fr": "Son format carré lui permet d'atteindre les angles plus efficacement que les robots ronds, mais l'absence de Matter est regrettable.",
          "en": "Its square shape reaches corners more effectively than round robots, though the lack of Matter support is a pity.",
          "de": "Seine quadratische Form erreicht Ecken effektiver als runde Roboter, allerdings ist das Fehlen von Matter bedauerlich.",
          "es": "Su formato cuadrado alcanza las esquinas con más eficacia que los robots redondos, aunque la falta de Matter es lamentable.",
          "it": "La forma squadrata raggiunge gli angoli più efficacemente dei robot rotondi, anche se l'assenza di Matter è un peccato.",
          "nl": "Zijn vierkante vorm bereikt hoeken effectiever dan ronde robots, al is het ontbreken van Matter jammer."
        }
      },
      {
        "model": "Xiaomi X20 Max",
        "role": {
          "fr": "Meilleur budget",
          "en": "Best budget pick",
          "de": "Bestes Budget-Modell",
          "es": "Mejor opción económica",
          "it": "Miglior scelta economica",
          "nl": "Beste budgetkeuze"
        },
        "why": {
          "fr": "Il offre des performances solides à petit prix, avec navigation LiDAR plus caméra et Matter, parfait pour un premier robot laveur sur sols durs.",
          "en": "It delivers solid performance at a low price, with LiDAR plus camera navigation and Matter, ideal as a first mopping robot on hard floors.",
          "de": "Er liefert solide Leistung zu kleinem Preis, mit LiDAR-plus-Kamera-Navigation und Matter, ideal als erster Wischroboter auf Hartböden.",
          "es": "Ofrece un rendimiento sólido a bajo precio, con navegación LiDAR más cámara y Matter, ideal como primer robot de fregado en suelos duros.",
          "it": "Offre prestazioni solide a basso prezzo, con navigazione LiDAR più telecamera e Matter, ideale come primo robot lavapavimenti su pavimenti duri.",
          "nl": "Hij levert solide prestaties tegen een lage prijs, met LiDAR plus camera en Matter, ideaal als eerste dweilrobot op harde vloeren."
        }
      }
    ]
  },
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
        "model": "Tado X",
        "role": {
          "fr": "Meilleur choix pour pompe à chaleur",
          "en": "Best for heat pumps",
          "de": "Beste Wahl für Wärmepumpen",
          "es": "Mejor opción para bombas de calor",
          "it": "Miglior scelta per pompe di calore",
          "nl": "Beste keuze voor warmtepompen"
        },
        "why": {
          "fr": "Sa compatibilité native OpenTherm lui permet d'ajuster en continu la température de départ et de calculer la courbe de chauffe optimale du logement.",
          "en": "Its native OpenTherm compatibility lets it continuously adjust the flow temperature and calculate the home's optimal heating curve.",
          "de": "Dank nativer OpenTherm-Kompatibilität passt es die Vorlauftemperatur laufend an und berechnet die optimale Heizkurve des Hauses.",
          "es": "Su compatibilidad nativa con OpenTherm le permite ajustar de forma continua la temperatura de ida y calcular la curva de calefacción óptima de la vivienda.",
          "it": "La compatibilità nativa OpenTherm gli permette di regolare di continuo la temperatura di mandata e di calcolare la curva di riscaldamento ottimale dell'abitazione.",
          "nl": "Dankzij native OpenTherm-compatibiliteit past hij continu de aanvoertemperatuur aan en berekent hij de optimale stookcurve van de woning."
        }
      },
      {
        "model": "Google Nest Learning Thermostat",
        "role": {
          "fr": "Rival du Tado X",
          "en": "Closest rival to Tado X",
          "de": "Ebenbürtiger Konkurrent",
          "es": "Rival del Tado X",
          "it": "Rivale del Tado X",
          "nl": "Evenknie van Tado X"
        },
        "why": {
          "fr": "Avec Matter, Thread et un adaptateur Heat Link compatible OpenTherm, il rivalise avec le Tado X pour piloter une pompe à chaleur.",
          "en": "With Matter, Thread and an OpenTherm-compatible Heat Link adapter, it rivals the Tado X for controlling a heat pump.",
          "de": "Mit Matter, Thread und einem OpenTherm-kompatiblen Heat-Link-Adapter ist es beim Steuern einer Wärmepumpe ein Konkurrent zum Tado X.",
          "es": "Con Matter, Thread y un adaptador Heat Link compatible con OpenTherm, rivaliza con el Tado X para controlar una bomba de calor.",
          "it": "Con Matter, Thread e un adattatore Heat Link compatibile OpenTherm, rivaleggia con il Tado X nel controllo di una pompa di calore.",
          "nl": "Met Matter, Thread en een OpenTherm-compatibele Heat Link-adapter is hij een rivaal van de Tado X voor het sturen van een warmtepomp."
        }
      },
      {
        "model": "Netatmo Thermostat Intelligent V3",
        "role": {
          "fr": "Si la PAC n'a pas OpenTherm",
          "en": "If your heat pump lacks OpenTherm",
          "de": "Falls die Wärmepumpe kein OpenTherm hat",
          "es": "Si la bomba no tiene OpenTherm",
          "it": "Se la pompa non ha OpenTherm",
          "nl": "Als de warmtepomp geen OpenTherm heeft"
        },
        "why": {
          "fr": "Sans OpenTherm il ne peut pas optimiser la température de départ, mais reste un bon choix si votre pompe à chaleur ne supporte pas ce protocole.",
          "en": "Without OpenTherm it cannot optimise the flow temperature, but it remains a good choice if your heat pump does not support that protocol.",
          "de": "Ohne OpenTherm kann es die Vorlauftemperatur nicht optimieren, bleibt aber eine gute Wahl, wenn Ihre Wärmepumpe dieses Protokoll nicht unterstützt.",
          "es": "Sin OpenTherm no puede optimizar la temperatura de ida, pero sigue siendo una buena opción si su bomba de calor no admite ese protocolo.",
          "it": "Senza OpenTherm non può ottimizzare la temperatura di mandata, ma resta una buona scelta se la pompa di calore non supporta quel protocollo.",
          "nl": "Zonder OpenTherm kan hij de aanvoertemperatuur niet optimaliseren, maar blijft een goede keuze als je warmtepomp dat protocol niet ondersteunt."
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
      "nl": "Wat is de beste slimme stekker met verbruiksmeting in 2026?"
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
          "fr": "Elle offre le meilleur rapport qualité-prix avec une mesure précise, une application complète et la compatibilité Matter, un choix idéal pour la grande majorité des utilisateurs.",
          "en": "It delivers the best value with accurate measurement, a full-featured app and Matter compatibility, an ideal choice for the vast majority of users.",
          "de": "Sie bietet das beste Preis-Leistungs-Verhältnis mit präziser Messung, umfangreicher App und Matter-Kompatibilität, eine ideale Wahl für die große Mehrheit der Nutzer.",
          "es": "Ofrece la mejor relación calidad-precio con medición precisa, app completa y compatibilidad con Matter, una elección ideal para la gran mayoría de usuarios.",
          "it": "Offre il miglior rapporto qualità-prezzo con misurazione precisa, app completa e compatibilità Matter, una scelta ideale per la grande maggioranza degli utenti.",
          "nl": "Ze biedt de beste prijs-kwaliteit met nauwkeurige meting, een complete app en Matter-compatibiliteit, een ideale keuze voor de grote meerderheid van de gebruikers."
        }
      },
      {
        "model": "Meross MSS310 Prise Connectée HomeKit 16A",
        "role": {
          "fr": "Alternative économique",
          "en": "Budget alternative",
          "de": "Günstige Alternative",
          "es": "Alternativa económica",
          "it": "Alternativa economica",
          "nl": "Voordelig alternatief"
        },
        "why": {
          "fr": "C'est la prise avec mesure d'énergie la moins chère du comparatif, avec mesure en temps réel, programmation horaire et Matter, idéale pour équiper de nombreux appareils.",
          "en": "It is the cheapest plug with energy monitoring in the comparison, with real-time measurement, scheduling and Matter, ideal for covering many devices.",
          "de": "Sie ist die günstigste Steckdose mit Energiemessung im Vergleich, mit Echtzeitmessung, Zeitplanung und Matter, ideal für viele Geräte.",
          "es": "Es el enchufe con medición de energía más barato de la comparativa, con medición en tiempo real, programación horaria y Matter, ideal para equipar muchos aparatos.",
          "it": "È la presa con misurazione dell'energia più economica del confronto, con misura in tempo reale, programmazione oraria e Matter, ideale per coprire molti dispositivi.",
          "nl": "Het is de goedkoopste stekker met energiemeting in de vergelijking, met realtime meting, tijdschema en Matter, ideaal om veel apparaten te dekken."
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
        "model": "Eufy S330 eufyCam 3",
        "role": {
          "fr": "Choix de la rédaction",
          "en": "Editor's pick",
          "de": "Empfehlung der Redaktion",
          "es": "Elección de la redacción",
          "it": "Scelta della redazione",
          "nl": "Keuze van de redactie"
        },
        "why": {
          "fr": "Elle remporte le comparatif avec la 4K, la vision nocturne couleur, la détection IA avancée, le stockage local sans abonnement et la compatibilité HomeKit.",
          "en": "It wins the comparison with 4K, colour night vision, advanced AI detection, local storage without a subscription and HomeKit compatibility.",
          "de": "Sie gewinnt den Vergleich mit 4K, Farb-Nachtsicht, fortgeschrittener KI-Erkennung, lokalem Speicher ohne Abo und HomeKit-Kompatibilität.",
          "es": "Gana la comparativa con 4K, visión nocturna en color, detección IA avanzada, almacenamiento local sin suscripción y compatibilidad con HomeKit.",
          "it": "Vince il confronto con 4K, visione notturna a colori, rilevamento IA avanzato, archiviazione locale senza abbonamento e compatibilità HomeKit.",
          "nl": "Ze wint de vergelijking met 4K, nachtzicht in kleur, geavanceerde AI-detectie, lokale opslag zonder abonnement en HomeKit-compatibiliteit."
        }
      },
      {
        "model": "Reolink RLC-833A",
        "role": {
          "fr": "Meilleur système filaire PoE",
          "en": "Best wired PoE option",
          "de": "Beste kabelgebundene PoE-Lösung",
          "es": "Mejor opción cableada PoE",
          "it": "Migliore opzione cablata PoE",
          "nl": "Beste bedrade PoE-optie"
        },
        "why": {
          "fr": "C'est le meilleur choix pour une installation filaire fiable avec la résolution la plus élevée, idéale en multi-caméras avec NVR, au prix d'un câblage Ethernet.",
          "en": "It is the best pick for a reliable wired setup with the highest resolution, ideal for multi-camera NVR systems, at the cost of Ethernet cabling.",
          "de": "Sie ist die beste Wahl für eine zuverlässige kabelgebundene Installation mit höchster Auflösung, ideal für Mehrkamerasysteme mit NVR, allerdings mit Ethernet-Verkabelung.",
          "es": "Es la mejor opción para una instalación cableada fiable con la mayor resolución, ideal en sistemas multicámara con NVR, a costa del cableado Ethernet.",
          "it": "È la scelta migliore per un'installazione cablata affidabile con la risoluzione più alta, ideale in sistemi multi-camera con NVR, al prezzo del cablaggio Ethernet.",
          "nl": "Het is de beste keuze voor een betrouwbare bedrade installatie met de hoogste resolutie, ideaal voor multicamerasystemen met NVR, ten koste van ethernetbekabeling."
        }
      },
      {
        "model": "Arlo Pro 5S",
        "role": {
          "fr": "Option premium",
          "en": "Premium option",
          "de": "Premium-Option",
          "es": "Opción premium",
          "it": "Opzione premium",
          "nl": "Premiumoptie"
        },
        "why": {
          "fr": "Elle brille par son HDR, sa détection IA la plus avancée et HomeKit Secure Video, mais son prix élevé et des fonctions payantes la rendent moins attractive.",
          "en": "It shines with HDR, the most advanced AI detection and HomeKit Secure Video, but its high price and subscription-locked features make it less attractive.",
          "de": "Sie überzeugt mit HDR, der fortschrittlichsten KI-Erkennung und HomeKit Secure Video, doch hoher Preis und kostenpflichtige Funktionen machen sie weniger attraktiv.",
          "es": "Destaca por su HDR, la detección IA más avanzada y HomeKit Secure Video, pero su precio alto y las funciones de pago la hacen menos atractiva.",
          "it": "Spicca per HDR, rilevamento IA più avanzato e HomeKit Secure Video, ma il prezzo elevato e le funzioni a pagamento la rendono meno interessante.",
          "nl": "Ze blinkt uit met HDR, de meest geavanceerde AI-detectie en HomeKit Secure Video, maar de hoge prijs en betaalde functies maken haar minder aantrekkelijk."
        }
      },
      {
        "model": "TP-Link Tapo C520WS",
        "role": {
          "fr": "Petit budget",
          "en": "Best on a budget",
          "de": "Für kleines Budget",
          "es": "Para presupuesto ajustado",
          "it": "Per budget ridotto",
          "nl": "Voor een klein budget"
        },
        "why": {
          "fr": "Sa rotation à 360 degrés et son suivi automatique compensent largement son prix contenu, parfaite comme première caméra de surveillance.",
          "en": "Its 360-degree rotation and auto-tracking more than make up for its low price, making it perfect as a first security camera.",
          "de": "Die 360-Grad-Drehung und die automatische Verfolgung gleichen den günstigen Preis mehr als aus, perfekt als erste Überwachungskamera.",
          "es": "Su rotación de 360 grados y su seguimiento automático compensan de sobra su precio contenido, perfecta como primera cámara de vigilancia.",
          "it": "La rotazione a 360 gradi e il tracciamento automatico compensano ampiamente il prezzo contenuto, perfetta come prima telecamera di sorveglianza.",
          "nl": "De 360-gradendraaiing en automatische tracking compenseren de lage prijs ruimschoots, perfect als eerste bewakingscamera."
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
      "it": "Qual è il miglior videocitofono senza abbonamento nel 2026?",
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
          "fr": "Double caméra, stockage local intégré sans abonnement, détection IA précise et compatibilité HomeKit et Google Home en font la sonnette la plus complète du comparatif.",
          "en": "A dual camera, built-in local storage with no subscription, precise AI detection and HomeKit and Google Home support make it the most complete doorbell in the comparison.",
          "de": "Doppelkamera, integrierter lokaler Speicher ohne Abo, präzise KI-Erkennung sowie HomeKit- und Google-Home-Kompatibilität machen sie zur vollständigsten Türklingel im Vergleich.",
          "es": "Doble cámara, almacenamiento local integrado sin suscripción, detección IA precisa y compatibilidad con HomeKit y Google Home la hacen el timbre más completo de la comparativa.",
          "it": "Doppia telecamera, archiviazione locale integrata senza abbonamento, rilevamento IA preciso e compatibilità HomeKit e Google Home ne fanno il campanello più completo del confronto.",
          "nl": "Een dubbele camera, ingebouwde lokale opslag zonder abonnement, precieze AI-detectie en HomeKit- en Google Home-ondersteuning maken haar de completste deurbel in de vergelijking."
        }
      },
      {
        "model": "Reolink WiFi Video Doorbell",
        "role": {
          "fr": "Meilleur petit prix",
          "en": "Best budget pick",
          "de": "Bestes Budget-Modell",
          "es": "Mejor opción económica",
          "it": "Miglior scelta economica",
          "nl": "Beste budgetkeuze"
        },
        "why": {
          "fr": "Elle convient aux petits budgets et aux maisons déjà câblées, avec stockage microSD, résolution 2K et excellent rapport qualité-prix, mais sans option batterie.",
          "en": "It suits small budgets and homes with existing doorbell wiring, with microSD storage, 2K resolution and excellent value, though there is no battery option.",
          "de": "Sie eignet sich für kleine Budgets und Häuser mit vorhandener Klingelverkabelung, mit microSD-Speicher, 2K-Auflösung und tollem Preis-Leistungs-Verhältnis, aber ohne Akku-Option.",
          "es": "Encaja en presupuestos ajustados y casas ya cableadas, con almacenamiento microSD, resolución 2K y excelente relación calidad-precio, pero sin opción de batería.",
          "it": "Si adatta a budget ridotti e case già cablate, con archiviazione microSD, risoluzione 2K e ottimo rapporto qualità-prezzo, ma senza opzione a batteria.",
          "nl": "Ze past bij kleine budgetten en huizen met bestaande bedrading, met microSD-opslag, 2K-resolutie en uitstekende prijs-kwaliteit, maar zonder accuoptie."
        }
      },
      {
        "model": "Google Nest Doorbell",
        "role": {
          "fr": "Écosystème Google",
          "en": "Best for Google Home",
          "de": "Für Google-Home-Nutzer",
          "es": "Para el ecosistema Google",
          "it": "Per l'ecosistema Google",
          "nl": "Voor het Google-ecosysteem"
        },
        "why": {
          "fr": "Elle propose la meilleure détection IA et une intégration native à Google Home, mais résolution basse, autonomie limitée et prix élevé la rendent difficile à recommander.",
          "en": "It offers the best AI detection and native Google Home integration, but low resolution, limited battery life and a high price make it hard to recommend.",
          "de": "Sie bietet die beste KI-Erkennung und native Google-Home-Integration, doch niedrige Auflösung, begrenzte Akkulaufzeit und hoher Preis erschweren eine Empfehlung.",
          "es": "Ofrece la mejor detección IA y una integración nativa con Google Home, pero su baja resolución, autonomía limitada y precio alto la hacen difícil de recomendar.",
          "it": "Offre il miglior rilevamento IA e un'integrazione nativa con Google Home, ma risoluzione bassa, autonomia limitata e prezzo elevato la rendono difficile da consigliare.",
          "nl": "Ze biedt de beste AI-detectie en native Google Home-integratie, maar lage resolutie, beperkte accuduur en hoge prijs maken haar lastig aan te raden."
        }
      },
      {
        "model": "Ring Battery Doorbell Plus",
        "role": {
          "fr": "Pour les utilisateurs Alexa",
          "en": "For Alexa users",
          "de": "Für Alexa-Nutzer",
          "es": "Para usuarios de Alexa",
          "it": "Per gli utenti Alexa",
          "nl": "Voor Alexa-gebruikers"
        },
        "why": {
          "fr": "Excellente qualité d'image et intégration Alexa irréprochable, mais sans stockage local et avec abonnement obligatoire pour l'historique vidéo.",
          "en": "Excellent image quality and flawless Alexa integration, but with no local storage and a mandatory subscription for video history.",
          "de": "Hervorragende Bildqualität und tadellose Alexa-Integration, aber ohne lokalen Speicher und mit Pflicht-Abo für den Videoverlauf.",
          "es": "Excelente calidad de imagen e integración impecable con Alexa, pero sin almacenamiento local y con suscripción obligatoria para el historial de vídeo.",
          "it": "Ottima qualità d'immagine e integrazione Alexa impeccabile, ma senza archiviazione locale e con abbonamento obbligatorio per lo storico video.",
          "nl": "Uitstekende beeldkwaliteit en perfecte Alexa-integratie, maar zonder lokale opslag en met verplicht abonnement voor de videogeschiedenis."
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
          "fr": "Il offre un filtre HEPA H13, le Wi-Fi et la compatibilité Alexa et Google à petit prix, ce qui en fait le meilleur rapport qualité-prix du marché.",
          "en": "It offers an H13 HEPA filter, Wi-Fi and Alexa and Google support at a low price, making it the best value on the market.",
          "de": "Er bietet einen HEPA-H13-Filter, WLAN und Alexa- sowie Google-Unterstützung zum kleinen Preis und ist damit das beste Preis-Leistungs-Verhältnis am Markt.",
          "es": "Ofrece filtro HEPA H13, Wi-Fi y compatibilidad con Alexa y Google a bajo precio, la mejor relación calidad-precio del mercado.",
          "it": "Offre filtro HEPA H13, Wi-Fi e compatibilità con Alexa e Google a basso prezzo, il miglior rapporto qualità-prezzo del mercato.",
          "nl": "Hij biedt een HEPA H13-filter, wifi en Alexa- en Google-ondersteuning tegen een lage prijs en is de beste prijs-kwaliteit op de markt."
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
          "fr": "Dans la gamme du meilleur compromis, il associe un capteur PM2.5 laser et un écran OLED à une forte capacité d'épuration, jugé imbattable.",
          "en": "In the best-compromise price range, it pairs a laser PM2.5 sensor and OLED display with high air-cleaning capacity, and is judged unbeatable.",
          "de": "In der Preisklasse des besten Kompromisses vereint er einen Laser-PM2.5-Sensor und OLED-Display mit hoher Reinigungsleistung und gilt als unschlagbar.",
          "es": "En la gama del mejor compromiso, une un sensor PM2.5 láser y pantalla OLED con gran capacidad de purificación, y se considera imbatible.",
          "it": "Nella fascia del miglior compromesso unisce sensore PM2.5 laser e display OLED a un'elevata capacità di purificazione ed è giudicato imbattibile.",
          "nl": "In het segment van het beste compromis combineert hij een laser-PM2.5-sensor en OLED-scherm met een hoge zuiveringscapaciteit en geldt als onverslaanbaar."
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
          "fr": "Il couvre jusqu'à 98 m² avec une très forte capacité et des capteurs AeraSense 3-en-1, adapté aux grands séjours.",
          "en": "It covers up to 98 m² with very high capacity and AeraSense 3-in-1 sensors, suited to large living rooms.",
          "de": "Er deckt bis zu 98 m² mit sehr hoher Leistung und AeraSense-3-in-1-Sensoren ab und eignet sich für große Wohnzimmer.",
          "es": "Cubre hasta 98 m² con una capacidad muy alta y sensores AeraSense 3 en 1, adecuado para salones grandes.",
          "it": "Copre fino a 98 m² con altissima capacità e sensori AeraSense 3-in-1, adatto ai grandi soggiorni.",
          "nl": "Hij bestrijkt tot 98 m² met zeer hoge capaciteit en AeraSense 3-in-1-sensoren, geschikt voor grote woonkamers."
        }
      },
      {
        "model": "Blueair Blue Pure 411i Max",
        "role": {
          "fr": "Idéal pour les chambres",
          "en": "Best for bedrooms",
          "de": "Ideal fürs Schlafzimmer",
          "es": "Ideal para dormitorios",
          "it": "Ideale per le camere da letto",
          "nl": "Ideaal voor slaapkamers"
        },
        "why": {
          "fr": "Ce modèle compact au design épuré, avec technologie HEPASilent, brille par son silence, mais ses filtres propriétaires coûtent cher.",
          "en": "This compact model with a clean design and HEPASilent technology stands out for silence, though its proprietary filters are costly.",
          "de": "Dieses kompakte Modell mit schlichtem Design und HEPASilent-Technologie überzeugt durch Ruhe, doch die herstellereigenen Filter sind teuer.",
          "es": "Este modelo compacto de diseño depurado y tecnología HEPASilent destaca por su silencio, aunque sus filtros propietarios son caros.",
          "it": "Questo modello compatto dal design pulito e tecnologia HEPASilent spicca per il silenzio, anche se i filtri proprietari sono costosi.",
          "nl": "Dit compacte model met strak ontwerp en HEPASilent-technologie valt op door stilte, al zijn de eigen filters duur."
        }
      }
    ]
  },
  "comparatif-purificateur-air-allergie": {
    "question": {
      "fr": "Quel est le meilleur purificateur d'air pour les allergies en 2026 ?",
      "en": "What is the best air purifier for allergies in 2026?",
      "de": "Welcher ist der beste Luftreiniger bei Allergien 2026?",
      "es": "¿Cuál es el mejor purificador de aire para alergias en 2026?",
      "it": "Qual è il miglior purificatore d'aria per le allergie nel 2026?",
      "nl": "Wat is de beste luchtreiniger voor allergieën in 2026?"
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
          "fr": "Son filtre HEPA H13 certifié capture pollens, acariens, poils et moisissures à petit prix, le choix idéal pour débuter ou équiper une chambre.",
          "en": "Its certified H13 HEPA filter captures pollen, dust mites, pet hair and mould spores at a low price, the ideal choice to start or equip a bedroom.",
          "de": "Der zertifizierte HEPA-H13-Filter fängt Pollen, Milben, Tierhaare und Schimmelsporen günstig ein, die ideale Wahl zum Einstieg oder fürs Schlafzimmer.",
          "es": "Su filtro HEPA H13 certificado captura polen, ácaros, pelos y esporas de moho a bajo precio, la opción ideal para empezar o equipar un dormitorio.",
          "it": "Il filtro HEPA H13 certificato cattura pollini, acari, peli e spore di muffa a basso prezzo, la scelta ideale per iniziare o per una camera.",
          "nl": "Zijn gecertificeerde HEPA H13-filter vangt pollen, huisstofmijt, dierenhaar en schimmelsporen op voor weinig geld, ideaal om te beginnen of voor een slaapkamer."
        }
      },
      {
        "model": "Coway Airmega 250",
        "role": {
          "fr": "Pour allergies sévères",
          "en": "Best for severe allergies",
          "de": "Für schwere Allergien",
          "es": "Para alergias graves",
          "it": "Per allergie gravi",
          "nl": "Voor ernstige allergieën"
        },
        "why": {
          "fr": "Sa technologie Green HEPA, son capteur PM2.5 et son mode Eco en font le meilleur purificateur sans compromis pour les allergiques sévères.",
          "en": "Its Green HEPA technology, PM2.5 sensor and Eco mode make it the best no-compromise purifier for severe allergy sufferers.",
          "de": "Seine Green-HEPA-Technologie, der PM2.5-Sensor und der Eco-Modus machen ihn zum besten kompromisslosen Luftreiniger für schwere Allergiker.",
          "es": "Su tecnología Green HEPA, su sensor PM2.5 y su modo Eco lo hacen el mejor purificador sin compromisos para alérgicos graves.",
          "it": "La tecnologia Green HEPA, il sensore PM2.5 e la modalità Eco ne fanno il miglior purificatore senza compromessi per gli allergici gravi.",
          "nl": "Zijn Green HEPA-technologie, PM2.5-sensor en Eco-modus maken hem de beste compromisloze luchtreiniger voor ernstige allergiepatiënten."
        }
      },
      {
        "model": "Blueair Blue Pure 411i Max",
        "role": {
          "fr": "Le plus silencieux",
          "en": "Quietest pick",
          "de": "Der leiseste",
          "es": "El más silencioso",
          "it": "Il più silenzioso",
          "nl": "De stilste"
        },
        "why": {
          "fr": "Sa technologie HEPASilent le rend presque inaudible, parfait pour les allergiques au sommeil léger qui veulent le silence absolu et se passent du connecté.",
          "en": "Its HEPASilent technology makes it almost inaudible, perfect for light-sleeping allergy sufferers who want absolute silence and can skip smart features.",
          "de": "Dank HEPASilent ist er fast unhörbar, perfekt für Allergiker mit leichtem Schlaf, die absolute Ruhe wollen und auf vernetzte Funktionen verzichten können.",
          "es": "Su tecnología HEPASilent lo hace casi inaudible, perfecto para alérgicos de sueño ligero que quieren silencio absoluto y prescinden de funciones conectadas.",
          "it": "La tecnologia HEPASilent lo rende quasi inudibile, perfetto per gli allergici dal sonno leggero che vogliono il silenzio assoluto e rinunciano alle funzioni connesse.",
          "nl": "Dankzij HEPASilent is hij bijna onhoorbaar, perfect voor allergiepatiënten met een lichte slaap die absolute stilte willen en slimme functies kunnen missen."
        }
      },
      {
        "model": "Philips AC2939/10",
        "role": {
          "fr": "Pour grands espaces",
          "en": "Best for large spaces",
          "de": "Für große Räume",
          "es": "Para espacios grandes",
          "it": "Per grandi spazi",
          "nl": "Voor grote ruimtes"
        },
        "why": {
          "fr": "Le plus puissant du comparatif, il couvre jusqu'à 98 m² et s'impose pour les grands salons et open spaces, mais c'est aussi le plus cher.",
          "en": "The most powerful in the comparison, it covers up to 98 m² and is the pick for large living rooms and open-plan spaces, but also the priciest.",
          "de": "Der stärkste im Vergleich deckt bis zu 98 m² ab und ist die Wahl für große Wohnzimmer und offene Räume, aber auch der teuerste.",
          "es": "El más potente de la comparativa cubre hasta 98 m² y se impone para salones grandes y espacios abiertos, aunque también es el más caro.",
          "it": "Il più potente del confronto copre fino a 98 m² e si impone per grandi soggiorni e open space, ma è anche il più costoso.",
          "nl": "De krachtigste in de vergelijking bestrijkt tot 98 m² en is de keuze voor grote woonkamers en open ruimtes, maar ook de duurste."
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
        "model": "Xiaomi Smart Standing Fan 2",
        "role": {
          "fr": "Meilleur ventilateur économique",
          "en": "Best budget fan",
          "de": "Bester günstiger Ventilator",
          "es": "Mejor ventilador económico",
          "it": "Miglior ventilatore economico",
          "nl": "Beste voordelige ventilator"
        },
        "why": {
          "fr": "Pour un budget serré et des températures sous 35 °C, ce ventilateur colonne à moteur DC est la solution la plus raisonnable : silencieux, très sobre, sans installation.",
          "en": "For a tight budget and temperatures below 35°C, this DC-motor tower fan is the most sensible solution: quiet, very low consumption and no installation.",
          "de": "Bei knappem Budget und Temperaturen unter 35 °C ist dieser Turmventilator mit DC-Motor die vernünftigste Lösung: leise, sehr sparsam und ohne Installation.",
          "es": "Con presupuesto ajustado y temperaturas por debajo de 35 °C, este ventilador de columna con motor DC es la solución más sensata: silencioso, muy sobrio y sin instalación.",
          "it": "Con poco budget e meno di 35 °C, questo ventilatore a colonna con motore DC è la soluzione più sensata: silenzioso, molto sobrio e senza installazione.",
          "nl": "Bij een krap budget en temperaturen onder 35 °C is deze torenventilator met DC-motor de verstandigste oplossing: stil, erg zuinig en zonder installatie."
        }
      },
      {
        "model": "De'Longhi Pinguino PAC EX130 ECO",
        "role": {
          "fr": "Pour les canicules",
          "en": "Best for heatwaves",
          "de": "Für Hitzewellen",
          "es": "Para olas de calor",
          "it": "Per le ondate di caldo",
          "nl": "Voor hittegolven"
        },
        "why": {
          "fr": "Au-delà de 35 °C seul le climatiseur mobile refroidit réellement, et ce modèle de classe A+ limite la facture d'électricité.",
          "en": "Above 35°C only a portable air conditioner truly cools, and this A+ class model keeps the electricity bill down.",
          "de": "Über 35 °C kühlt nur ein mobiles Klimagerät wirklich, und dieses Modell der Klasse A+ hält die Stromrechnung niedrig.",
          "es": "Por encima de 35 °C solo el aire acondicionado portátil enfría de verdad, y este modelo de clase A+ limita la factura eléctrica.",
          "it": "Oltre i 35 °C solo il condizionatore portatile raffredda davvero, e questo modello di classe A+ contiene la bolletta elettrica.",
          "nl": "Boven 35 °C koelt alleen een mobiele airco echt, en dit model van klasse A+ houdt de stroomrekening beperkt."
        }
      },
      {
        "model": "Dyson Pure Cool TP07",
        "role": {
          "fr": "Meilleur 2-en-1",
          "en": "Best 2-in-1",
          "de": "Bestes 2-in-1-Gerät",
          "es": "Mejor 2 en 1",
          "it": "Miglior 2-in-1",
          "nl": "Beste 2-in-1"
        },
        "why": {
          "fr": "Il combine ventilateur et purificateur HEPA avec application et compatibilité Alexa et Google, le meilleur 2-en-1 de la sélection.",
          "en": "It combines a fan and HEPA purifier with an app and Alexa and Google support, the best 2-in-1 in the selection.",
          "de": "Er kombiniert Ventilator und HEPA-Luftreiniger mit App sowie Alexa- und Google-Unterstützung, das beste 2-in-1-Gerät der Auswahl.",
          "es": "Combina ventilador y purificador HEPA con app y compatibilidad con Alexa y Google, el mejor 2 en 1 de la selección.",
          "it": "Combina ventilatore e purificatore HEPA con app e compatibilità Alexa e Google, il miglior 2-in-1 della selezione.",
          "nl": "Hij combineert ventilator en HEPA-luchtreiniger met app en Alexa- en Google-ondersteuning, de beste 2-in-1 van de selectie."
        }
      },
      {
        "model": "Rowenta Turbo Silence Extreme+",
        "role": {
          "fr": "Excellent rapport qualité-prix",
          "en": "Great value",
          "de": "Sehr gutes Preis-Leistungs-Verhältnis",
          "es": "Excelente relación calidad-precio",
          "it": "Ottimo rapporto qualità-prezzo",
          "nl": "Uitstekende prijs-kwaliteit"
        },
        "why": {
          "fr": "Ce ventilateur sur pied à cinq pales reste discret en mode nuit pour un prix modéré, un excellent rapport qualité-prix.",
          "en": "This five-blade pedestal fan stays quiet in night mode at a moderate price, offering excellent value.",
          "de": "Dieser Standventilator mit fünf Flügeln bleibt im Nachtmodus leise und kostet wenig, ein sehr gutes Preis-Leistungs-Verhältnis.",
          "es": "Este ventilador de pie de cinco aspas es discreto en modo noche y de precio moderado, con una excelente relación calidad-precio.",
          "it": "Questo ventilatore a piantana a cinque pale resta silenzioso in modalità notte a un prezzo moderato, con un ottimo rapporto qualità-prezzo.",
          "nl": "Deze statiefventilator met vijf bladen blijft in nachtmodus stil tegen een gematigde prijs, met uitstekende prijs-kwaliteit."
        }
      }
    ]
  },
  "guide-cuisine-connectee-2026": {
    "question": {
      "fr": "Quels sont les meilleurs appareils de cuisine connectée en 2026 ?",
      "en": "What are the best smart kitchen appliances in 2026?",
      "de": "Welche sind die besten smarten Küchengeräte 2026?",
      "es": "¿Cuáles son los mejores electrodomésticos de cocina conectada en 2026?",
      "it": "Quali sono i migliori elettrodomestici da cucina connessa nel 2026?",
      "nl": "Wat zijn de beste slimme keukenapparaten in 2026?"
    },
    "picks": [
      {
        "model": "Moulinex Cookeo Touch WiFi",
        "role": {
          "fr": "Meilleur rapport qualité-prix pour les familles",
          "en": "Best value for families",
          "de": "Bestes Preis-Leistungs-Verhältnis für Familien",
          "es": "Mejor relación calidad-precio para familias",
          "it": "Miglior rapporto qualità-prezzo per famiglie",
          "nl": "Beste prijs-kwaliteit voor gezinnen"
        },
        "why": {
          "fr": "La référence française propose plus de 2 500 recettes guidées avec liste de courses intégrée, ce qui en fait le meilleur rapport qualité-prix pour les familles francophones.",
          "en": "The French reference offers over 2,500 guided recipes with a built-in shopping list, making it the best value for French-speaking families.",
          "de": "Die französische Referenz bietet über 2.500 geführte Rezepte mit integrierter Einkaufsliste und ist das beste Preis-Leistungs-Verhältnis für französischsprachige Familien.",
          "es": "La referencia francesa ofrece más de 2.500 recetas guiadas con lista de la compra integrada, la mejor relación calidad-precio para familias francófonas.",
          "it": "Il riferimento francese offre oltre 2.500 ricette guidate con lista della spesa integrata, il miglior rapporto qualità-prezzo per le famiglie francofone.",
          "nl": "De Franse referentie biedt meer dan 2.500 begeleide recepten met ingebouwde boodschappenlijst en is de beste prijs-kwaliteit voor Franstalige gezinnen."
        }
      },
      {
        "model": "Ninja Foodi MAX SmartLid",
        "role": {
          "fr": "Le tout-en-un connecté",
          "en": "Best all-in-one",
          "de": "Das vernetzte Allround-Gerät",
          "es": "El todo en uno conectado",
          "it": "Il tuttofare connesso",
          "nl": "De slimme alleskunner"
        },
        "why": {
          "fr": "Multicuiseur, air fryer et cuiseur vapeur sous un seul couvercle pivotant, avec grande capacité, il remplace un airfryer séparé et convient aux grandes familles.",
          "en": "A multicooker, air fryer and steamer under one pivoting lid with large capacity, it replaces a separate air fryer and suits big families.",
          "de": "Multikocher, Heißluftfritteuse und Dampfgarer unter einem Schwenkdeckel mit großem Fassungsvermögen, er ersetzt eine separate Heißluftfritteuse und passt zu großen Familien.",
          "es": "Multicocedor, freidora de aire y cocedor al vapor bajo una sola tapa giratoria y con gran capacidad, sustituye una freidora aparte y encaja en familias grandes.",
          "it": "Multicooker, friggitrice ad aria e cuocivapore sotto un unico coperchio girevole con grande capacità, sostituisce una friggitrice separata e si adatta alle famiglie numerose.",
          "nl": "Multikoker, heteluchtfriteuse en stoomkoker onder één draaideksel met grote capaciteit, hij vervangt een aparte friteuse en past bij grote gezinnen."
        }
      },
      {
        "model": "Instant Pot Duo Plus WiFi",
        "role": {
          "fr": "Meilleur prix d'entrée",
          "en": "Best entry price",
          "de": "Günstigster Einstieg",
          "es": "Mejor precio de entrada",
          "it": "Miglior prezzo d'ingresso",
          "nl": "Beste instapprijs"
        },
        "why": {
          "fr": "Il ajoute le WiFi à la fiabilité légendaire de la marque et propose le meilleur prix d'entrée pour un multicuiseur connecté, avec planificateur de repas et compatibilité Alexa.",
          "en": "It adds WiFi to the brand's legendary reliability and offers the best entry price for a connected multicooker, with a meal planner and Alexa support.",
          "de": "Er ergänzt die legendäre Zuverlässigkeit der Marke um WLAN und bietet den besten Einstiegspreis für einen vernetzten Multikocher, mit Essensplaner und Alexa-Unterstützung.",
          "es": "Añade WiFi a la fiabilidad legendaria de la marca y ofrece el mejor precio de entrada para un multicocedor conectado, con planificador de comidas y compatibilidad con Alexa.",
          "it": "Aggiunge il WiFi alla leggendaria affidabilità del marchio e offre il miglior prezzo d'ingresso per un multicooker connesso, con pianificatore dei pasti e compatibilità Alexa.",
          "nl": "Hij voegt wifi toe aan de legendarische betrouwbaarheid van het merk en biedt de beste instapprijs voor een slimme multikoker, met maaltijdplanner en Alexa-ondersteuning."
        }
      },
      {
        "model": "De'Longhi Magnifica Evo",
        "role": {
          "fr": "Meilleure qualité d'espresso",
          "en": "Best espresso quality",
          "de": "Beste Espresso-Qualität",
          "es": "Mejor calidad de espresso",
          "it": "Miglior qualità dell'espresso",
          "nl": "Beste espressokwaliteit"
        },
        "why": {
          "fr": "La référence italienne offre la meilleure qualité d'espresso, avec réglages de mouture, température et intensité pilotables depuis l'application.",
          "en": "The Italian reference delivers the best espresso quality, with grind, temperature and strength settings controllable from the app.",
          "de": "Die italienische Referenz liefert die beste Espresso-Qualität, mit Mahlgrad, Temperatur und Stärke per App einstellbar.",
          "es": "La referencia italiana ofrece la mejor calidad de espresso, con molienda, temperatura e intensidad ajustables desde la aplicación.",
          "it": "Il riferimento italiano offre la migliore qualità di espresso, con macinatura, temperatura e intensità regolabili dall'app.",
          "nl": "De Italiaanse referentie levert de beste espressokwaliteit, met maling, temperatuur en sterkte instelbaar via de app."
        }
      }
    ]
  },
  "comparatif-multicuiseur-connecte": {
    "question": {
      "fr": "Quel est le meilleur multicuiseur connecté en 2026 ?",
      "en": "What is the best smart multicooker in 2026?",
      "de": "Welcher ist der beste smarte Multikocher 2026?",
      "es": "¿Cuál es el mejor multicocedor conectado en 2026?",
      "it": "Qual è il miglior multicooker connesso nel 2026?",
      "nl": "Wat is de beste slimme multikoker in 2026?"
    },
    "picks": [
      {
        "model": "Moulinex Cookeo Touch WiFi - 6L",
        "role": {
          "fr": "Meilleur global",
          "en": "Best overall",
          "de": "Beste Wahl insgesamt",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste keuze overall"
        },
        "why": {
          "fr": "Le meilleur écran tactile, les 2 500 recettes guidées et l'application Moulinex en font le meilleur multicuiseur connecté, surtout si l'on possède déjà un airfryer.",
          "en": "The best touchscreen, 2,500 guided recipes and the Moulinex app make it the best smart multicooker, especially if you already own an air fryer.",
          "de": "Der beste Touchscreen, 2.500 geführte Rezepte und die Moulinex-App machen ihn zum besten smarten Multikocher, vor allem wenn bereits eine Heißluftfritteuse vorhanden ist.",
          "es": "La mejor pantalla táctil, las 2.500 recetas guiadas y la app de Moulinex lo hacen el mejor multicocedor conectado, sobre todo con freidora de aire.",
          "it": "Il miglior touchscreen, le 2.500 ricette guidate e l'app Moulinex ne fanno il miglior multicooker connesso, soprattutto se si ha già una friggitrice ad aria.",
          "nl": "Het beste touchscreen, 2.500 begeleide recepten en de Moulinex-app maken hem de beste slimme multikoker, vooral als je al een heteluchtfriteuse hebt."
        }
      },
      {
        "model": "Ninja Foodi MAX 15-en-1 SmartLid OP500EU - 7.5L",
        "role": {
          "fr": "Le plus polyvalent",
          "en": "Most versatile",
          "de": "Der vielseitigste",
          "es": "El más polivalente",
          "it": "Il più versatile",
          "nl": "De veelzijdigste"
        },
        "why": {
          "fr": "Seul de la sélection à intégrer l'air frying, avec la plus grande capacité, il remplace plusieurs appareils et convient au batch cooking des grandes familles.",
          "en": "The only one in the selection with built-in air frying and the largest capacity, it replaces several appliances and suits big-family batch cooking.",
          "de": "Als einziger der Auswahl mit integriertem Air Frying und dem größten Fassungsvermögen ersetzt er mehrere Geräte und passt zum Vorkochen für große Familien.",
          "es": "El único de la selección con air frying integrado y la mayor capacidad, sustituye varios aparatos y encaja en el batch cooking de familias grandes.",
          "it": "L'unico della selezione con air frying integrato e la maggiore capacità, sostituisce più apparecchi e si adatta al batch cooking delle famiglie numerose.",
          "nl": "De enige van de selectie met ingebouwde air frying en de grootste capaciteit, hij vervangt meerdere apparaten en past bij batchcooking voor grote gezinnen."
        }
      },
      {
        "model": "Instant Pot Duo Plus WhisperQuiet - 5.7L",
        "role": {
          "fr": "Meilleur budget",
          "en": "Best budget pick",
          "de": "Bestes Budget-Modell",
          "es": "Mejor opción económica",
          "it": "Miglior scelta economica",
          "nl": "Beste budgetkeuze"
        },
        "why": {
          "fr": "Fiable et bien plus abordable que le Cookeo, avec 9 fonctions et 1 900 recettes, c'est le choix malin pour les couples et petites familles.",
          "en": "Reliable and far more affordable than the Cookeo, with 9 functions and 1,900 recipes, it is the smart choice for couples and small families.",
          "de": "Zuverlässig und deutlich günstiger als der Cookeo, mit 9 Funktionen und 1.900 Rezepten, die clevere Wahl für Paare und kleine Familien.",
          "es": "Fiable y mucho más asequible que el Cookeo, con 9 funciones y 1.900 recetas, es la opción inteligente para parejas y familias pequeñas.",
          "it": "Affidabile e molto più economico del Cookeo, con 9 funzioni e 1.900 ricette, è la scelta furba per coppie e piccole famiglie.",
          "nl": "Betrouwbaar en veel voordeliger dan de Cookeo, met 9 functies en 1.900 recepten, de slimme keuze voor stellen en kleine gezinnen."
        }
      }
    ]
  },
  "cafetiere-connectee-guide": {
    "question": {
      "fr": "Quelle est la meilleure cafetière connectée en 2026 ?",
      "en": "What is the best smart coffee machine in 2026?",
      "de": "Welche ist die beste smarte Kaffeemaschine 2026?",
      "es": "¿Cuál es la mejor cafetera inteligente en 2026?",
      "it": "Qual è la migliore macchina da caffè smart nel 2026?",
      "nl": "Wat is het beste slimme koffiezetapparaat in 2026?"
    },
    "picks": [
      {
        "model": "De'Longhi Magnifica Evo ECAM290.51.B",
        "role": {
          "fr": "Meilleur espresso",
          "en": "Best espresso quality",
          "de": "Beste Espressoqualität",
          "es": "Mejor calidad de espresso",
          "it": "Miglior espresso",
          "nl": "Beste espressokwaliteit"
        },
        "why": {
          "fr": "Son broyeur conique en acier à 13 niveaux et son système LatteCrema offrent la meilleure qualité d'espresso du comparatif, idéal pour les amateurs exigeants.",
          "en": "Its 13-level conical steel grinder and LatteCrema milk system deliver the best espresso quality in the comparison, ideal for demanding coffee lovers.",
          "de": "Das konische Stahlmahlwerk mit 13 Stufen und das LatteCrema-System liefern die beste Espressoqualität im Vergleich, ideal für anspruchsvolle Kaffeeliebhaber.",
          "es": "Su molinillo cónico de acero de 13 niveles y el sistema LatteCrema ofrecen la mejor calidad de espresso de la comparativa, ideal para los más exigentes.",
          "it": "Il macinacaffè conico in acciaio a 13 livelli e il sistema LatteCrema offrono la migliore qualità di espresso del confronto, ideale per i più esigenti.",
          "nl": "De conische stalen molen met 13 standen en het LatteCrema-systeem leveren de beste espressokwaliteit van de vergelijking, ideaal voor veeleisende koffieliefhebbers."
        }
      },
      {
        "model": "Philips 5500 LatteGo Series EP5541/50",
        "role": {
          "fr": "Entretien le plus simple",
          "en": "Easiest to maintain",
          "de": "Am einfachsten zu reinigen",
          "es": "El más fácil de mantener",
          "it": "Manutenzione più semplice",
          "nl": "Gemakkelijkst te onderhouden"
        },
        "why": {
          "fr": "Le système lait LatteGo en deux pièces se rince en 15 secondes et le broyeur céramique est silencieux, mais la connexion se limite au Bluetooth.",
          "en": "The two-piece LatteGo milk system rinses in 15 seconds and the ceramic grinder is quiet, but connectivity is limited to Bluetooth.",
          "de": "Das zweiteilige LatteGo-Milchsystem ist in 15 Sekunden gespült und das Keramikmahlwerk ist leise, die Verbindung beschränkt sich aber auf Bluetooth.",
          "es": "El sistema de leche LatteGo de dos piezas se enjuaga en 15 segundos y el molinillo cerámico es silencioso, aunque la conexión se limita a Bluetooth.",
          "it": "Il sistema latte LatteGo in due pezzi si sciacqua in 15 secondi e il macinacaffè in ceramica è silenzioso, ma la connessione è solo Bluetooth.",
          "nl": "Het tweedelige LatteGo-melksysteem spoel je in 15 seconden schoon en de keramische molen is stil, maar de verbinding beperkt zich tot Bluetooth."
        }
      },
      {
        "model": "Krups Evidence One EA895N10",
        "role": {
          "fr": "Le plus polyvalent",
          "en": "Most versatile",
          "de": "Am vielseitigsten",
          "es": "La más versátil",
          "it": "La più versatile",
          "nl": "Meest veelzijdig"
        },
        "why": {
          "fr": "Seule machine du comparatif à préparer nativement des boissons froides, dont un cold brew express, avec le plus grand réservoir, mais un broyeur moins précis.",
          "en": "The only machine in the comparison that natively makes cold drinks, including express cold brew, with the largest water tank but a less precise grinder.",
          "de": "Die einzige Maschine im Vergleich mit nativen Kaltgetränken, darunter Express-Cold-Brew, mit dem größten Wassertank, aber einem weniger präzisen Mahlwerk.",
          "es": "Es la única máquina de la comparativa que prepara bebidas frías de serie, incluido cold brew exprés, con el mayor depósito pero un molinillo menos preciso.",
          "it": "È l'unica macchina del confronto a preparare bevande fredde di serie, incluso il cold brew express, con il serbatoio più grande ma un macinacaffè meno preciso.",
          "nl": "De enige machine in de vergelijking die standaard koude dranken maakt, waaronder snelle cold brew, met het grootste waterreservoir maar een minder nauwkeurige molen."
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
        "model": "Mammotion LUBA 2 AWD",
        "role": {
          "fr": "Idéal pour les pentes",
          "en": "Best for sloped lawns",
          "de": "Beste für Hanglagen",
          "es": "Ideal para pendientes",
          "it": "Ideale per i pendii",
          "nl": "Beste voor hellingen"
        },
        "why": {
          "fr": "Le guide recommande ce modèle à quatre roues motrices pour les terrains dépassant 25 % de pente, avec navigation RTK et vision, jusqu'à 5 000 m².",
          "en": "The guide recommends this four-wheel-drive model for lawns steeper than 25 percent, with RTK and vision navigation covering up to 5,000 square meters.",
          "de": "Der Ratgeber empfiehlt dieses Allradmodell für Grundstücke mit mehr als 25 Prozent Steigung, mit RTK- und Kamera-Navigation für bis zu 5.000 Quadratmeter.",
          "es": "La guía recomienda este modelo de tracción total para terrenos con más de un 25 % de pendiente, con navegación RTK y visión para hasta 5.000 metros cuadrados.",
          "it": "La guida consiglia questo modello a trazione integrale per terreni con pendenze oltre il 25 percento, con navigazione RTK e visione fino a 5.000 metri quadrati.",
          "nl": "De gids raadt dit vierwielaangedreven model aan voor terreinen met meer dan 25 procent helling, met RTK- en visionnavigatie voor maximaal 5.000 vierkante meter."
        }
      },
      {
        "model": "Husqvarna Automower NERA",
        "role": {
          "fr": "Haut de gamme",
          "en": "Premium pick",
          "de": "Premium-Wahl",
          "es": "Gama alta",
          "it": "Fascia alta",
          "nl": "Premiumkeuze"
        },
        "why": {
          "fr": "Modèle phare de Husqvarna : GPS RTK et EPOS, jusqu'à 5 000 m² et des pentes de 35 %, mais c'est le plus cher de la sélection.",
          "en": "Husqvarna's flagship combines GPS RTK and EPOS to cover up to 5,000 square meters and 35 percent slopes, but it is the most expensive in the selection.",
          "de": "Husqvarnas Flaggschiff kombiniert GPS-RTK und EPOS für bis zu 5.000 Quadratmeter und 35 Prozent Steigung, ist aber das teuerste Modell der Auswahl.",
          "es": "Modelo estrella de Husqvarna: GPS RTK y EPOS, hasta 5.000 metros cuadrados y pendientes del 35 %, pero es el más caro de la selección.",
          "it": "Modello di punta Husqvarna: GPS RTK ed EPOS, fino a 5.000 metri quadrati e pendenze del 35 percento, ma è il più costoso della selezione.",
          "nl": "Het vlaggenschip van Husqvarna combineert GPS-RTK en EPOS voor maximaal 5.000 vierkante meter en 35 procent helling, maar is het duurste model van de selectie."
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
  "tondeuse-robot-sans-fil-perimetrique": {
    "question": {
      "fr": "Quelle est la meilleure tondeuse robot sans fil périmétrique en 2026 ?",
      "en": "What is the best cable-free robot mower in 2026?",
      "de": "Welcher ist der beste Mähroboter ohne Begrenzungskabel 2026?",
      "es": "¿Cuál es el mejor robot cortacésped sin cable perimetral en 2026?",
      "it": "Qual è il miglior robot tagliaerba senza filo perimetrale nel 2026?",
      "nl": "Wat is de beste robotmaaier zonder begrenzingsdraad in 2026?"
    },
    "picks": [
      {
        "model": "Husqvarna Automower NERA",
        "role": {
          "fr": "Haut de gamme",
          "en": "Premium pick",
          "de": "Premium-Wahl",
          "es": "Gama alta",
          "it": "Fascia alta",
          "nl": "Premiumkeuze"
        },
        "why": {
          "fr": "Le système EPOS offre la précision la plus élevée du marché, une tonte en lignes parallèles et l'autonomie la plus longue, mais c'est le plus cher.",
          "en": "The EPOS system gives the highest precision on the market, parallel-line mowing and the longest runtime, but it is also the most expensive model.",
          "de": "Das EPOS-System bietet die höchste Präzision am Markt, Mähen in parallelen Bahnen und die längste Laufzeit, ist aber auch das teuerste Modell.",
          "es": "El sistema EPOS ofrece la mayor precisión del mercado, corte en líneas paralelas y la mayor autonomía, pero también es el modelo más caro.",
          "it": "Il sistema EPOS offre la massima precisione del mercato, taglio a linee parallele e la maggiore autonomia, ma è anche il modello più costoso.",
          "nl": "Het EPOS-systeem biedt de hoogste precisie van de markt, maaien in parallelle banen en de langste looptijd, maar is ook het duurste model."
        }
      },
      {
        "model": "Mammotion LUBA 2 AWD",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Sa traction intégrale gère les pentes jusqu'à 38 %, avec la plus grande largeur de coupe du comparatif et une double navigation RTK et caméra IA.",
          "en": "Its all-wheel drive handles slopes up to 38 percent, with the widest cutting width in the comparison and dual RTK and AI camera navigation.",
          "de": "Der Allradantrieb meistert Steigungen bis 38 Prozent, mit der größten Schnittbreite im Vergleich und doppelter Navigation aus RTK und KI-Kamera.",
          "es": "Su tracción total supera pendientes de hasta el 38 %, con el mayor ancho de corte de la comparativa y doble navegación RTK y cámara con IA.",
          "it": "La trazione integrale gestisce pendenze fino al 38 percento, con la maggiore larghezza di taglio del confronto e doppia navigazione RTK e telecamera IA.",
          "nl": "De vierwielaandrijving verwerkt hellingen tot 38 procent, met de grootste maaibreedte van de vergelijking en dubbele navigatie met RTK en AI-camera."
        }
      },
      {
        "model": "Segway Navimow i105E",
        "role": {
          "fr": "Le plus sûr pour débuter",
          "en": "Safest first purchase",
          "de": "Sicherster Einstieg",
          "es": "La opción más segura para empezar",
          "it": "La più sicura per iniziare",
          "nl": "Veiligste eerste aankoop"
        },
        "why": {
          "fr": "Installation très simple avec un tour du jardin, précision RTK et app stable, mais pente limitée à 27 % et largeur de coupe réduite.",
          "en": "Very easy setup by walking the lawn border, good RTK precision and a stable app, but slopes are limited to 27 percent and the cutting width is narrow.",
          "de": "Sehr einfache Einrichtung durch Abschreiten des Gartens, gute RTK-Präzision und stabile App, aber Steigung auf 27 Prozent und Schnittbreite begrenzt.",
          "es": "Instalación muy sencilla recorriendo el jardín, buena precisión RTK y app estable, pero con pendiente limitada al 27 % y un ancho de corte reducido.",
          "it": "Installazione molto semplice percorrendo il giardino, buona precisione RTK e app stabile, ma pendenza limitata al 27 percento e larghezza di taglio ridotta.",
          "nl": "Zeer eenvoudige installatie door de tuin af te lopen, goede RTK-precisie en stabiele app, maar de helling is beperkt tot 27 procent en de maaibreedte is smal."
        }
      },
      {
        "model": "ECOVACS GOAT GX-600",
        "role": {
          "fr": "Idéal pour petits jardins",
          "en": "Best for small gardens",
          "de": "Beste für kleine Gärten",
          "es": "Ideal para jardines pequeños",
          "it": "Ideale per piccoli giardini",
          "nl": "Beste voor kleine tuinen"
        },
        "why": {
          "fr": "Fonctionne par vision IA sans station de référence RTK et c'est le moins cher du comparatif, mais limité à 1 600 m² et moins précis.",
          "en": "It works with AI vision without an RTK reference station and is the cheapest in the comparison, but is limited to 1,600 square meters and less precise.",
          "de": "Es arbeitet mit KI-Kamera ohne RTK-Referenzstation und ist das günstigste Modell im Vergleich, aber auf 1.600 Quadratmeter begrenzt und weniger präzise.",
          "es": "Funciona con visión por IA sin estación RTK y es el más barato de la comparativa, pero se limita a 1.600 metros cuadrados y es menos preciso.",
          "it": "Funziona con visione IA senza stazione di riferimento RTK ed è il più economico del confronto, ma limitato a 1.600 metri quadrati e meno preciso.",
          "nl": "Werkt met AI-vision zonder RTK-referentiestation en is de goedkoopste uit de vergelijking, maar beperkt tot 1.600 vierkante meter en minder nauwkeurig."
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
      "nl": "Wat is het beste slimme sproeisysteem in 2026?"
    },
    "picks": [
      {
        "model": "Gardena Smart System",
        "role": {
          "fr": "Meilleur écosystème européen",
          "en": "Best European ecosystem",
          "de": "Bestes europäisches Ökosystem",
          "es": "Mejor ecosistema europeo",
          "it": "Miglior ecosistema europeo",
          "nl": "Beste Europese ecosysteem"
        },
        "why": {
          "fr": "Recommandé pour la plupart des jardins européens : l'écosystème le plus complet et le mieux intégré, avec capteurs d'humidité du sol et passerelle dédiée.",
          "en": "Recommended for most European gardens: the most complete and best-integrated ecosystem, with soil moisture sensors and a dedicated gateway.",
          "de": "Empfohlen für die meisten europäischen Gärten: das vollständigste und am besten integrierte Ökosystem, mit Bodenfeuchtesensoren und eigenem Gateway.",
          "es": "Recomendado para la mayoría de los jardines europeos: el ecosistema más completo y mejor integrado, con sensores de humedad del suelo y puerta de enlace propia.",
          "it": "Consigliato per la maggior parte dei giardini europei: l'ecosistema più completo e meglio integrato, con sensori di umidità del terreno e gateway dedicato.",
          "nl": "Aanbevolen voor de meeste Europese tuinen: het meest complete en best geïntegreerde ecosysteem, met bodemvochtsensoren en een eigen gateway."
        }
      },
      {
        "model": "Rachio 3",
        "role": {
          "fr": "Le plus intelligent",
          "en": "Smartest controller",
          "de": "Intelligentester Controller",
          "es": "El más inteligente",
          "it": "Il più intelligente",
          "nl": "Slimste controller"
        },
        "why": {
          "fr": "Le plus intelligent du marché avec Weather Intelligence+, 8 ou 16 zones et compatibilité Apple HomeKit, adapté aux installations multi-zones et budgets plus généreux.",
          "en": "The smartest on the market with Weather Intelligence+, 8 or 16 zones and Apple HomeKit support, suited to multi-zone setups and larger budgets.",
          "de": "Der intelligenteste Controller am Markt mit Weather Intelligence+, 8 oder 16 Zonen und Apple-HomeKit-Unterstützung, passend für Mehrzonenanlagen und größere Budgets.",
          "es": "El más inteligente del mercado con Weather Intelligence+, 8 o 16 zonas y compatibilidad con Apple HomeKit, adecuado para instalaciones multizona y presupuestos mayores.",
          "it": "Il più intelligente sul mercato con Weather Intelligence+, 8 o 16 zone e compatibilità Apple HomeKit, adatto a impianti multizona e budget più generosi.",
          "nl": "De slimste op de markt met Weather Intelligence+, 8 of 16 zones en Apple HomeKit-ondersteuning, geschikt voor meerzone-installaties en ruimere budgetten."
        }
      },
      {
        "model": "Orbit B-hyve",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Idéal pour un premier système connecté, un jardin simple ou un budget serré, avec adaptation à la météo et jusqu'à 16 zones.",
          "en": "Ideal for a first smart watering system, a simple garden or a tight budget, with weather-based adjustment and up to 16 zones.",
          "de": "Ideal für ein erstes smartes Bewässerungssystem, einen einfachen Garten oder ein knappes Budget, mit Wetteranpassung und bis zu 16 Zonen.",
          "es": "Ideal para un primer sistema de riego conectado, un jardín sencillo o un presupuesto ajustado, con adaptación al clima y hasta 16 zonas.",
          "it": "Ideale per un primo sistema di irrigazione connesso, un giardino semplice o un budget ridotto, con adattamento al meteo e fino a 16 zone.",
          "nl": "Ideaal voor een eerste slim sproeisysteem, een eenvoudige tuin of een krap budget, met weeraanpassing en maximaal 16 zones."
        }
      },
      {
        "model": "Eve Aqua",
        "role": {
          "fr": "Matter natif et confidentialité",
          "en": "Native Matter and privacy",
          "de": "Natives Matter und Datenschutz",
          "es": "Matter nativo y privacidad",
          "it": "Matter nativo e privacy",
          "nl": "Native Matter en privacy"
        },
        "why": {
          "fr": "Robinet connecté à une zone, natif Matter et HomeKit et sans dépendance au cloud, idéal pour les utilisateurs Apple Home soucieux de confidentialité.",
          "en": "A single-zone smart tap that is natively Matter and HomeKit with no cloud dependency, ideal for privacy-minded Apple Home users.",
          "de": "Ein smarter Wasserhahn für eine Zone, nativ mit Matter und HomeKit und ohne Cloud-Abhängigkeit, ideal für datenschutzbewusste Apple-Home-Nutzer.",
          "es": "Un grifo conectado de una sola zona, nativo en Matter y HomeKit y sin depender de la nube, ideal para usuarios de Apple Home preocupados por la privacidad.",
          "it": "Un rubinetto connesso a una zona, nativo Matter e HomeKit e senza dipendenza dal cloud, ideale per gli utenti Apple Home attenti alla privacy.",
          "nl": "Een slimme kraan voor één zone, native Matter en HomeKit en zonder cloudafhankelijkheid, ideaal voor privacybewuste Apple Home-gebruikers."
        }
      }
    ]
  },
  "robot-aspirateur-vs-balai": {
    "question": {
      "fr": "Robot aspirateur ou aspirateur balai : lequel choisir en 2026 ?",
      "en": "Robot vacuum or stick vacuum: which should you choose in 2026?",
      "de": "Saugroboter oder Stielsauger: Was solltest du 2026 wählen?",
      "es": "¿Robot aspirador o aspiradora de mano: cuál elegir en 2026?",
      "it": "Robot aspirapolvere o scopa elettrica: quale scegliere nel 2026?",
      "nl": "Robotstofzuiger of steelstofzuiger: welke kies je in 2026?"
    },
    "picks": [
      {
        "model": "Roborock S8 MaxV Ultra",
        "role": {
          "fr": "Meilleur pour sols durs",
          "en": "Best for hard floors",
          "de": "Beste für Hartböden",
          "es": "Mejor para suelos duros",
          "it": "Migliore per pavimenti duri",
          "nl": "Beste voor harde vloeren"
        },
        "why": {
          "fr": "Choix éditeur pour appartements et maisons à sols durs : nettoyage autonome au quotidien, aspiration et lavage, avec une station qui se vide et se lave seule.",
          "en": "Editor's choice for hard-floor apartments and homes: autonomous daily cleaning with vacuuming and mopping, plus a station that empties and washes itself.",
          "de": "Empfehlung der Redaktion für Wohnungen und Häuser mit Hartböden: autonome tägliche Reinigung mit Saugen und Wischen, samt Station, die sich selbst leert und wäscht.",
          "es": "Elección del editor para pisos y casas con suelos duros: limpieza autónoma diaria con aspirado y fregado, y una estación que se vacía y se lava sola.",
          "it": "Scelta della redazione per appartamenti e case con pavimenti duri: pulizia autonoma quotidiana con aspirazione e lavaggio, e una stazione che si svuota e si lava da sola.",
          "nl": "Keuze van de redactie voor appartementen en huizen met harde vloeren: autonoom dagelijks reinigen met zuigen en dweilen, plus een station dat zichzelf leegt en wast."
        }
      },
      {
        "model": "Dyson V15 Detect Absolute",
        "role": {
          "fr": "Idéal pour tapis et moquettes",
          "en": "Best for carpets and rugs",
          "de": "Beste für Teppiche",
          "es": "Ideal para alfombras y moquetas",
          "it": "Ideale per tappeti e moquette",
          "nl": "Beste voor tapijt"
        },
        "why": {
          "fr": "Sa puissance d'extraction est imbattable sur les fibres, indispensable avec tapis, moquettes ou escaliers, mais sans navigation autonome ni fonction de lavage.",
          "en": "Its extraction power is unbeatable on fibers, essential with rugs, carpets or stairs, but it has no autonomous navigation and no mopping function.",
          "de": "Die Saugkraft auf Fasern ist unschlagbar und unverzichtbar bei Teppichen, Teppichboden oder Treppen, aber ohne autonome Navigation und ohne Wischfunktion.",
          "es": "Su potencia de extracción es imbatible sobre las fibras, imprescindible con alfombras, moquetas o escaleras, pero sin navegación autónoma ni función de fregado.",
          "it": "La sua potenza di estrazione è imbattibile sulle fibre, indispensabile con tappeti, moquette o scale, ma senza navigazione autonoma né funzione di lavaggio.",
          "nl": "Zijn zuigkracht op vezels is ongeëvenaard, onmisbaar bij tapijt, vast tapijt of trappen, maar zonder autonome navigatie en zonder dweilfunctie."
        }
      },
      {
        "model": "Dreame H14",
        "role": {
          "fr": "Idéal pour sols durs tachés",
          "en": "Best for stained hard floors",
          "de": "Beste bei Flecken auf Hartböden",
          "es": "Ideal para manchas en suelos duros",
          "it": "Ideale per macchie su pavimenti duri",
          "nl": "Beste voor vlekken op harde vloeren"
        },
        "why": {
          "fr": "Le lavage à l'eau chaude combiné à l'aspiration est une révélation pour les sols durs souvent tachés, à un prix très inférieur au robot haut de gamme.",
          "en": "Hot-water washing combined with suction is a revelation for hard floors with frequent stains, at a much lower price than the premium robot.",
          "de": "Die Reinigung mit Heißwasser bei gleichzeitigem Saugen ist eine Offenbarung für Hartböden mit häufigen Flecken, zu einem deutlich niedrigeren Preis als der Premium-Roboter.",
          "es": "Fregar con agua caliente mientras aspira es una revelación para suelos duros con manchas frecuentes, a un precio muy inferior al del robot de gama alta.",
          "it": "Il lavaggio con acqua calda insieme all'aspirazione è una rivelazione per i pavimenti duri con macchie frequenti, a un prezzo molto inferiore al robot di fascia alta.",
          "nl": "Dweilen met heet water gecombineerd met zuigen is een openbaring voor harde vloeren met veel vlekken, tegen een veel lagere prijs dan de premium robot."
        }
      }
    ]
  },
  "meilleur-aspirateur-laveur-2026": {
    "question": {
      "fr": "Quel est le meilleur aspirateur laveur en 2026 ?",
      "en": "What is the best wet-dry vacuum in 2026?",
      "de": "Welcher ist der beste Nass-Trocken-Sauger 2026?",
      "es": "¿Cuál es la mejor aspiradora friegasuelos en 2026?",
      "it": "Qual è il miglior aspirapolvere lavapavimenti nel 2026?",
      "nl": "Wat is de beste zuig-dweilmachine in 2026?"
    },
    "picks": [
      {
        "model": "Dreame H14",
        "role": {
          "fr": "Choix éditeur",
          "en": "Editor's choice",
          "de": "Empfehlung der Redaktion",
          "es": "Elección del editor",
          "it": "Scelta della redazione",
          "nl": "Keuze van de redactie"
        },
        "why": {
          "fr": "L'eau chaude à 70 °C, le nettoyage zéro-bord, l'inclinaison à 180 degrés et l'autonettoyage avancé en font le modèle le plus complet du marché.",
          "en": "Hot water at 70 degrees, zero-edge cleaning, 180-degree flat tilt and advanced self-cleaning make it the most complete model on the market.",
          "de": "Heißwasser mit 70 Grad, Randreinigung bis null Millimeter, 180-Grad-Neigung und erweiterte Selbstreinigung machen es zum vollständigsten Modell am Markt.",
          "es": "Agua caliente a 70 grados, limpieza hasta el borde, inclinación de 180 grados y autolimpieza avanzada: el modelo más completo del mercado.",
          "it": "L'acqua calda a 70 gradi, la pulizia a zero bordo, l'inclinazione a 180 gradi e l'autopulizia avanzata ne fanno il modello più completo del mercato.",
          "nl": "Heet water van 70 graden, randreiniging tot nul millimeter, 180 graden kantelen en geavanceerde zelfreiniging maken het tot het meest complete model."
        }
      },
      {
        "model": "Tineco Floor One S7 Pro",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Offre l'essentiel des performances du Dreame H14 pour un prix moindre, avec détection de saleté par IA, si l'eau chaude n'est pas une priorité.",
          "en": "Delivers most of the Dreame H14's performance for less, with AI dirt detection, as long as hot water is not a priority for you.",
          "de": "Bietet einen Großteil der Leistung des Dreame H14 zu einem niedrigeren Preis, mit KI-Schmutzerkennung, solange Heißwasser keine Priorität hat.",
          "es": "Ofrece buena parte del rendimiento del Dreame H14 por menos dinero, con detección de suciedad por IA, si el agua caliente no es una prioridad.",
          "it": "Offre gran parte delle prestazioni del Dreame H14 a un prezzo inferiore, con rilevamento dello sporco tramite IA, se l'acqua calda non è una priorità.",
          "nl": "Levert een groot deel van de prestaties van de Dreame H14 voor minder geld, met AI-vuildetectie, als heet water voor jou geen prioriteit is."
        }
      },
      {
        "model": "Roborock Flexi Pro",
        "role": {
          "fr": "Le plus compact et maniable",
          "en": "Most compact and maneuverable",
          "de": "Am handlichsten",
          "es": "El más compacto y manejable",
          "it": "Il più compatto e maneggevole",
          "nl": "Meest compact en wendbaar"
        },
        "why": {
          "fr": "Le plus léger du comparatif, idéal pour les appartements de 60 à 90 m² et pour ceux qui privilégient la maniabilité et la légèreté.",
          "en": "The lightest in the comparison, ideal for apartments of 60 to 90 square meters and for anyone who values maneuverability and low weight.",
          "de": "Das leichteste Modell im Vergleich, ideal für Wohnungen von 60 bis 90 Quadratmetern und alle, die Handlichkeit und geringes Gewicht schätzen.",
          "es": "El más ligero de la comparativa, ideal para pisos de 60 a 90 metros cuadrados y para quienes priorizan la maniobrabilidad y la ligereza.",
          "it": "Il più leggero del confronto, ideale per appartamenti da 60 a 90 metri quadrati e per chi privilegia maneggevolezza e leggerezza.",
          "nl": "De lichtste uit de vergelijking, ideaal voor appartementen van 60 tot 90 vierkante meter en voor wie wendbaarheid en laag gewicht belangrijk vindt."
        }
      },
      {
        "model": "Bissell CrossWave HF3",
        "role": {
          "fr": "Petit budget",
          "en": "Best budget pick",
          "de": "Für kleines Budget",
          "es": "Para presupuesto ajustado",
          "it": "Per budget ridotto",
          "nl": "Voor een klein budget"
        },
        "why": {
          "fr": "Le choix petit budget fiable pour les petites surfaces, avec une aspiration plus faible et un poids plus élevé que les autres modèles.",
          "en": "The reliable low-budget choice for small spaces, with weaker suction and a heavier body than the other models.",
          "de": "Die zuverlässige Budget-Wahl für kleine Flächen, mit schwächerer Saugkraft und höherem Gewicht als die anderen Modelle.",
          "es": "La opción fiable de presupuesto reducido para superficies pequeñas, con menos succión y más peso que los otros modelos.",
          "it": "La scelta affidabile a basso budget per superfici ridotte, con aspirazione più debole e peso maggiore rispetto agli altri modelli.",
          "nl": "De betrouwbare budgetkeuze voor kleine oppervlakken, met zwakkere zuigkracht en een hoger gewicht dan de andere modellen."
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
        "model": "Nuki Smart Lock 4.0",
        "role": {
          "fr": "Choix éditeur",
          "en": "Editor's choice",
          "de": "Empfehlung der Redaktion",
          "es": "Elección del editor",
          "it": "Scelta della redazione",
          "nl": "Keuze van de redactie"
        },
        "why": {
          "fr": "Matter, Thread et Wi-Fi, installation en trois minutes sans perçage, clé physique conservée, gestion d'accès complète et double certification de sécurité.",
          "en": "Matter, Thread and Wi-Fi, three-minute installation without drilling, physical key kept, complete access management and dual security certification.",
          "de": "Matter, Thread und WLAN, Installation in drei Minuten ohne Bohren, mechanischer Schlüssel bleibt nutzbar, umfassende Zugangsverwaltung und doppelte Sicherheitszertifizierung.",
          "es": "Matter, Thread y Wi-Fi, instalación en tres minutos sin taladrar, conserva la llave física, gestión de accesos completa y doble certificación de seguridad.",
          "it": "Matter, Thread e Wi-Fi, installazione in tre minuti senza forare, chiave fisica conservata, gestione completa degli accessi e doppia certificazione di sicurezza.",
          "nl": "Matter, Thread en wifi, installatie in drie minuten zonder boren, fysieke sleutel blijft bruikbaar, uitgebreid toegangsbeheer en dubbele veiligheidscertificering."
        }
      },
      {
        "model": "Yale Linus L2",
        "role": {
          "fr": "Haut de gamme",
          "en": "Premium pick",
          "de": "Premium-Wahl",
          "es": "Gama alta",
          "it": "Fascia alta",
          "nl": "Premiumkeuze"
        },
        "why": {
          "fr": "Alternative premium pour qui valorise la marque, le design et l'écosystème Yale, avec DoorSense intégré, mais plus chère que le Nuki pour des fonctions équivalentes.",
          "en": "A premium alternative for those who value the brand, design and Yale ecosystem, with built-in DoorSense, but pricier than the Nuki for equivalent features.",
          "de": "Premium-Alternative für alle, die Marke, Design und das Yale-Ökosystem schätzen, mit integriertem DoorSense, aber teurer als das Nuki bei vergleichbaren Funktionen.",
          "es": "Alternativa premium para quien valora la marca, el diseño y el ecosistema Yale, con DoorSense integrado, pero más cara que la Nuki con funciones equivalentes.",
          "it": "Alternativa premium per chi apprezza il marchio, il design e l'ecosistema Yale, con DoorSense integrato, ma più costosa della Nuki a parità di funzioni.",
          "nl": "Premium alternatief voor wie merk, design en het Yale-ecosysteem waardeert, met ingebouwde DoorSense, maar duurder dan de Nuki bij vergelijkbare functies."
        }
      },
      {
        "model": "Tedee GO",
        "role": {
          "fr": "Le plus discret",
          "en": "Most discreet",
          "de": "Am unauffälligsten",
          "es": "La más discreta",
          "it": "La più discreta",
          "nl": "Meest discrete"
        },
        "why": {
          "fr": "La plus compacte et silencieuse, parfaite en appartement pour une serrure presque invisible ; l'accès à distance et l'auto-unlock demandent un bridge.",
          "en": "The most compact and quiet, perfect in an apartment for an almost invisible lock; remote access and auto-unlock require a bridge.",
          "de": "Das kompakteste und leiseste Modell, perfekt in der Wohnung für ein nahezu unsichtbares Schloss; Fernzugriff und Auto-Unlock erfordern eine Bridge.",
          "es": "La más compacta y silenciosa, perfecta en un piso para una cerradura casi invisible; el acceso remoto y el auto-unlock requieren un bridge.",
          "it": "La più compatta e silenziosa, perfetta in appartamento per una serratura quasi invisibile; accesso remoto e auto-unlock richiedono un bridge.",
          "nl": "Het meest compact en stil, perfect in een appartement voor een bijna onzichtbaar slot; toegang op afstand en auto-unlock vragen om een bridge."
        }
      },
      {
        "model": "SwitchBot Lock Pro",
        "role": {
          "fr": "Petit budget",
          "en": "Best budget pick",
          "de": "Für kleines Budget",
          "es": "Para presupuesto ajustado",
          "it": "Per budget ridotto",
          "nl": "Voor een klein budget"
        },
        "why": {
          "fr": "Excellent point d'entrée à petit prix pour découvrir les serrures connectées, mais sans Matter, sans HomeKit et sans certification de sécurité.",
          "en": "An excellent low-cost entry point to smart locks, but without Matter, without HomeKit and without security certifications.",
          "de": "Ein günstiger Einstieg in smarte Türschlösser, aber ohne Matter, ohne HomeKit und ohne Sicherheitszertifizierungen.",
          "es": "Un excelente punto de entrada económico a las cerraduras inteligentes, pero sin Matter, sin HomeKit y sin certificaciones de seguridad.",
          "it": "Un ottimo punto di ingresso economico alle serrature smart, ma senza Matter, senza HomeKit e senza certificazioni di sicurezza.",
          "nl": "Een uitstekend goedkoop instapmodel voor slimme sloten, maar zonder Matter, zonder HomeKit en zonder veiligheidscertificeringen."
        }
      }
    ]
  },
  "alarme-maison-sans-abonnement": {
    "question": {
      "fr": "Quelle est la meilleure alarme maison sans abonnement en 2026 ?",
      "en": "What is the best home alarm with no subscription in 2026?",
      "de": "Welche ist die beste Hausalarmanlage ohne Abo 2026?",
      "es": "¿Cuál es la mejor alarma para el hogar sin cuotas en 2026?",
      "it": "Qual è il miglior allarme per la casa senza abbonamento nel 2026?",
      "nl": "Wat is het beste huisalarm zonder abonnement in 2026?"
    },
    "picks": [
      {
        "model": "Ajax StarterKit",
        "role": {
          "fr": "Choix éditeur",
          "en": "Editor's choice",
          "de": "Empfehlung der Redaktion",
          "es": "Elección del editor",
          "it": "Scelta della redazione",
          "nl": "Keuze van de redactie"
        },
        "why": {
          "fr": "Détection duale PIR et micro-ondes, portée de 2 km, sauvegarde cellulaire 4G gratuite et certification Grade 2 : le plus fiable pour maisons et dépendances.",
          "en": "Dual PIR and microwave detection, 2 km range, free 4G cellular backup and Grade 2 certification: the most reliable for houses and outbuildings.",
          "de": "Duale PIR- und Mikrowellenerkennung, 2 km Reichweite, kostenlose 4G-Mobilfunk-Reserve und Grade-2-Zertifizierung: am zuverlässigsten für Häuser und Nebengebäude.",
          "es": "Detección dual PIR y microondas, 2 km de alcance, respaldo celular 4G gratuito y certificación Grado 2: el más fiable para casas y dependencias.",
          "it": "Rilevamento duale PIR e microonde, portata di 2 km, backup cellulare 4G gratuito e certificazione Grado 2: il più affidabile per case e dipendenze.",
          "nl": "Dubbele PIR- en microgolfdetectie, 2 km bereik, gratis 4G-mobiele back-up en Grade 2-certificering: het betrouwbaarst voor huizen en bijgebouwen."
        }
      },
      {
        "model": "Eufy HomeBase S380",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Idéal pour appartements et petites maisons grâce au stockage local, à la compatibilité HomeKit et à l'absence de frais, mais sans sauvegarde cellulaire.",
          "en": "Ideal for apartments and small homes thanks to local storage, HomeKit compatibility and zero fees, though it lacks cellular backup.",
          "de": "Ideal für Wohnungen und kleine Häuser dank lokaler Speicherung, HomeKit-Kompatibilität und ohne Gebühren, allerdings ohne Mobilfunk-Reserve.",
          "es": "Ideal para pisos y casas pequeñas gracias al almacenamiento local, la compatibilidad con HomeKit y la ausencia de cuotas, aunque sin respaldo celular.",
          "it": "Ideale per appartamenti e piccole case grazie all'archiviazione locale, alla compatibilità HomeKit e all'assenza di costi, ma senza backup cellulare.",
          "nl": "Ideaal voor appartementen en kleine huizen dankzij lokale opslag, HomeKit-compatibiliteit en geen kosten, maar zonder mobiele back-up."
        }
      },
      {
        "model": "Somfy Home Alarm Advanced",
        "role": {
          "fr": "Meilleur avec des animaux",
          "en": "Best with pets",
          "de": "Beste mit Haustieren",
          "es": "Mejor con mascotas",
          "it": "Migliore con animali domestici",
          "nl": "Beste met huisdieren"
        },
        "why": {
          "fr": "Les capteurs IntelliTAG détectent les vibrations d'effraction et ignorent les animaux jusqu'à 25 kg, dans un système complet avec caméra, sirène et sauvegarde cellulaire.",
          "en": "IntelliTAG sensors detect break-in vibrations and ignore pets up to 25 kg, in a complete system with camera, siren and cellular backup.",
          "de": "IntelliTAG-Sensoren erkennen Einbruchsvibrationen und ignorieren Tiere bis 25 kg, in einem kompletten System mit Kamera, Sirene und Mobilfunk-Reserve.",
          "es": "Los sensores IntelliTAG detectan las vibraciones de intrusión e ignoran mascotas de hasta 25 kg, en un sistema completo con cámara, sirena y respaldo celular.",
          "it": "I sensori IntelliTAG rilevano le vibrazioni da effrazione e ignorano gli animali fino a 25 kg, in un sistema completo con telecamera, sirena e backup cellulare.",
          "nl": "IntelliTAG-sensoren detecteren inbraaktrillingen en negeren huisdieren tot 25 kg, in een compleet systeem met camera, sirene en mobiele back-up."
        }
      },
      {
        "model": "Ring Alarm 2nd Gen",
        "role": {
          "fr": "Pour l'écosystème Amazon",
          "en": "For Amazon households",
          "de": "Für Amazon-Haushalte",
          "es": "Para el ecosistema Amazon",
          "it": "Per l'ecosistema Amazon",
          "nl": "Voor het Amazon-ecosysteem"
        },
        "why": {
          "fr": "Choix logique pour les foyers 100 % Alexa grâce à son intégration parfaite, mais sans sirène intégrée, avec des fausses alertes liées aux animaux.",
          "en": "The logical choice for all-Alexa households thanks to its perfect integration, but with no built-in siren and false alerts caused by pets.",
          "de": "Die logische Wahl für reine Alexa-Haushalte dank perfekter Integration, aber ohne integrierte Sirene und mit Fehlalarmen durch Haustiere.",
          "es": "La opción lógica para hogares 100 % Alexa gracias a su integración perfecta, pero sin sirena integrada y con falsas alarmas por mascotas.",
          "it": "La scelta logica per le case interamente Alexa grazie alla perfetta integrazione, ma senza sirena integrata e con falsi allarmi causati dagli animali.",
          "nl": "De logische keuze voor huishoudens met alleen Alexa dankzij de perfecte integratie, maar zonder ingebouwde sirene en met valse alarmen door huisdieren."
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
      "nl": "Wat is de beste zonnepaneelset voor het balkon in 2026?"
    },
    "picks": [
      {
        "model": "Priwatt priFlat Duo",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Le kit le plus populaire de l'article : 820 Wc avec micro-onduleur Hoymiles fiable et support de balustrade inclus, idéal pour débuter sans se ruiner.",
          "en": "The most popular kit in the article: 820 Wp with a reliable Hoymiles microinverter and a railing mount included, ideal to start without overspending.",
          "de": "Das beliebteste Set im Artikel: 820 Wp mit zuverlässigem Hoymiles-Mikrowechselrichter und Geländerhalterung inklusive, ideal für den günstigen Einstieg.",
          "es": "El kit más popular del artículo: 820 Wp con un microinversor Hoymiles fiable y soporte para barandilla incluido, ideal para empezar sin gastar de más.",
          "it": "Il kit più popolare dell'articolo: 820 Wp con un affidabile microinverter Hoymiles e supporto per ringhiera incluso, ideale per iniziare senza spendere troppo.",
          "nl": "De populairste set uit het artikel: 820 Wp met een betrouwbare Hoymiles-micro-omvormer en inbegrepen balustradesteun, ideaal om voordelig te beginnen."
        }
      },
      {
        "model": "Anker Solix RS50B",
        "role": {
          "fr": "Meilleur écosystème connecté",
          "en": "Best connected ecosystem",
          "de": "Bestes vernetztes Ökosystem",
          "es": "Mejor ecosistema conectado",
          "it": "Miglior ecosistema connesso",
          "nl": "Beste verbonden ecosysteem"
        },
        "why": {
          "fr": "Application complète, compatibilité avec la batterie Solarbank et rendement de 22,8 % : le choix des amateurs de technologie.",
          "en": "A complete app, compatibility with the Solarbank battery and a 22.8 percent efficiency: the pick for tech enthusiasts.",
          "de": "Umfassende App, Kompatibilität mit dem Solarbank-Speicher und 22,8 Prozent Wirkungsgrad: die Wahl für Technikbegeisterte.",
          "es": "Aplicación completa, compatibilidad con la batería Solarbank y un rendimiento del 22,8 %: la elección de los aficionados a la tecnología.",
          "it": "App completa, compatibilità con la batteria Solarbank e rendimento del 22,8 percento: la scelta degli appassionati di tecnologia.",
          "nl": "Complete app, compatibiliteit met de Solarbank-accu en een rendement van 22,8 procent: de keuze voor techliefhebbers."
        }
      },
      {
        "model": "Anker Solix Solarbank 2 E1600 Pro",
        "role": {
          "fr": "Meilleure batterie de stockage",
          "en": "Best storage battery",
          "de": "Bester Stromspeicher",
          "es": "Mejor batería de almacenamiento",
          "it": "Miglior batteria di accumulo",
          "nl": "Beste opslagaccu"
        },
        "why": {
          "fr": "Batterie de 1,6 kWh avec application intégrée, compatible avec les kits Anker : le premier choix de l'article pour sa simplicité d'installation.",
          "en": "A 1.6 kWh battery with an integrated app, compatible with Anker kits: the article's first choice for its simple installation.",
          "de": "Ein 1,6-kWh-Speicher mit integrierter App, kompatibel mit Anker-Sets: die erste Wahl des Artikels wegen der einfachen Installation.",
          "es": "Batería de 1,6 kWh con aplicación integrada, compatible con los kits Anker: la primera opción del artículo por su sencilla instalación.",
          "it": "Batteria da 1,6 kWh con app integrata, compatibile con i kit Anker: la prima scelta dell'articolo per la semplicità di installazione.",
          "nl": "Een accu van 1,6 kWh met geïntegreerde app, compatibel met Anker-sets: de eerste keuze van het artikel vanwege de eenvoudige installatie."
        }
      },
      {
        "model": "EcoFlow PowerStream 800W",
        "role": {
          "fr": "Stockage intégré",
          "en": "Integrated storage",
          "de": "Integrierter Speicher",
          "es": "Almacenamiento integrado",
          "it": "Accumulo integrato",
          "nl": "Geïntegreerde opslag"
        },
        "why": {
          "fr": "Offre la gestion la plus intelligente de la production, du stockage et de la consommation, pour les passionnés d'autoconsommation maximale.",
          "en": "Offers the smartest management of production, storage and consumption, for enthusiasts of maximum self-consumption.",
          "de": "Bietet das intelligenteste Management von Erzeugung, Speicherung und Verbrauch, für Fans maximaler Eigenverbrauchsquote.",
          "es": "Ofrece la gestión más inteligente de producción, almacenamiento y consumo, para los entusiastas del máximo autoconsumo.",
          "it": "Offre la gestione più intelligente di produzione, accumulo e consumo, per gli appassionati del massimo autoconsumo.",
          "nl": "Biedt het slimste beheer van opwekking, opslag en verbruik, voor liefhebbers van maximaal eigen verbruik."
        }
      }
    ]
  },
  "eclairage-connecte-comparatif": {
    "question": {
      "fr": "Quel est le meilleur éclairage connecté en 2026 ?",
      "en": "What is the best smart lighting system in 2026?",
      "de": "Welches ist die beste smarte Beleuchtung 2026?",
      "es": "¿Cuál es el mejor sistema de iluminación inteligente en 2026?",
      "it": "Qual è il miglior sistema di illuminazione smart nel 2026?",
      "nl": "Wat is de beste slimme verlichting in 2026?"
    },
    "picks": [
      {
        "model": "Philips Hue Bridge",
        "role": {
          "fr": "Haut de gamme",
          "en": "Premium pick",
          "de": "Premium-Wahl",
          "es": "Gama alta",
          "it": "Fascia alta",
          "nl": "Premiumkeuze"
        },
        "why": {
          "fr": "La référence absolue : qualité de lumière supérieure, écosystème le plus riche et Zigbee fiable, pour les automatisations avancées, à un prix plus élevé.",
          "en": "The absolute benchmark: superior light quality, the richest ecosystem and reliable Zigbee, suited to advanced automations, at a higher price.",
          "de": "Der absolute Maßstab: überlegene Lichtqualität, das reichhaltigste Ökosystem und zuverlässiges Zigbee für fortgeschrittene Automatisierungen, zu einem höheren Preis.",
          "es": "La referencia absoluta: calidad de luz superior, el ecosistema más rico y Zigbee fiable, pensado para automatizaciones avanzadas, a un precio más alto.",
          "it": "Il riferimento assoluto: qualità della luce superiore, l'ecosistema più ricco e Zigbee affidabile, adatto ad automazioni avanzate, a un prezzo più alto.",
          "nl": "De absolute maatstaf: superieure lichtkwaliteit, het rijkste ecosysteem en betrouwbare Zigbee, geschikt voor geavanceerde automatiseringen, tegen een hogere prijs."
        }
      },
      {
        "model": "IKEA Dirigera",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Hub fiable compatible Zigbee et Matter avec des ampoules deux à trois fois moins chères que Hue, idéal pour équiper toute la maison à petit budget.",
          "en": "A reliable Zigbee and Matter hub with bulbs two to three times cheaper than Hue, ideal for equipping a whole home on a small budget.",
          "de": "Ein zuverlässiger Hub mit Zigbee und Matter, dessen Lampen zwei- bis dreimal günstiger sind als Hue, ideal, um das ganze Haus günstig auszustatten.",
          "es": "Un hub fiable con Zigbee y Matter y bombillas dos o tres veces más baratas que Hue, ideal para equipar toda la casa con poco presupuesto.",
          "it": "Un hub affidabile con Zigbee e Matter e lampadine da due a tre volte più economiche di Hue, ideale per equipaggiare tutta la casa con poco budget.",
          "nl": "Een betrouwbare hub met Zigbee en Matter en lampen die twee tot drie keer goedkoper zijn dan Hue, ideaal om het hele huis voordelig uit te rusten."
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
        "model": "Meaco Arete One 20L",
        "role": {
          "fr": "Meilleur choix global",
          "en": "Best overall",
          "de": "Beste Gesamtwahl",
          "es": "Mejor opción global",
          "it": "Miglior scelta complessiva",
          "nl": "Beste algemene keuze"
        },
        "why": {
          "fr": "Combine efficacité, silence à 37 dB, WiFi et faible consommation de 255 W : le plus silencieux et économe de sa catégorie.",
          "en": "Combines efficiency, 37 dB quiet operation, WiFi and low 255 W consumption: the quietest and most economical in its category.",
          "de": "Vereint Effizienz, leisen Betrieb mit 37 dB, WLAN und niedrigen Verbrauch von 255 W: der leiseste und sparsamste seiner Klasse.",
          "es": "Combina eficacia, silencio de 37 dB, WiFi y un bajo consumo de 255 W: el más silencioso y económico de su categoría.",
          "it": "Unisce efficacia, silenziosità a 37 dB, WiFi e un basso consumo di 255 W: il più silenzioso ed economico della sua categoria.",
          "nl": "Combineert efficiëntie, stille werking van 37 dB, wifi en een laag verbruik van 255 W: de stilste en zuinigste in zijn categorie."
        }
      },
      {
        "model": "Comfee MDDN-10DEN7",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Offre des performances solides et une application correcte pour environ 100 € de moins que le Meaco, avec une capacité de 16 litres.",
          "en": "Offers solid performance and a decent app for about 100 euros less than the Meaco, with a 16-liter capacity.",
          "de": "Bietet solide Leistung und eine brauchbare App für rund 100 Euro weniger als das Meaco, mit 16 Litern Kapazität.",
          "es": "Ofrece un rendimiento sólido y una aplicación correcta por unos 100 euros menos que el Meaco, con una capacidad de 16 litros.",
          "it": "Offre prestazioni solide e un'app discreta per circa 100 euro in meno rispetto al Meaco, con una capacità di 16 litri.",
          "nl": "Biedt solide prestaties en een degelijke app voor ongeveer 100 euro minder dan de Meaco, met een capaciteit van 16 liter."
        }
      },
      {
        "model": "Midea Cube 20L Smart",
        "role": {
          "fr": "Meilleur design",
          "en": "Best design",
          "de": "Bestes Design",
          "es": "Mejor diseño",
          "it": "Miglior design",
          "nl": "Beste design"
        },
        "why": {
          "fr": "Se distingue par son format cube compact, son grand bac de 6 litres et son application complète.",
          "en": "Stands out with its compact cube format, large 6-liter tank and full-featured app.",
          "de": "Überzeugt mit seinem kompakten Würfeldesign, einem großen 6-Liter-Behälter und einer umfangreichen, vollständigen App.",
          "es": "Destaca por su formato de cubo compacto, su gran depósito de 6 litros y su aplicación completa.",
          "it": "Si distingue per il formato a cubo compatto, il grande serbatoio da 6 litri e l'app completa.",
          "nl": "Valt op door het compacte kubusformaat, het grote reservoir van 6 liter en de uitgebreide app."
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
        "model": "Ecowitt HP2560",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Tout est inclus (pluie, vent, UV), extensible jusqu'à 8 capteurs supplémentaires et intégrée en local à Home Assistant, pour un prix modéré.",
          "en": "Everything is included (rain, wind, UV), expandable with up to 8 extra sensors and locally integrated with Home Assistant, at a moderate price.",
          "de": "Alles inklusive (Regen, Wind, UV), mit bis zu 8 zusätzlichen Sensoren erweiterbar und lokal in Home Assistant integriert, zu einem moderaten Preis.",
          "es": "Todo incluido (lluvia, viento, UV), ampliable con hasta 8 sensores adicionales e integrada en local con Home Assistant, a un precio moderado.",
          "it": "Tutto incluso (pioggia, vento, UV), espandibile con fino a 8 sensori aggiuntivi e integrata in locale con Home Assistant, a un prezzo moderato.",
          "nl": "Alles inbegrepen (regen, wind, UV), uitbreidbaar met maximaal 8 extra sensoren en lokaal geïntegreerd met Home Assistant, voor een gematigde prijs."
        }
      },
      {
        "model": "Netatmo Smart Weather Station",
        "role": {
          "fr": "Design et qualité de l'air",
          "en": "Design and indoor air quality",
          "de": "Design und Raumluftqualität",
          "es": "Diseño y calidad del aire",
          "it": "Design e qualità dell'aria",
          "nl": "Design en luchtkwaliteit"
        },
        "why": {
          "fr": "Capteur de CO2 unique, compatibilité HomeKit native et l'application la plus aboutie du marché, mais pluviomètre et anémomètre sont en option payante.",
          "en": "A unique CO2 sensor, native HomeKit support and the best app on the market, but the rain gauge and anemometer are paid options.",
          "de": "Einzigartiger CO2-Sensor, native HomeKit-Unterstützung und die beste App am Markt, aber Regenmesser und Windmesser sind kostenpflichtige Optionen.",
          "es": "Sensor de CO2 único, compatibilidad nativa con HomeKit y la mejor aplicación del mercado, pero el pluviómetro y el anemómetro son opcionales de pago.",
          "it": "Sensore di CO2 unico, compatibilità HomeKit nativa e la migliore app del mercato, ma pluviometro e anemometro sono opzioni a pagamento.",
          "nl": "Unieke CO2-sensor, native HomeKit-ondersteuning en de beste app op de markt, maar regenmeter en windmeter zijn betaalde opties."
        }
      },
      {
        "model": "Davis Vantage Vue",
        "role": {
          "fr": "Précision professionnelle",
          "en": "Professional precision",
          "de": "Professionelle Präzision",
          "es": "Precisión profesional",
          "it": "Precisione professionale",
          "nl": "Professionele precisie"
        },
        "why": {
          "fr": "Référence professionnelle avec une précision de ±0,3 °C, une robustesse IP65 et une portée radio de 300 m, pour fermes et passionnés exigeants.",
          "en": "A professional reference with ±0.3 °C accuracy, IP65 robustness and a 300 m radio range, for farms and demanding enthusiasts.",
          "de": "Eine professionelle Referenz mit ±0,3 °C Genauigkeit, IP65-Robustheit und 300 m Funkreichweite, für Bauernhöfe und anspruchsvolle Enthusiasten.",
          "es": "Referencia profesional con una precisión de ±0,3 °C, robustez IP65 y 300 m de alcance de radio, para granjas y aficionados exigentes.",
          "it": "Riferimento professionale con precisione di ±0,3 °C, robustezza IP65 e portata radio di 300 m, per fattorie e appassionati esigenti.",
          "nl": "Professionele referentie met ±0,3 °C nauwkeurigheid, IP65-robuustheid en 300 m radiobereik, voor boerderijen en veeleisende liefhebbers."
        }
      },
      {
        "model": "Bresser 7-in-1 WiFi",
        "role": {
          "fr": "Petit budget",
          "en": "Best budget pick",
          "de": "Für kleines Budget",
          "es": "Para presupuesto ajustado",
          "it": "Per budget ridotto",
          "nl": "Voor een klein budget"
        },
        "why": {
          "fr": "Le kit complet le moins cher avec pluie et vent, mais avec une intégration domotique plus limitée que Netatmo ou Ecowitt.",
          "en": "The cheapest complete kit with rain and wind sensing, though with more limited smart home integration than Netatmo or Ecowitt.",
          "de": "Das günstigste Komplettset mit Regen- und Windmessung, allerdings mit eingeschränkterer Smart-Home-Integration als Netatmo oder Ecowitt.",
          "es": "El kit completo más barato con lluvia y viento, aunque con una integración domótica más limitada que Netatmo o Ecowitt.",
          "it": "Il kit completo più economico con pioggia e vento, anche se con un'integrazione domotica più limitata rispetto a Netatmo o Ecowitt.",
          "nl": "De goedkoopste complete set met regen en wind, al is de domoticaintegratie beperkter dan bij Netatmo of Ecowitt."
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
      "nl": "Wat is de beste slimme zonne-energieverlichting voor buiten in 2026?"
    },
    "picks": [
      {
        "model": "LITOM 120 LED Solaire",
        "role": {
          "fr": "Sécurité solaire sans câblage",
          "en": "Solar security, no wiring",
          "de": "Solar-Sicherheit ohne Verkabelung",
          "es": "Seguridad solar sin cableado",
          "it": "Sicurezza solare senza cavi",
          "nl": "Zonnebeveiliging zonder bedrading"
        },
        "why": {
          "fr": "Projecteur solaire à détecteur de mouvement 270°, d'environ 1 000 lumens et IP67, au prix imbattable pour dissuader les intrus sans aucun câblage.",
          "en": "A solar floodlight with 270-degree motion detection, about 1,000 lumens and IP67, at an unbeatable price to deter intruders with no wiring.",
          "de": "Ein Solarstrahler mit 270-Grad-Bewegungsmelder, rund 1.000 Lumen und IP67, zu unschlagbarem Preis, um Eindringlinge ganz ohne Verkabelung abzuschrecken.",
          "es": "Foco solar con detector de movimiento de 270 grados, unos 1.000 lúmenes e IP67, a un precio imbatible para disuadir intrusos sin ningún cableado.",
          "it": "Faro solare con rilevatore di movimento a 270 gradi, circa 1.000 lumen e IP67, a un prezzo imbattibile per scoraggiare i ladri senza alcun cablaggio.",
          "nl": "Een zonneschijnwerper met 270 graden bewegingsdetectie, circa 1.000 lumen en IP67, tegen een ongeëvenaarde prijs om indringers zonder bedrading af te schrikken."
        }
      },
      {
        "model": "Ring Solar Floodlight",
        "role": {
          "fr": "Sécurité connectée",
          "en": "Connected security",
          "de": "Vernetzte Sicherheit",
          "es": "Seguridad conectada",
          "it": "Sicurezza connessa",
          "nl": "Verbonden beveiliging"
        },
        "why": {
          "fr": "Projecteur solaire connecté en WiFi avec notifications et compatibilité Alexa, pour associer éclairage de sécurité et alertes sur smartphone.",
          "en": "A WiFi-connected solar floodlight with notifications and Alexa support, combining security lighting with smartphone alerts.",
          "de": "Ein WLAN-fähiger Solarstrahler mit Benachrichtigungen und Alexa-Unterstützung, der Sicherheitsbeleuchtung mit Smartphone-Warnungen verbindet.",
          "es": "Foco solar conectado por WiFi con notificaciones y compatibilidad con Alexa, que une iluminación de seguridad y alertas en el móvil.",
          "it": "Faro solare connesso via WiFi con notifiche e compatibilità Alexa, che unisce illuminazione di sicurezza e avvisi sullo smartphone.",
          "nl": "Een zonneschijnwerper met wifi, meldingen en Alexa-ondersteuning die beveiligingsverlichting combineert met waarschuwingen op je smartphone."
        }
      },
      {
        "model": "Govee RGBIC Outdoor Strip 10m",
        "role": {
          "fr": "Ambiance festive petit prix",
          "en": "Festive ambience on a budget",
          "de": "Festliche Stimmung günstig",
          "es": "Ambiente festivo económico",
          "it": "Atmosfera festosa low cost",
          "nl": "Feestsfeer voor weinig geld"
        },
        "why": {
          "fr": "Bandeau LED extérieur de 10 m aux effets spectaculaires, piloté par application et classé IP65, pour animer terrasses et pergolas à prix modéré.",
          "en": "A 10 m outdoor LED strip with spectacular effects, app control and an IP65 rating, to liven up terraces and pergolas at a moderate price.",
          "de": "Ein 10 m langer Outdoor-LED-Streifen mit spektakulären Effekten, App-Steuerung und IP65, der Terrassen und Pergolen zu moderatem Preis in Szene setzt.",
          "es": "Tira LED exterior de 10 m con efectos espectaculares, control por app y clasificación IP65, para animar terrazas y pérgolas a un precio moderado.",
          "it": "Striscia LED da esterno da 10 m con effetti spettacolari, controllo da app e grado IP65, per animare terrazze e pergolati a un prezzo contenuto.",
          "nl": "Een ledstrip van 10 m voor buiten met spectaculaire effecten, appbediening en IP65, om terrassen en pergola's voor een gematigde prijs op te fleuren."
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
        "model": "Etekcity Smart Nutrition Scale ESN00",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value and nutrition tracking",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Précision de 0,1 g, base de 900 000 aliments, scan de code-barres et mode repas : l'outil idéal pour compter les calories et suivre ses macros.",
          "en": "0.1 g precision, a database of 900,000 foods, barcode scanning and a meal mode: the ideal tool for counting calories and tracking macros.",
          "de": "0,1 g Genauigkeit, eine Datenbank mit 900.000 Lebensmitteln, Barcode-Scan und Mahlzeitenmodus: das ideale Werkzeug zum Kalorienzählen und Makro-Tracking.",
          "es": "Precisión de 0,1 g, base de datos de 900.000 alimentos, escaneo de códigos de barras y modo comida: la herramienta ideal para contar calorías y seguir macros.",
          "it": "Precisione di 0,1 g, database di 900.000 alimenti, scansione del codice a barre e modalità pasto: lo strumento ideale per contare le calorie e seguire i macro.",
          "nl": "Nauwkeurigheid van 0,1 g, een database van 900.000 voedingsmiddelen, barcodescan en maaltijdmodus: het ideale hulpmiddel om calorieën en macro's te volgen."
        }
      },
      {
        "model": "Renpho ES-CS20M Balance Cuisine Connectée",
        "role": {
          "fr": "Rechargeable abordable",
          "en": "Affordable rechargeable",
          "de": "Günstig und wiederaufladbar",
          "es": "Recargable y asequible",
          "it": "Ricaricabile economica",
          "nl": "Betaalbaar en oplaadbaar"
        },
        "why": {
          "fr": "Balance rechargeable à petit prix avec mode café, évidente si vous êtes déjà dans l'écosystème Renpho pour centraliser vos données de santé.",
          "en": "A low-cost rechargeable scale with a coffee mode, an obvious pick if you already use the Renpho ecosystem to centralize your health data.",
          "de": "Eine günstige, wiederaufladbare Waage mit Kaffeemodus, naheliegend, wenn du bereits das Renpho-Ökosystem nutzt, um deine Gesundheitsdaten zu bündeln.",
          "es": "Báscula recargable de bajo coste con modo café, una elección evidente si ya usas el ecosistema Renpho para centralizar tus datos de salud.",
          "it": "Bilancia ricaricabile a basso costo con modalità caffè, scelta ovvia se usi già l'ecosistema Renpho per centralizzare i tuoi dati sulla salute.",
          "nl": "Een goedkope oplaadbare weegschaal met koffiemodus, een logische keuze als je al het Renpho-ecosysteem gebruikt om je gezondheidsgegevens te bundelen."
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
          "fr": "Numéro 1 de l'article : seul modèle dont le mode FlexZone offre assez de capacité pour une famille de 6 personnes ou plus en une seule fournée.",
          "en": "The article's number one: the only model whose FlexZone mode offers enough capacity for a family of six or more in a single batch.",
          "de": "Platz eins im Artikel: das einzige Modell, dessen FlexZone-Modus genug Kapazität für eine Familie ab sechs Personen in einem Durchgang bietet.",
          "es": "El número uno del artículo: el único modelo cuyo modo FlexZone ofrece capacidad suficiente para una familia de seis o más en una sola tanda.",
          "it": "Il numero uno dell'articolo: l'unico modello la cui modalità FlexZone offre capacità sufficiente per una famiglia da sei persone o più in un'unica infornata.",
          "nl": "Nummer één van het artikel: het enige model waarvan de FlexZone-modus genoeg capaciteit biedt voor een gezin van zes of meer in één keer."
        }
      },
      {
        "model": "Philips Airfryer Combi XXL Connecté - 8.3L",
        "role": {
          "fr": "Meilleure qualité de cuisson",
          "en": "Best cooking quality",
          "de": "Beste Garqualität",
          "es": "Mejor calidad de cocción",
          "it": "Migliore qualità di cottura",
          "nl": "Beste kookkwaliteit"
        },
        "why": {
          "fr": "Offre la meilleure qualité de cuisson du comparatif grâce à la fonction Combi, avec WiFi et application HomeID, mais à un prix nettement plus élevé.",
          "en": "Delivers the best cooking quality in the comparison thanks to the Combi function, with WiFi and the HomeID app, but at a clearly higher price.",
          "de": "Bietet dank der Combi-Funktion die beste Garqualität im Vergleich, mit WLAN und HomeID-App, aber zu einem deutlich höheren Preis.",
          "es": "Ofrece la mejor calidad de cocción de la comparativa gracias a la función Combi, con WiFi y la app HomeID, pero a un precio claramente más alto.",
          "it": "Offre la migliore qualità di cottura del confronto grazie alla funzione Combi, con WiFi e app HomeID, ma a un prezzo nettamente più alto.",
          "nl": "Levert dankzij de Combi-functie de beste kookkwaliteit van de vergelijking, met wifi en de HomeID-app, maar tegen een duidelijk hogere prijs."
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
          "fr": "Coup de cœur",
          "en": "Editor's pick",
          "de": "Redaktionsempfehlung",
          "es": "Nuestra favorita",
          "it": "Scelta della redazione",
          "nl": "Redactiekeuze"
        },
        "why": {
          "fr": "Son concept de panier fusionnable offre la plus grande capacité du marché, avec deux zones indépendantes ou un seul grand espace de cuisson.",
          "en": "Its merge-able basket concept offers the largest capacity on the market, with either two independent zones or one single large cooking space.",
          "de": "Das verschmelzbare Korbkonzept bietet das größte Fassungsvermögen am Markt, entweder als zwei unabhängige Zonen oder als ein einziger großer Garraum.",
          "es": "Su concepto de cestas fusionables ofrece la mayor capacidad del mercado, con dos zonas independientes o un único espacio de cocción grande.",
          "it": "Il suo concetto di cestelli unificabili offre la maggiore capacità sul mercato, con due zone indipendenti oppure un unico grande spazio di cottura.",
          "nl": "Het samenvoegbare mandconcept biedt de grootste capaciteit van de markt, met twee onafhankelijke zones of één grote kookruimte."
        }
      },
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Idéal pour les familles de 3 à 5 personnes",
          "en": "Best for families of 3 to 5",
          "de": "Ideal für Familien mit 3 bis 5 Personen",
          "es": "Ideal para familias de 3 a 5 personas",
          "it": "Ideale per famiglie di 3-5 persone",
          "nl": "Ideaal voor gezinnen van 3 tot 5 personen"
        },
        "why": {
          "fr": "Son double panier Dual Zone permet de cuire deux plats en même temps, ce qui change la vie au quotidien d'une famille de trois à cinq personnes.",
          "en": "Its Dual Zone double basket cooks two dishes at the same time, which makes daily life easier for a family of three to five people.",
          "de": "Der Dual-Zone-Doppelkorb gart zwei Gerichte gleichzeitig und erleichtert damit den Alltag einer Familie mit drei bis fünf Personen deutlich.",
          "es": "Su doble cesta Dual Zone cocina dos platos a la vez, lo que cambia el día a día de una familia de tres a cinco personas.",
          "it": "Il doppio cestello Dual Zone cuoce due piatti contemporaneamente, cambiando la vita quotidiana di una famiglia di tre-cinque persone.",
          "nl": "De Dual Zone-dubbele mand bereidt twee gerechten tegelijk, wat het dagelijks leven van een gezin van drie tot vijf personen verandert."
        }
      },
      {
        "model": "Philips Airfryer Combi XXL Connecté - 8.3L",
        "role": {
          "fr": "Pour les passionnés de technologie",
          "en": "Best for tech enthusiasts",
          "de": "Für Technikbegeisterte",
          "es": "Para los amantes de la tecnología",
          "it": "Per gli appassionati di tecnologia",
          "nl": "Voor techliefhebbers"
        },
        "why": {
          "fr": "Sa combinaison unique d'air chaud et de micro-ondes et son application HomeID séduisent les amateurs de technologie, mais il coûte plus cher que le Ninja FlexDrawer.",
          "en": "Its unique hot air plus microwave combination and HomeID app appeal to tech lovers, though it costs more than the Ninja FlexDrawer.",
          "de": "Die einzigartige Kombination aus Heißluft und Mikrowelle sowie die HomeID-App überzeugen Technikfans, kosten aber mehr als beim Ninja FlexDrawer.",
          "es": "Su combinación única de aire caliente y microondas y su app HomeID atraen a los amantes de la tecnología, aunque cuesta más que el Ninja FlexDrawer.",
          "it": "La combinazione unica di aria calda e microonde e l'app HomeID conquistano gli appassionati di tecnologia, ma costa più del Ninja FlexDrawer.",
          "nl": "De unieke combinatie van hete lucht en magnetron en de HomeID-app spreken techliefhebbers aan, maar hij is duurder dan de Ninja FlexDrawer."
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
          "fr": "Son application HomeID est la meilleure du marché, avec plus de 500 recettes guidées, une connexion stable et la fonction Combi unique d'air chaud et micro-ondes.",
          "en": "Its HomeID app is the best on the market, with over 500 guided recipes, a stable connection and the unique Combi function of hot air plus microwave.",
          "de": "Die HomeID-App ist die beste am Markt, mit über 500 geführten Rezepten, stabiler Verbindung und der einzigartigen Combi-Funktion aus Heißluft und Mikrowelle.",
          "es": "Su app HomeID es la mejor del mercado, con más de 500 recetas guiadas, conexión estable y la función Combi única de aire caliente y microondas.",
          "it": "La sua app HomeID è la migliore sul mercato, con oltre 500 ricette guidate, connessione stabile e l'esclusiva funzione Combi di aria calda e microonde.",
          "nl": "De HomeID-app is de beste van de markt, met meer dan 500 begeleide recepten, een stabiele verbinding en de unieke Combi-functie van hete lucht en magnetron."
        }
      },
      {
        "model": "Ninja Foodi FlexDrawer 10.4L Double Zone",
        "role": {
          "fr": "Meilleur choix pour les familles",
          "en": "Best for families",
          "de": "Beste Wahl für Familien",
          "es": "Mejor opción para familias",
          "it": "Migliore per le famiglie",
          "nl": "Beste keuze voor gezinnen"
        },
        "why": {
          "fr": "Il associe double panier fusionnable et WiFi, avec gestion indépendante des deux zones depuis l'application, la combinaison idéale de capacité et de connectivité pour les repas familiaux.",
          "en": "It pairs a merge-able double basket with WiFi and independent control of both zones from the app, an ideal mix of capacity and connectivity for family meals.",
          "de": "Er verbindet verschmelzbare Doppelkörbe mit WLAN und steuert beide Zonen unabhängig per App, eine ideale Mischung aus Kapazität und Vernetzung für Familienmahlzeiten.",
          "es": "Combina cesta doble fusionable con WiFi y control independiente de las dos zonas desde la app, una mezcla ideal de capacidad y conectividad para comidas familiares.",
          "it": "Unisce doppio cestello unificabile e WiFi, con gestione indipendente delle due zone dall'app: un mix ideale di capacità e connettività per i pasti in famiglia.",
          "nl": "Hij combineert een samenvoegbare dubbele mand met wifi en onafhankelijke bediening van beide zones via de app, ideaal qua capaciteit en connectiviteit voor gezinsmaaltijden."
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
          "fr": "Il passe en quelques secondes d'une méga-zone de 10,4 litres à deux zones indépendantes et cuit un poulet entier, idéal pour cinq personnes et plus.",
          "en": "It switches in seconds from one 10.4-litre mega zone to two independent zones and can cook a whole chicken, ideal for five people or more.",
          "de": "Er wechselt in Sekunden von einer 10,4-Liter-Megazone auf zwei unabhängige Zonen und gart ein ganzes Hähnchen, ideal für fünf Personen und mehr.",
          "es": "Pasa en segundos de una megazona de 10,4 litros a dos zonas independientes y cocina un pollo entero, ideal para cinco personas o más.",
          "it": "Passa in pochi secondi da un'unica megazona da 10,4 litri a due zone indipendenti e cuoce un pollo intero, ideale per cinque persone o più.",
          "nl": "Hij schakelt in seconden van één megazone van 10,4 liter naar twee onafhankelijke zones en bereidt een hele kip, ideaal voor vijf personen of meer."
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
          "fr": "Son format empilé occupe peu de place au sol et convient aux foyers de quatre à six personnes qui cuisinent deux plats simultanément.",
          "en": "Its stacked format takes little counter footprint and suits households of four to six people who cook two dishes at once.",
          "de": "Das gestapelte Format braucht wenig Stellfläche und passt zu Haushalten mit vier bis sechs Personen, die zwei Gerichte gleichzeitig zubereiten.",
          "es": "Su formato apilado ocupa poco espacio en la encimera y se adapta a hogares de cuatro a seis personas que cocinan dos platos a la vez.",
          "it": "Il formato impilato occupa poco spazio sul piano e si adatta a famiglie di quattro-sei persone che cucinano due piatti contemporaneamente.",
          "nl": "Het gestapelde formaat neemt weinig werkblad in beslag en past bij huishoudens van vier tot zes personen die twee gerechten tegelijk bereiden."
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
          "nl": "Beste voor kooknauwkeurigheid"
        },
        "why": {
          "fr": "Sa sonde de température intégrée, son écran couleur et l'application HomeID garantissent une cuisson précise des viandes, ce qui justifie son prix pour les cuisiniers exigeants.",
          "en": "Its built-in temperature probe, colour screen and HomeID app give precise meat cooking, which justifies its price for demanding home cooks.",
          "de": "Die integrierte Temperatursonde, der Farbbildschirm und die HomeID-App sorgen für präzises Fleischgaren und rechtfertigen den Preis für anspruchsvolle Köche.",
          "es": "Su sonda de temperatura integrada, su pantalla en color y la app HomeID garantizan una cocción precisa de las carnes, lo que justifica su precio para cocineros exigentes.",
          "it": "La sonda di temperatura integrata, lo schermo a colori e l'app HomeID garantiscono cotture precise della carne, giustificando il prezzo per i cuochi esigenti.",
          "nl": "De ingebouwde temperatuursonde, het kleurenscherm en de HomeID-app zorgen voor nauwkeurig vlees bereiden, wat de prijs rechtvaardigt voor veeleisende kokers."
        }
      },
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Meilleur rapport qualité-prix",
          "en": "Best value",
          "de": "Bestes Preis-Leistungs-Verhältnis",
          "es": "Mejor relación calidad-precio",
          "it": "Miglior rapporto qualità-prezzo",
          "nl": "Beste prijs-kwaliteitverhouding"
        },
        "why": {
          "fr": "Il coûte moins cher que le Philips, obtient un meilleur score dans le test et cuit deux plats en même temps, un choix plus pratique pour les familles.",
          "en": "It costs less than the Philips, scores higher in the test and cooks two dishes at once, making it the more practical choice for families.",
          "de": "Er kostet weniger als der Philips, erzielt im Test eine bessere Bewertung und gart zwei Gerichte gleichzeitig, die praktischere Wahl für Familien.",
          "es": "Cuesta menos que el Philips, obtiene mejor puntuación en la prueba y cocina dos platos a la vez, una opción más práctica para las familias.",
          "it": "Costa meno del Philips, ottiene un punteggio migliore nel test e cuoce due piatti insieme, una scelta più pratica per le famiglie.",
          "nl": "Hij is goedkoper dan de Philips, scoort hoger in de test en bereidt twee gerechten tegelijk, een praktischere keuze voor gezinnen."
        }
      }
    ]
  },
  "airfryer-simple-vs-double-panier": {
    "question": {
      "fr": "Quel est le meilleur airfryer double panier en 2026 ?",
      "en": "What is the best double-basket air fryer in 2026?",
      "de": "Was ist die beste Doppelkorb-Heißluftfritteuse 2026?",
      "es": "¿Cuál es la mejor freidora de aire de doble cesta en 2026?",
      "it": "Qual è la migliore friggitrice ad aria a doppio cestello nel 2026?",
      "nl": "Wat is de beste airfryer met dubbele mand in 2026?"
    },
    "picks": [
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
          "fr": "Sa capacité de 10,4 litres et ses paniers fusionnables conviennent aux foyers de cinq personnes et plus qui cuisinent un poulet entier ou de grandes quantités.",
          "en": "Its 10.4-litre capacity and merge-able baskets suit households of five or more who cook a whole chicken or large quantities.",
          "de": "Mit 10,4 Litern Fassungsvermögen und verschmelzbaren Körben passt er zu Haushalten ab fünf Personen, die ein ganzes Hähnchen oder große Mengen zubereiten.",
          "es": "Su capacidad de 10,4 litros y sus cestas fusionables sirven a hogares de cinco o más personas que cocinan un pollo entero o grandes cantidades.",
          "it": "La capacità di 10,4 litri e i cestelli unificabili sono adatti a famiglie di cinque o più persone che cuociono un pollo intero o grandi quantità.",
          "nl": "De capaciteit van 10,4 liter en de samenvoegbare manden passen bij huishoudens van vijf of meer die een hele kip of grote hoeveelheden bereiden."
        }
      },
      {
        "model": "Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L",
        "role": {
          "fr": "Idéal pour les familles de 3 à 4 personnes",
          "en": "Best for families of 3 to 4",
          "de": "Ideal für Familien mit 3 bis 4 Personen",
          "es": "Ideal para familias de 3 a 4 personas",
          "it": "Ideale per famiglie di 3-4 persone",
          "nl": "Ideaal voor gezinnen van 3 tot 4 personen"
        },
        "why": {
          "fr": "Son double panier fait gagner un temps considérable au quotidien en cuisant deux plats simultanément, ce qu'un airfryer simple panier ne permet pas.",
          "en": "Its double basket saves a lot of time every day by cooking two dishes simultaneously, something a single-basket air fryer cannot do.",
          "de": "Der Doppelkorb spart im Alltag viel Zeit, weil zwei Gerichte gleichzeitig garen, was eine Einzelkorb-Heißluftfritteuse nicht kann.",
          "es": "Su doble cesta ahorra mucho tiempo a diario al cocinar dos platos simultáneamente, algo que una freidora de una sola cesta no permite.",
          "it": "Il doppio cestello fa risparmiare molto tempo ogni giorno cuocendo due piatti contemporaneamente, cosa impossibile con una friggitrice a cestello singolo.",
          "nl": "De dubbele mand bespaart dagelijks veel tijd door twee gerechten tegelijk te bereiden, iets wat een airfryer met één mand niet kan."
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
