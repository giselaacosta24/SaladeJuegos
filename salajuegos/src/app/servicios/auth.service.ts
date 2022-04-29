import { Injectable,Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from '../Entidades/usuario';
import { Router } from '@angular/router';
import { getNumberOfCurrencyDigits } from '@angular/common';
import Swal, {SweetAlertOptions} from 'sweetalert2';
import { UsuarioService } from './usuario.service';
import { UsuarioRegistro } from '../Entidades/usuario-registro';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggged:any=false;
  public message:string='';
  private error: string='';
  @Input() usuario: Usuario ;
  usuarioRegistro:UsuarioRegistro;

  constructor(public afAuth:AngularFireAuth,public router:Router,public usudb:UsuarioService) {
    afAuth.authState.subscribe(user=>this.isLoggged=user);
    this.usuarioRegistro=new UsuarioRegistro();
  }


getUser():any{

  return this.afAuth.user;
}

   async login(usuario:Usuario) {
    this.afAuth.signInWithEmailAndPassword(usuario.correo,usuario.contrasena)
    .then(value => {
     localStorage.setItem('usuario',usuario.correo);

     this.usuarioRegistro.correo=usuario.correo;
     let date: Date = new Date();
     this.usuarioRegistro.fecharegistro=date;

    this.usudb.insertUsuario(this.usuarioRegistro);
     this.router.navigateByUrl('/home');
    }).catch(err => {
      switch (err.code) {
                    case "auth/user-not-found":
                   this.message = "El correo ingresado no está registrado,ingrese uno nuevo o dirijase al registro.";
                      break;
                    default:
                     this.message= "Ocurrio un error,vuelva a intentar.";
                }
            console.log(err.code);
       
            Swal.fire({
              title: 'Error al ingresar',
              text:this.message,
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
              confirmButtonText: 'OK!'
            });
        })
}
  
 


  salir()
  {
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');

  }
   
   registrar(usuario:Usuario) {
 
         this.afAuth.createUserWithEmailAndPassword(usuario.correo,usuario.contrasena)
          .then(value => {
           console.log('Funcionó,usuario registrado');
           localStorage.setItem('usuario',usuario.correo)

           this.router.navigateByUrl('/home');
          }).catch(err => {
            switch (err.code) {
                          case "auth/email-already-in-use":
                         this.message = "El correo ingresado no está disponible, ingresar uno nuevo.";
                            break;
                          default:
                           this.message= "Ocurrio un error,vuelva a intentar.";
                      }
                  console.log(err);
             
                  Swal.fire({
                    title: 'Error al registrarse',
                    text:this.message,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                     cancelButtonColor: '#d33',
                    confirmButtonText: 'OK!'
                  });
              })
   }



  //  agregarUsuario(usuario){


  //  }
  }



