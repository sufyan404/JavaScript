// const user = new Object();

const user = {}

user.id = '123abc';
user.name = 'John Doe';
user.email = 'some@gmail.com';
user.isAdmin = true;

// console.log(user);


const regularUser = {
    email: "this@google.com",
    fullname: {
        userFullName: {
            firstName: "John",
            lastName: "Doe"
        }
    }
}
// console.log(regularUser['fullname']['userFullName']['firstName']); // John
// console.log(regularUser.fullname.userFullName.firstName); // John


const obj1 ={1: 'one', 2: 'two', 3: 'three'};
const obj2 = {4: 'four', 5: 'five', 6: 'six'};

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);



const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'David', age: 28 },
    { id: 5, name: 'Eve', age: 22 },
]

// console.log(users[1].name)
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('location'));


