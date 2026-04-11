'use client'

import { useState } from 'react'
import Link from 'next/link'

interface CookieBannerProps {
  lang: string
  dict: {
    cookie_banner_text: string
    cookie_accept: string
    cookie_reject: string
    cookie_learn_more: string
  }
}

export default function CookieBanner({ lang, dict }: CookieBannerProps) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-slate-600 leading-relaxed">
            {dict.cookie_banner_text}{' '}
            <Link
              href={`/${lang}/politique-cookies`}
              className="text-blue-600 font-semibold hover:underline"
            >
              {dict.cookie_learn_more}
            </Link>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => setVisible(false)}
            className="px-5 py-2.5 text-sm font-bold text-slate-500 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
          >
            {dict.cookie_reject}
          </button>
          <button
            onClick={() => setVisible(false)}
            className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            {dict.cookie_accept}
          </button>
        </div>
      </div>
    </div>
  )
}
