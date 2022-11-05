import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuienesSomosComponent } from './routes/quienes-somos/quienes-somos.component';
import { NuestrosServiciosComponent } from './routes/nuestros-servicios/nuestros-servicios.component';
import { ContactanosComponent } from './routes/contactanos/contactanos.component';
import { Page404Component } from './routes/page404/page404.component';
import { HomeComponent } from './routes/home/home.component';
import { PagInicialComponent } from './components/pag-inicial/pag-inicial.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuienesSomosComponent,
    NuestrosServiciosComponent,
    ContactanosComponent,
    Page404Component,
    HomeComponent,
    PagInicialComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
