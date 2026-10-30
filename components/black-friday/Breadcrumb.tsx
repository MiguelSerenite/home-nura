import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

/** Visual breadcrumb; the last item is the current page (no link). */
export default function BlackFridayBreadcrumb({ items }: { items: readonly { name: string; href?: string }[] }) {
  return (
    <nav className="max-w-6xl mx-auto px-6 pt-10 text-xs text-slate-500" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            {i > 0 && <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 text-slate-400" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-600 transition-colors">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-slate-600 font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
