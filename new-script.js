const todo = document.querySelector(".todo");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");
const todoItems = document.querySelectorAll(".todo-item");

function addTodoToLocalStorage(text) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push({ text, status: false });
  localStorage.setItem("todos", JSON.stringify(todos));

  updateTheDom();
}

function removeTodoFromLocalStorage(text) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos = todos.filter((todo) => todo.text !== text);
  localStorage.setItem("todos", JSON.stringify(todos));

  updateTheDom();
}

function changeTodoStatusInLocalStorage(text) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos = todos.map((todo) => {
    return todo.text == text ? { ...todo, status: !todo.status } : todo;
  });
  localStorage.setItem("todos", JSON.stringify(todos));

  updateTheDom();
}

function clearTodosFromLocalStorage() {
  localStorage.clear();

  updateTheDom();
}

function updateTheDom() {
  todoList.innerHTML = "";
  let todos = localStorage.getItem("todos");
  if (todos) {
    parsedTodos = JSON.parse(todos);
    parsedTodos.map((todo) => {
      insertTodoIntoDom(todo);
    });
  }
}

function insertTodoIntoDom(todo) {
  // create "text" element
  const todoTextNode = document.createTextNode(todo.text);
  const text = document.createElement("p");
  text.appendChild(todoTextNode);
  text.classList.add("text");
  if (todo.status == true) {
    text.classList.add("finished-todo");
  }

  // create "delete-btn" element
  const deleteBtnTextNode = document.createTextNode("delete");
  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(deleteBtnTextNode);
  deleteBtn.classList.add("delete-btn");

  // create "todo-item" element
  const todoItem = document.createElement("div");
  todoItem.appendChild(text);
  todoItem.appendChild(deleteBtn);
  todoItem.classList.add("todo-item");

  // insert "todo-item" into "todo-list"
  todoList.appendChild(todoItem);
}

updateTheDom();
