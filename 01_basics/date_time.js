let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());


// console.log(typeof myDate);


// let myCreatedDate = new Date (2025, 0, 23)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date ("2025-01-15")
let myCreatedDate = new Date ("01-15-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate = new Date ()
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());


// `${newDate.getDay()} and the time is.......`


newDate.toLocaleString("default", {
    weekday: "long"
})