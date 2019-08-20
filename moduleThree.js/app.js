'use strict';

// let x = 3;

// while ( x * 3 < 10000) {
//     x = x * 3
//     console.log(x);
// }

// -----------------------------------------

const products = {
    name: 'John',
    price: 100,
    quantity: 40,
}

const keys = Object.keys(products);
console.log(keys);

for (const key of  keys) {
    console.log(`key: ${key}, value: ${products[key]}`);
}