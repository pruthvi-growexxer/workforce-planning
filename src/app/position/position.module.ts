import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionRoutingModule } from './position-routing.module';
import { PositionListComponent } from './position-list/position-list.component';
import { CreatePositionComponent } from './create-position/create-position.component';
import { CoreModule } from '../core/core.module';
import { BaseChartDirective } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material/material.module';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [PositionListComponent, CreatePositionComponent],
  imports: [
    CommonModule,
    PositionRoutingModule,
    CoreModule,
    BaseChartDirective,
    FormsModule,
    MaterialModule,
    AgGridModule,
  ],
  providers: [
    provideNoopAnimations()
  ]
})
export class PositionModule {}
