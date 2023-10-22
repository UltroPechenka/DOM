'use strict';

const links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {

    const href = links[i].getAttribute("href");
    
    links[i].textContent += " (" + href + ")";
}
