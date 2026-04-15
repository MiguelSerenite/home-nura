'use client'

import { useState } from 'react'
import Link from 'next/link'

const COOKIE_NAME = 'homenura_cookie_consent'
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60 // 1 year in seconds

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? decodeURIComponent(match[2]) : null
}

function setCookie(name: string, value: string, maxAge: number) {
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${maxAge};SameSite=Lax`
}

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
  const [visible, setVisible] = useState(() => {
    if (typeof document === 'undefined') return false
    return !getCookie(COOKIE_NAME)
  })

  function handleAccept() {
    setCookie(COOKIE_NAME, 'accepted', COOKIE_MAX_AGE)
    setVisible(false)
  }

  function handleReject() {
    setCookie(COOKIE_NAME, 'rejected', COOKIE_MAX_AGE)
    setVisible(false)
  }

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
            onClick={handleReject}
            className="px-5 py-2.5 text-sm font-bold text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
          >
            {dict.cookie_reject}
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            {dict.cookie_accept}
          </button>
        </div>
      </div>
    </div>
  )
}
