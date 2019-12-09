"use strict";

/*
 * Метод elem.addEventListener()
 */
// const singleBtn = document.querySelector('#single');

// Для обработчика события можно (и желательно)
// использовать отдельную функцию, ссылку на которую
// передаем вторым аргументом в addEventListener
// const handleClick = () => alert('CLICK!');

// singleBtn.addEventListener('click', handleClick);

//========================================================
// Можно вешать более одного обработчика на элемент,
// даже на одно и тоже событие
// const multiBtn = document.querySelector('#multiple');

// const firstCallback = () => alert('First callback!');
// const secondCallback = () => alert('Second callback!');
// const thirdCallback = () => alert('Third callback!');

// multiBtn.addEventListener('click', firstCallback);
// multiBtn.addEventListener('click', secondCallback);
// multiBtn.addEventListener('click', thirdCallback);

/*
 *  Метод elem.removeEventListener()
 */
// const addBtn = document.querySelector('button[data-action="add"]');
// const removeBtn = document.querySelector('button[data-action="remove"]');
// const btn = document.querySelector("#btn");

// const handleClick = () => {
//   alert("CLICK EVENT LISTENER ALERT!");
// };

// addBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
// });

// removeBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
// });

/*
* Объект события
*/
// const btn = document.querySelector("#btn");

// event - это и есть обьект события который автоматически 
// передается первым аргументом, мы можем называть его как угодно, 
// хоть qwerty, но чаще всего он называется или e, evt или event

// const handleClick = event => {
//   console.log("event: ", event); //откройте консоль чтобы увидеть весь объект целиком

//   console.log("event type: ", event.type); // event type:  click

  // будет window, так как мы используем стрелочную функцию, 
  // которая использует внешний контекст 
  // Если использовать обычную функцию то this будет самим элементом 
  // button и равен currentTarget
//   console.log("this: ", this); 
//   console.log("target: ", event.target); // <button id="btn">CLICK ME!</button>
// };

// btn.addEventListener("click", handleClick);


/*
 * Находим нам необходимый DOM-узел через метод 'elem.querySelector(selector)',
 * вешаем на него слушателя(обработчик) 'element.addEventListener(event, handler[, phase])'
 * для этого вызываем call-back функцию.
 */
// const btn = document.querySelector('.cool-btn');
// btn.addEventListener('click', () => {
//     console.log('clicked');
// });



// Допольнительна практика на занятии

// const gameContainer = document.querySelector('.game');
// const square = document.createElement('div');
// const step = '20px';
// const squarePosition = {
//     x: 0,
//     y: 0
// }

// square.style.width = '20px';
// square.style.height = '20px';
// square.style.background = 'purple';

// gameContainer.appendChild(square);

// const addMotionController = element => {
//     document.addEventListener ('keydown', (evt) => {
//         const keyCode = evt.keyCode;
//         if (keyCode === 40) {
//             squarePosition.y = squarePosition.y + 20;
//             element.style.marginTop = `${squarePosition.y}px`;
//         }
//         if (keyCode === 38) {
//             squarePosition.y = squarePosition.y - 20;
//             element.style.marginTop = `${squarePosition.y}px`;
//         }
//         if (keyCode === 37) {
//             squarePosition.x = squarePosition.x - 20;
//             element.style.marginLeft = `${squarePosition.x}px`;
//         }
//         if (keyCode === 39) {
//             squarePosition.x = squarePosition.x + 20;
//             element.style.marginLeft = `${squarePosition.x}px`;
//         }
//     })
// }

// addMotionController(square);



//? ----*smallPracticeAnimation----?!

// function myMove() {
//     const elem = document.getElementById("persone");
//     let pos = 0;
//     let id = setInterval(frame, 5);
//     function frame() {
//       if (pos === 230) {
//         clearInterval(id);
//       } else {
//         pos++;
//         elem.style.top = pos + 'px';
//         elem.style.left = pos + 'px';
//       }
//     }
//   }

// setTimeout(myMove);
