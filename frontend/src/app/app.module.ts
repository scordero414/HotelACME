import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { LightboxModule } from 'ngx-lightbox';

import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from './countries.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegisterComponent } from './register/register.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { DescriptionImageComponent } from './description-image/description-image.component';
import { ModalModule } from 'angular-custom-modal';
import { from } from 'rxjs';
import { SelectOriginComponent } from './select-origin/select-origin.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ResumenReservaComponent } from './resumen-reserva/resumen-reserva.component';
import { PlanHabitacionComponent } from './plan-habitacion/plan-habitacion.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaginaPrincipalComponent,
    SignUpComponent,
    RegisterComponent,
    FileUploadComponent,
    UserProfileComponent,
    DescriptionImageComponent,
    SelectOriginComponent,
    RoomsComponent,
    FooterComponent,
    ReservationComponent,
    ResumenReservaComponent,
    PlanHabitacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    Ng2PageScrollModule,
    LightboxModule,
    ModalModule,
    RouterModule,
    NgxSliderModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
