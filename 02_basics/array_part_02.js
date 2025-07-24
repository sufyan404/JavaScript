const heros = ['aaa', 'bbb', 'ccc', 'ddd', 'eee']
const villains = ['loki', 'thanos', 'red skull']

// heros.push(villains)

// console.log(heros);
// console.log(heros[5][1])

// const allHero = heros.concat(villains)
// console.log(allHero);

const newHeros = [...heros, ...villains]
// console.log(newHeros);

const anArr = [1, 2, 3, [4, 5, 6, [7, 8, 9]], 10, 11, 12, [13, 14, 15]]

const simpArr = anArr.flat(Infinity)
// console.log(simpArr);

console.log(Array.isArray('hello'));
console.log(Array.from({name: 'ali'})); // INTERESTING


const score1 = 100
const score2 = 400
const score3 = 300
const score4 = 200

console.log(Array.of(score1, score2, score3, score4));
