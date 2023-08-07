import { Component } from '@angular/core';

import { Company } from './models/compay.model'

import {Router } from '@angular/router'
import { parseHostBindings } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grupo-Dotzha';

  companies: Company[] = [
    {
      id: 1,
      nameCompany: 'Dotzha Ebanisteria',
      descriptionCompany: 'Diseño, fabricación y remodelación de muebles de madera de linea y planos especiales',
      imgCompany:'',
      pinCompany: '50525, Timilpan Edomex.',
      contacUsCompany: '7121262593'
    },
    {
      id: 2,
      nameCompany: 'Marttell',
      descriptionCompany: 'Soluciones Integrales de TI',
      imgCompany:'',
      pinCompany: '50525, Timilpan Edomex.',
      contacUsCompany: '7121262593'
    },
    {
      id: 3,
      nameCompany: 'Dotzha Home Studio',
      descriptionCompany: 'Vibra sin limites, Grabamos tus ideas y las hacemos realidad',
      imgCompany:'',
      pinCompany: '50525, Timilpan Edomex.',
      contacUsCompany: '7121262593'
    },
    {
      id: 4,
      nameCompany: 'Margot',
      descriptionCompany: 'Ropa y Calzado para toda la familia',
      imgCompany:'',
      pinCompany: '50525, Timilpan Edomex.',
      contacUsCompany: '7121262593'
    },
    {
      id: 5,
      nameCompany: 'Dotzha Party',
      descriptionCompany: 'Venta y Renta de mobiliario para culquier tipo de evento',
      imgCompany:'',
      pinCompany: '50525, Timilpan Edomex.',
      contacUsCompany: '7121262593'
    },
    {
      id: 6,
      nameCompany: 'Jhonny Carpintero',
      descriptionCompany: 'Solista y Animador para cualquier tipo de evento',
      imgCompany:'',
      pinCompany: '50525, Timilpan Edomex.',
      contacUsCompany: '7121262593'
    },
    {
      id: 7,
      nameCompany: 'Racki Glez',
      descriptionCompany: 'Cantante para cualquier tipo de evento',
      imgCompany:'',
      pinCompany: '50525, Timilpan Edomex.',
      contacUsCompany: '7121262593'
    },
    {
      id: 8,
      nameCompany: 'Picci Snacks',
      descriptionCompany: 'Comida rapida para botanear',
      imgCompany:'',
      pinCompany: '50525, Timilpan Edomex.',
      contacUsCompany: '7121262593'
    }
  ]

  constructor(private router: Router){
    
    let path = localStorage.getItem('path');

    if(path){
      localStorage.removeItem('path');
      this.router.navigate([path])
    }
  }

}
