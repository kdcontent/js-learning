const toDolist = JSON.parse(localStorage.getItem('toDoList')) || [{
  taskName: 'play soccer',
  taskDueDate: '2024-05-10'
},
{
  taskName: 'do homework',
  taskDueDate: '2024-05-10'
}];

renderToDoList();
function renderToDoList() {
let todolistHTML = '';

for (let i = 0; i < toDolist.length; i++) {
const todoObject = toDolist[i];

const { taskName, taskDueDate } = todoObject;  // -> destructuring



const htmlCode = `
<div>${taskName}</div>
<div>${taskDueDate}</div>
<button onclick="
  toDolist.splice(${i}, 1);
  renderToDoList();

  saveStorage();
" class="delete-button">Delete</button>
`
todolistHTML += htmlCode;
}
console.log(todolistHTML);


document.querySelector('.js-div').innerHTML = todolistHTML;

}
function addTodo() {
  const input = document.querySelector('.js-input');
  const valueName = input.value;

  const dateInput = document.querySelector('.js-date-input');
  const dateValue = dateInput.value;


  toDolist.push({
    taskName: valueName,
    taskDueDate: dateValue,
  });

  console.log(toDolist);

  input.value = '';

  renderToDoList();

  saveStorage();
}

function saveStorage() {
  localStorage.setItem('toDoList', JSON.stringify(toDolist));
}