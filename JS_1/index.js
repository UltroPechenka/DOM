'use strict';

//#1

const inputElement = document.getElementById('myInput'); 
const paragraphElement = document.getElementById('myParagraph'); 

inputElement.addEventListener('blur', function() {

    paragraphElement.textContent += inputElement.value;
});

