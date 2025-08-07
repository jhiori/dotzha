import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuildingPageComponent } from "./components/building-page/building-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [//RouterOutlet, 
    BuildingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dotzha';
}
