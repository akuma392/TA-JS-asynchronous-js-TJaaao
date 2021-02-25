let input = document.querySelector('#text');

let root = document.querySelector('ul');

let all = document.querySelector('.All');
let active = document.querySelector('.Active');
let completed = document.querySelector('.Completed');
let clear = document.querySelector('.Clear');

function handleEvent(event) {
  if (event.keyCode == 13) {
  }
}
input.addEventListener('keyup', handleEvent);

// let todo = fetch(`https://ac-todo-api.herokuapp.com/api/todo`).then((res) =>
//   res.json()
// );

let todo = fetch(
  `https://cryptic-headland-94862.herokuapp.com/https://ac-todo-api.herokuapp.com/api/todo`
).then((res) => res.json());
