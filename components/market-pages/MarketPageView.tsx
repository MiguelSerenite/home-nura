import FaqSection from '@/components/FaqSection'
import Navbar from '@/components/Navbar'
import { SiteFooter } from '@/components/ui'
import { relatedLinks } from '@/lib/market-pages/data'
import type { MarketPage } from '@/lib/market-pages/types'
import ComparisonTable from './ComparisonTable'
import { AnswerBox, IndependentTesters, JsonLd, PageHeader, Ranking, RelatedLinks, Sections, Sources } from './PageParts'
import PickCards from './PickCards'

interface MarketPageViewProps {
  page: MarketPage
  /** Store-neutral CTA ("View on Amazon"), the dictionary's buy_button. */
  buyLabel: string
  /** FAQ heading, the dictionary's faq_title. */
  faqTitle: string
}

/**
 * A market page, "answer first" (study § 2.6.3): header with the update
 * date and the pen name → the answer in 40–70 words → the picks (a duel
 * side by side) → the comparison table, within the first two phone
 * screens → why this ranking → the sections → independent testers (no
 * buy button there) → FAQ (FAQPage) → sources → related pages.
 */
export default function MarketPageView({ page, buyLabel, faqTitle }: MarketPageViewProps) {
  return (
    <div className="min-h-screen overflow-x-clip bg-white">
      <JsonLd page={page} />
      <Navbar currentLang={page.locale} />
      <main id="main" data-market-page={page.type}>
        <PageHeader page={page} />
        <AnswerBox page={page} />
        <PickCards page={page} buyLabel={buyLabel} />
        <ComparisonTable page={page} buyLabel={buyLabel} />
        <Ranking page={page} />
        <Sections page={page} />
        <IndependentTesters page={page} />
        {page.faq.length > 0 && (
          <div id="faq" className="scroll-mt-24">
            <FaqSection faqs={page.faq.map((f) => ({ question: f.q, answer: f.a }))} title={faqTitle} />
          </div>
        )}
        <Sources page={page} />
        <RelatedLinks page={page} links={relatedLinks(page)} />
      </main>
      <SiteFooter currentLang={page.locale} />
    </div>
  )
}
