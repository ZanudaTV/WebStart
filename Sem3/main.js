// https://disk.yandex.ru/d/6VAN_3gLnscEYg дз
//
//     11:33
// https://learn.javascript.ru/ сайт для учебы
//
//     11:37 Ниже до пройти
// https://learn.javascript.ru/error-handling
//     https://learn.javascript.ru/async
//         https://learn.javascript.ru/modules
//             https://learn.javascript.ru/network
// теперь можно учить рекакт или вьюjs

// https: gb.ru/posts/kak-testirovat-api-ili-postman-dlya-chajnikov
// Тестирование API c postman: https://www.youtube.com/watch?v=zfrQtU8eCEo
// На степике: https://stepik.org/course/120679/info
// Еще инфо: https://academy.yandex.ru/handbook/python/article/potokovyj-vvodvyvod-rabota-s-tekstovymi-fajlami-json

// <?xml version="1.0" encoding="UTF-8"?>
// https://jsonformatter.org/xml-formatter
//     https://disk.yandex.ru/i/i3tcrj3vPxwwvg

// https://jsonformatter.org/json-parser
//     https://disk.yandex.ru/i/XMW2QlG2VjNkRA
//         Павел 10:43
// https://disk.yandex.ru/i/ehL6g0t_hCk8Xg

// Функция getMaxEvenElement принимает массив с целыми числами, необходимо
// реализовать функцию так, чтобы она возвращала значение большего элемента массива,
// который записан в четном индексе включая 0.

function getMaxEvenElement(arr) {
    let max = arr[0];
    for (let i = 2; i < arr.length; i += 2) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31


// Задача 5: перепишите код, используя конструкцию switch-case, запрашивая продукт через диалоговое окно.

// <script>
//     let product = "Бананы";
//
//     if (product == "Мандарины") {
//     alert('Мандарины стоят 100 руб/кг.');
// } else if (product == "Бананы") {
//     alert('Бананы и груши стоят 70 руб/кг.');
// } else if (product == "Груши") {
//     alert('Бананы и груши стоят 70 руб/кг.');
// } else {
//     alert('Нет такого продукта.');
// }
// </script>

// const product = 'Бананы';
// switch (product) {
//     case 'Мандарины':
//         alert('Мандарины стоят 100 руб/кг.');
//         break;
//     case 'Бананы':
//     case 'Груши':
//         alert('Бананы и груши стоят 70 руб/кг.');
//         break;
//     default:
//         alert('Нет такого продукта.');
// }
//


// const num1 = Number.parseInt(prompt("Введите первое число:"));
// const num2 = Number.parseInt(prompt("Введите второе число:"));
// alert(`Результат сложения чисел ${num1} и ${num2} равен ${num1 + num2}`);
// function sum(num1, num2) {
//     return num1 + num2;
// }
// const num3 = Number.parseFloat(prompt("Введите первое число:"));
// const num4 = Number.parseFloat(prompt("Введите второе число:"));
// alert(`Результат сложения чисел ${num3} и ${num4} равен ${sum(num3, num4).toFixed(2)}`);

// Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”
// и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
// - При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.
// - При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”.
// const answer = confirm('Вам хорошо живется?');
// if (answer) {
//     alert('Тогда мы идем к вам!');
// } else {
//     alert('Ну вы держитесь там!');
// }

