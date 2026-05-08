import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar';
import Clarity from '@microsoft/clarity';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.html',
})
export class App {
  constructor() {
    const projectId = 'wo3b8v0vkh';
    Clarity.init(projectId);
  }
}
