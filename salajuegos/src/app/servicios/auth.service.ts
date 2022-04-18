import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from '../Entidades/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggged:any=false;
  public message:string='';
  constructor(public afAuth:AngularFireAuth,public router:Router) {
    afAuth.authState.subscribe(user=>this.isLoggged=user)
  }





   async login(usuario:Usuario) {
    this.afAuth.signInWithEmailAndPassword(usuario.correo,usuario.contrasena)
    .then(value => {
      console.log('Funcionó,usuario logueado');
      this.router.navigateByUrl('/home');
      
    })
    .catch(err => {
      console.log('Algo esta mal: ', err);
      localStorage.setItem('fireauth',err.message);

    });
  }

    registrar(usuario:Usuario){

    this.afAuth.createUserWithEmailAndPassword(usuario.correo,usuario.contrasena)
    .then(value => {
      console.log('Funcionó,usuario registrado');
      this.router.navigateByUrl('/home');

    })
    .catch(err => {
      console.log('Algo esta mal: ', err.message);
      localStorage.setItem('fireauth',err.message);

    });
  }

}