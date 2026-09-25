import { SkillCategory } from "@/types";
import { ICONS } from "@/constants/icons";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend Core",
    description: "Architectural cornerstones for dynamic, high-performance web applications and fluid browser interactions.",
    skills: [
      { name: "React", icon: ICONS.react, level: "Advanced", note: "Hooks, Server Components, State Architecture" },
      { name: "Next.js", icon: ICONS.nextjs, level: "Advanced", note: "App Router, SSR, SSG, Route Handlers" },
      { name: "JavaScript", icon: ICONS.javascript, level: "Expert", note: "ESNext, Event Loop, Async/Await" },
      { name: "TypeScript", icon: ICONS.typescript, level: "Advanced", note: "Generics, Strict Type Safety, Utility Types" }
    ]
  },
  {
    category: "Styling & UI Systems",
    description: "Editorial craftsmanship translating design tokens into accessible, pixel-perfect, and ultra-responsive interfaces.",
    skills: [
      { name: "Tailwind CSS", icon: ICONS.tailwindcss, level: "Expert", note: "Utility-first, Custom Themes, Responsive" },
      { name: "shadcn/ui", icon: ICONS.shadcn, level: "Advanced", note: "Radix Primitives, Customizable Component Sets" },
      { name: "Radix UI", icon: ICONS.radix, level: "Advanced", note: "Unstyled, Accessible Primitives" },
      { name: "Mantine", icon: ICONS.mantine, level: "Proficient", note: "Hook-driven Component Ecosystem" },
      { name: "Material UI", icon: ICONS.materialui, level: "Proficient", note: "Enterprise Design Systems & Theming" },
      { name: "Bootstrap", icon: ICONS.bootstrap, level: "Experienced", note: "Grid Layouts & Rapid Prototyping" }
    ]
  },
  {
    category: "Backend & APIs",
    description: "Robust data access layers, performant server runtimes, and dependable RESTful communication pipelines.",
    skills: [
      { name: "Node.js", icon: ICONS.nodejs, level: "Advanced", note: "Event-driven runtime & micro-services" },
      { name: "Express.js", icon: ICONS.express, level: "Advanced", note: "Middleware, Routing & Authentication" },
      { name: "REST APIs", icon: ICONS.restapi, level: "Expert", note: "Contract Design, Versioning & Caching" },
      { name: "Axios", icon: ICONS.axios, level: "Expert", note: "Interceptors, Retry Policies & Streaming" },
      { name: "Prisma", icon: ICONS.prisma, level: "Advanced", note: "Type-safe ORM, Migrations & Schema" },
      { name: "Mongoose / MongoDB", icon: ICONS.mongoose, level: "Proficient", note: "Document Modeling & Aggregation" },
      { name: "Sequelize", icon: ICONS.sequelize, level: "Proficient", note: "Relational ORM & Associations" },
      { name: "Knex.js", icon: ICONS.knex, level: "Proficient", note: "SQL Query Builder & Schema DSL" },
      { name: "TypeORM", icon: ICONS.typeorm, level: "Proficient", note: "Decorator-based Entity Relationships" }
    ]
  },
  {
    category: "Testing & Quality Assurance",
    description: "End-to-end reliability, component isolation tests, and automated regression shields.",
    skills: [
      { name: "Playwright", icon: ICONS.playwright, level: "Proficient", note: "Cross-browser E2E & Visual Regression" },
      { name: "Vitest", icon: ICONS.vitest, level: "Proficient", note: "Unit Testing & Fast Component Mocking" }
    ]
  },
  {
    category: "Tools & Workflows",
    description: "Modern developer tooling, source control governance, and bundling infrastructure.",
    skills: [
      { name: "Git", icon: ICONS.git, level: "Expert", note: "Branching Strategies, Rebasing & Hooks" },
      { name: "GitHub", icon: ICONS.github, level: "Advanced", note: "Actions, CI/CD Workflows & Code Reviews" },
      { name: "Vite", icon: ICONS.vite, level: "Advanced", note: "Fast HMR & ESM Bundle Optimization" }
    ]
  },
  {
    category: "AI-Assisted Development",
    description: "Amplifying software engineering leverage with agentic workflows, autonomous prompting, and AI code generation.",
    skills: [
      { name: "AI Agents", icon: ICONS.aiAgent, level: "Advanced", note: "Tool calling, MCP servers & multi-agent loop" },
      { name: "Antigravity", icon: ICONS.antigravity, level: "Advanced", note: "Agentic IDE orchestration & skill development" },
      { name: "Claude Code", icon: ICONS.claude, level: "Advanced", note: "Autonomous refactoring & architectural design" },
      { name: "ChatGPT / Codex", icon: ICONS.chatgpt, level: "Advanced", note: "LLM code synthesis & prompt engineering" }
    ]
  }
];
