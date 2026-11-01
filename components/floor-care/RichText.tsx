import type { RichTextBlock, RichTextInline } from '@/lib/floor-care/html'

/**
 * Section body of a floor-care page, rendered as React elements from the
 * tree lib/floor-care/html.ts parsed (p, ul, li, strong, em): no writer
 * HTML reaches the page as markup.
 */

function Inline({ nodes }: { nodes: readonly RichTextInline[] }) {
  return (
    <>
      {nodes.map((node, i) => {
        if (typeof node === 'string') return node
        const Tag = node.tag
        return (
          <Tag key={i} className={Tag === 'strong' ? 'font-semibold text-slate-900' : undefined}>
            <Inline nodes={node.children} />
          </Tag>
        )
      })}
    </>
  )
}

export default function RichText({ blocks }: { blocks: readonly RichTextBlock[] }) {
  return (
    <div className="space-y-4 text-[17px] leading-relaxed text-slate-700">
      {blocks.map((block, i) =>
        block.tag === 'p' ? (
          <p key={i}>
            <Inline nodes={block.children} />
          </p>
        ) : (
          <ul key={i} className="list-disc space-y-2 pl-6 marker:text-brand-600">
            {block.items.map((item, j) => (
              <li key={j}>
                <Inline nodes={item} />
              </li>
            ))}
          </ul>
        ),
      )}
    </div>
  )
}
