"use strict";

import users from "./users.js";

/*
 * Получить массив имен (поле name) людей, отсортированных в зависимости от ко-тва(length) их друзей (поле friends)
 */

const _getNamesSortedByFriendsCount = users =>
  [...users].sort((a, b) => a.friends.length - b.friends.length)
  .map(user => user.name);

console.log(_getNamesSortedByFriendsCount(users));

/*
* Выполняем тоже задание(что,выше) отсортировка при этом вместо .sort  используем .map && .filter
*/

const getNamesSortedByFriendsCount = users => users
  .map(user => `${user.name}`)
  .filter(fullName => fullName.length >= 7);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head',
// 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
