import {addTodos,getTodos,addTwo} from './todoFunctions'
// const {getTodos} = require('./todoFunctions');

// describe("addTwo function", () => {
 
//     test("checks if todo is a string", () => {
//          expect(() => {  addTwo('s'); }).toThrow('must be a number');
    
      
//     });

// })


describe("addtodos function", () => {
    const expected = ['todo']
    test("checks todo list for added todo", () => {
        expect(addTodos('todo')).toStrictEqual(expected);
    });
    test("checks todo item was undefined ", () => {
        expect(addTodos('')).toBeFalsy();
    });
    test("checks if todo is a string", () => {
         expect(addTodos(3)).toBeFalsy();
    
    });

})

describe("gettodos function", () => {
    const expected = ['todo1', 'todo2', 'todo3']
    const emptyTodoList = [];
    test("checks todo list for added todo", () => {
        expect(getTodos(expected)).toEqual(expected);
        expect(getTodos(expected)).toHaveLength(3);
    });
    test("returns empty todoList", () => {
        expect(getTodos(emptyTodoList)).toBeFalsy();

    });

})