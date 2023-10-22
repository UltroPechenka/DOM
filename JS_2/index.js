'use strict';

function calculateSum() {

    var input1 = Number(document.getElementById('input1').value);
    var input2 = Number(document.getElementById('input2').value);
    var input3 = Number(document.getElementById('input3').value);

    var sum = input1 + input2 + input3;

    document.getElementById('result').textContent = 'Сумма: ' + sum;
  }
  
