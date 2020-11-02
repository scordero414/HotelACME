import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public album = [{src: '../../assets/glen-jackson-301620.jpg', caption: '', thumb: ''},];

  
  constructor(private _lightbox: Lightbox) { }

  private index: Number;

  ngOnInit(): void {
  }

  public open() {
    this._lightbox.open(this.album, 0);
  }

  
}
