import { Injectable,Output,EventEmitter } from '@angular/core';
import  {AngularFireDatabase,AngularFireList, AngularFireObject} from  '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CONSTANTS } from '@firebase/util';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { UsuarioRegistro } from '../Entidades/usuario-registro';
@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  @Output() usuarioCreado: EventEmitter<any>= new EventEmitter<any>();
  unUsuario:UsuarioRegistro;
  usuariosList: Observable<any[]>;

  usuarioSelect: UsuarioRegistro = new UsuarioRegistro();
  constructor(private db: AngularFirestore) { 
  this.usuariosList = db.collection('usuariosRegistros').valueChanges();

}
  

  insertUsuario(usuario: UsuarioRegistro)
  {
   // this.usuarioCreado.emit(this.unUsuario);

    console.log('estoy insertando:',usuario);
   
      this.db.collection("usuariosRegistros").add({
        usuario:{
     
        correo: usuario.correo,
        fecha:usuario.fecharegistro}
      })

  }

}


