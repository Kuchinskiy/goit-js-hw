"use strict";

import users from "./users.js";

/*
 * Получить массив объектов пользователей по цвету глаз (поле eyeColor).
 */

const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));
// [object {Moore Hensley}, object {Sharlene Bush}, object {Carey Barr}]


/*
* Получаем значения из массива объектов пользователей по ключам
*/

// const getUsersWithEyeColor = (users) => users.map(user => {
//     const usersArrObj = {};
//     usersArrObj[user.name] = user.gender;
//     return usersArrObj;
// });

// console.log(getUsersWithEyeColor(users));

