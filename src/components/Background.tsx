/** Fixed decorative layers: grid, drifting blobs, noise, and cursor spotlight. */
export function Background() {
  return (
    <>
      <div className="bg">
        <div className="bg__grid" />
        <div className="bg__blob bg__blob--1" />
        <div className="bg__blob bg__blob--2" />
        <div className="bg__noise" />
      </div>
      <div className="spotlight" id="spotlight" />
    </>
  )
}

/** The custom cursor ring + dot elements (driven by `useCustomCursor`). */
export function Cursor() {
  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-dot" id="cursorDot" />
    </>
  )
}
