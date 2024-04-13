

const container = document.querySelector('.container');
const input = document.querySelector('.inputs');
const submitBtn = document.querySelector('.submit');
const taskContiner = document.createElement("div");
const task = document.createElement("h3");
const btnContiner = document.createElement("div");
const taskEditBtn = document.createElement("input");
const taskDeleteBtn = document.createElement("input");

let inputValue;
const todoList = [];

function createButtons(btn) {
    if (btn === taskEditBtn) {
        btnContiner.appendChild(taskEditBtn);
        taskEditBtn.classList.add('btn', 'edit');
        taskEditBtn.setAttribute('value', 'Edit');
        taskEditBtn.setAttribute('type', 'button');
        return
    }
    if (btn === taskDeleteBtn) {
        btnContiner.appendChild(taskDeleteBtn);
        taskDeleteBtn.classList.add('btn', 'delete');
        taskDeleteBtn.setAttribute('value', 'Delete');
        taskDeleteBtn.setAttribute('type', 'button');
        return
    }
}
function CreateTask(todo) {
    container.appendChild(taskContiner);
    taskContiner.className = 'task-container';
    taskContiner.appendChild(task);
    task.className = 'task';
    task.innerText = todo;
    taskContiner.appendChild(btnContiner);
    btnContiner.className = 'btn-container';
}

function submitHandler(node) {
    for (const todo of node) {
        CreateTask(todo);
        createButtons(taskEditBtn);
        createButtons(taskDeleteBtn);
    }
}

input.addEventListener("change", function (e) {
    inputValue = e.target.value;
    e.target.value = '';
});

submitBtn.addEventListener("click", function () {
    if (!inputValue) return null;
    if (!todoList.includes(inputValue)) {
        todoList.push(inputValue)
        submitHandler(todoList);
        inputValue = '';
        return todoList.length = 0;
    }
});
