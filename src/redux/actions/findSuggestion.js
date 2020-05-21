import * as actions from './actionsType';

const type=actions.FIND_SUGGESTIONS;

const findSuggestions = text =>{
    return{
        type,
        payload: text
    };
};

export default findSuggestions;