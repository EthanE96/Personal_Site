import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type RateLimitError = 'cooldown' | 'max_reached';

const STORAGE_KEY = 'contact_submissions';
const COOLDOWN_MS = 60_000;           // 1 minute between submissions
const MAX_PER_DAY = 3;                // max submissions per 24 hours
const WINDOW_MS = 24 * 60 * 60 * 1000;

@Injectable({ providedIn: 'root' })
export class EmailService {
  private readonly http = inject(HttpClient);

  checkRateLimit(): RateLimitError | null {
    const timestamps = this.getTimestamps();
    const now = Date.now();

    if (timestamps.length >= MAX_PER_DAY) {
      return 'max_reached';
    }

    const last = timestamps.at(-1);
    if (last !== undefined && now - last < COOLDOWN_MS) {
      return 'cooldown';
    }

    return null;
  }

  send(payload: ContactPayload): Observable<void> {
    const limitError = this.checkRateLimit();
    if (limitError) {
      return throwError(() => limitError);
    }

    this.recordSubmission();
    return this.http.post<void>(environment.apiUrl, payload);
  }

  cooldownRemainingSeconds(): number {
    const last = this.getTimestamps().at(-1);
    if (last === undefined) return 0;
    return Math.max(0, Math.ceil((COOLDOWN_MS - (Date.now() - last)) / 1000));
  }

  private getTimestamps(): number[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed: unknown = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) return [];
      const now = Date.now();
      // Prune entries older than the rolling 24h window
      return (parsed as number[]).filter(t => typeof t === 'number' && now - t < WINDOW_MS);
    } catch {
      return [];
    }
  }

  private recordSubmission(): void {
    const timestamps = this.getTimestamps();
    timestamps.push(Date.now());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timestamps));
  }
}
