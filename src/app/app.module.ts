import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {AuthGuard} from "./authentication/auth-guard.service";
import { NotFoundModule } from "./not-found/not-found.module";
import {HomepageModule} from "./homepage/homepage.module";
import {AuthenticationModule} from "./authentication/authentication.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    HomepageModule,
    AuthenticationModule,
    NotFoundModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
