import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionListComponent } from './position-list/position-list.component';
import { CreatePositionComponent } from './create-position/create-position.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' }, // Default route for Position
  { path: 'list', component: PositionListComponent }, // List positions in a project
  { path: 'create', component: CreatePositionComponent }, // Create a new position
  { path: ':id/edit', component: CreatePositionComponent }, // Edit position by ID
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PositionRoutingModule {}
