'use client'

import { useId, useState } from 'react'
import type { FloorCareMarket } from '@/lib/floor-care/config'
import { FLOOR_CARE_UI } from '@/lib/floor-care/ui'
import {
  DEFAULT_CLEARANCE_UNIT,
  clearanceFromInput,
  fitsUnder,
  formatClearance,
  formatHeight,
  inputTextFor,
  type ClearanceInput,
  type ClearanceUnit,
} from '@/lib/floor-care/units'

export interface ClearanceRobot {
  name: string
  /** Manufacturer height, compared as published. */
  heightMm: number
  /** The robot's card in the vacuum guide. */
  href: string
}

const UNITS: readonly ClearanceUnit[] = ['in', 'cm']

/**
 * Under-furniture clearance check: the reader types the gap under their
 * furniture in inches or centimetres (inches first in the US, centimetres
 * in Canada); it is converted to millimetres without rounding and
 * compared with each robot's manufacturer height. Switching unit rewrites
 * the field in the new unit but keeps comparing the exact millimetres.
 */
export default function ClearanceFinder({ market, robots }: { market: FloorCareMarket; robots: readonly ClearanceRobot[] }) {
  const ui = FLOOR_CARE_UI[market].clearance
  const id = useId()
  const [unit, setUnit] = useState<ClearanceUnit>(DEFAULT_CLEARANCE_UNIT[market])
  const [text, setText] = useState('')
  const [clearance, setClearance] = useState<ClearanceInput>({ ok: false, reason: 'empty' })

  const onTextChange = (value: string) => {
    setText(value)
    setClearance(clearanceFromInput(value, unit))
  }

  const onUnitChange = (next: ClearanceUnit) => {
    if (next === unit) return
    setUnit(next)
    // A valid clearance keeps its exact millimetres; anything else is re-read in the new unit.
    if (clearance.ok) setText(inputTextFor(clearance.mm, next))
    else setClearance(clearanceFromInput(text, next))
  }

  const sorted = [...robots].sort((a, b) => a.heightMm - b.heightMm)
  const fits = clearance.ok ? sorted.filter((r) => fitsUnder(r.heightMm, clearance.mm)) : []
  const tooTall = clearance.ok ? sorted.filter((r) => !fitsUnder(r.heightMm, clearance.mm)) : []
  const error = !clearance.ok && clearance.reason !== 'empty'
  const status = clearance.ok
    ? `${ui.summary(formatClearance(clearance.mm, unit, market), fits.length, robots.length)}${fits.length === 0 ? ` ${ui.noneFit}` : ''}`
    : clearance.reason === 'empty'
      ? ui.empty
      : clearance.reason === 'invalid'
        ? ui.invalid
        : ui.outOfRange

  return (
    <section id="clearance" aria-labelledby={`${id}-title`} className="scroll-mt-24 rounded-3xl border border-brand-100 bg-brand-50/60 p-6 md:p-8">
      <h2 id={`${id}-title`} className="text-2xl font-bold tracking-tight text-slate-900">
        {ui.title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{ui.intro}</p>

      <form className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end" onSubmit={(e) => e.preventDefault()}>
        <div className="flex-1">
          <label htmlFor={`${id}-input`} className="block text-sm font-semibold text-slate-900">
            {ui.inputLabel} ({ui.unitNames[unit]})
          </label>
          <input
            id={`${id}-input`}
            type="text"
            inputMode="decimal"
            autoComplete="off"
            value={text}
            onChange={(e) => onTextChange(e.target.value)}
            aria-describedby={`${id}-hint${error ? ` ${id}-status` : ''}`}
            aria-invalid={error || undefined}
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
          />
          <p id={`${id}-hint`} className="mt-1 text-xs text-slate-600">
            {ui.inputHint}
          </p>
        </div>
        <fieldset className="shrink-0">
          <legend className="text-sm font-semibold text-slate-900">{ui.unitLegend}</legend>
          <div className="mt-1 flex gap-2">
            {UNITS.map((u) => (
              <label
                key={u}
                className={`inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-600 ${
                  unit === u ? 'border-brand-600 bg-white text-brand-800' : 'border-slate-300 bg-white text-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name={`${id}-unit`}
                  value={u}
                  checked={unit === u}
                  onChange={() => onUnitChange(u)}
                  className="accent-brand-600"
                />
                {ui.unitNames[u]}
              </label>
            ))}
          </div>
        </fieldset>
      </form>

      <p id={`${id}-status`} role="status" aria-live="polite" aria-atomic="true" className={`mt-4 text-sm font-semibold ${error ? 'text-red-700' : 'text-slate-900'}`}>
        {status}
      </p>

      {clearance.ok && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            { title: ui.fitsTitle, list: fits },
            { title: ui.tooTallTitle, list: tooTall },
          ]
            .filter((group) => group.list.length > 0)
            .map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-700">{group.title}</h3>
                <ul className="mt-2 space-y-2">
                  {group.list.map((robot) => (
                    <li key={robot.href} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm">
                      <a href={robot.href} className="font-semibold text-slate-900 underline-offset-2 hover:text-brand-700 hover:underline">
                        {robot.name}
                      </a>
                      <span className="block text-slate-600">{formatHeight(robot.heightMm, market)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}

      <p className="mt-4 text-xs leading-relaxed text-slate-600">{ui.method}</p>
    </section>
  )
}
