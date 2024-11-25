import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Define routes for lazy-loaded modules
const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Default route
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule), // Lazy load AuthModule
  },
  {
    path: 'project',
    loadChildren: () =>
      import('./project/project.module').then((m) => m.ProjectModule), // Lazy load ProjectModule
  },
  {
    path: 'position',
    loadChildren: () =>
      import('./position/position.module').then((m) => m.PositionModule), // Lazy load PositionModule
  },
  { path: '**', redirectTo: '/auth/login' }, // Wildcard route to redirect to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
