import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Entidades/usuario';
import { Router } from '@angular/router';
import {AuthService } from '../servicios/auth.service'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miUsuario=new Usuario();

  constructor(private authSvc:AuthService,private router:Router) { }


  ngOnInit() {
  }
  async Registrar()
  {
    console.log(this.miUsuario);

    const user=await this.authSvc.registrar(this.miUsuario);
   
  }
  iraLogin(){
    
    this.router.navigateByUrl('/login');
}
}
