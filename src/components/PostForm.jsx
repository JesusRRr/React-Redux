import React from 'react';

const PostForm = () => {

    const makePost=(e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={makePost}>
                <div className="card border-ligth ">
                    <div className="card-header mb-3">Make a Post</div>
                    <div classNane="card-body">
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


                    </div>

                </div>
            </form>
        </div>
    )
}

export default PostForm;
