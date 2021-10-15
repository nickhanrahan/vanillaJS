//SELECTORS

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//EVENT LISTENERS

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//FUNCTIONS

function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo")
  //create list item
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //create check button
  const compButton = document.createElement('button');
  compButton.innerHTML = '<i class="fas fa-check"></i>';
  compButton.classList.add("complete-btn");
  todoDiv.appendChild(compButton)
  //create delete button
  const delButton = document.createElement('button');
  delButton.innerHTML = '<i class="fas fa-trash"></i>';
  delButton.classList.add("delete-btn");
  todoDiv.appendChild(delButton)
  //append to todo list
  todoList.appendChild(todoDiv);
}

function deleteCheck(event) {
  const item = event.target;
  //delete item
  if (item.classList[0] === 'delete-btn') {
    //access parent element and remove
    const todo = item.parentElement;
    //animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function() {
      todo.remove();
    })
  }
  //check item
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}