import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="card hard-shadow-hover">
      <div class="card-body">
        <h3 class="card-title">{{ project().title }}</h3>
        <p class="card-desc">{{ project().description }}</p>
      </div>
      @if (project().tags?.length) {
        <div class="card-tags" aria-label="Technologies used">
          @for (tag of project().tags; track tag) {
            <span class="tag">{{ tag }}</span>
          }
        </div>
      }
      <div class="card-links">
        @if (project().appUrl) {
          <a
            [href]="project().appUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="link-btn link-btn--primary"
            aria-label="Open live application for {{ project().title }}"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M3.75 2h3.5a.75.75 0 010 1.5h-3.5a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-3.5a.75.75 0 011.5 0v3.5A1.75 1.75 0 0112.25 14h-8.5A1.75 1.75 0 012 12.25v-8.5C2 2.784 2.784 2 3.75 2zm6.854-.22a.75.75 0 01.22.53v4.25a.75.75 0 01-1.5 0V4.06L5.53 7.854a.75.75 0 01-1.06-1.06L8.44 2.824H5.94a.75.75 0 010-1.5h4.25a.75.75 0 01.414.126z"
              />
            </svg>
            Live App
          </a>
        }
        @if (project().githubUrl) {
          <a
            [href]="project().githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="link-btn"
            aria-label="View source code on GitHub for {{ project().title }}"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 01-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 010 8c0-4.42 3.58-8 8-8z"
              />
            </svg>
            Source
          </a>
        }
      </div>
    </article>
  `,
  styles: `
    .card {
      border-right: 1px solid #111111;
      border-bottom: 1px solid #111111;
      background-color: #f9f9f7;
      display: flex;
      flex-direction: column;
    }

    .card-body {
      padding: 1.25rem 1.25rem 0.75rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .card-title {
      font-family: 'Playfair Display', 'Times New Roman', serif;
      font-size: 1.125rem;
      font-weight: 700;
      color: #111111;
      margin: 0;
      line-height: 1.2;
    }

    .card-desc {
      font-family: 'Lora', Georgia, serif;
      font-size: 0.8125rem;
      color: #525252;
      margin: 0;
      line-height: 1.625;
      flex: 1;
    }

    .card-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
      padding: 0 1.25rem 0.75rem;
      border-top: 1px solid #e5e5e0;
      padding-top: 0.75rem;
    }

    .tag {
      font-family: 'JetBrains Mono', 'Courier New', monospace;
      font-size: 0.6rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 0.2rem 0.4rem;
      border: 1px solid #a3a3a3;
      color: #525252;
      background: transparent;
    }

    .card-links {
      display: flex;
      gap: 0;
      border-top: 1px solid #111111;
    }

    .link-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.375rem;
      padding: 0.5rem 0.875rem;
      font-family: 'Inter', 'Helvetica Neue', sans-serif;
      font-size: 0.6875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #111111;
      text-decoration: none;
      border-right: 1px solid #111111;
      background: transparent;
      min-height: 44px;
      transition:
        background-color 0.2s ease-out,
        color 0.2s ease-out;
    }

    .link-btn:last-child {
      border-right: none;
    }

    .link-btn:hover {
      background-color: #111111;
      color: #f9f9f7;
      text-decoration: none;
    }

    .link-btn--primary {
      background-color: #111111;
      color: #f9f9f7;
    }

    .link-btn--primary:hover {
      background-color: #f9f9f7;
      color: #111111;
    }
  `,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
