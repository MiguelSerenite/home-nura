'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

export default function FaqSection({ faqs, title, nonce }: { faqs: FaqItem[]; title: string; nonce?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // FAQ Schema JSON-LD for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 md:py-24">
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Editorial header */}
      <div className="text-center mb-14">
        <div className="text-[11px] font-bold tracking-[0.35em] uppercase text-blue-600 mb-5">
          F · A · Q
        </div>
        <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight leading-[1.1] text-slate-900 mb-5">
          {title}
        </h2>
        <div className="h-[2px] w-16 bg-blue-600 mx-auto"></div>
      </div>

      {/* FAQ list */}
      <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="group">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-start gap-5 md:gap-6 py-6 md:py-7 text-left"
                aria-expanded={isOpen}
              >
                <span
                  className={`shrink-0 text-[11px] font-bold tracking-[0.2em] mt-1.5 tabular-nums transition-colors ${
                    isOpen ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className={`flex-1 text-base md:text-lg font-semibold leading-snug transition-colors ${
                    isOpen ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-700'
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-9 h-9 flex items-center justify-center rounded-full border transition duration-300 ${
                    isOpen
                      ? 'bg-blue-600 border-blue-600 text-white rotate-45'
                      : 'border-slate-300 text-slate-500 group-hover:border-blue-600 group-hover:text-blue-600'
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 pb-7' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="ml-9 md:ml-11 pr-4 md:pr-14 border-l-2 border-blue-600/30 pl-5 md:pl-6">
                    <p className="text-[15px] md:text-base text-slate-600 leading-[1.8]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
