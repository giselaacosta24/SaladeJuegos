import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Entidades/usuario';
import { Router } from '@angular/router';
import {AuthService } from '../../servicios/auth.service'
import { FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miUsuario=new Usuario();
  resultado!: string;
  formularioContacto: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;

constructor(private authSvc:AuthService,private router:Router,private fb: FormBuilder) { 
}

 iraLogin(){
    
    this.router.navigateByUrl('/login');
}


ngOnInit(): void {
  this.initForm();

}


 Registrar() {
  if (this.formularioContacto.valid) {
    try {
      const formValue = this.formularioContacto.value;
    
      this.authSvc.registrar(this.miUsuario);


    } catch (e) {
      console.log(e);
    }
  }
  
}



 notRequiredHasValue(field: string): string {
  return this.formularioContacto.get(field)?.value ? 'is-valid' : '';
 }


isValidField(field: string): string {
 const validatedField = this.formularioContacto.get(field);
  return (!validatedField?.valid && validatedField?.touched)
  ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
}

private initForm(): void {
  this.formularioContacto = this.fb.group({

    correo: ['', [Validators.required, Validators.pattern(this.isEmail)]],
    contraseña: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]

  });
}


}
