// const email = 'some@google.ai'

// if (email) {
//     console.log('got email')
// } else {
//     console.log('no email');
// }


// const email = ''

// if (email) {
//     console.log('got email')
// } else {
//     console.log('no email');
// }


const email = []
const data = {}

if (email) {
    // console.log('got email')
} else {
    // console.log('no email');
}


//  FALSY VALUES
//  false, 0, "", -0, bigint 0n, null, undefined, NAN

//  TRUTHY VALUE
//  ture, "0", "false", " ", [], {}, function(){}


if (email.length === 0) {
    // console.log('empty array');
}

if (Object.keys(data).length === 0) {
    // console.log('empty object');
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1);