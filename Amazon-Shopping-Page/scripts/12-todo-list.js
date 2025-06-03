const todoList = 
[{name: "make dinner", dueDate: '2022-12-22'}, 
    {name: "wash dishes", dueDate: '2022-12-23'}];
renderTodoList(); // Initial render of the todo list

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {

    const { name, dueDate } = todoObject; // Destructuring to get name from todoObject
    const html = `
    <div>${name}</div>
    <div> ${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-button">delete</button>`;
    todoListHTML += html;
  })

  /*
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject; // Destructuring to get name from todoObject

    const html = `
    <div>${name}</div>
    <div> ${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
    " class="delete-todo-button">delete</button>`;
    todoListHTML += html;
  }
    */
  document.querySelector(".js-todo-list").innerHTML = todoListHTML; // puts the HTML into the div paragraph

  document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}

document.querySelector(".js-add-todo-button").addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value; // value helps to get the value of the input field

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate // these two lines are equivalent to the above two lines
  });

  inputElement.value = ""; // Clear the input field after adding
  renderTodoList(); // Re-render the todo list to show the new item
}
