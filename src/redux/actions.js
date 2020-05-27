import * as actions from './actionsType'

export const addTodoAction = (todo) =>({
    type: actions.ADD_TODO,
    payload:todo
});

export const toggleTodoAction = todoId =>({
    type: actions.TOGGLE_TODO,
    payload:todoId
});

export const delteTodoAction = todoId=>({
    type : actions.DELETE_TODO,
    payload:todoId
});