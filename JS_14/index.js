'use strict';

  const paragraphs = document.getElementsByTagName("p");

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", function() {

      let number = parseInt(this.textContent);
      
      if (!isNaN(number)) {

        this.textContent = number * number;
      }
    });
  }
