import { Routes } from '@angular/router';
import { BuildingPageComponent } from './components/building-page/building-page.component';
import { LoginComponent } from './components/login/login.component';
import { RoutesPath } from './config/global.params';

export const routes: Routes = [
    {
        // path: paramRutas.CONTEXTO,
        path: RoutesPath.CONTEXT_CO,
        component: BuildingPageComponent
    },
    {
        path: RoutesPath.CONTEXT_CO+RoutesPath.LOGIN_CO,
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
