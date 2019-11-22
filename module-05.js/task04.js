"use strict";

/*
* Напиши класс StringBuilder. На вход он получает один параметр - строку,
* которую записывает в свойство _value.

* Добавь классу следующий функционал:

* -->>  Геттер value - возвращает текущее значение поля _value
* -->>  Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
* -->>  Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало _value
* -->>  Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }
// возвращает текущее значение поля _value
  get value () {
    return this._value;
  }
// получает парметр str (строку) и добавляет ее в 'конец' _value
  append (str) {
    this._value = this._value + str;
  }
// получает парметр str (строку) и добавляет ее в 'начало' _value
  prepend (str) {
    this._value = str + this._value;
  }
// получает парметр str (строку) и добавляет ее в 'начало' и 'конец'  _value
  pad (str) {
    this._value = str + this._value + str;
  }
};

const builder = new StringBuilder(".");

builder.append('^'); // <<-- один 'параметр' который получает на входе как строку;
// при вызове принимает его как 'аргумент' записывая его в свойство через " this._ " 
console.log(builder.value); // '.^'

builder.prepend('^'); 
console.log(builder.value); // '^.^'

builder.pad('='); 
console.log(builder.value); // '=^.^='
