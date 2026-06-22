import { useEffect, useState } from 'react'

const isDesktop = () =>
  typeof window !== 'undefined' && window.matchMedia('(min-width: 821px)').matches

const motionOk = () =>
  typeof window !== 'undefined' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Custom cursor: a lagging ring (`#cursor`) + an instant dot (`#cursorDot`),
 * with a hover state on interactive elements. Desktop + motion only.
 */
export function useCustomCursor() {
  useEffect(() => {
    if (!motionOk() || !isDesktop()) return
    const cursor = document.getElementById('cursor')
    const dot = document.getElementById('cursorDot')
    if (!cursor || !dot) return

    let mx = 0
    let my = 0
    let cx = 0
    let cy = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`
    }
    const render = () => {
      cx += (mx - cx) * 0.18
      cy += (my - cy) * 0.18
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(render)
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(render)

    const enter = () => cursor.classList.add('is-hover')
    const leave = () => cursor.classList.remove('is-hover')
    const targets = document.querySelectorAll('a, button, [data-magnetic], input, textarea')
    targets.forEach((el) => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])
}

/** Attaches the magnetic pull effect to every `[data-magnetic]` element. */
export function useMagnetic() {
  useEffect(() => {
    if (!motionOk() || !isDesktop()) return
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-magnetic]'))

    const cleanups = els.map((el) => {
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect()
        const x = e.clientX - r.left - r.width / 2
        const y = e.clientY - r.top - r.height / 2
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`
      }
      const reset = () => {
        el.style.transform = ''
      }
      el.addEventListener('mousemove', move)
      el.addEventListener('mouseleave', reset)
      return () => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', reset)
      }
    })

    return () => cleanups.forEach((fn) => fn())
  }, [])
}

/** Moves the radial spotlight (`#spotlight`) to follow the cursor. */
export function useSpotlight() {
  useEffect(() => {
    const sp = document.getElementById('spotlight')
    if (!sp) return
    const onMove = (e: MouseEvent) => {
      sp.style.setProperty('--mx', `${e.clientX}px`)
      sp.style.setProperty('--my', `${e.clientY}px`)
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])
}

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

/** Konami code easter egg: flips the accent to magenta and shows a toast. */
export function useKonami(onUnlock: () => void) {
  useEffect(() => {
    let pos = 0
    const onKey = (e: KeyboardEvent) => {
      pos = e.key === KONAMI[pos] || e.key.toLowerCase() === KONAMI[pos] ? pos + 1 : 0
      if (pos === KONAMI.length) {
        pos = 0
        const root = document.documentElement
        root.style.setProperty('--accent', '#FF2E97')
        root.style.setProperty('--accent-soft', 'rgba(255,46,151,0.14)')
        root.style.setProperty('--glow', '0 0 24px rgba(255,46,151,0.4)')
        onUnlock()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onUnlock])
}

/** Tracks whether the page has been scrolled past `threshold` px. */
export function useScrolled(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}
