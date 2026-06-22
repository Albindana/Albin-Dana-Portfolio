import { Reveal } from './Reveal'

/** Shared section heading: a mono `$ command` line above the title. */
export function SectionHead({ cmd, title }: { cmd: string; title: string }) {
  return (
    <Reveal className="section__head">
      <span className="section__cmd">{cmd}</span>
      <h2 className="section__title">{title}</h2>
    </Reveal>
  )
}
