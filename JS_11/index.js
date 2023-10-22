'use strict';

    const button = document.getElementById("addNumbers");

    const paragraphs = document.getElementsByTagName("p");

    button.addEventListener("click", function() {

    for (let i = 0; i < paragraphs.length; i++) {

      paragraphs[i].textContent += " " + (i + 1);
    }
  });

