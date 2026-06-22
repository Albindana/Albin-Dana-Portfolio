# Personal Developer Website — Design & Build Plan

> A creative, dark-themed landing page for a software developer.
> Goal: feel like stepping into a hacker's terminal that's secretly an art gallery — moody, alive, and technical without being cold.

---

## 1. Concept & Creative Direction

### Theme: "Midnight Terminal"
A dark, atmospheric portfolio that blends **developer culture** (terminals, code, monospace) with **modern motion design** (glassmorphism, glow, parallax). The visitor should feel they've entered your personal dev environment at 2 AM — focused, electric, a little mysterious.

### Mood words
`dark` · `electric` · `precise` · `alive` · `confident` · `crafted`

### Core principles
- **Dark-first, not dark-only** — true black backgrounds with layered near-black surfaces for depth.
- **One accent that glows** — a single vivid accent color carries all the energy.
- **Motion with restraint** — every animation has a reason; nothing distracts from content.
- **Performance is a feature** — fast load, smooth 60fps, accessible.

---

## 2. Visual Identity

### Color Palette
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Background (void) | Near-black | `#0A0A0F` | Page base |
| Surface 1 | Charcoal | `#12121A` | Cards, sections |
| Surface 2 | Slate | `#1C1C28` | Elevated cards, hover |
| Text primary | Off-white | `#E8E8F0` | Headings, body |
| Text muted | Cool gray | `#8A8AA0` | Secondary text |
| **Accent (electric)** | Cyber green | `#00FF9C` | CTAs, links, glow |
| Accent alt | Violet | `#7C3AED` | Gradients, secondary highlights |
| Danger/warmth | Coral | `#FF5C5C` | Rare emphasis |

> **Alternative accent options** (pick one identity): electric cyan `#22D3EE`, magenta `#FF2E97`, or amber `#FFB000` for a "retro CRT" feel.

### Typography
- **Display / Headings:** `Space Grotesk` or `Clash Display` — geometric, modern, confident.
- **Body:** `Inter` — clean, highly legible.
- **Code / accents:** `JetBrains Mono` or `Fira Code` — for terminal text, tags, timestamps.
- Scale: fluid `clamp()` typography so it breathes across screen sizes.

### Texture & Effects
- Subtle **noise/grain overlay** for film texture.
- **Glassmorphism** on floating nav and cards (`backdrop-filter: blur`).
- **Glow** on accent elements (layered `box-shadow` / `text-shadow`).
- Faint **animated grid or dot matrix** in the background.
- **Gradient mesh** blobs drifting slowly behind content.

---

## 3. Page Structure (Sections)

### 3.1 Hero — "The Boot Sequence"
- Full-viewport dark hero.
- **Animated terminal typing effect**: `> initializing developer.exe...` then your name materializes.
- Headline: your name + role (e.g. *"Albin — Software Developer"*).
- Subline: one-sentence tagline ("I build things that live on the web.").
- Two CTAs: `View Work` (filled accent) and `Get in touch` (ghost button).
- Background: drifting gradient mesh + faint dot grid + a glowing cursor.
- Floating status badge: `● Available for work` with pulsing dot.
- Scroll-down indicator with a soft bounce.

### 3.2 About — "whoami"
- Section styled as a terminal command output: `$ whoami`.
- Short, personal narrative (2–3 paragraphs) — who you are, what drives you.
- Quick-fact chips: location, years coding, favorite stack, coffee count.
- Optional: a stylized avatar/photo with a duotone (accent-tinted) treatment.

### 3.3 Tech Stack — "Arsenal"
- Animated grid of skill cards / icons (languages, frameworks, tools).
- Cards glow + lift on hover; icons subtly desaturate until hovered.
- Group by category: Frontend · Backend · DevOps · Databases · Tools.
- Optional animated proficiency bars or a radar chart.

### 3.4 Projects — "Featured Builds"
- The centerpiece. 3–6 project cards in a responsive grid or alternating layout.
- Each card: thumbnail/preview, title, one-line description, tech tags, links (Live / GitHub).
- Hover: image zoom, accent border glow, reveal "View details →".
- Optional: a featured project with a larger hero-style layout + case-study modal.

### 3.5 Experience — "Timeline / Commit History"
- Vertical timeline styled like a **git log** or commit history.
- Each entry: role, company, dates, 2–3 bullet achievements.
- Animated line that "draws" as you scroll; nodes glow when in view.

### 3.6 Stats / GitHub — "Live Signals" *(optional, high-impact)*
- GitHub contribution graph (embedded or styled).
- Animated counters: repos, commits, stars, years of experience.
- Currently-playing Spotify or "now reading" widget for personality.

### 3.7 Contact — "Open a Connection"
- Terminal-style contact prompt: `$ ./contact --reach-out`.
- Clean form (name, email, message) with focus glow + validation.
- Direct links: email, GitHub, LinkedIn, X/Twitter, resume download.
- Subtle success animation on submit.

### 3.8 Footer
- Minimal. Monospace copyright, "Built with [stack]", back-to-top.
- Maybe a tiny easter egg or signature ASCII art.

---

## 4. Signature Interactions & "Wow" Moments

These are what make it *creative* rather than generic:

1. **Boot sequence intro** — first visit shows a brief terminal boot animation before the hero settles.
2. **Custom cursor** — a glowing dot/ring that reacts to interactive elements (grows on hover).
3. **Magnetic buttons** — CTAs subtly pull toward the cursor.
4. **Scroll-triggered reveals** — sections fade/slide up as they enter the viewport.
5. **Parallax depth** — background layers move at different speeds from foreground.
6. **Text scramble effect** — headings briefly "decode" from random characters into words.
7. **Spotlight / mouse-follow glow** — a soft radial light follows the cursor over hero/cards.
8. **Konami code easter egg** — unlock a hidden "terminal mode" or matrix rain.
9. **Sound design (toggleable)** — subtle UI clicks/hover blips, muted by default.
10. **Theme variants** — optional "light terminal" or alternate accent toggle.

---

## 5. Tech Stack Recommendations

### Option A — Modern & Powerful (recommended)
- **Framework:** Next.js (React) or Astro.
- **Styling:** Tailwind CSS + custom CSS variables for the palette.
- **Animation:** Framer Motion (reveals, layout) + GSAP (timeline/scroll scrubbing).
- **3D/visuals (optional):** Three.js / React Three Fiber for hero particles or a floating object.
- **Icons:** Lucide + Simple Icons (brand logos).
- **Deploy:** Vercel or Netlify.

### Option B — Lightweight & Fast
- **Plain HTML + CSS + vanilla JS** (no build step).
- CSS animations + Intersection Observer for reveals.
- Easy to host anywhere (GitHub Pages, Netlify drop).
- Great if you want full control and minimal dependencies.

### Recommended libraries (Option A)
| Need | Library |
|------|---------|
| Animation | Framer Motion, GSAP + ScrollTrigger |
| Typing effect | Typed.js or custom hook |
| Text scramble | custom / `baffle.js` |
| Smooth scroll | Lenis |
| 3D background | three.js / R3F + drei |
| Forms | Formspree / Resend / EmailJS |

---

## 6. Layout & Responsiveness
- **Mobile-first**, then scale up. Test 360px → 1440px → ultrawide.
- Generous whitespace; max content width ~1200px with breathing margins.
- Sticky/floating glass nav that shrinks on scroll; hamburger drawer on mobile.
- Disable heavy parallax/3D on small screens and low-power devices.
- Respect `prefers-reduced-motion` — swap animations for instant states.

---

## 7. Accessibility & Performance Checklist
- [ ] Contrast ratios meet WCAG AA (dark themes often fail muted text — verify).
- [ ] Full keyboard navigation + visible focus rings (accent glow).
- [ ] `prefers-reduced-motion` honored throughout.
- [ ] Semantic HTML, alt text, ARIA where needed.
- [ ] Lighthouse target: 90+ across Performance / A11y / SEO.
- [ ] Lazy-load images; use `next/image` or modern formats (WebP/AVIF).
- [ ] Self-host or `font-display: swap` fonts to avoid layout shift.
- [ ] Open Graph + Twitter card meta for nice link previews.

---

## 8. SEO & Meta
- Title, description, canonical URL.
- Open Graph image (a dark, branded share card).
- `sitemap.xml` + `robots.txt`.
- JSON-LD `Person` schema with your name, job title, social links.
- Descriptive page title: *"[Name] — Software Developer"*.

---

## 9. Content Checklist (gather before building)
- [ ] Professional headshot / avatar (for duotone treatment).
- [ ] Bio: short (1 line), medium (2–3 sentences), long (about section).
- [ ] Tagline / personal motto.
- [ ] 3–6 projects: title, description, role, tech, screenshots, live + repo links.
- [ ] Resume / CV PDF.
- [ ] Work history for timeline.
- [ ] Skills list grouped by category.
- [ ] Social links (GitHub, LinkedIn, X, email).
- [ ] Favicon + OG share image.

---

## 10. Build Roadmap (phased)

### Phase 1 — Foundation
- Set up project, fonts, color tokens, base layout, dark theme variables.
- Build responsive nav + footer + section scaffolding.

### Phase 2 — Content sections
- Hero, About, Stack, Projects, Experience, Contact — static first.
- Wire up real content and links.

### Phase 3 — Motion layer
- Scroll reveals, typing effect, custom cursor, hover states, parallax.

### Phase 4 — Polish & wow
- Boot sequence, text scramble, magnetic buttons, easter eggs, sound (optional).
- Grain/glow/gradient mesh background.

### Phase 5 — Optimize & ship
- Accessibility pass, performance tuning, SEO/meta, cross-browser + device testing.
- Deploy to Vercel/Netlify; connect custom domain.

---

## 11. Stretch Ideas (future)
- Blog / "dev log" section with MDX.
- Dark/light theme toggle with smooth transition.
- Interactive 3D scene in hero (floating geometry reacting to mouse).
- "Command palette" (⌘K) to navigate the site like an editor.
- Live coding stats from WakaTime / GitHub API.
- Multi-language toggle.
- Visitor counter or guestbook styled as terminal output.

---

## 12. References & Inspiration
- **Awwwards** / **Godly.website** — dark portfolio inspiration.
- **brittanychiang.com** — clean dev portfolio classic.
- **Bruno Simon** (bruno-simon.com) — playful 3D.
- **Linear / Vercel** — dark UI craft, glow, gradients.
- Dribbble: search *"dark developer portfolio"*, *"terminal UI"*.

---

*Next step: pick a tech stack (Option A or B) and an accent color, then I can scaffold the actual site.*
