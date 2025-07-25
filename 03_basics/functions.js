function sayMyName() {
    // console.log('Sufiyan');  
} 
sayMyName()


// function addTwoNumver(number1, number2){
//    console.log(number1 + number2);
// }

function addTwoNumver(number1, number2){
    // let total = number1 + number2
    // return total
    return number1 + number2
}


// addTwoNumver(2, 2)
// addTwoNumver(2, "2")
// addTwoNumver(2, "a")

const result = addTwoNumver(2, 2)
// console.log('result' , result );


// function loginMessage(username){
//     if(username === undefined){
//       console.log("Please enter a username");
//       return
//     }
//    return `${username} Just logged in`
// }
// let message = loginMessage()
// console.log(message);


// function loginMessage(username){
//     if(!username){
//       console.log("Please enter a username");
//       return
//     }
//    return `${username} Just logged in`
// }
// let message = loginMessage()
// console.log(message);


function loginMessage(username = 'saam'){
    if(!username){
      console.log("Please enter a username");
      return
    }
   return `${username} Just logged in`
}
let message = loginMessage()
// console.log(message);



function calculateCartPrice (...num1){
    return num1
}
// console.log(calculateCartPrice(2, 2, 3, 5, 3))

function calculateCart (val1, val2, ...num1){
    return num1
}
// console.log(calculateCart(2, 2, 3, 5, 3))



const user = {
    username: "abc",
    price: 199
}

function handleObject(object){
    //  console.log(`username is ${object.username} price is ${object.price}`);    
}
// handleObject(user)
handleObject({
    username: "abc",
    price: 199
})


const arr = [2, 4, 6, 8]

function returnValue(anyArr){
    return anyArr[1]
}
// console.log(returnValue(arr));
// console.log(returnValue([2, 4, 6, 8]));


