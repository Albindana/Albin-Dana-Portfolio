import { STATS, type StatItem } from '../data'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

function Stat({ item }: { item: StatItem }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const value = useCountUp(item.count, inView)
  return (
    <div ref={ref} className={`stat reveal ${inView ? 'is-visible' : ''}`}>
      <span className="stat__num">{value}</span>
      <span className="stat__label">{item.label}</span>
    </div>
  )
}

export function Stats() {
  return (
    <section className="section stats" id="stats">
      {STATS.map((s) => (
        <Stat key={s.label} item={s} />
      ))}
    </section>
  )
}
