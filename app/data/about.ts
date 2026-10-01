export interface AboutDossierItem {
  label: string
  value: string
}

export interface AboutColumn {
  title: string
  description: string
  points?: string[]
  paragraphs?: string[]
}

export interface AboutOffDuty {
  title: string
  badge: string
  description: string
  status: string
}

export interface AboutData {
  meta: {
    pageNumber: number
    totalPages: number
    pageTitle: string
    category: string
    subtitle: string
    prevHref: string
    nextHref: string
  }
  article: {
    kicker: string
    headline: string
    subheadline: string
    bioParagraphs: string[]
    quote: string
    actions: {
      emailText: string
      emailUrl: string
      linkedinText: string
      linkedinUrl: string
      moreLinksText: string
      moreLinksUrl: string
    }
  }
  profileImage: {
    src: string
    alt: string
    caption: string
    credit: string
    aspectRatio: 'portrait' | 'landscape' | 'wide'
    priority: boolean
  }
  dossier: {
    title: string
    items: AboutDossierItem[]
  }
  manifesto: {
    title: string
    description: string
    points: string[]
  }
  refactoring: {
    title: string
    paragraphs: string[]
  }
  offDuty: AboutOffDuty
}

export const ABOUT_DATA: AboutData = {
  meta: {
    pageNumber: 1,
    totalPages: 6,
    pageTitle: 'ABOUT ME',
    category: 'SECTION I • BIOGRAPHY & BACKGROUND',
    subtitle: 'Who I am, how I work, and what I enjoy building.',
    prevHref: '',
    nextHref: '/experience',
  },
  article: {
    kicker: 'BIOGRAPHY & BACKGROUND',
    headline: "HI, I'M SAHIL, A FRONTEND-FOCUSED SOFTWARE DEVELOPER",
    subheadline: 'I build fast, accessible web apps with React, Next.js and TypeScript.',
    bioParagraphs: [
      'I turn complicated workflows into interfaces that feel simple. At Lamda Logs I shipped features across three enterprise products, from tables that handle large datasets to multi-step forms, dashboards and document viewers, working from Figma designs alongside designers and QA.',
      'I care about what users feel but rarely notice: fast loads, keyboard and screen-reader support, and code that teammates can pick up without a walkthrough. Outside work I build full-stack side projects: a fitness tracker, a radio streaming app and a movie discovery site.',
      'I hold a B.E. in Computer Science (AI & ML) with a 9.04 CGPA. I use AI tools like Claude Code and Codex to move faster, while still reviewing and understanding everything I ship.',
    ],
    quote: 'Build with curiosity, solve with clarity, and keep creating beyond the screen.',
    actions: {
      emailText: 'SEND EMAIL',
      emailUrl: 'mailto:sahilchhatbar7@gmail.com',
      linkedinText: 'LINKEDIN PROFILE',
      linkedinUrl: 'https://www.linkedin.com/in/sahil-chhatbar-2b888523a/',
      moreLinksText: 'MORE LINKS',
      moreLinksUrl: '/contact',
    },
  },
  profileImage: {
    src: '/images/profile/me.jpg',
    alt: 'Sahil Chhatbar',
    caption: 'Sahil Chhatbar — Software Developer & Builder.',
    credit: 'PORTFOLIO ARCHIVE / SAHIL CHHATBAR',
    aspectRatio: 'portrait',
    priority: true,
  },
  dossier: {
    title: 'PROFILE SUMMARY',
    items: [
      { label: 'NAME:', value: 'SAHIL K. CHHATBAR' },
      { label: 'DATE:', value: 'THURSDAY, 1ST OCT 2026' },
      { label: 'ROLE:', value: 'SOFTWARE DEVELOPER (FRONTEND)' },
      { label: 'FOCUS:', value: 'REACT, NEXT.JS, TYPESCRIPT' },
      { label: 'LOCATION:', value: 'Ahmedabad, Gujarat, India' },
      { label: 'STATUS:', value: 'OPEN TO FULL-TIME & FREELANCE WORK' },
    ],
  },
  manifesto: {
    title: '1. HOW I WORK',
    description:
      'Good software mixes logic, curiosity and creativity. I make sure I understand the problem before I write code, and I keep solutions clear enough for the next person to maintain.',
    points: [
      '• Technology is a tool for solving real problems and creating better user experiences.',
      '• TypeScript and clear data flow keep features predictable as they grow.',
      '• Accessible, semantic and fast interfaces from the first commit, not as a later fix.',
    ],
  },
  refactoring: {
    title: '2. ALWAYS LEARNING',
    paragraphs: [
      'I keep refining how I build: trying new frameworks, tuning rendering performance, and writing tests with Vitest and Playwright.',
      'I use AI agents like Claude Code and Codex for debugging and exploration, and TanStack Query to keep server data in sync, so the end result is software that is reliable and useful.',
    ],
  },
  offDuty: {
    title: 'BEYOND THE SCREEN',
    badge: 'BEYOND THE SCREEN',
    description:
      'Away from the keyboard, I play badminton, sketch, try glass painting, and watch far too many movies. They keep me curious and creative.',
    status: 'STATUS: ALWAYS CREATING',
  },
}
