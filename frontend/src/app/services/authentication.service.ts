import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../models/User";
import {UserResponse} from "../models/UserResponse";
import {map} from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import config from 'src/config';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedin: boolean = false;

  constructor(private http: HttpClient) { }

  registerUser(user: User){
    const fdUser = new FormData();
    fdUser.append('name', user.name);
    fdUser.append('email', user.email);
    fdUser.append('password', user.password);
    fdUser.append('fechaNacimiento', user.fechaNacimiento.toString());
    fdUser.append('sexo', user.sexo);
    fdUser.append('ciudadResidencia', user.ciudadResidencia);
    fdUser.append('image', user.image);
    console.log(fdUser.get('image'));
    return this.http.post<UserResponse>(`/api/usuario/register`, fdUser)
    .pipe(map((data) =>{
      return data;
    }))
  }

  loginUser(user: User){
    return this.http.post<any>(`/api/usuario/login`, user)
    .pipe(map((data) =>{
      console.log(data);
      let decoded = jwt_decode(data.token);
      let token = data.token;
      let user = {token, user:decoded};
      localStorage.setItem('currentUser', JSON.stringify(user));
    }));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.isLoggedin = false;
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser') == null) {
      this.isLoggedin = false;
      return this.isLoggedin;
    } else {
      return true;
    }
  }
}
