import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mostrarChat=false;
  usuarioLogueado:any;
  nuevoMensaje:string='';
  mensajes:any=[
   { 
     emisor:"7faHzOZQf2Mfa3NzIVp23gZZKiF2",
     texto:"hola que tal"
   },
  
  
  { 
    emisor:"7faHzOZQf2Mfa3NzIVp23gZZKiF2",
    texto:"hola gente"
  },
  { 
    emisor:"id",
    texto:"que onda?"
  },
  { 
    emisor:"7faHzOZQf2Mfa3NzIVp23gZZKiF2",
    texto:"chau!!"
  },
  ];
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUserLogged().subscribe(usuario=>{
     this.usuarioLogueado=usuario
    })
    
  }
  enviarMensaje(){
    if(this.nuevoMensaje=="") return;
    console.log(this.nuevoMensaje);
    let mensaje={
      
        emisor:this.usuarioLogueado.uid,
        texto:this.nuevoMensaje
     
    }
    this.mensajes.push(mensaje);
    this.nuevoMensaje="";
    setTimeout(()=>{
          this.scrollToTheLastElementByClassName();

    },30);
  }


  scrollToTheLastElementByClassName(){
    let elements=document.getElementsByClassName('msj');
    let ultimo:any=elements[elements.length-1];
    let toppos=ultimo.offsetTop;
    //@ts-ignore
    document.getElementById('contenedorDeMensajes')?.scrollTop=toppos;
  }
}
