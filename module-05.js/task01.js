"use strict";

/*
* Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. 
* В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль 
* значения полей login и email объекта который его вызвал.
*/

const Account = function (login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  console.log(`login : ${this.login}, email : ${this.email}`);
};


// !Используем 'class' для задания конструктора вместе с прототипом
// Под капотом 'class' - это функция-конструктор с прототипом

// class Account {
//   constructor(login, email) {
//     this.login = login;
//     this.email = email;
//   }

//   getInfo() {
//     console.log(`login: ${this.login}, email: ${this.email}`);
//   }
// };

console.log(Account.prototype.getInfo); // function

const mango = new Account("Mangozedog", "mango@dog.woof");
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account("Poly", "poly@mail.com");
poly.getInfo(); // Login: Poly, Email: poly@mail.com

const ajax = new Account('Asdqwerty', 'ajax@SpeechGrammarList.com');
ajax.getInfo(); // Login: Asdqwerty, Email: ajax@SpeechGrammarList.com
