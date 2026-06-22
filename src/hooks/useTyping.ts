import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * Typewriter effect that cycles through phrases, typing and deleting.
 * Starts only once `active` becomes true (e.g. after the boot sequence).
 */
export function useTyping(phrases: string[], active: boolean): string {
  const reduced = useReducedMotion()
  const [text, setText] = useState('')

  useEffect(() => {
    if (!active) return
    if (reduced) {
      setText(phrases[0])
      return
    }

    let p = 0
    let c = 0
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    const loop = () => {
      const word = phrases[p]
      setText(deleting ? word.slice(0, c--) : word.slice(0, c++))
      let delay = deleting ? 35 : 70
      if (!deleting && c === word.length + 1) {
        deleting = true
        delay = 1600
      } else if (deleting && c === 0) {
        deleting = false
        p = (p + 1) % phrases.length
        delay = 350
      }
      timer = setTimeout(loop, delay)
    }
    loop()

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, reduced])

  return text
}
