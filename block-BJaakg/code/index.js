let inp = document.querySelector('#text');
let rootElm = document.querySelector('ul');

let houses = document.querySelector('.houses');
let activeHouse = '';

function housesUI(data) {
  for (let i = 0; i < data.length; i++) {
    let span = document.createElement('span');

    span.innerText = data[i].name;

    if (activeHouse === data[i].name) {
      span.style.background = 'white';
      span.style.color = 'black';
      span.style.border = '1px solid black';
    }

    span.addEventListener('click', () => {
      span.classList.add('active');
      activeHouse = data[i].name;
      createUI(data[i].people);
    });
    houses.append(span);
  }
}

function createUI(data) {
  rootElm.innerHTML = '';
  data.forEach((elm) => {
    let li = document.createElement('li');
    li.classList.add('box');
    let img = document.createElement('img');
    img.classList.add('card');
    img.src = elm.image;
    let h2 = document.createElement('h2');
    h2.innerText = elm.name;
    h2.classList.add('card');
    let p = document.createElement('p');
    p.innerText = elm.description;
    let a = document.createElement('a');
    a.href = elm.wikiLink;
    let btn = document.createElement('button');
    btn.innerText = 'Learn More!';
    a.append(btn);

    li.append(img, h2, p, a);
    rootElm.append(li);
  });
}

let gotData = fetch(
  `https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json`
)
  .then((res) => res.json())
  .then((value) => {
    console.log(value.houses);
    housesUI(value.houses);
    createUI(value.houses[0].people);
  });
