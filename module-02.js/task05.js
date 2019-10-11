"use strict";

/*
 * Напиши функцию checkForSpam(str), принимающую 1 параметр string - строку.
 * Функция проверяет ее на содержание слов "spam" и "sale".
 * Если нашли запрещенное слово то функция возвращает true,
 * если запрещенных слов нет функция возвращает false.
 * Слова в строке могут быть в произвольном регистре.
 */

const checkForSpam = str => {
  if (
    str.toLowerCase().includes('sale') ||
    str.toLowerCase().includes('spam')
  ) {
    return true;
  }
  return false;
};

// Вызовы функции для проверки:

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
