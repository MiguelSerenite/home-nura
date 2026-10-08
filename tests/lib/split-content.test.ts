import { describe, it, expect } from 'vitest'
import { splitBeforeNthH2 } from '@/lib/blog/split-content'

describe('splitBeforeNthH2', () => {
  const html = '<p>intro</p><h2>A</h2><p>a</p><h2 id="b">B</h2><p>b</p><h2>C</h2>'

  it('splits right before the Nth h2 and loses nothing', () => {
    const [before, after] = splitBeforeNthH2(html, 2)
    expect(before).toBe('<p>intro</p><h2>A</h2><p>a</p>')
    expect(after.startsWith('<h2 id="b">B</h2>')).toBe(true)
    expect(before + after).toBe(html)
  })

  it('keeps everything in the first part when there are fewer headings', () => {
    expect(splitBeforeNthH2('<p>x</p><h2>A</h2>', 2)).toEqual(['<p>x</p><h2>A</h2>', ''])
  })
})
