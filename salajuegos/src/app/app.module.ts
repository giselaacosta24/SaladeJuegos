import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { LoginComponent } from '../app/componentes/login/login.component';
import { HomeComponent } from "../app/componentes/home/home.component";
import { QuiensoyComponent } from "../app/componentes/quiensoy/quiensoy.component";
 import { AngularFireModule } from '@angular/fire/compat';
 import { AngularFireAuthModule } from '@angular/fire/compat/auth';
 import { AngularFireStorageModule } from '@angular/fire/compat/storage';
 import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
 import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { RegistroComponent } from '../app/componentes//registro/registro.component';
import { NavbarComponent } from '../app/componentes/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    QuiensoyComponent,
    RegistroComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing,FormsModule,
    ReactiveFormsModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFireAuthModule,
     AngularFirestoreModule,
     AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
