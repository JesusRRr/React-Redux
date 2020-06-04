import React from 'react'
import BookService from './service/BookService'
import store from './redux/store'


const App = () => {
    
    React.useEffect(()=>{
        BookService.books.getAll()
            .then(res=>console.log(res.data))
        
    })
      
    return (
        <div>
            
        </div>

    )
}
export default App
