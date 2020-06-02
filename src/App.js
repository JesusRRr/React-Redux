import React,{useEfect} from 'react';
import PostForm from './components/PostForm';
import Post from './components/Post'
import api from './service/api';


const App = () => {

    React.useEffect(() => {
        
    })

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col col-sm-10 col-md-10 col-lg-8">
                    <PostForm></PostForm>
                    <Post/>
                </div>

            </div>

        </div>
    )
}

const mapStateToProps =(state)=>{

}

const mapDispatchToProps={
    
}
export default App
