'use strict';

const ADMIN_PASSWORD ='qwerty';
let massage;

const code = prompt('Введите пароль');

if (code === null) {
    massage = 'Отменено пользователем!';
} else if (code === ADMIN_PASSWORD) {
    massage = 'Добро пожаловать!';
} else {
    massage = 'Доступ запрещен, неверный пароль!';
}

alert(massage);