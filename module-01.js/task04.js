"use strict";

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let howMuchIs = prompt("Сколько дроидов вы готовы купить?");

if (howMuchIs === null) {
  console.log("Отменено пользователем!");
} else if (Number.isNaN(Number(howMuchIs))) {
  console.log("Извините, вы не выбрали количество!");
} else {
  totalPrice = Number(howMuchIs) * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    console.log(
      `Вы купили ${howMuchIs} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`
    );
  }
}
