let root = document.querySelector('.root');
let inp = document.querySelector('input');
const imageArr = [];

// let imageData = fetch(
//   `https://api.unsplash.com/photos/random?client_id=n2eibjmKdgZLAKVnShO7Nn6V_GuqEfE-syTt7tn3qUE`
// ).then((res) => res.json());

function createUI(data) {
  root.innerHTML = '';
  data.forEach((elm) => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = elm.urls.small;

    li.append(img);

    root.append(li);
  });
}

// for (let i = 0; i < 100; i++) {
//   imageArr.push(
//     fetch(
//       `https://api.unsplash.com/photos/random?client_id=LgC5Kv2qxx4MHE8b-DYKpsZ1VsgYSTBXZ8TY8cEEums`
//     ).then((res) => res.json())
//   );
// }
// let imageData = Promise.all(imageArr).then((value) => {
//   console.log(value);
//   createUI(value);
// });
function handleSearch(event) {
  if (event.keyCode == 13) {
    let imageData = fetch(
      `https://api.unsplash.com/search/photos?client_id=n2eibjmKdgZLAKVnShO7Nn6V_GuqEfE-syTt7tn3qUE&query=${event.target.value}`
    )
      .then((res) => res.json())
      .then((value) => {
        console.log(value.results);
        createUI(value.results);
      });
    event.target.value = '';
  }
}

inp.addEventListener('keyup', handleSearch);
