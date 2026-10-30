import { amazonAssociateDisclosure } from '@/lib/affiliate-disclosure'

interface AmazonDisclosureProps {
  lang: string
  /** Extra transparency label kept after Amazon's statement (e.g. "Liens affiliés : sans surcoût pour vous."). */
  note?: string
  className?: string
}

/** Amazon's required Associates statement, plus an optional affiliate-link label. */
export default function AmazonDisclosure({ lang, note, className = 'text-xs text-slate-600' }: AmazonDisclosureProps) {
  return (
    <p data-amazon-disclosure className={className}>
      {amazonAssociateDisclosure(lang)}
      {note ? ` ${note}` : null}
    </p>
  )
}
