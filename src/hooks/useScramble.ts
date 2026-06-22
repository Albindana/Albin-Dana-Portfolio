import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

const CHARS = '!<>-_\\/[]{}=+*^?#01'

/**
 * Text-scramble reveal. Returns an HTML string (with accent-colored scramble
 * chars) intended for `dangerouslySetInnerHTML`. Falls back to plain text when
 * reduced motion is preferred or before `active`.
 */
export function useScramble(finalText: string, active: boolean): string {
  const reduced = useReducedMotion()
  const [html, setHtml] = useState(finalText)

  useEffect(() => {
    if (!active || reduced) {
      setHtml(finalText)
      return
    }

    let frame = 0
    let raf: number
    const queue = [...finalText].map((ch, i) => ({
      ch,
      start: Math.floor(Math.random() * 12),
      end: Math.floor(Math.random() * 12) + 12 + i,
    }))

    const update = () => {
      let out = ''
      let complete = 0
      queue.forEach((q) => {
        if (frame >= q.end) {
          out += q.ch
          complete++
        } else if (frame >= q.start) {
          out += `<span style="color:var(--accent)">${CHARS[Math.floor(Math.random() * CHARS.length)]}</span>`
        }
      })
      setHtml(out)
      if (complete < queue.length) {
        frame++
        raf = requestAnimationFrame(update)
      } else {
        setHtml(finalText)
      }
    }
    update()

    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, reduced])

  return html
}
