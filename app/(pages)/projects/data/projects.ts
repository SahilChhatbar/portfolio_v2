export interface ProjectItem {
  id: string
  title: string
  subtitle: string
  date: string
  edition: string
  kicker?: string
  wireTag?: string
  leadHeadline: string
  description: string
  fullStory: string[]
  tags: string[]
  image: string
  imageAlt: string
  caption: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  priority?: boolean
}

export interface ProjectsData {
  meta: {
    pageNumber: number
    totalPages: number
    pageTitle: string
    category: string
    subtitle: string
    prevHref: string
    nextHref: string
  }
  projects: ProjectItem[]
  githubSection: {
    tag: string
    headline: string
    description: string
    actionText: string
    actionHref: string
  }
}

export const PROJECTS_DATA: ProjectsData = {
  meta: {
    pageNumber: 3,
    totalPages: 6,
    pageTitle: 'PROJECTS',
    category: 'SECTION III • FEATURED PROJECTS',
    subtitle: 'Three full-stack projects I built end to end. Each has a live demo and source code.',
    prevHref: '/experience',
    nextHref: '/skills',
  },
  projects: [
    {
      id: 'fitrep',
      title: 'FitRep',
      subtitle: 'Full-Stack Fitness & Diet Tracking Platform',
      date: 'FITNESS PLATFORM',
      edition: 'FULL-STACK APP',
      kicker: 'FEATURED PROJECT • FULL-STACK APP',
      wireTag: 'PROJECT 01 • FITNESS PLATFORM',
      leadHeadline: 'FITREP: A PERSONAL PLATFORM FOR TRACKING FITNESS AND PROGRESS',
      description:
        'Log workouts and meals and watch your progress over time. Built with Next.js, Mantine UI, TanStack Query and a Node.js/Express/MongoDB backend.',
      fullStory: [
        'Server-side rendering with Next.js for fast first loads.',
        'Reusable, responsive interface built with Mantine UI.',
        'TanStack Query handles data fetching and caching, so screens stay quick and in sync.',
        'Custom Node.js, Express and MongoDB backend that stores workouts, meals and progress.',
      ],
      tags: [
        'Next.js',
        'React',
        'Mantine UI',
        'TanStack Query',
        'Node.js',
        'Express.js',
        'MongoDB',
      ],
      image: '/images/projects/fitrep.png',
      imageAlt: 'FitRep Application Interface Preview',
      caption: 'FitRep analytics dashboard tracking weekly volume load and exercise milestones.',
      liveUrl: 'https://fit-rep.vercel.app/',
      githubUrl: 'https://github.com/SahilChhatbar/fitrep',
      featured: true,
      priority: true,
    },
    {
      id: 'radioverse',
      title: 'RadioVerse',
      subtitle: 'Full-Stack Radio Streaming Platform',
      date: 'AUDIO PLATFORM',
      edition: 'FULL-STACK APP',
      kicker: 'WEB APPLICATION • AUDIO PLATFORM',
      wireTag: 'PROJECT 02 • AUDIO STREAMING',
      leadHeadline: 'RADIOVERSE: GLOBAL RADIO DISCOVERY AND STREAMING IN ONE PLACE',
      description:
        'Discover and stream radio stations from around the world, with accounts and playlists. Built with Next.js, Redux and a Node.js/Express/MongoDB backend.',
      fullStory: [
        'Next.js with isomorphic rendering for a responsive, efficient experience.',
        'Redux (Flux architecture) keeps playback and playlist state predictable.',
        'Node.js, Express and MongoDB backend for stations, accounts and playlists.',
        'Frontend and backend connected through real-world API and audio streaming workflows.',
      ],
      tags: ['Next.js', 'React', 'Redux', 'Node.js', 'Express.js', 'MongoDB'],
      image: '/images/projects/radioverse.png',
      imageAlt: 'RadioVerse Global Stream Interface',
      caption:
        'RadioVerse global stream interface supporting stations, accounts, and custom playlists.',
      liveUrl: 'https://radioverse.vercel.app/',
      githubUrl: 'https://github.com/SahilChhatbar/radio-head',
      featured: true,
    },
    {
      id: 'cinescope',
      title: 'CineScope',
      subtitle: 'Movie Discovery Platform',
      date: 'MEDIA PLATFORM',
      edition: 'WEB APPLICATION',
      kicker: 'WEB APPLICATION • MEDIA PLATFORM',
      wireTag: 'PROJECT 03 • MEDIA DISCOVERY',
      leadHeadline: 'CINESCOPE: MOVIE DISCOVERY THROUGH SEARCH, FILTERING, AND DETAILED PAGES',
      description:
        'Search and filter movies, then open detail pages with the key information. Built with React, Mantine UI and TanStack Query.',
      fullStory: [
        'Responsive React interface designed for browsing and discovery.',
        'Consistent, reusable components from Mantine UI.',
        'TanStack Query caches results so searching and filtering feel quick.',
        'Search, filtering and detailed movie pages.',
      ],
      tags: ['React', 'Mantine UI', 'TanStack Query'],
      image: '/images/projects/cinescope.jpg',
      imageAlt: 'CineScope Movie Discovery Dashboard',
      caption: 'CineScope curated catalog displaying high-resolution movie reels and reviews.',
      liveUrl: 'https://cinescope-gamma.vercel.app/',
      githubUrl: 'https://github.com/SahilChhatbar/cine-scope',
      featured: true,
    },
  ],
  githubSection: {
    tag: 'GITHUB REPOSITORIES',
    headline: 'MORE WORK ON GITHUB',
    description: 'More of my code lives on GitHub: side projects, experiments and full-stack apps.',
    actionText: 'VIEW GITHUB REPOSITORIES',
    actionHref: 'https://github.com/SahilChhatbar',
  },
}
