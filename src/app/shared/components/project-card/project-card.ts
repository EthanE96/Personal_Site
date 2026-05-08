import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-card.html',
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
