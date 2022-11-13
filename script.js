//
const todo = document.querySelector(".todo");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");
const todoItems = document.querySelectorAll(".todo-item");

todo.focus();

// Event listeners
addBtn.addEventListener("click", addTodo);

// Functions

function addTodo(e) {
  e.preventDefault();

  // create "text" element
  const todoTextNode = document.createTextNode(todo.value);
  const text = document.createElement("p");
  text.appendChild(todoTextNode);
  text.classList.add("text");

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

  saveTodoInLocalStorage(todo.value);
  // auto focus
  todo.value = "";
  todo.focus();
}

///////////////////////// work on delete item /////////////////////////////////////

todoItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.className === "delete-btn") {
      // remove item when delete-btn is clicked
      item.remove();
    }
  });
  item.addEventListener("dblclick", (e) => {
    item.querySelector(".text").classList.toggle("finished-todo");
  });
});

function saveTodoInLocalStorage(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
