export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}