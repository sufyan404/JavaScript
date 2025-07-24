const myArr = [1, 2, 3, 4, 5, 6]
const myHeros = ['loki', 'aaa', 'bbb']

const myArray = new Array (2, 3, 4, 5, 5)
// console.log(myArr[0]);


// # ARRAY METHODS

myArr.push(6)
myArr.push('ali')
myArr.pop()

myArr.unshift("ali")
myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(99));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// # SLice and Splice

console.log('a ', myArr);

const arr1 = myArr.slice(1, 4)
console.log(arr1);
console.log('b ', myArr);

const arr2 = myArr.splice(1, 4)
console.log('c ', myArr);
console.log(arr2);

