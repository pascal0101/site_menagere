import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenagereListComponent } from './menagere-list/menagere-list.component';
import { MenagereDetailsComponent } from './menagere-details/menagere-details.component';
import { FooterComponent } from './footer/footer.component';

import { environment } from 'src/environments/environment';
import { AddmenagereComponent } from './addmenagere/addmenagere.component';
import { RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { CompteComponent } from './compte/compte.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenagereListComponent,
    MenagereDetailsComponent,
    FooterComponent,
    AddmenagereComponent,
    AcceuilComponent,
    LoginComponent,
    CompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig),
    //AngularFirestoreModule,
    //AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
