import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [ProjectListComponent, CreateProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MaterialModule
  ],
})
export class ProjectModule {}
