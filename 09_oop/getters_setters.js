class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
       return `${this._password * Math.random()}xyc`
    }
    set password(value){
        this._password = value
    }
}

const sufiyan = new User('abc@example.com', 123)
console.log(sufiyan.password);
console.log(sufiyan.email);

