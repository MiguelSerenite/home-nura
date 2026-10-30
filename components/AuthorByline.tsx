import Link from 'next/link'
import { AUTHOR_PATH, getAuthor, getAuthorPageCopy } from '@/lib/authors'

/**
 * Byline of the locale's pen name: initials (never a face photo) and a
 * link to the author page, which states it is a pen name.
 */
export default function AuthorByline({ lang, className = '' }: { lang: string; className?: string }) {
  const author = getAuthor(lang)
  const copy = getAuthorPageCopy(lang)
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        aria-hidden="true"
        className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-accent-600 flex items-center justify-center text-white text-xs font-bold"
      >
        {author.initials}
      </span>
      <span className="text-slate-500">
        {copy.byline}{' '}
        <Link
          href={`/${lang}${AUTHOR_PATH}`}
          rel="author"
          className="font-medium text-slate-600 hover:text-brand-600 transition-colors"
        >
          {author.name}
        </Link>
      </span>
    </div>
  )
}
