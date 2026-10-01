export interface CareerMilestone {
  year: string
  headline: string
  summary: string
  logo?: string
}

export interface EducationCredential {
  degree: string
  institution: string
  location: string
  year: string
  score?: string
  details: string[]
  logo?: string
}

export interface CareerData {
  meta: {
    pageNumber: number
    totalPages: number
    pageTitle: string
    category: string
    subtitle: string
    prevHref: string
    nextHref: string
  }
  overview: {
    dispatchesTag: string
    archiveTag: string
    headline: string
    subtitle: string
  }
  timelineWireTag: string
  milestones: CareerMilestone[]
  pedigreeTag: string
  education: EducationCredential[]
}

export const CAREER_DATA: CareerData = {
  meta: {
    pageNumber: 5,
    totalPages: 6,
    pageTitle: 'CAREER & EDUCATION',
    category: 'SECTION V • CAREER & EDUCATION',
    subtitle: 'A chronological timeline of professional experience, milestones, and education.',
    prevHref: '/skills',
    nextHref: '/contact',
  },
  overview: {
    dispatchesTag: 'CAREER TIMELINE',
    archiveTag: 'CHRONOLOGICAL HISTORY',
    headline: 'MY JOURNEY SO FAR',
    subtitle: 'How I went from engineering student to working developer.',
  },
  timelineWireTag: 'TIMELINE',
  milestones: [
    {
      year: 'JUN 2025 – AUG 2026',
      headline: 'SOFTWARE DEVELOPER AT LAMDA LOGS',
      logo: '/images/career-education/lamda.svg',
      summary:
        'Transitioned into a full-time software developer role, delivering scalable enterprise interfaces, performance-optimized data tables, and analytics dashboards while establishing automated testing with Vitest and Playwright.',
    },
    {
      year: 'JUN 2025',
      headline: 'GRADUATED B.E. IN COMPUTER SCIENCE (AIML)',
      logo: '/images/career-education/gtu.svg',
      summary:
        'Finished my Bachelor of Engineering in Computer Science (AI & ML) at New LJ Institute of Engineering and Technology (GTU) with a 9.04 CGPA.',
    },
    {
      year: 'JAN 2025 – MAY 2025',
      headline: 'SOFTWARE DEVELOPER INTERN AT LAMDA LOGS',
      logo: '/images/career-education/lamda.svg',
      summary:
        'Joined Lamda Logs (formerly Elixir Techne) and did my first production React and TypeScript work: UI components and REST API integrations.',
    },
    {
      year: 'JUN 2024 – AUG 2024',
      headline: 'WORDPRESS DEVELOPER INTERN AT BIG SOCIAL MEDIA',
      logo: '/images/career-education/bsm.svg',
      summary:
        'My first professional role: building and customizing live client websites with Elementor, plugins and custom CSS.',
    },
    {
      year: '2022 – 2024',
      headline: 'TEACHING MYSELF WEB DEVELOPMENT',
      summary:
        'Taught myself modern web development with JavaScript, TypeScript, React and Next.js, and built my first full-stack projects.',
    },
    {
      year: '2021',
      headline: 'FINISHED HSC AND STARTED ENGINEERING',
      logo: '/images/career-education/gtu.svg',
      summary:
        'Completed HSC (Science) with 70.15% and began my B.E. in Computer Science (AI & ML) at New LJ Institute of Engineering and Technology (GTU).',
    },
    {
      year: '2019',
      headline: 'COMPLETED SECONDARY EDUCATION (SSC)',
      logo: '/images/career-education/hbk.svg',
      summary: 'Completed SSC at HB Kapadia New High School with 74%.',
    },
  ],
  pedigreeTag: 'EDUCATION',
  education: [
    {
      degree: 'Bachelor of Engineering in Computer Science & Engineering (AIML)',
      institution: 'New LJ Institute of Engineering and Technology (GTU)',
      location: 'Ahmedabad, Gujarat, India',
      year: '2021 – 2025 (Graduated June 2025)',
      score: 'CGPA: 9.04',
      logo: '/images/career-education/gtu.svg',
      details: [
        'Affiliated with Gujarat Technological University (GTU), specializing in Artificial Intelligence & Machine Learning.',
        'Coursework in Data Structures, Algorithms, Database Management Systems, Computer Networks and Software Engineering.',
        'Built full-stack projects alongside my studies, including a radio streaming platform and a fitness tracker.',
      ],
    },
    {
      degree: 'Higher Secondary Certificate (HSC) — Science Stream',
      institution: 'HB Kapadia New High School',
      location: 'Ahmedabad, Gujarat, India',
      year: '2019 – 2021',
      score: 'Percentage: 70.15%',
      logo: '/images/career-education/hbk.svg',
      details: ['Core subjects: Physics, Chemistry and Mathematics.'],
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'HB Kapadia New High School',
      location: 'Ahmedabad, Gujarat, India',
      year: 'Completed March 2019',
      score: 'Percentage: 74.00%',
      logo: '/images/career-education/hbk.svg',
      details: ['Built my foundation in Mathematics and Science.'],
    },
  ],
}
