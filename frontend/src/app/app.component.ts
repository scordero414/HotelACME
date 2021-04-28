import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  public showMenu;

  constructor(router:Router) {
    router.events.forEach((event) => {
        if(event instanceof NavigationStart) {
            this.showMenu = event.url !== "/login";
            console.log(event.url);
        }
      });
    }
}
