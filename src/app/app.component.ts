import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'happier-work';
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // Register Font Awesome icons
    this.matIconRegistry.addSvgIconSet(
      this.domSanitizer.bypassSecurityTrustResourceUrl('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/sprites/solid.svg')
    );
  }
}
