"use strict";

/*
* Напиши скрипт, который бы при потере фокуса на инпуте, 
* проверял его содержимое на правильное количество символов.

* Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
* Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

* Для добавления стилей, используй CSS-классы valid и invalid.
*/

const inputById = document.querySelector("#validation-input");

inputById.addEventListener("blur", () => {
  const setLengthCharacters = Number(inputById.dataset.length);
  let EnteredQuantity = inputById.value.length;

  if (setLengthCharacters === EnteredQuantity) {
    inputById.classList.add("valid");
    inputById.classList.remove("invalid");
  } else {
    inputById.classList.add("invalid");
  }
});

