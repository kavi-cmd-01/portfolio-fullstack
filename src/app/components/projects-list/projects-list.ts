import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects-list',
  imports: [],
  templateUrl: './projects-list.html',
  styleUrl: './projects-list.css',
})
export class ProjectsListComponent {
  projects: Project[] = PROJECTS;
}
