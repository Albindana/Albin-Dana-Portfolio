import { STACK } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

export function Stack() {
  return (
    <section className="section" id="stack">
      <SectionHead cmd="$ ls ./arsenal" title="Tech Stack" />
      <div className="stack">
        {STACK.map((c) => (
          <Reveal key={c.cat} className="stack__cat">
            <h3>{c.cat}</h3>
            <div className="stack__items">
              {c.items.map((i) => (
                <span key={i} className="stack__item">
                  {i}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
