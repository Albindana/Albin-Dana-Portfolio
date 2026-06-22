/* ============================================================
   Midnight Terminal — content data
   ============================================================ */

export interface StackCategory {
  cat: string
  items: string[]
}

export interface Project {
  icon: string
  title: string
  desc: string
  tags: string[]
  live: string
  repo: string
}

export interface TimelineEntry {
  date: string
  role: string
  co: string
  list: string[]
}

export interface StatItem {
  count: number
  label: string
}

export const STACK: StackCategory[] = [
  { cat: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind'] },
  { cat: 'Backend', items: ['Node.js', 'C#', '.NET', 'Express', 'Python', 'REST', 'GraphQL'] },
  { cat: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL Server', 'Prisma'] },
  { cat: 'DevOps & Tools', items: ['Docker', 'Git', 'CI/CD', 'AWS', 'Linux', 'Figma'] },
]

export const PROJECTS: Project[] = [
  { icon: '🛰️', title: 'Orbit Dashboard', desc: 'Real-time analytics dashboard with live websocket streams and a custom charting engine.', tags: ['React', 'Node', 'WebSocket'], live: '#', repo: '#' },
  { icon: '🧠', title: 'Neural Notes', desc: 'AI-powered note app that summarizes and links your thoughts automatically.', tags: ['Next.js', 'OpenAI', 'Postgres'], live: '#', repo: '#' },
  { icon: '🎮', title: 'Pixel Arena', desc: 'Multiplayer browser game with authoritative server and 60fps canvas rendering.', tags: ['TypeScript', 'Canvas', 'Socket.io'], live: '#', repo: '#' },
  { icon: '💸', title: 'PayFlow', desc: 'Payment orchestration platform handling subscriptions and invoicing at scale.', tags: ['.NET', 'Stripe', 'Redis'], live: '#', repo: '#' },
  { icon: '📦', title: 'DevKit CLI', desc: 'Open-source CLI that scaffolds full-stack apps in seconds. 2k+ stars.', tags: ['Node', 'CLI', 'OSS'], live: '#', repo: '#' },
  { icon: '🌐', title: 'this site', desc: 'The portfolio you are looking at — built with React, TypeScript & Vite.', tags: ['React', 'TypeScript', 'Vite'], live: '#', repo: '#' },
]

export const TIMELINE: TimelineEntry[] = [
  { date: '2024 — Present', role: 'Senior Software Developer', co: 'Gjirafa', list: ['Lead frontend architecture across multiple products', 'Mentored a team of 4 developers', 'Cut page load times by 45%'] },
  { date: '2022 — 2024', role: 'Full-Stack Developer', co: 'Tech Studio', list: ['Built and shipped 8 client products end to end', 'Introduced CI/CD pipelines and testing culture'] },
  { date: '2020 — 2022', role: 'Junior Developer', co: 'Startup Lab', list: ['Developed core features for a SaaS platform', 'Learned to ship fast and break (almost) nothing'] },
]

export const STATS: StatItem[] = [
  { count: 42, label: 'repositories' },
  { count: 3800, label: 'commits' },
  { count: 5, label: 'years coding' },
  { count: 17, label: 'shipped projects' },
]

export const NAV_LINKS = [
  { href: '#about', label: 'about' },
  { href: '#stack', label: 'stack' },
  { href: '#work', label: 'work' },
  { href: '#timeline', label: 'experience' },
  { href: '#contact', label: 'contact' },
]
