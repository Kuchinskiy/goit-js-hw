'use strict';

const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// Удалить первый элемент массива:

console.log(users.shift()); 
console.log(users);// ["Poly", "Ajax", "Chelsey"]


// Удалить последний элемент массива:

console.log(users.pop());
console.log(users);// ["Poly", "Ajax"]



// Добавить в начало массива пользователя "Lux":

users.unshift('Lux');
console.log(users);


// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию:

users.push('Jay', 'Kiwi');
console.log(users);


// Удалить из массива элемент хранящийся в переменной userToDelete:

const userToDelete = 'Ajax';
let index = users.indexOf(userToDelete);
console.log('index:', index);

users.splice(index, 1);
console.log(users);


// Добавить в массив пользователя хранящегося в переменной userToInsert,
// перед пользователем хранящимся в переменной insertBefore:

const userToInsert = 'Kong';
const insertBefore = 'Jay';

index = users.indexOf(insertBefore);
console.log('index:', index);

users.splice(index, 0, 'Kong');
console.log(users);

