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
// const переменная = условие ?(if) опция1 :(else) опция2;

// СВОЙСТВА И МЕТОДЫ СТРОК 
// indexOf() - вернет позицию (индекс) на которой находится первое совпадение подстроки или -1, 
// если ничего не найдено(ПРИМЕР НИЖЕ) :

// const massage = 'qwerty';
// console.log(massage. indexOf('b')); // -1


// includes() - один из наиболее часто используемых методов, в большинстве случаев заменяет indexOf, 
// проверяет входит ли подстрока в строку, возвращает true или false(ПРИМЕР НИЖЕ) :

// const massage = 'qwerty';
// console.log(massage. includes('b')); // false


// SWITCH только когда идет сравнение ' === ' и никак не иначе :

// let cost;
// const subscription = 'premium';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

// console.log(cost);

// if и else используем когда используем логические операторы : &&  ||  >  <  ;

//  ЦИКЛЫ :

// -----While(...) с предусловием----- 
// До тех пор пока "УСЛОВИЕ TRUE" продолжает выполнять тело цикла, проверяет УСЛОВИЕ затем
// идет выполнять тело и вновь возвращается к условию и так до бессконечности.

// let counter = 0;
// const products = ['apple', 'banana', 'orange'];

// while (counter < products.length) {
//     console.log(products[counter]);

//     counter +=1;
// }

// -----do.-.while-----  c постусловием(условие после), выполняется хотя бы один раз, далее идет
// смотреть условие :

// let userInput;

// do {
//     userInput = prompt('Enter 1, 2, 3');
//     console.log(userInput);
// }while(userInput === null);

// WHILE & DO ----- НЕ используется для перебора массивов!!! Важно помнить!!!

// Object :

// const fruits = [
//     {name: 'apple', total:200, isFresh: true},
//     {name: 'orange', total:500, isFresh: true},
//     {name: 'bananas', total:700, isFresh: true},
// ];

// console.log(fruits);

// for (let key of fruits) {
//     if (key.name === 'orange') {
//         console.table(key);
//     }
// }

// const products = ['apple', 'grape', 'banana'];

// for (let i = 0; i < products.length; i += 1) {
//     console.log(`i: `, i);
//     console.log(`products[${i}]:`, products[i]);
// }



// const clients = [1, 2, 3, 4, 5].splice(2, 2, 6, 7);
// console.log(clients);

// const add = function(x, y) {

//     const num = x + y;

//     console.log('Enter function...');


//     return num;

// }
// const resA = add(2, 3);
// console.log('Result 2 + 3: ', resA);

// add(2, 7);
// add(4, 3);
// add(5, 4);

// let counter = 0;

// while (counter < 10) {
//     console.log('counter: ', counter);
//     counter += 1;
// }



// Counter sheep :

// while:

// let sheepCounted = 0;

// while (sheepCounted < 10) {
//     console.log(`I have counted ${sheepCounted} sheep!`);
//     sheepCounted++;
// }
// console.log('Zzzzzzzzzzzz');

// for:

// for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
//     console.log(`I have counted ${sheepCounted} sheep!`);
// }
// console.log('Zzzzzzzzzzzzzzz');


// let timesToSayHello = 7;

// for (let i = 0; i < timesToSayHello; i++) {
//     console.log('Hello!');
// }