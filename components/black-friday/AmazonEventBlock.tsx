import type { Lang } from '@/lib/i18n'
import { AMAZON_BLACK_FRIDAY_URL, primeTrialUrl } from '@/lib/black-friday'
import { HUB_COPY, PRIME_COPY_FR } from '@/lib/black-friday/copy/hub'
import BlackFridayAmazonLink from './AmazonLink'

const BUTTON =
  'inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold transition-colors'

/** Amazon's Black Friday page, plus the Prime free trial on French pages. */
export default function AmazonEventBlock({ lang }: { lang: Lang }) {
  const copy = HUB_COPY[lang]
  const primeUrl = primeTrialUrl(lang)
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-6 pb-12">
      <div className={`grid grid-cols-1 gap-4 ${primeUrl ? 'md:grid-cols-2' : ''}`}>
        <div className="flex flex-col rounded-3xl bg-slate-900 p-6 md:p-8 text-white">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">{copy.amazonTitle}</h2>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-200">{copy.amazonText}</p>
          <BlackFridayAmazonLink
            href={AMAZON_BLACK_FRIDAY_URL}
            productName="Amazon Black Friday page"
            lang={lang}
            className={`${BUTTON} mt-5 self-start bg-white text-slate-900 hover:bg-brand-50`}
          >
            {copy.amazonCta} →
          </BlackFridayAmazonLink>
        </div>
        {primeUrl && (
          <div className="flex flex-col rounded-3xl border border-brand-200 bg-brand-50 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">{PRIME_COPY_FR.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">{PRIME_COPY_FR.text}</p>
            <BlackFridayAmazonLink
              href={primeUrl}
              productName="Amazon Prime free trial"
              lang={lang}
              className={`${BUTTON} mt-5 self-start bg-brand-600 text-white hover:bg-brand-700`}
            >
              {PRIME_COPY_FR.cta} →
            </BlackFridayAmazonLink>
          </div>
        )}
      </div>
    </section>
  )
}
