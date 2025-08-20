import { Component, input, signal, AfterViewInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
// import { MenuItem } from '../../../core/interfaces/models';
import { animate, style, transition, trigger } from '@angular/animations';
// import { LoginService } from '../../../core/services/login.service';
import { MenuOption } from '../../../../interfaces/menu.interface';
import { RoutesPath } from '../../../../config/global.params';
// import { paramRutas } from '../../../../../config/parametros.constantes';

@Component({
  selector: 'app-menu-desplegable-expand',
  animations: [
    trigger('expandContractMenu',[
      transition(':enter', [
        style({ opacity: 0, height: '0px'}),
        animate('500ms ease-in-out', style({ opacity: 1, height: '*'}))
      ]),
      transition(':leave',[
        animate('500ms ease-in-out', style({ opacity: 0, height: '0px'}))
      ])
    ])
  ],
  imports: [MatListModule, RouterModule, MatIcon],
  templateUrl: './menu-desplegable-expand.component.html',
  styleUrl: './menu-desplegable-expand.component.scss'
})
export class MenuDesplegableExpandComponent implements AfterViewInit{

  item = input.required<MenuOption>()
 
  nestedMenuOpen = signal(false)
  routeHistory = input('')
  constructor(private _router: Router){
    // console.log("item(): ", this.item());
  }

  ngAfterViewInit(): void {
  }

  toogleNested(){
    if (this.item().desplegableValues!.length == 0 || this.item().desplegable == undefined){
      this._router.navigate([RoutesPath.CONTEXT_CO + "/" + this.item().rutaOption]);
      // return;
    }else{
      this.nestedMenuOpen.set(!this.nestedMenuOpen());
    }
  }


}
