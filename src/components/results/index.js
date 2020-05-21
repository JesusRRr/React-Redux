import React, { Component } from 'react';
import {connect} from 'react-redux';
import Page from './Page'


class Results extends Component {
    render(){

        const {suggestions} = this.props;
        console.log(this.props)
        return (
            <Page suggestions={suggestions}/>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        suggestions: state.suggestions
    };
};


/*
const wrapper =connect(mapStateToProps);
const component =wrapper(Results);
*/
export default connect(mapStateToProps)(Results);