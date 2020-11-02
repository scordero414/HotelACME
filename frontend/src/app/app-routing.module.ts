import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { RegisterComponent } from './register/register.component';
import { SelectOriginComponent } from './select-origin/select-origin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'file-upload', component: FileUploadComponent},
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'origin', component: SelectOriginComponent},
  { path: 'login', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
