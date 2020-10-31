import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
