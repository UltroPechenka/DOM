'use strict';

const numberInput = document.getElementById("numberInput");

numberInput.addEventListener("blur", function() {

    const numberString = numberInput.value.toString();

    if (numberString.includes("3")) {
        document.getElementById("result").textContent = "Число содержит цифру 3";
      } else {
        document.getElementById("result").textContent = "Число не содержит цифру 3";
      }
});
