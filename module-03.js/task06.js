"use strict";

/*
Напиши функцию calculateTotalPrice(arr, productName), 
которая получает массив объектов и имя продукта (значение свойства name). 
Возвращает общую стоимость продукта (цена * количество).
*/

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

// Вариант-1
const calculateTotalPrice = (products, productNameValue) => {
  for (const product of products) {
    if (product.name === productNameValue) {
      return product.price * product.quantity;
    }
  }
};


// Вариант-2(G.G)
const calculateTotalPrice = (products, productNameValue) => {
  let total = 0;
  for (const product of products) {
    if (product.name === productNameValue) {
      total = product.price * product.quantity;
    }
  }
  return total;
};


// Вызовы функции для проверки:

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Сканер")); // 8100

console.log(calculateTotalPrice(products, "Дроид")); // 2800

console.log(calculateTotalPrice(products, "Захват")); // 2400
