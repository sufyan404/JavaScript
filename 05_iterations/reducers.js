// shoping carts are the pratical applications of reduce()

const num = [1, 2, 3, 4, 5]

const total = num.reduce( (acc, cur) => {
   // console.log(`acc ${acc} ===> cur ${cur}`);
   return acc + cur
},0 )
// console.log(total);

const myTotal = num.reduce((acc, cur)=> acc + cur, 0)
// console.log(myTotal);



const cart = [
   {
      item: 'js',
      price: 100,
   },
   {
      item: 'py',
      price: 99,
   },
   {
      item: 'cpp',
      price: 33,
   },
   {
      item: 'ruby',
      price: 122,
   }
]


const cartTotal = cart.reduce( (acc, item) => {
   return acc + item.price
}, 0 )
console.log(cartTotal);
