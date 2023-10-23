"use strict"

const fahrenheitInput = document.getElementById('fahrenheitInput');
const convertButton = document.getElementById('convertButton');
const resultParagraph21 = document.getElementById('resultParagraph21');
convertButton.addEventListener('click', () => {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * (5 / 9);
        resultParagraph21.textContent = 'Температура в °C: ' + celsius.toFixed(2);
    }
});