# Albin — Portfolio (Midnight Terminal)

A dark, terminal-flavored developer portfolio. Originally vanilla HTML/CSS/JS,
now refactored to a modern **React + TypeScript + Vite** stack with the design
and interactions preserved 1:1.

## Stack

- **React 18** — componentized UI
- **TypeScript** (strict) — typed data model and components
- **Vite 5** — dev server + production build
- Global CSS (`src/index.css`) carried over unchanged from the original design

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # type-check (tsc --noEmit) + production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
index.html              # Vite entry (fonts, meta, #root)
src/
  main.tsx              # React bootstrap
  App.tsx               # page composition + global effects
  data.ts              # typed content (stack, projects, timeline, stats)
  index.css            # the Midnight Terminal stylesheet
  components/          # Boot, Nav, Hero, About, Stack, Work, Timeline,
                       #   Stats, Contact, Footer, Toast, Background, Reveal…
  hooks/               # useBoot, useTyping, useScramble, useCountUp,
                       #   useInView, useReducedMotion, usePointerEffects
legacy/                # original vanilla HTML/CSS/JS, kept for reference
```

## Interactions

All original flourishes were ported into hooks/components:

- Boot sequence (`useBoot`, session-aware, reduced-motion aware)
- Hero typewriter (`useTyping`) and name scramble (`useScramble`)
- Scroll reveals (`useInView` + `Reveal`)
- Animated stat counters (`useCountUp`)
- Custom cursor, magnetic buttons, cursor spotlight (`usePointerEffects`)
- Konami-code easter egg → accent flip + toast
- Accessible: respects `prefers-reduced-motion` throughout
