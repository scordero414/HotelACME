import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-description-image',
  templateUrl: './description-image.component.html',
  styleUrls: ['./description-image.component.css']
})
export class DescriptionImageComponent implements OnInit {

  constructor(private user: UserProfileComponent) { }

  ngOnInit(): void {
  }


}
