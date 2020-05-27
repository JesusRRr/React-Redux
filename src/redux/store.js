import {createStore} from 'redux';
import {reducer} from './reducer'

const initialState ={
    todos:[
        {
            id : 1000,
            name : "Go to gym",
            complete: false
        },
        {
            id : 262,
            name : "study",
            complete: false
        },
        
    ]
}

export const store = createStore(
    reducer,
    initialState,
    window.reduxDevTools && window.reduxDevTools()
);