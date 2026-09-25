export interface CareerMilestone {
  year: string;
  headline: string;
  summary: string;
}

export interface EducationCredential {
  degree: string;
  institution: string;
  location: string;
  year: string;
  score?: string;
  details: string[];
}

export interface CareerData {
  meta: {
    pageNumber: number;
    totalPages: number;
    pageTitle: string;
    category: string;
    subtitle: string;
    prevHref: string;
    nextHref: string;
  };
  overview: {
    dispatchesTag: string;
    archiveTag: string;
    headline: string;
    subtitle: string;
  };
  timelineWireTag: string;
  milestones: CareerMilestone[];
  currentStation: {
    title: string;
    headline: string;
    description: string;
  };
  pedigreeTag: string;
  education: EducationCredential[];
  rigorNotice: {
    title: string;
    badge: string;
    description: string;
  };
}

export const CAREER_DATA: CareerData = {
  meta: {
    pageNumber: 5,
    totalPages: 6,
    pageTitle: "CAREER & EDUCATION",
    category: "SECTION V • CAREER & EDUCATION",
    subtitle:
      "A chronological timeline of professional experience, milestones, and education.",
    prevHref: "/skills",
    nextHref: "/contact",
  },
  overview: {
    dispatchesTag: "CAREER TIMELINE",
    archiveTag: "CHRONOLOGICAL HISTORY",
    headline: "DEVELOPMENT JOURNEY & ACADEMIC BACKGROUND",
    subtitle:
      "Tracking the growth of Sahil K. Chhatbar across engineering education, professional roles, and key software milestones.",
  },
  timelineWireTag: "CAREER MILESTONES",
  milestones: [
    {
      year: "2021",
      headline: "STARTED ENGINEERING JOURNEY",
      summary:
        "Began Information Technology degree; built first interactive JavaScript applications and algorithmic solutions.",
    },
    {
      year: "2023",
      headline: "FULL-STACK DEVELOPMENT",
      summary:
        "Deepened expertise in React, Next.js, and Node.js ecosystems; launched personal open-source projects including FitRep.",
    },
    {
      year: "2024",
      headline: "AI & TOOLING WORKFLOWS",
      summary:
        "Integrated AI-assisted coding tools, API design patterns, and automated developer tooling into regular workflows.",
    },
    {
      year: "JAN 2025",
      headline: "SOFTWARE DEVELOPER INTERN AT LAMDA LOGS",
      summary:
        "Joined Lamda Logs as Software Developer Intern; contributed to frontend refactoring, UI components, and API integrations.",
    },
    {
      year: "JUN 2025 – PRESENT",
      headline: "SOFTWARE DEVELOPER AT LAMDA LOGS",
      summary:
        "Promoted to full-time Software Developer; architecting high-performance dashboards, test suites, and backend services.",
    },
  ],
  currentStation: {
    title: "CURRENT ROLE",
    headline: "LAMDA LOGS • SOFTWARE DEVELOPER (2025 – PRESENT)",
    description:
      "Contributing to full-stack codebases, design system standardizations, and automated testing suites.",
  },
  pedigreeTag: "EDUCATION",
  education: [
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Gujarat Technological University",
      location: "Gujarat, India",
      year: "2021 – 2025",
      score: "First Class with Distinction",
      details: [
        "Rigorous coursework in Data Structures, Algorithms, Database Management Systems, Computer Networks, and Software Engineering.",
        "Led developer workshops, hackathon teams, and technical showcase exhibitions.",
        "Completed capstone engineering projects focusing on real-time web applications and distributed systems.",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC) — Science Stream",
      institution:
        "Gujarat Secondary and Higher Secondary Education Board",
      location: "Gujarat, India",
      year: "2019 – 2021",
      score: "Distinction",
      details: [
        "Core subjects: Physics, Chemistry, Mathematics, and Computer Science.",
        "Built foundational programming skills in C++ and procedural algorithms.",
      ],
    },
  ],
  rigorNotice: {
    title: "ENGINEERING FOUNDATIONS",
    badge: "FOUNDATIONS",
    description:
      "Theoretical foundations in algorithm complexity (Big-O), memory management, database normalization, and distributed computer networking inform every real-world engineering decision.",
  },
};
