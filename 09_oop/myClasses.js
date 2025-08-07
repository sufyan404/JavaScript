// ES6

class User {
     constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
     }
     encryptPassword(){
        return `${this.password}abc`
     }
     nameCapital(){
        return `${this.username.toUpperCase()}`
     }
}

const chai = new User('chai', 'chai@example.com', 123)
// console.log(chai.encryptPassword());
// console.log(chai.nameCapital());

// behind the scene 

function UserTwo(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
}
UserTwo.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
UserTwo.prototype.nameCapital = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new UserTwo('tea', 'tea@example.com', 123)
console.log(tea.encryptPassword());
console.log(tea.nameCapital());