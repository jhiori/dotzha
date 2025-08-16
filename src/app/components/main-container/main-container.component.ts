import { Component, ViewChild } from '@angular/core';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MenuDesplegableComponent } from "./menu-desplegable/menu-desplegable.component";
import { firstValueFrom } from 'rxjs';
// import { UserLogin } from '../../interfaces/login.interface';
import { User_Info } from '../../interfaces/usuario.interface';
// import { LoginService } from '../../services/login.service';
import { UsuarioService } from '../../services/usuario.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main-container',
  imports: [HeaderComponent,
    ToolbarComponent,MatSidenavModule,RouterOutlet, /*MenuDesplegableComponent*/],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {
  @ViewChild('drawer') _sidenav!: MatSidenav;
  openedSidNav: boolean = false;
//  usuarioLogin!: UserLogin;
 usuarioInfo: User_Info = {
  idUser: 0,
  nameUser: '',
  userDesc: ''
 }
  
  // usuarioLogin = {
  //   nombreUsuario: '',
  //   idPuesto:''
  // }; 

  constructor(
    // private _loginService: LoginService,
    // private _usuarioService: UsuarioService,
  ){

  }
  
  fn_ToggleDrawer(valor: boolean){
    // console.log("toggleDrawer:::");
    // console.log(valor);
    this.openedSidNav = valor;
    if(valor){
      this._sidenav.open();
    }else{
      this._sidenav.close();
    }
  }

  // async ngOnInit(): Promise<void> {
  //     // console.log("ngOnInit");
  //     const respSrvLogin = await firstValueFrom(this._loginService.isLoggedIn());
  //     this.usuarioLogin = respSrvLogin.data;
  //     //this.respSrvPerfil = this._localstorage.getItem("perfil")!;      
  //     //this.accesoMsj = this._routeAct.snapshot.paramMap.get('accesoMsj')!;
  //     // if(this.accesoMsj!="" && this.accesoMsj != null && this.accesoMsj!=undefined){
  //     //   this.alertMsj(this.accesoMsj,'alert-danger',5000);
  //     // }
      
  //     this.getUsuarioInfo();

  // }

  getUsuarioInfo(){
    
  }


  
}
