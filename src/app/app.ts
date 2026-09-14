import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { ProjectsListComponent } from './components/projects-list/projects-list';
import { SkillsComponent } from './components/skills/skills';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ProjectsListComponent,
    SkillsComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mi-portfolio');
}
