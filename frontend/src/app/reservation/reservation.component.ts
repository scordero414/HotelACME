import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanHabitacionComponent } from '../plan-habitacion/plan-habitacion.component';
import { RoomsComponent } from '../rooms/rooms.component';
import { ReservasService } from '../services/reservas.service';
import { Reserva } from '../models/Reserva';
import { Router } from '@angular/router';
import { Habitacion } from '../models/Habitacion';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  habitacion: Habitacion;

  formulario: FormGroup;
  modelo: Reserva;

  constructor( 
    private router: Router,
    private formBuilder: FormBuilder,
    private reservasService: ReservasService) { 

  }


  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      cantidadAdultos: ['', Validators.required],
      cantidadNinos: ['', Validators.required],
      tipoHabitacion:['', Validators.required]
    });
  }
 //Rango DINERO
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Mínimo:</b> $' + value;
        case LabelType.High:
          return '<b>Máximo:</b> $' + value;
        default:
          return '$' + value;
      }
    }
  };


  get f() {
    return this.formulario.controls;
  }

  getAuthUser = () => {
    let usuario = JSON.parse(localStorage.getItem('currentUser'));
    if (usuario) return usuario['user'].id;
  };

  reservar() {
    let usuario = this.getAuthUser();

    if (!usuario) {
      this.router.navigate(['/login']);
      return;
    }

    let capacidad = this.f.cantidadAdultos.value + this.f.cantidadNinos.value;

    if (capacidad > this.habitacion.capacidad) {
      alert(
        `Capacidad sobrepasada Esta habitacion solo tiene capacidad de ${this.habitacion.capacidad} personas`
      );
      return;
    }
    this.modelo = new Reserva(
      null,
      this.f.fechaInicio.value,
      this.f.fechaFin.value,
      capacidad,
      this.minValue,
      this.maxValue,
      usuario,
      this.habitacion._id
    );

    this.reservasService.registerReserva(this.modelo).subscribe(
      (data: any) => {
        this.formulario.reset();
       alert(`Habitación reservada,
          La habitación se ha reservado existosamente.`
        );
      },
      (error) => {
        if (error.status === 400) {
         alert('La habitación no se pudo reservar');
        }
      }
    );
  }


}
