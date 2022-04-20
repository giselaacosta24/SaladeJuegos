import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuario!:string | null;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('usuario') !== null || localStorage.getItem('usuario') !== '')
      this.usuario=localStorage.getItem('usuario');

  }

}
