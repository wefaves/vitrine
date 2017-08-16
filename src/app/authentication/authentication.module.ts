import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ResettingComponent } from "./resetting/resetting.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule } from "@angular/forms";
import { LoginFormComponent } from "./login/login-form.component";
import { AuthenticationService } from "./authentication.service";
import { LogoutComponent } from "./logout/logout.component";
import {SignupFormComponent} from "./signup/signup-form.component";
import {AuthenticationComponent} from "./authentication.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AuthenticationRoutingModule
    ],
    declarations: [
        AuthenticationComponent,
        LoginComponent,
        ResettingComponent,
        SignupComponent,
        LoginFormComponent,
        LogoutComponent,
        SignupFormComponent
    ],
    providers: [
        AuthenticationService
    ],
})
export class AuthenticationModule { }
