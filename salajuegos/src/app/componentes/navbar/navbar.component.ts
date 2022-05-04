import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario!:string | null;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('usuario') !== null || localStorage.getItem('usuario') !== '')
      this.usuario=localStorage.getItem('usuario');

  }

}
