import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../models/User";
import {UserResponse} from "../models/UserResponse";
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private RUTA  = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  registerUser(user: User){
    return this.http.post<UserResponse>(`${this.RUTA}/api/usuario/register`, user)
    .pipe(map((data) =>{
      return data;
    }))
  }
}
