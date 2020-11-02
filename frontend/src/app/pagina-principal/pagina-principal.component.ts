import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {


  constructor() { }

  public images = ['../../assets/mbr.jpg', '../../assets/mbr-3.jpg', '../../assets/mbr-3.jpg'];

  ngOnInit(): void {
  }

}
