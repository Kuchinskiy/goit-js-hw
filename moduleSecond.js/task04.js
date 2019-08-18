'use strict';

function findLongestWord(str) {
  let longWord = '';
  for(let i = 0; i < str.split(' ').length; i++) {
    if (str.split(' ')[i].length > longWord.length) {
      longWord = str.split(' ')[i];
    }
  }
  return longWord;
}


// function findLongestWord(str) {
//     let longWord = ''; 
//     for (let k of str.split(' ')) {
//       if (k.length > longWord.length ) {
//         longWord = k;
//       }
//     }
//     return longWord;
//   }


// Вызов функции для проверки:

  console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
  ); // 'jumped'

  console.log(
    findLongestWord("Google do a roll")
  ); // 'Google'

  console.log(
    findLongestWord("May the force be with you")
  ); // 'force'

  