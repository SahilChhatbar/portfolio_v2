export interface ExperienceItem {
  id: string
  role: string
  company: string
  location: string
  period: string
  type: string
  appointmentTag: string
  leadStory: string
  narrative: string
  highlights: string[]
  technologies: string[]
  logo?: string
}

export interface CompanyDossier {
  title: string
  companyName: string
  description: string
  headquarters: string
  logo?: string
}

export interface ExperienceData {
  meta: {
    pageNumber: number
    totalPages: number
    pageTitle: string
    category: string
    subtitle: string
    prevHref: string
    nextHref: string
  }
  banner: {
    fieldReport: string
    correspondence: string
    headline: string
    subtitle: string
  }
  roles: ExperienceItem[]
  dossier: CompanyDossier
  dossiers: CompanyDossier[]
  recommendations?: {
    title: string
    badge: string
    actionText: string
    actionHref: string
    text: string
  }
}

export const EXPERIENCE_DATA: ExperienceData = {
  meta: {
    pageNumber: 2,
    totalPages: 6,
    pageTitle: 'EXPERIENCE',
    category: 'SECTION II • WORK EXPERIENCE',
    subtitle: 'Where I have worked, what I built, and the results.',
    prevHref: '/',
    nextHref: '/projects',
  },
  banner: {
    fieldReport: 'WORK EXPERIENCE',
    correspondence: 'PROFESSIONAL HISTORY',
    headline: 'REAL PRODUCTS, REAL USERS',
    subtitle:
      'Frontend work on production applications at Lamda Logs, and live client websites at Big Social Media.',
  },
  roles: [
    {
      id: 'lamda-logs-developer',
      role: 'Software Developer',
      company: 'Lamda Logs (formerly Elixir Techne)',
      location: 'Ahmedabad, Gujarat, India',
      period: 'Jun 2025 – Aug 2026',
      type: 'Full-Time',
      appointmentTag: 'FULL-TIME ROLE',
      logo: '/images/career-education/lamda.svg',
      leadStory: 'ENGINEERING HIGH-PERFORMANCE, ACCESSIBLE FRONTEND SYSTEMS ACROSS ENTERPRISE PLATFORMS',
      narrative:
        'Delivered core frontend architecture across multiple production enterprise applications—spanning data-heavy management systems, interactive analytics dashboards, complex workflow builders, and document inspection tools in close collaboration with product designers and QA.',
      highlights: [
        'Engineered large-scale data tables handling high-volume datasets using row virtualization, cutting rendering overhead by 40% while synchronizing client and server state via Redux and TanStack Query.',
        'Architected multi-step form workflows with Material UI and Zod/Yup schema validation, featuring persistent draft saving and dynamic progress steppers to eliminate data loss across complex processes.',
        'Built modular order management and asset inspection interfaces with Tailwind CSS and Material UI, robustly handling deep navigation hierarchies and complex edge-case states.',
        'Implemented in-app document and image viewing using PDF Workers, lazy loading, and dynamic code splitting, accelerating asset load performance by 20%.',
        'Developed real-time analytics and reporting dashboards with Recharts, Material UI, and Tailwind CSS, utilizing compute memoization and custom hooks to prevent unnecessary re-renders.',
        'Audited and resolved core web accessibility barriers (ARIA landmarks, keyboard navigation, semantic HTML), ensuring full WCAG compliance and seamless responsive behavior across all viewports.',
        'Created scalable CRUD enterprise modules with Tailwind CSS, Headless UI, and Rizz UI integrated via TanStack Query, enhancing user experience with smooth Framer Motion micro-interactions.',
        'Built robust end-to-end testing suites with Playwright and unit tests with Vitest covering critical business journeys, significantly lowering regression risks during production releases.',
        'Collaborated in fast-paced Agile sprints tracked in Linear, driving rapid feature iterations and thorough code reviews supported by AI developer tooling (Claude Code, Codex).',
      ],
      technologies: [
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Redux',
        'Redux Toolkit',
        'TanStack Query',
        'Tailwind CSS',
        'Material UI',
        'Headless UI',
        'Rizz UI',
        'Recharts',
        'Framer Motion',
        'REST APIs',
        'Vitest',
        'Playwright',
        'Git',
      ],
    },
    {
      id: 'lamda-logs-intern',
      role: 'Software Developer Intern',
      company: 'Lamda Logs (formerly Elixir Techne)',
      location: 'Ahmedabad, Gujarat, India',
      period: 'Jan 2025 – May 2025',
      type: 'Internship',
      appointmentTag: 'INTERNSHIP',
      logo: '/images/career-education/lamda.svg',
      leadStory: 'BUILDING PRODUCTION-GRADE REACT & TYPESCRIPT INTERFACES',
      narrative:
        'Accelerated from academic foundations to building enterprise web features within a live agile team, delivering REST API integrations, responsive component systems, and state synchronization.',
      highlights: [
        'Developed robust REST API integrations with comprehensive error handling and optimistic UI updates for enterprise client solutions.',
        'Built and styled reusable, mobile-responsive UI components from Figma design specifications using modern CSS frameworks.',
        'Implemented scalable client and server state management patterns using Redux, Zustand, and TanStack Query across production codebases.',
      ],
      technologies: [
        'JavaScript',
        'TypeScript',
        'HTML5',
        'CSS',
        'React',
        'Redux',
        'Zustand',
        'TanStack Query',
        'REST APIs',
        'Git',
      ],
    },
    {
      id: 'big-social-media-intern',
      role: 'WordPress Developer Intern',
      company: 'Big Social Media Pvt Ltd',
      location: 'Ahmedabad, Gujarat, India',
      period: 'Jun 2024 – Aug 2024',
      type: 'Internship',
      appointmentTag: 'INTERNSHIP',
      logo: '/images/career-education/bsm.svg',
      leadStory: 'DELIVERING RESPONSIVE WEB SOLUTIONS FOR CLIENTS',
      narrative:
        'Developed and deployed live WordPress websites for client campaigns, crafting custom responsive layouts, optimizing CMS structures, and tailoring bespoke CSS styling.',
      highlights: [
        'Transformed design mockups into pixel-perfect, responsive client websites using Elementor and modern web standards.',
        'Customized WordPress themes and integrated specialized plugins to enhance site functionality and content management workflows.',
        'Authored custom CSS to ensure fluid responsiveness, typography hierarchy, and cross-browser consistency.',
        'Conducted testing and debugging across live client sites to resolve layout, performance, and plugin conflicts.',
      ],
      technologies: [
        'WordPress',
        'Elementor',
        'WordPress Plugins',
        'Custom CSS',
        'HTML',
        'Responsive Web Design',
      ],
    },
  ],
  dossier: {
    title: 'ABOUT LAMDA LOGS',
    companyName: 'LAMDA LOGS (FORMERLY ELIXIR TECHNE)',
    description:
      'An Ahmedabad-based software company building developer tools, enterprise client solutions and cloud products.',
    headquarters: 'LOCATION: AHMEDABAD, GUJARAT, INDIA',
    logo: '/images/career-education/lamda.svg',
  },
  dossiers: [
    {
      title: 'ABOUT LAMDA LOGS',
      companyName: 'LAMDA LOGS (FORMERLY ELIXIR TECHNE)',
      description:
        'An Ahmedabad-based software company building developer tools, enterprise client solutions and cloud products.',
      headquarters: 'LOCATION: AHMEDABAD, GUJARAT, INDIA',
      logo: '/images/career-education/lamda.svg',
    },
    {
      title: 'ABOUT BIG SOCIAL MEDIA',
      companyName: 'BIG SOCIAL MEDIA PVT LTD (BSM)',
      description:
        'An Ahmedabad-based digital marketing agency offering social media, branding, SEO, email marketing and website development.',
      headquarters: 'LOCATION: AHMEDABAD, GUJARAT, INDIA',
      logo: '/images/career-education/bsm.svg',
    },
  ],
  recommendations: {
    title: 'RESUME',
    badge: 'RESUME',
    actionText: 'DOWNLOAD RESUME (PDF)',
    actionHref:
      'https://drive.google.com/file/d/1P1rGTNbBAnNkbK5RFlY99kFdfxA6JBTi/view?usp=sharing',
    text: 'Want the full details? Download my one-page resume for work history, skills and projects.',
  },
}
