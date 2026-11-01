/**
 * Hub-level FAQ for each meta-silo hub page (6 locales x 5 Q&A).
 *
 * Answer-first wording (first sentence answers the question on its own)
 * so the answers can be quoted by search engines and AI assistants.
 * Rendered visibly through FaqSection, which also emits FAQPage JSON-LD.
 */
import type { Lang } from '@/lib/i18n'

export interface SiloFaqItem {
  question: string
  answer: string
}

const SILO_FAQS: Record<string, Record<Lang, readonly SiloFaqItem[]>> = {
  "cuisine-connectee": {
    fr: [
      { question: "Un airfryer consomme-t-il moins qu'un four ?", answer: "Oui, pour les petites et moyennes portions, un airfryer consomme généralement moins qu'un four classique, car sa petite cuve chauffe vite et demande peu de préchauffage. Pour une grande quantité ou un plat volumineux, le four reste plus adapté. Vérifiez la puissance en watts sur la fiche produit et comparez-la à la durée de cuisson réelle." },
      { question: "Quelle capacité d'airfryer choisir pour une famille ?", answer: "Comptez environ 3 à 4 litres pour une à deux personnes et 5 à 6 litres pour une famille de trois ou quatre. Au-delà, un modèle à double tiroir permet de cuire deux aliments en parallèle. Une cuve trop petite oblige à cuire en plusieurs fois, ce qui annule le gain de temps et d'énergie." },
      { question: "Un appareil de cuisine connecté a-t-il besoin du Wi-Fi pour fonctionner ?", answer: "Non, la plupart des appareils de cuisine connectés se pilotent aussi manuellement ; le Wi-Fi sert surtout aux recettes guidées, aux notifications et aux mises à jour. Avant d'acheter, vérifiez ce qui reste utilisable hors ligne et consultez la politique de confidentialité de l'application, car les données transmises relèvent du RGPD." },
      { question: "Peut-on brancher un appareil de cuisine sur une prise connectée ?", answer: "Oui, à condition que la prise connectée supporte une puissance supérieure à celle de l'appareil, indiquée en watts sur sa plaque. Les appareils très gourmands comme les bouilloires ou les airfryers exigent souvent une prise de 16 A. Évitez de laisser un appareil chauffant fonctionner sans surveillance, même pilotée à distance." },
      { question: "Multicuiseur ou mijoteuse : lequel choisir ?", answer: "Le multicuiseur est plus polyvalent : il combine généralement cuisson sous pression, mijotage, sauté et vapeur dans une seule cuve, alors que la mijoteuse ne fait que de la cuisson lente. Si vous cuisinez vite et varié, optez pour le multicuiseur ; si vous ne voulez que des plats mijotés, la mijoteuse suffit et coûte moins cher." },
    ],
    en: [
      { question: "Does an air fryer use less electricity than an oven?", answer: "Yes, for small and medium portions an air fryer usually uses less electricity than a conventional oven, because its compact chamber heats quickly and needs little preheating. For large batches or big dishes, the oven is still the better tool. Check the wattage on the spec sheet and compare it with the real cooking time." },
      { question: "What size air fryer do I need for a family?", answer: "Aim for roughly 3 to 4 litres for one or two people and 5 to 6 litres for a family of three or four. Beyond that, a dual-drawer model lets you cook two foods at once. A basket that is too small forces you to cook in batches, which cancels out the time and energy savings." },
      { question: "Do smart kitchen appliances need Wi-Fi to work?", answer: "No, most smart kitchen appliances can also be operated manually; Wi-Fi mainly adds guided recipes, notifications and firmware updates. Before buying, check which functions still work offline and read the app's privacy policy, since the data it collects falls under the GDPR in Europe." },
      { question: "Can I plug a kitchen appliance into a smart plug?", answer: "Yes, as long as the smart plug is rated for more power than the appliance draws, which is printed in watts on its label. High-draw items such as kettles and air fryers often need a 16 A plug. Avoid leaving a heating appliance running unattended, even when controlled remotely." },
      { question: "Multicooker or slow cooker: which should I buy?", answer: "A multicooker is more versatile: it typically combines pressure cooking, slow cooking, sautéing and steaming in one pot, whereas a slow cooker only cooks gently over several hours. Choose a multicooker if you want fast and varied meals, and a slow cooker if stews are all you need and you want to spend less." },
    ],
    de: [
      { question: "Verbraucht eine Heißluftfritteuse weniger Strom als ein Backofen?", answer: "Ja, bei kleinen und mittleren Portionen verbraucht eine Heißluftfritteuse in der Regel weniger Strom als ein Backofen, weil der kompakte Garraum schnell aufheizt und kaum Vorheizen nötig ist. Für große Mengen bleibt der Backofen sinnvoller. Prüfen Sie die Wattzahl im Datenblatt und vergleichen Sie sie mit der tatsächlichen Garzeit." },
      { question: "Welche Größe sollte eine Heißluftfritteuse für eine Familie haben?", answer: "Rechnen Sie mit etwa 3 bis 4 Litern für ein bis zwei Personen und 5 bis 6 Litern für drei bis vier Personen. Darüber hinaus erlaubt ein Modell mit zwei Schubladen, zwei Speisen gleichzeitig zu garen. Ein zu kleiner Korb zwingt zum Garen in mehreren Durchgängen und hebt Zeit- und Energieersparnis auf." },
      { question: "Brauchen vernetzte Küchengeräte WLAN, um zu funktionieren?", answer: "Nein, die meisten vernetzten Küchengeräte lassen sich auch manuell bedienen; WLAN bringt vor allem geführte Rezepte, Benachrichtigungen und Updates. Prüfen Sie vor dem Kauf, welche Funktionen offline laufen, und lesen Sie die Datenschutzerklärung der App, denn die erhobenen Daten unterliegen in Europa der DSGVO." },
      { question: "Kann ich ein Küchengerät an eine smarte Steckdose anschließen?", answer: "Ja, sofern die smarte Steckdose für eine höhere Leistung ausgelegt ist, als das Gerät aufnimmt; diese steht in Watt auf dem Typenschild. Starke Verbraucher wie Wasserkocher oder Heißluftfritteusen brauchen oft eine 16-A-Steckdose. Lassen Sie ein Heizgerät nie unbeaufsichtigt laufen, auch nicht per Fernsteuerung." },
      { question: "Multikocher oder Slow Cooker: Was sollte ich kaufen?", answer: "Ein Multikocher ist vielseitiger: Er vereint meist Druckgaren, Schmoren, Anbraten und Dampfgaren in einem Topf, während ein Slow Cooker nur schonend über mehrere Stunden gart. Wer schnell und abwechslungsreich kochen will, wählt den Multikocher; wer nur Eintöpfe zubereitet und sparen möchte, kommt mit dem Slow Cooker aus." },
    ],
    es: [
      { question: "¿Una freidora de aire consume menos que un horno?", answer: "Sí, para porciones pequeñas y medianas una freidora de aire suele consumir menos que un horno convencional, porque su cámara compacta se calienta rápido y casi no necesita precalentar. Para grandes cantidades, el horno sigue siendo mejor opción. Comprueba la potencia en vatios en la ficha técnica y compárala con el tiempo real de cocción." },
      { question: "¿Qué capacidad de freidora de aire necesito para una familia?", answer: "Calcula unos 3 a 4 litros para una o dos personas y de 5 a 6 litros para una familia de tres o cuatro. Por encima, un modelo de doble cajón permite cocinar dos alimentos a la vez. Una cesta demasiado pequeña obliga a cocinar por tandas y anula el ahorro de tiempo y energía." },
      { question: "¿Los electrodomésticos de cocina conectados necesitan Wi-Fi para funcionar?", answer: "No, la mayoría de los electrodomésticos de cocina conectados también se manejan de forma manual; el Wi-Fi aporta sobre todo recetas guiadas, notificaciones y actualizaciones. Antes de comprar, comprueba qué funciones siguen disponibles sin conexión y lee la política de privacidad de la app, porque los datos que recoge están sujetos al RGPD." },
      { question: "¿Se puede conectar un electrodoméstico de cocina a un enchufe inteligente?", answer: "Sí, siempre que el enchufe inteligente soporte más potencia de la que consume el aparato, indicada en vatios en su etiqueta. Los aparatos muy potentes, como hervidores o freidoras de aire, suelen requerir un enchufe de 16 A. Evita dejar un aparato calefactor funcionando sin vigilancia, aunque lo controles a distancia." },
      { question: "¿Multicocina o olla de cocción lenta: cuál elegir?", answer: "La multicocina es más versátil: suele combinar cocción a presión, cocción lenta, salteado y vapor en una sola olla, mientras que la olla de cocción lenta solo cocina despacio durante horas. Elige multicocina si quieres comidas rápidas y variadas, y olla lenta si solo preparas guisos y quieres gastar menos." },
    ],
    it: [
      { question: "Una friggitrice ad aria consuma meno di un forno?", answer: "Sì, per porzioni piccole e medie una friggitrice ad aria di solito consuma meno di un forno tradizionale, perché la camera compatta si scalda in fretta e richiede poco preriscaldamento. Per grandi quantità il forno resta più adatto. Controlla la potenza in watt nella scheda tecnica e confrontala con il tempo di cottura reale." },
      { question: "Che capacità deve avere una friggitrice ad aria per una famiglia?", answer: "Conta circa 3-4 litri per una o due persone e 5-6 litri per una famiglia di tre o quattro. Oltre, un modello a doppio cassetto permette di cuocere due alimenti insieme. Un cestello troppo piccolo costringe a cuocere in più volte e annulla il risparmio di tempo ed energia." },
      { question: "Gli elettrodomestici da cucina connessi hanno bisogno del Wi-Fi per funzionare?", answer: "No, la maggior parte degli elettrodomestici da cucina connessi si usa anche manualmente; il Wi-Fi serve soprattutto per ricette guidate, notifiche e aggiornamenti. Prima di acquistare verifica quali funzioni restano disponibili offline e leggi l'informativa privacy dell'app, perché i dati raccolti rientrano nel GDPR." },
      { question: "Si può collegare un elettrodomestico da cucina a una presa smart?", answer: "Sì, purché la presa smart sia dimensionata per una potenza superiore a quella assorbita dall'apparecchio, indicata in watt sulla targhetta. Apparecchi molto potenti come bollitori e friggitrici ad aria richiedono spesso una presa da 16 A. Evita di lasciare un apparecchio riscaldante acceso senza sorveglianza, anche se controllato da remoto." },
      { question: "Multicooker o slow cooker: quale scegliere?", answer: "Il multicooker è più versatile: in genere unisce cottura a pressione, cottura lenta, rosolatura e vapore in un'unica pentola, mentre lo slow cooker cuoce solo lentamente per ore. Scegli il multicooker se vuoi pasti rapidi e vari, lo slow cooker se prepari soprattutto stufati e vuoi spendere meno." },
    ],
    nl: [
      { question: "Gebruikt een airfryer minder stroom dan een oven?", answer: "Ja, voor kleine en middelgrote porties gebruikt een airfryer meestal minder stroom dan een gewone oven, omdat de compacte kuip snel opwarmt en nauwelijks voorverwarmen nodig is. Voor grote hoeveelheden blijft de oven handiger. Controleer het vermogen in watt in de specificaties en vergelijk dat met de echte baktijd." },
      { question: "Welke maat airfryer heb ik nodig voor een gezin?", answer: "Reken op ongeveer 3 tot 4 liter voor één of twee personen en 5 tot 6 liter voor een gezin van drie of vier. Daarboven kun je met een model met twee laden twee gerechten tegelijk bereiden. Een te kleine mand dwingt je in porties te bakken, waardoor je tijd- en energiewinst verdwijnt." },
      { question: "Hebben slimme keukenapparaten wifi nodig om te werken?", answer: "Nee, de meeste slimme keukenapparaten werk je ook handmatig; wifi voegt vooral geleide recepten, meldingen en updates toe. Controleer vóór aankoop welke functies offline werken en lees het privacybeleid van de app, want de verzamelde gegevens vallen in Europa onder de AVG." },
      { question: "Kan ik een keukenapparaat op een slimme stekker aansluiten?", answer: "Ja, mits de slimme stekker een hoger vermogen aankan dan het apparaat verbruikt; dat staat in watt op het typeplaatje. Zware verbruikers zoals waterkokers en airfryers hebben vaak een stekker van 16 A nodig. Laat een verwarmend apparaat nooit zonder toezicht draaien, ook niet als je het op afstand bedient." },
      { question: "Multicooker of slowcooker: welke kies ik?", answer: "Een multicooker is veelzijdiger: hij combineert meestal snelkoken onder druk, langzaam garen, aanbraden en stomen in één pan, terwijl een slowcooker alleen rustig gedurende uren gaart. Kies een multicooker voor snelle, gevarieerde maaltijden en een slowcooker als je vooral stoofgerechten maakt en minder wilt uitgeven." },
    ],
    pl: [
      {
        question: "Czy frytkownica beztłuszczowa zużywa mniej prądu niż piekarnik?",
        answer: "Tak, przy małych i średnich porcjach frytkownica beztłuszczowa zużywa zwykle mniej energii niż tradycyjny piekarnik, bo jej niewielka komora szybko się nagrzewa i wymaga krótkiego nagrzewania wstępnego. Przy dużej ilości jedzenia lub większym daniu lepiej sprawdzi się piekarnik. Sprawdź moc w watach w karcie produktu i zestaw ją z rzeczywistym czasem pieczenia.",
      },
      {
        question: "Jaką pojemność frytkownicy beztłuszczowej wybrać dla rodziny?",
        answer: "Dla jednej lub dwóch osób wystarczy około 3–4 litrów, a dla rodziny trzy- lub czteroosobowej – 5–6 litrów. Przy większych potrzebach model z dwiema szufladami pozwala przyrządzać dwie potrawy jednocześnie. Zbyt mała komora zmusza do smażenia na raty, co niweczy oszczędność czasu i energii.",
      },
      {
        question: "Czy inteligentne urządzenie kuchenne potrzebuje Wi-Fi do działania?",
        answer: "Nie, większość inteligentnych urządzeń kuchennych można obsługiwać także ręcznie; Wi-Fi służy głównie do przepisów krok po kroku, powiadomień i aktualizacji. Przed zakupem sprawdź, które funkcje działają bez internetu, i przeczytaj politykę prywatności aplikacji, bo przesyłane dane podlegają RODO.",
      },
      {
        question: "Czy można podłączyć urządzenie kuchenne do inteligentnego gniazdka?",
        answer: "Tak, pod warunkiem że inteligentne gniazdko wytrzymuje większą moc niż urządzenie – znajdziesz ją w watach na jego tabliczce znamionowej. Urządzenia o dużym poborze mocy, takie jak czajniki czy frytkownice beztłuszczowe, często wymagają gniazdka 16 A. Nie zostawiaj urządzenia grzewczego bez nadzoru, nawet jeśli możesz sterować nim zdalnie.",
      },
      {
        question: "Multicooker czy wolnowar: co wybrać?",
        answer: "Multicooker jest bardziej uniwersalny: zwykle łączy w jednym naczyniu gotowanie pod ciśnieniem, powolne duszenie, podsmażanie i gotowanie na parze, a wolnowar potrafi tylko gotować powoli. Jeśli gotujesz szybko i różnorodnie, wybierz multicooker; jeśli interesują Cię wyłącznie dania duszone, wystarczy wolnowar, który jest tańszy.",
      },
    ],
    sv: [
      {
        question: "Drar en airfryer mindre el än en ugn?",
        answer: "Ja, för små och mellanstora portioner drar en airfryer oftast mindre el än en vanlig ugn, eftersom det lilla utrymmet värms upp snabbt och knappt behöver förvärmas. Ska du laga stora mängder eller en skrymmande rätt är ugnen fortfarande bättre. Kontrollera effekten i watt i produktbladet och jämför den med den faktiska tillagningstiden.",
      },
      {
        question: "Hur stor airfryer behöver en familj?",
        answer: "Räkna med ungefär 3–4 liter för en eller två personer och 5–6 liter för en familj på tre eller fyra. Är familjen större än så kan du välja en modell med två lådor och laga två saker samtidigt. En för liten korg tvingar dig att laga maten i flera omgångar, och då går vinsten i tid och energi förlorad.",
      },
      {
        question: "Behöver smarta köksapparater wifi för att fungera?",
        answer: "Nej, de flesta smarta köksapparater går också att använda för hand. Wifi ger framför allt guidade recept, notiser och uppdateringar av programvaran. Kontrollera före köpet vilka funktioner som fungerar utan internet och läs appens integritetspolicy, eftersom uppgifterna som skickas omfattas av GDPR.",
      },
      {
        question: "Kan jag koppla en köksapparat till en smart plugg?",
        answer: "Ja, så länge den smarta pluggen klarar en högre effekt än apparaten drar. Effekten står i watt på apparatens typskylt. Apparater som drar mycket, som vattenkokare och airfryrar, kräver ofta en plugg för 16 A. Undvik att låta en apparat som blir varm stå på utan uppsikt, även om du kan styra den på distans.",
      },
      {
        question: "Multikokare eller slowcooker: vilken ska jag välja?",
        answer: "Multikokaren är mer mångsidig: den kombinerar oftast tryckkokning, långkok, stekning och ångkokning i ett och samma kärl, medan slowcookern bara långkokar. Vill du laga snabb och varierad mat är multikokaren rätt val. Vill du bara laga grytor räcker en slowcooker, och den kostar mindre.",
      },
    ],
    us: [
      {
        question: "Does an air fryer use less electricity than an oven?",
        answer: "Yes. For small and medium portions, an air fryer usually uses less electricity than a full-size oven, because its compact chamber heats up fast and needs little preheating. For big batches or large dishes, the oven is still the better tool. Check the wattage on the spec sheet and weigh it against the actual cooking time.",
      },
      {
        question: "What size air fryer do I need for a family?",
        answer: "Plan on roughly 3 to 4 quarts for one or two people and 5 to 6 quarts for a family of three or four. Beyond that, a dual-basket model lets you cook two foods at once. A basket that's too small means cooking in batches, which wipes out the time and energy savings.",
      },
      {
        question: "Do smart kitchen appliances need Wi-Fi to work?",
        answer: "No. Most smart kitchen appliances can also be run from the controls on the unit; Wi-Fi mainly adds guided recipes, notifications and firmware updates. Before you buy, check which features still work offline, and read the app's privacy policy to see what data it collects and how that data is used.",
      },
      {
        question: "Can I plug a kitchen appliance into a smart plug?",
        answer: "Yes, as long as the smart plug is rated for more power than the appliance draws (the wattage is printed on its label). High-draw appliances such as electric kettles and air fryers often need a smart plug rated for the full 15 A (1,800 W) of a standard 120 V outlet, so compare the plug's maximum load with the appliance's wattage. Don't leave a heating appliance running unattended, even if you can control it remotely.",
      },
      {
        question: "Multicooker or slow cooker: which should I buy?",
        answer: "A multicooker is more versatile: it typically combines pressure cooking, slow cooking, sautéing and steaming in one pot, while a slow cooker only cooks low and slow over several hours. Get a multicooker if you want fast, varied meals, and a slow cooker if slow-simmered dishes are all you need and you'd rather spend less.",
      },
    ],
    ca: [
      {
        question: "Does an air fryer use less electricity than an oven?",
        answer: "Yes, for small and medium portions an air fryer usually uses less electricity than a conventional oven, because its compact chamber heats up quickly and needs little preheating. For large batches or big dishes, the oven is still the better tool. Check the wattage on the spec sheet and compare it with the actual cooking time.",
      },
      {
        question: "What size air fryer do I need for a family?",
        answer: "Aim for roughly 3 to 4 litres (about 3 to 4 quarts) for one or two people and 5 to 6 litres (about 5 to 6 quarts) for a family of three or four. Beyond that, a dual-basket model lets you cook two foods at once. A basket that's too small forces you to cook in batches, which cancels out the time and energy savings.",
      },
      {
        question: "Do smart kitchen appliances need Wi-Fi to work?",
        answer: "No, most smart kitchen appliances can also be run manually; Wi-Fi mainly adds guided recipes, notifications and firmware updates. Before you buy, check which functions still work offline and read the app's privacy policy to see what data it collects.",
      },
      {
        question: "Can I plug a kitchen appliance into a smart plug?",
        answer: "Yes, as long as the smart plug is rated for more power than the appliance draws, which is printed in watts on its label. High-draw items such as kettles and air fryers often need a plug rated for the full 15 A (1,800 W) that a standard 120 V outlet provides. Avoid leaving a heating appliance running unattended, even when you control it remotely.",
      },
      {
        question: "Multicooker or slow cooker: which should I buy?",
        answer: "A multicooker is more versatile: it typically combines pressure cooking, slow cooking, sautéing and steaming in one pot, whereas a slow cooker only cooks gently over several hours. Choose a multicooker if you want fast and varied meals, and a slow cooker if stews are all you need and you want to spend less.",
      },
    ],
  },
  "energie-domotique": {
    fr: [
      { question: "Faut-il un hub pour les appareils compatibles Matter ?", answer: "Pas toujours : un appareil Matter en Wi-Fi fonctionne avec un contrôleur compatible, comme un HomePod, une enceinte Google ou Alexa. Les appareils Matter en Thread, eux, demandent un routeur de bordure Thread, souvent intégré à ces mêmes enceintes. Vérifiez la compatibilité de votre écosystème avant d'acheter un hub dédié." },
      { question: "Un thermostat connecté permet-il vraiment d'économiser sur le chauffage ?", answer: "Oui, il peut réduire la consommation en programmant la température selon vos horaires et en coupant le chauffage en votre absence, mais le gain dépend de l'isolation du logement et de vos habitudes. Vérifiez la compatibilité avec votre chaudière ou vos radiateurs et choisissez un modèle capable de piloter pièce par pièce." },
      { question: "Les kits solaires de balcon sont-ils autorisés en Europe ?", answer: "Dans de nombreux pays européens, oui, dans des limites de puissance qui varient selon le pays ; en Allemagne, par exemple, la limite courante est de 800 W côté onduleur. Vérifiez la réglementation locale, les éventuelles obligations de déclaration auprès du gestionnaire de réseau et la présence d'un onduleur certifié aux normes européennes." },
      { question: "Comment savoir quels appareils consomment le plus d'électricité chez moi ?", answer: "Branchez les appareils suspects sur une prise connectée avec mesure de consommation, qui affiche les watts en temps réel et les kilowattheures cumulés. Pour une vue globale, un compteur d'énergie à pinces installé au tableau électrique mesure toute la maison. Choisissez une prise au format européen avec une puissance maximale adaptée." },
      { question: "Une batterie domestique est-elle utile avec des panneaux solaires de balcon ?", answer: "Elle est utile surtout si votre production dépasse votre consommation en journée et que vous consommez davantage le soir. Sans surplus régulier, la batterie reste peu sollicitée. Comparez la capacité en kWh avec votre consommation du soir et vérifiez la compatibilité avec votre onduleur avant d'acheter." },
    ],
    en: [
      { question: "Do I need a hub for Matter devices?", answer: "Not always: a Wi-Fi Matter device works with a compatible controller such as a HomePod, a Google speaker or an Alexa speaker. Matter devices that use Thread additionally need a Thread border router, which is often built into those same speakers. Check your ecosystem's compatibility before buying a dedicated hub." },
      { question: "Does a smart thermostat really save money on heating?", answer: "Yes, it can cut consumption by scheduling temperatures around your routine and turning heating down when you are out, but the saving depends on your home's insulation and habits. Check that it is compatible with your boiler or radiators, and choose a model that can control rooms individually." },
      { question: "Are plug-in balcony solar kits legal in Europe?", answer: "In many European countries, yes, within power limits that vary by country; in Germany, for example, the common limit is 800 W on the inverter side. Check local rules, any requirement to notify your grid operator, and that the inverter is certified to European standards." },
      { question: "How can I find out which appliances use the most electricity at home?", answer: "Plug suspect appliances into a smart plug with energy monitoring, which shows live watts and cumulative kilowatt-hours. For a whole-home view, a clamp-style energy monitor fitted at the consumer unit measures the entire house. Choose an EU-format plug with a maximum load that suits the appliance." },
      { question: "Is a home battery worth it with balcony solar panels?", answer: "It is mainly worthwhile if your panels produce more than you use during the day and you consume more in the evening. Without a regular surplus, the battery is barely used. Compare its capacity in kWh with your evening consumption and check inverter compatibility before buying." },
    ],
    de: [
      { question: "Brauche ich einen Hub für Matter-Geräte?", answer: "Nicht immer: Ein Matter-Gerät über WLAN funktioniert mit einem kompatiblen Controller wie HomePod, Google- oder Alexa-Lautsprecher. Matter-Geräte mit Thread brauchen zusätzlich einen Thread-Border-Router, der oft schon in diesen Lautsprechern steckt. Prüfen Sie die Kompatibilität Ihres Ökosystems, bevor Sie einen eigenen Hub kaufen." },
      { question: "Spart ein smartes Thermostat wirklich Heizkosten?", answer: "Ja, es kann den Verbrauch senken, indem es Temperaturen nach Ihrem Tagesablauf plant und die Heizung bei Abwesenheit herunterregelt; die Ersparnis hängt jedoch von Dämmung und Gewohnheiten ab. Prüfen Sie die Kompatibilität mit Ihrer Heizung oder Ihren Heizkörpern und wählen Sie ein Modell mit raumweiser Regelung." },
      { question: "Sind Balkonkraftwerke in Europa erlaubt?", answer: "In vielen europäischen Ländern ja, innerhalb von Leistungsgrenzen, die je nach Land unterschiedlich sind; in Deutschland liegt die übliche Grenze bei 800 Watt Wechselrichterleistung. Prüfen Sie die lokalen Vorschriften, eine eventuelle Meldepflicht beim Netzbetreiber und ob der Wechselrichter europäischen Normen entspricht." },
      { question: "Wie finde ich heraus, welche Geräte im Haushalt am meisten Strom verbrauchen?", answer: "Stecken Sie verdächtige Geräte in eine smarte Steckdose mit Verbrauchsmessung, die Watt in Echtzeit und die summierten Kilowattstunden anzeigt. Für den ganzen Haushalt misst ein Strommessgerät mit Zangenwandler im Sicherungskasten das gesamte Haus. Achten Sie auf Steckdosen im EU-Format mit passender Maximallast." },
      { question: "Lohnt sich ein Heimspeicher zusammen mit einem Balkonkraftwerk?", answer: "Er lohnt sich vor allem, wenn Ihre Module tagsüber mehr erzeugen, als Sie verbrauchen, und Sie abends mehr Strom brauchen. Ohne regelmäßigen Überschuss wird der Speicher kaum genutzt. Vergleichen Sie die Kapazität in kWh mit Ihrem Abendverbrauch und prüfen Sie die Wechselrichter-Kompatibilität vor dem Kauf." },
    ],
    es: [
      { question: "¿Necesito un hub para dispositivos compatibles con Matter?", answer: "No siempre: un dispositivo Matter por Wi-Fi funciona con un controlador compatible, como un HomePod, un altavoz de Google o uno de Alexa. Los dispositivos Matter que usan Thread necesitan además un router de borde Thread, que muchas veces ya viene integrado en esos altavoces. Comprueba la compatibilidad de tu ecosistema antes de comprar un hub." },
      { question: "¿Un termostato inteligente ahorra de verdad en calefacción?", answer: "Sí, puede reducir el consumo programando la temperatura según tus horarios y bajando la calefacción cuando no estás, pero el ahorro depende del aislamiento de la vivienda y de tus hábitos. Comprueba la compatibilidad con tu caldera o radiadores y elige un modelo que controle estancia por estancia." },
      { question: "¿Son legales los kits solares de balcón en Europa?", answer: "En muchos países europeos sí, dentro de límites de potencia que varían según el país; en Alemania, por ejemplo, el límite habitual es de 800 W en el inversor. Consulta la normativa local, la posible obligación de notificar a la distribuidora y que el inversor cumpla las normas europeas." },
      { question: "¿Cómo sé qué aparatos consumen más electricidad en casa?", answer: "Conecta los aparatos sospechosos a un enchufe inteligente con medición de consumo, que muestra los vatios en tiempo real y los kilovatios hora acumulados. Para una visión de toda la casa, un monitor de energía con pinzas instalado en el cuadro eléctrico mide el total. Elige un enchufe de formato europeo con carga máxima adecuada." },
      { question: "¿Merece la pena una batería doméstica con paneles solares de balcón?", answer: "Merece la pena sobre todo si tus paneles producen más de lo que consumes durante el día y gastas más por la noche. Sin un excedente regular, la batería apenas se usa. Compara su capacidad en kWh con tu consumo nocturno y comprueba la compatibilidad con el inversor antes de comprar." },
    ],
    it: [
      { question: "Serve un hub per i dispositivi compatibili Matter?", answer: "Non sempre: un dispositivo Matter via Wi-Fi funziona con un controller compatibile, come un HomePod, uno speaker Google o Alexa. I dispositivi Matter che usano Thread richiedono inoltre un border router Thread, spesso già integrato in quegli stessi speaker. Verifica la compatibilità del tuo ecosistema prima di acquistare un hub dedicato." },
      { question: "Un termostato smart fa davvero risparmiare sul riscaldamento?", answer: "Sì, può ridurre i consumi programmando la temperatura in base ai tuoi orari e abbassando il riscaldamento quando sei fuori, ma il risparmio dipende dall'isolamento della casa e dalle tue abitudini. Verifica la compatibilità con la caldaia o i termosifoni e scegli un modello che gestisca le stanze singolarmente." },
      { question: "I kit solari da balcone sono legali in Europa?", answer: "In molti paesi europei sì, entro limiti di potenza che cambiano da paese a paese; in Germania, ad esempio, il limite comune è di 800 W lato inverter. Controlla le norme locali, l'eventuale obbligo di comunicazione al gestore di rete e che l'inverter sia certificato secondo le norme europee." },
      { question: "Come scopro quali apparecchi consumano più elettricità in casa?", answer: "Collega gli apparecchi sospetti a una presa smart con misurazione dei consumi, che mostra i watt in tempo reale e i kilowattora cumulati. Per vedere tutta la casa, un misuratore di energia a pinza installato nel quadro elettrico misura il totale. Scegli una presa di formato europeo con carico massimo adeguato." },
      { question: "Vale la pena una batteria domestica con il solare da balcone?", answer: "Vale la pena soprattutto se i pannelli producono più di quanto consumi di giorno e consumi di più la sera. Senza un surplus regolare la batteria viene usata poco. Confronta la capacità in kWh con il tuo consumo serale e verifica la compatibilità con l'inverter prima di acquistare." },
    ],
    nl: [
      { question: "Heb ik een hub nodig voor Matter-apparaten?", answer: "Niet altijd: een Matter-apparaat via wifi werkt met een compatibele controller zoals een HomePod, Google- of Alexa-speaker. Matter-apparaten die Thread gebruiken hebben daarnaast een Thread-border-router nodig, die vaak al in die speakers zit. Controleer de compatibiliteit van je ecosysteem voordat je een aparte hub koopt." },
      { question: "Bespaart een slimme thermostaat echt op stookkosten?", answer: "Ja, hij kan het verbruik verlagen door temperaturen te plannen rond je dagritme en de verwarming lager te zetten als je weg bent, maar de besparing hangt af van de isolatie van je woning en je gewoontes. Controleer de compatibiliteit met je cv-ketel of radiatoren en kies een model dat per kamer kan regelen." },
      { question: "Zijn plug-in balkonzonnepanelen legaal in Europa?", answer: "In veel Europese landen wel, binnen vermogensgrenzen die per land verschillen; in Duitsland is de gangbare grens bijvoorbeeld 800 W aan omvormerzijde. Controleer de lokale regels, een eventuele meldplicht bij je netbeheerder en of de omvormer aan Europese normen voldoet." },
      { question: "Hoe ontdek ik welke apparaten het meeste stroom verbruiken?", answer: "Steek verdachte apparaten in een slimme stekker met verbruiksmeting, die live watt en opgetelde kilowattuur toont. Voor een overzicht van het hele huis meet een energiemeter met tang in de meterkast het totaal. Kies een stekker in Europees formaat met een geschikte maximale belasting." },
      { question: "Is een thuisbatterij zinvol bij balkonzonnepanelen?", answer: "Vooral zinvol als je panelen overdag meer opwekken dan je verbruikt en je 's avonds meer stroom gebruikt. Zonder regelmatig overschot wordt de batterij nauwelijks benut. Vergelijk de capaciteit in kWh met je avondverbruik en controleer de compatibiliteit met de omvormer vóór aankoop." },
    ],
    pl: [
      {
        question: "Czy do urządzeń zgodnych z Matter potrzebny jest hub?",
        answer: "Nie zawsze: urządzenie Matter działające przez Wi-Fi współpracuje ze zgodnym kontrolerem, takim jak HomePod, głośnik Google czy głośnik z Alexą. Urządzenia Matter korzystające z Thread wymagają natomiast routera brzegowego Thread, który często jest wbudowany w te same głośniki. Zanim kupisz osobny hub, sprawdź zgodność swojego ekosystemu.",
      },
      {
        question: "Czy inteligentny termostat naprawdę pozwala oszczędzać na ogrzewaniu?",
        answer: "Tak, może zmniejszyć zużycie, bo ustawia temperaturę zgodnie z Twoim planem dnia i wyłącza ogrzewanie, gdy nie ma Cię w domu, ale oszczędność zależy od izolacji budynku i Twoich nawyków. Sprawdź zgodność z kotłem lub grzejnikami i wybierz model, który pozwala sterować każdym pomieszczeniem osobno.",
      },
      {
        question: "Czy elektrownie balkonowe są dozwolone w Europie?",
        answer: "W wielu krajach europejskich tak, choć dopuszczalna moc różni się w zależności od kraju; w Niemczech na przykład typowy limit wynosi 800 W po stronie falownika. Sprawdź lokalne przepisy, ewentualny obowiązek zgłoszenia instalacji operatorowi sieci oraz to, czy falownik ma certyfikat zgodności z normami europejskimi.",
      },
      {
        question: "Jak sprawdzić, które urządzenia w domu zużywają najwięcej prądu?",
        answer: "Podłącz podejrzane urządzenia do inteligentnego gniazdka z pomiarem zużycia energii, które pokazuje bieżący pobór w watach i łączne zużycie w kilowatogodzinach. Całe mieszkanie lub dom obejmie miernik zużycia energii z cęgami zamontowany w rozdzielnicy. Wybierz gniazdko w standardzie europejskim, o maksymalnym obciążeniu dopasowanym do urządzenia.",
      },
      {
        question: "Czy domowy magazyn energii ma sens przy elektrowni balkonowej?",
        answer: "Przydaje się głównie wtedy, gdy w ciągu dnia produkujesz więcej energii, niż zużywasz, a więcej prądu potrzebujesz wieczorem. Bez regularnych nadwyżek magazyn będzie rzadko wykorzystywany. Przed zakupem porównaj jego pojemność w kWh ze swoim wieczornym zużyciem i sprawdź zgodność z falownikiem.",
      },
    ],
    sv: [
      {
        question: "Behöver jag en hubb för Matter-enheter?",
        answer: "Inte alltid. En Matter-enhet som använder wifi fungerar med en kompatibel styrenhet, till exempel en HomePod eller en smart högtalare med Google eller Alexa. Matter-enheter som använder Thread behöver dessutom en Thread Border Router (gränsrouter för Thread), och den finns ofta redan inbyggd i samma högtalare. Kontrollera vad ditt ekosystem har stöd för innan du köper en separat hubb.",
      },
      {
        question: "Sparar en smart termostat verkligen pengar på uppvärmningen?",
        answer: "Ja, den kan minska förbrukningen genom att schemalägga temperaturen efter dina tider och sänka värmen när du inte är hemma, men hur mycket du sparar beror på hur välisolerad bostaden är och på dina vanor. Kontrollera att termostaten fungerar med din värmepanna eller dina element, och välj en modell som kan styra värmen rum för rum.",
      },
      {
        question: "Är solcellskit för balkongen tillåtna i Europa?",
        answer: "Ja, i många europeiska länder, inom effektgränser som skiljer sig åt mellan länderna. I Tyskland är den vanliga gränsen till exempel 800 W på växelriktarsidan. Kontrollera vilka regler som gäller där du bor, om anläggningen måste anmälas till elnätsbolaget och att växelriktaren är certifierad enligt europeiska standarder.",
      },
      {
        question: "Hur ser jag vilka apparater som drar mest el hemma?",
        answer: "Koppla in de apparater du misstänker i en smart plugg med energimätning. Den visar effekten i watt i realtid och den sammanlagda förbrukningen i kilowattimmar. Vill du se helheten mäter en energimätare med strömtänger i elcentralen förbrukningen i hela huset. Välj en plugg med EU-kontakt och en maxbelastning som passar apparaten.",
      },
      {
        question: "Lönar sig ett hembatteri till balkongsolceller?",
        answer: "Framför allt om panelerna producerar mer el än du använder under dagen och du förbrukar mer på kvällen. Utan regelbunden överskottsel kommer batteriet knappt till användning. Jämför batteriets kapacitet i kWh med din kvällsförbrukning och kontrollera att det fungerar med din växelriktare innan du köper.",
      },
    ],
    us: [
      {
        question: "Do I need a hub for Matter devices?",
        answer: "Not always. A Wi-Fi Matter device works with a compatible controller, such as a HomePod or a Google or Alexa smart speaker. Matter devices that run on Thread also need a Thread border router, which is often built into those same speakers. Check what your ecosystem supports before you buy a dedicated hub.",
      },
      {
        question: "Does a smart thermostat really save money on heating?",
        answer: "Yes, it can cut energy use by scheduling temperatures around your routine and turning the heat down when you're out, but the savings depend on your home's insulation and your habits. Check that it's compatible with your heating system, whether that's a boiler, radiators or a furnace, and choose a model that can control rooms individually.",
      },
      {
        question: "Is plug-in balcony solar allowed where I live?",
        answer: "In many European countries, yes, within power limits that vary by country (in Germany, for example, the common limit is 800 W on the inverter side), and you may have to notify the grid operator. In the US, rules for plug-in solar vary by state and utility, so check with your utility before you connect a kit. Either way, make sure the inverter is certified for your market: European standards in Europe, a UL or ETL listing mark in the US.",
      },
      {
        question: "How can I find out which appliances use the most electricity at home?",
        answer: "Plug the suspects into a smart plug with energy monitoring, which shows live watts and cumulative kilowatt-hours. For a whole-home view, a home energy monitor with CT clamps installed in your electrical panel (a job for a licensed electrician) measures the entire house. Choose a plug that fits your outlets and is rated for the appliance's maximum load.",
      },
      {
        question: "Is a home battery worth it with balcony solar panels?",
        answer: "It's mainly worth it if your panels produce more than you use during the day and you use more power in the evening. Without a regular surplus, the battery sits mostly idle. Compare its capacity in kWh with your evening usage, and check that it works with your inverter before you buy.",
      },
    ],
    ca: [
      {
        question: "Do I need a hub for Matter devices?",
        answer: "Not always: a Wi-Fi Matter device works with a compatible controller such as a HomePod, a Google speaker or an Alexa speaker. Matter devices that use Thread additionally need a Thread border router, which is often built into those same speakers. Check your ecosystem's compatibility before buying a dedicated hub.",
      },
      {
        question: "Does a smart thermostat really save money on heating?",
        answer: "Yes, it can cut consumption by scheduling temperatures around your routine and turning the heat down when you're out, but the savings depend on your home's insulation and your habits. Check that it's compatible with your heating system, whether that's a furnace, a heat pump, a boiler or electric heaters, and choose a model that can control rooms individually.",
      },
      {
        question: "Are plug-in balcony solar kits legal?",
        answer: "It depends on where you live. Many European countries allow them within power limits that vary by country; in Germany, for example, the common limit is 800 W on the inverter side. Elsewhere, rules for plug-in solar differ by country and utility, so check with your utility and your provincial electrical safety authority before connecting anything, and look for an inverter with a recognized certification mark such as CSA, cUL or cETL.",
      },
      {
        question: "How can I find out which appliances use the most electricity at home?",
        answer: "Plug suspect appliances into a smart plug with energy monitoring, which shows live watts and cumulative kilowatt-hours. For a whole-home view, a clamp-style energy monitor installed in your electrical panel measures the entire house; when in doubt, have a licensed electrician install it. Choose a plug whose maximum load suits the appliance.",
      },
      {
        question: "Is a home battery worth it with balcony solar panels?",
        answer: "It is mainly worthwhile if your panels produce more than you use during the day and you consume more in the evening. Without a regular surplus, the battery is barely used. Compare its capacity in kWh with your evening consumption and check inverter compatibility before buying.",
      },
    ],
  },
  "securite-maison": {
    fr: [
      { question: "Quelle caméra de surveillance fonctionne sans abonnement ?", answer: "Les caméras qui enregistrent en local, sur carte microSD ou sur un enregistreur ou une base domestique, fonctionnent sans abonnement. Le stockage cloud, lui, est généralement payant ou limité. Vérifiez aussi que la caméra prend en charge les protocoles ouverts comme ONVIF ou RTSP, et privilégiez un stockage local pour mieux maîtriser vos données au regard du RGPD." },
      { question: "A-t-on le droit de filmer l'extérieur de son domicile avec une caméra ?", answer: "En règle générale, une caméra doit filmer uniquement votre propriété, sans cadrer la voie publique ni les voisins, car le RGPD et les lois nationales encadrent la captation d'images. Les règles précises varient selon le pays : renseignez-vous auprès de l'autorité locale de protection des données et orientez l'angle de la caméra en conséquence." },
      { question: "Une serrure connectée est-elle sûre et que se passe-t-il si la batterie est vide ?", answer: "Une serrure connectée sérieuse prévient bien avant la décharge des piles et conserve une clé mécanique ou un code de secours pour ouvrir la porte. Vérifiez qu'elle s'adapte à votre cylindre européen, qu'elle fonctionne par Bluetooth même sans Wi-Fi et que les communications sont chiffrées." },
      { question: "Faut-il une télésurveillance pour une alarme connectée ?", answer: "Non, la télésurveillance par un centre professionnel est optionnelle : une alarme connectée peut envoyer des notifications sur votre téléphone et déclencher une sirène sans abonnement. La télésurveillance ajoute une intervention humaine, mais avec un coût mensuel. Choisissez selon votre disponibilité pour réagir aux alertes." },
      { question: "Où installer un détecteur de fumée et de monoxyde de carbone ?", answer: "Installez un détecteur de fumée dans les couloirs menant aux chambres et un par étage, et un détecteur de CO près des appareils à combustion et des chambres. Choisissez des modèles conformes aux normes EN 14604 pour la fumée et EN 50291 pour le CO, et interconnectables pour que toutes les alarmes sonnent ensemble." },
    ],
    en: [
      { question: "Which home security camera works without a subscription?", answer: "Cameras that record locally, to a microSD card or a home hub or recorder, work without a subscription, whereas cloud storage is usually paid or limited. Also check for open protocols such as ONVIF or RTSP, and favour local storage to keep better control of your data under the GDPR." },
      { question: "Can I legally film outside my home with a security camera?", answer: "As a general rule, a camera should only cover your own property, not the public road or your neighbours, because the GDPR and national laws regulate image capture. Exact rules vary by country, so check with your local data protection authority and angle the camera accordingly." },
      { question: "Is a smart lock safe, and what happens if the battery dies?", answer: "A well-made smart lock warns you long before the batteries run out and keeps a mechanical key or backup code so you can still open the door. Check that it fits your European cylinder, works over Bluetooth even without Wi-Fi, and encrypts its communications." },
      { question: "Do I need professional monitoring for a smart alarm?", answer: "No, professional monitoring is optional: a smart alarm can send phone notifications and sound a siren without any subscription. Monitoring adds a human response from a call centre, but at a monthly cost. Choose based on whether you can realistically react to alerts yourself." },
      { question: "Where should I install smoke and carbon monoxide detectors?", answer: "Fit a smoke detector in hallways leading to bedrooms and on every floor, and a CO detector near fuel-burning appliances and bedrooms. Choose models certified to EN 14604 for smoke and EN 50291 for carbon monoxide, and interconnected ones so every alarm sounds at once." },
    ],
    de: [
      { question: "Welche Überwachungskamera funktioniert ohne Abo?", answer: "Kameras, die lokal auf microSD-Karte oder auf einem Hub bzw. Rekorder im Haus speichern, funktionieren ohne Abo, während Cloud-Speicher meist kostenpflichtig oder begrenzt ist. Achten Sie außerdem auf offene Protokolle wie ONVIF oder RTSP und bevorzugen Sie lokale Speicherung, um Ihre Daten im Sinne der DSGVO besser zu kontrollieren." },
      { question: "Darf ich mit einer Überwachungskamera den Außenbereich meines Hauses filmen?", answer: "Grundsätzlich darf eine Kamera nur Ihr eigenes Grundstück erfassen, nicht die öffentliche Straße oder Nachbarn, denn DSGVO und nationale Gesetze regeln die Bildaufnahme. Die genauen Regeln unterscheiden sich je nach Land: Fragen Sie die zuständige Datenschutzbehörde und richten Sie den Winkel der Kamera entsprechend aus." },
      { question: "Ist ein smartes Türschloss sicher und was passiert bei leerer Batterie?", answer: "Ein hochwertiges smartes Schloss warnt lange vor leeren Batterien und bietet einen mechanischen Schlüssel oder Notfallcode, damit Sie weiterhin hineinkommen. Prüfen Sie, ob es auf Ihren europäischen Profilzylinder passt, per Bluetooth auch ohne WLAN funktioniert und die Kommunikation verschlüsselt. Prüfen Sie außerdem, ob sich das Schloss ohne Cloud-Zwang betreiben lässt." },
      { question: "Brauche ich für eine smarte Alarmanlage einen Wachdienst?", answer: "Nein, ein professioneller Wachdienst ist optional: Eine smarte Alarmanlage kann ohne Abo Push-Nachrichten senden und eine Sirene auslösen. Die Aufschaltung auf eine Leitstelle bringt menschliche Reaktion, kostet aber monatlich. Entscheiden Sie danach, ob Sie selbst zuverlässig auf Alarme reagieren können." },
      { question: "Wo installiere ich Rauchmelder und Kohlenmonoxidmelder?", answer: "Montieren Sie einen Rauchmelder in Fluren vor Schlafzimmern und auf jeder Etage sowie einen CO-Melder in der Nähe von Feuerstätten und Schlafzimmern. Wählen Sie Geräte nach EN 14604 für Rauch und EN 50291 für Kohlenmonoxid, möglichst funkvernetzt, damit alle Melder gleichzeitig auslösen." },
    ],
    es: [
      { question: "¿Qué cámara de seguridad funciona sin suscripción?", answer: "Las cámaras que graban en local, en tarjeta microSD o en un grabador o hub doméstico, funcionan sin suscripción, mientras que el almacenamiento en la nube suele ser de pago o limitado. Comprueba también que admitan protocolos abiertos como ONVIF o RTSP y prioriza el almacenamiento local para controlar mejor tus datos según el RGPD." },
      { question: "¿Se puede grabar el exterior de mi casa con una cámara?", answer: "Como norma general, una cámara debe grabar solo tu propiedad, sin captar la vía pública ni a los vecinos, porque el RGPD y las leyes nacionales regulan la captación de imágenes. Las reglas concretas varían según el país: consulta a la autoridad local de protección de datos y orienta la cámara en consecuencia." },
      { question: "¿Es segura una cerradura inteligente y qué pasa si se agota la batería?", answer: "Una cerradura inteligente fiable avisa mucho antes de que se agoten las pilas y conserva una llave mecánica o un código de emergencia para abrir la puerta. Comprueba que encaje en tu cilindro europeo, que funcione por Bluetooth aunque no haya Wi-Fi y que cifre las comunicaciones." },
      { question: "¿Necesito vigilancia profesional para una alarma inteligente?", answer: "No, la vigilancia profesional es opcional: una alarma inteligente puede enviar notificaciones al móvil y activar una sirena sin suscripción. La central receptora añade respuesta humana, pero con coste mensual. Decide según si puedes reaccionar tú mismo a las alertas con fiabilidad." },
      { question: "¿Dónde instalar detectores de humo y de monóxido de carbono?", answer: "Instala un detector de humo en los pasillos que dan a los dormitorios y en cada planta, y un detector de CO cerca de aparatos de combustión y de los dormitorios. Elige modelos certificados según EN 14604 para humo y EN 50291 para CO, e interconectables para que suenen todas las alarmas a la vez." },
    ],
    it: [
      { question: "Quale telecamera di sicurezza funziona senza abbonamento?", answer: "Le telecamere che registrano in locale, su scheda microSD o su un registratore o hub domestico, funzionano senza abbonamento, mentre l'archiviazione cloud è di solito a pagamento o limitata. Verifica anche il supporto di protocolli aperti come ONVIF o RTSP e privilegia l'archiviazione locale per controllare meglio i dati ai sensi del GDPR." },
      { question: "Posso riprendere l'esterno di casa con una telecamera?", answer: "Di norma una telecamera deve inquadrare solo la tua proprietà, non la strada pubblica né i vicini, perché GDPR e leggi nazionali regolano la ripresa di immagini. Le regole precise cambiano da paese a paese: informati presso l'autorità locale per la protezione dei dati e orienta l'inquadratura di conseguenza." },
      { question: "Una serratura intelligente è sicura e cosa succede se la batteria si scarica?", answer: "Una serratura intelligente affidabile avvisa molto prima che le pile si scarichino e mantiene una chiave meccanica o un codice di emergenza per aprire la porta. Verifica che si adatti al tuo cilindro europeo, che funzioni via Bluetooth anche senza Wi-Fi e che cifri le comunicazioni." },
      { question: "Serve la vigilanza professionale per un allarme smart?", answer: "No, la vigilanza professionale è facoltativa: un allarme smart può inviare notifiche al telefono e attivare una sirena senza abbonamento. La centrale operativa aggiunge un intervento umano, ma con un costo mensile. Scegli in base alla tua capacità di reagire con affidabilità agli avvisi." },
      { question: "Dove installare i rilevatori di fumo e di monossido di carbonio?", answer: "Installa un rilevatore di fumo nei corridoi che portano alle camere e a ogni piano, e un rilevatore di CO vicino agli apparecchi a combustione e alle camere. Scegli modelli certificati EN 14604 per il fumo ed EN 50291 per il CO, e interconnessi così che tutti gli allarmi suonino insieme." },
    ],
    nl: [
      { question: "Welke beveiligingscamera werkt zonder abonnement?", answer: "Camera's die lokaal opnemen, op een microSD-kaart of een recorder of hub in huis, werken zonder abonnement, terwijl cloudopslag meestal betaald of beperkt is. Let ook op open protocollen zoals ONVIF of RTSP en kies bij voorkeur lokale opslag om je gegevens beter te beheersen volgens de AVG." },
      { question: "Mag ik met een beveiligingscamera de buitenkant van mijn huis filmen?", answer: "In het algemeen mag een camera alleen je eigen terrein filmen, niet de openbare weg of de buren, omdat de AVG en nationale wetten beeldopnames reguleren. De precieze regels verschillen per land: vraag het na bij de lokale privacytoezichthouder en richt de camera dienovereenkomstig." },
      { question: "Is een slim slot veilig en wat gebeurt er als de batterij leeg is?", answer: "Een goed slim slot waarschuwt ruim voordat de batterijen leeg zijn en houdt een mechanische sleutel of noodcode achter de hand om de deur te openen. Controleer of het op je Europese cilinder past, via Bluetooth werkt zonder wifi en de communicatie versleutelt." },
      { question: "Heb ik professionele bewaking nodig bij een slim alarmsysteem?", answer: "Nee, professionele bewaking is optioneel: een slim alarmsysteem kan zonder abonnement meldingen naar je telefoon sturen en een sirene laten klinken. Een alarmcentrale zorgt voor menselijke opvolging, maar kost maandelijks geld. Kies op basis van of je zelf betrouwbaar op meldingen kunt reageren." },
      { question: "Waar plaats ik rook- en koolmonoxidemelders?", answer: "Plaats een rookmelder in gangen naar slaapkamers en op elke verdieping, en een CO-melder in de buurt van verbrandingstoestellen en slaapkamers. Kies modellen met certificering volgens EN 14604 voor rook en EN 50291 voor koolmonoxide, bij voorkeur koppelbaar zodat alle melders tegelijk afgaan." },
    ],
    pl: [
      {
        question: "Jaka kamera monitoringu działa bez abonamentu?",
        answer: "Bez abonamentu działają kamery, które nagrywają lokalnie: na kartę microSD, na rejestrator albo do domowej stacji bazowej. Zapis w chmurze jest zwykle płatny lub ograniczony. Sprawdź też, czy kamera obsługuje otwarte protokoły, takie jak ONVIF lub RTSP, i stawiaj na zapis lokalny – łatwiej wtedy kontrolować swoje dane, co ma znaczenie także z punktu widzenia RODO.",
      },
      {
        question: "Czy wolno filmować kamerą otoczenie własnego domu?",
        answer: "Co do zasady kamera powinna obejmować wyłącznie Twoją posesję, bez drogi publicznej i terenu sąsiadów, bo rejestrowanie obrazu regulują RODO i przepisy krajowe. Szczegółowe zasady różnią się w zależności od kraju: dowiedz się, co mówi na ten temat krajowy urząd ochrony danych osobowych, i odpowiednio ustaw kąt kamery.",
      },
      {
        question: "Czy inteligentny zamek jest bezpieczny i co się stanie, gdy rozładuje się bateria?",
        answer: "Porządny inteligentny zamek ostrzega o rozładowaniu baterii z dużym wyprzedzeniem i pozwala otworzyć drzwi zwykłym kluczem lub kodem awaryjnym. Sprawdź, czy pasuje do Twojej wkładki europejskiej, czy działa przez Bluetooth także bez Wi-Fi i czy komunikacja jest szyfrowana.",
      },
      {
        question: "Czy do inteligentnego alarmu potrzebny jest monitoring agencji ochrony?",
        answer: "Nie, monitoring prowadzony przez agencję ochrony jest opcjonalny: inteligentny alarm może wysyłać powiadomienia na telefon i włączać syrenę bez abonamentu. Monitoring zapewnia reakcję człowieka, ale wiąże się z comiesięczną opłatą. Wybierz rozwiązanie zależnie od tego, czy jesteś w stanie samodzielnie reagować na alarmy.",
      },
      {
        question: "Gdzie zamontować czujnik dymu i czujnik czadu?",
        answer: "Czujniki dymu montuj na korytarzach prowadzących do sypialni i po jednym na każdym piętrze, a czujnik czadu – w pobliżu urządzeń, w których spala się paliwo, oraz przy sypialniach. Wybieraj modele zgodne z normą EN 14604 (dym) i EN 50291 (czad), które można połączyć ze sobą, tak by w razie zagrożenia wszystkie alarmowały jednocześnie.",
      },
    ],
    sv: [
      {
        question: "Vilken övervakningskamera fungerar utan abonnemang?",
        answer: "Kameror som spelar in lokalt, på ett microSD-kort eller till en inspelare eller basstation i hemmet, fungerar utan abonnemang. Molnlagring kostar däremot oftast pengar eller är begränsad. Kontrollera också att kameran har stöd för öppna protokoll som ONVIF eller RTSP, och välj hellre lokal lagring: då har du bättre kontroll över dina uppgifter enligt GDPR.",
      },
      {
        question: "Får jag filma utanför mitt hem med en övervakningskamera?",
        answer: "Som huvudregel ska en kamera bara filma din egen tomt, inte allmän väg eller grannarna, eftersom GDPR och nationella lagar reglerar kamerabevakning. De exakta reglerna skiljer sig mellan länder, så hör efter med dataskyddsmyndigheten i ditt land och rikta kameran därefter.",
      },
      {
        question: "Är ett smart lås säkert, och vad händer om batteriet tar slut?",
        answer: "Ett bra smart lås varnar i god tid innan batterierna tar slut och har kvar en vanlig nyckel eller en reservkod, så att du ändå kan öppna dörren. Kontrollera att låset passar låscylindern i din dörr, att det fungerar via Bluetooth även utan wifi och att kommunikationen är krypterad.",
      },
      {
        question: "Måste ett smart larm vara kopplat till en larmcentral?",
        answer: "Nej, en larmcentral är ett tillval. Ett smart larm kan skicka notiser till mobilen och starta en siren utan abonnemang. Med en larmcentral får du en människa som reagerar på larmet, men det kostar en månadsavgift. Välj utifrån om du själv har möjlighet att reagera när det larmar.",
      },
      {
        question: "Var ska jag sätta upp brandvarnare och koloxidvarnare?",
        answer: "Sätt en brandvarnare i hallar och korridorer som leder till sovrummen och en på varje våningsplan, och en koloxidvarnare nära eldstäder och andra förbränningsapparater samt nära sovrummen. Välj modeller som uppfyller EN 14604 för brandvarnare och EN 50291 för koloxidvarnare, och som går att koppla ihop så att alla larmar samtidigt.",
      },
    ],
    us: [
      {
        question: "Which security cameras work without a subscription?",
        answer: "Cameras that record locally, to a microSD card or to a home hub or recorder, work without a subscription, while cloud storage usually costs extra or comes with limits. Also look for support for open protocols such as ONVIF or RTSP, and favor local storage to keep tighter control over your footage and data.",
      },
      {
        question: "Can I legally film outside my home with a security camera?",
        answer: "In Europe, the general rule is that a camera should cover only your own property, not the public street or your neighbors, because the GDPR and national laws regulate recording. Rules are different elsewhere, so check the laws where you live and angle the camera to respect your neighbors' privacy.",
      },
      {
        question: "Is a smart lock safe, and what happens if the battery dies?",
        answer: "A well-made smart lock warns you long before the batteries run out and keeps a physical key or backup code so you can still open the door. Check that it fits your door (many European models are built for euro-profile cylinders, while most US exterior doors use a deadbolt), that it works over Bluetooth even without Wi-Fi, and that it encrypts its communications.",
      },
      {
        question: "Do I need professional monitoring for a smart security system?",
        answer: "No, professional monitoring is optional: a smart security system can send alerts to your phone and sound a siren with no subscription. Monitoring adds a human response from a monitoring center, but at a monthly cost. Decide based on whether you can realistically respond to alerts yourself.",
      },
      {
        question: "Where should I install smoke and carbon monoxide detectors?",
        answer: "Put a smoke detector in the hallways leading to bedrooms and on every floor, and a CO detector near fuel-burning appliances and bedrooms. Models sold in Europe are certified to EN 14604 for smoke and EN 50291 for carbon monoxide; in the US, smoke alarms are listed to UL 217 and CO alarms to UL 2034, so check the listing of the version sold in your country. Choose interconnected models so every alarm sounds at once.",
      },
    ],
    ca: [
      {
        question: "Which home security camera works without a subscription?",
        answer: "Cameras that record locally, to a microSD card or a home hub or recorder, work without a subscription, while cloud storage is usually paid or limited. Also check for open protocols such as ONVIF or RTSP, and favour local storage to keep better control of your data.",
      },
      {
        question: "Can I legally film outside my home with a security camera?",
        answer: "As a general rule, a camera should only cover your own property, not the street, the sidewalk or your neighbours' homes, because privacy laws limit recording other people. The exact rules depend on where you live, so check the privacy rules that apply in your area and angle the camera accordingly.",
      },
      {
        question: "Is a smart lock safe, and what happens if the battery dies?",
        answer: "A well-made smart lock warns you long before the batteries run out and keeps a mechanical key or backup code so you can still open the door. Check that it fits your door: most Canadian exterior doors use a deadbolt, while many European models are built for euro cylinders. Also make sure it works over Bluetooth even without Wi-Fi and encrypts its communications.",
      },
      {
        question: "Do I need professional monitoring for a smart alarm?",
        answer: "No, professional monitoring is optional: a smart alarm can send phone notifications and sound a siren without any subscription. Monitoring adds a human response from a monitoring centre, but at a monthly cost. Choose based on whether you can realistically react to alerts yourself.",
      },
      {
        question: "Where should I install smoke and carbon monoxide detectors?",
        answer: "Install a smoke detector on every floor, including the basement, and in hallways leading to bedrooms, plus a CO detector near bedrooms and fuel-burning appliances such as a furnace or water heater. Look for a ULC or CSA mark (European models are certified to EN 14604 for smoke and EN 50291 for CO instead), and choose interconnected alarms so they all sound at once. Requirements vary, so check the rules in your province or territory.",
      },
    ],
  },
  "confort-air": {
    fr: [
      { question: "Un déshumidificateur consomme-t-il beaucoup d'électricité ?", answer: "Non, un déshumidificateur à compresseur consomme généralement 200 à 400 W, soit environ 0,2 à 0,4 kWh par heure de fonctionnement. Il ne tourne pas en continu si l'hygrostat est réglé sur 50 à 55 %. Comparez les watts, les litres extraits par jour et la présence d'un arrêt automatique ; les modèles à adsorption consomment plus." },
      { question: "Quel taux d'humidité est idéal dans une maison ?", answer: "Un taux d'humidité de 40 à 60 % est généralement considéré comme confortable et sain dans un logement. En dessous, l'air irrite les voies respiratoires ; au-dessus, moisissures et acariens se développent. Un hygromètre ou une station météo connectée permet de suivre la valeur pièce par pièce et de déclencher un humidificateur ou un déshumidificateur." },
      { question: "Un purificateur d'air est-il efficace contre les allergies ?", answer: "Oui, un purificateur équipé d'un filtre HEPA réduit les pollens, les poils d'animaux et une partie des poussières en suspension. Il ne remplace ni l'aération ni le ménage. Vérifiez la classe du filtre (H13 ou supérieure), le débit d'air propre (CADR) adapté à la pièce et le coût de remplacement des filtres." },
      { question: "Quelle puissance de purificateur d'air pour ma pièce ?", answer: "Choisissez un purificateur dont le débit d'air propre (CADR, en m³/h) correspond à la surface de la pièce ; une règle courante est un CADR au moins égal à deux tiers de la surface en m² pour une hauteur sous plafond standard. Pour les allergies, visez davantage. Vérifiez aussi le niveau sonore en mode nuit." },
      { question: "Un climatiseur mobile est-il efficace et économique ?", answer: "Un climatiseur mobile rafraîchit une pièce sans travaux, mais il est moins efficace qu'un split fixe, surtout en mono-conduit, qui aspire l'air de la pièce. Consultez l'étiquette énergie européenne : la classe et la puissance frigorifique comptent. Un modèle bi-conduit, une bonne étanchéité de la fenêtre et un programmateur limitent la consommation." },
    ],
    en: [
      { question: "Does a dehumidifier use a lot of electricity?", answer: "No, a compressor dehumidifier typically draws 200 to 400 W, roughly 0.2 to 0.4 kWh per hour of running. It cycles off once the humidistat reaches its target, usually 50 to 55 percent. Compare wattage, litres removed per day and whether it has auto shut-off; desiccant models generally use more power." },
      { question: "What humidity level is ideal indoors?", answer: "An indoor relative humidity of 40 to 60 percent is generally considered comfortable and healthy. Below it, air irritates airways; above it, mould and dust mites thrive. A hygrometer or smart weather station lets you track each room and trigger a humidifier or dehumidifier automatically." },
      { question: "Do air purifiers really help with allergies?", answer: "Yes, a purifier with a true HEPA filter reduces pollen, pet dander and some airborne dust. It does not replace ventilation or cleaning. Check the filter grade (H13 or higher), a clean air delivery rate (CADR) suited to the room, and the running cost of replacement filters." },
      { question: "What size air purifier do I need for my room?", answer: "Pick a purifier whose clean air delivery rate (CADR, in m³/h) matches your room; a common rule of thumb is a CADR of at least two thirds of the floor area in m² for standard ceilings. Aim higher for allergies. Also check the noise level on night mode." },
      { question: "Are portable air conditioners efficient?", answer: "Portable air conditioners cool a room without installation, but they are less efficient than fixed split units, especially single-hose models that draw room air outdoors. Check the EU energy label for the class and cooling capacity. A dual-hose design, a well-sealed window kit and a timer reduce consumption." },
    ],
    de: [
      { question: "Verbraucht ein Luftentfeuchter viel Strom?", answer: "Nein, ein Kompressor-Luftentfeuchter nimmt meist 200 bis 400 W auf, also etwa 0,2 bis 0,4 kWh pro Betriebsstunde. Er schaltet ab, sobald der Hygrostat die Zielfeuchte von meist 50 bis 55 % erreicht. Vergleichen Sie Leistung, Entfeuchtungsleistung pro Tag und Abschaltautomatik; Adsorptionsgeräte brauchen in der Regel mehr Strom." },
      { question: "Welche Luftfeuchtigkeit ist in Innenräumen ideal?", answer: "Eine relative Luftfeuchtigkeit von 40 bis 60 % gilt in Wohnräumen als angenehm und gesund. Darunter reizt die Luft die Atemwege, darüber begünstigt sie Schimmel und Hausstaubmilben. Ein Hygrometer oder eine vernetzte Wetterstation zeigt die Werte pro Raum und kann Luftbe- oder Entfeuchter automatisch steuern." },
      { question: "Helfen Luftreiniger wirklich bei Allergien?", answer: "Ja, ein Luftreiniger mit echtem HEPA-Filter verringert Pollen, Tierhaare und einen Teil des Schwebestaubs. Lüften und Reinigen ersetzt er nicht. Achten Sie auf die Filterklasse (H13 oder höher), eine zum Raum passende Luftleistung (CADR) und die Folgekosten für Ersatzfilter." },
      { question: "Welchen Luftreiniger brauche ich für meinen Raum?", answer: "Wählen Sie einen Luftreiniger, dessen Luftleistung (CADR in m³/h) zur Raumgröße passt; als Faustregel gilt ein CADR von mindestens zwei Dritteln der Grundfläche in m² bei Standardraumhöhe. Bei Allergien lieber mehr. Prüfen Sie außerdem die Lautstärke im Nachtmodus." },
      { question: "Sind mobile Klimageräte effizient?", answer: "Mobile Klimageräte kühlen ohne Montage, sind aber weniger effizient als fest installierte Split-Geräte, besonders Einschlauchmodelle, die Raumluft nach draußen ziehen. Prüfen Sie das EU-Energielabel für Klasse und Kühlleistung. Zweischlauchgeräte, ein dichtes Fensterset und eine Zeitschaltung senken den Verbrauch." },
    ],
    es: [
      { question: "¿Un deshumidificador consume mucha electricidad?", answer: "No, un deshumidificador de compresor suele consumir entre 200 y 400 W, es decir, unos 0,2 a 0,4 kWh por hora de funcionamiento. Se detiene al alcanzar la humedad objetivo del higróstato, normalmente el 50-55 %. Compara la potencia, los litros extraídos al día y si tiene apagado automático; los de adsorción suelen gastar más." },
      { question: "¿Qué nivel de humedad es ideal en casa?", answer: "Una humedad relativa del 40 al 60 % se considera cómoda y saludable en interiores. Por debajo, el aire irrita las vías respiratorias; por encima, proliferan el moho y los ácaros. Un higrómetro o una estación meteorológica conectada permite vigilar cada habitación y activar un humidificador o deshumidificador." },
      { question: "¿Los purificadores de aire funcionan contra las alergias?", answer: "Sí, un purificador con filtro HEPA verdadero reduce el polen, la caspa de mascotas y parte del polvo en suspensión. No sustituye a la ventilación ni a la limpieza. Comprueba la clase del filtro (H13 o superior), un caudal de aire limpio (CADR) adecuado a la estancia y el coste de los filtros de recambio." },
      { question: "¿Qué potencia de purificador necesito para mi habitación?", answer: "Elige un purificador cuyo caudal de aire limpio (CADR, en m³/h) se corresponda con la habitación; una regla práctica es un CADR de al menos dos tercios de la superficie en m² con techos estándar. Para alergias, sube la cifra. Revisa también el ruido en modo noche." },
      { question: "¿Son eficientes los aires acondicionados portátiles?", answer: "Los aires acondicionados portátiles enfrían sin obras, pero son menos eficientes que un split fijo, sobre todo los de un solo conducto, que extraen aire de la habitación. Consulta la etiqueta energética europea: clase y potencia frigorífica. Un modelo de doble conducto, un buen sellado de la ventana y un temporizador reducen el consumo." },
    ],
    it: [
      { question: "Un deumidificatore consuma molta elettricità?", answer: "No, un deumidificatore a compressore assorbe in genere 200-400 W, cioè circa 0,2-0,4 kWh per ora di funzionamento. Si spegne quando l'igrostato raggiunge l'umidità impostata, di solito 50-55 %. Confronta potenza, litri estratti al giorno e arresto automatico; i modelli a adsorbimento consumano di più." },
      { question: "Qual è il livello di umidità ideale in casa?", answer: "Un'umidità relativa tra il 40 e il 60 % è considerata confortevole e salutare in casa. Sotto questa soglia l'aria irrita le vie respiratorie; sopra, muffe e acari proliferano. Un igrometro o una stazione meteo connessa permette di controllare ogni stanza e di comandare umidificatore o deumidificatore." },
      { question: "I purificatori d'aria funzionano davvero contro le allergie?", answer: "Sì, un purificatore con vero filtro HEPA riduce pollini, peli di animali e parte della polvere sospesa. Non sostituisce aerazione e pulizie. Controlla la classe del filtro (H13 o superiore), una portata d'aria pulita (CADR) adatta alla stanza e il costo dei filtri di ricambio." },
      { question: "Che potenza di purificatore serve per la mia stanza?", answer: "Scegli un purificatore con portata d'aria pulita (CADR, in m³/h) adeguata alla stanza; come regola pratica, un CADR pari ad almeno due terzi della superficie in m² con soffitti standard. Per le allergie punta più in alto. Verifica anche la rumorosità in modalità notte." },
      { question: "I condizionatori portatili sono efficienti?", answer: "I condizionatori portatili raffrescano senza installazione, ma sono meno efficienti di uno split fisso, soprattutto i modelli monotubo che aspirano l'aria della stanza. Controlla l'etichetta energetica UE per classe e potenza frigorifera. Un modello a doppio tubo, un buon kit per la finestra e un timer riducono i consumi." },
    ],
    nl: [
      { question: "Verbruikt een luchtontvochtiger veel stroom?", answer: "Nee, een compressor-ontvochtiger gebruikt meestal 200 tot 400 W, ongeveer 0,2 tot 0,4 kWh per draaiuur. Hij schakelt uit zodra de hygrostaat de ingestelde vochtigheid bereikt, meestal 50 tot 55 %. Vergelijk het vermogen, de liters per dag en of er een automatische uitschakeling is; adsorptiemodellen verbruiken meestal meer." },
      { question: "Welke luchtvochtigheid is ideaal in huis?", answer: "Een relatieve luchtvochtigheid van 40 tot 60 % wordt als comfortabel en gezond gezien. Eronder irriteert de lucht de luchtwegen, erboven nemen schimmel en huisstofmijt toe. Met een hygrometer of slim weerstation volg je elke kamer en schakel je automatisch een bevochtiger of ontvochtiger in." },
      { question: "Helpen luchtreinigers echt tegen allergieën?", answer: "Ja, een luchtreiniger met echt HEPA-filter vermindert pollen, huisdierhaar en een deel van het zwevende stof. Hij vervangt ventileren en schoonmaken niet. Let op de filterklasse (H13 of hoger), een luchtverversingscapaciteit (CADR) die bij de kamer past en de kosten van vervangingsfilters." },
      { question: "Welke luchtreiniger heb ik nodig voor mijn kamer?", answer: "Kies een luchtreiniger waarvan de CADR (in m³/u) bij de kamer past; als vuistregel een CADR van minstens tweederde van de vloeroppervlakte in m² bij standaard plafondhoogte. Kies bij allergieën hoger. Check ook het geluidsniveau in de nachtstand." },
      { question: "Zijn mobiele airco's efficiënt?", answer: "Mobiele airco's koelen zonder installatie, maar zijn minder efficiënt dan een vaste split-unit, vooral modellen met één slang die kamerlucht naar buiten zuigen. Bekijk het EU-energielabel voor klasse en koelvermogen. Een model met twee slangen, een goed afgesloten raamkit en een timer verlagen het verbruik." },
    ],
    pl: [
      {
        question: "Czy osuszacz powietrza zużywa dużo prądu?",
        answer: "Nie, osuszacz kondensacyjny (ze sprężarką) pobiera zwykle 200–400 W, czyli około 0,2–0,4 kWh na godzinę pracy. Nie pracuje bez przerwy, jeśli higrostat jest ustawiony na 50–55%. Porównaj moc w watach, wydajność w litrach na dobę i to, czy urządzenie ma automatyczne wyłączanie; modele adsorpcyjne zużywają więcej prądu.",
      },
      {
        question: "Jaka wilgotność powietrza jest idealna w domu?",
        answer: "Za komfortową i zdrową w mieszkaniu uznaje się zwykle wilgotność 40–60%. Gdy jest niższa, suche powietrze podrażnia drogi oddechowe; gdy wyższa – rozwijają się pleśń i roztocza. Higrometr lub inteligentna stacja pogodowa pozwala śledzić wilgotność w każdym pomieszczeniu i w razie potrzeby uruchamiać nawilżacz lub osuszacz.",
      },
      {
        question: "Czy oczyszczacz powietrza jest skuteczny przy alergii?",
        answer: "Tak, oczyszczacz z filtrem HEPA zmniejsza ilość pyłków, sierści zwierząt i części kurzu unoszącego się w powietrzu. Nie zastąpi jednak wietrzenia ani sprzątania. Sprawdź klasę filtra (H13 lub wyższa), wydajność oczyszczania (CADR) dopasowaną do pomieszczenia i koszt wymiany filtrów.",
      },
      {
        question: "Jaką wydajność oczyszczacza powietrza wybrać do pokoju?",
        answer: "Wybierz oczyszczacz, którego wydajność (CADR, w m³/h) odpowiada powierzchni pomieszczenia; popularna reguła mówi, że CADR powinien wynosić co najmniej dwie trzecie powierzchni w m² przy standardowej wysokości sufitu. Alergicy powinni celować wyżej. Sprawdź też głośność w trybie nocnym.",
      },
      {
        question: "Czy klimatyzator przenośny jest wydajny i tani w eksploatacji?",
        answer: "Klimatyzator przenośny schłodzi pomieszczenie bez żadnych prac montażowych, ale jest mniej wydajny niż klimatyzator typu split, zwłaszcza w wersji jednowężowej, która zasysa powietrze z pokoju. Zajrzyj na europejską etykietę energetyczną: liczą się klasa energetyczna i moc chłodnicza. Model dwuwężowy, dobre uszczelnienie okna i programator ograniczają zużycie prądu.",
      },
    ],
    sv: [
      {
        question: "Drar en avfuktare mycket el?",
        answer: "Nej, en kompressoravfuktare drar oftast 200–400 W, alltså ungefär 0,2–0,4 kWh per timme den är i gång. Den går inte oavbrutet om hygrostaten är inställd på 50–55 %. Jämför effekten, hur många liter vatten den tar upp per dygn och om den stängs av automatiskt. Sorptionsavfuktare drar mer el.",
      },
      {
        question: "Vilken luftfuktighet är bäst inomhus?",
        answer: "En relativ luftfuktighet på 40–60 % brukar anses behaglig och sund i en bostad. Är den lägre irriterar luften luftvägarna. Är den högre trivs mögel och kvalster. Med en hygrometer eller en smart väderstation kan du följa värdet rum för rum och starta en luftfuktare eller en avfuktare automatiskt.",
      },
      {
        question: "Hjälper en luftrenare mot allergier?",
        answer: "Ja, en luftrenare med äkta HEPA-filter minskar mängden pollen, djurhår och en del av dammet i luften. Den ersätter däremot varken vädring eller städning. Kontrollera filterklassen (H13 eller högre), att CADR-värdet (mängden renad luft) passar rummet och vad nya filter kostar.",
      },
      {
        question: "Hur stor luftrenare behöver jag till mitt rum?",
        answer: "Välj en luftrenare vars CADR-värde (mängden renad luft i m³/h) motsvarar rummets storlek. En vanlig tumregel är ett CADR på minst två tredjedelar av golvytan i m² vid normal takhöjd. Har du allergi bör du sikta högre. Kontrollera också ljudnivån i nattläget.",
      },
      {
        question: "Är en portabel AC effektiv och snål?",
        answer: "En portabel AC kyler ett rum utan installation, men den är mindre effektiv än en fast split-AC, särskilt modeller med en enda slang, som blåser ut rumsluften. Titta på EU:s energimärkning: energiklassen och kyleffekten spelar roll. En modell med två slangar, ett väl tätat fönster och en timer håller nere förbrukningen.",
      },
    ],
    us: [
      {
        question: "Does a dehumidifier use a lot of electricity?",
        answer: "No. A compressor dehumidifier typically draws 200 to 400 W, or roughly 0.2 to 0.4 kWh per hour of running. It cycles off once the humidistat hits its target, usually 50% to 55%. Compare wattage, pints removed per day and whether it has auto shut-off; desiccant models generally use more power.",
      },
      {
        question: "What's the ideal humidity level indoors?",
        answer: "Indoor relative humidity of 40% to 60% is generally considered comfortable and healthy. Below that, dry air irritates your airways; above it, mold and dust mites thrive. A hygrometer or smart weather station lets you track each room and switch on a humidifier or dehumidifier automatically.",
      },
      {
        question: "Do air purifiers really help with allergies?",
        answer: "Yes. A purifier with a true HEPA filter cuts down on pollen, pet dander and some airborne dust. It's no substitute for ventilation or cleaning, though. Check the filter grade (H13 or higher), a clean air delivery rate (CADR) suited to the room, and the ongoing cost of replacement filters.",
      },
      {
        question: "What size air purifier do I need for my room?",
        answer: "Pick a purifier whose clean air delivery rate (CADR) matches your room. A common rule of thumb is a CADR, in CFM, of at least two-thirds of the room's square footage, assuming standard 8-foot ceilings. Aim higher for allergies, and check the noise level in night mode too.",
      },
      {
        question: "Are portable air conditioners efficient?",
        answer: "A portable air conditioner cools a room with no installation, but it's less efficient than a ductless mini-split, especially a single-hose model, which pushes air it has already cooled out the window. Compare the efficiency rating and cooling capacity on the energy label (the EU energy label on models sold in Europe). A dual-hose design, a well-sealed window kit and a timer all cut energy use.",
      },
    ],
    ca: [
      {
        question: "Does a dehumidifier use a lot of electricity?",
        answer: "No, a compressor dehumidifier typically draws 200 to 400 W, roughly 0.2 to 0.4 kWh per hour of running. At an example rate of 10¢ per kWh, that's 2¢ to 4¢ an hour; your rate depends on your province and utility, so check your bill. It cycles off once the humidistat reaches its target, usually 50% to 55%. Compare wattage, litres removed per day and whether it has auto shut-off; desiccant models generally use more power.",
      },
      {
        question: "What humidity level is ideal indoors?",
        answer: "An indoor relative humidity of 40% to 60% is generally considered comfortable and healthy. Below that, dry air irritates your airways; above it, mould and dust mites thrive. Heated homes often drop below 40% in a cold winter. A hygrometer or smart weather station lets you track each room and trigger a humidifier or dehumidifier automatically.",
      },
      {
        question: "Do air purifiers really help with allergies?",
        answer: "Yes, a purifier with a true HEPA filter reduces pollen, pet dander and some airborne dust. It does not replace ventilation or cleaning. Check the filter grade (H13 or higher), a clean air delivery rate (CADR) suited to the room, and the running cost of replacement filters.",
      },
      {
        question: "What size air purifier do I need for my room?",
        answer: "Pick a purifier whose clean air delivery rate (CADR, in m³/h) matches your room; a common rule of thumb is a CADR of at least two thirds of the floor area in m² for standard ceilings. Aim higher for allergies. Also check the noise level on night mode.",
      },
      {
        question: "Are portable air conditioners efficient?",
        answer: "Portable air conditioners cool a room without installation, but they're less efficient than a ductless mini-split, especially single-hose models that exhaust room air outdoors. Compare the cooling capacity and efficiency rating on the spec sheet (European listings show the EU energy class). A dual-hose design, a well-sealed window kit and a timer cut consumption.",
      },
    ],
  },
  "entretien-maison": {
    fr: [
      { question: "Un aspirateur robot vaut-il le coup avec des animaux ?", answer: "Oui, un aspirateur robot est très utile avec des chiens ou des chats, car il passe chaque jour et limite l'accumulation de poils. Choisissez une brosse anti-emmêlement, un bac de grande capacité et une bonne puissance d'aspiration. Un modèle à station d'auto-vidage réduit les manipulations ; prévoyez de vider ou nettoyer brosse et filtre régulièrement." },
      { question: "Un robot aspirateur-laveur lave-t-il vraiment bien ?", answer: "Un robot 2-en-1 entretient bien les sols durs au quotidien, mais il ne remplace pas un lavage manuel des taches incrustées. Les modèles récents avec serpillière rotative ou station qui lave et sèche le tissu sont plus efficaces. Vérifiez que le robot soulève la serpillière sur les tapis." },
      { question: "Un aspirateur robot à caméra est-il sûr pour la vie privée ?", answer: "Un robot à caméra peut respecter la vie privée si les images ne quittent pas l'appareil ou si vous contrôlez leur envoi. Privilégiez un modèle à navigation LiDAR, sans caméra, ou dont la caméra peut être désactivée, et une marque qui précise le traitement des données conformément au RGPD. Protégez le compte avec un mot de passe unique." },
      { question: "LiDAR ou caméra : quelle navigation choisir pour un robot aspirateur ?", answer: "Le LiDAR cartographie vite et fonctionne même dans le noir, ce qui en fait un bon choix par défaut ; la caméra reconnaît mieux certains obstacles comme les câbles ou les chaussettes. Beaucoup de modèles combinent les deux. Vérifiez la création de zones interdites et la sauvegarde de plusieurs étages." },
      { question: "Un robot laveur de vitres est-il sûr et efficace ?", answer: "Oui, un robot laveur de vitres nettoie une vitre lisse en toute autonomie, à condition d'être sécurisé par une corde et une batterie de secours en cas de coupure de courant. Il est moins adapté aux vitres très encrassées ou aux cadres épais. Vérifiez la taille minimale de vitre, l'adhérence et la détection des bords." },
    ],
    en: [
      { question: "Is a robot vacuum worth it with pets?", answer: "Yes, a robot vacuum is very useful with dogs or cats because it runs daily and stops pet hair building up. Look for a tangle-free brush, a large dust bin and strong suction. A self-emptying dock reduces handling, though you still need to clean the brush and filter regularly." },
      { question: "Do vacuum-mop robots really mop well?", answer: "A 2-in-1 robot handles everyday upkeep of hard floors well, but it does not replace manual scrubbing for dried-on stains. Newer models with rotating mop pads, or a dock that washes and dries the pads, perform better. Check that the robot lifts the mop over carpets." },
      { question: "Is a robot vacuum with a camera safe for privacy?", answer: "A camera robot can be safe for privacy if images stay on the device or you control what is uploaded. Prefer a LiDAR model with no camera, or one whose camera can be switched off, and a brand that explains its GDPR data handling. Protect the account with a unique password." },
      { question: "LiDAR or camera: which robot vacuum navigation is better?", answer: "LiDAR maps quickly and works even in the dark, which makes it a sound default; a camera recognises some obstacles, such as cables or socks, more reliably. Many models combine both. Check for no-go zones and multi-floor map storage." },
      { question: "Are window cleaning robots safe and effective?", answer: "Yes, a window cleaning robot cleans smooth glass autonomously, provided it is secured with a safety rope and has a backup battery in case of a power cut. It is less suited to heavily soiled glass or thick frames. Check the minimum glass size, suction strength and edge detection." },
    ],
    de: [
      { question: "Lohnt sich ein Saugroboter mit Haustieren?", answer: "Ja, mit Hund oder Katze lohnt sich ein Saugroboter besonders, weil er täglich fährt und Tierhaare nicht liegen bleiben. Achten Sie auf eine haarfreundliche Bürste, einen großen Staubbehälter und gute Saugkraft. Eine Absaugstation spart Handgriffe; Bürste und Filter müssen Sie trotzdem regelmäßig reinigen." },
      { question: "Wischen Saug-Wisch-Roboter wirklich gut?", answer: "Ein 2-in-1-Roboter hält Hartböden im Alltag gut sauber, ersetzt aber kein manuelles Schrubben bei eingetrockneten Flecken. Neuere Modelle mit rotierenden Wischpads oder einer Station, die die Pads wäscht und trocknet, schneiden besser ab. Prüfen Sie, ob der Roboter das Pad auf Teppich anhebt." },
      { question: "Ist ein Saugroboter mit Kamera datenschutzmäßig sicher?", answer: "Ein Roboter mit Kamera ist datenschutzfreundlich, wenn die Bilder auf dem Gerät bleiben oder Sie das Hochladen steuern können. Bevorzugen Sie ein LiDAR-Modell ohne Kamera oder eines, dessen Kamera sich abschalten lässt, und einen Hersteller, der die DSGVO-konforme Datenverarbeitung erklärt. Sichern Sie das Konto mit einem eigenen Passwort." },
      { question: "LiDAR oder Kamera: Welche Navigation ist beim Saugroboter besser?", answer: "LiDAR kartiert schnell und funktioniert auch im Dunkeln, daher ist es eine solide Standardwahl; eine Kamera erkennt manche Hindernisse wie Kabel oder Socken zuverlässiger. Viele Modelle kombinieren beides. Achten Sie zusätzlich auf Sperrzonen, App-Steuerung und das Speichern mehrerer Etagen." },
      { question: "Sind Fensterputzroboter sicher und effektiv?", answer: "Ja, ein Fensterputzroboter reinigt glatte Scheiben selbstständig, sofern er mit Sicherungsseil und Notakku für Stromausfälle abgesichert ist. Für stark verschmutzte Scheiben oder dicke Rahmen ist er weniger geeignet. Prüfen Sie die Mindestgröße der Scheibe, die Saugkraft, die Kantenerkennung und die Laufzeit des Notakkus." },
    ],
    es: [
      { question: "¿Vale la pena un robot aspirador con mascotas?", answer: "Sí, un robot aspirador es muy útil con perros o gatos, porque pasa a diario y evita que se acumule el pelo. Busca un cepillo antienredos, un depósito grande y buena succión. Una base de autovaciado reduce el mantenimiento, aunque conviene limpiar cepillo y filtro con regularidad." },
      { question: "¿Los robots aspirador y fregona friegan bien de verdad?", answer: "Un robot 2 en 1 mantiene bien los suelos duros en el día a día, pero no sustituye el fregado manual de manchas secas. Los modelos recientes con mopas giratorias o con base que lava y seca la mopa rinden mejor. Comprueba que el robot levante la mopa al pasar por alfombras." },
      { question: "¿Es seguro para la privacidad un robot aspirador con cámara?", answer: "Un robot con cámara puede respetar la privacidad si las imágenes se quedan en el aparato o controlas lo que se sube. Prefiere un modelo con LiDAR sin cámara, o con cámara desactivable, y una marca que explique su tratamiento de datos conforme al RGPD. Protege la cuenta con una contraseña única." },
      { question: "¿LiDAR o cámara: qué navegación es mejor en un robot aspirador?", answer: "El LiDAR mapea rápido y funciona incluso a oscuras, por lo que es una buena opción por defecto; la cámara reconoce mejor algunos obstáculos como cables o calcetines. Muchos modelos combinan ambos. Revisa las zonas prohibidas y el guardado de varios pisos." },
      { question: "¿Son seguros y eficaces los robots limpiacristales?", answer: "Sí, un robot limpiacristales limpia un vidrio liso de forma autónoma, siempre que esté sujeto con cuerda de seguridad y tenga batería de emergencia ante un corte de luz. Es menos adecuado para cristales muy sucios o marcos gruesos. Comprueba el tamaño mínimo del cristal, la succión y la detección de bordes." },
    ],
    it: [
      { question: "Vale la pena un aspirapolvere robot con animali in casa?", answer: "Sì, un robot aspirapolvere è molto utile con cani o gatti, perché passa ogni giorno e impedisce al pelo di accumularsi. Cerca una spazzola anti-groviglio, un contenitore capiente e buona aspirazione. Una base con svuotamento automatico riduce la manutenzione, ma spazzola e filtro vanno puliti regolarmente." },
      { question: "I robot aspira e lava lavano davvero bene?", answer: "Un robot 2 in 1 mantiene bene i pavimenti duri nell'uso quotidiano, ma non sostituisce il lavaggio manuale delle macchie secche. I modelli recenti con panni rotanti o con base che lava e asciuga il panno funzionano meglio. Verifica che il robot sollevi il panno sui tappeti." },
      { question: "Un robot aspirapolvere con telecamera è sicuro per la privacy?", answer: "Un robot con telecamera può rispettare la privacy se le immagini restano sul dispositivo o se controlli ciò che viene caricato. Preferisci un modello LiDAR senza telecamera, o con telecamera disattivabile, e un marchio che spieghi il trattamento dei dati conforme al GDPR. Proteggi l'account con una password unica." },
      { question: "LiDAR o telecamera: quale navigazione è meglio per un robot aspirapolvere?", answer: "Il LiDAR mappa in fretta e funziona anche al buio, quindi è una buona scelta di base; la telecamera riconosce meglio alcuni ostacoli come cavi o calzini. Molti modelli uniscono entrambi. Controlla le zone vietate e il salvataggio di più piani." },
      { question: "I robot lavavetri sono sicuri ed efficaci?", answer: "Sì, un robot lavavetri pulisce un vetro liscio in autonomia, purché sia fissato con fune di sicurezza e abbia una batteria di emergenza in caso di blackout. È meno adatto a vetri molto sporchi o a telai spessi. Verifica la misura minima del vetro, l'aspirazione e il rilevamento dei bordi." },
    ],
    nl: [
      { question: "Is een robotstofzuiger de moeite waard met huisdieren?", answer: "Ja, een robotstofzuiger is erg handig met honden of katten, omdat hij dagelijks rijdt en haren niet laat ophopen. Let op een anti-klitborstel, een grote stofbak en krachtige zuigkracht. Een zelfledigend station scheelt werk, maar borstel en filter blijf je regelmatig schoonmaken." },
      { question: "Dweilen zuig-dweilrobots echt goed?", answer: "Een 2-in-1-robot houdt harde vloeren dagelijks goed schoon, maar vervangt geen handmatig schrobben van opgedroogde vlekken. Nieuwere modellen met draaiende dweilpads of een station dat de pads wast en droogt presteren beter. Check of de robot de dweil optilt op tapijt." },
      { question: "Is een robotstofzuiger met camera veilig voor je privacy?", answer: "Een robot met camera kan privacyvriendelijk zijn als beelden op het apparaat blijven of je zelf bepaalt wat wordt geüpload. Kies bij voorkeur een LiDAR-model zonder camera, of een model waarvan de camera uit kan, en een merk dat uitlegt hoe het AVG-conform met data omgaat. Beveilig het account met een uniek wachtwoord." },
      { question: "LiDAR of camera: welke navigatie is beter voor een robotstofzuiger?", answer: "LiDAR brengt snel een kaart in kaart en werkt ook in het donker, dus is een goede basiskeuze; een camera herkent sommige obstakels, zoals kabels of sokken, beter. Veel modellen combineren beide. Check verboden zones en het opslaan van meerdere verdiepingen." },
      { question: "Zijn ruitenreinigingsrobots veilig en effectief?", answer: "Ja, een ruitenreinigingsrobot reinigt glad glas zelfstandig, mits hij met een veiligheidskoord is vastgezet en een noodaccu heeft voor stroomuitval. Voor erg vuil glas of dikke kozijnen is hij minder geschikt. Check de minimale ruitgrootte, zuigkracht en randdetectie." },
    ],
    pl: [
      {
        question: "Czy robot sprzątający sprawdzi się, jeśli masz zwierzęta?",
        answer: "Tak, przy psie lub kocie robot odkurzający bardzo się przydaje, bo sprząta codziennie i nie pozwala, by sierść się gromadziła. Wybierz model ze szczotką, na którą nie nawijają się włosy, z dużym pojemnikiem na kurz i dobrą siłą ssania. Stacja samoopróżniająca zmniejsza liczbę czynności przy obsłudze; mimo to pamiętaj o regularnym opróżnianiu lub czyszczeniu szczotki i filtra.",
      },
      {
        question: "Czy robot sprzątający z mopem naprawdę dobrze myje?",
        answer: "Robot 2 w 1 dobrze dba o twarde podłogi na co dzień, ale nie zastąpi ręcznego mycia zaschniętych plam. Lepiej radzą sobie nowsze modele z obrotowymi mopami lub ze stacją, która pierze i suszy nakładki. Sprawdź, czy robot unosi mop na dywanach.",
      },
      {
        question: "Czy robot odkurzający z kamerą nie zagraża prywatności?",
        answer: "Robot z kamerą nie musi naruszać prywatności, jeśli obraz nie opuszcza urządzenia albo masz kontrolę nad tym, co jest wysyłane. Wybierz model z nawigacją LiDAR bez kamery lub z kamerą, którą można wyłączyć, oraz markę, która jasno opisuje przetwarzanie danych zgodnie z RODO. Zabezpiecz konto unikalnym hasłem.",
      },
      {
        question: "LiDAR czy kamera: jaką nawigację wybrać w robocie odkurzającym?",
        answer: "LiDAR szybko tworzy mapę i działa nawet w ciemności, dlatego jest dobrym wyborem domyślnym; kamera lepiej rozpoznaje niektóre przeszkody, np. kable czy skarpetki. Wiele modeli łączy obie technologie. Sprawdź, czy robot pozwala wyznaczać strefy zakazane i zapisywać mapy kilku pięter.",
      },
      {
        question: "Czy robot do mycia okien jest bezpieczny i skuteczny?",
        answer: "Tak, robot do mycia okien samodzielnie umyje gładką szybę, pod warunkiem że jest przypięty linką asekuracyjną i ma akumulator awaryjny na wypadek zaniku zasilania. Gorzej radzi sobie z bardzo brudnymi szybami i grubymi ramami. Sprawdź minimalny rozmiar szyby, przyczepność i wykrywanie krawędzi.",
      },
    ],
    sv: [
      {
        question: "Är en robotdammsugare värd pengarna om du har husdjur?",
        answer: "Ja, med hund eller katt gör en robotdammsugare stor nytta, eftersom den kan köras varje dag och hindrar djurhåren från att samlas. Välj en trasselfri borste, en stor dammbehållare och bra sugkraft. En självtömmande station minskar hanteringen, men borste och filter behöver fortfarande rengöras regelbundet.",
      },
      {
        question: "Gör en robotdammsugare med mopp verkligen rent?",
        answer: "En 2-i-1-robot sköter det dagliga underhållet av hårda golv bra, men den ersätter inte skurning för hand när fläckarna har torkat in. Nyare modeller med roterande moppdukar, eller med en station som tvättar och torkar dukarna, gör ett bättre jobb. Kontrollera att roboten lyfter moppen när den kör över mattor.",
      },
      {
        question: "Är en robotdammsugare med kamera säker för integriteten?",
        answer: "En robot med kamera kan vara integritetssäker om bilderna stannar i apparaten eller om du själv bestämmer vad som laddas upp. Välj hellre en modell med LiDAR-navigering utan kamera, eller en där kameran går att stänga av, och ett märke som tydligt förklarar hur uppgifterna hanteras enligt GDPR. Skydda kontot med ett unikt lösenord.",
      },
      {
        question: "LiDAR eller kamera: vilken navigering är bäst i en robotdammsugare?",
        answer: "LiDAR kartlägger snabbt och fungerar även i mörker, vilket gör det till ett bra standardval. En kamera känner bättre igen vissa hinder, som sladdar och strumpor. Många modeller kombinerar båda. Kontrollera att du kan lägga in förbjudna zoner och spara kartor för flera våningar.",
      },
      {
        question: "Är fönsterputsrobotar säkra och effektiva?",
        answer: "Ja, en fönsterputsrobot rengör släta glasytor helt på egen hand, förutsatt att den är säkrad med en säkerhetslina och har ett reservbatteri om strömmen skulle gå. Den passar sämre för mycket smutsiga fönster eller tjocka karmar. Kontrollera minsta fönsterstorlek, hur bra den suger fast och om den känner av kanterna.",
      },
    ],
    us: [
      {
        question: "Is a robot vacuum worth it if you have pets?",
        answer: "Yes. A robot vacuum is very useful with dogs or cats because it runs every day and keeps pet hair from building up. Look for a tangle-free brush roll, a large dustbin and strong suction. A self-emptying dock cuts down on handling, but you'll still need to clean the brush and filter regularly.",
      },
      {
        question: "Do robot vacuum and mop combos really mop well?",
        answer: "A 2-in-1 robot handles everyday upkeep on hard floors well, but it won't replace scrubbing by hand for dried-on stains. Newer models with spinning mop pads, or a dock that washes and dries the pads, do a better job. Check that the robot lifts its mop pads over carpets and rugs.",
      },
      {
        question: "Is a robot vacuum with a camera safe for privacy?",
        answer: "A camera robot can be safe for privacy if images stay on the device or you control what gets uploaded. Prefer a LiDAR model with no camera, or one whose camera can be turned off, from a brand that clearly explains how it handles your data. Protect the account with a unique password.",
      },
      {
        question: "LiDAR or camera: which robot vacuum navigation is better?",
        answer: "LiDAR maps quickly and works even in the dark, which makes it a solid default; a camera is better at recognizing some obstacles, such as cords or socks. Many models combine both. Check for no-go zones and multi-floor mapping.",
      },
      {
        question: "Are window cleaning robots safe and effective?",
        answer: "Yes. A window cleaning robot cleans smooth glass on its own, as long as it's secured with a safety tether and has a backup battery in case of a power outage. It's less suited to heavily soiled glass or thick frames. Check the minimum window size, suction strength and edge detection.",
      },
    ],
    ca: [
      {
        question: "Is a robot vacuum worth it with pets?",
        answer: "Yes, a robot vacuum is very useful with dogs or cats because it runs daily and keeps pet hair from building up. Look for a tangle-free brush, a large dust bin and strong suction. A self-emptying dock reduces handling, though you still need to clean the brush and filter regularly.",
      },
      {
        question: "Do robot vacuum and mop combos really mop well?",
        answer: "A 2-in-1 robot handles everyday upkeep of hard floors well, but it doesn't replace scrubbing by hand for dried-on stains. Newer models with rotating mop pads, or a dock that washes and dries the pads, do a better job. Check that the robot lifts its mop over carpets and rugs.",
      },
      {
        question: "Is a robot vacuum with a camera safe for privacy?",
        answer: "A camera robot can be safe for privacy if images stay on the device or you control what's uploaded. Prefer a LiDAR model with no camera, or one whose camera can be switched off, and a brand that clearly explains how it handles your data. Protect the account with a unique password.",
      },
      {
        question: "LiDAR or camera: which robot vacuum navigation is better?",
        answer: "LiDAR maps quickly and works even in the dark, which makes it a sound default; a camera recognizes some obstacles, such as cables or socks, more reliably. Many models combine both. Check for no-go zones and multi-floor map storage.",
      },
      {
        question: "Are window cleaning robots safe and effective?",
        answer: "Yes, a window cleaning robot cleans smooth glass on its own, provided it's secured with a safety rope and has a backup battery in case of a power outage. It's less suited to heavily soiled glass or thick frames. Check the minimum glass size, suction strength and edge detection.",
      },
    ],
  },
  "outdoor-connecte": {
    fr: [
      { question: "Une tondeuse robot a-t-elle besoin d'un fil périphérique ?", answer: "Non, de plus en plus de tondeuses robots fonctionnent sans fil périphérique grâce au GPS/RTK ou à la vision, mais le fil reste la méthode la plus éprouvée. Un modèle sans fil évite l'installation, à condition d'avoir un ciel dégagé ou une bonne vision. Vérifiez la gestion des pentes, de la surface maximale et des zones interdites." },
      { question: "Une tondeuse robot peut-elle tondre la nuit sans danger ?", answer: "Mieux vaut éviter la tonte nocturne, car la faune comme les hérissons peut être blessée par les lames. Programmez la tondeuse en journée, ou choisissez un modèle avec détection d'obstacles et lames peu agressives. Un code PIN et une alarme antivol limitent le risque de vol." },
      { question: "L'arrosage connecté permet-il d'économiser de l'eau ?", answer: "Oui, un programmateur d'arrosage connecté peut réduire le gaspillage en ajustant les cycles selon la météo, la pluie ou l'humidité du sol. L'économie dépend de la précision du réglage et de la qualité de l'installation. Vérifiez le nombre de zones, la compatibilité avec votre robinet ou électrovanne et la compatibilité Matter ou assistant vocal." },
      { question: "L'éclairage extérieur solaire connecté vaut-il le coup ?", answer: "Oui, il évite tout câblage et fonctionne bien dans un jardin ensoleillé, mais en hiver l'autonomie baisse dans le nord de l'Europe. Vérifiez la capacité de la batterie, la puissance du panneau, l'indice IP et la possibilité d'un détecteur de mouvement. Les modèles connectés demandent une bonne portée Wi-Fi ou Zigbee." },
      { question: "Un robot de piscine nettoie-t-il vraiment sans intervention ?", answer: "Oui, un robot de piscine nettoie fond, parois et ligne d'eau de façon autonome, mais il faut vider le filtre régulièrement. Choisissez selon la forme et la taille du bassin, la filtration fine et l'autonomie. Les modèles sans fil sont pratiques mais demandent de recharger la batterie." },
    ],
    en: [
      { question: "Does a robot lawn mower need a boundary wire?", answer: "No, a growing number of robot mowers work without a boundary wire using GPS/RTK or vision, though wire remains the most proven method. A wire-free model skips installation, provided it has a clear sky view or good vision. Check slope handling, maximum lawn size and no-go zones." },
      { question: "Is it safe to run a robot lawn mower at night?", answer: "It is better to avoid night mowing, as wildlife such as hedgehogs can be injured by the blades. Schedule the mower for daytime, or choose a model with obstacle detection and low-risk blades. A PIN code and anti-theft alarm reduce the risk of theft." },
      { question: "Does smart irrigation save water?", answer: "Yes, a smart irrigation controller can cut waste by adjusting cycles to weather, rain or soil moisture. The saving depends on setup accuracy and installation quality. Check the number of zones, compatibility with your tap or valve, and Matter or voice assistant support." },
      { question: "Are smart solar outdoor lights worth it?", answer: "Yes, they need no wiring and work well in a sunny garden, but autonomy drops in winter in northern Europe. Check battery capacity, panel size, IP rating and whether a motion sensor is included. Connected models need decent Wi-Fi or Zigbee range." },
      { question: "Does a pool robot really clean without supervision?", answer: "Yes, a pool robot cleans the floor, walls and waterline on its own, but you must empty the filter regularly. Choose by pool shape and size, fine filtration and run time. Cordless models are convenient but need battery charging." },
    ],
    de: [
      { question: "Braucht ein Mähroboter ein Begrenzungskabel?", answer: "Nein, immer mehr Mähroboter arbeiten dank GPS/RTK oder Kamera ohne Begrenzungskabel, das Kabel bleibt aber die bewährteste Methode. Ein kabelloses Modell erspart die Verlegung, braucht jedoch freien Himmel oder gute Bildverarbeitung. Prüfen Sie Steigungen, maximale Rasenfläche und Sperrzonen." },
      { question: "Darf ein Mähroboter nachts mähen?", answer: "Nachtmähen sollten Sie besser vermeiden, da Wildtiere wie Igel durch die Messer verletzt werden können. Planen Sie die Mähzeit tagsüber oder wählen Sie ein Modell mit Hinderniserkennung und schonenden Messern. PIN-Code und Diebstahlalarm verringern das Diebstahlrisiko zusätzlich, besonders bei Geräten mit App-Anbindung." },
      { question: "Spart eine smarte Bewässerung Wasser?", answer: "Ja, ein smarter Bewässerungscomputer kann Wasser sparen, indem er Zyklen an Wetter, Regen oder Bodenfeuchte anpasst. Wie viel, hängt von Einstellung und Installation ab. Prüfen Sie die Zahl der Zonen, die Kompatibilität mit Wasserhahn oder Ventil und Matter- oder Sprachassistenten-Unterstützung." },
      { question: "Lohnt sich vernetzte Solar-Außenbeleuchtung?", answer: "Ja, sie braucht keine Verkabelung und funktioniert im sonnigen Garten gut, im Winter sinkt die Laufzeit in Nordeuropa jedoch. Prüfen Sie Akkukapazität, Panelgröße, IP-Schutzart und ob ein Bewegungsmelder dabei ist. Vernetzte Modelle brauchen guten WLAN- oder Zigbee-Empfang am Montageort." },
      { question: "Reinigt ein Poolroboter wirklich ohne Aufsicht?", answer: "Ja, ein Poolroboter reinigt Boden, Wände und Wasserlinie selbstständig, den Filter müssen Sie aber regelmäßig leeren. Wählen Sie nach Beckenform und -größe, Feinfilterung und Laufzeit. Kabellose Modelle sind praktisch, müssen aber nach jedem Einsatz geladen werden. Prüfen Sie außerdem, ob das Gerät Wand und Wasserlinie sicher erreicht." },
    ],
    es: [
      { question: "¿Un robot cortacésped necesita cable perimetral?", answer: "No, cada vez más robots cortacésped funcionan sin cable perimetral gracias al GPS/RTK o a la visión, aunque el cable sigue siendo el método más probado. Un modelo sin cable evita la instalación, siempre que tenga cielo despejado o buena visión. Comprueba pendientes, superficie máxima y zonas prohibidas." },
      { question: "¿Es seguro que un robot cortacésped trabaje de noche?", answer: "Es mejor evitar el corte nocturno, porque animales como los erizos pueden resultar heridos por las cuchillas. Programa el robot de día o elige un modelo con detección de obstáculos y cuchillas poco agresivas. Un código PIN y una alarma antirrobo reducen el riesgo de robo." },
      { question: "¿El riego conectado ahorra agua?", answer: "Sí, un programador de riego conectado puede reducir el desperdicio ajustando los ciclos según el clima, la lluvia o la humedad del suelo. El ahorro depende de la precisión de la configuración y de la instalación. Comprueba el número de zonas, la compatibilidad con tu grifo o electroválvula y el soporte Matter o de asistente de voz." },
      { question: "¿Merece la pena la iluminación exterior solar conectada?", answer: "Sí, no necesita cableado y funciona bien en un jardín soleado, pero en invierno la autonomía baja en el norte de Europa. Revisa la capacidad de la batería, el panel, el grado IP y si incluye detector de movimiento. Los modelos conectados necesitan buen alcance Wi-Fi o Zigbee." },
      { question: "¿Un robot de piscina limpia de verdad sin supervisión?", answer: "Sí, un robot de piscina limpia fondo, paredes y línea de flotación por sí solo, pero hay que vaciar el filtro con regularidad. Elige según la forma y el tamaño del vaso, la filtración fina y la autonomía. Los modelos sin cable son cómodos, pero requieren recargar la batería." },
    ],
    it: [
      { question: "Un robot tagliaerba ha bisogno del filo perimetrale?", answer: "No, sempre più robot tagliaerba funzionano senza filo perimetrale grazie a GPS/RTK o visione, anche se il filo resta il metodo più collaudato. Un modello senza filo evita l'installazione, purché abbia cielo libero o buona visione. Verifica pendenze, superficie massima e zone vietate." },
      { question: "Un robot tagliaerba può lavorare di notte senza rischi?", answer: "Meglio evitare il taglio notturno, perché animali come i ricci possono essere feriti dalle lame. Programma il robot di giorno o scegli un modello con rilevamento ostacoli e lame poco aggressive. Codice PIN e allarme antifurto riducono il rischio di furto." },
      { question: "L'irrigazione connessa fa risparmiare acqua?", answer: "Sì, un programmatore di irrigazione connesso può ridurre gli sprechi adattando i cicli a meteo, pioggia o umidità del terreno. Il risparmio dipende dalla precisione delle impostazioni e dall'impianto. Controlla il numero di zone, la compatibilità con rubinetto o elettrovalvola e il supporto Matter o assistente vocale." },
      { question: "Vale la pena l'illuminazione solare da esterno connessa?", answer: "Sì, non richiede cablaggio e funziona bene in un giardino soleggiato, ma in inverno l'autonomia cala nel Nord Europa. Controlla capacità della batteria, pannello, grado IP e presenza del sensore di movimento. I modelli connessi richiedono buona copertura Wi-Fi o Zigbee." },
      { question: "Un robot per piscina pulisce davvero senza supervisione?", answer: "Sì, un robot per piscina pulisce fondo, pareti e linea d'acqua da solo, ma il filtro va svuotato regolarmente. Scegli in base a forma e dimensioni della vasca, filtrazione fine e autonomia. I modelli senza cavo sono comodi ma vanno ricaricati." },
    ],
    nl: [
      { question: "Heeft een robotmaaier een grensdraad nodig?", answer: "Nee, steeds meer robotmaaiers werken zonder grensdraad dankzij GPS/RTK of camerabeeld, al blijft de draad de meest beproefde methode. Een draadloos model scheelt installatie, mits er vrij zicht op de lucht is of goede camerabeelden. Check hellingen, maximale grasoppervlakte en verboden zones." },
      { question: "Mag een robotmaaier 's nachts maaien?", answer: "Maaien in het donker kun je beter vermijden, omdat dieren zoals egels door de messen gewond kunnen raken. Plan de maaier overdag of kies een model met obstakeldetectie en veilige messen. Een pincode en diefstalalarm verkleinen het risico op diefstal." },
      { question: "Bespaart slimme beregening water?", answer: "Ja, een slimme beregeningscomputer kan water besparen door cycli aan te passen aan weer, regen of bodemvocht. De besparing hangt af van de nauwkeurigheid van de instelling en de installatie. Check het aantal zones, de compatibiliteit met je kraan of magneetventiel en Matter- of spraakassistent-ondersteuning." },
      { question: "Is slimme zonneverlichting voor buiten de moeite waard?", answer: "Ja, ze heeft geen bedrading nodig en werkt goed in een zonnige tuin, maar in de winter neemt de looptijd in Noord-Europa af. Check de accucapaciteit, het paneel, de IP-klasse en of er een bewegingssensor bij zit. Verbonden modellen hebben goed wifi- of Zigbee-bereik nodig." },
      { question: "Reinigt een zwembadrobot echt zonder toezicht?", answer: "Ja, een zwembadrobot reinigt bodem, wanden en waterlijn zelfstandig, maar je moet het filter regelmatig legen. Kies op basis van vorm en grootte van het bad, fijne filtratie en looptijd. Draadloze modellen zijn handig, maar moeten worden opgeladen." },
    ],
    pl: [
      {
        question: "Czy robot koszący potrzebuje przewodu ograniczającego?",
        answer: "Nie, coraz więcej robotów koszących działa bez przewodu ograniczającego dzięki GPS/RTK lub kamerom, choć przewód wciąż jest najlepiej sprawdzoną metodą. Model bez przewodu nie wymaga instalacji, pod warunkiem że niebo nad ogrodem nie jest zasłonięte albo kamera ma dobrą widoczność. Sprawdź, jak robot radzi sobie ze spadkami terenu, jaką maksymalną powierzchnię obsługuje i czy pozwala wyznaczać strefy zakazane.",
      },
      {
        question: "Czy robot koszący może bezpiecznie kosić w nocy?",
        answer: "Lepiej nie kosić w nocy, bo noże mogą zranić dzikie zwierzęta, np. jeże. Ustaw koszenie w ciągu dnia albo wybierz model z wykrywaniem przeszkód i mniej niebezpiecznymi nożami. Kod PIN i alarm antykradzieżowy zmniejszają ryzyko kradzieży.",
      },
      {
        question: "Czy inteligentne nawadnianie pozwala oszczędzać wodę?",
        answer: "Tak, inteligentny sterownik nawadniania może ograniczyć marnowanie wody, bo dostosowuje podlewanie do pogody, opadów lub wilgotności gleby. Oszczędność zależy od dokładności ustawień i jakości instalacji. Sprawdź liczbę stref, zgodność z Twoim kranem lub elektrozaworem oraz obsługę Matter lub asystentów głosowych.",
      },
      {
        question: "Czy inteligentne oświetlenie solarne do ogrodu się opłaca?",
        answer: "Tak – nie wymaga kładzenia przewodów i dobrze sprawdza się w nasłonecznionym ogrodzie, choć w północnej Europie zimą lampy świecą krócej. Sprawdź pojemność akumulatora, moc panelu, stopień ochrony IP i to, czy można dodać czujnik ruchu. Modele inteligentne wymagają dobrego zasięgu Wi-Fi lub Zigbee.",
      },
      {
        question: "Czy robot basenowy naprawdę sprząta bez Twojego udziału?",
        answer: "Tak, robot basenowy samodzielnie czyści dno, ściany i linię wody, ale filtr trzeba regularnie opróżniać. Wybieraj model według kształtu i wielkości basenu, dokładności filtracji i czasu pracy. Modele bezprzewodowe są wygodne, ale trzeba ładować ich akumulator.",
      },
    ],
    sv: [
      {
        question: "Behöver en robotgräsklippare begränsningskabel?",
        answer: "Nej, allt fler robotgräsklippare klarar sig utan begränsningskabel tack vare GPS/RTK eller kamerabaserad navigering, men kabeln är fortfarande den mest beprövade metoden. Med en modell utan kabel slipper du installationen, förutsatt att den har fri sikt mot himlen eller ser bra med kameran. Kontrollera hur den klarar sluttningar, hur stor gräsmatta den är gjord för och om du kan lägga in förbjudna zoner.",
      },
      {
        question: "Är det säkert att låta robotgräsklipparen gå på natten?",
        answer: "Undvik helst att klippa på natten, eftersom igelkottar och andra djur kan skadas av knivarna. Schemalägg klipparen på dagtid, eller välj en modell med hinderavkänning och knivar med låg skaderisk. En PIN-kod och ett stöldlarm minskar risken för stöld.",
      },
      {
        question: "Sparar smart bevattning vatten?",
        answer: "Ja, en smart bevattningsdator kan minska slöseriet genom att anpassa bevattningen efter väder, regn eller jordfuktighet. Hur mycket du sparar beror på hur noga den är inställd och hur bra installationen är. Kontrollera antalet zoner, att den passar din kran eller magnetventil och om den har stöd för Matter eller röstassistenter.",
      },
      {
        question: "Lönar sig smart solcellsbelysning utomhus?",
        answer: "Ja, den kräver ingen kabeldragning och fungerar bra i en solig trädgård, men på vintern blir drifttiden kortare i norra Europa. Kontrollera batteriets kapacitet, solpanelens effekt, IP-klassningen och om det finns en rörelsesensor. Uppkopplade modeller behöver god räckvidd för wifi eller Zigbee.",
      },
      {
        question: "Rengör en poolrobot verkligen helt på egen hand?",
        answer: "Ja, en poolrobot rengör botten, väggar och vattenlinje på egen hand, men filtret måste tömmas regelbundet. Välj efter poolens form och storlek, hur fint den filtrerar och hur lång drifttid den har. Sladdlösa modeller är praktiska men måste laddas.",
      },
    ],
    us: [
      {
        question: "Does a robot lawn mower need a boundary wire?",
        answer: "No. A growing number of robot mowers work without a boundary wire, using GPS/RTK or camera vision, though the wire is still the most proven method. A wire-free model skips the installation, as long as it has a clear view of the sky or good visibility for its cameras. Check slope handling, maximum lawn size and no-go zones.",
      },
      {
        question: "Is it safe to run a robot lawn mower at night?",
        answer: "It's best to avoid mowing at night, since small wildlife out after dark can be injured by the blades. Schedule the mower for daytime, or choose a model with obstacle detection and safer blades. A PIN code and an anti-theft alarm reduce the risk of theft.",
      },
      {
        question: "Does smart irrigation save water?",
        answer: "Yes. A smart irrigation controller can cut waste by adjusting watering to the weather, rainfall or soil moisture. The savings depend on how carefully it's set up and the quality of the installation. Check the number of zones, compatibility with your faucet or valves, and support for Matter or voice assistants.",
      },
      {
        question: "Are smart solar outdoor lights worth it?",
        answer: "Yes. They need no wiring and work well in a sunny yard, but run time drops in winter, when days are short. Check battery capacity, panel size, IP rating and whether a motion sensor is included. Smart models need decent Wi-Fi or Zigbee range.",
      },
      {
        question: "Does a robotic pool cleaner really clean on its own?",
        answer: "Yes. A robotic pool cleaner cleans the floor, walls and waterline on its own, but you have to empty the filter regularly. Choose based on your pool's shape and size, fine filtration and run time. Cordless models are convenient but need recharging.",
      },
    ],
    ca: [
      {
        question: "Does a robot lawn mower need a boundary wire?",
        answer: "No, a growing number of robot mowers work without a boundary wire using GPS/RTK or vision, though wire remains the most proven method. A wire-free model skips installation, provided it has a clear sky view or good vision. Check slope handling, maximum lawn size and no-go zones.",
      },
      {
        question: "Is it safe to run a robot lawn mower at night?",
        answer: "It's better to avoid mowing at night, as small wildlife such as toads and young rabbits can be injured by the blades. Schedule the mower for daytime, or choose a model with obstacle detection and low-risk blades. A PIN code and anti-theft alarm reduce the risk of theft.",
      },
      {
        question: "Does smart irrigation save water?",
        answer: "Yes, a smart irrigation controller can cut waste by adjusting cycles to the weather, rain or soil moisture. The savings depend on how accurately it's set up and how well it's installed. Check the number of zones, compatibility with your outdoor faucet or valve, and Matter or voice assistant support.",
      },
      {
        question: "Are smart solar outdoor lights worth it?",
        answer: "Yes, they need no wiring and work well in a sunny yard, but run time drops in winter, when days are short and panels can be covered in snow. Check battery capacity, panel size, IP rating and whether a motion sensor is included. Smart models need decent Wi-Fi or Zigbee range.",
      },
      {
        question: "Does a pool robot really clean without supervision?",
        answer: "Yes, a pool robot cleans the floor, walls and waterline on its own, but you must empty the filter regularly. Choose by pool shape and size, fine filtration and run time. Cordless models are convenient but need battery charging.",
      },
    ],
  },
}

export const SILO_FAQ_TITLE: Record<Lang, string> = {
  fr: 'Questions fréquentes',
  en: 'Frequently asked questions',
  de: 'Häufige Fragen',
  es: 'Preguntas frecuentes',
  it: 'Domande frequenti',
  nl: 'Veelgestelde vragen',
  pl: 'Najczęstsze pytania',
  sv: 'Vanliga frågor',
  us: 'Frequently asked questions',
  ca: 'Frequently asked questions',
}

export function getSiloFaq(lang: Lang, siloSlug: string): readonly SiloFaqItem[] {
  return SILO_FAQS[siloSlug]?.[lang] ?? []
}
