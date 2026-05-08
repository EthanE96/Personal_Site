import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resume.html',
})
export class ResumeComponent {}
