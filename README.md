# todos-with-localstorage

## Project description

This app allows you to manage a todo list, as you can create todos, delete todos and change todos status (finished or unfinished). This app created using _HTML_, _CSS_ and vanilla _JavaScript_. Data will be stored in the browser using _localStorage_.

## Functionalities of the app

**addTodoToLocalStorage:**

- takes a text as argument
- create an object with (text 'string' & status 'boolean')
- add todo to localStorage
- call updateTheDom function

**removeTodoFromLocalStorage:**

- takes an index as argument
- remove todo from localStorage
- call updateTheDom function

**changeTodoStatusInLocalStorage:**

- takes an index as argument
- change todo status in localStorage (finished or not)
- call updateTheDom function
