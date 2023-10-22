'use strict';

const numberInput = document.getElementById("numberInput");
    const increaseButton = document.getElementById("increaseButton");
    const decreaseButton = document.getElementById("decreaseButton");

  increaseButton.addEventListener("click", function() {

    const currentValue = parseInt(numberInput.value);

    if (!isNaN(currentValue) && currentValue >= 0) {

      numberInput.value = currentValue + 1;
    }
  });

  decreaseButton.addEventListener("click", function() {

    const currentValue = parseInt(numberInput.value);

    if (!isNaN(currentValue) && currentValue > 0) {

      numberInput.value = currentValue - 1;
    }
  });