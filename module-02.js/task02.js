"use strict";

/*
* Напиши скрипт подсчета стоимости гравировки украшений.

* Для этого создай функцию calculateEngravingPrice(string, pricePerWord) 
* принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова,
* и возвращающую цену гравировки.
*/

// Вариант-1
const calculateEngravingPrice = function(string, pricePerWord = 40) {
  const words = string.split(" ");
  const total = words.length * pricePerWord;

  return total;
};

// Вариант-2
const calculateEngravingPrice = (string, pricePerWord) =>
  string.split(" ").length * pricePerWord;

  
// Вызовы функции для проверки:

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(calculateEngravingPrice("Donec orci lectus aliquam est")); // 200 -->> параметр по умолчанию -->> (40)
console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20)); // 100
