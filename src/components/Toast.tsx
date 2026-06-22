export function Toast({ show }: { show: boolean }) {
  return <div className={`toast ${show ? 'is-show' : ''}`}>⚡ terminal mode unlocked</div>
}
