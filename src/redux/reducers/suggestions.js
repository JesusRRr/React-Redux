import * as actions from '../actions/actionsType'

const defaultState = [];

const reducer=(state=defaultState,{type, payload})=>{
    switch(type){
        case actions.FIND_SUGGESTIONS:
            return[
                {
                    id:1,
                    title: 'react'
                }
            ]
        default:
            return state;
    }
}

export default reducer;