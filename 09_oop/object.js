function multiply5(num){
    return num*5
}
multiply5.power = 2
// console.log(multiply5(5));
// console.log(multiply5.power);
// console.log(multiply5.prototype);

function User(username, score){
    this.username = username
    this.score = score
}

User.prototype.increment = function(){
    this.score++
}
User.prototype.printMe = function(){
    // console.log(`score is: ${this.score}`);
    
}

const chai = new User('AAA', 100)
const tea = new User('BBB', 500)

chai.printMe()
chai.increment()