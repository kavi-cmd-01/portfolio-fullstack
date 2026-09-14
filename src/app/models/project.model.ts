export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  highlights: string[];
}
