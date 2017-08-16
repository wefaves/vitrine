import { Component } from '@angular/core';
import { User } from "../user";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {

  model = new User;
  submitted = false;

  user: User;
  errorMessage: string = '';

  constructor(private authenticationService: AuthenticationService) {}

  onSubmit() {

    this.submitted = true;

    this.authenticationService
        .login(this.model)
        .subscribe(
            p => this.user = p,
            e => this.errorMessage = e
        );
  }
}
