"use strict";


// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

const inventory = {
  items: ["Монорельса", "Фильтр"],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  }
};

const invokeInventoryOperation = (itemName, action) => {
  action(itemName);
};


// Вызовы функции для проверки:


// Adding Аптечка to inventory
invokeInventoryOperation("Аптечка", inventory.add.bind(inventory));
// Invoking action on Аптечка
console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']


// Removing Фильтр from inventory
invokeInventoryOperation("Фильтр", inventory.remove.bind(inventory));
// Invoking action on Фильтр
console.log(inventory.items); // ['Монорельса', 'Аптечка']
