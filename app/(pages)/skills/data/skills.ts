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
      "Technologies and tools used across commercial production applications, refactors, and open-source projects.",
  },
  categories: [
    {
      category: "Frontend Core",
      description:
        "Architectural cornerstones for dynamic, high-performance web applications and fluid browser interactions.",
      skills: [
        {
          name: "React",
          icon: ICONS.react,
          level: "Advanced",
          note: "Hooks, Server Components, State Architecture",
        },
        {
          name: "Next.js",
          icon: ICONS.nextjs,
          level: "Advanced",
          note: "App Router, SSR, SSG, Route Handlers",
        },
        {
          name: "JavaScript",
          icon: ICONS.javascript,
          level: "Expert",
          note: "ESNext, Event Loop, Async/Await",
        },
        {
          name: "TypeScript",
          icon: ICONS.typescript,
          level: "Advanced",
          note: "Generics, Strict Type Safety, Utility Types",
        },
      ],
    },
    {
      category: "Styling & UI Systems",
      description:
        "Building accessible, pixel-perfect, and ultra-responsive user interfaces.",
      skills: [
        {
          name: "Tailwind CSS",
          icon: ICONS.tailwindcss,
          level: "Expert",
          note: "Utility-first, Custom Themes, Responsive",
        },
        {
          name: "shadcn/ui",
          icon: ICONS.shadcn,
          level: "Advanced",
          note: "Radix Primitives, Customizable Component Sets",
        },
        {
          name: "Radix UI",
          icon: ICONS.radix,
          level: "Advanced",
          note: "Unstyled, Accessible Primitives",
        },
        {
          name: "Mantine",
          icon: ICONS.mantine,
          level: "Proficient",
          note: "Hook-driven Component Ecosystem",
        },
        {
          name: "Material UI",
          icon: ICONS.materialui,
          level: "Proficient",
          note: "Enterprise Design Systems & Theming",
        },
        {
          name: "Bootstrap",
          icon: ICONS.bootstrap,
          level: "Experienced",
          note: "Grid Layouts & Rapid Prototyping",
        },
      ],
    },
    {
      category: "Backend & APIs",
      description:
        "Data access layers, performant server runtimes, and dependable RESTful communication pipelines.",
      skills: [
        {
          name: "Node.js",
          icon: ICONS.nodejs,
          level: "Advanced",
          note: "Event-driven runtime & micro-services",
        },
        {
          name: "Express.js",
          icon: ICONS.express,
          level: "Advanced",
          note: "Middleware, Routing & Authentication",
        },
        {
          name: "REST APIs",
          icon: ICONS.restapi,
          level: "Expert",
          note: "Contract Design, Versioning & Caching",
        },
        {
          name: "Axios",
          icon: ICONS.axios,
          level: "Expert",
          note: "Interceptors, Retry Policies & Streaming",
        },
        {
          name: "Prisma",
          icon: ICONS.prisma,
          level: "Advanced",
          note: "Type-safe ORM, Migrations & Schema",
        },
        {
          name: "Mongoose / MongoDB",
          icon: ICONS.mongoose,
          level: "Proficient",
          note: "Document Modeling & Aggregation",
        },
        {
          name: "Sequelize",
          icon: ICONS.sequelize,
          level: "Proficient",
          note: "Relational ORM & Associations",
        },
        {
          name: "Knex.js",
          icon: ICONS.knex,
          level: "Proficient",
          note: "SQL Query Builder & Schema DSL",
        },
        {
          name: "TypeORM",
          icon: ICONS.typeorm,
          level: "Proficient",
          note: "Decorator-based Entity Relationships",
        },
      ],
    },
    {
      category: "Testing & Quality Assurance",
      description:
        "End-to-end reliability, component isolation tests, and automated regression shields.",
      skills: [
        {
          name: "Playwright",
          icon: ICONS.playwright,
          level: "Proficient",
          note: "Cross-browser E2E & Visual Regression",
        },
        {
          name: "Vitest",
          icon: ICONS.vitest,
          level: "Proficient",
          note: "Unit Testing & Fast Component Mocking",
        },
      ],
    },
    {
      category: "Tools & Workflows",
      description:
        "Developer tooling, version control workflows, and build systems.",
      skills: [
        {
          name: "Git",
          icon: ICONS.git,
          level: "Expert",
          note: "Branching Strategies, Rebasing & Hooks",
        },
        {
          name: "GitHub",
          icon: ICONS.github,
          level: "Advanced",
          note: "Actions, CI/CD Workflows & Code Reviews",
        },
        {
          name: "Vite",
          icon: ICONS.vite,
          level: "Advanced",
          note: "Fast HMR & ESM Bundle Optimization",
        },
      ],
    },
    {
      category: "AI-Assisted Development",
      description:
        "Leveraging AI-assisted developer workflows and modern coding assistants.",
      skills: [
        {
          name: "AI Agents",
          icon: ICONS.aiAgent,
          level: "Advanced",
          note: "Tool calling, MCP servers & multi-agent loop",
        },
        {
          name: "Antigravity",
          icon: ICONS.antigravity,
          level: "Advanced",
          note: "Agentic IDE orchestration & skill development",
        },
        {
          name: "Claude Code",
          icon: ICONS.claude,
          level: "Advanced",
          note: "Autonomous refactoring & architectural design",
        },
        {
          name: "ChatGPT / Codex",
          icon: ICONS.chatgpt,
          level: "Advanced",
          note: "LLM code synthesis & prompt engineering",
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
    versionNote: "NEXT.JS 16 & REACT 19",
  },
};
