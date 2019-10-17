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
// -->> function expression

const logItems = function(array) {
  let num = 1;
  const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
  for (let j = 0; j < users.length; j++) {
    console.log(`${num} - ${users[j]}`);
    num += 1;
  }
  return array;
};

// Вызовы функции для проверки:

logItems();
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);


// Вариант-2
// -->> function declaration

function logItems (array) {
    for (let j = 0; j < array.length; j++) {
        console.log(`${j + 1} - ${array[j]}`);
    }
}

// Вызовы функции для проверки:

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);