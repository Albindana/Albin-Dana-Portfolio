import { TIMELINE } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

export function Timeline() {
  return (
    <section className="section" id="timeline">
      <SectionHead cmd="$ git log --experience" title="Experience" />
      <div className="timeline">
        {TIMELINE.map((t) => (
          <Reveal key={t.role} className="tl-item">
            <p className="tl-item__date">{t.date}</p>
            <h3 className="tl-item__role">{t.role}</h3>
            <p className="tl-item__co">{t.co}</p>
            <ul className="tl-item__list">
              {t.list.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
