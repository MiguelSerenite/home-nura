import type { Lang } from '@/lib/i18n'
import type { FaqItem } from '@/lib/seo'
import { BLACK_FRIDAY_YEAR as Y } from '../config'

export interface BlackFridayHubCopy {
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  dealTitle: string
  dealTips: readonly { title: string; text: string }[]
  categoriesTitle: string
  amazonTitle: string
  amazonText: string
  amazonCta: string
  faq: readonly FaqItem[]
}

export const HUB_COPY: Record<Lang, BlackFridayHubCopy> = {
  fr: {
    metaTitle: `Black Friday ${Y} (27 novembre) : les appareils à surveiller`,
    metaDescription: `Black Friday ${Y}, le 27 novembre : aspirateur laveur, air fryer, radiateur électrique, Cookeo, machine à café à grain… et comment repérer une vraie promo.`,
    h1: `Black Friday ${Y} : les appareils de la maison à surveiller`,
    intro: `Le Black Friday tombe le vendredi 27 novembre ${Y}, suivi du Cyber Monday le lundi 30 novembre ; certaines enseignes parlent de « Black Week » et commencent plus tôt. Amazon ouvre généralement ses offres environ une semaine avant : vérifiez les dates exactes sur sa page Black Friday. Plutôt qu'une liste de promotions qui change d'heure en heure, voici, catégorie par catégorie, les modèles déjà recommandés dans nos guides d'achat (aspirateurs laveurs et robots aspirateurs, air fryers, radiateurs électriques et déshumidificateurs pour l'hiver, Cookeo et multicuiseurs, machines à café à grain, aspirateurs balais), et une méthode simple pour juger une offre.`,
    dealTitle: 'Comment repérer une vraie promo du Black Friday',
    dealTips: [
      {
        title: 'Comparez au prix le plus bas des 30 derniers jours',
        text: "Dans l'Union européenne, une réduction annoncée doit se calculer sur le prix le plus bas pratiqué par le vendeur au cours des 30 jours précédents (en France, article L112-1-1 du Code de la consommation), et Amazon l'affiche avec l'offre. Si l'écart est faible, l'économie l'est aussi.",
      },
      {
        title: 'Choisissez le modèle avant la remise',
        text: "Une forte baisse sur un appareil qui ne correspond pas à votre logement ou à votre usage n'est pas une économie. Décidez d'abord quel modèle vous convient (nos guides servent à ça), puis regardez s'il est en offre.",
      },
      {
        title: 'Vérifiez la version exacte',
        text: "Des noms proches cachent des contenus différents : éditions « Complete », « Plus » ou « Ultra », Cookeo avec ou sans Wi-Fi, kits et accessoires. Assurez-vous que l'offre porte sur la version que vous voulez.",
      },
      {
        title: 'Regardez qui vend et qui expédie',
        text: "Vendu et expédié par Amazon ou par un vendeur tiers : les conditions de retour et de garantie peuvent changer, tout comme le délai de livraison si l'appareil doit arriver avant Noël.",
      },
    ],
    categoriesTitle: 'Les catégories à surveiller',
    amazonTitle: "La page Black Friday d'Amazon",
    amazonText: "Toutes les offres du moment, au fil de l'événement. Amazon ouvre généralement ses offres environ une semaine avant le Black Friday.",
    amazonCta: 'Voir les offres Black Friday sur Amazon',
    faq: [
      {
        question: `Quand a lieu le Black Friday ${Y} ?`,
        answer: `Le vendredi 27 novembre ${Y}, suivi du Cyber Monday le lundi 30 novembre. Certaines enseignes parlent de « Black Week » et démarrent plus tôt ; Amazon ouvre généralement ses offres environ une semaine avant et publie les dates exactes de son événement sur sa page Black Friday.`,
      },
      {
        question: 'Faut-il attendre le Black Friday pour acheter un aspirateur laveur ou un air fryer ?',
        answer: "Pas forcément. Ce sont des catégories très présentes pendant l'événement, mais une baisse n'a d'intérêt que sur le bon modèle. Si l'appareil dont vous avez besoin est déjà à un prix qui vous convient, inutile d'attendre.",
      },
      {
        question: 'Comment savoir si une réduction est réelle ?',
        answer: "Comparez le prix de l'offre au prix le plus bas des 30 derniers jours qu'Amazon affiche avec la réduction, et vérifiez qu'il s'agit bien de la même version du modèle. Un pourcentage élevé ne dit rien si le prix de référence était gonflé.",
      },
      {
        question: "Black Friday ou soldes d'hiver ?",
        answer: `Ce sont deux grandes périodes de promotions. Le Black Friday tombe avant Noël : pratique pour un cadeau ou pour un appareil dont vous avez besoin dès maintenant. En France, les soldes d'hiver ont lieu du mercredi 6 janvier au mardi 2 février ${Y + 1} ; les dates diffèrent en Moselle, en Meurthe-et-Moselle, dans la Meuse, dans les Vosges et dans plusieurs territoires d'outre-mer. Dans les deux cas, choisissez le modèle d'abord et comparez l'offre au prix le plus bas des 30 derniers jours.`,
      },
      {
        question: 'Peut-on retourner un achat du Black Friday ?',
        answer: "Pour un achat en ligne auprès d'un professionnel, vous disposez en principe de 14 jours à compter de la réception pour changer d'avis, promotion ou non, et les garanties légales s'appliquent comme au prix normal. Lisez les conditions de retour du vendeur, surtout s'il s'agit d'un vendeur tiers.",
      },
      {
        question: "Pourquoi n'affichez-vous pas les prix ?",
        answer: "Les prix changent plusieurs fois par jour pendant le Black Friday. Plutôt qu'un chiffre vite périmé, nous indiquons les modèles qui valent le coup d'œil et renvoyons vers Amazon, où le prix affiché est celui du moment.",
      },
      {
        question: 'Comment choisissez-vous ces modèles ?',
        answer: "Nous n'essayons pas les produits nous-mêmes. Les modèles viennent de nos guides d'achat, qui comparent les fiches techniques des fabricants, les avis d'acheteurs vérifiés et les essais publiés par la presse spécialisée. Pour chaque catégorie, nous expliquons ce qu'il faut vérifier pour choisir celui qui vous convient.",
      },
    ],
  },
  en: {
    metaTitle: `Black Friday ${Y} UK: Appliances & Home Tech to Watch`,
    metaDescription: `Black Friday ${Y} is on 27 November. Dehumidifiers, heaters, vacuums, air fryers: the models worth watching in 8 categories and how to spot a genuine deal.`,
    h1: `Black Friday ${Y}: the appliances and home tech worth watching`,
    intro: `Black Friday falls on Friday 27 November ${Y}, with Cyber Monday on 30 November. Amazon's Black Friday Week usually starts about a week earlier, so check the exact dates on its Black Friday page. Rather than a list of offers that changes by the hour, here are the models our buying guides already recommend in eight categories, starting with what the season calls for: dehumidifiers for damp, condensation and drying washing indoors, then electric heaters. Robot and cordless vacuums, air fryers, smart thermostats, bean-to-cup coffee machines and no-subscription video doorbells follow, along with a simple way to judge a deal.`,
    dealTitle: 'How to spot a genuine deal',
    dealTips: [
      {
        title: 'Look past the percentage',
        text: 'Check the reference price the discount is based on (the info icon next to the deal explains it), then see what the model has sold for over recent months: price-comparison sites such as PriceSpy and PriceRunner show its price history.',
      },
      {
        title: 'Choose the model before the discount',
        text: "A big cut on an appliance that doesn't suit your home or habits is not a saving. Decide which model fits first (that's what our guides are for), then see whether it is on offer.",
      },
      {
        title: 'Check the exact version',
        text: "Similar names hide different bundles: 'Complete', 'Plus' or 'Ultra' editions, kits and accessories. For anything with a plug, make sure it's the UK version with a three-pin plug; some brands, such as Ninja, add 'UK' to the model number.",
      },
      {
        title: 'Check who sells it',
        text: 'Sold and dispatched by Amazon, or by a third-party seller: returns and warranty terms can differ.',
      },
    ],
    categoriesTitle: 'Categories to watch',
    amazonTitle: "Amazon's Black Friday page",
    amazonText: "Every current offer as the event unfolds, through to Cyber Monday. Amazon's Black Friday Week usually starts about a week before Black Friday.",
    amazonCta: 'See Black Friday deals on Amazon',
    faq: [
      {
        question: `When is Black Friday ${Y}?`,
        answer: `Friday 27 November ${Y}, followed by Cyber Monday on Monday 30 November. Amazon's Black Friday Week usually starts about a week earlier; the exact dates of its event appear on its Black Friday page.`,
      },
      {
        question: 'Should I wait for Black Friday to buy a dehumidifier or a heater?',
        answer: "Not necessarily. A discount only matters on the right model. If damp or a cold room is a problem now and the model that suits you is already at a price you're happy with, there's no reason to wait. For things you can buy at any time of year, such as a robot vacuum or an air fryer, choose the model first, then see whether it's on offer.",
      },
      {
        question: 'How can I tell whether a discount is genuine?',
        answer: 'Check the reference price Amazon uses for the discount (the info icon next to the deal explains it), look up the price history on a price-comparison site, and make sure the offer is on the exact version of the model you want. A big percentage means little if the reference price was inflated.',
      },
      {
        question: 'How do I work out what a heater or dehumidifier costs to run?',
        answer: `Multiply its power in kilowatts by the hours it runs and by your electricity unit rate: a 2 kW heater on full for an hour uses 2 kWh, and its thermostat cuts that once the room is warm. Your bill shows your unit rate. In England, Scotland and Wales, Ofgem announces the next energy price cap on 25 November ${Y}.`,
      },
      {
        question: 'What comes after Black Friday?',
        answer: 'Cyber Monday on 30 November, then Boxing Day on 26 December and the January sales. Our guides choose models on their merits, not on the sale of the moment: only the prices change.',
      },
      {
        question: "Why don't you show prices?",
        answer: 'Prices change several times a day during Black Friday. Rather than a figure that is quickly out of date, we name the models our buying guides recommend, based on manufacturer specifications, independent reviews and verified buyer feedback, and link to Amazon, where the price shown is the current one.',
      },
    ],
  },
  de: {
    metaTitle: `Black Friday ${Y}: Airfryer, Saugroboter & Co. im Blick`,
    metaDescription: `Black Friday ${Y} am 27. November: acht Kategorien vom Airfryer bis zur Powerstation, Modelle aus unseren Ratgebern und wie Sie echte Angebote erkennen.`,
    h1: `Black Friday ${Y}: Diese Geräte fürs Zuhause lohnen einen Blick`,
    intro: `Der Black Friday fällt auf Freitag, den 27. November ${Y}, der Cyber Monday auf Montag, den 30. November. Viele besorgen in diesen Tagen schon Weihnachtsgeschenke, andere rüsten sich für den Winter. Statt einer Angebotsliste, die sich stündlich ändert, finden Sie hier die Modelle, die unsere Kaufratgeber bereits empfehlen, in acht Kategorien: vom Airfryer über Saugroboter und Kaffeevollautomaten bis zu Luftentfeuchtern, Smart Locks und Powerstations. Dazu eine einfache Methode, um Angebote zu beurteilen.`,
    dealTitle: 'So erkennen Sie ein echtes Angebot',
    dealTips: [
      {
        title: 'Referenzpreis statt Prozentzahl',
        text: 'In der EU muss sich eine angekündigte Preisermäßigung auf den niedrigsten Preis der letzten 30 Tage beziehen (in Deutschland geregelt in der Preisangabenverordnung), und Amazon zeigt ihn beim Angebot an. Ist der Abstand klein, ist es auch die Ersparnis.',
      },
      {
        title: 'Die UVP ist kein Verkaufspreis',
        text: 'Ein Nachlass gegenüber der unverbindlichen Preisempfehlung des Herstellers sagt wenig: Viele Geräte werden ohnehin darunter verkauft. Maßgeblich ist, was das Modell zuletzt tatsächlich gekostet hat.',
      },
      {
        title: 'Erst das Modell, dann der Rabatt',
        text: 'Ein hoher Nachlass auf ein Gerät, das nicht zu Ihrer Wohnung oder Nutzung passt, ist keine Ersparnis. Entscheiden Sie zuerst, welches Modell passt (dafür sind unsere Ratgeber da), und prüfen Sie dann, ob es im Angebot ist.',
      },
      {
        title: 'Genaue Version prüfen',
        text: 'Hinter ähnlichen Namen stecken unterschiedliche Pakete: Editionen wie „Complete“, „Plus“ oder „Ultra“, Sets und Zubehör. Achten Sie darauf, dass das Angebot genau die gewünschte Version betrifft.',
      },
      {
        title: 'Verkäufer prüfen',
        text: 'Verkauf und Versand durch Amazon oder durch einen Drittanbieter: Rückgabe- und Garantiebedingungen können sich unterscheiden.',
      },
    ],
    categoriesTitle: 'Kategorien im Blick',
    amazonTitle: 'Die Black-Friday-Seite von Amazon',
    amazonText: 'Alle aktuellen Angebote im Verlauf der Aktion. Amazon startet seine Angebote meist etwa eine Woche vor dem Black Friday.',
    amazonCta: 'Black-Friday-Angebote bei Amazon ansehen',
    faq: [
      {
        question: `Wann ist Black Friday ${Y}?`,
        answer: `Am Freitag, 27. November ${Y}, gefolgt vom Cyber Monday am Montag, 30. November. Amazon startet seine Angebote meist etwa eine Woche vorher; die genauen Termine der Aktion stehen auf der Black-Friday-Seite von Amazon.`,
      },
      {
        question: 'Sollte man mit dem Kauf eines Airfryers oder Saugroboters auf den Black Friday warten?',
        answer: 'Nicht unbedingt. Beide Kategorien sind während der Aktion stark vertreten, aber ein Rabatt zählt nur beim richtigen Modell. Ist das passende Gerät schon zu einem Preis erhältlich, der Ihnen zusagt, müssen Sie nicht warten.',
      },
      {
        question: 'Woran erkenne ich, ob ein Rabatt echt ist?',
        answer: 'Vergleichen Sie den Angebotspreis mit dem niedrigsten Preis der letzten 30 Tage, den Amazon zur Ermäßigung anzeigt, und prüfen Sie, ob es genau die gewünschte Modellversion ist. Eine hohe Prozentzahl sagt wenig, wenn der Bezugspreis künstlich hoch war oder nur die UVP ist.',
      },
      {
        question: 'Lohnt sich der Black Friday für Weihnachtsgeschenke?',
        answer: 'Er liegt rund vier Wochen vor Weihnachten, deshalb kaufen viele dann schon ihre Geschenke. Wählen Sie das Modell nach dem Haushalt, der es bekommt, und prüfen Sie vor dem Kauf die Rückgabebedingungen des Verkäufers, falls das Geschenk nicht passt.',
      },
      {
        question: 'Warum zeigen Sie keine Preise?',
        answer: 'Die Preise ändern sich am Black Friday mehrmals täglich. Statt einer schnell veralteten Zahl nennen wir die Modelle, die einen Blick lohnen, und verlinken zu Amazon, wo der aktuelle Preis steht.',
      },
    ],
  },
  es: {
    metaTitle: `Black Friday ${Y}: robot aspirador, freidora y calefactor`,
    metaDescription: `El Black Friday ${Y} es el 27 de noviembre. Calefacción, robots aspiradores, freidoras y cafeteras: qué modelos seguir y cómo saber si una oferta es real.`,
    h1: `Black Friday ${Y}: los aparatos para casa que merece la pena seguir`,
    intro: `El Black Friday cae el viernes 27 de noviembre de ${Y}, y el Cyber Monday, el lunes 30. Amazon suele abrir sus ofertas alrededor de una semana antes: consulta las fechas exactas en su página de Black Friday. En lugar de una lista de ofertas que cambia cada hora, aquí tienes los modelos que nuestras guías de compra ya recomiendan en ocho categorías: calefacción eléctrica, robots aspiradores y fregasuelos, freidoras de aire, cafeteras superautomáticas, aspiradoras sin cable, deshumidificadores y humidificadores para el invierno, y cámaras de vigilancia exterior sin cuotas. También encontrarás un método sencillo para saber si una oferta es real y qué revisar si aprovechas para adelantar los regalos de Reyes.`,
    dealTitle: 'Cómo saber si una oferta es real',
    dealTips: [
      {
        title: 'Mira el precio de referencia, no el porcentaje',
        text: 'En España, como en el resto de la UE, una rebaja anunciada debe calcularse sobre el precio más bajo de los 30 días anteriores, y Amazon lo muestra junto a la oferta. Si la diferencia es pequeña, el ahorro también.',
      },
      {
        title: 'Anota el precio antes del Black Friday',
        text: 'Según una encuesta de la OCU publicada en noviembre de 2025, casi 7 de cada 10 consumidores creen que algunas tiendas suben los precios antes del Black Friday. Si ya sabes qué modelo te interesa, anota su precio estos días y compáralo con el de la oferta.',
      },
      {
        title: 'Elige el modelo antes que el descuento',
        text: 'Una gran rebaja en un aparato que no encaja con tu casa o tu uso no es un ahorro. Decide primero qué modelo te conviene (para eso están nuestras guías) y luego comprueba si está en oferta.',
      },
      {
        title: 'Comprueba la versión exacta',
        text: 'Nombres parecidos esconden packs distintos: ediciones «Complete», «Plus» o «Ultra», kits y accesorios. Asegúrate de que la oferta es de la versión que quieres.',
      },
      {
        title: 'Mira quién lo vende',
        text: 'Vendido y enviado por Amazon o por un vendedor externo: las condiciones de devolución y garantía pueden cambiar.',
      },
    ],
    categoriesTitle: 'Categorías a seguir',
    amazonTitle: 'La página de Black Friday de Amazon',
    amazonText: 'Todas las ofertas del momento a lo largo del evento. Amazon suele abrir sus ofertas alrededor de una semana antes del Black Friday.',
    amazonCta: 'Ver las ofertas de Black Friday en Amazon',
    faq: [
      {
        question: `¿Cuándo es el Black Friday ${Y}?`,
        answer: `El viernes 27 de noviembre de ${Y}, seguido del Cyber Monday el lunes 30 de noviembre. Amazon suele abrir sus ofertas alrededor de una semana antes; las fechas exactas de su evento aparecen en su página de Black Friday.`,
      },
      {
        question: '¿Conviene esperar al Black Friday para comprar un robot aspirador o una freidora de aire?',
        answer: 'No necesariamente. Son categorías muy presentes durante el evento, pero un descuento solo importa en el modelo adecuado. Si el aparato que necesitas ya tiene un precio que te convence, no hace falta esperar.',
      },
      {
        question: '¿Merece la pena comprar los regalos de Reyes en el Black Friday?',
        answer: 'Puede servir para adelantarlos, siempre que el modelo sea el adecuado. Entre el Black Friday y el 6 de enero pasan casi seis semanas, más que el plazo legal de desistimiento de 14 días naturales desde la entrega: antes de pagar, revisa la política de devoluciones del vendedor, porque algunos amplían el plazo en Navidad, y guarda el justificante para la garantía.',
      },
      {
        question: '¿Cómo saber si un descuento es real?',
        answer: 'Compara el precio de la oferta con el precio más bajo de los últimos 30 días que Amazon muestra junto a la rebaja y comprueba que sea exactamente la versión del modelo que quieres. Un porcentaje alto dice poco si el precio de referencia estaba inflado.',
      },
      {
        question: '¿Por qué no mostráis precios?',
        answer: 'Durante el Black Friday los precios cambian varias veces al día. En lugar de una cifra que caduca enseguida, indicamos los modelos que merece la pena seguir y enlazamos a Amazon, donde el precio mostrado es el del momento.',
      },
    ],
  },
  it: {
    metaTitle: `Black Friday ${Y}: elettrodomestici da tenere d'occhio`,
    metaDescription: `Black Friday ${Y}, il 27 novembre: friggitrici ad aria, stufe, robot aspirapolvere e macchine da caffè da tenere d'occhio, e come valutare uno sconto.`,
    h1: `Black Friday ${Y}: elettrodomestici e dispositivi per la casa da tenere d'occhio`,
    intro: `Il Black Friday cade venerdì 27 novembre ${Y}, seguito dal Cyber Monday lunedì 30. Amazon di solito apre le offerte circa una settimana prima: le date esatte sono sulla sua pagina Black Friday. Qui trovi le categorie su cui concentrarsi a novembre: friggitrici ad aria, stufe e radiatori elettrici, robot aspirapolvere e lavapavimenti, macchine da caffè, scope elettriche senza fili, videocitofoni, videocampanelli e termostati. Per ognuna, i modelli che le nostre guide all’acquisto già consigliano e cosa verificare prima di comprare, più un metodo semplice per capire se uno sconto conviene davvero.`,
    dealTitle: 'Come riconoscere un vero sconto',
    dealTips: [
      {
        title: 'Guarda il prezzo più basso degli ultimi 30 giorni',
        text: 'Per il Codice del consumo, uno sconto annunciato va calcolato sul prezzo più basso praticato nei 30 giorni precedenti, e Amazon lo indica accanto all’offerta. Secondo un’indagine Altroconsumo del 2025, più della metà degli italiani intervistati pensa che alcuni negozi alzino i prezzi prima delle promozioni: è proprio questo riferimento a dirti se lo sconto è reale.',
      },
      {
        title: 'Scegli il modello prima dello sconto',
        text: 'Un forte ribasso su un apparecchio che non va bene per la tua casa o per il tuo uso non è un risparmio. Decidi prima cosa ti serve (per quante persone cucini, quanti metri quadri devi scaldare, che pavimenti hai) e quale modello fa per te: le nostre guide servono a questo. Poi verifica se è in offerta.',
      },
      {
        title: 'Controlla la versione esatta',
        text: 'Nomi simili nascondono confezioni diverse: edizioni «Complete», «Plus» o «Ultra», kit e accessori. Confronta il codice esatto del modello e il contenuto della confezione, non solo il nome.',
      },
      {
        title: 'Controlla chi vende',
        text: 'Venduto e spedito da Amazon o da un venditore terzo: le condizioni di reso possono cambiare. Se acquisti online da un venditore professionale hai comunque 14 giorni per recedere e la garanzia legale di 2 anni.',
      },
    ],
    categoriesTitle: 'Le categorie da tenere d’occhio a novembre',
    amazonTitle: 'La pagina Black Friday di Amazon',
    amazonText: 'Tutte le offerte del momento, per tutta la durata dell’evento, fino al Cyber Monday. Amazon di solito apre le sue offerte circa una settimana prima del Black Friday.',
    amazonCta: 'Vedi le offerte Black Friday su Amazon',
    faq: [
      {
        question: `Quando è il Black Friday ${Y}?`,
        answer: `Venerdì 27 novembre ${Y}, seguito dal Cyber Monday lunedì 30 novembre. Amazon di solito apre le sue offerte circa una settimana prima; le date esatte del suo evento sono indicate sulla sua pagina Black Friday.`,
      },
      {
        question: 'Conviene aspettare il Black Friday per comprare una friggitrice ad aria o una stufa elettrica?',
        answer: 'Non necessariamente. Sono categorie molto presenti durante l’evento, ma uno sconto conta solo sul modello giusto. Per il riscaldamento conta anche quando ti serve: se hai bisogno di una stufa adesso e il modello adatto ha già un prezzo che ti convince, non serve aspettare.',
      },
      {
        question: 'Come capire se uno sconto è reale?',
        answer: 'Confronta il prezzo dell’offerta con il prezzo più basso degli ultimi 30 giorni che Amazon mostra accanto allo sconto e verifica che sia esattamente la versione del modello che vuoi. Una percentuale alta dice poco se il prezzo di riferimento era gonfiato.',
      },
      {
        question: 'Quanto consuma una stufa elettrica o una friggitrice ad aria?',
        answer: 'Basta moltiplicare la potenza in kilowatt per le ore di utilizzo: una stufa da 2000 W accesa al massimo per un’ora consuma 2 kWh, una friggitrice ad aria da 1500 W in 20 minuti al massimo 0,5 kWh. Poi moltiplica per il prezzo del kWh indicato in bolletta. A parità di potenza e di ore di accensione, le stufe elettriche consumano tutte la stessa energia: «basso consumo» vuol dire in pratica una potenza più bassa o un termostato che spegne l’apparecchio quando la stanza è calda.',
      },
      {
        question: 'Posso comprare i regali di Natale durante il Black Friday?',
        answer: 'Sì, ed è un’abitudine diffusa. Prima di ordinare controlla la data di consegna stimata e fino a quando puoi restituire l’articolo: nel periodo delle feste Amazon di solito allunga i termini di reso, e le date valide sono indicate nella sua pagina dedicata ai resi.',
      },
      {
        question: 'Perché non mostrate i prezzi?',
        answer: 'Durante il Black Friday i prezzi cambiano più volte al giorno. Invece di una cifra che invecchia subito, indichiamo i modelli da tenere d’occhio e rimandiamo ad Amazon, dove il prezzo mostrato è quello del momento. Non proviamo i prodotti di persona: le nostre scelte si basano su schede tecniche, recensioni indipendenti e opinioni degli acquirenti.',
      },
    ],
  },
  nl: {
    metaTitle: `Black Friday ${Y}: slimme apparaten om te volgen`,
    metaDescription: `Black Friday ${Y} valt op 27 november. Modellen om in de gaten te houden in acht categorieën van het slimme huis, en hoe je een echte deal herkent.`,
    h1: `Black Friday ${Y}: de slimme apparaten om in de gaten te houden`,
    intro: `Black Friday valt op vrijdag 27 november ${Y}. Amazon opent zijn aanbiedingen meestal ongeveer een week eerder; de exacte data staan op de Black Friday-pagina van Amazon. In plaats van een lijst met deals die elk uur verandert, vind je hier de modellen die onze koopgidsen al aanraden, per categorie, en een eenvoudige manier om een aanbieding te beoordelen.`,
    dealTitle: 'Zo herken je een echte deal',
    dealTips: [
      {
        title: 'Kijk naar de referentieprijs, niet naar het percentage',
        text: 'In de EU moet een aangekondigde korting uitgaan van de laagste prijs van de voorgaande 30 dagen, en Amazon toont die bij de aanbieding. Is het verschil klein, dan is de besparing dat ook.',
      },
      {
        title: 'Kies eerst het model, dan de korting',
        text: 'Een flinke korting op een apparaat dat niet bij je woning of gebruik past, is geen besparing. Bepaal eerst welk model bij je past (daar zijn onze gidsen voor) en kijk daarna of het in de aanbieding is.',
      },
      {
        title: 'Controleer de exacte versie',
        text: 'Vergelijkbare namen verbergen verschillende pakketten: edities als ‘Complete’, ‘Plus’ of ‘Ultra’, sets en accessoires. Zorg dat de deal over de versie gaat die je wilt.',
      },
      {
        title: 'Kijk wie het verkoopt',
        text: 'Verkocht en verzonden door Amazon of door een externe verkoper: de voorwaarden voor retour en garantie kunnen verschillen.',
      },
    ],
    categoriesTitle: 'Categorieën om te volgen',
    amazonTitle: 'De Black Friday-pagina van Amazon',
    amazonText: 'Alle actuele aanbiedingen, de hele actie door. Amazon opent zijn aanbiedingen meestal ongeveer een week vóór Black Friday.',
    amazonCta: 'Bekijk de Black Friday-deals op Amazon',
    faq: [
      {
        question: `Wanneer is Black Friday ${Y}?`,
        answer: `Op vrijdag 27 november ${Y}, gevolgd door Cyber Monday op maandag 30 november. Amazon opent zijn aanbiedingen meestal ongeveer een week eerder; de exacte data van de actie staan op de Black Friday-pagina van Amazon.`,
      },
      {
        question: 'Moet je op Black Friday wachten om een robotstofzuiger of airfryer te kopen?',
        answer: 'Niet per se. Beide categorieën zijn tijdens de actie sterk vertegenwoordigd, maar een korting telt alleen bij het juiste model. Heeft het apparaat dat je nodig hebt al een prijs die je bevalt, dan hoef je niet te wachten.',
      },
      {
        question: 'Hoe weet je of een korting echt is?',
        answer: 'Vergelijk de dealprijs met de laagste prijs van de afgelopen 30 dagen die Amazon bij de korting toont, en controleer of het precies de versie van het model is die je wilt. Een hoog percentage zegt weinig als de referentieprijs opgeblazen was.',
      },
      {
        question: 'Waarom tonen jullie geen prijzen?',
        answer: 'Tijdens Black Friday veranderen prijzen meerdere keren per dag. In plaats van een bedrag dat snel verouderd is, noemen we de modellen die het volgen waard zijn en linken we naar Amazon, waar de actuele prijs staat.',
      },
    ],
  },
  pl: {
    metaTitle: `Black Friday ${Y}: air fryer, ekspres do kawy, odkurzacze`,
    metaDescription: `Black Friday ${Y} (27 listopada): air fryer, ekspres do kawy, robot sprzątający, odkurzacz pionowy, sprzęt na zimę i jak rozpoznać prawdziwą promocję.`,
    h1: `Black Friday ${Y}: air fryer, ekspres do kawy, odkurzacze i sprzęt na zimę`,
    intro: `Black Friday wypada w piątek 27 listopada ${Y} r., a Cyber Monday w poniedziałek 30 listopada. W Polsce promocje od dawna nie ograniczają się do jednego dnia: wiele sklepów rusza z nimi już na początku listopada, a Amazon zwykle uruchamia swoje oferty mniej więcej tydzień przed Black Friday – dokładne daty sprawdzisz na jego stronie Black Friday. Zamiast listy promocji, która zmienia się co godzinę, zebraliśmy tu polecane w naszych poradnikach zakupowych air fryery, ekspresy do kawy, roboty sprzątające i odkurzacze pionowe, a także sprzęt na sezon grzewczy: oczyszczacze i nawilżacze powietrza, grzejniki elektryczne oraz czujniki czadu i dymu. Do tego prosty sposób, by ocenić, czy obniżka jest prawdziwa.`,
    dealTitle: 'Jak rozpoznać prawdziwą promocję na Black Friday',
    dealTips: [
      {
        title: 'Porównaj z najniższą ceną z 30 dni',
        text: 'Od 2023 r. sklep, który ogłasza obniżkę, musi podać najniższą cenę towaru z 30 dni przed jej wprowadzeniem (to wymóg tzw. dyrektywy Omnibus). To ona, a nie przekreślona „cena katalogowa”, pokazuje, ile naprawdę oszczędzasz. Jeśli różnica jest niewielka, oszczędność też.',
      },
      {
        title: 'Zanotuj cenę z wyprzedzeniem',
        text: 'Sprawdź i zapisz cenę wybranego modelu, zanim ruszą promocje. Łatwiej wtedy ocenisz, czy listopadowa obniżka jest realna, czy cena tylko wraca do poziomu sprzed kilku tygodni.',
      },
      {
        title: 'Najpierw model, potem rabat',
        text: 'Duża obniżka na urządzeniu, które nie pasuje do twojego mieszkania ani sposobu użytkowania, nie jest oszczędnością. Najpierw zdecyduj, jaki model ci odpowiada (do tego służą nasze poradniki), a potem sprawdź, czy jest w promocji.',
      },
      {
        title: 'Sprawdź dokładną wersję',
        text: 'Pod podobnymi nazwami kryją się różne wersje: edycje „Complete”, „Plus” czy „Ultra”, zestawy z akcesoriami, inna pojemność. Upewnij się, że oferta dotyczy wersji, którą chcesz kupić.',
      },
      {
        title: 'Zobacz, kto sprzedaje',
        text: 'Produkt może sprzedawać i wysyłać Amazon albo sprzedawca zewnętrzny, a warunki zwrotu i gwarancji mogą się wtedy różnić. Sprzęt elektryczny kupuj od sprzedawcy z UE, z którym łatwo się skontaktować. Znak CE to deklaracja producenta, że produkt spełnia wymagania UE, a nie dowód jakości.',
      },
    ],
    categoriesTitle: 'Kategorie warte uwagi na Black Friday',
    amazonTitle: 'Black Friday na Amazonie',
    amazonText: 'Wszystkie bieżące oferty przez cały czas trwania akcji. Amazon zwykle uruchamia swoje promocje mniej więcej tydzień przed Black Friday.',
    amazonCta: 'Zobacz oferty Black Friday na Amazonie',
    faq: [
      {
        question: `Kiedy jest Black Friday ${Y}?`,
        answer: `W piątek 27 listopada ${Y} r., a Cyber Monday w poniedziałek 30 listopada. Wiele sklepów zaczyna promocje wcześniej i prowadzi je przez kilka tygodni listopada. Amazon zwykle uruchamia swoje oferty mniej więcej tydzień przed Black Friday, a dokładne daty publikuje na swojej stronie Black Friday.`,
      },
      {
        question: 'Czy warto czekać na Black Friday z zakupem air fryera lub ekspresu do kawy?',
        answer: 'Niekoniecznie. To kategorie bardzo widoczne w listopadzie, ale obniżka liczy się tylko wtedy, gdy dotyczy właściwego modelu. Jeśli urządzenie, którego potrzebujesz, już teraz kosztuje tyle, ile chcesz zapłacić, nie ma powodu czekać.',
      },
      {
        question: 'Jak sprawdzić, czy obniżka jest prawdziwa?',
        answer: 'Porównaj cenę promocyjną z najniższą ceną z 30 dni przed obniżką, którą sklep musi podać, i upewnij się, że chodzi o tę samą wersję modelu. Duży rabat procentowy nic nie mówi, jeśli cena wyjściowa była zawyżona.',
      },
      {
        question: 'Black Friday czy zakupy przed Mikołajkami i świętami?',
        answer: 'Black Friday wypada nieco ponad tydzień przed Mikołajkami (6 grudnia) i mniej więcej cztery tygodnie przed Wigilią, dlatego wiele osób kupuje wtedy prezenty. Promocje zdarzają się jednak także w grudniu: zamiast czekać na konkretny dzień, wybierz model i porównaj jego cenę z najniższą ceną z 30 dni, niezależnie od tego, kiedy kupujesz.',
      },
      {
        question: 'Czy mogę zwrócić sprzęt kupiony na Black Friday?',
        answer: 'Tak. Przy zakupie przez internet od firmy z UE masz co do zasady 14 dni na odstąpienie od umowy bez podawania przyczyny, także w przypadku towarów przecenionych. Sprawdź warunki zwrotu i gwarancji, zwłaszcza gdy produkt sprzedaje sprzedawca zewnętrzny.',
      },
      {
        question: 'Dlaczego nie podajecie cen?',
        answer: 'Podczas Black Friday ceny zmieniają się kilka razy dziennie. Zamiast liczby, która szybko się dezaktualizuje, wskazujemy modele warte uwagi i odsyłamy na Amazon, gdzie wyświetlana cena jest aktualna.',
      },
    ],
  },
  sv: {
    metaTitle: `Black Week ${Y}: robotdammsugare, airfryer och mer`,
    metaDescription: `Black Week och Black Friday ${Y} (27 november): robotdammsugare, airfryer, kaffemaskin, laddbox och vinterns apparater – så ser du om rabatten är äkta.`,
    h1: `Black Week ${Y}: apparater för hemmet att hålla koll på`,
    intro: `Black Week är kampanjveckan som leder fram till Black Friday, fredagen den 27 november ${Y}, och många kampanjer pågår ända till Cyber Monday den 30 november. Amazon brukar dra i gång sina erbjudanden ungefär en vecka innan, så kontrollera de exakta datumen på Amazons Black Friday-sida. I stället för en lista med kampanjer som ändras från timme till timme hittar du här modellerna som våra köpguider redan rekommenderar – robotdammsugare, airfryrar, sladdlösa dammsugare, kaffemaskiner och laddboxar, och inför vintern elelement, luftfuktare och avfuktare – och ett enkelt sätt att bedöma ett erbjudande.`,
    dealTitle: 'Så ser du om ett Black Week-erbjudande är äkta',
    dealTips: [
      {
        title: 'Jämför med det lägsta priset de senaste 30 dagarna',
        text: 'Enligt prisinformationslagen ska den som annonserar en prissänkning ange det lägsta pris som gällt under de senaste 30 dagarna, och Konsumentverket bevakar Black Week. Är skillnaden mot det priset liten är besparingen det också.',
      },
      {
        title: 'Räkna med att en del priser höjs före kampanjen',
        text: 'En genomgång från Prisgrisen i oktober 2026 visade att ungefär vart tionde nätpris låg högre än i september. Följ priset på den modell du vill ha några veckor i förväg, så ser du vad nedsättningen faktiskt är värd.',
      },
      {
        title: 'Välj modellen före rabatten',
        text: 'En stor prissänkning på en apparat som inte passar din bostad eller dina behov är ingen besparing. Bestäm först vilken modell som är rätt för dig (det är vad våra guider är till för) och se sedan om den är nedsatt.',
      },
      {
        title: 'Kontrollera den exakta versionen',
        text: 'Snarlika namn kan dölja olika innehåll: ”Complete”-, ”Plus”- eller ”Ultra”-versioner, paket och tillbehör, en laddbox med fast kabel eller med uttag. Se till att erbjudandet gäller den version du vill ha.',
      },
      {
        title: 'Kolla säljaren och CE-märkningen',
        text: 'Säljs och skickas varan av Amazon eller av en tredjepartssäljare? Villkoren för retur och garanti kan skilja sig åt. CE-märkningen är tillverkarens egen försäkran om att produkten uppfyller EU:s krav, inte ett kvalitetsbevis, så köp helst elapparater av en säljare inom EU som du kan nå om något är fel.',
      },
    ],
    categoriesTitle: 'Kategorierna att hålla koll på under Black Week',
    amazonTitle: 'Amazons Black Friday-sida',
    amazonText: 'Alla aktuella erbjudanden under hela kampanjen. Amazon brukar dra i gång sina erbjudanden ungefär en vecka före Black Friday.',
    amazonCta: 'Se Black Friday-erbjudandena på Amazon',
    faq: [
      {
        question: `När är Black Week ${Y}?`,
        answer: `Black Week är kampanjveckan fram till Black Friday, fredagen den 27 november ${Y}. En del butiker drar i gång ännu tidigare, och många kampanjer pågår ända till Cyber Monday måndagen den 30 november. Amazon brukar starta sina erbjudanden ungefär en vecka före Black Friday och publicerar de exakta datumen på sin Black Friday-sida.`,
      },
      {
        question: 'Vad är skillnaden mellan Black Week och Black Friday?',
        answer: 'Black Friday är en enda dag, fredagen efter den amerikanska högtiden Thanksgiving. I Sverige har kampanjen vuxit till en hel vecka, Black Week, och hos många butiker ännu längre. Det ger dig tid att jämföra modeller och priser i lugn och ro.',
      },
      {
        question: 'Ska jag vänta till Black Week med att köpa en robotdammsugare eller en airfryer?',
        answer: 'Inte nödvändigtvis. Båda kategorierna syns mycket under kampanjen, men en prissänkning är bara intressant på rätt modell. Kostar apparaten du behöver redan vad du är beredd att betala finns det ingen anledning att vänta.',
      },
      {
        question: 'Black Week eller mellandagsrean?',
        answer: 'Båda är stora reaperioder. Black Week ligger före jul och passar om du vill ha apparaten, eller julklappen, hemma i god tid. Mellandagsrean brukar börja på annandag jul. Bestäm vilken modell du vill ha och jämför erbjudandet med det lägsta priset de senaste 30 dagarna, oavsett när du köper.',
      },
      {
        question: 'Kan jag ångra ett köp från Black Week?',
        answer: 'Köper du på nätet av ett företag inom EU har du i regel 14 dagars ångerrätt enligt EU:s konsumentregler, i Sverige distansavtalslagen, även på nedsatta varor. Läs säljarens villkor för retur och garanti, särskilt när varan säljs av en tredjepartssäljare.',
      },
      {
        question: 'Varför visar ni inga priser?',
        answer: 'Under Black Week ändras priserna flera gånger om dagen. I stället för en siffra som snabbt blir inaktuell nämner vi de modeller som är värda en titt och länkar till Amazon, där priset som visas är det aktuella.',
      },
    ],
  },
  us: {
    metaTitle: `Black Friday & Cyber Monday ${Y}: Home Deals to Watch`,
    metaDescription: `Black Friday is Nov. 27, ${Y}, and Cyber Monday is Nov. 30. Robot vacuums, espresso machines, air fryers, heaters: what to watch and how to judge a deal.`,
    h1: `Black Friday and Cyber Monday ${Y}: The Home Tech Worth Watching`,
    intro: `Black Friday falls on Friday, November 27, ${Y}, the day after Thanksgiving, and the sales run through the weekend to Cyber Monday, November 30. Amazon usually opens its deals about a week earlier, so check the exact dates on its Black Friday page. Instead of a list of offers that changes by the hour, here are the models our buying guides already recommend in eight categories, from robot vacuums and espresso machines to electric heaters and humidifiers for the winter ahead. You'll also find a simple way to judge a deal.`,
    dealTitle: 'How to spot a real deal',
    dealTips: [
      {
        title: 'Compare it with the usual price',
        text: 'A discount is only as good as the reference price behind it. Check what that price is based on (the info icon next to the deal explains it) and how the deal price compares with what the model usually sells for.',
      },
      {
        title: 'Pick the model before the discount',
        text: "A deep discount on an appliance that doesn't suit your home or your habits saves you nothing. Decide which model fits first (that's what our guides are for), then see whether it's on sale.",
      },
      {
        title: "Check the exact version and what's in the box",
        text: 'Similar names can hide different bundles: a robot vacuum with or without its self-emptying dock, a doorbell with or without a chime, a lock with or without a keypad. Make sure the deal is on the version you actually want.',
      },
      {
        title: "Check who's selling it",
        text: "Sold and shipped by Amazon, or by a third-party seller: return and warranty terms can differ. For anything that plugs in, make sure it's the US 120-volt version, ideally with a UL or ETL safety listing.",
      },
    ],
    categoriesTitle: 'Categories to watch',
    amazonTitle: "Amazon's Black Friday page",
    amazonText: 'Every current offer, updated as the event unfolds from Black Friday through Cyber Monday. Amazon usually opens its deals about a week before Black Friday.',
    amazonCta: "Browse Amazon's Black Friday page",
    faq: [
      {
        question: `When is Black Friday ${Y}?`,
        answer: `Friday, November 27, ${Y}, the day after Thanksgiving (Thursday, November 26). Cyber Monday follows on Monday, November 30. Amazon usually opens its deals about a week earlier; the exact dates of its event are posted on its Black Friday page.`,
      },
      {
        question: 'Black Friday or Cyber Monday: which is better for home appliances?',
        answer: "There's no reliable rule. Many offers start before Black Friday and run through the weekend to Cyber Monday, while others change from one day to the next. If the model you want is at a price you're happy with on either day, there's little to gain by holding out.",
      },
      {
        question: "What's worth buying on Black Friday for the home?",
        answer: "Last year, Google searches for robot vacuums and espresso machines jumped the most during Black Friday week, followed by video doorbells, smart locks, air fryers and air purifiers. Electric heaters and humidifiers are worth a look if you need one this winter, since you'll use it right away.",
      },
      {
        question: 'Should I wait for Black Friday to buy a robot vacuum or a space heater?',
        answer: "Not necessarily. Robot vacuums are one of the big Black Friday categories, and you need a space heater as soon as it turns cold, but a discount only matters on the right model. If the one you need is already at a price you're happy with, there's no reason to wait. For a space heater, also check cpsc.gov for recalls before you buy.",
      },
      {
        question: 'How can I tell if a discount is real?',
        answer: 'Check the reference price Amazon bases the discount on (the info icon next to the deal explains it), and make sure the offer is on the exact version of the model you want. A big percentage off means little if the reference price was inflated.',
      },
      {
        question: "Why don't you show prices?",
        answer: "Prices change several times a day over Black Friday weekend, so any figure we printed would soon be out of date. Instead, we name the models our buying guides recommend, based on manufacturers' published specifications and independent reviews (we don't run a lab of our own), and link to Amazon, where you see the current price.",
      },
    ],
  },
  ca: {
    metaTitle: `Black Friday ${Y} in Canada: Smart Home Picks to Watch`,
    metaDescription: `Black Friday ${Y} is Friday, November 27. The models worth watching for Canadian homes, from air fryers to humidifiers, and how to judge a deal.`,
    h1: `Black Friday ${Y} in Canada: the smart home devices worth watching`,
    intro: `Black Friday falls on Friday, November 27, ${Y}, followed by Cyber Monday on November 30. Amazon usually opens its deals about a week earlier, so check the exact dates on its Black Friday page. Instead of a list of offers that changes by the hour, here are the models our buying guides already recommend for Canadian homes, category by category: air fryers and espresso machines, but also humidifiers, space heaters and thermostats for the cold months. You'll also find a simple way to judge a deal.`,
    dealTitle: 'How to spot a real deal',
    dealTips: [
      {
        title: 'Look past the percentage off',
        text: 'Check which reference price the discount is calculated from (the info icon next to the deal explains it) and compare the deal price with what the model usually sells for.',
      },
      {
        title: 'Choose the model before the discount',
        text: "A big markdown on an appliance that doesn't suit your home or your habits doesn't save you anything. Decide which model fits first (that's what our guides are for), then see whether it's on sale.",
      },
      {
        title: 'Check the exact version',
        text: 'Similar names can hide different bundles: “Complete,” “Plus” or “Ultra” editions, kits and accessories. Make sure the deal is on the version you actually want.',
      },
      {
        title: "Check who's selling it",
        text: 'Sold and shipped by Amazon, or by a third-party seller? Return and warranty terms can differ.',
      },
    ],
    categoriesTitle: 'Categories to watch',
    amazonTitle: "Amazon's Black Friday page",
    amazonText: 'Every current offer, updated as the event unfolds. Amazon usually opens its deals about a week before Black Friday.',
    amazonCta: 'See Black Friday deals on Amazon',
    faq: [
      {
        question: `When is Black Friday ${Y}?`,
        answer: `Friday, November 27, ${Y}, followed by Cyber Monday on Monday, November 30. Amazon usually opens its deals about a week earlier; the exact dates of its event are posted on its Black Friday page.`,
      },
      {
        question: 'Should I wait for Black Friday to buy a robot vacuum or an air fryer?',
        answer: "Not necessarily. Both are front and centre during the event, but a discount only matters on the right model. If the appliance you need is already at a price you're comfortable with, there's no reason to wait.",
      },
      {
        question: 'Black Friday or Boxing Day: when should I buy?',
        answer: "Neither is cheaper for every model. If the model you need is at a price you're comfortable with on Black Friday, there's no reason to wait for December 26. For a gift, buying in November leaves time for delivery, and for an exchange if it isn't the right fit.",
      },
      {
        question: 'How can I tell whether a discount is real?',
        answer: 'Check the reference price Amazon bases the discount on (the info icon next to the deal explains it), and make sure the offer is on the exact version of the model you want. A big percentage off means little if the reference price was inflated.',
      },
      {
        question: "Why don't you show prices?",
        answer: 'Prices change several times a day during Black Friday. Rather than a figure that goes out of date quickly, we name the models worth watching and link to Amazon, where the price you see is the current one.',
      },
    ],
  },
}

/** Prime free-trial block: French pages only (see primeTrialUrl in ../config). */
export const PRIME_COPY_FR = {
  title: "Amazon Prime : l'essai gratuit",
  text: "Les membres Prime profitent de la livraison rapide gratuite sur les articles éligibles, et certaines offres Amazon leur sont réservées. Si vous n'êtes pas encore membre, Amazon propose un essai gratuit : vérifiez sa durée et ses conditions avant de vous inscrire, et résiliez-le s'il ne vous sert pas.",
  cta: 'Essayer Amazon Prime gratuitement',
} as const
