import React from 'react';

const Post = () => {
    return (
        <div>
            <form>
                <div className="card border-ligth mb-3">
                    <div className="card-header">Make a Post</div>
                    <div classNane="card-body">
                        <textarea
                            className="form-control mb-3"
                            placeholder="post"
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

export default Post;
