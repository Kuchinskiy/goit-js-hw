"use strict";

/*
* Напиши скрипт со следующим функционалом:
*-->> При загрузке страницы пользователю предлагается в prompt ввести число.
*    Ввод сохраняется в переменную input и добавляется в массив чисел numbers.

*-->> Операция ввода числа пользователем и сохранение в массив продолжается до
*     тех пор, пока пользователь не нажмет Cancel в prompt.

* -->> После того как пользователь прекратил ввод нажав Cancel, если массив
*   не пустой, необходимо посчитать сумму всех элементов массива и записать ее в
*   переменную total. Используй цикл for или for...of. 
*   После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.

* -->>> let input;
* -->>> const numbers = [];
* -->>> let total = 0;
*/


const getNumber = () => {
  const numbers = [];
  let input;

  do {
    input = prompt("Введите число!");
    if (Number.isNaN(Number(input)) || input === " ") {
      alert("Было введено не число, попробуйте еще раз");
    } else {
      numbers.push(Number(input));
    }
  } while (input !== null);

  return numbers;
};

const arrTotal = (numbers) => {
  let total = 0;
  if (numbers.length > 0) {
    for (const number of numbers) {
      total += number;
    }
  }
  return total;
};

const printSum = (total) => total > 0
    ? `Общая сумма чисел равна [${total}]`
    : "Вы не ввели не одного числа";

let total = arrTotal(getNumber());
console.log(printSum(total));
