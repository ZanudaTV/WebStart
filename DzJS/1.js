const tempC = Number.parseFloat(prompt('Введите температуру по Цельсию'));
function tempForengate(temperature) {
    return (9/5)* temperature + 32;
} 
const tempF = tempForengate(tempC).toFixed(1);
alert(`Сейчас по Цельсию ${tempC} градус в Форенгейтах это будет ${tempF}`);
