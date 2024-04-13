

const container = document.querySelector('.container');
const input = document.querySelector('.inputs');
const submitBtn = document.querySelector('.submit');


export const addTodos = (todo) => {
    const arr = [];
    if (!todo) return null
    if (typeof todo !== 'string') {
        return null
    }
    if (todo) {
        arr.push(todo);
    }
    console.log(arr)
    return arr
};

let inputValue;
const todoList = [];

function submitHandler(node) {
    for (const todo of node) {

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
