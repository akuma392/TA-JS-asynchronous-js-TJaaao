let root = document.querySelector('ul');
let input = document.querySelector("#text")
let all = document.querySelector('.All');
let active = document.querySelector('.Active');
let completed = document.querySelector('.Completed');
let clear = document.querySelector('.Clear');




function createUI(data){
root.innerHTML ="";
    data.forEach((elm) =>{
        let li = document.createElement('li');

        console.log(`https://ac-todo-api.herokuapp.com/api/todo/:${elm._id}`)
      function selectTodo(){
        fetch(`https://ac-todo-api.herokuapp.com/api/todo/:${elm._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "todo": {
                
                  "isCompleted": !elm.isCompleted
                }
              }) 
       })
       init();
    }  
    let inp = document.createElement('input');
    inp.type = 'checkbox';
    inp.addEventListener('click', selectTodo);
    // inp.setAttribute('data-id', index);

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
    // span.addEventListener('click', deleteTodo);

    div.append(span);
    li.append(inp, p, div);
    root.append(li);
    })
}



function handleEvent(event) {
    root.innerHTML = '';
    if (event.keyCode === 13 && event.target.value !== '') {
        fetch(`https://ac-todo-api.herokuapp.com/api/todo`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "todo": {
                  "title": `${event.target.value}`,
                  "isCompleted": false
                }
              }) 
          });
          init();
          event.target.value =""
    }
 
  }

  function init(){
    let todo = fetch(
        `https://ac-todo-api.herokuapp.com/api/todo`
      ).then((res) => res.json()).then((value) => {
          console.log(value.todos)
          createUI(value.todos)
      });
  }


  input.addEventListener('keyup', handleEvent);
  init();