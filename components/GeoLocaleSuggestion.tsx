import LocaleNotices from '@/components/LocaleNotices'
import { isValidLang } from '@/lib/i18n'
import { arrivalLabelsFor, marketHubsFor } from '@/lib/market-pages/switch'

/**
 * The locale suggestion and the country-switch arrival notice of every
 * page (rendered by app/[lang]/layout.tsx). A server component: it hands
 * the client part the little it needs about the market pages of this
 * locale (their main hub, where the suggestion sends the other versions)
 * and the titles an arrival notice may name, so the client never loads
 * the market page data.
 */
export default function GeoLocaleSuggestion({ lang }: { lang: string }) {
  if (!isValidLang(lang)) return null
  return <LocaleNotices lang={lang} marketHubs={marketHubsFor(lang)} arrivalLabels={arrivalLabelsFor(lang)} />
}
