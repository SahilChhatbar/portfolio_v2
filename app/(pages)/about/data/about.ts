export interface AboutDossierItem {
  label: string;
  value: string;
}

export interface AboutColumn {
  title: string;
  description: string;
  points?: string[];
  paragraphs?: string[];
}

export interface AboutOffDuty {
  title: string;
  badge: string;
  description: string;
  status: string;
}

export interface AboutData {
  meta: {
    pageNumber: number;
    totalPages: number;
    pageTitle: string;
    category: string;
    subtitle: string;
    prevHref: string;
    nextHref: string;
  };
  article: {
    kicker: string;
    headline: string;
    subheadline: string;
    bioParagraphs: string[];
    quote: string;
    actions: {
      emailText: string;
      emailUrl: string;
      linkedinText: string;
      linkedinUrl: string;
    };
  };
  profileImage: {
    src: string;
    alt: string;
    caption: string;
    credit: string;
    aspectRatio: "portrait" | "landscape" | "wide";
    priority: boolean;
  };
  dossier: {
    title: string;
    items: AboutDossierItem[];
  };
  manifesto: {
    title: string;
    description: string;
    points: string[];
  };
  refactoring: {
    title: string;
    paragraphs: string[];
  };
  offDuty: AboutOffDuty;
}

export const ABOUT_DATA: AboutData = {
  meta: {
    pageNumber: 1,
    totalPages: 6,
    pageTitle: "ABOUT ME",
    category: "SECTION I • BIOGRAPHY & BACKGROUND",
    subtitle:
      "A deep dive into my background, technical philosophy, and engineering approach.",
    prevHref: "",
    nextHref: "/experience",
  },
  article: {
    kicker: "BIOGRAPHY & BACKGROUND",
    headline: "SAHIL CHHATBAR: SOFTWARE DEVELOPER",
    subheadline:
      "Specializing in React.js, Next.js, TypeScript, and modern web application development.",
    bioParagraphs: [
      "Sahil is a Software Developer focused on building responsive, maintainable, and user-friendly web applications, with a strong interest in frontend engineering, problem solving, and continuous learning.",
      "He works primarily across modern frontend and full-stack web technologies, with professional experience building production applications using React.js, Next.js, TypeScript, JavaScript, Redux, Redux Toolkit, Zustand, TanStack Query, Tailwind CSS, Material UI, and REST APIs.",
      "At Lamda Logs, Sahil has contributed across enterprise products including Flipspaces, ProView (OpenDots), and Lamda Flow. His work spans complex forms, data-heavy interfaces, analytics dashboards, reusable UI components, API integrations, application state management, accessibility improvements, performance optimization, and automated testing.",
      "He enjoys understanding how things work, breaking complex problems into manageable pieces, and turning designs into practical interfaces. His development workflow also incorporates AI agents such as Claude Code, Codex, ChatGPT, and Antigravity."
    ],
    quote: "Build with curiosity, solve with clarity, and keep creating beyond the screen.",
    actions: {
      emailText: "SEND EMAIL",
      emailUrl: "mailto:sahilchhatbar7@gmail.com",
      linkedinText: "LINKEDIN PROFILE",
      linkedinUrl: "https://www.linkedin.com/in/sahil-chhatbar-2b888523a/",
    },
  },
  profileImage: {
    src: "/images/profile/me.jpg",
    alt: "Sahil K. Chhatbar",
    caption: "Sahil K. Chhatbar — Software Developer & Builder.",
    credit: "PORTFOLIO ARCHIVE / SAHIL CHHATBAR",
    aspectRatio: "portrait",
    priority: true,
  },
  dossier: {
    title: "PROFILE SUMMARY",
    items: [
      { label: "NAME:", value: "SAHIL K. CHHATBAR" },
      { label: "DATE OF BIRTH:", value: "TUESDAY, 7TH OCT 2003" },
      { label: "ROLE:", value: "SOFTWARE DEVELOPER" },
      { label: "LOCATION:", value: "Ahmedabad, Gujarat, India" },
    ],
  },
  manifesto: {
    title: "1. PERSONAL PHILOSOPHY",
    description:
      "Software development is a combination of logic, curiosity, and creativity. I prioritize understanding the problem before jumping into implementation, keeping solutions clear and maintainable.",
    points: [
      "• Technology is a tool to solve real problems and create better user experiences.",
      "• Strict type safety and predictable client/server state flow.",
      "• Accessible, semantic, and high-performance interfaces from day zero.",
    ],
  },
  refactoring: {
    title: "2. CONTINUOUS IMPROVEMENT",
    paragraphs: [
      "Technology is never static. I continually refine existing codebases, exploring new frameworks, optimizing rendering pipelines, and automating testing with Playwright and Vitest.",
      "From integrating AI agents (Claude Code, Codex) to streamlining state synchronization with TanStack Query, my goal is to build software that is both robust and meaningful.",
    ],
  },
  offDuty: {
    title: "CREATIVE & ACTIVE INTERESTS",
    badge: "BEYOND THE SCREEN",
    description:
      "Outside of software development, Sahil enjoys playing badminton, sketching, and exploring glass painting. He also loves watching movies and listening to good music — creative interests that keep curiosity active.",
    status: "STATUS: ALWAYS CREATING",
  },
};
