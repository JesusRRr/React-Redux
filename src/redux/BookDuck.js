import BookService from "../service/BookService";

//Actions
export const GET_BOOKS='getBooks';
export const CREATE_BOOK_SUCCESS="createBook";


//Reducer
 const bookReducer=(state=[], action)=>{
    switch(action.type){
        case CREATE_BOOK_SUCCESS:{
            return [...state,action.payload]
        }
        default:{
            return state;
        }
    }
}
//Action creators
export function createBookSuccess(book){
    return {
        type:CREATE_BOOK_SUCCESS,
        payload:book
    }
}


//thunk
export const createBook = (book)=>async (dispatch)=>{
    const response = await BookService.books.create(book);
    dispatch(createBookSuccess(book));
    return response.data;
    
}

export default bookReducer;