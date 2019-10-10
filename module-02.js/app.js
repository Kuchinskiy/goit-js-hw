"use strict";

// FUNCTION - ARRAY - CYCLES

// const ourFirstFunction = function () {
//     console.log('Hello world');
// };
// ourFirstFunction();

// const ourFirstFunction = () => console.log('Hello world');
// ourFirstFunction();

// -----------------------------------------------------------------------

/*
 * Есть массив имен пользователей
 * Используя методы массива, последовательно выполни указанные операции;
 */

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// Удалить первый элемент массива:

// console.log(users.shift());
// console.log(users);// ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива:

// console.log(users.pop());
// console.log(users);// ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux":

// users.unshift('Lux');
// console.log(users);

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию:

// users.push('Jay', 'Kiwi');
// console.log(users);

// Удалить из массива элемент хранящийся в переменной userToDelete:

// const userToDelete = 'Ajax';
// let index = users.indexOf(userToDelete);
// console.log('index:', index);

// users.splice(index, 1);
// console.log(users);

// Добавить в массив пользователя хранящегося в переменной userToInsert,
// перед пользователем хранящимся в переменной insertBefore:

// const userToInsert = 'Kong';
// const insertBefore = 'Jay';

// index = users.indexOf(insertBefore);
// console.log('index:', index);

// users.splice(index, 0, 'Kong');
// console.log(users);
// --------------------------------------------------------------------------------------

// Лексическое окружени:

// let value = 2;
// function multiplyThis(n) {
//   let ret = n * value;
//   return ret;
// }
// let multiplied = multiplyThis(6);

// console.log(multiplied);

// Функция, которая возвращает функцию:

// let val = 7;
// function createAdder() {
//   function addNumbers(a, b) {
//     let ret = a + b;
//     return ret;
//   }
//   return addNumbers;
// }
// let adder = createAdder();
// let sum = adder(val, 8);
// console.log("example of function returning a function: ", sum);

// ---------------------------------------------------------------------------------

// Если нам необходимо массив строк преобразовать в ЧИСЛА,то записываем такую функцию:

const transformArray = function(arr) {
  const newArr = [];

  for (let item of arr) {
    newArr.push(Number(item));
  }
  return newArr;
};

// А, в эту функцию передаем результат преобразования

const getUserInput = function() {
  const input = prompt("Введите числа на ваш выбор, через пробел");

  if (input === null) {
    return;
  }

  const arr = input.split(" ");
  const transformArr = transformArray(arr); // результат преобразования и сохранение в переменную

  return transformArr; // возврат значения того,что мы преобразовывали(массив)
};

const userInput = getUserInput();
console.log(userInput); // тут мы получаем массив СТРОК ['1', '2', '3']
// Итог: массив строк,преобразован в массив чисел [1, 2, 3]
