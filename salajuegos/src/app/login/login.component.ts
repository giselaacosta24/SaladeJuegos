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

  // constructor(private  router:Router) { }

  miUsuario=new Usuario();
  // entrar()
  // {
  //   localStorage.setItem('usuario', JSON.stringify(this.miUsuario.correo));


  //   this.router.navigate(['bienvenido']) ;  
  // }
 
  usuario:Usuario= new Usuario();
  constructor(private authSvc:AuthService,private router:Router) { }


  ngOnInit() {
  }
  async onLogin()
  {
    console.log(this.usuario);

    const user=await this.authSvc.login(this.usuario);
    if(this.usuario){
      console.log('Successfully');
    }
  }
}
