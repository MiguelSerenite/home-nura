import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'
import type { BlackFridayCategoryCopy } from '../types'

/** Black Friday page of the humidifiers: only the markets whose list carries it (../markets.ts). */
export const HUMIDIFIERS_COPY: Partial<Record<Lang, BlackFridayCategoryCopy>> = {
  es: {
    name: 'Humidificadores',
    h1: `Black Friday ${Y}: los humidificadores que merece la pena seguir`,
    metaTitle: `Black Friday ${Y}: humidificadores a seguir`,
    metaDescription: `Humidificadores a seguir en el Black Friday ${Y}: Boneco, Levoit, Dyson. Ultrasónico o evaporativo, cal del agua, ruido y limpieza: qué comprobar.`,
    blurb: 'Boneco, Levoit, Dyson: ultrasónico o evaporativo, según el agua de tu zona.',
    intro: 'Con la calefacción encendida, el aire de casa se reseca, sobre todo en el interior peninsular. Antes de fijarte en la oferta, mide la humedad con un higrómetro: si por la mañana ya hay condensación en los cristales, no necesitas un humidificador. Después elige la tecnología según el agua de tu zona: con agua dura, un ultrasónico deja polvo blanco en los muebles, mientras que uno evaporativo retiene la cal en su filtro.',
    faq: [
      {
        question: '¿Humidificador o deshumidificador?',
        answer: 'Depende de la humedad de tu casa: mídela antes con un higrómetro. El humidificador añade humedad cuando el aire está seco, algo habitual en el interior con la calefacción puesta; el deshumidificador la quita cuando sobra, como en muchas casas de la costa y del norte en invierno. Si ves condensación en las ventanas o manchas de moho, lo que necesitas es un deshumidificador.',
      },
      {
        question: '¿Ultrasónico o evaporativo?',
        answer: 'El ultrasónico es silencioso y compacto, pero con agua del grifo dura expulsa la cal en forma de polvo blanco: usa agua destilada o desmineralizada. El evaporativo retiene los minerales en su filtro y no deja polvo, a cambio de limpiar o cambiar ese filtro. El BONECO H700 SMART y el Dyson PH04 son evaporativos; el Levoit Classic 300S es ultrasónico.',
      },
      {
        question: '¿Puedo dormir con el humidificador encendido?',
        answer: 'Sí, si el aparato está limpio y tiene modo automático o higrostato, para que se pare al llegar al nivel fijado. Colócalo a cierta distancia de la cama, sin apuntar a paredes ni muebles, y en un dormitorio infantil elige vapor frío, que no quema.',
      },
      {
        question: '¿Qué mantenimiento necesita?',
        answer: 'Cambiar el agua cada día, vaciar el depósito si no vas a usarlo y descalcificarlo según la dureza del agua de tu zona. Un modelo de llenado superior, como el Levoit Classic 300S, se rellena y se limpia con más facilidad.',
      },
    ],
  },
  pl: {
    name: 'Nawilżacze powietrza',
    h1: `Black Friday ${Y}: nawilżacze powietrza, które warto mieć na oku`,
    metaTitle: `Nawilżacz powietrza na Black Friday ${Y}: jaki wybrać?`,
    metaDescription: `Nawilżacze powietrza na Black Friday ${Y}: BONECO, Levoit, Dyson. Ewaporacyjny czy ultradźwiękowy, biały osad, zbiornik, czyszczenie: co sprawdzić.`,
    blurb: 'BONECO, Levoit, Dyson: ewaporacyjny lub ultradźwiękowy, zależnie od wody i pokoju.',
    intro: 'Gdy grzeją kaloryfery, powietrze w mieszkaniu szybko robi się suche: drapanie w gardle, suche oczy i elektryzujące się włosy to typowe zimowe objawy. Nawilżacz powietrza pomaga utrzymać wilgotność na poziomie od 40 do 60 procent. Zanim porównasz oferty na Black Friday, wybierz technologię – ewaporacyjną albo ultradźwiękową – i sprawdź pojemność zbiornika oraz to, jak łatwo go umyć.',
    faq: [
      {
        question: 'Nawilżacz ewaporacyjny czy ultradźwiękowy?',
        answer: 'Ultradźwiękowy, jak Levoit Classic 300S, jest cichy i szybko nawilża, ale przy twardej wodzie z kranu może zostawiać biały osad na meblach; pomaga woda filtrowana lub demineralizowana. Ewaporacyjny, jak BONECO H700 SMART, odparowuje wodę z nasączonego wkładu, nie zostawia osadu i trudno nim przewilżyć pomieszczenie, ale jest większy, a wkład trzeba co jakiś czas wymieniać.',
      },
      {
        question: 'Jaka wilgotność powietrza jest najlepsza w mieszkaniu?',
        answer: 'Zwykle zaleca się od 40 do 60 procent. Przy wyższej wilgotności na zimnych ścianach i oknach skrapla się para, co sprzyja pleśni. Nawilżacz z higrostatem, czyli trybem automatycznym, sam utrzyma ustawiony poziom. Warto też postawić osobny higrometr w innym miejscu pokoju, bo tuż przy nawilżaczu odczyt bywa zawyżony.',
      },
      {
        question: 'Nawilżacz czy urządzenie 2 w 1 z oczyszczaczem?',
        answer: 'Urządzenie takie jak Dyson Purifier Humidify+Cool Formaldehyde PH04 łączy filtr HEPA, nawilżanie i wentylator, więc zajmuje jedno miejsce zamiast dwóch i sprawdzi się u alergików. Jeśli potrzebujesz tylko nawilżania, osobny nawilżacz jest prostszy w obsłudze i łatwiej dobrać go do pokoju.',
      },
      {
        question: 'Jak dbać o nawilżacz powietrza?',
        answer: 'Wodę wymieniaj codziennie, zamiast ją dolewać, a zbiornik regularnie myj i odkamieniaj zgodnie z instrukcją: w stojącej wodzie rozwijają się bakterie. Model napełniany od góry, jak Levoit Classic 300S, łatwiej utrzymać w czystości. W nawilżaczu ewaporacyjnym pamiętaj też o wymianie wkładu.',
      },
    ],
  },
  sv: {
    name: 'Luftfuktare',
    h1: `Black Week ${Y}: luftfuktare att hålla koll på`,
    metaTitle: `Luftfuktare Black Week ${Y}: modeller värda att bevaka`,
    metaDescription: `Luftfuktare att hålla koll på inför Black Week ${Y}: BONECO, Levoit och Dyson. Avdunstning eller ultraljud, ljudnivå i sovrummet, skötsel – så väljer du.`,
    blurb: 'BONECO, Levoit, Dyson: avdunstning eller ultraljud, för sovrummet eller stora rum.',
    intro: 'När elementen går för fullt på vintern blir inomhusluften torr, och det är då en luftfuktare gör mest nytta. Bestäm först tekniken, avdunstning eller ultraljud, och kontrollera sedan tankens storlek, ljudnivån i nattläget om den ska stå i sovrummet och hur lätt den är att rengöra. Vissa modeller renar också luften, vilket kan löna sig om du är allergiker.',
    faq: [
      {
        question: 'Avdunstning eller ultraljud: vilken luftfuktare ska jag välja?',
        answer: 'En luftfuktare som arbetar med avdunstning blåser luft genom en fuktad filtermatta. Den ger inget vitt damm och fuktar inte mer än luften kan ta upp. En ultraljudsmodell är ofta tystare och drar lite el, men med kalkhaltigt vatten kan den lämna vitt damm på möblerna.',
      },
      {
        question: 'Vilken luftfuktare passar i sovrummet?',
        answer: 'En tyst modell med nattläge och en display som går att släcka. Ultraljudsmodeller är ofta de tystaste, medan en luftfuktare med avdunstning hörs mer på hög fläkthastighet. Ställ den en bit från sängen och väggen, så att fukten sprids i rummet.',
      },
      {
        question: 'Kan luften inomhus bli för fuktig?',
        answer: 'Ja. Det är normalt att inomhusluften är torrare på vintern, så fukta måttligt och låt hygrostaten i autoläget hålla den nivå du ställer in. Bildas det kondens på fönstren är det ett tecken på att luften är för fuktig, och för mycket fukt kan ge fuktskador och mögel.',
      },
      {
        question: 'Hur sköter jag en luftfuktare?',
        answer: 'Häll ut gammalt vatten i stället för att bara fylla på, rengör tanken enligt tillverkarens anvisningar och byt filtermattan i en avdunstningsmodell när den blir hård eller missfärgad. I vatten som står länge kan bakterier växa till.',
      },
    ],
  },
  us: {
    name: 'Humidifiers',
    h1: `Black Friday ${Y}: The Humidifiers Worth Watching`,
    metaTitle: `Black Friday ${Y}: Best Humidifiers for Dry Winter Air`,
    metaDescription: `Humidifiers worth watching this Black Friday ${Y}: Levoit, Sharp and Dyson. Room size, ultrasonic or evaporative, cleaning: what to check first.`,
    blurb: 'Levoit, Sharp, Dyson: standalone humidifiers and purifier-humidifier combos.',
    intro: "Running the heat dries out indoor air all winter. Match the humidifier's output to the room (most makers list a recommended square footage), choose between an ultrasonic cool-mist model and an evaporative one, and check how easy the tank is to clean: that's the part you'll deal with every week. Two of the models below double as air purifiers.",
    faq: [
      {
        question: 'What size humidifier do I need for a bedroom?',
        answer: 'Go by the room size the manufacturer lists, not just the tank: the output, in gallons per day, decides how much space a humidifier can cover, while the tank only sets how long it runs between refills. For a bedroom, also check the noise level and whether the display lights can be turned off at night.',
      },
      {
        question: 'Ultrasonic or evaporative humidifier?',
        answer: 'An ultrasonic humidifier is quiet and puts out a fine cool mist, but with hard tap water it can leave white mineral dust on furniture, which is why the EPA advises using water with a low mineral content, such as distilled water. An evaporative model blows air through a wet wick: no white dust, but the wick needs replacing from time to time.',
      },
      {
        question: 'What humidity level should I aim for?',
        answer: 'The EPA recommends keeping indoor humidity below 60 percent, ideally between 30 and 50 percent. A model with a built-in humidistat holds the level you set, which helps prevent condensation on windows and mold; an app lets you check the reading from your phone.',
      },
    ],
  },
  ca: {
    name: 'Humidifiers',
    h1: `Black Friday ${Y}: the humidifiers worth watching`,
    metaTitle: `Black Friday ${Y} in Canada: Humidifiers Worth Watching`,
    metaDescription: `Humidifiers worth watching this Black Friday ${Y}: Levoit, Dyson and Sharp. Bedroom or large room, tank, cleaning: what to check before you buy.`,
    blurb: 'Levoit, Dyson, Sharp: for dry winter air in a bedroom or a large room.',
    intro: 'Once the heat is on for the winter, indoor air gets dry: static shocks, a scratchy throat in the morning, dry skin. Before you look at any discount, match the humidifier to the room (a bedroom or an open-concept living area), check how easy the tank is to fill and clean, and decide whether you want a model that also purifies the air, like the Sharp and the Dyson below.',
    faq: [
      {
        question: 'Do I need a furnace humidifier or a portable one?',
        answer: 'A furnace humidifier, also called a whole-house humidifier, is mounted on the ductwork of a forced-air system and humidifies every room; it connects to a water line and is usually installed by an HVAC technician. The models here are portable: they plug in and humidify one room, which is often enough for a bedroom or a living room, and they work with any heating system, baseboard heaters included.',
      },
      {
        question: 'How do I know if my home is too dry in winter?',
        answer: 'Measure with a hygrometer: many smart humidifiers have one built in and hold the level you set. If the reading stays low and you notice static shocks or a dry throat, a humidifier can help. On very cold days, watch your windows: if condensation or frost forms on the inside, the air is already too humid for the weather, so turn the setting down, because that moisture can lead to mould.',
      },
      {
        question: 'How do I clean and descale a humidifier?',
        answer: 'Empty and refill the tank every day rather than topping it up, and descale it once a week with diluted white vinegar or citric acid, then rinse well. A top-fill tank, like the one on the Levoit Classic 300S, is easier to reach into and wipe out. With hard tap water, an ultrasonic model can leave white dust on furniture; distilled water prevents it. On models that also purify, check the manual for when to clean or replace the filters.',
      },
    ],
  },
}
