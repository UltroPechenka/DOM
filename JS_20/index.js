'use strict';

function shuffleString() {

    const inputElement = document.getElementById('inputString');
    const inputValue = inputElement.value;

    const characters = inputValue.split('');

    for (let i = characters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        const temp = characters[i];
        characters[i] = characters[j];
        characters[j] = temp;
    }

    const shuffledString = characters.join('');

    inputElement.value = shuffledString;
}