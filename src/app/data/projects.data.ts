import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'AI Chat Platform',
    description:
      'A real-time AI-powered chat application built with Angular and Node.js. Features streaming responses, conversation history, and multiple AI model support.',
    appUrl: 'https://example.com/ai-chat',
    githubUrl: 'https://github.com/EthanE96/ai-chat',
    tags: ['Angular', 'Node.js', 'OpenAI', 'WebSockets'],
  },
  {
    title: 'Cloud Infrastructure Dashboard',
    description:
      'Monitoring dashboard for Azure cloud resources with real-time metrics, alerting, and cost tracking. Built with Grafana and Prometheus integrations.',
    appUrl: 'https://example.com/cloud-dash',
    githubUrl: 'https://github.com/EthanE96/cloud-dashboard',
    tags: ['Angular', 'Azure', 'Grafana', 'Docker'],
  },
  {
    title: 'SAP Integration Toolkit',
    description:
      'A toolkit for building SAP BTP integrations with pre-built connectors, data transformation pipelines, and automated testing utilities.',
    githubUrl: 'https://github.com/EthanE96/sap-toolkit',
    tags: ['TypeScript', 'SAP BTP', 'REST API', 'Node.js'],
  },
  {
    title: 'Personal Portfolio',
    description:
      'This personal website built with Angular and Tailwind CSS. Features dark/light theme toggle, responsive design, and GitHub-inspired layout.',
    githubUrl: 'https://github.com/EthanE96/personal-site',
    tags: ['Angular', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'Mileage & Timesheet Tracker',
    description:
      'Enterprise timesheet and mileage tracking application for non-profit organizations. Automated calculations and report generation with Excel integration.',
    appUrl: 'https://example.com/tracker',
    githubUrl: 'https://github.com/EthanE96/timesheet-tracker',
    tags: ['Power Apps', 'Power Automate', 'Excel'],
  },
];
