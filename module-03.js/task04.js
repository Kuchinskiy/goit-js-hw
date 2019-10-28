"use strict";

/*
Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
Функция считает общую сумму запрплаты работников и возращает ее. 
Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
*/


// Вариант-1
const countTotalSalary = (employees) => {
  let total = 0;

  for (const key in employees) {
    total += employees[key];
  }

  return total;
};


// Вариант-2
// const countTotalSalary = (employees) => {
//   let sumSalary = 0;
//   const salaryValues = Object.values(employees);

//   for (const value of salaryValues) {
//     sumSalary += value;
//   }
//   return sumSalary;
// };

// Вызовы функции для проверки:

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400
