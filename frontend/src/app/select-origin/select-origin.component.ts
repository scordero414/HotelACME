import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-select-origin',
  templateUrl: './select-origin.component.html',
  styleUrls: ['./select-origin.component.css']
})
export class SelectOriginComponent implements OnInit {

  countryInfo: any[] = [];
  stateInfo: any[] = [];  
  cityInfo: any[] = [];

  originInfo : string;
  @Output() enviarInfo = new EventEmitter<string>();

  // paisSeleccionado : Boolean

  constructor(private country:CountriesService) { }

  ngOnInit(): void {
    this.getCountries();    
  }
  
  getCountries(){
    this.country.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
        console.log(this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )   
  }

  onChangeCountry(countryValue) {
    this.stateInfo = this.countryInfo[countryValue].States;
    this.originInfo =  this.countryInfo[countryValue].CountryName + " - ";      
    this.enviarInfo.emit(this.originInfo);
  }

  onChangeState(stateValue) {
    this.cityInfo = this.stateInfo[stateValue].Cities;
    this.originInfo += this.stateInfo[stateValue].StateName + " - ";
    this.enviarInfo.emit(this.originInfo);
  }

  onChangeCity(cityValue) {
    this.originInfo += this.cityInfo[cityValue];
    console.log(this.originInfo);  
    this.enviarInfo.emit(this.originInfo);  
  }

}
