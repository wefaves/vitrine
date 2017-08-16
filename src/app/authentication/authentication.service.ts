import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {User, fos_user_registration_form} from "./user";
import { Router } from "@angular/router";
import { tokenNotExpired } from "angular2-jwt";

@Injectable()
export class AuthenticationService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'https://api.wefaves.com';  // URL to web api
    redirectUrl = '/';

    constructor(
        private http: Http,
        private router: Router
    ) {}

    login(user: User): Observable<User> {

        const url = `${this.apiUrl}/login_check`;

        return this.http
            .post(url, JSON.stringify(user), {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleLoginError);
    }

    logout() {
        localStorage.removeItem('id_token');
        this.router.navigateByUrl('/');
    }

    signup(user:fos_user_registration_form): Observable<fos_user_registration_form> {

        const url = `${this.apiUrl}/users`;

        const req = `{"fos_user_registration_form":{"email":"${user.email}","username":"${user.username}","plainPassword":{"first":"${user.plainPassword1}","second":"${user.plainPassword2}"}}}`;

        console.log(JSON.stringify(JSON.parse(req)));
        return this.http
            .post(url, JSON.stringify(JSON.parse(req)), {headers: this.headers})
            .map(this.signupCallback)
            .catch(this.handleSignupError);
    }

    private handleLoginError(error: Response | any) {

        let errMsg: string;

        if (error instanceof Response) {

            if (error.status == 401) {
                errMsg = `${'Bads credentials'}`;
            }
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        return Observable.throw(errMsg);
    }

    private handleSignupError(error: Response | any) {

        let errMsg: any[];

        if (error instanceof Response) {

            if (error.status == 400) {

                var bodyResponse = JSON.parse(error.text());

                var emailError =  (bodyResponse.errors.children.email.errors) ? bodyResponse.errors.children.email.errors : '';
                var usernameError = (bodyResponse.errors.children.username.errors) ? bodyResponse.errors.children.username.errors : '';
                var passwordError = (bodyResponse.errors.children.plainPassword.children.first.errors) ? bodyResponse.errors.children.plainPassword.children.first.errors : '';

                var list = [
                    {
                        text: emailError,
                    },
                    {
                        text: usernameError,
                    },
                    {
                        text: passwordError,
                    },
                ];

                errMsg = list;
            }

        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    private extractData = (res: Response) => {

        let body = res.json();
        localStorage.setItem('id_token', body.token);

        location.reload();
        this.router.navigateByUrl(this.redirectUrl);
    }

    private signupCallback = (res: Response) => {

        console.log(res);
        console.log('try to register');
        return ('Enregistré !')
    }

    isloggedIn() {
        return tokenNotExpired();
    }
}