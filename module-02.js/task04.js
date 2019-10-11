"use strict";

/*
 * Напиши функцию formatString(string) принимающую строку в параметр string.
 * Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
 * Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки
 * троеточие '...', после чего возвращает укороченную версию.
 */


const formatString = (str) => {
    if (str.length > 40) {
        return (`${str.slice(0, 40)}...`);
    }
    return str;
};


// Вариант с тернарным оператором:

// const formatString = (str, value = 40) =>
//   str.length > value ? `${str.slice(0, 40)}...` : str;


// Вызовы функции для проверки:

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка

