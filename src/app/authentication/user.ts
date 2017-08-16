export class User {

    constructor(
        public id?: number,
        public _username?: string,
        public _email?: string,
        public _password?: string,
        public _passwordPlain?: string
    ) {  }
}

export class fos_user_registration_form {

    constructor(
        public email?: string,
        public username?: string,
        public plainPassword1?: string,
        public plainPassword2?: string,
        public onSuccess?: string,
    ) {}
}