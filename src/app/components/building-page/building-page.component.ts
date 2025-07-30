import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-building-page',
  standalone:true,
  imports: [
    MatProgressBarModule,
    MatIconModule

  ],
  templateUrl: './building-page.component.html',
  styleUrl: './building-page.component.scss'
})
export class BuildingPageComponent {

}
