import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import App from './App';
import store from './redux/store'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
