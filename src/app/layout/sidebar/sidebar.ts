import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  template: `
    <aside class="sidebar">
      <!-- Masthead -->
      <header class="masthead">
        <p class="edition-label">Portfolio</p>

        <div class="avatar-frame">
          <img
            ngSrc="profile-picture.jpg"
            alt="Ethan Edwards"
            width="400"
            height="400"
            class="avatar"
            priority
          />
        </div>

        <h1 class="masthead-name">Ethan<br />Edwards</h1>
        <p class="masthead-title">AI Solutions Architect</p>
      </header>

      <div class="divider-heavy" role="separator"></div>

      <!-- Edition metadata -->
      <div class="edition-meta">
        <span class="mono-label">Denver, CO</span>
      </div>

      <div class="divider" role="separator"></div>

      <!-- Info links -->
      <div class="info" role="list" aria-label="Contact information">
        <div class="info-item" role="listitem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5C0 2.784.784 2 1.75 2zM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809v6.442zm13-8.181v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81z"
            />
          </svg>
          <a href="mailto:EthanAEdwards5&#64;outlook.com" class="info-link"
            >EthanAEdwards5&#64;outlook.com</a
          >
        </div>
        <div class="info-item" role="listitem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 01-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 010 8c0-4.42 3.58-8 8-8z"
            />
          </svg>
          <a
            href="https://github.com/EthanE96"
            target="_blank"
            rel="noopener noreferrer"
            class="info-link"
            >github/EthanE96</a
          >
        </div>
        <div class="info-item" role="listitem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M12.225 12.225A7 7 0 1 1 1.775 1.775 7 7 0 0 1 12.225 12.225ZM3.89 3.89a5.5 5.5 0 1 0 6.22 0l-.89.89a4 4 0 1 1-4.44 0l-.89-.89ZM8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
            />
          </svg>
          <a
            href="https://linkedin.com/in/ethanaedwards"
            target="_blank"
            rel="noopener noreferrer"
            class="info-link"
            >in/ethanaedwards</a
          >
        </div>
      </div>

      <div class="divider" role="separator"></div>

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
            width="14"
            height="14"
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
            width="14"
            height="14"
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
            width="14"
            height="14"
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

      <!-- Footer of sidebar -->
      <footer class="sidebar-footer">
        <span class="mono-label">Vol. I &mdash; Denver Edition</span>
      </footer>
    </aside>
  `,
  styles: `
    .sidebar {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: #f9f9f7;
      overflow: hidden;
    }

    /* Masthead */
    .masthead {
      padding: 1.25rem 1.5rem 1rem;
      border-bottom: 4px solid #111111;
    }

    /* Profile photo */
    .avatar-frame {
      width: 110px;
      height: 125px;
      margin: 0 0 1rem;
      border: 2px solid #111111;
      overflow: hidden;
      position: relative;
      flex-shrink: 0;
    }

    .avatar {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 12%;
      filter: grayscale(100%);
      transition: filter 0.3s ease-out;
    }

    .avatar:hover {
      filter: grayscale(0%) sepia(20%);
    }

    .edition-label {
      font-family: 'JetBrains Mono', 'Courier New', monospace;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: #cc0000;
      margin: 0 0 0.5rem;
    }

    .masthead-name {
      font-family: 'Playfair Display', 'Times New Roman', serif;
      font-size: 2.5rem;
      font-weight: 900;
      line-height: 1;
      letter-spacing: -0.02em;
      color: #111111;
      margin: 0 0 0.375rem;
    }

    .masthead-title {
      font-family: 'Lora', Georgia, serif;
      font-size: 0.8125rem;
      font-style: italic;
      color: #525252;
      margin: 0;
      line-height: 1.4;
    }

    /* Dividers */
    .divider-heavy {
      height: 2px;
      background-color: #111111;
      margin: 0;
    }

    .divider {
      height: 1px;
      background-color: #111111;
      margin: 0;
    }

    /* Edition meta */
    .edition-meta {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0.375rem 1.5rem;
    }

    .mono-label {
      font-family: 'JetBrains Mono', 'Courier New', monospace;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #737373;
    }

    .mono-sep {
      color: #a3a3a3;
    }

    /* Info */
    .info {
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
      padding: 0.625rem 1.5rem;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #525252;
      font-family: 'Inter', 'Helvetica Neue', sans-serif;
      font-size: 0.8125rem;
    }

    .info-link {
      color: #111111;
      text-decoration: none;
      transition: color 0.2s ease-out;
    }

    .info-link:hover {
      color: #cc0000;
      text-decoration: underline;
      text-underline-offset: 2px;
      text-decoration-thickness: 2px;
      text-decoration-color: #cc0000;
    }

    /* Navigation */
    .nav {
      display: flex;
      flex-direction: column;
      padding: 0.5rem 0;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.625rem 1.5rem;
      font-family: 'Inter', 'Helvetica Neue', sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #525252;
      text-decoration: none;
      border-left: 3px solid transparent;
      transition:
        background-color 0.2s ease-out,
        color 0.2s ease-out,
        border-color 0.2s ease-out;
    }

    .nav-link:hover {
      background-color: #f5f5f5;
      color: #111111;
      text-decoration: none;
    }

    .nav-link.active {
      color: #111111;
      border-left-color: #cc0000;
      background-color: #f5f5f5;
    }

    /* Footer */
    .sidebar-footer {
      margin-top: auto;
      border-top: 1px solid #111111;
      padding: 0.625rem 1.5rem;
    }

    @media (max-width: 768px) {
      .masthead-name {
        font-size: 1.5rem;
      }

      .nav {
        flex-direction: row;
        flex-wrap: wrap;
      }

      .nav-link {
        border-left: none;
        border-bottom: 3px solid transparent;
        padding: 0.625rem 1rem;
      }

      .nav-link.active {
        border-left-color: transparent;
        border-bottom-color: #cc0000;
      }
    }
  `,
})
export class SidebarComponent {}
