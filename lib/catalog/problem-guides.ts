/**
 * Hand-written troubleshooting guides for the problem pages that earn the
 * most Search Console impressions (Jul–Oct 2026). Pages without an entry
 * keep the generic severity template from getProblemContent.
 */
import type { Lang } from '@/lib/i18n'

export interface ProblemGuide {
  /** Direct answer first: quotable by search engines and AI assistants. */
  intro: string
  causes: readonly string[]
  steps: readonly string[]
  replaceWhen: string
}

const PROBLEM_GUIDES: Record<string, Record<Lang, ProblemGuide>> = {
  "climatiseur-mobile-gaine-chaud": {
    "fr": {
      "intro": "La gaine d'un climatiseur mobile est chaude car elle transporte la chaleur extraite de la pièce, mais si elle fuit, est pliée ou non isolée, une partie de cette chaleur revient dans la pièce. La cause la plus fréquente est un raccord mal fixé ou un joint de fenêtre incomplet.",
      "causes": [
        "Raccord mal enclenché — de l'air chaud s'échappe à la jonction avec l'appareil ou l'adaptateur de fenêtre et se sent au toucher.",
        "Joint de fenêtre incomplet — de l'air extérieur chaud rentre par les interstices et on perçoit un courant d'air autour du panneau.",
        "Gaine pliée ou trop longue — le débit d'air chute, la gaine devient brûlante et rayonne de la chaleur dans la pièce.",
        "Modèle à gaine unique — l'appareil aspire l'air de la pièce, et de l'air chaud des pièces voisines compense par les portes et fentes."
      ],
      "steps": [
        "Éteignez l'appareil et débranchez-le, puis laissez la gaine refroidir avant de la toucher ou de modifier un raccord.",
        "Vérifiez que les deux extrémités de la gaine sont bien emboîtées ou vissées, côté appareil et côté adaptateur de fenêtre, sans jour visible.",
        "Raccourcissez et redressez la gaine au maximum, sans coude serré, pour que l'air chaud sorte vite et que le moteur ne surchauffe pas.",
        "Colmatez les interstices de la fenêtre avec le panneau fourni, de la mousse adhésive ou un joint isolant, afin d'empêcher l'air extérieur de revenir.",
        "Fermez portes et fenêtres de la pièce, nettoyez le filtre et envisagez un manchon isolant adapté pour limiter le rayonnement de la gaine."
      ],
      "replaceWhen": "Si la gaine, les joints et le filtre sont en bon état et que la pièce chauffe toujours, l'appareil est peut-être sous-dimensionné ou son circuit froid faiblit ; un vieux modèle à gaine unique ne vaut généralement pas une réparation face à un appareil récent plus efficace."
    },
    "en": {
      "intro": "A portable air conditioner's hose feels hot because it carries the heat removed from your room, and if it is leaking, kinked or uninsulated, part of that heat returns indoors. The most common cause is a loose connection or a gap at the window kit, so check the airflow path first.",
      "causes": [
        "Loose hose connection — hot air escapes at the unit or window adapter, and you can feel warm air around the joints.",
        "Gaps in the window seal — warm outdoor air is drawn back in, and you can feel a draught around the panel.",
        "Kinked or overly long hose — airflow is restricted, the hose gets very hot and radiates heat into the room.",
        "Single-hose design — the unit pulls room air out, so warm air from other rooms is drawn in through doors and cracks."
      ],
      "steps": [
        "Switch the unit off and unplug it, then let the hose cool down before touching it or changing any connection.",
        "Check both hose ends are fully clicked or screwed in, at the unit and at the window adapter, with no visible gaps.",
        "Shorten and straighten the hose as much as possible, avoiding sharp bends, so hot air leaves quickly and the motor does not overheat.",
        "Seal gaps around the window with the supplied panel plus foam strip or weatherstripping so outdoor air cannot flow back in.",
        "Close doors and windows in the room, clean the filter, and consider a purpose-made insulating sleeve to reduce heat radiating from the hose."
      ],
      "replaceWhen": "If the hose, seals and filter are all fine and the room still warms up, the unit may be undersized or its cooling circuit may be weakening; an older single-hose model is rarely worth repairing compared with a modern, more efficient replacement."
    },
    "de": {
      "intro": "Der Abluftschlauch einer mobilen Klimaanlage ist heiß, weil er die aus dem Raum gezogene Wärme abführt; ist er undicht, geknickt oder ungedämmt, strahlt ein Teil davon zurück in den Raum. Meist liegt es an einer lockeren Verbindung oder einer Lücke am Fensteradapter.",
      "causes": [
        "Lockere Schlauchverbindung — heiße Luft entweicht am Gerät oder am Fensteradapter, und die Anschlussstellen fühlen sich deutlich warm an.",
        "Undichte Fensterabdichtung — warme Außenluft strömt durch Spalten zurück, und rund um das Abdichtelement spürt man einen Luftzug.",
        "Geknickter oder zu langer Schlauch — der Luftstrom ist gedrosselt, der Schlauch wird sehr heiß und strahlt Wärme in den Raum ab.",
        "Einschlauch-Bauweise — das Gerät saugt Raumluft an, daher strömt warme Luft aus anderen Räumen durch Türen und Ritzen nach."
      ],
      "steps": [
        "Gerät ausschalten, Netzstecker ziehen und den Schlauch abkühlen lassen, bevor Sie ihn berühren oder Anschlüsse verändern.",
        "Prüfen Sie, ob beide Schlauchenden am Gerät und am Fensteradapter richtig eingerastet oder verschraubt sind und keine Spalten sichtbar bleiben.",
        "Kürzen und begradigen Sie den Schlauch so weit wie möglich, ohne scharfe Knicke, damit die heiße Luft zügig abströmt und der Motor nicht überhitzt.",
        "Dichten Sie Spalten am Fenster mit dem mitgelieferten Element sowie Schaumstoffband oder Fensterdichtung ab, damit keine Außenluft zurückströmt.",
        "Schließen Sie Türen und Fenster im Raum, reinigen Sie den Filter und nutzen Sie ggf. eine Isolierhülle, um die Wärmeabstrahlung des Schlauchs zu verringern."
      ],
      "replaceWhen": "Sind Schlauch, Dichtungen und Filter in Ordnung und der Raum erwärmt sich trotzdem, ist das Gerät eventuell zu schwach dimensioniert oder der Kältekreislauf lässt nach; ein älteres Einschlauchgerät lohnt die Reparatur gegenüber einem effizienteren Neugerät selten."
    },
    "es": {
      "intro": "La manguera de un aire acondicionado portátil está caliente porque expulsa el calor extraído de la habitación, pero si tiene fugas, dobleces o no está aislada, parte de ese calor vuelve al interior. La causa más habitual es una conexión floja o una holgura en el kit de ventana.",
      "causes": [
        "Conexión floja de la manguera — escapa aire caliente en la unión con el aparato o el adaptador de ventana y se nota al tacto.",
        "Sellado de ventana incompleto — entra aire cálido exterior por las rendijas y se percibe una corriente alrededor del panel.",
        "Manguera doblada o demasiado larga — el caudal de aire baja, la manguera se calienta mucho y radia calor a la habitación.",
        "Modelo de una sola manguera — el aparato extrae aire de la estancia y entra aire caliente de otras habitaciones por puertas y rendijas."
      ],
      "steps": [
        "Apague el aparato y desenchúfelo; deje enfriar la manguera antes de tocarla o de modificar cualquier conexión.",
        "Compruebe que ambos extremos de la manguera estén bien encajados o enroscados, en el aparato y en el adaptador de ventana, sin holguras visibles.",
        "Acorte y estire la manguera todo lo posible, sin curvas cerradas, para que el aire caliente salga rápido y el motor no se sobrecaliente.",
        "Selle las rendijas de la ventana con el panel incluido y burlete de espuma o aislante, de modo que el aire exterior no vuelva a entrar.",
        "Cierre puertas y ventanas de la habitación, limpie el filtro y valore una funda aislante específica para reducir el calor que irradia la manguera."
      ],
      "replaceWhen": "Si la manguera, los sellos y el filtro están bien y la habitación sigue calentándose, el equipo puede ser insuficiente para el espacio o su circuito de frío estar perdiendo capacidad; un modelo antiguo de una manguera rara vez compensa reparar frente a uno nuevo más eficiente."
    },
    "it": {
      "intro": "Il tubo di un condizionatore portatile è caldo perché trasporta all'esterno il calore sottratto alla stanza, ma se perde, è piegato o non è isolato una parte di quel calore torna in ambiente. La causa più comune è un raccordo allentato o uno spiraglio nel kit per la finestra.",
      "causes": [
        "Raccordo del tubo allentato — l'aria calda fuoriesce all'attacco con l'apparecchio o con l'adattatore finestra e si avverte al tatto.",
        "Sigillatura della finestra incompleta — l'aria calda esterna rientra dagli spiragli e intorno al pannello si sente una corrente d'aria.",
        "Tubo piegato o troppo lungo — il flusso d'aria si riduce, il tubo diventa molto caldo e irradia calore nella stanza.",
        "Modello a tubo singolo — l'apparecchio aspira aria dalla stanza e quella calda delle altre stanze rientra da porte e fessure."
      ],
      "steps": [
        "Spegnete l'apparecchio e scollegatelo dalla presa, poi lasciate raffreddare il tubo prima di toccarlo o di modificare i raccordi.",
        "Verificate che entrambe le estremità del tubo siano ben agganciate o avvitate, sia sull'apparecchio sia sull'adattatore finestra, senza fessure visibili.",
        "Accorciate e raddrizzate il tubo il più possibile, evitando curve strette, così l'aria calda esce subito e il motore non si surriscalda.",
        "Sigillate gli spiragli della finestra con il pannello in dotazione e con guarnizione in gommapiuma o paraspifferi, per impedire il rientro dell'aria esterna.",
        "Chiudete porte e finestre della stanza, pulite il filtro e valutate una fodera isolante apposita per ridurre il calore irradiato dal tubo."
      ],
      "replaceWhen": "Se tubo, guarnizioni e filtro sono a posto e la stanza si scalda comunque, l'apparecchio può essere sottodimensionato o avere un circuito frigorifero in calo; un vecchio modello a tubo singolo raramente merita una riparazione rispetto a uno nuovo più efficiente."
    },
    "nl": {
      "intro": "De afvoerslang van een mobiele airco voelt heet omdat hij de aan de kamer onttrokken warmte afvoert, maar als hij lekt, geknikt of ongeïsoleerd is, komt een deel van die warmte terug de kamer in. De meest voorkomende oorzaak is een losse aansluiting of een kier bij de raamkit.",
      "causes": [
        "Losse slangaansluiting — er ontsnapt hete lucht bij het toestel of de raamadapter en de verbindingen voelen duidelijk warm aan.",
        "Onvolledige raamafdichting — warme buitenlucht stroomt via kieren terug naar binnen en rond het paneel voel je tocht.",
        "Geknikte of te lange slang — de luchtstroom wordt afgeremd, de slang wordt erg heet en straalt warmte uit in de kamer.",
        "Model met één slang — het toestel zuigt kamerlucht aan, waardoor warme lucht uit andere ruimtes via deuren en kieren naar binnen stroomt."
      ],
      "steps": [
        "Schakel het toestel uit, trek de stekker eruit en laat de slang afkoelen voordat u hem aanraakt of aansluitingen aanpast.",
        "Controleer of beide slangeinden goed vastgeklikt of vastgedraaid zitten, bij het toestel en bij de raamadapter, zonder zichtbare openingen.",
        "Maak de slang zo kort en recht mogelijk, zonder scherpe bochten, zodat de hete lucht snel weg kan en de motor niet oververhit raakt.",
        "Dicht kieren rond het raam af met het meegeleverde paneel en schuimband of tochtstrip, zodat er geen buitenlucht terug naar binnen stroomt.",
        "Sluit deuren en ramen in de kamer, reinig het filter en overweeg een geschikte isolatiehoes om de warmte-uitstraling van de slang te beperken."
      ],
      "replaceWhen": "Als slang, afdichtingen en filter in orde zijn en de kamer toch opwarmt, is het toestel mogelijk te klein voor de ruimte of verzwakt het koelcircuit; een ouder model met één slang is zelden een reparatie waard tegenover een efficiënter nieuw toestel."
    }
  },
  "climatiseur-mobile-compresseur-cycle-court": {
    "fr": {
      "intro": "Un compresseur de climatiseur mobile qui s'arrête et redémarre toutes les deux minutes subit presque toujours une surchauffe ou une régulation trompée, souvent à cause d'un filtre encrassé ou d'une gaine d'évacuation gênée. Ces causes simples se corrigent avant d'envisager un défaut du circuit frigorifique.",
      "causes": [
        "Filtre ou grille encrassés — l'air circule mal, l'appareil surchauffe et la protection thermique coupe le compresseur à répétition.",
        "Gaine d'évacuation pliée ou obstruée — la chaleur ne sort pas, la pression monte et l'appareil se met en sécurité.",
        "Capteur de température faussé — l'air froid de l'appareil touche la sonde et la consigne semble atteinte trop vite.",
        "Réservoir de condensats plein ou flotteur bloqué — l'appareil s'arrête brièvement puis redémarre sans jamais stabiliser le refroidissement."
      ],
      "steps": [
        "Débranchez l'appareil et attendez au moins trente minutes pour que la protection thermique se réarme et que le circuit se stabilise.",
        "Retirez et nettoyez le filtre à l'eau tiède, séchez-le complètement, puis dépoussiérez délicatement les grilles d'entrée et de sortie d'air.",
        "Vérifiez que la gaine est droite, courte, bien raccordée et que la sortie extérieure n'est pas obstruée par un volet ou un store.",
        "Dégagez l'appareil des murs et rideaux, éloignez-le de toute source de chaleur, et videz le bac de condensats ou le tuyau de vidange.",
        "Abaissez la consigne de plusieurs degrés ou essayez un autre mode, puis observez si les cycles s'allongent ; sinon, contactez le service après-vente."
      ],
      "replaceWhen": "Si les cycles courts persistent malgré un entretien complet, un manque de fluide frigorigène ou un compresseur fatigué est probable ; ces réparations demandent un professionnel et dépassent souvent la valeur d'un appareil ancien, le remplacement devient alors plus raisonnable."
    },
    "en": {
      "intro": "A portable air conditioner whose compressor stops and restarts every two minutes is almost always overheating or being fooled by its temperature sensor, usually because of a clogged filter or a restricted exhaust hose. These simple causes are worth fixing before suspecting the refrigerant circuit.",
      "causes": [
        "Clogged filter or grille — airflow is poor, the unit overheats and its thermal protection keeps switching the compressor off.",
        "Kinked or blocked exhaust hose — heat cannot escape, pressure rises and the unit trips into a protective shutdown.",
        "Misled temperature sensor — cold air from the unit hits the probe, so the target temperature seems reached far too soon.",
        "Full condensate tank or stuck float switch — the unit pauses briefly then restarts without ever settling into steady cooling."
      ],
      "steps": [
        "Unplug the unit and wait at least thirty minutes so the thermal protection resets and the refrigerant pressures can settle.",
        "Remove the filter, wash it in lukewarm water, dry it completely, then gently dust the air intake and outlet grilles.",
        "Check the exhaust hose is short, straight and firmly connected, and that its outdoor opening is not blocked by a shutter or blind.",
        "Move the unit away from walls and curtains, keep it clear of heat sources, and empty the condensate tank or drain hose.",
        "Lower the set temperature by several degrees or try another mode and see whether the run cycles lengthen; if not, contact the manufacturer's service."
      ],
      "replaceWhen": "If short cycling continues after full maintenance, low refrigerant or a worn compressor is likely; both need a qualified technician and often cost more than an older unit is worth, so replacement is usually the sensible choice."
    },
    "de": {
      "intro": "Schaltet der Kompressor einer mobilen Klimaanlage alle zwei Minuten ab und wieder ein, überhitzt das Gerät meist oder der Temperaturfühler wird getäuscht, oft wegen eines verschmutzten Filters oder eines behinderten Abluftschlauchs. Diese einfachen Ursachen sollten Sie zuerst beheben.",
      "causes": [
        "Verschmutzter Filter oder verstopftes Gitter — der Luftstrom ist schwach, das Gerät überhitzt und der Überhitzungsschutz stoppt den Kompressor immer wieder.",
        "Geknickter oder blockierter Abluftschlauch — die Wärme kann nicht entweichen, der Druck steigt und das Gerät schaltet zum Schutz ab.",
        "Getäuschter Temperaturfühler — kalte Luft des Geräts trifft den Fühler, sodass die Zieltemperatur viel zu früh erreicht scheint.",
        "Voller Kondensatbehälter oder klemmender Schwimmerschalter — das Gerät pausiert kurz und startet neu, ohne je stabil zu kühlen."
      ],
      "steps": [
        "Netzstecker ziehen und mindestens dreißig Minuten warten, damit der Überhitzungsschutz zurückgesetzt wird und sich die Drücke im Kreislauf beruhigen.",
        "Filter herausnehmen, mit lauwarmem Wasser auswaschen, vollständig trocknen lassen und anschließend die Ansaug- und Auslassgitter vorsichtig entstauben.",
        "Prüfen Sie, ob der Abluftschlauch kurz, gerade und fest angeschlossen ist und die Öffnung nach draußen nicht durch Rollladen oder Jalousie verdeckt wird.",
        "Stellen Sie das Gerät mit Abstand zu Wänden und Vorhängen auf, fern von Wärmequellen, und leeren Sie den Kondensatbehälter oder Ablaufschlauch.",
        "Senken Sie die Solltemperatur um mehrere Grad oder wählen Sie einen anderen Modus und beobachten Sie, ob die Laufzeiten länger werden; sonst Kundendienst kontaktieren."
      ],
      "replaceWhen": "Bleibt das Takten nach gründlicher Wartung bestehen, sind Kältemittelmangel oder ein verschlissener Kompressor wahrscheinlich; beides gehört in Fachhände und kostet bei älteren Geräten oft mehr als der Restwert, sodass ein Ersatz sinnvoller ist."
    },
    "es": {
      "intro": "Si el compresor de un aire acondicionado portátil se corta y reinicia cada dos minutos, casi siempre hay un sobrecalentamiento o un sensor de temperatura engañado, normalmente por un filtro sucio o una manguera de evacuación obstruida. Conviene corregir estas causas sencillas antes de sospechar del circuito de refrigerante.",
      "causes": [
        "Filtro o rejilla sucios — el aire circula mal, el equipo se sobrecalienta y la protección térmica corta el compresor una y otra vez.",
        "Manguera de evacuación doblada u obstruida — el calor no sale, sube la presión y el aparato se detiene por seguridad.",
        "Sensor de temperatura engañado — el aire frío del propio equipo toca la sonda y parece que se alcanza la consigna demasiado pronto.",
        "Depósito de condensados lleno o flotador atascado — el aparato se detiene un momento y reinicia sin llegar a enfriar de forma estable."
      ],
      "steps": [
        "Desenchufe el aparato y espere al menos treinta minutos para que la protección térmica se rearme y las presiones del circuito se estabilicen.",
        "Retire el filtro, lávelo con agua tibia, séquelo por completo y quite con suavidad el polvo de las rejillas de entrada y salida de aire.",
        "Compruebe que la manguera sea corta, recta y esté bien conectada, y que la salida al exterior no quede tapada por una persiana o toldo.",
        "Separe el equipo de paredes y cortinas, aléjelo de fuentes de calor y vacíe el depósito de condensados o el tubo de drenaje.",
        "Baje la temperatura de consigna varios grados o pruebe otro modo y observe si los ciclos se alargan; si no, contacte con el servicio técnico."
      ],
      "replaceWhen": "Si los ciclos cortos continúan tras un mantenimiento completo, es probable que falte refrigerante o que el compresor esté desgastado; ambas reparaciones exigen un técnico y suelen costar más que el valor de un equipo antiguo, por lo que conviene sustituirlo."
    },
    "it": {
      "intro": "Se il compressore di un condizionatore portatile si spegne e riparte ogni due minuti, quasi sempre c'è un surriscaldamento o un sensore di temperatura ingannato, di solito per un filtro intasato o un tubo di scarico ostruito. Conviene correggere queste cause semplici prima di sospettare il circuito del refrigerante.",
      "causes": [
        "Filtro o griglia intasati — l'aria circola male, l'apparecchio si surriscalda e la protezione termica interrompe ripetutamente il compressore.",
        "Tubo di scarico piegato o ostruito — il calore non esce, la pressione sale e l'unità si ferma per sicurezza.",
        "Sensore di temperatura ingannato — l'aria fredda dell'apparecchio investe la sonda e la temperatura impostata sembra raggiunta troppo presto.",
        "Serbatoio condensa pieno o galleggiante bloccato — l'unità si ferma brevemente e riparte senza mai raffreddare in modo stabile."
      ],
      "steps": [
        "Scollegate l'apparecchio e attendete almeno trenta minuti, così la protezione termica si riarma e le pressioni del circuito si stabilizzano.",
        "Estraete il filtro, lavatelo con acqua tiepida, asciugatelo completamente e spolverate con delicatezza le griglie di ingresso e uscita dell'aria.",
        "Controllate che il tubo sia corto, dritto e ben collegato, e che l'uscita verso l'esterno non sia coperta da persiana o tapparella.",
        "Allontanate l'unità da pareti e tende, lontano da fonti di calore, e svuotate il serbatoio della condensa o il tubo di scarico.",
        "Abbassate la temperatura impostata di alcuni gradi o provate un'altra modalità e osservate se i cicli si allungano; altrimenti contattate l'assistenza."
      ],
      "replaceWhen": "Se i cicli brevi continuano dopo una manutenzione completa, è probabile una carenza di refrigerante o un compressore usurato; servono entrambi un tecnico qualificato e spesso costano più del valore di un apparecchio vecchio, quindi conviene sostituirlo."
    },
    "nl": {
      "intro": "Als de compressor van een mobiele airco elke twee minuten uit- en weer aanslaat, oververhit het toestel bijna altijd of wordt de temperatuursensor misleid, meestal door een vuil filter of een belemmerde afvoerslang. Los deze eenvoudige oorzaken eerst op voordat u aan het koelcircuit denkt.",
      "causes": [
        "Vuil filter of verstopt rooster — de luchtstroom is zwak, het toestel oververhit en de thermische beveiliging schakelt de compressor steeds uit.",
        "Geknikte of geblokkeerde afvoerslang — de warmte kan niet weg, de druk loopt op en het toestel schakelt uit ter bescherming.",
        "Misleide temperatuursensor — koude lucht van het toestel raakt de sensor, waardoor de ingestelde temperatuur veel te snel bereikt lijkt.",
        "Vol condensreservoir of vastzittende vlotter — het toestel pauzeert kort en start opnieuw zonder ooit stabiel te koelen."
      ],
      "steps": [
        "Trek de stekker eruit en wacht minstens dertig minuten zodat de thermische beveiliging reset en de drukken in het circuit tot rust komen.",
        "Haal het filter eruit, was het met lauw water, laat het volledig drogen en stof de aanzuig- en uitblaasroosters voorzichtig af.",
        "Controleer of de afvoerslang kort, recht en stevig aangesloten is en of de opening naar buiten niet geblokkeerd wordt door een rolluik of zonwering.",
        "Zet het toestel op afstand van muren en gordijnen, weg van warmtebronnen, en leeg het condensreservoir of de afvoerslang.",
        "Zet de gewenste temperatuur enkele graden lager of probeer een andere stand en kijk of de draaicycli langer worden; zo niet, neem contact op met de klantenservice."
      ],
      "replaceWhen": "Blijft het kort cyclen na grondig onderhoud bestaan, dan is een tekort aan koudemiddel of een versleten compressor waarschijnlijk; beide vragen een vakman en kosten bij een ouder toestel vaak meer dan de restwaarde, dus vervanging is verstandiger."
    }
  },
  "balai-aspirateur-led-clignote": {
    "fr": {
      "intro": "Un voyant LED rouge clignotant sur un aspirateur balai signale généralement une protection activée : surchauffe, obstruction de la brosse ou du filtre, ou problème de batterie. Consultez le manuel pour le code exact, car la signification varie selon les modèles, et commencez par vérifier les obstructions.",
      "causes": [
        "Filtre ou bac encrassés — le moteur force, chauffe et la protection thermique coupe l'appareil tout en faisant clignoter le voyant.",
        "Brosse bloquée par des cheveux ou un objet — le moteur de brosse force et déclenche une sécurité sur de nombreux modèles.",
        "Batterie mal enclenchée ou contacts sales — l'alimentation est instable et l'électronique refuse le démarrage.",
        "Batterie très déchargée ou usée — elle ne fournit plus assez de courant et l'appareil indique un défaut de charge."
      ],
      "steps": [
        "Retirez la batterie si elle est amovible, ou laissez l'appareil refroidir au moins trente minutes avant tout nouvel essai.",
        "Videz le bac, nettoyez ou remplacez le filtre selon le manuel, puis laissez-le sécher complètement avant de le remettre en place.",
        "Démontez la brosse selon la notice, retirez cheveux et fils enroulés, et vérifiez qu'aucun objet ne bloque le tube ou le suceur.",
        "Nettoyez les contacts de batterie avec un chiffon sec, remettez la batterie à fond jusqu'au clic, puis rechargez avec le chargeur d'origine.",
        "Testez l'appareil sans accessoire motorisé ; si le voyant clignote toujours, relevez le code dans le manuel et contactez le fabricant."
      ],
      "replaceWhen": "Si le clignotement persiste après nettoyage et recharge complète, la batterie ou la carte électronique est probablement en cause. Quand une batterie de remplacement coûte presque autant qu'un appareil neuf ou n'est plus fournie, remplacer l'aspirateur est plus raisonnable."
    },
    "en": {
      "intro": "A flashing red LED on a stick vacuum usually means a protection has kicked in: overheating, a blocked brush or filter, or a battery problem. The exact meaning varies between models, so check the manual for the code, and start by looking for blockages.",
      "causes": [
        "Clogged filter or dust bin — the motor strains and overheats, and the thermal protection stops the unit while the LED flashes.",
        "Brush bar jammed by hair or debris — the brush motor overloads and triggers a safety cut-out on many models.",
        "Poorly seated battery or dirty contacts — the power supply is unstable and the electronics refuse to start.",
        "Deeply discharged or worn battery — it can no longer deliver enough current, and the unit signals a power fault."
      ],
      "steps": [
        "Remove the battery if it is detachable, or let the unit cool for at least thirty minutes before trying again.",
        "Empty the bin, then clean or replace the filter as the manual describes, and let it dry completely before refitting.",
        "Take the brush bar off following the instructions, cut away wrapped hair and thread, and check nothing is jammed in the tube or nozzle.",
        "Wipe the battery contacts with a dry cloth, push the battery in until it clicks, then recharge with the original charger.",
        "Test the vacuum without any motorised attachment; if the LED still flashes red, note the code in the manual and contact the manufacturer."
      ],
      "replaceWhen": "If the red flashing continues after cleaning and a full recharge, the battery or control board is the likely culprit. When a replacement battery costs nearly as much as a new vacuum, or is no longer available, replacing the whole unit makes more sense."
    },
    "de": {
      "intro": "Eine rot blinkende LED am Akku-Staubsauger zeigt meist an, dass ein Schutz ausgelöst hat: Überhitzung, blockierte Bürste oder verstopfter Filter, oder ein Akkuproblem. Die genaue Bedeutung hängt vom Modell ab, daher Handbuch prüfen und zuerst nach Blockaden suchen.",
      "causes": [
        "Verstopfter Filter oder voller Staubbehälter — der Motor wird überlastet und heiß, der Überhitzungsschutz stoppt das Gerät, während die LED blinkt.",
        "Durch Haare oder Fremdkörper blockierte Bürstenwalze — der Bürstenmotor wird überlastet und löst bei vielen Modellen eine Sicherheitsabschaltung aus.",
        "Schlecht sitzender Akku oder verschmutzte Kontakte — die Stromversorgung ist instabil und die Elektronik verweigert den Start.",
        "Tiefentladener oder verschlissener Akku — er liefert nicht mehr genug Strom, und das Gerät meldet einen Stromfehler."
      ],
      "steps": [
        "Nehmen Sie den Akku heraus, falls er abnehmbar ist, oder lassen Sie das Gerät mindestens dreißig Minuten abkühlen, bevor Sie es erneut versuchen.",
        "Staubbehälter leeren, Filter laut Anleitung reinigen oder ersetzen und vor dem Wiedereinsetzen vollständig trocknen lassen.",
        "Bürstenwalze gemäß Anleitung abnehmen, aufgewickelte Haare und Fäden entfernen und prüfen, ob nichts im Rohr oder in der Düse klemmt.",
        "Akkukontakte mit einem trockenen Tuch abwischen, den Akku bis zum Einrasten einsetzen und mit dem Original-Ladegerät vollständig laden.",
        "Testen Sie den Sauger ohne motorisierten Aufsatz; blinkt die LED weiter rot, notieren Sie den Code aus dem Handbuch und kontaktieren Sie den Hersteller."
      ],
      "replaceWhen": "Blinkt die LED nach Reinigung und vollständigem Laden weiter, sind Akku oder Steuerplatine wahrscheinlich defekt. Kostet ein Ersatzakku fast so viel wie ein neuer Staubsauger oder ist nicht mehr lieferbar, ist ein Neukauf sinnvoller."
    },
    "es": {
      "intro": "Un LED rojo parpadeante en un aspirador escoba suele indicar que se ha activado una protección: sobrecalentamiento, cepillo o filtro obstruido, o problema de batería. El significado exacto varía según el modelo, así que consulte el manual y empiece buscando obstrucciones.",
      "causes": [
        "Filtro o depósito de polvo obstruidos — el motor se esfuerza, se calienta y la protección térmica detiene el aparato mientras parpadea el LED.",
        "Cepillo atascado por pelos u objetos — el motor del cepillo se sobrecarga y en muchos modelos activa un corte de seguridad.",
        "Batería mal encajada o contactos sucios — la alimentación es inestable y la electrónica impide el arranque.",
        "Batería muy descargada o desgastada — ya no entrega suficiente corriente y el aparato avisa de un fallo de alimentación."
      ],
      "steps": [
        "Extraiga la batería si es desmontable, o deje enfriar el aparato al menos treinta minutos antes de volver a intentarlo.",
        "Vacíe el depósito, limpie o sustituya el filtro según indica el manual y déjelo secar por completo antes de colocarlo de nuevo.",
        "Retire el cepillo siguiendo las instrucciones, corte los pelos e hilos enrollados y compruebe que nada atasque el tubo ni la boquilla.",
        "Limpie los contactos de la batería con un paño seco, encájela hasta oír el clic y recárguela con el cargador original.",
        "Pruebe el aspirador sin accesorios motorizados; si el LED sigue parpadeando en rojo, anote el código del manual y contacte con el fabricante."
      ],
      "replaceWhen": "Si el parpadeo rojo continúa tras limpiar y cargar por completo, lo probable es que falle la batería o la placa electrónica. Cuando una batería de repuesto cuesta casi lo mismo que un aspirador nuevo, o ya no se vende, conviene sustituir el aparato."
    },
    "it": {
      "intro": "Un LED rosso lampeggiante su una scopa elettrica indica di solito l'intervento di una protezione: surriscaldamento, spazzola o filtro ostruiti, oppure un problema alla batteria. Il significato esatto varia da modello a modello, quindi consultate il manuale e cominciate cercando eventuali ostruzioni.",
      "causes": [
        "Filtro o contenitore della polvere intasati — il motore fa fatica, si scalda e la protezione termica ferma l'apparecchio mentre il LED lampeggia.",
        "Spazzola bloccata da capelli o detriti — il motore della spazzola si sovraccarica e in molti modelli attiva un blocco di sicurezza.",
        "Batteria inserita male o contatti sporchi — l'alimentazione è instabile e l'elettronica impedisce l'avvio.",
        "Batteria molto scarica o usurata — non eroga più corrente a sufficienza e l'apparecchio segnala un errore di alimentazione."
      ],
      "steps": [
        "Rimuovete la batteria se è estraibile, oppure lasciate raffreddare l'apparecchio per almeno trenta minuti prima di riprovare.",
        "Svuotate il contenitore, pulite o sostituite il filtro come indicato dal manuale e lasciatelo asciugare completamente prima di rimontarlo.",
        "Smontate la spazzola seguendo le istruzioni, tagliate capelli e fili avvolti e controllate che nulla blocchi il tubo o la bocchetta.",
        "Pulite i contatti della batteria con un panno asciutto, inseritela fino allo scatto e ricaricatela con il caricatore originale.",
        "Provate la scopa senza accessori motorizzati; se il LED continua a lampeggiare in rosso, annotate il codice del manuale e contattate il produttore."
      ],
      "replaceWhen": "Se il lampeggio rosso continua dopo la pulizia e una ricarica completa, probabilmente è guasta la batteria o la scheda elettronica. Quando una batteria di ricambio costa quasi quanto una scopa nuova, o non è più reperibile, conviene sostituire l'intero apparecchio."
    },
    "nl": {
      "intro": "Een rood knipperende led op een steelstofzuiger betekent meestal dat er een beveiliging is aangesproken: oververhitting, een geblokkeerde borstel of een verstopt filter, of een accuprobleem. De exacte betekenis verschilt per model, dus raadpleeg de handleiding en zoek eerst naar blokkades.",
      "causes": [
        "Verstopt filter of volle stofbak — de motor wordt overbelast en heet, en de thermische beveiliging zet het apparaat stil terwijl de led knippert.",
        "Borstelwals geblokkeerd door haren of vuil — de borstelmotor raakt overbelast en activeert bij veel modellen een veiligheidsuitschakeling.",
        "Slecht geplaatste accu of vuile contacten — de stroomvoorziening is instabiel en de elektronica weigert te starten.",
        "Diep ontladen of versleten accu — hij levert niet genoeg stroom meer en het apparaat meldt een stroomstoring."
      ],
      "steps": [
        "Haal de accu eruit als die losneembaar is, of laat het apparaat minstens dertig minuten afkoelen voordat u het opnieuw probeert.",
        "Leeg de stofbak, reinig of vervang het filter zoals de handleiding aangeeft en laat het volledig drogen voordat u het terugplaatst.",
        "Verwijder de borstelwals volgens de instructies, knip opgewikkelde haren en draden weg en controleer of er niets vastzit in de buis of het mondstuk.",
        "Veeg de accucontacten schoon met een droge doek, druk de accu aan tot hij klikt en laad hem op met de originele oplader.",
        "Test de stofzuiger zonder gemotoriseerd opzetstuk; knippert de led nog rood, noteer dan de code uit de handleiding en neem contact op met de fabrikant."
      ],
      "replaceWhen": "Blijft de led rood knipperen na reiniging en volledig opladen, dan is waarschijnlijk de accu of het besturingsbord defect. Kost een vervangende accu bijna evenveel als een nieuwe stofzuiger of is hij niet meer leverbaar, dan is vervanging van het apparaat verstandiger."
    }
  },
  "tiroir-ne-ferme-pas": {
    "fr": {
      "intro": "Le tiroir d'un airfryer qui ne ferme plus correctement est le plus souvent gêné par un obstacle : aliments en excès, papier cuisson qui remonte ou graisse durcie sur les glissières. Une déformation du tiroir ou du panier est plus rare mais possible après des chocs ou une forte chaleur.",
      "causes": [
        "Panier trop rempli ou aliment qui dépasse — le contenu bute contre la résistance ou le boîtier et empêche la fermeture complète.",
        "Papier cuisson ou feuille d'aluminium relevés — ils se coincent à l'arrière ou sous le panier et bloquent le tiroir.",
        "Graisse carbonisée sur les glissières — des dépôts durcis freinent le coulissement et empêchent le tiroir d'aller jusqu'au fond.",
        "Panier mal enclenché ou poignée déformée — le panier n'est pas verrouillé dans le tiroir et dépasse légèrement du bord."
      ],
      "steps": [
        "Débranchez l'appareil et laissez-le refroidir complètement avant de toucher le tiroir, le panier ou l'intérieur du boîtier.",
        "Sortez le tiroir et le panier, retirez papier, feuille ou aliments coincés, et vérifiez que rien ne reste au fond du logement.",
        "Nettoyez les glissières, les rebords et l'ouverture avec une éponge non abrasive et de l'eau chaude savonneuse, puis séchez soigneusement.",
        "Replacez le panier dans le tiroir jusqu'au clic, répartissez les aliments à plat sous le repère de remplissage et refermez doucement.",
        "Ne contournez jamais le contacteur de sécurité : l'appareil ne chauffe que si le tiroir est bien fermé, il doit rester fonctionnel."
      ],
      "replaceWhen": "Si le tiroir est tordu, si la poignée est cassée ou si le boîtier est déformé au point de ne plus fermer, la réparation est rarement fiable. Un revêtement qui s'écaille rend aussi le remplacement préférable pour l'hygiène et la sécurité."
    },
    "en": {
      "intro": "An air fryer drawer that no longer closes properly is most often blocked by something in the way: too much food, lifted baking paper or hardened grease on the runners. A warped drawer or basket is rarer but can follow knocks or heavy heat exposure.",
      "causes": [
        "Overfilled basket or food sticking up — the contents hit the heating element or housing and stop the drawer sliding fully home.",
        "Lifted baking paper or foil — it gets caught at the back or under the basket and jams the drawer.",
        "Carbonised grease on the runners — hardened deposits add friction and stop the drawer reaching the end of its travel.",
        "Basket not clicked in, or a bent handle — the basket is not locked into the drawer and sits slightly proud of the edge."
      ],
      "steps": [
        "Unplug the appliance and let it cool completely before touching the drawer, basket or the inside of the housing.",
        "Pull out the drawer and basket, remove any trapped paper, foil or food, and check nothing is left at the back of the cavity.",
        "Clean the runners, rims and opening with a non-abrasive sponge and hot soapy water, then dry everything thoroughly.",
        "Refit the basket until it clicks, spread food flat below the fill line, and push the drawer closed gently.",
        "Never bypass the safety switch: the unit heats only when the drawer is fully closed, and that protection must stay working."
      ],
      "replaceWhen": "If the drawer is bent, the handle is broken or the housing is distorted so the drawer will not shut, repair is rarely reliable. A flaking non-stick coating is another reason to replace the appliance for hygiene and safety."
    },
    "de": {
      "intro": "Schließt die Schublade einer Heißluftfritteuse nicht mehr richtig, steht meist etwas im Weg: zu viel Gargut, hochgewehtes Backpapier oder verhärtetes Fett an den Führungen. Eine verzogene Schublade oder ein verbogener Korb ist seltener, kommt aber nach Stößen oder starker Hitze vor.",
      "causes": [
        "Überfüllter Korb oder herausragendes Gargut — der Inhalt stößt an Heizelement oder Gehäuse und verhindert das vollständige Einschieben.",
        "Hochgewehtes Backpapier oder Alufolie — es verhakt sich hinten oder unter dem Korb und klemmt die Schublade.",
        "Verkohltes Fett an den Führungen — verhärtete Ablagerungen erhöhen die Reibung, sodass die Schublade nicht ganz einrastet.",
        "Nicht eingerasteter Korb oder verbogener Griff — der Korb ist nicht in der Schublade verriegelt und ragt leicht über den Rand."
      ],
      "steps": [
        "Gerät ausstecken und vollständig abkühlen lassen, bevor Sie Schublade, Korb oder das Gehäuseinnere berühren.",
        "Schublade und Korb herausnehmen, eingeklemmtes Papier, Folie oder Essensreste entfernen und prüfen, dass nichts hinten im Schacht liegt.",
        "Führungen, Ränder und Öffnung mit einem nicht scheuernden Schwamm und heißem Spülwasser reinigen und anschließend gründlich trocknen.",
        "Korb bis zum Klick einsetzen, Gargut flach unter der Füllmarkierung verteilen und die Schublade behutsam schließen.",
        "Umgehen Sie niemals den Sicherheitsschalter: Das Gerät heizt nur bei geschlossener Schublade, und dieser Schutz muss funktionsfähig bleiben."
      ],
      "replaceWhen": "Ist die Schublade verbogen, der Griff gebrochen oder das Gehäuse so verzogen, dass nichts mehr schließt, ist eine Reparatur selten zuverlässig. Auch eine abblätternde Antihaftbeschichtung spricht aus Hygiene- und Sicherheitsgründen für einen Neukauf."
    },
    "es": {
      "intro": "El cajón de una freidora de aire que ya no cierra bien suele estar bloqueado por algo en el camino: exceso de comida, papel de horno levantado o grasa endurecida en las guías. Una deformación del cajón o la cesta es menos frecuente, pero puede darse tras golpes o calor intenso.",
      "causes": [
        "Cesta demasiado llena o alimentos que sobresalen — el contenido choca con la resistencia o la carcasa e impide cerrar del todo.",
        "Papel de horno o aluminio levantados — se enganchan al fondo o bajo la cesta y atascan el cajón.",
        "Grasa carbonizada en las guías — los depósitos endurecidos aumentan la fricción y el cajón no llega al final del recorrido.",
        "Cesta mal encajada o asa deformada — la cesta no queda bloqueada en el cajón y sobresale ligeramente del borde."
      ],
      "steps": [
        "Desenchufe el aparato y deje que se enfríe por completo antes de tocar el cajón, la cesta o el interior de la carcasa.",
        "Saque el cajón y la cesta, retire papel, aluminio o comida atrapados y compruebe que no quede nada al fondo del alojamiento.",
        "Limpie guías, bordes y abertura con una esponja no abrasiva y agua caliente con jabón, y seque todo a fondo.",
        "Coloque la cesta hasta oír el clic, reparta la comida en una capa por debajo de la marca de llenado y cierre el cajón con suavidad.",
        "No anule nunca el interruptor de seguridad: el aparato solo calienta con el cajón bien cerrado y esa protección debe seguir funcionando."
      ],
      "replaceWhen": "Si el cajón está torcido, el asa rota o la carcasa deformada y no cierra, la reparación rara vez es fiable. Un antiadherente que se descascarilla también aconseja sustituir el aparato por higiene y seguridad."
    },
    "it": {
      "intro": "Il cassetto di una friggitrice ad aria che non si chiude più bene è quasi sempre ostacolato da qualcosa: troppo cibo, carta forno sollevata o grasso indurito sulle guide. Una deformazione del cassetto o del cestello è più rara, ma può dipendere da urti o forte calore.",
      "causes": [
        "Cestello troppo pieno o cibo che sporge — il contenuto urta resistenza o scocca e impedisce di chiudere completamente il cassetto.",
        "Carta forno o alluminio sollevati — si incastrano sul fondo o sotto il cestello e bloccano il cassetto.",
        "Grasso carbonizzato sulle guide — i residui induriti aumentano l'attrito e il cassetto non arriva a fine corsa.",
        "Cestello non agganciato o maniglia deformata — il cestello non è bloccato nel cassetto e sporge leggermente dal bordo."
      ],
      "steps": [
        "Scollegate l'apparecchio e lasciatelo raffreddare del tutto prima di toccare cassetto, cestello o l'interno della scocca.",
        "Estraete cassetto e cestello, togliete carta, alluminio o cibo incastrati e controllate che non resti nulla in fondo all'alloggiamento.",
        "Pulite guide, bordi e apertura con una spugna non abrasiva e acqua calda saponata, poi asciugate accuratamente ogni parte.",
        "Rimontate il cestello fino allo scatto, distribuite il cibo in piano sotto il livello massimo e chiudete il cassetto con delicatezza.",
        "Non escludete mai l'interruttore di sicurezza: l'apparecchio scalda solo a cassetto ben chiuso e questa protezione deve restare funzionante."
      ],
      "replaceWhen": "Se il cassetto è storto, la maniglia rotta o la scocca deformata al punto da non chiudere, la riparazione è raramente affidabile. Anche un rivestimento antiaderente che si scrosta consiglia la sostituzione per igiene e sicurezza."
    },
    "nl": {
      "intro": "Een airfryerlade die niet goed meer sluit, wordt meestal gehinderd door iets in de weg: te veel eten, opgekruld bakpapier of verhard vet op de geleiders. Een kromgetrokken lade of mand komt minder vaak voor, maar kan ontstaan na stoten of sterke hitte.",
      "causes": [
        "Te volle mand of uitstekend eten — de inhoud botst tegen het verwarmingselement of de behuizing en de lade schuift niet helemaal dicht.",
        "Opgekruld bakpapier of aluminiumfolie — het blijft achterin of onder de mand haken en klemt de lade.",
        "Aangekoekt vet op de geleiders — verharde afzettingen geven extra wrijving, waardoor de lade niet tot het einde schuift.",
        "Mand niet vastgeklikt of verbogen handvat — de mand zit niet vast in de lade en steekt iets boven de rand uit."
      ],
      "steps": [
        "Trek de stekker eruit en laat het apparaat volledig afkoelen voordat u de lade, de mand of de binnenkant van de behuizing aanraakt.",
        "Haal lade en mand eruit, verwijder vastgeklemd papier, folie of eten en controleer of er niets achterin de opening ligt.",
        "Reinig geleiders, randen en opening met een niet-schurende spons en heet zeepwater en droog alles daarna grondig af.",
        "Plaats de mand tot hij klikt, verdeel het eten vlak onder de vullijn en schuif de lade voorzichtig dicht.",
        "Omzeil nooit de veiligheidsschakelaar: het apparaat verwarmt alleen met een goed gesloten lade en die beveiliging moet blijven werken."
      ],
      "replaceWhen": "Is de lade krom, het handvat gebroken of de behuizing zo vervormd dat er niets meer sluit, dan is reparatie zelden betrouwbaar. Afbladderende antiaanbaklaag is ook een reden om te vervangen, voor hygiëne en veiligheid."
    }
  },
  "station-meteo-sonde-ext-hs": {
    "fr": {
      "intro": "Une sonde extérieure de station météo qui n'envoie plus de données a le plus souvent des piles faibles, surtout par temps froid, ou a perdu la liaison radio avec la console. Un remplacement des piles et une nouvelle synchronisation règlent la majorité des cas.",
      "causes": [
        "Piles de la sonde faibles — le froid réduit encore leur capacité et l'émetteur ne transmet plus ou plus assez fort.",
        "Liaison radio perdue après coupure — la sonde et la console ne sont plus appairées après un changement de piles ou une panne.",
        "Distance, murs ou obstacles métalliques — le signal radio est atténué entre la sonde et la console et n'arrive plus.",
        "Humidité ou corrosion dans le logement des piles — les contacts s'oxydent et l'alimentation devient intermittente ou coupée."
      ],
      "steps": [
        "Rapprochez la sonde de la console, à quelques mètres sans obstacle, pour vérifier si les données reviennent hors de tout problème de portée.",
        "Remplacez les piles de la sonde par des piles neuves de bonne qualité, en respectant la polarité et le type indiqué dans le manuel.",
        "Retirez les piles de la console et de la sonde, remettez d'abord celles de la sonde puis celles de la console afin de relancer l'appairage.",
        "Contrôlez le canal ou l'identifiant s'il est réglable, et éloignez la console des routeurs, téléviseurs et autres sources de parasites radio.",
        "Séchez et nettoyez les contacts du compartiment à piles, puis fixez la sonde à l'abri de la pluie directe, loin de grandes surfaces métalliques."
      ],
      "replaceWhen": "Si de l'eau a pénétré dans la sonde, que la carte est corrodée ou que la liaison ne se rétablit jamais malgré des piles neuves, la réparation est peu réaliste. Une sonde de remplacement introuvable pour une station ancienne justifie de changer l'ensemble."
    },
    "en": {
      "intro": "An outdoor weather-station sensor that stops reporting usually has weak batteries, especially in cold weather, or has lost its radio link with the main console. Fitting fresh batteries and re-syncing the pair fixes most cases.",
      "causes": [
        "Weak sensor batteries — cold further reduces their capacity, so the transmitter stops sending or sends too weakly.",
        "Radio link lost after a power gap — the sensor and console are no longer paired after a battery change or outage.",
        "Distance, walls or metal obstacles — the radio signal is attenuated between sensor and console and no longer arrives.",
        "Moisture or corrosion in the battery compartment — contacts oxidise and the power supply becomes intermittent or fails."
      ],
      "steps": [
        "Bring the sensor close to the console, a few metres apart with no obstacles, to check data returns when range is not a factor.",
        "Replace the sensor batteries with fresh, good-quality ones of the type the manual specifies, observing the correct polarity.",
        "Remove the batteries from both console and sensor, then insert the sensor's first and the console's afterwards to restart pairing.",
        "Check the channel or ID setting if adjustable, and move the console away from routers, televisions and other sources of radio interference.",
        "Dry and clean the battery contacts, then mount the sensor sheltered from direct rain and away from large metal surfaces."
      ],
      "replaceWhen": "If water has entered the sensor, the board is corroded or the link never re-establishes even with new batteries, repair is unrealistic. If a replacement sensor is unobtainable for an older station, replacing the whole set makes sense."
    },
    "de": {
      "intro": "Sendet der Außensensor einer Wetterstation keine Daten mehr, sind meist die Batterien schwach, besonders bei Kälte, oder die Funkverbindung zur Hauptkonsole ist abgerissen. Neue Batterien und eine erneute Kopplung beider Geräte beheben die meisten Fälle zuverlässig.",
      "causes": [
        "Schwache Sensorbatterien — Kälte verringert die Kapazität zusätzlich, sodass der Sender nicht mehr oder zu schwach sendet.",
        "Verlorene Funkverbindung nach Stromunterbrechung — Sensor und Konsole sind nach Batteriewechsel oder Ausfall nicht mehr gekoppelt.",
        "Entfernung, Wände oder Metallhindernisse — das Funksignal wird zwischen Sensor und Konsole abgeschwächt und kommt nicht mehr an.",
        "Feuchtigkeit oder Korrosion im Batteriefach — die Kontakte oxidieren und die Stromversorgung wird unterbrochen oder setzt aus."
      ],
      "steps": [
        "Halten Sie den Sensor einige Meter ohne Hindernisse neben die Konsole, um zu prüfen, ob Daten ohne Reichweitenproblem wieder ankommen.",
        "Ersetzen Sie die Sensorbatterien durch neue, hochwertige Batterien des im Handbuch genannten Typs und achten Sie auf die richtige Polung.",
        "Entnehmen Sie die Batterien aus Konsole und Sensor, setzen Sie zuerst die des Sensors und danach die der Konsole ein, um die Kopplung neu zu starten.",
        "Prüfen Sie Kanal oder ID, falls einstellbar, und stellen Sie die Konsole fern von Routern, Fernsehern und anderen Funkstörquellen auf.",
        "Batteriekontakte trocknen und reinigen, dann den Sensor regengeschützt und abseits großer Metallflächen montieren."
      ],
      "replaceWhen": "Ist Wasser in den Sensor eingedrungen, die Platine korrodiert oder die Verbindung kommt auch mit neuen Batterien nie zustande, ist eine Reparatur unrealistisch. Gibt es für eine ältere Station keinen Ersatzsensor mehr, lohnt der Komplettaustausch."
    },
    "es": {
      "intro": "Un sensor exterior de estación meteorológica que deja de enviar datos suele tener las pilas débiles, sobre todo con frío, o ha perdido el enlace de radio con la consola. Pilas nuevas y una nueva sincronización resuelven la mayoría de los casos.",
      "causes": [
        "Pilas del sensor débiles — el frío reduce aún más su capacidad y el emisor deja de transmitir o lo hace con muy poca potencia.",
        "Enlace de radio perdido tras un corte — sensor y consola dejan de estar emparejados tras cambiar las pilas o una interrupción.",
        "Distancia, paredes u obstáculos metálicos — la señal de radio se atenúa entre sensor y consola y ya no llega.",
        "Humedad o corrosión en el compartimento de pilas — los contactos se oxidan y la alimentación se vuelve intermitente o se corta."
      ],
      "steps": [
        "Acerque el sensor a la consola, a pocos metros y sin obstáculos, para comprobar si vuelven los datos cuando el alcance no influye.",
        "Sustituya las pilas del sensor por otras nuevas y de buena calidad del tipo indicado en el manual, respetando la polaridad.",
        "Retire las pilas de la consola y del sensor, ponga primero las del sensor y luego las de la consola para reiniciar el emparejamiento.",
        "Revise el canal o identificador si es ajustable y aleje la consola de routers, televisores y otras fuentes de interferencias de radio.",
        "Seque y limpie los contactos del compartimento de pilas y fije el sensor protegido de la lluvia directa y lejos de grandes superficies metálicas."
      ],
      "replaceWhen": "Si ha entrado agua en el sensor, la placa está corroída o el enlace no se restablece ni con pilas nuevas, la reparación es poco realista. Si no hay sensor de repuesto para una estación antigua, conviene cambiar el conjunto."
    },
    "it": {
      "intro": "Una sonda esterna di stazione meteo che non invia più dati ha di solito le batterie scariche, soprattutto con il freddo, oppure ha perso il collegamento radio con la console. Batterie nuove e una nuova sincronizzazione risolvono la maggior parte dei casi.",
      "causes": [
        "Batterie della sonda deboli — il freddo ne riduce ancora la capacità e il trasmettitore non trasmette più o lo fa troppo debolmente.",
        "Collegamento radio perso dopo un'interruzione — sonda e console non sono più accoppiate dopo un cambio batterie o un blackout.",
        "Distanza, muri o ostacoli metallici — il segnale radio si attenua tra sonda e console e non arriva più.",
        "Umidità o corrosione nel vano batterie — i contatti si ossidano e l'alimentazione diventa intermittente o si interrompe."
      ],
      "steps": [
        "Avvicinate la sonda alla console, a pochi metri e senza ostacoli, per verificare se i dati tornano quando la portata non è un fattore.",
        "Sostituite le batterie della sonda con batterie nuove di buona qualità del tipo indicato nel manuale, rispettando la polarità.",
        "Togliete le batterie da console e sonda, inserite prima quelle della sonda e poi quelle della console per riavviare l'accoppiamento.",
        "Controllate canale o ID se regolabili e allontanate la console da router, televisori e altre fonti di interferenze radio.",
        "Asciugate e pulite i contatti del vano batterie, poi fissate la sonda al riparo dalla pioggia diretta e lontano da grandi superfici metalliche."
      ],
      "replaceWhen": "Se è entrata acqua nella sonda, la scheda è corrosa o il collegamento non si ristabilisce nemmeno con batterie nuove, la riparazione è poco realistica. Se per una stazione datata non esiste più una sonda di ricambio, conviene cambiare l'intero set."
    },
    "nl": {
      "intro": "Een buitensensor van een weerstation die geen data meer doorgeeft, heeft meestal zwakke batterijen, vooral bij kou, of is de radioverbinding met het display kwijt. Nieuwe batterijen en opnieuw synchroniseren lossen de meeste gevallen op.",
      "causes": [
        "Zwakke batterijen in de sensor — kou verlaagt de capaciteit nog verder, waardoor de zender niet meer of te zwak uitzendt.",
        "Radioverbinding kwijt na stroomonderbreking — sensor en display zijn na een batterijwissel of storing niet meer gekoppeld.",
        "Afstand, muren of metalen obstakels — het radiosignaal wordt tussen sensor en display gedempt en komt niet meer aan.",
        "Vocht of corrosie in het batterijvak — de contacten oxideren en de stroomvoorziening valt af en toe of helemaal weg."
      ],
      "steps": [
        "Houd de sensor enkele meters zonder obstakels naast het display om te controleren of de data terugkomt wanneer bereik geen rol speelt.",
        "Vervang de batterijen van de sensor door nieuwe, kwalitatief goede batterijen van het type uit de handleiding en let op de polariteit.",
        "Haal de batterijen uit display en sensor, plaats eerst die van de sensor en daarna die van het display om het koppelen opnieuw te starten.",
        "Controleer kanaal of ID als dat instelbaar is en zet het display uit de buurt van routers, televisies en andere bronnen van radiostoring.",
        "Droog en reinig de batterijcontacten en monteer de sensor beschut tegen direct regenwater en weg van grote metalen oppervlakken."
      ],
      "replaceWhen": "Is er water in de sensor gekomen, is de print gecorrodeerd of komt de verbinding ook met nieuwe batterijen nooit terug, dan is reparatie onrealistisch. Is er voor een ouder station geen losse sensor meer te krijgen, dan is complete vervanging logisch."
    }
  },
  "nettoyage-residus-brules": {
    "fr": {
      "intro": "Pour nettoyer les résidus brûlés d'un airfryer, laissez l'appareil refroidir, trempez le tiroir et le panier dans de l'eau chaude savonneuse, puis frottez avec une éponge non abrasive. Une pâte de bicarbonate de soude aide sur les dépôts tenaces sans abîmer le revêtement antiadhésif.",
      "causes": [
        "Graisse qui goutte et carbonise — les gouttes tombent au fond du tiroir et noircissent à chaque cuisson si l'on ne nettoie pas.",
        "Marinades sucrées ou sauces épaisses — le sucre caramélise puis brûle sur le panier et colle fortement à la paroi.",
        "Nettoyage reporté entre les cuissons — les couches de graisse se superposent et durcissent sous l'effet répété de la chaleur.",
        "Température maximale sans huile ni papier adapté — les aliments adhèrent au panier et laissent des croûtes noires difficiles à décoller."
      ],
      "steps": [
        "Débranchez l'appareil et laissez-le refroidir complètement avant de retirer le tiroir et le panier pour les nettoyer.",
        "Faites tremper tiroir et panier quinze à trente minutes dans de l'eau chaude avec du liquide vaisselle pour ramollir les dépôts.",
        "Frottez avec une éponge ou une brosse souple ; sur les résidus tenaces, appliquez une pâte de bicarbonate et d'eau et laissez agir.",
        "Essuyez l'intérieur du boîtier et la résistance, à froid, avec un chiffon humide bien essoré ou une brosse douce, sans verser d'eau.",
        "Rincez, séchez soigneusement toutes les pièces et remontez. N'utilisez jamais de paille de fer ni de produit abrasif sur le revêtement."
      ],
      "replaceWhen": "Si le revêtement antiadhésif s'écaille, si de la rouille apparaît ou si une odeur de brûlé persiste après un nettoyage approfondi, l'appareil devient moins sûr et moins hygiénique. Dans ce cas, mieux vaut le remplacer que continuer à cuisiner dessus."
    },
    "en": {
      "intro": "To clean burnt residue from an air fryer, let it cool, soak the drawer and basket in hot soapy water, then scrub with a non-abrasive sponge. A baking soda paste helps with stubborn deposits without harming the non-stick coating.",
      "causes": [
        "Dripping grease that carbonises — drops fall to the bottom of the drawer and blacken with each cook if it is not cleaned.",
        "Sugary marinades or thick sauces — the sugar caramelises then burns onto the basket and bonds firmly to the surface.",
        "Cleaning put off between uses — layers of grease build up and harden under repeated heat.",
        "High temperature with no oil or suitable liner — food sticks to the basket and leaves black crusts that are hard to lift."
      ],
      "steps": [
        "Unplug the appliance and let it cool completely before taking out the drawer and basket for cleaning.",
        "Soak the drawer and basket for fifteen to thirty minutes in hot water with washing-up liquid to soften the deposits.",
        "Scrub with a soft sponge or brush; for stubborn residue, spread on a paste of baking soda and water and let it work.",
        "With the unit cold, wipe the inside of the housing and heating element with a well-wrung damp cloth or soft brush, without pouring water in.",
        "Rinse, dry every part thoroughly and reassemble. Never use steel wool or abrasive cleaners on the coating."
      ],
      "replaceWhen": "If the non-stick coating is flaking, rust appears, or a burnt smell persists after a deep clean, the appliance becomes less safe and less hygienic. In that case it is better to replace it than to keep cooking on it."
    },
    "de": {
      "intro": "Um Brandrückstände aus einer Heißluftfritteuse zu entfernen, lassen Sie das Gerät abkühlen, weichen Schublade und Korb in heißem Spülwasser ein und schrubben sie mit einem nicht scheuernden Schwamm. Eine Natronpaste hilft bei hartnäckigen Belägen, ohne die Antihaftschicht zu beschädigen.",
      "causes": [
        "Heruntertropfendes Fett, das verkohlt — Tropfen fallen auf den Schubladenboden und werden bei jedem Garen schwärzer, wenn nicht gereinigt wird.",
        "Zuckerhaltige Marinaden oder dicke Saucen — der Zucker karamellisiert, verbrennt am Korb und haftet fest an der Oberfläche.",
        "Aufgeschobene Reinigung zwischen den Einsätzen — Fettschichten türmen sich auf und härten durch die wiederholte Hitze aus.",
        "Höchste Temperatur ohne Öl oder passende Unterlage — Gargut klebt am Korb und hinterlässt schwarze, schwer lösbare Krusten."
      ],
      "steps": [
        "Gerät ausstecken und vollständig abkühlen lassen, bevor Sie Schublade und Korb zum Reinigen herausnehmen.",
        "Schublade und Korb fünfzehn bis dreißig Minuten in heißem Wasser mit Spülmittel einweichen, damit sich die Beläge lösen.",
        "Mit weichem Schwamm oder Bürste schrubben; bei hartnäckigen Resten eine Paste aus Natron und Wasser auftragen und einwirken lassen.",
        "Gehäuseinneres und Heizelement im kalten Zustand mit einem gut ausgewrungenen feuchten Tuch oder einer weichen Bürste abwischen, ohne Wasser einzufüllen.",
        "Alles abspülen, gründlich trocknen und wieder zusammensetzen. Verwenden Sie niemals Stahlwolle oder scharfe Scheuermittel auf der Beschichtung."
      ],
      "replaceWhen": "Blättert die Antihaftbeschichtung ab, zeigt sich Rost oder bleibt nach gründlicher Reinigung ein Brandgeruch, wird das Gerät unsicherer und unhygienischer. Dann ist ein Austausch besser, als weiter darin zu kochen."
    },
    "es": {
      "intro": "Para limpiar los residuos quemados de una freidora de aire, deje que se enfríe, remoje el cajón y la cesta en agua caliente con jabón y frote con una esponja no abrasiva. Una pasta de bicarbonato ayuda con los depósitos tenaces sin dañar el antiadherente.",
      "causes": [
        "Grasa que gotea y se carboniza — las gotas caen al fondo del cajón y ennegrecen en cada cocción si no se limpia.",
        "Marinadas azucaradas o salsas espesas — el azúcar se carameliza, luego se quema en la cesta y se adhiere con fuerza.",
        "Limpieza aplazada entre usos — las capas de grasa se acumulan y se endurecen con el calor repetido.",
        "Temperatura máxima sin aceite ni papel adecuado — los alimentos se pegan a la cesta y dejan costras negras difíciles de despegar."
      ],
      "steps": [
        "Desenchufe el aparato y deje que se enfríe por completo antes de retirar el cajón y la cesta para limpiarlos.",
        "Deje en remojo el cajón y la cesta de quince a treinta minutos en agua caliente con lavavajillas para ablandar los depósitos.",
        "Frote con una esponja o cepillo suave; en los restos tenaces, aplique una pasta de bicarbonato y agua y déjela actuar.",
        "Con el aparato frío, limpie el interior de la carcasa y la resistencia con un paño húmedo bien escurrido o un cepillo suave, sin echar agua.",
        "Enjuague, seque bien todas las piezas y vuelva a montar. No use nunca estropajo metálico ni productos abrasivos sobre el revestimiento."
      ],
      "replaceWhen": "Si el antiadherente se descascarilla, aparece óxido o persiste olor a quemado tras una limpieza a fondo, el aparato es menos seguro e higiénico. En ese caso conviene sustituirlo en lugar de seguir cocinando en él."
    },
    "it": {
      "intro": "Per pulire i residui bruciati di una friggitrice ad aria, lasciatela raffreddare, mettete cassetto e cestello a bagno in acqua calda saponata e strofinate con una spugna non abrasiva. Una pasta di bicarbonato aiuta con i depositi ostinati senza rovinare il rivestimento antiaderente.",
      "causes": [
        "Grasso che gocciola e si carbonizza — le gocce cadono sul fondo del cassetto e annerisce a ogni cottura se non si pulisce.",
        "Marinature zuccherine o salse dense — lo zucchero caramella, poi brucia sul cestello e aderisce con forza alla superficie.",
        "Pulizia rimandata tra un utilizzo e l'altro — gli strati di grasso si accumulano e induriscono con il calore ripetuto.",
        "Temperatura massima senza olio né carta adatta — il cibo si attacca al cestello e lascia croste nere difficili da staccare."
      ],
      "steps": [
        "Scollegate l'apparecchio e lasciatelo raffreddare completamente prima di estrarre cassetto e cestello per pulirli.",
        "Lasciate in ammollo cassetto e cestello da quindici a trenta minuti in acqua calda con detersivo per piatti, per ammorbidire i depositi.",
        "Strofinate con una spugna o spazzola morbida; sui residui ostinati stendete una pasta di bicarbonato e acqua e lasciatela agire.",
        "Ad apparecchio freddo, pulite l'interno della scocca e la resistenza con un panno umido ben strizzato o una spazzola morbida, senza versare acqua.",
        "Sciacquate, asciugate bene ogni parte e rimontate. Non usate mai pagliette metalliche né prodotti abrasivi sul rivestimento."
      ],
      "replaceWhen": "Se il rivestimento antiaderente si scrosta, compare ruggine o resta odore di bruciato dopo una pulizia approfondita, l'apparecchio è meno sicuro e igienico. In tal caso è meglio sostituirlo che continuare a cucinarci."
    },
    "nl": {
      "intro": "Om ingebrande resten uit een airfryer te verwijderen, laat u het apparaat afkoelen, weekt u lade en mand in heet zeepwater en schrobt u met een niet-schurende spons. Een pasta van baking soda helpt bij hardnekkige aanslag zonder de antiaanbaklaag te beschadigen.",
      "causes": [
        "Druppelend vet dat verkoolt — druppels vallen op de bodem van de lade en worden bij elke bereiding zwarter als er niet wordt schoongemaakt.",
        "Suikerrijke marinades of dikke sauzen — de suiker karamelliseert, brandt aan op de mand en hecht stevig aan het oppervlak.",
        "Schoonmaken uitgesteld tussen gebruik — vetlagen stapelen zich op en harden uit door herhaalde hitte.",
        "Hoogste temperatuur zonder olie of geschikt papier — eten plakt aan de mand en laat zwarte korsten achter die moeilijk loskomen."
      ],
      "steps": [
        "Trek de stekker eruit en laat het apparaat volledig afkoelen voordat u lade en mand eruit haalt om ze schoon te maken.",
        "Week lade en mand vijftien tot dertig minuten in heet water met afwasmiddel om de aanslag zacht te maken.",
        "Schrob met een zachte spons of borstel; breng bij hardnekkige resten een pasta van baking soda en water aan en laat die inwerken.",
        "Veeg bij een koud apparaat de binnenkant van de behuizing en het verwarmingselement af met een goed uitgewrongen vochtige doek of zachte borstel, zonder water erin te gieten.",
        "Spoel af, droog alle onderdelen grondig en zet alles weer in elkaar. Gebruik nooit staalwol of schurende middelen op de coating."
      ],
      "replaceWhen": "Als de antiaanbaklaag afbladdert, er roest verschijnt of er na een grondige reiniging nog een brandlucht blijft, wordt het apparaat onveiliger en minder hygiënisch. Dan is vervangen beter dan er verder in blijven koken."
    }
  },
  "purificateur-voyant-rouge": {
    "fr": {
      "intro": "Un voyant rouge permanent sur un purificateur d'air indique le plus souvent une qualité d'air mauvaise détectée par le capteur, ou un rappel de remplacement du filtre non réinitialisé. La signification varie selon les modèles, vérifiez donc le manuel avant de conclure à une panne.",
      "causes": [
        "Air réellement pollué — fumée de cuisson, poussière ou aérosols poussent le capteur à afficher la couleur d'alerte tant que l'air n'est pas assaini.",
        "Rappel de filtre non réinitialisé — le compteur d'usage reste actif même après un remplacement si la remise à zéro n'a pas été faite.",
        "Capteur de particules encrassé — la poussière sur le capteur fausse la mesure et maintient une indication de mauvaise qualité d'air.",
        "Filtre ou capot mal positionné — l'appareil détecte une anomalie de montage et garde le voyant d'alerte allumé."
      ],
      "steps": [
        "Débranchez l'appareil, ouvrez le capot et vérifiez que le filtre est bien en place, dans le bon sens, puis refermez correctement.",
        "Consultez le manuel pour connaître le sens exact du voyant rouge, sa couleur d'alerte et la procédure de réinitialisation du filtre.",
        "Aspirez ou dépoussiérez le pré-filtre, puis nettoyez le capteur avec un coton-tige sec ou une brosse douce, appareil débranché.",
        "Aérez la pièce, supprimez les sources de pollution proches comme fumée ou aérosols, et laissez tourner l'appareil quelques heures en vitesse élevée.",
        "Après remplacement du filtre, réinitialisez le compteur en suivant la procédure du manuel, souvent un appui long sur un bouton dédié."
      ],
      "replaceWhen": "Si le voyant reste rouge après remplacement du filtre, nettoyage du capteur et réinitialisation, la carte ou le capteur est probablement défaillant. Quand les filtres ne sont plus disponibles ou que l'appareil est ancien et bruyant, le remplacer est plus pertinent."
    },
    "en": {
      "intro": "A permanent red light on an air purifier most often means the sensor detects poor air quality, or that a filter-replacement reminder has not been reset. The meaning varies by model, so check the manual before assuming a fault.",
      "causes": [
        "Genuinely polluted air — cooking smoke, dust or aerosols make the sensor show its alert colour until the air has cleared.",
        "Filter reminder not reset — the usage counter stays active even after a replacement if the reset was not carried out.",
        "Dirty particle sensor — dust on the sensor skews the reading and keeps a poor air quality indication showing.",
        "Filter or cover seated badly — the unit detects an assembly fault and keeps the warning light on."
      ],
      "steps": [
        "Unplug the unit, open the cover and check the filter is fitted correctly and the right way round, then close the cover properly.",
        "Check the manual for what the red light means on your model, its alert colour and how to reset the filter indicator.",
        "With the unit unplugged, vacuum or dust the pre-filter, then clean the sensor with a dry cotton bud or soft brush.",
        "Ventilate the room, remove nearby sources of pollution such as smoke or aerosols, and run the unit on a high speed for a few hours.",
        "After fitting a new filter, reset the counter following the manual, often by holding a dedicated button for a few seconds."
      ],
      "replaceWhen": "If the light stays red after a filter change, sensor cleaning and a reset, the control board or sensor has probably failed. When filters are no longer available or the unit is old and noisy, replacing it makes more sense."
    },
    "de": {
      "intro": "Eine dauerhaft rote Warnleuchte am Luftreiniger bedeutet meist, dass der Sensor schlechte Luftqualität erkennt oder dass die Filterwechsel-Erinnerung nicht zurückgesetzt wurde. Die Bedeutung hängt vom Modell ab, prüfen Sie daher das Handbuch, bevor Sie einen Defekt annehmen.",
      "causes": [
        "Tatsächlich belastete Luft — Kochdunst, Staub oder Sprays lassen den Sensor die Warnfarbe zeigen, bis sich die Luft verbessert hat.",
        "Filtererinnerung nicht zurückgesetzt — der Betriebszähler läuft auch nach einem Wechsel weiter, wenn die Rückstellung nicht erfolgt ist.",
        "Verschmutzter Partikelsensor — Staub auf dem Sensor verfälscht die Messung und hält die Anzeige für schlechte Luft aufrecht.",
        "Falsch eingesetzter Filter oder Deckel — das Gerät erkennt einen Montagefehler und lässt die Warnleuchte an."
      ],
      "steps": [
        "Gerät ausstecken, Abdeckung öffnen und prüfen, ob der Filter richtig und in der korrekten Richtung sitzt, dann die Abdeckung ordentlich schließen.",
        "Lesen Sie im Handbuch nach, was die rote Anzeige bei Ihrem Modell bedeutet, welche Warnfarbe gilt und wie die Filteranzeige zurückgesetzt wird.",
        "Bei ausgestecktem Gerät den Vorfilter absaugen oder abstauben und den Sensor mit einem trockenen Wattestäbchen oder weichen Pinsel reinigen.",
        "Lüften Sie den Raum, beseitigen Sie nahe Schadstoffquellen wie Rauch oder Sprays und lassen Sie das Gerät einige Stunden auf hoher Stufe laufen.",
        "Setzen Sie nach dem Filterwechsel den Zähler laut Handbuch zurück, oft durch längeres Drücken einer bestimmten Taste."
      ],
      "replaceWhen": "Bleibt die Anzeige nach Filterwechsel, Sensorreinigung und Reset rot, sind Platine oder Sensor wahrscheinlich defekt. Sind Filter nicht mehr erhältlich oder ist das Gerät alt und laut, ist ein Austausch sinnvoller."
    },
    "es": {
      "intro": "Una luz roja permanente en un purificador de aire suele indicar que el sensor detecta mala calidad del aire o que el aviso de cambio de filtro no se ha reiniciado. El significado varía según el modelo, así que revise el manual antes de dar por hecha una avería.",
      "causes": [
        "Aire realmente contaminado — humo de cocina, polvo o aerosoles hacen que el sensor muestre el color de alerta hasta que el aire mejora.",
        "Aviso de filtro sin reiniciar — el contador de uso sigue activo aunque se cambie el filtro si no se hizo el reinicio.",
        "Sensor de partículas sucio — el polvo en el sensor falsea la medición y mantiene la indicación de mala calidad del aire.",
        "Filtro o tapa mal colocados — el aparato detecta un fallo de montaje y mantiene encendida la luz de aviso."
      ],
      "steps": [
        "Desenchufe el aparato, abra la tapa y compruebe que el filtro está bien colocado y en el sentido correcto; cierre la tapa bien.",
        "Consulte el manual para saber qué significa la luz roja en su modelo, cuál es su color de alerta y cómo se reinicia el indicador del filtro.",
        "Con el aparato desenchufado, aspire o quite el polvo del prefiltro y limpie el sensor con un bastoncillo seco o un cepillo suave.",
        "Ventile la habitación, elimine fuentes de contaminación cercanas como humo o aerosoles y deje funcionar el aparato unas horas a velocidad alta.",
        "Tras colocar un filtro nuevo, reinicie el contador según el manual, normalmente manteniendo pulsado un botón específico unos segundos."
      ],
      "replaceWhen": "Si la luz sigue roja tras cambiar el filtro, limpiar el sensor y reiniciar, lo probable es que falle la placa o el sensor. Cuando ya no hay filtros disponibles o el aparato es antiguo y ruidoso, conviene sustituirlo."
    },
    "it": {
      "intro": "Una spia rossa sempre accesa su un purificatore d'aria indica di solito che il sensore rileva una scarsa qualità dell'aria oppure che il promemoria di sostituzione del filtro non è stato azzerato. Il significato varia da modello a modello, quindi consultate il manuale prima di pensare a un guasto.",
      "causes": [
        "Aria davvero inquinata — fumo di cottura, polvere o spray fanno mostrare al sensore il colore di allarme finché l'aria non migliora.",
        "Promemoria del filtro non azzerato — il contatore d'uso resta attivo anche dopo la sostituzione se non è stato fatto il reset.",
        "Sensore di particelle sporco — la polvere sul sensore altera la misura e mantiene l'indicazione di aria scadente.",
        "Filtro o coperchio posizionati male — l'apparecchio rileva un errore di montaggio e lascia accesa la spia di avviso."
      ],
      "steps": [
        "Scollegate l'apparecchio, aprite il coperchio e controllate che il filtro sia ben inserito e nel verso giusto, poi richiudete correttamente.",
        "Consultate il manuale per sapere cosa significa la spia rossa sul vostro modello, qual è il suo colore di allarme e come azzerare l'indicatore del filtro.",
        "Con l'apparecchio scollegato, aspirate o spolverate il prefiltro e pulite il sensore con un cotton fioc asciutto o una spazzola morbida.",
        "Arieggiate la stanza, eliminate le fonti di inquinamento vicine come fumo o spray e fate funzionare l'apparecchio alcune ore a velocità alta.",
        "Dopo aver montato un filtro nuovo, azzerate il contatore seguendo il manuale, di solito tenendo premuto per qualche secondo un tasto dedicato."
      ],
      "replaceWhen": "Se la spia resta rossa dopo la sostituzione del filtro, la pulizia del sensore e il reset, probabilmente la scheda o il sensore è guasto. Quando i filtri non sono più disponibili o l'apparecchio è vecchio e rumoroso, conviene sostituirlo."
    },
    "nl": {
      "intro": "Een permanent rood lampje op een luchtreiniger betekent meestal dat de sensor slechte luchtkwaliteit detecteert of dat de herinnering voor filtervervanging niet is gereset. De betekenis verschilt per model, dus raadpleeg de handleiding voordat u een defect aanneemt.",
      "causes": [
        "Echt vervuilde lucht — kookdampen, stof of spuitbussen laten de sensor de waarschuwingskleur tonen tot de lucht is opgeknapt.",
        "Filterherinnering niet gereset — de gebruikssteller blijft actief, ook na vervanging, als de reset niet is uitgevoerd.",
        "Vuile fijnstofsensor — stof op de sensor vertekent de meting en houdt de aanduiding voor slechte luchtkwaliteit in stand.",
        "Filter of deksel verkeerd geplaatst — het apparaat ziet een montagefout en houdt het waarschuwingslampje aan."
      ],
      "steps": [
        "Trek de stekker eruit, open het deksel en controleer of het filter goed en in de juiste richting zit; sluit het deksel netjes.",
        "Zoek in de handleiding op wat het rode lampje bij uw model betekent, welke waarschuwingskleur geldt en hoe u de filterindicator reset.",
        "Stofzuig of stof bij een uitgeschakeld apparaat het voorfilter af en reinig de sensor met een droog wattenstaafje of zachte borstel.",
        "Ventileer de kamer, verwijder nabije bronnen van vervuiling zoals rook of spuitbussen en laat het apparaat enkele uren op hoge stand draaien.",
        "Reset na het plaatsen van een nieuw filter de teller volgens de handleiding, vaak door een speciale knop enkele seconden ingedrukt te houden."
      ],
      "replaceWhen": "Blijft het lampje rood na filtervervanging, sensorreiniging en reset, dan is waarschijnlijk het bord of de sensor defect. Zijn filters niet meer te krijgen of is het apparaat oud en luidruchtig, dan is vervangen zinvoller."
    }
  },
  "centrale-vapeur-voyant-anti-calc": {
    "fr": {
      "intro": "Le voyant anti-calcaire d'une centrale vapeur reste souvent allumé après détartrage parce que le compteur n'a pas été réinitialisé ou parce que la chaudière contient encore du tartre ou des résidus de produit. Rincez abondamment, puis suivez la procédure de remise à zéro du manuel.",
      "causes": [
        "Compteur d'entretien non réinitialisé — le rappel s'appuie sur un compteur qui reste allumé tant qu'on ne l'a pas remis à zéro.",
        "Détartrage incomplet — du tartre subsiste dans la chaudière et l'appareil continue de signaler un entretien nécessaire.",
        "Rinçage insuffisant — des résidus de produit détartrant restent dans la chaudière et peuvent entretenir l'alerte ou gêner la vapeur.",
        "Cartouche ou cassette anti-calcaire usée — le filtre intégré est saturé et ne remplit plus sa fonction de protection."
      ],
      "steps": [
        "Débranchez l'appareil, laissez-le refroidir complètement et ne dévissez jamais le bouchon de la chaudière tant qu'il est chaud ou sous pression.",
        "Relisez la procédure de détartrage du manuel : produit autorisé, dosage, temps d'action et nombre de cycles de rinçage recommandés.",
        "Rincez la chaudière plusieurs fois à l'eau claire en la remplissant, en l'agitant puis en la vidant, jusqu'à disparition des résidus.",
        "Refaites un détartrage complet si de l'eau chargée de tartre s'écoule, puis rincez de nouveau avant de remettre l'appareil en service.",
        "Réinitialisez le voyant selon le manuel, souvent par appui long sur un bouton, et remplacez la cartouche anti-calcaire si votre modèle en possède une."
      ],
      "replaceWhen": "Si le voyant reste allumé après un détartrage soigneux et une remise à zéro, ou si la chaudière est fortement entartrée, la réparation est coûteuse. Sur un appareil ancien utilisé en eau très calcaire, le remplacer est souvent préférable."
    },
    "en": {
      "intro": "A steam generator's anti-scale light often stays on after descaling because the maintenance counter was not reset, or because the boiler still holds scale or descaler residue. Rinse thoroughly, then follow the reset procedure in the manual.",
      "causes": [
        "Maintenance counter not reset — the reminder relies on a counter that stays lit until it is deliberately reset.",
        "Incomplete descaling — scale remains in the boiler and the appliance keeps signalling that maintenance is needed.",
        "Insufficient rinsing — descaler residue is left in the boiler and can keep the alert on or affect steam output.",
        "Worn anti-scale cartridge or cassette — the built-in filter is saturated and no longer protects the unit."
      ],
      "steps": [
        "Unplug the unit, let it cool completely and never unscrew the boiler cap while it is hot or under pressure.",
        "Re-read the manual's descaling procedure: approved product, dosage, soaking time and the recommended number of rinse cycles.",
        "Rinse the boiler several times with clean water by filling, swirling and emptying it until no residue comes out.",
        "Repeat a full descale if scale-laden water still drains out, then rinse again before putting the appliance back into use.",
        "Reset the light as the manual describes, often by holding a button, and replace the anti-scale cartridge if your model has one."
      ],
      "replaceWhen": "If the light stays on after careful descaling and a reset, or the boiler is heavily scaled, repair is costly. On an older unit used with very hard water, replacing it is often the better choice."
    },
    "de": {
      "intro": "Die Entkalkungsanzeige einer Dampfstation bleibt nach dem Entkalken oft an, weil der Wartungszähler nicht zurückgesetzt wurde oder weil im Kessel noch Kalk oder Entkalkerreste vorhanden sind. Gründlich spülen und dann das Reset-Verfahren aus dem Handbuch befolgen.",
      "causes": [
        "Wartungszähler nicht zurückgesetzt — die Erinnerung beruht auf einem Zähler, der leuchtet, bis er bewusst zurückgestellt wird.",
        "Unvollständiges Entkalken — im Kessel bleibt Kalk zurück und das Gerät meldet weiter, dass Wartung nötig ist.",
        "Unzureichendes Spülen — Entkalkerreste verbleiben im Kessel und können die Warnung aufrechterhalten oder die Dampfleistung stören.",
        "Verbrauchte Anti-Kalk-Kartusche oder Kassette — der eingebaute Filter ist gesättigt und schützt das Gerät nicht mehr."
      ],
      "steps": [
        "Gerät ausstecken, vollständig abkühlen lassen und den Kesselverschluss niemals öffnen, solange er heiß ist oder unter Druck steht.",
        "Lesen Sie das Entkalkungsverfahren im Handbuch erneut: zugelassenes Mittel, Dosierung, Einwirkzeit und empfohlene Anzahl der Spülgänge.",
        "Spülen Sie den Kessel mehrmals mit klarem Wasser, indem Sie ihn füllen, schwenken und entleeren, bis keine Rückstände mehr herauskommen.",
        "Entkalken Sie erneut gründlich, wenn weiter kalkhaltiges Wasser abläuft, und spülen Sie danach nochmals, bevor Sie das Gerät wieder benutzen.",
        "Setzen Sie die Anzeige laut Handbuch zurück, oft durch längeres Drücken einer Taste, und tauschen Sie die Anti-Kalk-Kartusche, falls Ihr Modell eine hat."
      ],
      "replaceWhen": "Bleibt die Anzeige nach sorgfältigem Entkalken und Reset an oder ist der Kessel stark verkalkt, ist die Reparatur teuer. Bei einem älteren Gerät mit sehr hartem Wasser ist der Austausch oft die bessere Wahl."
    },
    "es": {
      "intro": "El indicador antical de una central de vapor suele seguir encendido tras descalcificar porque el contador de mantenimiento no se ha reiniciado o porque la caldera aún contiene cal o restos del producto. Enjuague bien y siga el procedimiento de reinicio del manual.",
      "causes": [
        "Contador de mantenimiento sin reiniciar — el aviso depende de un contador que sigue encendido hasta que se pone a cero a propósito.",
        "Descalcificación incompleta — queda cal en la caldera y el aparato sigue indicando que necesita mantenimiento.",
        "Enjuague insuficiente — quedan restos de descalcificador en la caldera que pueden mantener la alerta o afectar a la salida de vapor.",
        "Cartucho o cassette antical agotado — el filtro integrado está saturado y ya no protege el aparato."
      ],
      "steps": [
        "Desenchufe la unidad, deje que se enfríe por completo y no desenrosque nunca el tapón de la caldera mientras esté caliente o a presión.",
        "Relea el procedimiento de descalcificación del manual: producto admitido, dosis, tiempo de actuación y número recomendado de enjuagues.",
        "Enjuague la caldera varias veces con agua limpia, llenándola, agitándola y vaciándola, hasta que no salgan restos.",
        "Repita una descalcificación completa si sigue saliendo agua con cal y enjuague de nuevo antes de volver a usar el aparato.",
        "Reinicie el indicador según el manual, a menudo con una pulsación larga, y cambie el cartucho antical si su modelo lo incluye."
      ],
      "replaceWhen": "Si el indicador sigue encendido tras una descalcificación cuidadosa y un reinicio, o la caldera está muy incrustada, la reparación sale cara. En un aparato antiguo usado con agua muy dura, sustituirlo suele ser mejor."
    },
    "it": {
      "intro": "La spia anticalcare di una caldaia a vapore resta spesso accesa dopo la decalcificazione perché il contatore di manutenzione non è stato azzerato oppure perché nella caldaia restano calcare o residui del prodotto. Sciacquate a fondo e seguite la procedura di reset del manuale.",
      "causes": [
        "Contatore di manutenzione non azzerato — il promemoria dipende da un contatore che resta acceso finché non viene azzerato di proposito.",
        "Decalcificazione incompleta — nella caldaia resta del calcare e l'apparecchio continua a segnalare la necessità di manutenzione.",
        "Risciacquo insufficiente — residui di decalcificante restano nella caldaia e possono mantenere l'allarme o influire sull'emissione di vapore.",
        "Cartuccia o cassetta anticalcare esaurita — il filtro integrato è saturo e non protegge più l'apparecchio."
      ],
      "steps": [
        "Scollegate l'apparecchio, lasciatelo raffreddare del tutto e non svitate mai il tappo della caldaia finché è caldo o in pressione.",
        "Rileggete la procedura di decalcificazione del manuale: prodotto ammesso, dosaggio, tempo di azione e numero consigliato di risciacqui.",
        "Sciacquate la caldaia più volte con acqua pulita, riempiendola, agitandola e svuotandola, finché non escono più residui.",
        "Ripetete una decalcificazione completa se continua a uscire acqua carica di calcare, poi sciacquate di nuovo prima di rimettere in uso l'apparecchio.",
        "Azzerate la spia come indicato dal manuale, spesso con una pressione prolungata di un tasto, e sostituite la cartuccia anticalcare se il vostro modello ne ha una."
      ],
      "replaceWhen": "Se la spia resta accesa dopo una decalcificazione accurata e un reset, o se la caldaia è molto incrostata, la riparazione è costosa. Su un apparecchio vecchio usato con acqua molto dura, sostituirlo è spesso la scelta migliore."
    },
    "nl": {
      "intro": "Het antikalklampje van een stoomgenerator blijft na het ontkalken vaak branden omdat de onderhoudsteller niet is gereset, of omdat er nog kalk of ontkalkerresten in de boiler zitten. Spoel grondig na en volg daarna de resetprocedure uit de handleiding.",
      "causes": [
        "Onderhoudsteller niet gereset — de herinnering gebruikt een teller die blijft branden tot hij bewust wordt teruggezet.",
        "Onvolledig ontkalken — er blijft kalk in de boiler achter en het apparaat blijft aangeven dat onderhoud nodig is.",
        "Onvoldoende naspoelen — resten ontkalker blijven in de boiler achter en kunnen de melding in stand houden of de stoomproductie beïnvloeden.",
        "Versleten antikalkcartridge of -cassette — het ingebouwde filter is verzadigd en beschermt het apparaat niet meer."
      ],
      "steps": [
        "Trek de stekker eruit, laat het apparaat volledig afkoelen en draai de boilerdop nooit los zolang die heet is of onder druk staat.",
        "Lees de ontkalkprocedure in de handleiding nog eens door: toegestaan middel, dosering, inwerktijd en het aanbevolen aantal spoelbeurten.",
        "Spoel de boiler meerdere keren met schoon water door hem te vullen, te zwenken en te legen tot er geen resten meer uitkomen.",
        "Ontkalk opnieuw volledig als er nog kalkhoudend water uitloopt en spoel daarna nogmaals voordat u het apparaat weer gebruikt.",
        "Reset het lampje volgens de handleiding, vaak door een knop lang in te drukken, en vervang de antikalkcartridge als uw model er een heeft."
      ],
      "replaceWhen": "Blijft het lampje branden na zorgvuldig ontkalken en een reset, of is de boiler sterk verkalkt, dan is reparatie duur. Bij een ouder toestel dat met zeer hard water is gebruikt, is vervangen vaak de betere keuze."
    }
  },
  "nettoyeur-vapeur-ne-projette-plus": {
    "fr": {
      "intro": "Un nettoyeur vapeur qui ne projette plus de vapeur malgré un réservoir plein souffre le plus souvent d'un bouchon mal verrouillé, d'un tartre qui obstrue la buse ou la chaudière, ou d'un temps de chauffe insuffisant. Vérifiez ces points simples avant de suspecter la pompe ou la résistance.",
      "causes": [
        "Bouchon ou sécurité mal verrouillé — la pression ne monte pas ou la sécurité empêche la sortie de vapeur.",
        "Tartre dans la buse ou la chaudière — les dépôts réduisent le passage de l'eau et de la vapeur jusqu'à le bloquer.",
        "Chauffe pas terminée ou réglage minimal — la vapeur n'est disponible qu'une fois le voyant prêt et la molette au bon niveau.",
        "Flexible, accessoire ou gâchette obstrués — un coude, un bouchon ou un verrou de sécurité enclenché empêche la vapeur de passer."
      ],
      "steps": [
        "Débranchez l'appareil et laissez-le refroidir complètement ; n'ouvrez jamais le bouchon de la chaudière tant qu'elle est chaude ou sous pression.",
        "Contrôlez que le réservoir est rempli correctement, que le bouchon est bien verrouillé et que le niveau d'eau ne dépasse pas le repère.",
        "Rebranchez, attendez que le voyant indique que l'appareil est prêt, vérifiez la molette de débit, puis déverrouillez la gâchette de sécurité.",
        "Retirez l'accessoire, vérifiez que le flexible n'est pas plié ou bouché, et dégagez les buses avec une brosse douce ou une épingle fine.",
        "Détartrez selon le manuel avec le produit autorisé, rincez bien, puis utilisez de l'eau déminéralisée si le fabricant l'autorise."
      ],
      "replaceWhen": "Si la vapeur ne revient pas après détartrage et vérification des accessoires, une pompe ou une résistance défectueuse est probable. Pour un appareil ancien ou très entartré, ces réparations coûtent souvent plus qu'un remplacement et ne sont pas toujours sûres."
    },
    "en": {
      "intro": "A steam cleaner that produces no steam despite a full tank most often has a badly locked cap, scale blocking the nozzle or boiler, or too short a heat-up. Check these simple points before suspecting the pump or heating element.",
      "causes": [
        "Cap or safety lock not fully engaged — pressure cannot build or the safety prevents steam from leaving.",
        "Scale in the nozzle or boiler — deposits narrow the path for water and steam until it is blocked.",
        "Heat-up unfinished or steam set to minimum — steam only appears once the ready light is on and the dial is set high enough.",
        "Hose, attachment or trigger blocked — a kink, a clogged nozzle or an engaged safety lock stops the steam passing."
      ],
      "steps": [
        "Unplug the unit and let it cool completely; never open the boiler cap while it is hot or under pressure.",
        "Check the tank is filled correctly, the cap is locked firmly and the water level does not exceed the maximum mark.",
        "Plug in again, wait for the ready indicator, check the steam-flow dial, then release the trigger safety lock.",
        "Remove the attachment, check the hose is not kinked or blocked, and clear the nozzles with a soft brush or a fine pin.",
        "Descale following the manual with the approved product, rinse well, and use demineralised water if the manufacturer allows it."
      ],
      "replaceWhen": "If steam does not return after descaling and checking the accessories, a faulty pump or heating element is likely. On an older or heavily scaled unit these repairs often cost more than a replacement and are not always safe."
    },
    "de": {
      "intro": "Gibt ein Dampfreiniger trotz vollem Tank keinen Dampf ab, liegt es meist an einem nicht richtig verriegelten Verschluss, an Kalk in Düse oder Kessel oder an zu kurzer Aufheizzeit. Prüfen Sie diese einfachen Punkte, bevor Sie Pumpe oder Heizelement verdächtigen.",
      "causes": [
        "Verschluss oder Sicherung nicht richtig verriegelt — der Druck baut sich nicht auf oder die Sicherung verhindert den Dampfaustritt.",
        "Kalk in Düse oder Kessel — Ablagerungen verengen den Weg für Wasser und Dampf bis zur Verstopfung.",
        "Aufheizen nicht beendet oder Dampfstufe auf Minimum — Dampf kommt erst, wenn die Bereitschaftsanzeige leuchtet und die Stufe hoch genug eingestellt ist.",
        "Schlauch, Aufsatz oder Auslöser blockiert — ein Knick, eine verstopfte Düse oder eine eingerastete Sicherung hält den Dampf auf."
      ],
      "steps": [
        "Gerät ausstecken und vollständig abkühlen lassen; öffnen Sie den Kesselverschluss niemals, solange er heiß ist oder unter Druck steht.",
        "Prüfen Sie, ob der Tank richtig gefüllt, der Verschluss fest verriegelt und der Wasserstand nicht über der Maximalmarkierung ist.",
        "Wieder einstecken, auf die Bereitschaftsanzeige warten, den Dampfregler prüfen und dann die Sicherung am Auslöser lösen.",
        "Aufsatz abnehmen, Schlauch auf Knicke oder Verstopfung prüfen und die Düsen mit einer weichen Bürste oder einer feinen Nadel freimachen.",
        "Entkalken Sie gemäß Handbuch mit dem zugelassenen Mittel, spülen Sie gründlich und nutzen Sie demineralisiertes Wasser, falls der Hersteller es erlaubt."
      ],
      "replaceWhen": "Kommt nach dem Entkalken und der Prüfung des Zubehörs kein Dampf zurück, ist eine defekte Pumpe oder ein defektes Heizelement wahrscheinlich. Bei einem älteren oder stark verkalkten Gerät kosten solche Reparaturen oft mehr als ein Ersatz und sind nicht immer sicher."
    },
    "es": {
      "intro": "Un limpiador a vapor que no expulsa vapor aunque el depósito esté lleno suele tener un tapón mal bloqueado, cal que obstruye la boquilla o la caldera, o un tiempo de calentamiento insuficiente. Revise estos puntos sencillos antes de sospechar de la bomba o la resistencia.",
      "causes": [
        "Tapón o seguro mal bloqueado — la presión no sube o el seguro impide que salga el vapor.",
        "Cal en la boquilla o la caldera — los depósitos reducen el paso de agua y vapor hasta bloquearlo.",
        "Calentamiento sin terminar o vapor al mínimo — el vapor solo sale cuando se enciende el piloto de listo y el regulador está suficientemente alto.",
        "Manguera, accesorio o gatillo obstruidos — un doblez, una boquilla atascada o un seguro activado impiden que pase el vapor."
      ],
      "steps": [
        "Desenchufe el aparato y deje que se enfríe del todo; no abra nunca el tapón de la caldera mientras esté caliente o a presión.",
        "Compruebe que el depósito está bien lleno, que el tapón está firmemente bloqueado y que el nivel de agua no supera la marca máxima.",
        "Vuelva a enchufar, espere al indicador de listo, revise el regulador de caudal de vapor y desbloquee el seguro del gatillo.",
        "Retire el accesorio, compruebe que la manguera no esté doblada ni obstruida y despeje las boquillas con un cepillo suave o un alfiler fino.",
        "Descalcifique según el manual con el producto autorizado, enjuague bien y use agua desmineralizada si el fabricante lo permite."
      ],
      "replaceWhen": "Si el vapor no vuelve tras descalcificar y revisar los accesorios, es probable que falle la bomba o la resistencia. En un aparato antiguo o muy incrustado, esas reparaciones suelen costar más que sustituirlo y no siempre son seguras."
    },
    "it": {
      "intro": "Un pulitore a vapore che non emette più vapore nonostante il serbatoio pieno ha quasi sempre un tappo non bloccato bene, calcare che ostruisce l'ugello o la caldaia, oppure un riscaldamento troppo breve. Controllate questi punti semplici prima di sospettare pompa o resistenza.",
      "causes": [
        "Tappo o sicura non bloccati bene — la pressione non sale oppure la sicura impedisce l'uscita del vapore.",
        "Calcare nell'ugello o nella caldaia — i depositi restringono il passaggio di acqua e vapore fino a bloccarlo.",
        "Riscaldamento non terminato o vapore al minimo — il vapore esce solo quando la spia di pronto è accesa e la manopola è abbastanza alta.",
        "Tubo, accessorio o grilletto ostruiti — una piega, un ugello intasato o una sicura attivata impediscono il passaggio del vapore."
      ],
      "steps": [
        "Scollegate l'apparecchio e lasciatelo raffreddare del tutto; non aprite mai il tappo della caldaia finché è caldo o in pressione.",
        "Verificate che il serbatoio sia riempito correttamente, che il tappo sia ben bloccato e che il livello dell'acqua non superi il massimo.",
        "Ricollegate, attendete l'indicatore di pronto, controllate la manopola del flusso di vapore e sbloccate la sicura del grilletto.",
        "Togliete l'accessorio, controllate che il tubo non sia piegato o ostruito e liberate gli ugelli con una spazzola morbida o uno spillo sottile.",
        "Decalcificate secondo il manuale con il prodotto ammesso, sciacquate bene e usate acqua demineralizzata se il produttore lo consente."
      ],
      "replaceWhen": "Se il vapore non torna dopo la decalcificazione e il controllo degli accessori, è probabile un guasto a pompa o resistenza. Su un apparecchio vecchio o molto incrostato, queste riparazioni costano spesso più di una sostituzione e non sono sempre sicure."
    },
    "nl": {
      "intro": "Een stoomreiniger die geen stoom meer geeft ondanks een vol reservoir heeft meestal een slecht vergrendelde dop, kalk die het mondstuk of de boiler verstopt, of een te korte opwarmtijd. Controleer deze eenvoudige punten voordat u de pomp of het verwarmingselement verdenkt.",
      "causes": [
        "Dop of veiligheidsvergrendeling niet goed vast — de druk loopt niet op of de beveiliging laat geen stoom ontsnappen.",
        "Kalk in mondstuk of boiler — afzettingen vernauwen de doorgang voor water en stoom tot die geblokkeerd raakt.",
        "Opwarmen niet klaar of stoomstand op minimum — stoom komt pas als het klaarlampje brandt en de regelaar hoog genoeg staat.",
        "Slang, opzetstuk of trekker verstopt — een knik, een verstopt mondstuk of een ingeschakelde veiligheidsvergrendeling houdt de stoom tegen."
      ],
      "steps": [
        "Trek de stekker eruit en laat het apparaat volledig afkoelen; open de boilerdop nooit zolang die heet is of onder druk staat.",
        "Controleer of het reservoir goed gevuld is, de dop stevig vergrendeld zit en het waterniveau het maximum niet overschrijdt.",
        "Steek de stekker weer in, wacht op het klaarlampje, controleer de stoomregelaar en ontgrendel daarna de veiligheid van de trekker.",
        "Haal het opzetstuk eraf, controleer of de slang niet geknikt of verstopt is en maak de mondstukken vrij met een zachte borstel of een dunne naald.",
        "Ontkalk volgens de handleiding met het toegestane middel, spoel goed na en gebruik gedemineraliseerd water als de fabrikant dat toestaat."
      ],
      "replaceWhen": "Komt er na ontkalken en het controleren van de accessoires geen stoom terug, dan is een defecte pomp of verwarmingselement waarschijnlijk. Bij een ouder of sterk verkalkt toestel kosten die reparaties vaak meer dan vervanging en zijn ze niet altijd veilig."
    }
  },
  "ventilateur-telecommande-perdue": {
    "fr": {
      "intro": "Perdre la télécommande d'un ventilateur connecté n'est presque jamais bloquant : la plupart des modèles se pilotent aussi par l'application, par les boutons du boîtier ou par un assistant vocal. Le plus simple est de passer par l'appli du fabricant, puis de commander une télécommande de remplacement.",
      "causes": [
        "Télécommande égarée — le ventilateur répond toujours aux boutons du bloc moteur ou de la tête, ce qui confirme que l'appareil fonctionne.",
        "Piles vidées ou retirées — la télécommande retrouvée ne réagit plus, la LED d'émission reste éteinte quand on appuie sur une touche.",
        "Ventilateur jamais associé au Wi-Fi — l'appli ne le détecte pas, car seule la télécommande infrarouge ou radio avait été utilisée jusque-là.",
        "Télécommande radio désappairée — après une coupure de courant, le ventilateur ignore une télécommande retrouvée jusqu'à un nouvel appairage."
      ],
      "steps": [
        "Cherchez d'abord sous les coussins, dans les tiroirs et près du ventilateur, puis testez les boutons du boîtier pour confirmer que l'appareil fonctionne bien.",
        "Débranchez le ventilateur, attendez dix secondes, rebranchez-le, puis suivez le mode d'emploi pour activer l'association Wi-Fi si votre modèle est connecté.",
        "Installez l'application du fabricant, créez un compte et ajoutez l'appareil en réseau 2,4 GHz ; vous pourrez alors régler vitesse, oscillation et minuterie.",
        "Si le ventilateur est compatible, associez-le à un assistant vocal ou à une prise connectée pour l'allumer et l'éteindre sans télécommande.",
        "Utilisez une télécommande universelle ou un émetteur infrarouge connecté si votre modèle fonctionne en infrarouge ; choisissez le code correspondant à la marque.",
        "Pour un modèle radio, commandez la télécommande de référence exacte indiquée sur la plaque signalétique, puis refaites l'appairage décrit dans la notice."
      ],
      "replaceWhen": "Remplacer le ventilateur n'a de sens que si la télécommande d'origine est introuvable à la vente et qu'aucun bouton, appli ou assistant ne permet de le piloter. Sinon, une télécommande de rechange coûte bien moins qu'un appareil neuf."
    },
    "en": {
      "intro": "Losing the remote for a smart fan is rarely a real problem, because most models can also be controlled from the app, the buttons on the unit or a voice assistant. The quickest fix is to use the manufacturer's app, then order a replacement remote if you still want one.",
      "causes": [
        "Remote simply misplaced — the fan still responds to the buttons on its base or head, which confirms the appliance itself is working.",
        "Flat or removed batteries — a remote you have found does nothing and its indicator light stays dark when you press a key.",
        "Fan never paired with Wi-Fi — the app cannot see it, because only the infrared or radio remote had ever been used.",
        "Radio remote lost its pairing — after a power cut the fan ignores the remote you found until it is paired again."
      ],
      "steps": [
        "Search under cushions, in drawers and around the fan first, then test the buttons on the unit to confirm that the fan itself works.",
        "Unplug the fan, wait ten seconds and plug it back in, then follow the manual to switch on Wi-Fi pairing if your model is a connected one.",
        "Install the manufacturer's app, create an account and add the fan on a 2.4 GHz network; you can then set speed, oscillation and timer.",
        "If the fan is compatible, link it to a voice assistant or a smart plug so you can switch it on and off without the remote.",
        "Use a universal remote or a connected infrared blaster if your fan works by infrared, and pick the code that matches the brand.",
        "For a radio model, order the exact replacement remote shown on the rating label, then repeat the pairing procedure in the manual."
      ],
      "replaceWhen": "Replacing the fan only makes sense if the original remote is no longer sold and no button, app or voice assistant can control it. Otherwise a spare remote costs far less than a new appliance."
    },
    "de": {
      "intro": "Eine verlorene Fernbedienung ist bei einem smarten Ventilator meist kein Drama, denn die meisten Modelle lassen sich auch per App, über die Tasten am Gerät oder per Sprachassistent steuern. Am schnellsten gelingt es mit der Hersteller-App; eine Ersatz-Fernbedienung lässt sich danach in Ruhe bestellen.",
      "causes": [
        "Fernbedienung nur verlegt — der Ventilator reagiert weiterhin auf die Tasten am Sockel oder Kopf, das Gerät selbst ist also in Ordnung.",
        "Batterien leer oder entfernt — eine wiedergefundene Fernbedienung reagiert nicht, die Sendeanzeige bleibt beim Tastendruck dunkel.",
        "Ventilator nie mit dem WLAN verbunden — die App findet ihn nicht, weil bisher nur die Infrarot- oder Funk-Fernbedienung genutzt wurde.",
        "Funk-Fernbedienung nicht mehr gekoppelt — nach einem Stromausfall ignoriert der Ventilator das Gerät, bis es neu angelernt wird."
      ],
      "steps": [
        "Suchen Sie zuerst unter Kissen, in Schubladen und rund um den Ventilator und testen Sie die Tasten am Gerät, um dessen Funktion zu bestätigen.",
        "Ziehen Sie den Netzstecker, warten Sie zehn Sekunden und stecken Sie ihn wieder ein; aktivieren Sie laut Anleitung den WLAN-Kopplungsmodus, falls vorhanden.",
        "Installieren Sie die Hersteller-App, legen Sie ein Konto an und binden Sie den Ventilator im 2,4-GHz-Netz ein; dann steuern Sie Stufe, Schwenkfunktion und Timer.",
        "Verknüpfen Sie den Ventilator, wenn möglich, mit einem Sprachassistenten oder einer smarten Steckdose, um ihn auch ohne Fernbedienung ein- und auszuschalten.",
        "Nutzen Sie bei Infrarotmodellen eine Universalfernbedienung oder einen smarten IR-Sender und wählen Sie den Code der passenden Marke.",
        "Bei Funkmodellen bestellen Sie genau die auf dem Typenschild genannte Ersatzfernbedienung und koppeln sie wie in der Anleitung beschrieben neu."
      ],
      "replaceWhen": "Ein neuer Ventilator lohnt sich nur, wenn die Original-Fernbedienung nicht mehr erhältlich ist und weder Tasten, App noch Sprachassistent die Steuerung erlauben. Sonst ist eine Ersatzfernbedienung deutlich günstiger als ein Neugerät."
    },
    "es": {
      "intro": "Perder el mando de un ventilador inteligente casi nunca es grave, porque la mayoría de modelos también se controlan desde la aplicación, con los botones del propio aparato o con un asistente de voz. Lo más rápido es usar la app del fabricante y, después, pedir un mando de repuesto si lo necesitas.",
      "causes": [
        "Mando simplemente extraviado — el ventilador sigue respondiendo a los botones de la base o del cabezal, lo que confirma que el aparato funciona.",
        "Pilas agotadas o retiradas — el mando encontrado no hace nada y el piloto de emisión permanece apagado al pulsar una tecla.",
        "Ventilador nunca vinculado al Wi-Fi — la app no lo detecta porque hasta ahora solo se usaba el mando por infrarrojos o radio.",
        "Mando de radio desemparejado — tras un corte de luz, el ventilador ignora el mando recuperado hasta que se vuelve a emparejar."
      ],
      "steps": [
        "Busca primero bajo los cojines, en cajones y alrededor del ventilador, y prueba los botones del aparato para confirmar que funciona correctamente.",
        "Desenchufa el ventilador, espera diez segundos y vuelve a conectarlo; si es un modelo conectado, activa el emparejamiento Wi-Fi según el manual.",
        "Instala la app del fabricante, crea una cuenta y añade el ventilador en una red de 2,4 GHz; podrás ajustar velocidad, oscilación y temporizador.",
        "Si es compatible, vincúlalo a un asistente de voz o a un enchufe inteligente para encenderlo y apagarlo sin necesidad del mando.",
        "Si funciona por infrarrojos, usa un mando universal o un emisor infrarrojo conectado y elige el código que corresponda a la marca.",
        "En un modelo de radio, pide el mando de repuesto exacto que indica la placa de características y repite el emparejamiento descrito en el manual."
      ],
      "replaceWhen": "Cambiar el ventilador solo compensa si el mando original ya no se vende y ningún botón, app ni asistente permite controlarlo. En caso contrario, un mando de repuesto cuesta mucho menos que un aparato nuevo."
    },
    "it": {
      "intro": "Perdere il telecomando di un ventilatore intelligente raramente è un vero problema, perché la maggior parte dei modelli si controlla anche dall'app, dai tasti sul corpo macchina o con un assistente vocale. Il modo più rapido è usare l'app del produttore e poi ordinare un telecomando di ricambio.",
      "causes": [
        "Telecomando semplicemente smarrito — il ventilatore risponde ancora ai tasti sulla base o sulla testa, quindi l'apparecchio funziona.",
        "Pile scariche o rimosse — il telecomando ritrovato non reagisce e il LED di trasmissione resta spento quando premi un tasto.",
        "Ventilatore mai collegato al Wi-Fi — l'app non lo vede perché finora era usato solo il telecomando a infrarossi o radio.",
        "Telecomando radio non più associato — dopo un blackout il ventilatore ignora il telecomando ritrovato finché non viene riassociato."
      ],
      "steps": [
        "Cerca prima sotto i cuscini, nei cassetti e vicino al ventilatore, poi prova i tasti sull'apparecchio per verificare che funzioni.",
        "Scollega la spina, attendi dieci secondi e ricollegala; se il modello è connesso, attiva l'associazione Wi-Fi seguendo il manuale.",
        "Installa l'app del produttore, crea un account e aggiungi il ventilatore su rete a 2,4 GHz; potrai regolare velocità, oscillazione e timer.",
        "Se compatibile, collegalo a un assistente vocale o a una presa intelligente per accenderlo e spegnerlo senza telecomando.",
        "Se funziona a infrarossi, usa un telecomando universale o un emettitore IR connesso e scegli il codice della marca corretta.",
        "Per un modello radio, ordina il telecomando di ricambio esatto indicato sulla targhetta e ripeti l'associazione descritta nel manuale."
      ],
      "replaceWhen": "Sostituire il ventilatore ha senso solo se il telecomando originale non è più in vendita e nessun tasto, app o assistente vocale permette di comandarlo. Altrimenti un telecomando di ricambio costa molto meno di un apparecchio nuovo."
    },
    "nl": {
      "intro": "Een kwijtgeraakte afstandsbediening van een slimme ventilator is zelden een echt probleem, omdat de meeste modellen ook met de app, de knoppen op het apparaat of een spraakassistent te bedienen zijn. Gebruik eerst de app van de fabrikant en bestel daarna eventueel een vervangende afstandsbediening.",
      "causes": [
        "Afstandsbediening gewoon zoekgeraakt — de ventilator reageert nog op de knoppen op de voet of kop, dus het apparaat zelf werkt.",
        "Lege of verwijderde batterijen — een teruggevonden afstandsbediening doet niets en het zendlampje blijft donker bij het indrukken van een toets.",
        "Ventilator nooit aan wifi gekoppeld — de app vindt hem niet, omdat tot nu toe alleen de infrarood- of radiobediening werd gebruikt.",
        "Radiobediening niet meer gekoppeld — na een stroomstoring negeert de ventilator de teruggevonden afstandsbediening tot hij opnieuw is gekoppeld."
      ],
      "steps": [
        "Zoek eerst onder kussens, in laden en rond de ventilator en test de knoppen op het apparaat om te bevestigen dat het werkt.",
        "Haal de stekker eruit, wacht tien seconden en steek hem terug; schakel bij een verbonden model de wifi-koppeling in volgens de handleiding.",
        "Installeer de app van de fabrikant, maak een account aan en voeg de ventilator toe op een 2,4 GHz-netwerk; dan stelt u snelheid, zwenken en timer in.",
        "Koppel de ventilator, als dat kan, aan een spraakassistent of slimme stekker om hem zonder afstandsbediening aan en uit te zetten.",
        "Gebruik bij een infraroodmodel een universele afstandsbediening of een slimme IR-zender en kies de code van het juiste merk.",
        "Bestel bij een radiomodel exact de afstandsbediening die op het typeplaatje staat en koppel die opnieuw zoals de handleiding beschrijft."
      ],
      "replaceWhen": "Een nieuwe ventilator is alleen zinvol als de originele afstandsbediening niet meer te koop is en geen knop, app of spraakassistent de bediening mogelijk maakt. Anders is een reserve-afstandsbediening veel goedkoper dan een nieuw apparaat."
    }
  },
  "station-meteo-ecran-clignote": {
    "fr": {
      "intro": "Un écran de station météo connectée qui clignote vient presque toujours d'une alimentation insuffisante : piles faibles dans la console ou le capteur, ou adaptateur secteur inadapté. Commencez par changer les piles et tester une autre prise avant de soupçonner l'écran lui-même.",
      "causes": [
        "Piles faibles dans la console — le clignotement s'accentue quand le rétroéclairage s'allume, surtout si la station fonctionne sur piles uniquement.",
        "Adaptateur secteur défaillant ou de tension incorrecte — l'écran scintille par intermittence, même avec des piles neuves ou sans piles.",
        "Mauvais contact dans le compartiment à piles — le bruit de contact fait redémarrer l'affichage quand on touche ou déplace la console.",
        "Perturbation radio ou signal capteur instable — l'écran se rafraîchit en boucle quand la console cherche en vain le capteur extérieur.",
        "Défaut de l'afficheur ou de la carte — le clignotement persiste malgré une alimentation correcte et des piles neuves."
      ],
      "steps": [
        "Retirez les piles de la console et du capteur extérieur, attendez une minute, puis installez des piles alcalines neuves en respectant les polarités.",
        "Si vous utilisez le bloc secteur, vérifiez qu'il correspond à la tension et au courant indiqués sur la console, et essayez une autre prise.",
        "Nettoyez les contacts du compartiment avec un chiffon sec ; remplacez toute lame rouillée ou tordue uniquement si elle se démonte sans outil spécial.",
        "Éloignez la console de routeurs, micro-ondes et téléphones, puis rapprochez le capteur extérieur pour tester si le clignotement disparaît.",
        "Réinitialisez la station avec le bouton reset s'il existe, puis resynchronisez le capteur en suivant la notice, console et capteur côte à côte.",
        "Baissez ou coupez le rétroéclairage dans les réglages : s'il cause le clignotement, c'est le signe d'une alimentation trop faible."
      ],
      "replaceWhen": "Si le clignotement persiste avec piles neuves, autre alimentation et réinitialisation, l'afficheur ou la carte est probablement défaillant. Sur un appareil d'entrée de gamme sans pièces disponibles, le remplacement est généralement plus raisonnable qu'une réparation."
    },
    "en": {
      "intro": "A flickering weather station display is almost always a power problem: weak batteries in the console or sensor, or an unsuitable mains adapter. Start by fitting fresh batteries and trying another socket before assuming the screen itself is faulty.",
      "causes": [
        "Weak batteries in the console — the flicker gets worse when the backlight comes on, especially if the station runs on batteries alone.",
        "Faulty or wrong-voltage mains adapter — the screen shimmers intermittently even with new batteries or none fitted.",
        "Poor contact in the battery compartment — the display restarts when you touch or move the console.",
        "Radio interference or unstable sensor signal — the screen refreshes repeatedly while the console keeps searching for the outdoor sensor.",
        "Faulty display or circuit board — the flicker continues despite correct power and fresh batteries."
      ],
      "steps": [
        "Remove the batteries from the console and outdoor sensor, wait a minute, then fit fresh alkaline cells with the polarity the right way round.",
        "If you use the mains adapter, check it matches the voltage and current printed on the console, and try a different socket.",
        "Wipe the battery contacts with a dry cloth; replace a rusty or bent spring only if it comes out without special tools.",
        "Move the console away from routers, microwaves and phones, then place the outdoor sensor closer to see whether the flicker stops.",
        "Reset the station with its reset button if it has one, then re-sync the sensor as the manual describes, with both units side by side.",
        "Lower or switch off the backlight in the settings; if that is the trigger, the power supply is too weak."
      ],
      "replaceWhen": "If the flicker persists with new batteries, another power source and a reset, the display or circuit board is probably failing. On an entry-level unit with no spare parts available, replacing it is usually more sensible than repairing it."
    },
    "de": {
      "intro": "Ein flackerndes Display bei einer smarten Wetterstation liegt fast immer an der Stromversorgung: schwache Batterien in Basisstation oder Sensor oder ein ungeeignetes Netzteil. Wechseln Sie zuerst die Batterien und testen Sie eine andere Steckdose, bevor Sie das Display selbst verdächtigen.",
      "causes": [
        "Schwache Batterien in der Basisstation — das Flackern verstärkt sich beim Einschalten der Beleuchtung, besonders im reinen Batteriebetrieb.",
        "Defektes oder falsches Netzteil — das Display flimmert zeitweise, auch mit neuen oder ganz ohne Batterien.",
        "Wackelkontakt im Batteriefach — das Display startet neu, sobald man die Station berührt oder verschiebt.",
        "Funkstörung oder instabiles Sensorsignal — das Display aktualisiert ständig, während die Station vergeblich den Außensensor sucht.",
        "Defektes Display oder Platine — das Flackern bleibt trotz korrekter Stromversorgung und neuer Batterien bestehen."
      ],
      "steps": [
        "Nehmen Sie die Batterien aus Station und Außensensor, warten Sie eine Minute und setzen Sie neue Alkaline-Batterien mit richtiger Polung ein.",
        "Prüfen Sie bei Netzbetrieb, ob das Netzteil zu Spannung und Strom auf der Station passt, und probieren Sie eine andere Steckdose.",
        "Reinigen Sie die Batteriekontakte mit einem trockenen Tuch; tauschen Sie rostige Federn nur, wenn sie sich ohne Spezialwerkzeug lösen lassen.",
        "Stellen Sie die Station weg von Router, Mikrowelle und Telefon und platzieren Sie den Außensensor näher, um zu sehen, ob das Flackern aufhört.",
        "Setzen Sie die Station mit der Reset-Taste zurück, falls vorhanden, und koppeln Sie den Sensor laut Anleitung neu, beide Geräte nebeneinander.",
        "Dimmen oder deaktivieren Sie die Beleuchtung in den Einstellungen; ist sie der Auslöser, ist die Stromversorgung zu schwach."
      ],
      "replaceWhen": "Flackert das Display trotz neuer Batterien, anderer Stromquelle und Reset weiter, ist vermutlich Display oder Platine defekt. Bei einem einfachen Gerät ohne erhältliche Ersatzteile ist ein Neukauf meist sinnvoller als eine Reparatur."
    },
    "es": {
      "intro": "Una pantalla parpadeante en una estación meteorológica inteligente casi siempre se debe a la alimentación: pilas débiles en la consola o el sensor, o un adaptador de corriente inadecuado. Cambia primero las pilas y prueba otro enchufe antes de sospechar de la pantalla.",
      "causes": [
        "Pilas débiles en la consola — el parpadeo aumenta al encenderse la retroiluminación, sobre todo si la estación funciona solo con pilas.",
        "Adaptador defectuoso o de tensión incorrecta — la pantalla titila de forma intermitente incluso con pilas nuevas o sin ellas.",
        "Mal contacto en el compartimento de pilas — la pantalla se reinicia al tocar o mover la consola.",
        "Interferencia de radio o señal inestable del sensor — la pantalla se refresca sin parar mientras la consola busca el sensor exterior.",
        "Fallo de la pantalla o de la placa — el parpadeo persiste con alimentación correcta y pilas nuevas."
      ],
      "steps": [
        "Retira las pilas de la consola y del sensor exterior, espera un minuto e instala pilas alcalinas nuevas respetando la polaridad.",
        "Si usas el adaptador de red, comprueba que coincide con la tensión y corriente indicadas en la consola y prueba otro enchufe.",
        "Limpia los contactos del compartimento con un paño seco; cambia un muelle oxidado o doblado solo si sale sin herramientas especiales.",
        "Aleja la consola de routers, microondas y teléfonos y acerca el sensor exterior para comprobar si desaparece el parpadeo.",
        "Reinicia la estación con su botón reset, si lo tiene, y vuelve a sincronizar el sensor según el manual, con ambos equipos juntos.",
        "Baja o apaga la retroiluminación en los ajustes; si es el desencadenante, la alimentación es demasiado débil."
      ],
      "replaceWhen": "Si el parpadeo continúa con pilas nuevas, otra fuente de alimentación y un reinicio, probablemente falla la pantalla o la placa. En un equipo básico sin piezas disponibles, sustituirlo suele ser más sensato que repararlo."
    },
    "it": {
      "intro": "Lo schermo lampeggiante di una stazione meteo intelligente dipende quasi sempre dall'alimentazione: batterie scariche nella base o nel sensore, oppure un alimentatore non adatto. Sostituisci prima le batterie e prova un'altra presa prima di sospettare un guasto dello schermo.",
      "causes": [
        "Batterie deboli nella base — il lampeggio peggiora quando si accende la retroilluminazione, soprattutto con la sola alimentazione a batteria.",
        "Alimentatore difettoso o con tensione errata — lo schermo sfarfalla a intermittenza anche con batterie nuove o senza batterie.",
        "Cattivo contatto nel vano batterie — lo schermo si riavvia quando tocchi o sposti la base.",
        "Interferenze radio o segnale del sensore instabile — lo schermo si aggiorna di continuo mentre la base cerca il sensore esterno.",
        "Guasto del display o della scheda — il lampeggio continua nonostante alimentazione corretta e batterie nuove."
      ],
      "steps": [
        "Togli le batterie dalla base e dal sensore esterno, attendi un minuto e inserisci batterie alcaline nuove rispettando le polarità.",
        "Se usi l'alimentatore, verifica che corrisponda a tensione e corrente riportate sulla base e prova un'altra presa.",
        "Pulisci i contatti del vano con un panno asciutto; sostituisci una molla arrugginita o piegata solo se si estrae senza attrezzi speciali.",
        "Allontana la base da router, microonde e telefoni e avvicina il sensore esterno per vedere se il lampeggio scompare.",
        "Reimposta la stazione con il tasto reset, se presente, e risincronizza il sensore come indicato nel manuale, con i due apparecchi vicini.",
        "Abbassa o disattiva la retroilluminazione nelle impostazioni; se è la causa, l'alimentazione è troppo debole."
      ],
      "replaceWhen": "Se il lampeggio persiste con batterie nuove, altra alimentazione e reset, è probabile che il display o la scheda siano guasti. Su un modello base senza ricambi disponibili, sostituirlo è di solito più sensato che ripararlo."
    },
    "nl": {
      "intro": "Een knipperend scherm bij een slim weerstation komt vrijwel altijd door de voeding: zwakke batterijen in het basisstation of de sensor, of een ongeschikte adapter. Vervang eerst de batterijen en probeer een ander stopcontact voordat u het scherm zelf verdenkt.",
      "causes": [
        "Zwakke batterijen in het basisstation — het knipperen wordt erger zodra de achtergrondverlichting aangaat, vooral bij uitsluitend batterijvoeding.",
        "Defecte of verkeerde netadapter — het scherm flikkert af en toe, ook met nieuwe batterijen of zonder batterijen.",
        "Slecht contact in het batterijvak — het scherm start opnieuw op als u het station aanraakt of verplaatst.",
        "Radiostoring of instabiel sensorsignaal — het scherm ververst steeds terwijl het station tevergeefs de buitensensor zoekt.",
        "Defect scherm of printplaat — het knipperen blijft bestaan ondanks juiste voeding en nieuwe batterijen."
      ],
      "steps": [
        "Haal de batterijen uit het station en de buitensensor, wacht een minuut en plaats nieuwe alkalinebatterijen met de juiste polariteit.",
        "Controleer bij netvoeding of de adapter overeenkomt met de spanning en stroom op het station en probeer een ander stopcontact.",
        "Veeg de batterijcontacten af met een droge doek; vervang een roestige of verbogen veer alleen als die zonder speciaal gereedschap losgaat.",
        "Plaats het station uit de buurt van router, magnetron en telefoon en zet de buitensensor dichterbij om te zien of het knipperen stopt.",
        "Reset het station met de resetknop, indien aanwezig, en synchroniseer de sensor opnieuw volgens de handleiding, beide naast elkaar.",
        "Dim of schakel de achtergrondverlichting uit in de instellingen; als dat de oorzaak is, is de voeding te zwak."
      ],
      "replaceWhen": "Blijft het scherm knipperen met nieuwe batterijen, een andere voeding en een reset, dan is waarschijnlijk het scherm of de printplaat defect. Bij een eenvoudig apparaat zonder verkrijgbare onderdelen is vervangen meestal verstandiger dan repareren."
    }
  },
  "laveur-rouleau-ne-tourne-plus": {
    "fr": {
      "intro": "Quand le rouleau d'un aspirateur laveur ne tourne plus, la cause la plus fréquente est un blocage mécanique : cheveux, fils ou débris enroulés autour de l'axe. Éteignez et débranchez l'appareil, retirez le rouleau et nettoyez-le avant de chercher une panne du moteur.",
      "causes": [
        "Cheveux et fils enroulés aux extrémités du rouleau — le rouleau tourne par à-coups, force, puis l'appareil s'arrête ou émet un bruit de frottement.",
        "Rouleau mal remis en place — il ne s'emboîte pas dans l'entraînement et reste immobile alors que le moteur ronronne.",
        "Corps étranger coincé dans le bloc de brossage — un petit objet bloque la rotation et le rouleau résiste quand on le tourne à la main.",
        "Batterie faible ou protection thermique déclenchée — la rotation faiblit ou s'arrête après un usage intensif, puis revient après repos.",
        "Courroie ou moteur de brosse usé — le rouleau reste libre à la main mais ne s'entraîne plus, même propre et bien monté."
      ],
      "steps": [
        "Éteignez l'appareil, débranchez-le du socle et retirez le rouleau en suivant la notice, puis tournez-le à la main pour sentir un éventuel point dur.",
        "Coupez avec des ciseaux les cheveux et fils enroulés aux extrémités et retirez-les, sans lame tranchante près de la brosse en matière souple.",
        "Inspectez le logement du rouleau et les embouts avec une lampe, puis retirez tout débris coincé à la main ou avec une pince à épiler.",
        "Rincez le rouleau à l'eau tiède, laissez-le sécher complètement, puis remettez-le en vérifiant qu'il s'emboîte bien dans l'entraînement côté moteur.",
        "Rechargez complètement la batterie, laissez refroidir l'appareil un moment, puis lancez un nettoyage court pour voir si la rotation reprend.",
        "Si le rouleau reste immobile, vérifiez dans la notice les pièces d'usure remplaçables par l'utilisateur, puis contactez le service après-vente sous garantie."
      ],
      "replaceWhen": "Si le rouleau propre et bien monté ne tourne toujours pas, le moteur de brosse ou la carte est probablement en cause. Une réparation coûteuse sur un appareil ancien à batterie fatiguée justifie plutôt un remplacement."
    },
    "en": {
      "intro": "When the roller on a wet-and-dry vacuum stops spinning, the most common cause is a mechanical jam from hair, thread or debris wound around the shaft. Switch off and unplug the machine, remove the roller and clean it before suspecting a motor fault.",
      "causes": [
        "Hair and thread wound round the roller ends — the roller turns in jerks, strains, then the machine stops or makes a scraping noise.",
        "Roller not seated properly — it fails to engage the drive and stays still while the motor hums.",
        "Foreign object trapped in the brush housing — a small item blocks rotation and the roller resists when turned by hand.",
        "Low battery or thermal protection tripped — spinning weakens or stops after heavy use, then returns after a rest.",
        "Worn belt or brush motor — the roller turns freely by hand but is no longer driven, even when clean and correctly fitted."
      ],
      "steps": [
        "Switch the machine off, take it off the dock and remove the roller as the manual shows, then turn it by hand to feel for any stiff spot.",
        "Snip the hair and thread wound round the ends with scissors and pull it away, keeping blades clear of the soft roller material.",
        "Look into the roller bay and end caps with a torch, and remove any trapped debris by hand or with tweezers.",
        "Rinse the roller in lukewarm water, let it dry completely, then refit it, checking it clicks onto the drive on the motor side.",
        "Recharge the battery fully, let the machine cool for a while, then run a short clean to see whether the roller spins again.",
        "If it still will not spin, check the manual for user-replaceable wear parts, then contact after-sales support if the machine is under warranty."
      ],
      "replaceWhen": "If a clean, correctly fitted roller still does not turn, the brush motor or circuit board is probably at fault. A costly repair on an older machine with a tired battery usually points towards replacement."
    },
    "de": {
      "intro": "Dreht sich die Walze eines Nass-Trocken-Saugers nicht mehr, ist meist eine mechanische Blockade durch Haare, Fäden oder Schmutz an der Achse schuld. Schalten Sie das Gerät aus, trennen Sie es von der Station, nehmen Sie die Walze heraus und reinigen Sie sie, bevor Sie einen Motorschaden vermuten.",
      "causes": [
        "Haare und Fäden an den Walzenenden — die Walze dreht ruckartig, quält sich, dann stoppt das Gerät oder schabt hörbar.",
        "Walze nicht richtig eingesetzt — sie greift nicht in den Antrieb, steht still, während der Motor brummt.",
        "Fremdkörper im Bürstengehäuse — ein kleiner Gegenstand blockiert die Drehung, die Walze lässt sich von Hand nur schwer drehen.",
        "Akku schwach oder Überhitzungsschutz ausgelöst — die Drehung lässt nach starker Nutzung nach oder stoppt und kehrt nach einer Pause zurück.",
        "Verschlissener Riemen oder Bürstenmotor — die Walze dreht sich von Hand frei, wird aber nicht mehr angetrieben, auch sauber und korrekt montiert."
      ],
      "steps": [
        "Schalten Sie das Gerät aus, nehmen Sie es von der Station und entfernen Sie die Walze laut Anleitung; drehen Sie sie von Hand und achten Sie auf Schwergängigkeit.",
        "Schneiden Sie Haare und Fäden an den Enden mit einer Schere ab und ziehen Sie sie heraus, ohne die weiche Walzenoberfläche zu verletzen.",
        "Leuchten Sie in den Walzenschacht und die Endkappen und entfernen Sie eingeklemmte Fremdkörper von Hand oder mit einer Pinzette.",
        "Spülen Sie die Walze mit lauwarmem Wasser, lassen Sie sie vollständig trocknen und setzen Sie sie so ein, dass sie am Antrieb einrastet.",
        "Laden Sie den Akku vollständig, lassen Sie das Gerät abkühlen und starten Sie eine kurze Reinigung, um zu prüfen, ob sich die Walze wieder dreht.",
        "Dreht sie sich weiter nicht, prüfen Sie in der Anleitung die vom Nutzer tauschbaren Verschleißteile und kontaktieren Sie bei Garantie den Kundendienst."
      ],
      "replaceWhen": "Dreht sich eine saubere, korrekt eingesetzte Walze weiterhin nicht, sind Bürstenmotor oder Platine wahrscheinlich defekt. Eine teure Reparatur bei einem älteren Gerät mit müdem Akku spricht eher für einen Ersatz."
    },
    "es": {
      "intro": "Cuando el rodillo de un aspirador lavador deja de girar, la causa más habitual es un atasco mecánico por pelos, hilos o restos enrollados en el eje. Apaga y desconecta el aparato, retira el rodillo y límpialo antes de sospechar de una avería del motor.",
      "causes": [
        "Pelos e hilos enrollados en los extremos del rodillo — gira a tirones, se esfuerza y el aparato se detiene o hace un ruido de roce.",
        "Rodillo mal colocado — no encaja en el accionamiento y permanece parado mientras el motor zumba.",
        "Objeto extraño atrapado en la unidad del cepillo — un objeto pequeño bloquea el giro y el rodillo ofrece resistencia al girarlo con la mano.",
        "Batería baja o protección térmica activada — el giro se debilita o se detiene tras un uso intenso y vuelve después de un descanso.",
        "Correa o motor del cepillo desgastado — el rodillo gira libre a mano pero ya no recibe accionamiento, aunque esté limpio y bien montado."
      ],
      "steps": [
        "Apaga el aparato, sácalo de la base y retira el rodillo como indica el manual; gíralo a mano para notar algún punto duro.",
        "Corta con unas tijeras los pelos e hilos enrollados en los extremos y retíralos, sin acercar la hoja al material blando del rodillo.",
        "Ilumina el alojamiento y las tapas laterales con una linterna y retira cualquier resto atascado a mano o con unas pinzas.",
        "Aclara el rodillo con agua tibia, déjalo secar por completo y vuelve a montarlo comprobando que encaja en el accionamiento del lado del motor.",
        "Carga la batería por completo, deja enfriar el aparato un rato y lanza una limpieza corta para ver si el rodillo vuelve a girar.",
        "Si sigue sin girar, consulta en el manual las piezas de desgaste que puede cambiar el usuario y contacta con el servicio técnico si está en garantía."
      ],
      "replaceWhen": "Si un rodillo limpio y bien montado sigue sin girar, probablemente falla el motor del cepillo o la placa. Una reparación cara en un aparato antiguo con la batería cansada justifica más bien sustituirlo."
    },
    "it": {
      "intro": "Quando il rullo di una lavapavimenti aspirante non gira più, la causa più comune è un blocco meccanico dovuto a capelli, fili o detriti avvolti sull'asse. Spegni e scollega l'apparecchio, rimuovi il rullo e puliscilo prima di sospettare un guasto del motore.",
      "causes": [
        "Capelli e fili avvolti alle estremità del rullo — gira a scatti, fa fatica e l'apparecchio si ferma o emette uno sfregamento.",
        "Rullo montato male — non si innesta nella trasmissione e resta fermo mentre il motore ronza.",
        "Corpo estraneo incastrato nel vano spazzola — un piccolo oggetto blocca la rotazione e il rullo oppone resistenza girandolo a mano.",
        "Batteria scarica o protezione termica scattata — la rotazione si indebolisce o si ferma dopo un uso intenso, poi torna dopo una pausa.",
        "Cinghia o motore della spazzola usurati — il rullo gira libero a mano ma non viene più trascinato, anche se pulito e ben montato."
      ],
      "steps": [
        "Spegni l'apparecchio, staccalo dalla base e rimuovi il rullo come indicato nel manuale; giralo a mano per sentire eventuali punti duri.",
        "Taglia con le forbici capelli e fili avvolti alle estremità e toglili, senza avvicinare la lama al materiale morbido del rullo.",
        "Illumina con una torcia l'alloggiamento e i tappi laterali e rimuovi i detriti incastrati a mano o con una pinzetta.",
        "Sciacqua il rullo con acqua tiepida, lascialo asciugare del tutto e rimontalo verificando che si innesti nella trasmissione lato motore.",
        "Ricarica completamente la batteria, lascia raffreddare l'apparecchio e avvia una pulizia breve per vedere se il rullo riprende a girare.",
        "Se non gira ancora, controlla nel manuale i ricambi sostituibili dall'utente e contatta l'assistenza se l'apparecchio è in garanzia."
      ],
      "replaceWhen": "Se un rullo pulito e ben montato continua a non girare, probabilmente è guasto il motore della spazzola o la scheda. Una riparazione costosa su un apparecchio vecchio con batteria affaticata fa preferire la sostituzione."
    },
    "nl": {
      "intro": "Als de rol van een nat-droogzuiger niet meer draait, is de meest voorkomende oorzaak een mechanische blokkade door haar, draad of vuil rond de as. Zet het apparaat uit, haal het van de lader, verwijder de rol en maak die schoon voordat u een motordefect vermoedt.",
      "causes": [
        "Haar en draad rond de uiteinden van de rol — de rol draait schokkerig, moet zwoegen en het apparaat stopt of schraapt hoorbaar.",
        "Rol niet goed geplaatst — hij grijpt niet in de aandrijving en staat stil terwijl de motor zoemt.",
        "Vreemd voorwerp vast in de borstelunit — een klein voorwerp blokkeert de draaiing en de rol voelt zwaar aan met de hand.",
        "Accu zwak of thermische beveiliging geactiveerd — het draaien neemt af of stopt na intensief gebruik en komt na een pauze terug.",
        "Versleten riem of borstelmotor — de rol draait vrij met de hand maar wordt niet meer aangedreven, ook schoon en juist geplaatst."
      ],
      "steps": [
        "Zet het apparaat uit, haal het van het dock en verwijder de rol zoals in de handleiding staat; draai hem met de hand en voel op een strakke plek.",
        "Knip haar en draad rond de uiteinden los met een schaar en trek het weg, zonder het mes langs het zachte rolmateriaal te halen.",
        "Bekijk het rolcompartiment en de eindkappen met een zaklamp en verwijder ingeklemd vuil met de hand of een pincet.",
        "Spoel de rol af met lauw water, laat hem volledig drogen en plaats hem terug zodat hij aan de motorzijde in de aandrijving klikt.",
        "Laad de accu volledig op, laat het apparaat afkoelen en start een korte reiniging om te zien of de rol weer draait.",
        "Draait hij nog niet, kijk in de handleiding naar slijtdelen die u zelf mag vervangen en neem bij garantie contact op met de klantenservice."
      ],
      "replaceWhen": "Als een schone, juist geplaatste rol nog steeds niet draait, is waarschijnlijk de borstelmotor of printplaat defect. Een dure reparatie aan een ouder apparaat met een vermoeide accu pleit eerder voor vervanging."
    }
  },
  "diffuseur-ne-vaporise-plus": {
    "fr": {
      "intro": "Un diffuseur d'huiles essentielles qui ne vaporise plus est le plus souvent encrassé : la plaque à ultrasons est recouverte de calcaire ou de résidus d'huile. Un nettoyage à l'eau vinaigrée et à l'alcool à brûler dilué règle la plupart des cas.",
      "causes": [
        "Plaque à ultrasons entartrée ou encrassée d'huile — la lumière et la pompe fonctionnent, mais aucune brume ne sort ou très peu.",
        "Niveau d'eau insuffisant ou dépassé — la sécurité manque d'eau coupe la brume, ou l'excès perturbe la vibration.",
        "Trop d'huile essentielle ou huile trop épaisse — un dépôt visqueux amortit la vibration de la plaque.",
        "Eau très calcaire — des dépôts blancs se forment rapidement sur la plaque et dans la cheminée de sortie.",
        "Alimentation ou circuit défaillant — aucun voyant ni bruit, ou le voyant s'allume sans jamais produire de brume malgré un nettoyage."
      ],
      "steps": [
        "Débranchez le diffuseur, videz l'eau restante et laissez-le sécher quelques minutes avant toute manipulation.",
        "Remplissez à demi d'eau avec un peu de vinaigre blanc, laissez agir dix minutes sans l'allumer, puis videz et rincez soigneusement.",
        "Frottez délicatement la plaque à ultrasons avec un coton-tige imbibé de vinaigre blanc ou d'alcool, sans rayer ni appuyer fort.",
        "Rincez à l'eau claire, essuyez la cheminée de sortie, puis remplissez avec la quantité d'eau indiquée entre les repères min et max.",
        "Ajoutez seulement quelques gouttes d'huile essentielle de qualité, puis relancez et vérifiez si la brume apparaît au bout d'une minute.",
        "Utilisez de l'eau déminéralisée ou filtrée et nettoyez l'appareil après quelques utilisations pour éviter le retour du calcaire."
      ],
      "replaceWhen": "Si la brume ne revient pas après un nettoyage soigné et que la plaque est fissurée, noircie ou que le circuit ne répond plus, la réparation est rarement possible. Ces appareils étant peu coûteux, le remplacement est généralement plus raisonnable."
    },
    "en": {
      "intro": "An essential-oil diffuser that has stopped misting is usually clogged: the ultrasonic plate is coated with limescale or oil residue. A clean with diluted white vinegar and a little alcohol, followed by a thorough rinse, solves most cases.",
      "causes": [
        "Ultrasonic plate scaled up or coated in oil — the light and pump work, but little or no mist comes out.",
        "Water level too low or too high — the low-water safety cuts the mist, or an overfill stops the plate vibrating properly.",
        "Too much essential oil or a thick oil — a sticky film dampens the vibration of the plate.",
        "Very hard water — white deposits build up quickly on the plate and in the mist outlet.",
        "Power or circuit fault — no light or sound at all, or the light comes on but no mist ever forms even after cleaning."
      ],
      "steps": [
        "Unplug the diffuser, empty any remaining water and let it dry for a few minutes before you handle it.",
        "Half fill with water and a little white vinegar, leave for ten minutes without switching on, then empty and rinse thoroughly.",
        "Gently wipe the ultrasonic plate with a cotton bud soaked in white vinegar or alcohol, without scratching or pressing hard.",
        "Rinse with clean water, wipe the mist outlet, then refill with the amount of water shown between the min and max marks.",
        "Add only a few drops of good-quality essential oil, switch on and check whether mist appears within a minute.",
        "Use distilled or filtered water and clean the unit after a few uses to stop limescale coming back."
      ],
      "replaceWhen": "If the mist does not return after a careful clean and the plate is cracked or blackened, or the circuit does not respond, repair is rarely possible. These units are inexpensive, so replacing is usually the more sensible choice."
    },
    "de": {
      "intro": "Ein Aromadiffuser, der keinen Nebel mehr erzeugt, ist meist verschmutzt: Die Ultraschallplatte ist mit Kalk oder Ölrückständen belegt. Eine Reinigung mit verdünntem Essig und etwas Alkohol, gefolgt von gründlichem Spülen, löst die allermeisten Fälle meist schon.",
      "causes": [
        "Ultraschallplatte verkalkt oder ölverschmutzt — Licht und Pumpe laufen, aber es kommt kaum oder kein Nebel heraus.",
        "Wasserstand zu niedrig oder zu hoch — der Trockenlaufschutz stoppt den Nebel, oder Überfüllung behindert die Schwingung der Platte.",
        "Zu viel ätherisches Öl oder zähflüssiges Öl — ein klebriger Film dämpft die Schwingung der Platte.",
        "Sehr hartes Wasser — weiße Ablagerungen bilden sich schnell auf der Platte und im Nebelauslass.",
        "Strom- oder Platinenfehler — weder Licht noch Geräusch, oder das Licht leuchtet, aber es entsteht auch nach Reinigung nie Nebel."
      ],
      "steps": [
        "Ziehen Sie den Netzstecker, leeren Sie das Restwasser und lassen Sie das Gerät einige Minuten trocknen, bevor Sie es anfassen.",
        "Füllen Sie es halb mit Wasser und etwas weißem Essig, lassen Sie es zehn Minuten ohne Betrieb stehen, leeren und spülen Sie es gründlich.",
        "Wischen Sie die Ultraschallplatte vorsichtig mit einem in Essig oder Alkohol getränkten Wattestäbchen ab, ohne zu kratzen oder stark zu drücken.",
        "Spülen Sie mit klarem Wasser, wischen Sie den Nebelauslass trocken und füllen Sie bis zwischen Min- und Max-Markierung auf.",
        "Geben Sie nur wenige Tropfen hochwertiges ätherisches Öl hinzu, schalten Sie ein und prüfen Sie, ob innerhalb einer Minute Nebel entsteht.",
        "Verwenden Sie destilliertes oder gefiltertes Wasser und reinigen Sie das Gerät nach einigen Anwendungen, damit der Kalk nicht wiederkehrt."
      ],
      "replaceWhen": "Kehrt der Nebel nach sorgfältiger Reinigung nicht zurück und ist die Platte gerissen oder geschwärzt oder reagiert die Elektronik nicht, ist eine Reparatur selten möglich. Da die Geräte günstig sind, ist ein Neukauf meist sinnvoller."
    },
    "es": {
      "intro": "Un difusor de aceites esenciales que ya no vaporiza suele estar obstruido: la placa de ultrasonidos se cubre de cal o de restos de aceite. Una limpieza con vinagre blanco diluido y un poco de alcohol resuelve la mayoría de los casos.",
      "causes": [
        "Placa de ultrasonidos con cal o aceite — la luz y la bomba funcionan, pero sale poca o ninguna bruma.",
        "Nivel de agua demasiado bajo o alto — la seguridad por falta de agua corta la bruma, o el exceso impide que la placa vibre bien.",
        "Demasiado aceite esencial o aceite espeso — una película pegajosa amortigua la vibración de la placa.",
        "Agua muy dura — se forman rápido depósitos blancos en la placa y en la salida de la bruma.",
        "Fallo de alimentación o de circuito — ni luz ni sonido, o la luz se enciende pero nunca se forma bruma tras limpiar."
      ],
      "steps": [
        "Desenchufa el difusor, vacía el agua restante y déjalo secar unos minutos antes de manipularlo.",
        "Llénalo hasta la mitad con agua y un poco de vinagre blanco, déjalo diez minutos sin encenderlo y luego vacía y aclara bien.",
        "Frota con suavidad la placa de ultrasonidos con un bastoncillo empapado en vinagre blanco o alcohol, sin rayar ni presionar fuerte.",
        "Aclara con agua limpia, seca la salida de la bruma y rellena con la cantidad indicada entre las marcas de mínimo y máximo.",
        "Añade solo unas gotas de aceite esencial de calidad, enciende y comprueba si aparece bruma en un minuto.",
        "Usa agua destilada o filtrada y limpia el aparato tras varios usos para evitar que vuelva la cal."
      ],
      "replaceWhen": "Si la bruma no vuelve tras una limpieza cuidadosa y la placa está agrietada u oscurecida, o el circuito no responde, rara vez compensa reparar. Al ser aparatos económicos, sustituirlo suele ser más razonable."
    },
    "it": {
      "intro": "Un diffusore di oli essenziali che non nebulizza più è quasi sempre intasato: la piastra a ultrasuoni si copre di calcare o residui d'olio. Una pulizia con aceto bianco diluito e un po' di alcol risolve la maggior parte dei casi.",
      "causes": [
        "Piastra a ultrasuoni incrostata di calcare o d'olio — luce e pompa funzionano, ma esce poca o nessuna nebbia.",
        "Livello dell'acqua troppo basso o troppo alto — la sicurezza per mancanza d'acqua interrompe la nebbia, oppure l'eccesso impedisce la vibrazione.",
        "Troppo olio essenziale o olio denso — una pellicola appiccicosa smorza la vibrazione della piastra.",
        "Acqua molto dura — depositi bianchi si formano in fretta sulla piastra e nell'uscita della nebbia.",
        "Guasto di alimentazione o circuito — nessuna luce né suono, oppure la luce si accende ma non si forma mai nebbia dopo la pulizia."
      ],
      "steps": [
        "Scollega il diffusore, svuota l'acqua residua e lascialo asciugare qualche minuto prima di maneggiarlo.",
        "Riempilo a metà con acqua e un po' di aceto bianco, lascia agire dieci minuti senza accenderlo, poi svuota e sciacqua bene.",
        "Strofina con delicatezza la piastra a ultrasuoni con un cotton fioc imbevuto di aceto bianco o alcol, senza graffiare né premere forte.",
        "Sciacqua con acqua pulita, asciuga l'uscita della nebbia e riempi con la quantità indicata tra i segni min e max.",
        "Aggiungi solo poche gocce di olio essenziale di qualità, accendi e verifica se compare la nebbia entro un minuto.",
        "Usa acqua distillata o filtrata e pulisci l'apparecchio dopo qualche utilizzo per evitare che il calcare ritorni."
      ],
      "replaceWhen": "Se la nebbia non torna dopo una pulizia accurata e la piastra è incrinata o annerita, oppure il circuito non risponde, la riparazione è raramente possibile. Poiché questi apparecchi costano poco, sostituirlo è di solito più sensato."
    },
    "nl": {
      "intro": "Een aromadiffuser die geen nevel meer maakt, zit meestal verstopt: de ultrasone plaat is bedekt met kalk of olieresten. Schoonmaken met verdunde witte azijn en een beetje alcohol, gevolgd door grondig spoelen, lost de meeste gevallen op.",
      "causes": [
        "Ultrasone plaat verkalkt of vervuild met olie — lampje en pomp werken, maar er komt weinig of geen nevel uit.",
        "Waterniveau te laag of te hoog — de droogloopbeveiliging stopt de nevel, of overvulling belemmert het trillen van de plaat.",
        "Te veel etherische olie of een dikke olie — een kleverige laag dempt de trilling van de plaat.",
        "Zeer hard water — witte afzettingen ontstaan snel op de plaat en in de nevelopening.",
        "Voedings- of printplaatfout — helemaal geen licht of geluid, of het lampje brandt maar er komt ook na schoonmaken geen nevel."
      ],
      "steps": [
        "Haal de stekker eruit, giet het resterende water weg en laat het apparaat enkele minuten drogen voordat u het aanraakt.",
        "Vul het half met water en een beetje witte azijn, laat tien minuten staan zonder aan te zetten, leeg en spoel daarna grondig.",
        "Wrijf de ultrasone plaat voorzichtig schoon met een wattenstaafje met witte azijn of alcohol, zonder te krassen of hard te drukken.",
        "Spoel met schoon water, veeg de nevelopening droog en vul bij tot tussen de min- en max-markering.",
        "Voeg slechts een paar druppels kwalitatieve etherische olie toe, zet aan en kijk of er binnen een minuut nevel komt.",
        "Gebruik gedestilleerd of gefilterd water en reinig het apparaat na enkele keren gebruik zodat de kalk niet terugkomt."
      ],
      "replaceWhen": "Komt de nevel na zorgvuldig schoonmaken niet terug en is de plaat gebarsten of zwart, of reageert de elektronica niet, dan is repareren zelden mogelijk. Omdat deze apparaten goedkoop zijn, is vervangen meestal verstandiger."
    }
  },
  "climatiseur-mobile-fuite-eau": {
    "fr": {
      "intro": "Un climatiseur mobile qui fuit de l'eau est le plus souvent mal installé ou victime d'un bac de condensats plein ou d'un tuyau de vidange mal raccordé. Éteignez l'appareil, débranchez-le et vérifiez l'inclinaison, le bac et le tuyau avant toute autre piste.",
      "causes": [
        "Bac de condensats plein — l'eau déborde par la base surtout par temps humide, et l'appareil peut afficher un message de bac plein.",
        "Appareil incliné ou posé sur un sol non plan — l'eau s'accumule d'un côté et s'écoule hors de la zone de collecte.",
        "Tuyau de vidange coudé, bouché ou mal fixé — l'eau stagne dans le tuyau puis goutte au raccord ou au bas de l'appareil.",
        "Filtre encrassé ou grille d'aspiration bloquée — l'évaporateur givre puis dégèle en produisant plus d'eau que le bac ne peut en évacuer.",
        "Joint ou bouchon de vidange mal remis — une fuite régulière apparaît au bas de la carrosserie après une vidange manuelle."
      ],
      "steps": [
        "Éteignez le climatiseur, débranchez-le et épongez l'eau au sol pour éviter tout risque de glissade ou contact avec la prise électrique.",
        "Placez l'appareil bien d'aplomb sur un sol plan, avec un espace libre autour, et vérifiez qu'il n'a pas été couché pendant le transport.",
        "Videz le bac de condensats par le bouchon prévu, avec un récipient en dessous, puis remettez le bouchon et son joint correctement.",
        "Contrôlez le tuyau de vidange : pas de pli, pente descendante continue, raccord bien enfoncé, et sortie dirigée vers une évacuation adaptée.",
        "Nettoyez le filtre à l'eau tiède, laissez-le sécher, remettez-le en place et dégagez les grilles d'aspiration de toute poussière.",
        "Relancez le climatiseur sur une période plus courte et surveillez le sol ; si l'eau revient, notez où elle sort avant de contacter le support."
      ],
      "replaceWhen": "Si l'eau sort d'un point interne alors que bac, tuyau, filtre et installation sont corrects, un défaut du circuit ou des soudures est probable et non réparable à domicile. Sur un appareil ancien, le remplacement est généralement plus économique que l'intervention d'un technicien."
    },
    "en": {
      "intro": "A portable air conditioner that leaks water is usually badly positioned, or has a full condensate tank or a poorly connected drain hose. Switch it off, unplug it and check its tilt, the tank and the hose before looking for anything else.",
      "causes": [
        "Condensate tank full — water overflows at the base, particularly in humid weather, and the unit may show a tank-full message.",
        "Unit tilted or standing on an uneven floor — water collects to one side and runs outside the collection area.",
        "Drain hose kinked, blocked or loosely fitted — water stays in the hose and then drips at the connector or the bottom of the unit.",
        "Dirty filter or blocked intake grille — the evaporator ices up then thaws, producing more water than the tank can handle.",
        "Drain plug or seal refitted badly — a steady leak appears at the bottom of the casing after manual draining."
      ],
      "steps": [
        "Switch the unit off, unplug it and mop up the floor so there is no slipping risk or water near the plug.",
        "Stand the unit upright on a level floor with clear space around it, and make sure it was not laid on its side during transport.",
        "Empty the condensate tank through the drain plug with a container underneath, then refit the plug and its seal correctly.",
        "Check the drain hose: no kinks, a continuous downward slope, a firmly pushed-on connector and an outlet leading to a suitable drain.",
        "Wash the filter in lukewarm water, let it dry, refit it and clear dust from the intake grilles.",
        "Run the unit for a shorter spell and watch the floor; if water returns, note where it comes from before contacting support."
      ],
      "replaceWhen": "If water comes from an internal point while the tank, hose, filter and set-up are all correct, a circuit or joint fault is likely and cannot be fixed at home. On an older unit, replacing it is usually cheaper than a technician's call-out."
    },
    "de": {
      "intro": "Verliert eine mobile Klimaanlage Wasser, ist sie meist falsch aufgestellt, oder der Kondensatbehälter ist voll oder der Ablaufschlauch schlecht angeschlossen. Schalten Sie das Gerät aus, ziehen Sie den Stecker und prüfen Sie Neigung, Behälter und Schlauch, bevor Sie anderes vermuten.",
      "causes": [
        "Kondensatbehälter voll — Wasser läuft am Boden über, besonders bei feuchtem Wetter, und das Gerät zeigt eventuell eine Voll-Meldung.",
        "Gerät schief oder auf unebenem Boden — Wasser sammelt sich einseitig und läuft außerhalb des Auffangbereichs ab.",
        "Ablaufschlauch geknickt, verstopft oder lose — Wasser staut sich im Schlauch und tropft dann am Anschluss oder unten am Gerät.",
        "Verschmutzter Filter oder blockiertes Ansauggitter — der Verdampfer vereist und taut ab, wodurch mehr Wasser entsteht, als der Behälter aufnimmt.",
        "Ablassstopfen oder Dichtung falsch eingesetzt — nach manuellem Entleeren tritt unten am Gehäuse stetig Wasser aus."
      ],
      "steps": [
        "Schalten Sie das Gerät aus, ziehen Sie den Stecker und wischen Sie den Boden trocken, damit keine Rutschgefahr und kein Wasser an der Steckdose besteht.",
        "Stellen Sie das Gerät senkrecht auf ebenen Boden mit freiem Abstand ringsum und prüfen Sie, dass es nicht liegend transportiert wurde.",
        "Entleeren Sie den Kondensatbehälter über den Ablassstopfen in ein untergestelltes Gefäß und setzen Sie Stopfen samt Dichtung korrekt ein.",
        "Prüfen Sie den Ablaufschlauch: keine Knicke, durchgehendes Gefälle, fest aufgesteckter Anschluss und Auslass in einen geeigneten Abfluss.",
        "Waschen Sie den Filter in lauwarmem Wasser, lassen Sie ihn trocknen, setzen Sie ihn ein und befreien Sie die Ansauggitter von Staub.",
        "Betreiben Sie das Gerät kürzer und beobachten Sie den Boden; kehrt das Wasser zurück, notieren Sie die Austrittsstelle, bevor Sie den Support kontaktieren."
      ],
      "replaceWhen": "Tritt Wasser an einer inneren Stelle aus, obwohl Behälter, Schlauch, Filter und Aufstellung stimmen, liegt wahrscheinlich ein Fehler im Kreislauf oder an einer Lötstelle vor, den man zu Hause nicht beheben kann. Bei älteren Geräten ist ein Neukauf meist günstiger als der Techniker."
    },
    "es": {
      "intro": "Un aire acondicionado portátil que gotea agua suele estar mal colocado, o tener el depósito de condensados lleno o el tubo de desagüe mal conectado. Apágalo, desenchúfalo y revisa la inclinación, el depósito y el tubo antes de buscar otra causa.",
      "causes": [
        "Depósito de condensados lleno — el agua rebosa por la base, sobre todo con tiempo húmedo, y puede aparecer un aviso de depósito lleno.",
        "Aparato inclinado o sobre suelo desnivelado — el agua se acumula en un lado y sale fuera de la zona de recogida.",
        "Tubo de desagüe doblado, obstruido o mal sujeto — el agua se queda en el tubo y gotea en el conector o en la parte baja.",
        "Filtro sucio o rejilla de entrada bloqueada — el evaporador se congela y luego se descongela, generando más agua de la que admite el depósito.",
        "Tapón de drenaje o junta mal colocados — aparece una fuga constante en la parte baja de la carcasa tras vaciar manualmente."
      ],
      "steps": [
        "Apaga el aparato, desenchúfalo y seca el suelo para evitar resbalones y que el agua llegue al enchufe.",
        "Coloca el aparato en vertical sobre un suelo plano con espacio libre alrededor y comprueba que no se transportó tumbado.",
        "Vacía el depósito de condensados por el tapón de drenaje con un recipiente debajo y vuelve a colocar el tapón con su junta correctamente.",
        "Revisa el tubo de desagüe: sin dobleces, con pendiente descendente continua, conector bien encajado y salida dirigida a un desagüe adecuado.",
        "Lava el filtro con agua tibia, déjalo secar, colócalo de nuevo y retira el polvo de las rejillas de entrada.",
        "Pon el aparato a funcionar un rato más corto y vigila el suelo; si el agua vuelve, anota por dónde sale antes de contactar con el servicio técnico."
      ],
      "replaceWhen": "Si el agua sale de un punto interno y depósito, tubo, filtro e instalación son correctos, probablemente hay un fallo del circuito o de una soldadura que no se arregla en casa. En un aparato antiguo suele salir más barato sustituirlo que llamar al técnico."
    },
    "it": {
      "intro": "Un condizionatore portatile che perde acqua è di solito posizionato male, oppure ha la vaschetta della condensa piena o il tubo di scarico collegato male. Spegnilo, scollegalo e controlla inclinazione, vaschetta e tubo prima di cercare altre cause.",
      "causes": [
        "Vaschetta della condensa piena — l'acqua trabocca dalla base, soprattutto col clima umido, e può comparire un avviso di serbatoio pieno.",
        "Apparecchio inclinato o su pavimento non piano — l'acqua si accumula da un lato e fuoriesce dalla zona di raccolta.",
        "Tubo di scarico piegato, ostruito o fissato male — l'acqua ristagna nel tubo e poi gocciola al raccordo o in basso.",
        "Filtro sporco o griglia di aspirazione bloccata — l'evaporatore si ghiaccia e poi si scongela, producendo più acqua di quanta la vaschetta riesca a gestire.",
        "Tappo di scarico o guarnizione rimontati male — compare una perdita costante in basso nella scocca dopo uno svuotamento manuale."
      ],
      "steps": [
        "Spegni il condizionatore, scollegalo e asciuga il pavimento per evitare scivolamenti e il contatto dell'acqua con la presa.",
        "Posiziona l'apparecchio in verticale su un pavimento piano con spazio libero intorno e verifica che non sia stato trasportato coricato.",
        "Svuota la vaschetta della condensa dal tappo di scarico con un recipiente sotto, poi rimetti tappo e guarnizione correttamente.",
        "Controlla il tubo di scarico: nessuna piega, pendenza continua verso il basso, raccordo ben inserito e uscita verso uno scarico adatto.",
        "Lava il filtro con acqua tiepida, lascialo asciugare, rimontalo e libera le griglie di aspirazione dalla polvere.",
        "Fai funzionare l'apparecchio per un periodo più breve e osserva il pavimento; se l'acqua torna, annota da dove esce prima di contattare l'assistenza."
      ],
      "replaceWhen": "Se l'acqua esce da un punto interno mentre vaschetta, tubo, filtro e installazione sono corretti, è probabile un guasto del circuito o di una saldatura non riparabile in casa. Su un apparecchio datato conviene di solito sostituirlo anziché chiamare il tecnico."
    },
    "nl": {
      "intro": "Een mobiele airco die water lekt, staat meestal verkeerd of heeft een vol condensreservoir of een slecht aangesloten afvoerslang. Zet hem uit, haal de stekker eruit en controleer de stand, het reservoir en de slang voordat u verder zoekt.",
      "causes": [
        "Condensreservoir vol — water loopt over aan de onderkant, vooral bij vochtig weer, en het apparaat kan een melding voor vol reservoir tonen.",
        "Apparaat scheef of op een ongelijke vloer — water verzamelt aan één kant en stroomt buiten het opvanggebied.",
        "Afvoerslang geknikt, verstopt of los — water blijft in de slang staan en druppelt dan bij de aansluiting of onderaan.",
        "Vuil filter of geblokkeerd aanzuigrooster — de verdamper bevriest en dooit weer, waardoor meer water ontstaat dan het reservoir aankan.",
        "Aftapplug of afdichting verkeerd teruggeplaatst — na handmatig legen ontstaat een constante lekkage onderaan de behuizing."
      ],
      "steps": [
        "Zet het apparaat uit, trek de stekker eruit en neem de vloer droog om uitglijden en water bij het stopcontact te voorkomen.",
        "Zet het apparaat rechtop op een vlakke vloer met vrije ruimte eromheen en controleer dat het niet liggend is vervoerd.",
        "Leeg het condensreservoir via de aftapplug met een bak eronder en plaats de plug met afdichting correct terug.",
        "Controleer de afvoerslang: geen knikken, doorlopend afschot, stevig aangesloten koppeling en een uitgang naar een geschikt afvoerpunt.",
        "Was het filter in lauw water, laat het drogen, plaats het terug en verwijder stof van de aanzuigroosters.",
        "Laat het apparaat korter draaien en let op de vloer; komt het water terug, noteer dan waar het vandaan komt voordat u de klantenservice belt."
      ],
      "replaceWhen": "Komt het water uit een intern punt terwijl reservoir, slang, filter en opstelling kloppen, dan is waarschijnlijk het circuit of een soldeerverbinding defect, wat u thuis niet kunt herstellen. Bij een ouder apparaat is vervangen meestal goedkoper dan een monteur."
    }
  },
  "lave-vaisselle-code-erreur-e15": {
    "fr": {
      "intro": "Le code E15 signifie couramment, sur de nombreux lave-vaisselle, que le système de protection anti-fuite s'est déclenché : de l'eau est détectée dans le bac de fond et l'arrivée d'eau est coupée. Confirmez ce sens dans la notice, puis cherchez l'origine de la fuite avant de relancer.",
      "causes": [
        "Eau dans le bac de fond après une fuite — le flotteur de sécurité bloque l'arrivée d'eau et l'appareil refuse de démarrer.",
        "Trop de mousse ou de produit de rinçage — la mousse déborde dans le bac et déclenche la détection de fuite.",
        "Joint de porte ou bras de lavage qui laisse passer l'eau — des traces d'eau apparaissent autour de la porte ou sous l'appareil.",
        "Flexible ou raccord d'alimentation qui goutte — de l'humidité est visible à l'arrière ou au niveau du robinet d'arrivée.",
        "Capteur ou flotteur de fond coincé — le code reste affiché alors que le bac est sec, après nettoyage et séchage."
      ],
      "steps": [
        "Arrêtez le lave-vaisselle, débranchez-le et fermez le robinet d'arrivée d'eau ; consultez la notice pour confirmer ce que signifie E15 sur votre modèle.",
        "Retirez la vaisselle et les paniers, absorbez l'eau au fond de la cuve avec une éponge, puis vérifiez les bras de lavage et le filtre.",
        "Si vous le pouvez en toute sécurité, inclinez doucement l'appareil selon la notice pour vider le bac de fond, ou laissez-le sécher une nuit.",
        "Contrôlez le joint de porte, le flexible d'arrivée et leurs raccords à la recherche de traces d'humidité ; resserrez à la main les raccords visibles.",
        "Réduisez la dose de produit, évitez le liquide vaisselle à la main, puis relancez un cycle court à vide et surveillez l'apparition du code.",
        "Si E15 revient ou si la fuite persiste, laissez le robinet fermé, l'appareil débranché et appelez un technicien ou le service après-vente."
      ],
      "replaceWhen": "Si le bac de fond se remplit de nouveau malgré des joints et raccords intacts, la fuite vient d'une pièce interne, parfois coûteuse. Sur un lave-vaisselle ancien, le remplacement l'emporte souvent sur la facture de réparation."
    },
    "en": {
      "intro": "On many dishwashers, error code E15 commonly means the leak-protection system has tripped: water has been detected in the base tray and the water inlet is shut off. Check your manual to confirm this, then find the source of the leak before restarting.",
      "causes": [
        "Water in the base tray after a leak — the safety float shuts off the inlet and the machine refuses to start.",
        "Too much foam or rinse aid — suds overflow into the base and trigger the leak detection.",
        "Door seal or spray arm letting water out — water marks appear around the door or under the machine.",
        "Dripping inlet hose or connector — dampness is visible at the back or at the supply tap.",
        "Stuck base sensor or float — the code stays on although the tray is dry, even after cleaning and drying."
      ],
      "steps": [
        "Switch the dishwasher off, unplug it and close the water tap; check the manual to confirm what E15 means on your model.",
        "Remove the dishes and racks, soak up any water in the tub with a sponge, then check the spray arms and the filter.",
        "If you can do it safely, tilt the machine gently as the manual allows to drain the base tray, or leave it to dry overnight.",
        "Check the door seal, the inlet hose and its connectors for damp; tighten visible connectors by hand only.",
        "Use less detergent, avoid hand-washing liquid, then run a short empty cycle and watch whether the code returns.",
        "If E15 returns or the leak persists, keep the tap closed and the machine unplugged and call a technician or the manufacturer's support."
      ],
      "replaceWhen": "If the base tray fills again even though seals and connectors are intact, the leak comes from an internal part that can be costly to replace. On an older dishwasher, replacing it often beats the cost of repair."
    },
    "de": {
      "intro": "Der Fehlercode E15 bedeutet bei vielen Geschirrspülern üblicherweise, dass der Leckageschutz ausgelöst hat: Im Bodenblech wurde Wasser erkannt und der Wasserzulauf wird gesperrt. Bestätigen Sie die Bedeutung in der Anleitung und suchen Sie die Leckage, bevor Sie neu starten.",
      "causes": [
        "Wasser im Bodenblech nach einer Leckage — der Sicherheitsschwimmer sperrt den Zulauf, die Maschine startet nicht.",
        "Zu viel Schaum oder Klarspüler — Schaum läuft in die Bodenwanne und löst die Leckageerkennung aus.",
        "Türdichtung oder Sprüharm lässt Wasser austreten — Wasserspuren erscheinen an der Tür oder unter dem Gerät.",
        "Tropfender Zulaufschlauch oder Anschluss — Feuchtigkeit ist hinten oder am Wasserhahn sichtbar.",
        "Klemmender Bodensensor oder Schwimmer — der Code bleibt trotz trockenem Bodenblech nach Reinigung und Trocknung bestehen."
      ],
      "steps": [
        "Schalten Sie den Geschirrspüler aus, ziehen Sie den Stecker, schließen Sie den Wasserhahn und prüfen Sie in der Anleitung, was E15 bei Ihrem Modell bedeutet.",
        "Nehmen Sie Geschirr und Körbe heraus, saugen Sie Wasser im Innenraum mit einem Schwamm auf und prüfen Sie Sprüharme und Sieb.",
        "Wenn es sicher möglich ist, kippen Sie das Gerät wie in der Anleitung erlaubt leicht, um die Bodenwanne zu leeren, oder lassen Sie es über Nacht trocknen.",
        "Prüfen Sie Türdichtung, Zulaufschlauch und Anschlüsse auf Feuchtigkeit; ziehen Sie sichtbare Anschlüsse nur von Hand nach.",
        "Verwenden Sie weniger Reiniger, kein Handspülmittel, starten Sie ein kurzes Leerprogramm und beobachten Sie, ob der Code wiederkommt.",
        "Kehrt E15 zurück oder bleibt die Leckage, lassen Sie den Hahn zu, das Gerät ausgesteckt und rufen Sie einen Techniker oder den Kundendienst."
      ],
      "replaceWhen": "Füllt sich das Bodenblech trotz intakter Dichtungen und Anschlüsse erneut, stammt die Leckage von einem inneren Bauteil, dessen Tausch teuer sein kann. Bei einem älteren Geschirrspüler ist ein Neugerät oft günstiger als die Reparatur."
    },
    "es": {
      "intro": "En muchos lavavajillas, el código E15 suele indicar que se ha activado la protección antifugas: se detecta agua en la bandeja de la base y se corta la entrada de agua. Confirma este significado en el manual y busca el origen de la fuga antes de reiniciar.",
      "causes": [
        "Agua en la bandeja de la base tras una fuga — el flotador de seguridad corta la entrada y el aparato no arranca.",
        "Exceso de espuma o abrillantador — la espuma rebosa hacia la base y activa la detección de fuga.",
        "Junta de la puerta o brazo de lavado que deja salir agua — aparecen marcas de agua alrededor de la puerta o bajo el aparato.",
        "Manguera o conexión de entrada que gotea — se ve humedad en la parte trasera o en el grifo de alimentación.",
        "Sensor o flotador de la base atascado — el código sigue apareciendo aunque la bandeja esté seca tras limpiar y secar."
      ],
      "steps": [
        "Apaga el lavavajillas, desenchúfalo y cierra el grifo del agua; consulta el manual para confirmar qué significa E15 en tu modelo.",
        "Retira la vajilla y los cestos, absorbe con una esponja el agua del fondo de la cuba y revisa los brazos de lavado y el filtro.",
        "Si puedes hacerlo con seguridad, inclina suavemente el aparato como permita el manual para vaciar la bandeja, o déjalo secar toda la noche.",
        "Revisa la junta de la puerta, la manguera de entrada y sus conexiones en busca de humedad; aprieta solo a mano las conexiones visibles.",
        "Usa menos detergente, evita el lavavajillas líquido de fregar a mano, lanza un ciclo corto en vacío y observa si el código vuelve.",
        "Si E15 reaparece o la fuga continúa, deja el grifo cerrado y el aparato desenchufado y llama a un técnico o al servicio de asistencia."
      ],
      "replaceWhen": "Si la bandeja de la base vuelve a llenarse aunque juntas y conexiones estén intactas, la fuga proviene de una pieza interna que puede ser cara de cambiar. En un lavavajillas antiguo, sustituirlo suele compensar más que repararlo."
    },
    "it": {
      "intro": "Su molte lavastoviglie il codice E15 indica comunemente che è intervenuta la protezione antiperdita: è stata rilevata acqua nel basamento e il carico dell'acqua viene bloccato. Conferma il significato nel manuale e cerca l'origine della perdita prima di riavviare.",
      "causes": [
        "Acqua nel basamento dopo una perdita — il galleggiante di sicurezza blocca il carico e la macchina non parte.",
        "Troppa schiuma o brillantante — la schiuma trabocca nel basamento e attiva il rilevamento della perdita.",
        "Guarnizione dello sportello o braccio irroratore che lascia uscire acqua — compaiono tracce d'acqua intorno allo sportello o sotto la macchina.",
        "Tubo o raccordo di carico che gocciola — si nota umidità sul retro o al rubinetto di alimentazione.",
        "Sensore o galleggiante del basamento incastrato — il codice resta visibile anche con il basamento asciutto dopo pulizia e asciugatura."
      ],
      "steps": [
        "Spegni la lavastoviglie, scollega la spina e chiudi il rubinetto dell'acqua; consulta il manuale per confermare cosa significa E15 sul tuo modello.",
        "Togli stoviglie e cestelli, assorbi con una spugna l'acqua sul fondo della vasca e controlla bracci irroratori e filtro.",
        "Se puoi farlo in sicurezza, inclina con delicatezza l'apparecchio come consentito dal manuale per svuotare il basamento, oppure lascialo asciugare una notte.",
        "Controlla guarnizione dello sportello, tubo di carico e raccordi cercando umidità; stringi a mano solo i raccordi visibili.",
        "Usa meno detersivo, evita il detersivo liquido per piatti a mano, avvia un ciclo breve a vuoto e osserva se il codice ricompare.",
        "Se E15 ritorna o la perdita continua, tieni il rubinetto chiuso e la macchina scollegata e chiama un tecnico o l'assistenza."
      ],
      "replaceWhen": "Se il basamento si riempie di nuovo nonostante guarnizioni e raccordi integri, la perdita proviene da un componente interno la cui sostituzione può essere costosa. Su una lavastoviglie datata, sostituirla spesso conviene più della riparazione."
    },
    "nl": {
      "intro": "Op veel vaatwassers betekent foutcode E15 meestal dat de lekbeveiliging is geactiveerd: er is water in de bodembak gedetecteerd en de watertoevoer wordt afgesloten. Controleer de betekenis in de handleiding en zoek de lekbron voordat u opnieuw start.",
      "causes": [
        "Water in de bodembak na een lekkage — de veiligheidsvlotter sluit de toevoer af en de machine start niet.",
        "Te veel schuim of spoelmiddel — schuim loopt over in de bodembak en activeert de lekdetectie.",
        "Deurrubber of sproeiarm laat water door — waterspoor rond de deur of onder het apparaat.",
        "Druppelende toevoerslang of koppeling — vocht zichtbaar aan de achterkant of bij de aanvoerkraan.",
        "Vastzittende bodemsensor of vlotter — de code blijft staan terwijl de bak droog is, ook na schoonmaken en drogen."
      ],
      "steps": [
        "Zet de vaatwasser uit, trek de stekker eruit, draai de waterkraan dicht en controleer in de handleiding wat E15 bij uw model betekent.",
        "Haal vaat en manden eruit, zuig het water onderin met een spons op en controleer de sproeiarmen en het filter.",
        "Kantel het apparaat alleen voorzichtig, zoals de handleiding toestaat, om de bodembak te legen als dat veilig kan, of laat het een nacht drogen.",
        "Controleer deurrubber, toevoerslang en koppelingen op vocht; draai zichtbare koppelingen alleen met de hand aan.",
        "Gebruik minder wasmiddel, geen afwasmiddel voor handwas, draai een kort leeg programma en kijk of de code terugkomt.",
        "Komt E15 terug of blijft het lekken, laat de kraan dicht en de stekker eruit en bel een monteur of de klantenservice."
      ],
      "replaceWhen": "Vult de bodembak zich opnieuw terwijl rubbers en koppelingen intact zijn, dan komt het lek van een intern onderdeel dat duur kan zijn om te vervangen. Bij een oudere vaatwasser is een nieuw apparaat vaak voordeliger dan de reparatie."
    }
  },
  "laveur-reservoir-eau-fuit": {
    "fr": {
      "intro": "Un réservoir d'eau propre qui fuit pendant la charge vient le plus souvent d'un joint ou d'un bouchon mal positionné, ou d'un réservoir fissuré. Retirez-le du socle, séchez tout et vérifiez joints et fissures avant de remettre l'appareil en charge.",
      "causes": [
        "Joint de bouchon ou de valve usé, déplacé ou sale — l'eau suinte au niveau du bouchon ou de la valve d'écoulement.",
        "Réservoir mal enclenché sur le socle — l'eau s'écoule par le raccord au lieu d'alimenter la brosse.",
        "Réservoir fissuré ou déformé — l'eau coule d'une ligne fine, souvent après un choc ou à cause d'eau trop chaude.",
        "Réservoir trop rempli ou rempli de produit moussant — la pression et la mousse forcent l'eau à sortir par les orifices d'aération.",
        "Valve d'écoulement bloquée par du calcaire ou des résidus — elle ne se ferme plus complètement et goutte même à l'arrêt."
      ],
      "steps": [
        "Éteignez l'appareil, débranchez le socle de charge et épongez l'eau autour des contacts électriques avant toute autre manipulation.",
        "Retirez le réservoir, videz-le complètement et séchez-le ; ne remettez l'appareil sur le socle qu'une fois que contacts et socle sont secs.",
        "Examinez le joint du bouchon et de la valve, nettoyez-les au chiffon doux, et remettez-les bien à plat dans leur logement.",
        "Inspectez le réservoir à la lumière à la recherche de fissures, puis testez-le rempli au-dessus d'un évier, sans l'incliner.",
        "Remplissez avec de l'eau froide ou tiède uniquement, jusqu'au repère maximal, sans produit moussant autre que celui recommandé par le fabricant.",
        "Si le joint est abîmé ou le réservoir fissuré, commandez la pièce d'origine ; n'utilisez pas de colle sur un réservoir d'eau d'appareil électrique."
      ],
      "replaceWhen": "Si le réservoir est fissuré et que la pièce n'est plus vendue, ou si l'eau est entrée dans le socle ou la zone électronique, l'appareil devient risqué à utiliser. Remplacer l'ensemble est alors plus prudent qu'une réparation de fortune."
    },
    "en": {
      "intro": "A clean water tank that leaks while the machine is charging is most often down to a worn or misplaced seal or cap, or a cracked tank. Take the tank off the dock, dry everything and check the seals and any cracks before charging again.",
      "causes": [
        "Worn, shifted or dirty cap or valve seal — water seeps from the cap or the outlet valve.",
        "Tank not clicked fully onto the dock — water runs out through the connector instead of feeding the brush.",
        "Cracked or warped tank — water leaks along a fine line, often after a knock or from using water that was too hot.",
        "Tank overfilled or filled with a foaming product — pressure and suds force water out through the vent holes.",
        "Outlet valve blocked by limescale or residue — it no longer closes fully and drips even when idle."
      ],
      "steps": [
        "Switch the machine off, unplug the charging dock and mop up water around the electrical contacts before doing anything else.",
        "Remove the tank, empty it completely and dry it; only put the machine back on the dock once the contacts and dock are dry.",
        "Examine the cap and valve seal, wipe them with a soft cloth and press them back flat into their seat.",
        "Hold the tank up to the light to look for cracks, then test it filled over a sink without tilting it.",
        "Fill with cold or lukewarm water only, up to the maximum mark, and no foaming product other than the one the manufacturer recommends.",
        "If the seal is damaged or the tank cracked, order the original part; do not use glue on the water tank of an electrical appliance."
      ],
      "replaceWhen": "If the tank is cracked and the part is no longer sold, or water has got into the dock or electronics area, the machine becomes unsafe to use. Replacing the whole unit is then wiser than a makeshift repair."
    },
    "de": {
      "intro": "Ein Frischwassertank, der beim Laden leckt, liegt meist an einer abgenutzten oder verrutschten Dichtung bzw. Verschlusskappe oder an einem Riss im Tank. Nehmen Sie den Tank von der Station, trocknen Sie alles und prüfen Sie Dichtungen und Risse, bevor Sie wieder laden.",
      "causes": [
        "Verschlusskappen- oder Ventildichtung abgenutzt, verrutscht oder verschmutzt — Wasser sickert an Kappe oder Auslassventil.",
        "Tank nicht richtig auf der Station eingerastet — Wasser läuft am Anschluss aus, statt die Bürste zu versorgen.",
        "Tank gerissen oder verformt — Wasser läuft entlang einer feinen Linie, oft nach einem Stoß oder zu heißem Wasser.",
        "Tank überfüllt oder mit schäumendem Mittel befüllt — Druck und Schaum drücken Wasser durch die Belüftungsöffnungen.",
        "Auslassventil durch Kalk oder Rückstände blockiert — es schließt nicht mehr ganz und tropft auch im Stillstand."
      ],
      "steps": [
        "Schalten Sie das Gerät aus, trennen Sie die Ladestation vom Strom und wischen Sie Wasser an den elektrischen Kontakten auf, bevor Sie weitermachen.",
        "Nehmen Sie den Tank ab, leeren und trocknen Sie ihn vollständig; setzen Sie das Gerät erst wieder auf die Station, wenn Kontakte und Station trocken sind.",
        "Prüfen Sie Dichtung von Kappe und Ventil, wischen Sie sie mit einem weichen Tuch ab und drücken Sie sie flach in ihren Sitz.",
        "Halten Sie den Tank gegen das Licht, um Risse zu erkennen, und testen Sie ihn gefüllt über dem Waschbecken, ohne ihn zu kippen.",
        "Füllen Sie nur kaltes oder lauwarmes Wasser bis zur Max-Markierung ein und kein schäumendes Mittel außer dem vom Hersteller empfohlenen.",
        "Bei beschädigter Dichtung oder gerissenem Tank bestellen Sie das Originalteil; kleben Sie den Wassertank eines Elektrogeräts nicht."
      ],
      "replaceWhen": "Ist der Tank gerissen und das Teil nicht mehr erhältlich, oder ist Wasser in Station oder Elektronik gelangt, ist die weitere Nutzung riskant. Dann ist der Austausch des Geräts klüger als eine Notreparatur."
    },
    "es": {
      "intro": "Un depósito de agua limpia que gotea durante la carga suele deberse a una junta o tapón desgastado o mal colocado, o a un depósito agrietado. Retíralo de la base, seca todo y revisa juntas y grietas antes de volver a cargar.",
      "causes": [
        "Junta del tapón o de la válvula desgastada, desplazada o sucia — el agua rezuma por el tapón o la válvula de salida.",
        "Depósito no encajado del todo en la base — el agua sale por el conector en lugar de alimentar el cepillo.",
        "Depósito agrietado o deformado — el agua gotea por una línea fina, a menudo tras un golpe o por usar agua demasiado caliente.",
        "Depósito demasiado lleno o con producto espumoso — la presión y la espuma fuerzan la salida de agua por los orificios de ventilación.",
        "Válvula de salida bloqueada por cal o residuos — ya no cierra del todo y gotea incluso en reposo."
      ],
      "steps": [
        "Apaga el aparato, desconecta la base de carga y seca el agua alrededor de los contactos eléctricos antes de hacer nada más.",
        "Retira el depósito, vacíalo por completo y sécalo; no vuelvas a poner el aparato en la base hasta que contactos y base estén secos.",
        "Examina la junta del tapón y de la válvula, límpialas con un paño suave y colócalas bien planas en su alojamiento.",
        "Mira el depósito a contraluz para detectar grietas y pruébalo lleno sobre el fregadero, sin inclinarlo.",
        "Llena solo con agua fría o tibia hasta la marca máxima y sin productos espumosos que no recomiende el fabricante.",
        "Si la junta está dañada o el depósito agrietado, pide la pieza original; no uses pegamento en el depósito de agua de un aparato eléctrico."
      ],
      "replaceWhen": "Si el depósito está agrietado y la pieza ya no se vende, o ha entrado agua en la base o en la zona electrónica, usar el aparato resulta arriesgado. Entonces es más prudente sustituirlo entero que hacer una reparación de fortuna."
    },
    "it": {
      "intro": "Un serbatoio dell'acqua pulita che perde durante la ricarica dipende in genere da una guarnizione o un tappo usurati o fuori posto, oppure da un serbatoio incrinato. Toglilo dalla base, asciuga tutto e controlla guarnizioni e crepe prima di ricaricare.",
      "causes": [
        "Guarnizione del tappo o della valvola usurata, spostata o sporca — l'acqua trasuda dal tappo o dalla valvola di uscita.",
        "Serbatoio non agganciato bene alla base — l'acqua esce dal raccordo invece di alimentare la spazzola.",
        "Serbatoio incrinato o deformato — l'acqua cola da una linea sottile, spesso dopo un urto o per acqua troppo calda.",
        "Serbatoio troppo pieno o con prodotto schiumogeno — pressione e schiuma spingono l'acqua fuori dai fori di sfiato.",
        "Valvola di uscita bloccata da calcare o residui — non si chiude più del tutto e gocciola anche a riposo."
      ],
      "steps": [
        "Spegni l'apparecchio, scollega la base di ricarica e asciuga l'acqua intorno ai contatti elettrici prima di fare altro.",
        "Rimuovi il serbatoio, svuotalo completamente e asciugalo; rimetti l'apparecchio sulla base solo quando contatti e base sono asciutti.",
        "Esamina la guarnizione del tappo e della valvola, puliscile con un panno morbido e rimettile ben piatte nella sede.",
        "Guarda il serbatoio controluce per trovare crepe e provalo pieno sopra il lavandino, senza inclinarlo.",
        "Riempi solo con acqua fredda o tiepida fino al segno massimo e senza prodotti schiumogeni diversi da quello consigliato dal produttore.",
        "Se la guarnizione è danneggiata o il serbatoio incrinato, ordina il ricambio originale; non usare colla sul serbatoio di un apparecchio elettrico."
      ],
      "replaceWhen": "Se il serbatoio è incrinato e il ricambio non è più in vendita, oppure l'acqua è entrata nella base o nell'elettronica, l'uso diventa rischioso. Allora sostituire l'apparecchio è più prudente di una riparazione di fortuna."
    },
    "nl": {
      "intro": "Een schoonwatertank die tijdens het laden lekt, komt meestal door een versleten of verschoven afdichting of dop, of door een gebarsten tank. Haal de tank van het dock, droog alles af en controleer afdichtingen en scheuren voordat u opnieuw laadt.",
      "causes": [
        "Dop- of klepafdichting versleten, verschoven of vuil — water sijpelt langs de dop of de uitlaatklep.",
        "Tank niet goed op het dock vastgeklikt — water stroomt via de koppeling weg in plaats van naar de borstel.",
        "Gebarsten of vervormde tank — water lekt langs een fijne lijn, vaak na een stoot of door te heet water.",
        "Tank te vol of gevuld met een schuimend middel — druk en schuim persen water door de ventilatiegaatjes.",
        "Uitlaatklep geblokkeerd door kalk of resten — hij sluit niet meer volledig en druppelt ook in rust."
      ],
      "steps": [
        "Zet het apparaat uit, haal het dock van het stroomnet en veeg water rond de elektrische contacten weg voordat u verdergaat.",
        "Verwijder de tank, leeg en droog hem volledig; zet het apparaat pas terug op het dock als contacten en dock droog zijn.",
        "Bekijk de afdichting van dop en klep, veeg ze af met een zachte doek en druk ze plat terug in hun zitting.",
        "Houd de tank tegen het licht om scheuren te zien en test hem gevuld boven de gootsteen, zonder te kantelen.",
        "Vul alleen met koud of lauw water tot de maximummarkering en gebruik geen schuimend middel behalve het door de fabrikant aanbevolen.",
        "Is de afdichting beschadigd of de tank gebarsten, bestel dan het originele onderdeel; gebruik geen lijm op de watertank van een elektrisch apparaat."
      ],
      "replaceWhen": "Is de tank gebarsten en het onderdeel niet meer te koop, of is er water in het dock of de elektronica gekomen, dan is gebruik riskant. Dan is vervanging van het hele apparaat verstandiger dan een noodreparatie."
    }
  },
  "laveur-vitres-tombe": {
    "fr": {
      "intro": "Un robot laveur de vitres qui décroche perd en général son aspiration : vitre ou semelle sales, joint usé, batterie de la pompe faible ou fuite d'air. Ne le laissez jamais sans sa corde de sécurité fixée, et retirez-le de la vitre dès que l'alarme d'aspiration retentit.",
      "causes": [
        "Vitre ou semelle encrassée — la poussière et la graisse empêchent le joint d'étanchéité de coller, et l'aspiration chute vite.",
        "Joint d'aspiration usé ou déformé — l'air s'échappe sur les bords et l'appareil émet un bip d'avertissement régulier.",
        "Batterie de secours ou de la pompe faible — en cas de coupure ou de charge insuffisante, l'aspiration se relâche progressivement.",
        "Cadre, joint de fenêtre ou surface en relief — le robot passe sur une aspérité, perd l'étanchéité et glisse ou se bloque.",
        "Chiffon saturé ou produit nettoyant glissant — la surface devient glissante et le robot patine au lieu d'adhérer."
      ],
      "steps": [
        "Fixez toujours la corde de sécurité à un point solide à l'intérieur avant de poser le robot, et ne le faites pas fonctionner sans elle.",
        "Chargez complètement le robot et son bloc de secours, puis vérifiez que l'aspiration démarre avant de le lâcher sur la vitre.",
        "Nettoyez la vitre au préalable et essuyez la semelle et le joint d'aspiration avec un chiffon humide non pelucheux, puis séchez-les.",
        "Remplacez le chiffon de nettoyage dès qu'il est saturé ou sale ; évitez un excès de produit qui rend la vitre glissante.",
        "Retirez le robot de la vitre dès qu'il bipe ou perd l'aspiration, et ne vous penchez jamais d'une fenêtre élevée pour le récupérer.",
        "Si le joint est abîmé, remplacez-le par la pièce d'origine ; ne l'utilisez pas à l'extérieur d'étages élevés tant que l'aspiration n'est pas fiable."
      ],
      "replaceWhen": "Si l'aspiration reste faible avec joint neuf, appareil propre et batterie chargée, la pompe ou la batterie est défaillante et le risque de chute est réel. Il est plus prudent de remplacer l'appareil que de continuer à l'utiliser."
    },
    "en": {
      "intro": "A window-cleaning robot that loses grip has usually lost suction: a dirty pane or base, a worn seal, a weak pump battery or an air leak. Never use it without its safety rope attached, and take it off the glass as soon as the suction alarm sounds.",
      "causes": [
        "Dirty pane or base — dust and grease stop the sealing edge gripping, and suction drops quickly.",
        "Worn or warped suction seal — air escapes at the edges and the unit gives a regular warning beep.",
        "Weak backup or pump battery — after a power cut or an insufficient charge, suction fades gradually.",
        "Frame, window seal or textured surface — the robot rides over a ridge, loses the seal, then slips or stalls.",
        "Saturated cloth or slippery cleaning fluid — the surface becomes slick and the robot skids instead of gripping."
      ],
      "steps": [
        "Always tie the safety rope to a solid fixing point indoors before placing the robot, and never run it without the rope.",
        "Fully charge the robot and its backup unit, then check the suction starts up before you let it go on the glass.",
        "Clean the glass first and wipe the base and suction seal with a damp lint-free cloth, then dry them.",
        "Replace the cleaning cloth as soon as it is saturated or dirty, and avoid too much cleaner, which makes the glass slippery.",
        "Take the robot off the glass as soon as it beeps or loses suction, and never lean out of a high window to retrieve it.",
        "If the seal is damaged, fit the original part, and do not use the robot on high-level outside glass until suction is reliable."
      ],
      "replaceWhen": "If suction stays weak with a new seal, a clean unit and a charged battery, the pump or battery is failing and the risk of a fall is real. It is safer to replace the appliance than to keep using it."
    },
    "de": {
      "intro": "Verliert ein Fensterputzroboter den Halt, hat er meist den Unterdruck verloren: schmutzige Scheibe oder Unterseite, verschlissene Dichtung, schwacher Pumpenakku oder eine Luftleckage. Nutzen Sie ihn nie ohne befestigte Sicherungsleine und nehmen Sie ihn bei Saugalarm sofort von der Scheibe.",
      "causes": [
        "Verschmutzte Scheibe oder Unterseite — Staub und Fett verhindern, dass die Dichtlippe haftet, und der Unterdruck sinkt schnell.",
        "Verschlissene oder verzogene Saugdichtung — Luft entweicht an den Rändern und das Gerät piept regelmäßig.",
        "Schwacher Notakku oder Pumpenakku — nach Stromausfall oder zu geringer Ladung lässt der Unterdruck allmählich nach.",
        "Rahmen, Fensterdichtung oder strukturierte Fläche — der Roboter fährt über eine Kante, verliert die Abdichtung und rutscht oder bleibt stehen.",
        "Gesättigtes Tuch oder rutschiger Reiniger — die Fläche wird glitschig und der Roboter rutscht, statt zu haften."
      ],
      "steps": [
        "Befestigen Sie die Sicherungsleine immer an einem stabilen Punkt im Innenraum, bevor Sie den Roboter ansetzen, und betreiben Sie ihn nie ohne Leine.",
        "Laden Sie Roboter und Notstromeinheit vollständig auf und prüfen Sie, dass der Unterdruck aufbaut, bevor Sie ihn auf der Scheibe loslassen.",
        "Reinigen Sie die Scheibe vorab und wischen Sie Unterseite und Saugdichtung mit einem feuchten, fusselfreien Tuch ab; danach trocknen.",
        "Tauschen Sie das Reinigungstuch aus, sobald es gesättigt oder schmutzig ist, und verwenden Sie wenig Reiniger, der die Scheibe glitschig macht.",
        "Nehmen Sie den Roboter bei Piepton oder Unterdruckverlust sofort ab und lehnen Sie sich bei hohen Fenstern nie hinaus, um ihn zu bergen.",
        "Ist die Dichtung beschädigt, setzen Sie das Originalteil ein; setzen Sie ihn an hohen Außenscheiben erst ein, wenn der Unterdruck zuverlässig ist."
      ],
      "replaceWhen": "Bleibt der Unterdruck mit neuer Dichtung, sauberem Gerät und geladenem Akku schwach, ist Pumpe oder Akku defekt und die Absturzgefahr real. Es ist sicherer, das Gerät zu ersetzen, als es weiter zu benutzen."
    },
    "es": {
      "intro": "Un robot limpiacristales que se despega suele haber perdido succión: cristal o base sucios, junta desgastada, batería de la bomba débil o una fuga de aire. No lo uses nunca sin la cuerda de seguridad sujeta y retíralo del cristal en cuanto suene la alarma de succión.",
      "causes": [
        "Cristal o base sucios — el polvo y la grasa impiden que el borde de sellado se adhiera y la succión baja rápido.",
        "Junta de succión desgastada o deformada — el aire se escapa por los bordes y el aparato emite un pitido de aviso regular.",
        "Batería de respaldo o de la bomba débil — tras un corte de corriente o una carga insuficiente, la succión se debilita poco a poco.",
        "Marco, junta de ventana o superficie con relieve — el robot pasa por un resalte, pierde el sellado y se desliza o se bloquea.",
        "Paño saturado o producto resbaladizo — la superficie se vuelve deslizante y el robot patina en lugar de adherirse."
      ],
      "steps": [
        "Ata siempre la cuerda de seguridad a un punto firme del interior antes de colocar el robot y no lo uses nunca sin ella.",
        "Carga por completo el robot y su unidad de respaldo y comprueba que la succión se activa antes de soltarlo sobre el cristal.",
        "Limpia antes el cristal y pasa un paño húmedo sin pelusa por la base y la junta de succión; luego sécalas.",
        "Cambia el paño de limpieza en cuanto esté saturado o sucio y evita el exceso de producto, que vuelve resbaladizo el cristal.",
        "Retira el robot del cristal en cuanto pite o pierda succión, y no te asomes nunca por una ventana alta para recuperarlo.",
        "Si la junta está dañada, monta la pieza original y no lo uses en cristales exteriores altos mientras la succión no sea fiable."
      ],
      "replaceWhen": "Si la succión sigue débil con una junta nueva, el aparato limpio y la batería cargada, la bomba o la batería falla y el riesgo de caída es real. Es más seguro sustituir el aparato que seguir usándolo."
    },
    "it": {
      "intro": "Un robot lavavetri che perde aderenza ha di solito perso l'aspirazione: vetro o base sporchi, guarnizione usurata, batteria della pompa debole o una perdita d'aria. Non usarlo mai senza la corda di sicurezza fissata e toglilo dal vetro appena suona l'allarme di aspirazione.",
      "causes": [
        "Vetro o base sporchi — polvere e grasso impediscono al bordo di tenuta di aderire e l'aspirazione cala in fretta.",
        "Guarnizione di aspirazione usurata o deformata — l'aria sfugge dai bordi e l'apparecchio emette un segnale acustico regolare.",
        "Batteria di riserva o della pompa debole — dopo un'interruzione di corrente o una carica insufficiente, l'aspirazione cala gradualmente.",
        "Telaio, guarnizione della finestra o superficie in rilievo — il robot supera un dislivello, perde la tenuta e scivola o si blocca.",
        "Panno saturo o detergente scivoloso — la superficie diventa scivolosa e il robot pattina invece di aderire."
      ],
      "steps": [
        "Fissa sempre la corda di sicurezza a un punto solido all'interno prima di appoggiare il robot e non usarlo mai senza di essa.",
        "Carica completamente il robot e la sua unità di riserva e verifica che l'aspirazione si attivi prima di lasciarlo sul vetro.",
        "Pulisci prima il vetro e passa un panno umido privo di pelucchi su base e guarnizione di aspirazione, poi asciugale.",
        "Sostituisci il panno di pulizia appena è saturo o sporco ed evita eccessi di detergente, che rendono il vetro scivoloso.",
        "Togli il robot dal vetro appena emette il segnale o perde aspirazione e non sporgerti mai da una finestra alta per recuperarlo.",
        "Se la guarnizione è danneggiata, montane una originale e non usarlo su vetri esterni in quota finché l'aspirazione non è affidabile."
      ],
      "replaceWhen": "Se l'aspirazione resta debole con guarnizione nuova, apparecchio pulito e batteria carica, la pompa o la batteria è in avaria e il rischio di caduta è reale. È più sicuro sostituire l'apparecchio che continuare a usarlo."
    },
    "nl": {
      "intro": "Een ruitenrobot die grip verliest, heeft meestal zuigkracht verloren: vuil glas of vuile onderkant, versleten afdichting, zwakke pompaccu of een luchtlek. Gebruik hem nooit zonder vastgemaakt veiligheidskoord en haal hem van het glas zodra het zuigalarm klinkt.",
      "causes": [
        "Vuil glas of vuile onderkant — stof en vet laten de afdichtrand niet plakken en de zuigkracht neemt snel af.",
        "Versleten of vervormde zuigafdichting — lucht ontsnapt langs de randen en het apparaat piept regelmatig als waarschuwing.",
        "Zwakke noodaccu of pompaccu — na stroomuitval of onvoldoende lading zakt de zuigkracht geleidelijk weg.",
        "Kozijn, raamafdichting of reliëfoppervlak — de robot rijdt over een drempel, verliest de afdichting en glijdt of blijft staan.",
        "Verzadigde doek of gladde schoonmaakvloeistof — het oppervlak wordt glad en de robot slipt in plaats van te hechten."
      ],
      "steps": [
        "Maak het veiligheidskoord altijd vast aan een stevig punt binnen voordat u de robot plaatst en gebruik hem nooit zonder koord.",
        "Laad robot en noodunit volledig op en controleer of de zuigkracht opbouwt voordat u hem op het glas loslaat.",
        "Reinig eerst het glas en veeg onderkant en zuigafdichting af met een vochtige pluisvrije doek; droog ze daarna.",
        "Vervang de schoonmaakdoek zodra hij verzadigd of vuil is en gebruik weinig reiniger, want teveel maakt het glas glad.",
        "Haal de robot van het glas zodra hij piept of zuigkracht verliest en leun nooit uit een hoog raam om hem te pakken.",
        "Is de afdichting beschadigd, plaats dan het originele onderdeel en gebruik hem niet op hoog gelegen buitenramen tot de zuigkracht betrouwbaar is."
      ],
      "replaceWhen": "Blijft de zuigkracht zwak met nieuwe afdichting, schoon apparaat en volle accu, dan is de pomp of accu defect en het valgevaar echt. Het is veiliger het apparaat te vervangen dan het te blijven gebruiken."
    }
  },
  "laveur-vitres-trace-centrale": {
    "fr": {
      "intro": "Une trace au centre de la vitre vient presque toujours d'un chiffon encrassé ou d'une zone de passage où la saleté s'accumule. Le robot ramène la poussière vers le milieu de sa trajectoire, puis l'étale à chaque aller-retour au lieu de l'évacuer vers les bords.",
      "causes": [
        "Chiffon saturé de saleté — il essuie moins bien au centre du robot, où la pression est la plus forte, et laisse une bande sombre.",
        "Chiffon mal fixé ou plissé — un pli crée une ligne nette qui se répète exactement au même endroit à chaque passage.",
        "Vitre trop poussiéreuse au départ — le robot rassemble la saleté en un cordon central qu'il repasse sans pouvoir l'absorber.",
        "Trop peu de produit nettoyant — le chiffon sèche en milieu de course et frotte sur la saleté au lieu de la dissoudre."
      ],
      "steps": [
        "Débranchez le robot, retirez le chiffon et lavez-le à la main à l'eau tiède savonneuse, sans adoucissant, puis laissez-le sécher complètement avant réutilisation.",
        "Contrôlez que le chiffon est bien tendu et sans pli sur toute la largeur, en suivant le schéma de fixation de la notice.",
        "Passez d'abord un chiffon humide sur les bords et le cadre de la vitre pour enlever la poussière et le sable qui seront entraînés au centre.",
        "Pulvérisez uniformément le produit recommandé par le fabricant sur le chiffon ou la vitre, sans excès, pour que le robot ne glisse pas.",
        "Lancez un second cycle sur le mode de trajectoire en croisillons, puis nettoyez la bande de roulement et le joint d'aspiration avec un coton humide."
      ],
      "replaceWhen": "Si le chiffon est usé et que la trace persiste malgré un nettoyage complet, c'est l'accessoire à changer, pas le robot. Remplacez le robot seulement si l'aspiration faiblit durablement ou si la chenille patine, car la réparation coûte souvent plus cher que l'achat d'un neuf."
    },
    "en": {
      "intro": "A streak down the middle of the glass is almost always caused by a dirty cleaning pad or by grime collecting along the robot's centre line. The robot drags dust inwards and then smears it back and forth on every pass instead of pushing it out to the edges.",
      "causes": [
        "Pad saturated with dirt — it wipes poorly at the robot's centre, where pressure is highest, and leaves a dark band behind.",
        "Pad fitted loosely or creased — a fold leaves a sharp line that repeats in exactly the same spot on every pass.",
        "Very dusty glass to begin with — the robot gathers the dirt into a central ridge and keeps running over it without absorbing it.",
        "Too little cleaning liquid — the pad dries out mid-run and rubs the dirt around instead of dissolving it."
      ],
      "steps": [
        "Switch off and unplug the robot, remove the pad and hand-wash it in warm soapy water without fabric softener, then let it dry fully before reuse.",
        "Check the pad is stretched tight and flat across its full width, following the fitting diagram in the manual.",
        "Wipe the edges and frame of the window with a damp cloth first, so dust and grit are not carried into the middle by the robot.",
        "Spray the manufacturer's recommended cleaner evenly over the pad or glass, without soaking it, so the robot can still grip properly.",
        "Run a second cycle in the criss-cross cleaning pattern, then clean the drive track and the suction seal with a damp cotton bud."
      ],
      "replaceWhen": "If the pad is worn out and the streak stays after a thorough clean, the pad needs replacing, not the robot. Only replace the robot if suction keeps weakening or the tracks slip, because a repair usually costs more than buying a new one."
    },
    "de": {
      "intro": "Ein Streifen in der Glasmitte entsteht fast immer durch ein verschmutztes Reinigungspad oder durch Schmutz, der sich entlang der Mittellinie des Roboters sammelt. Der Roboter schiebt Staub nach innen und verschmiert ihn bei jedem Durchgang, statt ihn zum Rand zu transportieren.",
      "causes": [
        "Mit Schmutz gesättigtes Pad — es wischt in der Mitte, wo der Druck am höchsten ist, schlechter und hinterlässt ein dunkles Band.",
        "Locker oder faltig aufgesetztes Pad — eine Falte zeichnet bei jedem Durchgang exakt an derselben Stelle eine scharfe Linie.",
        "Sehr staubige Scheibe zu Beginn — der Roboter schiebt den Schmutz zu einem mittigen Wulst zusammen und fährt wiederholt darüber, ohne ihn aufzunehmen.",
        "Zu wenig Reinigungsflüssigkeit — das Pad trocknet während der Fahrt und reibt den Schmutz nur herum, statt ihn zu lösen."
      ],
      "steps": [
        "Roboter ausschalten und vom Netz trennen, Pad abnehmen und in warmem Seifenwasser ohne Weichspüler von Hand waschen, danach vollständig trocknen lassen.",
        "Prüfen Sie, dass das Pad über die gesamte Breite straff und faltenfrei sitzt, und folgen Sie dabei der Befestigungsskizze in der Anleitung.",
        "Wischen Sie zuerst Rand und Rahmen des Fensters mit einem feuchten Tuch ab, damit Staub und Sand nicht in die Mitte gezogen werden.",
        "Sprühen Sie das vom Hersteller empfohlene Mittel gleichmäßig auf Pad oder Scheibe, ohne sie zu durchnässen, damit der Roboter weiter griffig bleibt.",
        "Starten Sie einen zweiten Durchgang im Kreuzmuster und reinigen Sie anschließend Laufband und Saugdichtung mit einem feuchten Wattestäbchen."
      ],
      "replaceWhen": "Ist das Pad abgenutzt und der Streifen bleibt trotz gründlicher Reinigung, ersetzen Sie das Pad, nicht den Roboter. Ein neues Gerät lohnt erst, wenn die Saugkraft dauerhaft nachlässt oder die Laufbänder rutschen, weil eine Reparatur meist teurer ist."
    },
    "es": {
      "intro": "Una marca en el centro del cristal casi siempre se debe a una bayeta sucia o a la suciedad que se acumula en la línea central del robot. El robot arrastra el polvo hacia dentro y lo extiende en cada pasada en lugar de empujarlo hacia los bordes.",
      "causes": [
        "Bayeta saturada de suciedad — limpia peor en el centro del robot, donde hay más presión, y deja una franja oscura.",
        "Bayeta mal colocada o con arrugas — un pliegue marca una línea nítida que se repite en el mismo punto en cada pasada.",
        "Cristal muy polvoriento al empezar — el robot junta la suciedad en un cordón central y pasa una y otra vez sin absorberla.",
        "Poco producto limpiador — la bayeta se seca a mitad del recorrido y arrastra la suciedad en vez de disolverla."
      ],
      "steps": [
        "Apague y desenchufe el robot, retire la bayeta y lávela a mano con agua tibia y jabón, sin suavizante, dejándola secar del todo antes de usarla.",
        "Compruebe que la bayeta queda tensa y sin arrugas en todo el ancho, siguiendo el esquema de colocación del manual.",
        "Pase antes un paño húmedo por los bordes y el marco de la ventana para que el polvo y la arenilla no se arrastren al centro.",
        "Pulverice de forma uniforme el limpiador recomendado por el fabricante sobre la bayeta o el cristal, sin empaparlo, para que el robot no resbale.",
        "Haga una segunda pasada en modo de recorrido cruzado y limpie después la banda de rodadura y la junta de succión con un bastoncillo húmedo."
      ],
      "replaceWhen": "Si la bayeta está desgastada y la marca persiste tras una limpieza a fondo, lo que hay que cambiar es la bayeta, no el robot. Solo compensa sustituir el robot si pierde succión de forma continua o las orugas patinan, porque la reparación suele salir más cara."
    },
    "it": {
      "intro": "Un alone al centro del vetro dipende quasi sempre da un panno sporco o dallo sporco che si accumula lungo la linea centrale del robot. Il robot spinge la polvere verso l'interno e la spalma a ogni passata, invece di portarla verso i bordi.",
      "causes": [
        "Panno saturo di sporco — pulisce peggio al centro del robot, dove la pressione è maggiore, e lascia una fascia scura.",
        "Panno montato male o con pieghe — una piega lascia una riga netta che si ripete nello stesso punto a ogni passata.",
        "Vetro molto polveroso all'inizio — il robot raccoglie lo sporco in un cordone centrale e ci passa sopra più volte senza assorbirlo.",
        "Poco detergente — il panno si asciuga a metà percorso e sposta lo sporco invece di scioglierlo."
      ],
      "steps": [
        "Spegni e scollega il robot, togli il panno e lavalo a mano con acqua tiepida e sapone, senza ammorbidente, lasciandolo asciugare completamente.",
        "Verifica che il panno sia ben teso e senza pieghe su tutta la larghezza, seguendo lo schema di montaggio riportato nel manuale.",
        "Passa prima un panno umido su bordi e telaio della finestra, così polvere e granelli non vengono trascinati verso il centro.",
        "Spruzza in modo uniforme il detergente indicato dal produttore sul panno o sul vetro, senza inzupparlo, perché il robot mantenga la presa.",
        "Avvia un secondo ciclo con percorso a croce, poi pulisci cingoli e guarnizione di aspirazione con un cotton fioc inumidito."
      ],
      "replaceWhen": "Se il panno è consumato e l'alone resta dopo una pulizia accurata, va sostituito il panno, non il robot. Conviene cambiare l'apparecchio solo se l'aspirazione cala in modo costante o i cingoli slittano, perché la riparazione di solito costa più di un modello nuovo."
    },
    "nl": {
      "intro": "Een streep in het midden van het glas komt bijna altijd door een vuil reinigingsdoekje of door vuil dat zich langs de middenlijn van de robot ophoopt. De robot duwt stof naar binnen en smeert het bij elke beurt uit in plaats van het naar de randen te verplaatsen.",
      "causes": [
        "Doekje vol vuil — het veegt in het midden, waar de druk het hoogst is, slechter en laat een donkere baan achter.",
        "Doekje los of gekreukt bevestigd — een vouw laat bij elke beurt op precies dezelfde plek een scherpe lijn achter.",
        "Erg stoffig glas vooraf — de robot duwt het vuil samen tot een middenrib en rijdt er steeds overheen zonder het op te nemen.",
        "Te weinig reinigingsmiddel — het doekje droogt halverwege op en wrijft het vuil rond in plaats van het op te lossen."
      ],
      "steps": [
        "Schakel de robot uit en haal de stekker eruit, verwijder het doekje en was het met de hand in lauw zeepwater zonder wasverzachter. Laat het volledig drogen.",
        "Controleer of het doekje over de volledige breedte strak en zonder vouwen zit, volgens het bevestigingsschema in de handleiding.",
        "Veeg eerst de randen en het kozijn van het raam af met een vochtige doek, zodat stof en zand niet naar het midden worden meegenomen.",
        "Spuit het door de fabrikant aanbevolen middel gelijkmatig op het doekje of het glas, zonder te doordrenken, zodat de robot grip houdt.",
        "Start een tweede ronde in het kruispatroon en maak daarna de loopband en de zuigafdichting schoon met een vochtig wattenstaafje."
      ],
      "replaceWhen": "Is het doekje versleten en blijft de streep na een grondige schoonmaak zichtbaar, vervang dan het doekje en niet de robot. Een nieuwe robot loont pas als de zuigkracht blijvend afneemt of de banden slippen, omdat reparatie meestal duurder uitvalt."
    }
  },
  "ne-chauffe-plus": {
    "fr": {
      "intro": "Un airfryer qui ne chauffe plus a le plus souvent un problème d'alimentation, un panier mal enclenché ou une protection thermique déclenchée. Si le ventilateur tourne mais que l'air reste froid, la résistance ou son fusible est généralement en cause.",
      "causes": [
        "Panier mal enclenché — un interrupteur de sécurité coupe la chauffe tant que le tiroir n'est pas complètement fermé.",
        "Prise ou rallonge défaillante — l'appareil s'allume faiblement ou pas du tout sur une multiprise surchargée ou abîmée.",
        "Protection thermique déclenchée — après une surchauffe due à un encrassement ou à une aération bouchée, le fusible coupe la chauffe.",
        "Résistance ou sonde de température défectueuse — le ventilateur tourne et l'écran s'allume, mais l'air reste tiède ou froid."
      ],
      "steps": [
        "Débranchez l'appareil, laissez-le refroidir, puis rebranchez-le directement sur une prise murale que vous avez testée avec un autre appareil, sans rallonge.",
        "Retirez le tiroir puis réinsérez-le à fond jusqu'au clic, et vérifiez qu'aucune miette ne bloque le contacteur de fermeture.",
        "Nettoyez le fond du tiroir, la grille et les orifices d'aération, car la graisse accumulée peut déclencher la protection thermique.",
        "Laissez l'appareil débranché une heure pour réarmer d'éventuelles protections, puis lancez un cycle à vide à 180 °C pendant dix minutes.",
        "Si le ventilateur tourne mais que l'air reste froid, arrêtez-vous : n'ouvrez pas le boîtier, contactez le service après-vente ou la garantie."
      ],
      "replaceWhen": "Si la résistance ou le fusible thermique est en cause et que l'appareil est hors garantie, la réparation dépasse souvent l'intérêt d'un modèle neuf. Remplacez-le aussi si le cordon est abîmé, si le boîtier a chauffé anormalement ou si une odeur de brûlé apparaît."
    },
    "en": {
      "intro": "An air fryer that stops heating usually has a power supply problem, a basket that isn't latched, or a tripped thermal cut-out. If the fan runs but the air stays cold, the heating element or its thermal fuse is the most likely culprit.",
      "causes": [
        "Basket not fully latched — a safety switch cuts the heating until the drawer is pushed completely home.",
        "Faulty socket or extension lead — the unit barely powers up, or not at all, on a worn or overloaded multi-way adaptor.",
        "Thermal cut-out tripped — after overheating caused by grease build-up or blocked vents, the safety fuse switches the heating off.",
        "Failed heating element or temperature sensor — the fan spins and the display lights up, but the air stays cool or only lukewarm."
      ],
      "steps": [
        "Unplug the unit, let it cool, then plug it straight into a wall socket you have tested with another appliance, without any extension lead.",
        "Take the drawer out and slide it back in firmly until it clicks, checking that no crumbs are jamming the closing switch.",
        "Clean the bottom of the drawer, the rack and the air vents, because built-up grease can trip the thermal protection.",
        "Leave the unit unplugged for an hour so any protection can reset, then run an empty cycle at 180 °C for ten minutes.",
        "If the fan runs but the air stays cold, stop there: do not open the casing, and contact the retailer or manufacturer about the warranty."
      ],
      "replaceWhen": "If the element or thermal fuse has failed and the fryer is out of warranty, the repair cost often outweighs the value of a new model. Replace it too if the cable is damaged, the housing overheats abnormally, or you notice a burning smell."
    },
    "de": {
      "intro": "Wenn eine Heißluftfritteuse nicht mehr heizt, liegt es meist an der Stromversorgung, einem nicht eingerasteten Korb oder einer ausgelösten Thermosicherung. Läuft der Lüfter, aber die Luft bleibt kalt, ist in der Regel das Heizelement oder dessen Sicherung defekt.",
      "causes": [
        "Korb nicht richtig eingerastet — ein Sicherheitsschalter unterbricht die Heizung, solange die Schublade nicht ganz geschlossen ist.",
        "Defekte Steckdose oder Verlängerung — das Gerät startet kaum oder gar nicht an einer abgenutzten oder überlasteten Steckerleiste.",
        "Thermosicherung ausgelöst — nach Überhitzung durch Fettreste oder verstopfte Lüftungsschlitze schaltet die Sicherung die Heizung ab.",
        "Heizelement oder Temperaturfühler defekt — der Lüfter dreht sich und das Display leuchtet, doch die Luft bleibt kühl oder nur lauwarm."
      ],
      "steps": [
        "Gerät ausstecken, abkühlen lassen und direkt an eine Wandsteckdose anschließen, die Sie mit einem anderen Gerät geprüft haben, ohne Verlängerungskabel.",
        "Schublade herausnehmen und wieder kräftig einschieben, bis sie hörbar einrastet, und prüfen, dass keine Krümel den Schließkontakt blockieren.",
        "Schubladenboden, Rost und Lüftungsöffnungen reinigen, denn angesammeltes Fett kann den thermischen Schutz auslösen.",
        "Gerät eine Stunde ausgesteckt lassen, damit sich Schutzeinrichtungen zurücksetzen, dann einen Leerlauf bei 180 °C für zehn Minuten starten.",
        "Läuft der Lüfter, aber die Luft bleibt kalt, hören Sie auf: Gehäuse nicht öffnen, sondern Händler oder Hersteller wegen der Garantie kontaktieren."
      ],
      "replaceWhen": "Sind Heizelement oder Thermosicherung defekt und die Garantie abgelaufen, übersteigt die Reparatur oft den Wert eines neuen Geräts. Ersetzen Sie es auch bei beschädigtem Kabel, ungewöhnlich heißem Gehäuse oder Brandgeruch."
    },
    "es": {
      "intro": "Una freidora de aire que deja de calentar suele tener un fallo de alimentación, un cesto mal encajado o la protección térmica disparada. Si el ventilador funciona pero el aire sale frío, lo más probable es que la resistencia o su fusible térmico estén averiados.",
      "causes": [
        "Cesto mal encajado — un interruptor de seguridad corta el calentamiento hasta que el cajón queda cerrado del todo.",
        "Enchufe o alargador defectuoso — el aparato apenas arranca, o no lo hace, en una regleta desgastada o sobrecargada.",
        "Protección térmica disparada — tras un sobrecalentamiento por grasa acumulada o rejillas obstruidas, el fusible corta la resistencia.",
        "Resistencia o sonda de temperatura averiada — el ventilador gira y la pantalla se ilumina, pero el aire sigue frío o templado."
      ],
      "steps": [
        "Desenchufe el aparato, déjelo enfriar y conéctelo directamente a una toma de pared que haya probado con otro aparato, sin alargadores.",
        "Saque el cajón y vuelva a introducirlo con firmeza hasta oír el clic, comprobando que ninguna miga bloquee el contacto de cierre.",
        "Limpie el fondo del cajón, la rejilla y las salidas de aire, porque la grasa acumulada puede disparar la protección térmica.",
        "Déjelo desenchufado una hora para que se restablezcan las protecciones y haga un ciclo en vacío a 180 °C durante diez minutos.",
        "Si el ventilador gira pero el aire sigue frío, no siga: no abra la carcasa y contacte con la tienda o el fabricante por la garantía."
      ],
      "replaceWhen": "Si la resistencia o el fusible térmico han fallado y el aparato está fuera de garantía, la reparación suele costar más de lo que vale uno nuevo. Cámbielo también si el cable está dañado, la carcasa se calienta de forma anormal o huele a quemado."
    },
    "it": {
      "intro": "Una friggitrice ad aria che non scalda ha di solito un problema di alimentazione, un cestello non agganciato o la protezione termica scattata. Se la ventola gira ma l'aria resta fredda, la causa più probabile è la resistenza o il suo fusibile termico.",
      "causes": [
        "Cestello non agganciato bene — un interruttore di sicurezza interrompe il riscaldamento finché il cassetto non è chiuso del tutto.",
        "Presa o prolunga difettosa — l'apparecchio si accende a fatica o per niente su una ciabatta usurata o sovraccarica.",
        "Protezione termica scattata — dopo un surriscaldamento dovuto a grasso accumulato o prese d'aria ostruite, il fusibile spegne la resistenza.",
        "Resistenza o sonda di temperatura guasta — la ventola gira e il display si accende, ma l'aria resta fredda o appena tiepida."
      ],
      "steps": [
        "Scollega l'apparecchio, lascialo raffreddare e collegalo direttamente a una presa a muro che hai provato con un altro dispositivo, senza prolunghe.",
        "Estrai il cassetto e reinseriscilo con decisione fino allo scatto, controllando che nessuna briciola blocchi il contatto di chiusura.",
        "Pulisci il fondo del cassetto, la griglia e le aperture di ventilazione, perché il grasso accumulato può far scattare la protezione termica.",
        "Lascia l'apparecchio scollegato per un'ora così le protezioni si riarmano, poi avvia un ciclo a vuoto a 180 °C per dieci minuti.",
        "Se la ventola gira ma l'aria resta fredda, fermati: non aprire l'involucro e contatta il negozio o il produttore per la garanzia."
      ],
      "replaceWhen": "Se la resistenza o il fusibile termico sono guasti e la garanzia è scaduta, la riparazione spesso costa più di un modello nuovo. Sostituiscila anche se il cavo è danneggiato, l'involucro si scalda in modo anomalo o senti odore di bruciato."
    },
    "nl": {
      "intro": "Een airfryer die niet meer opwarmt heeft meestal een stroomprobleem, een niet vergrendelde lade of een afgeslagen thermische beveiliging. Draait de ventilator wel maar blijft de lucht koud, dan is het verwarmingselement of de thermische zekering de meest waarschijnlijke oorzaak.",
      "causes": [
        "Lade niet goed vergrendeld — een veiligheidsschakelaar onderbreekt de verwarming zolang de lade niet helemaal dicht zit.",
        "Defect stopcontact of verlengsnoer — het apparaat start nauwelijks of niet op een versleten of overbelaste stekkerdoos.",
        "Thermische beveiliging afgeslagen — na oververhitting door vetresten of verstopte ventilatieopeningen schakelt de zekering de verwarming uit.",
        "Verwarmingselement of temperatuursensor defect — de ventilator draait en het display licht op, maar de lucht blijft koud of lauw."
      ],
      "steps": [
        "Haal de stekker eruit, laat het apparaat afkoelen en steek hem rechtstreeks in een wandcontactdoos die u met een ander apparaat hebt getest, zonder verlengsnoer.",
        "Haal de lade eruit en schuif hem stevig terug tot hij klikt. Controleer dat er geen kruimels het sluitcontact blokkeren.",
        "Reinig de bodem van de lade, het rooster en de luchtopeningen, want opgehoopt vet kan de thermische beveiliging laten afslaan.",
        "Laat het apparaat een uur zonder stroom staan zodat beveiligingen kunnen resetten en draai daarna tien minuten leeg op 180 °C.",
        "Draait de ventilator maar blijft de lucht koud, stop dan: open de behuizing niet en neem contact op met de winkel of fabrikant over de garantie."
      ],
      "replaceWhen": "Als het verwarmingselement of de thermische zekering kapot is en de garantie is verlopen, kost reparatie vaak meer dan een nieuw model. Vervang het apparaat ook bij een beschadigd snoer, een ongewoon warme behuizing of een brandlucht."
    }
  },
  "nettoyeur-vapeur-crachotement": {
    "fr": {
      "intro": "Un nettoyeur vapeur qui crache de l'eau produit en réalité de la vapeur humide : l'eau condense avant de sortir. La cause la plus fréquente est un appareil pas assez chaud, un réservoir trop rempli ou un entartrage qui perturbe la chauffe.",
      "causes": [
        "Utilisation avant la pleine montée en température — la vapeur n'est pas encore sèche et l'eau en gouttelettes sort par la buse.",
        "Réservoir rempli au-delà du maximum — l'eau est entraînée avec la vapeur au lieu de rester dans la chaudière.",
        "Tartre dans la chaudière ou la buse — il réduit la chauffe et rétrécit le passage, d'où des projections irrégulières.",
        "Flexible long ou froid, ou accessoire mouillé — la vapeur se condense en route et arrive sous forme d'eau."
      ],
      "steps": [
        "Débranchez l'appareil et laissez-le refroidir complètement avant de le remplir ; ne dévissez jamais le bouchon quand il est chaud ou sous pression.",
        "Remplissez uniquement jusqu'au repère maximum, avec le type d'eau indiqué dans la notice, puis attendez le voyant de température prête.",
        "Dirigez les premières secondes de vapeur vers un chiffon pour évacuer l'eau condensée avant de nettoyer la surface voulue.",
        "Détartrez la chaudière et la buse selon la méthode de la notice, en respectant le produit autorisé et les temps de rinçage.",
        "Déroulez complètement le flexible, évitez les accessoires mouillés et passez en position vapeur plus faible si une régulation existe."
      ],
      "replaceWhen": "Si les projections d'eau reviennent aussitôt après un détartrage correct, la chaudière ou la vanne est probablement endommagée. Pour un appareil ancien, remplacer les pièces coûte souvent presque autant qu'un nouveau modèle, qui sera plus sûr."
    },
    "en": {
      "intro": "A steam cleaner that spits water is really producing wet steam, meaning the water condenses before it leaves the nozzle. The most common causes are an appliance that has not fully heated, an overfilled tank, or limescale that disrupts the heating.",
      "causes": [
        "Used before it reaches full temperature — the steam is not yet dry, so droplets of water come out of the nozzle.",
        "Tank filled above the maximum — water is carried out with the steam instead of staying in the boiler.",
        "Limescale in the boiler or nozzle — it reduces heating and narrows the outlet, causing uneven spitting.",
        "Long or cold hose, or wet attachment — steam condenses on the way and arrives as water."
      ],
      "steps": [
        "Unplug the unit and let it cool completely before refilling; never unscrew the cap while it is hot or under pressure.",
        "Fill only to the maximum mark, using the type of water the manual specifies, then wait for the ready-to-use light.",
        "Aim the first few seconds of steam at a cloth to clear condensed water before cleaning the surface you want.",
        "Descale the boiler and nozzle using the method in the manual, sticking to the approved product and rinse times.",
        "Unroll the hose fully, avoid wet attachments, and drop to a lower steam setting if your model has one."
      ],
      "replaceWhen": "If water spitting returns straight after a proper descale, the boiler or valve is probably damaged. On an older unit, replacement parts often cost nearly as much as a new model, which would also be safer."
    },
    "de": {
      "intro": "Ein Dampfreiniger, der Wasser spuckt, liefert eigentlich Nassdampf: Das Wasser kondensiert, bevor es die Düse verlässt. Häufigste Ursachen sind ein noch nicht vollständig aufgeheiztes Gerät, ein überfüllter Tank oder Kalk, der die Heizleistung im Kessel stört.",
      "causes": [
        "Benutzung vor dem vollen Aufheizen — der Dampf ist noch nicht trocken und Wassertröpfchen treten aus der Düse aus.",
        "Tank über die Maximalmarke gefüllt — Wasser wird mit dem Dampf mitgerissen, statt im Kessel zu bleiben.",
        "Kalk im Kessel oder in der Düse — er senkt die Heizleistung und verengt den Auslass, was zu ungleichmäßigem Spucken führt.",
        "Langer oder kalter Schlauch oder nasses Zubehör — der Dampf kondensiert unterwegs und kommt als Wasser an."
      ],
      "steps": [
        "Gerät ausstecken und vor dem Befüllen vollständig abkühlen lassen; den Verschluss niemals öffnen, solange das Gerät heiß ist oder unter Druck steht.",
        "Nur bis zur Maximalmarke füllen, mit der in der Anleitung genannten Wasserart, und dann auf die Betriebsbereitschaftsanzeige warten.",
        "Die ersten Sekunden Dampf auf ein Tuch richten, um Kondenswasser zu entfernen, bevor Sie die eigentliche Fläche reinigen.",
        "Kessel und Düse nach der Methode der Anleitung entkalken und dabei das zugelassene Mittel sowie die Spülzeiten einhalten.",
        "Schlauch vollständig abrollen, nasses Zubehör vermeiden und auf eine niedrigere Dampfstufe wechseln, falls Ihr Modell eine hat."
      ],
      "replaceWhen": "Kehrt das Spucken direkt nach korrektem Entkalken zurück, ist wahrscheinlich Kessel oder Ventil beschädigt. Bei älteren Geräten kosten Ersatzteile oft fast so viel wie ein Neugerät, das zudem sicherer wäre."
    },
    "es": {
      "intro": "Un limpiador a vapor que escupe agua en realidad produce vapor húmedo: el agua se condensa antes de salir por la boquilla. Lo más habitual es que no haya alcanzado la temperatura, que el depósito esté demasiado lleno o que la cal esté alterando el calentamiento.",
      "causes": [
        "Uso antes de alcanzar la temperatura plena — el vapor aún no es seco y salen gotitas de agua por la boquilla.",
        "Depósito lleno por encima del máximo — el agua sale arrastrada con el vapor en lugar de quedarse en la caldera.",
        "Cal en la caldera o la boquilla — reduce el calentamiento y estrecha la salida, provocando salpicaduras irregulares.",
        "Manguera larga o fría, o accesorio mojado — el vapor se condensa por el camino y llega en forma de agua."
      ],
      "steps": [
        "Desenchufe el aparato y déjelo enfriar por completo antes de rellenarlo; nunca desenrosque el tapón si está caliente o bajo presión.",
        "Llene solo hasta la marca máxima, con el tipo de agua que indique el manual, y espere a que se encienda el piloto de listo.",
        "Dirija los primeros segundos de vapor a un paño para eliminar el agua condensada antes de limpiar la superficie deseada.",
        "Descalcifique la caldera y la boquilla según el método del manual, usando el producto autorizado y respetando los tiempos de aclarado.",
        "Desenrolle del todo la manguera, evite accesorios mojados y baje a una potencia de vapor menor si su modelo la permite."
      ],
      "replaceWhen": "Si las salpicaduras vuelven justo después de descalcificar bien, la caldera o la válvula probablemente estén dañadas. En un aparato antiguo, las piezas cuestan casi lo mismo que uno nuevo, que además sería más seguro."
    },
    "it": {
      "intro": "Un pulitore a vapore che sputa acqua produce in realtà vapore umido: l'acqua condensa prima di uscire dall'ugello. Le cause più comuni sono un apparecchio non ancora a temperatura, un serbatoio troppo pieno o il calcare che altera il riscaldamento.",
      "causes": [
        "Uso prima della piena temperatura — il vapore non è ancora secco e dall'ugello escono goccioline d'acqua.",
        "Serbatoio riempito oltre il massimo — l'acqua viene trascinata con il vapore invece di restare nella caldaia.",
        "Calcare in caldaia o nell'ugello — riduce il riscaldamento e restringe l'uscita, causando sputi irregolari.",
        "Tubo lungo o freddo, oppure accessorio bagnato — il vapore condensa lungo il percorso e arriva come acqua."
      ],
      "steps": [
        "Scollega l'apparecchio e lascialo raffreddare del tutto prima di riempirlo; non svitare mai il tappo se è caldo o in pressione.",
        "Riempi solo fino al livello massimo, con il tipo di acqua indicato nel manuale, poi attendi la spia di pronto all'uso.",
        "Dirigi i primi secondi di vapore su un panno per eliminare l'acqua condensata prima di pulire la superficie desiderata.",
        "Decalcifica caldaia e ugello con il metodo del manuale, usando il prodotto consentito e rispettando i tempi di risciacquo.",
        "Svolgi completamente il tubo, evita accessori bagnati e abbassa il livello di vapore se il tuo modello lo prevede."
      ],
      "replaceWhen": "Se gli sputi tornano subito dopo una decalcificazione corretta, probabilmente caldaia o valvola sono danneggiate. Su un apparecchio vecchio i ricambi costano spesso quasi quanto un modello nuovo, che sarebbe anche più sicuro."
    },
    "nl": {
      "intro": "Een stoomreiniger die water spuugt, maakt eigenlijk natte stoom: het water condenseert voordat het de spuitmond verlaat. De meest voorkomende oorzaken zijn een apparaat dat nog niet volledig is opgewarmd, een overvolle tank of kalk die de verwarming verstoort.",
      "causes": [
        "Gebruik vóór de volledige temperatuur — de stoom is nog niet droog en er komen waterdruppels uit de spuitmond.",
        "Tank boven het maximum gevuld — water wordt met de stoom meegevoerd in plaats van in de ketel te blijven.",
        "Kalk in de ketel of spuitmond — het vermindert de verwarming en vernauwt de uitlaat, wat onregelmatig spugen geeft.",
        "Lange of koude slang of nat hulpstuk — de stoom condenseert onderweg en komt als water aan."
      ],
      "steps": [
        "Haal de stekker eruit en laat het apparaat volledig afkoelen voor het bijvullen; draai de dop nooit los als het heet is of onder druk staat.",
        "Vul alleen tot de maximummarkering, met het watertype uit de handleiding, en wacht tot het klaarlampje brandt.",
        "Richt de eerste seconden stoom op een doek om condenswater te verwijderen voordat u het gewenste oppervlak reinigt.",
        "Ontkalk de ketel en spuitmond volgens de methode in de handleiding, met het toegestane middel en de voorgeschreven spoeltijden.",
        "Rol de slang helemaal uit, vermijd natte hulpstukken en schakel naar een lagere stoomstand als uw model die heeft."
      ],
      "replaceWhen": "Keert het spugen direct terug na correct ontkalken, dan is de ketel of het ventiel waarschijnlijk beschadigd. Bij een ouder apparaat kosten onderdelen vaak bijna evenveel als een nieuw model, dat bovendien veiliger is."
    }
  },
  "humidificateur-odeur": {
    "fr": {
      "intro": "Une mauvaise odeur d'humidificateur vient presque toujours d'une eau stagnante où se développent bactéries, moisissures et dépôts calcaires. Un réservoir laissé plein, un filtre saturé ou un nettoyage trop espacé suffisent à diffuser cette odeur de moisi dans la pièce.",
      "causes": [
        "Eau stagnante dans le réservoir — laissée plusieurs jours, elle favorise un film visqueux et une odeur de renfermé ou de moisi.",
        "Moisissures ou biofilm sur les parois — on les repère à des taches rosées, noires ou à un dépôt glissant au toucher.",
        "Tartre accumulé sur la base ou le nébuliseur — il retient les impuretés et dégage une odeur âcre au chauffage ou à la brumisation.",
        "Filtre ou mèche saturé — un filtre usé ou jamais séché garde l'humidité et émet une odeur persistante."
      ],
      "steps": [
        "Débranchez l'appareil, videz entièrement le réservoir et la base, et ne remplissez plus qu'avec de l'eau fraîche au moment de l'utilisation.",
        "Nettoyez le réservoir et la base avec une solution de vinaigre blanc diluée si la notice l'autorise, puis frottez avec une brosse douce.",
        "Rincez abondamment à l'eau claire jusqu'à disparition totale de l'odeur de vinaigre, puis laissez sécher à l'air libre avant le remontage.",
        "Remplacez le filtre ou la mèche selon la fréquence indiquée, et ne faites jamais fonctionner l'appareil sans filtre si le modèle en demande un.",
        "Videz et séchez l'appareil chaque jour ou avant chaque période de non-utilisation, et nettoyez-le à fond une fois par semaine."
      ],
      "replaceWhen": "Si l'odeur revient vite malgré des nettoyages réguliers, ou si des moisissures sont incrustées dans des zones que vous ne pouvez pas atteindre, l'appareil devient difficile à assainir. Remplacez-le aussi si le réservoir est fissuré ou rayé en profondeur."
    },
    "en": {
      "intro": "A smelly humidifier almost always has stagnant water in it, where bacteria, mould and limescale deposits build up. A tank left full, a clogged filter or infrequent cleaning is enough to spread a musty smell through the room.",
      "causes": [
        "Stagnant water in the tank — left for several days, it forms a slimy film and a stale or musty smell.",
        "Mould or biofilm on the walls — spotted as pink or black marks, or as a slippery coating you can feel with a finger.",
        "Limescale on the base or mist element — it traps impurities and gives off a sharp smell during heating or misting.",
        "Saturated filter or wick — a worn filter, or one that never dries, holds moisture and releases a persistent odour."
      ],
      "steps": [
        "Unplug the unit, empty the tank and base completely, and from now on fill only with fresh water at the moment you use it.",
        "Clean the tank and base with a diluted white vinegar solution if the manual allows it, scrubbing gently with a soft brush.",
        "Rinse thoroughly with clean water until the vinegar smell has gone, then let every part air-dry before reassembling.",
        "Replace the filter or wick at the interval stated, and never run the unit without a filter if the model is designed to use one.",
        "Empty and dry the humidifier every day or before any period of non-use, and give it a deep clean once a week."
      ],
      "replaceWhen": "If the smell comes back quickly despite regular cleaning, or mould is ingrained in places you cannot reach, the unit is hard to keep hygienic. Replace it too if the tank is cracked or deeply scratched."
    },
    "de": {
      "intro": "Ein unangenehmer Geruch beim Luftbefeuchter stammt fast immer von abgestandenem Wasser, in dem sich Bakterien, Schimmel und Kalkablagerungen bilden. Ein tagelang gefüllter Tank, ein verstopfter Filter oder seltene Reinigung genügen, um muffigen Geruch im Raum zu verbreiten.",
      "causes": [
        "Stehendes Wasser im Tank — mehrere Tage belassen, bildet es einen schleimigen Film und einen muffigen oder abgestandenen Geruch.",
        "Schimmel oder Biofilm an den Wänden — erkennbar an rosa oder schwarzen Flecken oder einem glitschigen Belag beim Anfassen.",
        "Kalk an Sockel oder Verneblerplatte — er bindet Verunreinigungen und gibt beim Erhitzen oder Vernebeln einen scharfen Geruch ab.",
        "Gesättigter Filter oder Verdunstermatte — ein verbrauchter oder nie getrockneter Filter hält Feuchtigkeit und riecht anhaltend."
      ],
      "steps": [
        "Gerät ausstecken, Tank und Sockel vollständig leeren und künftig nur noch frisches Wasser direkt zum Gebrauch einfüllen.",
        "Tank und Sockel mit verdünnter Essigessenz-Lösung reinigen, sofern die Anleitung das erlaubt, und mit einer weichen Bürste vorsichtig schrubben.",
        "Gründlich mit klarem Wasser nachspülen, bis der Essiggeruch verschwunden ist, und alle Teile an der Luft trocknen lassen.",
        "Filter oder Matte im vorgegebenen Intervall ersetzen und das Gerät nie ohne Filter betreiben, wenn das Modell einen vorsieht.",
        "Luftbefeuchter täglich oder vor längerer Nichtbenutzung leeren und trocknen und einmal pro Woche gründlich reinigen."
      ],
      "replaceWhen": "Kehrt der Geruch trotz regelmäßiger Reinigung schnell zurück oder sitzt Schimmel in unerreichbaren Bereichen, lässt sich das Gerät kaum hygienisch halten. Auch bei rissigem oder tief verkratztem Tank sollten Sie es ersetzen."
    },
    "es": {
      "intro": "El mal olor de un humidificador casi siempre procede del agua estancada, donde se desarrollan bacterias, moho y depósitos de cal. Un depósito que se queda lleno, un filtro saturado o una limpieza muy espaciada bastan para esparcir olor a humedad por la habitación.",
      "causes": [
        "Agua estancada en el depósito — si se deja varios días, forma una película viscosa y un olor a rancio o a moho.",
        "Moho o biofilm en las paredes — se reconoce por manchas rosadas o negras, o por una capa resbaladiza al tocarla.",
        "Cal acumulada en la base o el nebulizador — retiene impurezas y desprende un olor acre al calentar o nebulizar.",
        "Filtro o mecha saturado — un filtro gastado, o que nunca llega a secarse, retiene humedad y huele de forma persistente."
      ],
      "steps": [
        "Desenchufe el aparato, vacíe por completo el depósito y la base, y a partir de ahora llene solo con agua fresca en el momento de usarlo.",
        "Limpie el depósito y la base con una solución de vinagre blanco diluido si el manual lo permite, frotando con un cepillo suave.",
        "Aclare abundantemente con agua limpia hasta que desaparezca el olor a vinagre y deje secar todas las piezas al aire antes de montarlas.",
        "Cambie el filtro o la mecha con la frecuencia indicada y no use nunca el aparato sin filtro si el modelo lo requiere.",
        "Vacíe y seque el humidificador a diario o antes de periodos sin uso, y haga una limpieza a fondo una vez por semana."
      ],
      "replaceWhen": "Si el olor vuelve rápido pese a limpiezas regulares, o hay moho incrustado en zonas inaccesibles, el aparato es difícil de mantener higiénico. Sustitúyalo también si el depósito está agrietado o muy rayado."
    },
    "it": {
      "intro": "Il cattivo odore di un umidificatore deriva quasi sempre da acqua stagnante, dove si sviluppano batteri, muffe e depositi di calcare. Un serbatoio lasciato pieno, un filtro saturo o una pulizia troppo rara bastano a diffondere odore di muffa in tutta la stanza.",
      "causes": [
        "Acqua stagnante nel serbatoio — lasciata per giorni forma una pellicola viscida e un odore di chiuso o di muffa.",
        "Muffa o biofilm sulle pareti — si riconoscono da macchie rosa o nere o da una patina scivolosa al tatto.",
        "Calcare su base o nebulizzatore — trattiene le impurità e rilascia un odore acre durante il riscaldamento o la nebulizzazione.",
        "Filtro o stoppino saturo — un filtro esausto, o che non si asciuga mai, trattiene umidità ed emana un odore persistente."
      ],
      "steps": [
        "Scollega l'apparecchio, svuota completamente serbatoio e base e riempi d'ora in poi solo con acqua fresca al momento dell'uso.",
        "Pulisci serbatoio e base con una soluzione di aceto bianco diluito se il manuale lo consente, strofinando con uno spazzolino morbido.",
        "Risciacqua abbondantemente con acqua pulita finché non scompare l'odore di aceto, poi lascia asciugare i pezzi all'aria prima del rimontaggio.",
        "Sostituisci filtro o stoppino con la frequenza indicata e non usare mai l'apparecchio senza filtro se il modello lo prevede.",
        "Svuota e asciuga l'umidificatore ogni giorno o prima di un periodo di inutilizzo, ed effettua una pulizia a fondo una volta a settimana."
      ],
      "replaceWhen": "Se l'odore ritorna in fretta nonostante pulizie regolari, o la muffa è incrostata in punti irraggiungibili, l'apparecchio è difficile da mantenere igienico. Sostituiscilo anche se il serbatoio è crepato o profondamente graffiato."
    },
    "nl": {
      "intro": "Een vieze geur uit een luchtbevochtiger komt bijna altijd van stilstaand water, waarin bacteriën, schimmel en kalkafzetting zich ontwikkelen. Een dagenlang gevulde tank, een verzadigd filter of te zeldzaam schoonmaken is genoeg om een muffe geur door de kamer te verspreiden.",
      "causes": [
        "Stilstaand water in de tank — na enkele dagen vormt het een slijmerige laag en een bedompte of muffe geur.",
        "Schimmel of biofilm op de wanden — te herkennen aan roze of zwarte vlekken of een glibberige laag die u kunt voelen.",
        "Kalk op de basis of het vernevelelement — het houdt vuil vast en geeft een scherpe geur af tijdens verwarmen of vernevelen.",
        "Verzadigd filter of lont — een versleten filter, of een filter dat nooit droogt, houdt vocht vast en geeft blijvend geur af."
      ],
      "steps": [
        "Haal de stekker eruit, leeg de tank en de basis volledig en vul voortaan alleen vers water bij op het moment van gebruik.",
        "Reinig tank en basis met een verdunde oplossing van witte azijn als de handleiding dat toestaat en schrob voorzichtig met een zachte borstel.",
        "Spoel grondig na met schoon water tot de azijngeur weg is en laat alle onderdelen aan de lucht drogen voor het weer in elkaar zetten.",
        "Vervang het filter of de lont volgens het voorgeschreven interval en gebruik het apparaat nooit zonder filter als het model er een vereist.",
        "Leeg en droog de luchtbevochtiger dagelijks of voor een periode van niet-gebruik en maak hem één keer per week grondig schoon."
      ],
      "replaceWhen": "Komt de geur snel terug ondanks regelmatig schoonmaken of zit schimmel op plekken die u niet kunt bereiken, dan is het apparaat moeilijk hygiënisch te houden. Vervang het ook bij een gescheurde of diep bekraste tank."
    }
  },
  "laveur-vitres-traces": {
    "fr": {
      "intro": "Un robot laveur de vitres qui laisse des traces a presque toujours un chiffon sale ou usé, ou un dosage de produit inadapté. Les traces apparaissent quand la saleté est simplement déplacée et que l'eau sèche trop vite, notamment sur une vitre chaude ou très calcaire.",
      "causes": [
        "Chiffon encrassé ou usé — il ne retient plus la saleté et la redépose en fines lignes à chaque passage.",
        "Trop d'eau ou trop de produit — l'excédent coule, sèche en gouttes et laisse des auréoles ou des coulures en bas de vitre.",
        "Vitre exposée au soleil — le liquide sèche avant d'être essuyé et laisse des traînées blanches de calcaire ou de savon.",
        "Vitre très sale au départ ou film gras — un seul passage ne suffit pas et la saleté s'étale sans être absorbée."
      ],
      "steps": [
        "Retirez le chiffon, lavez-le à la main à l'eau tiède savonneuse sans adoucissant, rincez-le bien et laissez-le sécher avant de le remettre.",
        "Essuyez au préalable le cadre et les rebords avec un chiffon humide pour éviter que le robot n'étale poussière et sable sur la vitre.",
        "Nettoyez les vitres à l'ombre ou par temps couvert, et vaporisez le produit conseillé par le fabricant en quantité modérée.",
        "Pour une vitre très sale ou grasse, faites un premier cycle à faible quantité de produit, puis un second avec un chiffon propre.",
        "Nettoyez la bande de roulement et le joint d'aspiration à l'eau claire, et vérifiez que la fixation du chiffon est bien tendue."
      ],
      "replaceWhen": "Si des traces apparaissent encore avec un chiffon neuf et un produit adapté, vérifiez l'aspiration et l'état du joint. Un robot qui perd durablement de la puissance ou dont le joint est déformé devient peu rentable à réparer et mérite d'être remplacé."
    },
    "en": {
      "intro": "A window-cleaning robot that leaves streaks nearly always has a dirty or worn pad, or the wrong amount of cleaning liquid. Streaks appear when dirt is just moved around and the water dries too fast, especially on warm or very hard-water-stained glass.",
      "causes": [
        "Dirty or worn pad — it no longer holds onto grime and redeposits it as fine lines on every pass.",
        "Too much water or cleaner — the excess runs down, dries in drops and leaves rings or runs along the bottom of the glass.",
        "Glass in direct sun — the liquid dries before it is wiped and leaves white streaks of limescale or soap.",
        "Very dirty glass or a greasy film — one pass is not enough and the dirt is spread out without being absorbed."
      ],
      "steps": [
        "Remove the pad, hand-wash it in warm soapy water without fabric softener, rinse it well and let it dry before refitting.",
        "Wipe the frame and ledges with a damp cloth first, so the robot does not smear dust and grit across the glass.",
        "Clean windows in the shade or on an overcast day, and spray a moderate amount of the manufacturer's recommended cleaner.",
        "For very dirty or greasy glass, do a first cycle with little cleaner, then a second with a clean pad.",
        "Rinse the drive track and suction seal with clear water, and check the pad is held taut by its fixings."
      ],
      "replaceWhen": "If streaks persist with a new pad and a suitable cleaner, check the suction and the condition of the seal. A robot that keeps losing power or has a warped seal is rarely worth repairing and is better replaced."
    },
    "de": {
      "intro": "Ein Fensterputzroboter, der Schlieren hinterlässt, hat fast immer ein schmutziges oder abgenutztes Pad oder die falsche Menge Reinigungsmittel. Schlieren entstehen, wenn Schmutz nur verschoben wird und das Wasser zu schnell trocknet, besonders auf warmem oder stark verkalktem Glas.",
      "causes": [
        "Verschmutztes oder abgenutztes Pad — es hält Schmutz nicht mehr fest und gibt ihn bei jedem Durchgang als feine Linien wieder ab.",
        "Zu viel Wasser oder Reiniger — der Überschuss läuft ab, trocknet in Tropfen und hinterlässt Ränder oder Läufer am unteren Glasrand.",
        "Scheibe in der Sonne — die Flüssigkeit trocknet, bevor sie abgewischt wird, und lässt weiße Kalk- oder Seifenschlieren zurück.",
        "Sehr schmutziges Glas oder Fettfilm — ein Durchgang reicht nicht, und der Schmutz wird verteilt, statt aufgenommen zu werden."
      ],
      "steps": [
        "Pad abnehmen, in warmem Seifenwasser ohne Weichspüler von Hand waschen, gut ausspülen und vor dem Wiederbefestigen trocknen lassen.",
        "Rahmen und Fensterbänke vorab mit einem feuchten Tuch abwischen, damit der Roboter Staub und Sand nicht über das Glas verteilt.",
        "Fenster im Schatten oder bei bedecktem Himmel reinigen und eine mäßige Menge des vom Hersteller empfohlenen Reinigers aufsprühen.",
        "Bei sehr schmutzigem oder fettigem Glas einen ersten Durchgang mit wenig Reiniger fahren, dann einen zweiten mit sauberem Pad.",
        "Laufband und Saugdichtung mit klarem Wasser abspülen und prüfen, dass das Pad an seinen Halterungen straff sitzt."
      ],
      "replaceWhen": "Bleiben Schlieren auch mit neuem Pad und passendem Reiniger, prüfen Sie Saugkraft und Zustand der Dichtung. Ein Roboter mit dauerhaft nachlassender Leistung oder verzogener Dichtung lohnt selten eine Reparatur und sollte ersetzt werden."
    },
    "es": {
      "intro": "Un robot limpiacristales que deja rayas casi siempre tiene la bayeta sucia o gastada, o una cantidad de producto inadecuada. Las rayas aparecen cuando la suciedad solo se desplaza y el agua se seca demasiado rápido, sobre todo en un cristal caliente o con mucha cal.",
      "causes": [
        "Bayeta sucia o gastada — ya no retiene la suciedad y la vuelve a depositar en líneas finas en cada pasada.",
        "Demasiada agua o producto — el exceso resbala, se seca en gotas y deja cercos o chorreones en la parte baja del cristal.",
        "Cristal expuesto al sol — el líquido se seca antes de limpiarse y deja vetas blancas de cal o jabón.",
        "Cristal muy sucio o con película grasa — una sola pasada no basta y la suciedad se extiende sin ser absorbida."
      ],
      "steps": [
        "Retire la bayeta, lávela a mano con agua tibia y jabón sin suavizante, aclárela bien y déjela secar antes de volver a colocarla.",
        "Limpie antes el marco y los alféizares con un paño húmedo para que el robot no extienda polvo y arenilla por el cristal.",
        "Limpie las ventanas a la sombra o con el cielo nublado y pulverice una cantidad moderada del producto que recomiende el fabricante.",
        "Si el cristal está muy sucio o graso, haga una primera pasada con poco producto y una segunda con una bayeta limpia.",
        "Aclare con agua limpia la banda de rodadura y la junta de succión, y compruebe que la bayeta queda tensa en sus sujeciones."
      ],
      "replaceWhen": "Si las rayas persisten con bayeta nueva y producto adecuado, revise la succión y el estado de la junta. Un robot que pierde potencia de forma continua o tiene la junta deformada rara vez compensa repararlo y conviene sustituirlo."
    },
    "it": {
      "intro": "Un robot lavavetri che lascia aloni ha quasi sempre un panno sporco o consumato, oppure una quantità di detergente non adatta. Gli aloni compaiono quando lo sporco viene solo spostato e l'acqua asciuga troppo in fretta, soprattutto su vetri caldi o molto calcarei.",
      "causes": [
        "Panno sporco o consumato — non trattiene più lo sporco e lo rideposita in linee sottili a ogni passata.",
        "Troppa acqua o detergente — l'eccesso cola, asciuga a gocce e lascia aloni o colature nella parte bassa del vetro.",
        "Vetro esposto al sole — il liquido asciuga prima di essere raccolto e lascia strisce bianche di calcare o sapone.",
        "Vetro molto sporco o con velo unto — una sola passata non basta e lo sporco si distribuisce senza essere assorbito."
      ],
      "steps": [
        "Togli il panno, lavalo a mano con acqua tiepida e sapone senza ammorbidente, risciacqualo bene e lascialo asciugare prima di rimontarlo.",
        "Passa prima un panno umido su telaio e davanzali, così il robot non spalma polvere e granelli sul vetro.",
        "Pulisci i vetri all'ombra o con cielo coperto e spruzza una quantità moderata del detergente consigliato dal produttore.",
        "Per vetri molto sporchi o unti, fai un primo ciclo con poco detergente e un secondo con un panno pulito.",
        "Sciacqua con acqua pulita cingoli e guarnizione di aspirazione e verifica che il panno sia teso nei suoi fissaggi."
      ],
      "replaceWhen": "Se gli aloni restano con panno nuovo e detergente adatto, controlla l'aspirazione e lo stato della guarnizione. Un robot che perde potenza in modo costante o ha la guarnizione deformata raramente vale la riparazione e conviene sostituirlo."
    },
    "nl": {
      "intro": "Een ruitenrobot die strepen achterlaat heeft vrijwel altijd een vuil of versleten doekje, of de verkeerde hoeveelheid reinigingsmiddel. Strepen ontstaan als vuil alleen wordt verplaatst en het water te snel opdroogt, vooral op warm glas of glas met veel kalkafzetting.",
      "causes": [
        "Vuil of versleten doekje — het houdt vuil niet meer vast en zet het bij elke beurt als fijne lijntjes weer af.",
        "Te veel water of reiniger — het teveel loopt weg, droogt in druppels en laat kringen of lopers onderaan het glas achter.",
        "Glas in de zon — de vloeistof droogt voordat ze wordt weggeveegd en laat witte kalk- of zeepstrepen achter.",
        "Erg vuil glas of vette film — één beurt is niet genoeg en het vuil wordt uitgesmeerd in plaats van opgenomen."
      ],
      "steps": [
        "Haal het doekje eraf, was het met de hand in lauw zeepwater zonder wasverzachter, spoel goed na en laat het drogen voor u het terugplaatst.",
        "Veeg eerst kozijn en vensterbanken af met een vochtige doek, zodat de robot geen stof en zand over het glas uitsmeert.",
        "Reinig ramen in de schaduw of bij bewolkt weer en spuit een matige hoeveelheid van het door de fabrikant aanbevolen middel.",
        "Doe bij erg vuil of vet glas een eerste ronde met weinig reiniger en een tweede ronde met een schoon doekje.",
        "Spoel loopband en zuigafdichting af met schoon water en controleer of het doekje strak in de bevestigingen zit."
      ],
      "replaceWhen": "Blijven er strepen met een nieuw doekje en het juiste middel, controleer dan de zuigkracht en de staat van de afdichting. Een robot die blijvend vermogen verliest of een vervormde afdichting heeft, is zelden een reparatie waard."
    }
  },
  "deshumidificateur-bruit-compresseur": {
    "fr": {
      "intro": "Un déshumidificateur devenu bruyant a le plus souvent un problème de stabilité, de filtre encrassé ou de givre sur l'évaporateur, avant un vrai défaut du compresseur. Un bruit de vibration métallique ou un ronflement qui s'aggrave avec le temps mérite toutefois un contrôle attentif.",
      "causes": [
        "Appareil mal calé ou posé sur un sol dur — les vibrations du compresseur se transmettent au sol et amplifient le bruit.",
        "Filtre à air colmaté ou ventilateur encrassé — l'air circule mal, le moteur force et le ronflement augmente.",
        "Givre sur l'évaporateur ou réservoir mal enclenché — les pièces frottent, cliquettent ou forcent à chaque redémarrage.",
        "Usure des supports ou du compresseur — le bruit devient sourd, strident ou cognant, surtout après quelques années d'usage."
      ],
      "steps": [
        "Débranchez l'appareil, vérifiez qu'il est bien à plat et posez-le sur un support en caoutchouc ou un tapis antivibration.",
        "Retirez et lavez le filtre à air à l'eau tiède, puis dépoussiérez les grilles et l'arrière avec un aspirateur à brosse douce.",
        "Videz le réservoir, replacez-le correctement jusqu'au clic et assurez-vous qu'aucun panneau ou capot n'est desserré.",
        "Si du givre est visible, éteignez l'appareil et laissez-le dégivrer à température ambiante, puis relancez-le dans une pièce plus chaude.",
        "Après un arrêt, attendez trois minutes avant de rallumer et, si le bruit persiste, ne démontez pas le circuit de froid : contactez le SAV."
      ],
      "replaceWhen": "Si le bruit persiste après calage, nettoyage et dégivrage, et qu'il s'accompagne d'une baisse d'efficacité ou d'un arrêt répété, le compresseur est sans doute en fin de vie. Hors garantie, ce remplacement coûte presque aussi cher qu'un appareil neuf."
    },
    "en": {
      "intro": "A dehumidifier that has become noisy more often has an unstable stand, a clogged filter or frost on the coil than a genuinely failing compressor. A metallic rattle or a drone that keeps getting worse over time, however, deserves a closer check.",
      "causes": [
        "Unit not level or standing on a hard floor — the compressor's vibrations travel into the floor and amplify the noise.",
        "Blocked air filter or dirty fan — air flows poorly, the motor strains and the drone gets louder.",
        "Frost on the coil or reservoir not seated — parts rub, click or strain on every restart.",
        "Worn mounts or compressor — the sound becomes dull, shrill or knocking, especially after several years of use."
      ],
      "steps": [
        "Unplug the unit, check it stands flat and place it on a rubber mat or anti-vibration pad.",
        "Remove and wash the air filter in lukewarm water, then dust the grilles and the back with a vacuum and soft brush.",
        "Empty the reservoir, refit it firmly until it clicks and make sure no panel or cover has worked loose.",
        "If frost is visible, switch off and let it defrost at room temperature, then restart it in a warmer room.",
        "After any stop, wait three minutes before switching on again, and if the noise continues, do not open the cooling circuit: contact the manufacturer."
      ],
      "replaceWhen": "If the noise remains after levelling, cleaning and defrosting, and comes with weaker performance or repeated shutdowns, the compressor is probably near the end of its life. Out of warranty, replacing it costs nearly as much as a new unit."
    },
    "de": {
      "intro": "Wird ein Luftentfeuchter laut, liegen die Ursachen meist an unsicherem Stand, verschmutztem Filter oder Eis am Verdampfer, noch bevor der Kompressor wirklich defekt ist. Ein metallisches Klappern oder ein Brummen, das mit der Zeit zunimmt, sollte jedoch genauer geprüft werden.",
      "causes": [
        "Gerät nicht eben oder auf hartem Boden — die Vibrationen des Kompressors übertragen sich auf den Boden und verstärken das Geräusch.",
        "Verstopfter Luftfilter oder verschmutzter Lüfter — die Luft strömt schlecht, der Motor arbeitet schwerer und das Brummen nimmt zu.",
        "Eis am Verdampfer oder Wassertank nicht richtig eingesetzt — Teile reiben, klicken oder arbeiten bei jedem Neustart schwer.",
        "Verschlissene Gummipuffer oder Kompressor — das Geräusch wird dumpf, schrill oder klopfend, vor allem nach mehreren Betriebsjahren."
      ],
      "steps": [
        "Gerät ausstecken, auf waagerechten Stand achten und auf eine Gummimatte oder ein Antivibrationspad stellen.",
        "Luftfilter herausnehmen und in lauwarmem Wasser waschen, anschließend Gitter und Rückseite mit Staubsauger und weichem Aufsatz entstauben.",
        "Wassertank leeren, wieder fest einsetzen, bis er einrastet, und prüfen, dass sich keine Abdeckung oder Blende gelockert hat.",
        "Ist Eis sichtbar, Gerät ausschalten und bei Raumtemperatur abtauen lassen und danach in einem wärmeren Raum neu starten.",
        "Nach jedem Ausschalten drei Minuten warten, bevor Sie wieder einschalten. Bleibt das Geräusch, den Kältekreislauf nicht öffnen, sondern den Hersteller kontaktieren."
      ],
      "replaceWhen": "Bleibt das Geräusch nach Ausrichten, Reinigen und Abtauen und kommen schwächere Leistung oder wiederholtes Abschalten hinzu, ist der Kompressor vermutlich am Ende. Außerhalb der Garantie kostet der Tausch fast so viel wie ein neues Gerät."
    },
    "es": {
      "intro": "Un deshumidificador que se vuelve ruidoso suele tener un problema de estabilidad, un filtro obstruido o escarcha en el evaporador antes que una avería real del compresor. Aun así, un traqueteo metálico o un zumbido que empeora con el tiempo merece una revisión más atenta.",
      "causes": [
        "Aparato mal nivelado o sobre suelo duro — las vibraciones del compresor se transmiten al suelo y amplifican el ruido.",
        "Filtro de aire obstruido o ventilador sucio — el aire circula mal, el motor se esfuerza y el zumbido aumenta.",
        "Escarcha en el evaporador o depósito mal encajado — las piezas rozan, chasquean o se esfuerzan en cada reinicio.",
        "Soportes o compresor desgastados — el sonido se vuelve sordo, agudo o con golpeteo, sobre todo tras varios años de uso."
      ],
      "steps": [
        "Desenchufe el aparato, compruebe que está bien nivelado y colóquelo sobre una base de goma o una alfombrilla antivibración.",
        "Retire y lave el filtro de aire con agua tibia, y quite el polvo de rejillas y parte trasera con una aspiradora y cepillo suave.",
        "Vacíe el depósito, vuelva a colocarlo hasta oír el clic y asegúrese de que ningún panel o tapa esté flojo.",
        "Si hay escarcha visible, apague y deje descongelar a temperatura ambiente; después reinicie en una estancia más cálida.",
        "Tras una parada espere tres minutos antes de encenderlo de nuevo y, si el ruido persiste, no abra el circuito de frío: contacte con el servicio técnico."
      ],
      "replaceWhen": "Si el ruido persiste tras nivelar, limpiar y descongelar, y se suma una menor eficacia o paradas repetidas, el compresor probablemente está al final de su vida. Fuera de garantía, cambiarlo cuesta casi lo mismo que un aparato nuevo."
    },
    "it": {
      "intro": "Un deumidificatore diventato rumoroso ha più spesso un problema di stabilità, un filtro sporco o del ghiaccio sull'evaporatore che un vero guasto al compressore. Un rumore metallico o un ronzio che peggiora nel tempo merita però un controllo più attento.",
      "causes": [
        "Apparecchio non in piano o su pavimento duro — le vibrazioni del compressore passano al pavimento e amplificano il rumore.",
        "Filtro dell'aria intasato o ventola sporca — l'aria circola male, il motore fa fatica e il ronzio aumenta.",
        "Ghiaccio sull'evaporatore o serbatoio non inserito bene — le parti sfregano, scattano o fanno sforzo a ogni riavvio.",
        "Supporti o compressore usurati — il suono diventa sordo, acuto o battente, soprattutto dopo diversi anni di utilizzo."
      ],
      "steps": [
        "Scollega l'apparecchio, verifica che sia in piano e appoggialo su un tappetino in gomma o antivibrazione.",
        "Estrai e lava il filtro dell'aria in acqua tiepida, poi spolvera griglie e parte posteriore con aspirapolvere e spazzola morbida.",
        "Svuota il serbatoio, rimettilo fino allo scatto e assicurati che nessun pannello o coperchio si sia allentato.",
        "Se vedi del ghiaccio, spegni e lascia sbrinare a temperatura ambiente, poi riavvia in un locale più caldo.",
        "Dopo uno spegnimento attendi tre minuti prima di riaccendere e, se il rumore persiste, non aprire il circuito del freddo: contatta l'assistenza."
      ],
      "replaceWhen": "Se il rumore resta dopo livellamento, pulizia e sbrinamento e si accompagna a resa inferiore o spegnimenti ripetuti, il compressore è probabilmente a fine vita. Fuori garanzia, sostituirlo costa quasi quanto un apparecchio nuovo."
    },
    "nl": {
      "intro": "Een luchtontvochtiger die luid is geworden heeft vaker een onvaste stand, een verstopt filter of ijs op de verdamper dan een echt defecte compressor. Een metalen gerammel of een bromtoon die in de loop van de tijd erger wordt, verdient echter extra aandacht.",
      "causes": [
        "Apparaat niet waterpas of op harde vloer — de trillingen van de compressor gaan de vloer in en versterken het geluid.",
        "Verstopt luchtfilter of vuile ventilator — de lucht stroomt slecht, de motor moet harder werken en het brommen neemt toe.",
        "Ijs op de verdamper of watertank niet goed geplaatst — onderdelen schuren, klikken of hebben bij elke herstart moeite.",
        "Versleten rubbers of compressor — het geluid wordt dof, schel of kloppend, vooral na enkele jaren gebruik."
      ],
      "steps": [
        "Haal de stekker eruit, controleer of het apparaat recht staat en plaats het op een rubberen mat of antitrillingsmat.",
        "Neem het luchtfilter eruit en was het in lauw water, stofzuig daarna de roosters en achterkant met een zachte borstel.",
        "Leeg de watertank, plaats hem stevig terug tot hij klikt en controleer dat geen paneel of klep los is gaan zitten.",
        "Is er ijs zichtbaar, schakel dan uit en laat het bij kamertemperatuur ontdooien en start daarna opnieuw in een warmere ruimte.",
        "Wacht na elke stop drie minuten voor u weer inschakelt. Blijft het geluid, open het koelcircuit dan niet: neem contact op met de fabrikant."
      ],
      "replaceWhen": "Blijft het geluid na waterpas zetten, schoonmaken en ontdooien en komen daar minder prestaties of herhaald uitschakelen bij, dan is de compressor waarschijnlijk aan het einde van zijn leven. Buiten garantie kost vervanging bijna evenveel als een nieuw apparaat."
    }
  },
  "fer-semelle-accroche": {
    "fr": {
      "intro": "Une semelle de fer qui accroche le tissu est le plus souvent encrassée par de l'amidon, du tartre ou des fibres synthétiques fondues. La surface perd alors son glissant, et une température trop élevée ou une semelle rayée aggrave le problème.",
      "causes": [
        "Résidus d'amidon, de produit de repassage ou de tartre — ils se carbonisent sur la semelle et forment une couche rugueuse qui frotte.",
        "Fibres synthétiques fondues — un passage trop chaud sur du polyester ou du nylon laisse un dépôt collant à peine visible.",
        "Orifices de vapeur obstrués par du tartre — l'eau goutte irrégulièrement, laisse des taches et rend la semelle moins glissante.",
        "Revêtement rayé ou écaillé — une chute ou un contact avec une fermeture éclair crée des aspérités qui accrochent le tissu."
      ],
      "steps": [
        "Débranchez le fer, laissez-le refroidir complètement, puis essuyez la semelle avec un chiffon doux humide imprégné d'un peu de liquide vaisselle.",
        "Si le dépôt résiste, appliquez une pâte douce de bicarbonate et d'eau si la notice l'accepte, puis essuyez sans gratter le métal.",
        "N'utilisez jamais de paille de fer, de lame ni de produit abrasif, qui rayent le revêtement et rendent la semelle plus accrocheuse.",
        "Videz le réservoir et lancez la fonction anticalcaire ou rinçage prévue par la notice pour dégager les orifices de vapeur.",
        "Repassez à la température indiquée sur l'étiquette du vêtement et utilisez un linge de protection sur les tissus délicats."
      ],
      "replaceWhen": "Si la semelle est profondément rayée, écaillée ou déformée, le nettoyage ne rétablira pas le glissement et le fer abîmera vos vêtements. Un fer ancien dont la semelle est abîmée mérite d'être remplacé plutôt que réparé."
    },
    "en": {
      "intro": "An iron soleplate that snags fabric is most often fouled with starch, limescale or melted synthetic fibres. The surface then loses its glide, and a temperature set too high or a scratched soleplate makes things worse.",
      "causes": [
        "Starch, ironing-spray or limescale residue — it scorches onto the soleplate and forms a rough layer that drags.",
        "Melted synthetic fibres — an overly hot pass over polyester or nylon leaves a sticky, barely visible film.",
        "Steam holes clogged with scale — water drips unevenly, leaves marks and makes the soleplate less slippery.",
        "Scratched or flaking coating — a drop or contact with a zip creates rough spots that catch the fabric."
      ],
      "steps": [
        "Unplug the iron, let it cool completely, then wipe the soleplate with a soft damp cloth and a drop of washing-up liquid.",
        "If the deposit resists, apply a gentle paste of bicarbonate of soda and water if the manual allows, and wipe without scraping the metal.",
        "Never use steel wool, blades or abrasive cleaners, which scratch the coating and make the soleplate catch even more.",
        "Empty the tank and run the anti-scale or self-clean function described in the manual to clear the steam holes.",
        "Iron at the temperature shown on the garment label and use a pressing cloth on delicate fabrics."
      ],
      "replaceWhen": "If the soleplate is deeply scratched, flaking or warped, cleaning will not restore the glide and the iron will damage your clothes. An older iron with a damaged soleplate is better replaced than repaired."
    },
    "de": {
      "intro": "Bleibt die Bügeleisensohle am Stoff hängen, ist sie meist durch Stärke, Kalk oder angeschmolzene Kunstfasern verschmutzt. Die Oberfläche verliert ihre Gleitfähigkeit, und eine zu hohe Bügeltemperatur oder eine zerkratzte Sohle verschlimmern das Problem zusätzlich.",
      "causes": [
        "Rückstände von Stärke, Bügelspray oder Kalk — sie verbrennen auf der Sohle und bilden eine raue Schicht, die bremst.",
        "Angeschmolzene Kunstfasern — ein zu heißer Durchgang über Polyester oder Nylon hinterlässt einen klebrigen, kaum sichtbaren Film.",
        "Mit Kalk zugesetzte Dampfdüsen — Wasser tropft ungleichmäßig, hinterlässt Flecken und macht die Sohle weniger glatt.",
        "Zerkratzte oder abplatzende Beschichtung — ein Sturz oder Kontakt mit Reißverschlüssen erzeugt raue Stellen, die den Stoff greifen."
      ],
      "steps": [
        "Bügeleisen ausstecken, vollständig abkühlen lassen und die Sohle mit einem weichen, feuchten Tuch und einem Tropfen Spülmittel abwischen.",
        "Hält sich der Belag, tragen Sie eine milde Paste aus Natron und Wasser auf, wenn die Anleitung es erlaubt, und wischen ohne das Metall zu kratzen.",
        "Verwenden Sie niemals Stahlwolle, Klingen oder Scheuermittel, da sie die Beschichtung zerkratzen und die Sohle noch stärker haken lassen.",
        "Wassertank leeren und die in der Anleitung beschriebene Entkalkungs- oder Selbstreinigungsfunktion starten, um die Dampfdüsen freizuspülen.",
        "Bügeln Sie mit der Temperatur laut Pflegeetikett und legen Sie bei empfindlichen Stoffen ein Schutztuch auf."
      ],
      "replaceWhen": "Ist die Sohle tief zerkratzt, abgeplatzt oder verzogen, stellt auch Reinigen die Gleitfähigkeit nicht wieder her, und das Bügeleisen beschädigt Ihre Kleidung. Ein älteres Bügeleisen mit beschädigter Sohle ersetzen Sie besser, statt es zu reparieren."
    },
    "es": {
      "intro": "Una suela de plancha que se engancha con la tela suele estar sucia de almidón, cal o fibras sintéticas fundidas. La superficie pierde deslizamiento y una temperatura demasiado alta o una suela rayada agravan el problema.",
      "causes": [
        "Restos de almidón, producto de planchado o cal — se carbonizan en la suela y forman una capa rugosa que roza.",
        "Fibras sintéticas fundidas — una pasada demasiado caliente sobre poliéster o nailon deja una película pegajosa casi invisible.",
        "Orificios de vapor obstruidos por cal — el agua gotea de forma irregular, deja manchas y la suela desliza peor.",
        "Revestimiento rayado o desconchado — una caída o el roce con una cremallera crea asperezas que enganchan el tejido."
      ],
      "steps": [
        "Desenchufe la plancha, déjela enfriar del todo y limpie la suela con un paño suave húmedo y una gota de lavavajillas.",
        "Si el depósito resiste, aplique una pasta suave de bicarbonato y agua si el manual lo permite y limpie sin rascar el metal.",
        "No use nunca estropajo metálico, cuchillas ni limpiadores abrasivos, que rayan el revestimiento y hacen que la suela se enganche más.",
        "Vacíe el depósito y use la función anticalcárea o de autolimpieza descrita en el manual para despejar los orificios de vapor.",
        "Planche a la temperatura indicada en la etiqueta de la prenda y use un paño protector en tejidos delicados."
      ],
      "replaceWhen": "Si la suela está muy rayada, desconchada o deformada, limpiar no recuperará el deslizamiento y la plancha estropeará su ropa. Una plancha antigua con la suela dañada conviene sustituirla antes que repararla."
    },
    "it": {
      "intro": "Una piastra del ferro da stiro che si attacca al tessuto è quasi sempre sporca di amido, calcare o fibre sintetiche sciolte. La superficie perde scorrevolezza e una temperatura troppo alta o una piastra graffiata peggiorano la situazione.",
      "causes": [
        "Residui di amido, spray per stirare o calcare — bruciano sulla piastra formando uno strato ruvido che frena.",
        "Fibre sintetiche sciolte — un passaggio troppo caldo su poliestere o nylon lascia un velo appiccicoso quasi invisibile.",
        "Fori del vapore ostruiti dal calcare — l'acqua gocciola in modo irregolare, lascia macchie e rende la piastra meno scorrevole.",
        "Rivestimento graffiato o scheggiato — una caduta o il contatto con una cerniera crea asperità che agganciano il tessuto."
      ],
      "steps": [
        "Scollega il ferro, lascialo raffreddare del tutto e pulisci la piastra con un panno morbido umido e una goccia di detersivo per piatti.",
        "Se lo sporco resiste, applica una pasta delicata di bicarbonato e acqua, se il manuale lo consente, e passa senza grattare il metallo.",
        "Non usare mai paglietta, lame o detergenti abrasivi, che graffiano il rivestimento e fanno attaccare ancora di più la piastra.",
        "Svuota il serbatoio e avvia la funzione anticalcare o di autopulizia indicata nel manuale per liberare i fori del vapore.",
        "Stira alla temperatura riportata sull'etichetta del capo e usa un telo di protezione sui tessuti delicati."
      ],
      "replaceWhen": "Se la piastra è molto graffiata, scheggiata o deformata, la pulizia non ripristina lo scorrimento e il ferro rovina i tuoi vestiti. Un ferro vecchio con piastra danneggiata conviene sostituirlo piuttosto che ripararlo."
    },
    "nl": {
      "intro": "Een strijkzool die aan de stof blijft haken is meestal vervuild met stijfsel, kalk of gesmolten synthetische vezels. Het oppervlak verliest zijn glij-eigenschappen en een te hoge temperatuur of een bekraste zool maakt het probleem erger.",
      "causes": [
        "Resten van stijfsel, strijkspray of kalk — ze verbranden op de zool en vormen een ruwe laag die blijft haken.",
        "Gesmolten synthetische vezels — een te hete beurt over polyester of nylon laat een kleverige, nauwelijks zichtbare film achter.",
        "Stoomgaatjes verstopt met kalk — water druppelt ongelijkmatig, laat vlekken achter en maakt de zool minder glad.",
        "Bekraste of afbladderende coating — een val of contact met een rits veroorzaakt ruwe plekken die de stof vastgrijpen."
      ],
      "steps": [
        "Haal de stekker eruit, laat het strijkijzer volledig afkoelen en veeg de zool af met een zachte, vochtige doek en een druppel afwasmiddel.",
        "Blijft het vuil zitten, breng dan een milde pasta van zuiveringszout en water aan als de handleiding dat toestaat en veeg zonder het metaal te krassen.",
        "Gebruik nooit staalwol, mesjes of schurende middelen, want die krassen de coating en laten de zool nog meer haken.",
        "Leeg het waterreservoir en start de ontkalk- of zelfreinigingsfunctie uit de handleiding om de stoomgaatjes vrij te maken.",
        "Strijk op de temperatuur van het wasetiket en gebruik bij gevoelige stoffen een strijkdoek."
      ],
      "replaceWhen": "Is de zool diep bekrast, afgebladderd of vervormd, dan herstelt schoonmaken de glijkwaliteit niet en beschadigt het strijkijzer uw kleding. Een ouder strijkijzer met een beschadigde zool vervangt u beter dan u het repareert."
    }
  },
  "nettoyeur-vapeur-fuite": {
    "fr": {
      "intro": "Une fuite par le bouchon pendant la chauffe signale souvent un joint usé, un bouchon mal vissé ou un entartrage sur son siège. Comme la chaudière est sous pression, arrêtez l'appareil et ne dévissez jamais le bouchon tant qu'il est chaud : le risque de brûlure est réel.",
      "causes": [
        "Joint du bouchon durci, fissuré ou déformé — il ne ferme plus de façon étanche quand la pression monte dans la chaudière.",
        "Bouchon mal vissé ou de travers — le filetage n'est pas aligné ou le verrou de sécurité n'est pas engagé jusqu'au bout.",
        "Tartre sur le siège du bouchon ou dans le filetage — les dépôts empêchent le joint d'appuyer à plat contre la chaudière.",
        "Chaudière remplie au-delà du maximum — l'eau en excès est poussée vers le bouchon quand la température et la pression augmentent."
      ],
      "steps": [
        "Débranchez immédiatement l'appareil et laissez-le refroidir plusieurs heures ; ne touchez jamais le bouchon et ne l'ouvrez pas tant qu'il est chaud.",
        "Une fois froid, dévissez le bouchon en suivant la notice et examinez le joint : il doit être souple, intact et bien en place.",
        "Nettoyez le siège et le filetage à l'aide d'un chiffon humide, en retirant les dépôts de tartre sans rayer le métal.",
        "Remplissez uniquement jusqu'au repère maximum et revissez le bouchon à fond, en vérifiant l'alignement et le verrouillage de sécurité.",
        "Si la fuite revient, n'utilisez plus l'appareil et commandez un bouchon ou un joint d'origine, ou contactez le SAV."
      ],
      "replaceWhen": "Si le bouchon, son filetage ou la soupape de sécurité est endommagé, ou si la fuite persiste avec un joint neuf, l'appareil n'est plus sûr. Remplacez-le plutôt que de le réparer par vous-même, surtout s'il est ancien ou si la chaudière est fissurée."
    },
    "en": {
      "intro": "A leak from the cap while heating usually points to a worn seal, a cap that is not screwed on properly, or scale on its seat. Because the boiler is under pressure, switch the unit off and never unscrew the cap while it is hot, as the scald risk is real.",
      "causes": [
        "Cap seal hardened, cracked or warped — it no longer closes watertight when pressure builds in the boiler.",
        "Cap not fully or squarely screwed on — the thread is misaligned or the safety lock has not engaged all the way.",
        "Limescale on the cap seat or thread — deposits stop the seal pressing flat against the boiler.",
        "Boiler filled above the maximum — the excess water is pushed towards the cap as temperature and pressure rise."
      ],
      "steps": [
        "Unplug the unit immediately and leave it to cool for several hours; never touch or open the cap while it is hot.",
        "Once cold, unscrew the cap following the manual and examine the seal: it should be flexible, intact and properly seated.",
        "Clean the seat and thread with a damp cloth, removing limescale deposits without scratching the metal.",
        "Fill only to the maximum mark and screw the cap fully home, checking the alignment and the safety lock.",
        "If the leak returns, stop using the unit and order an original cap or seal, or contact the manufacturer."
      ],
      "replaceWhen": "If the cap, its thread or the safety valve is damaged, or the leak continues with a new seal, the unit is no longer safe. Replace it rather than attempting your own repair, especially if it is old or the boiler is cracked."
    },
    "de": {
      "intro": "Ein Leck am Verschluss während des Aufheizens deutet meist auf eine verschlissene Dichtung, einen nicht richtig verschlossenen Deckel oder Kalk am Dichtsitz hin. Da der Kessel unter Druck steht, schalten Sie das Gerät aus und öffnen den Verschluss niemals im heißen Zustand, denn es besteht Verbrühungsgefahr.",
      "causes": [
        "Dichtung des Verschlusses verhärtet, rissig oder verformt — sie schließt nicht mehr dicht, wenn der Druck im Kessel steigt.",
        "Verschluss nicht ganz oder schief aufgeschraubt — das Gewinde sitzt versetzt oder die Sicherheitsverriegelung ist nicht vollständig eingerastet.",
        "Kalk am Dichtsitz oder im Gewinde — Ablagerungen verhindern, dass die Dichtung plan am Kessel anliegt.",
        "Kessel über die Maximalmarke gefüllt — das überschüssige Wasser wird bei steigender Temperatur und Druck zum Verschluss gedrückt."
      ],
      "steps": [
        "Gerät sofort ausstecken und mehrere Stunden abkühlen lassen; den Verschluss weder berühren noch öffnen, solange er heiß ist.",
        "Im kalten Zustand den Verschluss gemäß Anleitung abschrauben und die Dichtung prüfen: Sie muss flexibel, unbeschädigt und richtig eingesetzt sein.",
        "Dichtsitz und Gewinde mit einem feuchten Tuch reinigen und Kalkablagerungen entfernen, ohne das Metall zu zerkratzen.",
        "Nur bis zur Maximalmarke befüllen und den Verschluss fest zuschrauben, dabei Ausrichtung und Sicherheitsverriegelung kontrollieren.",
        "Tritt das Leck erneut auf, Gerät nicht mehr benutzen und einen Original-Verschluss oder eine Dichtung bestellen oder den Hersteller kontaktieren."
      ],
      "replaceWhen": "Sind Verschluss, Gewinde oder Sicherheitsventil beschädigt oder bleibt das Leck mit neuer Dichtung bestehen, ist das Gerät nicht mehr sicher. Ersetzen Sie es, statt selbst zu reparieren, besonders wenn es alt ist oder der Kessel Risse hat."
    },
    "es": {
      "intro": "Una fuga por el tapón durante el calentamiento suele indicar una junta desgastada, un tapón mal enroscado o cal en su asiento. Como la caldera está a presión, apague el aparato y no desenrosque nunca el tapón mientras esté caliente: el riesgo de quemadura es real.",
      "causes": [
        "Junta del tapón endurecida, agrietada o deformada — ya no cierra de forma estanca cuando sube la presión en la caldera.",
        "Tapón mal enroscado o torcido — la rosca no está alineada o el seguro de bloqueo no ha encajado del todo.",
        "Cal en el asiento del tapón o en la rosca — los depósitos impiden que la junta apoye plana contra la caldera.",
        "Caldera llena por encima del máximo — el exceso de agua es empujado hacia el tapón al subir la temperatura y la presión."
      ],
      "steps": [
        "Desenchufe el aparato de inmediato y déjelo enfriar varias horas; no toque ni abra el tapón mientras esté caliente.",
        "Una vez frío, desenrosque el tapón siguiendo el manual y examine la junta: debe estar flexible, intacta y bien colocada.",
        "Limpie el asiento y la rosca con un paño húmedo, retirando los depósitos de cal sin rayar el metal.",
        "Llene solo hasta la marca máxima y enrosque el tapón a fondo, comprobando la alineación y el seguro de bloqueo.",
        "Si la fuga reaparece, deje de usar el aparato y pida un tapón o una junta originales, o contacte con el servicio técnico."
      ],
      "replaceWhen": "Si el tapón, su rosca o la válvula de seguridad están dañados, o la fuga continúa con una junta nueva, el aparato ya no es seguro. Sustitúyalo en lugar de repararlo por su cuenta, sobre todo si es antiguo o la caldera está agrietada."
    },
    "it": {
      "intro": "Una perdita dal tappo durante il riscaldamento indica spesso una guarnizione usurata, un tappo avvitato male o calcare sulla sua sede. Poiché la caldaia è in pressione, spegni l'apparecchio e non svitare mai il tappo finché è caldo: il rischio di ustione è reale.",
      "causes": [
        "Guarnizione del tappo indurita, crepata o deformata — non chiude più a tenuta quando la pressione sale nella caldaia.",
        "Tappo avvitato male o storto — la filettatura non è allineata o il blocco di sicurezza non è agganciato fino in fondo.",
        "Calcare sulla sede del tappo o sulla filettatura — i depositi impediscono alla guarnizione di appoggiare piatta sulla caldaia.",
        "Caldaia riempita oltre il massimo — l'acqua in eccesso viene spinta verso il tappo mentre temperatura e pressione aumentano."
      ],
      "steps": [
        "Scollega subito l'apparecchio e lascialo raffreddare per diverse ore; non toccare né aprire il tappo finché è caldo.",
        "Quando è freddo, svita il tappo seguendo il manuale ed esamina la guarnizione: deve essere flessibile, integra e ben posizionata.",
        "Pulisci sede e filettatura con un panno umido, eliminando i depositi di calcare senza graffiare il metallo.",
        "Riempi solo fino al livello massimo e riavvita il tappo a fondo, verificando allineamento e blocco di sicurezza.",
        "Se la perdita ritorna, smetti di usare l'apparecchio e ordina un tappo o una guarnizione originali, oppure contatta l'assistenza."
      ],
      "replaceWhen": "Se tappo, filettatura o valvola di sicurezza sono danneggiati, o la perdita continua con una guarnizione nuova, l'apparecchio non è più sicuro. Sostituiscilo invece di ripararlo da solo, soprattutto se è vecchio o la caldaia è incrinata."
    },
    "nl": {
      "intro": "Een lek bij de dop tijdens het opwarmen wijst meestal op een versleten afdichting, een dop die niet goed is vastgedraaid of kalk op de dopzitting. Omdat de ketel onder druk staat, zet u het apparaat uit en draait u de dop nooit los zolang hij heet is: er is echt verbrandingsgevaar.",
      "causes": [
        "Afdichting van de dop verhard, gescheurd of vervormd — hij sluit niet meer waterdicht af als de druk in de ketel oploopt.",
        "Dop niet helemaal of scheef vastgedraaid — het schroefdraad staat niet uitgelijnd of de veiligheidsvergrendeling is niet volledig ingeklikt.",
        "Kalk op de dopzitting of het schroefdraad — afzettingen voorkomen dat de afdichting vlak tegen de ketel aansluit.",
        "Ketel boven het maximum gevuld — het overtollige water wordt naar de dop geduwd als temperatuur en druk stijgen."
      ],
      "steps": [
        "Haal direct de stekker eruit en laat het apparaat enkele uren afkoelen; raak de dop niet aan en open hem niet zolang hij heet is.",
        "Draai de dop in koude toestand los volgens de handleiding en controleer de afdichting: die moet soepel, heel en goed geplaatst zijn.",
        "Maak zitting en schroefdraad schoon met een vochtige doek en verwijder kalkaanslag zonder het metaal te krassen.",
        "Vul alleen tot de maximummarkering en draai de dop helemaal vast, waarbij u uitlijning en veiligheidsvergrendeling controleert.",
        "Komt het lek terug, gebruik het apparaat dan niet meer en bestel een originele dop of afdichting, of neem contact op met de fabrikant."
      ],
      "replaceWhen": "Zijn de dop, het schroefdraad of het veiligheidsventiel beschadigd, of blijft het lek bestaan met een nieuwe afdichting, dan is het apparaat niet meer veilig. Vervang het liever dan zelf te repareren, zeker als het oud is of de ketel gescheurd is."
    }
  }
}

export function getProblemGuide(lang: Lang, slug: string): ProblemGuide | undefined {
  return PROBLEM_GUIDES[slug]?.[lang]
}

export const PROBLEM_GUIDE_SLUGS: readonly string[] = Object.keys(PROBLEM_GUIDES)
