import { Component, OnInit } from '@angular/core';
// import { Options } from '@angular-slider/ngx-slider';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // value: number = 100;
  // options: Options = {
  //   floor: 0,
  //   ceil: 200
  // };

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Mínimo:</b> $' + value;
        case LabelType.High:
          return '<b>Máximo:</b> $' + value;
        default:
          return '$' + value;
      }
    }
  };



}
