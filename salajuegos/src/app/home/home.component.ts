import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService } from '../servicios/auth.service'
import  {AngularFireDatabase,AngularFireList, AngularFireObject} from  '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  usuariosList: AngularFireList<any>;

  constructor(private router:Router,public afAuth:AuthService,private db: AngularFirestore) {
    }
  ngOnInit(): void {
 
  }
  

  iraLogin(){
    this.afAuth.salir();

}
}
