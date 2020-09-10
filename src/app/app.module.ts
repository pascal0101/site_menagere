import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

=======
>>>>>>> b13232618575921798cfed232d49da4dc84c13b4
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenagereListComponent } from './menagere-list/menagere-list.component';
import { MenagereDetailsComponent } from './menagere-details/menagere-details.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { environment } from 'src/environments/environment';
import { AddmenagereComponent } from './addmenagere/addmenagere.component';
import { RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { CompteComponent } from './compte/compte.component';
=======
>>>>>>> b13232618575921798cfed232d49da4dc84c13b4

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenagereListComponent,
    MenagereDetailsComponent,
<<<<<<< HEAD
    FooterComponent,
    AddmenagereComponent,
    AcceuilComponent,
    LoginComponent,
    CompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
=======
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> b13232618575921798cfed232d49da4dc84c13b4
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
