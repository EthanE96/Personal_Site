import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { signal, inject } from '@angular/core';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: `
    <div class="contact newsprint-texture">
      <!-- Editorial header -->
      <header class="page-header">
        <p class="section-kicker">— Get In Touch</p>
        <h2 class="page-headline">Contact</h2>
        <div class="header-rule" role="separator"></div>
        <p class="page-deck">Have a question or want to work together? Send me a message.</p>
      </header>

      @if (submitted()) {
        <div class="success" role="status" aria-live="polite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
            />
          </svg>
          <div>
            <p class="success-title">Message transmitted.</p>
            <p class="success-desc">Thanks for reaching out. I'll get back to you soon.</p>
          </div>
        </div>
      }

      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="form" novalidate>
        <div class="field">
          <label for="name" class="label"
            >Name <span class="required" aria-hidden="true">*</span></label
          >
          <input
            id="name"
            formControlName="name"
            type="text"
            class="input"
            placeholder="Your name"
            autocomplete="name"
          />
          @if (form.controls.name.touched && form.controls.name.errors) {
            <p class="error" role="alert">Name is required.</p>
          }
        </div>

        <div class="field">
          <label for="email" class="label"
            >Email <span class="required" aria-hidden="true">*</span></label
          >
          <input
            id="email"
            formControlName="email"
            type="email"
            class="input"
            placeholder="you@example.com"
            autocomplete="email"
          />
          @if (form.controls.email.touched && form.controls.email.errors) {
            <p class="error" role="alert">
              @if (form.controls.email.errors['required']) {
                Email is required.
              } @else {
                Please enter a valid email address.
              }
            </p>
          }
        </div>

        <div class="field">
          <label for="subject" class="label"
            >Subject <span class="required" aria-hidden="true">*</span></label
          >
          <input
            id="subject"
            formControlName="subject"
            type="text"
            class="input"
            placeholder="What's this about?"
          />
          @if (form.controls.subject.touched && form.controls.subject.errors) {
            <p class="error" role="alert">Subject is required.</p>
          }
        </div>

        <div class="field">
          <label for="message" class="label"
            >Message <span class="required" aria-hidden="true">*</span></label
          >
          <textarea
            id="message"
            formControlName="message"
            class="input textarea"
            rows="6"
            placeholder="Your message..."
          ></textarea>
          @if (form.controls.message.touched && form.controls.message.errors) {
            <p class="error" role="alert">Message is required.</p>
          }
        </div>

        <button type="submit" class="submit-btn" [disabled]="submitted()">Transmit Message</button>
      </form>
    </div>
  `,
  styles: `
    .contact {
      padding: 2rem 2.5rem 3rem;
      max-width: 640px;
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
    }

    /* Success */
    .success {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      padding: 1rem;
      border: 2px solid #111111;
      background-color: #f5f5f5;
      color: #111111;
      margin-bottom: 2rem;
    }

    .success-title {
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      font-size: 1rem;
      margin: 0;
    }

    .success-desc {
      font-family: 'Lora', Georgia, serif;
      font-size: 0.8125rem;
      font-style: italic;
      margin: 0.25rem 0 0;
      color: #525252;
    }

    /* Form */
    .form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    }

    .label {
      font-family: 'Inter', 'Helvetica Neue', sans-serif;
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #111111;
    }

    .required {
      color: #cc0000;
    }

    .input {
      padding: 0.5rem 0.25rem;
      border: none;
      border-bottom: 2px solid #111111;
      background: transparent;
      color: #111111;
      font-family: 'JetBrains Mono', 'Courier New', monospace;
      font-size: 0.875rem;
      border-radius: 0;
      transition: background-color 0.2s ease-out;
    }

    .input::placeholder {
      color: #a3a3a3;
      font-family: 'Lora', Georgia, serif;
      font-style: italic;
      font-size: 0.8125rem;
    }

    .input:focus {
      outline: none;
      background-color: #f0f0f0;
    }

    .textarea {
      resize: vertical;
      min-height: 140px;
    }

    .error {
      font-family: 'JetBrains Mono', 'Courier New', monospace;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #cc0000;
      margin: 0;
    }

    .submit-btn {
      align-self: flex-start;
      padding: 0.75rem 2rem;
      border: 2px solid #111111;
      background-color: #111111;
      color: #f9f9f7;
      font-family: 'Inter', 'Helvetica Neue', sans-serif;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      cursor: pointer;
      min-height: 44px;
      transition:
        background-color 0.2s ease-out,
        color 0.2s ease-out;
    }

    .submit-btn:hover:not(:disabled) {
      background-color: #f9f9f7;
      color: #111111;
    }

    .submit-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .submit-btn:focus-visible {
      outline: 2px solid #111111;
      outline-offset: 2px;
    }

    @media (max-width: 768px) {
      .contact {
        padding: 1.5rem 1.25rem 2rem;
      }

      .submit-btn {
        width: 100%;
        justify-content: center;
      }
    }
  `,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly submitted = signal(false);

  protected readonly form = this.fb.nonNullable.group({
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
    console.log('Contact form submitted:', this.form.getRawValue());
    this.submitted.set(true);
  }
}
