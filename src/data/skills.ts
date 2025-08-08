export type Skill = {
  id: string
  name: string
  description: string
  icon: string
  color: string
  sizePx: number
  orbitRadiusRem: number
  orbitDurationSec: number
  hoverScale: number
  projects: string[]
}

export const skills: Skill[] = [
  {
    id: 'html',
    name: 'HTML',
    description: 'Semantic markup, accessibility, SEO best practices',
    icon: 'code',
    color: '#E44D26',
    sizePx: 44,
    orbitRadiusRem: 7,
    orbitDurationSec: 6,
    hoverScale: 1.18,
    projects: ['Landing Page A', 'Docs Site']
  },
  {
    id: 'css',
    name: 'CSS',
    description: 'Responsive design, Tailwind CSS, Flex/Grid, animations',
    icon: 'sparkles',
    color: '#1572B6',
    sizePx: 46,
    orbitRadiusRem: 9,
    orbitDurationSec: 12,
    hoverScale: 1.16,
    projects: ['Design System', 'Marketing Site']
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'ES2022+, performance, tooling, testing',
    icon: 'bolt',
    color: '#F7DF1E',
    sizePx: 50,
    orbitRadiusRem: 11,
    orbitDurationSec: 16,
    hoverScale: 1.14,
    projects: ['SPA App', 'Dashboard']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    description: 'Strict typing, DX, safe APIs',
    icon: 'shield-check',
    color: '#3178C6',
    sizePx: 50,
    orbitRadiusRem: 13,
    orbitDurationSec: 18,
    hoverScale: 1.14,
    projects: ['API SDK', 'CLI']
  },
  {
    id: 'react',
    name: 'React',
    description: 'App Router, SSR/SSG, hooks, performance',
    icon: 'cube',
    color: '#61DAFB',
    sizePx: 54,
    orbitRadiusRem: 15,
    orbitDurationSec: 20,
    hoverScale: 1.12,
    projects: ['Portfolio', 'E‑commerce']
  },
  {
    id: 'node',
    name: 'Node.js',
    description: 'REST, serverless, security hardening',
    icon: 'server',
    color: '#3C873A',
    sizePx: 48,
    orbitRadiusRem: 17,
    orbitDurationSec: 22,
    hoverScale: 1.13,
    projects: ['Auth Service', 'Webhook Processor']
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Data tooling, scripts, FastAPI basics',
    icon: 'beaker',
    color: '#3776AB',
    sizePx: 44,
    orbitRadiusRem: 19,
    orbitDurationSec: 24,
    hoverScale: 1.12,
    projects: ['ETL', 'Data Pipeline']
  },
  {
    id: 'uiux',
    name: 'UI/UX',
    description: 'A11y, motion, design systems, Figma',
    icon: 'eye',
    color: '#ffb454',
    sizePx: 46,
    orbitRadiusRem: 21,
    orbitDurationSec: 26,
    hoverScale: 1.15,
    projects: ['Design System', 'A/B Tests']
  },
  {
    id: 'security',
    name: 'Cyber Security',
    description: 'OWASP, CSP, rate limiting, input sanitization',
    icon: 'lock-closed',
    color: '#7c5cff',
    sizePx: 46,
    orbitRadiusRem: 23,
    orbitDurationSec: 28,
    hoverScale: 1.15,
    projects: ['Security Audit', 'Pentest Notes']
  },
  {
    id: 'devops',
    name: 'DevOps',
    description: 'CI/CD, Docker, monitoring, IaC basics',
    icon: 'cog-6-tooth',
    color: '#0ea5a4',
    sizePx: 46,
    orbitRadiusRem: 25,
    orbitDurationSec: 30,
    hoverScale: 1.13,
    projects: ['CI Pipeline', 'Infra Scripts']
  }
]