import { ChangeDetectionStrategy, Component, OnDestroy, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { EmailService, RateLimitError } from '../../shared/services/email.service';

type ErrorState = 'cooldown' | 'max_reached' | 'server' | null;

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent implements OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly emailService = inject(EmailService);
  private countdownInterval: ReturnType<typeof setInterval> | null = null;

  protected readonly submitted = signal(false);
  protected readonly sending = signal(false);
  protected readonly errorState = signal<ErrorState>(null);
  protected readonly cooldownSeconds = signal(0);

  protected readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    this.errorState.set(null);

    const { name, email, subject, message } = this.form.getRawValue();

    this.emailService
      .send({ name: name!, email: email!, subject: subject!, message: message! })
      .subscribe({
        next: () => {
          this.submitted.set(true);
          this.sending.set(false);
        },
        error: (err: RateLimitError | unknown) => {
          this.sending.set(false);
          if (err === 'cooldown') {
            this.errorState.set('cooldown');
            this.startCooldownTimer();
          } else if (err === 'max_reached') {
            this.errorState.set('max_reached');
          } else {
            this.errorState.set('server');
          }
        },
      });
  }

  private startCooldownTimer(): void {
    this.cooldownSeconds.set(this.emailService.cooldownRemainingSeconds());
    this.clearCountdown();
    this.countdownInterval = setInterval(() => {
      const remaining = this.emailService.cooldownRemainingSeconds();
      this.cooldownSeconds.set(remaining);
      if (remaining <= 0) {
        this.clearCountdown();
        this.errorState.set(null);
      }
    }, 1000);
  }

  private clearCountdown(): void {
    if (this.countdownInterval !== null) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
  }

  ngOnDestroy(): void {
    this.clearCountdown();
  }
}
