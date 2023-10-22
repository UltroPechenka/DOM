'use strict';

function splitFullName() {
    var fullName = document.getElementById('fullName').value;
    var names = fullName.split(' ');
  
    document.getElementById('lastName').value = names[0];
    document.getElementById('firstName').value = names[1];
    document.getElementById('middleName').value = names[2];
  }
