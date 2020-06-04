import React from 'react'
import BookService from './service/BookService'
import reducer,{createBook} from './redux/BookDuck';


const App = () => {
    const addSomething =()=>{
        const res=reducer([1,2,3],createBook({
            id:1,
            name:'jesus'
        }));
        console.log(res)
    }

    return (
        <div>
            <h1>{addSomething()}</h1>
        </div>
    )
}
export default App
