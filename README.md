# todos-with-localstorage

## Project description

This app allows you to manage a todo list (create todos, delete todos and change todos status).
This app created using _HTML_, _CSS_ and vanilla _JavaScript_.
Data will be stored in the browser using _localStorage_.

## Functions:

**addTodoToLocalStorage:**

- takes a text as argument
- create an object with (text & status)
- add todo to localStorage
- call updateTheDom function

**removeTodoFromLocalStorage:**

- takes an index as argument
- remove todo from localStorage
- call updateTheDom function

**changeTodoStatusInLocalStorage:**

- takes an index as argument
- change todo status in localStorage
- call updateTheDom function

**clearTodosFromLocalStorage:**

- clear todos from localStorage
- call updateTheDom function

**updateTheDom:**

- loop throw todos in localStorage and update the dom according to them

## Event listeners:

- listen to add todo button (click)
- listen to remove todo button (click)
- listen to change status (double click)
