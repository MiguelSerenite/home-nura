import type { BlogArticle } from '../types'

export const article: BlogArticle = {
  slug: 'aire-acondicionado-portatil-no-enfria',
  category: 'guides',
  pillar: 'confort-air',
  relatedSlugs: ['climatiseur-mobile-vs-ventilateur', 'ventilateur-connecte-comparatif', 'deshumidificateur-connecte-guide'],
  datePublished: '2026-04-19',
  dateModified: '2026-04-20',
  readingTime: 9,
  images: [
    {
      src: 'https://images.unsplash.com/photo-1550728683-ec67f8536bdc?w=800&q=80&auto=format&fit=crop',
      alt: {
        fr: 'Climatiseur mobile qui ne refroidit pas dans un salon, tuyau d\'evacuation a verifier',
        en: 'Portable air conditioner not cooling in a living room, exhaust hose to check',
        de: 'Mobile Klimaanlage kuhlt nicht im Wohnzimmer, Abluftschlauch zu prufen',
        es: 'Aire acondicionado portátil que no enfría en un salón, tubo de evacuación a revisar',
        it: 'Climatizzatore portatile che non raffredda in un soggiorno, tubo di scarico da controllare',
        nl: 'Mobiele airco die niet koelt in een woonkamer, afvoerslang controleren',
      },
    },
  ],
  title: {
    fr: 'Climatiseur Portable qui ne Refroidit Pas : Causes et Solutions 2026',
    en: 'Portable Air Conditioner Not Cooling: Causes and Fixes 2026',
    de: 'Mobile Klimaanlage Kuhlt Nicht: Ursachen und Losungen 2026',
    es: 'Aire Acondicionado Portátil No Enfría: Causas y Soluciones 2026',
    it: 'Climatizzatore Portatile che Non Raffredda: Cause e Soluzioni 2026',
    nl: 'Mobiele Airco Koelt Niet: Oorzaken en Oplossingen 2026',
  },
  excerpt: {
    fr: 'Votre climatiseur portable ne refroidit pas ou pas assez ? Diagnostic complet : tuyau d\'evacuation, filtre encrasse, BTU insuffisants, mauvais reglage, fuite de gaz. Solutions etape par etape et tableau de depannage.',
    en: 'Is your portable air conditioner not cooling or not cooling enough? Full diagnosis: exhaust hose, clogged filter, insufficient BTU, wrong setting, gas leak. Step-by-step fixes and a troubleshooting table.',
    de: 'Ihre mobile Klimaanlage kuhlt nicht oder nicht genug? Komplette Diagnose: Abluftschlauch, verstopfter Filter, zu wenig BTU, falsche Einstellung, Gasleck. Losungen Schritt fur Schritt und Fehlertabelle.',
    es: '¿Tu aire acondicionado portátil no enfría o no enfría bien? Diagnóstico completo: tubo de evacuación, filtro sucio, BTU insuficientes, modo mal ajustado, fuga de gas. Soluciones paso a paso y tabla de averías.',
    it: 'Il tuo climatizzatore portatile non raffredda o non abbastanza? Diagnosi completa: tubo di scarico, filtro sporco, BTU insufficienti, modalita sbagliata, perdita di gas. Soluzioni passo passo e tabella guasti.',
    nl: 'Koelt je mobiele airco niet of niet genoeg? Volledige diagnose: afvoerslang, vervuild filter, te weinig BTU, verkeerde stand, gaslek. Stap-voor-stap oplossingen en een storingstabel.',
  },
  content: {
    es: `<h2>Mi aire acondicionado portátil no enfría: por dónde empezar</h2>
<p>Es una de las averías más frustrantes del verano: enchufas el equipo, lo pones a 18 grados, lo dejas horas en marcha y la habitación sigue igual de calurosa. La buena noticia es que, en la gran mayoría de los casos, cuando un <strong>aire acondicionado portátil no enfría</strong> el problema no es una avería grave, sino un fallo de instalación, de mantenimiento o de dimensionado que tú mismo puedes resolver en unos minutos.</p>
<p>Antes de pensar en llamar al servicio técnico o en comprar otro aparato, conviene hacer un diagnóstico ordenado. En esta guía repasamos las causas reales por las que un portátil <strong>no enfría bien</strong>, de la más frecuente a la más grave, con soluciones concretas paso a paso. Si todavía estás decidiendo qué sistema te conviene, te ayudará nuestra <a href="/es/blog/climatiseur-mobile-vs-ventilateur">comparativa de aire acondicionado portátil vs ventilador</a>.</p>
<p>Conviene tener clara una idea de partida: un aire acondicionado portátil de un solo tubo no funciona como un split fijo de pared. Es más sensible a la instalación, al tamaño de la habitación y a la temperatura de la calle. Por eso, cuando notas que <strong>no enfría lo suficiente</strong>, en muchos casos no está estropeado, sino que está luchando contra unas condiciones que se pueden mejorar fácilmente. Vamos a verlas una por una, empezando por las comprobaciones de un minuto y dejando para el final las averías que ya requieren un profesional.</p>

<h2>Tabla de diagnóstico rápido</h2>
<table>
<thead>
<tr><th>Síntoma</th><th>Causa probable</th><th>Solución</th></tr>
</thead>
<tbody>
<tr><td>Sale aire pero ni frío ni caliente</td><td>Está en modo ventilador, no en frío</td><td>Cambia al modo Cool / Frío (icono de copo de nieve)</td></tr>
<tr><td>Enfría poco y el tubo se calienta</td><td><strong>Tubo de evacuación</strong> mal colocado o doblado</td><td>Endereza el tubo y sácalo bien por la ventana</td></tr>
<tr><td>Caudal de aire muy débil</td><td><strong>Filtro</strong> sucio o atascado</td><td>Limpia o cambia el filtro</td></tr>
<tr><td>Se para solo a los pocos minutos</td><td>Depósito de <strong>condensación</strong> lleno</td><td>Vacía el depósito de agua</td></tr>
<tr><td>Funciona pero la habitación no baja de temperatura</td><td>Pocos <strong>BTU</strong> para los metros cuadrados</td><td>Reduce la superficie a enfriar o sube de potencia</td></tr>
<tr><td>Enfría mucho menos que al principio</td><td>Posible <strong>fuga de gas</strong> refrigerante</td><td>Llama a un técnico certificado</td></tr>
</tbody>
</table>

<h2>Causa 1: el modo está mal ajustado</h2>
<p>Parece una tontería, pero es el motivo número uno de las falsas averías. Muchos equipos arrancan por defecto en modo <em>ventilador</em> (Fan) o en modo <em>seco / deshumidificación</em> (Dry), que mueven el aire o quitan humedad pero apenas bajan la temperatura. Si el compresor no arranca, el aparato nunca enfriará de verdad.</p>
<ul>
<li>Pulsa el botón de modo (Mode) hasta ver el icono de copo de nieve o la palabra Cool / Frío.</li>
<li>Baja la temperatura de consigna varios grados por debajo de la temperatura actual de la habitación.</li>
<li>Comprueba que escuchas arrancar el compresor (un zumbido grave) al cabo de uno o dos minutos.</li>
<li>Si usas el temporizador o el modo Eco, desactívalos durante la prueba para descartar que estén limitando el equipo.</li>
</ul>

<h2>Causa 2: el tubo de evacuación está mal instalado</h2>
<p>Esta es, de lejos, la causa más habitual cuando un portátil <strong>no enfría bien</strong>. Un aire acondicionado portátil no es magia: extrae el calor del interior y lo expulsa al exterior a través del <strong>tubo de evacuación</strong>. Si ese aire caliente no sale realmente de la habitación, vuelve a entrar y anula todo el efecto refrigerante. Es el error más frecuente y, a la vez, el más fácil de corregir sin gastar un euro.</p>
<p>Un detalle que mucha gente desconoce: cuanto más largo y retorcido está el tubo, más se calienta su propia superficie y más calor devuelve a la habitación por radiación. Por eso un tubo bien colocado no solo evacúa mejor, sino que también evita que el equipo trabaje contra sí mismo. La temperatura del propio tubo es una buena pista: si al cabo de un rato está muy caliente al tacto en su tramo final, casi seguro que el recorrido es demasiado largo o tiene dobleces.</p>
<h3>Cómo revisar y corregir el tubo</h3>
<ul>
<li>El tubo debe ir <strong>directo a una ventana o a una salida al exterior</strong>, nunca quedarse dando vueltas dentro de la habitación.</li>
<li>Mantenlo lo más <strong>corto y recto posible</strong>. Cada codo y cada metro de más reducen el rendimiento y hacen que el motor trabaje contra sí mismo.</li>
<li>Evita que el tubo quede <strong>doblado, aplastado o en forma de U</strong>: el aire caliente se acumula y vuelve hacia dentro.</li>
<li>Comprueba que el tubo encaja bien en la salida trasera del equipo y que no se ha soltado.</li>
<li>No alargues el tubo con piezas caseras ni lo sustituyas por uno más largo: el fabricante calcula su longitud para el caudal del aparato.</li>
</ul>

<h2>Causa 3: mal sellado de la ventana</h2>
<p>De poco sirve sacar el aire caliente por el tubo si por el hueco de la ventana entra otra vez aire caliente de la calle. Es como vaciar una bañera sin cerrar el grifo. La mayoría de los equipos vienen con un <strong>kit de sellado de ventana</strong> (panel de tela o de plástico con cremallera) precisamente para esto.</p>
<ul>
<li>Instala el kit de sellado que acompaña al aparato; si lo perdiste, hay paneles universales muy económicos.</li>
<li>Tapa cualquier hueco alrededor del tubo con cinta o con burlete de espuma.</li>
<li>Cierra puertas y ventanas de la habitación y baja las persianas durante las horas de más sol para reducir la carga térmica.</li>
<li>Si la ventana es abatible o de tipo oscilobatiente, busca un kit específico: los huecos triangulares que dejan son una vía de entrada de calor enorme.</li>
</ul>
<p>Una prueba sencilla: con el equipo en marcha, acerca la mano al contorno de la ventana y al sellado del tubo. Si notas una corriente de aire caliente entrando, ahí tienes una fuga que está tirando por tierra el trabajo del aparato.</p>

<h2>Causa 4: el filtro está sucio</h2>
<p>El <strong>filtro</strong> de aire retiene polvo y pelusa. Cuando se atasca, el equipo aspira menos aire, el caudal cae y la capacidad de enfriar se desploma. Es un mantenimiento básico que muchos usuarios olvidan.</p>
<ul>
<li>Localiza el filtro (suele estar detrás de una rejilla en la parte trasera o lateral) y retíralo.</li>
<li>Límpialo con agua tibia y un poco de jabón neutro, o aspira el polvo con cuidado.</li>
<li>Déjalo secar del todo antes de volver a colocarlo: un filtro húmedo favorece moho y malos olores.</li>
<li>Repite la limpieza cada dos o tres semanas durante la temporada de uso intenso.</li>
</ul>

<h2>Causa 5: el depósito de condensación está lleno</h2>
<p>Al enfriar, el aparato genera agua por <strong>condensación</strong>. Muchos modelos la evaporan solos, pero otros la acumulan en un depósito interno. Cuando ese depósito se llena, un sensor de seguridad detiene el compresor: el ventilador sigue soplando, pero ya no enfría, y a veces parpadea un piloto o un código tipo "FL" o "Full".</p>
<ul>
<li>Vacía el depósito de agua siguiendo las instrucciones del manual.</li>
<li>Si tu equipo permite drenaje continuo, conecta una manguera de desagüe para no tener que vaciarlo a mano.</li>
<li>Revisa que el tapón de drenaje esté bien cerrado después de vaciar, o podría gotear.</li>
</ul>

<h2>Causa 6: la habitación es demasiado grande (BTU insuficientes)</h2>
<p>Si el equipo funciona perfectamente pero la habitación <strong>no enfría lo suficiente</strong>, es muy posible que sencillamente le falte potencia. La potencia frigorífica se mide en <strong>BTU</strong> (British Thermal Units) por hora. Un aparato pequeño en un salón grande puede estar trabajando al máximo sin llegar nunca a la temperatura deseada, igual que un coche pequeño cargado hasta arriba sube una cuesta sin fuerza.</p>
<p>Este es un punto clave a la hora de comprar y también una causa muy común de decepción: mucha gente elige el modelo por precio y acaba con un equipo demasiado justo para su salón. Dimensionar bien los BTU es lo que separa un aparato que enfría de verdad de otro que solo hace ruido.</p>
<h3>Cuántos BTU necesitas según los metros cuadrados</h3>
<table>
<thead>
<tr><th>Superficie de la habitacion</th><th>BTU recomendados</th></tr>
</thead>
<tbody>
<tr><td>Hasta 15 m2</td><td>7.000 - 9.000 BTU</td></tr>
<tr><td>15 - 25 m2</td><td>9.000 - 12.000 BTU</td></tr>
<tr><td>25 - 35 m2</td><td>12.000 - 14.000 BTU</td></tr>
<tr><td>35 - 45 m2</td><td>14.000 - 18.000 BTU</td></tr>
</tbody>
</table>
<p>Son valores orientativos para una habitación estándar. Si la estancia recibe mucho sol, está bajo cubierta, tiene techos altos o muchas personas y aparatos electrónicos, conviene subir de tramo. Un equipo demasiado justo nunca alcanzará la temperatura de consigna y, además, consumirá más porque trabajará sin parar. Si dudas entre potencia y consumo, repasa nuestra <a href="/es/blog/climatiseur-mobile-vs-ventilateur">comparativa por tamaño de habitación</a>.</p>

<h2>Causa 7: temperatura exterior extrema</h2>
<p>Durante una ola de calor, con 40 grados en la calle, hasta un equipo bien dimensionado pierde rendimiento. El portátil tiene que expulsar el calor a un aire exterior que ya está muy caliente, así que la diferencia que consigue dentro es menor de lo habitual. No es una avería, es una limitación física.</p>
<ul>
<li>Cierra persianas y cortinas en las horas centrales del día para que el equipo no parta de tan arriba.</li>
<li>Pon el aparato en marcha antes de que la habitación se caliente del todo, no cuando ya es un horno.</li>
<li>No te obsesiones con los 18 grados: una diferencia realista de 5 a 8 grados respecto a la calle ya da un gran confort.</li>
</ul>

<h2>Causa 8: posible fuga de gas refrigerante</h2>
<p>Si has descartado todo lo anterior y el equipo enfriaba bien antes pero ahora apenas nota, podría existir una <strong>fuga de gas</strong> refrigerante. Sin la carga correcta de gas, el compresor funciona pero no transfiere calor, así que sopla aire casi a temperatura ambiente.</p>
<p>Aquí es importante ser prudente: el gas refrigerante está a presión y su manipulación está regulada por ley. <strong>No intentes recargarlo ni abrir el circuito tú mismo.</strong> Esta operación debe realizarla siempre un <strong>técnico certificado</strong> en gases fluorados, que localizará la fuga, la reparará y recargará el equipo de forma segura. Manipular un circuito de refrigerante sin formación no solo es ilegal, sino que puede provocar quemaduras por frío y dañar de forma irreversible el compresor.</p>
<p>Conviene recordar que las fugas no son lo habitual en un equipo nuevo y bien usado. Si tu aparato tiene pocos meses y ya parece que pierde gas, lo correcto es tramitar la garantía con el vendedor en lugar de abrir nada por tu cuenta.</p>

<h2>Cuándo llamar al servicio técnico</h2>
<p>Has revisado el modo, el tubo de evacuación, el sellado de la ventana, el filtro y el depósito de condensación, el equipo está bien dimensionado en BTU y aun así <strong>no enfría</strong>. En ese punto, lo razonable es contactar con el servicio técnico, sobre todo si además observas:</p>
<ul>
<li>Olor a quemado, chispas o el aparato salta el diferencial de la vivienda.</li>
<li>Ruidos metálicos o golpeteos anormales del compresor.</li>
<li>Códigos de error que no se resuelven con el manual.</li>
<li>Sospecha de fuga de gas (rendimiento que cae de forma progresiva).</li>
</ul>
<p>Si el equipo está en garantía, no lo abras: hacerlo puede anular la cobertura. Para mantener un buen confort interior el resto del año, también puede interesarte nuestra <a href="/es/blog/deshumidificateur-connecte-guide">guía de deshumidificadores conectados</a>, útiles para controlar la humedad que tanto influye en la sensación de calor.</p>

<h2>Buenos hábitos para que enfríe mejor cada verano</h2>
<p>Más allá del diagnóstico puntual, unos cuantos hábitos sencillos hacen que tu aire acondicionado portátil rinda al máximo y dure más años. La idea es ayudar al aparato a no partir de una habitación ya recalentada y a respirar sin obstáculos.</p>
<ul>
<li>Enciéndelo de forma anticipada en los días de calor previsto, mejor que esperar a que la habitación sea un horno.</li>
<li>Mantén libres las rejillas de entrada y salida de aire: no pegues el equipo a la pared ni lo cubras con cortinas o muebles.</li>
<li>Limpia el filtro con regularidad y, al final de la temporada, guárdalo limpio y seco para evitar olores el verano siguiente.</li>
<li>Acompaña el portátil con un buen aislamiento del calor: toldos, persianas bajadas y, si puedes, ventilación nocturna cuando refresca.</li>
<li>Combina, si hace falta, con un ventilador para repartir mejor el aire frío por toda la estancia sin subir el consumo.</li>
</ul>
<p>Con estos gestos, el equipo trabaja menos para conseguir el mismo confort, lo que se nota tanto en la temperatura como en la factura de la luz.</p>

<h2>Conclusión</h2>
<p>Que un <strong>aire acondicionado portátil no enfríe</strong> casi nunca es el final del aparato. En orden de probabilidad, revisa el modo de funcionamiento, el tubo de evacuación, el sellado de la ventana, el filtro y el depósito de condensación, y asegúrate de que la potencia en BTU corresponde a los metros cuadrados de la habitación. Con estos pasos resolverás la inmensa mayoría de los casos. Solo cuando todo esto esté descartado tiene sentido pensar en una fuga de gas y recurrir a un técnico certificado.</p>

<h2>Disponibilidad y precios en España</h2>
<p>Si tras revisar todo decides renovar tu equipo, en España tienes amplia disponibilidad de aires acondicionados portátiles en Amazon.es, con envío rápido y stock reforzado durante las olas de calor. También se encuentran en grandes superficies físicas, donde puedes consultar la potencia en BTU adecuada a tu habitación. Cualquier aparato nuevo está respaldado por la garantía legal española.</p>
<ul>
<li><strong>Disponibilidad:</strong> gran oferta en Amazon.es y en cadenas como MediaMarkt o El Corte Inglés, con entrega habitual en 24-48 horas.</li>
<li><strong>Rango de precios:</strong> un aire acondicionado portátil con buena capacidad de refrigeración suele costar entre 200 y 500 €, según los BTU y las funciones.</li>
<li><strong>Garantía:</strong> 3 años de garantía legal en España (Ley de Garantías desde 2022), útil precisamente cuando un equipo deja de enfriar por defecto de fábrica.</li>
<li><strong>Qué valoran los compradores españoles:</strong> que enfríe de verdad en plena ola de calor, la eficiencia energética por el precio de la luz y un mantenimiento sencillo de filtros.</li>
</ul>`,

    fr: `<h2>Mon climatiseur portable ne refroidit pas : par ou commencer</h2>
<p>C'est l'une des pannes les plus frustrantes de l'ete : vous branchez l'appareil, vous le reglez sur 18 degres, vous le laissez tourner des heures et la piece reste tout aussi chaude. La bonne nouvelle, c'est que dans la grande majorite des cas, lorsqu'un climatiseur portable ne refroidit pas, le probleme n'est pas une panne grave mais un defaut d'installation, d'entretien ou de dimensionnement que vous pouvez resoudre vous-meme en quelques minutes.</p>
<p>Avant de penser a appeler le SAV ou a racheter un appareil, il vaut mieux faire un diagnostic methodique. Dans ce guide, nous passons en revue les vraies causes, de la plus frequente a la plus grave, avec des solutions concretes etape par etape. Si vous hesitez encore sur le systeme le mieux adapte, consultez notre <a href="/fr/blog/climatiseur-mobile-vs-ventilateur">comparatif climatiseur mobile vs ventilateur</a>.</p>
<p>Gardez une idee en tete : un climatiseur mobile monobloc ne fonctionne pas comme un split fixe au mur. Il est bien plus sensible a l'installation, a la taille de la piece et a la temperature exterieure. Souvent, quand l'appareil ne refroidit pas assez, il n'est pas en panne : il lutte contre des conditions defavorables faciles a corriger. Voyons-les une a une, en commencant par les verifications d'une minute et en gardant pour la fin les pannes qui exigent un professionnel.</p>

<h2>Tableau de diagnostic rapide</h2>
<table>
<thead>
<tr><th>Symptome</th><th>Cause probable</th><th>Solution</th></tr>
</thead>
<tbody>
<tr><td>L'air sort mais ni froid ni chaud</td><td>Mode ventilateur au lieu de froid</td><td>Passez en mode Cool / Froid (flocon)</td></tr>
<tr><td>Refroidit peu et le tuyau chauffe</td><td>Tuyau d'evacuation mal place ou plie</td><td>Redressez le tuyau et sortez-le par la fenetre</td></tr>
<tr><td>Debit d'air tres faible</td><td>Filtre encrasse</td><td>Nettoyez ou remplacez le filtre</td></tr>
<tr><td>S'arrete seul au bout de quelques minutes</td><td>Bac a condensats plein</td><td>Videz le bac a eau</td></tr>
<tr><td>Fonctionne mais la piece ne baisse pas</td><td>BTU insuffisants pour la surface</td><td>Reduisez la surface ou montez en puissance</td></tr>
<tr><td>Refroidit beaucoup moins qu'avant</td><td>Possible fuite de gaz</td><td>Faites appel a un technicien certifie</td></tr>
</tbody>
</table>

<h2>Cause 1 : le mode est mal regle</h2>
<p>Cela parait anodin, mais c'est la cause numero un des fausses pannes. Beaucoup d'appareils demarrent par defaut en mode ventilateur (Fan) ou en mode deshumidification (Dry), qui brassent l'air ou retirent l'humidite sans vraiment baisser la temperature. Si le compresseur ne demarre pas, l'appareil ne refroidira jamais.</p>
<ul>
<li>Appuyez sur le bouton Mode jusqu'a voir le flocon ou la mention Cool / Froid.</li>
<li>Baissez la temperature de consigne de plusieurs degres sous la temperature actuelle de la piece.</li>
<li>Verifiez que vous entendez le compresseur demarrer (bourdonnement grave) apres une a deux minutes.</li>
<li>Desactivez le minuteur et le mode Eco pendant le test pour ecarter une bridage.</li>
</ul>

<h2>Cause 2 : le tuyau d'evacuation est mal installe</h2>
<p>C'est de loin la cause la plus frequente. Un climatiseur portable extrait la chaleur de la piece et l'evacue vers l'exterieur par le tuyau d'evacuation. Si cet air chaud ne sort pas vraiment de la piece, il y revient et annule tout l'effet de refroidissement. C'est l'erreur la plus repandue et, en meme temps, la plus facile a corriger sans depenser un centime.</p>
<p>Detail souvent ignore : plus le tuyau est long et tortueux, plus sa surface chauffe et plus il renvoie de chaleur dans la piece par rayonnement. La temperature du tuyau est un bon indice : si sa partie finale est tres chaude au toucher apres un moment, le trajet est probablement trop long ou comporte des coudes.</p>
<h3>Comment verifier et corriger le tuyau</h3>
<ul>
<li>Le tuyau doit aller directement vers une fenetre ou une sortie exterieure, jamais tourner dans la piece.</li>
<li>Gardez-le le plus court et droit possible : chaque coude et chaque metre en trop reduisent le rendement.</li>
<li>Evitez qu'il soit plie, ecrase ou en forme de U : l'air chaud s'accumule et revient a l'interieur.</li>
<li>Verifiez que le tuyau est bien emboite a l'arriere de l'appareil et qu'il ne s'est pas detache.</li>
<li>Ne rallongez pas le tuyau avec des bricolages et ne le remplacez pas par un modele plus long : sa longueur est calculee pour le debit de l'appareil.</li>
</ul>

<h2>Cause 3 : mauvais calfeutrage de la fenetre</h2>
<p>Inutile de sortir l'air chaud si l'air exterieur revient par l'espace autour du tuyau. La plupart des appareils sont livres avec un kit de calfeutrage de fenetre justement pour cela.</p>
<ul>
<li>Installez le kit de calfeutrage fourni ; s'il manque, des panneaux universels existent a petit prix.</li>
<li>Bouchez les espaces autour du tuyau avec du ruban ou un joint en mousse.</li>
<li>Fermez portes et fenetres et baissez les volets aux heures les plus chaudes.</li>
<li>Sur une fenetre oscillo-battante, cherchez un kit specifique : les ouvertures triangulaires laissent entrer enormement de chaleur.</li>
</ul>
<p>Test simple : appareil en marche, approchez la main du contour de la fenetre et du calfeutrage du tuyau. Si vous sentez un courant d'air chaud entrer, vous tenez une fuite qui ruine le travail de l'appareil.</p>

<h2>Cause 4 : le filtre est encrasse</h2>
<p>Le filtre retient la poussiere. Quand il s'encrasse, l'appareil aspire moins d'air, le debit chute et la capacite de refroidissement s'effondre. C'est un entretien de base souvent oublie.</p>
<ul>
<li>Reperez le filtre (souvent derriere une grille a l'arriere ou sur le cote) et retirez-le.</li>
<li>Nettoyez-le a l'eau tiede avec un peu de savon doux, ou aspirez la poussiere.</li>
<li>Laissez-le secher completement avant de le remettre : un filtre humide favorise les moisissures.</li>
<li>Repetez le nettoyage toutes les deux a trois semaines en pleine saison.</li>
</ul>

<h2>Cause 5 : le bac a condensats est plein</h2>
<p>En refroidissant, l'appareil produit de l'eau par condensation. Certains modeles l'evaporent, d'autres l'accumulent dans un bac interne. Quand il est plein, un capteur de securite arrete le compresseur : le ventilateur souffle encore mais ne refroidit plus, parfois avec un code "FL" ou "Full".</p>
<ul>
<li>Videz le bac a eau selon le manuel.</li>
<li>Si l'appareil le permet, branchez un tuyau de drainage continu pour eviter de le vider a la main.</li>
<li>Verifiez que le bouchon de vidange est bien referme apres avoir vide.</li>
</ul>

<h2>Cause 6 : la piece est trop grande (BTU insuffisants)</h2>
<p>Si l'appareil fonctionne bien mais que la piece ne baisse pas assez, il manque sans doute de puissance. La puissance frigorifique se mesure en BTU par heure. Un petit appareil dans un grand salon peut tourner a fond sans jamais atteindre la consigne, comme une petite voiture chargee qui peine dans une cote.</p>
<p>C'est un point cle a l'achat et une cause frequente de deception : beaucoup choisissent le modele au prix et se retrouvent avec un appareil trop juste pour leur salon. Bien dimensionner les BTU, c'est ce qui separe un appareil qui refroidit vraiment d'un autre qui ne fait que du bruit.</p>
<h3>Combien de BTU selon la surface</h3>
<table>
<thead>
<tr><th>Surface de la piece</th><th>BTU recommandes</th></tr>
</thead>
<tbody>
<tr><td>Jusqu'a 15 m2</td><td>7 000 - 9 000 BTU</td></tr>
<tr><td>15 - 25 m2</td><td>9 000 - 12 000 BTU</td></tr>
<tr><td>25 - 35 m2</td><td>12 000 - 14 000 BTU</td></tr>
<tr><td>35 - 45 m2</td><td>14 000 - 18 000 BTU</td></tr>
</tbody>
</table>
<p>Ce sont des valeurs indicatives pour une piece standard. Forte exposition au soleil, sous les combles, plafonds hauts ou nombreux appareils : montez d'un cran. Un appareil trop juste n'atteindra jamais la consigne et consommera plus. Pour comparer puissance et consommation, voyez notre <a href="/fr/blog/climatiseur-mobile-vs-ventilateur">comparatif par taille de piece</a>.</p>

<h2>Cause 7 : temperature exterieure extreme</h2>
<p>En canicule, avec 40 degres dehors, meme un appareil bien dimensionne perd du rendement : il doit rejeter la chaleur dans un air deja tres chaud. Ce n'est pas une panne, mais une limite physique.</p>
<ul>
<li>Fermez volets et rideaux aux heures les plus chaudes.</li>
<li>Mettez l'appareil en marche avant que la piece ne devienne une fournaise.</li>
<li>Ne visez pas 18 degres a tout prix : un ecart realiste de 5 a 8 degres avec l'exterieur apporte deja un grand confort.</li>
</ul>

<h2>Cause 8 : possible fuite de gaz refrigerant</h2>
<p>Si tout le reste est ecarte et que l'appareil refroidissait bien avant mais plus maintenant, il peut y avoir une fuite de gaz refrigerant. Sans la bonne charge de gaz, le compresseur tourne mais ne transfere plus la chaleur.</p>
<p>Soyez prudent : le gaz refrigerant est sous pression et sa manipulation est reglementee. N'essayez jamais de le recharger ni d'ouvrir le circuit vous-meme. Cette operation doit toujours etre realisee par un technicien certifie en fluides frigorigenes. Manipuler un circuit frigorifique sans formation est non seulement illegal, mais peut provoquer des brulures par le froid et endommager irreversiblement le compresseur.</p>
<p>Rappelez-vous qu'une fuite n'est pas normale sur un appareil neuf et bien utilise. Si votre appareil a quelques mois et semble deja perdre du gaz, faites jouer la garantie aupres du vendeur plutot que d'ouvrir quoi que ce soit.</p>

<h2>Quand appeler le SAV</h2>
<p>Vous avez verifie le mode, le tuyau, le calfeutrage, le filtre et le bac, l'appareil est bien dimensionne et il ne refroidit toujours pas. Contactez alors le SAV, surtout si vous observez :</p>
<ul>
<li>Odeur de brule, etincelles ou disjonction.</li>
<li>Bruits metalliques anormaux du compresseur.</li>
<li>Codes d'erreur non resolus par le manuel.</li>
<li>Soupcon de fuite de gaz (perte progressive de performance).</li>
</ul>
<p>Si l'appareil est sous garantie, ne l'ouvrez pas. Pour le confort le reste de l'annee, consultez aussi notre <a href="/fr/blog/deshumidificateur-connecte-guide">guide des deshumidificateurs connectes</a>.</p>

<h2>Bonnes habitudes pour mieux refroidir chaque ete</h2>
<p>Au-dela du diagnostic ponctuel, quelques habitudes simples permettent a votre climatiseur mobile de rendre son maximum et de durer plus longtemps. L'idee est de l'aider a ne pas partir d'une piece deja surchauffee et a respirer sans obstacle.</p>
<ul>
<li>Allumez-le a l'avance les jours de forte chaleur prevue, plutot que d'attendre que la piece soit une fournaise.</li>
<li>Laissez libres les grilles d'entree et de sortie d'air : ne collez pas l'appareil au mur et ne le couvrez pas.</li>
<li>Nettoyez le filtre regulierement et, en fin de saison, rangez-le propre et sec pour eviter les odeurs l'ete suivant.</li>
<li>Accompagnez le climatiseur d'une bonne protection contre la chaleur : stores, volets baisses et ventilation nocturne quand il fait plus frais.</li>
<li>Combinez-le au besoin avec un ventilateur pour repartir l'air frais dans toute la piece sans augmenter la consommation.</li>
</ul>
<p>Avec ces gestes, l'appareil travaille moins pour le meme confort, ce qui se voit sur la temperature comme sur la facture.</p>

<h2>Conclusion</h2>
<p>Un climatiseur portable qui ne refroidit pas est rarement fichu. Dans l'ordre, verifiez le mode, le tuyau d'evacuation, le calfeutrage, le filtre et le bac a condensats, et assurez-vous que les BTU correspondent a la surface. Ces etapes resolvent l'immense majorite des cas. Ce n'est qu'ensuite qu'une fuite de gaz et l'intervention d'un technicien certifie deviennent pertinentes.</p>`,

    en: `<h2>My portable air conditioner is not cooling: where to start</h2>
<p>It is one of summer's most frustrating issues: you plug in the unit, set it to 18 degrees, leave it running for hours and the room stays just as hot. The good news is that in the vast majority of cases, when a portable air conditioner is not cooling, the problem is not a serious breakdown but an installation, maintenance or sizing issue you can fix yourself in minutes.</p>
<p>Before calling a repair service or buying a new unit, run a methodical diagnosis. In this guide we go through the real causes, from the most common to the most serious, with concrete step-by-step fixes. If you are still deciding which system suits you, see our <a href="/en/blog/climatiseur-mobile-vs-ventilateur">portable AC vs fan comparison</a>.</p>
<p>Keep one idea in mind: a single-hose portable AC does not work like a fixed wall split. It is far more sensitive to installation, room size and outdoor temperature. Often, when the unit is not cooling enough, it is not broken at all: it is fighting unfavourable conditions that are easy to improve. Let us look at them one by one, starting with the one-minute checks and leaving the faults that need a professional for the end.</p>

<h2>Quick diagnostic table</h2>
<table>
<thead>
<tr><th>Symptom</th><th>Likely cause</th><th>Fix</th></tr>
</thead>
<tbody>
<tr><td>Air comes out but neither cold nor hot</td><td>Fan mode instead of cooling</td><td>Switch to Cool mode (snowflake)</td></tr>
<tr><td>Cools little and the hose is hot</td><td>Exhaust hose poorly placed or kinked</td><td>Straighten the hose and route it out the window</td></tr>
<tr><td>Very weak airflow</td><td>Clogged filter</td><td>Clean or replace the filter</td></tr>
<tr><td>Stops by itself after a few minutes</td><td>Condensate tank full</td><td>Empty the water tank</td></tr>
<tr><td>Runs but the room does not get cooler</td><td>Insufficient BTU for the area</td><td>Reduce the area or increase power</td></tr>
<tr><td>Cools much less than before</td><td>Possible refrigerant gas leak</td><td>Call a certified technician</td></tr>
</tbody>
</table>

<h2>Cause 1: the mode is set wrong</h2>
<p>It sounds trivial, but it is the number one cause of false faults. Many units default to fan mode (Fan) or dehumidify mode (Dry), which move air or remove humidity without really lowering the temperature. If the compressor never starts, the unit will never truly cool.</p>
<ul>
<li>Press the Mode button until you see the snowflake or the word Cool.</li>
<li>Set the target temperature several degrees below the current room temperature.</li>
<li>Check that you hear the compressor start (a low hum) after one or two minutes.</li>
<li>Disable the timer and Eco mode during the test to rule out any throttling.</li>
</ul>

<h2>Cause 2: the exhaust hose is poorly installed</h2>
<p>By far the most common cause. A portable AC extracts heat from the room and expels it outside through the exhaust hose. If that hot air does not really leave the room, it comes back in and cancels the cooling effect. It is the most widespread mistake and, at the same time, the easiest to fix without spending a penny.</p>
<p>A detail many people miss: the longer and more twisted the hose, the more its own surface heats up and radiates heat back into the room. The hose temperature is a good clue: if its final section feels very hot after a while, the route is probably too long or has bends.</p>
<h3>How to check and fix the hose</h3>
<ul>
<li>The hose must run straight to a window or outside vent, never loop inside the room.</li>
<li>Keep it as short and straight as possible: every bend and extra metre cuts performance.</li>
<li>Avoid kinks, crushing or U-shapes: hot air builds up and flows back inside.</li>
<li>Make sure the hose is firmly attached to the rear outlet and has not come loose.</li>
<li>Do not extend the hose with homemade parts or swap it for a longer one: its length is calculated for the unit's airflow.</li>
</ul>

<h2>Cause 3: poor window sealing</h2>
<p>There is no point pushing hot air out if outside air comes back in around the hose. Most units ship with a window sealing kit precisely for this.</p>
<ul>
<li>Fit the supplied sealing kit; if it is missing, cheap universal panels exist.</li>
<li>Seal gaps around the hose with tape or foam strip.</li>
<li>Close doors and windows and lower blinds during the hottest hours.</li>
<li>On a tilt-and-turn window, look for a specific kit: the triangular gaps they leave let in a huge amount of heat.</li>
</ul>
<p>A simple test: with the unit running, hold your hand near the window frame and the hose seal. If you feel a stream of warm air coming in, you have found a leak that is ruining the unit's work.</p>

<h2>Cause 4: the filter is clogged</h2>
<p>The filter traps dust. When clogged, the unit draws in less air, airflow drops and cooling capacity collapses. It is basic maintenance that is often forgotten.</p>
<ul>
<li>Locate the filter (usually behind a grille at the back or side) and remove it.</li>
<li>Clean it with lukewarm water and mild soap, or vacuum the dust gently.</li>
<li>Let it dry completely before refitting: a damp filter encourages mould.</li>
<li>Repeat every two to three weeks during heavy use.</li>
</ul>

<h2>Cause 5: the condensate tank is full</h2>
<p>While cooling, the unit produces water through condensation. Some models evaporate it, others collect it in an internal tank. When full, a safety sensor stops the compressor: the fan still blows but no longer cools, sometimes showing an "FL" or "Full" code.</p>
<ul>
<li>Empty the water tank as per the manual.</li>
<li>If supported, connect a continuous drain hose to avoid manual emptying.</li>
<li>Check the drain plug is properly closed after emptying.</li>
</ul>

<h2>Cause 6: the room is too big (insufficient BTU)</h2>
<p>If the unit runs fine but the room does not cool enough, it likely lacks power. Cooling capacity is measured in BTU per hour. A small unit in a large living room can run flat out without ever reaching the set point, like a small car loaded to the roof struggling up a hill.</p>
<p>This is a key point when buying and a common cause of disappointment: many people pick the model on price and end up with a unit that is too small for their living room. Sizing the BTU correctly is what separates a unit that really cools from one that just makes noise.</p>
<h3>How many BTU by area</h3>
<table>
<thead>
<tr><th>Room area</th><th>Recommended BTU</th></tr>
</thead>
<tbody>
<tr><td>Up to 15 m2</td><td>7,000 - 9,000 BTU</td></tr>
<tr><td>15 - 25 m2</td><td>9,000 - 12,000 BTU</td></tr>
<tr><td>25 - 35 m2</td><td>12,000 - 14,000 BTU</td></tr>
<tr><td>35 - 45 m2</td><td>14,000 - 18,000 BTU</td></tr>
</tbody>
</table>
<p>These are guideline values for a standard room. Strong sun, top-floor rooms, high ceilings or many appliances mean stepping up a tier. An undersized unit will never reach the set point and will consume more. To compare power and consumption, see our <a href="/en/blog/climatiseur-mobile-vs-ventilateur">comparison by room size</a>.</p>

<h2>Cause 7: extreme outside temperature</h2>
<p>In a heatwave, with 40 degrees outside, even a well-sized unit loses performance: it must dump heat into already very hot air. This is not a fault, but a physical limit.</p>
<ul>
<li>Close blinds and curtains during the hottest hours.</li>
<li>Start the unit before the room becomes an oven.</li>
<li>Do not chase 18 degrees: a realistic 5 to 8 degree gap from outside already brings great comfort.</li>
</ul>

<h2>Cause 8: possible refrigerant gas leak</h2>
<p>If everything else is ruled out and the unit cooled well before but barely does now, there may be a refrigerant gas leak. Without the correct gas charge, the compressor runs but no longer transfers heat.</p>
<p>Be careful: refrigerant gas is pressurised and its handling is regulated. Never try to recharge it or open the circuit yourself. This must always be done by a technician certified in fluorinated gases. Handling a refrigerant circuit without training is not only illegal, it can cause cold burns and irreversibly damage the compressor.</p>
<p>Remember that a leak is not normal on a new, well-used unit. If yours is a few months old and already seems to be losing gas, claim the warranty through the seller rather than opening anything yourself.</p>

<h2>When to call the repair service</h2>
<p>You have checked the mode, hose, sealing, filter and tank, the unit is correctly sized and it still does not cool. Then contact the service, especially if you notice:</p>
<ul>
<li>Burning smell, sparks or tripping the breaker.</li>
<li>Abnormal metallic compressor noises.</li>
<li>Error codes not resolved by the manual.</li>
<li>Suspected gas leak (progressive performance loss).</li>
</ul>
<p>If the unit is under warranty, do not open it. For year-round comfort, also see our <a href="/en/blog/deshumidificateur-connecte-guide">connected dehumidifier guide</a>.</p>

<h2>Good habits for better cooling every summer</h2>
<p>Beyond the one-off diagnosis, a few simple habits help your portable AC perform at its best and last longer. The idea is to help it not start from an already overheated room and to breathe without obstruction.</p>
<ul>
<li>Switch it on ahead of time on days when heat is forecast, rather than waiting for the room to become an oven.</li>
<li>Keep the air intake and outlet grilles clear: do not push the unit against the wall or cover it.</li>
<li>Clean the filter regularly and, at the end of the season, store it clean and dry to avoid odours next summer.</li>
<li>Pair the AC with good heat protection: awnings, lowered blinds and night ventilation when it cools down.</li>
<li>If needed, combine it with a fan to spread the cool air around the room without raising consumption.</li>
</ul>
<p>With these habits the unit works less for the same comfort, which shows in both the temperature and the bill.</p>

<h2>Conclusion</h2>
<p>A portable air conditioner not cooling is rarely beyond saving. In order, check the mode, exhaust hose, sealing, filter and condensate tank, and make sure the BTU match the area. These steps fix the vast majority of cases. Only after that do a gas leak and a certified technician become relevant.</p>`,

    de: `<h2>Meine mobile Klimaanlage kuhlt nicht: wo anfangen</h2>
<p>Es ist eines der frustrierendsten Sommerprobleme: Sie stecken das Gerat ein, stellen 18 Grad ein, lassen es stundenlang laufen und der Raum bleibt genauso warm. Die gute Nachricht: In den allermeisten Fallen ist es kein schwerer Defekt, wenn eine mobile Klimaanlage nicht kuhlt, sondern ein Installations-, Wartungs- oder Dimensionierungsfehler, den Sie selbst in wenigen Minuten beheben konnen.</p>
<p>Bevor Sie den Kundendienst rufen oder ein neues Gerat kaufen, sollten Sie eine systematische Diagnose machen. In diesem Ratgeber gehen wir die echten Ursachen durch, von der haufigsten bis zur schwersten, mit konkreten Schritt-fur-Schritt-Losungen. Wenn Sie noch unsicher sind, welches System passt, hilft unser <a href="/de/blog/climatiseur-mobile-vs-ventilateur">Vergleich mobile Klimaanlage vs Ventilator</a>.</p>
<p>Behalten Sie eines im Kopf: Eine mobile Klimaanlage mit einem Schlauch arbeitet nicht wie ein fest verbautes Wand-Split. Sie reagiert viel empfindlicher auf Installation, Raumgrosse und Aussentemperatur. Oft ist das Gerat gar nicht defekt, wenn es nicht genug kuhlt, sondern kampft gegen ungunstige Bedingungen, die sich leicht verbessern lassen. Sehen wir sie uns einzeln an, beginnend mit den Ein-Minuten-Checks und mit den Defekten, die einen Fachmann erfordern, ganz am Ende.</p>

<h2>Schnelle Diagnosetabelle</h2>
<table>
<thead>
<tr><th>Symptom</th><th>Wahrscheinliche Ursache</th><th>Losung</th></tr>
</thead>
<tbody>
<tr><td>Luft kommt, aber weder kalt noch warm</td><td>Ventilatormodus statt Kuhlen</td><td>Auf Cool-Modus stellen (Schneeflocke)</td></tr>
<tr><td>Kuhlt kaum und der Schlauch ist heiss</td><td>Abluftschlauch schlecht verlegt oder geknickt</td><td>Schlauch begradigen und nach draussen fuhren</td></tr>
<tr><td>Sehr schwacher Luftstrom</td><td>Verstopfter Filter</td><td>Filter reinigen oder ersetzen</td></tr>
<tr><td>Schaltet sich nach Minuten ab</td><td>Kondensatbehalter voll</td><td>Wassertank leeren</td></tr>
<tr><td>Lauft, aber Raum wird nicht kuhler</td><td>Zu wenig BTU fur die Flache</td><td>Flache verkleinern oder Leistung erhohen</td></tr>
<tr><td>Kuhlt viel weniger als fruher</td><td>Mogliches Kaltemittel-Leck</td><td>Zertifizierten Techniker rufen</td></tr>
</tbody>
</table>

<h2>Ursache 1: der Modus ist falsch eingestellt</h2>
<p>Klingt banal, ist aber die Ursache Nummer eins fur Scheinfehler. Viele Gerate starten im Ventilatormodus (Fan) oder Entfeuchtungsmodus (Dry), die Luft bewegen oder Feuchtigkeit entfernen, ohne die Temperatur wirklich zu senken. Startet der Kompressor nie, kuhlt das Gerat nie.</p>
<ul>
<li>Drucken Sie die Mode-Taste, bis die Schneeflocke oder Cool erscheint.</li>
<li>Stellen Sie die Solltemperatur mehrere Grad unter die aktuelle Raumtemperatur.</li>
<li>Prufen Sie, ob der Kompressor nach ein bis zwei Minuten anlauft (tiefes Brummen).</li>
<li>Deaktivieren Sie Timer und Eco-Modus wahrend des Tests.</li>
</ul>

<h2>Ursache 2: der Abluftschlauch ist schlecht installiert</h2>
<p>Mit Abstand die haufigste Ursache. Eine mobile Klimaanlage entzieht dem Raum Warme und gibt sie uber den Abluftschlauch nach draussen ab. Verlasst diese warme Luft den Raum nicht wirklich, kommt sie zuruck und hebt die Kuhlung auf. Es ist der haufigste Fehler und zugleich der am leichtesten zu behebende, ganz ohne Kosten.</p>
<p>Ein oft ubersehenes Detail: Je langer und verwinkelter der Schlauch, desto mehr heizt sich seine Oberflache auf und strahlt Warme in den Raum zuruck. Die Schlauchtemperatur ist ein guter Hinweis: Fuhlt sich sein Endstuck nach einer Weile sehr heiss an, ist der Weg wahrscheinlich zu lang oder hat Knicke.</p>
<h3>So prufen und korrigieren Sie den Schlauch</h3>
<ul>
<li>Der Schlauch muss direkt zu einem Fenster oder Aussenauslass fuhren, nicht im Raum kreisen.</li>
<li>Halten Sie ihn so kurz und gerade wie moglich: jeder Knick und Meter mindert die Leistung.</li>
<li>Vermeiden Sie Knicke, Quetschungen oder U-Formen: warme Luft staut sich und stromt zuruck.</li>
<li>Prufen Sie, dass der Schlauch fest am hinteren Auslass sitzt.</li>
<li>Verlangern Sie den Schlauch nicht mit Eigenbauten und ersetzen Sie ihn nicht durch einen langeren: seine Lange ist auf den Luftstrom des Gerats abgestimmt.</li>
</ul>

<h2>Ursache 3: schlechte Fensterabdichtung</h2>
<p>Es bringt nichts, warme Luft hinauszublasen, wenn Aussenluft um den Schlauch wieder hereinkommt. Die meisten Gerate haben dafur ein Fensterabdichtungs-Set.</p>
<ul>
<li>Montieren Sie das mitgelieferte Set; fehlt es, gibt es gunstige Universalpaneele.</li>
<li>Dichten Sie Lucken um den Schlauch mit Klebeband oder Schaumstoff ab.</li>
<li>Schliessen Sie Turen und Fenster und lassen Sie tagsuber die Rollladen herunter.</li>
<li>Bei einem Dreh-Kipp-Fenster suchen Sie ein passendes Set: die dreieckigen Lucken lassen sehr viel Warme herein.</li>
</ul>
<p>Ein einfacher Test: Halten Sie bei laufendem Gerat die Hand an den Fensterrahmen und an die Schlauchabdichtung. Spuren Sie einen warmen Luftstrom hereinkommen, haben Sie ein Leck gefunden, das die Arbeit des Gerats zunichtemacht.</p>

<h2>Ursache 4: der Filter ist verstopft</h2>
<p>Der Filter fangt Staub ab. Ist er verstopft, saugt das Gerat weniger Luft an, der Luftstrom sinkt und die Kuhlleistung bricht ein. Eine oft vergessene Grundwartung.</p>
<ul>
<li>Finden Sie den Filter (meist hinter einem Gitter hinten oder seitlich) und nehmen Sie ihn heraus.</li>
<li>Reinigen Sie ihn mit lauwarmem Wasser und milder Seife, oder saugen Sie den Staub vorsichtig ab.</li>
<li>Lassen Sie ihn vollstandig trocknen: ein feuchter Filter begunstigt Schimmel.</li>
<li>Wiederholen Sie das alle zwei bis drei Wochen bei intensiver Nutzung.</li>
</ul>

<h2>Ursache 5: der Kondensatbehalter ist voll</h2>
<p>Beim Kuhlen entsteht Wasser durch Kondensation. Manche Modelle verdampfen es, andere sammeln es in einem internen Behalter. Ist er voll, stoppt ein Sicherheitssensor den Kompressor: der Ventilator lauft, kuhlt aber nicht, manchmal mit Code "FL" oder "Full".</p>
<ul>
<li>Leeren Sie den Wassertank laut Anleitung.</li>
<li>Falls moglich, schliessen Sie einen Dauerablaufschlauch an.</li>
<li>Prufen Sie, dass der Ablaufstopfen nach dem Leeren gut geschlossen ist.</li>
</ul>

<h2>Ursache 6: der Raum ist zu gross (zu wenig BTU)</h2>
<p>Lauft das Gerat einwandfrei, kuhlt der Raum aber nicht genug, fehlt wohl Leistung. Die Kuhlleistung wird in BTU pro Stunde gemessen. Ein kleines Gerat in einem grossen Wohnzimmer kann auf Volllast laufen, ohne je den Sollwert zu erreichen, wie ein kleines, voll beladenes Auto, das eine Steigung kaum schafft.</p>
<p>Das ist ein zentraler Punkt beim Kauf und eine haufige Enttauschungsquelle: Viele wahlen das Modell nach dem Preis und landen bei einem Gerat, das fur ihr Wohnzimmer zu klein ist. Die richtige BTU-Auslegung entscheidet, ob ein Gerat wirklich kuhlt oder nur Larm macht.</p>
<h3>Wie viele BTU nach Flache</h3>
<table>
<thead>
<tr><th>Raumflache</th><th>Empfohlene BTU</th></tr>
</thead>
<tbody>
<tr><td>Bis 15 m2</td><td>7.000 - 9.000 BTU</td></tr>
<tr><td>15 - 25 m2</td><td>9.000 - 12.000 BTU</td></tr>
<tr><td>25 - 35 m2</td><td>12.000 - 14.000 BTU</td></tr>
<tr><td>35 - 45 m2</td><td>14.000 - 18.000 BTU</td></tr>
</tbody>
</table>
<p>Richtwerte fur einen Standardraum. Starke Sonne, Dachgeschoss, hohe Decken oder viele Gerate: eine Stufe hoher. Ein zu kleines Gerat erreicht den Sollwert nie und verbraucht mehr. Zum Vergleich von Leistung und Verbrauch siehe unseren <a href="/de/blog/climatiseur-mobile-vs-ventilateur">Vergleich nach Raumgrosse</a>.</p>

<h2>Ursache 7: extreme Aussentemperatur</h2>
<p>Bei einer Hitzewelle mit 40 Grad draussen verliert auch ein gut dimensioniertes Gerat Leistung: es muss Warme an bereits sehr heisse Luft abgeben. Das ist kein Defekt, sondern eine physikalische Grenze.</p>
<ul>
<li>Schliessen Sie tagsuber Rollladen und Vorhange.</li>
<li>Schalten Sie das Gerat ein, bevor der Raum zum Backofen wird.</li>
<li>Jagen Sie nicht 18 Grad: ein realistischer Unterschied von 5 bis 8 Grad bringt schon viel Komfort.</li>
</ul>

<h2>Ursache 8: mogliches Kaltemittel-Leck</h2>
<p>Ist alles andere ausgeschlossen und kuhlte das Gerat fruher gut, jetzt aber kaum, kann ein Kaltemittel-Leck vorliegen. Ohne korrekte Gasfullung lauft der Kompressor, ubertragt aber keine Warme mehr.</p>
<p>Vorsicht: Kaltemittel steht unter Druck und seine Handhabung ist gesetzlich geregelt. Versuchen Sie nie, es selbst nachzufullen oder den Kreislauf zu offnen. Das muss immer ein in fluorierten Gasen zertifizierter Techniker erledigen. Der Umgang mit einem Kaltemittelkreislauf ohne Ausbildung ist nicht nur illegal, sondern kann Kalteverbrennungen verursachen und den Kompressor irreversibel schadigen.</p>
<p>Denken Sie daran: Ein Leck ist bei einem neuen, gut genutzten Gerat nicht normal. Ist Ihr Gerat erst wenige Monate alt und verliert scheinbar schon Gas, machen Sie die Garantie beim Handler geltend, statt selbst etwas zu offnen.</p>

<h2>Wann den Kundendienst rufen</h2>
<p>Sie haben Modus, Schlauch, Abdichtung, Filter und Behalter gepruft, das Gerat ist korrekt dimensioniert und kuhlt trotzdem nicht. Dann kontaktieren Sie den Kundendienst, besonders bei:</p>
<ul>
<li>Brandgeruch, Funken oder ausgeloster Sicherung.</li>
<li>Ungewohnlichen metallischen Kompressorgerauschen.</li>
<li>Fehlercodes, die das Handbuch nicht lost.</li>
<li>Verdacht auf Gasleck (allmahlicher Leistungsverlust).</li>
</ul>
<p>Bei Garantie das Gerat nicht offnen. Fur Komfort das ganze Jahr siehe auch unseren <a href="/de/blog/deshumidificateur-connecte-guide">Ratgeber zu vernetzten Entfeuchtern</a>.</p>

<h2>Gute Gewohnheiten fur besseres Kuhlen jeden Sommer</h2>
<p>Uber die einmalige Diagnose hinaus helfen ein paar einfache Gewohnheiten, dass Ihre mobile Klimaanlage ihr Bestes gibt und langer halt. Die Idee: dem Gerat helfen, nicht aus einem bereits uberhitzten Raum zu starten und ungehindert zu atmen.</p>
<ul>
<li>Schalten Sie es an heissen Tagen vorausschauend ein, statt zu warten, bis der Raum ein Backofen ist.</li>
<li>Halten Sie die Luftein- und -auslassgitter frei: stellen Sie das Gerat nicht an die Wand und decken Sie es nicht ab.</li>
<li>Reinigen Sie den Filter regelmassig und lagern Sie ihn am Saisonende sauber und trocken, um Geruche im nachsten Sommer zu vermeiden.</li>
<li>Erganzen Sie die Anlage mit gutem Hitzeschutz: Markisen, heruntergelassene Rollladen und nachtliches Luften, wenn es kuhler wird.</li>
<li>Kombinieren Sie sie bei Bedarf mit einem Ventilator, um die kuhle Luft im Raum zu verteilen, ohne den Verbrauch zu erhohen.</li>
</ul>
<p>Mit diesen Gewohnheiten arbeitet das Gerat fur denselben Komfort weniger, was sich an der Temperatur wie an der Rechnung zeigt.</p>

<h2>Fazit</h2>
<p>Eine mobile Klimaanlage, die nicht kuhlt, ist selten ein Totalschaden. Prufen Sie der Reihe nach Modus, Abluftschlauch, Abdichtung, Filter und Kondensatbehalter und stellen Sie sicher, dass die BTU zur Flache passen. Diese Schritte losen die grosse Mehrheit der Falle. Erst danach werden ein Gasleck und ein zertifizierter Techniker relevant.</p>`,

    it: `<h2>Il mio climatizzatore portatile non raffredda: da dove iniziare</h2>
<p>E uno dei guasti piu frustranti dell'estate: colleghi l'apparecchio, lo imposti a 18 gradi, lo lasci acceso per ore e la stanza resta calda come prima. La buona notizia e che nella stragrande maggioranza dei casi, quando un climatizzatore portatile non raffredda, non si tratta di un guasto grave ma di un problema di installazione, manutenzione o dimensionamento che puoi risolvere da solo in pochi minuti.</p>
<p>Prima di chiamare l'assistenza o comprare un nuovo apparecchio, conviene fare una diagnosi metodica. In questa guida passiamo in rassegna le vere cause, dalla piu frequente alla piu grave, con soluzioni concrete passo passo. Se stai ancora scegliendo il sistema piu adatto, consulta il nostro <a href="/it/blog/climatiseur-mobile-vs-ventilateur">confronto climatizzatore portatile vs ventilatore</a>.</p>
<p>Tieni a mente un'idea di partenza: un climatizzatore portatile monotubo non funziona come uno split fisso a parete. E molto piu sensibile all'installazione, alle dimensioni della stanza e alla temperatura esterna. Spesso, quando non raffredda abbastanza, non e affatto guasto: sta solo lottando contro condizioni sfavorevoli facili da migliorare. Vediamole una a una, partendo dai controlli di un minuto e lasciando per ultimi i guasti che richiedono un professionista.</p>

<h2>Tabella di diagnosi rapida</h2>
<table>
<thead>
<tr><th>Sintomo</th><th>Causa probabile</th><th>Soluzione</th></tr>
</thead>
<tbody>
<tr><td>Esce aria ne fredda ne calda</td><td>Modalita ventilatore invece di raffreddamento</td><td>Passa alla modalita Cool / Freddo (fiocco di neve)</td></tr>
<tr><td>Raffredda poco e il tubo scotta</td><td>Tubo di scarico mal posizionato o piegato</td><td>Raddrizza il tubo e portalo fuori dalla finestra</td></tr>
<tr><td>Flusso d'aria molto debole</td><td>Filtro sporco</td><td>Pulisci o sostituisci il filtro</td></tr>
<tr><td>Si spegne da solo dopo pochi minuti</td><td>Serbatoio di condensa pieno</td><td>Svuota il serbatoio dell'acqua</td></tr>
<tr><td>Funziona ma la stanza non si raffredda</td><td>BTU insufficienti per la superficie</td><td>Riduci la superficie o aumenta la potenza</td></tr>
<tr><td>Raffredda molto meno di prima</td><td>Possibile perdita di gas</td><td>Chiama un tecnico certificato</td></tr>
</tbody>
</table>

<h2>Causa 1: la modalita e impostata male</h2>
<p>Sembra banale, ma e la causa numero uno dei falsi guasti. Molti apparecchi partono in modalita ventilatore (Fan) o deumidificazione (Dry), che muovono l'aria o tolgono umidita senza abbassare davvero la temperatura. Se il compressore non parte, l'apparecchio non raffreddera mai.</p>
<ul>
<li>Premi il tasto Mode finche non compare il fiocco di neve o la scritta Cool / Freddo.</li>
<li>Imposta la temperatura desiderata diversi gradi sotto quella attuale della stanza.</li>
<li>Verifica di sentire il compressore avviarsi (un ronzio grave) dopo uno o due minuti.</li>
<li>Disattiva timer e modalita Eco durante la prova.</li>
</ul>

<h2>Causa 2: il tubo di scarico e installato male</h2>
<p>E di gran lunga la causa piu frequente. Un climatizzatore portatile estrae il calore dalla stanza e lo espelle all'esterno tramite il tubo di scarico. Se quell'aria calda non esce davvero dalla stanza, rientra e annulla l'effetto raffreddante. E l'errore piu diffuso e, allo stesso tempo, il piu facile da correggere senza spendere un euro.</p>
<p>Un dettaglio che molti ignorano: piu il tubo e lungo e contorto, piu la sua superficie si scalda e irradia calore nella stanza. La temperatura del tubo e un buon indizio: se il tratto finale e molto caldo al tatto dopo un po', il percorso e probabilmente troppo lungo o ha delle pieghe.</p>
<h3>Come controllare e correggere il tubo</h3>
<ul>
<li>Il tubo deve andare diritto a una finestra o a un'uscita esterna, mai girare nella stanza.</li>
<li>Tienilo il piu corto e dritto possibile: ogni curva e ogni metro in piu riducono il rendimento.</li>
<li>Evita pieghe, schiacciamenti o forme a U: l'aria calda si accumula e rientra.</li>
<li>Controlla che il tubo sia ben inserito nell'uscita posteriore e non si sia staccato.</li>
<li>Non allungare il tubo con soluzioni fai-da-te ne sostituirlo con uno piu lungo: la sua lunghezza e calcolata per la portata d'aria dell'apparecchio.</li>
</ul>

<h2>Causa 3: cattiva sigillatura della finestra</h2>
<p>Inutile espellere aria calda se dall'apertura attorno al tubo rientra aria calda. Quasi tutti gli apparecchi hanno un kit di sigillatura della finestra proprio per questo.</p>
<ul>
<li>Installa il kit in dotazione; se manca, esistono pannelli universali economici.</li>
<li>Sigilla gli spazi attorno al tubo con nastro o guarnizione in schiuma.</li>
<li>Chiudi porte e finestre e abbassa le tapparelle nelle ore piu calde.</li>
<li>Su una finestra a vasistas, cerca un kit specifico: gli spazi triangolari che lasciano fanno entrare moltissimo calore.</li>
</ul>
<p>Una prova semplice: con l'apparecchio acceso, avvicina la mano al contorno della finestra e alla sigillatura del tubo. Se senti una corrente di aria calda entrare, hai trovato una perdita che vanifica il lavoro dell'apparecchio.</p>

<h2>Causa 4: il filtro e sporco</h2>
<p>Il filtro trattiene la polvere. Quando si intasa, l'apparecchio aspira meno aria, il flusso cala e la capacita di raffreddare crolla. E una manutenzione di base spesso dimenticata.</p>
<ul>
<li>Individua il filtro (di solito dietro una griglia sul retro o sul lato) e rimuovilo.</li>
<li>Puliscilo con acqua tiepida e sapone neutro, oppure aspira la polvere con delicatezza.</li>
<li>Lascialo asciugare completamente: un filtro umido favorisce muffe e cattivi odori.</li>
<li>Ripeti ogni due o tre settimane durante l'uso intenso.</li>
</ul>

<h2>Causa 5: il serbatoio di condensa e pieno</h2>
<p>Raffreddando, l'apparecchio produce acqua per condensazione. Alcuni modelli la evaporano, altri la raccolgono in un serbatoio interno. Quando e pieno, un sensore di sicurezza ferma il compressore: la ventola soffia ma non raffredda, a volte con un codice "FL" o "Full".</p>
<ul>
<li>Svuota il serbatoio dell'acqua seguendo il manuale.</li>
<li>Se possibile, collega un tubo di scarico continuo per evitare di svuotarlo a mano.</li>
<li>Verifica che il tappo di scarico sia ben chiuso dopo lo svuotamento.</li>
</ul>

<h2>Causa 6: la stanza e troppo grande (BTU insufficienti)</h2>
<p>Se l'apparecchio funziona ma la stanza non si raffredda abbastanza, probabilmente manca potenza. La potenza frigorifera si misura in BTU all'ora. Un piccolo apparecchio in un grande soggiorno puo girare al massimo senza mai raggiungere la temperatura impostata, come una piccola auto carica che fatica in salita.</p>
<p>E un punto chiave al momento dell'acquisto e una causa comune di delusione: molti scelgono il modello in base al prezzo e si ritrovano con un apparecchio troppo piccolo per il loro soggiorno. Dimensionare bene i BTU e cio che distingue un apparecchio che raffredda davvero da uno che fa solo rumore.</p>
<h3>Quanti BTU in base alla superficie</h3>
<table>
<thead>
<tr><th>Superficie della stanza</th><th>BTU consigliati</th></tr>
</thead>
<tbody>
<tr><td>Fino a 15 m2</td><td>7.000 - 9.000 BTU</td></tr>
<tr><td>15 - 25 m2</td><td>9.000 - 12.000 BTU</td></tr>
<tr><td>25 - 35 m2</td><td>12.000 - 14.000 BTU</td></tr>
<tr><td>35 - 45 m2</td><td>14.000 - 18.000 BTU</td></tr>
</tbody>
</table>
<p>Valori indicativi per una stanza standard. Forte esposizione al sole, sottotetto, soffitti alti o molti apparecchi: sali di un livello. Un apparecchio troppo piccolo non raggiungera mai la temperatura impostata e consumera di piu. Per confrontare potenza e consumo, vedi il nostro <a href="/it/blog/climatiseur-mobile-vs-ventilateur">confronto per dimensione della stanza</a>.</p>

<h2>Causa 7: temperatura esterna estrema</h2>
<p>Durante un'ondata di calore, con 40 gradi fuori, anche un apparecchio ben dimensionato perde rendimento: deve cedere calore a un'aria gia molto calda. Non e un guasto, ma un limite fisico.</p>
<ul>
<li>Chiudi tapparelle e tende nelle ore piu calde.</li>
<li>Accendi l'apparecchio prima che la stanza diventi un forno.</li>
<li>Non puntare ai 18 gradi: una differenza realistica di 5-8 gradi rispetto all'esterno gia da grande comfort.</li>
</ul>

<h2>Causa 8: possibile perdita di gas refrigerante</h2>
<p>Se hai escluso tutto il resto e l'apparecchio prima raffreddava bene ma ora quasi nulla, potrebbe esserci una perdita di gas refrigerante. Senza la giusta carica di gas, il compressore gira ma non trasferisce piu calore.</p>
<p>Attenzione: il gas refrigerante e sotto pressione e la sua manipolazione e regolamentata. Non provare mai a ricaricarlo o ad aprire il circuito da solo. Questa operazione deve essere sempre eseguita da un tecnico certificato in gas fluorurati. Maneggiare un circuito di refrigerante senza formazione non e solo illegale, ma puo provocare ustioni da freddo e danneggiare in modo irreversibile il compressore.</p>
<p>Ricorda che una perdita non e normale su un apparecchio nuovo e usato bene. Se il tuo ha pochi mesi e sembra gia perdere gas, fai valere la garanzia presso il venditore invece di aprire qualcosa da solo.</p>

<h2>Quando chiamare l'assistenza</h2>
<p>Hai controllato modalita, tubo, sigillatura, filtro e serbatoio, l'apparecchio e ben dimensionato e ancora non raffredda. Allora contatta l'assistenza, soprattutto se noti:</p>
<ul>
<li>Odore di bruciato, scintille o salto dell'interruttore.</li>
<li>Rumori metallici anomali del compressore.</li>
<li>Codici di errore non risolti dal manuale.</li>
<li>Sospetto di perdita di gas (calo progressivo di prestazioni).</li>
</ul>
<p>Se l'apparecchio e in garanzia, non aprirlo. Per il comfort tutto l'anno, vedi anche la nostra <a href="/it/blog/deshumidificateur-connecte-guide">guida ai deumidificatori connessi</a>.</p>

<h2>Buone abitudini per raffreddare meglio ogni estate</h2>
<p>Oltre alla diagnosi puntuale, poche abitudini semplici fanno rendere al massimo il tuo climatizzatore portatile e lo fanno durare piu a lungo. L'idea e aiutarlo a non partire da una stanza gia surriscaldata e a respirare senza ostacoli.</p>
<ul>
<li>Accendilo in anticipo nei giorni di caldo previsto, invece di aspettare che la stanza diventi un forno.</li>
<li>Tieni libere le griglie di entrata e uscita dell'aria: non addossare l'apparecchio al muro e non coprirlo.</li>
<li>Pulisci il filtro regolarmente e, a fine stagione, riponilo pulito e asciutto per evitare odori l'estate successiva.</li>
<li>Affianca al portatile una buona protezione dal calore: tende da sole, tapparelle abbassate e ventilazione notturna quando rinfresca.</li>
<li>Se serve, combinalo con un ventilatore per distribuire meglio l'aria fresca nella stanza senza aumentare i consumi.</li>
</ul>
<p>Con questi gesti l'apparecchio lavora meno per lo stesso comfort, e si nota sia sulla temperatura sia sulla bolletta.</p>

<h2>Conclusione</h2>
<p>Un climatizzatore portatile che non raffredda raramente e da buttare. In ordine, controlla modalita, tubo di scarico, sigillatura, filtro e serbatoio di condensa, e assicurati che i BTU corrispondano alla superficie. Questi passaggi risolvono la stragrande maggioranza dei casi. Solo dopo diventano rilevanti una perdita di gas e l'intervento di un tecnico certificato.</p>`,

    nl: `<h2>Mijn mobiele airco koelt niet: waar begin je</h2>
<p>Het is een van de meest frustrerende zomerproblemen: je steekt het apparaat in het stopcontact, zet het op 18 graden, laat het uren draaien en de kamer blijft net zo warm. Het goede nieuws is dat in de meeste gevallen, wanneer een mobiele airco niet koelt, het geen ernstige storing is maar een installatie-, onderhouds- of dimensioneringsprobleem dat je zelf in een paar minuten oplost.</p>
<p>Voordat je de servicedienst belt of een nieuw apparaat koopt, doe je beter een methodische diagnose. In deze gids lopen we de echte oorzaken door, van de meest voorkomende tot de ernstigste, met concrete stapsgewijze oplossingen. Twijfel je nog welk systeem bij je past, bekijk dan onze <a href="/nl/blog/climatiseur-mobile-vs-ventilateur">vergelijking mobiele airco vs ventilator</a>.</p>
<p>Houd een uitgangspunt in gedachten: een mobiele airco met een slang werkt niet als een vaste split aan de muur. Hij is veel gevoeliger voor de installatie, de grootte van de kamer en de buitentemperatuur. Vaak is het apparaat helemaal niet kapot als het niet genoeg koelt, maar vecht het tegen ongunstige omstandigheden die makkelijk te verbeteren zijn. Laten we ze een voor een bekijken, te beginnen met de checks van een minuut en met de storingen die een vakman vereisen helemaal aan het eind.</p>

<h2>Snelle diagnosetabel</h2>
<table>
<thead>
<tr><th>Symptoom</th><th>Waarschijnlijke oorzaak</th><th>Oplossing</th></tr>
</thead>
<tbody>
<tr><td>Er komt lucht uit, niet koud niet warm</td><td>Ventilatorstand in plaats van koelen</td><td>Zet op Cool-stand (sneeuwvlok)</td></tr>
<tr><td>Koelt weinig en de slang is heet</td><td>Afvoerslang slecht geplaatst of geknikt</td><td>Maak de slang recht en leid hem naar buiten</td></tr>
<tr><td>Zeer zwakke luchtstroom</td><td>Vervuild filter</td><td>Reinig of vervang het filter</td></tr>
<tr><td>Slaat na een paar minuten af</td><td>Condensbak vol</td><td>Leeg het waterreservoir</td></tr>
<tr><td>Draait maar de kamer wordt niet koeler</td><td>Te weinig BTU voor de oppervlakte</td><td>Verklein de ruimte of verhoog het vermogen</td></tr>
<tr><td>Koelt veel minder dan vroeger</td><td>Mogelijk koelgaslek</td><td>Bel een gecertificeerde technicus</td></tr>
</tbody>
</table>

<h2>Oorzaak 1: de stand is verkeerd ingesteld</h2>
<p>Het klinkt onbenullig, maar het is oorzaak nummer een van schijnstoringen. Veel apparaten starten in de ventilatorstand (Fan) of ontvochtigingsstand (Dry), die lucht verplaatsen of vocht verwijderen zonder de temperatuur echt te verlagen. Start de compressor nooit, dan koelt het apparaat nooit.</p>
<ul>
<li>Druk op de Mode-knop tot de sneeuwvlok of het woord Cool verschijnt.</li>
<li>Zet de streeftemperatuur enkele graden onder de huidige kamertemperatuur.</li>
<li>Controleer of je de compressor hoort starten (een laag gebrom) na een tot twee minuten.</li>
<li>Schakel de timer en Eco-stand uit tijdens de test.</li>
</ul>

<h2>Oorzaak 2: de afvoerslang is slecht geinstalleerd</h2>
<p>Veruit de meest voorkomende oorzaak. Een mobiele airco onttrekt warmte aan de kamer en voert die via de afvoerslang naar buiten af. Verlaat die warme lucht de kamer niet echt, dan komt ze terug en heft het koeleffect op. Het is de meest voorkomende fout en tegelijk de makkelijkste om gratis te verhelpen.</p>
<p>Een detail dat velen niet kennen: hoe langer en gedraaider de slang, hoe meer het oppervlak opwarmt en warmte terugstraalt in de kamer. De slangtemperatuur is een goede aanwijzing: voelt het laatste stuk na een tijdje erg heet aan, dan is het traject waarschijnlijk te lang of zitten er knikken in.</p>
<h3>Hoe controleer en corrigeer je de slang</h3>
<ul>
<li>De slang moet recht naar een raam of buitenuitgang lopen, nooit in de kamer rondgaan.</li>
<li>Houd hem zo kort en recht mogelijk: elke bocht en extra meter vermindert de prestatie.</li>
<li>Vermijd knikken, pletten of U-vormen: warme lucht hoopt zich op en stroomt terug.</li>
<li>Controleer of de slang goed op de achteruitlaat zit en niet is losgeraakt.</li>
<li>Verleng de slang niet met zelfgemaakte stukken en vervang hem niet door een langere: de lengte is afgestemd op de luchtstroom van het apparaat.</li>
</ul>

<h2>Oorzaak 3: slechte raamafdichting</h2>
<p>Het heeft geen zin warme lucht naar buiten te blazen als rond de slang weer buitenlucht binnenkomt. De meeste apparaten worden hiervoor met een raamafdichtingsset geleverd.</p>
<ul>
<li>Monteer de meegeleverde set; ontbreekt die, dan zijn er goedkope universele panelen.</li>
<li>Dicht kieren rond de slang af met tape of schuimstrip.</li>
<li>Sluit deuren en ramen en laat de rolluiken zakken tijdens de heetste uren.</li>
<li>Zoek bij een kantel-draairaam een specifieke kit: de driehoekige openingen die ze laten, voeren enorm veel warmte aan.</li>
</ul>
<p>Een eenvoudige test: houd met het apparaat aan je hand bij het raamkozijn en de slangafdichting. Voel je een warme luchtstroom binnenkomen, dan heb je een lek gevonden dat het werk van het apparaat tenietdoet.</p>

<h2>Oorzaak 4: het filter is vervuild</h2>
<p>Het filter houdt stof tegen. Als het verstopt raakt, zuigt het apparaat minder lucht aan, daalt de luchtstroom en stort de koelcapaciteit in. Een basisonderhoud dat vaak wordt vergeten.</p>
<ul>
<li>Zoek het filter (meestal achter een rooster aan de achter- of zijkant) en verwijder het.</li>
<li>Reinig het met lauw water en milde zeep, of zuig het stof voorzichtig op.</li>
<li>Laat het volledig drogen: een vochtig filter bevordert schimmel.</li>
<li>Herhaal dit om de twee a drie weken bij intensief gebruik.</li>
</ul>

<h2>Oorzaak 5: de condensbak is vol</h2>
<p>Bij het koelen produceert het apparaat water door condensatie. Sommige modellen verdampen het, andere verzamelen het in een interne bak. Als die vol is, stopt een veiligheidssensor de compressor: de ventilator blaast nog maar koelt niet meer, soms met een code "FL" of "Full".</p>
<ul>
<li>Leeg het waterreservoir volgens de handleiding.</li>
<li>Sluit indien mogelijk een continue afvoerslang aan.</li>
<li>Controleer of de afvoerdop na het legen goed gesloten is.</li>
</ul>

<h2>Oorzaak 6: de kamer is te groot (te weinig BTU)</h2>
<p>Draait het apparaat prima maar koelt de kamer niet genoeg, dan ontbreekt waarschijnlijk vermogen. Het koelvermogen wordt gemeten in BTU per uur. Een klein apparaat in een grote woonkamer kan op volle kracht draaien zonder ooit de ingestelde temperatuur te halen, net als een kleine, volgeladen auto die een helling nauwelijks haalt.</p>
<p>Dit is een belangrijk punt bij aankoop en een veelvoorkomende bron van teleurstelling: veel mensen kiezen het model op prijs en zitten met een apparaat dat te klein is voor hun woonkamer. De BTU goed dimensioneren is wat een apparaat dat echt koelt onderscheidt van een dat alleen lawaai maakt.</p>
<h3>Hoeveel BTU per oppervlakte</h3>
<table>
<thead>
<tr><th>Kameroppervlakte</th><th>Aanbevolen BTU</th></tr>
</thead>
<tbody>
<tr><td>Tot 15 m2</td><td>7.000 - 9.000 BTU</td></tr>
<tr><td>15 - 25 m2</td><td>9.000 - 12.000 BTU</td></tr>
<tr><td>25 - 35 m2</td><td>12.000 - 14.000 BTU</td></tr>
<tr><td>35 - 45 m2</td><td>14.000 - 18.000 BTU</td></tr>
</tbody>
</table>
<p>Richtwaarden voor een standaardkamer. Veel zon, zolderkamer, hoge plafonds of veel apparaten: ga een stap hoger. Een te klein apparaat haalt de instelwaarde nooit en verbruikt meer. Om vermogen en verbruik te vergelijken, zie onze <a href="/nl/blog/climatiseur-mobile-vs-ventilateur">vergelijking per kamergrootte</a>.</p>

<h2>Oorzaak 7: extreme buitentemperatuur</h2>
<p>Tijdens een hittegolf, met 40 graden buiten, verliest zelfs een goed gedimensioneerd apparaat prestatie: het moet warmte afgeven aan al zeer warme lucht. Dit is geen storing, maar een fysieke grens.</p>
<ul>
<li>Sluit rolluiken en gordijnen tijdens de heetste uren.</li>
<li>Zet het apparaat aan voordat de kamer een oven wordt.</li>
<li>Jaag niet op 18 graden: een realistisch verschil van 5 tot 8 graden met buiten geeft al veel comfort.</li>
</ul>

<h2>Oorzaak 8: mogelijk koelgaslek</h2>
<p>Als al het andere is uitgesloten en het apparaat vroeger goed koelde maar nu nauwelijks, kan er een koelgaslek zijn. Zonder de juiste gasvulling draait de compressor wel maar verplaatst geen warmte meer.</p>
<p>Wees voorzichtig: koelgas staat onder druk en de behandeling ervan is wettelijk geregeld. Probeer het nooit zelf bij te vullen of het circuit te openen. Dit moet altijd door een in gefluoreerde gassen gecertificeerde technicus gebeuren. Een koelcircuit zonder opleiding behandelen is niet alleen illegaal, maar kan koudeverbrandingen veroorzaken en de compressor onherstelbaar beschadigen.</p>
<p>Onthoud dat een lek niet normaal is bij een nieuw, goed gebruikt apparaat. Is het jouwe een paar maanden oud en lijkt het al gas te verliezen, claim dan de garantie bij de verkoper in plaats van zelf iets te openen.</p>

<h2>Wanneer de servicedienst bellen</h2>
<p>Je hebt stand, slang, afdichting, filter en bak gecontroleerd, het apparaat is goed gedimensioneerd en het koelt nog steeds niet. Neem dan contact op met de servicedienst, vooral als je merkt:</p>
<ul>
<li>Brandlucht, vonken of een doorgeslagen stop.</li>
<li>Abnormale metalen compressorgeluiden.</li>
<li>Foutcodes die de handleiding niet oplost.</li>
<li>Vermoeden van een gaslek (geleidelijk prestatieverlies).</li>
</ul>
<p>Open het apparaat niet als het in garantie is. Voor comfort het hele jaar door, zie ook onze <a href="/nl/blog/deshumidificateur-connecte-guide">gids voor verbonden ontvochtigers</a>.</p>

<h2>Goede gewoonten om elke zomer beter te koelen</h2>
<p>Naast de eenmalige diagnose zorgen een paar eenvoudige gewoonten ervoor dat je mobiele airco optimaal presteert en langer meegaat. Het idee is hem te helpen niet vanuit een al oververhitte kamer te starten en zonder obstakels te ademen.</p>
<ul>
<li>Zet hem op warme dagen op tijd aan, in plaats van te wachten tot de kamer een oven is.</li>
<li>Houd de in- en uitlaatroosters vrij: zet het apparaat niet tegen de muur en dek het niet af.</li>
<li>Reinig het filter regelmatig en berg het aan het einde van het seizoen schoon en droog op om geuren volgende zomer te voorkomen.</li>
<li>Combineer de airco met goede warmtewering: zonneschermen, neergelaten rolluiken en nachtventilatie als het afkoelt.</li>
<li>Combineer hem indien nodig met een ventilator om de koele lucht beter door de kamer te verspreiden zonder het verbruik te verhogen.</li>
</ul>
<p>Met deze gewoonten werkt het apparaat minder voor hetzelfde comfort, wat zowel in de temperatuur als in de rekening te merken is.</p>

<h2>Conclusie</h2>
<p>Een mobiele airco die niet koelt is zelden afgeschreven. Controleer in volgorde de stand, afvoerslang, afdichting, filter en condensbak, en zorg dat de BTU bij de oppervlakte passen. Deze stappen lossen de overgrote meerderheid van de gevallen op. Pas daarna worden een gaslek en een gecertificeerde technicus relevant.</p>`,
  },
  faq: [
    {
      question: {
        fr: 'Pourquoi mon climatiseur portable ne refroidit-il pas ?',
        en: 'Why is my portable air conditioner not cooling?',
        de: 'Warum kuhlt meine mobile Klimaanlage nicht?',
        es: '¿Por qué mi aire acondicionado portátil no enfría?',
        it: 'Perche il mio climatizzatore portatile non raffredda?',
        nl: 'Waarom koelt mijn mobiele airco niet?',
      },
      answer: {
        fr: 'Dans la plupart des cas, c\'est un probleme simple : appareil en mode ventilateur au lieu de froid, tuyau d\'evacuation plie ou mal sorti par la fenetre, filtre encrasse ou bac a condensats plein. Verifiez ces points dans cet ordre. Si l\'appareil tourne mais que la piece reste chaude, il manque peut-etre des BTU pour la surface.',
        en: 'In most cases it is something simple: the unit is in fan mode instead of cooling, the exhaust hose is kinked or not properly routed out the window, the filter is clogged, or the condensate tank is full. Check these in that order. If the unit runs but the room stays hot, it may lack BTU for the area.',
        de: 'Meist ist es etwas Einfaches: das Gerat ist im Ventilatormodus statt Kuhlen, der Abluftschlauch ist geknickt oder nicht richtig nach draussen gefuhrt, der Filter ist verstopft oder der Kondensatbehalter ist voll. Prufen Sie das in dieser Reihenfolge. Lauft das Gerat, bleibt der Raum aber warm, fehlen vielleicht BTU.',
        es: 'En la mayoría de los casos es algo sencillo: el equipo está en modo ventilador en vez de frío, el tubo de evacuación está doblado o mal sacado por la ventana, el filtro está sucio o el depósito de condensación está lleno. Revisa estos puntos en ese orden. Si el aparato funciona pero la habitación sigue caliente, puede faltarle BTU para la superficie.',
        it: 'Nella maggior parte dei casi e qualcosa di semplice: l\'apparecchio e in modalita ventilatore invece che freddo, il tubo di scarico e piegato o mal portato fuori dalla finestra, il filtro e sporco o il serbatoio di condensa e pieno. Controlla questi punti in quest\'ordine. Se funziona ma la stanza resta calda, potrebbero mancare BTU.',
        nl: 'Meestal is het iets eenvoudigs: het apparaat staat in de ventilatorstand in plaats van koelen, de afvoerslang is geknikt of niet goed naar buiten geleid, het filter is vervuild of de condensbak is vol. Controleer deze punten in die volgorde. Draait het apparaat maar blijft de kamer warm, dan ontbreken mogelijk BTU.',
      },
    },
    {
      question: {
        fr: 'Combien de BTU me faut-il pour ma piece ?',
        en: 'How many BTU do I need for my room?',
        de: 'Wie viele BTU brauche ich fur meinen Raum?',
        es: '¿Cuántos BTU necesito para mi habitación?',
        it: 'Quanti BTU mi servono per la mia stanza?',
        nl: 'Hoeveel BTU heb ik nodig voor mijn kamer?',
      },
      answer: {
        fr: 'Comptez environ 7 000 a 9 000 BTU jusqu\'a 15 m2, 9 000 a 12 000 BTU pour 15 a 25 m2, 12 000 a 14 000 BTU pour 25 a 35 m2 et 14 000 a 18 000 BTU pour 35 a 45 m2. Ce sont des reperes pour une piece standard ; montez d\'un cran si la piece est tres ensoleillee, sous les combles ou avec des plafonds hauts.',
        en: 'Roughly 7,000 to 9,000 BTU up to 15 m2, 9,000 to 12,000 BTU for 15 to 25 m2, 12,000 to 14,000 BTU for 25 to 35 m2 and 14,000 to 18,000 BTU for 35 to 45 m2. These are guidelines for a standard room; step up a tier if the room is very sunny, top-floor or has high ceilings.',
        de: 'Etwa 7.000 bis 9.000 BTU bis 15 m2, 9.000 bis 12.000 BTU fur 15 bis 25 m2, 12.000 bis 14.000 BTU fur 25 bis 35 m2 und 14.000 bis 18.000 BTU fur 35 bis 45 m2. Richtwerte fur einen Standardraum; eine Stufe hoher bei viel Sonne, Dachgeschoss oder hohen Decken.',
        es: 'Calcula unos 7.000 a 9.000 BTU hasta 15 m2, 9.000 a 12.000 BTU para 15 a 25 m2, 12.000 a 14.000 BTU para 25 a 35 m2 y 14.000 a 18.000 BTU para 35 a 45 m2. Son orientativos para una habitación estándar; sube un tramo si recibe mucho sol, está bajo cubierta o tiene techos altos.',
        it: 'Calcola circa 7.000 a 9.000 BTU fino a 15 m2, 9.000 a 12.000 BTU per 15-25 m2, 12.000 a 14.000 BTU per 25-35 m2 e 14.000 a 18.000 BTU per 35-45 m2. Sono indicativi per una stanza standard; sali di un livello se e molto soleggiata, in sottotetto o con soffitti alti.',
        nl: 'Reken op ongeveer 7.000 tot 9.000 BTU tot 15 m2, 9.000 tot 12.000 BTU voor 15 tot 25 m2, 12.000 tot 14.000 BTU voor 25 tot 35 m2 en 14.000 tot 18.000 BTU voor 35 tot 45 m2. Dit zijn richtlijnen voor een standaardkamer; ga een stap hoger bij veel zon, een zolderkamer of hoge plafonds.',
      },
    },
    {
      question: {
        fr: 'Le tuyau d\'evacuation peut-il etre la cause du probleme ?',
        en: 'Could the exhaust hose be the cause of the problem?',
        de: 'Kann der Abluftschlauch die Ursache sein?',
        es: '¿Puede ser el tubo de evacuación la causa del problema?',
        it: 'Il tubo di scarico puo essere la causa del problema?',
        nl: 'Kan de afvoerslang de oorzaak van het probleem zijn?',
      },
      answer: {
        fr: 'Oui, c\'est la cause la plus frequente. Si le tuyau est plie, trop long, ou s\'il ne sort pas vraiment l\'air chaud par la fenetre, cet air revient dans la piece et annule le refroidissement. Gardez le tuyau court, droit et bien dirige vers l\'exterieur, et calfeutrez bien la fenetre autour.',
        en: 'Yes, it is the most common cause. If the hose is kinked, too long, or does not really route hot air out the window, that air returns to the room and cancels the cooling. Keep the hose short, straight and pointed outside, and seal the window well around it.',
        de: 'Ja, es ist die haufigste Ursache. Ist der Schlauch geknickt, zu lang oder fuhrt die warme Luft nicht wirklich nach draussen, kommt diese Luft zuruck und hebt die Kuhlung auf. Halten Sie den Schlauch kurz, gerade und nach aussen gerichtet und dichten Sie das Fenster gut ab.',
        es: 'Sí, es la causa más frecuente. Si el tubo está doblado, es demasiado largo o no saca de verdad el aire caliente por la ventana, ese aire vuelve a la habitación y anula el enfriamiento. Mantén el tubo corto, recto y bien dirigido al exterior, y sella bien la ventana alrededor.',
        it: 'Si, e la causa piu frequente. Se il tubo e piegato, troppo lungo o non porta davvero l\'aria calda fuori dalla finestra, quell\'aria rientra nella stanza e annulla il raffreddamento. Tieni il tubo corto, dritto e ben diretto all\'esterno, e sigilla bene la finestra attorno.',
        nl: 'Ja, het is de meest voorkomende oorzaak. Als de slang geknikt is, te lang, of de warme lucht niet echt naar buiten leidt, komt die lucht terug de kamer in en heft het koelen op. Houd de slang kort, recht en naar buiten gericht, en dicht het raam er goed omheen af.',
      },
    },
    {
      question: {
        fr: 'A quelle frequence faut-il nettoyer le filtre ?',
        en: 'How often should I clean the filter?',
        de: 'Wie oft sollte ich den Filter reinigen?',
        es: '¿Con qué frecuencia hay que limpiar el filtro?',
        it: 'Ogni quanto va pulito il filtro?',
        nl: 'Hoe vaak moet ik het filter reinigen?',
      },
      answer: {
        fr: 'En pleine saison d\'utilisation, nettoyez le filtre toutes les deux a trois semaines. Un filtre encrasse reduit le debit d\'air et donc la capacite de refroidissement. Lavez-le a l\'eau tiede avec un savon doux ou aspirez la poussiere, puis laissez-le secher completement avant de le remettre pour eviter moisissures et odeurs.',
        en: 'During peak use, clean the filter every two to three weeks. A clogged filter reduces airflow and therefore cooling capacity. Wash it with lukewarm water and mild soap or vacuum the dust, then let it dry completely before refitting to avoid mould and odours.',
        de: 'In der Hauptsaison alle zwei bis drei Wochen reinigen. Ein verstopfter Filter senkt den Luftstrom und damit die Kuhlleistung. Mit lauwarmem Wasser und milder Seife waschen oder Staub absaugen, dann vollstandig trocknen lassen, um Schimmel und Geruche zu vermeiden.',
        es: 'En plena temporada de uso, limpia el filtro cada dos o tres semanas. Un filtro sucio reduce el caudal de aire y por tanto la capacidad de enfriar. Lávalo con agua tibia y jabón neutro o aspira el polvo, y déjalo secar del todo antes de colocarlo para evitar moho y olores.',
        it: 'In piena stagione, pulisci il filtro ogni due o tre settimane. Un filtro sporco riduce il flusso d\'aria e quindi la capacita di raffreddare. Lavalo con acqua tiepida e sapone neutro o aspira la polvere, poi lascialo asciugare del tutto prima di rimetterlo per evitare muffe e odori.',
        nl: 'In het hoogseizoen het filter om de twee a drie weken reinigen. Een vervuild filter vermindert de luchtstroom en dus de koelcapaciteit. Was het met lauw water en milde zeep of zuig het stof op, en laat het volledig drogen voor terugplaatsing om schimmel en geuren te voorkomen.',
      },
    },
    {
      question: {
        fr: 'Quand dois-je appeler un technicien plutot que de bricoler ?',
        en: 'When should I call a technician instead of fixing it myself?',
        de: 'Wann sollte ich einen Techniker rufen statt selbst zu basteln?',
        es: '¿Cuándo debo llamar a un técnico en lugar de arreglarlo yo?',
        it: 'Quando devo chiamare un tecnico invece di arrangiarmi?',
        nl: 'Wanneer moet ik een technicus bellen in plaats van het zelf te doen?',
      },
      answer: {
        fr: 'Faites appel a un technicien certifie si vous suspectez une fuite de gaz refrigerant (refroidissement qui baisse progressivement), en cas d\'odeur de brule, d\'etincelles, de bruits anormaux ou de codes d\'erreur non resolus. Ne tentez jamais de recharger le gaz vous-meme : il est sous pression et sa manipulation est reglementee. Si l\'appareil est sous garantie, ne l\'ouvrez pas.',
        en: 'Call a certified technician if you suspect a refrigerant gas leak (cooling that drops progressively), or in case of a burning smell, sparks, abnormal noises or unresolved error codes. Never try to recharge the gas yourself: it is pressurised and its handling is regulated. If the unit is under warranty, do not open it.',
        de: 'Rufen Sie einen zertifizierten Techniker bei Verdacht auf ein Kaltemittel-Leck (allmahlich nachlassende Kuhlung), bei Brandgeruch, Funken, ungewohnlichen Gerauschen oder ungelosten Fehlercodes. Versuchen Sie nie, das Gas selbst nachzufullen: es steht unter Druck und ist reguliert. Bei Garantie das Gerat nicht offnen.',
        es: 'Llama a un técnico certificado si sospechas una fuga de gas refrigerante (enfriamiento que baja poco a poco), o si hay olor a quemado, chispas, ruidos anormales o códigos de error que no se resuelven. No intentes recargar el gas tú mismo: está a presión y su manipulación está regulada. Si el equipo está en garantía, no lo abras.',
        it: 'Chiama un tecnico certificato se sospetti una perdita di gas refrigerante (raffreddamento che cala gradualmente), o in caso di odore di bruciato, scintille, rumori anomali o codici di errore irrisolti. Non provare mai a ricaricare il gas da solo: e sotto pressione e la sua manipolazione e regolamentata. Se in garanzia, non aprire l\'apparecchio.',
        nl: 'Bel een gecertificeerde technicus bij vermoeden van een koelgaslek (koeling die geleidelijk afneemt), of bij brandlucht, vonken, abnormale geluiden of onopgeloste foutcodes. Probeer het gas nooit zelf bij te vullen: het staat onder druk en de behandeling is gereguleerd. Open het apparaat niet als het in garantie is.',
      },
    },
  ],
}
