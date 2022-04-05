import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from '../Entidades/usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggged:any=false;
  constructor(public afAuth:AngularFireAuth) {
    afAuth.authState.subscribe(user=>this.isLoggged=user)
  }

  //login

  async onLogin(usuario:Usuario){
    try{
      return await this.afAuth.signInWithEmailAndPassword(usuario.correo,usuario.contrasena);
    }
    catch(error)
    {
    console.log('Error en login',error)

    }
  }
  async onRegister(usuario:Usuario){
    try{
      return await this.afAuth.createUserWithEmailAndPassword(usuario.correo,usuario.contrasena);
    }
    catch(error)
    {
    console.log('Error en registro',error)

    }
  }

}