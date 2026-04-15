'use client'

import { useState } from 'react'
import { trackEvent, EVENTS } from '@/lib/analytics'

interface Labels {
  title: string
  subtitle: string
  placeholder: string
  emailLabel: string
  submit: string
  submitting: string
  success: string
  errorInvalid: string
  errorGeneric: string
  errorRateLimited: string
  consent: string
}

const LABELS: Record<string, Labels> = {
  fr: {
    title: 'La newsletter Home Nura',
    subtitle: 'Les meilleurs tests, les vraies promos, zéro spam. Un email par mois.',
    placeholder: 'votre.email@exemple.com',
    emailLabel: 'Adresse email',
    submit: "S'inscrire",
    submitting: 'Envoi…',
    success: 'Merci ! Vérifiez votre boîte mail pour confirmer.',
    errorInvalid: 'Merci de saisir une adresse email valide.',
    errorGeneric: 'Une erreur est survenue. Réessayez.',
    errorRateLimited: 'Trop de tentatives. Réessayez dans une heure.',
    consent: 'En vous inscrivant, vous acceptez notre politique de confidentialité. Désinscription en un clic.',
  },
  en: {
    title: 'The Home Nura newsletter',
    subtitle: 'Best tests, real deals, zero spam. One email a month.',
    placeholder: 'your.email@example.com',
    emailLabel: 'Email address',
    submit: 'Subscribe',
    submitting: 'Sending…',
    success: 'Thanks! Check your inbox to confirm.',
    errorInvalid: 'Please enter a valid email address.',
    errorGeneric: 'Something went wrong. Try again.',
    errorRateLimited: 'Too many attempts. Try again in an hour.',
    consent: 'By subscribing, you agree to our privacy policy. One-click unsubscribe.',
  },
  de: {
    title: 'Der Home Nura Newsletter',
    subtitle: 'Die besten Tests, echte Angebote, kein Spam. Eine E-Mail pro Monat.',
    placeholder: 'ihre.email@beispiel.de',
    emailLabel: 'E-Mail-Adresse',
    submit: 'Abonnieren',
    submitting: 'Wird gesendet…',
    success: 'Danke! Bitte prüfen Sie Ihren Posteingang.',
    errorInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    errorGeneric: 'Ein Fehler ist aufgetreten. Bitte erneut versuchen.',
    errorRateLimited: 'Zu viele Versuche. Bitte in einer Stunde erneut versuchen.',
    consent: 'Mit dem Abonnieren akzeptieren Sie unsere Datenschutzerklärung. Abbestellen per Klick.',
  },
  es: {
    title: 'La newsletter de Home Nura',
    subtitle: 'Las mejores pruebas, ofertas reales, cero spam. Un correo al mes.',
    placeholder: 'tu.email@ejemplo.com',
    emailLabel: 'Dirección de correo',
    submit: 'Suscribirse',
    submitting: 'Enviando…',
    success: '¡Gracias! Revisa tu bandeja de entrada para confirmar.',
    errorInvalid: 'Introduce una dirección de correo válida.',
    errorGeneric: 'Algo salió mal. Vuelve a intentarlo.',
    errorRateLimited: 'Demasiados intentos. Vuelve a intentarlo en una hora.',
    consent: 'Al suscribirte, aceptas nuestra política de privacidad. Baja con un clic.',
  },
  it: {
    title: 'La newsletter di Home Nura',
    subtitle: 'I migliori test, le vere offerte, zero spam. Una email al mese.',
    placeholder: 'la.tua.email@esempio.it',
    emailLabel: 'Indirizzo email',
    submit: 'Iscriviti',
    submitting: 'Invio…',
    success: 'Grazie! Controlla la tua casella per confermare.',
    errorInvalid: 'Inserisci un indirizzo email valido.',
    errorGeneric: 'Qualcosa è andato storto. Riprova.',
    errorRateLimited: 'Troppi tentativi. Riprova tra un\'ora.',
    consent: 'Iscrivendoti accetti la nostra informativa sulla privacy. Disiscrizione con un clic.',
  },
  nl: {
    title: 'De Home Nura-nieuwsbrief',
    subtitle: 'De beste tests, echte deals, geen spam. Eén e-mail per maand.',
    placeholder: 'jouw.email@voorbeeld.nl',
    emailLabel: 'E-mailadres',
    submit: 'Inschrijven',
    submitting: 'Verzenden…',
    success: 'Bedankt! Controleer uw inbox om te bevestigen.',
    errorInvalid: 'Voer een geldig e-mailadres in.',
    errorGeneric: 'Er is iets misgegaan. Probeer opnieuw.',
    errorRateLimited: 'Te veel pogingen. Probeer over een uur opnieuw.',
    consent: 'Door u in te schrijven gaat u akkoord met ons privacybeleid. Uitschrijven met één klik.',
  },
}

export default function NewsletterForm({ currentLang }: { currentLang: string }) {
  const t = LABELS[currentLang] ?? LABELS.en
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return

    const trimmed = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
      setStatus('error')
      setErrorMsg(t.errorInvalid)
      trackEvent(EVENTS.NEWSLETTER_ERROR, { lang: currentLang, reason: 'invalid_email' })
      return
    }

    setStatus('loading')
    setErrorMsg('')
    trackEvent(EVENTS.NEWSLETTER_SUBMIT, { lang: currentLang })
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, lang: currentLang, honeypot }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
        trackEvent(EVENTS.NEWSLETTER_SUCCESS, { lang: currentLang })
      } else if (res.status === 429) {
        setStatus('error')
        setErrorMsg(t.errorRateLimited)
        trackEvent(EVENTS.NEWSLETTER_ERROR, { lang: currentLang, reason: 'rate_limited' })
      } else {
        setStatus('error')
        setErrorMsg(t.errorGeneric)
        trackEvent(EVENTS.NEWSLETTER_ERROR, {
          lang: currentLang,
          reason: 'server_error',
          status: res.status,
        })
      }
    } catch {
      setStatus('error')
      setErrorMsg(t.errorGeneric)
      trackEvent(EVENTS.NEWSLETTER_ERROR, { lang: currentLang, reason: 'network_error' })
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 md:py-24">
      <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-12 text-center shadow-xl">
        <div className="text-[11px] font-bold tracking-[0.35em] uppercase text-blue-100 mb-4">
          NEWSLETTER
        </div>
        <h2 className="text-3xl md:text-[2.25rem] font-bold tracking-tight leading-[1.15] text-white mb-3">
          {t.title}
        </h2>
        <p className="text-base md:text-lg text-blue-100 mb-8 max-w-xl mx-auto">{t.subtitle}</p>

        {status === 'success' ? (
          <div
            className="max-w-md mx-auto rounded-2xl bg-white/10 backdrop-blur border border-white/20 px-5 py-4 text-white text-sm font-medium"
            role="status"
          >
            {t.success}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto" noValidate>
            {/* Honeypot: hidden from humans, bots fill it */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">
                {t.emailLabel}
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.placeholder}
                required
                disabled={status === 'loading'}
                aria-label={t.emailLabel}
                autoComplete="email"
                className="flex-1 rounded-full bg-white/95 px-5 py-3 text-sm md:text-base text-slate-900 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-white disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="rounded-full bg-white px-6 py-3 text-sm md:text-base font-bold text-blue-700 hover:bg-blue-50 transition-colors disabled:opacity-60"
              >
                {status === 'loading' ? t.submitting : t.submit}
              </button>
            </div>
            {status === 'error' && errorMsg && (
              <div className="mt-3 text-xs text-red-100 font-medium" role="alert">
                {errorMsg}
              </div>
            )}
            <p className="mt-4 text-[11px] text-blue-100/80 max-w-sm mx-auto leading-relaxed">
              {t.consent}
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
