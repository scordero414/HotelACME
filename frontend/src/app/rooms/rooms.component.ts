import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { Habitacion } from '../models/Habitacion';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  // constructor() { }

  // public isHabitacionSeleccionada;
  // ngOnInit(): void {
  //   this.isHabitacionSeleccionada = false;
  // }

  // public mostrarPlanHabitacion(){
  //   this.isHabitacionSeleccionada = true;
  // }

  public habitaciones: Habitacion[];
  public habitacionesFilter: Habitacion[];

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((data) => {
      this.habitaciones = data;
      this.habitacionesFilter = this.habitaciones;
    });
  }

  filterRooms(valor) {
    console.log(valor);
    this.habitacionesFilter = this.habitaciones.filter(
      (habitacion) => habitacion.__t === valor
    );
  }

  

}
