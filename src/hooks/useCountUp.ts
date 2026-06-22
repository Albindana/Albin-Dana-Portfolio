import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

/** Eased count-up animation toward `target`, triggered when `active` is true. */
export function useCountUp(target: number, active: boolean): string {
  const reduced = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    if (reduced) {
      setValue(target)
      return
    }

    const dur = 1400
    let start: number | null = null
    let raf: number

    const step = (ts: number) => {
      if (start === null) start = ts
      const prog = Math.min((ts - start) / dur, 1)
      const eased = 1 - Math.pow(1 - prog, 3)
      setValue(Math.floor(eased * target))
      if (prog < 1) raf = requestAnimationFrame(step)
      else setValue(target)
    }
    raf = requestAnimationFrame(step)

    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, reduced])

  return value.toLocaleString()
}
