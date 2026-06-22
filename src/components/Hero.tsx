import { useTyping } from '../hooks/useTyping'
import { useScramble } from '../hooks/useScramble'

const PHRASES = ['initializing developer.exe', 'whoami → albin', 'status: building cool things']

/** Drifting dev-glyph decorations: [symbol, x%, y%, size px, delay s, duration s]. */
const GLYPHS: [string, number, number, number, number, number][] = [
  ['{ }', 8, 18, 26, 0, 19],
  ['</>', 86, 12, 22, -4, 23],
  ['$_', 16, 72, 24, -8, 21],
  ['~', 92, 64, 30, -2, 17],
  ['=>', 70, 80, 22, -11, 25],
  [';', 40, 10, 28, -6, 18],
  ['//', 58, 38, 20, -14, 22],
  ['[ ]', 24, 44, 22, -9, 20],
  ['*', 78, 30, 26, -3, 16],
  ['( )', 50, 66, 22, -7, 24],
  ['::', 12, 90, 20, -13, 19],
  ['+', 94, 88, 24, -5, 21],
]

/** Landing hero: animated terminal line, scrambled name, role + CTAs. */
export function Hero({ booted }: { booted: boolean }) {
  const typed = useTyping(PHRASES, booted)
  const name = useScramble('Albin', booted)

  return (
    <section className="hero">
      <div className="hero__aura" aria-hidden="true" />
      <div className="hero__glyphs" aria-hidden="true">
        {GLYPHS.map(([char, x, y, size, delay, dur], i) => (
          <span
            key={i}
            className="hero__glyph"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              fontSize: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${dur}s`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="hero__inner">
        <div className="badge">
          <span className="badge__dot" /> Available for work
        </div>
        <p className="hero__term">
          <span className="hero__prompt">&gt;</span> <span>{typed}</span>
          <span className="caret">▋</span>
        </p>
        <h1 className="hero__title" dangerouslySetInnerHTML={{ __html: name }} />
        <p className="hero__role">Software Developer</p>
        <p className="hero__tag">
          I build things that live on the web — fast, accessible, and a little bit electric.
        </p>
        <div className="hero__cta">
          <a href="#work" className="btn btn--solid" data-magnetic>
            View Work
          </a>
          <a href="#contact" className="btn btn--ghost" data-magnetic>
            Get in touch
          </a>
        </div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}
