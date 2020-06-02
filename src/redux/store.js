import {createStore, combineReducers} from 'redux';
import comments from './reducers/comments'
import post from './reducers/post'

const reducer = combineReducers({
   comments,
   post
});

const store = createStore(reducer);

export default store;