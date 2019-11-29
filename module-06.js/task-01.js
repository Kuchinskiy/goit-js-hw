'use strict';

import users from './users.js';

/*
* Получить массив имен всех пользователей (поле name).
*/

// const getUserNames = users => users.map(user => user.name);
// console.log(getUserNames(users));

// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 
// 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


/*
* Уменьшаем наш массив имен пользователей до простой строки (поле name).
* Получаем имена каждого пользователя в новой строке.
*/

const getUserNames = users => users.reduce((acc, user) => `${acc}${user.name}\n`,'');
console.log(getUserNames(users));