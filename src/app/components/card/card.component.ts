import { Component, OnInit, Input } from '@angular/core';

import { Company } from '../../models/compay.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  // company: Company = {
  //   id: 1,
  //   nameCompany: 'Dotzha Ebanisteria',
  //   descriptionCompany: '',
  //   pinCompany: '50525, Timilpan Edomex.',
  //   contacUsCompany: '7121262593'

  // }

  @Input() companyIn: Company = {
      id: 0,
      nameCompany: '',
      descriptionCompany: '',
      imgCompany:'',
      pinCompany: '',
      contacUsCompany: ''
    }

  imgCompanyDefault: string = 'https://lh3.googleusercontent.com/pw/AJFCJaXR-4jA8YhDvwaNvCmH98vkM09546nOuuI0YpR860l4Yz11Au8LakNysJN0IQ_C85jN3mTPbhuFbNTifKU97sTlstA0t50PY5z7y9kpKwOHavys=w2400'
  // imgCompanyDefault = '';

  constructor(){}

  ngOnInit(): void {

  }

  imgError(){
    //this.
  }
}
