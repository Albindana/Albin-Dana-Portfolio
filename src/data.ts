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
  { cat: 'Backend', items: [ 'C#', '.NET','Java', 'Node.js','Express', 'PHP', 'REST'] },
  { cat: 'Data', items: ['PostgreSQL', 'Redis', 'SQL Server'] },
  { cat: 'DevOps & Tools', items: ['Docker', 'Git', 'CI/CD', 'AWS', 'Linux', 'Figma'] },
]

export const PROJECTS: Project[] = [
  {
    icon: '🎬',
    title: 'Video Portal',
    desc: 'Collaborative team project with colleagues — a video portal for browsing, organizing, and managing video content.',
    tags: ['Team Project', 'Collaboration'],
    live: '#',
    repo: 'https://github.com/Samir-Sahiti/Video-portal',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Order System',
    desc: 'Production-structured N-tier monolith with Auth, Products, Cart, and Orders — JWT auth, EF Core, and clean layer separation.',
    tags: ['ASP.NET Core', 'EF Core', 'CQRS', 'JWT'],
    live: '#',
    repo: 'https://github.com/Albindana/E-Commerce-Order-System',
  },
  {
    icon: '🔔',
    title: 'Notifications Microservices',
    desc: 'Decoupled notification platform with three ASP.NET Core services, an Ocelot API Gateway, and RabbitMQ event bus via MassTransit.',
    tags: ['Microservices', 'RabbitMQ', 'Ocelot', 'Docker'],
    live: '#',
    repo: 'https://github.com/Albindana/Notifications-microservices',
  },
  {
    icon: '📊',
    title: 'Real-Time Order Tracking',
    desc: 'Full-stack dashboard with live order activity — SignalR WebSocket push, Redis pub/sub, and a React client with no polling.',
    tags: ['SignalR', 'React', 'Redis', 'ASP.NET Core'],
    live: '#',
    repo: 'https://github.com/Albindana/Real-Time-Order-Tracking-Dashboard',
  },
  {
    icon: '💼',
    title: 'eWork',
    desc: 'Job portal connecting seekers and employers — job posting, search, applications, CV builder, and admin dashboard.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'jQuery'],
    live: '#',
    repo: 'https://github.com/Albindana/ework',
  },
]

export const TIMELINE: TimelineEntry[] = [
  {
    date: 'Aug 2025 — Jun 2026',
    role: 'AI Engineering Fellow',
    co: 'LIFE · Gjirafa',
    list: [
      'Built production-style ASP.NET Core APIs with Clean Architecture, JWT auth, Keycloak, and role-based access control',
      'Worked with PostgreSQL, EF Core, Redis, RabbitMQ, and Kafka — including query optimization and indexing strategies',
      'Practiced DevOps end-to-end: Docker, Kubernetes, CI/CD, Terraform, and monitoring with Prometheus & Grafana',
      'Led backend on StackSift — a team capstone SaaS platform for log analysis and incident alerting',
    ],
  },
  {
    date: '2023 — 2025',
    role: 'Freelance Web Developer',
    co: 'Freelance',
    list: [
      'Built custom WordPress websites for clients, handling theme setup and customization',
      'Developed front-end layouts and styling with HTML, CSS, and JavaScript',
    ],
  },
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
