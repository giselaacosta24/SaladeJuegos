import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from '../Entidades/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggged:any=false;
  constructor(public afAuth:AngularFireAuth,public router:Router) {
    afAuth.authState.subscribe(user=>this.isLoggged=user)
  }





  login(usuario:Usuario) {
    this.afAuth.signInWithEmailAndPassword(usuario.correo,usuario.contrasena)
    .then(value => {
      console.log('Nice, it worked!');
      this.router.navigateByUrl('/home');
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }
  //login

  // await onLogin(usuario:Usuario){
  //   try{
  //     return await this.afAuth.signInWithEmailAndPassword(usuario.correo,usuario.contrasena);
  //   }
  //   catch(error)
  //   {
  //   console.log('Error en login',error)

  //   }
  // }
  // async onRegister(usuario:Usuario){
  //   try{
  //     return await this.afAuth.createUserWithEmailAndPassword(usuario.correo,usuario.contrasena);
  //   }
  //   catch(error)
  //   {
  //   console.log('Error en registro',error)

  //   }
  // }

}