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

const deliveryInChina = "китай";
const deliveryInChili = "чили";
const deliveryInAustralia = "австралия";
const deliveryInIndia = "индия";
const deliveryInJamaica = "ямайка";

const costInChina = 100;
const costInChili = 250;
const costInAustralia = 170;
const costInIndia = 80;
const costInJamaica = 120;

const deliveryCountry = prompt("Укажите в какую страну будет доставка!");

// if (deliveryCountry === null) {
//   console.log("Надеемся следующий раз,Вы сделаете выбор!");
// } // как вариант, если клиент нажмет Cancel

switch (deliveryCountry) {
  case deliveryInChina:
    alert(
      `Доставка в ${deliveryInChina[0].toUpperCase() +
        deliveryInChina.slice(1)} будет стоить ${costInChina} кредитов.`
    );
    break;
  case deliveryInChili:
    alert(
      `Доставка в ${deliveryInChili[0].toUpperCase() +
        deliveryInChili.slice(1)} будет стоить ${costInChili} кредитов.`
    );
    break;
  case deliveryInAustralia:
    alert(
      `Доставка в ${deliveryInAustralia[0].toUpperCase() +
        deliveryInAustralia.slice(1)} будет стоить ${costInAustralia} кредитов.`
    );
    break;
  case deliveryInIndia:
    alert(
      `Доставка в ${deliveryInIndia[0].toUpperCase() +
        deliveryInIndia.slice(1)} будет стоить ${costInIndia} кредитов.`
    );
    break;
  case deliveryInJamaica:
    alert(
      `Доставка в ${deliveryInJamaica[0].toUpperCase() +
        deliveryInJamaica.slice(1)} будет стоить ${costInJamaica} кредитов.`
    );
    break;
  default:
    alert(`В вашей стране доставка недоступна!`);
};
