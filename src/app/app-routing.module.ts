import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import  { AddmenagereComponent }  from './addmenagere/addmenagere.component';
import  { AppComponent }  from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { CompteComponent } from './compte/compte.component';
import { MenagereListComponent } from './menagere-list/menagere-list.component';


const routes: Routes = [
  { path:'', component: AcceuilComponent},
  { path:'acceuil', redirectTo: '/',pathMatch: 'full'},
  { path:'addmenagere', component: AddmenagereComponent},
  { path:'login', component: LoginComponent},
  { path:'compte', component: CompteComponent},
  { path:'menagere', component: MenagereListComponent}

];
=======

const routes: Routes = [];
>>>>>>> b13232618575921798cfed232d49da4dc84c13b4

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD
//export class routingComponents = [AppComponent,AddmenagereComponent]
=======
>>>>>>> b13232618575921798cfed232d49da4dc84c13b4
