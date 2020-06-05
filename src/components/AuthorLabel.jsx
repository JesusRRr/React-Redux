import React from 'react'

const AuthorLabel = (props) => {
    return (
        <div>
            <p className="alert alert-dark">Author: {props.author.name} {props.author.lastName}</p>
        </div>
    )
}

export default AuthorLabel;
