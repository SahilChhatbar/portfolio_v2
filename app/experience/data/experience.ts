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
  dossier: {
    title: string;
    companyName: string;
    description: string;
    headquarters: string;
  };
  culture: {
    title: string;
    description: string;
  };
  recommendations: {
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
      "A detailed record of professional software development roles, architectural contributions, and production work.",
    prevHref: "/",
    nextHref: "/projects",
  },
  banner: {
    fieldReport: "WORK EXPERIENCE",
    correspondence: "PROFESSIONAL HISTORY",
    headline: "EXPERIENCE AT LAMDA LOGS",
    subtitle:
      "Scaling enterprise web applications, modular component systems, and RESTful APIs in production.",
  },
  roles: [
    {
      id: "lamda-logs-developer",
      role: "Software Developer",
      company: "Lamda Logs",
      location: "Ahmedabad / Remote, India",
      period: "Jun 2025 – Present",
      type: "Full-Time",
      appointmentTag: "FULL-TIME ROLE",
      leadStory:
        "BUILDING PRODUCTION WEB APPLICATIONS AND SCALABLE FULL-STACK ARCHITECTURES",
      narrative:
        "As a Software Developer at Lamda Logs, Sahil is responsible for architecting and deploying user-facing web applications, improving frontend performance, and collaborating closely with design and backend teams.",
      highlights: [
        "Architected and deployed responsive full-stack features using React, Next.js, and TypeScript, improving page load velocity by 35%.",
        "Collaborated with cross-functional engineering teams to design resilient RESTful APIs and database schemas handling mission-critical data.",
        "Introduced automated component testing and end-to-end test suites using Vitest and Playwright to boost release reliability.",
        "Engineered reusable UI component systems with strict design token governance, driving uniform consistency across enterprise dashboard modules.",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "REST APIs",
        "Playwright",
        "Git",
      ],
    },
    {
      id: "lamda-logs-intern",
      role: "Software Developer Intern",
      company: "Lamda Logs",
      location: "Ahmedabad, India",
      period: "Jan 2025 – May 2025",
      type: "Internship",
      appointmentTag: "INTERNSHIP",
      leadStory:
        "DEVELOPING CORE UI MODULES AND API INTEGRATIONS",
      narrative:
        "During this 5-month internship, Sahil developed core UI modules, resolved client-side rendering bottlenecks, and implemented responsive interfaces from Figma designs.",
      highlights: [
        "Built interactive data tables, filter toolbars, and responsive form workflows under senior mentorship.",
        "Optimized client-side rendering bottlenecks and refactored legacy JavaScript modules to strict TypeScript.",
        "Integrated third-party APIs and webhook consumers, guaranteeing robust error handling and telemetry reporting.",
        "Participated actively in daily engineering standups, PR code reviews, and sprint planning sessions.",
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "Bootstrap",
        "Tailwind CSS",
        "Axios",
        "Git",
      ],
    },
  ],
  dossier: {
    title: "ABOUT LAMDA LOGS",
    companyName: "LAMDA LOGS",
    description:
      "An enterprise software and analytics company building developer infrastructure and cloud products.",
    headquarters: "LOCATION: AHMEDABAD, GUJARAT",
  },
  culture: {
    title: "WORK APPROACH & METHODOLOGY",
    description:
      "Focused on clean documentation, automated testing, thorough code reviews, and close collaboration with design and backend teams.",
  },
  recommendations: {
    title: "RESUME & REFERENCES",
    badge: "RESUME",
    actionText: "DOWNLOAD RESUME (PDF)",
    actionHref: "/sahil-chhatbar-resume.pdf",
    text: "Download Sahil's verified resume for complete work history, technical stack details, and references.",
  },
};
