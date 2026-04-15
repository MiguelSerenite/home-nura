'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'

interface QuizProduct {
  asin: string
  title: string
  price: string
  priceNumeric: number
  image: string
  url: string
  nuraScore: number
  capacity: string
  bestFor: string
}

interface QuizProps {
  products: QuizProduct[]
  currentLang: string
}

type HouseholdSize = 'solo' | 'couple' | 'family' | 'large'
type Budget = 'low' | 'mid' | 'high'
type Priority = 'capacity' | 'value' | 'premium' | 'compact'

interface Answers {
  household: HouseholdSize | null
  budget: Budget | null
  priority: Priority | null
}

interface CompleteAnswers {
  household: HouseholdSize
  budget: Budget
  priority: Priority
}

interface QuestionOption<T> {
  value: T
  label: string
  desc?: string
  icon: string
}

interface QuizLabels {
  kicker: string
  title: string
  subtitle: string
  progress: string
  back: string
  restart: string
  recommend: string
  ourPick: string
  whyTitle: string
  seePrice: string
  questions: {
    household: { title: string; options: QuestionOption<HouseholdSize>[] }
    budget: { title: string; options: QuestionOption<Budget>[] }
    priority: { title: string; options: QuestionOption<Priority>[] }
  }
}

const L: Record<string, QuizLabels> = {
  fr: {
    kicker: 'Quiz personnalisé',
    title: 'Quel airfryer est fait pour vous ?',
    subtitle: '3 questions — recommandation en 30 secondes',
    progress: 'Question',
    back: 'Retour',
    restart: 'Recommencer',
    recommend: 'Notre recommandation',
    ourPick: 'Le choix Nura',
    whyTitle: 'Pourquoi ce modèle',
    seePrice: 'Voir le prix sur Amazon',
    questions: {
      household: {
        title: 'Vous cuisinez pour combien de personnes ?',
        options: [
          { value: 'solo', label: 'Solo', desc: '1 personne', icon: '👤' },
          { value: 'couple', label: 'Couple', desc: '2 personnes', icon: '👥' },
          { value: 'family', label: 'Famille', desc: '3 à 4 personnes', icon: '👨‍👩‍👧' },
          { value: 'large', label: 'Grande famille', desc: '5 personnes et +', icon: '👨‍👩‍👧‍👦' },
        ],
      },
      budget: {
        title: 'Quel est votre budget ?',
        options: [
          { value: 'low', label: 'Économique', desc: 'Moins de 120€', icon: '💶' },
          { value: 'mid', label: 'Milieu de gamme', desc: '120 à 200€', icon: '💰' },
          { value: 'high', label: 'Premium', desc: 'Plus de 200€', icon: '💎' },
        ],
      },
      priority: {
        title: 'Qu\'est-ce qui compte le plus pour vous ?',
        options: [
          { value: 'capacity', label: 'Capacité', desc: 'Cuire beaucoup à la fois', icon: '🍟' },
          { value: 'value', label: 'Rapport qualité-prix', desc: 'Le meilleur pour le budget', icon: '⚖️' },
          { value: 'premium', label: 'Haut de gamme', desc: 'Le meilleur sans compromis', icon: '⭐' },
          { value: 'compact', label: 'Compact', desc: 'Pour petite cuisine', icon: '📏' },
        ],
      },
    },
  },
  en: {
    kicker: 'Personalised quiz',
    title: 'Which air fryer is right for you?',
    subtitle: '3 questions — recommendation in 30 seconds',
    progress: 'Question',
    back: 'Back',
    restart: 'Restart',
    recommend: 'Our recommendation',
    ourPick: 'The Nura pick',
    whyTitle: 'Why this model',
    seePrice: 'See price on Amazon',
    questions: {
      household: {
        title: 'How many people do you cook for?',
        options: [
          { value: 'solo', label: 'Solo', desc: '1 person', icon: '👤' },
          { value: 'couple', label: 'Couple', desc: '2 people', icon: '👥' },
          { value: 'family', label: 'Family', desc: '3 to 4 people', icon: '👨‍👩‍👧' },
          { value: 'large', label: 'Large family', desc: '5+ people', icon: '👨‍👩‍👧‍👦' },
        ],
      },
      budget: {
        title: "What's your budget?",
        options: [
          { value: 'low', label: 'Budget', desc: 'Under £100', icon: '💶' },
          { value: 'mid', label: 'Mid-range', desc: '£100 to £180', icon: '💰' },
          { value: 'high', label: 'Premium', desc: 'Over £180', icon: '💎' },
        ],
      },
      priority: {
        title: 'What matters most to you?',
        options: [
          { value: 'capacity', label: 'Capacity', desc: 'Cook a lot at once', icon: '🍟' },
          { value: 'value', label: 'Value for money', desc: 'Best bang for buck', icon: '⚖️' },
          { value: 'premium', label: 'Top of the line', desc: 'The best, no compromise', icon: '⭐' },
          { value: 'compact', label: 'Compact', desc: 'For a small kitchen', icon: '📏' },
        ],
      },
    },
  },
  de: {
    kicker: 'Personalisiertes Quiz',
    title: 'Welche Heißluftfritteuse passt zu Ihnen?',
    subtitle: '3 Fragen — Empfehlung in 30 Sekunden',
    progress: 'Frage',
    back: 'Zurück',
    restart: 'Neustart',
    recommend: 'Unsere Empfehlung',
    ourPick: 'Die Nura-Wahl',
    whyTitle: 'Warum dieses Modell',
    seePrice: 'Preis auf Amazon sehen',
    questions: {
      household: {
        title: 'Für wie viele Personen kochen Sie?',
        options: [
          { value: 'solo', label: 'Solo', desc: '1 Person', icon: '👤' },
          { value: 'couple', label: 'Paar', desc: '2 Personen', icon: '👥' },
          { value: 'family', label: 'Familie', desc: '3 bis 4 Personen', icon: '👨‍👩‍👧' },
          { value: 'large', label: 'Große Familie', desc: '5+ Personen', icon: '👨‍👩‍👧‍👦' },
        ],
      },
      budget: {
        title: 'Wie hoch ist Ihr Budget?',
        options: [
          { value: 'low', label: 'Budget', desc: 'Unter 120€', icon: '💶' },
          { value: 'mid', label: 'Mittelklasse', desc: '120 bis 200€', icon: '💰' },
          { value: 'high', label: 'Premium', desc: 'Über 200€', icon: '💎' },
        ],
      },
      priority: {
        title: 'Was ist Ihnen am wichtigsten?',
        options: [
          { value: 'capacity', label: 'Kapazität', desc: 'Viel auf einmal zubereiten', icon: '🍟' },
          { value: 'value', label: 'Preis-Leistung', desc: 'Das Beste fürs Geld', icon: '⚖️' },
          { value: 'premium', label: 'Top-Klasse', desc: 'Das Beste ohne Kompromisse', icon: '⭐' },
          { value: 'compact', label: 'Kompakt', desc: 'Für kleine Küchen', icon: '📏' },
        ],
      },
    },
  },
  es: {
    kicker: 'Quiz personalizado',
    title: '¿Qué freidora de aire es para ti?',
    subtitle: '3 preguntas — recomendación en 30 segundos',
    progress: 'Pregunta',
    back: 'Atrás',
    restart: 'Reiniciar',
    recommend: 'Nuestra recomendación',
    ourPick: 'La elección Nura',
    whyTitle: 'Por qué este modelo',
    seePrice: 'Ver precio en Amazon',
    questions: {
      household: {
        title: '¿Para cuántas personas cocinas?',
        options: [
          { value: 'solo', label: 'Solo', desc: '1 persona', icon: '👤' },
          { value: 'couple', label: 'Pareja', desc: '2 personas', icon: '👥' },
          { value: 'family', label: 'Familia', desc: '3 a 4 personas', icon: '👨‍👩‍👧' },
          { value: 'large', label: 'Familia grande', desc: '5+ personas', icon: '👨‍👩‍👧‍👦' },
        ],
      },
      budget: {
        title: '¿Cuál es tu presupuesto?',
        options: [
          { value: 'low', label: 'Económico', desc: 'Menos de 120€', icon: '💶' },
          { value: 'mid', label: 'Gama media', desc: '120 a 200€', icon: '💰' },
          { value: 'high', label: 'Premium', desc: 'Más de 200€', icon: '💎' },
        ],
      },
      priority: {
        title: '¿Qué es lo más importante para ti?',
        options: [
          { value: 'capacity', label: 'Capacidad', desc: 'Cocinar mucho a la vez', icon: '🍟' },
          { value: 'value', label: 'Relación calidad-precio', desc: 'Lo mejor para el presupuesto', icon: '⚖️' },
          { value: 'premium', label: 'Alta gama', desc: 'Lo mejor sin compromiso', icon: '⭐' },
          { value: 'compact', label: 'Compacto', desc: 'Para cocinas pequeñas', icon: '📏' },
        ],
      },
    },
  },
  it: {
    kicker: 'Quiz personalizzato',
    title: 'Quale friggitrice ad aria fa per te?',
    subtitle: '3 domande — consiglio in 30 secondi',
    progress: 'Domanda',
    back: 'Indietro',
    restart: 'Ricomincia',
    recommend: 'Il nostro consiglio',
    ourPick: 'La scelta Nura',
    whyTitle: 'Perché questo modello',
    seePrice: 'Vedi prezzo su Amazon',
    questions: {
      household: {
        title: 'Per quante persone cucini?',
        options: [
          { value: 'solo', label: 'Solo', desc: '1 persona', icon: '👤' },
          { value: 'couple', label: 'Coppia', desc: '2 persone', icon: '👥' },
          { value: 'family', label: 'Famiglia', desc: '3 a 4 persone', icon: '👨‍👩‍👧' },
          { value: 'large', label: 'Famiglia numerosa', desc: '5+ persone', icon: '👨‍👩‍👧‍👦' },
        ],
      },
      budget: {
        title: 'Qual è il tuo budget?',
        options: [
          { value: 'low', label: 'Economico', desc: 'Meno di 120€', icon: '💶' },
          { value: 'mid', label: 'Fascia media', desc: '120 a 200€', icon: '💰' },
          { value: 'high', label: 'Premium', desc: 'Oltre 200€', icon: '💎' },
        ],
      },
      priority: {
        title: 'Cosa conta di più per te?',
        options: [
          { value: 'capacity', label: 'Capacità', desc: 'Cucinare tanto in una volta', icon: '🍟' },
          { value: 'value', label: 'Rapporto qualità-prezzo', desc: 'Il meglio per il budget', icon: '⚖️' },
          { value: 'premium', label: 'Top di gamma', desc: 'Il meglio senza compromessi', icon: '⭐' },
          { value: 'compact', label: 'Compatto', desc: 'Per cucine piccole', icon: '📏' },
        ],
      },
    },
  },
  nl: {
    kicker: 'Gepersonaliseerde quiz',
    title: 'Welke airfryer past bij u?',
    subtitle: '3 vragen — aanbeveling in 30 seconden',
    progress: 'Vraag',
    back: 'Terug',
    restart: 'Opnieuw',
    recommend: 'Onze aanbeveling',
    ourPick: 'De Nura-keuze',
    whyTitle: 'Waarom dit model',
    seePrice: 'Bekijk prijs op Amazon',
    questions: {
      household: {
        title: 'Voor hoeveel personen kookt u?',
        options: [
          { value: 'solo', label: 'Alleen', desc: '1 persoon', icon: '👤' },
          { value: 'couple', label: 'Koppel', desc: '2 personen', icon: '👥' },
          { value: 'family', label: 'Gezin', desc: '3 tot 4 personen', icon: '👨‍👩‍👧' },
          { value: 'large', label: 'Groot gezin', desc: '5+ personen', icon: '👨‍👩‍👧‍👦' },
        ],
      },
      budget: {
        title: 'Wat is uw budget?',
        options: [
          { value: 'low', label: 'Budget', desc: 'Minder dan 120€', icon: '💶' },
          { value: 'mid', label: 'Middenklasse', desc: '120 tot 200€', icon: '💰' },
          { value: 'high', label: 'Premium', desc: 'Meer dan 200€', icon: '💎' },
        ],
      },
      priority: {
        title: 'Wat is het belangrijkst voor u?',
        options: [
          { value: 'capacity', label: 'Capaciteit', desc: 'Veel tegelijk bereiden', icon: '🍟' },
          { value: 'value', label: 'Prijs-kwaliteit', desc: 'Beste voor het geld', icon: '⚖️' },
          { value: 'premium', label: 'Topklasse', desc: 'Het beste zonder compromis', icon: '⭐' },
          { value: 'compact', label: 'Compact', desc: 'Voor kleine keukens', icon: '📏' },
        ],
      },
    },
  },
}

function parseCapacityLitres(cap: string): number {
  const m = cap.match(/([\d.]+)/)
  return m ? parseFloat(m[1]) : 0
}

function scoreProduct(p: QuizProduct, answers: CompleteAnswers): number {
  const capacity = parseCapacityLitres(p.capacity)
  let score = p.nuraScore * 10 // baseline

  // Household fit
  const householdTarget: Record<HouseholdSize, number> = {
    solo: 3.5,
    couple: 5,
    family: 7,
    large: 9,
  }
  const target = householdTarget[answers.household]
  const capGap = Math.abs(capacity - target)
  score -= capGap * 6 // the further from target, the worse

  // Budget fit (based on priceNumeric in local currency)
  const budgetRange: Record<Budget, [number, number]> = {
    low: [0, 120],
    mid: [120, 200],
    high: [200, 1000],
  }
  const [min, max] = budgetRange[answers.budget]
  if (p.priceNumeric < min) score -= (min - p.priceNumeric) * 0.3
  if (p.priceNumeric > max) score -= (p.priceNumeric - max) * 0.6

  // Priority bonus
  if (answers.priority === 'capacity') score += capacity * 3
  if (answers.priority === 'compact') score += Math.max(0, (5 - capacity) * 6)
  if (answers.priority === 'premium') score += p.nuraScore * 5
  if (answers.priority === 'value') {
    const valueRatio = p.nuraScore / Math.max(1, p.priceNumeric / 100)
    score += valueRatio * 10
  }

  return score
}

export default function Quiz({ products, currentLang }: QuizProps) {
  const t = L[currentLang] ?? L.en
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({
    household: null,
    budget: null,
    priority: null,
  })

  const totalSteps = 3

  const recommendation = useMemo(() => {
    if (!answers.household || !answers.budget || !answers.priority) return null
    const complete: CompleteAnswers = {
      household: answers.household,
      budget: answers.budget,
      priority: answers.priority,
    }
    const ranked = [...products]
      .map((p) => ({ p, score: scoreProduct(p, complete) }))
      .sort((a, b) => b.score - a.score)
    return ranked[0]?.p ?? null
  }, [answers, products])

  const handlePick = <K extends keyof Answers>(key: K, value: NonNullable<Answers[K]>) => {
    setAnswers((a) => ({ ...a, [key]: value }))
    setStep((s) => Math.min(s + 1, totalSteps))
  }

  const restart = () => {
    setStep(0)
    setAnswers({ household: null, budget: null, priority: null })
  }

  const goBack = () => setStep((s) => Math.max(0, s - 1))

  const progressPct = step === totalSteps ? 100 : (step / totalSteps) * 100

  return (
    <div className="max-w-3xl mx-auto">
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {/* Progress bar */}
        <div className="h-1.5 bg-slate-100">
          <div
            className="h-full bg-blue-600 transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <div className="p-6 md:p-10">
          {step < totalSteps ? (
            <div>
              <div className="text-[11px] font-bold tracking-[0.35em] uppercase text-blue-600 mb-5">
                {t.progress} {step + 1} / {totalSteps}
              </div>
              {step === 0 && (
                <QuestionBlock
                  title={t.questions.household.title}
                  options={t.questions.household.options}
                  onPick={(v) => handlePick('household', v)}
                />
              )}
              {step === 1 && (
                <QuestionBlock
                  title={t.questions.budget.title}
                  options={t.questions.budget.options}
                  onPick={(v) => handlePick('budget', v)}
                />
              )}
              {step === 2 && (
                <QuestionBlock
                  title={t.questions.priority.title}
                  options={t.questions.priority.options}
                  onPick={(v) => handlePick('priority', v)}
                />
              )}

              {step > 0 && (
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={goBack}
                    className="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    ← {t.back}
                  </button>
                </div>
              )}
            </div>
          ) : (
            recommendation && (
              <div className="text-center">
                <div className="text-[11px] font-bold tracking-[0.35em] uppercase text-blue-600 mb-3">
                  {t.ourPick}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-2">
                  {t.recommend}
                </h3>
                <div className="h-[2px] w-16 bg-blue-600 mx-auto mb-8"></div>

                <div className="max-w-md mx-auto rounded-2xl border border-slate-200 overflow-hidden bg-white">
                  <div className="relative aspect-square bg-slate-100">
                    <Image
                      src={recommendation.image}
                      alt={recommendation.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain p-6"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold tracking-wide uppercase text-blue-600 mb-2">
                      {recommendation.nuraScore}/10 · {recommendation.capacity}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 leading-tight mb-2">
                      {recommendation.title}
                    </h4>
                    <p className="text-sm text-slate-500 mb-5">{recommendation.bestFor}</p>
                    <p className="text-2xl font-black text-slate-900 mb-5">{recommendation.price}</p>
                    <a
                      href={recommendation.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="block w-full rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700 transition-colors"
                    >
                      {t.seePrice}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={restart}
                  className="mt-8 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                >
                  ↻ {t.restart}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

function QuestionBlock<T extends string>({
  title,
  options,
  onPick,
}: {
  title: string
  options: QuestionOption<T>[]
  onPick: (value: T) => void
}) {
  return (
    <div>
      <h3 className="text-2xl md:text-[1.75rem] font-bold tracking-tight leading-tight text-slate-900 mb-8 text-center">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onPick(opt.value)}
            className="group flex items-center gap-4 p-4 md:p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-600 hover:bg-blue-50/40 transition-all text-left"
          >
            <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-slate-100 text-2xl group-hover:bg-blue-100 transition-colors">
              {opt.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm md:text-base font-bold text-slate-900 group-hover:text-blue-700">
                {opt.label}
              </div>
              {opt.desc && (
                <div className="text-xs text-slate-500 mt-0.5">{opt.desc}</div>
              )}
            </div>
            <svg
              className="w-4 h-4 text-slate-300 group-hover:text-blue-600 shrink-0 transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  )
}
