import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' }, // Default route for Project
  { path: 'list', component: ProjectListComponent }, // Project list
  { path: 'create', component: CreateProjectComponent }, // Create a new project
  { path: ':id/edit', component: CreateProjectComponent }, // Edit project by ID
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
