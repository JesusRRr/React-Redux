import React from 'react';
import Autocomplete from '../autocomplete';

const Page = (props) => {
    const {
        text,
        suggestions,
        onChangeText,
        onChangeSelection
    }=props; 

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="row container">
                    <div className="col" >
                        <a className="navbar-brand" href="#">Navbar</a>
                    </div>
                   
                    <div className="col justify-content-center" >
                        <Autocomplete
                            text={text}
                            suggestions={suggestions}
                            onChangeText={onChangeText}
                            onChangeSelection={onChangeSelection}
                        />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Page;
