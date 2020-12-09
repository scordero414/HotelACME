import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {


  constructor(private router: Router, public authenticationService: AuthenticationService) { }

  public images = ['../../assets/mbr.jpg', '../../assets/mbr-3.jpg', '../../assets/mbr-3.jpg'];

  ngOnInit(): void {
  }

  public goReservation() {
    this.router.navigate(["/reservation"]);
  }

}
