// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const srt = "hello Wrold"

for (const greetings of srt) {
    // console.log(`each char is ${greetings}`);
}



// Maps

const map = new Map()
map.set('PK', 'Pakistan')
map.set('USA', 'America')
map.set('fr', 'Francs')
map.set('fr', 'Francs')

// console.log(map);

for (const items of map) {
    // console.log(items);
}

for (const [items, value] of map) {
    // console.log(items, value);
}

const myObj = {
    'game1': 'abc',
    'game2': 'xyz'
}

for (const [key, value] of object) {
    // console.log(key, value);   // NOT ITERATABLE
}
