"use strict"

const factorialInput = document.getElementById('factorialInput');
const calculateFactorialButton = document.getElementById('calculateFactorialButton');
const resultParagraph22 = document.getElementById('resultParagraph22');
const factorial = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};
calculateFactorialButton.addEventListener('click', () => {
    const n = parseInt(factorialInput.value, 10);
    if (!isNaN(n) && n >= 0) {
        const fact = factorial(n);
        resultParagraph22.textContent = 'Факториал: ' + fact;
    } else {
        resultParagraph22.textContent = 'Пожалуйста, введите неотрицательное число';
    }
});