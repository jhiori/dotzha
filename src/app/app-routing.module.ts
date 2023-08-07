import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaulterComponent } from "./components/defaulter/defaulter.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { BuildingPageComponent } from "./components/building-page/building-page.component";

// type PathMatch = "full" | "prefix" | undefined
// const pathmatch: PathMatch = 'full'
const routes: Routes = [
  { path: '', component: BuildingPageComponent},
  { path: 'marttell/defaulter', component: DefaulterComponent},
  // { path: '', redirectTo: "/defaulter", pathMatch: pathmatch},
  { path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
