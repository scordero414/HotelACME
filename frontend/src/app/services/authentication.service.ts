import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../models/User";
import {UserResponse} from "../models/UserResponse";
import {map} from 'rxjs/operators';
import jwt_decode from 'jwt-decode';


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

  loginUser(user: User){
    return this.http.post<any>(`${this.RUTA}/api/usuario/login`, user)
    .pipe(map((data) =>{
      console.log(data);
      let decoded = jwt_decode(data.token);
      let token = data.token;
      let user = {token, user:decoded}
      localStorage.setItem('currentUser', JSON.stringify(user));
    }));
  }


}
