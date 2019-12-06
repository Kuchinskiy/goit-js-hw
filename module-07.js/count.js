'use strict';

/*
* Есть кнопка с классом button, текст который отображается к-во раз которое
* по не кликнули, обновляется при каждом клике.
*/

let clickCount = 0;

document.querySelector('.button').addEventListener('click', (event) => {
    const element = event.currentTarget;

    clickCount += 1;
    element.textContent = clickCount;
});