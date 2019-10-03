'use strict';

/*
Напиши функцию countProps(obj), считающую кол-во свойств в объекте. 
Функция возвращает число - количество свойств.
*/

const countProps = (obj) => {
    let counter = 0;
    for (var key in obj) {
      counter++;
    }
    return `Всего свойств: ${counter}`;
};

// Вызовы функции для проверки:

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3