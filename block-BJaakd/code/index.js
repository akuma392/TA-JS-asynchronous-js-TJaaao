let input = document.querySelector('input');

let h1 = document.querySelector('h1');
let root = document.querySelector('ul');

function displayUI(data, event) {
  root.innerHTML = '';

  if (data.length > 9) {
    for (let i = 0; i < 9; i++) {
      let li = document.createElement('li');

      li.innerHTML = ` <img src="${data[i].urls.small}" alt="" />`;
      root.append(li);
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      let li = document.createElement('li');

      li.innerHTML = ` <img src="${data[i].urls.small}" alt="" />`;
      root.append(li);
    }
  }
}

function handleSearch(event) {
  if (event.keyCode == 13) {
    console.log(event.target.value);
    let title = event.target.value;

    h1.innerText =
      title.toLowerCase().charAt(0).toUpperCase() +
      title.toLowerCase().slice(1, title.length);
    let imageData = fetch(
      `https://api.unsplash.com/search/photos?client_id=n2eibjmKdgZLAKVnShO7Nn6V_GuqEfE-syTt7tn3qUE&query=${event.target.value}`
    ).then((resp) => resp.json());
    let imgArr = imageData.then((value) => {
      console.log(value.results);
      displayUI(value.results, event);
    });
    console.log(imageData);
    setTimeout(() => (event.target.value = ''), 600);
  }
}

input.addEventListener('keyup', handleSearch);

// function handleSearch(event) {
//     if (event.keyCode == 13) {
//       console.log(event.target.value);
//       let xhr = new XMLHttpRequest();
//       xhr.open(
//         'GET',
//         `https://api.unsplash.com/search/photos?client_id=n2eibjmKdgZLAKVnShO7Nn6V_GuqEfE-syTt7tn3qUE&query=${event.target.value}`
//       );
//       xhr.onload = function () {
//         let userData = JSON.parse(xhr.response);
//         console.log(userData);
//         displayUI(userData, event);
//         event.target.value = '';
//       };
//       xhr.send();
//     }
//   }

//   btn.addEventListener('click', handleNext);
//   input.addEventListener('keyup', handleSearch);
