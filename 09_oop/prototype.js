// let name = "AAA     "
// let myName = "BBB     "

// console.log(name.trueLength);


let arr = ['loki', 'spidy']

let heroPower = {
    loki: "tva",
    spidy: "web",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spidy}`);
    }
}

Object.prototype.sufi = function(){
    console.log(`sufi is present in all objects`);
    
}

Array.prototype.heySufi = function(){
    console.log(`Sufi says Hello`);
    
}
// heroPower.sufi()
// arr.sufi()
// heroPower.heySufi()
// arr.heySufi()


const user = {
    name: "AAAA",
    email: "abc@example.com"
}

const teacher = {
    createVideo: true
}

const teacherSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'Assignment',
    fullTime: true,
    __proto__: teacherSupport
}
teacher.__proto__ = user

// ++++++    Modern Syntax
Object.setPrototypeOf(teacherSupport, teacher)


let anotherUser = "ChaiAurCode            "

String.prototype.tureLength = function(){
    console.log(`${this}`);
    console.log(`true lenght is: ${this.trim().length}`);
}

anotherUser.tureLength()
"Cricket".tureLength()
"IceBoard".tureLength()