import React from 'react';
import { useState } from 'react'

const Post = () => {

    const [post, setPost] = useState('');
    const [message, setMessage] = useState('');
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <p className="card-text">{post}</p>
                </div>

            </div>
            <input 
                placeholder="write a comment"
                className="form-control"
            />
        </div>
    )
}

export default Post;
