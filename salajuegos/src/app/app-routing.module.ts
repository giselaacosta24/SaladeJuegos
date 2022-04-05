import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { QuienSoyComponent } from "./quien-soy/quien-soy.component";
const appRoutes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
{ path: "login", component: LoginComponent, pathMatch: "full" },
{ path: "home", component: HomeComponent, pathMatch: "full" },
{ path: "quiensoy", component: QuienSoyComponent, pathMatch: "full" },

];
export const routing = RouterModule.forRoot(appRoutes);


