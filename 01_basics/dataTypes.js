"use strict";

let name = "Sufiyan";
let age = 25;
let isStudent = true;

// number => 2 to power 53
// bigint => 2 to power 64
// string => "Sufiyan"
// boolean => true or false
// null => no value | standalone value
// undefined => variable is declared but not initialized
// symbol => unique value
// object => complex data structure


console.log(typeof "Sufiyan"); // string
console.log(typeof 25); // number
console.log(typeof true); // boolean
console.log(typeof null); // object (this is a known bug in JavaScript)
console.log(typeof undefined); // undefined
console.log(typeof Symbol("unique")); // symbol
console.log(typeof { name: "Sufiyan", age: 25 }); // object
console.log(typeof [1, 2, 3]); // object (arrays are a type of object in JavaScript)


console.log('sufiyan')