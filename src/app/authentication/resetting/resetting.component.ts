import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: 'app-resetting',
  templateUrl: './resetting.component.html',
})
export class ResettingComponent {

  constructor(
      private authenticationService: AuthenticationService,
      private router: Router
  ) {

    if ( authenticationService.isloggedIn() )
      router.navigateByUrl('/');
  }
}
