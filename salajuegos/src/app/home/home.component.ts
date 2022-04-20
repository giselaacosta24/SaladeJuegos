import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService } from '../servicios/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  constructor(private router:Router,public afAuth:AuthService) { }
  ngOnInit(): void {
 
  }
  

  iraLogin(){
    this.afAuth.salir();

}
}
