import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-landing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCardComponent],
  template: `
    <div class="landing newsprint-texture">
      <!-- Editorial header -->
      <header class="page-header">
        <p class="section-kicker">— Selected Work</p>
        <h2 class="page-headline">Projects</h2>
        <div class="header-rule" role="separator"></div>
        <p class="page-deck">A collection of applications and tools I've designed and built.</p>
      </header>

      <!-- Project grid -->
      <div class="grid">
        @for (project of projects; track project.title) {
          <app-project-card [project]="project" />
        }
      </div>
    </div>
  `,
  styles: `
    .landing {
      padding: 2rem 2.5rem 3rem;
      max-width: 960px;
    }

    /* Editorial header */
    .page-header {
      margin-bottom: 2.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 4px solid #111111;
    }

    .section-kicker {
      font-family: 'JetBrains Mono', 'Courier New', monospace;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: #cc0000;
      margin: 0 0 0.5rem;
    }

    .page-headline {
      font-family: 'Playfair Display', 'Times New Roman', serif;
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 900;
      line-height: 0.9;
      letter-spacing: -0.03em;
      color: #111111;
      margin: 0 0 1rem;
    }

    .header-rule {
      width: 3rem;
      height: 3px;
      background-color: #111111;
      margin-bottom: 0.75rem;
    }

    .page-deck {
      font-family: 'Lora', Georgia, serif;
      font-size: 0.9375rem;
      font-style: italic;
      color: #525252;
      margin: 0;
      max-width: 480px;
    }

    /* Grid */
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      border-top: 1px solid #111111;
      border-left: 1px solid #111111;
    }

    @media (min-width: 640px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .landing {
        padding: 1.5rem 1.25rem 2rem;
      }
    }
  `,
})
export class LandingComponent {
  protected readonly projects = PROJECTS;
}
