// for in loop

const obj = {
    js: 'javascript',
    cpp: "c++",
    rp: "ruby"
}

for (const key in obj) {
    // console.log(key); // key only
}
for (const key in obj) {
    // console.log(obj[key]);  // values
}
for (const key in obj) {
    // console.log(`${key} is shortcut for ${obj[key]}`);
}




const lang = ['js', 'ruby', 'py', 'cpp']

for (const key in lang) {
   console.log(lang[key]); 
}


