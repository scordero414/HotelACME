import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import {UserService} from '../services/user.service'
import { User } from '../models/User';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public user: User;
  
  constructor( private modalService: NgbModal, private userService: UserService) { }

  private index: Number;

  ngOnInit(): void {
    let currentUser =  JSON.parse(localStorage.getItem('currentUser'));
    let userId = currentUser['user'].id;

    this.userService.getUser(userId).subscribe(
      data =>{
        this.user = data;
      }
    );
  }

  


  openXl(content) {
    this.modalService.open(content, { size: 'xl' , centered: true});
  }
  openM(content) {
    this.modalService.open(content, { size: 'lg' , centered: true});
  }
  
}
