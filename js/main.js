const container = document.querySelector('.container');
const input = document.querySelector('.inputs');
const submitBtn = document.querySelector('.submit');

let inputValue;
const todoList = [];
let editModeDone = false;

function createTask(todo, node) {
    let newInputTodo;
    const taskContiner = document.createElement("div");
    container.appendChild(taskContiner);
    taskContiner.className = 'task-container';
    let task = document.createElement("h3");
    taskContiner.appendChild(task);
    task.className = 'task';
    task.innerText = todo;

    const btnContiner = document.createElement("div");
    taskContiner.appendChild(btnContiner);
    btnContiner.className = 'btn-container';

    const taskEditBtn = document.createElement("input");
    let newTask = document.createElement("input");
    const updateBtn = document.createElement("input");
    newTask.classList.add('editInput');
    newTask.setAttribute('placeholder', 'update todo...');

    taskEditBtn.addEventListener("click", function () {
        taskContiner.appendChild(newTask)
        updateBtn.classList.add('btn', 'updateBtn');
        updateBtn.setAttribute('type', 'button');
        updateBtn.setAttribute('value', 'update');
        btnContiner.appendChild(updateBtn);
    })

    newTask.addEventListener('change', function handleTododUpdate(e) {
        newInputTodo = e.target.value;
    })

    updateBtn.addEventListener("click", function () {
        if (!newInputTodo) {
            taskContiner.removeChild(newTask);
            btnContiner.removeChild(updateBtn);
        } else {
            task.innerText = newInputTodo
            newInputTodo = '';
            taskContiner.removeChild(newTask);
            btnContiner.removeChild(updateBtn);
            newTask.value = '';
        }
    });

    btnContiner.appendChild(taskEditBtn);
    taskEditBtn.classList.add('btn', 'edit');
    taskEditBtn.setAttribute('value', 'Edit');
    taskEditBtn.setAttribute('type', 'button');

    const taskDeleteBtn = document.createElement("input");
    btnContiner.appendChild(taskDeleteBtn);
    taskDeleteBtn.classList.add('btn', 'delete');
    taskDeleteBtn.setAttribute('value', 'Delete');
    taskDeleteBtn.setAttribute('type', 'button');

    taskDeleteBtn.addEventListener('click', function(){
        container.removeChild(taskContiner);
    })
}

function submitHandler(node) {
    for (const todo of node) {
        createTask(todo, node);
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
