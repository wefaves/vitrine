import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(
      private authenticationService: AuthenticationService,
      private router: Router
  ) {

   if ( authenticationService.isloggedIn() )
     router.navigateByUrl('/');
  }
}
