import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

type ErrorState = 'cooldown' | 'max_reached' | 'server' | null;

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

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
}
