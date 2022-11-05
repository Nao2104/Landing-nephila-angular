import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './routes/contactanos/contactanos.component';
import { HomeComponent } from './routes/home/home.component';
import { NuestrosServiciosComponent } from './routes/nuestros-servicios/nuestros-servicios.component';
import { Page404Component } from './routes/page404/page404.component';
import { QuienesSomosComponent } from './routes/quienes-somos/quienes-somos.component'

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},

  {path: "home", component: HomeComponent},
  {path: "quienes", component: QuienesSomosComponent},
  {path: "servicios", component: NuestrosServiciosComponent},
  {path: "contac", component: ContactanosComponent},

  {path: "**", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
