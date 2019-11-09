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

// const b = 42;
// const a = b * 2;

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

const hotel = {
  name: ["Resort Hotel", "Palmer Beach"],
  showThis(itemName) {
    this.name.push(itemName);
  }
};

const fn = (itemName, callback) => callback(itemName);

// Передаем копию метода showThis с контекстом привязанным к hotel
fn("Sunlight Motel", hotel.showThis.bind(hotel)); // ["Resort Hotel", "Palmer Beach", "Sunlight Motel" ]
// console.log(hotel.name);

// ========================================================================================

const medalForScore = score => {
  if (score < 3) {
    return "Бронзовая";
  }
  if (score < 7) {
    return "Серебряная";
  }
  return "Золотая";
};

// console.log(medalForScore(1));

// ==========================================================================================

// Вариант-1
const add = function(a, b) {
  return a + b;
};

const multiply = function(a, b) {
  return a * b;
};
// console.log(add(multiply(36325, 9824), 777));  //356857577

// Вариант-2
const total = (a, b, c) => a + b * c;
// console.log(total(777, 36325, 9824));  //356857577

// Вариант-3
const addMultiplyNum = function(a, b, c) {
  const sum = a + b * c;

  return sum;
};

const result = addMultiplyNum(777, 36325, 9824);
// console.log(result);  //356857577

// =============================================================================

/*
 * Напишите функцию которая принимает два массива в качестве аргументов (arr1, arr2).
 * Она должна возвращать 'true' если масивы одинаковые
 * (одни и те же элементы в том же одном порядке)
 * или 'false' если массивы различаются.
 *
 * P.S -->> (способ-1) используйте цикл for чтобы перебрать все значения из первого массива
 * и проверить совпадают ли они со значениями во втором массиве.
 * -->> (способ-2) можно опустить использование цикла for, выйдя сразу из функции,если
 * длина массивов разная используя ветвления.
 */


// Вариант-1
const areArraysSame = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

// console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
// false

// console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
// true

// console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
// false


// Вариант-2
const sameArray = function(arr, array) {
  if (arr.length !== array.length) {
    return false;
  } else arr.length === array.length;
  return true;
};

// console.log(sameArray([1, 2, 3], [4, 5, 6, 7])); // false

// console.log(sameArray([1, 2, 3], [1, 2, 3])); // true

// console.log(sameArray([1, 2, 3], [1, 2, 3, 4])); // false

// =====================================================================================
