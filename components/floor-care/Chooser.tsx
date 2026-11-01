'use client'

import { useId, useState } from 'react'
import type { FloorCareMarket } from '@/lib/floor-care/config'
import { FLOOR_CARE_UI } from '@/lib/floor-care/ui'

export interface ChooserLink {
  label: string
  href: string
  /** Name of the page or tool the answer leads to. */
  targetLabel: string
}

export interface ChooserItem {
  question: string
  helper: string | null
  answers: readonly ChooserLink[]
}

/**
 * Guide chooser: each question is a radio group; picking an answer shows,
 * in a polite live region, a link to the guide (or the clearance check)
 * that answers it. Nothing navigates on its own (WCAG 3.2.2).
 */
export default function Chooser({ market, questions }: { market: FloorCareMarket; questions: readonly ChooserItem[] }) {
  const ui = FLOOR_CARE_UI[market]
  const id = useId()
  const [selected, setSelected] = useState<Readonly<Record<number, number>>>({})

  if (questions.length === 0) return null
  return (
    <div className="space-y-6">
      {questions.map((question, q) => {
        const answer = selected[q] === undefined ? undefined : question.answers[selected[q]]
        return (
          <fieldset key={q} aria-describedby={question.helper ? `${id}-q${q}-helper` : undefined} className="rounded-2xl border border-slate-200 bg-white p-5">
            <legend className="px-1 text-base font-bold text-slate-900">{question.question}</legend>
            {question.helper && (
              <p id={`${id}-q${q}-helper`} className="mt-1 text-sm text-slate-600">
                {question.helper}
              </p>
            )}
            <div className="mt-3 flex flex-col gap-2">
              {question.answers.map((option, a) => (
                <label
                  key={a}
                  className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-4 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-600 ${
                    selected[q] === a ? 'border-brand-600 bg-brand-50 text-slate-900' : 'border-slate-200 text-slate-700 hover:border-brand-200'
                  }`}
                >
                  <input
                    type="radio"
                    name={`${id}-q${q}`}
                    value={a}
                    checked={selected[q] === a}
                    onChange={() => setSelected((prev) => ({ ...prev, [q]: a }))}
                    className="accent-brand-600"
                  />
                  {option.label}
                </label>
              ))}
            </div>
            <p role="status" aria-live="polite" className="mt-3 min-h-6 text-sm">
              {answer && (
                <a href={answer.href} className="font-semibold text-brand-700 underline-offset-2 hover:underline">
                  {ui.chooserGoTo}: {answer.targetLabel} →
                </a>
              )}
            </p>
          </fieldset>
        )
      })}
    </div>
  )
}
