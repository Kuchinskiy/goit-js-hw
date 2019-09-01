"use strict";

// class manager {
//     constructor(name, sales = 0) {
//         this.name = name;
//         this.sales = sales;
//     }
// }

// const mango = new manager('Mango', 5);
// console.log(mango);

// const poly = new manager('Poly', 10);
// console.log(poly);

// ====================================================================================

// const animals = ['Cat','Fish','Lemur','Dragon'];
// console.log(animals);

// for (let i = 0; i < animals.length; i++) {
//     animals[i] = 'Awesome ' + animals[i];
// }
// console.log(animals);

// animals[0] = (`Awesome ${animals[0]}`);
// animals[1] = (`Awesome ${animals[1]}`);
// animals[2] = (`Awesome ${animals[2]}`);
// animals[3] = (`Awesome ${animals[3]}`);

// console.log(animals);

// =====================================================================================

// const myCrazyObject = {
//     "name": "A ridiculous object",
//     "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3], "random animal": "Banana Shark"
//   };

// console.log(myCrazyObject["some array"][2].number);

// Объединить в один массив (массивы в масиве):

// const arr = [[1,5,6], [88,98,4]];
// const clone = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         const res = (arr[i][j]);
//         if (!clone.includes(res)) {
//             clone.push(res);
//         }
//     }

// };
// console.log(clone);

// const car = {
//     color: 'green',
//     doors: 5,
//     wheels: 4
// };

// // console.log(car);

// const bike = {
//     doors: 5,
//     wheels: 2,
//     speed:{
//      max: 270,
//      min: 0
//     }
// };

// const carBike = [{...car, ...bike}];

// const res = carBike.map(({speed}) => (speed.max > 130 ? true : false));

// console.log(res);

// PRACTICE(todo)

// const refs = {
//     form: document.querySelector('.form'),
//     taskContainer: document.querySelector('.taskContainer'),
// }

// const list = [{
//     task: 'default',
//     description: 'default',
//     id: Date.now(),
// }];
// class ToDo {
//     constructor(list) {
//         this.list = list;
//     }
//     showArr(){
//         console.log(this.list);
//     }

//     addTask(task, description) {
//         const addedNewTask = {
//             task,
//             description,
//             id: Date.now()
//         };
//         this.list.push(addedNewTask);
//         console.log(addedNewTask);
//         // console.log(task);
//         // console.log(description);
//         refs.form.reset();
//         return addedNewTask;
//     }
// }

// const todo = new ToDo(list);

// todo.showArr();

// const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(event.target.elements);
//     const [task, description] = event.currentTarget.elements;
//     const taskValue = task.value;
//     // console.log(task);
//     // console.log(description);
//     const todoList = todo.addTask(taskValue, description.value);
//     // console.log(todoList);

//     const newList = `<ul class="list">
//     <h2 class="task">${todoList.task}
//         <p class="description">${todoList.description}
//         </p>
//     </h2>
// </ul>`;
// refs.taskContainer.insertAdjacentHTML('afterbegin', newList)
// }

// refs.form.addEventListener('submit', handleSubmit);

// // создаем fn которая создает elements :

// const drawHtml = () => {
//     tasks.map(task =>`<ul class="list">
//     <h2 class="task">${todoList.task}
//         <p class="description">${todoList.description}
//         </p>
//     </h2>
// </ul>`);
// }

// refs.form.addEventListener('submit', handleSubmit);

// const renderList = item => {
//     const renderHTML = drawHtml(item);

//     refs.taskContainer.insertAdjacentHTML('afterbegin', renderHTML);
// };

// console.log(todo.list);

// =========================================================================

// const refs = {
//     info: document.querySelector('.info'),
//     box: document.querySelector('.box'),
//     color: document.querySelector('.color'),
//     seconds: document.querySelector('.seconds'),
//     minutes: document.querySelector('.minutes'),
//     hours: document.querySelector('.hours'),
// };

// refs.info.onchange = function(evt) {
//     console.log(evt.target.value);
//     refs.box.style.width = evt.target.value + 'px';
// };

// ==========================================================================
// CLOCK=============CLOCK=============CLOCK=================CLOCK======CLOCK
// setInterval(() => {
//     const getSeconds = new Date().getSeconds();
//     const getMinutes = new Date().getMinutes();
//     const getHours = new Date().getHours();

// refs.seconds.style.transform = `rotate(${getSeconds}deg)`;

//     const handleSeconds = getSeconds * 6 + 90;
//     const handleMinutes = getMinutes * 6 + 90;
//     const handleHours = getHours * 30 + 90;

//     refs.seconds.style.transform = `rotate(${handleSeconds}deg)`;
//     refs.minutes.style.transform = `rotate(${handleMinutes}deg)`;
//     refs.hours.style.transform = `rotate(${handleHours}deg)`;

// }, 1000);

// ==========================================================================

// let x = 3;

// while ( x * 3 < 10000) {
//     x = x * 3
//     console.log(x);
// }

// for (let x = 2; x < 10000; x = x * 2) {
//         console.log(x);
//     }
// ============================================================================

// const galleryItems = [
//   {
//     preview: "img/preview-1.jpg",
//     fullview: "img/fullview-1.jpg",
//     alt: "alt text 1"
//   },
//   {
//     preview: "img/preview-2.jpg",
//     fullview: "img/fullview-2.jpg",
//     alt: "alt text 2"
//   },
//   {
//     preview: "img/preview-3.jpg",
//     fullview: "img/fullview-3.jpg",
//     alt: "alt text 3"
//   },
//   {
//     preview: "img/preview-4.jpg",
//     fullview: "img/fullview-4.jpg",
//     alt: "alt text 4"
//   },
//   {
//     preview: "img/preview-5.jpg",
//     fullview: "img/fullview-5.jpg",
//     alt: "alt text 5"
//   },
//   {
//     preview: "img/preview-6.jpg",
//     fullview: "img/fullview-6.jpg",
//     alt: "alt text 6"
//   }
// ];

// const refs = {
//   imageGallery: document.querySelector(".image-gallery"),
//   preview: document.querySelector(".preview"),
//   fullview: document.querySelector(".fullview")
// };

// // console.log('refs.fullview');

// refs.fullview.insertAdjacentHTML(
//   "afterbegin",
//   `<img src='${galleryItems[0].fullview}'/>`
// );

// const result = galleryItems
//   .map(
//     ({ preview, fullview, alt }) =>
//       `<li><img src='${preview}' data-fullview='${fullview}' alt='${alt}'></li>`
//   )
//   .join("");

// console.log(result);

// refs.preview.insertAdjacentHTML("beforeend", result);

// const imagePreview = event => {
//   console.log(event.target);
//   console.log(event.target.dataset.fullview);
//   refs.fullview.innerHTML = `<img src='${event.target.dataset.fullview}'/>`;
// };

// refs.preview.addEventListener("click", imagePreview);
// ============================================================================================


