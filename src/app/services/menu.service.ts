import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from '../../environments/environment';
// import { RespSrv } from '../interfaces/response.interface';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';
import { DataRawPathJsonFile } from '../config/global.params';
import { UserLogin } from '../interfaces/login.interface';
import { response } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrlBase: string;
  private urlPrincipal: string;

  constructor(private http: HttpClient) {
    // this.apiUrlBase = environment.apiUrlBase;
    this.apiUrlBase = DataRawPathJsonFile.DATA_FILE_MENU;
    this.urlPrincipal = 'menu/';
   }
   
  // getUsuario(): Observable<RespSrv> {
  //   return this.http.get<RespSrv>(
  //     `${this.apiUrlBase}${this.urlPrincipal}`
  //   );
  // }

  // getUsuarioById(idUsuario: number): Observable<RespSrv> {
  //   return this.http.get<RespSrv>(
  //     `${this.apiUrlBase}${this.urlPrincipal}${idUsuario}`
  //   );
  // }

  // addUsuario(usuario: Usuario): Observable<RespSrv> {
  //   return this.http.post<RespSrv>(
  //     `${this.apiUrlBase}${this.urlPrincipal}`,usuario,
  //     {
  //       withCredentials: true,
  //     }
  //   );
  // }

  // updUsuarioById(usuario: Usuario): Observable<RespSrv> {
  //   return this.http.put<RespSrv>(
  //   `${this.apiUrlBase}${this.urlPrincipal}`,usuario,
  //   {
  //     withCredentials: true,
  //   }
  //   );
  // }

  getMenuOptions(idUsuario?: number):Observable<response> {
    return this.http.get<response>(
      this.apiUrlBase //File Json where save users
      // `${this.apiUrlBase}${this.urlPrincipal}/info/${idUsuario}`      
    );
  }

  // getUsuarioInfoById_(idUsuario: number):Observable<response[]> {
  //   return this.http.get<response[]>(
  //     this.apiUrlBase //File Json where save users    
  //   );
  // }
     
     
}
