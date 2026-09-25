export interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  edition: string;
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
  columnSpan?: 1 | 2 | 3;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  leadStory: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    icon: string;
    level?: string;
    note?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  details: string[];
  score?: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  icon: string;
  handle: string;
}
