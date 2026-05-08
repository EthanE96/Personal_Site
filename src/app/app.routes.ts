import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing').then((m) => m.LandingComponent),
    title: 'Ethan Edwards',
  },
  {
    path: 'resume',
    loadComponent: () => import('./pages/resume/resume').then((m) => m.ResumeComponent),
    title: 'Ethan Edwards — Resume',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.ContactComponent),
    title: 'Ethan Edwards — Contact',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFoundComponent),
    title: 'Ethan Edwards — Page Not Found',
  },
];
