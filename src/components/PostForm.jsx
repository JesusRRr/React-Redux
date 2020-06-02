import React from 'react';
import Post from './Post'

const PostForm = () => {

    const makePost=(e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={makePost}>
                <div className="card border-ligth ">
                    <div className="card-header mb-3">Make a Post</div>
                    <div className="card-body">
                        <textarea
                            className="form-control"
                            placeholder="What do you want to do today?"
                        />
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            post
                        </button>

                        <Post/>

                    </div>

                </div>
            </form>
        </div>
    )
}

export default PostForm;
