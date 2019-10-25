'use strict';

/*
Напиши функцию countProps(obj), считающую кол-во свойств в объекте. 
Функция возвращает число - количество свойств.
*/

const countProps = (obj) => {
    let total = 0;
    for (const key in obj) {
      console.log(key);
      total += 1;
    }
    return `Всего свойств: ${total}`;
};


// Вызовы функции для проверки:

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3