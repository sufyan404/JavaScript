//  if

const isLoggedIn = true
const temp = 42

if (isLoggedIn) {
    
}

if (temp < 50){
    // console.log('less than 50');
}
else{
    // console.log('grater than 50');
}


if (2 == "2") {
    // console.log('executed');
}

//  ++++++++++   COMPARISON    +++++++++++
//    >, <, =>, <=, ==, ===, !=, !==


const score = 100

if (score > 50) {
    const power = 'fly'
    // console.log(`use power: ${power}`);
}


// shorthand notation 
 
// if (true) console.log('test');

// if (true) console.log('test'),
// console.log('test 2');   // same scope with comma, but not readable code


const balance = 300

if (balance < 100) {
    // console.log('less than 100');
} else if (balance < 200){
    // console.log('less than 100');
} else {
    // console.log('less than 400');
}


const userLoggedIn = true
const card = true
const email = false
const google = true

if (userLoggedIn && card ) {
    // console.log('allowd');
}

if (email || google) {
    console.log('welcome')
}
