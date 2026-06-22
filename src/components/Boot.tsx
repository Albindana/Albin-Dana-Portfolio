import type { BootState } from '../hooks/useBoot'

/** Full-screen terminal boot overlay shown on first visit. */
export function Boot({ state }: { state: BootState }) {
  if (state.removed) return null
  return (
    <div
      className={`boot ${state.done ? 'is-done' : ''}`}
      style={state.instant ? { transition: 'none' } : undefined}
    >
      <div className="boot__inner">
        <pre className="boot__log">{state.log}</pre>
        <div className="boot__bar">
          <span style={{ width: `${state.progress}%` }} />
        </div>
      </div>
    </div>
  )
}
