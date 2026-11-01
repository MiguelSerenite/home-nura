import { amazonAssociateDisclosure, amazonDisclosureLanguage } from '@/lib/affiliate-disclosure'

interface AmazonDisclosureProps {
  lang: string
  /** Extra transparency label kept after Amazon's statement (e.g. "Liens affiliés : sans surcoût pour vous."). */
  note?: string
  className?: string
}

/** Amazon's required Associates statement, plus an optional affiliate-link label. */
export default function AmazonDisclosure({ lang, note, className = 'text-xs text-slate-600' }: AmazonDisclosureProps) {
  const statement = amazonAssociateDisclosure(lang)
  const statementLang = amazonDisclosureLanguage(lang)
  return (
    <p data-amazon-disclosure className={className}>
      {statementLang ? <span lang={statementLang}>{statement}</span> : statement}
      {note ? ` ${note}` : null}
    </p>
  )
}
