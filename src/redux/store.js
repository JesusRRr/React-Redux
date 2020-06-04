import {createStore} from 'redux';
import bookReducer from './BookDuck' 


const store = createStore(bookReducer);

export default store;