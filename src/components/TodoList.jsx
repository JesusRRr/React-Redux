import React from 'react'
import {useSelector} from 'react-redux';
import {store} from '../redux/store';
import {toggleTodoAction,delteTodoAction} from '../redux/actions'

const TodoList = () => {
    const todos = useSelector((state)=>state.todos);

    const toggle=(id)=>{
        store.dispatch(toggleTodoAction(id))
    }

    const deleteTodo=(id)=>{    
        store.dispatch(delteTodoAction(id))
    }
    return (
        <div>
            <ul>
                {todos.map((todo)=>(
                        <div key={todo.id} className="m-4">
                            <input 
                                type="checkbox"
                                checked={todo.complete}
                                onChange={()=>toggle(todo.id)}
                            />
                           <span className={todo.complete?"alert alert-success":"alert alert-dark"}>{todo.name}</span> 

                           
                           { !todo.complete &&
                           <button 
                                className="btn btn-danger btn-sm"
                                onClick={()=>deleteTodo(todo.id)}
                            >
                               x
                           </button>
                            }
                           
                        </div>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
