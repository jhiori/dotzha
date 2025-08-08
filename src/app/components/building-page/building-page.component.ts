import { Component, inject } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CardsComponent } from "../cards/cards.component";

@Component({
  selector: 'app-building-page',
  standalone:true,
  imports: [
    MatProgressBarModule,
    MatIconModule, // MatIconRegistry,    
    MatButtonModule,
    CardsComponent
],
  // providers: [
  //   provideHttpClient(),
  //   // ... other providers like provideAnimationsAsync()
  // ],
  templateUrl: './building-page.component.html',
  styleUrl: './building-page.component.scss'
})

// export const appConfig: BuildingPageComponent = {
//   providers: [
//     // ... other providers you might have
//     provideHttpClient(), // Add this line
//   ],
// };
export class BuildingPageComponent {
  
  constructor( private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer ) {  
    this.matIconRegistry.addSvgIcon('dotzha-name',
      // this.domSanitizer.bypassSecurityTrustResourceUrl('/building-maintenance/DG_lg_wp.svg')); 
      this.domSanitizer.bypassSecurityTrustResourceUrl('/building-maintenance/DG_wp.svg')); 
  }
}
