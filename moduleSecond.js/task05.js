'use strict';

function formatString(str) {
    if (str.length > 40) {
      return str.slice(0, 40) + '...';
    }
    return str;
  }

// Вызовы функции для проверки:

console.log(
    formatString("Curabitur ligula sapien, tincidunt non.")
  ); // вернется оригинальная строка

  console.log(
    formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
  ); // вернется форматированная строка

  console.log(
    formatString("Curabitur ligula sapien.")
  ); // вернется оригинальная строка

  console.log(
    formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
  ); // вернется форматированная строка
  