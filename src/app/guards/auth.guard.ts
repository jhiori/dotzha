// import { firstValueFrom } from 'rxjs';
// import { paramRutas } from '../../config/parametros.constantes';
// import { RespSrv } from '../interfaces/response.interface';
// import { LoginService } from '../services/login.service';
// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
// } from '@angular/router';
// import { LocalstorageService } from '../services/localstorage.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(
//     private _loginService: LoginService, 
//     private _router: Router,
//     private _localstorage: LocalstorageService) {}

//   async canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Promise<boolean> {

//     this._localstorage.removeItem("perfil");
//     let pathPrevious: string = "";
//     let pathNext: string = "";
//     let urlPrevious: string;
//     let urlNext: string;

//     //Valida de donde viene el redireccionamiento
//     urlPrevious = this._router.routerState.snapshot.url;
    
//     if(urlPrevious.indexOf(";")>0){
//       urlPrevious = urlPrevious.substring(0,urlPrevious.indexOf(";"));
//     }
//     pathPrevious = urlPrevious.replace(/\/sua\//, '');
  
//     console.log('pathPrevious:::', pathPrevious)
//     //Valida a donde se redirecciona
//     urlNext = state.url;
//     if(urlNext.indexOf(";")>0){
//       urlNext = urlNext.substring(0,urlNext.indexOf(";"));
//     }
//     pathNext = urlNext.replace(/\/sua\//, '');
//     console.log('pathNext:::', pathNext)
//     //Vaida que tenga sesión iniciada
//     const respSrvLogin = await firstValueFrom(this._loginService.isLoggedIn());
//     console.log('respSrvLogin:::', respSrvLogin)
//     if (respSrvLogin.success) {
//       //Si tiene sesión iniciada, valida que tenga permiso de acceso a la ruta que se redirecciona
//       const respSrvPerfil = await firstValueFrom(this._loginService.isAuthorized(respSrvLogin.data.idUsuario,pathNext));
//       console.log('respSrvPerfil:::', respSrvPerfil)
//       if (respSrvPerfil.success) {
//         console.log('Va a ' + pathNext);
//         this._localstorage.setItem("perfil",JSON.stringify(respSrvPerfil));
//         return true;
//       } else {
//         if (pathPrevious=="" || pathPrevious=="login"){
//           console.log('Va a login 2. Sin pathPrevious');
//           await firstValueFrom(this._loginService.setLogout());
//           this._router.navigate([paramRutas.CONTEXTO + paramRutas.LOGIN]);
//           return false;
//         } else {
//           console.log('va a pantalla de sin acceso');
//           //Aquí entra en caso de que no tenga permisos para una ruta
//           this._router.navigate([
//             paramRutas.CONTEXTO + '/' + paramRutas.PRUEBA
//           ]);
//           // this._router.navigate([
//           //   paramRutas.CONTEXTO + '/' + paramRutas.APP_MENU, {accesoMsj:respSrvPerfil.message.msg}
//           // ]);
//           // this._router.navigate([
//           //   paramRutas.CONTEXTO + '/' + paramRutas.APP_MENU
//           // ], {state: {accesoMsj:respSrvPerfil.message.msg}});
//           return false;
//         }
//       }
//     } else {
//       console.log('Va a login 1');
//       await firstValueFrom(this._loginService.setLogout());
//       this._router.navigate([paramRutas.CONTEXTO + paramRutas.LOGIN]);
//       return false;
//     }
//   }
// }
