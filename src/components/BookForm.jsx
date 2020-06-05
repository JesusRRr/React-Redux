import React,{useState} from 'react';
import {createBook} from '../redux/BookDuck';
import BookService from '../service/BookService'
import AuthorLabel from './AuthorLabel';

const style='form-control mb-1';
const initialBook={
    name:'',
    isbn:'',
    edition:'',
    editorial:'',
    category:'',
    language:'',
    status:'AVAILABLE',
    bookcover:'',
    authors:[]
}
const initalAuthor={
    name:'',
    lastName:'',
    nacionality:''
}
const BookForm = () => {
    const [error,setError]=useState('');
    const [authors, setAuthors]=useState([]);
    const [author,setAuthor]=useState(initalAuthor);
    const [book, setBook]= useState(initialBook);
    
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

    const validateInputs=(entity)=>{
        const validate =(value) => value==='';
        const isCorrect=Object.values(entity).some(validate);
        return isCorrect;
    }
    const addAuthor = ()=>{
        if(validateInputs(author)){
            return
        }
       setAuthors([...authors,author]);
       setAuthor(initalAuthor);
    }

    const addBook=(e)=>{
        e.preventDefault();
        if(validateInputs(book)){
            return
        }
        setBook({...book,authors});

        //BookService.books.create(book);
        setBook(initialBook);
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
                
                {  authors.length>0 && 
                    authors.map((author,index)=>(
                        <AuthorLabel author={author} key={index}/>
                    ))
                }
            
                <h4>Add Author</h4>
                <input className={style} name="name" value={author.name} onChange={handleAuthorInputChange} placeholder="name"/>
                <input className={style} name="lastName" value={author.lastName} onChange={handleAuthorInputChange} placeholder="lastName"/>
                <input className={style} name="nacionality" value={author.nacionality} onChange={handleAuthorInputChange} placeholder="nacionality"/>
                <button type="button" className="btn btn-primary mb-2" onClick={addAuthor}>Add Author </button>
                <button className="btn btn-success btn-block">Add book</button>
            </form>
           
        </div>
    )
}

export default BookForm;
