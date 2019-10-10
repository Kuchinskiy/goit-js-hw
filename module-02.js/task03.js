"use strict";

/*
 * Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
 * (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
 */

// Вариант-1
const findLongestWord = function(string) {
  const words = string.split(" ");
  let longestWord = words[0];

  for (const word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
};


// Вариант-2
function findLongestWord(str) {
  let longestWord = ' ';
  for(let i = 0; i < str.split(' ').length; i++) {
    if (str.split(' ')[i].length > longestWord.length) {
      longestWord = str.split(' ')[i];
    }
  }
  return longestWord;
}

// Вызовы функции для проверки:

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'
console.log(findLongestWord("Google do a roll"));
// 'Google'
console.log(findLongestWord("May the force be with you"));
// 'force'


