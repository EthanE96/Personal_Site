import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-landing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCardComponent],
  templateUrl: './landing.html',
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
