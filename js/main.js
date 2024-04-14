

const container = document.querySelector('.container');
const input = document.querySelector('.inputs');
const submitBtn = document.querySelector('.submit');



let inputValue;
const todoList = [];

function createTask(todo){
    const taskContiner = document.createElement("div");
    container.appendChild(taskContiner);
    taskContiner.className = 'task-container';
    const task = document.createElement("h3");
    taskContiner.appendChild(task);
    task.className = 'task';
    task.innerText = todo;
    const btnContiner = document.createElement("div");
    taskContiner.appendChild(btnContiner);
    btnContiner.className = 'btn-container';
    const taskEditBtn = document.createElement("input");
    btnContiner.appendChild(taskEditBtn);
    taskEditBtn.classList.add('btn','edit');
    taskEditBtn.setAttribute('value','Edit');
    taskEditBtn.setAttribute('type','button');

    const taskDeleteBtn = document.createElement("input");
    btnContiner.appendChild(taskDeleteBtn);
    taskDeleteBtn.classList.add('btn','delete');
    taskDeleteBtn.setAttribute('value','Delete');
    taskDeleteBtn.setAttribute('type','button');

}



function submitHandler(node) {
    for (const todo of node) {
        createTask(todo);
      
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
