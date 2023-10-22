'use strict';

const links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {

  const href = links[i].getAttribute("href");
  
  if (href.startsWith("http://")) {

    links[i].textContent += " " + String.fromCharCode(8594);
  }
}
