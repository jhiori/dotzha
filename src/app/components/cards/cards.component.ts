import { Component, signal,   } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CompaniesDataService } from '../../services/companies-data.service';
import { DataCo } from '../../interfaces/companies.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cards',
  
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  constructor(private dataCo_ : CompaniesDataService){}

  companies = signal<DataCo[]>([])
  
  ngOnInit(){
    console.log('Entra cuando se llama componente')
    this.dataCo_.getCompanies().subscribe(resp => {      
      this.companies.set(resp)
      // console.log('companies',this.companies)
    })

  }

  redirect(url?:string){
    console.log('Amonos fuera')
    window.open(url,'_self')
  }

}
