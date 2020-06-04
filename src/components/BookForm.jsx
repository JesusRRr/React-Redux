import React,{useState} from 'react';
import {createBook} from '../redux/BookDuck';
import BookService from '../service/BookService'

const style='form-control mb-1';
const BookForm = () => {
    const [authors, setAuthors]=useState([]);

    const [author,setAuthor]=useState({
        name:'',
        lastName:'',
        nacionality:''
    });
    const [book, setBook]= useState({
        name:'',
        isbn:'',
        edition:'',
        editorial:'',
        category:'',
        language:'',
        status:'AVAILABLE',
        bookcover:'',
        authors
    });
    
    const handleInputChange=(e)=>{
        setBook(
            {
                ...book,
                [e.target.name] :e.target.value
            })
    }

    const handleAuthorInputChange=(e)=>{
        setAuthor({...author,[e.target.name] :e.target.value})
    }
    const addAuthor = ()=>{
        setAuthors([...authors,author])
    }

    const addBook=(e)=>{
        e.preventDefault();
        setBook({...book, authors});
        
        BookService.books.create(book);
        console.log("check")
    }

    return (
        <div>
            <h1>Book form</h1>
            <form onSubmit={addBook}>
                <input className={style} name="name" value={book.name} onChange={handleInputChange} placeholder="title"/>
                <input className={style} name="isbn" value={book.isbn} onChange={handleInputChange} placeholder="isbn"/>
                <input className={style} name="edition" value={book.edition} onChange={handleInputChange} placeholder="edition"/>
                <input className={style} name="editorial" value={book.editorial} onChange={handleInputChange} placeholder="editorial"/>
                <input className={style} name="category" value={book.category} onChange={handleInputChange} placeholder="category"/>
                <input className={style} name="language" value={book.language} onChange={handleInputChange} placeholder="language"/>
                <input className={style} name="bookcover" value={book.bookcover} onChange={handleInputChange} placeholder="bookcover"/>
                <h4>Add Author</h4>
                <input className={style} name="name" value={author.name} onChange={handleAuthorInputChange} placeholder="name"/>
                <input className={style} name="lastName" value={author.lastName} onChange={handleAuthorInputChange} placeholder="lastName"/>
                <input className={style} name="nacionality" value={author.nacionality} onChange={handleAuthorInputChange} placeholder="nacionality"/>
                <button className="btn btn-primary mb-2" onClick={addAuthor}>Add Author </button>
                <button className="btn btn-success btn-block">Add book</button>
            </form>
           
        </div>
    )
}

export default BookForm;
