import { APP_INITIALIZER, Component } from '@angular/core';

import { BuildingPageComponent } from "./components/building-page/building-page.component";
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // HeaderComponent,
    RouterOutlet,
    ],
  providers:[
    //  {
    //   provide: APP_INITIALIZER,
    //   useFactory: (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => () => LoadSvgIcons(iconRegistry, sanitizer),
    //   deps: [MatIconRegistry, DomSanitizer],
    //   multi: true
    // }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dotzha';
}
