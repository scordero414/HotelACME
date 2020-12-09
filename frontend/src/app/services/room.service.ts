import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Habitacion } from '../models/Habitacion';
import config from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  getRooms() {
    return this.http.get<Habitacion[]>(`${config.RUTA_API}/api/rooms/all`);
  }
}
