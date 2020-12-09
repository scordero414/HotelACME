import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { RegisterComponent } from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SelectOriginComponent } from './select-origin/select-origin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReservasUsuariosComponent } from './reservas-usuarios/reservas-usuarios.component' 
import { FotosUsuariosComponent } from './fotos-usuarios/fotos-usuarios.component';


const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'file-upload', component: FileUploadComponent},
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'origin', component: SelectOriginComponent},
  { path: 'login', component: SignUpComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'reservation', component: ReservationComponent},
  { path: 'admin', component: ReservasUsuariosComponent},
  { path: 'usuarios', component: FotosUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
