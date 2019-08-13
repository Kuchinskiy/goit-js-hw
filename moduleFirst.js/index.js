'use strict';

// const arr = [12, 7, 9, 34, 56];

// let total = 0;

// for (let key of arr) {
//     console.log(key);
//     total += key;
// }
// console.log(total);


// console.log

// const massage = 'Java Script is awesome';
// console.log(massage);


// alert & console.log

// const name = 'Mango';
// console.log('My name is: ', name);

// alert(name);

// const isPassword = confirm('Подтвердите ваш пароль');
// const yourName = prompt('Введите ваше имя');

// const value = prompt('Please enter is number');
// console.log(typeof value);
// console.log(value);

// value = value + 10; 
// let value = 5;
// value += 10;
// console.log(value);

// Операторы сравнения:
// const x = 5;
// const y = 10;
// const z = 5;
// console.log(x > y);
// console.log(x < y);

// Преобразование значения в число с помощью функции Number(val):
// const valueA = '5';
// console.log(Number(valueA));  // 5
// console.log(typeof Number(valueA));  //'number'

// const valueB = 'qwerty';
// console.log(Number(valueB));  // NaN
// console.log(typeof Number(valueB)); //'number'


// Парсит из строки целое число:
// const scaleA = '5px';
// console.log(Number.parseInt(scaleA)); // 5

// const scaleB = '12px75';
// console.log(Number.parseInt(scaleB)); // 12

// Парсит из строки дробное число:
// const valueAZ = '17.7qwe87';
// console.log(Number.parseFloat(valueAZ)); // 17.7

// const valueAY = 'qwerty';
// console.log(Number.parseFloat(valueAY)); // NaN

// ПРОВЕРКА на ЧИСЛО используем метод Number.isNaN(val):
// true — если значение val это NaN
// false — если значение val это не NaN
// Для всех значений val кроме NaN, при передаче в Number.isNaN(val) вернёт false. 
// Этот метод не производит попытку преобразовать val к числу, а просто выполняет проверку на NaN.

// const validNumber = Number('77');
// console.log(Number.isNaN(validNumber)); // false

// const validNumberAZ = Number('qwerty');
// console.log(Number.isNaN(validNumberAZ)); // true


// && :
// const num = 20;
// const result = num > 10 && num < 30;
// console.log(result); // true

// || :
// const num = 7;
// const result = num < 10 || num > 20;
// console.log(result); // true

// const num = 77;
// const result = num < 10 || num > 69;
// console.log(result); // true

// const num = 33;
// const result = num > 44 || num > 55;
// console.log(result); // false


// if ... else :
// let cost = 0;
// const subscription = 'pro';

// if (subscription === 'pro') {
//     cost = 70;
// }
// console.log(cost); // 70

// let cost = 0;
// const subscription = 'premium';

// if (subscription === 'pro') {
//     cost = 70;
// }
// console.log(cost); // 0

// let cost = 0;
// const subscription = 'premium';

// if (subscription === 'pro') {
//     cost = 70;
// } else {
//     cost = 0;
// }
// console.log(cost); // else (0)

// Тернарный оператор должен использоваться в простых операциях присваивания или возврата:
// let type;
// const age = 15;

// if (age >= 17) {
//     type = 'adult';
// } else {
//     type = 'child';
// }
// console.log(type);

//  ternary (тройной) :
// const type = age >= 17 ? 'adult' : 'child';
