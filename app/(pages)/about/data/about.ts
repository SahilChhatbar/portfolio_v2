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
    byline: string;
    dateline: string;
    date: string;
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
    prevHref: "/contact",
    nextHref: "/experience",
  },
  article: {
    kicker: "BIOGRAPHY & BACKGROUND",
    headline: "SAHIL CHHATBAR: FULL-STACK SOFTWARE ENGINEER",
    subheadline:
      "Building scalable, high-performance web applications and systems.",
    byline: "SAHIL CHHATBAR",
    dateline: "AHMEDABAD, GUJARAT, INDIA",
    date: "Tuesday, 7th Oct 2003",
    bioParagraphs: [
      "From writing clean server-rendered architectures to orchestrating high-throughput backend APIs and AI-assisted workflows, Sahil brings engineering rigor to every codebase. He bridges the gap between deep technical foundations and intuitive user interfaces.",
      "Currently building enterprise-grade applications at Lamda Logs, Sahil has engineered scalable full-stack features, optimized database indexing pipelines, and spearheaded modern frontend refactors using React, Next.js, and TypeScript.",
      "When not shipping production releases, he conducts deep-dive technical explorations across browser rendering pipelines, micro-frontends, distributed state, and agentic workflows.",
    ],
    quote: "Clean architectures outlive hype cycles.",
    actions: {
      emailText: "SEND EMAIL",
      emailUrl: "mailto:sahilchhatbar003@gmail.com",
      linkedinText: "LINKEDIN PROFILE",
      linkedinUrl: "https://linkedin.com/in/sahil-chhatbar",
    },
  },
  profileImage: {
    src: "/images/profile/profile-placeholder.jpg",
    alt: "Sahil K. Chhatbar",
    caption: "Sahil K. Chhatbar — Software Engineer & Builder.",
    credit: "PORTFOLIO ARCHIVE / SAHIL CHHATBAR",
    aspectRatio: "portrait",
    priority: true,
  },
  dossier: {
    title: "PROFILE SUMMARY",
    items: [
      { label: "NAME:", value: "SAHIL K. CHHATBAR" },
      { label: "DATE OF BIRTH:", value: "TUESDAY, 7TH OCT 2003" },
      { label: "SPECIALTY:", value: "FULL-STACK & AI" },
      { label: "LOCATION:", value: "Ahmedabad, Gujarat, India" },
    ],
  },
  manifesto: {
    title: "1. ENGINEERING PHILOSOPHY",
    description:
      "I prioritize maintainability, predictable data flow, and minimal runtime surprises. Every abstraction must earn its place in the codebase through measurable simplification or velocity gain.",
    points: [
      "• Strict type safety as an active design guide.",
      "• Server-side rendering for speed and crawlability.",
      "• Accessible, semantic markup from day zero.",
    ],
  },
  refactoring: {
    title: "2. CONTINUOUS IMPROVEMENT",
    paragraphs: [
      "Technology is never static. I continually refine existing codebases, eliminating dead branches, upgrading build toolchains, and benchmarking real user performance in production environments.",
      "From exploring React 19 Server Actions to automating E2E workflows with Playwright, my goal is to remain on the productive frontier of web engineering.",
    ],
  },
  offDuty: {
    title: "INTERESTS & HOBBIES",
    badge: "INTERESTS",
    description:
      "Outside of coding, Sahil enjoys reading technical books, exploring cinema, audio streaming platforms, fitness tracking, and typography design.",
    status: "STATUS: ALWAYS LEARNING",
  },
};
