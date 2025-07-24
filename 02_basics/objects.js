// Singleton ### Construcror method
// This is a singleton object that contains a method to log a message.
// Object.create



// Object literals 

const mySymb = Symbol('key1')

const jsUser = {
    name: 'Ali',
    'full name': 'Ali Ahmed',
    [mySymb]: 'key1',
    age: 30,
    location: 'Lahore',
    email: 'ali@example.com',
    isLoggedIn: false,
    lastLogin: ['Monday', 'Saturday'],
}

// console.log(jsUser.email);
// console.log(jsUser['email']);

// console.log(jsUser['full name']);
// console.log(jsUser[mySymb]);

jsUser.email = 'chatgpt@google.com';
// Object.freeze(jsUser)
// jsUser.email = 'kaam@google.com';

console.log(jsUser.email); 

jsUser.greetings = function(){
    console.log('hello js user');    
    
}

jsUser.greetingsTwo = function(){
    console.log(`hello , ${this.name}`);    
}
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());




