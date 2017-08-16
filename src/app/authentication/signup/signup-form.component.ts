import { Component } from '@angular/core';
import {User, fos_user_registration_form} from "../user";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
})
export class SignupFormComponent {

  model = new fos_user_registration_form;
  submitted = false;

  user: fos_user_registration_form;
  //errorMessage: string = '';

  errorMessage: any[];

  constructor(private authenticationService: AuthenticationService) { console.log(this.model)}

  onSubmit() {

    this.submitted = true;

    console.log(this.user);

    this.authenticationService
        .signup(this.model)
        .subscribe(
            p => this.user = p,
            e => this.errorMessage = e
        );


    console.log(this.user);
  }
}
