import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private router: Router,public authenticationService: AuthenticationService) {
   }

  

  ngOnInit(): void {
  }


  public goUserProfile() {
		this.router.navigate([ '/usuarios' ]);
  }  
  
  logOut() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

  goLogin() {
    this.router.navigate(['/user-profile']);
  }

}
