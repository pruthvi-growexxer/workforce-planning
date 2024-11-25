import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionRoutingModule } from './position-routing.module';
import { PositionListComponent } from './position-list/position-list.component';
import { CreatePositionComponent } from './create-position/create-position.component';


@NgModule({
  declarations: [
    PositionListComponent,
    CreatePositionComponent
  ],
  imports: [
    CommonModule,
    PositionRoutingModule
  ]
})
export class PositionModule { }
