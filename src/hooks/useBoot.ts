import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

const LINES = [
  'booting developer.exe ...',
  'loading modules ........ ok',
  'mounting /skills ....... ok',
  'establishing connection  ok',
  'rendering interface ....',
]

export interface BootState {
  log: string
  progress: number
  /** true once the boot overlay should fade out */
  done: boolean
  /** true once the overlay element should be removed from the tree */
  removed: boolean
  /** skip animations entirely (reduced motion or already-booted session) */
  instant: boolean
}

/** Drives the terminal boot sequence shown on first visit. */
export function useBoot(): BootState {
  const reduced = useReducedMotion()
  const instant = useRef(
    reduced || (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('booted') === '1'),
  ).current

  const [log, setLog] = useState('')
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    const finish = () => {
      sessionStorage.setItem('booted', '1')
      setDone(true)
      timers.push(setTimeout(() => setRemoved(true), 700))
    }

    if (instant) {
      finish()
      return () => timers.forEach(clearTimeout)
    }

    let i = 0
    const tick = () => {
      if (i < LINES.length) {
        const idx = i
        setLog((prev) => prev + LINES[idx] + '\n')
        setProgress(Math.round(((idx + 1) / LINES.length) * 100))
        i++
        timers.push(setTimeout(tick, 260))
      } else {
        timers.push(setTimeout(finish, 450))
      }
    }
    tick()

    return () => timers.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { log, progress, done, removed, instant }
}
