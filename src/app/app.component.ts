import {Component, ViewEncapsulation} from '@angular/core';
import {AuthenticationService} from "./authentication/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  isLoggedIn: boolean;

  constructor(private authenticationService: AuthenticationService) {

    if ( authenticationService.isloggedIn() )
      this.isLoggedIn = true;
    else
      this.isLoggedIn = false;
  }

  goToDashboard() {
    window.location.href='http://dashboard.wefaves.com/';
  }
}
