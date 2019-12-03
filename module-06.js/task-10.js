"use strict";

import users from "./users.js";

/*
 * Получить массив всех умений пользователей (поле skills),
 * при этом не должно быть повторяющихся навыков и они должны быть отсортированы в алфавитном порядке.
 */

// Вариант-1
const getSortedUniqueSkills = users => {
  const arr = users
    .reduce((allSkills, { skills }) => [...allSkills, ...skills], [])
    .filter((elem, index, skills) => skills.indexOf(elem) === index);

  return arr.sort((a, b) => a - b);
};

console.log(getSortedUniqueSkills(users));


// Вариант-2
// const getSortedUniqueSkills = users => {
//   return users
//     .reduce((allSkills, { skills }) => [...allSkills, ...skills], [])
//     .filter((elem, index, skills) => skills.indexOf(elem) === index)
//     .sort();
// };

// console.log(getSortedUniqueSkills(users));




// Для синхронного JS для асинхронного не подходит,так как метод 'PUSH' мутирует оригинал

// const getSortedUniqueSkills = users => {
//   const arr = [];
//   users
//     .reduce((allSkills, { skills }) => [...allSkills, ...skills], [])
//     .forEach(element => {
//       if (!arr.includes(element)) {
//         arr.push(element);
//       }
//     });
//   return arr.sort();
// };

// console.log(getSortedUniqueSkills(users));

// Вариант - 2

// const getSortedUniqueSkills = users => {
//   return users
//     .reduce((allSkills, { skills }) => {
//       skills.forEach(element => {
//         if (allSkills.includes(element)) return;

//         allSkills.push(element);
//       });

//       return allSkills;
//     }, [])
//     .sort();
// };

// console.log(getSortedUniqueSkills(users));

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum',
//  'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
