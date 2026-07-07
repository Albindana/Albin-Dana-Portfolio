import { type MouseEvent } from 'react'
import { PROJECTS, type Project } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

function ProjectCard({ p }: { p: Project }) {
  // Track the cursor so the radial highlight follows it (CSS uses --px/--py).
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--px', `${e.clientX - r.left}px`)
    el.style.setProperty('--py', `${e.clientY - r.top}px`)
  }

  return (
    <Reveal as="article" className="project" onMouseMove={onMove}>
      <div className="project__top">
        <span className="project__icon">{p.icon}</span>
        <div className="project__links">
          {p.live !== '#' && (
            <a href={p.live} target="_blank" rel="noopener">
              live ↗
            </a>
          )}
          <a href={p.repo} target="_blank" rel="noopener">
            code ↗
          </a>
        </div>
      </div>
      <h3 className="project__title">{p.title}</h3>
      <p className="project__desc">{p.desc}</p>
      <div className="project__tags">
        {p.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </Reveal>
  )
}

export function Work() {
  return (
    <section className="section" id="work">
      <SectionHead cmd="$ git log --featured" title="Featured Builds" />
      <div className="projects">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  )
}
