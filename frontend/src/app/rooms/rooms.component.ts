import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor() { }

  public isHabitacionSeleccionada;
  ngOnInit(): void {
    this.isHabitacionSeleccionada = false;
  }

  public mostrarPlanHabitacion(){
    this.isHabitacionSeleccionada = true;
  }

}
