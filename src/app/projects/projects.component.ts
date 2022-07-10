import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  
  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
     this.projectsService.getProjects().subscribe((res) => {
      this.projects = res;
     });
  }
}
