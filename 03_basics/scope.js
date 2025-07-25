var c = 40
let a = 50
if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log('inner ',a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Sufiyan"

    function two(){
        const website = "YouTube"

        console.log(username);
        
    }
    // console.log(website);   //  ERROR
    two()
}
// one()

if(true){
    const username = "Sufiyan"
    if(username === "Sufiyan"){
        const website = " Youtube"
        // console.log(username + website);        
    }
    // console.log(website);     //  ERROR
}
// console.log(username); //  ERROR


// +++++++++++++    CONCEPT    ++++++++++++++++++


function addOne(num){
return num + 1
}
console.log(addOne(5))


// addTwo(5)   // CANNOT ACCESS BEFORE FUNCTION
const addTwo = function (num){
    return num+ 2
}
// console.log(addTwo(5));
