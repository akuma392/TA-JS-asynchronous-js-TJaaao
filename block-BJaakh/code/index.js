let root = document.querySelector('ul');
let input = document.querySelector('#text');
let all = document.querySelector('.All');
let active = document.querySelector('.Active');
let completed = document.querySelector('.Completed');
let clear = document.querySelector('.Clear');

function selectTodo(id, elm) {
  fetch(`https://sleepy-falls-37563.herokuapp.com/api/todo/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      todo: {
        isCompleted: !elm.isCompleted,
      },
    }),
  })
    .then((res) => res.json())
    .then(() => {
      init();
    });
}

function deleteTodo(id, elm) {
  fetch(`https://sleepy-falls-37563.herokuapp.com/api/todo/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then(() => {
      init();
    });
}

function handleEdit(id, elm) {
  let inp = document.createElement('input');
  console.log('hello');
}
function createUI(data) {
  root.innerHTML = '';
  data.forEach((elm) => {
    let li = document.createElement('li');

    // console.log(`https://ac-todo-api.herokuapp.com/api/todo/:${elm._id}`);

    let inp = document.createElement('input');
    inp.type = 'checkbox';
    inp.addEventListener('click', () => selectTodo(elm._id, elm));

    let p = document.createElement('p');
    p.innerText = elm.title;

    if (elm.isCompleted == true) {
      p.classList.add('selected');
    }

    let div = document.createElement('div');
    div.style.width = '20px';

    let span = document.createElement('span');
    span.innerText = 'X';
    // span.setAttribute('data-id', index);
    span.addEventListener('click', () => deleteTodo(elm._id, elm));

    li.addEventListener('dblclick', () => handleEdit(elm._id, elm));
    div.append(span);
    li.append(inp, p, div);
    root.append(li);
  });
  init();
}

function handleEvent(event) {
  root.innerHTML = '';
  if (event.keyCode === 13 && event.target.value !== '') {
    fetch(`https://sleepy-falls-37563.herokuapp.com/api/todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: {
          title: `${event.target.value}`,
          isCompleted: false,
        },
      }),
    });
    init();
    event.target.value = '';
  }
}

function init() {
  let todo = fetch(`https://sleepy-falls-37563.herokuapp.com/api/todo`)
    .then((res) => res.json())
    .then((value) => {
      // console.log(value.todos);
      createUI(value.todos);
    });
}

function createUIActive(data) {
  root.innerHTML = '';
  data.forEach((elm) => {
    let li = document.createElement('li');

    // console.log(`https://ac-todo-api.herokuapp.com/api/todo/:${elm._id}`);

    let inp = document.createElement('input');
    inp.type = 'checkbox';
    inp.addEventListener('click', () => selectTodo(elm._id, elm));

    let p = document.createElement('p');
    p.innerText = elm.title;

    if (elm.isCompleted == true) {
      p.classList.add('selected');
    }

    let div = document.createElement('div');
    div.style.width = '20px';

    let span = document.createElement('span');
    span.innerText = 'X';
    // span.setAttribute('data-id', index);
    span.addEventListener('click', () => deleteTodo(elm._id, elm));

    li.addEventListener('dblclick', () => handleEdit(elm._id, elm));
    div.append(span);
    li.append(inp, p, div);
    root.append(li);
  });
  // init();
}

function handleEventAll() {
  init();
}
function handleEventActive() {
  let todo = fetch(`https://sleepy-falls-37563.herokuapp.com/api/todo`)
    .then((res) => res.json())
    .then((value) => {
      return value.todos.filter((elm) => elm.isCompleted);
    })
    .then((val) => {
      console.log(val);
      createUIActive(val);
    });
}
input.addEventListener('keyup', handleEvent);
// init();
all.addEventListener('click', handleEventAll);
active.addEventListener('click', handleEventActive);
// completed.addEventListener('click', handleEventCompleted);

// let todo = fetch(
//   `https://sleepy-falls-37563.herokuapp.com/api/todo`
// ).then((res) => res.json());
