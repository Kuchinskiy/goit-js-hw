'use strict';

/*
 * Напиши скрипт проверки количества товаров на складе.
 * Есть переменные total (количество товаров на складе)
 * и ordered (единиц товара в заказе).

 * Сравни эти значения и по результатам выведи:

 * Если в заказе указано число, превышающее количество товаров на складе, 
 * то выведи сообщение "На складе недостаточно твоаров!".
 * В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".

 * Проверь работоспособность кода с разными значениями переменной ordered, 
 * например 20, 80 и 130.
 */


const total = 100;
const ordered = 50;

if (total >= ordered) {
    console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
    console.log('На складе недостаточно твоваров!');
};

/*
 * -- В простых операциях присваивания конструкцию
 * -- if...else можем заменить на тернарный оператор.
 */

const total = 100;

const ordered = total >= 50 ? 'Заказ оформлен, с вами свяжется менеджер'
: 'На складе недостаточно твоваров!';

console.log(ordered);
