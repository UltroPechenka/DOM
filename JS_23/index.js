"use strict"

const aInput = document.getElementById('aInput');
const bInput = document.getElementById('bInput');
const cInput = document.getElementById('cInput');
const calculateRootsButton = document.getElementById('calculateRootsButton');
const resultParagraph23 = document.getElementById('resultParagraph23');
calculateRootsButton.addEventListener('click', () => {
    const a = parseFloat(aInput.value);
    const b = parseFloat(bInput.value);
    const c = parseFloat(cInput.value);
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        const discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            resultParagraph23.textContent = 'Корни уравнения: ' + root1 + ', ' + root2;
        } else if (discriminant === 0) {
            const root = -b / (2 * a);
            resultParagraph23.textContent = 'Уравнение имеет один корень: ' + root;
        } else {
            resultParagraph23.textContent = 'Уравнение не имеет действительных корней';
        }
    } else {
        resultParagraph23.textContent = 'Пожалуйста, введите числа во все инпуты';
    }
});