// Selectors
const todo = document.querySelector(".todo");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");
const todoItems = document.querySelectorAll(".todo-item");

// Functions

function addTodoToLocalStorage(text) {
  /**
   * add todo to local storage:
   * - take a text as argument
   * - add todo to local storage
   * - call updateTheDom function
   */
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
  /**
   * remove todo from local storage:
   * - take a text as argument
   * - remove todo from local storage
   * - call updateTheDom function
   */
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
  /**
   * change the status of todo in local storage:
   * - take a text as argument
   * - change the status of todo in local storage
   * - call updateTheDom function
   */
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
  /**
   * clear todos from local storage:
   * - clear todos from local storage
   * - call updateTheDom function
   */
  localStorage.clear();

  updateTheDom();
}

function updateTheDom() {
  /**
   * update the dom by displaying todos stored in local storage:
   * - empty the dom
   * - get all todos from local storage
   * - loop throw todos and call insertTodoIntoDom
   */
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
  /**
   * insert a todo into the dom:
   * - take a todo as argument
   * - create (div > p + button)
   * - insert the div element into the dom
   */
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

// Event listeners

addBtn.addEventListener("click", () => {
  // call addTodoToLocalStorage with the inserted todo in form input
  addTodoToLocalStorage(todo.value);
});

todoList.addEventListener("dblclick", (event) => {
  if (event.target.tagName === "P") {
    finishedTodo = event.target.innerText;
    changeTodoStatusInLocalStorage(finishedTodo);
  }
  if (event.target.tagName === "DIV") {
    text = event.target.querySelector("p").innerText;
    changeTodoStatusInLocalStorage(text);
  }
});

todoList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    text = event.target.parentNode.querySelector("p").textContent;
    removeTodoFromLocalStorage(text);
  }
});
