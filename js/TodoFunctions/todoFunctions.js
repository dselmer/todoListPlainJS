

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

// export const addTwo = (num) => {
//     if (typeof num !== 'number') {
//         return new Error('must be a number');
//     }
//     return num + 2;

// }






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

