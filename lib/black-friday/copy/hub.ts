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
    metaTitle: `Black Friday ${Y} : notre sélection maison connectée`,
    metaDescription: `Black Friday ${Y}, le 27 novembre : les modèles à surveiller dans 6 catégories maison connectée et comment repérer une vraie bonne affaire.`,
    h1: `Black Friday ${Y} : les appareils de la maison connectée à surveiller`,
    intro: `Le Black Friday tombe le vendredi 27 novembre ${Y}. Amazon ouvre généralement ses offres environ une semaine avant : vérifiez les dates exactes sur sa page Black Friday. Plutôt qu'une liste de promotions qui change d'heure en heure, voici les modèles déjà recommandés dans nos guides d'achat, catégorie par catégorie, et une méthode simple pour juger une offre.`,
    dealTitle: 'Comment reconnaître une vraie bonne affaire',
    dealTips: [
      {
        title: 'Regardez le prix de référence, pas le pourcentage',
        text: "En Europe, une réduction annoncée doit se calculer sur le prix le plus bas des 30 jours précédents, et Amazon l'affiche avec l'offre. Si l'écart est faible, l'économie l'est aussi.",
      },
      {
        title: 'Choisissez le modèle avant la remise',
        text: "Une forte baisse sur un appareil qui ne correspond pas à votre logement ou à votre usage n'est pas une économie. Décidez d'abord quel modèle vous convient (nos guides servent à ça), puis regardez s'il est en offre.",
      },
      {
        title: 'Vérifiez la version exacte',
        text: "Des noms proches cachent des contenus différents : éditions « Complete », « Plus » ou « Ultra », kits, accessoires. Assurez-vous que l'offre porte sur la version que vous voulez.",
      },
      {
        title: 'Regardez qui vend',
        text: 'Vendu et expédié par Amazon ou par un vendeur tiers : les conditions de retour et de garantie peuvent changer.',
      },
    ],
    categoriesTitle: 'Les catégories à surveiller',
    amazonTitle: "La page Black Friday d'Amazon",
    amazonText: "Toutes les offres du moment, au fil de l'événement. Amazon ouvre généralement ses offres environ une semaine avant le Black Friday.",
    amazonCta: 'Voir les offres Black Friday sur Amazon',
    faq: [
      {
        question: `Quand a lieu le Black Friday ${Y} ?`,
        answer: `Le vendredi 27 novembre ${Y}, suivi du Cyber Monday le lundi 30 novembre. Amazon ouvre généralement ses offres environ une semaine avant ; les dates exactes de son événement sont publiées sur sa page Black Friday.`,
      },
      {
        question: 'Faut-il attendre le Black Friday pour acheter un robot aspirateur ou un airfryer ?',
        answer: "Pas forcément. Ce sont des catégories très présentes pendant l'événement, mais une baisse n'a d'intérêt que sur le bon modèle. Si l'appareil dont vous avez besoin est déjà à un prix qui vous convient, inutile d'attendre.",
      },
      {
        question: 'Comment savoir si une réduction est réelle ?',
        answer: "Comparez le prix de l'offre au prix le plus bas des 30 derniers jours qu'Amazon affiche avec la réduction, et vérifiez qu'il s'agit bien de la même version du modèle. Un pourcentage élevé ne dit rien si le prix de référence était gonflé.",
      },
      {
        question: "Pourquoi n'affichez-vous pas les prix ?",
        answer: "Les prix changent plusieurs fois par jour pendant le Black Friday. Plutôt qu'un chiffre vite périmé, nous indiquons les modèles qui valent le coup d'œil et renvoyons vers Amazon, où le prix affiché est celui du moment.",
      },
    ],
  },
  en: {
    metaTitle: `Black Friday ${Y}: Smart Home Picks to Watch`,
    metaDescription: `Black Friday ${Y} falls on 27 November. The models worth watching in six smart home categories, and how to tell a genuine deal on Amazon.`,
    h1: `Black Friday ${Y}: the smart home devices worth watching`,
    intro: `Black Friday falls on Friday 27 November ${Y}. Amazon usually opens its deals about a week before, so check the exact dates on its Black Friday page. Rather than a list of offers that changes by the hour, here are the models our buying guides already recommend, category by category, and a simple way to judge a deal.`,
    dealTitle: 'How to spot a genuine deal',
    dealTips: [
      {
        title: 'Look past the percentage',
        text: 'Check the reference price the discount is based on (the info icon next to the deal explains it) and compare the deal price with what the model usually sells for.',
      },
      {
        title: 'Choose the model before the discount',
        text: "A big cut on an appliance that doesn't suit your home or habits is not a saving. Decide which model fits first (that's what our guides are for), then see whether it is on offer.",
      },
      {
        title: 'Check the exact version',
        text: "Similar names hide different bundles: 'Complete', 'Plus' or 'Ultra' editions, kits and accessories. Make sure the deal is on the version you want.",
      },
      {
        title: 'Check who sells it',
        text: 'Sold and shipped by Amazon or by a third-party seller: returns and warranty terms can differ.',
      },
    ],
    categoriesTitle: 'Categories to watch',
    amazonTitle: "Amazon's Black Friday page",
    amazonText: 'All current offers as the event unfolds. Amazon usually opens its deals about a week before Black Friday.',
    amazonCta: 'See Black Friday deals on Amazon',
    faq: [
      {
        question: `When is Black Friday ${Y}?`,
        answer: `Friday 27 November ${Y}, followed by Cyber Monday on Monday 30 November. Amazon usually opens its deals about a week before; the exact dates of its event appear on its Black Friday page.`,
      },
      {
        question: 'Should I wait for Black Friday to buy a robot vacuum or an air fryer?',
        answer: "Not necessarily. Both are prominent during the event, but a discount only matters on the right model. If the appliance you need is already at a price that suits you, there's no reason to wait.",
      },
      {
        question: 'How can I tell whether a discount is genuine?',
        answer: 'Check the reference price Amazon uses for the discount (the info icon next to the deal explains it) and make sure the offer is on the exact version of the model you want. A big percentage means little if the reference price was inflated.',
      },
      {
        question: "Why don't you show prices?",
        answer: 'Prices change several times a day during Black Friday. Rather than a figure that is quickly out of date, we name the models worth watching and link to Amazon, where the price shown is the current one.',
      },
    ],
  },
  de: {
    metaTitle: `Black Friday ${Y}: Smart-Home-Geräte im Blick`,
    metaDescription: `Black Friday ${Y} ist am 27. November. Die Modelle, die in sechs Smart-Home-Kategorien einen Blick lohnen, und wie Sie echte Angebote erkennen.`,
    h1: `Black Friday ${Y}: Diese Smart-Home-Geräte lohnen den Blick`,
    intro: `Der Black Friday fällt auf Freitag, den 27. November ${Y}. Amazon startet seine Angebote meist etwa eine Woche vorher; die genauen Termine stehen auf der Black-Friday-Seite von Amazon. Statt einer Angebotsliste, die sich stündlich ändert, finden Sie hier die Modelle, die unsere Kaufratgeber bereits empfehlen, nach Kategorien geordnet, und eine einfache Methode, um Angebote zu beurteilen.`,
    dealTitle: 'So erkennen Sie ein echtes Angebot',
    dealTips: [
      {
        title: 'Referenzpreis statt Prozentzahl',
        text: 'In der EU muss sich eine angekündigte Preisermäßigung auf den niedrigsten Preis der letzten 30 Tage beziehen, und Amazon zeigt ihn beim Angebot an. Ist der Abstand klein, ist es auch die Ersparnis.',
      },
      {
        title: 'Erst das Modell, dann der Rabatt',
        text: 'Ein hoher Nachlass auf ein Gerät, das nicht zu Ihrer Wohnung oder Nutzung passt, ist keine Ersparnis. Entscheiden Sie zuerst, welches Modell passt (dafür sind unsere Ratgeber da), und prüfen Sie dann, ob es im Angebot ist.',
      },
      {
        title: 'Genaue Version prüfen',
        text: 'Ähnliche Namen verbergen unterschiedliche Pakete: Editionen wie „Complete“, „Plus“ oder „Ultra“, Sets und Zubehör. Achten Sie darauf, dass das Angebot die gewünschte Version betrifft.',
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
        question: 'Sollte man mit dem Kauf eines Saugroboters oder einer Heißluftfritteuse auf den Black Friday warten?',
        answer: 'Nicht unbedingt. Beide Kategorien sind während der Aktion stark vertreten, aber ein Rabatt zählt nur beim richtigen Modell. Ist das passende Gerät schon zu einem Preis erhältlich, der Ihnen zusagt, müssen Sie nicht warten.',
      },
      {
        question: 'Woran erkenne ich, ob ein Rabatt echt ist?',
        answer: 'Vergleichen Sie den Angebotspreis mit dem niedrigsten Preis der letzten 30 Tage, den Amazon zur Ermäßigung anzeigt, und prüfen Sie, ob es genau die gewünschte Modellversion ist. Eine hohe Prozentzahl sagt wenig, wenn der Bezugspreis aufgebläht war.',
      },
      {
        question: 'Warum zeigen Sie keine Preise?',
        answer: 'Die Preise ändern sich am Black Friday mehrmals täglich. Statt einer schnell veralteten Zahl nennen wir die Modelle, die einen Blick lohnen, und verlinken zu Amazon, wo der aktuelle Preis steht.',
      },
    ],
  },
  es: {
    metaTitle: `Black Friday ${Y}: qué seguir en el hogar conectado`,
    metaDescription: `El Black Friday ${Y} es el 27 de noviembre. Los modelos a seguir en seis categorías del hogar conectado y cómo reconocer una oferta real en Amazon.`,
    h1: `Black Friday ${Y}: los aparatos del hogar conectado que merece la pena seguir`,
    intro: `El Black Friday cae el viernes 27 de noviembre de ${Y}. Amazon suele abrir sus ofertas alrededor de una semana antes; consulta las fechas exactas en su página de Black Friday. En lugar de una lista de ofertas que cambia cada hora, aquí tienes los modelos que nuestras guías de compra ya recomiendan, categoría por categoría, y un método sencillo para valorar una oferta.`,
    dealTitle: 'Cómo reconocer una oferta real',
    dealTips: [
      {
        title: 'Mira el precio de referencia, no el porcentaje',
        text: 'En la UE, una rebaja anunciada debe calcularse sobre el precio más bajo de los 30 días anteriores, y Amazon lo muestra junto a la oferta. Si la diferencia es pequeña, el ahorro también.',
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
    metaTitle: `Black Friday ${Y}: casa connessa, cosa tenere d'occhio`,
    metaDescription: `Il Black Friday ${Y} è il 27 novembre. I modelli da tenere d'occhio in sei categorie della casa connessa e come riconoscere una vera offerta su Amazon.`,
    h1: `Black Friday ${Y}: i dispositivi per la casa connessa da tenere d'occhio`,
    intro: `Il Black Friday cade venerdì 27 novembre ${Y}. Amazon di solito apre le sue offerte circa una settimana prima: controlla le date esatte sulla sua pagina dedicata al Black Friday. Invece di un elenco di offerte che cambia di ora in ora, ecco i modelli che le nostre guide all’acquisto già consigliano, categoria per categoria, e un metodo semplice per valutare un’offerta.`,
    dealTitle: 'Come riconoscere una vera offerta',
    dealTips: [
      {
        title: 'Guarda il prezzo di riferimento, non la percentuale',
        text: 'Nell’UE uno sconto annunciato va calcolato sul prezzo più basso dei 30 giorni precedenti, e Amazon lo indica accanto all’offerta. Se la differenza è piccola, lo è anche il risparmio.',
      },
      {
        title: 'Scegli il modello prima dello sconto',
        text: 'Un forte ribasso su un apparecchio che non si adatta alla tua casa o al tuo uso non è un risparmio. Decidi prima quale modello fa per te (le nostre guide servono a questo), poi verifica se è in offerta.',
      },
      {
        title: 'Controlla la versione esatta',
        text: 'Nomi simili nascondono confezioni diverse: edizioni «Complete», «Plus» o «Ultra», kit e accessori. Assicurati che l’offerta riguardi la versione che vuoi.',
      },
      {
        title: 'Controlla chi vende',
        text: 'Venduto e spedito da Amazon o da un venditore terzo: le condizioni di reso e garanzia possono cambiare.',
      },
    ],
    categoriesTitle: 'Le categorie da tenere d’occhio',
    amazonTitle: 'La pagina Black Friday di Amazon',
    amazonText: 'Tutte le offerte del momento, per tutta la durata dell’evento. Amazon di solito apre le sue offerte circa una settimana prima del Black Friday.',
    amazonCta: 'Vedi le offerte Black Friday su Amazon',
    faq: [
      {
        question: `Quando è il Black Friday ${Y}?`,
        answer: `Venerdì 27 novembre ${Y}, seguito dal Cyber Monday lunedì 30 novembre. Amazon di solito apre le sue offerte circa una settimana prima; le date esatte del suo evento sono indicate sulla sua pagina Black Friday.`,
      },
      {
        question: 'Conviene aspettare il Black Friday per comprare un robot aspirapolvere o una friggitrice ad aria?',
        answer: 'Non necessariamente. Sono categorie molto presenti durante l’evento, ma uno sconto conta solo sul modello giusto. Se l’apparecchio che ti serve ha già un prezzo che ti convince, non serve aspettare.',
      },
      {
        question: 'Come capire se uno sconto è reale?',
        answer: 'Confronta il prezzo dell’offerta con il prezzo più basso degli ultimi 30 giorni che Amazon mostra accanto allo sconto e verifica che sia esattamente la versione del modello che vuoi. Una percentuale alta dice poco se il prezzo di riferimento era gonfiato.',
      },
      {
        question: 'Perché non mostrate i prezzi?',
        answer: 'Durante il Black Friday i prezzi cambiano più volte al giorno. Invece di una cifra che invecchia subito, indichiamo i modelli da tenere d’occhio e rimandiamo ad Amazon, dove il prezzo mostrato è quello del momento.',
      },
    ],
  },
  nl: {
    metaTitle: `Black Friday ${Y}: slimme apparaten om te volgen`,
    metaDescription: `Black Friday ${Y} valt op 27 november. Modellen om in de gaten te houden in zes categorieën van het slimme huis, en hoe je een echte deal herkent.`,
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
    metaTitle: `Black Friday ${Y}: nasz wybór do inteligentnego domu`,
    metaDescription: `Black Friday ${Y}, 27 listopada: modele warte uwagi w 6 kategoriach inteligentnego domu i sposób na rozpoznanie prawdziwej okazji.`,
    h1: `Black Friday ${Y}: urządzenia do inteligentnego domu, które warto mieć na oku`,
    intro: `Black Friday przypada w piątek 27 listopada ${Y} r. Amazon zwykle rozpoczyna swoje oferty mniej więcej tydzień wcześniej: dokładne daty sprawdź na jego stronie Black Friday. Zamiast listy promocji, która zmienia się co godzinę, znajdziesz tu modele już polecane w naszych poradnikach zakupowych, kategoria po kategorii, oraz prostą metodę oceny oferty.`,
    dealTitle: 'Jak rozpoznać prawdziwą okazję',
    dealTips: [
      {
        title: 'Sprawdź cenę referencyjną, nie procent',
        text: 'W UE ogłaszana obniżka musi być liczona od najniższej ceny z ostatnich 30 dni, a Amazon wyświetla ją przy ofercie. Jeśli różnica jest niewielka, oszczędność też.',
      },
      {
        title: 'Najpierw model, potem rabat',
        text: 'Duża obniżka na urządzeniu, które nie pasuje do twojego mieszkania ani sposobu użytkowania, nie jest oszczędnością. Najpierw zdecyduj, jaki model ci odpowiada (do tego służą nasze poradniki), a potem sprawdź, czy jest w promocji.',
      },
      {
        title: 'Sprawdź dokładną wersję',
        text: 'Podobne nazwy kryją różną zawartość: edycje „Complete”, „Plus” lub „Ultra”, zestawy, akcesoria. Upewnij się, że oferta dotyczy wersji, którą chcesz kupić.',
      },
      {
        title: 'Zobacz, kto sprzedaje',
        text: 'Sprzedaż i wysyłka przez Amazon albo przez sprzedawcę zewnętrznego: warunki zwrotu i gwarancji mogą się różnić.',
      },
    ],
    categoriesTitle: 'Kategorie warte uwagi',
    amazonTitle: 'Strona Black Friday Amazon',
    amazonText: 'Wszystkie bieżące oferty, przez cały czas trwania wydarzenia. Amazon zwykle rozpoczyna swoje oferty mniej więcej tydzień przed Black Friday.',
    amazonCta: 'Zobacz oferty Black Friday na Amazon',
    faq: [
      {
        question: `Kiedy jest Black Friday ${Y}?`,
        answer: `W piątek 27 listopada ${Y} r., a Cyber Monday w poniedziałek 30 listopada. Amazon zwykle rozpoczyna swoje oferty mniej więcej tydzień wcześniej; dokładne daty wydarzenia są publikowane na jego stronie Black Friday.`,
      },
      {
        question: 'Czy warto czekać na Black Friday z zakupem robota odkurzającego lub frytkownicy beztłuszczowej?',
        answer: 'Niekoniecznie. To kategorie bardzo widoczne podczas wydarzenia, ale obniżka ma sens tylko na właściwym modelu. Jeśli potrzebne ci urządzenie jest już w cenie, która ci odpowiada, nie ma powodu czekać.',
      },
      {
        question: 'Jak sprawdzić, czy obniżka jest prawdziwa?',
        answer: 'Porównaj cenę oferty z najniższą ceną z ostatnich 30 dni, którą Amazon pokazuje przy obniżce, i upewnij się, że chodzi o tę samą wersję modelu. Wysoki procent nic nie mówi, jeśli cena referencyjna była zawyżona.',
      },
      {
        question: 'Dlaczego nie podajecie cen?',
        answer: 'Podczas Black Friday ceny zmieniają się kilka razy dziennie. Zamiast liczby, która szybko się dezaktualizuje, wskazujemy modele warte uwagi i odsyłamy na Amazon, gdzie wyświetlana cena jest aktualna.',
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
