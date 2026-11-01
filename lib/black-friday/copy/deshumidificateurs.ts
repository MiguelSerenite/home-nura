import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'
import type { BlackFridayCategoryCopy } from '../types'

/** Black Friday page of the dehumidifiers: only the markets whose list carries it (../markets.ts). */
export const DEHUMIDIFIERS_COPY: Partial<Record<Lang, BlackFridayCategoryCopy>> = {
  fr: {
    name: 'Déshumidificateurs',
    h1: `Black Friday ${Y} : les déshumidificateurs à surveiller`,
    metaTitle: `Déshumidificateur Black Friday ${Y} : modèles à surveiller`,
    metaDescription: `Déshumidificateur pour chambre, salle de bain ou séchage du linge à surveiller au Black Friday ${Y} : Meaco, Comfee, Xiaomi. Capacité, bruit, mode nuit.`,
    blurb: 'Meaco, Comfee, Xiaomi : litres par jour, bruit et séchage du linge.',
    intro: "Avec le froid, les fenêtres fermées et le linge qui sèche à l'intérieur, l'humidité s'installe : c'est en novembre que les déshumidificateurs sont le plus recherchés. Avant de comparer les offres, choisissez la capacité en litres par jour selon la pièce, regardez le niveau sonore si l'appareil doit tourner dans une chambre, et vérifiez le mode linge si vous faites sécher votre linge à l'intérieur, ainsi que le drainage continu pour ne pas vider le bac tous les jours.",
    faq: [
      {
        question: "Absorbeur d'humidité ou déshumidificateur ?",
        answer: "L'absorbeur d'humidité fonctionne sans électricité, avec des recharges de sel à remplacer : il suffit pour un placard, une petite salle de bain ou une pièce peu humide. Le déshumidificateur électrique retire beaucoup plus d'eau : c'est lui qu'il faut quand la condensation revient chaque matin sur les fenêtres ou que des moisissures apparaissent.",
      },
      {
        question: 'Quelle capacité de déshumidificateur choisir ?',
        answer: "Elle s'exprime en litres d'eau retirés par jour, mais ce chiffre est mesuré dans un air bien plus chaud et humide que celui d'un logement : en usage réel, l'appareil en retire moins. Comptez 10 à 13 litres par jour pour une chambre ou une salle de bain, 16 à 20 litres pour un appartement, et 20 litres ou plus pour une maison, un sous-sol ou le séchage du linge.",
      },
      {
        question: 'Quel déshumidificateur pour une chambre ou pour une cave ?',
        answer: 'Pour une chambre, comparez le niveau sonore en décibels et cherchez un vrai mode nuit, comme sur le Xiaomi Smart Dehumidifier Lite. Pour une cave ou un garage non chauffé, préférez un modèle à dessiccant : les déshumidificateurs à compresseur, les plus courants, perdent nettement en efficacité sous 15 °C environ.',
      },
      {
        question: 'Un déshumidificateur consomme-t-il beaucoup ?',
        answer: "Tout dépend du temps pendant lequel il tourne. Pour estimer le coût, multipliez la puissance indiquée sur la fiche (en kilowatts) par le nombre d'heures de fonctionnement, puis par le prix de votre kWh. À capacité égale, un modèle à dessiccant consomme davantage qu'un modèle à compresseur. L'hygrostat, qui met l'appareil en pause dès que le taux d'humidité choisi est atteint, est la fonction qui limite le plus la consommation.",
      },
    ],
  },
  en: {
    name: 'Dehumidifiers',
    h1: `Black Friday ${Y}: the dehumidifiers worth watching`,
    metaTitle: `Black Friday ${Y}: Dehumidifiers for Damp & Drying Clothes`,
    metaDescription: `Dehumidifiers worth watching this Black Friday ${Y}: Meaco, Comfee, Xiaomi. Litres per day, laundry mode, cost to run: what to check before you buy.`,
    blurb: 'Meaco, Comfee, Xiaomi: for condensation, mould and drying washing indoors.',
    intro: 'A dehumidifier earns its keep from autumn onwards: condensation on the windows every morning, mould in the corners, washing that takes days to dry on the airer. Before looking at any offer, size it to the space in litres per day: that is what separates the models below, and all three have a laundry mode for drying clothes indoors. For an unheated garage or conservatory, a desiccant model copes better than a compressor one.',
    faq: [
      {
        question: 'What size dehumidifier do I need?',
        answer: 'Capacity is quoted in litres per day at 30°C and 80 per cent relative humidity, far damper than a normal home, so use it to compare models rather than as a real-world figure. As a rule of thumb: 10 to 13 litres for a bedroom or bathroom, 16 to 20 litres for a flat, and 20 litres or more for a house or for drying washing.',
      },
      {
        question: 'Can a dehumidifier dry clothes indoors?',
        answer: 'Yes. In a closed room, a dehumidifier pulls the moisture out of the air as the washing dries, which speeds things up and stops condensation building up on windows and walls. A laundry mode runs it at full power for a set time; the Meaco Arete Two 20L, the Comfee MDDF-16DEN7-WF and the Xiaomi Smart Dehumidifier Lite all have one.',
      },
      {
        question: 'How much does a dehumidifier cost to run?',
        answer: 'Multiply its power in kilowatts by the hours it runs and by the electricity unit rate shown on your bill. The humidistat makes the biggest difference: the unit pauses once the room reaches its target humidity instead of running non-stop. Power is listed on the spec sheet, so you can compare models before you buy.',
      },
      {
        question: 'Moisture absorber or electric dehumidifier?',
        answer: "Disposable moisture absorbers, the tubs and bags of crystals, suit a wardrobe, a cupboard or a caravan. They hold far less water and have no humidistat, so they can't keep a room at a set humidity: for condensation, mould or drying washing indoors, an electric dehumidifier is the right tool.",
      },
    ],
  },
  de: {
    name: 'Luftentfeuchter',
    h1: `Black Friday ${Y}: Diese Luftentfeuchter lohnen einen Blick`,
    metaTitle: `Black Friday ${Y}: Luftentfeuchter für Keller und Bad`,
    metaDescription: `Luftentfeuchter für den Black Friday ${Y}: Meaco, Comfee, Xiaomi. Liter pro Tag, Tank, Dauerablauf, Strom oder Granulat: Das sollten Sie vorher prüfen.`,
    blurb: 'Meaco, Comfee, Xiaomi: für Bad, Schlafzimmer, Keller oder zum Wäschetrocknen.',
    intro: 'Ein elektrischer Luftentfeuchter entzieht der Raumluft mehrere Liter Wasser pro Tag, weit mehr als ein Granulat-Entfeuchter, der ohne Strom auskommt. Vergleichen Sie am Black Friday die Entfeuchtungsleistung, die Tankgröße und den Anschluss für den Dauerablauf; steht das Gerät im Schlafzimmer, zählt außerdem die Lautstärke.',
    faq: [
      {
        question: 'Elektrischer Luftentfeuchter oder Granulat?',
        answer: 'Ein Luftentfeuchter mit Granulat braucht keinen Strom, bindet aber nur wenig Feuchtigkeit: Er passt in den Kleiderschrank, ins Auto oder in eine kleine Abstellkammer. Gegen beschlagene Fenster, einen feuchten Keller oder Wäsche, die in der Wohnung trocknen soll, braucht es ein elektrisches Gerät, das mehrere Liter pro Tag schafft.',
      },
      {
        question: 'Welcher Luftentfeuchter eignet sich für den Keller?',
        answer: 'Das hängt von der Temperatur ab. In einem beheizten Keller ist ein Kompressorgerät wie die Modelle dieser Auswahl sparsamer und wirksamer; planen Sie dort 20 Liter pro Tag oder mehr ein, etwa mit dem Meaco Arete Two. In einem unbeheizten Keller unter etwa 15 °C ist dagegen ein Adsorptionstrockner die bessere Wahl, weil er auch bei Kälte zuverlässig arbeitet. Ein Schlauchanschluss für den Dauerablauf erspart in beiden Fällen das ständige Leeren des Tanks.',
      },
      {
        question: 'Welche Entfeuchtungsleistung brauche ich?',
        answer: 'Die Hersteller geben sie in Litern pro Tag an, gemessen bei warmer, sehr feuchter Luft; im Wohnalltag schafft ein Gerät weniger. Als Faustregel: 10 bis 13 Liter für Schlafzimmer oder Bad, etwa der Xiaomi Smart Dehumidifier Lite; 16 bis 20 Liter für eine Wohnung, etwa der Comfee; ab 20 Litern für Haus, Keller oder Wäschetrocknung, etwa der Meaco Arete Two.',
      },
      {
        question: 'Wie viel Strom verbraucht ein Luftentfeuchter?',
        answer: 'Das hängt von der Leistungsaufnahme und von der Laufzeit ab. Am meisten spart der Hygrostat: Das Gerät pausiert, sobald die eingestellte Luftfeuchtigkeit erreicht ist, statt durchzulaufen. Der Meaco Arete Two hat den Ruf, sparsam und leise zu sein.',
      },
    ],
  },
  es: {
    name: 'Deshumidificadores',
    h1: `Black Friday ${Y}: los deshumidificadores que merece la pena seguir`,
    metaTitle: `Black Friday ${Y}: deshumidificadores a seguir`,
    metaDescription: `Deshumidificadores a seguir en el Black Friday ${Y}: Meaco, Comfee, Xiaomi. Litros al día, consumo, ruido y modo ropa: qué comprobar antes de comprar.`,
    blurb: 'Meaco, Comfee, Xiaomi: para el piso entero, la ropa tendida o el dormitorio.',
    intro: 'Un deshumidificador se elige según la habitación y el frío que haga en ella. La capacidad en litros al día se mide con aire cálido y muy húmedo, así que en pleno invierno, en una casa fría de la costa o del norte, extraerá menos de lo anunciado. Antes de fijarte en la oferta, comprueba que tenga higrostato, para que se pare al llegar a la humedad fijada, y drenaje continuo si no quieres vaciar el depósito: son los detalles que más pesan en el consumo y en el uso diario.',
    faq: [
      {
        question: '¿Cuántos litros al día necesito?',
        answer: 'Para un dormitorio o un baño suelen bastar de 10 a 12 litros al día: ahí encaja un modelo pequeño como el Xiaomi Smart Dehumidifier Lite, de 13 litros. Para un piso entero o para secar ropa dentro de casa, apunta a 20 litros o más. Recuerda que con frío el aparato extrae bastante menos de lo que indica la ficha.',
      },
      {
        question: '¿Deshumidificador de compresor o desecante?',
        answer: 'El de compresor consume menos y rinde bien en habitaciones templadas, pero pierde eficacia por debajo de unos 15 °C. El desecante sigue funcionando en habitaciones frías, como un trastero o una casa sin calefacción, y desprende algo de calor, a cambio de un consumo mayor.',
      },
      {
        question: '¿Cuánto consume un deshumidificador?',
        answer: 'Depende de su potencia y de las horas que funcione: multiplica la potencia en kilovatios por las horas de uso y tendrás los kWh, a los que aplicas el precio de tu tarifa. El higrostato lo apaga al alcanzar la humedad fijada, y si tu tarifa tiene tramos horarios, programarlo en horas valle abarata la factura.',
      },
      {
        question: '¿Sirve para secar la ropa en casa?',
        answer: 'Sí: en una habitación cerrada, la ropa tendida se seca antes con el deshumidificador en marcha. Algunos modelos tienen un modo ropa específico, como el Comfee MDDF-16DEN7-WF, que además admite drenaje continuo.',
      },
    ],
  },
  nl: {
    name: 'Luchtontvochtigers',
    h1: `Black Friday ${Y}: de luchtontvochtigers om in de gaten te houden`,
    metaTitle: `Black Friday ${Y}: luchtontvochtigers om te volgen`,
    metaDescription: `Luchtontvochtigers om te volgen tijdens Black Friday ${Y}: Meaco, Comfee, Xiaomi. Capaciteit, kelder of badkamer, verbruik: wat je vóór aankoop checkt.`,
    blurb: 'Meaco, Comfee, Xiaomi: capaciteit per dag, afvoer en geluid, afhankelijk van de ruimte.',
    intro: 'Een luchtontvochtiger, in Vlaanderen vaak gewoon ontvochtiger, helpt in de winter tegen condens op de ramen, een vochtige kelder of was die binnen niet droogt. Anders dan een vochtvreter haalt hij elke dag liters water uit de lucht. Vergelijk tijdens Black Friday de capaciteit per dag, de grootte van het reservoir en de aansluiting voor een afvoerslang, en let op het geluid als hij in de slaapkamer staat.',
    faq: [
      {
        question: 'Welke capaciteit heb je nodig?',
        answer: 'Fabrikanten geven de capaciteit in liter per dag, vaak gemeten bij 30 °C en een zeer hoge luchtvochtigheid: in een gewone woning haalt een toestel minder, dus kies liever iets ruimer. Voor een slaapkamer of badkamer volstaat een klein model zoals de Xiaomi Smart Dehumidifier Lite (13 liter); voor een appartement kies je eerder de Comfee (16 liter) of de Meaco Arete Two (20 liter), en voor een heel huis, een kelder of om de was te drogen 20 liter of meer.',
      },
      {
        question: 'Een ontvochtiger voor de kelder: waar let je op?',
        answer: 'Een compressormodel werkt het best in een verwarmde ruimte. In een koude kelder of garage, onder ongeveer 15 °C, daalt de capaciteit en doet een adsorptiemodel (met droogmiddel) het beter, al verbruikt dat meer stroom. Kies in een kelder een toestel met continue afvoer via een slang, zodat je het reservoir niet steeds hoeft te legen.',
      },
      {
        question: 'Hoeveel verbruikt een luchtontvochtiger?',
        answer: 'Dat hangt af van het vermogen op het typeplaatje en van hoe lang hij draait. Met een hygrostaat pauzeert hij zodra de ingestelde luchtvochtigheid is bereikt; een doel van ongeveer 50 procent past bij de meeste ruimtes. Een adsorptiemodel verbruikt meer dan een compressormodel; de Meaco Arete Two staat bekend om zijn lage verbruik.',
      },
    ],
  },
  sv: {
    name: 'Avfuktare',
    h1: `Black Week ${Y}: avfuktare att hålla koll på`,
    metaTitle: `Avfuktare Black Week ${Y}: modeller värda att bevaka`,
    metaDescription: `Avfuktare för källare, tvättstuga eller sovrum inför Black Week ${Y}: Meaco, Comfee och Xiaomi. Kapacitet, temperatur och dränering – kolla det först.`,
    blurb: 'Meaco, Comfee, Xiaomi: för källaren, tvättstugan eller sovrummet.',
    intro: 'En avfuktare väljer du efter rummet den ska stå i. Kapaciteten i liter per dygn mäts i varm och fuktig luft, så i en sval källare tar en kompressoravfuktare upp betydligt mindre vatten än det som anges. Kontrollera också om vattnet kan ledas bort med en slang, så att du slipper tömma tanken, och om hygrostaten stänger av apparaten när luften är tillräckligt torr.',
    faq: [
      {
        question: 'Vilken avfuktare passar i källaren?',
        answer: 'Det beror på temperaturen. De flesta flyttbara avfuktare har kompressor: de fungerar bäst i rumstempererade utrymmen och tappar kapacitet när det blir kallt. I en kall källare eller ett ouppvärmt förråd fungerar en sorptionsavfuktare bättre.',
      },
      {
        question: 'Kan jag använda en flyttbar avfuktare i krypgrunden?',
        answer: 'Oftast inte. I en krypgrund används vanligen en fast monterad sorptionsavfuktare som leder ut den fuktiga luften genom en kanal, helst installerad av en fackman. De flyttbara modellerna passar bättre i tvättstugan, badrummet, sovrummet eller en uppvärmd källare.',
      },
      {
        question: 'Torkar tvätten fortare med en avfuktare?',
        answer: 'Ja. I ett stängt rum torkar tvätten på torkställningen fortare när avfuktaren går, och vissa modeller har ett särskilt torkläge för tvätt, till exempel Comfee MDDF-16DEN7-WF.',
      },
      {
        question: 'Hur mycket el drar en avfuktare?',
        answer: 'Det beror på apparatens effekt i watt och på hur många timmar den går: effekten gånger drifttiden ger förbrukningen i kWh. Hygrostaten håller nere drifttiden genom att stänga av apparaten när luften nått den nivå du ställt in. Elpriset skiljer sig mycket mellan elområdena, från SE1 i norr till SE4 i söder, så räkna med ditt eget pris per kWh.',
      },
    ],
  },
}
