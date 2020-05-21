import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Results from './components/results/Results';
import Details from './components/details/Details';
import store from './redux/store';

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/results" component={Results}/>
                        <Route path="/details/:itemId" component={Details}/>
                        <Redirect from="/" to="/results"/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>

    )
}
export default App
