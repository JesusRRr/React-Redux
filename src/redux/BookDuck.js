//Actions
export const GET_BOOKS='getBooks';
export const CREATE_BOOK="createBook";


//Reducer
export default function reducer(state=[], action){
    switch(action.type){
        case CREATE_BOOK:{
            return [...state,action.payload]
        }
        case GET_BOOKS:{
            return state;
        }
    }
}


export default function getBooks(){
    return {
        type:GET_BOOKS
    }
}

export default function createBook(book){
    return {
        type:CREATE_BOOK,
        payload:book
    }
}