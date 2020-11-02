import { Component, OnInit } from '@angular/core';
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
    console.log("Hey");
    console.log(this.stateInfo);
  }

  onChangeState(stateValue) {
    this.cityInfo = this.stateInfo[stateValue].Cities;    
  }

}
