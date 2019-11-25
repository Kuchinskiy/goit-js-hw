'use strict';

// Array.prototype.forEach()
// array.forEach(callback[currentValue, index, array])

const myFunc = (name, num) => console.log(`namber: ${num} name: ${name}`);

const itemArr = ['apple', 'milk', 'meat'];

itemArr.forEach((curr, idx) => myFunc(curr, idx));

const fruitsWithPrice = itemArr.map((curr, idx) => {
    return `${curr}: ${(idx + 1) * 2}`;
});

// Array.prototype.map()
// array.map(callback[currentValue, index, array])

const priceList = itemArr.map((curr, idx) => ({name: curr, price: (idx + 1) * 2}));

console.log(itemArr);
console.log(fruitsWithPrice);
console.log(priceList);

// Array.prototype.filter()
// array.filter(callback[currentValue, index, array])

const filtred = priceList.filter((curr) => curr.price > 3);

console.log(filtred);