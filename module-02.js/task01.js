"use strict";

/*
* Напиши функцию logItems(array), которая получает массив и использует цикл for,
* который для каждого элемента массива будет выводить в консоль
* сообщение в формате [номер элемента] - [значение элемента].

* Нумерация должна начинаться с '1'. К примеру для первого элемента 
* массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango',
* а для индекса 2 выведет '3 - Ajax'.

* Вызовы функции для проверки работоспособности твоей реализации:

* -->>-- logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
* -->>-- logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
*/

// Вариант-1

const logItems = (array) => {
    for (let j = 0; j < array.length; j += 1) {
        console.log(`${j + 1} - ${array[j]}`);
    }
};

// Вызовы функции для проверки:

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);



// Вариант-2

// const logItems = (array) => {
//   let str = '';
//   for (let j = 0; j < array.length; j += 1) {
//     str += `${j + 1} - ${users[j]} \n`;  // -->> array - 1;

//     str += `${j + 1} - ${numbers[j]} \n`;  // -->> array - 2;
//   }
//   return str;
// };

// Вызовы функции для проверки:

// const users = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];  // -->> arr-1;
// console.log(logItems(users));

// const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];  // -->> arr-2;
// console.log(logItems(numbers));