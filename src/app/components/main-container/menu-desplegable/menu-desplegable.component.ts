import { Component, OnInit, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


import { firstValueFrom } from 'rxjs';
import { UserLogin } from '../../../interfaces/login.interface';
// import { RespSrv } from '../../../interfaces/response.interface';
// import { LoginService } from '../../../services/login.service';
import { MenuOption, MenuDesplegable } from '../../../interfaces/menu.interface';
import { MenuDesplegableExpandComponent } from "./menu-desplegable-expand/menu-desplegable-expand.component";
import { MenuService } from '../../../services/menu.service';
// import { CategoriaVista } from '../../../interfaces/categoria-vista.interface';
// import { CategoriaVistaService } from '../../../services/categoria-vista.service';

@Component({
  selector: 'app-menu-desplegable',
  imports: [MatListModule, MenuDesplegableExpandComponent],
  templateUrl: './menu-desplegable.component.html',
  styleUrl: './menu-desplegable.component.scss'
})
export class MenuDesplegableComponent {


  usuarioLogin!: UserLogin;
  // respSrvPerfil!: RespSrv;

  opcionesMenu =  signal<MenuOption[]>([]);

  constructor(
    // private _categoriaVistaService: CategoriaVistaService,
    // private _loginService: LoginService,
    private _menuOptions: MenuService
  ){
    // this.validaPermiso();
    // this.obtenerDatos();

  }

  ngOnInit() {
    console.log('Entra menu ')
    this.obtenerDatosMenu()
  }

  // async validaPermiso(){
  //   const respSrvLogin = await firstValueFrom(this._loginService.isLoggedIn());
  //   if(respSrvLogin.success){
  //     this.usuarioLogin = respSrvLogin.data;
  //     this.obtenerDatos();
  //   } else {
  //     // this.usuarioLogin = {
  //     //   idUsuario: 41
  //     // };
  //     // this.obtenerDatos();
  //     // console.log("validaPermiso.this.usuarioLogin:::");
  //     // console.log(this.usuarioLogin);
  //   }
  // }
  
  // async obtenerDatos(){
  obtenerDatosMenu(){
    // const respSrv = await firstValueFrom(this._categoriaVistaService.getMenuLateral(this.usuarioLogin.idUsuario!));
    // if(respSrv.success){
    //   // console.log(respSrv.data);
    //   this.opcionesMenu.set(respSrv.data);
    // } else {
      
    // }
    this._menuOptions.getMenuOptions().subscribe(resp => {
      console.log('Menu options', resp)
      if(resp.success)
        this.opcionesMenu.set(resp.data)
    })
  }
}