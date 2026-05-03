import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-landing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCardComponent],
  template: `
    <div class="landing">
      <div class="header">
        <h2 class="heading">Projects</h2>
        <p class="subheading">A collection of applications and tools I've built.</p>
      </div>
      <div class="grid">
        @for (project of projects; track project.title) {
          <app-project-card [project]="project" />
        }
      </div>
    </div>
  `,
  styles: `
    .landing {
      padding: 2rem;
      max-width: 960px;
    }

    .header {
      margin-bottom: 1.5rem;
    }

    .heading {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0;
      color: var(--color-text-primary);
    }

    .subheading {
      font-size: 0.875rem;
      color: var(--color-text-secondary);
      margin: 0.25rem 0 0;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    @media (min-width: 768px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `,
})
export class LandingComponent {
  protected readonly projects = PROJECTS;
}
