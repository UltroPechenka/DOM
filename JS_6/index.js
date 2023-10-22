'use strict';

function capitalizeFIO() {
    var input = document.getElementById('fioInput');
    var fio = input.value.trim().toLowerCase().split(' ');
    
    for (var i = 0; i < fio.length; i++) {
      fio[i] = fio[i].charAt(0).toUpperCase() + fio[i].slice(1);
    }
    
    input.value = fio.join(' ');
  }