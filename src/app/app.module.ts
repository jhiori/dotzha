import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { CardComponent } from './components/card/card.component';
import { BuildingPageComponent } from './components/building-page/building-page.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DefaulterComponent } from './components/defaulter/defaulter.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    CardComponent,
    BuildingPageComponent,
    NavComponent,
    DefaulterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AppRoutingModule,
    BrowserAnimationsModule,
    /* */
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
