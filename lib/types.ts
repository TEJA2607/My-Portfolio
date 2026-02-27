export interface Project {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'Tools';
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
