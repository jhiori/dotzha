import { APP_INITIALIZER, Component, inject } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CardsComponent } from "../cards/cards.component";
import { Router, RouterModule } from '@angular/router'; 
import { LoadSvgIcons } from '../../config/global.functions';

@Component({
  selector: 'app-building-page',
  standalone:true,
  imports: [
    MatProgressBarModule,
    MatIconModule, // MatIconRegistry,    
    MatButtonModule,
    CardsComponent,
    RouterModule

],
  // providers: [
  //   provideHttpClient(),
  //   // ... other providers like provideAnimationsAsync()
  // ],
  // providers:[
  //   {
  //     provide: APP_INITIALIZER,
  //     useFactory: (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => () => LoadSvgIcons(iconRegistry, sanitizer),
  //     deps: [MatIconRegistry, DomSanitizer],
  //     multi: true
  //   }
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
  
  constructor( ) {  
    // this.matIconRegistry.addSvgIcon('dotzha-name',
    //   // this.domSanitizer.bypassSecurityTrustResourceUrl('/building-maintenance/DG_lg_wp.svg')); 
    //   this.domSanitizer.bypassSecurityTrustResourceUrl('/building-maintenance/DG_wp.svg')); 
    
  }
}
