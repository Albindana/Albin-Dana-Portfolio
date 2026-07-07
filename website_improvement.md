# Portfolio Website — Improvement Ideas

## Add Real Projects

Right now all six projects in `src/data.ts` point to `live: '#'` and `repo: '#'`. Replace those with actual links.

**Things to do:**
- Swap placeholder `#` links with real GitHub repo URLs and live demo URLs for each project.
- Replace the placeholder project names (Orbit Dashboard, Neural Notes, etc.) with your actual work, or keep them if they are real — just wire up the links.
- For projects you can't open-source, at least link to a live URL so visitors can poke around.

---

## Deploy Live Demos

Visitors trust projects more when they can click "live demo" and actually see something running.

**Options to deploy each project for free:**
- **Vercel** — ideal for Next.js or React frontends, zero config, takes 2 minutes.
- **Railway** — good for full-stack apps (Node + Postgres, .NET, etc.). Free tier is generous.
- **Render** — similar to Railway, also handles background workers and cron jobs.
- **Fly.io** — great for containerized apps (Docker), has a free allowance.
- **GitHub Pages** — static sites only, but dead simple and already in your workflow.

**Priority order:** Wire up the frontend-only projects first (they deploy in minutes), then tackle the ones with backends.

---

## Populate the Stats Section

`src/data.ts` has hardcoded numbers (42 repos, 3800 commits, 5 years, 17 shipped). If these are real, great. If not, update them to match your actual GitHub profile so they don't look made up.

---

## Expand the Work Section

Currently 6 project cards. You could:
- Add a **"View all projects"** link that goes to your GitHub profile.
- Split projects into **Featured** (shown on the page) and **Other** (collapsed or on a separate `/projects` page).
- Add screenshots or short screen-recordings (converted to `.webp` or `.gif`) as project thumbnails — far more convincing than icons.

---

## Make the Contact Section Actually Work

Check that the contact form (if there is one) or the email link sends mail correctly. Common improvements:
- Use **Formspree** or **Resend** to handle form submissions without a backend.
- Add your LinkedIn, GitHub, and any other profiles as icon links in the footer or contact section.

---

## Deployment (the Site Itself)

The portfolio is built with Vite (`dist/` folder exists). Deploy it:
1. **Vercel** — connect the GitHub repo, it auto-detects Vite, done.
2. **Netlify** — same experience, also free.
3. **GitHub Pages** — run `npm run build` and push `dist/` to a `gh-pages` branch.

Add a custom domain if you have one (`.dev` or `.io` domains look professional).

---

## Nice-to-Have Polish

- **Open Graph tags** — add `<meta property="og:image">` etc. in `index.html` so the link preview looks good when shared on LinkedIn or WhatsApp.
- **Favicon** — make sure there is a real favicon (not the Vite default).
- **Mobile nav** — double-check the drawer works smoothly on small screens.
- **Accessibility** — run Lighthouse in Chrome DevTools; aim for 90+ on all four categories.
- **Blog section** — even 2–3 short technical writeups signal depth and help with Google search rankings.
