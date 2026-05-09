import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'Nomadi',
    status: 'In Progress',
    description:
      'Nomadi simplifies travel planning by creating personalized, multi-step itineraries tailored to user preferences.',
    appUrl: 'https://example.com',
    githubUrl: 'https://github.com/EthanE96/Nomadi',
    tags: ['Azure', 'MongoDB', 'Express.js', 'Angular', 'Node.js', 'TypeScript', 'LangChain'],
  },
  {
    title: 'CheapGPT',
    status: 'In Progress',
    description:
      'Extremely cheap AI chat platform built designed to provide affordable access to conversational AI capabilities for a wide range of applications.',
    appUrl: 'https://example.com',
    githubUrl: 'https://github.com/EthanE96/CheapGPT',
    tags: ['Fly.io', 'MongoDB', 'Express.js', 'Angular', 'Node.js', 'TypeScript', 'LangChain'],
  },
  {
    title: 'Home Lab',
    status: 'In Progress',
    description:
      'Provides a personal playground for learning, experimentation, and project hosting on an at-home server rack, enabling hands-on experience with various technologies in a physical environment.',
    appUrl: 'https://example.com',
    githubUrl: 'https://github.com/EthanE96/Home_Lab',
    tags: [
      'Server Management',
      'Networking',
      'Monitoring',
      'Local LLMs & Agents',
      'Docker',
      'Tailscale',
    ],
  },
  {
    title: 'MEAN Template',
    status: 'Completed',
    description:
      'Accelerates SaaS delivery by providing a production-ready starting point that reduces setup time, lowers implementation risk, and improves development consistency.',
    appUrl: 'https://orange-glacier-050c76b1e.1.azurestaticapps.net/',
    githubUrl: 'https://github.com/EthanE96/MEAN_Template',
    docsUrl: 'https://icy-field-05d86561e.1.azurestaticapps.net/',
    apiUrl: 'https://mean-app-jtufw3.azurewebsites.net/api/swagger/docs',
    tags: [
      'Azure',
      'Infrastructure as Code',
      'Scripting & Automation',
      'CI/CD Piplines',
      'MongoDB',
      'Express.js',
      'Angular',
      'Node.js',
      'TypeScript',
    ],
  },
  {
    title: 'Personal Site',
    status: 'Completed',
    description:
      'Strengthens professional credibility by presenting experience, projects, and contact pathways in a polished format designed to support hiring and networking conversations.',
    appUrl: 'https://eddyappz.com',
    githubUrl: 'https://github.com/EthanE96/Personal_Site',
    tags: ['Azure', 'Angular', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Marketing'],
  },
];
