//Actions
export const GET_BOOKS='getBooks';
export const CREATE_BOOK="createBook";


//Reducer
 const bookReducer=(state=[], action)=>{
    switch(action.type){
        case CREATE_BOOK:{
            return [...state,action.payload]
        }
        default:{
            return state;
        }
    }
}
//Action creators
export function createBook(book){
    return {
        type:CREATE_BOOK,
        payload:book
    }
}


export default bookReducer;