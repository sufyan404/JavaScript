
const user = {
    name: "AAA",
    loginCount: 8,
    SignIn: true,

    getUserDetails: function(){
        // console.log(`Got user Details from DB`);
        // console.log(`UserName is: ${this.name}`);
        // console.log(this);
        
    }
}

const user2 = {
    name: "AAA",
    loginCount: 8,
    SignIn: true,

    getUserDetails: function(){
        // console.log(`Got user Details from DB`);
        // console.log(`UserName is: ${this.name}`);
        // console.log(this);
        
    }
}

const user3 = {
    name: "AAA",
    loginCount: 8,
    SignIn: true,

    getUserDetails: function(){
        // console.log(`Got user Details from DB`);
        // console.log(`UserName is: ${this.name}`);
        // console.log(this);
        
    }
}

// console.log(user["loginCount"]);
// console.log(user.getUserDetails());
// console.log(this);


// ++++++++++++++++      CONSTRUCTOR FUNCTION         +++++++++++++++++++

// const promiseOne = new Promise()
// const date = new Date()

// this new keyword is constructor function


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }
//  return this
}

const userOne = new User("BBB", 10, false)
const userTwo = new User("CCC", 11, true)
console.log(userOne.constructor);
// console.log(userTwo);
