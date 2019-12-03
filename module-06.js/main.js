"use strict";

// Array.prototype.forEach()
// array.forEach(callback[currentValue, index, array])

// const numbers = [1, 2, 3];

// Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// Функциональный forEach
// numbers.forEach(num => console.log(num));

// Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

//  * Practice classes ------------------------------------------------------------

// const myFunc = (name, num) => console.log(`namber: ${num} name: ${name}`);

// const itemArr = ["apple", "milk", "meat"];

// itemArr.forEach((curr, idx) => myFunc(curr, idx));

// const fruitsWithPrice = itemArr.map((curr, idx) => {
//   return `${curr}: ${(idx + 1) * 2}`;
// });

// Array.prototype.map()
// array.map(callback[currentValue, index, array])

// const priceList = itemArr.map((curr, idx) => ({
//   name: curr,
//   price: (idx + 1) * 2
// }));

// console.log(itemArr);
// console.log(fruitsWithPrice);
// console.log(priceList);

// Array.prototype.filter()
// array.filter(callback[currentValue, index, array])

// const filtred = priceList.filter(curr => curr.price > 3);

// console.log(filtred);

// Цепочки методов массива -
// -->>>  при необходимости применить несколько и более методов за один раз;

// const chainedMapAndFilter = itemArr
// .map((curr, idx) => ({name: curr,price: (idx + 1) * 2}))
// .filter((curr) => curr.price > 3);

// console.log(chainedMapAndFilter);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const result = numbers
// .filter(x => x % 2 === 0)
// .map(x => x * 2)
// .reverse()

// console.log(result);

// * Напишим функцию для постоянного вычесления 'четных' чисел из приходящего массива

// const reversingSquareEven = (arr) =>
//   arr
//     .filter(x => x % 2 === 0)
//     .map(x => x * 2)
//     .reverse();

// console.log(reversingSquareEven(numbers));

// ======================================

const animals = [
  { id: "001", name: "Joey", species: "cow", isActive: false },
  { id: "002", name: "Natasha", species: "chicken", isActive: true },
  { id: "003", name: "Ed", species: "pig", isActive: false },
  { id: "004", name: "Paul", species: "fish", isActive: false },
  { id: "005", name: "Asal", species: "cat", isActive: true }
];

// console.log(animals[3].species);

//  * for VS forEch

// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }

// animals.forEach((animal) => {
//   console.log(animal);
// });

// * Для каждого элемента коллекции (animal) вернем значение поля(key) -->> 'name'

// const names = animals.map(animal => animal.name);
// console.log(names);

// * Для каждого элемента коллекции (animal) проверим поле isActive.
// * Если оно true, то текущий элемент (animal) будет записан в результирующий массив.

// const activeAnimals = animals.filter(animal => animal.isActive);
// console.log(activeAnimals);

// * Для каждого элемента коллекции (user) проверим поле isActive.
// * Если оно false, то текущий элемент (user) будет записан в результирующий массив.

// const inActiveAnimals = animals.filter(animal => !animal.isActive);
// console.log(inActiveAnimals);

// * Для каждого элемента коллекции (animal) проверим поле id.
// * Если оно совпадает с искомым идентификатором, то find прекратит
// * выполнение и вернет текущий элемент (animal) как результат выполнения

// const animal = animals.find(animal => animal.id === '004');
// console.log(animal);

// * Используем find чтобы пройти по базе данных users и найти пользователя по идентификатору id.
// * Идентификаторы всегда уникальны.

// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// * Создадим функцию которая будет возвращать нам пользователя по id

// const getUserById = (arr, id) => arr.find(user => user.id === id);

// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));

// Array.prototype.reduce()
// array.reduce(сallback[(previousValue, currentItem, index, array)], initialValue)

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// * Пройдем по всем элементам коллекции и добавим значения свойства tags
// * к аккумулятору, начальное значение которого укажем пустым массивом [].
// * На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// * Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// * для сбора тегов из коллекции.

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// ===========================================

// ! (--- *Reduce --)
// ? Декларативный подход к функциональному программированию

/*
 * Имеется массив с пользователями(users) с полным списком описания каждого (имя,фамилия,возраст и.т.п)
 * Необходимо создать новый массив всех пользователей (имя, плюс пробел и фамилия), но только
 * если им за двадцать и их полное имя(fullName) составляет 10 и более символов.
 */

const users = [
  {
    firstName: "Bob",
    lastName: "Doe",
    age: 37
  },
  {
    firstName: "Rita",
    lastName: "Beaches",
    age: 21
  },
  {
    firstName: "Rick",
    lastName: "Fish",
    age: 28
  },
  {
    firstName: "Betty",
    lastName: "Bird",
    age: 44
  },
  {
    firstName: "Joe",
    lastName: "Grover",
    age: 22
  },
  {
    firstName: "Jill",
    lastName: "Pill",
    age: 19
  },
  {
    firstName: "Sam",
    lastName: "Ganibal",
    age: 22
  }
];

//  * Попробуем сперва сделать через цепочку методов массива:

const fiftySomethingsLongFullNames = users
  // Сначала мы фильтруем только тех пользователей, которым за двадцать:
  .filter(user => user.age >= 20 && user.age < 30)
  // Записываем контакт имени и фамилии:
  .map(user => `${user.firstName}_ ${user.lastName}`)
  // Теперь удалите всех у кого (ФИО), содержит не более 9 символов
  .filter(fullName => fullName.length >= 10);

// console.log(fiftySomethingsLongFullNames);

// * Разбиваем код на более читабельный, и возможностью протестировать
// * каждую из этих функций в отдельности.

const isInTwenties = user => user.age >= 20 && user.age < 30;
const makeFullName = user => `${user.firstName}_ ${user.lastName}`;
const isAtLeastTenChars = fullName => fullName.length >= 10;

const twentySomethingsLongFullNames = users
  .filter(isInTwenties)
  .map(makeFullName)
  .filter(isAtLeastTenChars);

// console.log(twentySomethingsLongFullNames);

// * Оптимизируем наш код уменьшив к-во итераций(циклов) в три раза и
// * увеличив производительность,сделав все инструкции за один проход по массиву
// * Используем все те же три именованнные функции написанные ранее(выше в коде)

const thirtySomethingsLongFullNames = users.reduce(
  // Первый аргумент нашей функции редуктора(reducer) / callback-функции :
  (acc, user) => {
    const fullName = makeFullName(user);
    if (isInTwenties(user) && isAtLeastTenChars(fullName)) {
      acc.push(fullName);
    }
    // Всегда возвращайте аккумулятор 'acc' (для возможности следующей итерации)
    return acc;
  },
  // Второй аргумент (необязательный) и поэтому ставим начальное значение []
  []
);

// console.log(thirtySomethingsLongFullNames);

// * Уменьшаем наш массив объектов(выше записаный) до простой строки;
// * Необходимо получить строку всех пользователей(users),независимо от возроста и длины (fullName)
// * с полным именем каждого человека в новой строке.

/*  Naive implementation, используем метод (---* .forEach--)  */
let everyonesName = "";

users.forEach(user => {
  everyonesName += `${user.firstName} ${user.lastName}\n`;
});

// console.log(everyonesName);

/*  Better implementation,  используем метод (---* .map--)*/
const _everyonesName = users
  .map(user => `${user.firstName} ${user.lastName}\n`)
  .join("");

// console.log(_everyonesName);

/*  Best implementation, используем метод (---* .reduce--)*/
const $everyonesName = users.reduce(
  (acc, user) => `${acc}${user.firstName} ${user.lastName}\n`,
  ""
);

// console.log($everyonesName);

// ================================================================

const fruits = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
  { name: "grapes", quantity: 7 },
  { name: "bananas", quantity: 9 }
];

// const thisShitIsBananas = fruits.reduce((acc, fruit) => {
//     return acc;
// });
// ! Object { name: "apples", quantity: 2 } -->> вернулся первый элемент из массива;

// const thisShitIsBananas = fruits.reduce((acc, fruit) => {
//   if (fruit.name === 'bananas') return fruit;
//   return acc;
// });

// ! Object { name: "bananas", quantity: 0 } -->> если хотим изменить 'acc' и просто вернуть нужный элемент;

// console.log(thisShitIsBananas);

// * Создадим с помощью метода (---* reduce--) многоразовую функцию(без 'hardcoding'),
// * по факту анологичную до метода (---*find--):

//  arrayFind принимает массив и возвращает функцию
//  возвращаемая функция принимает функцию поиска
const arrayFind = arr => fn =>
  arr.reduce((acc, item, index) => {
    //  Передаем функцию поиска item и индекс
    if (fn(item, index)) return item;
    return acc;
  });
//  Создаем функцию поиска только для наших фруктов
const fruitFinder = arrayFind(fruits);
//  Теперь мы можем передать простую функцию поиска в fruitFinder
//  Это на то, что `fn` ссылается выше:
const thisShitIsBananas = fruitFinder(fruit => fruit.name === "bananas");

// Это грубая версия Array.find- фактическая версия вернет 'первый элемент в массиве',
// который соответствует, тогда как то , что мы только что записали там,
// фактически вернет 'последний элемент в массиве',
// который соответствует;
// (так в нашем случае если их было больше одного 'bananas', -->>> возвращается последний).

// console.log(thisShitIsBananas);

const _users = [
  {
    name: "John",
    age: 15,
    salary: 3000
  },
  {
    name: "Tom",
    age: 25,
    salary: 2000
  },
  {
    name: "Ann",
    age: 35,
    salary: 2500
  },
  {
    name: "Alex",
    age: 28,
    salary: 6000
  }
];

/*
 * Вывести пользователя с его данными у которого сумма зарплаты самая максимальная.
 */

const getUserWithMaxSalary = _users => {
  return _users.reduce((userWithMaxSalary, user) => {
    if (userWithMaxSalary.salary < user.salary) {
      return user;
    }
    return userWithMaxSalary;
  });
};

// console.log(getUserWithMaxSalary(_users));

/*
 * Отсортировать возрастную категорию пользователей от меншого к большему значению (поле age)
 */
const sortByAge = users => [...users].sort((a, b) => a.age - b.age);
// console.log(sortByAge(users));

/*
 * Напишите функцию camelCase(str)б которая преобразует строку вида «my-short-string» в «myShortString»
 */

const camelCase = str => {
  // разбивает 'my-long-word' на массив ['my', 'long', 'word']
  return (
    str
      .split("-")
      // Переводит в верхний регистр первые буквы всех элементом массива
      // за исключением первого элемента
      .map((word, idx) =>
        idx === 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join("")
  );
};

// console.log(camelCase("my-short-string")); // myShortString

/*
* Напишите две разных функции:

* первая  filterRange(arr, a, b) принимает три аргумента 
* -->> массив arr, ищет в нём элементы между 'a' и 'b' возвращает  массив
* этих элементов и сортирует в порядке возростания;

* вторая _filterRange(arr, a) принимает два аргумента
* -->> массив arr, ищет в нем элементы которые больше чем (или равны) 'a'
* и сортирует в порядке убывания;
*/

const arr = [5, 131, 18, 141, 23, 12, 7, 125, 45];

const filterRange = (arr, a, b) =>
  arr.filter(num => a <= num && num <= b).sort((a, b) => a - b);

// console.log(filterRange(arr, 10, 45));

const _filterRange = (arr, a) =>
  arr.filter(num => num >= a).sort((a, b) => b - a);

// console.log(_filterRange(arr, 125));

/*
 * Отсортировать масисив элементов в порядке по убыванию без мутации оригинала.
 */

const array = [5, 2, 1, -10, 8];

const arrSortInOrderDescending = array => [...array].sort((a, b) => b - a);
// console.log(arrSortInOrderDescending(array));
// console.log(array);

/*
 * Отсортировать масисив элементов без мутации оригинала.
 */

const arrStringElem = ["HTML", "JavaScript", "CSS"];

// Императивный код...
// const sorted = [...arrStringElem];
// sorted.sort();

// console.log(sorted);
// console.log(arrStringElem);

// Декларативный код...
const sortArrElem = () => [...arrStringElem].sort();

// console.log(sortArrElem());
// console.log(arrStringElem);

function copySorted(arr) {
  return arr.slice().sort();
}

const sorted = copySorted(arrStringElem);

// console.log(sorted);
// console.log(arrStringElem);


/*
* Получить массив всех значений (поля 'num') без мутации оригинала при
* этом не должно быть повторяющихся элементов(только уникальные).
*/

const numbers = [
  { num: ["1", "2", "3"] },
  { num: ["3", "2", "1"] },
  { num: ["4", "5", "6"] },
  { num: ["5", "4", "6"] },
  { num: ["7", "8", "9"] },
  { num: ["10", "8", "9"] }
];

const getUniqueNumber = numbers => {
  return numbers
    .reduce((acc, { num }) => [...acc, ...num], [])
    .filter((elem, idx, numbers) => numbers.indexOf(elem) === idx);
};

console.log(getUniqueNumber(numbers));
console.log(numbers);
