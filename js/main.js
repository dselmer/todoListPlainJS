

const container = document.querySelector('.container');


// task.innerText='build app in js'

console.log('coming from main');

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
const todoList  = [];

console.log(input);

function submitHandler(node){



for (const todo of node) {
   
    const taskContiner = document.createElement("div");
    container.appendChild(taskContiner);
    taskContiner.className ='task-container';
    const task =  document.createElement("h3");
    taskContiner.appendChild(task);
    task.className='task';
    task.innerText = todo;
 
  }


}


input.addEventListener("change", function(e){
    inputValue = e.target.value;
    e.target.value = '';


  });

  submitBtn.addEventListener("click", function(){
    if(!inputValue)return null;
    todoList.push(inputValue)
    inputValue= '';
    submitHandler(todoList);
    });


  






export const getTodos = (arr) => {
    if (arr.length === 0) return null;
    return arr
}

const deleteTodos = (todoList, todo) => {
    if (todoList.includes(todo)) {

        let todoItemIndex = todoList.IndexOf(todo);
        const newTodoList = todoList.toSplice(todoItemIndex, 1)
        originalTodoList.splice(0, originalTodoList.length)
        newTodoList.map((todoItem) => {
            originalTodoList.push(todoItem)
            return
        })


    }

}



