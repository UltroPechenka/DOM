'use strict';

const dateInput = document.getElementById("dateInput");

  dateInput.addEventListener("blur", function() {

    const inputDate = this.value;

    const dateParts = inputDate.split(".");
    
    const date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

    const dayOfWeek = date.getDay();

    const weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    const dayOfWeekName = weekdays[dayOfWeek];

    console.log(dayOfWeekName);
  });
