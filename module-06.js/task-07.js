"use strict";

import users from "./users.js";

/*
 * Получить общую сумму баланса (поле balance) всех пользователей.
 */

const calculateTotalBalance = users =>
  users.reduce((totalBalanceAcc, user) => totalBalanceAcc + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
