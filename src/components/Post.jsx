import React from 'react';
import { useState } from 'react'

const Post = () => {

    const [post, setPost] = useState('');
    const [message, setMessage] = useState('');
    return (
        <div>
            <div className="card mb-2 mt-2">
                <div className="card-body">
                    <p className="card-text">{post}</p>
                </div>

                <input 
                    placeholder="write a comment"
                    className="form-control"
                />

            </div>
            
        </div>
    )
}

export default Post;
