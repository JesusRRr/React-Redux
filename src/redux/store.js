import {createStore, combineReducers} from 'redux';



const reducer = combineReducers({
    post,
    comments
});

const store = createStore(reducer);

export default store;