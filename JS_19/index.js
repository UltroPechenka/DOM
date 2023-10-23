"use strict"

const randomStringInput = document.getElementById('randomStringInput');
const generateRandomStringButton = document.getElementById('generateRandomStringButton');
generateRandomStringButton.addEventListener('click', () => {
    const randomString = Math.random().toString(36).substring(2, 10);
    randomStringInput.value = randomString;
});
