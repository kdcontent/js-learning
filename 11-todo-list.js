const todoList = [];

todoListZero();


function todoListZero() {


let toDoListHTML = '';

for (y = 0; y < todoList.length; y++) {
const todo = todoList[y];
const html =`<p>${todo}</p>`;

toDoListHTML += html;
}
console.log(toDoListHTML);

document.querySelector('.js-todo-class').innerHTML = toDoListHTML;
}

function addTodo() {
const inputElement = document.querySelector('.js-input');
const nameValue = inputElement.value;

todoList.push(nameValue);
console.log(todoList);


inputElement.value = '';
todoListZero();
}
