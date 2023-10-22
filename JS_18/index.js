'use strict';

const divs = document.getElementsByTagName("div");

for (let i = 0; i < divs.length; i++) {

  const text = divs[i].textContent;

  if (text.length > 10) {

    const trimmedText = text.substring(0, 10) + "...";

    divs[i].textContent = trimmedText;
  }
}
