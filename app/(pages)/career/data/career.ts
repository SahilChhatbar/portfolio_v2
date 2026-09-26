export interface CareerMilestone {
  year: string;
  headline: string;
  summary: string;
  logo?: string;
}

export interface EducationCredential {
  degree: string;
  institution: string;
  location: string;
  year: string;
  score?: string;
  details: string[];
  logo?: string;
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
  pedigreeTag: string;
  education: EducationCredential[];
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
  timelineWireTag: "TIMELINE",
  milestones: [
    {
      year: "JUN 2025 – AUG 2026",
      headline: "SOFTWARE DEVELOPER AT LAMDA LOGS",
      logo: "/images/career-education/lamda.svg",
      summary:
        "Transitioned to full-time Software Developer; architected enterprise modules across Flipspaces, ProView, and Lamda Flow, and established testing suites.",
    },
    {
      year: "JUN 2025",
      headline: "GRADUATED B.E. IN COMPUTER SCIENCE (AIML)",
      logo: "/images/career-education/gtu.svg",
      summary:
        "Graduated with a Bachelor of Engineering in Computer Science & Engineering (AIML) from New LJ Institute of Engineering and Technology (GTU) with a 9.04 CGPA.",
    },
    {
      year: "JAN 2025 – MAY 2025",
      headline: "SOFTWARE DEVELOPER INTERN AT LAMDA LOGS",
      logo: "/images/career-education/lamda.svg",
      summary:
        "Joined Lamda Logs (formerly Elixir Techne) as Software Developer Intern; contributed to frontend refactoring, UI components, and API integrations.",
    },
    {
      year: "JUN 2024 – AUG 2024",
      headline: "WORDPRESS DEVELOPER INTERN AT BIG SOCIAL MEDIA",
      logo: "/images/career-education/bsm.svg",
      summary:
        "Built and customized live WordPress websites using Elementor, plugins, and custom CSS at Big Social Media Pvt Ltd.",
    },
    {
      year: "2022 – 2024",
      headline: "EXPLORED WEB DEV & STARTED BUILDING REAL PROJECTS",
      summary:
        "Explored modern web development across JavaScript, TypeScript, React, and Next.js, building full-stack applications and interactive user interfaces.",
    },
    {
      year: "2021",
      headline: "STARTED ENGINEERING JOURNEY",
      logo: "/images/career-education/gtu.svg",
      summary:
        "Began Bachelor of Engineering in Computer Science & Engineering with AIML focus at New LJ Institute of Engineering and Technology (GTU).",
    },
    {
      year: "2021",
      headline: "COMPLETED HIGHER SECONDARY EDUCATION (HSC)",
      logo: "/images/career-education/hbk.svg",
      summary:
        "Completed HSC in Science stream with 70.15% and commenced his engineering journey.",
    },
    {
      year: "2019",
      headline: "COMPLETED SECONDARY EDUCATION (SSC)",
      logo: "/images/career-education/hbk.svg",
      summary:
        "Completed SSC at HB Kapadia New High School with 74.00% and a focus on analytical thinking.",
    },
  ],
  pedigreeTag: "EDUCATION",
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science & Engineering (AIML)",
      institution: "New LJ Institute of Engineering and Technology (GTU)",
      location: "Ahmedabad, Gujarat, India",
      year: "2021 – 2025 (Graduated June 2025)",
      score: "CGPA: 9.04",
      logo: "/images/career-education/gtu.svg",
      details: [
        "Affiliated with Gujarat Technological University (GTU) with specialized coursework in Artificial Intelligence & Machine Learning.",
        "Rigorous coursework in Data Structures, Algorithms, Database Management Systems, Computer Networks, and Software Engineering.",
        "Developed full-stack web platforms, real-time audio systems, and fitness analytics platforms during engineering studies.",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC) — Science Stream",
      institution: "HB Kapadia New High School",
      location: "Ahmedabad, Gujarat, India",
      year: "2019 – 2021",
      score: "Percentage: 70.15%",
      logo: "/images/career-education/hbk.svg",
      details: [
        "Core subjects: Physics, Chemistry, and Mathematics.",
        "Developed computational problem-solving and algorithmic foundations.",
      ],
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "HB Kapadia New High School",
      location: "Ahmedabad, Gujarat, India",
      year: "Completed March 2019",
      score: "Percentage: 74.00%",
      logo: "/images/career-education/hbk.svg",
      details: [
        "Completed secondary education with strong fundamentals in Mathematics and Science.",
      ],
    },
  ],
};
