import React from 'react';
import {useDispatch} from 'react-redux';
import {addTodoAction} from '../redux/actions'
import {store} from '../redux/store'

const TodoInput = () => {
    let lastId = 0;
    const [todo, setTodo] = React.useState('');

    const dispatch=useDispatch();
    const addTodo = (todo)=> dispatch(addTodoAction(todo));


    const onChange = event =>{
        setTodo(event.target.value);
    }
    const onSubmit = event =>{
        event.preventDefault();
        if(todo.trim()===''){
            console.log("empty field");
            return;
        }
        addTodo({
            id:++lastId,
            name: todo,
            complete: false
        })


        console.log(store.getState());
    }

    return (
        <div>
           <form onSubmit={onSubmit}>
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="task"
                    name="todo"
                    value={todo}
                    onChange={onChange}
                />

                <button className="btn btn-dark btn-block" type="submit">
                    add                     
                </button>
                
            </form> 
        </div>
    )
}

export default TodoInput;
