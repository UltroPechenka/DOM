'use strict';

function calculateAverage() {
    const numbersInput = document.getElementById("numbersInput");
    const inputValues = numbersInput.value;
    
    const numbersArray = inputValues.split(",");
    
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      sum += Number(numbersArray[i]);
    }
    
    const average = sum / numbersArray.length;
       
    const numberAverage = document.getElementById("myParagraph");
    numberAverage.textContent = "Среднее арифметическое: " + average;
  }
  
  const numbersInput = document.getElementById("numbersInput");
  numbersInput.addEventListener("blur", calculateAverage);

 