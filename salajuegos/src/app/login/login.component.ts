import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Entidades/usuario';
import { Router } from '@angular/router';
import {AuthService } from '../servicios/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {


  miUsuario=new Usuario();

  constructor(private authSvc:AuthService,private router:Router) { }


  ngOnInit() {
  }
  async onLogin()
  {
    console.log(this.miUsuario);

    const user=await this.authSvc.login(this.miUsuario);
   
  }
}
