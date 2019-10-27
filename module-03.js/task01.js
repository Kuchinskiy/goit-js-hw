"use strict";

/*
Напиши скрипт, который, для объекта user, последовательно:

-- добавляет поле mood со значением 'happy'
-- заменяет значение hobby на 'javascript'
-- заменяет значение premium на false
-- выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
*/


// Вариант-1

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
//   ...{ hobby: 'javascript', premium: false }
// };

// user.mood = 'happy';
// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log( `${key}: ${user[key]}`);
// };



// Вариант-2

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

const listObj = (obj) => {
  for (const key of Object.keys(obj)) {
    console.log(`${key}: ${obj[key]}`);
  }
};

// user.mood = "happy";
// user.hobby = "javascript";
// user.premium = false;

// listObj(user);
