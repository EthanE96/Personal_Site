import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { signal, inject } from '@angular/core';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: `
    <div class="contact">
      <div class="header">
        <h2 class="heading">Contact Me</h2>
        <p class="subheading">Have a question or want to work together? Send me a message.</p>
      </div>

      @if (submitted()) {
        <div class="success" role="status">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
            />
          </svg>
          <div>
            <p class="success-title">Message sent!</p>
            <p class="success-desc">Thanks for reaching out. I'll get back to you soon.</p>
          </div>
        </div>
      }

      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="form" novalidate>
        <div class="field">
          <label for="name" class="label">Name <span class="required">*</span></label>
          <input
            id="name"
            formControlName="name"
            type="text"
            class="input"
            placeholder="Your name"
          />
          @if (form.controls.name.touched && form.controls.name.errors) {
            <p class="error" role="alert">Name is required.</p>
          }
        </div>

        <div class="field">
          <label for="email" class="label">Email <span class="required">*</span></label>
          <input
            id="email"
            formControlName="email"
            type="email"
            class="input"
            placeholder="you@example.com"
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
          <label for="subject" class="label">Subject <span class="required">*</span></label>
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
          <label for="message" class="label">Message <span class="required">*</span></label>
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

        <button type="submit" class="submit-btn" [disabled]="submitted()">Send Message</button>
      </form>
    </div>
  `,
  styles: `
    .contact {
      padding: 2rem;
      max-width: 640px;
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

    .success {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      padding: 1rem;
      border: 1px solid var(--color-success);
      border-radius: 0.375rem;
      background-color: color-mix(in srgb, var(--color-success) 10%, transparent);
      color: var(--color-success);
      margin-bottom: 1.5rem;
    }

    .success-title {
      font-weight: 600;
      margin: 0;
    }

    .success-desc {
      font-size: 0.875rem;
      margin: 0.25rem 0 0;
      color: var(--color-text-secondary);
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    }

    .label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--color-text-primary);
    }

    .required {
      color: #f85149;
    }

    .input {
      padding: 0.5rem 0.75rem;
      border: 1px solid var(--color-input-border);
      border-radius: 0.375rem;
      background-color: var(--color-input-bg);
      color: var(--color-text-primary);
      font-size: 0.875rem;
      font-family: inherit;
      transition: border-color 0.15s ease;
    }

    .input:focus {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 25%, transparent);
    }

    .textarea {
      resize: vertical;
      min-height: 120px;
    }

    .error {
      font-size: 0.75rem;
      color: #f85149;
      margin: 0;
    }

    .submit-btn {
      align-self: flex-start;
      padding: 0.5rem 1.25rem;
      border: none;
      border-radius: 0.375rem;
      background-color: var(--color-accent);
      color: #ffffff;
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.15s ease;
    }

    .submit-btn:hover:not(:disabled) {
      background-color: var(--color-accent-hover);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
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

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('Contact form submitted:', this.form.getRawValue());
    this.submitted.set(true);
  }
}
