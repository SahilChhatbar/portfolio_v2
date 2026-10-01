import { ICONS } from '@/constants/icons'

export interface SkillItem {
  name: string
  icon: string
  level?: string
  note?: string
}

export interface SkillCategoryItem {
  category: string
  description: string
  skills: SkillItem[]
}

export interface SkillsData {
  meta: {
    pageNumber: number
    totalPages: number
    pageTitle: string
    category: string
    subtitle: string
    prevHref: string
    nextHref: string
  }
  intro: {
    indexTag: string
    dispatchTag: string
    headline: string
    subtitle: string
  }
  categories: SkillCategoryItem[]
  takeaway: {
    kicker: string
    headline: string
    description: string
    quote: string
    versionNote: string
  }
}

export const SKILLS_DATA: SkillsData = {
  meta: {
    pageNumber: 4,
    totalPages: 6,
    pageTitle: 'SKILLS',
    category: 'SECTION IV • SKILLS & TECHNOLOGIES',
    subtitle: 'The frameworks, libraries and tools I use, grouped by how well I know them.',
    prevHref: '/projects',
    nextHref: '/career',
  },
  intro: {
    indexTag: 'TECHNICAL SKILLS',
    dispatchTag: 'CORE PROFICIENCIES',
    headline: 'WHAT I WORK WITH',
    subtitle:
      'Technologies and tools used across commercial production applications, refactors, and full-stack software.',
  },
  categories: [
    {
      category: 'Frontend Core',
      description:
        'Core technologies for building responsive, interactive, maintainable, and production-ready web applications.',
      skills: [
        {
          name: 'React.js',
          icon: ICONS.react,
          level: 'Strong',
          note: 'Component-based UI development, hooks, reusable interfaces',
        },
        {
          name: 'Next.js',
          icon: ICONS.nextjs,
          level: 'Strong',
          note: 'App Router, isomorphic rendering, SSR, modern architecture',
        },
        {
          name: 'TypeScript',
          icon: ICONS.typescript,
          level: 'Strong',
          note: 'Type-safe application development & strict safety',
        },
        {
          name: 'JavaScript',
          icon: ICONS.javascript,
          level: 'Strong',
          note: 'Modern JavaScript (ESNext) and asynchronous programming',
        },
        {
          name: 'HTML5',
          icon: ICONS.html5,
          level: 'Strong',
          note: 'Semantic structure and accessible markup',
        },
        {
          name: 'CSS',
          icon: ICONS.css,
          level: 'Strong',
          note: 'Responsive layouts and interface styling',
        },
        {
          name: 'WordPress',
          icon: ICONS.wordpress,
          level: 'Working',
          note: 'CMS platforms, Elementor, plugins, themes, and custom CSS',
        },
      ],
    },
    {
      category: 'State Management & Data Fetching',
      description:
        'Patterns and tools for managing complex client state and synchronizing server-side data.',
      skills: [
        {
          name: 'Redux',
          icon: ICONS.redux,
          level: 'Strong',
          note: 'Flux architecture and predictable client-side state',
        },
        {
          name: 'Redux Toolkit',
          icon: ICONS.redux,
          level: 'Strong',
          note: 'Structured Redux development & slice state management',
        },
        {
          name: 'Zustand',
          icon: ICONS.zustand,
          level: 'Working',
          note: 'Lightweight client-side state management',
        },
        {
          name: 'Context API',
          icon: ICONS.contextapi,
          level: 'Strong',
          note: 'Shared application state and provider architecture',
        },
        {
          name: 'Immutable.js',
          icon: ICONS.immutable,
          level: 'Working',
          note: 'Immutable data structures and state handling',
        },
        {
          name: 'TanStack Query',
          icon: ICONS.tanstackquery,
          level: 'Strong',
          note: 'Server-state synchronization, caching, and data fetching',
        },
      ],
    },
    {
      category: 'Styling & UI Systems',
      description:
        'Translating Figma designs and wireframes into responsive, reusable, and accessible interfaces.',
      skills: [
        {
          name: 'Tailwind CSS',
          icon: ICONS.tailwindcss,
          level: 'Strong',
          note: 'Utility-first responsive styling',
        },
        {
          name: 'Material UI',
          icon: ICONS.materialui,
          level: 'Strong',
          note: 'Production component systems and design implementation',
        },
        {
          name: 'shadcn/ui',
          icon: ICONS.shadcn,
          level: 'Strong',
          note: 'Customizable component-based UI',
        },
        {
          name: 'Radix UI',
          icon: ICONS.radix,
          level: 'Strong',
          note: 'Accessible interface primitives',
        },
        {
          name: 'Headless UI',
          icon: ICONS.headlessui,
          level: 'Strong',
          note: 'Accessible unstyled components',
        },
        {
          name: 'Mantine UI',
          icon: ICONS.mantine,
          level: 'Strong',
          note: 'React component ecosystem and reusable interfaces',
        },
        {
          name: 'Bootstrap',
          icon: ICONS.bootstrap,
          level: 'Working',
          note: 'Responsive layouts and rapid UI development',
        },
      ],
    },
    {
      category: 'Backend & APIs',
      description: 'Backend runtimes, API communication, authentication, and application services.',
      skills: [
        {
          name: 'RESTful APIs',
          icon: ICONS.restapi,
          level: 'Strong',
          note: 'API integration and application communication',
        },
        {
          name: 'JWT Authentication',
          icon: ICONS.jwt,
          level: 'Working',
          note: 'Token-based authentication',
        },
        {
          name: 'OAuth',
          icon: ICONS.oauth,
          level: 'Working',
          note: 'Authentication and authorization workflows',
        },
        {
          name: 'Node.js',
          icon: ICONS.nodejs,
          level: 'Familiar',
          note: 'JavaScript runtime and backend development',
        },
        {
          name: 'Express.js',
          icon: ICONS.express,
          level: 'Familiar',
          note: 'Middleware, routing, and REST API development',
        },
      ],
    },
    {
      category: 'Database',
      description: 'Document-oriented and relational database fundamentals.',
      skills: [
        {
          name: 'MongoDB',
          icon: ICONS.mongodb,
          level: 'Working',
          note: 'Document-oriented database development',
        },
        {
          name: 'SQL',
          icon: ICONS.sql,
          level: 'Working',
          note: 'Relational database fundamentals and queries',
        },
      ],
    },
    {
      category: 'Testing & Quality Assurance',
      description:
        'End-to-end reliability, component testing, unit testing, regression coverage, and accessible user interfaces.',
      skills: [
        {
          name: 'Playwright',
          icon: ICONS.playwright,
          level: 'Working',
          note: 'Cross-browser end-to-end testing and workflow validation',
        },
        {
          name: 'Vitest',
          icon: ICONS.vitest,
          level: 'Working',
          note: 'Unit testing and fast component testing',
        },
        {
          name: 'Jest',
          icon: ICONS.jest,
          level: 'Working',
          note: 'JavaScript and unit testing',
        },
        {
          name: 'React Testing Library',
          icon: ICONS.reacttestinglibrary,
          level: 'Working',
          note: 'Component and user-interface testing',
        },
        {
          name: 'Web Accessibility',
          icon: ICONS.accessibility,
          level: 'Strong',
          note: 'ARIA, WCAG, semantic HTML, and accessible UI',
        },
      ],
    },
    {
      category: 'Tools & Workflows',
      description:
        'Development tooling, source control, API testing, collaboration, and software delivery workflows.',
      skills: [
        {
          name: 'Git',
          icon: ICONS.git,
          level: 'Strong',
          note: 'Version control and collaborative development',
        },
        {
          name: 'GitHub',
          icon: ICONS.github,
          level: 'Strong',
          note: 'Repository management and collaboration',
        },
        {
          name: 'GitHub Actions',
          icon: ICONS.githubactions,
          level: 'Working',
          note: 'CI/CD workflows and automated pipelines',
        },
        {
          name: 'GitLab',
          icon: ICONS.gitlab,
          level: 'Working',
          note: 'Source control and collaboration',
        },
        {
          name: 'SVN',
          icon: ICONS.svn,
          level: 'Working',
          note: 'Version control fundamentals',
        },
        {
          name: 'Vite',
          icon: ICONS.vite,
          level: 'Strong',
          note: 'Frontend tooling and development server',
        },
        {
          name: 'Webpack',
          icon: ICONS.webpack,
          level: 'Working',
          note: 'Module bundling and asset pipeline',
        },
        {
          name: 'Babel',
          icon: ICONS.babel,
          level: 'Working',
          note: 'JavaScript compilation and transpilation',
        },
        {
          name: 'npm / Yarn',
          icon: ICONS.npm,
          level: 'Strong',
          note: 'Package management and workspace tooling',
        },
        {
          name: 'VS Code',
          icon: ICONS.vscode,
          note: 'Development environment and debugging',
        },
        {
          name: 'Linear',
          icon: ICONS.linear,
          level: 'Strong',
          note: 'Development task management & Agile tracking',
        },
      ],
    },
    {
      category: 'AI-Assisted Development',
      description:
        'Using AI as a development tool for implementation, debugging, exploration, code review, and engineering workflows.',
      skills: [
        {
          name: 'AI Agents',
          icon: ICONS.aiAgent,
          level: 'Strong',
          note: 'Agent-assisted development workflows',
        },
        {
          name: 'Claude Code',
          icon: ICONS.claude,
          level: 'Strong',
          note: 'AI-assisted development, debugging, and refactoring',
        },
        {
          name: 'Codex',
          icon: ICONS.codex,
          level: 'Strong',
          note: 'AI-assisted code generation and development',
        },
        {
          name: 'ChatGPT',
          icon: ICONS.chatgpt,
          level: 'Strong',
          note: 'Development assistance, problem solving, and exploration',
        },
        {
          name: 'GitHub Copilot',
          icon: ICONS.githubcopilot,
          level: 'Strong',
          note: 'Contextual code suggestions and developer velocity',
        },
        {
          name: 'Antigravity',
          icon: ICONS.antigravity,
          level: 'Strong',
          note: 'AI-assisted development workflows',
        },
      ],
    },
  ],
  takeaway: {
    kicker: 'ENGINEERING APPROACH',
    headline: 'FUNDAMENTALS FIRST',
    description:
      'Frameworks change, fundamentals do not. I pair modern tools with a solid grasp of the web platform, performance and state management, and I work closely with designers and QA to turn Figma designs into shipped features.',
    quote: 'Tools are instruments; architectural clarity is the composition.',
    versionNote: '',
  },
}
