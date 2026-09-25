import { Experience } from "@/types";

export const EXPERIENCES: Experience[] = [
  {
    id: "lamda-logs-developer",
    role: "Software Developer",
    company: "Lamda Logs",
    location: "Ahmedabad / Remote, India",
    period: "Jun 2025 – Present",
    type: "Full-Time",
    leadStory: "BUILDING PRODUCTION WEB APPLICATIONS AND SCALABLE FULL-STACK ARCHITECTURES",
    highlights: [
      "Architected and deployed responsive full-stack features using React, Next.js, and TypeScript, improving page load velocity by 35%.",
      "Collaborated with cross-functional engineering teams to design resilient RESTful APIs and database schemas handling mission-critical data.",
      "Introduced automated component testing and end-to-end test suites using Vitest and Playwright to boost release reliability.",
      "Engineered reusable UI component systems with strict design token governance, driving uniform consistency across enterprise dashboard modules."
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Playwright", "Git"]
  },
  {
    id: "lamda-logs-intern",
    role: "Software Developer Intern",
    company: "Lamda Logs",
    location: "Ahmedabad, India",
    period: "Jan 2025 – May 2025",
    type: "Internship",
    leadStory: "DEVELOPING CORE UI MODULES AND API INTEGRATIONS",
    highlights: [
      "Built interactive data tables, filter toolbars, and responsive form workflows under senior mentorship.",
      "Optimized client-side rendering bottlenecks and refactored legacy JavaScript modules to strict TypeScript.",
      "Integrated third-party APIs and webhook consumers, guaranteeing robust error handling and telemetry reporting.",
      "Participated actively in daily engineering standups, PR code reviews, and sprint planning sessions."
    ],
    technologies: ["JavaScript", "TypeScript", "React", "Bootstrap", "Tailwind CSS", "Axios", "Git"]
  }
];
