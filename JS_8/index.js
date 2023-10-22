'use strict';

function formatDate() {
    const input = document.getElementById("dateInput");
    const date = input.value;
    const parts = date.split(".");
    const formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
    input.value = formattedDate;
  }

