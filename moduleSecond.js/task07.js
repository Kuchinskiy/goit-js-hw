"use strict";

const arraySumm = function arraySumm(arrayNambers) {
  let summa = 0;
  if (arrayNambers.length > 0) {
    for (const argument of arrayNambers) {
      summa += argument;
    }
  }
  return summa;
};

const getNumbers = function getNumbers() {
  const arrayNambers = [];
  let input;

  do {
    input = prompt("Введите число!");
    if (Number.isNaN(Number(input)) || input === "") {
      alert("Было введено не число, попробуйте еще раз");
    } else {
      arrayNambers.push(Number(input));
    }
  } while (input !== null);
  return arrayNambers;
};

const printSum = summa =>
  summa > 0
    ? `Общая сумма чисел равна [${summa}]`
    : "вы не ввели не одного числа";

const total = arraySumm(getNumbers());

console.log(printSum(total));
