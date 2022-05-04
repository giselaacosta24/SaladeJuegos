import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Entidades/usuario';
import { Router } from '@angular/router';
import {AuthService } from '../../servicios/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule} from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  resultado!: string;
  miUsuario=new Usuario();
formularioContacto: FormGroup;
user= { email : '', password : ''};

private isEmail = /\S+@\S+\.\S+/;
 constructor(private authSvc:AuthService,private router:Router,private fb: FormBuilder,public usudb:UsuarioService) { }


  ngOnInit(): void {
    this.initForm();
  }

  registrar(){
    
      this.router.navigateByUrl('/registro');
  }


  async onLogin(): Promise<void> {
    if (this.formularioContacto.valid) {
      try {
        const formValue = this.formularioContacto.value;

        await this.authSvc.login(this.miUsuario);

            } catch (e) {
        console.log(e);
      }
    }
  }




admin()
{
  this.miUsuario.correo="admin@gmail.com";
  this.miUsuario.contrasena="00000000";
}

invitado()
{
  this.miUsuario.correo="invitado@gmail.com";
    this.miUsuario.contrasena="00000000";
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
