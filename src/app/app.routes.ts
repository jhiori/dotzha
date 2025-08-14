import { Routes } from '@angular/router';
import { BuildingPageComponent } from './components/building-page/building-page.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        // path: paramRutas.CONTEXTO,
        path: 'dotzha',
        component: BuildingPageComponent
    },
    {
        path: 'dotzha/login',
        component: LoginComponent
    },
    {
        // path: paramRutas.CONTEXTO,
        path: '',
        component: BuildingPageComponent
    },
    /*Ejemplo con children */
    // {
    // path: paramRutas.CONTEXTO,
    // component: MainContainerComponent,
    // // canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: paramRutas.CAT_NIVEL,
    //     component: CatNivelComponent,
    //     canActivate: [AuthGuard],
    //   },
    //   {
    //     path: paramRutas.APP_MENU,
    //     component: AplicacionMenuComponent,
    //     canActivate: [AuthGuard],
    //   },
    // }
];
