import React from 'react';
import Page from './Page';
import {connect} from 'react-redux'


class AppBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
        }
    
        this.onChangeText=this.onChangeText.bind(this);
        this.onChangeSelection=this.onChangeSelection.bind(this);
    }

    onChangeText(text){
        this.setState({text});
    }

    onChangeSelection(text){

    }

    render(){
        const { text }= this.state;
        const { suggestion }=this.state;
       return (
        <div>
            <Page
                text={text}
                suggestion={suggestion}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
            />
        </div>
        
       ); 
    };
};

const mapStateToProps = (state)=>{
    return {
        suggestions: state.suggestions
    };
};


/*
const wrapper =connect(mapStateToProps);
const component =wrapper(Results);
*/
export default connect(mapStateToProps)(AppBar);
