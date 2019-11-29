'use strict';

import users from './users.js';

/*
* Получить массив только неактивных пользователей (поле isActive).
*/

const getInactiveUsers = users => users.filter(user => !user.isActive).map(user => user.name);

console.log(getInactiveUsers(users)); 
// [ Moore Hensley,  Ross Vazquez,  Blackburn Dotson]