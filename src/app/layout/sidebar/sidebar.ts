import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  template: `
    <aside class="sidebar">
      <!-- Profile -->
      <div class="profile">
        <img
          ngSrc="profile-placeholder.svg"
          alt="Ethan Edwards"
          width="200"
          height="200"
          class="avatar"
          priority
        />
        <h1 class="name">Ethan A. Edwards</h1>
        <p class="title">SAP AI Solutions Engineer @ EY</p>
      </div>

      <!-- Info -->
      <div class="info">
        <div class="info-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
          <span>Denver, Colorado</span>
        </div>
        <div class="info-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5C0 2.784.784 2 1.75 2zM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809v6.442zm13-8.181v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81z"
            />
          </svg>
          <a href="mailto:EthanAEdwards5&#64;outlook.com">EthanAEdwards5&#64;outlook.com</a>
        </div>
        <div class="info-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 01-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 010 8c0-4.42 3.58-8 8-8z"
            />
          </svg>
          <a href="https://github.com/EthanE96" target="_blank" rel="noopener noreferrer"
            >EthanE96</a
          >
        </div>
        <div class="info-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M12.225 12.225A7 7 0 1 1 1.775 1.775 7 7 0 0 1 12.225 12.225ZM3.89 3.89a5.5 5.5 0 1 0 6.22 0l-.89.89a4 4 0 1 1-4.44 0l-.89-.89ZM8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
            />
          </svg>
          <a href="https://linkedin.com/in/ethanaedwards" target="_blank" rel="noopener noreferrer"
            >ethanaedwards</a
          >
        </div>
      </div>

      <!-- Interests -->
      <div class="interests">
        <h3 class="section-label">Interests</h3>
        <div class="tag-list">
          <span class="tag">⛷️ Advanced Skier</span>
          <span class="tag">🔧 Land Cruiser Mechanic</span>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="nav" aria-label="Main navigation">
        <a
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          class="nav-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1h-8a1 1 0 00-1 1v6.708A2.486 2.486 0 014.5 9h8V1.5zM5 3.25a.25.25 0 01.25-.25h5.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-5.5A.25.25 0 015 3.75v-.5zM5.25 5h5.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-5.5A.25.25 0 015 5.75v-.5A.25.25 0 015.25 5z"
            />
          </svg>
          Projects
        </a>
        <a routerLink="/resume" routerLinkActive="active" class="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm7.251 10.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574zM8.755 4.75l-.004 7.322a3.752 3.752 0 011.992-.572H14.5v-9h-3.495a2.25 2.25 0 00-2.25 2.25z"
            />
          </svg>
          Resume
        </a>
        <a routerLink="/contact" routerLinkActive="active" class="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15H1.75A1.75 1.75 0 010 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v.938l5.204 2.906a1.75 1.75 0 001.692 0L13.5 3.688V2.75a.25.25 0 00-.25-.25H1.75zm11.75 2.44L9.063 7.59a3.25 3.25 0 01-3.126 0L1.5 4.94v8.31c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V4.94z"
            />
          </svg>
          Contact
        </a>
      </nav>

      <!-- Theme Toggle -->
      <button
        class="theme-toggle"
        (click)="themeService.toggle()"
        [attr.aria-label]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        @if (themeService.isDark()) {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M8 12a4 4 0 100-8 4 4 0 000 8zm0 1.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm0-13a.75.75 0 01.75.75v.5a.75.75 0 01-1.5 0v-.5A.75.75 0 018 .5zm0 13a.75.75 0 01.75.75v.5a.75.75 0 01-1.5 0v-.5A.75.75 0 018 13.5zM2.343 2.343a.75.75 0 011.061 0l.354.354a.75.75 0 11-1.06 1.06l-.355-.353a.75.75 0 010-1.06zm9.9 9.9a.75.75 0 011.06 0l.354.353a.75.75 0 01-1.06 1.06l-.354-.353a.75.75 0 010-1.06zM.5 8a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 01.5 8zm13 0a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 0113.5 8zM2.343 13.657a.75.75 0 010-1.06l.354-.354a.75.75 0 111.06 1.06l-.353.354a.75.75 0 01-1.06 0zm9.9-9.9a.75.75 0 010-1.06l.354-.354a.75.75 0 011.06 1.06l-.353.354a.75.75 0 01-1.06 0z"
            />
          </svg>
          Light mode
        } @else {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M9.598 1.591a.75.75 0 01.785-.175 7 7 0 11-8.967 8.967.75.75 0 01.961-.96 5.5 5.5 0 007.046-7.046.75.75 0 01.175-.786zm1.616 1.945a7 7 0 01-7.678 7.678 5.5 5.5 0 107.678-7.678z"
            />
          </svg>
          Dark mode
        }
      </button>
    </aside>
  `,
  styles: `
    .sidebar {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      padding: 1.5rem;
      height: 100%;
      overflow-y: auto;
      border-right: 1px solid var(--color-border);
      background-color: var(--color-bg-secondary);
    }

    .profile {
      text-align: center;
    }

    .avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 2px solid var(--color-border);
      margin: 0 auto 0.75rem;
      display: block;
      background-color: var(--color-bg-card);
    }

    .name {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0;
      color: var(--color-text-primary);
    }

    .title {
      font-size: 0.875rem;
      color: var(--color-text-secondary);
      margin: 0.25rem 0 0;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8125rem;
      color: var(--color-text-secondary);
    }

    .info-item svg {
      flex-shrink: 0;
    }

    .info-item a {
      color: var(--color-text-link);
    }

    .interests {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .section-label {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--color-text-secondary);
      margin: 0;
    }

    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
    }

    .tag {
      font-size: 0.75rem;
      padding: 0.125rem 0.5rem;
      border-radius: 9999px;
      background-color: var(--color-tag-bg);
      color: var(--color-tag-text);
    }

    .nav {
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
      border-top: 1px solid var(--color-border);
      padding-top: 1rem;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.75rem;
      border-radius: 0.375rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--color-text-secondary);
      text-decoration: none;
      transition: background-color 0.15s ease;
    }

    .nav-link:hover {
      background-color: var(--color-bg-card-hover);
      color: var(--color-text-primary);
      text-decoration: none;
    }

    .nav-link.active {
      background-color: var(--color-bg-card);
      color: var(--color-text-primary);
      font-weight: 600;
    }

    .theme-toggle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.75rem;
      border: 1px solid var(--color-border);
      border-radius: 0.375rem;
      background: var(--color-bg-card);
      color: var(--color-text-secondary);
      font-size: 0.8125rem;
      cursor: pointer;
      transition:
        background-color 0.15s ease,
        border-color 0.15s ease;
      margin-top: auto;
    }

    .theme-toggle:hover {
      background-color: var(--color-bg-card-hover);
      border-color: var(--color-text-secondary);
    }
  `,
})
export class SidebarComponent {
  protected readonly themeService = inject(ThemeService);
}
