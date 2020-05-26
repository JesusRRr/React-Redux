import {createStore} from 'redux';

const initialState ={
    todos:[
        {
            id : 1,
            name : "Go to gym",
            complete: false
        },
        {
            id : 2,
            name : "study",
            complete: false
        },
        
    ]
}

export const store = createStore(
    reducer,
    initialState,
);