import React, { useState } from 'react'
import BookService from './service/BookService'
import store from './redux/store'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import NewBook from './components/NewBook';


const App = () => {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/newbook">
                    <NewBook/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default App
