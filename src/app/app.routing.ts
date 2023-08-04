import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DefaulterComponent } from "./components/defaulter/defaulter.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { BuildingPageComponent } from "./components/building-page/building-page.component";

type PathMatch = "full" | "prefix" | undefined

const pathmatch: PathMatch = 'full'

const appRoutes = [
    { path: '', component: BuildingPageComponent},
    { path: 'defaulter', component: DefaulterComponent, pathMatch: pathmatch},
    // { path: '', redirectTo: "/defaulter", pathMatch: pathmatch},
    { path: '**', component: PageNotFoundComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
