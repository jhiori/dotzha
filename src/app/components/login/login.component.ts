import { APP_INITIALIZER, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserLogin } from '../../interfaces/login.interface'; 
import { DomSanitizer } from '@angular/platform-browser';
import { LoadSvgIcons } from '../../config/global.functions';
import { MatDividerModule } from '@angular/material/divider';
import { LoginService } from '../../services/login.service';
import { response } from '../../interfaces/response.interface';
import { RoutesPath } from '../../config/global.params';


@Component({
  selector: 'app-login',
  imports: [
    MatButtonModule, MatFormFieldModule, MatInputModule,ReactiveFormsModule,
    MatIconModule,
    RouterModule,
    MatDividerModule
], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
//private titleApp: string = paramGlobales.NOMBREAPLICACION;
private titleApp: string = 'Grupo Dotzha'
 form: FormGroup;
  error?: string;
  passwordVisible: boolean = false

  constructor(
    private fb: FormBuilder,
    private _loginService: LoginService,
    private _router: Router
  ) {  
    this.form = this.fb.group({
      usuario: [
        'Sas',
        [
          Validators.required,
          Validators.maxLength(50),
          //Validators.pattern('^[A-Za-z0-9_]+$'),
        ],
      ],
      pass: [
        'pass',
        [
          Validators.required,
          Validators.maxLength(20),
          //Validators.pattern('^[A-Za-z0-9._@]+$'),
          // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{5,10}$')
        ],
      ],
    });
  }

  ngOnInit(){
    console.log('Entra LoginComponent')
  }

  logIn_() {
    if (this.form.invalid) 
      return;
    

    const userLogin: UserLogin = {
      user: this.form.value.usuario,
      pass: this.form.value.pass
    }

    let resp!: response;

    this._loginService.getAutenticacion(userLogin).subscribe((resp_) => {
      resp = resp_;
      console.log(resp)
      if (resp.success) {
        //console.log(paramRutas.CONTEXTO + "/" + paramRutas.APP_MENU)
        console.log(resp)
        if(this.validateUser(userLogin, resp_))
          this._router.navigate([RoutesPath.CONTEXT_CO]);
        else
          this.error = 'Credenciales incorrectas, verificar'
        
        // this._router.navigate([paramRutas.CONTEXTO + "/" + paramRutas.CAT_NIVEL]);
      } else //{
        // this.error = resp.msg;
        this.error = 'No se encontro información'
      // }
    });
  }

  validateUser(user: UserLogin,resp:any):boolean{
    //let userValidate: boolean = false
    //console.log('filter: ', resp.data.filter((d:any) => d.pass === user.pass).length)
    return resp.data.filter((d:any) => d.pass === user.pass).length > 0 ? true : false
  }

   get getTitleApp(){
    return this.titleApp;
  }
}
