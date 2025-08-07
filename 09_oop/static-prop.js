class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const Sufi = new User('Sufi')
    // console.log(Sufi.createId())


class Teacher extends User {
   constructor(username, email){
       super(username)
       this.email = email;
   }
}

const newUser = new Teacher('aaa', 'abc@example.com')
// newUser.logMe()
console.log(newUser.createId());
