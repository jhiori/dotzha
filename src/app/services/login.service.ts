import { Injectable } from '@angular/core';
import { response } from '../interfaces/response.interface';
import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../interfaces/login.interface';
import { DataRawPathJsonFile } from '../config/global.params';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private myAppUrl: string;
  private loginUrl: string;
  private loginUsuarioUrl: string;

  constructor(private http: HttpClient) {
    // this.myAppUrl = environment.apiUrlBase;
    this.myAppUrl = DataRawPathJsonFile.DATA_FILE_USER;;
    this.loginUrl = 'login/';
    this.loginUsuarioUrl = 'login/usuario/';
  }

  getAutenticacion(user: UserLogin): Observable<response> {
    return this.http.get<response>(this.myAppUrl);
  }

  // getAutenticacion(userLogin: UserLogin): Observable<response> {
  //   return this.http.post<response>(
  //     `${this.myAppUrl}${this.loginUrl}`,
  //     userLogin,
  //     {
  //       withCredentials: true,
  //     }
  //   );
  // }

  // isLoggedIn(): Observable<RespSrv> {
  //   return this.http.get<RespSrv>(
  //     `${this.myAppUrl}${this.loginUrl}`,
  //     {
  //       withCredentials: true,
  //     }
  //   );
  // }
  
  // isAuthorized(idUsuario: number, pathVista: string): Observable<RespSrv> {
  //   return this.http.get<RespSrv>(
  //     `${this.myAppUrl}${this.loginUrl}${idUsuario}/${pathVista}`
  //   );
  // }
  
  setLogout(): Observable<response> {
    return this.http.get<response>(''
      // `${this.myAppUrl}${this.loginUrl}logout/`,
      // {
      //   withCredentials: true,
      // }
    );
  }
  
}
