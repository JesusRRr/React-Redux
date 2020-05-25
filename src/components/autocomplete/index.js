import React from 'react';


class Autocomplete extends React.Component {
    render() {
        return (
            <div>
                <form class="form-inline">
                    <input 
                        className="form-control " 
                        type="text" 
                        placeholder="Search" 
                        aria-label="Search"
                    />
                </form>
            </div>
        )
    }
}

export default Autocomplete;