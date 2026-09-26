import { ICONS } from "@/constants/icons";

export interface SkillItem {
  name: string;
  icon: string;
  level?: string;
  note?: string;
}

export interface SkillCategoryItem {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillsData {
  meta: {
    pageNumber: number;
    totalPages: number;
    pageTitle: string;
    category: string;
    subtitle: string;
    prevHref: string;
    nextHref: string;
  };
  intro: {
    indexTag: string;
    dispatchTag: string;
    headline: string;
    subtitle: string;
  };
  categories: SkillCategoryItem[];
  takeaway: {
    kicker: string;
    headline: string;
    description: string;
    quote: string;
    versionNote: string;
  };
}

export const SKILLS_DATA: SkillsData = {
  meta: {
    pageNumber: 4,
    totalPages: 6,
    pageTitle: "SKILLS",
    category: "SECTION IV • SKILLS & TECHNOLOGIES",
    subtitle:
      "A comprehensive catalog of engineering proficiencies, frameworks, libraries, and development tools.",
    prevHref: "/projects",
    nextHref: "/career",
  },
  intro: {
    indexTag: "TECHNICAL SKILLS",
    dispatchTag: "CORE PROFICIENCIES",
    headline: "TECHNICAL SKILLS & PROFICIENCIES",
    subtitle:
      "Technologies and tools used across commercial production applications, refactors, and full-stack software.",
  },
  categories: [
    {
      category: "Frontend Core",
      description:
        "Core technologies for building responsive, interactive, maintainable, and production-ready web applications.",
      skills: [
        {
          name: "React.js",
          icon: ICONS.react,
          level: "Advanced",
          note: "Component-based UI development, hooks, reusable interfaces",
        },
        {
          name: "Next.js",
          icon: ICONS.nextjs,
          level: "Advanced",
          note: "App Router, isomorphic rendering, SSR, modern architecture",
        },
        {
          name: "TypeScript",
          icon: ICONS.typescript,
          level: "Advanced",
          note: "Type-safe application development & strict safety",
        },
        {
          name: "JavaScript",
          icon: ICONS.javascript,
          level: "Expert",
          note: "Modern JavaScript (ESNext) and asynchronous programming",
        },
        {
          name: "HTML5",
          icon: ICONS.html5,
          level: "Expert",
          note: "Semantic structure and accessible markup",
        },
        {
          name: "CSS",
          icon: ICONS.css,
          level: "Expert",
          note: "Responsive layouts and interface styling",
        },
        {
          name: "WordPress",
          icon: ICONS.wordpress,
          level: "Proficient",
          note: "CMS platforms, Elementor, plugins, themes, and custom CSS",
        },
      ],
    },
    {
      category: "State Management & Data Fetching",
      description:
        "Patterns and tools for managing complex client state and synchronizing server-side data.",
      skills: [
        {
          name: "Redux",
          icon: ICONS.redux,
          level: "Advanced",
          note: "Flux architecture and predictable client-side state",
        },
        {
          name: "Redux Toolkit",
          icon: ICONS.redux,
          level: "Advanced",
          note: "Structured Redux development & slice state management",
        },
        {
          name: "Zustand",
          icon: ICONS.zustand,
          level: "Proficient",
          note: "Lightweight client-side state management",
        },
        {
          name: "Context API",
          icon: ICONS.contextapi,
          level: "Advanced",
          note: "Shared application state and provider architecture",
        },
        {
          name: "Immutable.js",
          icon: ICONS.immutable,
          level: "Proficient",
          note: "Immutable data structures and state handling",
        },
        {
          name: "TanStack Query",
          icon: ICONS.tanstackquery,
          level: "Advanced",
          note: "Server-state synchronization, caching, and data fetching",
        },
      ],
    },
    {
      category: "Styling & UI Systems",
      description:
        "Translating Figma designs and wireframes into responsive, reusable, and accessible interfaces.",
      skills: [
        {
          name: "Tailwind CSS",
          icon: ICONS.tailwindcss,
          level: "Expert",
          note: "Utility-first responsive styling",
        },
        {
          name: "Material UI",
          icon: ICONS.materialui,
          level: "Advanced",
          note: "Production component systems and design implementation",
        },
        {
          name: "shadcn/ui",
          icon: ICONS.shadcn,
          level: "Advanced",
          note: "Customizable component-based UI",
        },
        {
          name: "Radix UI",
          icon: ICONS.radix,
          level: "Advanced",
          note: "Accessible interface primitives",
        },
        {
          name: "Headless UI",
          icon: ICONS.headlessui,
          level: "Advanced",
          note: "Accessible unstyled components",
        },
        {
          name: "Mantine UI",
          icon: ICONS.mantine,
          level: "Advanced",
          note: "React component ecosystem and reusable interfaces",
        },
        {
          name: "Bootstrap",
          icon: ICONS.bootstrap,
          level: "Proficient",
          note: "Responsive layouts and rapid UI development",
        },
      ],
    },
    {
      category: "Backend & APIs",
      description:
        "Backend runtimes, API communication, authentication, and application services.",
      skills: [
        {
          name: "RESTful APIs",
          icon: ICONS.restapi,
          level: "Advanced",
          note: "API integration and application communication",
        },
        {
          name: "JWT Authentication",
          icon: ICONS.jwt,
          level: "Intermediate",
          note: "Token-based authentication",
        },
        {
          name: "OAuth",
          icon: ICONS.oauth,
          level: "Intermediate",
          note: "Authentication and authorization workflows",
        },
        {
          name: "Node.js",
          icon: ICONS.nodejs,
          level: "Beginner",
          note: "JavaScript runtime and backend development",
        },
        {
          name: "Express.js",
          icon: ICONS.express,
          level: "Beginner",
          note: "Middleware, routing, and REST API development",
        },
      ],
    },
    {
      category: "Database",
      description: "Document-oriented and relational database fundamentals.",
      skills: [
        {
          name: "MongoDB",
          icon: ICONS.mongodb,
          level: "Intermediate",
          note: "Document-oriented database development",
        },
        {
          name: "SQL",
          icon: ICONS.sql,
          level: "Intermediate",
          note: "Relational database fundamentals and queries",
        },
      ],
    },
    {
      category: "Testing & Quality Assurance",
      description:
        "End-to-end reliability, component testing, unit testing, regression coverage, and accessible user interfaces.",
      skills: [
        {
          name: "Playwright",
          icon: ICONS.playwright,
          level: "Proficient",
          note: "Cross-browser end-to-end testing and workflow validation",
        },
        {
          name: "Vitest",
          icon: ICONS.vitest,
          level: "Proficient",
          note: "Unit testing and fast component testing",
        },
        {
          name: "Jest",
          icon: ICONS.jest,
          level: "Proficient",
          note: "JavaScript and unit testing",
        },
        {
          name: "React Testing Library",
          icon: ICONS.reacttestinglibrary,
          level: "Proficient",
          note: "Component and user-interface testing",
        },
        {
          name: "Web Accessibility",
          icon: ICONS.accessibility,
          level: "Advanced",
          note: "ARIA, WCAG, semantic HTML, and accessible UI",
        },
      ],
    },
    {
      category: "Tools & Workflows",
      description:
        "Development tooling, source control, API testing, collaboration, and software delivery workflows.",
      skills: [
        {
          name: "Git",
          icon: ICONS.git,
          level: "Expert",
          note: "Version control and collaborative development",
        },
        {
          name: "GitHub",
          icon: ICONS.github,
          level: "Advanced",
          note: "Repository management and collaboration",
        },
        {
          name: "GitHub Actions",
          icon: ICONS.githubactions,
          level: "Proficient",
          note: "CI/CD workflows and automated pipelines",
        },
        {
          name: "GitLab",
          icon: ICONS.gitlab,
          level: "Proficient",
          note: "Source control and collaboration",
        },
        {
          name: "SVN",
          icon: ICONS.svn,
          level: "Proficient",
          note: "Version control fundamentals",
        },
        {
          name: "Vite",
          icon: ICONS.vite,
          level: "Advanced",
          note: "Frontend tooling and development server",
        },
        {
          name: "Webpack",
          icon: ICONS.webpack,
          level: "Proficient",
          note: "Module bundling and asset pipeline",
        },
        {
          name: "Babel",
          icon: ICONS.babel,
          level: "Proficient",
          note: "JavaScript compilation and transpilation",
        },
        {
          name: "npm / Yarn",
          icon: ICONS.npm,
          level: "Advanced",
          note: "Package management and workspace tooling",
        },
        {
          name: "VS Code",
          icon: ICONS.vscode,
          level: "Expert",
          note: "Development environment and debugging",
        },
        {
          name: "Linear",
          icon: ICONS.linear,
          level: "Advanced",
          note: "Development task management & Agile tracking",
        },
      ],
    },
    {
      category: "AI-Assisted Development",
      description:
        "Using AI as a development tool for implementation, debugging, exploration, code review, and engineering workflows.",
      skills: [
        {
          name: "AI Agents",
          icon: ICONS.aiAgent,
          level: "Advanced",
          note: "Agent-assisted development workflows",
        },
        {
          name: "Claude Code",
          icon: ICONS.claude,
          level: "Advanced",
          note: "AI-assisted development, debugging, and refactoring",
        },
        {
          name: "Codex",
          icon: ICONS.codex,
          level: "Advanced",
          note: "AI-assisted code generation and development",
        },
        {
          name: "ChatGPT",
          icon: ICONS.chatgpt,
          level: "Advanced",
          note: "Development assistance, problem solving, and exploration",
        },
        {
          name: "GitHub Copilot",
          icon: ICONS.githubcopilot,
          level: "Advanced",
          note: "Contextual code suggestions and developer velocity",
        },
        {
          name: "Antigravity",
          icon: ICONS.antigravity,
          level: "Advanced",
          note: "AI-assisted development workflows",
        },
      ],
    },
  ],
  takeaway: {
    kicker: "ENGINEERING APPROACH",
    headline: "STRONG FOUNDATIONS & CONTINUOUS LEARNING",
    description:
      "While tools and frameworks evolve, a deep understanding of core web fundamentals, performance optimization, protocols, and state management remains essential. Sahil combines modern frameworks with solid software engineering foundations.",
    quote: "Tools are instruments; architectural clarity is the composition.",
    versionNote: "",
  },
};
