"use strict";

let deliveryCountry = prompt("Укажите в какую страну будет доставка!");
// console.log(deliveryCountry);

const countryChina = "китай";
const countryChili = "чили";
const countryAustralia = "австралия";
const countryIndia = "индия";
const countryJamaica = "ямайка";

const priceChina = 100;
const priceChili = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

if (deliveryCountry === null) {
  console.log("Выберите страну!");
} else {
  deliveryCountry = deliveryCountry.toLowerCase();

  switch (deliveryCountry) {
    case countryChina:
      alert(
        `Доставка в ${countryChina[0].toUpperCase() +
          countryChina.slice(1)} будет стоить ${priceChina} кредитов.`
      );
      break;
    case countryChili:
      alert(
        `Доставка в ${countryChili[0].toUpperCase() +
          countryChili.slice(1)} будет стоить ${priceChili} кредитов.`
      );
      break;
    case countryAustralia:
      alert(
        `Доставка в ${countryAustralia[0].toUpperCase() +
          countryAustralia.slice(1)} будет стоить ${priceAustralia} кредитов.`
      );
      break;
    case countryIndia:
      alert(
        `Доставка в ${countryIndia[0].toUpperCase() +
          countryIndia.slice(1)} будет стоить ${priceIndia} кредитов.`
      );
      break;
    case countryJamaica:
      alert(
        `Доставка в ${countryJamaica[0].toUpperCase() +
          countryJamaica.slice(1)} будет стоить ${priceJamaica} кредитов.`
      );
      break;
    default:
      alert(`В вашей стране доставка недоступна!`);
  }
}
