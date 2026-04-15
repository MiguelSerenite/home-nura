'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { SmartKitchenCategory, SmartKitchenProduct } from '@/lib/smart-kitchen-products'

type PainPoint = 'time' | 'precision' | 'monitoring' | 'automation' | 'safety'
type UseFrequency = 'daily' | 'often' | 'weekends' | 'rarely'

interface QuizOption<T extends string> {
  value: T
  label: string
  emoji: string
}

interface QuizDict {
  step: string
  of: string
  q1: string
  q2: string
  options1: QuizOption<PainPoint>[]
  options2: QuizOption<UseFrequency>[]
  resultKicker: string
  resultTitle: (cat: string) => string
  resultWhy: Record<PainPoint, string>
  ctaSeeAll: string
  ctaBuy: string
  restart: string
  skip: string
}

const dicts: Record<string, QuizDict> = {
  fr: {
    step: 'Étape',
    of: 'sur',
    q1: 'Quel est votre plus gros frein en cuisine aujourd\'hui ?',
    q2: 'À quelle fréquence cuisinez-vous maison ?',
    options1: [
      { value: 'time', label: 'Manque de temps', emoji: '⏱️' },
      { value: 'precision', label: 'Précision & pâtisserie', emoji: '⚖️' },
      { value: 'monitoring', label: 'Surveiller cuissons longues', emoji: '🌡️' },
      { value: 'automation', label: 'Routines & automatisation', emoji: '☕' },
      { value: 'safety', label: 'Sécurité & consommation', emoji: '🔌' },
    ],
    options2: [
      { value: 'daily', label: 'Tous les jours', emoji: '🍳' },
      { value: 'often', label: '3 à 5 fois par semaine', emoji: '🍽️' },
      { value: 'weekends', label: 'Week-ends surtout', emoji: '📅' },
      { value: 'rarely', label: 'Rarement', emoji: '🥡' },
    ],
    resultKicker: 'Notre recommandation',
    resultTitle: (cat) => `Commencez par : ${cat}`,
    resultWhy: {
      time: 'Un multicuiseur connecté vous rend une heure par jour sur les cuissons longues : vous lancez, il surveille, vous revenez quand c\'est prêt.',
      precision: 'Une balance connectée transforme la pâtisserie en science : 0,1 g de précision, guidage pas à pas par l\'app, conversions automatiques.',
      monitoring: 'Un thermomètre sans-fil vous évite d\'ouvrir le four ou le barbecue : la sonde reste plantée, vous recevez l\'alerte à cœur sur votre téléphone.',
      automation: 'Une cafetière connectée démarre avant votre réveil — 5 minutes gagnées chaque matin, 30 heures par an. Le confort devient mesurable.',
      safety: 'Une prise connectée surveille la consommation de vos gros appareils et coupe à distance un fer ou une cafetière oubliée. Sécurité + économies.',
    },
    ctaSeeAll: 'Voir tous les modèles',
    ctaBuy: 'Vérifier le prix sur Amazon',
    restart: 'Refaire le quiz',
    skip: 'Passer cette étape',
  },
  en: {
    step: 'Step',
    of: 'of',
    q1: 'What\'s your biggest kitchen pain point right now?',
    q2: 'How often do you cook from scratch?',
    options1: [
      { value: 'time', label: 'Not enough time', emoji: '⏱️' },
      { value: 'precision', label: 'Precision & baking', emoji: '⚖️' },
      { value: 'monitoring', label: 'Monitoring long cooks', emoji: '🌡️' },
      { value: 'automation', label: 'Routines & automation', emoji: '☕' },
      { value: 'safety', label: 'Safety & consumption', emoji: '🔌' },
    ],
    options2: [
      { value: 'daily', label: 'Every day', emoji: '🍳' },
      { value: 'often', label: '3 to 5 times a week', emoji: '🍽️' },
      { value: 'weekends', label: 'Weekends mostly', emoji: '📅' },
      { value: 'rarely', label: 'Rarely', emoji: '🥡' },
    ],
    resultKicker: 'Our recommendation',
    resultTitle: (cat) => `Start with: ${cat}`,
    resultWhy: {
      time: 'A smart multicooker gives you back an hour a day on long cooks: you start it, it watches, you come back when it\'s done.',
      precision: 'A smart scale turns baking into science: 0.1 g precision, step-by-step app guidance, automatic conversions.',
      monitoring: 'A wireless thermometer spares you from opening the oven or barbecue: the probe stays planted, you get the core alert on your phone.',
      automation: 'A smart coffee machine starts before you wake up — 5 minutes saved each morning, 30 hours per year. Comfort becomes measurable.',
      safety: 'A smart plug tracks the consumption of your big appliances and remotely cuts off a forgotten iron or coffee maker. Safety and savings.',
    },
    ctaSeeAll: 'See all models',
    ctaBuy: 'Check price on Amazon',
    restart: 'Restart quiz',
    skip: 'Skip this step',
  },
  de: {
    step: 'Schritt',
    of: 'von',
    q1: 'Was ist aktuell Ihr größtes Küchenproblem?',
    q2: 'Wie oft kochen Sie frisch?',
    options1: [
      { value: 'time', label: 'Zu wenig Zeit', emoji: '⏱️' },
      { value: 'precision', label: 'Präzision & Backen', emoji: '⚖️' },
      { value: 'monitoring', label: 'Lange Garvorgänge überwachen', emoji: '🌡️' },
      { value: 'automation', label: 'Routinen & Automatisierung', emoji: '☕' },
      { value: 'safety', label: 'Sicherheit & Verbrauch', emoji: '🔌' },
    ],
    options2: [
      { value: 'daily', label: 'Jeden Tag', emoji: '🍳' },
      { value: 'often', label: '3 bis 5 Mal pro Woche', emoji: '🍽️' },
      { value: 'weekends', label: 'Hauptsächlich Wochenenden', emoji: '📅' },
      { value: 'rarely', label: 'Selten', emoji: '🥡' },
    ],
    resultKicker: 'Unsere Empfehlung',
    resultTitle: (cat) => `Starten Sie mit: ${cat}`,
    resultWhy: {
      time: 'Ein smarter Multikocher schenkt Ihnen eine Stunde am Tag bei langen Garvorgängen: Sie starten ihn, er überwacht, Sie kommen zurück wenn es fertig ist.',
      precision: 'Eine smarte Waage macht Backen zur Wissenschaft: 0,1 g Präzision, Schritt-für-Schritt-App, automatische Umrechnungen.',
      monitoring: 'Ein kabelloses Thermometer erspart Ihnen das Öffnen der Ofen- oder Grilltür: die Sonde bleibt drin, Sie erhalten die Kernalarm-Benachrichtigung aufs Handy.',
      automation: 'Eine smarte Kaffeemaschine startet vor dem Aufwachen — 5 gewonnene Minuten pro Morgen, 30 Stunden pro Jahr. Komfort wird messbar.',
      safety: 'Eine smarte Steckdose überwacht den Verbrauch Ihrer Großgeräte und schaltet ein vergessenes Bügeleisen aus der Ferne ab. Sicherheit plus Ersparnis.',
    },
    ctaSeeAll: 'Alle Modelle ansehen',
    ctaBuy: 'Preis auf Amazon prüfen',
    restart: 'Quiz neu starten',
    skip: 'Diesen Schritt überspringen',
  },
  es: {
    step: 'Paso',
    of: 'de',
    q1: '¿Cuál es tu mayor obstáculo en la cocina hoy?',
    q2: '¿Con qué frecuencia cocinas caseramente?',
    options1: [
      { value: 'time', label: 'Falta de tiempo', emoji: '⏱️' },
      { value: 'precision', label: 'Precisión y repostería', emoji: '⚖️' },
      { value: 'monitoring', label: 'Vigilar cocciones largas', emoji: '🌡️' },
      { value: 'automation', label: 'Rutinas y automatización', emoji: '☕' },
      { value: 'safety', label: 'Seguridad y consumo', emoji: '🔌' },
    ],
    options2: [
      { value: 'daily', label: 'Todos los días', emoji: '🍳' },
      { value: 'often', label: '3 a 5 veces por semana', emoji: '🍽️' },
      { value: 'weekends', label: 'Sobre todo fines de semana', emoji: '📅' },
      { value: 'rarely', label: 'Raramente', emoji: '🥡' },
    ],
    resultKicker: 'Nuestra recomendación',
    resultTitle: (cat) => `Comienza con: ${cat}`,
    resultWhy: {
      time: 'Una olla multicocción conectada te devuelve una hora al día en cocciones largas: la inicias, supervisa ella, vuelves cuando está listo.',
      precision: 'Una báscula conectada convierte la repostería en ciencia: 0,1 g de precisión, guía paso a paso por la app, conversiones automáticas.',
      monitoring: 'Un termómetro inalámbrico te evita abrir el horno o la barbacoa: la sonda queda dentro, recibes la alerta interior en tu móvil.',
      automation: 'Una cafetera conectada arranca antes de que despiertes — 5 minutos ganados cada mañana, 30 horas al año. El confort se vuelve medible.',
      safety: 'Un enchufe conectado supervisa el consumo de tus grandes aparatos y corta a distancia una plancha o cafetera olvidada. Seguridad y ahorro.',
    },
    ctaSeeAll: 'Ver todos los modelos',
    ctaBuy: 'Comprobar precio en Amazon',
    restart: 'Rehacer el quiz',
    skip: 'Saltar este paso',
  },
  it: {
    step: 'Passo',
    of: 'di',
    q1: 'Qual è il tuo maggior ostacolo in cucina oggi?',
    q2: 'Con che frequenza cucini fatto in casa?',
    options1: [
      { value: 'time', label: 'Mancanza di tempo', emoji: '⏱️' },
      { value: 'precision', label: 'Precisione e pasticceria', emoji: '⚖️' },
      { value: 'monitoring', label: 'Monitorare cotture lunghe', emoji: '🌡️' },
      { value: 'automation', label: 'Routine e automazione', emoji: '☕' },
      { value: 'safety', label: 'Sicurezza e consumo', emoji: '🔌' },
    ],
    options2: [
      { value: 'daily', label: 'Tutti i giorni', emoji: '🍳' },
      { value: 'often', label: '3-5 volte a settimana', emoji: '🍽️' },
      { value: 'weekends', label: 'Soprattutto nei weekend', emoji: '📅' },
      { value: 'rarely', label: 'Raramente', emoji: '🥡' },
    ],
    resultKicker: 'Il nostro consiglio',
    resultTitle: (cat) => `Inizia con: ${cat}`,
    resultWhy: {
      time: 'Una multicottura connessa ti restituisce un\'ora al giorno sulle cotture lunghe: avvii, sorveglia lei, torni quando è pronto.',
      precision: 'Una bilancia connessa trasforma la pasticceria in scienza: 0,1 g di precisione, guida passo-passo dall\'app, conversioni automatiche.',
      monitoring: 'Un termometro wireless ti evita di aprire forno o barbecue: la sonda resta dentro, ricevi l\'allerta al cuore sul telefono.',
      automation: 'Una macchina da caffè connessa parte prima del risveglio — 5 minuti guadagnati ogni mattina, 30 ore l\'anno. Il comfort diventa misurabile.',
      safety: 'Una presa connessa monitora il consumo dei grandi apparecchi e spegne a distanza un ferro o caffettiera dimenticati. Sicurezza e risparmio.',
    },
    ctaSeeAll: 'Vedi tutti i modelli',
    ctaBuy: 'Verifica il prezzo su Amazon',
    restart: 'Rifai il quiz',
    skip: 'Salta questo passo',
  },
  nl: {
    step: 'Stap',
    of: 'van',
    q1: 'Wat is uw grootste knelpunt in de keuken vandaag?',
    q2: 'Hoe vaak kookt u zelf?',
    options1: [
      { value: 'time', label: 'Tijdgebrek', emoji: '⏱️' },
      { value: 'precision', label: 'Precisie en bakken', emoji: '⚖️' },
      { value: 'monitoring', label: 'Lange bereidingen volgen', emoji: '🌡️' },
      { value: 'automation', label: 'Routines en automatisering', emoji: '☕' },
      { value: 'safety', label: 'Veiligheid en verbruik', emoji: '🔌' },
    ],
    options2: [
      { value: 'daily', label: 'Elke dag', emoji: '🍳' },
      { value: 'often', label: '3 tot 5 keer per week', emoji: '🍽️' },
      { value: 'weekends', label: 'Vooral in het weekend', emoji: '📅' },
      { value: 'rarely', label: 'Zelden', emoji: '🥡' },
    ],
    resultKicker: 'Onze aanbeveling',
    resultTitle: (cat) => `Begin met: ${cat}`,
    resultWhy: {
      time: 'Een slimme multicooker geeft u een uur per dag terug bij lange bereidingen: u start, hij bewaakt, u komt terug wanneer het klaar is.',
      precision: 'Een slimme weegschaal maakt bakken tot wetenschap: 0,1 g precisie, stapsgewijze app-begeleiding, automatische conversies.',
      monitoring: 'Een draadloze thermometer bespaart u het openen van oven of barbecue: de sonde blijft erin, u krijgt de kernalert op uw telefoon.',
      automation: 'Een slimme koffiemachine start voor u wakker bent — 5 minuten gewonnen elke ochtend, 30 uur per jaar. Comfort wordt meetbaar.',
      safety: 'Een slimme stekker volgt het verbruik van uw grote apparaten en schakelt op afstand een vergeten strijkijzer of koffiemachine uit. Veiligheid plus besparing.',
    },
    ctaSeeAll: 'Alle modellen bekijken',
    ctaBuy: 'Prijs op Amazon controleren',
    restart: 'Quiz herstarten',
    skip: 'Deze stap overslaan',
  },
}

const painToCategory: Record<PainPoint, SmartKitchenCategory> = {
  time: 'multicuiseurs',
  precision: 'balances',
  monitoring: 'thermometres-viande',
  automation: 'cafetieres',
  safety: 'prises-connectees',
}

const categoryLabels: Record<SmartKitchenCategory, Record<string, string>> = {
  multicuiseurs: {
    fr: 'Multicuiseurs connectés', en: 'Smart multicookers', de: 'Smarte Multikocher',
    es: 'Ollas multicocción conectadas', it: 'Multicottura connesse', nl: 'Slimme multicookers',
  },
  cafetieres: {
    fr: 'Cafetières connectées', en: 'Smart coffee machines', de: 'Smarte Kaffeemaschinen',
    es: 'Cafeteras conectadas', it: 'Macchine da caffè connesse', nl: 'Slimme koffiemachines',
  },
  balances: {
    fr: 'Balances connectées', en: 'Smart scales', de: 'Smarte Waagen',
    es: 'Básculas conectadas', it: 'Bilance connesse', nl: 'Slimme weegschalen',
  },
  'thermometres-viande': {
    fr: 'Thermomètres à viande', en: 'Meat thermometers', de: 'Fleischthermometer',
    es: 'Termómetros de carne', it: 'Termometri per carne', nl: 'Vleesthermometers',
  },
  'prises-connectees': {
    fr: 'Prises connectées', en: 'Smart plugs', de: 'Smarte Steckdosen',
    es: 'Enchufes conectados', it: 'Prese connesse', nl: 'Slimme stekkers',
  },
}

interface SmartKitchenQuizProps {
  productsByCategory: Record<SmartKitchenCategory, SmartKitchenProduct[]>
  currentLang: string
}

export default function SmartKitchenQuiz({ productsByCategory, currentLang }: SmartKitchenQuizProps) {
  const dict = dicts[currentLang] || dicts.fr
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [painPoint, setPainPoint] = useState<PainPoint | null>(null)
  const [frequency, setFrequency] = useState<UseFrequency | null>(null)

  const pick = <T extends string>(setter: (v: T) => void, nextStep: 1 | 2 | 3) => (v: T) => {
    setter(v)
    setStep(nextStep)
  }

  const restart = () => {
    setPainPoint(null)
    setFrequency(null)
    setStep(1)
  }

  // STEP 3: results
  if (step === 3 && painPoint) {
    const category = painToCategory[painPoint]
    const categoryLabel = categoryLabels[category][currentLang] || categoryLabels[category].fr
    const products = (productsByCategory[category] || []).slice(0, 3)
    const why = dict.resultWhy[painPoint]

    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-[11px] font-bold tracking-[0.35em] uppercase text-blue-600 mb-5">
            {dict.resultKicker}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-5">
            {dict.resultTitle(categoryLabel)}
          </h2>
          <div className="h-[2px] w-16 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">{why}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {products.map((p) => (
            <div
              key={p.asin}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow"
            >
              <div className="aspect-square relative bg-slate-50 rounded-xl mb-4 overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.title} — ${p.capacity} — ${p.bestFor}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-3"
                />
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-tight line-clamp-2 mb-2">
                {p.title}
              </h3>
              <p className="text-xl font-black text-slate-900 mb-3">{p.price}</p>
              <a
                href={p.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="mt-auto block w-full rounded-full bg-blue-600 px-3 py-2.5 text-center text-xs font-bold text-white hover:bg-blue-700 transition-colors"
              >
                {dict.ctaBuy}
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/${currentLang}/cuisine-connectee/${category}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-colors"
          >
            <span className="uppercase tracking-[0.15em] text-[11px]">{dict.ctaSeeAll}</span>
            <span>&rarr;</span>
          </Link>
          <button
            type="button"
            onClick={restart}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 text-sm font-bold rounded-full border-2 border-slate-900 hover:bg-slate-50 transition-colors"
          >
            <span className="uppercase tracking-[0.15em] text-[11px]">{dict.restart}</span>
          </button>
        </div>

        {frequency && (
          <div className="mt-8 text-center text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400">
            {dict.options2.find((o) => o.value === frequency)?.label}
          </div>
        )}
      </div>
    )
  }

  // STEPS 1 & 2: questions
  const options = step === 1 ? dict.options1 : dict.options2
  const questionText = step === 1 ? dict.q1 : dict.q2

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400 mb-4">
          {dict.step} {step} {dict.of} 2
        </div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-5 max-w-2xl mx-auto leading-tight">
          {questionText}
        </h2>
        <div className="h-[2px] w-12 bg-blue-600 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {options.map((opt) => {
          const isSelected =
            (step === 1 && painPoint === opt.value) ||
            (step === 2 && frequency === opt.value)
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() =>
                step === 1
                  ? pick<PainPoint>(setPainPoint, 2)(opt.value as PainPoint)
                  : pick<UseFrequency>(setFrequency, 3)(opt.value as UseFrequency)
              }
              className={`flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition duration-200 ${
                isSelected
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50'
              }`}
            >
              <span className="text-2xl shrink-0" aria-hidden="true">
                {opt.emoji}
              </span>
              <span className="text-base font-semibold text-slate-900 leading-snug">
                {opt.label}
              </span>
            </button>
          )
        })}
      </div>

      {step === 2 && (
        <div className="text-center">
          <button
            type="button"
            onClick={() => setStep(3)}
            className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 hover:text-blue-600 transition-colors"
          >
            {dict.skip} &rarr;
          </button>
        </div>
      )}
    </div>
  )
}
