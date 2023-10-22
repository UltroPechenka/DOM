'use strict';

const input = document.getElementById('inputText');

    input.addEventListener('blur', function() {

        const inputText = input.value;
        const wordCount = inputText.split(' ').length;

        document.getElementById('wordCount').textContent = 'Количество слов: ' + wordCount;
  });
