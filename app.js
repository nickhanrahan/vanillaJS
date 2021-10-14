//SELECTORS

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//EVENT LISTENERS

todoButton.addEventListener('click', addTodo);

//FUNCTIONS

function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo")
  //create list item
  const newTodo = document.createElement('li');
  newTodo.innerText = 'BLAHBLAHBLAH';
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