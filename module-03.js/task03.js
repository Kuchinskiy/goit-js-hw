"use strict";

/*
Напиши функцию findBestEmployee(employees), 
которая принимает объект сотрудников и возвращает имя самого продуктивного 
(который выполнил больше всех задач). Сотрудники и кол-во выполненых задач 
содержатся как свойства объекта в формате "имя":"кол-во задач".
*/

// Вариант-1

// const findBestEmployee = employees => {
//   const entries = Object.entries(employees);
//   let maxValue = entries[0];

//   for (let entry of entries) {
//     if (entry[1] > maxValue[1]) {
//       maxValue = entry;
//     }
//   }

//   return maxValue;
// };

// Вариант-2

const findBestEmployee = (employee) => {
  let max = 0;
  let name;

  const keys = Object.keys(employee);

  for (const key of keys) {
    if (max < employee[key]) {
      max = employee[key];
      name = key;
    }
  }

  return {
    name,
    numberOfTasks: max
  };
};

// Вызовы функции для проверки:

console.table(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.table(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.table(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
