const user = {
    username: "sufiyan",
    price: 999,

    welcomeMessage: function(){
    //  console.log(`${this.username}: Welcome to Website`);
    // console.log(this);
    
    }
}
user.welcomeMessage()
user.username = "Ali"
user.welcomeMessage()

// console.log(this);



function func(){
    let username = "summy"
    // console.log(this.username);  //   "this" WORKS ONLY IN OBJECT
    // console.log(this);       //   WORKS
    
}
func()


const chai = () => {
    let username = "summy"
    // console.log(this.username);
    // console.log(this);  //     DOES NOT WORK IN ARROW
    
}
chai()


