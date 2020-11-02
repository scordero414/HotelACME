import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-description-image',
  templateUrl: './description-image.component.html',
  styleUrls: ['./description-image.component.css']
})
export class DescriptionImageComponent implements OnInit {

  public album = [{src: '../../assets/glen-jackson-301620.jpg', caption: '', thumb: ''}];

  constructor( private _lightbox: Lightbox, private user: UserProfileComponent) { }

  ngOnInit(): void {
    console.log("Entra")
  }


  public open() {
    this._lightbox.open(this.album, 0);
  }
}
