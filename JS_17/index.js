'use strict';

const clickCountInput = document.getElementById("clickCountInput");
const paragraphs = document.getElementsByTagName("p");

let clickCount = 0;

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener("click", function() {

    clickCount++;

    clickCountInput.value = clickCount;
  });
}
