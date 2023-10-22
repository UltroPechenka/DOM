'use strict';

function checkPalindrome() {
    const word = document.getElementById("word-input").value;
    const reversedWord = word.split("").reverse().join("");

    if (word === reversedWord) {
      document.getElementById("result").textContent = "Палиндром";
    } else {
      document.getElementById("result").textContent = "Не палиндром";
    }
  }