import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from "./home/home.component";
import { QuienSoyComponent } from "./quien-soy/quien-soy.component";
 import { AngularFireModule } from '@angular/fire/compat';
 import { AngularFireAuthModule } from '@angular/fire/compat/auth';
 import { AngularFireStorageModule } from '@angular/fire/compat/storage';
 import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
 import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    QuienSoyComponent,
    RegistroComponent,
    MenuComponent
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
