let btn = document.querySelector('.btn');
let input = document.querySelector('input');
let pic = document.querySelector('.image img');

let root = document.querySelectorAll('.root li');
let h1 = document.querySelector('h1');

function handleNext(event) {
  console.log('hello');
  let xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    `https://api.unsplash.com/photos/random?client_id=n2eibjmKdgZLAKVnShO7Nn6V_GuqEfE-syTt7tn3qUE`
  );
  xhr.onload = function () {
    let userData = JSON.parse(xhr.response);
    console.log(userData);
    pic.src = userData.urls.small;
  };
  xhr.send();
}

function displayUI(data, event) {
  h1.innerText = event.target.value;
  root.forEach((elm, i) => {
    elm.innerHTML = `<img src="${data.results[i].urls.small}" alt="" />`;
  });
}

function handleSearch(event) {
  if (event.keyCode == 13) {
    console.log(event.target.value);
    let xhr = new XMLHttpRequest();
    xhr.open(
      'GET',
      `https://api.unsplash.com/search/photos?client_id=n2eibjmKdgZLAKVnShO7Nn6V_GuqEfE-syTt7tn3qUE&query=${event.target.value}`
    );
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      console.log(userData);
      displayUI(userData, event);
      event.target.value = '';
    };
    xhr.send();
  }
}

btn.addEventListener('click', handleNext);
input.addEventListener('keyup', handleSearch);

//https://api.unsplash.com/photos/random?client_id=n2eibjmKdgZLAKVnShO7Nn6V_GuqEfE-syTt7tn3qUE

//https://api.unsplash.com/search/photos?client_id=n2eibjmKdgZLAKVnShO7Nn6V_GuqEfE-syTt7tn3qUE&query=${event.target.value}
