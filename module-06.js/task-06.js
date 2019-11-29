"use strict";

import users from "./users.js";

/*
 * Получить массив пользователей попадающих под возрастную категорию от min до max лет (поле age).
 */

const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age < max);

console.log(getUsersWithAge(users, 20, 30));
// [object {Ross Vazquez}, object {Elma Head}, object {Carey Barr}]
console.log(getUsersWithAge(users, 30, 40));
// [object {Moore Hensley}, object {Sharlene Bush}, object {Blackburn Dotson}, object {Sheree Anthony}]
