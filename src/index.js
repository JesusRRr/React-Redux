import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/">
        <App />
    </Route>

    <Route path="/books">
        <h1>books</h1>
    </Route>

    <Route path="/newbook">
        <h1>new book</h1>
    </Route>
    
  </BrowserRouter>,
  document.getElementById('root')
);
