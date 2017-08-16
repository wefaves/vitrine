import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {

  constructor(
      private authenticationService: AuthenticationService,
      private router: Router
  ) {

    if ( authenticationService.isloggedIn() )
      router.navigateByUrl('/');
  }
}
