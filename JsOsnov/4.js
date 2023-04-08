const num = Number.parseInt(prompt('Введите целое число '));
const hundreds = Math.trunc(num / 100) % 10;
const tens =Math.trunc(num / 10) % 10;
const units = num % 10;
console.log(`В числе ${num} сотен ${hundreds} десятков ${tens} единиц ${units}`)