import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserLogin } from '../../interfaces/login.interface';


@Component({
  selector: 'app-login',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule,ReactiveFormsModule,
    MatIconModule,
    RouterModule],
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
    //private _loginService: LoginService,
    private _router: Router
  ) {
    this.form = this.fb.group({
      usuario: [
        'usuario',
        [
          Validators.required,
          Validators.maxLength(50),
          //Validators.pattern('^[A-Za-z0-9_]+$'),
        ],
      ],
      pass: [
        'pass1',
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

    fn_Aceptar() {
    if (this.form.invalid) {
      return;
    }

    const userLogin: UserLogin = {
      usuario: this.form.value.usuario,
      pass: this.form.value.pass
    }

    //let respSrv!: RespSrv;

    // this._loginService.getAutenticacion(userLogin).subscribe((resp) => {
    //   respSrv = resp;
    //   console.log(resp)
    //   if (respSrv.success) {
    //     //console.log(paramRutas.CONTEXTO + "/" + paramRutas.APP_MENU)
    //     this._router.navigate([paramRutas.CONTEXTO + "/" + paramRutas.APP_MENU]);
        
    //     // this._router.navigate([paramRutas.CONTEXTO + "/" + paramRutas.CAT_NIVEL]);
    //   } else {
    //     this.error = respSrv.message.msg;
    //   }
    // });
  }

   get getTitleApp(){
    return this.titleApp;
  }
}
