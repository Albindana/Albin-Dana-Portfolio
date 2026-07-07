import { NAV_LINKS } from '../data'
import { useScrolled } from '../hooks/usePointerEffects'
import type { Theme } from '../hooks/useTheme'

interface NavProps {
  theme: Theme
  onToggleTheme: () => void
  drawerOpen: boolean
  onToggleDrawer: () => void
  onCloseDrawer: () => void
}

export function Nav({ theme, onToggleTheme, drawerOpen, onToggleDrawer, onCloseDrawer }: NavProps) {
  const scrolled = useScrolled(40)

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`} id="nav">
        <div className="nav__start">
          <a href="#top" className="nav__brand">
            <span className="nav__bracket">[</span> albin <span className="nav__cursor">_</span>{' '}
            <span className="nav__bracket">]</span>
          </a>
        </div>

        <nav className="nav__links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__end">
          <a href="#contact" className="btn btn--ghost nav__cta" data-magnetic>
            Get in touch
          </a>
          <button
            className="nav__theme"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button
            className={`nav__burger ${drawerOpen ? 'is-open' : ''}`}
            aria-label="Menu"
            onClick={onToggleDrawer}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`drawer ${drawerOpen ? 'is-open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={onCloseDrawer}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
