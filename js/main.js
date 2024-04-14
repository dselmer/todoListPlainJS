

const container = document.querySelector('.container');
const input = document.querySelector('.inputs');
const submitBtn = document.querySelector('.submit');



let inputValue;
const todoList = [];



function createTask(todo,node) {
  let newInputTodo;
    // newInputTodo.className = 'task';
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

    taskEditBtn.addEventListener("click", function () {
       taskContiner.appendChild(newTask)

        
        updateBtn.classList.add('btn', 'updateBtn');
        updateBtn.setAttribute('type', 'button');
        updateBtn.setAttribute('value', 'update');
        btnContiner.appendChild(updateBtn);
    })

  

    newTask.addEventListener('change',function handleTododUpdate (e) {
        // let newInputTodo = e.target.value;
      
        newInputTodo = e.target.value;
     
    })

    updateBtn.addEventListener("click", function () {
        console.log("clicked");
        
        //  taskContiner.replaceChild(newInputTodo, task)
        if(!newInputTodo) {
            taskContiner.removeChild(newTask);
            btnContiner.removeChild(updateBtn);  
        }else{
            task.innerText = newInputTodo
            newInputTodo = '';
             taskContiner.removeChild(newTask);
             btnContiner.removeChild(updateBtn);
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

}



function submitHandler(node) {
    for (const todo of node) {
        createTask(todo,node);

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
