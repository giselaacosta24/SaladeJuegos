import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Entidades/usuario';
import { Router } from '@angular/router';
import {AuthService } from '../servicios/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  resultado!: string;
  miUsuario=new Usuario();
mess:string;
formularioContacto: FormGroup;

private isEmail = /\S+@\S+\.\S+/;
 constructor(private authSvc:AuthService,private router:Router,private fb: FormBuilder) { }


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
        console.log(this.miUsuario);

        await this.authSvc.login(this.miUsuario);
        this.obtenerError();

            } catch (e) {
        console.log(e);
      }
    }
  }

  
obtenerError()
{
  if(JSON.stringify(localStorage.getItem('fireauth')) != '' || JSON.stringify(localStorage.getItem('fireauth')) !== null)
  this.mess=JSON.stringify(localStorage.getItem('fireauth'));
  console.log('hola:',this.mess);


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
