import * as actions from './actionsType';

const type=actions.FIND_RESULTS;

const findResults = text =>{
    return{
        type,
        payload: text
    };
};

export default findResults;