import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

const CHIPS = ['📍 Pristina, KS', '⌨️ 5+ yrs coding', '⚙️ Full-stack', '☕ ∞ coffee']

export function About() {
  return (
    <section className="section" id="about">
      <SectionHead cmd="$ whoami" title="About" />
      <div className="about">
        <Reveal className="about__text">
          <p>
            I'm a software developer who likes building products end to end — from the database
            schema to the pixel that glows on hover. I care about clean architecture, smooth
            experiences, and shipping things that actually get used.
          </p>
          <p>
            Outside the editor you'll find me chasing new tech, refining side projects, and running
            on an unreasonable amount of coffee. I believe the best software feels invisible and a
            little bit magical.
          </p>
          <div className="chips">
            {CHIPS.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="about__card">
          <div className="termcard">
            <div className="termcard__bar">
              <i />
              <i />
              <i />
              <span>~/about</span>
            </div>
            <pre className="termcard__body">
              <span className="c-dim">$</span> cat profile.json
              {'\n{\n  '}
              <span className="c-key">"name"</span>: <span className="c-str">"Albin"</span>,{'\n  '}
              <span className="c-key">"role"</span>: <span className="c-str">"Software Developer"</span>,
              {'\n  '}
              <span className="c-key">"focus"</span>: [<span className="c-str">"web"</span>,{' '}
              <span className="c-str">"apis"</span>, <span className="c-str">"ux"</span>],{'\n  '}
              <span className="c-key">"status"</span>: <span className="c-str">"building"</span>,
              {'\n  '}
              <span className="c-key">"open_to_work"</span>: <span className="c-bool">true</span>
              {'\n}\n'}
              <span className="c-dim">$</span> <span className="caret">▋</span>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
