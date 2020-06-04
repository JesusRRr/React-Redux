import {createStore, combineReducers} from 'redux';
import bookReducer from './BookDuck' 

const reducer=combineReducers({
    bookReducer
})

const store = createStore(reducer);

export default store;