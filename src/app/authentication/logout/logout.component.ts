import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent {

  constructor(
      private authenticationService: AuthenticationService,
      private router: Router
  ) {

    authenticationService.logout();

    location.reload();
    router.navigateByUrl('/');
  }
}
