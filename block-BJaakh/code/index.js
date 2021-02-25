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

let input = document.querySelector('#text');

let root = document.querySelector('ul');

let all = document.querySelector('.All');
let active = document.querySelector('.Active');
let completed = document.querySelector('.Completed');
let clear = document.querySelector('.Clear');

let allTodos = [];
let activeBtn = 'all';

function selectTodo(event) {
  console.log(event.target.dataset.id);
  let id = event.target.dataset.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  createUI();
}

function deleteTodo(event) {
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  createUI();
}

function createUI(data = allTodos, rootElm = root) {
  rootElm.innerHTML = '';
  data.forEach((elm, index) => {
    let li = document.createElement('li');

    let inp = document.createElement('input');
    inp.type = 'checkbox';
    inp.addEventListener('click', selectTodo);
    inp.setAttribute('data-id', index);

    let p = document.createElement('p');
    p.innerText = elm.todo;

    if (elm.isDone == true) {
      p.classList.add('selected');
    }

    let div = document.createElement('div');
    div.style.width = '20px';

    let span = document.createElement('span');
    span.innerText = 'X';
    span.setAttribute('data-id', index);
    span.addEventListener('click', deleteTodo);

    div.append(span);
    li.append(inp, p, div);
    root.append(li);
  });
}

function handleEvent(event) {
  root.innerHTML = '';
  if (event.keyCode === 13 && event.target.value !== '') {
    allTodos.push({
      todo: event.target.value,
      isDone: false,
    });
    event.target.value = '';
  }
  createUI();
}

function handleEventAll(event) {
  createUI(allTodos);
}

function handleEventActive(event) {
  let activeTodo = allTodos.filter((elm) => elm.isDone == false);
  createUI(activeTodo);
  console.log(activeTodo);
  activeBtn = 'active';
  updateActiveBtn();
}
function handleEventCompleted(event) {
  let completedTodo = allTodos.filter((elm) => elm.isDone == true);
  createUI(completedTodo);
  activeBtn = 'completed';
  updateActiveBtn();
}

function handleEventClear() {
  allTodos = allTodos.filter((elm) => !elm.isDone);
  createUI();
}

function updateActiveBtn(btn = activeBtn) {
  all.classList.remove('activeButton');
  active.classList.remove('activeButton');
  completed.classList.remove('activeButton');
  if (btn == 'all') {
    all.classList.add('activeButton');
  }
  if (btn == 'active') {
    active.classList.add('activeButton');
  }
  if (btn == 'completed') {
    completed.classList.add('activeButton');
  }
}

updateActiveBtn();
input.addEventListener('keyup', handleEvent);
all.addEventListener('click', handleEventAll);
active.addEventListener('click', handleEventActive);
completed.addEventListener('click', handleEventCompleted);
clear.addEventListener('click', handleEventClear);
