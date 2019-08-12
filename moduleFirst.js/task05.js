"use strict";

const deliveryCountry = prompt("Укажите в какую страну будет доставка!");
// console.log(deliveryCountry);

const countryChina = "Китай";
const countryChili = "Чили";
const countryAustralia = "Австралия";
const countryIndia = "Индия";
const countryJamaica = "Ямайка";

const priceChina = "100 кредитов";
const priceChili = "250 кредитов";
const priceAustralia = "170 кредитов";
const priceIndia = "80 кредитов";
const priceJamaica = "120 кредитов";

if (deliveryCountry === null) {
  console.log("В какую страну сделать доставку!");
} else {
//   deliveryCountry = deliveryCountry[0].toUpperCase() + deliveryCountry.slice(1).toLowerCase();

  switch (deliveryCountry.toLowerCase()) {
    case countryChina.toLowerCase():
      alert(`Доставка в ${countryChina} будет стоить ${priceChina}`);
      break;
    case countryChili.toLowerCase():
      alert(`Доставка в ${countryChili} будет стоить ${priceChili}`);
      break;
    case countryAustralia.toLowerCase():
      alert(`Доставка в ${countryAustralia} будет стоить ${priceAustralia}`);
      break;
    case countryIndia.toLowerCase():
      alert(`Доставка в ${countryIndia} будет стоить ${priceIndia}`);
      break;
    case countryJamaica.toLowerCase():
      alert(`Доставка в ${countryJamaica} будет стоить ${priceJamaica}`);
      break;
    case null:
      alert(`Выбор за вами!`);
      break;
    default:
      alert(`В вашей стране доставка недоступна!`);
  }
}
