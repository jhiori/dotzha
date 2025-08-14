import { Component } from '@angular/core';

import { BuildingPageComponent } from "./components/building-page/building-page.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    BuildingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dotzha';
}
