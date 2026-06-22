export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer__sig">// built with React · TypeScript · Vite</p>
      <p className="footer__copy">© {year} Albin. All systems nominal.</p>
      <a href="#top" className="footer__top" data-magnetic>
        back to top ↑
      </a>
    </footer>
  )
}
