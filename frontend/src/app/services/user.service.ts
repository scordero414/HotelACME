import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../models/User";
import {UserResponse} from "../models/UserResponse";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private RUTA  = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  
  getUser(id:string){
    return this.http.get<User>(`${this.RUTA}/api/usuario/${id}`)
  }
}
