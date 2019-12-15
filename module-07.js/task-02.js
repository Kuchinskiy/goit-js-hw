"use strict";

/*
 * В JS есть массив строк.
 * Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
 * после чего вставит все li за одну операцию в список ul.ingredients.
 * Для создания DOM-узлов используй document.createElement().
 */

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const selectById = document.querySelector("#ingredients");

const insertTags = textName => {
  const elem = document.createElement("li");
  elem.textContent = textName;

  return elem;
};

const createItem = arr => arr.map(elem => insertTags(elem));

const itemList = createItem(ingredients);
selectById.append(...itemList);
