'use strict';
// ---------------------------------------------------------------
// let x = 3;

// while ( x * 3 < 10000) {
//     x = x * 3
//     console.log(x);
// }

// ---------------------------------------------------------------

// const products = {
//     name: 'John Dear',
//     price: 100,
//     quantity: 40,
// }

// const keys = Object.keys(products);
// console.log(keys);

// for (const key of  keys) {
//     console.log(`key: ${key}, value: ${products[key]}`);
// }

// ---------------------------------------------------------------

const scientist = [
    {
      first: "Albert",
      last: "Einstein",
      year: 1879,
      passed: 1955
    },
    {
      first: "Isaac",
      last: "Newton",
      year: 1643,
      passed: 1727
    },
    {
      first: "Galileo",
      last: "Galilei",
      year: 1564,
      passed: 1642
    },
    {
      first: "Marie",
      last: "Curie",
      year: 1867,
      passed: 1934
    },
    {
      first: "Johannes",
      last: "Kepler",
      year: 1571,
      passed: 1630
    },
    {
      first: "Nicolaus",
      last: "Copernicus",
      year: 1473,
      passed: 1543
    },
    {
      first: "Max",
      last: "Planck",
      year: 1858,
      passed: 1947
    },
    {
      first: "Katherine",
      last: "Blodgett",
      year: 1898,
      passed: 1979
    },
    {
      first: "Ada",
      last: "Lovelace",
      year: 1815,
      passed: 1852
    },
    {
      first: "Sarah E.",
      last: "Goode",
      year: 1855,
      passed: 1905
    },
    {
      first: "Lise",
      last: "Meitner",
      year: 1878,
      passed: 1968
    },
    {
      first: "Hanna",
      last: "Hammarström",
      year: 1829,
      passed: 1909
    }
  ];


  // 1) отримати масив вчених що народилися в 19 ст
  const findBorn = scientist.filter( elem =>elem.year > 1799 && elem.year < 1900);
//   console.log(findBorn);
  
  // 2) знайти суму років скільки прожили всі вченні
  const summYear = scientist.reduce
  ((acc, {passed, year}) => acc + (passed - year), 
  0
  );
//   console.log(summYear);

  // 3) Відсортувати вчених по алфавіту
  const alphabet = scientist.sort((a, b) => a.first > b.first ? 1 : -1);
//   console.log(alphabet);
  // 4) Відсортувати вчених по даті народження
  const years = scientist.sort((a, b) => a.year > b.year ? 1 : -1);
//   console.log(years);

  // 5) Відсортувати вчених по кількості прожитих років
  const findLive = scientist.sort(
      (a, b) => a.passed - a.year > b.passed - b.year ? -1 : 1
  );
//   console.table(findLive);

  // 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
  const deleteBorn = scientist.filter(
  elem => elem.year < 1399 || elem.year > 1599
    );
//   console.table(deleteBorn);


  // 7) Знайти вченого який народився найпізніше.
  const moreThen = scientist.sort((x, b) => (x.year > b.year ? -1 : 1));
//   console.log(moreThen[0]);


  // 8) Знайти рік народження Albert Einstein
  const AlbertBorn = scientist.find(
      elem => elem.first === 'Albert' && elem.last === 'Einstein'
  );
//   console.log(AlbertBorn.year);


  // 9) Знайти вчених прізвище яких починається на літеру С
  const lastC = scientist.filter(elem => elem.last[0] === 'C');
//   console.log(lastC);


// 10) Видалити з масива всіх вчених імя яких починається на A
const deleteA = scientist.filter(elem => elem.first[0] !== 'A');
// console.log(deleteA);

// -------------------------------------------------------------------------------

// Доступ к свойствам

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// console.log(hotel);

// ============================================

// Создание нового ключа в объекте

// hotel.address = '1, Beach ave.';
// hotel['manager'] = 'Chuck Norris';

// console.log(hotel);

// =============================================

// Изменение  значения у свойства

// hotel.manager = 'Motley Cry';

// console.log(hotel);

// ==============================================

// Удаление свойств

// delete hotel.address;

// console.log(hotel);

// ===============================================

// Обращение к несуществующему свойству(вернет)

// console.log(hotel.pool); // undefined

// ===============================================

// Короткие свойства

// let name = 'Bamble Bee';
// let stars = 7;

// const hotelNewStars = {
//   name,
//   stars,
//   capacity: 100,
// };

// console.log(hotelNewStars);

// ==================================================

// Вычисляемые свойства

// const key = 'person';
// const getKey = () => {
//   return 'age';
// };

// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// };

// console.log(object);

// ====================================================

// Доступ к объекту через 'this',
// с использованием метода объекта function():

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   showName() {
//     console.log(this.name);
//   },
//   changeCapacity(value) {
//     this.capacity = value;
//   },
// };

// hotel.showName(); // Resort Hotel

// hotel.changeCapacity(200);
// console.log(hotel.capacity); // 200

// -----------------------------------------------------------




// -------------------------------------------------------------------------------

// fetch('https://api.themoviedb.org/3/movie/popular?api_key=76ed63f80dba3e42bfe198c0806fa9ba&language=en-US&page=1')
// .then(result => result.json())
// .then(data => {
//   const {results} = data;
//   console.log('results :', results);
// })

// -----------------------------------------------------------------------------------

