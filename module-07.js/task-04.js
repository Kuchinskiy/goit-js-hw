"use strict";

/* 
* Счетчик состоит из спана и кнопок, которые должны увеличивать и 
* уменьшать значение счетчика на 1.

* Создай переменную counterValue в которой будет хранится текущее значение счетчика.
* Создай функции increment и decrement для увеличения и уменьшения значения счетчика
* Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса/
*/

// Вариант-1(через class)
const valueById = document.querySelector("#value");
let counterValue = 0;

document.querySelector(".btn-increment").addEventListener("click", () => {
  counterValue += 1;
  valueById.textContent = counterValue;
});

document.querySelector(".btn-decrement").addEventListener("click", () => {
  counterValue -= 1;
  valueById.textContent = counterValue;
});


// Вариант-2(через data-атрибуты)
const valueByIdSpan = document.querySelector("#value");
let counterValueClick = 0;

document
  .querySelector('#counter button[data-action="increment"]')
  .addEventListener("click", () => {
    counterValueClick += 1;
    valueByIdSpan.textContent = counterValueClick;
  });

document
  .querySelector('#counter button[data-action="decrement"]')
  .addEventListener("click", () => {
    counterValueClick -= 1;
    valueByIdSpan.textContent = counterValueClick;
  });
