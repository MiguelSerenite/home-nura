import type { CategoryFaqSets } from './types'

export const ENERGIE_A_FAQS: CategoryFaqSets = {
  "thermostats": {
    fr: [
      {
        question: "Quel thermostat connecté choisir pour une pompe à chaleur ?",
        answer: "Le plus sûr est le thermostat de la marque de votre pompe à chaleur, ou un modèle que le fabricant déclare explicitement compatible. Une PAC air-eau règle la température de l'eau selon une loi d'eau : un thermostat tout-ou-rien la fait démarrer et s'arrêter sans cesse, ce qui dégrade son rendement. Pour une PAC air-air (climatisation réversible), un boîtier connecté à infrarouge qui imite la télécommande suffit. Dans tous les cas, évitez les fortes baisses de consigne la nuit : 1 à 2 °C suffisent.",
      },
      {
        question: "Combien économise-t-on en baissant le chauffage d'un degré ?",
        answer: "Environ 7 % de consommation de chauffage en moins par degré, selon l'ADEME. L'agence recommande 19 °C dans les pièces de vie et une température plus basse dans les chambres. Exemple : avec 1 200 € de chauffage par an, passer de 21 à 19 °C représente environ 14 %, soit près de 170 €. Le thermostat connecté n'économise rien seul : il aide à tenir ces consignes, à baisser pendant vos absences et à couper le chauffage quand une fenêtre reste ouverte.",
      },
      {
        question: "Thermostat d'ambiance ou têtes thermostatiques connectées : que choisir ?",
        answer: "Avec une chaudière ou une pompe à chaleur, commencez par un thermostat d'ambiance, qui pilote directement la production de chaleur. Les têtes thermostatiques connectées le complètent pour régler chaque pièce à sa température, par exemple des chambres plus fraîches ou un bureau chauffé seulement en journée. En appartement avec chauffage collectif, où vous ne commandez pas la chaudière, les têtes thermostatiques sont la seule option utile. Avec des radiateurs électriques, regardez plutôt les modules fil pilote.",
      },
      {
        question: "Le thermostat programmable devient-il obligatoire dans les logements ?",
        answer: "Pas avant 2030 pour les logements existants : un décret de décembre 2025 a repoussé à cette date l'obligation de régulation automatique programmable, initialement prévue pour 2027. Pour les constructions neuves, elle s'applique aux permis déposés à partir du 1er janvier 2027. Le système doit réguler pièce par pièce, ou par zone si c'est justifié, avec une programmation au moins horaire, sans obligation d'être connecté. Dans l'existant, le texte prévoit une exception quand l'installation n'est pas réalisable techniquement ou économiquement.",
      },
      {
        question: "Pourquoi ma tête thermostatique connectée chauffe mal ou reste bloquée ?",
        answer: "Le plus souvent, l'adaptateur ne correspond pas au corps du robinet ou le calibrage (adaptation de course) n'a pas abouti. Le filetage M30 × 1,5 est le plus courant ; d'autres robinets, comme certains Danfoss, demandent un adaptateur spécifique. Relancez le calibrage après le montage, remplacez les piles si l'application signale une tension faible et vérifiez que la tige du robinet n'est pas grippée : en fin d'été, faites-la bouger à la main pour éviter qu'elle ne colle.",
      },
    ],
    en: [
      {
        question: "Will a smart thermostat work with my combi boiler?",
        answer: "Almost certainly: most smart thermostats work with combi, system and regular boilers, either as a simple on/off switch or through OpenTherm. OpenTherm lets the thermostat turn the boiler's output down instead of just switching it on and off, which helps a condensing boiler run more efficiently. Check your boiler model on the thermostat maker's compatibility list, and if you have a hot water cylinder, make sure the thermostat can also schedule your hot water.",
      },
      {
        question: "Is it cheaper to leave the heating on low all day?",
        answer: "No, with a gas boiler it is usually cheaper to heat your home only when you need it, using a schedule. Your home loses heat to the outside all the time, and the warmer it is kept, the faster it loses heat, so heating an empty house wastes energy. Heat pumps are the exception: they run most efficiently at a steady, lower flow temperature, so long switch-offs and big setbacks are best avoided.",
      },
      {
        question: "How much can a smart thermostat save on my energy bill?",
        answer: "It depends on your habits: the savings come from heating fewer hours and to lower temperatures, not from the device itself. If the heating already goes off whenever you're out, gains will be modest; if it runs on a fixed timer whether you're home or not, features like geofencing and room-by-room control make a real difference. To estimate, find your yearly gas use in kWh on your bill: every 5 % cut on 10,000 kWh is 500 kWh, multiplied by your unit rate.",
      },
      {
        question: "Do I need an engineer to fit a smart thermostat?",
        answer: "Not always: fitting a thermostat isn't gas work, but wired models run at mains voltage and connect to the boiler's wiring. Swapping a battery wireless thermostat, or fitting a kit with a plug-in receiver, is a common DIY job. If the wiring means opening the boiler casing, use a Gas Safe registered engineer; otherwise a competent electrician or heating engineer can do it, and many brands offer installation. If you rent, ask your landlord before changing the heating controls.",
      },
      {
        question: "Why does my smart thermostat keep going offline?",
        answer: "Usually because the Wi-Fi signal where the thermostat or its hub sits is too weak, or because the router or its password has changed. Most thermostats only use the 2.4 GHz band, so a mesh system that merges bands can confuse the setup. Move the hub closer to the router or add an access point, then reconnect it in the app. Many models keep the last schedule or temperature running while offline, so the boiler doesn't simply stop.",
      },
    ],
    de: [
      {
        question: "Smartes Raumthermostat oder smarte Heizkörperthermostate – was passt zu mir?",
        answer: "In einer Mietwohnung mit Zentralheizung sind smarte Heizkörperthermostate meist die einzig sinnvolle Wahl, weil Sie die Heizanlage selbst nicht steuern können. Ein smartes Raumthermostat lohnt sich, wenn Sie eine eigene Gastherme oder Wärmepumpe haben: Es schaltet oder moduliert den Wärmeerzeuger direkt. Ideal ist die Kombination aus beidem: Raumthermostat für die Anlage, Heizkörperthermostate für Räume mit eigenen Zeiten, etwa Schlafzimmer oder Gästezimmer.",
      },
      {
        question: "Wie viel Heizkosten spart ein smartes Heizkörperthermostat?",
        answer: "Laut Umweltbundesamt spart jedes Grad weniger Raumtemperatur rund 6 Prozent Heizenergie, und das Thermostat hilft, solche Absenkungen konsequent umzusetzen. Die Ersparnis entsteht durch Zeitprogramme, Abwesenheitserkennung und Fenster-offen-Erkennung, nicht durch das Gerät selbst. Rechenbeispiel: Bei 1.500 Euro Heizkosten im Jahr bringen 2 Grad weniger rund 12 Prozent, also etwa 180 Euro. Wer schon heute konsequent von Hand herunterdreht, spart deutlich weniger.",
      },
      {
        question: "Passt ein smartes Heizkörperthermostat auf mein Ventil?",
        answer: "Meistens ja: Die meisten Heizkörperventile haben ein Gewinde M30 × 1,5, auf das gängige smarte Thermostate ohne Adapter passen. Für andere Ventile, etwa Danfoss RA, RAV oder RAVL, liegen Adapter bei oder sind einzeln erhältlich; den Hersteller finden Sie meist auf dem Ventilunterteil. Nach der Montage startet eine Adaptierfahrt. Schlägt sie fehl, sitzt der Adapter oft nicht richtig oder der Ventilstift klemmt nach dem Sommer und muss von Hand gängig gemacht werden.",
      },
      {
        question: "Funktionieren smarte Thermostate ohne Abo und ohne Cloud?",
        answer: "Ja, viele Systeme funktionieren ohne Abo; einige Hersteller verkaufen aber Komfortfunktionen wie automatische Abwesenheits- oder Fenstererkennung als kostenpflichtiges Abonnement. Prüfen Sie vor dem Kauf, was in der Grundversion enthalten ist. Wer seine Daten lokal halten möchte, setzt auf Systeme mit eigener Zentrale, etwa Homematic IP mit CCU, FRITZ!DECT-Heizkörperregler an der FRITZ!Box oder Zigbee-Thermostate mit Home Assistant. Reine Cloud-Systeme lassen sich ohne Internet oft nur noch am Gerät bedienen.",
      },
      {
        question: "Sind smarte Heizkörperthermostate mit einer Wärmepumpe sinnvoll?",
        answer: "Nur begrenzt: Eine Wärmepumpe arbeitet am effizientesten, wenn möglichst viele Heizkörperventile offen bleiben und sie mit niedriger Vorlauftemperatur gleichmäßig läuft. Schließen smarte Thermostate viele Räume, steigt oft die Vorlauftemperatur oder die Anlage taktet. Sinnvoll sind sie für selten genutzte Räume wie Gäste- oder Hobbyzimmer. Mehr bringen meist ein hydraulischer Abgleich und eine gut eingestellte Heizkurve; tiefe Nachtabsenkungen von mehreren Grad sollten Sie vermeiden.",
      },
    ],
    es: [
      {
        question: "¿Qué termostato inteligente es compatible con mi caldera de gas?",
        answer: "Casi todos: cualquier caldera con conexión para termostato de ambiente (dos cables, contacto libre de tensión) admite un termostato inteligente. Si tu caldera es compatible con OpenTherm, elige un modelo que también lo sea: en lugar de encender y apagar, ajusta la potencia de la llama y aprovecha mejor la condensación. Revisa la lista de compatibilidad del fabricante con el modelo exacto de tu caldera y fíjate en si el termostato funciona con pilas o necesita corriente.",
      },
      {
        question: "¿Termostato inteligente o controlador para el aire acondicionado con bomba de calor?",
        answer: "Si te calientas con splits de aire acondicionado con bomba de calor, lo que necesitas es un controlador inteligente por infrarrojos, no un termostato de caldera. Este pequeño aparato imita al mando a distancia, así que puedes programar horarios, encender la calefacción desde el móvil antes de llegar o apagarla si no hay nadie. Antes de comprarlo, comprueba que tu marca y modelo de split figuran en su lista. Si tienes aerotermia con radiadores o suelo radiante, usa el termostato de su fabricante.",
      },
      {
        question: "¿Puedo poner cabezales termostáticos inteligentes si tengo calefacción central en mi comunidad?",
        answer: "Sí, normalmente basta con sustituir el cabezal manual de cada radiador por uno inteligente, sin tocar la válvula ni el repartidor de costes. Muchos edificios con calefacción central ya tienen válvulas termostáticas y repartidores por la normativa de contabilización individual de consumos (Real Decreto 736/2020). Comprueba la rosca de la válvula, la más común es M30 × 1,5, o compra el adaptador adecuado. Nunca manipules el repartidor, que está precintado, y consulta al administrador de fincas si tienes dudas.",
      },
      {
        question: "¿Cuánto se ahorra bajando un grado la calefacción?",
        answer: "Según el IDAE, cada grado de más en la calefacción aumenta el consumo en torno a un 7 %, así que bajar uno ahorra una cantidad parecida. El IDAE considera suficiente una temperatura de 19 a 21 °C de día y de 15 a 17 °C en los dormitorios por la noche. Ejemplo: si gastas 800 € al año en calefacción, bajar de 22 a 20 °C supone alrededor de un 14 %, unos 110 €. El termostato inteligente te ayuda a mantener esas consignas sin pensar en ello.",
      },
      {
        question: "¿Por qué mi termostato wifi se desconecta o la caldera no responde?",
        answer: "Casi siempre es por la señal wifi: la mayoría de termostatos solo usan la banda de 2,4 GHz y pierden la conexión si cambias de router o de contraseña. Vuelve a vincularlo desde la app y, si está lejos del router, acerca la pasarela o añade un repetidor. Si la caldera no arranca aunque el termostato pida calor, revisa las pilas del receptor, el cableado y la presión del circuito, que en frío suele tener que estar entre 1 y 1,5 bar.",
      },
    ],
    it: [
      {
        question: "Quale cronotermostato smart scegliere per la caldaia?",
        answer: "Scegli un cronotermostato compatibile con il contatto on/off della caldaia, che hanno quasi tutte, oppure un modello OpenTherm se la tua caldaia lo supporta, perché modula la fiamma invece di accenderla e spegnerla. Controlla l'alimentazione: alcuni modelli vanno a batterie, altri a 230 V e richiedono il neutro nella scatola del vecchio termostato. Verifica anche l'ecosistema che usi già, come Alexa, Google Home o Apple Casa, e la compatibilità con eventuali valvole smart.",
      },
      {
        question: "Le valvole termostatiche sono obbligatorie in condominio?",
        answer: "Sì, nei condomini con riscaldamento centralizzato termoregolazione e contabilizzazione del calore sono obbligatorie dal 2017, salvo impossibilità tecnica o costi sproporzionati certificati da un tecnico. Lo prevede il decreto legislativo 102/2014. Puoi sostituire la manopola termostatica manuale con un comando smart sulla stessa valvola, se il filetto è compatibile (M30 × 1,5 è il più diffuso) o con l'adattatore giusto. Non toccare il ripartitore dei costi e, nel dubbio, chiedi all'amministratore.",
      },
      {
        question: "Quanto si risparmia abbassando il riscaldamento di un grado?",
        answer: "Ogni grado in meno riduce il consumo del riscaldamento di circa il 7 %, secondo le stime più citate in Europa, come quella dell'agenzia francese ADEME. In Italia la legge fissa per le abitazioni un massimo di 20 °C, con 2 °C di tolleranza. Esempio: con 1.000 m³ di metano all'anno, passare da 22 a 20 °C fa risparmiare circa 140 m³; moltiplica per il prezzo al metro cubo della tua bolletta. Il cronotermostato smart serve a mantenere queste impostazioni senza pensarci.",
      },
      {
        question: "Meglio un solo cronotermostato o valvole smart in ogni stanza?",
        answer: "Se hai una caldaia autonoma, parti da un cronotermostato smart: comanda direttamente la caldaia ed è di solito l'acquisto che rende di più. Le valvole smart sui termosifoni aggiungono il controllo stanza per stanza, utile per tenere più fresche le camere o scaldare lo studio solo di giorno. Con il riscaldamento centralizzato, invece, le valvole smart sono l'unica soluzione utile, perché la caldaia non la comandi tu. Con una pompa di calore, evita di chiudere troppe stanze insieme.",
      },
      {
        question: "Perché la valvola smart del termosifone non scalda o fa rumore?",
        answer: "Di solito perché la calibrazione non è andata a buon fine o perché l'adattatore non è quello giusto per la valvola. Rimonta il comando con l'adattatore indicato per la tua marca di valvola e rilancia la calibrazione dall'app. Se il termosifone resta freddo, il perno della valvola potrebbe essersi bloccato dopo l'estate: togli il comando e premi il perno più volte a mano. Un ronzio breve durante la regolazione è normale; un rumore continuo spesso indica batterie scariche.",
      },
    ],
    nl: [
      {
        question: "Werkt een slimme thermostaat met mijn cv-ketel en OpenTherm?",
        answer: "Ja, vrijwel elke cv-ketel werkt met een slimme thermostaat; met OpenTherm laat de thermostaat de ketel moduleren in plaats van alleen aan en uit te schakelen. Dat is comfortabeler en meestal zuiniger voor een hr-ketel, omdat die dan vaker op een lage watertemperatuur draait. Kijk op de aansluitklemmen of in de handleiding van je ketel of OpenTherm wordt ondersteund, en check de compatibiliteitslijst van de thermostaat. Sommige merken gebruiken een eigen protocol of een extra module.",
      },
      {
        question: "Welke slimme thermostaat past bij een hybride warmtepomp?",
        answer: "Kies bij voorkeur de thermostaat van de warmtepompfabrikant of een model dat jouw warmtepomp officieel ondersteunt. Bij een hybride warmtepomp bepaalt de regeling wanneer de warmtepomp werkt en wanneer de cv-ketel bijspringt; een gewone aan-uitthermostaat kan die verdeling verstoren, waardoor de ketel vaker aanslaat. Stel geen diepe nachtverlaging in: een of twee graden is genoeg, anders moet de ketel 's ochtends bijspringen om snel op temperatuur te komen. Vraag je installateur naar de juiste instellingen.",
      },
      {
        question: "Hoeveel gas bespaar je met een slimme thermostaat?",
        answer: "Je bespaart alleen als je daardoor vaker en slimmer lager stookt; de thermostaat zelf bespaart niets. Winst zit in een strak weekschema, de verwarming lager als niemand thuis is en per kamer regelen met slimme radiatorknoppen. Reken het zelf uit: verbruik je 1.200 m³ gas per jaar en stook je 5 % minder, dan is dat 60 m³; vermenigvuldig dat met je gasprijs per m³ inclusief belastingen. Een graad lager is de eenvoudigste maatregel.",
      },
      {
        question: "Werkt een slimme thermostaat ook met stadsverwarming?",
        answer: "Ja, meestal wel: de thermostaat stuurt dan de afleverset aan in plaats van een cv-ketel. Veel afleversets werken met een eenvoudige aan-uitregeling, sommige ondersteunen OpenTherm. Check bij je warmteleverancier welke thermostaten geschikt zijn, want de afleverset is vaak hun eigendom en je mag er niet zomaar aan sleutelen. In een huurwoning vraag je eerst toestemming aan je verhuurder. Een slimme thermostaat helpt hier vooral om minder uren te stoken.",
      },
      {
        question: "Slimme thermostaat werkt niet en de ketel slaat niet aan: wat nu?",
        answer: "Kijk eerst of de thermostaat nog verbinding heeft met de ketelmodule of ontvanger, want daar zit de oorzaak meestal. Staat de app op offline, herstart dan de bridge en de router. Geeft de ketel een storingscode, kijk dan naar de waterdruk: die hoort bij de meeste ketels tussen 1,5 en 2 bar te staan, en bij te lage druk gaat de ketel in storing. Vul in dat geval de installatie bij volgens de handleiding van je ketel.",
      },
    ],
    pl: [
      {
        question: "Jaki termostat do pieca gazowego wybrać?",
        answer: "Najprościej wybrać termostat podłączany do styków beznapięciowych pieca, które ma prawie każdy kocioł gazowy, a jeśli kocioł obsługuje OpenTherm – model z OpenTherm, który płynnie reguluje moc palnika. Wersje bezprzewodowe z odbiornikiem przy kotle ułatwiają montaż bez kucia ścian. Popularne w Polsce są zarówno marki takie jak Auraton czy Salus, jak i systemy tado, Netatmo czy Honeywell. Przed zakupem warto sprawdzić listę zgodności z konkretnym modelem kotła.",
      },
      {
        question: "Głowice termostatyczne smart czy termostat pokojowy – co wybrać?",
        answer: "W domu z własnym kotłem warto zacząć od termostatu pokojowego, bo to on steruje źródłem ciepła; w bloku z ogrzewaniem miejskim sensowne są tylko głowice. Głowice smart pozwalają ustawić inną temperaturę w każdym pomieszczeniu, na przykład chłodniejszą sypialnię czy pokój gościnny ogrzewany tylko w razie potrzeby. Najlepiej działa połączenie obu: termostat włącza kocioł, a głowice dzielą ciepło między pokoje. Przy pompie ciepła lepiej nie zamykać zbyt wielu grzejników naraz.",
      },
      {
        question: "Czy w bloku z podzielnikami ciepła można założyć inteligentne głowice?",
        answer: "Tak, zwykle wystarczy zdjąć zwykłą głowicę i założyć inteligentną na ten sam zawór, bez ruszania zaworu i podzielnika ciepła. Najczęstszy gwint to M30 × 1,5; do zaworów Danfoss potrzebny jest adapter, często dołączony do zestawu. Podzielnik jest zaplombowany i nie wolno go zdejmować ani zasłaniać. Warto też uprzedzić spółdzielnię lub zarządcę, a przy zaworach z nastawą wstępną niczego w niej nie zmieniać.",
      },
      {
        question: "Ile można zaoszczędzić, obniżając temperaturę o 1 stopień?",
        answer: "Zwykle przyjmuje się 6–7 % mniej energii na ogrzewanie za każdy stopień mniej; takie szacunki podają francuska agencja ADEME i niemiecki urząd UBA. Przykład: przy zużyciu 1500 m³ gazu rocznie obniżenie temperatury z 22 do 20 °C daje około 13 %, czyli blisko 200 m³. Wynik warto pomnożyć przez cenę gazu z rachunku. Termostat smart nie oszczędza sam z siebie, ale pilnuje harmonogramu i obniża temperaturę, gdy nikogo nie ma w domu.",
      },
      {
        question: "Dlaczego inteligentna głowica nie grzeje albo głośno pracuje?",
        answer: "Najczęściej powodem jest nieudana kalibracja albo źle dobrany adapter do zaworu. Warto zdjąć głowicę, sprawdzić adapter właściwy dla marki zaworu i ponownie uruchomić kalibrację w aplikacji. Jeśli grzejnik pozostaje zimny, trzpień zaworu mógł się zablokować po sezonie letnim: wystarczy kilka razy nacisnąć go ręcznie. Krótki szum silnika podczas regulacji jest normalny, a ciągła praca lub piszczenie często oznacza słabe baterie.",
      },
    ],
  },
  "compteurs-energie": {
    fr: [
      {
        question: "Avec un Linky, faut-il un compteur d'énergie connecté en plus ?",
        answer: "Pas forcément : le Linky enregistre déjà votre consommation, consultable gratuitement dans votre espace client Enedis ou chez votre fournisseur, mais avec un jour de décalage. Pour suivre la puissance en temps réel, ajoutez un module branché sur la prise de télé-information client (TIC) du Linky, ou des pinces ampèremétriques au tableau. Pour savoir ce que consomme un appareil précis, une prise connectée avec mesure reste l'outil le plus simple.",
      },
      {
        question: "Prise avec mesure de consommation ou compteur au tableau : que choisir ?",
        answer: "Prenez une prise avec mesure pour connaître la consommation d'un appareil précis, et un compteur au tableau pour voir la consommation globale du logement. La prise ne convient qu'aux appareils branchés sur une prise classique, dans la limite de son intensité maximale, souvent 16 A. Le four, les plaques, le chauffe-eau ou les radiateurs raccordés en direct se mesurent avec des pinces ou un compteur modulaire par circuit, posés au tableau électrique.",
      },
      {
        question: "Comment calculer la consommation d'un appareil en kWh ?",
        answer: "Multipliez sa puissance en kilowatts par sa durée de fonctionnement en heures : un appareil de 2 000 W qui tourne 1 h 30 consomme 3 kWh. Multipliez ensuite par le prix du kWh de votre contrat, en tenant compte des heures creuses si vous en avez. Pour les appareils qui fonctionnent par cycles, comme un réfrigérateur ou un congélateur, la puissance de la plaque est trompeuse : mesurez une semaine complète avec une prise à mesure et multipliez par 52.",
      },
      {
        question: "Peut-on installer soi-même un compteur d'énergie au tableau électrique ?",
        answer: "Oui pour un module branché sur la prise TIC du Linky ; pour des pinces ou un compteur modulaire dans le tableau, mieux vaut faire appel à un électricien. Ouvrir le tableau expose à des parties sous tension : coupez au minimum le disjoncteur général et ne touchez jamais au compteur ni au disjoncteur de branchement, plombés par Enedis. Côté vie privée, préférez un appareil qui fonctionne en local si vous ne voulez pas que vos courbes de consommation partent dans un cloud.",
      },
      {
        question: "Pourquoi mon module TIC ne remonte-t-il aucune donnée du Linky ?",
        answer: "Le plus souvent, le module attend le mode TIC « standard » alors que votre Linky est en mode « historique », le réglage par défaut, ou l'inverse. Vérifiez quel mode votre module accepte ; le passage en mode standard se demande à votre fournisseur ou à Enedis. Contrôlez aussi le branchement sur les bornes I1 et I2, et la portée radio : en appartement, le compteur est souvent sur le palier, loin de votre box ou de votre passerelle Zigbee.",
      },
    ],
    en: [
      {
        question: "Do I need an energy monitor if I already have a smart meter?",
        answer: "Not necessarily: a smart meter's in-home display already shows your electricity use and cost in near real time, at no extra charge. An energy monitor adds what the display doesn't: app history, alerts, and appliance-level readings when paired with smart plugs. Some devices read the data straight from your smart meter through the national data network once you give consent, so there's no clamp to fit. If your display is lost or broken, ask your supplier for a replacement.",
      },
      {
        question: "How do I work out what an appliance costs to run?",
        answer: "Multiply its power in kilowatts by the hours it runs, then by your unit rate: a 2 kW tumble dryer running for 1.5 hours uses 3 kWh. At an example unit rate of 25p, that's 75p per load. For appliances that cycle on and off, such as fridges, freezers or dehumidifiers, the rating plate overstates use, so measure a full week with a smart plug and multiply by 52. The standing charge stays the same however much you use.",
      },
      {
        question: "Smart plug with energy monitoring or a whole-home clamp monitor?",
        answer: "Use a smart plug to find out what one appliance uses, and a clamp monitor to see your whole home's consumption in real time. A plug only works for appliances with a standard 13 A plug, so it can't measure an electric shower, oven or immersion heater. A clamp fitted around the meter tails captures everything, including those big loads. Many people use both: the clamp to spot when usage jumps, then plugs to track down the culprit.",
      },
      {
        question: "Is it safe to fit a clamp energy monitor myself?",
        answer: "Yes, a clip-on clamp is designed for DIY: it simply closes around one of the meter tails without cutting or disconnecting anything. Never open the meter, the sealed cut-out or the main fuse, which belong to your supplier or network operator. If the only accessible cable is inside the consumer unit, or the tails are too short to clip around, ask a registered electrician. Keep the transmitter's batteries fresh, as flat batteries are a common cause of gaps in readings.",
      },
      {
        question: "Why is my smart meter's in-home display not showing my usage?",
        answer: "Usually the display has lost its link to the meter, or the meter has lost its connection to the network, and your supplier can often fix that remotely. First move the display closer to the meter, check it's plugged in and restart it. If it still shows nothing, call your supplier: older first-generation meters, known as SMETS1, could lose smart features after a change of supplier until they were upgraded remotely. Meanwhile, send manual readings to avoid estimated bills.",
      },
    ],
    de: [
      {
        question: "Wie lese ich meinen digitalen Stromzähler mit einem Lesekopf aus?",
        answer: "Mit einem optischen Lesekopf, der magnetisch auf die Infrarot-Schnittstelle der modernen Messeinrichtung gesetzt wird, nachdem Sie die erweiterte Anzeige mit einer PIN freigeschaltet haben. Die PIN erhalten Sie von Ihrem Messstellenbetreiber, meist dem örtlichen Netzbetreiber, und geben sie mit einer Taschenlampe am Lichtsensor des Zählers ein. Ohne PIN liefert der Zähler oft nur den Zählerstand, nicht die aktuelle Leistung. Der Lesekopf sendet die Daten per WLAN an eine App oder an Home Assistant.",
      },
      {
        question: "Ist ein Smart Meter (intelligentes Messsystem) für mich Pflicht?",
        answer: "In Deutschland ist der Einbau eines intelligenten Messsystems vor allem Pflicht bei mehr als 6.000 kWh Jahresverbrauch, bei PV-Anlagen über 7 kW oder bei steuerbaren Geräten wie Wärmepumpe oder Wallbox. Alle anderen erhalten mindestens eine moderne Messeinrichtung, können ein intelligentes Messsystem aber beim Messstellenbetreiber beantragen; die jährlichen Kosten sind gesetzlich gedeckelt. Für dynamische Stromtarife brauchen Sie ein solches System. In Österreich und der Schweiz bauen die Netzbetreiber Smart Meter flächendeckend ein.",
      },
      {
        question: "WLAN-Steckdose mit Strommessung oder Messung im Zählerschrank?",
        answer: "Für einzelne Geräte reicht eine WLAN-Steckdose mit Strommessung; den Verbrauch des ganzen Haushalts sehen Sie nur mit einem Lesekopf am Zähler oder einem Messgerät im Zählerschrank. Steckdosen eignen sich für Kühlschrank, Fernseher oder Waschmaschine, aber nicht für fest angeschlossene Verbraucher wie Herd oder Durchlauferhitzer. Messmodule auf der Hutschiene erfassen einzelne Stromkreise, gehören aber in die Hände einer Elektrofachkraft. Für eine Abrechnung, etwa mit Untermietern, braucht es einen geeichten MID-Zähler.",
      },
      {
        question: "Wie berechne ich, wie viel Strom ein Gerät verbraucht?",
        answer: "Leistung in Kilowatt mal Laufzeit in Stunden ergibt die Kilowattstunden: Ein Wäschetrockner mit 2.000 Watt, der 90 Minuten läuft, braucht 3 kWh. Bei einem Beispielpreis von 35 Cent pro kWh kostet ein Durchgang also 1,05 Euro. Bei Geräten, die takten, wie Kühl- oder Gefrierschrank, führt die Angabe auf dem Typenschild in die Irre: Messen Sie eine Woche lang mit einer Messsteckdose und rechnen Sie auf das Jahr hoch. Auch Standby summiert sich: 5 Watt rund um die Uhr sind etwa 44 kWh im Jahr.",
      },
      {
        question: "Warum zeigt meine Messsteckdose falsche oder schwankende Werte?",
        answer: "Meist liegt es an sehr kleinen Lasten: Viele Messsteckdosen messen unter wenigen Watt ungenau, Standby-Werte sind daher nur Richtwerte. Schwankungen bei Kühlschrank, Waschmaschine oder Trockner sind normal, weil Motoren und Heizstäbe takten; entscheidend ist die Summe in kWh über mehrere Tage. Prüfen Sie außerdem, ob in der App der richtige Strompreis hinterlegt und die Firmware aktuell ist. Für Lasten über 3.680 Watt sind Steckdosen ohnehin nicht ausgelegt.",
      },
    ],
    es: [
      {
        question: "¿Puedo ver mi consumo eléctrico gratis con el contador digital?",
        answer: "Sí: el contador digital de la distribuidora registra tu consumo hora a hora y puedes consultarlo gratis en su web o en la plataforma Datadis, que reúne los datos de las distribuidoras. Eso sí, los datos suelen aparecer al día siguiente, no en directo. Si quieres ver el consumo en tiempo real o descubrir qué aparato dispara la factura, necesitas un medidor con pinza en el cuadro o enchufes inteligentes con medición de consumo.",
      },
      {
        question: "¿Cuánto cuesta poner la lavadora en hora punta, llano o valle?",
        answer: "Multiplica los kWh del lavado por el precio de cada tramo: con la tarifa 2.0TD, el valle es el más barato y la punta, la más cara. El valle va de 0 a 8 h, más fines de semana y festivos nacionales; la punta, de 10 a 14 h y de 18 a 22 h. Si un lavado consume 1 kWh, el ahorro es 1 kWh × (precio punta − precio valle). Un medidor de consumo te dice cuántos kWh gasta de verdad cada programa, sobre todo los de agua caliente.",
      },
      {
        question: "¿Enchufe inteligente con medidor o medidor con pinza en el cuadro?",
        answer: "Usa un enchufe con medidor para saber cuánto gasta un aparato concreto y un medidor con pinza para ver el consumo de toda la casa en tiempo real. El enchufe solo sirve para aparatos con clavija y dentro de su potencia máxima, normalmente 16 A, así que no mide el horno, la vitrocerámica ni el termo si van conectados directamente. La pinza en el cuadro lo capta todo, incluidos esos grandes consumos, y algunos modelos también miden la producción de placas solares.",
      },
      {
        question: "¿Necesito un electricista para instalar un medidor en el cuadro eléctrico?",
        answer: "Es lo recomendable: aunque la pinza solo abraza el cable sin cortarlo, hay que abrir el cuadro y trabajar cerca de partes con tensión. Si no tienes experiencia, encárgalo a un instalador autorizado. No toques nunca el contador ni la caja general de protección, que están precintados por la distribuidora. En cuanto a la privacidad, elige un medidor que permita guardar los datos en local si no quieres que tu consumo pase por la nube del fabricante.",
      },
      {
        question: "¿Cómo sé si puedo bajar la potencia contratada?",
        answer: "Mira la potencia máxima registrada en el área de clientes de tu distribuidora o en Datadis: si en un año nunca te acercas a lo contratado, puedes bajarla y pagar menos de término fijo. Un medidor en tiempo real te avisa de los picos, por ejemplo al juntar horno, lavadora y aire acondicionado. Si superas la potencia contratada, el contador digital corta el suministro y tienes que rearmarlo. Con la tarifa 2.0TD puedes contratar potencias distintas para punta y valle.",
      },
    ],
    it: [
      {
        question: "Come vedere i consumi in tempo reale dal contatore 2G?",
        answer: "Con un dispositivo compatibile Chain 2: il contatore elettronico di seconda generazione invia i dati di consumo quasi in tempo reale a un apparecchio di casa, senza pinze né lavori sul quadro. Il dispositivo va associato al tuo contatore: la richiesta al distributore la inoltra di solito chi fornisce il dispositivo, a volte il tuo venditore di energia. Funziona solo con i contatori 2G: se hai ancora quello vecchio, usa un monitor con pinza amperometrica. Nell'area clienti del distributore trovi comunque le curve di consumo, ma con un giorno di ritardo.",
      },
      {
        question: "Perché salta il contatore e come evitarlo?",
        answer: "Il contatore stacca quando prelevi troppa potenza: con 3 kW impegnati regge circa 3,3 kW senza limiti, oltre stacca tanto più in fretta quanto più superi la soglia. Un monitor dei consumi in tempo reale ti mostra quali apparecchi accesi insieme, come forno, lavatrice e condizionatore, ti portano al limite, e alcuni avvisano con una notifica prima del distacco. Se succede spesso, valuta con il tuo venditore un aumento della potenza impegnata.",
      },
      {
        question: "Presa smart con misurazione o monitor sul quadro: cosa scegliere?",
        answer: "La presa smart con misurazione serve a sapere quanto consuma un singolo elettrodomestico; il monitor sul quadro, o un dispositivo Chain 2, mostra i consumi di tutta la casa. La presa va bene per frigorifero, lavatrice o stufetta, entro il suo limite di potenza, ma non misura il forno o il piano a induzione collegati direttamente all'impianto. Spesso conviene usarli insieme: il monitor ti fa vedere quando i consumi salgono, la presa ti aiuta a trovare il colpevole.",
      },
      {
        question: "Quanto consuma un elettrodomestico e come si calcola?",
        answer: "Moltiplica la potenza in kW per le ore di funzionamento: un forno da 2 kW acceso per un'ora e mezza consuma 3 kWh. Poi moltiplica per il prezzo del kWh in bolletta; se hai una tariffa a fasce, usa il prezzo della fascia giusta (F1 nei giorni feriali dalle 8 alle 19, F2 e F3 la sera, la notte, il sabato, la domenica e i festivi). Per frigorifero e congelatore, che lavorano a cicli, misura una settimana con una presa smart e moltiplica per 52.",
      },
      {
        question: "Serve un elettricista per installare un monitor di consumi sul quadro?",
        answer: "Per un monitor con pinza amperometrica non serve tagliare cavi, ma bisogna aprire il quadro e lavorare vicino a parti in tensione: se non sei esperto, fallo fare a un elettricista. Per i moduli su barra DIN che modificano l'impianto serve un installatore abilitato, che rilascia la dichiarazione di conformità prevista dal DM 37/2008. Non aprire mai il contatore del distributore, che è sigillato. Se ti preoccupa la privacy, preferisci dispositivi che salvano i dati in locale.",
      },
    ],
    nl: [
      {
        question: "Wat heb ik nodig om mijn slimme meter via de P1-poort uit te lezen?",
        answer: "Een P1-meter of P1-dongle die je in de P1-poort van je slimme meter steekt; daarmee zie je je stroom- en gasverbruik vrijwel live in een app. Nieuwere meters (DSMR 5) geven elke seconde een stroommeting en voeden de dongle zelf; oudere meters meten minder vaak en dan heeft de dongle soms een usb-voeding nodig. Meestal hoef je niets aan te vragen bij je netbeheerder: de poort is bedoeld voor de bewoner.",
      },
      {
        question: "Slimme stekker met energiemeting of een P1-meter?",
        answer: "Een P1-meter laat het verbruik van je hele huis zien, een slimme stekker met energiemeting dat van één apparaat; om sluipverbruik op te sporen heb je meestal beide nodig. Met de P1-meter zie je wanneer je verbruik omhoog schiet en hoe hoog je basislast is, bijvoorbeeld 's nachts. Met slimme stekkers zoek je daarna per apparaat de grootverbruikers, zoals een oude vriezer of een computer die altijd aanstaat. Vaste aansluitingen, zoals een inductiekookplaat, meet je met een stekker niet.",
      },
      {
        question: "Wat kost een apparaat per uur met een dynamisch energiecontract?",
        answer: "Vermenigvuldig het vermogen in kilowatt met de uurprijs van dat moment: een wasdroger van 2 kW die een uur draait, kost 2 kWh maal de uurprijs inclusief belastingen. Bij een dynamisch contract verschilt die prijs per uur, dus hetzelfde programma kan 's middags bij veel zon flink goedkoper zijn dan in de vroege avond. Een P1-meter of slimme stekker laat zien hoeveel kWh een programma echt gebruikt, zodat je kunt bepalen of verschuiven loont.",
      },
      {
        question: "Is een P1-meter veilig voor mijn privacy?",
        answer: "Ja, als de gegevens in je eigen netwerk blijven of naar een dienst gaan die je vertrouwt: via de P1-poort kun je alleen lezen, niets aan de meter veranderen. Kies bij voorkeur een P1-meter met een lokale koppeling (API), zodat je ook zonder cloud kunt werken, bijvoorbeeld met Home Assistant. Lees in de privacyverklaring waar je data worden opgeslagen en of ze worden gedeeld, want je verbruiksprofiel verraadt wanneer je thuis bent of slaapt.",
      },
      {
        question: "P1-meter werkt niet of toont geen gas: wat nu?",
        answer: "Meestal ligt het aan een zwakke wifi-verbinding in de meterkast of aan een oudere slimme meter die de dongle niet van stroom voorziet. Zet een repeater dichter bij de meterkast en sluit de dongle bij een oudere meter aan op een usb-voeding. Zie je wel stroom maar geen gas, dan is vaak de draadloze verbinding tussen gasmeter en elektriciteitsmeter verbroken: meld dat bij je netbeheerder, want het is hun apparatuur. Gasstanden komen bovendien maar eens per vijf minuten of per uur binnen.",
      },
    ],
    pl: [
      {
        question: "Jak sprawdzić zużycie prądu, jeśli mam licznik zdalnego odczytu?",
        answer: "Dane z licznika zdalnego odczytu (LZO) zwykle można bezpłatnie sprawdzić w serwisie internetowym lub aplikacji operatora sieci (OSD), ale z opóźnieniem, a nie na żywo. Pokazują one zużycie godzinowe lub dobowe, co wystarcza, by zobaczyć, kiedy w domu zużywa się najwięcej. Do podglądu w czasie rzeczywistym potrzebny jest miernik z cęgami w rozdzielnicy albo gniazdka z pomiarem energii. Tradycyjne liczniki są stopniowo wymieniane przez operatorów na zdalnego odczytu.",
      },
      {
        question: "Jak obliczyć, ile prądu zużywa urządzenie?",
        answer: "Wystarczy pomnożyć moc w kilowatach przez czas pracy w godzinach: czajnik 2 kW działający łącznie 15 minut dziennie zużywa 0,5 kWh na dobę. Wynik mnoży się przez cenę 1 kWh z rachunku, łącznie z opłatami dystrybucyjnymi. W taryfie G12 tańsza strefa obejmuje noc i kilka godzin w ciągu dnia, a jej godziny zależą od operatora, więc warto tam przenosić pranie czy zmywanie. Lodówkę, która pracuje cyklicznie, lepiej zmierzyć przez tydzień gniazdkiem z pomiarem i pomnożyć wynik przez 52.",
      },
      {
        question: "Gniazdko z pomiarem energii czy licznik na szynę DIN – co wybrać?",
        answer: "Gniazdko z pomiarem sprawdzi się przy pojedynczym urządzeniu z wtyczką, a licznik na szynę DIN – przy całym obwodzie lub domu, na przykład kuchence, bojlerze czy pompie ciepła. Podlicznik w rozdzielnicy pokaże zużycie urządzeń podłączonych na stałe, których gniazdko nie zmierzy. Wersje z Wi-Fi lub Zigbee przesyłają dane do aplikacji. Do rozliczeń z najemcą potrzebny jest licznik z certyfikatem MID. Gniazdko montuje się samemu, licznik w rozdzielnicy – elektryk.",
      },
      {
        question: "Czy licznik energii w rozdzielnicy można zamontować samemu?",
        answer: "Lepiej nie: montaż licznika na szynie DIN wymaga otwarcia rozdzielnicy i podłączenia przewodów, dlatego warto zlecić go elektrykowi z uprawnieniami SEP. Miernik z cęgami tylko obejmuje przewód, ale i tak trzeba pracować blisko elementów pod napięciem. Licznika operatora i zabezpieczenia przedlicznikowego nie wolno ruszać, bo są zaplombowane. Ze względu na prywatność warto wybrać urządzenie, które zapisuje dane lokalnie, a nie wyłącznie w chmurze producenta.",
      },
      {
        question: "Dlaczego gniazdko z pomiarem pokazuje dziwne lub zerowe zużycie?",
        answer: "Najczęściej chodzi o bardzo małe obciążenia: wiele gniazdek mierzy niedokładnie poniżej kilku watów, więc pobór w trybie czuwania może się wyświetlać jako zero. Wahania przy lodówce czy pralce są normalne, bo sprężarka i grzałka włączają się cyklicznie – liczy się suma kWh z kilku dni. Warto sprawdzić w aplikacji ustawioną cenę prądu i zaktualizować oprogramowanie. Gniazdko nie jest przeznaczone do urządzeń powyżej 3680 W, a przegrzane może się wyłączać.",
      },
    ],
  },
  "solaire-balcon": {
    fr: [
      {
        question: "Un kit solaire de balcon est-il légal en France ?",
        answer: "Oui, mais vous devez le déclarer gratuitement à Enedis en signant une convention d'autoconsommation sans injection (CACSI), même si vous ne vendez rien. En copropriété ou en location, vérifiez le règlement et demandez l'accord de la copropriété ou du bailleur avant de fixer quoi que ce soit au garde-corps. Une déclaration en mairie peut être exigée si l'aspect extérieur change, notamment en secteur protégé. Le branchement sur une simple prise reste discuté : faites vérifier le circuit par un électricien.",
      },
      {
        question: "Combien rapporte un kit solaire de balcon ?",
        answer: "Votre gain correspond aux kWh produits que vous consommez sur le moment, multipliés par le prix de votre kWh ; le surplus part sur le réseau sans être payé. Exemple : si le kit produit 450 kWh par an et que vous en consommez 70 %, vous économisez 315 kWh, soit 63 € à 0,20 €/kWh. Pour estimer la production de votre balcon, utilisez le simulateur gratuit PVGIS de la Commission européenne, puis divisez le prix du kit par l'économie annuelle pour obtenir la durée d'amortissement.",
      },
      {
        question: "Kit solaire de balcon avec ou sans batterie ?",
        answer: "Sans batterie dans la plupart des cas : elle n'est utile que si vous êtes absent en journée et que le kit produit nettement plus que votre consommation de fond. Une batterie peut coûter autant que les panneaux, ce qui allonge fortement le temps de retour. Commencez par décaler vos usages en journée, lave-linge, lave-vaisselle ou chauffe-eau programmé, puis mesurez votre surplus réel pendant quelques mois avec le Linky ou une prise à mesure avant d'envisager un stockage.",
      },
      {
        question: "Quelle puissance de kit solaire choisir pour un balcon ?",
        answer: "Calez la puissance sur votre consommation de fond en journée, réfrigérateur, box internet et veilles : c'est elle qui absorbe la production sans surplus perdu. Si ce talon tourne autour de 150 W, un ou deux panneaux suffisent ; au-delà, l'essentiel du supplément partira gratuitement sur le réseau, sauf si vous lancez vos appareils aux heures de soleil. Votre talon se lit dans la courbe de consommation du Linky. Des panneaux fixés à la verticale produisent moins que des panneaux inclinés.",
      },
      {
        question: "Comment fixer et entretenir un kit solaire sur un balcon ?",
        answer: "Le point critique est la fixation : un panneau standard pèse souvent une vingtaine de kilos et offre une forte prise au vent, il faut donc des supports prévus pour votre type de garde-corps. Vérifiez la solidité du garde-corps, ne laissez jamais un panneau posé sans accroche au-dessus du vide et contrôlez les serrages chaque année et après une tempête. Rincez à l'eau claire quand la poussière ou le pollen s'accumulent. Une chute brutale de production signale souvent un câble débranché ou une ombre nouvelle.",
      },
    ],
    en: [
      {
        question: "Is plug-in balcony solar legal in the UK?",
        answer: "Yes, in Great Britain plug-in solar has been legal since 27 August 2026, as long as you use an approved kit of up to 800 W. The kit must appear on the Energy Networks Association's G98 register of approved products and plug straight into a fixed socket, without an extension lead or adaptor. You then notify your network operator (DNO) within 28 days using a free G98 form. Kits with a built-in battery aren't covered yet. In a flat, check your lease and ask your landlord or freeholder first.",
      },
      {
        question: "How much can a balcony solar panel save in the UK?",
        answer: "Your saving is the solar electricity you use as it's generated, multiplied by your unit rate; anything you don't use flows to the grid, usually unpaid. Example: if a kit produces 400 kWh a year and you use 70 % of it, that's 280 kWh, worth £70 at 25p per kWh. Output depends heavily on orientation, tilt and shading, so estimate yours with the European Commission's free PVGIS calculator, then divide the kit's price by the yearly saving to get the payback time.",
      },
      {
        question: "Will balcony solar work on a north-facing or shaded balcony?",
        answer: "It will produce something, but a north-facing or heavily shaded balcony rarely makes it worthwhile; south, south-east or south-west facing gives the best results. Panels hung vertically on a railing produce less than tilted ones, especially in summer when the sun is high. Shade on part of a panel can cut its output sharply, so watch where shadows from balconies above, trees or neighbouring buildings fall during the day before you buy.",
      },
      {
        question: "Plug-in solar with or without a battery?",
        answer: "Without, for now: the new plug-in rules cover solar-only kits, and batteries connected through a socket aren't included. A battery would mainly help if you're out during the day, but it can cost as much as the panels and stretch the payback period considerably. Start by running the washing machine, dishwasher or other flexible loads when the sun is out, then check your surplus over a few months in your smart meter data. A professionally installed home battery is a separate project.",
      },
      {
        question: "How should I mount balcony solar panels safely?",
        answer: "Use a mounting kit made for your type of railing or wall, because a panel can weigh over 20 kg and acts like a sail in strong wind. Make sure the railing is sound, never leave a panel resting loose over a drop, and check bolts and straps once a year and after storms. Route the cable so it can't be trapped by a door or window. Cleaning is simple: rinse with plain water when dust or bird droppings build up.",
      },
    ],
    de: [
      {
        question: "Was ist beim Balkonkraftwerk 2026 erlaubt?",
        answer: "In Deutschland sind bis 800 VA Wechselrichterleistung und 2.000 Wp Modulleistung erlaubt; Sie müssen die Anlage nur im Marktstammdatenregister eintragen, die Meldung an den Netzbetreiber entfällt seit dem Solarpaket I. Die Grenzen gelten für alle Geräte zusammen an einem Anschluss. Ein alter Ferraris-Zähler darf übergangsweise weiterlaufen, bis der Messstellenbetreiber ihn tauscht. In Österreich ist dagegen eine Meldung beim Netzbetreiber nötig, und in der Schweiz gelten eigene Regeln: Fragen Sie dort vor dem Kauf Ihren Netzbetreiber.",
      },
      {
        question: "Darf der Vermieter oder die Eigentümergemeinschaft ein Balkonkraftwerk verbieten?",
        answer: "In Deutschland grundsätzlich nicht mehr: Seit Oktober 2024 sind Steckersolargeräte eine privilegierte Maßnahme, Mieter und Wohnungseigentümer haben also Anspruch auf Zustimmung. Vermieter oder Eigentümergemeinschaft dürfen aber beim Wie mitreden, etwa beim Montageort, bei der Befestigung oder der Optik. Stellen Sie den Antrag schriftlich, mit Datenblatt und Montageplan. In Österreich und der Schweiz gilt dieser Anspruch nicht in gleicher Form; klären Sie die Zustimmung dort vor dem Kauf.",
      },
      {
        question: "Schuko-Stecker oder Wieland-Steckdose für das Balkonkraftwerk?",
        answer: "Nach der Vornorm DIN VDE V 0126-95 ist der Schuko-Stecker bis 960 Watt Modulleistung zulässig; für mehr, bis 2.000 Watt, ist ein Energiestecker wie der Wieland-Anschluss vorgesehen. Wichtig ist in jedem Fall eine fest installierte Außensteckdose an einem intakten Stromkreis, nicht über Verlängerungskabel oder Mehrfachsteckdose. Hängen an demselben Stromkreis viele Verbraucher, kann die Leitung stärker belastet werden, weil Netzstrom und Solarstrom dort zusammenkommen. Lassen Sie Steckdose und Stromkreis im Zweifel von einer Elektrofachkraft prüfen.",
      },
      {
        question: "Wann hat sich ein Balkonkraftwerk amortisiert?",
        answer: "Teilen Sie den Kaufpreis durch die jährliche Ersparnis, also die selbst verbrauchten Kilowattstunden mal Ihrem Strompreis. Rechenbeispiel: Verbrauchen Sie 500 kWh der Erzeugung selbst und zahlen 35 Cent pro kWh, sparen Sie 175 Euro im Jahr; ein Set für 500 Euro hätte sich nach knapp drei Jahren bezahlt gemacht. Eingespeister Überschuss wird in der Regel nicht vergütet. Die erwartbare Erzeugung Ihres Standorts liefert der kostenlose PVGIS-Rechner der EU-Kommission.",
      },
      {
        question: "Warum liefert mein Balkonkraftwerk nie die vollen 800 Watt?",
        answer: "Das ist normal: Module erreichen ihre Nennleistung nur unter Normbedingungen, und Wärme, Neigung, Ausrichtung und Verschattung senken die Leistung im Alltag deutlich. Senkrecht am Geländer montierte Module liefern im Sommer weniger, weil die Sonne hoch steht, und an heißen Tagen sinkt der Wirkungsgrad. Zudem begrenzt der Wechselrichter auf 800 Watt. Bleibt die Leistung bei Sonne dauerhaft bei null, prüfen Sie Stecker, Steckdose und die Statusanzeige des Wechselrichters in der App.",
      },
    ],
    es: [
      {
        question: "¿Es legal enchufar un kit solar de balcón en España?",
        answer: "No está prohibido, pero en España las reglas para los kits enchufables son menos claras que en Alemania, así que lo más seguro es tramitarlo como un autoconsumo. Eso suele implicar que un instalador autorizado emita el certificado de la instalación y que se inscriba en el registro de autoconsumo de tu comunidad autónoma; consulta también a tu distribuidora. Si vives en un piso, la fachada y la barandilla suelen ser elementos comunes: necesitas el permiso de la comunidad de propietarios.",
      },
      {
        question: "¿Funciona un kit solar de balcón durante un apagón?",
        answer: "No: el microinversor se desconecta automáticamente en cuanto falla la red, por seguridad de quienes trabajan en ella. Así que, en un apagón como el de abril de 2025, un kit de balcón no da corriente aunque haga sol. Solo los sistemas con batería y función de respaldo (EPS o backup), instalados con un conmutador adecuado, pueden alimentar algunos enchufes sin red. Si lo que buscas es tener luz en un corte, mira estaciones de energía portátiles con su propio panel.",
      },
      {
        question: "¿Cuánto se ahorra con un panel solar de balcón?",
        answer: "Ahorras lo que produces y consumes en el momento, multiplicado por lo que pagas por cada kWh; lo que no consumes se va a la red, normalmente sin compensación. Ejemplo: si el kit produce 600 kWh al año y aprovechas el 70 %, ahorras 420 kWh; a 0,15 €/kWh son unos 63 €. Con la tarifa 2.0TD, parte de la producción coincide con la punta, de 10 a 14 h, cuando el kWh es más caro. Calcula la producción de tu balcón con el simulador gratuito PVGIS de la Comisión Europea.",
      },
      {
        question: "¿Qué potencia de kit solar de balcón me conviene?",
        answer: "Ajusta la potencia a tu consumo base durante el día, frigorífico, router y aparatos en espera, porque es lo que aprovechará la producción sin regalar excedentes. Si tu consumo base ronda los 150 W, con uno o dos paneles basta; más potencia solo compensa si pones lavadora, lavavajillas o aire acondicionado en horas de sol. En gran parte de España la radiación es alta, así que un panel bien orientado al sur rinde mucho. Puedes ver tu consumo base en Datadis o con un medidor.",
      },
      {
        question: "¿Cómo se limpia y mantiene un panel solar de balcón?",
        answer: "Basta con aclararlo con agua y un paño suave cuando se acumulan polvo, polen o barro tras un episodio de calima, sin productos abrasivos ni agua a presión. En zonas secas la suciedad puede restar producción de forma apreciable, así que revisa el panel tras las lluvias de barro. Comprueba una vez al año, y después de rachas de viento fuerte, que soportes y tornillos siguen firmes, porque el panel actúa como una vela. Una caída brusca de producción suele indicar un conector suelto.",
      },
    ],
    it: [
      {
        question: "Pannello solare da balcone: serve un permesso in Italia?",
        answer: "Di solito non serve un titolo edilizio, ma l'impianto va comunicato al distributore di rete prima di collegarlo, in genere con il Modello Unico semplificato. Le regole per i piccoli kit plug-in sono ancora in evoluzione, quindi chiedi conferma al tuo distributore della procedura in vigore e dell'eventuale adeguamento del contatore. In zone vincolate o nei centri storici può servire un'autorizzazione paesaggistica. In condominio informa l'amministratore e, se sei in affitto, chiedi il consenso del proprietario.",
      },
      {
        question: "Il condominio può vietare il pannello solare sul balcone?",
        answer: "In linea generale no: l'articolo 1122-bis del Codice civile consente di installare impianti a fonti rinnovabili sulle parti di proprietà individuale, come il proprio balcone. Se servono modifiche alle parti comuni, devi comunicarlo prima all'amministratore, e l'assemblea può prescrivere modalità diverse o cautele per sicurezza e decoro architettonico dell'edificio. Un regolamento condominiale di tipo contrattuale può contenere limiti più stringenti, quindi leggilo prima di acquistare. In affitto serve comunque il consenso del proprietario.",
      },
      {
        question: "Quanto produce un pannello solare da balcone in Italia?",
        answer: "Dipende soprattutto da orientamento e latitudine: al Sud e con esposizione a sud si produce sensibilmente di più che al Nord o su un balcone rivolto a est o a ovest. Per una stima precisa usa il simulatore gratuito PVGIS della Commissione europea, con inclinazione e orientamento reali. Il risparmio è pari ai kWh che consumi mentre il pannello produce, moltiplicati per il prezzo in bolletta: 400 kWh autoconsumati a 0,25 €/kWh valgono 100 € all'anno. Un pannello verticale produce meno di uno inclinato.",
      },
      {
        question: "Kit solare da balcone con o senza batteria?",
        answer: "Nella maggior parte dei casi senza: la batteria conviene solo se di giorno sei fuori casa e il pannello produce molto più del tuo consumo di base. Può costare quanto i pannelli e allunga parecchio i tempi di rientro. Prima prova a spostare lavatrice, lavastoviglie e scaldabagno elettrico nelle ore di sole, poi controlla per qualche mese quanto surplus resta davvero, per esempio con un monitor dei consumi. Se il surplus è alto e costante, una batteria dimensionata su quella quantità può avere senso.",
      },
      {
        question: "Come si fissa in sicurezza un pannello solare sulla ringhiera?",
        answer: "Usa staffe progettate per il tuo tipo di ringhiera o parapetto, perché un pannello standard pesa spesso una ventina di kg e con il vento fa da vela. Verifica che la ringhiera sia solida e ben ancorata, non lasciare mai il pannello appoggiato senza fissaggi sopra il vuoto e controlla viti e fascette ogni anno e dopo le raffiche più forti. Fai passare il cavo in modo che porte e finestre non lo schiaccino. Per la pulizia bastano acqua e un panno morbido.",
      },
    ],
    nl: [
      {
        question: "Mag ik zonnepanelen met een stekker op mijn balkon gebruiken?",
        answer: "Ja, dat mag, maar Nederland heeft geen aparte regeling zoals Duitsland: je meldt de panelen net als andere zonnepanelen aan bij je netbeheerder. Dat gaat via het landelijke aanmeldportaal van de netbeheerders. Woon je in een appartement, dan heb je voor bevestiging aan balkon of gevel vaak toestemming nodig van de VvE of je verhuurder. Steek de stekker in een vaste buitencontactdoos op een groep zonder andere zware verbruikers, en laat bij twijfel een installateur de groep controleren.",
      },
      {
        question: "Lonen balkonzonnepanelen nog na het einde van de salderingsregeling?",
        answer: "Ja, juist balkonpanelen houden na 1 januari 2027 hun waarde, omdat je de stroom die ze opwekken grotendeels direct zelf gebruikt. Zonder saldering krijg je voor teruggeleverde stroom alleen een terugleververgoeding die lager ligt dan je stroomprijs, en sommige leveranciers rekenen terugleverkosten. Reken: zelf verbruikte kWh × je stroomprijs inclusief energiebelasting. Met 300 kWh eigen verbruik en een prijs van € 0,30 per kWh bespaar je € 90 per jaar.",
      },
      {
        question: "Hoeveel wattpiek aan balkonpanelen heb ik nodig?",
        answer: "Stem het vermogen af op je basislast overdag, zoals koelkast, router en apparaten in stand-by, want die verbruikt de opgewekte stroom direct. Is je basislast ongeveer 150 watt, dan zijn een of twee panelen genoeg; meer vermogen loont vooral als je de wasmachine of vaatwasser draait als de zon schijnt. Je basislast zie je met een P1-meter, bijvoorbeeld 's nachts. Panelen die verticaal aan een balkonhek hangen, leveren minder dan schuin geplaatste panelen, zeker in de zomer.",
      },
      {
        question: "Balkonpanelen of meedoen met zonnepanelen op het dak van de VvE?",
        answer: "Als je VvE een gezamenlijk dakproject kan opzetten, levert dat per paneel meestal meer op dan een balkonpaneel, omdat een dak vaak beter ligt en de panelen schuin kunnen staan. Een collectief project kost wel tijd: besluitvorming in de VvE, een installateur en afspraken over de verdeling van de opbrengst. Balkonpanelen zijn vooral interessant als een dakproject er niet in zit, als je huurt of als je snel zelf wilt beginnen.",
      },
      {
        question: "Mijn balkonzonnepaneel levert niets op: wat kan er mis zijn?",
        answer: "Meestal krijgt de micro-omvormer geen netspanning, bijvoorbeeld door een losse stekker, een uitgeschakelde groep of een aardlekschakelaar die is gesprongen. Een micro-omvormer start pas als hij netspanning ziet én er genoeg licht is, dus 's ochtends vroeg of bij zware bewolking is nul normaal. Controleer het statuslampje en de app op foutmeldingen. Daalt de opbrengst geleidelijk, kijk dan naar nieuwe schaduw van bomen of balkons en naar vuil op het glas.",
      },
    ],
    pl: [
      {
        question: "Czy w Polsce można podłączyć panel balkonowy do gniazdka?",
        answer: "Można, ale w Polsce nie ma jeszcze uproszczonych przepisów dla instalacji balkonowych: formalnie to mikroinstalacja, którą trzeba zgłosić operatorowi sieci (OSD) przed podłączeniem. Operator zwykle wymienia licznik na dwukierunkowy, a nadwyżki są rozliczane w net-billingu. W bloku montaż na balustradzie lub elewacji zwykle wymaga zgody spółdzielni lub wspólnoty, a w wynajmowanym mieszkaniu – właściciela. Przepisy mogą się zmienić, dlatego przed zakupem warto sprawdzić aktualne wymagania u swojego OSD.",
      },
      {
        question: "Czy panel balkonowy opłaca się przy net-billingu?",
        answer: "Opłaca się głównie wtedy, gdy większość energii zużywa się od razu, bo nadwyżki oddane do sieci są w net-billingu rozliczane po cenach rynkowych, zwykle niższych od ceny zakupu prądu. Oszczędność to zużyte na bieżąco kWh pomnożone przez pełną cenę 1 kWh z opłatami dystrybucyjnymi: 400 kWh rocznie przy cenie 1,10 zł daje około 440 zł. Produkcję dla swojego balkonu można oszacować w bezpłatnym kalkulatorze PVGIS Komisji Europejskiej.",
      },
      {
        question: "Jaką moc panelu balkonowego wybrać?",
        answer: "Moc warto dopasować do stałego zużycia w ciągu dnia – lodówki, routera i urządzeń w czuwaniu – bo to ono od razu wykorzystuje produkcję. Przy stałym poborze około 150 W wystarczą jeden lub dwa panele; większa moc ma sens, gdy pralka, zmywarka czy klimatyzator pracują w słońcu. Stałe zużycie można sprawdzić w serwisie OSD, jeśli licznik jest zdalnego odczytu, albo miernikiem energii. Najlepsza jest ekspozycja południowa, a panel pionowy produkuje mniej niż pochylony.",
      },
      {
        question: "Panel balkonowy z magazynem energii czy bez?",
        answer: "Zwykle bez: magazyn ma sens dopiero wtedy, gdy w dzień nikogo nie ma w domu, a panel produkuje wyraźnie więcej, niż wynosi stałe zużycie. Bateria może kosztować tyle co same panele i mocno wydłuża zwrot inwestycji. Najpierw warto przesunąć pranie, zmywanie czy podgrzewanie wody na godziny słoneczne i przez kilka miesięcy obserwować rzeczywiste nadwyżki. Jeśli są duże i regularne, magazyn dopasowany do nich może się opłacić.",
      },
      {
        question: "Jak bezpiecznie zamontować panel na balkonie w bloku?",
        answer: "Najważniejsze jest mocowanie: standardowy panel waży często około 20 kg i przy wietrze działa jak żagiel, dlatego potrzebne są uchwyty przeznaczone do danego typu balustrady. Warto sprawdzić stan balustrady, nigdy nie zostawiać panelu opartego luzem nad pustą przestrzenią i raz w roku, a także po wichurach, kontrolować śruby i obejmy. Kabel należy poprowadzić tak, by nie przycinały go drzwi ani okno. Do czyszczenia wystarczy woda i miękka ściereczka.",
      },
    ],
  },
  "batteries-domestiques": {
    fr: [
      {
        question: "Une batterie domestique est-elle rentable avec des panneaux solaires ?",
        answer: "Elle peut l'être, car le surplus solaire est racheté bien moins cher que l'électricité que vous achetez : chaque kWh stocké vous évite un achat au prix plein. Calcul : gain annuel = kWh déplacés par an × (prix d'achat − prix de rachat). Avec 1 500 kWh déplacés et un écart de 0,15 €, le gain est de 225 € par an ; divisez le prix de la batterie installée par ce montant et comparez à sa durée de garantie. Si le retour dépasse la garantie, l'opération n'est pas rentable.",
      },
      {
        question: "Quelle capacité de batterie domestique choisir ?",
        answer: "Visez à peu près votre consommation du soir et de la nuit, pas votre consommation quotidienne totale : c'est ce que la batterie doit couvrir avec le surplus de la journée. Exemple : si vous consommez 5 kWh entre 18 h et 8 h, une batterie de 5 à 6 kWh utiles suffit. Inutile de dépasser ce que vos panneaux peuvent recharger : en hiver, le surplus est souvent trop faible pour remplir une grosse batterie. Regardez la capacité utile et la puissance de décharge, pas seulement la capacité brute.",
      },
      {
        question: "Batterie sans panneaux, avec les heures creuses ou Tempo : est-ce rentable ?",
        answer: "Rarement : l'écart entre heures creuses et heures pleines est faible au regard du coût d'un kWh stocké, et les pertes de charge mangent une partie du gain. Avec l'option Tempo, l'écart est fort pendant les 22 jours rouges de l'année, mais cela ne suffit généralement pas à amortir une batterie. Faites le calcul : écart de prix × kWh déplacés par jour × jours par an, moins environ 10 % de pertes, puis comparez au coût de la batterie divisé par son nombre de cycles garantis.",
      },
      {
        question: "Où installer une batterie domestique et qui peut la poser ?",
        answer: "Faites poser une batterie raccordée au tableau par un professionnel qualifié, dans un local sec et tempéré comme un garage ou un cellier, plutôt que dans une chambre ou un passage d'évacuation. Préférez la chimie lithium fer phosphate (LFP), plus stable thermiquement, respectez les distances et la ventilation indiquées par le fabricant et prévenez votre assureur. Les batteries à brancher sur une prise, vendues avec les kits de balcon, s'installent sans électricien mais doivent rester loin de toute source de chaleur.",
      },
      {
        question: "Quelle est la durée de vie d'une batterie domestique ?",
        answer: "Comptez en cycles plutôt qu'en années : les batteries lithium fer phosphate (LFP) actuelles sont souvent garanties une dizaine d'années ou plusieurs milliers de cycles. La garantie précise généralement une capacité restante minimale en fin de période, par exemple 70 %, et non une absence totale d'usure. La chaleur accélère le vieillissement : évitez les combles surchauffés en été. Gardez le logiciel à jour et surveillez dans l'application les alertes de température ou de défaut.",
      },
    ],
    en: [
      {
        question: "Is a home battery worth it without solar panels?",
        answer: "It can be, if you're on a time-of-use tariff: the battery charges with cheap off-peak electricity overnight and powers your home at peak times instead of the day rate. Work it out: kWh shifted per day × (peak rate − off-peak rate) × 365, minus around 10 % for charging losses. Shifting 8 kWh a day with a 15p gap is about £438 a year, or roughly £394 after losses. Compare that with the installed price divided by the warranty years.",
      },
      {
        question: "What size home battery do I need?",
        answer: "Size it to your evening and overnight use, not your total daily consumption, because that's the part a battery covers. Your supplier's app or smart meter data shows usage by half hour: add up what you use from about 4pm to 7am, for example. If that's 6 kWh, a battery with 6 to 8 kWh of usable capacity is a sensible start. With solar panels, don't buy more than they can refill in winter, and check the power rating in kW too.",
      },
      {
        question: "Is there VAT on home batteries in the UK?",
        answer: "No VAT is charged on installed home batteries in the UK at the moment, including batteries added to existing solar panels or fitted on their own. The zero rate covers supply and installation in homes until 31 March 2027; from 1 April 2027 the rate is due to return to 5 %. A battery you buy online and fit yourself doesn't qualify, because the relief applies when installation is part of the supply. Check that your installer's quote shows 0 % VAT.",
      },
      {
        question: "Hybrid inverter or AC-coupled battery?",
        answer: "If you're fitting solar and a battery together, a hybrid inverter is usually simpler and slightly more efficient; if you already have solar, an AC-coupled battery is the easier retrofit. A hybrid inverter stores solar power without converting it twice, but replacing a working inverter just to add a battery rarely makes sense. An AC-coupled battery has its own inverter and connects to your consumer unit, leaving the existing solar system untouched. Either way, ask whether it can also charge at off-peak rates.",
      },
      {
        question: "Will a home battery keep the lights on in a power cut?",
        answer: "Only if it has a backup function and has been wired for it; most grid-connected batteries switch off during a power cut, just like solar inverters. Backup setups use a changeover switch that isolates your home from the grid, then power either a few essential circuits or the whole house. Switchover can take a moment, so check this if you rely on medical equipment. Keep a minimum charge reserved for outages in the app.",
      },
    ],
    de: [
      {
        question: "Lohnt sich ein Stromspeicher für die PV-Anlage?",
        answer: "Finanziell lohnt er sich vor allem, wenn Ihr Strompreis deutlich über der Einspeisevergütung liegt, denn jede gespeicherte und abends verbrauchte Kilowattstunde spart die Differenz. Rechnung: verschobene kWh pro Jahr × (Strompreis − Einspeisevergütung). Bei 1.500 kWh und 25 Cent Differenz sind das 375 Euro im Jahr; teilen Sie den Speicherpreis durch diesen Betrag und vergleichen Sie mit der Garantiedauer. In Deutschland fällt auf Speicher, die mit einer PV-Anlage an Wohngebäuden betrieben werden, keine Mehrwertsteuer an.",
      },
      {
        question: "Wie groß sollte der Heimspeicher sein?",
        answer: "Als verbreitete Faustregel gilt etwa 1 kWh nutzbare Speicherkapazität pro kWp PV-Leistung, aber nicht mehr, als Sie abends und nachts verbrauchen. Ein Haushalt, der zwischen 18 und 8 Uhr rund 5 kWh braucht, ist mit 5 bis 6 kWh gut bedient, auch wenn die Anlage 10 kWp hat. Ein größerer Speicher wird im Winter kaum voll und verlängert die Amortisation. Achten Sie auf die nutzbare statt der Brutto-Kapazität und auf die Entladeleistung für die Abendverbraucher.",
      },
      {
        question: "Balkonkraftwerk mit Speicher: erlaubt und sinnvoll?",
        answer: "In Deutschland ist das erlaubt, solange der Wechselrichter höchstens 800 VA ins Hausnetz abgibt; den Speicher müssen Sie zusätzlich im Marktstammdatenregister eintragen. Sinnvoll ist er vor allem, wenn Sie tagsüber außer Haus sind und das Balkonkraftwerk deutlich mehr erzeugt als Ihre Grundlast. Dann gibt der Speicher den Mittagsstrom abends wieder ab, statt ihn unvergütet ins Netz fließen zu lassen. Ein Speicher kann aber so viel kosten wie das Set selbst; rechnen Sie mit Ihrem tatsächlichen Überschuss.",
      },
      {
        question: "Ist ein Heimspeicher notstromfähig?",
        answer: "Nicht automatisch: Die meisten Speicher schalten bei einem Stromausfall mit ab, nur Systeme mit Notstrom- oder Ersatzstromfunktion und passender Umschalteinrichtung versorgen das Haus weiter. Notstrom bedeutet oft nur eine eigene Steckdose am Gerät, Ersatzstrom dagegen ausgewählte Stromkreise oder das ganze Haus. Die Umschaltung muss eine Elektrofachkraft installieren, damit kein Strom ins abgeschaltete Netz fließt. Legen Sie in der App eine Reserve für den Notfall fest und prüfen Sie, ob die PV-Anlage im Inselbetrieb weiterlädt.",
      },
      {
        question: "Wie lange hält ein Heimspeicher?",
        answer: "Moderne Lithium-Eisenphosphat-Speicher (LFP) haben oft zehn Jahre Garantie oder mehrere Tausend Ladezyklen, und sie altern schleichend, statt plötzlich auszufallen. Die Garantie sichert meist eine Restkapazität zu, etwa 70 Prozent am Ende der Laufzeit. Hitze beschleunigt die Alterung, Frost bremst das Laden: Ein Keller- oder Hauswirtschaftsraum mit gemäßigter Temperatur ist ideal, ein heißer Dachboden nicht. Halten Sie die Firmware aktuell und lassen Sie Fehlermeldungen in der App nicht liegen.",
      },
    ],
    es: [
      {
        question: "¿Una batería doméstica da luz durante un apagón?",
        answer: "Solo si el sistema tiene función de respaldo (backup o EPS) y está instalado para ello: la mayoría de baterías conectadas a red se apagan junto con la red. Un sistema con respaldo usa un conmutador que aísla la casa de la red y alimenta los circuitos esenciales o toda la vivienda, según el montaje. Pregunta al instalador qué circuitos cubre, cuánto tarda en conmutar y si las placas siguen cargando la batería durante el corte. Reserva en la app un porcentaje mínimo para emergencias.",
      },
      {
        question: "¿Merece la pena una batería si tengo compensación de excedentes?",
        answer: "Depende de la diferencia entre lo que pagas por un kWh y lo que te compensan por cada kWh vertido: cuanto mayor sea, antes se amortiza la batería. Con la compensación simplificada, además, el descuento no puede superar el coste de la energía del mes, así que en verano parte del excedente se pierde, salvo que tu comercializadora ofrezca batería virtual. Calcula: kWh desplazados al año × (precio de compra − compensación). Con 1.200 kWh y 0,10 € de diferencia ahorras 120 € al año.",
      },
      {
        question: "¿Qué capacidad de batería necesito para mi casa?",
        answer: "La que cubra tu consumo de la tarde y la noche, no el consumo total del día, porque es lo que la batería debe suplir con el excedente solar. En Datadis o en el área de clientes de tu distribuidora ves tu consumo hora a hora: suma lo que gastas de 19 h a 9 h, por ejemplo. Si son 5 kWh, una batería de 5 a 6 kWh útiles es razonable. Si usas aire acondicionado por la noche en verano, necesitarás también más potencia de descarga.",
      },
      {
        question: "¿Hay que legalizar una batería doméstica?",
        answer: "Sí, si va conectada a tu instalación de autoconsumo: lo normal es que la instale un instalador autorizado y que la modificación se comunique al registro de autoconsumo de tu comunidad autónoma. El instalador emite el certificado de la instalación eléctrica y suele encargarse del trámite. Pregunta también por ayudas autonómicas o bonificaciones municipales del IBI o del ICIO, que varían según el ayuntamiento. Las estaciones portátiles que se enchufan a una toma, sin conexión a la instalación, no requieren estos trámites.",
      },
      {
        question: "¿Cuántos años dura una batería de litio para placas solares?",
        answer: "Las baterías de litio ferrofosfato (LFP) actuales suelen tener una garantía de unos diez años o varios miles de ciclos, y pierden capacidad poco a poco en lugar de fallar de golpe. La garantía suele asegurar una capacidad mínima al final, por ejemplo el 70 %. El calor es su peor enemigo: evita instalarla en un trastero o una buhardilla que se recalienten en verano y busca un lugar sombreado y ventilado. Mantén el firmware actualizado y vigila las alarmas de temperatura en la app.",
      },
    ],
    it: [
      {
        question: "Le batterie di accumulo rientrano nelle detrazioni nel 2026?",
        answer: "Sì, se collegate a un impianto fotovoltaico: nel 2026 rientrano nel bonus ristrutturazioni, con detrazione del 50 % sull'abitazione principale e del 36 % sulle altre, ripartita in dieci anni. La batteria acquistata insieme ai pannelli è il caso più semplice; se la aggiungi a un impianto esistente, verifica le condizioni con il tuo commercialista o con le guide dell'Agenzia delle Entrate. Paga con bonifico parlante e conserva fatture e dichiarazione di conformità. Dal 2027 le aliquote previste scendono.",
      },
      {
        question: "Conviene la batteria se l'energia immessa in rete è pagata poco?",
        answer: "Sì, è proprio il caso in cui conviene di più: ogni kWh accumulato e usato la sera ti evita di comprarlo al prezzo pieno, mentre immesso in rete ti viene riconosciuto molto meno. Calcola: kWh spostati in un anno × (prezzo di acquisto − valore riconosciuto all'energia immessa). Con 1.500 kWh e 0,15 € di differenza ottieni 225 € all'anno; dividi il costo della batteria installata, al netto delle detrazioni, per questa cifra e confronta il risultato con la garanzia.",
      },
      {
        question: "Quanti kWh di batteria servono per una casa?",
        answer: "Quanti ne consumi dalla sera alla mattina, non il consumo dell'intera giornata, perché è quella la parte che la batteria copre con il surplus solare. Nell'area clienti del distributore trovi i consumi orari: se dalle 19 alle 8 consumi circa 5 kWh, una batteria da 5-6 kWh utili è un buon punto di partenza. Più grande serve a poco se d'inverno i pannelli non la riempiono. Controlla anche la potenza di scarica, che deve coprire i carichi serali principali.",
      },
      {
        question: "Meglio spostare i consumi nelle ore di sole o comprare una batteria?",
        answer: "Prima sposta i consumi: far partire lavatrice, lavastoviglie, asciugatrice o scaldabagno nelle ore di sole è gratis e aumenta subito l'autoconsumo. Molti elettrodomestici hanno la partenza ritardata, e una presa smart può accendere lo scaldabagno quando c'è surplus. Solo dopo qualche mese, guardando i dati dell'inverter, saprai quanto surplus resta davvero da accumulare. A quel punto puoi dimensionare la batteria su quella quantità, invece di comprarne una troppo grande.",
      },
      {
        question: "Quanto dura una batteria di accumulo e dove va installata?",
        answer: "Le batterie al litio ferro fosfato (LFP) attuali hanno spesso dieci anni di garanzia o diverse migliaia di cicli, e perdono capacità gradualmente invece di guastarsi all'improvviso. La garanzia di solito assicura una capacità residua minima, per esempio il 70 %. Il caldo accelera l'invecchiamento: evita sottotetti e locali esposti al sole d'estate e preferisci un garage o un locale tecnico fresco e aerato. L'installazione va fatta da un installatore abilitato, e conviene avvisare l'assicurazione della casa.",
      },
    ],
    nl: [
      {
        question: "Is een thuisbatterij rendabel na het einde van de salderingsregeling?",
        answer: "Vaker dan nu: vanaf 1 januari 2027 krijg je voor teruggeleverde stroom veel minder dan je voor afgenomen stroom betaalt, en dat verschil verdient een batterij terug. Elke kWh die je opslaat en 's avonds zelf gebruikt, levert het verschil tussen je stroomprijs en de terugleververgoeding op, plus eventuele terugleverkosten die je ontloopt. Met 1.500 kWh en € 0,20 verschil is dat € 300 per jaar; deel de prijs van de geïnstalleerde batterij door dat bedrag en vergelijk met de garantie.",
      },
      {
        question: "Thuisbatterij en dynamisch contract: loont laden als stroom goedkoop is?",
        answer: "Soms: met een dynamisch contract kan een slimme thuisbatterij laden als de stroom goedkoop is en ontladen als hij duur is, ook zonder zonnepanelen. Het prijsverschil moet dan groter zijn dan de laad- en ontlaadverliezen, ongeveer 10 %, en de slijtage per cyclus. Reken met de volledige kWh-prijs inclusief energiebelasting en btw. Kies een batterij en energieleverancier die dit automatisch kunnen sturen, anders wordt het veel handwerk.",
      },
      {
        question: "Is een thuisbatterij brandveilig en waar plaats je hem?",
        answer: "Een goed geïnstalleerde thuisbatterij met LFP-cellen is relatief veilig, maar plaats hem niet in een slaapkamer of vluchtroute, en kies liever een berging of garage. Houd je aan de afstanden en ventilatie die de fabrikant voorschrijft, hang een rookmelder in dezelfde ruimte en laat de batterij door een erkend installateur aansluiten. Meld de batterij bij je opstalverzekeraar. Een stekkerbatterij voor balkonpanelen is kleiner, maar ook die zet je niet naast een warmtebron of brandbaar materiaal.",
      },
      {
        question: "Hoeveel kWh thuisbatterij heb ik nodig?",
        answer: "Ongeveer wat je 's avonds en 's nachts verbruikt, niet je totale dagverbruik, want dat deel moet de batterij uit je zonnestroom halen. Met een P1-meter of de app van je energieleverancier zie je je verbruik per uur: tel bijvoorbeeld op wat je tussen 18.00 en 8.00 uur gebruikt. Is dat 5 kWh, dan is 5 tot 6 kWh bruikbare capaciteit een logische start. Groter heeft weinig zin als je panelen hem in de winter toch niet vol krijgen.",
      },
      {
        question: "Mijn thuisbatterij laadt niet (meer) vol: wat is er aan de hand?",
        answer: "Vaak staat er een instelling in de weg, zoals een reservepercentage of een laadschema, of is het in de berging of garage te koud om te laden. LFP-batterijen mogen niet onder het vriespunt laden, en veel systemen beperken het laadvermogen al eerder bij lage temperaturen. Controleer in de app de instellingen, foutmeldingen en firmware-updates. In de winter is er bovendien vaak gewoon te weinig zonnestroom over. Blijft het probleem, neem dan contact op met je installateur.",
      },
    ],
    pl: [
      {
        question: "Czy magazyn energii opłaca się przy net-billingu?",
        answer: "Częściej niż w starym systemie opustów, bo w net-billingu nadwyżki są rozliczane po cenach rynkowych, a prąd z sieci kupuje się drożej, razem z opłatami dystrybucyjnymi. Każda kWh zmagazynowana w dzień i zużyta wieczorem daje różnicę między ceną zakupu a wartością sprzedanej nadwyżki. Przykład: 1500 kWh rocznie przy różnicy 0,60 zł to 900 zł oszczędności. Cenę magazynu, po odjęciu ewentualnej dotacji, warto podzielić przez tę kwotę i porównać z okresem gwarancji.",
      },
      {
        question: "Jaki magazyn energii do fotowoltaiki wybrać?",
        answer: "Pojemność warto dobrać do zużycia wieczorem i w nocy, a nie całodobowego; popularna reguła mówi o około 1 kWh pojemności na 1 kWp mocy instalacji. Jeśli od 18 do 8 rano dom zużywa około 6 kWh, magazyn o pojemności użytecznej 6–8 kWh będzie rozsądny nawet przy instalacji 10 kWp. Liczy się pojemność użyteczna, a nie brutto, oraz moc rozładowania. Przy falowniku hybrydowym trzeba sprawdzić, które magazyny są z nim zgodne.",
      },
      {
        question: "Czy magazyn energii trzeba zgłosić do operatora?",
        answer: "Zwykle tak: magazyn współpracujący z siecią należy zgłosić operatorowi sieci (OSD), najczęściej razem z mikroinstalacją albo jako jej zmianę. Formularze i wymagania różnią się między operatorami, dlatego warto pobrać je ze strony swojego OSD lub poprosić o to instalatora. Potwierdzenie zgłoszenia bywa też wymagane przy wnioskach o dotacje, na przykład z programu Mój Prąd, którego aktualne nabory trzeba sprawdzić. Stacje przenośne ładowane z gniazdka takich formalności nie wymagają.",
      },
      {
        question: "Magazyn energii czy grzałka w bojlerze na nadwyżki?",
        answer: "Jeśli latem nadwyżek jest dużo, tańszym sposobem bywa podgrzewanie wody: grzałka w bojlerze lub pompa ciepła do ciepłej wody sterowana nadwyżką. Taki sterownik kosztuje zwykle ułamek ceny magazynu, a ciepła woda i tak jest potrzebna. Magazyn energii przydaje się, gdy wieczorem trzeba zasilić gniazdka, oświetlenie i sprzęty, a także jako zasilanie awaryjne. Często najlepszy efekt daje połączenie: najpierw woda, potem magazyn dobrany do pozostałych nadwyżek.",
      },
      {
        question: "Czy magazyn energii działa podczas awarii prądu?",
        answer: "Tylko wtedy, gdy ma funkcję zasilania awaryjnego (backup, EPS) i jest do niej podłączony; większość magazynów współpracujących z siecią wyłącza się razem z nią. Układ z backupem odcina dom od sieci przełącznikiem i zasila wybrane obwody, na przykład lodówkę, oświetlenie, router czy pompę obiegową kotła. Warto zapytać instalatora, które obwody są objęte, ile trwa przełączenie i czy panele ładują magazyn podczas awarii. W aplikacji można ustawić rezerwę na wypadek braku prądu.",
      },
    ],
  },
  "eclairage-connecte": {
    fr: [
      {
        question: "Ampoule connectée Wi-Fi, Zigbee ou Matter : laquelle choisir ?",
        answer: "Pour deux ou trois ampoules, le Wi-Fi suffit et ne demande aucun pont ; au-delà d'une dizaine, préférez Zigbee ou Matter over Thread, plus fiables et qui ne surchargent pas votre box. Zigbee passe par un pont, comme celui de Philips Hue ou d'IKEA, et fonctionne en local. Matter est un standard commun qui permet d'utiliser la même ampoule avec Alexa, Google Home ou Apple Maison ; Thread demande un contrôleur, souvent intégré à une enceinte connectée ou à un pont récent.",
      },
      {
        question: "IKEA Dirigera ou pont Philips Hue : que choisir ?",
        answer: "Prenez le pont Hue pour le plus large choix d'ampoules, de rubans et de luminaires dans un écosystème très complet, et Dirigera si vous misez sur les produits IKEA, moins chers, et sur Matter. Les deux pilotent des ampoules Zigbee en local et se relient à Alexa, Google Home ou Apple Maison via Matter. Le pont Hue accepte en général des ampoules Zigbee d'autres marques, dont IKEA. Dirigera sert aussi de routeur Thread pour les nouveaux produits IKEA compatibles Matter.",
      },
      {
        question: "Combien consomme une ampoule connectée, y compris en veille ?",
        answer: "Allumée, autant qu'une LED classique de même luminosité, et en veille 0,5 W au maximum, la limite fixée par le règlement européen sur l'écoconception des sources lumineuses. Calcul : 0,5 W × 24 h × 365 jours = 4,4 kWh par an et par ampoule, à multiplier par votre prix du kWh et par le nombre d'ampoules. Une ampoule de 9 W allumée quatre heures par jour consomme environ 13 kWh par an. Avec vingt ampoules connectées, la veille finit donc par compter.",
      },
      {
        question: "Faut-il laisser l'interrupteur allumé avec une ampoule connectée ?",
        answer: "Oui : si vous coupez l'interrupteur mural, l'ampoule n'est plus alimentée et ne répond plus à l'application, aux assistants vocaux ni aux automatisations. Pour garder un geste au mur, posez une télécommande sans fil sur ou à côté de l'interrupteur, ou installez un interrupteur connecté, mais pas les deux sur le même point lumineux. N'utilisez jamais une ampoule connectée derrière un variateur classique : elle peut grésiller, clignoter ou s'abîmer.",
      },
      {
        question: "Pourquoi mon ampoule connectée se déconnecte-t-elle ou clignote-t-elle ?",
        answer: "Le plus souvent à cause d'une coupure à l'interrupteur, d'un signal Wi-Fi trop faible ou d'un variateur classique sur le circuit. Pour une ampoule Wi-Fi, vérifiez qu'elle se connecte en 2,4 GHz et rapprochez le routeur ou ajoutez un répéteur. En Zigbee, un appareil branché sur secteur placé entre le pont et l'ampoule renforce le maillage. Pour la réinitialiser, la plupart des marques demandent d'éteindre et rallumer plusieurs fois de suite : la séquence exacte figure dans la notice.",
      },
    ],
    en: [
      {
        question: "Tapo or Govee smart bulbs: which should I choose?",
        answer: "Choose Govee if you mainly want colour effects, light strips and TV backlighting, and Tapo if you want simple, affordable bulbs managed alongside Tapo plugs and cameras. Both are Wi-Fi brands that work without a hub and connect to Alexa and Google Assistant, and some models of each support Matter, which also opens up Apple Home. Wi-Fi bulbs are fine for a few rooms; for dozens of lights, a Zigbee or Thread system is usually more reliable.",
      },
      {
        question: "B22 or E27: which smart bulb fitting do I need?",
        answer: "Check the old bulb: most UK ceiling pendants and lamps use B22 bayonet caps, which push in and twist, while E27 and E14 are screw fittings and GU10 is used in spotlights. Many smart bulbs come in E27 first, so the B22 version can be harder to find; avoid adaptors where possible, as they add length and can leave a bulb sticking out of the shade. Compare brightness in lumens rather than watts: around 800 lumens replaces an old 60 W bulb.",
      },
      {
        question: "How much electricity does a smart bulb use on standby?",
        answer: "No more than 0.5 W, the limit set by ecodesign rules for connected light sources, which works out at about 4.4 kWh a year per bulb. At an example rate of 25p per kWh, that's at most around £1.10 a year per bulb. When it's on, a smart LED uses the same as a regular LED of equal brightness: a 9 W bulb lit for four hours a day uses about 13 kWh a year. Switching off at the wall saves standby power but makes the bulb unreachable.",
      },
      {
        question: "Do smart bulbs need an app account or cloud connection?",
        answer: "Most Wi-Fi bulbs need the maker's app and a cloud account for setup and remote control, while Zigbee, Thread and Matter systems can run locally inside your home. If privacy matters, look for Matter support or a hub that works locally, such as Philips Hue or a Home Assistant setup, so lights still respond if the internet goes down. Check what data the app collects and switch off optional usage sharing. Keep firmware updated, since updates patch security flaws.",
      },
      {
        question: "Why do my smart bulbs keep becoming unresponsive?",
        answer: "Most often because they've been switched off at the wall, the Wi-Fi signal is weak, or the router has changed. Smart bulbs need constant power, so fit a wireless switch or a smart switch rather than using the light switch. Wi-Fi bulbs usually need the 2.4 GHz band, and Zigbee bulbs benefit from a mains-powered device between the hub and the bulb. Bulbs in enclosed fittings can also overheat, so check the packaging says they suit enclosed luminaires.",
      },
    ],
    de: [
      {
        question: "Brauche ich eine Bridge für smarte Glühbirnen?",
        answer: "Für einige WLAN- oder Bluetooth-Lampen nicht; ab mehreren Räumen ist eine Bridge mit Zigbee oder Thread aber meist zuverlässiger. Philips-Hue-Lampen lassen sich per Bluetooth ohne Bridge steuern, allerdings nur in Reichweite des Smartphones und mit weniger Funktionen. WLAN-Lampen belasten den Router mit jedem Gerät, während Zigbee- und Thread-Lampen ein eigenes Funknetz bilden, das mit jeder Lampe stabiler wird. Eine Bridge bringt außerdem Zeitpläne, Automationen und Steuerung von unterwegs.",
      },
      {
        question: "IKEA Dirigera oder Philips Hue Bridge – welches System passt?",
        answer: "Hue bietet die größte Auswahl an Lampen, Leuchten und Zubehör in einem sehr ausgereiften System; Dirigera ist günstiger und passt zu IKEA-Produkten und Matter. Beide steuern Zigbee-Lampen lokal und lassen sich per Matter mit Alexa, Google Home oder Apple Home verbinden. Die Hue Bridge nimmt meist auch Zigbee-Lampen anderer Hersteller auf, etwa von IKEA. Dirigera dient zusätzlich als Thread-Border-Router für neue IKEA-Produkte mit Matter. Wer schon Lampen eines Systems besitzt, bleibt am einfachsten dabei.",
      },
      {
        question: "Wie viel Strom verbraucht eine smarte Lampe im Standby?",
        answer: "Höchstens 0,5 Watt, das schreibt die EU-Ökodesign-Verordnung für vernetzte Lichtquellen vor, also maximal etwa 4,4 kWh im Jahr pro Lampe. Bei einem Beispielpreis von 35 Cent pro kWh sind das rund 1,50 Euro jährlich. Eingeschaltet verbraucht eine smarte LED so viel wie eine normale LED gleicher Helligkeit: 9 Watt, vier Stunden täglich, ergeben etwa 13 kWh im Jahr. Bei zwanzig smarten Lampen summiert sich der Standby-Verbrauch also spürbar.",
      },
      {
        question: "Funktioniert smarte Beleuchtung auch ohne Cloud und datenschutzfreundlich?",
        answer: "Ja, mit einer lokalen Zentrale: Zigbee-Systeme wie Hue oder IKEA, Matter-Geräte und Plattformen wie Home Assistant schalten das Licht auch ohne Internet. Viele reine WLAN-Lampen brauchen dagegen ein Herstellerkonto und laufen über Server, teils außerhalb der EU. Prüfen Sie in der Datenschutzerklärung, welche Nutzungsdaten erfasst werden, und deaktivieren Sie unnötige Freigaben. Halten Sie die Firmware aktuell, denn Updates schließen Sicherheitslücken. Für Sprachsteuerung ist meist trotzdem eine Cloud im Spiel.",
      },
      {
        question: "Warum flackert meine smarte Lampe oder reagiert nicht mehr?",
        answer: "Meist wurde sie am Lichtschalter ausgeschaltet, das Funksignal ist zu schwach oder ein herkömmlicher Dimmer sitzt im Stromkreis. Smarte Lampen brauchen Dauerstrom: Ersetzen Sie den Schalter durch einen Funkschalter oder kleben Sie einen kabellosen Taster daneben. An einem herkömmlichen Dimmer flackern oder brummen sie; lassen Sie den Dimmer von einer Elektrofachkraft gegen einen normalen Schalter tauschen. Bei Zigbee hilft ein netzbetriebenes Gerät als Zwischenstation, bei WLAN ein besserer Empfang im 2,4-GHz-Band.",
      },
    ],
    es: [
      {
        question: "¿Bombillas inteligentes wifi o con hub Zigbee?",
        answer: "Para pocas bombillas, wifi: se configuran con el móvil y no necesitan nada más; si vas a poner muchas, un hub Zigbee o Matter sobre Thread será más estable. Cada bombilla wifi es un dispositivo más en tu router, y algunos routers de operadora se resienten con muchos aparatos conectados. Zigbee crea su propia red en malla, funciona en local y responde más rápido. Si quieres usarlas con Alexa, Google Home y Apple Casa a la vez, busca el logo Matter en la caja.",
      },
      {
        question: "¿Tapo, Govee o Philips Hue: qué marca de bombillas inteligentes elegir?",
        answer: "Elige Govee si buscas efectos de color, tiras LED y retroiluminación de la tele, Tapo si quieres bombillas wifi sencillas y económicas, y Philips Hue si quieres el ecosistema más completo con hub. Tapo y Govee funcionan por wifi sin hub y se conectan con Alexa y Google; Hue usa Zigbee con su puente, aunque también admite Bluetooth para empezar. Fíjate en el casquillo (E27, E14 o GU10) y en los lúmenes: unos 800 lm equivalen a una bombilla antigua de 60 W.",
      },
      {
        question: "¿Cuánto consume una bombilla inteligente en espera?",
        answer: "Como máximo 0,5 W, el límite que fija el reglamento europeo de diseño ecológico para fuentes de luz conectadas, es decir, unos 4,4 kWh al año por bombilla. A 0,15 €/kWh son menos de 0,70 € al año por bombilla; con veinte bombillas, unos 13 €. Encendida, gasta lo mismo que una LED normal de igual brillo: una de 9 W cuatro horas al día consume unos 13 kWh al año. Si la apagas desde el interruptor no consume en espera, pero deja de responder a la app.",
      },
      {
        question: "¿Se pueden usar bombillas inteligentes con un regulador o un interruptor normal?",
        answer: "Con interruptor sí, pero debe quedarse encendido; con un regulador de intensidad clásico, no, porque la bombilla puede parpadear, zumbar o estropearse. Si apagas desde la pared, la bombilla se queda sin corriente y no responde a la app ni a Alexa. Para mantener un gesto en la pared, usa un pulsador inalámbrico de la misma marca o un interruptor inteligente, pero no ambos en el mismo punto de luz. Si tienes un regulador instalado, pide a un electricista que lo cambie por un mecanismo normal.",
      },
      {
        question: "¿Por qué mi bombilla inteligente se desconecta de la app?",
        answer: "Casi siempre por un corte de corriente desde el interruptor, una señal wifi débil o un cambio de router o de contraseña. La mayoría solo funciona en la banda de 2,4 GHz: si tu router une bandas en una sola red, crea una red de 2,4 GHz para configurarlas. En Zigbee, un enchufe inteligente entre el hub y la bombilla refuerza la malla. Para reiniciarla, casi todas las marcas piden encender y apagar varias veces seguidas: la secuencia exacta está en las instrucciones.",
      },
    ],
    it: [
      {
        question: "Lampadine smart con Alexa: serve un hub?",
        answer: "No, le lampadine wifi si collegano ad Alexa senza hub; un hub Zigbee diventa utile quando le lampadine sono tante o vuoi automazioni che funzionano anche senza internet. Alcuni Echo hanno un hub Zigbee integrato e possono collegare direttamente lampadine Zigbee, comprese molte Philips Hue e IKEA. Se in casa usi anche Google Home o Apple Casa, scegli lampadine con logo Matter, compatibili con tutti gli assistenti. Le Hue funzionano anche via Bluetooth senza bridge, ma con meno funzioni.",
      },
      {
        question: "Quanto consuma una lampadina smart in standby?",
        answer: "Al massimo 0,5 W, il limite fissato dal regolamento europeo sulla progettazione ecocompatibile per le sorgenti luminose connesse, cioè circa 4,4 kWh all'anno per lampadina. A 0,25 €/kWh fanno circa 1,10 € all'anno a lampadina; con venti lampadine si arriva a una ventina di euro. Accesa, consuma come un LED normale della stessa luminosità: una da 9 W accesa quattro ore al giorno consuma circa 13 kWh all'anno. Spegnerla dall'interruttore azzera lo standby, ma la rende irraggiungibile dall'app.",
      },
      {
        question: "Lampadine smart wifi o Zigbee: cosa conviene?",
        answer: "Wifi se ti servono poche lampadine e vuoi spendere poco, Zigbee o Matter su Thread se pensi di riempire la casa di luci smart. Le lampadine wifi si configurano dall'app senza accessori, ma ognuna occupa il router: con molti dispositivi alcuni modem degli operatori iniziano a perdere colpi. Zigbee crea una rete separata a maglie che funziona in locale e risponde più in fretta. Matter, sostenuto da Amazon, Google, Apple e Samsung, permette di non legarti a una sola marca.",
      },
      {
        question: "Si possono usare le lampadine smart con il varialuce o il deviatore?",
        answer: "Con un deviatore sì, purché il circuito resti acceso; con un varialuce tradizionale no, perché la lampadina può sfarfallare, ronzare o guastarsi. Se spegni da uno dei punti di comando, la lampadina resta senza corrente e non risponde più all'app. Per comandarla dal muro usa un pulsante wireless della stessa marca, da fissare sulla placca, oppure sostituisci il frutto con un interruttore smart. Il varialuce esistente va sostituito con un frutto normale, possibilmente da un elettricista.",
      },
      {
        question: "Perché la lampadina smart si disconnette o non risponde?",
        answer: "Di solito perché è stata spenta dall'interruttore, il segnale wifi è debole o hai cambiato router o password. Quasi tutte usano solo la banda a 2,4 GHz: se il modem unisce le bande, attiva una rete separata a 2,4 GHz per la configurazione. Con Zigbee, una presa smart tra hub e lampadina rinforza la rete. Per il reset la maggior parte dei marchi chiede di accendere e spegnere più volte di seguito: la sequenza giusta è nelle istruzioni.",
      },
    ],
    nl: [
      {
        question: "IKEA Dirigera of Philips Hue Bridge: wat kies je?",
        answer: "Kies Hue als je de grootste keuze in lampen, armaturen en accessoires wilt in een uitgebreid systeem; kies Dirigera als je vooral IKEA-producten gebruikt en goedkoper wilt instappen. Beide sturen Zigbee-lampen lokaal aan en zijn via Matter te koppelen aan Google Home, Apple Woning of Alexa. De Hue Bridge accepteert meestal ook Zigbee-lampen van andere merken, waaronder IKEA. Dirigera werkt bovendien als Thread-borderrouter voor nieuwe IKEA-producten met Matter.",
      },
      {
        question: "Heb ik een Hue Bridge nodig voor slimme lampen?",
        answer: "Nee, niet voor een paar lampen: Hue-lampen werken ook via Bluetooth, en wifi-lampen van andere merken hebben helemaal geen bridge nodig. Via Bluetooth bedien je Hue-lampen alleen in de buurt en mis je functies als bediening van buitenaf en uitgebreide automatiseringen. Met meerdere kamers is een bridge met Zigbee betrouwbaarder: de lampen vormen een eigen netwerk dat je wifi niet belast. Ook schakelaars, sensoren en routines werken dan lokaal en snel.",
      },
      {
        question: "Hoeveel stroom verbruikt een slimme lamp in stand-by?",
        answer: "Maximaal 0,5 watt, de grens uit de Europese ecodesignregels voor verbonden lichtbronnen, dus hooguit ongeveer 4,4 kWh per jaar per lamp. Bij een voorbeeldprijs van € 0,30 per kWh is dat zo'n € 1,30 per jaar per lamp. Brandt hij, dan verbruikt een slimme ledlamp evenveel als een gewone ledlamp met dezelfde lichtsterkte: 9 watt, vier uur per dag, is ongeveer 13 kWh per jaar. Met twintig slimme lampen loopt het sluipverbruik dus op.",
      },
      {
        question: "Kun je slimme lampen gebruiken met een gewone schakelaar of dimmer?",
        answer: "Met een gewone schakelaar wel, als die aan blijft staan; met een gewone dimmer niet, want dan kan de lamp flikkeren, zoemen of kapotgaan. Zet je de lamp uit met de schakelaar, dan krijgt hij geen stroom meer en reageert hij niet op de app. Plak daarom een draadloze schakelaar van hetzelfde merk naast de bestaande schakelaar, of vervang die door een slimme schakelaar. Een bestaande dimmer laat je vervangen door een gewone schakelaar, het liefst door een installateur.",
      },
      {
        question: "Slimme lamp werkt niet meer of reageert niet: wat nu?",
        answer: "Controleer eerst of de lamp stroom krijgt: in de meeste gevallen is hij uitgezet met de schakelaar aan de muur. Reageert hij nog steeds niet, kijk dan of je router, wachtwoord of wifi-band is veranderd: de meeste lampen werken alleen op 2,4 GHz. Bij Zigbee helpt een slimme stekker tussen bridge en lamp om het netwerk te versterken. Resetten gaat bij de meeste merken door de lamp een aantal keer snel aan en uit te zetten; de juiste volgorde staat in de handleiding.",
      },
    ],
    pl: [
      {
        question: "Żarówka smart Wi-Fi czy Zigbee – którą wybrać?",
        answer: "Przy kilku żarówkach wystarczy Wi-Fi bez żadnej bramki, a przy większej liczbie lepiej sprawdzi się Zigbee lub Matter przez Thread, bo nie obciążają routera. Żarówki Wi-Fi, często obsługiwane przez aplikację Tuya lub Smart Life, konfiguruje się szybko telefonem. Zigbee tworzy własną sieć kratową, działa lokalnie i szybciej reaguje, ale wymaga bramki, na przykład Philips Hue, IKEA lub uniwersalnej bramki Tuya. Logo Matter na pudełku oznacza zgodność z Google Home, Alexą i Apple Dom.",
      },
      {
        question: "Tapo, Govee czy Philips Hue – jaką markę wybrać?",
        answer: "Govee sprawdzi się przy efektach kolorystycznych, taśmach LED i podświetleniu telewizora, Tapo przy prostych i tanich żarówkach Wi-Fi, a Philips Hue jako najbardziej rozbudowany system z bramką. Tapo i Govee działają przez Wi-Fi bez bramki i współpracują z Asystentem Google oraz Alexą; Hue korzysta z Zigbee i bramki, ale można zacząć przez Bluetooth. Warto sprawdzić gwint (E27, E14 lub GU10) i jasność w lumenach: około 800 lm odpowiada dawnej żarówce 60 W.",
      },
      {
        question: "Ile prądu zużywa żarówka smart w trybie czuwania?",
        answer: "Najwyżej 0,5 W, bo taki limit dla podłączonych źródeł światła wyznacza unijne rozporządzenie w sprawie ekoprojektu, czyli maksymalnie około 4,4 kWh rocznie na żarówkę. Przy cenie 1,10 zł za kWh to niecałe 5 zł rocznie na sztukę. Włączona zużywa tyle co zwykła żarówka LED o tej samej jasności: 9 W przez cztery godziny dziennie to około 13 kWh rocznie. Wyłączenie wyłącznikiem ściennym zeruje pobór w czuwaniu, ale żarówka przestaje reagować na aplikację.",
      },
      {
        question: "Czy żarówkę smart można podłączyć pod zwykły wyłącznik lub ściemniacz?",
        answer: "Pod zwykły wyłącznik tak, ale musi on pozostać włączony; pod tradycyjny ściemniacz nie, bo żarówka może migać, buczeć albo się uszkodzić. Po wyłączeniu wyłącznikiem żarówka traci zasilanie i nie odpowiada na polecenia z aplikacji. Wygodnym rozwiązaniem jest bezprzewodowy przycisk tej samej marki przyklejony obok wyłącznika albo inteligentny łącznik zamiast zwykłego. Istniejący ściemniacz warto wymienić na zwykły łącznik, najlepiej z pomocą elektryka.",
      },
      {
        question: "Dlaczego żarówka smart traci połączenie z aplikacją?",
        answer: "Najczęściej dlatego, że ktoś wyłączył ją wyłącznikiem, sygnał Wi-Fi jest za słaby albo zmienił się router lub hasło. Większość żarówek działa tylko w paśmie 2,4 GHz, więc przy routerze łączącym pasma warto utworzyć osobną sieć 2,4 GHz. W sieci Zigbee zasięg wzmacnia urządzenie zasilane z gniazdka, na przykład inteligentne gniazdko. Reset zwykle polega na kilkukrotnym włączeniu i wyłączeniu żarówki, a dokładna sekwencja jest w instrukcji.",
      },
    ],
  },
  "interrupteurs": {
    fr: [
      {
        question: "Interrupteur connecté sans neutre : est-ce possible ?",
        answer: "Oui, il existe des interrupteurs et micromodules conçus sans neutre, mais ils fonctionnent moins bien avec des ampoules LED de faible puissance. Sans neutre, le module s'alimente en laissant passer un petit courant à travers la lampe, ce qui peut faire clignoter ou luire faiblement les LED à l'arrêt ; un petit condensateur (bypass) posé au niveau du luminaire règle souvent le problème. Dans les logements anciens, le neutre est souvent absent du boîtier : vérifiez si un fil bleu est présent avant d'acheter.",
      },
      {
        question: "Micromodule derrière l'interrupteur ou interrupteur connecté complet ?",
        answer: "Le micromodule est le plus discret : il se cache derrière votre interrupteur actuel, que vous gardez ; l'interrupteur complet remplace le mécanisme et offre un design assorti. Avec un micromodule, vérifiez la profondeur du boîtier, car il faut loger le module et les fils, et choisissez un modèle avec entrée pour bouton-poussoir ou interrupteur. Les gammes complètes, comme Legrand avec Netatmo, s'intègrent bien à une rénovation et gèrent le va-et-vient avec des commandes sans fil.",
      },
      {
        question: "Peut-on installer soi-même un interrupteur connecté ?",
        answer: "Oui, chez vous c'est autorisé, à condition de couper le disjoncteur du circuit et de respecter la norme NF C 15-100 ; si vous n'êtes pas à l'aise, faites appel à un électricien. Vérifiez l'absence de tension avec un vérificateur d'absence de tension avant de toucher aux fils, repérez phase, neutre et retour lampe, et prenez une photo du câblage d'origine. En location, informez le propriétaire et conservez l'ancien interrupteur pour le remettre en partant.",
      },
      {
        question: "Combien consomme un interrupteur connecté en veille ?",
        answer: "Généralement moins d'un watt, soit quelques kWh par an et par interrupteur : 0,5 W en continu font 4,4 kWh par an. Multipliez par votre prix du kWh et par le nombre d'interrupteurs : à 0,20 €, une dizaine d'interrupteurs à 0,5 W coûtent environ 9 € par an. Les modèles Zigbee ou Thread consomment en général moins que les modèles Wi-Fi. En contrepartie, les minuteries et les scénarios évitent de laisser des lampes allumées pour rien.",
      },
      {
        question: "Pourquoi mes LED clignotent-elles avec un interrupteur connecté ?",
        answer: "Le plus souvent parce que l'interrupteur est sans neutre et que le petit courant qui l'alimente traverse les LED, qui s'allument faiblement ou clignotent quand elles devraient être éteintes. Ajoutez le condensateur ou bypass recommandé par le fabricant aux bornes du luminaire, ou passez à des ampoules dimmables un peu plus puissantes. Si le neutre est disponible dans le boîtier, un modèle avec neutre règle le problème. Un grésillement en mode variateur indique plutôt une ampoule non compatible avec la variation.",
      },
    ],
    en: [
      {
        question: "Can I fit a smart light switch without a neutral wire?",
        answer: "Yes, many smart switches are made for UK homes without a neutral at the switch, which is common in older wiring, but they can struggle with low-wattage LED bulbs. No-neutral switches draw a tiny current through the bulb to power themselves, which can make LEDs flicker or glow when off; most come with a small bypass or state a minimum load. With the power off, look behind the switch plate: a neutral is usually a blue or older black wire. If there's only a switched pair, buy a no-neutral model.",
      },
      {
        question: "Will a smart switch fit in my existing back box?",
        answer: "Not always: smart switches are deeper than standard ones, and many need a 35 mm back box rather than the shallow 16 or 25 mm boxes found in many UK homes. Measure the depth with the faceplate off before buying, and check the switch's stated minimum. Fitting a deeper box in plasterboard is straightforward, but in a solid wall it means chasing out more brick, which is a bigger job. Metal back boxes and metal faceplates can also weaken wireless signals.",
      },
      {
        question: "Do I need an electrician to install a smart switch in the UK?",
        answer: "Not necessarily: in England, replacing a light switch is not notifiable work under Part P, so a competent person can do it, but the work must still meet the wiring regulations. Turn off the lighting circuit at the consumer unit and confirm it's dead with a proper voltage indicator, not just by flicking the light. Two-way switching, a missing earth or unclear wiring are good reasons to call a registered electrician. In a rented home, ask your landlord first.",
      },
      {
        question: "Smart switch or smart bulbs: which is better?",
        answer: "Choose smart switches when a room has several bulbs or spotlights on one circuit, and smart bulbs when you want colour or tunable white in a lamp or single pendant. A switch makes the whole circuit smart for the price of one device, keeps working like a normal switch for guests, and lets you use any compatible bulbs. Smart bulbs need the wall switch left on, but give dimming and colour without touching the wiring. Don't combine both on the same light.",
      },
      {
        question: "Why does my smart switch make LED lights flicker or hum?",
        answer: "Usually because the LEDs draw less than the switch's minimum load or don't suit its dimmer, which is especially common with no-neutral switches. Check the switch's minimum load against the bulbs' total wattage: five 5 W LEDs only make 25 W. Fitting the bypass supplied by the manufacturer, adding another bulb or choosing bulbs marked as dimmable usually solves it. If the switch dims, set the minimum brightness in the app and pick the right dimming mode, leading or trailing edge.",
      },
    ],
    de: [
      {
        question: "Smarter Lichtschalter ohne Neutralleiter – geht das?",
        answer: "Ja, es gibt Schalter und Unterputz-Aktoren ohne Neutralleiter, sie funktionieren aber mit sparsamen LED-Lampen schlechter als Modelle mit Neutralleiter. Ohne N versorgt sich das Gerät über einen kleinen Strom durch die Lampe, wodurch LEDs im ausgeschalteten Zustand glimmen oder flackern können; Abhilfe schafft oft ein Bypass an der Leuchte. In vielen Altbauten liegen in der Schalterdose nur Phase und Schaltdraht. Prüfen Sie bei abgeschaltetem Strom, ob ein blauer Leiter in der Dose vorhanden ist.",
      },
      {
        question: "Unterputz-Aktor hinter dem Schalter oder kompletter Smart-Schalter?",
        answer: "Ein Unterputz-Aktor ist die günstige, unsichtbare Lösung, bei der Ihr Schalterprogramm bleibt; ein kompletter Smart-Schalter passt besser, wenn Sie ohnehin neue Schalter wollen. Für den Aktor braucht die Dose genug Platz, ideal ist eine tiefe Schalterdose. Hersteller wie Gira, Jung oder Busch-Jaeger bieten smarte Einsätze für ihre Schalterserien an, sodass das Design einheitlich bleibt. Bei Wechsel- oder Kreuzschaltungen prüfen Sie, ob das Modell dafür vorgesehen ist, oder ersetzen Sie Nebenstellen durch Funktaster.",
      },
      {
        question: "Darf ich einen smarten Lichtschalter selbst einbauen?",
        answer: "Empfehlenswert ist das nicht: Arbeiten an der festen 230-Volt-Installation gehören grundsätzlich in die Hände einer Elektrofachkraft, auch wegen Haftung und Versicherungsschutz. Wer selbst Hand anlegt, muss den Stromkreis abschalten, die Spannungsfreiheit mit einem zweipoligen Spannungsprüfer feststellen und die Herstelleranleitung genau befolgen. Ohne Eingriff nachrüsten lassen sich batteriebetriebene Funktaster, die neben oder über dem alten Schalter kleben. In der Schweiz regelt die Niederspannungs-Installationsverordnung, was Laien in der eigenen Wohnung dürfen.",
      },
      {
        question: "Wie viel Strom verbraucht ein smarter Schalter im Standby?",
        answer: "Meist unter einem Watt, also wenige Kilowattstunden im Jahr: 0,5 Watt rund um die Uhr ergeben etwa 4,4 kWh. Bei zehn Schaltern und einem Beispielpreis von 35 Cent pro kWh sind das rund 15 Euro im Jahr. Zigbee-, Thread- oder Homematic-IP-Geräte liegen oft niedriger als WLAN-Modelle. Dem stehen Einsparungen gegenüber, wenn Zeitpläne und Bewegungsmelder vergessenes Licht ausschalten.",
      },
      {
        question: "Warum glimmen LEDs nach dem Einbau eines smarten Schalters?",
        answer: "Meist liegt es an einem Schalter ohne Neutralleiter: Sein Versorgungsstrom fließt durch die Lampe und reicht, um sparsame LEDs glimmen oder flackern zu lassen. Abhilfe schafft der vom Hersteller empfohlene Bypass an der Leuchte, eine Lampe mit etwas mehr Leistung oder ein Schalter mit Neutralleiter, sofern einer in der Dose liegt. Brummen beim Dimmen deutet auf eine nicht dimmbare Lampe oder das falsche Dimmverfahren hin: Stellen Sie in der App Phasenabschnitt oder Phasenanschnitt passend zur Lampe ein.",
      },
    ],
    es: [
      {
        question: "¿Hay interruptores inteligentes sin neutro?",
        answer: "Sí, existen interruptores y módulos sin neutro, pero funcionan peor con bombillas LED de poca potencia, que pueden parpadear o quedarse encendidas tenuemente. Sin neutro, el interruptor se alimenta con una pequeña corriente que pasa por la lámpara; el condensador o bypass que suele incluir el fabricante, colocado en la lámpara, lo soluciona. En muchas viviendas antiguas solo llegan a la caja del interruptor la fase y el retorno. Antes de comprar, comprueba con la luz cortada si hay un cable azul en la caja.",
      },
      {
        question: "¿Módulo detrás del mecanismo o interruptor inteligente completo?",
        answer: "El módulo es la opción más discreta: se esconde detrás de tu mecanismo actual; el interruptor completo sustituye el mecanismo y cambia el aspecto de la pared. Para el módulo, la caja debe tener fondo suficiente para alojarlo junto con los cables. Elige uno con entrada para pulsador o interruptor y comprueba que admite conmutadas si enciendes la luz desde dos puntos. Muchas series de marcas como Simon, Niessen o Schneider tienen versiones conectadas que mantienen el diseño del resto de la casa.",
      },
      {
        question: "¿Puedo cambiar yo mismo un interruptor por uno inteligente?",
        answer: "Puedes, si sabes lo que haces y cortas el circuito en el cuadro; si no, encárgalo a un instalador autorizado, sobre todo si hay que modificar la instalación. Antes de tocar los cables, comprueba con un detector que no hay tensión y haz una foto del cableado original. Identifica fase, neutro y retorno, y respeta el esquema del fabricante. En un piso de alquiler, pide permiso al propietario y guarda el mecanismo antiguo para reponerlo cuando te vayas.",
      },
      {
        question: "¿Cuánto consume un interruptor inteligente en reposo?",
        answer: "Normalmente menos de 1 W, es decir, unos pocos kWh al año: 0,5 W todo el día suman unos 4,4 kWh anuales. Con diez interruptores y un precio de 0,15 €/kWh, son unos 6,60 € al año. Los modelos Zigbee o Thread suelen consumir menos que los wifi. A cambio, temporizadores y escenas apagan las luces olvidadas, lo que puede compensar ese pequeño gasto.",
      },
      {
        question: "¿Por qué parpadean las luces LED con mi interruptor inteligente?",
        answer: "Casi siempre porque es un modelo sin neutro y la corriente que lo alimenta pasa por las LED, que se encienden levemente o parpadean cuando deberían estar apagadas. Instala el condensador o bypass del fabricante en la lámpara, cambia a bombillas regulables de algo más de potencia o, si hay neutro en la caja, usa un modelo con neutro. Si zumban al regular la intensidad, la bombilla no es regulable o el modo de regulación no es el adecuado: cámbialo en la app.",
      },
    ],
    it: [
      {
        question: "Interruttore smart senza neutro: si può installare?",
        answer: "Sì, esistono interruttori e relè senza neutro, ma con lampadine LED di bassa potenza possono provocare sfarfallii o una leggera luminosità a luce spenta. Senza neutro, il dispositivo si alimenta facendo passare una piccola corrente attraverso la lampada; il bypass fornito dal produttore, montato sul punto luce, di solito risolve. In molti impianti italiani nella scatola 503 arrivano solo fase e ritorno lampada. Prima di comprare, con la corrente staccata, controlla se c'è un filo blu.",
      },
      {
        question: "Relè dietro il frutto o serie smart completa?",
        answer: "Il relè dietro il frutto è la soluzione più economica e invisibile, perché mantieni i tuoi interruttori; la serie smart completa cambia frutti e placche. Le serie connesse dei grandi marchi italiani, come BTicino Living Now o Vimar View Wireless, hanno un design coordinato e gestiscono deviatori e invertitori con comandi senza fili. Per il relè serve spazio nella scatola 503: con molti fili può essere stretto, e conviene scegliere modelli compatti o una scatola più profonda.",
      },
      {
        question: "Serve un elettricista per montare un interruttore smart?",
        answer: "Per sicurezza è consigliabile, e se l'intervento modifica l'impianto serve per legge un installatore abilitato, che rilascia la dichiarazione di conformità prevista dal DM 37/2008. Se lo fai da solo, stacca l'interruttore generale o quello della linea luci, verifica l'assenza di tensione con un rilevatore e fotografa i collegamenti originali. In affitto chiedi prima al proprietario e conserva il vecchio frutto da rimontare quando lasci la casa.",
      },
      {
        question: "Quanto consuma un interruttore smart in standby?",
        answer: "In genere meno di 1 W, cioè pochi kWh all'anno: 0,5 W accesi giorno e notte fanno circa 4,4 kWh. Con dieci interruttori e 0,25 €/kWh si spendono circa 11 € all'anno. I modelli Zigbee o Thread consumano spesso meno di quelli wifi. In cambio, timer e scenari spengono le luci dimenticate accese, e questo può compensare il piccolo consumo.",
      },
      {
        question: "Perché le luci LED tremolano con l'interruttore smart?",
        answer: "Di solito perché l'interruttore è senza neutro e la corrente che lo alimenta passa attraverso le LED, che si accendono debolmente o tremolano quando dovrebbero essere spente. Monta il bypass consigliato dal produttore sul punto luce, usa lampadine dimmerabili un po' più potenti oppure, se nella scatola c'è il neutro, passa a un modello con neutro. Se le lampade ronzano durante la regolazione, non sono dimmerabili o il tipo di regolazione non è quello giusto: cambialo nell'app.",
      },
    ],
    nl: [
      {
        question: "Kan een slimme schakelaar zonder nuldraad?",
        answer: "Ja, er zijn slimme schakelaars en inbouwmodules zonder nuldraad, maar die werken minder goed met zuinige ledlampen. Zonder nuldraad voedt het apparaat zich met een klein stroompje door de lamp, waardoor ledlampen kunnen nagloeien of knipperen als ze uit staan; een bypass bij de lamp lost dat meestal op. In veel oudere woningen zitten in de schakeldoos alleen de fase en de schakeldraad. Kijk met de stroom eraf of er een blauwe draad in de doos zit.",
      },
      {
        question: "Inbouwmodule of complete slimme schakelaar bij een hotelschakeling?",
        answer: "Een inbouwmodule achter de bestaande wisselschakelaar is meestal de eenvoudigste keuze, omdat je bestaande schakelaars blijven werken en de lamp ook via de app bedienbaar wordt. Bij een hotelschakeling bedien je één lamp vanaf twee plekken, bijvoorbeeld onder en boven aan de trap; een complete slimme schakelaar moet daar uitdrukkelijk geschikt voor zijn, of je vervangt de tweede schakelaar door een draadloze. Let op de diepte van de inbouwdoos en laat het bij twijfel over aan een erkend installateur.",
      },
      {
        question: "Mag ik zelf een slimme schakelaar aansluiten?",
        answer: "Ja, in je eigen woning mag je dat zelf doen, maar het werk moet veilig zijn en je volgt het best de installatienorm NEN 1010. Schakel de groep uit in de meterkast, controleer met een spanningzoeker dat er echt geen spanning meer op staat en maak een foto van de oorspronkelijke bedrading. In een huurwoning vraag je eerst toestemming aan de verhuurder. Bij twijfel, of als je verzekeraar dat eist, schakel je een erkend installateur in.",
      },
      {
        question: "Hoeveel stroom gebruikt een slimme schakelaar in stand-by?",
        answer: "Meestal minder dan 1 watt, dus een paar kWh per jaar: 0,5 watt dag en nacht is ongeveer 4,4 kWh. Met tien schakelaars en een voorbeeldprijs van € 0,30 per kWh kost dat zo'n € 13 per jaar. Zigbee- of Thread-modellen verbruiken vaak minder dan wifi-modellen. Daar staat tegenover dat schema's en bewegingssensoren vergeten lampen uitzetten.",
      },
      {
        question: "Ledlampen knipperen of gloeien na met mijn slimme schakelaar: wat nu?",
        answer: "Meestal komt dat door een schakelaar zonder nuldraad: het stroompje waarop hij werkt, loopt door de ledlamp en laat die zacht oplichten of knipperen. Plaats de bypass die de fabrikant meelevert bij de lamp, kies dimbare ledlampen met iets meer vermogen of stap over op een model met nuldraad als die in de doos zit. Zoemt de lamp bij dimmen, dan is hij niet dimbaar of staat de verkeerde dimmodus ingesteld: kies in de app fase-afsnijding of fase-aansnijding passend bij de lamp.",
      },
    ],
    pl: [
      {
        question: "Czy inteligentny łącznik zadziała bez przewodu neutralnego?",
        answer: "Tak, są łączniki i moduły bez przewodu N, ale gorzej współpracują z oszczędnymi żarówkami LED, które mogą migać lub lekko się żarzyć po wyłączeniu. Urządzenie bez N zasila się niewielkim prądem płynącym przez lampę; zwykle pomaga kondensator (bypass) montowany przy oprawie. W wielu starszych mieszkaniach w puszce łącznika są tylko faza i przewód do lampy. Przed zakupem, po wyłączeniu zasilania, warto sprawdzić, czy w puszce jest niebieski przewód.",
      },
      {
        question: "Moduł do puszki czy kompletny łącznik smart?",
        answer: "Moduł do puszki jest tańszy i niewidoczny, bo zostają dotychczasowe łączniki; kompletny łącznik smart zmienia wygląd i zwykle ma panel dotykowy. Moduł, na przykład Shelly albo zgodny z Tuya, wymaga miejsca w puszce: najlepiej sprawdza się puszka głęboka, w płytkiej z wieloma przewodami bywa ciasno. Przy łączniku schodowym trzeba wybrać model, który go obsługuje, albo zastąpić drugi łącznik przyciskiem bezprzewodowym. Popularne serie łączników mają też wersje smart pasujące wyglądem do reszty domu.",
      },
      {
        question: "Czy inteligentny łącznik można zamontować samemu?",
        answer: "Technicznie to prosta wymiana, ale ze względów bezpieczeństwa warto zlecić ją elektrykowi z uprawnieniami SEP, zwłaszcza przy łączniku schodowym lub niejasnym okablowaniu. Przy samodzielnym montażu trzeba wyłączyć właściwy obwód w rozdzielnicy, sprawdzić brak napięcia próbnikiem i zrobić zdjęcie pierwotnych połączeń. W wynajmowanym mieszkaniu potrzebna jest zgoda właściciela, a stary łącznik warto zachować. Błędne podłączenie może też mieć znaczenie przy likwidacji szkody przez ubezpieczyciela.",
      },
      {
        question: "Ile prądu zużywa inteligentny łącznik w trybie czuwania?",
        answer: "Zwykle poniżej 1 W, czyli kilka kWh rocznie: 0,5 W przez całą dobę to około 4,4 kWh na rok. Przy dziesięciu łącznikach i cenie 1,10 zł za kWh daje to około 48 zł rocznie. Modele Zigbee lub Thread zużywają zwykle mniej niż wersje Wi-Fi. W zamian harmonogramy i czujniki ruchu wyłączają zapomniane światło, co może zrównoważyć ten pobór.",
      },
      {
        question: "Dlaczego żarówki LED migają po założeniu inteligentnego łącznika?",
        answer: "Najczęściej dlatego, że łącznik działa bez przewodu N, a prąd, który go zasila, płynie przez żarówki LED i powoduje ich żarzenie lub miganie. Pomaga kondensator (bypass) zalecany przez producenta, zamontowany przy oprawie, żarówki ściemnialne o nieco większej mocy albo, jeśli w puszce jest przewód N, model z przewodem neutralnym. Buczenie przy ściemnianiu oznacza zwykle żarówkę bez funkcji ściemniania lub zły tryb regulacji, który można zmienić w aplikacji.",
      },
    ],
  },
}
