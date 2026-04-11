'use client'

import { useState, useMemo } from 'react'

interface ComparisonProduct {
  name: string
  price: string
  priceNumeric: number
  image: string
  url: string
  capacity: string
  nuraScore: number
  bestFor: string
  badge?: string
  pros: string[]
  cons: string[]
}

interface ComparisonTableProps {
  products: ComparisonProduct[]
  dict: {
    table_title: string
    table_subtitle: string
    col_product: string
    col_nura_score: string
    col_capacity: string
    col_best_for: string
    col_price: string
    col_action: string
    col_pros: string
    col_cons: string
    sort_by: string
    sort_price_asc: string
    sort_price_desc: string
    sort_score: string
    buy_button: string
    show_details: string
    hide_details: string
  }
}

export default function ComparisonTable({ products, dict }: ComparisonTableProps) {
  const [sortBy, setSortBy] = useState<'score' | 'price_asc' | 'price_desc'>('score')
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

  const sorted = useMemo(() => {
    const arr = [...products]
    switch (sortBy) {
      case 'price_asc':
        return arr.sort((a, b) => a.priceNumeric - b.priceNumeric)
      case 'price_desc':
        return arr.sort((a, b) => b.priceNumeric - a.priceNumeric)
      case 'score':
      default:
        return arr.sort((a, b) => b.nuraScore - a.nuraScore)
    }
  }, [products, sortBy])

  const getScoreColor = (score: number) => {
    if (score >= 9) return 'bg-emerald-500'
    if (score >= 8) return 'bg-blue-500'
    if (score >= 7) return 'bg-amber-500'
    return 'bg-slate-400'
  }

  const getScoreBg = (score: number) => {
    if (score >= 9) return 'bg-emerald-50 border-emerald-200'
    if (score >= 8) return 'bg-blue-50 border-blue-200'
    if (score >= 7) return 'bg-amber-50 border-amber-200'
    return 'bg-slate-50 border-slate-200'
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black tracking-tight mb-3">{dict.table_title}</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">{dict.table_subtitle}</p>
      </div>

      {/* Sort Controls */}
      <div className="flex items-center justify-end gap-3 mb-6">
        <span className="text-sm font-medium text-slate-500">{dict.sort_by}</span>
        <div className="flex gap-2">
          {[
            { key: 'score' as const, label: dict.sort_score },
            { key: 'price_asc' as const, label: dict.sort_price_asc },
            { key: 'price_desc' as const, label: dict.sort_price_desc },
          ].map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSortBy(opt.key)}
              className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${
                sortBy === opt.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">#</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">{dict.col_product}</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 text-center">{dict.col_nura_score}</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">{dict.col_capacity}</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">{dict.col_best_for}</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">{dict.col_price}</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">{dict.col_action}</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((p, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-5">
                  <span className="text-lg font-black text-slate-300">#{i + 1}</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt={p.name} className="w-full h-full object-contain p-2" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm leading-tight">{p.name}</h3>
                      {p.badge && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-700 rounded-full">
                          {p.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${getScoreBg(p.nuraScore)}`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${getScoreColor(p.nuraScore)}`} />
                    <span className="text-sm font-black">{p.nuraScore}/10</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm font-medium text-slate-600">{p.capacity}</td>
                <td className="px-6 py-5">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">{p.bestFor}</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-lg font-black text-slate-900">{p.price}</span>
                </td>
                <td className="px-6 py-5">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-full hover:bg-blue-700 transition-colors"
                  >
                    {dict.buy_button}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {sorted.map((p, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-black text-slate-200">#{i + 1}</span>
                <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.name} className="w-full h-full object-contain p-2" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm leading-tight">{p.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full border text-xs ${getScoreBg(p.nuraScore)}`}>
                      <div className={`w-2 h-2 rounded-full ${getScoreColor(p.nuraScore)}`} />
                      <span className="font-black">{p.nuraScore}/10</span>
                    </div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{p.bestFor}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                <div>
                  <span className="text-xl font-black text-slate-900">{p.price}</span>
                  <span className="block text-xs text-slate-400 mt-0.5">{p.capacity}</span>
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="px-5 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-full hover:bg-blue-700 transition-colors"
                >
                  {dict.buy_button}
                </a>
              </div>
            </div>

            {/* Expandable Details */}
            <button
              onClick={() => setExpandedRow(expandedRow === i ? null : i)}
              className="w-full px-5 py-3 text-xs font-bold text-blue-600 bg-slate-50 hover:bg-slate-100 transition-colors border-t border-slate-100"
            >
              {expandedRow === i ? dict.hide_details : dict.show_details}
            </button>
            {expandedRow === i && (
              <div className="px-5 pb-5 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-bold text-emerald-600 mb-2">{dict.col_pros}</h4>
                  <ul className="space-y-1">
                    {p.pros.map((pro, j) => (
                      <li key={j} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <span className="text-emerald-500 mt-0.5 shrink-0">+</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-red-500 mb-2">{dict.col_cons}</h4>
                  <ul className="space-y-1">
                    {p.cons.map((con, j) => (
                      <li key={j} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <span className="text-red-400 mt-0.5 shrink-0">-</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}