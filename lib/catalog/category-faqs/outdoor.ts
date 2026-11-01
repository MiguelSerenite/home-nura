import type { CategoryFaqSets } from './types'

export const OUTDOOR_FAQS: CategoryFaqSets = {
  "tondeuses-robots": {
    fr: [
      {
        question: "Tondeuse robot sans fil périphérique : RTK, vision ou fil, que choisir ?",
        answer: "Sur une pelouse dégagée, le RTK sans fil est le plus pratique ; sous les arbres ou contre la maison, préférez la vision ou un modèle qui combine RTK et caméra. Le RTK se repère par satellite grâce à une antenne fixe et perd en précision quand le ciel est masqué. La vision suit les bordures mais hésite si la limite avec un massif est floue. Le fil périphérique reste le plus fiable en jardin très arboré, au prix d'une pose plus longue et de coupures à réparer.",
      },
      {
        question: "Quelle surface choisir pour une tondeuse robot ?",
        answer: "Prenez un modèle annoncé pour 20 à 30 % de plus que votre pelouse réelle, soit environ 1 200 à 1 300 m² pour 1 000 m² tondus. La surface du fabricant suppose un terrain plat et d'un seul tenant : pentes, passages étroits et zones séparées allongent le travail. Vérifiez aussi la pente maximale, exprimée en pourcentage (45° correspondent à 100 %), et la largeur minimale de passage acceptée par le robot.",
      },
      {
        question: "Peut-on laisser une tondeuse robot tourner la nuit ?",
        answer: "Non, programmez-la en journée : les hérissons sont actifs la nuit, ne fuient pas devant la machine et peuvent être gravement blessés. En journée, éloignez aussi les jeunes enfants et les animaux pendant la tonte, même si les lames s'arrêtent dès que le robot est soulevé. Pour le bruit, les horaires des engins de jardin sont fixés par arrêté municipal ou préfectoral : renseignez-vous en mairie avant de programmer une tonte le dimanche.",
      },
      {
        question: "Comment protéger une tondeuse robot contre le vol ?",
        answer: "Activez le code PIN et l'alarme de soulèvement, puis ajoutez si possible un suivi GPS. Verrouillé par code et lié à votre compte, le robot devient inutilisable pour un voleur, ce qui le rend moins tentant. Le suivi par réseau mobile (4G) est parfois inclus quelques années, puis payant : vérifiez avant l'achat. Relisez aussi votre contrat multirisque habitation, car certains excluent ou plafonnent les équipements laissés dans le jardin.",
      },
      {
        question: "Quel entretien et quel coût d'usage pour une tondeuse robot ?",
        answer: "Comptez un nettoyage par semaine, des lames changées plusieurs fois par saison et une consommation électrique faible. Brossez l'herbe collée sous le carter, sans jet haute pression, et remplacez les petites lames pivotantes dès qu'elles arrachent l'herbe au lieu de la couper. Pour l'électricité, lisez les kWh par mois indiqués par le fabricant : 6 kWh × 7 mois × 0,25 € ≈ 10 € par saison. L'hiver, rangez le robot hors gel, batterie chargée.",
      },
    ],
    en: [
      {
        question: "What size robot mower do I need for my lawn?",
        answer: "Choose a mower rated for about 20 to 30% more than your actual lawn area, because the rated figure assumes a flat, simple, single-zone garden. Slopes, narrow side passages and separate front and back lawns all add mowing time. Check the maximum slope, given as a percentage (45° equals 100%), and whether the mower can handle more than one zone. For a small lawn, an entry-level model is usually enough; a higher rating mostly just means it finishes sooner.",
      },
      {
        question: "Wire-free robot mower or boundary wire: which is better?",
        answer: "Wire-free is easier to set up and change, but boundary wire is still the most dependable option in small, enclosed gardens with tall fences and trees. RTK models navigate by satellite and need a clear view of the sky, which high fences, hedges and neighbouring houses can block. Vision models follow lawn edges with a camera and struggle when the border is unclear or the light is poor. Many newer mowers combine RTK and a camera to cover each other’s weak spots.",
      },
      {
        question: "Are robot mowers safe for hedgehogs?",
        answer: "Only if you run them in daylight: hedgehogs forage at night, curl up instead of running away and can be badly injured by mower blades. Set the schedule to daytime hours, never dusk to dawn, and walk the lawn before the first run of the day if you have a wild corner or log pile. Lift sensors stop the blades for children and pets, but it’s still best to keep them off the lawn while the mower is running.",
      },
      {
        question: "How do I stop my robot mower being stolen?",
        answer: "Turn on the PIN lock and lift alarm, and choose a model with GPS tracking if theft is a worry where you live. A PIN-locked mower tied to your app account is useless to a thief, which makes it a poor target. Mobile-data tracking is sometimes free for a few years, then needs a subscription. Record the serial number on a property register such as Immobilise, and check that your home insurance covers garden equipment, as some policies limit it.",
      },
      {
        question: "How much does a robot mower cost to run?",
        answer: "Electricity is a small cost: a mower using 6 kWh a month for seven months costs about £10.50 a season at 25p per kWh. Check the monthly figure on the spec sheet and multiply by your own unit rate. The bigger running costs are replacement blades, which are cheap but need changing several times a season, and eventually a new battery. Store the mower in a dry, frost-free shed or garage over winter, fully charged, to protect the battery.",
      },
    ],
    de: [
      {
        question: "Welcher Mähroboter für 800 m²?",
        answer: "Für 800 m² sollten Sie einen Mähroboter wählen, der für mindestens rund 1.000 m² angegeben ist. Die Herstellerangabe gilt für eine ebene, zusammenhängende Fläche; Hanglagen, schmale Durchgänge und getrennte Rasenstücke verlängern die Mähzeit deutlich. Achten Sie außerdem auf die maximale Steigung in Prozent (45° entsprechen 100 %) und darauf, ob mehrere Mähzonen ohne Umsetzen möglich sind. Wer nur an wenigen Tagen pro Woche mähen lassen will, plant noch mehr Reserve ein.",
      },
      {
        question: "Mähroboter ohne Begrenzungskabel: RTK oder Kamera?",
        answer: "RTK eignet sich für offene Gärten, die Kamera für Grundstücke mit Bäumen und Hauswänden, am robustesten sind Geräte, die beides kombinieren. RTK-Modelle orten sich per Satellit mit einer Referenzantenne und verlieren unter dichten Baumkronen oder nahe hoher Gebäude an Genauigkeit. Kamerabasierte Modelle erkennen Rasenkanten, tun sich aber bei unklaren Übergängen zum Beet und in der Dämmerung schwer. Das Begrenzungskabel bleibt am zuverlässigsten, kostet aber Zeit bei der Verlegung und wird bei Gartenarbeiten leicht durchtrennt.",
      },
      {
        question: "Wann darf ein Mähroboter laufen – auch sonntags oder nachts?",
        answer: "In deutschen Wohngebieten gilt für Rasenmäher, nach verbreiteter Auslegung auch für Mähroboter: kein Betrieb an Sonn- und Feiertagen sowie werktags zwischen 20 und 7 Uhr. Grundlage ist die Geräte- und Maschinenlärmschutzverordnung (32. BImSchV); Gemeinden können strengere Ruhezeiten festlegen. Zum Schutz von Igeln untersagen Köln und weitere Städte per Allgemeinverfügung zudem den Betrieb in der Dämmerung und nachts. In Österreich und der Schweiz regeln Länder, Kantone und Gemeinden die Ruhezeiten.",
      },
      {
        question: "Brauche ich für Mähroboter-App und Diebstahlschutz ein Abo?",
        answer: "Für die App-Steuerung per WLAN oder Bluetooth meist nicht, für die Ortung über Mobilfunk dagegen oft nach einigen Jahren. Einige Hersteller legen eine LTE-Verbindung für eine begrenzte Zeit bei und berechnen danach eine Gebühr, prüfen Sie das vor dem Kauf. Unabhängig davon sollten Sie PIN-Sperre und Hebealarm aktivieren. Klären Sie außerdem mit Ihrer Hausratversicherung, ob ein Diebstahl aus dem Garten abgedeckt ist, denn das ist oft nur über einen Zusatzbaustein versichert.",
      },
      {
        question: "Wie viel Strom verbraucht ein Mähroboter und was gehört zur Winterpause?",
        answer: "Der Stromverbrauch ist gering: Bei 6 kWh pro Monat und 0,35 € pro kWh kostet eine Saison von sieben Monaten knapp 15 €. Den Monatswert finden Sie im Datenblatt. Vor dem Winter reinigen Sie das Gerät gründlich, laden den Akku voll und lagern den Roboter frostfrei in Keller oder Garage. Ob die Ladestation draußen bleiben darf, steht in der Anleitung; trennen Sie sie zumindest vom Netz. Die kleinen Klingen wechseln Sie mehrmals pro Saison, sobald das Gras ausfranst.",
      },
    ],
    es: [
      {
        question: "¿Qué robot cortacésped elegir según los metros de tu jardín?",
        answer: "Elige un modelo indicado para un 20 o 30 % más de superficie que tu césped real, porque la cifra del fabricante supone un terreno llano y de una sola pieza. Las pendientes, los pasos estrechos y las zonas separadas alargan la siega. Revisa la pendiente máxima en porcentaje (45° equivalen al 100 %) y si gestiona varias zonas. En una parcela pequeña de urbanización suele bastar un modelo de gama de entrada; pagar por más capacidad sirve sobre todo para que termine antes.",
      },
      {
        question: "¿Robot cortacésped con cable perimetral o sin cable?",
        answer: "Sin cable es más cómodo de instalar y de modificar, pero el cable perimetral sigue siendo lo más fiable en jardines con muchos árboles o muros altos. Los modelos RTK se guían por satélite con una antena fija y pierden precisión si el cielo queda tapado. Los de visión siguen el borde del césped con una cámara y dudan cuando el límite con el parterre no está claro. Los que combinan ambas tecnologías compensan mejor los puntos débiles.",
      },
      {
        question: "¿Merece la pena un robot cortacésped con el calor y la sequía del verano?",
        answer: "Sí, siempre que ajustes la altura y el horario: en julio y agosto, sube unos centímetros la altura de corte y programa el robot a primera hora de la mañana. Un césped muy corto sufre más con el calor y deja el suelo más expuesto al sol. Si el césped crece poco por las restricciones de riego, reduce los días de siega. Con césped artificial o grava, el robot no te aporta nada.",
      },
      {
        question: "¿Es peligroso un robot cortacésped para niños, mascotas y erizos?",
        answer: "Puede serlo si funciona sin vigilancia: no lo programes de noche, porque los erizos salen al anochecer y no huyen de las cuchillas. De día, mantén a niños y mascotas fuera del césped mientras trabaja, aunque las cuchillas se detengan al levantar el robot. En urbanizaciones, revisa también las normas de la comunidad y la ordenanza municipal de ruido, que pueden fijar horarios de descanso incluso para la maquinaria de jardín.",
      },
      {
        question: "¿Cuánto consume un robot cortacésped y qué mantenimiento necesita?",
        answer: "Consume poco: con 6 kWh al mes durante ocho meses y un precio de ejemplo de 0,15 €/kWh, la temporada sale por unos 7 €. Mira el consumo mensual en la ficha técnica y multiplícalo por el precio de tu tarifa. El gasto de verdad está en las cuchillas pequeñas, que se cambian varias veces por temporada, y a la larga en la batería. Limpia los bajos cada semana con un cepillo, nunca con agua a presión, y en invierno guárdalo cargado y a cubierto.",
      },
    ],
    it: [
      {
        question: "Qual è il miglior robot tagliaerba per il mio giardino?",
        answer: "Il migliore è quello dimensionato sul tuo prato: scegli un modello dichiarato per almeno il 20-30% in più della superficie reale. Il dato del produttore vale per un terreno piano e senza ostacoli, mentre pendenze, passaggi stretti e zone separate allungano i tempi. Controlla la pendenza massima in percentuale (45° corrispondono al 100%), la gestione di più zone e il tipo di guida: filo perimetrale, RTK o telecamera.",
      },
      {
        question: "Robot tagliaerba senza filo perimetrale: funziona davvero?",
        answer: "Sì, ma rende meglio nei giardini aperti: i modelli RTK si orientano via satellite e perdono precisione sotto alberi fitti o vicino a muri alti. Quelli con telecamera seguono il bordo del prato e possono confondersi se il confine con l'aiuola non è netto o la luce è scarsa. Le versioni che combinano RTK e visione sono le più affidabili. Il filo perimetrale resta la soluzione più sicura nei giardini molto alberati, ma richiede una posa più lunga.",
      },
      {
        question: "Quanto consuma un robot tagliaerba?",
        answer: "Poco: con 6 kWh al mese per sette mesi e un prezzo d'esempio di 0,25 € al kWh spendi circa 10 € a stagione. Il consumo mensile si trova nella scheda tecnica: moltiplicalo per il prezzo del kWh della tua bolletta e per i mesi di utilizzo. Pesano di più i ricambi, cioè le piccole lame da cambiare più volte a stagione e, dopo alcuni anni, la batteria. Rispetto a un tosaerba a benzina, non ci sono carburante né olio da comprare.",
      },
      {
        question: "Il robot tagliaerba è sicuro per bambini, animali e ricci?",
        answer: "Sì, di giorno e sotto sorveglianza; di notte no: i ricci escono al buio, non scappano davanti alle lame e possono ferirsi gravemente. Programma il robot solo nelle ore di luce e tieni bambini e animali lontani dal prato mentre lavora, anche se le lame si fermano quando la macchina viene sollevata. Verifica poi il regolamento comunale o condominiale sugli orari di silenzio, che può valere anche per i robot tagliaerba.",
      },
      {
        question: "Come si fa il rimessaggio invernale del robot tagliaerba?",
        answer: "Puliscilo bene, ricarica la batteria e conservalo in un locale asciutto e al riparo dal gelo fino alla primavera. Spazzola l'erba incrostata sotto la scocca senza usare idropulitrici, controlla le lame e sostituiscile se sono consumate. Per la base di ricarica segui il manuale: alcuni produttori consigliano di ritirarla, altri di lasciarla fuori scollegata. Prima della ripartenza aggiorna il firmware dall'app e ricontrolla la mappa o il filo perimetrale.",
      },
    ],
    nl: [
      {
        question: "Kan één robotmaaier mijn voortuin én achtertuin maaien?",
        answer: "Ja, als de maaier meerdere zones ondersteunt, maar zonder berijdbare doorgang moet je hem soms zelf naar de andere tuin dragen. Met begrenzingsdraad leg je een smalle verbindingsgang aan, bijvoorbeeld via een zijpad. Draadloze RTK-modellen bewaren meerdere kaarten en rijden zelf naar elke zone als er een pad is. Controleer de minimale doorgangsbreedte en laat de maaier niet over de openbare stoep rijden.",
      },
      {
        question: "Werkt een robotmaaier zonder draad in een kleine tuin met schuttingen?",
        answer: "Vaak minder goed: RTK heeft vrij zicht op de lucht nodig, en hoge schuttingen, bomen en huizen rondom een kleine tuin kunnen het signaal storen. Een model met camera, of een combinatie van RTK en camera, werkt dan betrouwbaarder. In een smalle, ingesloten achtertuin is de klassieke begrenzingsdraad nog altijd de zekerste keuze, ook al kost het leggen ervan een middag werk.",
      },
      {
        question: "Is een robotmaaier gevaarlijk voor egels?",
        answer: "Ja, als hij 's nachts maait: egels zijn in het donker actief, vluchten niet maar rollen zich op en raken zo ernstig gewond. Laat de robotmaaier daarom alleen overdag rijden, nooit van schemering tot zonsopkomst. Loop vóór de eerste ronde even over het gras als je een wilde hoek, bladhoop of takkenril hebt. Houd ook kinderen en huisdieren van het gazon zolang hij werkt, ook al stoppen de messen bij optillen.",
      },
      {
        question: "Robotmaaier werkt niet of stopt steeds: wat kan het zijn?",
        answer: "Meestal is het een draadbreuk, een verloren RTK-signaal, wielen die slippen op nat gras of botte messen. Meldt de app “geen lussignaal”, zoek dan de breuk in de begrenzingsdraad en herstel die met een waterdichte connector. Bij draadloze modellen helpt het om de antenne hoger en vrijer te plaatsen. Slippen de wielen, laat hem dan later op de dag rijden. Maait hij rafelig of trekt hij gras uit, vervang dan de messen.",
      },
      {
        question: "Wat kost een robotmaaier aan stroom per jaar?",
        answer: "Weinig: bij 6 kWh per maand, acht maanden per jaar en € 0,30 per kWh betaal je ongeveer € 14. Het maandverbruik staat in de specificaties; vermenigvuldig het met je eigen kWh-prijs. De grotere kosten zitten in de kleine messen, die je meerdere keren per seizoen vervangt, en na een aantal jaren in een nieuwe accu. Berg de maaier in de winter vorstvrij op in schuur of garage, met een opgeladen accu.",
      },
    ],
    pl: [
      {
        question: "Jaki robot koszący wybrać do ogrodu?",
        answer: "Wybierz model przeznaczony do powierzchni o 20–30% większej niż Twój trawnik, bo producent podaje ją dla płaskiego, jednolitego terenu. Skarpy, wąskie przejścia i oddzielne strefy wydłużają koszenie. Sprawdź też maksymalne nachylenie podane w procentach (45° to 100%) i to, czy robot obsługuje kilka stref. W ogrodzie z wieloma drzewami lepiej sprawdzi się model z przewodem albo z kamerą niż robot z samym RTK.",
      },
      {
        question: "Robot koszący bez przewodu ograniczającego czy z przewodem?",
        answer: "Robota bez przewodu łatwiej zainstalować i łatwiej zmienić mu strefy koszenia, ale przewód ograniczający wciąż jest najpewniejszy w ogrodach z wieloma drzewami. Modele RTK ustalają pozycję z sygnału satelitarnego korygowanego przez stację referencyjną; pod koronami drzew i przy wysokich budynkach tracą dokładność. Modele z kamerą rozpoznają krawędź trawnika, ale mylą się przy niewyraźnej granicy z rabatą. Rozwiązania łączące RTK i kamerę najlepiej równoważą słabe strony obu technologii.",
      },
      {
        question: "Czy robot koszący jest bezpieczny dla jeży, dzieci i zwierząt?",
        answer: "Dla jeży – tylko wtedy, gdy kosi w dzień: jeże, w Polsce objęte ochroną gatunkową, żerują nocą, nie uciekają przed nożami i łatwo odnoszą poważne rany. Harmonogram warto więc ustawić wyłącznie na godziny dzienne. Podczas koszenia dzieci i zwierzęta domowe nie powinny przebywać na trawniku, nawet jeśli noże zatrzymują się po podniesieniu robota. Przed pierwszym koszeniem w sezonie dobrze jest obejść ogród i usunąć zabawki, gałęzie oraz kamienie.",
      },
      {
        question: "Jak zabezpieczyć robota koszącego przed kradzieżą?",
        answer: "Włącz blokadę PIN i alarm przy podniesieniu, a jeśli ryzyko kradzieży jest większe, wybierz model z lokalizacją GPS. Robot zablokowany kodem i przypisany do konta jest dla złodzieja bezużyteczny. Lokalizacja przez sieć komórkową bywa bezpłatna tylko przez kilka lat, potem wymaga abonamentu. Sprawdź też w OWU ubezpieczenia domu, czy obejmuje ono mienie pozostawione w ogrodzie, bo część polis chroni je tylko przed kradzieżą z włamaniem.",
      },
      {
        question: "Ile prądu zużywa robot koszący i jak go przechowywać zimą?",
        answer: "Zużycie jest niewielkie: przy 6 kWh miesięcznie przez siedem miesięcy i przykładowej cenie 1 zł za kWh sezon kosztuje około 42 zł. Miesięczne zużycie podaje karta produktu. Przed zimą robota trzeba dokładnie oczyścić, naładować akumulator i schować w suchym pomieszczeniu, w którym nie ma mrozu, na przykład w garażu. Stację ładującą najlepiej odłączyć od zasilania, a to, czy ją zdemontować, podpowie instrukcja producenta. Małe noże tnące wymienia się kilka razy w sezonie.",
      },
    ],
    sv: [
      {
        question: "Hur stor robotgräsklippare behöver jag?",
        answer: "Välj en modell som enligt tillverkaren klarar en 20–30 % större yta än din gräsmatta, alltså ungefär 1 200–1 300 m² om du har 1 000 m² att klippa. Tillverkarens siffra förutsätter en plan och sammanhängande tomt: sluttningar, smala passager och separata gräsytor gör att klippningen tar längre tid. Kontrollera också den maximala lutningen, som anges i procent (45° motsvarar 100 %), och hur smal passage roboten klarar att ta sig igenom.",
      },
      {
        question: "Robotgräsklippare med RTK, kamera eller begränsningskabel: vad ska jag välja?",
        answer: "På en öppen gräsmatta är RTK utan kabel smidigast; under träd och intill huset fungerar kameranavigering bättre, eller en modell som kombinerar RTK och kamera. Med RTK positionerar sig roboten via satellit med hjälp av en fast referensantenn, och precisionen sjunker när himlen skyms. Kameran följer gräskanterna men tvekar när gränsen mot en rabatt är otydlig. Begränsningskabeln är fortfarande pålitligast i trädgårdar med många träd, men den tar längre tid att lägga ut och måste lagas när den går av.",
      },
      {
        question: "Är robotgräsklippare farliga för igelkottar?",
        answer: "Ja, om de får gå på natten: igelkottar är aktiva när det är mörkt, flyr inte undan maskinen och kan skadas allvarligt. Schemalägg därför klippningen på dagtid, aldrig från skymning till gryning. Håll också små barn och husdjur borta från gräsmattan medan roboten klipper, även om knivarna stannar så fort den lyfts. Vill du låta roboten klippa på söndagar, ta först reda på om det finns lokala regler för buller från trädgårdsmaskiner.",
      },
      {
        question: "Hur skyddar jag robotgräsklipparen mot stöld?",
        answer: "Slå på PIN-koden och lyftlarmet, och välj om möjligt en modell med GPS-spårning. En robot som är kodlåst och kopplad till ditt konto går inte att använda för en tjuv, vilket gör den mindre frestande. Spårning via mobilnätet (4G) ingår ibland under några år och blir sedan avgiftsbelagd: kontrollera det före köpet. Läs också villkoren i din hemförsäkring, eftersom vissa försäkringar undantar eller begränsar ersättningen för saker som står ute i trädgården.",
      },
      {
        question: "Hur sköter jag robotgräsklipparen och vad kostar den i drift?",
        answer: "Räkna med en rengöring i veckan, nya knivar flera gånger per säsong och låg elförbrukning. Borsta bort gräs som fastnat under kåpan, utan högtryckstvätt, och byt de små svängbara knivarna så fort de sliter av gräset i stället för att klippa det. Elförbrukningen per månad står i tillverkarens produktblad. Med ett exempelpris på 2,75 kr/kWh blir det 6 kWh × 7 månader × 2,75 kr ≈ 115 kr per säsong. Förvara roboten frostfritt över vintern, med fulladdat batteri.",
      },
    ],
    us: [
      {
        question: "What size robot mower do I need for my lawn?",
        answer: "Choose a mower rated for about 20% to 30% more than your actual lawn area: for a 0.25-acre (1,000 m²) lawn, look at models rated for about 0.3 acre (1,200 to 1,300 m²). The rated figure assumes a flat, simple, single-zone yard; slopes, narrow side yards and separate front and back lawns all add mowing time. Check the maximum slope, given as a percentage (45° equals 100%), and whether the mower can handle more than one zone. A bigger rating mainly buys a faster finish.",
      },
      {
        question: "Wire-free robot mower or boundary wire: which is better?",
        answer: "Wire-free is easier to set up and change, but boundary wire is still the most dependable option in small, fenced yards with tall fences and trees. RTK models navigate by satellite and need a clear view of the sky, which high fences, hedges and neighboring houses can block. Vision models follow lawn edges with a camera and struggle when the border is unclear or the light is poor. Many newer mowers combine both to cover each other's weak spots.",
      },
      {
        question: "Can I run a robot mower at night?",
        answer: "It's best not to: schedule it for daylight hours. Small animals that forage after dark, such as young rabbits and toads, often freeze or curl up instead of running away and can be badly injured by the blades. Never schedule it from dusk to dawn, and walk the lawn before the first run of the day if you have a wild corner or a brush pile. Lift sensors stop the blades for children and pets, but it's still best to keep them off the lawn while the mower works.",
      },
      {
        question: "How do I keep my robot mower from being stolen?",
        answer: "Turn on the PIN lock and lift alarm, and choose a model with GPS tracking if theft is a concern where you live. A PIN-locked mower tied to your app account is useless to a thief, which makes it a poor target. Cellular tracking is sometimes free for a few years, then needs a subscription. Write down the serial number, and check that your homeowners or renters insurance covers yard equipment, since some policies limit it.",
      },
      {
        question: "How much does a robot mower cost to run?",
        answer: "Electricity is a small cost: a mower using 6 kWh a month for seven months costs about $7.60 a season at the US average residential rate of 18.16 cents per kWh (EIA, August 2026). Check the monthly figure on the spec sheet and multiply by the rate on your utility bill. The bigger running costs are replacement blades, which are cheap but changed several times a season, and eventually a new battery. Store the mower in a dry shed or garage that stays above freezing over the winter, fully charged, to protect the battery.",
      },
    ],
    ca: [
      {
        question: "What size robot mower do I need for my lawn?",
        answer: "Choose a mower rated for about 20–30% more than your actual lawn area, because the rated figure assumes a flat, simple, single-zone yard. Slopes, narrow side yards and separate front and back lawns all add mowing time. Check the maximum slope, given as a percentage (45° equals 100%), and whether the mower can handle more than one zone. For a small lawn, an entry-level model is usually enough; a bigger rating mainly buys a faster finish.",
      },
      {
        question: "Wire-free robot mower or boundary wire: which is better?",
        answer: "Wire-free is easier to set up and change, but boundary wire is still the most dependable option in small backyards enclosed by tall fences and trees. RTK models navigate by satellite and need a clear view of the sky, which high fences, hedges and neighbouring houses can block. Vision models follow lawn edges with a camera and struggle when the border is unclear or the light is poor. Many newer mowers combine both to cover each other's weak spots.",
      },
      {
        question: "Are robot mowers safe for wildlife?",
        answer: "Only if you run them in daylight: small animals such as toads, frogs and rabbits are most active at dusk and at night. Some freeze instead of running away, so mower blades can badly injure them. Set the schedule to daytime hours, never dusk to dawn, and walk the lawn before the first run of the day if you have a wild corner, a brush pile or a rabbit nest. Lift sensors stop the blades for children and pets, but it's still best to keep them off the lawn while the mower works.",
      },
      {
        question: "How do I stop my robot mower from being stolen?",
        answer: "Turn on the PIN lock and lift alarm, and choose a model with GPS tracking if theft is a worry where you live. A PIN-locked mower tied to your app account is useless to a thief, which makes it a poor target. Cellular tracking is sometimes free for a few years, then needs a subscription. Keep a record of the serial number and your receipt, and check that your home insurance covers outdoor equipment, as some policies limit it.",
      },
      {
        question: "How much does a robot mower cost to run?",
        answer: "Electricity is a small cost: a mower using 6 kWh a month for seven months uses 42 kWh a season. Check the monthly figure on the spec sheet and multiply by the rate per kWh on your bill, which depends on your province and utility. The bigger running costs are replacement blades, which are cheap but changed several times a season, and eventually a new battery. Over winter, store the mower fully charged somewhere dry that stays above freezing, such as a basement or a heated garage, to protect the battery.",
      },
    ],
  },
  "arrosage-connecte": {
    fr: [
      {
        question: "Comment choisir un programmateur d'arrosage connecté ?",
        answer: "Partez de votre installation : un programmateur de robinet suffit pour un tuyau ou un goutte-à-goutte, un boîtier multi-zones pilote des électrovannes enterrées. Préférez le Wi-Fi via une passerelle au seul Bluetooth, qui ne fonctionne qu'à portée du téléphone et ne suit pas la météo. Vérifiez l'écosystème (Gardena, Rain Bird, Eve Aqua compatible HomeKit) et la pression minimale demandée : une cuve de récupération sans pompe n'en fournit souvent pas assez.",
      },
      {
        question: "Goutte-à-goutte ou arroseur : lequel programmer ?",
        answer: "Le goutte-à-goutte pour les massifs, haies et potagers, l'arroseur seulement pour la pelouse. Le goutte-à-goutte dépose l'eau au pied des plantes avec très peu d'évaporation, ce qui permet des arrosages courts et fréquents. L'arroseur couvre une grande surface mais perd une partie de l'eau par évaporation et dérive au vent : programmez-le tôt le matin. En période de restrictions, les modes d'irrigation économes comme le goutte-à-goutte bénéficient parfois de dérogations.",
      },
      {
        question: "A-t-on le droit d'arroser son jardin pendant une sécheresse ?",
        answer: "Cela dépend du niveau de restriction fixé par arrêté préfectoral : vigilance, alerte, alerte renforcée ou crise, chaque palier réduisant un peu plus les heures et les usages autorisés. Une interdiction d'arroser entre 8 h et 20 h est fréquente, mais les horaires varient selon les départements. Consultez VigiEau pour votre commune et calez le programmateur sur les plages permises ; le site propose aussi des alertes quand les règles changent.",
      },
      {
        question: "Combien d'eau consomme un arrosage automatique ?",
        answer: "Multipliez le débit par la durée : un arroseur de 600 L/h qui tourne 20 minutes consomme 200 litres. Un goutte-à-goutte de 30 goutteurs à 2 L/h pendant une heure consomme 60 litres. Rapportez le total au prix du mètre cube indiqué sur votre facture, assainissement compris, puisque l'eau d'arrosage passe au même compteur. Une sonde d'humidité ou le report automatique après la pluie évitent les cycles inutiles.",
      },
      {
        question: "Faut-il rentrer son programmateur d'arrosage l'hiver ?",
        answer: "Oui, avant les premières gelées : l'eau restée dans le programmateur peut geler et fendre le boîtier ou la vanne. Dévissez-le du robinet, videz-le, retirez les piles et rangez-le au sec. Purgez aussi les tuyaux et le goutte-à-goutte, et fermez le robinet extérieur depuis l'intérieur de la maison s'il dispose d'une vanne d'arrêt. Au printemps, remettez des piles neuves et nettoyez le filtre d'entrée, souvent encrassé par le calcaire ou le sable.",
      },
    ],
    en: [
      {
        question: "Can I use a smart watering system during a hosepipe ban?",
        answer: "Usually only for drip irrigation: sprinklers and sprinkler-style systems on mains water are banned, but drip systems fitted with a timer and pressure-reducing valve are often exempt. Exemptions vary between water companies, so read your supplier’s Temporary Use Ban notice before relying on one. Breaking a ban can lead to a fine of up to £1,000. You can still use a watering can or water from a water butt, and a controller with a weather skip helps you use less once the ban lifts.",
      },
      {
        question: "How much water does a sprinkler use if I’m on a water meter?",
        answer: "Multiply flow by time: a sprinkler delivering 600 litres an hour uses 200 litres in 20 minutes. To work out the cost, divide by 1,000 and multiply by your water company’s price per cubic metre, plus the sewerage charge if it’s based on the water you use. Drip lines use far less: 30 drippers at 2 litres an hour for an hour is 60 litres. A controller that skips runs after rain avoids wasted cycles.",
      },
      {
        question: "Which smart watering controller should I buy?",
        answer: "For a hose or drip kit, a tap timer is enough; for buried sprinkler zones, choose a multi-zone controller that drives solenoid valves. Choose one that connects to Wi-Fi through a hub rather than Bluetooth alone, so you can change schedules away from home and use weather skips. Check it works with your smart home platform, whether Alexa, Google Home or Apple Home, and that your outside tap is within range. A soil moisture sensor is worth adding on sandy or clay soils.",
      },
      {
        question: "Can a smart tap timer run from a water butt?",
        answer: "Only if it is rated for low pressure or you add a pump, because a water butt gives very little pressure by gravity. Many tap timers need a minimum pressure to open their valve, which a butt standing at ground level may not reach. Look for a gravity-fed timer, raise the butt on a stand, or use a small submersible pump switched by the timer. Drip lines suit butt water best; sprinklers need mains pressure.",
      },
      {
        question: "What should I do with my tap timer in winter?",
        answer: "Bring it indoors before the first frost, because water left inside can freeze and crack the valve. Unscrew it, drain it, take the batteries out and store it somewhere dry. Drain hoses and drip lines too, and isolate and drain the outside tap from the stop valve indoors if it has one, or fit an insulated cover. In spring, fit fresh batteries and clean the inlet filter before reconnecting.",
      },
    ],
    de: [
      {
        question: "Welche smarte Bewässerungssteuerung passt zu meinem Garten?",
        answer: "Für Schlauch oder Tropfschlauch reicht ein Bewässerungscomputer am Wasserhahn, für verlegte Regner brauchen Sie eine Mehrzonen-Steuerung mit Magnetventilen. Wählen Sie WLAN über ein Gateway statt reinem Bluetooth, damit Sie unterwegs eingreifen und Wetterdaten nutzen können. Prüfen Sie die Einbindung in Ihr System, etwa Gardena smart, Apple Home oder Matter. Wer aus Zisterne oder Regentonne gießt, braucht meist eine Pumpe, weil viele Ventile einen Mindestdruck benötigen.",
      },
      {
        question: "Lohnt sich ein Gartenwasserzähler für die Bewässerung?",
        answer: "Oft ja, wenn Sie viel gießen: Mit einem separaten Gartenwasserzähler zahlen Sie für das versickerte Gießwasser in vielen Gemeinden keine Abwassergebühr. Ob und unter welchen Bedingungen der Abzug möglich ist, regelt die Abwassersatzung Ihrer Gemeinde; häufig sind Einbau durch einen Fachbetrieb, Anmeldung und regelmäßiger Zählerwechsel Pflicht. Rechnen Sie selbst: Gießwasser in m³ pro Jahr mal Abwassergebühr pro m³, abzüglich der Kosten für Zähler und Wechsel. In Österreich und der Schweiz gelten andere Regeln.",
      },
      {
        question: "Darf ich bei Trockenheit mit Leitungswasser bewässern?",
        answer: "Meist ja, aber Gemeinden, Landkreise und Wasserversorger können bei Wassermangel Einschränkungen erlassen, etwa ein Sprengverbot tagsüber. Häufig betreffen Allgemeinverfügungen vor allem die Entnahme aus Bächen, Seen und Grundwasser; manche Versorger untersagen bei Engpässen auch das Rasensprengen mit Trinkwasser zu bestimmten Zeiten. Informieren Sie sich bei Gemeinde und Versorger und legen Sie die Programme in die frühen Morgenstunden. Smarte Steuerungen setzen bei Regen automatisch aus.",
      },
      {
        question: "Tropfbewässerung oder Rasensprenger: was ist sparsamer?",
        answer: "Die Tropfbewässerung ist deutlich sparsamer, weil sie das Wasser direkt an die Wurzeln bringt und kaum etwas verdunstet. Sie eignet sich für Beete, Hecken, Hochbeete und Kübel. Der Rasensprenger ist für Rasenflächen praktisch, verliert bei Sonne und Wind aber einen Teil des Wassers; lassen Sie ihn deshalb früh am Morgen laufen. Rechenbeispiel: Ein Regner mit 600 Litern pro Stunde verbraucht in 20 Minuten 200 Liter, 30 Tropfer mit 2 Litern pro Stunde in einer Stunde 60 Liter.",
      },
      {
        question: "Wann muss der Bewässerungscomputer winterfest gemacht werden?",
        answer: "Vor dem ersten Frost: Bauen Sie das Gerät ab, entleeren Sie es und lagern Sie es trocken und frostfrei. Entnehmen Sie die Batterien, entleeren Sie Schläuche und Tropfleitungen und sperren Sie den Außenwasserhahn innen ab, sofern ein Absperrventil vorhanden ist. Eingefrorenes Restwasser kann Ventil und Gehäuse sprengen. Im Frühjahr reinigen Sie das Eingangssieb, setzen frische Batterien ein und prüfen die Verbindung zur App.",
      },
    ],
    es: [
      {
        question: "¿Puedo regar el jardín si hay restricciones por sequía?",
        answer: "Depende de lo que dicten tu ayuntamiento, tu comunidad autónoma o la confederación hidrográfica: en sequía pueden limitar el riego a ciertas horas o prohibirlo. En la sequía de 2023 y 2024, por ejemplo, Cataluña llegó a restringir el riego de jardines con agua de la red. Consulta los bandos municipales y programa el riego solo en los horarios permitidos, normalmente de noche o de madrugada. El riego por goteo de árboles y huertos a veces queda exento.",
      },
      {
        question: "¿Riego por goteo o por aspersión con el calor del verano?",
        answer: "Por goteo para setos, arbustos, macetas y huerto; la aspersión solo para el césped y siempre de noche o al amanecer. Con calor y viento, buena parte del agua de un aspersor se evapora antes de llegar al suelo, mientras que el goteo la deja junto a la raíz. Si quieres gastar menos, reduce la superficie de césped y apuesta por plantas mediterráneas, como en la xerojardinería. Un sensor de lluvia evita regar en vano tras una tormenta.",
      },
      {
        question: "¿Qué programador de riego inteligente elegir: de grifo o de varias zonas?",
        answer: "De grifo si riegas con manguera o un kit de goteo; de varias zonas si tienes electroválvulas enterradas para aspersores o difusores. Mejor wifi con pasarela que solo bluetooth: así cambias la programación desde fuera de casa y aprovechas la previsión meteorológica. Comprueba que se integra con Alexa, Google Home o Apple Home si ya los usas. Si el agua de tu zona es dura, elige un modelo con un filtro de entrada fácil de limpiar.",
      },
      {
        question: "¿Cuánta agua gasta el riego automático y cuánto cuesta?",
        answer: "Calcula caudal por tiempo: un aspersor de 600 litros por hora gasta 200 litros en 20 minutos, y un goteo de 30 goteros de 2 litros por hora gasta 60 litros en una hora. Pasa el total a metros cúbicos y multiplícalo por el precio del metro cúbico de tu recibo, teniendo en cuenta que muchos municipios cobran por tramos: en verano, el consumo extra puede caer en el tramo más caro. Ajustar los tiempos a cada estación ahorra bastante.",
      },
      {
        question: "¿Por qué mi programador de riego no abre el agua?",
        answer: "Lo más habitual es que tenga las pilas gastadas, el filtro de entrada obstruido o la presión por debajo del mínimo. Cambia las pilas, limpia el filtro, que con agua dura se llena de cal, y comprueba que el grifo esté abierto del todo. Si lo controlas por wifi, revisa que la pasarela siga conectada y que no esté activo un retraso por lluvia. En sistemas enterrados, una electroválvula atascada por arena o cal se limpia desmontando su membrana.",
      },
    ],
    it: [
      {
        question: "Quale centralina per irrigazione Wi-Fi scegliere?",
        answer: "Per tubo o ala gocciolante basta un programmatore da rubinetto; per un impianto interrato a zone serve una centralina che comandi le elettrovalvole. Preferisci il Wi-Fi con gateway al solo Bluetooth, così modifichi i programmi da fuori casa e sfrutti le previsioni meteo. Controlla la compatibilità con Alexa, Google Home o Apple Casa e la copertura Wi-Fi in giardino. Un sensore di pioggia o di umidità del terreno evita irrigazioni inutili.",
      },
      {
        question: "Si può irrigare il giardino con le ordinanze estive anti-spreco?",
        answer: "Sì, ma solo negli orari consentiti: molti comuni d'estate vietano di usare l'acqua potabile per orti e giardini nelle ore più calde. Orari e periodi cambiano da comune a comune, quindi controlla l'ordinanza sull'albo pretorio o sul sito del gestore idrico. Programma la centralina di notte o all'alba, quando l'evaporazione è minima. Se usi l'acqua di un pozzo privato, le regole possono essere diverse: verifica anche quelle.",
      },
      {
        question: "Meglio irrigazione a goccia o irrigatori a pioggia?",
        answer: "A goccia per siepi, aiuole, orto e vasi; irrigatori a pioggia solo per il prato. L'impianto a goccia porta l'acqua alla base delle piante con pochissima evaporazione, mentre gli irrigatori bagnano una superficie ampia ma, con sole e vento, perdono parte dell'acqua. Per questo conviene farli partire all'alba. Con la stessa centralina puoi gestire entrambi su zone separate, con tempi diversi.",
      },
      {
        question: "Quanta acqua consuma l'irrigazione automatica?",
        answer: "Moltiplica la portata per il tempo: un irrigatore da 600 litri l'ora consuma 200 litri in 20 minuti. Trenta gocciolatori da 2 litri l'ora consumano 60 litri in un'ora. Converti in metri cubi e moltiplica per la tariffa della bolletta idrica. Se peschi da un pozzo l'acqua non la paghi, ma l'elettricità della pompa sì: una pompa da 750 W accesa un'ora consuma 0,75 kWh, da moltiplicare per il prezzo del kWh in bolletta.",
      },
      {
        question: "La centralina di irrigazione non parte: cosa controllare?",
        answer: "Controlla prima batterie, rubinetto e sensore di pioggia: sono le cause più comuni di un programma che non parte. Se il sensore rileva umidità o nell'app è attivo un ritardo per pioggia, la centralina salta i cicli di proposito. Verifica che il gateway sia online e che data e ora siano corrette. Negli impianti interrati un'elettrovalvola bloccata da calcare o sabbia si sblocca pulendo la membrana. D'inverno smonta il programmatore da rubinetto per proteggerlo dal gelo.",
      },
    ],
    nl: [
      {
        question: "Welke slimme besproeiingscomputer past bij een Nederlandse tuin?",
        answer: "Voor de meeste tuinen volstaat een kraancomputer met wifi via een gateway, die bij regen automatisch een beurt overslaat. Heb je ingegraven sproeiers in meerdere zones, kies dan een zonecomputer die magneetventielen aanstuurt. Een model met enkel Bluetooth bedien je uitsluitend van dichtbij. Let op koppeling met Apple Home, Google Home of Alexa en op het wifibereik tot de buitenkraan. In het wisselvallige Nederlandse weer scheelt een weersafhankelijke planning veel onnodige beurten.",
      },
      {
        question: "Mag je sproeien tijdens droogte?",
        answer: "Met kraanwater meestal wel, al vragen drinkwaterbedrijven bij droogte en hitte om zuinig te sproeien, het liefst 's avonds of vroeg in de ochtend. Strenger is het voor oppervlaktewater: waterschappen kunnen een onttrekkingsverbod of beregeningsverbod instellen, en dan mag je niet meer met een pomp uit de sloot sproeien. Volg de berichten van je waterschap en drinkwaterbedrijf. Een slimme computer met vaste avondtijden en regenpauze maakt het makkelijk om je daaraan te houden.",
      },
      {
        question: "Kan een slimme timer werken op een regenton?",
        answer: "Alleen met een pomp of een timer die geschikt is voor lage druk, want een regenton levert door zwaartekracht nauwelijks druk. Veel kraancomputers hebben een minimale waterdruk nodig om hun ventiel te openen. Zet de regenton op een verhoging of gebruik een dompelpomp die door de timer wordt aangestuurd. Druppelslangen werken het best op regenwater; sproeiers hebben de druk van de waterleiding nodig.",
      },
      {
        question: "Hoeveel water verbruikt sproeien en wat kost het?",
        answer: "Reken debiet maal tijd: een sproeier van 600 liter per uur verbruikt in 20 minuten 200 liter. Een druppelslang met 30 druppelaars van 2 liter per uur gebruikt 60 liter per uur. Deel door 1.000 voor kubieke meters en vermenigvuldig met de prijs per m³ op je drinkwaterrekening. Sproeien met regenwater uit de ton kost niets, behalve de stroom van een eventuele pomp.",
      },
      {
        question: "Besproeiingscomputer werkt niet meer: wat kan het zijn?",
        answer: "Meestal zijn het lege batterijen, een verstopt filtertje of een kraan die niet helemaal openstaat. Vervang de batterijen, spoel het zeefje bij de aansluiting schoon en controleer in de app of er geen regenpauze actief is. Werkt de koppeling niet, kijk dan of de gateway nog online is. Haal de computer vóór de eerste vorst van de kraan en bewaar hem droog, want bevroren water kan het ventiel laten scheuren.",
      },
    ],
    pl: [
      {
        question: "Jaki sterownik nawadniania z Wi-Fi wybrać?",
        answer: "Do węża lub linii kroplującej wystarczy sterownik kranowy, a do instalacji podziemnej ze zraszaczami potrzebny jest sterownik strefowy z elektrozaworami. Lepiej wybrać łączność Wi-Fi, choćby przez bramkę, niż sam Bluetooth: pozwala zmieniać harmonogram spoza domu i korzystać z prognozy pogody. Sprawdź zgodność z Google Home, Alexą lub aplikacją Tuya oraz zasięg Wi-Fi w ogrodzie. Jeśli podlewasz wodą ze studni, trzeba też dopasować sterowanie do pompy.",
      },
      {
        question: "Czy opłaca się założyć podlicznik do podlewania ogrodu?",
        answer: "Często tak, bo za wodę zmierzoną podlicznikiem ogrodowym zwykle nie płaci się za odprowadzanie ścieków. Zasady ustala lokalne przedsiębiorstwo wodociągowe lub gmina: najczęściej trzeba zgłosić montaż, zlecić zaplombowanie licznika i co kilka lat go wymieniać. Opłacalność łatwo policzyć: roczne zużycie wody do podlewania w m³ razy stawka za ścieki, minus koszt montażu i ewentualnej opłaty abonamentowej.",
      },
      {
        question: "Czy latem można podlewać ogród, gdy gmina wprowadza zakaz?",
        answer: "Nie w godzinach objętych zakazem: w upały niektóre gminy i wodociągi ograniczają podlewanie wodą z sieci, zwłaszcza w szczycie dnia. Komunikaty publikuje urząd gminy lub przedsiębiorstwo wodociągowe. Sterownik warto ustawić na noc lub wczesny ranek, gdy zużycie w sieci jest najniższe, a parowanie najmniejsze. Zakazy dotyczą zwykle wody wodociągowej, więc deszczówka ze zbiornika jest dobrą alternatywą.",
      },
      {
        question: "Linia kroplująca czy zraszacze – co wybrać?",
        answer: "Linia kroplująca do żywopłotów, rabat i warzywnika, zraszacze tylko do trawnika. Kroplowniki podają wodę bezpośrednio pod korzenie, więc prawie nic nie wyparowuje, a zraszacz w słońcu i na wietrze traci część wody. Przykład: zraszacz 600 l/h przez 20 minut zużyje 200 litrów, a 30 kroplowników po 2 l/h przez godzinę – 60 litrów. Oba systemy można podłączyć do jednego sterownika w osobnych strefach.",
      },
      {
        question: "Jak przygotować nawadnianie automatyczne do zimy?",
        answer: "Przed pierwszymi przymrozkami trzeba spuścić wodę z instalacji, a sterownik kranowy zdjąć i schować w suchym miejscu. Instalację podziemną najlepiej przedmuchać sprężonym powietrzem, bo woda pozostawiona w rurach i elektrozaworach może je rozsadzić, gdy zamarznie. Ze sterownika kranowego należy wyjąć baterie. Zawór kranu zewnętrznego warto zamknąć od środka domu i odkręcić kran na zewnątrz, by spuścić resztę wody.",
      },
    ],
    sv: [
      {
        question: "Vilken smart bevattningsdator ska jag välja?",
        answer: "Utgå från det du har: en bevattningsdator som skruvas på kranen räcker för slang eller droppbevattning, medan nedgrävda magnetventiler kräver en styrenhet för flera zoner. Välj wifi via en hubb hellre än enbart Bluetooth, som bara fungerar inom räckhåll för mobilen och inte tar hänsyn till vädret. Kontrollera vilket ekosystem den ingår i (Gardena, Rain Bird, Eve Aqua som fungerar med HomeKit) och vilket minsta vattentryck den kräver: en regntunna utan pump ger ofta för lite.",
      },
      {
        question: "Droppbevattning eller spridare: vad passar bäst?",
        answer: "Droppbevattning för rabatter, häckar och köksland, spridare bara för gräsmattan. Droppbevattningen ger vatten direkt vid roten och nästan inget avdunstar, så du kan vattna kort och ofta. En spridare täcker en stor yta men förlorar en del av vattnet genom avdunstning och vinddrift, så schemalägg den tidigt på morgonen. Vid bevattningsförbud kan sparsamma metoder som droppbevattning ibland vara undantagna.",
      },
      {
        question: "Hur mycket vatten går åt vid automatisk bevattning?",
        answer: "Multiplicera flödet med tiden: en spridare på 600 liter i timmen som går i 20 minuter förbrukar 200 liter. Droppbevattning med 30 droppare på 2 liter i timmen förbrukar 60 liter på en timme. Dela summan med 1 000 för att få kubikmeter och multiplicera med priset per kubikmeter på din vattenräkning, inklusive avloppsavgiften om den beräknas på förbrukad mängd. Med en fuktgivare eller en funktion som skjuter upp bevattningen efter regn slipper du onödiga vattningar.",
      },
      {
        question: "Fungerar en bevattningsdator med vatten från regntunnan?",
        answer: "Bara om den är gjord för lågt tryck eller om du kompletterar med en pump, eftersom en regntunna ger mycket lågt tryck med enbart självfall. Många bevattningsdatorer behöver ett visst minsta tryck för att ventilen ska öppna, och en tunna som står direkt på marken ger inte alltid det. Välj en modell för självfall, ställ tunnan högre på en pall eller använd en liten dränkbar pump som styrs av bevattningsdatorn. Droppbevattning passar bäst för regnvatten; spridare behöver trycket från vattenledningen.",
      },
      {
        question: "Ska bevattningsdatorn tas in över vintern?",
        answer: "Ja, före första frosten: vatten som blir kvar i bevattningsdatorn kan frysa och spräcka höljet eller ventilen. Skruva loss den från kranen, töm den, ta ur batterierna och förvara den torrt. Töm också slangar och droppslangar, och stäng av utekranen inifrån huset om den har en avstängningsventil. På våren sätter du i nya batterier och rengör inloppsfiltret, som ofta sätts igen av kalk eller sand.",
      },
    ],
    us: [
      {
        question: "Can I use a smart irrigation system during watering restrictions?",
        answer: "It depends on the rules your water utility or local government sets: restrictions often limit sprinklers to certain days or hours, and drip irrigation is sometimes exempt. Read your utility's notice before relying on an exemption, then set the controller to the permitted days and hours. A controller that skips runs after rain also helps you use less water once restrictions lift.",
      },
      {
        question: "How much water does a sprinkler use?",
        answer: "Multiply flow by time: a sprinkler delivering about 160 gallons an hour (600 L/h) uses about 53 gallons (200 L) in 20 minutes. Check your water bill for the rate, often per 1,000 gallons or per hundred cubic feet, and add the sewer charge if it's billed on the water you use. Drip lines use far less: 30 drippers at 0.5 gallon an hour (2 L/h) for one hour is about 16 gallons (60 L). A controller that skips runs after rain avoids wasted cycles.",
      },
      {
        question: "Smart hose timer or sprinkler controller: which should I buy?",
        answer: "For a garden hose or drip kit, a smart hose timer is enough; for in-ground sprinkler zones, choose a multi-zone controller that drives the solenoid valves. Pick Wi-Fi through a hub rather than Bluetooth alone, so you can change schedules away from home and use weather skips. Check that it works with your smart home platform, whether Alexa, Google Home or Apple Home, and that the outdoor faucet is within range. A soil moisture sensor is worth adding on sandy or clay soils.",
      },
      {
        question: "Can a smart hose timer run from a rain barrel?",
        answer: "Only if it's rated for low pressure or you add a pump, because a rain barrel delivers very little pressure by gravity. Many hose timers need a minimum pressure to open their valve, which a barrel sitting on the ground may not reach. Look for a gravity-fed timer, raise the barrel on a stand, or use a small submersible pump switched by the timer. Drip lines suit rain barrel water best; sprinklers need the pressure of your household water supply.",
      },
      {
        question: "What should I do with my smart hose timer in winter?",
        answer: "Bring it indoors before the first frost, because water left inside can freeze and crack the valve. Unscrew it, drain it, take the batteries out and store it somewhere dry. Drain hoses and drip lines too, and shut off and drain the outdoor faucet from its indoor shutoff valve if it has one, or put an insulated cover over it. In spring, put in fresh batteries and clean the inlet filter before reconnecting.",
      },
    ],
    ca: [
      {
        question: "Can I use a smart irrigation system during watering restrictions?",
        answer: "Usually, as long as you stick to the rules: watering restrictions are set by your municipality and often limit lawn sprinklers to certain days and hours. Drip irrigation and hand watering may be treated differently. Check your municipality's current rules before relying on an exemption, and set the controller to the allowed days and times. Watering cans and rain barrels are usually fine, and a controller with a weather skip helps you use less water.",
      },
      {
        question: "How much water does a sprinkler use?",
        answer: "Multiply flow by time: a sprinkler delivering 600 litres an hour uses 200 litres in 20 minutes. If you're on a water meter, divide by 1,000 and multiply by the price per cubic metre on your water bill, adding the wastewater charge if it's billed on water used. Drip lines use far less: 30 drippers at 2 litres an hour for an hour is 60 litres. A controller that skips runs after rain avoids wasted cycles.",
      },
      {
        question: "Which smart watering controller should I buy?",
        answer: "For a hose or drip kit, a hose timer is enough; for an in-ground sprinkler system, choose a multi-zone controller that drives solenoid valves. Pick Wi-Fi through a hub rather than Bluetooth alone, so you can change schedules away from home and use weather skips. Check it works with your system, whether Alexa, Google Home or Apple Home, and that the outdoor faucet is within range. A soil moisture sensor is worth adding on sandy or clay soils.",
      },
      {
        question: "Can a smart hose timer run from a rain barrel?",
        answer: "Only if it's rated for low pressure or you add a pump, because a rain barrel gives very little pressure by gravity. Many hose timers need a minimum pressure to open their valve, which a barrel standing at ground level may not reach. Look for a gravity-fed timer, raise the barrel on a stand, or use a small submersible pump switched by the timer. Drip lines suit rain barrel water best; sprinklers need the full pressure of your outdoor faucet.",
      },
      {
        question: "What should I do with my hose timer in winter?",
        answer: "Bring it indoors before the first frost, because water left inside can freeze and crack the valve. Unscrew it, drain it, take the batteries out and store it somewhere dry. Drain hoses and drip lines too, then shut off and drain the outdoor faucet from its valve inside the house if it has one, or install an insulated faucet cover; even a frost-free faucet needs the hose disconnected. In spring, put in fresh batteries and clean the inlet filter before reconnecting.",
      },
    ],
  },
  "eclairage-exterieur": {
    fr: [
      {
        question: "Éclairage extérieur solaire ou filaire : que choisir ?",
        answer: "Le solaire pour baliser une allée ou décorer sans travaux, le filaire pour éclairer vraiment une terrasse, une entrée ou un portail toute l'année. Une lampe solaire dépend de l'ensoleillement : en hiver, ses heures d'éclairage chutent et sa puissance reste modeste. Le filaire, en 230 V ou en basse tension 12/24 V, offre une lumière stable et se pilote facilement depuis une appli. Sa consommation est faible : 10 spots LED de 5 W allumés 4 h consomment 0,2 kWh par soir.",
      },
      {
        question: "Comment choisir un éclairage extérieur connecté ?",
        answer: "Vérifiez d'abord l'indice d'étanchéité (IP44 au minimum, IP65 pour un luminaire exposé à la pluie), puis la compatibilité avec votre installation connectée. Les gammes Zigbee comme Philips Hue Outdoor demandent un pont, les modèles Wi-Fi doivent capter le réseau depuis le jardin, et Matter facilite le mélange des marques. Choisissez un blanc chaud (2 700 à 3 000 K), plus agréable et moins gênant pour la faune, et un flux en lumens adapté à l'usage.",
      },
      {
        question: "Faut-il un électricien pour installer un éclairage de jardin ?",
        answer: "Pour du 230 V, c'est fortement conseillé : l'installation doit respecter la norme NF C 15-100, avec protection par un différentiel 30 mA. Les câbles enterrés passent sous gaine, signalés par un grillage avertisseur rouge, et les boîtiers de connexion doivent rester étanches. Les kits basse tension 12 ou 24 V branchés sur une prise extérieure via leur transformateur s'installent en revanche sans électricien. Les luminaires solaires ne demandent aucun raccordement.",
      },
      {
        question: "Mon éclairage extérieur peut-il gêner les voisins ?",
        answer: "Oui, et une lumière intrusive peut être qualifiée de trouble anormal de voisinage, principe inscrit depuis 2024 à l'article 1253 du Code civil. Orientez les projecteurs vers le bas et vers votre terrain, évitez les spots puissants braqués sur une fenêtre et préférez un détecteur de mouvement ou une programmation qui coupe l'éclairage en pleine nuit. Une extinction programmée réduit aussi la consommation et la gêne pour les insectes et les chauves-souris.",
      },
      {
        question: "Pourquoi mes lampes solaires ne s'allument plus ?",
        answer: "Le plus souvent, la batterie est usée ou le panneau ne reçoit plus assez de soleil. Nettoyez le panneau, déplacez la lampe hors de l'ombre et vérifiez l'interrupteur, parfois resté sur arrêt. Si un autre éclairage la touche la nuit, son capteur crépusculaire croit qu'il fait jour. Beaucoup de modèles acceptent une batterie rechargeable de remplacement, à condition de reprendre la même technologie et la même tension. En hiver, une autonomie réduite est normale.",
      },
    ],
    en: [
      {
        question: "Do solar garden lights work in a UK winter?",
        answer: "Yes, but expect much shorter run times and dimmer light from November to February, when days are short and the sun sits low. Place the panel where it gets the most direct sun, ideally facing south, or choose lights with a separate panel on a cable so the lamp itself can stay in the shade. Wipe the panels regularly. For paths, steps or a front door that must be lit every evening, mains or low-voltage wired lights are more reliable.",
      },
      {
        question: "Do I need an electrician to install outdoor lights?",
        answer: "Not for plug-in low-voltage kits, but mains-voltage outdoor wiring should be done by a competent electrician and protected by an RCD. In England, adding a light to an existing circuit outdoors isn’t normally notifiable, but installing a new circuit is notifiable under Part P of the Building Regulations, so use a registered electrician who can self-certify it. Use outdoor-rated cable and fittings, and armoured cable or ducting where it runs underground.",
      },
      {
        question: "What should I look for in smart outdoor lights?",
        answer: "Check the IP rating first, IP44 at minimum and IP65 for fittings exposed to driving rain, then make sure they work with your smart home system. Zigbee ranges such as Philips Hue need a bridge, Wi-Fi lights need a good signal at the bottom of the garden, and Matter makes mixing brands easier. Choose warm white around 2,700–3,000 K, check the lumen output for the job, and point fittings downwards to avoid dazzling neighbours.",
      },
      {
        question: "How much do outdoor LED lights cost to run?",
        answer: "Very little per evening: ten 5 W LED spotlights on for four hours use 0.2 kWh, about 5p at 25p per kWh. Dusk-to-dawn lighting costs much more in winter, when it can stay on for over 15 hours a night in December. Add up the watts, multiply by the hours they’re on and divide by 1,000 to get kWh, then multiply by your unit rate. Motion sensors and schedules that switch off at midnight cut both the bill and the light spilling into neighbours’ gardens.",
      },
      {
        question: "Motion sensor or dusk-to-dawn: which is better for security lighting?",
        answer: "Motion sensors are usually better for security: a light that switches on suddenly draws attention, and it uses far less electricity than one left on all night. Keep low-level dusk-to-dawn lighting for paths and steps, where safety matters more than deterrence. Aim sensors away from the pavement and road to avoid constant triggering, and angle the beam downwards. Badly aimed lights can be investigated by your council as a statutory nuisance under the Environmental Protection Act 1990.",
      },
    ],
    de: [
      {
        question: "Solar oder mit Kabel: Was lohnt sich bei der Außenbeleuchtung?",
        answer: "Solarleuchten lohnen sich für Deko und Wegmarkierungen ohne Bauarbeiten, Kabelleuchten für Eingang, Terrasse und Einfahrt, die jeden Abend zuverlässig hell sein müssen. Im Winter liefern Solarleuchten in Mitteleuropa oft nur wenige Stunden schwaches Licht. Kabelgebundene Leuchten mit 230 V oder 12/24 V lassen sich per App oder Zeitplan steuern und verbrauchen wenig: Zehn LED-Spots mit je 5 W ergeben über 4 Stunden 0,2 kWh pro Abend.",
      },
      {
        question: "Darf ich Außenbeleuchtung selbst anschließen?",
        answer: "12- oder 24-Volt-Systeme mit Steckernetzteil dürfen Sie selbst verlegen, Arbeiten an der 230-V-Hausinstallation gehören in Deutschland in die Hände eines eingetragenen Elektrofachbetriebs. Für Außenstromkreise ist ein Fehlerstromschutzschalter mit 30 mA vorgeschrieben, Erdkabel brauchen eine geeignete Ausführung und Schutz vor Beschädigung. In Österreich und der Schweiz gelten eigene Regeln für Elektroarbeiten, auch dort ist eine Fachkraft der sichere Weg. Solarleuchten benötigen keinen Anschluss.",
      },
      {
        question: "Was tun, wenn die Außenbeleuchtung den Nachbarn blendet?",
        answer: "Richten Sie die Leuchte nach unten und auf Ihr eigenes Grundstück aus, denn wesentliche Lichtbeeinträchtigungen kann der Nachbar in Deutschland nach §§ 906, 1004 BGB abwehren. Abhilfe schaffen Bewegungsmelder mit kurzer Nachlaufzeit, Abschirmungen und Zeitpläne, die nachts abschalten. Warmweißes Licht bis etwa 3.000 Kelvin und nach unten gerichtete Leuchten schonen außerdem Insekten. Klären Sie Beschwerden am besten im Gespräch, bevor ein Streit entsteht.",
      },
      {
        question: "Zigbee, WLAN oder Matter: welche smarte Außenbeleuchtung passt?",
        answer: "Wenn Sie schon ein Zigbee-System wie Philips Hue nutzen, bleiben Sie dabei; für einzelne Leuchten ohne Bridge reicht WLAN, und Matter erleichtert das Kombinieren verschiedener Marken. Entscheidend ist der Empfang im Garten: Zigbee bildet ein Netz über mehrere Leuchten, WLAN braucht ein gutes Signal bis zur Leuchte. Achten Sie außerdem auf Schutzart IP44, besser IP65 bei direktem Regen, und auf den Lichtstrom in Lumen.",
      },
      {
        question: "Warum gehen Solarleuchten im Winter früh aus?",
        answer: "Weil das Solarmodul im Winter zu wenig Licht bekommt, um den Akku für die langen Nächte zu laden. Stellen Sie die Leuchte so auf, dass das Modul möglichst nach Süden zeigt, und reinigen Sie es regelmäßig. Leuchten mit abgesetztem Modul am Kabel helfen, wenn der Leuchtort im Schatten liegt. Hält der Akku auch im Sommer nicht mehr, ist er verschlissen: Viele Modelle nehmen einen Ersatzakku gleicher Bauart und Spannung.",
      },
    ],
    es: [
      {
        question: "¿Luces solares o con cable para el jardín?",
        answer: "En buena parte de España las solares funcionan bien para balizar caminos y decorar, pero para la entrada, el porche o el garaje conviene luz con cable. Una luz solar depende de las horas de sol y pierde autonomía en invierno o si queda a la sombra de un porche o una pérgola. La iluminación con cable, a 230 V o de baja tensión a 12/24 V, da una luz constante y más potente, y se puede programar desde una app.",
      },
      {
        question: "¿Cuánto gasta la iluminación exterior LED?",
        answer: "Muy poco: diez focos LED de 5 W encendidos 4 horas gastan 0,2 kWh, unos 3 céntimos con un precio de ejemplo de 0,15 €/kWh. Si tienes una tarifa con discriminación horaria, la luz que dejes encendida desde medianoche cae en el periodo valle, el más barato. Lo que dispara el gasto son los focos halógenos antiguos o una luz que se queda encendida toda la noche sin necesidad: un detector de movimiento o un horario de apagado lo evitan.",
      },
      {
        question: "¿Qué luces exteriores inteligentes elegir?",
        answer: "Mira, por este orden, la protección (IP65 si van a la intemperie), la compatibilidad con tu sistema y la temperatura de color. Las gamas Zigbee como Philips Hue necesitan una pasarela, las wifi deben recibir buena señal en el jardín y Matter facilita mezclar marcas con Alexa, Google Home o Apple Home. Una luz blanca cálida, de 2.700 a 3.000 K, resulta más agradable en una terraza. Los modelos con sensor de movimiento integrado, además, disuaden.",
      },
      {
        question: "¿Hay normas sobre la luz exterior de una vivienda?",
        answer: "Sí, además de las ordenanzas municipales, algunas comunidades autónomas, como Cataluña o Andalucía, regulan la contaminación lumínica. En Canarias, la llamada Ley del Cielo protege los observatorios de La Palma y Tenerife y limita el alumbrado exterior. Si vives en un piso o una urbanización, los estatutos de la comunidad pueden regular las luces en fachadas y zonas comunes. En cualquier caso, orienta los focos hacia el suelo y evita deslumbrar a los vecinos.",
      },
      {
        question: "¿Por qué mis luces solares duran poco por la noche?",
        answer: "Normalmente porque la batería ya está gastada o el panel no recibe suficientes horas de sol directo. Limpia el polvo del panel, que en verano se acumula rápido, y aleja la lámpara de la sombra de árboles o toldos. Si cerca hay otra luz encendida, el sensor crepuscular puede confundirse y no encenderla. Muchas admiten una batería recargable nueva del mismo tipo y voltaje, lo que sale más barato que cambiar la lámpara.",
      },
    ],
    it: [
      {
        question: "Luci solari da giardino o illuminazione cablata: cosa conviene?",
        answer: "Le solari convengono per segnapasso e decorazioni senza lavori; per ingresso, terrazzo e cancello, che vanno illuminati tutte le sere, meglio un impianto cablato. Il rendimento delle luci solari dipende dal sole e cala d'inverno o all'ombra di un pergolato. Le luci cablate, a 230 V o in bassa tensione 12/24 V, danno una luce costante e si programmano dall'app. Al Nord, con le giornate corte e nebbiose d'inverno, la differenza si nota di più.",
      },
      {
        question: "Quanto consuma l'illuminazione esterna a LED?",
        answer: "Poco: dieci faretti LED da 5 W accesi per 4 ore consumano 0,2 kWh a sera. Moltiplica per il prezzo del kWh in bolletta e per le sere dell'anno. Con una tariffa bioraria, le ore serali e notturne rientrano nella fascia F23, più economica della F1. Un sensore di movimento o un orario di spegnimento a mezzanotte riducono consumi e luce dispersa verso il cielo e i vicini.",
      },
      {
        question: "Ci sono leggi sull'inquinamento luminoso per le luci del giardino?",
        answer: "Sì, molte regioni hanno leggi contro l'inquinamento luminoso, come la Lombardia e il Veneto, e possono riguardare anche gli impianti privati. In genere chiedono apparecchi che non disperdano luce verso l'alto e, per i nuovi impianti, il rispetto di requisiti tecnici precisi. Verifica la legge della tua regione e l'eventuale regolamento comunale. Anche senza obblighi, faretti puntati verso il basso e luce calda evitano liti con i vicini.",
      },
      {
        question: "Come scegliere le luci da esterno smart?",
        answer: "Guarda prima il grado di protezione, almeno IP44 e meglio IP65 se la luce prende la pioggia, poi la compatibilità con il tuo sistema smart. Le linee Zigbee come Philips Hue richiedono un bridge, quelle Wi-Fi devono ricevere bene il segnale in giardino, e Matter permette di usare marche diverse con Alexa, Google Home o Apple Casa. Scegli i lumen in base all'uso e una luce calda tra 2.700 e 3.000 K.",
      },
      {
        question: "Le luci solari non si accendono più: perché?",
        answer: "Di solito la batteria è esaurita o il pannello non riceve abbastanza sole. Pulisci il pannello, sposta la luce in un punto più soleggiato e controlla l'interruttore, che a volte è rimasto su spento. Se vicino c'è un lampione o un'altra luce, il sensore crepuscolare crede che sia giorno. Molti modelli accettano una batteria ricaricabile di ricambio, purché dello stesso tipo e della stessa tensione. D'inverno un'autonomia più breve è normale.",
      },
    ],
    nl: [
      {
        question: "12 volt tuinverlichting of zonne-energie: wat is beter?",
        answer: "Voor verlichting die elke avond betrouwbaar moet branden is een 12 volt systeem beter; solar is prima voor sfeer en wegmarkering zonder graafwerk. Een 12 volt set sluit je via een transformator aan op een buitenstopcontact en leg je zelf aan, zonder netspanning in de tuin. Zonnelampen zijn afhankelijk van daglicht en branden in de Nederlandse winter vaak maar kort. Veel 12 volt systemen zijn uit te breiden met een slimme timer of app.",
      },
      {
        question: "Welke slimme buitenverlichting kies je?",
        answer: "Kies een systeem dat aansluit op wat je al hebt: Philips Hue (Zigbee met bridge), KlikAanKlikUit of wifi-lampen, eventueel via Matter gecombineerd. Controleer de beschermingsgraad, minimaal IP44 en IP65 voor armaturen in de regen, en of het signaal je tuin haalt. Warm wit van 2700 tot 3000 K oogt prettiger en stoort dieren minder. Een bewegingssensor zorgt dat het licht alleen brandt als het nodig is.",
      },
      {
        question: "Hoeveel stroom verbruikt tuinverlichting?",
        answer: "Weinig: tien ledspots van 5 watt die 4 uur branden verbruiken samen 0,2 kWh per avond. Vermenigvuldig met je kWh-prijs en het aantal avonden: bij € 0,30 per kWh is dat 6 cent per avond. Wie van zonsondergang tot zonsopkomst laat branden, verbruikt in december meer dan drie keer zoveel. Een schemerschakelaar met uitschakeltijd of een bewegingsmelder houdt het verbruik laag.",
      },
      {
        question: "Mag je zelf buitenverlichting op 230 volt aanleggen?",
        answer: "Ja, dat mag, maar de installatie moet voldoen aan NEN 1010 en beveiligd zijn met een aardlekschakelaar. Gebruik grondkabel die geschikt is voor ingraven, leg die diep genoeg en beschermd, en kies armaturen en lasdozen die waterdicht zijn. Twijfel je, laat het dan door een erkend installateur doen: fouten met netspanning in een natte tuin zijn gevaarlijk. Met een 12 volt systeem of zonnelampen vermijd je dat risico helemaal.",
      },
      {
        question: "Zonnelampen gaan niet meer aan: wat kun je doen?",
        answer: "Vaak is de oplaadbare batterij versleten of krijgt het paneel te weinig direct zonlicht. Maak het paneel schoon, zet de lamp uit de schaduw en kijk of de schakelaar aanstaat. Brandt er in de buurt een andere lamp, dan denkt de schemersensor dat het dag is. Veel modellen nemen een nieuwe batterij van hetzelfde type en dezelfde spanning. In de winter is een kortere brandduur normaal.",
      },
    ],
    pl: [
      {
        question: "Czy lampy solarne działają zimą w Polsce?",
        answer: "Działają, ale zimą świecą krócej i słabiej, bo krótki dzień i niskie słońce nie wystarczają do pełnego naładowania akumulatora. Panel warto skierować na południe i usuwać z niego śnieg oraz brud. Pomocne są modele z osobnym panelem na przewodzie, który można ustawić w słońcu, nawet gdy lampa stoi w cieniu. Przy wejściu, schodach i podjeździe, które trzeba oświetlać każdego wieczoru, pewniejsze są lampy zasilane z sieci.",
      },
      {
        question: "Oświetlenie ogrodowe 12 V czy 230 V?",
        answer: "Do samodzielnego montażu lepsze jest 12 V, a 230 V wybiera się przy dużej mocy lub długich odcinkach i zleca elektrykowi. System 12 V podłącza się przez zasilacz do gniazdka zewnętrznego, więc w ziemi nie ma napięcia sieciowego. Instalacja 230 V w ogrodzie wymaga kabla ziemnego, wyłącznika różnicowoprądowego 30 mA i szczelnych puszek, dlatego powinien ją wykonać elektryk z uprawnieniami. Obydwoma systemami można sterować z aplikacji.",
      },
      {
        question: "Jakie inteligentne oświetlenie zewnętrzne wybrać?",
        answer: "Najpierw sprawdź stopień szczelności – co najmniej IP44, a w miejscach narażonych na deszcz IP65 – a potem zgodność z systemem smart home. Lampy Zigbee, np. Philips Hue, wymagają mostka; lampy Wi-Fi, często obsługiwane przez aplikację Tuya, potrzebują dobrego zasięgu w ogrodzie, a Matter ułatwia łączenie urządzeń różnych marek. Ciepła barwa światła 2700–3000 K jest przyjemniejsza dla oka i mniej szkodzi owadom. Czujnik ruchu lub zmierzchu ogranicza zużycie prądu.",
      },
      {
        question: "Ile prądu zużywa oświetlenie ogrodu?",
        answer: "Niewiele: dziesięć lamp LED po 5 W świecących przez 4 godziny zużywa 0,2 kWh, czyli około 20 groszy przy przykładowej cenie 1 zł za kWh. W grudniu, gdy lampy świecą od zmierzchu do świtu nawet kilkanaście godzin, koszt rośnie kilkukrotnie. W taryfie G12 prąd jest tańszy w części godzin nocnych. Czujnik ruchu i harmonogram wyłączający światło o północy to najprostszy sposób na niższy rachunek.",
      },
      {
        question: "Czy oświetlenie ogrodu może przeszkadzać sąsiadom?",
        answer: "Tak, a jeśli światło zakłóca sąsiadowi korzystanie z jego nieruchomości ponad przeciętną miarę, może on powołać się na przepisy o immisjach (art. 144 Kodeksu cywilnego). Reflektory warto kierować w dół i na własną działkę, a mocne lampy wyposażyć w czujnik ruchu z krótkim czasem świecenia. Wyłączanie oświetlenia w nocy według harmonogramu obniża też rachunek i chroni owady oraz nietoperze.",
      },
    ],
    sv: [
      {
        question: "Solcellslampor eller elansluten utomhusbelysning: vad ska jag välja?",
        answer: "Solcellslampor för att markera en gångväg eller som dekoration utan installation, elansluten belysning för att verkligen lysa upp altanen, entrén eller grinden året runt. En solcellslampa är beroende av solen: på vintern blir lystiden mycket kortare, och ljusstyrkan är ändå blygsam. Elansluten belysning, på 230 V eller lågvolt 12/24 V, ger ett stabilt ljus och styrs enkelt från en app. Den drar lite el: 10 LED-spotar på 5 W som lyser i 4 timmar förbrukar 0,2 kWh per kväll.",
      },
      {
        question: "Vad ska jag tänka på när jag väljer smart utomhusbelysning?",
        answer: "Kontrollera först kapslingsklassen (minst IP44, IP65 för armaturer som utsätts för regn) och sedan att belysningen fungerar med ditt smarta hem. Zigbee-serier som Philips Hue Outdoor kräver en brygga, wifi-modeller måste nå nätverket ute i trädgården och Matter gör det enklare att blanda märken. Välj varmvitt ljus (2 700–3 000 K), som är behagligare och stör djurlivet mindre, och en ljusstyrka i lumen som passar det du vill lysa upp.",
      },
      {
        question: "Behöver jag en elektriker för att installera trädgårdsbelysning?",
        answer: "För 230 V bör du anlita en behörig elektriker. Installationen bör skyddas av en jordfelsbrytare på 30 mA, nedgrävda kablar läggs i skyddsrör och kopplingsdosorna måste vara vattentäta. Lågvoltssatser på 12 eller 24 V som ansluts till ett utomhusuttag via sin transformator kan du däremot installera själv. Solcellslampor behöver inte anslutas alls.",
      },
      {
        question: "Rörelsesensor eller skymningsrelä: vad är bäst för utomhusbelysningen?",
        answer: "För säkerhetsbelysning är en rörelsesensor oftast bäst: ljuset som tänds plötsligt drar uppmärksamhet och förbrukar mycket mindre el än en lampa som lyser hela natten. Låt en svag belysning lysa från skymning till gryning vid gångar och trappor, där det viktigaste är att man ser var man går. Rikta strålkastarna nedåt och mot din egen tomt, aldrig mot grannens fönster, och låt ett schema släcka mitt i natten. Det minskar både elförbrukningen och störningen för grannar, insekter och fladdermöss.",
      },
      {
        question: "Varför tänds inte mina solcellslampor längre?",
        answer: "Oftast är batteriet slitet eller så får panelen inte längre tillräckligt med sol. Rengör panelen, flytta lampan ur skuggan och kontrollera att strömbrytaren inte står i läge av. Lyser en annan lampa på den på natten tror skymningssensorn att det är dag. I många modeller går det att byta till ett nytt laddningsbart batteri, så länge det har samma batterityp och spänning som originalet. På vintern är det normalt att lystiden blir kortare.",
      },
    ],
    us: [
      {
        question: "Do solar outdoor lights work in winter?",
        answer: "Yes, but expect much shorter run times and dimmer light from November through February, when days are short and the sun sits low. Place the panel where it gets the most direct sun, ideally facing south, or choose lights with a separate panel on a cable so the light itself can stay in the shade. Wipe the panels regularly. For paths, steps or a front door that must be lit every evening, hardwired or low-voltage lights are more reliable.",
      },
      {
        question: "Do I need an electrician to install outdoor lights?",
        answer: "Not for plug-in low-voltage kits, but 120 V outdoor wiring should be done by a licensed electrician and protected by a GFCI. Adding a new outdoor circuit is a job to hire out, and you should check whether your area requires a permit. Use outdoor-rated cable and fixtures, with direct-burial cable or conduit where it runs underground.",
      },
      {
        question: "What should I look for in smart outdoor lights?",
        answer: "Check the IP rating first, IP44 at a minimum and IP65 for fixtures exposed to driving rain, then make sure they work with your smart home system. Zigbee ranges such as Philips Hue need a bridge, Wi-Fi lights need a strong signal at the back of the yard, and Matter makes it easier to mix brands. Choose warm white around 2,700–3,000 K, check the lumen output for the job, and aim fixtures downward so you don't dazzle the neighbors.",
      },
      {
        question: "How much do outdoor LED lights cost to run?",
        answer: "Very little per evening: ten 5 W LED spotlights on for four hours use 0.2 kWh, about 4 cents at the US average residential rate of 18.16 cents per kWh (EIA, August 2026). Dusk-to-dawn lighting costs much more in winter, when it can stay on for well over 12 hours a night in December. Add up the wattage, then multiply by the hours and by the rate on your utility bill. Motion sensors and schedules that turn the lights off at midnight cut both the bill and the light spilling into your neighbors' yards.",
      },
      {
        question: "Motion sensor or dusk-to-dawn: which is better for security lighting?",
        answer: "Motion sensors are usually better for security: a light that turns on suddenly draws attention, and it uses far less electricity than one left on all night. Keep low-level dusk-to-dawn lighting for paths and steps, where safety matters more than deterrence. Aim sensors away from the sidewalk and street to avoid constant triggering, and angle the beam downward. Glare into a neighbor's windows is a common source of disputes, so check any local or HOA lighting rules.",
      },
    ],
    ca: [
      {
        question: "Do solar outdoor lights work in winter?",
        answer: "Yes, but expect much shorter run times and dimmer light from November to February, when days are short and the sun sits low, and a panel covered in snow won't charge at all. Place the panel where it gets the most direct sun, ideally facing south, or choose lights with a separate panel on a cable so the light itself can stay in the shade. Wipe or brush off the panels regularly. For paths, steps or a front door that must be lit every evening, hardwired or low-voltage wired lights are more reliable.",
      },
      {
        question: "Do I need an electrician to install outdoor lights?",
        answer: "Not for plug-in low-voltage kits, but 120 V outdoor wiring should be done by a licensed electrician and protected by a GFCI. Electrical work rules, including when you need a permit, are set by each province and territory, so check before you start. Use outdoor-rated cable and fixtures, and conduit or cable rated for direct burial where it runs underground.",
      },
      {
        question: "What should I look for in smart outdoor lights?",
        answer: "Check the IP rating first, IP44 at minimum and IP65 for fixtures exposed to driving rain, then make sure they work with your smart home system. Zigbee ranges such as Philips Hue need a bridge, Wi-Fi lights need a good signal at the back of the yard, and Matter makes mixing brands easier. Choose warm white around 2,700–3,000 K, check the lumen output for the job, and point fixtures downward to avoid glare for your neighbours.",
      },
      {
        question: "How much do outdoor LED lights cost to run?",
        answer: "Very little per evening: ten 5 W LED spotlights on for four hours use 0.2 kWh. Dusk-to-dawn lighting uses much more in winter, when it can stay on for over 15 hours a night in December. Add up the wattage, multiply by hours and by the rate per kWh on your bill, which depends on your province and utility. Motion sensors and schedules that switch off at midnight cut both the bill and the light spilling into neighbours' yards.",
      },
      {
        question: "Motion sensor or dusk-to-dawn: which is better for security lighting?",
        answer: "Motion sensors are usually better for security: a light that switches on suddenly draws attention, and it uses far less electricity than one left on all night. Keep low-level dusk-to-dawn lighting for paths and steps, where safety matters more than deterrence. Aim sensors away from the sidewalk and street to avoid constant triggering, and angle the beam downward. Badly aimed lights annoy neighbours, and some municipalities have bylaws on light trespass.",
      },
    ],
  },
  "portails-garages": {
    fr: [
      {
        question: "Mon portail électrique s'ouvre mais ne se ferme pas : que faire ?",
        answer: "Vérifiez d'abord les cellules photoélectriques : sales, désalignées ou masquées par une plante, elles bloquent la fermeture par sécurité, alors que l'ouverture fonctionne. Nettoyez les deux optiques, retirez tout obstacle et regardez le voyant du récepteur, qui indique souvent l'alignement. Contrôlez aussi les piles des cellules sans fil, les butées de fin de course et l'éventuel code d'erreur de la carte électronique. Si le problème persiste, appelez l'installateur plutôt que de shunter une sécurité.",
      },
      {
        question: "Comment rendre connecté un portail ou une porte de garage existants ?",
        answer: "Le plus simple est d'ajouter un module Wi-Fi relié à l'entrée bouton-poussoir, ou contact sec, de la motorisation existante. Certaines marques proposent leur propre box, comme Somfy avec TaHoma, tandis que des modules universels s'adaptent à la plupart des moteurs. Choisissez un modèle avec capteur de position, indispensable pour savoir à distance si c'est ouvert ou fermé, et vérifiez la couverture Wi-Fi au niveau du portail ainsi que la compatibilité avec Alexa, Google Home ou Apple Maison.",
      },
      {
        question: "Est-il sûr d'ouvrir son portail à distance avec un smartphone ?",
        answer: "Oui, si le compte est bien protégé et si la motorisation garde ses sécurités : cellules photoélectriques et détection d'obstacle. Activez la double authentification sur l'appli, partagez des accès invités temporaires plutôt que vos identifiants et gardez les notifications d'ouverture. Ne fermez pas une porte de garage hors de votre vue sans ces sécurités en place, car un enfant ou un animal peut se trouver dessous. L'ouverture automatique par géolocalisation est pratique mais peut se déclencher trop tôt.",
      },
      {
        question: "Quelles obligations d'entretien pour une porte de garage automatique ?",
        answer: "Pour une porte de parking collectif en immeuble d'habitation, un contrat d'entretien écrit prévoyant deux visites par an est obligatoire, avec un livret où chaque intervention est consignée. Cette règle découle du Code de la construction et de l'habitation et de l'arrêté du 12 novembre 1990. En maison individuelle, la portée de cette obligation est moins nette : demandez conseil à votre installateur. Un contrôle annuel des cellules, de la détection d'obstacle et du débrayage manuel reste conseillé.",
      },
      {
        question: "Que faire si le portail ne marche plus pendant une coupure de courant ?",
        answer: "Débrayez la motorisation avec la clé de déverrouillage fournie, puis manœuvrez le portail à la main. Gardez cette clé à un endroit connu de toute la famille, car sans elle le portail reste bloqué. Pour un garage sans autre accès, un déverrouillage extérieur ou une batterie de secours, proposée en option par de nombreux fabricants, évite de rester coincé dehors. Au retour du courant, réembrayez et laissez la motorisation refaire son apprentissage si la notice le demande.",
      },
    ],
    en: [
      {
        question: "Can I make my existing garage door opener smart?",
        answer: "Usually yes: an add-on controller wires into the opener’s push-button terminals and adds app control without replacing the motor. Some brands sell their own add-on, such as myQ for Chamberlain and LiftMaster openers, while universal controllers fit most motors with a dry-contact input. Choose one with a door position sensor so the app shows whether the door is open or closed, and check your Wi-Fi reaches the garage. Older openers without push-button terminals may need replacing.",
      },
      {
        question: "Up-and-over, roller or sectional: which garage door suits a smart opener?",
        answer: "All three can be motorised and made smart; the choice depends on driveway space, insulation and the size of the opening. Canopy up-and-over doors swing partly outwards, so you need clear space in front, while roller and sectional doors open straight up and suit short driveways. Sectional doors usually insulate best, which matters for an integral garage. Roller doors leave the garage ceiling clear but need space above the opening for the drum.",
      },
      {
        question: "Is a smart garage door opener secure?",
        answer: "Yes, as long as you secure the app account and keep the opener’s own safety features working. Use a strong password with two-factor authentication, share temporary guest access instead of your login, and keep open-and-close notifications on. Modern remotes use rolling codes, which makes copying the signal much harder. Don’t close the door remotely when you can’t see it unless safety photocells and obstacle detection are fitted and working.",
      },
      {
        question: "Why has my garage door remote stopped working?",
        answer: "Most often the battery is flat or the remote has lost its pairing with the opener. Replace the battery, then re-pair the remote using the learn button on the motor unit, following the manual. If the range has dropped suddenly, check for new LED bulbs or other devices near the opener, as some cause radio interference. A replacement remote must match the opener’s frequency and code system; rolling-code remotes are paired at the motor rather than copied.",
      },
      {
        question: "Do I need an electrician to fit a garage door opener?",
        answer: "Not if it plugs into an existing socket near the motor; running a new circuit to the garage is a job for a registered electrician. In England, a new circuit is notifiable building work under Part P, which a registered electrician can self-certify. Garage wiring should be RCD-protected. Before fitting, make sure the door is well balanced and the opener has a manual release, so you can still open it during a power cut.",
      },
    ],
    de: [
      {
        question: "Kann ich meinen vorhandenen Garagentorantrieb smart nachrüsten?",
        answer: "Meistens ja: Ein Nachrüstmodul wird an den Tastereingang des Antriebs angeschlossen und macht ihn per App steuerbar, ohne den Motor zu tauschen. Viele Hersteller bieten eigene Module an, universelle Lösungen funktionieren mit den meisten Antrieben, die einen potenzialfreien Kontakt haben. Wählen Sie ein Modell mit Torpositionssensor, damit die App anzeigt, ob das Tor offen oder zu ist. Prüfen Sie außerdem, ob das WLAN in der Garage ankommt.",
      },
      {
        question: "Ist das Öffnen per App sicher, auch wenn ich das Tor nicht sehe?",
        answer: "Öffnen ist meist unkritisch, Schließen ohne Sichtkontakt sollten Sie nur bei funktionierender Lichtschranke und Hinderniserkennung erlauben. Für den Betrieb ohne Sicht auf das Tor sehen die Sicherheitsnormen zusätzliche Schutzeinrichtungen vor, weil sich Kinder oder Tiere im Torbereich aufhalten können. Sichern Sie das App-Konto mit Zwei-Faktor-Anmeldung, vergeben Sie zeitlich begrenzte Gastzugänge und lassen Sie sich jede Öffnung melden. Moderne Handsender nutzen Rolling Code und sind schwer zu kopieren.",
      },
      {
        question: "Garagentor-Handsender funktioniert nicht mehr: was tun?",
        answer: "Wechseln Sie zuerst die Batterie und lernen Sie den Handsender anschließend über die Lerntaste am Antrieb neu an. Lässt die Reichweite plötzlich nach, können neue LED-Lampen oder Funkgeräte in der Nähe stören. Ein Ersatzsender muss zur Frequenz des Antriebs passen, meist 433 oder 868 MHz, und zum Codesystem: Rolling-Code-Sender werden am Antrieb angelernt, nicht kopiert. Eine App-Steuerung über WLAN ist eine bequeme Ergänzung.",
      },
      {
        question: "Wie viel Strom verbraucht ein Garagentorantrieb im Standby?",
        answer: "Meist mehr im Standby als beim Fahren: Bei 3 W Dauerleistung sind das rund 26 kWh im Jahr, also etwa 9 € bei 0,35 € pro kWh. Eine Torfahrt dauert nur Sekunden und fällt kaum ins Gewicht. Den Standbywert finden Sie im Datenblatt; ein WLAN-Nachrüstmodul kommt mit wenigen Watt hinzu. Einige Antriebe haben einen Energiesparmodus, der Steuerung und Beleuchtung zwischen den Fahrten weitgehend abschaltet.",
      },
      {
        question: "Was passiert bei Stromausfall mit dem Garagentor?",
        answer: "Das Tor bleibt stehen, lässt sich aber über die Notentriegelung von Hand öffnen. Bei den meisten Antrieben ist das ein Seilzug innen an der Führungsschiene. Hat die Garage keinen zweiten Zugang, brauchen Sie eine Notentriegelung von außen, etwa über ein Schloss im Torblatt, sonst kommen Sie bei Stromausfall nicht hinein. Ein Notstromakku, den viele Hersteller als Zubehör anbieten, hält den Betrieb für einige Fahrten aufrecht.",
      },
    ],
    es: [
      {
        question: "¿Por qué ha dejado de funcionar el mando de la puerta del garaje?",
        answer: "Lo más habitual es que se haya agotado la pila o que el mando se haya desprogramado. Cambia la pila y, si sigue sin abrir, vuelve a programarlo con el botón de aprendizaje del receptor, siguiendo el manual. En garajes comunitarios, el alta de mandos nuevos suele gestionarla el administrador o la empresa de mantenimiento. Si el alcance ha bajado de golpe, revisa si hay bombillas LED o aparatos nuevos cerca del receptor que puedan causar interferencias.",
      },
      {
        question: "¿Puedo poner un módulo wifi en la puerta del garaje de la comunidad?",
        answer: "Solo con permiso de la comunidad de propietarios, porque la puerta y su motor son elementos comunes. Habla con el administrador: algunas comunidades aceptan un módulo conectado al receptor, otras prefieren mantener solo los mandos para controlar quién entra. Si te lo autorizan, la instalación debería hacerla la empresa que mantiene la puerta, para no afectar a la garantía ni a las fotocélulas. En una vivienda unifamiliar puedes instalarlo en tu propio motor.",
      },
      {
        question: "¿Cómo abrir la puerta del garaje con el móvil?",
        answer: "Añade un módulo wifi conectado a la entrada de pulsador del motor; así controlas la puerta desde una app sin cambiar el motor. Elige un modelo con sensor de posición para saber si la puerta ha quedado abierta, y comprueba que la señal wifi llega al garaje. Muchos se integran con Alexa, Google Home o Siri. Activa la verificación en dos pasos y comparte accesos temporales en lugar de tu contraseña.",
      },
      {
        question: "¿Copiar el mando del garaje o comprar uno original?",
        answer: "Si tu mando es de código fijo, una copia universal funciona; si es de código variable, necesitas un mando compatible programado en el propio motor. Lo puedes saber por la marca y el modelo del mando o preguntando a quien instaló la puerta. Las copias de código fijo son baratas y rápidas, pero ese sistema es también el más fácil de clonar para un intruso. En garajes comunitarios con código variable, pide el mando al administrador o a la empresa de mantenimiento.",
      },
      {
        question: "¿Cuánto consume el motor de una puerta de garaje?",
        answer: "Consume más en reposo que abriendo: 3 W en espera todo el año son unos 26 kWh, unos 4 € con un precio de ejemplo de 0,15 €/kWh. Cada maniobra dura unos segundos y apenas cuenta. El consumo en espera aparece en la ficha técnica, y un módulo wifi añadido suma pocos vatios. En garajes comunitarios, este gasto se reparte entre los vecinos junto con la luz de las zonas comunes.",
      },
    ],
    it: [
      {
        question: "Come rendere smart un cancello automatico esistente?",
        answer: "Basta collegare un modulo Wi-Fi o GSM al contatto pulito della centralina del cancello, senza cambiare il motore. Il modulo replica il pulsante di apertura e ti permette di comandare il cancello dall'app, con notifiche e accessi per gli ospiti. Scegli un modello con sensore di posizione se vuoi sapere da remoto se il cancello è chiuso, e verifica la copertura Wi-Fi o il segnale cellulare al cancello.",
      },
      {
        question: "Apricancello GSM o Wi-Fi: quale conviene?",
        answer: "Il Wi-Fi conviene se la rete arriva al cancello e vuoi un'app con notifiche; il GSM se il cancello è lontano da casa o vuoi aprire con uno squillo. L'apricancello GSM usa una SIM: riconosce i numeri autorizzati e apre con una chiamata non risposta, quindi gratuita, senza internet, ma la SIM va tenuta attiva. Il Wi-Fi non ha costi ricorrenti e permette accessi temporanei e cronologia. Un ripetitore in giardino risolve molti problemi di copertura.",
      },
      {
        question: "Il cancello automatico si apre ma non si chiude: perché?",
        answer: "Spesso c'entrano le fotocellule: sporche, disallineate o coperte da un ostacolo, bloccano la chiusura per sicurezza. Pulisci le lenti, togli piante o oggetti dal fascio e controlla il LED del ricevitore, che spesso segnala l'allineamento. Verifica anche le batterie delle fotocellule senza fili e i finecorsa. Se il problema resta, chiama l'installatore: escludere una sicurezza per far chiudere il cancello è pericoloso.",
      },
      {
        question: "Serve il permesso del condominio per un apricancello smart?",
        answer: "Sì, se il cancello è condominiale: è una parte comune e qualsiasi intervento sulla centralina va concordato con l'amministratore. Alcuni condomini preferiscono gestire gli accessi solo con i telecomandi, altri accettano un modulo installato dalla ditta di manutenzione. Se il cancello è tuo, puoi installarlo liberamente, seguendo le istruzioni della centralina e senza toccare fotocellule e dispositivi di sicurezza. Ricorda di revocare gli accessi digitali a chi non ne ha più bisogno.",
      },
      {
        question: "Si può duplicare il telecomando del cancello?",
        answer: "Sì: se è a codice fisso basta un duplicatore universale, se è a codice variabile serve un telecomando compatibile da memorizzare sulla ricevente. Per capire il tipo, guarda marca e modello sul retro del telecomando o chiedi all'installatore. I duplicatori a codice fisso sono economici, ma quel sistema è anche il più facile da clonare. Per un cancello condominiale, chiedi il telecomando all'amministratore, che di solito tiene l'elenco dei codici.",
      },
    ],
    nl: [
      {
        question: "Afstandsbediening van de poort kapot: wat nu?",
        answer: "Vervang eerst de batterij en koppel de afstandsbediening daarna opnieuw via de leerknop op de motor. Werkt hij dan nog niet, koop dan een exemplaar dat past bij de frequentie, meestal 433 of 868 MHz, en bij het codesysteem van je motor. Afstandsbedieningen met vaste code kun je laten kopiëren, rolling code moet je op de motor aanleren. Een wifi-module op de poortsturing maakt van je telefoon een extra bediening.",
      },
      {
        question: "Kun je een bestaande garagedeur of poort slim maken?",
        answer: "Ja, meestal met een wifi-module die je op de drukknopingang van de bestaande motor aansluit. Daarmee bedien je de deur via een app, krijg je meldingen en geef je tijdelijk toegang aan bezoek. Kies een module met positiesensor, zodat je ziet of de deur echt dicht is, en controleer of je wifi tot in de garage reikt. Oudere motoren zonder drukknopingang moet je soms vervangen.",
      },
      {
        question: "Is een slimme garagedeuropener veilig tegen inbraak?",
        answer: "Ja, als je het app-account goed beveiligt en de deur zelf mechanisch degelijk is. Zet tweestapsverificatie aan, deel tijdelijke gasttoegang in plaats van je wachtwoord en laat je waarschuwen bij elke opening. Moderne afstandsbedieningen gebruiken rolling code en zijn lastig te kopiëren. Sluit de deur niet op afstand zonder zicht als er geen fotocel en obstakeldetectie zijn: een kind of huisdier kan eronder staan.",
      },
      {
        question: "Kanteldeur, roldeur of sectionaaldeur: welke past bij een elektrische opener?",
        answer: "Alle drie zijn te automatiseren; een sectionaaldeur isoleert meestal het best en een roldeur past bij weinig ruimte. Een kanteldeur zwaait deels naar buiten, dus je hebt vrije ruimte vóór de garage nodig. Sectionaal- en roldeuren gaan recht omhoog en passen bij een korte oprit. Bij een inpandige garage is de isolatie van een sectionaaldeur een duidelijk voordeel. Kijk bij een roldeur of er boven de opening plek is voor de rol.",
      },
      {
        question: "Hoeveel stroom verbruikt een elektrische poort of garagedeur?",
        answer: "Vooral in stand-by: een motor die continu 3 watt trekt, verbruikt zo'n 26 kWh per jaar. Bij € 0,30 per kWh is dat ongeveer € 8 per jaar; het openen en sluiten zelf duurt seconden en telt nauwelijks mee. Het stand-byverbruik staat in de specificaties. Bij een stroomstoring ontgrendel je de motor met de noodontgrendeling en beweeg je de deur of poort met de hand.",
      },
    ],
    pl: [
      {
        question: "Jak sterować bramą wjazdową z telefonu?",
        answer: "Wystarczy podłączyć moduł Wi-Fi lub GSM do wejścia przycisku w centrali sterującej – samego napędu nie trzeba wymieniać. Producenci automatyki, na przykład Nice czy Somfy, oferują własne moduły, a uniwersalne działają z większością central. Warto wybrać model z czujnikiem położenia, który pokaże w aplikacji, czy brama jest zamknięta. Wersja GSM przyda się, gdy Wi-Fi nie sięga do bramy.",
      },
      {
        question: "Pilot do bramy nie działa – co sprawdzić?",
        answer: "Najpierw baterię, a potem to, czy centrala nadal rozpoznaje pilota. Po wymianie baterii pilota można ponownie zaprogramować przyciskiem w centrali lub sekwencją z instrukcji. Nowy pilot musi działać na tej samej częstotliwości (zwykle 433 lub 868 MHz) i w tym samym systemie kodowania: pilot z kodem zmiennym programuje się w centrali, a z kodem stałym można po prostu skopiować. Jeśli zasięg nagle spadł, przyczyną bywają zakłócenia od nowych urządzeń radiowych w pobliżu.",
      },
      {
        question: "Brama otwiera się, ale nie zamyka – dlaczego?",
        answer: "Najczęściej winne są fotokomórki: brudne, przestawione lub zasłonięte blokują zamykanie ze względów bezpieczeństwa. Trzeba przetrzeć soczewki, usunąć przeszkodę z wiązki, na przykład gałąź lub zaspę śnieżną, i sprawdzić diodę odbiornika. W fotokomórkach bezprzewodowych warto wymienić baterie. Jeśli to nie pomaga, problem może dotyczyć krańcówek lub ustawień centrali i lepiej wezwać instalatora, niż mostkować zabezpieczenie.",
      },
      {
        question: "Brama przesuwna czy skrzydłowa – którą lepiej zautomatyzować?",
        answer: "Przesuwna lepiej sprawdza się zimą i na pochyłym podjeździe, a skrzydłowa jest prostsza, gdy za bramą jest płaski i wolny teren. Skrzydła potrzebują miejsca na otwarcie, a śnieg lub spadek terenu potrafią je zablokować. Brama przesuwna wymaga z kolei miejsca wzdłuż ogrodzenia na odsunięcie skrzydła. Oba typy można wyposażyć w napęd z modułem Wi-Fi, fotokomórki i lampę ostrzegawczą.",
      },
      {
        question: "Jak otworzyć bramę automatyczną, gdy nie ma prądu?",
        answer: "Odblokuj napęd kluczem lub dźwignią awaryjną i otwórz bramę ręcznie. Klucz do odblokowania trzymaj w miejscu znanym domownikom, bo bez niego brama pozostaje zablokowana. W garażu bez drugiego wejścia przydaje się odblokowanie awaryjne od zewnątrz. Wielu producentów oferuje akumulator awaryjny, który pozwala wykonać kilka cykli bez zasilania. Po powrocie prądu napęd trzeba ponownie zablokować.",
      },
    ],
    sv: [
      {
        question: "Min eldrivna grind öppnas men stängs inte: vad gör jag?",
        answer: "Kontrollera först fotocellerna: om de är smutsiga, felriktade eller skyms av en växt blockerar de stängningen av säkerhetsskäl, medan öppningen fungerar som vanligt. Rengör båda linserna, ta bort det som är i vägen och titta på mottagarens indikatorlampa, som ofta visar om cellerna är rätt inriktade. Kontrollera också batterierna i trådlösa fotoceller, ändlägesstoppen och en eventuell felkod på styrkortet. Kvarstår problemet, ring installatören i stället för att koppla förbi en säkerhetsfunktion.",
      },
      {
        question: "Kan jag göra min befintliga garageport eller grind smart?",
        answer: "Ja, oftast: det enklaste är en wifi-modul som kopplas till den befintliga motorns ingång för tryckknapp, en så kallad potentialfri kontakt. Vissa märken säljer en egen styrenhet, som Somfy med TaHoma eller myQ för Chamberlain och LiftMaster, medan universalmoduler passar de flesta motorer. Välj en modell med lägessensor, så att du ser på distans om porten är öppen eller stängd, och kontrollera att wifi når ända ut till grinden och att modulen fungerar med Alexa, Google Home eller Apple Home.",
      },
      {
        question: "Är det säkert att öppna garageporten från mobilen?",
        answer: "Ja, om kontot är väl skyddat och motorn behåller sina säkerhetsfunktioner: fotoceller och hinderavkänning. Slå på tvåstegsverifiering i appen, ge tillfällig gäståtkomst i stället för att dela dina inloggningsuppgifter och låt notiserna vid öppning vara påslagna. Stäng aldrig en garageport du inte ser om de säkerhetsfunktionerna saknas, eftersom ett barn eller ett djur kan befinna sig under den. Automatisk öppning när mobilen känner av att du närmar dig är praktisk men kan utlösas för tidigt.",
      },
      {
        question: "Varför har fjärrkontrollen till garageporten slutat fungera?",
        answer: "Oftast är batteriet slut eller så har fjärrkontrollen tappat parkopplingen med motorn. Byt batteri och parkoppla sedan om fjärrkontrollen med inlärningsknappen på motorenheten, enligt bruksanvisningen. Har räckvidden plötsligt minskat, se efter om nya LED-lampor eller andra apparater har hamnat nära öppnaren, eftersom vissa orsakar radiostörningar. En ny fjärrkontroll måste ha samma frekvens och kodsystem som öppnaren; fjärrkontroller med rullande kod parkopplas vid motorn i stället för att kopieras.",
      },
      {
        question: "Hur öppnar jag grinden eller garageporten vid strömavbrott?",
        answer: "Koppla ur motorn med den medföljande upplåsningsnyckeln och öppna sedan för hand. Förvara nyckeln på en plats som hela familjen känner till, för utan den sitter grinden fast. Har garaget ingen annan ingång slipper du bli utelåst med en utvändig nödupplåsning eller ett reservbatteri, som många tillverkare erbjuder som tillval. När strömmen kommer tillbaka kopplar du in motorn igen och låter den göra om sin inlärning om bruksanvisningen kräver det.",
      },
    ],
    us: [
      {
        question: "Can I make my existing garage door opener smart?",
        answer: "Usually, yes: an add-on controller wires into the opener's wall-button terminals and adds app control without replacing the motor. Some brands sell their own add-on, such as myQ for Chamberlain and LiftMaster openers, while universal controllers work with most openers that have a dry-contact input. Pick one with a door position sensor so the app shows whether the door is open or closed, and make sure your Wi-Fi reaches the garage. Older openers without wall-button terminals may need to be replaced.",
      },
      {
        question: "My gate or garage door opens but won't close: what should I do?",
        answer: "Check the photo-eye sensors first: if they're dirty, out of alignment or blocked by a plant or a box, the opener refuses to close for safety reasons, even though opening still works. Clean both lenses, clear anything in the beam and look at the indicator light on the receiving sensor, which usually shows whether the pair is aligned. Also check the batteries in any wireless sensors, the travel limit settings and any error code on the control board. If the problem persists, call an installer rather than bypassing a safety device.",
      },
      {
        question: "Is a smart garage door opener secure?",
        answer: "Yes, as long as you secure the app account and keep the opener's own safety features working. Use a strong password with two-factor authentication, share temporary guest access instead of your login, and leave open-and-close notifications on. Modern remotes use rolling codes, which makes copying the signal much harder. Don't close the door remotely when you can't see it unless the photo-eye sensors and auto-reverse obstacle detection are in place and working, since a child or pet could be underneath.",
      },
      {
        question: "Why did my garage door remote stop working?",
        answer: "Most often the battery is dead or the remote has lost its pairing with the opener. Replace the battery, then re-pair the remote using the Learn button on the motor unit, following the manual. If the range has dropped suddenly, look for new LED bulbs or other devices near the opener, since some cause radio interference. A replacement remote must match the opener's frequency and code system; rolling-code remotes are paired at the motor rather than cloned.",
      },
      {
        question: "Do I need an electrician to install a garage door opener?",
        answer: "Not if it plugs into an existing outlet near the motor; running a new circuit to the garage is a job for a licensed electrician, so check whether your area requires a permit. Garage outlets should have GFCI protection. Before installing, make sure the door is well balanced and the opener has a manual release, so you can still open it during a power outage. If the garage has no other entrance, an outside release kit or a battery backup, which many manufacturers offer as an option, keeps you from getting locked out.",
      },
    ],
    ca: [
      {
        question: "Can I make my existing garage door opener smart?",
        answer: "Usually yes: an add-on controller wires into the opener's push-button terminals and adds app control without replacing the motor. Some brands sell their own add-on, such as myQ for Chamberlain and LiftMaster openers, while universal controllers fit most motors with a dry-contact input. Choose one with a door position sensor so the app shows whether the door is open or closed, and check that your Wi-Fi reaches the garage. Older openers without push-button terminals may need replacing.",
      },
      {
        question: "Tilt-up, roll-up or sectional: which garage door suits a smart opener?",
        answer: "All three can be motorized and made smart; the choice depends on driveway space, insulation and the size of the opening. One-piece tilt-up doors swing partly outward, so you need clear space in front, while roll-up and sectional doors open straight up and suit short driveways. Sectional doors usually insulate best, which matters for an attached garage. Roll-up doors need little headroom, although the drum takes up space above the opening.",
      },
      {
        question: "Is a smart garage door opener secure?",
        answer: "Yes, as long as you secure the app account and keep the opener's own safety features working. Use a strong password with two-factor authentication, share temporary guest access instead of your login, and keep open-and-close notifications on. Modern remotes use rolling codes, which makes copying the signal much harder. Don't close the door remotely without seeing it unless photo-eye sensors and obstacle detection are installed and working.",
      },
      {
        question: "Why did my garage door remote stop working?",
        answer: "Most often the battery is dead or the remote has lost its pairing with the opener. Replace the battery, then re-pair the remote using the learn button on the motor unit, following the manual. If the range has dropped suddenly, check for new LED bulbs or other devices near the opener, as some cause radio interference. A replacement remote must match the opener's frequency and code system; rolling-code remotes are paired at the motor rather than copied.",
      },
      {
        question: "Do I need an electrician to install a garage door opener?",
        answer: "Not if it plugs into an existing outlet near the motor; running a new circuit to the garage is a job for a licensed electrician. Electrical work rules are set by each province and territory, so check what applies where you live before changing any wiring. Garage outlets should have ground-fault (GFCI) protection. Before installing, make sure the door is well balanced and the opener has a manual release, so you can still open it during a power outage.",
      },
    ],
  },
  "robots-piscine": {
    fr: [
      {
        question: "Robot de piscine : fond seul ou fond, parois et ligne d'eau ?",
        answer: "Choisissez fond, parois et ligne d'eau pour une piscine enterrée, car c'est sur la ligne d'eau que se dépose le film gras ; le fond seul suffit pour une hors-sol ou un petit bassin. Un robot qui grimpe nettoie aussi les dépôts verts dans les angles et limite le brossage manuel. Les modèles fond seul sont moins chers et plus légers. Vérifiez la profondeur maximale, le revêtement accepté (liner, carrelage, coque) et la durée des cycles.",
      },
      {
        question: "Robot de piscine sans fil ou filaire : que choisir ?",
        answer: "Sans fil pour un bassin petit ou moyen et la simplicité, filaire pour une grande piscine ou un nettoyage complet de plusieurs heures. Le robot sans fil évite le câble qui s'emmêle mais sa batterie limite la durée des cycles et se recharge hors de l'eau. Le filaire tourne aussi longtemps que nécessaire et grimpe souvent mieux aux parois. Son alimentation se place à la distance minimale du bassin indiquée par la notice, sur une prise protégée par un différentiel 30 mA.",
      },
      {
        question: "Combien consomme un robot de piscine ?",
        answer: "Peu : un robot de 150 W qui fait un cycle de 2 heures consomme 0,3 kWh, soit environ 8 centimes à 0,25 € le kWh. Avec trois cycles par semaine pendant la saison, la dépense reste de quelques euros. Si vous avez un tarif heures creuses, lancez les cycles la nuit pour payer encore moins. Le robot ne remplace pas la pompe de filtration, qui reste de loin le premier poste électrique d'une piscine.",
      },
      {
        question: "Quel robot choisir pour une piscine hors-sol ?",
        answer: "Pour une hors-sol tubulaire ou autoportée, prenez un robot fond seul, léger et adapté aux parois souples ; pour une hors-sol rigide en bois ou en acier, un modèle qui grimpe convient. Vérifiez que le fabricant autorise l'usage en hors-sol et la profondeur minimale. Sur un liner souple, un robot trop lourd peut déformer les parois ou déraper. Un modèle sans fil évite de faire passer un câble par-dessus le bord, souvent haut sur ces piscines.",
      },
      {
        question: "Peut-on laisser le robot dans la piscine en permanence ?",
        answer: "Non, sortez-le après chaque cycle : le chlore, le sel et les UV abîment plus vite ses brosses, ses joints et son câble. Videz et rincez le filtre à l'eau claire, puis laissez le robot sécher à l'ombre sur son chariot. Ne vous baignez pas pendant qu'il fonctionne. Avant l'hiver, nettoyez-le à fond, rangez-le hors gel et, pour un modèle sans fil, stockez la batterie au niveau de charge indiqué par la notice.",
      },
    ],
    en: [
      {
        question: "Do I need a robot for an above-ground pool?",
        answer: "Only if you use it often: for a frame or inflatable pool, a light floor-only robot saves weekly vacuuming, but a manual vacuum is enough for occasional summer use. Check that the manufacturer approves the robot for above-ground pools and soft walls, as heavy wall-climbers can deform the liner. A cordless model avoids running a cable over a high pool edge. For in-ground pools, a robot is far more worthwhile because it also handles walls and the waterline.",
      },
      {
        question: "Floor-only or floor, wall and waterline: which pool robot should I choose?",
        answer: "Floor, wall and waterline for an in-ground pool, because the greasy ring forms at the waterline; floor-only is enough for small or above-ground pools. A climbing robot also clears algae spots in corners and reduces hand brushing. Floor-only models are lighter and cheaper. Check the maximum depth, the surfaces the robot handles, such as liner, tiles or fibreglass, and how long a full cycle takes.",
      },
      {
        question: "Cordless or corded pool robot: which is better?",
        answer: "Cordless suits small to medium pools and easy handling; corded suits large pools and long, thorough cleans. A cordless robot has no tangling cable, but its battery limits cycle length and must be recharged out of the water. A corded robot runs as long as needed and usually climbs walls more strongly. Its power supply must stay at the minimum distance from the pool edge given in the manual, plugged into an RCD-protected outdoor socket.",
      },
      {
        question: "How much does a pool robot cost to run?",
        answer: "Very little: a 150 W robot running a two-hour cycle uses 0.3 kWh, about 8p at 25p per kWh. Three cycles a week over a UK pool season come to only a few pounds. If you’re on an off-peak tariff such as Economy 7, run it at night to pay even less. The robot has its own filter but doesn’t replace the pool’s filter pump, which is still by far the biggest electricity cost.",
      },
      {
        question: "How should I store a pool robot over winter?",
        answer: "Clean it thoroughly, let it dry and store it indoors somewhere frost-free until the pool reopens. Rinse the filter and brushes with fresh water, uncoil and check the cable on corded models, and keep it on its caddy away from direct sunlight. For cordless robots, store the battery at the charge level the manual recommends and top it up every few months. Before spring, check the brushes and tracks for wear.",
      },
    ],
    de: [
      {
        question: "Welcher Poolroboter für Aufstellpool, Stahlwandbecken oder eingelassenen Pool?",
        answer: "Für Frame- und Quick-up-Pools genügt ein leichter Bodenroboter, für Stahlwandbecken und eingelassene Pools lohnt ein Modell, das Wände und Wasserlinie reinigt. Prüfen Sie, ob der Hersteller den Roboter ausdrücklich für Aufstellpools freigibt, denn schwere Kletterroboter können weiche Folienwände verformen. Achten Sie auf die maximale Beckengröße, den Beckenboden und bei Akkumodellen auf die Laufzeit pro Ladung. Leiter oder Treppe im Becken sollte der Roboter umfahren können.",
      },
      {
        question: "Poolroboter: nur Boden oder auch Wände und Wasserlinie?",
        answer: "Bei festen Becken lohnt die Variante mit Wand- und Wasserlinienreinigung, denn an der Wasserlinie setzt sich der Schmutzrand aus Sonnencreme und Fett ab. Reine Bodenroboter sind leichter, günstiger und für kleine Aufstellpools meist ausreichend. Kletternde Modelle entfernen auch Algenansätze in Ecken und ersparen das Bürsten. Achten Sie auf die maximale Wassertiefe und die Dauer eines vollständigen Reinigungszyklus.",
      },
      {
        question: "Wie viel Strom verbraucht ein Poolroboter?",
        answer: "Wenig: Ein Roboter mit 150 W braucht für einen Zyklus von zwei Stunden 0,3 kWh, bei 0,35 € pro kWh also gut 10 Cent. Bei drei Zyklen pro Woche und einer Saison von Mai bis September bleibt es bei wenigen Euro. Den größeren Posten macht die Filterpumpe aus, die der Roboter nicht ersetzt. Akkuroboter verbrauchen ähnlich viel, nur eben beim Laden an der Steckdose.",
      },
      {
        question: "Akku-Poolroboter oder mit Kabel?",
        answer: "Akku für kleine bis mittlere Becken und bequemes Handling, Kabel für große Pools und lange, gründliche Reinigungen. Ohne Kabel verheddert sich nichts, dafür begrenzt der Akku die Laufzeit und muss außerhalb des Wassers geladen werden. Kabelgebundene Roboter laufen beliebig lange und klettern meist kräftiger. Ihr Netzteil steht im vorgeschriebenen Mindestabstand zum Beckenrand und hängt an einer Steckdose mit FI-Schutzschalter.",
      },
      {
        question: "Poolroboter schwimmt auf oder bleibt hängen: was tun?",
        answer: "Schwimmt er auf, ist meist noch Luft im Gehäuse: Lassen Sie ihn beim Einsetzen schräg absinken, bis keine Blasen mehr aufsteigen. Verliert er an Saugkraft oder klettert nicht mehr, ist oft der Filter voll, also nach jedem Zyklus reinigen. Bleibt er an Treppe oder Bodenablauf hängen, helfen ein anderer Startpunkt oder ein anderes Programm. Bei Kabelmodellen entsteht mit der Zeit Drall im Kabel; ein Drehgelenk oder regelmäßiges gerades Auslegen löst ihn.",
      },
    ],
    es: [
      {
        question: "¿Robot de piscina solo para el fondo o también paredes y línea de flotación?",
        answer: "En una piscina de obra conviene que limpie fondo, paredes y línea de flotación, porque en la línea de flotación se acumula la grasa de las cremas; para una desmontable basta con el fondo. Un robot que sube por las paredes también evita algas en esquinas y escalones. Los modelos solo de fondo son más ligeros y baratos. Comprueba la profundidad máxima, el revestimiento admitido, como gresite, liner o poliéster, y la duración de cada ciclo.",
      },
      {
        question: "¿Es compatible un robot de piscina con la cloración salina?",
        answer: "Sí, la mayoría lo son, pero revisa en el manual la salinidad máxima admitida y enjuaga el robot con agua dulce después de cada uso. La sal acelera la corrosión de las piezas metálicas y el desgaste de juntas y cepillos, sobre todo si el robot se queda en el agua o al sol. Sácalo al terminar el ciclo, limpia el filtro y guárdalo a la sombra. No lo pongas en marcha mientras haya alguien bañándose.",
      },
      {
        question: "¿Qué robot limpiafondos elegir para una piscina comunitaria o muy grande?",
        answer: "Un modelo con cable, ciclos largos y un cable que llegue al punto más alejado del vaso; comprueba que el fabricante lo indica para piscinas de ese tamaño. En piscinas comunitarias de urbanización conviene un modelo robusto, con carro de transporte y filtros fáciles de vaciar, porque lo suele manejar el personal de mantenimiento: acuerda con el administrador quién se encargará de usarlo y limpiarlo. Un robot ahorra mucho trabajo manual, pero no sustituye a la depuradora ni el control del cloro.",
      },
      {
        question: "¿Cuánto consume un robot de piscina?",
        answer: "Poco: un robot de 150 W gasta 0,3 kWh en un ciclo de 2 horas, unos 5 céntimos con un precio de ejemplo de 0,15 €/kWh. Si tienes una tarifa con discriminación horaria, programarlo de noche o el fin de semana, en periodo valle, lo abarata algo más. Con tres ciclos semanales durante todo el verano, el gasto se queda en pocos euros. Lo que más consume en una piscina sigue siendo la depuradora, que el robot no sustituye.",
      },
      {
        question: "¿Cómo se mantiene un robot de piscina para que dure?",
        answer: "Sácalo del agua después de cada ciclo, limpia el filtro y guárdalo a la sombra: el sol, el cloro y la sal son lo que más desgasta cepillos, juntas y cable. Revisa de vez en cuando las orugas y los cepillos, que se cambian cuando están lisos, y estira el cable para que no se enrede. En invierno, guárdalo limpio y seco bajo techo; si es de batería, déjala con la carga que indique el fabricante.",
      },
    ],
    it: [
      {
        question: "Quale robot scegliere per una piscina fuori terra?",
        answer: "Per una fuori terra in PVC con telaio scegli un robot leggero che pulisce solo il fondo; per quelle rigide in acciaio o legno può andare un modello che sale sulle pareti. Controlla che il produttore ne autorizzi l'uso nelle piscine fuori terra e la profondità minima richiesta. Un robot troppo pesante può deformare il liner morbido. Un modello a batteria evita di far passare il cavo sopra il bordo, spesso alto in queste piscine.",
      },
      {
        question: "Robot per piscina a batteria o con cavo?",
        answer: "A batteria per piscine piccole e medie e per la comodità, con cavo per piscine grandi e pulizie lunghe e complete. Il modello a batteria non ha cavi che si attorcigliano, ma l'autonomia limita i cicli e va ricaricato fuori dall'acqua. Quello con cavo lavora quanto serve e di solito sale meglio sulle pareti. L'alimentatore va posizionato alla distanza minima dal bordo indicata nel manuale e collegato a una presa protetta da differenziale.",
      },
      {
        question: "Meglio un robot che pulisce solo il fondo o anche pareti e linea d'acqua?",
        answer: "Per una piscina interrata meglio fondo, pareti e linea d'acqua, perché sulla linea di galleggiamento si forma l'alone di creme e unto. Un robot che sale toglie anche le alghe negli angoli e riduce la spazzolatura a mano. I modelli solo fondo costano e pesano meno, ideali per vasche piccole. Verifica la profondità massima, il rivestimento supportato e la durata del ciclo completo.",
      },
      {
        question: "Quanto consuma un robot per piscina?",
        answer: "Poco: un robot da 150 W per un ciclo di 2 ore consuma 0,3 kWh, circa 8 centesimi con un prezzo d'esempio di 0,25 € al kWh. Con tre cicli a settimana per tutta l'estate si resta su pochi euro. Se hai una tariffa a fasce, avvialo la sera tardi o nel weekend per sfruttare le ore più economiche. Il consumo principale della piscina resta la pompa di filtrazione, che il robot non sostituisce.",
      },
      {
        question: "Il robot per piscina non sale sulle pareti: perché?",
        answer: "Spesso il filtro è intasato e la suzione non basta più a tenerlo sulla parete. Pulisci il filtro dopo ogni ciclo e controlla le spazzole: se sono lisce o consumate, il robot scivola. Il problema può dipendere anche da un velo di alghe sulle pareti o da un programma impostato su «solo fondo». Se galleggia appena messo in acqua, inclinalo per far uscire l'aria finché non smettono le bolle.",
      },
    ],
    nl: [
      {
        question: "Heb je een zwembadrobot nodig voor een opzetzwembad?",
        answer: "Alleen als je het zwembad vaak gebruikt: voor een opzetzwembad of framebad volstaat een lichte bodemrobot, en bij af en toe zwemmen is een handstofzuiger genoeg. Controleer of de fabrikant de robot geschikt noemt voor opzetbaden met zachte wanden, want een zware klimrobot kan het folie vervormen. Een model zonder snoer voorkomt een kabel over de hoge rand. Voor een ingegraven zwembad is een robot met wand- en waterlijnreiniging veel zinvoller.",
      },
      {
        question: "Zwembadrobot met of zonder snoer?",
        answer: "Zonder snoer voor kleine tot middelgrote baden en gebruiksgemak, met snoer voor grote zwembaden en lange, grondige beurten. Een snoerloze robot raakt niet verstrikt, maar de accu beperkt de looptijd en moet buiten het water worden opgeladen. Een robot met snoer werkt zo lang als nodig en klimt meestal krachtiger. Zet de voeding op de minimale afstand van de rand die de handleiding noemt, aan een stopcontact met aardlekschakelaar.",
      },
      {
        question: "Zwembadrobot: alleen bodem of ook wanden en waterlijn?",
        answer: "Voor een ingegraven of vast zwembad loont een robot die ook wanden en waterlijn reinigt, omdat zich daar een vette rand van zonnebrand en vuil vormt. Een klimmende robot haalt ook algen uit hoeken en scheelt borstelen. Bodemrobots zijn lichter en goedkoper en volstaan in een klein bad. Let op de maximale diepte, de geschikte bekleding en de duur van een volledige cyclus.",
      },
      {
        question: "Hoeveel stroom verbruikt een zwembadrobot?",
        answer: "Weinig: een robot van 150 watt verbruikt in een cyclus van twee uur 0,3 kWh, ongeveer 9 cent bij € 0,30 per kWh. Met drie beurten per week in de zwemmaanden kom je op een paar euro per seizoen. Heb je een dynamisch energiecontract, laat hem dan draaien op de goedkope uren. De filterpomp, die de robot niet vervangt, blijft de grootste stroomverbruiker van een zwembad.",
      },
      {
        question: "Zwembadrobot blijft drijven of werkt niet: wat nu?",
        answer: "Drijft hij, dan zit er nog lucht in: laat hem schuin onder water zakken tot er geen belletjes meer opstijgen. Zuigt hij slecht of klimt hij niet meer, maak dan het filter schoon, het liefst na elke beurt. Start hij helemaal niet, controleer dan de voeding, het stopcontact en bij een accumodel de lading. Raakt het snoer steeds in de knoop, leg het dan regelmatig gestrekt uit.",
      },
    ],
    pl: [
      {
        question: "Jaki robot wybrać do basenu stelażowego?",
        answer: "Do basenu stelażowego wystarczy lekki robot czyszczący samo dno, dopuszczony przez producenta do basenów z miękkimi ścianami. Ciężkie roboty wspinające się po ścianach mogą odkształcać folię, dlatego sprawdź w instrukcji, czy nadają się do basenów naziemnych. Przy modelu bezprzewodowym nie trzeba przekładać kabla przez wysoką krawędź. W basenie murowanym albo z gotową niecką lepiej sprawdzi się robot, który czyści także ściany i linię wody.",
      },
      {
        question: "Robot basenowy czy ręczny odkurzacz basenowy?",
        answer: "Robot opłaca się, gdy basen jest używany przez cały sezon, a Ty nie chcesz tracić czasu na odkurzanie co kilka dni; przy małym basenie i okazjonalnym użyciu wystarczy ręczny odkurzacz. Taki odkurzacz, podłączany do pompy filtrującej lub zasilany akumulatorem, jest tani, ale wymaga pracy. Robot działa sam, ma własny filtr i nie obciąża pompy basenu. W obu przypadkach liście warto zbierać siatką na bieżąco.",
      },
      {
        question: "Robot basenowy bezprzewodowy czy z kablem?",
        answer: "Bezprzewodowy do małych i średnich basenów, z kablem do dużych basenów i długiego, dokładnego sprzątania. Model akumulatorowy nie ma kabla, który mógłby się plątać, ale czas pracy jest ograniczony, a ładuje się go poza wodą. Robot z kablem pracuje tak długo, jak trzeba, i zwykle lepiej wspina się po ścianach. Zasilacz ustaw w odległości od brzegu podanej w instrukcji i podłącz do gniazda z wyłącznikiem różnicowoprądowym.",
      },
      {
        question: "Ile prądu zużywa robot basenowy?",
        answer: "Niewiele: robot o mocy 150 W zużywa podczas dwugodzinnego cyklu 0,3 kWh, czyli około 30 groszy przy przykładowej cenie 1 zł za kWh. Przy trzech cyklach w tygodniu przez polskie lato daje to kilkanaście złotych za sezon. W taryfie G12 opłaca się uruchamiać go w tańszych godzinach. Największym odbiornikiem prądu przy basenie pozostaje pompa filtrująca, której robot nie zastępuje.",
      },
      {
        question: "Jak przechowywać robota basenowego zimą?",
        answer: "Robota trzeba dokładnie umyć, wysuszyć i przechowywać w pomieszczeniu, w którym nie ma mrozu. Filtr i szczotki warto wypłukać czystą wodą, a kabel rozwinąć i sprawdzić, czy nie jest uszkodzony. W modelu akumulatorowym akumulator przechowuje się z poziomem naładowania zalecanym w instrukcji i co kilka miesięcy doładowuje. Mróz w garażu lub altanie może uszkodzić uszczelki i elektronikę.",
      },
    ],
    sv: [
      {
        question: "Poolrobot: bara botten eller även väggar och vattenlinje?",
        answer: "Välj en robot som klarar botten, väggar och vattenlinje till en nedgrävd pool, eftersom det är vid vattenlinjen som fettranden sätter sig; bara botten räcker för en ovanmarkspool eller en liten bassäng. En robot som klättrar tar också bort gröna beläggningar i hörnen och minskar borstningen för hand. Modeller för bara botten är billigare och lättare. Kontrollera maxdjupet, vilka ytor den klarar (liner, kakel, glasfiber) och hur lång en rengöringscykel är.",
      },
      {
        question: "Sladdlös poolrobot eller robot med kabel: vilken ska jag välja?",
        answer: "Sladdlös för en liten eller medelstor pool och enkel hantering, med kabel för en stor pool eller en grundlig rengöring på flera timmar. Den sladdlösa slipper kabeln som trasslar sig, men batteriet begränsar cykelns längd och måste laddas utanför vattnet. En robot med kabel går så länge det behövs och klättrar ofta bättre på väggarna. Nätaggregatet ska stå minst så långt från poolen som bruksanvisningen anger och kopplas till ett uttag med jordfelsbrytare på 30 mA.",
      },
      {
        question: "Hur mycket el drar en poolrobot?",
        answer: "Lite: en robot på 150 W som kör en cykel på 2 timmar förbrukar 0,3 kWh, ca 80 öre med ett exempelpris på 2,75 kr/kWh. Med tre cykler i veckan under säsongen stannar kostnaden vid några tiotal kronor. Har ditt elavtal ett pris som varierar över dygnet, kör cyklerna när elen är som billigast. Roboten ersätter inte poolens filterpump, som är den överlägset största elposten. Ditt eget elpris står på elräkningen.",
      },
      {
        question: "Vilken poolrobot passar en ovanmarkspool?",
        answer: "Till en rampool eller en uppblåsbar pool väljer du en lätt robot för bara botten som tål mjuka väggar; till en stabil ovanmarkspool i trä eller stål går det bra med en modell som klättrar. Kontrollera att tillverkaren godkänner roboten för ovanmarkspooler och vilket minsta vattendjup den kräver. På en mjuk liner kan en för tung robot deformera väggarna eller halka. Med en sladdlös modell slipper du dra kabeln över kanten, som ofta är hög på de här poolerna.",
      },
      {
        question: "Kan poolroboten ligga kvar i poolen hela tiden?",
        answer: "Nej, ta upp den efter varje cykel: klor, salt och UV-ljus sliter snabbare på borstar, packningar och kabel. Töm och skölj filtret i rent vatten och låt sedan roboten torka i skuggan på sin vagn. Bada inte medan den är igång. Inför vintern rengör du den grundligt och förvarar den frostfritt, och är det en sladdlös modell förvarar du batteriet på den laddningsnivå som bruksanvisningen anger.",
      },
    ],
    us: [
      {
        question: "Do I need a robot for an above-ground pool?",
        answer: "Only if you use the pool a lot: for a metal-frame or inflatable pool, a light floor-only robot saves you weekly vacuuming, but a manual vacuum is enough for occasional summer use. Make sure the manufacturer approves the robot for above-ground pools and soft walls, since heavy wall-climbers can deform the liner. A cordless model avoids running a cable over a tall pool wall. For in-ground pools, a robot is far more worthwhile because it also handles the walls and the waterline.",
      },
      {
        question: "Floor-only or floor, wall and waterline: which pool robot?",
        answer: "Floor, wall and waterline for an in-ground pool, because the greasy ring forms at the waterline; floor-only is enough for small or above-ground pools. A climbing robot also clears algae spots in the corners and cuts down on hand brushing. Floor-only models are lighter and cheaper. Check the maximum depth, the surfaces the robot can handle, such as vinyl liner, tile or fiberglass, and how long a full cycle takes.",
      },
      {
        question: "Cordless or corded pool robot?",
        answer: "Cordless suits small to medium pools and easy handling; corded suits large pools and long, thorough cleaning cycles. A cordless robot has no cable to tangle, but its battery limits cycle length and must be recharged out of the water. A corded robot runs as long as needed and usually climbs walls better. Its power supply has to sit at the minimum distance from the pool edge given in the manual, plugged into a GFCI-protected outdoor outlet.",
      },
      {
        question: "How much does a pool robot cost to run?",
        answer: "Very little: a 150 W robot running a two-hour cycle uses 0.3 kWh, about 5 cents at the US average residential rate of 18.16 cents per kWh (EIA, August 2026). Check the rate on your utility bill. Three cycles a week over a swim season adds up to just a few dollars. If you're on a time-of-use rate plan, run it at night to pay even less. The robot has its own filter but doesn't replace the pool's filter pump, which remains by far the biggest electricity cost.",
      },
      {
        question: "How should I store a pool robot over the winter?",
        answer: "Clean it thoroughly, let it dry and store it indoors somewhere it won't freeze until you open the pool again. Rinse the filter and brushes with fresh water, uncoil and inspect the cable on corded models, and keep the robot on its caddy out of direct sunlight. For cordless robots, store the battery at the charge level the manual recommends and top it up every few months. Before spring, check the brushes and tracks for wear.",
      },
    ],
    ca: [
      {
        question: "Do I need a robot for an above-ground pool?",
        answer: "Only if you use it often: for a frame or inflatable pool, a light floor-only robot saves weekly vacuuming, but a manual vacuum is enough for occasional summer use. Check that the manufacturer approves the robot for above-ground pools and soft walls, as heavy wall-climbers can deform the liner. A cordless model avoids running a cable over a high pool edge. For in-ground pools, a robot is far more worthwhile because it also handles walls and the waterline.",
      },
      {
        question: "Floor-only or floor, wall and waterline: which pool robot?",
        answer: "Floor, wall and waterline for an in-ground pool, because the greasy ring forms at the waterline; floor-only is enough for small or above-ground pools. A climbing robot also clears algae spots in corners and reduces hand brushing. Floor-only models are lighter and cheaper. Check the maximum depth, the surfaces the robot handles, such as liner, tiles or fibreglass, and how long a full cycle takes.",
      },
      {
        question: "Cordless or corded pool robot?",
        answer: "Cordless suits small to medium pools and easy handling; corded suits large pools and long, thorough cleans. A cordless robot has no tangling cable, but its battery limits cycle length and must be recharged out of the water. A corded robot runs as long as needed and usually climbs walls more strongly. Its power supply must stay at the minimum distance from the pool edge given in the manual, plugged into a GFCI-protected outdoor outlet.",
      },
      {
        question: "How much does a pool robot cost to run?",
        answer: "Very little: a 150 W robot running a two-hour cycle uses 0.3 kWh, so three cycles a week add up to under 1 kWh a week over the pool season. Your actual rate depends on your province and utility, so check your bill; if you have time-of-use rates, run it overnight to pay even less. The robot has its own filter but doesn't replace the pool's filter pump, which remains the main electricity cost.",
      },
      {
        question: "How should I store a pool robot over winter?",
        answer: "Clean it thoroughly, let it dry and store it indoors somewhere frost-free until the pool reopens. Rinse the filter and brushes with fresh water, uncoil and check the cable on corded models, and keep it on its caddy away from direct sunlight. For cordless robots, store the battery at the charge level the manual recommends and top it up every few months. Before spring, check the brushes and tracks for wear.",
      },
    ],
  },
  "barbecues-connectes": {
    fr: [
      {
        question: "Barbecue à pellets ou à gaz : lequel choisir ?",
        answer: "Le pellet pour les cuissons lentes au goût fumé, pilotées depuis une appli ; le gaz pour griller vite et saisir à haute température. Un barbecue à granulés fonctionne comme un four à bois automatique : une vis sans fin dose les pellets selon la température demandée, idéal pour une épaule ou des travers en plusieurs heures. Il a besoin d'une prise électrique et chauffe moins vite. Le gaz est prêt en quelques minutes et convient mieux aux grillades rapides du quotidien.",
      },
      {
        question: "Plancha gaz ou électrique : laquelle pour une terrasse ou un balcon ?",
        answer: "Sur un balcon, la plancha électrique est souvent la seule tolérée ; sur une terrasse de maison, le gaz chauffe plus fort et plus vite. En copropriété, lisez le règlement : certains interdisent le charbon, parfois le gaz, sur les balcons. Une plancha électrique demande une prise extérieure protégée par un différentiel 30 mA et une puissance suffisante, souvent 2 000 W ou plus. Une plaque en fonte émaillée ou en inox épais garde mieux la chaleur qu'un acier fin.",
      },
      {
        question: "Combien de pellets consomme un barbecue à granulés ?",
        answer: "Comptez environ 0,5 kg par heure en fumage à basse température et plus de 1 kg par heure à pleine chauffe, davantage par temps froid ou venteux. Une cuisson de 6 heures à basse température peut donc demander 3 à 4 kg de granulés. Utilisez des granulés alimentaires pour barbecue, pas des granulés de chauffage, non prévus pour la cuisson. Côté électricité, la résistance d'allumage tire quelques centaines de watts pendant quelques minutes, puis le ventilateur et la vis consomment peu.",
      },
      {
        question: "Une sonde de cuisson connectée vaut-elle le coup ?",
        answer: "Oui pour les grosses pièces et les cuissons longues : elle mesure la température à cœur et vous alerte sur le téléphone, sans ouvrir le couvercle. Les sondes Bluetooth ont une portée limitée, vite réduite par les murs ; un relais Wi-Fi permet de suivre la cuisson de n'importe où. Une sonde sans fil se glisse entière dans la viande, pratique au tournebroche. Pour la volaille, visez une cuisson complète à cœur, autour de 74 °C au point le plus épais.",
      },
      {
        question: "Comment entretenir un barbecue à pellets ?",
        answer: "Videz régulièrement les cendres du pot de combustion et nettoyez le bac à graisse, deux causes fréquentes de mauvais allumage et de départs de feu. Un aspirateur à cendres froides fait le travail en quelques minutes toutes les deux ou trois cuissons. Stockez les granulés au sec : humides, ils gonflent et bloquent la vis sans fin. Protégez l'appareil avec une housse et installez les mises à jour de l'appli, qui corrigent parfois la régulation de température.",
      },
    ],
    en: [
      {
        question: "Is a smart pellet grill worth it in the UK?",
        answer: "Yes, if you enjoy low-and-slow cooking and have an outdoor socket; less so if you mainly grill sausages and burgers in a hurry. A pellet grill holds a set temperature for hours and lets you monitor it from your phone, which helps on cool, windy days. It needs mains power, takes longer to heat up than gas and should be covered when not in use, as rain and damp ruin pellets. Check the hopper size for long cooks.",
      },
      {
        question: "How much does a pellet grill cost to run?",
        answer: "Mostly the pellets: expect roughly 0.5 kg an hour for low-and-slow smoking and over 1 kg an hour at high heat, more in cold or windy weather. A six-hour cook at low temperature typically needs 3–4 kg, so multiply by the price of your bag of food-grade pellets. Electricity is minor: the igniter draws a few hundred watts for a few minutes, then the fan and auger use little.",
      },
      {
        question: "Can I use a pellet grill under a gazebo or in a garage?",
        answer: "Never in a garage or any enclosed space, because burning pellets produce carbon monoxide; a gazebo is acceptable only if it is open-sided and its canopy is well clear of the grill. Follow the clearance distances in the manual, both above and around the grill, and keep it away from fences and sheds. Use an outdoor socket with RCD protection rather than an extension lead trailed through a window. When it rains, it is safer to put a fitted cover on the grill and wait than to carry on cooking under a fabric canopy.",
      },
      {
        question: "Wireless meat thermometer: Bluetooth or Wi-Fi?",
        answer: "Wi-Fi if you want to check the cook from anywhere, Bluetooth if you stay in the garden or kitchen. Bluetooth range drops sharply through walls, so many fully wireless probes use a base unit that relays to Wi-Fi. Choose a probe rated for the grill's ambient temperature. For poultry, aim for about 74°C in the thickest part, with no pink meat and juices running clear.",
      },
      {
        question: "Why won't my pellet grill light or stay lit?",
        answer: "Usually because of damp pellets, a fire pot full of ash or a failed igniter. Empty the fire pot and vacuum out cold ash, check the pellets are dry and not crumbling to dust, and make sure the auger is feeding. If the grill keeps flaming out mid-cook, wet pellets or an empty hopper are the usual suspects. If nothing glows at start-up, the igniter rod may need replacing; it is a common, inexpensive part.",
      },
    ],
    de: [
      {
        question: "Pelletgrill oder Gasgrill?",
        answer: "Der Pelletgrill punktet bei langen, rauchigen Garzeiten mit App-Steuerung, der Gasgrill beim schnellen Grillen und scharfen Anbraten. Im Pelletgrill dosiert eine Förderschnecke die Pellets nach Zieltemperatur, ideal für Pulled Pork oder Rippchen über viele Stunden. Er braucht Strom und heizt langsamer auf. Der Gasgrill ist in wenigen Minuten bereit und braucht keine Steckdose. Wer beides will, findet Pelletgrills mit Sear-Zone für hohe Hitze.",
      },
      {
        question: "Darf man auf dem Balkon grillen, auch mit einem Pelletgrill?",
        answer: "Das regeln Mietvertrag, Hausordnung oder die Beschlüsse der Eigentümergemeinschaft; ein generelles Verbot gibt es nicht, ein Pelletgrill ist wegen des Rauchs aber selten balkontauglich. Gerichte haben je nach Einzelfall unterschiedlich entschieden; entscheidend ist, dass Rauch und Geruch die Nachbarn nicht wesentlich stören. Ein Elektrogrill sorgt am seltensten für Ärger. Beachten Sie außerdem die Brandgefahr und die Abstände aus der Anleitung.",
      },
      {
        question: "Wie viel Pellets und Strom braucht ein Pelletgrill?",
        answer: "Rechnen Sie mit etwa 0,5 kg Pellets pro Stunde beim Niedrigtemperatur-Garen und über 1 kg pro Stunde bei voller Hitze, bei Kälte und Wind mehr. Ein Pulled Pork über zehn Stunden kann so 5 bis 7 kg Pellets brauchen. Strom ist Nebensache: Die Zündung zieht einige Hundert Watt für wenige Minuten, danach brauchen Lüfter und Schnecke nur wenig. Multiplizieren Sie die Kilogramm mit dem Sackpreis Ihrer Grillpellets.",
      },
      {
        question: "Welches Grillthermometer, Bluetooth oder WLAN, und welche Kerntemperatur?",
        answer: "WLAN, wenn Sie die Garzeit von überall verfolgen wollen, Bluetooth, wenn Sie in Grillnähe bleiben. Kabellose Fühler funken meist über eine Basisstation, deren Reichweite durch Wände stark sinkt. Gängige Richtwerte für die Kerntemperatur: Geflügel etwa 75 °C, Rinderfilet medium um 56 °C, Pulled Pork um 92 °C, damit das Bindegewebe zerfällt. Achten Sie auf einen Fühler, der die Garraumtemperatur Ihres Grills aushält.",
      },
      {
        question: "Grillpellets oder Heizpellets, und wie lagert man sie?",
        answer: "Nur Grillpellets: Heizpellets sind für den Ofen gemacht, nicht für das Garen von Lebensmitteln, und die Grillhersteller schreiben Grillpellets vor. Grillpellets bestehen aus Laubhölzern wie Buche, Eiche oder Kirsche und geben das Raucharoma. Lagern Sie sie trocken und geschlossen, denn feuchte Pellets quellen auf, zerfallen und blockieren die Förderschnecke. Leeren Sie nach der Saison den Pelletbehälter, damit über den Winter keine Feuchtigkeit hineinzieht.",
      },
    ],
    es: [
      {
        question: "¿Se puede hacer barbacoa en la terraza o el balcón?",
        answer: "Depende de los estatutos de tu comunidad y de las ordenanzas municipales: algunas prohíben el carbón en los balcones, y la plancha eléctrica es la opción que menos problemas da. Una barbacoa de pellets o de carbón echa humo que molesta a los vecinos, así que en un piso es mala idea. En casas con jardín, ten en cuenta el riesgo de incendio: en verano, las comunidades autónomas prohíben hacer fuego en terrenos forestales y en sus alrededores. Consulta la normativa de la tuya antes de encender.",
      },
      {
        question: "¿Barbacoa de pellets, de gas o plancha eléctrica?",
        answer: "Pellets para cocciones largas con sabor ahumado, gas para asar rápido y plancha eléctrica para terrazas y pisos donde no se permite el fuego. La barbacoa de pellets regula sola la temperatura y se controla desde el móvil, pero necesita enchufe y tarda más en calentarse. La de gas está lista en minutos y es ideal para chuletas y verduras. La plancha eléctrica es la más fácil de usar a diario y la que menos humo hace.",
      },
      {
        question: "¿Cuánto consume una barbacoa de pellets?",
        answer: "Unos 0,5 kg de pellets por hora a baja temperatura y más de 1 kg por hora a máxima potencia, algo más si hace viento. Una paletilla o unas costillas de seis horas pueden gastar entre 3 y 4 kg. Para calcular el coste, multiplica por el precio del kilo, y usa siempre pellets para barbacoa, nunca los de estufa. La electricidad pesa poco: la resistencia de encendido consume unos cientos de vatios durante pocos minutos, y después el ventilador y el sinfín gastan muy poco.",
      },
      {
        question: "¿Merece la pena un termómetro inalámbrico para la barbacoa?",
        answer: "Sí, sobre todo en piezas grandes y cocciones largas: te avisa en el móvil cuando la carne llega a la temperatura deseada, sin abrir la tapa. Los bluetooth tienen poco alcance a través de las paredes; los que se conectan al wifi permiten seguir la cocción desde cualquier sitio. Busca una sonda que aguante la temperatura del interior de la barbacoa. Para el pollo, asegúrate de que la parte más gruesa llega a unos 75 °C.",
      },
      {
        question: "¿Cómo se limpia y mantiene una barbacoa de pellets?",
        answer: "Vacía la ceniza del quemador cada pocas cocciones y limpia la bandeja de grasa: si se acumulan, provocan fallos de encendido y llamaradas. Con la barbacoa fría, un aspirador de cenizas lo resuelve en minutos. Guarda los pellets en un lugar seco y cerrado: con la humedad se hinchan y atascan el sinfín. Tápala con su funda cuando no la uses e instala las actualizaciones de la app, que a veces mejoran el control de la temperatura.",
      },
    ],
    it: [
      {
        question: "Si può fare il barbecue sul balcone in condominio?",
        answer: "Dipende dal regolamento condominiale, e in ogni caso fumo e odori non devono superare la normale tollerabilità prevista dall'articolo 844 del Codice civile. Per questo un barbecue a pellet o a carbonella sul balcone crea spesso liti con i vicini, mentre una piastra elettrica è la scelta più tranquilla. Leggi il regolamento prima di comprare e verifica eventuali ordinanze comunali sui fuochi all'aperto. Tieni comunque l'apparecchio lontano da tende e materiali infiammabili.",
      },
      {
        question: "Barbecue a pellet o a gas: quale scegliere?",
        answer: "Il pellet per cotture lunghe e affumicate controllate dall'app, il gas per grigliate veloci e per rosolare ad alta temperatura. Nel barbecue a pellet una coclea dosa il combustibile in base alla temperatura impostata, come in un forno a legna automatico: perfetto per costine e spalla di maiale. Ha bisogno di una presa elettrica e scalda più lentamente. Il gas è pronto in pochi minuti e non ha bisogno di corrente.",
      },
      {
        question: "Quanto consuma un barbecue a pellet?",
        answer: "Circa 0,5 kg di pellet all'ora a bassa temperatura e oltre 1 kg all'ora al massimo, di più con freddo e vento. Una cottura lenta di sei ore richiede quindi 3-4 kg. Usa solo pellet alimentare da barbecue, non quello da stufa. La corrente pesa poco: la resistenza di accensione assorbe qualche centinaio di watt per pochi minuti, poi ventola e coclea consumano pochissimo.",
      },
      {
        question: "Termometro wireless per barbecue: Bluetooth o Wi-Fi?",
        answer: "Wi-Fi se vuoi seguire la cottura ovunque tu sia, Bluetooth se resti vicino al barbecue. Il Bluetooth perde portata attraverso i muri, perciò molte sonde senza fili usano una base che fa da ponte verso il Wi-Fi. Scegli una sonda che regga la temperatura interna del barbecue. Per il pollo assicurati che la parte più spessa arrivi a circa 75 °C; una spalla di maiale da sfilacciare richiede intorno ai 90 °C.",
      },
      {
        question: "Il barbecue a pellet non si accende o si spegne: perché?",
        answer: "Di solito per pellet umido, cenere accumulata nel braciere o una resistenza di accensione guasta. Svuota il braciere con un aspiracenere a freddo, controlla che il pellet sia asciutto e non sbriciolato e che la coclea lo spinga regolarmente. Se si spegne a metà cottura, guarda anche il livello nella tramoggia. Se all'avvio la resistenza non diventa rovente, va sostituita: è un ricambio comune e poco costoso.",
      },
    ],
    nl: [
      {
        question: "Pellet-bbq of kamado zoals de Big Green Egg?",
        answer: "Een pellet-bbq als je gemak en app-bediening wilt, een kamado als je met houtskool wilt koken en hoge temperaturen zoekt. De pellet-bbq houdt zelf de temperatuur vast en meldt via je telefoon wanneer het vlees klaar is, maar heeft stroom nodig. Een kamado houdt met zijn dikke keramische wand de hitte vast en haalt makkelijk pizzatemperaturen, maar je regelt de luchttoevoer zelf. Met een losse ventilatorregelaar maak je ook een kamado slim.",
      },
      {
        question: "Hoeveel pellets en stroom verbruikt een pellet-bbq?",
        answer: "Reken op ongeveer een halve kilo pellets per uur bij lage temperatuur en meer dan een kilo per uur op vol vermogen, meer bij wind en kou. Een spareribs-sessie van zes uur kost zo 3 tot 4 kilo. Gebruik altijd bbq-pellets, geen verwarmingspellets. Stroom is bijzaak: het gloeielement trekt een paar honderd watt gedurende enkele minuten, daarna verbruiken ventilator en vijzel weinig.",
      },
      {
        question: "Mag je barbecueën op je balkon?",
        answer: "Dat hangt af van je huurcontract, het reglement van de VvE en de regels van je gemeente; een elektrische grill is bijna altijd de veiligste keuze. Rook en vonken van houtskool of pellets kunnen buren hinderen en brand veroorzaken. Sommige gemeenten regelen open vuur in hun APV. Bij langdurige droogte kunnen gemeenten en natuurbeheerders vuur en barbecueën in en rond natuurgebieden verbieden; let daarop als je in de buurt woont.",
      },
      {
        question: "Welke draadloze vleesthermometer kies je?",
        answer: "Kies wifi als je het vlees overal wilt volgen en bluetooth als je bij de bbq blijft. Volledig draadloze sensoren gebruiken vaak een basisstation dat het signaal doorgeeft, want bluetooth komt slecht door muren. Let op de maximale omgevingstemperatuur die de sensor verdraagt. Richtwaarden voor de kerntemperatuur: kip rond 75 °C in het dikste deel, pulled pork rond 92 °C.",
      },
      {
        question: "Pellet-bbq gaat uit of rookt te veel: wat te doen?",
        answer: "Meestal zijn de pellets vochtig of zit de branderpot vol as. Zuig de koude as uit de branderpot, controleer of de pellets droog en heel zijn en of de vijzel ze goed aanvoert. Veel witte rook bij het opstarten is normaal, aanhoudende dikke rook wijst op te veel brandstof of te weinig luchttoevoer. Bewaar pellets droog en afgesloten, en vervang het gloeielement als het bij de start niet meer heet wordt.",
      },
    ],
    pl: [
      {
        question: "Grill na pellet czy gazowy?",
        answer: "Grill na pellet do długiego wędzenia i pieczenia sterowanego z aplikacji, gazowy do szybkiego grillowania i mocnego przypiekania. W grillu na pellet podajnik ślimakowy dozuje pellet według zadanej temperatury, co ułatwia wielogodzinne pieczenie żeberek czy karkówki. Potrzebuje jednak zasilania z gniazdka i wolniej się nagrzewa. Grill gazowy jest gotowy po kilku minutach i nie wymaga prądu, ale nie nadaje potrawom takiego dymnego aromatu.",
      },
      {
        question: "Czy można grillować na balkonie w bloku?",
        answer: "To zależy od regulaminu spółdzielni lub wspólnoty mieszkaniowej, który może zakazywać grilli węglowych; grill elektryczny zwykle nie budzi zastrzeżeń. Dym uciążliwy dla sąsiadów może też być podstawą roszczeń z tytułu immisji. Grill na pellet mocno dymi, więc na balkon się nie nadaje. Poza miastem trzeba pamiętać, że w lesie i w odległości do 100 m od jego granicy nie wolno rozpalać ognia poza miejscami do tego wyznaczonymi.",
      },
      {
        question: "Ile pelletu zużywa grill na pellet?",
        answer: "Około 0,5 kg na godzinę przy niskiej temperaturze i ponad 1 kg na godzinę przy pełnej mocy, a przy wietrze i chłodzie więcej. Sześciogodzinne pieczenie karkówki czy żeberek to więc 3–4 kg pelletu. Używaj pelletu przeznaczonego do grillowania, a nie opałowego. Koszt prądu jest niewielki: grzałka zapłonowa pobiera kilkaset watów tylko przez kilka minut, a potem wentylator i podajnik zużywają niewiele energii.",
      },
      {
        question: "Czy warto kupić bezprzewodowy termometr do mięsa?",
        answer: "Tak, zwłaszcza przy dużych kawałkach mięsa i długim pieczeniu, bo wysyła na telefon powiadomienie o osiągnięciu zadanej temperatury i nie trzeba otwierać pokrywy. Termometry Bluetooth mają ograniczony zasięg, zwłaszcza przez ściany, a modele z Wi-Fi pozwalają śledzić pieczenie z dowolnego miejsca. Sonda musi wytrzymać temperaturę panującą w grillu. Drób powinien osiągnąć w najgrubszym miejscu około 75 °C, a karkówka na szarpaną wieprzowinę – około 90 °C.",
      },
      {
        question: "Jak czyścić grill na pellet?",
        answer: "Co kilka użyć usuń popiół z paleniska i wyczyść tackę na tłuszcz: nagromadzony popiół utrudnia rozpalanie, a tłuszcz może się zapalić. Zimny popiół najszybciej usuniesz odkurzaczem do popiołu. Pellet przechowuj w suchym, zamkniętym miejscu, bo wilgotny pęcznieje i blokuje podajnik. Na zimę warto opróżnić zasobnik, przykryć grill pokrowcem i zainstalować aktualizacje aplikacji.",
      },
    ],
    sv: [
      {
        question: "Pelletsgrill eller gasolgrill: vilken ska jag välja?",
        answer: "Pelletsgrill för långsam tillagning med röksmak som du styr från en app, gasolgrill för att grilla snabbt och bryna på hög värme. En pelletsgrill fungerar som en automatisk vedugn: en matarskruv doserar pelletsen efter den temperatur du ställt in, perfekt för en fläskbog eller revbensspjäll som ska tillagas i flera timmar. Den behöver ett eluttag och tar längre tid att bli varm. Gasolgrillen är klar på några minuter och passar bättre för snabb grillning i vardagen.",
      },
      {
        question: "Stekhäll på gasol eller el: vad passar på balkongen och altanen?",
        answer: "På en balkong är en elektrisk stekhäll ofta det enda som är tillåtet; på altanen till ett hus värmer en gasolhäll kraftigare och snabbare. Bor du i flerbostadshus, läs föreningens eller hyresvärdens regler: vissa förbjuder kolgrill, ibland även gasol, på balkongen. En elektrisk stekhäll behöver tillräcklig effekt, ofta 2 000 W eller mer, och ett utomhusuttag som skyddas av en jordfelsbrytare på 30 mA. En häll i emaljerat gjutjärn eller tjockt rostfritt stål håller värmen bättre än tunt stål.",
      },
      {
        question: "Hur mycket pellets går åt i en pelletsgrill?",
        answer: "Räkna med ungefär 0,5 kg i timmen vid rökning på låg temperatur och över 1 kg i timmen på full värme, mer när det är kallt eller blåsigt. En tillagning på 6 timmar på låg temperatur kan alltså kräva 3–4 kg pellets. Använd grillpellets, inte eldningspellets för uppvärmning, som inte är gjorda för matlagning. Elförbrukningen är liten: tändelementet drar några hundra watt i några minuter, därefter drar fläkten och matarskruven bara lite.",
      },
      {
        question: "Är en trådlös stektermometer till grillen värd pengarna?",
        answer: "Ja, för stora köttbitar och långa tillagningar: den mäter kärntemperaturen och larmar i mobilen utan att du behöver öppna locket. Givare med Bluetooth har begränsad räckvidd, som snabbt minskar genom väggar; med en wifi-brygga kan du följa tillagningen var du än är. En helt trådlös givare sticks in hel i köttet, vilket är praktiskt när du grillar på spett. Fågel ska vara genomstekt, runt 74 °C i den tjockaste delen.",
      },
      {
        question: "Hur sköter jag pelletsgrillen så att den tänder som den ska?",
        answer: "Töm askan ur brännkoppen och rengör fettråget regelbundet: aska och fett är två vanliga orsaker till dålig tändning och till brand i grillen. En askdammsugare för kall aska gör jobbet på några minuter efter varannan eller var tredje grillning. Förvara pelletsen torrt: fuktiga pellets sväller och blockerar matarskruven. Skydda grillen med ett överdrag och installera uppdateringarna i appen, som ibland förbättrar temperaturregleringen.",
      },
    ],
    us: [
      {
        question: "Is a smart pellet grill worth it?",
        answer: "Yes, if you enjoy low-and-slow cooking and have an outdoor outlet; less so if you mostly grill burgers and hot dogs in a hurry. A pellet grill holds a set temperature for hours and lets you monitor it from your phone, which helps on cool, windy days. It has to be plugged in, takes longer to heat up than gas and should be covered when not in use, since rain and moisture ruin pellets. Check the hopper size if you plan long cooks.",
      },
      {
        question: "How much does a pellet grill cost to run?",
        answer: "Mostly the pellets: expect roughly 1 lb (0.5 kg) an hour for low-and-slow smoking and over 2 lb (1 kg) an hour at high heat, more in cold or windy weather. A six-hour cook at low temperature typically needs 7 to 9 lb (3 to 4 kg), so multiply by the price of your bag of food-grade grilling pellets (not heating pellets). Electricity is minor: the igniter draws a few hundred watts for a few minutes, then the fan and auger use little.",
      },
      {
        question: "Can I use a pellet grill under a gazebo or in a garage?",
        answer: "Never in a garage or any enclosed space, because burning pellets produce carbon monoxide; a gazebo is only OK if it's open on the sides and well clear of the grill. Follow the clearances in the manual, both above and around the grill, and keep it away from fences, sheds and the side of the house. Plug into a GFCI-protected outdoor outlet rather than running an extension cord through a window. In the rain, a grill cover between cooks is safer than cooking under a fabric canopy.",
      },
      {
        question: "Wireless meat thermometer: Bluetooth or Wi-Fi?",
        answer: "Wi-Fi if you want to check on the cook from anywhere, Bluetooth if you stay in the backyard or kitchen. Bluetooth range drops sharply through walls, so many fully wireless probes use a base unit that relays to Wi-Fi. Choose a probe rated for the grill's ambient temperature. For poultry, aim for 165°F (74°C) in the thickest part of the meat.",
      },
      {
        question: "Why won't my pellet grill light or stay lit?",
        answer: "Usually because of damp pellets, a fire pot full of ash or a failed igniter. Empty the fire pot and vacuum out the cold ash, make sure the pellets are dry and not crumbling into dust, and check that the auger is feeding. If the grill keeps flaming out mid-cook, wet pellets or an empty hopper are the usual suspects. If nothing glows at startup, the igniter rod may need replacing, a common and inexpensive part.",
      },
    ],
    ca: [
      {
        question: "Is a smart pellet grill worth it?",
        answer: "Yes if you enjoy low-and-slow cooking and have an outdoor outlet; less so if you mainly grill burgers and hot dogs in a hurry. A pellet grill holds a set temperature for hours and lets you monitor it from your phone, which helps on cold, windy days. It has to be plugged in, takes longer to heat up than gas and should be covered when not in use, as rain and moisture ruin pellets. Check the hopper size for long cooks.",
      },
      {
        question: "How much does a pellet grill cost to run?",
        answer: "Mostly the pellets: expect roughly 0.5 kg (about 1 lb) an hour for low-and-slow smoking and over 1 kg (about 2 lb) an hour at high heat, more in cold or windy weather. A six-hour cook at low temperature typically needs 3 to 4 kg (about 7 to 9 lb), so multiply by the price of your bag of food-grade pellets. Electricity is minor: the igniter draws a few hundred watts for a few minutes, then the fan and auger use little.",
      },
      {
        question: "Can I use a pellet grill under a gazebo or in a garage?",
        answer: "Never in a garage or any enclosed space, because burning pellets produce carbon monoxide; a gazebo is only acceptable if it is open-sided and well clear of the grill. Follow the clearance distances in the manual, both above and around the grill, and keep it away from fences and sheds. Plug it into a GFCI-protected outdoor outlet rather than running an extension cord through a window. In rain, a snug-fitting grill cover between cooks is safer than cooking under a fabric canopy.",
      },
      {
        question: "Wireless meat thermometer: Bluetooth or Wi-Fi?",
        answer: "Wi-Fi if you want to check the cook from anywhere, Bluetooth if you stay in the backyard or kitchen. Bluetooth range drops sharply through walls, so many fully wireless probes use a base unit that relays to Wi-Fi. Choose a probe rated for the grill's ambient temperature. For poultry, aim for at least 74°C (165°F) in the thickest part, with no pink meat and juices running clear.",
      },
      {
        question: "Why won't my pellet grill light or stay lit?",
        answer: "Usually because of damp pellets, a fire pot full of ash or a failed igniter. Empty the fire pot and vacuum out cold ash, check that the pellets are dry and not crumbling to dust, and make sure the auger is feeding. If the grill keeps flaming out mid-cook, wet pellets or an empty hopper are the usual suspects. If nothing glows at startup, the igniter rod may need replacing, a common and inexpensive part.",
      },
    ],
  },
  "stations-recharge-outdoor": {
    fr: [
      {
        question: "Quelle capacité de station d'énergie portable choisir ?",
        answer: "Additionnez vos besoins, puissance de chaque appareil en watts × heures d'utilisation, puis ajoutez environ 20 % pour les pertes de conversion. Exemple : une glacière de 60 W pendant 10 h (600 Wh) et un ordinateur de 50 W pendant 3 h (150 Wh) demandent 750 Wh, donc une station d'environ 900 Wh. Vérifiez aussi la puissance de sortie en watts, qui doit dépasser celle de l'appareil le plus gourmand, avec une marge pour son pic de démarrage.",
      },
      {
        question: "Station d'énergie portable ou groupe électrogène ?",
        answer: "La station pour un usage silencieux et sans fumée, même à l'intérieur ; le groupe électrogène pour de fortes puissances pendant plusieurs jours. Une station se recharge sur secteur, en voiture ou au solaire, et s'utilise dans une tente, un van ou un salon sans risque d'intoxication. Un groupe électrogène à essence produit du monoxyde de carbone : jamais dans un garage ou une pièce fermée. Il reste plus adapté à un chantier ou à une longue coupure avec beaucoup d'appareils.",
      },
      {
        question: "Combien coûte la recharge d'une station d'énergie portable ?",
        answer: "Environ 30 centimes pour une station de 1 000 Wh : avec les pertes, la recharge consomme environ 1,1 à 1,2 kWh, soit 28 à 30 centimes à 0,25 € le kWh. Si vous êtes au tarif heures creuses, programmez la recharge la nuit pour payer moins. Avec un panneau solaire portable, l'énergie est gratuite mais la charge prend plus de temps : un panneau de 200 W n'atteint sa puissance qu'en plein soleil et produit nettement moins par temps couvert.",
      },
      {
        question: "Peut-on brancher une station d'énergie sur l'installation électrique de la maison ?",
        answer: "Pas directement sur le tableau : sans inverseur de source posé par un électricien, la station risque de renvoyer du courant vers le réseau, ce qui est dangereux pour les techniciens et non autorisé. La solution simple consiste à brancher vos appareils sur ses propres prises, par exemple box internet, congélateur ou chaudière. Certaines stations font office d'onduleur et basculent en quelques millisecondes lors d'une coupure : vérifiez ce temps de bascule si vous protégez un ordinateur.",
      },
      {
        question: "Quelle durée de vie pour une station d'énergie : LiFePO4 ou lithium NMC ?",
        answer: "Préférez le LiFePO4 : ces batteries sont souvent annoncées pour 3 000 cycles ou plus avant de tomber à 80 % de capacité, contre quelques centaines à un millier pour le NMC. Le NMC est plus léger à capacité égale, utile pour la randonnée ou un petit modèle. Pour préserver la batterie, stockez-la entre 50 et 80 % de charge, à l'abri du gel et de la chaleur, et rechargez-la tous les trois mois si elle ne sert pas.",
      },
    ],
    en: [
      {
        question: "What size portable power station do I need?",
        answer: "Add up watts × hours for everything you will run, then add about 20% for conversion losses. For example, a 60 W cool box for 10 hours (600 Wh) plus a 50 W laptop for 3 hours (150 Wh) is 750 Wh, so look for around 900 Wh. Also check that the continuous output in watts covers your most demanding appliance, including its start-up surge. For long life, a LiFePO4 battery is the better choice, usually rated for thousands of cycles.",
      },
      {
        question: "Can a portable power station run a CPAP machine in a power cut?",
        answer: "Yes, most can: a CPAP using 40 W for an eight-hour night needs about 320 Wh, plus more if the humidifier is on. Check your machine's actual consumption, and use a DC lead where the manufacturer offers one, as that wastes less energy than the AC inverter. If you rely on medical equipment, also join your electricity network's Priority Services Register, and call 105 to report a power cut in England, Scotland or Wales.",
      },
      {
        question: "How much does it cost to charge a portable power station?",
        answer: "Pennies: fully charging a 1,000 Wh unit takes about 1.1–1.2 kWh with losses, so around 30p at an example rate of 25p per kWh. On an off-peak tariff such as Economy 7 or a smart time-of-use tariff, charge it overnight to pay less. Solar charging is free but slower: a 200 W portable panel only reaches its rating in full sun, which is rare in a British winter. Charging from a car's 12 V socket is handy on the move but slow.",
      },
      {
        question: "Can I take a portable power station on a plane?",
        answer: "Almost never: lithium batteries over 160 Wh are banned from passenger aircraft, and most power stations are well above that. Batteries between 100 and 160 Wh need the airline's approval and must travel in the cabin, not in checked luggage. A power bank under 100 Wh is fine in hand luggage. For trips abroad, plan to hire a power station at your destination or bring only a solar panel.",
      },
      {
        question: "Portable power station or petrol generator for camping?",
        answer: "A power station for most camping: it is silent, fume-free and safe inside a tent or campervan, which a petrol generator never is. Many campsites restrict or ban generators because of noise, so check the rules before you go. A generator only makes sense for heavy loads over several days without a hook-up. Paired with a portable solar panel, a power station can keep phones, lights and a cool box going for a long weekend.",
      },
    ],
    de: [
      {
        question: "Welche Kapazität braucht eine Powerstation?",
        answer: "Addieren Sie Watt × Stunden aller Geräte und rechnen Sie etwa 20 % für Umwandlungsverluste hinzu. Beispiel: Eine Kühlbox mit 60 W für 10 Stunden (600 Wh) und ein Laptop mit 50 W für 3 Stunden (150 Wh) ergeben 750 Wh, also eine Powerstation mit rund 900 Wh. Die Dauerleistung in Watt muss außerdem das stärkste Gerät samt Anlaufspitze abdecken; Kühlschränke und Werkzeuge brauchen beim Start kurz ein Vielfaches ihrer Nennleistung.",
      },
      {
        question: "Darf eine Powerstation ins Hausnetz einspeisen, etwa mit Balkonkraftwerk?",
        answer: "Nur, wenn sie dafür zugelassen ist und als Teil eines Balkonkraftwerks angemeldet wird; als reines Inselgerät, an dessen Steckdosen Sie Verbraucher anschließen, ist sie unproblematisch. In Deutschland gelten steckerfertige Solaranlagen bis 800 W Wechselrichterleistung als vereinfacht anmeldbar, registriert wird im Marktstammdatenregister. Eine selbst gebastelte Rückspeisung über die Steckdose ist gefährlich und nicht erlaubt. In Österreich und der Schweiz gelten eigene Regeln, fragen Sie Ihren Netzbetreiber.",
      },
      {
        question: "Powerstation oder Notstromaggregat für den Stromausfall?",
        answer: "Für Kühlschrank, Router, Licht und Handys über einige Stunden reicht eine Powerstation; für mehrere Tage oder große Lasten ist ein Notstromaggregat leistungsfähiger. Die Powerstation ist leise, abgasfrei und darf in der Wohnung stehen. Ein Benzinaggregat erzeugt Kohlenmonoxid und gehört ausschließlich ins Freie, außerdem müssen Sie Kraftstoff sicher lagern. Rechnen Sie: Ein Kühlschrank mit 1 kWh pro Tag leert eine Station mit 1.000 Wh in knapp einem Tag.",
      },
      {
        question: "Was kostet das Laden einer Powerstation und lohnt Solarladung?",
        answer: "Eine volle Ladung von 1.000 Wh braucht mit Verlusten etwa 1,1 bis 1,2 kWh, kostet also rund 40 Cent bei 0,35 € pro kWh. Solarstrom ist kostenlos, die Ladung dauert aber länger: Ein 200-W-Modul erreicht seine Nennleistung nur bei voller Sonne und liefert bei Bewölkung deutlich weniger. Als Stromsparer im Alltag lohnt eine Powerstation kaum, ihr Nutzen liegt in Mobilität und Notstrom.",
      },
      {
        question: "LiFePO4 oder NMC: wie lange hält der Akku einer Powerstation?",
        answer: "LiFePO4 hält deutlich länger: Hersteller geben meist 3.000 Ladezyklen oder mehr bis 80 % Restkapazität an, bei NMC sind es einige Hundert bis etwa tausend. NMC ist bei gleicher Kapazität leichter. Lagern Sie die Powerstation bei 50 bis 80 % Ladung, frostfrei und nicht in praller Sonne, und laden Sie sie etwa alle drei Monate nach. Im Hochsommer im Auto liegen zu lassen, schadet dem Akku.",
      },
    ],
    es: [
      {
        question: "¿Sirve una estación de energía portátil para un apagón como el de abril de 2025?",
        answer: "Sí, para lo esencial: móviles, router, luces y la nevera durante unas horas, pero no para toda la casa. En el apagón del 28 de abril de 2025, con buena parte de la península sin luz durante horas, una estación de 1.000 Wh habría bastado para mantener comunicaciones e iluminación. Calcula vatios por horas: un router de 10 W durante 10 horas gasta 100 Wh, y una nevera que consume 1 kWh al día agota esa estación en menos de un día.",
      },
      {
        question: "¿Qué capacidad necesito en una estación de energía portátil?",
        answer: "Suma vatios por horas de cada aparato y añade un 20 % por las pérdidas de conversión. Ejemplo: una nevera portátil de 60 W durante 10 horas (600 Wh) y un portátil de 50 W durante 3 horas (150 Wh) suman 750 Wh, así que busca unos 900 Wh. Comprueba también que la potencia de salida supera la del aparato más exigente, incluido su pico de arranque. Para una autocaravana, valora además la carga desde la toma de 12 V del vehículo.",
      },
      {
        question: "¿Cuánto cuesta cargar una estación de energía portátil?",
        answer: "Unos céntimos: con las pérdidas, cargar una estación de 1.000 Wh consume de 1,1 a 1,2 kWh, unos 17 céntimos con un precio de ejemplo de 0,15 €/kWh. Con una tarifa con discriminación horaria, el periodo valle (de 0 a 8 h entre semana y todo el fin de semana) es el más barato, así que conviene programar la carga entonces. No esperes ahorrar en la factura usándola como batería doméstica: su capacidad es pequeña y las pérdidas se comen la diferencia de precio.",
      },
      {
        question: "¿Estación de energía portátil o generador de gasolina para la autocaravana?",
        answer: "La estación, para la mayoría de los viajes: es silenciosa, no echa humo y se puede usar dentro del vehículo, algo impensable con un generador. Muchos campings limitan o prohíben los generadores por el ruido, sobre todo de noche. El generador solo compensa si necesitas mucha potencia, por ejemplo para un aire acondicionado, durante días sin enchufe. Combinada con un panel solar portátil, una estación mantiene la nevera, las luces y los móviles durante una escapada larga.",
      },
      {
        question: "¿Cuánto dura la batería de una estación de energía portátil?",
        answer: "Con química LiFePO4, los fabricantes suelen anunciar 3.000 ciclos o más antes de bajar al 80 % de capacidad; con NMC, de unos cientos a mil. Usándola a diario, eso son años; en uso ocasional, el paso del tiempo pesa más que los ciclos. Guárdala entre el 50 y el 80 % de carga, recárgala cada tres meses y no la dejes al sol dentro del coche en verano, porque el calor es lo que más la daña.",
      },
    ],
    it: [
      {
        question: "Quale capacità scegliere per una power station portatile?",
        answer: "Per ogni apparecchio moltiplica i watt per le ore di utilizzo, somma i risultati e aggiungi circa il 20% per le perdite di conversione. Per esempio, un frigo portatile da 60 W per 10 ore (600 Wh) e un computer portatile da 50 W per 3 ore (150 Wh) fanno 750 Wh, quindi serve una power station da circa 900 Wh. Controlla anche che la potenza in uscita copra l'apparecchio più esigente, compreso il picco di avvio di frigoriferi e utensili elettrici.",
      },
      {
        question: "Power station portatile o generatore a benzina per camper e campeggio?",
        answer: "Nella maggior parte dei casi la power station: è silenziosa, non produce gas di scarico e si può usare dentro il camper. Molti campeggi limitano i generatori per il rumore, soprattutto nelle ore di silenzio. Il generatore ha senso solo per carichi elevati, come un condizionatore, e per più giorni senza allaccio elettrico. Abbinata a un pannello solare portatile, la power station tiene in funzione frigo, luci e telefoni per un weekend lungo.",
      },
      {
        question: "Quanto costa ricaricare una power station e conviene farlo in fascia F3?",
        answer: "Una ricarica completa da 1.000 Wh costa meno di mezzo euro: con le perdite servono 1,1-1,2 kWh, cioè circa 28-30 centesimi con un prezzo d'esempio di 0,25 € al kWh. Con una tariffa a fasce conviene caricarla di notte o nei festivi, in F3, quando il prezzo è più basso. Non aspettarti però di risparmiare in bolletta usandola come accumulo domestico: la capacità è piccola e le perdite annullano gran parte della differenza tra le fasce.",
      },
      {
        question: "Posso usare la power station durante un blackout, anche per la caldaia?",
        answer: "Sì, per gli apparecchi essenziali come router, luci, frigorifero e anche la caldaia a gas, che senza corrente non si accende. Serve un modello con uscita a onda sinusoidale pura, e la caldaia va collegata solo se ha una spina: altrimenti un elettricista deve predisporre una presa dedicata. Alcuni modelli fanno da gruppo di continuità e intervengono in pochi millisecondi. Non collegarla mai all'impianto di casa dal quadro senza un commutatore installato da un professionista.",
      },
      {
        question: "Quanto dura la batteria di una power station: LiFePO4 o NMC?",
        answer: "Molto di più con le LiFePO4: i produttori indicano in genere 3.000 cicli o più prima di scendere all'80% della capacità, contro qualche centinaio, fino a mille, per le NMC. Le NMC sono più leggere a parità di capacità. Conserva la power station tra il 50 e l'80% di carica, al riparo da gelo e caldo, e ricaricala ogni tre mesi se non la usi. D'estate non lasciarla in auto al sole.",
      },
    ],
    nl: [
      {
        question: "Hoort een powerstation in je noodpakket?",
        answer: "Het is een nuttige aanvulling als je je wilt voorbereiden op 72 uur zonder stroom, zoals de overheid adviseert. Een station van 500 Wh houdt telefoons, ledlampen en een radio dagenlang aan de gang; een koelkast vraagt veel meer. Laad hem elke paar maanden bij, want een lege powerstation helpt je niet bij een storing. Een radio op batterijen, een zaklamp en drinkwater blijven ook nodig.",
      },
      {
        question: "Hoeveel Wh moet een powerstation hebben?",
        answer: "Tel watt × uren op voor alles wat je wilt gebruiken en tel daar zo'n 20% bij op voor omzettingsverliezen. Voorbeeld: een koelbox van 60 W gedurende 10 uur (600 Wh) en een laptop van 50 W gedurende 3 uur (150 Wh) is 750 Wh, dus kies rond de 900 Wh. Controleer ook of het continue vermogen het zwaarste apparaat aankan, inclusief de aanloopstroom. Wil je lang plezier, kies dan een LiFePO4-accu.",
      },
      {
        question: "Powerstation of thuisbatterij: wat is het verschil?",
        answer: "Een powerstation is draagbaar en voedt apparaten via eigen stopcontacten; een thuisbatterij wordt vast aangesloten op je meterkast en zonnepanelen. Nu de salderingsregeling op 1 januari 2027 stopt, wordt opslag van zonnestroom interessanter, en daarvoor is een thuisbatterij bedoeld, met veel meer capaciteit en een installateur. Een powerstation kun je overdag wel opladen met eigen zonnestroom en 's avonds gebruiken, maar de besparing blijft klein door de beperkte capaciteit.",
      },
      {
        question: "Wat kost het opladen van een powerstation?",
        answer: "Weinig: een volle lading van 1.000 Wh vraagt met verliezen zo'n 1,1 tot 1,2 kWh, ongeveer 35 cent bij € 0,30 per kWh. Met een dynamisch energiecontract laad je hem op de goedkoopste uren, soms 's nachts of midden op een zonnige dag. Met een draagbaar zonnepaneel is laden gratis maar trager: een paneel van 200 W haalt dat vermogen alleen in volle zon. Laden via de auto kan onderweg, maar gaat langzaam.",
      },
      {
        question: "Hoe lang gaat de accu van een powerstation mee?",
        answer: "Met LiFePO4 lang: fabrikanten noemen meestal 3.000 laadcycli of meer tot 80% capaciteit, bij NMC zijn dat er een paar honderd tot duizend. NMC is wel lichter bij dezelfde capaciteit. Bewaar het station tussen 50 en 80% lading, vorstvrij en uit de zon, en laad het om de drie maanden bij als je het niet gebruikt. Laat het in de zomer niet in een hete auto liggen.",
      },
    ],
    pl: [
      {
        question: "Jaką pojemność stacji zasilania wybrać?",
        answer: "Zsumuj zużycie wszystkich urządzeń (moc w watach × liczba godzin pracy) i dodaj około 20% na straty przetwarzania. Przykład: lodówka turystyczna 60 W przez 10 godzin (600 Wh) i laptop 50 W przez 3 godziny (150 Wh) dają 750 Wh, więc warto szukać stacji o pojemności około 900 Wh. Moc wyjściowa musi też wystarczyć dla najbardziej prądożernego urządzenia, łącznie z jego mocą rozruchową. Jeśli stacja ma służyć przez lata, wybierz akumulator LiFePO4.",
      },
      {
        question: "Stacja zasilania czy agregat prądotwórczy na działkę?",
        answer: "Na działkę bez prądu, także w ROD, lepsza jest stacja zasilania: jest cicha, nie spala paliwa i nie przeszkadza sąsiadom. Regulaminy ogrodów działkowych często ograniczają hałas, a agregat słychać z daleka. Stację można ładować w domu, z samochodu lub z panelu słonecznego i zasilać nią lodówkę, oświetlenie czy elektronarzędzia o umiarkowanej mocy. Agregat ma sens przy prądożernych urządzeniach, takich jak pompa czy betoniarka, i zawsze należy go uruchamiać na zewnątrz.",
      },
      {
        question: "Ile kosztuje naładowanie stacji zasilania?",
        answer: "Niewiele: pełne naładowanie stacji 1000 Wh pobiera ze stratami około 1,1–1,2 kWh, czyli 1,10–1,20 zł przy przykładowej cenie 1 zł za kWh. W taryfie G12 opłaca się ładować w tańszych godzinach, zwykle w nocy i w części popołudnia, zależnie od operatora. Ładowanie z panelu słonecznego jest bezpłatne, ale wolniejsze: panel 200 W osiąga tę moc tylko w pełnym słońcu. Stacja zasilania nie jest natomiast sposobem na obniżenie domowych rachunków.",
      },
      {
        question: "Czy można zabrać stację zasilania do samolotu?",
        answer: "Prawie nigdy: akumulatorów litowych o pojemności powyżej 160 Wh nie wolno przewozić samolotami pasażerskimi, a większość stacji ma znacznie więcej. Baterie od 100 do 160 Wh wymagają zgody linii lotniczej i mogą lecieć tylko w bagażu podręcznym. Powerbank poniżej 100 Wh możesz zabrać do kabiny bez zgody przewoźnika. Na wyjazd samolotem lepiej wypożyczyć stację na miejscu albo zabrać sam panel słoneczny.",
      },
      {
        question: "Jak długo wytrzyma akumulator stacji zasilania?",
        answer: "Według producentów akumulator LiFePO4 wytrzymuje zwykle co najmniej 3000 cykli, zanim jego pojemność spadnie do 80%, a akumulator NMC – od kilkuset do około tysiąca. NMC jest za to lżejszy przy tej samej pojemności. Stację najlepiej przechowywać naładowaną w 50–80%, w temperaturze dodatniej i z dala od słońca, doładowując ją co trzy miesiące. Mróz w garażu i upał w samochodzie skracają żywotność akumulatora.",
      },
    ],
    sv: [
      {
        question: "Hur stor portabel kraftstation behöver jag?",
        answer: "Räkna ut ditt behov, varje apparats effekt i watt gånger antalet timmar, och lägg till ungefär 20 % för omvandlingsförluster. Exempel: en kylbox på 60 W i 10 timmar (600 Wh) och en bärbar dator på 50 W i 3 timmar (150 Wh) kräver 750 Wh, alltså en kraftstation på ca 900 Wh. Kontrollera också uteffekten i watt, som måste vara högre än den mest krävande apparatens effekt, med marginal för effekttoppen vid start.",
      },
      {
        question: "Portabel kraftstation eller elverk: vad ska jag välja?",
        answer: "Välj kraftstation för tyst drift utan avgaser, även inomhus, och elverk när du behöver hög effekt i flera dagar. En kraftstation laddas från elnätet, i bilen eller med solpaneler och kan användas i tältet, husbilen eller vardagsrummet utan risk för koloxidförgiftning. Ett bensindrivet elverk avger koloxid och får aldrig stå i ett garage eller ett stängt rum. Det passar ändå bättre för ett bygge eller ett långt strömavbrott med många apparater.",
      },
      {
        question: "Vad kostar det att ladda en portabel kraftstation?",
        answer: "Drygt 3 kr för en kraftstation på 1 000 Wh: med förlusterna drar laddningen ca 1,1–1,2 kWh, alltså ca 3,00–3,30 kr med ett exempelpris på 2,75 kr/kWh. Har ditt elavtal billigare el på natten, ladda den då. Med en portabel solpanel är energin gratis men laddningen tar längre tid: en panel på 200 W ger bara full effekt i stark sol och betydligt mindre när det är mulet. Ditt eget elpris står på elräkningen.",
      },
      {
        question: "Kan jag koppla kraftstationen till husets elsystem?",
        answer: "Inte direkt i elcentralen: utan en reservkraftomkopplare som installerats av en behörig elektriker riskerar kraftstationen att mata ut ström på elnätet, vilket är farligt för dem som arbetar på ledningarna och inte är tillåtet. Det enklaste är att koppla in apparaterna i kraftstationens egna uttag, till exempel routern, frysen eller värmepannan. Vissa kraftstationer fungerar som UPS (avbrottsfri kraft) och kopplar om på några millisekunder vid strömavbrott: kontrollera omkopplingstiden om du vill skydda en dator.",
      },
      {
        question: "LiFePO4 eller NMC: hur länge håller en kraftstation?",
        answer: "Välj LiFePO4: tillverkarna anger ofta 3 000 cykler eller fler för sådana batterier innan kapaciteten sjunker till 80 %, mot några hundra till tusen cykler för NMC. NMC är lättare vid samma kapacitet, vilket är en fördel på vandring eller i en liten modell. För att batteriet ska hålla länge, förvara det med 50–80 % laddning, frostfritt och skyddat från värme, och ladda det var tredje månad om det inte används.",
      },
    ],
    us: [
      {
        question: "What size portable power station do I need?",
        answer: "Add up watts × hours for everything you'll run, then add about 20% for conversion losses. For example, a 60 W electric cooler for 10 hours (600 Wh) plus a 50 W laptop for 3 hours (150 Wh) comes to 750 Wh, so look for around 900 Wh. Also make sure the continuous output in watts covers your most demanding appliance, including its startup surge. For a long service life, a LiFePO4 battery is the better choice, usually rated for thousands of cycles.",
      },
      {
        question: "Can a portable power station run a CPAP machine during a power outage?",
        answer: "Yes, most can: a CPAP using 40 W for an eight-hour night needs about 320 Wh, plus more if the heated humidifier is on. Check your machine's actual power draw, and use a DC cord where the manufacturer offers one, since that wastes less energy than the AC inverter. If you rely on medical equipment, choose a station that covers more than one night and keep it charged, because outages can last longer than expected.",
      },
      {
        question: "How much does it cost to charge a portable power station?",
        answer: "Very little: fully charging a 1,000 Wh unit takes about 1.1 to 1.2 kWh with losses, roughly 20 to 22 cents at the US average residential rate of 18.16 cents per kWh (EIA, August 2026). Check the rate on your utility bill. On a time-of-use rate plan, charge it overnight for less. Solar charging is free but slower: a 200 W portable panel only reaches its rating in full sun and produces much less on cloudy or winter days. Charging from a car's 12 V outlet is handy on the road but slow.",
      },
      {
        question: "Can I take a portable power station on a plane?",
        answer: "Almost never: lithium batteries over 160 Wh are banned on passenger aircraft, and most power stations are well above that. Batteries between 100 and 160 Wh need the airline's approval and must travel in the cabin, not in checked bags. A power bank under 100 Wh is fine in your carry-on. For trips abroad, plan to rent a power station at your destination or bring only a solar panel.",
      },
      {
        question: "Portable power station or gas generator for camping?",
        answer: "A power station for most camping: it's silent, fume-free and safe inside a tent or camper van, which a gas generator never is, because it produces carbon monoxide. Many campgrounds restrict or ban generators because of the noise, so check the rules before you go. A generator only makes sense for heavy loads over several days without an electrical hookup. Paired with a portable solar panel, a power station can keep phones, lights and an electric cooler running through a long weekend.",
      },
    ],
    ca: [
      {
        question: "What size portable power station do I need?",
        answer: "Add up watts × hours for everything you'll run, then add about 20% for conversion losses. For example, a 60 W electric cooler for 10 hours (600 Wh) plus a 50 W laptop for 3 hours (150 Wh) is 750 Wh, so look for around 900 Wh. Also check that the continuous output in watts covers your most demanding appliance, including its startup surge. For long life, a LiFePO4 battery is the better choice, usually rated for thousands of cycles.",
      },
      {
        question: "Can a portable power station run a CPAP machine during a power outage?",
        answer: "Yes, most can: a CPAP using 40 W for an eight-hour night needs about 320 Wh, plus more if the humidifier is on. Check your machine's actual consumption, and use a DC cord where the manufacturer offers one, as that wastes less energy than the AC inverter. If you rely on medical equipment, keep the station fully charged, plan for outages that last more than one night and keep your utility's outage number handy.",
      },
      {
        question: "How much does it cost to charge a portable power station?",
        answer: "Very little: fully charging a 1,000 Wh unit takes about 1.1 to 1.2 kWh with losses, so a full charge costs 1.1 to 1.2 times your rate per kWh. Your rate depends on your province and utility, so check your bill; with time-of-use rates, charge it overnight for less. Solar charging is free but slower: a 200 W portable panel only reaches its rating in full sun, which is rare on short winter days. Charging from a car's 12 V outlet is handy on the road but slow.",
      },
      {
        question: "Can I take a portable power station on a plane?",
        answer: "Almost never: lithium batteries over 160 Wh are banned from passenger aircraft, and most power stations are well above that. Batteries between 100 and 160 Wh need the airline's approval and must travel in the cabin, not in checked baggage. A power bank under 100 Wh is fine in your carry-on. For trips abroad, plan to rent a power station at your destination or bring only a solar panel.",
      },
      {
        question: "Portable power station or gas generator for camping?",
        answer: "A power station for most camping: it's silent, fume-free and safe inside a tent or camper van, which a gas generator never is. Many campgrounds restrict or ban generators because of noise, so check the rules before you go. A generator only makes sense for heavy loads over several days without an electrical hookup. Paired with a portable solar panel, a power station can keep phones, lights and a cooler going for a long weekend.",
      },
    ],
  },
  "alarmes-exterieures": {
    fr: [
      {
        question: "Pourquoi mon détecteur extérieur déclenche-t-il des fausses alarmes ?",
        answer: "Le plus souvent à cause d'animaux, de végétation qui bouge ou du soleil qui chauffe la zone surveillée. Orientez le détecteur vers une zone dégagée, jamais face à la rue, à une haie ou au soleil levant, et réduisez sa sensibilité. Les modèles à double technologie, infrarouge et hyperfréquence, ne déclenchent que si les deux capteurs détectent un mouvement, ce qui limite les erreurs. Taillez les branches proches et retirez les toiles d'araignée de la lentille.",
      },
      {
        question: "Quel détecteur extérieur choisir quand on a un chat ou un chien ?",
        answer: "Un détecteur à immunité animaux, réglé sur le poids de votre animal et installé à la hauteur prévue par le fabricant. L'immunité repose sur le fait d'ignorer les petites masses proches du sol : un chien qui saute sur un muret peut quand même déclencher. Pour une façade, un détecteur rideau, qui surveille une fine bande le long du mur, évite de couvrir le jardin où circulent les animaux. Les modèles avec caméra permettent de vérifier une alerte depuis le téléphone.",
      },
      {
        question: "Combien de temps une sirène extérieure peut-elle sonner ?",
        answer: "Il n'existe pas de règle nationale unique : la durée et la puissance des sirènes peuvent être limitées par arrêté préfectoral ou municipal, par exemple à 3 minutes. Renseignez-vous en mairie et réglez la temporisation de la centrale en conséquence. Une sirène qui hurle longtemps pour rien expose à des plaintes pour bruit de voisinage. Associez-la à une notification sur smartphone pour lever le doute et l'arrêter à distance.",
      },
      {
        question: "Alarme extérieure avec ou sans abonnement de télésurveillance ?",
        answer: "Sans abonnement si vous pouvez réagir vous-même aux alertes reçues sur votre téléphone ; avec télésurveillance si vous êtes souvent absent ou si votre assureur l'exige. Un télésurveilleur lève le doute, par exemple avec les images d'une caméra, puis prévient les forces de l'ordre si l'intrusion est confirmée. Les assureurs demandent souvent un prestataire certifié APSAD. Sans abonnement, prévoyez des voisins ou des proches capables d'intervenir quand vous êtes loin.",
      },
      {
        question: "Comment protéger un abri de jardin ou un garage sans électricité ?",
        answer: "Avec des détecteurs et une sirène sur piles, reliés par radio à votre centrale, ou à une passerelle 4G si l'abri est loin de la maison. Vérifiez la portée radio entre l'abri et la centrale, souvent réduite par les murs. Un contact d'ouverture sur la porte et un détecteur intérieur suffisent généralement. Ajoutez un bon cadenas ou une serrure renforcée, car l'alarme prévient mais n'arrête pas le voleur, et photographiez vos outils et vélos avec leurs numéros de série.",
      },
    ],
    en: [
      {
        question: "Why does my outdoor PIR sensor keep giving false alarms?",
        answer: "Usually foxes, cats, moving branches or sunlight warming the area it watches. Aim the sensor at a clear zone, never at a road, hedge or the rising sun, and lower its sensitivity. Dual-technology sensors, combining infrared and microwave, only trigger when both detect movement, which cuts false alarms. Trim nearby branches, clear cobwebs from the lens and choose a pet-tolerant model if foxes cross your garden at night.",
      },
      {
        question: "What's the best way to alarm a garden shed?",
        answer: "Fit a battery-powered door contact and motion sensor linked to your home alarm, or a standalone shed alarm with a loud siren. Check the radio range from the shed to the house, as walls and distance reduce it. Add a decent lock and secure hinges, because an alarm warns but does not stop a determined thief. Lock bikes and expensive tools to a ground or wall anchor, and record serial numbers in case you need to report a theft.",
      },
      {
        question: "Can my outdoor alarm siren ring for as long as it likes?",
        answer: "No: set an automatic cut-off, because an alarm that keeps ringing can be treated by your council as a statutory noise nuisance. Under the Environmental Protection Act 1990, councils can act against noise from alarms, and in some cases arrange for them to be silenced. Use the shortest siren time your system allows and nominate a keyholder who can reach the property when you are away. Phone notifications let you check what triggered it and switch it off remotely.",
      },
      {
        question: "Monitored or self-monitored outdoor alarm: do I need a subscription?",
        answer: "Not for self-monitoring, where alerts go to your phone; a subscription is needed for professional monitoring and police response. In the UK, police only respond to monitored alarms installed and maintained by a company certified by an inspectorate such as NSI or SSAIB, which then registers the system with the police for a unique reference number. A self-monitored system is cheaper but relies on you or a neighbour to act. Some insurers require monitoring for high-value contents.",
      },
      {
        question: "How long do batteries last in wireless outdoor sensors?",
        answer: "Anything from one to several years, depending on how often the sensor triggers and how cold it gets. Cold weather drains lithium cells faster, and sensors facing a busy path use more power. Most systems warn in the app when a battery runs low, so replace it then rather than waiting for a dead sensor. Check the battery type in the manual and keep a spare, as many sensors use less common lithium sizes.",
      },
    ],
    de: [
      {
        question: "Außenalarm ohne Abo: geht das?",
        answer: "Ja, eine Außenalarmanlage funktioniert ohne Abo, wenn Ihnen Push-Meldung, Sirene und eigene Reaktion genügen. Ein Abo brauchen Sie für die Aufschaltung auf eine Notruf- und Serviceleitstelle, die Alarme prüft und Hilfe schickt. Verlangt Ihre Versicherung eine Anlage nach VdS-Richtlinien, kommen Sie um einen zertifizierten Errichter meist nicht herum. Achten Sie bei abofreien Systemen darauf, dass der Cloud-Speicher für Kamerabilder nicht doch kostenpflichtig ist.",
      },
      {
        question: "Bewegungsmelder außen löst ständig aus: was hilft?",
        answer: "Meist sind Katzen, Igel, Äste im Wind oder Sonneneinstrahlung schuld, also helfen eine andere Ausrichtung und eine geringere Empfindlichkeit. Richten Sie den Melder nicht auf Straße, Hecke oder Morgensonne. Dual-Melder mit Infrarot und Mikrowelle lösen nur aus, wenn beide Sensoren anschlagen. Modelle mit Haustier-Immunität ignorieren kleine Tiere bis zu einem angegebenen Gewicht. Schneiden Sie Zweige zurück und entfernen Sie Spinnweben von der Linse.",
      },
      {
        question: "Wie lange darf eine Außensirene heulen?",
        answer: "So kurz wie möglich: Viele Anlagen begrenzen den Signalton auf wenige Minuten; ob an Ihrem Wohnort eine feste Höchstdauer gilt, erfahren Sie bei Gemeinde oder Ordnungsamt. Eine Sirene, die lange ohne Grund läuft, kann als Ruhestörung geahndet werden, und das Ordnungsamt kann einschreiten. Stellen Sie in der Zentrale eine kurze Sirenenzeit ein und lassen Sie danach nur noch das Blitzlicht laufen. Mit App-Benachrichtigung prüfen Sie den Alarm aus der Ferne und schalten ihn ab.",
      },
      {
        question: "Wie sichere ich Gartenhaus, Garage oder Carport ohne Stromanschluss?",
        answer: "Mit batteriebetriebenen Funkmeldern und einer Akku-Sirene, die per Funk mit der Zentrale im Haus oder per LTE mit Ihrem Handy verbunden sind. Prüfen Sie vorab die Funkreichweite bis zum Gartenhaus, denn Wände und Entfernung verringern sie. Ein Öffnungsmelder an der Tür und ein Bewegungsmelder innen reichen meist aus. Für E-Bikes und Werkzeug lohnt zusätzlich ein Bodenanker. Klären Sie mit der Hausratversicherung, ob Nebengebäude mitversichert sind.",
      },
      {
        question: "Wie lange halten die Batterien von Außenmeldern?",
        answer: "Meist ein bis mehrere Jahre, abhängig davon, wie oft der Melder auslöst und wie kalt es wird. Frost schwächt Lithiumzellen, und Melder an belebten Wegen verbrauchen mehr. Die meisten Systeme melden einen niedrigen Ladestand in der App; tauschen Sie die Batterie dann zügig, statt auf einen Ausfall zu warten. Halten Sie eine Ersatzbatterie des richtigen Typs bereit, denn viele Melder nutzen seltenere Lithiumformate.",
      },
    ],
    es: [
      {
        question: "¿Necesito una empresa autorizada para conectar la alarma a una central receptora?",
        answer: "Sí: en España, conectar una alarma a una central receptora solo pueden hacerlo empresas de seguridad autorizadas, según la Ley 5/2014 de Seguridad Privada. Una alarma que solo avisa a tu móvil la puedes instalar tú mismo sin ese requisito. La conexión a central permite que un operador verifique el salto, por ejemplo con imágenes, y avise a la policía si se confirma la intrusión. Comprueba que la empresa figure en el registro del Ministerio del Interior.",
      },
      {
        question: "¿Qué alarma exterior conviene para una segunda residencia o una casa de campo?",
        answer: "Una alarma con conexión 4G y batería, que no dependa del wifi ni de la luz de la casa. Combina detectores exteriores con contactos en puertas y ventanas, y una sirena exterior visible que disuada. Si la casa pasa meses vacía, valora la conexión a central receptora o un vecino de confianza que pueda acudir. Elige detectores con inmunidad a mascotas si hay gatos o perros por la zona y revisa las pilas antes de cada temporada.",
      },
      {
        question: "¿Por qué salta la alarma exterior sin motivo?",
        answer: "Lo habitual es que la disparen gatos, ramas movidas por el viento o el sol que calienta la zona vigilada. Orienta el detector hacia una zona despejada, nunca hacia la calle, un seto o donde da el sol de la mañana, y baja la sensibilidad. Los detectores de doble tecnología, infrarrojo y microondas, solo saltan si detectan movimiento los dos sensores. Poda las ramas cercanas y limpia las telarañas de la lente.",
      },
      {
        question: "¿Alarma exterior con cuota mensual o sin cuotas?",
        answer: "Sin cuotas, si te basta con recibir los avisos en el móvil y reaccionar tú; con cuota mensual, si quieres que una central verifique los saltos y avise a la policía. La cuota paga el servicio de la central receptora, el mantenimiento y, a menudo, el servicio de acuda. Sin cuotas pagas solo el equipo, pero si estás lejos dependes de un vecino o un familiar. Revisa la permanencia mínima del contrato antes de firmar.",
      },
      {
        question: "¿Cuánto duran las pilas de los sensores exteriores?",
        answer: "Normalmente entre uno y varios años, según la frecuencia con que salten y la temperatura que soporten. En zonas muy soleadas el calor también desgasta las pilas, igual que el frío en la montaña. La mayoría de sistemas avisan en la app cuando queda poca batería: cámbialas entonces, sin esperar a que el sensor deje de funcionar. Ten de repuesto el tipo exacto que indica el manual, porque muchos usan pilas de litio poco comunes.",
      },
    ],
    it: [
      {
        question: "Come proteggere il giardino con un allarme perimetrale esterno?",
        answer: "Combina barriere a infrarossi lungo la recinzione, sensori a tenda su porte e finestre e rilevatori da esterno a doppia tecnologia nelle zone di passaggio. Le barriere segnalano chi scavalca prima che arrivi alla casa, i sensori a tenda creano una cortina invisibile davanti agli infissi. Scegli modelli con immunità agli animali e una sirena esterna con lampeggiante. Fai attenzione alla vegetazione e alle superfici che si scaldano al sole, tra le prime cause di falsi allarmi.",
      },
      {
        question: "Perché l'allarme esterno scatta da solo?",
        answer: "Di solito per gatti, rami mossi dal vento o il sole che scalda la zona sorvegliata. Orienta il rilevatore verso un'area libera, mai verso la strada, una siepe o il sole del mattino, e riduci la sensibilità. I rilevatori a doppia tecnologia, infrarosso e microonde, scattano solo se entrambi i sensori rilevano movimento. Pota i rami vicini e pulisci la lente dalle ragnatele.",
      },
      {
        question: "Allarme esterno con o senza abbonamento?",
        answer: "Senza abbonamento se ti bastano le notifiche sullo smartphone e puoi intervenire tu; con abbonamento se vuoi una centrale operativa che verifichi l'allarme. La vigilanza privata collegata può controllare le immagini e mandare una pattuglia, un servizio utile per le seconde case. Senza canone paghi solo l'impianto, ma quando sei lontano dipendi da vicini o parenti. Controlla durata minima e costi di recesso prima di firmare.",
      },
      {
        question: "Si può detrarre il costo di un antifurto?",
        answer: "Sì, l'installazione di un impianto antifurto rientra tra i lavori ammessi al bonus ristrutturazioni, con detrazione IRPEF ripartita in dieci anni. L'aliquota cambia in base all'anno e al tipo di abitazione, quindi verifica quella in vigore sul sito dell'Agenzia delle Entrate. Paga con bonifico parlante e conserva fattura e ricevute. Di norma sono agevolabili anche sensori, sirene e telecamere che fanno parte dell'impianto.",
      },
      {
        question: "Quanto durano le batterie dei sensori da esterno?",
        answer: "In genere da uno a diversi anni, a seconda di quanto spesso scattano e delle temperature. Freddo intenso e sole diretto accorciano la durata, e un sensore su un passaggio frequentato consuma di più. Quasi tutti i sistemi segnalano la batteria scarica nell'app: sostituiscila subito invece di aspettare che il sensore smetta di funzionare. Tieni una batteria di scorta del tipo indicato nel manuale.",
      },
    ],
    nl: [
      {
        question: "Buitenalarm zonder abonnement: is dat genoeg?",
        answer: "Voor de meeste woningen wel, als jij of je buren reageren op de melding die je telefoon krijgt. Met een abonnement bij een particuliere alarmcentrale wordt een melding geverifieerd, bijvoorbeeld met camerabeelden, en schakelt de centrale zo nodig de politie in. Bij een hoge inboedelwaarde kan je verzekeraar een gecertificeerd systeem eisen, geplaatst door een BORG-erkend bedrijf. Kijk daarom eerst in je polis.",
      },
      {
        question: "Hoe beveilig je een schuur met fietsen of e-bikes?",
        answer: "Combineer een goed slot en een grondanker met een draadloos deurcontact en een bewegingsmelder die een sirene of je telefoon aansturen. Een alarm schrikt af, maar houdt een vastberaden dief niet tegen; degelijk hang- en sluitwerk blijft de basis, zoals het Politiekeurmerk Veilig Wonen ook voor woningen eist. Controleer het bereik tussen schuur en huis. Noteer de framenummers van je fietsen, zodat je bij diefstal direct aangifte kunt doen.",
      },
      {
        question: "Bewegingsmelder buiten geeft vals alarm: wat te doen?",
        answer: "Meestal komt het door katten, egels, bewegende takken of zon die het gebied opwarmt. Richt de melder op een open zone, nooit op de straat, een heg of de ochtendzon, en verlaag de gevoeligheid. Dual-melders met infrarood en microgolf gaan alleen af als beide sensoren beweging zien. Kies een model met huisdierimmuniteit, snoei takken in de buurt en haal spinnenwebben van de lens.",
      },
      {
        question: "Werkt een buitenalarm met Google Home, Alexa of Apple Home?",
        answer: "Vaak wel, maar meestal beperkt tot meldingen en in- en uitschakelen; de alarmfuncties zelf blijven in de eigen app. Controleer vóór aankoop welke koppelingen de fabrikant echt ondersteunt en of Matter erbij hoort. Zo kun je bijvoorbeeld de buitenverlichting laten aangaan als de buitenmelder iets ziet. Stel voor uitschakelen met een spraakopdracht een pincode in, anders kan iedereen bij de slimme speaker het alarm uitzetten.",
      },
      {
        question: "Hoe lang gaan batterijen van buitensensoren mee?",
        answer: "Doorgaans één tot enkele jaren, afhankelijk van hoe vaak de sensor afgaat en hoe koud het wordt. Vorst verkort de levensduur van lithiumcellen, en een sensor bij een druk pad verbruikt meer. De meeste systemen waarschuwen in de app bij een bijna lege batterij; vervang hem dan meteen. Houd een reservebatterij van het juiste type achter de hand, want veel sensoren gebruiken minder gangbare lithiumformaten.",
      },
    ],
    pl: [
      {
        question: "Jaki alarm na działkę bez prądu?",
        answer: "Najlepiej alarm GSM/LTE zasilany z baterii lub akumulatora, który wysyła powiadomienia na telefon i włącza głośną syrenę. Do altany wystarczy czujnik otwarcia drzwi i czujnik ruchu w środku, a akumulator można doładowywać małym panelem słonecznym. Wybierz starter na kartę, bez abonamentu, i pilnuj, by na koncie nie zabrakło środków. Alarm odstrasza, ale nie zatrzyma złodzieja, więc solidna kłódka i zamknięte okiennice nadal są potrzebne.",
      },
      {
        question: "Zewnętrzny czujnik ruchu daje fałszywe alarmy – co zrobić?",
        answer: "Zwykle winne są koty, gałęzie poruszane wiatrem albo słońce nagrzewające obszar dozoru. Skieruj czujnik na otwartą przestrzeń – nie na ulicę, żywopłot ani w stronę porannego słońca – i zmniejsz czułość. Czujniki dualne, łączące podczerwień i mikrofale, alarmują tylko wtedy, gdy ruch wykryją oba sensory. Pomaga też przycięcie gałęzi, usunięcie pajęczyn z soczewki i wybór modelu odpornego na zwierzęta.",
      },
      {
        question: "Alarm z monitoringiem agencji ochrony czy bez abonamentu?",
        answer: "Bez abonamentu, jeśli powiadomienia na telefon wystarczą i ktoś może zareagować; z monitoringiem, gdy dom często stoi pusty. Agencja ochrony weryfikuje alarm i może wysłać grupę interwencyjną, co przydaje się przy domach letniskowych i dłuższych wyjazdach. W wersji bez abonamentu płaci się tylko za sprzęt. Przed podpisaniem umowy warto sprawdzić okres wypowiedzenia, czas dojazdu patrolu i ewentualne zniżki w ubezpieczeniu.",
      },
      {
        question: "Czy syrena zewnętrzna może wyć bez końca?",
        answer: "Nie, warto ustawić krótki czas działania syreny, bo długotrwały alarm może zostać uznany za wykroczenie zakłócania spokoju (art. 51 Kodeksu wykroczeń). Przepis wprost wymienia zakłócanie spokoju lub spoczynku nocnego alarmem. Po kilku minutach syrena powinna ucichnąć, a dalej może działać tylko sygnalizator świetlny. Powiadomienia w aplikacji pozwalają sprawdzić przyczynę i wyłączyć alarm zdalnie.",
      },
      {
        question: "Na jak długo wystarczają baterie w czujnikach zewnętrznych?",
        answer: "Zwykle od roku do kilku lat, w zależności od tego, jak często czujnik się wyzwala i jak mroźna jest zima. Mróz skraca żywotność ogniw litowych, a czujnik przy ruchliwej ścieżce zużywa więcej energii. Większość systemów ostrzega w aplikacji o słabej baterii i wtedy warto ją od razu wymienić. Dobrze mieć zapasową baterię dokładnie takiego typu, jak podaje instrukcja, bo wiele czujników używa mniej popularnych ogniw litowych.",
      },
    ],
    sv: [
      {
        question: "Varför ger min utomhussensor falsklarm?",
        answer: "Oftast beror det på djur, växtlighet som rör sig eller sol som värmer upp det bevakade området. Rikta sensorn mot en öppen yta, aldrig mot gatan, en häck eller soluppgången, och sänk känsligheten. Modeller med dubbelteknik, infraröd och mikrovåg, larmar bara när båda sensorerna känner av rörelse, vilket ger färre falsklarm. Klipp grenar i närheten och ta bort spindelväv från linsen.",
      },
      {
        question: "Vilken utomhussensor passar om jag har katt eller hund?",
        answer: "En husdjursimmun sensor, inställd efter djurets vikt och monterad på den höjd som tillverkaren anger. Immuniteten bygger på att sensorn ignorerar små kroppar nära marken: en hund som hoppar upp på en mur kan ändå utlösa larmet. På en fasad bevakar en så kallad ridådetektor bara en smal remsa längs väggen, så att trädgården där djuren rör sig hålls utanför bevakningen. Modeller med kamera låter dig kontrollera ett larm från mobilen.",
      },
      {
        question: "Hur larmar jag ett förråd eller garage utan el?",
        answer: "Med batteridrivna sensorer och en siren på batteri som via radio kopplas till larmets centralenhet, eller till en 4G-gateway om förrådet ligger långt från huset. Kontrollera radioräckvidden mellan förrådet och centralenheten, som ofta försämras av väggar. En magnetkontakt på dörren och en rörelsesensor inne räcker oftast. Komplettera med ett bra hänglås eller ett förstärkt lås, eftersom larmet varnar men inte stoppar tjuven, och fotografera verktyg och cyklar tillsammans med deras serienummer.",
      },
      {
        question: "Utomhuslarm med eller utan abonnemang?",
        answer: "Utan abonnemang om du själv kan agera på larmen du får i mobilen; med larmcentral om du ofta är borta eller om ditt försäkringsbolag kräver det. En larmcentral verifierar larmet, till exempel med bilder från en kamera, och kontaktar polisen om intrånget bekräftas. Vissa försäkringsbolag ställer krav på en certifierad leverantör, så fråga innan du väljer. Utan abonnemang behöver du grannar eller anhöriga som kan rycka ut när du är långt borta.",
      },
      {
        question: "Hur länge räcker batterierna i trådlösa utomhussensorer?",
        answer: "Vanligen från ett till flera år, beroende på hur ofta sensorn löser ut och hur kallt det blir. Kyla tömmer litiumbatterier snabbare, och en sensor som är riktad mot en gång där det ofta passerar folk drar mer ström. De flesta system varnar i appen när batteriet börjar ta slut, så byt det då i stället för att vänta tills sensorn slutar fungera. Kontrollera batteritypen i bruksanvisningen och ha ett reservbatteri hemma, eftersom många sensorer använder mindre vanliga litiumstorlekar.",
      },
    ],
    us: [
      {
        question: "Why does my outdoor motion sensor keep setting off false alarms?",
        answer: "Usually animals such as cats or raccoons, moving branches or sunlight warming the area it watches. Aim the sensor at an open zone, never at a street, a hedge or the rising sun, and lower its sensitivity. Dual-technology sensors, which combine infrared (PIR) and microwave, only trigger when both detect movement, which cuts false alarms. Trim nearby branches, clear cobwebs from the lens and choose a pet-immune model if animals cross your yard at night.",
      },
      {
        question: "What's the best way to alarm a backyard shed?",
        answer: "Install a battery-powered door contact sensor and a motion sensor linked to your home security system, or a standalone shed alarm with a loud siren. Check the wireless range from the shed to the house, since walls and distance reduce it; a 4G cellular hub helps if the shed is far away. Add a solid lock and secure hinges, because an alarm warns you but doesn't stop a determined thief. Lock bikes and expensive tools to a floor or wall anchor, and record serial numbers in case you need to report a theft.",
      },
      {
        question: "How long can my outdoor alarm siren sound?",
        answer: "Set an automatic cutoff rather than letting it ring until you get home. Local noise rules can limit how long an outdoor siren may sound, so check with your city or county and set the siren timer to match. A siren that wails for a long time over nothing can also bring noise complaints from neighbors. Use the shortest siren time your system allows and ask a trusted neighbor to check on the property when you're away. Phone notifications let you see what triggered it and switch it off remotely.",
      },
      {
        question: "Monitored or self-monitored outdoor alarm: do I need a subscription?",
        answer: "Not for self-monitoring, where alerts go to your phone. A subscription pays for professional monitoring, where a monitoring center checks the alert, for example with camera footage, then contacts the police if a break-in is confirmed. Monitoring makes sense if you're often away or your insurer requires it, as some do for high-value contents. A self-monitored system is cheaper but relies on you, family or a neighbor to respond when you're away.",
      },
      {
        question: "How long do batteries last in wireless outdoor sensors?",
        answer: "Typically from one to several years, depending on how often the sensor triggers and how cold it gets. Cold weather drains lithium batteries faster, and sensors facing a busy path use more power. Most systems warn you in the app when a battery runs low, so replace it then rather than waiting for a dead sensor. Check the battery type in the manual and keep a spare on hand, since many sensors use less common lithium sizes.",
      },
    ],
    ca: [
      {
        question: "Why does my outdoor PIR sensor keep giving false alarms?",
        answer: "Usually animals, moving branches or sunlight warming the area it watches. Aim the sensor at a clear zone, never at a street, hedge or the rising sun, and lower its sensitivity. Dual-technology sensors, combining infrared and microwave, only trigger when both detect movement, which cuts false alarms. Trim nearby branches, clear cobwebs from the lens and choose a pet-tolerant model if raccoons, cats or other animals cross your yard at night.",
      },
      {
        question: "How do I add an alarm to a backyard shed?",
        answer: "Install a battery-powered door contact and motion sensor linked to your home alarm, or a standalone shed alarm with a loud siren. Check the radio range from the shed to the house, as walls and distance reduce it. Add a decent lock and secure hinges, because an alarm warns but doesn't stop a determined thief. Lock bikes and expensive tools to a ground or wall anchor, and record serial numbers in case you need to report a theft.",
      },
      {
        question: "Can my outdoor alarm siren ring for as long as it likes?",
        answer: "No: set an automatic cut-off, because a siren that keeps ringing disturbs the whole street and can lead to noise complaints. Noise rules are set locally, so check your municipality's bylaw on alarms. Use the shortest siren time your system allows and name a keyholder who can reach the property when you're away. Phone notifications let you check what triggered it and switch it off remotely.",
      },
      {
        question: "Monitored or self-monitored outdoor alarm: do I need a subscription?",
        answer: "Not for self-monitoring, where alerts go to your phone; a subscription is needed for professional monitoring, where a monitoring centre checks each alert and contacts the police if a break-in looks real. A self-monitored system is cheaper but relies on you or a neighbour to act. Some insurers require professional monitoring for high-value contents, so ask yours before you choose.",
      },
      {
        question: "How long do batteries last in wireless outdoor sensors?",
        answer: "Typically from one to several years, depending on how often the sensor triggers and how cold it gets. Cold weather drains lithium cells faster, and sensors facing a busy path use more power. Most systems warn in the app when a battery runs low, so replace it then rather than waiting for a dead sensor. Check the battery type in the manual and keep a spare, as many sensors use less common lithium sizes.",
      },
    ],
  },
}
