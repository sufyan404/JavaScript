const myNum = [1, 2, 3, 4, 5, 6, 7]

// const newNum = myNum.map( (num) => {
//    return num + 8
// } )
// console.log(newNum);

// myNum.push(8)
// console.log(myNum);




const newNum = myNum
  .map( (num) => {
    return num * 10
}).map((num)=>{
    return num + 1
}).filter((num)=>{
    return num > 40
})
console.log(newNum);