import * as actions from './actionsType'

export function reducer(state, {type, payload}){
    switch(type){
        case actions.ADD_TODO:
            return {
                ...state,
                todos:[...state.todos, payload]
            };
        
        case actions.TOGGLE_TODO:
            return{
                ...state,
                todos: state.todos.map(todo => (todo.id===payload)?{...todo,complete: !todo.complete}: todo)
            };
        case actions.DELETE_TODO:
            return{
                ...state,
                todos:state.todos.filter(todo => todo.id!==payload)
            }
        default:
            return state;

    }
}