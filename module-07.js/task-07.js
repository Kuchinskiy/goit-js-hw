"use strict";

/*
 * Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
 * и изменяет инлайн-стиль span#text обновляя свойство font-size.
 * В результате при перетаскивании ползунка будет меняться размер текста.
 */

const fontSizeInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeInput.addEventListener("input", (e) => {
  let sizePX = e.currentTarget.value;
  textSpan.style.fontSize = `${sizePX}px`;
});

