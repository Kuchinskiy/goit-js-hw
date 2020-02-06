"use strict";

/*
 * Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
 * подставляет его текущее значение в span#name-output. Если инпут пустой,
 * в спане должна отображаться строка 'незнакомец'.
 */

// Вариант-1
const nameInput = document.querySelector("#name-input");
const currentString = document.querySelector("#name-output");

nameInput.addEventListener("input", e => {
  currentString.textContent = e.currentTarget.value;
  if (currentString === "") {
    currentString === "незнакомец";
  }
});

// Вариант-2
const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", inputData);

function inputData(event) {
  span.textContent = event.currentTarget.value;
  if (span.textContent === "") {
    span.textContent = "незнакомец";
  }
}

// Вариант-3(G.G)
const refs = {
  userInput: document.querySelector("#name-input"),
  output: document.querySelector("#name-output")
};

refs.userInput.addEventListener("input", () => {
  refs.output.textContent = refs.userInput.value || "незнакомец";
});
