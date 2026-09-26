export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  edition: string;
  kicker?: string;
  wireTag?: string;
  leadHeadline: string;
  description: string;
  fullStory: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  caption: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  priority?: boolean;
}

export interface ProjectsData {
  meta: {
    pageNumber: number;
    totalPages: number;
    pageTitle: string;
    category: string;
    subtitle: string;
    prevHref: string;
    nextHref: string;
  };
  projects: ProjectItem[];
  githubSection: {
    tag: string;
    headline: string;
    description: string;
    actionText: string;
    actionHref: string;
  };
}

export const PROJECTS_DATA: ProjectsData = {
  meta: {
    pageNumber: 3,
    totalPages: 6,
    pageTitle: "PROJECTS",
    category: "SECTION III • FEATURED PROJECTS",
    subtitle:
      "Detailed case studies on web platforms, streaming applications, and full-stack software.",
    prevHref: "/experience",
    nextHref: "/skills",
  },
  projects: [
    {
      id: "fitrep",
      title: "FitRep",
      subtitle: "Full-Stack Fitness & Diet Tracking Platform",
      date: "FITNESS PLATFORM",
      edition: "FULL-STACK APP",
      kicker: "FEATURED PROJECT • FULL-STACK APP",
      wireTag: "PROJECT 01 • FITNESS PLATFORM",
      leadHeadline:
        "FITREP: A PERSONAL PLATFORM FOR TRACKING FITNESS AND PROGRESS",
      description:
        "A full-stack fitness and diet tracking platform built with Next.js SSR, Mantine UI, TanStack Query, and a Node.js/Express/MongoDB backend.",
      fullStory: [
        "Built with Next.js using server-side rendering for the application experience.",
        "Used Mantine UI to develop reusable and responsive interface components.",
        "Integrated TanStack Query for efficient server-state management and data fetching.",
        "Developed a Node.js and Express.js backend with MongoDB for application data and workflows.",
      ],
      tags: [
        "Next.js",
        "React",
        "Mantine UI",
        "TanStack Query",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      image: "/images/projects/fitrep.png",
      imageAlt: "FitRep Application Interface Preview",
      caption:
        "FitRep analytics dashboard tracking weekly volume load and exercise milestones.",
      liveUrl: "https://fit-rep.vercel.app/",
      githubUrl: "https://github.com/SahilChhatbar/fitrep",
      featured: true,
      priority: true,
    },
    {
      id: "radioverse",
      title: "RadioVerse",
      subtitle: "Full-Stack Radio Streaming Platform",
      date: "AUDIO PLATFORM",
      edition: "FULL-STACK APP",
      kicker: "WEB APPLICATION • AUDIO PLATFORM",
      wireTag: "PROJECT 02 • AUDIO STREAMING",
      leadHeadline: "RADIOVERSE: GLOBAL RADIO DISCOVERY AND STREAMING IN ONE PLACE",
      description:
        "A full-stack radio streaming platform built with Next.js, Redux, and a Node.js/Express/MongoDB backend for discovering and streaming radio stations while supporting accounts and playlists.",
      fullStory: [
        "Built using Next.js with isomorphic rendering for a responsive and efficient web application experience.",
        "Implemented Redux using Flux architecture for predictable client-side state management.",
        "Developed a Node.js and Express.js backend with MongoDB for stations, accounts, and playlists.",
        "Integrated the frontend and backend around real-world API communication and streaming workflows.",
      ],
      tags: ["Next.js", "React", "Redux", "Node.js", "Express.js", "MongoDB"],
      image: "/images/projects/radioverse.png",
      imageAlt: "RadioVerse Global Stream Interface",
      caption:
        "RadioVerse global stream interface supporting stations, accounts, and custom playlists.",
      liveUrl: "https://radioverse.vercel.app/",
      githubUrl: "https://github.com/SahilChhatbar/radio-head",
      featured: true,
    },
    {
      id: "cinescope",
      title: "CineScope",
      subtitle: "Movie Discovery Platform",
      date: "MEDIA PLATFORM",
      edition: "WEB APPLICATION",
      kicker: "WEB APPLICATION • MEDIA PLATFORM",
      wireTag: "PROJECT 03 • MEDIA DISCOVERY",
      leadHeadline: "CINESCOPE: MOVIE DISCOVERY THROUGH SEARCH, FILTERING, AND DETAILED PAGES",
      description:
        "A responsive movie discovery site built with React, Mantine UI, and TanStack Query, featuring search, filtering, and detailed movie pages.",
      fullStory: [
        "Built a responsive React interface focused on movie discovery and exploration.",
        "Used Mantine UI for reusable and consistent interface components.",
        "Integrated TanStack Query for server-state management and efficient data fetching.",
        "Implemented search, filtering, and detailed movie pages for exploring movie information.",
      ],
      tags: [
        "React",
        "Mantine UI",
        "TanStack Query",
      ],
      image: "/images/projects/cinescope.png",
      imageAlt: "CineScope Movie Discovery Dashboard",
      caption:
        "CineScope curated catalog displaying high-resolution movie reels and reviews.",
      liveUrl: "https://cinescope-gamma.vercel.app/",
      githubUrl: "https://github.com/SahilChhatbar/cine-scope",
      featured: true,
    },
  ],
  githubSection: {
    tag: "GITHUB REPOSITORIES",
    headline: "EXPLORE MORE WORK ON GITHUB",
    description:
      "Checkout and view Sahil's repositories, full-stack projects, and work on GitHub.",
    actionText: "VIEW GITHUB REPOSITORIES »",
    actionHref: "https://github.com/SahilChhatbar",
  },
};
