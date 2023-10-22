'use strict';

document.getElementById("numberInput").addEventListener("blur", function() {
    var number = this.value;
    var sum = 0;

    for (var i = 0; i < number.length; i++) {
      sum += parseInt(number[i]);
    }
    
    document.getElementById("sum").textContent = "Сумма цифр: " + sum;
  });
