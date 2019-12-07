'use strict';

const btn = document.querySelector('.cool-btn');
btn.addEventListener('click', () => {
    console.log('clicked');
});


const gameContainer = document.querySelector('.game');
const square = document.createElement('div');
const step = '20px';
const squarePosition = {
    x: 0,
    y: 0
}

square.style.width = '20px';
square.style.height = '20px';
square.style.background = 'purple';

gameContainer.appendChild(square);


const addMotionController = element => {
    document.addEventListener ('keydown', (evt) => {
        const keyCode = evt.keyCode;
        if (keyCode === 40) {
            squarePosition.y = squarePosition.y + 20;
            element.style.marginTop = `${squarePosition.y}px`;
        }
        if (keyCode === 38) {
            squarePosition.y = squarePosition.y - 20;
            element.style.marginTop = `${squarePosition.y}px`;
        }
        if (keyCode === 37) {
            squarePosition.x = squarePosition.x - 20;
            element.style.marginLeft = `${squarePosition.x}px`;
        }
        if (keyCode === 39) {
            squarePosition.x = squarePosition.x + 20;
            element.style.marginLeft = `${squarePosition.x}px`;
        }
    })
}

addMotionController(square);