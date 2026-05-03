import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class ResumeComponent {}
