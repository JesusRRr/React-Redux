import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import {Provider} from 'react-redux';
import {store} from './redux/store'

const App = () => {
    return (
     
            <Provider store={store}>
                <div className="container" >
                    <div className="row justify-content-center mt-3">
                        <div className="col col-md-8 col-lg-6">
                            <TodoInput/>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-3">
                        <div className="col col-md-8 col-lg-6">
                            <TodoList/>
                        </div>
                    </div>
                
                    
                   
                </div>
            </Provider>
       
    )
}
export default App
