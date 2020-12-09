import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Habitacion } from '../models/Habitacion';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Output() enviarInfo = new EventEmitter<Habitacion>();


  @Input()
  habitacion: Habitacion;

  costo: string;



  constructor() {
  }

  ngOnInit(): void {
    this.costo = new Intl.NumberFormat('en-US').format(this.habitacion.costo);
  }

  getAuthUser = () => {
    let usuario = JSON.parse(localStorage.getItem('currentUser'));
    if (usuario) return usuario['user'].id;
  };

  cambiarEstado(){
    this.enviarInfo.emit(this.habitacion);
  }

}
