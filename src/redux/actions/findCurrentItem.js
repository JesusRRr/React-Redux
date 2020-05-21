import * as actions from './actionsType';

const type=actions.FIND_CURRENT_ITEM;

const findCurrentItem = id =>{
    return{
        type,
        payload: id
    };
};

export default findCurrentItem;