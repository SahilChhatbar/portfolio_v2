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
      moreLinksText: string;
      moreLinksUrl: string;
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
    subheadline: "",
    bioParagraphs: [
      "Sahil is a Software Developer focused on building responsive, maintainable web applications with React.js, Next.js, TypeScript, and modern frontend technologies. He enjoys problem solving, learning, and turning ideas into practical products.",
      "His experience spans internships and full-time development, working on production applications, complex interfaces, APIs, state management, performance, accessibility, and testing. He has also built full-stack personal projects across fitness, radio streaming, and movie discovery.",
      "An academically strong Computer Science graduate with a 9.04 CGPA, Sahil values curiosity, ownership, collaboration, clear thinking, and continuous improvement. He also embraces AI-assisted development to learn, build, and solve problems more effectively.",
    ],
    quote:
      "Build with curiosity, solve with clarity, and keep creating beyond the screen.",
    actions: {
      emailText: "SEND EMAIL",
      emailUrl: "mailto:sahilchhatbar7@gmail.com",
      linkedinText: "LINKEDIN PROFILE",
      linkedinUrl: "https://www.linkedin.com/in/sahil-chhatbar-2b888523a/",
      moreLinksText: "MORE LINKS",
      moreLinksUrl: "/contact",
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
