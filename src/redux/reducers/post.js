import { handleActions} from 'redux-actions';
import { createPost, getPosts} from '../actions';


export default handleActions({
    [createPost]:(state,action)=>{
        return [...state, action.payload];
    },
    [getPost]:(state,action)=>{
        return action.payload;
    }

},[])
