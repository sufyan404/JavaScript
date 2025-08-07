// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

const myObj = {
    name: 'tea',
    price: 99,
    isAvailable: true,

    orderTea: function(){
        console.log(`tea is not ready`);
        
    }
}

console.log(Object.getOwnPropertyDescriptor(myObj, 'name'));

Object.defineProperty(myObj, "name", {
    // writable: false, 
    enumerable: true,
    // configurable: false,
    // iteratable: false
})

// console.log(Object.getOwnPropertyDescriptor(myObj, 'name'));


// for (let [key, value] of myObj) {
//     console.log(`${key}: ${value}`);
// }    NOT ITERATABLE 


for (let [key, value] of Object.entries(myObj)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}