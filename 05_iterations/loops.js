// for (let i = 1; i <= 10; i++) {
//     const element = i;
// if(element === 5){
//     // console.log('next 5');
    
// }
//     // console.log(element);
// }



// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop: ${i}`);
//     for (let k = 1; k <= 10; k++) {
//         // console.log(`inner: ${k} and outer ${i}`);
//         console.log(i + " x " + k + "   =   " + i*k);
//     }
// }


// let arr = ['aaa', 'bbb', 'ccc', 'ddd']
// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);   
// }



// break and continue

// for (let i = 1; i <= 10; i++) {
    //     if (i === 5) {
        //         console.log(`detected 5`);
        //         break
        //     }
        //     console.log(`value of i is: ${i}`);
// }


for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is: ${i}`);
}