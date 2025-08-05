const promise1 = new Promise((resolve, reject)=>{
    // Do an async tasks
    // DB calls, cryptoghraphy, network call
    setTimeout(()=>{
        console.log(`Async task is completed`);
        resolve()
    }, 1000)
})

promise1.then(()=>{
    console.log(`promise consumed`);
    
})


new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log(`async task 2`);
        resolve()
    }, 1000)
}).then(()=>{
    console.log(`task two promise resolved`);
})


const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
     resolve({
        username: 'ABC',
        email: "example@abc.com"
     })
    }, 1000)
})
promise3.then((user)=>{
  console.log(user);
})


const promise4 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                username: "AAAA",
                pasword: 1234
            })
        } else {
            reject(`ERROR Something went wrong`)
        }
    }, 1000);
})
promise4.then((user)=>{
   console.log(user);
   return user.username
}).then((name)=>{
  console.log(name);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log(`Finally its over`);
})



const promise5 = new Promise((resolve, reject)=>{
   setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                username: "ZZZZ",
                pasword: 10101010
            })
        } else {
            reject(`ERROR Again`)
        }
    }, 1000);
})

async function consumePromiseFive() {
try {
    const response = await promise5
    console.log(response);
} catch (error) {
   console.log(error);
}
}
consumePromiseFive()


// async function getData() {
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log(`error: ${error}`)
//     }
// }

// getData()



fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>{
    return response.json()
}).catch((error)=>{
console.log(error);
}).then((val)=>{
    console.log(val);
})