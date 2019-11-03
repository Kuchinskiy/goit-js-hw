"use strict";

// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// Передаем console.log как callback-функцию

//   repeat(3, console.log);
// 0
// 1
// 2

// const labels = [];

// repeat(5, function(i) {
//   labels.push(`Label ${i + 1}`);
// });

// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

// ===========================================================================================

// Филтрация массива с вызовом функции-CALLBACK  как аргумент:

// const filter = (array, testCallBack) => {
//   const result = [];

//   for (const el of array) {
//     const passed = testCallBack(el);

//     if (passed) {
//       result.push(el);
//     }
//   }

//   return result;
// };

// console.log(filter([1, 2, 3, 4, 5], number => number >= 3 ));

// console.log(filter([1, 2, 3, 4, 5, 6, 7], function (el) {
//   return el >= 4;
// }));

// ==============================================================================

// const filter = function(array, testCallBack) {
//   const result = [];

//   for (const el of array) {
//     const passed = testCallBack(el);

//     if (passed) {
//       result.push(el);
//     }
//   }

//   return result;
// };

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true }
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithAmount); // массив с объектами apples и grapes

// =======================================================================================

// Функция выводящяя текущее время в браузер используя метод Date & setInterval:

// const printTime = () => {
//   const date = new Date();
//   const hours = date.getHours();
//   const mins = date.getMinutes();
//   const secs = date.getSeconds();

// document.body.innerHTML = hours + ':' + mins +':' + secs;
//   document.body.innerHTML = `${hours}:${mins}:${secs}`;
// };

// setInterval(printTime, 1000);

// ===========================================================================================

// Вывести введеное число в 'prompt' и его квадратный корень:

// const num = prompt('Enter a number', '');
// const answer = Math.sqrt(num);

// alert(`The square root of ${num} is ${answer}`);

// ===========================================================================================

/*  
  Напиши функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// const findLargestNumber = numbers => {
//   return Math.max(...numbers);
// };

// Вызовы функции для проверки

// console.log(findLargestNumber([1, 2, 3])); // 3

// console.log(findLargestNumber([27, 12, 18, 5])); // 27

// console.log(findLargestNumber([31, 128, 14, 74])); // 128

// ==================================================================

// const cat = {
//   name: 'Thomas',
// };

// const dog = {
//   name: 'Spike',
//   say () {
//     console.log(`My name is ${this.name} give me your money`);
//   }
// }

// dog.say.call(cat);

// =========================================================================

const b = 42;
const a = b * 2;

// console.log(a);

const calcA = (a, b) => {
  return a * b;
};
// console.log(calc(2, 42));

const calcB = (a, b = 42) => a * b;
// console.log(calc(2, 4));

// const age = prompt( "Please tell me your age:" );
// console.log( age );

// =====================================================================================
