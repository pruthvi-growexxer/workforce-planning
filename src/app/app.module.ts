import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(),
    provideCharts(withDefaultRegisterables()),
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
