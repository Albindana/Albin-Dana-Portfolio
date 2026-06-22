import { useCallback, useState } from 'react'
import { Background, Cursor } from './components/Background'
import { Boot } from './components/Boot'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stack } from './components/Stack'
import { Work } from './components/Work'
import { Timeline } from './components/Timeline'
import { Stats } from './components/Stats'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Toast } from './components/Toast'
import { useBoot } from './hooks/useBoot'
import { useTheme } from './hooks/useTheme'
import {
  useCustomCursor,
  useKonami,
  useMagnetic,
  useSpotlight,
} from './hooks/usePointerEffects'

export default function App() {
  const boot = useBoot()
  const [theme, toggleTheme] = useTheme()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [toast, setToast] = useState(false)

  // Decorative pointer/keyboard effects.
  useSpotlight()
  useCustomCursor()
  useMagnetic()

  const unlock = useCallback(() => {
    setToast(true)
    setTimeout(() => setToast(false), 2600)
  }, [])
  useKonami(unlock)

  return (
    <>
      <Boot state={boot} />
      <Background />
      <Cursor />

      <Nav
        theme={theme}
        onToggleTheme={toggleTheme}
        drawerOpen={drawerOpen}
        onToggleDrawer={() => setDrawerOpen((o) => !o)}
        onCloseDrawer={() => setDrawerOpen(false)}
      />

      <main id="top">
        <Hero booted={boot.done} />
        <About />
        <Stack />
        <Work />
        <Timeline />
        <Stats />
        <Contact />
      </main>

      <Footer />
      <Toast show={toast} />
    </>
  )
}
