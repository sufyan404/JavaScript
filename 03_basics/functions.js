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
console.log(message);


