import React from 'react';


const TodoInput = () => {

    const [todo, setTodo] = React.useState('');
    const onChange = event =>{
        setTodo(event.target.value);
    }
    const onSubmit = event =>{
        event.preventDefault();
        if(todo.trim()===''){
            console.log("empty field");
            return;
        }
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
