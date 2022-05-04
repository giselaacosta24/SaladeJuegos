import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "../app/componentes/login/login.component";
import { HomeComponent } from "../app/componentes/home/home.component";
import { QuiensoyComponent } from "../app/componentes/quiensoy/quiensoy.component";
import { RegistroComponent } from "../app/componentes/registro/registro.component";
import { NavbarComponent } from "../app/componentes/navbar/navbar.component";
import { GuardService } from '../app/servicios/guard.service';
import { FooterComponent } from './componentes/footer/footer.component';
const appRoutes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
{ path: "login", component: LoginComponent, pathMatch: "full" },
{ path: "home", component: HomeComponent, pathMatch: "full" ,canActivate : [GuardService] }
,
{ path: "quiensoy", component: QuiensoyComponent, pathMatch: "full",canActivate : [GuardService] },
{ path: "registro", component: RegistroComponent, pathMatch: "full" },
{ path: "navbar", component: NavbarComponent, pathMatch: "full",canActivate : [GuardService] },
{ path: "footer", component: FooterComponent, pathMatch: "full",canActivate : [GuardService] },

];
export const routing = RouterModule.forRoot(appRoutes);


