import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
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
        @for (project of paginatedProjects(); track project.title) {
          <app-project-card [project]="project" />
        }
      </div>

      <!-- Pagination -->
      @if (totalPages() > 1) {
        <nav class="pagination" aria-label="Project pages">
          <button
            class="page-btn"
            (click)="goToPage(currentPage() - 1)"
            [disabled]="currentPage() === 1"
            aria-label="Previous page"
          >
            ← Prev
          </button>

          @for (page of pageNumbers(); track page) {
            <button
              class="page-btn"
              [class.page-btn--active]="page === currentPage()"
              (click)="goToPage(page)"
              [attr.aria-current]="page === currentPage() ? 'page' : null"
            >
              {{ page }}
            </button>
          }

          <button
            class="page-btn"
            (click)="goToPage(currentPage() + 1)"
            [disabled]="currentPage() === totalPages()"
            aria-label="Next page"
          >
            Next →
          </button>

          <span class="page-info" aria-live="polite">
            {{ currentPage() }} / {{ totalPages() }}
          </span>
        </nav>
      }
    </div>
  `,
  styles: `
    .landing {
      padding: 2rem 2.5rem 3rem;
      width: 100%;
      box-sizing: border-box;
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
      gap: 1.5rem;
      grid-auto-rows: 1fr;
    }

    @media (min-width: 640px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* Pagination */
    .pagination {
      display: flex;
      align-items: center;
      gap: 0;
      margin-top: 2.5rem;
      border: 1px solid #111111;
      width: fit-content;
    }

    .page-btn {
      padding: 0.625rem 1rem;
      border: none;
      border-right: 1px solid #111111;
      background: transparent;
      color: #111111;
      font-family: 'JetBrains Mono', 'Courier New', monospace;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      cursor: pointer;
      min-height: 44px;
      min-width: 44px;
      transition:
        background-color 0.2s ease-out,
        color 0.2s ease-out;
    }

    .page-btn:last-of-type {
      border-right: none;
    }

    .page-btn:hover:not(:disabled):not(.page-btn--active) {
      background-color: #111111;
      color: #f9f9f7;
    }

    .page-btn--active {
      background-color: #111111;
      color: #f9f9f7;
    }

    .page-btn:disabled {
      color: #a3a3a3;
      cursor: not-allowed;
    }

    .page-info {
      font-family: 'JetBrains Mono', 'Courier New', monospace;
      font-size: 0.6rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #737373;
      padding: 0 0.875rem;
      border-left: 1px solid #111111;
      line-height: 44px;
      white-space: nowrap;
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

  private readonly pageSize = 4;
  protected readonly currentPage = signal(1);
  protected readonly totalPages = computed(() => Math.ceil(this.projects.length / this.pageSize));
  protected readonly paginatedProjects = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.projects.slice(start, start + this.pageSize);
  });
  protected readonly pageNumbers = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i + 1),
  );

  protected goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }
}
