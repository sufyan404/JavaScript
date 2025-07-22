// # Primitive    7   Types
// Strings, Numbers, Boolean, null, undefined, symbol, bigint

let score = 100;
let scoreValue = 100.3;
let isLoggedIn = false;
let temp = null;
let userEmail; 
let name = "Ali"
let id = Symbol("123")
let anotherId = Symbol("123")
let bigNumber = 958349563456349544579579267687342959234375294757597n


// console.log(typeof bigNumber);
// console.log(id === anotherId);
// console.log(typeof temp);
// console.log(typeof score);


//****************************************************************

// Reference Type (Non Premitive)
// Array, Objects, Functions


const heros = ['loki', 'man', 'duuo'];

{
    name: 'Ali';
    age: 12;
    isLoggedIn: false
}

const myFunc = function(){
//  console.log('Hello World')
}
myFunc()

console.log(typeof myFunc);
console.log(typeof heros);




