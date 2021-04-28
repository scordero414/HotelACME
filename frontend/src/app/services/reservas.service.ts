import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Reserva } from '../models/Reserva';
import config from 'src/config';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http: HttpClient) { }

  registerReserva(reserva: Reserva) {
    return this.http
      .post(`${config.RUTA_API}/api/reservas/create`, reserva)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getReservas(){
    return this.http.get<Reserva[]>(`${config.RUTA_API}/api/reservas/all`);
  }
}
