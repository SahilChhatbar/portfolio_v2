export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  appointmentTag: string;
  leadStory: string;
  narrative: string;
  highlights: string[];
  technologies: string[];
  logo?: string;
}

export interface CompanyDossier {
  title: string;
  companyName: string;
  description: string;
  headquarters: string;
  logo?: string;
}

export interface ExperienceData {
  meta: {
    pageNumber: number;
    totalPages: number;
    pageTitle: string;
    category: string;
    subtitle: string;
    prevHref: string;
    nextHref: string;
  };
  banner: {
    fieldReport: string;
    correspondence: string;
    headline: string;
    subtitle: string;
  };
  roles: ExperienceItem[];
  dossier: CompanyDossier;
  dossiers: CompanyDossier[];
  recommendations?: {
    title: string;
    badge: string;
    actionText: string;
    actionHref: string;
    text: string;
  };
}

export const EXPERIENCE_DATA: ExperienceData = {
  meta: {
    pageNumber: 2,
    totalPages: 6,
    pageTitle: "EXPERIENCE",
    category: "SECTION II • WORK EXPERIENCE",
    subtitle:
      "A detailed record of professional software development roles, product contributions, and production work.",
    prevHref: "/",
    nextHref: "/projects",
  },
  banner: {
    fieldReport: "WORK EXPERIENCE",
    correspondence: "PROFESSIONAL HISTORY",
    headline: "COMMERCIAL SOFTWARE & WEB DEVELOPMENT",
    subtitle:
      "Production web applications, component architecture, and CMS platforms across Lamda Logs and Big Social Media.",
  },
  roles: [
    {
      id: "lamda-logs-developer",
      role: "Software Developer",
      company: "Lamda Logs (formerly Elixir Techne)",
      location: "Ahmedabad, Gujarat, India",
      period: "Jun 2025 – Aug 2026",
      type: "Full-Time",
      appointmentTag: "FULL-TIME ROLE",
      logo: "/images/career-education/lamda.png",
      leadStory:
        "BUILDING PRODUCTION WEB APPLICATIONS, COMPLEX FRONTEND WORKFLOWS & REUSABLE INTERFACES",
      narrative:
        "As a Software Developer at Lamda Logs, Sahil contributed to major client and in-house enterprise products including Flipspaces, ProView (OpenDots), and Lamda Flow, developing complex workflows, high-performance dashboards, and testing suites.",
      highlights: [
        "Flipspaces: Optimized large data tables by 40% using virtualization for efficient rendering, Redux for complex client-side state management, and TanStack Query for server-state synchronization.",
        "Flipspaces: Built multi-step forms from Figma wireframes using Material UI, implementing Zod/Yup validation, Save as Draft functionality, complex form state management, and status steppers.",
        "Flipspaces: Developed dynamic Order Details workflows, Order Attachments, and PDF & Image integration, leveraging PDF Workers and lazy loading for 20% load performance gains.",
        "ProView (OpenDots): Improved production modules by fixing UI and accessibility issues (ARIA & semantic HTML), and engineered interactive analytics dashboards with Recharts and Tailwind CSS.",
        "Lamda Flow: Developed enterprise modules from Figma wireframes using Tailwind CSS, Headless UI, Rizz UI, TanStack Query, and Framer Motion within an Agile/Scrum Linear workflow.",
        "Testing & AI Tooling: Wrote unit tests in Vitest and E2E tests in Playwright; leveraged AI agents (Claude Code, Codex) to accelerate development and debugging.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Redux",
        "Redux Toolkit",
        "TanStack Query",
        "Tailwind CSS",
        "Material UI",
        "Headless UI",
        "Rizz UI",
        "Recharts",
        "Framer Motion",
        "REST APIs",
        "Vitest",
        "Playwright",
        "Git",
      ],
    },
    {
      id: "lamda-logs-intern",
      role: "Software Developer Intern",
      company: "Lamda Logs (formerly Elixir Techne)",
      location: "Ahmedabad, Gujarat, India",
      period: "Jan 2025 – May 2025",
      type: "Internship",
      appointmentTag: "INTERNSHIP",
      logo: "/images/career-education/lamda.png",
      leadStory:
        "DEVELOPING FRONTEND FOUNDATIONS, API INTEGRATIONS & RESPONSIVE ENTERPRISE APPS",
      narrative:
        "During this 5-month internship, Sahil gained hands-on experience building enterprise web applications, implementing REST API integrations, and mastering modern state management and data fetching patterns.",
      highlights: [
        "Gained hands-on experience with JavaScript, TypeScript, HTML5, CSS, React, Redux, Zustand, TanStack Query, and multiple UI libraries.",
        "Built REST API integrations for enterprise web applications with robust error handling.",
        "Developed responsive UI customizations and contributed to production-oriented frontend development.",
        "Worked with modern frontend state-management and data-fetching patterns within collaborative engineering environments.",
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS",
        "React",
        "Redux",
        "Zustand",
        "TanStack Query",
        "REST APIs",
        "Git",
      ],
    },
    {
      id: "big-social-media-intern",
      role: "WordPress Developer Intern",
      company: "Big Social Media Pvt Ltd",
      location: "Ahmedabad, Gujarat, India",
      period: "Jun 2024 – Aug 2024",
      type: "Internship",
      appointmentTag: "INTERNSHIP",
      logo: "/images/career-education/bsm.png",
      leadStory:
        "BUILDING & CUSTOMIZING LIVE WORDPRESS WEBSITES, PLUGINS & RESPONSIVE INTERFACES",
      narrative:
        "During this internship at Big Social Media, Sahil worked on real, live production WordPress websites, building custom pages with Elementor, extending functionality via plugins, customizing themes, and implementing custom CSS to guarantee responsive consistency across all devices.",
      highlights: [
        "Built and customized live WordPress websites, translating design layouts into responsive pages using Elementor.",
        "Extended site functionality using WordPress plugins, customized themes, and organized CMS content structure.",
        "Implemented custom CSS and frontend adjustments to refine layouts, typography, and mobile/tablet responsiveness.",
        "Troubleshot plugin, layout, and styling issues on live production websites to ensure visual and functional consistency.",
      ],
      technologies: [
        "WordPress",
        "Elementor",
        "WordPress Plugins",
        "Custom CSS",
        "HTML",
        "Responsive Web Design",
      ],
    },
  ],
  dossier: {
    title: "ABOUT LAMDA LOGS",
    companyName: "LAMDA LOGS (FORMERLY ELIXIR TECHNE)",
    description:
      "An enterprise software and technology firm developing developer tooling, client enterprise solutions, and cloud products.",
    headquarters: "LOCATION: AHMEDABAD, GUJARAT, INDIA",
    logo: "/images/career-education/lamda.png",
  },
  dossiers: [
    {
      title: "ABOUT LAMDA LOGS",
      companyName: "LAMDA LOGS (FORMERLY ELIXIR TECHNE)",
      description:
        "An enterprise software and technology firm developing developer tooling, client enterprise solutions, and cloud products.",
      headquarters: "LOCATION: AHMEDABAD, GUJARAT, INDIA",
      logo: "/images/career-education/lamda.png",
    },
    {
      title: "ABOUT BIG SOCIAL MEDIA",
      companyName: "BIG SOCIAL MEDIA PVT LTD (BSM)",
      description:
        "BSM Big Social Media is an Ahmedabad-based digital marketing and social media company focused on helping businesses build and manage their digital presence through services including social media marketing, branding, content, SEO/PPC, email marketing, website development, and related digital solutions.",
      headquarters: "LOCATION: AHMEDABAD, GUJARAT, INDIA",
      logo: "/images/career-education/bsm.png",
    },
  ],
  recommendations: {
    title: "RESUME & REFERENCES",
    badge: "RESUME",
    actionText: "DOWNLOAD RESUME (PDF)",
    actionHref:
      "https://drive.google.com/file/d/1P1rGTNbBAnNkbK5RFlY99kFdfxA6JBTi/view?usp=sharing",
    text: "Download Sahil's verified resume for complete work history, technical stack details, and references.",
  },
};
