"use strict";

/*
* Пользователь может оформить доставку товара к себе в страну,
* указав ее при посещении страницы в prompt.
* Учти, что пользователь может ввести имя страны не только буквами
* нижнего регистра, а к примеру 'кИтАЙ'.

* Название страны должно начинатся с заглавной буквы,
* а остальные символы записаныe строчными.
* Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
* Формат сообщения:  'Доставка в [страна] будет стоить [цена] кредитов';

* Но доставка есть не везде, если указанной страны нет в списке,
* то выводи в сообщение: 'В вашу страну доставка не доступна';

* Ниже приведен список стран и стоимость доставки:

*  -->>  Китай - 100 кредитов
*  -->>  Чили - 250 кредитов
*  -->>  Австралия - 170 кредитов
*  -->>  Индия - 80 кредитов
*  -->>  Ямайка - 120 кредитов

*  P.S Обязательно используй switch.
*/

// const deliveryInChina = "китай";
// const deliveryInChili = "чили";
// const deliveryInAustralia = "австралия";
// const deliveryInIndia = "индия";
// const deliveryInJamaica = "ямайка";

// const costInChina = 100;
// const costInChili = 250;
// const costInAustralia = 170;
// const costInIndia = 80;
// const costInJamaica = 120;

// const deliveryCountry = prompt("Укажите в какую страну будет доставка!");

// switch (deliveryCountry) {
//   case deliveryInChina:
//     alert(
//       `Доставка в ${deliveryInChina[0].toUpperCase() +
//         deliveryInChina.slice(1)} будет стоить ${costInChina} кредитов.`
//     );
//     break;
//   case deliveryInChili:
//     alert(
//       `Доставка в ${deliveryInChili[0].toUpperCase() +
//         deliveryInChili.slice(1)} будет стоить ${costInChili} кредитов.`
//     );
//     break;
//   case deliveryInAustralia:
//     alert(
//       `Доставка в ${deliveryInAustralia[0].toUpperCase() +
//         deliveryInAustralia.slice(1)} будет стоить ${costInAustralia} кредитов.`
//     );
//     break;
//   case deliveryInIndia:
//     alert(
//       `Доставка в ${deliveryInIndia[0].toUpperCase() +
//         deliveryInIndia.slice(1)} будет стоить ${costInIndia} кредитов.`
//     );
//     break;
//   case deliveryInJamaica:
//     alert(
//       `Доставка в ${deliveryInJamaica[0].toUpperCase() +
//         deliveryInJamaica.slice(1)} будет стоить ${costInJamaica} кредитов.`
//     );
//     break;
//   default:
//     alert(`В вашей стране доставка недоступна!`);
// };

// ------------------------------------------------------------------------------------------

// Более рациональный подход в написании инструкции

// const PRINT_COUNTRY = "Укажите в какую страну будет доставка";
// const CANCEL = "Отменено пользователем!";
// const NOT_DELIVERY = "В вашей стране доставка не доступна";

// let message = prompt(PRINT_COUNTRY);
// let price = 0;

// if (message === null) {
//   message = CANCEL;
// } else {
//   const countryName = message[0].toUpperCase() + message.slice(1).toLowerCase();

//   switch (countryName) {
//     case "Китай":
//       price = 100;
//       break;

//     case "Чили":
//       price = 250;
//       break;

//     case "Австралия":
//       price = 170;
//       break;

//     case "Индия":
//       price = 80;
//       break;
//     case "Ямайка":
//       price = 120;
//       break;
//     default:
//       message = NOT_DELIVERY;
//   }
// }

// if (prise > 0) {
//   message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
// }
// alert(message);
