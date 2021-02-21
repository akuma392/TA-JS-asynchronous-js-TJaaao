let img = document.querySelector('img');
let btn = document.querySelector('button');
let fact = document.querySelector('p');

let span = document.querySelector('span');

function handleEvent(event) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://cat-fact.herokuapp.com/facts`);
  xhr.onload = function () {
    let userData = JSON.parse(xhr.response);
    let random = Math.floor(Math.random() * userData.length);
    console.log(random, userData);
    fact.innerText = userData[random].text;
    span.innerHTML = `Verfied: ${userData[random].status.verified}`;
  };
  xhr.send();
}

btn.addEventListener('click', handleEvent);
