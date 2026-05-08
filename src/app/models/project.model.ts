export type ProjectStatus = 'Completed' | 'In Progress' | 'Up Next';

export interface Project {
  title: string;
  status: ProjectStatus;
  description: string;
  appUrl?: string;
  githubUrl?: string;
  docsUrl?: string;
  apiUrl?: string;
  tags?: string[];
}
