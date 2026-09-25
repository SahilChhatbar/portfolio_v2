import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "fitrep",
    title: "FitRep",
    subtitle: "AI-Powered Fitness & Workout Analytics Engine",
    date: "FEATURED PROJECT",
    edition: "FULL-STACK APP",
    leadHeadline: "FITREP: INTELLIGENT WORKOUT TRACKING WITH REAL-TIME ANALYTICS",
    description: "An advanced fitness tracking and progression platform designed for athletes and gym enthusiasts. Features custom routine builders, volume overload analytics, and interactive performance charts.",
    fullStory: [
      "FitRep was architected to eliminate friction in daily workout logging while providing granular analytics on progressive overload, muscular recovery windows, and volume pacing.",
      "Engineered with Next.js App Router, TypeScript, and Tailwind CSS, the platform delivers instantaneous interaction speeds and seamless offline synchronization.",
      "Integrates interactive data visualizations, dynamic 1RM estimators, and personalized workout templates backed by a scalable relational data schema."
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma"],
    image: "/images/projects/fitrep.png",
    imageAlt: "FitRep Application Interface Preview",
    caption: "FitRep analytics dashboard tracking weekly volume load and exercise milestones.",
    liveUrl: "https://github.com/SahilChhatbar",
    githubUrl: "https://github.com/SahilChhatbar/FitRep",
    featured: true,
    columnSpan: 2,
  },
  {
    id: "radioverse",
    title: "RadioVerse",
    subtitle: "Global Radio Explorer & Live Audio Stream Network",
    date: "AUDIO PLATFORM",
    edition: "WEB APPLICATION",
    leadHeadline: "RADIOVERSE: GLOBAL STREAMING FOR 30,000+ LIVE RADIO STATIONS",
    description: "An interactive global radio streaming application connecting listeners to thousands of live stations across continents with low latency buffering, genre filtering, and 3D globe navigation.",
    fullStory: [
      "RadioVerse harnesses web audio streams and real-time metadata parsing to deliver a rich auditory voyage across music, news, and talk stations globally.",
      "Features geolocation-based station discovery, custom playlist bookmarking, and low-latency stream buffer management.",
      "Built with high-fidelity UI components, accessible keyboard shortcuts, and responsive audio visualizers."
    ],
    tags: ["React", "TypeScript", "Web Audio API", "Tailwind CSS", "REST APIs", "Vite"],
    image: "/images/projects/radioverse.png",
    imageAlt: "RadioVerse Global Stream Interface",
    caption: "RadioVerse station dialer mapping worldwide frequencies across 120+ countries.",
    liveUrl: "https://github.com/SahilChhatbar",
    githubUrl: "https://github.com/SahilChhatbar/RadioVerse",
    featured: true,
    columnSpan: 1,
  },
  {
    id: "cinescope",
    title: "CineScope",
    subtitle: "Movie Discovery & Cinematic Recommendation Platform",
    date: "MEDIA PLATFORM",
    edition: "WEB APPLICATION",
    leadHeadline: "CINESCOPE: MOVIE CURATION WITH DEEP METADATA & REVIEWS",
    description: "A comprehensive movie and television exploration engine powered by TMDB metadata, offering dynamic trailers, cast filmographies, personalized watchlists, and recommendation feeds.",
    fullStory: [
      "CineScope provides cinephiles with instant search indexing, granular genre filtering, and cinematic previews with trailer embeds.",
      "Leveraged responsive grid layouts, server-side caching, and optimistic UI updates for watchlist state changes.",
      "Implements advanced search debounce, infinite scroll pagination, and high-performance poster image optimization."
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TMDB API", "Lucide/Iconify"],
    image: "/images/projects/cinescope.png",
    imageAlt: "CineScope Movie Discovery Dashboard",
    caption: "CineScope curated catalog displaying high-resolution movie reels and reviews.",
    liveUrl: "https://github.com/SahilChhatbar",
    githubUrl: "https://github.com/SahilChhatbar/CineScope",
    featured: true,
    columnSpan: 2,
  }
];
