import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  
  constructor( private modalService: NgbModal) { }

  private index: Number;

  ngOnInit(): void {
  }

  


  openXl(content) {
    this.modalService.open(content, { size: 'xl' , centered: true});
  }
  openM(content) {
    this.modalService.open(content, { size: 'lg' , centered: true});
  }
  
}
