// Load todos from localStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Render Todos
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${task}</span>
      <button onclick="deleteTodo(${index})">Delete</button>
    `;

    todoList.appendChild(li);
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add Todo
function addTodo(event) {
  event.preventDefault();

  const task = todoInput.value.trim();
  if (task === "") {
    alert("Please enter a task");
    return;
  }

  todos.push(task);
  todoInput.value = "";
  renderTodos();
}

// Delete Todo
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

// Initial Load
renderTodos();
